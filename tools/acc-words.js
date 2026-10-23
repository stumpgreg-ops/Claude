#!/usr/bin/env node
/* v5.19: the Virginia word lists for the accommodations (js/accommodations.js): definitions of the difficult words
   in the passages, questions and answers (tap a word for its meaning) and a word-to-word dictionary of every
   question-and-answer word in Spanish, Arabic, Farsi and Russian.
     node tools/acc-words.js list <dir> [size]   every distinct word of the Virginia packs (families G9, G10, G11),
                                                 with one example sentence each, split into <dir>/words-NN.json of
                                                 <size> words (default 300); qa: true when the word is in a question
                                                 or an answer (then it needs the four translations)
     node tools/acc-words.js merge <dir>         reads <dir>/out-*.jsonl (one JSON object per line:
                                                 {"w": "...", "tr": {"es","ar","fa","ru"} | null, "def": "..." | null}),
                                                 checks them against the word list and writes js/acc-va.js
     node tools/acc-words.js status <dir>        which words still have no entry
   The entries are written by language agents from the word files (see README v5.19); regenerate when the Virginia
   questions change. A word is keyed as js/accommodations.js keys it: lower case, ’ as ', a trailing 's dropped. */
var fs = require("fs"), path = require("path"), vm = require("vm");
var root = path.join(__dirname, "..");
var VA = /^G(9|10|11)$/, LANGS = ["es", "ar", "fa", "ru"];
var RE = /[A-Za-z][A-Za-z'’-]*[A-Za-z]|[A-Za-z]/g;
function norm(w) { return String(w).replace(/’/g, "'").replace(/'s$/i, "").replace(/'$/, "").toLowerCase(); }
function strip(h) { return String(h || "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim(); }
function packs() {
  var out = [];
  fs.readdirSync(path.join(root, "js")).filter(function (f) { return /^content\d*\.js$/.test(f); }).sort().forEach(function (f) {
    var sb = { window: { HEIST_PACKS: [] }, console: console };
    vm.runInNewContext(fs.readFileSync(path.join(root, "js", f), "utf8"), sb, { filename: f });
    sb.window.HEIST_PACKS.forEach(function (p) { if (VA.test(p.family)) out.push(p); });
  });
  return out;
}
function sentences(text) { return strip(text).split(/(?<=[.!?…])\s+(?=[A-Z"“'(])/); }
/* every word, with the shortest sentence that uses it (a question's or answer's sentence first, for the sense the
   dictionary needs; the passage's otherwise) */
function words() {
  var W = {};
  function see(text, qa) {
    sentences(text).forEach(function (s) {
      (s.match(RE) || []).forEach(function (m) {
        var w = norm(m);
        if (!w) return;
        var e = W[w] || (W[w] = { w: w, qa: false, ex: "" });
        if (qa && !e.qa) { e.qa = true; e.ex = ""; }
        if (qa === e.qa && (!e.ex || s.length < e.ex.length) && s.length <= 220) e.ex = s;
        if (!e.ex) e.ex = s.slice(0, 220);
      });
    });
  }
  packs().forEach(function (p) {
    see(p.passage, false);
    (p.claims || []).forEach(function (c) {
      see(c.stem, true);
      (c.choices || []).forEach(function (ch) { see(ch.text, true); });
    });
  });
  return Object.keys(W).sort().map(function (k) { return W[k]; });
}
function readOut(dir) {
  var E = {}, bad = [];
  fs.readdirSync(dir).filter(function (f) { return /^out-.*\.jsonl$/.test(f); }).sort().forEach(function (f) {
    fs.readFileSync(path.join(dir, f), "utf8").split("\n").forEach(function (line, i) {
      line = line.trim();
      if (!line) return;
      var o;
      try { o = JSON.parse(line); } catch (e) { bad.push(f + ":" + (i + 1) + " not JSON"); return; }
      if (!o || typeof o.w !== "string") { bad.push(f + ":" + (i + 1) + " no w"); return; }
      E[norm(o.w)] = { tr: o.tr || null, def: o.def || null, src: f + ":" + (i + 1) };
    });
  });
  return { E: E, bad: bad };
}
var cmd = process.argv[2], dir = process.argv[3];
if (cmd === "list") {
  if (!dir) { console.log("usage: list <dir> [size]"); process.exit(1); }
  var size = parseInt(process.argv[4], 10) || 300, all = words();
  fs.mkdirSync(dir, { recursive: true });
  var n = 0;
  for (var i = 0; i < all.length; i += size) {
    var name = "words-" + ("0" + (++n)).slice(-2) + ".json";
    fs.writeFileSync(path.join(dir, name), JSON.stringify(all.slice(i, i + size), null, 1));
  }
  console.log(all.length + " words (" + all.filter(function (e) { return e.qa; }).length + " in questions and answers) in " + n + " files of " + size + " in " + dir);
} else if (cmd === "status" || cmd === "merge") {
  if (!dir) { console.log("usage: " + cmd + " <dir>"); process.exit(1); }
  var list = words(), R = readOut(dir), E = R.E, errs = R.bad.slice(), missing = [], def = {}, tr = {}, nd = 0, nt = 0;
  list.forEach(function (e) {
    var o = E[e.w];
    if (!o) { missing.push(e.w); return; }
    if (e.qa) {
      if (!o.tr || typeof o.tr !== "object") { errs.push(e.w + ": no translations (" + o.src + ")"); }
      else {
        var t = {}, ok = true;
        LANGS.forEach(function (l) { var v = o.tr[l]; if (typeof v !== "string" || !v.trim()) { ok = false; errs.push(e.w + ": no " + l + " (" + o.src + ")"); } else t[l] = v.trim(); });
        if (ok) { tr[e.w] = t; nt++; }
      }
    }
    if (typeof o.def === "string" && o.def.trim()) { def[e.w] = o.def.trim(); nd++; }
  });
  console.log(list.length + " words: " + (list.length - missing.length) + " have entries, " + missing.length + " missing; " + nt + " translated, " + nd + " defined; " + errs.length + " problem(s)");
  if (missing.length) {
    var byFile = {};
    fs.readdirSync(dir).filter(function (f) { return /^words-.*\.json$/.test(f); }).sort().forEach(function (f) {
      var ws = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")).map(function (e) { return e.w; }).filter(function (w) { return !E[w]; });
      if (ws.length) byFile[f] = ws;
    });
    Object.keys(byFile).forEach(function (f) { console.log("  " + f + ": " + byFile[f].length + " missing" + (byFile[f].length <= 12 ? " (" + byFile[f].join(", ") + ")" : "")); });
  }
  if (errs.length) console.log(errs.slice(0, 40).join("\n") + (errs.length > 40 ? "\n  ... " + (errs.length - 40) + " more" : ""));
  if (cmd === "merge") {
    if (missing.length || errs.length) { console.log("nothing written: fix the missing words and problems first"); process.exit(1); }
    var out = "/* SOL Labyrinth: the Virginia word lists for the accommodations (js/accommodations.js), v5.19.\n" +
      "   def: short student definitions of the difficult words in the passages, questions and answers (written for this game).\n" +
      "   tr: a word-to-word dictionary of every word in the questions and answers (es Spanish, ar Arabic, fa Farsi, ru Russian),\n" +
      "   the sense used in the question. Generated from the packs by tools/acc-words.js (see README v5.19); regenerate when\n" +
      "   Virginia questions change. */\n" +
      "window.SOL_ACC_DATA = " + JSON.stringify({ def: def, tr: tr }) + ";\n";
    fs.writeFileSync(path.join(root, "js", "acc-va.js"), out);
    console.log("js/acc-va.js written: " + nd + " definitions, " + nt + " dictionary words, " + (out.length / 1024).toFixed(0) + " KB");
  }
} else {
  console.log("usage: acc-words.js list <dir> [size] | merge <dir> | status <dir>");
}
