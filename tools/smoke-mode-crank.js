/* Headless test of the Lit and Film mode "crank" (Hand-Crank Camera, Arrival of a Train, js/mode-crank.js):
   node tools/smoke-mode-crank.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Film History and the Arrival of a Train card, and drives the mode through the scene's own methods. Game time
   is run with the scene's own tick (tick_crank), so the checks don't depend on how fast this machine draws frames:
   the right letter scores, a wrong letter costs a life and is crossed out, two letters in the viewfinder film
   nothing, cranking too slow or too fast films nothing, a snapped film and an empty magazine each cost a life (and
   can be avoided), Select TWO needs both, the express jolts the crank, smoke and onlookers hide letters, the keys,
   the mouse and the CRANK button work, the trains come and go, the difficulty climbs every level 2-100, and the
   reading pop-up names the game and its controls. Screenshots go to tools/shots/crank-*.png. Prints ALL OK or the
   number FAILED. */
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

(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var errors = [], fails = [], window_pauseStack = [];
  function watch(page, tag) {
    page.on("response", function (r) { if (r.status() === 404 && !/content1(1[4-9]|20)\.js/.test(r.url())) console.log(tag + " 404 " + r.url()); });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      /* requestFullscreen: game.js asks for full screen on the start click, and on a slow machine the click's user
         gesture has expired by then (not this mode's doing) */
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|404 \(Not Found\)|requestFullscreen/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () {
    window.SOL_STATE = "LIT";
    /* where a "Cannot pause" warning comes from, if one shows up */
    var w0 = console.warn;
    console.warn = function () { try { if (/Cannot pause/.test(String(arguments[0]))) window.__pauseStack = (window.__pauseStack || []).concat([String(new Error().stack).split("\n").slice(2, 7).join(" | ")]); } catch (e) {} return w0.apply(console, arguments); };
  });
  var page = await ctx.newPage();
  page.setDefaultTimeout(120000);
  watch(page, "dev");
  async function shot(name) {
    await page.evaluate(function () { __T.pause(); });
    await page.screenshot({ path: path.join(shots, name + ".png"), timeout: 240000 });
    await page.evaluate(function () { __T.resume(); });
  }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build (its card is on the title screen)");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.click('#mode-packs .card[data-genre="HISTORY"]');
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="crank"]');
    return c ? { text: c.textContent.replace(/\s+/g, " ").trim(), visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && /Arrival of a Train/.test(card.text), "the Arrival of a Train card shows under Film History: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="crank"]');
  var picked = await page.evaluate(function () {
    return { only: SolModes.only, def: !!SolModes.MODES.crank, l1: (SolModes.modeFor(1) || {}).id, l10: (SolModes.modeFor(10) || {}).id, l100: (SolModes.modeFor(100) || {}).id };
  });
  check(picked.only === "crank" && picked.def && picked.l1 === "crank" && picked.l10 === "crank" && picked.l100 === "crank", "picking the movie plays Hand-Crank Camera on every level: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  /* the test's helpers, in the page: run game time with the scene's own tick */
  async function helpers() {
    await page.evaluate(function () {
      window.__T = {
        sim: function (sec, o) {
          var s = SolScene, n = Math.round(sec * 30), i;
          o = o || {};
          for (i = 0; i < n; i++) {
            if (s._finishing || s.ended || (o.stopBetween !== false && s._between)) break;
            if (o.aim) __T.aim(o.aim);
            s.tick_crank(1 / 30, { ax: o.ax || 0, ay: o.ay || 0, fire: false, ptr: null }, 1000 / 30);
            if (o.each) o.each();
            if (o.until && o.until()) break;
          }
          return i / 30;
        },
        quiet: function () {
          var s = SolScene, C = s.ck;
          C.noSpawn = true; C.noTrain = true; C.train = null; C.subs = []; C.freeze = false;
          C.puffs.forEach(function (q) { q.spr.setVisible(false); C.puffPool.push(q.spr); }); C.puffs = [];
          s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
          C.film = C.P.film; C.lockMs = 0; C.rate = 0; C.lastTap = null; C.drive = 0; C.prog = {}; C.jolt = 0; C.snapT = 0; C.tapQ = 0;
          C.P.sway = 0; C.title = 0; C.needle = 0;
        },
        stage: function (L, x, z) { return SolScene.crankSpawnWalker({ letter: L, x: x, z: z, st: "stand", stand: 1e9, a: 1 }); },
        aim: function (L) {
          var s = SolScene, C = s.ck; s.crankComputeTags(); var tg = s.crankTagOf(L);
          if (tg) { C.fx = tg.x; C.fy = tg.y; C.aimMode = "keys"; C.idle = 0; s.crankClampFrame(); }
          return tg;
        },
        steady: function (fps) { var C = SolScene.ck; C.rate = (fps || 16) / 8; C.lastTap = C.t; C.needle = fps || 16; SolScene.crankDrive(fps || 16); },
        /* a steady player: keeps the viewfinder on the right letter and cranks two turns a second while it is
           alone in the shot; returns the game time it took to film it */
        bot: function (maxSec, stopAt) {
          var s = SolScene, C = s.ck, t0 = C.t, sc0 = s.score, ex0 = s.extracted.length, st0 = s.strikes, i, lastOnly = -9, L = null;
          C.noSpawn = false; C.noTrain = false; C.freeze = false; s.iframeMs = 0; C.drive = 0;
          for (i = 0; i < maxSec * 30; i++) {
            L = s.need.filter(function (x) { return s.extracted.indexOf(x) === -1; })[0];
            if (!L) break;
            __T.aim(L);
            s.tick_crank(1 / 30, { ax: 0, ay: 0, fire: false, ptr: null }, 1000 / 30);
            /* like a person, it keeps cranking through a moment's interruption */
            if (C.cand.length === 1 && C.cand[0] === L) lastOnly = C.t;
            var want = C.t - lastOnly < 1;
            if (want && !C.drive) s.crankDrive(16); else if (!want && C.drive) s.crankDrive(0);
            if (s.score > sc0 || s.extracted.length > ex0 || s._between || s._finishing) break;
            if (stopAt && (C.prog[L] || 0) >= stopAt) break;
          }
          C.drive = 0;
          return { sec: +(C.t - t0).toFixed(1), got: (s.score > sc0 || s.extracted.length > ex0) ? 1 : 0, strikes: s.strikes - st0, letter: L, two: s.need.length > 1 };
        },
        /* immediate (scene.pause() is queued until the next step) */
        pause: function () { var s = SolScene; try { if (s.sys.isActive()) s.sys.pause(); } catch (e) {} },
        resume: function () { var s = SolScene; try { if (s.sys.isPaused()) s.sys.resume(); } catch (e) {} },
        wrongs: function () { var s = SolScene; return s.choiceLetters().filter(function (L) { return s.need.indexOf(L) === -1; }); }
      };
    });
  }
  async function gotoLevel(n) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "TRAIN", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.ck && s.claim && s.readOpen; }, n, { timeout: 90000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 30000 }).catch(function () {});
    await helpers();
    return info;
  }
  /* after a question is answered: the next one's reading pop-up, then play */
  async function nextQuestion() {
    await page.evaluate(function () { var s = SolScene, C = s.ck; C.drive = 0; C.rate = 0; C.lastTap = null; C.noSpawn = false; C.noTrain = false; C.freeze = false; s.time.timeScale = 12; });
    await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 90000 }).catch(function () {});
    await page.evaluate(function () { SolScene.time.timeScale = 1; });
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 30000 }).catch(function () {});
  }

  /* ── level 1 ── */
  var l1 = await gotoLevel(1);
  check(l1.key === "mode" && l1.mode === "crank" && l1.act === "CRANK", "level 1 runs Hand-Crank Camera in the mode scene with a CRANK button: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act }));
  check(/Hand-Crank Camera/.test(l1.card) && /camera level/.test(l1.card) && /Controls:/.test(l1.card) && /Space/.test(l1.card) && /CRANK/.test(l1.card) && /crank/i.test(l1.hint),
    "the reading pop-up names the game and its controls: " + l1.card.slice(0, 140) + "…");

  /* the scene at the start: the first train is coming in, and every letter is on something */
  var start = await page.evaluate(function () {
    var s = SolScene, C = s.ck, seen = {}, letters = s.choiceLetters();
    var o = { letters: letters.join(""), train: !!C.train && C.train.phase, bg: C.bg.texture.key, layers: { grain: C.grain.visible, spr: C.sprL.visible && C.sprR.visible, vig: C.vig.visible } };
    o.carriers = letters.every(function (L) { return s.crankHasCarrier(L); });
    __T.sim(7, { each: function () { C.tags.forEach(function (tg) { if (tg.vis && tg.a >= 0.5) seen[tg.L] = 1; }); } });
    o.seen = Object.keys(seen).sort().join("");
    o.texts = C.tagTx.filter(function (t) { return t.visible; }).map(function (t) { return t.text; }).sort().join("");
    o.zf = +(C.train ? C.train.zf : -1).toFixed(1);
    return o;
  });
  check(start.train === "approach" && start.carriers && start.seen === start.letters.split("").sort().join("") && /^md-crank-bg-/.test(start.bg) && start.layers.grain && start.layers.spr && start.layers.vig,
    "a train comes in at the start, every answer letter rides on something, and every plate shows within seconds (film grain, sprocket edges, vignette on): " + JSON.stringify(start));

  /* the keys and the pad move the viewfinder */
  await page.evaluate(function () { __T.quiet(); var C = SolScene.ck; C.fx = C.VX; C.fy = C.VY; window.__f0 = { x: C.fx, y: C.fy }; });
  await page.keyboard.down("ArrowRight");
  await page.waitForFunction(function () { return SolScene.ck.fx > window.__f0.x + 4; }, null, { timeout: 120000 }).catch(function () {});
  var kdiag = await page.evaluate(function () { var s = SolScene, k = s.keys; return { fx: Math.round(SolScene.ck.fx - window.__f0.x), R: k.RIGHT.isDown, L: k.LEFT.isDown, A: k.A.isDown, D: k.D.isDown, ax: s.readInput().ax, frame: s.game.loop.frame }; });
  await page.keyboard.up("ArrowRight");
  await page.keyboard.down("w");
  await page.waitForFunction(function () { return SolScene.ck.fy < window.__f0.y - 4; }, null, { timeout: 120000 }).catch(function () {});
  await page.keyboard.up("w");
  var keys = await page.evaluate(function () { var C = SolScene.ck; return { right: Math.round(C.fx - window.__f0.x), up: Math.round(window.__f0.y - C.fy) }; });
  keys.diag = kdiag;
  check(keys.right > 4 && keys.up > 4, "▶ and W move the viewfinder right and up: " + JSON.stringify(keys));
  /* Space turns the crank: one turn a press; steady presses bring the needle up */
  var t0 = await page.evaluate(function () { var C = SolScene.ck; C.lastTap = null; C.rate = 0; return C.turns; });
  for (i = 0; i < 4; i++) {
    await page.keyboard.down("Space");
    await page.waitForFunction(function (n) { return SolScene.ck.turns > n; }, t0 + i, { timeout: 60000 }).catch(function () {});
    await page.keyboard.up("Space");
    await page.waitForTimeout(150);
  }
  var space = await page.evaluate(function (t0) { var C = SolScene.ck; return { turns: C.turns - t0, fps: +(C.rate * 8).toFixed(1) }; }, t0);
  check(space.turns === 4 && space.fps > 0, "each press of Space is one turn of the crank, and the turns set the speed: " + JSON.stringify(space));
  /* the mouse aims the viewfinder, and a click turns the crank */
  var cbox = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  await page.mouse.move(cbox.x + cbox.w * 0.3, cbox.y + cbox.h * 0.3, { steps: 3 });
  await page.waitForFunction(function () { var s = SolScene, C = s.ck; return C.aimMode === "ptr" && Math.abs(C.fx - Math.max(C.x0p + C.fw / 2, s.ptr.x)) < 12; }, null, { timeout: 60000 }).catch(function () {});
  var mouse = await page.evaluate(function () { var s = SolScene, C = s.ck; return { mode: C.aimMode, fx: Math.round(C.fx), px: Math.round(s.ptr.x), fy: Math.round(C.fy), py: Math.round(s.ptr.y), turns: C.turns }; });
  await page.mouse.down(); await page.waitForFunction(function (n) { return SolScene.ck.turns > n; }, mouse.turns, { timeout: 60000 }).catch(function () {}); await page.mouse.up();
  mouse.click = await page.evaluate(function (n) { return SolScene.ck.turns - n; }, mouse.turns);
  check(mouse.mode === "ptr" && Math.abs(mouse.fx - mouse.px) < 14 && mouse.click === 1, "the viewfinder follows the mouse, and a click turns the crank: " + JSON.stringify(mouse));
  /* the on-screen CRANK button */
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, t: SolScene.ck.turns }; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  await page.waitForFunction(function (n) { return SolScene.ck.turns > n; }, abox.t, { timeout: 60000 }).catch(function () {});
  await page.mouse.up();
  var btn = await page.evaluate(function (n) { return SolScene.ck.turns - n; }, abox.t);
  check(btn === 1, "a press of the on-screen CRANK button is one turn: " + btn);
  await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y + cbox.h * 0.95);

  /* the scene at work: the train coming in, the viewfinder on the right letter, a take under way */
  await page.evaluate(function () {
    var s = SolScene, C = s.ck; C.noSpawn = false; C.noTrain = false; C.freeze = false; C.drive = 0;
    C.train = null; s.crankSpawnTrain(false, 95); s.crankEnsure(true); __T.sim(6.5, { stopBetween: false });
    __T.bot(20, 0.5);
    __T.pause();
  });
  await shot("crank-01-level1");

  /* the scripted run: the world held still, letters staged on porters' boards */
  var run = await page.evaluate(function () {
    var s = SolScene, C = s.ck, P = C.P, o = {}, need = s.need.slice(), wr = __T.wrongs();
    /* the right letter, framed alone, cranked in the band: a full take answers the question */
    __T.quiet(); __T.stage(need[0], 2.3, 10); __T.steady(16);
    var sc0 = s.score, coins = s.nightCoins, f0 = C.filmed;
    var mid = null;
    o.rightT = __T.sim(P.shotSec + 1.5, { aim: need[0], each: function () { if (mid == null && (C.prog[need[0]] || 0) > 0.4) mid = { status: C.txStatus.text, zone: C.zone, filming: C.filming }; } });
    o.right = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins, filmed: C.filmed - f0, mid: mid, between: s._between };
    return o;
  });
  check(run.right.score === 1 && run.right.strikes === 0 && run.right.coins && run.right.filmed === 1 && run.right.mid && /FILMING/.test(run.right.mid.status) && run.right.mid.zone === "good",
    "the right letter alone in the viewfinder, cranked at 16 frames a second: the take fills and answers the question: " + JSON.stringify(run));
  await nextQuestion();
  var run2 = await page.evaluate(function () {
    var s = SolScene, C = s.ck, P = C.P, o = {}, need = s.need.slice(), wr = __T.wrongs();
    o.fresh = { film: C.film === P.film, dead: C.dead.length, carriers: s.choiceLetters().every(function (L) { return s.crankHasCarrier(L); }) };
    /* a wrong letter: a life, its plate crossed out; filming it again costs nothing more */
    __T.quiet(); __T.stage(wr[0], 2.3, 10); __T.steady(16);
    var sc0 = s.score;
    __T.sim(P.shotSec + 1.5, { aim: wr[0] });
    s.crankComputeTags(); var tg = s.crankTagOf(wr[0]);
    o.wrong = { strikes: s.strikes, score: s.score - sc0, label: s._lastHitLabel, dead: C.dead.indexOf(wr[0]) !== -1, state: tg && tg.state };
    s.iframeMs = 0; __T.sim(P.shotSec + 1, { aim: wr[0] });
    o.wrong.again = s.strikes; o.wrong.status = C.txStatus.text;
    __T.sim(0.1);
    o.wrong.plate = C.tagTx.filter(function (t) { return t.visible; }).map(function (t) { return t.text; }).join("");
    /* two letters in the viewfinder: nothing is filmed until only one is in the shot */
    __T.quiet(); __T.stage(need[0], 1.9, 14); var other = __T.stage(wr[1], 2.6, 14); __T.steady(16);
    __T.sim(2, { aim: need[0] });
    o.two = { prog: +(C.prog[need[0]] || 0).toFixed(2), prog2: +(C.prog[wr[1]] || 0).toFixed(2), status: C.txStatus.text, score: s.score - sc0, cand: C.cand.join("") };
    other.x = -3.4; other.z = 30;
    __T.sim(0.8, { aim: need[0] });
    o.two.after = +(C.prog[need[0]] || 0).toFixed(2);
    /* too slow: the picture flickers and nothing is filmed */
    __T.quiet(); __T.stage(need[0], 2.3, 10); __T.steady(7);
    var maxFl = 0;
    __T.sim(2.5, { aim: need[0], each: function () { maxFl = Math.max(maxFl, C.flick.alpha); } });
    o.slow = { zone: C.zone, prog: +(C.prog[need[0]] || 0).toFixed(2), flicker: +maxFl.toFixed(2), status: C.txStatus.text, score: s.score - sc0 };
    /* too fast: the picture blurs (a ghost image) and nothing is filmed */
    __T.quiet(); __T.stage(need[0], 2.3, 10); __T.steady(25);
    var ghost = false;
    __T.sim(1.5, { aim: need[0], each: function () { ghost = ghost || C.ghostG.visible; } });
    o.fast = { zone: C.zone, prog: +(C.prog[need[0]] || 0).toFixed(2), ghost: ghost, status: C.txStatus.text, strikes: s.strikes, score: s.score - sc0 };
    /* far too fast for too long: the film snaps (a life) ... */
    __T.quiet(); __T.steady(40);
    var lock = 0;
    __T.sim(P.snapMs / 1000 + 1.2, { each: function () { lock = Math.max(lock, C.lockMs); } });
    o.snap = { strikes: s.strikes, label: s._lastHitLabel, snaps: C.snaps, lock: lock > 0 };
    /* ... and cranking in the band for as long never does */
    __T.quiet(); __T.steady(16); var sn0 = C.snaps;
    __T.sim(P.snapMs / 1000 + 1.2);
    o.snapSafe = { strikes: s.strikes, snaps: C.snaps - sn0 };
    /* every turn uses film: the magazine runs dry (a life, and a fresh magazine) ... */
    __T.quiet(); C.film = 0.8; __T.steady(16);
    __T.sim(2.5);
    o.empty = { strikes: s.strikes, label: s._lastHitLabel, film: +C.film.toFixed(1), full: P.film, empties: C.empties };
    /* ... but not if you only crank when your letter is in the shot */
    __T.quiet(); C.film = 0.8;
    __T.sim(4);
    o.emptySafe = { strikes: s.strikes, film: +C.film.toFixed(2) };
    /* Select TWO: the first right letter is ticked, the second answers the question */
    __T.quiet();
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = []; C.dead = [];
    __T.stage(pair[0], 2.3, 10); __T.stage(pair[1], -2.4, 10); __T.steady(16);
    var sc1 = s.score, coins = s.nightCoins;
    __T.sim(P.shotSec + 1.5, { aim: pair[0], until: function () { return s.extracted.length > 0; } });
    s.crankComputeTags(); var t1 = s.crankTagOf(pair[0]);
    o.two1 = { score: s.score - sc1, found: s.extracted.join(""), state: t1 && t1.state, strikes: s.strikes };
    __T.sim(0.1);
    o.two1.plate = C.tagTx.filter(function (t) { return t.visible; }).map(function (t) { return t.text; }).join("");
    __T.sim(P.shotSec + 1.5, { aim: pair[1] });
    o.two2 = { score: s.score - sc1, strikes: s.strikes, coins: s.nightCoins > coins };
    return o;
  });
  console.log("run2", JSON.stringify(run2));
  check(run2.fresh.film && run2.fresh.dead === 0 && run2.fresh.carriers, "a new question brings a full magazine and puts every letter on something: " + JSON.stringify(run2.fresh));
  check(run2.wrong.strikes === 1 && run2.wrong.score === 0 && /WRONG LETTER/.test(run2.wrong.label || "") && run2.wrong.dead && run2.wrong.state === "dead" && run2.wrong.again === 1 && /✕/.test(run2.wrong.plate),
    "filming a wrong letter costs a life and crosses its plate out; filming it again costs nothing: " + JSON.stringify(run2.wrong));
  check(run2.two.prog === 0 && run2.two.prog2 === 0 && run2.two.score === 0 && /TWO LETTERS/.test(run2.two.status) && run2.two.after > 0.1,
    "two letters in the viewfinder film nothing; once only one is in the shot the take fills: " + JSON.stringify(run2.two));
  check(run2.slow.zone === "slow" && run2.slow.prog === 0 && run2.slow.flicker > 0.2 && /SLOW/.test(run2.slow.status) && run2.slow.score === 0,
    "cranking too slowly makes the picture flicker and films nothing: " + JSON.stringify(run2.slow));
  check(run2.fast.zone === "fast" && run2.fast.prog === 0 && run2.fast.ghost && /FAST/.test(run2.fast.status) && run2.fast.strikes === 0,
    "cranking too fast blurs the picture and films nothing (no life lost): " + JSON.stringify(run2.fast));
  check(run2.snap.strikes === 1 && /SNAPPED/.test(run2.snap.label || "") && run2.snap.snaps >= 1 && run2.snap.lock && run2.snapSafe.strikes === 0 && run2.snapSafe.snaps === 0,
    "cranking far too fast for too long snaps the film (a life, then a pause to thread it again); cranking in the band never does: " + JSON.stringify({ snap: run2.snap, safe: run2.snapSafe }));
  check(run2.empty.strikes === 1 && /OUT OF FILM/.test(run2.empty.label || "") && run2.empty.film > run2.empty.full - 3 && run2.emptySafe.strikes === 0 && run2.emptySafe.film === 0.8,
    "every turn uses film: running the magazine dry costs a life and brings a fresh one; not cranking uses none: " + JSON.stringify({ empty: run2.empty, safe: run2.emptySafe }));
  check(run2.two1.score === 0 && run2.two1.found.length === 1 && run2.two1.state === "found" && /✓/.test(run2.two1.plate) && run2.two1.strikes === 0 && run2.two2.score === 1 && run2.two2.strikes === 0 && run2.two2.coins,
    "a Select TWO question needs both right letters: the first is ticked, the second answers it: " + JSON.stringify({ first: run2.two1, second: run2.two2 }));
  await nextQuestion();

  /* the trains come and go: in, stop, passengers step down, out; and the next one comes in */
  var cyc = await page.evaluate(function () {
    var s = SolScene, C = s.ck, seen = [], alight = 0;
    C.noSpawn = false; C.noTrain = false; C.freeze = false; s.strikes = 0; C.drive = 0; C.rate = 0; C.lastTap = null;
    C.train = null; s.crankSpawnTrain(false, 60);
    __T.sim(60, { stopBetween: false, each: function () {
      var ph = C.train ? (C.train.express ? "express" : C.train.phase) : C.cyc.ph;
      if (seen[seen.length - 1] !== ph) seen.push(ph);
      if (ph === "dwell") alight = Math.max(alight, C.subs.filter(function (w) { return w.st === "alight"; }).length);
    }, until: function () { return seen.length >= 5; } });
    return { seen: seen.join(">"), alight: alight, strikes: s.strikes };
  });
  check(/approach>dwell>depart>gap>approach/.test(cyc.seen) && cyc.alight > 0 && cyc.strikes === 0, "a train comes in, stops while passengers step down, leaves, and the next one comes in: " + JSON.stringify(cyc));

  /* the difficulty: every level 2-100 harder than the one before, never easier on any setting */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.crank.params, s = SolScene, out = { same: typeof s.crankParams === "function" && JSON.stringify(s.crankParams(50)) === JSON.stringify(f(50)) };
    var up = ["bandLo", "shotSec", "drain", "trainK", "walk", "express", "expK", "jolt", "smoke", "onlook", "onlookMs", "sway", "crowd"],
      down = ["bandHi", "redAt", "snapMs", "film", "dwell", "frame", "stand", "stick", "beat"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.keys = Object.keys(f(1)).length === up.length + down.length;
    out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l100: ramp.l100 }));
  check(ramp.same && ramp.keys && ramp.easier.length === 0 && ramp.flat.length === 0, "crankParams (on the def as params): every level 2-100 is harder than the one before and never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat, keys: ramp.keys }));
  var e = ramp.l1, z = ramp.l100;
  check(e.bandLo <= 12 && e.bandHi >= 21 && e.redAt >= 29.5 && e.snapMs >= 1600 && e.shotSec <= 2.05 && e.film >= 60 && e.beat === 1 && e.stick === 1 && e.express === 0 && e.smoke === 0 && e.onlook === 0 && e.sway === 0,
    "level 1 is gentle: a wide white band, a long way to the SNAP zone, short takes, a full magazine, the beat lamp and the viewfinder's help, no express, smoke or onlookers: " + JSON.stringify(e));
  check(z.bandHi - z.bandLo <= 4.2 && z.redAt <= 25 && z.snapMs <= 950 && z.shotSec >= 3.1 && z.film <= 31 && z.beat === 0 && z.stick === 0 && z.express === 1 && z.smoke === 1 && z.onlook === 2 && z.sway >= 35,
    "level 100 is intense: a narrow band, the film snaps quickly, long takes, a short magazine, no help, the express every time, smoke, two onlookers and the wind: " + JSON.stringify(z));

  /* level 10: it plays, the right letter scores */
  async function quickRight(label) {
    var r = await page.evaluate(function () {
      var s = SolScene, C = s.ck, P = C.P, need = s.need.slice();
      __T.quiet(); __T.stage(need[0], 2.3, 10); __T.steady(16);
      var sc0 = s.score;
      __T.sim(P.shotSec + 2, { aim: need[0] });
      return { mode: s.mode.id, tier: s.tier, score: s.score - sc0, strikes: s.strikes, P: { bandLo: +P.bandLo.toFixed(2), bandHi: +P.bandHi.toFixed(2) } };
    });
    check(r.mode === "crank" && r.score === 1 && r.strikes === 0, label + ": the right letter, framed and cranked in the band, scores: " + JSON.stringify(r));
    return r;
  }
  /* fair play: in the real scene (nothing staged) a steady player films the right letter in good time */
  async function fair(label, maxSec) {
    var r = await page.evaluate(function (m) { return __T.bot(m); }, maxSec);
    check(r.got === 1 && r.strikes === 0 && r.sec < maxSec, label + ": a steady player films the right letter in the live scene within " + maxSec + " s of game time: " + JSON.stringify(r));
    return r;
  }
  await fair("level 1", 30);
  await nextQuestion();

  var l10 = await gotoLevel(10);
  check(l10.mode === "crank" && l10.tier === 0, "level 10 plays Hand-Crank Camera: " + JSON.stringify({ mode: l10.mode, tier: l10.tier }));
  await page.evaluate(function () { __T.sim(3); });
  await quickRight("level 10");

  /* level 25: the express charges at the lens and jolts the crank */
  var l25 = await gotoLevel(25);
  var exp = await page.evaluate(function () {
    var s = SolScene, C = s.ck, P = C.P, o = { express: P.express, jolt: P.jolt };
    __T.quiet(); C.noTrain = true;
    var T = s.crankSpawnTrain(true); T.zf = 60; T.letters.loco = s.need[0];
    __T.steady(16);
    var maxJ = 0, disc = false, zone = {};
    __T.sim(3, { each: function () { maxJ = Math.max(maxJ, Math.abs(C.jolt)); zone[C.zone] = 1; C.tags.forEach(function (tg) { if (tg.kind === "disc" && tg.vis) disc = true; }); } });
    o.maxJolt = +maxJ.toFixed(1); o.disc = disc; o.zones = Object.keys(zone).join(","); o.gone = !C.train || C.train.zf < 0;
    return o;
  });
  check(l25.mode === "crank" && /New this time:.*express/i.test(l25.card) && exp.express > 0 && exp.maxJolt > 1 && exp.disc && exp.gone,
    "level 25: the express charges at the lens carrying a letter on its smokebox, and its passing jolts the crank (the card says what's new): " + JSON.stringify(exp));

  /* level 45: thick smoke hides a letter (at level 25 it doesn't) */
  var smoke25 = await page.evaluate(function () {
    var s = SolScene, C = s.ck; __T.quiet(); __T.stage(s.need[0], 2.3, 12); __T.aim(s.need[0]);
    s.crankPuff(2.64, 2.32, 11.5, 1.0, 0.9, 6, 0, 0); __T.sim(0.2, { aim: s.need[0] });
    var tg = s.crankTagOf(s.need[0]); return tg && tg.hid;
  });
  var l45 = await gotoLevel(45);
  var smoke = await page.evaluate(function () {
    var s = SolScene, C = s.ck, P = C.P; __T.quiet(); __T.stage(s.need[0], 2.3, 12); __T.aim(s.need[0]);
    s.crankPuff(2.64, 2.32, 11.5, 1.0, 0.9, 6, 0, 0); __T.steady(16);
    __T.sim(1.2, { aim: s.need[0] });
    var tg = s.crankTagOf(s.need[0]);
    return { hid: tg && tg.hid, status: C.txStatus.text, prog: +(C.prog[s.need[0]] || 0).toFixed(2), score: s.score };
  });
  check(!smoke25 && l45.tier === 4 && /New this time:.*[Ss]moke/.test(l45.card) && smoke.hid === "smoke" && /SMOKE/.test(smoke.status) && smoke.prog === 0,
    "level 45: a letter inside a thick cloud of smoke can't be filmed (at level 25 smoke never hides one): " + JSON.stringify({ l25: smoke25, l45: smoke }));

  await gotoLevel(50);
  await page.evaluate(function () { var s = SolScene; s.iframeMs = 1e9; s.spareLives = 9; __T.sim(6, { stopBetween: false }); __T.bot(40, 0.55); s.iframeMs = 0; s.spareLives = 0; __T.pause(); });
  await shot("crank-02-level50");
  await fair("level 50", 45);

  /* level 55: an onlooker walks up and stares into the lens, hiding what is behind him */
  var l55 = await gotoLevel(55);
  var look = await page.evaluate(function () {
    var s = SolScene, C = s.ck; __T.quiet(); __T.stage(s.need[0], 1.4, 12); __T.aim(s.need[0]); __T.sim(0.1, { aim: s.need[0] });
    var w = s.crankOnlooker(), o = { tx: +w.tx.toFixed(2) };
    __T.sim(8, { aim: s.need[0], until: function () { return w.st === "stare"; } });
    o.st = w.st; __T.steady(16);
    __T.sim(0.6, { aim: s.need[0] });
    var tg = s.crankTagOf(s.need[0]);
    o.hid = tg && tg.hid; o.status = C.txStatus.text; o.prog = +(C.prog[s.need[0]] || 0).toFixed(2);
    C.drive = 0; C.rate = 0; C.lastTap = null;
    w.t = 0; __T.sim(8, { aim: s.need[0], until: function () { return C.subs.indexOf(w) === -1; } });
    o.left = C.subs.indexOf(w) === -1;
    return o;
  });
  check(l55.tier === 5 && /New this time:.*[Oo]nlooker/.test(l55.card) && look.st === "stare" && look.hid === "onlooker" && /WAY/.test(look.status) && look.prog === 0 && look.left,
    "level 55: an onlooker walks up where the camera points and stares into the lens, blocking the letter behind him, then walks off: " + JSON.stringify(look));
  await page.evaluate(function () {
    var s = SolScene, C = s.ck;
    C.noSpawn = false; C.noTrain = false; C.freeze = false; s.iframeMs = 1e9; s.spareLives = 9;
    if (!C.train) s.crankSpawnTrain(false, 70);
    __T.sim(9.5, { stopBetween: false });
    C.subs = C.subs.filter(function (w) { return !w.onlook; });
    var w = s.crankOnlooker(); w.x = -1.3; w.tx = -1.3; w.st = "stare"; w.t = 9999;
    __T.bot(30, 0.5);
    __T.pause();
  });
  await shot("crank-03-level55");

  /* level 75: the wind sways the viewfinder */
  await gotoLevel(75);
  var sway = await page.evaluate(function () {
    var s = SolScene, C = s.ck, d = 0; __T.sim(3, { each: function () { d = Math.max(d, Math.abs(C.cfx - C.fx)); } }); return { sway: C.P.sway, drift: Math.round(d) };
  });
  check(sway.sway > 0 && sway.drift > 5, "level 75: the wind sways the camera, so the viewfinder drifts: " + JSON.stringify(sway));

  /* level 100 */
  var l100 = await gotoLevel(100);
  check(l100.mode === "crank" && l100.tier === 9 && /New this time:.*premiere/i.test(l100.card), "level 100 plays Hand-Crank Camera, and its card says what's new: " + JSON.stringify({ mode: l100.mode, tier: l100.tier }));
  await quickRight("level 100");
  await nextQuestion();
  await fair("level 100", 60);
  await nextQuestion();
  await page.evaluate(function () {
    var s = SolScene, C = s.ck; s.iframeMs = 1e9; s.spareLives = 9;
    C.noSpawn = false; C.noTrain = true; C.freeze = false; C.train = null; C.title = 0;
    __T.sim(4, { stopBetween: false });
    C.subs = C.subs.filter(function (w) { return !w.onlook; });
    var L = s.need.filter(function (x) { return s.extracted.indexOf(x) === -1; })[0] || s.need[0];
    var T = s.crankSpawnTrain(true); T.zf = 27; T.letters.loco = L;
    for (var i = 0; i < 10; i++) s.crankPuff(T.X + Math.random() * 0.4, 3.4 + i * 0.3, T.zf + 1.5 + i * 2.5, 0.6 + i * 0.15, 0.8, 4, 1.2, 1.3);
    C.P.jolt = 0; C.jolt = 0;
    __T.steady(16); C.prog[L] = 0.4; __T.sim(0.3, { aim: L, stopBetween: false });
    s.bigTag.setVisible(false); s.bigTagMs = 0;
    __T.pause();
  });
  await shot("crank-04-level100");

  /* the 500-pixel-tall Canvas frame: everything still fits */
  await page.setViewportSize({ width: 900, height: 500 });
  await page.waitForFunction(function () { return SolScene.H <= 520 && SolScene.scale.height <= 520; }, null, { timeout: 120000 }).catch(function () {});
  await page.waitForTimeout(500);
  var small = await page.evaluate(function () {
    var s = SolScene, C = s.ck;
    s.crankLayout();
    __T.sim(0.3, { stopBetween: false });
    return { W: s.W, H: s.H, k: +C.k.toFixed(2), dial: [Math.round(C.dialX - C.dialR), Math.round(C.dialY)], op: [Math.round(C.opX), Math.round(C.opY)], reel: [Math.round(C.reelX), Math.round(C.reelY)], frame: [Math.round(C.fw), Math.round(C.fh)], fy: [Math.round(C.fyMin), Math.round(C.fyMax)], VY: C.VY };
  });
  check(small.H <= 520 && small.dial[0] > 0 && small.op[0] > small.dial[0] && small.reel[0] > 0 && small.fy[1] >= small.fy[0] && small.fy[0] <= small.VY + 10 && small.fy[1] >= small.VY - 10,
    "in a 500-pixel-tall frame the dial, the operator and the film counter fit, and the viewfinder still reaches the letters: " + JSON.stringify(small));
  await shot("crank-05-small");
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.waitForFunction(function () { return SolScene.H >= 700; }, null, { timeout: 120000 }).catch(function () {});

  /* losing: the last life ends the level with a Retry */
  var lose = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    s.answerWrong("Z", "WRONG LETTER");
    s.time.timeScale = 12;
    for (var w = 0; w < 120 && !(s.ended && !document.getElementById("overlay").classList.contains("hidden")); w++) await new Promise(function (r) { setTimeout(r, 250); });
    return { ended: s.ended, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Hand-Crank Camera/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 220));
  window_pauseStack = await page.evaluate(function () { return window.__pauseStack || []; }).catch(function () { return []; });
  await ctx.close();

  console.log("errors:", errors.length ? errors : "none");
  if (window_pauseStack.length) console.log("pause stacks:", JSON.stringify(window_pauseStack));
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
