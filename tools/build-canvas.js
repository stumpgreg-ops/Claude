/* Build the Canvas (LMS) version of a state's game: node tools/build-canvas.js [VA|NJ|ODY]
   (run tools/build-games.js and tools/build-appsscript.js first; tools/publish-pages.sh runs all three).

   Files a teacher uploads to one folder in Canvas Files and embeds in a Canvas page: nothing is hosted on GitHub
   or any other outside site. v5.8.2: Canvas runs the scripts of a small uploaded HTML page but not of a big one
   (the one-file 7 MB build stopped on its first screen), and a small page can read files next to it in its folder
   with a relative <script src>. So the game is:
     SOLLabyrinth-<ST>.html          the starter page (a few KB): the loading screen and one <script src>
     SOLLabyrinth-<ST>-game.js       the Apps Script loader, the manifest and the list of data files
     SOLLabyrinth-<ST>-data-NN.js    the gzip bundle (no music) as base64, in pieces of 576 KB
   Canvas gives each uploaded file its own web address, and the game's saves live with the starter page's: an
   update replaces only the .js files, so the starter page (and every student's progress) stays.

   Writes dist/canvas/<ST>/, dist/canvas/SOLLabyrinth-<ST>-Canvas.zip (the same files, for one upload) and
   dist/canvas/SOLLabyrinth-<ST>-Canvas-update.zip (the .js files only, for updating a game already in Canvas).
   v5.13.1: for VA the two zips are "SOL Lab VA Eng.zip" and "SOL Lab VA Eng update.zip".
   v5.13: both zips also carry the teacher progress page, dist/canvas/SOLLabyrinth-<ST>-Teacher.html (tools/build-teacher.js):
   it reads the progress codes students paste into a Canvas assignment. It is not in dist/canvas/<ST>/ (the files the
   game itself loads); the teacher uploads it next to them but keeps it hidden from students. */
var fs = require("fs"), path = require("path"), cp = require("child_process");
var root = path.join(__dirname, ".."), dist = path.join(root, "dist");
var st = (process.argv[2] || "VA").toUpperCase(), lo = st.toLowerCase();
var src = path.join(dist, "appsscript", lo), outAll = path.join(dist, "canvas"), out = path.join(outAll, st);
if (!fs.existsSync(path.join(src, "manifest.json"))) throw new Error("tools/build-canvas.js: run tools/build-appsscript.js " + st + " first");

var man = JSON.parse(fs.readFileSync(path.join(src, "manifest.json"), "utf8"));
var gz = Buffer.concat(man.parts.map(function (p) { return fs.readFileSync(path.join(src, p)); }));
if (gz.length !== man.bytes) throw new Error("tools/build-canvas.js: the bundle parts add up to " + gz.length + " bytes, not " + man.bytes);

var page = fs.readFileSync(path.join(src, "loader.html"), "utf8");
var m = page.match(/<script>([\s\S]*)<\/script>/);
if (!m) throw new Error("tools/build-canvas.js: no loader script in loader.html");
var loaderJs = m[1];
var base = st === "ODY" ? "SOLLabyrinth-Odyssey" : "SOLLabyrinth-" + st;   /* v5.9: the Odyssey game has its own file names */
/* v5.13.1: the zips' own names. VA's are "SOL Lab VA Eng.zip" and "SOL Lab VA Eng update.zip"; the files inside keep
   their SOLLabyrinth-VA-* names, so an update still replaces the files already in Canvas. */
var zipFull = st === "VA" ? "SOL Lab VA Eng.zip" : base + "-Canvas.zip";
var zipUpd = st === "VA" ? "SOL Lab VA Eng update.zip" : base + "-Canvas-update.zip";

/* ── the data files: 576 KB of bundle each (768 KB of base64; Canvas has served an 800 KB one to a page) ── */
var PIECE = 576 * 1024, files = [];
for (var o = 0, n = 1; o < gz.length; o += PIECE, n++) {
  var name = base + "-data-" + (n < 10 ? "0" : "") + n + ".js";
  files.push(name);
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, name), "/* SOL Labyrinth " + st + " v" + man.version + ": game data " + n + " (open " + base + ".html, not this file) */\n" +
    "solPart(" + (n - 1) + "," + JSON.stringify(man.hash) + ',"' + gz.subarray(o, o + PIECE).toString("base64") + '");\n');
}

/* ── the game file: which version, which data files, and the loader ── */
var parts = { manifest: man, files: files };
fs.writeFileSync(path.join(out, base + "-game.js"), "/* SOL Labyrinth " + st + " v" + man.version + " (open " + base + ".html, not this file) */\n" +
  "window.SOL_CANVAS_ID = " + JSON.stringify(lo) + ";\nwindow.SOL_PARTS = " + JSON.stringify(parts) + ";\n" + loaderJs + "\n");

/* ── the starter page: what it says when its scripts can't run (a preview that blocks scripts shows only that),
   a first small script that changes it, then the game file ── */
var stuck = '<div class="msg">Loading the game…</div><div class="msg" id="sol-noscript" style="font-size:13px;opacity:.7">' +
  "If this message never changes, the page is not allowed to run the game here (Canvas shows some files as a preview that cannot run games).</div>";
if (page.indexOf('<div class="msg">Loading the game…</div>') < 0) throw new Error("tools/build-canvas.js: loader.html has no loading message");
page = page.replace('<div class="msg">Loading the game…</div>', stuck);
var early = "<script>(function(){var n=document.getElementById('sol-noscript');if(n)n.parentNode.removeChild(n);" +
  /* anything the page refuses to load (a security rule) is named on screen, since a student can't open the console */
  "var blocked=[];document.addEventListener('securitypolicyviolation',function(e){var k=(e.effectiveDirective||e.violatedDirective)+' '+String(e.blockedURI).slice(0,12);" +
  "if(blocked.indexOf(k)>=0)return;blocked.push(k);var d=document.getElementById('sol-blocked');if(!d){d=document.createElement('div');d.id='sol-blocked';" +
  "d.setAttribute('style','position:fixed;left:8px;bottom:8px;z-index:100000;background:#3a1a14;color:#ffd8c8;border:1px solid #ff8b7a;border-radius:8px;padding:6px 10px;font:13px system-ui,sans-serif;max-width:90vw');" +
  "document.body.appendChild(d);}d.textContent='Canvas blocked part of the game: '+blocked.join(', ');});" +
  "window.addEventListener('error',function(e){var m=document.querySelector('#sol-boot .msg');if(m&&document.getElementById('sol-boot'))m.textContent='The game hit an error: '+(e.message||e)+' (line '+(e.lineno||'?')+')';});" +
  "window.solMissing=function(f){var m=document.querySelector('#sol-boot .msg');if(m)m.textContent='Can\\'t find '+f+'. Upload it to the same Canvas folder as this page, with the same name.';};})();</script>\n";
var game = base + "-game.js";
var starter = page.replace(m[0], function () { return early + '<script src="' + game + '" onerror="solMissing(\'' + game + '\')"></script>'; });
if (Buffer.byteLength(starter) > 64 * 1024) throw new Error("tools/build-canvas.js: the starter page is " + Buffer.byteLength(starter) + " bytes; Canvas runs only small pages");
fs.writeFileSync(path.join(out, base + ".html"), starter);

/* the files of an older build that this one doesn't have (fewer data files, the one-file build) */
fs.readdirSync(out).forEach(function (f) { if (f !== base + ".html" && f !== game && files.indexOf(f) < 0) fs.unlinkSync(path.join(out, f)); });
var old = path.join(outAll, base + "-Canvas.html");
if (fs.existsSync(old)) fs.unlinkSync(old);

/* v5.12.1: each zip carries a plain-text READ ME with the steps and the Canvas embed code, so a teacher never has
   to ask for them. It sits next to the game files in the zip (not in out/, which holds only what goes to Canvas). */
var GAME_NAMES = { VA: "Sol's Labyrinth (Virginia)", NJ: "Sol's Labyrinth (New Jersey)", ODY: "The Odyssey: Labyrinth of the Wine-Dark Sea" };
var gameName = GAME_NAMES[st] || ("Sol's Labyrinth (" + st + ")");
/* v5.13: the teacher progress page (it reads the students' progress codes) */
var teacherBuild = require("./build-teacher"), PB = require("../js/progress-code.js").BUILDS[st];
var teacherName = teacherBuild.fileName(st), teacherPath = path.join(outAll, teacherName);
fs.writeFileSync(teacherPath, teacherBuild.build(st, man.version));
var EMBED = '<iframe src="/courses/COURSE/files/NUMBER/preview" width="100%" height="700" allowfullscreen="allowfullscreen"></iframe>';
/* v5.13.1: the teacher page's embed code, for a Canvas Page kept unpublished (Copy falls back to select-and-Ctrl+C
   if Canvas drops allow="clipboard-write") */
var EMBED_TEACHER = '<iframe src="/courses/COURSE/files/NUMBER/preview" width="100%" height="900" allow="clipboard-write"></iframe>';
/* v5.13.1: both embed codes, near the top of each READ ME */
function embedCodes() {
  return [
    "THE TWO CANVAS EMBED CODES (copy and paste them; the steps below say where)",
    "",
    "1) THE GAME - for a Canvas Page students can see. NUMBER is the number of " + base + ".html:",
    "",
    "   " + EMBED,
    "",
    "2) THE TEACHER PAGE - for a Canvas Page you keep UNPUBLISHED, so only teachers see it.",
    "   NUMBER is the number of " + teacherName + ":",
    "",
    "   " + EMBED_TEACHER,
    "",
    "In both, replace COURSE and NUMBER with your numbers. To find them, click the file once in Canvas Files and",
    "look at the address bar: https://yourschool.instructure.com/courses/152432/files/60512345?...",
    "COURSE is the number after /courses/ (152432) and NUMBER is the number after /files/ (60512345).",
    "Each file has its own NUMBER, so the game and the teacher page have different ones. COURSE is the same.",
    "Paste a code with the </> button (HTML Editor) while editing the Canvas Page, then Save."
  ];
}
/* v5.13: tracking progress with progress codes and the teacher page */
function teacherSteps() {
  return [
    "TRACKING STUDENT PROGRESS (PROGRESS CODES AND THE TEACHER PAGE)",
    "The game can't send anything out of Canvas, so each student's progress stays on their Chromebook. In the game,",
    "\"My progress code\" (on the title screen and after every level) shows a code with their levels, questions,",
    "accuracy, minutes and days played. Students paste that code into a Canvas assignment, and the teacher page",
    "reads all the codes at once and suggests a participation grade.",
    "1. Upload " + teacherName + " to the same Canvas folder as the game, then HIDE it from students:",
    "   in Files, click the cloud (publish) icon next to it and choose Unpublish (not \"Only available to",
    "   students with link\"). An unpublished file can be opened only by teachers.",
    "2. Make the assignment: Assignments > + Assignment. Name it \"" + PB.assignment + "\".",
    "   Submission type: Online, with Text Entry checked (nothing else). Points: whatever you like. Save and Publish.",
    "3. Tell students: open the game, tap My progress code, tap Copy code, and paste it into that assignment",
    "   as a Text Entry, then Submit. A new code each time you grade: the newest code shows everything so far.",
    "4. Put the teacher page on its own Canvas Page: Pages > + Page, title it \"Teacher - progress codes\",",
    "   click </> (HTML Editor), paste the TEACHER PAGE embed code from the top of this READ ME with your COURSE",
    "   and the NUMBER of " + teacherName + ", and Save. Do NOT publish this Canvas Page: leave it unpublished.",
    "   (Or open " + teacherName + " straight from Files, or download it once and open it on your computer:",
    "   it needs no internet. If Download CSV or Copy doesn't work inside Canvas, use one of these.)",
    "5. Read the codes on the teacher page. EITHER",
    "   (a) open SpeedGrader, copy each student's code and paste it into the box on the teacher page",
    "       (type the name first if you like: Ann Smith: SOL1-...), OR",
    "   (b) on the assignment's page click \"Download Submissions\", and drop that .zip file on the teacher page",
    "       (student names come from the file names Canvas gives them).",
    "6. Set your goals at the top of the teacher page (minutes, levels won, questions; how much each counts;",
    "   points possible). The table shows each student and a suggested grade; Download (CSV) or Copy it.",
    "A typo or a changed code shows as INVALID. The code stops typos and casual tampering, not a determined",
    "student. A student who plays on two Chromebooks has two codes; the page keeps the newest one."
  ];
}
function readme(update) {
  var n = files.length + (update ? 1 : 2), L = [];
  L.push(gameName + " - version " + man.version + (update ? " (UPDATE)" : ""), "");
  L.push.apply(L, embedCodes().concat(["", "--------------------------------------------------------------------------------", ""]));
  if (update) {
    L.push("THIS ZIP UPDATES A GAME THAT IS ALREADY IN CANVAS.",
      "It holds the game's .js files (" + n + " files) and the teacher page. It has no game .html page on purpose: the page already in",
      "Canvas stays, so your embed code keeps working and students keep their progress.", "",
      "HOW TO UPDATE",
      "1. Unzip this file on your computer.",
      "2. In Canvas, open Files and go to the folder that already holds " + base + ".html.",
      "3. Click Upload and select ALL the .js files from the unzipped folder (you can skip this READ ME).",
      "4. When Canvas asks, choose Replace for every file.",
      "5. Done. Nothing changes on your Canvas page. Students may need to refresh the page once.",
      "6. New in this version: the teacher progress page (" + teacherName + "). If your folder doesn't have it yet,",
      "   upload it too and keep it hidden from students - see TRACKING STUDENT PROGRESS below.", "",
      "Setting the game up for the first time? Use the full zip (" + zipFull + ") instead.", "");
  } else {
    L.push("THIS ZIP SETS UP THE GAME IN CANVAS FOR THE FIRST TIME.",
      "It holds " + n + " game files: one small page (" + base + ".html) and the .js files it loads.",
      "All of them must be in the SAME Canvas folder.", "",
      "STEP 1 - UPLOAD THE FILES",
      "1. Unzip this file on your computer.",
      "2. In Canvas, open your course, then Files.",
      "3. Click + Folder and make a new folder for the game (for example: " + (st === "ODY" ? "Odyssey Game" : "Sol Game") + ").",
      "4. Open that folder, click Upload, and select ALL " + n + " game files (you can skip this READ ME).",
      "   If Canvas asks, choose Replace.", "",
      "STEP 2 - FIND TWO NUMBERS",
      "1. In that folder, click " + base + ".html once to open its preview.",
      "2. Look at the address bar. It looks like this:",
      "      https://yourschool.instructure.com/courses/152432/files/60512345?...",
      "   COURSE is the number after /courses/   (in the example: 152432)",
      "   NUMBER is the number after /files/     (in the example: 60512345)", "",
      "STEP 3 - PUT THE GAME ON A PAGE",
      "1. Open (or create) the Canvas Page where the game should go, and click Edit.",
      "2. Click the </> button (HTML Editor). On some Canvas versions it is at the bottom right of the editor.",
      "3. Paste this embed code:", "",
      "   " + EMBED, "",
      "4. Replace COURSE and NUMBER with your two numbers. With the example numbers it would be:", "",
      "   " + EMBED.replace("COURSE", "152432").replace("NUMBER", "60512345"), "",
      "5. Click Save. The game appears on the page.", "",
      teacherSteps().join("\r\n"), "",
      "UPDATING LATER",
      "When you get a new version, use the update zip (" + zipUpd + "): upload its .js files to the",
      "same folder and choose Replace. Do not replace or delete " + base + ".html - the embed code and the",
      "students' saved progress stay with it.", "");
  }
  if (update) L.push(teacherSteps().join("\r\n"), "");
  L.push("IF SOMETHING GOES WRONG",
    "- The page says \"Can't find ...\": that file is missing from the folder. Upload it with exactly the same name.",
    "- The game is too small or too tall: change height=\"700\" in the embed code (try 600 or 800).",
    "- Students can make it full screen with the game's own full-screen button.", "",
    "Files in the game:", "   " + (update ? "" : base + ".html, ") + game + ", " + files[0] + " ... " + files[files.length - 1],
    "Teacher page (keep it hidden from students): " + teacherName);
  return L.join("\r\n") + "\r\n";
}
var tmpDir = fs.mkdtempSync(path.join(outAll, ".readme-"));
var RM_FULL = path.join(tmpDir, "READ ME FIRST - Canvas setup.txt"), RM_UPD = path.join(tmpDir, "READ ME FIRST - Canvas update.txt");
fs.writeFileSync(RM_FULL, readme(false));
fs.writeFileSync(RM_UPD, readme(true));

var zip = path.join(outAll, zipFull);
if (fs.existsSync(zip)) fs.unlinkSync(zip);
cp.execFileSync("zip", ["-q", "-X", "-j", zip].concat([RM_FULL, teacherPath]).concat([base + ".html", game].concat(files).map(function (f) { return path.join(out, f); })));
/* an update: the .js files only, so the starter page already in Canvas (and its saves) stays */
var upd = path.join(outAll, zipUpd);
if (fs.existsSync(upd)) fs.unlinkSync(upd);
cp.execFileSync("zip", ["-q", "-X", "-j", upd].concat([RM_UPD, teacherPath]).concat([game].concat(files).map(function (f) { return path.join(out, f); })));
fs.rmSync(tmpDir, { recursive: true, force: true });

var mb = function (b) { return (b / 1048576).toFixed(1) + " MiB"; };
console.log("Canvas " + st + " v" + man.version + ": " + path.relative(root, out) + "/ (" + base + ".html " + (Buffer.byteLength(starter) / 1024).toFixed(1) + " KiB, " + game + ", " +
  files.length + " data files) and " + path.relative(root, zip) + " (" + mb(fs.statSync(zip).size) + "), update " + path.basename(upd) +
  "; teacher page " + teacherName + " " + (fs.statSync(teacherPath).size / 1024).toFixed(1) + " KiB");
