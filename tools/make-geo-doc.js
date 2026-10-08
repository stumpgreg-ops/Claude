/* v5.19: writes docs/questions/SOL-Labyrinth-Geometry-questions-and-answers.docx — every question in the Geometry
   game (js/content201.js … content204.js), by strand and standard: each pack's figure (drawn from its SVG in print
   colours, dark ink on white), its givens and proof table, then its six questions with the answer marked, the skill
   (LOTS / HOTS) and a review line for the teacher. An answer key table and the standards and skills come at the end.
   node tools/make-geo-doc.js   (uses the docx package and Playwright's Chromium, both preinstalled here) */
var fs = require("fs"), vm = require("vm"), path = require("path");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
const D = require("docx");
const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, ShadingType, AlignmentType,
  BorderStyle, ImageRun, Footer, PageNumber, LevelFormat } = D;

var root = path.join(__dirname, ".."), outDir = path.join(root, "docs", "questions");
var OUT = path.join(outDir, "SOL-Labyrinth-Geometry-questions-and-answers.docx");
var FILES = ["content201.js", "content202.js", "content203.js", "content204.js"];
var GS = require(path.join(root, "js", "standards-geo.js"));
var version = (fs.readFileSync(path.join(root, "index.html"), "utf8").match(/\?v=([0-9.]+)/) || [0, "?"])[1];

/* ── the packs ── */
var sb = { window: {}, console: console }; sb.global = sb.window;
vm.runInNewContext(fs.readFileSync(path.join(root, "js", "content.js"), "utf8"), sb);
var start = sb.window.HEIST_PACKS.length;
FILES.forEach(function (f) { vm.runInNewContext(fs.readFileSync(path.join(root, "js", f), "utf8"), sb, { filename: f }); });
var packs = sb.window.HEIST_PACKS.slice(start).filter(function (p) { return p.family === "GEO"; });
var STRANDS = GS.STRANDS;
function codeOf(p) { return p.claims[0].sol; }
function stdIndex(code) { var k = Object.keys(GS.STANDARDS); return k.indexOf(code); }
packs.sort(function (a, b) { return stdIndex(codeOf(a)) - stdIndex(codeOf(b)) || (a.level - b.level); });

/* ── text helpers ── */
var ENT = { "&nbsp;": " ", "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&mdash;": "—", "&ndash;": "–", "&rsquo;": "’", "&lsquo;": "‘", "&ldquo;": "“", "&rdquo;": "”" };
function dec(s) { return String(s).replace(/&[a-z#0-9]+;/g, function (e) { return ENT[e] != null ? ENT[e] : e; }); }
function strip(s) { return dec(String(s || "").replace(/<br\s*\/?>/g, " ").replace(/<[^>]+>/g, "")); }
const FONT = "Arial";
const r = (text, o = {}) => new TextRun(Object.assign({ text: text, size: 21, font: FONT }, o));
const para = (runs, o = {}) => new Paragraph(Object.assign({ spacing: { after: o.after == null ? 100 : o.after, before: o.before || 0 }, children: [].concat(runs) }, o.extra || {},
  o.keepNext ? { keepNext: true } : {}, o.indent ? { indent: o.indent } : {}));
/* a paragraph's HTML (bold <strong>, italics <em>) as runs */
function htmlRuns(html, base) {
  var out = [], bold = 0, ital = 0;
  String(html).split(/(<[^>]+>)/).forEach(function (tok) {
    if (!tok) return;
    if (tok[0] === "<") {
      if (/^<strong|^<b[\s>]/.test(tok)) bold++; else if (/^<\/strong|^<\/b>/.test(tok)) bold--;
      else if (/^<em|^<i[\s>]/.test(tok)) ital++; else if (/^<\/em|^<\/i>/.test(tok)) ital--;
      return;
    }
    out.push(r(dec(tok), Object.assign({}, base || {}, { bold: bold > 0, italics: ital > 0 })));
  });
  return out;
}
const border = { style: BorderStyle.SINGLE, size: 4, color: "BFBFBF" }, borders = { top: border, bottom: border, left: border, right: border };
function table(rows, widths, opt) {
  opt = opt || {};
  var total = widths.reduce(function (a, b) { return a + b; }, 0);
  return new Table({ width: { size: total, type: WidthType.DXA }, columnWidths: widths,
    rows: rows.map(function (row, ri) { return new TableRow({ tableHeader: ri === 0 && opt.header !== false, cantSplit: true, children: row.map(function (cell, ci) {
      var head = ri === 0 && opt.header !== false;
      return new TableCell({ borders: borders, width: { size: widths[ci], type: WidthType.DXA }, margins: { top: 50, bottom: 50, left: 90, right: 90 },
        shading: head ? { type: ShadingType.CLEAR, color: "auto", fill: "EFE7D0" } : undefined,
        children: [new Paragraph({ children: [r(String(cell), { size: opt.size || 18, bold: head })] })] });
    }) }); }) });
}

(async function () {
  /* ── 1. the figures, rendered in print colours ── */
  var browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }).catch(function () { return chromium.launch(); });
  var page = await browser.newPage({ viewport: { width: 700, height: 600 }, deviceScaleFactor: 2.5 });
  var css = fs.readFileSync(path.join(root, "css", "after-hours.css"), "utf8");
  await page.setContent('<!DOCTYPE html><html><head><meta charset="utf-8"><style>' + css + '</style><style>' +
    ':root{--ink:#161616;--gold:#9a6a00;--bg:#fff}html,body{background:#fff!important;color:#161616;margin:0;padding:0;height:auto}' +
    '#fig{width:520px;padding:6px;background:#fff}#fig .geo-fig svg{max-height:none!important;width:100%}' +
    '#fig .geo-fig .sh{fill:rgba(154,106,0,.14)}#fig .geo-fig .sh2{fill:rgba(40,110,200,.14)}#fig .geo-fig .gr{stroke-opacity:.22}' +
    '</style></head><body><div id="fig"></div></body></html>');
  var images = {};
  for (var p of packs) {
    var figs = p.passage.match(/<figure[\s\S]*?<\/figure>/g) || [];
    images[p.id] = [];
    for (var i = 0; i < figs.length; i++) {
      await page.evaluate(function (h) { document.getElementById("fig").innerHTML = h; }, figs[i]);
      var el = await page.$("#fig svg"); if (!el) continue;
      var box = await el.boundingBox();
      var buf = await el.screenshot({ type: "png", omitBackground: false });
      var cap = (figs[i].match(/<figcaption>([\s\S]*?)<\/figcaption>/) || [])[1];
      images[p.id].push({ buf: buf, w: box.width, h: box.height, cap: cap ? strip(cap) : null });
    }
  }
  await browser.close();

  /* ── 2. the document ── */
  var kids = [], keyRows = [["Pack", "Question", "Standard", "Skill", "Level", "Answer"]];
  var count = packs.reduce(function (a, p) { return a + p.claims.length; }, 0);
  kids.push(new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun({ text: "Sol's Labyrinth: Geometry — question pool", font: FONT })] }));
  kids.push(para([r("Virginia 2023 Geometry Standards of Learning · game version " + version + " · " + packs.length + " question sets · " + count + " questions", { color: "555555" })]));
  kids.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("How to read this list")] }));
  [
    "Every question in the Geometry game is here, grouped by strand and standard. A question set is one figure and its given facts, then six questions about it. In the game, students see the figure before each question and keep it in the side panel while they play.",
    "The correct answer is in bold with a check mark (✔). Under each question: its standard, its skill (from the game's standards list, at the end of this document) and whether that skill is lower-order (LOTS) or higher-order (HOTS) thinking.",
    "Level 1 sets are one-step problems, level 2 two-step, level 3 multistep, proof or modeling problems. The game picks questions by level to match how each student is doing, and never asks a question again until the student has seen the rest.",
    "The review line under each question is for checking: tick the boxes and write notes, then send the changes back to be made in the game. The standard statements are short summaries of the 2023 Geometry SOL; please check them and the skills against the VDOE document too."
  ].forEach(function (t) { kids.push(para([r(t)], { after: 120 })); });
  /* what is in the pool: a fixed list (a Word contents field stays empty in Google Docs until updated) */
  kids.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("What is in the pool")] }));
  var crow = [["Strand", "Standard", "Question sets", "Questions"]];
  STRANDS.forEach(function (st) {
    st.codes.forEach(function (code, i) {
      var ps = packs.filter(function (p) { return codeOf(p) === code; });
      crow.push([i ? "" : st.label.replace(/&/g, "and"), code + " · " + GS.STANDARDS[code].text, String(ps.length), String(ps.reduce(function (a, p) { return a + p.claims.length; }, 0))]);
    });
  });
  kids.push(table(crow, [2000, 5260, 1000, 1100], { size: 17 }));

  var lastStrand = null, lastStd = null, qn = 0;
  packs.forEach(function (p) {
    var code = codeOf(p), st = STRANDS.filter(function (s) { return s.codes.indexOf(code) !== -1; })[0];
    if (st !== lastStrand) {
      kids.push(new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: true, children: [new TextRun(st.label.replace(/&/g, "and") + " (" + st.codes[0].replace(/\.\d$/, "") + ")")] }));
      lastStrand = st;
    }
    if (code !== lastStd) {
      kids.push(new Paragraph({ heading: HeadingLevel.HEADING_2, keepNext: true, children: [new TextRun(code + " · " + GS.STANDARDS[code].text)] }));
      lastStd = code;
    }
    kids.push(new Paragraph({ heading: HeadingLevel.HEADING_3, keepNext: true, spacing: { before: 240, after: 60 }, children: [new TextRun(strip(p.title))] }));
    kids.push(para([r("Level " + p.level + " · " + strip(p.kind) + " · ID " + p.id, { size: 17, color: "666666" })], { keepNext: true, after: 80 }));
    /* the figure(s) */
    (images[p.id] || []).forEach(function (im) {
      var maxW = 420, maxH = 260, k = Math.min(maxW / im.w, maxH / im.h, 1.1);
      kids.push(new Paragraph({ alignment: AlignmentType.CENTER, keepNext: true, spacing: { after: im.cap ? 0 : 80 },
        children: [new ImageRun({ type: "png", data: im.buf, transformation: { width: Math.round(im.w * k), height: Math.round(im.h * k) },
          altText: { title: strip(p.title), description: (p.passage.match(/aria-label="([^"]*)"/) || [])[1] || strip(p.title), name: p.id } })] }));
      if (im.cap) kids.push(para([r(im.cap, { size: 16, italics: true, color: "666666" })], { extra: { alignment: AlignmentType.CENTER }, keepNext: true }));
    });
    /* the givens and any proof table, in passage order */
    var rest = p.passage.replace(/<figure[\s\S]*?<\/figure>/g, "");
    (rest.match(/<p[\s\S]*?<\/p>|<table[\s\S]*?<\/table>/g) || []).forEach(function (blk) {
      if (/^<table/.test(blk)) {
        var rows = (blk.match(/<tr[\s\S]*?<\/tr>/g) || []).map(function (tr) { return (tr.match(/<t[hd][^>]*>[\s\S]*?<\/t[hd]>/g) || []).map(strip); });
        kids.push(table(rows, [5200, 4160]));
        kids.push(para([r("")], { after: 60 }));
      } else kids.push(para(htmlRuns(blk.replace(/^<p[^>]*>|<\/p>$/g, "")), { after: 120, keepNext: true }));
    });
    /* the questions */
    p.claims.forEach(function (c, ci) {
      qn++;
      var keys = [].concat(c.correct), sk = GS.SKILL[c.sub] || {};
      kids.push(para([r(qn + ". ", { bold: true }), r(c.stem)], { keepNext: true, after: 60, before: 80 }));
      c.choices.forEach(function (ch) {
        var ok = keys.indexOf(ch.letter) !== -1;
        kids.push(para([r(ch.letter + ".  ", { bold: ok }), r(strip(ch.text), { bold: ok }), ok ? r("   ✔", { bold: true, color: "2E7D32" }) : r("")],
          { indent: { left: 400 }, after: 20, keepNext: true }));
      });
      kids.push(para([r(c.sol + " · skill " + c.sub + " (" + (sk.level || "?") + "): " + (sk.text || ""), { size: 16, color: "666666" })], { indent: { left: 400 }, after: 20, keepNext: true }));
      kids.push(para([r("☐ Answer key correct   ☐ Wording clear   Notes: ________________________________", { size: 16, color: "7A5A00" })], { indent: { left: 400 }, after: 100 }));
      keyRows.push([p.id.replace(/^geo-/, ""), String(qn), c.sol, c.sub + " " + (sk.level || ""), String(p.level), keys.join(", ")]);
    });
  });

  /* answer key */
  kids.push(new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: true, children: [new TextRun("Answer key")] }));
  kids.push(table(keyRows, [2700, 1000, 1300, 1900, 900, 1560], { size: 17 }));
  /* standards and skills */
  kids.push(new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: true, children: [new TextRun("The standards and skills")] }));
  kids.push(para([r("The game's own list (js/standards-geo.js): each 2023 Geometry standard, summarized, and the skills its questions are tagged with. LOTS = lower-order thinking (identify, find, use); HOTS = higher-order (justify, prove, model, decide whether an argument is valid). Counts are questions in this pool.", { size: 19 })], { after: 140 }));
  var per = {}; packs.forEach(function (p) { p.claims.forEach(function (c) { per[c.sub] = (per[c.sub] || 0) + 1; }); });
  var srows = [["Skill", "LOTS / HOTS", "What the question asks", "Questions"]];
  Object.keys(GS.STANDARDS).forEach(function (code) {
    srows.push([code, "", GS.STANDARDS[code].text, ""]);
    GS.STANDARDS[code].skills.forEach(function (s) { srows.push([s.id, s.level, s.text, String(per[s.id] || 0)]); });
  });
  kids.push(table(srows, [1200, 1000, 5860, 1300], { size: 17 }));

  var doc = new Document({
    creator: "Sol's Labyrinth", title: "Sol's Labyrinth: Geometry — question pool",
    styles: { default: { document: { run: { font: FONT, size: 21 } } },
      paragraphStyles: [
        { id: "Title", name: "Title", basedOn: "Normal", run: { size: 40, bold: true, font: FONT, color: "1F2937" }, paragraph: { spacing: { after: 120 } } },
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 32, bold: true, font: FONT, color: "7A5A00" }, paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 24, bold: true, font: FONT, color: "1F2937" }, paragraph: { spacing: { before: 240, after: 100 }, outlineLevel: 1 } },
        { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 23, bold: true, font: FONT, color: "333333" }, paragraph: { spacing: { before: 200, after: 60 }, outlineLevel: 2 } }
      ] },
    sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, bottom: 1080, left: 1300, right: 1300 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [r("Sol's Labyrinth: Geometry · question pool · page ", { size: 16, color: "888888" }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: "888888", font: FONT })] })] }) },
      children: kids }]
  });
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(OUT, await Packer.toBuffer(doc));
  console.log("wrote " + path.relative(root, OUT) + ": " + packs.length + " packs, " + count + " questions, " + Object.keys(images).reduce(function (a, k) { return a + images[k].length; }, 0) + " figures");
})().catch(function (e) { console.error(e); process.exit(1); });
