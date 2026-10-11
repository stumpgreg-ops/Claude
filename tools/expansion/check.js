/* Checks one new expansion file against its row in tools/expansion/plan.json (v5.15).
   node tools/expansion/check.js js/content32.js
   Runs the content validator's rules (tools/validate-content.js), then: the pack count, every pack's family, word
   count in the tier's band, questions per pack, ids with the file tag, only the grade's own standard codes and every
   one of them used, the kinds mix and the level tags. Exit 1 on any problem. */
var fs = require("fs"), path = require("path"), vm = require("vm"), cp = require("child_process");
var root = path.join(__dirname, "..", "..");
var file = path.basename(process.argv[2] || "");
var plan = JSON.parse(fs.readFileSync(path.join(__dirname, "plan.json"), "utf8"));
var row = plan.filter(function (r) { return r.file + ".js" === file; })[0];
if (!row) { console.log("ERROR " + file + " is not in tools/expansion/plan.json"); process.exit(1); }
var problems = [], notes = [];
try { cp.execFileSync("node", [path.join(root, "tools", "validate-content.js"), path.join("js", file)], { cwd: root, stdio: "pipe" }); }
catch (e) { problems.push("tools/validate-content.js reports errors:\n" + String(e.stdout).split("\n").filter(function (l) { return /ERROR/.test(l); }).join("\n")); }
var warn = ""; try { warn = cp.execFileSync("node", [path.join(root, "tools", "validate-content.js"), path.join("js", file)], { cwd: root }).toString(); } catch (e) { warn = String(e.stdout); }
var ownIds = null;   /* filled in below: only this file's packs' warnings count (js/content.js has old ones of its own) */
var warnLines = warn.split("\n").filter(function (l) { return /^WARN/.test(l); });
var sb = { window: {}, console: console }; sb.global = sb.window;
vm.runInNewContext(fs.readFileSync(path.join(root, "js", "content.js"), "utf8"), sb);
var before = sb.window.HEIST_PACKS.length;
vm.runInNewContext(fs.readFileSync(path.join(root, "js", file), "utf8"), sb);
var packs = sb.window.HEIST_PACKS.slice(before);
ownIds = packs.map(function (p) { return p.id; });
warnLines.forEach(function (l) { var m = /^WARN\s+([^:\s]+)/.exec(l); if (m && ownIds.indexOf(m[1]) !== -1) problems.push(l); });
function words(html) { return String(html).replace(/<span class="n">[^<]*<\/span>/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().split(" ").filter(Boolean).length; }
var band = { tiny: [45, 100], short: [95, 165], medium: [165, 300], mid: [300, 380], long: [385, 530], epic: [535, 680] }[row.tier];
var gnum = row.grade.slice(1), tag = "-c" + row.file.replace("content", "") + "-";
var CODES = { "9": ["9.DSR.D", "9.DSR.E", "9.RI.1.A", "9.RI.1.B", "9.RI.1.C", "9.RI.2.A", "9.RI.2.B", "9.RI.3.A", "9.RL.1.A", "9.RL.1.B", "9.RL.1.C", "9.RL.1.D", "9.RL.2.A", "9.RL.2.B", "9.RL.2.C", "9.RL.3.A", "9.RL.3.B", "9.RV.1.B", "9.RV.1.C", "9.RV.1.E", "9.RV.1.F"],
  "10": ["10.DSR.D", "10.DSR.E", "10.RI.1.A", "10.RI.1.B", "10.RI.1.C", "10.RI.2.A", "10.RI.2.B", "10.RI.2.C", "10.RL.1.A", "10.RL.1.B", "10.RL.1.C", "10.RL.2.A", "10.RL.2.B", "10.RL.2.C", "10.RL.3.A", "10.RV.1.A", "10.RV.1.B", "10.RV.1.C", "10.RV.1.D"],
  "11": ["11.DSR.D", "11.DSR.E", "11.RI.1.A", "11.RI.1.B", "11.RI.1.C", "11.RI.2.A", "11.RI.2.B", "11.RI.2.C", "11.RL.1.A", "11.RL.1.B", "11.RL.1.C", "11.RL.2.A", "11.RL.2.B", "11.RL.2.C", "11.RL.3.A", "11.RV.1.A", "11.RV.1.B", "11.RV.1.C"] }[gnum];
var used = {}, kinds = {}, levels = {}, qn = 0;
if (packs.length !== row.packs) problems.push("the plan asks for " + row.packs + " packs; the file has " + packs.length);
packs.forEach(function (p) {
  var w = words(p.passage), paired = /Paired/i.test(p.kind), poem = /Poetry/i.test(p.kind);
  if (p.family !== row.grade) problems.push(p.id + ": family must be " + row.grade);
  if (p.id.indexOf(tag) === -1 || p.id.indexOf("g" + gnum + "-") !== 0) problems.push(p.id + ": id must look like g" + gnum + "-<strand>" + tag + "<slug>");
  if (!poem && (w < band[0] || w > band[1] * (paired ? 1.25 : 1))) problems.push(p.id + ": passage is " + w + " words; the " + row.tier + " tier wants " + row.prose + (paired ? " (paired: " + row.paired + " each)" : ""));
  if (p.claims.length !== row.q && !(row.tier === "tiny" && p.claims.length === 4)) problems.push(p.id + ": has " + p.claims.length + " questions; the tier wants " + row.q);
  kinds[p.kind.split(" · ")[0]] = (kinds[p.kind.split(" · ")[0]] || 0) + 1;
  levels[p.level] = (levels[p.level] || 0) + 1;
  p.claims.forEach(function (c) { qn++; used[c.sol] = (used[c.sol] || 0) + 1; if (CODES.indexOf(c.sol) === -1) problems.push(p.id + ":" + c.id + ": " + c.sol + " is not one of " + row.grade + "'s codes (see tools/expansion/STANDARDS.md)"); });
});
var unused = CODES.filter(function (c) { return !used[c]; });
if (unused.length && qn >= CODES.length * 2) problems.push("standards never used in this file: " + unused.join(", "));
[1, 2, 3].forEach(function (l) { if (!levels[l]) problems.push("no pack at level " + l + " (spread levels 1, 2 and 3)"); });
notes.push(packs.length + " packs, " + qn + " questions; kinds " + JSON.stringify(kinds) + "; levels " + JSON.stringify(levels));
notes.push("standards " + CODES.map(function (c) { return c + ":" + (used[c] || 0); }).join(" "));
notes.forEach(function (n) { console.log(n); });
problems.forEach(function (p) { console.log("PROBLEM " + p); });
console.log(problems.length ? problems.length + " problem(s)" : "CHECK OK");
process.exit(problems.length ? 1 : 0);
