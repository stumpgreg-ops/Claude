/* Headless check of the teacher preview (v5.22): node tools/smoke-preview.js
   (run tools/build-games.js, then tools/build-appsscript.js VAP and tools/build-canvas.js VAP first).
   Opens the Canvas files of the preview straight from the folder (file://, as the READ ME tells a teacher to: unzip,
   double-click the .html) and checks: the banner, no progress or class code buttons, the coins button, jumping to a
   level, no question in the reading pop-up or the side panel, no pop-up between questions, any letter right in the
   maze and in a shooter level, its own saves; and that the students' Virginia game has none of it. */
var path = require("path"), fs = require("fs");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var root = path.join(__dirname, ".."), dir = path.join(root, "dist", "canvas", "VAP"), start = path.join(dir, "SOLLabyrinth-VA-TeacherPreview.html");
var fails = [];
function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

/* the students' game never loads the preview */
var vaHtml = fs.readFileSync(path.join(root, "dist", "va", "index.html"), "utf8"), vapHtml = fs.readFileSync(path.join(root, "dist", "vap", "index.html"), "utf8");
check(!/preview\.js|SOL_PREVIEW/.test(vaHtml) && !fs.existsSync(path.join(root, "dist", "va", "js", "preview.js")), "the students' Virginia game has no preview script");
check(/window\.SOL_STATE = "VA"; window\.SOL_PREVIEW = true;/.test(vapHtml) && /<script src="js\/preview\.js\?v=[0-9.]+"><\/script>\s*<script src="js\/game\.js/.test(vapHtml), "the preview build sets SOL_PREVIEW and loads js/preview.js before game.js");
check(fs.readFileSync(path.join(root, "dist", "vap", "js", "game.js"), "utf8").indexOf("afterHours.v1.") === -1, "the preview's save keys are moved off the students' (afterHours.v1.)");
check(fs.existsSync(path.join(root, "dist", "canvas", "SOL Lab VA Eng teacher preview.zip")), "build-canvas wrote SOL Lab VA Eng teacher preview.zip");

(async function () {
  var browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--allow-file-access-from-files"] });
  var ctx = await browser.newContext({ viewport: { width: 1280, height: 760 } });
  var page = await ctx.newPage(), errors = [];
  page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
  page.on("console", function (m) { if (m.type() === "error") { var t = m.text(); if (!/favicon|Autoplay|AudioContext|peerjs|WebGL|GL Driver|swiftshader/i.test(t)) errors.push(t); } });
  async function closeCards() {
    for (var i = 0; i < 20; i++) {
      var hit = false;
      for (var sel of ["#tut-skip", "#trap-skip", "#trap-ok"]) if (await page.isVisible(sel)) { await page.click(sel); hit = true; await page.waitForTimeout(300); }
      if (!hit) { await page.waitForTimeout(250); if (i > 6) break; }
    }
  }
  async function playLevel(mode, level) {
    await page.click('#title-screen .card[data-family="G9"]');
    await page.waitForSelector("#mode-screen:not(.hidden)");
    await page.click('#mode-packs .card[data-gamemode="' + mode + '"]');
    await page.waitForSelector("#skill-screen:not(.hidden)");
    check(await page.isVisible("#pv-jump"), mode + ": the skill screen has the jump-to-level box");
    await page.fill("#pv-level", String(level));
    await page.click("#pv-play");
    await page.waitForTimeout(500);
    if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
    await page.waitForFunction(function () { return window.SolScene && SolScene.claim && SolScene.player; }, null, { timeout: 30000 });
    await page.waitForTimeout(1500);
    await closeCards();
    await page.waitForTimeout(800);
  }

  await page.goto("file://" + start);
  await page.waitForSelector("#title-screen:not(.hidden)", { timeout: 60000 });
  await page.waitForTimeout(1000);
  var t = await page.evaluate(function () {
    var vis = function (id) { var e = document.getElementById(id); return !!(e && e.offsetParent); };
    return { state: window.SOL_STATE, pv: !!window.SOL_PREVIEW, banner: (document.getElementById("pv-banner") || {}).textContent || "",
      progress: vis("btn-progress"), restore: vis("btn-restore"), join: !!(document.querySelector("#title-screen .join-row") || {}).offsetParent, coinsBtn: vis("pv-coins"), title: document.title };
  });
  console.log(JSON.stringify(t));
  check(t.state === "VA" && t.pv, "the preview is the Virginia game with SOL_PREVIEW on");
  check(/TEACHER PREVIEW/.test(t.banner) && /Teacher preview/.test(t.title), "the banner and the tab say Teacher preview");
  check(!t.progress && !t.restore && !t.join, "no Submit my progress, Restore or class code on the title screen");
  check(t.coinsBtn, "the title screen has the coins button");
  await page.click("#pv-coins");
  var coins = await page.evaluate(function () { return SolBuild.coins(); });
  check(coins >= 10000, "Give me 10,000 coins: " + coins + " coins");

  /* the maze, level 12 */
  await playLevel("maze", 12);
  var m1 = await page.evaluate(function () {
    var s = SolScene;
    return { night: s.night, mode: s.mode ? s.mode.id : "maze", readTitle: document.getElementById("read-title").textContent,
      readNote: !!document.getElementById("pv-read-note"), hudNote: !!document.getElementById("pv-hud-note"),
      choices: document.querySelectorAll("#eoc-choices li").length, readOpen: !!s.readOpen };
  });
  console.log(JSON.stringify(m1));
  check(m1.night === 12, "Play this level started level 12 (" + m1.night + ")");
  check(m1.readNote && m1.readTitle === "Teacher preview", "the level's first pop-up shows the preview note, not a passage");
  check(m1.hudNote && m1.choices === 0, "the side panel shows the note and no answers");
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForTimeout(600);
  var grab = await page.evaluate(function () {
    var s = SolScene, need = s.need.slice(), wrong = s.slips.filter(function (x) { return x.visible && need.indexOf(x.letter) === -1; })[0];
    if (!wrong) return { none: true };
    var strikes = s.strikes, score = s.score;
    s.player.body.reset(wrong.x, wrong.y); s.player.x = wrong.x; s.player.y = wrong.y; s.tryGrab();
    var carried = s.carriedSlips().map(function (x) { return x.letter; });
    var r = { need0: need, L: wrong.letter, carried: carried, needAfter: s.need.slice(), strikes0: strikes, strikes1: s.strikes };
    s.player.body.reset(s.exitZone.x, s.exitZone.y); s.player.x = s.exitZone.x; s.player.y = s.exitZone.y; s.tryExtract();
    r.score = s.score - score; r.extracted = s.extracted.slice();
    return r;
  });
  console.log(JSON.stringify(grab));
  check(!grab.none && grab.carried.indexOf(grab.L) !== -1 && grab.strikes1 === grab.strikes0, "the maze: Sol picks up a letter that was not the answer, with no alarm");
  check(grab.needAfter && grab.needAfter.indexOf(grab.L) !== -1, "the letter picked up became a right answer");
  var after = await page.evaluate(function () { return { score: SolScene.score, readOpen: !!SolScene.readOpen, ov: !document.getElementById("read-overlay").classList.contains("hidden"), hudNote: !!document.getElementById("pv-hud-note") }; });
  await page.waitForTimeout(800);
  var after2 = await page.evaluate(function () { return { readOpen: !!SolScene.readOpen, ov: !document.getElementById("read-overlay").classList.contains("hidden"), hudNote: !!document.getElementById("pv-hud-note") }; });
  console.log(JSON.stringify([after, after2]));
  check(after.score === 1 || (grab.need0.length > 1 && grab.score === 0), "carried to EXIT, it counts as a right answer (score " + after.score + ")");
  check(!after2.readOpen && !after2.ov && after2.hudNote, "no question pop-up for the next question, and the side panel still shows the note");
  await page.screenshot({ path: path.join(__dirname, "shots", "pv-01-maze.png") });

  /* a shooter level (Eagle Swoop), level 14 */
  await page.goto("file://" + start);
  await page.waitForSelector("#title-screen:not(.hidden)", { timeout: 60000 });
  await page.waitForTimeout(800);
  await playLevel("raid", 14);
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForTimeout(600);
  var sh = await page.evaluate(function () {
    var s = SolScene, need = s.need.slice(), all = ["A", "B", "C", "D"], L = all.filter(function (x) { return need.indexOf(x) === -1; })[0];
    var lives = s.strikes, score = s.score, r1 = s.answerPick(L, 100, 100);
    var r = { mode: s.mode && s.mode.id, night: s.night, need0: need, L: L, r1: r1, livesSame: s.strikes === lives, score: s.score - score };
    if (r1 === "partial") { var L2 = all.filter(function (x) { return s.need.indexOf(x) === -1; })[0]; r.r2 = s.answerPick(L2, 100, 100); r.score = s.score - score; }
    return r;
  });
  console.log(JSON.stringify(sh));
  check(sh.mode === "raid" && sh.night === 14, "the shooter level started (Eagle Swoop, level 14)");
  check(sh.livesSame && sh.score === 1 && (sh.r1 === "done" || sh.r2 === "done"), "a shooter: a letter that was not the answer counts as right, no life lost");
  await page.waitForTimeout(1500);
  var sh2 = await page.evaluate(function () { return { ov: !document.getElementById("read-overlay").classList.contains("hidden"), hudNote: !!document.getElementById("pv-hud-note") }; });
  check(!sh2.ov && sh2.hudNote, "the shooter: no pop-up for the next question; the side panel shows the note");
  await page.screenshot({ path: path.join(__dirname, "shots", "pv-02-shooter.png") });

  /* the Canvas loader keeps the game's saves under its own name (solReading.vap:…) */
  var keys = await page.evaluate(function () { return Object.keys(localStorage).filter(function (k) { return /afterHours/.test(k); }); });
  check(keys.length > 0 && keys.every(function (k) { return /afterHours\.preview\./.test(k); }), "every save it wrote is afterHours.preview.* (" + keys.length + " keys: " + keys.slice(0, 3).join(", ") + " ...)");
  check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.slice(0, 5).join(" | ") : ""));
  await browser.close();
  console.log(fails.length ? "\n" + fails.length + " FAILED" : "\nALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
