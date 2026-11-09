// TKM game - Google reporting (experiment, v0.2)
//
// This script lives inside a Google Sheet in YOUR school Google account. The test page in
// Canvas sends each answer here, and this script writes it into the Sheet. The game also
// asks here which chapters are unlocked. Nothing goes anywhere else.
//
// Setup steps: SECTION 2 of "READ ME FIRST - Canvas setup.txt".
//
// The tabs:
// - Settings: "Unlocked through chapter" (the game picks up a change the next time it opens)
//   and "Accept answers" (FALSE pauses reporting; the game keeps answers and sends them later).
// - Students: join code, name, Path. Only codes listed here are accepted.
// - Answers: one row per answered question. Don't edit it while students are playing.
// - Summary: live tables by student, chapter and skill, and the most-missed items.
//
// Every comment in this file starts with // on each line, and every line is short, so a
// copy and paste can't break it.

var VERSION = "0.2";
var TAB = { settings: "Settings", students: "Students", answers: "Answers", summary: "Summary" };
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
    st.getRange(1, 1, 4, 2).setValues([
      ["Unlocked through chapter", 3],
      ["Accept answers (TRUE or FALSE)", true],
      ["Class name", "English 9"],
      ["Script version", VERSION]
    ]);
  }
  var stu = tab_(ss, TAB.students);
  if (stu.getLastRow() === 0) {
    stu.getRange(1, 1, 1, 4).setValues([["Join code", "Student name", "Path (1 or 2)", "Notes"]]);
    stu.setFrozenRows(1);
  }
  var ans = tab_(ss, TAB.answers);
  if (ans.getLastRow() === 0) {
    ans.getRange(1, 1, 1, ANSWER_HEADERS.length).setValues([ANSWER_HEADERS]);
    ans.setFrozenRows(1);
  }
  var sum = tab_(ss, TAB.summary);
  if (sum.getLastRow() === 0) {
    // Kept to short lines on purpose: a copy and paste can break a very long line in two.
    sum.getRange(1, 1, 1, 13).setValues([["By student", "", "", "", "By chapter", "", "", "",
      "By skill", "", "", "", "Most-missed items (3+ answers)"]]);
    var pct = ", count(E) 'Questions', avg(H) '% right first try'";
    var table = function (col, name) {
      var sel = "select " + col + ", count(E), avg(H) where " + col + " is not null" +
        " group by " + col + " order by " + col + " label " + col + " '" + name + "'" + pct;
      return '=IFERROR(QUERY(Answers!A2:J,"' + sel + '",0),"No answers yet")';
    };
    sum.getRange("A2").setFormula(table("C", "Student"));
    sum.getRange("E2").setFormula(table("F", "Chapter"));
    sum.getRange("I2").setFormula(table("G", "Skill"));
    var items = "select E, count(E), avg(H) where E is not null group by E" +
      " label E 'Item', count(E) 'Answers', avg(H) '% right first try'";
    sum.getRange("M2").setFormula('=IFERROR(QUERY(QUERY(Answers!A2:J,"' + items + '",0),' +
      '"select * where Col2 >= 3 order by Col3 asc limit 15",1),"Not enough answers yet")');
    ["C:C", "G:G", "K:K", "O:O"].forEach(function (c) { sum.getRange(c).setNumberFormat("0%"); });
    sum.setFrozenRows(1);
  }
  toast_("Set up. Next: type student names in the Students tab (column B), " +
    "then TKM game > 2. Make join codes.");
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
    ok: true, known: !!stu, firstName: stu ? String(stu.name).trim().split(/\s+/)[0] : "",
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
    var sh = ss_().getSheetByName(TAB.answers);
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
