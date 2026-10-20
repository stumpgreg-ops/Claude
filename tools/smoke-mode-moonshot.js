/* Headless test of the Lit and Film mode "moonshot" (Shoot the Moon, js/mode-moonshot.js): node tools/smoke-mode-moonshot.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Film History and the movie A Trip to the Moon, and drives the mode through the scene's own methods: it plays
   on levels 1, 10 and 100 (the right crater scores, leading the drifting Moon); a wrong crater costs a life and is
   crossed out; landing on a Selenite costs a life (and waiting for it to vanish, or landing while its smoke is only
   gathering, avoids it); running out of shells costs a life; the face, the sky, a cloud and a swinging star only
   waste a shell; Select TWO needs both craters; the keys, the mouse and the FIRE button work; the difficulty climbs
   every level 2-100; the reading pop-up names the game and its controls; it fits the 500-pixel-tall Canvas frame;
   and there are no page errors. The capsule's flight is stepped through the mode's own tick (the game clock), so
   the test does not depend on the frame rate. Screenshots go to tools/shots/moonshot-*.png. Prints ALL OK or the
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
  var errors = [], fails = [];
  function watch(page, tag) {
    /* other movies' content files may still be being written: their 404s are only logged */
    page.on("response", function (r) { if (r.status() === 404) console.log(tag + " 404 " + r.url()); });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|status of 404|requestFullscreen/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  page.setDefaultTimeout(120000);
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, "moonshot-" + name + ".png"), timeout: 120000 }); }
  /* wait for n frames of the game loop (the machine may be slow) */
  async function frames(n) {
    await page.evaluate(function () { window.__f0 = SolScene.game.loop.frame; });
    await page.waitForFunction(function (n) { return SolScene.game.loop.frame - window.__f0 >= n; }, n, { timeout: 120000, polling: 50 }).catch(function () {});
  }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);

  /* ── the Lit and Film screens: Film History, then A Trip to the Moon ── */
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-genre="HISTORY"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="moonshot"]');
    return c ? { text: c.textContent, strand: c.getAttribute("data-strand"), visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && card.strand === "MOON" && /Trip to the Moon/.test(card.text), "Film History lists A Trip to the Moon (strand MOON): " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="moonshot"]');
  var picked = await page.evaluate(function () {
    return { only: SolModes.only, def: !!SolModes.MODES.moonshot, levels: [1, 10, 55, 100].map(function (n) { var m = SolModes.modeFor(n); return m ? m.id : "maze"; }).join() };
  });
  check(picked.only === "moonshot" && picked.def && picked.levels === "moonshot,moonshot,moonshot,moonshot", "the movie card plays Shoot the Moon on every level: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
  for (var i = 0; i < 20; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  async function gotoLevel(n, keepOpen) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "MOON", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.mo && s.claim && s.readOpen; }, n, { timeout: 90000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, strand: s.strand, act: document.getElementById("btn-action").textContent,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    if (keepOpen) return info;
    await closeReading();
    return info;
  }
  /* the next question comes after a short pause on the scene's clock (slow when the machine is busy) */
  async function nextQuestion() {
    await page.waitForFunction(function () { var s = window.SolScene; return s && s.mo && s.mo.qn > window.__qn && s.readOpen; }, null, { timeout: 300000, polling: 100 }).catch(function () {});
    await closeReading();
  }
  async function closeReading() {
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 30000 }).catch(function () {});
    await frames(2);
  }
  /* the in-page helpers: step the mode's own tick on the game clock, calm the hazards for a check */
  async function helpers() {
    await page.evaluate(function () {
      var idle = { ax: 0, ay: 0, fire: false, ptr: null };
      window.__m = {
        step: function (sec) { var s = SolScene; for (var t = 0; t < sec - 1e-9; t += 0.05) { if (s._finishing || s.ended) break; s.tick_moonshot(0.05, idle, 50); } },
        fly: function (c) { var s = SolScene, n = 0; while (c && c.state === "fly" && n++ < 400) s.tick_moonshot(0.05, idle, 50); return c; },
        quiet: function () {
          var s = SolScene, B = s.mo;
          s.moonEndSels(true); B.selCd = 1e9;
          if (B.cap) s.moonFreeCap(B.cap);
          s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
          B.shells = B.P.shells; B.cd = 0; B.titleMs = 0;
          s.keys.SPACE.isDown = false; s.keys.UP.isDown = false; s.keys.S.isDown = false; s.keys.A.isDown = false; s.keys.D.isDown = false;
        },
        idx: function (L) { var B = SolScene.mo; for (var i = 0; i < B.craters.length; i++) if (B.craters[i].letter === L) return i; return -1; },
        /* fire at crater i, waiting (on the game clock) until no cloud or star is in the way */
        shootCrater: function (i) {
          var s = SolScene, B = s.mo, a, n = 0;
          while (n++ < 200) { a = s.moonCraterAim(i); var pr = s.moonPredict(a.ang, a.pow, B.mt); if (pr.kind === "crater" && pr.i === i) break; s.tick_moonshot(0.05, idle, 50); }
          B.cd = 0;
          return window.__m.fly(s.moonFire(a.ang, a.pow));
        }
      };
    });
  }

  /* ── level 1: the reading pop-up, the stage, the controls ── */
  var l1 = await gotoLevel(1, true);
  await shot("00-reading-01");
  await closeReading();
  check(l1.key === "mode" && l1.mode === "moonshot" && l1.strand === "MOON" && l1.act === "FIRE", "level 1 runs Shoot the Moon in the mode scene with a FIRE button: " + JSON.stringify({ key: l1.key, mode: l1.mode, strand: l1.strand, act: l1.act }));
  check(/Shoot the Moon/.test(l1.card) && /cannon level/.test(l1.card) && /Méliès/.test(l1.card) && /Controls:.*▲ ▼.*◀ ▶.*Space or FIRE.*mouse/.test(l1.card) && /crater with the right letter/.test(l1.hint),
    "the reading pop-up names the game and explains it and its controls: " + l1.card.slice(0, 160) + "…");
  await helpers();
  var stage = await page.evaluate(function () {
    var s = SolScene, B = s.mo;
    return { letters: s.choiceLetters().join(""), craters: B.craters.map(function (c) { return c.tx.text; }).join(""), shells: B.shells, P: B.P, W: s.W, H: s.H };
  });
  check(stage.craters === stage.letters && stage.letters.length >= 3 && stage.shells === stage.P.shells, "one crater per answer letter on the Moon's face, its letter in it, and a full load of shells: " + JSON.stringify({ craters: stage.craters, shells: stage.shells }));

  /* the keys: ▲ / S change the angle, D / ◀ the powder (held on real frames) */
  async function holdKey(key, test) {
    await page.evaluate(function (key) { window.__k0 = { ang: SolScene.mo.ang, pow: SolScene.mo.pow }; SolScene.keys[key].isDown = true; }, key);
    await page.waitForFunction(test, null, { timeout: 120000, polling: 50 }).catch(function () {});
    return await page.evaluate(function (key) { SolScene.keys[key].isDown = false; var B = SolScene.mo; return { dAng: (B.ang - window.__k0.ang) * 180 / Math.PI, dPow: B.pow - window.__k0.pow }; }, key);
  }
  await page.evaluate(function () { __m.quiet(); var s = SolScene, B = s.mo; B.ang = 45 * Math.PI / 180; B.pow = 0.5; });
  var kUp = await holdKey("UP", function () { return SolScene.mo.ang > window.__k0.ang + 2 * Math.PI / 180; });
  var kDn = await holdKey("S", function () { return SolScene.mo.ang < window.__k0.ang - 2 * Math.PI / 180; });
  var kMore = await holdKey("D", function () { return SolScene.mo.pow > window.__k0.pow + 0.04; });
  var kLess = await holdKey("LEFT", function () { return SolScene.mo.pow < window.__k0.pow - 0.04; });
  check(kUp.dAng > 2 && kDn.dAng < -2 && kMore.dPow > 0.04 && kLess.dPow < -0.04, "▲ / S raise and lower the cannon, D / ◀ add and take away powder: " + JSON.stringify({ up: kUp.dAng.toFixed(1), down: kDn.dAng.toFixed(1), more: kMore.dPow.toFixed(2), less: kLess.dPow.toFixed(2) }));

  /* the mouse: pointing puts the landing ring on the pointer; pointing at a crater (where it will be) lines it up */
  var cbox = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height, fx: r.width / SolScene.W, fy: r.height / SolScene.H }; });
  var tgt = await page.evaluate(function () { var s = SolScene, B = s.mo; B.P.driftX = 0; B.P.driftY = 0; B.P.zoom = 0; var c = s.moonCraterAt(B.craters[1], B.mt + 1); return { x: c.x, y: c.y }; });
  await page.mouse.move(cbox.x + 30, cbox.y + 30);
  await frames(2);
  await page.mouse.move(cbox.x + tgt.x * cbox.fx, cbox.y + tgt.y * cbox.fy, { steps: 3 });
  await frames(3);
  var mouse = await page.evaluate(function (t) { var s = SolScene, B = s.mo, L = s.moonLanding(); return { dx: L.x - t.x, dy: L.y - t.y, glow: B.glow }; }, tgt);
  check(Math.abs(mouse.dx) < 3 && Math.abs(mouse.dy) < 3 && mouse.glow === 1, "the mouse puts the landing ring where it points, and pointing at a crater lights that crater up: " + JSON.stringify(mouse));
  /* a click fires (on the release): aimed at the Moon's nose, the capsule bounces off the face — a shell, not a life */
  var nose = await page.evaluate(function () { var s = SolScene, B = s.mo, st = s.moonAt(B.mt + 1); window.__f = B.fired; window.__sh = B.shells; return { x: st.x, y: st.y + st.r * 0.1 }; });
  await page.mouse.move(cbox.x + nose.x * cbox.fx, cbox.y + nose.y * cbox.fy, { steps: 2 });
  await frames(2);
  await page.mouse.down(); await frames(2); await page.mouse.up();
  await page.waitForFunction(function () { return SolScene.mo.fired > window.__f; }, null, { timeout: 60000, polling: 50 }).catch(function () {});
  var click = await page.evaluate(function () { var s = SolScene, B = s.mo; var c = __m.fly(B.cap); return { fired: B.fired - window.__f, shells: window.__sh - B.shells, outcome: B.outcome, strikes: s.strikes, score: s.score, wasted: B.wastedQ }; });
  check(click.fired === 1 && click.shells === 1 && click.outcome === "face" && click.strikes === 0 && click.score === 0 && click.wasted >= 1,
    "a mouse click fires; a capsule that bounces off the Moon's face costs a shell, not a life: " + JSON.stringify(click));
  await page.mouse.move(cbox.x + 20, cbox.y + cbox.h - 20);
  await frames(2);

  /* Space fires once per press (holding it does not keep firing) */
  await page.evaluate(function () { __m.quiet(); var s = SolScene, B = s.mo, st = s.moonAt(B.mt + 1); s.moonAimAt(st.x + st.r * 3, st.y - st.r * 0.2); window.__f = B.fired; window.__sh = B.shells; });
  await page.keyboard.down("Space");
  await page.waitForFunction(function () { return SolScene.mo.fired > window.__f; }, null, { timeout: 60000, polling: 50 }).catch(function () {});
  await page.evaluate(function () { __m.fly(SolScene.mo.cap); SolScene.mo.cd = 0; });
  await frames(4);
  await page.keyboard.up("Space");
  var space = await page.evaluate(function () { var s = SolScene, B = s.mo; return { fired: B.fired - window.__f, outcome: B.outcome, strikes: s.strikes, shells: window.__sh - B.shells }; });
  check(space.fired === 1 && space.outcome === "miss" && space.strikes === 0 && space.shells === 1, "Space fires once per press; a capsule that misses the Moon sails off into space (a shell, not a life): " + JSON.stringify(space));

  /* the on-screen FIRE button */
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width }; });
  await page.evaluate(function () { __m.quiet(); window.__f = SolScene.mo.fired; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.mo.fired > window.__f; }, null, { timeout: 60000, polling: 50 }).catch(function () {});
  await page.mouse.up();
  var button = await page.evaluate(function () { var B = SolScene.mo; __m.fly(B.cap); return B.fired - window.__f; });
  check(abox.w > 0 && button === 1, "the on-screen FIRE button fires: " + button);

  /* ── the rules, on the game clock ── */
  var rules = await page.evaluate(function () {
    var s = SolScene, B = s.mo, o = {}, need = s.need.slice(), letters = s.choiceLetters();
    var wrongs = letters.filter(function (L) { return need.indexOf(L) === -1; });
    /* a wrong crater: a life, crossed out; landing there again costs nothing more */
    __m.quiet();
    var wi = __m.idx(wrongs[0]), sc0 = s.score;
    var c = __m.shootCrater(wi);
    o.wrong = { strikes: s.strikes, score: s.score - sc0, state: B.craters[wi].state, mark: B.craters[wi].tx.text, label: s._lastHitLabel, outcome: B.outcome };
    s.iframeMs = 0; __m.shootCrater(wi);
    o.again = { strikes: s.strikes, outcome: B.outcome };
    /* a Selenite on a crater: landing on it costs a life (it captures the astronomers) */
    __m.quiet();
    var ri = __m.idx(need[0]), w2 = -1;
    B.craters.forEach(function (c, i) { if (w2 < 0 && i !== ri && c.state === "live") w2 = i; });
    s.moonSelenite(ri, "up", 60000);
    o.selShown = !!(B.sels[0] && B.sels[0].spr && B.sels[0].spr.visible);
    sc0 = s.score;
    __m.shootCrater(ri);
    o.capture = { strikes: s.strikes, score: s.score - sc0, label: s._lastHitLabel, captures: B.captures, sels: B.sels.length, live: B.craters[ri].state, outcome: B.outcome };
    /* ... and it can be avoided: it vanishes in a puff after a while (wait for it) */
    __m.quiet();
    var sel = s.moonSelenite(ri, "up", 900); B.P.hop = 0;
    __m.step(1.2);
    o.vanish = { sels: B.sels.length, puffs: B.puffs.length > 0 };
    /* smoke gathers before one appears, and then it appears (the stop trick) */
    __m.quiet();
    sel = s.moonSelenite(w2, "warn");
    o.warn = { phase: sel.phase, visible: !!(sel.spr && sel.spr.visible) };
    __m.step(B.P.selWarn / 1000 + 0.1);
    o.warn.after = sel.phase; o.warn.shown = !!(sel.spr && sel.spr.visible);
    /* the Selenites come on their own */
    __m.quiet(); B.selCd = 10;
    __m.step(0.2);
    o.spawn = B.sels.length;
    /* using up every shell costs a life, and the gunners bring a fresh load */
    __m.quiet(); B.shells = 1;
    var st = s.moonAt(B.mt + 1); s.moonAimAt(st.x + st.r * 3, st.y); __m.fly(s.moonFire(B.ang, B.pow));
    o.shells = { strikes: s.strikes, label: s._lastHitLabel, shells: B.shells, full: B.P.shells };
    /* the right crater, while a Selenite's smoke is only gathering on it: it scores, and pays coins */
    __m.quiet();
    s.moonSelenite(ri, "warn", 60000);
    sc0 = s.score; var coins = s.nightCoins;
    var rc = __m.shootCrater(ri);
    if (need.length > 1) { s.iframeMs = 0; __m.shootCrater(__m.idx(need[1])); }
    window.__qn = B.qn;
    o.right = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins, stuck: rc.state === "stuck", mark: B.craters[ri].tx.text, captures: B.captures, between: s._between };
    return o;
  });
  console.log("rules", JSON.stringify(rules));
  check(rules.wrong.strikes === 1 && rules.wrong.score === 0 && rules.wrong.state === "dead" && rules.wrong.mark === "✕" && /WRONG LETTER/.test(rules.wrong.label || "") && rules.again.strikes === 1 && rules.again.outcome === "crater",
    "a capsule in a wrong crater costs a life and crosses it out; landing there again costs nothing more: " + JSON.stringify({ wrong: rules.wrong, again: rules.again }));
  check(rules.selShown && rules.capture.strikes === 1 && rules.capture.score === 0 && /SELENITE/.test(rules.capture.label || "") && rules.capture.captures === 1 && rules.capture.sels === 0 && rules.capture.live === "live",
    "landing on a Selenite costs a life (it captures the astronomers and vanishes in a puff), and the crater stays: " + JSON.stringify(rules.capture));
  check(rules.vanish.sels === 0 && rules.vanish.puffs && rules.warn.phase === "warn" && !rules.warn.visible && rules.warn.after === "up" && rules.warn.shown && rules.spawn === 1,
    "Selenites come on their own: smoke gathers on a crater, one pops up (stop trick), and it vanishes in a puff after a while: " + JSON.stringify({ vanish: rules.vanish, warn: rules.warn, spawn: rules.spawn }));
  check(rules.shells.strikes === 1 && /SHELLS/.test(rules.shells.label || "") && rules.shells.shells === rules.shells.full, "using up the last shell costs a life, and a fresh load arrives: " + JSON.stringify(rules.shells));
  check(rules.right.score === 1 && rules.right.strikes === 0 && rules.right.coins && rules.right.stuck && rules.right.mark === "✓" && rules.right.captures === 1,
    "the capsule in the right crater answers the question and pays coins (landing while a Selenite's smoke is only gathering is safe): " + JSON.stringify(rules.right));

  /* the next question: its reading pop-up, a fresh Moon, then Select TWO */
  await nextQuestion();
  var two = await page.evaluate(function () {
    var s = SolScene, B = s.mo, o = {};
    __m.quiet();
    o.fresh = { shells: B.shells === B.P.shells, live: B.craters.every(function (c) { return c.state === "live"; }), caps: B.caps.length, title: B.titleMs > 0 || B.qn === 2, qn: B.qn };
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    __m.shootCrater(__m.idx(pair[0]));
    var c0 = B.craters[__m.idx(pair[0])];
    o.first = { score: s.score - sc0, state: c0.state, mark: c0.tx.text, found: s.extracted.join(""), strikes: s.strikes };
    __m.shootCrater(__m.idx(pair[1]));
    o.second = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins };
    window.__qn = B.qn;
    return o;
  });
  check(two.fresh.shells && two.fresh.live && two.fresh.caps === 0 && two.fresh.qn === 2, "a new question brings fresh craters, a full load of shells and the next tableau: " + JSON.stringify(two.fresh));
  check(two.first.score === 0 && two.first.state === "found" && two.first.mark === "✓" && two.first.found.length === 1 && two.first.strikes === 0 && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right craters: the first is marked found, the second answers it: " + JSON.stringify({ first: two.first, second: two.second }));
  await nextQuestion();

  /* the level-1 picture: the cannon aimed, a Selenite on a crater, smoke gathering on another */
  await page.evaluate(function () {
    var s = SolScene, B = s.mo; __m.quiet(); s.iframeMs = 0; s.spareLives = 9; s.bigTagMs = 0; s.bigTag.setVisible(false);
    s.moonSelenite(1, "up", 1e6); s.moonSelenite(B.craters.length - 1, "warn", 1e6); B.sels[1].t = 1e6 * 0.6;
    var a = s.moonCraterAim(0); B.ang = a.ang; B.pow = a.pow; B.lpx = s.ptr.x; B.lpy = s.ptr.y;
  });
  await frames(3);
  await shot("01-level1");

  /* ── difficulty: every level 2-100 harder than the one before, never easier ── */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.moonshot.params, s = SolScene, out = { same: typeof s.moonParams === "function" && JSON.stringify(s.moonParams(50)) === JSON.stringify(f(50)) };
    var up = ["driftX", "driftY", "driftSpd", "zoom", "flightMs", "sels", "selStay", "hop", "clouds", "cloudSpd", "stars", "starSpd"], down = ["craterR", "guide", "glow", "shells", "selEvery", "selWarn"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    out.news = SolModes.MODES.moonshot.news.length;
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l50: ramp.l50, l100: ramp.l100 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0 && ramp.news === 10, "moonParams (on the def as params): every level 2-100 is harder than the one before and never easier, with a news line for each tier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat }));
  var e = ramp.l1, z = ramp.l100;
  check(e.driftX < 10 && e.driftSpd < 0.3 && e.zoom === 0 && e.craterR >= 0.21 && e.guide > 0.99 && e.glow === 1 && e.shells === 8 && e.sels === 1 && e.selWarn >= 1800 && e.selEvery >= 8500 && e.hop === 0 && e.clouds === 0 && e.stars === 0,
    "level 1 is gentle: a slow, small drift, big craters that light up, the whole arc shown, eight shells, one rare Selenite with a long warning, no clouds or stars: " + JSON.stringify(e));
  check(z.driftX >= 90 && z.zoom >= 0.15 && z.craterR <= 0.165 && z.flightMs >= 1450 && z.glow === 0 && z.shells === 5 && z.sels === 3 && z.hop >= 0.5 && z.clouds === 2 && z.stars === 2 && z.selWarn <= 850,
    "level 100 is intense: a wide, fast drift and zoom, small craters with no glow, a longer flight to lead, five shells, three hopping Selenites, two clouds and two swinging stars: " + JSON.stringify(z));

  /* ── level 10: plays, and the right crater scores ── */
  var l10 = await gotoLevel(10);
  await helpers();
  var p10 = await page.evaluate(function () {
    var s = SolScene, B = s.mo; __m.quiet();
    var sc0 = s.score; s.need.forEach(function (L) { s.iframeMs = 0; __m.shootCrater(__m.idx(L)); });
    return { score: s.score - sc0, strikes: s.strikes, clouds: B.P.clouds, glow: B.P.glow };
  });
  check(l10.mode === "moonshot" && l10.tier === 0 && p10.score === 1 && p10.strikes === 0 && p10.clouds === 0, "level 10 plays Shoot the Moon and the right crater scores: " + JSON.stringify(p10));

  /* ── clouds (level 15) and swinging stars (level 55) only cost a shell ── */
  var l15 = await gotoLevel(15);
  await helpers();
  var cl = await page.evaluate(function () {
    var s = SolScene, B = s.mo, o = {}; __m.quiet();
    var ri = __m.idx(s.choiceLetters().filter(function (L) { return s.need.indexOf(L) === -1; })[0]);
    /* slide the cloud so it sits on the shot's path when the capsule gets there */
    var a = s.moonCraterAim(ri), p = s.moonPoint(a.ang, a.pow, 0.25), c = B.clouds[0], T = B.P.flightMs / 1000;
    c.lane = 0; B.cloudY[0] = p.y;
    var best = 0, bd = 1e9; for (var j = 0; j < 1440; j++) { c.x0 = j / 1440 * Math.PI * 2; var q = s.moonCloudAt(c, B.mt + 0.25 * T); if (Math.abs(q.x - p.x) < bd) { bd = Math.abs(q.x - p.x); best = c.x0; } }
    c.x0 = best;
    o.pred = s.moonPredict(a.ang, a.pow, B.mt).kind;
    var sh = B.shells; __m.fly(s.moonFire(a.ang, a.pow));
    o.cloud = { outcome: B.outcome, strikes: s.strikes, shells: sh - B.shells, score: s.score, live: B.craters[ri].state, visible: c.spr.visible };
    return o;
  });
  check(l15.tier === 1 && /New this time:.*clouds/.test(l15.card) && cl.pred === "cloud" && cl.cloud.strikes === 0 && cl.cloud.shells === 1 && cl.cloud.live === "live" && cl.cloud.visible,
    "level 15: a painted cloud slides across the sky; a capsule that flies into it is lost (a shell, not a life), and the card says what's new: " + JSON.stringify(cl));
  var l55 = await gotoLevel(55);
  await helpers();
  var stp = await page.evaluate(function () {
    var s = SolScene, B = s.mo, o = {}; __m.quiet();
    var ri = __m.idx(s.choiceLetters().filter(function (L) { return s.need.indexOf(L) === -1; })[0]);
    var a = s.moonCraterAim(ri), p = s.moonPoint(a.ang, a.pow, 0.55), T = B.P.flightMs / 1000, st = B.stars[0];
    /* hang the star's wire over the shot's path, and time its swing to be straight down when the capsule gets there */
    var q0 = s.moonStarAt(st, 0, 0), off = q0.cy - q0.y;
    B.starPiv[0] = { x: p.x, len: p.y - off }; st.ph = -B.P.starSpd * (B.mt + 0.55 * T); B.P.clouds = 0;
    var q = s.moonStarAt(st, 0, B.mt + 0.55 * T), bd = Math.pow(q.cx - p.x, 2) + Math.pow(q.cy - p.y, 2);
    o.pred = s.moonPredict(a.ang, a.pow, B.mt).kind; o.miss = Math.sqrt(bd).toFixed(1);
    var sh = B.shells; __m.fly(s.moonFire(a.ang, a.pow));
    o.star = { outcome: B.outcome, strikes: s.strikes, shells: sh - B.shells, live: B.craters[ri].state, visible: st.spr.visible };
    return o;
  });
  check(l55.tier === 5 && /New this time:.*star/.test(l55.card) && stp.pred === "star" && stp.star.strikes === 0 && stp.star.shells === 1 && stp.star.live === "live" && stp.star.visible,
    "level 55: a dream star swings across on a wire; a capsule that hits it is lost (a shell, not a life), and the card says what's new: " + JSON.stringify(stp));

  /* ── level 50: the picture with everything in it ── */
  await gotoLevel(50);
  await helpers();
  await page.evaluate(function () {
    var s = SolScene, B = s.mo; __m.quiet(); s.iframeMs = 0; s.spareLives = 9; s.bigTagMs = 0; s.bigTag.setVisible(false);
    s.moonSelenite(0, "up", 1e6); s.moonSelenite(2, "warn", 1e6); B.sels[1].t = 5e5;
    var a = s.moonCraterAim(3); B.ang = a.ang; B.pow = a.pow; B.lpx = s.ptr.x; B.lpy = s.ptr.y;
    var c = s.moonFire(a.ang, a.pow); for (var i = 0; i < 12; i++) s.tick_moonshot(0.05, { ax: 0, ay: 0, fire: false, ptr: null }, 50);
    B.P.flightMs = 1e9; c.t = c.t / c.T * 1e9; c.T = 1e9; B.cap = c;   /* hold the capsule in the air for the picture */
  });
  await frames(3);
  await shot("02-level50");
  await page.evaluate(function () { var s = SolScene, B = s.mo; if (B.cap) s.moonFreeCap(B.cap); B.P.flightMs = s.moonParams(50).flightMs; s.iframeMs = 0; });

  /* ── level 100: plays, the right crater scores by leading the fast-drifting, zooming Moon ── */
  var l100 = await gotoLevel(100);
  await helpers();
  var p100 = await page.evaluate(function () {
    var s = SolScene, B = s.mo; __m.quiet();
    __m.step(1.5);
    var st0 = s.moonAt(B.mt), st1 = s.moonAt(B.mt + B.P.flightMs / 1000);
    var sc0 = s.score; window.__qn = B.qn; s.need.forEach(function (L) { s.iframeMs = 0; __m.shootCrater(__m.idx(L)); });
    return { score: s.score - sc0, strikes: s.strikes, glow: B.P.glow, moved: Math.round(Math.hypot(st1.x - st0.x, st1.y - st0.y)), craterR: Math.round(B.P.craterR * B.R) };
  });
  check(l100.mode === "moonshot" && l100.tier === 9 && /New this time:.*far side/.test(l100.card) && p100.score === 1 && p100.strikes === 0 && p100.glow === 0,
    "level 100 plays Shoot the Moon, and a shot that leads the drifting Moon lands in the right crater: " + JSON.stringify(p100));
  await nextQuestion();
  await page.evaluate(function () {
    var s = SolScene, B = s.mo; __m.quiet(); s.iframeMs = 0; s.spareLives = 9; s.bigTagMs = 0; s.bigTag.setVisible(false);
    s.moonSelenite(1, "up", 1e6); s.moonSelenite(2, "up", 1e6); s.moonSelenite(0, "warn", 1e6); B.sels[2].t = 7e5;
    var a = s.moonCraterAim(3); B.ang = a.ang; B.pow = a.pow; B.lpx = s.ptr.x; B.lpy = s.ptr.y;
  });
  await frames(3);
  await shot("03-level100");

  /* losing: the last life ends the level with a Retry */
  var lose = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    s.answerWrong("Z", "WRONG LETTER");
    for (var w = 0; w < 300 && !(s.ended && !document.getElementById("overlay").classList.contains("hidden")); w++) await new Promise(function (r) { setTimeout(r, 100); });
    return { ended: s.ended, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Shoot the Moon/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 200));
  await ctx.close();

  /* ── the 500-pixel-tall Canvas frame: everything fits ── */
  var ctx2 = await browser.newContext({ viewport: { width: 1000, height: 500 } });
  await ctx2.addInitScript(function () { window.SOL_STATE = "LIT"; });
  page = await ctx2.newPage();
  page.setDefaultTimeout(120000);
  watch(page, "500");
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.click('#mode-packs .card[data-genre="HISTORY"]');
  await page.click('#skill-packs .card[data-gamemode="moonshot"]');
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
  for (i = 0; i < 20; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  var fit = [];
  for (var lv of [1, 100]) {
    await gotoLevel(lv);
    await helpers();
    fit.push(await page.evaluate(function () {
      var s = SolScene, B = s.mo, W = s.W, H = s.H, bad = 0, t, i, top = 1e9, bot = 0, lft = 1e9, rgt = 0;
      /* every crater at every moment of the Moon's drift and zoom stays on the stage, under the valance, above the roofs */
      for (t = 0; t < 120; t += 0.25) for (i = 0; i < B.craters.length; i++) {
        var c = s.moonCraterAt(B.craters[i], t);
        top = Math.min(top, c.y - c.r); bot = Math.max(bot, c.y + c.r); lft = Math.min(lft, c.x - c.r); rgt = Math.max(rgt, c.x + c.r);
      }
      if (top < B.valH + 4 || bot > H * 0.78 || lft < B.edgeL || rgt > B.edgeR) bad++;
      /* every crater can be reached by the cannon */
      for (i = 0; i < B.craters.length; i++) { var a = s.moonCraterAim(i), pr = s.moonPredict(a.ang, a.pow, B.mt); B.P.clouds = 0; B.P.stars = 0; pr = s.moonPredict(a.ang, a.pow, B.mt); if (pr.kind !== "crater" || pr.i !== i) bad++; }
      if (rgt > s.moonButtonsLeft() + 2) bad++;
      var hb = B.hud, pad = s.moonPadBox();
      var hudOk = hb.x > B.edgeL && hb.x + hb.w < B.edgeR && hb.y + hb.h < H, padOk = !pad || pad.x1 < B.pivX - 60 * B.k || pad.y0 > B.floorY;
      return { W: W, H: H, k: +B.k.toFixed(2), bad: bad, hudOk: hudOk, padOk: padOk, craters: Math.round(B.P.craterR * B.R), top: Math.round(top), bot: Math.round(bot), lft: Math.round(lft), rgt: Math.round(rgt) };
    }));
    if (lv === 1) {
      await page.evaluate(function () { var s = SolScene, B = s.mo; __m.quiet(); s.moonSelenite(2, "up", 1e6); var a = s.moonCraterAim(1); B.ang = a.ang; B.pow = a.pow; B.lpx = s.ptr.x; B.lpy = s.ptr.y; });
      await frames(3);
      await shot("04-canvas500");
    }
  }
  check(fit.every(function (f) { return f.H <= 520 && f.bad === 0 && f.hudOk && f.padOk && f.craters >= 9; }), "in the 500-pixel-tall Canvas frame the Moon's craters stay on the stage at every drift and can all be reached, and the board and the cannon clear the pad: " + JSON.stringify(fit));
  await ctx2.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
