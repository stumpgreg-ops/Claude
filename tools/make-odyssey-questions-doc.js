/* v5.18.1: writes docs/questions/The-Odyssey-question-pool.docx — every passage and question of the Odyssey game
   (English 9, Unit 2), in the order the game asks them (ODY_STORY in js/content.js), episode by episode: the passage
   in full, then its questions with the four choices, the keyed answer marked and the standard named, and an answer
   key at the end. Word opens it (Google Docs too).  node tools/make-odyssey-questions-doc.js  (uses the docx package) */
var fs = require("fs"), vm = require("vm"), path = require("path");
var root = path.join(__dirname, "..");
var ctx = { console: console }; ctx.window = ctx; ctx.self = ctx; ctx.globalThis = ctx;
vm.createContext(ctx);
["js/content.js", "js/content26.js", "js/content27.js", "js/content28.js", "js/content29.js", "js/content30.js", "js/content31.js"].forEach(function (f) {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
});
var STORY = ctx.heistOdyStory || [];
var packs = ctx.HEIST_PACKS.filter(function (p) { return p.family === "ODY"; });
packs.sort(function (a, b) { var i = STORY.indexOf(a.id), j = STORY.indexOf(b.id); return (i < 0 ? 1e6 : i) - (j < 0 ? 1e6 : j); });
var version = (/<p class="ver">v([0-9.]+)/.exec(fs.readFileSync(path.join(root, "index.html"), "utf8")) || [])[1] || "";

var D = require("docx");
var Document = D.Document, Packer = D.Packer, Paragraph = D.Paragraph, TextRun = D.TextRun, HeadingLevel = D.HeadingLevel, Table = D.Table, TableRow = D.TableRow,
  TableCell = D.TableCell, WidthType = D.WidthType, ShadingType = D.ShadingType, AlignmentType = D.AlignmentType, PageBreak = D.PageBreak, BorderStyle = D.BorderStyle,
  TableOfContents = D.TableOfContents, Footer = D.Footer, PageNumber = D.PageNumber;

/* the parts of the story (the frame and the paired texts are the "voyage" packs, first and last in story order) */
var PARTS = [
  { key: "frame", name: "The frame: Odysseus at the Phaeacian court", test: function (p, i) { return p.episode === "voyage" && i < 10; } },
  { key: "lotus", name: "Book 9: The Lotus-Eaters" }, { key: "cyclops", name: "Book 9: The Cyclops" }, { key: "circe", name: "Book 10: Circe" },
  { key: "helios", name: "Book 12: The Cattle of the Sun" }, { key: "calypso", name: "Book 5: Calypso" },
  { key: "paired", name: "Paired texts: the whole voyage", test: function (p, i) { return p.episode === "voyage" && i >= 10; } }
];
function partOf(p, i) {
  for (var k = 0; k < PARTS.length; k++) { var pt = PARTS[k]; if (pt.test ? pt.test(p, i) : p.episode === pt.key) return pt; }
  return { key: "other", name: "Other" };
}

var GOLD = "8A5A1A", WINE = "6B1F2E", GREEN = "1F6A3A", GREY = "666666";
function decode(s) { return String(s).replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;|&rsquo;/g, "’").replace(/&mdash;/g, "—").replace(/&ndash;/g, "–"); }
/* a bit of passage HTML -> runs: sentence numbers small and gold, <strong> bold, <em> italic */
function runs(html, base) {
  base = base || {};
  var out = [], st = { b: false, i: false, n: false }, re = /<(\/?)(strong|b|em|i|span)([^>]*)>|([^<]+)/g, m, stack = [];
  while ((m = re.exec(html))) {
    if (m[4] != null) {
      var t = decode(m[4]);
      if (!t) continue;
      out.push(new TextRun(Object.assign({}, base, { text: t, bold: st.b || base.bold, italics: st.i || base.italics },
        st.n ? { color: GOLD, bold: true, size: 17 } : {})));
      continue;
    }
    var close = m[1] === "/", tag = m[2];
    if (!close) {
      var kind = tag === "strong" || tag === "b" ? "b" : tag === "em" || tag === "i" ? "i" : /class="n"/.test(m[3]) ? "n" : "x";
      stack.push(kind); if (kind !== "x") st[kind] = true;
    } else {
      var k2 = stack.pop(); if (k2 && k2 !== "x") st[k2] = stack.indexOf(k2) !== -1;
    }
  }
  return out;
}
/* passage HTML -> paragraphs (each <p>; poems keep their lines) */
function passage(html) {
  var paras = [], blocks = String(html).match(/<p[^>]*>[\s\S]*?<\/p>/g) || [html];
  blocks.forEach(function (b) {
    var poem = /class="poem"/.test(b), inner = b.replace(/^<p[^>]*>/, "").replace(/<\/p>$/, "");
    var lines = poem ? inner.split(/<br\s*\/?>/) : [inner.replace(/<br\s*\/?>/g, " ")];
    lines.forEach(function (ln, k) {
      if (!ln.replace(/<[^>]+>/g, "").trim()) return;
      paras.push(new Paragraph({ children: runs(ln.trim()), spacing: { after: poem && k < lines.length - 1 ? 0 : 120, line: 300 }, indent: poem ? { left: 360 } : undefined,
        border: poem ? { left: { style: BorderStyle.SINGLE, size: 6, color: "D9B26A", space: 8 } } : undefined }));
    });
  });
  return paras;
}
function plain(html) { return decode(String(html || "").replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim(); }
function keyOf(c) { return Array.isArray(c.correct) ? c.correct : [c.correct]; }

var children = [], keyRows = [], totals = { packs: 0, q: 0 }, byPart = {}, byStd = {};
/* cover */
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 1800, after: 200 }, children: [new TextRun({ text: "The Odyssey: Labyrinth of the Wine-Dark Sea", bold: true, size: 44, color: WINE })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: [new TextRun({ text: "The question pool", size: 32, color: GOLD })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 600 }, children: [new TextRun({ text: "English 9 · Unit 2: Challenge Accepted! · game version " + version, size: 22, color: GREY })] }));
var coverAt = children.length;   /* the summary table goes here once counted */
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Contents")] }));
children.push(new TableOfContents("Contents", { hyperlink: true, headingStyleRange: "1-2" }));
children.push(new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "If the contents list is empty, right-click it in Word and choose Update Field.", italics: true, size: 18, color: GREY })] }));

var curPart = null, qn = 0;
packs.forEach(function (p, i) {
  var pt = partOf(p, STORY.indexOf(p.id) < 0 ? 99 : STORY.indexOf(p.id));
  if (pt !== curPart) {
    curPart = pt;
    children.push(new Paragraph({ children: [new PageBreak()] }));
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(pt.name)] }));
  }
  totals.packs++; byPart[pt.name] = byPart[pt.name] || { packs: 0, q: 0 }; byPart[pt.name].packs++;
  var words = plain(p.passage).split(" ").filter(Boolean).length;
  children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 360 }, keepNext: true, children: [new TextRun(p.title)] }));
  children.push(new Paragraph({ spacing: { after: 120 }, keepNext: true, children: [new TextRun({ text: [p.kind, "reading level " + (p.level || "?"), words + " words", p.id].filter(Boolean).join("  ·  "), size: 18, color: GREY })] }));
  if (p.blurb) children.push(new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: p.blurb, italics: true, size: 20 })] }));
  passage(p.passage).forEach(function (x) { children.push(x); });
  p.claims.forEach(function (c, k) {
    qn++; totals.q++; byPart[pt.name].q++;
    var key = keyOf(c), std = c.sol || "";
    byStd[std] = (byStd[std] || 0) + 1;
    children.push(new Paragraph({ spacing: { before: 200, after: 80 }, keepNext: true, children: [
      new TextRun({ text: qn + ".  ", bold: true, color: WINE }), new TextRun({ text: plain(c.stem), bold: true }),
      new TextRun({ text: "   " + std + (key.length > 1 ? " · Select TWO" : ""), size: 16, color: GREY })] }));
    c.choices.forEach(function (ch, j) {
      var ok = key.indexOf(ch.letter) !== -1;
      children.push(new Paragraph({ indent: { left: 540, hanging: 360 }, spacing: { after: 40 }, keepNext: j < c.choices.length - 1, children: [
        new TextRun({ text: ch.letter + ".  ", bold: true, color: ok ? GREEN : "000000" }),
        new TextRun({ text: plain(ch.text), bold: ok, color: ok ? GREEN : "000000" }),
        ok ? new TextRun({ text: "   ✓ answer", bold: true, size: 16, color: GREEN }) : new TextRun("")] }));
    });
    keyRows.push([String(qn), p.title, key.join(", "), std]);
  });
});

/* the answer key */
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Answer key")] }));
var KW = [900, 5500, 1300, 1660], cell = function (t, w, head, fill) {
  return new TableCell({ width: { size: w, type: WidthType.DXA }, shading: fill ? { type: ShadingType.CLEAR, color: "auto", fill: fill } : undefined,
    margins: { top: 40, bottom: 40, left: 80, right: 80 }, children: [new Paragraph({ children: [new TextRun({ text: t, bold: !!head, size: 18 })] })] });
};
children.push(new Table({ width: { size: 9360, type: WidthType.DXA }, columnWidths: KW, rows:
  [new TableRow({ tableHeader: true, children: ["#", "Passage", "Answer", "Standard"].map(function (h, i) { return cell(h, KW[i], true, "EFE3C8"); }) })]
    .concat(keyRows.map(function (r, n) { return new TableRow({ children: r.map(function (t, i) { return cell(t, KW[i], false, n % 2 ? "FAF6EE" : null); }) }); })) }));

/* the summary on the cover: passages and questions by part, and by standard */
var SW = [6360, 1500, 1500], summary = [new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: totals.packs + " passages · " + totals.q + " questions, in the order the game asks them", bold: true, size: 24 })] }),
  new Table({ width: { size: 9360, type: WidthType.DXA }, columnWidths: SW, rows:
    [new TableRow({ children: ["Part of the story", "Passages", "Questions"].map(function (h, i) { return cell(h, SW[i], true, "EFE3C8"); }) })]
      .concat(PARTS.filter(function (pt) { return byPart[pt.name]; }).map(function (pt) { return new TableRow({ children: [pt.name, String(byPart[pt.name].packs), String(byPart[pt.name].q)].map(function (t, i) { return cell(t, SW[i]); }) }); })) }),
  new Paragraph({ spacing: { before: 240, after: 80 }, children: [new TextRun({ text: "Questions by standard: " + Object.keys(byStd).sort().map(function (s) { return s + " (" + byStd[s] + ")"; }).join(", "), size: 18, color: GREY })] }),
  new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "The keyed answer is marked in green with ✓. Sentence and line numbers are the ones the questions refer to.", size: 18, color: GREY })] })];
Array.prototype.splice.apply(children, [coverAt, 0].concat(summary));

var doc = new Document({
  creator: "SOL Labyrinth", title: "The Odyssey — question pool",
  styles: { default: { document: { run: { font: "Georgia", size: 21 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 34, bold: true, color: WINE, font: "Georgia" }, paragraph: { spacing: { before: 240, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 26, bold: true, color: GOLD, font: "Georgia" }, paragraph: { spacing: { before: 280, after: 60 }, outlineLevel: 1 } }] },
  features: { updateFields: true },
  sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, bottom: 1080, left: 1260, right: 1260 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "The Odyssey — question pool · page ", size: 16, color: GREY }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: GREY })] })] }) },
    children: children }]
});
var outDir = path.join(root, "docs", "questions"), out = path.join(outDir, "The-Odyssey-question-pool.docx");
fs.mkdirSync(outDir, { recursive: true });
Packer.toBuffer(doc).then(function (buf) { fs.writeFileSync(out, buf); console.log("wrote " + path.relative(root, out) + ": " + totals.packs + " passages, " + totals.q + " questions"); });
