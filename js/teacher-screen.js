/* SOL Labyrinth: the Teacher screen inside the game (v5.15).
   A small "Teacher" link at the bottom of the title screen opens the teacher page (tools/teacher, built per game by
   tools/build-teacher.js into teacher/<STATE>.html next to index.html) full screen over the game, so a teacher grades
   where the game already is: open the assignment, tap Teacher, drop the Download Submissions .zip. The page runs in a
   frame of its own (srcdoc, so it works from the Canvas bundle too: the file comes through the game's own fetch).
   Nothing in it is secret: it shows only the codes the teacher gives it, so a student who opens it sees an empty page. */
(function () {
  "use strict";
  var ov = null, frame = null, loadedFor = null;
  function state() {
    var st = null;
    try { st = window.SolProgress && SolProgress.state ? SolProgress.state() : null; } catch (e) {}
    return st || window.SOL_STATE || "VA";
  }
  function build() {
    if (ov) return ov;
    var css = document.createElement("style");
    css.textContent = "#teacher-overlay{position:fixed;inset:0;z-index:9700;background:#0b0d13}#teacher-overlay.hidden{display:none!important}" +
      "#teacher-overlay iframe{width:100%;height:100%;border:0;display:block;background:#0b0d13}" +
      "#teacher-overlay .t-msg{position:absolute;top:40%;left:0;right:0;text-align:center;color:#f1ede4;font:18px system-ui,sans-serif}" +
      "#btn-teacher-screen{display:block;margin:18px auto 4px;background:none;border:none;color:var(--dim,#aab);font:14px system-ui,sans-serif;text-decoration:underline;cursor:pointer;padding:6px 10px}" +
      "#btn-teacher-screen:hover,#btn-teacher-screen:focus-visible{color:var(--gold,#f5d76e)}";
    document.head.appendChild(css);
    ov = document.createElement("div");
    ov.id = "teacher-overlay"; ov.className = "hidden";
    ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); ov.setAttribute("aria-label", "Teacher screen");
    ov.innerHTML = '<div class="t-msg">Opening the teacher screen…</div>';
    ["keydown", "keyup", "pointerup", "pointerdown", "click"].forEach(function (t) { ov.addEventListener(t, function (e) { e.stopPropagation(); }); });
    (document.getElementById("app") || document.body).appendChild(ov);
    return ov;
  }
  function show() {
    build();
    ov.classList.remove("hidden");
    var st = state();
    if (frame && loadedFor === st) return;
    fetch("teacher/" + st + ".html").then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    }).then(function (html) {
      if (frame && frame.parentNode) frame.parentNode.removeChild(frame);
      frame = document.createElement("iframe");
      frame.title = "Teacher screen";
      frame.srcdoc = html;
      ov.innerHTML = "";
      ov.appendChild(frame);
      loadedFor = st;
    }).catch(function () {
      ov.innerHTML = '<div class="t-msg">The teacher screen could not open here. Open the teacher page from the zip on your computer instead.<br><br>' +
        '<button type="button" class="btn" id="teacher-back">Back to the game</button></div>';
      var b = document.getElementById("teacher-back");
      if (b) b.addEventListener("click", hide);
    });
  }
  function hide() { if (ov) ov.classList.add("hidden"); }
  function isOpen() { return !!ov && !ov.classList.contains("hidden"); }
  function addLink() {
    var title = document.getElementById("title-screen");
    if (!title || document.getElementById("btn-teacher-screen")) return;
    build();
    var b = document.createElement("button");
    b.type = "button"; b.id = "btn-teacher-screen"; b.textContent = "Teacher";
    b.title = "For teachers: read students' progress codes, suggested grades, the leaderboard and the standards report";
    var last = 0;
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      var now = Date.now(); if (now - last < 400) return; last = now;
      show();
    });
    title.appendChild(b);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addLink); else addLink();
  window.SolTeacher = { show: show, hide: hide, isOpen: isOpen };
})();
