// TKM game - Google reporting (experiment, v0.3)
//
// This script lives inside a Google Sheet in YOUR school Google account. The test page in
// Canvas sends each answer here, and this script writes it into the Sheet. The game also
// asks here which chapters are unlocked. Nothing goes anywhere else.
//
// Setup steps: SECTION 2 of "READ ME FIRST - Canvas setup.txt".
//
// The tabs:
// - Analysis: a chart of each skill, % right and % wrong on the first try, and the numbers.
// - Settings: "Unlocked through chapter" (the game picks up a change the next time it opens)
//   and "Accept answers" (FALSE pauses reporting; the game keeps answers and sends them later).
// - Students: join code, name, Path. Only codes listed here are accepted.
// - Summary: live tables by student, chapter and skill, and the most-missed items.
// - Answer data: one row per answered question. Don't edit it while students are playing.
//
// Updating from an earlier version: paste this file over the old one, reload the Sheet, click
// TKM game > 1. Set up this Sheet, then Deploy > Manage deployments > pencil > Version:
// New version > Deploy (the /exec link stays the same).
//
// Every comment in this file starts with // on each line, and every line is short, so a
// copy and paste can't break it.

var VERSION = "0.3";
var TAB = { analysis: "Analysis", settings: "Settings", students: "Students", summary: "Summary",
            data: "Answer data" };
var OLD_DATA_TAB = "Answers"; // the name before v0.3; setup renames it
var DATA_REF = "'" + TAB.data + "'!"; // Sheets renames this in every formula if the tab is renamed

// The skills the game asks about: code, a short name for the chart, and the standard.
var SKILLS = [
  ["9.DSR.C.1", "Evidence", "Draw several pieces of evidence from a text to support claims, " +
    "conclusions, and inferences"],
  ["9.RL.1.A.1", "Theme", "Explain stated or implied themes"],
  ["9.RL.1.A.2", "Theme development", "Analyze the development of themes over a text and the " +
    "relationship of characters, setting, and plot to them"],
  ["9.RL.2.B.2", "Word choice and tone", "Explain how word choice, syntax, tone, and voice " +
    "shape the meaning of a text"],
  ["9.RL.3.B.1", "Setting, plot, character", "Explain the relationships among literary " +
    "elements, including how the setting shapes the plot and characters"]
];
var COLOR_RIGHT = "#1b9e77"; // green and orange: easy to tell apart, also for colorblind readers
var COLOR_WRONG = "#d95f02";
var ANSWER_HEADERS = ["Received", "Join code", "Student", "Answered at", "Item", "Chapter", "Skill",
                      "Right first try (1 = yes)", "Picked", "Seconds"];
var CODE_ALPHABET = "23456789ABCDEFGHJKMNPQRSTVWXYZ"; // no 0/O, 1/I/L or U, so codes are easy to type
var MAX_BATCH = 100;

// -- the menu --
function onOpen() {
  SpreadsheetApp.getUi().createMenu("TKM game")
    .addItem("1. Set up this Sheet", "setup")
    .addItem("2. Make join codes for new students", "makeJoinCodes")
    .addToUi();
}

function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  PropertiesService.getScriptProperties().setProperty("sheetId", ss.getId());
  var st = tab_(ss, TAB.settings);
  if (st.getLastRow() === 0) {
    st.getRange(1, 1, 3, 2).setValues([
      ["Unlocked through chapter", 3],
      ["Accept answers (TRUE or FALSE)", true],
      ["Class name", "English 9"]
    ]);
  }
  st.getRange(4, 1, 1, 2).setValues([["Script version", VERSION]]);
  var stu = tab_(ss, TAB.students);
  if (stu.getLastRow() === 0) {
    stu.getRange(1, 1, 1, 4).setValues([["Join code", "Student name", "Path (1 or 2)", "Notes"]]);
    stu.setFrozenRows(1);
  }
  // the answers: kept (and renamed) from an earlier version, or a new tab
  var ans = ss.getSheetByName(TAB.data);
  if (!ans && ss.getSheetByName(OLD_DATA_TAB)) ans = ss.getSheetByName(OLD_DATA_TAB).setName(TAB.data);
  if (!ans) ans = ss.insertSheet(TAB.data);
  if (ans.getLastRow() === 0) {
    ans.getRange(1, 1, 1, ANSWER_HEADERS.length).setValues([ANSWER_HEADERS]);
    ans.setFrozenRows(1);
  }
  PropertiesService.getScriptProperties().setProperty("dataTabId", String(ans.getSheetId()));
  var sum = tab_(ss, TAB.summary);
  if (sum.getLastRow() === 0) {
    // Kept to short lines on purpose: a copy and paste can break a very long line in two.
    sum.getRange(1, 1, 1, 13).setValues([["By student", "", "", "", "By chapter", "", "", "",
      "By skill", "", "", "", "Most-missed items (3+ answers)"]]);
    var pct = ", count(E) 'Questions', avg(H) '% right first try'";
    var table = function (col, name) {
      var sel = "select " + col + ", count(E), avg(H) where " + col + " is not null" +
        " group by " + col + " order by " + col + " label " + col + " '" + name + "'" + pct;
      return '=IFERROR(QUERY(' + DATA_REF + 'A2:J,"' + sel + '",0),"No answers yet")';
    };
    sum.getRange("A2").setFormula(table("C", "Student"));
    sum.getRange("E2").setFormula(table("F", "Chapter"));
    sum.getRange("I2").setFormula(table("G", "Skill"));
    var items = "select E, count(E), avg(H) where E is not null group by E" +
      " label E 'Item', count(E) 'Answers', avg(H) '% right first try'";
    sum.getRange("M2").setFormula('=IFERROR(QUERY(QUERY(' + DATA_REF + 'A2:J,"' + items + '",0),' +
      '"select * where Col2 >= 3 order by Col3 asc limit 15",1),"Not enough answers yet")');
    ["C:C", "G:G", "K:K", "O:O"].forEach(function (c) { sum.getRange(c).setNumberFormat("0%"); });
    sum.setFrozenRows(1);
  }
  var an = analysis_(ss);
  // tab order: Analysis first, Answer data last
  ss.setActiveSheet(ans); ss.moveActiveSheet(ss.getNumSheets());
  ss.setActiveSheet(an); ss.moveActiveSheet(1);
  toast_("Set up. Next: type student names in the Students tab (column B), " +
    "then TKM game > 2. Make join codes.");
}

// The Analysis tab: a 100% stacked bar for each skill (right / wrong on the first try) and,
// under it, the numbers it is drawn from. Setup draws it again each time, so it stays current.
function analysis_(ss) {
  var an = ss.getSheetByName(TAB.analysis) || ss.insertSheet(TAB.analysis);
  an.getCharts().forEach(function (c) { an.removeChart(c); });
  an.clear();
  var n = SKILLS.length, height = 110 + 46 * n;
  var top = Math.ceil(height / 21) + 2; // the table starts under the chart (rows are 21 px)
  an.getRange(top, 1).setValue("The numbers behind the chart (they update by themselves)")
    .setFontWeight("bold");
  an.getRange(top + 1, 1, 1, 6).setValues([["Skill", "Right first try", "Wrong first try",
    "Questions answered", "Code", "What the standard says"]]).setFontWeight("bold");
  var col = DATA_REF + "$G$2:$G", right = DATA_REF + "$H$2:$H";
  SKILLS.forEach(function (sk, i) {
    var r = top + 2 + i;
    an.getRange(r, 1).setValue(sk[1] + " (" + sk[0] + ")");
    an.getRange(r, 5).setValue(sk[0]);
    an.getRange(r, 6).setValue(sk[2]);
    an.getRange(r, 4).setFormula("=COUNTIF(" + col + ",$E" + r + ")");
    an.getRange(r, 2).setFormula('=IF($D' + r + '=0,"",AVERAGEIF(' + col + ",$E" + r + "," +
      right + "))");
    an.getRange(r, 3).setFormula('=IF($D' + r + '=0,"",1-$B' + r + ")");
  });
  an.getRange(top + 2, 2, n, 2).setNumberFormat("0%");
  an.setColumnWidth(1, 250); an.setColumnWidth(6, 520);
  [2, 3, 4, 5].forEach(function (c) { an.setColumnWidth(c, 110); });
  var chart = an.newChart().asBarChart()
    .addRange(an.getRange(top + 1, 1, n + 1, 3))
    .setNumHeaders(1)
    .setStacked()
    .setRange(0, 1)
    .setTitle("Skills: % right and wrong on the first try")
    .setLegendPosition(Charts.Position.TOP)
    .setOption("hAxis.format", "0%")
    .setOption("series", {
      0: { color: COLOR_RIGHT, dataLabel: "value" },
      1: { color: COLOR_WRONG, dataLabel: "value" }
    })
    .setOption("width", 800)
    .setOption("height", height)
    .setPosition(1, 1, 0, 0)
    .build();
  an.insertChart(chart);
  return an;
}

function makeJoinCodes() {
  var sh = ss_().getSheetByName(TAB.students), last = sh.getLastRow();
  if (last < 2) { toast_("Type student names in the Students tab (column B) first."); return; }
  var rows = sh.getRange(2, 1, last - 1, 3).getValues(), used = {}, made = 0;
  rows.forEach(function (r) { if (r[0]) used[cleanCode_(r[0])] = true; });
  rows.forEach(function (r) {
    if (!r[0] && String(r[1]).trim()) {
      var c;
      do { c = newCode_(); } while (used[cleanCode_(c)]);
      used[cleanCode_(c)] = true; r[0] = c; made++;
    }
    if (String(r[1]).trim() && !r[2]) r[2] = 1;
  });
  sh.getRange(2, 1, rows.length, 3).setValues(rows);
  CacheService.getScriptCache().remove("students");
  toast_(made ? "Made " + made + " join code" + (made === 1 ? "" : "s") + "."
              : "Every student already has a code.");
}

// -- the web app: the game talks to these two --
function doGet(e) {
  var p = (e && e.parameter) || {};
  try {
    if (p.op === "settings") return json_(settings_(cleanCode_(p.code)));
    return json_({ ok: true, app: "tkm-report", version: VERSION });
  } catch (err) {
    return json_({ ok: false, error: "server", detail: String((err && err.message) || err) });
  }
}

function doPost(e) {
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    return json_(receive_(body));
  } catch (err) {
    return json_({ ok: false, error: "server", detail: String((err && err.message) || err) });
  }
}

function settings_(code) {
  var s = readSettings_(), stu = code ? findStudent_(code) : null;
  return {
    ok: true, known: !!stu, firstName: stu ? firstName_(stu.name) : "",
    path: stu ? stu.path : 1, unlockedThrough: s.unlocked, accepting: s.accepting
  };
}

function receive_(body) {
  var code = cleanCode_(body && body.code);
  var batch = String((body && body.batch) || "").replace(/[^a-z0-9-]/gi, "").slice(0, 64);
  var list = Array.isArray(body && body.answers) ? body.answers.slice(0, MAX_BATCH) : [];
  if (!readSettings_().accepting) return { ok: false, error: "paused" };
  var stu = findStudent_(code);
  if (!stu) return { ok: false, error: "unknown-code" };
  if (!batch || !list.length) return { ok: false, error: "empty" };
  var cache = CacheService.getScriptCache(), lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    // a batch the game sends twice (its first answer got lost on the way back) is written once
    if (cache.get("b:" + batch)) return { ok: true, saved: 0, duplicate: true };
    var now = new Date();
    var rows = list.map(function (a) {
      a = a || {};
      return [now, code, stu.name, when_(a.at, now), text_(a.item, 40), num_(a.chapter), text_(a.skill, 20),
              a.right ? 1 : 0, text_(a.pick, 10), num_(a.secs)];
    });
    var sh = dataTab_();
    sh.getRange(sh.getLastRow() + 1, 1, rows.length, ANSWER_HEADERS.length).setValues(rows);
    cache.put("b:" + batch, "1", 21600);
    return { ok: true, saved: rows.length };
  } finally {
    lock.releaseLock();
  }
}

// -- helpers --
function ss_() {
  var id = PropertiesService.getScriptProperties().getProperty("sheetId");
  return id ? SpreadsheetApp.openById(id) : SpreadsheetApp.getActiveSpreadsheet();
}
function tab_(ss, name) { return ss.getSheetByName(name) || ss.insertSheet(name); }
// the answers tab, found by its id, so it still works if someone renames it
function dataTab_() {
  var ss = ss_(), id = PropertiesService.getScriptProperties().getProperty("dataTabId");
  var tabs = ss.getSheets();
  for (var i = 0; id && i < tabs.length; i++) if (String(tabs[i].getSheetId()) === id) return tabs[i];
  return ss.getSheetByName(TAB.data) || ss.getSheetByName(OLD_DATA_TAB);
}
function readSettings_() {
  var v = ss_().getSheetByName(TAB.settings).getRange(1, 2, 2, 1).getValues();
  var unlocked = Math.max(0, Math.min(31, Math.floor(Number(v[0][0]) || 0)));
  return { unlocked: unlocked, accepting: String(v[1][0]).toUpperCase() !== "FALSE" };
}
function findStudent_(code) {
  if (!code) return null;
  var cache = CacheService.getScriptCache(), hit = cache.get("students"), map;
  if (hit) map = JSON.parse(hit);
  else {
    map = {};
    var sh = ss_().getSheetByName(TAB.students), last = sh.getLastRow();
    if (last >= 2) sh.getRange(2, 1, last - 1, 3).getValues().forEach(function (r) {
      var c = cleanCode_(r[0]);
      if (c && String(r[1]).trim()) map[c] = { name: String(r[1]).trim(), path: Number(r[2]) === 2 ? 2 : 1 };
    });
    cache.put("students", JSON.stringify(map), 60); // a code you add by hand works within a minute
  }
  return map[code] || null;
}
// "Ana Rivera" or Canvas's "Rivera, Ana" -> "Ana"
function firstName_(name) {
  var n = String(name || "").trim(), comma = n.indexOf(",");
  if (comma >= 0) n = n.slice(comma + 1).trim();
  return n.split(/\s+/)[0] || "";
}
function cleanCode_(c) { return String(c || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12); }
function newCode_() {
  var s = "";
  for (var i = 0; i < 6; i++) s += CODE_ALPHABET.charAt(Math.floor(Math.random() * CODE_ALPHABET.length));
  return s.slice(0, 3) + "-" + s.slice(3);
}
// text from a student's device: short, and never read as a formula
function text_(v, max) {
  var s = String(v == null ? "" : v).slice(0, max);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}
function num_(v) { var n = Number(v); return isFinite(n) ? Math.round(n * 10) / 10 : ""; }
function when_(ms, now) {
  var n = Number(ms);
  return isFinite(n) && Math.abs(n - now.getTime()) < 14 * 86400000 ? new Date(n) : now;
}
function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
function toast_(msg) { try { SpreadsheetApp.getActiveSpreadsheet().toast(msg, "TKM game", 8); } catch (e) {} }
