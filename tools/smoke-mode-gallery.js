/* Headless test of the Lit and Film mode "gallery" (The Gallery, Scarlet Street, js/mode-gallery.js): node tools/smoke-mode-gallery.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Film Noir, then Scarlet Street, and drives the mode through the scene's own methods: the right painting
   scores, a wrong one costs a life and is crossed out, each hazard costs a life and can be avoided (Johnny's
   flashlight, the headlights, a bar of light in Johnny's sight, bumping into Johnny, Kitty's gaze from level 71),
   being caught wipes a half-written signature, Select TWO needs both, the keys, the mouse and the SIGN button work,
   the difficulty climbs every level 2-100, and the reading pop-up names the game and its controls. Screenshots go to
   tools/shots/gallery-*.png. Prints ALL OK or the number FAILED.
   The game's own clock (the scene's gl.t) times every wait, so a slow machine only makes the test slower. */
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

/* in-page helpers, installed on every page: the game's clock and a quiet room for a check */
function installHelpers() {
  window.__g = {
    wait: function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); },
    /* the wall-clock limits are only a safety net (15 minutes): every check ends on the game's own clock */
    until: async function (f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < Math.max(ms || 0, 900000)) await window.__g.wait(30); return f(); },
    /* game seconds on the mode's clock */
    gameWait: async function (sec) { var B = SolScene.gl, t0 = B.t; await window.__g.until(function () { return SolScene.gl !== B || B.t - t0 >= sec; }); },
    /* nobody about: Johnny parked in the far right corner looking away, no cars, no Kitty, a clean slate of lives */
    quiet: function () {
      var s = SolScene, B = s.gl, J = B.johnny;
      J.state = "parked"; J.x = s.W - 14 * B.k; J.y = B.floorBot - 6 * B.k; J.dir = 0;
      B.sweep = null; B.carT = 1e12; B.nextDir = 0; B.kitty.on = false; B.kitty.spr.setVisible(false);
      B.seen = 0; s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s._guardUsed = true; s.tutLockUntil = 0;
      ["SPACE", "LEFT", "RIGHT", "UP", "DOWN", "W", "A", "S", "D"].forEach(function (k) { s.keys[k].isDown = false; });
    },
    /* a point on the open floor (away from the paintings, the pad and the door) that the blinds light, or leave dark */
    floorPoint: function (lit, xMin, xMax) {
      var s = SolScene, B = s.gl, k = B.k, x, y;
      for (y = B.wallY + B.FH * 0.3; y < B.floorBot - 20 * k; y += 1) {
        for (x = xMin; x <= xMax; x += 4) {
          var pt = s.galClampPt(x, y); if (Math.abs(pt.x - x) > 0.5 || Math.abs(pt.y - y) > 0.5) continue;
          var e = s.galExposure(x, y), self = B.patches.some(function (p) { return p.open && (function () { var t = (y - p.y0) / (p.y1 - p.y0); return t >= 0 && t <= 1; })(); });
          if (lit ? e.lit && !e.beam && !e.sweep : !e.lit) {
            /* lit: every sample round the feet lit, so it stays lit; dark: well inside the dark */
            var ok = true;
            for (var d = -6; d <= 6; d += 3) { var e2 = s.galExposure(x, y + d * k), e3 = s.galExposure(x + d * k, y); if (lit ? !(e2.lit && e3.lit) : (e2.lit || e3.lit)) ok = false; }
            if (ok) return { x: x, y: y };
          }
        }
      }
      return null;
    }
  };
}

(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var errors = [], loadErrors = [], fails = [], started = false;
  function watch(page, tag) {
    page.on("response", function (r) { if (r.status() === 404) console.log(tag + " 404 " + r.url()); });
    page.on("pageerror", function (e) {
      var where = String(e.stack || "");
      /* another movie's content or game file may still be being written: a syntax error while the page loads,
         or an error raised in another file, is reported but is not this mode's */
      if (!started || (/\/js\/(content1\d\d|mode-(?!gallery)[a-z]+)\.js/.test(where) && !/mode-gallery\.js/.test(where))) loadErrors.push(tag + " pageerror: " + e.message);
      else errors.push(tag + " pageerror: " + e.message + " " + where.split("\n").slice(0, 2).join(" | "));
    });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|404/i.test(t)) (started ? errors : loadErrors).push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  await ctx.addInitScript(installHelpers);
  var page = await ctx.newPage();
  page.setDefaultTimeout(300000);
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png"), timeout: 120000 }); }
  async function clickEl(sel) { await page.evaluate(function (sel) { var e = document.querySelector(sel); if (e) e.click(); }, sel); }

  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build (its card is on the title screen)");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector('#mode-packs .card[data-genre="NOIR"]');
  await page.click('#mode-packs .card[data-genre="NOIR"]');
  await page.waitForSelector('#skill-packs .card[data-gamemode="gallery"]');
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="gallery"]');
    return c ? { text: c.textContent, strand: c.getAttribute("data-strand"), visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && card.strand === "SCARLET" && /Scarlet Street/.test(card.text) && /The Gallery/.test(card.text), "the Scarlet Street card on the Film Noir screen plays The Gallery: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="gallery"]');
  var picked = await page.evaluate(function () {
    var o = { only: SolModes.only, def: !!SolModes.MODES.gallery };
    o.levels = [1, 10, 37, 100].map(function (n) { var m = SolModes.modeFor(n); return m ? m.id : "-"; }).join(",");
    return o;
  });
  check(picked.only === "gallery" && picked.def && picked.levels === "gallery,gallery,gallery,gallery", "picking Scarlet Street plays The Gallery on every level: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 300000 }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  started = true;

  async function gotoLevel(n) {
    /* the scene object is reused by a restart: wait for its new room (a new gl) with the reading pop-up open */
    await page.evaluate(function (n) { window.__oldGl = SolScene.gl || null; SolScene.scene.restart({ family: "LIT", strand: "SCARLET", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.gl && s.gl !== window.__oldGl && s.claim && s.readOpen && s.gl.paints.length; }, n, { timeout: 300000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, strand: s.strand, act: document.getElementById("btn-action").textContent,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "",
        paintings: s.gl ? s.gl.paints.length : 0, letters: s.choiceLetters().join("") };
    });
    await clickEl("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 300000 }).catch(function () {});
    await page.evaluate(function () { return window.__g.gameWait(0.1); });
    return info;
  }

  /* ── level 1 ── */
  var l1 = await gotoLevel(1);
  check(l1.key === "mode" && l1.mode === "gallery" && l1.act === "SIGN" && l1.strand === "SCARLET" && l1.paintings === l1.letters.length && l1.paintings >= 2,
    "level 1 runs The Gallery in the mode scene, a SIGN button and one painting per letter: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act, strand: l1.strand, paintings: l1.paintings, letters: l1.letters }));
  check(/The Gallery/.test(l1.card) && /stealth level/.test(l1.card) && /Controls:/.test(l1.card) && /hold Space or SIGN/.test(l1.card) && /Lives:/.test(l1.card) && /Sign the painting/.test(l1.hint),
    "the reading pop-up names the game, its controls and its rules: " + l1.card.slice(0, 140) + "…");
  await page.evaluate(function () { SolScene.iframeMs = 1e9; });
  await page.evaluate(function () { return window.__g.gameWait(1.2); });
  await shot("gallery-01-level1");

  var run = await page.evaluate(async function () {
    var s = SolScene, B = s.gl, G = window.__g, k = B.k, o = {};
    G.quiet();
    var need = s.need.slice(), letters = s.choiceLetters(), wrongs = letters.filter(function (L) { return need.indexOf(L) === -1; });
    o.need = need.join(""); o.plaques = B.paints.map(function (p) { return p.label.text; }).join("");
    /* the keys walk (the flags the arrow keys and WASD set) */
    B.x = s.W * 0.5; B.y = B.wallY + B.FH * 0.5;
    var x0 = B.x; s.keys.RIGHT.isDown = true; await G.gameWait(0.4); s.keys.RIGHT.isDown = false;
    var y0 = B.y; s.keys.S.isDown = true; await G.gameWait(0.4); s.keys.S.isDown = false;
    var x1 = B.x; s.keys.A.isDown = true; await G.gameWait(0.3); s.keys.A.isDown = false;
    o.keys = { right: +(x1 - x0).toFixed(1), down: +(B.y - y0).toFixed(1), left: +(x1 - B.x).toFixed(1) };
    /* a wrong painting: stand under it, hold SIGN until the signature is written */
    G.quiet();
    var wi = s.galIdx(wrongs[0]), sp = s.galSpot(wi), pw = B.paints[wi];
    B.x = sp.x; B.y = sp.y; s.keys.SPACE.isDown = true;
    var t0 = B.t;
    await G.until(function () { return pw.state !== "live"; });
    s.keys.SPACE.isDown = false;
    o.wrong = { secs: +(B.t - t0).toFixed(2), want: +(B.P.signMs / 1000).toFixed(2), state: pw.state, plaque: pw.label.text, strikes: s.strikes, score: s.score, label: s._lastHitLabel };
    /* signing it again costs nothing */
    s.iframeMs = 0; s.keys.SPACE.isDown = true; await G.gameWait(B.P.signMs / 1000 + 0.3); s.keys.SPACE.isDown = false;
    o.again = s.strikes;
    /* half a signature, then caught: it is wiped off and the painter goes back to the door */
    G.quiet();
    var ri = s.galIdx(need[0]), pr = B.paints[ri], rs = s.galSpot(ri);
    B.x = rs.x; B.y = rs.y; s.keys.SPACE.isDown = true;
    await G.until(function () { return pr.prog > 0.45; }); s.keys.SPACE.isDown = false;
    o.half = +pr.prog.toFixed(2); o.halfSig = pr.sig.visible;
    s.galCaught("TEST");
    o.wiped = { prog: pr.prog, strikes: s.strikes, door: Math.abs(B.x - B.door.sx) < 1 && Math.abs(B.y - B.door.sy) < 1 };
    return o;
  });
  console.log("run", JSON.stringify(run));
  check(run.keys.right > 30 && run.keys.down > 20 && run.keys.left > 20, "the arrow keys and WASD walk the painter: " + JSON.stringify(run.keys));
  check(run.wrong.state === "dead" && run.wrong.plaque === "✕" && run.wrong.strikes === 1 && run.wrong.score === 0 && /WRONG LETTER/.test(run.wrong.label || "") && Math.abs(run.wrong.secs - run.wrong.want) < 0.4 && run.again === 1,
    "holding SIGN under a wrong painting writes the signature (signMs), costs a life and crosses it out; signing it again costs nothing: " + JSON.stringify(run.wrong) + " again " + run.again);
  check(run.half > 0.45 && run.halfSig && run.wiped.prog === 0 && run.wiped.strikes === 1 && run.wiped.door, "getting caught wipes a half-written signature and sends the painter back to the door: " + JSON.stringify({ half: run.half, wiped: run.wiped }));

  /* the hazards: each one costs a life, and each one can be avoided */
  var haz = await page.evaluate(async function () {
    var s = SolScene, B = s.gl, G = window.__g, k = B.k, P = B.P, J = B.johnny, o = {};
    async function outcome(setup, secs) {
      G.quiet(); setup(); var st0 = s.strikes, t0 = B.t;
      await G.until(function () { return s.strikes > st0 || B.t - t0 > secs; }, 120000);
      var r = { strikes: s.strikes - st0, secs: +(B.t - t0).toFixed(2), label: s._lastHitLabel, door: Math.abs(B.x - B.door.sx) < 1 };
      s._lastHitLabel = ""; return r;
    }
    /* 1. Johnny's flashlight: in the beam (a dark spot of the floor) he catches you; out of it, nothing */
    var dark = G.floorPoint(false, s.W * 0.35, s.W * 0.75);
    o.dark = dark;
    var beamSecs = P.catchMs / 1000;
    o.beamHit = await outcome(function () { B.x = dark.x; B.y = dark.y; J.x = dark.x - 100 * k; J.y = dark.y; J.dir = 0; }, beamSecs * 2 + 1);
    o.beamMiss = await outcome(function () { B.x = dark.x; B.y = dark.y; J.x = dark.x - 100 * k; J.y = dark.y; J.dir = Math.PI; }, beamSecs * 1.6);
    o.beamSide = await outcome(function () { B.x = dark.x; B.y = dark.y; J.x = dark.x - 100 * k; J.y = dark.y; J.dir = 50 * Math.PI / 180; }, beamSecs * 1.6);
    /* 2. the headlights: on a bright bar they catch you; in a dark row between the bars, they pass you by */
    var hx = s.W * 0.55, rowY = function (litRow) {
      var ph = 0.3, per = B.per2, open = P.sweepOpen;
      for (var y = B.wallY + B.FH * 0.35; y < B.floorBot - 20 * k; y++) {
        var ok = true;
        for (var d = -6; d <= 6; d += 2) { var f = (y + d * k - B.wallY) / per + ph; f -= Math.floor(f); if ((f < open) !== litRow) ok = false; }
        if (ok) return y;
      }
      return null;
    };
    var yLit = rowY(true), yDark = rowY(false);
    function car(y) { return function () { B.x = hx; B.y = y; B.sweep = { phase: "go", x: hx, dir: 1, ph: 0.3, t: 0, warn: 0 }; P.sweepSpd0 = P.sweepSpd0 || P.sweepSpd; P.sweepSpd = 0; }; }
    o.carHit = await outcome(car(yLit), beamSecs * 2 + 1);
    o.carMiss = await outcome(car(yDark), beamSecs * 1.6);
    o.carMissExposure = (function () { B.sweep = { phase: "go", x: hx, dir: 1, ph: 0.3, t: 0, warn: 0 }; var e = s.galExposure(hx, yDark); B.sweep = null; return e.sweep; })();
    P.sweepSpd = P.sweepSpd0;
    /* a real car: the windows glow first (warn), then the headlights cross the floor and leave */
    G.quiet(); B.x = B.door.sx; B.y = B.door.sy; s.iframeMs = 1e9; B.carT = 0;
    await G.until(function () { return B.sweep && B.sweep.phase === "warn"; });
    o.warn = { text: B.txWarn.visible ? B.txWarn.text : "", ms: B.sweep.warn };
    await G.until(function () { return B.sweep && B.sweep.phase === "go"; });
    var x0 = B.sweep.x; await G.gameWait(0.5);
    o.crossed = { moved: +(B.sweep.x - x0).toFixed(1), want: +(B.P.sweepSpd * k * 0.5).toFixed(1) };
    B.sweep.x = s.W + B.sw;   /* most of the way across: let it go */
    await G.until(function () { return !B.sweep; });
    o.crossed.next = B.carT > 1000;
    s.iframeMs = 0;
    /* 3. a bar of light from the blinds: in Johnny's sight (beyond his beam) he spots you; in the dark between bars he doesn't */
    var lit = G.floorPoint(true, s.W * 0.3, s.W * 0.8);
    o.lit = lit;
    var far = (P.beamLen + (P.sightLen - P.beamLen) / 2) * k;
    function look(pt) { return function () { B.x = pt.x; B.y = pt.y; J.x = pt.x - far; J.y = pt.y; if (J.x < 20) { J.x = pt.x + far; J.dir = Math.PI; } else J.dir = 0; }; }
    o.litExposure = (function () { look(lit)(); var e = s.galExposure(lit.x, lit.y); return { beam: e.beam, lit: e.lit, why: e.why }; })();
    o.litHit = await outcome(look(lit), P.stripeMs / 1000 * 2 + 1);
    o.litMiss = await outcome(look(dark), P.stripeMs / 1000 * 1.3);
    /* ... and in the light with Johnny looking the other way, nothing */
    o.litAway = await outcome(function () { look(lit)(); J.dir += Math.PI; }, P.stripeMs / 1000 * 1.3);
    /* 4. bumping into Johnny: at once */
    o.bump = await outcome(function () { B.x = dark.x; B.y = dark.y; J.x = dark.x + 10 * k; J.y = dark.y; J.dir = Math.PI; }, 1);
    /* the meter drains in the dark */
    G.quiet(); B.x = dark.x; B.y = dark.y; B.seen = 0.6; await G.gameWait(P.decayMs / 1000 * 0.7);
    o.drain = +B.seen.toFixed(2);
    G.quiet();
    return o;
  });
  console.log("hazards", JSON.stringify(haz));
  check(haz.dark && haz.beamHit.strikes === 1 && /FLASHLIGHT/.test(haz.beamHit.label) && haz.beamHit.door && haz.beamMiss.strikes === 0 && haz.beamSide.strikes === 0,
    "Johnny's flashlight on the painter fills SEEN and costs a life (back to the door); out of the beam nothing happens: " + JSON.stringify({ hit: haz.beamHit, behind: haz.beamMiss, side: haz.beamSide }));
  check(haz.carHit.strikes === 1 && /HEADLIGHTS/.test(haz.carHit.label) && haz.carMiss.strikes === 0 && haz.carMissExposure === false,
    "the headlights catch the painter on a bright bar, and pass him by in a dark row: " + JSON.stringify({ hit: haz.carHit, miss: haz.carMiss }));
  check(/HEADLIGHTS/.test(haz.warn.text) && haz.warn.ms >= 2000 && Math.abs(haz.crossed.moved - haz.crossed.want) < haz.crossed.want * 0.25 && haz.crossed.next, "a car is announced (the windows glow, HEADLIGHTS), then its lights cross the floor and go: " + JSON.stringify({ warn: haz.warn, crossed: haz.crossed }));
  check(haz.lit && !haz.litExposure.beam && haz.litExposure.lit && haz.litHit.strikes === 1 && /IN THE LIGHT/.test(haz.litHit.label) && haz.litMiss.strikes === 0 && haz.litAway.strikes === 0,
    "standing in a bar of light from the blinds while Johnny looks your way costs a life; in the dark, or with his back turned, it doesn't: " + JSON.stringify({ hit: haz.litHit, dark: haz.litMiss, away: haz.litAway }));
  check(haz.bump.strikes === 1 && /BUMPED/.test(haz.bump.label), "bumping into Johnny costs a life: " + JSON.stringify(haz.bump));
  check(haz.drain < 0.25, "in the dark the SEEN meter drains: " + haz.drain);

  /* the mouse: hold the button on a painting and the painter walks there and signs */
  var target = await page.evaluate(function () {
    var s = SolScene, B = s.gl, G = window.__g; G.quiet();
    var i = -1; B.paints.forEach(function (p, j) { if (i < 0 && p.state === "live" && s.need.indexOf(p.letter) === -1) i = j; });
    if (i < 0) B.paints.forEach(function (p, j) { if (i < 0 && p.state === "live") i = j; });
    B.x = B.slots[i].x + 120 * B.k; B.y = B.wallY + B.FH * 0.45; B.paints[i].prog = 0; s.galPaint(B.paints[i]);
    var r = s.game.canvas.getBoundingClientRect(), sl = B.slots[i];
    window.__mi = i;
    return { x: r.left + sl.x * r.width / s.W, y: r.top + (sl.y0 + sl.h * 0.5) * r.height / s.H };
  });
  await page.mouse.move(target.x, target.y);
  await page.mouse.down();
  await page.waitForFunction(function () { var B = SolScene.gl; return B.paints[window.__mi].prog > 0.25; }, null, { timeout: 300000 }).catch(function () {});
  await page.mouse.up();
  var mouse = await page.evaluate(function () { var s = SolScene, B = s.gl, i = window.__mi; return { spot: s.galSpotAt(B.x, B.y) === i, prog: +B.paints[i].prog.toFixed(2) }; });
  /* ... and held on the floor, he walks toward the pointer (no signing) */
  var floorPt = await page.evaluate(function () { var s = SolScene, B = s.gl, r = s.game.canvas.getBoundingClientRect(); B.x = s.W * 0.4; B.y = B.wallY + B.FH * 0.4; window.__fx = B.x; return { x: r.left + s.W * 0.7 * r.width / s.W, y: r.top + (B.wallY + B.FH * 0.6) * r.height / s.H }; });
  await page.mouse.move(floorPt.x, floorPt.y); await page.mouse.down();
  await page.evaluate(function () { return window.__g.gameWait(0.4); });
  await page.mouse.up();
  mouse.walk = await page.evaluate(function () { return +(SolScene.gl.x - window.__fx).toFixed(1); });
  check(mouse.spot && mouse.prog > 0.25 && mouse.walk > 25, "holding the mouse on a painting walks the painter there and signs; held on the floor he walks toward the pointer: " + JSON.stringify(mouse));
  /* the on-screen SIGN button */
  await page.evaluate(function () { var s = SolScene, B = s.gl, i = window.__mi, sp = s.galSpot(i); window.__g.quiet(); B.x = sp.x; B.y = sp.y; window.__p0 = B.paints[i].prog; });
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  await page.evaluate(function () { return window.__g.gameWait(0.35); });
  await page.mouse.up();
  var button = await page.evaluate(function () { var B = SolScene.gl; return +(B.paints[window.__mi].prog - window.__p0).toFixed(2); });
  /* a real Space key */
  await page.evaluate(function () { window.__p1 = SolScene.gl.paints[window.__mi].prog; });
  await page.keyboard.down("Space");
  await page.evaluate(function () { return window.__g.gameWait(0.25); });
  await page.keyboard.up("Space");
  var space = await page.evaluate(function () { var B = SolScene.gl; return +(B.paints[window.__mi].prog - window.__p1).toFixed(2); });
  /* a real arrow key */
  await page.evaluate(function () { var s = SolScene, B = s.gl; B.x = s.W * 0.5; B.y = B.wallY + B.FH * 0.5; window.__ky = B.y; });
  await page.keyboard.down("ArrowDown");
  await page.evaluate(function () { return window.__g.gameWait(0.3); });
  await page.keyboard.up("ArrowDown");
  var arrow = await page.evaluate(function () { return +(SolScene.gl.y - window.__ky).toFixed(1); });
  check(button > 0.05 && space > 0.05 && arrow > 15, "the on-screen SIGN button and the real Space key sign, the real arrow keys walk: " + JSON.stringify({ button: button, space: space, arrow: arrow }));

  /* the right painting answers the question and pays coins */
  var right = await page.evaluate(async function () {
    var s = SolScene, B = s.gl, G = window.__g; G.quiet();
    var sc0 = s.score, coins = s.nightCoins, need = s.need.slice(), o = {};
    for (var j = 0; j < need.length; j++) {
      var i = s.galIdx(need[j]), sp = s.galSpot(i); B.x = sp.x; B.y = sp.y; s.keys.SPACE.isDown = true;
      await G.until(function () { return B.paints[i].state !== "live" || s.score > sc0; });
      s.keys.SPACE.isDown = false; s.iframeMs = 0;
    }
    o.score = s.score - sc0; o.strikes = s.strikes; o.coins = s.nightCoins > coins; o.between = s._between;
    var i0 = s.galIdx(need[0]); o.sig = B.paints[i0] ? { state: B.paints[i0].state, plaque: B.paints[i0].label.text, sig: B.paints[i0].sig.visible } : null;
    return o;
  });
  check(right.score === 1 && right.strikes === 0 && right.coins && right.sig && right.sig.sig, "signing the right painting answers the question and pays coins; the scarlet signature stays: " + JSON.stringify(right));

  /* the next question: fresh paintings, the painter back at the door; then Select TWO */
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 300000 }).catch(function () {});
  await clickEl("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 300000 }).catch(function () {});
  var two = await page.evaluate(async function () {
    var s = SolScene, B = s.gl, G = window.__g, o = {}; G.quiet();
    o.fresh = { live: B.paints.every(function (p) { return p.state === "live" && p.prog === 0; }), door: Math.abs(B.x - B.door.sx) < 1, n: B.paints.length };
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    async function sign(L) { var i = s.galIdx(L), sp = s.galSpot(i); B.x = sp.x; B.y = sp.y; s.keys.SPACE.isDown = true; await G.until(function () { return B.paints[i].state !== "live"; }); s.keys.SPACE.isDown = false; return B.paints[i]; }
    var a = await sign(pair[0]);
    o.first = { score: s.score - sc0, state: a.state, plaque: a.label.text, strikes: s.strikes };
    await sign(pair[1]);
    o.second = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins };
    return o;
  });
  check(two.fresh.live && two.fresh.door, "a new question brings fresh, unsigned paintings and starts the painter at the door: " + JSON.stringify(two.fresh));
  check(two.first.score === 0 && two.first.state === "found" && two.first.plaque === "✓" && two.first.strikes === 0 && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right paintings: the first is ticked, the second answers it: " + JSON.stringify(two));

  /* ── the difficulty: every level 2-100 harder than the one before, never easier ── */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.gallery.params, s = SolScene, out = { same: typeof s.galleryParams === "function" && JSON.stringify(s.galleryParams(50)) === JSON.stringify(f(50)) };
    var up = ["jSpd", "beamLen", "beamHalf", "sightLen", "decayMs", "signMs", "open", "sweepSpd", "sweepOpen", "sway", "turnP", "flip", "scan", "kitty", "kSight", "pair", "checks"],
      down = ["catchMs", "stripeMs", "sweepEvery", "sweepWarn"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.keys = Object.keys(f(1)).filter(function (k) { return up.indexOf(k) === -1 && down.indexOf(k) === -1; });
    out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l100: ramp.l100 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0 && ramp.keys.length === 0, "galleryParams (on the def as params): every level 2-100 is harder than the one before and never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat, unchecked: ramp.keys }));
  var e = ramp.l1, z = ramp.l100;
  check(e.jSpd <= 40 && e.catchMs >= 1400 && e.stripeMs >= 2500 && e.sweepEvery >= 14000 && e.sweepWarn >= 2700 && e.signMs <= 750 && e.sway === 0 && e.turnP === 0 && e.flip === 0 && e.kitty === 0 && e.pair === 0,
    "level 1 is gentle: a slow Johnny, a forgiving SEEN meter, a rare, well-announced car from the left, a quick signature: " + JSON.stringify(e));
  check(z.jSpd >= 100 && z.catchMs <= 520 && z.sweepEvery <= 6000 && z.sweepWarn <= 1200 && z.signMs >= 1700 && z.sway > 20 && z.turnP > 0.1 && z.kitty === 1 && z.pair === 1 && z.checks === 1,
    "level 100 is tense: a fast Johnny who turns round, quick catches, cars in pairs from both sides, swaying blinds, Kitty, a long signature: " + JSON.stringify(z));

  /* ── level 10: the card's news; the right letter scores ── */
  var l10 = await gotoLevel(10);
  var p10 = await page.evaluate(async function () {
    var s = SolScene, B = s.gl, G = window.__g; G.quiet();
    var i = s.galIdx(s.need[0]), sp = s.galSpot(i), sc = s.score; B.x = sp.x; B.y = sp.y; s.keys.SPACE.isDown = true;
    await G.until(function () { return B.paints[i].state !== "live" || s.score > sc; }); s.keys.SPACE.isDown = false;
    return { score: s.score - sc, two: s.need.length };
  });
  check(l10.mode === "gallery" && l10.tier === 0 && (p10.score === 1 || p10.two > 1), "level 10 plays The Gallery and the right painting scores: " + JSON.stringify({ mode: l10.mode, tier: l10.tier, play: p10 }));

  /* ── level 50: a picture with a car's headlights in the room ── */
  var l50 = await gotoLevel(50);
  await page.evaluate(async function () {
    var s = SolScene, B = s.gl, G = window.__g; s.iframeMs = 1e9; s.spareLives = 9;
    var sp = s.galSpot(1); B.x = sp.x; B.y = sp.y; B.paints[1].prog = 0.7; s.galPaint(B.paints[1]);
    B.sweep = { phase: "go", x: s.W * 0.62, dir: 1, ph: 0.3, t: 0, warn: 0 }; B.P.sweepSpd = 1;
    await G.gameWait(0.4);
  });
  await shot("gallery-02-level50");
  check(l50.mode === "gallery" && l50.tier === 4 && /New this time:.*both ways/.test(l50.card), "level 50: the card says what is new (cars both ways): " + l50.card.slice(-160));

  /* ── level 75: Kitty watches from the window ── */
  var l75 = await gotoLevel(75);
  var kit = await page.evaluate(async function () {
    var s = SolScene, B = s.gl, G = window.__g, K = B.kitty, P = B.P, k = B.k, o = { on: K.on, visible: K.spr.visible };
    G.quiet(); K.on = true; K.spr.setVisible(true);
    /* a lit point she can see: in a bar of light, in her cone */
    var pt = null, x, y;
    for (y = B.wallY + B.FH * 0.25; y < B.floorBot - 20 * k && !pt; y += 2) for (x = s.W * 0.2; x < K.x - 60 * k && !pt; x += 4) {
      var ok = true;
      for (var d = -6; d <= 6; d += 3) { var e2 = s.galExposure(x, y + d * k); if (!e2.lit || e2.beam) ok = false; }
      var dx = x - K.x, dy = y - (K.y - 4 * k), dd = Math.sqrt(dx * dx + dy * dy);
      if (ok && dd < P.kSight * k * 0.9 && dd > 60 * k) pt = { x: x, y: y, dir: Math.atan2(dy, dx) };
    }
    o.pt = !!pt;
    if (!pt) return o;
    var st0 = s.strikes; K.base = pt.dir; K.t = 0; K.dir = pt.dir; B.x = pt.x; B.y = pt.y;
    var t0 = B.t; await G.until(function () { K.base = pt.dir - 0.95 * Math.sin(K.t * 0.42); return s.strikes > st0 || B.t - t0 > P.stripeMs / 1000 * 2 + 1; });
    o.hit = { strikes: s.strikes - st0, label: s._lastHitLabel };
    /* her back turned: nothing */
    G.quiet(); K.on = true; B.x = pt.x; B.y = pt.y; st0 = s.strikes; t0 = B.t;
    await G.until(function () { K.base = pt.dir + Math.PI - 0.95 * Math.sin(K.t * 0.42); return s.strikes > st0 || B.t - t0 > P.stripeMs / 1000 * 1.3; });
    o.away = s.strikes - st0;
    return o;
  });
  check(l75.mode === "gallery" && /New this time:.*Kitty/.test(l75.card) && kit.on && kit.visible && kit.pt && kit.hit.strikes === 1 && /KITTY/.test(kit.hit.label) && kit.away === 0,
    "level 75: Kitty watches from the window; in the light where she looks she spots you, with her eyes elsewhere she doesn't: " + JSON.stringify(kit));

  /* ── level 100: it plays, the right painting scores; the late picture ── */
  var l100 = await gotoLevel(100);
  var p100 = await page.evaluate(async function () {
    var s = SolScene, B = s.gl, G = window.__g;
    var o = { kitty: B.kitty.on, P: { jSpd: B.P.jSpd, pair: B.P.pair, checks: B.P.checks } };
    G.quiet();
    var i = s.galIdx(s.need[0]), sp = s.galSpot(i), sc = s.score; B.x = sp.x; B.y = sp.y; s.keys.SPACE.isDown = true;
    await G.until(function () { return B.paints[i].state !== "live" || s.score > sc; }); s.keys.SPACE.isDown = false;
    o.score = s.score - sc; o.two = s.need.length;
    return o;
  });
  check(l100.mode === "gallery" && l100.tier === 9 && /New this time:.*under the paintings/.test(l100.card) && p100.kitty && (p100.score === 1 || p100.two > 1), "level 100 plays The Gallery (Kitty, cars in pairs, Johnny under the paintings) and the right painting scores: " + JSON.stringify({ tier: l100.tier, play: p100 }));
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return SolScene.readOpen || (g && g.offsetParent); }, null, { timeout: 300000 }).catch(function () {});
  await clickEl("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 300000 }).catch(function () {});
  await page.evaluate(async function () {
    var s = SolScene, B = s.gl, G = window.__g, J = B.johnny; s.iframeMs = 1e9; s.spareLives = 9;
    J.state = "walk";
    B.x = s.W * 0.42; B.y = B.wallY + B.FH * 0.55; B.seen = 0.55; B.seenSrc = "johnny";
    J.x = B.x + 150 * B.k; J.y = B.y + 30 * B.k; J.dir = Math.PI + 0.15; J.state = "q"; J.t = 0;
    B.carT = 0; B.P.sweepWarn = 99999;
    await G.gameWait(0.6);
  });
  await shot("gallery-03-level100");

  /* ── the 500-pixel-tall frame (a Canvas page) ── */
  await page.setViewportSize({ width: 1000, height: 500 });
  await page.waitForTimeout(1500);
  var small = await page.evaluate(async function () {
    var s = SolScene, B = s.gl, G = window.__g; await G.gameWait(0.3);
    var last = B.slots[B.slots.length - 1], pad = s.galPadBox();
    return { W: s.W, H: s.H, k: B.k, wallY: B.wallY, paintTop: B.slots[0].y0, plaqueBottom: last.y1 + 34 * B.k, inside: last.x + last.w / 2 <= s.W, pad: pad, block: B.block };
  });
  await shot("gallery-04-small-frame");
  check(small.H <= 500 && small.plaqueBottom < small.wallY && small.paintTop > 0 && small.inside, "in a 500-pixel-tall frame the room fits: every painting and its letter plate on the wall: " + JSON.stringify(small));
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.waitForTimeout(1000);

  /* losing: the last life ends the level with a Retry */
  var lose = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    s.answerWrong("Z", "WRONG LETTER");
    /* the end sequence runs on the game's clock: on a slow machine it takes a while */
    await window.__g.until(function () { return s.ended && !document.getElementById("overlay").classList.contains("hidden"); });
    await new Promise(function (r) { setTimeout(r, 300); });
    return { ended: s.ended, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /The Gallery/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 200));
  await ctx.close();

  if (loadErrors.length) console.log("other files (not this mode):", loadErrors);
  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
