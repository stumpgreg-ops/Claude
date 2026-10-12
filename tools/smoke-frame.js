/* Headless test of the Canvas frame (v5.18.1): the embed is the Page's full width and 500 px tall, so every screen
   must fit a frame that short without scrolling. node tools/build-games.js, then node tools/smoke-frame.js.
   In dist/ody at 1000 x 500 and 760 x 500 it checks: the title, mode and episode screens fit; the Level 1 how-to is
   ONE window with a Start button (no Skip, no "1 of 9"); the reading pop-up fits on a maze level and on a mode level
   (its how-to and passage scroll in their own boxes, "Got it — play" in view); the side panel fits; during play the
   side panel's "Main menu" button and Esc pause the level and ask first; "Keep playing" goes on; "Main menu" goes
   back to the title screen with the saved level kept. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var repo = path.join(__dirname, ".."), shots = path.join(__dirname, "shots"), root = path.join(repo, "dist", "ody");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", mp3: "audio/mpeg", webp: "image/webp", glb: "model/gltf-binary" };
var srv = http.createServer(function (req, res) {
  var f = path.join(root, decodeURIComponent(url.parse(req.url).pathname));
  if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, function (err, buf) {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": MIME[f.split(".").pop()] || "application/octet-stream" }); res.end(buf);
  });
});
(async function () {
  if (!fs.existsSync(path.join(root, "index.html"))) { console.log("FAIL run node tools/build-games.js first"); process.exit(1); }
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var fails = [];
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  for (var W of [1000, 760]) {
    var H = 500, page = await browser.newPage({ viewport: { width: W, height: H } }), errors = [];
    page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
    var tag = W + "x" + H;
    var fit = function () {
      return page.evaluate(function () {
        var out = {};
        Array.prototype.forEach.call(document.querySelectorAll(".screen"), function (x) { if (!x.classList.contains("hidden")) out[x.id] = x.scrollHeight - x.clientHeight; });
        ["read-card", "tut-card", "hud"].forEach(function (id) { var el = document.getElementById(id); if (el && el.offsetParent) { var r = el.getBoundingClientRect(); out[id] = Math.max(el.scrollHeight - el.clientHeight, Math.round(r.bottom - innerHeight), Math.round(-r.top)); } });
        out.page = document.documentElement.scrollHeight - innerHeight;
        return out;
      });
    };
    var allFit = function (o) { return Object.keys(o).every(function (k) { return o[k] <= 1; }); };
    await page.goto(base + "index.html", { waitUntil: "load" });
    await page.evaluate(function () { localStorage.clear(); });
    await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(800);
    var t = await fit();
    await page.click('#title-screen .card[data-family="ODY"]');
    await page.waitForSelector("#mode-screen:not(.hidden)"); await page.waitForTimeout(200);
    var m = await fit();
    await page.click('#mode-packs .card[data-gamemode="ALL"]');
    await page.waitForSelector("#skill-screen:not(.hidden)"); await page.waitForTimeout(200);
    var s = await fit();
    check(allFit(t) && allFit(m) && allFit(s), tag + ": the title, mode and episode screens fit the frame without scrolling (px over): " + JSON.stringify({ title: t, mode: m, episode: s }));
    await page.click("#btn-skill-start"); await page.waitForTimeout(400);
    if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
    await page.waitForSelector("#tut-overlay:not(.hidden)", { timeout: 15000 }).catch(function () {});
    await page.waitForTimeout(700);
    var tut = await page.evaluate(function () {
      return { kicker: document.getElementById("tut-kicker").textContent, title: document.getElementById("tut-title").textContent, items: document.querySelectorAll("#tut-body li").length,
        btn: document.getElementById("tut-skip").textContent, text: document.getElementById("tut-body").textContent };
    });
    var tf = await fit();
    await page.screenshot({ path: path.join(shots, "frame-" + tag + "-tut.png") });
    check(!/of \d/.test(tut.kicker) && tut.items >= 6 && /^Start Level 1$/.test(tut.btn) && /Odysseus/.test(tut.title) && /Circe's wolves/.test(tut.text) && !/Hati|Sol's|school/.test(tut.text) && allFit(tf),
      tag + ": the Level 1 how-to is one window with a Start button, in Odyssey words, and it fits: " + JSON.stringify({ tut: { kicker: tut.kicker, title: tut.title, items: tut.items, btn: tut.btn }, fit: tf }));
    await page.click("#tut-skip");
    await page.waitForFunction(function () { var s = window.SolScene; return s && s.claim && s.readOpen; }, null, { timeout: 20000 }).catch(function () {});
    await page.waitForTimeout(300);
    var r1 = await fit(), go1 = await page.evaluate(function () { var r = document.getElementById("read-go").getBoundingClientRect(); return r.bottom <= innerHeight && r.top >= 0; });
    await page.click("#read-go"); await page.waitForTimeout(500);
    var p1 = await fit();
    /* a mode level's reading pop-up (its long how-to) */
    await page.evaluate(function () { var b = document.getElementById("btn-next"); b.dataset.goto = "2"; b.click(); });
    await page.waitForFunction(function () { var s = window.SolScene; return s && s.night === 2 && s.claim && s.readOpen; }, null, { timeout: 20000 }).catch(function () {});
    await page.waitForTimeout(400);
    var r2 = await fit(), go2 = await page.evaluate(function () { var r = document.getElementById("read-go").getBoundingClientRect(); return r.bottom <= innerHeight && r.top >= 0; });
    await page.screenshot({ path: path.join(shots, "frame-" + tag + "-read2.png") });
    check(allFit(r1) && go1 && allFit(p1) && allFit(r2) && go2, tag + ": the reading pop-up fits on a maze level and a mode level with \"Got it — play\" in view, and the side panel fits: " + JSON.stringify({ maze: r1, play: p1, mode: r2 }));
    await page.click("#read-go"); await page.waitForTimeout(600);
    /* leaving a level: the button, Keep playing, Esc, Main menu */
    var q0 = await page.evaluate(function () { var b = document.getElementById("btn-quit"), r = b.getBoundingClientRect(); var hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); return { shown: !!b.offsetParent, top: hit === b }; });
    await page.click("#btn-quit"); await page.waitForTimeout(200);
    var q1 = await page.evaluate(function () { var s = window.SolScene; return { ask: !!document.querySelector("#quit-overlay:not(.hidden)"), paused: s.scene.isPaused() }; });
    await page.screenshot({ path: path.join(shots, "frame-" + tag + "-quit.png") });
    await page.click("#quit-stay"); await page.waitForTimeout(200);
    var q2 = await page.evaluate(function () { var s = window.SolScene; return { ask: !!document.querySelector("#quit-overlay:not(.hidden)"), paused: s.scene.isPaused(), night: s.night }; });
    await page.keyboard.press("Escape"); await page.waitForTimeout(200);
    var q3 = await page.evaluate(function () { return !!document.querySelector("#quit-overlay:not(.hidden)"); });
    await page.click("#quit-go"); await page.waitForTimeout(600);
    var q4 = await page.evaluate(function () {
      var hid = function (id) { var e = document.getElementById(id); return !e || e.classList.contains("hidden"); };
      return { play: !hid("play"), title: !hid("title-screen"), ask: !hid("quit-overlay"), canvas: !!document.querySelector("#game-root canvas"), save: (document.getElementById("save-line") || {}).textContent || "" };
    });
    check(q0.shown && q0.top && q1.ask && q1.paused && !q2.ask && !q2.paused && q3 && !q4.play && q4.title && !q4.ask && !q4.canvas,
      tag + ": \"Main menu\" in the side panel (and Esc) pauses the level and asks; Keep playing goes on; Main menu goes back to the title screen: " + JSON.stringify({ button: q0, ask: q1, stay: q2, esc: q3, menu: q4 }));
    console.log("errors (" + tag + "):", errors.length ? errors : "none");
    check(errors.length === 0, tag + ": no page errors");
    await page.close();
  }
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
