/* SOL Labyrinth v5.21 — the Lit and Film mode "strings": Saucers on Strings (Plan 9 from Outer Space, Ed Wood, 1957).
 *
 * Bad Film vs. Good Film: the worst movie ever made, played for its goofs. A black-and-white B-movie set seen
 * through a scratchy, flickering print: a painted backdrop (its seams show, and the moon hangs on a wire), a
 * fake-turf graveyard whose corner curls up off the stage floor, and cardboard gravestones held up with tape that
 * wobble whenever anything touches them (the ladder, the stand-in, a falling saucer, the mouse). The flying
 * saucers hang on strings you can plainly see, each with a letter on its dome. They bob and swing, and later the
 * prop men slide them along the batten.
 *
 * The student is the stagehand on a rolling ladder with a big pair of shears: ◀ ▶ roll the ladder, ▲ ▼ climb,
 * Space / SNIP / a click snips. Get a saucer's string between the open blades (the string exists only above
 * its saucer, so stay high) and snip: the saucer drops with a clang and that picks its letter (answerPick).
 * The mouse moves the shears; pointing at a saucer sends them to its string. A wrong letter: "CUT! TAKE 2".
 *
 * The goofs are the hazards, each telegraphed and avoidable, each costing a life:
 *   - the caped stand-in (cape held over his face) walks in to his tape mark and back: keep the ladder off his path;
 *   - the boom mic dips into the shot (level 11 on; from 61 it follows the stagehand): climb down or roll away;
 *   - death rays (level 31 on): a saucer's lights blink and a dotted beam shows where it will fire.
 * The sky flips between day and night mid-scene (always); from level 41 the flip is a continuity error and the
 * saucers jump to new places. From 51 two stand-ins walk at once, from 71 a wind machine pushes the saucers and two
 * rays fire at once, from 81 the strings are thinner and the shears no longer glint. sosParams(n) is the one
 * difficulty curve for levels 1-100 (each level harder than the one before).
 *
 * Registered with SolModes.extend (js/modes.js); the methods are copied onto ModeScene, so `this` is the mode
 * scene. Every texture is drawn once (canvasTex) under an "md-strings-" key.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, shuffle = L.shuffle, snd = L.snd, canvasTex = L.canvasTex;

  var TAU = Math.PI * 2;
  var POSTER = "Impact, 'Arial Black', 'Trebuchet MS', sans-serif", TYPE = "'Courier New', Courier, monospace", BLOCK = "'Arial Black', 'Trebuchet MS', sans-serif";
  var SAU_W = 124, SAU_H = 64, HOOK_Y = 3, PLATE_Y = 25, SAU_BOT = 52;   /* the saucer texture; it hangs from its hook */
  var SAU_S = 0.92;                                     /* saucer scale (times k) */
  var HAND_DX = 12, HAND_DY = 100, BITE = 30;           /* the hand from the stagehand's feet; the shears' bite above the hand */
  var LAD_HALF = 30, STAND_HIT = 46, BOOM_HALF = 40, RAY_HALF = 26;
  var STONES = ["round", "cross", "slab", "obelisk", "round", "slab", "cross"];

  /* ── difficulty: one curve for every level 1-100, each level harder than the one before ── */
  function sosParams(n) {
    n = Math.max(1, Number(n) || 1);
    var late = n >= 81, last = n >= 91;
    return {
      reach: 27 - n * 0.13 - (late ? 2 : 0),                    /* half the shears' bite, px: 26.9 at 1, 12 at 100 */
      swing: 0.05 + n * 0.0016 + (n >= 21 ? 0.03 : 0),          /* the saucers swing on their strings, rad */
      swingSpd: 0.8 + n * 0.009 + (late ? 0.1 : 0),             /* rad a second */
      bob: 6 + n * 0.14,                                        /* up and down on the string, px */
      bobSpd: 1 + n * 0.008,
      drift: n >= 21 ? 24 + (n - 21) * 0.6 : 0,                  /* the prop men slide the saucers along the batten, px */
      driftSpd: 0.2 + n * 0.0025,
      standGap: 15 - n * 0.07 - (last ? 1 : 0),                 /* seconds between the stand-in's walks */
      standWarn: 2.6 - n * 0.012,                               /* the tape mark and his path show first, s */
      standSpd: 46 + n * 0.9,                                   /* his walk, px a second */
      standDepth: Math.min(0.4, 0.28 + n * 0.0016),             /* how far across the stage his mark is */
      standCount: n >= 51 ? 2 : 1,
      boomGap: n >= 11 ? 14 - (n - 11) * 0.07 - (last ? 1 : 0) : 99,   /* seconds between boom dips (99: none) */
      boomWarn: 1.9 - n * 0.009,                                /* the dashed box shows first, s */
      boomFollow: n >= 61 ? 0.35 + (n - 61) * 0.012 : 0,        /* the boom tracks the stagehand while it warns */
      rayGap: n >= 31 ? 12 - (n - 31) * 0.065 - (last ? 1 : 0) : 99,
      rayWarn: 1.7 - n * 0.006,
      rays: n >= 71 ? 2 : 1,
      flipGap: 15 - n * 0.08,                                   /* day ↔ night, s */
      shuffle: n >= 41 ? 1 : 0,                                 /* a flip is a continuity error: the saucers jump */
      wind: n >= 71 ? 18 + (n - 71) * 0.8 : 0,                  /* the wind machine's push, px at a string's length */
      glint: n < 81 ? 1 : 0,                                    /* the shears glint when a string is between the blades */
      roll: 330, climb: 2.2                                     /* the ladder's roll (px/s) and the climb (ladders/s) */
    };
  }

  /* ── art, drawn once ── */
  function path(c, pts) { c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); }
  function seeded(seed) { var s = seed % 2147483647; if (s <= 0) s += 2147483646; return function () { s = s * 16807 % 2147483647; return (s - 1) / 2147483646; }; }

  /* a 1950s flying saucer: a glass dome with a white letter plate, a wide metal disc with rim lights; it hangs from
     the hook at the top (the texture's origin) */
  function drawSaucer(c, w, h) {
    var cx = w / 2, g, i;
    c.lineJoin = "round"; c.lineCap = "round";
    /* the hook and its screw */
    c.strokeStyle = "#dedede"; c.lineWidth = 1.6; c.beginPath(); c.arc(cx, 4.5, 2.6, 0, TAU); c.stroke();
    c.fillStyle = "#6a6a6a"; c.fillRect(cx - 1.5, 7, 3, 4);
    /* the dome */
    g = c.createRadialGradient(cx - 9, 16, 2, cx, 26, 30);
    g.addColorStop(0, "#ffffff"); g.addColorStop(0.45, "#cfcfcf"); g.addColorStop(1, "#7a7a7a");
    c.fillStyle = g; c.beginPath(); c.ellipse(cx, 36, 27, 25, 0, Math.PI, 0); c.closePath(); c.fill();
    c.strokeStyle = "#1a1a1a"; c.lineWidth = 1.6; c.stroke();
    /* the disc: bright on top, dark underneath */
    g = c.createLinearGradient(0, 27, 0, 50);
    g.addColorStop(0, "#f4f4f4"); g.addColorStop(0.42, "#b4b4b4"); g.addColorStop(0.55, "#6e6e6e"); g.addColorStop(1, "#3a3a3a");
    c.fillStyle = g; c.beginPath(); c.ellipse(cx, 39, 60, 12, 0, 0, TAU); c.fill();
    c.strokeStyle = "#141414"; c.lineWidth = 1.8; c.stroke();
    c.strokeStyle = "rgba(20,20,20,0.55)"; c.lineWidth = 1; c.beginPath(); c.ellipse(cx, 39, 52, 8.5, 0, 0.05, Math.PI - 0.05); c.stroke();
    c.strokeStyle = "rgba(255,255,255,0.7)"; c.lineWidth = 1.2; c.beginPath(); c.ellipse(cx, 37.5, 55, 9.5, 0, Math.PI + 0.25, TAU - 0.25); c.stroke();
    /* the underside */
    c.fillStyle = "#2c2c2c"; c.beginPath(); c.ellipse(cx, 48, 22, 6, 0, 0, Math.PI); c.fill();
    c.strokeStyle = "#111"; c.lineWidth = 1.2; c.stroke();
    /* rivets (it is a painted hubcap, really) */
    c.fillStyle = "rgba(30,30,30,0.6)";
    for (i = 0; i < 14; i++) { var a = Math.PI * (0.06 + i * 0.0632); c.beginPath(); c.arc(cx + Math.cos(a) * 46, 39 + Math.sin(a) * 7, 0.9, 0, TAU); c.fill(); }
    /* the white letter plate on the dome */
    c.fillStyle = "#fbfbfb"; c.beginPath(); c.arc(cx, PLATE_Y, 15.5, 0, TAU); c.fill();
    c.strokeStyle = "#1a1a1a"; c.lineWidth = 1.6; c.stroke();
    /* a glass highlight */
    c.strokeStyle = "rgba(255,255,255,0.85)"; c.lineWidth = 2; c.beginPath(); c.arc(cx, 36, 22, Math.PI * 1.12, Math.PI * 1.3); c.stroke();
  }
  /* the stagehand: flat cap, rolled sleeves, overalls; the right hand raised for the shears, at (40, 8). Feet at (28, 108). */
  function drawHand(c, w, h) {
    var O = "#121212", SK = "#d4d4d4", SH = "#b8b8b8", OV = "#5a5a5a";
    c.lineCap = "round"; c.lineJoin = "round";
    function limb(pts, wd, col) {
      c.strokeStyle = O; c.lineWidth = wd + 2.4; path(c, pts); c.stroke();
      c.strokeStyle = col; c.lineWidth = wd; path(c, pts); c.stroke();
    }
    /* legs and boots */
    limb([[22, 66], [21, 100]], 8, OV); limb([[34, 66], [35, 100]], 8, OV);
    c.fillStyle = "#0e0e0e"; c.fillRect(14, 99, 13, 9); c.fillRect(30, 99, 14, 9);
    /* the shirt, the overall bib and its straps */
    c.fillStyle = SH; path(c, [[16, 40], [40, 40], [41, 68], [15, 68]]); c.closePath(); c.fill(); c.strokeStyle = O; c.lineWidth = 1.4; c.stroke();
    c.fillStyle = OV; path(c, [[19, 51], [37, 51], [39, 70], [17, 70]]); c.closePath(); c.fill(); c.stroke();
    c.strokeStyle = OV; c.lineWidth = 3; c.beginPath(); c.moveTo(20, 52); c.lineTo(19, 41); c.moveTo(36, 52); c.lineTo(37, 41); c.stroke();
    c.fillStyle = "#cfcfcf"; c.fillRect(21, 54, 3, 3); c.fillRect(32, 54, 3, 3);
    /* a coil of spare string on the belt */
    c.strokeStyle = "#e0e0e0"; c.lineWidth = 1.3;
    c.beginPath(); c.ellipse(42, 70, 5, 6, 0, 0, TAU); c.stroke(); c.beginPath(); c.ellipse(42, 70, 3, 4, 0, 0, TAU); c.stroke();
    /* the left arm, down to the ladder rail */
    limb([[17, 44], [11, 56], [9, 67]], 6, SH);
    c.fillStyle = SK; c.beginPath(); c.arc(9, 69, 3.4, 0, TAU); c.fill(); c.strokeStyle = O; c.lineWidth = 1.2; c.stroke();
    /* the right arm, raised */
    limb([[38, 44], [42, 29]], 6, SH);
    limb([[42, 29], [40, 11]], 5, SK);
    c.fillStyle = SK; c.beginPath(); c.arc(40, 9, 3.8, 0, TAU); c.fill(); c.strokeStyle = O; c.lineWidth = 1.2; c.stroke();
    /* the head, looking up at the strings */
    c.fillStyle = SK; c.fillRect(25, 32, 7, 9);
    c.beginPath(); c.arc(28, 26, 9, 0, TAU); c.fill(); c.strokeStyle = O; c.lineWidth = 1.4; c.stroke();
    path(c, [[36, 23], [39, 26], [36, 28]]); c.fill(); c.stroke();
    c.fillStyle = O; c.beginPath(); c.ellipse(32, 23.5, 1.3, 1.6, 0, 0, TAU); c.fill();
    c.strokeStyle = O; c.lineWidth = 1.1; c.beginPath(); c.moveTo(31, 30.5); c.lineTo(35, 30); c.stroke();
    /* the flat cap */
    c.fillStyle = "#4e4e4e"; c.beginPath(); c.ellipse(27, 19.5, 10, 6, 0, Math.PI, 0); c.closePath(); c.fill(); c.strokeStyle = O; c.lineWidth = 1.3; c.stroke();
    path(c, [[30, 18.5], [41, 17], [40, 20.5], [30, 20.5]]); c.closePath(); c.fillStyle = "#3a3a3a"; c.fill(); c.stroke();
  }
  /* the stand-in: a tall man in a long cape, one arm raised to hold it over his face (only his eyes show). Facing right.
     v: 0 / 1 walking, 2 his pose at the mark. Feet on the bottom edge, centre (32, 126). */
  function drawStand(v) {
    return function (c, w, h) {
      var CP = "#0c0c0c", LN = "#6c6c6c", SK = "#d4d4d4";
      c.lineCap = "round"; c.lineJoin = "round";
      var lg = v === 0 ? [[27, 94, 21, 122], [37, 94, 44, 122]] : v === 1 ? [[27, 94, 33, 122], [37, 94, 31, 122]] : [[28, 94, 25, 122], [36, 94, 40, 122]];
      lg.forEach(function (q) {
        c.strokeStyle = "#000"; c.lineWidth = 9.5; c.beginPath(); c.moveTo(q[0], q[1]); c.lineTo(q[2], q[3]); c.stroke();
        c.strokeStyle = "#262626"; c.lineWidth = 7; c.beginPath(); c.moveTo(q[0], q[1]); c.lineTo(q[2], q[3]); c.stroke();
        c.fillStyle = "#050505"; c.beginPath(); c.ellipse(q[2] + 3, q[3] + 1.5, 6, 3, 0, 0, TAU); c.fill();
      });
      /* the cape hanging behind, its grey lining showing on the trailing edge */
      var wide = v === 2 ? 6 : 0;
      c.fillStyle = CP; path(c, [[22, 30], [42, 30], [52 + wide, 70], [57 + wide, 108], [46, 104], [36, 110], [26, 104], [14, 110], [5 - wide, 108], [10 - wide, 70]]); c.closePath(); c.fill();
      c.strokeStyle = LN; c.lineWidth = 1.6; path(c, [[22, 31], [10 - wide, 70], [5 - wide, 108]]); c.stroke();
      /* the head: slicked black hair with a widow's peak */
      c.fillStyle = SK; c.beginPath(); c.arc(34, 17, 9.5, 0, TAU); c.fill();
      c.fillStyle = "#050505"; c.beginPath(); c.moveTo(24.5, 17); c.arc(34, 17, 9.8, Math.PI, TAU); c.lineTo(43.8, 15); c.lineTo(36, 11.5); c.lineTo(34.5, 15.5); c.lineTo(31, 11.5); c.closePath(); c.fill();
      c.fillStyle = "#0a0a0a"; c.beginPath(); c.ellipse(37, 18, 1.8, 1.3, 0, 0, TAU); c.fill(); c.beginPath(); c.ellipse(42, 18, 1.5, 1.2, 0, 0, TAU); c.fill();
      c.strokeStyle = "#0a0a0a"; c.lineWidth = 1.3; c.beginPath(); c.moveTo(35, 14.8); c.lineTo(39, 15.6); c.moveTo(40.5, 15.4); c.lineTo(43.5, 15); c.stroke();
      /* the raised arm and the cape across his face, below the eyes */
      var hx = v === 2 ? 57 : 53, hy = v === 2 ? 13 : 21;
      c.fillStyle = CP; path(c, [[20, 34], [hx, hy], [hx + 3, hy + 5], [50 + wide, 50], [34, 56], [16, 48]]); c.closePath(); c.fill();
      c.strokeStyle = LN; c.lineWidth = 1.5; c.beginPath(); c.moveTo(22, 33); c.lineTo(hx - 1, hy + 0.5); c.stroke();
      c.fillStyle = SK; c.beginPath(); c.arc(hx + 1.5, hy + 1, 3, 0, TAU); c.fill();
    };
  }
  /* a 1950s boom microphone on its yoke; hangs from the top (origin at the mount) */
  function drawMic(c, w, h) {
    var cx = w / 2, g;
    c.lineCap = "round"; c.lineJoin = "round";
    c.strokeStyle = "#1a1a1a"; c.lineWidth = 5.5; path(c, [[cx, 0], [cx, 7], [5, 7], [5, 34]]); c.stroke(); path(c, [[cx, 7], [w - 5, 7], [w - 5, 34]]); c.stroke();
    c.strokeStyle = "#9a9a9a"; c.lineWidth = 3; path(c, [[cx, 0], [cx, 7], [5, 7], [5, 34]]); c.stroke(); path(c, [[cx, 7], [w - 5, 7], [w - 5, 34]]); c.stroke();
    g = c.createLinearGradient(9, 0, w - 9, 0);
    g.addColorStop(0, "#f0f0f0"); g.addColorStop(0.45, "#b0b0b0"); g.addColorStop(1, "#4a4a4a");
    c.fillStyle = g; c.beginPath();
    if (c.roundRect) c.roundRect(9, 13, w - 18, h - 16, 11); else c.rect(9, 13, w - 18, h - 16);
    c.fill(); c.strokeStyle = "#141414"; c.lineWidth = 1.6; c.stroke();
    c.strokeStyle = "rgba(0,0,0,0.38)"; c.lineWidth = 1;
    for (var y = 18; y < h - 6; y += 3.2) { c.beginPath(); c.moveTo(11, y); c.lineTo(w - 11, y); c.stroke(); }
    c.fillStyle = "#2e2e2e"; c.fillRect(9, 33, w - 18, 4);
    c.fillStyle = "#d8d8d8"; c.beginPath(); c.arc(5, 35, 2.6, 0, TAU); c.fill(); c.beginPath(); c.arc(w - 5, 35, 2.6, 0, TAU); c.fill();
  }
  /* cardboard gravestones: painted grey, a light cardboard edge, crude R.I.P., masking tape at the foot */
  function drawStone(kind) {
    return function (c, w, h) {
      var bx = w / 2, by = h - 3;
      function shape(dx) {
        c.beginPath();
        if (kind === "round") { c.moveTo(bx - 24 + dx, by); c.lineTo(bx - 24 + dx, by - 54); c.arc(bx + dx, by - 54, 24, Math.PI, 0); c.lineTo(bx + 24 + dx, by); }
        else if (kind === "cross") {
          path(c, [[bx - 7 + dx, by], [bx - 7 + dx, by - 60], [bx - 22 + dx, by - 60], [bx - 22 + dx, by - 73], [bx - 7 + dx, by - 73], [bx - 7 + dx, by - 88],
            [bx + 7 + dx, by - 88], [bx + 7 + dx, by - 73], [bx + 22 + dx, by - 73], [bx + 22 + dx, by - 60], [bx + 7 + dx, by - 60], [bx + 7 + dx, by]]);
        } else if (kind === "obelisk") { path(c, [[bx - 15 + dx, by], [bx - 10 + dx, by - 78], [bx + dx, by - 94], [bx + 10 + dx, by - 78], [bx + 15 + dx, by]]); }
        else { path(c, [[bx - 28 + dx, by], [bx - 28 + dx, by - 44], [bx - 22 + dx, by - 50], [bx + 22 + dx, by - 50], [bx + 28 + dx, by - 44], [bx + 28 + dx, by]]); }
        c.closePath();
      }
      c.lineJoin = "round";
      shape(3); c.fillStyle = "#d6d0c4"; c.fill(); c.strokeStyle = "#2a2a2a"; c.lineWidth = 1.2; c.stroke();
      var g = c.createLinearGradient(0, by - 94, 0, by);
      g.addColorStop(0, "#b4b4b4"); g.addColorStop(1, "#7a7a7a");
      shape(0); c.fillStyle = g; c.fill(); c.strokeStyle = "#1e1e1e"; c.lineWidth = 1.6; c.stroke();
      /* corrugated cardboard shows through the paint */
      c.save(); shape(0); c.clip();
      c.strokeStyle = "rgba(0,0,0,0.07)"; c.lineWidth = 1;
      for (var x = 0; x < w; x += 4) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, h); c.stroke(); }
      /* a crack painted on, badly */
      c.strokeStyle = "rgba(30,30,30,0.6)"; c.lineWidth = 1.2; path(c, [[bx - 12, by - 26], [bx - 6, by - 20], [bx - 9, by - 13], [bx - 3, by - 8]]); c.stroke();
      c.restore();
      /* R.I.P. in wobbly paint */
      c.fillStyle = "#2c2c2c"; c.font = "bold 12px Georgia, serif"; c.textAlign = "center"; c.textBaseline = "middle";
      var ty = kind === "cross" ? by - 66 : kind === "obelisk" ? by - 50 : kind === "slab" ? by - 30 : by - 48;
      if (kind === "obelisk") { c.font = "bold 10px Georgia, serif"; c.fillText("R", bx, ty - 12); c.fillText("I", bx, ty); c.fillText("P", bx, ty + 12); }
      else c.fillText("R.I.P.", bx + 1, ty);
      /* a dog-eared corner and a strip of masking tape */
      if (kind === "round" || kind === "slab") {
        c.fillStyle = "#e2dccf"; path(c, [[bx + 16, by - (kind === "round" ? 72 : 50)], [bx + 25, by - (kind === "round" ? 64 : 44)], [bx + 14, by - (kind === "round" ? 62 : 41)]]); c.closePath(); c.fill();
        c.strokeStyle = "#2a2a2a"; c.lineWidth = 1; c.stroke();
      }
      c.fillStyle = "rgba(232,228,214,0.92)"; c.save(); c.translate(bx - 6, by - 4); c.rotate(-0.12); c.fillRect(-11, -4, 22, 8); c.restore();
    };
  }
  /* the clapperboard: the slate (the chalk labels) and its striped clapper stick (origin at the hinge) */
  function drawSlate(c, w, h) {
    c.fillStyle = "#151515"; c.beginPath();
    if (c.roundRect) c.roundRect(2, 2, w - 4, h - 4, 6); else c.rect(2, 2, w - 4, h - 4);
    c.fill(); c.strokeStyle = "#cfcfcf"; c.lineWidth = 2; c.stroke();
    c.strokeStyle = "rgba(235,235,235,0.85)"; c.lineWidth = 2;
    c.beginPath(); c.moveTo(10, 52); c.lineTo(w - 10, 52); c.moveTo(10, 92); c.lineTo(w - 10, 92); c.moveTo(w / 2, 52); c.lineTo(w / 2, 92); c.stroke();
    c.fillStyle = "rgba(235,235,235,0.9)"; c.font = "bold 11px 'Courier New', monospace"; c.textAlign = "left"; c.textBaseline = "top";
    c.fillText("PROD.", 12, 8); c.fillText("SCENE", 12, 56); c.fillText("TAKE", w / 2 + 8, 56); c.fillText("DIRECTOR", 12, 96);
    c.font = "bold 24px 'Courier New', monospace"; c.fillText("PLAN 9", 70, 18);
    c.font = "italic bold 15px Georgia, serif"; c.fillText("hopeful", 98, 102);
  }
  function drawClapper(c, w, h) {
    c.fillStyle = "#f2f2f2"; c.fillRect(0, 2, w, h - 4);
    c.fillStyle = "#151515";
    for (var x = -20; x < w + 20; x += 32) { path(c, [[x, h - 2], [x + 16, 2], [x + 32, 2], [x + 16, h - 2]]); c.closePath(); c.fill(); }
    c.strokeStyle = "#cfcfcf"; c.lineWidth = 2; c.strokeRect(1, 2, w - 2, h - 4);
  }
  function drawGrain(c, w, h) {
    var img = c.createImageData(w, h), d = img.data, i, v;
    for (i = 0; i < d.length; i += 4) {
      v = Math.random() < 0.5 ? 0 : 255;
      d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = Math.floor(Math.random() * Math.random() * 120);
    }
    c.putImageData(img, 0, 0);
  }
  function drawVignette(W, H) {
    return function (c) {
      var g = c.createRadialGradient(W / 2, H * 0.48, Math.min(W, H) * 0.3, W / 2, H * 0.5, Math.hypot(W, H) * 0.6);
      g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(0.65, "rgba(0,0,0,0.18)"); g.addColorStop(1, "rgba(0,0,0,0.7)");
      c.fillStyle = g; c.fillRect(0, 0, W, H);
    };
  }
  /* the set: the painted backdrop (day or night), the fake turf on the stage floor; drawn for the canvas size */
  function drawSet(B, W, H, night) {
    return function (c) {
      var k = B.k, hz = B.hzY, fy = B.floorY, r = seeded(9), g, i, x, y;
      /* the sky, painted on canvas flats */
      g = c.createLinearGradient(0, 0, 0, hz);
      if (night) { g.addColorStop(0, "#020202"); g.addColorStop(0.65, "#121212"); g.addColorStop(1, "#2e2e2e"); }
      else { g.addColorStop(0, "#8a8a8a"); g.addColorStop(0.6, "#c2c2c2"); g.addColorStop(1, "#dadada"); }
      c.fillStyle = g; c.fillRect(0, 0, W, hz + 2);
      if (night) {
        for (i = 0; i < 170; i++) {
          x = r() * W; y = r() * hz * 0.82;
          c.fillStyle = "rgba(255,255,255," + (0.25 + r() * 0.65).toFixed(2) + ")";
          c.beginPath(); c.arc(x, y, r() < 0.1 ? 1.7 : 0.9, 0, TAU); c.fill();
        }
        /* three cut-out stars on threads */
        [[0.12, 0.2], [0.48, 0.13], [0.62, 0.3]].forEach(function (q, j) {
          var sx = W * q[0], sy = hz * q[1], sr = (7 + j) * k;
          c.strokeStyle = "rgba(255,255,255,0.28)"; c.lineWidth = 1; c.beginPath(); c.moveTo(sx, 0); c.lineTo(sx, sy - sr); c.stroke();
          c.fillStyle = "#e8e8e8"; c.beginPath();
          for (var a = 0; a < 10; a++) { var rr = a % 2 ? sr * 0.42 : sr, an = -Math.PI / 2 + a * Math.PI / 5; c.lineTo(sx + Math.cos(an) * rr, sy + Math.sin(an) * rr); }
          c.closePath(); c.fill();
        });
        /* the moon: a painted disc, and it too hangs on a wire */
        x = W * 0.8; y = hz * 0.3; var R = 42 * k;
        c.strokeStyle = "rgba(255,255,255,0.35)"; c.lineWidth = 1.2; c.beginPath(); c.moveTo(x + 6 * k, 0); c.lineTo(x + 6 * k, y - R); c.stroke();
        g = c.createRadialGradient(x, y, R * 0.8, x, y, R * 2.4);
        g.addColorStop(0, "rgba(255,255,255,0.18)"); g.addColorStop(1, "rgba(255,255,255,0)");
        c.fillStyle = g; c.fillRect(x - R * 2.5, y - R * 2.5, R * 5, R * 5);
        c.fillStyle = "#e4e4e4"; c.beginPath(); c.arc(x, y, R, 0, TAU); c.fill();
        c.fillStyle = "#bdbdbd";
        [[-0.3, -0.2, 0.22], [0.25, 0.1, 0.16], [-0.05, 0.4, 0.12], [0.35, -0.35, 0.1]].forEach(function (q) { c.beginPath(); c.arc(x + q[0] * R, y + q[1] * R, q[2] * R, 0, TAU); c.fill(); });
      } else {
        x = W * 0.8; y = hz * 0.3; var Rs = 34 * k;
        g = c.createRadialGradient(x, y, Rs * 0.6, x, y, Rs * 3.2);
        g.addColorStop(0, "rgba(255,255,255,0.75)"); g.addColorStop(1, "rgba(255,255,255,0)");
        c.fillStyle = g; c.fillRect(x - Rs * 3.3, y - Rs * 3.3, Rs * 6.6, Rs * 6.6);
        c.fillStyle = "#fbfbfb"; c.beginPath(); c.arc(x, y, Rs, 0, TAU); c.fill();
        /* painted clouds with flat bottoms */
        [[0.16, 0.24, 1], [0.44, 0.14, 0.8], [0.6, 0.38, 0.7]].forEach(function (q) {
          var cx = W * q[0], cy = hz * q[1], s = q[2] * k;
          c.fillStyle = "rgba(248,248,248,0.9)"; c.beginPath();
          c.arc(cx - 40 * s, cy, 20 * s, Math.PI * 0.5, Math.PI * 1.5); c.arc(cx - 12 * s, cy - 14 * s, 26 * s, Math.PI, TAU); c.arc(cx + 22 * s, cy - 6 * s, 22 * s, Math.PI * 1.1, TAU); c.arc(cx + 46 * s, cy, 16 * s, Math.PI * 1.5, Math.PI * 0.5);
          c.closePath(); c.fill();
          c.strokeStyle = "rgba(90,90,90,0.5)"; c.lineWidth = 1.2; c.stroke();
        });
      }
      /* the seams where the painted flats meet */
      c.strokeStyle = night ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.16)"; c.lineWidth = 2;
      [0.355, 0.705].forEach(function (f) { c.beginPath(); c.moveTo(W * f, 0); c.lineTo(W * f + 3, hz); c.stroke(); });
      /* far hills */
      c.fillStyle = night ? "#1a1a1a" : "#7a7a7a"; c.beginPath(); c.moveTo(0, hz);
      for (x = 0; x <= W + 20; x += 20) c.lineTo(x, hz - 34 * k - Math.sin(x / W * 7.3) * 14 * k - Math.sin(x / W * 17) * 6 * k);
      c.lineTo(W, hz); c.closePath(); c.fill();
      /* the cardboard mausoleum on the hill: steps, two columns, a pediment and a cross; one corner is bent back */
      var mx = W * 0.24, mb = hz - 26 * k, mw = 104 * k, mh = 58 * k, col = night ? "#454545" : "#b2b2b2", dk = night ? "#0e0e0e" : "#3e3e3e", lt = night ? "#6a6a6a" : "#dedede";
      c.fillStyle = col; c.strokeStyle = dk; c.lineWidth = 1.5;
      c.fillRect(mx - mw / 2 - 14 * k, mb - 6 * k, mw + 28 * k, 6 * k); c.strokeRect(mx - mw / 2 - 14 * k, mb - 6 * k, mw + 28 * k, 6 * k);
      c.fillRect(mx - mw / 2 - 7 * k, mb - 12 * k, mw + 14 * k, 6 * k); c.strokeRect(mx - mw / 2 - 7 * k, mb - 12 * k, mw + 14 * k, 6 * k);
      c.fillRect(mx - mw / 2, mb - 12 * k - mh, mw, mh); c.strokeRect(mx - mw / 2, mb - 12 * k - mh, mw, mh);
      var pt = mb - 12 * k - mh;
      c.fillRect(mx - mw / 2 - 8 * k, pt - 7 * k, mw + 16 * k, 7 * k); c.strokeRect(mx - mw / 2 - 8 * k, pt - 7 * k, mw + 16 * k, 7 * k);
      c.beginPath(); c.moveTo(mx - mw / 2 - 8 * k, pt - 7 * k); c.lineTo(mx, pt - 34 * k); c.lineTo(mx + mw / 2 + 8 * k, pt - 7 * k); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = dk; c.fillRect(mx - 2 * k, pt - 52 * k, 4 * k, 20 * k); c.fillRect(mx - 8 * k, pt - 46 * k, 16 * k, 4 * k);
      c.beginPath(); c.moveTo(mx - 15 * k, mb - 12 * k); c.lineTo(mx - 15 * k, pt + 20 * k); c.arc(mx, pt + 20 * k, 15 * k, Math.PI, 0); c.lineTo(mx + 15 * k, mb - 12 * k); c.closePath(); c.fill();
      [-1, 1].forEach(function (sd) {
        var cx = mx + sd * 32 * k;
        c.fillStyle = lt; c.fillRect(cx - 6 * k, pt + 4 * k, 12 * k, mh - 4 * k);
        c.fillStyle = dk; c.fillRect(cx - 8 * k, pt, 16 * k, 4 * k); c.fillRect(cx - 8 * k, mb - 16 * k, 16 * k, 4 * k);
        c.strokeStyle = dk; c.lineWidth = 1; c.beginPath(); c.moveTo(cx - 2 * k, pt + 6 * k); c.lineTo(cx - 2 * k, mb - 18 * k); c.moveTo(cx + 2.5 * k, pt + 6 * k); c.lineTo(cx + 2.5 * k, mb - 18 * k); c.stroke();
      });
      c.fillStyle = lt; c.beginPath(); c.moveTo(mx + mw / 2, pt + 18 * k); c.lineTo(mx + mw / 2 + 14 * k, pt + 30 * k); c.lineTo(mx + mw / 2, pt + 40 * k); c.closePath(); c.fill();
      c.strokeStyle = dk; c.lineWidth = 1.2; c.stroke();
      /* the dead tree */
      c.strokeStyle = night ? "#0a0a0a" : "#3a3a3a"; c.lineCap = "round";
      var tx = W * 0.92, tb = hz - 20 * k;
      c.lineWidth = 9 * k; c.beginPath(); c.moveTo(tx, tb); c.quadraticCurveTo(tx - 6 * k, tb - 70 * k, tx + 4 * k, tb - 130 * k); c.stroke();
      c.lineWidth = 4 * k;
      [[-1, 50, 40, 30], [1, 80, 36, 26], [-1, 105, 30, 34], [1, 120, 22, 18]].forEach(function (q) {
        var by = tb - q[1] * k; c.beginPath(); c.moveTo(tx, by); c.quadraticCurveTo(tx + q[0] * q[2] * 0.6 * k, by - q[3] * 0.2 * k, tx + q[0] * q[2] * k, by - q[3] * k); c.stroke();
      });
      /* an iron fence along the horizon */
      c.strokeStyle = night ? "#0c0c0c" : "#454545"; c.lineWidth = 2;
      var f0 = W * 0.42, f1 = W * 0.68, fb = hz - 8 * k;
      c.beginPath(); c.moveTo(f0, fb - 16 * k); c.lineTo(f1, fb - 16 * k); c.moveTo(f0, fb - 5 * k); c.lineTo(f1, fb - 5 * k); c.stroke();
      for (x = f0; x <= f1; x += 12 * k) { c.beginPath(); c.moveTo(x, fb); c.lineTo(x, fb - 24 * k); c.stroke(); c.beginPath(); c.moveTo(x - 2.5 * k, fb - 22 * k); c.lineTo(x, fb - 28 * k); c.lineTo(x + 2.5 * k, fb - 22 * k); c.stroke(); }
      /* the stage floor */
      c.fillStyle = "#262626"; c.fillRect(0, hz, W, H - hz);
      c.strokeStyle = "rgba(0,0,0,0.6)"; c.lineWidth = 1;
      for (y = hz + 6 * k, i = 0; y < H; y += (6 + i * 1.2) * k, i++) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
      /* the fake turf mat; its front right corner curls up */
      var tf = fy + 26 * k, cw = 84 * k;
      c.fillStyle = night ? "#3a3a3a" : "#6c6c6c";
      c.beginPath(); c.moveTo(0, hz); c.lineTo(W, hz); c.lineTo(W, tf - 30 * k); c.lineTo(W - cw, tf); c.lineTo(0, tf); c.closePath(); c.fill();
      c.fillStyle = night ? "rgba(120,120,120,0.35)" : "rgba(200,200,200,0.35)";
      for (i = 0; i < 900; i++) {
        x = r() * W; y = hz + r() * (tf - hz);
        if (x > W - cw && y > tf - 30 * k * (x - (W - cw)) / cw - 2) continue;
        c.fillRect(x, y, 1, 2.5 * k);
      }
      c.fillStyle = night ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.18)";
      [[0.12, 0.45], [0.38, 0.3], [0.6, 0.5], [0.84, 0.35]].forEach(function (q) { c.beginPath(); c.ellipse(W * q[0], hz + (fy - hz) * q[1], 46 * k, 7 * k, 0, 0, TAU); c.fill(); });
      c.strokeStyle = "#141414"; c.lineWidth = 2; c.beginPath(); c.moveTo(0, tf); c.lineTo(W - cw, tf); c.stroke();
      /* the curled corner: the mat's pale underside */
      c.fillStyle = night ? "#7a7a7a" : "#b8b8b8";
      c.beginPath(); c.moveTo(W - cw, tf); c.quadraticCurveTo(W - cw * 0.35, tf - 6 * k, W, tf - 30 * k); c.lineTo(W, tf - 6 * k); c.quadraticCurveTo(W - cw * 0.4, tf + 2 * k, W - cw, tf); c.closePath(); c.fill();
      c.strokeStyle = "#141414"; c.lineWidth = 1.5; c.stroke();
      /* where the backdrop meets the floor: a dark crease */
      c.fillStyle = "rgba(0,0,0,0.45)"; c.fillRect(0, hz - 1, W, 3);
    };
  }
  function ensureArt(scene) {
    canvasTex(scene, "md-strings-saucer", SAU_W, SAU_H, drawSaucer);
    canvasTex(scene, "md-strings-hand", 56, 108, drawHand);
    for (var i = 0; i < 3; i++) canvasTex(scene, "md-strings-stand-" + i, 64, 126, drawStand(i));
    canvasTex(scene, "md-strings-mic", 40, 70, drawMic);
    ["round", "cross", "slab", "obelisk"].forEach(function (k) { canvasTex(scene, "md-strings-stone-" + k, 64, 100, drawStone(k)); });
    canvasTex(scene, "md-strings-slate", 240, 128, drawSlate);
    canvasTex(scene, "md-strings-clapper", 240, 26, drawClapper);
    canvasTex(scene, "md-strings-grain", 192, 192, drawGrain);
  }

  /* sounds (the realm kit's quiet WebAudio blips) */
  function blip(a, b, d, t, v, dl) { try { var R = window.SolRealms; if (R && R.blip) R.blip(a, b, d, t, v, dl); } catch (e) {} }
  function hiss(d, f, v, dl) { try { var R = window.SolRealms; if (R && R.hiss) R.hiss(d, f, v, dl); } catch (e) {} }
  function theremin() { blip(392, 523, 0.45, "sine", 0.045); blip(523, 466, 0.5, "sine", 0.045, 0.42); blip(466, 698, 0.8, "sine", 0.04, 0.88); blip(784, 1046, 0.45, "sine", 0.012, 0.9); }
  function ease(u) { u = clamp(u, 0, 1); return 1 - (1 - u) * (1 - u); }

  M.extend("strings", {
    name: "Saucers on Strings", kind: "B-movie snipping game", level: "snipping level", act: "SNIP",
    how: "The flying saucers in Plan 9 from Outer Space hang on strings you can plainly see, over a graveyard made of cardboard. You are the stagehand on a rolling ladder with a big pair of shears. Every saucer has a letter on its dome. Roll the ladder to the saucer with the right answer, get its string between the open blades, and snip: down it comes with a clang. A string only runs above its saucer, so stay high on the ladder. The film's famous goofs get in your way: the caped stand-in walks to his tape mark (keep your ladder off his path), the boom mic dips into the shot (climb down or roll away from the dashed box), later the saucers fire death rays down a dotted beam, and the sky keeps flipping from day to night.",
    rules: "Snipping a wrong saucer costs a life (CUT! Take two). So does the stand-in walking into your ladder, the boom mic bonking you, or a death ray. A snip that misses every string costs nothing.",
    keys: "◀ ▶ or A / D roll the ladder · ▲ ▼ or W / S climb up and down · Space, SNIP or a click snips · or move the mouse: the shears follow it, and pointing at a saucer sends them to its string.",
    tip: "SAUCERS ON STRINGS — snip the string of the saucer with the right letter. Keep clear of the stand-in, the boom mic and the rays.",
    hint1: "Snip the string of the saucer with the right letter. The passage stays in the side panel.",
    hint2: "This question has two right letters. Snip the strings of both saucers that carry them.",
    news: ["",
      "The boom mic dips into the shot! A dashed box shows where: climb down (▼) or roll out of it before it drops.",
      "The saucers swing wider, and the prop men slide them along the batten: follow the string.",
      "Death rays: a saucer's lights blink and a dotted beam shows where it will fire. Roll out of the beam.",
      "Continuity error: when the sky flips between day and night, the saucers jump to new places.",
      "The stand-in has a stand-in: two of them walk to their marks at once, one from each side.",
      "The boom operator follows you: the dashed box slides after the stagehand before the mic drops.",
      "The wind machine: gusts push every saucer one way (the WIND sign shows which). Two saucers can fire at once.",
      "Thinner strings: the shears no longer glint when a string is between the blades, and everything swings faster.",
      "Plan 9: the stand-ins, the boom mic, the rays and the day-night flips all come faster, on top of everything else."],
    params: sosParams
  }, {
    sosParams: function (n) { return sosParams(n); },

    setup_strings: function () {
      ensureArt(this);
      var P = sosParams(this.night), i, self = this;
      var S = this.sos = { P: P, t: 0, saucers: [], pieces: [], stand: [], boom: null, rays: [], scorch: [], floats: [], fog: [],
        lx: 0, c: 1, tx: null, tc: null, lock: null, lpx: null, lpy: null, prevFire: true, claimSeen: null, clicks: 0, clicksSeen: 0, pend: false, cd: 0, snipT: 0, queue: 0,
        night: true, flipT: P.flipGap, flash: 0, skyT: 0, standT: P.standGap * 0.6, boomT: P.boomGap * 0.6, rayT: P.rayGap * 0.7,
        lastHaz: -9, calm: 0, shake: 0, hits: 0, snips: 0, misses: 0, cuts: 0, take: 1, scene: 0, windTh: 0, setKey: null, vigKey: null, told: {}, slate: null, sting: false };
      this.cameras.main.setBackgroundColor("#0a0a0a");
      /* a click on the canvas counts even if it comes and goes between two frames (a slow Chromebook) */
      this.input.on("pointerdown", function () { if (self.sos === S) S.clicks += 1; });
      this.sosLayout();
      S.bg = this.add.image(0, 0, S.setKey + "-n").setOrigin(0, 0).setDepth(0);
      S.floorG = this.add.graphics().setDepth(3);
      S.ladG = this.add.graphics().setDepth(4);
      S.hand = this.add.image(0, 0, "md-strings-hand").setOrigin(0.5, 1).setDepth(5);
      S.rayG = this.add.graphics().setDepth(6);
      S.strG = this.add.graphics().setDepth(6.5);
      S.stones = [];
      for (i = 0; i < STONES.length; i++) S.stones.push({ kind: STONES[i], a: 0, w: 0, over: false, spr: this.add.image(0, 0, "md-strings-stone-" + STONES[i]).setOrigin(0.5, 1).setDepth(9) });
      S.fogG = this.add.graphics().setDepth(10);
      S.shG = this.add.graphics().setDepth(11);
      S.mic = this.add.image(-99, -99, "md-strings-mic").setOrigin(0.5, 0).setDepth(12).setVisible(false);
      S.boomG = this.add.graphics().setDepth(12);
      S.uiG = this.add.graphics().setDepth(16);
      S.txSky = this.add.text(0, 0, "", { fontFamily: TYPE, fontSize: 20, color: "#f4f4f4", fontStyle: "bold", stroke: "#000", strokeThickness: 5, align: "center" }).setOrigin(0.5).setDepth(17).setVisible(false);
      S.txStand = this.add.text(0, 0, "", { fontFamily: TYPE, fontSize: 14, color: "#ffffff", fontStyle: "bold", stroke: "#000", strokeThickness: 4 }).setOrigin(0.5, 1).setDepth(17).setVisible(false);
      S.txBoom = this.add.text(0, 0, "BOOM MIC IN THE SHOT!", { fontFamily: TYPE, fontSize: 14, color: "#ffffff", fontStyle: "bold", stroke: "#000", strokeThickness: 4 }).setOrigin(0.5, 0).setDepth(17).setVisible(false);
      S.txWind = this.add.text(0, 0, "WIND MACHINE", { fontFamily: TYPE, fontSize: 12, color: "#e8e8e8", fontStyle: "bold", stroke: "#000", strokeThickness: 3 }).setOrigin(0, 0.5).setDepth(17).setVisible(P.wind > 0);
      S.slImg = this.add.image(0, 0, "md-strings-slate").setDepth(40).setVisible(false);
      S.slStick = this.add.image(0, 0, "md-strings-clapper").setOrigin(0, 1).setDepth(40).setVisible(false);
      S.slScene = this.add.text(0, 0, "", { fontFamily: TYPE, fontSize: 22, color: "#f0f0f0", fontStyle: "bold" }).setOrigin(0.5).setDepth(41).setVisible(false);
      S.slTake = this.add.text(0, 0, "", { fontFamily: TYPE, fontSize: 22, color: "#f0f0f0", fontStyle: "bold" }).setOrigin(0.5).setDepth(41).setVisible(false);
      S.grain = this.add.tileSprite(0, 0, this.W, this.H, "md-strings-grain").setOrigin(0, 0).setDepth(50).setAlpha(0.16);
      S.vig = this.add.image(0, 0, S.vigKey).setOrigin(0, 0).setDepth(51);
      S.filmG = this.add.graphics().setDepth(52);
      for (i = 0; i < 9; i++) S.fog.push({ x: Math.random(), y: Math.random(), r: rnd(50, 110), sp: rnd(0.006, 0.018) * (i % 2 ? 1 : -1), a: rnd(0.05, 0.11) });
      S.lx = this.W * 0.5;
      this.sosPlaceStatic();
      this.makeSol(S.lx, S.floorY - 200, "up").setVisible(false);   /* the stagehand does the work; the sprite stays for coin pop-ups */
      this.sosApplyNight();
    },

    /* everything that depends on the canvas size */
    sosLayout: function () {
      var S = this.sos, W = this.W, H = this.H, k;
      k = S.k = clamp(Math.min(H / 768, W / 1000), 0.6, 1.25);
      S.floorY = Math.round(H - 64 * k);                          /* where the ladder's wheels and the stand-in's feet are */
      S.hzY = Math.round(S.floorY - 66 * k);                      /* the bottom of the painted backdrop */
      S.topBite = Math.round(Math.max(H * 0.2, 96 * k));          /* the highest the shears reach */
      S.ladTop = S.topBite + (HAND_DY + BITE) * k;                /* the stagehand's feet at the top of the ladder */
      S.feet0 = S.floorY - 12 * k;                                /* ...and on the bottom rung */
      S.ay0 = -6 * k;                                             /* the batten, just out of the shot */
      S.attHi = S.topBite + 48 * k;                               /* the saucers' hooks hang between these */
      S.attLo = Math.max(S.attHi + 60 * k, Math.min(H * 0.5, S.floorY - 260 * k));
      S.dipY = S.topBite + 92 * k;                                /* how low the boom mic dips */
      S.xMin = 44 * k; S.xMax = W - 44 * k;
      var pad = this.sosPadBox();
      if (pad && pad.y0 < S.floorY && pad.x0 < W * 0.4) S.xMin = Math.max(S.xMin, Math.min(W * 0.3, pad.x1 + LAD_HALF * k));
      var key = "md-strings-set-" + W + "x" + H;
      if (S.setKey !== key) {
        var old = S.setKey;
        canvasTex(this, key + "-n", W, H, drawSet(S, W, H, true));
        canvasTex(this, key + "-d", W, H, drawSet(S, W, H, false));
        S.setKey = key;
        if (S.bg) S.bg.setTexture(key + (S.night ? "-n" : "-d"));
        if (old && old !== key) { try { this.textures.remove(old + "-n"); this.textures.remove(old + "-d"); } catch (e) {} }
      }
      var vk = "md-strings-vig-" + W + "x" + H;
      if (S.vigKey !== vk) {
        var ov = S.vigKey;
        canvasTex(this, vk, W, H, drawVignette(W, H));
        S.vigKey = vk;
        if (S.vig) S.vig.setTexture(vk);
        if (ov && ov !== vk) { try { this.textures.remove(ov); } catch (e2) {} }
      }
    },
    /* the on-screen pad's box in canvas pixels (null when it is not shown) */
    sosPadBox: function () {
      try {
        var pad = document.querySelector("#controls .dpad") || document.querySelector(".dpad"), cv = this.game && this.game.canvas;
        if (!pad || !cv) return null;
        var a = pad.getBoundingClientRect(), c = cv.getBoundingClientRect();
        if (!a.width || !a.height || !c.width || !c.height) return null;
        var fx = this.W / c.width, fy = this.H / c.height;
        return { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
      } catch (e) { return null; }
    },
    /* the HUD buttons that sit over the canvas (Menu, Look, music, full screen), in canvas pixels */
    sosHudBoxes: function () {
      var out = [];
      try {
        var cv = this.game && this.game.canvas, c = cv.getBoundingClientRect(), fx = this.W / c.width, fy = this.H / c.height;
        Array.prototype.forEach.call(document.querySelectorAll("#stage > button, #stage > input"), function (el) {
          var a = el.getBoundingClientRect();
          if (!a.width || !a.height || el.classList.contains("hidden") || !el.offsetParent) return;
          var b = { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
          if (b.x1 > 0 && b.y1 > 0 && b.x0 < this.W && b.y0 < this.H) out.push(b);
        }, this);
      } catch (e) {}
      return out;
    },
    sosPlaceStatic: function () {
      var S = this.sos, k = S.k, W = this.W, n = S.stones.length;
      S.bg.setPosition(0, 0);
      S.stones.forEach(function (st, i) {
        st.x = W * (0.06 + 0.88 * i / (n - 1)) + (i % 2 ? 10 : -6) * k;
        st.y = S.floorY + (i % 2 ? 16 : 10) * k;
        st.spr.setScale(k * (i % 3 === 1 ? 0.84 : 0.95)).setPosition(st.x, st.y);
      });
      S.hand.setScale(k);
      S.mic.setScale(k * 0.95);
      S.txSky.setFontSize(Math.round(20 * k));
      S.txStand.setFontSize(Math.round(14 * k)); S.txBoom.setFontSize(Math.round(14 * k)); S.txWind.setFontSize(Math.round(12 * k)).setPosition(14 * k, 66 + 16 * k);
      S.slImg.setScale(k * 0.62); S.slStick.setScale(k * 0.62);
      S.slScene.setFontSize(Math.round(22 * k * 0.62 * 1.4)); S.slTake.setFontSize(Math.round(22 * k * 0.62 * 1.4));
      S.grain.setSize(this.W, this.H);
      S.vig.setPosition(0, 0);
    },
    resize_strings: function (oldW) {
      var S = this.sos, fx = oldW ? this.W / oldW : 1;
      this.sosLayout();
      this.sosPlaceStatic();
      S.lx = clamp(S.lx * fx, S.xMin, S.xMax); S.tx = null; S.tc = null; S.lock = null;
      var k = S.k;
      S.saucers.forEach(function (sau) { sau.spr.setScale(k * SAU_S); sau.txt.setFontSize(Math.round(21 * k)); if (sau.state === "floor" || sau.state === "fall") { sau.x *= fx; sau.fy = S.floorY + 2 * k; } });
      S.stand.forEach(function (o) { o.x *= fx; o.mark *= fx; o.spr.setScale(k); });
    },

    /* ── where things are ── */
    sosFeetY: function (c) { var S = this.sos; return S.feet0 + (S.ladTop - S.feet0) * clamp(c == null ? S.c : c, 0, 1); },
    /* the shears' bite point: a string between the blades here is cut */
    sosBite: function () { var S = this.sos, k = S.k; return { x: S.lx + HAND_DX * k, y: this.sosFeetY() - (HAND_DY + BITE) * k }; },
    sosClimbFor: function (y) { var S = this.sos, k = S.k, b0 = S.feet0 - (HAND_DY + BITE) * k; return clamp((b0 - y) / (S.feet0 - S.ladTop), 0, 1); },
    /* where a saucer's string is at height y (null if the string doesn't run there: below the hook, or the saucer is down) */
    sosStringX: function (sau, y) {
      var S = this.sos;
      if (!sau || (sau.state !== "live" && sau.state !== "intro") || y <= S.ay0 || y >= sau.y - 2 * S.k) return null;
      return sau.ax + (sau.x - sau.ax) * (y - S.ay0) / (sau.y - S.ay0);
    },
    /* the live saucer whose string is nearest the blades, and how far */
    sosNearest: function () {
      var S = this.sos, b = this.sosBite(), best = null, bd = 1e9, self = this;
      S.saucers.forEach(function (sau) {
        var x = self.sosStringX(sau, b.y);
        if (x == null) return;
        var d = Math.abs(x - b.x);
        if (d < bd) { bd = d; best = sau; }
      });
      return { sau: best, d: bd, reach: S.P.reach * S.k };
    },
    /* for the tests and the mouse: the ladder position that puts the blades on a saucer's string at climb c */
    sosAimAt: function (sau, c) {
      var S = this.sos, k = S.k;
      S.c = c == null ? 1 : c; S.tx = null; S.tc = null; S.lock = null;
      var y = this.sosBite().y, x = this.sosStringX(sau, y);
      if (x == null) return false;
      S.lx = clamp(x - HAND_DX * k, S.xMin, S.xMax);
      return true;
    },

    /* ── the saucers for a question ── */
    answers_strings: function () {
      var S = this.sos, self = this, k = S.k;
      S.saucers.forEach(function (sau) { self.sosKillSaucer(sau); });
      S.saucers = []; S.pieces = [];
      this.sosEndHazards();
      var letters = shuffle(this.choiceLetters().slice()), n = letters.length;
      var lows = shuffle(letters.map(function (x, i) { return n > 1 ? i / (n - 1) : 0.5; }));
      /* spread them so every string, however it drifts, swings and blows, stays where the ladder can reach it */
      var P = S.P, W = this.W, mg = P.drift * k + (P.swing + P.wind * k / Math.max(120, S.attLo)) * (S.topBite - S.ay0) + 12 * k;
      var x0 = clamp((S.xMin + HAND_DX * k + mg) / W, 0.13, 0.42), x1 = clamp((S.xMax + HAND_DX * k - mg) / W, 0.58, 0.87);
      /* ...and out from under the HUD buttons where they reach down into the saucers' band (the small Canvas frame) */
      var bt = S.attHi - P.bob * k - 12 * k, bb = S.attLo + P.bob * k + 56 * k, a0 = x0, a1 = x1;
      this.sosHudBoxes().forEach(function (bx) {
        if (bx.y1 < bt || bx.y0 > bb) return;
        if ((bx.x0 + bx.x1) / 2 > W / 2) a1 = Math.min(a1, (bx.x0 - 64 * k - mg * 0.5) / W);
        else a0 = Math.max(a0, (bx.x1 + 64 * k + mg * 0.5) / W);
      });
      if (a1 - a0 >= 0.3) { x0 = a0; x1 = a1; }
      letters.forEach(function (Lt, i) {
        var sau = { letter: Lt, state: "intro", intro: 0, hoist: 0, fx: n > 1 ? x0 + (x1 - x0) * i / (n - 1) : 0.5, fl: lows[i],
          ph1: rnd(0, TAU), ph2: rnd(0, TAU), ph3: rnd(0, TAU), ph4: rnd(0, TAU), kick: 0, charge: 0, x: 0, y: -99, ax: 0, th: 0, rot: 0, px: 0, py: 0, vx: 0, vy: 0 };
        sau.spr = self.add.image(-99, -99, "md-strings-saucer").setOrigin(0.5, HOOK_Y / SAU_H).setScale(k * SAU_S).setDepth(7);
        sau.txt = self.add.text(-99, -99, Lt, { fontFamily: BLOCK, fontSize: Math.round(21 * k), color: "#111111" }).setOrigin(0.5).setDepth(8);
        if (self.extracted.indexOf(Lt) !== -1) { sau.state = "gone"; sau.spr.setVisible(false); sau.txt.setVisible(false); }
        S.saucers.push(sau);
      });
      S.lock = null; S.queue = 0; S.pend = false; S.cd = 0; S.calm = 2.5;
      S.standT = Math.max(S.standT, 3); S.boomT = Math.max(S.boomT, 3.5); S.rayT = Math.max(S.rayT, 4);
      S.scene += 1; S.take = 1;
      this.sosSlate();
      S.sting = true;
      this.sosPlaceSaucers(0);
    },
    sosKillSaucer: function (sau) {
      try { sau.spr.destroy(); sau.txt.destroy(); } catch (e) {}
      sau.state = "gone";
    },
    /* the saucers this frame: swing, bob, drift and wind on the strings, or falling, or lying on the floor */
    sosPlaceSaucers: function (s) {
      var S = this.sos, P = S.P, k = S.k, t = S.t, W = this.W, self = this;
      var sc = k * SAU_S, d = (PLATE_Y - HOOK_Y) * sc;
      S.saucers.forEach(function (sau) {
        if (sau.state === "gone") return;
        if (sau.state === "intro" || sau.state === "live" || sau.state === "hoist") {
          if (sau.state === "intro") { sau.intro = Math.min(1, sau.intro + s / 1.2); if (sau.intro >= 1) sau.state = "live"; }
          if (sau.state === "hoist") { sau.hoist = Math.min(1, sau.hoist + s / 0.8); if (sau.hoist >= 1) { self.sosKillSaucer(sau); return; } }
          sau.kick *= Math.max(0, 1 - 1.4 * s);
          var lin = ease(sau.intro) * (1 - ease(sau.hoist));
          var Lr = S.attHi + (S.attLo - S.attHi) * sau.fl - S.ay0;
          var len = Lr * lin + P.bob * k * Math.sin(t * P.bobSpd + sau.ph3) * lin;
          sau.ax = W * sau.fx + P.drift * k * Math.sin(t * P.driftSpd + sau.ph1);
          sau.th = P.swing * Math.sin(t * P.swingSpd + sau.ph2) + sau.kick * Math.sin(t * 5.5 + sau.ph4) + S.windTh;
          sau.px = sau.x; sau.py = sau.y;
          sau.x = sau.ax + len * Math.sin(sau.th); sau.y = S.ay0 + len * Math.cos(sau.th);
          sau.rot = -sau.th * 0.85 + 0.035 * Math.sin(t * 2.7 + sau.ph4);
        } else if (sau.state === "fall") {
          sau.vy += 1500 * k * s; sau.x += sau.vx * s; sau.y += sau.vy * s; sau.rot += sau.spin * s;
          if (sau.y >= sau.fy - 40 * sc) {
            sau.y = sau.fy - 40 * sc;
            if (sau.vy > 260 * k) { sau.vy = -sau.vy * 0.28; sau.vx *= 0.5; sau.spin *= -0.5; self.sosClang(0.6); }
            else self.sosLand(sau);
          }
        } else if (sau.state === "floor") {
          sau.ft += s;
          var amp = 0.5 * Math.exp(-sau.ft * 2.6), fr = 9 + sau.ft * 14;
          sau.rot = sau.rest + amp * Math.sin(sau.ft * fr);
          if (amp > 0.02 && Math.floor(sau.ft * fr / Math.PI) !== sau.rattle) { sau.rattle = Math.floor(sau.ft * fr / Math.PI); blip(1400 + Math.random() * 300, 1200, 0.03, "triangle", 0.012 * amp * 2); }
        }
        sau.spr.setPosition(sau.x, sau.y).setRotation(sau.rot);
        sau.txt.setPosition(sau.x - d * Math.sin(sau.rot), sau.y + d * Math.cos(sau.rot)).setRotation(sau.rot);
      });
    },
    sosLand: function (sau) {
      var S = this.sos, k = S.k;
      sau.state = "floor"; sau.ft = 0; sau.rest = rnd(-0.12, 0.12); sau.rattle = -1;
      sau.spr.setDepth(9.5); sau.txt.setDepth(9.6);
      this.sosClang(1);
      this.burst(sau.x, S.floorY, 0xd8d8d8, 12);
      S.stones.forEach(function (st) { var dx = st.x - sau.x; if (Math.abs(dx) < 90 * k) st.w += (dx < 0 ? -1 : 1) * 3.2; });
      this.sosFloat(sau.x, sau.y - 6 * k, "CLANG!");
    },
    sosClang: function (v) { blip(620, 590, 0.3, "triangle", 0.05 * v); blip(930, 880, 0.35, "triangle", 0.03 * v, 0.01); blip(1460, 1400, 0.2, "sine", 0.02 * v, 0.02); },

    /* ── the controls ── */
    tick_strings: function (s, inp, ms) {
      var S = this.sos, P = S.P, k = S.k, i;
      /* a new question (its reading pop-up just closed): a key or button still held doesn't snip until it's let go */
      if (this.claim !== S.claimSeen) { S.claimSeen = this.claim; S.prevFire = true; S.clicksSeen = S.clicks; S.pend = false; }
      S.t += s;
      if (S.cd > 0) S.cd -= ms;
      if (S.snipT > 0) S.snipT -= ms;
      if (S.calm > 0) S.calm -= s;
      if (S.sting) { S.sting = false; theremin(); }
      if (!S.told.start) { S.told.start = true; this.toast("Roll the ladder to the saucer with the right letter, get its string between the open shears, and snip (Space, SNIP or a click).", 5600); }

      /* the ladder rolls; the stagehand climbs */
      var p = this.ptr, moved = S.lpx != null && Math.abs(p.x - S.lpx) + Math.abs(p.y - S.lpy) > 2;
      var clicked = S.clicks !== S.clicksSeen && Date.now() >= (this.tutLockUntil || 0);
      S.clicksSeen = S.clicks;
      if (inp.ax || inp.ay) { S.tx = null; S.tc = null; S.lock = null; }
      else if (moved || inp.ptr || clicked) this.sosPointAt(p.x, p.y);
      S.lpx = p.x; S.lpy = p.y;
      if (S.lock) {
        if (S.lock.state !== "live" && S.lock.state !== "intro") S.lock = null;
        else {
          var ty = clamp(S.lock.y - 62 * k, S.topBite, S.lock.y - 10 * k);   /* well up the string, so the stagehand stays clear of the saucer */
          S.tc = this.sosClimbFor(ty);
          var fy = this.sosFeetY(S.tc) - (HAND_DY + BITE) * k, sx = this.sosStringX(S.lock, fy);
          if (sx != null) S.tx = sx - HAND_DX * k;
        }
      }
      var x0 = S.lx, roll = P.roll * k * s;
      if (inp.ax) S.lx += inp.ax * roll;
      else if (S.tx != null) S.lx += clamp(S.tx - S.lx, -roll, roll);
      S.lx = clamp(S.lx, S.xMin, S.xMax);
      if (inp.ay) S.c -= inp.ay * P.climb * s;
      else if (S.tc != null) S.c += clamp(S.tc - S.c, -P.climb * s, P.climb * s);
      S.c = clamp(S.c, 0, 1);
      if (Math.abs(S.lx - x0) > 0.5) this.sosStoneTouch(S.lx, 34 * k, S.lx > x0 ? 1 : -1, "ladder");

      /* the snip: on the press (a click while the ladder is still on its way snips when it gets there;
         a press while the shears reopen snips as soon as they are open) */
      var edge = (inp.fire && !S.prevFire) || clicked;
      S.prevFire = inp.fire;
      if (edge) {
        var going = (S.tx != null && Math.abs(S.tx - S.lx) > 3) || (S.tc != null && Math.abs(S.tc - S.c) > 0.03);
        if ((inp.ptr || clicked) && going) S.queue = 0.9;
        else if (S.cd > 0) S.pend = true;
        else this.sosSnip();
      }
      if (S.pend && S.cd <= 0) { S.pend = false; this.sosSnip(); }
      if (S.queue > 0) {
        S.queue -= s;
        var nr = this.sosNearest(), arrived = !((S.tx != null && Math.abs(S.tx - S.lx) > 3) || (S.tc != null && Math.abs(S.tc - S.c) > 0.03));
        if ((S.lock && nr.sau === S.lock && nr.d <= nr.reach * 0.8) || arrived) { S.queue = 0; this.sosSnip(); }
      }

      /* the sky flips between day and night */
      S.flipT -= s;
      if (S.flipT <= 0) { S.flipT = P.flipGap; this.sosFlip(); }
      /* the wind machine */
      if (P.wind) {
        S.windTh = P.wind * k / Math.max(120, S.attLo) * (0.65 * Math.sin(S.t * 0.42 + 1) + 0.35 * Math.sin(S.t * 1.15));
        if (!S.told.wind && S.t > 1.5) { S.told.wind = true; this.toast("The wind machine is on! Gusts push every saucer one way: watch the WIND sign.", 4200); }
      }
      this.sosPlaceSaucers(s);
      if (this._finishing) return;

      /* the goofs */
      if (!this._between && S.calm <= 0) {
        var ok = S.t - S.lastHaz > 1.6;
        S.standT -= s;
        if (S.standT <= 0 && !S.stand.length && ok) {
          S.standT = P.standGap;
          var side = Math.random() < 0.5 ? -1 : 1;
          this.sosStandIn(side);
          if (P.standCount > 1) this.sosStandIn(-side, null, 0.7);
          ok = false;
        }
        if (P.boomGap < 90) { S.boomT -= s; if (S.boomT <= 0 && !S.boom && ok) { S.boomT = P.boomGap; this.sosBoom(); ok = false; } }
        if (P.rayGap < 90) {
          S.rayT -= s;
          if (S.rayT <= 0 && !S.rays.length && ok) {
            S.rayT = P.rayGap;
            var live = shuffle(S.saucers.filter(function (q) { return q.state === "live"; }));
            for (i = 0; i < Math.min(P.rays, live.length); i++) this.sosRay(live[i], i * 0.35);
          }
        }
      }
      this.sosTickStand(s);
      if (this._finishing) return;
      this.sosTickBoom(s);
      if (this._finishing) return;
      this.sosTickRays(s);
      if (this._finishing) return;

      this.sosTickStones(s);
      this.sosDraw(s);
    },
    /* the mouse: the shears go to the pointer; pointing at a saucer sends them to its string, just above it */
    sosPointAt: function (px, py) {
      var S = this.sos, k = S.k, sc = k * SAU_S, best = null, bd = 1e9;
      S.saucers.forEach(function (sau) {
        if (sau.state !== "live" && sau.state !== "intro") return;
        var cx = sau.x, cy = sau.y + 32 * sc, dx = Math.abs(px - cx) / (64 * sc), dy = Math.abs(py - cy) / (34 * sc), dd = dx * dx + dy * dy;
        if (dd < 1 && dd < bd) { bd = dd; best = sau; }
      });
      S.lock = best;
      if (!best) { S.tx = px - HAND_DX * k; S.tc = this.sosClimbFor(py); }
      /* a gravestone the pointer touches wobbles */
      S.stones.forEach(function (st) {
        var on = Math.abs(px - st.x) < 24 * k && py > st.y - 80 * k && py < st.y;
        if (on && !st.over) st.w += (px < st.x ? 1 : -1) * 1.6;
        st.over = on;
      });
    },
    sosSnip: function () {
      var S = this.sos, k = S.k;
      if (S.cd > 0 || this._between || this._finishing || this.ended) return null;
      S.cd = 260; S.snipT = 220; S.snips += 1;
      blip(2900, 1500, 0.05, "square", 0.022); hiss(0.05, 4200, 0.035);
      var nr = this.sosNearest();
      if (nr.sau && nr.d <= nr.reach) return this.sosCut(nr.sau);
      S.misses += 1;
      if (!S.told.miss) {
        S.told.miss = true;
        var b = this.sosBite(), under = S.saucers.some(function (q) { return (q.state === "live" || q.state === "intro") && Math.abs(q.x - b.x) < 60 * k && q.y < b.y + 4 * k; });
        this.toast(under ? "Too low! A string only runs ABOVE its saucer: climb up (▲) and snip the string." : "Snip! You missed the strings. Get a string between the open blades, then snip.", 3800);
      }
      return "miss";
    },
    /* the string is cut: the saucer drops, and that picks its letter */
    sosCut: function (sau) {
      var S = this.sos, k = S.k, b = this.sosBite();
      sau.state = "fall"; sau.cutY = b.y; sau.vx = clamp((sau.x - sau.px) * 60, -220 * k, 220 * k); sau.vy = -40 * k; sau.spin = rnd(-2.5, 2.5); sau.fy = S.floorY + 2 * k;
      S.pieces.push({ ax: sau.ax, x: b.x, y: b.y, t: 0, ph: rnd(0, 6) });
      sau.tail = Math.min(56 * k, Math.max(10 * k, sau.y - b.y));
      S.cuts += 1;
      if (S.lock === sau) S.lock = null;
      S.rays = S.rays.filter(function (r) { if (r.sau === sau && r.phase === "warn") return false; return true; });
      sau.charge = 0;
      blip(500, 120, 0.4, "triangle", 0.03);
      this.sosFloat(b.x, b.y - 10 * k, "SNIP!");
      var clean = !this.claimWrong && !S.hitQ;
      var res = this.answerPick(sau.letter, sau.x, sau.y + 20 * k);
      if (res === "wrong") {
        sau.txt.setText("✕").setColor("#111111");
        S.take += 1;
        this.sosSlate(true);
        this.sosFloat(sau.x, sau.y + 78 * k, "CUT!");
      } else if (res === "partial" || res === "done") {
        sau.txt.setText("✓").setColor("#111111");
        if (res === "done") {
          this.sosFloat(sau.x, sau.y + 78 * k, S.take > 1 ? "PRINT IT!" : "PERFECT. PRINT IT!");
          if (clean && !this.ended) this.awardBonusPoints(500, "Printed on the first take: no wrong saucer, no hits");
        }
      }
      return res;
    },
    /* a right answer: the other saucers are hoisted out of the shot, the goofs stop */
    clear_strings: function () {
      var S = this.sos;
      S.saucers.forEach(function (sau) { if (sau.state === "live" || sau.state === "intro") { sau.state = "hoist"; sau.hoist = 0; sau.intro = 1; } });
      this.sosEndHazards();
      S.queue = 0; S.pend = false; S.lock = null;
      try { S.rayG.clear(); S.uiG.clear(); S.boomG.clear(); } catch (e) {}
    },
    sosEndHazards: function () {
      var S = this.sos;
      S.stand.forEach(function (o) { try { o.spr.destroy(); } catch (e) {} });
      S.stand = []; S.rays = [];
      S.boom = null; if (S.mic) S.mic.setVisible(false);
      S.saucers.forEach(function (q) { q.charge = 0; });
      if (S.txStand) S.txStand.setVisible(false);
      if (S.txBoom) S.txBoom.setVisible(false);
      S.hitQ = false;
    },

    /* ── the goofs ── */
    /* the stand-in walks from his side to his tape mark, strikes a pose, and walks back */
    sosStandIn: function (side, depth, delay) {
      var S = this.sos, P = S.P, k = S.k, W = this.W;
      if (depth == null) depth = P.standDepth * (P.standCount > 1 ? 0.92 : 1);
      var o = { side: side, mark: side < 0 ? W * depth : W * (1 - depth), x: side < 0 ? -40 * k : W + 40 * k, phase: "warn", t: -(delay || 0), hit: false, walk: 0, stoneOn: {} };
      o.spr = this.add.image(o.x, S.floorY + 4 * k, "md-strings-stand-0").setOrigin(0.5, 1).setScale(k).setDepth(5.5).setVisible(false);
      if (S.night) o.spr.setTint(0xd0d0d0);
      S.stand.push(o); S.lastHaz = S.t;
      if (!S.told.stand) { S.told.stand = true; this.toast("The stand-in is walking to his mark (the tape X)! Keep your ladder off the dotted path until he walks back out.", 4600); }
      return o;
    },
    sosTickStand: function (s) {
      var S = this.sos, P = S.P, k = S.k, W = this.W, self = this;
      S.stand.slice().forEach(function (o) {
        o.t += s;
        if (o.t < 0) return;
        var spd = P.standSpd * k * s, dir = o.side < 0 ? 1 : -1;
        if (o.phase === "warn") {
          if (o.t >= P.standWarn) { o.phase = "in"; o.t = 0; o.spr.setVisible(true); blip(110, 104, 0.9, "triangle", 0.05); blip(165, 156, 0.8, "triangle", 0.03, 0.05); }
        } else if (o.phase === "in") {
          o.x += dir * spd;
          if ((dir > 0 && o.x >= o.mark) || (dir < 0 && o.x <= o.mark)) { o.x = o.mark; o.phase = "pose"; o.t = 0; }
        } else if (o.phase === "pose") {
          if (o.t >= 1.1) { o.phase = "out"; o.t = 0; o.stoneOn = {}; }
        } else if (o.phase === "out") {
          o.x -= dir * spd;
          if (o.x < -60 * k || o.x > W + 60 * k) { try { o.spr.destroy(); } catch (e) {} S.stand.splice(S.stand.indexOf(o), 1); return; }
        }
        if (o.phase === "warn") return;
        o.walk += s;
        var fr = o.phase === "pose" ? 2 : Math.floor(o.walk / 0.24) % 2;
        o.spr.setTexture("md-strings-stand-" + fr).setFlipX(o.phase === "out" ? dir > 0 : dir < 0)
          .setPosition(o.x, S.floorY + 4 * k - (fr === 2 ? 0 : Math.abs(Math.sin(o.walk * 13)) * 2 * k));
        self.sosStoneTouch(o.x, 16 * k, o.phase === "out" ? -dir : dir, o);
        if (!o.hit && Math.abs(o.x - S.lx) < STAND_HIT * k && !self.ended && !self._finishing) {
          o.hit = true;
          if (self.loseLife("hit", "THE STAND-IN WALKED INTO YOUR LADDER")) { S.hits += 1; S.hitQ = true; S.shake = 1; self.sosFloat(o.x, S.floorY - 130 * k, "Pardon me!"); blip(240, 120, 0.25, "square", 0.04); }
        }
      });
    },
    /* the boom mic dips into the shot: a dashed box warns where */
    sosBoom: function (x) {
      var S = this.sos, k = S.k, b = this.sosBite();
      if (x == null) x = Math.random() < 0.65 ? b.x + rnd(-20, 20) * k : rnd(this.W * 0.12, this.W * 0.88);
      S.boom = { x: clamp(x, BOOM_HALF * k, this.W - BOOM_HALF * k), side: Math.random() < 0.5 ? -1 : 1, phase: "warn", t: 0, y: Math.min(S.dipY - 50 * k, 70 + 66 * k), hit: false, kicked: {} };
      S.lastHaz = S.t;
      blip(300, 280, 0.2, "sawtooth", 0.015);
      if (!S.told.boom) { S.told.boom = true; this.toast("The boom mic is dipping into the shot! Climb down (▼) or roll out of the dashed box before it drops.", 4400); }
      return S.boom;
    },
    sosTickBoom: function (s) {
      var S = this.sos, P = S.P, k = S.k, o = S.boom;
      if (!o) return;
      o.t += s;
      var b = this.sosBite(), up = Math.min(S.dipY - 50 * k, 70 + 66 * k), dip = S.dipY;
      if (o.phase === "warn") {
        if (P.boomFollow) o.x += clamp(b.x - o.x, -P.boomFollow * 260 * k * s, P.boomFollow * 260 * k * s);
        o.y = up + Math.sin(S.t * 6) * 3 * k;
        if (o.t >= P.boomWarn) { o.phase = "dip"; o.t = 0; hiss(0.25, 900, 0.04); }
      } else if (o.phase === "dip") {
        o.y = up + (dip - up) * ease(o.t / 0.16);
        if (o.t >= 0.16) { o.phase = "hold"; o.t = 0; }
      } else if (o.phase === "hold") {
        o.y = dip + Math.sin(o.t * 9) * 4 * k;
        if (o.t >= 0.75) { o.phase = "up"; o.t = 0; }
      } else if (o.phase === "up") {
        o.y = dip + (-80 * k - dip) * ease(o.t / 0.45);
        if (o.t >= 0.45) { S.boom = null; S.mic.setVisible(false); return; }
      }
      /* it bumps the saucers it dips past */
      if (o.phase === "dip" || o.phase === "hold") {
        S.saucers.forEach(function (sau, i) { if (sau.state === "live" && !o.kicked[i] && Math.abs(sau.x - o.x) < 60 * k && sau.y < o.y + 30 * k) { o.kicked[i] = true; sau.kick = 0.25; } });
        if (!o.hit && Math.abs(b.x - o.x) < BOOM_HALF * k && b.y - 12 * k < o.y && !this.ended && !this._finishing && (o.phase === "hold" || o.t > 0.08)) {
          o.hit = true;
          if (this.loseLife("hit", "THE BOOM MIC BONKED YOU")) { S.hits += 1; S.hitQ = true; S.shake = 1; this.sosFloat(o.x, o.y + 10 * k, "BONK!"); blip(200, 90, 0.18, "square", 0.05); }
        }
      }
    },
    /* a death ray: the saucer's lights blink and a dotted beam shows where it will fire, then it fires */
    sosRay: function (sau, delay) {
      var S = this.sos;
      var o = { sau: sau, x: sau.x, phase: "warn", t: -(delay || 0), hit: false };
      S.rays.push(o); S.lastHaz = S.t;
      if (!S.told.ray) { S.told.ray = true; this.toast("A saucer is about to fire its death ray down the dotted beam! Roll the ladder out of it.", 4200); }
      return o;
    },
    sosTickRays: function (s) {
      var S = this.sos, P = S.P, k = S.k, self = this;
      S.rays.slice().forEach(function (o) {
        o.t += s;
        if (o.t < 0) return;
        if (o.sau.state !== "live" && o.phase === "warn") { S.rays.splice(S.rays.indexOf(o), 1); return; }
        if (o.phase === "warn") {
          o.sau.charge = 1;
          if (o.t >= P.rayWarn) { o.phase = "fire"; o.t = 0; blip(1300, 260, 0.7, "sawtooth", 0.028); blip(1900, 380, 0.6, "square", 0.01); }
        } else if (o.phase === "fire") {
          if (!o.hit && Math.abs(S.lx - o.x) < (RAY_HALF + 16) * k && !self.ended && !self._finishing) {
            o.hit = true;
            if (self.loseLife("hit", "ZAPPED BY A DEATH RAY")) { S.hits += 1; S.hitQ = true; S.shake = 1; self.sosFloat(S.lx, S.floorY - 160 * k, "ZAP!"); }
          }
          if (o.t >= 0.9) { o.sau.charge = 0; S.scorch.push({ x: o.x, t: 0 }); S.rays.splice(S.rays.indexOf(o), 1); }
        }
      });
    },
    /* day ↔ night, mid-scene; from level 41 it is a continuity error and the saucers jump */
    sosFlip: function () {
      var S = this.sos, P = S.P, k = S.k, self = this;
      S.night = !S.night;
      S.bg.setTexture(S.setKey + (S.night ? "-n" : "-d"));
      this.sosApplyNight();
      S.flash = 1; S.skyT = 1.8;
      hiss(0.08, 2400, 0.05); blip(80, 60, 0.06, "square", 0.03);
      var jumped = false;
      if (P.shuffle) {
        var live = S.saucers.filter(function (q) { return q.state === "live"; });
        if (live.length >= 2) {
          var xs = live.map(function (q) { return q.fx; }), rot = 1 + Math.floor(Math.random() * (live.length - 1));
          live.forEach(function (q, i) { q.fx = xs[(i + rot) % live.length]; });
          S.lock = null; jumped = true;
        }
      }
      S.txSky.setText(jumped ? "CONTINUITY ERROR!\nTHE SAUCERS JUMPED" : (S.night ? "IT IS SUDDENLY NIGHT." : "IT IS SUDDENLY DAY.")).setVisible(true);
      if (jumped && !S.told.jump) { S.told.jump = true; this.toast("Continuity error! The sky flipped and the saucers jumped to new places. Find the right letter again.", 4200); }
      else if (!jumped && !S.told.flip) { S.told.flip = true; this.toast("Day turned to night in the middle of the scene: one of Plan 9's famous mistakes. It changes nothing... yet.", 4200); }
      return jumped;
    },
    sosApplyNight: function () {
      var S = this.sos, t = S.night ? 0xc8c8c8 : 0xffffff;
      S.stones.forEach(function (st) { st.spr.setTint(t); });
      S.stand.forEach(function (o) { o.spr.setTint(S.night ? 0xd0d0d0 : 0xffffff); });
    },
    /* the cardboard gravestones wobble when anything touches them */
    sosStoneTouch: function (x, half, dir, who) {
      var S = this.sos, k = S.k, mem = who && who.stoneOn ? who.stoneOn : (S.ladOn = S.ladOn || {});
      S.stones.forEach(function (st, i) {
        var on = Math.abs(st.x - x) < half + 14 * k;
        if (on && !mem[i]) { st.w += dir * (who === "ladder" ? 2.2 : 3); hiss(0.07, 500, 0.025); blip(150, 110, 0.09, "triangle", 0.025); }
        mem[i] = on;
      });
    },
    sosTickStones: function (s) {
      var S = this.sos;
      S.stones.forEach(function (st) {
        st.w += (-60 * st.a - 2.6 * st.w) * s;
        st.a += st.w * s;
        st.a = clamp(st.a, -0.5, 0.5);
        st.spr.setRotation(st.a);
      });
    },
    sosFloat: function (x, y, txt) {
      var S = this.sos, k = S.k;
      var t = this.add.text(x, y, txt, { fontFamily: POSTER, fontSize: Math.round(22 * k), color: "#ffffff", stroke: "#000000", strokeThickness: 5 }).setOrigin(0.5).setDepth(18).setRotation(rnd(-0.12, 0.12));
      S.floats.push({ t: 0, txt: t, y: y });
      return t;
    },
    /* the clapperboard: SCENE n, TAKE m (a wrong saucer means another take) */
    sosSlate: function (retake) {
      var S = this.sos;
      S.slate = { t: 0, dur: retake ? 1.25 : 1.6, retake: !!retake, clapped: false };
      S.slScene.setText(String(S.scene || 1)); S.slTake.setText(String(S.take));
    },

    /* ── drawing every frame ── */
    sosDraw: function (s) {
      var S = this.sos, P = S.P, k = S.k, W = this.W, H = this.H, self = this, i;
      var g = S.strG, lg = S.ladG, sh = S.shG, ui = S.uiG, fl = S.floorG, rg = S.rayG;
      g.clear(); lg.clear(); sh.clear(); ui.clear(); fl.clear(); rg.clear(); S.boomG.clear(); S.filmG.clear(); S.fogG.clear();
      var night = S.night, strCol = night ? 0xf0f0f0 : 0x161616;
      if (S.shake > 0) S.shake = Math.max(0, S.shake - s * 1.6);
      var shx = S.shake * Math.sin(S.t * 40) * 6 * k;

      /* scorch marks, the stand-in's tape marks and his path */
      S.scorch = S.scorch.filter(function (q) { q.t += s; return q.t < 2.5; });
      S.scorch.forEach(function (q) { fl.fillStyle(0x000000, 0.5 * (1 - q.t / 2.5)); fl.fillEllipse(q.x, S.floorY + 2 * k, 70 * k, 12 * k); });
      var standLbl = null;
      S.stand.forEach(function (o) {
        if (o.t < 0 && o.phase === "warn") return;
        var flash = o.phase === "warn" ? (Math.floor(S.t * 6) % 2 ? 1 : 0.45) : 0.8, my = S.floorY + 6 * k, xs = 11 * k;
        fl.lineStyle(5 * k, 0xf2f2f2, flash);
        fl.lineBetween(o.mark - xs, my - xs * 0.45, o.mark + xs, my + xs * 0.45); fl.lineBetween(o.mark - xs, my + xs * 0.45, o.mark + xs, my - xs * 0.45);
        if (o.phase === "warn" || o.phase === "in") {
          var from = o.phase === "warn" ? (o.side < 0 ? 0 : W) : o.x, to = o.mark, dir = to > from ? 1 : -1;
          for (var x = from; dir > 0 ? x < to - 14 * k : x > to + 14 * k; x += dir * 16 * k) { ui.fillStyle(0x000000, 0.7); ui.fillCircle(x, my - 1 * k, 4 * k); ui.fillStyle(0xffffff, flash); ui.fillCircle(x, my - 1 * k, 2.6 * k); }
          if (o.phase === "warn") {
            var ex = o.side < 0 ? 18 * k : W - 18 * k, ay = S.floorY - 60 * k + Math.sin(S.t * 8) * 3 * k;
            ui.fillStyle(0x000000, 0.85); ui.fillTriangle(ex - o.side * 14 * k, ay, ex + o.side * 8 * k, ay - 14 * k, ex + o.side * 8 * k, ay + 14 * k);
            ui.fillStyle(0xffffff, 1); ui.fillTriangle(ex - o.side * 10 * k, ay, ex + o.side * 5 * k, ay - 9 * k, ex + o.side * 5 * k, ay + 9 * k);
            standLbl = { x: clamp((ex + o.mark) / 2, 120 * k, W - 120 * k), y: S.floorY - 76 * k };
          }
        }
      });
      if (standLbl) S.txStand.setText("STAND-IN WALKING TO HIS MARK").setPosition(standLbl.x, standLbl.y).setVisible(true); else S.txStand.setVisible(false);

      /* the rays: a dotted beam first, then the beam */
      S.rays.forEach(function (o) {
        if (o.t < 0) return;
        var sau = o.sau, sc = k * SAU_S, bx = sau.x - (SAU_BOT - HOOK_Y) * sc * Math.sin(sau.rot), by = sau.y + (SAU_BOT - HOOK_Y) * sc * Math.cos(sau.rot), fy = S.floorY + 4 * k, hw = RAY_HALF * k;
        if (o.phase === "warn") {
          var al = 0.55 + 0.45 * (Math.floor(S.t * 8) % 2);
          for (var y = by + 8 * k; y < fy; y += 13 * k) {
            var u = (y - by) / (fy - by), xl = bx + (o.x - hw - bx) * u, xr = bx + (o.x + hw - bx) * u, xc = bx + (o.x - bx) * u;
            rg.fillStyle(0x000000, 0.6); rg.fillCircle(xl, y, 3.4 * k); rg.fillCircle(xr, y, 3.4 * k);
            rg.fillStyle(0xffffff, al); rg.fillCircle(xl, y, 2.2 * k); rg.fillCircle(xr, y, 2.2 * k);
            if (Math.round((y - by) / (13 * k)) % 3 === 0) { rg.fillStyle(0xffffff, al * 0.4); rg.fillCircle(xc, y, 1.6 * k); }
          }
          rg.fillStyle(0xffffff, 0.18 * al); rg.fillEllipse(o.x, fy, hw * 2.6, 12 * k);
        } else {
          var fli = 0.55 + 0.25 * Math.sin(o.t * 70) + 0.1 * Math.random();
          rg.fillStyle(0xffffff, 0.22 * fli); rg.fillTriangle(bx - 12 * k, by, o.x - hw * 1.5, fy, o.x + hw * 1.5, fy); rg.fillTriangle(bx - 12 * k, by, bx + 12 * k, by, o.x + hw * 1.5, fy);
          rg.fillStyle(0xffffff, 0.6 * fli); rg.fillTriangle(bx - 7 * k, by, o.x - hw, fy, o.x + hw, fy); rg.fillTriangle(bx - 7 * k, by, bx + 7 * k, by, o.x + hw, fy);
          rg.lineStyle(4 * k, 0xffffff, 0.95); rg.lineBetween(bx, by, o.x, fy);
          rg.fillStyle(0xffffff, 0.7 * fli); rg.fillEllipse(o.x, fy, hw * 3, 16 * k);
        }
      });

      /* the strings: the batten pipe peeks into the shot at the top */
      g.fillStyle(0x2a2a2a, 1); g.fillRect(0, 0, W, 4 * k); g.fillStyle(0x8a8a8a, 1); g.fillRect(0, 3 * k, W, 1.5 * k);
      var b = this.sosBite(), nr = this.sosNearest(), lined = P.glint && nr.sau && nr.d <= nr.reach && !this._between;
      S.saucers.forEach(function (sau) {
        if (sau.state === "gone") return;
        var sc = k * SAU_S;
        if (sau.state === "intro" || sau.state === "live" || sau.state === "hoist") {
          g.lineStyle(1.7 * k, strCol, night ? 0.85 : 0.8); g.lineBetween(sau.ax, S.ay0, sau.x, sau.y);
          g.fillStyle(strCol, 0.9); g.fillCircle(sau.ax, 2 * k, 2.4 * k);
          if (lined && sau === nr.sau) {
            var y0 = b.y - 26 * k, y1 = b.y + 26 * k, xa = self.sosStringX(sau, Math.max(S.ay0 + 1, y0)), xb = self.sosStringX(sau, Math.min(sau.y - 3 * k, y1));
            if (xa != null && xb != null) { g.lineStyle(4 * k, 0xffffff, 0.45 + 0.3 * Math.sin(S.t * 14)); g.lineBetween(xa, Math.max(S.ay0 + 1, y0), xb, Math.min(sau.y - 3 * k, y1)); }
          }
          /* the rim lights blink (fast when it is about to fire) and a sparkler trail fizzes */
          var bl = sau.charge ? (Math.floor(S.t * 14) % 2) : (Math.floor(S.t * 2 + sau.ph1) % 2);
          for (var j = 0; j < 5; j++) {
            var lxo = (j - 2) * 20 * sc, lyo = (39 - HOOK_Y + 8.5 * Math.sqrt(Math.max(0, 1 - Math.pow((j - 2) * 20 / 60, 2)))) * sc, cr = Math.cos(sau.rot), sr = Math.sin(sau.rot);
            var on = sau.charge ? bl : (j + bl) % 2;
            g.fillStyle(0x000000, 0.8); g.fillCircle(sau.x + lxo * cr - lyo * sr, sau.y + lxo * sr + lyo * cr, 2.8 * k);
            g.fillStyle(on ? 0xffffff : 0x6a6a6a, 1); g.fillCircle(sau.x + lxo * cr - lyo * sr, sau.y + lxo * sr + lyo * cr, (on ? 2.1 : 1.6) * k);
          }
          var side = sau.ph2 > Math.PI ? 1 : -1, ex = sau.x + side * 58 * sc * Math.cos(sau.rot) - (36 * sc) * Math.sin(sau.rot), ey = sau.y + side * 58 * sc * Math.sin(sau.rot) + 36 * sc * Math.cos(sau.rot);
          for (j = 0; j < 4; j++) { g.fillStyle(0xffffff, 0.35 + Math.random() * 0.5); g.fillCircle(ex + side * rnd(2, 16) * k, ey + rnd(-4, 6) * k, rnd(0.8, 2) * k); }
        } else if (sau.state === "fall") {
          var wv = Math.sin(S.t * 22) * 5 * k;
          g.lineStyle(1.7 * k, strCol, 0.8); g.lineBetween(sau.x, sau.y, sau.x + wv, sau.y - sau.tail);
        }
      });
      S.pieces = S.pieces.filter(function (q) { q.t += s; return q.t < 0.4; });
      S.pieces.forEach(function (q) {
        var e = ease(q.t / 0.35), ex2 = q.x + (q.ax - q.x) * e, ey2 = q.y + (S.ay0 - q.y) * e, mx = (q.ax + ex2) / 2 + Math.sin(q.t * 50 + q.ph) * 8 * k * (1 - e), my = (S.ay0 + ey2) / 2;
        g.lineStyle(1.7 * k, strCol, 0.85); g.lineBetween(q.ax, S.ay0, mx, my); g.lineBetween(mx, my, ex2, ey2);
      });

      /* the rolling ladder */
      var lx = S.lx + shx, fy = S.floorY, tp = S.ladTop, hw0 = LAD_HALF * k, hw1 = 15 * k;
      lg.lineStyle(5 * k, 0x101010, 1); lg.lineBetween(lx + 8 * k, tp + 4 * k, lx + 44 * k, fy);
      lg.lineStyle(3 * k, 0x4a4a4a, 1); lg.lineBetween(lx + 8 * k, tp + 4 * k, lx + 44 * k, fy);
      [[-1], [1]].forEach(function (q) {
        var sd = q[0];
        lg.lineStyle(7.5 * k, 0x101010, 1); lg.lineBetween(lx + sd * hw0, fy, lx + sd * hw1, tp);
        lg.lineStyle(4.5 * k, 0x8e8e8e, 1); lg.lineBetween(lx + sd * hw0, fy, lx + sd * hw1, tp);
      });
      for (var ry = fy - 12 * k; ry > tp + 8 * k; ry -= 30 * k) {
        var u2 = (fy - ry) / (fy - tp), rw = hw0 + (hw1 - hw0) * u2;
        lg.lineStyle(5.5 * k, 0x101010, 1); lg.lineBetween(lx - rw, ry, lx + rw, ry);
        lg.lineStyle(3 * k, 0xa8a8a8, 1); lg.lineBetween(lx - rw, ry, lx + rw, ry);
      }
      lg.fillStyle(0x101010, 1); lg.fillRect(lx - 22 * k, tp - 5 * k, 44 * k, 9 * k); lg.fillStyle(0x9a9a9a, 1); lg.fillRect(lx - 20 * k, tp - 3 * k, 40 * k, 5 * k);
      [-hw0, hw0, 44 * k].forEach(function (dx) { lg.fillStyle(0x0a0a0a, 1); lg.fillCircle(lx + dx, fy + 3 * k, 6.5 * k); lg.fillStyle(0x7a7a7a, 1); lg.fillCircle(lx + dx, fy + 3 * k, 2.5 * k); });

      /* the stagehand and his shears */
      var feet = this.sosFeetY();
      S.hand.setPosition(lx, feet);
      this.blink(S.hand);
      sh.setAlpha(S.hand.alpha);
      var hx = lx + HAND_DX * k, hy = feet - HAND_DY * k, bx2 = hx, by2 = hy - BITE * k;
      this.player.setPosition(hx, hy - 20 * k);
      var open = S.snipT > 0 ? Math.abs(S.snipT - 110) / 110 : 1, reach = P.reach * k, tipY = hy - 38 * k, pv = hy - 6 * k, tw = reach * 1.33 * open + 1.5 * k;
      var bladeCol = lined ? 0xffffff : 0xb8b8b8;
      [-1, 1].forEach(function (sd) {
        sh.fillStyle(0x0c0c0c, 1); sh.fillTriangle(bx2 + sd * 2 * k, pv + 2 * k, bx2 + sd * tw - sd * 3.5 * k, tipY - 2 * k, bx2 + sd * tw + sd * 3.5 * k, tipY + 2 * k);
        sh.fillStyle(bladeCol, 1); sh.fillTriangle(bx2 + sd * 1.2 * k, pv, bx2 + sd * tw - sd * 2 * k, tipY, bx2 + sd * tw + sd * 1.8 * k, tipY + 1.5 * k);
      });
      sh.lineStyle(3.4 * k, 0x0c0c0c, 1); sh.strokeCircle(bx2 - 5 * k, hy + 3 * k, 4 * k); sh.strokeCircle(bx2 + 5 * k, hy + 3 * k, 4 * k);
      sh.fillStyle(0x0c0c0c, 1); sh.fillCircle(bx2, pv, 2.6 * k); sh.fillStyle(0xdedede, 1); sh.fillCircle(bx2, pv, 1.2 * k);
      if (lined) { var sp = 0.6 + 0.4 * Math.sin(S.t * 16); sh.lineStyle(1.6 * k, 0xffffff, sp); sh.lineBetween(bx2 - 7 * k, by2 - 7 * k, bx2 + 7 * k, by2 + 7 * k); sh.lineBetween(bx2 - 7 * k, by2 + 7 * k, bx2 + 7 * k, by2 - 7 * k); }

      /* the boom mic and its pole, coming in from a top corner */
      var o = S.boom;
      if (o) {
        var micH = 66 * k * 0.95, mt = o.y - micH, cxp = o.side > 0 ? W + 60 * k : -60 * k, cyp = -40 * k;
        S.mic.setVisible(true).setPosition(o.x, mt);
        S.boomG.lineStyle(9 * k, 0x0c0c0c, 1); S.boomG.lineBetween(o.x, mt + 2 * k, cxp, cyp);
        S.boomG.lineStyle(5 * k, 0x8a8a8a, 1); S.boomG.lineBetween(o.x, mt + 2 * k, cxp, cyp);
        if (o.phase === "warn") {
          var al2 = Math.floor(S.t * 6) % 2 ? 1 : 0.5, bw = BOOM_HALF * k, x0 = o.x - bw, x1 = o.x + bw, top = 4 * k, bot = S.dipY;
          var dash = function (xa, ya, xb, yb) { var len = Math.hypot(xb - xa, yb - ya), n2 = Math.max(1, Math.floor(len / (12 * k))); for (var q = 0; q < n2; q += 2) { var u0 = q / n2, u1 = Math.min(1, (q + 1) / n2); ui.lineBetween(xa + (xb - xa) * u0, ya + (yb - ya) * u0, xa + (xb - xa) * u1, ya + (yb - ya) * u1); } };
          ui.fillStyle(0xffffff, 0.08 * al2); ui.fillRect(x0, top, bw * 2, bot - top);
          ui.lineStyle(4.5 * k, 0x000000, 0.6); dash(x0, top, x0, bot); dash(x1, top, x1, bot); dash(x0, bot, x1, bot);
          ui.lineStyle(2.4 * k, 0xffffff, al2); dash(x0, top, x0, bot); dash(x1, top, x1, bot); dash(x0, bot, x1, bot);
          S.txBoom.setPosition(clamp(o.x, 110 * k, W - 110 * k), bot + 6 * k).setVisible(true).setAlpha(al2);
        } else S.txBoom.setVisible(false);
      } else S.txBoom.setVisible(false);

      /* the wind sign */
      if (P.wind) {
        var wn = S.windTh / Math.max(1e-6, P.wind * k / Math.max(120, S.attLo)), nCh = Math.max(1, Math.round(Math.abs(wn) * 3)), wx = 14 * k + S.txWind.width + 10 * k, wy = 66 + 16 * k;
        for (i = 0; i < 3; i++) {
          var cx2 = wx + i * 12 * k, dirw = wn >= 0 ? 1 : -1;
          ui.fillStyle(0xffffff, i < nCh ? 0.95 : 0.2); ui.fillTriangle(cx2 + dirw * 6 * k, wy, cx2 - dirw * 4 * k, wy - 6 * k, cx2 - dirw * 4 * k, wy + 6 * k);
        }
      }

      /* dry-ice fog along the floor */
      S.fog.forEach(function (f) {
        f.x += f.sp * s; if (f.x < -0.2) f.x += 1.4; if (f.x > 1.2) f.x -= 1.4;
        S.fogG.fillStyle(0xffffff, f.a * (night ? 1 : 0.7)); S.fogG.fillEllipse(f.x * W, S.floorY + (f.y * 30 - 2) * k, f.r * 2.2 * k, f.r * 0.5 * k);
      });

      /* the floating words, the sky's caption, the slate */
      S.floats = S.floats.filter(function (q) {
        q.t += s; q.txt.setY(q.y - q.t * 40 * k).setAlpha(clamp(1.6 - q.t * 1.6, 0, 1));
        if (q.t >= 1) { try { q.txt.destroy(); } catch (e) {} return false; }
        return true;
      });
      if (S.skyT > 0) { S.skyT -= s; S.txSky.setPosition(W / 2, 66 + 40 * k).setAlpha(clamp(S.skyT / 0.4, 0, 1)); if (S.skyT <= 0) S.txSky.setVisible(false); }
      this.sosDrawSlate(s);

      /* the print: grain, flicker, scratches, dust, the splice flash on a flip */
      S.grain.tilePositionX = Math.floor(Math.random() * 192); S.grain.tilePositionY = Math.floor(Math.random() * 192);
      var fg = S.filmG;
      fg.fillStyle(0x000000, 0.02 + Math.random() * 0.05); fg.fillRect(0, 0, W, H);
      if (Math.random() < 0.04) { fg.fillStyle(0xffffff, 0.04); fg.fillRect(0, 0, W, H); }
      if (!S.scr || S.scr.life <= 0) S.scr = { x: rnd(0.05, 0.95), life: rnd(0.6, 2.5), w: rnd(0.8, 1.6), dark: Math.random() < 0.4 };
      S.scr.life -= s; S.scr.x += rnd(-0.002, 0.002);
      if (Math.random() < 0.85) { fg.lineStyle(S.scr.w * k, S.scr.dark ? 0x000000 : 0xffffff, 0.22); fg.lineBetween(S.scr.x * W, 0, S.scr.x * W + rnd(-2, 2), H); }
      if (Math.random() < 0.3) { fg.lineStyle(1, 0xffffff, 0.18); var sx2 = Math.random() * W, sy2 = Math.random() * H; fg.lineBetween(sx2, sy2, sx2 + rnd(-3, 3), sy2 + rnd(20, 90) * k); }
      for (i = 0; i < 3; i++) if (Math.random() < 0.18) { fg.fillStyle(Math.random() < 0.7 ? 0x000000 : 0xffffff, 0.5); fg.fillCircle(Math.random() * W, Math.random() * H, rnd(0.8, 2.6) * k); }
      if (S.flash > 0) { fg.fillStyle(0xffffff, 0.75 * S.flash); fg.fillRect(0, 0, W, H); S.flash = Math.max(0, S.flash - s * 6); }
      /* the reel-change cue dot, now and then */
      if (Math.floor(S.t * 10) % 220 < 3) { fg.fillStyle(0xffffff, 0.35); fg.fillCircle(W - 46 * k, 40 * k, 13 * k); fg.lineStyle(2, 0x000000, 0.3); fg.strokeCircle(W - 46 * k, 40 * k, 13 * k); }
    },
    sosDrawSlate: function (s) {
      var S = this.sos, sl = S.slate, k = S.k, W = this.W;
      if (!sl) { S.slImg.setVisible(false); S.slStick.setVisible(false); S.slScene.setVisible(false); S.slTake.setVisible(false); return; }
      sl.t += s;
      var sc = k * (sl.retake ? 0.5 : 0.58), tx = W - 120 * sc - 14 * k, ty = 60 + 92 * sc, y;
      if (sl.t < 0.2) y = -80 * k + (ty + 80 * k) * ease(sl.t / 0.2);
      else if (sl.t > sl.dur - 0.3) y = ty - (ty + 140 * k) * ease((sl.t - (sl.dur - 0.3)) / 0.3);
      else y = ty;
      S.slImg.setScale(sc); S.slStick.setScale(sc);
      S.slScene.setFontSize(Math.round(31 * sc)); S.slTake.setFontSize(Math.round(31 * sc));
      var rot = sl.t < 0.55 ? -0.5 : sl.t < 0.62 ? -0.5 * (1 - (sl.t - 0.55) / 0.07) : 0;
      if (!sl.clapped && sl.t >= 0.62) { sl.clapped = true; blip(1800, 500, 0.04, "square", 0.05); hiss(0.06, 3200, 0.07); }
      S.slImg.setVisible(true).setPosition(tx, y);
      S.slStick.setVisible(true).setPosition(tx - 120 * sc, y - 64 * sc).setRotation(rot);
      S.slScene.setVisible(true).setPosition(tx - 60 * sc, y + 8 * sc);
      S.slTake.setVisible(true).setPosition(tx + 60 * sc, y + 8 * sc).setText(String(S.take));
      if (sl.t >= sl.dur) { S.slate = null; this.sosDrawSlate(0); }
    }
  });
})();
