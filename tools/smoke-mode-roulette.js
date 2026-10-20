/* Headless test of the Lit and Film mode "roulette" (Rick's Roulette, Casablanca; js/mode-roulette.js):
   node tools/smoke-mode-roulette.js            (add --shots to take the pictures only)
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any
   script), picks Film Noir, then Casablanca, and drives the mode through the scene's own methods: the ball's
   flight is the physics the guide predicts; landing in the right letter's pocket scores; a wrong letter's pocket
   costs a life and crosses it out; a house pocket costs no life but brings the raid closer; the searchlight costs
   a life when it catches the student standing and none when he ducks; the raid costs a life when its bar fills;
   a diamond knocks the ball on; Select TWO needs both letters; the keys, the mouse and the SPIN button work; the
   difficulty climbs every level 2-100; the reading pop-up names the game and its controls; it fits a 500-pixel
   frame. Screenshots go to tools/shots/roulette-*.png. Prints ALL OK or the number FAILED.
   The checks step the scene's own clock (scene.update) instead of waiting on the browser's frames, so they give the
   same answer on a slow or busy machine. If js/content*.js has no Casablanca questions yet, the test adds two
   small packs of its own to the page. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var repo = path.join(__dirname, ".."), root = repo, shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", mp3: "audio/mpeg", webp: "image/webp", svg: "image/svg+xml", glb: "model/gltf-binary" };
var srv = http.createServer(function (req, res) {
  var f = path.join(root, decodeURIComponent(url.parse(req.url).pathname));
  if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, function (err, buf) {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": MIME[f.split(".").pop()] || "application/octet-stream" }); res.end(buf);
  });
});
var ONLY_SHOTS = process.argv.indexOf("--shots") !== -1;
var LONG = 120000;

/* in-page helpers (window.__rl): step the scene's clock, wait on a condition in game time, hush the hazards */
function installHelpers() {
  window.__rl = {
    wait: function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); },
    step: function (sec) {
      var s = window.SolScene, n = Math.ceil(sec / 0.033);
      for (var i = 0; i < n && !s.ended; i++) s.update(s.time.now, 33);
    },
    /* run the game clock until f() is true (at most maxSec seconds of game time) */
    until: async function (f, maxSec) {
      var t = 0, H = window.__rl;
      while (!f() && t < (maxSec || 20)) { H.step(0.1); t += 0.1; if (Math.round(t * 10) % 10 === 0) await H.wait(0); }
      return f();
    },
    /* a frame or two of the browser's own, so the canvas shows what the clock did */
    frames: async function (n) {
      var s = window.SolScene, f0 = s.game.loop.frame, t0 = Date.now();
      while (s.game.loop.frame < f0 + (n || 2) && Date.now() - t0 < 60000) await window.__rl.wait(30);
    },
    quiet: function () {
      var s = window.SolScene, B = s.rl;
      B.sl.phase = "idle"; B.sl.next = 1e9; B.sl.bands = []; B.raid = 0; B.P.drain = 0; B.push = null; B.P.pushRate = 0; B.raidAnim = 0;
      s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0; B.cd = 0; B.duckK = 0; s.ptr.down = false; s.ptr.right = false;
      ["SPACE", "S", "A", "D", "W", "LEFT", "RIGHT", "UP", "DOWN", "SHIFT"].forEach(function (kk) { s.keys[kk].isDown = false; });
    },
    /* turn the wheel so the ball lands mid-letter (null: a house pocket), spin with no bounce, wait for it to stop */
    spinTo: async function (Lt, jit) {
      var s = window.SolScene, B = s.rl, H = window.__rl;
      H.quiet(); B.ball = null;
      var pr = s.rlAimFor(Lt);
      var b = s.rlThrow(jit == null ? 0 : jit);
      await H.until(function () { return !b || b.state === "rest"; }, 8);
      H.step(0.1);
      return { pr: pr, b: b, pocket: b && b.idx, result: b && b.result };
    }
  };
}

(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var errors = [], fails = [];
  function watch(page, tag) {
    page.on("response", function (r) {
      if (r.status() !== 404) return;
      if (/content1(1[4-9]|20)\.js/.test(r.url())) return;   /* other movies' content files may still be being written */
      errors.push(tag + " 404 " + r.url());
    });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|status of 404|requestFullscreen/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  var vw = 1366, vh = 768;
  var ctx = await browser.newContext({ viewport: { width: vw, height: vh } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  await ctx.addInitScript(installHelpers);
  var page = await ctx.newPage();
  page.setDefaultTimeout(LONG);
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, "roulette-" + name + ".png"), timeout: 180000 }); }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);

  /* the Casablanca questions (or, until js/content*.js has them, two small packs of the test's own) */
  var seeded = await page.evaluate(function () {
    var have = heistBuildPack("LIT", "CASABLANCA").claims.length;
    if (have) return { have: have, added: 0 };
    function q(id, stem, correct, n) {
      var ch = []; for (var i = 0; i < (n || 4); i++) ch.push({ letter: "ABCDEF"[i], text: "Choice " + "ABCDEF"[i] + " for " + id });
      return { id: id, sol: "11.RL.1", sub: "11.RL.1.A", stem: stem, choices: ch, correct: correct };
    }
    [1, 2].forEach(function (lv) {
      HEIST_PACKS.push({ id: "test-casablanca-" + lv, family: "LIT", genre: "NOIR", episode: "casablanca", title: "Test Café " + lv, kind: "Film noir · test", blurb: "A test pack.", level: lv,
        passage: "<p>Rick's Café stood near the airport. A searchlight swept the town every night. The roulette wheel turned until morning.</p>",
        claims: [q("a" + lv, "Which detail shows the setting?", "B"), q("b" + lv, "Which word best describes the mood?", "C"), q("c" + lv, "Select TWO details that build suspense.", ["A", "D"], 5), q("d" + lv, "What does the searchlight suggest?", "A")] });
    });
    return { have: 0, added: heistBuildPack("LIT", "CASABLANCA").claims.length };
  });
  console.log("questions", JSON.stringify(seeded));

  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-genre="NOIR"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="roulette"]');
    return c ? { name: c.querySelector(".name").textContent, strand: c.getAttribute("data-strand"), visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && card.strand === "CASABLANCA", "the Casablanca card shows on the Film Noir movie screen: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="roulette"]');
  var picked = await page.evaluate(function () { return { only: SolModes.only, def: !!SolModes.MODES.roulette, l1: SolModes.modeFor(1).id, l10: SolModes.modeFor(10).id, l100: SolModes.modeFor(100).id }; });
  check(picked.only === "roulette" && picked.def && picked.l1 === "roulette" && picked.l10 === "roulette" && picked.l100 === "roulette", "picking Casablanca plays Rick's Roulette on every level: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: LONG }).catch(function () {});
  for (var i = 0; i < 20; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  async function gotoLevel(n) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "CASABLANCA", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.rl && s.claim && s.readOpen; }, n, { timeout: LONG }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent, W: s.W, H: s.H,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: LONG }).catch(function () {});
    await page.evaluate(function () { return __rl.frames(2); });
    return info;
  }
  /* close the next question's reading pop-up once the last answer's pause is over */
  async function nextQuestion(old) {
    await page.waitForFunction(function (old) { var s = SolScene; return s.claim && s.claim.id !== old && s.readOpen && !s._between; }, old, { timeout: LONG * 3 }).catch(function () {});
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: LONG }).catch(function () {});
  }
  function claimId() { return page.evaluate(function () { return SolScene.claim && SolScene.claim.id; }); }
  /* a picture: o.spin seconds of a ball's flight, the searchlight at o.light (a share of the width, or "man"), o.raid, o.duck */
  async function scene(name, o) {
    await page.evaluate(async function (o) {
      var s = SolScene, B = s.rl, H = __rl; s.iframeMs = 1e9; s.spareLives = 9;
      B.told.start = B.told.light = B.told.spin = true;
      if (o.raid != null) { B.raid = o.raid; B.P.drain = 0; }
      if (o.spin) { B.cd = 0; B.duckK = 0; B.ball = null; s.rlAimFor(s.choiceLetters()[1]); s.rlThrow(); H.step(o.spin); }
      if (o.duck) { s.keys.S.isDown = true; H.step(0.3); }
      if (o.light) {
        s.rlSweep(1); B.sl.warnMs = 100; H.step(0.15);
        B.sl.bands.forEach(function (b, i) { b.x = o.light === "man" ? B.manX + (i ? s.W * 0.4 : 0) : s.W * o.light; });
        B.sl.next = 1e9; B.P.doubleP = 0; B.P.sweepSpd = 0.0001;
      }
      if (o.warn) { B.sl.bands = []; s.rlSweep(-1); B.sl.warnMs = 1e9; H.step(0.6); }
      /* no hit lands while the picture is taken, and no safety blink on the student */
      B.sl.hit = true; B.sl.next = 1e9; B.P.drain = 0; s.iframeMs = 0;
      H.step(0.05);
      await H.frames(2);
    }, o || {});
    await shot(name);
    await page.evaluate(function () { var s = SolScene; s.keys.S.isDown = false; s.iframeMs = 0; });
  }

  var l1 = await gotoLevel(1);
  console.log("canvas", l1.W + "x" + l1.H);
  check(l1.key === "mode" && l1.mode === "roulette" && l1.act === "SPIN", "level 1 runs Rick's Roulette in the mode scene with a SPIN button: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act }));
  check(/Rick's Roulette/.test(l1.card) && /roulette level/.test(l1.card) && /Controls:/.test(l1.card) && /SPIN/.test(l1.card) && /duck/.test(l1.card) && /right letter's chip/.test(l1.hint),
    "the reading pop-up names the game and explains its controls: " + l1.card.slice(0, 140) + "…");
  if (ONLY_SHOTS) {
    await scene("01-level1", {});
    await gotoLevel(1); await scene("02-light-1", { light: "man", raid: 0.5, duck: true });
    await gotoLevel(50); await scene("03-level50", { spin: 1.6, raid: 0.8 });
    await gotoLevel(100); await scene("04-level100", { light: 0.62, spin: 0.5, raid: 0.95 });
    await page.setViewportSize({ width: 1000, height: 500 });
    await page.waitForFunction(function () { return SolScene.H <= 500; }, null, { timeout: LONG }).catch(function () {});
    await scene("05-frame500", { warn: true });
    await browser.close(); srv.close(); return;
  }

  /* the scripted run */
  var run = await page.evaluate(async function () {
    var s = SolScene, B = s.rl, H = __rl, o = {};
    H.quiet();
    var letters = s.choiceLetters();
    o.letters = letters.join(""); o.chips = B.sectors.map(function (sc) { return sc.txt.text; }).join(""); o.NP = B.NP;
    o.share = B.sectors.length * B.P.pockets / B.NP;
    /* the keys walk him along the table: ◀ is a bigger angle (to the left on screen), D a smaller one */
    var a0 = B.launch; s.keys.LEFT.isDown = true; await H.until(function () { return B.launch > a0 + 0.2; }, 3); s.keys.LEFT.isDown = false;
    o.keyLeft = +(B.launch - a0).toFixed(3);
    var a1 = B.launch; s.keys.D.isDown = true; await H.until(function () { return B.launch < a1 - 0.2; }, 3); s.keys.D.isDown = false;
    o.keyRight = +(a1 - B.launch).toFixed(3);
    /* S ducks; while down he can't spin */
    var sp = B.spins;
    s.keys.S.isDown = true; H.step(0.4); o.duck = { k: +B.duckK.toFixed(2), can: s.rlCanThrow() };
    s.keys.SPACE.isDown = true; H.step(0.2); o.duck.spun = B.spins - sp; s.keys.SPACE.isDown = false; s.keys.S.isDown = false;
    await H.until(function () { return B.duckK === 0; }, 3);
    /* Space through the scene's own keys: a press spins once; holding it does not spin again */
    H.quiet(); B.ball = null; s.rlAimFor(null); sp = B.spins;
    s.keys.SPACE.isDown = true; H.step(0.1); var once = B.spins - sp;
    await H.until(function () { return B.ball && B.ball.state === "rest"; }, 8); B.cd = 0; H.step(0.2);
    o.held = { once: once, again: B.spins - sp - once };
    s.keys.SPACE.isDown = false; H.step(0.1);
    /* the guide is the physics: thrown with no bounce, the ball stops in the predicted pocket, from anywhere */
    var exact = [], ap = s.answerPick;
    s.answerPick = function () { return "test"; };   /* these throws land anywhere: they pick nothing */
    for (var i = 0; i < 6; i++) {
      H.quiet(); B.ball = null; B.th = Math.random() * 6.28; B.launch = Math.PI / 2 + (i - 1.5) * 0.45;
      var pr = s.rlPredict(), b = s.rlThrow(0);
      await H.until(function () { return b.state === "rest"; }, 8);
      exact.push(pr.pocket === b.idx);
      B.lastPick = null;
    }
    s.answerPick = ap;
    o.exact = exact;
    return o;
  });

  /* the real keyboard: a Space press spins (on the browser's own frames) */
  await page.evaluate(function () { var s = SolScene, B = s.rl; __rl.quiet(); B.ball = null; s.rlAimFor(null); window.__sp = B.spins; });
  await page.keyboard.down("Space");
  await page.waitForFunction(function () { return SolScene.rl.spins > window.__sp; }, null, { timeout: LONG }).catch(function () {});
  await page.keyboard.up("Space");
  run.space = await page.evaluate(function () { return SolScene.rl.spins - window.__sp; });
  await page.evaluate(async function () { var B = SolScene.rl; await __rl.until(function () { return !B.ball || B.ball.state === "rest"; }, 8); });
  /* the mouse: moving it along the table walks him there; a click spins */
  var cbox = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  var m0 = await page.evaluate(function () { var s = SolScene, B = s.rl; B.ptrWant = null; B.launch = Math.PI / 2; return { launch: B.launch, cx: B.cx, R: B.R, W: s.W }; });
  var tx = m0.cx - m0.R * 0.55;
  await page.mouse.move(cbox.x + (tx - 40) * cbox.w / m0.W, cbox.y + cbox.h * 0.85);
  await page.mouse.move(cbox.x + tx * cbox.w / m0.W, cbox.y + cbox.h * 0.86, { steps: 4 });
  await page.waitForFunction(function () { return SolScene.rl.ptrWant != null; }, null, { timeout: LONG }).catch(function () {});
  var mouse = await page.evaluate(function () { var s = SolScene, B = s.rl; __rl.step(1); return { launch: B.launch, handX: s.rlPt(B.launch, 0.935).x }; });
  run.mouse = { moved: Math.abs(mouse.launch - m0.launch) > 0.1, follows: Math.abs(mouse.handX - tx) < 30 };
  await page.evaluate(function () { var s = SolScene, B = s.rl; __rl.quiet(); B.ball = null; s.rlAimFor(null); window.__sp = B.spins; });
  await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.rl.spins > window.__sp; }, null, { timeout: LONG }).catch(function () {});
  await page.mouse.up();
  run.mouse.click = await page.evaluate(function () { return SolScene.rl.spins - window.__sp; });
  await page.evaluate(async function () { var B = SolScene.rl; await __rl.until(function () { return !B.ball || B.ball.state === "rest"; }, 8); });
  /* the on-screen SPIN button */
  var abox = await page.evaluate(function () { var s = SolScene, B = s.rl; __rl.quiet(); B.ball = null; s.rlAimFor(null); window.__sp = B.spins; var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.rl.spins > window.__sp; }, null, { timeout: LONG }).catch(function () {});
  await page.mouse.up();
  run.button = await page.evaluate(function () { return SolScene.rl.spins - window.__sp; });
  await page.evaluate(async function () { var B = SolScene.rl; await __rl.until(function () { return !B.ball || B.ball.state === "rest"; }, 8); });
  /* the right mouse button ducks (and does not spin) */
  await page.evaluate(function () { var s = SolScene, B = s.rl; __rl.quiet(); B.ball = null; window.__sp = B.spins; });
  await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y + cbox.h * 0.8);
  await page.mouse.down({ button: "right" });
  await page.waitForFunction(function () { return SolScene.ptr.down && SolScene.ptr.right; }, null, { timeout: LONG }).catch(function () {});
  run.right = await page.evaluate(function () { __rl.step(0.4); return { duck: SolScene.rl.duckK, spun: SolScene.rl.spins - window.__sp }; });
  await page.mouse.up({ button: "right" });
  await page.waitForFunction(function () { return !SolScene.ptr.down; }, null, { timeout: LONG }).catch(function () {});

  var q2 = await claimId();
  var run2 = await page.evaluate(async function () {
    var s = SolScene, B = s.rl, H = __rl, o = {};
    H.quiet(); H.step(0.5);
    var need = s.need.slice(), letters = s.choiceLetters(), wrongs = letters.filter(function (L) { return need.indexOf(L) === -1; });
    /* a house pocket: no life, the raid comes closer */
    var r0 = B.raid, st0 = s.strikes, sc0 = s.score;
    var h = await H.spinTo(null);
    o.house = { result: h.result, strikes: s.strikes - st0, score: s.score - sc0, raid: +(B.raid - r0).toFixed(3), cost: B.P.houseCost };
    /* a wrong letter: a life, the letter is crossed out; landing there again costs nothing more */
    sc0 = s.score;
    var w = await H.spinTo(wrongs[0]);
    var wsec = B.sectors.filter(function (sc) { return sc.letter === wrongs[0]; })[0];
    o.wrong = { result: w.result, strikes: s.strikes, score: s.score - sc0, state: wsec.state, chip: wsec.txt.text, label: s._lastHitLabel, letter: w.pr.letter };
    var w2 = await H.spinTo(wrongs[0]);
    o.again = { result: w2.result, strikes: s.strikes };
    /* the searchlight: standing in it costs a life */
    H.quiet(); B.launch = Math.PI / 2; H.step(0.1);
    var S = s.rlSweep(1); S.warnMs = 400;
    await H.until(function () { return S.phase === "sweep"; }, 3);
    await H.until(function () { return S.phase === "idle" || s.strikes > 0; }, 10);
    o.light = { strikes: s.strikes, label: s._lastHitLabel, hits: B.hits };
    await H.until(function () { return S.phase === "idle"; }, 10);
    /* ... and ducking (▼ held) lets it pass over him */
    H.quiet(); B.launch = Math.PI / 2;
    s.keys.DOWN.isDown = true;
    S = s.rlSweep(-1); S.warnMs = 400;
    await H.until(function () { return S.phase === "sweep"; }, 3);
    var seen = false;
    await H.until(function () { if (s.rlLit()) seen = true; return S.phase === "idle"; }, 10);
    o.ducked = { strikes: s.strikes, litOverHim: seen, duck: B.duckK };
    s.keys.DOWN.isDown = false;
    /* the raid: when its bar fills, a life */
    H.quiet(); B.P.drain = 0.5; B.raid = 0.9;
    await H.until(function () { return s.strikes > 0; }, 3);
    o.raid = { strikes: s.strikes, label: s._lastHitLabel, raid: +B.raid.toFixed(2), anim: B.raidAnim > 0 };
    await H.until(function () { return B.raidAnim <= 0; }, 4);
    /* the croupier's push changes the wheel's speed (and spinning waits for it) */
    H.quiet(); var w0 = B.w; B.P.pushVar = 0.3; B.P.flipP = 1; s.rlStartPush(); var canMid = s.rlCanThrow();
    await H.until(function () { return !B.push; }, 3);
    o.push = { flipped: (B.w >= 0) !== (w0 >= 0), canMid: canMid, near: Math.abs(Math.abs(B.w) - B.P.spin) <= B.P.spin * 0.31 };
    /* the ball runs against the wheel either way, and the guide still holds */
    var ap0 = s.answerPick; s.answerPick = function () { return "test"; };   /* this ball lands anywhere: it picks nothing */
    B.ball = null; B.cd = 0; var pf = s.rlPredict(), bf = s.rlThrow(0);
    o.push.against = !!bf && bf.sB === (B.w >= 0 ? -1 : 1);
    if (bf) await H.until(function () { return bf.state === "rest"; }, 8);
    s.answerPick = ap0;
    o.push.exact = !!bf && bf.idx === pf.pocket;
    B.w = Math.abs(w0); B.P.flipP = 0; B.P.pushVar = 0;
    /* a diamond knocks the ball on (forced here: level 1 has none) */
    H.quiet(); B.ball = null; B.P.diamonds = 8; B.P.kick = 0.5;
    var n = 8, d = Math.PI / 2 + Math.PI / n, sB = s.rlBallDir(), D1 = (B.P.v0 + 2.4) / 2 * B.P.rimT;
    B.launch = d - sB * D1; while (B.launch > Math.PI / 2 + 0.78) B.launch -= Math.PI * 2 / n; while (B.launch < Math.PI / 2 - 0.78) B.launch += Math.PI * 2 / n;
    var pd = s.rlPredict();
    o.diamond = { hit: pd.diamond != null, kick: +pd.kick.toFixed(2) };
    B.P.diamonds = 0; var pn = s.rlPredict(); B.P.diamonds = 8;
    o.diamond.moved = +(pd.phiL - pn.phiL).toFixed(2);
    var ap = s.answerPick; s.answerPick = function () { return "test"; };   /* this ball lands anywhere: it picks nothing */
    B.cd = 0; var db = s.rlThrow(0);
    if (db) await H.until(function () { return db.state === "rest"; }, 8);
    s.answerPick = ap;
    o.diamond.landed = !!db && db.idx === pd.pocket;
    B.P.diamonds = 0; B.P.kick = 0;
    /* the right letter answers the question and pays coins */
    H.quiet(); sc0 = s.score; var coins = s.nightCoins;
    var rt = await H.spinTo(need[0]);
    if (need.length > 1) await H.spinTo(need[1]);
    o.right = { result: rt.result, score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins, letter: rt.pr.letter };
    return o;
  });
  /* the next question: its reading pop-up, then Select TWO */
  await nextQuestion(q2);
  var two = await page.evaluate(async function () {
    var s = SolScene, B = s.rl, H = __rl, o = {};
    H.quiet();
    o.fresh = { live: B.sectors.every(function (sc) { return sc.state === "live"; }), raid: B.raid, ball: !B.ball };
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    await H.spinTo(pair[0]);
    var f0 = B.sectors.filter(function (sc) { return sc.letter === pair[0]; })[0];
    o.first = { score: s.score - sc0, state: f0.state, chip: f0.txt.text, found: s.extracted.join(""), strikes: s.strikes };
    var a2 = await H.spinTo(pair[0]);
    o.again = { result: a2.result, score: s.score - sc0, strikes: s.strikes };
    await H.spinTo(pair[1]);
    o.second = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins };
    return o;
  });
  console.log("run", JSON.stringify(run));
  console.log("run2", JSON.stringify(run2));
  console.log("two", JSON.stringify(two));
  check(run.chips === run.letters && run.letters.length >= 3 && run.share === 0.75, "a chip for every answer letter, three pockets each and one house pocket between (level 1): " + JSON.stringify({ chips: run.chips, NP: run.NP, share: run.share }));
  check(run.keyLeft > 0.2 && run.keyRight > 0.2, "◀ and D walk him along the table: " + JSON.stringify({ left: run.keyLeft, right: run.keyRight }));
  check(run.duck.k > 0.9 && !run.duck.can && run.duck.spun === 0, "S ducks him behind the table, and he can't spin while down: " + JSON.stringify(run.duck));
  check(run.held.once === 1 && run.held.again === 0, "a Space press spins once; holding it down does not spin again: " + JSON.stringify(run.held));
  check(run.exact.length >= 1 && run.exact.every(function (x) { return x; }), "the ball stops in the pocket the guide predicts, from anywhere along the table (the same physics): " + JSON.stringify(run.exact));
  check(run.space === 1, "a real Space key press spins the ball: " + run.space);
  check(run.mouse.moved && run.mouse.follows && run.mouse.click === 1, "moving the mouse walks him there, and a click spins: " + JSON.stringify(run.mouse));
  check(run.button === 1, "the on-screen SPIN button spins: " + run.button);
  check(run.right.duck > 0.9 && run.right.spun === 0, "the right mouse button ducks and does not spin: " + JSON.stringify(run.right));
  check(run2.house.result === "house" && run2.house.strikes === 0 && run2.house.score === 0 && Math.abs(run2.house.raid - run2.house.cost) < 0.01, "a black house pocket costs no life, but the raid comes closer: " + JSON.stringify(run2.house));
  check(run2.wrong.result === "wrong" && run2.wrong.strikes === 1 && run2.wrong.score === 0 && run2.wrong.state === "dead" && run2.wrong.chip === "✕" && /WRONG LETTER/.test(run2.wrong.label || "") && run2.again.strikes === 0 && run2.again.result === "dead",
    "the ball in a wrong letter's pocket costs a life and crosses it out; landing there again costs nothing: " + JSON.stringify({ wrong: run2.wrong, again: run2.again }));
  check(run2.light.strikes === 1 && /SEARCHLIGHT/.test(run2.light.label || "") && run2.light.hits === 1, "the searchlight catching him standing costs a life: " + JSON.stringify(run2.light));
  check(run2.ducked.strikes === 0 && run2.ducked.litOverHim && run2.ducked.duck > 0.9, "ducking (▼ held) lets the light pass over him: " + JSON.stringify(run2.ducked));
  check(run2.raid.strikes === 1 && /RAID/.test(run2.raid.label || "") && run2.raid.raid < 0.5 && run2.raid.anim, "the raid bar filling brings the police in: a life, and the bar drops back: " + JSON.stringify(run2.raid));
  check(run2.push.flipped && !run2.push.canMid && run2.push.near && run2.push.against && run2.push.exact, "the croupier's push changes the wheel (here the other way); no spinning mid-push; the ball still runs against the wheel and lands where the guide said: " + JSON.stringify(run2.push));
  check(run2.diamond.hit && Math.abs(run2.diamond.moved) > 0.4 && run2.diamond.landed, "a ball dropping onto a diamond is knocked on, and stops where the guide said: " + JSON.stringify(run2.diamond));
  check(run2.right.result === "done" && run2.right.score === 1 && run2.right.strikes === 0 && run2.right.coins, "the ball in the right letter's pocket answers the question and pays coins: " + JSON.stringify(run2.right));
  check(two.fresh.live && two.fresh.raid === 0 && two.fresh.ball, "a new question brings fresh chips, an empty raid bar and the ball back in hand: " + JSON.stringify(two.fresh));
  check(two.first.score === 0 && two.first.state === "found" && two.first.chip === "✓" && two.first.found.length === 1 && two.first.strikes === 0 && two.again.score === 0 && two.again.strikes === 0 && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both letters: the first is ticked, landing on it again does nothing, the second answers it: " + JSON.stringify(two));

  /* the difficulty: every level 2-100 harder than the one before, never easier on any setting */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.roulette.params, s = SolScene, out = { same: typeof s.rlParams === "function" && JSON.stringify(s.rlParams(50)) === JSON.stringify(f(50)) };
    var up = ["spin", "v0", "jitter", "blur", "diamonds", "kick", "pushRate", "pushVar", "flipP", "bandW", "sweepSpd", "doubleP", "beams", "drain", "houseCost"],
      down = ["share", "rimT", "dropT", "guide", "sweepEvery", "warnMs", "pockets"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = [];
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse.push(k); });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse.push(k); });
      if (worse.length) easier.push((n + 1) + ":" + worse.join("/")); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l50: ramp.l50, l100: ramp.l100 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0, "rlParams (on the def as params): every level 2-100 is harder than the one before and never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat }));
  var e = ramp.l1, z = ramp.l100;
  check(e.guide === 3 && e.jitter === 0 && e.diamonds === 0 && e.pushRate === 0 && e.share === 0.75 && e.spin < 0.8 && e.sweepEvery > 11.5 && e.warnMs > 2600 && e.drain < 0.015,
    "level 1 is gentle: the ring shows the pocket, no bounce, no diamonds, no pushes, wide letters, a slow wheel, rare searchlights with a long warning, a slow raid: " + JSON.stringify(e));
  check(z.guide === 0 && z.diamonds === 8 && z.share < 0.34 && z.spin > 1.6 && z.beams === 2 && z.flipP > 0.4 && z.warnMs <= 850 && z.drain >= 0.04,
    "level 100 is intense: no guide, eight diamonds, one pocket a letter, a fast wheel that flips, two searchlights with little warning, a quick raid: " + JSON.stringify(z));

  /* a level left alone a while: the searchlight comes on its own, the raid bar fills on its own */
  var l2 = await gotoLevel(2);
  var alone = await page.evaluate(async function () {
    var s = SolScene, B = s.rl, H = __rl; s.iframeMs = 1e9; s.spareLives = 9;
    var r0 = B.raid, sweeps = 0, last = B.sl.phase;
    await H.until(function () { if (B.sl.phase === "sweep" && last !== "sweep") sweeps++; last = B.sl.phase; return sweeps >= 1 && B.sl.phase === "idle"; }, 40);
    var o = { sweeps: sweeps, raidUp: B.raid > r0 };
    s.iframeMs = 0;
    return o;
  });
  check(l2.mode === "roulette" && alone.sweeps >= 1 && alone.raidUp, "left alone, the searchlight sweeps in by itself and the raid bar fills: " + JSON.stringify(alone));

  /* levels 10, 50 and 100: each plays, the card says what is new; the pictures */
  var l10 = await gotoLevel(10);
  var p10 = await page.evaluate(async function () { var s = SolScene, B = s.rl, H = __rl; H.quiet(); var r = await H.spinTo(s.need[0]); return { result: r.result, NP: B.NP }; });
  check(l10.mode === "roulette" && l10.tier === 0 && /^(done|partial)$/.test(p10.result), "level 10 plays Rick's Roulette and the right letter scores: " + JSON.stringify({ mode: l10.mode, tier: l10.tier, p: p10 }));
  var l50 = await gotoLevel(50), q50 = await claimId();
  var p50 = await page.evaluate(async function () { var s = SolScene, B = s.rl, H = __rl; H.quiet(); var o = { guide: B.P.guide, diamonds: B.P.diamonds, NP: B.NP, letters: B.sectors.length }; var r = await H.spinTo(s.need[0]); o.result = r.result; return o; });
  check(l50.mode === "roulette" && l50.tier === 4 && /New this time:.*swing back/.test(l50.card) && p50.guide === 2 && p50.diamonds === 6 && /^(done|partial)$/.test(p50.result), "level 50 plays: the arc guide, six diamonds, the right letter scores, and the card says what's new: " + JSON.stringify(p50));
  if (p50.result === "done") await nextQuestion(q50);
  await scene("03-level50", { spin: 1.6, raid: 0.8 });
  var l100 = await gotoLevel(100), q100 = await claimId();
  var p100 = await page.evaluate(async function () {
    var s = SolScene, B = s.rl, H = __rl; H.quiet();
    var o = { guide: B.P.guide, beams: B.P.beams };
    var r = await H.spinTo(s.need[0]); o.result = r.result;
    s.iframeMs = 1e9; s.rlSweep(1); B.sl.warnMs = 200; H.step(0.3);
    o.bands = B.sl.bands.length;
    H.quiet();
    return o;
  });
  check(l100.mode === "roulette" && l100.tier === 9 && /New this time:.*last night/.test(l100.card) && p100.bands === 2 && p100.guide === 0 && /^(done|partial)$/.test(p100.result), "level 100 plays: two searchlights, no guide, the right letter scores, and the card says what's new: " + JSON.stringify(p100));
  if (p100.result === "done") await nextQuestion(q100);
  await scene("04-level100", { light: 0.62, spin: 0.5, raid: 0.95 });
  await gotoLevel(1);
  await scene("01-level1", {});
  await scene("02-light-1", { light: "man", raid: 0.45, duck: true });

  /* the 500-pixel-tall Canvas frame */
  await page.setViewportSize({ width: 1000, height: 500 });
  await page.waitForFunction(function () { return SolScene.H <= 500; }, null, { timeout: LONG }).catch(function () {});
  var small = await page.evaluate(function () { var s = SolScene, B = s.rl; return { W: s.W, H: s.H, wheelTop: B.cy - B.R * 0.42 * 1.08, wheelBottom: B.cy + B.R * 0.42 * 1.08, manY: B.manY, handY: s.rlPt(B.launch, 0.935).y }; });
  await scene("05-frame500", { warn: true });
  check(small.H <= 500 && small.wheelTop > 40 && small.wheelBottom < small.H - 30 && small.manY < small.H - 20 && small.handY < small.H, "in a 500-pixel-tall frame the wheel and the student fit: " + JSON.stringify(small));
  await page.setViewportSize({ width: vw, height: vh });
  await page.waitForFunction(function () { return SolScene.H > 500; }, null, { timeout: LONG }).catch(function () {});

  /* losing: the last life ends the level with a Retry */
  await page.evaluate(function () { var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0; s.answerWrong("Z", "WRONG LETTER"); });
  await page.waitForFunction(function () { return SolScene.ended && !document.getElementById("overlay").classList.contains("hidden"); }, null, { timeout: LONG }).catch(function () {});
  var lose = await page.evaluate(function () { var s = SolScene; return { ended: s.ended, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") }; });
  check(lose.ended && lose.retry && /Rick's Roulette/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 200));
  await ctx.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
