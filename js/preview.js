/* SOL Labyrinth: the teacher preview (v5.22).
   A copy of the Virginia game for a teacher to try every level, every game mode and the castle/town builder without
   reading questions. tools/build-games.js makes it (dist/vap/, window.SOL_PREVIEW = true) and loads this file only
   there, so the students' games never have it; it does nothing unless window.SOL_PREVIEW is set.
   - No reading: the pop-up shows only at the start of a level (with the mode's how-to card), with a note in place of
     the passage, and the side panel shows the same note.
   - Any letter is right: the first letter Sol grabs in the maze (or shoots or beams in a shooter level) becomes the
     answer, so the level plays exactly as it does for a student who answers right.
   - Jump to any level (1–130 in Mixed, 1–100 in one game mode; v5.22) on the skill screen, and a coins button for trying the builder.
   - Its own saves (afterHours.preview.*; the build moves every save key), no class code, no progress code. */
(function () {
  "use strict";
  if (typeof window === "undefined" || !window.SOL_PREVIEW) return;
  var LS_NIGHT = "afterHours.v1.night", LS_GAMEMODE = "afterHours.v1.gameMode";

  /* ── the scenes ── */
  function noteHtml(id) {
    return '<p id="' + id + '" class="pv-note"><b>Teacher preview.</b> The questions are skipped in this copy. ' +
      "In the students' game a passage and a question appear here, and they look for the letter of their answer.</p>";
  }
  function blankReading() {
    var t = document.getElementById("read-title"), p = document.getElementById("read-passage"),
        s = document.getElementById("read-stem"), ol = document.getElementById("read-choices"), h = document.getElementById("read-hint");
    if (t) t.textContent = "Teacher preview";
    /* the maze's hint (a shooter level writes its own after this) */
    if (h) h.textContent = "Grab any letter in the maze and carry it to EXIT · SAFE.";
    if (p) p.innerHTML = noteHtml("pv-read-note");
    if (s) s.textContent = "Any letter counts as the right answer.";
    if (ol) ol.innerHTML = "";
  }
  function blankPanel() {
    if (document.getElementById("pv-hud-note")) return;
    var p = document.getElementById("eoc-passage"), s = document.getElementById("eoc-stem"), ol = document.getElementById("eoc-choices");
    if (p) p.innerHTML = noteHtml("pv-hud-note");
    if (s) s.textContent = "Any letter counts as the right answer.";
    if (ol) ol.innerHTML = "";
  }
  /* the question's letters with one not yet found swapped for L (L becomes a right answer) */
  function takeLetter(sc, L, held) {
    var need = (sc.need || []).slice(), ex = sc.extracted || [], i;
    if (!L || need.indexOf(L) !== -1) return false;
    for (i = 0; i < need.length; i++) {
      if (ex.indexOf(need[i]) === -1 && (held || []).indexOf(need[i]) === -1) { need[i] = L; sc.need = need; return true; }
    }
    return false;
  }
  function hookMaze(P) {
    var openReading = P.openReading;
    /* only the level's first pop-up (it carries the realm or mode card); "next question" pop-ups are skipped */
    if (openReading) P.openReading = function (reason) {
      if (reason !== "start") return false;
      var r = openReading.apply(this, arguments);
      if (r) blankReading();
      return r;
    };
    var paintHud = P.paintHud;
    if (paintHud) P.paintHud = function () {
      var r = paintHud.apply(this, arguments);
      if (this.claim) blankPanel();
      return r;
    };
    /* the maze judges a letter when Sol picks it up: let her pick up any letter, then make it a right one */
    var tryGrab = P.tryGrab;
    if (tryGrab) P.tryGrab = function () {
      var real = (this.need || []).slice(), before = this.carriedSlips ? this.carriedSlips() : [];
      if (!real.length || before.length >= real.length || !this.slips) return tryGrab.apply(this, arguments);
      this.need = real.concat(this.slips.map(function (s) { return s.letter; }).filter(function (L) { return real.indexOf(L) === -1; }));
      var r;
      try { r = tryGrab.apply(this, arguments); }
      finally {
        var after = this.carriedSlips ? this.carriedSlips() : [], got = after.filter(function (s) { return before.indexOf(s) === -1; })[0];
        this.need = real;
        if (got) { takeLetter(this, got.letter, after.map(function (s) { return s.letter; })); try { this.paintHud(); } catch (e) {} }
      }
      return r;
    };
  }
  function hookModes(P) {
    /* the shooters judge in one place: the letter shot (or beamed in) becomes a right one */
    var answerPick = P.answerPick;
    if (answerPick) P.answerPick = function (L) {
      if (!this.ended && !this._finishing && !this._between) takeLetter(this, L, []);
      return answerPick.apply(this, arguments);
    };
    /* Rune Rocks: blasting the rock that holds the answer costs a life; with no question, no answer is known yet */
    var answerWrong = P.answerWrong;
    if (answerWrong) P.answerWrong = function (L, label) {
      if (label === "YOU BLASTED THE RIGHT ANSWER") return;
      return answerWrong.apply(this, arguments);
    };
  }
  var R = window.SolRealms, M = window.SolModes;
  if (R && R.install) {
    var realmsInstall = R.install;
    R.install = function (Scene) {
      var out = realmsInstall.apply(this, arguments);
      try { hookMaze(Scene.prototype); } catch (e) { if (window.console) console.warn("[preview] maze hooks", e); }
      return out;
    };
  }
  if (M && M.install) {
    var modesInstall = M.install;
    M.install = function () {
      var Cls = modesInstall.apply(this, arguments);
      try { if (Cls && Cls.prototype) hookModes(Cls.prototype); } catch (e) { if (window.console) console.warn("[preview] mode hooks", e); }
      return Cls;
    };
  }

  /* ── the screens ── */
  function el(tag, attrs, text) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (text) e.textContent = text;
    return e;
  }
  function savedMode() { try { return localStorage.getItem(LS_GAMEMODE) || "ALL"; } catch (e) { return "ALL"; } }
  function setup() {
    var css = el("style");
    css.textContent =
      /* top left, over the edge of the side panel: clear of the game's buttons along the top */
      "#pv-banner{position:fixed;top:0;left:0;z-index:9800;background:#7a1f1f;color:#fff;" +
      "font:bold 11px system-ui,sans-serif;padding:2px 10px;border-radius:0 0 8px 0;pointer-events:none;letter-spacing:.04em;white-space:nowrap}" +
      ".pv-box{max-width:640px;margin:10px auto;padding:10px 14px;border:2px dashed #e0a040;border-radius:10px;background:rgba(224,160,64,.12);" +
      "color:inherit;font:15px system-ui,sans-serif;text-align:left;line-height:1.4}.pv-box p{margin:0 0 8px}.pv-box .row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}" +
      ".pv-box input{width:5em;font:16px system-ui,sans-serif;padding:6px;border-radius:6px;border:1px solid #888}" +
      ".pv-note{border-left:4px solid #e0a040;padding:6px 10px;background:rgba(224,160,64,.12)}";
    document.head.appendChild(css);
    /* the tab says so too (game.js names the tab as it starts, after this runs) */
    var fixTitle = function () { if (document.title.indexOf("Teacher preview") === -1) document.title = "Teacher preview · " + document.title; };
    fixTitle();
    try { new MutationObserver(fixTitle).observe(document.head, { childList: true, characterData: true, subtree: true }); } catch (eT) {}
    var banner = el("div", { id: "pv-banner" }, "TEACHER PREVIEW · not for students · questions skipped");
    document.body.appendChild(banner);

    /* no class code, no progress code to turn in, no restore: this copy's saves are only the teacher's */
    ["btn-progress", "btn-restore"].forEach(function (id) { var b = document.getElementById(id); if (b) b.classList.add("hidden"); });
    var join = document.querySelector("#title-screen .join-row");
    if (join) join.classList.add("hidden");

    /* the title screen: what this copy is, and coins for the builder */
    var title = document.getElementById("title-screen"), line = document.getElementById("save-line");
    if (title) {
      var box = el("div", { class: "pv-box", id: "pv-title-box" });
      box.appendChild(el("p", null, "This is the TEACHER PREVIEW of the game. The questions are skipped: any letter you grab or shoot counts as " +
        "the right answer. Pick a grade, then a game mode; on the next screen you can jump to any level. " +
        "Saves here are separate from the students' game."));
      var row = el("div", { class: "row" });
      var coins = el("button", { type: "button", class: "btn", id: "pv-coins" }, "Give me 10,000 coins (to try the builder)");
      var said = el("span", { id: "pv-coins-said" });
      coins.addEventListener("click", function () {
        if (!window.SolBuild || !SolBuild.addCoins) return;
        var n = SolBuild.addCoins(10000, "Teacher preview");
        said.textContent = "You have " + n + " coins. Click My Town to build.";
      });
      row.appendChild(coins); row.appendChild(said);
      box.appendChild(row);
      if (line && line.parentNode === title) title.insertBefore(box, line.nextSibling); else title.appendChild(box);
    }

    /* the skill screen: jump to any level of the chosen game mode */
    var skill = document.getElementById("skill-screen"), cont = document.getElementById("btn-skill-continue");
    if (skill && cont) {
      var jb = el("div", { class: "pv-box", id: "pv-jump" });
      jb.appendChild(el("p", null, "Teacher preview: play any level. Type a level (1 to 130 in Mixed, 1 to 100 in one game mode) and click Play this level."));
      var jr = el("div", { class: "row" });
      var lab = el("label", null, "Level ");
      var inp = el("input", { type: "number", id: "pv-level", min: "1", max: "130", value: "1", inputmode: "numeric" });
      lab.appendChild(inp);
      var go = el("button", { type: "button", class: "btn primary", id: "pv-play" }, "Play this level");
      var msg = el("span", { id: "pv-jump-said" });
      go.addEventListener("click", function () {
        var n = parseInt(inp.value, 10), max = window.SolModes && SolModes.maxLevel ? SolModes.maxLevel(savedMode()) : 100;
        if (!(n >= 1 && n <= max)) { msg.textContent = "Type a number from 1 to " + max + "."; return; }
        msg.textContent = "";
        try { localStorage.setItem(LS_NIGHT + "." + savedMode(), String(n)); localStorage.setItem(LS_NIGHT, String(n)); } catch (e) {}
        cont.click();   /* Continue starts the saved level of this game mode */
      });
      jr.appendChild(lab); jr.appendChild(go); jr.appendChild(msg);
      jb.appendChild(jr);
      var packs = document.getElementById("skill-packs");
      skill.insertBefore(jb, packs || null);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup);
  else setup();
  window.SolPreview = { on: true, takeLetter: takeLetter };
})();
