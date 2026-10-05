/* Build the standalone games: node tools/build-games.js [version]
   Writes dist/nj/, dist/va/ and dist/ody/ (each a complete game, no gateway; ody is the Odyssey game)
   and zips them as dist/SOLLabyrinth-NJ-v<version>.zip and dist/SOLLabyrinth-VA-v<version>.zip,
   ready to upload to itch.io (index.html at the zip root).

   Each build is the repository with:
   - index.html rewritten: <title> names the state, window.SOL_STATE is set before any script,
     the gateway section starts hidden and the title screen visible, only that state's grade
     cards are in the markup, the "change state" button is gone, and only that state's
     content files are loaded (content.js stays in both: it holds the pack engine; game.js
     prunes the other state's packs from it at start-up).
   - js/: content files for the other state left out.
   - tools/, dist/ and docs/ (the question lists with answer keys) left out.
   The Odyssey build (ODY) is also reskinned: its own title and logo, css/odyssey.css and js/odyssey.js
   (the look, and the realm and mode tables retold at runtime), and tools/ody-theme.js rewrites the words
   players read in its copies of the scripts, index.html and the castle trophies (review:
   dist/ody-theme-review.txt). Those two files and the Odyssey logo stay out of the other builds. */
var fs = require("fs"), path = require("path"), cp = require("child_process");
var root = path.join(__dirname, ".."), dist = path.join(root, "dist");
var version = process.argv[2] || (function () {
  var m = fs.readFileSync(path.join(root, "index.html"), "utf8").match(/\?v=([0-9.]+)/);
  return m ? m[1] : "0";
})();

/* which content files hold which state's packs (see README: "Question packs") */
var CONTENT = {
  shared: ["content.js"],
  VA: ["content2.js", "content3.js", "content4.js", "content5.js", "content6.js", "content7.js", "content8.js", "content9.js", "content10.js", "content11.js",
       "content18.js", "content19.js", "content20.js", "content21.js", "content22.js", "content23.js"],
  NJ: ["content12.js", "content13.js", "content14.js", "content15.js", "content16.js", "content17.js", "content24.js", "content25.js"],
  /* v5.9: the Odyssey game (English 9, Unit 2) — one file per episode plus the cross-episode paired texts */
  ODY: ["content26.js", "content27.js", "content28.js", "content29.js", "content30.js", "content31.js"]
};
var STATES = {
  NJ: { name: "New Jersey", families: ["NJ5"], def: "NJ5", zip: "SOLLabyrinth-NJ" },
  VA: { name: "Virginia", families: ["G9", "G10", "G11"], def: "G9", zip: "SOLLabyrinth-VA" },
  /* its own saves (afterHours.ody.*), so it never shares a level, town or used-question list
     with the Virginia game when both are opened from the same site */
  ODY: { name: "The Odyssey", families: ["ODY"], def: "ODY", zip: "SOLLabyrinth-Odyssey", savePrefix: "afterHours.ody.",
         title: "The Odyssey: Labyrinth of the Wine-Dark Sea", logo: "assets/logo/odyssey-labyrinth-512.png", theme: "./ody-theme" }
};
/* every other state's content files are left out of a build */
function dropFor(st) {
  var out = [];
  Object.keys(STATES).forEach(function (o) { if (o !== st) out = out.concat(CONTENT[o]); });
  return out;
}

/* every content file must be claimed by exactly one list, so a new file is never silently dropped */
var allContent = fs.readdirSync(path.join(root, "js")).filter(function (f) { return /^content\d*\.js$/.test(f); });
var claimed = CONTENT.shared.concat(CONTENT.VA, CONTENT.NJ, CONTENT.ODY);
allContent.forEach(function (f) { if (claimed.indexOf(f) === -1) throw new Error("tools/build-games.js: js/" + f + " is not assigned to a state"); });
claimed.forEach(function (f) { if (allContent.indexOf(f) === -1) throw new Error("tools/build-games.js: js/" + f + " is listed but missing"); });

function copyTree(src, dst, skip) {
  fs.mkdirSync(dst, { recursive: true });
  fs.readdirSync(src).forEach(function (name) {
    var s = path.join(src, name), d = path.join(dst, name), rel = path.relative(root, s);
    if (skip(rel, name)) return;
    if (fs.statSync(s).isDirectory()) copyTree(s, d, skip);
    else fs.copyFileSync(s, d);
  });
}

function rewriteIndex(html, st) {
  var def = STATES[st], drop = dropFor(st);
  var out = html;
  function must(re, rep, what) {
    if (!re.test(out)) throw new Error("tools/build-games.js: index.html has no " + what);
    out = out.replace(re, rep);
  }
  must(/<title>[^<]*<\/title>/, "<title>" + (def.title || "SOL Labyrinth · " + def.name) + "</title>", "<title>");
  out = out.replace(/\?v=[0-9.]+/g, "?v=" + version);
  out = out.replace(/(<p class="ver">)v[0-9.]+/g, "$1v" + version);   /* the version label on the title screen */
  /* the state is set before any script runs */
  must(/<\/head>/, '  <script>window.SOL_STATE = "' + st + '";</script>\n</head>', "</head>");
  /* the gateway starts hidden, the title screen visible (also right with JavaScript off) */
  must(/<section id="state-screen" class="screen">/, '<section id="state-screen" class="screen hidden">', "gateway section");
  must(/<section id="title-screen" class="screen hidden">/, '<section id="title-screen" class="screen">', "title section");
  /* only this state's grade cards, with its default selected */
  out = out.replace(/<button type="button" class="card([^"]*)" data-family="([A-Z0-9]+)">/g, function (m, cls, fam) {
    var ok = def.families.indexOf(fam) !== -1, c = ["card"];
    if (!ok) c.push("hidden");
    if (ok && fam === def.def) c.push("selected");
    return '<button type="button" class="' + c.join(" ") + '" data-family="' + fam + '">';
  });
  /* the how-to names this state's grades */
  if (st === "NJ") must(/Tap Grade 9, 10, or 11 — then choose a skill/, "Tap Grade 5 — then choose a skill", "how-to grade line");
  if (st === "ODY") {
    must(/Tap Grade 9, 10, or 11 — then choose a skill \(or All\)/, "Tap The Odyssey — then choose an episode (or All)", "how-to grade line");
    must(/Tap a grade to pick your skill focus\./, "Tap The Odyssey to pick an episode.", "title tag line");
    /* the Odyssey's own logo, stylesheet and theme script (same ?v= as every other tag) */
    must(/<img src="assets\/logo\/sols-labyrinth-512\.png(\?v=[0-9.]+)" alt="Sol's Labyrinth — SOL review game"/g,
      '<img src="' + def.logo + '$1" alt="' + def.title + '"', "logo");
    must(/(<link rel="stylesheet" href="css\/after-hours\.css\?v=[0-9.]+" \/>)/, '$1\n  <link rel="stylesheet" href="css/odyssey.css?v=' + version + '" />', "after-hours.css link");
    must(/(\n(\s*)<script src="js\/game\.js\?v=[0-9.]+"><\/script>)/,
      '\n$2<script src="js/odyssey.js?v=' + version + '"></script>$1' +
      /* game.js names the tab "SOL Labyrinth · The Odyssey" as it starts; the game's own title wins */
      '\n$2<script>document.title = ' + JSON.stringify(def.title) + ';</script>', "game.js script tag");
  }
  /* no "change state" button */
  must(/\s*<button type="button" class="btn" id="btn-state"[^>]*>[^<]*<\/button>/, "", "btn-state");
  /* only this state's content files */
  drop.forEach(function (f) {
    var re = new RegExp('\\s*<script src="js/' + f.replace(".", "\\.") + '\\?v=[0-9.]+"><\\/script>');
    if (!re.test(out)) throw new Error("tools/build-games.js: index.html does not load js/" + f);
    out = out.replace(re, "");
  });
  return out;
}

fs.rmSync(dist, { recursive: true, force: true });
Object.keys(STATES).forEach(function (st) {
  var def = STATES[st], out = path.join(dist, st.toLowerCase()), drop = dropFor(st);
  copyTree(root, out, function (rel, name) {
    if (rel === "tools" || rel === "dist" || rel === "docs" || rel === ".git" || rel === "node_modules" || rel === ".claude") return true;
    if (name === ".DS_Store" || name === "Thumbs.db" || name === ".gitignore") return true;
    if (/^js\/content\d*\.js$/.test(rel) && drop.indexOf(name) !== -1) return true;
    if (st !== "ODY" && /^(js\/odyssey\.js|css\/odyssey\.css|assets\/logo\/odyssey-)/.test(rel.split(path.sep).join("/"))) return true;
    return false;
  });
  fs.writeFileSync(path.join(out, "index.html"), rewriteIndex(fs.readFileSync(path.join(root, "index.html"), "utf8"), st));
  if (def.theme) {
    if (def.logo && !fs.existsSync(path.join(out, def.logo))) console.warn("tools/build-games.js: warning: " + def.logo + " is missing — the title screen of " + def.name + " will show no logo");
    var th = require(def.theme).apply(out);
    console.log(def.name + ": " + th.changes + " literals reworded (" + Object.keys(th.perFile).map(function (f) { return f + " " + th.perFile[f]; }).join(", ") + "); review: dist/ody-theme-review.txt");
    if (th.unexpected) throw new Error("tools/build-games.js: " + th.unexpected + " Norse word(s) left where players read them — see dist/ody-theme-review.txt");
  }
  if (def.savePrefix) {
    /* a separate set of saves: every "afterHours.v1." key in the build's scripts and pages */
    var moved = 0;
    (function walk(d) {
      fs.readdirSync(d).forEach(function (n) {
        var p = path.join(d, n);
        if (fs.statSync(p).isDirectory()) { if (n !== "vendor" && n !== "assets") walk(p); return; }
        if (!/\.(js|html)$/.test(n)) return;
        var t = fs.readFileSync(p, "utf8");
        if (t.indexOf("afterHours.v1.") === -1) return;
        fs.writeFileSync(p, t.split("afterHours.v1.").join(def.savePrefix)); moved++;
      });
    })(out);
    if (!moved) throw new Error("tools/build-games.js: no save keys found to move for " + st);
  }
  var zip = def.zip + "-v" + version + ".zip";
  cp.execFileSync("zip", ["-q", "-r", "-X", path.join(dist, zip), "."], { cwd: out });
  var files = 0; (function count(d) { fs.readdirSync(d).forEach(function (n) { var p = path.join(d, n); if (fs.statSync(p).isDirectory()) count(p); else files++; }); })(out);
  var mb = (fs.statSync(path.join(dist, zip)).size / 1048576).toFixed(1);
  console.log(def.name + ": dist/" + st.toLowerCase() + "/ (" + files + " files) -> dist/" + zip + " (" + mb + " MiB)");
});
