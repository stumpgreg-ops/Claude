/* v5.8.1: writes docs/questions/SOL-Labyrinth-all-questions-and-answers.docx — every passage and question in
   the game, with its answer key, in one Word file (about 850,000 characters, under Google Docs' limit, so
   uploading it to Google Drive and opening it with Google Docs makes it one Google Doc).
   Grouped by grade (Grade 5 New Jersey, then Virginia Grades 9, 10 and 11); within a grade, passages run from
   shortest to longest, the order the game's levels reach them. Each question is listed once, under the grade
   it was written for (Grade 10 students also get the Grade 9 passages, Grade 11 students Grades 9 and 10).
   Needs the docx package:  npm install --no-save docx && node tools/make-all-questions-doc.js */
var fs = require("fs"), vm = require("vm"), path = require("path");
var root = path.join(__dirname, "..");
var html = fs.readFileSync(root + "/index.html", "utf8");
var files = html.match(/js\/content\d*\.js/g) || [];
var ctx = { console: console }; ctx.window = ctx; ctx.self = ctx; ctx.globalThis = ctx;
vm.createContext(ctx);
files.forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f }); });

const D = require("docx");
const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, Footer, PageNumber, AlignmentType } = D;

/* node tools/make-all-questions-doc.js [VA|NJ] — one state only (default: both) */
const ONLY = String(process.argv[2] || "").toUpperCase();
const ORDER = ONLY === "VA" ? ["G9", "G10", "G11"] : ONLY === "NJ" ? ["NJ5"] : ["NJ5", "G9", "G10", "G11"];
const LABEL = ONLY === "VA" ? "Virginia" : ONLY === "NJ" ? "New Jersey" : "";
const NAME = { NJ5: "Grade 5 · New Jersey (NJSLA-ELA)", G9: "Grade 9 · Virginia (Selection 1)", G10: "Grade 10 · Virginia (Selection 2)", G11: "Grade 11 · Virginia (Selection 3)" };
const NOTE = {
  NJ5: "New Jersey Grade 5 students get only these passages.",
  G9: "Virginia Grade 9 students get only these passages.",
  G10: "Virginia Grade 10 students get these passages and the Grade 9 ones.",
  G11: "Virginia Grade 11 students get these passages and the Grade 9 and Grade 10 ones."
};
const STRAND = { RL: "Literature", RI: "Informational", RV: "Vocabulary", DSR: "Research / sources" };
const RL = { 1: "easier", 2: "on grade", 3: "harder" };
const T = []; for (let n = 1; n <= 100; n++) T.push(ctx.heistTargetWords(n));
function levels(w) { const ls = []; T.forEach((t, i) => { if (w >= 0.6 * t && w <= 1.6 * t) ls.push(i + 1); }); return ls.length ? "levels " + ls[0] + "–" + ls[ls.length - 1] : "any level"; }
function ent(s) {
  return String(s || "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”").replace(/&hellip;/g, "…");
}
function strip(s) { return ent(String(s || "").replace(/<[^>]+>/g, "")); }
/* a passage's paragraphs, each a list of lines (a poem keeps its lines; numbers stay as the game shows them) */
function paras(htmlText) {
  const blocks = String(htmlText || "").split(/<\/p>|<\/div>|<\/blockquote>|<hr\s*\/?>/i).map(b => b.trim()).filter(Boolean);
  return blocks.map(b => {
    const poem = /class="poem"/.test(b);
    const lines = b.split(/<br\s*\/?>/i).map(l => strip(l).replace(/\s+/g, " ").trim()).filter(Boolean);
    return { poem, lines };
  }).filter(b => b.lines.length);
}
function correctList(c) { return Array.isArray(c.correct) ? c.correct.map(String) : String(c.correct == null ? "" : c.correct).split(/[,\s]+/).filter(Boolean); }
function letterOf(c, k) {
  if (/^\d+$/.test(k)) { const ch = (c.choices || [])[+k]; return ch ? ch.letter : "ABCD".charAt(+k); }
  return String(k).toUpperCase().replace(/[^A-D]/g, "").charAt(0);
}

const FONT = "Arial";
const run = (text, o = {}) => new TextRun(Object.assign({ text: String(text), size: 21, font: FONT }, o));
const para = (runs, o = {}) => new Paragraph(Object.assign({ spacing: { after: 80 }, children: [].concat(runs).map(x => typeof x === "string" ? run(x) : x) }, o));
const border = { style: BorderStyle.SINGLE, size: 4, color: "BFBFBF" };
function table(widths, rows) {
  return new Table({ width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: widths,
    rows: rows.map((row, ri) => new TableRow({ tableHeader: ri === 0, children: row.map((cell, ci) => new TableCell({
      borders: { top: border, bottom: border, left: border, right: border }, width: { size: widths[ci], type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 100, right: 100 },
      shading: ri === 0 ? { fill: "E7E3D4", type: ShadingType.CLEAR } : undefined,
      children: [new Paragraph({ children: [run(cell, { size: 19, bold: ri === 0 })] })] })) })) });
}

const packs = ctx.HEIST_PACKS.filter(p => ORDER.indexOf(p.family) !== -1).map(p => ({ p, words: ctx.heistWordCount(p.passage || ""), level: ctx.heistPackLevel(p) }));
const kids = [];
let qTotal = 0;
const counts = ORDER.map(f => { const ps = packs.filter(x => x.p.family === f); const n = ps.reduce((a, x) => a + x.p.claims.length, 0); qTotal += n; return [NAME[f], String(ps.length), String(n)]; });

kids.push(para(run("SOL Labyrinth — " + (LABEL ? LABEL + " questions and answers" : "every question and answer"), { size: 40, bold: true }), { heading: HeadingLevel.TITLE, spacing: { after: 120 } }));
kids.push(para(run("Version " + (html.match(/<p class="ver">v([0-9.]+)/) || [0, "?"])[1] + " · " + qTotal + " questions on " + packs.length + " passages", { color: "555555" })));
kids.push(para("Every passage and question the game can ask, with the right answer marked ✓ and in bold. Grades are grouped as students see them. Within a grade, passages run from shortest to longest, the order the game's levels reach them; each passage says the levels where it usually appears (the game also adapts to each student's reading level, and a class session can add, hide or reword questions)."));
kids.push(para("Sentence and line numbers in the passages are the ones students see, so a question that says \"sentence 4\" means the sentence marked (4). A \"Part A / Part B\" pair is always asked together, Part A first."));
kids.push(table([5400, 1700, 1900], [["Grade", "Passages", "Questions"]].concat(counts)));

ORDER.forEach(fam => {
  const ps = packs.filter(x => x.p.family === fam).sort((a, b) => a.words - b.words || String(a.p.title).localeCompare(b.p.title));
  if (!ps.length) return;
  kids.push(para(run(NAME[fam], { size: 34, bold: true }), { heading: HeadingLevel.HEADING_1, pageBreakBefore: true, spacing: { after: 120 } }));
  kids.push(para(run(NOTE[fam] + " " + ps.length + " passages, " + ps.reduce((a, x) => a + x.p.claims.length, 0) + " questions.", { italics: true, color: "555555" })));
  let qn = 0;
  ps.forEach((x, pi) => {
    const p = x.p;
    kids.push(para(run((pi + 1) + ". " + strip(p.title), { size: 28, bold: true }), { heading: HeadingLevel.HEADING_2, spacing: { before: 280, after: 60 }, keepNext: true }));
    kids.push(para(run([strip(p.kind || p.genre || ""), x.words + " words", "reading level " + x.level + " (" + RL[x.level] + ")", levels(x.words)].filter(Boolean).join(" · "), { size: 18, color: "666666" }), { keepNext: true }));
    paras(p.passage).forEach(b => {
      if (b.poem) b.lines.forEach((l, li) => kids.push(para(run(l, { size: 20 }), { indent: { left: 360 }, spacing: { after: li === b.lines.length - 1 ? 100 : 0 } })));
      else kids.push(para(run(b.lines.join(" "), { size: 20 }), { indent: { left: 360 }, spacing: { after: 100 } }));
    });
    const partBs = new Set(p.claims.map(c => c.partB).filter(Boolean));
    p.claims.forEach(c => {
      qn++;
      const keys = correctList(c).map(k => letterOf(c, k)).filter(Boolean);
      const tag = /^\s*Part [AB]\b/i.test(strip(c.stem)) ? "" : c.partB ? "Part A · " : partBs.has(c.id) ? "Part B · " : "";
      const strand = ctx.heistStrandOf(c);
      kids.push(para([run("Q" + qn + ". ", { bold: true }), run(tag, { bold: true, color: "8A5A00" }), run(strip(c.stem), { bold: true })], { spacing: { before: 140, after: 40 }, keepNext: true }));
      kids.push(para(run((c.sol || "") + (STRAND[strand] ? " · " + STRAND[strand] : "") + (keys.length > 1 ? " · choose " + keys.length : ""), { size: 17, color: "777777" }), { keepNext: true, spacing: { after: 40 } }));
      (c.choices || []).forEach(ch => {
        const ok = keys.indexOf(ch.letter) !== -1;
        kids.push(para([run(ch.letter + "   ", { bold: true }), run(strip(ch.text), { bold: ok, color: ok ? "1B6B2F" : undefined }), ok ? run("   ✓", { bold: true, color: "1B6B2F" }) : run("")], { indent: { left: 360 }, spacing: { after: 20 } }));
      });
      kids.push(para(run("Answer: " + (keys.join(" and ") || "?"), { bold: true, size: 19, color: "1B6B2F" }), { indent: { left: 360 }, spacing: { after: 100 } }));
    });
  });
});

const doc = new Document({
  creator: "SOL Labyrinth", title: "SOL Labyrinth — " + (LABEL ? LABEL + " questions and answers" : "every question and answer"),
  styles: { default: { document: { run: { font: FONT, size: 21 } } } },
  sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [run("SOL Labyrinth · " + (LABEL ? LABEL + " " : "all ") + "questions and answers · page ", { size: 16, color: "888888" }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: "888888", font: FONT })] })] }) },
    children: kids }]
});
const out = path.join(root, "docs", "questions", LABEL ? "SOL-Labyrinth-" + ONLY + "-questions-and-answers.docx" : "SOL-Labyrinth-all-questions-and-answers.docx");
Packer.toBuffer(doc).then(buf => { fs.writeFileSync(out, buf); console.log(out + " · " + qTotal + " questions · " + packs.length + " passages · " + (buf.length / 1048576).toFixed(1) + " MiB"); });
