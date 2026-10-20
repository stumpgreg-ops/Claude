/* Headless test of the Lit and Film mode "speeder" (Forest Chase, Return of the Jedi; js/mode-speeder.js):
   node tools/smoke-mode-speeder.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Science Fiction, then Return of the Jedi, and drives the mode through the scene's own methods (the game logic
   runs on a fixed 60 fps step, tick_speeder, so the checks don't depend on how fast the machine draws): the right
   letter scores, a wrong letter costs a life, each hazard (a trunk, a scout's bolt, a fallen log, a swinging log trap)
   costs a life and can be avoided, Select TWO needs both, a gunner knocked down pays a bonus, the blaster overheats,
   the keys, the mouse and the FIRE button work, the difficulty climbs every level 2-100, the reading pop-up names the
   game and its controls, levels 1, 10 and 100 play, and the 500-pixel-tall frame lays out. Screenshots go to
   tools/shots/speeder-*.png. Prints ALL OK or the number FAILED. Other movies' content files (content114-120) may
   be missing while they are written: their 404s are ignored. */
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
var OPTIONAL = /content1(1[4-9]|20)\.js/;   /* other movies' question files, possibly still being written */

(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var errors = [], fails = [];
  function watch(page, tag) {
    page.on("response", function (r) { if (r.status() === 404 && !OPTIONAL.test(r.url())) console.log(tag + " 404 " + r.url()); });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text(), loc = (m.location && m.location().url) || "";
      if (/Failed to load resource/.test(t) && OPTIONAL.test(loc)) return;
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|requestFullscreen/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  /* ── the dev page, as the Lit and Film build ── */
  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  page.setDefaultTimeout(180000);   /* a shared, busy test machine draws slowly */
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png") }); }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build (its card is on the title screen)");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector('#mode-packs .card[data-genre="SCIFI"]');
  await page.click('#mode-packs .card[data-genre="SCIFI"]');
  await page.waitForSelector('#skill-packs .card[data-gamemode="speeder"]');
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="speeder"]');
    return c ? { text: c.textContent.replace(/\s+/g, " ").trim(), visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && /Return of the Jedi/.test(card.text) && /Forest Chase/.test(card.text), "the Return of the Jedi card shows its game, Forest Chase: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="speeder"]');
  var picked = await page.evaluate(function () {
    return { only: SolModes.only, def: !!SolModes.MODES.speeder, l1: SolModes.modeFor(1).id, l10: SolModes.modeFor(10).id, l55: SolModes.modeFor(55).id, l100: SolModes.modeFor(100).id };
  });
  check(picked.only === "speeder" && picked.def && picked.l1 === "speeder" && picked.l10 === "speeder" && picked.l55 === "speeder" && picked.l100 === "speeder", "picking Return of the Jedi plays Forest Chase on every level: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  async function gotoLevel(n) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "JEDI", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.sp && s.claim && s.readOpen; }, n, { timeout: 240000, polling: 250 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    await goRead();
    return info;
  }
  async function goRead() {
    await page.waitForFunction(function () { var g = document.getElementById("read-go"); return SolScene.readOpen && !SolScene._between && g && g.offsetParent; }, null, { timeout: 240000, polling: 250 }).catch(function () {});
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 60000, polling: 250 }).catch(function () {});
    await page.waitForTimeout(200);
  }
  /* the in-page helpers: a fixed-step simulation and a quiet field for each check */
  var HELP = function () {
    var s = SolScene, S = s.sp;
    window.T = {
      sim: function (sec, inp, stop) {
        inp = inp || {};
        for (var i = 0; i < Math.round(sec * 60); i++) {
          s.tickTimers(16.7);
          if (s._finishing) break;
          s.tick_speeder(1 / 60, { ax: inp.ax || 0, ay: inp.ay || 0, fire: !!inp.fire, ptr: null }, 16.7);
          if (stop && stop()) break;
        }
      },
      quiet: function () {
        var P = S.P;
        P.fireMs = 1e9; S.packCd = 1e9; S.bolts.length = 0; P.trees = 0; P.jink = 0; S.nextLogZ = 1e12; S.nextTrapZ = 1e12;
        S.trees.slice().forEach(function (t) { if (!t.deco && Math.abs(t.x) < 6.4) s.speederFreeTree(t); });
        S.logs.forEach(function (lg) { [lg.L, lg.R, lg.eL, lg.eR].forEach(function (o) { o.destroy(); }); }); S.logs.length = 0;
        S.traps.forEach(function (tp) { tp.img.destroy(); }); S.traps.length = 0;
        S.scouts.forEach(function (sc) { sc.charge = 0; sc.jinkCd = 99; sc.jinkT = 0; });
        s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
        S.mouseOn = false; S.heat = 0; S.over = false; S.pvx = 0; S.px = 0; S.spd = P.speed;
        ["LEFT", "RIGHT", "UP", "DOWN", "A", "D", "W", "S", "SPACE"].forEach(function (k) { s.keys[k].isDown = false; });
      },
      scout: function (L) { return S.scouts.filter(function (sc) { return sc.letter === L && (sc.state === "ride" || sc.state === "enter"); })[0]; },
      /* park a scout beside the bike (side +1: on the right) with a trunk ahead on that side to crash into */
      along: function (sc, side) {
        sc.state = "ride"; sc.z = S.pz + 0.3; sc.x = S.px + side * 1.35; sc.lead = 0.3; sc.amp = 0; sc.jinkCd = 99; sc.vx = 0;
        return s.speederTree(S.px + side * 3.3, S.pz + 14, 1, false);
      },
      /* steer into it until it has crashed */
      bump: function (sc, side) {
        var t = T.along(sc, side);
        T.sim(1.2, { ax: side }, function () { return sc.state !== "ride"; });
        T.sim(4, null, function () { return S.scouts.indexOf(sc) === -1; });
        return { gone: S.scouts.indexOf(sc) === -1, burnt: !!t.burnt || S.trees.some(function (q) { return q.burnt; }) };
      }
    };
    return true;
  };
  async function help() { await page.evaluate(HELP); }

  var l1 = await gotoLevel(1);
  check(l1.key === "mode" && l1.mode === "speeder" && l1.act === "FIRE", "level 1 runs Forest Chase in the mode scene with a FIRE button: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act }));
  check(/Forest Chase/.test(l1.card) && /chase level/.test(l1.card) && /Controls:/.test(l1.card) && /steer/.test(l1.card) && /FIRE/.test(l1.card) && /Knock the scout bike/.test(l1.hint),
    "the reading pop-up names the game, explains it and lists its controls: " + l1.card.slice(0, 140) + "…");
  await help();

  /* level 1: the picture (the forest as it comes, the scouts spread out ahead) */
  await page.evaluate(function () {
    var s = SolScene, S = s.sp; s.iframeMs = 1e9; s.spareLives = 9; s.blink = function (spr) { if (spr) spr.setAlpha(1); }; S.P.fireMs = 1e9; S.packCd = 1e9;
    for (var i = 0; i < 16; i++) { var d = s.speederPathAt(S.pz + 2 + S.spd * 0.25) - S.px; T.sim(0.25, { ax: d > 0.15 ? 1 : d < -0.15 ? -1 : 0 }); }
    var L = S.scouts.filter(function (sc) { return sc.letter; });
    L.forEach(function (sc, i) { sc.state = "ride"; sc.z = S.pz + 8 + i * 3.4; sc.x = S.px + [-2.4, 1.8, -0.5, 3.2][i % 4]; });
    var g = S.scouts.filter(function (sc) { return sc.kind === 2; })[0]; if (g) { g.z = S.pz + 22; g.x = S.px - 3; }
  });
  await page.waitForTimeout(600);
  await shot("speeder-1-level1");
  await page.evaluate(function () { delete SolScene.blink; });   /* (the screenshots hide the safety blink) */

  /* ── the controls, for real: keys, the mouse, the FIRE button ── */
  /* real frames: the busy test machine may draw only a frame every few seconds, so these wait long and ask for little */
  async function realWait(f, arg, ms) { return page.waitForFunction(f, arg, { timeout: ms || 240000, polling: 200 }).then(function () { return true; }).catch(function () { return false; }); }
  await page.evaluate(function () {
    var S = SolScene.sp; T.quiet(); SolScene.iframeMs = 1e9; window.__x0 = S.px;
    S.scouts.forEach(function (sc) { sc.state = "ride"; sc.z = S.pz + 40; sc.lead = 40; sc.amp = 0; });   /* out of the way while the controls are tried */
  });
  await page.keyboard.down("ArrowRight");
  var keyR = await realWait(function () { return SolScene.sp.px > window.__x0 + 0.4; });
  await page.keyboard.up("ArrowRight");
  await page.evaluate(function () { window.__x0 = SolScene.sp.px; });
  await page.keyboard.down("a");
  var keyL = await realWait(function () { return SolScene.sp.px < window.__x0 - 0.4; });
  await page.keyboard.up("a");
  await page.keyboard.down("ArrowUp");
  var keyUp = await realWait(function () { var S = SolScene.sp; return S.spd > S.P.speed * 1.05 && S.boost > 0; });
  await page.keyboard.up("ArrowUp");
  await page.keyboard.down("s");
  var keyDn = await realWait(function () { var S = SolScene.sp; return S.spd < S.P.speed * 0.95 && S.boost < 0; });
  await page.keyboard.up("s");
  await page.evaluate(function () { window.__s0 = SolScene.sp.shots; });
  await page.keyboard.down("Space");
  var keyFire = await realWait(function () { return SolScene.sp.shots > window.__s0; });
  await page.keyboard.up("Space");
  /* the mouse: point to the right of the bike, on the floor: it steers there; a click fires */
  var cbox = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  await page.evaluate(function () { var S = SolScene.sp; S.px = 0; S.pvx = 0; window.__x0 = S.px; });
  await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y + cbox.h * 0.8);
  await page.mouse.move(cbox.x + cbox.w * 0.85, cbox.y + cbox.h * 0.8, { steps: 4 });
  var mouseR = await realWait(function () { var S = SolScene.sp; return S.mouseOn && S.px > window.__x0 + 0.4; });
  await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y + cbox.h * 0.42, { steps: 3 });
  var mouseUp = await realWait(function () { var S = SolScene.sp; return S.boost > 0; });
  await page.evaluate(function () { window.__s0 = SolScene.sp.shots; SolScene.sp.heat = 0; SolScene.sp.over = false; });
  await page.mouse.down();
  var mouseFire = await realWait(function () { return SolScene.sp.shots > window.__s0; });
  await page.mouse.up();
  /* the on-screen FIRE button */
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  await page.evaluate(function () { window.__s0 = SolScene.sp.shots; SolScene.sp.heat = 0; SolScene.sp.over = false; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  var btnFire = await realWait(function () { return SolScene.sp.shots > window.__s0; });
  await page.mouse.up();
  /* the on-screen pad steers too */
  var pbox = await page.evaluate(function () { var b = document.querySelector('#controls .dpad .w'), r = b && b.getBoundingClientRect(); return r && r.width ? { x: r.left + r.width / 2, y: r.top + r.height / 2 } : null; });
  var padL = null;
  if (pbox) {
    await page.evaluate(function () { var S = SolScene.sp; S.px = 2; S.pvx = 0; window.__x0 = S.px; });
    await page.mouse.move(pbox.x, pbox.y); await page.mouse.down();
    padL = await realWait(function () { return SolScene.sp.px < window.__x0 - 0.4; });
    await page.mouse.up();
  }
  var ctl = { keyR: keyR, keyL: keyL, keyUp: keyUp, keyDn: keyDn, keyFire: keyFire, mouseR: mouseR, mouseUp: mouseUp, mouseFire: mouseFire, btnFire: btnFire, padL: padL };
  check(keyR && keyL && keyUp && keyDn, "◀ ▶ / A D steer, ▲ / W speeds up and ▼ / S slows down: " + JSON.stringify(ctl));
  check(keyFire && mouseFire && btnFire, "Space, a mouse button and the on-screen FIRE button shoot: " + JSON.stringify(ctl));
  check(mouseR && mouseUp, "the bike steers toward the mouse pointer, and pointing far ahead speeds it up: " + JSON.stringify(ctl));
  check(padL !== false, "the on-screen pad steers: " + JSON.stringify(padL));
  await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y + 4);

  /* ── the rules, on the fixed step ── */
  var run = await page.evaluate(function () {
    var s = SolScene, S = s.sp, P = S.P, o = {};
    T.quiet();
    var need = s.need.slice(), letters = s.choiceLetters(), wrongs = letters.filter(function (L) { return need.indexOf(L) === -1; });
    o.letters = letters.join(""); o.need = need.join("");
    o.scouts = S.scouts.filter(function (sc) { return sc.letter; }).map(function (sc) { return sc.letter + "=" + sc.label.text; }).join(" ");
    o.gunners = S.scouts.filter(function (sc) { return sc.kind === 2; }).length;
    /* the scouts come in and ride ahead of you, and the forest goes by */
    T.sim(4);
    o.ahead = S.scouts.filter(function (sc) { return sc.letter && sc.state === "ride" && sc.z > S.pz; }).length;
    o.dist = Math.round(S.pz);
    T.quiet();
    /* a scout that drifts into you just slides off: no bump unless you steer into it */
    var w0 = T.scout(wrongs[0]); T.along(w0, 1); w0.x = S.px + 0.7;
    T.sim(0.3);
    o.drift = { state: w0.state, strikes: s.strikes, there: S.scouts.indexOf(w0) !== -1 };
    /* a wrong letter: steer into it, it crashes into the tree and costs a life; that letter is gone */
    T.quiet(); var sc0 = s.score;
    var bw = T.bump(T.scout(wrongs[0]), 1);
    o.wrong = { gone: bw.gone, burnt: bw.burnt, strikes: s.strikes, score: s.score - sc0, label: s._lastHitLabel, again: !!T.scout(wrongs[0]), crashes: S.crashes, bumps: S.bumps };
    /* a gunner knocked into a tree: a bonus, no life */
    T.quiet(); var coins = s.nightCoins, kills = s.kills;
    var gun = S.scouts.filter(function (sc) { return sc.kind === 2; })[0];
    var bg = gun ? T.bump(gun, -1) : { gone: false };
    o.gunner = { gone: bg.gone, strikes: s.strikes, coins: s.nightCoins - coins, kills: s.kills - kills, wait: S.gunWait.length };
    /* hazards: a trunk in your path costs a life ... */
    T.quiet(); s.speederTree(S.px, S.pz + 6, 1, false);
    T.sim(0.6);
    o.tree = { strikes: s.strikes, label: s._lastHitLabel, hits: S.hits };
    /* ... and steering round it doesn't */
    T.quiet(); s.speederTree(S.px, S.pz + 13, 1, false);
    T.sim(1.0, { ax: 1 });
    o.treeDodge = { strikes: s.strikes, px: +S.px.toFixed(2) };
    /* a scout's bolt: in its path costs a life; out of it, nothing */
    T.quiet(); S.bolts.push({ mine: false, x: S.px, y: 0.9, z: S.pz + 9, vx: 0, aim: S.px, life: 0 });
    T.sim(1.3);
    o.bolt = { strikes: s.strikes, label: s._lastHitLabel, left: S.bolts.length };
    T.quiet(); S.bolts.push({ mine: false, x: S.px, y: 0.9, z: S.pz + 12, vx: 0, aim: S.px, life: 0 });
    T.sim(1.3, { ax: -1 });
    o.boltDodge = { strikes: s.strikes, left: S.bolts.length };
    /* a gunner's gun glows, then fires a bolt back at you, with a red ring where it will pass */
    T.quiet(); gun = S.scouts.filter(function (sc) { return sc.kind === 2; })[0];
    if (!gun) gun = s.speederScout(null, 1, S.pz + 14, 14, 2);
    gun.state = "ride"; gun.z = S.pz + 14; gun.charge = 60;
    T.sim(0.05); var ringDrawn = S.ringG.commandBuffer.length > 0;
    T.sim(0.1);
    o.gun = { bolts: S.bolts.filter(function (b) { return !b.mine; }).length, ring: ringDrawn };
    /* the blaster: a scout takes hp hits, then spins out into a tree */
    T.quiet();
    var w1 = T.scout(wrongs[1]); w1.state = "ride"; w1.z = S.pz + 9; w1.lead = 9; w1.amp = 0; w1.x = S.px; w1.hp = P.hp;
    s.speederTree(S.px + 2.5, S.pz + 22, 1, false); s.speederTree(S.px - 2.5, S.pz + 24, 1, false);
    var hp0 = w1.hp, shots0 = S.shots;
    for (var k = 0; k < P.hp - 1; k++) { w1.x = S.px; s.speederShoot(); T.sim(0.25); }
    o.shotHp = { before: hp0, after: w1.hp, state: w1.state, shots: S.shots - shots0 };
    w1.x = S.px; s.speederShoot(); T.sim(0.2);
    o.shotDown = { state: w1.state };
    T.sim(3, null, function () { return S.scouts.indexOf(w1) === -1; });
    o.shotDown.gone = S.scouts.indexOf(w1) === -1; o.shotDown.strikes = s.strikes; o.shotDown.label = s._lastHitLabel;
    /* holding the trigger overheats the blaster; then it won't fire until it cools (the scouts are armored for this one) */
    T.quiet(); S.scouts.forEach(function (sc) { sc.hp = 1e6; }); T.sim(0.05); var sh0 = S.shots;
    T.sim(3, { fire: true });
    var hot = S.over, n1 = S.shots; T.sim(0.5, { fire: true });
    o.heat = { over: hot, shots: n1 - sh0, whileHot: S.shots - n1 };
    T.sim(4); o.heat.cooled = !S.over;
    S.scouts.forEach(function (sc) { sc.hp = P.hp; });
    /* the next question's scouts, as they are made */
    var mk = s.answers_speeder;
    s.answers_speeder = function () { mk.call(this); window.__fresh = this.sp.scouts.filter(function (sc) { return sc.letter && sc.state !== "leave"; }).map(function (sc) { return { st: sc.state, dz: +(sc.z - this.sp.pz).toFixed(1) }; }, this); delete this.answers_speeder; };
    /* the right letter: knocked into a tree, it answers the question and pays coins */
    T.quiet(); sc0 = s.score; coins = s.nightCoins;
    var br = T.bump(T.scout(need[0]), -1);
    if (need.length > 1) { s.iframeMs = 0; T.bump(T.scout(need[1]), 1); }
    o.right = { gone: br.gone, score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins, between: s._between || s._finishing };
    return o;
  });
  console.log("run", JSON.stringify(run));
  check(run.scouts.split(" ").length === run.letters.length && run.scouts.split(" ").every(function (p) { var a = p.split("="); return a[0] === a[1]; }) && run.gunners === 1,
    "one scout per answer letter, its letter on its plate, and one gunner at level 1: " + run.scouts);
  check(run.ahead >= 3 && run.dist > 60, "the scouts ride in ahead of you and the forest goes by: " + JSON.stringify({ ahead: run.ahead, dist: run.dist }));
  check(run.drift.there && run.drift.state === "ride" && run.drift.strikes === 0, "a scout that drifts against you just slides off (no bump unless you steer into it): " + JSON.stringify(run.drift));
  check(run.wrong.gone && run.wrong.burnt && run.wrong.strikes === 1 && run.wrong.score === 0 && /WRONG LETTER/.test(run.wrong.label || "") && !run.wrong.again,
    "steering into a wrong letter's scout knocks it into a tree: a life, and that letter is gone: " + JSON.stringify(run.wrong));
  check(run.gunner.gone && run.gunner.strikes === 0 && run.gunner.coins > 0 && run.gunner.kills === 1 && run.gunner.wait === 1, "a gunner knocked into a tree pays a bonus (no life) and another comes later: " + JSON.stringify(run.gunner));
  check(run.tree.strikes === 1 && run.tree.label === "YOU HIT A TREE" && run.treeDodge.strikes === 0, "a trunk in your path costs a life; steering round it doesn't: " + JSON.stringify({ hit: run.tree, dodge: run.treeDodge }));
  check(run.bolt.strikes === 1 && /BOLT/.test(run.bolt.label || "") && run.boltDodge.strikes === 0,
    "a scout's bolt costs a life; steering out of its path avoids it: " + JSON.stringify({ hit: run.bolt, dodge: run.boltDodge }));
  check(run.gun.bolts === 1 && run.gun.ring, "a gunner's gun glows (a red ring shows where its bolt will pass), then it fires: " + JSON.stringify(run.gun));
  check(run.shotHp.after === 1 && run.shotHp.state === "ride" && run.shotDown.state === "careen" && run.shotDown.gone && run.shotDown.strikes === 1 && /WRONG LETTER/.test(run.shotDown.label || ""),
    "the blaster wears a scout down (" + run.shotHp.before + " hits), then it spins into a tree; a wrong one costs a life: " + JSON.stringify({ hp: run.shotHp, down: run.shotDown }));
  check(run.heat.over && run.heat.shots >= 3 && run.heat.whileHot === 0 && run.heat.cooled, "holding the trigger overheats the blaster; it won't fire until it cools: " + JSON.stringify(run.heat));
  check(run.right.gone && run.right.score === 1 && run.right.strikes === 0 && run.right.coins && run.right.between, "knocking the right letter's scout into a tree answers the question and pays coins: " + JSON.stringify(run.right));

  /* the next question: its reading pop-up, fresh scouts, then Select TWO */
  await goRead();
  await help();
  var two = await page.evaluate(function () {
    var s = SolScene, S = s.sp, o = {};
    T.quiet();
    var live = S.scouts.filter(function (sc) { return sc.letter && sc.state !== "leave"; }), fr = window.__fresh || [];
    o.fresh = { scouts: live.length, letters: s.choiceLetters().length, made: fr, entering: fr.length === live.length && fr.every(function (q) { return q.st === "enter" && q.dz < 0; }) };
    T.sim(3);
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    var b1 = T.bump(T.scout(pair[0]), 1);
    o.first = { gone: b1.gone, score: s.score - sc0, found: s.extracted.join(""), strikes: s.strikes };
    T.quiet();
    var b2 = T.bump(T.scout(pair[1]), -1);
    o.second = { gone: b2.gone, score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins };
    return o;
  });
  console.log("two", JSON.stringify(two));
  check(two.fresh.scouts === two.fresh.letters && two.fresh.entering, "a new question brings a fresh scout for every letter, roaring in from behind: " + JSON.stringify(two.fresh));
  check(two.first.gone && two.first.score === 0 && two.first.found.length === 1 && two.first.strikes === 0 && two.second.gone && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right scouts: the first counts as found, the second answers it: " + JSON.stringify(two));

  /* the difficulty: every level 2-100 harder than the one before, never easier on any setting */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.speeder.params, s = SolScene, out = { same: typeof s.speederParams === "function" && JSON.stringify(s.speederParams(50)) === JSON.stringify(f(50)) };
    var up = ["speed", "trees", "weave", "boltRel", "aimLead", "gunners", "hp", "heat", "jink", "logs", "letterFire", "traps", "trapSpd"], down = ["rowGap", "fog", "fireMs", "chargeMs", "cool", "logGap"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.keys = Object.keys(f(1)).filter(function (k) { return up.indexOf(k) === -1 && down.indexOf(k) === -1; });
    out.easier = easier; out.flat = flat; out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l50: ramp.l50, l100: ramp.l100 }));
  check(ramp.same && ramp.keys.length === 0 && ramp.easier.length === 0 && ramp.flat.length === 0, "speederParams (on the def as params): every level 2-100 is harder than the one before and never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat, unchecked: ramp.keys }));
  var e = ramp.l1, z = ramp.l100;
  check(e.speed < 20 && e.trees < 1 && e.rowGap > 15 && e.gunners === 1 && e.fireMs > 4500 && e.chargeMs > 1100 && e.logs === 0 && e.traps === 0 && e.jink === 0 && e.aimLead === 0 && e.hp === 3,
    "level 1 is gentle: slow, about one trunk a row, one gunner that fires every few seconds after a long glow, no logs, traps or swerving: " + JSON.stringify(e));
  check(z.speed >= 36 && z.trees >= 2.5 && z.rowGap <= 8.1 && z.gunners === 3 && z.fireMs <= 1200 && z.logs > 1.4 && z.traps > 1 && z.jink >= 0.85 && z.aimLead >= 0.99 && z.hp === 5 && z.fog < 50,
    "level 100 is intense: fast, dense trunks, three gunners leading their shots, logs, traps, swerving five-hit scouts, mist: " + JSON.stringify(z));

  /* level 10: plays (the last level of the first ten: one gunner; the second comes at 11) */
  var l10 = await gotoLevel(10);
  await help();
  var p10 = await page.evaluate(function () {
    var s = SolScene, S = s.sp; s.iframeMs = 1e9; s.spareLives = 9; s.blink = function (spr) { if (spr) spr.setAlpha(1); }; var z0 = S.pz;
    T.sim(6, null);
    return { g11: SolModes.MODES.speeder.params(11).gunners, gunners: S.P.gunners, riding: S.scouts.filter(function (sc) { return sc.kind === 2; }).length, letters: S.scouts.filter(function (sc) { return sc.letter; }).length, dist: Math.round(S.pz - z0), mode: s.mode.id };
  });
  check(l10.mode === "speeder" && l10.tier === 0 && p10.gunners === 1 && p10.riding === 1 && p10.letters >= 3 && p10.dist > 100 && p10.g11 === 2, "level 10 plays Forest Chase (one gunner; a second from level 11): " + JSON.stringify(p10));

  /* level 25: fallen logs (the gap is the way through) */
  var l25 = await gotoLevel(25);
  await help();
  var logs = await page.evaluate(function () {
    var s = SolScene, S = s.sp, o = {};
    T.quiet(); s.speederMakeLog(S.pz + 8, S.px + 3.5); T.sim(0.8);
    o.hit = { strikes: s.strikes, label: s._lastHitLabel };
    T.quiet(); s.speederMakeLog(S.pz + 8, S.px); T.sim(0.8);
    o.gap = { strikes: s.strikes };
    o.gen = S.P.logs > 0;
    return o;
  });
  check(/New this time:.*[Ff]allen logs/.test(l25.card) && logs.gen && logs.hit.strikes === 1 && /LOG/.test(logs.hit.label || "") && logs.gap.strikes === 0, "level 25: a fallen log costs a life unless you steer through its gap, and the card says what's new: " + JSON.stringify(logs));

  /* level 50: the picture, a scout careening into a tree */
  await gotoLevel(50);
  await help();
  await page.evaluate(function () {
    var s = SolScene, S = s.sp; s.iframeMs = 1e9; s.spareLives = 9; s.blink = function (spr) { if (spr) spr.setAlpha(1); };
    S.P.fireMs = 1e9; S.packCd = 1e9;
    T.sim(3, null);
    var L = S.scouts.filter(function (sc) { return sc.letter; });
    L.forEach(function (sc, i) { sc.state = "ride"; sc.z = S.pz + 10 + i * 4; sc.x = S.px + [-3, 2.4, 0.6, -1.2][i % 4]; sc.lead = sc.z - S.pz; sc.amp = 0; });
    /* a gunner, bumped, careening toward a trunk; another one's gun glowing */
    var g = S.scouts.filter(function (sc) { return sc.kind === 2; });
    var a = g[0] || s.speederScout(null, 1, S.pz + 4, 4, 2);
    a.state = "ride"; a.z = S.pz + 3; a.x = S.px + 1.3;
    var t = s.speederTree(S.px + 4.2, S.pz + 30, 1.1, false);
    s.speederCareen(a, 1, "bump"); a.tgt = t; a.dir = 1;
    T.sim(0.35);
    if (g[1]) { g[1].state = "ride"; g[1].z = S.pz + 18; g[1].x = S.px - 2.2; g[1].charge = S.P.chargeMs * 0.4; }
    S.bolts.push({ mine: true, x: S.px, y: 0.95, z: S.pz + 5, vx: 0, life: 0 });
  });
  await page.waitForTimeout(500);
  await shot("speeder-2-level50");
  await page.evaluate(function () { delete SolScene.blink; });   /* (the screenshots hide the safety blink) */

  /* level 75: swinging log traps */
  var l75 = await gotoLevel(75);
  await help();
  var traps = await page.evaluate(function () {
    var s = SolScene, S = s.sp, o = {};
    T.quiet(); var tp = s.speederMakeTrap(S.pz + 8, S.px); tp.amp = 0; tp.cx = S.px; T.sim(0.8);
    o.hit = { strikes: s.strikes, label: s._lastHitLabel };
    T.quiet(); tp = s.speederMakeTrap(S.pz + 8, S.px); tp.amp = 0; tp.cx = S.px + 3.6; T.sim(0.8);
    o.clear = { strikes: s.strikes };
    T.quiet(); tp = s.speederMakeTrap(S.pz + 8, S.px); tp.ph = 0; tp.spd = 2; tp.amp = 4;
    var x0 = s.speederTrapX(tp); T.sim(0.4); o.swings = Math.abs(s.speederTrapX(tp) - x0) > 0.5;
    o.gen = S.P.traps > 0;
    return o;
  });
  check(/New this time:.*log traps/.test(l75.card) && traps.gen && traps.swings && traps.hit.strikes === 1 && /TRAP/.test(traps.hit.label || "") && traps.clear.strikes === 0, "level 75: a swinging log trap costs a life unless it has swung clear, and the card says what's new: " + JSON.stringify(traps));

  /* level 100: plays with everything; the picture */
  var l100 = await gotoLevel(100);
  await help();
  var p100 = await page.evaluate(function () {
    var s = SolScene, S = s.sp; s.iframeMs = 1e9; s.spareLives = 99; s.blink = function (spr) { if (spr) spr.setAlpha(1); }; var z0 = S.pz, bolts = 0;
    for (var i = 0; i < 40; i++) {
      var tx = s.speederPathAt(S.pz + 2 + S.spd * 0.25); S.logs.forEach(function (lg) { if (lg.z > S.pz && lg.z - S.pz < 12) tx = (lg.g0 + lg.g1) / 2; });
      var d = tx - S.px; T.sim(0.25, { ax: d > 0.15 ? 1 : d < -0.15 ? -1 : 0 });
      bolts += S.bolts.filter(function (b) { return !b.mine; }).length ? 1 : 0;
    }
    var L = S.scouts.filter(function (sc) { return sc.letter && sc.state !== "leave"; });
    L.forEach(function (sc, i) { sc.state = "ride"; sc.z = S.pz + 6 + i * 3.5; sc.x = [2.2, -2.4, 0.8, -0.9][i % 4]; });
    var g = S.scouts.filter(function (sc) { return sc.kind === 2; });
    if (g[0]) { g[0].z = S.pz + 18; g[0].charge = S.P.chargeMs * 0.3; }
    S.spd = S.P.speed * 1.45; S.boost = 1;
    S.traps.slice().forEach(function (tp) { if (tp.z - S.pz < 14) { tp.img.destroy(); S.traps.splice(S.traps.indexOf(tp), 1); } });   /* nothing the (invincible) test bike drove through */
    S.logs.slice().forEach(function (lg) { if (lg.z - S.pz < 14) { [lg.L, lg.R, lg.eL, lg.eR].forEach(function (o) { o.destroy(); }); S.logs.splice(S.logs.indexOf(lg), 1); } });
    return { gunners: S.P.gunners, riding: g.length, dist: Math.round(S.pz - z0), bolts: bolts, logs: S.logs.length + S.traps.length, mode: s.mode.id, tier: s.tier, speed: S.P.speed };
  });
  await page.waitForTimeout(500);
  await shot("speeder-3-level100");
  await page.evaluate(function () { delete SolScene.blink; });   /* (the screenshots hide the safety blink) */
  check(l100.mode === "speeder" && /New this time:.*Full speed/.test(l100.card) && p100.gunners === 3 && p100.riding === 3 && p100.bolts > 0 && p100.dist > 300, "level 100 plays at full speed: three gunners firing, logs and traps ahead: " + JSON.stringify(p100));

  /* the 500-pixel-tall Canvas frame */
  await page.setViewportSize({ width: 1000, height: 500 });
  await page.waitForTimeout(1500);
  var small = await page.evaluate(function () {
    var s = SolScene, S = s.sp, c = s.game.canvas.getBoundingClientRect(), q = document.getElementById("btn-quit").getBoundingClientRect();
    var hudTop = c.top + S.hud.y * c.height / s.H;
    return { W: s.W, H: s.H, hy: S.hy, ch: Math.round(c.height), hud: Math.round(hudTop), quitBottom: Math.round(q.bottom), bike: Math.round(S.bike.y), radarBottom: Math.round(S.ry + S.hud.rh) };
  });
  await shot("speeder-4-frame500");
  check(small.H > 200 && small.H <= 500 && small.hy === Math.round(small.H * 0.36) && small.bike < small.H && small.radarBottom < small.H * 0.6 && small.hud >= small.quitBottom - 2,
    "in a 500-pixel-tall frame the forest, the bike and the gauges fit (under the Menu button): " + JSON.stringify(small));
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.waitForTimeout(800);

  /* losing: the last life ends the level with a Retry */
  await page.evaluate(function () { var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0; s.answerWrong("Z", "WRONG LETTER"); });
  await page.waitForFunction(function () { return SolScene.ended && !document.getElementById("overlay").classList.contains("hidden"); }, null, { timeout: 240000, polling: 250 }).catch(function () {});
  await page.waitForTimeout(300);
  var lose = await page.evaluate(function () {
    var s = SolScene;
    return { ended: s.ended, title: document.getElementById("win-title").textContent, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Forest Chase/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 200));
  await ctx.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
