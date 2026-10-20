/* Headless test of the Lit and Film mode "charge" (Reins in His Teeth, True Grit; js/mode-charge.js): node tools/smoke-mode-charge.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script), picks
   Westerns and then True Grit, and drives the mode through the scene's own methods: the right rider scores, a wrong rider
   costs a life and is crossed out, each hazard (an outlaw's bullet, riding into an outlaw's horse, a rock, a gopher hole,
   the rifleman on the ridge) costs a life and can be avoided, Select TWO needs both riders, the keys, the mouse and the
   FIRE button work, the reading pop-up names the game and its controls, and the difficulty climbs every level 2-100.
   The mode plays on levels 1, 10 and 100. Screenshots go to tools/shots/charge-*.png. Prints ALL OK or the number FAILED.
   The machine may be slow (frames are few): the checks step the game by calling its tick directly where timing matters. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var repo = path.join(__dirname, ".."), shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", mp3: "audio/mpeg", webp: "image/webp", svg: "image/svg+xml", glb: "model/gltf-binary" };
var srv = http.createServer(function (req, res) {
  var f = path.join(repo, decodeURIComponent(url.parse(req.url).pathname));
  if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, function (err, buf) {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": MIME[f.split(".").pop()] || "application/octet-stream" }); res.end(buf);
  });
});

/* in-page helpers, installed once: quiet() stops every hazard, step() runs the mode's tick on the game's own clock */
function helpers() {
  window.__cg = {
    quiet: function () {
      var s = SolScene, B = s.cg, P = B.P;
      P.fireMs = 1e9; B.volleyCd = 1e9; P.rocks = 1e-9; B.rockCd = 1e12; P.ridge = 1e-9; B.ridgeCd = 1e12; P.swap = 0; P.weave = 0;
      B.riders.forEach(function (r) { r.aim = null; });
      B.foes = []; B.glints = []; B.shots = [];
      B.rocks.forEach(function (o) { try { o.spr.destroy(); } catch (e) {} }); B.rocks = [];
      B.follow = null; B.tz = null; B.tx = null; B.reloadMs = 0; B.ammo = 12; B.cd = 0; B.armed = true;
      B.lpx = s.ptr.x; B.lpy = s.ptr.y; s.ptr.down = false;   /* a mouse resting on the canvas does not steer */
      s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
      ["UP", "DOWN", "LEFT", "RIGHT", "W", "A", "S", "D", "SPACE"].forEach(function (k) { s.keys[k].isDown = false; });
    },
    step: function (secs, inp) {
      var s = SolScene, n = Math.round(secs / 0.02);
      for (var i = 0; i < n; i++) {
        if (s.ended || s._finishing) break;
        s.tick_charge(0.02, Object.assign({ ax: 0, ay: 0, fire: false, ptr: null }, inp || {}), 20);
        s.tickTimers(20);
      }
    },
    /* every rider but r rides far off to the right, out of the way */
    clear: function (r) { SolScene.cg.riders.forEach(function (o) { if (o !== r && (o.state === "ride" || o.state === "dead")) o.x = SolScene.W + 3000; }); },
    rider: function (L) { return SolScene.chargeRiderOf(L); }
  };
}

(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var errors = [], foreign = [], fails = [];
  function watch(page, tag) {
    page.on("response", function (r) { if (r.status() === 404 && !/favicon/.test(r.url())) console.log(tag + " 404 " + r.url() + (/content1(1[4-9]|20)\.js/.test(r.url()) ? " (another movie's content, not written yet: ignored)" : "")); });
    page.on("pageerror", function (e) {
      var where = String(e.stack || "");
      /* another game's file still being written by someone else (a script that does not parse yet) is not this mode's error */
      if (/^SyntaxError/.test(where) && !/mode-charge|modes\.js|game\.js|lit\.js/.test(where)) { foreign.push(tag + " " + e.message); return; }
      errors.push(tag + " pageerror: " + e.message + " " + where.split("\n").slice(1, 3).join(" "));
    });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|404/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  /* ── the dev page, as the Lit and Film build: Westerns, then True Grit ── */
  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png"), timeout: 180000 }); }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build (the Lit and Film card is on the title screen)");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-genre="WESTERN"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="charge"]');
    return c ? { text: c.textContent, visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && /True Grit/.test(card.text) && /Reins in His Teeth/.test(card.text), "the True Grit card (game: Reins in His Teeth) shows on the Westerns screen: " + JSON.stringify(card && card.text.slice(0, 90)));
  await page.click('#skill-packs .card[data-gamemode="charge"]');
  var picked = await page.evaluate(function () {
    return { only: SolModes.only, def: !!SolModes.MODES.charge, l1: SolModes.modeFor(1).id, l10: SolModes.modeFor(10).id, l55: SolModes.modeFor(55).id, l100: SolModes.modeFor(100).id,
      mix: SolLit.mixModes("WESTERN", SolModes.MODES).indexOf("charge") !== -1 };
  });
  check(picked.only === "charge" && picked.def && picked.l1 === "charge" && picked.l10 === "charge" && picked.l55 === "charge" && picked.l100 === "charge" && picked.mix,
    "picking True Grit plays Reins in His Teeth on every level, and the Westerns mix includes it: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 30000 }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  await page.evaluate(helpers);

  async function gotoLevel(n, keepOpen) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "TRUEGRIT", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.cg && s.claim && s.readOpen; }, n, { timeout: 40000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, strand: s.strand, act: document.getElementById("btn-action").textContent, episode: s.claim && s.claim.episode,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    if (keepOpen) return info;
    await closeReading();
    return info;
  }
  /* the next question's reading pop-up (slow machines: wait for the game, not the wall clock), then play */
  async function closeReading() {
    await page.waitForFunction(function () { var s = window.SolScene, g = document.getElementById("read-go"); return s && !s._between && s.readOpen && g && g.offsetParent; }, null, { timeout: 120000 }).catch(function () {});
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 60000 }).catch(function () {});
  }

  /* ── level 1: the reading pop-up ── */
  var l1 = await gotoLevel(1, true);
  await shot("charge-00-reading");
  check(l1.key === "mode" && l1.mode === "charge" && l1.act === "FIRE" && l1.strand === "TRUEGRIT", "level 1 runs Reins in His Teeth in the mode scene with a FIRE button: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act, strand: l1.strand, episode: l1.episode }));
  check(/Reins in His Teeth/.test(l1.card) && /charge level/.test(l1.card) && /Controls:/.test(l1.card) && /Space, FIRE/.test(l1.card) && /Lives:/.test(l1.card) && /wanted poster/.test(l1.hint),
    "the reading pop-up names the game, says how it plays and gives its controls: " + l1.card.slice(0, 140) + "…");
  await closeReading();

  /* the scripted run */
  var run = await page.evaluate(function () {
    var s = SolScene, B = s.cg, H = __cg, o = {};
    H.quiet();
    var need = s.need.slice(), letters = s.choiceLetters();
    o.riders = B.riders.length; o.letters = letters.join("");
    o.posters = B.riders.map(function (r) { return r.label.text; }).sort().join("");
    o.lanes = B.riders.map(function (r) { return +r.z.toFixed(2); });
    o.need = need.join("");
    return o;
  });
  check(run.riders === run.letters.length && run.riders >= 3 && run.posters === run.letters.split("").sort().join(""), "one outlaw for every answer letter, the letter on his wanted poster: " + JSON.stringify(run));

  /* the keys: ▲ rides up the meadow (further off), S down, ▶ spurs on */
  async function keyMoves(key, field, sign) {
    var v0 = await page.evaluate(function (f) { __cg.quiet(); __cg.clear(null); return SolScene.cg[f]; }, field);
    await page.keyboard.down(key);
    await page.waitForFunction(function (a) { var v = SolScene.cg[a.f]; return a.sg < 0 ? v < a.v0 - 0.03 * (a.f === "rx" ? 100 : 1) : v > a.v0 + 0.03 * (a.f === "rx" ? 100 : 1); }, { f: field, v0: v0, sg: sign }, { timeout: 40000 }).catch(function () {});
    await page.keyboard.up(key);
    var v1 = await page.evaluate(function (f) { return SolScene.cg[f]; }, field);
    return +(v1 - v0).toFixed(3);
  }
  await page.evaluate(function () { SolScene.cg.rz = 0.5; SolScene.cg.rx = (SolScene.cg.xMin + SolScene.cg.xMax) / 2; });
  var keys = { up: await keyMoves("ArrowUp", "rz", -1), s: await keyMoves("KeyS", "rz", 1), right: await keyMoves("ArrowRight", "rx", 1), a: await keyMoves("KeyA", "rx", -1) };
  check(keys.up < -0.03 && keys.s > 0.03 && keys.right > 3 && keys.a < -3, "▲ / S steer up and down the meadow, ▶ / A spur on and rein in: " + JSON.stringify(keys));

  /* Space fires both guns */
  await page.evaluate(function () { __cg.quiet(); __cg.clear(null); window.__f0 = SolScene.cg.fired; window.__s0 = SolScene.cg.shots.length; });
  await page.keyboard.down("Space");
  await page.waitForFunction(function () { return SolScene.cg.fired > window.__f0; }, null, { timeout: 40000 }).catch(function () {});
  var space = await page.evaluate(function () { var B = SolScene.cg; return { fired: B.fired - window.__f0, pair: B.shots.length >= 2 }; });
  await page.keyboard.up("Space");
  check(space.fired >= 1 && space.pair, "Space fires both guns (two shots fly): " + JSON.stringify(space));

  /* the on-screen FIRE button */
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  await page.evaluate(function () { __cg.quiet(); __cg.clear(null); window.__f1 = SolScene.cg.fired; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.cg.fired > window.__f1; }, null, { timeout: 40000 }).catch(function () {});
  await page.mouse.up();
  var button = await page.evaluate(function () { return SolScene.cg.fired - window.__f1; });
  check(button >= 1, "holding the on-screen FIRE button fires: " + button);

  /* the mouse: point at an outlaw's poster and the marshal rides level with him; a click fires */
  var target = await page.evaluate(function () {
    var s = SolScene, B = s.cg, H = __cg; H.quiet();
    var r = B.riders.filter(function (q) { return q.state === "ride"; }).sort(function (a, b) { return Math.abs(b.z - B.rz) - Math.abs(a.z - B.rz); })[0];
    B.riders.forEach(function (q, i) { if (q.state === "ride") q.x = s.W * 0.62 + (q === r ? 0 : 3000); });
    H.step(0.04);
    var cr = s.game.canvas.getBoundingClientRect();
    return { letter: r.letter, z: r.z, rz: B.rz, x: cr.left + r.px * cr.width / s.W, y: cr.top + r.py * cr.height / s.H, x2: cr.left + s.W * 0.3 * cr.width / s.W, y2: cr.top + (r.z > 0.5 ? 0.45 : 0.85) * s.H * cr.height / s.H };
  });
  await page.mouse.move(target.x - 40, target.y - 40); await page.waitForTimeout(150);
  await page.mouse.move(target.x, target.y, { steps: 3 });
  await page.waitForFunction(function (L) { var B = SolScene.cg; return B.follow && B.follow.letter === L; }, target.letter, { timeout: 90000 }).catch(function () {});
  var mouse = await page.evaluate(function (L) {
    var B = SolScene.cg; __cg.step(1.2);   /* the game's clock: 1.2 seconds of riding toward him */
    return { follow: B.follow ? B.follow.letter : null, rz: +B.rz.toFixed(3), z: +SolScene.chargeRiderOf(L).z.toFixed(3) };
  }, target.letter);
  /* point at open grass: he rides level with that spot */
  await page.mouse.move(target.x2, target.y2, { steps: 3 });
  await page.waitForFunction(function () { return !SolScene.cg.follow && SolScene.cg.tz != null; }, null, { timeout: 90000 }).catch(function () {});
  var low = await page.evaluate(function () { var B = SolScene.cg; __cg.step(1.2); return { rz: +B.rz.toFixed(3), want: +SolScene.chargeZAt(SolScene.ptr.y).toFixed(3), follow: !!B.follow }; });
  mouse.low = low;
  await page.evaluate(function () { __cg.clear(null); window.__f2 = SolScene.cg.fired; SolScene.cg.cd = 0; });
  await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.ptr.down || SolScene.cg.fired > window.__f2; }, null, { timeout: 90000 }).catch(function () {});
  await page.evaluate(function () { var s = SolScene; if (s.cg.fired === window.__f2) __cg.step(0.1, s.readInput()); });   /* the click, read the game's own way */
  await page.mouse.up();
  mouse.click = await page.evaluate(function () { return SolScene.cg.fired - window.__f2; });
  check(mouse.follow === target.letter && Math.abs(mouse.rz - mouse.z) < 0.03 && !low.follow && Math.abs(low.rz - low.want) < 0.03 && Math.abs(low.rz - mouse.rz) > 0.1 && mouse.click >= 1, "pointing at an outlaw's poster rides level with him, pointing at the grass rides there, a click fires: " + JSON.stringify(mouse));
  await page.mouse.move(abox.x, abox.y - 200);

  var run2 = await page.evaluate(function () {
    var s = SolScene, B = s.cg, H = __cg, o = {};
    H.quiet();
    var need = s.need.slice(), letters = s.choiceLetters(), wrongs = letters.filter(function (L) { return need.indexOf(L) === -1; });
    function park(r, dx) { H.clear(r); r.x = B.rx + (dx || 320) * B.k; r.hit = false; B.rz = r.z; B.pz = r.z; B.rvz = 0; }
    /* the rider in the sights lights up (level 1) */
    var w = H.rider(wrongs[0]); park(w); H.step(0.04);
    o.sights = B.sights === B.riders.indexOf(w);
    /* a shot that passes well above or below a rider misses him */
    B.rz = w.z > 0.5 ? w.z - 0.25 : w.z + 0.25; s.chargeFire(); H.step(0.9);
    o.miss = { strikes: s.strikes, state: w.state, score: s.score };
    /* the wrong rider: a life, and his poster is stamped with a cross */
    H.quiet(); park(w); var sc0 = s.score;
    s.chargeFire(); H.step(0.6);
    o.wrong = { strikes: s.strikes, score: s.score - sc0, state: w.state, stamp: w.stamp.text, label: s._lastHitLabel };
    /* shooting him again costs nothing more */
    s.iframeMs = 0; B.cd = 0; s.chargeFire(); H.step(0.6);
    o.again = s.strikes;

    /* hazard 1: an outlaw levels his gun (the dotted line), fires, and the bullet costs a life ... */
    H.quiet(); var g = H.rider(wrongs[1] || wrongs[0]); H.clear(g); g.x = B.rx + 420 * B.k; g.state = "ride"; B.rz = Math.abs(g.z - 0.5) < 0.2 ? 0.05 : 0.5;
    var A = s.chargeAim(g, 0); H.step(B.P.warnMs / 1000 * 0.5);
    o.aim = { pose: g.rider.texture.key, aiming: !!g.aim, foes: B.foes.length };
    H.step(B.P.warnMs / 1000 * 0.5 + 0.1);
    o.aim.fired = B.foes.length;
    H.step(3.5);
    o.shot = { strikes: s.strikes, label: s._lastHitLabel };
    /* ... and riding out of the line of fire dodges it */
    H.quiet(); H.clear(g); g.x = B.rx + 420 * B.k; var z0 = B.rz;
    s.chargeEnemyShot(g, B.rz, B.rx); H.step(0.2);
    H.step(0.5, { ay: z0 > 0.5 ? -1 : 1 });
    H.step(3);
    o.dodge = { strikes: s.strikes, moved: +Math.abs(B.rz - z0).toFixed(2), foes: B.foes.length };

    /* hazard 2: riding into an outlaw's horse ... */
    H.quiet(); var c = H.rider(wrongs[1] || wrongs[0]); park(c, 140); H.step(2.5);
    o.ram = { strikes: s.strikes, label: s._lastHitLabel };
    /* ... and steering into the gap */
    H.quiet(); park(c, 140); B.rz = c.z > 0.5 ? c.z - 0.2 : c.z + 0.2; H.step(2.5);
    o.gap = { strikes: s.strikes, passed: c.x < B.rx };

    /* hazard 3: a rock and a gopher hole in the grass ... */
    H.quiet(); H.clear(null); B.rz = 0.5;
    s.chargeAddRock("rock", 0.5); H.step(7);
    o.rock = { strikes: s.strikes, label: s._lastHitLabel };
    H.quiet(); s.chargeAddRock("hole", 0.5); H.step(7);
    o.hole = { strikes: s.strikes, label: s._lastHitLabel };
    /* ... steered round */
    H.quiet(); s.chargeAddRock("rock", 0.5); s.chargeAddRock("hole", 0.5); B.rz = 0.75; H.step(7);
    o.round = { strikes: s.strikes, left: B.rocks.length };

    /* hazard 4: the rifleman on the ridge: a glint, a ring of dust, the shot ... */
    H.quiet(); var sn = s.chargeSnipe(B.rx, B.rz); H.step(sn.warn / 1000 * 0.6);
    o.ring = { glints: B.glints.length, fired: sn.fired, strikes: s.strikes };
    H.step(sn.warn / 1000 * 0.5 + 0.1);
    o.ridge = { strikes: s.strikes, label: s._lastHitLabel };
    /* ... and riding out of the ring */
    H.quiet(); sn = s.chargeSnipe(B.rx, B.rz); H.step(0.3); H.step(0.5, { ay: B.rz > 0.5 ? -1 : 1 }); H.step(sn.warn / 1000);
    o.outOfRing = { strikes: s.strikes, fired: sn.fired };

    /* the right rider: he tumbles out of the saddle, the answer scores and pays coins */
    H.quiet(); var r = H.rider(need[0]); park(r); sc0 = s.score; var coins = s.nightCoins;
    s.chargeFire(); H.step(0.6);
    if (need.length > 1) { var r2 = H.rider(need[1]); s.iframeMs = 0; park(r2); B.cd = 0; s.chargeFire(); H.step(0.6); }
    o.right = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins, state: r.state, fallers: B.fallers.length, between: s._between || s._finishing };
    return o;
  });
  console.log("run2", JSON.stringify(run2));
  check(run2.sights, "the outlaw in the marshal's sights lights up (level 1)");
  check(run2.miss.strikes === 0 && run2.miss.score === 0 && run2.miss.state === "ride", "a shot that passes above or below an outlaw misses him: " + JSON.stringify(run2.miss));
  check(run2.wrong.strikes === 1 && run2.wrong.score === 0 && run2.wrong.state === "dead" && run2.wrong.stamp === "✕" && /WRONG LETTER/.test(run2.wrong.label || "") && run2.again === 1,
    "shooting the outlaw with a wrong letter costs a life and stamps his poster with a cross; shooting him again costs nothing: " + JSON.stringify(run2.wrong) + " again: " + run2.again);
  check(/-aim/.test(run2.aim.pose) && run2.aim.aiming && run2.aim.foes === 0 && run2.aim.fired >= 1 && run2.shot.strikes === 1 && /SHOT BY AN OUTLAW/.test(run2.shot.label || ""),
    "an outlaw levels his gun (a warning), then fires; his bullet costs a life: " + JSON.stringify({ aim: run2.aim, shot: run2.shot }));
  check(run2.dodge.strikes === 0 && run2.dodge.moved > 0.2 && run2.dodge.foes === 0, "riding out of the line of fire dodges the bullet: " + JSON.stringify(run2.dodge));
  check(run2.ram.strikes === 1 && /RIDDEN DOWN/.test(run2.ram.label || "") && run2.gap.strikes === 0 && run2.gap.passed, "riding into an outlaw's horse costs a life; steering into the gap lets him pass: " + JSON.stringify({ ram: run2.ram, gap: run2.gap }));
  check(run2.rock.strikes === 1 && /ROCK/.test(run2.rock.label || "") && run2.hole.strikes === 1 && /GOPHER HOLE/.test(run2.hole.label || "") && run2.round.strikes === 0 && run2.round.left === 0,
    "a rock or a gopher hole under the horse costs a life; steering round them doesn't: " + JSON.stringify({ rock: run2.rock, hole: run2.hole, round: run2.round }));
  check(run2.ring.glints === 1 && !run2.ring.fired && run2.ring.strikes === 0 && run2.ridge.strikes === 1 && /RIDGE/.test(run2.ridge.label || "") && run2.outOfRing.strikes === 0 && run2.outOfRing.fired,
    "the rifleman on the ridge: a glint and a ring of dust first, then a shot that costs a life; riding out of the ring dodges it: " + JSON.stringify({ ring: run2.ring, ridge: run2.ridge, out: run2.outOfRing }));
  check(run2.right.score === 1 && run2.right.strikes === 0 && run2.right.coins && run2.right.state === "found" && run2.right.fallers >= 1, "shooting the outlaw with the right letter knocks him out of the saddle, answers the question and pays coins: " + JSON.stringify(run2.right));

  /* the next question: its reading pop-up, then Select TWO */
  await closeReading();
  var two = await page.evaluate(function () {
    var s = SolScene, B = s.cg, H = __cg, o = {};
    H.quiet();
    o.fresh = { riders: B.riders.length, live: B.riders.every(function (r) { return r.state === "ride"; }), letters: B.riders.map(function (r) { return r.label.text; }).join("") };
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    function park(r) { H.clear(r); r.x = B.rx + 320 * B.k; B.rz = r.z; }
    var a = H.rider(pair[0]); park(a); s.chargeFire(); H.step(0.6);
    o.first = { score: s.score - sc0, state: a.state, found: s.extracted.join(""), strikes: s.strikes, evidence: (document.getElementById("evidence") || {}).textContent || "" };
    var b = H.rider(pair[1]); park(b); B.cd = 0; s.chargeFire(); H.step(0.6);
    o.second = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins, state: b.state };
    return o;
  });
  console.log("two", JSON.stringify(two));
  check(two.fresh.live && two.fresh.riders >= 3, "a new question brings a fresh line of outlaws: " + JSON.stringify(two.fresh));
  check(two.first.score === 0 && two.first.state === "found" && two.first.found.length === 1 && two.first.strikes === 0 && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right outlaws: the first is knocked down, the second answers it: " + JSON.stringify(two));

  /* the early picture: the marshal fires both guns at an outlaw while another levels his gun at him */
  await closeReading();
  async function action(name, opts) {
    await page.evaluate(function (opts) {
      var s = SolScene, B = s.cg, H = __cg; s.iframeMs = 0; s.spareLives = 99;
      var P0 = Object.assign({}, B.P);
      H.quiet(); s.spareLives = 99;
      H.step(opts.ride || 4, { ay: 0 });
      var live = B.riders.filter(function (r) { return r.state === "ride" && r.x < s.W - 60; });
      if (!live.length) { B.riders.forEach(function (r, i) { if (r.state === "ride") r.x = s.W * (0.62 + 0.09 * (i % 3)); }); live = B.riders.filter(function (r) { return r.state === "ride"; }); }
      var wrong = live.filter(function (r) { return s.need.indexOf(r.letter) === -1; });
      var tgt = wrong[0] || live[0], gun = live.filter(function (r) { return r !== tgt; })[0];
      if (opts.rocks) { s.chargeAddRock("rock", 0.86).x = s.W * 0.7; s.chargeAddRock("hole", 0.22).x = s.W * 0.55; }
      for (var i = 0; i < 40; i++) { B.rz += Math.max(-0.02, Math.min(0.02, tgt.z - B.rz)); H.step(0.02); }
      if (gun) { gun.x = Math.max(gun.x, B.rx + 260 * B.k); s.chargeAim(gun, 0); }
      if (opts.snipe) { s.chargeSnipe(B.rx + 40 * B.k, Math.min(1, B.rz + 0.18)).t = 400; }
      if (opts.foe && gun) s.chargeEnemyShot(gun, B.rz + 0.1, B.rx);
      H.step(0.25);
      B.cd = 0; tgt.x = Math.max(tgt.x, B.rx + 380 * B.k); s.chargeFire(); H.step(0.1);
      s.scene.pause();
      window.__P0 = P0;
    }, opts || {});
    await page.waitForTimeout(600);
    await shot(name);
    await page.evaluate(function () { SolScene.scene.resume(); });
  }
  await action("charge-01-level1", { ride: 4 });

  /* ── the difficulty: every level 2-100 harder than the one before, never easier on any setting ── */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.charge.params, s = SolScene, out = { same: typeof s.chargeParams === "function" && JSON.stringify(s.chargeParams(50)) === JSON.stringify(f(50)) };
    var up = ["approach", "ground", "weave", "weaveSpd", "shooters", "bulletSpd", "lead", "rocks", "reload", "swap", "ridge", "burst"], down = ["fireMs", "warnMs", "hitZ", "glow"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    out.news = SolModes.MODES.charge.news.length;
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l50: ramp.l50, l100: ramp.l100 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0 && ramp.news === 10, "chargeParams (on the def as params): every level 2-100 is harder than the one before and never easier, with a news line for every tier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat, news: ramp.news }));
  var e = ramp.l1, z = ramp.l100;
  check(e.shooters === 1 && e.rocks === 0 && e.ridge === 0 && e.lead === 0 && e.reload === 0 && e.glow === 1 && e.warnMs >= 1300 && e.fireMs >= 3400 && e.bulletSpd <= 240 && e.approach <= 75,
    "level 1 is gentle: one outlaw shoots at a time, slowly, with a long warning; no rocks, no ridge, no reload; the rider in your sights lights up: " + JSON.stringify(e));
  check(z.shooters === 4 && z.burst === 2 && z.rocks > 0.5 && z.ridge > 0.2 && z.lead === 1 && z.reload > 1400 && z.glow === 0 && z.warnMs <= 460 && z.bulletSpd >= 620 && z.swap > 0.1,
    "level 100 is intense: four outlaws shoot two-shot bursts that lead you, rocks, the ridge rifleman, reloads, riders swapping places, no glow: " + JSON.stringify(z));

  /* ── level 10, 50 and 100: it plays, the right outlaw scores, the card says what's new ── */
  async function playRight(n) {
    return page.evaluate(function () {
      var s = SolScene, B = s.cg, H = __cg; H.quiet();
      var r = H.rider(s.need[0]); H.clear(r); r.x = B.rx + 320 * B.k; B.rz = r.z; var sc0 = s.score;
      s.chargeFire(); H.step(0.6);
      return { mode: s.mode.id, tier: s.tier, score: s.score - sc0, strikes: s.strikes, P: { approach: B.P.approach, shooters: B.P.shooters } };
    });
  }
  var l10 = await gotoLevel(10);
  var p10 = await playRight(10);
  check(l10.mode === "charge" && p10.score === 1 && p10.strikes === 0 && p10.tier === 0, "level 10 plays Reins in His Teeth and the right outlaw scores: " + JSON.stringify(p10));

  var l50 = await gotoLevel(50);
  check(l50.mode === "charge" && l50.tier === 4 && /New this time:.*swap places/.test(l50.card), "level 50: the card says what's new (riders swap places): " + l50.card.slice(-160));
  var s50 = await page.evaluate(function () { var P = SolScene.cg.P; return { swap: P.swap, reload: P.reload, rocks: P.rocks, lead: P.lead }; });
  check(s50.swap > 0 && s50.reload > 0 && s50.rocks > 0 && s50.lead > 0, "level 50 has swaps, reloads, rocks and leading shots: " + JSON.stringify(s50));
  /* six shots in each gun: after twelve, a reload */
  var reload = await page.evaluate(function () {
    var s = SolScene, B = s.cg, H = __cg, o = {}; H.quiet();
    var P = B.P, fired = 0; P.reload = 900; B.ammo = 12;
    for (var i = 0; i < 9; i++) { B.cd = 0; if (B.reloadMs <= 0) { s.chargeFire(); fired++; } }
    o.fired = fired; o.reloading = B.reloadMs > 0; o.ammo = B.ammo;
    B.cd = 0; var f0 = B.fired; H.step(0.1, { fire: true }); o.blocked = B.fired === f0;
    H.step(1.0); o.after = B.ammo;
    return o;
  });
  check(reload.fired === 6 && reload.reloading && reload.ammo === 0 && reload.blocked && reload.after === 12, "level 50: twelve shots (six pairs), then the marshal reloads and can't fire until he has: " + JSON.stringify(reload));
  await action("charge-02-level50", { ride: 3, rocks: true });

  var l100 = await gotoLevel(100);
  var p100 = await playRight(100);
  check(l100.mode === "charge" && l100.tier === 9 && /New this time:.*last charge/.test(l100.card) && p100.score === 1 && p100.P.shooters === 4, "level 100 plays the last charge (the card says so) and the right outlaw scores: " + JSON.stringify(p100));
  await closeReading();
  await action("charge-03-level100", { ride: 2.5, rocks: true, snipe: true, foe: true });

  /* losing: the last life ends the level with a Retry */
  await page.evaluate(function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    __cg.quiet(); s.strikes = s.needStrikes - 1;
    s.answerWrong("Z", "WRONG LETTER");
  });
  await page.waitForFunction(function () { return SolScene.ended && !document.getElementById("overlay").classList.contains("hidden"); }, null, { timeout: 120000 }).catch(function () {});
  await page.waitForTimeout(500);
  var lose = await page.evaluate(function () {
    var s = SolScene;
    return { ended: s.ended, title: document.getElementById("win-title").textContent, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Reins in His Teeth/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 200));
  await ctx.close();

  /* ── the 500-pixel-tall Canvas frame ── */
  var ctx2 = await browser.newContext({ viewport: { width: 1000, height: 500 } });
  await ctx2.addInitScript(function () { window.SOL_STATE = "LIT"; });
  page = await ctx2.newPage();
  watch(page, "canvas500");
  await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(900);
  await page.click('#title-screen .card[data-family="LIT"]'); await page.waitForTimeout(300);
  await page.click('#mode-packs .card[data-genre="WESTERN"]'); await page.waitForTimeout(300);
  await page.click('#skill-packs .card[data-gamemode="charge"]');
  await page.click("#btn-skill-start"); await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 30000 }).catch(function () {});
  for (i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  await page.evaluate(helpers);
  await gotoLevel(35);
  var small = await page.evaluate(function () {
    var s = SolScene, B = s.cg, pad = s.chargePadBox();
    var sc = s.chargeS(1), y = B.zy(1);
    return { W: s.W, H: s.H, k: B.k, xMin: B.xMin, pad: pad && { x1: Math.round(pad.x1), y0: Math.round(pad.y0) },
      clearOfPad: !pad || B.xMin - 75 * sc >= pad.x1 - 4, nearRider: Math.round(y - 150 * sc), ground: Math.round(B.yNear), horizon: B.yH };
  });
  await action("charge-04-canvas500", { ride: 3, rocks: true });
  check(small.H <= 500 && small.clearOfPad && small.nearRider > 0 && small.horizon > 60, "in the 500-pixel-tall Canvas frame the meadow fits and the marshal stays clear of the on-screen pad: " + JSON.stringify(small));
  await ctx2.close();

  console.log("errors:", errors.length ? errors : "none");
  if (foreign.length) console.log("ignored (other games' files still being written):", foreign);
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
