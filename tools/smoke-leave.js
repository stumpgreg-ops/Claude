/* Headless test of leaving a level from its middle (v5.18.1): node tools/smoke-leave.js
   In the 500-pixel Canvas frame (1000 x 500) it starts a Virginia maze level and a shooter level, and proves: the Menu
   button shows over the game; it pauses the game and opens "Leave this level?" (which fits the frame); "Keep playing"
   and Esc go on with the game unpaused; Esc during play opens the window too; Esc with the reading pop-up up does not;
   "Leave level" goes back to the title screen with the saved level unchanged, and the progress record logs the level
   as "left" (not won or lost). Screenshots: tools/shots/leave-*.png. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var root = path.join(__dirname, ".."), shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", mp3: "audio/mpeg", webp: "image/webp", glb: "model/gltf-binary" };
var srv = http.createServer(function (req, res) {
  var f = path.join(root, decodeURIComponent(url.parse(req.url).pathname));
  if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, function (err, buf) {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": MIME[f.split(".").pop()] || "application/octet-stream" }); res.end(buf);
  });
});
(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var page = await browser.newPage({ viewport: { width: 1000, height: 500 } }), errors = [];
  page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
  page.on("dialog", function (d) { d.dismiss().catch(function () {}); });
  var fails = [];
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  async function shot(n) { await page.screenshot({ path: path.join(shots, "leave-" + n + ".png") }); }
  function state() {
    var vis = function (id) { var e = document.getElementById(id); if (!e || e.classList.contains("hidden")) return false; var r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    var sc = window.SolScene, g = sc && sc.game;
    var card = document.querySelector("#leave-overlay .leave-card"), r = card && card.getBoundingClientRect();
    var go = document.getElementById("leave-go"), gr = go && go.getBoundingClientRect();
    return { play: vis("play"), title: vis("title-screen"), menu: vis("btn-menu"), leave: vis("leave-overlay"), read: vis("read-overlay"),
      paused: !!(g && g.isPaused), fits: !!(r && r.top >= 0 && r.bottom <= innerHeight && gr && gr.bottom <= innerHeight && gr.height > 0),
      save: (document.getElementById("save-line") || {}).textContent || "" };
  }
  async function startLevel(mode) {
    await page.click('#title-screen .card[data-family="G9"]');
    await page.waitForSelector("#mode-screen:not(.hidden)");
    await page.click('#mode-packs .card[data-gamemode="' + mode + '"]');
    await page.waitForSelector("#skill-screen:not(.hidden)");
    await page.click("#btn-skill-start"); await page.waitForTimeout(400);
    if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
    /* skip the how-to cards until the reading pop-up is up */
    for (var i = 0; i < 40; i++) {
      if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip", { timeout: 2000 }).catch(function () {}); await page.waitForTimeout(300); continue; }
      if (await page.isVisible("#read-go")) return;
      await page.waitForTimeout(300);
    }
  }
  /* close the reading pop-up and any how-to card until the level is playing */
  async function toPlay() {
    var calm = 0;
    for (var i = 0; i < 40 && calm < 4; i++) {
      if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip", { timeout: 2000 }).catch(function () {}); calm = 0; }
      else if (await page.isVisible("#read-go")) { await page.click("#read-go", { timeout: 2000 }).catch(function () {}); calm = 0; }
      else calm++;
      await page.waitForTimeout(300);
    }
  }

  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.evaluate(function () { localStorage.clear(); });
  await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(800);
  if (await page.isVisible("#state-screen")) await page.click('.state-card[data-state="VA"]');
  await page.waitForSelector("#title-screen:not(.hidden)");
  var saveBefore = (await page.evaluate(state)).save;

  /* ── a maze level ── */
  await startLevel("maze");
  var s0 = await page.evaluate(state);
  await page.keyboard.press("Escape"); await page.waitForTimeout(300);
  var s0b = await page.evaluate(state);
  check(s0.read && !s0b.leave, "Esc while the reading pop-up is up does not open the leave window: " + JSON.stringify({ read: s0.read, leave: s0b.leave }));
  await toPlay();
  var s1 = await page.evaluate(state);
  check(s1.play && s1.menu && !s1.paused, "in a level the Menu button shows over the game: " + JSON.stringify(s1));
  await page.click("#btn-menu"); await page.waitForTimeout(400);
  var s2 = await page.evaluate(state);
  await shot("01-maze-menu");
  check(s2.leave && s2.paused && s2.fits, "Menu pauses the game and opens \"Leave this level?\", which fits the 500-pixel frame: " + JSON.stringify(s2));
  var pos = await page.evaluate(function () { return SolScene.player ? [Math.round(SolScene.player.x), Math.round(SolScene.player.y)] : null; });
  await page.keyboard.down("ArrowRight"); await page.waitForTimeout(500); await page.keyboard.up("ArrowRight");
  var pos2 = await page.evaluate(function () { return SolScene.player ? [Math.round(SolScene.player.x), Math.round(SolScene.player.y)] : null; });
  check(pos && pos2 && pos[0] === pos2[0] && pos[1] === pos2[1], "while it is open Sol does not move: " + JSON.stringify([pos, pos2]));
  await page.click("#leave-stay"); await page.waitForTimeout(400);
  var s3 = await page.evaluate(state);
  check(!s3.leave && !s3.paused && s3.play, "Keep playing closes it and the game goes on: " + JSON.stringify(s3));
  await page.keyboard.press("Escape"); await page.waitForTimeout(400);
  var s4 = await page.evaluate(state);
  await page.keyboard.press("Escape"); await page.waitForTimeout(400);
  var s5 = await page.evaluate(state);
  check(s4.leave && s4.paused && !s5.leave && !s5.paused, "Esc during play opens it, and Esc again closes it and plays on: " + JSON.stringify({ open: s4.leave, paused: s4.paused, after: s5.leave, pausedAfter: s5.paused }));
  await page.click("#btn-menu"); await page.waitForTimeout(300);
  await page.click("#leave-go"); await page.waitForTimeout(800);
  var s6 = await page.evaluate(state);
  var log = await page.evaluate(function () { var r = SolProgress.record("VA"); return { last: r.log[r.log.length - 1], lost: r.levels.lost, won: r.levels.won }; });
  await shot("02-back-on-title");
  check(s6.title && !s6.play && !s6.leave, "Leave level goes back to the title screen: " + JSON.stringify(s6));
  check(/^Level 1 saved/.test(s6.save), "the saved level is still the level that was left (Level 1): " + JSON.stringify([saveBefore, s6.save]));
  check(log.last && log.last.res === "left" && log.lost === 0 && log.won === 0, "the progress record logs the level as left, not lost: " + JSON.stringify(log));

  /* ── a shooter level, then a new level after leaving ── */
  await startLevel("raid");
  await toPlay();
  var t1 = await page.evaluate(state);
  check(t1.play && t1.menu, "a shooter level has the Menu button too: " + JSON.stringify(t1));
  await page.click("#btn-menu"); await page.waitForTimeout(400);
  var t2 = await page.evaluate(state);
  await shot("03-shooter-menu");
  check(t2.leave && t2.paused && t2.fits, "in a shooter Menu pauses and asks: " + JSON.stringify(t2));
  await page.click("#leave-go"); await page.waitForTimeout(800);
  var t3 = await page.evaluate(state);
  check(t3.title && !t3.play, "and Leave level goes back to the title screen: " + JSON.stringify(t3));
  await startLevel("maze");
  await toPlay();
  var t4 = await page.evaluate(function () { return { play: !document.getElementById("play").classList.contains("hidden"), stem: (document.getElementById("eoc-stem") || {}).textContent || "", paused: !!(SolScene && SolScene.game && SolScene.game.isPaused) }; });
  check(t4.play && t4.stem.length > 5 && !t4.paused, "a new level starts normally after leaving one: " + JSON.stringify(t4));

  check(!errors.length, "no page errors: " + JSON.stringify(errors.slice(0, 5)));
  await browser.close(); srv.close();
  console.log(fails.length ? "\n" + fails.length + " FAILED" : "\nall ok");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
