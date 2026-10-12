/* Headless test of the Town builder in 3D (v5.18.2): the town builds with the castle kit's pieces and 3D models.
   node tools/smoke-town.js (serves the repo; no build needed).
   It proves: a new town starts from a core building (town hall, manor or tavern; the castle's keeps are not offered),
   every piece it offers is a castle-kit piece, the gallery draws it in 3D with every model loaded, its rank names
   are the town's (Hamlet …), the 8th building raises a fence ring with a gate, Turn turns a building a quarter like
   the castle's, and an old 2D town (cottage, stall, tavern …) converts to kit pieces with nothing lost. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var repo = path.join(__dirname, ".."), shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", mp3: "audio/mpeg", webp: "image/webp", glb: "model/gltf-binary", obj: "text/plain", mtl: "text/plain" };
var srv = http.createServer(function (req, res) {
  var f = path.join(repo, decodeURIComponent(url.parse(req.url).pathname));
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
  var page = await browser.newPage({ viewport: { width: 1280, height: 720 } }), errors = [];
  page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
  var fails = [];
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  var P = JSON.parse(fs.readFileSync(path.join(repo, "assets/build/pieces.json"), "utf8"));
  var castleIds = {}; P.pieces.forEach(function (p) { if (p.theme === "castle") castleIds[p.id] = p; });
  var CORE = P.themes.village.core;

  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.evaluate(function () { localStorage.clear(); });
  await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(800);
  await page.click('#state-screen .card[data-state="NJ"]').catch(function () {}); await page.waitForTimeout(200);

  /* ── a new town: eight rewards ── */
  var firstOptions = null;
  for (var n = 1; n <= 8; n++) {
    var night = n * 5;
    await page.evaluate(function (nt) { window.__done = false; SolBuild.showReward(nt, function () { window.__done = true; }); }, night);
    await page.waitForSelector("#build-overlay:not(.hidden)", { timeout: 5000 });
    if (n === 1) { await page.waitForSelector(".build-theme"); await page.click(".build-theme:nth-child(1)"); await page.click("#build-overlay .btn.primary"); }
    await page.waitForSelector(".build-options .build-opt");
    if (n === 1) firstOptions = await page.$$eval(".build-options .build-opt", function (l) { return l.map(function (b) { return b.textContent; }); });
    await page.click(".build-options .build-opt:nth-child(1)"); await page.click("#build-overlay .btn.primary");
    if (await page.isVisible(".build-styles:not(.hidden) .build-opt")) { await page.click(".build-styles .build-opt:nth-child(1)"); await page.click("#build-overlay .btn.primary"); }
    await page.waitForSelector(".build-note:not(.hidden)"); await page.click("#build-overlay .btn.primary"); await page.waitForSelector(".build-note:not(.hidden)");
    await page.click("#build-overlay .btn.primary"); await page.waitForFunction(function () { return window.__done === true; }, null, { timeout: 8000 }).catch(function () {});
  }
  var town = await page.evaluate(function () { return { st: SolBuild.state(), save: JSON.parse(localStorage.getItem("afterHours.v1.build")) }; });
  var picks = town.save.picks, first = picks.filter(function (p) { return p.src !== "auto"; })[0] || {};
  var foreign = picks.filter(function (p) { return !castleIds[p.piece]; }).map(function (p) { return p.piece; });
  var keeps = picks.filter(function (p) { return castleIds[p.piece] && castleIds[p.piece].role === "core"; }).length;
  check(town.st.theme === "village" && CORE.indexOf(first.piece) !== -1 && foreign.length === 0 && keeps === 0 && firstOptions && firstOptions.length > 0 && !firstOptions.some(function (t) { return /keep/i.test(t); }),
    "a new town starts from a town hall, manor or tavern (no keeps), and every piece is a castle-kit piece: " + JSON.stringify({ first: first.piece, foreign: foreign, keeps: keeps, options: (firstOptions || []).map(function (t) { return t.slice(0, 30); }) }));
  var fence = picks.filter(function (p) { return p.src === "auto"; });
  check(fence.length > 4 && fence.every(function (p) { return p.piece === "c-fence" || p.piece === "fence-gate"; }) && fence.some(function (p) { return p.piece === "fence-gate"; }) && town.st.walls === true,
    "the 8th building raises a fence ring with a gate around the town: " + JSON.stringify({ ring: fence.length, gate: fence.filter(function (p) { return p.piece === "fence-gate"; }).length, walls: town.st.walls }));

  /* ── the gallery: 3D, every model loaded, the town's rank ── */
  await page.evaluate(function () { SolBuild.showGallery(); });
  await page.waitForSelector("#build-overlay:not(.hidden)"); await page.waitForTimeout(2500);
  var td = await page.evaluate(function () { return { probe: SolBuild._probe(0, 0, 0), loads: SolBuild._loads3d(), rating: SolBuild.state().rating }; });
  await page.screenshot({ path: path.join(shots, "town-3d.png") });
  check(td.probe && td.probe.use3d && td.loads && td.loads.models === "ok" && td.loads.failed === 0 && td.loads.loaded === td.loads.total && td.loads.total > 3,
    "the town draws in 3D with the castle's models, every one loaded: " + JSON.stringify(td.loads));
  check(td.rating && /Hamlet|Village|Town|Market Town|Borough|City|Capital/.test(td.rating.name || td.rating.rank || JSON.stringify(td.rating)) && !/Camp|Fort|Stronghold/.test(JSON.stringify(td.rating)),
    "the town's rank uses town names: " + JSON.stringify(td.rating));
  var turn = await page.evaluate(function () { SolBuild._select(0); return [SolBuild._turn(), SolBuild._turn()]; });
  check(turn[0] === 1 && turn[1] === 2, "Turn turns a town building a quarter at a time, as in the castle: " + JSON.stringify(turn));
  await page.evaluate(function () { SolBuild.close(); });

  /* ── an old 2D town converts ── */
  var old = { v: 4, theme: "village", salt: 12345, coins: 77, kit: 2, owned: { cottage: 1, stall: 1, tavern: 1, lamp: 1 }, rewards: { 5: "cottage", 10: "stall", 15: "tavern" },
    picks: [{ night: 5, piece: "cottage", style: "tile", src: "reward", deco: false, ord: 0, cx: 0, cy: 0 }, { night: 10, piece: "stall", style: "slate", src: "reward", deco: false, ord: 1, cx: 1, cy: 0 },
      { night: 15, piece: "tavern", style: "thatch", src: "reward", deco: false, ord: 2, cx: 0, cy: 1 }, { night: 20, piece: "lamp", style: "", src: "shop", deco: true, ord: 3, cx: 2, cy: 2 }] };
  await page.evaluate(function (s) { localStorage.setItem("afterHours.v1.build", JSON.stringify(s)); }, old);
  await page.reload({ waitUntil: "load" }); await page.waitForTimeout(800);
  await page.click('#state-screen .card[data-state="NJ"]').catch(function () {}); await page.waitForTimeout(200);
  await page.evaluate(function () { SolBuild.showGallery(); });
  await page.waitForSelector("#build-overlay:not(.hidden)"); await page.waitForTimeout(2000);
  var conv = await page.evaluate(function () { var s = JSON.parse(localStorage.getItem("afterHours.v1.build")); return { picks: s.picks.map(function (p) { return p.piece + ":" + (p.style || "-") + "@" + p.cx + "," + p.cy; }), rewards: s.rewards, coins: s.coins, use3d: SolBuild._probe(0, 0, 0).use3d }; });
  await page.screenshot({ path: path.join(shots, "town-converted.png") });
  var cp = conv.picks.map(function (s) { return s.split(":")[0]; });
  check(cp.length === 4 && cp.every(function (id) { return !!castleIds[id]; }) && cp[0] === "k-townhall" && conv.rewards[5] === "k-townhall" && conv.coins === 77 && conv.use3d && conv.picks.every(function (s) { return !/@undefined/.test(s); }),
    "an old 2D town converts: every piece mapped to a kit piece (the cottage core becomes the town hall), coins kept, laid out and drawn in 3D: " + JSON.stringify(conv));
  await page.evaluate(function () { SolBuild.close(); });

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
