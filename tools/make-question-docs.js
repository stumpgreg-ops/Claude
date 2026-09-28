/* v5.7.1: writes docs/questions/SOL-Labyrinth-Grade<N>-questions-by-level.docx, one Word file per grade
   (Google Docs opens them), listing level by level the questions the game's own picker is most likely to
   give an average on-grade student (reading level 2), then that grade's remaining questions in an appendix.
   Needs the docx package:  npm install --no-save docx && node tools/make-question-docs.js */
var fs = require("fs"), vm = require("vm"), path = require("path");
var root = path.join(__dirname, "..");
var html = fs.readFileSync(root + "/index.html", "utf8");
var files = (html.match(/js\/content\d*\.js/g) || []);
var ctx = { console: console }; ctx.window = ctx; ctx.self = ctx; ctx.globalThis = ctx;
vm.createContext(ctx);
files.forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f }); });
var out = { files: files, families: ctx.HEIST_FAMILIES, packs: [] };
ctx.HEIST_PACKS.forEach(function (p) {
  out.packs.push({ id: p.id, family: p.family, title: p.title, genre: p.genre, level: ctx.heistPackLevel(p), words: ctx.heistWordCount(p.passage || ""), passage: p.passage,
    claims: p.claims.map(function (c) { return { id: c.id, sol: c.sol, strand: ctx.heistStrandOf(c), stem: c.stem, choices: c.choices, correct: c.correct, partB: c.partB || null, why: c.why || c.explain || c.rationale || null }; }) });
});
out.target = []; for (var n = 1; n <= 100; n++) out.target.push(ctx.heistTargetWords(n));


const D = require("docx");
const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, ShadingType, AlignmentType, PageBreak, BorderStyle, LevelFormat, TableOfContents, Footer, PageNumber } = D;
const q = out;
const T = q.target;
const POOL = { G9: ["G9"], G10: ["G9", "G10"], G11: ["G9", "G10", "G11"], NJ5: ["NJ5"] };
const NAME = { NJ5: "Grade 5 (New Jersey, NJSLA-ELA)", G9: "Grade 9 (Virginia, Selection 1)", G10: "Grade 10 (Virginia, Selection 2)", G11: "Grade 11 (Virginia, Selection 3)" };
const SHORT = { NJ5: "Grade 5", G9: "Grade 9", G10: "Grade 10", G11: "Grade 11" };
const REALMS = ["Midgard", "Niflheim", "Jotunheim", "Muspelheim", "Svartalfheim", "Vanaheim", "Alfheim", "Helheim", "Asgard", "Ragnarok"];
const RL = { 1: "1 (easier)", 2: "2 (middle)", 3: "3 (harder)" };
const STRAND = { RL: "Literature", RI: "Informational", RV: "Vocabulary", DSR: "Research / sources", LANG: "Language" };

function strip(s) { return String(s || "").replace(/<br\s*\/?>/g, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”"); }
function bestFit(w) { let b = 0, bd = 1e9; T.forEach((t, i) => { const d = Math.abs(t - w); if (d < bd) { bd = d; b = i; } }); return b + 1; }
function served(w) { const ls = []; T.forEach((t, i) => { if (w >= 0.6 * t && w <= 1.6 * t) ls.push(i + 1); }); return ls.length ? ls[0] + "–" + ls[ls.length - 1] : "any (fallback)"; }
function correctList(c) { return Array.isArray(c.correct) ? c.correct.map(String) : String(c.correct || "").split(/[,\s]+/).filter(Boolean); }
function realmOf(level) { return Math.floor((level - 1) / 10); }

const FONT = "Arial";
const p = (text, o = {}) => new Paragraph({ spacing: { after: o.after == null ? 100 : o.after, before: o.before || 0 }, indent: o.indent, keepNext: o.keepNext, children: [].concat(text).map(t => typeof t === "string" ? new TextRun({ text: t, size: o.size || 21, bold: o.bold, italics: o.italics, color: o.color }) : t) });
const r = (text, o = {}) => new TextRun(Object.assign({ text, size: 21 }, o));
const border = { style: BorderStyle.SINGLE, size: 4, color: "BFBFBF" };
const borders = { top: border, bottom: border, left: border, right: border };
function table(widths, rows, headShade) {
  const total = widths.reduce((a, b) => a + b, 0);
  return new Table({ width: { size: total, type: WidthType.DXA }, columnWidths: widths,
    rows: rows.map((row, ri) => new TableRow({ tableHeader: ri === 0, cantSplit: true, children: row.map((cell, ci) => new TableCell({ borders, width: { size: widths[ci], type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 100, right: 100 },
      shading: ri === 0 ? { fill: headShade || "E7E3D4", type: ShadingType.CLEAR } : (cell && cell.fill ? { fill: cell.fill, type: ShadingType.CLEAR } : undefined),
      children: [new Paragraph({ children: [new TextRun({ text: String(cell && cell.text != null ? cell.text : cell), size: 18, bold: ri === 0 || (cell && cell.bold) })] })] })) })) });
}

const MODE = { 2: "Eagle Swoop", 4: "Rune Rocks", 6: "Sun Chariot", 8: "Wolf Ring" };
const ABILITY = 2.0;   /* an average, on-grade reader: reading level 2 (middle) */
function extractsFor(n) { return n >= 80 ? 7 : n >= 55 ? 6 : 5; }
function levelKind(n) { const k = ((n - 1) % 10) + 1; return k === 10 ? "Fenrir's boss maze" : MODE[k] ? MODE[k] + " (shooter)" : "maze"; }

/* the game's picker (game.js nextClaim), made deterministic: the most likely question each time */
function simulate(pool) {
  const claims = [];
  pool.forEach(pk => {
    const bset = new Set(pk.claims.map(c => c.partB).filter(Boolean));
    pk.claims.forEach(c => claims.push({ pk, c, id: pk.id + ":" + c.id, isPartB: bset.has(c.id), partB: c.partB ? pk.id + ":" + c.partB : null, level: pk.level, words: pk.words }));
  });
  const byId = {}; claims.forEach(x => byId[x.id] = x);
  let used = [];
  const levels = [];
  for (let n = 1; n <= 100; n++) {
    const want = T[n - 1], nightPacks = [], picks = [];
    let prev = null;
    while (picks.length < extractsFor(n)) {
      let pick = null;
      if (prev && prev.partB) pick = byId[prev.partB];
      if (!pick) {
        const unused = x => used.indexOf(x.id) === -1;
        let pl = claims.filter(x => !x.isPartB && unused(x) && nightPacks.indexOf(x.pk.id) === -1);
        if (!pl.length) pl = claims.filter(x => !x.isPartB && unused(x));
        if (!pl.length) { used = used.slice(-20); pl = claims.filter(x => !x.isPartB && unused(x)); }
        const inBand = x => x.words >= want * 0.6 && x.words <= want * 1.6;
        const band = pl.filter(inBand);
        if (band.length >= 12) pl = band;
        else {
          const recent = used.slice(-20);
          const again = claims.filter(x => !x.isPartB && recent.indexOf(x.id) === -1 && nightPacks.indexOf(x.pk.id) === -1 && inBand(x));
          if (again.length >= 12) pl = again;
        }
        let bw = -1;
        pl.forEach(x => { let w = Math.exp(-Math.abs(x.level - ABILITY) * 1.3) * Math.exp(-Math.abs(x.words - want) / (0.18 * want)); if (used.indexOf(x.id) !== -1) w *= 0.35; if (w > bw + 1e-12) { bw = w; pick = x; } });
      }
      used.push(pick.id);
      if (nightPacks.indexOf(pick.pk.id) === -1) nightPacks.push(pick.pk.id);
      picks.push(pick); prev = pick;
    }
    levels.push({ n, want, picks });
  }
  return { levels, claims };
}

function passageParas(x, kids) {
  const paras = String(x.passage || "").split(/<\/p>|<p[^>]*>/).map(s => s.trim()).filter(Boolean);
  paras.forEach(pp => {
    const lines = strip(pp).split("\n");
    const runs = []; lines.forEach((ln, i) => runs.push(new TextRun({ text: ln, size: 20, break: i ? 1 : 0 })));
    kids.push(new Paragraph({ spacing: { after: 100 }, indent: { left: 360 }, border: { left: { style: BorderStyle.SINGLE, size: 12, color: "D8C58A", space: 8 } }, children: runs }));
  });
}
function questionParas(pk, c, qn, kids) {
  const bset = new Set(pk.claims.map(o => o.partB).filter(Boolean));
  const cor = correctList(c), isB = bset.has(c.id), isA = !!c.partB;
  const tag = (isA ? "Part A · " : isB ? "Part B · " : "") + (c.sol ? c.sol + " · " : "") + (STRAND[c.strand] || c.strand || "");
  kids.push(p([r("Q" + qn + ". ", { bold: true }), r(strip(c.stem), { bold: true })], { before: 160, after: 40, keepNext: true }));
  kids.push(p([r(tag + (cor.length > 1 ? " · select " + cor.length : ""), { size: 17, color: "777777" })], { after: 40, keepNext: true }));
  (c.choices || []).forEach((ch, i, arr) => {
    const ok = cor.includes(String(ch.letter));
    kids.push(p([r((ok ? "✓ " : "    ") + ch.letter + ".  ", { bold: ok, color: ok ? "1E7B34" : undefined }), r(strip(ch.text), { bold: ok, color: ok ? "1E7B34" : undefined })], { after: 20, indent: { left: 360 }, keepNext: i < arr.length - 1 }));
  });
  kids.push(p([r("☐ Answer key correct   ☐ Wording OK   Notes: ______________________", { size: 17, color: "7A5A00" })], { after: 60, indent: { left: 360 } }));
}
function passageHead(pk, kids, where, fullText) {
  kids.push(new Paragraph({ heading: HeadingLevel.HEADING_3, keepNext: true, children: [new TextRun(strip(pk.title))] }));
  kids.push(p([r(SHORT[pk.family] + " passage · " + pk.words + " words · reading level " + RL[pk.level] + " · " + (pk.kind ? strip(pk.kind) + " · " : "") + "ID " + pk.id, { size: 18, color: "555555" })], { keepNext: true }));
  if (fullText) {
    kids.push(p([r("☐ Passage accurate   ☐ Style / grade-appropriate   Notes: ______________________________", { size: 18, color: "7A5A00" })], { after: 120, keepNext: true }));
    passageParas(pk, kids);
  } else kids.push(p([r("Full passage printed at " + where + ".", { italics: true, size: 19, color: "555555" })], { keepNext: true }));
}

function buildGrade(g) {
  const pool = q.packs.filter(x => POOL[g].includes(x.family)).sort((a, b) => a.words - b.words || a.id.localeCompare(b.id));
  const own = pool.filter(x => x.family === g);
  const nqOwn = own.reduce((a, x) => a + x.claims.length, 0);
  const sim = simulate(pool);
  const kids = [];
  kids.push(new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun({ text: "Sol's Labyrinth — " + SHORT[g] + " questions by level", font: FONT })] }));
  kids.push(p(NAME[g] + " · game version 5.7.6 · for an average student reading on grade level", { italics: true, color: "555555" }));

  kids.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("What this list shows")] }));
  const bullets = [
    "The game is adaptive, so no two students see exactly the same questions. This list follows one average student: someone reading on grade level (the game's reading level 2 of 3) who stays there. For each level it shows the questions the game is most likely to give that student, in order.",
    "Levels 1–54 ask 5 questions, levels 55–79 ask 6, and levels 80–100 ask 7. A Part B (evidence) question always comes right after its Part A.",
    "Passages get longer as the levels go up: the target is 60 words on level 1 and grows by 10 words every two levels (300 words at level 50, 550 at level 100). The game draws only passages between 60% and 160% of that target and favours the closest ones.",
    "A student who answers well moves up to reading level 3 (harder passages and questions); one who struggles moves down to level 1. Those passages are all in this list or in the appendix.",
    "Each passage is printed in full the first time it appears; later levels that use the same passage point back to it. The ✓ marks the keyed answer. The check boxes are for the reviewer.",
  ];
  if (g === "G10") bullets.push("Grade 10 students also get the Grade 9 passages, so some of those appear here too.");
  if (g === "G11") bullets.push("Grade 11 students also get the Grade 9 and Grade 10 passages, so some of those appear here too.");
  bullets.forEach(b2 => kids.push(new Paragraph({ numbering: { reference: "bul", level: 0 }, spacing: { after: 60 }, children: [r(b2)] })));

  /* progression summary */
  kids.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Does it get harder as the levels go up?")] }));
  const rows = [["Levels (realm)", "Target length", "Passage lengths this student gets", "Reading levels (1/2/3)", "Note"]];
  const flags = [];
  for (let k = 0; k < 10; k++) {
    const ps = [].concat(...sim.levels.slice(k * 10, k * 10 + 10).map(L => L.picks.map(x => x.pk)));
    const ws = ps.map(x => x.words), lo = T[k * 10], hi = T[k * 10 + 9];
    const cnt = [1, 2, 3].map(l => ps.filter(x => x.level === l).length).join(" / ");
    const near = ps.filter(x => x.words >= lo * 0.85 && x.words <= hi * 1.15).length / ps.length;
    let note = near < 0.5 ? "Few passages written near this length; the game borrows shorter or longer ones" : "";
    if (note) flags.push(k);
    rows.push([{ text: (k * 10 + 1) + "–" + (k * 10 + 10) + " (" + REALMS[k] + ")", fill: note ? "FCEFC7" : null }, lo + "–" + hi + " words", Math.min(...ws) + "–" + Math.max(...ws) + " words (median " + ws.slice().sort((a, b) => a - b)[Math.floor(ws.length / 2)] + ")", cnt, note]);
  }
  kids.push(table([1900, 1300, 2600, 1300, 2260], rows));
  kids.push(p(flags.length ? "Passages grow with the levels overall. The marked rows (" + flags.map(k => "levels " + (k * 10 + 1) + "–" + (k * 10 + 10)).join(", ") + ") have few passages written near their target length, so the texts there don't grow as smoothly. More passages of those lengths would fix it." : "Passages grow steadily with the levels.", { before: 120 }));

  /* the levels */
  const firstAt = {}; let qn = 0;
  sim.levels.forEach(L => {
    const k = realmOf(L.n);
    if ((L.n - 1) % 10 === 0) kids.push(new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: true, children: [new TextRun(REALMS[k] + " · levels " + (L.n) + "–" + (L.n + 9))] }));
    kids.push(new Paragraph({ heading: HeadingLevel.HEADING_2, keepNext: true, children: [new TextRun("Level " + L.n + " · " + levelKind(L.n) + " · target " + L.want + " words · " + L.picks.length + " questions")] }));
    let lastPk = null;
    L.picks.forEach(x => {
      if (x.pk !== lastPk) {
        const seen = firstAt[x.pk.id];
        passageHead(x.pk, kids, seen, !seen);
        if (!seen) firstAt[x.pk.id] = "Level " + L.n;
        lastPk = x.pk;
      }
      qn++;
      questionParas(x.pk, x.c, qn, kids);
    });
  });

  /* appendix: this grade's questions the average student would not reach */
  const servedIds = new Set([].concat(...sim.levels.map(L => L.picks.map(x => x.id))));
  const rest = own.map(pk => ({ pk, cs: pk.claims.filter(c => !servedIds.has(pk.id + ":" + c.id)) })).filter(o => o.cs.length);
  const nRest = rest.reduce((a, o) => a + o.cs.length, 0);
  kids.push(new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: true, children: [new TextRun("Appendix · " + SHORT[g] + " questions this student would not reach")] }));
  kids.push(p("These " + nRest + " questions are still in the game. Students reading above or below grade level get them, and so do students who play past the point where the pool starts over. Shortest passages first."));
  rest.forEach(o => {
    const seen = firstAt[o.pk.id];
    passageHead(o.pk, kids, seen, !seen);
    if (!seen) firstAt[o.pk.id] = "the appendix";
    o.cs.forEach(c => { qn++; questionParas(o.pk, c, qn, kids); });
  });
  const served = qn - nRest;
  return writeDoc(g, kids, "questions by level", "-questions-by-level.docx").then(f => console.log(f, "levels:", served, "questions; appendix:", nRest, "; own grade total:", nqOwn, "; flagged realms:", flags.map(k => REALMS[k]).join(",") || "none"));
}
function writeDoc(g, kids, what, suffix) {
  const doc = new Document({
    creator: "Sol's Labyrinth", title: "Sol's Labyrinth — " + SHORT[g] + " " + what,
    styles: { default: { document: { run: { font: FONT, size: 21 } } },
      paragraphStyles: [
        { id: "Title", name: "Title", basedOn: "Normal", run: { size: 40, bold: true, font: FONT, color: "3A2A10" }, paragraph: { spacing: { after: 120 } } },
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 30, bold: true, font: FONT, color: "3A2A10" }, paragraph: { spacing: { before: 240, after: 140 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 25, bold: true, font: FONT, color: "6A4A10" }, paragraph: { spacing: { before: 320, after: 80 }, outlineLevel: 1 } },
        { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 22, bold: true, font: FONT, color: "3A2A10" }, paragraph: { spacing: { before: 200, after: 40 }, outlineLevel: 2 } }] },
    numbering: { config: [{ reference: "bul", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] }] },
    sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: SHORT[g] + " questions · page ", size: 16, color: "888888" }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: "888888" })] })] }) },
      children: kids }]
  });
  const f = path.join(root, "docs", "questions", "SOL-Labyrinth-") + SHORT[g].replace(" ", "") + suffix;
  return Packer.toBuffer(doc).then(buf => { fs.writeFileSync(f, buf); return f; });
}

/* v5.7.6: every question of a grade, with no adapting. Reading level is ignored; each passage sits at
   the level whose target length is closest to its own (the one rule that does not depend on the
   student), with all its questions, Part A then Part B. Levels with no passage of their length say so. */
function bestFitLevel(w) { let b = 0, bd = 1e9; T.forEach((t, i) => { const d = Math.abs(t - w); if (d < bd) { bd = d; b = i; } }); return b + 1; }
function buildAll(g) {
  const own = q.packs.filter(x => x.family === g).map(x => Object.assign({ fit: bestFitLevel(x.words) }, x))
    .sort((a, b) => a.fit - b.fit || a.words - b.words || a.id.localeCompare(b.id));
  const nq = own.reduce((a, x) => a + x.claims.length, 0);
  const kids = [];
  kids.push(new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun({ text: "Sol's Labyrinth — every " + SHORT[g] + " question by level", font: FONT })] }));
  kids.push(p(NAME[g] + " · game version 5.7.6 · " + own.length + " passages, " + nq + " questions · no adapting", { italics: true, color: "555555" }));
  kids.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("What this list shows")] }));
  [
    "Every question written for " + SHORT[g] + ", in level order, as if the game did not adapt to the student at all.",
    "The one thing the game changes by level on its own is passage length: 60 words on level 1, 10 more every two levels, 300 at level 50 and 550 at level 100. Each passage is listed at the level whose target length is closest to its word count, with all of its questions (a Part B right after its Part A).",
    "Reading level (1 easier, 2 middle, 3 harder) is shown for each passage but does not move it. In the game, reading level is the part that adapts; here it is left out on purpose.",
    "In play, a level asks 5 questions (6 from level 55, 7 from level 80), and a passage can be used on any level where its length is between 60% and 160% of the target, so a level may draw on passages listed a few levels either side.",
    (g === "G10" ? "Grade 10 students also get the Grade 9 questions (see the Grade 9 list). " : g === "G11" ? "Grade 11 students also get the Grade 9 and Grade 10 questions (see those lists). " : "") + "The ✓ marks the keyed answer; the check boxes are for the reviewer."
  ].forEach(t => kids.push(new Paragraph({ numbering: { reference: "bul", level: 0 }, spacing: { after: 60 }, children: [r(t)] })));
  /* coverage by realm */
  kids.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Passages per group of ten levels")] }));
  const rows = [["Levels (realm)", "Target length", "Passages placed here", "Questions", "Reading levels (1/2/3)"]];
  for (let k = 0; k < 10; k++) {
    const ps = own.filter(x => realmOf(x.fit) === k);
    rows.push([{ text: (k * 10 + 1) + "–" + (k * 10 + 10) + " (" + REALMS[k] + ")", fill: ps.length < 3 ? "FCEFC7" : null }, T[k * 10] + "–" + T[k * 10 + 9] + " words", String(ps.length), String(ps.reduce((a, x) => a + x.claims.length, 0)), [1, 2, 3].map(l => ps.filter(x => x.level === l).length).join(" / ")]);
  }
  kids.push(table([2100, 1600, 1900, 1300, 2460], rows));
  kids.push(p("Shaded rows have fewer than three passages written near their length, so in play those levels borrow from their neighbours.", { before: 100, italics: true, color: "555555" }));
  /* the levels */
  let qn = 0, curRealm = -1, lastFit = 0;
  own.forEach(x => {
    const k = realmOf(x.fit);
    if (k !== curRealm) { curRealm = k; kids.push(new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: true, children: [new TextRun(REALMS[k] + " · levels " + (k * 10 + 1) + "–" + (k * 10 + 10))] })); }
    if (x.fit !== lastFit) {
      lastFit = x.fit;
      kids.push(new Paragraph({ heading: HeadingLevel.HEADING_2, keepNext: true, children: [new TextRun("Level " + x.fit + " · " + levelKind(x.fit) + " · target " + T[x.fit - 1] + " words")] }));
    }
    passageHead(x, kids, "", true);
    x.claims.forEach(c => { qn++; questionParas(x, c, qn, kids); });
  });
  return writeDoc(g, kids, "every question by level", "-all-questions-no-adapting.docx").then(f => console.log(f, own.length, "passages", qn, "questions"));
}

fs.mkdirSync(path.join(root, "docs", "questions"), { recursive: true });
Promise.all(["NJ5", "G9", "G10", "G11"].map(buildGrade).concat(["NJ5", "G9", "G10", "G11"].map(buildAll))).catch(e => { console.error(e); process.exit(1); });
