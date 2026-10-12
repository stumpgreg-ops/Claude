/* Headless test of the accommodations (js/accommodations.js, v5.18) in the built Odyssey game (dist/ody) and
   the Virginia game (dist/va): node tools/build-games.js, then node tools/smoke-acc.js.
   It proves: typing "accommodations" in the nickname box opens the teacher panel behind a PIN (a wrong PIN is refused);
   the options save for this browser and show on the title screen; in a level the passage's difficult words are
   underlined and a click shows the definition, a click on a question or answer word shows it in the chosen language
   (Arabic right to left), the word a vocabulary question asks about is never defined or translated; read aloud reads
   the passage sentence by sentence (highlighted), the question and an answer; larger text; the slower game runs the
   scene at 75 %; an end date in the past switches an option off; "Turn all off" clears everything; and the Virginia
   game (no word lists yet) offers read aloud, larger text and a slower game but not the word options. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var repo = path.join(__dirname, ".."), shots = path.join(__dirname, "shots"), root = path.join(repo, "dist", "ody");
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
  var page = await browser.newPage({ viewport: { width: 1366, height: 768 } }), errors = [];
  page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
  page.on("dialog", function (d) { d.dismiss().catch(function () {}); });
  /* speech: record what would be said and finish each utterance at once (headless Chromium has no voices) */
  await page.addInitScript(function () {
    window.__said = [];
    try {
      Object.defineProperty(window, "speechSynthesis", { configurable: true, value: {
        speak: function (u) { window.__said.push(u.text); setTimeout(function () { if (u.onend) u.onend(); }, 30); },
        cancel: function () {}, getVoices: function () { return []; }, onvoiceschanged: null } });
    } catch (e) {}
  });
  var fails = [];
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  async function shot(n) { await page.screenshot({ path: path.join(shots, "acc-" + n + ".png") }); }

  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.evaluate(function () { localStorage.clear(); });
  await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(800);

  /* ── the teacher's panel ── */
  var p0 = await page.evaluate(function () { return { acc: !!window.SolAcc, data: !!window.SOL_ACC_DATA, note: !!document.getElementById("acc-note"), open: !!document.querySelector("#acc-overlay:not(.hidden)") }; });
  check(p0.acc && p0.data && !p0.note && !p0.open, "the Odyssey game loads the accommodations and its word lists, all off and out of sight: " + JSON.stringify(p0));
  await page.fill("#join-nick", "accommodations");
  await page.waitForSelector("#acc-overlay:not(.hidden) #acc-pin", { timeout: 5000 }).catch(function () {});
  var nickCleared = await page.evaluate(function () { return document.getElementById("join-nick").value === ""; });
  await page.fill("#acc-pin", "1111"); await page.click("#acc-pin-go");
  var wrong = await page.evaluate(function () { return { msg: document.getElementById("acc-msg").textContent, form: !!document.getElementById("acc-save") }; });
  await page.fill("#acc-pin", "4826"); await page.click("#acc-pin-go");
  var formUp = await page.evaluate(function () { return ["define", "dict", "audio", "big", "slow"].map(function (id) { var c = document.getElementById("acc-" + id); return c && !c.disabled ? 1 : 0; }).join(""); });
  check(nickCleared && /not right/.test(wrong.msg) && !wrong.form && formUp === "11111", "\"accommodations\" in the nickname box opens the panel behind the teacher PIN; a wrong PIN is refused; the right one shows all five options: " + JSON.stringify({ nickCleared: nickCleared, wrong: wrong, formUp: formUp }));
  for (var id of ["define", "dict", "audio", "big", "slow"]) await page.check("#acc-" + id);
  await page.selectOption("#acc-lang", "ar"); await page.selectOption("#acc-pct", "75");
  await shot("01-panel");
  await page.click("#acc-save");
  var saved = await page.evaluate(function () { return { msg: document.getElementById("acc-msg").textContent, on: ["define", "dict", "audio", "big", "slow"].map(function (k) { return SolAcc.on(k) ? 1 : 0; }).join(""), lang: SolAcc.lang(), k: SolAcc.speedK(), store: Object.keys(localStorage).some(function (k) { return /^afterHours\.(v1|ody)\.acc\.ODY$/.test(k); }) }; });
  await page.click("#acc-close");
  var noteTxt = await page.evaluate(function () { var n = document.getElementById("acc-note"); return n ? n.textContent : ""; });
  check(saved.on === "11111" && saved.lang === "ar" && saved.k === 0.75 && saved.store && /Saved/.test(saved.msg) && /dictionary \(العربية\)/.test(noteTxt) && /75%/.test(noteTxt),
    "Save keeps the options for this browser and the title screen says what is on: " + JSON.stringify({ saved: saved, note: noteTxt }));

  /* ── in a level ── */
  await page.click('#title-screen .card[data-family="ODY"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-gamemode="maze"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  await page.click("#btn-skill-start"); await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForTimeout(2500);
  if (await page.isVisible("#tut-skip")) await page.click("#tut-skip");
  await page.waitForFunction(function () { var s = window.SolScene; return s && s.claim && s.readOpen; }, null, { timeout: 20000 }).catch(function () {});
  await page.waitForTimeout(300);
  var card = await page.evaluate(function () {
    var q = function (s) { return document.querySelectorAll(s).length; };
    return { def: q("#read-passage .acc-def"), sent: q("#read-passage .acc-s"), qaw: q("#read-choices .acc-w") + q("#read-stem .acc-w"), say: q("#read-choices .acc-say") + q("#read-stem .acc-say"), bar: q("#read-scroll .acc-bar .acc-say-pass"), big: document.body.classList.contains("acc-big"),
      hudDef: q("#eoc-passage .acc-def"), hudQa: q("#eoc-choices .acc-w") };
  });
  check(card.def > 0 && card.sent >= 3 && card.qaw > 5 && card.say >= 5 && card.bar === 1 && card.big && card.hudDef > 0 && card.hudQa > 5,
    "the reading pop-up and the side panel mark the passage's difficult words and every question and answer word, with read-aloud buttons and larger text: " + JSON.stringify(card));
  /* a passage word: its definition */
  var defPop = await page.evaluate(function () {
    var sp = document.querySelector("#read-passage .acc-def"); sp.click();
    var p = document.getElementById("acc-pop");
    return { w: sp.getAttribute("data-w"), shown: p && p.style.display === "block", def: (p.querySelector(".acc-pop-def") || {}).textContent || "", tr: !!p.querySelector(".acc-pop-tr") };
  });
  check(defPop.shown && defPop.def.length > 5 && !defPop.tr, "clicking an underlined passage word shows its definition (no translation in the passage): " + JSON.stringify(defPop));
  /* an answer word: its translation, right to left */
  var trPop = await page.evaluate(function () {
    var sp = Array.prototype.filter.call(document.querySelectorAll("#read-choices .acc-w"), function (x) { var w = x.getAttribute("data-w"); return SOL_ACC_DATA.tr[w] && SOL_ACC_DATA.tr[w].ar !== "—"; })[0]; sp.click();
    var p = document.getElementById("acc-pop"), t = p.querySelector(".acc-pop-tr");
    return { w: sp.getAttribute("data-w"), shown: p.style.display === "block", tr: t ? t.textContent : "", dir: t ? t.getAttribute("dir") : "", want: SOL_ACC_DATA.tr[sp.getAttribute("data-w")].ar };
  });
  await shot("02-word");
  check(trPop.shown && trPop.dir === "rtl" && trPop.tr.indexOf(trPop.want) !== -1, "clicking a word in an answer shows it in Arabic, right to left: " + JSON.stringify(trPop));
  /* read aloud: the passage sentence by sentence, then the question, then an answer */
  var said = await page.evaluate(async function () {
    var w = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
    window.__said = [];
    var n = document.querySelectorAll("#read-passage .acc-s").length, hl = 0;
    document.querySelector("#read-scroll .acc-say-pass").click();
    for (var i = 0; i < 60 && window.__said.length < n; i++) { if (document.querySelector("#read-passage .acc-s.acc-reading")) hl++; await w(15); }
    var pass = window.__said.length;
    document.querySelector("#read-stem .acc-say").click(); await w(80);
    document.querySelector("#read-choices li .acc-say").click(); await w(80);
    return { n: n, pass: pass, hl: hl, stem: window.__said[pass] || "", ans: window.__said[pass + 1] || "", first: window.__said[0] || "" };
  });
  check(said.pass === said.n && said.hl > 0 && /^A\. /.test(said.ans) && said.stem.length > 10 && !/🔊/.test(said.stem + said.ans) && !/^\(1\)/.test(said.first),
    "read aloud reads the passage a sentence at a time (highlighted), the question and an answer (\"A. …\"), without the sentence numbers or button labels: " + JSON.stringify(said));
  /* a vocabulary question: the word it asks about is not defined or translated */
  var rv = await page.evaluate(function () {
    var s = SolScene, keep = s.claim;
    s.claim = { sol: "9.RV.1.B", stem: "As it is used in sentence 3, an epithet is —", passage: "<p>Poets use epithets. An epithet names a hero. The epithet is short.</p>", choices: [{ letter: "A", text: "a describing phrase" }, { letter: "B", text: "a song" }] };
    var b = SolAcc.blocked();
    var stem = document.getElementById("eoc-stem"); stem.textContent = s.claim.stem;
    return new Promise(function (r) { setTimeout(function () {
      var o = { blocked: b, marked: Array.prototype.map.call(stem.querySelectorAll(".acc-w"), function (x) { return x.getAttribute("data-w"); }) };
      s.claim = keep; SolAcc.blocked(); r(o);
    }, 120); });
  });
  check(rv.blocked.indexOf("epithet") !== -1 && rv.marked.indexOf("epithet") === -1 && rv.marked.indexOf("sentence") !== -1,
    "on a vocabulary question the word it asks about is neither defined nor translated (the rest of the question still is): " + JSON.stringify(rv));
  /* the slower game */
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForTimeout(600);
  var slow = await page.evaluate(function () { var s = SolScene; return { k: s._accK, time: s.time.timeScale, phys: s.physics && s.physics.world ? s.physics.world.timeScale : null }; });
  check(slow.k === 0.75 && slow.time === 0.75 && Math.abs(slow.phys - 1 / 0.75) < 1e-6, "the slower game runs the level at 75 %: " + JSON.stringify(slow));
  await shot("03-play");
  /* an end date in the past switches an option off; "Turn all off" clears everything */
  var exp = await page.evaluate(function () {
    var st = SolAcc.settings(); st.big.until = "2020-01-01"; SolAcc.set(st);
    var o = { big: SolAcc.on("big"), cls: document.body.classList.contains("acc-big"), dict: SolAcc.on("dict") };
    SolAcc.open(); return o;
  });
  await page.fill("#acc-pin", "4826"); await page.click("#acc-pin-go"); await page.click("#acc-off");
  var off = await page.evaluate(function () {
    return new Promise(function (r) { setTimeout(function () {
      r({ any: ["define", "dict", "audio", "big", "slow"].some(function (k) { return SolAcc.on(k); }), words: document.querySelectorAll("#app .acc-w, #app .acc-say, #read-overlay .acc-w, #read-overlay .acc-say").length, k: SolAcc.speedK(), sceneK: SolScene._accK });
    }, 300); });
  });
  await page.click("#acc-close");
  check(!exp.big && !exp.cls && exp.dict && !off.any && off.words === 0 && off.k === 1, "an end date in the past switches that option off; \"Turn all off\" clears every option and every mark: " + JSON.stringify({ exp: exp, off: off }));
  console.log("errors (dist/ody):", errors.length ? errors : "none");
  check(errors.length === 0, "dist/ody: no page errors");

  /* ── the Virginia game: no word lists yet ── */
  root = path.join(repo, "dist", "va");
  if (fs.existsSync(path.join(root, "index.html"))) {
    await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(600);
    var va = await page.evaluate(function () { return { acc: !!window.SolAcc, data: !!window.SOL_ACC_DATA }; });
    await page.fill("#join-nick", "accommodations");
    await page.waitForSelector("#acc-overlay:not(.hidden) #acc-pin", { timeout: 5000 }).catch(function () {});
    await page.fill("#acc-pin", "4826"); await page.click("#acc-pin-go");
    va.opts = await page.evaluate(function () { return ["define", "dict", "audio", "big", "slow"].map(function (id) { var c = document.getElementById("acc-" + id); return c && !c.disabled ? 1 : 0; }).join(""); });
    check(va.acc && !va.data && va.opts === "00111", "the Virginia game offers read aloud, larger text and a slower game, not the word options (no word lists yet): " + JSON.stringify(va));
  }
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
