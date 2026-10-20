/* SOL Labyrinth v5.22 — the Lit and Film mode "director": Call the Shot (Film Language: Lights, Camera, Action).
 *
 * The player is the camera operator on a soundstage and the whole canvas is the camera's viewfinder: corner
 * marks, a REC light and timecode, the framing box in the middle, a zoom rocker (W wide / T tight) and, along the
 * bottom, a readout that names the shot the camera has right now (EXTREME LONG SHOT, LONG SHOT, MEDIUM SHOT,
 * CLOSE-UP) and changes as you zoom. On the set, a two-storey "Grand Hotel" street front with a balcony, actors in
 * costume (a knight, a cowboy, an astronaut, a detective, a pirate, a robot) wander the street and the balcony,
 * each holding a slate (a clapperboard) with an answer letter. Off the set: the lighting grid, lamps on stands,
 * the QUIET ON SET light (red while the camera rolls) and the director in a canvas chair.
 *
 * PAN (◀ ▶), TILT (▲ ▼) and ZOOM (Q / E, − / +, the wheel, the W / T buttons) move the camera, and every move is
 * labelled on screen as it happens. The director calls a shot for each question; frame the actor with the right
 * letter in the box (face and slate in the frame) at that shot size, then hold ROLL (Space, the ROLL button or a
 * mouse button) and keep it steady until the take is done ("CUT! PRINT IT!"): that picks the letter (answerPick).
 * Actors walk, so a take can need a follow pan. A finished take of a wrong actor costs a life. The boom mic dips
 * from above (zoom in tighter or reframe to keep it out) and crew members carry ladders, flats and coffee across
 * the front of the stage: either one in the frame while the camera rolls ruins the take and costs a life (letting
 * go of ROLL costs nothing). Between questions the editor joins the scenes with a named transition (CUT TO:,
 * DISSOLVE TO:, WIPE TO:, FADE OUT. FADE IN:, IRIS OUT. IRIS IN:), each shown as itself. From level 41 some scenes
 * are shot as a Dutch angle: the camera is canted, so pan and tilt move on a slant. directorParams sets one
 * difficulty curve for levels 1-100.
 *
 * Registered with SolModes.extend (js/modes.js); the methods below are copied onto ModeScene, so `this` is the
 * mode scene. Every texture is drawn once (canvasTex) under an "md-director-" key. The set itself is vector
 * graphics inside a container, so it stays sharp at every zoom.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, shuffle = L.shuffle, canvasTex = L.canvasTex;
  var TAU = Math.PI * 2, DEG = Math.PI / 180;

  /* the soundstage, in world units: the camera sees part of it */
  var WW = 2000, WH = 1000, FLOOR = 900, BAL = 540, BAL_X0 = 650, BAL_X1 = 1350, SET_X0 = 380, SET_X1 = 1620;
  var AW = 80, AH = 184, RES = 4;               /* an actor's texture (feet on the bottom edge), RES px a world unit */
  var HEAD = 170, SLATE_UP = 104, SW = 56, SH = 48, SRES = 5;   /* head top and slate centre above the feet; the slate */
  var CREW_FEET = 1066, CW = 76, CH = 206, CRES = 3, CREW_K = 1.15;
  var VH_MIN = 104, VH_MAX = 1000;              /* how much of the stage's height the frame can show */
  var OSD = "'Trebuchet MS', Verdana, sans-serif", MONO = "'Courier New', Courier, monospace";
  /* the shot sizes, tightest first: a shot is named by how much of the stage's height the frame shows (actors are
     all the same height, so this is how big the actor looks) */
  var SHOTS = [
    { id: "CU", name: "CLOSE-UP", short: "CU", max: 150, says: "the face and the slate fill the frame" },
    { id: "MS", name: "MEDIUM SHOT", short: "MS", max: 215, says: "the actor from the waist up" },
    { id: "LS", name: "LONG SHOT", short: "LS", max: 600, says: "the whole actor, head to toe, with the set around" },
    { id: "ELS", name: "EXTREME LONG SHOT", short: "ELS", max: 1e9, says: "the whole set: an establishing shot" }
  ];
  var TRANS = {
    OPEN: { head: "FADE IN:", says: "Every screenplay starts with FADE IN: the picture comes up from black." },
    CUT: { head: "CUT TO:", says: "A cut: the picture jumps straight to the next shot." },
    DISSOLVE: { head: "DISSOLVE TO:", says: "A dissolve: one shot slowly melts into the next." },
    WIPE: { head: "WIPE TO:", says: "A wipe: a line slides across the frame and pushes the next shot in." },
    FADE: { head: "FADE OUT. FADE IN:", says: "A fade: the picture goes to black, then comes back." },
    IRIS: { head: "IRIS OUT. IRIS IN:", says: "An iris: a circle closes on the shot, then opens on the next one." }
  };
  var COSTUMES = ["knight", "cowboy", "astronaut", "detective", "pirate", "robot"];
  var COSTUME_NAME = { knight: "the knight", cowboy: "the cowboy", astronaut: "the astronaut", detective: "the detective", pirate: "the pirate", robot: "the robot" };
  var SKIN = ["#f1c9a5", "#c98e62", "#8d5a3c", "#e3b48e", "#6e4630", "#f5d2b8"];
  var CREW_KINDS = ["ladder", "flat", "lamp", "coffee"];
  var CREW_ITEM = { ladder: { w: 170, h: 26, dx: 18, dy: 112 }, flat: { w: 104, h: 150, dx: 40, dy: 112 }, lamp: { w: 46, h: 112, dx: 30, dy: 128 }, coffee: { w: 56, h: 28, dx: 32, dy: 108 } };

  /* ── difficulty: one curve for every level 1-100, each level harder than the one before ── */
  function directorParams(n) {
    n = Math.max(1, Number(n) || 1);
    return {
      wander: 16 + n * 0.42,                                       /* actors' walking speed, world units a second (16 → 58) */
      pauseMs: 2600 - n * 16,                                      /* how long an actor stands on a mark (2.6 s → 1 s) */
      rollMs: 1500 + n * 16,                                       /* a take: how long to hold the shot (1.5 s → 3.1 s) */
      box: 0.17 - n * 0.0008,                                      /* the framing box: half its width, a share of the frame's height */
      steady: 0.95 - n * 0.004,                                    /* the fastest the camera may move during a take (frames a second) */
      decay: 0.35 + n * 0.006,                                     /* take progress lost a second when you let go */
      boomEvery: 15 - n * 0.09,                                    /* seconds between the boom mic's dips (15 → 6) */
      boomLow: 2.2 + n * 0.03,                                     /* seconds it hangs low */
      boomWarn: 1900 - n * 9,                                      /* the BOOM warning before it drops, ms */
      booms: n >= 21 ? 2 : 1,                                      /* boom operators */
      boomFollow: n >= 61 ? Math.min(0.9, 0.5 + (n - 61) * 0.01) : 0.25 + n * 0.002,   /* chance it dips over the actor you frame */
      crewEvery: 17 - n * 0.11,                                    /* seconds between crew crossings (17 → 6) */
      crewSpd: 70 + n * 1.5,                                       /* how fast they walk, world units a second */
      crewPair: n >= 61 ? Math.min(0.8, 0.3 + (n - 61) * 0.012) : 0,   /* chance they come two at a time */
      calls: n >= 31 ? 4 : 3,                                      /* shot sizes the director calls (the extreme long shot from 31) */
      dutchP: n >= 41 ? Math.min(0.85, 0.3 + (n - 41) * 0.01) : 0, /* chance a scene is a Dutch angle */
      dutchDeg: n >= 41 ? 10 + (n - 41) * 0.12 : 0,                /* how far the camera is canted */
      tau: n >= 51 ? 0.12 + (n - 51) * 0.004 : 0.05,               /* the camera head's weight: it drifts on after you let go */
      arrows: n < 71 ? 1 : 0,                                      /* arrows at the frame's edge point to actors out of shot */
      dart: n >= 91 ? 1 : 0                                        /* actors dart and stop without warning */
    };
  }

  /* ── art, drawn once ── */
  var INK = "#231c26";
  function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
  function poly(c, pts) { c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); c.closePath(); }
  function fillStroke(c, fill, lw) { c.fillStyle = fill; c.fill(); c.strokeStyle = INK; c.lineWidth = lw || 1.6; c.stroke(); }
  function limb(c, pts, w, col) {
    c.lineCap = "round"; c.lineJoin = "round";
    c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); });
    c.strokeStyle = INK; c.lineWidth = w + 3.2; c.stroke();
    c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); });
    c.strokeStyle = col; c.lineWidth = w; c.stroke();
  }
  function face(c, x, y, skin, o) {
    o = o || {};
    c.beginPath(); c.arc(x, y, 19, 0, TAU); fillStroke(c, skin, 1.8);
    if (!o.noEars) { c.beginPath(); c.arc(x - 19, y + 2, 4, 0, TAU); fillStroke(c, skin, 1.4); c.beginPath(); c.arc(x + 19, y + 2, 4, 0, TAU); fillStroke(c, skin, 1.4); c.beginPath(); c.arc(x, y, 18.2, 0, TAU); c.fillStyle = skin; c.fill(); }
    c.fillStyle = "rgba(230,110,110,0.28)"; c.beginPath(); c.ellipse(x - 11, y + 7, 4.2, 2.6, 0, 0, TAU); c.fill(); c.beginPath(); c.ellipse(x + 11, y + 7, 4.2, 2.6, 0, 0, TAU); c.fill();
    c.fillStyle = INK;
    if (!o.patch) { c.beginPath(); c.ellipse(x - 7, y + 1, 2.4, 3.1, 0, 0, TAU); c.fill(); }
    c.beginPath(); c.ellipse(x + 7, y + 1, 2.4, 3.1, 0, 0, TAU); c.fill();
    c.fillStyle = "#fff"; if (!o.patch) { c.beginPath(); c.arc(x - 6.2, y - 0.2, 0.9, 0, TAU); c.fill(); } c.beginPath(); c.arc(x + 7.8, y - 0.2, 0.9, 0, TAU); c.fill();
    c.strokeStyle = INK; c.lineWidth = 1.5; c.lineCap = "round";
    c.beginPath(); c.moveTo(x - 10, y - 5.5); c.lineTo(x - 4.5, y - 6.5); c.moveTo(x + 4.5, y - 6.5); c.lineTo(x + 10, y - 5.5); c.stroke();
    c.beginPath(); c.arc(x, y + 7, 5.5, 0.2 * Math.PI, 0.8 * Math.PI); c.stroke();
    c.strokeStyle = "rgba(35,28,38,0.45)"; c.lineWidth = 1.2; c.beginPath(); c.moveTo(x, y + 1); c.lineTo(x - 1.4, y + 4.6); c.lineTo(x + 0.8, y + 4.8); c.stroke();
    if (o.patch) {
      c.fillStyle = INK; c.beginPath(); c.ellipse(x - 7, y + 1, 5.2, 4.4, 0, 0, TAU); c.fill();
      c.strokeStyle = INK; c.lineWidth = 1.4; c.beginPath(); c.moveTo(x - 18, y - 6); c.lineTo(x + 16, y - 11); c.stroke();
    }
  }
  /* an actor in costume, seen from the front, holding the slate (the slate is its own sprite) at the hands.
     step 0 stands, step 1 lifts the viewer's left foot (mirrored for the other step). Feet at (40, 184). */
  function drawActor(kind, skin, step) {
    return function (c) {
      c.save(); c.scale(RES, RES);
      var x = AW / 2, F = AH, lift = step ? 8 : 0, hipY = 124;
      var o = {
        knight: { leg: "#a7b0ba", shoe: "#5d6670", torso: "#c3cbd3", arm: "#aab3bd", hand: "#7d8792" },
        cowboy: { leg: "#3d5f93", shoe: "#6b3f1f", torso: "#c4473a", arm: "#c4473a", hand: skin },
        astronaut: { leg: "#eef1f5", shoe: "#8c97a1", torso: "#f2f4f7", arm: "#eef1f5", hand: "#9aa4ad" },
        detective: { leg: "#3a3a44", shoe: "#1d1a1e", torso: "#b8945e", arm: "#b08a52", hand: skin },
        pirate: { leg: "#2b2730", shoe: "#3a2418", torso: "#f4efe6", arm: "#f4efe6", hand: skin },
        robot: { leg: "#8fa8bb", shoe: "#56697a", torso: "#7f9fb5", arm: "#93aec2", hand: "#5f7384" }
      }[kind];
      /* legs and feet */
      if (kind === "detective") { limb(c, [[x - 9, hipY], [x - 10, F - 12 - lift]], 11, o.leg); limb(c, [[x + 9, hipY], [x + 10, F - 12]], 11, o.leg); }
      else if (kind === "robot") {
        [[-10, lift], [10, 0]].forEach(function (q) { c.fillStyle = o.leg; rr(c, x + q[0] - 7, hipY, 14, F - hipY - 10 - q[1], 4); fillStroke(c, o.leg, 1.6); c.fillStyle = "#56697a"; c.fillRect(x + q[0] - 7, hipY + 26 - q[1] * 0.5, 14, 5); });
      } else { limb(c, [[x - 9, hipY], [x - 10, 152 - lift * 0.5], [x - 11, F - 10 - lift]], 12, o.leg); limb(c, [[x + 9, hipY], [x + 10, 152], [x + 11, F - 10]], 12, o.leg); }
      if (kind === "knight") { c.fillStyle = "#d5dbe1"; [[x - 10, 150 - lift * 0.5], [x + 10, 150]].forEach(function (q) { c.beginPath(); c.ellipse(q[0], q[1], 7, 5, 0, 0, TAU); fillStroke(c, "#d5dbe1", 1.3); }); }
      if (kind === "astronaut") { c.strokeStyle = "#b4bdc6"; c.lineWidth = 2; [[x - 10, 150 - lift * 0.5], [x + 10, 150]].forEach(function (q) { c.beginPath(); c.moveTo(q[0] - 6, q[1]); c.lineTo(q[0] + 6, q[1]); c.stroke(); }); }
      if (kind === "cowboy" || kind === "pirate") {
        [[x - 11, F - 10 - lift], [x + 11, F - 10]].forEach(function (q) { c.fillStyle = o.shoe; rr(c, q[0] - 8, q[1] - 22, 16, 24, 3); fillStroke(c, o.shoe, 1.4); });
      }
      [[x - 13, F - 6 - lift, -1], [x + 13, F - 6, 1]].forEach(function (q) { c.beginPath(); c.ellipse(q[0] + q[2] * 2, q[1], 10, 6, 0, 0, TAU); fillStroke(c, o.shoe, 1.6); });
      /* the torso */
      if (kind === "detective") {
        poly(c, [[x - 22, 62], [x + 22, 62], [x + 27, 150], [x - 27, 150]]); fillStroke(c, o.torso, 1.8);
        c.fillStyle = "#9c7a48"; poly(c, [[x - 4, 62], [x - 16, 64], [x - 10, 100]]); c.fill(); poly(c, [[x + 4, 62], [x + 16, 64], [x + 10, 100]]); c.fill();
        c.fillStyle = "#f2efe8"; poly(c, [[x - 6, 62], [x + 6, 62], [x, 78]]); c.fill();
        c.fillStyle = "#a3262c"; poly(c, [[x - 2, 64], [x + 2, 64], [x + 3, 92], [x, 96], [x - 3, 92]]); c.fill();
        c.fillStyle = "#8c6b3c"; c.fillRect(x - 25, 110, 50, 6); c.fillStyle = "#3a2c1c"; c.fillRect(x - 4, 109, 8, 8);
        c.strokeStyle = "rgba(35,28,38,0.5)"; c.lineWidth = 1.2; c.beginPath(); c.moveTo(x, 116); c.lineTo(x, 150); c.stroke();
      } else if (kind === "robot") {
        rr(c, x - 23, 60, 46, 66, 6); fillStroke(c, o.torso, 1.8);
        c.fillStyle = "#33414d"; rr(c, x - 15, 104, 30, 16, 3); c.fill();
        ["#ff5a4a", "#ffd34a", "#5adf8a"].forEach(function (col, i) { c.fillStyle = col; c.beginPath(); c.arc(x - 9 + i * 9, 112, 2.6, 0, TAU); c.fill(); });
      } else {
        rr(c, x - 21, 60, 42, 70, 11); fillStroke(c, o.torso, 1.8);
        if (kind === "knight") {
          var g = c.createLinearGradient(x - 21, 0, x + 21, 0); g.addColorStop(0, "#8d97a2"); g.addColorStop(0.45, "#e8edf2"); g.addColorStop(1, "#7c8691");
          rr(c, x - 21, 60, 42, 70, 11); c.fillStyle = g; c.fill(); c.strokeStyle = INK; c.lineWidth = 1.8; c.stroke();
          c.fillStyle = "#b3262e"; c.fillRect(x - 12, 62, 24, 76); c.strokeStyle = INK; c.lineWidth = 1.4; c.strokeRect(x - 12, 62, 24, 76);
          c.fillStyle = "#e8b84a"; poly(c, [[x, 104], [x + 7, 114], [x, 124], [x - 7, 114]]); c.fill();
          c.fillStyle = "#6a4a2a"; c.fillRect(x - 21, 120, 42, 5);
        } else if (kind === "cowboy") {
          c.strokeStyle = "rgba(90,20,20,0.55)"; c.lineWidth = 1.4;
          for (var i = 0; i < 5; i++) { c.beginPath(); c.moveTo(x - 20, 70 + i * 13); c.lineTo(x + 20, 70 + i * 13); c.stroke(); c.beginPath(); c.moveTo(x - 16 + i * 8, 61); c.lineTo(x - 16 + i * 8, 128); c.stroke(); }
          c.fillStyle = "#7a4a26"; poly(c, [[x - 21, 64], [x - 7, 64], [x - 9, 128], [x - 21, 126]]); fillStroke(c, "#7a4a26", 1.4); poly(c, [[x + 21, 64], [x + 7, 64], [x + 9, 128], [x + 21, 126]]); fillStroke(c, "#7a4a26", 1.4);
          c.fillStyle = "#5a3a1c"; c.fillRect(x - 21, 120, 42, 6); c.fillStyle = "#e8c04a"; c.fillRect(x - 5, 119, 10, 8);
          c.fillStyle = "#e8b33c"; poly(c, [[x - 11, 58], [x + 11, 58], [x, 72]]); fillStroke(c, "#e8b33c", 1.3);
        } else if (kind === "astronaut") {
          c.fillStyle = "#e8743b"; c.fillRect(x - 21, 98, 42, 5);
          c.fillStyle = "#c9d0d8"; rr(c, x - 12, 106, 24, 14, 3); fillStroke(c, "#c9d0d8", 1.2);
          ["#ff5a4a", "#4ab0ff", "#ffd34a"].forEach(function (col, i) { c.fillStyle = col; c.beginPath(); c.arc(x - 6 + i * 6, 113, 2, 0, TAU); c.fill(); });
          c.fillStyle = "#aab4be"; rr(c, x - 16, 56, 32, 9, 4); fillStroke(c, "#aab4be", 1.3);
        } else if (kind === "pirate") {
          c.save(); rr(c, x - 21, 60, 42, 70, 11); c.clip();
          c.fillStyle = "#c83a32"; for (var j = 0; j < 7; j++) c.fillRect(x - 22, 64 + j * 10, 44, 5);
          c.restore(); rr(c, x - 21, 60, 42, 70, 11); c.strokeStyle = INK; c.lineWidth = 1.8; c.stroke();
          c.fillStyle = "#b02a2a"; c.fillRect(x - 21, 114, 42, 9); poly(c, [[x + 8, 120], [x + 18, 140], [x + 10, 141]]); c.fill();
        }
      }
      /* arms reaching to the slate's sides (the hands sit on its edges at y 80) */
      var ax = kind === "detective" ? 25 : 21;
      limb(c, [[x - ax + 2, 68], [x - 29, 78], [x - 27, 84]], 9, o.arm);
      limb(c, [[x + ax - 2, 68], [x + 29, 78], [x + 27, 84]], 9, o.arm);
      if (kind === "astronaut") { c.strokeStyle = "#e8743b"; c.lineWidth = 3; c.beginPath(); c.moveTo(x - 27, 75); c.lineTo(x - 23, 72); c.moveTo(x + 27, 75); c.lineTo(x + 23, 72); c.stroke(); }
      [[x - 28, 84], [x + 28, 84]].forEach(function (q) { c.beginPath(); c.arc(q[0], q[1], 5.6, 0, TAU); fillStroke(c, o.hand, 1.4); });
      /* neck and head, and the hat */
      var hy = 34;
      if (kind !== "robot") { c.fillStyle = skin; c.fillRect(x - 6, 50, 12, 12); c.strokeStyle = INK; c.lineWidth = 1.2; c.strokeRect(x - 6, 50, 12, 12); }
      if (kind === "robot") {
        c.fillStyle = "#56697a"; c.fillRect(x - 5, 50, 10, 12);
        rr(c, x - 21, 12, 42, 40, 8); fillStroke(c, "#a9c0d0", 1.8);
        c.fillStyle = "#24323e"; rr(c, x - 15, 20, 30, 14, 4); c.fill();
        c.fillStyle = "#6ff0ff"; rr(c, x - 12, 24, 9, 6, 2); c.fill(); rr(c, x + 3, 24, 9, 6, 2); c.fill();
        c.strokeStyle = INK; c.lineWidth = 1.3; for (var m = 0; m < 4; m++) { c.beginPath(); c.moveTo(x - 9 + m * 6, 40); c.lineTo(x - 9 + m * 6, 47); c.stroke(); }
        c.strokeStyle = INK; c.lineWidth = 2; c.beginPath(); c.moveTo(x, 12); c.lineTo(x, 3); c.stroke();
        c.beginPath(); c.arc(x, 3, 3.4, 0, TAU); fillStroke(c, "#ff5a4a", 1.2);
        c.fillStyle = "#93aec2"; c.fillRect(x - 25, 26, 4, 12); c.fillRect(x + 21, 26, 4, 12);
      } else {
        face(c, x, hy, skin, { patch: kind === "pirate", noEars: kind === "knight" || kind === "astronaut" });
      }
      if (kind === "knight") {
        c.beginPath(); c.arc(x, hy, 23, 0, TAU); c.rect(x + 14, hy - 9, -28, 30); c.fillStyle = "#c6ced6"; c.fill("evenodd");
        c.strokeStyle = INK; c.lineWidth = 1.8; c.beginPath(); c.arc(x, hy, 23, 0, TAU); c.stroke(); c.strokeRect(x - 14, hy - 9, 28, 30);
        c.fillStyle = "#e3e8ed"; rr(c, x - 17, hy - 16, 34, 8, 3); fillStroke(c, "#e3e8ed", 1.4);
        c.fillStyle = "#b3262e"; c.beginPath(); c.moveTo(x - 2, hy - 22); c.quadraticCurveTo(x + 8, hy - 42, x + 26, hy - 30); c.quadraticCurveTo(x + 14, hy - 28, x + 4, hy - 20); c.closePath(); fillStroke(c, "#b3262e", 1.4);
      } else if (kind === "cowboy") {
        c.fillStyle = "#4a2c16"; c.beginPath(); c.arc(x, hy - 2, 19, Math.PI, 0); c.fill();
        c.beginPath(); c.ellipse(x, hy - 16, 33, 7, 0, 0, TAU); fillStroke(c, "#8b5a2b", 1.6);
        c.beginPath(); c.moveTo(x - 17, hy - 16); c.lineTo(x - 15, hy - 36); c.quadraticCurveTo(x, hy - 30, x + 15, hy - 36); c.lineTo(x + 17, hy - 16); c.closePath(); fillStroke(c, "#8b5a2b", 1.6);
        c.fillStyle = "#3a2410"; c.fillRect(x - 17, hy - 22, 34, 5);
      } else if (kind === "astronaut") {
        c.fillStyle = "rgba(160,205,255,0.32)"; c.beginPath(); c.arc(x, hy + 1, 26, 0, TAU); c.fill();
        c.strokeStyle = "#f2f4f7"; c.lineWidth = 4; c.stroke(); c.strokeStyle = INK; c.lineWidth = 1.4; c.beginPath(); c.arc(x, hy + 1, 28, 0, TAU); c.stroke();
        c.strokeStyle = "rgba(255,255,255,0.85)"; c.lineWidth = 3; c.beginPath(); c.arc(x, hy + 1, 20, 1.15 * Math.PI, 1.45 * Math.PI); c.stroke();
      } else if (kind === "detective") {
        c.fillStyle = "#3a2a22"; c.beginPath(); c.arc(x, hy - 3, 19, Math.PI, 0); c.fill();
        c.beginPath(); c.ellipse(x, hy - 15, 29, 6, 0, 0, TAU); fillStroke(c, "#4a4440", 1.6);
        c.beginPath(); c.moveTo(x - 16, hy - 15); c.lineTo(x - 14, hy - 33); c.quadraticCurveTo(x, hy - 27, x + 14, hy - 33); c.lineTo(x + 16, hy - 15); c.closePath(); fillStroke(c, "#4a4440", 1.6);
        c.fillStyle = "#1d1a1e"; c.fillRect(x - 16, hy - 21, 32, 5);
      } else if (kind === "pirate") {
        c.fillStyle = "#5a3a22"; c.beginPath(); c.arc(x, hy + 10, 14, 0.15 * Math.PI, 0.85 * Math.PI); c.lineTo(x - 10, hy + 18); c.fill();
        c.beginPath(); c.arc(x, hy + 7, 5.5, 0.2 * Math.PI, 0.8 * Math.PI); c.strokeStyle = "#f4efe6"; c.lineWidth = 1.5; c.stroke();
        c.fillStyle = "#e8b84a"; c.beginPath(); c.arc(x + 20, hy + 8, 2.4, 0, TAU); c.fill();
        c.beginPath(); c.moveTo(x - 32, hy - 12); c.quadraticCurveTo(x, hy - 6, x + 32, hy - 12); c.quadraticCurveTo(x + 18, hy - 22, x + 10, hy - 36); c.quadraticCurveTo(x, hy - 30, x - 10, hy - 36); c.quadraticCurveTo(x - 18, hy - 22, x - 32, hy - 12); c.closePath();
        fillStroke(c, "#231f22", 1.6);
        c.strokeStyle = "#e8b84a"; c.lineWidth = 1.8; c.beginPath(); c.moveTo(x - 30, hy - 12.5); c.quadraticCurveTo(x, hy - 7, x + 30, hy - 12.5); c.stroke();
        c.fillStyle = "#f4efe6"; c.beginPath(); c.arc(x, hy - 22, 3.4, 0, TAU); c.fill();
      }
      c.restore();
    };
  }
  /* the slate: a clapperboard, the clap-stick on top in black and white stripes; the letter is a text on it */
  function drawSlate(c) {
    c.save(); c.scale(SRES, SRES);
    c.save(); rr(c, 1, 1, SW - 2, 10, 2); c.clip();
    c.fillStyle = "#f4f4f0"; c.fillRect(0, 0, SW, 12); c.fillStyle = "#16161a";
    for (var i = -2; i < 9; i++) { c.beginPath(); c.moveTo(i * 8, 12); c.lineTo(i * 8 + 4, 12); c.lineTo(i * 8 + 10, 0); c.lineTo(i * 8 + 6, 0); c.closePath(); c.fill(); }
    c.restore(); rr(c, 1, 1, SW - 2, 10, 2); c.strokeStyle = INK; c.lineWidth = 1.3; c.stroke();
    rr(c, 1, 11, SW - 2, SH - 12, 3); c.fillStyle = "#1a1b20"; c.fill(); c.strokeStyle = INK; c.lineWidth = 1.4; c.stroke();
    c.strokeStyle = "rgba(240,240,232,0.75)"; c.lineWidth = 0.7; c.strokeRect(4, 14, SW - 8, SH - 18);
    c.beginPath(); c.moveTo(4, SH - 10); c.lineTo(SW - 4, SH - 10); c.moveTo(SW / 2, SH - 10); c.lineTo(SW / 2, SH - 4); c.stroke();
    c.fillStyle = "rgba(240,240,232,0.8)"; c.font = "bold 3.6px " + OSD; c.textBaseline = "middle";
    c.fillText("SCENE", 6, SH - 7); c.fillText("TAKE", SW / 2 + 2, SH - 7);
    c.fillStyle = "#c8c8c0"; c.beginPath(); c.arc(4, 6, 1.6, 0, TAU); c.fill();
    c.restore();
  }
  /* a crew member from the side, walking right: black crew T-shirt, cap and headset (feet at (38, 206)) */
  function drawCrew(skin, step) {
    return function (c) {
      c.save(); c.scale(CRES, CRES);
      var F = CH, hipY = 128, fx = step ? 16 : 3;
      limb(c, [[36, hipY], [36 - fx, 168], [38 - fx * 1.4, F - 8]], 12, "#3d3b30");
      limb(c, [[40, hipY], [42 + fx, 168], [40 + fx * 1.5, F - 8]], 12, "#4b4a3c");
      [[38 - fx * 1.4, F - 5], [40 + fx * 1.5, F - 5]].forEach(function (q) { c.beginPath(); c.ellipse(q[0] + 4, q[1], 10, 5.5, 0, 0, TAU); fillStroke(c, "#f0f0ea", 1.4); c.fillStyle = "#555"; c.fillRect(q[0] - 6, q[1] + 3, 20, 2.4); });
      rr(c, 22, 64, 34, 70, 10); fillStroke(c, "#18181c", 1.8);
      c.fillStyle = "#f0f0ea"; c.font = "bold 7px " + OSD; c.fillText("CREW", 25, 104);
      c.fillStyle = "#2b2b30"; c.fillRect(22, 122, 34, 6);
      c.fillStyle = skin; c.fillRect(34, 52, 11, 14); c.strokeStyle = INK; c.lineWidth = 1.2; c.strokeRect(34, 52, 11, 14);
      c.beginPath(); c.arc(40, 40, 16, 0, TAU); fillStroke(c, skin, 1.8);
      c.fillStyle = INK; c.beginPath(); c.ellipse(48, 38, 2, 2.6, 0, 0, TAU); c.fill();
      c.strokeStyle = INK; c.lineWidth = 1.3; c.beginPath(); c.arc(48, 46, 4, 0.1 * Math.PI, 0.7 * Math.PI); c.stroke();
      c.fillStyle = skin; poly(c, [[55, 38], [60, 43], [55, 44]]); c.fill();
      c.fillStyle = "#1f2a44"; c.beginPath(); c.arc(40, 34, 16.5, Math.PI * 1.02, Math.PI * 1.98); c.closePath(); c.fill();
      rr(c, 40, 29, 26, 6, 3); c.fill();
      c.strokeStyle = "#111"; c.lineWidth = 2.4; c.beginPath(); c.arc(40, 40, 17.5, Math.PI * 1.15, Math.PI * 1.75); c.stroke();
      c.fillStyle = "#222"; c.beginPath(); c.ellipse(34, 42, 5, 6.5, 0, 0, TAU); c.fill();
      c.lineWidth = 1.6; c.beginPath(); c.moveTo(34, 46); c.quadraticCurveTo(40, 54, 50, 52); c.stroke();
      limb(c, [[36, 72], [48, 92], [62, 98]], 9, "#18181c");
      c.beginPath(); c.arc(63, 98, 5.2, 0, TAU); fillStroke(c, skin, 1.4);
      c.restore();
    };
  }
  function drawCrewItem(kind) {
    var I = CREW_ITEM[kind];
    return function (c) {
      c.save(); c.scale(CRES, CRES);
      var w = I.w, h = I.h;
      if (kind === "ladder") {
        c.fillStyle = "#c9ced4"; c.strokeStyle = INK; c.lineWidth = 1.3;
        [3, h - 9].forEach(function (y) { rr(c, 2, y, w - 4, 6, 2); c.fill(); c.stroke(); });
        for (var x = 12; x < w - 6; x += 18) { c.fillStyle = "#a9b0b8"; c.fillRect(x, 8, 4, h - 16); c.strokeRect(x, 8, 4, h - 16); }
        c.fillStyle = "#e8b33c"; c.fillRect(2, 3, 8, h - 6);
      } else if (kind === "flat") {
        c.fillStyle = "#d8c7a0"; c.fillRect(2, 2, w - 4, h - 4); c.strokeStyle = "#8a6a44"; c.lineWidth = 6; c.strokeRect(5, 5, w - 10, h - 10);
        c.beginPath(); c.moveTo(8, h - 8); c.lineTo(w - 8, 8); c.moveTo(8, h / 2); c.lineTo(w - 8, h / 2); c.stroke();
        c.strokeStyle = INK; c.lineWidth = 1.4; c.strokeRect(2, 2, w - 4, h - 4);
        c.fillStyle = "rgba(40,30,20,0.75)"; c.font = "bold 10px " + MONO; c.fillText("ACT 1", 14, 30); c.fillText("SC. 4", 14, h - 18);
      } else if (kind === "lamp") {
        c.strokeStyle = INK; c.lineWidth = 4; c.beginPath(); c.moveTo(w / 2, 46); c.lineTo(w / 2, h - 4); c.stroke();
        c.lineWidth = 2.4; c.beginPath(); c.moveTo(w / 2, h - 14); c.lineTo(6, h - 2); c.moveTo(w / 2, h - 14); c.lineTo(w - 6, h - 2); c.stroke();
        rr(c, 4, 6, w - 8, 40, 6); fillStroke(c, "#2a2a30", 1.6);
        c.fillStyle = "#ffe9a8"; c.beginPath(); c.arc(w / 2, 26, 12, 0, TAU); c.fill(); c.strokeStyle = "#8a7a50"; c.lineWidth = 1.2; c.stroke();
        c.fillStyle = "#3a3a42"; poly(c, [[2, 6], [10, 0], [w - 10, 0], [w - 2, 6]]); c.fill();
      } else {
        c.fillStyle = "#b08a5a"; rr(c, 2, h - 9, w - 4, 7, 2); fillStroke(c, "#b08a5a", 1.2);
        for (var k = 0; k < 4; k++) { var cx = 9 + k * 12.5; poly(c, [[cx - 5, 3], [cx + 5, 3], [cx + 4, h - 9], [cx - 4, h - 9]]); fillStroke(c, "#f4f0e8", 1.1); c.fillStyle = "#8a5a3a"; c.fillRect(cx - 5, 9, 10, 5); c.fillStyle = "#2a2a2a"; c.fillRect(cx - 6, 1, 12, 3); }
      }
      c.restore();
    };
  }
  /* the boom mic's fuzzy windscreen (a "dead cat") */
  function drawMic(c, w, h) {
    c.save(); c.scale(3, 3);
    var W = w / 3, H = h / 3, i;
    c.fillStyle = "#6c6a66"; rr(c, 4, 5, W - 8, H - 10, (H - 10) / 2); c.fill();
    for (i = 0; i < 220; i++) {
      var t = Math.random(), side = Math.random() < 0.5 ? -1 : 1, x = 6 + t * (W - 12), y = H / 2 + side * (H / 2 - 5) * Math.random();
      var a = Math.atan2(y - H / 2, (x - W / 2) * 0.35) + rnd(-0.5, 0.5);
      c.strokeStyle = Math.random() < 0.5 ? "#8c8a84" : "#4e4c48"; c.lineWidth = 0.8;
      c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(a) * 4, y + Math.sin(a) * 4); c.stroke();
    }
    c.restore();
  }
  /* the director in a canvas chair, facing left toward the set, calling through a megaphone (world 130 x 190) */
  function drawDirector(c) {
    c.save(); c.scale(2, 2);
    c.strokeStyle = "#7a5a3a"; c.lineWidth = 4; c.lineCap = "round";
    c.beginPath(); c.moveTo(40, 120); c.lineTo(96, 186); c.moveTo(96, 120); c.lineTo(40, 186); c.moveTo(94, 50); c.lineTo(96, 186); c.moveTo(36, 120); c.lineTo(100, 120); c.stroke();
    c.fillStyle = "#1c1c22"; c.fillRect(70, 56, 28, 40); c.fillStyle = "#f0f0ea"; c.font = "bold 5.5px " + OSD;
    c.save(); c.translate(84, 76); c.rotate(-Math.PI / 2); c.textAlign = "center"; c.fillText("DIRECTOR", 0, 2); c.restore();
    c.fillStyle = "#1c1c22"; c.fillRect(38, 112, 60, 8);
    limb(c, [[66, 116], [40, 118], [36, 150], [30, 182]], 11, "#2f3340");
    c.beginPath(); c.ellipse(26, 184, 10, 5, 0, 0, TAU); fillStroke(c, "#141414", 1.4);
    rr(c, 52, 70, 30, 50, 10); fillStroke(c, "#6a2a3a", 1.8);
    c.fillStyle = "#e8b33c"; poly(c, [[54, 74], [66, 78], [58, 96]]); c.fill();
    c.fillStyle = "#e8c09a"; c.fillRect(60, 60, 10, 12);
    c.beginPath(); c.arc(62, 50, 15, 0, TAU); fillStroke(c, "#e8c09a", 1.6);
    c.fillStyle = INK; c.beginPath(); c.arc(54, 48, 1.8, 0, TAU); c.fill();
    c.fillStyle = "#1c1c22"; c.beginPath(); c.ellipse(64, 38, 17, 6, -0.15, 0, TAU); c.fill(); c.beginPath(); c.arc(70, 34, 2.5, 0, TAU); c.fill();
    c.fillStyle = "#4a3a30"; c.beginPath(); c.arc(64, 56, 9, 0.3 * Math.PI, 0.9 * Math.PI); c.fill();
    limb(c, [[60, 82], [42, 74], [30, 62]], 8, "#6a2a3a");
    poly(c, [[30, 64], [6, 48], [6, 76]]); fillStroke(c, "#e8e2d4", 1.6);
    c.fillStyle = "#c83a32"; c.fillRect(24, 58, 8, 10);
    c.restore();
  }
  function drawQuietSign(c, w, h) {
    c.save(); c.scale(3, 3); var W = w / 3, H = h / 3;
    rr(c, 1, 1, W - 2, H - 2, 3); c.fillStyle = "#2a0c0c"; c.fill(); c.strokeStyle = "#8a7a6a"; c.lineWidth = 1.5; c.stroke();
    c.fillStyle = "#ffd6c8"; c.font = "bold 11px " + OSD; c.textAlign = "center"; c.textBaseline = "middle"; c.fillText("QUIET ON SET", W / 2, H / 2 + 1);
    c.restore();
  }
  function drawGlow(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 1, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.25, "rgba(255,255,255,0.55)"); g.addColorStop(1, "rgba(255,255,255,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  /* a soft cone of light, narrow at the top */
  function drawBeam(c, w, h) {
    try { c.filter = "blur(6px)"; } catch (e) {}
    var g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "rgba(255,240,205,0.9)"); g.addColorStop(0.5, "rgba(255,232,190,0.35)"); g.addColorStop(1, "rgba(255,225,180,0)");
    c.fillStyle = g; c.beginPath(); c.moveTo(w * 0.42, 8); c.lineTo(w * 0.58, 8); c.lineTo(w - 10, h); c.lineTo(10, h); c.closePath(); c.fill();
  }
  /* the soundstage behind the set (world 2000 x 1000, 1 px a unit): studio walls, the lighting grid, the painted
     sky backdrop (the cyclorama) and the stage floor with its tape marks */
  function drawStage(c, w, h) {
    var g = c.createLinearGradient(0, 0, 0, h), i, x;
    g.addColorStop(0, "#0d0c12"); g.addColorStop(1, "#1b1820");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    c.strokeStyle = "rgba(255,255,255,0.035)"; c.lineWidth = 2;
    for (x = 0; x < w; x += 80) { c.beginPath(); c.moveTo(x, 120); c.lineTo(x, FLOOR); c.stroke(); }
    for (x = 140; x < FLOOR; x += 80) { c.beginPath(); c.moveTo(0, x); c.lineTo(w, x); c.stroke(); }
    /* the cyclorama: a painted sunset over rooftops */
    var cx0 = SET_X0 - 90, cx1 = SET_X1 + 90, cy0 = 118;
    g = c.createLinearGradient(0, cy0, 0, FLOOR);
    g.addColorStop(0, "#3f6aa8"); g.addColorStop(0.42, "#8fa6c8"); g.addColorStop(0.7, "#f2b98a"); g.addColorStop(1, "#f7d9a8");
    c.fillStyle = g; c.fillRect(cx0, cy0, cx1 - cx0, FLOOR - cy0);
    var sun = c.createRadialGradient(1000, 640, 10, 1000, 640, 260);
    sun.addColorStop(0, "rgba(255,236,190,0.95)"); sun.addColorStop(0.2, "rgba(255,210,150,0.55)"); sun.addColorStop(1, "rgba(255,190,140,0)");
    c.fillStyle = sun; c.fillRect(cx0, cy0, cx1 - cx0, FLOOR - cy0);
    c.fillStyle = "rgba(255,255,255,0.5)";
    [[520, 300, 90], [760, 250, 60], [1260, 290, 100], [1500, 230, 70], [980, 210, 50], [640, 380, 50], [1380, 400, 60]].forEach(function (q) {
      for (var j = 0; j < 5; j++) { c.beginPath(); c.ellipse(q[0] + (j - 2) * q[2] * 0.45, q[1] + Math.abs(j - 2) * 6, q[2] * 0.5, q[2] * 0.22, 0, 0, TAU); c.fill(); }
    });
    c.fillStyle = "#7a6a98";
    for (x = cx0, i = 0; x < cx1; i++) { var bw = 50 + (i * 37) % 70, bh = 70 + (i * 53) % 120; c.fillRect(x, FLOOR - 40 - bh, bw, bh + 40); x += bw - 4; }
    c.fillStyle = "#ffe7a6";
    for (x = cx0 + 12; x < cx1; x += 23) for (var y = FLOOR - 140; y < FLOOR - 50; y += 24) if (((x * 7 + y * 3) % 5) < 2) c.fillRect(x, y, 6, 8);
    c.fillStyle = "rgba(0,0,0,0.18)"; c.fillRect(cx0, cy0, 6, FLOOR - cy0); c.fillRect(cx1 - 6, cy0, 6, FLOOR - cy0);
    c.strokeStyle = "rgba(0,0,0,0.3)"; c.lineWidth = 3; c.strokeRect(cx0, cy0, cx1 - cx0, FLOOR - cy0);
    /* the lighting grid: two pipes, cable, hanging lamps */
    c.fillStyle = "#3a3a44"; c.fillRect(0, 50, w, 8); c.fillRect(0, 96, w, 8);
    c.fillStyle = "#26262e"; for (x = 40; x < w; x += 160) c.fillRect(x, 50, 6, 54);
    c.strokeStyle = "#111"; c.lineWidth = 3; c.beginPath(); for (x = 0; x < w; x += 120) { c.moveTo(x, 104); c.quadraticCurveTo(x + 60, 124, x + 120, 104); } c.stroke();
    [300, 560, 820, 1180, 1440, 1700].forEach(function (lx) {
      c.fillStyle = "#1c1c22"; c.fillRect(lx - 3, 58, 6, 30);
      c.fillStyle = "#2c2c34"; rr(c, lx - 22, 82, 44, 34, 6); c.fill(); c.strokeStyle = "#55555f"; c.lineWidth = 2; c.stroke();
      c.fillStyle = "#ffeec0"; c.beginPath(); c.ellipse(lx, 116, 16, 5, 0, 0, TAU); c.fill();
    });
    /* the stage floor: boards, the actors' tape marks, a cable */
    g = c.createLinearGradient(0, FLOOR, 0, h); g.addColorStop(0, "#4a4038"); g.addColorStop(1, "#2a241f");
    c.fillStyle = g; c.fillRect(0, FLOOR, w, h - FLOOR);
    c.strokeStyle = "rgba(0,0,0,0.25)"; c.lineWidth = 2;
    for (y = FLOOR + 14; y < h; y += 18) { c.beginPath(); c.moveTo(0, y); c.lineTo(w, y); c.stroke(); }
    for (x = 0; x < w; x += 140) for (y = FLOOR; y < h; y += 36) { c.beginPath(); c.moveTo(x + (y % 72 ? 70 : 0), y); c.lineTo(x + (y % 72 ? 70 : 0), y + 18); c.stroke(); }
    ["#e84a4a", "#4ad0e8", "#f2d34a", "#7ae84a", "#e84ad0"].forEach(function (col, j) {
      var mx = 520 + j * 240, my = FLOOR + 14 + (j % 2) * 10; c.fillStyle = col; c.fillRect(mx - 14, my, 28, 4); c.fillRect(mx - 2, my, 4, 14);
    });
    c.strokeStyle = "#0e0e10"; c.lineWidth = 5; c.beginPath(); c.moveTo(0, 960); c.bezierCurveTo(300, 930, 500, 990, 800, 975); c.bezierCurveTo(1100, 960, 1500, 995, 2000, 950); c.stroke();
  }
  /* the viewfinder's dark edges, made for the canvas size */
  function drawVignette(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.35, w / 2, h / 2, Math.hypot(w, h) * 0.6);
    g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,0.55)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  function ensureDirectorArt(scene) {
    canvasTex(scene, "md-director-slate", SW * SRES, SH * SRES, drawSlate);
    canvasTex(scene, "md-director-stage", WW, WH, drawStage);
    canvasTex(scene, "md-director-mic", 210, 96, drawMic);
    canvasTex(scene, "md-director-boss", 260, 380, drawDirector);
    canvasTex(scene, "md-director-quiet", 330, 90, drawQuietSign);
    canvasTex(scene, "md-director-glow", 96, 96, drawGlow);
    canvasTex(scene, "md-director-beam", 160, 420, drawBeam);
    for (var i = 0; i < 2; i++) for (var j = 0; j < 2; j++) canvasTex(scene, "md-director-crew-" + i + "-" + j, CW * CRES, CH * CRES, drawCrew(["#e3b48e", "#8d5a3c"][i], j));
    CREW_KINDS.forEach(function (kd) { var I = CREW_ITEM[kd]; canvasTex(scene, "md-director-item-" + kd, I.w * CRES, I.h * CRES, drawCrewItem(kd)); });
  }
  function actorKey(scene, kind, skinI, step) {
    var key = "md-director-act-" + kind + "-" + skinI + "-" + step;
    canvasTex(scene, key, AW * RES, AH * RES, drawActor(kind, SKIN[skinI], step));
    return key;
  }
  function shotOf(vh) { for (var i = 0; i < SHOTS.length; i++) if (vh < SHOTS[i].max) return SHOTS[i]; return SHOTS[SHOTS.length - 1]; }
  function shotById(id) { return SHOTS.filter(function (s) { return s.id === id; })[0] || SHOTS[1]; }
  function sfx(name) {
    var R = window.SolRealms;
    if (!R || !R.blip) return;
    try {
      if (name === "clap") { R.hiss(0.05, 3200, 0.09); R.blip(1900, 700, 0.05, "square", 0.035); }
      else if (name === "roll") { R.blip(660, 660, 0.09, "sine", 0.03); R.blip(990, 990, 0.12, "sine", 0.03, 0.1); }
      else if (name === "buzz") { R.blip(150, 95, 0.4, "sawtooth", 0.05); R.hiss(0.2, 400, 0.04); }
      else if (name === "beep") { R.blip(880, 880, 0.07, "square", 0.016); R.blip(880, 880, 0.07, "square", 0.016, 0.14); }
      else if (name === "whoosh") R.hiss(0.5, 1500, 0.035);
    } catch (e) {}
  }

  /* ── the set: vector graphics in world units (crisp at every zoom) ── */
  function drawSet(g) {
    var x, i;
    /* the flat's braces and sandbags, seen past both ends of the street front */
    [[SET_X0, -1], [SET_X1, 1]].forEach(function (q) {
      var ex = q[0], sd = q[1];
      g.lineStyle(10, 0x7a5a36, 1); g.lineBetween(ex + sd * 2, 300, ex + sd * 74, FLOOR); g.lineBetween(ex + sd * 2, 640, ex + sd * 44, FLOOR);
      g.lineStyle(5, 0x7a5a36, 1); g.lineBetween(ex + sd * 20, 560, ex + sd * 20, FLOOR);
      g.fillStyle(0x3a3a2e, 1); g.fillEllipse(ex + sd * 76, FLOOR - 8, 46, 20); g.fillEllipse(ex + sd * 44, FLOOR - 8, 40, 18);
      g.fillStyle(0x6a5a3a, 1); g.fillRect(sd > 0 ? ex : ex - 14, 192, 14, FLOOR - 192);
    });
    /* the building front */
    g.fillStyle(0xe8d6ae, 1); g.fillRect(SET_X0, 206, SET_X1 - SET_X0, 350);
    g.fillStyle(0xdcc49a, 1); g.fillRect(SET_X0, 556, SET_X1 - SET_X0, FLOOR - 556);
    g.fillStyle(0xcdb487, 1); for (i = 0; i < 9; i++) g.fillRect(SET_X0, 580 + i * 36, SET_X1 - SET_X0, 2);
    g.fillStyle(0x8a5a3a, 1); g.fillRect(SET_X0 - 14, 188, SET_X1 - SET_X0 + 28, 24); g.fillStyle(0xa8754e, 1); g.fillRect(SET_X0 - 18, 182, SET_X1 - SET_X0 + 36, 8);
    for (x = SET_X0; x < SET_X1; x += 26) { g.fillStyle(0x6a4228, 1); g.fillRect(x + 4, 212, 12, 9); }
    g.fillStyle(0xb69a6c, 1); g.fillRect(SET_X0, 548, SET_X1 - SET_X0, 10);
    g.fillStyle(0xcfb88c, 1); g.fillRect(SET_X0, 206, 18, 342); g.fillRect(SET_X1 - 18, 206, 18, 342); g.fillRect(SET_X0, 558, 18, 342); g.fillRect(SET_X1 - 18, 558, 18, 342);
    /* the sign */
    g.fillStyle(0x1f4a3a, 1); g.fillRoundedRect(840, 238, 320, 58, 8); g.lineStyle(4, 0xe8c04a, 1); g.strokeRoundedRect(846, 244, 308, 46, 6);
    /* upper windows, with green shutters */
    [450, 560, 1440, 1550].forEach(function (wx) {
      g.fillStyle(0x6a4a2e, 1); g.fillRect(wx - 34, 314, 68, 116);
      g.fillStyle(0x2e3e5a, 1); g.fillRect(wx - 28, 320, 56, 104);
      g.fillStyle(0x4e6a94, 0.6); g.fillRect(wx - 28, 320, 26, 50); g.fillRect(wx + 2, 374, 26, 50);
      g.fillStyle(0x6a4a2e, 1); g.fillRect(wx - 2, 320, 4, 104); g.fillRect(wx - 28, 370, 56, 4);
      g.fillStyle(0x3f6b4f, 1); g.fillRect(wx - 56, 314, 20, 116); g.fillRect(wx + 36, 314, 20, 116);
      g.lineStyle(2, 0x2a4a36, 1); for (i = 0; i < 9; i++) { g.lineBetween(wx - 56, 322 + i * 12, wx - 36, 322 + i * 12); g.lineBetween(wx + 36, 322 + i * 12, wx + 56, 322 + i * 12); }
      g.fillStyle(0xb69a6c, 1); g.fillRect(wx - 42, 430, 84, 10);
      g.fillStyle(0xc0503a, 1); g.fillRect(wx - 30, 440, 60, 18); g.fillStyle(0x4a8a3a, 1); g.fillCircle(wx - 18, 438, 9); g.fillCircle(wx, 434, 10); g.fillCircle(wx + 18, 438, 9);
    });
    /* the French doors behind the balcony */
    [745, 905, 1095, 1255].forEach(function (dx) {
      g.fillStyle(0x6a4a2e, 1); g.fillRect(dx - 40, 352, 80, 196); g.fillCircle(dx, 352, 40);
      g.fillStyle(0x2e3e5a, 1); g.fillRect(dx - 33, 358, 66, 190); g.fillCircle(dx, 358, 33);
      g.fillStyle(0xf2c28a, 0.35); g.fillRect(dx - 33, 400, 30, 60);
      g.fillStyle(0x6a4a2e, 1); g.fillRect(dx - 2, 330, 4, 218); g.fillRect(dx - 33, 430, 66, 4); g.fillRect(dx - 33, 490, 66, 4);
    });
    /* the ground floor: shop windows under striped awnings, the hotel's doors, lamps and plants */
    [560, 760, 1240, 1440].forEach(function (sx, j) {
      g.fillStyle(0x5a3a26, 1); g.fillRect(sx - 72, 650, 144, 196);
      g.fillStyle(0x223048, 1); g.fillRect(sx - 64, 658, 128, 150);
      g.fillStyle(0xf2c28a, 0.22); g.fillRect(sx - 64, 658, 128, 150);
      g.fillStyle(0x5a3a26, 1); g.fillRect(sx - 2, 658, 4, 150); g.fillRect(sx - 72, 808, 144, 38);
      var col = [0xc0303a, 0x2a6a9a, 0x2a8a5a, 0xc07a2a][j];
      for (i = 0; i < 8; i++) { g.fillStyle(i % 2 ? 0xf4efe6 : col, 1); g.fillTriangle(sx - 84 + i * 21, 600, sx - 84 + (i + 1) * 21, 600, sx - 84 + i * 21 + 10.5, 652); g.fillRect(sx - 84 + i * 21, 600, 21, 30); }
      g.fillStyle(0x3a2a20, 1); g.fillRect(sx - 86, 596, 172, 6);
    });
    g.fillStyle(0x6a4a2e, 1); g.fillRect(930, 640, 140, 260); g.fillCircle(1000, 640, 70);
    g.fillStyle(0x7a2a2e, 1); g.fillRect(940, 652, 58, 248); g.fillRect(1002, 652, 58, 248);
    g.fillStyle(0x2e3e5a, 1); g.fillRect(950, 670, 38, 80); g.fillRect(1012, 670, 38, 80);
    g.fillStyle(0xe8c04a, 1); g.fillCircle(990, 790, 5); g.fillCircle(1010, 790, 5);
    g.fillStyle(0x8a8478, 1); g.fillRect(910, 890, 180, 10);
    [470, 1530].forEach(function (lx) {
      g.fillStyle(0x1c1c22, 1); g.fillRect(lx - 4, 660, 8, 240); g.fillRect(lx - 14, 886, 28, 14);
      g.fillStyle(0x1c1c22, 1); g.fillRect(lx - 14, 616, 28, 6); g.fillTriangle(lx - 16, 618, lx + 16, 618, lx, 600);
      g.fillStyle(0xffe7a0, 1); g.fillRect(lx - 11, 622, 22, 32); g.fillStyle(0x1c1c22, 1); g.fillRect(lx - 14, 654, 28, 6);
    });
    [880, 1120].forEach(function (px) { g.fillStyle(0x9a5a3a, 1); g.fillRect(px - 16, 860, 32, 40); g.fillStyle(0x3a7a3a, 1); g.fillCircle(px, 842, 22); g.fillCircle(px - 12, 830, 14); g.fillCircle(px + 12, 830, 14); });
    /* off the set: the stage door with its QUIET ON SET light, two lamps on stands */
    g.fillStyle(0x3a3a42, 1); g.fillRect(56, 650, 120, 250); g.fillStyle(0x4a4a54, 1); g.fillRect(66, 660, 100, 240);
    g.fillStyle(0xb0b0b8, 1); g.fillRect(150, 780, 10, 30);
    g.fillStyle(0x2a2a30, 1); g.fillCircle(116, 586, 13);
    [[250, 1], [1750, -1]].forEach(function (q) {
      var sx = q[0], sd = q[1];
      g.lineStyle(5, 0x2a2a30, 1); g.lineBetween(sx, 900, sx, 560); g.lineBetween(sx, 820, sx - 40, 900); g.lineBetween(sx, 820, sx + 40, 900);
      g.fillStyle(0x24242a, 1); g.fillRoundedRect(sx - 34, 512, 68, 56, 10);
      g.fillStyle(0xffeec0, 1); g.fillCircle(sx + sd * 34, 540, 20);
      g.fillStyle(0x33333a, 1); g.fillTriangle(sx + sd * 34, 512, sx + sd * 62, 494, sx + sd * 34, 530); g.fillTriangle(sx + sd * 34, 568, sx + sd * 62, 586, sx + sd * 34, 550);
    });
  }
  function drawRail(g) {
    /* the balcony slab, its brackets and the railing in front of the balcony actors */
    g.fillStyle(0x8a6a4a, 1); g.fillRect(BAL_X0 - 20, BAL, BAL_X1 - BAL_X0 + 40, 16);
    g.fillStyle(0x6a4a2e, 1); g.fillRect(BAL_X0 - 24, BAL - 4, BAL_X1 - BAL_X0 + 48, 6);
    for (var x = BAL_X0; x <= BAL_X1; x += 100) { g.fillStyle(0x8a6a4a, 1); g.fillTriangle(x - 8, BAL + 16, x + 8, BAL + 16, x, BAL + 54); }
    g.fillStyle(0x2a2a30, 1); g.fillRect(BAL_X0 - 18, BAL - 60, BAL_X1 - BAL_X0 + 36, 7); g.fillRect(BAL_X0 - 18, BAL - 14, BAL_X1 - BAL_X0 + 36, 5);
    for (x = BAL_X0 - 12; x <= BAL_X1 + 12; x += 14) { g.fillRect(x - 2, BAL - 54, 4, 42); }
    for (x = BAL_X0 + 30; x <= BAL_X1 - 20; x += 70) { g.lineStyle(2.5, 0x2a2a30, 1); g.strokeCircle(x, BAL - 34, 12); }
  }

  M.extend("director", {
    name: "Call the Shot", kind: "camera level", level: "camera level", act: "ROLL",
    how: "You are the camera operator on a soundstage, looking through the viewfinder. Actors in costume wander the street and the balcony of the set, each holding a slate (a clapperboard) with a letter. The director calls a shot for every question: a LONG SHOT (the whole actor, head to toe), a MEDIUM SHOT (from the waist up) or a CLOSE-UP (the face fills the frame). PAN turns the camera left and right, TILT turns it up and down, and ZOOM moves in tight or out wide; the readout at the bottom always names the shot you have. Put the actor with the right letter in the box in the middle (face and slate in the frame), match the director's shot, then hold ROLL and keep the camera steady until the take is done. If the actor walks, pan with them: a follow pan. Keep the boom mic, which dips down from above, and the crew, who carry things across the stage, out of the frame while you roll. Between scenes the editor joins the shots with a cut, a dissolve, a wipe, a fade or an iris, and names it.",
    rules: "A finished take of the wrong actor costs a life. So does the boom mic or a crew member coming into the frame while the camera rolls: a ruined take. Letting go of ROLL just stops the take and costs nothing. The camera won't start rolling while the boom or the crew is already in the frame.",
    keys: "◀ ▶ (A / D) pan · ▲ ▼ (W / S) tilt · Q / E, − / +, the mouse wheel or the on-screen W / T buttons zoom wide or tight · hold Space, ROLL or a mouse button to roll · or move the mouse to point the camera, and drag to follow an actor.",
    tip: "CALL THE SHOT — frame the actor with the right letter at the shot the director calls, then hold ROLL steady. Keep the boom mic and the crew out of the frame.",
    hint1: "Frame the actor holding the right letter's slate, match the director's shot, and hold ROLL until the take is done. The passage stays in the side panel.",
    hint2: "This question has two right letters. Film a take of both actors who hold them.",
    news: ["",
      "The actors walk faster and stop on their marks less: pan with your actor while the camera rolls (a follow pan).",
      "A second boom operator: two boom mics dip onto the set, from both sides.",
      "The director now calls the EXTREME LONG SHOT too: the whole set, the establishing shot. The crew crosses more often.",
      "Dutch angles: some scenes are shot with the camera canted on its side, so pan and tilt move on a slant.",
      "A heavier camera head: the camera drifts on after you let go. Ease off before the actor is centered.",
      "The crew crosses in pairs, and the boom mic likes to dip over the actor you are framing.",
      "No more arrows at the edge of the frame pointing to actors out of shot: find them yourself.",
      "Longer takes, a smaller framing box and Dutch angles on most scenes.",
      "The final cut: actors dart and stop without warning, on top of everything else."],
    params: directorParams
  }, {
    directorParams: function (n) { return directorParams(n); },

    setup_director: function () {
      ensureDirectorArt(this);
      var self = this, P = directorParams(this.night), i;
      var B = this.dr = { P: P, t: 0, actors: [], ghosts: [], booms: [], crew: [], cx: 1000, cy: 560, vh: 900, vx: 0, vy: 0, zr: 0, rot: 0, rotTo: 0,
        mt: null, lpx: null, lpy: null, keyHold: 0, wheel: 0, rec: false, needRelease: false, prog: 0, takeSubj: null, subj: null, take: 1, takes: 0,
        tc: 0, hits: 0, crewCd: P.crewEvery * 1000 * rnd(0.5, 0.8), call: null, trans: null, transOrder: shuffle(["CUT", "DISSOLVE", "WIPE", "FADE", "IRIS"]), transI: 0,
        estab: false, cutMs: 0, transLog: [], flash: null, told: {}, clapT: 0, vigKey: null, lastCall: null, status: "", statusCol: "#ffffff" };
      this.cameras.main.setBackgroundColor("#09080c");
      /* the world: a container scaled and rotated into the viewfinder */
      B.root = this.add.container(0, 0).setDepth(2);
      B.world = this.add.container(0, 0);
      B.root.add(B.world);
      B.world.add(this.add.image(0, 0, "md-director-stage").setOrigin(0, 0));
      var setG = this.add.graphics(); drawSet(setG); B.world.add(setG);
      B.sign = this.add.text(1000, 267, "GRAND HOTEL", { fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 120, color: "#f2d78a", fontStyle: "bold" }).setOrigin(0.5).setScale(0.3);
      B.world.add(B.sign);
      B.quiet = this.add.image(116, 622, "md-director-quiet").setScale(1 / 3);
      B.redGlow = this.add.image(116, 586, "md-director-glow").setTint(0xff3a2a).setBlendMode(1).setScale(1.1);
      B.redBulb = this.add.circle(116, 586, 9, 0x5a1a14);
      B.world.add([B.quiet, B.redGlow, B.redBulb]);
      B.boss = this.add.image(1880, FLOOR, "md-director-boss").setOrigin(0.5, 1).setScale(0.5);
      B.world.add(B.boss);
      B.balLayer = this.add.container(0, 0); B.world.add(B.balLayer);
      var railG = this.add.graphics(); drawRail(railG); B.world.add(railG);
      B.floorLayer = this.add.container(0, 0); B.world.add(B.floorLayer);
      /* light: lamps on stands aimed at the set, and the grid lamps from above */
      B.beams = [];
      [[250, 540, 1, 0.16], [1750, 540, -1, 0.16]].forEach(function (q) {
        var b = self.add.image(q[0] + q[2] * 34, q[1], "md-director-beam").setOrigin(0.5, 0).setBlendMode(1).setAlpha(q[3]).setScale(2.4, 1.9).setRotation(-q[2] * 1.18);
        B.world.add(b); B.beams.push(b);
      });
      [560, 1000, 1440].forEach(function (x) { var b = self.add.image(x, 112, "md-director-beam").setOrigin(0.5, 0).setBlendMode(1).setAlpha(0.07).setScale(2.2, 1.9); B.world.add(b); B.beams.push(b); });
      B.crewLayer = this.add.container(0, 0); B.world.add(B.crewLayer);
      B.boomG = this.add.graphics(); B.world.add(B.boomG);
      for (i = 0; i < 2; i++) {
        var mic = this.add.image(-500, -500, "md-director-mic").setScale(1 / 3).setVisible(false);
        B.world.add(mic);
        B.booms.push({ side: i ? -1 : 1, x: i ? 1300 : 700, tip: -160, phase: "up", t: 0, cd: (P.boomEvery * rnd(0.55, 0.85) + i * 4) * 1000, target: null, mic: mic, warned: false });
      }
      /* the viewfinder: over the world */
      B.transG = this.add.graphics().setDepth(38);
      B.vig = this.add.image(0, 0, "md-director-glow").setOrigin(0, 0).setDepth(39);
      B.hudG = this.add.graphics().setDepth(40);
      function tx(size, col, font, extra) {
        return self.add.text(0, 0, "", Object.assign({ fontFamily: font || OSD, fontSize: size, color: col || "#ffffff", fontStyle: "bold", stroke: "#000000", strokeThickness: 4 }, extra || {})).setDepth(41);
      }
      B.tx = {
        rec: tx(18, "#ffffff").setOrigin(0, 0.5), tc: tx(14, "#e8e8e8", MONO).setOrigin(0, 0.5), dutch: tx(13, "#ffd77a").setOrigin(0, 0.5),
        scene: tx(15, "#ffffff", MONO).setOrigin(1, 0.5), call: tx(18, "#ffe08a").setOrigin(0.5), callSub: tx(12, "#e8e0c8").setOrigin(0.5),
        shot: tx(26, "#ffffff").setOrigin(0.5), says: tx(13, "#e8e8e8").setOrigin(0.5), status: tx(15, "#ffffff").setOrigin(0.5),
        panL: tx(17, "#9ad8ff").setOrigin(0, 0.5).setText("◀ PAN"), panR: tx(17, "#9ad8ff").setOrigin(1, 0.5).setText("PAN ▶"),
        tiltU: tx(17, "#9ad8ff").setOrigin(0.5).setText("▲ TILT"), tiltD: tx(17, "#9ad8ff").setOrigin(0.5).setText("▼ TILT"),
        zoom: tx(15, "#9ad8ff").setOrigin(1, 0.5), follow: tx(15, "#9aefc0").setOrigin(0.5).setText("FOLLOW PAN"),
        zT: tx(18, "#ffffff").setOrigin(0.5).setText("T"), zW: tx(18, "#ffffff").setOrigin(0.5).setText("W"), zLbl: tx(11, "#d8d8d8").setOrigin(0.5).setText("ZOOM"),
        trans: tx(30, "#ffffff", MONO, { strokeThickness: 5 }).setOrigin(0.5), transSays: tx(14, "#f2f2f2").setOrigin(0.5)
      };
      B.ladder = SHOTS.slice().reverse().map(function (sh) { return tx(12, "#ffffff").setOrigin(0.5).setText(sh.short); });
      B.warn = []; for (i = 0; i < 4; i++) B.warn.push(tx(14, "#ff9a5a").setOrigin(0.5).setVisible(false));
      B.arrows = []; for (i = 0; i < 6; i++) B.arrows.push(tx(16, "#ffffff").setOrigin(0.5).setVisible(false));
      /* zoom keys of its own (no capture, so the keys still type elsewhere) */
      try { B.zk = this.input.keyboard.addKeys({ in1: "E", in2: "PLUS", in3: "NUMPAD_ADD", out1: "Q", out2: "MINUS", out3: "NUMPAD_SUBTRACT" }, false); } catch (e) { B.zk = null; }
      this.input.on("wheel", function (p, objs, dx, dy) { if (self.dr) self.dr.wheel += dy || 0; });
      this.directorLayout();
      this.makeSol(this.W / 2, 40, "down").setVisible(false);   /* the camera crew has no Sol: the sprite stays for coin pop-ups */
    },

    /* everything that depends on the canvas size */
    directorLayout: function () {
      var B = this.dr, W = this.W, H = this.H, k = B.k = clamp(Math.min(H / 700, W / 1000), 0.62, 1.3), T = B.tx;
      var key = "md-director-vig-" + W + "x" + H;
      if (B.vigKey !== key) {
        var old = B.vigKey;
        canvasTex(this, key, W, H, drawVignette);
        B.vigKey = key; B.vig.setTexture(key);
        if (old && old !== key) { try { this.textures.remove(old); } catch (e) {} }
      }
      B.inset = Math.round(14 * k);
      /* the page's own buttons (Menu, Look, music, full screen) and the on-screen pad sit over the canvas: each readout
         keeps clear of the ones in its own column (in a narrow frame the page stacks its buttons down the right side) */
      var boxes = this.directorDomBoxes(), self = this;
      B.domSig = boxes.map(function (q) { return Math.round(q.x0) + "," + Math.round(q.y0) + "," + Math.round(q.x1) + "," + Math.round(q.y1); }).join("|");
      function bottomIn(x0, x1, ymax) { var y = 0; boxes.forEach(function (q) { if (q.x1 > x0 && q.x0 < x1 && q.y0 < ymax) y = Math.max(y, q.y1); }); return y; }
      var Y = B.top = Math.max(B.inset, Math.round(bottomIn(W / 2 - 280 * k, W / 2 + 280 * k, H * 0.3) + 4 * k));
      B.topL = Math.max(B.inset, Math.round(bottomIn(0, B.inset + 200 * k, H * 0.3) + 4 * k));
      B.topR = Math.max(B.inset, Math.round(bottomIn(W - 240 * k, W, H * 0.2) + 4 * k));
      /* the zoom rocker: on the right edge, or on the left when the right is crowded */
      var r = Math.round(23 * k), span = Math.max(4 * r + 20 * k, H * 0.24), need = span + 2 * r + 16 * k;
      function place(side) {
        var zx = side > 0 ? W - B.inset - r - 10 * k : B.inset + r + 10 * k, lo = (side > 0 ? B.topR + 34 * k : B.topL + 74 * k), hi = H - B.inset;
        var obs = boxes.filter(function (q) { return q.x1 > zx - r - 8 && q.x0 < zx + r + 8; }).map(function (q) { return [q.y0, q.y1]; }).sort(function (u, v) { return u[0] - v[0]; });
        var free = [], y = lo;
        obs.forEach(function (o) { if (o[0] > y) free.push([y, Math.min(o[0], hi)]); y = Math.max(y, o[1]); });
        if (y < hi) free.push([y, hi]);
        var best = null, want = H * 0.48;
        free.forEach(function (f) { if (f[1] - f[0] < need) return; var c = clamp(want, f[0] + need / 2, f[1] - need / 2); if (!best || Math.abs(c - want) < Math.abs(best.c - want)) best = { c: c }; });
        return best ? { x: zx, t: best.c - span / 2, w: best.c + span / 2, r: r, side: side } : null;
      }
      B.zb = place(1) || place(-1) || { x: W - B.inset - r - 10 * k, t: H * 0.36, w: H * 0.6, r: r, side: 1 };
      var zx = B.zb.x, zt = B.zb.t, zw = B.zb.w;
      var pad = this.directorDomBox("#controls .dpad") || this.directorDomBox(".dpad");
      B.padTop = pad && pad.x0 < W * 0.4 ? pad.y0 : H;
      T.rec.setFontSize(Math.round(18 * k)); T.tc.setFontSize(Math.round(14 * k)); T.dutch.setFontSize(Math.round(13 * k));
      T.scene.setFontSize(Math.round(15 * k)); T.call.setFontSize(Math.round(18 * k)); T.callSub.setFontSize(Math.round(12 * k));
      T.shot.setFontSize(Math.round(26 * k)); T.says.setFontSize(Math.round(13 * k)); T.status.setFontSize(Math.round(15 * k));
      ["panL", "panR", "tiltU", "tiltD"].forEach(function (n) { T[n].setFontSize(Math.round(17 * k)); });
      T.zoom.setFontSize(Math.round(15 * k)); T.follow.setFontSize(Math.round(15 * k));
      T.zT.setFontSize(Math.round(18 * k)); T.zW.setFontSize(Math.round(18 * k)); T.zLbl.setFontSize(Math.round(11 * k));
      T.trans.setFontSize(Math.round(30 * k)); T.transSays.setFontSize(Math.round(14 * k)).setWordWrapWidth(W * 0.8);
      B.ladder.forEach(function (t) { t.setFontSize(Math.round(12 * k)); });
      B.warn.forEach(function (t) { t.setFontSize(Math.round(14 * k)); });
      B.arrows.forEach(function (t) { t.setFontSize(Math.round(16 * k)); });
      var YL = B.topL;
      T.rec.setPosition(B.inset + 30 * k, YL + 18 * k); T.tc.setPosition(B.inset + 12 * k, YL + 40 * k); T.dutch.setPosition(B.inset + 12 * k, YL + 60 * k);
      T.scene.setPosition(W - B.inset - 12 * k, B.topR + 18 * k);
      T.call.setPosition(W / 2, Y + 20 * k); T.callSub.setPosition(W / 2, Y + 42 * k);
      var by = Math.min(H - B.inset - 12 * k, B.padTop - 4 * k);
      B.readY = { shot: by - 52 * k, ladder: by - 26 * k, says: by - 6 * k };
      if (B.padTop < H) { B.readY = { shot: H - B.inset - 64 * k, ladder: H - B.inset - 38 * k, says: H - B.inset - 16 * k }; }
      T.shot.setPosition(W / 2, B.readY.shot); T.says.setPosition(W / 2, B.readY.says);
      T.zT.setPosition(zx, zt); T.zW.setPosition(zx, zw); T.zLbl.setPosition(zx, (zt + zw) / 2);
      T.trans.setPosition(W / 2, H * 0.5 - 14 * k); T.transSays.setPosition(W / 2, H * 0.5 + 20 * k);
    },
    directorDomBoxes: function () {
      var self = this, out = [];
      ["#btn-quit", "#btn-char", "#btn-music-hud", "#music-vol-hud", "#btn-fs", "#controls .dpad", "#btn-action"].forEach(function (sel) {
        var b = self.directorDomBox(sel); if (b && b.y1 > 0 && b.x1 > 0 && b.x0 < self.W && b.y0 < self.H) out.push(b);
      });
      return out;
    },
    /* an on-screen control's box in canvas pixels (null when it is not shown) */
    directorDomBox: function (sel) {
      try {
        var el = document.querySelector(sel), cv = this.game && this.game.canvas;
        if (!el || !cv) return null;
        var a = el.getBoundingClientRect(), c = cv.getBoundingClientRect();
        if (!a.width || !a.height || !c.width || !c.height) return null;
        var fx = this.W / c.width, fy = this.H / c.height;
        return { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
      } catch (e) { return null; }
    },
    resize_director: function () {
      this.directorLayout();
      this.directorClamp();
      this.directorView();
    },

    /* ── the camera: world ↔ viewfinder ── */
    directorScale: function () { return this.H / this.dr.vh; },
    directorToScreen: function (x, y) {
      var B = this.dr, s = this.H / B.vh, dx = (x - B.cx) * s, dy = (y - B.cy) * s, c = Math.cos(B.rot), sn = Math.sin(B.rot);
      return { x: this.W / 2 + dx * c - dy * sn, y: this.H / 2 + dx * sn + dy * c };
    },
    directorToWorld: function (px, py) {
      var B = this.dr, s = this.H / B.vh, dx = px - this.W / 2, dy = py - this.H / 2, c = Math.cos(B.rot), sn = Math.sin(B.rot);
      return { x: B.cx + (dx * c + dy * sn) / s, y: B.cy + (-dx * sn + dy * c) / s };
    },
    directorVhMax: function () { return Math.min(VH_MAX, WW * this.H / this.W); },
    directorClamp: function () {
      var B = this.dr, vmax = this.directorVhMax();
      B.vh = clamp(B.vh, VH_MIN, vmax);
      var vw = B.vh * this.W / this.H;
      B.cx = vw >= WW ? WW / 2 : clamp(B.cx, vw / 2, WW - vw / 2);
      B.cy = B.vh >= WH ? WH / 2 : clamp(B.cy, B.vh / 2, WH - B.vh / 2);
    },
    directorView: function () {
      var B = this.dr;
      B.root.setPosition(this.W / 2, this.H / 2).setRotation(B.rot).setScale(this.H / B.vh);
      B.world.setPosition(-B.cx, -B.cy);
      B.vig.setPosition(0, 0);
    },
    /* the shot the frame has now */
    directorShot: function () { return shotOf(this.dr.vh); },
    /* for the tests (and the establishing shot): put the camera on actor i at a shot size, at once */
    directorFrame: function (i, shotId) {
      var B = this.dr, a = B.actors[i];
      if (!a) return null;
      var sh = shotById(shotId || (B.call && B.call.shot) || "MS"), lo = sh === SHOTS[0] ? VH_MIN : SHOTS[SHOTS.indexOf(sh) - 1].max;
      B.vh = sh.id === "ELS" ? Math.min(this.directorVhMax() - 1, 640) : sh.id === "LS" ? 330 : (lo + sh.max) / 2;
      B.cx = a.x; B.cy = a.feet - (sh.id === "CU" || sh.id === "MS" ? 112 : SLATE_UP);
      B.vx = 0; B.vy = 0; B.mt = null; B.zr = 0;
      this.directorClamp(); this.directorView();
      return this.directorFramed(a);
    },
    directorIdx: function (L) { for (var i = 0; i < this.dr.actors.length; i++) if (this.dr.actors[i].letter === L) return i; return -1; },

    answers_director: function () {
      var B = this.dr, P = B.P, self = this;
      var kind = B.trans && B.trans.phase === "out" ? B.trans.kind : (B.actors.length ? "CUT" : "OPEN");
      var keep = kind === "DISSOLVE" || kind === "WIPE";
      B.ghosts.forEach(function (a) { self.directorKill(a); });
      B.ghosts = [];
      B.actors.forEach(function (a) { if (keep) { a.ghost = true; B.ghosts.push(a); } else self.directorKill(a); });
      B.actors = [];
      B.trans = { kind: kind, phase: "in", t: 0, shown: 0 };
      var letters = shuffle(this.choiceLetters().slice()), n = letters.length;
      var nBal = n >= 4 ? 2 : 1, kinds = shuffle(COSTUMES.slice()), skins = shuffle([0, 1, 2, 3, 4, 5]);
      var floorN = n - nBal, balN = nBal;
      letters.forEach(function (Lt, i) {
        var bal = i < nBal, lo = bal ? BAL_X0 + 46 : SET_X0 + 70, hi = bal ? BAL_X1 - 46 : SET_X1 - 70;
        var m = bal ? balN : floorN, j = bal ? i : i - nBal;
        var a = { letter: Lt, state: "live", bal: bal, feet: bal ? BAL : FLOOR, lo: lo, hi: hi, x: lo + (hi - lo) * (j + 0.5) / m + rnd(-30, 30),
          dir: Math.random() < 0.5 ? -1 : 1, spd: P.wander * rnd(0.85, 1.15), pause: rnd(300, 1600), walkMs: rnd(1800, 4200), ph: rnd(0, 6), kind: kinds[i % kinds.length], skin: skins[i % 6], stepT: 0 };
        a.keys = [actorKey(self, a.kind, a.skin, 0), actorKey(self, a.kind, a.skin, 1)];
        a.spr = self.add.image(a.x, a.feet, a.keys[0]).setOrigin(0.5, 1).setScale(1 / RES);
        a.slate = self.add.image(a.x, a.feet - SLATE_UP, "md-director-slate").setScale(1 / SRES);
        a.label = self.add.text(a.x, a.feet - SLATE_UP + 4, Lt, { fontFamily: OSD, fontSize: 120, color: "#f6f6ee", fontStyle: "bold" }).setOrigin(0.5).setScale(0.23);
        (bal ? B.balLayer : B.floorLayer).add([a.spr, a.slate, a.label]);
        if (self.extracted.indexOf(Lt) !== -1) a.state = "found";
        if (kind === "DISSOLVE" || kind === "WIPE") a.alpha = 0;
        self.directorPaint(a);
        B.actors.push(a);
      });
      /* the director's call */
      var pool = SHOTS.filter(function (s) { return P.calls >= 4 || s.id !== "ELS"; }).map(function (s) { return s.id; });
      var pick = shuffle(pool.filter(function (id) { return id !== B.lastCall; }))[0] || "MS";
      B.lastCall = pick;
      var dutch = P.dutchP > 0 && Math.random() < P.dutchP ? (Math.random() < 0.5 ? -1 : 1) * P.dutchDeg : 0;
      B.call = { shot: pick, dutch: dutch };
      B.rotTo = dutch * DEG;
      if (kind === "OPEN") B.rot = B.rotTo;
      /* each scene opens on the establishing shot */
      B.vh = this.directorVhMax() * 0.94; B.cx = WW / 2; B.cy = 560; B.vx = 0; B.vy = 0; B.mt = null; B.estab = false;
      this.directorClamp();
      B.rec = false; B.prog = 0; B.takeSubj = null; B.take = 1; B.needRelease = false; B.cutMs = 0;
      B.booms.forEach(function (bm) { bm.phase = "up"; bm.tip = -160; bm.cd = Math.max(bm.cd, P.boomEvery * 600); bm.warned = false; });
      B.crew.forEach(function (cr) { self.directorKillCrew(cr); }); B.crew = []; B.crewCd = Math.max(B.crewCd, P.crewEvery * 500);
      B.told.call = false;
      this.directorView();
      this.directorActors(0, 0);
    },
    directorPaint: function (a) {
      var dead = a.state === "dead", found = a.state === "found";
      a.slate.setTint(dead ? 0x8a7a7a : found ? 0xb8f0c8 : 0xffffff);
      a.label.setText(dead ? "✕" : found ? "✓" : a.letter).setColor(dead ? "#ff8a7a" : found ? "#9aefc0" : "#f6f6ee");
    },
    directorKill: function (a) { [a.spr, a.slate, a.label].forEach(function (o) { try { o.destroy(); } catch (e) {} }); },
    directorKillCrew: function (cr) { [cr.spr, cr.item].forEach(function (o) { try { o.destroy(); } catch (e) {} }); },

    tick_director: function (s, inp, ms) {
      var B = this.dr, P = B.P, k = B.k;
      B.t += s;
      B.layoutMs = (B.layoutMs || 0) - ms;
      if (B.layoutMs <= 0) {
        B.layoutMs = 1500;
        var sig = this.directorDomBoxes().map(function (q) { return Math.round(q.x0) + "," + Math.round(q.y0) + "," + Math.round(q.x1) + "," + Math.round(q.y1); }).join("|");
        if (sig !== B.domSig) this.directorLayout();
      }
      if (!B.told.start) { B.told.start = true; this.toast("PAN with ◀ ▶, TILT with ▲ ▼ and ZOOM with Q / E (or the W / T buttons). Frame the actor with the right letter, then hold ROLL.", 6000); }
      /* the zoom buttons on the screen (a press there zooms, it does not roll) */
      var p = this.ptr, zb = B.zb, onT = false, onW = false;
      if (p.down) { onT = Math.hypot(p.x - zb.x, p.y - zb.t) < zb.r + 8; onW = Math.hypot(p.x - zb.x, p.y - zb.w) < zb.r + 8; }
      var zk = B.zk, zin = onT || (zk && (zk.in1.isDown || zk.in2.isDown || zk.in3.isDown)), zout = onW || (zk && (zk.out1.isDown || zk.out2.isDown || zk.out3.isDown));
      var zoomDir = (zin ? 1 : 0) - (zout ? 1 : 0);
      this.directorCamera(s, inp, zoomDir, onT || onW);
      this.directorActors(s, ms);
      this.directorBooms(s, ms);
      this.directorCrew(s, ms);
      this.directorView();
      var roll = !!inp.fire && !onT && !onW;
      this.directorTake(s, ms, roll);
      this.directorTrans(ms);
      this.directorHud();
    },

    directorCamera: function (s, inp, zoomDir, onBtn) {
      var B = this.dr, P = B.P, p = this.ptr, dvx = 0, dvy = 0;
      if (B.estab) {
        /* between scenes the camera pulls back to the establishing shot */
        var tv = this.directorVhMax() * 0.94, e = Math.min(1, s * 3.2);
        B.vh += (tv - B.vh) * e; B.cx += (WW / 2 - B.cx) * e; B.cy += (560 - B.cy) * e; B.vx = 0; B.vy = 0; B.zr = 0;
        B.rot += (0 - B.rot) * e;
        this.directorClamp();
        B.lpx = p.x; B.lpy = p.y;
        return;
      }
      if (inp.ax || inp.ay) {
        B.mt = null; B.keyHold += s * 1000;
        var ramp = clamp(0.3 + B.keyHold / 700, 0.3, 1), sp = 0.75 * B.vh * ramp;
        dvx = inp.ax * sp; dvy = inp.ay * sp;
      } else {
        B.keyHold = 0;
        var moved = B.lpx != null && Math.abs(p.x - B.lpx) + Math.abs(p.y - B.lpy) > 2;
        var nearRocker = Math.abs(p.x - B.zb.x) < B.zb.r * 2.2 && p.y > B.zb.t - B.zb.r * 2 && p.y < B.zb.w + B.zb.r * 2;
        if (moved && !onBtn && !nearRocker) B.mt = this.directorToWorld(p.x, p.y);
        if (B.mt) {
          var dx = B.mt.x - B.cx, dy = B.mt.y - B.cy, d = Math.hypot(dx, dy);
          if (d < 0.6) B.mt = null;
          else { var sp2 = Math.min(d * 4.5, 1.3 * B.vh); dvx = dx / d * sp2; dvy = dy / d * sp2; }
        }
      }
      B.lpx = p.x; B.lpy = p.y;
      var a = Math.min(1, s / P.tau);
      B.vx += (dvx - B.vx) * a; B.vy += (dvy - B.vy) * a;
      if (Math.abs(B.vx) < 0.01 && !dvx) B.vx = 0;
      if (Math.abs(B.vy) < 0.01 && !dvy) B.vy = 0;
      B.cx += B.vx * s; B.cy += B.vy * s;
      var zr = zoomDir * 0.95;
      B.vh *= Math.exp(-zr * s);
      if (B.wheel) { B.vh *= Math.exp(clamp(B.wheel, -400, 400) * 0.0012); zr += -Math.sign(B.wheel) * 0.95; B.wheel = 0; B.wheelMs = 220; B.wheelDir = zr > 0 ? 1 : -1; }
      if (B.wheelMs > 0) { B.wheelMs -= s * 1000; if (!zr) zr = B.wheelDir * 0.95; }
      B.zr = zr;
      B.rot += (B.rotTo - B.rot) * Math.min(1, s * 2.5);
      var vx0 = B.cx, vy0 = B.cy;
      this.directorClamp();
      if (B.cx !== vx0) B.vx = 0;
      if (B.cy !== vy0) B.vy = 0;
    },

    /* the actors walk their level, stop on marks, turn round at the ends and before they bump into each other */
    directorActors: function (s, ms) {
      var B = this.dr, P = B.P, self = this;
      B.actors.forEach(function (a) {
        if (s > 0) {
          if (a.pause > 0) { a.pause -= ms; a.moving = false; }
          else {
            var spd = a.spd * (P.dart && a.dartMs > 0 ? 2.1 : 1);
            a.x += a.dir * spd * s; a.moving = true; a.walkMs -= ms;
            if (P.dart) { a.dartMs = (a.dartMs || 0) - ms; if (a.dartMs < -2500 && Math.random() < s * 0.6) a.dartMs = rnd(500, 1100); }
            if (a.x <= a.lo) { a.x = a.lo; a.dir = 1; }
            if (a.x >= a.hi) { a.x = a.hi; a.dir = -1; }
            B.actors.forEach(function (o) { if (o !== a && o.bal === a.bal && Math.abs(o.x - a.x) < 120 && (o.x - a.x) * a.dir > 0) a.dir = -a.dir; });
            if (a.walkMs <= 0) {
              a.pause = P.pauseMs * rnd(0.6, 1.3) * (P.dart ? rnd(0.3, 1) : 1);
              a.walkMs = rnd(1800, 4400) * (P.dart ? 0.6 : 1);
              if (Math.random() < 0.45) a.dir = -a.dir;
            }
          }
          a.stepT += s;
        }
        var bob = a.moving ? -Math.abs(Math.sin(a.stepT * 9 + a.ph)) * 3 : Math.sin(B.t * 2 + a.ph) * 0.6;
        var fr = a.moving ? Math.floor(a.stepT * 4.5 + a.ph) % 2 : 0;
        a.spr.setTexture(a.keys[a.moving ? 1 : 0]).setFlipX(a.moving ? fr === 1 : false).setPosition(a.x, a.feet + bob * 0.3);
        a.slate.setPosition(a.x, a.feet - SLATE_UP + bob);
        a.label.setPosition(a.x, a.feet - SLATE_UP + 4 + bob);
        if (a.alpha != null) [a.spr, a.slate, a.label].forEach(function (o) { o.setAlpha(a.alpha); });
      });
      B.ghosts.forEach(function (a) { if (a.alpha != null) [a.spr, a.slate, a.label].forEach(function (o) { o.setAlpha(a.alpha); }); });
    },

    /* the boom mics: up out of sight, a warning, a dip down over an actor, a hold, back up */
    directorBooms: function (s, ms) {
      var B = this.dr, P = B.P, self = this, g = B.boomG;
      g.clear();
      B.booms.forEach(function (bm, i) {
        if (i >= P.booms) { bm.mic.setVisible(false); bm.phase = "up"; return; }
        bm.t += ms;
        var low = bm.target ? bm.target.feet - HEAD - 30 : 200;
        if (bm.phase === "up") {
          bm.tip += (-160 - bm.tip) * Math.min(1, s * 3);
          if (!self._between && !B.estab) bm.cd -= ms;
          if (bm.cd <= 0) {
            var live = B.actors.filter(function (a) { return a.state !== "dead"; });
            var mine = B.takeSubj || B.near;
            bm.target = mine && Math.random() < P.boomFollow ? mine : live[Math.floor(Math.random() * live.length)] || null;
            if (bm.target) { bm.phase = "warn"; bm.t = 0; sfx("beep"); } else bm.cd = 2000;
          }
        } else if (bm.phase === "warn") {
          bm.x += (bm.target.x - bm.x) * Math.min(1, s * 2.5);
          if (bm.t >= P.boomWarn) { bm.phase = "down"; bm.t = 0; }
        } else if (bm.phase === "down" || bm.phase === "low") {
          bm.x += (bm.target.x - bm.x) * Math.min(1, s * 1.6);
          bm.tip += (low - bm.tip) * Math.min(1, s * 3.6);
          if (bm.phase === "down" && bm.t >= 700) { bm.phase = "low"; bm.t = 0; }
          if (bm.phase === "low" && bm.t >= P.boomLow * 1000) { bm.phase = "rise"; bm.t = 0; }
        } else if (bm.phase === "rise") {
          bm.tip += (-160 - bm.tip) * Math.min(1, s * 2.8);
          if (bm.t >= 900) { bm.phase = "up"; bm.t = 0; bm.cd = P.boomEvery * 1000 * rnd(0.75, 1.25); bm.target = null; }
        }
        var top = self.directorBoomTop(bm);
        if (bm.tip > -120) {
          g.lineStyle(7, 0x1c1c20, 1); g.lineBetween(bm.x + bm.side * 18, bm.tip - 4, top.x, top.y);
          g.lineStyle(3, 0x8a8a92, 1); g.lineBetween(bm.x + bm.side * 18, bm.tip - 4, top.x, top.y);
          g.lineStyle(4, 0x1c1c20, 1); g.lineBetween(bm.x + bm.side * 14, bm.tip, bm.x + bm.side * 30, bm.tip - 10);
        }
        bm.mic.setPosition(bm.x, bm.tip).setVisible(bm.tip > -120).setRotation(-bm.side * 0.12);
      });
    },
    directorBoomTop: function (bm) { return { x: bm.x + bm.side * 300, y: bm.tip - 440 }; },
    /* points along a boom (mic and pole) and over a crew member (body and what they carry), for the in-frame test */
    directorBoomPts: function (bm) {
      var pts = [[bm.x, bm.tip], [bm.x - 30, bm.tip], [bm.x + 30, bm.tip], [bm.x, bm.tip - 14], [bm.x, bm.tip + 14]], top = this.directorBoomTop(bm);
      for (var u = 0.02; u <= 1; u += 0.02) pts.push([bm.x + (top.x - bm.x) * u, bm.tip + (top.y - bm.tip) * u]);
      return pts;
    },
    directorCrewPts: function (cr) {
      var I = CREW_ITEM[cr.kind], pts = [], x0 = cr.x - 22 * CREW_K, x1 = cr.x + 22 * CREW_K, y0 = CREW_FEET - (CH - 22) * CREW_K, y1 = CREW_FEET, i, j;
      for (i = 0; i <= 3; i++) for (j = 0; j <= 5; j++) pts.push([x0 + (x1 - x0) * i / 3, y0 + (y1 - y0) * j / 5]);
      var ix = cr.x + cr.dir * I.dx * CREW_K, iy = CREW_FEET - I.dy * CREW_K, hw = I.w * CREW_K / 2, hh = I.h * CREW_K / 2;
      for (i = 0; i <= 4; i++) for (j = 0; j <= 3; j++) pts.push([ix - hw + 2 * hw * i / 4, iy - hh + 2 * hh * j / 3]);
      return pts;
    },
    /* the crew member's body and what they carry, as world rectangles [x0, y0, x1, y1] */
    directorCrewRects: function (cr) {
      var I = CREW_ITEM[cr.kind], ix = cr.x + cr.dir * I.dx * CREW_K, iy = CREW_FEET - I.dy * CREW_K, hw = I.w * CREW_K / 2, hh = I.h * CREW_K / 2;
      return [[cr.x - 24 * CREW_K, CREW_FEET - (CH - 20) * CREW_K, cr.x + 24 * CREW_K, CREW_FEET], [ix - hw, iy - hh, ix + hw, iy + hh]];
    },
    /* does a world rectangle show in the frame (inset by m px)? Two convex quads, separating axes: exact at any Dutch angle */
    directorRectInFrame: function (r, m) {
      var W = this.W, H = this.H, self = this;
      m = m == null ? 6 : m;
      var q = [[r[0], r[1]], [r[2], r[1]], [r[2], r[3]], [r[0], r[3]]].map(function (p) { var o = self.directorToScreen(p[0], p[1]); return [o.x, o.y]; });
      var sc = [[m, m], [W - m, m], [W - m, H - m], [m, H - m]];
      var polys = [q, sc];
      for (var pi = 0; pi < 2; pi++) {
        var P = polys[pi];
        for (var i = 0; i < 4; i++) {
          var a = P[i], b = P[(i + 1) % 4], nx = a[1] - b[1], ny = b[0] - a[0];
          var lo1 = 1e18, hi1 = -1e18, lo2 = 1e18, hi2 = -1e18;
          q.forEach(function (p) { var d = p[0] * nx + p[1] * ny; lo1 = Math.min(lo1, d); hi1 = Math.max(hi1, d); });
          sc.forEach(function (p) { var d = p[0] * nx + p[1] * ny; lo2 = Math.min(lo2, d); hi2 = Math.max(hi2, d); });
          if (hi1 < lo2 || hi2 < lo1) return null;
        }
      }
      var cx = 0, cy = 0; q.forEach(function (p) { cx += p[0] / 4; cy += p[1] / 4; });
      return { x: clamp(cx, m, W - m), y: clamp(cy, m, H - m) };
    },
    directorInFrame: function (pts, m) {
      var W = this.W, H = this.H;
      m = m == null ? 6 : m;
      for (var i = 0; i < pts.length; i++) { var q = this.directorToScreen(pts[i][0], pts[i][1]); if (q.x > m && q.x < W - m && q.y > m && q.y < H - m) return q; }
      return null;
    },

    /* the crew cross the front of the stage */
    directorCrew: function (s, ms) {
      var B = this.dr, P = B.P, self = this;
      if (!this._between && !B.estab && !this._finishing) {
        B.crewCd -= ms;
        if (B.crewCd <= 0) {
          var dir = Math.random() < 0.5 ? 1 : -1;
          this.directorSpawnCrew(dir, 0);
          if (Math.random() < P.crewPair) this.directorSpawnCrew(Math.random() < 0.5 ? dir : -dir, Math.random() < 0.5 ? 190 : 0);
          B.crewCd = P.crewEvery * 1000 * rnd(0.7, 1.3);
        }
      }
      for (var i = B.crew.length - 1; i >= 0; i--) {
        var cr = B.crew[i];
        cr.x += cr.dir * cr.spd * s; cr.t += s;
        var fr = Math.floor(cr.t * 5) % 2, I = CREW_ITEM[cr.kind];
        cr.spr.setTexture("md-director-crew-" + cr.skin + "-" + fr).setPosition(cr.x, CREW_FEET + (fr ? -2 : 0)).setFlipX(cr.dir < 0);
        cr.item.setPosition(cr.x + cr.dir * I.dx * CREW_K, CREW_FEET - I.dy * CREW_K + (fr ? -2 : 0)).setFlipX(cr.dir < 0 && cr.kind !== "flat");
        if ((cr.dir > 0 && cr.x > WW + 260) || (cr.dir < 0 && cr.x < -260)) { self.directorKillCrew(cr); B.crew.splice(i, 1); }
      }
    },
    directorSpawnCrew: function (dir, back) {
      var B = this.dr, P = B.P, kind = CREW_KINDS[Math.floor(Math.random() * CREW_KINDS.length)], skin = Math.random() < 0.5 ? 0 : 1;
      var cr = { dir: dir, x: dir > 0 ? -200 - back : WW + 200 + back, spd: P.crewSpd * rnd(0.85, 1.15), kind: kind, skin: skin, t: rnd(0, 1), warned: false };
      cr.spr = this.add.image(cr.x, CREW_FEET, "md-director-crew-" + skin + "-0").setOrigin(0.38, 1).setScale(CREW_K / CRES);
      cr.item = this.add.image(cr.x, CREW_FEET, "md-director-item-" + kind).setScale(CREW_K / CRES);
      B.crewLayer.add([cr.spr, cr.item]);
      B.crew.push(cr);
      return cr;
    },

    /* is actor a framed: face and slate in the frame, the slate's centre in the box? */
    directorFramed: function (a) {
      var B = this.dr, W = this.W, H = this.H, m = 3;
      var pts = [[a.x, a.feet - HEAD], [a.x - SW / 2, a.feet - SLATE_UP - SH / 2], [a.x + SW / 2, a.feet - SLATE_UP - SH / 2], [a.x - SW / 2, a.feet - SLATE_UP + SH / 2], [a.x + SW / 2, a.feet - SLATE_UP + SH / 2]];
      var inFrame = true, self = this;
      pts.forEach(function (q) { var p = self.directorToScreen(q[0], q[1]); if (p.x < m || p.x > W - m || p.y < m || p.y > H - m) inFrame = false; });
      var c = this.directorToScreen(a.x, a.feet - SLATE_UP), bw = B.P.box * H, bh = Math.max(bw * 1.6, H * 0.3);
      var inBox = Math.abs(c.x - W / 2) <= bw && Math.abs(c.y - H / 2) <= bh;
      var vis = c.x > -20 && c.x < W + 20 && c.y > -20 && c.y < H + 20;
      return { inFrame: inFrame, inBox: inBox, x: c.x, y: c.y, vis: vis, ok: inFrame && inBox };
    },
    /* what is in the frame that shouldn't be: a boom (low or coming down) or a crew member */
    directorHazard: function () {
      var B = this.dr, i, q;
      for (i = 0; i < B.booms.length; i++) { var bm = B.booms[i]; if (i < B.P.booms && bm.tip > -120 && (q = this.directorInFrame(this.directorBoomPts(bm)))) return { kind: "boom", obj: bm, x: q.x, y: q.y }; }
      for (i = 0; i < B.crew.length; i++) {
        var cr = B.crew[i], rs = this.directorCrewRects(cr);
        for (var j = 0; j < rs.length; j++) if ((q = this.directorRectInFrame(rs[j]))) return { kind: "crew", obj: cr, x: q.x, y: q.y };
      }
      return null;
    },

    /* ── the take ── */
    directorTake: function (s, ms, roll) {
      var B = this.dr, P = B.P, self = this;
      if (B.cutMs > 0) B.cutMs -= ms;
      if (B.flash) { B.flash.t -= ms; if (B.flash.t <= 0) B.flash = null; }
      var hz = B.hz = this.directorHazard();
      /* who is framed */
      var list = [], best = null, bestD = 1e9;
      B.actors.forEach(function (a) {
        a.fr = self.directorFramed(a);
        if (a.fr.ok) list.push(a);
        var d = Math.hypot(a.fr.x - self.W / 2, a.fr.y - self.H / 2);
        if (d < bestD) { bestD = d; best = a; }
      });
      B.subj = list.length === 1 ? list[0] : null; B.many = list.length > 1; B.near = B.subj || (best && best.fr.vis ? best : null);
      var shot = shotOf(B.vh), want = B.call ? B.call.shot : "MS";
      var speed = Math.hypot(B.vx, B.vy) / B.vh + Math.abs(B.zr) * 0.45;
      B.shaky = speed > P.steady;
      /* why the take can't run (for the status line) */
      var why = null;
      if (!B.subj) why = B.many ? "many" : (B.near && B.near.fr.inBox && !B.near.fr.inFrame ? "show" : B.near && B.near.fr.inFrame ? "center" : "none");
      else if (B.subj.state === "dead") why = "dead";
      else if (B.subj.state === "found") why = "found";
      else if (shot.id !== want) why = "shot";
      else if (B.shaky) why = "shaky";
      B.why = why;
      var busy = this._between || this._finishing || B.estab || (B.trans && B.trans.phase === "in" && B.trans.t < 300);
      if (!roll) { if (B.rec) this.directorStop(); B.needRelease = false; }
      else if (!B.rec && !B.needRelease && !busy) {
        if (hz) {
          B.blocked = 400;
          if (!B.told.blocked) { B.told.blocked = true; this.toast(hz.kind === "boom" ? "The boom mic is in the frame: the camera won't roll. Tilt down, zoom in tighter or wait for it to go up." : "A crew member is in the frame: the camera won't roll. Wait for them to pass.", 3600); }
        } else this.directorRoll();
      }
      if (B.blocked > 0) B.blocked -= ms;
      if (B.rec) {
        if (hz) { this.directorRuin(hz); return; }
        B.tc += s;
        if (!why) {
          if (B.takeSubj !== B.subj) { B.takeSubj = B.subj; B.prog = 0; }
          B.prog += ms / P.rollMs;
          if (B.prog >= 1) this.directorPrint();
        } else {
          B.prog = Math.max(0, B.prog - P.decay * 0.5 * s);
          if (why === "shot" && !B.told.shot) { B.told.shot = true; this.toast("The director wants a " + shotById(want).name + ". Watch the readout at the bottom and zoom until it says so.", 3800); }
          if (why === "shaky" && !B.told.shaky) { B.told.shaky = true; this.toast("Too shaky! The take only records while the camera moves slowly and smoothly.", 3200); }
        }
      } else B.prog = Math.max(0, B.prog - P.decay * s);
    },
    directorRoll: function () {
      var B = this.dr;
      B.rec = true; B.clapT = 1; B.recT = 0;
      sfx("clap"); sfx("roll");
      if (!B.told.roll) { B.told.roll = true; this.toast("ROLLING! Keep the actor in the box, keep the shot the director called, and hold steady until the take is done.", 3600); }
    },
    directorStop: function () {
      var B = this.dr;
      B.rec = false;
      if (B.prog > 0.05 && !this._between) { B.cutMs = 900; B.cutText = "CUT."; }
    },
    /* the take is done: it picks the framed actor's letter */
    directorPrint: function () {
      var B = this.dr, a = B.subj, c = this.directorToScreen(a.x, a.feet - SLATE_UP);
      B.rec = false; B.needRelease = true; B.prog = 0; B.takes += 1; B.take += 1; B.takeSubj = null;
      sfx("clap");
      var res = this.answerPick(a.letter, c.x, c.y);
      if (res === "wrong") {
        a.state = "dead"; this.directorPaint(a);
        B.cutMs = 1600; B.cutText = "CUT! WRONG ACTOR";
      } else if (res === "partial") {
        a.state = "found"; this.directorPaint(a);
        B.cutMs = 1600; B.cutText = "CUT! PRINT IT! ONE MORE";
      }
      return res;
    },
    /* the boom or the crew came into the frame while the camera rolled */
    directorRuin: function (hz) {
      var B = this.dr, P = B.P;
      B.rec = false; B.needRelease = true; B.prog = 0; B.take += 1; B.takeSubj = null;
      sfx("buzz");
      B.flash = { kind: hz.kind, obj: hz.obj, t: 1300 };
      B.cutMs = 1500; B.cutText = hz.kind === "boom" ? "CUT! BOOM IN SHOT" : "CUT! CREW IN SHOT";
      if (this.loseLife("hit", hz.kind === "boom" ? "BOOM IN SHOT" : "CREW IN SHOT")) B.hits += 1;
      if (!B.told["ruin" + hz.kind]) {
        B.told["ruin" + hz.kind] = true;
        this.toast(hz.kind === "boom" ? "The boom mic dipped into the frame and ruined the take! When BOOM ▼ shows, zoom in tighter, tilt down or let go of ROLL." :
          "A crew member walked into the shot and ruined the take! When CREW shows at the edge, let them pass before you roll.", 4200);
      }
    },

    /* a right answer: cut, print, and the camera pulls back while the editor joins the next scene */
    clear_director: function () {
      var B = this.dr;
      B.rec = false; B.needRelease = true; B.prog = 0; B.takeSubj = null;
      B.estab = true;
      var kind = B.transOrder[B.transI % B.transOrder.length]; B.transI += 1;
      B.trans = { kind: kind, phase: "out", t: 0, shown: 0 };
      B.cutMs = 1700; B.cutText = "CUT! PRINT IT!";
      B.booms.forEach(function (bm) { if (bm.phase !== "up") { bm.phase = "rise"; bm.t = 0; } });
      sfx("whoosh");
    },

    directorTrans: function (ms) {
      var B = this.dr, T = B.trans, g = B.transG, W = this.W, H = this.H, k = B.k;
      g.clear();
      if (!T) { B.tx.trans.setVisible(false); B.tx.transSays.setVisible(false); return; }
      T.t += ms;
      var R = Math.hypot(W, H) / 2 + 10, u;
      if (T.phase === "out") {
        if (T.kind === "FADE") { g.fillStyle(0x000000, clamp(T.t / 650, 0, 1)); g.fillRect(0, 0, W, H); }
        else if (T.kind === "IRIS") { u = clamp(T.t / 700, 0, 1); var r0 = R * (1 - u); g.lineStyle(R * 2 + 4, 0x000000, 1); g.strokeCircle(W / 2, H / 2, r0 + R + 2); if (u >= 1) { g.fillStyle(0x000000, 1); g.fillRect(0, 0, W, H); } }
      } else {
        var self = this;
        if (T.kind === "OPEN") { g.fillStyle(0x000000, clamp(1 - T.t / 1100, 0, 1)); g.fillRect(0, 0, W, H); }
        else if (T.kind === "FADE") { g.fillStyle(0x000000, clamp(1 - T.t / 750, 0, 1)); g.fillRect(0, 0, W, H); }
        else if (T.kind === "IRIS") { u = clamp(T.t / 850, 0, 1); g.lineStyle(R * 2 + 4, 0x000000, 1); g.strokeCircle(W / 2, H / 2, R * u + R + 2); }
        else if (T.kind === "DISSOLVE") {
          u = clamp(T.t / 1000, 0, 1);
          B.actors.forEach(function (a) { a.alpha = u; }); B.ghosts.forEach(function (a) { a.alpha = 1 - u; });
        } else if (T.kind === "WIPE") {
          u = clamp(T.t / 900, 0, 1);
          var lx = -20 + (W + 40) * u;
          B.actors.forEach(function (a) { a.alpha = self.directorToScreen(a.x, a.feet - 90).x < lx ? 1 : 0; });
          B.ghosts.forEach(function (a) { a.alpha = self.directorToScreen(a.x, a.feet - 90).x < lx ? 0 : 1; });
          if (u < 1) { g.fillStyle(0xffffff, 0.12); g.fillRect(lx - 26 * k, 0, 26 * k, H); g.fillStyle(0xffffff, 0.85); g.fillRect(lx - 3 * k, 0, 6 * k, H); }
        }
        var end = T.kind === "OPEN" ? 1100 : T.kind === "CUT" ? 0 : 1000;
        if (T.t >= end && !T.done) {
          T.done = true;
          B.ghosts.forEach(function (a) { self.directorKill(a); }); B.ghosts = [];
          B.actors.forEach(function (a) { a.alpha = null; [a.spr, a.slate, a.label].forEach(function (o) { o.setAlpha(1); }); });
        }
        if (T.t >= Math.max(end, 2400)) { B.trans = null; B.tx.trans.setVisible(false); B.tx.transSays.setVisible(false); return; }
      }
      var info = TRANS[T.kind];
      if (!T.logged) { T.logged = true; B.transLog.push({ kind: T.kind, head: info.head, says: info.says }); if (B.transLog.length > 12) B.transLog.shift(); }
      var fade = T.phase === "in" ? clamp((2400 - T.t) / 500, 0, 1) : clamp(T.t / 200, 0, 1);
      B.tx.trans.setText(info.head).setVisible(true).setAlpha(fade).setPosition(W / 2, H * 0.5 - 14 * k);
      B.tx.transSays.setText(info.says).setVisible(true).setAlpha(fade).setPosition(W / 2, H * 0.5 + 20 * k);
      if (T.phase === "in" && !T.toldCall && T.t > 300) {
        T.toldCall = true;
        var sh = shotById(B.call.shot);
        this.toast("Scene " + (this.round || 1) + ". The director calls " + (B.call.dutch ? "a DUTCH ANGLE " : "a ") + sh.name + ": " + sh.says + ".", 4200);
      }
    },

    /* ── the viewfinder, drawn every frame ── */
    directorHud: function () {
      var B = this.dr, P = B.P, g = B.hudG, W = this.W, H = this.H, k = B.k, T = B.tx, self = this, i;
      g.clear();
      var I = B.inset, L = 34 * k;
      /* rule-of-thirds lines and the corner marks */
      g.lineStyle(1, 0xffffff, 0.12);
      g.lineBetween(W / 3, I, W / 3, H - I); g.lineBetween(W * 2 / 3, I, W * 2 / 3, H - I); g.lineBetween(I, H / 3, W - I, H / 3); g.lineBetween(I, H * 2 / 3, W - I, H * 2 / 3);
      g.lineStyle(3 * k, 0xffffff, 0.85);
      [[I, I, 1, 1], [W - I, I, -1, 1], [I, H - I, 1, -1], [W - I, H - I, -1, -1]].forEach(function (q) { g.lineBetween(q[0], q[1], q[0] + q[2] * L, q[1]); g.lineBetween(q[0], q[1], q[0], q[1] + q[3] * L); });
      if (B.rec) { g.lineStyle(2 * k, 0xff3a2a, 0.55); g.strokeRect(I * 0.5, I * 0.5, W - I, H - I); }
      /* the framing box */
      var bw = P.box * H, bh = Math.max(bw * 1.6, H * 0.3), cx = W / 2, cy = H / 2, bl = 16 * k;
      var col = B.hz && !B.rec ? 0xff7a5a : B.subj && !B.why ? (B.rec ? 0xffd34a : 0x7aefa8) : 0xffffff;
      var al = B.subj ? 0.95 : 0.6;
      g.lineStyle(2.5 * k, col, al);
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(function (q) { var x = cx + q[0] * bw, y = cy + q[1] * bh; g.lineBetween(x, y, x - q[0] * bl, y); g.lineBetween(x, y, x, y - q[1] * bl); });
      g.lineStyle(1.5 * k, 0xffffff, 0.55); g.lineBetween(cx - 8 * k, cy, cx + 8 * k, cy); g.lineBetween(cx, cy - 8 * k, cx, cy + 8 * k);
      /* the take meter under the box */
      var my = cy + bh + 12 * k, mh = 8 * k;
      if (B.rec || B.prog > 0.01) {
        g.fillStyle(0x000000, 0.55); g.fillRect(cx - bw - 2, my - 2, bw * 2 + 4, mh + 4);
        g.fillStyle(B.why ? 0x9a8a6a : 0xffd34a, 1); g.fillRect(cx - bw, my, bw * 2 * clamp(B.prog, 0, 1), mh);
        g.lineStyle(1.2 * k, 0xffffff, 0.8); g.strokeRect(cx - bw, my, bw * 2, mh);
      }
      /* the status line */
      var st = "", sc = "#ffffff", near = B.near;
      if (B.cutMs > 0 && B.cutText) { st = B.cutText; sc = /WRONG|BOOM|CREW/.test(B.cutText) ? "#ff9a7a" : "#9aefc0"; }
      else if (this._between || B.estab) st = "";
      else if (B.rec) {
        sc = "#ffd34a";
        st = ({ none: "ROLLING · frame an actor in the box", center: "ROLLING · center the actor in the box", show: "ROLLING · show the face and the slate",
          many: "ROLLING · two actors in the box: frame just one", dead: "ROLLING · that actor already had a bad take", found: "ROLLING · that take is already in the can",
          shot: "ROLLING · the director wants a " + shotById(B.call.shot).name + ": ZOOM " + (shotOf(B.vh).max > shotById(B.call.shot).max ? "IN (E)" : "OUT (Q)"),
          shaky: "ROLLING · too shaky: hold steady" })[B.why] || ("ROLLING · " + (B.subj && B.subj.moving ? "follow the actor · " : "") + "hold it… " + Math.round(B.prog * 100) + "%");
        if (B.why) sc = "#ffb87a";
      } else if (B.hz) { sc = "#ff9a7a"; st = B.hz.kind === "boom" ? "BOOM MIC IN THE FRAME: it won't roll" : "CREW IN THE FRAME: wait for them to pass"; }
      else if (B.needRelease) st = "Let go of ROLL, then roll again";
      else if (B.subj && !B.why) { sc = "#9aefc0"; st = "FRAMED: hold ROLL (Space) to roll"; }
      else if (B.why === "shot") { sc = "#ffe08a"; st = "Framed · now ZOOM " + (shotOf(B.vh).max > shotById(B.call.shot).max ? "IN (E) to a " : "OUT (Q) to a ") + shotById(B.call.shot).name; }
      else if (B.why === "dead") { sc = "#ff9a7a"; st = "That actor's take was wrong: frame another"; }
      else if (B.why === "found") { sc = "#9aefc0"; st = "That take is in the can: frame the other right actor"; }
      else if (B.why === "many") st = "Two actors in the box: frame just one";
      else if (B.why === "show") st = "Show the face and the slate: tilt or zoom out";
      else if (B.why === "center") st = "Center the actor in the box";
      else st = "Frame an actor in the box";
      T.status.setText(st).setColor(sc).setPosition(cx, my + mh + 16 * k).setVisible(!!st);
      /* REC and the timecode */
      var blink = Math.floor(B.t * 2) % 2 === 0;
      T.rec.setText(B.rec ? "REC" : "STBY").setColor(B.rec ? "#ff4a3a" : "#e8e8e8");
      if (B.rec && blink) { g.fillStyle(0xff3a2a, 1); g.fillCircle(I + 19 * k, B.topL + 18 * k, 7 * k); }
      else if (!B.rec) { g.lineStyle(2 * k, 0xe8e8e8, 0.8); g.strokeCircle(I + 19 * k, B.topL + 18 * k, 6 * k); }
      var f = Math.floor(B.tc * 24), tcs = [Math.floor(f / 86400) % 24, Math.floor(f / 1440) % 60, Math.floor(f / 24) % 60, f % 24].map(function (v) { return (v < 10 ? "0" : "") + v; }).join(":");
      T.tc.setText("TC " + tcs);
      T.dutch.setText(Math.abs(B.rot) > 0.02 ? "DUTCH ANGLE " + Math.round(Math.abs(B.rot) / DEG) + "°" : "").setVisible(Math.abs(B.rot) > 0.02);
      /* the scene and take, and a little clapperboard */
      T.scene.setText("SCENE " + (this.round || 1) + "   TAKE " + B.take);
      var clx = T.scene.x - T.scene.width - 34 * k, cly = T.scene.y;
      if (B.clapT > 0) B.clapT = Math.max(0, B.clapT - 0.06);
      g.fillStyle(0x1a1b20, 1); g.fillRect(clx, cly - 6 * k, 26 * k, 16 * k); g.lineStyle(1.2 * k, 0xffffff, 0.9); g.strokeRect(clx, cly - 6 * k, 26 * k, 16 * k);
      var ang = -0.5 * B.clapT;
      var hx = clx, hy = cly - 7 * k, ex = hx + Math.cos(ang) * 26 * k, ey = hy + Math.sin(ang) * 26 * k;
      g.lineStyle(5 * k, 0xffffff, 1); g.lineBetween(hx, hy, ex, ey);
      g.lineStyle(2 * k, 0x111111, 1); for (i = 1; i < 4; i++) { var u = i / 4; g.lineBetween(hx + (ex - hx) * u - 2 * k, hy + (ey - hy) * u + 2.5 * k, hx + (ex - hx) * u + 2 * k, hy + (ey - hy) * u - 2.5 * k); }
      /* the director's call */
      var call = B.call ? shotById(B.call.shot) : null;
      if (call) {
        T.call.setText("DIRECTOR: “Give me a " + (B.call.dutch ? "DUTCH ANGLE " : "") + call.name + "!”");
        T.callSub.setText(call.name.charAt(0) + call.name.slice(1).toLowerCase() + ": " + call.says);
        var cw = Math.max(T.call.width, T.callSub.width) + 30 * k;
        g.fillStyle(0x000000, 0.55); g.fillRoundedRect(W / 2 - cw / 2, B.top + 4 * k, cw, 50 * k, 10 * k);
        g.lineStyle(1.5 * k, 0xffe08a, 0.6); g.strokeRoundedRect(W / 2 - cw / 2, B.top + 4 * k, cw, 50 * k, 10 * k);
      }
      T.call.setVisible(!!call); T.callSub.setVisible(!!call);
      /* the shot readout and the ladder of shot sizes */
      var shot = shotOf(B.vh), match = call && shot.id === call.id;
      T.shot.setText(shot.name).setColor(match ? "#9aefc0" : "#ffffff");
      T.says.setText(shot.says);
      var lw = 64 * k, lh = 20 * k, ly = B.readY.ladder, n = B.ladder.length;
      g.fillStyle(0x000000, 0.45); g.fillRoundedRect(W / 2 - Math.max(T.shot.width, lw * n) / 2 - 16 * k, B.readY.shot - 20 * k, Math.max(T.shot.width, lw * n) + 32 * k, B.readY.says - B.readY.shot + 32 * k, 10 * k);
      B.ladder.forEach(function (t, j) {
        var sh = SHOTS[SHOTS.length - 1 - j], x = W / 2 + (j - (n - 1) / 2) * lw, on = sh.id === shot.id, want = call && sh.id === call.id;
        if (on) { g.fillStyle(match ? 0x7aefa8 : 0xffffff, 0.9); g.fillRoundedRect(x - lw / 2 + 3 * k, ly - lh / 2, lw - 6 * k, lh, 5 * k); }
        if (want) { g.lineStyle(2.5 * k, 0xffd34a, 1); g.strokeRoundedRect(x - lw / 2 + 1 * k, ly - lh / 2 - 2 * k, lw - 2 * k, lh + 4 * k, 6 * k); }
        t.setPosition(x, ly).setColor(on ? "#111111" : want ? "#ffd34a" : "#d8d8d8").setStroke(on ? "#ffffff" : "#000000", on ? 0 : 3);
      });
      if (B.P.calls < 4) B.ladder[0].setAlpha(0.75); else B.ladder[0].setAlpha(1);
      /* the zoom rocker */
      var zb = B.zb, zinP = B.zr > 0, zoutP = B.zr < 0;
      [[zb.t, zinP], [zb.w, zoutP]].forEach(function (q) { g.fillStyle(q[1] ? 0x9ad8ff : 0x000000, q[1] ? 0.55 : 0.5); g.fillCircle(zb.x, q[0], zb.r); g.lineStyle(2 * k, 0xffffff, 0.85); g.strokeCircle(zb.x, q[0], zb.r); });
      var b0 = zb.t + zb.r + 8 * k, b1 = zb.w - zb.r - 8 * k;
      g.fillStyle(0x000000, 0.5); g.fillRect(zb.x - 3 * k, b0, 6 * k, b1 - b0);
      var vmax = this.directorVhMax(), zf = clamp(Math.log(vmax / B.vh) / Math.log(vmax / VH_MIN), 0, 1);
      g.fillStyle(0xffd34a, 1); g.fillRect(zb.x - 9 * k, b1 - (b1 - b0) * zf - 2 * k, 18 * k, 4 * k);
      T.zLbl.setPosition(zb.x - zb.side * 22 * k, (b0 + b1) / 2).setOrigin(zb.side > 0 ? 1 : 0, 0.5);
      /* the camera moves, named as they happen */
      var pan = Math.abs(B.vx) / B.vh > 0.035 ? Math.sign(B.vx) : 0, tilt = Math.abs(B.vy) / B.vh > 0.035 ? Math.sign(B.vy) : 0, zm = B.zr ? Math.sign(B.zr) : 0;
      if (B.estab) { pan = 0; tilt = 0; zm = 0; }
      T.panL.setVisible(pan < 0).setPosition(cx - bw - 70 * k, cy); T.panR.setVisible(pan > 0).setPosition(cx + bw + 70 * k, cy);
      T.tiltU.setVisible(tilt < 0).setPosition(cx, cy - bh - 22 * k); T.tiltD.setVisible(tilt > 0).setPosition(cx, my + mh + 42 * k);
      T.zoom.setVisible(!!zm).setText(zm > 0 ? "ZOOM IN" : "ZOOM OUT").setOrigin(zb.side > 0 ? 1 : 0, 0.5).setPosition(zb.x - zb.side * (zb.r + 10 * k), zm > 0 ? zb.t : zb.w);
      var follow = B.rec && pan && B.subj && B.subj.moving && Math.sign(B.subj.dir) === pan;
      T.follow.setVisible(!!follow).setPosition(cx, cy - bh - 20 * k);
      if (follow) T.tiltU.setVisible(false);
      if (B.estab) { T.follow.setVisible(true).setText("ESTABLISHING SHOT").setColor("#ffe08a"); } else T.follow.setText("FOLLOW PAN").setColor("#9aefc0");
      /* warnings at the edges: a boom on its way down, crew coming in */
      var wi = 0;
      function warn(x, y, txt) {
        if (wi >= B.warn.length) return;
        var t = B.warn[wi++], pulse = 0.65 + 0.35 * Math.sin(B.t * 10);
        t.setText(txt).setVisible(true).setPosition(x, y).setAlpha(pulse);
      }
      B.booms.forEach(function (bm, j) {
        if (j >= P.booms || !(bm.phase === "warn" || bm.phase === "down")) return;
        var tip = self.directorToScreen(bm.x, Math.max(bm.tip, B.cy - B.vh / 2 - 30));
        if (tip.x < -60 || tip.x > W + 60) return;
        var x = clamp(tip.x, 60 * k, W - 60 * k), y = B.top + 74 * k;
        g.fillStyle(0xff7a3a, 0.55 + 0.4 * Math.sin(B.t * 10)); g.fillTriangle(x - 10 * k, y + 12 * k, x + 10 * k, y + 12 * k, x, y + 26 * k);
        warn(x, y, "BOOM ▼");
      });
      B.crew.forEach(function (cr) {
        var c0 = self.directorToScreen(cr.x, CREW_FEET - 130), ahead = cr.dir > 0 ? c0.x < 0 : c0.x > W;
        var top = self.directorToScreen(cr.x, CREW_FEET - (CH + 10) * CREW_K).y, bot = self.directorToScreen(cr.x, CREW_FEET).y;
        var dist = cr.dir > 0 ? -c0.x : c0.x - W, spdPx = cr.spd * self.H / B.vh;
        if (!ahead || dist > spdPx * 2.2 || Math.max(top, bot) < 0 || Math.min(top, bot) > H) return;
        var x = cr.dir > 0 ? I + 50 * k : W - I - 50 * k, y = clamp((Math.max(Math.min(top, bot), 0) + Math.min(Math.max(top, bot), H)) / 2, 110 * k, H - 110 * k);
        warn(x, y, cr.dir > 0 ? "CREW ▶" : "◀ CREW");
      });
      for (; wi < B.warn.length; wi++) B.warn[wi].setVisible(false);
      /* something in the frame that shouldn't be: outline it */
      var hzo = B.flash || (B.hz ? { kind: B.hz.kind, obj: B.hz.obj } : null);
      if (hzo) {
        var pts = hzo.kind === "boom" ? this.directorBoomPts(hzo.obj).slice(0, 5) : this.directorCrewPts(hzo.obj);
        var x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
        pts.forEach(function (q) { var p = self.directorToScreen(q[0], q[1]); x0 = Math.min(x0, p.x); y0 = Math.min(y0, p.y); x1 = Math.max(x1, p.x); y1 = Math.max(y1, p.y); });
        x0 = clamp(x0, 4, W - 4); x1 = clamp(x1, 4, W - 4); y0 = clamp(y0, 4, H - 4); y1 = clamp(y1, 4, H - 4);
        g.lineStyle(3 * k, 0xff4a3a, 0.6 + 0.4 * Math.sin(B.t * 14)); g.strokeRect(x0 - 6, y0 - 6, x1 - x0 + 12, y1 - y0 + 12);
      }
      /* arrows to actors out of the frame (to level 70) */
      var ai = 0;
      if (P.arrows && !B.estab) B.actors.forEach(function (a) {
        if (a.state === "dead" || ai >= B.arrows.length) return;
        var c = self.directorToScreen(a.x, a.feet - SLATE_UP);
        if (c.x > 0 && c.x < W && c.y > 0 && c.y < H) return;
        var an = Math.atan2(c.y - H / 2, c.x - W / 2), rx = Math.min(W * (W < 800 ? 0.28 : 0.36), W / 2 - B.zb.r * 2 - 60 * k), ry = H * 0.27;
        var x = W / 2 + Math.cos(an) * rx, y = H / 2 + Math.sin(an) * ry;
        g.fillStyle(0x000000, 0.55); g.fillCircle(x, y, 15 * k);
        g.fillStyle(a.state === "found" ? 0x7aefa8 : 0xffffff, 0.95);
        var tx = x + Math.cos(an) * 22 * k, ty = y + Math.sin(an) * 22 * k;
        g.fillTriangle(tx + Math.cos(an) * 8 * k, ty + Math.sin(an) * 8 * k, tx + Math.cos(an + 2.3) * 8 * k, ty + Math.sin(an + 2.3) * 8 * k, tx + Math.cos(an - 2.3) * 8 * k, ty + Math.sin(an - 2.3) * 8 * k);
        B.arrows[ai++].setText(a.state === "found" ? "✓" : a.letter).setPosition(x, y).setVisible(true);
      });
      for (; ai < B.arrows.length; ai++) B.arrows[ai].setVisible(false);
      /* a dark plate under the transition's name */
      if (T.trans.visible) {
        var pw = Math.max(T.trans.width, T.transSays.width) + 40 * k, py0 = T.trans.y - T.trans.height / 2 - 10 * k, py1 = T.transSays.y + T.transSays.height / 2 + 10 * k;
        g.fillStyle(0x000000, 0.6 * T.trans.alpha); g.fillRoundedRect(W / 2 - pw / 2, py0, pw, py1 - py0, 10 * k);
        g.lineStyle(1.5 * k, 0xffffff, 0.35 * T.trans.alpha); g.strokeRoundedRect(W / 2 - pw / 2, py0, pw, py1 - py0, 10 * k);
      }
      /* the stage's ROLLING light by the door */
      B.redGlow.setAlpha(B.rec ? (blink ? 1 : 0.7) : 0.08); B.redBulb.setFillStyle(B.rec ? 0xff3a2a : 0x5a1a14);
    }
  });
})();
