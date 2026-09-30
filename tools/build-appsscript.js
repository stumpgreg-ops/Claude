/* Build the Google Apps Script version of a state's game: node tools/build-appsscript.js [VA|NJ]
   (run tools/build-games.js first; tools/publish-pages.sh runs both).

   School filters block github.io, netlify.app and the like, but not script.google.com. The teacher pastes
   one small file (dist/appsscript/Code.gs) into an Apps Script project and deploys it as a web app. The game
   itself stays on the gh-pages branch of this public repository: Google's servers fetch it (the school's filter
   never sees that request) and hand it to the Chromebook through google.script.run.

   Writes dist/appsscript/:
     Code.gs                 the whole Apps Script project (doGet + two helpers the page calls)
     <st>/loader.html        the page doGet serves: a loading bar and the loader (nothing game-specific)
     <st>/manifest.json      version, bundle hash, part file names, and the stylesheets and scripts in page order
     <st>/sol-<hash>-<n>.bin the game's files (no music) packed into one gzip, cut into parts of PART_BYTES
     test.html               a local stand-in for Apps Script (serves loader.html in a sandboxed frame and
                             answers google.script.run from the local files) — for tools/smoke-appsscript.js

   The body markup travels inside the bundle as __page.html, so the markup, styles and scripts a Chromebook
   runs always come from the same version.
   Bundle format (before gzip): 4-byte big-endian header length, header JSON [[path, offset, length], …], bytes.
   The loader keeps the unpacked bundle in IndexedDB, so a Chromebook downloads it once per version. */
var fs = require("fs"), path = require("path"), zlib = require("zlib"), crypto = require("crypto");
var root = path.join(__dirname, ".."), dist = path.join(root, "dist");
var st = (process.argv[2] || "VA").toUpperCase(), lo = st.toLowerCase();
var src = path.join(dist, lo), out = path.join(dist, "appsscript"), outSt = path.join(out, lo);
var REPO_RAW = "https://raw.githubusercontent.com/stumpgreg-ops/Claude/gh-pages/appsscript/" + lo + "/";
var REPO_CDN = "https://cdn.jsdelivr.net/gh/stumpgreg-ops/Claude@gh-pages/appsscript/" + lo + "/";
var PART_BYTES = 3 * 1024 * 1024;
var NAMES = { VA: "Virginia", NJ: "New Jersey" };
if (!fs.existsSync(path.join(src, "index.html"))) throw new Error("tools/build-appsscript.js: run tools/build-games.js first (no dist/" + lo + ")");

var html = fs.readFileSync(path.join(src, "index.html"), "utf8");
var version = (html.match(/\?v=([0-9.]+)/) || [0, "0"])[1];

/* ── the files: everything the built game has except music, docs and the page itself ── */
var files = [];
(function walk(d) {
  fs.readdirSync(d).sort().forEach(function (n) {
    var p = path.join(d, n), rel = path.relative(src, p).split(path.sep).join("/");
    if (fs.statSync(p).isDirectory()) { if (rel !== "assets/music") walk(p); return; }
    if (rel === "index.html" || /\.md$/i.test(n)) return;
    files.push(rel);
  });
})(src);

/* ── the page: head styles and body markup; scripts run by the loader in their original order ── */
var scripts = [];
var headCss = [];
html.replace(/<link rel="stylesheet" href="([^"?]+)[^"]*"\s*\/?>/g, function (m, href) { headCss.push(href); return ""; });
var body = html.slice(html.indexOf("<body"), html.lastIndexOf("</body>"));
var bodyOpen = body.slice(0, body.indexOf(">") + 1);
body = body.slice(body.indexOf(">") + 1);
/* head scripts first (e.g. window.SOL_STATE), then the body's */
var headPart = html.slice(0, html.indexOf("<body"));
function takeScripts(part) {
  return part.replace(/<script(?: src="([^"?]+)[^"]*")?>([\s\S]*?)<\/script>/g, function (m, s, code) {
    scripts.push(s ? { src: s } : { code: code });
    return "";
  });
}
takeScripts(headPart);
body = takeScripts(body);
/* images in the markup wait for the bundle */
body = body.replace(/<img([^>]*?) src="((?:assets|js|css)\/[^"]+)"/g, '<img$1 data-vfs-src="$2"');
scripts.forEach(function (s) { if (s.src && files.indexOf(s.src) === -1) throw new Error("tools/build-appsscript.js: " + s.src + " is not in dist/" + lo); });
headCss.forEach(function (c) { if (files.indexOf(c) === -1) throw new Error("tools/build-appsscript.js: " + c + " is not in dist/" + lo); });

/* ── pack: the files, plus the body markup as __page.html (so page and scripts always come from one bundle) ── */
var header = [], bufs = [], off = 0;
function add(f, b) { header.push([f, off, b.length]); bufs.push(b); off += b.length; }
add("__page.html", Buffer.from(body.trim()));
/* v5.8: the teacher page (?admin=1) — run by the loader after the content files, instead of the game */
add("__admin.js", fs.readFileSync(path.join(__dirname, "appsscript", "admin.js")));
add("__admin.css", fs.readFileSync(path.join(__dirname, "appsscript", "admin.css")));
files.forEach(function (f) { add(f, fs.readFileSync(path.join(src, f))); });
var hj = Buffer.from(JSON.stringify(header)), hl = Buffer.alloc(4); hl.writeUInt32BE(hj.length, 0);
var raw = Buffer.concat([hl, hj].concat(bufs));
var gz = zlib.gzipSync(raw, { level: 9 });
var hash = crypto.createHash("sha1").update(gz).digest("hex").slice(0, 12);
fs.rmSync(outSt, { recursive: true, force: true });
fs.mkdirSync(outSt, { recursive: true });
var parts = [];
for (var i = 0; i * PART_BYTES < gz.length; i++) {
  var name = "sol-" + hash + "-" + i + ".bin";
  fs.writeFileSync(path.join(outSt, name), gz.subarray(i * PART_BYTES, (i + 1) * PART_BYTES));
  parts.push(name);
}
var manifest = { state: st, version: version, hash: hash, bytes: gz.length, files: files.length, parts: parts,
  body: (bodyOpen.match(/class="([^"]*)"/) || [0, ""])[1], css: headCss, scripts: scripts };
fs.writeFileSync(path.join(outSt, "manifest.json"), JSON.stringify(manifest, null, 1));

/* ── loader.html ── */
var loaderJs = fs.readFileSync(path.join(__dirname, "appsscript", "loader.js"), "utf8");
var page = [
  "<!DOCTYPE html>",
  '<html lang="en">',
  "<head>",
  '<meta charset="utf-8" />',
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />',
  "<title>SOL Labyrinth · " + NAMES[st] + "</title>",
  "<style>",
  /* no music files in this build: the music buttons, picker and HUD slider go */
  "#btn-music, #music-pick, #btn-music-hud, #music-vol-hud { display: none !important; }",
  "#sol-boot { position: fixed; inset: 0; z-index: 99999; display: flex; flex-direction: column; align-items: center; justify-content: center;",
  "  gap: 18px; background: #0d0b1a; color: #efe6ff; font: 600 18px/1.4 system-ui, sans-serif; text-align: center; padding: 16px; }",
  "#sol-boot .bar { width: min(420px, 80vw); height: 14px; border-radius: 7px; background: #2a2440; overflow: hidden; }",
  "#sol-boot .fill { height: 100%; width: 0; background: linear-gradient(90deg, #7c5cff, #37d6c4); transition: width .25s; }",
  "#sol-boot .msg { font-weight: 400; font-size: 15px; opacity: .85; max-width: 520px; }",
  "#sol-boot button { font: inherit; padding: 8px 18px; border-radius: 8px; border: 0; background: #7c5cff; color: #fff; cursor: pointer; }",
  "</style>",
  "</head>",
  "<body>",
  '<div id="sol-boot"><div>SOL Labyrinth · ' + NAMES[st] + '</div><div class="bar"><div class="fill"></div></div><div class="msg">Loading the game…</div></div>',
  "<script>" + loaderJs + "</script>",
  "</body>",
  "</html>", ""
].join("\n");
fs.writeFileSync(path.join(outSt, "loader.html"), page);

/* ── Code.gs ── */
var gs = fs.readFileSync(path.join(__dirname, "appsscript", "Code.gs"), "utf8")
  .replace("__BASES__", JSON.stringify([REPO_RAW, REPO_CDN], null, 2).replace(/\n/g, "\n  "))
  .replace("__TITLE__", "SOL Labyrinth · " + NAMES[st]);
fs.writeFileSync(path.join(out, "Code.gs"), gs);

/* ── local test stand-in ── */
fs.copyFileSync(path.join(__dirname, "appsscript", "test.html"), path.join(out, "test.html"));

var mb = function (n) { return (n / 1048576).toFixed(1) + " MiB"; };
console.log("Apps Script " + NAMES[st] + " v" + version + ": " + files.length + " files, " + mb(raw.length) + " -> " + mb(gz.length) + " gzip in " + parts.length +
  " parts; loader.html " + (page.length / 1024).toFixed(0) + " KiB; dist/appsscript/Code.gs");
