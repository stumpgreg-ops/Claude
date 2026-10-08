#!/usr/bin/env node
/* Writes docs/SOL-Lab-Earth-Science-Question-Bank.docx: the whole question pool as a Word document for teachers.
   Usage: node tools/question-bank-docx.js   (needs the docx npm package)
   For each unit: its standards, key ideas and skills (LOTS/HOTS); then every lab-notes pack by difficulty level, with
   the lab notes (tables kept as tables), each question tagged with its skill and LOTS/HOTS, the four choices and the
   key. Generated from js/standards-es.js and js/content*.js; edit those, not the document. */
var fs = require("fs"), path = require("path"), vm = require("vm");
var D = require("docx");
var root = path.join(__dirname, "..");
var sb = { window: {}, console: console }; sb.global = sb.window;
vm.runInNewContext(fs.readFileSync(path.join(root, "js", "standards-es.js"), "utf8"), sb, { filename: "standards-es.js" });
fs.readdirSync(path.join(root, "js")).filter(function (f) { return /^content\d*\.js$/.test(f); })
  .sort(function (a, b) { return (parseInt(a.slice(7)) || 0) - (parseInt(b.slice(7)) || 0); })
  .forEach(function (f) { vm.runInNewContext(fs.readFileSync(path.join(root, "js", f), "utf8"), sb, { filename: f }); });
var W = sb.window, PACKS = W.HEIST_PACKS, FAM = W.HEIST_FAMILIES.filter(function (f) { return f.id !== "ALL"; }), SS = W.SolStandards;
var version = (fs.readFileSync(path.join(root, "index.html"), "utf8").match(/\?v=([0-9.]+)/) || [0, "?"])[1];

var FONT = "Calibri", INK = "222222", DIM = "666666", GOLD = "8A6A00", GREEN = "1D6B2F", LOTS_C = "1F5FA8", HOTS_C = "A33B1E";
var PAGE_W = 12240, MARGIN = 1080, BODY_W = PAGE_W - 2 * MARGIN;   /* US Letter, 0.75 in margins */
function lv(c) { var k = SS.SKILL[c.sub]; return k ? k.level : ""; }
function decode(t) { return String(t).replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#39;/g, "'"); }
function run(text, o) { o = o || {}; return new D.TextRun(Object.assign({ text: decode(text), font: FONT, size: o.size || 21, color: o.color || INK }, o)); }

/* inline HTML (strong, em, sub, sup, the sentence numbers) -> TextRuns */
function inline(html, base) {
  base = base || {};
  var out = [], st = { bold: false, italics: false, sub: false, sup: false, n: false };
  String(html).split(/(<[^>]+>)/).forEach(function (tok) {
    if (!tok) return;
    var m = /^<(\/?)([a-z0-9]+)([^>]*)>$/i.exec(tok);
    if (m) {
      var on = !m[1], tag = m[2].toLowerCase();
      if (tag === "strong" || tag === "b") st.bold = on;
      else if (tag === "em" || tag === "i") st.italics = on;
      else if (tag === "sub") st.sub = on;
      else if (tag === "sup") st.sup = on;
      else if (tag === "span") st.n = on && /class="n"/.test(m[3]);
      else if (tag === "br") out.push(new D.TextRun({ break: 1 }));
      return;
    }
    out.push(run(tok, Object.assign({}, base, { bold: st.bold || base.bold, italics: st.italics, subScript: st.sub, superScript: st.sup },
      st.n ? { color: GOLD, bold: true, size: 17 } : {})));
  });
  return out;
}
function para(children, o) { return new D.Paragraph(Object.assign({ children: children, spacing: { after: 80 } }, o || {})); }

/* the lab notes: paragraphs, tables and lists, in a shaded box (a one-cell table) */
function passageBlocks(html) {
  var blocks = [];
  html.replace(/<(p|table|ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi, function (all, tag, inner) {
    tag = tag.toLowerCase();
    if (tag === "p") blocks.push(para(inline(inner), { spacing: { after: 100, line: 276 } }));
    else if (tag === "ul" || tag === "ol") {
      var i = 0;
      inner.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, function (a, li) {
        i++;
        blocks.push(para([run(tag === "ol" ? i + ". " : "– ")].concat(inline(li)), { indent: { left: 360 }, spacing: { after: 40 } }));
      });
    } else blocks.push(dataTable(inner));
    return "";
  });
  return blocks;
}
function dataTable(inner) {
  var rows = [];
  inner.replace(/<tr[^>]*>([\s\S]*?)<\/tr>/gi, function (a, tr) {
    var cells = [];
    tr.replace(/<(th|td)[^>]*>([\s\S]*?)<\/\1>/gi, function (b, kind, cell) { cells.push({ th: kind.toLowerCase() === "th", html: cell }); return ""; });
    rows.push(cells); return "";
  });
  var cols = Math.max.apply(null, rows.map(function (r) { return r.length; }));
  var tw = Math.min(BODY_W - 400, cols * 2200), cw = Math.floor(tw / cols);
  var border = { style: D.BorderStyle.SINGLE, size: 4, color: "B8A46A" };
  return new D.Table({
    width: { size: cw * cols, type: D.WidthType.DXA }, columnWidths: Array(cols).fill(cw),
    rows: rows.map(function (r) {
      return new D.TableRow({ children: r.map(function (c) {
        return new D.TableCell({
          width: { size: cw, type: D.WidthType.DXA },
          borders: { top: border, bottom: border, left: border, right: border },
          shading: c.th ? { type: D.ShadingType.CLEAR, color: "auto", fill: "EFE6C8" } : undefined,
          margins: { top: 40, bottom: 40, left: 80, right: 80 },
          children: [para(inline(c.html, { size: 19, bold: c.th }), { spacing: { after: 0 } })]
        });
      }) });
    })
  });
}
function notesBox(html) {
  var none = { style: D.BorderStyle.NONE, size: 0, color: "FFFFFF" };
  return new D.Table({
    width: { size: BODY_W, type: D.WidthType.DXA }, columnWidths: [BODY_W],
    rows: [new D.TableRow({ children: [new D.TableCell({
      width: { size: BODY_W, type: D.WidthType.DXA },
      shading: { type: D.ShadingType.CLEAR, color: "auto", fill: "F7F4EA" },
      borders: { top: none, bottom: none, right: none, left: { style: D.BorderStyle.SINGLE, size: 24, color: "D4B34A" } },
      margins: { top: 120, bottom: 80, left: 200, right: 160 },
      children: passageBlocks(html)
    })] })]
  });
}
function heading(text, level, o) { return new D.Paragraph(Object.assign({ heading: level, children: [new D.TextRun({ text: text })] }, o || {})); }
function tagRun(c) {
  var l = lv(c);
  return [run("[" + (c.sub || c.sol) + " · ", { size: 17, color: DIM, bold: true }), run(l, { size: 17, bold: true, color: l === "HOTS" ? HOTS_C : LOTS_C }), run("]  ", { size: 17, color: DIM, bold: true })];
}

/* ── the document ── */
var kids = [];
var total = PACKS.reduce(function (a, p) { return a + p.claims.length; }, 0), think = { LOTS: 0, HOTS: 0 }, byLevel = { 1: 0, 2: 0, 3: 0 };
PACKS.forEach(function (p) { p.claims.forEach(function (c) { think[lv(c)]++; byLevel[p.level] = (byLevel[p.level] || 0) + 1; }); });
kids.push(new D.Paragraph({ children: [run("SOL Lab · Virginia EOC Earth Science", { size: 22, color: GOLD, bold: true })], spacing: { after: 60 } }));
kids.push(heading("Question Pool (teacher review copy)", D.HeadingLevel.TITLE));
kids.push(para([run("Version " + version + " · " + PACKS.length + " lab-notes packs · " + total + " questions · " + think.LOTS + " LOTS · " + think.HOTS + " HOTS · level 1: " + byLevel[1] + ", level 2: " + byLevel[2] + ", level 3: " + byLevel[3], { color: DIM })], { spacing: { after: 200 } }));
kids.push(heading("How to read this document", D.HeadingLevel.HEADING_2));
[
  ["Standards. ", "Every question is aligned to the 2018 Virginia Science Standards of Learning for Earth Science (ES.1–ES.12). Each key idea (ES.4.a) is split into skills (ES.4.a.1, ES.4.a.2 …), one per thing a student does."],
  ["The tag. ", "Before each question, [ES.9.b.3 · HOTS] names its skill: standard ES.9, key idea b, skill 3, and its thinking level."],
  ["LOTS ", "(lower-order thinking: Bloom's remember, understand, apply): identify, describe, explain, classify, read a map or table, use a key, calculate."],
  ["HOTS ", "(higher-order thinking: Bloom's analyze, evaluate, create): analyze data or a model, compare, infer, predict from a model, sequence events from evidence, evaluate a design, a claim or a trade-off."],
  ["Levels. ", "Each pack is level 1 (foundation), 2 (a typical EOC item) or 3 (stretch). The game starts every student between levels 1 and 2 and adjusts to how they answer; it also aims for longer lab notes as levels go by."],
  ["Lab notes. ", "Each pack's lab notes (the shaded box) number their sentences so questions can point to them. Select TWO items have two keys."]
].forEach(function (b) { kids.push(para([run(b[0], { bold: true })].concat([run(b[1])]), { spacing: { after: 80 } })); });

/* contents by unit */
kids.push(heading("Contents", D.HeadingLevel.HEADING_2));
FAM.forEach(function (u) {
  var ps = PACKS.filter(function (p) { return p.family === u.id; }), q = ps.reduce(function (a, p) { return a + p.claims.length; }, 0), t = { LOTS: 0, HOTS: 0 };
  ps.forEach(function (p) { p.claims.forEach(function (c) { t[lv(c)]++; }); });
  kids.push(para([run(u.label + " (" + u.kind + ")", { bold: true }), run("  —  " + ps.length + " packs, " + q + " questions (" + t.LOTS + " LOTS, " + t.HOTS + " HOTS)", { color: DIM })], { spacing: { after: 40 } }));
});

FAM.forEach(function (u) {
  kids.push(new D.Paragraph({ children: [new D.PageBreak()] }));
  kids.push(heading(u.label + " (" + u.kind + ")", D.HeadingLevel.HEADING_1));
  kids.push(para([run(u.meta, { italics: true, color: DIM })]));
  /* the standards, key ideas and skills in this unit, with how many questions ask each skill */
  var count = {};
  PACKS.forEach(function (p) { if (p.family === u.id) p.claims.forEach(function (c) { count[c.sub] = (count[c.sub] || 0) + 1; }); });
  kids.push(heading("Standards and skills in this unit", D.HeadingLevel.HEADING_3));
  SS.ORDER.forEach(function (code) {
    var inUnit = u.stds.some(function (s) { return code === s || code.indexOf(s + ".") === 0; });
    if (!inUnit) return;
    var S = SS.STANDARDS[code];
    if (/^ES\.\d+$/.test(code)) { kids.push(para([run(S.text, { bold: true })], { spacing: { before: 120, after: 40 } })); return; }
    kids.push(para([run(code + "  ", { bold: true, color: GOLD }), run(S.key)], { indent: { left: 240 }, spacing: { after: 20 } }));
    S.skills.forEach(function (sk) {
      kids.push(para([run(sk.id + "  ", { size: 18, color: DIM }), run(sk.level, { size: 18, bold: true, color: sk.level === "HOTS" ? HOTS_C : LOTS_C }), run("  " + sk.text, { size: 18 }),
        run("  (" + (count[sk.id] || 0) + " question" + (count[sk.id] === 1 ? "" : "s") + ")", { size: 18, color: DIM })], { indent: { left: 600 }, spacing: { after: 10 } }));
    });
  });
  [1, 2, 3].forEach(function (lvl) {
    var ps = PACKS.filter(function (p) { return p.family === u.id && p.level === lvl; });
    if (!ps.length) return;
    kids.push(heading("Level " + lvl + (lvl === 1 ? " — foundation" : lvl === 2 ? " — typical EOC item" : " — stretch"), D.HeadingLevel.HEADING_2, { spacing: { before: 360, after: 120 } }));
    ps.forEach(function (p) {
      kids.push(heading(p.title, D.HeadingLevel.HEADING_3, { keepNext: true }));
      kids.push(para([run(p.id + " · " + p.kind + " · level " + p.level + " · " + p.claims.length + " questions", { size: 17, color: DIM })], { keepNext: true }));
      kids.push(notesBox(p.passage));
      kids.push(para([], { spacing: { after: 60 } }));
      p.claims.forEach(function (c, i) {
        var keys = [].concat(c.correct);
        kids.push(para([run((i + 1) + ". ", { bold: true })].concat(tagRun(c), [run(c.stem, { bold: true })]), { keepNext: true, spacing: { before: 120, after: 40 } }));
        c.choices.forEach(function (ch) {
          var right = keys.indexOf(ch.letter) !== -1;
          kids.push(para([run(ch.letter + ".  ", { bold: true, color: right ? GREEN : INK }), run(ch.text, { color: right ? GREEN : INK, bold: right })], { indent: { left: 400 }, spacing: { after: 20 }, keepNext: true }));
        });
        var sk = SS.SKILL[c.sub];
        kids.push(para([run("Key: " + keys.join(" and "), { bold: true, color: GREEN, size: 19 }), run("   Skill: " + (sk ? sk.text : ""), { size: 17, color: DIM, italics: true })], { indent: { left: 400 }, spacing: { after: 100 } }));
      });
    });
  });
});

var doc = new D.Document({
  creator: "SOL Lab", title: "SOL Lab Earth Science question pool", description: "Every question, its key, skill and LOTS/HOTS label",
  styles: {
    default: { document: { run: { font: FONT, size: 21 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal", run: { size: 44, bold: true, color: "1B2A3A", font: FONT }, paragraph: { spacing: { after: 120 } } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 34, bold: true, color: "1B2A3A", font: FONT }, paragraph: { spacing: { before: 120, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 27, bold: true, color: GOLD, font: FONT }, paragraph: { spacing: { before: 240, after: 100 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 23, bold: true, color: "1B2A3A", font: FONT }, paragraph: { spacing: { before: 240, after: 40 }, outlineLevel: 2 } }
    ]
  },
  sections: [{
    properties: { page: { size: { width: PAGE_W, height: 15840 }, margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } } },
    footers: { default: new D.Footer({ children: [new D.Paragraph({ alignment: D.AlignmentType.CENTER, children: [
      new D.TextRun({ text: "SOL Lab Earth Science · question pool · page ", font: FONT, size: 16, color: DIM }),
      new D.TextRun({ children: [D.PageNumber.CURRENT], font: FONT, size: 16, color: DIM })] })] }) },
    children: kids
  }]
});
var out = path.join(root, "docs", "SOL-Lab-Earth-Science-Question-Bank.docx");
D.Packer.toBuffer(doc).then(function (buf) {
  fs.writeFileSync(out, buf);
  console.log(path.relative(process.cwd(), out) + ": " + PACKS.length + " packs, " + total + " questions (" + (buf.length / 1024).toFixed(0) + " KiB)");
});
