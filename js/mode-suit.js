/* SOL Labyrinth v5.21 — the Lit and Film mode "suit": Suit Up (genre BADGOOD, Iron Man, 2008).
 *
 * The good-film half of Bad Film vs. Good Film: where Plan 9's saucers hang on strings over a cardboard
 * graveyard, this game is sleek, weighty and believable. A city skyline at dusk, drawn in layers with lit
 * windows, glass catching the last of the sunset and red warning lights on the towers (they shift a little
 * with the suit, for depth). The player flies a red-and-gold armored suit (a generic design: no logo, no
 * copy of the film's helmet) with thrust-and-hover physics: ▲ fires the boot jets to climb, letting go
 * lets the stabilizers catch the suit in a hover, ▼ dives, ◀ ▶ fly; the suit has weight and drifts.
 *
 * The letters are drones hovering over the rooftops, one per answer letter, each with a holographic tag.
 * Space or BLAST fires a repulsor blast straight ahead from the palm (a dotted aim line and, until level
 * 70, lock-on brackets show what it will hit); a click or tap fires toward the pointer. Blasting the right
 * drone answers (answerPick); a wrong drone costs a life and goes down. The suit's own limits are the
 * hazards: every blast heats it (the HEAT bar) and firing too fast overheats it (a life, and the
 * repulsors vent for a moment); above the dashed ICE line ice builds up (the ICE bar) and when it is full
 * the engines stall and the suit drops (a life). Later levels add drifting drones (11), a hunter drone
 * that paints you with a laser line before it fires (21), crosswinds (31), drones above the ice line
 * (41), flickering shields (51), homing missiles (61), two hunters and no lock-on (71), pairs of missiles
 * (81) and the final battle (91). suitParams sets one difficulty curve for all of it.
 *
 * Registered with SolModes.extend (js/modes.js); the methods below are copied onto ModeScene, so `this`
 * is the mode scene. Every texture is drawn once (canvasTex) under an "md-suit-" key.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, shuffle = L.shuffle, canvasTex = L.canvasTex, angDiff = L.angDiff;
  var TAU = Math.PI * 2;
  var FONT = "'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif";
  var HUD_CY = 0x7fe8ff, HUD_GOLD = 0xffc861, HUD_RED = 0xff4a3a;

  /* the suit texture: 80x124, the body centred at (40, 62); drawn at SS of the layout scale */
  var SW = 80, SH = 124, SS = 0.95;
  var BOOTS = [[-6, 55], [6, 55]], PALM_IDLE = [[-19.5, 10], [19.5, 10]], PALM_FIRE = [38, -27.5];
  /* the physics, px/s and px/s² at layout scale 1 */
  var G = 900, THRUST = 1750, DIVE = 650, ACC = 1450, VX = 360, VUP = 400, VDN = 540;
  var FIRE_MS = 210, BOLT_V = 1300, AIM_MAX = 1.0;
  var DS = 0.9;   /* drone texture scale */

  /* ── difficulty: one curve for every level 1-100, each level harder than the one before ── */
  function suitParams(n) {
    n = Math.max(1, Number(n) || 1);
    var fin = n >= 91 ? 0.85 : 1;   /* the final battle: hunters and missiles come faster */
    return {
      heatShot: 0.17 + n * 0.0017,                                   /* heat a blast adds (the bar is 0-1): 0.172 at 1, 0.34 at 100 */
      cool: 0.40 - n * 0.0016,                                       /* heat shed a second: 0.398 at 1, 0.24 at 100 */
      iceRate: 0.30 + n * 0.006,                                     /* ice a second above the line: 3.3 s to a stall at 1, 1.1 s at 100 */
      thaw: 0.62 - n * 0.0022,                                       /* ice that melts a second below it */
      ceil: 0.13 + n * 0.0011,                                       /* the ice line, a share of the screen from the top */
      hover: 6.2 - n * 0.03,                                         /* how firmly the stabilizers hold a hover */
      sink: n * 0.3,                                                 /* px/s the suit settles while it hovers */
      bob: 5 + n * 0.16,                                             /* px the drones bob up and down */
      drift: n >= 11 ? 14 + (n - 11) * 0.8 : 0,                      /* px the drones drift from side to side */
      driftSp: 0.45 + n * 0.006,                                     /* rad a second */
      hunters: n >= 71 ? 2 : n >= 21 ? 1 : 0,
      hunterEvery: n >= 21 ? Math.max(1900, 5600 - (n - 21) * 46) * fin : 0,   /* ms between a hunter's shots */
      warnMs: Math.max(520, 1400 - n * 8.5),                         /* the laser line (and a missile's lock) before it fires */
      wind: n >= 31 ? 50 + (n - 31) * 2.2 : 0,                       /* px/s² a crosswind pushes at its strongest */
      high: n >= 81 ? 2 : n >= 41 ? 1 : 0,                           /* drones above the ice line */
      shield: n >= 51 ? Math.min(0.62, 0.3 + (n - 51) * 0.0065) : 0, /* the share of the time a drone's shield is up */
      missiles: n >= 81 ? 2 : n >= 61 ? 1 : 0,                       /* missiles a launch */
      missileEvery: n >= 61 ? Math.max(5200, 13500 - (n - 61) * 210) * fin : 0,
      missileSp: 250 + n * 1.7,
      missileTurn: 1.5 + n * 0.012,                                  /* rad a second */
      lock: n < 71 ? 1 : 0                                           /* the lock-on brackets */
    };
  }

  /* ── a seeded random, so the skyline is the same every time ── */
  function rng(seed) {
    return function () {
      seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function poly(c, pts) { c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); c.closePath(); }
  function lin(c, x0, y0, x1, y1, stops) { var g = c.createLinearGradient(x0, y0, x1, y1); stops.forEach(function (s) { g.addColorStop(s[0], s[1]); }); return g; }
  function rgbOf(n) { return ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255); }

  /* ── the suit: red armor with gold plates, a glowing chest lamp and one visor band; facing right ── */
  function drawSuit(fire) {
    return function (c) {
      var OUT = "#1a0508";
      function red(x0, x1) { return lin(c, x0, 0, x1, 0, [[0, "#5a0910"], [0.4, "#b8141d"], [0.78, "#e3333a"], [1, "#ff8a5e"]]); }
      function gold(x0, x1) { return lin(c, x0, 0, x1, 0, [[0, "#7a4b14"], [0.45, "#d79c3a"], [0.8, "#ffe08e"], [1, "#fff4cc"]]); }
      function part(pts, fill, lw) { poly(c, pts); c.fillStyle = fill; c.fill(); c.strokeStyle = OUT; c.lineWidth = lw || 1.1; c.lineJoin = "round"; c.stroke(); }
      function rim(x0, y0, x1, y1, a) { c.strokeStyle = "rgba(255,196,140," + (a || 0.8) + ")"; c.lineWidth = 1; c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke(); }
      function steel(x0, x1) { return lin(c, x0, 0, x1, 0, [[0, "#1c2026"], [0.6, "#4a525e"], [1, "#7c8694"]]); }
      /* the back arm (hanging, palm down) */
      part([[17.5, 35], [25, 35], [24.5, 52], [18, 52]], red(17, 25));
      part([[18, 52], [24.5, 52], [24, 66], [18.5, 66]], red(18, 25));
      part([[18, 52], [24.5, 52], [24.4, 55.5], [18.2, 55.5]], gold(18, 25), 0.8);
      part([[18, 66], [24.5, 66], [23.5, 72], [19, 72]], steel(18, 25));
      /* the back leg */
      part([[30, 66], [38, 66], [37, 88], [31, 88]], red(30, 38));
      part([[30.5, 86.5], [37.5, 86.5], [37, 92], [31, 92]], gold(30, 38), 0.9);
      part([[31, 92], [37, 92], [37.6, 108], [30.6, 108]], red(30, 38));
      part([[29.6, 108], [38.2, 108], [39, 117], [28.8, 117]], red(28, 39));
      c.fillStyle = "#24282e"; c.fillRect(28.6, 115.6, 10.6, 2);
      /* the front leg */
      part([[42, 66], [50, 66], [49, 88], [43, 88]], red(42, 50));
      part([[42.5, 86.5], [49.5, 86.5], [49, 92], [43, 92]], gold(42, 50), 0.9);
      part([[43, 92], [49, 92], [49.6, 108], [42.4, 108]], red(42, 50));
      part([[41.6, 108], [50.2, 108], [51.2, 117], [40.8, 117]], red(40, 51));
      c.fillStyle = "#24282e"; c.fillRect(40.6, 115.6, 10.8, 2);
      rim(49.2, 67, 48.4, 87); rim(49.3, 93, 49.7, 107);
      /* the hips */
      part([[29, 59], [51, 59], [50, 67], [30, 67]], steel(29, 51));
      part([[36.5, 60.5], [43.5, 60.5], [43, 65.5], [37, 65.5]], gold(36, 44), 0.8);
      /* the torso, the gold abdomen plates */
      part([[24.5, 29.5], [55.5, 29.5], [53.5, 44], [49.5, 60], [30.5, 60], [26.5, 44]], red(24, 56));
      for (var i = 0; i < 3; i++) part([[32.5 + i * 0.4, 46 + i * 4.6], [47.5 - i * 0.4, 46 + i * 4.6], [47 - i * 0.4, 49.8 + i * 4.6], [33 + i * 0.4, 49.8 + i * 4.6]], gold(32, 48), 0.8);
      c.strokeStyle = "rgba(20,4,6,0.55)"; c.lineWidth = 1;
      c.beginPath(); c.moveTo(40, 31); c.lineTo(40, 33); c.moveTo(29, 43.5); c.quadraticCurveTo(40, 46, 51, 43.5); c.stroke();
      rim(54.6, 31, 52.8, 44); rim(52.8, 44.5, 49.2, 59);
      /* the chest lamp: a steel ring round a white-blue light */
      c.fillStyle = "#3a414c"; c.beginPath(); c.arc(40, 37.5, 5.6, 0, TAU); c.fill(); c.strokeStyle = OUT; c.lineWidth = 1; c.stroke();
      var g = c.createRadialGradient(40, 37.5, 0.5, 40, 37.5, 4.3);
      g.addColorStop(0, "#ffffff"); g.addColorStop(0.45, "#d8f8ff"); g.addColorStop(1, "#5fd0ff");
      c.fillStyle = g; c.beginPath(); c.arc(40, 37.5, 4.3, 0, TAU); c.fill();
      /* the back shoulder, the neck */
      c.fillStyle = red(18, 32); c.beginPath(); c.ellipse(24.5, 33, 7.2, 6, -0.2, 0, TAU); c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.1; c.stroke();
      part([[35, 23], [45, 23], [45.5, 30], [34.5, 30]], steel(34, 46));
      /* the helmet: red shell, a gold face panel, one glowing visor band */
      c.fillStyle = red(30, 50); c.beginPath(); c.ellipse(40, 14.5, 9.6, 11.4, 0, 0, TAU); c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.2; c.stroke();
      c.beginPath(); c.moveTo(39.5, 6.5); c.quadraticCurveTo(46.5, 6.8, 49.4, 12); c.lineTo(49.6, 19.5); c.quadraticCurveTo(47.5, 24.8, 42.5, 25.6);
      c.lineTo(38.6, 24.6); c.lineTo(37.6, 16.5); c.quadraticCurveTo(37.6, 9.5, 39.5, 6.5); c.closePath();
      c.fillStyle = gold(37, 50); c.fill(); c.strokeStyle = OUT; c.lineWidth = 1; c.stroke();
      c.strokeStyle = "rgba(90,50,10,0.7)"; c.lineWidth = 0.8; c.beginPath(); c.moveTo(39, 20.5); c.lineTo(48.6, 20.2); c.stroke();
      c.fillStyle = "#162027"; c.fillRect(39.2, 12.2, 10.6, 3.8);
      var vg = lin(c, 39.5, 0, 50, 0, [[0, "rgba(160,235,255,0.9)"], [0.7, "#f2fdff"], [1, "#ffffff"]]);
      c.fillStyle = vg; c.fillRect(40, 13, 9.8, 2.2);
      c.strokeStyle = "rgba(255,255,255,0.45)"; c.lineWidth = 1.2; c.beginPath(); c.ellipse(40, 14.5, 7.4, 9.2, 0, Math.PI * 1.08, Math.PI * 1.55); c.stroke();
      /* the front arm: hanging, or held straight out to fire */
      if (!fire) {
        part([[55, 35], [62.5, 35], [63, 52], [56.5, 52]], red(55, 63));
        part([[56.5, 52], [63, 52], [63.4, 66], [57, 66]], red(56, 64));
        part([[56.5, 52], [63, 52], [63.1, 55.5], [56.6, 55.5]], gold(56, 64), 0.8);
        part([[56.6, 66], [63.6, 66], [62.6, 72], [57.6, 72]], steel(56, 64));
        rim(62.4, 36, 62.9, 51); rim(63, 53, 63.3, 65);
      } else {
        part([[53, 29.5], [66, 30.5], [66, 37.5], [53.5, 39]], lin(c, 0, 29, 0, 39, [[0, "#ff8a5e"], [0.3, "#e3333a"], [0.7, "#b8141d"], [1, "#5a0910"]]));
        part([[66, 30.6], [75, 31.4], [75, 37], [66, 37.4]], lin(c, 0, 30, 0, 38, [[0, "#ff8a5e"], [0.3, "#e3333a"], [1, "#6a0b12"]]));
        part([[66, 30.6], [69.4, 30.9], [69.4, 37.2], [66, 37.4]], gold(66, 70), 0.8);
        part([[75, 30.8], [78.6, 31.6], [78.6, 37.2], [75, 37.4]], steel(75, 79));
      }
      /* the front shoulder, on top */
      c.fillStyle = red(48, 63); c.beginPath(); c.ellipse(55.5, 33, 7.8, 6.6, 0.15, 0, TAU); c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.1; c.stroke();
      c.strokeStyle = "rgba(255,255,255,0.35)"; c.lineWidth = 1.2; c.beginPath(); c.ellipse(55.5, 33, 5.4, 4.2, 0.15, Math.PI * 1.1, Math.PI * 1.7); c.stroke();
      c.fillStyle = gold(50, 62); c.fillRect(50.5, 37.6, 9.5, 1.6);
    };
  }
  /* a jet flame pointing down from its nozzle (origin at the top) */
  function drawFlame(c, w, h) {
    var cx = w / 2;
    var g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "rgba(140,220,255,0.85)"); g.addColorStop(0.35, "rgba(90,170,255,0.45)"); g.addColorStop(1, "rgba(60,120,255,0)");
    c.fillStyle = g; c.beginPath(); c.moveTo(cx - w * 0.42, 2); c.quadraticCurveTo(cx - w * 0.36, h * 0.55, cx, h); c.quadraticCurveTo(cx + w * 0.36, h * 0.55, cx + w * 0.42, 2); c.closePath(); c.fill();
    g = c.createLinearGradient(0, 0, 0, h * 0.62);
    g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.5, "rgba(220,246,255,0.9)"); g.addColorStop(1, "rgba(160,220,255,0)");
    c.fillStyle = g; c.beginPath(); c.moveTo(cx - w * 0.2, 2); c.quadraticCurveTo(cx - w * 0.15, h * 0.35, cx, h * 0.62); c.quadraticCurveTo(cx + w * 0.15, h * 0.35, cx + w * 0.2, 2); c.closePath(); c.fill();
  }
  function drawGlow(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 1, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.25, "rgba(200,240,255,0.7)"); g.addColorStop(0.6, "rgba(110,190,255,0.22)"); g.addColorStop(1, "rgba(80,150,255,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  function drawWarmGlow(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 1, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,240,200,1)"); g.addColorStop(0.3, "rgba(255,170,80,0.65)"); g.addColorStop(0.7, "rgba(255,90,40,0.18)"); g.addColorStop(1, "rgba(255,60,20,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  /* a repulsor blast: a white-hot head with a blue streak behind it, pointing right */
  function drawBolt(c, w, h) {
    var cy = h / 2, g = c.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, "rgba(80,160,255,0)"); g.addColorStop(0.6, "rgba(120,200,255,0.55)"); g.addColorStop(1, "rgba(230,250,255,0.95)");
    c.fillStyle = g; c.beginPath(); c.moveTo(0, cy); c.quadraticCurveTo(w * 0.6, cy - h * 0.32, w - h * 0.35, cy - h * 0.3); c.lineTo(w - h * 0.35, cy + h * 0.3); c.quadraticCurveTo(w * 0.6, cy + h * 0.32, 0, cy); c.fill();
    var r = c.createRadialGradient(w - h * 0.45, cy, 0.5, w - h * 0.45, cy, h * 0.5);
    r.addColorStop(0, "rgba(255,255,255,1)"); r.addColorStop(0.45, "rgba(200,240,255,0.85)"); r.addColorStop(1, "rgba(100,180,255,0)");
    c.fillStyle = r; c.fillRect(w - h, 0, h, h);
  }
  /* a target drone: a gunmetal pod between two ducted fans, an amber sensor band */
  function drawDrone(c, w, h) {
    var cx = 44, cy = 24;
    c.strokeStyle = "#20252c"; c.lineWidth = 3; c.beginPath(); c.moveTo(18, 21); c.lineTo(30, 23); c.moveTo(70, 21); c.lineTo(58, 23); c.stroke();
    [13, 75].forEach(function (x) {
      c.fillStyle = lin(c, 0, 14, 0, 28, [[0, "#9aa4b2"], [0.5, "#3e4651"], [1, "#151a20"]]);
      c.beginPath(); c.ellipse(x, 21, 12.5, 6, 0, 0, TAU); c.fill(); c.strokeStyle = "#0c0f13"; c.lineWidth = 1.1; c.stroke();
      c.fillStyle = "rgba(170,225,255,0.38)"; c.beginPath(); c.ellipse(x, 17.5, 11.5, 3.2, 0, 0, TAU); c.fill();
      c.strokeStyle = "rgba(230,248,255,0.55)"; c.lineWidth = 0.8; c.beginPath(); c.ellipse(x, 17.5, 11.5, 3.2, 0, Math.PI * 1.1, Math.PI * 1.9); c.stroke();
    });
    c.fillStyle = lin(c, 0, 12, 0, 37, [[0, "#a6b0bd"], [0.35, "#5a6472"], [0.75, "#262c35"], [1, "#11151a"]]);
    c.beginPath(); c.ellipse(cx, cy, 21, 11.5, 0, 0, TAU); c.fill(); c.strokeStyle = "#0a0d11"; c.lineWidth = 1.2; c.stroke();
    c.fillStyle = "rgba(255,255,255,0.33)"; c.beginPath(); c.ellipse(cx - 3, cy - 7, 13, 2.6, 0, 0, TAU); c.fill();
    c.strokeStyle = "rgba(0,0,0,0.45)"; c.lineWidth = 0.9; c.beginPath(); c.moveTo(cx - 19, cy + 1); c.quadraticCurveTo(cx, cy + 4, cx + 19, cy + 1); c.stroke();
    var g = lin(c, cx - 11, 0, cx + 11, 0, [[0, "#7a3a08"], [0.3, "#ffb347"], [0.5, "#fff1c8"], [0.7, "#ffb347"], [1, "#7a3a08"]]);
    c.fillStyle = "#0b0d10"; c.fillRect(cx - 12.5, cy - 1.5, 25, 6);
    c.fillStyle = g; c.fillRect(cx - 11, cy - 0.3, 22, 3.4);
    c.strokeStyle = "#2a2f36"; c.lineWidth = 1.6; c.beginPath(); c.moveTo(cx, cy + 11); c.lineTo(cx, cy + 17); c.stroke();
    c.fillStyle = "#e9f6ff"; c.beginPath(); c.arc(cx, cy + 18, 2, 0, TAU); c.fill();
  }
  /* a hunter drone: an angular dark wing with red slits and a red eye */
  function drawHunter(c, w, h) {
    var cx = 38, cy = 22;
    c.fillStyle = lin(c, 0, 8, 0, 36, [[0, "#5a4650"], [0.45, "#2a1f26"], [1, "#0d090c"]]);
    poly(c, [[3, 25], [24, 12], [52, 12], [73, 25], [50, 34], [26, 34]]); c.fill();
    c.strokeStyle = "#050304"; c.lineWidth = 1.2; c.stroke();
    c.strokeStyle = "#ff3a46"; c.lineWidth = 1.6; c.beginPath(); c.moveTo(7, 25); c.lineTo(24, 15.5); c.moveTo(69, 25); c.lineTo(52, 15.5); c.stroke();
    c.strokeStyle = "rgba(255,255,255,0.22)"; c.lineWidth = 1; c.beginPath(); c.moveTo(26, 13.5); c.lineTo(50, 13.5); c.stroke();
    var g = c.createRadialGradient(cx, cy, 0.5, cx, cy, 9);
    g.addColorStop(0, "#fff0f0"); g.addColorStop(0.3, "#ff4a52"); g.addColorStop(0.7, "rgba(200,20,30,0.6)"); g.addColorStop(1, "rgba(200,20,30,0)");
    c.fillStyle = "#16090c"; c.beginPath(); c.arc(cx, cy, 6, 0, TAU); c.fill();
    c.fillStyle = g; c.beginPath(); c.arc(cx, cy, 9, 0, TAU); c.fill();
    c.fillStyle = "rgba(255,70,60,0.85)"; c.fillRect(20, 33, 8, 2.5); c.fillRect(48, 33, 8, 2.5);
  }
  function drawMissile(c, w, h) {
    var cy = h / 2;
    c.fillStyle = "#2a2e34"; poly(c, [[2, 1], [11, cy - 2], [11, cy + 2], [2, h - 1]]); c.fill();
    c.fillStyle = lin(c, 0, 2, 0, h - 2, [[0, "#ffffff"], [0.5, "#c8ced6"], [1, "#6c737c"]]);
    c.fillRect(6, cy - 3.5, 30, 7);
    c.fillStyle = "#d8262e"; poly(c, [[36, cy - 3.5], [46, cy], [36, cy + 3.5]]); c.fill();
    c.fillStyle = "#d8262e"; c.fillRect(14, cy - 3.5, 2.5, 7);
  }
  /* a drone's shield: a bubble of blue hexagons */
  function drawShield(c, w, h) {
    var cx = w / 2, cy = h / 2, R = w / 2 - 2;
    var g = c.createRadialGradient(cx, cy, R * 0.45, cx, cy, R);
    g.addColorStop(0, "rgba(120,200,255,0)"); g.addColorStop(0.8, "rgba(120,200,255,0.18)"); g.addColorStop(1, "rgba(170,230,255,0.55)");
    c.fillStyle = g; c.beginPath(); c.arc(cx, cy, R, 0, TAU); c.fill();
    c.save(); c.beginPath(); c.arc(cx, cy, R, 0, TAU); c.clip();
    c.strokeStyle = "rgba(170,230,255,0.4)"; c.lineWidth = 1;
    var s = 9, hx = s * Math.sqrt(3);
    for (var row = -1; row * s * 1.5 < h + s; row++) for (var col = -1; col * hx < w + hx; col++) {
      var x = col * hx + (row % 2 ? hx / 2 : 0), y = row * s * 1.5;
      c.beginPath();
      for (var i = 0; i < 6; i++) { var a = Math.PI / 6 + i * Math.PI / 3; c[i ? "lineTo" : "moveTo"](x + Math.cos(a) * s, y + Math.sin(a) * s); }
      c.closePath(); c.stroke();
    }
    c.restore();
    c.strokeStyle = "rgba(210,245,255,0.85)"; c.lineWidth = 1.6; c.beginPath(); c.arc(cx, cy, R, 0, TAU); c.stroke();
  }
  function drawPuff(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 1, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(235,240,245,0.7)"); g.addColorStop(1, "rgba(200,210,220,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }

  /* ── the city at dusk: the sky, three layers of skyline, the ice zone and the frost, per canvas size ── */
  var LAYER_CACHE = {};
  function layerData(kind, W, H, k) {
    var key = kind + W + "x" + H;
    if (LAYER_CACHE[key]) return LAYER_CACHE[key];
    var R = rng(kind === "far" ? 11 : kind === "mid" ? 23 : 37), hz = Math.round(H * 0.8), pad = kind === "far" ? 24 : kind === "mid" ? 52 : 96;
    var d = { pad: pad, w: W + pad * 2, bld: [], lights: [] }, x = -6, sunX = W * 0.72 + pad;
    while (x < d.w + 6) {
      var b = { x: x };
      if (kind === "far") { b.w = (16 + R() * 34) * k; b.top = hz - (8 + R() * 70) * k; }
      else if (kind === "mid") {
        b.w = (28 + R() * 56) * k;
        b.top = hz - (36 + R() * 150) * k;
        if (R() < 0.13) { b.top = Math.min(b.top, H * (0.36 + R() * 0.1)); b.spire = (18 + R() * 30) * k; }
        b.step = R() < 0.35 ? (6 + R() * 10) * k : 0;
      } else {
        b.w = (64 + R() * 110) * k;
        b.top = H * (0.63 + R() * 0.22);
        b.glass = R() < 0.55; b.tank = R() < 0.3; b.ac = R() < 0.5;
        b.ant = R() < 0.25 ? (14 + R() * 22) * k : 0;
      }
      b.sun = x + b.w < sunX ? 1 : x > sunX ? -1 : 0;
      b.seed = Math.floor(R() * 1e6);
      if ((b.spire || b.ant) && b.top < H) d.lights.push({ x: x + b.w / 2, y: b.top - (b.spire || b.ant), ph: R() * 6 });
      else if (kind === "mid" && b.top < hz - 120 * k && R() < 0.5) d.lights.push({ x: x + b.w - 3 * k, y: b.top - 2 * k, ph: R() * 6 });
      d.bld.push(b);
      x += b.w + (kind === "near" ? (R() < 0.4 ? (10 + R() * 40) * k : 0) : R() * 4 * k);
    }
    /* the texture starts just above the tallest roof (less to draw every frame) */
    d.y0 = Math.max(0, Math.floor(Math.min.apply(null, d.bld.map(function (q) { return q.top - (q.spire || q.ant || 0) - (q.step || 0) * 2 - 40 * k; })) - (kind === "far" ? 90 * k : 0)));
    LAYER_CACHE[key] = d;
    return d;
  }
  function drawSky(W, H, k) {
    return function (c) {
      var hz = Math.round(H * 0.8), i, R = rng(5);
      c.fillStyle = lin(c, 0, 0, 0, hz, [[0, "#060920"], [0.26, "#171842"], [0.48, "#45265e"], [0.66, "#9c3f68"], [0.8, "#e5784f"], [0.92, "#ffb260"], [1, "#ffd286"]]);
      c.fillRect(0, 0, W, hz);
      c.fillStyle = "#ffd286"; c.fillRect(0, hz, W, H - hz);
      /* stars in the dark top of the sky */
      for (i = 0; i < 90; i++) {
        var sy = Math.pow(R(), 1.6) * hz * 0.42, a = 0.75 * (1 - sy / (hz * 0.42));
        c.fillStyle = "rgba(255,255,255," + a.toFixed(3) + ")"; c.fillRect(R() * W, sy, R() < 0.12 ? 2 : 1.2, R() < 0.12 ? 2 : 1.2);
      }
      /* the sun, low over the city */
      var sx = W * 0.72, sy2 = hz - 8 * k;
      var g = c.createRadialGradient(sx, sy2, 4, sx, sy2, Math.max(W, H) * 0.42);
      g.addColorStop(0, "rgba(255,226,160,0.75)"); g.addColorStop(0.18, "rgba(255,170,100,0.35)"); g.addColorStop(0.5, "rgba(230,100,90,0.1)"); g.addColorStop(1, "rgba(200,80,90,0)");
      c.fillStyle = g; c.fillRect(0, 0, W, H);
      g = c.createRadialGradient(sx, sy2, 2, sx, sy2, 30 * k);
      g.addColorStop(0, "#fffbe8"); g.addColorStop(0.7, "#ffd88a"); g.addColorStop(1, "rgba(255,170,90,0)");
      c.fillStyle = g; c.beginPath(); c.arc(sx, sy2, 30 * k, 0, TAU); c.fill();
      /* long thin clouds, lit from below */
      for (i = 0; i < 9; i++) {
        var cy = hz * (0.3 + R() * 0.5), cx = R() * W, cw = (120 + R() * 300) * k, ch = (4 + R() * 9) * k;
        var warm = cy / hz;
        var cg = c.createLinearGradient(0, cy - ch, 0, cy + ch);
        cg.addColorStop(0, "rgba(120,70,130," + (0.25 * warm).toFixed(3) + ")"); cg.addColorStop(1, "rgba(255," + Math.round(140 + warm * 60) + ",120," + (0.55 * warm).toFixed(3) + ")");
        c.fillStyle = cg;
        for (var j = 0; j < 4; j++) { c.beginPath(); c.ellipse(cx + (j - 1.5) * cw * 0.26, cy + (R() - 0.5) * ch, cw * (0.3 + R() * 0.25), ch * (0.6 + R() * 0.5), 0, 0, TAU); c.fill(); }
      }
      /* far hills on the horizon */
      c.fillStyle = "rgba(110,60,110,0.55)"; c.beginPath(); c.moveTo(0, hz + 2);
      for (var x = 0; x <= W + 20; x += 20) c.lineTo(x, hz - (10 + 12 * Math.sin(x * 0.006 + 1) + 8 * Math.sin(x * 0.017)) * k);
      c.lineTo(W, hz + 2); c.closePath(); c.fill();
    };
  }
  function drawLayer(kind, d, W, H, k) {
    return function (c, w) {
      var hz = Math.round(H * 0.8), h = H;
      c.translate(0, -d.y0);
      d.bld.forEach(function (b) {
        var R = rng(b.seed), x0 = b.x, x1 = b.x + b.w, top = b.top, wy, wx;
        if (kind === "far") {
          c.fillStyle = lin(c, 0, top, 0, hz + 40, [[0, "#5e4680"], [1, "#3b2a5c"]]);
          c.fillRect(x0, top, b.w, h - top);
          for (wy = top + 4 * k; wy < hz; wy += 6 * k) for (wx = x0 + 3 * k; wx < x1 - 2 * k; wx += 5 * k) if (R() < 0.18) { c.fillStyle = "rgba(255,214,150,0.45)"; c.fillRect(wx, wy, 1.4 * k, 1.6 * k); }
        } else if (kind === "mid") {
          var g = lin(c, 0, top, 0, h, [[0, "#33244f"], [0.5, "#1e1534"], [1, "#130d22"]]);
          c.fillStyle = g;
          if (b.step) { c.fillRect(x0 + b.step, top - b.step * 2, b.w - b.step * 2, b.step * 2 + 1); }
          c.fillRect(x0, top, b.w, h - top);
          if (b.spire) { c.strokeStyle = "#1e1534"; c.lineWidth = 2 * k; c.beginPath(); c.moveTo(x0 + b.w / 2, top - (b.step ? b.step * 2 : 0)); c.lineTo(x0 + b.w / 2, top - b.spire); c.stroke(); }
          /* the windows */
          for (wy = top + 6 * k; wy < h - 4; wy += 9 * k) for (wx = x0 + 4 * k; wx < x1 - 5 * k; wx += 7 * k) {
            if (R() < 0.3) { var warm = R() < 0.78; c.fillStyle = warm ? "rgba(255,206,130," + (0.45 + R() * 0.4).toFixed(2) + ")" : "rgba(170,215,255," + (0.35 + R() * 0.35).toFixed(2) + ")"; c.fillRect(wx, wy, 3 * k, 4 * k); }
          }
          /* the sunset on the edge that faces the sun */
          if (b.sun) { c.fillStyle = "rgba(255,150,100,0.42)"; c.fillRect(b.sun > 0 ? x1 - 2.2 * k : x0, top, 2.2 * k, Math.min(h - top, 220 * k)); }
          c.fillStyle = "rgba(255,170,120,0.25)"; c.fillRect(x0, top, b.w, 1.4 * k);
        } else {
          c.fillStyle = lin(c, 0, top, 0, h, [[0, "#1a1226"], [0.4, "#100b18"], [1, "#07050b"]]);
          c.fillRect(x0, top, b.w, h - top);
          if (b.glass) {
            /* a glass tower: the sunset in the glass, mullions, a few lit floors */
            c.fillStyle = lin(c, 0, top, 0, top + 150 * k, [[0, "rgba(255,150,110,0.24)"], [0.3, "rgba(200,90,120,0.09)"], [1, "rgba(120,60,120,0)"]]);
            c.fillRect(x0 + 2 * k, top + 2 * k, b.w - 4 * k, 160 * k);
            c.fillStyle = "rgba(255,255,255,0.045)";
            for (wx = x0 + 8 * k; wx < x1 - 2; wx += 10 * k) c.fillRect(wx, top + 2 * k, 1, h - top);
            for (wy = top + 10 * k; wy < h; wy += 11 * k) {
              c.fillStyle = "rgba(255,255,255,0.03)"; c.fillRect(x0, wy, b.w, 1);
              if (R() < 0.16) { var a0 = x0 + R() * b.w * 0.5, a1 = Math.min(x1 - 3 * k, a0 + b.w * (0.2 + R() * 0.5)); c.fillStyle = "rgba(255,206,140," + (0.35 + R() * 0.3).toFixed(2) + ")"; c.fillRect(a0, wy + 3 * k, a1 - a0, 4 * k); }
            }
          } else {
            for (wy = top + 8 * k; wy < h - 3; wy += 12 * k) for (wx = x0 + 6 * k; wx < x1 - 8 * k; wx += 11 * k) {
              if (R() < 0.22) { c.fillStyle = "rgba(255,200,120," + (0.4 + R() * 0.45).toFixed(2) + ")"; c.fillRect(wx, wy, 5 * k, 6 * k); }
              else if (R() < 0.3) { c.fillStyle = "rgba(60,50,80,0.5)"; c.fillRect(wx, wy, 5 * k, 6 * k); }
            }
          }
          /* the roof: a parapet, air units, a water tank, an antenna */
          c.fillStyle = "#08060c"; c.fillRect(x0 - 1, top - 3 * k, b.w + 2, 3 * k);
          c.fillStyle = "rgba(255,160,110,0.35)"; c.fillRect(x0, top - 3 * k, b.w, 1.2 * k);
          if (b.ac) { c.fillStyle = "#0b0810"; c.fillRect(x0 + b.w * 0.15, top - 10 * k, 14 * k, 7 * k); c.fillRect(x0 + b.w * 0.15 + 18 * k, top - 8 * k, 10 * k, 5 * k); }
          if (b.tank) {
            var tx = x0 + b.w * 0.68;
            c.fillStyle = "#0b0810"; c.fillRect(tx, top - 26 * k, 16 * k, 16 * k);
            poly(c, [[tx - 2 * k, top - 26 * k], [tx + 8 * k, top - 33 * k], [tx + 18 * k, top - 26 * k]]); c.fill();
            c.strokeStyle = "#0b0810"; c.lineWidth = 1.5 * k; c.beginPath(); c.moveTo(tx + 2 * k, top - 10 * k); c.lineTo(tx + 2 * k, top); c.moveTo(tx + 14 * k, top - 10 * k); c.lineTo(tx + 14 * k, top); c.stroke();
            c.fillStyle = "rgba(255,160,110,0.3)"; c.fillRect(b.sun >= 0 ? tx + 14.5 * k : tx, top - 26 * k, 1.5 * k, 16 * k);
          }
          if (b.ant) { c.strokeStyle = "#0b0810"; c.lineWidth = 1.6 * k; c.beginPath(); c.moveTo(x0 + b.w / 2, top - 3 * k); c.lineTo(x0 + b.w / 2, top - b.ant); c.stroke(); }
          if (b.sun) { c.fillStyle = "rgba(255,140,100,0.3)"; c.fillRect(b.sun > 0 ? x1 - 1.6 * k : x0, top, 1.6 * k, Math.min(h - top, 120 * k)); }
        }
      });
      if (kind === "far") {
        /* haze between the far city and the rest */
        c.fillStyle = lin(c, 0, hz - 120 * k, 0, h, [[0, "rgba(255,160,120,0)"], [0.45, "rgba(255,150,120,0.28)"], [1, "rgba(150,70,110,0.45)"]]);
        c.fillRect(0, hz - 120 * k, w, h - hz + 120 * k);
      } else if (kind === "mid") {
        c.fillStyle = lin(c, 0, hz - 30 * k, 0, h, [[0, "rgba(120,60,110,0)"], [1, "rgba(60,30,70,0.5)"]]);
        c.fillRect(0, hz - 30 * k, w, h - hz + 30 * k);
      } else {
        /* the streets' glow at the bottom */
        c.fillStyle = lin(c, 0, h - 70 * k, 0, h, [[0, "rgba(255,150,80,0)"], [1, "rgba(255,150,80,0.32)"]]);
        c.fillRect(0, h - 70 * k, w, 70 * k);
      }
    };
  }
  function drawIceZone(W, ceil, k) {
    return function (c, w, h) {
      c.fillStyle = lin(c, 0, 0, 0, ceil, [[0, "rgba(200,238,255,0.34)"], [0.7, "rgba(180,228,255,0.12)"], [1, "rgba(170,220,255,0.06)"]]);
      c.fillRect(0, 0, W, ceil);
      /* frost forming along the line */
      var R = rng(77);
      c.strokeStyle = "rgba(225,247,255,0.5)"; c.lineWidth = 1;
      for (var i = 0; i < W / 9; i++) {
        var x = R() * W, y = ceil - R() * 10 * k, L2 = (3 + R() * 7) * k, a = -Math.PI / 2 + (R() - 0.5) * 1.6;
        c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(a) * L2, y + Math.sin(a) * L2); c.stroke();
      }
    };
  }
  function drawFrost(W, H) {
    return function (c) {
      var g = c.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.3, W / 2, H / 2, Math.max(W, H) * 0.72);
      g.addColorStop(0, "rgba(200,240,255,0)"); g.addColorStop(0.6, "rgba(200,238,255,0.18)"); g.addColorStop(1, "rgba(225,247,255,0.7)");
      c.fillStyle = g; c.fillRect(0, 0, W, H);
      var R = rng(91), i;
      c.strokeStyle = "rgba(240,252,255,0.55)"; c.lineCap = "round";
      function branch(x, y, a, len, depth) {
        var x2 = x + Math.cos(a) * len, y2 = y + Math.sin(a) * len;
        c.lineWidth = Math.max(0.6, depth * 0.6); c.beginPath(); c.moveTo(x, y); c.lineTo(x2, y2); c.stroke();
        if (depth > 0) { branch(x2, y2, a + 0.6 + R() * 0.3, len * 0.6, depth - 1); branch(x2, y2, a - 0.6 - R() * 0.3, len * 0.6, depth - 1); branch(x2, y2, a + (R() - 0.5) * 0.3, len * 0.7, depth - 1); }
      }
      for (i = 0; i < 46; i++) {
        var side = i % 4, x, y, a;
        if (side === 0) { x = R() * W; y = 0; a = Math.PI / 2; } else if (side === 1) { x = R() * W; y = H; a = -Math.PI / 2; }
        else if (side === 2) { x = 0; y = R() * H; a = 0; } else { x = W; y = R() * H; a = Math.PI; }
        branch(x, y, a + (R() - 0.5) * 0.9, 20 + R() * 34, 3);
      }
    };
  }

  function ensureSuitArt(scene) {
    canvasTex(scene, "md-suit-body", SW, SH, drawSuit(false));
    canvasTex(scene, "md-suit-fire", SW, SH, drawSuit(true));
    canvasTex(scene, "md-suit-flame", 22, 84, drawFlame);
    canvasTex(scene, "md-suit-glow", 64, 64, drawGlow);
    canvasTex(scene, "md-suit-warm", 64, 64, drawWarmGlow);
    canvasTex(scene, "md-suit-bolt", 92, 22, drawBolt);
    canvasTex(scene, "md-suit-drone", 88, 46, drawDrone);
    canvasTex(scene, "md-suit-hunter", 76, 40, drawHunter);
    canvasTex(scene, "md-suit-missile", 48, 12, drawMissile);
    canvasTex(scene, "md-suit-shield", 104, 104, drawShield);
    canvasTex(scene, "md-suit-puff", 32, 32, drawPuff);
  }

  M.extend("suit", {
    name: "Suit Up", kind: "armored flight level", level: "armored flight level", act: "BLAST",
    how: "Iron Man (2008) won praise for effects you believe: a suit with weight, heat and limits. Now you fly one, a red-and-gold armored suit over the city at dusk. Drones hover over the rooftops, each with a letter on its tag. Fly level with the drone that carries the right answer and blast it with your repulsors. ▲ fires the boot jets and climbs; let go and the stabilizers catch you in a hover; ▼ dives; ◀ ▶ fly. The suit has weight: it drifts and takes a moment to stop. Every blast heats the suit, so watch the HEAT bar and fire in short bursts. Above the dashed ICE line, ice builds on the armor (the ICE bar): stay up there too long and the engines stall.",
    rules: "Blasting a wrong drone costs a life. So does overheating (a full HEAT bar), stalling when the ICE bar fills, and, in later levels, a hunter drone's laser or a missile.",
    keys: "Arrow keys, WASD or the on-screen pad fly (▲ climbs, let go to hover, ▼ dives) · Space or BLAST fires straight ahead · or click or tap to fire toward the pointer (the mouse does not fly the suit).",
    tip: "SUIT UP — fly level with the drone that has the right letter and blast it. Fire in short bursts (HEAT) and stay under the ICE line.",
    hint1: "Blast the drone that carries the right letter. The passage stays in the side panel.",
    hint2: "This question has two right letters. Blast both drones that carry them.",
    news: ["",
      "The drones drift from side to side now, so one can slide in front of another. Wait for a clear shot.",
      "A hunter drone (red, no letter) joins the fight. When it paints you with a red laser line, get out of the line before it fires. Blast it for a bonus.",
      "Crosswinds push the suit sideways. The WIND arrow on your HUD shows which way.",
      "A drone hovers above the ICE line: climb, blast it, and drop back down before the ice stalls you.",
      "Shielded drones: a blue shield flickers on and off around each drone. A blast only gets through while it is down.",
      "Homing missiles: MISSILE LOCK sounds, then a missile chases you. Outfly it until its fuel runs out, or blast it.",
      "Two hunter drones, and the lock-on brackets are gone: line your shots up by eye.",
      "Two drones above the ICE line, and the missiles come in pairs.",
      "The final battle: hunters and missiles come faster, on top of everything else."],
    params: suitParams
  }, {
    suitParams: function (n) { return suitParams(n); },

    setup_suit: function () {
      ensureSuitArt(this);
      var P = suitParams(this.night), self = this, i;
      var B = this.su = { P: P, t: 0, x: 0, y: 0, vx: 0, vy: 0, face: 1, tilt: 0, spin: 0, rot: 0, heat: 0, ice: 0, cd: 0, ohMs: 0, fireMs: 0,
        stalled: false, stallMs: 0, armed: false, lastFrame: -9, windA: 0, wph: rnd(0, 6), thrust: 0, landed: false,
        drones: [], leaving: [], bolts: [], boltPool: [], hunters: [], hunterSpawn: 2500, missiles: [], mWarn: [], missileCd: P.missileEvery * 0.6,
        booms: [], puffs: [], trail: [], flakes: [], shots: 0, hits: 0, overheats: 0, stalls: 0, kills: 0, hitQ: 0, told: {}, bgKey: null };
      this.cameras.main.setBackgroundColor("#120c22");
      this.suitLayout();
      B.sky = this.add.image(0, 0, B.skyKey).setOrigin(0, 0).setDepth(0);
      B.far = this.add.image(0, 0, B.farKey).setOrigin(0, 0).setDepth(1);
      B.mid = this.add.image(0, 0, B.midKey).setOrigin(0, 0).setDepth(2);
      B.near = this.add.image(0, 0, B.nearKey).setOrigin(0, 0).setDepth(4);
      B.lightG = this.add.graphics().setDepth(5);
      B.iceImg = this.add.image(0, 0, B.iceKey).setOrigin(0, 0).setDepth(6);
      B.ambG = this.add.graphics().setDepth(6);
      B.tagG = this.add.graphics().setDepth(9);
      B.fx = this.add.graphics().setDepth(12);
      B.flames = [];
      for (i = 0; i < 3; i++) B.flames.push(this.add.image(0, 0, "md-suit-flame").setOrigin(0.5, 0.04).setDepth(13).setBlendMode(1));
      B.jetGlow = [0, 1].map(function () { return self.add.image(0, 0, "md-suit-glow").setDepth(13).setBlendMode(1); });
      B.suit = this.add.image(0, 0, "md-suit-body").setDepth(14);
      B.chest = this.add.image(0, 0, "md-suit-glow").setDepth(14).setBlendMode(1);
      B.palm = this.add.image(0, 0, "md-suit-glow").setDepth(15).setBlendMode(1).setVisible(false);
      B.heatGlow = [0, 1].map(function () { return self.add.image(0, 0, "md-suit-warm").setDepth(15).setBlendMode(1).setVisible(false); });
      B.top = this.add.graphics().setDepth(15);
      B.frost = this.add.image(0, 0, B.frostKey).setOrigin(0, 0).setDepth(16).setAlpha(0);
      B.hud = this.add.graphics().setDepth(17);
      var tx = { fontFamily: FONT, fontSize: 12, color: "#bff4ff", fontStyle: "bold" };
      B.txHeat = this.add.text(0, 0, "HEAT", tx).setOrigin(0, 0.5).setDepth(18);
      B.txIce = this.add.text(0, 0, "ICE", tx).setOrigin(0, 0.5).setDepth(18);
      B.txAlt = this.add.text(0, 0, "", tx).setOrigin(1, 0.5).setDepth(18);
      B.txWind = this.add.text(0, 0, "WIND", tx).setOrigin(1, 0.5).setDepth(18).setVisible(P.wind > 0);
      B.txCeil = this.add.text(0, 0, "ICE ALTITUDE", { fontFamily: FONT, fontSize: 12, color: "#dff6ff", fontStyle: "bold", stroke: "#0d1a2a", strokeThickness: 3 }).setOrigin(1, 1).setDepth(7);
      B.txWarn = this.add.text(0, 0, "", { fontFamily: FONT, fontSize: 15, color: "#ffd27a", fontStyle: "bold", stroke: "#140806", strokeThickness: 4 }).setOrigin(0.5, 1).setDepth(18);
      B.txLock = this.add.text(0, 0, "MISSILE LOCK", { fontFamily: FONT, fontSize: 18, color: "#ff6a5a", fontStyle: "bold", stroke: "#140806", strokeThickness: 5 }).setOrigin(0.5, 0).setDepth(18).setVisible(false);
      for (i = 0; i < 46; i++) B.flakes.push({ x: Math.random(), y: Math.random(), r: rnd(0.7, 1.9), sp: rnd(0.02, 0.07), ph: rnd(0, 6) });
      this.suitPlaceStatic();
      B.x = B.startX; B.y = B.startY;
      this.makeSol(B.x, B.y, "right").setVisible(false);   /* the suit flies; the sprite stays for coin pop-ups */
    },

    /* everything that depends on the canvas size */
    suitLayout: function () {
      var B = this.su, P = B.P, W = this.W, H = this.H, k;
      k = B.k = clamp(Math.min(H / 768, W / 1000), 0.58, 1.25);
      B.sc = k * SS;
      B.hk = clamp(k, 0.78, 1.1);
      B.tk = Math.max(k, 0.8);   /* the letter tags stay readable in a small frame */
      B.ceilY = Math.round(H * P.ceil);
      B.floorY = H - Math.round(Math.max(8, 10 * k));
      B.minY = 40 * B.sc; B.maxY = B.floorY - 58 * B.sc;
      B.minX = 26 * k; B.maxX = W - 26 * k;
      B.boxes = this.suitDomBoxes();
      var pad = B.boxes.pad, act = B.boxes.act, quit = B.boxes.quit;
      /* the drones' band: under the ice line, over the bottom buttons (a drone's tag hangs 52 px under it) */
      B.bandTop = B.ceilY + 46 * k; B.bandBot = B.floorY - 120 * k;
      if (act) B.bandBot = Math.min(B.bandBot, act.y0 - 64 * k);
      B.bandBot = Math.max(B.bandBot, B.bandTop + 120 * k);
      B.startX = Math.round(clamp(W * 0.13, 70 * k, 170 * k)); B.startY = Math.round((B.bandTop + B.bandBot) / 2);
      if (pad && pad.y0 < B.startY + 60 * k && pad.x1 > B.startX - 30 * k) B.startY = Math.round(Math.min(B.startY, pad.y0 - 70 * k));
      /* the HUD panel: top left, beside the Menu button */
      B.hudW = 230 * B.hk; B.hudH = 52 * B.hk;
      B.hudX = quit ? Math.round(quit.x1 + 10) : 12; B.hudY = quit ? Math.max(6, Math.round(quit.y0)) : 8;
      var right = B.boxes.topRight;
      if (right != null && B.hudX + B.hudW > right - 8) { B.hudX = quit ? Math.round(quit.x0) : 12; B.hudY = quit ? Math.round(quit.y1 + 8) : 8; }
      var size = W + "x" + H;
      var keys = { skyKey: "md-suit-sky-" + size, farKey: "md-suit-far-" + size, midKey: "md-suit-mid-" + size, nearKey: "md-suit-near-" + size,
        iceKey: "md-suit-ice-" + W + "-" + B.ceilY, frostKey: "md-suit-frost-" + size };
      if (B.bgKey !== size + "/" + B.ceilY) {
        var old = B.bgKey ? { skyKey: B.skyKey, farKey: B.farKey, midKey: B.midKey, nearKey: B.nearKey, iceKey: B.iceKey, frostKey: B.frostKey } : null;
        var far = layerData("far", W, H, k), mid = layerData("mid", W, H, k), near = layerData("near", W, H, k);
        canvasTex(this, keys.skyKey, W, H, drawSky(W, H, k));
        canvasTex(this, keys.farKey, far.w, H - far.y0, drawLayer("far", far, W, H, k));
        canvasTex(this, keys.midKey, mid.w, H - mid.y0, drawLayer("mid", mid, W, H, k));
        canvasTex(this, keys.nearKey, near.w, H - near.y0, drawLayer("near", near, W, H, k));
        canvasTex(this, keys.iceKey, W, Math.max(2, B.ceilY + 2), drawIceZone(W, B.ceilY, k));
        canvasTex(this, keys.frostKey, W, H, drawFrost(W, H));
        B.layers = { far: far, mid: mid, near: near };
        Object.keys(keys).forEach(function (kk) { B[kk] = keys[kk]; });
        B.bgKey = size + "/" + B.ceilY;
        if (B.sky) { B.sky.setTexture(B.skyKey); B.far.setTexture(B.farKey); B.mid.setTexture(B.midKey); B.near.setTexture(B.nearKey); B.iceImg.setTexture(B.iceKey); B.frost.setTexture(B.frostKey); }
        var self = this;
        if (old) Object.keys(old).forEach(function (kk) { if (old[kk] !== keys[kk]) { try { self.textures.remove(old[kk]); } catch (e) {} } });
      }
    },
    /* the on-screen controls and buttons over the canvas, in canvas pixels */
    suitDomBoxes: function () {
      var out = { pad: null, act: null, quit: null, topRight: null, list: [] }, self = this;
      try {
        var cv = this.game && this.game.canvas;
        if (!cv) return out;
        var c = cv.getBoundingClientRect();
        if (!c.width || !c.height) return out;
        var fx = this.W / c.width, fy = this.H / c.height;
        var box = function (el) {
          if (!el || !el.offsetParent) return null;
          var a = el.getBoundingClientRect();
          if (!a.width || !a.height) return null;
          return { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
        };
        out.pad = box(document.querySelector("#controls .dpad"));
        out.act = box(document.getElementById("btn-action"));
        out.quit = box(document.getElementById("btn-quit"));
        out.list = [out.pad, out.act].filter(Boolean);
        ["btn-fs", "music-vol-hud", "btn-music-hud", "btn-char"].forEach(function (id) {
          var b = box(document.getElementById(id));
          if (!b) return;
          out.list.push(b);
          if (b.y0 < self.H * 0.2) out.topRight = out.topRight == null ? b.x0 : Math.min(out.topRight, b.x0);
        });
      } catch (e) {}
      return out;
    },
    suitPlaceStatic: function () {
      var B = this.su, k = B.k, hk = B.hk;
      B.sky.setPosition(0, 0);
      B.iceImg.setPosition(0, 0);
      B.frost.setPosition(0, 0);
      B.suit.setScale(B.sc);
      B.chest.setScale(0.32 * B.sc);
      B.flames.forEach(function (f) { f.setScale(B.sc * 0.9); });
      [B.txHeat, B.txIce, B.txAlt, B.txWind].forEach(function (t) { t.setFontSize(Math.round(12 * hk)); });
      B.txHeat.setPosition(B.hudX + 10 * hk, B.hudY + 16 * hk);
      B.txIce.setPosition(B.hudX + 10 * hk, B.hudY + 36 * hk);
      B.txAlt.setPosition(B.hudX + B.hudW - 10 * hk, B.hudY + 16 * hk);
      B.txWind.setPosition(B.hudX + B.hudW - 40 * hk, B.hudY + 36 * hk);
      B.txCeil.setFontSize(Math.round(12 * hk)).setPosition(this.W - 14 * k, B.ceilY - 4 * k);
      B.txWarn.setFontSize(Math.round(15 * hk));
      B.txLock.setFontSize(Math.round(18 * hk)).setPosition(this.W / 2, B.hudY + 4);
    },
    resize_suit: function (oldW, oldH) {
      var B = this.su, fx = this.W / (oldW || this.W), fy = this.H / (oldH || this.H), self = this;
      this.suitLayout();
      this.suitPlaceStatic();
      B.x = clamp(B.x * fx, B.minX, B.maxX); B.y = clamp(B.y * fy, B.minY, B.maxY);
      this.suitPlaceDrones();
      B.drones.forEach(function (d) { d.spr.setScale(B.k * DS); d.shield.setScale(B.k * 0.92); d.label.setFontSize(Math.round(21 * B.tk)); });
      B.hunters.forEach(function (h) { h.x *= fx; h.y *= fy; h.spr.setScale(B.k * 0.9); });
      B.missiles.forEach(function (m) { m.x *= fx; m.y *= fy; });
      B.bolts.slice().forEach(function (b) { self.suitFreeBolt(b); });
      if (this.player) this.player.setPosition(B.x, B.y - 60 * B.k);
    },

    /* ── the drones: one per answer letter ── */
    answers_suit: function () {
      var B = this.su, P = B.P, self = this, k = B.k;
      B.drones.forEach(function (d) { self.suitKillDrone(d); });
      B.drones = [];
      B.bolts.slice().forEach(function (b) { self.suitFreeBolt(b); });
      var letters = shuffle(this.choiceLetters().slice()), n = letters.length;
      /* altitude slots, top to bottom, and columns across the right of the screen, shuffled so no two stack up */
      var cols = shuffle(letters.map(function (x, i) { return i; }));
      letters.forEach(function (Lt, i) {
        var d = { letter: Lt, state: "live", slot: i, n: n, col: cols[i], high: i < P.high, ph: rnd(0, TAU), sph: rnd(0, 1), enter: 0, x: -99, y: -99 };
        d.spr = self.add.image(-99, -99, "md-suit-drone").setScale(k * DS).setDepth(8);
        d.shield = self.add.image(-99, -99, "md-suit-shield").setScale(k * 0.92).setDepth(10).setVisible(false);
        d.label = self.add.text(-99, -99, Lt, { fontFamily: FONT, fontSize: Math.round(21 * B.tk), color: "#ffffff", fontStyle: "bold", stroke: "#06121c", strokeThickness: 3 }).setOrigin(0.5).setDepth(10);
        if (self.extracted.indexOf(Lt) !== -1) d.state = "found";
        B.drones.push(d);
      });
      B.drones = B.drones.filter(function (d) { if (d.state === "found") { self.suitKillDrone(d); return false; } return true; });
      this.suitPlaceDrones();
      B.hitQ = 0;
      if (!B.told.high && P.high) { B.told.high = true; this.toast("A drone is hovering above the ICE line. Climb, blast it, and drop back down before the ice stalls you.", 4600); }
    },
    /* the drones' home positions for this canvas size */
    suitPlaceDrones: function () {
      var B = this.su, W = this.W, k = B.k, self = this;
      var n = B.drones.length ? B.drones[0].n : 4, low = n - B.P.high, dr = B.P.drift * k;
      var x0 = Math.max(W * 0.36, B.startX + 170 * k) + dr, x1 = W - 52 * k - dr;
      if (x1 < x0 + 120 * k) x1 = x0 + 120 * k;
      B.drones.forEach(function (d) {
        var hy, hx = n > 1 ? x0 + (x1 - x0) * d.col / (n - 1) : (x0 + x1) / 2;
        if (d.high) hy = Math.max(26 * k, B.ceilY - (70 + (d.slot % 2) * 22) * k);
        else { var j = d.slot - B.P.high; hy = B.bandTop + (B.bandBot - B.bandTop) * (low > 1 ? j / (low - 1) : 0.5); }
        /* keep clear of the buttons over the canvas: step left of one on the right, above one on the left */
        var list = B.boxes.list || [], lo = Math.max(W * 0.3, B.startX + 120 * k) + dr, hi = W - 52 * k - dr;
        function hits(x, y) { return list.filter(function (bx) { return x + 44 * k + dr > bx.x0 && x - 44 * k - dr < bx.x1 && y + 58 * k > bx.y0 && y - 28 * k < bx.y1; }); }
        for (var pass = 0; pass < 3; pass++) hits(hx, hy).forEach(function (bx) {
          if (bx.y1 < self.H * 0.3) {
            /* a button along the top: slide beside it, or else hang just under it */
            var a = bx.x0 - 48 * k - dr, b = bx.x1 + 48 * k + dr;
            if (a >= lo && !hits(a, hy).length) hx = a; else if (b <= hi && !hits(b, hy).length) hx = b; else hy = bx.y1 + 30 * k;
          } else if (bx.x0 > W / 2) hx = Math.max(lo, bx.x0 - 48 * k - dr);
          else hy = Math.max(B.bandTop, bx.y0 - 62 * k);
        });
        d.hx = hx; d.hy = hy;
      });
    },
    suitKillDrone: function (d) {
      try { d.spr.destroy(); d.shield.destroy(); d.label.destroy(); } catch (e) {}
    },
    /* is a drone's shield up right now (and is it about to come up: a flicker) */
    suitShieldUp: function (d) {
      var P = this.su.P;
      if (!P.shield) return 0;
      var f = (this.su.t / 3.4 + d.sph) % 1;
      return f < P.shield ? 1 : f > 1 - 0.09 ? 0.5 : 0;
    },
    /* the part of a drone a blast can hit: the drone and its tag below it */
    suitDroneHit: function (d, x, y) {
      var k = this.su.k, dx = x - d.x, dy = y - d.y;
      return Math.abs(dx) < 34 * k && dy > -20 * k && dy < 52 * k + (this.su.tk - k) * 26;
    },
    suitDroneIdx: function (Lt) { var D = this.su.drones; for (var i = 0; i < D.length; i++) if (D[i].letter === Lt) return i; return -1; },

    /* ── the suit ── */
    suitPt: function (lx, ly) {
      var B = this.su, c = Math.cos(B.rot), s = Math.sin(B.rot), x = lx * B.face;
      return { x: B.x + (x * c - ly * s) * B.sc, y: B.y + (x * s + ly * c) * B.sc };
    },
    suitPalm: function () { return this.suitPt(PALM_FIRE[0], PALM_FIRE[1]); },
    /* the angle from the palm toward a point, kept within reach of the arm on the side it faces */
    suitAimAt: function (px, py) {
      var B = this.su, p = this.suitPalm(), a = Math.atan2(py - p.y, px - p.x);
      if (B.face > 0) return clamp(a, -AIM_MAX, AIM_MAX);
      return Math.PI + clamp(angDiff(a, Math.PI), -AIM_MAX, AIM_MAX);
    },
    /* how close the suit's body comes to a point (for lasers and missiles) */
    suitBodyDist: function (fn) {
      var B = this.su, best = 1e9;
      for (var i = -2; i <= 2; i++) best = Math.min(best, fn(B.x, B.y + i * 22 * B.sc));
      return best;
    },

    tick_suit: function (s, inp, ms) {
      var B = this.su, frame = this.game && this.game.loop ? this.game.loop.frame : 0;
      if (frame > B.lastFrame + 1) B.armed = false;   /* frames went by without a tick (the reading pop-up): a key still held does not fire */
      B.lastFrame = frame;
      B.t += s;
      if (!B.told.start) { B.told.start = true; this.toast("▲ climbs, let go to hover, ◀ ▶ fly. Get level with the right drone and press Space (or click it) to blast it.", 5600); }
      this.suitFly(s, inp, ms);
      this.suitWeapons(s, inp, ms);
      this.suitBolts(s);
      if (this._finishing) return this.suitDraw(s, ms);
      this.suitDrones(s, ms);
      this.suitHunters(s, ms);
      if (this._finishing) return this.suitDraw(s, ms);
      this.suitMissiles(s, ms);
      if (this._finishing) return this.suitDraw(s, ms);
      this.suitIce(s, ms);
      this.suitDraw(s, ms);
    },

    suitFly: function (s, inp, ms) {
      var B = this.su, P = B.P, k = B.k, ax = 0, ay = 0;
      if (B.stalled) {
        /* iced up: the engines are out and the suit tumbles until it is well below the line */
        B.stallMs -= ms;
        B.vy = Math.min(VDN * k, B.vy + G * k * s);
        B.vx *= Math.exp(-1.2 * s);
        B.spin += s * 5.5 * B.face;
        if (B.stallMs <= 0 && (B.y > B.ceilY + 70 * k || B.landed)) {
          B.stalled = false; B.ice = 0; B.spin = 0;
          this.suitSfx("restart");
          this.toast("Ice melted, engines back online. Stay under the ICE line!", 2600);
        }
      } else {
        ax = inp.ax; ay = inp.ay;
        if (ay < 0) B.vy -= (THRUST - G) * k * s;
        else if (ay > 0) B.vy += (G + DIVE) * k * s * 0.6;
        else B.vy += (P.sink * k - B.vy) * Math.min(1, P.hover * s);
        if (ax) B.vx += ax * ACC * k * s; else B.vx *= Math.exp(-2.6 * s);
        if (ax) B.face = ax > 0 ? 1 : -1;
        if (ay < 0 && !B.wasUp) this.suitSfx("thrust");
        B.wasUp = ay < 0;
      }
      /* the crosswind (level 31 on): a slow gust one way or the other */
      B.windA = P.wind ? P.wind * k * (0.65 * Math.sin(B.t * 0.31 + B.wph) + 0.35 * Math.sin(B.t * 0.83 + B.wph * 2)) : 0;
      if (P.wind && !B.told.wind && B.t > 2.5) { B.told.wind = true; this.toast("A crosswind is pushing the suit sideways. The WIND arrow on your HUD shows which way.", 4200); }
      B.vx += B.windA * s;
      B.vx = clamp(B.vx, -VX * k, VX * k); B.vy = clamp(B.vy, -VUP * k, VDN * k);
      B.x += B.vx * s; B.y += B.vy * s;
      if (B.x < B.minX) { B.x = B.minX; B.vx = Math.max(0, B.vx); }
      if (B.x > B.maxX) { B.x = B.maxX; B.vx = Math.min(0, B.vx); }
      if (B.y < B.minY) { B.y = B.minY; B.vy = Math.max(0, B.vy); }
      B.landed = false;
      if (B.y > B.maxY) { B.y = B.maxY; B.vy = Math.min(0, B.vy); B.landed = true; }
      var want = B.stalled ? 0 : ay < 0 ? 1 : ay > 0 ? 0.25 : 0.55;
      B.thrust += (want - B.thrust) * Math.min(1, s * 9);
      var tilt = B.vx / (VX * k) * 0.42 * (B.fireMs > 0 ? 0.35 : 1);
      B.tilt += (tilt - B.tilt) * Math.min(1, s * 7);
      B.rot = B.tilt + B.spin;
    },

    suitWeapons: function (s, inp, ms) {
      var B = this.su, P = B.P;
      if (!inp.fire) B.armed = true;
      if (B.cd > 0) B.cd -= ms;
      if (B.fireMs > 0) B.fireMs -= ms;
      B.heat = Math.max(0, B.heat - P.cool * s * (B.ohMs > 0 ? 1.5 : 1));
      if (B.ohMs > 0) {
        B.ohMs -= ms;
        if (Math.random() < s * 14) { var p = this.suitPt(PALM_IDLE[1][0], PALM_IDLE[1][1]); this.suitPuff(p.x, p.y); }
        if (B.ohMs <= 0) { B.heat = Math.min(B.heat, 0.5); this.suitSfx("restart"); }
      }
      if (B.heat > 0.72 && !B.hotWarned) { B.hotWarned = true; this.suitSfx("hot"); if (!B.told.hot) { B.told.hot = true; this.toast("HEAT is high! Ease off the trigger and let the suit cool.", 3000); } }
      if (B.heat < 0.6) B.hotWarned = false;
      if (inp.fire && B.armed && B.cd <= 0 && !B.stalled && !this._between && B.ohMs <= 0) {
        var ang;
        if (inp.ptr) { B.face = inp.ptr.x >= B.x ? 1 : -1; ang = this.suitAimAt(inp.ptr.x, inp.ptr.y); }
        else ang = B.face > 0 ? 0 : Math.PI;
        this.suitFire(ang);
      }
    },
    /* a repulsor blast at this angle; firing with the HEAT bar too full overheats the suit instead */
    suitFire: function (ang) {
      var B = this.su, P = B.P, k = B.k;
      if (B.ohMs > 0 || B.stalled) return null;
      if (B.heat + P.heatShot > 1.0001) { this.suitOverheat(); return null; }
      B.heat += P.heatShot; B.cd = FIRE_MS; B.fireMs = 300; B.shots += 1;
      if (Math.cos(ang) !== 0) B.face = Math.cos(ang) >= 0 ? 1 : -1;
      B.rot = B.tilt + B.spin;
      var p = this.suitPalm();
      var b = B.boltPool.pop() || { spr: this.add.image(0, 0, "md-suit-bolt").setOrigin(0.85, 0.5).setDepth(15).setBlendMode(1) };
      b.x = p.x; b.y = p.y; b.vx = Math.cos(ang) * BOLT_V * k; b.vy = Math.sin(ang) * BOLT_V * k; b.ang = ang; b.live = true; b.t = 0;
      b.spr.setVisible(true).setPosition(b.x, b.y).setRotation(ang).setScale(k * 0.95);
      B.bolts.push(b);
      this.suitSfx("blast");
      return b;
    },
    suitFreeBolt: function (b) {
      var B = this.su, i = B.bolts.indexOf(b);
      if (i !== -1) B.bolts.splice(i, 1);
      b.live = false;
      try { b.spr.setVisible(false); } catch (e) {}
      if (B.boltPool.indexOf(b) === -1) B.boltPool.push(b);
    },
    suitOverheat: function () {
      var B = this.su;
      if (B.ohMs > 0) return;
      B.ohMs = 1900; B.heat = 1; B.overheats += 1; B.hitQ += 1;
      this.suitSfx("overheat");
      var p = this.suitPalm(); this.burst(p.x, p.y, 0xff8a3a, 12);
      if (this.loseLife("hit", "OVERHEATED")) B.hits += 1;
      if (!this._finishing) this.toast("Overheated! The repulsors vent for a moment. Fire in short bursts and keep the HEAT bar out of the red.", 4000);
    },

    suitBolts: function (s) {
      var B = this.su, W = this.W, H = this.H, k = B.k, self = this;
      B.bolts.slice().forEach(function (b) {
        if (!b.live) return;
        var dist = Math.sqrt(b.vx * b.vx + b.vy * b.vy) * s, steps = Math.max(1, Math.ceil(dist / (8 * k))), i;
        for (i = 0; i < steps && b.live; i++) {
          b.x += b.vx * s / steps; b.y += b.vy * s / steps;
          self.suitBoltHits(b);
          if (self._finishing) return;
        }
        if (!b.live) return;
        b.t += s;
        b.spr.setPosition(b.x, b.y);
        if (b.x < -60 || b.x > W + 60 || b.y < -60 || b.y > H + 60) { self.suitFreeBolt(b); B.wasted = (B.wasted || 0) + 1; }
      });
    },
    /* what a blast meets at its head */
    suitBoltHits: function (b) {
      var B = this.su, k = B.k, i;
      for (i = 0; i < B.missiles.length; i++) {
        var m = B.missiles[i];
        if (m.state === "fly" && Math.abs(b.x - m.x) < 18 * k && Math.abs(b.y - m.y) < 14 * k) { this.suitFreeBolt(b); this.suitMissileDown(m, true); return; }
      }
      for (i = 0; i < B.hunters.length; i++) {
        var h = B.hunters[i];
        if (h.state !== "gone" && h.enter >= 1 && Math.abs(b.x - h.x) < 32 * k && Math.abs(b.y - h.y) < 17 * k) { this.suitFreeBolt(b); this.suitHunterDown(h); return; }
      }
      for (i = 0; i < B.drones.length; i++) {
        var d = B.drones[i];
        if (d.state !== "live" || d.enter < 0.98 || !this.suitDroneHit(d, b.x, b.y)) continue;
        this.suitFreeBolt(b);
        if (this.suitShieldUp(d) === 1) {
          this.burst(b.x, b.y, 0x9ad8ff, 8); d.shieldFlash = 260; this.suitSfx("deflect");
          if (!B.told.shield) { B.told.shield = true; this.toast("The blast bounced off the shield! Wait for the blue shield to drop, then fire.", 3600); }
          return;
        }
        this.suitHitDrone(d);
        return;
      }
    },
    /* a blast hit a drone: it answers with that drone's letter */
    suitHitDrone: function (d) {
      var B = this.su, k = B.k, x = d.x, y = d.y, clean = !this.claimWrong && !B.hitQ;
      if (this.ended || this._finishing || this._between) return "ignore";
      /* off the list first: a right answer clears the field (clear_suit) inside answerPick */
      d.state = "gone";
      var i = B.drones.indexOf(d); if (i !== -1) B.drones.splice(i, 1);
      var res = this.answerPick(d.letter, x, y - 34 * k);
      this.suitBoom(x, y, res === "wrong" ? 0xff6a4a : 0xffd86a, res === "wrong" ? 1 : 1.25);
      this.suitKillDrone(d);
      if (res === "wrong") {
        if (!B.told.wrong) { B.told.wrong = true; this.toast("Wrong drone! That costs a life. Read the question again and find the right letter.", 3400); }
      } else if (res === "partial") {
        this.burst(x, y, 0x9aefc0, 18);
      } else if (res === "done") {
        if (clean && !this.ended) this.awardBonusPoints(800, "Clean shot: no wrong drone, no overheat, no stall");
      }
      return res;
    },
    /* an explosion: a flash, a ring, sparks */
    suitBoom: function (x, y, col, size) {
      var B = this.su;
      B.booms.push({ x: x, y: y, t: 0, col: col, s: size || 1 });
      this.burst(x, y, col, Math.round(18 * (size || 1)));
      this.suitSfx("boom");
    },
    suitPuff: function (x, y) {
      var B = this.su, p = B.puffs.length < 40 ? { spr: this.add.image(x, y, "md-suit-puff").setDepth(15) } : B.puffs.shift();
      p.x = x; p.y = y; p.t = 0; p.vx = rnd(-20, 20) * B.k; p.vy = rnd(-60, -30) * B.k;
      p.spr.setPosition(x, y).setVisible(true);
      B.puffs.push(p);
    },

    suitDrones: function (s, ms) {
      var B = this.su, P = B.P, k = B.k, W = this.W;
      B.drones.forEach(function (d) {
        if (d.enter < 1) d.enter = Math.min(1, d.enter + s * 1.3);
        var e = 1 - d.enter;
        d.x = d.hx + P.drift * k * Math.sin(B.t * P.driftSp + d.ph) + e * e * (W + 90 * k - d.hx);
        d.y = d.hy + P.bob * k * Math.sin(B.t * 1.7 + d.ph * 1.3) - e * e * 40 * k;
        if (d.shieldFlash > 0) d.shieldFlash -= ms;
      });
      /* drones leaving after a right answer */
      for (var i = B.leaving.length - 1; i >= 0; i--) {
        var l = B.leaving[i];
        l.t += s; l.vy -= 260 * k * s; l.x += l.vx * s; l.y += l.vy * s;
        var a = clamp(1 - l.t / 0.9, 0, 1);
        l.spr.setPosition(l.x, l.y).setAlpha(a); l.label.setPosition(l.x, l.y + 37 * k).setAlpha(a);
        if (l.t > 0.9) { this.suitKillDrone(l); B.leaving.splice(i, 1); }
      }
    },

    /* ── the hunter drones (level 21 on): paint the suit with a laser line, then fire along it ── */
    suitHunters: function (s, ms) {
      var B = this.su, P = B.P, k = B.k, W = this.W, self = this;
      var live = B.hunters.filter(function (h) { return h.state !== "gone"; }).length;
      if (B.hunterSpawn > 0) B.hunterSpawn -= ms;
      if (live < P.hunters && B.hunterSpawn <= 0 && !this._between) { this.suitSpawnHunter(); B.hunterSpawn = 1600; }
      for (var i = B.hunters.length - 1; i >= 0; i--) {
        var h = B.hunters[i];
        if (h.state === "gone") { B.hunters.splice(i, 1); continue; }
        if (h.enter < 1) h.enter = Math.min(1, h.enter + s * 0.8);
        if (h.state === "patrol") {
          h.u += s * h.sp;
          var tx = W * (0.5 + 0.4 * Math.sin(h.u + h.ph)), ty = h.baseY + 22 * k * Math.sin(h.u * 1.7 + h.ph);
          var e = 1 - h.enter;
          h.x = tx + e * e * (h.side * (W * 0.6 + 80 * k)); h.y = ty;
          h.cd -= ms;
          if (h.cd <= 0 && h.enter >= 1 && !this._between && !B.stalled) this.suitHunterAim(h);
        } else if (h.state === "warn") {
          h.t += ms;
          if (h.t >= P.warnMs) this.suitHunterShoot(h);
          if (this._finishing) return;
        }
        if (h.flash > 0) h.flash -= ms;
        h.spr.setPosition(h.x, h.y).setFlipX(h.dx < 0);
      }
    },
    suitSpawnHunter: function () {
      var B = this.su, P = B.P, k = B.k, side = Math.random() < 0.5 ? -1 : 1;
      var h = { state: "patrol", side: side, u: rnd(0, TAU), ph: rnd(0, TAU), sp: rnd(0.22, 0.32), enter: 0, t: 0, flash: 0, dx: -side,
        baseY: B.bandTop + (B.bandBot - B.bandTop) * rnd(0.05, 0.4), cd: P.hunterEvery * rnd(0.5, 0.8) };
      h.x = side > 0 ? this.W + 80 * k : -80 * k; h.y = h.baseY;
      h.spr = this.add.image(h.x, h.y, "md-suit-hunter").setScale(k * 0.9).setDepth(8);
      B.hunters.push(h);
      if (!B.told.hunter) { B.told.hunter = true; this.toast("A hunter drone! When its red laser line points at you, get out of the line before it fires. Blast it for a bonus.", 4800); }
      return h;
    },
    /* the hunter stops and paints a line through where the suit is now */
    suitHunterAim: function (h) {
      var B = this.su;
      h.state = "warn"; h.t = 0;
      var dx = B.x - h.x, dy = B.y - h.y, L2 = Math.sqrt(dx * dx + dy * dy) || 1;
      h.dx = dx / L2; h.dy = dy / L2;
      this.suitSfx("charge");
      return h;
    },
    suitHunterShoot: function (h) {
      var B = this.su, P = B.P, k = B.k;
      h.state = "patrol"; h.flash = 170; h.cd = P.hunterEvery * rnd(0.85, 1.15);
      this.suitSfx("laser");
      var d = this.suitBodyDist(function (x, y) { var px = x - h.x, py = y - h.y, along = px * h.dx + py * h.dy; if (along < 0) return 1e9; return Math.abs(px * h.dy - py * h.dx); });
      if (d < 15 * k && !B.stalled) {
        this.burst(B.x, B.y, 0xff5a4a, 14);
        if (this.loseLife("hit", "HIT BY A HUNTER'S LASER")) { B.hits += 1; B.hitQ += 1; }
        return true;
      }
      return false;
    },
    suitHunterDown: function (h) {
      var B = this.su;
      h.state = "gone";
      this.suitBoom(h.x, h.y, 0xff7a5a, 1);
      try { h.spr.destroy(); } catch (e) {}
      B.hunterSpawn = 6500; B.kills += 1;
      this.addKill(h.x, h.y, "Twelve drones down");
      this.awardBonusPoints(300, "Hunter drone down");
    },

    /* ── homing missiles (level 61 on): MISSILE LOCK, then one (or two) chase the suit until the fuel runs out ── */
    suitMissiles: function (s, ms) {
      var B = this.su, P = B.P, k = B.k, W = this.W, i;
      if (P.missiles && !this._between && !B.mWarn.length) {
        B.missileCd -= ms;
        if (B.missileCd <= 0) this.suitMissileLock();
      }
      for (i = B.mWarn.length - 1; i >= 0; i--) {
        var w = B.mWarn[i];
        w.t += ms;
        if (Math.floor(w.t / 170) !== Math.floor((w.t - ms) / 170) && w.t > 0) this.suitSfx("lock");
        if (w.t >= P.warnMs + 300) { B.mWarn.splice(i, 1); this.suitLaunch(w.side, w.y); }
      }
      for (i = B.missiles.length - 1; i >= 0; i--) {
        var m = B.missiles[i];
        m.t += s;
        if (m.state === "fly") {
          var want = Math.atan2(B.y - m.y, B.x - m.x), d = angDiff(want, m.ang);
          m.ang += clamp(d, -P.missileTurn * s, P.missileTurn * s);
          m.x += Math.cos(m.ang) * m.sp * s; m.y += Math.sin(m.ang) * m.sp * s;
          var tx = m.x - Math.cos(m.ang) * 20 * k, ty = m.y - Math.sin(m.ang) * 20 * k;
          if (!m.lt || Math.abs(tx - m.lt.x) + Math.abs(ty - m.lt.y) > 5 * k) { m.lt = { x: tx, y: ty, t: 0 }; B.trail.push(m.lt); }
          m.fuel -= s;
          var dx = (m.x - B.x) / (24 * k), dy = (m.y - B.y) / (52 * B.sc);
          if (dx * dx + dy * dy < 1) {
            this.suitMissileDown(m, false);
            if (this.loseLife("hit", "MISSILE HIT")) { B.hits += 1; B.hitQ += 1; }
            if (this._finishing) return;
            continue;
          }
          if (m.fuel <= 0) { m.state = "dud"; m.t = 0; m.vy = 0; if (!B.told.dud) { B.told.dud = true; this.toast("Outflown! The missile ran out of fuel.", 2400); } }
        } else if (m.state === "dud") {
          m.vy += 600 * k * s; m.x += Math.cos(m.ang) * m.sp * 0.5 * s; m.y += m.vy * s; m.ang += s * 2 * (Math.cos(m.ang) >= 0 ? 1 : -1);
          if (Math.random() < s * 20) B.trail.push({ x: m.x, y: m.y, t: 0 });
          if (m.t > 1.4) { try { m.spr.destroy(); } catch (e) {} B.missiles.splice(i, 1); continue; }
        }
        m.spr.setPosition(m.x, m.y).setRotation(m.ang).setAlpha(m.state === "dud" ? clamp(1.4 - m.t, 0, 1) : 1);
      }
    },
    suitMissileLock: function () {
      var B = this.su, P = B.P, list = [];
      for (var j = 0; j < Math.max(1, P.missiles); j++) {
        var side = j === 0 ? (B.x < this.W / 2 ? 1 : -1) : -B.mWarn[0].side;
        var w = { side: side, y: B.bandTop + (B.bandBot - B.bandTop) * rnd(0.1, 0.9), t: -j * 450 };
        B.mWarn.push(w); list.push(w);
      }
      B.missileCd = P.missileEvery * rnd(0.85, 1.15);
      if (!B.told.missile) { B.told.missile = true; this.toast("MISSILE LOCK! A missile is coming from the side the arrow shows. Outfly it until it runs out of fuel, or blast it.", 4800); }
      return list;
    },
    suitLaunch: function (side, y) {
      var B = this.su, P = B.P, k = B.k;
      var m = { state: "fly", x: side > 0 ? this.W + 30 * k : -30 * k, y: y, sp: P.missileSp * k, fuel: 4.6, t: 0 };
      m.ang = Math.atan2(B.y - m.y, B.x - m.x);
      m.spr = this.add.image(m.x, m.y, "md-suit-missile").setScale(k).setDepth(11);
      B.missiles.push(m);
      this.suitSfx("launch");
      return m;
    },
    suitMissileDown: function (m, shot) {
      var B = this.su, i = B.missiles.indexOf(m);
      if (i !== -1) B.missiles.splice(i, 1);
      this.suitBoom(m.x, m.y, 0xffa04a, 0.9);
      try { m.spr.destroy(); } catch (e) {}
      if (shot) { B.kills += 1; this.addKill(m.x, m.y, "Twelve down"); this.awardBonusPoints(300, "Missile shot down"); }
    },

    /* ── the ice above the line ── */
    suitIce: function (s, ms) {
      var B = this.su, P = B.P;
      B.inIce = B.y < B.ceilY && !B.stalled;
      if (B.inIce) {
        B.ice = Math.min(1, B.ice + P.iceRate * s);
        if (!B.told.ice) { B.told.ice = true; this.toast("Ice is forming on the suit! Drop back below the ICE line before the ICE bar fills, or the engines stall.", 4200); }
        if (Math.random() < s * 5) this.suitSfx("crackle");
        if (B.ice >= 1) this.suitStall();
      } else if (!B.stalled) B.ice = Math.max(0, B.ice - P.thaw * s);
    },
    suitStall: function () {
      var B = this.su, k = B.k;
      if (B.stalled) return;
      B.stalled = true; B.stallMs = 1300; B.stalls += 1; B.hitQ += 1; B.ice = 1;
      B.vy = Math.max(B.vy, 60 * k);
      this.suitSfx("stall");
      if (this.loseLife("hit", "ICED UP: THE ENGINES STALLED")) B.hits += 1;
      if (!this._finishing) this.toast("The engines iced up and stalled! Stay below the ICE line, or pop up and drop straight back down.", 4200);
    },

    /* ── sound: the realm kit's WebAudio blips ── */
    suitSfx: function (name) {
      var R = window.SolRealms;
      if (!R || !R.blip) return;
      try {
        if (name === "blast") { R.blip(170, 820, 0.09, "sine", 0.05); R.blip(1300, 260, 0.13, "sawtooth", 0.012); R.hiss(0.12, 3200, 0.025); }
        else if (name === "boom") { R.hiss(0.5, 520, 0.07); R.blip(110, 38, 0.45, "triangle", 0.08); }
        else if (name === "overheat") { R.blip(880, 880, 0.12, "square", 0.03); R.blip(660, 660, 0.12, "square", 0.03, 0.16); R.hiss(0.9, 2400, 0.05); }
        else if (name === "hot") R.blip(1250, 1250, 0.06, "square", 0.018);
        else if (name === "stall") { R.blip(420, 90, 0.7, "sawtooth", 0.04); R.hiss(0.5, 6000, 0.04); }
        else if (name === "restart") R.blip(300, 900, 0.25, "sine", 0.035);
        else if (name === "thrust") R.hiss(0.22, 900, 0.025);
        else if (name === "crackle") R.hiss(0.05, 5200 + Math.random() * 2000, 0.025);
        else if (name === "deflect") R.blip(2000, 2600, 0.07, "triangle", 0.03);
        else if (name === "charge") R.blip(260, 980, Math.max(0.3, this.su.P.warnMs / 1000), "sine", 0.014);
        else if (name === "laser") { R.blip(1700, 180, 0.16, "sawtooth", 0.03); R.hiss(0.1, 4000, 0.03); }
        else if (name === "lock") R.blip(1560, 1560, 0.05, "square", 0.02);
        else if (name === "launch") R.hiss(0.6, 1100, 0.05);
      } catch (e) {}
    },

    /* ── drawing every frame ── */
    suitDraw: function (s, ms) {
      var B = this.su, P = B.P, k = B.k, W = this.W, H = this.H, fx = B.fx, self = this, i;
      fx.clear(); B.tagG.clear(); B.ambG.clear(); B.lightG.clear(); B.top.clear();
      /* parallax: the city shifts a little with the suit */
      var sh = clamp((B.x / W - 0.5) * 2, -1, 1), shy = clamp((B.y / H - 0.5) * 2, -1, 1);
      var lay = [[B.far, B.layers.far, 0.25], [B.mid, B.layers.mid, 0.5], [B.near, B.layers.near, 1]];
      lay.forEach(function (q) { q[0].setPosition(-q[1].pad - sh * q[1].pad * 0.9, q[1].y0 - shy * 4 * k * q[2]); });
      /* red warning lights on the towers, blinking */
      [[B.mid, B.layers.mid], [B.near, B.layers.near]].forEach(function (q) {
        q[1].lights.forEach(function (l2) {
          var on = Math.sin(B.t * 2.4 + l2.ph) > 0.35, x = q[0].x + l2.x, y = q[0].y - q[1].y0 + l2.y;
          if (x < -10 || x > W + 10) return;
          B.lightG.fillStyle(0xff3a2a, on ? 0.95 : 0.25); B.lightG.fillCircle(x, y, 1.7 * k);
          if (on) { B.lightG.fillStyle(0xff4a3a, 0.22); B.lightG.fillCircle(x, y, 6 * k); }
        });
      });
      /* the ice zone: crystals drifting, the dashed line */
      var cy = B.ceilY, pulse = B.inIce ? 0.6 + 0.4 * Math.sin(B.t * 10) : 0.55;
      B.flakes.forEach(function (f) {
        f.x += f.sp * s * 0.3; if (f.x > 1) f.x -= 1;
        var y = f.y * cy * 0.95 + Math.sin(B.t + f.ph) * 3 * k;
        B.ambG.fillStyle(0xe8faff, 0.5); B.ambG.fillCircle(f.x * W, y, f.r * k);
      });
      for (var dx = 0; dx < W; dx += 18 * k) { B.ambG.fillStyle(0xd8f4ff, pulse); B.ambG.fillRect(dx, cy - 1, 10 * k, 2); }
      B.txCeil.setAlpha(0.6 + 0.4 * pulse);

      /* the drones and their holographic tags */
      B.drones.forEach(function (d) {
        d.spr.setPosition(d.x, d.y);
        var sht = self.suitShieldUp(d), tagY = d.y + 37 * k + (B.tk - k) * 12;
        d.shield.setVisible(sht > 0 && d.enter >= 1).setPosition(d.x, d.y + 8 * k).setAlpha(sht === 1 ? 0.95 : 0.3 + 0.3 * Math.sin(B.t * 40)).setScale(k * 0.92 * (d.shieldFlash > 0 ? 1.08 : 1));
        d.label.setPosition(d.x, tagY);
        var g = B.tagG, w = 36 * B.tk, h = 28 * B.tk;
        g.lineStyle(1.4 * k, HUD_CY, 0.55); g.lineBetween(d.x, d.y + 14 * k, d.x, tagY - h / 2);
        g.fillStyle(0x061420, 0.82); g.fillRoundedRect(d.x - w / 2, tagY - h / 2, w, h, 5 * k);
        g.lineStyle(1.6 * k, HUD_CY, 0.95); g.strokeRoundedRect(d.x - w / 2, tagY - h / 2, w, h, 5 * k);
        g.fillStyle(HUD_CY, 0.9); g.fillRect(d.x - w / 2 + 3 * k, tagY - h / 2 - 2 * k, 8 * k, 2 * k);
        /* the fans: a shimmer */
        g.fillStyle(0xbfe8ff, 0.18 + 0.12 * Math.sin(B.t * 31 + d.ph)); g.fillEllipse(d.x - 28 * k, d.y - 6 * k, 22 * k, 5 * k); g.fillEllipse(d.x + 28 * k, d.y - 6 * k, 22 * k, 5 * k);
      });
      B.leaving.forEach(function (l) { l.shield.setVisible(false); });

      /* the hunters: their laser lines */
      B.hunters.forEach(function (h) {
        if (h.state === "warn") {
          var f = clamp(h.t / P.warnMs, 0, 1), L2 = Math.max(W, H) * 1.5, ex = h.x + h.dx * L2, ey = h.y + h.dy * L2;
          fx.lineStyle((1 + 2.5 * f) * k, 0xff2a2a, 0.35 + 0.5 * f); fx.lineBetween(h.x, h.y, ex, ey);
          fx.lineStyle(1 * k, 0xffd0d0, 0.5 * f); fx.lineBetween(h.x, h.y, ex, ey);
          fx.fillStyle(0xff3a3a, 0.4 + 0.5 * f); fx.fillCircle(h.x, h.y, (4 + 6 * f) * k);
        }
        if (h.flash > 0) {
          var L3 = Math.max(W, H) * 1.5, a = h.flash / 170;
          fx.lineStyle(9 * k, 0xff3a2a, 0.35 * a); fx.lineBetween(h.x, h.y, h.x + h.dx * L3, h.y + h.dy * L3);
          fx.lineStyle(3.5 * k, 0xfff0e8, a); fx.lineBetween(h.x, h.y, h.x + h.dx * L3, h.y + h.dy * L3);
        }
      });
      /* missile trails and lock warnings */
      for (i = B.trail.length - 1; i >= 0; i--) {
        var tr = B.trail[i]; tr.t += s;
        if (tr.t > 0.9) { B.trail.splice(i, 1); continue; }
        var tu = tr.t / 0.9;
        fx.fillStyle(0xcfd5de, 0.22 * (1 - tu)); fx.fillCircle(tr.x, tr.y - tr.t * 10 * k, (4 + tr.t * 12) * k);
        fx.fillStyle(0xf2f4f8, 0.3 * (1 - tu) * (1 - tu)); fx.fillCircle(tr.x, tr.y - tr.t * 10 * k, (2 + tr.t * 5) * k);
      }
      B.missiles.forEach(function (m) {
        if (m.state !== "fly") return;
        var bx = m.x - Math.cos(m.ang) * 22 * k, by = m.y - Math.sin(m.ang) * 22 * k;
        fx.fillStyle(0xffd08a, 0.9); fx.fillCircle(bx, by, (3 + Math.random() * 2) * k);
        fx.fillStyle(0xff7a3a, 0.4); fx.fillCircle(bx, by, (7 + Math.random() * 3) * k);
      });
      var lockOn = B.mWarn.length > 0;
      B.txLock.setVisible(lockOn && Math.floor(B.t * 6) % 2 === 0);
      B.mWarn.forEach(function (w) {
        var ax = w.side > 0 ? W - 16 * k : 16 * k, ay = w.y, d2 = -w.side, bl = Math.floor(B.t * 6) % 2 === 0 ? 1 : 0.45;
        fx.fillStyle(0xff4a3a, bl); fx.fillTriangle(ax + d2 * 16 * k, ay, ax, ay - 11 * k, ax, ay + 11 * k);
        fx.lineStyle(2 * k, 0xff4a3a, bl * 0.8); fx.strokeCircle(ax + d2 * 30 * k, ay, 12 * k);
      });

      /* the blasts' glow trail, the explosions, the steam */
      B.bolts.forEach(function (b) { fx.fillStyle(0x9ad8ff, 0.25); fx.fillCircle(b.x, b.y, 9 * k); });
      for (i = B.booms.length - 1; i >= 0; i--) {
        var bm = B.booms[i]; bm.t += s;
        if (bm.t > 0.6) { B.booms.splice(i, 1); continue; }
        var u = bm.t / 0.6;
        fx.fillStyle(0xfff6e0, 0.8 * (1 - u) * (1 - u)); fx.fillCircle(bm.x, bm.y, (14 + 26 * u) * k * bm.s);
        fx.lineStyle(3 * k * (1 - u), bm.col, 1 - u); fx.strokeCircle(bm.x, bm.y, (10 + 60 * u) * k * bm.s);
        fx.fillStyle(bm.col, 0.4 * (1 - u)); fx.fillCircle(bm.x, bm.y, (22 + 30 * u) * k * bm.s);
      }
      for (i = B.puffs.length - 1; i >= 0; i--) {
        var pf = B.puffs[i]; pf.t += s;
        pf.x += pf.vx * s; pf.y += pf.vy * s;
        pf.spr.setPosition(pf.x, pf.y).setScale(k * (0.5 + pf.t * 1.4)).setAlpha(clamp(1 - pf.t / 0.9, 0, 1));
        if (pf.t > 0.9) pf.spr.setVisible(false);
      }

      this.suitDrawSuit(s);
      this.suitDrawAim();
      this.suitDrawHud();
    },
    suitDrawSuit: function (s) {
      var B = this.su, k = B.k, self = this, fire = B.fireMs > 0;
      B.suit.setTexture(fire ? "md-suit-fire" : "md-suit-body").setFlipX(B.face < 0).setPosition(B.x, B.y).setRotation(B.rot);
      this.blink(B.suit);
      var ice = B.ice, tint = ice > 0.02 ? L.mix(0xffffff, 0xa8dcff, Math.min(1, ice * 1.1)) : 0xffffff;
      B.suit.setTint(tint);
      var cp = this.suitPt(0, -24.5);
      B.chest.setPosition(cp.x, cp.y).setAlpha((0.75 + 0.2 * Math.sin(B.t * 5)) * (B.stalled ? 0.4 : 1));
      /* the boot jets, and the back palm's jet when it hangs at the side */
      var jets = BOOTS.slice(); if (!fire) jets.push(PALM_IDLE[0]); else jets.push(null);
      var on = !B.stalled || Math.random() < 0.15, len = B.thrust;
      jets.forEach(function (j, i) {
        var f = B.flames[i];
        if (!j || !on) { f.setVisible(false); return; }
        var p = self.suitPt(j[0], j[1]), fl = (0.85 + Math.random() * 0.3) * (i < 2 ? len : len * 0.5);
        f.setVisible(true).setPosition(p.x, p.y).setRotation(B.rot + (i === 2 ? B.face * 0.35 : 0)).setScale(B.sc * (i < 2 ? 0.75 : 0.5), B.sc * fl * (i < 2 ? 1 : 0.6)).setAlpha(B.suit.alpha);
        if (i < 2) B.jetGlow[i].setPosition(p.x, p.y + 4 * k).setScale(B.sc * (0.35 + 0.25 * len)).setAlpha(0.7 * B.suit.alpha).setVisible(true);
      });
      if (!on) B.jetGlow.forEach(function (g) { g.setVisible(false); });
      /* the palm, hot from the blast */
      if (fire) { var pp = this.suitPalm(); B.palm.setVisible(true).setPosition(pp.x, pp.y).setScale(B.sc * (0.45 + 0.35 * B.fireMs / 300)).setAlpha(0.9); }
      else B.palm.setVisible(false);
      /* the heat shows: the palms glow orange */
      var hot = clamp((B.heat - 0.45) / 0.55, 0, 1);
      var palms = fire ? [PALM_FIRE, PALM_IDLE[0]] : PALM_IDLE;
      B.heatGlow.forEach(function (g, i) {
        if (hot <= 0) { g.setVisible(false); return; }
        var p = self.suitPt(palms[i][0], palms[i][1]);
        g.setVisible(true).setPosition(p.x, p.y).setScale(B.sc * (0.3 + 0.5 * hot)).setAlpha(hot * (B.ohMs > 0 ? 0.6 + 0.4 * Math.sin(B.t * 30) : 0.85));
      });
      if (this.player) this.player.setPosition(B.x, B.y - 60 * k);
      /* the warning over the suit's head */
      var warn = B.stalled ? "STALL!" : B.ohMs > 0 ? "OVERHEAT: VENTING" : B.ice > 0.45 ? "ICING!" : B.heat > 0.72 ? "HEAT!" : "";
      var col = B.stalled || B.ohMs > 0 ? "#ff7a5a" : B.ice > 0.45 ? "#bff0ff" : "#ffc861";
      if (B.txWarn.text !== warn) B.txWarn.setText(warn);
      B.txWarn.setColor(col).setPosition(B.x, B.y - 66 * B.sc).setVisible(!!warn && Math.floor(B.t * 5) % 3 !== 0);
      /* frost on the screen edges as the ice builds */
      B.frost.setAlpha(clamp(B.ice * 1.05, 0, 1) * 0.9);
    },
    /* what a blast straight ahead would hit first (for the aim line and the lock-on) */
    suitAhead: function () {
      var B = this.su, k = B.k, p = this.suitPalm(), best = null, bd = 1e9, self = this;
      B.drones.forEach(function (d) {
        if (d.state !== "live" || d.enter < 0.98) return;
        var dx = (d.x - p.x) * B.face - 34 * k;
        if (dx > 0 && self.suitDroneHit(d, d.x, p.y) && dx < bd) { bd = dx; best = { kind: "drone", o: d, d: dx }; }
      });
      B.hunters.forEach(function (h) {
        if (h.state === "gone" || h.enter < 1) return;
        var dx = (h.x - p.x) * B.face - 32 * k;
        if (dx > 0 && Math.abs(p.y - h.y) < 17 * k && dx < bd) { bd = dx; best = { kind: "hunter", o: h, d: dx }; }
      });
      return best;
    },
    suitDrawAim: function () {
      var B = this.su, P = B.P, k = B.k, g = B.top;
      if (B.stalled || B.ohMs > 0 || this._between) return;
      var p = this.suitPalm(), t = this.suitAhead(), len = t ? t.d : (P.lock ? 230 : 90) * k, x;
      if (!P.lock) len = Math.min(len, 90 * k);
      for (x = 14 * k; x < len; x += 12 * k) { g.fillStyle(HUD_CY, 0.6 * (1 - x / (len + 40 * k))); g.fillCircle(p.x + B.face * x, p.y, 1.6 * k); }
      if (t && P.lock) {
        var o = t.o, cx = o.x, cy2 = t.kind === "drone" ? o.y + 14 * k : o.y, hw = (t.kind === "drone" ? 42 : 38) * k, hh = (t.kind === "drone" ? 44 : 24) * k, c = 10 * k;
        var col = t.kind === "drone" && this.suitShieldUp(o) === 1 ? 0x9ad8ff : HUD_GOLD, a = 0.75 + 0.25 * Math.sin(B.t * 9);
        g.lineStyle(2.2 * k, col, a);
        [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(function (q) {
          var ex = cx + q[0] * hw, ey = cy2 + q[1] * hh;
          g.lineBetween(ex, ey, ex - q[0] * c, ey); g.lineBetween(ex, ey, ex, ey - q[1] * c);
        });
      }
    },
    suitDrawHud: function () {
      var B = this.su, P = B.P, hk = B.hk, g = B.hud, x = B.hudX, y = B.hudY, w = B.hudW, h = B.hudH, i;
      g.clear();
      g.fillStyle(0x040b14, 0.62); g.fillRoundedRect(x, y, w, h, 8 * hk);
      g.lineStyle(1.2, HUD_CY, 0.55); g.strokeRoundedRect(x, y, w, h, 8 * hk);
      g.fillStyle(HUD_GOLD, 0.9); g.fillRect(x + 10 * hk, y - 1, 26 * hk, 2);
      /* HEAT: twenty segments, blue to amber to red */
      var bx = x + 52 * hk, bw = 108 * hk, seg = 20, sw = bw / seg, by = y + 11 * hk, bh = 10 * hk;
      var over = B.ohMs > 0, flash = Math.floor(B.t * 8) % 2 === 0;
      for (i = 0; i < seg; i++) {
        var f = (i + 0.5) / seg, lit = f <= B.heat + 0.001;
        var col = f < 0.5 ? 0x5fd0ff : f < 0.75 ? 0xffc861 : 0xff4a3a;
        g.fillStyle(lit ? (over && flash ? 0xffffff : col) : 0x1a2a38, lit ? 1 : 0.85);
        g.fillRect(bx + i * sw + 0.5, by, sw - 1.5, bh);
      }
      /* ICE */
      var iy = y + 31 * hk;
      for (i = 0; i < seg; i++) {
        var f2 = (i + 0.5) / seg, lit2 = f2 <= B.ice + 0.001;
        g.fillStyle(lit2 ? (B.stalled && flash ? 0xffffff : f2 < 0.6 ? 0x9fe6ff : 0xe8fbff) : 0x1a2a38, lit2 ? 1 : 0.85);
        g.fillRect(bx + i * sw + 0.5, iy, sw - 1.5, bh);
      }
      if (B.inIce) { g.lineStyle(1.5, 0xbff0ff, 0.6 + 0.4 * Math.sin(B.t * 12)); g.strokeRect(bx - 2, iy - 2, bw + 2, bh + 4); }
      if (B.heat > 0.72 || over) { g.lineStyle(1.5, HUD_RED, 0.6 + 0.4 * Math.sin(B.t * 12)); g.strokeRect(bx - 2, by - 2, bw + 2, bh + 4); }
      /* altitude, and the wind */
      var alt = Math.round(Math.max(0, (B.floorY - B.y) / Math.max(1, B.floorY - B.ceilY)) * 9000 / 10) * 10;
      var altTxt = "ALT " + alt;
      if (B.txAlt.text !== altTxt) B.txAlt.setText(altTxt);
      B.txAlt.setColor(B.y < B.ceilY ? "#e8fbff" : "#bff4ff");
      if (P.wind) {
        var wn = B.windA / (P.wind * B.k), n = Math.round(Math.abs(wn) * 3), ax0 = x + w - 32 * hk, ay = iy + bh / 2;
        for (i = 0; i < 3; i++) {
          var on = i < n, cx = ax0 + i * 9 * hk, d = wn >= 0 ? 1 : -1;
          g.fillStyle(HUD_CY, on ? 0.95 : 0.22);
          g.fillTriangle(cx + d * 4 * hk, ay, cx - d * 3 * hk, ay - 5 * hk, cx - d * 3 * hk, ay + 5 * hk);
        }
      }
    },

    /* a right answer: the other drones fly off, the hunters' lines and the missiles go */
    clear_suit: function () {
      var B = this.su, self = this, k = B.k;
      B.drones.forEach(function (d) {
        d.shield.setVisible(false);
        B.leaving.push(Object.assign(d, { t: 0, vx: (d.x > self.W / 2 ? 1 : -1) * rnd(120, 220) * k, vy: -rnd(40, 90) * k }));
      });
      B.drones = [];
      B.bolts.slice().forEach(function (b) { self.suitFreeBolt(b); });
      B.missiles.forEach(function (m) { self.suitBoom(m.x, m.y, 0xffa04a, 0.6); try { m.spr.destroy(); } catch (e) {} });
      B.missiles = []; B.mWarn = []; B.missileCd = Math.max(B.missileCd, 3500);
      B.hunters.forEach(function (h) { if (h.state === "warn") { h.state = "patrol"; h.cd = B.P.hunterEvery; } else h.cd = Math.max(h.cd, 2500); });
      try { B.fx.clear(); B.txLock.setVisible(false); } catch (e) {}
    }
  });
})();
