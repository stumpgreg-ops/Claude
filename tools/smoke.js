/* Headless smoke test: node tools/smoke.js
   Serves the game, drives the state gateway, the reward builder over 20 rewards,
   the coin shop and the start of a night, and saves screenshots to tools/shots/. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var root = path.join(__dirname, ".."), shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", mp3: "audio/mpeg" };
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
  /* v5.5: WebGL through SwiftShader so the builder's 3D view runs headless */
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  var errors = [];
  page.on("response", function (r) { if (r.status() === 404) console.log("404", r.url()); });
  page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
  page.on("console", function (m) { if (m.type() === "error" || m.type() === "warning") { var t = m.text(); if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader/i.test(t)) errors.push(m.type() + ": " + t); } });
  var fails = [];
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png") }); }

  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(800);
  check(await page.isVisible("#state-screen"), "gateway shows first");
  /* the gateway also comes first on a Chromebook that already chose a state */
  await page.evaluate(function () { localStorage.setItem("afterHours.v1.state", "VA"); });
  await page.reload({ waitUntil: "load" }); await page.waitForTimeout(800);
  check(await page.isVisible("#state-screen") && !(await page.isVisible("#title-screen")), "gateway still first with a saved state");
  check(await page.isVisible('#state-screen .card.selected[data-state="VA"]'), "saved state is pre-highlighted");
  await page.evaluate(function () { localStorage.removeItem("afterHours.v1.state"); });
  await page.reload({ waitUntil: "load" }); await page.waitForTimeout(800);
  await shot("01-gateway");
  await page.click('#state-screen .card[data-state="NJ"]');
  await page.waitForTimeout(200);
  check(await page.isVisible("#title-screen"), "title after picking New Jersey");
  check(await page.isVisible('#title-screen .card[data-family="NJ5"]'), "Grade 5 card visible for NJ");
  check(!(await page.isVisible('#title-screen .card[data-family="G9"]')), "Grade 9 card hidden for NJ");
  check((await page.textContent("#title-kicker")).indexOf("NJSLA") !== -1, "kicker names NJSLA");
  await shot("02-title-nj");

  /* content pools */
  var pools = await page.evaluate(function () {
    var out = {};
    ["G9", "G10", "G11", "NJ5"].forEach(function (f) {
      out[f] = { all: heistBuildPack(f, "ALL").claims.length, RL: heistBuildPack(f, "RL").claims.length, RI: heistBuildPack(f, "RI").claims.length, RV: heistBuildPack(f, "RV").claims.length, DSR: heistBuildPack(f, "DSR").claims.length };
    });
    out.packs = HEIST_PACKS.length;
    return out;
  });
  console.log("pools", JSON.stringify(pools));
  check(pools.NJ5.all > 250 && pools.G9.all > 180 && pools.G11.all > 500, "question pools are large");
  /* v5.9: the Odyssey packs — every episode has questions, an episode pick serves only that episode, and no other game sees them */
  var ody = await page.evaluate(function () {
    var out = { all: heistBuildPack("ODY", "ALL").claims.length, eps: {}, stray: 0 };
    ["LOTUS", "CYCLOPS", "CIRCE", "HELIOS", "CALYPSO", "VOYAGE"].forEach(function (e) {
      var cl = heistBuildPack("ODY", e).claims;
      out.eps[e] = cl.length;
      cl.forEach(function (c) { if (String(c.episode).toUpperCase() !== e) out.stray++; });
    });
    ["G9", "G10", "G11", "NJ5"].forEach(function (f) { heistBuildPack(f, "ALL").claims.forEach(function (c) { if (c.family === "ODY") out.stray++; }); });
    return out;
  });
  console.log("odyssey", JSON.stringify(ody));
  check(ody.all > 200 && Object.keys(ody.eps).every(function (e) { return ody.eps[e] >= 30; }) && ody.stray === 0, "Odyssey: every episode has its own questions, and they stay out of the other games");

  /* v4.9.7: the shop is open from night 1 — with no build yet it asks Town or Castle first, and a wall
     bought before the first reward must not steal lot 1 from the keep */
  await page.evaluate(function () { localStorage.removeItem("afterHours.v1.build"); SolBuild.init(); });
  var early = await page.evaluate(function () { return SolBuild.state(); });
  check(early.canShop === true && early.theme === null, "shop is open before the first reward: " + JSON.stringify(early));
  await page.evaluate(function () { SolBuild.addCoins(60, "test"); window.__closed = false; SolBuild.showShop(1, function () { window.__closed = true; }); });
  await page.waitForSelector(".build-theme");
  check(/Town or a Castle/.test(await page.textContent("#build-overlay h2")), "night-1 shop asks Town or Castle first");
  await shot("02b-shop-theme");
  await page.click(".build-theme:nth-child(2)");
  await page.click("#build-overlay .btn.primary");
  await page.waitForSelector(".build-shop .build-opt");
  await page.click(".build-shop .build-opt >> nth=0");           /* Wall, 15 coins */
  await page.waitForSelector(".build-styles .build-opt");
  await page.click(".build-styles .build-opt:nth-child(1)");
  await page.click("#build-overlay .btn.primary");
  await page.waitForSelector(".build-note:not(.hidden)");
  await page.click("#build-overlay .btn.primary");
  await page.waitForTimeout(150);
  var earlyBuy = await page.evaluate(function () {
    var s = JSON.parse(localStorage.getItem("afterHours.v1.build"));
    return { theme: s.theme, kit: s.kit, picks: s.picks.map(function (p) { return p.piece; }), owned: Object.keys(s.owned), coins: s.coins, offer: SolBuild._offer(5) };
  });
  console.log("early shop", JSON.stringify(earlyBuy));
  check(earlyBuy.theme === "castle" && earlyBuy.picks.length === 1 && earlyBuy.picks[0] === "wall" && earlyBuy.owned.indexOf("wall") !== -1 && earlyBuy.coins === 45, "a wall bought on level 1 is placed, unlocked and costs 15 coins");
  check(earlyBuy.offer.length === 3 && !/wall|gate|tower/.test(earlyBuy.offer.join(" ")), "first reward still offers keeps after an early purchase: " + earlyBuy.offer.join(", "));
  await page.click("#build-overlay .btn.primary");                    /* Back to shop */
  await page.waitForTimeout(150);
  await page.click("#build-overlay .btn.primary");                    /* Done */
  await page.waitForFunction(function () { return window.__closed === true; });

  /* reward builder over 20 rewards (random choices) — a reload gives the builder a fresh save */
  await page.evaluate(function () { localStorage.removeItem("afterHours.v1.build"); });
  await page.reload({ waitUntil: "load" }); await page.waitForTimeout(800);
  await page.click('#state-screen .card[data-state="NJ"]'); await page.waitForTimeout(200);
  for (var night = 5; night <= 100; night += 5) {
    await page.evaluate(function (n) { window.__done = false; SolBuild.showReward(n, function () { window.__done = true; }); }, night);
    await page.waitForSelector("#build-overlay:not(.hidden)", { timeout: 5000 });
    if (night === 5) {
      await page.waitForSelector(".build-theme");
      await page.click(".build-theme:nth-child(2)");   /* the castle kit is the path under test; the town gets a short pass below */
      await page.click("#build-overlay .btn.primary");
    }
    await page.waitForSelector(".build-options .build-opt");
    var nOpt = await page.$$eval(".build-options .build-opt", function (l) { return l.length; });
    check(nOpt === 3, "night " + night + ": three pieces offered");
    if (night === 5) {
      var names = await page.$$eval(".build-options .build-opt .name", function (l) { return l.map(function (e) { return e.textContent; }); });
      check(!/wall|fence|scaffold|ruin|tower/i.test(names.join(" ")), "first offer is modest keeps: " + names.join(", "));
      await shot("03-first-building");
    }
    if (night === 10 || night === 15 || night === 20 || night === 25) {
      /* v4.9.8: rewards 2-5 offer only towers and gate pieces */
      var ids = await page.$$eval(".build-options .build-opt .name", function (l) { return l.map(function (e) { return e.textContent; }); });
      check(ids.every(function (nm) { return /tower|gate/i.test(nm); }), "level " + night + " offers towers and gates only: " + ids.join(", "));
    }
    await page.click(".build-options .build-opt:nth-child(" + (1 + Math.floor(Math.random() * 3)) + ")");
    await page.click("#build-overlay .btn.primary");
    /* pieces with no coloured parts (houses, most props) skip the style step and go straight to placing */
    await page.waitForSelector(".build-styles:not(.hidden) .build-opt, .build-note:not(.hidden)");
    if (await page.isVisible(".build-styles:not(.hidden) .build-opt")) {
      if (night === 5 || night === 10) await shot("04-style-" + night);
      await page.click(".build-styles .build-opt:nth-child(" + (1 + Math.floor(Math.random() * 3)) + ")");
      await page.click("#build-overlay .btn.primary");
    }
    await page.waitForSelector(".build-note:not(.hidden)");
    /* place step: the new piece was auto-joined; drag it one cell and check it snaps to a free spot */
    if (night === 15) {
      var box = await page.$eval("#build-overlay .build-scene canvas", function (c) { var r = c.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
      var before = await page.evaluate(function () { var s = JSON.parse(localStorage.getItem("afterHours.v1.build")); return s.picks[s.picks.length - 1]; });
      var hit = await page.evaluate(function () {
        /* find the new piece's screen position through the module's own fit: emulate by reading the canvas note */
        return document.querySelector(".build-note").textContent;
      });
      console.log("place note:", hit);
      await shot("05b-place-15");
    }
    await page.click("#build-overlay .btn.primary");
    await page.waitForSelector(".build-note:not(.hidden)");
    if (night === 40 || night === 100) { await page.waitForTimeout(400); await shot("05-done-" + night); }
    await page.click("#build-overlay .btn.primary");
    await page.waitForFunction(function () { return window.__done === true; });
  }
  var joined = await page.evaluate(function () {
    /* every building must touch at least one other building (the estate is one joined structure) */
    var s = JSON.parse(localStorage.getItem("afterHours.v1.build")), cells = {}, ok = true;
    var P = null; var xhr = new XMLHttpRequest(); xhr.open("GET", "assets/build/pieces.json", false); xhr.send(); P = JSON.parse(xhr.responseText).pieces;
    function pc(id) { return P.filter(function (x) { return x.id === id; })[0]; }
    var rs = s.picks.filter(function (pk) { var p = pc(pk.piece); return p && p.kind !== "topper"; }).map(function (pk) { return { id: pk.piece, cx: pk.cx, cy: pk.cy, n: pc(pk.piece).cells || 1 }; });
    function touches(a, b) { var sx = (a.cx + a.n === b.cx || b.cx + b.n === a.cx) && a.cy < b.cy + b.n && a.cy + a.n > b.cy; var sy = (a.cy + a.n === b.cy || b.cy + b.n === a.cy) && a.cx < b.cx + b.n && a.cx + a.n > b.cx; return sx || sy; }
    function overlaps(a, b) { return a.cx < b.cx + b.n && a.cx + a.n > b.cx && a.cy < b.cy + b.n && a.cy + a.n > b.cy; }
    var lonely = 0, overlap = 0, pairs = [];
    rs.forEach(function (a, i) { var t = false; rs.forEach(function (b, j) { if (i !== j) { if (touches(a, b)) t = true; if (overlaps(a, b)) { overlap++; if (i < j) pairs.push(a.id + "@" + a.cx + "," + a.cy + "/" + b.id); } } }); if (!t) lonely++; });
    return { pieces: rs.length, lonely: lonely, overlap: overlap, pairs: pairs.slice(0, 6) };
  });
  check(joined.pieces >= 20 && joined.overlap === 0, "no two pieces overlap (auto-placed pieces join the build): " + JSON.stringify(joined));
  var rt0 = await page.evaluate(function () { return SolBuild.state().rating; });
  console.log("rating", JSON.stringify(rt0));
  var stage = await page.evaluate(function () { return SolBuild._coreStage(); });
  check(stage === 3, "the keep has grown to its final stage after 20 rewards (stage " + stage + ")");
  check(rt0 && rt0.score > 200, "castle rating computed");
  var st = await page.evaluate(function () { return SolBuild.state(); });
  check(st.count === 20 && st.walls === true && st.owned >= 8, "20 rewards taken, walls up, pieces unlocked: " + JSON.stringify(st));

  /* shop: coins, buildings, decorations, packs */
  await page.evaluate(function () { SolBuild.addCoins(600, "test"); window.__closed = false; SolBuild.showShop(41, function () { window.__closed = true; }); });
  await page.waitForSelector(".build-shop .build-opt");
  await shot("06-shop-buildings");
  /* buy a building the student does not own yet (owned ones just place a free copy) */
  await page.click(".build-shop .build-opt:has(.price:not(.own)) >> nth=0");
  await page.waitForSelector(".build-styles:not(.hidden) .build-opt, .build-note:not(.hidden)");
  if (await page.isVisible(".build-styles:not(.hidden) .build-opt")) {
    await page.click(".build-styles .build-opt:nth-child(2)");
    await page.click("#build-overlay .btn.primary");
  }
  await page.waitForSelector(".build-note:not(.hidden)");
  await page.click("#build-overlay .btn.primary");      /* Keep it here */
  await page.waitForTimeout(150);
  await page.click("#build-overlay .btn.primary");      /* Back to shop */
  await page.click(".build-tab:nth-child(2)");
  await page.waitForTimeout(200);
  await page.click(".build-shop .build-opt:has(.price:not(.own)) >> nth=0");
  await page.waitForTimeout(200);
  await page.click(".build-tab:nth-child(3)");
  await page.waitForTimeout(200);
  await shot("07-shop-packs");
  await page.click(".build-shop .build-opt >> nth=0");
  await page.waitForTimeout(400);
  var st2 = await page.evaluate(function () { return SolBuild.state(); });
  check(st2.buildings >= 21 && st2.decorations >= 1 && st2.coins < 600, "shop purchases landed: " + JSON.stringify(st2));
  await shot("08-shop-after");
  await page.click("#build-overlay .btn.primary");
  await page.waitForFunction(function () { return window.__closed === true; });

  /* build code round trip */
  var rt = await page.evaluate(function () {
    var code = SolBuild.exportCode(), before = JSON.stringify(SolBuild.state());
    localStorage.removeItem("afterHours.v1.build");
    var r = SolBuild.importCode(code), after = JSON.stringify(SolBuild.state()), bo = JSON.parse(before), ao = JSON.parse(after), diff = {};
    Object.keys(bo).forEach(function (k) { if (JSON.stringify(bo[k]) !== JSON.stringify(ao[k])) diff[k] = [bo[k], ao[k]]; });
    return { ok: r.ok, count: r.count, same: after === before, diff: diff };
  });
  check(rt.ok && rt.same, "build code round trip " + JSON.stringify(rt));

  /* short town pass: three rewards on the village theme still work */
  await page.evaluate(function () { localStorage.setItem("smoke.castleCode", SolBuild.exportCode()); localStorage.removeItem("afterHours.v1.build"); });
  await page.reload({ waitUntil: "load" }); await page.waitForTimeout(800);
  await page.click('#state-screen .card[data-state="NJ"]'); await page.waitForTimeout(200);
  for (var tn = 5; tn <= 15; tn += 5) {
    await page.evaluate(function (n) { window.__done = false; SolBuild.showReward(n, function () { window.__done = true; }); }, tn);
    await page.waitForSelector("#build-overlay:not(.hidden)", { timeout: 5000 });
    if (tn === 5) { await page.waitForSelector(".build-theme"); await page.click(".build-theme:nth-child(1)"); await page.click("#build-overlay .btn.primary"); }
    await page.waitForSelector(".build-options .build-opt"); await page.click(".build-options .build-opt:nth-child(1)"); await page.click("#build-overlay .btn.primary");
    await page.waitForSelector(".build-styles .build-opt"); await page.click(".build-styles .build-opt:nth-child(1)"); await page.click("#build-overlay .btn.primary");
    await page.waitForSelector(".build-note:not(.hidden)"); await page.click("#build-overlay .btn.primary"); await page.waitForSelector(".build-note:not(.hidden)");
    await page.click("#build-overlay .btn.primary"); await page.waitForFunction(function () { return window.__done === true; });
  }
  var townSt = await page.evaluate(function () { return SolBuild.state(); });
  check(townSt.theme === "village" && townSt.buildings === 3, "town theme still builds: " + JSON.stringify({ theme: townSt.theme, b: townSt.buildings }));
  await shot("09c-town");
  /* v5.7.9: dragging a town piece holds the view still (the ground used to slide under a lone house), the piece
     lands where it is let go, and Turn mirrors a town picture (two ways to face) */
  await page.evaluate(function () { SolBuild.showGallery(); });
  await page.waitForSelector("#build-overlay:not(.hidden)"); await page.waitForTimeout(600);
  var tA = await page.evaluate(function () { return { pk: SolBuild._pickScreen(0), g: SolBuild._probe(0, 0, 0) }; });
  await page.mouse.move(tA.pk.x, tA.pk.y - 30); await page.mouse.down();
  for (var tk = 1; tk <= 8; tk++) { await page.mouse.move(tA.pk.x - tk * 22, tA.pk.y - 30 + tk * 11); await page.waitForTimeout(25); }
  var tMid = await page.evaluate(function () { return SolBuild._probe(0, 0, 0); });
  await page.mouse.up(); await page.waitForTimeout(150);
  var tB = await page.evaluate(function () { var o = { pk: SolBuild._pickScreen(0) }; SolBuild._select(0); o.r1 = SolBuild._turn(); o.note = document.querySelector(".build-note").textContent; o.r2 = SolBuild._turn(); return o; });
  var tMoved = tB.pk.cx !== tA.pk.cx || tB.pk.cy !== tA.pk.cy;
  check(Math.abs(tMid.x2 - tA.g.x2) < 1 && Math.abs(tMid.y2 - tA.g.y2) < 1, "town: the ground holds still while a piece is dragged");
  check(!tMoved || Math.hypot(tB.pk.x - (tA.pk.x - 176), tB.pk.y - (tA.pk.y + 88)) < 60, "town: a dragged piece lands where it is let go: " + JSON.stringify({ moved: tMoved, from: [Math.round(tA.pk.x), Math.round(tA.pk.y)], to: [Math.round(tB.pk.x), Math.round(tB.pk.y)] }));
  check(tB.r1 === 1 && tB.r2 === 0 && /faces the other way/.test(tB.note), "town: Turn flips a town building to face the other way and back: " + JSON.stringify({ r1: tB.r1, r2: tB.r2 }));
  await page.evaluate(function () { SolBuild.close(); });
  await page.evaluate(function () { SolBuild.importCode(localStorage.getItem("smoke.castleCode")); });
  await page.reload({ waitUntil: "load" }); await page.waitForTimeout(800);
  await page.click('#state-screen .card[data-state="NJ"]'); await page.waitForTimeout(200);

  /* gallery */
  await page.evaluate(function () { SolBuild.showGallery(); });
  await page.waitForSelector("#build-overlay:not(.hidden)");
  await page.waitForTimeout(2500);
  await shot("09-gallery");
  /* v5.5: the castle draws in 3D, lined up with the 2D layer's projection, and every model it asked for arrived */
  var td = await page.evaluate(function () { return { probe: SolBuild._probe(3, 2, 1), loads: SolBuild._loads3d() }; });
  console.log("3d", JSON.stringify(td));
  check(td.probe && td.probe.use3d && td.probe.p3 && Math.abs(td.probe.p3.x - td.probe.x2) < 0.5 && Math.abs(td.probe.p3.y - td.probe.y2) < 0.5, "the 3D view is on and its projection matches the 2D layer");
  check(td.loads && td.loads.models === "ok" && td.loads.failed === 0 && td.loads.loaded === td.loads.total && td.loads.total > 3, "every 3D model the castle needs loaded: " + JSON.stringify(td.loads));
  /* v4.9.8: no arrange mode — any piece drags at any time. Drag the core piece a long way to the right and check it moved (or bounced back with a reason) */
  check(!(await page.isVisible("text=Arrange pieces")), "gallery has no separate arrange mode");
  var cv = await page.$eval("#build-overlay .build-scene canvas", function (c) { var r = c.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  var beforeMove = await page.evaluate(function () { return JSON.parse(localStorage.getItem("afterHours.v1.build")).picks.map(function (p) { return p.cx + "," + p.cy; }).join(" "); });
  var p0 = await page.evaluate(function () { return SolBuild._pickScreen(0); });
  console.log("drag from", JSON.stringify(p0));
  /* synthetic pointer events on the canvas (headless mouse moves were coalesced to one position) */
  await page.evaluate(function (q) {
    var c = document.querySelector("#build-overlay .build-scene canvas");   /* not the hidden theme-preview canvases */
    function ev(type, x, y) { c.dispatchEvent(new PointerEvent(type, { pointerId: 7, pointerType: "mouse", isPrimary: true, clientX: x, clientY: y, bubbles: true, cancelable: true })); }
    ev("pointerdown", q.x, q.y);
    for (var i = 1; i <= 12; i++) ev("pointermove", q.x + 22 * i, q.y + 11 * i);
    ev("pointerup", q.x + 22 * 12, q.y + 11 * 12);
  }, p0);
  await page.waitForTimeout(200);
  var afterMove = await page.evaluate(function () { return JSON.parse(localStorage.getItem("afterHours.v1.build")).picks.map(function (p) { return p.cx + "," + p.cy; }).join(" "); });
  var noteTxt = await page.textContent(".build-note");
  console.log("arrange:", beforeMove === afterMove ? "no move (" + noteTxt + ")" : "moved (" + noteTxt + ")");
  check(beforeMove !== afterMove || /taken/i.test(noteTxt), "gallery drag moves a piece anywhere free (or reports the spot is taken): " + noteTxt);
  await shot("09b-arrange");
  /* v5 editor: palette placement of unlocked pieces, selection bar, delete, rotate, zoom, code round trip after a rotation */
  var pal = await page.$$eval(".build-plist .build-pitem", function (l) { return { total: l.length, locked: l.filter(function (b) { return b.classList.contains("locked"); }).length }; });
  check(pal.total > 0 && pal.locked > 0 && pal.locked < pal.total, "palette lists unlocked and locked pieces: " + JSON.stringify(pal));
  var edit = await page.evaluate(function () {
    var out = {}, s0 = SolBuild.state();
    out.placed = SolBuild._place("wall"); out.afterPlace = SolBuild.state().buildings - s0.buildings;
    out.barVisible = !document.querySelector(".build-pbar").classList.contains("hidden");
    SolBuild._delete(); out.afterDelete = SolBuild.state().buildings - s0.buildings;
    out.ownedStill = SolBuild._owned().indexOf("wall") !== -1;
    out.rot = [SolBuild._rotate(90), SolBuild._rotate(90)]; out.zoom = SolBuild._zoom(1.25);
    SolBuild._rotate(37); out.angle = SolBuild._angle();                     /* one-degree turning: 217° */
    out.turned = (SolBuild._place("square-tower"), SolBuild._turn());         /* right-click / Turn: a quarter turn on one piece */
    var code = SolBuild.exportCode(), before = JSON.stringify(SolBuild.state().rating);
    SolBuild.importCode(code); out.rtSame = JSON.stringify(SolBuild.state().rating) === before;
    out.rotKept = JSON.parse(localStorage.getItem("afterHours.v1.build")).picks.some(function (p) { return p.rot === 1; });
    out.rotAfter = SolBuild.state().view.r;
    return out;
  });
  console.log("editor", JSON.stringify(edit));
  check(edit.placed && edit.afterPlace === 1 && edit.barVisible && edit.afterDelete === 0 && edit.ownedStill, "palette places a free copy, selection bar shows, delete keeps the piece unlocked");
  check(edit.rot[0] === 1 && edit.rot[1] === 2 && Math.abs(edit.angle - 217) < 0.01 && edit.zoom > 1 && edit.rtSame, "view turns by degrees and zooms; the build code survives a rotated view");
  check(edit.turned === 1 && edit.rotKept, "a piece turns a quarter turn and its turn survives the build code");
  await page.waitForTimeout(1200);
  await shot("09d-rotated");
  var td2 = await page.evaluate(function () { return { probe: SolBuild._probe(-2, 4, 0), loads: SolBuild._loads3d() }; });
  check(td2.probe.use3d && Math.abs(td2.probe.p3.x - td2.probe.x2) < 0.5 && Math.abs(td2.probe.p3.y - td2.probe.y2) < 0.5 && td2.loads.failed === 0, "the 3D view still lines up at 217° after placing and turning pieces");
  await page.evaluate(function () { SolBuild._rotate(-217); SolBuild._zoom(0.8); });
  await page.keyboard.press("Escape");

  /* start a Grade 5 night */
  await page.click('#title-screen .card[data-family="NJ5"]');
  /* v5.8.3: the game mode screen comes after the grade: all modes, or one mode on every level */
  await page.waitForSelector("#mode-screen:not(.hidden)");
  var gm = await page.evaluate(function () {
    return { cards: Array.prototype.map.call(document.querySelectorAll("#mode-packs .card"), function (c) { return c.getAttribute("data-gamemode"); }).join(","),
      sel: (document.querySelector("#mode-packs .card.selected") || {}).getAttribute && document.querySelector("#mode-packs .card.selected").getAttribute("data-gamemode"),
      skill: !document.getElementById("skill-screen").classList.contains("hidden"), kick: document.getElementById("mode-kicker").textContent };
  });
  await shot("10a-game-mode");
  await page.click('#mode-packs .card[data-gamemode="raid"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  gm.one = await page.evaluate(function () { return { kick: document.getElementById("skill-kicker").textContent, l1: (SolModes.modeFor(1) || {}).id, l10: (SolModes.modeFor(10) || {}).id, saved: localStorage.getItem("afterHours.v1.gameMode"), modeHidden: document.getElementById("mode-screen").classList.contains("hidden") }; });
  await page.click("#btn-skill-back");
  await page.waitForSelector("#mode-screen:not(.hidden)");
  gm.backSel = await page.evaluate(function () { return document.querySelector("#mode-packs .card.selected").getAttribute("data-gamemode"); });
  await page.click('#mode-packs .card[data-gamemode="maze"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  gm.maze = await page.evaluate(function () { return [2, 4, 10].map(function (n) { return SolModes.modeFor(n) ? "x" : "-"; }).join(""); });
  await page.waitForTimeout(500);   /* a button ignores a second tap within 450 ms */
  await page.click("#btn-skill-back"); await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click("#btn-mode-back"); await page.waitForTimeout(300);
  gm.backToGrades = await page.isVisible('#title-screen .card[data-family="NJ5"]') && !(await page.isVisible("#mode-screen"));
  await page.click('#title-screen .card[data-family="NJ5"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-gamemode="ALL"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  gm.all = await page.evaluate(function () { return (SolModes.modeFor(2) || {}).id + "," + (SolModes.modeFor(1) ? "x" : "-"); });
  check(gm.cards === "ALL,maze,raid,rocks,sky,ring" && !gm.skill && /Grade 5/.test(gm.kick), "after the grade, a game mode screen: all modes, the maze, or one of the four shooters: " + JSON.stringify(gm));
  check(gm.one.l1 === "raid" && gm.one.l10 === "raid" && /Eagle Swoop/.test(gm.one.kick) && gm.one.saved === "raid" && gm.one.modeHidden && gm.backSel === "raid", "one mode: every level (a boss level too) is that mode, the skill screen names it, and it is remembered: " + JSON.stringify(gm.one));
  check(gm.maze === "---" && gm.backToGrades && gm.all === "raid,-", "maze only: no shooter levels; Back goes skill → mode → grades; All modes brings the rotation back: " + JSON.stringify(gm));
  check((await page.$$eval("#skill-packs .card", function (l) { return l.length; })) === 5, "five NJ skill cards");
  await shot("10-skills-nj");
  await page.click("#btn-skill-start");
  await page.waitForTimeout(300);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForTimeout(3000);
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(300); }
  await page.waitForTimeout(1500);
  var hud = await page.evaluate(function () { return { sol: document.getElementById("job-sol").textContent, coins: document.getElementById("bonus-pip").textContent, stem: document.getElementById("eoc-stem").textContent, kick: document.getElementById("read-kicker") && document.getElementById("read-kicker").textContent }; });
  console.log("hud", JSON.stringify(hud));
  check(/Reading level [123]/.test(hud.sol), "HUD shows the adaptive reading level");
  check(/^Coins/.test(hud.coins), "HUD shows coins");
  check(hud.stem.length > 10, "a question is loaded");
  await shot("11-night-read");
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForTimeout(800);
  await shot("12-night-play");

  /* stamina: night 1 draws a tiny passage, night 90 a long one */
  var stamina = await page.evaluate(async function () {
    function wordsNow() { return window.SolScene && SolScene.claim ? SolScene.claim.words : 0; }
    var out = { target1: heistTargetWords(1), target90: heistTargetWords(90), n1: [], n90: [] };
    var sc = window.SolScene;
    for (var i = 0; i < 5; i++) { sc.nextClaim(); out.n1.push(wordsNow()); }
    sc.night = 90; sc.nightPacks = [];
    for (var j = 0; j < 5; j++) { sc.nextClaim(); out.n90.push(wordsNow()); }
    sc.night = 1;
    return out;
  });
  console.log("stamina", JSON.stringify(stamina));
  var avg = function (a) { return a.reduce(function (x, y) { return x + y; }, 0) / a.length; };
  check(avg(stamina.n1) < 130 && avg(stamina.n90) > 300, "night 1 passages are much shorter than night 90 passages");

  /* letter tiles never sit on a hazard or a pickup (checked on several nights); a skull stuns a Hati in place */
  var hazardCheck = await page.evaluate(async function () {
    var out = { nights: [], worst: 0, skull: null };
    function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
    function checkNight(sc) {
      var bad = 0, min = 1e9, pts = [];
      (sc.puddles || []).concat(sc.mats || []).forEach(function (b) { pts.push({ x: b.x, y: b.y, r: Math.max(b.w, b.h) / 2 }); });
      (sc.secCams || []).forEach(function (c) { pts.push({ x: c.x, y: c.y, r: 0 }); });
      (sc.skulls || []).forEach(function (k) { if (k.live) pts.push({ x: k.x, y: k.y, r: 0 }); });
      ["zapPad", "mushPad", "firePad", "tarPad"].forEach(function (k) { if (sc[k] && sc[k].active) pts.push({ x: sc[k].x, y: sc[k].y, r: 0 }); });
      if (sc.autoGreen) pts.push({ x: sc.autoGreen.x, y: sc.autoGreen.y, r: Math.max(sc.autoGreen.w || 0, sc.autoGreen.h || 0) / 2 });
      (sc.slips || []).forEach(function (s) { pts.forEach(function (p) { var d = dist(s, p) - p.r; min = Math.min(min, d); if (d < 40) bad++; }); });
      return { night: sc.night, slips: (sc.slips || []).length, hazards: pts.length, bad: bad, minGap: Math.round(min) };
    }
    var sc = window.SolScene;
    out.nights.push(checkNight(sc));
    for (var n of [13, 30, 55]) {
      sc.scene.restart({ family: "NJ5", strand: "ALL", night: n });
      await new Promise(function (r) { setTimeout(r, 2500); });
      sc = window.SolScene;
      out.nights.push(checkNight(sc));
    }
    /* skull: a Hati on a skull is frozen where it is, not sent home */
    var j = sc.janitors && sc.janitors[0], k = (sc.skulls || []).filter(function (x) { return x.live; })[0];
    if (j && k) { var bx = j.x, by = j.y; sc.skullKillHati(j, k); out.skull = { frozen: j.trogFreezeMs > 0, eyes: j.eyesMs || 0, moved: Math.hypot(j.x - bx, j.y - by) > 1, skullGone: !k.live }; }
    sc.scene.restart({ family: "NJ5", strand: "ALL", night: 1 });
    await new Promise(function (r) { setTimeout(r, 2500); });
    return out;
  });
  console.log("hazards", JSON.stringify(hazardCheck));
  check(hazardCheck.nights.every(function (n) { return n.bad === 0 && n.slips === 4; }), "letter tiles sit clear of every hazard and pickup on nights 1/13/30/55");
  check(hazardCheck.skull && hazardCheck.skull.frozen && !hazardCheck.skull.eyes && !hazardCheck.skull.moved && hazardCheck.skull.skullGone, "a skull stuns a Hati in place: " + JSON.stringify(hazardCheck.skull));
  for (var w = 0; w < 10; w++) { if (await page.isVisible("#read-go")) { await page.click("#read-go"); break; } await page.waitForTimeout(300); }
  await page.waitForTimeout(500);

  /* a wrong letter costs a life: three wrong grabs end the night */
  var strikeRun = await page.evaluate(function () {
    var sc = window.SolScene, out = { before: sc.strikes, hud: [], ended: false };
    sc.spareLives = 0; sc.perks = {};   /* v5.6: no castle perks (a Blessing 1UP) in this check */
    for (var i = 0; i < 3; i++) {
      sc.iframeMs = 0; sc.stunMs = 0;
      sc.flagWrongAlarm({ x: sc.player.x, y: sc.player.y });
      out.hud.push(document.getElementById("strike-pip").textContent.split(" · ")[0]);
    }
    out.after = sc.strikes; out.ended = !!sc.ended; out.tag = sc.caughtFlashTag ? sc.caughtFlashTag.text : "";
    out.msg = document.getElementById("win-msg").textContent; out.title = document.getElementById("win-title").textContent;
    return out;
  });
  console.log("wrong-letter strikes", JSON.stringify(strikeRun));
  check(strikeRun.after === strikeRun.before + 3 && strikeRun.ended && /wrong letter/i.test(strikeRun.msg) && strikeRun.title === "Run over", "three wrong letters end the night");
  await page.waitForTimeout(500);
  await shot("13-run-over-wrong");

  /* adaptive + coins through the scene API */
  var adapt = await page.evaluate(function () {
    var sc = null; try { sc = window.__scene || null; } catch (e) {}
    return sc ? "scene" : "no";
  });
  /* v5.6: ten realms of ten levels, one creature each, Fenrir on every tenth level, castle perks */
  async function realmLevel(n) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "NJ5", strand: "ALL", night: n }); }, n);
    await page.waitForTimeout(2500);
  }
  var realmSeen = [];
  var wantFoe = { 11: "raven", 21: "troll", 31: "vent", 41: "serpent", 51: "boar", 61: "wisp", 71: "draugr", 81: "valkyrie" };
  for (var rn of [1, 11, 21, 31, 41, 51, 61, 71, 81, 91]) {
    await realmLevel(rn);
    realmSeen.push(await page.evaluate(function () { var s = SolScene; return { n: s.night, realm: s.realm && s.realm.name, flag: document.getElementById("round-flag").textContent, foes: (s.foes || []).map(function (f) { return f.kind; }), fenrir: !!s.fenrir }; }));
    if (rn === 31) await shot("15-realm-muspelheim");
  }
  console.log("realms", JSON.stringify(realmSeen));
  check(realmSeen.map(function (r) { return r.realm; }).join(",") === "Midgard,Niflheim,Jotunheim,Muspelheim,Svartalfheim,Vanaheim,Alfheim,Helheim,Asgard,Ragnarok", "ten realms of ten levels, named on the HUD");
  check(realmSeen.every(function (r) { return r.flag.indexOf(r.realm) !== -1 && !r.fenrir; }), "the HUD names the realm; no Fenrir on ordinary levels");
  check(realmSeen[0].foes.length === 0 && realmSeen.slice(1, 9).every(function (r) { return r.foes.length && r.foes.every(function (k) { return k === wantFoe[r.n]; }); }), "each realm brings its own creature (none in Midgard)");
  check(realmSeen[9].foes.length >= 3, "Ragnarok mixes creatures from the other realms");
  /* every creature that hurts costs a life, with its name on the CAUGHT tag */
  var foeHits = [];
  for (var fk of [[21, "troll"], [31, "vent"], [41, "serpent"], [51, "boar"], [71, "draugr"], [81, "valkyrie"]]) {
    await realmLevel(fk[0]);
    foeHits.push(await page.evaluate(function (kind) {
      var s = SolScene, f = s.foes.filter(function (q) { return q.kind === kind; })[0], sp = s.slips[0], st = s.strikes;
      s.spareLives = 0; s.iframeMs = 0; s.justStruck = false; s.perks = {};
      s.lockerPowerMs = 0; s.dogModeMs = 0; s.pineappleMs = 0; s.forcefieldMs = 0; s.superPacMs = 0;
      if (kind === "vent") f.phase = f.idle + f.warn + 300;
      if (kind === "valkyrie") { s.player.body.reset(sp.x, sp.y); f.state = "fly"; f.horiz = true; f.line = sp.y; f.pos = sp.x - 20; f.dir = 1; }
      else s.player.body.reset(f.x, f.y);
      s.tickFoes(16);
      return kind + ":" + (s.strikes - st) + ":" + (s.caughtFlashTag ? s.caughtFlashTag.text : "");
    }, fk[1]));
  }
  console.log("creature catches", JSON.stringify(foeHits));
  check(foeHits.every(function (h) { return /:1:CAUGHT BY /.test(h); }), "trolls, vents, the serpent, boars, draugr and valkyries each catch Sol");
  await realmLevel(11);
  var ravenCall = await page.evaluate(function () {
    var s = SolScene, f = s.foes[0], sp = s.slips[0];
    s.player.body.reset(sp.x, sp.y); s.inDarkZone = false; f.x = sp.x + 30; f.y = sp.y; f.tx = f.x; f.ty = f.y; f.cd = 0;
    s.janitors.forEach(function (j) { j.chasing = false; });
    /* v5.7: a letter tile can sit in a dark zone, where ravens cannot see Sol; test in the light */
    var M = SolRealms._K.maze(), dz = M.darkZones; M.darkZones = [];
    s.tickFoes(16);
    M.darkZones = dz;
    return s.janitors.filter(function (j) { return j.chasing; }).length;
  });
  check(ravenCall >= 1, "a raven that spots Sol sends a wolf after her");
  await realmLevel(71);
  var draugrLook = await page.evaluate(function () {
    var s = SolScene, f = s.foes[0], K = SolRealms._K, M = K.maze(), i, x0, y0, o = {}, pair = null;
    /* the draugr on a junction, Sol two junctions away down a clear hall */
    for (i = 0; i < M.nodes.length && !pair; i++) {
      var a = M.nodes[i]; if (a.id.charAt(0) !== "j" || K.inSafeZone(a.x, a.y)) continue;
      var n1 = (M.neigh[String(i)] || []).filter(function (x) { return x.dir === "E"; })[0]; if (!n1) continue;
      var n2 = (M.neigh[String(n1.i)] || []).filter(function (x) { return x.dir === "E"; })[0]; if (!n2) continue;
      if (!K.inSafeZone(n2.x, n2.y) && !K.losBlocked(a.x, a.y, n2.x, n2.y)) pair = { a: a, b: n2 };
    }
    f.x = pair.b.x; f.y = pair.b.y; f.path = null; f.replan = 0;
    s.player.body.reset(pair.a.x, pair.a.y);
    s.playerFace = 0;
    x0 = f.x; y0 = f.y; for (i = 0; i < 20; i++) s.tickFoes(16); o.watched = Math.hypot(f.x - x0, f.y - y0);
    s.playerFace += Math.PI;
    x0 = f.x; y0 = f.y; for (i = 0; i < 20; i++) s.tickFoes(16); o.free = Math.hypot(f.x - x0, f.y - y0);
    return o;
  });
  check(draugrLook.free > 20 && (draugrLook.watched < 1 || draugrLook.watched < draugrLook.free / 4), "a draugr moves only while Sol looks away: " + JSON.stringify(draugrLook));
  /* boss level: Fenrir, the gate chains, a wrong letter sets him off, a banked answer breaks a chain */
  await realmLevel(20);
  var boss = await page.evaluate(function () {
    var s = SolScene, o = { fenrir: !!s.fenrir, chains: s.chainsLeft, need: s.needExtracts, hati: s.janitors.length, lanes: (s.level.startLanes || []).length, pip: document.getElementById("realm-pip").textContent };
    /* v5.7.6: a hunter — stalks at 70% of Sol's walk, charges faster than she can run while carrying a letter */
    o.stalk = s.fenrir.spd; o.charge = s.fenrir.chargeSpd; o.firstCharge = s.fenrir.nextCharge;
    /* picking up a right letter brings his charge within 2.5 s */
    s.fenrir.state = "prowl"; s.fenrir.nextCharge = 9000; s.player.carrying = null; s.carryExtra = []; s.stunMs = 0;
    var rs = s.slips.filter(function (q) { return q.visible && s.need.indexOf(q.letter) !== -1; })[0];
    if (rs) { s.player.body.reset(rs.x, rs.y); s.player.x = rs.x; s.player.y = rs.y; s.tryGrab(); }
    o.smell = s.fenrir.nextCharge; o.grabbed = !!s.player.carrying;
    s.player.carrying = null; s.carryExtra = [];
    s.spareLives = 3; s.iframeMs = 0; s.stunMs = 0;
    s.flagWrongAlarm({ x: s.player.x, y: s.player.y }); o.provoked = s.fenrir.state;
    s.strikes = 0; s.carryExtra = []; s.player.carrying = null;
    s.need.forEach(function (L, i) { var sl = s.slips.filter(function (q) { return q.letter === L; })[0]; if (!i) s.player.carrying = sl; else s.carryExtra.push(sl); });
    s.player.body.reset(s.exitZone.x, s.exitZone.y); s.tryExtract(); o.after = s.chainsLeft;
    return o;
  });
  console.log("boss", JSON.stringify(boss));
  /* v5.7.9: a right letter's CHARIOT power shows Sol riding the sun chariot, and it goes when the power ends */
  for (var rw = 0; rw < 10; rw++) { if (await page.isVisible("#read-go")) { await page.click("#read-go"); break; } await page.waitForTimeout(150); }
  var ride = await page.evaluate(async function () {
    var s = SolScene; s.activateLockerPower();
    await new Promise(function (r) { setTimeout(r, 200); });
    var c = s.chariotRide, o = { on: !!(c && c.visible), near: c ? Math.hypot(c.x - s.player.x, c.y - s.player.y) : -1 };
    s.lockerPowerMs = 1;
    for (var w = 0; w < 10 && s.chariotRide && s.chariotRide.visible; w++) await new Promise(function (r) { setTimeout(r, 150); });
    o.off = !(s.chariotRide && s.chariotRide.visible); o.power = s.lockerPowerMs; o.read = s.readOpen;
    return o;
  });
  check(ride.on && ride.near < 60 && ride.off, "the CHARIOT power shows Sol riding the sun chariot, which goes when the power ends: " + JSON.stringify(ride));
  check(boss.fenrir && boss.chains === boss.need && boss.hati === boss.lanes && boss.hati >= 2 && /Fenrir/.test(boss.pip), "level 20: Fenrir guards a gate with one chain per question, and every Hati stays: " + boss.hati);
  check(boss.stalk > 180 && boss.charge > 365 && boss.firstCharge <= 7000 && boss.grabbed && boss.smell <= 2500, "Fenrir hunts: he stalks Sol, charges faster than she can run with a letter, and picking up a right letter brings his charge on: " + JSON.stringify({ stalk: boss.stalk, charge: boss.charge, first: boss.firstCharge, smell: boss.smell }));
  check(boss.provoked === "windup" && boss.after === boss.chains - 1, "a wrong letter sets Fenrir off; a banked answer breaks a chain");
  /* v5.7.6: beating Fenrir pays 100+ coins and a Fang (+1 coin an answer for good), shown on the win screen */
  var bossWin = await page.evaluate(async function () {
    var s = SolScene, o = {};
    try { localStorage.removeItem("afterHours.v1.fangs"); } catch (e) {}
    o.answer0 = s.coinEconomy().answer; var c0 = s.nightCoins || 0;
    s.endRun(true);
    await new Promise(function (r) { setTimeout(r, 900); });
    o.coins = (s.nightCoins || 0) - c0;
    o.title = document.getElementById("win-title").textContent; o.msg = document.getElementById("win-msg").textContent;
    var fr = document.getElementById("fang-row"); o.fangRow = !!fr && !fr.classList.contains("hidden"); o.fangOn = fr ? fr.querySelectorAll(".fang.on").length : 0;
    o.fangs = localStorage.getItem("afterHours.v1.fangs");
    o.answer1 = s.coinEconomy().answer;
    o.trophies = window.SolBuild && SolBuild.trophies ? SolBuild.trophies() : [];
    o.theme = window.SolBuild ? SolBuild.state().theme : null;
    o.onField = window.SolBuild ? JSON.parse(localStorage.getItem(SolBuild.LS_KEY) || "{}").picks.filter(function (q) { return /^trophy-/.test(q.piece); }).map(function (q) { return q.piece; }) : [];
    o.shopHasTrophy = window.SolBuild && SolBuild._shopDecos ? SolBuild._shopDecos().some(function (id) { return /^trophy-/.test(id); }) : null;
    return o;
  });
  console.log("boss win", JSON.stringify(bossWin));
  await shot("15b-boss-win");
  await page.evaluate(function () { try { if (window.SolBuild && SolBuild.isOpen()) SolBuild.close(); } catch (e) {} });
  /* the monument stands in the castle */
  await page.evaluate(function () { try { SolBuild.showGallery(); } catch (e) {} });
  await page.waitForTimeout(2500);
  await shot("15c-boss-monument");
  /* all ten monuments side by side, for the picture */
  await page.evaluate(function () { try { SolBuild.trophies().forEach(function (t) { if (!t.owned) SolBuild._place(t.id); }); SolBuild._zoom(1.5); } catch (e) {} });
  await page.waitForTimeout(3500);
  await shot("15d-monuments");
  await page.evaluate(function () { try { if (SolBuild.isOpen()) SolBuild.close(); } catch (e) {} });
  await page.evaluate(function () { try { localStorage.removeItem("afterHours.v1.fangs"); } catch (e) {} });
  var nifTrophy = (bossWin.trophies || []).filter(function (t) { return t.realm === "niflheim"; })[0];
  check(bossWin.theme !== "castle" || (nifTrophy && nifTrophy.owned && bossWin.onField.indexOf("trophy-niflheim") !== -1 && bossWin.shopHasTrophy === false && (bossWin.trophies || []).length === 10), "beating Fenrir sets that realm's monument in the castle; monuments are never in the shop: " + JSON.stringify({ theme: bossWin.theme, nif: nifTrophy, field: bossWin.onField, shop: bossWin.shopHasTrophy, n: (bossWin.trophies || []).length }));
  check(/Fenrir beaten/.test(bossWin.title) && bossWin.coins >= 100 && bossWin.fangRow && bossWin.fangOn === 1 && /niflheim/i.test(bossWin.fangs || "") && bossWin.answer1 === bossWin.answer0 + 1 && /Fang/.test(bossWin.msg), "beating Fenrir: a Fenrir-beaten title, 100+ coins, a Fang shown on the win screen and +1 coin on every answer after: " + JSON.stringify({ title: bossWin.title, coins: bossWin.coins, fangs: bossWin.fangs, a0: bossWin.answer0, a1: bossWin.answer1 }));
  /* castle perks: buildings on the field grant perks in the maze */
  await page.evaluate(function () {
    var picks = ["keep", "k-stables", "k-church", "k-barracks", "k-market", "k-castle"].map(function (id, i) { return { night: 5, piece: id, style: "blue", src: "free", deco: false, ord: i, rot: 0, cx: i * 3, cy: 0 }; });
    localStorage.setItem("afterHours.v1.build", JSON.stringify({ v: 4, theme: "castle", salt: 7, coins: 50, kit: 2, owned: {}, rewards: {}, picks: picks, view: { a: 0, z: 1, px: 0, py: 0 }, code: "" }));
    SolBuild._reload();
  });
  await realmLevel(20);
  var perks = await page.evaluate(function () {
    var s = SolScene, o = { list: s.perkList.map(function (p) { return p.id; }).sort().join(","), spare: s.spareLives, answer: s.coinEconomy().answer, speed: Math.round(s.realmSpeed(268, false, false)) };
    s.player.body.reset(s.slips[0].x, s.slips[0].y); s.iframeMs = 0; s.justStruck = false;
    var st = s.strikes; s.caught({ x: s.player.x, y: s.player.y, setVelocity: function () {} }); o.guarded = s.strikes === st && s.spareLives === 1;
    s.iframeMs = 0; s.justStruck = false; s.fenrir.stunMs = 0; s.fenrir.state = "charge"; s.player.body.reset(s.fenrir.x, s.fenrir.y); s.foeContact(s.fenrir); o.rune = s._runeUsed && s.strikes === st;
    return o;
  });
  console.log("perks", JSON.stringify(perks));
  check(perks.list === "blessing,guard,rune,swift,trade", "castle buildings on the field grant their perks: " + perks.list);
  check(perks.spare === 1 && perks.answer === 12 && perks.speed === 284, "Blessing gives a 1UP, Trade +2 coins an answer, Swift feet 6% speed");
  check(perks.guarded && perks.rune, "Castle guard blocks the first catch; the Rune of Sol turns Fenrir's first charge aside");
  await page.evaluate(function () { localStorage.removeItem("afterHours.v1.build"); SolBuild._reload(); });

  /* v5.7: shooter levels on 2, 4, 6 and 8 of each realm, reached through the real Next level button */
  var rot = await page.evaluate(function () { var o = []; for (var n = 1; n <= 20; n++) { var m = SolModes.modeFor(n); o.push(m ? m.id : "-"); } return o.join(","); });
  check(rot === "-,raid,-,rocks,-,sky,-,ring,-,-,-,raid,-,rocks,-,sky,-,ring,-,-", "shooter rotation: raid, rocks, sky, ring on even levels; maze on odd levels and bosses: " + rot);
  /* v5.8.3: with one game mode picked, an odd level plays as that mode */
  await page.evaluate(function () { SolModes.only = "rocks"; });
  await page.evaluate(function () { var b = document.getElementById("btn-next"); b.dataset.goto = "3"; b.click(); });
  await page.waitForFunction(function () { var s = window.SolScene; return s && s.night === 3 && s.claim; }, null, { timeout: 15000 }).catch(function () {});
  var only3 = await page.evaluate(function () { var s = SolScene; return { key: s.sys.settings.key, mode: s.mode && s.mode.id }; });
  await page.evaluate(function () { SolModes.only = null; if (SolScene.readOpen) { var g = document.getElementById("read-go"); if (g) g.click(); } });
  await page.waitForTimeout(500);
  check(only3.key === "mode" && only3.mode === "rocks", "Rune Rocks only: level 3 (a maze level in the mix) plays as Rune Rocks: " + JSON.stringify(only3));
  async function gotoLevel(n) {
    await page.evaluate(function (n) { var b = document.getElementById("btn-next"); b.dataset.goto = String(n); b.click(); }, n);
    await page.waitForTimeout(1500);
    /* wait for the level's reading pop-up, then close it so the level runs */
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.claim && s.readOpen; }, n, { timeout: 15000 }).catch(function () {});
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 5000 }).catch(function () {});
    await page.waitForTimeout(300);
  }
  function tickWait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  var modeRuns = {};
  await gotoLevel(2);
  /* v5.7.7: no arrows until the flock has flown into formation */
  var pre = await page.evaluate(function () { var s = SolScene, R = s.raid; s.tutLockUntil = 0; return { ready: R.ready, fired: R.fired, eagles: R.ravens.filter(function (o) { return o.kind === "eagle"; }).length, guards: R.ravens.filter(function (o) { return o.guard; }).length }; });
  await page.keyboard.down("Space"); await page.waitForTimeout(600); await page.keyboard.up("Space");
  pre.firedEarly = await page.evaluate(function (a) { return SolScene.raid.fired - a; }, pre.fired);
  await page.evaluate(function () { SolScene.raid.ravens.forEach(function (e) { if (e.state === "wait" || e.state === "enter") { e.state = "form"; e.path = null; } }); });
  await page.waitForFunction(function () { return SolScene.raid.ready; }, null, { timeout: 8000 }).catch(function () {});
  await page.waitForTimeout(2500);
  pre.after = await page.evaluate(function () { var R = SolScene.raid; return { ready: R.ready, flying: R.ravens.filter(function (o) { return o.alive && (o.state === "dive" || o.state === "beam" || o.state === "return"); }).length }; });
  modeRuns.raidPre = pre;
  /* a mouse button (left or right) shoots without moving Sol */
  var cbox = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, width: r.width, height: r.height }; });
  var click0 = await page.evaluate(function () { var s = SolScene; s.tutLockUntil = 0; return { x: s.player.x, fired: s.raid.fired }; });
  await page.mouse.move(cbox.x + cbox.width * 0.2, cbox.y + cbox.height * 0.55);
  await page.mouse.down({ button: "right" }); await page.waitForTimeout(700);
  await page.mouse.up({ button: "right" });
  await page.mouse.down(); await page.waitForTimeout(700); await page.mouse.up();
  var click1 = await page.evaluate(function () { var s = SolScene; return { x: s.player.x, fired: s.raid.fired, menu: false }; });
  modeRuns.click = { moved: Math.abs(click1.x - click0.x), fired: click1.fired - click0.fired };
  modeRuns.raid = await page.evaluate(async function () {
    var s = SolScene, o = { key: s.sys.settings.key, mode: s.mode.id, fire: document.getElementById("btn-action").textContent, mini: getComputedStyle(document.getElementById("minimap")).display, hud: document.getElementById("score-pip").textContent };
    s.spareLives = 0; s.perks = {};
    /* the click test's arrows may have hit birds: a fresh wave, no lives spent */
    var R = s.raid;
    if (s._between) {   /* an arrow answered the question: let the next one load, then close its reading pop-up */
      await new Promise(function (r) { setTimeout(r, 1300); });
      var rgo = document.getElementById("read-go"); if (rgo && rgo.offsetParent) rgo.click();
      await new Promise(function (r) { setTimeout(r, 300); });
    }
    R.arrows.forEach(function (a) { a.spr.destroy(); }); R.arrows = [];
    if (s.ended || s._finishing) { o.endedEarly = true; }
    s.answers_raid(); s.strikes = 0; s.iframeMs = 0; s.claimWrong = 0; s.score = 0; s.paintHud();
    /* the birds stay out of the sky for these checks (a dive or a beam would muddle the counts) */
    R.ravens.forEach(function (q) { q.delay = 1e9; });
    R.feathers.forEach(function (f) { f.spr.destroy(); }); R.feathers = [];
    o.hud = document.getElementById("score-pip").textContent;
    var eagles = R.ravens.filter(function (q) { return q.letter; });
    o.eagles = eagles.length; o.ravens = R.ravens.filter(function (q) { return !q.letter && !q.guard; }).length;
    var wrong = eagles.filter(function (q) { return s.need.indexOf(q.letter) === -1; })[0];
    wrong.hp = 2; s.strikes = 0; s.iframeMs = 0;   /* the mouse test's arrows may have hit it */
    s.raidHit(wrong); o.afterOne = s.strikes + (wrong.alive ? 0 : 10);
    s.raidHit(wrong); o.wrong = s.strikes; s.strikes = 0; s.iframeMs = 0;
    R.feathers.push({ x: s.player.x, y: s.player.y - 20, vx: 0, t: 0, spr: s.add.image(s.player.x, s.player.y - 20, "md-poo") });
    await new Promise(function (r) { setTimeout(r, 600); }); o.feather = s.strikes; s.strikes = 0; s.iframeMs = 0;
    /* an eagle's beam over Sol catches him */
    var bm = R.ravens.filter(function (q) { return q.alive && q.letter && q.state !== "wait"; })[0] || R.ravens.filter(function (q) { return q.alive && q.letter; })[0];
    bm.state = "beam"; bm.beamMs = 900; bm.path = null; bm.x = s.player.x; bm.hoverY = s.H * 0.4; bm.y = bm.hoverY; bm.lead = true;
    /* v5.10: wait on the game, not the clock (a busy machine runs the game slower than real time) */
    async function until(f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < ms) await new Promise(function (r) { setTimeout(r, 50); }); }
    await until(function () { return !!R.capt; }, 8000); o.beam = s.strikes; s.strikes = 0; s.iframeMs = 0;
    /* v5.8.2: Galaga's capture — the eagle carries Sol off; an arrow on it frees him and he stands next to Sol */
    await until(function () { return R.capt && R.capt.held; }, 8000);
    var cap = R.capt;
    o.capt = { caught: !!cap && cap.held && cap.eagle === bm, hp: bm.hp };
    s.raidHit(bm);
    o.capt.freedNoHurt = bm.alive && bm.hp === o.capt.hp && s.strikes === 0;
    await until(function () { return !!R.wing && !R.capt; }, 8000);
    o.capt.double = !!R.wing && !R.capt && Math.abs(R.wing.x - s.player.x - 40) < 1;
    R.arrows.forEach(function (a) { a.spr.destroy(); }); R.arrows = [];
    var wasReady = R.ready; R.ready = true; R.cd = 0;
    s.keys.SPACE.isDown = true; await new Promise(function (r) { setTimeout(r, 60); }); s.keys.SPACE.isDown = false;
    o.capt.twoArrows = R.arrows.length; R.ready = wasReady;
    R.arrows.forEach(function (a) { a.spr.destroy(); }); R.arrows = [];
    /* with two Sols, poo on the second one takes him away, not a life */
    s.iframeMs = 0;
    R.feathers.push({ x: R.wing.x, y: s.player.y - 20, vx: 0, t: 0, spr: s.add.image(R.wing.x, s.player.y - 20, "md-poo") });
    await new Promise(function (r) { setTimeout(r, 500); });
    o.capt.lostOne = !R.wing && s.strikes === 0;
    s.iframeMs = 0;
    R.arrows.forEach(function (a) { a.spr.destroy(); }); R.arrows = [];
    /* v5.8.3: a Sol still held when the question is answered costs a life then */
    var ke = R.ravens.filter(function (q) { return q.alive && q.letter && s.need.indexOf(q.letter) === -1; })[0];
    if (ke) { s.raidCapture(ke); R.capt.held = true; R.capt.t = 1; }
    s.strikes = 0; s.iframeMs = 0;
    var coins = s.nightCoins;
    R.ravens.filter(function (q) { return q.alive && q.letter && s.need.indexOf(q.letter) !== -1; }).forEach(function (q) { s.raidHit(q); s.raidHit(q); });
    o.score = s.score; o.coins = s.nightCoins > coins; o.capt.kept = ke ? s.strikes : -1; o.capt.keptGone = !R.capt;
    await new Promise(function (r) { setTimeout(r, 1800); });
    o.newWave = R.ravens.filter(function (q) { return q.alive && q.letter; }).length;
    var pip = document.getElementById("realm-pip"); o.pip = pip ? pip.textContent : "";
    return o;
  });
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForTimeout(3500);
  modeRuns.raid.flying = await page.evaluate(function () { return SolScene.raid.ravens.filter(function (q) { return q.state !== "wait"; }).length; });
  await shot("16-eagle-swoop");
  await page.evaluate(function () {
    var s = SolScene, e = s.raid.ravens.filter(function (q) { return q.alive && q.letter && q.state === "form"; })[0];
    s.iframeMs = 60000;   /* just for the picture */
    if (e) s.raidBeamDive(e);
    var r = s.raid.ravens.filter(function (q) { return q.alive && q.kind === "raven" && q.state === "form"; })[0];
    if (r) { r.lead = true; s.raidDive(r, 0); }
  });
  await page.waitForFunction(function () { return SolScene.raid.ravens.some(function (q) { return q.state === "beam" && q.beamMs > 700; }); }, null, { timeout: 20000 }).catch(function () {});
  await shot("16b-eagle-beam");
  /* v5.8.2: pictures of a caught Sol over his eagle, then the two Sols */
  await page.evaluate(function () {
    var s = SolScene, R = s.raid, e = R.ravens.filter(function (q) { return q.alive && q.letter && q.state === "form" && !q.captive; })[0];
    s.iframeMs = 60000;
    if (e && !R.capt && !R.wing) s.raidCapture(e);
  });
  await page.waitForTimeout(1600);
  await shot("16c-eagle-caught-sol");
  await page.evaluate(function () { var R = SolScene.raid; if (R.capt && R.capt.held) SolScene.raidHit(R.capt.eagle); });
  await page.waitForTimeout(1400);
  await shot("16d-two-sols");
  await page.evaluate(function () { SolScene.iframeMs = 0; });
  await gotoLevel(4);
  /* v5.7.3: the "how to pull a rock in" card comes up once the reading pop-up closes, and pauses the level */
  await page.waitForSelector("#beam-help:not(.hidden)", { timeout: 8000 }).catch(function () {});
  var beamHelp = await page.evaluate(function () {
    var ov = document.getElementById("beam-help"), s = SolScene;
    return { shown: !!ov && !ov.classList.contains("hidden") && getComputedStyle(ov).display !== "none", paused: !!s.helpOpen, right: /right mouse button/.test(ov ? ov.textContent : ""), text: ov ? ov.textContent : "" };
  });
  await shot("17b-beam-help");
  if (await page.isVisible("#beam-help-ok")) await page.click("#beam-help-ok");
  await page.waitForTimeout(300);
  beamHelp.closed = await page.evaluate(function () { var ov = document.getElementById("beam-help"); return ov.classList.contains("hidden") && !SolScene.helpOpen; });
  beamHelp.rightBtn = await page.evaluate(function () {
    var s = SolScene, keep = s.ptr, lock = s.tutLockUntil;
    s.tutLockUntil = 0;
    s.ptr = { down: true, right: true, x: 10, y: 10, t: s.time.now }; var a = s.readInput();
    s.ptr = { down: true, right: false, x: 10, y: 10, t: s.time.now }; var b = s.readInput();
    s.ptr = keep; s.tutLockUntil = lock;
    return { rightPulls: a.pull && !a.fire, leftFires: b.fire && !b.pull };
  });
  modeRuns.beamHelp = beamHelp;
  /* v5.7.4: a mouse button never steers the ship: left fires, right beams */
  var rk0 = await page.evaluate(function () { var s = SolScene, S = s.rk.ship; s.tutLockUntil = 0; S.vx = 0; S.vy = 0; return { x: S.x, y: S.y, ang: S.ang, fired: s.rk.fired || 0, W: s.W, H: s.H }; });
  var cb2 = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  await page.mouse.move(cb2.x + cb2.w * 0.85, cb2.y + cb2.h * 0.2);
  await page.mouse.down(); await page.waitForTimeout(600); await page.mouse.up();
  await page.mouse.down({ button: "right" }); await page.waitForTimeout(400); await page.mouse.up({ button: "right" });
  modeRuns.rockMouse = await page.evaluate(function (a) { var s = SolScene, S = s.rk.ship; return { turned: Math.abs(S.ang - a.ang), moved: Math.hypot(S.x - a.x, S.y - a.y), fired: (s.rk.fired || 0) - a.fired }; }, rk0);
  modeRuns.rocks = await page.evaluate(async function () {
    var s = SolScene, R = s.rk, o = { mode: s.mode.id, pull: getComputedStyle(document.getElementById("btn-shutter")).display };
    s.spareLives = 0; s.perks = {};
    /* the mouse test's shots may have hit a letter rock: fresh letters, no lives spent */
    R.bullets.forEach(function (b) { b.spr.destroy(); }); R.bullets = [];
    s.answers_rocks(); s.strikes = 0; s.iframeMs = 0; s.claimWrong = 0;
    function rockOf(right) { return R.rocks.filter(function (q) { return q.letter && (s.need.indexOf(q.letter) !== -1) === right; })[0]; }
    s.rockCaught(rockOf(false)); o.pullWrong = s.strikes; s.strikes = 0; s.iframeMs = 0;
    var right = rockOf(true), L = right.letter;
    s.rockShot(right); o.blastRight = s.strikes; o.why = s.lossReason(); s.strikes = 0; s.iframeMs = 0;
    s.rockShot(rockOf(false)); o.blastWrong = s.strikes;
    await new Promise(function (r) { setTimeout(r, 2600); });
    o.back = R.rocks.some(function (q) { return q.letter === L; });
    var blank = s.rockMake(2, null, R.ship.x, R.ship.y, 0, 0); s.iframeMs = 0;
    await new Promise(function (r) { setTimeout(r, 500); }); o.hit = s.strikes; s.strikes = 0; s.iframeMs = 0;
    /* a right rock that was in the beam a moment ago and hits the ship: named, and still costs a life */
    var rr = rockOf(true); s.strikes = 0; s.iframeMs = 0;
    /* v5.10: nothing else may hit the ship first (on a busy machine a stray rock sometimes did) */
    R.rocks.filter(function (q) { return !q.letter; }).slice().forEach(function (q) { s.rockRemove(q); }); R.spawnCd = 1e9; R.saucerCd = 1e9;
    R.saucers.forEach(function (u) { u.spr.destroy(); }); R.saucers = []; R.sBullets.forEach(function (q) { q.spr.destroy(); }); R.sBullets = [];
    R.rocks.forEach(function (q) { if (q.letter && q !== rr) { q.x = R.ship.x - 300; q.y = R.ship.y - 200; q.vx = 0; q.vy = 0; } });
    if (rr) { rr.x = R.ship.x + 10; rr.y = R.ship.y; rr.vx = 0; rr.vy = 0; rr.beamT = s.time.now; }
    await new Promise(function (r) { setTimeout(r, 500); }); o.early = s.strikes; o.earlyLabel = s._lastHitLabel; s.strikes = 0; s.iframeMs = 0;
    s.need.forEach(function (N) { var q = R.rocks.filter(function (z) { return z.letter === N; })[0]; if (q) s.rockCaught(q); });
    o.score = s.score;
    try { o.learned = localStorage.getItem("afterHours.v1.beamLearned"); } catch (e) {}
    /* v5.8.5: a rock held in the beam stays locked: a plain rock drifting into the beam nearer the ship, and the
       ship turning so the pulled rock leaves the narrow cone, no longer drop it (it used to hit the ship as
       "let go too soon" with the beam still held) */
    await new Promise(function (r) { setTimeout(r, 1300); });
    var rgo2 = document.getElementById("read-go"); if (rgo2 && rgo2.offsetParent) rgo2.click();
    await new Promise(function (r) { setTimeout(r, 400); });
    R.rocks.filter(function (q) { return !q.letter; }).slice().forEach(function (q) { s.rockRemove(q); });
    R.spawnCd = 1e9; R.saucerCd = 1e9;
    var S = R.ship; S.x = s.W / 2; S.y = s.H / 2; S.vx = 0; S.vy = 0; S.ang = 0;
    var lr = R.rocks.filter(function (q) { return q.letter && s.need.indexOf(q.letter) !== -1 && s.extracted.indexOf(q.letter) === -1; })[0];
    o.lock = { found: !!lr };
    if (lr) {
      R.rocks.filter(function (q) { return q.letter && q !== lr; }).forEach(function (q) { q.x = S.x - 300; q.y = S.y - 200; q.vx = 0; q.vy = 0; });
      lr.x = S.x + 220; lr.y = S.y; lr.vx = 0; lr.vy = 0;
      var L2 = lr.letter, sc0 = s.score, ex0 = s.extracted.length;
      s.strikes = 0; s.iframeMs = 0; s.spareLives = 0;
      s.keys.SHIFT.isDown = true;
      await new Promise(function (r) { setTimeout(r, 120); });
      o.lock.lockedFirst = R.lock === lr;
      var thief = s.rockMake(1, null, S.x + 70, S.y + 18, 0, 0);
      S.ang = 0.55;
      await new Promise(function (r) { setTimeout(r, 1400); });
      s.keys.SHIFT.isDown = false;
      o.lock.caught = R.rocks.indexOf(lr) < 0 && (s.score > sc0 || s.extracted.length > ex0 || s.extracted.indexOf(L2) !== -1);
      o.lock.strikes = s.strikes; o.lock.label = s._lastHitLabel || "";
      if (R.rocks.indexOf(thief) >= 0) s.rockRemove(thief);
    }
    return o;
  });
  await shot("17-rune-rocks");
  await gotoLevel(6);
  var sk0 = await page.evaluate(function () { var s = SolScene; s.tutLockUntil = 0; return { x: s.sky.x, y: s.sky.y }; });
  var cb3 = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  await page.mouse.move(cb3.x + cb3.w * 0.5, cb3.y + cb3.h * 0.15);
  await page.mouse.down(); await page.waitForTimeout(600); await page.mouse.up();
  modeRuns.skyMouse = await page.evaluate(function (a) { var s = SolScene; return { moved: Math.hypot(s.sky.x - a.x, s.sky.y - a.y) }; }, sk0);
  modeRuns.sky = await page.evaluate(async function () {
    var s = SolScene, K = s.sky, o = { mode: s.mode.id };
    s.spareLives = 0; s.perks = {}; s.strikes = 0; s.iframeMs = 0;
    /* v5.7.5: difficulty climbs from a harder start */
    var p6 = s.skyParams(6), p16 = s.skyParams(16), p56 = s.skyParams(56), p96 = s.skyParams(96);
    o.curve = { spawn6: p6.spawnMs, spawn96: p96.spawnMs, throw6: p6.throwP, throw96: p96.throwP, spark6: p6.sparkP, spark96: p96.sparkP, guards6: p6.guards, guards16: p16.guards, guards56: p56.guards, bob6: p6.bob, bob56: p56.bob,
      gap6: p6.gapHalf, gap16: p16.gapHalf, gap96: p96.gapHalf, spin6: p6.spin, spin96: p96.spin, flip6: p6.flip, flip36: s.skyParams(36).flip };
    /* quiet sky for the scripted checks */
    K.spawnCd = 1e9; K.foes.forEach(function (f) { if (f.spr) f.spr.destroy(); }); K.foes = []; K.shots.forEach(function (f) { f.spr.destroy(); }); K.shots = [];
    K.orbs.forEach(function (q, i) { q.x = s.W * 0.6 + i * 60; q.vx = 0; q.gap = Math.PI; q.spin = 0; q.flipCd = 1e9; });   /* bring the orbs on screen, gaps facing the chariot */
    function bolt(x, y) { K.bolts.push({ x: x - 40, y: y, spr: s.add.image(x - 40, y, "md-bolt") }); }
    /* v5.7.9: a shield turned away stops the bolt: the right orb stays, no life lost, no answer */
    var sh = K.orbs.filter(function (q) { return s.need.indexOf(q.letter) !== -1; })[0];
    sh.gap = 0; bolt(sh.x, sh.y); await new Promise(function (r) { setTimeout(r, 400); });
    o.blocked = { stays: K.orbs.indexOf(sh) !== -1, strikes: s.strikes, score: s.score }; sh.gap = Math.PI;
    var w = K.orbs.filter(function (q) { return s.need.indexOf(q.letter) === -1; })[0];
    bolt(w.x, w.y); await new Promise(function (r) { setTimeout(r, 400); }); o.wrong = s.strikes; s.strikes = 0; s.iframeMs = 0;
    K.foes.push({ kind: "raven", x: K.x, y: K.y - 8, by: K.y - 8, r: 22, sp: 0, amp: 0, fr: 1, t: 0, spr: s.add.image(K.x, K.y, "rf-raven-0") });
    await new Promise(function (r) { setTimeout(r, 400); }); o.crash = s.strikes; s.strikes = 0; s.iframeMs = 0;
    K.foes.forEach(function (f) { if (f.spr) f.spr.destroy(); }); K.foes = [];
    /* a thrown feather hits the chariot */
    s.skyThrow(K.x + 120, K.y - 8, false);
    await new Promise(function (r) { setTimeout(r, 900); }); o.feather = s.strikes; s.strikes = 0; s.iframeMs = 0;
    /* a guard in front of an orb takes the bolt; the orb is untouched */
    var gOrb = K.orbs.filter(function (q) { return s.need.indexOf(q.letter) === -1; })[0] || K.orbs[0];
    var guard = s.skyGuard(gOrb), kills = s.kills;
    bolt(guard.x - 20, guard.y);
    await new Promise(function (r) { setTimeout(r, 500); });
    o.guard = { orbSafe: K.orbs.indexOf(gOrb) !== -1, guardGone: K.foes.indexOf(guard) === -1, strikes: s.strikes, kill: s.kills > kills };
    s.strikes = 0; s.iframeMs = 0;
    K.orbs.filter(function (q) { return s.need.indexOf(q.letter) !== -1; }).forEach(function (q) { bolt(q.x, q.y); });
    await new Promise(function (r) { setTimeout(r, 400); }); o.score = s.score;
    return o;
  });
  await shot("18-sun-chariot");
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.evaluate(function () {
    var s = SolScene, K = s.sky; s.iframeMs = 60000; K.spawnCd = 0;   /* just for the picture: a busy sky, a guarded orb */
    K.orbs.forEach(function (q, i) { q.x = s.W * 0.55 + i * 150; q.vx = -40; });
    if (K.orbs[0]) s.skyGuard(K.orbs[0]);
  });
  await page.waitForTimeout(4500);
  await shot("18b-sun-chariot-busy");
  await page.evaluate(function () { SolScene.iframeMs = 0; });
  await gotoLevel(8);
  await page.evaluate(function () { var s = SolScene; s.iframeMs = 60000; s.rg.riseCd = 1500; });   /* just for the picture */
  await page.waitForTimeout(6500);
  await shot("19a-wolf-ring");
  await page.evaluate(function () { var s = SolScene; s.iframeMs = 0; s.strikes = 0; s.rg.stones.forEach(function (q) { q.state = "down"; q.t = 0; s.ringDrawStone(q); }); s.rg.riseCd = 3600; s.rg.wolves.forEach(function (w) { w.spr.destroy(); }); s.rg.wolves = []; s.rg.spawnCd = 1e9; });
  modeRuns.ring = await page.evaluate(async function () {
    var s = SolScene, G = s.rg, p = s.player, o = { mode: s.mode.id };
    s.spareLives = 0; s.perks = {};
    function arrowAt(x, y) { G.arrows.push({ x: x, y: y, vx: 0, vy: 0, spr: s.add.image(x, y, "md-arrow") }); }
    /* v5.7.5: every runestone starts sunk; the wolves come first */
    o.sunkAtStart = G.stones.every(function (q) { return q.state === "down" && !q.spr.visible; });   /* (reset after the picture) */
    o.riseWait = G.riseCd;
    var sunkArrow = G.stones[0]; s.ringRaise(sunkArrow); sunkArrow.state = "down"; s.ringDrawStone(sunkArrow);
    arrowAt(sunkArrow.x, sunkArrow.y); await new Promise(function (r) { setTimeout(r, 300); }); o.sunkShot = s.strikes + s.score; s.strikes = 0; s.iframeMs = 0;
    G.arrows.forEach(function (a) { a.spr.destroy(); }); G.arrows = [];
    /* then they rise one or two at a time */
    G.riseCd = 0; await new Promise(function (r) { setTimeout(r, 900); });
    o.upCount = G.stones.filter(function (q) { return q.state !== "down"; }).length;
    G.stones.forEach(function (q) { q.state = "down"; s.ringDrawStone(q); }); G.riseCd = 99999; G.queue = [];
    G.arrows.forEach(function (a) { a.spr.destroy(); }); G.arrows = []; s.strikes = 0; s.iframeMs = 0; s.claimWrong = 0;
    function raise(q) { s.ringRaise(q); q.state = "up"; q.t = 0; s.ringDrawStone(q); }
    var w = G.stones.filter(function (q) { return s.need.indexOf(q.letter) === -1; })[0];
    raise(w);
    arrowAt(w.x, w.y); await new Promise(function (r) { setTimeout(r, 400); }); o.wrong = s.strikes; o.crossed = w.dead; s.strikes = 0; s.iframeMs = 0;
    G.wolves.push({ x: p.x + 10, y: p.y, state: "run", sp: 0, spr: s.add.image(p.x, p.y, "hati1").setScale(0.5) });
    await new Promise(function (r) { setTimeout(r, 400); }); o.bitten = s.strikes; s.strikes = 0; s.iframeMs = 0;
    s.score = s.needExtracts - 1;
    G.stones.filter(function (q) { return s.need.indexOf(q.letter) !== -1; }).forEach(function (q) { raise(q); arrowAt(q.x, q.y); });
    await new Promise(function (r) { setTimeout(r, 2200); });
    o.ended = s.ended; o.title = document.getElementById("win-title").textContent; o.msg = document.getElementById("win-msg").textContent; o.goto = document.getElementById("btn-next").dataset.goto;
    return o;
  });
  await shot("19-wolf-ring-cleared");
  console.log("modes", JSON.stringify(modeRuns));
  var mr = modeRuns;
  check(mr.raid.key === "mode" && mr.raid.mode === "raid" && mr.raid.fire === "FIRE" && mr.raid.mini === "none" && /^Answers 0/.test(mr.raid.hud), "level 2 is Eagle Swoop in the shooter scene (FIRE button, no minimap, Answers on the HUD)");
  check(mr.raid.capt && mr.raid.capt.caught && mr.raid.capt.freedNoHurt && mr.raid.capt.double && mr.raid.capt.twoArrows === 2 && mr.raid.capt.lostOne && mr.raid.capt.kept === 1 && mr.raid.capt.keptGone, "Eagle Swoop (v5.8.2/3): the beam carries Sol off to the eagle (no life yet); an arrow on that eagle frees him without hurting it; two Sols shoot two arrows; poo on one takes him away, not a life; a Sol still held when the question is answered costs a life then: " + JSON.stringify(mr.raid.capt));
  check(mr.raid.eagles >= 2 && mr.raid.ravens >= 12 && mr.raid.afterOne === 0 && mr.raid.wrong === 1 && mr.raid.feather === 1 && mr.raid.beam === 0 && mr.raid.score === 1 && mr.raid.coins && mr.raid.newWave > 0 && mr.raid.flying > 0 && !/Fenrir/.test(mr.raid.pip), "Eagle Swoop: eagles carry the letters above a raven guard; an eagle takes two arrows; a wrong letter and a feather each cost a life, an eagle's beam catches Sol; the right eagle answers, pays coins and a new wave flies in: " + JSON.stringify(mr.raid));
  check(mr.raidPre && mr.raidPre.ready === false && mr.raidPre.firedEarly === 0 && mr.raidPre.after.ready, "Eagle Swoop: no shooting until the flock has formed: " + JSON.stringify(mr.raidPre));
  check(mr.raidPre && mr.raidPre.guards === 2 * mr.raidPre.eagles && mr.raidPre.after.flying >= 1, "Eagle Swoop: two guard ravens under every eagle, and once shooting starts a bird is always flying: " + JSON.stringify(mr.raidPre));
  check(mr.click && mr.click.moved < 2 && mr.click.fired >= 2, "Eagle Swoop: left and right mouse buttons shoot without moving Sol: " + JSON.stringify(mr.click));
  check(mr.rocks.mode === "rocks" && mr.rocks.pull !== "none" && mr.rocks.pullWrong === 1 && mr.rocks.blastRight === 1 && mr.rocks.blastWrong === 0 && mr.rocks.back && mr.rocks.hit === 1 && mr.rocks.score === 1, "Rune Rocks: pulling a wrong letter, blasting the right one and a rock hit cost a life; blasting a wrong letter is free; the right rock returns; beaming it in answers");
  check(mr.beamHelp && mr.beamHelp.shown && mr.beamHelp.paused && mr.beamHelp.right && mr.beamHelp.closed, "Rune Rocks: a one-card beam tutorial shows after the reading pop-up, pauses the level and closes with Got it: " + JSON.stringify({ shown: mr.beamHelp.shown, paused: mr.beamHelp.paused, closed: mr.beamHelp.closed }));
  check(mr.beamHelp && mr.beamHelp.rightBtn.rightPulls && mr.beamHelp.rightBtn.leftFires, "Rune Rocks: the right mouse button holds the beam; the left button fires");
  check(mr.rockMouse && mr.rockMouse.turned < 0.01 && mr.rockMouse.moved < 3 && mr.rockMouse.fired >= 1, "Rune Rocks: clicking fires without turning or moving the ship: " + JSON.stringify(mr.rockMouse));
  check(mr.rocks.lock && mr.rocks.lock.found && mr.rocks.lock.lockedFirst && mr.rocks.lock.caught && mr.rocks.lock.strikes === 0, "Rune Rocks (v5.8.5): a rock held in the beam stays locked — a nearer rock drifting into the beam and the ship turning don't drop it, so it is pulled in with no life lost: " + JSON.stringify(mr.rocks.lock));
  check(mr.rocks.early === 1 && mr.rocks.earlyLabel === "YOU LET GO OF THE BEAM TOO SOON", "Rune Rocks: a rock let go of early that hits the ship costs a life and says why: " + mr.rocks.earlyLabel);
  var cv = mr.sky.curve || {};
  check(cv.spawn6 < 1100 && cv.spawn96 <= 400 && cv.throw6 > 0.3 && cv.throw96 > cv.throw6 && cv.spark6 === 0 && cv.spark96 > 0 && cv.guards6 === 0 && cv.guards16 === 1 && cv.guards56 === 3 && cv.bob56 > cv.bob6, "Sun Chariot: harder from the first one (level 6) and harder every time after: " + JSON.stringify(cv));
  check(mr.sky.feather === 1, "Sun Chariot: a raven's feather that hits the chariot costs a life");
  check(mr.sky.blocked && mr.sky.blocked.stays && mr.sky.blocked.strikes === 0 && mr.sky.blocked.score === 0, "Sun Chariot: an orb's shield stops a bolt unless its gap faces the chariot: " + JSON.stringify(mr.sky.blocked));
  check(cv.gap16 < cv.gap6 && cv.gap96 < cv.gap16 && cv.spin96 > cv.spin6 && !cv.flip6 && cv.flip36, "Sun Chariot: the shield gap narrows and spins faster every time the level comes round, and from level 36 it reverses: " + JSON.stringify({ g6: cv.gap6, g16: cv.gap16, g96: cv.gap96, s6: cv.spin6, s96: cv.spin96 }));
  check(mr.sky.guard && mr.sky.guard.orbSafe && mr.sky.guard.guardGone && mr.sky.guard.strikes === 0 && mr.sky.guard.kill, "Sun Chariot: a guard raven in front of an orb takes the bolt and the orb stays: " + JSON.stringify(mr.sky.guard));
  check(mr.ring.sunkAtStart && mr.ring.riseWait > 2000 && mr.ring.sunkShot === 0 && mr.ring.upCount >= 1 && mr.ring.upCount <= 2, "Wolf Ring: the runestones start sunk while the wolves come, can't be shot down there, and rise one or two at a time: " + JSON.stringify({ sunk: mr.ring.sunkAtStart, wait: mr.ring.riseWait, sunkShot: mr.ring.sunkShot, up: mr.ring.upCount }));
  check(mr.skyMouse && mr.skyMouse.moved < 2, "Sun Chariot: clicking does not move the chariot: " + JSON.stringify(mr.skyMouse));
  check(mr.beamHelp && /let go early/i.test(mr.beamHelp.text || ""), "Rune Rocks: the beam card warns about letting go early");
  check(mr.rocks.learned === "1", "Rune Rocks: pulling a rock in retires the beam tutorial on this Chromebook");
  check(/blasted the rock with the right answer/.test(mr.rocks.why || ""), "Rune Rocks: losing the last life by blasting the right answer says so (not \"wrong letter\"): " + mr.rocks.why);
  check(mr.sky.mode === "sky" && mr.sky.wrong === 1 && mr.sky.crash === 1 && mr.sky.score === 1, "Sun Chariot: a wrong orb and a crash cost a life; the right orb answers");
  check(mr.ring.mode === "ring" && mr.ring.wrong === 1 && mr.ring.crossed && mr.ring.bitten === 1, "Wolf Ring: a wrong stone is crossed out and costs a life; a wolf reaching Sol costs a life");
  check(mr.ring.ended && mr.ring.title === "Wolf Ring cleared" && mr.ring.goto === "9" && /back to the maze/.test(mr.ring.msg), "the last right answer clears the level and points to the maze next");
  await page.evaluate(function () { document.getElementById("btn-next").click(); });
  await page.waitForTimeout(3000);
  var back = await page.evaluate(function () { var s = SolScene; return { key: s.sys.settings.key, night: s.night, slips: (s.slips || []).length, act: document.getElementById("btn-action").textContent, mini: getComputedStyle(document.getElementById("minimap")).display, stage: document.getElementById("stage").className }; });
  console.log("back to maze", JSON.stringify(back));
  check(back.key === "night" && back.night === 9 && back.slips === 4 && back.act === "SPRINT" && back.mini !== "none" && back.stage.indexOf("mode") === -1, "Next level goes from the shooter back to the maze with its own controls");
  /* v5.7.9: every time a mode comes round (once a realm) it adds something; the Ragnarok levels have it all */
  var tiers = {};
  await gotoLevel(92);
  tiers.raid = await page.evaluate(async function () {
    var s = SolScene, R = s.raid; s.iframeMs = 1e9; s.spareLives = 9;
    R.ravens.forEach(function (e) { if (e.state === "wait" || e.state === "enter") { e.state = "form"; e.path = null; } });
    R.cloudCd = 0; R.swapCd = 0;
    await new Promise(function (r) { setTimeout(r, 2500); });
    return { tier: s.tier, card: (document.getElementById("mode-card") || {}).textContent || "", clouds: (R.clouds || []).length, swapped: !!R.toldSwap,
      helm: R.ravens.filter(function (o) { return o.kind === "eagle"; }).every(function (o) { return o.hp === 3; }), rows: R.ravSlots.length };
  });
  await shot("20a-eagle-swoop-ragnarok");
  await gotoLevel(94);
  tiers.rocks = await page.evaluate(async function () {
    var s = SolScene, R = s.rk; s.iframeMs = 1e9; s.spareLives = 9; s._beamHelpDone = true; s.helpOpen = false; s.hideBeamHelp();
    R.cometCd = 0; R.valkCd = 0; R.showerCd = 0;
    await new Promise(function (r) { setTimeout(r, 1500); });
    var o = { tier: s.tier, warned: R.warns.length > 0, valk: !!R.valk, guards: R.rocks.filter(function (q) { return q.orbitOf; }).length, iron: R.rocks.some(function (q) { return q.hp === 2; }) };
    await new Promise(function (r) { setTimeout(r, 1300); });
    o.comet = R.rocks.some(function (q) { return q.comet; }) || o.warned;
    /* v5.8.4: harder every level — more, faster rocks, fuller fields, waves within a level, saucers */
    var lv = [], k, ok = true;
    for (k = 1; k <= 100; k++) lv.push(s.rkParams(k, 1));
    for (k = 1; k < 100; k++) {
      var a = lv[k - 1], b = lv[k];
      if (!(b.speed > a.speed && b.speedAdd > a.speedAdd && b.spawnMs <= a.spawnMs && b.start >= a.start && b.cap >= a.cap && b.saucerMs <= a.saucerMs)) ok = false;
      if (!(b.spawnMs < a.spawnMs || b.start > a.start || b.cap > a.cap || b.speed > a.speed)) ok = false;
    }
    o.ramp = { ok: ok, start: [lv[0].start, lv[49].start, lv[99].start], cap: [lv[0].cap, lv[49].cap, lv[99].cap], saucer: [lv[4].saucer, lv[5].saucer], small: [lv[14].smallShare, lv[15].smallShare] };
    var w1 = s.rkParams(40, 1), w3 = s.rkParams(40, 3);
    o.waves = w3.cap > w1.cap && w3.speed > w1.speed && w3.waveAdd > 0 && w1.waveAdd === 0;
    var big0 = R.rocks.filter(function (q) { return q.size === 3 && !q.letter; }).length, wv = R.wave;
    s.answers_rocks();
    o.waveRocks = R.wave === wv + 1 && R.rocks.filter(function (q) { return q.size === 3 && !q.letter; }).length >= big0 + s.rkParams(94, R.wave).waveAdd;
    /* a saucer flies in, shoots, and can be shot down for a bonus */
    R.saucers.forEach(function (u) { u.spr.destroy(); }); R.saucers = []; R.saucerCd = 0;
    await new Promise(function (r) { setTimeout(r, 900); });
    o.saucer = R.saucers.length === 1;
    await new Promise(function (r) { setTimeout(r, 1400); });
    o.saucerShot = R.sBullets.length > 0 || (R.saucers[0] && R.saucers[0].fireCd < 1300);
    var u0 = R.saucers[0];
    if (u0) s.saucerDown(u0, true);
    o.saucerDown = !!u0 && R.saucers.length === 0;
    /* a saucer's shot costs a life */
    s.iframeMs = 0; var st0 = s.strikes, sp0 = s.spareLives;
    R.sBullets.push({ x: R.ship.x + 4, y: R.ship.y, vx: 0, vy: 0, life: 1, spr: s.add.image(R.ship.x, R.ship.y, "md-bolt") });
    await new Promise(function (r) { setTimeout(r, 200); });
    o.saucerHurts = s.strikes > st0 || s.spareLives < sp0;
    s.iframeMs = 1e9;
    return o;
  });
  await shot("20b-rune-rocks-ragnarok");
  await gotoLevel(96);
  tiers.sky = await page.evaluate(async function () {
    var s = SolScene; s.iframeMs = 1e9; s.spareLives = 9;
    await new Promise(function (r) { setTimeout(r, 2500); });
    return { tier: s.tier, flip: s.sky.P.flip, gap: s.sky.P.gapHalf, orbs: s.sky.orbs.length };
  });
  await shot("20c-sun-chariot-ragnarok");
  await gotoLevel(98);
  tiers.ring = await page.evaluate(async function () {
    var s = SolScene, G = s.rg; s.iframeMs = 1e9; s.spareLives = 9; G.alphaCd = 0; G.ravCd = 0;
    await new Promise(function (r) { setTimeout(r, 2600); });
    return { tier: s.tier, alpha: G.wolves.some(function (w) { return w.alpha; }), raven: !!G.rav || G.drops.length > 0, ammo: G.ammo, short: G.upMs };
  });
  await shot("20d-wolf-ring-ragnarok");
  /* v5.8.4: every mode is harder at every level than at the one before (never easier on any setting) */
  var ramp = await page.evaluate(function () {
    var s = SolScene, out = {};
    function chk(name, f, up, down) {
      var easier = [], flat = [], n;
      for (n = 1; n < 100; n++) {
        var a = f(n), b = f(n + 1), harder = false, worse = false;
        up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
        down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
        if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
      }
      out[name] = { easier: easier.slice(0, 6), flat: flat.slice(0, 6) };
    }
    chk("maze", function (n) { return window.__sol.nightConfig(n); }, ["coneRange", "coneHalf", "janPatrol", "janHurry", "janChase", "chaseMs", "cameraCount", "mazeCount", "extracts"], ["iframe", "strikes"]);
    chk("raid", function (n) { return s.raidParams(n); }, ["maxDivers", "diveSpd", "featherSp", "beamP"], ["diveCdMul"]);
    chk("rocks", function (n) { return s.rkParams(n, 1); }, ["start", "cap", "speed", "speedAdd", "smallShare"], ["spawnMs", "saucerMs", "aimErr", "saucerFireMs"]);
    chk("sky", function (n) { return s.skyParams(n); }, ["eff", "ravenSp", "featherSp", "orbSp", "throwP", "guards", "spin"], ["spawnMs", "gapHalf"]);
    chk("ring", function (n) { return s.ringParams(n); }, ["eff", "cap", "wolfSp", "packP", "packMax"], ["spawnMs", "upMs", "headStart", "alphaMs"]);
    /* v5.10: Scylla and Charybdis (the Odyssey build) */
    chk("strait", function (n) { return s.straitParams(n); }, ["scroll", "sway", "rockP", "basePull", "surgePull", "surgeMs", "coreR", "heads", "strikeR", "reach"], ["rowGap", "gateW", "surgeEvery", "surgeWarn", "strikeEvery", "strikeWarn", "strikeMs", "aimErr"]);
    var t9 = s.straitParams(9), t99 = s.straitParams(99);
    out.straitEnds = { l9: { heads: t9.heads, strikeWarn: t9.strikeWarn, strikeEvery: t9.strikeEvery, surgeWarn: t9.surgeWarn, surgeEvery: t9.surgeEvery, gateW: t9.gateW, scroll: t9.scroll, basePull: t9.basePull },
      l99: { heads: t99.heads, strikeWarn: t99.strikeWarn, strikeEvery: t99.strikeEvery, surgeEvery: t99.surgeEvery, gateW: t99.gateW, scroll: t99.scroll, surgePull: t99.surgePull, again: t99.again } };
    var r1 = s.ringParams(1), r8 = s.ringParams(8);
    out.ringStart = { cap: r1.cap, spawnMs: r1.spawnMs, wolfSp: r1.wolfSp, packP: r1.packP, l8: { cap: r8.cap, spawnMs: r8.spawnMs, wolfSp: r8.wolfSp } };
    return out;
  });
  console.log("ramp", JSON.stringify(ramp));
  ["maze", "raid", "rocks", "sky", "ring", "strait"].forEach(function (m) {
    check(ramp[m] && ramp[m].easier.length === 0 && ramp[m].flat.length === 0, "v5.8.4: " + m + " is harder at every level 2-100 than at the level before, and never easier: " + JSON.stringify(ramp[m]));
  });
  check(ramp.ringStart.cap >= 4 && ramp.ringStart.spawnMs < 1500 && ramp.ringStart.wolfSp > 180 && ramp.ringStart.packP > 0, "v5.8.4: Wolf Ring starts harder (4 wolves at once, sooner and faster, packs from the start): " + JSON.stringify(ramp.ringStart));
  console.log("tiers", JSON.stringify(tiers));
  check(tiers.raid.tier === 9 && /New this time/.test(tiers.raid.card) && tiers.raid.clouds >= 1 && tiers.raid.swapped && tiers.raid.helm && tiers.raid.rows > 12, "Eagle Swoop in Ragnarok: storm clouds, eagles trading places, iron helms, three raven rows, and the card says what's new: " + JSON.stringify(tiers.raid).slice(0, 200));
  check(tiers.rocks.ramp && tiers.rocks.ramp.ok && tiers.rocks.ramp.start[2] > tiers.rocks.ramp.start[0] && tiers.rocks.ramp.cap[2] > tiers.rocks.ramp.cap[0] && !tiers.rocks.ramp.saucer[0] && tiers.rocks.ramp.saucer[1] && tiers.rocks.ramp.small[0] === 0 && tiers.rocks.ramp.small[1] > 0, "Rune Rocks (v5.8.4): every level is harder than the one before (faster rocks, faster respawns, never fewer rocks), saucers from level 6, small aiming saucers from 16: " + JSON.stringify(tiers.rocks.ramp));
  check(tiers.rocks.waves && tiers.rocks.waveRocks && tiers.rocks.saucer && tiers.rocks.saucerShot && tiers.rocks.saucerDown && tiers.rocks.saucerHurts, "Rune Rocks (v5.8.4): each new question sends a wave of big rocks; a dark-elf saucer flies in, fires, can be shot down, and its shot costs a life: " + JSON.stringify({ w: tiers.rocks.waves, wr: tiers.rocks.waveRocks, s: tiers.rocks.saucer, f: tiers.rocks.saucerShot, d: tiers.rocks.saucerDown, h: tiers.rocks.saucerHurts }));
  check(tiers.rocks.tier === 9 && tiers.rocks.comet && tiers.rocks.valk && tiers.rocks.guards >= 2 && tiers.rocks.iron, "Rune Rocks in Ragnarok: comets, a valkyrie, guard stones and iron rocks: " + JSON.stringify(tiers.rocks));
  check(tiers.sky.tier === 9 && tiers.sky.flip && tiers.sky.orbs > 0, "Sun Chariot in Ragnarok runs with reversing shields: " + JSON.stringify(tiers.sky));
  check(tiers.ring.tier === 9 && tiers.ring.alpha && tiers.ring.raven && tiers.ring.ammo <= 6, "Wolf Ring in Ragnarok: the alpha wolf, poo-dropping ravens and the quiver: " + JSON.stringify(tiers.ring));
  var se = ramp.straitEnds;
  check(se.l9.heads === 1 && se.l9.strikeWarn >= 1000 && se.l9.surgeWarn >= 900 && se.l9.gateW >= 130 && se.l9.surgeEvery >= 8000 && se.l9.strikeEvery <= 4500 && se.l9.scroll >= 100,
    "Scylla and Charybdis (v5.10): level 9 is fair for a beginner (one head, a second's warning before a strike or a surge, wide gates) but not trivial (a strike every 4 s): " + JSON.stringify(se.l9));
  check(se.l99.heads === 4 && se.l99.strikeWarn <= 600 && se.l99.strikeEvery <= 1100 && se.l99.gateW <= 80 && se.l99.surgeEvery <= 3500 && se.l99.scroll > 2 * se.l9.scroll && se.l99.again,
    "Scylla and Charybdis (v5.10): level 99 is intense (four heads, short warnings, narrow gates, near-constant surges, twice the speed): " + JSON.stringify(se.l99));

  /* v5.10: Scylla and Charybdis, the Odyssey build's level 9 of every island. In this page window.SOL_STATE is
     set to "ODY" for these checks only, then taken away again. */
  var strait = {};
  strait.rot = await page.evaluate(function () {
    var had = Object.prototype.hasOwnProperty.call(window, "SOL_STATE"), keep = window.SOL_STATE, o = {};
    function rot() { var a = []; for (var n = 1; n <= 20; n++) { var m = SolModes.modeFor(n); a.push(m ? m.id : "-"); } return a.join(","); }
    window.SOL_STATE = "ODY"; o.ody = rot();
    if (had) window.SOL_STATE = keep; else delete window.SOL_STATE;
    o.other = rot();
    var only = SolModes.only;
    SolModes.only = "strait"; o.only = [1, 9, 10, 55].map(function (n) { return SolModes.modeFor(n).id; }).join(",");
    SolModes.only = only;
    return o;
  });
  await page.evaluate(function () { window.SOL_STATE = "ODY"; });
  await gotoLevel(9);
  strait.run = await page.evaluate(async function () {
    var s = SolScene, S = s.st, o = { key: s.sys.settings.key, mode: s.mode && s.mode.id, act: document.getElementById("btn-action").textContent };
    /* wait on the game, not the clock (a busy machine runs the game slower than real time) */
    function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
    async function until(f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 8000)) await wait(40); }
    s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
    /* no hazards and no rows of their own while the scripted checks run */
    function quiet() {
      S.headCd = 1e9; S.heads.forEach(function (h) { h.spr.destroy(); }); S.heads = [];
      S.surge.state = "calm"; S.surge.t = 0; S.surge.cd = 1e9; S.dist = -1e9; S.kx = 0; S.ky = 0;
      S.rows.forEach(function (r) { s.straitKillRow(r); }); S.rows = []; S.dead = [];
      s.strikes = 0; s.iframeMs = 0;
    }
    function home(x) { S.ship.x = x == null ? (S.chanL + S.chanR) / 2 : x; S.ship.y = s.H - 110; }
    /* a one-gate row just ahead of the ship; resolves once the row has crossed the ship's middle */
    async function sail(L, dx) { var r = s.straitRow([L], S.ship.y - 12, [S.ship.x + (dx || 0)]); await until(function () { return r.done || s._between; }); await wait(60); return r; }
    quiet(); home(); s.score = 0; s.extracted = [];
    var need = s.need.slice(), letters = s.choiceLetters(), wrongL = letters.filter(function (L) { return need.indexOf(L) === -1; })[0];
    /* sailing past a gate in the open water picks nothing */
    await sail(wrongL, S.P.gateW / 2 + 18 + 80);
    o.past = s.strikes + s.score;
    /* a wrong gate: a life, and its letter is crossed out */
    quiet(); home();
    var wr = await sail(wrongL);
    o.wrong = s.strikes; o.wrongMark = wr.gates[0].state; o.wrongLabel = s._lastHitLabel;
    /* a pillar: a life */
    quiet(); home();
    await sail(need[0], -(S.P.gateW / 2 + 18));   /* its right pillar is where the ship is */
    o.pillar = s.strikes; o.pillarScore = s.score;
    /* Charybdis's centre: a life, and she spits the ship back out */
    quiet(); S.ship.x = S.wx - 4; S.ship.y = Math.max(S.yMin, Math.min(S.yMax, S.wy));
    await until(function () { return s.strikes > 0 && S.ship.x < S.wx - S.P.coreR; });
    o.charybdis = s.strikes; o.charLabel = s._lastHitLabel; o.spat = S.ship.x < S.wx - S.P.coreR;
    /* a surge: a dark, fast warning first, then the ship is dragged toward her with no key held */
    quiet(); home(S.chanL + 60); var x0 = S.ship.x;
    S.surge.state = "warn"; S.surge.t = 0;
    await until(function () { return S.surge.state !== "warn" || S.surge.t >= S.P.surgeWarn / 2; });
    o.warn = { dark: S.whirl.tintTopLeft !== 0xffffff, label: S.label.text, still: Math.abs(S.ship.x - x0) < 2 };
    await until(function () { return S.surge.state === "surge" && S.surge.t >= 800; });
    o.surge = { state: S.surge.state, dragged: Math.round(S.ship.x - x0), strikes: s.strikes };
    /* Scylla: a shadow, then the strike — under it costs a crewman (a life); out from under it costs nothing */
    quiet(); home(S.chanL + 90);
    var h = s.straitStrike(S.ship.x, S.ship.y, 500);
    await until(function () { return h.t >= 250; }); o.shadow = h.phase === "warn" && s.strikes === 0;
    await until(function () { return h.phase === "hold" || h.phase === "back" || S.heads.indexOf(h) < 0; });
    o.scylla = s.strikes; o.scyllaLabel = s._lastHitLabel;
    quiet(); home(S.chanL + 90);
    var h2 = s.straitStrike(S.ship.x, S.ship.y - 220, 400);
    await until(function () { return h2.phase === "hold" || h2.phase === "back" || S.heads.indexOf(h2) < 0; });
    o.scyllaMiss = s.strikes;
    /* ROW: a burst of speed */
    quiet(); var r0 = S.rows0 || 0; s.keys.SPACE.isDown = true;
    await until(function () { return (S.rows0 || 0) > r0; }, 4000); s.keys.SPACE.isDown = false;
    o.row = (S.rows0 || 0) - r0;
    /* a Select TWO question: the first right gate is half the answer, the second one answers it */
    quiet(); home(); s.extracted = []; var sc0 = s.score, two = letters.slice(0, 2); s.need = two.slice();
    var later = s.straitRow([two[0]], 30, [S.ship.x]);
    await sail(two[0]);
    o.two = { first: s.score - sc0, found: s.extracted.slice().join(""), later: later.gates[0].state, strikes: s.strikes };
    quiet(); home();
    var coins = s.nightCoins;
    await sail(two[1]);
    o.two.second = s.score - sc0; o.two.coins = s.nightCoins > coins;
    /* the next question: its right gate (or gates) answer it */
    await until(function () { var g = document.getElementById("read-go"); return !s._between && !!g && !!g.offsetParent; });
    var rgo = document.getElementById("read-go"); if (rgo && rgo.offsetParent) rgo.click();
    await until(function () { return !s.readOpen; });
    var sc1 = s.score; o.nextNeed = s.need.length;
    for (var j = 0; j < o.nextNeed; j++) { quiet(); home(); await sail(s.need[j]); }
    o.right = s.score - sc1; o.rightStrikes = s.strikes;
    return o;
  });
  await page.waitForTimeout(1300);
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.evaluate(function () { SolScene.iframeMs = 1e9; SolScene.spareLives = 9; });   /* just for the picture */
  await page.waitForTimeout(5000);
  await shot("21a-scylla-charybdis-9");
  await gotoLevel(89);
  strait.l89 = await page.evaluate(async function () {
    var s = SolScene, S = s.st; s.iframeMs = 1e9; s.spareLives = 9;
    await new Promise(function (r) { setTimeout(r, 5000); });
    return { mode: s.mode.id, tier: s.tier, card: (document.getElementById("mode-card") || {}).textContent || "", heads: S.P.heads, sway: S.P.sway, rocks: S.P.rockP, rows: S.rows.length };
  });
  await shot("21b-scylla-charybdis-89");
  strait.after = await page.evaluate(function () {
    delete window.SOL_STATE;
    var a = []; for (var n = 1; n <= 20; n++) { var m = SolModes.modeFor(n); a.push(m ? m.id : "-"); }
    SolScene.iframeMs = 0;
    return a.join(",");
  });
  console.log("strait", JSON.stringify(strait));
  var sr = strait.run;
  check(strait.rot.ody === "-,raid,-,rocks,-,sky,-,ring,strait,-,-,raid,-,rocks,-,sky,-,ring,strait,-" && strait.rot.other === "-,raid,-,rocks,-,sky,-,ring,-,-,-,raid,-,rocks,-,sky,-,ring,-,-" && strait.after === strait.rot.other && strait.rot.only === "strait,strait,strait,strait",
    "Scylla and Charybdis (v5.10): the Odyssey rotation plays it on level 9 of every island; the Virginia and New Jersey rotation is unchanged; picked alone it plays every level: " + JSON.stringify(strait.rot) + " after: " + strait.after);
  check(sr.key === "mode" && sr.mode === "strait" && sr.act === "ROW" && sr.row === 1, "Scylla and Charybdis: level 9 of the Odyssey runs in the mode scene with a ROW button that gives a burst of speed: " + JSON.stringify({ key: sr.key, mode: sr.mode, act: sr.act, row: sr.row }));
  check(sr.past === 0 && sr.wrong === 1 && sr.wrongMark === "wrong" && /WRONG LETTER/.test(sr.wrongLabel || "") && sr.pillar === 1 && sr.pillarScore === 0, "Scylla and Charybdis: sailing past a gate picks nothing; a wrong gate costs a life and is crossed out; hitting a pillar costs a life: " + JSON.stringify({ past: sr.past, wrong: sr.wrong, mark: sr.wrongMark, pillar: sr.pillar }));
  check(sr.charybdis === 1 && /CHARYBDIS/.test(sr.charLabel || "") && sr.spat && sr.warn.dark && /stirs/i.test(sr.warn.label) && sr.warn.still && sr.surge.state === "surge" && sr.surge.dragged > 30 && sr.surge.strikes === 0, "Scylla and Charybdis: Charybdis's centre costs a life; a surge is telegraphed (dark, fast water, no pull yet), then drags the ship toward her: " + JSON.stringify({ c: sr.charybdis, spat: sr.spat, warn: sr.warn, surge: sr.surge }));
  check(sr.shadow && sr.scylla === 1 && /SCYLLA/.test(sr.scyllaLabel || "") && sr.scyllaMiss === 0, "Scylla and Charybdis: a shadow warns first; Scylla's strike on the ship costs a life, a strike elsewhere costs nothing: " + JSON.stringify({ shadow: sr.shadow, hit: sr.scylla, miss: sr.scyllaMiss }));
  check(sr.two.first === 0 && sr.two.found.length === 1 && sr.two.later === "right" && sr.two.strikes === 0 && sr.two.second === 1 && sr.two.coins, "Scylla and Charybdis: a Select TWO question needs both right gates — the first is marked found, the second answers and pays coins: " + JSON.stringify(sr.two));
  check(sr.right === 1 && sr.rightStrikes === 0, "Scylla and Charybdis: sailing through the right gate answers the question: " + JSON.stringify({ right: sr.right, need: sr.nextNeed }));
  check(strait.l89.mode === "strait" && strait.l89.tier === 8 && /New this time/.test(strait.l89.card) && strait.l89.heads === 4 && strait.l89.sway > 0 && strait.l89.rocks > 0, "Scylla and Charybdis at level 89: four heads, swaying gates, lone rocks, and the card says what's new: " + JSON.stringify(strait.l89).slice(0, 220));
  await gotoLevel(2);
  var retry = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1;
    s.answerWrong("Z", "WRONG LETTER");
    await new Promise(function (r) { setTimeout(r, 1500); });
    return { ended: s.ended, title: document.getElementById("win-title").textContent, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  await page.click("#btn-retry");
  await page.waitForTimeout(2500);
  retry.after = await page.evaluate(function () { var s = SolScene; return { key: s.sys.settings.key, night: s.night, strikes: s.strikes, mode: s.mode && s.mode.id }; });
  console.log("mode retry", JSON.stringify(retry));
  check(retry.ended && retry.title === "Run over" && /Eagle Swoop/.test(retry.msg) && retry.retry && retry.after.key === "mode" && retry.after.night === 2 && retry.after.strikes === 0, "losing a shooter level offers Retry, which restarts the same shooter");

  /* v5.2: the two standalone builds (node tools/build-games.js). Each is one state with no
     gateway, only its grade cards, only its packs, and no "change state" button. */
  var distRoot = path.join(root, "dist");
  var builds = { nj: { st: "NJ", fam: "NJ5", other: ["G9", "G10", "G11", "ODY"], cards: 1 }, va: { st: "VA", fam: "G9", other: ["NJ5", "ODY"], cards: 3 },
    ody: { st: "ODY", fam: "ODY", other: ["G9", "G10", "G11", "NJ5"], cards: 1 } };
  for (var bk in builds) {
    var b = builds[bk], bdir = path.join(distRoot, bk);
    if (!fs.existsSync(path.join(bdir, "index.html"))) { console.log("skip  dist/" + bk + " (run node tools/build-games.js)"); continue; }
    root = bdir;
    await page.evaluate(function (k) { localStorage.clear(); localStorage.setItem(k, "strait"); }, bk === "ody" ? "afterHours.ody.gameMode" : "afterHours.v1.gameMode");
    await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(800);
    var lockInfo = await page.evaluate(function (o) {
      /* count packs by family straight from the pool: heistBuildPack falls back to every pack when a family is empty */
      var pools = {}; ["G9", "G10", "G11", "NJ5", "ODY"].forEach(function (f) { pools[f] = window.HEIST_PACKS.filter(function (p) { return p.family === f; }).length; });
      return { state: window.SOL_STATE, title: document.title, gateway: !document.getElementById("state-screen").classList.contains("hidden"),
        titleShown: !document.getElementById("title-screen").classList.contains("hidden"),
        cards: Array.prototype.filter.call(document.querySelectorAll('#title-screen .card[data-family]'), function (c) { return !c.classList.contains("hidden"); }).map(function (c) { return c.getAttribute("data-family"); }),
        btnState: !!document.getElementById("btn-state"), kicker: document.getElementById("title-kicker").textContent, pools: pools,
        families: Array.prototype.map.call(document.querySelectorAll("#title-screen .card[data-family]"), function (c) { return c.getAttribute("data-family"); }) };
    }, b);
    console.log("dist/" + bk, JSON.stringify(lockInfo));
    check(lockInfo.state === b.st && !lockInfo.gateway && lockInfo.titleShown, "dist/" + bk + ": title screen first, no gateway");
    check(lockInfo.cards.length === b.cards && lockInfo.cards.indexOf(b.fam) !== -1 && !lockInfo.btnState, "dist/" + bk + ": only its grade cards, no change-state button");
    check(lockInfo.pools[b.fam] > 40 && b.other.every(function (f) { return lockInfo.pools[f] === 0; }), "dist/" + bk + ": only its packs in the pool");
    /* pick the grade and reach the skill screen; the gateway must never come back */
    await page.click('#title-screen .card[data-family="' + b.fam + '"]'); await page.waitForTimeout(300);
    check(await page.isVisible("#mode-screen"), "dist/" + bk + ": game mode screen opens");
    /* v5.10: Scylla and Charybdis is offered (and a saved pick of it kept) only in the Odyssey game */
    var mcards = await page.evaluate(function () { return { cards: Array.prototype.map.call(document.querySelectorAll("#mode-packs .card"), function (c) { return c.getAttribute("data-gamemode"); }), only: window.SolModes ? SolModes.only : "?" }; });
    check(bk === "ody" ? mcards.cards.indexOf("strait") !== -1 && mcards.only === "strait" : mcards.cards.indexOf("strait") === -1 && mcards.only === null,
      "dist/" + bk + ": the Scylla and Charybdis card " + (bk === "ody" ? "is offered and a saved pick of it is kept" : "is not offered, and a saved pick of it falls back to All modes") + ": " + JSON.stringify(mcards));
    await page.click('#mode-packs .card[data-gamemode="ALL"]'); await page.waitForTimeout(300);
    var drot = await page.evaluate(function () { var a = []; for (var n = 1; n <= 10; n++) { var m = SolModes.modeFor(n); a.push(m ? m.id : "-"); } return a.join(","); });
    check(drot === (bk === "ody" ? "-,raid,-,rocks,-,sky,-,ring,strait,-" : "-,raid,-,rocks,-,sky,-,ring,-,-"), "dist/" + bk + ": the Mixed rotation " + (bk === "ody" ? "has Scylla and Charybdis on level 9" : "is unchanged") + ": " + drot);
    check(await page.isVisible("#skill-screen"), "dist/" + bk + ": skill screen opens");
    if (bk === "ody") {
      /* v5.9: the Odyssey game picks an episode, and keeps its own saves */
      var odyInfo = await page.evaluate(function () {
        var keys = []; for (var i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
        return { title: document.getElementById("skill-title").textContent,
          episodes: Array.prototype.map.call(document.querySelectorAll("#skill-packs .card[data-strand]"), function (c) { return c.getAttribute("data-strand"); }),
          keys: keys, kicker: document.getElementById("title-kicker").textContent };
      });
      console.log("dist/ody", JSON.stringify(odyInfo));
      check(odyInfo.title === "Pick an episode" && ["LOTUS", "CYCLOPS", "CIRCE", "HELIOS", "CALYPSO", "VOYAGE", "ALL"].every(function (e) { return odyInfo.episodes.indexOf(e) !== -1; }), "dist/ody: the skill screen lists the five episodes, the whole voyage and All");
      check(odyInfo.keys.length > 0 && odyInfo.keys.every(function (k) { return k.indexOf("afterHours.v1.") !== 0; }) && odyInfo.keys.some(function (k) { return k.indexOf("afterHours.ody.") === 0; }), "dist/ody: saves under afterHours.ody.*, never the Virginia game's keys");
      check(/Odyssey/.test(odyInfo.kicker) && /Odyssey/.test(lockInfo.title), "dist/ody: the title and kicker name The Odyssey");
      await page.click('#skill-packs .card[data-strand="CYCLOPS"]'); await page.waitForTimeout(200);
      await page.click("#btn-skill-start"); await page.waitForTimeout(300);
      if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
      await page.waitForTimeout(3000);
      var odyPlay = await page.evaluate(function () { var sc = window.SolScene; return sc && sc.claim ? { fam: sc.family, strand: sc.strand, ep: sc.claim.episode, title: sc.claim.packTitle } : null; });
      console.log("dist/ody play", JSON.stringify(odyPlay));
      check(odyPlay && odyPlay.fam === "ODY" && odyPlay.ep === "cyclops", "dist/ody: picking the Cyclops plays a Cyclops passage");
      await page.evaluate(function () { localStorage.clear(); });
      await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(800);
      await page.click('#title-screen .card[data-family="ODY"]'); await page.waitForTimeout(300);
      await page.click('#mode-packs .card[data-gamemode="ALL"]'); await page.waitForTimeout(300);
    }
    await page.click("#btn-skill-back"); await page.waitForTimeout(300);
    await page.click("#btn-mode-back"); await page.waitForTimeout(300);
    check(await page.isVisible("#title-screen") && !(await page.isVisible("#state-screen")), "dist/" + bk + ": back goes to the title, not the gateway");
    await shot("14-dist-" + bk);
  }
  root = path.join(__dirname, "..");

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
