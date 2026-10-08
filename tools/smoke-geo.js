/* Headless test of the Geometry game (dist/geo, v5.19): node tools/build-games.js, then node tools/smoke-geo.js
   In the 500-pixel Canvas frame (1000 x 500) it proves: the title screen offers only Geometry; the skill screen has the
   four strands of the 2023 Geometry SOL and All; a level's reading pop-up shows a figure (inline SVG), says "Study first"
   and gives no word count; the side panel shows the figure and the question; a strand pick serves only that strand
   (G.TR.* for Triangles); a right answer is recorded under its Geometry skill (G.TR.x.y) and strand in the Geometry
   save (afterHours.geo.*, not the Virginia one); the progress code is a SOL3-GEO code that reads back; the reading
   strand badges are not offered; and nothing logs a page error. Screenshots: tools/shots/geo-*.png. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var repo = path.join(__dirname, ".."), root = path.join(repo, "dist", "geo"), shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", mp3: "audio/mpeg", webp: "image/webp", glb: "model/gltf-binary" };
var srv = http.createServer(function (req, res) {
  var f = path.join(root, decodeURIComponent(url.parse(req.url).pathname));
  if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, function (err, buf) {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": MIME[f.split(".").pop()] || "application/octet-stream" }); res.end(buf);
  });
});
(async function () {
  if (!fs.existsSync(path.join(root, "index.html"))) { console.log("FAIL run node tools/build-games.js first"); process.exit(1); }
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var page = await browser.newPage({ viewport: { width: 1000, height: 500 } }), errors = [];
  page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
  page.on("dialog", function (d) { d.dismiss().catch(function () {}); });
  var fails = [];
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  async function shot(n) { await page.screenshot({ path: path.join(shots, "geo-" + n + ".png") }); }
  async function toReading() {
    for (var i = 0; i < 40; i++) {
      if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip", { timeout: 2000 }).catch(function () {}); await page.waitForTimeout(300); continue; }
      if (await page.isVisible("#read-go")) return;
      await page.waitForTimeout(300);
    }
  }
  async function toPlay() {
    var calm = 0;
    for (var i = 0; i < 40 && calm < 4; i++) {
      if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip", { timeout: 2000 }).catch(function () {}); calm = 0; }
      else if (await page.isVisible("#read-go")) { await page.click("#read-go", { timeout: 2000 }).catch(function () {}); calm = 0; }
      else calm++;
      await page.waitForTimeout(300);
    }
  }

  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.evaluate(function () { localStorage.clear(); });
  await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(800);
  var t0 = await page.evaluate(function () {
    var cards = Array.prototype.filter.call(document.querySelectorAll("#title-screen .card[data-family]"), function (c) { return !c.classList.contains("hidden"); }).map(function (c) { return c.getAttribute("data-family"); });
    var packs = window.HEIST_PACKS || [];
    return { title: document.title, gateway: !document.getElementById("state-screen").classList.contains("hidden"), cards: cards, state: window.SOL_STATE,
      fams: packs.map(function (p) { return p.family; }).filter(function (f, i, a) { return a.indexOf(f) === i; }), n: packs.length,
      tag: (document.querySelector("#title-screen .tag") || {}).textContent || "" };
  });
  await shot("01-title");
  check(t0.state === "GEO" && !t0.gateway && t0.cards.join() === "GEO" && t0.fams.join() === "GEO" && t0.n >= 52 && /Geometry/.test(t0.title) && /Study the figure/.test(t0.tag),
    "the Geometry build opens on its own title screen with only the Geometry card and only Geometry packs: " + JSON.stringify(t0));

  await page.click('#title-screen .card[data-family="GEO"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-gamemode="maze"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  var sk = await page.evaluate(function () { return Array.prototype.map.call(document.querySelectorAll("#skill-screen .card[data-strand]"), function (c) { return c.getAttribute("data-strand"); }); });
  await shot("02-strands");
  check(sk.join() === "RLT,TR,PC,DF,ALL", "the skill screen offers the four Geometry strands and All: " + JSON.stringify(sk));
  await page.click('#skill-screen .card[data-strand="TR"]');
  await page.click("#btn-skill-start"); await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await toReading();
  await page.waitForTimeout(400);
  var r = await page.evaluate(function () {
    var k = document.getElementById("read-kicker"), svg = document.querySelector("#read-passage svg"), b = svg && svg.getBoundingClientRect();
    return { kick: k ? k.textContent : "", svg: !!svg, w: b ? Math.round(b.width) : 0, h: b ? Math.round(b.height) : 0, sol: SolScene && SolScene.claim && SolScene.claim.sol };
  });
  await shot("03-reading");
  check(r.svg && r.w > 200 && r.h > 80 && /^Study first · Level 1 · G\.TR\./.test(r.kick) && !/words/.test(r.kick),
    "the reading pop-up shows the figure, says Study first and gives no word count: " + JSON.stringify(r));
  await toPlay();
  await page.waitForTimeout(800);
  var h = await page.evaluate(function () {
    var svg = document.querySelector("#eoc-passage svg"), b = svg && svg.getBoundingClientRect();
    var li = document.querySelectorAll("#eoc-choices li"), last = li[li.length - 1], lr = last && last.getBoundingClientRect();
    return { svg: !!svg, h: b ? Math.round(b.height) : 0, sol: document.getElementById("job-sol").textContent, stem: document.getElementById("eoc-stem").textContent,
      answers: li.length, lastIn: !!(lr && lr.bottom <= innerHeight + 1) };
  });
  await shot("04-play");
  check(h.svg && h.h > 60 && /^SOL · G\.TR\.\d · Level /.test(h.sol) && h.stem.length > 10 && h.answers === 4 && h.lastIn,
    "the side panel shows the figure, the question and all four answers in the 500-pixel frame, with the Geometry label: " + JSON.stringify(h));

  /* a strand pick serves only that strand */
  var pool = await page.evaluate(function () { var p = SolScene.pack; return p.claims.map(function (c) { return c.sol; }).filter(function (s, i, a) { return a.indexOf(s) === i; }).sort(); });
  check(pool.length === 4 && pool.every(function (s) { return /^G\.TR\.[1-4]$/.test(s); }), "the Triangles strand serves only G.TR questions: " + JSON.stringify(pool));

  /* answer right: carry the key's letters to the exit */
  var ans = await page.evaluate(function () {
    var s = SolScene, c = s.claim, before = SolProgress.record("GEO");
    s.player.carrying = null; s.carryExtra = [];
    s.need.forEach(function (L, i) { var sl = s.slips.filter(function (q) { return q.letter === L; })[0]; if (!i) s.player.carrying = sl; else s.carryExtra.push(sl); });
    s.player.body.reset(s.exitZone.x, s.exitZone.y); s.tryExtract();
    var rec = SolProgress.record("GEO"), keys = Object.keys(localStorage);
    return { sub: c.sub, std: rec.std[c.sub], skill: rec.skills.TR, q: rec.q.answered - before.q.answered,
      geoKey: keys.some(function (k) { return /^afterHours\.geo\./.test(k); }), vaKey: keys.some(function (k) { return /^afterHours\.v1\.progress/.test(k); }) };
  });
  check(/^G\.TR\.\d\.\d$/.test(ans.sub || "") && ans.std && ans.std.a === 1 && ans.skill && ans.skill.a >= 1 && ans.q === 1 && ans.geoKey && !ans.vaKey,
    "a right answer is recorded under its Geometry skill and the Triangles strand, in the Geometry save only: " + JSON.stringify(ans));

  var code = await page.evaluate(function () {
    var c = SolProgress.code ? SolProgress.code() : "", d = window.SolProgressCode && SolProgressCode.decode ? SolProgressCode.decode(c) : null;
    var rel = [];
    try { rel = (window.SolBadges && SolBadges.relevant) ? SolBadges.relevant() : []; } catch (e) {}
    return { code: String(c).slice(0, 12), ok: d ? d.ok : null, build: d ? d.build : null, reading: rel.filter(function (id) { return /^(rl|ri|rv|dsr)\d+$/.test(id); }).length, rel: rel.length };
  });
  check(/^SOL\d-GEO-/.test(code.code) && code.ok !== false, "the progress code is a Geometry code: " + JSON.stringify(code));
  if (code.rel) check(code.reading === 0, "the reading-strand badges are not offered in the Geometry game: " + JSON.stringify(code));

  check(!errors.length, "no page errors: " + JSON.stringify(errors.slice(0, 5)));
  await browser.close(); srv.close();
  console.log(fails.length ? "\n" + fails.length + " FAILED" : "\nall ok");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
