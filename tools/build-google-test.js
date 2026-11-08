/* Build the Canvas zip of the Google reporting test (Option B): node tools/build-google-test.js
   Writes dist/canvas/google-test/ (the files that go to Canvas) and dist/canvas/SOL Lab TKM Google test.zip,
   laid out like SOL Lab VA Eng.zip:
     TKM-GoogleTest.html          the page the embed code points at (a loading screen and two script tags)
     TKM-GoogleTest-link.js       one line: the teacher's Sheet link (the only file a teacher edits)
     TKM-GoogleTest-game.js       the practice page (tools/google-report/test-game.html: its style, markup and script)
     Canvas-Check.html            optional: the Canvas check (tools/canvas-check.html)
     Code.gs - paste into Google Apps Script.txt     the Sheet's script (tools/google-report/Code.gs); not uploaded
     READ ME FIRST - Canvas setup.txt                (tools/google-report/READ ME FIRST - Canvas setup.txt); not uploaded
   The link lives in its own file so an update (a new TKM-GoogleTest-game.js) never overwrites it. */
"use strict";
var fs = require("fs"), path = require("path"), cp = require("child_process");
var root = path.join(__dirname, ".."), src = path.join(__dirname, "google-report");
var outAll = path.join(root, "dist", "canvas"), out = path.join(outAll, "google-test");
var ZIP = path.join(outAll, "SOL Lab TKM Google test.zip");
var BASE = "TKM-GoogleTest";

var page = fs.readFileSync(path.join(src, "test-game.html"), "utf8");
var css = (page.match(/<style>([\s\S]*?)<\/style>/) || [])[1];
var js = (page.match(/<script>([\s\S]*?)<\/script>/) || [])[1];
var version = ((js || "").match(/Google reporting test \(v([0-9.]+)\)/) || [])[1];
if (!css || !js || !version) throw new Error("build-google-test: can't find the style, script or version in test-game.html");
var URL_LINE = 'var SCRIPT_URL = "";';
if (js.split(URL_LINE).length !== 2) throw new Error("build-google-test: expected exactly one " + URL_LINE);
js = js.replace(URL_LINE, 'var SCRIPT_URL = typeof window.TKM_SHEET_URL === "string" ? window.TKM_SHEET_URL.trim() : "";');

/* the game file: puts the style and the <main> in place, takes down the loading screen, then runs the page */
var game = "/* TKM Google reporting test v" + version + " (open " + BASE + ".html, not this file) */\n" +
  "(function () {\n" +
  "  var st = document.createElement(\"style\"); st.textContent = " + JSON.stringify(css) + "; document.head.appendChild(st);\n" +
  "  var m = document.createElement(\"main\"); m.id = \"app\"; document.body.appendChild(m);\n" +
  "  var b = document.getElementById(\"sol-boot\"); if (b) b.parentNode.removeChild(b);\n" +
  "  if (typeof window.TKM_SHEET_URL === \"undefined\") {\n" +
  "    m.innerHTML = '<p style=\"padding:12px;border-radius:8px;background:#fbe7e5;color:#16212b\">Can\\'t find " + BASE + "-link.js. " +
  "Upload it to the same Canvas folder as this page, with the same name.</p>';\n" +
  "    throw new Error(\"" + BASE + "-link.js is missing\");\n" +
  "  }\n" +
  "})();\n" + js;

var link = "/* TKM Google reporting test: your Google Sheet's link.\n" +
  "   Paste your Web app link between the quotes (it ends in /exec), save, and upload this file to Canvas.\n" +
  "   Example: window.TKM_SHEET_URL = \"https://script.google.com/macros/s/AKfy.../exec\";\n" +
  "   Keep this file when you update the game: only TKM-GoogleTest-game.js changes. */\n" +
  "window.TKM_SHEET_URL = \"\";\n";

/* the page: the same loading screen and "Can't find" message as SOLLabyrinth-VA.html */
var html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8" />\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />\n' +
  "<title>TKM practice · Google test</title>\n<style>\n" +
  "#sol-boot { position: fixed; inset: 0; z-index: 99999; display: flex; flex-direction: column; align-items: center; justify-content: center;\n" +
  "  gap: 14px; background: #11171c; color: #e6edf2; font: 600 18px/1.4 system-ui, sans-serif; text-align: center; padding: 16px; }\n" +
  "#sol-boot .msg { font-weight: 400; font-size: 15px; opacity: .85; max-width: 520px; }\n" +
  "</style>\n</head>\n<body>\n" +
  '<div id="sol-boot"><div>TKM practice · Google test</div><div class="msg">Loading…</div>' +
  '<div class="msg" id="sol-noscript" style="font-size:13px;opacity:.7">If this message never changes, the page is not allowed to run here ' +
  "(Canvas shows some files as a preview that cannot run pages).</div></div>\n" +
  "<script>(function(){var n=document.getElementById('sol-noscript');if(n)n.parentNode.removeChild(n);" +
  "window.addEventListener('error',function(e){var m=document.querySelector('#sol-boot .msg');if(m&&document.getElementById('sol-boot'))m.textContent='The page hit an error: '+(e.message||e);});" +
  "window.solMissing=function(f){var m=document.querySelector('#sol-boot .msg');if(m)m.textContent='Can\\'t find '+f+'. Upload it to the same Canvas folder as this page, with the same name.';};})();</script>\n" +
  '<script src="' + BASE + '-link.js" onerror="solMissing(\'' + BASE + '-link.js\')"></script>\n' +
  '<script src="' + BASE + '-game.js" onerror="solMissing(\'' + BASE + '-game.js\')"></script>\n' +
  "</body>\n</html>\n";

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
var files = {};
files[BASE + ".html"] = html;
files[BASE + "-link.js"] = link;
files[BASE + "-game.js"] = game;
files["Canvas-Check.html"] = fs.readFileSync(path.join(__dirname, "canvas-check.html"), "utf8");
Object.keys(files).forEach(function (n) { fs.writeFileSync(path.join(out, n), files[n]); });

/* the two files a teacher reads but doesn't upload sit beside the Canvas files in the zip */
var tmp = fs.mkdtempSync(path.join(outAll, ".gtest-"));
var gs = path.join(tmp, "Code.gs - paste into Google Apps Script.txt"), rm = path.join(tmp, "READ ME FIRST - Canvas setup.txt");
fs.copyFileSync(path.join(src, "Code.gs"), gs);
fs.copyFileSync(path.join(src, "READ ME FIRST - Canvas setup.txt"), rm);
fs.rmSync(ZIP, { force: true });
cp.execFileSync("zip", ["-q", "-X", "-j", ZIP, rm, gs].concat(Object.keys(files).map(function (n) { return path.join(out, n); })));
fs.rmSync(tmp, { recursive: true, force: true });
console.log("Wrote " + path.relative(root, ZIP) + " (" + Math.round(fs.statSync(ZIP).size / 1024) + " KB), v" + version);
