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
var at = page.indexOf("<script>");
if (at < 0) throw new Error("tools/build-canvas.js: no loader script in loader.html");
/* base64 in lines of 76 characters, so editors and Canvas's file preview never meet one 12 MB line */
var b64 = gz.toString("base64").replace(/.{76}/g, "$&\n");
var inline =
  "<script>window.SOL_CANVAS_ID = " + JSON.stringify(lo) + ";</script>\n" +
  '<script type="application/json" id="sol-manifest">' + JSON.stringify(man).replace(/</g, "\\u003c") + "</script>\n" +
  '<script type="application/octet-stream" id="sol-bundle">\n' + b64 + "\n</script>\n";
page = page.slice(0, at) + inline + page.slice(at);

fs.mkdirSync(out, { recursive: true });
var file = path.join(out, "SOLLabyrinth-" + st + "-Canvas.html");
fs.writeFileSync(file, page);
console.log("Canvas " + st + " v" + man.version + ": " + path.relative(root, file) + " (" + (page.length / 1048576).toFixed(1) + " MiB)");
