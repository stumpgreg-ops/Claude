#!/usr/bin/env node
/* Validates the question packs in js/content*.js.
   Usage: node tools/validate-content.js            (all files)
          node tools/validate-content.js js/content3.js
   Loads content.js first (it defines HEIST_PACKS), then every other content file,
   and checks structure, uniqueness, answer keys and passage length. Exit 1 on any error. */
var fs = require("fs"), path = require("path"), vm = require("vm");
var root = path.join(__dirname, "..");
var args = process.argv.slice(2);
var all = fs.readdirSync(path.join(root, "js")).filter(function (f) { return /^content\d*\.js$/.test(f); })
  .sort(function (a, b) { return num(a) - num(b); });
function num(f) { var m = f.match(/content(\d*)\.js/); return m[1] === "" ? 0 : parseInt(m[1], 10); }
var files = args.length ? ["content.js"].concat(args.map(function (a) { return path.basename(a); }).filter(function (f) { return f !== "content.js"; })) : all;

var sandbox = { window: {}, console: console };
sandbox.global = sandbox.window;
var errors = [], warnings = [];
var before = 0, perFile = {};
files.forEach(function (f) {
  var src = fs.readFileSync(path.join(root, "js", f), "utf8");
  try { vm.runInNewContext(src, sandbox, { filename: f }); }
  catch (e) { errors.push(f + ": does not load: " + e.message); return; }
  var n = (sandbox.window.HEIST_PACKS || []).length;
  perFile[f] = n - before; before = n;
});
var packs = sandbox.window.HEIST_PACKS || [];
var ids = {}, stems = {}, passages = {};
var strandOf = function (sol) { var m = /^\d+\.(RL|RI|RV|DSR)/.exec(sol || ""); return m ? m[1] : null; };
var stats = {};
function words(html) { return String(html).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().split(" ").filter(Boolean).length; }

packs.forEach(function (p, pi) {
  var where = (p.id || ("pack#" + pi));
  if (!p.id || typeof p.id !== "string") errors.push(where + ": missing id");
  if (ids[p.id]) errors.push(where + ": duplicate pack id"); ids[p.id] = true;
  if (!/^(G9|G10|G11|NJ5)$/.test(p.family)) errors.push(where + ": family must be G9/G10/G11/NJ5, got " + p.family);
  var isNJ = p.family === "NJ5";
  if (p.level != null && !(p.level === 1 || p.level === 2 || p.level === 3)) errors.push(where + ": level must be 1, 2 or 3");
  if (p.level == null) warnings.push(where + ": no level (1 easy, 2 medium, 3 hard) — it will be estimated from readability");
  if (!p.title) errors.push(where + ": missing title");
  if (!p.kind) errors.push(where + ": missing kind");
  if (!p.passage || typeof p.passage !== "string") { errors.push(where + ": missing passage"); return; }
  var wc = words(p.passage);
  var isPoem = /poem/i.test(p.passage.slice(0, 40)) || /Poetry/i.test(p.kind);
  var isPaired = /Paired/i.test(p.kind);
  var lo = isPoem ? 30 : 45, hi = isPaired ? 800 : 720;   /* tiny packs ~50 words, epic packs up to ~650 */
  if (wc < lo || wc > hi) warnings.push(where + ": passage is " + wc + " words (expected " + lo + "-" + hi + ")");
  var key = p.passage.replace(/<[^>]+>/g, "").slice(0, 120);
  if (passages[key]) errors.push(where + ": passage text duplicates " + passages[key]); passages[key] = where;
  if (!Array.isArray(p.claims) || !p.claims.length) { errors.push(where + ": no claims"); return; }
  if (p.claims.length < 4 || (p.claims.length < 5 && wc > 100)) warnings.push(where + ": only " + p.claims.length + " claims (aim for 6; 4–5 on a tiny pack)");
  var letterCount = {};
  p.claims.forEach(function (c, ci) {
    var w = where + ":" + (c.id || ("claim#" + ci));
    if (!c.id) errors.push(w + ": missing claim id");
    if (p.claims.filter(function (x) { return x.id === c.id; }).length > 1) errors.push(w + ": duplicate claim id in pack");
    if (isNJ) {
      if (!/^(RL|RI|L|W|SL)\.[A-Z]{1,3}\.5\.\d+[a-z]?$/.test(c.sol || "")) errors.push(w + ": NJSLS code should look like RL.CI.5.2 / RI.CR.5.1 / L.VL.5.2, got " + c.sol);
      if (!/^(RL|RI|RV|DSR)$/.test(c.strand || "")) errors.push(w + ": NJ5 claims need strand: RL | RI | RV | DSR");
      else stats[p.family + "." + c.strand] = (stats[p.family + "." + c.strand] || 0) + 1;
    } else if (!c.sol || !strandOf(c.sol)) errors.push(w + ": bad sol code " + c.sol);
    else {
      var g = parseInt(c.sol, 10), fam = parseInt(p.family.slice(1), 10);
      if (g > fam) errors.push(w + ": sol grade " + g + " above family " + p.family);
      var s = strandOf(c.sol); stats[p.family + "." + s] = (stats[p.family + "." + s] || 0) + 1;
    }
    if (c.partB != null) {
      var pb = p.claims.filter(function (x) { return x.id === c.partB; })[0];
      if (!pb) errors.push(w + ": partB points at missing claim " + c.partB);
      else if (pb === c) errors.push(w + ": partB points at itself");
      else if (pb.partB) errors.push(w + ": a Part B claim cannot have its own partB");
      else if (!/part b/i.test(pb.stem)) warnings.push(w + ": the Part B stem should start with 'Part B'");
    }
    if (!c.stem || typeof c.stem !== "string") errors.push(w + ": missing stem");
    var sk = (c.stem || "").toLowerCase().replace(/\s+/g, " ").trim();
    if (stems[sk] && stems[sk] !== where) warnings.push(w + ": stem repeats one in " + stems[sk]); stems[sk] = where;
    if (!Array.isArray(c.choices) || c.choices.length !== 4) { errors.push(w + ": needs exactly 4 choices"); return; }
    var letters = c.choices.map(function (ch) { return ch.letter; }).join("");
    if (letters !== "ABCD") errors.push(w + ": choice letters must be A,B,C,D in order (got " + letters + ")");
    var texts = {};
    c.choices.forEach(function (ch) {
      if (!ch.text || typeof ch.text !== "string") errors.push(w + ": empty choice " + ch.letter);
      var t = String(ch.text).trim().toLowerCase();
      if (texts[t]) errors.push(w + ": duplicate choice text"); texts[t] = true;
    });
    var corr = Array.isArray(c.correct) ? c.correct : [c.correct];
    if (!corr.length || corr.length > 2) errors.push(w + ": correct must be one letter or an array of two");
    corr.forEach(function (L) { if (!/^[ABCD]$/.test(String(L))) errors.push(w + ": correct letter " + L + " not in A-D"); letterCount[L] = (letterCount[L] || 0) + 1; });
    if (corr.length === 2 && !/TWO/i.test(c.stem)) warnings.push(w + ": two correct answers but the stem does not say 'Select TWO'");
    if (corr.length === 1 && /select\s+two/i.test(c.stem)) errors.push(w + ": stem says Select TWO but only one correct letter");
    var lens = c.choices.map(function (ch) { return String(ch.text).length; });
    var longest = Math.max.apply(null, lens), idx = lens.indexOf(longest);
    if (corr.length === 1 && c.choices[idx].letter === corr[0] && longest > 1.6 * (lens.reduce(function (a, b) { return a + b; }, 0) - longest) / 3)
      warnings.push(w + ": the correct answer is much longer than the others");
  });
  var maxSame = Math.max.apply(null, Object.keys(letterCount).map(function (k) { return letterCount[k]; }));
  if (maxSame >= 5) warnings.push(where + ": " + maxSame + " answers share one letter — spread the keys");
});

console.log("Files: " + files.map(function (f) { return f + " (" + (perFile[f] || 0) + " packs)"; }).join(", "));
console.log("Packs: " + packs.length + "  Questions: " + packs.reduce(function (a, p) { return a + (p.claims ? p.claims.length : 0); }, 0));
Object.keys(stats).sort().forEach(function (k) { console.log("  " + k + ": " + stats[k]); });
warnings.forEach(function (w) { console.log("WARN  " + w); });
errors.forEach(function (e) { console.log("ERROR " + e); });
console.log(errors.length ? errors.length + " error(s)" : "OK — no errors" + (warnings.length ? " (" + warnings.length + " warnings)" : ""));
process.exit(errors.length ? 1 : 0);
