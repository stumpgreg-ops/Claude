/* Smoke test for the Google reporting experiment: node tools/smoke-google-report.js
   Runs tools/google-report/Code.gs in Node with a small stand-in for Google's Sheets, cache, lock and web-app
   services, serves it the way Apps Script does (a 302 to another address that answers with CORS), and drives
   tools/google-report/test-game.html inside a "course page" frame on a different address, as in Canvas.
   Checks: Sheet setup and join codes; connect and join (wrong code, right code); answers reach the Answers tab
   with the student's name; an answer made offline waits and is sent later; a batch whose reply was lost is
   written once; a teacher's unlock change shows the next passage; pausing keeps answers until reporting is
   back on; text from a device is never stored as a formula; state survives a reload. Then builds the Canvas zip
   (tools/build-google-test.js) and checks its page: the link comes from TKM-GoogleTest-link.js, an answer
   reaches the Sheet, and a missing link file is named. */
"use strict";
var fs = require("fs"), path = require("path"), http = require("http"), vm = require("vm");
var chromium = require("playwright").chromium;

var dir = path.join(__dirname, "google-report");
var fails = 0;
require("child_process").execFileSync(process.execPath, [path.join(__dirname, "build-google-test.js")], { stdio: "inherit" });
function check(ok, what) { console.log((ok ? "  ok   " : "  FAIL ") + what); if (!ok) fails++; }

/* ── a stand-in for the Apps Script services Code.gs uses ── */
function colNum(s) { var n = 0; for (var i = 0; i < s.length; i++) n = n * 26 + s.charCodeAt(i) - 64; return n; }
function makeSheet(name) {
  var data = [], formulas = {};
  var sh = {
    name: name, data: data, formulas: formulas,
    getLastRow: function () { var n = data.length; while (n && data[n - 1].every(function (v) { return v === "" || v == null; })) n--; return n; },
    setFrozenRows: function () {},
    getRange: function (r, c, nr, nc) {
      if (typeof r === "string") {
        var m = /^([A-Z]+)(\d*)(?::([A-Z]+))?$/.exec(r);
        r = m[2] ? +m[2] : 1; c = colNum(m[1]); nr = 1; nc = 1;
      }
      nr = nr || 1; nc = nc || 1;
      return {
        setValues: function (v) {
          for (var i = 0; i < nr; i++) { while (data.length < r + i) data.push([]); for (var j = 0; j < nc; j++) data[r - 1 + i][c - 1 + j] = v[i][j]; }
        },
        getValues: function () {
          var out = [];
          for (var i = 0; i < nr; i++) { var row = []; for (var j = 0; j < nc; j++) { var x = (data[r - 1 + i] || [])[c - 1 + j]; row.push(x == null ? "" : x); } out.push(row); }
          return out;
        },
        setFormula: function (f) { formulas[String.fromCharCode(64 + c) + r] = f; },
        setNumberFormat: function () {}
      };
    }
  };
  return sh;
}
var tabs = {}, props = {}, cache = {}, toasts = [];
var ss = {
  getId: function () { return "sheet-1"; },
  getSheetByName: function (n) { return tabs[n] || null; },
  insertSheet: function (n) { return (tabs[n] = makeSheet(n)); },
  toast: function (m) { toasts.push(m); }
};
var ctx = {
  console: console, JSON: JSON, Math: Math, Date: Date, String: String, Number: Number, Array: Array, isFinite: isFinite,
  SpreadsheetApp: {
    getActiveSpreadsheet: function () { return ss; }, openById: function () { return ss; },
    getUi: function () { var m = { addItem: function () { return m; }, addToUi: function () {} }; return { createMenu: function () { return m; } }; }
  },
  PropertiesService: { getScriptProperties: function () { return { getProperty: function (k) { return props[k] || null; }, setProperty: function (k, v) { props[k] = v; } }; } },
  CacheService: { getScriptCache: function () { return { get: function (k) { return cache[k] || null; }, put: function (k, v) { cache[k] = v; }, remove: function (k) { delete cache[k]; } }; } },
  LockService: { getScriptLock: function () { return { waitLock: function () {}, releaseLock: function () {} }; } },
  ContentService: { MimeType: { JSON: "json" }, createTextOutput: function (s) { return { text: s, setMimeType: function () { return this; } }; } }
};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dir, "Code.gs"), "utf8"), ctx, { filename: "Code.gs" });

/* ── the Sheet, set up the way the READ ME says ── */
ctx.setup();
check(tabs.Settings && tabs.Students && tabs.Answers && tabs.Summary, "setup makes the four tabs");
check(Object.keys(tabs.Summary.formulas).length === 4, "Summary gets its four live tables");
tabs.Students.getRange(2, 2, 3, 1).setValues([["Ana Rivera"], ["Ben Ortiz"], ["Lee, Cy"]]);
ctx.makeJoinCodes();
var codes = tabs.Students.getRange(2, 1, 3, 1).getValues().map(function (r) { return r[0]; });
check(codes.every(function (c) { return /^[2-9A-HJKMNP-TV-Z]{3}-[2-9A-HJKMNP-TV-Z]{3}$/.test(c); }) && new Set(codes).size === 3, "three different, easy-to-type join codes: " + codes.join(" "));
ctx.makeJoinCodes();
check(/already has a code/.test(toasts[toasts.length - 1]), "making codes again keeps the codes students have");
var ANA = codes[0];
var cy = JSON.parse(ctx.doGet({ parameter: { op: "settings", code: codes[2] } }).text);
check(cy.known && cy.firstName === "Cy", "a name pasted from Canvas as \"Lee, Cy\" greets the student as Cy");
function answers() { return tabs.Answers.getLastRow() - 1; }
function setSetting(row, v) { tabs.Settings.getRange(row, 2).setValues([[v]]); }

/* ── serve it like Apps Script: /exec answers with a 302 to another address, which answers with CORS ── */
var outputs = {}, nextId = 1, PORTS = { exec: 8301, echo: 8302, file: 8303, course: 8304, built: 8305 };
function servers() {
  var exec = http.createServer(function (req, res) {
    var u = new URL(req.url, "http://x"), body = "";
    req.on("data", function (d) { body += d; });
    req.on("end", function () {
      if (u.pathname !== "/exec") { res.writeHead(404); return res.end(); }
      var out = req.method === "POST" ? ctx.doPost({ postData: { contents: body } })
                                      : ctx.doGet({ parameter: Object.fromEntries(u.searchParams) });
      var n = nextId++; outputs[n] = out.text;
      res.writeHead(302, { Location: "http://127.0.0.1:" + PORTS.echo + "/echo?id=" + n, "Access-Control-Allow-Origin": "*" });
      res.end();
    });
  }).listen(PORTS.exec);
  var echo = http.createServer(function (req, res) {
    var n = new URL(req.url, "http://x").searchParams.get("id");
    res.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
    res.end(outputs[n] || "{}");
  }).listen(PORTS.echo);
  var file = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync(path.join(dir, "test-game.html")));
  }).listen(PORTS.file);
  var course = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end('<h3>Course page</h3><iframe id="f" src="http://127.0.0.1:' + PORTS.file + '/test-game.html" width="100%" height="650"></iframe>');
  }).listen(PORTS.course);
  return [exec, echo, file, course];
}

(async function () {
  var srv = servers(), browser = await chromium.launch();
  try {
    var bctx = await browser.newContext({ viewport: { width: 900, height: 800 } });
    var page = await bctx.newPage();
    var errors = [];
    page.on("pageerror", function (e) { errors.push(e.message); });
    await page.goto("http://localhost:" + PORTS.course + "/");
    var f = function () { return page.frames().find(function (x) { return x.url().indexOf(":" + PORTS.file) > 0; }); };
    async function waitFor(fn, what) {
      for (var i = 0; i < 80; i++) { if (await fn()) return true; await page.waitForTimeout(100); }
      check(false, "timed out: " + what); return false;
    }
    async function bar() { return (await f().locator("#bar").innerText()).replace(/\s+/g, " "); }
    async function sendNow() { await f().evaluate(function () { document.querySelector("details").open = true; }); await f().locator("#sendnow").click(); }
    async function pick(qid, i) { await f().locator('.q[data-q="' + qid + '"] .choice[data-i="' + i + '"]').click(); }

    /* connect and join */
    await f().locator("#url").fill("http://localhost:" + PORTS.exec + "/exec");
    await f().locator("#go").click();
    await f().locator("#code").waitFor();
    check(true, "the teacher connects the page to the Sheet");
    await f().locator("#code").fill("ZZZ-999"); await f().locator("#go").click();
    await waitFor(async function () { return /isn't on your teacher's list/.test(await f().locator("main").innerText()); }, "wrong code");
    check(true, "a code that isn't on the list is refused");
    await f().locator("#code").fill(ANA.toLowerCase().replace("-", " ")); await f().locator("#go").click();
    await f().locator("#bar").waitFor();
    var h = await f().locator("h1").innerText();
    check(/Ana/.test(h), "the right code (typed in lower case, with a space) greets the student by first name: " + h);
    check(await f().locator("section.card").count() === 3, "chapters 1 to 3 are open, so three passages show");

    /* answers reach the Sheet */
    await pick("P1-Q1", 2); await pick("P1-Q2", 1);
    await waitFor(async function () { return /All answers sent/.test(await bar()); }, "first answers sent");
    var rows = tabs.Answers.getRange(2, 1, answers(), 10).getValues();
    check(answers() === 2, "two answers, two rows in Answers");
    check(rows[0][2] === "Ana Rivera" && rows[0][4] === "P1-Q1" && rows[0][5] === 1 && rows[0][6] === "9.DSR.C.1" && rows[0][7] === 1, "row 1: Ana, P1-Q1, chapter 1, skill 9.DSR.C.1, right first try");
    check(rows[1][7] === 0 && rows[1][8] === "B", "row 2: wrong first try, picked B");

    /* offline: the answer waits, then goes */
    await bctx.route("**/exec*", function (r) { r.abort(); });
    await pick("P2-Q1", 0);
    await waitFor(async function () { return /Waiting to send: 1/.test(await bar()); }, "offline answer waits");
    check(/Can't reach your teacher's Sheet/.test(await f().locator("#problem").innerText()), "the page says it can't reach the Sheet and the answer is saved");
    check(answers() === 2, "nothing written while offline");
    await bctx.unroute("**/exec*");
    await f().locator("summary").click(); await f().locator("#sendnow").click();
    await f().locator("#refresh").click(); await page.waitForTimeout(400);
    check(await f().evaluate(function () { return document.querySelector("details").open; }), "the teacher panel stays open when the page redraws");
    await waitFor(async function () { return /All answers sent/.test(await bar()); }, "offline answer sent later");
    check(answers() === 3, "back online: the waiting answer is written");

    /* the Sheet saves a batch but the reply is lost: sent again, written once */
    await bctx.route("**/exec*", async function (r) {
      if (r.request().method() === "POST") { await r.fetch(); return r.abort(); }
      return r.continue();
    });
    await pick("P2-Q2", 0);
    await waitFor(async function () { return /Waiting to send: 1/.test(await bar()); }, "lost reply");
    check(answers() === 4, "the Sheet wrote the answer although the reply was lost");
    await bctx.unroute("**/exec*");
    await sendNow();
    await waitFor(async function () { return /All answers sent/.test(await bar()); }, "resend after lost reply");
    check(answers() === 4, "sending the same batch again doesn't write it twice");

    /* the teacher unlocks chapter 4 in the Sheet */
    setSetting(1, 4);
    await f().locator("#refresh").click();
    await waitFor(async function () { return await f().locator("section.card").count() === 4; }, "unlock");
    check(true, "after the teacher sets chapter 4, the fourth passage shows");

    /* the teacher pauses reporting */
    setSetting(2, false);
    await pick("P4-Q1", 1);
    await waitFor(async function () { return /paused reporting/.test(await f().locator("#problem").innerText()); }, "paused");
    check(answers() === 4, "paused: nothing written, the answer waits");
    setSetting(2, true);
    await sendNow();
    await waitFor(async function () { return /All answers sent/.test(await bar()); }, "unpaused");
    check(answers() === 5, "reporting back on: the waiting answer is written");

    /* reload keeps the student and the count */
    await page.reload();
    await waitFor(async function () { return f() && await f().locator("#bar").count() && /Sent to your teacher: 5/.test(await bar()); }, "reload");
    check(true, "after a reload the student is still joined and 5 answers show as sent");

    /* text from a device is never a formula */
    var r = JSON.parse(ctx.doPost({ postData: { contents: JSON.stringify({ code: ANA, batch: "x1", answers: [{ item: "=HYPERLINK(\"http://x\")", chapter: 1, skill: "+1", right: true, pick: "@A" }] }) } }).text);
    var last = tabs.Answers.getRange(answers() + 1, 1, 1, 10).getValues()[0];
    check(r.ok && last[4].charAt(0) === "'" && last[6].charAt(0) === "'" && last[8].charAt(0) === "'", "item, skill and pick text starting with = + @ are stored as plain text");
    check(JSON.parse(ctx.doPost({ postData: { contents: "not json" } }).text).error === "server", "a broken request gets an error reply, not a crash");

    /* the Canvas zip's files (tools/build-google-test.js): the link comes from TKM-GoogleTest-link.js */
    var built = path.join(__dirname, "..", "dist", "canvas", "google-test"), linkJs = null;
    var bsrv = http.createServer(function (req, res) {
      var name = decodeURIComponent(new URL(req.url, "http://x").pathname.slice(1));
      if (name === "TKM-GoogleTest-link.js") {
        if (linkJs === null) { res.writeHead(404); return res.end(); }
        res.writeHead(200, { "Content-Type": "text/javascript" }); return res.end(linkJs);
      }
      if (!/^[\w.-]+$/.test(name) || !fs.existsSync(path.join(built, name))) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { "Content-Type": /\.js$/.test(name) ? "text/javascript" : "text/html" });
      res.end(fs.readFileSync(path.join(built, name)));
    }).listen(PORTS.built);
    srv.push(bsrv);
    var shipped = fs.readFileSync(path.join(built, "TKM-GoogleTest-link.js"), "utf8");
    check(/window\.TKM_SHEET_URL = "";/.test(shipped), "the zip's link file ships empty, ready for the teacher's link");
    linkJs = shipped.replace('window.TKM_SHEET_URL = "";', 'window.TKM_SHEET_URL = "http://localhost:' + PORTS.exec + '/exec";');
    var p2 = await bctx.newPage();
    p2.on("pageerror", function (e) { errors.push("built: " + e.message); });
    await p2.setContent('<iframe id="f" src="http://127.0.0.1:' + PORTS.built + '/TKM-GoogleTest.html" width="100%" height="650"></iframe>');
    var bf = function () { return p2.frames().find(function (x) { return x.url().indexOf(":" + PORTS.built) > 0; }); };
    await bf().locator("#code").waitFor();
    check(await bf().locator("#sol-boot").count() === 0, "built page: the loading screen goes away and the join screen shows (no link box)");
    await bf().locator("#code").fill(codes[1]); await bf().locator("#go").click();
    await bf().locator("#bar").waitFor();
    var before = answers();
    await bf().locator('.q[data-q="P1-Q1"] .choice[data-i="2"]').click();
    for (var k = 0; k < 80 && answers() === before; k++) await p2.waitForTimeout(100);
    check(answers() === before + 1 && tabs.Answers.getRange(answers() + 1, 3).getValues()[0][0] === "Ben Ortiz", "built page: Ben's answer reaches the Sheet");
    linkJs = null;
    var p3 = await bctx.newPage();
    await p3.setContent('<iframe id="f" src="http://127.0.0.1:' + PORTS.built + '/TKM-GoogleTest.html" width="100%" height="650"></iframe>');
    var cf = function () { return p3.frames().find(function (x) { return x.url().indexOf(":" + PORTS.built) > 0; }); };
    var miss = false;
    for (var k2 = 0; k2 < 50 && !miss; k2++) { await p3.waitForTimeout(100); miss = /Can't find TKM-GoogleTest-link\.js/.test(await cf().locator("body").innerText()); }
    check(miss, "built page without the link file says which file to upload");

    check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.join("; ") : ""));
  } finally {
    await browser.close();
    srv.forEach(function (s) { s.close(); });
  }
  console.log(fails ? fails + " check(s) failed" : "All checks passed");
  process.exit(fails ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
