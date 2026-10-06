/* The teacher progress page for one game: one self-contained HTML file (no outside scripts, fonts or images; Canvas
   and school filters block them), well under the 64 KB Canvas runs. It reads students' progress codes and suggests
   a participation grade (see README: "Progress codes and the teacher page").
     require("./build-teacher").build("VA", "5.12.2") -> the page's HTML
     node tools/build-teacher.js VA [out.html]         -> writes it (default dist/teacher/SOLLabyrinth-VA-Teacher.html)
   tools/build-canvas.js puts it in each Canvas zip. The page = tools/teacher/teacher.html with js/progress-code.js
   (the one code format the game also uses) and tools/teacher/teacher.js inlined. */
var fs = require("fs"), path = require("path");
var root = path.join(__dirname, "..");
var C = require(path.join(root, "js", "progress-code.js"));
var LOOK = {
  VA: { BG: "#0b0d13", PANEL: "#151923", PANEL2: "#1d2230", LINE: "#3a4150", GOLD: "#f5c842" },
  NJ: { BG: "#0b0d13", PANEL: "#151923", PANEL2: "#1d2230", LINE: "#3a4150", GOLD: "#f5c842" },
  /* the Odyssey's black glaze, wine and ochre (css/odyssey.css) */
  ODY: { BG: "#140c0a", PANEL: "#22130f", PANEL2: "#2e1a14", LINE: "#6a4430", GOLD: "#e8b04a" }
};
function fileName(st) { return (st === "ODY" ? "SOLLabyrinth-Odyssey" : "SOLLabyrinth-" + st) + "-Teacher.html"; }
function build(st, version) {
  st = String(st || "VA").toUpperCase();
  var B = C.BUILDS[st];
  if (!B) throw new Error("tools/build-teacher.js: no game " + st);
  var tpl = fs.readFileSync(path.join(__dirname, "teacher", "teacher.html"), "utf8");
  var code = fs.readFileSync(path.join(root, "js", "progress-code.js"), "utf8");
  var app = fs.readFileSync(path.join(__dirname, "teacher", "teacher.js"), "utf8");
  [code, app].forEach(function (js) { if (/<\/script/i.test(js)) throw new Error("tools/build-teacher.js: a script holds </script"); });
  var esc = function (s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); };
  var vals = Object.assign({
    TITLE: esc(B.short + " · teacher progress page"),
    HEADING: esc(B.name) + " · teacher progress page",
    VERSION: esc(version || "?"), ASSIGNMENT: esc(B.assignment), ST: st,
    CODE_JS: code, APP_JS: app
  }, LOOK[st]);
  var html = tpl.replace(/\{\{([A-Z0-9_]+)\}\}/g, function (m, k) {
    if (!(k in vals)) throw new Error("tools/build-teacher.js: no value for " + m);
    return vals[k];
  });
  var size = Buffer.byteLength(html);
  if (size > 60 * 1024) throw new Error("tools/build-teacher.js: the teacher page is " + size + " bytes; Canvas runs only small pages (keep it under 60 KB)");
  return html;
}
module.exports = { build: build, fileName: fileName };

if (require.main === module) {
  var st = (process.argv[2] || "VA").toUpperCase();
  var ver = (fs.readFileSync(path.join(root, "index.html"), "utf8").match(/\?v=([0-9.]+)/) || [0, "0"])[1];
  var out = process.argv[3] || path.join(root, "dist", "teacher", fileName(st));
  fs.mkdirSync(path.dirname(out), { recursive: true });
  var html = build(st, ver);
  fs.writeFileSync(out, html);
  console.log("teacher page " + st + ": " + path.relative(process.cwd(), out) + " (" + (Buffer.byteLength(html) / 1024).toFixed(1) + " KiB)");
}
