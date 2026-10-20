/* Headless test of the Lit and Film mode "yuma" (Make the 3:10, js/mode-yuma.js): node tools/smoke-mode-yuma.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Westerns, then 3:10 to Yuma, and drives the mode through the scene's own methods: the keys, the mouse and the
   RUN button move the rancher (Wade follows on the lead); a rooftop shot costs a life in the open and hits the cover
   when cover is between; a gang rider costs a life in his lane and misses when you step out of it; the clock reaching
   3:10 costs a life (the train pulls out and backs in); Wade digging in his heels takes taps of RUN; a wrong car costs a
   life and is nailed shut; the right car scores (walked to with a click); Select TWO needs both; the difficulty climbs
   every level 2-100; levels 1, 10, 50 and 100 play; the 500-pixel-tall frame lays out. Screenshots go to tools/shots/.
   The game runs on its own clock (slow under load), so every wait is on the game's state, not on the wall clock.
   Prints ALL OK or the number FAILED. */
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
    /* other movies' content files may not be written yet: their 404s are only logged */
    page.on("response", function (r) { if (r.status() === 404) console.log(tag + " 404 " + r.url()); });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|status of 404/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png"), timeout: 240000 }); }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);

  /* ── the Lit and Film screens: Westerns, then 3:10 to Yuma ── */
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-genre="WESTERN"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="yuma"]');
    return c ? { name: c.querySelector(".name").textContent, kind: c.querySelector(".kind").textContent, strand: c.getAttribute("data-strand") } : null;
  });
  check(card && card.name === "3:10 to Yuma" && /Make the 3:10/.test(card.kind) && card.strand === "YUMA", "the Westerns screen has the 3:10 to Yuma card, game Make the 3:10: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="yuma"]');
  var picked = await page.evaluate(function () {
    return { only: SolModes.only, def: !!SolModes.MODES.yuma, levels: [1, 10, 50, 100].map(function (n) { var m = SolModes.modeFor(n); return m ? m.id : "maze"; }).join() };
  });
  check(picked.only === "yuma" && picked.def && picked.levels === "yuma,yuma,yuma,yuma", "the movie card plays Make the 3:10 on every level: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  /* helpers in the page: the waits follow the game's own clock */
  async function helpers() {
    await page.evaluate(function () {
      window.YT = {
        wait: function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); },
        until: async function (f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 400000)) await YT.wait(25); return f(); },
        frames: async function (n) { var g = SolScene.game, f0 = g.loop.frame; await YT.until(function () { return g.loop.frame >= f0 + n; }); },
        gameWait: async function (sec) { var Y = SolScene.yu, t0 = Y.t; await YT.until(function () { return SolScene.yu !== Y || Y.t >= t0 + sec; }); },
        keysUp: function () { var s = SolScene; ["LEFT", "RIGHT", "UP", "DOWN", "W", "A", "S", "D", "SPACE", "SHIFT"].forEach(function (k) { s.keys[k].isDown = false; }); },
        /* no hazards of their own while a check runs */
        quiet: function () {
          var s = SolScene, Y = s.yu, P = Y.P;
          P.popMs = 1e9; Y.popCd = 1e12; Y.guns.slice().forEach(function (g) { s.yumaGunFree(g); });
          Y.riderCd = 1e12; if (Y.rider) s.yumaRiderEnd();
          Y.wadeCd = 1e12; Y.dig = null;
          s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0; s.needStrikes = Math.max(s.needStrikes, 3);
          P.clockS = 1e5; Y.left = 1e5; Y.train.state = "in"; Y.train.dx = 0; s.yumaPlaceTrain();
          YT.keysUp(); Y.goal = null; Y.ran.state = "walk"; Y.ran.spr.setAlpha(1).setAngle(0); Y.hatFly = null;
        },
        place: function (x, y) {
          var s = SolScene, Y = s.yu, k = Y.k;
          Y.ran.x = x; Y.ran.y = y; Y.trail = [{ x: x, y: y }]; Y.wade.x = x - 30 * k; Y.wade.y = y; Y.goal = null;
        },
        /* a front (storefront) spot near x */
        spotNear: function (x) {
          var Y = SolScene.yu, best = null;
          Y.spots.forEach(function (sp) { if (sp.kind === "front" && (!best || Math.abs(sp.x - x) < Math.abs(best.x - x))) best = sp; });
          return best;
        },
        /* street cover a rancher can stand in front of (widest first) */
        streetCover: function () {
          var Y = SolScene.yu, list = Y.covers.filter(function (c) { return !c.rolling && c.x < Y.platX0 && (c.type === "trough" || c.type === "hay" || c.type === "wagon" || c.type === "barrels"); });
          list.sort(function (a, b) { return (b.face.x1 - b.face.x0) - (a.face.x1 - a.face.x0); });
          return list[0] || null;
        },
        doorOf: function (L) { var d = null; SolScene.yu.doors.forEach(function (q) { if (q.letter === L) d = q; }); return d; },
        /* walk up the steps of a car with the keys */
        board: async function (d) {
          var s = SolScene, Y = s.yu, R = Y.ran, st0 = s.strikes, sc0 = s.score, ex0 = s.extracted.length, b0 = Y.bumps || 0;
          YT.place(d.x, Y.bandTop + 2 * Y.k);
          s.keys.UP.isDown = true;
          await YT.until(function () { return R.state !== "walk" || s.strikes !== st0 || s.score !== sc0 || s.extracted.length !== ex0 || s._between || (Y.bumps || 0) !== b0; }, 400000);
          s.keys.UP.isDown = false;
          await YT.until(function () { return R.state === "walk" || R.state === "board" || s._between || s._finishing; });
        }
      };
    });
  }

  async function gotoLevel(n) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "YUMA", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.yu && s.claim && s.readOpen; }, n, { timeout: 400000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 20000 }).catch(function () {});
    await helpers();
    await page.evaluate(function () { return YT.frames(2); });
    return info;
  }
  async function nextQuestion() {
    await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 400000 }).catch(function () {});
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 20000 }).catch(function () {});
    await page.evaluate(function () { return YT.frames(2); });
  }
  async function canvasXY(x, y) {
    return page.evaluate(function (q) { var s = SolScene, r = s.game.canvas.getBoundingClientRect(); return { x: r.left + q.x * r.width / s.W, y: r.top + q.y * r.height / s.H }; }, { x: x, y: y });
  }

  /* ═══ level 1 ═══ */
  var l1 = await gotoLevel(1);
  check(l1.key === "mode" && l1.mode === "yuma" && l1.act === "RUN", "level 1 runs Make the 3:10 in the mode scene with a RUN button: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act }));
  check(/Make the 3:10/.test(l1.card) && /escort level/.test(l1.card) && /Controls:/.test(l1.card) && /Space or RUN/.test(l1.card) && /cover/.test(l1.card) && /train car/.test(l1.hint),
    "the reading pop-up names the game, explains it and its controls: " + l1.card.slice(0, 140) + "…");
  var lay = await page.evaluate(function () {
    var s = SolScene, Y = s.yu, letters = s.choiceLetters();
    return { doors: Y.doors.map(function (d) { return d.label.text; }).join(""), letters: letters.join(""), covers: Y.covers.length, coverN: Y.P.coverN,
      start: Math.abs(Y.ran.x - Y.start.x) < 1 && Math.abs(Y.ran.y - Y.start.y) < 1, ordered: Y.doors.every(function (d, i) { return !i || d.x > Y.doors[i - 1].x; }), left: Y.left, clockS: Y.P.clockS };
  });
  check(lay.doors === lay.letters && lay.letters.length >= 3 && lay.ordered && lay.covers === lay.coverN && lay.start && lay.left > lay.clockS - 30,
    "each answer letter is a car of the 3:10 (its letter over the door), the cover is laid out, the rancher starts on the hotel steps, the clock is running: " + JSON.stringify(lay));
  /* the early picture: behind a trough while one gunman's solid line stops at it and another's dotted line looks for him */
  await page.evaluate(async function () {
    var s = SolScene, Y = s.yu, k = Y.k, c = YT.streetCover();
    YT.quiet(); s.needStrikes = 99;
    Y.P.clockS = s.yumaParams(1).clockS; Y.left = Y.P.clockS * 0.8;
    YT.place(c.x + 6 * k, c.y + 13 * k); Y.wade.x = c.x - 34 * k; Y.wade.y = c.y + 22 * k;
    var g = s.yumaGunAt(YT.spotNear(c.x)); Y.P.aimMs = 500; Y.P.lockMs = 1e9;
    var far = Y.spots.filter(function (sp) { return sp.kind === "front" && sp !== g.sp; }).sort(function (a, b) { return Math.abs(b.x - c.x) - Math.abs(a.x - c.x); })[0];
    var g2 = s.yumaGunAt(far);
    await YT.until(function () { return g.state === "lock" && g.t > 200; });
    g2.state = "aim"; g2.t = 0; Y.P.aimMs = 1e9; await YT.frames(3);
  });
  await shot("yuma-01-level1");
  await page.evaluate(function () { var s = SolScene; s.yu.guns.slice().forEach(function (g) { s.yumaGunFree(g); }); s.yu.P.aimMs = SolScene.yumaParams(1).aimMs; s.yu.P.lockMs = SolScene.yumaParams(1).lockMs; s.needStrikes = 3; });

  /* the keys walk him (real key presses); Wade follows on the lead */
  var keys = await page.evaluate(async function () {
    var s = SolScene, Y = s.yu, k = Y.k; YT.quiet(); YT.place(Y.start.x, Y.bandTop + 2 * k);
    window.__y0 = Y.ran.y;
    return { k: k };
  });
  await page.keyboard.down("KeyS");
  await page.waitForFunction(function () { var Y = SolScene.yu; return Y.ran.y > window.__y0 + 30 * Y.k; }, null, { timeout: 400000 }).catch(function () {});
  await page.keyboard.up("KeyS");
  keys.down = await page.evaluate(function () { var Y = SolScene.yu, d = Math.round((Y.ran.y - window.__y0) / Y.k); YT.place(Y.start.x, Y.bandTop + 2 * Y.k); window.__x0 = Y.ran.x; window.__t0 = Y.t; return d; });
  await page.keyboard.down("ArrowRight");
  await page.waitForFunction(function () { var Y = SolScene.yu; return Y.ran.x > window.__x0 + 120 * Y.k; }, null, { timeout: 400000 }).catch(function () {});
  await page.keyboard.up("ArrowRight");
  keys.right = await page.evaluate(async function () {
    var Y = SolScene.yu, dx = Y.ran.x - window.__x0, dt = Y.t - window.__t0;
    await YT.gameWait(0.6);
    var lead = Math.sqrt(Math.pow(Y.ran.x - Y.wade.x, 2) + Math.pow(Y.ran.y - Y.wade.y, 2)) / Y.k;
    return { dx: Math.round(dx), speed: Math.round(dx / dt / Y.k), wadeBehind: Y.wade.x < Y.ran.x, lead: Math.round(lead), face: Y.ran.face };
  });
  /* Space runs: faster, and it spends breath */
  await page.evaluate(function () { var s = SolScene, Y = s.yu; YT.place(Y.start.x, Y.bandTop + 2 * Y.k); Y.ran.wind = 1; window.__x0 = Y.ran.x; window.__t0 = Y.t; });
  await page.keyboard.down("Space"); await page.keyboard.down("ArrowRight");
  await page.waitForFunction(function () { var Y = SolScene.yu; return Y.ran.x > window.__x0 + 120 * Y.k; }, null, { timeout: 400000 }).catch(function () {});
  keys.run = await page.evaluate(function () { var Y = SolScene.yu; return { speed: Math.round((Y.ran.x - window.__x0) / (Y.t - window.__t0) / Y.k), running: Y.ran.running, wind: +Y.ran.wind.toFixed(2) }; });
  await page.keyboard.up("ArrowRight"); await page.keyboard.up("Space");
  keys.refill = await page.evaluate(async function () { var Y = SolScene.yu, w0 = Y.ran.wind; await YT.gameWait(0.8); return Y.ran.wind > w0; });
  console.log("keys", JSON.stringify(keys));
  check(keys.right.dx > 100 && keys.right.speed > 110 && keys.right.speed < 150 && keys.right.wadeBehind && keys.right.lead >= 22 && keys.right.lead <= 40 && keys.right.face === 1 && keys.down >= 30,
    "▶ and S walk the rancher (about 132 px a second), and Wade follows on the lead, about 30 px behind: " + JSON.stringify({ right: keys.right, down: keys.down }));
  check(keys.run.speed > keys.right.speed * 1.5 && keys.run.wind < 1 && keys.refill, "holding Space runs (faster), spending breath that comes back: " + JSON.stringify({ run: keys.run, refill: keys.refill }));
  /* the on-screen RUN button */
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width }; });
  await page.evaluate(function () { var s = SolScene, Y = s.yu; YT.place(Y.start.x, Y.bandTop + 2 * Y.k); Y.ran.wind = 1; s.keys.RIGHT.isDown = true; window.__x0 = Y.ran.x; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  await page.waitForFunction(function () { var Y = SolScene.yu; return Y.ran.x > window.__x0 + 80 * Y.k; }, null, { timeout: 400000 }).catch(function () {});
  var button = await page.evaluate(function () { var Y = SolScene.yu; return { running: Y.ran.running, wind: +Y.ran.wind.toFixed(2) }; });
  await page.mouse.up();
  await page.evaluate(function () { YT.keysUp(); });
  check(abox.w > 0 && button.running && button.wind < 1, "holding the on-screen RUN button runs: " + JSON.stringify(button));
  /* the mouse: a click walks him to the spot */
  var m0 = await page.evaluate(function () { var s = SolScene, Y = s.yu, k = Y.k; YT.quiet(); YT.place(Y.start.x, Y.bandTop + 2 * k); return { x: Y.start.x + 170 * k, y: Y.bandTop + 2 * k }; });
  var mxy = await canvasXY(m0.x, m0.y);
  await page.mouse.click(mxy.x, mxy.y);
  await page.waitForFunction(function (m) { var Y = SolScene.yu; return Math.abs(Y.ran.x - m.x) < 6 * Y.k; }, m0, { timeout: 400000 }).catch(function () {});
  var mouse = await page.evaluate(function (m) { var Y = SolScene.yu; return { dx: Math.round(Y.ran.x - m.x), dy: Math.round(Y.ran.y - m.y) }; }, m0);
  check(Math.abs(mouse.dx) < 7 && Math.abs(mouse.dy) < 7, "a mouse click walks the rancher to that spot: " + JSON.stringify(mouse));

  /* ── the hazards ── */
  var hz = await page.evaluate(async function () {
    var s = SolScene, Y = s.yu, k = Y.k, o = {};
    /* a rooftop gunman: in the open, his shot costs a life (and knocks the hat off) */
    YT.quiet(); YT.place(Y.fronts[0].x0 + 30 * k, Y.bandTop + 2 * k);
    var g = s.yumaGunAt(YT.spotNear(Y.ran.x)); Y.P.aimMs = 500; Y.P.lockMs = 500;
    await YT.until(function () { return g.state === "lock"; });
    o.lockOnYou = !s.yumaShotHits(s.yumaGunAim(g, s.yumaChest().x, s.yumaChest().y)).blk;
    var sh0 = Y.shots;
    await YT.until(function () { return Y.shots > sh0; });
    await YT.frames(2);
    o.open = { strikes: s.strikes, hits: Y.hits, label: s._lastHitLabel, hat: !!Y.hatFly };
    /* behind cover: the cover takes the shot */
    YT.quiet(); var c = YT.streetCover(), b0 = Y.blocked;
    YT.place(c.x, c.y + 13 * k);
    g = s.yumaGunAt(YT.spotNear(c.x)); Y.P.aimMs = 500; Y.P.lockMs = 500;
    await YT.until(function () { return g.state === "lock"; });
    var a = s.yumaGunAim(g, s.yumaChest().x, s.yumaChest().y), res = s.yumaShotHits(a);
    o.lockBlocked = !!res.blk; o.crouch = Y.ran.crouch; o.inCover = !!s.yumaInCover();
    sh0 = Y.shots;
    await YT.until(function () { return Y.shots > sh0; });
    o.cover = { strikes: s.strikes, blocked: Y.blocked - b0, cover: c.type };
    /* caught in the open as the line locks, he gets to cover before the shot: safe */
    YT.quiet(); YT.place(c.x, Y.bandTop + 2 * k);
    g = s.yumaGunAt(YT.spotNear(c.x)); Y.P.aimMs = 400; Y.P.lockMs = 900;
    await YT.until(function () { return g.state === "lock"; });
    o.exposedAtLock = !s.yumaShotHits(s.yumaGunAim(g, s.yumaChest().x, s.yumaChest().y)).blk;
    YT.place(c.x, c.y + 13 * k);
    sh0 = Y.shots;
    await YT.until(function () { return Y.shots > sh0; });
    o.reach = { strikes: s.strikes };
    Y.P.aimMs = s.yumaParams(1).aimMs; Y.P.lockMs = s.yumaParams(1).lockMs;

    /* a gang rider: caught in his lane, knocked flat (a life) */
    YT.quiet(); var ly = Y.bandBot - 6 * k; YT.place(Y.start.x, ly);
    var r = s.yumaRiderStart(ly, 1); Y.P.riderWarn = 600;
    o.warnLane = r.state === "warn";
    await YT.until(function () { return !Y.rider || Y.ran.state === "down"; });
    o.rider = { strikes: s.strikes, label: s._lastHitLabel, down: Y.ran.state === "down" };
    await YT.until(function () { return !Y.rider && Y.ran.state === "walk"; });
    /* ... and stepping out of the dashed lane while it warns lets him gallop past */
    YT.quiet(); YT.place(Y.start.x, ly);
    r = s.yumaRiderStart(ly, -1); Y.P.riderWarn = 1500;
    s.keys.UP.isDown = true;
    await YT.until(function () { return Y.ran.y < ly - 40 * k; });
    s.keys.UP.isDown = false;
    await YT.until(function () { return !Y.rider; });
    o.dodge = { strikes: s.strikes, moved: Math.round((ly - Y.ran.y) / k) };
    Y.P.riderWarn = s.yumaParams(1).riderWarn;

    /* the station clock: at 3:10 the train pulls out (a life) and is backed in, the clock starts again */
    YT.quiet(); Y.P.clockS = s.yumaParams(1).clockS;
    var l0 = Y.left = Y.P.clockS; await YT.gameWait(1);
    o.ticking = +(l0 - Y.left).toFixed(2);
    Y.left = 0.3;
    await YT.until(function () { return Y.train.state === "leaving"; });
    o.leaving = Y.txLeave.text;
    await YT.until(function () { return Y.train.state === "in" && Y.train.lost; });
    o.clock = { strikes: s.strikes, label: s._lastHitLabel, left: Math.round(Y.left), clockS: Math.round(Y.P.clockS), dx: Y.train.dx };
    return o;
  });
  console.log("hazards", JSON.stringify(hz));
  check(hz.lockOnYou && hz.open.strikes === 1 && hz.open.hits === 1 && /HAT/.test(hz.open.label || "") && hz.open.hat,
    "a rooftop gunman's shot costs a life when no cover is between (it knocks the hat off): " + JSON.stringify(hz.open));
  check(hz.lockBlocked && hz.crouch && hz.inCover && hz.cover.strikes === 0 && hz.cover.blocked === 1, "behind cover he crouches and the cover takes the shot: " + JSON.stringify({ c: hz.cover, crouch: hz.crouch }));
  check(hz.exposedAtLock && hz.reach.strikes === 0, "caught in the open as the line locks, reaching cover before the shot avoids it: " + JSON.stringify(hz.reach));
  check(hz.warnLane && hz.rider.strikes === 1 && /RIDER/.test(hz.rider.label || "") && hz.rider.down && hz.dodge.strikes === 0 && hz.dodge.moved >= 40,
    "a gang rider costs a life in his lane (knocked flat), and stepping out of the dashed lane avoids him: " + JSON.stringify({ rider: hz.rider, dodge: hz.dodge }));
  check(hz.ticking > 0.8 && hz.ticking < 1.3 && /PULLING OUT/.test(hz.leaving) && hz.clock.strikes === 1 && /3:10/.test(hz.clock.label || "") && hz.clock.left >= hz.clock.clockS - 2 && hz.clock.dx === 0,
    "the station clock runs down; at 3:10 the train pulls out (a life) and is backed in with the clock reset: " + JSON.stringify({ ticking: hz.ticking, clock: hz.clock }));

  /* ── the letters: a wrong car, then the right one (walked to with a click) ── */
  var cars = await page.evaluate(async function () {
    var s = SolScene, Y = s.yu, k = Y.k, o = {}, need = s.need.slice(), letters = s.choiceLetters();
    var wrongs = letters.filter(function (L) { return need.indexOf(L) === -1; });
    YT.quiet();
    var d = YT.doorOf(wrongs[0]), sc0 = s.score;
    await YT.board(d);
    o.wrong = { strikes: s.strikes, score: s.score - sc0, state: d.state, label: d.label.text, tag: s._lastHitLabel, back: Y.ran.y > Y.bandTop };
    await YT.until(function () { return Y.ran.state === "walk"; });
    s.iframeMs = 0;
    await YT.board(d);
    o.again = { strikes: s.strikes, y: Y.ran.y >= Y.bandTop };
    YT.quiet();
    var R = YT.doorOf(need[0]);
    YT.place(R.x - 70 * k, Y.bandTop + 24 * k);
    window.__need = need; window.__sc = s.score; window.__coins = s.nightCoins;
    return { o: o, right: { x: R.x, y: Y.coachTop + Y.placardDy }, two: need.length };
  });
  var dxy = await canvasXY(cars.right.x, cars.right.y);
  await page.mouse.click(dxy.x, dxy.y);
  await page.waitForFunction(function () { var s = SolScene; return s.score > window.__sc || s.extracted.length > 0 || s.strikes > 0; }, null, { timeout: 400000 }).catch(function () {});
  var right = await page.evaluate(async function () {
    var s = SolScene, Y = s.yu, o = { goalDoor: true };
    if (window.__need.length > 1 && s.score === window.__sc) { await YT.board(YT.doorOf(window.__need[1])); }
    o.score = s.score - window.__sc; o.strikes = s.strikes; o.coins = s.nightCoins > window.__coins; o.found = Y.lastDoor && Y.lastDoor.label.text; o.state = Y.ran.state; o.between = s._between;
    return o;
  });
  console.log("cars", JSON.stringify(cars.o), JSON.stringify(right));
  check(cars.o.wrong.strikes === 1 && cars.o.wrong.score === 0 && cars.o.wrong.state === "dead" && cars.o.wrong.label === "✕" && /WRONG LETTER/.test(cars.o.wrong.tag || "") && cars.o.wrong.back && cars.o.again.strikes === 1,
    "walking up the steps of a wrong car costs a life and nails its door shut; trying it again costs nothing: " + JSON.stringify(cars.o));
  check(right.score === 1 && right.strikes === 0 && right.coins && right.found === "✓", "clicking the right car walks Wade there and aboard: the question is answered and pays coins: " + JSON.stringify(right));

  /* the next question: back at the hotel with fresh cover; then Select TWO */
  await nextQuestion();
  var two = await page.evaluate(async function () {
    var s = SolScene, Y = s.yu, o = {};
    o.fresh = { start: Math.abs(Y.ran.x - Y.start.x) < 2, live: Y.doors.every(function (d) { return d.state === "live"; }), left: Math.round(Y.left), clockS: Math.round(Y.P.clockS), state: Y.ran.state, alpha: Y.ran.spr.alpha };
    YT.quiet();
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    var d0 = YT.doorOf(pair[0]);
    await YT.board(d0);
    o.first = { score: s.score - sc0, state: d0.state, label: d0.label.text, found: s.extracted.join(""), strikes: s.strikes };
    await YT.until(function () { return Y.ran.state === "walk"; });
    await YT.board(YT.doorOf(pair[1]));
    o.second = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins };
    return o;
  });
  console.log("two", JSON.stringify(two));
  check(two.fresh.start && two.fresh.live && two.fresh.left >= two.fresh.clockS - 3 && two.fresh.state === "walk", "a new question starts back at the hotel with every car open and the clock reset: " + JSON.stringify(two.fresh));
  check(two.first.score === 0 && two.first.state === "found" && two.first.label === "✓" && two.first.found.length === 1 && two.first.strikes === 0 && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right cars: the first is marked found, the second answers it: " + JSON.stringify({ first: two.first, second: two.second }));
  await nextQuestion();

  /* ── the difficulty: every level 2-100 harder than the one before, never easier on any setting ── */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.yuma.params, s = SolScene, out = { same: typeof s.yumaParams === "function" && JSON.stringify(s.yumaParams(50)) === JSON.stringify(f(50)) };
    var up = ["gunMax", "track", "wadeTaps", "riderSp", "sideGuns", "wagonSp", "doubleP", "roofWalk", "trainGuns"],
      down = ["clockS", "popMs", "aimMs", "lockMs", "coverN", "windS", "wadeEvery", "riderEvery", "riderWarn", "grace"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    out.keys = Object.keys(f(50)).filter(function (k) { return up.indexOf(k) === -1 && down.indexOf(k) === -1; });
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l50: ramp.l50, l100: ramp.l100 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0 && ramp.keys.length === 0, "yumaParams (on the def as params): every level 2-100 is harder than the one before and never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat, unchecked: ramp.keys }));
  var e = ramp.l1, z = ramp.l100;
  check(e.gunMax === 1 && e.clockS >= 95 && e.aimMs >= 1600 && e.lockMs >= 1100 && e.coverN === 8 && e.wadeEvery > 1e8 && e.riderEvery > 1e8 && !e.sideGuns && !e.wagonSp && !e.doubleP && !e.roofWalk && !e.trainGuns,
    "level 1 is gentle: one gunman with a long warning, a long clock, plenty of cover, nothing else: " + JSON.stringify(e));
  check(z.gunMax === 4 && z.clockS <= 35 && z.aimMs <= 850 && z.lockMs <= 520 && z.coverN === 6 && z.wadeTaps >= 6 && z.riderEvery < 9000 && z.sideGuns && z.wagonSp > 0 && z.doubleP > 0.6 && z.roofWalk > 0 && z.trainGuns,
    "level 100 is intense: four guns, short warnings, a short clock, less cover, Wade, riders, a rolling wagon, second shots, walking and train-roof gunmen: " + JSON.stringify(z));

  /* ═══ level 10 ═══ */
  var l10 = await gotoLevel(10);
  var p10 = await page.evaluate(async function () {
    var s = SolScene, Y = s.yu, sc0 = s.score; YT.quiet();
    await YT.board(YT.doorOf(s.need[0]));
    if (s.need.length > 1) await YT.board(YT.doorOf(s.need[1]));
    return { gunMax: Y.P.gunMax, score: s.score - sc0 };
  });
  check(l10.mode === "yuma" && l10.tier === 0 && p10.gunMax === 1 && p10.score === 1, "level 10 plays Make the 3:10 and the right car scores: " + JSON.stringify(p10));

  /* ═══ level 50: Wade digs in; the middle picture ═══ */
  var l50 = await gotoLevel(50);
  var dig = await page.evaluate(async function () {
    var s = SolScene, Y = s.yu, k = Y.k, o = { taps: Y.P.wadeTaps };
    YT.quiet(); YT.place(Y.start.x + 20 * k, Y.bandTop + 2 * k);
    Y.wadeCd = 0; s.keys.RIGHT.isDown = true;
    await YT.until(function () { return !!Y.dig; });
    o.dug = !!Y.dig;
    await YT.gameWait(1.2);
    s.keys.RIGHT.isDown = false;
    o.held = Math.round(Math.sqrt(Math.pow(Y.ran.x - Y.wade.x, 2) + Math.pow(Y.ran.y - Y.wade.y, 2)) / k);
    o.prompt = Y.txDig.visible && /TAP RUN/.test(Y.txDig.text);
    return o;
  });
  for (var tp = 0; tp < 12; tp++) {
    var gone = await page.evaluate(function () { return !SolScene.yu.dig; });
    if (gone) break;
    await page.keyboard.down("Space");
    await page.evaluate(function () { return YT.frames(2); });
    await page.keyboard.up("Space");
    await page.evaluate(function () { return YT.frames(2); });
    dig.pressed = tp + 1;
  }
  dig.after = await page.evaluate(function () { return !SolScene.yu.dig; });
  check(l50.mode === "yuma" && /New this time:.*depot roof/.test(l50.card) && dig.dug && dig.held <= 47 && dig.prompt && dig.after && dig.pressed === dig.taps,
    "level 50: Wade digs in his heels (the rancher can't pull past the lead) until RUN is tapped " + dig.taps + " times: " + JSON.stringify(dig));
  await page.evaluate(async function () {
    var s = SolScene, Y = s.yu, k = Y.k;
    YT.quiet(); s.needStrikes = 99; Y.P.clockS = s.yumaParams(50).clockS; Y.left = Y.P.clockS * 0.55;
    var c = YT.streetCover(); YT.place(c.x - 10 * k, c.y + 13 * k);
    var g1 = s.yumaGunAt(YT.spotNear(c.x)), side = Y.spots.filter(function (sp) { return sp.kind === "side"; })[0], g2 = s.yumaGunAt(side);
    Y.P.aimMs = 500; Y.P.lockMs = 1e9;
    s.yumaRiderStart(Y.bandBot - 8 * k, 1); Y.P.riderWarn = 1e9;
    await YT.until(function () { return g1.state === "lock" && g2.state === "lock"; });
    Y.dig = { taps: 3, t: 0 };
    await YT.frames(4);
  });
  await shot("yuma-02-level50");
  await page.evaluate(function () { var s = SolScene; s.needStrikes = 3; });

  /* ═══ level 100 ═══ */
  var l100 = await gotoLevel(100);
  var p100 = await page.evaluate(async function () {
    var s = SolScene, Y = s.yu, k = Y.k, o = { gunMax: Y.P.gunMax, train: Y.P.trainGuns, open: s.yumaSpotsOpen().map(function (sp) { return sp.kind; }) };
    /* the late picture: on the platform, gunmen on the train's roof and the depot, the clock nearly at 3:10 */
    YT.quiet(); s.needStrikes = 99; Y.P.clockS = s.yumaParams(100).clockS; Y.left = 9;
    var cv = Y.covers.filter(function (c) { return c.x > Y.platX0; })[0] || YT.streetCover();
    YT.place(cv.x + 4 * k, cv.y + 13 * k);
    var tsp = s.yumaSpotsOpen().filter(function (sp) { return sp.kind === "train"; }), side = Y.spots.filter(function (sp) { return sp.kind === "side"; });
    var gs = [s.yumaGunAt(tsp[0]), s.yumaGunAt(tsp[tsp.length - 1]), s.yumaGunAt(side[1]), s.yumaGunAt(YT.spotNear(Y.depotX0))];
    Y.P.aimMs = 400; Y.P.lockMs = 1e9; Y.P.roofWalk = 0;
    await YT.until(function () { return gs[0].state === "lock" && gs[2].state === "aim"; });
    gs[1].state = "aim"; gs[1].t = 0; gs[3].state = "aim"; gs[3].t = 0; Y.P.aimMs = 1e9;
    var rr = s.yumaRiderStart(Y.bandTop + 60 * k, -1); rr.state = "ride"; rr.spr.setVisible(true); rr.x = Y.depotX0 - 70 * k; Y.P.riderSp = 0;
    await YT.frames(4);
    o.guns = Y.guns.length;
    return o;
  });
  await shot("yuma-03-level100");
  var p100b = await page.evaluate(async function () {
    var s = SolScene, Y = s.yu, sc0 = s.score; YT.quiet(); s.needStrikes = 3; Y.P.clockS = s.yumaParams(100).clockS; Y.left = Y.P.clockS;
    await YT.board(YT.doorOf(s.need[0]));
    if (s.need.length > 1) await YT.board(YT.doorOf(s.need[1]));
    return { score: s.score - sc0 };
  });
  check(l100.mode === "yuma" && l100.tier === 9 && /New this time:.*whole gang/.test(l100.card) && p100.gunMax === 4 && p100.train === 1 && p100.open.indexOf("train") !== -1 && p100.open.indexOf("side") !== -1 && p100b.score === 1,
    "level 100 plays with the whole gang (train roof and depot gunmen too), the card says what's new, and the right car scores: " + JSON.stringify({ p100: p100, score: p100b.score }));

  /* losing: the last life ends the level with a Retry */
  await page.waitForFunction(function () { return !SolScene._between; }, null, { timeout: 60000 }).catch(function () {});
  if (await page.isVisible("#read-go")) { await page.click("#read-go"); await page.waitForTimeout(300); }
  var lose = await page.evaluate(async function () {
    var s = SolScene; YT.quiet(); s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    s.answerWrong("Z", "WRONG LETTER");
    await YT.until(function () { return s.ended && !document.getElementById("overlay").classList.contains("hidden"); }, 60000);
    await YT.wait(300);
    return { ended: s.ended, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Make the 3:10/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 200));

  /* the 500-pixel-tall Canvas frame: everything relays out to fit */
  await gotoLevel(30);
  await page.setViewportSize({ width: 1000, height: 500 });
  await page.waitForFunction(function () { return SolScene.H <= 500; }, null, { timeout: 60000 }).catch(function () {});
  var small = await page.evaluate(async function () {
    var s = SolScene, Y = s.yu, err = null;
    try { s.resize_yuma(s.W, s.H); } catch (e) { err = String(e); }
    var k = Y.k; YT.quiet(); s.needStrikes = 99; Y.P.clockS = s.yumaParams(30).clockS; Y.left = Y.P.clockS * 0.6;
    var c = YT.streetCover(); YT.place(c.x + 4 * k, c.y + 13 * k);
    var g = s.yumaGunAt(YT.spotNear(c.x)); Y.P.aimMs = 400; Y.P.lockMs = 1e9;
    await YT.until(function () { return g.state === "lock"; });
    var lastDoor = Y.doors[Y.doors.length - 1];
    return { err: err, W: s.W, H: s.H, k: +k.toFixed(2), bandBot: Y.bandBot, bandTop: Y.bandTop, inside: Y.ran.y <= Y.bandBot && Y.ran.y >= Y.bandTop, doorIn: lastDoor.x < s.W && Y.stripX1 < s.W, gap: Math.round(Y.doors.length > 1 ? Y.doors[1].x - Y.doors[0].x : 99), coachTop: Y.coachTop };
  });
  await shot("yuma-04-canvas-500");
  check(!small.err && small.H <= 500 && small.bandBot < small.H && small.bandTop > small.coachTop && small.inside && small.doorIn && small.gap >= 40, "in a 500-pixel-tall frame the street, the cars and the cover all fit: " + JSON.stringify(small));
  await ctx.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
