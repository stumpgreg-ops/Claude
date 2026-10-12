/* Writes tools/expansion/STANDARDS.md: every Virginia standard code the packs use, how many questions use it, and
   example stems, so a writer can see what skill each code means. node tools/expansion/make-standards.js */
var vm = require("vm"), fs = require("fs"), path = require("path");
var root = path.join(__dirname, "..", "..");
var ctx = { console: console }; ctx.window = ctx; ctx.global = ctx; vm.createContext(ctx);
var files = ["content.js"].concat(fs.readdirSync(path.join(root, "js")).filter(function (f) { return /^content\d+\.js$/.test(f); })
  .sort(function (a, b) { return parseInt(a.slice(7), 10) - parseInt(b.slice(7), 10); }));
files.forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(root, "js", f), "utf8"), ctx, { filename: f }); });
var P = ctx.HEIST_PACKS.filter(function (p) { return /^G(9|10|11)$/.test(p.family); });
var by = {};
P.forEach(function (p) { p.claims.forEach(function (c) { (by[c.sol] = by[c.sol] || []).push(c.stem.replace(/<[^>]+>/g, "")); }); });
var out = ["# Virginia standards used by the question packs, with example stems", "",
  "Write new questions for a grade with THAT grade's own codes (G9: 9.x, G10: 10.x, G11: 11.x) and spread them across",
  "all of that grade's codes. Each code shows how many existing questions use it and up to 6 example stems, so you can",
  "see which skill the code means. Regenerate with node tools/expansion/make-standards.js", ""];
Object.keys(by).sort(function (a, b) { var pa = a.split("."), pb = b.split("."); return (+pa[0] - +pb[0]) || a.localeCompare(b); }).forEach(function (k) {
  var s = by[k], seen = {}, ex = [];
  s.forEach(function (x) { var key = x.slice(0, 40); if (!seen[key] && ex.length < 6) { seen[key] = 1; ex.push(x); } });
  out.push("## " + k + " (" + s.length + " questions)");
  ex.forEach(function (e) { out.push("- " + e); });
  out.push("");
});
fs.writeFileSync(path.join(__dirname, "STANDARDS.md"), out.join("\n"));
console.log("wrote", Object.keys(by).length, "codes");
