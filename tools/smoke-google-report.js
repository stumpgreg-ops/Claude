/* Smoke test for the Google reporting experiment: node tools/smoke-google-report.js
   Runs tools/google-report/Code.gs in Node with a small stand-in for Google's Sheets, cache, lock and web-app
   services, serves it the way Apps Script does (a 302 to another address that answers with CORS), and drives
   tools/google-report/test-game.html inside a "course page" frame on a different address, as in Canvas.
   Checks: Sheet setup and join codes; connect and join (wrong code, right code); answers reach the Answer data tab
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
var nextSheetId = 100;
function makeSheet(name) {
  var data = [], formulas = {}, charts = [], validations = {}, cf = [], merges = {}, borders = {};
  var range = function (r, c, nr, nc) {
    nr = nr || 1; nc = nc || 1;
    var rg = {
      row: r, col: c, rows: nr, cols: nc,
      setValues: function (v) {
        for (var i = 0; i < nr; i++) { while (data.length < r + i) data.push([]); for (var j = 0; j < nc; j++) data[r - 1 + i][c - 1 + j] = v[i][j]; }
        return rg;
      },
      setValue: function (v) { return rg.setValues([[v]]); },
      getValues: function () {
        var out = [];
        for (var i = 0; i < nr; i++) { var row = []; for (var j = 0; j < nc; j++) { var x = (data[r - 1 + i] || [])[c - 1 + j]; row.push(x == null ? "" : x); } out.push(row); }
        return out;
      },
      setFormula: function (f) { formulas[colName(c) + r] = f; return rg; },
      setNumberFormat: function () { return rg; },
      setFontWeight: function () { return rg; },
      setBackground: function () { return rg; },
      setFontSize: function () { return rg; },
      setFontStyle: function () { return rg; },
      setHorizontalAlignment: function () { return rg; },
      setVerticalAlignment: function () { return rg; },
      setBorder: function () { rg.border = Array.prototype.slice.call(arguments); borders[colName(c) + r] = rg.border; return rg; },
      breakApart: function () { delete merges[colName(c) + r]; return rg; },
      merge: function () { merges[colName(c) + r] = { rows: nr, cols: nc }; return rg; },
      setDataValidation: function (v) { validations[colName(c) + r] = v; return rg; }
    };
    return rg;
  };
  var sh = {
    name: name, data: data, formulas: formulas, charts: charts, validations: validations, id: nextSheetId++,
    cf: function () { return cf; }, merges: merges, borders: borders, frozen: 0, rowHeights: {},
    setRowHeight: function (r, h) { sh.rowHeights[r] = h; },
    setConditionalFormatRules: function (rules) { cf = rules; },
    getName: function () { return sh.name; },
    getSheetId: function () { return sh.id; },
    setName: function (n) { delete tabs[sh.name]; sh.name = n; tabs[n] = sh; return sh; },
    getLastRow: function () { var n = data.length; while (n && data[n - 1].every(function (v) { return v === "" || v == null; })) n--; return n; },
    setFrozenRows: function (n) { sh.frozen = n; },
    setColumnWidth: function () {},
    hidden: [],
    hideColumns: function (c) { sh.hidden.push(c); },
    clear: function () {
      data.length = 0;
      [formulas, validations].forEach(function (o) { Object.keys(o).forEach(function (k) { delete o[k]; }); });
      return sh;
    },
    getCharts: function () { return charts.slice(); },
    removeChart: function (ch) { charts.splice(charts.indexOf(ch), 1); },
    insertChart: function (ch) { charts.push(ch); },
    newChart: function () {
      var spec = { calls: {}, options: {}, ranges: [] }, b = {};
      ["asBarChart", "setNumHeaders", "setStacked", "setRange", "setTitle", "setLegendPosition", "setPosition"].forEach(function (m) {
        b[m] = function () { spec.calls[m] = Array.prototype.slice.call(arguments); return b; };
      });
      b.addRange = function (rg) { spec.ranges.push(rg); return b; };
      b.setOption = function (k, v) { spec.options[k] = v; return b; };
      b.build = function () { return spec; };
      return b;
    },
    getRange: function (r, c, nr, nc) {
      if (typeof r === "string") {
        var m = /^([A-Z]+)(\d*)(?::([A-Z]+))?$/.exec(r);
        return range(m[2] ? +m[2] : 1, colNum(m[1]), 1, 1);
      }
      return range(r, c, nr, nc);
    }
  };
  return sh;
}
function colName(c) { var s = ""; while (c > 0) { var m = (c - 1) % 26; s = String.fromCharCode(65 + m) + s; c = Math.floor((c - 1) / 26); } return s; }
var tabs = {}, order = [], props = {}, cache = {}, toasts = [], active = null;
function tabNames() { return order.map(function (t) { return t.name; }); }
var ss = {
  getId: function () { return "sheet-1"; },
  getSheetByName: function (n) { return tabs[n] || null; },
  getSheets: function () { return order.slice(); },
  getNumSheets: function () { return order.length; },
  insertSheet: function (n) { var t = makeSheet(n); tabs[n] = t; order.push(t); return t; },
  setActiveSheet: function (t) { active = t; return t; },
  moveActiveSheet: function (pos) { order.splice(order.indexOf(active), 1); order.splice(pos - 1, 0, active); },
  deleteSheet: function (t) { delete tabs[t.name]; order.splice(order.indexOf(t), 1); },
  toast: function (m) { toasts.push(m); }
};
var ctx = {
  console: console, JSON: JSON, Math: Math, Date: Date, String: String, Number: Number, Array: Array, isFinite: isFinite,
  SpreadsheetApp: {
    getActiveSpreadsheet: function () { return ss; }, openById: function () { return ss; },
    BorderStyle: { SOLID_THICK: "thick" },
    newDataValidation: function () {
      var v = {}, b = {
        requireValueInRange: function (rg, dd) { v.range = rg; v.dropdown = dd; return b; },
        requireDate: function () { v.date = true; return b; },
        setHelpText: function (t) { v.help = t; return b; },
        setAllowInvalid: function (x) { v.allowInvalid = x; return b; },
        build: function () { return v; }
      };
      return b;
    },
    newConditionalFormatRule: function () {
      var v = {}, b = {};
      ["whenFormulaSatisfied", "setBackground", "setRanges"].forEach(function (m) {
        b[m] = function () { v[m] = Array.prototype.slice.call(arguments); return b; };
      });
      b.build = function () { return v; };
      return b;
    },
    getUi: function () { var m = { addItem: function () { return m; }, addToUi: function () {} }; return { createMenu: function () { return m; } }; }
  },
  Charts: { Position: { TOP: "top" } },
  PropertiesService: { getScriptProperties: function () { return { getProperty: function (k) { return props[k] || null; }, setProperty: function (k, v) { props[k] = v; } }; } },
  CacheService: { getScriptCache: function () { return { get: function (k) { return cache[k] || null; }, put: function (k, v) { cache[k] = v; }, remove: function (k) { delete cache[k]; } }; } },
  LockService: { getScriptLock: function () { return { waitLock: function () {}, releaseLock: function () {} }; } },
  ContentService: { MimeType: { JSON: "json" }, createTextOutput: function (s) { return { text: s, setMimeType: function () { return this; } }; } }
};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dir, "Code.gs"), "utf8"), ctx, { filename: "Code.gs" });

/* ── the Sheet, set up the way the READ ME says ── */
/* a Sheet set up with v0.2 had an "Answers" tab; setup renames it and keeps its rows */
ss.insertSheet("Answers").getRange(1, 1, 2, 3).setValues([["Received", "Join code", "Student"], ["old", "ABC-DEF", "Old Row"]]);
ss.insertSheet("By student").getRange(1, 1, 1, 2).setValues([["Student:", "Old Pick"]]); // as v0.4-v0.6 made it
ctx.setup();
var DATA = "Answer data";
check(!tabs.Answers && tabs[DATA] && tabs[DATA].getRange(2, 3).getValues()[0][0] === "Old Row", "an old Answers tab is renamed Answer data, and its rows are kept");
tabs[DATA].getRange(2, 1, 1, 3).setValues([["", "", ""]]);
ctx.setup();
check(!tabs["By student"], "the old By student tab is gone (it is part of Analysis now)");
check(JSON.stringify(tabNames()) === JSON.stringify(["Analysis", "Grades", "Settings", "Students", "Summary", DATA]), "tabs in order: " + tabNames().join(", "));
check(Object.keys(tabs.Summary.formulas).length === 4 && Object.keys(tabs.Summary.formulas).every(function (k) { return tabs.Summary.formulas[k].indexOf("'Answer data'!A2:J") > 0; }), "Summary's four live tables read 'Answer data'");
var an = tabs.Analysis, chart = an.charts[0];
var nSkills = vm.runInContext("SKILLS.length", ctx);
check(an.charts.length === 1, "Analysis has one chart (setup run twice doesn't add a second)");
check(an.getRange(1, 2).getValues()[0][0] === "Whole class", "Analysis starts on Whole class");
check(an.formulas.A2 === '="Skills for: "&IF(OR($B$1="",$B$1="Whole class"),"the whole class",$B$1)', "the heading over the chart names the choice: " + an.formulas.A2);
check(chart && chart.calls.asBarChart && chart.calls.setStacked && JSON.stringify(chart.calls.setRange) === "[0,1]", "the chart is a stacked bar from 0 to 100%");
var cr = chart && chart.ranges[0];
check(cr && cr.cols === 3 && cr.rows === nSkills + 1 && chart.calls.setNumHeaders[0] === 1, "the chart reads the skill names and the right/wrong columns, one bar per skill (" + nSkills + ")");
check(chart && chart.options.series[0].color !== chart.options.series[1].color && chart.options.series[0].dataLabel === "value", "right and wrong have their own colours and show their percentages");
var hdr = an.getRange(cr.row, 1, 1, 6).getValues()[0];
check(hdr[1] === "Right first try" && hdr[2] === "Wrong first try", "the table under the chart: " + hdr.join(" | "));
var r0 = cr.row + 1, f = an.formulas;
var CRIT = 'IF(OR($B$1="",$B$1="Whole class"),"*",$B$1)';
check(f["D" + r0] === "=COUNTIFS('Answer data'!$G$2:$G,$E" + r0 + ",'Answer data'!$C$2:$C," + CRIT + ")" &&
  f["B" + r0] === '=IF($D' + r0 + '=0,"",AVERAGEIFS(\'Answer data\'!$H$2:$H,\'Answer data\'!$G$2:$G,$E' + r0 + ",'Answer data'!$C$2:$C," + CRIT + "))" &&
  f["C" + r0] === '=IF($D' + r0 + '=0,"",1-$B' + r0 + ')',
  "each skill row counts the chosen student's answers, or everyone's (\"*\") for Whole class, and works out % right and wrong");
check(an.getRange(r0, 1).getValues()[0][0] === "Evidence (9.DSR.C.1)", "skills are listed by name and code: " + an.getRange(r0, 1).getValues()[0][0]);
check(cr.row * 21 > 3 * 21 + 110 + 46 * nSkills && chart.calls.setPosition[0] === 3, "the chart sits under the heading and the table below the chart");
tabs.Students.getRange(2, 2, 3, 1).setValues([["Ana Rivera"], ["Ben Ortiz"], ["Lee, Cy"]]);
ctx.makeJoinCodes();
var codes = tabs.Students.getRange(2, 1, 3, 1).getValues().map(function (r) { return r[0]; });
check(codes.every(function (c) { return /^[2-9A-HJKMNP-TV-Z]{3}-[2-9A-HJKMNP-TV-Z]{3}$/.test(c); }) && new Set(codes).size === 3, "three different, easy-to-type join codes: " + codes.join(" "));
ctx.makeJoinCodes();
check(/already has a code/.test(toasts[toasts.length - 1]), "making codes again keeps the codes students have");
var ANA = codes[0];

/* the drop-down at the top of Analysis */
var by = tabs.Analysis, bv = by.validations.B1;
check(bv && bv.dropdown && bv.range.row === 1 && bv.range.col === 26 && bv.allowInvalid === false, "B1 is a drop-down of the list in hidden column Z");
check(by.formulas.Z1 === '={"Whole class";IFERROR(FILTER(TRIM(Students!B2:B),TRIM(Students!B2:B)<>""))}' && by.hidden.indexOf(26) >= 0,
  "the list is Whole class, then every name in Students, read live: " + by.formulas.Z1);
check(by.merges.B1 && by.merges.B1.cols === 3 && by.borders.B1 && by.borders.B1[7] === "thick" && by.frozen === 1 && by.rowHeights[1] >= 40,
  "the drop-down is big: B1:D1 merged, thick outline, a tall row, frozen at the top");
check(by.getRange(1, 2).getValues()[0][0] === "Whole class", "after Make join codes, the drop-down still shows Whole class");
var bc = by.charts[0], bhead = bc.ranges[0].row, br0 = bhead + 1;
check(by.charts.length === 1 && bc.ranges[0].rows === nSkills + 1, "one chart for the choice, one bar per skill");
var gh = Object.keys(by.data).map(Number).filter(function (i) { return by.data[i] && by.data[i][0] === "Student"; })[0] + 1;
var ghead = by.getRange(gh, 1, 1, 3 + nSkills).getValues()[0];
check(ghead[0] === "Student" && ghead[2] === "All skills" && ghead[3] === "Evidence (9.DSR.C.1)" && gh > bhead + nSkills, "the grid under it: " + ghead.slice(0, 4).join(" | ") + " ...");
var g1 = gh + 1, gRows = Object.keys(by.formulas).filter(function (k) { return /^A\d+$/.test(k) && +k.slice(1) >= g1; }).length;
check(gRows >= 40, "the grid has a row for every student and room for more (" + gRows + " rows)");
check(by.formulas["A" + g1] === '=IF(TRIM(Students!$B2)="","",TRIM(Students!$B2))', "grid row 1 is the first name in Students: " + by.formulas["A" + g1]);
check(by.formulas["D" + g1] === '=IF($A' + g1 + '="","",IF(COUNTIFS(\'Answer data\'!$C$2:$C,$A' + g1 + ",'Answer data'!$G$2:$G,\"9.DSR.C.1\")=0,\"\",AVERAGEIFS('Answer data'!$H$2:$H,'Answer data'!$C$2:$C,$A" + g1 + ",'Answer data'!$G$2:$G,\"9.DSR.C.1\")))",
  "each grid cell is that student's % right on that skill: " + by.formulas["D" + g1]);
var rules = by.cf(), c1 = "C" + g1;
var HI = 'IF(N(INDIRECT("Settings!B5"))>1,N(INDIRECT("Settings!B5"))/100,N(INDIRECT("Settings!B5")))';
var LO = 'IF(N(INDIRECT("Settings!B6"))>1,N(INDIRECT("Settings!B6"))/100,N(INDIRECT("Settings!B6")))';
check(rules.length === 3 &&
  rules[0].whenFormulaSatisfied[0] === "=AND(ISNUMBER(" + c1 + ")," + c1 + ">=" + HI + ")" &&
  rules[1].whenFormulaSatisfied[0] === "=AND(ISNUMBER(" + c1 + ")," + c1 + ">=" + LO + ")" &&
  rules[2].whenFormulaSatisfied[0] === "=ISNUMBER(" + c1 + ")" &&
  rules[0].setRanges[0][0].row === g1 && rules[0].setRanges[0][0].col === 3 && rules[0].setRanges[0][0].cols === 1 + nSkills,
  "grid colours read the bands from Settings B5 (green) and B6 (yellow); below yellow is red");
check(JSON.stringify(rules.map(function (r) { return r.setBackground[0]; })) === JSON.stringify(["#b7e1cd", "#fce8b2", "#f4c7c3"]), "the colours are green, yellow, red");
var setRow = function (r) { return tabs.Settings.getRange(r, 1, 1, 2).getValues()[0]; };
check(setRow(5)[1] === 80 && setRow(6)[1] === 60 && /^Green from/.test(setRow(5)[0]) && /^Yellow from/.test(setRow(6)[0]), "Settings starts with Green from 80 and Yellow from 60");
var hd = by.formulas["A" + (gh - 1)];
check(/Settings!\$B\$5/.test(hd) && /Settings!\$B\$6/.test(hd) && /red below/.test(hd), "the grid heading names the bands from Settings");
/* the same band rule, worked out the way Sheets does: 80, 80% (0.8) and 0.8 all mean 0.8 */
function bandOf(x) { var n = typeof x === "number" ? x : 0; return n > 1 ? n / 100 : n; }
check(bandOf(80) === 0.8 && bandOf(0.8) === 0.8 && bandOf(75) === 0.75 && bandOf("") === 0, "a band typed as 80, 80% or 0.8 means 80%");
tabs.Settings.getRange(5, 2).setValues([[90]]); tabs.Settings.getRange(6, 2).setValues([[70]]);
ctx.setup();
check(setRow(5)[1] === 90 && setRow(6)[1] === 70, "running setup again keeps the teacher's bands (90 and 70)");
by = tabs.Analysis;
/* the Grades tab */
var gt = tabs.Grades, gv = function (r, c, n) { return gt.getRange(r, c, 1, n || 1).getValues()[0]; };
check(JSON.stringify(gt.getRange(4, 1, 4, 3).getValues()) === JSON.stringify([["Minutes answering questions", 60, 1], ["Questions answered", 50, 1], ["Days played", 3, 0], ["% right on the first try", 70, 0]]) &&
  gv(9, 1, 2)[1] === 100, "Grades starts with the teacher screen's goals: 60 minutes, 50 questions (counted), 3 days, 70% (not counted), out of 100");
check(gt.validations.B10 && gt.validations.B10.date && gt.validations.B10.allowInvalid === false, "Count work from / through take dates only");
check(/^=IF\(ISNUMBER\(\$B\$10\),INT\(\$B\$10\),DATE\(2000,1,1\)\)$/.test(gt.formulas.H10) && /\+1,DATE\(2100,1,1\)\)$/.test(gt.formulas.H11) && gt.hidden.indexOf(8) >= 0,
  "empty dates mean from the start / up to now (hidden helpers in column H)");
var gr1 = 15, gf = gt.formulas;
console.log("        row 15 formulas:\n" + ["A", "B", "C", "D", "E", "F"].map(function (c) { return "          " + c + ": " + gf[c + gr1]; }).join("\n"));
check(/COUNTIFS\('Answer data'!\$C\$2:\$C,\$A15,'Answer data'!\$D\$2:\$D,">="&\$H\$10,'Answer data'!\$D\$2:\$D,"<"&\$H\$11\)/.test(gf.C15), "questions count only answers between the dates");
check(/SUMIFS\('Answer data'!\$J\$2:\$J/.test(gf.B15) && /UNIQUE\(FILTER\(INT\('Answer data'!\$D\$2:\$D\)/.test(gf.D15), "minutes add up the seconds; days count different dates");
check(gf.F15.indexOf("N($C$4)*IF(N($B$4)<=0,1,MIN(1,N($B15)/N($B$4)))") > 0 && gf.F15.indexOf("N($C$7)*IF(IF(N($B$7)>1,N($B$7)/100,N($B$7))<=0,1,MIN(1,N($E15)/IF(N($B$7)>1") > 0 && gf.F15.indexOf("/SUM($C$4:$C$7),1)") > 0,
  "grade = points x each goal's weighted share of its target (capped at full credit) / total weight");
/* the grade, worked out the same way in JavaScript for a student with 30 minutes, 50 questions, 2 days, 80% */
function gradeOf(v, goals, pts) {
  var sw = 0, got = 0;
  goals.forEach(function (g, i) { var t = i === 3 && g[0] > 1 ? g[0] / 100 : g[0]; sw += g[1]; got += g[1] * (t <= 0 ? 1 : Math.min(1, v[i] / t)); });
  return sw <= 0 ? "" : Math.round(10 * pts * got / sw) / 10;
}
check(gradeOf([30, 50, 2, 0.8], [[60, 1], [50, 1], [3, 0], [70, 0]], 100) === 75 && gradeOf([30, 50, 2, 0.8], [[60, 1], [50, 1], [3, 1], [70, 1]], 100) === 79.2,
  "a worked example: 30 minutes and 50 questions = 75/100; counting days and % right too = 79.2/100");
var grules = gt.cf();
check(grules.length === 3 && grules[0].whenFormulaSatisfied[0].indexOf("F15/$B$9>=") > 0 && grules[0].setRanges[0][0].col === 6, "grades are coloured by the Settings bands, as a share of the points");
gt.getRange(4, 2, 1, 2).setValues([[45, 2]]); gt.getRange(9, 2).setValues([[20]]); gt.getRange(10, 2).setValues([[new Date(2026, 10, 9)]]);
ctx.setup();
gt = tabs.Grades;
check(gt.getRange(4, 2, 1, 2).getValues()[0].join() === "45,2" && gt.getRange(9, 2).getValues()[0][0] === 20 && gt.getRange(10, 2).getValues()[0][0] instanceof Date,
  "the teacher's criteria (45 minutes, weight 2, out of 20, from 11/9) are kept when the tab is redrawn");
by = tabs.Analysis;
by.getRange(1, 2).setValues([["Ben Ortiz"]]);
tabs.Students.getRange(5, 2).setValues([["Dee Park"]]); ctx.makeJoinCodes(); ctx.setup();
check(tabs.Analysis.getRange(1, 2).getValues()[0][0] === "Ben Ortiz", "a picked student stays picked when the tab is redrawn");
check(tabs.Students.getRange(5, 1).getValues()[0][0] && tabs.Analysis.charts.length === 1, "a student added later gets a code; Analysis still has one chart");
tabs.Analysis.getRange(1, 2).setValues([["Nobody Here"]]); ctx.setup();
check(tabs.Analysis.getRange(1, 2).getValues()[0][0] === "Whole class", "a choice that is no longer a student goes back to Whole class");
var cy = JSON.parse(ctx.doGet({ parameter: { op: "settings", code: codes[2] } }).text);
check(cy.known && cy.firstName === "Cy", "a name pasted from Canvas as \"Lee, Cy\" greets the student as Cy");
function answers() { return tabs[DATA].getLastRow() - 1; }
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
    var rows = tabs[DATA].getRange(2, 1, answers(), 10).getValues();
    check(answers() === 2, "two answers, two rows in Answer data");
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
    var last = tabs[DATA].getRange(answers() + 1, 1, 1, 10).getValues()[0];
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
    check(answers() === before + 1 && tabs[DATA].getRange(answers() + 1, 3).getValues()[0][0] === "Ben Ortiz", "built page: Ben's answer reaches the Sheet");
    linkJs = null;
    var p3 = await bctx.newPage();
    await p3.setContent('<iframe id="f" src="http://127.0.0.1:' + PORTS.built + '/TKM-GoogleTest.html" width="100%" height="650"></iframe>');
    var cf = function () { return p3.frames().find(function (x) { return x.url().indexOf(":" + PORTS.built) > 0; }); };
    var miss = false;
    for (var k2 = 0; k2 < 50 && !miss; k2++) { await p3.waitForTimeout(100); miss = /Can't find TKM-GoogleTest-link\.js/.test(await cf().locator("body").innerText()); }
    check(miss, "built page without the link file says which file to upload");

    /* the teacher renames the data tab: answers still reach it (found by its id) */
    tabs[DATA].setName("My answers"); DATA = "My answers";
    var before2 = answers();
    var rr = JSON.parse(ctx.doPost({ postData: { contents: JSON.stringify({ code: ANA, batch: "rename-1", answers: [{ item: "P1-Q1", chapter: 1, skill: "9.DSR.C.1", right: true, pick: "C" }] }) } }).text);
    check(rr.ok && answers() === before2 + 1, "after the teacher renames the data tab, answers still reach it");

    check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.join("; ") : ""));
  } finally {
    await browser.close();
    srv.forEach(function (s) { s.close(); });
  }
  console.log(fails ? fails + " check(s) failed" : "All checks passed");
  process.exit(fails ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
