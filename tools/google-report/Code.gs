// TKM game - Google reporting (experiment, v0.6)
//
// This script lives inside a Google Sheet in YOUR school Google account. The test page in
// Canvas sends each answer here, and this script writes it into the Sheet. The game also
// asks here which chapters are unlocked. Nothing goes anywhere else.
//
// Setup steps: SECTION 2 of "READ ME FIRST - Canvas setup.txt".
//
// The tabs:
// - Analysis: the whole class. A chart of each skill, % right and % wrong on the first try.
// - By student: pick a student for the same chart, and a grid of every student by skill,
//   coloured green, yellow and red. The bands are set in Settings (rows 5 and 6).
// - Grades: your grading criteria (yellow cells) and each student's grade, worked out from
//   the answers between the dates you set. It updates by itself.
// - Settings: "Unlocked through chapter" (the game picks up a change the next time it opens),
//   "Accept answers" (FALSE pauses reporting; the game keeps answers and sends them later),
//   and the colour bands for By student: "Green from" and "Yellow from" (below that is red).
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

var VERSION = "0.6";
var TAB = { analysis: "Analysis", byStudent: "By student", grades: "Grades", settings: "Settings",
            students: "Students", summary: "Summary", data: "Answer data" };
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
var BAND = { high: "#b7e1cd", mid: "#fce8b2", low: "#f4c7c3" }; // green, yellow, red
// The bands live in Settings, column B: a percent such as 80 (80% or 0.8 work too).
var BAND_ROW = { green: 5, yellow: 6 };
var BAND_DEFAULT = { green: 80, yellow: 60 };
var EDIT = "#fff2cc"; // yellow: a cell that is the teacher's to change

// Grading goals, as in the SOL Labyrinth teacher screen: full credit at a target, and a weight
// (0 = not counted). Grade = points x the weighted share of each target reached (capped at 1).
var GOALS = [
  ["Minutes answering questions", 60, 1],
  ["Questions answered", 50, 1],
  ["Days played", 3, 0],
  ["% right on the first try", 70, 0]
];
var G = { goalRow: 4, points: 9, from: 10, through: 11, head: 14 }; // rows on the Grades tab
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
  // the colour bands: added if missing, never overwritten (they are the teacher's to change)
  [["green", "Green from (percent right, for example 80)"],
   ["yellow", "Yellow from (percent right; below this is red)"]].forEach(function (b) {
    var row = BAND_ROW[b[0]];
    st.getRange(row, 1).setValue(b[1]);
    if (String(st.getRange(row, 2).getValues()[0][0]).trim() === "") {
      st.getRange(row, 2).setValue(BAND_DEFAULT[b[0]]);
    }
  });
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
  var an = analysis_(ss), by = byStudent_(ss), gr = grades_(ss);
  // tab order: Analysis, By student, Grades, ... , Answer data last
  ss.setActiveSheet(ans); ss.moveActiveSheet(ss.getNumSheets());
  ss.setActiveSheet(gr); ss.moveActiveSheet(1);
  ss.setActiveSheet(by); ss.moveActiveSheet(1);
  ss.setActiveSheet(an); ss.moveActiveSheet(1);
  toast_("Set up. Next: type student names in the Students tab (column B), " +
    "then TKM game > 2. Make join codes.");
}

// The Analysis tab: the whole class. A 100% stacked bar for each skill (right / wrong on the
// first try) and, under it, the numbers it is drawn from. Setup draws it again each time.
function analysis_(ss) {
  var an = freshTab_(ss, TAB.analysis);
  var top = chartRows_() + 2;
  an.getRange(top, 1).setValue("The numbers behind the chart (they update by themselves)")
    .setFontWeight("bold");
  skillTable_(an, top + 1, "");
  skillChart_(an, top + 1, 1, "Whole class: % right and wrong on the first try, by skill");
  return an;
}

// The By student tab: a drop-down to pick a student and the same chart for that student, then
// a grid of every student (rows) by skill (columns). Setup and "Make join codes" draw it again.
function byStudent_(ss) {
  var old = ss.getSheetByName(TAB.byStudent);
  var picked = old ? String(old.getRange(1, 2).getValues()[0][0] || "") : "";
  var by = freshTab_(ss, TAB.byStudent);
  var stu = ss.getSheetByName(TAB.students), names = [];
  if (stu && stu.getLastRow() >= 2) {
    names = stu.getRange(2, 2, stu.getLastRow() - 1, 1).getValues()
      .map(function (r) { return String(r[0]).trim(); }).filter(String);
  }
  if (names.indexOf(picked) < 0) picked = names[0] || "";

  // 1. one student: drop-down in B1, chart from row 3, its numbers under it
  by.getRange(1, 1).setValue("Student:").setFontWeight("bold");
  var pick = by.getRange(1, 2);
  pick.setDataValidation(SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getSheetByName(TAB.students).getRange("B2:B"), true)
    .setAllowInvalid(false).build());
  pick.setValue(picked).setFontWeight("bold").setBackground("#fff2cc");
  by.getRange(1, 3).setValue("<- pick a student from the list");
  var top = 3 + chartRows_() + 1;
  by.getRange(top, 1).setValue("The numbers behind the chart for the student in B1").setFontWeight("bold");
  skillTable_(by, top + 1, "$B$1");
  skillChart_(by, top + 1, 3, "One student (picked in B1): % right and wrong on the first try");

  // 2. every student: one row each, a column per skill
  var g = top + 3 + SKILLS.length;
  // the heading names the bands from Settings, so it changes when they do
  var hi = band_(TAB.settings + "!$B$" + BAND_ROW.green);
  var lo = band_(TAB.settings + "!$B$" + BAND_ROW.yellow);
  by.getRange(g, 1).setFormula('="Every student at a glance: % right on the first try. Green "&' +
    'TEXT(' + hi + ',"0%")&" and up, yellow "&TEXT(' + lo + ',"0%")&" up to "&TEXT(' + hi +
    ',"0%")&", red below "&TEXT(' + lo + ',"0%")&". Change the bands in Settings, rows 5 and 6."')
    .setFontWeight("bold");
  var head = ["Student", "Questions answered", "All skills"].concat(SKILLS.map(function (sk) {
    return sk[1] + " (" + sk[0] + ")";
  }));
  by.getRange(g + 1, 1, 1, head.length).setValues([head]).setFontWeight("bold");
  var who = DATA_REF + "$C$2:$C", skill = DATA_REF + "$G$2:$G", right = DATA_REF + "$H$2:$H";
  var rows = Math.max(40, names.length + 20); // room for students added later
  for (var i = 0; i < rows; i++) {
    var r = g + 2 + i, a = "$A" + r;
    by.getRange(r, 1).setFormula("=IF(TRIM(" + TAB.students + "!$B" + (i + 2) + ")=\"\",\"\"," +
      "TRIM(" + TAB.students + "!$B" + (i + 2) + "))");
    by.getRange(r, 2).setFormula("=IF(" + a + "=\"\",\"\",COUNTIF(" + who + "," + a + "))");
    by.getRange(r, 3).setFormula("=IF(N($B" + r + ")=0,\"\",AVERAGEIF(" + who + "," + a + "," +
      right + "))");
    SKILLS.forEach(function (sk, j) {
      var code = "\"" + sk[0] + "\"";
      by.getRange(r, 4 + j).setFormula("=IF(" + a + "=\"\",\"\",IF(COUNTIFS(" + who + "," + a + "," +
        skill + "," + code + ")=0,\"\",AVERAGEIFS(" + right + "," + who + "," + a + "," + skill + "," +
        code + ")))");
    });
  }
  var pct = by.getRange(g + 2, 3, rows, 1 + SKILLS.length);
  pct.setNumberFormat("0%");
  // Colour rules read the bands from Settings. A colour rule can only reach another tab through
  // INDIRECT. The first rule that matches a cell wins, so green is checked first.
  var cell = "C" + (g + 2); // the top-left % cell; the rules move with each cell
  var hiCf = band_('INDIRECT("' + TAB.settings + "!B" + BAND_ROW.green + '")');
  var loCf = band_('INDIRECT("' + TAB.settings + "!B" + BAND_ROW.yellow + '")');
  var rule = function (f, colour) {
    return SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied(f)
      .setBackground(colour).setRanges([pct]).build();
  };
  by.setConditionalFormatRules([
    rule("=AND(ISNUMBER(" + cell + ")," + cell + ">=" + hiCf + ")", BAND.high),
    rule("=AND(ISNUMBER(" + cell + ")," + cell + ">=" + loCf + ")", BAND.mid),
    rule("=ISNUMBER(" + cell + ")", BAND.low)
  ]);
  by.setColumnWidth(1, 250); by.setColumnWidth(2, 130);
  for (var c = 3; c <= head.length; c++) by.setColumnWidth(c, 150);
  return by;
}

// The Grades tab: the criteria at the top (kept when the tab is redrawn) and a grade for each
// student from the answers between "Count work from" and "Count work through".
function grades_(ss) {
  var old = ss.getSheetByName(TAB.grades), keep = null;
  if (old && String(old.getRange(G.goalRow - 1, 1).getValues()[0][0]) === "Goal") {
    keep = old.getRange(G.goalRow, 2, G.through - G.goalRow + 1, 2).getValues();
  }
  var gr = freshTab_(ss, TAB.grades);
  var stu = ss.getSheetByName(TAB.students);
  var count = stu && stu.getLastRow() >= 2 ? stu.getLastRow() - 1 : 0;

  gr.getRange(1, 1).setValue("Grades").setFontWeight("bold").setFontSize(14);
  gr.getRange(2, 1).setValue("Change the yellow cells. Every grade below updates by itself.");
  gr.getRange(G.goalRow - 1, 1, 1, 3).setValues([["Goal", "Full credit at",
    "Counts (weight; 0 = not counted)"]]).setFontWeight("bold");
  GOALS.forEach(function (goal, i) {
    gr.getRange(G.goalRow + i, 1, 1, 3).setValues([goal]);
  });
  gr.getRange(G.points, 1, 1, 2).setValues([["Points possible", 100]]);
  gr.getRange(G.from, 1).setValue("Count work from (a date; empty = from the start)");
  gr.getRange(G.through, 1).setValue("Count work through (a date; empty = up to now)");
  if (keep) gr.getRange(G.goalRow, 2, keep.length, 2).setValues(keep);
  gr.getRange(G.goalRow, 2, GOALS.length, 2).setBackground(EDIT);
  gr.getRange(G.points, 2, 3, 1).setBackground(EDIT);
  gr.getRange(G.from, 2, 2, 1).setNumberFormat("m/d/yyyy").setDataValidation(
    SpreadsheetApp.newDataValidation().requireDate().setAllowInvalid(false)
      .setHelpText("Type a date like 11/16/2026, or leave it empty.").build());

  // hidden helpers (column H): the first day counted and the day after the last one
  gr.getRange(G.from, 8).setFormula("=IF(ISNUMBER($B$" + G.from + "),INT($B$" + G.from +
    "),DATE(2000,1,1))");
  gr.getRange(G.through, 8).setFormula("=IF(ISNUMBER($B$" + G.through + "),INT($B$" + G.through +
    ")+1,DATE(2100,1,1))");
  gr.hideColumns(8);

  var h = G.head;
  gr.getRange(h - 1, 1).setValue("Each student's grade for the dates above").setFontWeight("bold");
  gr.getRange(h, 1, 1, 5).setValues([["Student", "Minutes answering questions", "Questions answered",
    "Days played", "% right on the first try"]]).setFontWeight("bold");
  gr.getRange(h, 6).setFormula('="Grade (of "&$B$' + G.points + '&")"').setFontWeight("bold");

  var who = DATA_REF + "$C$2:$C", when = DATA_REF + "$D$2:$D";
  var secs = DATA_REF + "$J$2:$J", right = DATA_REF + "$H$2:$H";
  var span = "," + when + ',">="&$H$' + G.from + "," + when + ',"<"&$H$' + G.through;
  var credit = function (goalRow, value) { // one goal's weighted credit, 0 to its weight
    var t = "$B$" + goalRow, w = "N($C$" + goalRow + ")";
    if (goalRow === G.goalRow + 3) t = "IF(N(" + t + ")>1,N(" + t + ")/100,N(" + t + "))"; // a percent
    else t = "N(" + t + ")";
    return w + "*IF(" + t + "<=0,1,MIN(1,N(" + value + ")/" + t + "))";
  };
  var weights = "SUM($C$" + G.goalRow + ":$C$" + (G.goalRow + GOALS.length - 1) + ")";
  var rows = Math.max(40, count + 20);
  for (var i = 0; i < rows; i++) {
    var r = h + 1 + i, a = "$A" + r, blank = "=IF(" + a + '="","",';
    gr.getRange(r, 1).setFormula("=IF(TRIM(" + TAB.students + "!$B" + (i + 2) + ")=\"\",\"\"," +
      "TRIM(" + TAB.students + "!$B" + (i + 2) + "))");
    gr.getRange(r, 2).setFormula(blank + "ROUND(SUMIFS(" + secs + "," + who + "," + a + span +
      ")/60,1))");
    gr.getRange(r, 3).setFormula(blank + "COUNTIFS(" + who + "," + a + span + "))");
    gr.getRange(r, 4).setFormula(blank + "IFERROR(ROWS(UNIQUE(FILTER(INT(" + when + ")," +
      who + "=" + a + "," + when + ">=$H$" + G.from + "," + when + "<$H$" + G.through + "))),0))");
    gr.getRange(r, 5).setFormula("=IF(N($C" + r + ')=0,"",AVERAGEIFS(' + right + "," + who + "," +
      a + span + "))");
    gr.getRange(r, 6).setFormula(blank + "IF(" + weights + '<=0,"",ROUND($B$' + G.points + "*(" +
      [credit(G.goalRow, "$B" + r), credit(G.goalRow + 1, "$C" + r),
       credit(G.goalRow + 2, "$D" + r), credit(G.goalRow + 3, "$E" + r)].join("+") +
      ")/" + weights + ",1)))");
  }
  gr.getRange(h + 1, 5, rows, 1).setNumberFormat("0%");
  // grade colours: the same bands as By student (Settings rows 5 and 6), as a share of the points
  var g1 = "F" + (h + 1), share = g1 + "/$B$" + G.points;
  var hiCf = band_('INDIRECT("' + TAB.settings + "!B" + BAND_ROW.green + '")');
  var loCf = band_('INDIRECT("' + TAB.settings + "!B" + BAND_ROW.yellow + '")');
  var col = gr.getRange(h + 1, 6, rows, 1);
  var rule = function (f, colour) {
    return SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied(f)
      .setBackground(colour).setRanges([col]).build();
  };
  gr.setConditionalFormatRules([
    rule("=AND(ISNUMBER(" + g1 + ")," + share + ">=" + hiCf + ")", BAND.high),
    rule("=AND(ISNUMBER(" + g1 + ")," + share + ">=" + loCf + ")", BAND.mid),
    rule("=ISNUMBER(" + g1 + ")", BAND.low)
  ]);
  gr.setColumnWidth(1, 330);
  for (var c = 2; c <= 6; c++) gr.setColumnWidth(c, 150);
  gr.setFrozenRows(0);
  return gr;
}

// A band from Settings as a fraction: 80, 80% and 0.8 all mean 0.8.
function band_(ref) { return "IF(N(" + ref + ")>1,N(" + ref + ")/100,N(" + ref + "))"; }

// -- chart helpers shared by Analysis and By student --
function chartRows_() { return Math.ceil((110 + 46 * SKILLS.length) / 21); } // rows are 21 px
function freshTab_(ss, name) {
  var t = ss.getSheetByName(name) || ss.insertSheet(name);
  t.getCharts().forEach(function (c) { t.removeChart(c); });
  t.clear();
  t.setConditionalFormatRules([]);
  return t;
}
// A table at row `head`: Skill | Right first try | Wrong first try | Questions answered | Code |
// What the standard says. `who` is a cell with a student's name, or "" for the whole class.
function skillTable_(t, head, who) {
  var n = SKILLS.length, col = DATA_REF + "$G$2:$G", right = DATA_REF + "$H$2:$H";
  var whoCol = DATA_REF + "$C$2:$C";
  t.getRange(head, 1, 1, 6).setValues([["Skill", "Right first try", "Wrong first try",
    "Questions answered", "Code", "What the standard says"]]).setFontWeight("bold");
  SKILLS.forEach(function (sk, i) {
    var r = head + 1 + i;
    t.getRange(r, 1).setValue(sk[1] + " (" + sk[0] + ")");
    t.getRange(r, 5).setValue(sk[0]);
    t.getRange(r, 6).setValue(sk[2]);
    if (who) {
      t.getRange(r, 4).setFormula("=COUNTIFS(" + col + ",$E" + r + "," + whoCol + "," + who + ")");
      t.getRange(r, 2).setFormula('=IF($D' + r + '=0,"",AVERAGEIFS(' + right + "," + col + ",$E" + r +
        "," + whoCol + "," + who + "))");
    } else {
      t.getRange(r, 4).setFormula("=COUNTIF(" + col + ",$E" + r + ")");
      t.getRange(r, 2).setFormula('=IF($D' + r + '=0,"",AVERAGEIF(' + col + ",$E" + r + "," +
        right + "))");
    }
    t.getRange(r, 3).setFormula('=IF($D' + r + '=0,"",1-$B' + r + ")");
  });
  t.getRange(head + 1, 2, n, 2).setNumberFormat("0%");
  t.setColumnWidth(1, 250); t.setColumnWidth(6, 520);
  [2, 3, 4, 5].forEach(function (c) { t.setColumnWidth(c, 110); });
}
// A 100% stacked bar chart of a skill table (green right, orange wrong), placed at `atRow`.
function skillChart_(t, head, atRow, title) {
  var n = SKILLS.length;
  t.insertChart(t.newChart().asBarChart()
    .addRange(t.getRange(head, 1, n + 1, 3))
    .setNumHeaders(1)
    .setStacked()
    .setRange(0, 1)
    .setTitle(title)
    .setLegendPosition(Charts.Position.TOP)
    .setOption("hAxis.format", "0%")
    .setOption("series", {
      0: { color: COLOR_RIGHT, dataLabel: "value" },
      1: { color: COLOR_WRONG, dataLabel: "value" }
    })
    .setOption("width", 800)
    .setOption("height", 110 + 46 * n)
    .setPosition(atRow, 1, 0, 0)
    .build());
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
  try { byStudent_(ss_()); grades_(ss_()); } catch (e) {} // new students get a row
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
