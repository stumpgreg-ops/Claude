/* Headless test of the Lit and Film mode "sync" (Keep It in Sync, The Jazz Singer, js/mode-sync.js): node tools/smoke-mode-sync.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Film History, then The Jazz Singer, and drives the mode through the scene's own methods: the movie plays its
   game on every level; the keys, the mouse and the CUE button work; the right reel scores; a wrong reel costs a life;
   a changeover out of sync or a cue with no dot picks nothing; a skipped needle and a booing audience each cost a life
   and each can be avoided; Select TWO needs both reels; the later tiers' two-dot changeover and scratches behave;
   the difficulty climbs every level 2-100; a simple player (a bot on the keys) keeps sync and answers on levels 1,
   10, 50 and 100; the last life ends the level. Screenshots go to tools/shots/sync-*.png. Prints ALL OK or the
   number FAILED. The machine may be slow: every wait is on the game's own clock or a long wall-clock limit. */
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
/* other movies' content files may still be being written: their 404s are fine */
var OK404 = /\/js\/content(11[4-9]|120)\.js/;

(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var errors = [], fails = [];
  function watch(page, tag) {
    page.on("response", function (r) { if (r.status() === 404) { console.log(tag + " 404 " + r.url()); if (!OK404.test(r.url())) errors.push(tag + " 404 " + r.url()); } });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Failed to load resource|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  page.setDefaultTimeout(60000);
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png") }); }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build (its card is on the title screen)");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-genre="HISTORY"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="sync"]');
    return c ? { text: c.textContent.replace(/\s+/g, " ").trim(), visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && /Jazz Singer/.test(card.text), "Film History lists The Jazz Singer's card: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="sync"]');
  await page.waitForTimeout(300);
  var picked = await page.evaluate(function () {
    return { only: SolModes.only, def: !!SolModes.MODES.sync, l1: (SolModes.modeFor(1) || {}).id, l10: (SolModes.modeFor(10) || {}).id, l55: (SolModes.modeFor(55) || {}).id, l100: (SolModes.modeFor(100) || {}).id };
  });
  check(picked.only === "sync" && picked.def && picked.l1 === "sync" && picked.l10 === "sync" && picked.l55 === "sync" && picked.l100 === "sync", "the movie's card plays Keep It in Sync on every level: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 30000 }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  async function gotoLevel(n, shotName) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "JAZZ", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.sy && s.claim && s.readOpen; }, n, { timeout: 40000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    if (shotName) await shot(shotName);
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen && s.sy && s.sy.t > 0.2; }, null, { timeout: 40000 }).catch(function () {});
    return info;
  }
  /* in the page: helpers on the game's own clock */
  var HELP = function () {
    window.__w = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
    window.__until = async function (f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 60000)) await __w(25); return f(); };
    window.__frames = async function (n) { var s = SolScene, f0 = s.game.loop.frame; await __until(function () { return s.game.loop.frame >= f0 + n; }, 30000); };
    window.__quiet = function () {
      var s = SolScene, S = s.sy, P = S.P;
      P.drift = 0; P.warp = 0; P.surgeRate = 0; P.spliceRate = 0; P.scratchRate = 0; P.darkRate = 0;
      S.dv = 0; S.dvT = 0; S.nv = 0; S.d = 0; S.pat = 1; S.cdMs = 0; S.card = null;
      S.skip.phase = "idle"; S.skip.next = 1e9; S.surge.phase = "idle"; S.splice.phase = "idle"; S.dark.phase = "idle"; S.scratchMs = 0;
      S.cue.phase = "reel"; S.cue.t = 0; S.cue.len = 1e9; S.cue.motorOn = false;
      s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
      ["LEFT", "RIGHT", "UP", "DOWN", "W", "A", "S", "D", "SPACE"].forEach(function (k) { s.keys[k].isDown = false; });
    };
    window.__idx = function (L) { var sl = SolScene.sy.slots; for (var i = 0; i < sl.length; i++) if (sl[i].letter === L) return i; return -1; };
    /* a real player on the keys: nudge toward the middle (looking ahead by the platter's lag), catch the needle, cue the right reel */
    window.__bot = async function (secs, opts) {
      var s = SolScene, S = s.sy, P = S.P, t0 = S.t, green = 0, tot = 0, last = S.t, o = { catches: 0, skips0: S.skips, booed0: S.booed, strikes0: s.strikes, score0: s.score, presses: 0 };
      opts = opts || {};
      while (S.t - t0 < secs && !s.ended && !s._finishing) {
        var f0 = s.game.loop.frame;
        var ahead = S.d + S.nv * P.lag * 1.4 + (S.rate - S.nv) * 0.25, band = P.green * 0.3;
        s.keys.RIGHT.isDown = ahead < -band; s.keys.LEFT.isDown = ahead > band;
        var want = opts.answer && !s._between && s.need ? s.need.filter(function (L) { return s.extracted.indexOf(L) === -1; })[0] : null;
        if (want && __idx(want) >= 0) S.sel = __idx(want);
        var c = S.cue, press = false;
        if (S.skip.phase === "warn" && S.skip.t > 250) press = true;
        else if (want && c.phase === "window" && Math.abs(S.d) < P.green * 0.8) press = true;
        else if (want && P.twoStep && c.phase === "motor" && !c.motorOn) press = true;
        if (press) { S.pressLatch = true; o.presses++; }
        await __until(function () { return s.game.loop.frame > f0; }, 10000);
        var dt = S.t - last; last = S.t; tot += dt; if (Math.abs(S.d) <= P.green) green += dt;
        if (opts.stopOnScore && s.score > o.score0) break;
      }
      s.keys.RIGHT.isDown = false; s.keys.LEFT.isDown = false;
      o.inGreen = +(green / Math.max(0.001, tot)).toFixed(3); o.secs = +tot.toFixed(1);
      o.skips = S.skips - o.skips0; o.booed = S.booed - o.booed0; o.lives = s.strikes - o.strikes0; o.score = s.score - o.score0; o.catches = S.catches;
      return o;
    };
  };

  var l1 = await gotoLevel(1, "sync-00-reading-card");
  await page.evaluate(HELP);
  check(l1.key === "mode" && l1.mode === "sync" && l1.act === "CUE", "level 1 runs Keep It in Sync in the mode scene with a CUE button: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act }));
  check(/Keep It in Sync/.test(l1.card) && /sound-sync level/.test(l1.card) && /Controls:/.test(l1.card) && /◀ ▶/.test(l1.card) && /▲ ▼/.test(l1.card) && /CUE/.test(l1.card) && /reel with the right letter/.test(l1.hint),
    "the reading pop-up names the game and explains its controls: " + l1.card.slice(0, 140) + "…");

  /* ── the keys ── */
  var keys = await page.evaluate(async function () {
    var s = SolScene, S = s.sy, o = {};
    __quiet();
    s.keys.RIGHT.isDown = true; await __until(function () { return S.d > 1.5; }); s.keys.RIGHT.isDown = false; o.right = +S.d.toFixed(2);
    await __frames(2); S.d = 0; S.nv = 0;
    s.keys.A.isDown = true; await __until(function () { return S.d < -1.5; }); s.keys.A.isDown = false; o.a = +S.d.toFixed(2);
    await __frames(2); __quiet();
    S.sel = 0; s.keys.DOWN.isDown = true; await __until(function () { return S.sel === 1; }, 20000); s.keys.DOWN.isDown = false; await __frames(2); o.down = S.sel;
    s.keys.S.isDown = true; await __until(function () { return S.sel === 2; }, 20000); s.keys.S.isDown = false; await __frames(2); o.s = S.sel;
    s.keys.W.isDown = true; await __until(function () { return S.sel === 1; }, 20000); s.keys.W.isDown = false; await __frames(2); o.w = S.sel;
    s.keys.UP.isDown = true; await __until(function () { return S.sel === 0; }, 20000); s.keys.UP.isDown = false; await __frames(2); o.up = S.sel;
    o.slots = S.slots.map(function (sl) { return sl.txt.text; }).join(""); o.letters = s.choiceLetters().join("");
    return o;
  });
  check(keys.right > 1.5 && keys.a < -1.5, "▶ pushes the sound early and A drags it late: " + JSON.stringify({ right: keys.right, a: keys.a }));
  check(keys.down === 1 && keys.s === 2 && keys.w === 1 && keys.up === 0, "▼ / S and ▲ / W step through the rack: " + JSON.stringify(keys));
  check(keys.slots === keys.letters && keys.slots.length >= 3, "one reel in the rack per answer letter: " + keys.slots);

  /* a real Space press catches the shaking needle (no life) */
  await page.evaluate(function () { __quiet(); SolScene.syncStartSkip(); window.__c0 = SolScene.sy.catches; });
  await page.keyboard.down("Space");
  await page.waitForFunction(function () { return SolScene.sy.skip.phase !== "warn"; }, null, { timeout: 30000 }).catch(function () {});
  await page.keyboard.up("Space");
  var catchK = await page.evaluate(function () { var S = SolScene.sy; return { phase: S.skip.phase, caught: S.catches - window.__c0, strikes: SolScene.strikes, d: S.d }; });
  check(catchK.phase === "caught" && catchK.caught === 1 && catchK.strikes === 0, "Space while the tonearm shakes catches the needle: no skip, no life: " + JSON.stringify(catchK));

  /* ── the mouse ── */
  var geo = await page.evaluate(function () {
    __quiet();
    var s = SolScene, S = s.sy, cr = s.game.canvas.getBoundingClientRect(), fx = cr.width / s.W, fy = cr.height / s.H;
    function at(x, y) { return { x: cr.left + x * fx, y: cr.top + y * fy }; }
    return { slot2: at(S.rk.x, S.slots[2].y), right: at(S.tt.x + S.tt.R * 0.6, S.tt.y), left: at(S.tt.x - S.tt.R * 0.6, S.tt.y), screen: at(S.scr.x + S.scr.w * 0.4, S.scr.y + S.scr.h * 0.5) };
  });
  await page.mouse.click(geo.slot2.x, geo.slot2.y);
  await page.waitForFunction(function () { return SolScene.sy.sel === 2; }, null, { timeout: 20000 }).catch(function () {});
  var mSel = await page.evaluate(function () { return SolScene.sy.sel; });
  await page.mouse.move(geo.right.x, geo.right.y); await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.sy.d > 1.5; }, null, { timeout: 30000 }).catch(function () {});
  await page.mouse.up();
  var mRight = await page.evaluate(function () { var S = SolScene.sy, d = S.d; S.d = 0; S.nv = 0; return d; });
  await page.mouse.move(geo.left.x, geo.left.y); await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.sy.d < -1.5; }, null, { timeout: 30000 }).catch(function () {});
  await page.mouse.up();
  var mLeft = await page.evaluate(function () { var S = SolScene.sy, d = S.d; S.d = 0; S.nv = 0; window.__p0 = S.pat; window.__f0 = S.falseN; window.__sc = SolScene.score; return d; });
  /* a click with no cue dot up is a false cue: nothing picked, no life, the audience grumbles */
  await page.mouse.click(geo.screen.x, geo.screen.y);
  await page.waitForFunction(function () { return SolScene.sy.falseN > window.__f0; }, null, { timeout: 20000 }).catch(function () {});
  var mFalse = await page.evaluate(function () { var s = SolScene, S = s.sy; return { falseN: S.falseN - window.__f0, pat: +(window.__p0 - S.pat).toFixed(3), strikes: s.strikes, score: s.score - window.__sc }; });
  check(mSel === 2, "clicking a reel in the rack picks it: " + mSel);
  check(mRight > 1.5 && mLeft < -1.5, "holding the mouse on the right half of the record speeds it up, the left half slows it: " + JSON.stringify({ right: mRight, left: mLeft }));
  check(mFalse.falseN === 1 && mFalse.pat > 0.03 && mFalse.strikes === 0 && mFalse.score === 0, "a click with no cue dot is a false cue: nothing picked, no life, some patience lost: " + JSON.stringify(mFalse));

  /* the cue cycle runs by itself: a reel, the small dot, the big dot */
  var cyc = await page.evaluate(async function () {
    var s = SolScene, S = s.sy, seen = {};
    __quiet(); S.cue.len = 1400;
    var t0 = Date.now();
    while (Date.now() - t0 < 60000 && !(seen.window && S.cue.phase === "reel")) { seen[S.cue.phase] = true; if (S.cue.phase === "window") seen.lamp = S.txCue.text; await __w(20); }
    return seen;
  });
  check(cyc.motor && cyc.window && /CUE NOW/.test(cyc.lamp || ""), "the reel runs down to the small cue dot, then the big one, and the lamp says CUE NOW: " + JSON.stringify(cyc));

  /* ── the CUE button: a wrong reel costs a life and is crossed out ── */
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  await page.evaluate(function () {
    var s = SolScene, S = s.sy; __quiet();
    var wrong = s.choiceLetters().filter(function (L) { return s.need.indexOf(L) === -1; })[0];
    S.sel = __idx(wrong); window.__wr = wrong; window.__sc = s.score; s.syncOpenCue();
  });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.strikes > 0; }, null, { timeout: 20000 }).catch(function () {});
  await page.mouse.up();
  var wrong = await page.evaluate(function () { var s = SolScene, S = s.sy, sl = S.slots[__idx(window.__wr)]; return { strikes: s.strikes, score: s.score - window.__sc, state: sl.state, label: sl.txt.text, hit: s._lastHitLabel, card: S.card && S.card.text, feed: S.feedL }; });
  check(wrong.strikes === 1 && wrong.score === 0 && wrong.state === "dead" && wrong.label === "✕" && /WRONG LETTER/.test(wrong.hit || "") && /WRONG REEL/.test(wrong.card || ""),
    "the CUE button changes over on the big dot; a wrong reel costs a life, is crossed out, and the screen says so: " + JSON.stringify(wrong));

  var run = await page.evaluate(async function () {
    var s = SolScene, S = s.sy, P = S.P, o = {};
    /* out of sync, the changeover does not take: nothing picked, no life */
    __quiet(); S.sel = __idx(s.need[0]); s.syncOpenCue(); S.d = P.green + 1.5; var p0 = S.pat, sc0 = s.score;
    o.out = { res: s.syncPress(), score: s.score - sc0, strikes: s.strikes, pat: +(p0 - S.pat).toFixed(3), open: S.cue.phase === "window" };
    /* the small dot is only a warning on the low levels */
    __quiet(); S.cue.phase = "motor"; S.cue.t = 0; sc0 = s.score;
    o.early = { res: s.syncPress(), score: s.score - sc0, strikes: s.strikes };
    /* a skipped needle: a life, and the sound jumps */
    __quiet(); var d0 = S.d, sk0 = S.skips; s.syncStartSkip();
    await __until(function () { return S.skip.phase !== "warn"; });
    o.skip = { phase: S.skip.phase, skips: S.skips - sk0, strikes: s.strikes, label: s._lastHitLabel, jump: +Math.abs(S.d - d0).toFixed(2), want: +P.jump.toFixed(2) };
    /* the audience: patience runs out in the red, and they boo (a life); in the green it comes back */
    __quiet(); await __frames(2); s.iframeMs = 0; S.pat = 0.06; S.d = 15; var b0 = S.booed;
    await __until(function () { return s.strikes > 0; });
    o.boo = { strikes: s.strikes, booed: S.booed - b0, label: s._lastHitLabel, pat: +S.pat.toFixed(3), refill: +P.refill.toFixed(3) };
    __quiet(); S.pat = 0.06; S.d = 0; var t0 = S.t;
    await __until(function () { return S.t - t0 > 1.2; });
    o.calm = { strikes: s.strikes, pat: +S.pat.toFixed(3) };
    /* the right reel, on the big dot, in sync: it answers the question and pays coins */
    __quiet(); var coins = s.nightCoins; sc0 = s.score; S.sel = __idx(s.need[0]); s.syncOpenCue(); s.keys.SPACE.isDown = false; await __frames(2);
    s.keys.SPACE.isDown = true; await __until(function () { return s.score > sc0 || s.extracted.length > 0; }, 20000); s.keys.SPACE.isDown = false;
    if (s.need.length > 1 && s.score === sc0) { await __frames(2); S.sel = __idx(s.need[1]); s.syncOpenCue(); S.pressLatch = true; await __until(function () { return s.score > sc0; }, 20000); }
    o.right = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins, feed: S.feedL, card: S.card && S.card.text };
    return o;
  });
  console.log("run", JSON.stringify(run));
  check(run.out.res === "sync" && run.out.score === 0 && run.out.strikes === 0 && run.out.pat > 0.03 && run.out.open, "out of the green the changeover does not take: nothing picked, no life, the cue dot stays: " + JSON.stringify(run.out));
  check(run.early.res === "early" && run.early.score === 0 && run.early.strikes === 0, "CUE on the small warning dot does nothing on the low levels: " + JSON.stringify(run.early));
  check(run.skip.phase === "jumped" && run.skip.skips === 1 && run.skip.strikes === 1 && /NEEDLE/.test(run.skip.label || "") && Math.abs(run.skip.jump - run.skip.want) < 0.01,
    "a needle nobody catches skips: a life, and the sound jumps: " + JSON.stringify(run.skip));
  check(run.boo.strikes === 1 && run.boo.booed === 1 && /AUDIENCE/.test(run.boo.label || "") && run.boo.pat === run.boo.refill, "out of sync the audience's patience runs out and they boo: a life, then their patience refills: " + JSON.stringify(run.boo));
  check(run.calm.strikes === 0 && run.calm.pat > 0.1, "in sync the audience calms down instead (no life): " + JSON.stringify(run.calm));
  check(run.right.score === 1 && run.right.strikes === 0 && run.right.coins && run.right.feed, "the right reel on the big dot, in sync, answers the question and pays coins: " + JSON.stringify(run.right));

  /* the next question: its reading pop-up, then Select TWO */
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 30000 }).catch(function () {});
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 20000 }).catch(function () {});
  await page.evaluate(async function () { __quiet(); var S = SolScene.sy; S.sel = 1; S.cue.phase = "window"; S.cue.t = 0; S.d = 1.2; await __frames(3); });
  await shot("sync-01-level1");
  var two = await page.evaluate(async function () {
    var s = SolScene, S = s.sy, o = {};
    __quiet();
    o.fresh = { live: S.slots.every(function (sl) { return sl.state === "live"; }), feed: S.feedL };
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    S.sel = __idx(pair[0]); s.syncOpenCue(); var r1 = s.syncPress();
    var sl0 = S.slots[__idx(pair[0])];
    o.first = { res: r1, score: s.score - sc0, state: sl0.state, label: sl0.txt.text, found: s.extracted.join(""), strikes: s.strikes };
    s.syncSelect(__idx(pair[0]), true); s.syncOpenCue(); o.again = s.syncPress();
    S.sel = __idx(pair[1]); s.syncOpenCue(); var r2 = s.syncPress();
    o.second = { res: r2, score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins };
    return o;
  });
  check(two.fresh.live && two.fresh.feed === "", "a new question brings a fresh rack: " + JSON.stringify(two.fresh));
  check(two.first.res === "partial" && two.first.score === 0 && two.first.state === "found" && two.first.label === "✓" && two.first.found.length === 1 && two.first.strikes === 0 && two.again === "dead" &&
    two.second.res === "done" && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right reels: the first is marked ✓, the second answers it: " + JSON.stringify(two));

  /* ── the difficulty: every level 2-100 harder than the one before, never easier on any setting ── */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.sync.params, s = SolScene, out = { same: typeof s.syncParams === "function" && JSON.stringify(s.syncParams(50)) === JSON.stringify(f(50)) };
    var up = ["drift", "lag", "drainA", "drainR", "falseCost", "jump", "warp", "warpHz", "surgeRate", "surge", "spliceRate", "splice", "scratchRate", "double", "darkRate", "darkMs", "twoStep", "tough"];
    var down = ["driftEvery", "green", "amber", "regain", "refill", "skipMin", "skipSpan", "warnMs", "reelMs", "cueMs", "motorMs"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    /* each tier switches on its new thing at its first level */
    out.tiers = [[11, "warp"], [21, "surgeRate"], [31, "spliceRate"], [41, "scratchRate"], [51, "double"], [61, "darkRate"], [71, "twoStep"], [81, "tough"]].map(function (q) { return f(q[0] - 1)[q[1]] === 0 && f(q[0])[q[1]] > 0; });
    out.news = SolModes.MODES.sync.news.length;
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l100: ramp.l100 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0, "syncParams (on the def as params): every level 2-100 is harder than the one before and never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat }));
  check(ramp.tiers.every(Boolean) && ramp.news === 10, "each tier of ten levels switches on what its news line names: " + JSON.stringify(ramp.tiers));
  var e = ramp.l1, z = ramp.l100;
  check(e.drift <= 1.1 && e.green >= 5.9 && e.warnMs >= 2100 && e.cueMs >= 1900 && e.reelMs >= 5900 && e.drainR <= 0.17 && e.warp === 0 && e.surgeRate === 0 && e.twoStep === 0,
    "level 1 is gentle: a slow drift, a wide green band, a long warning before a skip, a long cue dot, a patient crowd: " + JSON.stringify(e));
  check(z.green <= 2.6 && z.drift >= 4.4 && z.warnMs <= 750 && z.cueMs <= 650 && z.twoStep === 1 && z.tough === 1 && z.darkRate > 0 && z.scratchRate > 0,
    "level 100 is intense: a narrow green band, a fast drift, quick skips, a short cue dot, every hazard on: " + JSON.stringify(z));

  /* ── the later tiers ── */
  var l45 = await gotoLevel(45);
  await page.evaluate(HELP);
  var scr = await page.evaluate(function () {
    var s = SolScene, S = s.sy; __quiet(); S.scratchMs = 400; var f0 = S.falseN, sc0 = s.score;
    var r = s.syncPress();
    return { res: r, falseN: S.falseN - f0, score: s.score - sc0, strikes: s.strikes, tier: s.tier };
  });
  check(l45.mode === "sync" && scr.tier === 4 && /New this time:.*Scratches/.test(l45.card) && scr.res === "false" && scr.falseN === 1 && scr.score === 0 && scr.strikes === 0,
    "level 45: a scratch that looks like a cue dot is a false cue, and the card says what's new: " + JSON.stringify(scr));
  var l75 = await gotoLevel(75);
  await page.evaluate(HELP);
  var tw = await page.evaluate(function () {
    var s = SolScene, S = s.sy, o = { tier: s.tier, two: S.P.twoStep };
    __quiet(); S.sel = __idx(s.need[0]);
    S.cue.phase = "window"; S.cue.t = 0; S.cue.motorOn = false; var sc0 = s.score;
    o.noMotor = s.syncPress(); o.score0 = s.score - sc0; S.cdMs = 0;
    S.cue.phase = "motor"; S.cue.t = 0; o.motor = s.syncPress(); o.on = S.cue.motorOn;
    S.cue.phase = "window"; S.cue.t = 0; o.change = s.syncPress(); o.score = s.score - sc0; o.strikes = s.strikes;
    return o;
  });
  check(l75.mode === "sync" && tw.tier === 7 && /New this time:.*two-dot/.test(l75.card) && tw.noMotor === "false" && tw.score0 === 0 && tw.motor === "motor" && tw.on && (tw.change === "done" || tw.change === "partial") && tw.strikes === 0,
    "level 75, the two-dot changeover: CUE on the small dot starts the motor, then the big dot changes over; without the motor it is a false cue: " + JSON.stringify(tw));

  /* ── levels 10, 50 and 100: a player on the keys keeps sync, catches the needle and answers ── */
  async function play(n, secs, shotName) {
    var info = await gotoLevel(n);
    await page.evaluate(HELP);
    var a = await page.evaluate(async function (secs) { var s = SolScene; s.spareLives = 9; s.perks = {}; return __bot(secs, {}); }, secs);
    if (shotName) {
      /* the picture: the needle shaking, the small cue dot up, the meter off the middle, a few boos */
      var keep = await page.evaluate(async function () {
        var s = SolScene, S = s.sy, k = { iframe: s.iframeMs, warn: S.P.warnMs };
        s.iframeMs = 1e9; S.P.warnMs = 1e9; S.card = null; s.syncStartSkip(); S.skip.t = 500; S.cue.phase = "motor"; S.cue.t = 0; S.cue.len = 9e9; S.cue.motorOn = true; S.d = -S.P.green * 0.8; S.booMs = 1500; s.syncBoo(true);
        await __frames(3); return k;
      });
      await shot(shotName);
      await page.evaluate(function (k) { var s = SolScene, S = s.sy; s.iframeMs = 0; S.P.warnMs = k.warn; S.skip.phase = "idle"; S.skip.next = 3000; S.cue.phase = "reel"; S.cue.t = 0; S.cue.len = 2000; S.d = 0; }, keep);
    }
    var b = await page.evaluate(async function () { return __bot(40, { answer: true, stopOnScore: true }); });
    var o = await page.evaluate(function (x) { var s = SolScene; return { sync: x.a, answer: x.b, tier: s.tier, mode: s.mode.id }; }, { a: a, b: b });
    return { info: info, play: o };
  }
  var p10 = await play(10, 10);
  console.log("p10", JSON.stringify(p10.play));
  check(p10.info.mode === "sync" && p10.play.sync.inGreen >= 0.8 && p10.play.sync.booed === 0 && p10.play.answer.score === 1, "level 10 plays: a simple player keeps the meter in the green, the crowd never boos, and the right reel answers: " + JSON.stringify(p10.play));
  var p50 = await play(50, 12, "sync-02-level50");
  console.log("p50", JSON.stringify(p50.play));
  check(p50.info.mode === "sync" && p50.play.tier === 4 && p50.play.sync.inGreen >= 0.7 && p50.play.answer.score === 1, "level 50 plays: still in the green most of the time, and the right reel answers: " + JSON.stringify(p50.play));
  var p100 = await play(100, 14, "sync-03-level100");
  console.log("p100", JSON.stringify(p100.play));
  check(p100.info.mode === "sync" && p100.play.tier === 9 && /Opening night/.test(p100.info.card) && p100.play.sync.inGreen >= 0.6 && p100.play.answer.score === 1,
    "level 100 plays: hard, but a player who keeps at it stays in sync most of the time and answers: " + JSON.stringify(p100.play));

  /* losing: the last life ends the level with a Retry (on a fresh start of level 100) */
  await gotoLevel(100);
  var lose = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    s.answerWrong("Z", "WRONG LETTER");
    for (var w = 0; w < 80 && !(s.ended && !document.getElementById("overlay").classList.contains("hidden")); w++) await new Promise(function (r) { setTimeout(r, 150); });
    await new Promise(function (r) { setTimeout(r, 300); });
    return { ended: s.ended, title: document.getElementById("win-title").textContent, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Keep It in Sync/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 220));
  await ctx.close();

  /* ── the 500-pixel-tall Canvas frame ── */
  var c2 = await browser.newContext({ viewport: { width: 1000, height: 500 } });
  await c2.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var fp = await c2.newPage();
  fp.setDefaultTimeout(60000);
  watch(fp, "frame500");
  await fp.goto(base + "index.html", { waitUntil: "load" }); await fp.waitForTimeout(900);
  await fp.click('#title-screen .card[data-family="LIT"]'); await fp.waitForTimeout(300);
  await fp.click('#mode-packs .card[data-genre="HISTORY"]'); await fp.waitForTimeout(300);
  await fp.click('#skill-packs .card[data-gamemode="sync"]'); await fp.waitForTimeout(300);
  await fp.click("#btn-skill-start"); await fp.waitForTimeout(400);
  if (await fp.isVisible("#btn-char-confirm")) await fp.click("#btn-char-confirm");
  await fp.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 30000 }).catch(function () {});
  for (var j = 0; j < 12; j++) { if (await fp.isVisible("#tut-skip")) { await fp.click("#tut-skip"); break; } await fp.waitForTimeout(250); }
  await fp.evaluate(function () { SolScene.scene.restart({ family: "LIT", strand: "JAZZ", night: 30 }); });
  await fp.waitForFunction(function () { var s = window.SolScene; return s && s.night === 30 && s.sy && s.claim && s.readOpen; }, null, { timeout: 40000 }).catch(function () {});
  if (await fp.isVisible("#read-go")) await fp.click("#read-go");
  await fp.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen && s.sy && s.sy.t > 0.5; }, null, { timeout: 40000 }).catch(function () {});
  var fr = await fp.evaluate(function () {
    var s = SolScene, S = s.sy, W = s.W, H = s.H, inside = function (x, y) { return x >= 0 && x <= W && y >= 0 && y <= H; };
    S.cue.phase = "window"; S.cue.t = 0; S.d = 1;
    var last = S.slots[S.slots.length - 1];
    return { W: W, H: H, k: S.k, screen: S.scr.h, slotsIn: S.slots.every(function (sl) { return inside(sl.x, sl.y + S.rk.canR); }), lastY: last.y, meterIn: inside(S.mt.x, S.mt.y - S.mt.r) && inside(S.mt.x, S.panel.y1),
      platterIn: inside(S.tt.x, S.tt.y + S.tt.R) && inside(S.tt.x + S.tt.R, S.tt.y), cardText: S.txCard.style.fontSize };
  });
  await fp.waitForTimeout(600);
  await fp.screenshot({ path: path.join(shots, "sync-04-frame500.png") });
  check(fr.H <= 520 && fr.slotsIn && fr.meterIn && fr.platterIn && fr.screen >= 90, "in the 500-pixel-tall frame the screen, the meter, the rack and the record all fit: " + JSON.stringify(fr));
  await c2.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
