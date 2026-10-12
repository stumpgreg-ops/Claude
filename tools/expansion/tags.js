#!/usr/bin/env node
/* v5.17: tagging every Virginia question with its 2024 standard and SKILL (js/standards-va.js; see
   tools/expansion/TAGGING.md). v5.21: the Odyssey's questions (family ODY, all grade 9) too, each with a
   short note on why its answer is right (why).
     node tools/expansion/tags.js skills 9              the skills of grade 9 (10, 11), with LOTS/HOTS
     node tools/expansion/tags.js list js/content50.js  the file's Virginia (or Odyssey) questions: key, current tag, kind, stem, answer
     node tools/expansion/tags.js apply js/content50.js tags.json
                                                       checks tags.json ({"packId:claimId": "9.RL.2.A.2", ...}: one
                                                       skill for EVERY Virginia question in the file) and rewrites the
                                                       file: sol = the skill's standard, sub = the skill. A value can
                                                       also be {"sub": "9.RL.1.A.1", "why": "..."}: why is written
                                                       on the line after sub (the Odyssey's annotated answer key)
     node tools/expansion/tags.js status               how many questions in each file have a skill
   apply refuses (and changes nothing) if a question is missing, a skill doesn't exist, or a skill changes the
   question's grade or strand (RL, RI, RV, DSR): the game's skill filter and the grade pools stay as they are. */
var fs = require("fs"), path = require("path"), vm = require("vm");
var root = path.join(__dirname, "..", "..");
var SS = require(path.join(root, "js", "standards-va.js"));
var VA = /^(G9|G10|G11|ODY)$/;   /* the families tagged with a skill: Virginia and the Odyssey */
function load(file) {
  var src = fs.readFileSync(file, "utf8"), sb = { window: { HEIST_PACKS: [] }, console: console };
  vm.runInNewContext(src, sb, { filename: file });
  return { src: src, packs: sb.window.HEIST_PACKS || [] };
}
function strip(h) { return String(h || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(); }
function strand(code) { var m = /^\d+\.(RL|RI|RV|DSR)\./.exec(code + "."); return m ? m[1] : ""; }
function claimsOf(packs) {
  var out = [];
  packs.forEach(function (p) {
    (p.claims || []).forEach(function (c) { out.push({ p: p, c: c, key: p.id + ":" + c.id, va: VA.test(p.family) }); });
  });
  return out;
}
var cmd = process.argv[2];
if (cmd === "skills") {
  var g = String(process.argv[3] || "9");
  Object.keys(SS.STANDARDS).filter(function (k) { return k.split(".")[0] === g; }).forEach(function (k) {
    console.log(k + "  " + SS.STANDARDS[k].text);
    SS.STANDARDS[k].skills.forEach(function (s) { console.log("    " + s.id + "  " + s.level + "  " + s.text); });
  });
} else if (cmd === "list") {
  var L = load(process.argv[3]);
  claimsOf(L.packs).forEach(function (x) {
    if (!x.va) return;
    var c = x.c, corr = [].concat(c.correct), ans = (c.choices || []).filter(function (ch) { return corr.indexOf(ch.letter) !== -1; }).map(function (ch) { return strip(ch.text); }).join(" | ");
    console.log(x.key + "\t" + c.sol + (c.sub ? " " + c.sub : "") + "\t" + (x.p.kind || "") + "\tQ: " + strip(c.stem) + "\tA: " + ans + (c.why ? "\tWHY: " + c.why : ""));
  });
} else if (cmd === "apply") {
  var file = process.argv[3], tags = JSON.parse(fs.readFileSync(process.argv[4], "utf8")), whys = {};
  Object.keys(tags).forEach(function (k) {
    var v = tags[k];
    if (v && typeof v === "object") { whys[k] = v.why == null ? null : String(v.why).replace(/\s+/g, " ").trim(); tags[k] = v.sub; }
  });
  var L2 = load(file), all = claimsOf(L2.packs), errs = [], seen = {};
  if (all.some(function (x) { return !x.va; })) { console.log(file + ": not a Virginia or Odyssey file"); process.exit(1); }
  all.forEach(function (x) {
    if (!x.va) return;
    var t = tags[x.key]; seen[x.key] = 1;
    if (!t) { errs.push(x.key + ": no skill"); return; }
    if (x.key in whys && !whys[x.key]) errs.push(x.key + ": empty why");
    var k = SS.SKILL[t];
    if (!k) { errs.push(x.key + ": " + t + " is not a skill in js/standards-va.js"); return; }
    if (t.split(".")[0] !== String(x.c.sol).split(".")[0]) errs.push(x.key + ": " + t + " changes the grade (was " + x.c.sol + ")");
    if (strand(t) !== strand(x.c.sol)) errs.push(x.key + ": " + t + " changes the strand (was " + x.c.sol + "): keep " + strand(x.c.sol));
  });
  Object.keys(tags).forEach(function (k) { if (!seen[k]) errs.push(k + ": no such Virginia or Odyssey question in " + file); });
  if (errs.length) { console.log(errs.join("\n") + "\n" + errs.length + " problem(s); nothing changed"); process.exit(1); }
  /* the file's sol lines are its claims, in order (checked): rewrite each one, and its sub line if it has one */
  var lines = L2.src.split("\n"), solRe = /^(\s*)sol:\s*"[^"]*",?\s*$/, subRe = /^\s*sub:\s*"[^"]*",?\s*$/, whyRe = /^\s*why:\s*".*",?\s*$/, i = 0, n = 0;
  var solLines = lines.filter(function (l) { return solRe.test(l); }).length;
  if (solLines !== all.length) { console.log(file + ": " + solLines + " sol lines but " + all.length + " questions; nothing changed"); process.exit(1); }
  var out = [];
  for (var j = 0; j < lines.length; j++) {
    var m = solRe.exec(lines[j]);
    if (!m) { out.push(lines[j]); continue; }
    var x = all[i++];
    if (j + 1 < lines.length && subRe.test(lines[j + 1])) j++;
    var oldWhy = j + 1 < lines.length && whyRe.test(lines[j + 1]) ? lines[++j] : null;
    var sk = tags[x.key];
    out.push(m[1] + 'sol: "' + SS.SKILL[sk].code + '",', m[1] + 'sub: "' + sk + '",');
    if (whys[x.key]) out.push(m[1] + "why: " + JSON.stringify(whys[x.key]) + ",");
    else if (oldWhy != null) out.push(oldWhy);
    n++;
  }
  fs.writeFileSync(file, out.join("\n"));
  var after = claimsOf(load(file).packs), bad = after.filter(function (x) { return x.va && (x.c.sub !== tags[x.key] || x.c.sol !== SS.SKILL[tags[x.key]].code || (whys[x.key] && x.c.why !== whys[x.key])); });
  if (bad.length) { fs.writeFileSync(file, L2.src); console.log("the rewrite didn't match (" + bad[0].key + "); file restored"); process.exit(1); }
  var lv = { LOTS: 0, HOTS: 0 }, by = {};
  after.forEach(function (x) { if (!x.va) return; lv[SS.SKILL[x.c.sub].level]++; by[x.c.sub] = (by[x.c.sub] || 0) + 1; });
  var nw = after.filter(function (x) { return x.va && x.c.why; }).length;
  console.log(file + ": " + n + " questions tagged (" + lv.LOTS + " LOTS, " + lv.HOTS + " HOTS, " + Object.keys(by).length + " different skills" + (nw ? ", " + nw + " with a why" : "") + ")");
} else if (cmd === "status") {
  var tot = { y: 0, n: 0 };
  fs.readdirSync(path.join(root, "js")).filter(function (f) { return /^content\d*\.js$/.test(f); })
    .sort(function (a, b) { return (parseInt(a.slice(7), 10) || 0) - (parseInt(b.slice(7), 10) || 0); }).forEach(function (f) {
      var c = claimsOf(load(path.join(root, "js", f)).packs).filter(function (x) { return x.va; });
      if (!c.length) return;
      var y = c.filter(function (x) { return x.c.sub; }).length;
      tot.y += y; tot.n += c.length;
      console.log(f + ": " + y + " of " + c.length + (y === c.length ? "  done" : ""));
    });
  console.log("all: " + tot.y + " of " + tot.n);
} else {
  console.log("usage: tags.js skills <9|10|11> | list <file> | apply <file> <tags.json> | status");
}
