/* Build the Canvas (LMS) version of a state's game: node tools/build-canvas.js [VA|NJ]
   (run tools/build-games.js and tools/build-appsscript.js first; tools/publish-pages.sh runs all three).

   One self-contained HTML file a teacher uploads to Canvas Files and embeds in a Canvas page: nothing is hosted
   on GitHub or any other outside site. It is the Apps Script loader.html with the manifest and the whole gzip
   bundle (no music) inside it as base64, so the loader unpacks the game from the page itself.
   The game's saves get their own localStorage prefix (Canvas serves every uploaded HTML file from one domain).

   Writes dist/canvas/SOLLabyrinth-<ST>-Canvas.html */
var fs = require("fs"), path = require("path");
var root = path.join(__dirname, ".."), dist = path.join(root, "dist");
var st = (process.argv[2] || "VA").toUpperCase(), lo = st.toLowerCase();
var src = path.join(dist, "appsscript", lo), out = path.join(dist, "canvas");
if (!fs.existsSync(path.join(src, "manifest.json"))) throw new Error("tools/build-canvas.js: run tools/build-appsscript.js " + st + " first");

var man = JSON.parse(fs.readFileSync(path.join(src, "manifest.json"), "utf8"));
var gz = Buffer.concat(man.parts.map(function (p) { return fs.readFileSync(path.join(src, p)); }));
if (gz.length !== man.bytes) throw new Error("tools/build-canvas.js: the bundle parts add up to " + gz.length + " bytes, not " + man.bytes);

var page = fs.readFileSync(path.join(src, "loader.html"), "utf8");
if (page.indexOf("<script>") < 0) throw new Error("tools/build-canvas.js: no loader script in loader.html");
/* base64 in lines of 76 characters, so no editor or preview meets one multi-megabyte line */
/* the bundle in pieces of 384 KB with a one-line script after each, so the bar moves while the browser is still
   reading the file (the loader itself runs only once the whole file is in) */
var PIECE = 384 * 1024, parts = "";
for (var o = 0; o < gz.length; o += PIECE) {
  parts += '<script type="application/octet-stream" class="sol-part">\n' + gz.subarray(o, o + PIECE).toString("base64").replace(/.{76}/g, "$&\n") +
    "\n</script><script>solP(" + Math.round(100 * Math.min(gz.length, o + PIECE) / gz.length) + ")</script>\n";
}
/* v5.8.1: what the page says when its scripts can't run (a preview that blocks scripts shows only this), and a
   first small script that changes it, so a stuck screen tells the teacher which of the two happened */
var stuck = '<div class="msg">Loading the game…</div><div class="msg" id="sol-noscript" style="font-size:13px;opacity:.7">' +
  "If this message never changes, the page is not allowed to run the game here (Canvas shows some files as a preview that cannot run games).</div>";
if (page.indexOf('<div class="msg">Loading the game…</div>') < 0) throw new Error("tools/build-canvas.js: loader.html has no loading message");
page = page.replace('<div class="msg">Loading the game…</div>', stuck);
var early = "<script>(function(){var n=document.getElementById('sol-noscript');if(n)n.parentNode.removeChild(n);" +
  "var m=document.querySelector('#sol-boot .msg'),f=document.querySelector('#sol-boot .fill');" +
  "window.solP=function(p){if(m)m.textContent='Opening the game file… '+p+'%';if(f)f.style.width=Math.round(p*0.9)+'%';};solP(0);" +
  "window.addEventListener('error',function(e){var m=document.querySelector('#sol-boot .msg');if(m&&document.getElementById('sol-boot'))m.textContent='The game hit an error: '+(e.message||e)+' (line '+(e.lineno||'?')+')';});})();</script>\n";
var at = page.indexOf("<script>");
var inline = early +
  "<script>window.SOL_CANVAS_ID = " + JSON.stringify(lo) + ";</script>\n" +
  '<script type="application/json" id="sol-manifest">' + JSON.stringify(man).replace(/</g, "\\u003c") + "</script>\n" +
  parts;
page = page.slice(0, at) + inline + page.slice(at);

fs.mkdirSync(out, { recursive: true });
var file = path.join(out, "SOLLabyrinth-" + st + "-Canvas.html");
fs.writeFileSync(file, page);
console.log("Canvas " + st + " v" + man.version + ": " + path.relative(root, file) + " (" + (page.length / 1048576).toFixed(1) + " MiB)");
