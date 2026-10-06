/* SOL Labyrinth: the progress record and "My progress code" (v5.13).
   A game uploaded to Canvas can't send anything anywhere, so a student's progress is kept on the Chromebook and
   shown to the teacher as a PROGRESS CODE (js/progress-code.js): the student pastes it into a Canvas assignment and
   the teacher reads every code at once on the teacher page (tools/build-teacher.js).

   THE RECORD lives in one place, localStorage "afterHours.v1.progress.<STATE>" (the Odyssey build's copy of this
   file says "afterHours.ody." — tools/build-games.js moves every save key), so a later version can also send it
   somewhere (a Google Sheet). It holds: first and last day played, the days played, active play time, levels
   started / won / lost, the highest level reached and won, questions answered, right on the first try and wrong
   picks, each skill's (each episode's, in the Odyssey) answered / right on the first try, each game mode's levels
   played / won, and the last 30 level results.

   ACTIVE TIME counts only while a level is running and on screen: the tab visible, no card open that pauses the
   game (reading, how-to, field guide, help), not after the level ends, and never more than IDLE_MS after the last
   key press, tap or mouse move (a student who walks away stops the clock).

   js/game.js reports what happens (SolProgress.levelStart / answer / levelEnd, all in try/catch) and tells this file
   which game is open, the nickname and whether play is active (SolProgress.hook). Nothing here can stop the game:
   every storage call is in try/catch, and an old save without a record starts a fresh one. */
(function () {
  "use strict";
  var C = window.SolProgressCode;
  var KEY = "afterHours.v1.progress.";
  var NICK_KEY = "afterHours.v1.nick";
  var LOG_MAX = 30, DAYS_MAX = 400, IDLE_MS = 90000, TICK_MS = 1000, FLUSH_MS = 15000;
  var hooks = { state: null, nick: null, active: null };
  var cache = { st: null, rec: null };
  var cur = null;            /* the level being played: { st, night, mode, a, r, w, ms, ended } */
  var pendingMs = 0, lastTick = Date.now(), lastFlush = Date.now(), lastInput = Date.now();

  function num(v) { v = Math.floor(Number(v)); return isFinite(v) && v > 0 ? v : 0; }
  function today() {
    var d = new Date();
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }
  function blank() {
    return { v: 1, first: null, last: null, days: [], dayCount: 0, activeMs: 0,
      levels: { started: 0, won: 0, lost: 0 }, hiReached: 0, hiWon: 0,
      q: { answered: 0, right: 0, wrong: 0 }, skills: {}, modes: {}, log: [] };
  }
  /* an old or damaged save: keep what is usable, fill in the rest */
  function tidy(x) {
    var r = blank();
    if (!x || typeof x !== "object") return r;
    var ymd = /^\d{4}-\d{2}-\d{2}$/;
    r.first = ymd.test(x.first) ? x.first : null;
    r.last = ymd.test(x.last) ? x.last : r.first;
    r.days = Array.isArray(x.days) ? x.days.filter(function (d) { return ymd.test(d); }).slice(-DAYS_MAX) : [];
    r.dayCount = Math.max(num(x.dayCount), r.days.length);
    r.activeMs = num(x.activeMs);
    if (x.levels) { r.levels.started = num(x.levels.started); r.levels.won = num(x.levels.won); r.levels.lost = num(x.levels.lost); }
    r.hiReached = Math.min(100, num(x.hiReached)); r.hiWon = Math.min(r.hiReached, num(x.hiWon));
    if (x.q) { r.q.answered = num(x.q.answered); r.q.right = Math.min(r.q.answered, num(x.q.right)); r.q.wrong = num(x.q.wrong); }
    if (x.skills && typeof x.skills === "object") Object.keys(x.skills).forEach(function (k) {
      var s = x.skills[k]; if (s && /^[A-Z]{1,10}$/.test(k)) r.skills[k] = { a: num(s.a), r: Math.min(num(s.a), num(s.r)) };
    });
    if (x.modes && typeof x.modes === "object") Object.keys(x.modes).forEach(function (k) {
      var m = x.modes[k]; if (m && /^[a-z]{1,12}$/.test(k)) r.modes[k] = { played: num(m.played), won: Math.min(num(m.played), num(m.won)) };
    });
    if (Array.isArray(x.log)) r.log = x.log.filter(function (e) { return e && typeof e === "object"; }).slice(-LOG_MAX);
    return r;
  }
  function stateNow() {
    var st = null;
    try { st = hooks.state && hooks.state(); } catch (e) {}
    st = st || window.SOL_STATE || "VA";
    return C && C.BUILDS[st] ? st : "VA";
  }
  function load(st) {
    if (cache.st === st && cache.rec) return cache.rec;
    var rec = null;
    try { rec = JSON.parse(localStorage.getItem(KEY + st) || "null"); } catch (e) { rec = null; }
    cache.st = st; cache.rec = tidy(rec);
    return cache.rec;
  }
  function save(st, rec) {
    try { localStorage.setItem(KEY + st, JSON.stringify(rec)); } catch (e) {}
  }
  function touchDay(rec) {
    var d = today();
    if (!rec.first || d < rec.first) rec.first = d;
    if (!rec.last || d > rec.last) rec.last = d;
    if (rec.days.indexOf(d) === -1) {
      rec.days.push(d);
      if (rec.days.length > DAYS_MAX) rec.days.shift();
      rec.dayCount++;
    }
  }
  function stateOfFamily(f) { return f === "NJ5" ? "NJ" : f === "ODY" ? "ODY" : f ? "VA" : null; }
  function skillOf(claim) {
    if (!claim) return null;
    if (claim.episode) return String(claim.episode).toUpperCase();
    var s = claim.strand || (window.heistStrandOf ? window.heistStrandOf(claim) : null);
    return s ? String(s).toUpperCase() : null;
  }

  /* ── the clock: active play time ── */
  function flush() {
    if (!pendingMs || !cur) { pendingMs = 0; return; }
    var rec = load(cur.st);
    rec.activeMs += Math.round(pendingMs);
    pendingMs = 0;
    lastFlush = Date.now();
    save(cur.st, rec);
  }
  function tick() {
    var now = Date.now(), dt = now - lastTick;
    lastTick = now;
    if (!cur || cur.ended) return;
    if (!(dt > 0)) return;
    if (dt > TICK_MS * 2) dt = TICK_MS * 2;          /* a throttled or sleeping tab doesn't count its gap */
    var on = false;
    try { on = !document.hidden && !!(hooks.active && hooks.active()); } catch (e) { on = false; }
    if (on && now - lastInput <= IDLE_MS) { pendingMs += dt; cur.ms += dt; }
    if (now - lastFlush >= FLUSH_MS) flush();
  }
  function onInput() { lastInput = Date.now(); }
  try {
    ["keydown", "pointerdown", "pointermove", "touchstart", "wheel", "mousedown"].forEach(function (t) {
      window.addEventListener(t, onInput, { capture: true, passive: true });
    });
    document.addEventListener("visibilitychange", function () { if (document.hidden) flush(); });
    window.addEventListener("pagehide", flush);
    setInterval(tick, TICK_MS);
  } catch (eT) {}

  /* ── what the game reports ── */
  function logLevel(rec, c, result) {
    rec.log.push({ d: today(), n: c.night, m: c.mode, a: c.a, r: c.r, w: c.w, min: Math.round(c.ms / 6000) / 10, res: result });
    if (rec.log.length > LOG_MAX) rec.log.splice(0, rec.log.length - LOG_MAX);
  }
  function levelStart(info) {
    try {
      if (cur && !cur.ended) {                       /* the last level was left without a win or a loss */
        flush();
        var old = load(cur.st);
        logLevel(old, cur, "left");
        save(cur.st, old);
        cur.ended = true;
      }
      var st = stateOfFamily(info && info.family) || stateNow();
      var night = Math.max(1, Math.min(100, num(info && info.night) || 1));
      var mode = String((info && info.mode) || "maze").toLowerCase().replace(/[^a-z]/g, "").slice(0, 12) || "maze";
      var rec = load(st);
      rec.levels.started++;
      if (night > rec.hiReached) rec.hiReached = night;
      var m = rec.modes[mode] || (rec.modes[mode] = { played: 0, won: 0 });
      m.played++;
      touchDay(rec);
      save(st, rec);
      cur = { st: st, night: night, mode: mode, a: 0, r: 0, w: 0, ms: 0, ended: false };
      lastTick = Date.now(); lastInput = Date.now();
    } catch (e) {}
  }
  /* kind: "wrong" (a wrong letter picked), "clean" (answered, no wrong pick first) or "struggled" (answered after one) */
  function answer(kind, claim) {
    try {
      var st = cur ? cur.st : stateNow(), rec = load(st), sk = skillOf(claim);
      if (kind === "wrong") {
        rec.q.wrong++;
        if (cur) cur.w++;
      } else {
        rec.q.answered++;
        if (kind === "clean") rec.q.right++;
        if (sk) {
          var s = rec.skills[sk] || (rec.skills[sk] = { a: 0, r: 0 });
          s.a++; if (kind === "clean") s.r++;
        }
        if (cur) { cur.a++; if (kind === "clean") cur.r++; }
      }
      touchDay(rec);
      save(st, rec);
    } catch (e) {}
  }
  function levelEnd(win) {
    try {
      if (!cur || cur.ended) return;
      flush();
      var rec = load(cur.st);
      cur.ended = true;
      if (win) {
        rec.levels.won++;
        if (cur.night > rec.hiWon) rec.hiWon = cur.night;
        if (rec.modes[cur.mode]) rec.modes[cur.mode].won++;
      } else rec.levels.lost++;
      logLevel(rec, cur, win ? "won" : "lost");
      touchDay(rec);
      save(cur.st, rec);
    } catch (e) {}
  }

  /* ── the code ── */
  function nickNow() {
    var n = "";
    try { n = hooks.nick && hooks.nick(); } catch (e) {}
    if (!n) { try { var el = document.getElementById("join-nick"); n = el && el.value; } catch (e2) {} }
    if (!n) { try { n = localStorage.getItem(NICK_KEY) || ""; } catch (e3) {} }
    return C ? C.cleanNick(n) : "";
  }
  function versionNow() {
    var el = document.querySelector("#title-screen .ver") || document.querySelector(".ver");
    return el ? el.textContent : "0.0.0";
  }
  function summary(st) {
    var rec = load(st);
    return {
      first: rec.first, last: rec.last, days: rec.dayCount, minutes: Math.round(rec.activeMs / 60000),
      started: rec.levels.started, won: rec.levels.won, lost: rec.levels.lost, hiReached: rec.hiReached, hiWon: rec.hiWon,
      answered: rec.q.answered, right: rec.q.right, wrong: rec.q.wrong,
      modes: Object.keys(rec.modes).filter(function (k) { return rec.modes[k].played > 0; }).length,
      skills: rec.skills
    };
  }
  function makeCode(st) {
    st = st || stateNow();
    flush();
    return C.encode(st, summary(st), { nick: nickNow(), version: versionNow() });
  }

  /* ── the "My progress code" window ── */
  var STYLE = [
    "#progress-overlay{position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;background:rgba(8,10,14,.72);padding:12px;overflow:auto}",
    "#progress-overlay.hidden{display:none!important}",
    "#progress-overlay .tut-card{max-width:560px;width:min(560px,96%);user-select:text;-webkit-user-select:text}",
    "#progress-overlay h2{margin:0 0 10px;font-size:26px}",
    ".prog-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:0 0 14px;padding:0;list-style:none}",
    ".prog-stats li{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:8px 10px;text-align:center}",
    ".prog-stats b{display:block;font-size:24px;color:var(--gold)}",
    ".prog-stats span{font-size:13px;color:var(--dim)}",
    ".prog-code{font:700 22px/1.45 Consolas,'Courier New',monospace;letter-spacing:.04em;background:#fffbea;color:#1a1408;border:2px solid var(--gold);border-radius:10px;padding:10px 12px;word-break:normal;overflow-wrap:anywhere;user-select:all;-webkit-user-select:all;cursor:text}",
    ".prog-copied{margin:8px 0 0;color:var(--gold);font-weight:700}",
    ".prog-copied:empty{display:none}",
    ".prog-how{margin:0 0 8px;font-size:17px;line-height:1.4}",
    ".prog-note{margin:6px 0 0;color:var(--dim);font-size:13px;line-height:1.4}",
    "#progress-overlay .row{justify-content:flex-start;margin-top:12px}",
    "#progress-overlay textarea{position:absolute;left:-9999px;top:0;width:10px;height:10px;opacity:0}"
  ].join("\n");
  var ov = null;
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function stat(n, label) { var li = el("li"); li.appendChild(el("b", null, String(n))); li.appendChild(el("span", null, label)); return li; }
  function build() {
    if (ov) return ov;
    var css = el("style"); css.textContent = STYLE; document.head.appendChild(css);
    ov = el("div", "hidden"); ov.id = "progress-overlay";
    ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); ov.setAttribute("aria-label", "My progress code");
    var card = el("div", "tut-card"); ov.appendChild(card);
    card.appendChild(el("p", "tut-kicker", "My progress code"));
    card.appendChild(el("h2", "prog-title", "Your progress"));
    var stats = el("ul", "prog-stats"); card.appendChild(stats);
    card.appendChild(el("p", "prog-how"));
    var code = el("div", "prog-code"); code.setAttribute("tabindex", "0"); card.appendChild(code);
    var row = el("div", "row"); card.appendChild(row);
    var copy = el("button", "btn primary", "Copy code"); copy.type = "button"; row.appendChild(copy);
    var close = el("button", "btn", "Close"); close.type = "button"; row.appendChild(close);
    var copied = el("p", "prog-copied"); copied.setAttribute("aria-live", "polite"); card.appendChild(copied);
    card.appendChild(el("p", "prog-note"));
    copy.addEventListener("click", function (e) { e.stopPropagation(); copyCode(); });
    close.addEventListener("click", function (e) { e.stopPropagation(); hide(); });
    ov.addEventListener("click", function (e) { if (e.target === ov) hide(); });
    ov.addEventListener("keydown", function (e) { e.stopPropagation(); if (e.key === "Escape") hide(); }, true);
    ov.addEventListener("pointerup", function (e) { e.stopPropagation(); });
    (document.getElementById("app") || document.body).appendChild(ov);
    return ov;
  }
  function selectCode() {
    var c = ov.querySelector(".prog-code"), r = document.createRange(), s = window.getSelection();
    r.selectNodeContents(c); s.removeAllRanges(); s.addRange(r);
  }
  function copyCode() {
    var text = ov.querySelector(".prog-code").textContent, msg = ov.querySelector(".prog-copied");
    function fallback() {
      var ok = false;
      try {
        var ta = el("textarea"); ta.value = text; ov.appendChild(ta); ta.select();
        ok = document.execCommand && document.execCommand("copy");
        ov.removeChild(ta);
      } catch (e) { ok = false; }
      selectCode();
      msg.textContent = ok ? "Copied! Now paste it into the assignment (Ctrl+V)." : "The code is selected: press Ctrl+C to copy it, then paste it into the assignment (Ctrl+V).";
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          selectCode();
          msg.textContent = "Copied! Now paste it into the assignment (Ctrl+V).";
        }, fallback);
        return;
      }
    } catch (e) {}
    fallback();
  }
  function show(st) {
    if (!C) return;
    st = st || stateNow();
    build();
    var B = C.BUILDS[st], s = summary(st), code = makeCode(st), nick = nickNow();
    var stats = ov.querySelector(".prog-stats");
    stats.innerHTML = "";
    var pct = s.answered ? Math.round(100 * s.right / s.answered) : 0;
    stats.appendChild(stat(s.won, s.won === 1 ? "level won" : "levels won"));
    stats.appendChild(stat(s.hiReached || "–", "highest level"));
    stats.appendChild(stat(s.answered, s.answered === 1 ? "question answered" : "questions answered"));
    stats.appendChild(stat(s.answered ? pct + "%" : "–", "right on the first try"));
    stats.appendChild(stat(s.minutes, s.minutes === 1 ? "minute played" : "minutes played"));
    stats.appendChild(stat(s.days, s.days === 1 ? "day played" : "days played"));
    ov.querySelector(".prog-title").textContent = s.started ? "Your progress in " + B.short : "No levels played yet";
    ov.querySelector(".prog-code").textContent = code;
    ov.querySelector(".prog-copied").textContent = "";
    var how = ov.querySelector(".prog-how");
    how.innerHTML = "";
    how.appendChild(document.createTextNode("Paste this code into the "));
    how.appendChild(el("b", null, B.assignment));
    how.appendChild(document.createTextNode(" assignment in Canvas."));
    ov.querySelector(".prog-note").textContent = (s.started ? "" : "Play a level, then come back for a code that shows it. ") +
      "Your progress is saved on this Chromebook only. You get a new code each time, and your newest code shows everything so far." +
      (nick ? " Your nickname “" + nick + "” is in the code." : " Add a nickname on the title screen to put it in the code.");
    ov.classList.remove("hidden");
    setTimeout(function () { try { ov.querySelector(".btn.primary").focus(); } catch (e) {} }, 30);
  }
  function hide() { if (ov) ov.classList.add("hidden"); }
  function isOpen() { return !!ov && !ov.classList.contains("hidden"); }

  function bindButtons() {
    ["btn-progress", "btn-progress-end"].forEach(function (id) {
      var b = document.getElementById(id), last = 0;
      if (!b) return;
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        var now = Date.now(); if (now - last < 400) return; last = now;
        show();
      });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bindButtons); else bindButtons();

  window.SolProgress = {
    hook: function (h) { if (h) Object.keys(h).forEach(function (k) { hooks[k] = h[k]; }); },
    levelStart: levelStart, answer: answer, levelEnd: levelEnd,
    record: function (st) { flush(); return JSON.parse(JSON.stringify(load(st || stateNow()))); },
    summary: function (st) { flush(); return summary(st || stateNow()); },
    code: makeCode, show: show, hide: hide, isOpen: isOpen,
    current: function () { return cur ? JSON.parse(JSON.stringify(cur)) : null; },
    _reset: function (st) { try { localStorage.removeItem(KEY + (st || stateNow())); } catch (e) {} cache.st = null; cache.rec = null; cur = null; pendingMs = 0; },
    _tick: tick, IDLE_MS: IDLE_MS
  };
})();
