/* Headless test of the Lit and Film mode "tape" (Seven Days, The Ring; js/mode-tape.js): node tools/smoke-mode-tape.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Horror → The Ring and drives the mode through the scene's own methods (on the game's own clock, so a slow
   machine only makes it slower): the dial turns with the keys, the pad, the mouse (drag, a number, the wheel);
   holding TUNE (Space, the TUNE button, a mouse button on the screen) on a clear station picks its letter; the right
   letter scores, a wrong letter costs a life and is crossed out, static picks nothing; the tape's channel costs a
   life when its ring of light closes (turning away in time costs nothing); the seventh day costs a life (answering
   sooner costs nothing, and the next question brings seven more days); the TV turns itself to the tape (level 41 on)
   and turning away avoids it; power cuts (31 on); Select TWO needs both; the reading pop-up names the game and its
   controls; the mode plays on levels 1, 10, 50 and 100 and in a 500-pixel-tall frame; the difficulty climbs every
   level 2-100. Screenshots go to tools/shots/tape-*.png. Prints ALL OK or the number FAILED. */
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
    /* other movies' content files may still be being written: their 404s are not this mode's problem */
    page.on("response", function (r) { if (r.status() === 404 && !/content1(1[4-9]|20)\.js|favicon/.test(r.url())) errors.push(tag + " 404 " + r.url()); });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|status of 404/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  /* in-page helpers: wait on the game's own clock; take the hazards away while a check runs */
  var HELP = function () {
    window.__tw = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
    window.__gwait = async function (ms, cap) { var B = SolScene.tp, t0 = B.t, w0 = Date.now(); while ((B.t - t0) * 1000 < ms && Date.now() - w0 < (cap || 60000)) await __tw(20); };
    window.__until = async function (f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 60000)) await __tw(25); return f(); };
    window.__quiet = function () {
      var s = SolScene, B = s.tp, P = B.P;
      P.dayMs = 1e9; P.hijackEvery = 1e9; P.blackMs = 0; P.blackEvery = 1e9; P.drift = 0;
      B.hij = null; B.hijSpin = false; B.ringT = 0; B.dark = 0; B.dayT = 0; B.day = 0; B.lockT = 0; B.lockSt = null; B.dTarget = null;
      s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
      ["LEFT", "RIGHT", "UP", "DOWN", "A", "D", "W", "S", "SPACE"].forEach(function (k) { s.keys[k].isDown = false; });
    };
    window.__static = function () {
      var B = SolScene.tp, used = {};
      B.stations.forEach(function (st) { used[st.ch] = 1; }); B.tapes.forEach(function (t) { used[t.ch] = 1; });
      for (var i = 0; i < B.N; i++) if (!used[i]) return i;
      return -1;
    };
  };

  /* ── the dev page, as the Lit and Film build ── */
  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  watch(page, "dev");
  async function shot(name, pg) { await (pg || page).screenshot({ path: path.join(shots, name + ".png") }); }
  async function startTape(pg) {
    await pg.goto(base + "index.html", { waitUntil: "load" });
    await pg.waitForTimeout(900);
    var t = await pg.isVisible('#title-screen .card[data-family="LIT"]');
    await pg.click('#title-screen .card[data-family="LIT"]');
    await pg.waitForSelector("#mode-screen:not(.hidden)");
    await pg.click('#mode-packs .card[data-genre="HORROR"]');
    await pg.waitForSelector("#skill-screen:not(.hidden)");
    var card = await pg.evaluate(function () {
      var c = document.querySelector('#skill-packs .card[data-gamemode="tape"]');
      return c ? { text: c.textContent, strand: c.getAttribute("data-strand"), visible: !!c.offsetParent } : null;
    });
    await pg.click('#skill-packs .card[data-gamemode="tape"]');
    var picked = await pg.evaluate(function () {
      return { only: SolModes.only, def: !!SolModes.MODES.tape, levels: [1, 10, 50, 100].map(function (n) { var m = SolModes.modeFor(n); return m ? m.id : "maze"; }).join() };
    });
    await pg.click("#btn-skill-start");
    await pg.waitForTimeout(400);
    if (await pg.isVisible("#btn-char-confirm")) await pg.click("#btn-char-confirm");
    await pg.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 30000 }).catch(function () {});
    for (var i = 0; i < 12; i++) { if (await pg.isVisible("#tut-skip")) { await pg.click("#tut-skip"); break; } await pg.waitForTimeout(250); }
    await pg.evaluate(HELP);
    return { title: t, card: card, picked: picked };
  }
  async function gotoLevel(n, pg) {
    pg = pg || page;
    await pg.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "RING", night: n }); }, n);
    await pg.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.tp && s.claim && s.readOpen; }, n, { timeout: 30000 }).catch(function () {});
    var info = await pg.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    if (await pg.isVisible("#read-go")) await pg.click("#read-go");
    await pg.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 10000 }).catch(function () {});
    await pg.waitForTimeout(250);
    return info;
  }
  /* a canvas point (game coordinates) on the page */
  async function pagePt(x, y) {
    return page.evaluate(function (q) { var s = SolScene, r = s.game.canvas.getBoundingClientRect(); return { x: r.left + q.x * r.width / s.W, y: r.top + q.y * r.height / s.H }; }, { x: x, y: y });
  }

  var st = await startTape(page);
  check(st.title && st.card && st.card.visible && /Seven Days/.test(st.card.text) && st.card.strand === "RING", "Horror → The Ring shows the Seven Days card with its own questions (strand RING): " + JSON.stringify(st.card));
  check(st.picked.only === "tape" && st.picked.def && st.picked.levels === "tape,tape,tape,tape", "picking The Ring plays Seven Days on every level: " + JSON.stringify(st.picked));

  /* ── level 1: the reading pop-up, the dial, TUNE, a wrong letter, the hazards ── */
  var l1 = await gotoLevel(1);
  check(l1.key === "mode" && l1.mode === "tape" && l1.act === "TUNE", "level 1 runs Seven Days in the mode scene with a TUNE button: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act }));
  check(/Seven Days/.test(l1.card) && /horror level/.test(l1.card) && /Controls:/.test(l1.card) && /hold Space, TUNE/.test(l1.card) && /Lives:/.test(l1.card) && /hold TUNE/.test(l1.hint),
    "the reading pop-up names the game, its lives and its controls: " + l1.card.slice(0, 110) + "…");

  var run = await page.evaluate(async function () {
    var s = SolScene, B = s.tp, o = {};
    __quiet();
    var letters = s.choiceLetters();
    o.letters = letters.join(""); o.stations = B.stations.map(function (x) { return x.letter; }).join("");
    o.chans = B.stations.map(function (x) { return x.ch; }).concat(B.tapes.map(function (t) { return t.ch; }));
    o.distinct = o.chans.filter(function (c, i, a) { return a.indexOf(c) === i; }).length === o.chans.length;
    o.N = B.N; o.nums = B.nums.map(function (t) { return t.text; }).join(","); o.tapes = B.tapes.length;
    o.startStatic = B.stations.concat(B.tapes).every(function (x) { return x.ch !== Math.round(B.d); });
    /* the keys turn the dial: ▶ / D up, ◀ / A down, ▲ ▼ slowly */
    s.tapeDialTo(0); await __gwait(200);
    var d0 = B.d; s.keys.RIGHT.isDown = true; await __gwait(500); s.keys.RIGHT.isDown = false; o.right = B.d - d0;
    s.tapeDialTo(B.N - 1); await __gwait(200);
    d0 = B.d; s.keys.A.isDown = true; await __gwait(500); s.keys.A.isDown = false; o.left = d0 - B.d;
    s.tapeDialTo(2); await __gwait(200); d0 = B.d;
    s.keys.W.isDown = true; await __gwait(300); s.keys.W.isDown = false; o.fine = B.d - d0;
    /* level 1: let go and the dial settles on the nearest channel */
    s.tapeDialTo(2.3); await __gwait(900); o.snap = +B.d.toFixed(3);
    /* a station's picture: clear on its channel, its letter on the screen */
    var stn = B.stations[0];
    s.tapeDialTo(stn.ch); await __gwait(200);
    o.clear = { c: +s.tapeClarity(stn).toFixed(2), letter: B.letter.text, alpha: +B.letter.alpha.toFixed(2), want: stn.letter, osd: B.osd.text };
    s.tapeDialTo(stn.ch + (stn.ch >= B.N - 1 ? -0.6 : 0.6)); await __gwait(150);   /* off the station, inward from the dial's last channel */
    o.offClear = +s.tapeClarity(stn).toFixed(2);
    /* static picks nothing, however long TUNE is held */
    var sc = __static(); s.tapeDialTo(sc); await __gwait(150);
    var p0 = B.picks, k0 = s.strikes; s.keys.SPACE.isDown = true; await __gwait(B.P.lockMs * 2.5); s.keys.SPACE.isDown = false;
    o.static = { picks: B.picks - p0, strikes: s.strikes - k0, lock: B.lockT };
    await __gwait(100);
    return o;
  });
  console.log("run", JSON.stringify(run));
  check(run.stations === run.letters && run.tapes === 1 && run.distinct && run.N === 6 && run.nums === "2,3,4,5,6,7" && run.startStatic,
    "one station per answer letter and one tape, each on its own channel of a 2-7 dial, and the dial starts on static: " + JSON.stringify({ st: run.stations, chans: run.chans, nums: run.nums }));
  check(run.right > 0.8 && run.left > 0.8 && run.fine > 0.1 && run.fine < run.right, "▶ and A turn the dial up and down; W turns it slowly (fine-tune): " + JSON.stringify({ right: run.right, left: run.left, fine: run.fine }));
  check(Math.abs(run.snap - 2) < 0.03, "on level 1 the dial settles on the nearest channel when you let go: " + run.snap);
  check(run.clear.c === 1 && run.clear.letter === run.clear.want && run.clear.alpha > 0.9 && /^CH \d\d$/.test(run.clear.osd) && run.offClear === 0, "on its channel a station's picture is clear and shows its letter; off it, only static: " + JSON.stringify(run.clear) + " off: " + run.offClear);
  check(run.static.picks === 0 && run.static.strikes === 0, "holding TUNE on static picks nothing and costs nothing: " + JSON.stringify(run.static));

  /* the real keyboard: ArrowRight turns the dial */
  await page.evaluate(function () { __quiet(); SolScene.tapeDialTo(0); window.__d0 = SolScene.tp.d; });
  await page.keyboard.down("ArrowRight");
  await page.waitForFunction(function () { return SolScene.tp.d > window.__d0 + 0.8; }, null, { timeout: 30000 }).catch(function () {});
  await page.keyboard.up("ArrowRight");
  var realKey = await page.evaluate(function () { return +(SolScene.tp.d - window.__d0).toFixed(2); });
  check(realKey > 0.8, "the real → key turns the dial: " + realKey);
  /* the on-screen pad's ▶ */
  var padR = await page.evaluate(function () { var b = Array.prototype.filter.call(document.querySelectorAll("#controls button, .dpad button, [data-dir]"), function (x) { return /right|▶/i.test((x.getAttribute("data-dir") || "") + x.textContent + (x.id || "")) && x.offsetParent; })[0]; if (!b) return null; var r = b.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  var padMove = null;
  if (padR) {
    await page.evaluate(function () { __quiet(); SolScene.tapeDialTo(0); window.__d0 = SolScene.tp.d; });
    await page.mouse.move(padR.x, padR.y); await page.mouse.down();
    await page.waitForFunction(function () { return SolScene.tp.d > window.__d0 + 0.6; }, null, { timeout: 30000 }).catch(function () {});
    await page.mouse.up();
    padMove = await page.evaluate(function () { return +(SolScene.tp.d - window.__d0).toFixed(2); });
  }
  check(padR && padMove > 0.6, "the on-screen pad's ▶ turns the dial: " + padMove);

  /* the mouse: drag the knob round to a channel number; the wheel; a press on the knob never tunes */
  var kn = await page.evaluate(function () { var s = SolScene, B = s.tp; __quiet(); s.tapeDialTo(0); var p = s.tapeNumPos(4); return { kx: B.kx, ky: B.ky, nx: p.x, ny: p.y }; });
  var kp = await pagePt(kn.kx, kn.ky), np = await pagePt(kn.nx, kn.ny);
  await page.mouse.move(kp.x, kp.y + 8); await page.mouse.down();
  await page.mouse.move(np.x, np.y, { steps: 6 });
  await page.waitForFunction(function () { return Math.abs(SolScene.tp.d - 4) < 0.05; }, null, { timeout: 30000 }).catch(function () {});
  var drag = await page.evaluate(function () { var B = SolScene.tp; return { d: +B.d.toFixed(2), lock: B.lockT, picks: B.picks }; });
  await page.mouse.up();
  await page.evaluate(function () { SolScene.tapeDialTo(2); window.__d0 = SolScene.tp.d; });
  var cpt = await pagePt(kn.kx - 200, kn.ky);
  await page.mouse.move(cpt.x, cpt.y); await page.mouse.wheel(0, -100);
  await page.waitForFunction(function () { return SolScene.tp.d > window.__d0 + 0.1; }, null, { timeout: 15000 }).catch(function () {});
  var wheel = await page.evaluate(function () { return +(SolScene.tp.d - window.__d0).toFixed(2); });
  check(Math.abs(drag.d - 4) < 0.06 && drag.lock === 0 && wheel > 0.1, "dragging the knob to a channel number turns the dial there (and never tunes); the mouse wheel turns it too: " + JSON.stringify({ drag: drag, wheel: wheel }));

  /* a wrong letter through the on-screen TUNE button: a life, the channel crossed out; again costs nothing */
  var wr = await page.evaluate(function () {
    var s = SolScene, B = s.tp; __quiet();
    var w = B.stations.filter(function (x) { return s.need.indexOf(x.letter) === -1; })[0];
    s.tapeDialTo(w.ch); window.__w = w; window.__p0 = B.picks;
    var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, letter: w.letter };
  });
  await page.mouse.move(wr.x, wr.y); await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.tp.picks > window.__p0; }, null, { timeout: 30000 }).catch(function () {});
  await page.mouse.up();
  var wrong = await page.evaluate(async function () {
    var s = SolScene, B = s.tp, w = window.__w; await __gwait(150);
    var o = { strikes: s.strikes, score: s.score, state: w.state, mark: B.mark.text, label: s._lastHitLabel };
    s.iframeMs = 0; s.keys.SPACE.isDown = true; await __gwait(B.P.lockMs * 2); s.keys.SPACE.isDown = false;
    o.again = s.strikes;
    return o;
  });
  check(wrong.strikes === 1 && wrong.score === 0 && wrong.state === "dead" && wrong.mark === "✕" && /WRONG LETTER/.test(wrong.label || "") && wrong.again === 1,
    "holding the TUNE button on a wrong letter's channel costs a life and crosses it out; tuning it again costs nothing: " + JSON.stringify(wrong));

  /* the tape: passing through or turning away in time is safe; staying until the ring closes costs a life */
  var tape = await page.evaluate(async function () {
    var s = SolScene, B = s.tp, P = B.P, o = {}; __quiet();
    var tp = B.tapes[0], ch0 = tp.ch;
    s.tapeDialTo(tp.ch); await __gwait(P.ringMs * 0.55);
    o.mid = { ring: +(B.ringT / P.ringMs).toFixed(2), well: B.well.visible, play: B.osd2.text, warn: B.warnTx.text };
    s.tapeDialTo(__static()); await __gwait(P.ringMs * 0.6);
    o.away = { strikes: s.strikes, ring: B.ringT };
    s.tapeDialTo(tp.ch); await __until(function () { return s.strikes > 0; }, 90000);
    o.stay = { strikes: s.strikes, label: s._lastHitLabel, moved: tp.ch !== ch0 };
    return o;
  });
  console.log("tape", JSON.stringify(tape));
  check(tape.mid.ring > 0.3 && tape.mid.well && /PLAY/.test(tape.mid.play) && /TAPE/.test(tape.mid.warn) && tape.away.strikes === 0 && tape.away.ring === 0,
    "on the tape's channel the well shows (▶ PLAY) and its ring of light starts closing; turning away in time costs nothing: " + JSON.stringify({ mid: tape.mid, away: tape.away }));
  check(tape.stay.strikes === 1 && /WATCHED THE TAPE/.test(tape.stay.label || "") && tape.stay.moved, "staying until the ring closes costs a life, and the tape moves to another channel: " + JSON.stringify(tape.stay));

  /* the seven days: she crawls closer every day; the seventh day costs a life and the days start again */
  var days = await page.evaluate(async function () {
    var s = SolScene, B = s.tp, P = B.P, o = { seen: [], scale: [] }; __quiet();
    s.tapeDialTo(__static());
    P.dayMs = 450; B.dayT = 0; B.day = 0;
    var last = -1;
    await __until(function () {
      if (B.day !== last && B.day < 7) { last = B.day; o.seen.push(B.day); }
      if (B.lurch === 0 && B.day > 0) o.scale[B.day] = +B.girl.scaleX.toFixed(3);
      return s.strikes > 0;
    }, 120000);
    o.strikes = s.strikes; o.label = s._lastHitLabel; o.day = B.day; o.vcr = B.vcrTx.text;
    o.grow = s.tapeFigAt(6 / 7).s > s.tapeFigAt(3 / 7).s && s.tapeFigAt(3 / 7).s > s.tapeFigAt(0).s;
    P.dayMs = 1e9;
    return o;
  });
  console.log("days", JSON.stringify(days));
  check(days.seen.join() === "0,1,2,3,4,5,6" && days.grow && days.strikes === 1 && /SEVENTH DAY/.test(days.label || "") && days.day === 0 && days.vcr === "7 DAYS",
    "the VCR counts seven days and she crawls closer (and bigger) each day; when the seventh ends she reaches you: a life, and the days start again: " + JSON.stringify({ seen: days.seen, strikes: days.strikes, label: days.label, vcr: days.vcr }));

  /* answering before the seventh day (the real Space key) costs nothing and brings seven more days */
  var pre = await page.evaluate(async function () {
    var s = SolScene, B = s.tp, P = B.P; __quiet();
    s.need = [s.need[0]];   /* one letter, for this check */
    var r = s.tapeStationOf(s.need[0]); s.tapeDialTo(r.ch);
    P.dayMs = 700; B.dayT = 0; B.day = 0;
    await __until(function () { return B.day >= 2; });
    window.__sc = s.score; window.__coins = s.nightCoins;
    return { day: B.day };
  });
  await page.keyboard.down("Space");
  await page.waitForFunction(function () { return SolScene.score > window.__sc; }, null, { timeout: 30000 }).catch(function () {});
  await page.keyboard.up("Space");
  var right = await page.evaluate(async function () {
    var s = SolScene, B = s.tp, o = { score: s.score - window.__sc, strikes: s.strikes, coins: s.nightCoins > window.__coins, between: s._between, retreat: B.retreat > 0 };
    await __until(function () { return !s._between && (s.readOpen || B.retreat === 0); }, 20000);
    o.dayAfter = B.day; o.dayT = B.dayT; o.fresh = B.stations.every(function (x) { return x.state === "live"; });
    return o;
  });
  check(pre.day >= 2 && right.score === 1 && right.strikes === 0 && right.coins && right.retreat && right.dayAfter === 0 && right.fresh,
    "the real Space key on the right letter's channel answers it (coins, she goes back) before the seventh day; the next question brings seven more days: " + JSON.stringify({ pre: pre, right: right }));
  await shot("tape-01-level1-answered");

  /* Select TWO: the first right letter (a mouse button held on the screen) is ticked; the second answers it */
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 15000 }).catch(function () {});
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 10000 }).catch(function () {});
  var two0 = await page.evaluate(function () {
    var s = SolScene, B = s.tp; __quiet(); s.tutLockUntil = 0;
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = []; window.__pair = pair; window.__sc = s.score; window.__coins = s.nightCoins; window.__p0 = B.picks;
    s.tapeDialTo(s.tapeStationOf(pair[0]).ch);
    return { pair: pair, sx: B.scrX + B.scrW / 2, sy: B.scrY + B.scrH / 2 };
  });
  var sp = await pagePt(two0.sx, two0.sy);
  await page.mouse.move(sp.x, sp.y); await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.tp.picks > window.__p0; }, null, { timeout: 30000 }).catch(function () {});
  await page.mouse.up();
  var two = await page.evaluate(async function () {
    var s = SolScene, B = s.tp, pair = window.__pair, o = {};
    await __gwait(150);
    var a = s.tapeStationOf(pair[0]);
    o.first = { score: s.score - window.__sc, state: a.state, mark: B.mark.text, found: s.extracted.join(""), strikes: s.strikes };
    s.tapeDialTo(s.tapeStationOf(pair[1]).ch); await __gwait(120);
    o.res = s.tapePick(s.tapeStationOf(pair[1]));
    o.second = { score: s.score - window.__sc, strikes: s.strikes, coins: s.nightCoins > window.__coins };
    return o;
  });
  check(two.first.score === 0 && two.first.state === "found" && two.first.mark === "✓" && two.first.found === two0.pair[0] && two.first.strikes === 0 && two.res === "done" && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right channels (the first, tuned with a mouse button held on the screen, is ticked; the second answers it): " + JSON.stringify(two));

  /* the early picture: tuned in, the lock ring closing, three days gone */
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 15000 }).catch(function () {});
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 10000 }).catch(function () {});
  await page.evaluate(async function () {
    var s = SolScene, B = s.tp; __quiet(); s.iframeMs = 1e9;
    B.dayT = B.P.dayMs * 3 + 5; await __until(function () { return B.day === 3 && B.lurch === 0; }, 30000);
    var r = s.tapeStationOf(s.need[0]); B.P.lockMs = 1e9; s.tapeDialTo(r.ch); s.keys.SPACE.isDown = true;
    await __gwait(500);
  });
  await shot("tape-02-level1");
  await page.evaluate(function () { var s = SolScene; s.keys.SPACE.isDown = false; s.tp.P.lockMs = 456; s.iframeMs = 0; });

  /* ── the difficulty: every level 2-100 harder than the one before, never easier on any setting ── */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.tape.params, s = SolScene, out = { same: typeof s.tapeParams === "function" && JSON.stringify(s.tapeParams(50)) === JSON.stringify(f(50)) };
    var up = ["channels", "lockMs", "drift", "driftSpd", "tapeMoves", "blackMs", "noise", "swap", "tapes"], down = ["dayMs", "tuneW", "snap", "ringMs", "blackEvery", "hijackEvery", "hijackWarn", "dots"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    out.news = SolModes.MODES.tape.news.length;
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l50: ramp.l50, l100: ramp.l100 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0 && ramp.news === 10, "tapeParams (on the def as params): every level 2-100 is harder than the one before and never easier, with a news line for every tier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat }));
  var e = ramp.l1, z = ramp.l100;
  check(e.dayMs >= 8900 && e.channels === 6 && e.drift === 0 && e.snap === 1 && e.dots === 1 && e.ringMs >= 3100 && e.lockMs <= 460 && e.hijackEvery >= 1e8 && e.blackMs === 0 && e.tapes === 1 && e.tuneW >= 0.41,
    "level 1 is gentle: a minute for the seven days, six channels with the stations dotted, a dial that settles, no drift, no power cuts, a slow ring: " + JSON.stringify(e));
  check(z.dayMs <= 3600 && z.channels === 12 && z.drift >= 0.3 && z.snap === 0 && z.dots === 0 && z.ringMs <= 1300 && z.tapes === 2 && z.swap === 1 && z.hijackEvery < 7000 && z.blackEvery <= 5100 && z.tuneW <= 0.2,
    "level 100 is intense: 25 seconds for the seven days, twelve drifting channels, two tapes, swaps, power cuts and the TV turning itself: " + JSON.stringify(z));

  /* ── level 10 plays; level 35: power cuts; level 45: the TV turns itself to the tape ── */
  var l10 = await gotoLevel(10);
  var p10 = await page.evaluate(async function () {
    var s = SolScene, B = s.tp; __quiet(); s.need = [s.need[0]];
    var sc = s.score, r = s.tapeStationOf(s.need[0]); s.tapeDialTo(r.ch); await __gwait(100);
    return { res: s.tapePick(r), score: s.score - sc };
  });
  check(l10.mode === "tape" && p10.res === "done" && p10.score === 1, "level 10 plays Seven Days and the right channel scores: " + JSON.stringify(p10));

  var l35 = await gotoLevel(35);
  var dark = await page.evaluate(async function () {
    var s = SolScene, B = s.tp, o = { blackMs: B.P.blackMs };
    B.blackT = 0; await __until(function () { return B.dark > 0; }, 20000);
    await __gwait(60);
    o.dark = B.dark > 0; o.light = B.light; o.numAlpha = B.nums[0].alpha; o.overlay = B.darkG.commandBuffer.length > 0;
    await __until(function () { return B.dark === 0; }, 30000); await __gwait(200);
    o.after = { light: B.light, numAlpha: B.nums[0].alpha };
    return o;
  });
  check(/New this time:.*[Pp]ower cuts/.test(l35.card) && dark.dark && dark.light < 0.1 && dark.numAlpha < 0.2 && dark.overlay && dark.after.numAlpha > 0.5,
    "level 35: power cuts black the room out and hide the dial's numbers for a moment (the card says what's new): " + JSON.stringify(dark));

  var l45 = await gotoLevel(45);
  var hij = await page.evaluate(async function () {
    var s = SolScene, B = s.tp, P = B.P, o = {}; __quiet();
    P.hijackEvery = 15000; B.hijackT = 0; s.tapeDialTo(__static());
    await __until(function () { return !!B.hij; }, 20000);
    o.warn = { shudder: !!B.hij, text: B.warnTx.text };
    await __until(function () { return !B.hij && !B.hijSpin; }, 30000);
    var tp = B.tapes.filter(function (t) { return Math.abs(t.ch - B.d) < 0.05; })[0];
    o.landed = !!tp;
    /* turn away at once: ◀ */
    s.keys.LEFT.isDown = true; await __gwait(450); s.keys.LEFT.isDown = false;
    s.tapeDialTo(__static()); B.hijackT = 1e9;
    await __gwait(P.ringMs * 1.3);
    o.avoid = { strikes: s.strikes, ring: B.ringT };
    /* ... or stay, and the ring closes */
    B.hijackT = 0; await __until(function () { return !!B.hij; }, 20000);
    await __until(function () { return !B.hij && !B.hijSpin; }, 30000);
    B.hijackT = 1e9;
    await __until(function () { return s.strikes > 0; }, 60000);
    o.stay = { strikes: s.strikes, label: s._lastHitLabel };
    return o;
  });
  console.log("hijack", JSON.stringify(hij));
  check(/New this time:.*by itself/.test(l45.card) && hij.warn.shudder && /CHANGING/.test(hij.warn.text) && hij.landed && hij.avoid.strikes === 0 && hij.stay.strikes === 1 && /TAPE/.test(hij.stay.label || ""),
    "level 45: the knob shudders and the TV turns itself to the tape; turning away avoids it, staying costs a life: " + JSON.stringify(hij));

  /* ── level 50 and level 100: the pictures ── */
  var l50 = await gotoLevel(50);
  var p50 = await page.evaluate(async function () {
    var s = SolScene, B = s.tp; __quiet(); s.iframeMs = 1e9;
    B.dayT = B.P.dayMs * 5 + 5; await __until(function () { return B.day === 5 && B.lurch === 0; }, 30000);
    s.tapeDialTo(B.tapes[0].ch); await __until(function () { return B.ringT > B.P.ringMs * 0.6; }, 30000);
    return { N: B.N, dots: B.P.dots, drift: B.P.drift, ring: +(B.ringT / B.P.ringMs).toFixed(2) };
  });
  await shot("tape-03-level50");
  await page.evaluate(function () { __quiet(); SolScene.tapeDialTo(__static()); });
  check(l50.mode === "tape" && p50.N === 10 && p50.dots === 1 && p50.drift > 0.1, "level 50 plays Seven Days with ten drifting channels: " + JSON.stringify(p50));

  var l100 = await gotoLevel(100);
  var p100 = await page.evaluate(async function () {
    var s = SolScene, B = s.tp, o = { N: B.N, tapes: B.tapes.length, dots: B.P.dots }; __quiet(); s.iframeMs = 1e9;
    B.dayT = B.P.dayMs * 6 + 5; await __until(function () { return B.day === 6 && B.lurch === 0; }, 30000);
    s.tapeDialTo(s.tapeStationOf(s.need[0]).ch + 0.1); B.dark = 1e5; B.P.hijackWarn = 1e9; s.tapeHijack();
    await __gwait(400);
    o.vcr = B.vcrTx.text;
    return o;
  });
  await shot("tape-04-level100");
  var p100b = await page.evaluate(async function () {
    var s = SolScene, B = s.tp; __quiet(); s.iframeMs = 0; s.need = [s.need[0]];
    var sc = s.score, r = s.tapeStationOf(s.need[0]); s.tapeDialTo(r.ch); await __gwait(100);
    return { res: s.tapePick(r), score: s.score - sc };
  });
  check(l100.mode === "tape" && l100.tier === 9 && /New this time:.*seventh day/.test(l100.card) && p100.N === 12 && p100.tapes === 2 && p100.dots === 0 && p100.vcr.trim() === "1 DAY" && p100b.res === "done" && p100b.score === 1,
    "level 100 plays Seven Days: twelve channels, two tapes, no dots, the last day; the right channel scores: " + JSON.stringify({ p100: p100, pick: p100b }));

  /* the seventh day's picture: she rises in front of you */
  await gotoLevel(20);
  await page.evaluate(async function () { var s = SolScene, B = s.tp; __quiet(); s.iframeMs = 0; s.tapeDialTo(__static()); B.P.dayMs = 500; B.dayT = 500 * 7 - 30; await __until(function () { return s.strikes > 0; }, 20000); await __gwait(150); });
  await shot("tape-05-seventh-day");

  /* losing: the last life ends the level with a Retry */
  var lose = await page.evaluate(async function () {
    var s = SolScene; __quiet(); s.strikes = s.needStrikes - 1;
    s.answerWrong("Z", "WRONG LETTER");
    for (var w = 0; w < 60 && !(s.ended && !document.getElementById("overlay").classList.contains("hidden")); w++) await __tw(100);
    await __tw(300);
    return { ended: s.ended, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Seven Days/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 200));
  await ctx.close();

  /* ── the 500-pixel-tall Canvas frame ── */
  var ctx2 = await browser.newContext({ viewport: { width: 900, height: 500 } });
  await ctx2.addInitScript(function () { window.SOL_STATE = "LIT"; });
  page = await ctx2.newPage();
  watch(page, "500px");
  await startTape(page);
  await gotoLevel(30);
  var small = await page.evaluate(async function () {
    var s = SolScene, B = s.tp; __quiet(); s.iframeMs = 1e9;
    B.dayT = B.P.dayMs * 4 + 5; await __until(function () { return B.day === 4 && B.lurch === 0; }, 30000);
    s.tapeDialTo(s.tapeStationOf(s.need[0]).ch); await __gwait(200);
    var last = B.nums[B.nums.length - 1], first = B.nums[0];
    return { W: s.W, H: s.H, k: +B.k.toFixed(2), tvTop: Math.round(B.tvTop), cabBot: B.cabBot, knobR: Math.round(B.kx + (47 + 10) * B.k), scr: [Math.round(B.scrX), Math.round(B.scrY), Math.round(B.scrW), Math.round(B.scrH)],
      nums: [Math.round(first.x), Math.round(first.y), Math.round(last.x), Math.round(last.y)], fig: Math.round(B.path[6][0] + 100 * B.path[6][2] * B.k), letter: B.letter.text, font: B.letter.style.fontSize };
  });
  await shot("tape-06-canvas-500");
  check(small.H <= 500 && small.tvTop >= 0 && small.cabBot <= small.H && small.knobR <= small.W && small.fig <= small.W + 4 && small.scr[3] >= 100 && small.letter.length === 1,
    "in a 500-pixel-tall frame the room, the TV, the dial and the figure all fit, and the screen stays readable: " + JSON.stringify(small));
  await ctx2.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
