/* SOL Labyrinth v5.22 — the Lit and Film mode "gallery": The Gallery (Scarlet Street, Fritz Lang, 1945), a stealth level.
 *
 * A night gallery in Greenwich Village, drawn like a 1940s noir print: black, white and grey, rain running down the
 * windows, film grain and a vignette, and one touch of scarlet: the umbrella by the door, the painter's brush, the
 * cigarettes' embers and the signature. Chris Cross's paintings hang on the back wall under Kitty's name; the student
 * slips in through the door at the left and signs the painting with the right letter with his own name.
 *
 * The room is seen from the front: the back wall with its paintings and tall windows at the top, the floor below,
 * where the painter walks (arrow keys / WASD / the pad, or hold the mouse: he walks toward the pointer). Light is
 * the danger, and every light is drawn on the floor:
 *   - the venetian blinds throw slanted patches of horizontal bars from every window (from level 21 the blinds sway
 *     and the bars drift). In a bright bar you are lit: Johnny, the con man, sees you when he faces you.
 *   - Johnny patrols the room with a flashlight; its beam sees you anywhere it falls. He stops at each corner of
 *     his round and swings it about; from 31 he sometimes turns round (a "?" first); from 91 his round passes
 *     right under the paintings.
 *   - now and then a car passes in the street and its headlights sweep the whole floor through the blinds (the
 *     windows glow and a comb of bars shows at the side it comes from): stand in a dark row between its bright
 *     bars until it has passed. From 41 cars come from either side, from 81 in pairs.
 *   - from 71 Kitty waits by the right-hand window, smoking; her gaze swings back and forth and sees you in the light.
 * Being seen fills the SEEN meter (fast in a beam or the headlights, slower in a bar of light in someone's sight,
 * and close to Johnny); in the dark it drains. Full: caught — a life, back to the door, and the half-written
 * signature is wiped off. Bumping into Johnny or Kitty costs a life too. Under each painting, between the wall and
 * its velvet rope, is its spot: stand there and hold SIGN (Space, the SIGN button, or hold the mouse on the
 * painting) until the signature is written; that picks the painting's letter (answerPick). A wrong one costs a
 * life and is crossed out; a right one keeps its scarlet signature (Select TWO needs both). galleryParams(n) is the
 * one difficulty curve (also on the def as `params`).
 *
 * Registered with SolModes.extend (js/modes.js); the methods are copied onto ModeScene, so `this` is the mode scene.
 * Every texture is drawn once (canvasTex) under an "md-gallery-" key.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, shuffle = L.shuffle, canvasTex = L.canvasTex, angDiff = L.angDiff;
  var TAU = Math.PI * 2, DEG = Math.PI / 180;
  var SERIF = "Georgia, 'Times New Roman', serif";
  var SCARLET = "#c8102e", SCARLET_N = 0xc8102e;
  var ART_W = 140, ART_H = 172, FIG_W = 64, FIG_H = 128;
  var ARTS = ["flower", "el", "portrait", "snake", "lamp"];

  /* ── difficulty: one curve for levels 1-100, every level a little harder than the one before ── */
  function galleryParams(n) {
    n = clamp(Math.floor(Number(n) || 1), 1, 100);
    return {
      jSpd: 34 + n * 0.75,                                   /* Johnny's walk, px/s at k = 1: 35 at 1, 72 at 50, 109 at 100 */
      beamLen: 150 + n * 1.5,                                /* how far his flashlight reaches, px */
      beamHalf: 15 + n * 0.12,                               /* half the beam's angle, degrees */
      sightLen: 260 + n * 2.4,                               /* how far he sees you standing in a bar of light */
      catchMs: 1500 - n * 10,                                /* in the beam or the headlights: ms until SEEN is full (1490 … 500) */
      stripeMs: 2600 - n * 17,                               /* lit in someone's sight, or close to Johnny (2583 … 900) */
      decayMs: 650 + n * 6,                                  /* in the dark, ms for a full meter to drain */
      signMs: 700 + n * 11,                                  /* holding SIGN, ms to write the signature (711 … 1800) */
      open: 0.38 + n * 0.0022,                               /* the lit share of a blind's bars */
      sweepEvery: 15000 - n * 95,                            /* ms between cars in the street */
      sweepWarn: 2800 - n * 17,                              /* the windows glow this long before the headlights sweep in */
      sweepSpd: 170 + n * 2.2,                               /* px/s the headlights cross the floor */
      sweepOpen: 0.40 + n * 0.0018,                          /* the lit share of the headlights' bars (the dark rows shrink) */
      sway: n >= 21 ? 6 + (n - 21) * 0.25 : 0,               /* the blinds sway: px the bars drift */
      turnP: n >= 31 ? 0.05 + (n - 31) * 0.0016 : 0,         /* chance a second that Johnny turns round */
      flip: n >= 41 ? 0.5 : 0,                               /* chance a car comes from the right */
      scan: n >= 61 ? 40 + (n - 61) * 0.8 : 25,              /* degrees he swings the flashlight at each stop */
      kitty: n >= 71 ? 1 : 0,                                /* Kitty watches from the window */
      kSight: n >= 71 ? 200 + (n - 71) * 2.5 : 0,            /* how far she sees */
      pair: n >= 81 ? 1 : 0,                                 /* cars come in pairs */
      checks: n >= 91 ? 1 : 0                                /* Johnny's round passes under the paintings */
    };
  }

  /* ── art, drawn once ── */
  function path(c, pts) { c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); }
  function disc(c, x, y, r) { c.beginPath(); c.arc(x, y, r, 0, TAU); }
  function glowAt(c, x, y, r, rgb, a) {
    var g = c.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(" + rgb + "," + a + ")"); g.addColorStop(1, "rgba(" + rgb + ",0)");
    c.fillStyle = g; c.fillRect(x - r, y - r, r * 2, r * 2);
  }

  /* Chris's paintings, in grey oils, each in a gilt frame (grey here, like everything else). Art area 120x152 at (10, 10). */
  function drawPainting(kind) {
    return function (c, w, h) {
      var x0 = 10, y0 = 10, aw = w - 20, ah = h - 20, g;
      /* the frame */
      g = c.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "#d8d8d8"); g.addColorStop(0.45, "#8c8c8c"); g.addColorStop(1, "#4a4a4a");
      c.fillStyle = g; c.fillRect(0, 0, w, h);
      c.strokeStyle = "#1a1a1a"; c.lineWidth = 2; c.strokeRect(1, 1, w - 2, h - 2);
      c.strokeStyle = "rgba(255,255,255,0.55)"; c.lineWidth = 1; c.strokeRect(4.5, 4.5, w - 9, h - 9);
      c.fillStyle = "#2a2a2a"; c.fillRect(x0 - 2, y0 - 2, aw + 4, ah + 4);
      c.save(); c.beginPath(); c.rect(x0, y0, aw, ah); c.clip();
      c.translate(x0, y0);
      var W = aw, H = ah, i;
      if (kind === "flower") {
        /* a single flower in a vase on a table: the naive still life */
        g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, "#9a9a9a"); g.addColorStop(1, "#6a6a6a");
        c.fillStyle = g; c.fillRect(0, 0, W, H);
        c.fillStyle = "#3a3a3a"; c.fillRect(0, H * 0.72, W, H * 0.28);
        c.fillStyle = "#4e4e4e"; c.fillRect(0, H * 0.72, W, 3);
        c.fillStyle = "#1e1e1e"; path(c, [[W * 0.4, H * 0.5], [W * 0.6, H * 0.5], [W * 0.66, H * 0.62], [W * 0.62, H * 0.78], [W * 0.38, H * 0.78], [W * 0.34, H * 0.62]]); c.closePath(); c.fill();
        c.fillStyle = "rgba(255,255,255,0.25)"; c.fillRect(W * 0.42, H * 0.56, 3, H * 0.16);
        c.strokeStyle = "#2a2a2a"; c.lineWidth = 2.5; c.beginPath(); c.moveTo(W * 0.5, H * 0.5); c.quadraticCurveTo(W * 0.46, H * 0.36, W * 0.5, H * 0.26); c.stroke();
        c.fillStyle = "#2a2a2a"; path(c, [[W * 0.48, H * 0.4], [W * 0.36, H * 0.35], [W * 0.47, H * 0.36]]); c.fill();
        for (i = 0; i < 7; i++) {
          var a = i / 7 * TAU;
          c.fillStyle = "#f2f2f2"; c.beginPath(); c.ellipse(W * 0.5 + Math.cos(a) * 11, H * 0.24 + Math.sin(a) * 11, 8, 4.5, a, 0, TAU); c.fill();
          c.strokeStyle = "#555"; c.lineWidth = 0.8; c.stroke();
        }
        c.fillStyle = "#222"; disc(c, W * 0.5, H * 0.24, 5.5); c.fill();
      } else if (kind === "el") {
        /* the elevated train over a street of brownstones, at dusk */
        g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, "#c8c8c8"); g.addColorStop(0.6, "#7a7a7a"); g.addColorStop(1, "#3a3a3a");
        c.fillStyle = g; c.fillRect(0, 0, W, H);
        c.fillStyle = "#555"; c.fillRect(0, H * 0.3, W * 0.3, H * 0.7); c.fillRect(W * 0.7, H * 0.22, W * 0.3, H * 0.78);
        c.fillStyle = "#e8e8e8";
        for (i = 0; i < 6; i++) { c.fillRect(6 + (i % 2) * 14, H * 0.36 + Math.floor(i / 2) * 18, 7, 9); c.fillRect(W * 0.76 + (i % 2) * 14, H * 0.3 + Math.floor(i / 2) * 18, 7, 9); }
        c.fillStyle = "#1a1a1a"; c.fillRect(0, H * 0.5, W, 8);
        for (i = 0; i < 5; i++) c.fillRect(i * W / 4 - 2, H * 0.5, 5, H * 0.5);
        c.strokeStyle = "#1a1a1a"; c.lineWidth = 1.5;
        for (i = 0; i < 9; i++) { c.beginPath(); c.moveTo(i * W / 8, H * 0.5 + 8); c.lineTo(i * W / 8 + W / 16, H * 0.62); c.lineTo(i * W / 8 + W / 8, H * 0.5 + 8); c.stroke(); }
        c.fillStyle = "#2e2e2e"; c.fillRect(W * 0.08, H * 0.4, W * 0.84, H * 0.1);
        c.fillStyle = "#f4f4f4"; for (i = 0; i < 6; i++) c.fillRect(W * 0.12 + i * W * 0.13, H * 0.425, W * 0.08, H * 0.04);
        c.fillStyle = "#262626"; c.fillRect(0, H * 0.86, W, H * 0.14);
        c.fillStyle = "rgba(255,255,255,0.18)"; for (i = 0; i < 6; i++) c.fillRect(W * 0.1 + i * W * 0.15, H * 0.9, W * 0.07, 2);
      } else if (kind === "portrait") {
        /* a portrait of a woman, in Chris's flat, naive style: no one in particular */
        g = c.createLinearGradient(0, 0, W, H); g.addColorStop(0, "#5a5a5a"); g.addColorStop(1, "#2a2a2a");
        c.fillStyle = g; c.fillRect(0, 0, W, H);
        c.fillStyle = "#151515"; c.beginPath(); c.ellipse(W * 0.5, H * 0.38, W * 0.3, H * 0.27, 0, 0, TAU); c.fill();
        c.fillStyle = "#151515"; c.fillRect(W * 0.2, H * 0.38, W * 0.6, H * 0.3);
        c.fillStyle = "#8e8e8e"; path(c, [[W * 0.1, H], [W * 0.18, H * 0.78], [W * 0.38, H * 0.7], [W * 0.62, H * 0.7], [W * 0.82, H * 0.78], [W * 0.9, H]]); c.closePath(); c.fill();
        c.fillStyle = "#d6d6d6"; c.fillRect(W * 0.44, H * 0.56, W * 0.12, H * 0.16);
        c.beginPath(); c.ellipse(W * 0.5, H * 0.42, W * 0.18, H * 0.19, 0, 0, TAU); c.fill();
        c.fillStyle = "#151515"; path(c, [[W * 0.3, H * 0.36], [W * 0.5, H * 0.2], [W * 0.72, H * 0.36], [W * 0.62, H * 0.26], [W * 0.4, H * 0.28]]); c.closePath(); c.fill();
        c.fillStyle = "#222"; c.beginPath(); c.ellipse(W * 0.43, H * 0.41, 4.5, 2.4, 0, 0, TAU); c.fill(); c.beginPath(); c.ellipse(W * 0.57, H * 0.41, 4.5, 2.4, 0, 0, TAU); c.fill();
        c.strokeStyle = "#555"; c.lineWidth = 1.4; c.beginPath(); c.moveTo(W * 0.5, H * 0.43); c.lineTo(W * 0.48, H * 0.49); c.lineTo(W * 0.51, H * 0.49); c.stroke();
        c.fillStyle = "#3a3a3a"; c.beginPath(); c.ellipse(W * 0.5, H * 0.535, 6, 2.6, 0, 0, TAU); c.fill();
        c.fillStyle = "#e8e8e8"; disc(c, W * 0.5, H * 0.75, 3); c.fill(); disc(c, W * 0.44, H * 0.74, 2.5); c.fill(); disc(c, W * 0.56, H * 0.74, 2.5); c.fill();
      } else if (kind === "snake") {
        /* a tree with a snake coiled round a branch */
        g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, "#b4b4b4"); g.addColorStop(1, "#808080");
        c.fillStyle = g; c.fillRect(0, 0, W, H);
        c.fillStyle = "#4a4a4a"; c.fillRect(0, H * 0.82, W, H * 0.18);
        c.fillStyle = "#2a2a2a"; path(c, [[W * 0.42, H], [W * 0.46, H * 0.5], [W * 0.3, H * 0.34], [W * 0.36, H * 0.32], [W * 0.5, H * 0.44], [W * 0.62, H * 0.3], [W * 0.68, H * 0.33], [W * 0.56, H * 0.52], [W * 0.6, H]]); c.closePath(); c.fill();
        c.fillStyle = "#5e5e5e";
        [[0.3, 0.24, 26], [0.55, 0.16, 30], [0.72, 0.26, 22], [0.42, 0.12, 18]].forEach(function (q) { c.beginPath(); c.arc(W * q[0], H * q[1], q[2], 0, TAU); c.fill(); });
        c.fillStyle = "#e0e0e0"; [[0.28, 0.2], [0.58, 0.12], [0.74, 0.28], [0.5, 0.22], [0.36, 0.3]].forEach(function (q) { disc(c, W * q[0], H * q[1], 3.2); c.fill(); });
        c.strokeStyle = "#111"; c.lineWidth = 5; c.lineCap = "round";
        c.beginPath(); c.moveTo(W * 0.66, H * 0.36); c.bezierCurveTo(W * 0.4, H * 0.42, W * 0.7, H * 0.5, W * 0.48, H * 0.56); c.bezierCurveTo(W * 0.32, H * 0.62, W * 0.62, H * 0.66, W * 0.44, H * 0.7); c.stroke();
        c.strokeStyle = "#cfcfcf"; c.lineWidth = 1.2; c.setLineDash([2, 4]);
        c.beginPath(); c.moveTo(W * 0.66, H * 0.36); c.bezierCurveTo(W * 0.4, H * 0.42, W * 0.7, H * 0.5, W * 0.48, H * 0.56); c.stroke(); c.setLineDash([]);
        c.fillStyle = "#111"; c.beginPath(); c.ellipse(W * 0.7, H * 0.355, 6, 4, -0.3, 0, TAU); c.fill();
        c.fillStyle = "#fff"; disc(c, W * 0.715, H * 0.348, 1.2); c.fill();
      } else {
        /* a street lamp in the rain: the painter's own noir */
        g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, "#1e1e1e"); g.addColorStop(1, "#444");
        c.fillStyle = g; c.fillRect(0, 0, W, H);
        glowAt(c, W * 0.6, H * 0.28, W * 0.55, "235,235,235", 0.5);
        c.fillStyle = "#0e0e0e"; c.fillRect(W * 0.58, H * 0.3, 4, H * 0.62);
        path(c, [[W * 0.52, H * 0.3], [W * 0.68, H * 0.3], [W * 0.64, H * 0.22], [W * 0.56, H * 0.22]]); c.closePath(); c.fill();
        c.fillStyle = "#fafafa"; c.fillRect(W * 0.56, H * 0.23, W * 0.08, H * 0.06);
        c.fillStyle = "#0b0b0b"; c.fillRect(0, H * 0.48, W * 0.3, H * 0.52); c.fillRect(W * 0.84, H * 0.4, W * 0.16, H * 0.6);
        c.fillStyle = "#262626"; c.fillRect(0, H * 0.88, W, H * 0.12);
        c.fillStyle = "rgba(255,255,255,0.35)"; c.fillRect(W * 0.55, H * 0.9, W * 0.12, 2); c.fillRect(W * 0.57, H * 0.94, W * 0.08, 2);
        c.strokeStyle = "rgba(255,255,255,0.35)"; c.lineWidth = 1;
        for (i = 0; i < 26; i++) { var rx = (i * 37) % W, ry = (i * 53) % H; c.beginPath(); c.moveTo(rx, ry); c.lineTo(rx - 2, ry + 9); c.stroke(); }
        c.fillStyle = "#0b0b0b"; path(c, [[W * 0.2, H * 0.88], [W * 0.22, H * 0.7], [W * 0.27, H * 0.66], [W * 0.32, H * 0.7], [W * 0.33, H * 0.88]]); c.closePath(); c.fill();
        disc(c, W * 0.27, H * 0.62, 5); c.fill(); c.fillRect(W * 0.2, H * 0.585, W * 0.14, 3);
      }
      /* brushwork and old varnish */
      c.globalAlpha = 0.07; c.strokeStyle = "#000"; c.lineWidth = 1;
      for (i = 0; i < 40; i++) { var bx = (i * 29) % W, by = (i * 47) % H; c.beginPath(); c.moveTo(bx, by); c.lineTo(bx + 6, by + 1); c.stroke(); }
      c.globalAlpha = 1;
      c.restore();
    };
  }
  /* the brass plate under a painting (grey), where its letter goes */
  function drawPlaque(c, w, h) {
    var g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "#9a9a9a"); g.addColorStop(0.5, "#5e5e5e"); g.addColorStop(1, "#3a3a3a");
    c.fillStyle = "#0a0a0a"; c.fillRect(1, 2, w - 1, h - 2);
    c.fillStyle = g; c.fillRect(0, 0, w - 2, h - 3);
    c.strokeStyle = "#e8e8e8"; c.lineWidth = 1; c.strokeRect(2.5, 2.5, w - 7, h - 8);
    c.fillStyle = "#1a1a1a"; c.fillRect(4, 4, w - 10, h - 11);
  }
  /* the figures, in profile facing right, feet at (32, 125); two walking frames */
  function legs(c, f, col, shoe, x) {
    x = x || 32;
    c.strokeStyle = col; c.lineWidth = 7; c.lineCap = "round";
    var a = f ? 7 : 2;
    c.beginPath(); c.moveTo(x - 2, 84); c.lineTo(x - 2 - a, 121); c.stroke();
    c.beginPath(); c.moveTo(x + 2, 84); c.lineTo(x + 2 + a, 121); c.stroke();
    c.fillStyle = shoe;
    c.beginPath(); c.ellipse(x - 2 - a + 2, 123, 6, 3, 0, 0, TAU); c.fill();
    c.beginPath(); c.ellipse(x + 2 + a + 3, 123, 6, 3, 0, 0, TAU); c.fill();
  }
  /* the painter: a long overcoat, a soft hat, a brush with a scarlet tip and a palette */
  function drawChris(f) {
    return function (c) {
      legs(c, f, "#3c3c3c", "#151515");
      c.fillStyle = "#6e6e6e"; path(c, [[22, 44], [42, 44], [46, 70], [48, 100], [16, 100], [19, 70]]); c.closePath(); c.fill();
      c.strokeStyle = "#2a2a2a"; c.lineWidth = 1.2; c.stroke();
      c.strokeStyle = "#4a4a4a"; c.lineWidth = 1; c.beginPath(); c.moveTo(34, 48); c.lineTo(34, 98); c.moveTo(20, 72); c.lineTo(46, 72); c.stroke();
      c.fillStyle = "#bdbdbd"; path(c, [[31, 44], [37, 44], [34, 52]]); c.closePath(); c.fill();
      /* the back arm with the palette */
      c.strokeStyle = "#5a5a5a"; c.lineWidth = 6.5; c.lineCap = "round"; c.beginPath(); c.moveTo(24, 50); c.lineTo(20, 70); c.lineTo(15, 76); c.stroke();
      c.fillStyle = "#e6e6e6"; c.beginPath(); c.ellipse(11, 78, 9, 6, -0.4, 0, TAU); c.fill(); c.strokeStyle = "#333"; c.lineWidth = 1; c.stroke();
      c.fillStyle = "#333"; disc(c, 8, 77, 1.6); c.fill(); disc(c, 13, 75, 1.6); c.fill(); c.fillStyle = SCARLET; disc(c, 12, 81, 1.8); c.fill();
      /* head, slightly bowed: a mild man */
      c.fillStyle = "#cfcfcf"; c.beginPath(); c.arc(35, 34, 9, 0, TAU); c.fill();
      c.fillStyle = "#cfcfcf"; path(c, [[43, 33], [47, 37], [42, 38]]); c.fill();
      c.fillStyle = "#222"; disc(c, 40, 32, 1.3); c.fill();
      c.strokeStyle = "#555"; c.lineWidth = 1; c.beginPath(); c.arc(40, 32, 3, 0, TAU); c.stroke();
      /* the hat */
      c.fillStyle = "#3e3e3e"; path(c, [[25, 27], [27, 17], [33, 14], [42, 16], [44, 27]]); c.closePath(); c.fill();
      c.fillStyle = "#2a2a2a"; c.fillRect(21, 26, 28, 3.2);
      c.fillStyle = "#777"; c.fillRect(26, 23.5, 18, 2.2);
      /* the front arm with the brush */
      c.strokeStyle = "#626262"; c.lineWidth = 6.5; c.beginPath(); c.moveTo(38, 50); c.lineTo(44, 64); c.lineTo(52, 62); c.stroke();
      c.fillStyle = "#cfcfcf"; disc(c, 53, 62, 3); c.fill();
      c.strokeStyle = "#d8d8d8"; c.lineWidth = 2; c.beginPath(); c.moveTo(51, 64); c.lineTo(60, 52); c.stroke();
      c.fillStyle = SCARLET; c.beginPath(); c.ellipse(60.5, 51, 2.2, 3.4, 0.6, 0, TAU); c.fill();
    };
  }
  /* the con man: a sharp pinstripe suit, two-tone shoes, a snap-brim hat, a flashlight */
  function drawJohnny(f) {
    return function (c) {
      legs(c, f, "#2e2e2e", "#e6e6e6");
      c.fillStyle = "#3a3a3a"; path(c, [[19, 42], [45, 42], [44, 64], [42, 88], [22, 88], [20, 64]]); c.closePath(); c.fill();
      c.strokeStyle = "rgba(200,200,200,0.35)"; c.lineWidth = 0.8;
      for (var i = 0; i < 6; i++) { c.beginPath(); c.moveTo(23 + i * 4, 44); c.lineTo(23 + i * 3.6, 87); c.stroke(); }
      c.fillStyle = "#f0f0f0"; path(c, [[29, 42], [38, 42], [34, 56]]); c.closePath(); c.fill();
      c.fillStyle = "#111"; path(c, [[33, 44], [35, 44], [35.5, 55], [34, 58], [32.5, 55]]); c.closePath(); c.fill();
      c.fillStyle = "#f0f0f0"; path(c, [[40, 46], [44, 46], [43, 50]]); c.fill();
      /* head and the cigarette */
      c.fillStyle = "#c4c4c4"; c.beginPath(); c.arc(34, 31, 9, 0, TAU); c.fill();
      path(c, [[42, 30], [46, 34], [41, 35]]); c.fill();
      c.fillStyle = "#111"; disc(c, 39, 29, 1.3); c.fill();
      c.strokeStyle = "#111"; c.lineWidth = 1.4; c.beginPath(); c.moveTo(36, 26.5); c.lineTo(41, 26); c.stroke();
      c.strokeStyle = "#f2f2f2"; c.lineWidth = 1.8; c.beginPath(); c.moveTo(41, 36.5); c.lineTo(48, 35.5); c.stroke();
      /* the hat: snap brim, a pale band */
      c.fillStyle = "#1c1c1c"; path(c, [[24, 25], [26, 14], [33, 11], [42, 13], [44, 25]]); c.closePath(); c.fill();
      c.fillRect(19, 24, 31, 3);
      c.fillStyle = "#9a9a9a"; c.fillRect(25, 20.5, 19, 3);
      /* the arm and the flashlight, pointing ahead */
      c.strokeStyle = "#333"; c.lineWidth = 7; c.lineCap = "round"; c.beginPath(); c.moveTo(38, 48); c.lineTo(44, 62); c.lineTo(52, 64); c.stroke();
      c.fillStyle = "#c4c4c4"; disc(c, 52, 64, 3); c.fill();
      var g = c.createLinearGradient(0, 60, 0, 68); g.addColorStop(0, "#eee"); g.addColorStop(1, "#666");
      c.fillStyle = g; c.fillRect(51, 61, 10, 5); c.fillRect(60, 59.5, 4, 8);
      c.fillStyle = "#fff"; c.fillRect(63, 60, 1, 7);
    };
  }
  /* Kitty: a belted raincoat, dark waves of hair, a cigarette held up */
  function drawKitty(f) {
    return function (c) {
      c.strokeStyle = "#bdbdbd"; c.lineWidth = 4; c.lineCap = "round";
      c.beginPath(); c.moveTo(30, 96); c.lineTo(29 - (f ? 1 : 0), 121); c.moveTo(35, 96); c.lineTo(36, 121); c.stroke();
      c.fillStyle = "#111"; path(c, [[25, 124], [31, 120], [32, 125]]); c.fill(); path(c, [[33, 125], [38, 120], [40, 125]]); c.fill();
      c.fillStyle = "#9c9c9c"; path(c, [[24, 42], [41, 42], [43, 66], [47, 100], [18, 100], [22, 66]]); c.closePath(); c.fill();
      c.strokeStyle = "#555"; c.lineWidth = 1.2; c.stroke();
      c.fillStyle = "#4a4a4a"; c.fillRect(21, 63, 23, 4); c.fillStyle = "#ddd"; c.fillRect(31, 63, 4, 4);
      c.strokeStyle = "#6a6a6a"; c.lineWidth = 1; c.beginPath(); c.moveTo(33, 46); c.lineTo(31, 99); c.stroke();
      /* head */
      c.fillStyle = "#d4d4d4"; c.fillRect(31, 36, 5, 8);
      c.beginPath(); c.arc(34, 29, 8.5, 0, TAU); c.fill();
      path(c, [[41.5, 28], [44.5, 32], [40.5, 33]]); c.fill();
      c.fillStyle = "#111"; disc(c, 38.5, 27.5, 1.2); c.fill();
      c.fillStyle = "#333"; c.beginPath(); c.ellipse(40.5, 34.6, 2.2, 1, 0, 0, TAU); c.fill();
      c.fillStyle = "#121212"; c.beginPath(); c.arc(31, 26, 10, Math.PI * 0.85, Math.PI * 2.05); c.fill();
      path(c, [[22, 26], [26, 44], [31, 41], [28, 30]]); c.closePath(); c.fill();
      /* the arm, bent up, the cigarette between two fingers */
      c.strokeStyle = "#8e8e8e"; c.lineWidth = 6; c.beginPath(); c.moveTo(38, 47); c.lineTo(45, 60); c.lineTo(47, 47); c.stroke();
      c.fillStyle = "#d4d4d4"; disc(c, 47, 45, 2.6); c.fill();
      c.strokeStyle = "#f2f2f2"; c.lineWidth = 1.6; c.beginPath(); c.moveTo(48, 44); c.lineTo(54, 40); c.stroke();
    };
  }
  /* a shadow under the feet, and a 256x256 film grain */
  function drawGrain(c, w, h) {
    var img = c.createImageData(w, h), d = img.data, i;
    for (i = 0; i < d.length; i += 4) {
      var v = Math.random() < 0.5 ? 0 : 255;
      d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = Math.random() < 0.5 ? Math.floor(Math.random() * 110) : 0;
    }
    c.putImageData(img, 0, 0);
  }
  /* a thin light rim round a figure, so it reads against the dark (it dims with the figure's tint in shadow) */
  function withRim(draw) {
    return function (c, w, h) {
      var off = document.createElement("canvas"), rim = document.createElement("canvas");
      off.width = rim.width = w; off.height = rim.height = h;
      draw(off.getContext("2d"), w, h);
      var rc = rim.getContext("2d");
      [[1.6, 0], [-1.6, 0], [0, 1.6], [0, -1.6], [1.1, 1.1], [-1.1, 1.1], [1.1, -1.1], [-1.1, -1.1]].forEach(function (o) { rc.drawImage(off, o[0], o[1]); });
      rc.globalCompositeOperation = "source-in"; rc.fillStyle = "rgba(236,236,236,0.95)"; rc.fillRect(0, 0, w, h);
      c.drawImage(rim, 0, 0); c.drawImage(off, 0, 0);
    };
  }
  function ensureGalleryArt(scene) {
    ARTS.forEach(function (a) { canvasTex(scene, "md-gallery-art-" + a, ART_W, ART_H, drawPainting(a)); });
    canvasTex(scene, "md-gallery-plaque", 56, 40, drawPlaque);
    for (var f = 0; f < 2; f++) {
      canvasTex(scene, "md-gallery-chris-" + f, FIG_W, FIG_H, withRim(drawChris(f)));
      canvasTex(scene, "md-gallery-johnny-" + f, FIG_W, FIG_H, withRim(drawJohnny(f)));
      canvasTex(scene, "md-gallery-kitty-" + f, FIG_W, FIG_H, withRim(drawKitty(f)));
    }
    canvasTex(scene, "md-gallery-grain", 256, 256, drawGrain);
  }

  /* the room, drawn once for the canvas size and the number of paintings (B is the layout) */
  function drawRoom(B, W, H) {
    return function (c) {
      var k = B.k, wy = B.wallY, g, i;
      /* the back wall: dark, with a faint stripe in the paper */
      g = c.createLinearGradient(0, 0, 0, wy);
      g.addColorStop(0, "#151515"); g.addColorStop(0.7, "#262626"); g.addColorStop(1, "#202020");
      c.fillStyle = g; c.fillRect(0, 0, W, wy);
      c.fillStyle = "rgba(255,255,255,0.025)";
      for (i = 0; i < W; i += 14 * k) c.fillRect(i, 0, 5 * k, wy);
      /* the street lamp outside lights the wall a little, high on the left */
      g = c.createRadialGradient(W * 0.3, -wy * 0.2, 10, W * 0.3, -wy * 0.2, W * 0.75);
      g.addColorStop(0, "rgba(255,255,255,0.09)"); g.addColorStop(1, "rgba(255,255,255,0)");
      c.fillStyle = g; c.fillRect(0, 0, W, wy);
      /* crown molding and the picture rail */
      c.fillStyle = "#0b0b0b"; c.fillRect(0, 0, W, 12 * k);
      c.fillStyle = "#4a4a4a"; c.fillRect(0, 12 * k, W, 2 * k);
      c.fillStyle = "#3a3a3a"; c.fillRect(0, B.railY, W, 2.5 * k);
      /* the wainscot and the baseboard */
      var wt = wy - B.wainH;
      c.fillStyle = "#1a1a1a"; c.fillRect(0, wt, W, B.wainH);
      c.fillStyle = "#454545"; c.fillRect(0, wt, W, 2 * k);
      c.strokeStyle = "rgba(255,255,255,0.06)"; c.lineWidth = 1;
      for (i = 0; i < W; i += 70 * k) c.strokeRect(i + 6 * k, wt + 7 * k, 58 * k, B.wainH - 16 * k);
      c.fillStyle = "#070707"; c.fillRect(0, wy - 6 * k, W, 6 * k);
      /* the windows: the street outside, rain-dark, a lamp and the buildings across the way */
      B.wins.forEach(function (wn, j) {
        g = c.createLinearGradient(0, wn.y0, 0, wn.y1);
        g.addColorStop(0, "#3a3a3e"); g.addColorStop(0.6, "#1c1c1e"); g.addColorStop(1, "#0c0c0c");
        c.fillStyle = g; c.fillRect(wn.x0, wn.y0, wn.x1 - wn.x0, wn.y1 - wn.y0);
        c.save(); c.beginPath(); c.rect(wn.x0, wn.y0, wn.x1 - wn.x0, wn.y1 - wn.y0); c.clip();
        glowAt(c, wn.x0 + (wn.x1 - wn.x0) * 0.25, wn.y0 + (wn.y1 - wn.y0) * 0.22, (wn.x1 - wn.x0) * 1.1, "240,240,240", 0.35);
        var bh = wn.y1 - wn.y0, bw = wn.x1 - wn.x0;
        c.fillStyle = "#080808";
        c.fillRect(wn.x0, wn.y0 + bh * (0.42 + (j % 3) * 0.06), bw * 0.55, bh);
        c.fillRect(wn.x0 + bw * 0.6, wn.y0 + bh * (0.3 + (j % 2) * 0.1), bw * 0.5, bh);
        c.fillStyle = "rgba(220,220,220,0.55)";
        for (var q = 0; q < 4; q++) c.fillRect(wn.x0 + bw * (0.08 + (q % 2) * 0.22), wn.y0 + bh * (0.5 + Math.floor(q / 2) * 0.12 + (j % 3) * 0.06), bw * 0.08, bh * 0.04);
        c.fillRect(wn.x0 + bw * 0.72, wn.y0 + bh * (0.42 + (j % 2) * 0.1), bw * 0.1, bh * 0.04);
        c.restore();
        /* frame, sill */
        c.strokeStyle = "#333"; c.lineWidth = 5 * k; c.strokeRect(wn.x0 - 2 * k, wn.y0 - 2 * k, wn.x1 - wn.x0 + 4 * k, wn.y1 - wn.y0 + 4 * k);
        c.fillStyle = "#3e3e3e"; c.fillRect(wn.x0 - 7 * k, wn.y1 + 2 * k, wn.x1 - wn.x0 + 14 * k, 5 * k);
        c.fillStyle = "rgba(255,255,255,0.18)"; c.fillRect(wn.x0 - 7 * k, wn.y1 + 2 * k, wn.x1 - wn.x0 + 14 * k, 1.2 * k);
      });
      /* the door at the left, ajar onto the stairs, and the scarlet umbrella in its stand */
      var d = B.door;
      c.fillStyle = "#2c2c2c"; c.fillRect(d.x0 - 6 * k, d.y0 - 6 * k, d.x1 - d.x0 + 12 * k, wy - d.y0 + 6 * k);
      g = c.createLinearGradient(d.x0, 0, d.x1, 0);
      g.addColorStop(0, "#030303"); g.addColorStop(1, "#141414");
      c.fillStyle = g; c.fillRect(d.x0, d.y0, d.x1 - d.x0, wy - d.y0);
      c.fillStyle = "rgba(255,255,255,0.08)"; path(c, [[d.x0 + (d.x1 - d.x0) * 0.35, d.y0], [d.x1, d.y0], [d.x1, wy], [d.x0 + (d.x1 - d.x0) * 0.2, wy]]); c.closePath(); c.fill();
      c.fillStyle = "#1e1e1e"; path(c, [[d.x1, d.y0], [d.x1 + (d.x1 - d.x0) * 0.32, d.y0 + 8 * k], [d.x1 + (d.x1 - d.x0) * 0.32, wy + 4 * k], [d.x1, wy]]); c.closePath(); c.fill();
      c.fillStyle = "#bbb"; disc(c, d.x1 + (d.x1 - d.x0) * 0.26, (d.y0 + wy) * 0.55, 2 * k); c.fill();
      c.fillStyle = "rgba(230,230,230,0.7)"; c.font = "bold " + Math.round(9 * k) + "px " + SERIF; c.textAlign = "center";
      c.fillText("GALLERY", (d.x0 + d.x1) / 2, d.y0 - 10 * k);
      var ux = d.x0 - 2 * k, uy = wy + 3 * k;
      if (ux < 18 * k) ux = d.x1 + (d.x1 - d.x0) * 0.55;
      c.fillStyle = "#2a2a2a"; c.fillRect(ux - 7 * k, uy - 22 * k, 14 * k, 22 * k);
      c.strokeStyle = "#555"; c.lineWidth = 1; c.strokeRect(ux - 7 * k, uy - 22 * k, 14 * k, 22 * k);
      c.fillStyle = SCARLET; path(c, [[ux - 2 * k, uy - 22 * k], [ux + 3 * k, uy - 62 * k], [ux + 7 * k, uy - 22 * k]]); c.closePath(); c.fill();
      c.fillStyle = "#7a0a1c"; path(c, [[ux + 1 * k, uy - 22 * k], [ux + 3 * k, uy - 62 * k], [ux + 3.5 * k, uy - 22 * k]]); c.closePath(); c.fill();
      c.strokeStyle = "#ddd"; c.lineWidth = 1.6 * k; c.beginPath(); c.moveTo(ux + 3 * k, uy - 62 * k); c.lineTo(ux + 3 * k, uy - 70 * k); c.arc(ux + 6.5 * k, uy - 70 * k, 3.5 * k, Math.PI, 0); c.stroke();
      /* picture wires up to the rail */
      c.strokeStyle = "rgba(200,200,200,0.35)"; c.lineWidth = 1;
      B.slots.forEach(function (s) { c.beginPath(); c.moveTo(s.x - s.w * 0.3, s.y0); c.lineTo(s.x, B.railY + 2 * k); c.lineTo(s.x + s.w * 0.3, s.y0); c.stroke(); });
      /* the floor: dark boards running back, joints, and the wet shine of the windows */
      var fb = B.floorBot, fh = H - wy;
      g = c.createLinearGradient(0, wy, 0, H);
      g.addColorStop(0, "#090909"); g.addColorStop(1, "#161616");
      c.fillStyle = g; c.fillRect(0, wy, W, fh);
      var vx = W / 2, vy = wy - fh * 1.8;
      c.strokeStyle = "rgba(255,255,255,0.05)"; c.lineWidth = 1;
      for (i = -24; i <= 24; i++) {
        var bx = W / 2 + i * 46 * k, t0 = (wy - vy) / (H - vy);
        c.beginPath(); c.moveTo(vx + (bx - vx) * t0, wy); c.lineTo(bx, H); c.stroke();
      }
      c.strokeStyle = "rgba(0,0,0,0.5)";
      for (i = 1; i < 12; i++) { var yy = wy + fh * Math.pow(i / 12, 1.6); c.beginPath(); c.moveTo(0, yy); c.lineTo(W, yy); c.stroke(); }
      B.wins.forEach(function (wn) {
        g = c.createLinearGradient(0, wy, 0, wy + fh * 0.5);
        g.addColorStop(0, "rgba(255,255,255,0.06)"); g.addColorStop(1, "rgba(255,255,255,0)");
        c.fillStyle = g; c.fillRect(wn.x0 + 3 * k, wy, wn.x1 - wn.x0 - 6 * k, fh * 0.5);
      });
      c.fillStyle = "rgba(0,0,0,0.45)"; c.fillRect(0, wy, W, 4 * k);
      c.fillStyle = "#050505"; c.fillRect(0, fb + 2 * k, W, H - fb);
      /* shafts of street light from the windows down to their patches on the floor, faint in the air */
      c.save(); c.globalCompositeOperation = "lighter";
      B.wins.forEach(function (wn, j) {
        var pa = B.patches[j]; if (!pa) return;
        g = c.createLinearGradient(0, wn.y0, 0, pa.y1);
        g.addColorStop(0, "rgba(255,255,255,0.05)"); g.addColorStop(0.5, "rgba(255,255,255,0.025)"); g.addColorStop(1, "rgba(255,255,255,0)");
        c.fillStyle = g;
        path(c, [[wn.x0, wn.y0 + (wn.y1 - wn.y0) * 0.3], [wn.x1, wn.y0], [pa.x1b, pa.y1], [pa.x0b, pa.y1]]); c.closePath(); c.fill();
      });
      c.restore();
    };
  }
  /* the venetian blinds over the windows: slats with the night (and the rain) showing between them */
  function drawBlinds(B) {
    return function (c) {
      var k = B.k;
      B.wins.forEach(function (wn) {
        var w = wn.x1 - wn.x0, slat = 6.5 * k, gap = 3 * k, y;
        c.fillStyle = "#0e0e0e"; c.fillRect(wn.x0 - 4 * k, wn.y0 - 7 * k, w + 8 * k, 6 * k);
        for (y = wn.y0 + 1 * k; y < wn.y1 - 2 * k; y += slat + gap) {
          c.fillStyle = "#141414"; c.fillRect(wn.x0, y, w, slat);
          c.fillStyle = "rgba(255,255,255,0.16)"; c.fillRect(wn.x0, y + slat - 1.2 * k, w, 1.2 * k);
        }
        c.strokeStyle = "rgba(200,200,200,0.3)"; c.lineWidth = 1;
        c.beginPath(); c.moveTo(wn.x0 + w * 0.25, wn.y0 - 2 * k); c.lineTo(wn.x0 + w * 0.25, wn.y1); c.moveTo(wn.x0 + w * 0.75, wn.y0 - 2 * k); c.lineTo(wn.x0 + w * 0.75, wn.y1); c.stroke();
        c.strokeStyle = "#2a2a2a"; c.lineWidth = 3 * k; c.beginPath(); c.moveTo(wn.x0 + w / 2, wn.y0); c.lineTo(wn.x0 + w / 2, wn.y1); c.stroke();
      });
    };
  }
  function drawVignette(W, H) {
    return function (c) {
      var g = c.createRadialGradient(W / 2, H * 0.46, Math.min(W, H) * 0.3, W / 2, H * 0.5, Math.max(W, H) * 0.78);
      g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(0.65, "rgba(0,0,0,0.3)"); g.addColorStop(1, "rgba(0,0,0,0.85)");
      c.fillStyle = g; c.fillRect(0, 0, W, H);
    };
  }

  /* ── geometry: a patch of light on the floor (a slanted quad) striped with the blinds' bars ── */
  function patchEdges(p, y) {
    var t = (y - p.y0) / (p.y1 - p.y0);
    if (t < 0 || t > 1) return null;
    return [p.x0t + (p.x0b - p.x0t) * t, p.x1t + (p.x1b - p.x1t) * t];
  }
  function inPatch(p, x, y) { var e = patchEdges(p, y); return !!e && x >= e[0] && x <= e[1]; }
  function onBar(p, y) { var f = (y - p.y0) / p.per + p.ph; f -= Math.floor(f); return f < p.open; }
  function litBy(p, x, y) { return inPatch(p, x, y) && onBar(p, y); }

  M.extend("gallery", {
    name: "The Gallery", kind: "stealth level", level: "stealth level", act: "SIGN",
    how: "Scarlet Street, after dark. Chris Cross's paintings hang in a Greenwich Village gallery under Kitty's name, and Johnny, the con man, is keeping watch. Slip in through the door and sign the painting with the right letter with your own name. Stay in the shadows. The venetian blinds throw bars of light across the floor; Johnny walks the room with a flashlight; and now and then a car's headlights sweep in from the street. When the windows glow, a car is coming: stand in a dark row between the bright bars until it passes. To sign, stand under the painting's frame (behind its velvet rope) and hold SIGN until your signature is written in scarlet. The SEEN meter fills while someone can see you and drains in the dark.",
    rules: "Signing a wrong painting costs a life. So does getting caught: the SEEN meter fills in Johnny's flashlight, in the headlights, close to Johnny, or in a bar of light while he is looking your way, and when it is full he has you (you start again at the door, and a half-written signature is wiped off). Bumping into Johnny costs a life too.",
    keys: "Arrow keys, WASD or the on-screen pad walk · hold Space or SIGN under a painting to sign it · or hold the mouse button: the painter walks toward the pointer, and holding it on a painting walks there and signs.",
    tip: "THE GALLERY — stay in the shadows and sign the painting with the right letter. Stand under its frame and hold SIGN.",
    hint1: "Sign the painting with the right letter: stand under its frame and hold SIGN. The passage stays in the side panel.",
    hint2: "This question has two right letters. Sign both paintings that carry them.",
    news: ["",
      "Johnny walks faster now, his flashlight reaches further, and signing takes a little longer.",
      "The blinds sway in the wind: the bars of light drift back and forth across the floor.",
      "Johnny turns round without warning now and then. When a ? pops up over his hat, get out of the light.",
      "Cars pass both ways now: the headlights can sweep in from either side. Watch which windows glow.",
      "The blinds are open wider: the bars of light are broader and the dark rows between them narrower.",
      "Johnny stops longer to swing his flashlight wide around the room.",
      "Kitty is here too. She waits by the right-hand window, smoking, and her eyes sweep the room: stay out of the light where she looks.",
      "The cars come in pairs: a second set of headlights sweeps back the other way right after the first.",
      "Last call: Johnny's round now passes right under the paintings, and he catches on faster than ever."],
    params: galleryParams
  }, {
    galleryParams: function (n) { return galleryParams(n); },

    setup_gallery: function () {
      ensureGalleryArt(this);
      var P = galleryParams(this.night), i;
      var B = this.gl = { P: P, t: 0, k: 1, paints: [], nPaint: 0, seen: 0, seenWhy: "", seenSrc: null, carT: P.sweepEvery * 0.6, sweep: null, nextDir: 0,
        x: 0, y: 0, face: 1, moving: false, walkT: 0, stepT: 0, beatT: 0, scratchT: 0, ptrPaint: -1, roomKey: null, blindKey: null, vigKey: null,
        drops: [], specks: [], caught: 0, told: {}, lastSpot: -1, blindPh: 0, wph: rnd(0, 6) };
      this.cameras.main.setBackgroundColor("#050505");
      B.room = this.add.image(0, 0, "__DEFAULT").setOrigin(0, 0).setDepth(0);
      B.winG = this.add.graphics().setDepth(1);
      B.blinds = this.add.image(0, 0, "__DEFAULT").setOrigin(0, 0).setDepth(2);
      B.lightG = this.add.graphics().setDepth(3).setBlendMode(1);
      B.speckG = this.add.graphics().setDepth(3.5);
      B.artG = this.add.graphics().setDepth(5);
      B.ropeG = this.add.graphics();
      B.shadowG = this.add.graphics().setDepth(6);
      B.fxG = this.add.graphics().setDepth(30);
      B.uiG = this.add.graphics().setDepth(45);
      B.chris = this.add.image(0, 0, "md-gallery-chris-0").setOrigin(0.5, 0.98);
      B.johnny = { spr: this.add.image(0, 0, "md-gallery-johnny-0").setOrigin(0.5, 0.98), x: 0, y: 0, dir: 0, wp: [], wi: 0, state: "walk", t: 0, base: 0, walkT: 0,
        mark: this.add.text(0, 0, "?", { fontFamily: SERIF, fontSize: 26, color: "#ffffff", fontStyle: "bold", stroke: "#000", strokeThickness: 5 }).setOrigin(0.5, 1).setDepth(44).setVisible(false) };
      B.kitty = { spr: this.add.image(0, 0, "md-gallery-kitty-0").setOrigin(0.5, 0.98).setVisible(false), x: 0, y: 0, dir: Math.PI, base: Math.PI, t: 0,
        mark: this.add.text(0, 0, "?", { fontFamily: SERIF, fontSize: 24, color: "#ffffff", fontStyle: "bold", stroke: "#000", strokeThickness: 5 }).setOrigin(0.5, 1).setDepth(44).setVisible(false) };
      B.vig = this.add.image(0, 0, "__DEFAULT").setOrigin(0, 0).setDepth(41);
      B.grain = this.add.tileSprite(0, 0, 16, 16, "md-gallery-grain").setOrigin(0, 0).setDepth(42).setAlpha(0.11);
      B.txSeen = this.add.text(0, 0, "SEEN", { fontFamily: SERIF, fontSize: 14, color: "#f2f2f2", fontStyle: "bold", stroke: "#000", strokeThickness: 4 }).setOrigin(1, 0.5).setDepth(46);
      B.txWarn = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 16, color: "#ffffff", fontStyle: "bold", stroke: "#000", strokeThickness: 5, align: "center" }).setOrigin(0.5, 0.5).setDepth(46).setVisible(false);
      B.txSign = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 13, color: "#ffffff", fontStyle: "bold", stroke: "#000", strokeThickness: 4 }).setOrigin(0.5, 1).setDepth(46).setVisible(false);
      for (i = 0; i < 40; i++) B.drops.push({ w: i % 7, u: Math.random(), v: Math.random(), sp: rnd(0.9, 1.6), len: rnd(0.05, 0.12), a: rnd(0.18, 0.45) });
      for (i = 0; i < 30; i++) B.specks.push({ u: Math.random(), v: Math.random(), sp: rnd(0.04, 0.1), r: rnd(1.2, 2.6) });
      this.galLayout(4);
      this.makeSol(B.door.sx, B.door.sy, "right").setVisible(false);   /* the painter is drawn here; the sprite stays for coin pop-ups */
    },

    /* everything that depends on the canvas size and the number of paintings */
    galLayout: function (n) {
      var B = this.gl, W = this.W, H = this.H, k, i;
      n = Math.max(1, n || B.nPaint || 4);
      B.nPaint = n;
      k = B.k = clamp(Math.min(H / 768, W / 1000), 0.6, 1.25);
      B.wallY = Math.round(H * 0.4);
      B.floorBot = H - Math.round(8 * k);
      B.FH = B.floorBot - B.wallY;
      B.railY = Math.round(22 * k);
      B.wainH = Math.round(Math.min(44 * k, B.wallY * 0.16));
      /* the door at the left of the back wall */
      var dw = Math.max(34, Math.round(W * 0.055));
      B.door = { x0: Math.round(W * 0.018), x1: Math.round(W * 0.018) + dw, y0: Math.round(B.wallY * 0.3) };
      B.door.sx = (B.door.x0 + B.door.x1) / 2 + 4 * k; B.door.sy = B.wallY + 26 * k;
      /* windows and paintings along the wall: window, painting, window, ..., painting, window */
      var mL = B.door.x1 + dw * 0.55 + 10 * k, mR = 10 * k, U = W - mL - mR;
      var pw = Math.min(150 * k, U / (n + (n + 1) * 0.42 + (2 * n + 2) * 0.1));
      var ph = pw * ART_H / ART_W, top = B.railY + 26 * k, maxPh = B.wallY - B.wainH * 0.35 - top - 34 * k;
      if (ph > maxPh) { ph = maxPh; pw = ph * ART_W / ART_H; }
      var ww = pw * 0.42, gap = (U - n * pw - (n + 1) * ww) / (2 * n + 2), x = mL + gap;
      B.wins = []; B.slots = [];
      for (i = 0; i <= n; i++) {
        B.wins.push({ x0: Math.round(x), x1: Math.round(x + ww), y0: Math.round(B.railY + 14 * k), y1: Math.round(B.wallY - 16 * k) });
        x += ww + gap;
        if (i < n) { B.slots.push({ x: x + pw / 2, w: pw, h: ph, y0: top, y1: top + ph }); x += pw + gap; }
      }
      B.ps = pw / ART_W;
      B.spotD = Math.max(40 * k, 44 * k);
      B.ropeY = B.wallY + B.spotD + 4 * k;
      /* the light from each window falls on the floor as a slanted patch striped by the blinds */
      B.patches = B.wins.map(function (wn, j) {
        var cx = (wn.x0 + wn.x1) / 2, hw = (wn.x1 - wn.x0) / 2, plen = B.FH * (0.7 + (j * 37 % 5) * 0.035), sh = plen * 0.42;
        /* each window's blinds hang a little differently: the bars start at another place, some a touch more open */
        return { x0t: cx - hw * 0.95, x1t: cx + hw * 0.95, x0b: cx - hw * 1.7 + sh, x1b: cx + hw * 1.7 + sh, y0: B.wallY + 1, y1: B.wallY + plen, per: Math.max(16, B.FH / 11),
          ph0: (j * 0.37) % 1, dOpen: ((j * 2) % 3 - 1) * 0.03, open: 0, ph: 0 };
      });
      B.sw = 190 * k; B.per2 = Math.max(34 * k, B.FH / 7);
      /* the on-screen pad covers the canvas's bottom-left corner: nobody walks under it */
      var pad = this.galPadBox();
      B.block = pad && pad.x0 < W * 0.45 && pad.y1 > B.wallY && pad.y0 < H ? { x0: pad.x0 - 10, y0: pad.y0 - 10, x1: pad.x1 + 10, y1: pad.y1 + 10 } : null;
      /* textures for this size */
      var key = "md-gallery-room-" + W + "x" + H + "-" + n;
      if (B.roomKey !== key) {
        var old = B.roomKey, oldB = B.blindKey;
        canvasTex(this, key, W, H, drawRoom(B, W, H));
        canvasTex(this, key + "-blinds", W, B.wallY, drawBlinds(B));
        B.roomKey = key; B.blindKey = key + "-blinds";
        B.room.setTexture(key); B.blinds.setTexture(B.blindKey);
        if (old && old !== key) { try { this.textures.remove(old); this.textures.remove(oldB); } catch (e) {} }
      }
      var vk = "md-gallery-vig-" + W + "x" + H;
      if (B.vigKey !== vk) { canvasTex(this, vk, W, H, drawVignette(W, H)); B.vigKey = vk; B.vig.setTexture(vk); }
      B.grain.setSize(W, H);
      B.txSeen.setFontSize(Math.round(14 * k));
      B.txWarn.setFontSize(Math.round(17 * k));
      B.txSign.setFontSize(Math.round(13 * k));
      B.johnny.mark.setFontSize(Math.round(26 * k)); B.kitty.mark.setFontSize(Math.round(24 * k));
      B.meter = { x0: W / 2 - 60 * k, x1: W / 2 + 120 * k, y: H - 22 * k };
    },
    galPadBox: function () {
      try {
        var pad = document.querySelector("#controls .dpad") || document.querySelector(".dpad"), cv = this.game && this.game.canvas;
        if (!pad || !cv) return null;
        var a = pad.getBoundingClientRect(), c = cv.getBoundingClientRect();
        if (!a.width || !a.height || !c.width || !c.height) return null;
        var fx = this.W / c.width, fy = this.H / c.height;
        return { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
      } catch (e) { return null; }
    },
    /* the scale of a figure standing at y (further back is smaller) */
    galScale: function (y) { var B = this.gl; return B.k * (0.78 + 0.32 * clamp((y - B.wallY) / B.FH, 0, 1)); },
    /* keep a point on the floor, out of the pad's corner */
    galClampPt: function (x, y) {
      var B = this.gl, k = B.k, b = B.block;
      x = clamp(x, 10 * k, this.W - 10 * k); y = clamp(y, B.wallY + 12 * k, B.floorBot - 4 * k);
      if (b && x > b.x0 && x < b.x1 && y > b.y0 && y < b.y1) {
        var dx = b.x1 - x, dy = y - b.y0;
        if (dx < dy) x = b.x1; else y = b.y0;
      }
      return { x: x, y: y };
    },
    galSpot: function (i) { var B = this.gl, s = B.slots[i]; return s ? { x: s.x, y: B.wallY + B.spotD * 0.55 } : null; },
    galIdx: function (Lt) { var B = this.gl; for (var i = 0; i < B.paints.length; i++) if (B.paints[i].letter === Lt) return i; return -1; },
    /* the painting whose spot (between the wall and its rope) is at (x, y), or -1 */
    galSpotAt: function (x, y) {
      var B = this.gl, k = B.k;
      if (y > B.wallY + B.spotD + 2 * k) return -1;
      for (var i = 0; i < B.slots.length; i++) if (Math.abs(x - B.slots[i].x) <= B.slots[i].w / 2 - 2 * k) return i;
      return -1;
    },
    /* the painting the pointer is on: its frame on the wall, or its spot */
    galPaintAt: function (x, y) {
      var B = this.gl, k = B.k;
      for (var i = 0; i < B.slots.length; i++) {
        var s = B.slots[i];
        if (Math.abs(x - s.x) <= s.w / 2 + 4 * k && y >= s.y0 - 6 * k && y <= B.wallY + B.spotD + 2 * k) return i;
      }
      return -1;
    },

    answers_gallery: function () {
      var B = this.gl, self = this, letters = this.choiceLetters(), n = letters.length, k;
      B.paints.forEach(function (p) { self.galKillPaint(p); });
      B.paints = [];
      this.galLayout(n);
      k = B.k;
      var arts = shuffle(ARTS.slice());
      letters.forEach(function (Lt, i) {
        var p = { letter: Lt, state: "live", prog: 0, art: arts[i % arts.length] };
        p.img = self.add.image(0, 0, "md-gallery-art-" + p.art).setOrigin(0.5, 0).setDepth(4);
        p.plaque = self.add.image(0, 0, "md-gallery-plaque").setDepth(4);
        p.label = self.add.text(0, 0, Lt, { fontFamily: SERIF, fontSize: 24, color: "#ffffff", fontStyle: "bold" }).setOrigin(0.5).setDepth(4.2);
        p.old = self.add.text(0, 0, "K. March", { fontFamily: SERIF, fontSize: 11, color: "#d8d8d8", fontStyle: "italic" }).setOrigin(1, 1).setDepth(4.2).setAlpha(0.85);
        p.sig = self.add.text(0, 0, "C. Cross", { fontFamily: SERIF, fontSize: 15, color: SCARLET, fontStyle: "bold italic", stroke: "#1a0004", strokeThickness: 2 }).setOrigin(1, 1).setDepth(4.3);
        if (self.extracted.indexOf(Lt) !== -1) { p.state = "found"; p.prog = 1; }
        B.paints.push(p);
      });
      this.galPlaceWall();
      /* a fresh start: the painter at the door, Johnny far off on his round, the street quiet */
      B.x = B.door.sx; B.y = B.door.sy; B.face = 1; B.seen = 0; B.seenWhy = ""; B.sweep = null; B.nextDir = 0;
      B.carT = B.P.sweepEvery * 0.6; B.ptrPaint = -1;
      this.galNewRound(true);
      this.galPlaceKitty();
    },
    galKillPaint: function (p) { ["img", "plaque", "label", "old", "sig"].forEach(function (f) { if (p[f]) { try { p[f].destroy(); } catch (e) {} p[f] = null; } }); },
    galPlaceWall: function () {
      var B = this.gl, k = B.k, self = this;
      B.paints.forEach(function (p, i) {
        var s = B.slots[i]; if (!s) return;
        var ps = s.w / ART_W;
        p.img.setPosition(s.x, s.y0).setScale(ps);
        p.plaque.setPosition(s.x, s.y1 + 20 * k).setScale(k * 0.82);
        p.label.setPosition(s.x, s.y1 + 19 * k).setFontSize(Math.round(22 * k));
        p.old.setPosition(s.x + (ART_W / 2 - 14) * ps, s.y0 + (ART_H - 13) * ps).setFontSize(Math.max(8, Math.round(11 * ps)));
        p.sig.setPosition(s.x + (ART_W / 2 - 13) * ps, s.y0 + (ART_H - 26) * ps).setFontSize(Math.max(10, Math.round(17 * ps)));
        self.galPaint(p);
      });
      /* the velvet ropes in front of the paintings, at their own depth */
      var g = B.ropeG; g.clear().setDepth(10 + B.ropeY / 1000);
      B.slots.forEach(function (s) {
        var a = s.x - s.w / 2 + 4 * k, b = s.x + s.w / 2 - 4 * k, y = B.ropeY;
        g.lineStyle(3 * k, 0x3a3a3a, 1); g.beginPath(); g.moveTo(a, y - 18 * k);
        for (var u = 0; u <= 1.0001; u += 0.1) g.lineTo(a + (b - a) * u, y - 18 * k + Math.sin(u * Math.PI) * 7 * k);
        g.strokePath();
        g.lineStyle(1, 0x8a8a8a, 0.6); g.beginPath(); g.moveTo(a, y - 19 * k);
        for (u = 0; u <= 1.0001; u += 0.1) g.lineTo(a + (b - a) * u, y - 19 * k + Math.sin(u * Math.PI) * 7 * k);
        g.strokePath();
        [a, b].forEach(function (x) {
          g.fillStyle(0x000000, 0.5); g.fillEllipse(x, y + 1 * k, 12 * k, 4 * k);
          g.fillStyle(0x9a9a9a, 1); g.fillRect(x - 1.5 * k, y - 22 * k, 3 * k, 22 * k);
          g.fillStyle(0xd8d8d8, 1); g.fillCircle(x, y - 23 * k, 3 * k);
          g.fillStyle(0x6a6a6a, 1); g.fillEllipse(x, y, 10 * k, 3.5 * k);
        });
      });
    },
    galPaint: function (p) {
      var dead = p.state === "dead", found = p.state === "found";
      p.img.setTint(dead ? 0x5a5a5a : 0xffffff);
      p.label.setText(dead ? "✕" : found ? "✓" : p.letter).setColor(dead ? "#8a8a8a" : found ? SCARLET : "#ffffff");
      p.plaque.setTint(dead ? 0x7a7a7a : 0xffffff);
      var pr = found ? 1 : dead ? 1 : clamp((p.prog - 0.25) / 0.75, 0, 1);
      p.sig.setColor(dead ? "#9a9a9a" : SCARLET);
      p.sig.setCrop(0, 0, p.sig.width * pr, p.sig.height).setVisible(pr > 0);
    },

    /* Johnny's round: four corners of the middle of the room (from 91, one stop right under a painting) */
    galNewRound: function (reset) {
      var B = this.gl, J = B.johnny, W = this.W, k = B.k, i, pts = [], tries = 0;
      var xa = Math.max(W * 0.3, B.door.x1 + 150 * k), xb = W * 0.93, ya = B.wallY + B.FH * 0.34, yb = B.floorBot - B.FH * 0.1;
      var cx = rnd(xa + (xb - xa) * 0.35, xa + (xb - xa) * 0.65), cy = (ya + yb) / 2;
      var rx = (xb - xa) * rnd(0.3, 0.48), ry = (yb - ya) * rnd(0.35, 0.5), a0 = rnd(0, TAU);
      for (i = 0; i < 4; i++) {
        var a = a0 + i * TAU / 4 + rnd(-0.3, 0.3), p = this.galClampPt(cx + Math.cos(a) * rx, cy + Math.sin(a) * ry);
        pts.push({ x: clamp(p.x, xa, xb), y: clamp(p.y, ya, yb) });
      }
      if (B.P.checks && B.slots.length) {
        var s = B.slots[Math.floor(Math.random() * B.slots.length)];
        pts.splice(1, 0, { x: s.x, y: B.wallY + B.spotD + 30 * k });
      }
      J.wp = pts;
      if (reset) {
        /* start at the corner furthest from the door */
        var best = 0, bd = -1;
        pts.forEach(function (q, j) { var d = Math.abs(q.x - B.door.sx) + Math.abs(q.y - B.door.sy); if (d > bd) { bd = d; best = j; } });
        while (tries++ < 3 && pts[best].y < B.wallY + B.spotD + 40 * k) best = (best + 1) % pts.length;
        J.x = pts[best].x; J.y = pts[best].y; J.wi = (best + 1) % pts.length; J.state = "walk"; J.t = 0;
        J.dir = Math.atan2(pts[J.wi].y - J.y, pts[J.wi].x - J.x);
      }
    },
    galPlaceKitty: function () {
      var B = this.gl, K = B.kitty, k = B.k;
      K.on = !!B.P.kitty;
      K.spr.setVisible(K.on);
      if (!K.on) return;
      var wn = B.wins[B.wins.length - 1];
      var p = this.galClampPt(Math.min(this.W - 30 * k, (wn.x0 + wn.x1) / 2 + 10 * k), B.wallY + B.FH * 0.5);
      K.x = p.x; K.y = p.y; K.base = Math.PI + 0.25; K.dir = K.base; K.t = rnd(0, 6);
    },

    resize_gallery: function (oldW, oldH) {
      var B = this.gl, ow = oldW || this.W, oy = B.wallY, ofh = B.FH;
      function fx(x) { return x / ow; } function fy(y) { return (y - oy) / ofh; }
      var p = { x: fx(B.x), y: fy(B.y) }, j = { x: fx(B.johnny.x), y: fy(B.johnny.y) }, wps = B.johnny.wp.map(function (q) { return { x: fx(q.x), y: fy(q.y) }; });
      this.galLayout(B.nPaint);
      var self = this;
      function back(q) { return self.galClampPt(q.x * self.W, B.wallY + q.y * B.FH); }
      var np = back(p); B.x = np.x; B.y = np.y;
      var nj = back(j); B.johnny.x = nj.x; B.johnny.y = nj.y;
      B.johnny.wp = wps.map(back);
      if (B.sweep) B.sweep.x = B.sweep.x / ow * this.W;
      this.galPlaceWall();
      this.galPlaceKitty();
    },

    /* ── light: what lights a point on the floor, and who sees it ── */
    galSweepPatch: function () {
      var B = this.gl, S = B.sweep;
      if (!S || S.phase !== "go") return null;
      var lean = -S.dir * B.FH * 0.28;
      return { x0t: S.x - B.sw / 2, x1t: S.x + B.sw / 2, x0b: S.x - B.sw * 0.8 + lean, x1b: S.x + B.sw * 0.8 + lean, y0: B.wallY, y1: B.floorBot + 4, per: B.per2, open: B.P.sweepOpen, ph: S.ph };
    },
    galBeam: function () {
      var B = this.gl, J = B.johnny, k = B.k, P = B.P;
      return { x: J.x + Math.cos(J.dir) * 12 * k, y: J.y + Math.sin(J.dir) * 6 * k, dir: J.dir, len: P.beamLen * k, half: P.beamHalf * DEG };
    },
    galInCone: function (cx, cy, dir, len, half, x, y) {
      var dx = x - cx, dy = y - cy, d = Math.sqrt(dx * dx + dy * dy);
      if (d > len) return false;
      if (d < 1) return true;
      return Math.abs(angDiff(Math.atan2(dy, dx), dir)) <= half;
    },
    /* how fast the SEEN meter fills for someone standing at (x, y), per second, and why */
    galExposure: function (x, y) {
      var B = this.gl, P = B.P, k = B.k, J = B.johnny, K = B.kitty, self = this, out = { rate: 0, why: "", src: null, lit: false, beam: false, sweep: false };
      function add(r, why, src) { if (r > out.rate) { out.rate = r; out.why = why; out.src = src; } }
      var ys = [y - 3 * k, y, y + 3 * k];
      /* the blinds' bars and the headlights */
      var sp = this.galSweepPatch();
      ys.forEach(function (yy) {
        B.patches.forEach(function (p) { if (litBy(p, x, yy)) out.lit = true; });
        if (sp && litBy(sp, x, yy)) out.sweep = true;
      });
      if (out.sweep) { out.lit = true; add(1000 / P.catchMs, "CAUGHT IN THE HEADLIGHTS", "car"); }
      /* Johnny: his flashlight, his eyes on the light, his ears up close */
      var bm = this.galBeam(), dj = Math.sqrt((x - J.x) * (x - J.x) + (y - J.y) * (y - J.y));
      if (this.galInCone(bm.x, bm.y, bm.dir, bm.len, bm.half, x, y)) { out.beam = true; out.lit = true; add(1000 / P.catchMs, "JOHNNY'S FLASHLIGHT FOUND YOU", "johnny"); }
      if (out.lit && this.galInCone(J.x, J.y, J.dir, P.sightLen * k, 70 * DEG, x, y)) add(1000 / P.stripeMs, "JOHNNY SPOTTED YOU IN THE LIGHT", "johnny");
      if (dj < 58 * k) add(1000 / P.stripeMs, "JOHNNY HEARD YOU", "johnny");
      /* Kitty: her eyes sweep the room from the window */
      if (K.on) {
        var dk = Math.sqrt((x - K.x) * (x - K.x) + (y - K.y) * (y - K.y));
        if (out.lit && this.galInCone(K.x, K.y - 4 * k, K.dir, P.kSight * k, 32 * DEG, x, y)) add(1000 / P.stripeMs, "KITTY SPOTTED YOU", "kitty");
        if (dk < 46 * k) add(1000 / P.catchMs, "KITTY SAW YOU UP CLOSE", "kitty");
      }
      return out;
    },

    tick_gallery: function (s, inp, ms) {
      var B = this.gl, P = B.P, k = B.k, J = B.johnny, K = B.kitty, i;
      B.t += s;
      B.fxG.clear(); B.uiG.clear(); B.lightG.clear(); B.speckG.clear(); B.winG.clear(); B.artG.clear(); B.shadowG.clear();
      if (!B.told.start) { B.told.start = true; this.toast("Rain on the glass and a con man with a flashlight. Stay in the dark, pal: walk to the right painting and hold SIGN.", 5600); }
      var live = !this._between && !this._finishing;

      /* the painter walks: the keys or the pad, else toward the held pointer */
      var p = this.ptr, mx = 0, my = 0;
      B.ptrPaint = inp.ptr ? this.galPaintAt(p.x, p.y) : -1;
      if (inp.ax || inp.ay) { mx = inp.ax; my = inp.ay; }
      else if (inp.ptr) {
        var tx = p.x, ty = p.y;
        if (B.ptrPaint >= 0) { var sp0 = this.galSpot(B.ptrPaint); tx = sp0.x; ty = sp0.y; if (this.galSpotAt(B.x, B.y) === B.ptrPaint) { tx = B.x; ty = B.y; } }
        var tp = this.galClampPt(tx, ty), dx = tp.x - B.x, dy = tp.y - B.y, dd = Math.sqrt(dx * dx + dy * dy);
        if (dd > 3 * k) { mx = dx / dd; my = dy / dd; }
      }
      var ml = Math.sqrt(mx * mx + my * my);
      B.moving = ml > 0.01;
      if (B.moving) {
        var spd = 185 * k * s;
        var np = this.galClampPt(B.x + mx / ml * spd, B.y + my / ml * spd * 0.8);
        B.x = np.x; B.y = np.y;
        if (Math.abs(mx) > 0.2) B.face = mx > 0 ? 1 : -1;
        B.walkT += s; B.stepT -= ms;
        if (B.stepT <= 0) { B.stepT = 330; this.galSfx("step"); }
      }

      /* the blinds sway (from 21) */
      B.blindPh = P.sway ? P.sway * k * (0.65 * Math.sin(B.t * 0.55 + B.wph) + 0.35 * Math.sin(B.t * 1.3)) : 0;
      B.patches.forEach(function (pa) { pa.open = clamp(P.open + pa.dOpen, 0.2, 0.75); pa.ph = pa.ph0 + B.blindPh / pa.per; });

      /* the street: a car now and then, its headlights sweeping the floor through the blinds */
      if (live) this.galCars(ms);
      /* Johnny's round, Kitty's watch */
      if (live) this.galJohnny(s, ms);
      if (K.on) { K.t += s; K.dir = K.base + 0.95 * Math.sin(K.t * 0.42); }

      /* being seen */
      var ex = this.galExposure(B.x, B.y);
      B.lit = ex.lit;
      if (live && this.iframeMs <= 0) {
        var dj = Math.sqrt((B.x - J.x) * (B.x - J.x) + (B.y - J.y) * (B.y - J.y));
        var dk = K.on ? Math.sqrt((B.x - K.x) * (B.x - K.x) + (B.y - K.y) * (B.y - K.y)) : 1e9;
        if (dj < 22 * k) { this.galCaught("YOU BUMPED INTO JOHNNY"); }
        else if (dk < 20 * k) { this.galCaught("YOU BUMPED INTO KITTY"); }
        else if (ex.rate > 0) {
          B.seen += ex.rate * s; B.seenWhy = ex.why; B.seenSrc = ex.src;
          this.galTold(ex);
          if (B.seen >= 1) this.galCaught(ex.why);
        } else B.seen = Math.max(0, B.seen - s * 1000 / P.decayMs);
      } else if (!live) B.seen = Math.max(0, B.seen - s * 2);
      if (this._finishing) { this.galDraw(); return; }
      if (B.seen > 0.3 && live) {
        B.beatT -= ms;
        if (B.beatT <= 0) { B.beatT = 640 - B.seen * 320; this.galSfx("beat"); }
      }

      /* signing */
      this.galSigning(inp, ms, live);
      this.galDraw();   /* drawn even on the frame the level ends (the last frame stays on screen) */
    },

    galTold: function (ex) {
      var B = this.gl;
      if (ex.src === "car" && !B.told.car2) { B.told.car2 = true; this.toast("Caught in the headlights! Step into a dark row between the bright bars.", 3200); }
      else if (ex.beam && !B.told.beam) { B.told.beam = true; this.toast("Johnny's flashlight! Get out of the beam before the SEEN meter fills.", 3200); }
      else if (ex.src === "johnny" && !ex.beam && ex.why.indexOf("LIGHT") !== -1 && !B.told.lit) { B.told.lit = true; this.toast("You're standing in a bar of light, pal, and Johnny is looking your way. Get into the dark.", 3600); }
      else if (ex.src === "kitty" && !B.told.kitty) { B.told.kitty = true; this.toast("Kitty's watching from the window. Keep out of the light where she looks.", 3400); }
    },

    /* caught: a life, back to the door, the half-written signature wiped off */
    galCaught: function (why) {
      var B = this.gl, self = this;
      if (this.ended || this._finishing || this._between) return false;
      var hit = this.loseLife("hit", why || "CAUGHT");
      B.seen = 0;
      if (!hit) return false;
      B.caught += 1;
      this.burst(B.x, B.y - 40 * B.k, 0xffffff, 10);
      B.paints.forEach(function (p) { if (p.state === "live" && p.prog > 0) { p.prog = 0; self.galPaint(p); } });
      B.x = B.door.sx; B.y = B.door.sy; B.face = 1;
      this.galSfx("caught");
      if (!this._finishing) this.toast(B.told.caught ? "Caught again. Back to the door." : "He's got you. Back to the door, pal, and your signature's wiped off the canvas. Stay in the dark.", 3600);
      B.told.caught = true;
      return true;
    },

    galSigning: function (inp, ms, live) {
      var B = this.gl, k = B.k, P = B.P, si = this.galSpotAt(B.x, B.y), pa = si >= 0 ? B.paints[si] : null;
      B.signing = false;
      var still = !(inp.ax || inp.ay) && (!inp.ptr || B.ptrPaint === si);
      var want = inp.fire && pa && still && live;
      if (si !== B.lastSpot) { B.lastSpot = si; if (pa && pa.state === "live" && !B.told.spot) { B.told.spot = true; this.toast("Under the frame. Hold SIGN (Space) until your signature is written.", 3200); } }
      if (inp.fire && !pa && !inp.ptr && !(inp.ax || inp.ay) && live && !B.told.where) { B.told.where = true; this.toast("Walk to a painting first: stand under its frame, behind the velvet rope.", 3000); }
      if (!want) return;
      if (pa.state !== "live") {
        if (!B.told["st" + si]) { B.told["st" + si] = true; this.toast(pa.state === "dead" ? "That one's crossed out. Try another painting." : "You've already signed that one. Find the other right one.", 2600); }
        return;
      }
      B.signing = true;
      pa.prog = Math.min(1, pa.prog + ms / P.signMs);
      B.scratchT -= ms;
      if (B.scratchT <= 0) { B.scratchT = 120; this.galSfx("scratch"); }
      this.galPaint(pa);
      if (pa.prog >= 1) this.galSigned(pa, si);
    },
    /* the signature is finished: that painting's letter is picked */
    galSigned: function (pa, si) {
      var B = this.gl, k = B.k, s = B.slots[si];
      this.burst(s.x, s.y1 - 10 * k, SCARLET_N, 16);
      B.lastPaint = pa;
      var clean = !B.caught && !this.claimWrong;
      var res = this.answerPick(pa.letter, s.x, s.y1);
      if (res === "wrong") {
        pa.state = "dead"; this.galPaint(pa);
        if (!B.told.wrong) { B.told.wrong = true; this.toast("Wrong canvas, pal. That signature cost you a life. Try another painting.", 3200); }
      } else if (res === "partial") { pa.state = "found"; this.galPaint(pa); this.galSfx("signed"); }
      else if (res === "done") {
        pa.state = "found"; this.galPaint(pa); this.galSfx("signed");
        if (clean && !this.ended) this.awardBonusPoints(1000, "Signed in the dark: never seen");
      }
      return res;
    },

    /* ── the cars in the street ── */
    galCars: function (ms) {
      var B = this.gl, P = B.P, k = B.k, S = B.sweep;
      if (!S) {
        B.carT -= ms;
        if (B.carT > 0) return;
        var dir = B.nextDir || (Math.random() < P.flip ? -1 : 1);
        S = B.sweep = { phase: "warn", t: 0, dir: dir, ph: rnd(0, 1), second: !!B.nextDir, warn: B.nextDir ? Math.max(700, P.sweepWarn * 0.6) : P.sweepWarn };
        B.nextDir = 0;
        S.x = dir > 0 ? -B.sw * 1.3 - B.FH * 0.3 : this.W + B.sw * 1.3 + B.FH * 0.3;
        this.galSfx("car");
        if (!B.told.car) { B.told.car = true; this.toast("Headlights coming! When they sweep across the floor, stand in a dark row between the bright bars.", 4400); }
        return;
      }
      S.t += ms;
      if (S.phase === "warn") {
        if (S.t >= S.warn) { S.phase = "go"; S.t = 0; this.galSfx("whoosh"); }
        return;
      }
      S.x += S.dir * P.sweepSpd * k * ms / 1000;
      var gone = S.dir > 0 ? S.x - B.sw * 1.3 - B.FH * 0.3 > this.W : S.x + B.sw * 1.3 + B.FH * 0.3 < 0;
      if (gone) {
        B.sweep = null;
        if (P.pair && !S.second) { B.nextDir = -S.dir; B.carT = 900; }
        else B.carT = P.sweepEvery * rnd(0.85, 1.15);
      }
    },

    /* ── Johnny walks his round ── */
    galJohnny: function (s, ms) {
      var B = this.gl, P = B.P, k = B.k, J = B.johnny;
      J.t += ms;
      function turnTo(a, rate) { var d = angDiff(a, J.dir), st = rate * s; J.dir += Math.abs(d) <= st ? d : (d > 0 ? st : -st); }
      if (J.state === "walk") {
        var q = J.wp[J.wi], dx = q.x - J.x, dy = q.y - J.y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 4 * k) { J.state = "look"; J.t = 0; J.base = J.dir; return; }
        var want = Math.atan2(dy, dx);
        turnTo(want, 3.2);
        if (Math.abs(angDiff(want, J.dir)) < 1.2) {
          var st = Math.min(d, P.jSpd * k * s);
          J.x += dx / d * st; J.y += dy / d * st; J.walkT += s;
        }
        if (P.turnP && Math.random() < P.turnP * s) { J.state = "q"; J.t = 0; this.galSfx("q"); }
      } else if (J.state === "look") {
        var dur = 1500 + P.scan * 14;
        J.dir = J.base + P.scan * DEG * Math.sin(J.t / dur * TAU);
        if (J.t >= dur) { J.state = "walk"; J.t = 0; J.wi = (J.wi + 1) % J.wp.length; if (J.wi === 0 && B.P.checks) this.galNewRound(false); }
      } else if (J.state === "q") {
        if (J.t >= 600) { J.state = "back"; J.t = 0; J.base = J.dir + Math.PI; }
      } else if (J.state === "back") {
        turnTo(J.base, 6);
        if (J.t >= 1500) { J.state = "walk"; J.t = 0; }
      }
    },

    /* ── drawing, every frame ── */
    galDraw: function () {
      var B = this.gl, P = B.P, k = B.k, J = B.johnny, K = B.kitty, W = this.W, H = this.H, t = B.t, self = this, i;
      var lg = B.lightG, S = B.sweep, sp = this.galSweepPatch();
      /* rain on the windows; the glow of headlights coming */
      var glowSide = S ? S.dir : 0, warnK = S && S.phase === "warn" ? clamp(S.t / S.warn, 0, 1) : 0;
      B.wins.forEach(function (wn, j) {
        var w = wn.x1 - wn.x0, h = wn.y1 - wn.y0, a = 0, cx = (wn.x0 + wn.x1) / 2;
        if (S && S.phase === "warn") {
          var near = glowSide > 0 ? 1 - cx / W : cx / W;
          a = warnK * (0.25 + 0.65 * near) * (0.85 + 0.15 * Math.sin(t * 9));
        } else if (sp) a = 0.6 * Math.max(0, 1 - Math.abs(cx - S.x) / (B.sw * 1.6));
        if (a > 0.01) {
          /* over the blinds: the slats light up, and a halo spills on the wall */
          lg.fillStyle(0xffffff, a * 0.55); lg.fillRect(wn.x0, wn.y0, w, h);
          lg.fillStyle(0xffffff, a * 0.12); lg.fillRect(wn.x0 - 14 * k, wn.y0 - 10 * k, w + 28 * k, h + 24 * k);
          lg.fillStyle(0xffffff, a * 0.08); lg.fillRect(wn.x0 - 30 * k, wn.y0 - 18 * k, w + 60 * k, h + 40 * k);
        }
        B.winG.fillStyle(0xffffff, 0.04 + 0.02 * Math.sin(t * 0.7 + j)); B.winG.fillRect(wn.x0, wn.y0, w, h);
      });
      B.drops.forEach(function (d) {
        var wn = B.wins[d.w % B.wins.length]; if (!wn) return;
        var w = wn.x1 - wn.x0, h = wn.y1 - wn.y0;
        d.v += d.sp * 0.016 * (1 + d.len * 4); if (d.v > 1.1) { d.v = -0.1; d.u = Math.random(); }
        var x = wn.x0 + d.u * w, y0 = wn.y0 + d.v * h, y1 = Math.min(wn.y1, y0 + d.len * h);
        if (y1 <= wn.y0) return;
        B.winG.lineStyle(1.2, 0xe8e8f0, d.a); B.winG.lineBetween(x, Math.max(wn.y0, y0), x - 1, y1);
      });
      /* the blinds' bars on the floor, with the rain's shadow running through them */
      B.patches.forEach(function (pa) { self.galDrawPatch(lg, pa, 0.19, 0.025); });
      if (sp) {
        this.galDrawPatch(lg, sp, 0.42, 0.06);
        lg.fillStyle(0xffffff, 0.06); lg.fillRect(S.x - B.sw * 0.7, B.railY, B.sw * 1.4, B.wallY - B.railY);
        lg.fillStyle(0xffffff, 0.05); lg.fillRect(S.x - B.sw * 0.4, B.railY, B.sw * 0.8, B.wallY - B.railY);
      }
      if (S && S.phase === "warn") {
        /* a comb of the bars to come, at the side the car comes from: the dark rows are safe */
        var ex = S.dir > 0 ? 0 : W - 30 * k, pulse = 0.25 + 0.3 * warnK + 0.12 * Math.sin(t * 10);
        var cp = { per: B.per2, open: P.sweepOpen, ph: S.ph, y0: B.wallY };
        for (var m = -1; m < B.FH / B.per2 + 2; m++) {
          var ya = B.wallY + (m - cp.ph) * cp.per, yb = ya + cp.open * cp.per;
          ya = Math.max(ya, B.wallY); yb = Math.min(yb, B.floorBot);
          if (yb > ya) {
            lg.fillStyle(0xffffff, pulse); lg.fillRect(ex, ya, 30 * k, yb - ya);
            /* and a ghost of them across the whole floor: the dark rows between are where to stand */
            lg.fillStyle(0xffffff, 0.025 + 0.045 * warnK); lg.fillRect(0, ya, W, yb - ya);
          }
        }
      }
      B.specks.forEach(function (d) {
        d.v += d.sp * 0.016; if (d.v > 1) { d.v = 0; d.u = Math.random(); }
        var pa = B.patches[Math.floor(d.u * B.patches.length) % B.patches.length]; if (!pa) return;
        var y = pa.y0 + d.v * (pa.y1 - pa.y0), e = patchEdges(pa, y); if (!e) return;
        var x = e[0] + (e[1] - e[0]) * ((d.u * B.patches.length) % 1);
        if (onBar(pa, y)) { B.speckG.fillStyle(0x000000, 0.35); B.speckG.fillEllipse(x, y, d.r * 1.6 * k, d.r * 2.6 * k); }
      });
      /* Johnny's flashlight */
      var bm = this.galBeam();
      for (i = 4; i >= 1; i--) {
        var ln = bm.len * (0.4 + i * 0.15), hf = bm.half * (0.75 + i * 0.07);
        lg.fillStyle(0xffffff, 0.06);
        lg.fillTriangle(bm.x, bm.y, bm.x + Math.cos(bm.dir - hf) * ln, bm.y + Math.sin(bm.dir - hf) * ln, bm.x + Math.cos(bm.dir + hf) * ln, bm.y + Math.sin(bm.dir + hf) * ln);
      }
      var ex2 = bm.x + Math.cos(bm.dir) * bm.len * 0.92, ey2 = bm.y + Math.sin(bm.dir) * bm.len * 0.92;
      lg.fillStyle(0xffffff, 0.1); lg.fillEllipse(ex2, ey2, bm.len * 0.42, bm.len * 0.2);
      /* Kitty's gaze: a dotted wedge */
      if (K.on) {
        var kr = P.kSight * k, ky = K.y - 4 * k, ka = 32 * DEG;
        B.shadowG.fillStyle(0xffffff, 0.06);
        B.shadowG.fillTriangle(K.x, ky, K.x + Math.cos(K.dir - ka) * kr, ky + Math.sin(K.dir - ka) * kr, K.x + Math.cos(K.dir + ka) * kr, ky + Math.sin(K.dir + ka) * kr);
        [-ka, ka].forEach(function (o) {
          for (var u = 0.12; u < 1; u += 0.06) { B.shadowG.fillStyle(0xffffff, 0.75 * (1 - u * 0.8)); B.shadowG.fillCircle(K.x + Math.cos(K.dir + o) * kr * u, ky + Math.sin(K.dir + o) * kr * u, 1.6 * k); }
        });
      }

      /* the figures: depth by where they stand, lit or in shadow */
      var cs = this.galScale(B.y), frame = B.moving ? Math.floor(B.walkT * 6) % 2 : 0;
      B.chris.setTexture("md-gallery-chris-" + frame).setPosition(B.x, B.y + (B.moving ? -Math.abs(Math.sin(B.walkT * 12)) * 1.5 * k : 0)).setScale(cs * 0.82).setFlipX(B.face < 0).setDepth(10 + B.y / 1000);
      B.chris.setTint(B.lit ? 0xffffff : 0x8c8c8c);
      this.blink(B.chris);
      this.player.setPosition(B.x, B.y - 90 * cs);
      var js = this.galScale(J.y), jf = J.state === "walk" ? Math.floor(J.walkT * 5) % 2 : 0, jFace = Math.cos(J.dir) >= 0 ? 1 : -1;
      var jlit = this.galExposure(J.x, J.y - 1).lit && !this.galInCone(bm.x, bm.y, bm.dir, bm.len, bm.half, J.x, J.y);
      J.spr.setTexture("md-gallery-johnny-" + jf).setPosition(J.x, J.y).setScale(js * 0.86).setFlipX(jFace < 0).setDepth(10 + J.y / 1000).setTint(jlit ? 0xffffff : 0x9a9a9a);
      var shadows = [[B.x, B.y, cs], [J.x, J.y, js]];
      if (K.on) {
        var ks = this.galScale(K.y), kFace = Math.cos(K.dir) >= 0 ? 1 : -1;
        K.spr.setTexture("md-gallery-kitty-" + (Math.floor(K.t * 0.7) % 2)).setPosition(K.x, K.y).setScale(ks * 0.82).setFlipX(kFace < 0).setDepth(10 + K.y / 1000).setTint(this.galExposure(K.x, K.y - 1).lit ? 0xffffff : 0x9a9a9a);
        shadows.push([K.x, K.y, ks]);
        /* her cigarette's ember */
        var kex = K.x + kFace * 22 * ks * 0.82, key = K.y - (128 - 40) * ks * 0.82 * 0.98;
        B.fxG.fillStyle(SCARLET_N, 0.35); B.fxG.fillCircle(kex, key, 4 * k);
        B.fxG.fillStyle(0xff4a5a, 0.95); B.fxG.fillCircle(kex, key, 1.6 * k);
      }
      shadows.forEach(function (q) { B.shadowG.fillStyle(0x000000, 0.5); B.shadowG.fillEllipse(q[0], q[1], 34 * q[2], 9 * q[2]); });
      /* Johnny's ember */
      var jex = J.x + jFace * 16 * js * 0.86, jey = J.y - (128 - 35.5) * js * 0.86 * 0.98, glowA = 0.7 + 0.3 * Math.sin(t * 2.3);
      B.fxG.fillStyle(SCARLET_N, 0.3 * glowA); B.fxG.fillCircle(jex, jey, 4.5 * k);
      B.fxG.fillStyle(0xff4a5a, glowA); B.fxG.fillCircle(jex, jey, 1.7 * k);
      /* where the painter stands, even in the dark */
      if (!B.lit) { B.shadowG.lineStyle(1.5 * k, 0xffffff, 0.35 + 0.1 * Math.sin(t * 4)); B.shadowG.strokeEllipse(B.x, B.y, 40 * cs, 11 * cs); }
      /* the marks over the watchers' heads */
      var who = B.seen > 0.12 ? B.seenSrc : null;
      J.mark.setVisible(J.state === "q" || who === "johnny").setText(who === "johnny" && B.seen > 0.65 ? "!" : "?").setPosition(J.x, J.y - 118 * js + Math.sin(t * 8) * 2 * k);
      K.mark.setVisible(K.on && who === "kitty").setText(B.seen > 0.65 ? "!" : "?").setPosition(K.x, K.y - 112 * this.galScale(K.y));

      /* the paintings: the one under the painter, the strike through the old signature */
      var si = this.galSpotAt(B.x, B.y), hov = B.ptrPaint;
      B.paints.forEach(function (pa, j) {
        var sl = B.slots[j]; if (!sl) return;
        var ps = sl.w / ART_W;
        if ((j === si || j === hov) && pa.state === "live") {
          B.artG.lineStyle(2.5 * k, 0xffffff, j === si ? 0.85 + 0.15 * Math.sin(t * 6) : 0.45);
          B.artG.strokeRect(sl.x - sl.w / 2 - 4 * k, sl.y0 - 4 * k, sl.w + 8 * k, sl.h + 8 * k);
        }
        var strike = pa.state === "found" ? 1 : clamp(pa.prog / 0.25, 0, 1);
        if (strike > 0 || pa.state === "dead") {
          var ow = pa.old.width * pa.old.scaleX, ox = pa.old.x - ow - 2, oy = pa.old.y - pa.old.height * 0.42;
          B.artG.lineStyle(Math.max(1.5, 2 * ps), pa.state === "dead" ? 0x9a9a9a : SCARLET_N, 1);
          B.artG.lineBetween(ox, oy, ox + (ow + 4) * (pa.state === "dead" ? 1 : strike), oy - 1);
        }
        if (pa.state === "dead") {
          B.artG.lineStyle(4 * k, 0x111111, 0.7);
          B.artG.lineBetween(sl.x - sl.w * 0.42, sl.y0 + sl.h * 0.1, sl.x + sl.w * 0.42, sl.y1 - sl.h * 0.1);
          B.artG.lineBetween(sl.x + sl.w * 0.42, sl.y0 + sl.h * 0.1, sl.x - sl.w * 0.42, sl.y1 - sl.h * 0.1);
        }
      });
      this.galDrawUi(si);
      /* film: grain, a flicker, now and then a scratch */
      B.grain.setTilePosition(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
      B.vig.setAlpha(0.93 + 0.07 * Math.sin(t * 23) * Math.sin(t * 7.3));
      if (Math.sin(t * 1.7) > 0.985) { var sx = (Math.sin(t * 13) * 0.5 + 0.5) * W; B.uiG.lineStyle(1, 0xffffff, 0.18); B.uiG.lineBetween(sx, 0, sx + 3, H); }
    },
    /* a patch of light: the whole patch faint, its bars bright */
    /* a patch of light: the whole patch faint, its bars bright, brightest near the window and softer at the edges */
    galDrawPatch: function (g, pa, aBar, aAll) {
      var e0 = patchEdges(pa, pa.y0), e1 = patchEdges(pa, pa.y1), fe = Math.min(3, pa.per * 0.08);
      g.fillStyle(0xffffff, aAll);
      g.fillPoints([{ x: e0[0], y: pa.y0 }, { x: e0[1], y: pa.y0 }, { x: e1[1], y: pa.y1 }, { x: e1[0], y: pa.y1 }], true);
      var m0 = Math.floor(pa.ph) - 1;
      function quad(ya, yb, a) {
        ya = Math.max(ya, pa.y0); yb = Math.min(yb, pa.y1);
        if (yb <= ya) return;
        var p = patchEdges(pa, ya), q = patchEdges(pa, yb);
        g.fillStyle(0xffffff, a);
        g.fillPoints([{ x: p[0], y: ya }, { x: p[1], y: ya }, { x: q[1], y: yb }, { x: q[0], y: yb }], true);
      }
      for (var m = m0; ; m++) {
        var ya = pa.y0 + (m - pa.ph) * pa.per, yb = ya + pa.open * pa.per;
        if (ya > pa.y1) break;
        var t = clamp(((ya + yb) / 2 - pa.y0) / (pa.y1 - pa.y0), 0, 1), a = aBar * (1.25 - 0.7 * t);
        quad(ya - fe, yb + fe, a * 0.3);
        quad(ya, yb, a);
      }
    },
    galDrawUi: function (si) {
      var B = this.gl, k = B.k, g = B.uiG, W = this.W, t = B.t, S = B.sweep;
      /* the SEEN meter, at the top of the wall: an eye and a bar that fills scarlet */
      var M2 = B.meter, bw = M2.x1 - M2.x0, bh = 11 * k, y = M2.y, f = clamp(B.seen, 0, 1);
      g.fillStyle(0x000000, 0.75); g.fillRoundedRect(M2.x0 - 64 * k, y - 13 * k, bw + 72 * k, 26 * k, 6 * k);
      var ex = M2.x0 - 16 * k;
      g.lineStyle(1.6 * k, 0xffffff, 0.9); g.strokeEllipse(ex, y, 22 * k, 11 * k);
      g.fillStyle(f > 0 ? SCARLET_N : 0xffffff, 1); g.fillCircle(ex, y, 3.2 * k);
      g.fillStyle(0x2a2a2a, 1); g.fillRect(M2.x0, y - bh / 2, bw, bh);
      if (f > 0) { g.fillStyle(SCARLET_N, f > 0.65 ? 0.75 + 0.25 * Math.sin(t * 16) : 1); g.fillRect(M2.x0, y - bh / 2, bw * f, bh); }
      g.lineStyle(1.2 * k, 0xd8d8d8, 1); g.strokeRect(M2.x0, y - bh / 2, bw, bh);
      B.txSeen.setPosition(ex - 16 * k, y).setText("SEEN");
      /* headlights coming: the side they come from */
      if (S && S.phase === "warn") {
        var left = S.dir > 0, ax = left ? 46 * k : W - 46 * k, ay = B.wallY + 22 * k, bl = 0.6 + 0.4 * Math.sin(t * 10);
        B.txWarn.setVisible(true).setText(left ? "HEADLIGHTS ▶" : "◀ HEADLIGHTS").setPosition(left ? ax + 50 * k : ax - 50 * k, ay).setAlpha(bl);
      } else B.txWarn.setVisible(false);
      /* over the painter's head, or under his feet when he stands near the wall (the letter plates stay clear) */
      var cs = this.galScale(B.y), below = B.y + 64 * k < B.floorBot, hy = B.y - 112 * cs;
      var meterY = below ? B.y + 12 * k : hy - 2 * k, ringY = below ? B.y + 31 * k : hy - 38 * k, textY = below ? B.y + 43 * k : hy - 9 * k;
      if (f > 0.02) {
        var mw = 34 * k;
        g.fillStyle(0x000000, 0.7); g.fillRect(B.x - mw / 2 - 2 * k, meterY - 4 * k, mw + 4 * k, 8 * k);
        g.fillStyle(SCARLET_N, 1); g.fillRect(B.x - mw / 2, meterY - 2.5 * k, mw * f, 5 * k);
        g.lineStyle(1, 0xffffff, 0.8); g.strokeRect(B.x - mw / 2, meterY - 2.5 * k, mw, 5 * k);
      }
      /* signing: a prompt and a scarlet ring */
      var pa = si >= 0 ? B.paints[si] : null;
      if (pa && pa.state === "live" && !this._between) {
        B.txSign.setVisible(true).setText(B.signing ? "SIGNING…" : "HOLD SIGN").setOrigin(0.5, below ? 0 : 1).setPosition(B.x, textY);
        g.fillStyle(0x000000, 0.55); g.fillCircle(B.x, ringY, 11 * k);
        g.lineStyle(3 * k, 0x5a5a5a, 1); g.strokeCircle(B.x, ringY, 8 * k);
        if (pa.prog > 0) { g.lineStyle(3.5 * k, SCARLET_N, 1); g.beginPath(); g.arc(B.x, ringY, 8 * k, -Math.PI / 2, -Math.PI / 2 + TAU * pa.prog); g.strokePath(); }
      } else B.txSign.setVisible(false);
    },

    /* the sounds: footsteps, the pen, a heartbeat, a car in the rain */
    galSfx: function (what) {
      var R = window.SolRealms;
      if (!R || !R.blip) return;
      try {
        if (what === "step") R.blip(170, 120, 0.05, "triangle", 0.012);
        else if (what === "scratch") R.hiss(0.06, 3400 + Math.random() * 800, 0.025);
        else if (what === "beat") { R.blip(62, 42, 0.12, "sine", 0.09); R.blip(58, 40, 0.1, "sine", 0.07, 0.16); }
        else if (what === "car") { R.blip(68, 92, 1.1, "sawtooth", 0.014); R.hiss(1.2, 400, 0.025); }
        else if (what === "whoosh") R.hiss(1.4, 700, 0.04);
        else if (what === "q") R.blip(520, 780, 0.12, "triangle", 0.03);
        else if (what === "caught") { R.blip(330, 160, 0.4, "sawtooth", 0.035); R.blip(247, 120, 0.5, "sawtooth", 0.03, 0.12); }
        else if (what === "signed") { R.blip(392, 392, 0.5, "triangle", 0.035); R.blip(466, 466, 0.5, "triangle", 0.03, 0.12); R.blip(587, 587, 0.8, "triangle", 0.03, 0.24); }
      } catch (e) {}
    },

    /* a right answer: the street goes quiet, the scarlet signature glows */
    clear_gallery: function () {
      var B = this.gl, k = B.k, self = this;
      B.sweep = null; B.seen = 0; B.carT = B.P.sweepEvery * 0.6;
      if (B.lastPaint) {
        B.lastPaint.state = "found"; this.galPaint(B.lastPaint);
        var i = B.paints.indexOf(B.lastPaint), s = B.slots[i];
        if (s) for (var j = 0; j < 3; j++) self.burst(s.x + (j - 1) * s.w * 0.3, s.y0 + s.h * (0.3 + j * 0.2), SCARLET_N, 6);
      }
    }
  });
})();
