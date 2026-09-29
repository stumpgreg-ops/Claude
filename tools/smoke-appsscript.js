/* Headless check of the Apps Script build: node tools/smoke-appsscript.js [va|nj]
   (run tools/build-games.js and tools/build-appsscript.js first).
   Serves dist/appsscript and opens test.html, which plays Apps Script's part: loader.html in a sandboxed frame,
   google.script.run answered from the local parts. Checks that the game only ever asks the server for the
   loader, the manifest and the parts (every asset comes out of the bundle), that the title screen, a level and
   the 3D castle all work, that music is off, and that a second visit loads from the Chromebook's cache. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var st = (process.argv[2] || "va").toLowerCase();
var root = path.join(__dirname, "..", "dist", "appsscript"), shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", json: "application/json", bin: "application/octet-stream" };
var served = [];
var srv = http.createServer(function (req, res) {
  var p = decodeURIComponent(url.parse(req.url).pathname);
  served.push(p);
  fs.readFile(path.join(root, p), function (err, buf) {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": MIME[p.split(".").pop()] || "application/octet-stream" }); res.end(buf);
  });
});
(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(glArgs);
  var ctx = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  var page = await ctx.newPage();
  var errors = [], fails = [];
  page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
  page.on("console", function (m) { if (m.type() === "error") { var t = m.text(); if (!/favicon|Autoplay|AudioContext|peerjs|WebGL|GL Driver|swiftshader/i.test(t)) errors.push(t); } });
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  async function frame() { var h = await page.waitForSelector("#app"); return h.contentFrame(); }
  var man = JSON.parse(fs.readFileSync(path.join(root, st, "manifest.json"), "utf8"));

  var t0 = Date.now();
  await page.goto(base + "test.html?st=" + st);
  var f = await frame();
  await f.waitForSelector("#title-screen:not(.hidden)", { timeout: 60000 });
  console.log("first load " + (Date.now() - t0) + " ms");
  await page.waitForTimeout(1500);
  var s1 = await f.evaluate(function () {
    return { state: window.SOL_STATE, boot: !!document.getElementById("sol-boot"), phaser: !!window.Phaser, build: !!window.SolBuild,
      three: !!window.THREE, calls: window.__solCalls.slice(), music: getComputedStyle(document.getElementById("btn-music")).display,
      logo: document.querySelector("#title-screen .logo img").src, logoOk: document.querySelector("#title-screen .logo img").naturalWidth };
  });
  console.log(JSON.stringify(s1));
  check(s1.state === st.toUpperCase(), "the page is the " + st.toUpperCase() + " game");
  check(!s1.boot && s1.phaser && s1.build && s1.three, "the loader finished and the game's scripts ran");
  check(s1.calls.length === 1 + man.parts.length && s1.calls[0] === "solManifest", "the page asked the server for the manifest and " + man.parts.length + " parts: " + s1.calls.join(", "));
  check(s1.logoOk > 0 && /^blob:/.test(s1.logo), "the title logo comes from the bundle");
  check(s1.music === "none", "no music button");
  await page.screenshot({ path: path.join(shots, "as-01-title.png") });

  /* a level */
  var fam = st === "va" ? "G9" : "NJ5";
  await f.click('#title-screen .card[data-family="' + fam + '"]');
  await f.waitForSelector("#skill-screen:not(.hidden)");
  await f.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await f.isVisible("#btn-char-confirm")) await f.click("#btn-char-confirm");
  await page.waitForTimeout(3000);
  for (var i = 0; i < 12; i++) { if (await f.isVisible("#tut-skip")) { await f.click("#tut-skip"); break; } await page.waitForTimeout(300); }
  await page.waitForTimeout(1500);
  var hud = await f.evaluate(function () { return { stem: document.getElementById("eoc-stem").textContent, music: window.SolMusic.state() }; });
  check(hud.stem.length > 10, "a level starts with a question");
  check(!hud.music.key, "no music track is playing");
  await page.screenshot({ path: path.join(shots, "as-02-level.png") });
  if (await f.isVisible("#read-go")) await f.click("#read-go");
  await page.waitForTimeout(1500);
  var sprites = await f.evaluate(function () {
    var g = window.SolScene && SolScene.game, tx = g && g.textures, bad = [];
    if (tx) tx.getTextureKeys().forEach(function (k) { var s = tx.get(k).getSourceImage(); if (s && s.width === 0) bad.push(k); });
    return { n: tx ? tx.getTextureKeys().length : -1, bad: bad };
  });
  check(sprites.n > 10 && sprites.bad.length === 0, "the game's images loaded: " + sprites.n + " textures" + (sprites.bad.length ? ", empty: " + sprites.bad.join(",") : ""));
  await page.screenshot({ path: path.join(shots, "as-03-maze.png") });

  /* the 3D castle, with one of every kind of building and every monument */
  await f.evaluate(function () {
    var ids = ["keep", "k-stables", "k-church", "k-barracks", "k-market", "k-castle", "trophy-midgard", "trophy-asgard", "trophy-ragnarok", "tower", "wall", "gate"];
    var picks = ids.map(function (id, i) { return { night: 5, piece: id, style: "blue", src: "free", deco: false, ord: i, rot: 0, cx: (i % 4) * 4, cy: Math.floor(i / 4) * 4 }; });
    localStorage.setItem("afterHours.v1.build", JSON.stringify({ v: 4, theme: "castle", salt: 7, coins: 50, kit: 2, owned: {}, rewards: {}, picks: picks, view: { a: 0, z: 1, px: 0, py: 0 }, code: "" }));
  });
  await page.reload();
  f = await frame();
  await f.waitForSelector("#title-screen:not(.hidden)", { timeout: 60000 });
  var calls2 = await f.evaluate(function () { return window.__solCalls.slice(); });
  check(calls2.length === 1 && calls2[0] === "solManifest", "a second visit loads the game from the Chromebook's cache: " + calls2.join(", "));
  await f.evaluate(function () { SolBuild.init && SolBuild.init(); SolBuild.showGallery(); });
  await f.waitForSelector("#build-overlay:not(.hidden)");
  var loads;
  for (var w = 0; w < 40; w++) {
    await page.waitForTimeout(500);
    loads = await f.evaluate(function () { return SolBuild._loads3d(); });
    if (loads && loads.models === "ok" && loads.total > 3 && loads.loaded + loads.failed === loads.total) break;
  }
  await page.waitForTimeout(1500);
  var probe = await f.evaluate(function () { return SolBuild._probe(3, 2, 1); });
  console.log("3d", JSON.stringify({ loads: loads, probe: probe }));
  check(probe && probe.use3d, "the castle draws in 3D");
  check(loads && loads.models === "ok" && loads.failed === 0 && loads.loaded === loads.total && loads.total > 3, "every 3D model loaded from the bundle: " + JSON.stringify(loads));
  await page.screenshot({ path: path.join(shots, "as-04-castle-3d.png") });

  /* nothing but the loader, manifest and parts ever came from the server */
  var allowed = ["/test.html", "/" + st + "/loader.html", "/" + st + "/manifest.json"].concat(man.parts.map(function (p) { return "/" + st + "/" + p; }));
  var leaks = served.filter(function (p) { return allowed.indexOf(p) === -1; });
  check(leaks.length === 0, "every asset came from the bundle" + (leaks.length ? "; asked the server for: " + leaks.slice(0, 12).join(", ") : ""));
  check(errors.length === 0, "no errors" + (errors.length ? ": " + errors.slice(0, 6).join(" | ") : ""));

  await browser.close(); srv.close();
  console.log(fails.length ? "\n" + fails.length + " FAILED" : "\nALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
