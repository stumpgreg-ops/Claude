/* Headless test of the Lit and Film game's screens and pools: node tools/smoke-lit.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any
   script) and checks: the title screen offers only Lit and Film; its mode screen lists the genres (js/lit.js);
   a genre opens its movie screen with a card for every movie, its basics and All; a movie card picks the movie's
   game (SolModes.only) and its questions (an episode strand), plays that game on every level and keeps its own
   level; a genre's basics and All play the genre's games in turn; every movie and basics episode has questions
   and the strands serve only their own packs; and no other game sees the Lit and Film packs or modes.
   Then, when the builds exist (node tools/build-games.js), dist/lit opens on Lit and Film with its own saves and
   dist/va has no Lit and Film files. Prints ALL OK or the number FAILED. */
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
var LIT = require(path.join(repo, "js", "lit.js"));

(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var errors = [], fails = [];
  function watch(page, tag) {
    page.on("response", function (r) { if (r.status() === 404) errors.push(tag + " 404 " + r.url()); });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|status of 404/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  /* ── the pools, straight from the pack engine ── */
  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png") }); }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);

  var pools = await page.evaluate(function () {
    var o = { eps: {}, genres: {}, stray: 0, leak: 0 };
    SolLit.GENRES.forEach(function (g) {
      var eps = g.movies.map(function (m) { return m.ep; }).concat(g.basics ? [g.basics] : []);
      eps.forEach(function (ep) {
        var pk = heistBuildPack("LIT", ep.toUpperCase());
        o.eps[ep] = pk.claims.length;
        pk.claims.forEach(function (c) { if (c.episode !== ep) o.stray++; });
      });
      var all = heistBuildPack("LIT", "G:" + g.id);
      o.genres[g.id] = all.claims.length;
      all.claims.forEach(function (c) { if (c.genre !== g.id) o.stray++; });
    });
    o.lit = heistBuildPack("LIT", "ALL").claims.length;
    return o;
  }).catch(function (e) { return { err: String(e) }; });
  /* the other games' pools never hold a Lit and Film question (checked outside the page: the LIT build prunes the other
     games' packs at start-up, so there a Virginia pool falls back to whatever is left) */
  pools.leak = (function () {
    var vm = require("vm"), sb = { console: console }; sb.window = sb; sb.global = sb;
    fs.readdirSync(path.join(repo, "js")).filter(function (f) { return /^content\d*\.js$/.test(f); })
      .sort(function (a, b) { return (parseInt(a.slice(7), 10) || 0) - (parseInt(b.slice(7), 10) || 0); })
      .forEach(function (f) { vm.runInNewContext(fs.readFileSync(path.join(repo, "js", f), "utf8"), sb, { filename: f }); });
    vm.runInNewContext(fs.readFileSync(path.join(repo, "js", "lit.js"), "utf8"), sb);
    var n = 0;
    ["G9", "G10", "G11", "NJ5", "ODY"].forEach(function (f) { sb.heistBuildPack(f, "ALL").claims.forEach(function (c) { if (c.family === "LIT") n++; }); });
    return n;
  })();
  var thin = Object.keys(pools.eps || {}).filter(function (e) { return !(pools.eps[e] >= 20); });
  check(pools.lit > 0 && !thin.length && pools.stray === 0 && pools.leak === 0,
    "every movie and basics episode has at least 20 questions of its own, a genre's All serves only its genre, and no other game sees them: " + JSON.stringify(pools));

  /* ── the screens ── */
  var title = await page.evaluate(function () {
    return Array.prototype.filter.call(document.querySelectorAll("#title-screen .card[data-family]"), function (c) { return !c.classList.contains("hidden"); }).map(function (c) { return c.getAttribute("data-family"); });
  });
  check(title.join() === "LIT", "the title screen offers only Lit and Film: " + title.join());
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  var genres = await page.evaluate(function () {
    return { title: document.getElementById("mode-title").textContent, cards: Array.prototype.map.call(document.querySelectorAll("#mode-packs .card"), function (c) { return c.getAttribute("data-genre"); }) };
  });
  check(genres.title === "Pick a genre" && genres.cards.join() === LIT.GENRES.map(function (g) { return g.id; }).join(), "the mode screen lists the genres: " + JSON.stringify(genres));
  await shot("lit-01-genres");

  for (var gi = 0; gi < LIT.GENRES.length; gi++) {
    var g = LIT.GENRES[gi];
    await page.click('#mode-packs .card[data-genre="' + g.id + '"]');
    await page.waitForSelector("#skill-screen:not(.hidden)");
    var movies = await page.evaluate(function () {
      return { title: document.getElementById("skill-title").textContent, cards: Array.prototype.map.call(document.querySelectorAll("#skill-packs .card"), function (c) { return c.getAttribute("data-gamemode") + "/" + c.getAttribute("data-strand"); }) };
    });
    var want = g.movies.map(function (m) { return m.mode + "/" + m.ep.toUpperCase(); });
    if (g.basics) want.push(LIT.mixId(g.id) + "/" + g.basics.toUpperCase());
    if (g.movies.length > 1 || g.basics) want.push(LIT.mixId(g.id) + "/G:" + g.id);
    check(movies.title === "Pick a movie" && movies.cards.join() === want.join(), g.name + ": the movie screen lists its movies, basics and All: " + movies.cards.join());
    if (gi === 3) await shot("lit-02-movies-noir");
    /* each movie card picks its game and its questions, and plays that game on every level */
    for (var mi = 0; mi < g.movies.length; mi++) {
      var m = g.movies[mi];
      await page.click('#skill-packs .card[data-gamemode="' + m.mode + '"]');
      var picked = await page.evaluate(function (id) {
        var out = { only: SolModes.only, strand: document.querySelector("#skill-packs .card.selected").getAttribute("data-strand"), saved: localStorage.getItem("afterHours.v1.gameMode") };
        out.loaded = !!SolModes.MODES[id];
        out.levels = [1, 9, 10, 55, 100].map(function (n) { var x = SolModes.modeFor(n); return x ? x.id : "maze"; }).join();
        return out;
      }, m.mode);
      var lv = picked.loaded ? [1, 9, 10, 55, 100].map(function () { return m.mode; }).join() : "maze,maze,maze,maze,maze";
      check(picked.only === m.mode && picked.strand === m.ep.toUpperCase() && picked.saved === m.mode && picked.levels === lv,
        m.title + ": the card picks " + m.game + (picked.loaded ? " on every level" : " (not built yet: the maze)") + " and its own questions: " + JSON.stringify(picked));
    }
    /* All plays the genre's (loaded) games in turn (a genre of one movie and no basics has no All) */
    if (g.movies.length > 1 || g.basics) {
    var mix = await page.evaluate(function (gid) {
      var c = document.querySelector('#skill-packs .card[data-strand="G:' + gid + '"]');
      c.click();
      var ids = SolLit.mixModes(gid, SolModes.MODES), seq = [];
      for (var n = 1; n <= 8; n++) { var x = SolModes.modeFor(n); seq.push(x ? x.id : "maze"); }
      return { only: SolModes.only, ids: ids, seq: seq };
    }, g.id);
    var okMix = mix.only === LIT.mixId(g.id) && (mix.ids.length ? mix.seq.every(function (id, i) { return id === mix.ids[i % mix.ids.length]; }) : mix.seq.every(function (id) { return id === "maze"; }));
    check(okMix, g.name + ": All plays the genre's games in turn: " + JSON.stringify(mix));
    }
    await page.waitForTimeout(500);   /* a button ignores a second tap within 450 ms (bindTap) */
    await page.click("#btn-skill-back");
    await page.waitForSelector("#mode-screen:not(.hidden)");
  }

  /* each movie keeps its own level */
  var lv2 = await page.evaluate(function () {
    localStorage.setItem("afterHours.v1.night.highway", "7");
    localStorage.setItem("afterHours.v1.night.noon", "3");
    return true;
  });
  await page.click('#mode-packs .card[data-genre="NOIR"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  await page.click('#skill-packs .card[data-gamemode="highway"]');
  var lineNoir = await page.textContent("#skill-save-line");
  await page.waitForTimeout(500);
  await page.click("#btn-skill-back");
  await page.click('#mode-packs .card[data-genre="WESTERN"]');
  await page.click('#skill-packs .card[data-gamemode="noon"]');
  var lineWest = await page.textContent("#skill-save-line");
  check(lv2 && /Level 7/.test(lineNoir) && /Level 3/.test(lineWest), "each movie keeps its own level: " + lineNoir + " | " + lineWest);

  /* a level starts with the movie's questions */
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  /* the tutorial's Play button animates in: press it from the page rather than waiting for it to hold still */
  for (var ti = 0; ti < 20; ti++) { if (await page.isVisible("#tut-skip")) { await page.evaluate(function () { document.getElementById("tut-skip").click(); }); break; } await page.waitForTimeout(250); }
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 20000 }).catch(function () {});
  var play = await page.evaluate(function () { var s = window.SolScene; return s && s.claim ? { fam: s.family, strand: s.strand, ep: s.claim.episode, mode: s.mode ? s.mode.id : "maze" } : null; });
  check(play && play.fam === "LIT" && play.strand === "HIGHNOON" && play.ep === "highnoon", "Start plays High Noon's questions: " + JSON.stringify(play));
  await shot("lit-03-play");

  /* the other games never offer the Lit and Film modes */
  var other = await page.evaluate(function () {
    window.SOL_STATE = "VA";
    var o = SolModes.MODES, ids = Object.keys(o).filter(function (k) { return SolLit.movieByMode(k); });
    SolModes.only = null;
    var seen = []; for (var n = 1; n <= 100; n++) { var x = SolModes.modeFor(n); if (x && ids.indexOf(x.id) !== -1) seen.push(n); }
    window.SOL_STATE = "LIT";
    return seen.length;
  });
  check(other === 0, "the Virginia rotation never plays a Lit and Film game");

  /* ── the builds, when they exist ── */
  if (fs.existsSync(path.join(repo, "dist", "lit", "index.html"))) {
    root = path.join(repo, "dist");
    var p2 = await (await browser.newContext({ viewport: { width: 1366, height: 768 } })).newPage();
    watch(p2, "dist/lit");
    await p2.goto(base + "lit/index.html", { waitUntil: "load" });
    await p2.waitForTimeout(900);
    var d = await p2.evaluate(function () {
      return { state: window.SOL_STATE, title: document.title, titleVisible: !document.getElementById("title-screen").classList.contains("hidden"),
        cards: Array.prototype.filter.call(document.querySelectorAll("#title-screen .card[data-family]"), function (c) { return !c.classList.contains("hidden"); }).map(function (c) { return c.getAttribute("data-family"); }).join() };
    });
    check(d.state === "LIT" && d.titleVisible && d.cards === "LIT" && /Lit and Film/.test(d.title), "dist/lit opens on the Lit and Film title screen: " + JSON.stringify(d));
    var keys = fs.readFileSync(path.join(repo, "dist", "lit", "js", "game.js"), "utf8");
    check(keys.indexOf("afterHours.v1.") === -1 && keys.indexOf("afterHours.lit.") !== -1, "dist/lit keeps its own saves (afterHours.lit.*)");
    var va = fs.readdirSync(path.join(repo, "dist", "va", "js"));
    check(va.indexOf("lit.js") === -1 && !va.some(function (f) { return /^mode-(crank|noon|tape)\.js$/.test(f); }) && va.indexOf("content117.js") === -1, "dist/va has no Lit and Film files");
    root = repo;
  } else console.log("(no dist/lit — run node tools/build-games.js to check the build)");

  errors.forEach(function (e) { console.log("ERR  " + e); });
  check(!errors.length, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
