/* SOL Labyrinth v5.22 — the Lit and Film mode "crank": Hand-Crank Camera (Film History · Arrival of a Train, 1895).
 *
 * La Ciotat station, summer 1895, in black and white. The camera stands on the platform beside the track and looks
 * down the line the way the Lumières' camera did, so every train comes in from the vanishing point, grows, and sweeps
 * past the lens on the left. The student is the camera operator, with a wooden Cinematograph on a tripod (bottom
 * right). Each answer letter rides on something in the scene: the round plate on an engine's smokebox door, a plate
 * on a carriage, or a hotel porter's board held up on the platform (from level 21 the express carries one too).
 *
 * Two jobs at once, like the real operators:
 *   AIM    ◀ ▶ ▲ ▼ / WASD / the pad (or the mouse, a finger) move the viewfinder over the scene.
 *   CRANK  every tap of Space, CRANK or a mouse button is one turn of the crank (8 frames). Two turns a second is
 *          16 frames a second: the white band on the speed dial. Too slow and the picture flickers, too fast and it
 *          blurs, and far too fast for too long snaps the film.
 * Crank inside the band with exactly one letter in the viewfinder and the take fills; a full take films that letter
 * (answerPick). A wrong letter costs a life and is crossed out. The hazards: a snapped film costs a life (the
 * assistant threads it again), and so does running the magazine dry (every turn uses film, framed or not).
 * Later levels add the express (it shakes the platform and jolts the crank), smoke that hides letters, onlookers who
 * stare into the lens and block the shot, and wind that sways the tripod. crankParams(n) is the one difficulty curve
 * (also on the def as `params`).
 *
 * Registered with SolModes.extend (js/modes.js); the methods below are copied onto ModeScene, so `this` is the mode
 * scene. Textures are drawn once (canvasTex) under "md-crank-" keys; the trains and the people are drawn every frame,
 * in perspective, with Graphics.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, shuffle = L.shuffle, canvasTex = L.canvasTex;
  var TAU = Math.PI * 2;
  var SERIF = "Georgia, 'Times New Roman', serif";
  var FPT = 8;              /* frames for one turn of the crank: two turns a second make 16 frames a second */
  var TARGET = 16;
  var CAMH = 1.7;           /* the lens above the platform, m */
  var ZN = 0.9;             /* nearest depth drawn */
  var XT = -6.2;            /* the platform track's centre line (the camera is at x = 0) */
  var EDGE = -4.5;          /* the platform edge */
  var LOCO = 15.2;          /* engine and tender, m */
  var CARL = 12, CARG = 0.9;
  var LANES = [-3.5, -2.4, -1.25, 1.25, 2.3, 3.3];   /* where people walk toward the camera (never straight at the lens) */
  var DIAL_MAX = 32;

  /* ── difficulty: one curve for every level 1-100, each level a little harder than the one before ── */
  function crankParams(n) {
    n = clamp(Math.floor(Number(n) || 1), 1, 100);
    return {
      bandLo: 11.5 + n * 0.028,                                   /* the white band on the dial, frames a second: 11.5-21.5 at 1 */
      bandHi: 21.5 - n * 0.032,                                   /* ... 14.3-18.3 at 100 */
      redAt: 30 - n * 0.055,                                      /* the SNAP zone starts here (29.9 at 1, 24.5 at 100) */
      snapMs: 1700 - n * 8,                                       /* that long in the SNAP zone snaps the film */
      shotSec: 2 + n * 0.012,                                     /* a full take, s at 16 frames a second (2.0 → 3.2) */
      drain: 0.3 + n * 0.004,                                     /* a take not being filmed fades, share a second */
      film: 64 - n * 0.34,                                        /* feet in a magazine (a foot = 16 frames = 1 s): 64 → 30 */
      trainK: (1 + n * 0.007) * (n >= 91 ? 1.08 : 1),             /* train speed */
      dwell: 9.5 - n * 0.04,                                      /* seconds a train stands at the platform */
      walk: 1.1 + n * 0.006,                                      /* passengers' pace, m/s */
      frame: 0.17 - n * 0.0005,                                   /* the viewfinder's width, share of the picture (0.17 → 0.12) */
      stand: 13000 - n * 85,                                      /* a porter stands this long holding up his letter, ms (13 s → 4.5 s) */
      stick: Math.max(0, 1 - (n - 1) / 30),                       /* the viewfinder drifts onto a lone letter (levels 1-30) */
      beat: n <= 30 ? 1 : 0,                                      /* the beat lamp blinks two turns a second */
      express: n >= 61 ? 1 : n >= 21 ? 0.4 + (n - 21) * 0.012 : 0, /* chance of an express between two trains */
      expK: n >= 21 ? 1 + (n - 21) * 0.006 : 0,                   /* its speed */
      jolt: n >= 21 ? 3 + (n - 21) * 0.07 : 0,                    /* how hard the passing express jolts the crank, frames a second */
      smoke: n >= 41 ? 1 : 0,                                     /* thick smoke hides letters */
      onlook: n >= 81 ? 2 : n >= 51 ? 1 : 0,                      /* onlookers staring into the lens at once */
      onlookMs: n >= 51 ? 2600 + (n - 51) * 20 : 0,
      sway: n >= 71 ? 10 + (n - 71) * 0.9 : 0,                    /* the wind sways the viewfinder, px */
      crowd: 3 + Math.floor(n / 14)                               /* plain passengers about */
    };
  }

  /* ── small helpers ── */
  function g2(v) { v = Math.round(clamp(v, 0, 255)); return (v << 16) | (v << 8) | v; }
  function srand(seed) { var s = seed % 2147483647; if (s <= 0) s += 2147483646; return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }
  function pj(C, x, y, z) { var s = C.F / z; return { x: C.VX + x * s, y: C.VY + (CAMH - y) * s }; }
  function hull(pts) {
    pts = pts.slice().sort(function (a, b) { return a.x - b.x || a.y - b.y; });
    if (pts.length < 3) return pts;
    function cr(o, a, b) { return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x); }
    var lo = [], up = [], i;
    for (i = 0; i < pts.length; i++) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], pts[i]) <= 0) lo.pop(); lo.push(pts[i]); }
    for (i = pts.length - 1; i >= 0; i--) { while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], pts[i]) <= 0) up.pop(); up.push(pts[i]); }
    lo.pop(); up.pop();
    return lo.concat(up);
  }
  function sfx(fn) { try { var R = window.SolRealms; if (R && R.blip) fn(R); } catch (e) {} }

  /* ── vector drawing in the world (Graphics, every frame) ── */
  function poly3(g, C, pts, col, a) {
    var out = [];
    for (var i = 0; i < pts.length; i++) out.push(pj(C, pts[i][0], pts[i][1], Math.max(ZN, pts[i][2])));
    g.fillStyle(col, a == null ? 1 : a); g.fillPoints(out, true);
  }
  function side3(g, C, x, y0, y1, z0, z1, col, a) {
    z0 = Math.max(z0, ZN); if (z1 <= z0) return;
    poly3(g, C, [[x, y0, z0], [x, y1, z0], [x, y1, z1], [x, y0, z1]], col, a);
  }
  function front3(g, C, x0, x1, y0, y1, z, col, a) {
    if (z < ZN) return;
    poly3(g, C, [[x0, y0, z], [x1, y0, z], [x1, y1, z], [x0, y1, z]], col, a);
  }
  function line3(g, C, a3, b3, w, col, a) {
    if (a3[2] < ZN && b3[2] < ZN) return;
    var p = pj(C, a3[0], a3[1], Math.max(ZN, a3[2])), q = pj(C, b3[0], b3[1], Math.max(ZN, b3[2]));
    g.lineStyle(w, col, a == null ? 1 : a); g.lineBetween(p.x, p.y, q.x, q.y);
  }
  /* a wheel on the train's near side (a circle in the plane x = const) */
  function wheel3(g, C, x, yc, zc, r, rot, a) {
    if (zc - r < ZN) return;
    var pts = [], i, n = 16;
    for (i = 0; i < n; i++) { var t = i / n * TAU; pts.push(pj(C, x, yc + Math.sin(t) * r, zc + Math.cos(t) * r)); }
    g.fillStyle(0x161616, a); g.fillPoints(pts, true);
    g.lineStyle(Math.max(1, 0.07 * C.F / zc), 0x9a9a96, a); g.strokePoints(pts, true, true);
    var c = pj(C, x, yc, zc), w = Math.max(1, 0.04 * C.F / zc);
    for (i = 0; i < 4; i++) {
      var t2 = rot + i / 4 * Math.PI, e = pj(C, x, yc + Math.sin(t2) * r * 0.9, zc + Math.cos(t2) * r * 0.9), f = pj(C, x, yc - Math.sin(t2) * r * 0.9, zc - Math.cos(t2) * r * 0.9);
      g.lineStyle(w, 0x6a6a66, a); g.lineBetween(e.x, e.y, f.x, f.y);
    }
    g.fillStyle(0xb0b0aa, a); g.fillCircle(c.x, c.y, Math.max(1.2, 0.1 * C.F / zc));
  }

  function carZ(T, i) { return T.zf + LOCO + CARG + i * (CARL + CARG); }
  function trainLen(T) { return LOCO + T.cars * (CARL + CARG); }

  function drawCar(g, C, T, i, a) {
    var X = T.X, z0 = carZ(T, i), z1 = z0 + CARL, xs = X + 1.42, ex = T.express;
    if (z1 < ZN || z0 > 420) return;
    var body = ex ? 0x2c2c2a : 0x4a4946, low = ex ? 0x202020 : 0x3a3936;
    /* the end wall facing the camera */
    front3(g, C, X - 1.45, xs, -0.55, 2.6, z0, 0x2a2a28, a);
    /* the side: lower panels, the window band, the eaves */
    side3(g, C, xs, -0.55, 0.65, z0, z1, low, a);
    side3(g, C, xs, 0.65, 2.6, z0, z1, body, a);
    side3(g, C, xs - 0.18, 2.6, 2.95, z0, z1, 0x262624, a);
    side3(g, C, xs, 0.62, 0.72, z0, z1, 0xa8a69e, a);
    side3(g, C, xs, 2.2, 2.27, z0, z1, 0x8e8c86, a);
    /* windows, and the plate panel in the middle */
    for (var wz = z0 + 0.7; wz + 1.0 < z1 - 0.5; wz += 1.62) {
      if (Math.abs(wz + 0.5 - (z0 + 6.6)) < 0.9) { side3(g, C, xs, 0.95, 2.05, wz, wz + 1.0, 0x5c5b57, a); continue; }
      side3(g, C, xs, 1.02, 2.0, wz, wz + 1.0, 0x1c1c1c, a);
      side3(g, C, xs, 1.06, 1.96, wz + 0.06, wz + 0.94, ex ? 0x8c8a84 : 0xb6b4ac, a);
      side3(g, C, xs, 1.55, 1.96, wz + 0.06, wz + 0.94, ex ? 0xa4a29c : 0xcfcdc5, a);
    }
    /* underframe, footboard and two bogies */
    side3(g, C, xs - 0.15, -0.95, -0.55, z0 + 0.4, z1 - 0.4, 0x141414, a);
    side3(g, C, xs + 0.08, -0.42, -0.34, z0 + 0.3, z1 - 0.3, 0x7a7872, a);
    var rot = -T.dist / 0.45;
    [z0 + 1.6, z0 + 3.0, z1 - 3.0, z1 - 1.6].forEach(function (zc) { wheel3(g, C, xs - 0.1, -0.58, zc, 0.43, rot, a); });
  }

  function drawLoco(g, C, T, a) {
    var X = T.X, zf = T.zf, ex = T.express, xs = X + 1.45;
    if (zf + LOCO < ZN || zf > 420) return;
    var body = ex ? 0x1e1e1e : 0x2e2e2c, boiler = ex ? 0x2a2a2a : 0x3c3c3a, hi = ex ? 0x8a8a86 : 0xa6a49e;
    /* the tender */
    side3(g, C, X + 1.4, -0.55, 1.95, zf + 10.6, zf + LOCO, body, a);
    side3(g, C, X + 1.4, 1.75, 1.95, zf + 10.6, zf + LOCO, 0x6e6c66, a);
    [zf + 11.6, zf + 13.0, zf + 14.3].forEach(function (zc) { wheel3(g, C, X + 1.3, -0.55, zc, 0.45, -T.dist / 0.45, a); });
    /* the cab, its side window, its front with two round spectacle windows */
    side3(g, C, xs, -0.2, 2.95, zf + 7.6, zf + 10.5, body, a);
    side3(g, C, xs, 1.55, 2.5, zf + 8.0, zf + 9.4, 0x0c0c0c, a);
    side3(g, C, xs - 0.05, 2.95, 3.12, zf + 7.4, zf + 10.6, 0x161616, a);
    front3(g, C, X - 1.5, xs, -0.2, 2.95, zf + 7.6, 0x242422, a);
    if (zf + 7.6 > ZN) {
      var s76 = C.F / (zf + 7.6);
      [-0.8, 0.8].forEach(function (dx) { var c = pj(C, X + dx, 2.25, zf + 7.6); g.fillStyle(0x7e7c76, a); g.fillCircle(c.x, c.y, 0.24 * s76); g.lineStyle(Math.max(1, 0.05 * s76), 0x111111, a); g.strokeCircle(c.x, c.y, 0.24 * s76); });
    }
    /* the running board and the frame */
    side3(g, C, xs, -0.62, -0.18, zf + 0.3, zf + 10.6, 0x1a1a1a, a);
    side3(g, C, xs + 0.02, -0.2, -0.12, zf + 0.3, zf + 10.6, 0x8c8a84, a);
    /* the wheels: a leading pair, three tall drivers, the coupling rod */
    var rot = -T.dist / 0.8;
    wheel3(g, C, X + 1.3, -0.58, zf + 1.4, 0.45, -T.dist / 0.45, a);
    var dz = [zf + 3.4, zf + 5.2, zf + 7.0];
    dz.forEach(function (zc) { wheel3(g, C, X + 1.32, -0.22, zc, 0.78, rot, a); });
    if (dz[0] > ZN + 0.8) {
      var pins = dz.map(function (zc) { return [X + 1.5, -0.22 + Math.sin(rot) * 0.36, zc + Math.cos(rot) * 0.36]; });
      line3(g, C, pins[0], pins[2], Math.max(1.5, 0.09 * C.F / dz[1]), 0xc8c6be, a);
    }
    /* the cylinder */
    side3(g, C, xs + 0.05, -0.5, 0.2, zf + 0.9, zf + 2.4, 0x55534e, a);
    /* the boiler: a cylinder seen from the side, a highlight along its top */
    var z0 = zf + 0.6, z1 = zf + 7.6, r = 0.84, yc = 1.15, ring = [], i;
    if (z1 > ZN) {
      var za = Math.max(z0, ZN);
      for (i = 0; i < 14; i++) { var t = i / 14 * TAU; ring.push(pj(C, X + Math.cos(t) * r, yc + Math.sin(t) * r, za)); ring.push(pj(C, X + Math.cos(t) * r, yc + Math.sin(t) * r, z1)); }
      g.fillStyle(boiler, a); g.fillPoints(hull(ring), true);
      line3(g, C, [X + r * 0.62, yc + r * 0.78, za], [X + r * 0.62, yc + r * 0.78, z1], Math.max(1.2, 0.07 * C.F / Math.max(za, 2)), hi, a);
      line3(g, C, [X + r * 0.98, yc - 0.1, za], [X + r * 0.98, yc - 0.1, z1], Math.max(1, 0.04 * C.F / Math.max(za, 2)), 0x6a6864, a);
      /* boiler bands */
      [zf + 2.6, zf + 4.8, zf + 6.8].forEach(function (zb) {
        if (zb < ZN) return;
        var pts = []; for (var j = -3; j <= 4; j++) { var tt = j / 14 * TAU; pts.push(pj(C, X + Math.cos(tt) * r, yc + Math.sin(tt) * r, zb)); }
        g.lineStyle(Math.max(1, 0.05 * C.F / zb), 0x8a8882, a); g.strokePoints(pts, false, false);
      });
    }
    /* the dome and the chimney */
    function stack(zc, y0, y1, rr, col, lip) {
      if (zc < ZN) return;
      var b = pj(C, X, y0, zc), tp = pj(C, X, y1, zc), w = rr * C.F / zc;
      g.fillStyle(col, a); g.fillRect(b.x - w, tp.y, w * 2, b.y - tp.y);
      g.fillStyle(hi, a * 0.55); g.fillRect(b.x + w * 0.35, tp.y, w * 0.25, b.y - tp.y);
      if (lip) { g.fillStyle(col, a); g.fillRect(b.x - w * 1.4, tp.y - w * 0.25, w * 2.8, w * 0.6); }
      else { g.fillStyle(col, a); g.fillEllipse(b.x, tp.y, w * 2, w * 1.1); }
    }
    stack(zf + 4.4, 1.8, 2.45, 0.36, 0x4a4946, false);
    stack(zf + 1.5, 1.8, 3.2, 0.25, 0x141414, true);
    /* the smokebox front, its round door (the letter plate goes on it), the buffer beam, buffers and lamps */
    var zs = zf + 0.6;
    if (zs > ZN) {
      var sc = C.F / zs, c0 = pj(C, X, yc, zs);
      g.fillStyle(0x161616, a); g.fillCircle(c0.x, c0.y, r * sc);
      g.lineStyle(Math.max(1, 0.05 * sc), 0x7a7874, a); g.strokeCircle(c0.x, c0.y, r * sc);
      g.fillStyle(0x2e2e2c, a); g.fillCircle(c0.x, c0.y, 0.62 * sc);
      g.lineStyle(Math.max(1, 0.035 * sc), 0x9a9892, a); g.strokeCircle(c0.x, c0.y, 0.62 * sc);
    }
    /* below the smokebox, seen from the front: the frame plates, the cylinders, the leading wheels edge-on */
    if (zf + 0.45 > ZN) {
      var sf = C.F / (zf + 0.9);
      front3(g, C, X - 0.62, X + 0.62, -0.75, 0.6, zf + 0.45, 0x141414, a);
      [-1.05, 1.05].forEach(function (dx) {
        var cy = pj(C, X + dx, -0.12, zf + 0.9);
        g.fillStyle(0x3e3d3a, a); g.fillCircle(cy.x, cy.y, 0.36 * sf);
        g.lineStyle(Math.max(1, 0.05 * sf), 0x9a9892, a); g.strokeCircle(cy.x, cy.y, 0.36 * sf);
        g.fillStyle(0x161616, a); g.fillCircle(cy.x, cy.y, 0.12 * sf);
      });
      [-0.78, 0.78].forEach(function (dx) { front3(g, C, X + dx - 0.06, X + dx + 0.06, -1.02, -0.15, zf + 1.4, 0x0e0e0e, a); });
    }
    if (zf > ZN) {
      var sb = C.F / zf;
      front3(g, C, X - 1.5, X + 1.5, -0.78, -0.2, zf, 0x8a8882, a);
      front3(g, C, X - 1.5, X + 1.5, -0.78, -0.7, zf, 0x3a3a38, a);
      [-1.05, 1.05].forEach(function (dx) { var b2 = pj(C, X + dx, -0.48, zf - 0.3); g.fillStyle(0x1a1a1a, a); g.fillCircle(b2.x, b2.y, 0.2 * sb); g.fillStyle(0xbab8b0, a); g.fillCircle(b2.x, b2.y, 0.14 * sb); });
      [[-0.75, -0.02], [0.75, -0.02], [0, 2.05]].forEach(function (q) {
        var l2 = pj(C, X + q[0], q[1], zf + (q[1] > 1 ? 0.55 : 0.05));
        g.fillStyle(0x111111, a); g.fillRect(l2.x - 0.14 * sb, l2.y - 0.17 * sb, 0.28 * sb, 0.3 * sb);
        g.fillStyle(0xfafaf2, a); g.fillCircle(l2.x, l2.y - 0.02 * sb, 0.09 * sb);
      });
    }
  }

  /* a passenger, drawn from the front (walking toward the camera) or the back, feet at (x0, y0), s px a metre */
  function drawPerson(g, x0, y0, s, w, a, t) {
    s *= w.sc;
    var face = w.face, sw = Math.sin(w.ph), bob = Math.abs(sw) * 0.018, lift1 = Math.max(0, sw) * 0.06, lift2 = Math.max(0, -sw) * 0.06;
    function R(xm, ym, wm, hm, col, al) { g.fillStyle(col, a * (al == null ? 1 : al)); g.fillRect(x0 + xm * s, y0 - (ym + hm) * s, wm * s, hm * s); }
    function P(pts, col, al) { g.fillStyle(col, a * (al == null ? 1 : al)); g.fillPoints(pts.map(function (p) { return { x: x0 + p[0] * s, y: y0 - p[1] * s }; }), true); }
    function O(xm, ym, rm, col) { g.fillStyle(col, a); g.fillCircle(x0 + xm * s, y0 - ym * s, rm * s); }
    function E(xm, ym, wm, hm, col) { g.fillStyle(col, a); g.fillEllipse(x0 + xm * s, y0 - ym * s, wm * s, hm * s); }
    function Ln(x1, y1, x2, y2, wd, col) { g.lineStyle(Math.max(1, wd * s), col, a); g.lineBetween(x0 + x1 * s, y0 - y1 * s, x0 + x2 * s, y0 - y2 * s); }
    var b = bob, coat = w.coat, holding = !!w.letter;
    /* a soft shadow on the platform */
    g.fillStyle(0x000000, 0.22 * a); g.fillEllipse(x0, y0, 0.66 * s, 0.1 * s);
    if (w.kind === "lady") {
      P([[-0.16, 0.98 + b], [0.16, 0.98 + b], [0.34 + sw * 0.025, 0.03], [-0.34 + sw * 0.025, 0.03]], w.dress);
      R(-0.35 + sw * 0.025, 0.02, 0.7, 0.05, g2(((w.dress >> 16) & 255) - 40));
      P([[-0.19, 1.43 + b], [0.19, 1.43 + b], [0.13, 0.96 + b], [-0.13, 0.96 + b]], coat);
      O(-0.21, 1.37 + b, 0.085, coat); O(0.21, 1.37 + b, 0.085, coat);
      P([[0.06, 1.43 + b], [0.19, 1.43 + b], [0.13, 0.96 + b], [0.05, 0.96 + b]], 0x000000, 0.25);
      if (s > 70) { R(-0.14, 0.95 + b, 0.28, 0.04, 0x1a1a1a); if (face) P([[-0.07, 1.45 + b], [0.07, 1.45 + b], [0, 1.36 + b]], 0xdcdad2); }
      Ln(-0.23, 1.36 + b, -0.26, 0.98 + b - sw * 0.04, 0.07, coat);
      if (holding) Ln(0.23, 1.36 + b, 0.32, 1.5, 0.07, coat); else Ln(0.23, 1.36 + b, 0.26, 0.98 + b + sw * 0.04, 0.07, coat);
    } else {
      var tr = w.trou;
      R(-0.14, lift1, 0.12, 0.9 - lift1 + b, tr); R(0.02, lift2, 0.12, 0.9 - lift2 + b, tr);
      R(-0.16, lift1, 0.15, 0.05, 0x0e0e0e); R(0.01, lift2, 0.15, 0.05, 0x0e0e0e);
      var hem = w.kind === "porter" ? 0.82 : 0.56;
      P([[-0.24, 1.45 + b], [0.24, 1.45 + b], [0.2, 0.95 + b], [0.25, hem + b], [-0.25, hem + b], [-0.2, 0.95 + b]], coat);
      P([[0.1, 1.45 + b], [0.24, 1.45 + b], [0.2, 0.95 + b], [0.25, hem + b], [0.12, hem + b]], 0x000000, 0.28);
      if (face && s > 70) {
        Ln(-0.075, 1.45 + b, -0.12, 1.12 + b, 0.018, 0x8a8882); Ln(0.075, 1.45 + b, 0.12, 1.12 + b, 0.018, 0x8a8882);
        [1.08, 0.96, 0.84].forEach(function (yy) { if (yy > hem + 0.05) O(0.035, yy + b, 0.014, 0x9a9892); });
        Ln(0, 1.12 + b, 0, hem + b, 0.012, 0x0c0c0c);
      }
      if (face) {
        P([[-0.07, 1.45 + b], [0.07, 1.45 + b], [0, 1.18 + b]], 0xe6e4dc);
        R(-0.016, 1.27 + b, 0.032, 0.14, 0x111111);
        if (w.kind === "porter") { R(-0.2, 1.0 + b, 0.4, 0.05, 0xd0cec6); }
      }
      Ln(-0.23, 1.39 + b, -0.27, 0.86 + b - sw * 0.06, 0.085, coat);
      if (holding) Ln(0.23, 1.39 + b, 0.32, 1.52, 0.085, coat); else Ln(0.23, 1.39 + b, 0.27, 0.86 + b + sw * 0.06, 0.085, coat);
      O(-0.27, 0.85 + b - sw * 0.06, 0.045, face ? 0xcac6bc : coat);
    }
    /* the board on its pole (the letter plate itself is drawn on top by the tag layer) */
    if (holding) { Ln(0.33, 0.98, 0.34, 2.14, 0.04, 0x1a1a1a); O(0.32, 1.52, 0.045, 0xcac6bc); }
    /* the head and the hat */
    var hy = 1.585 + b;
    R(-0.04, 1.43 + b, 0.08, 0.08, face ? 0xbeb9ae : 0x2a2a2a);
    if (face && s > 70) { O(-0.103, hy - 0.005, 0.022, 0xbeb9ae); O(0.103, hy - 0.005, 0.022, 0xbeb9ae); }
    O(0, hy, 0.105, face ? 0xd2cdc2 : 0x2c2b29);
    if (face && s > 70) {
      g.fillStyle(0x000000, 0.18 * a); g.fillEllipse(x0 + 0.045 * s, y0 - hy * s, 0.1 * s, 0.2 * s);
      if (w.kind === "lady") { E(-0.07, hy + 0.05, 0.08, 0.1, 0x2a2826); E(0.07, hy + 0.05, 0.08, 0.1, 0x2a2826); }
      else { R(-0.105, hy + 0.0, 0.03, 0.07, 0x262422); R(0.075, hy + 0.0, 0.03, 0.07, 0x262422); }
      Ln(-0.06, hy + 0.045, -0.02, hy + 0.04, 0.012, 0x2a2826); Ln(0.02, hy + 0.04, 0.06, hy + 0.045, 0.012, 0x2a2826);
      Ln(0.005, hy + 0.01, 0.012, hy - 0.03, 0.01, 0x8a857a);
    }
    if (face && s > 60) {
      O(-0.038, hy + 0.015, 0.012, 0x1a1a1a); O(0.038, hy + 0.015, 0.012, 0x1a1a1a);
      if (w.kind !== "lady" && w.kind !== "child") { P([[-0.06, hy - 0.035], [0.06, hy - 0.035], [0.035, hy - 0.06], [0, hy - 0.045], [-0.035, hy - 0.06]], 0x1c1c1c); }
    } else if (face && w.kind !== "lady" && w.kind !== "child") R(-0.05, hy - 0.055, 0.1, 0.022, 0x1c1c1c);
    var hc = w.hatCol;
    if (w.hat === "bowler") { E(0, hy + 0.08, 0.3, 0.05, hc); P([[-0.1, hy + 0.08], [0.1, hy + 0.08], [0.08, hy + 0.17], [-0.08, hy + 0.17]], hc); E(0, hy + 0.17, 0.16, 0.06, hc); }
    else if (w.hat === "top") { E(0, hy + 0.08, 0.32, 0.05, hc); R(-0.09, hy + 0.08, 0.18, 0.23, hc); R(-0.09, hy + 0.11, 0.18, 0.03, 0x6a6a6a); }
    else if (w.hat === "boater") { E(0, hy + 0.08, 0.34, 0.05, hc); R(-0.1, hy + 0.08, 0.2, 0.08, hc); R(-0.1, hy + 0.09, 0.2, 0.025, 0x222222); }
    else if (w.hat === "cap") { P([[-0.11, hy + 0.06], [0.11, hy + 0.06], [0.12, hy + 0.15], [-0.12, hy + 0.15]], hc); R(-0.13, hy + 0.04, 0.26, 0.035, 0x111111); }
    else if (w.hat === "lady") { E(0, hy + 0.08, 0.46, 0.08, hc); E(0, hy + 0.13, 0.2, 0.1, hc); O(0.1, hy + 0.15, 0.04, 0xe8e6de); O(-0.06, hy + 0.17, 0.035, 0xb8b6ae); }
    if (w.parasol) {
      var px = -0.3, py = 2.1 + b;
      Ln(-0.27, 0.95 + b, px, py, 0.025, 0x222222);
      P([[px - 0.5, py - 0.12], [px, py + 0.16], [px + 0.5, py - 0.12]], 0xe4e2da);
      Ln(px - 0.5, py - 0.12, px + 0.5, py - 0.12, 0.02, 0x8a8882);
    }
  }

  /* ── art drawn once ── */
  function drawPuff(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 1, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,255,0.95)"); g.addColorStop(0.45, "rgba(255,255,255,0.6)"); g.addColorStop(1, "rgba(255,255,255,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  function drawGrain(seed) {
    return function (c, w, h) {
      var R = srand(seed), img = c.createImageData(w, h), d = img.data, i;
      for (i = 0; i < d.length; i += 4) {
        var v = R() < 0.5 ? 0 : 255, al = R() < 0.6 ? Math.floor(R() * 26) : 0;
        d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = al;
      }
      c.putImageData(img, 0, 0);
      for (i = 0; i < 14; i++) {
        c.fillStyle = R() < 0.5 ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.5)";
        c.beginPath(); c.arc(R() * w, R() * h, 0.6 + R() * 1.4, 0, TAU); c.fill();
      }
      c.strokeStyle = "rgba(0,0,0,0.4)"; c.lineWidth = 1;
      for (i = 0; i < 2; i++) { var x = R() * w, y = R() * h; c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + 6, y + 4, x + 3 + R() * 6, y + 9); c.stroke(); }
    };
  }
  function drawSprocket(sw, pitch) {
    return function (c, w, h) {
      c.fillStyle = "#0b0b0b"; c.fillRect(0, 0, w, h);
      var hw = sw * 0.46, hh = pitch * 0.52, x = (w - hw) / 2, y = (h - hh) / 2, r = Math.min(hw, hh) * 0.28;
      c.fillStyle = "#cfccc2";
      c.beginPath(); c.moveTo(x + r, y); c.lineTo(x + hw - r, y); c.quadraticCurveTo(x + hw, y, x + hw, y + r); c.lineTo(x + hw, y + hh - r); c.quadraticCurveTo(x + hw, y + hh, x + hw - r, y + hh);
      c.lineTo(x + r, y + hh); c.quadraticCurveTo(x, y + hh, x, y + hh - r); c.lineTo(x, y + r); c.quadraticCurveTo(x, y, x + r, y); c.fill();
      c.fillStyle = "rgba(0,0,0,0.25)"; c.fillRect(x, y, hw, Math.max(1, hh * 0.18));
    };
  }
  function drawVignette(W, H) {
    return function (c) {
      var g = c.createRadialGradient(W / 2, H * 0.46, Math.min(W, H) * 0.28, W / 2, H * 0.46, Math.max(W, H) * 0.72);
      g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(0.6, "rgba(0,0,0,0.16)"); g.addColorStop(1, "rgba(0,0,0,0.62)");
      c.fillStyle = g; c.fillRect(0, 0, W, H);
    };
  }
  /* the operator and his Cinematograph, side on, the lens to the left. 180 x 260; the crank is drawn every frame */
  var OP = { w: 180, h: 260, axleX: 92, axleY: 118, shX: 128, shY: 112 };
  function drawOperator(c, w, h) {
    c.lineCap = "round"; c.lineJoin = "round";
    function rr(x, y, ww, hh, rad, fill, stroke) { c.beginPath(); c.moveTo(x + rad, y); c.lineTo(x + ww - rad, y); c.quadraticCurveTo(x + ww, y, x + ww, y + rad); c.lineTo(x + ww, y + hh - rad); c.quadraticCurveTo(x + ww, y + hh, x + ww - rad, y + hh); c.lineTo(x + rad, y + hh); c.quadraticCurveTo(x, y + hh, x, y + hh - rad); c.lineTo(x, y + rad); c.quadraticCurveTo(x, y, x + rad, y); c.closePath(); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke; c.lineWidth = 1.5; c.stroke(); } }
    /* the operator: behind the camera, to the right */
    var G = "#1d1d1c";
    c.fillStyle = "rgba(0,0,0,0.35)"; c.beginPath(); c.ellipse(108, 254, 74, 6, 0, 0, TAU); c.fill();
    /* legs and boots */
    c.fillStyle = "#2a2a28"; c.beginPath(); c.moveTo(118, 180); c.lineTo(132, 180); c.lineTo(128, 252); c.lineTo(117, 252); c.closePath(); c.fill();
    c.beginPath(); c.moveTo(136, 180); c.lineTo(150, 180); c.lineTo(156, 252); c.lineTo(144, 252); c.closePath(); c.fill();
    c.fillStyle = "#0e0e0e"; c.fillRect(108, 248, 22, 7); c.fillRect(142, 248, 20, 7);
    /* the jacket */
    c.fillStyle = "#33332f"; c.beginPath(); c.moveTo(120, 100); c.lineTo(152, 100); c.lineTo(160, 140); c.lineTo(158, 190); c.lineTo(114, 190); c.lineTo(114, 140); c.closePath(); c.fill();
    c.strokeStyle = "#5c5a54"; c.lineWidth = 1.2; c.beginPath(); c.moveTo(136, 104); c.lineTo(134, 188); c.stroke();
    c.fillStyle = "#e4e2da"; c.beginPath(); c.moveTo(128, 100); c.lineTo(138, 100); c.lineTo(133, 116); c.closePath(); c.fill();
    c.fillStyle = "#111"; c.fillRect(131.5, 101, 3, 10);
    /* the left arm, resting on the camera top */
    c.strokeStyle = "#33332f"; c.lineWidth = 11; c.beginPath(); c.moveTo(124, 108); c.lineTo(106, 92); c.lineTo(86, 86); c.stroke();
    c.fillStyle = "#cfcac0"; c.beginPath(); c.arc(84, 86, 5, 0, TAU); c.fill();
    /* the head, a bowler hat, a moustache: bent to the camera's eyepiece */
    c.fillStyle = "#c9c4b8"; c.fillRect(129, 86, 9, 14);
    c.fillStyle = "#d4cfc4"; c.beginPath(); c.ellipse(132, 78, 12, 13, -0.15, 0, TAU); c.fill();
    c.fillStyle = "#1b1b1b"; c.beginPath(); c.moveTo(118, 84); c.quadraticCurveTo(124, 89, 130, 85); c.quadraticCurveTo(126, 82, 118, 84); c.fill();
    c.beginPath(); c.arc(124, 75, 1.6, 0, TAU); c.fill();
    c.fillStyle = "#2a2a2a"; c.beginPath(); c.moveTo(138, 70); c.quadraticCurveTo(146, 78, 142, 90); c.lineTo(138, 88); c.closePath(); c.fill();
    c.fillStyle = G; c.beginPath(); c.ellipse(134, 66, 21, 4.5, -0.12, 0, TAU); c.fill();
    c.beginPath(); c.moveTo(121, 66); c.quadraticCurveTo(122, 48, 134, 48); c.quadraticCurveTo(146, 48, 147, 64); c.closePath(); c.fill();
    c.strokeStyle = "#4a4a46"; c.lineWidth = 1.5; c.beginPath(); c.moveTo(122, 62); c.lineTo(146, 60); c.stroke();
    /* the tripod */
    c.strokeStyle = "#5a4e40"; c.lineWidth = 6;
    c.beginPath(); c.moveTo(66, 150); c.lineTo(26, 252); c.moveTo(70, 150); c.lineTo(72, 254); c.moveTo(76, 150); c.lineTo(106, 250); c.stroke();
    c.strokeStyle = "#8a7c68"; c.lineWidth = 2;
    c.beginPath(); c.moveTo(64, 152); c.lineTo(27, 248); c.moveTo(69, 152); c.lineTo(70, 250); c.stroke();
    c.fillStyle = "#3a332a"; c.fillRect(44, 142, 56, 9);
    /* the Cinematograph: a small walnut box, brass lens, the film box on top */
    var wood = c.createLinearGradient(0, 84, 0, 142);
    wood.addColorStop(0, "#9a9286"); wood.addColorStop(1, "#5e574d");
    rr(30, 84, 76, 58, 4, null, null); c.fillStyle = wood; c.fill(); c.strokeStyle = "#1a1a1a"; c.lineWidth = 2; c.stroke();
    c.strokeStyle = "rgba(40,34,26,0.55)"; c.lineWidth = 1;
    for (var i = 0; i < 6; i++) { c.beginPath(); c.moveTo(32, 92 + i * 9); c.bezierCurveTo(55, 89 + i * 9, 80, 96 + i * 9, 104, 91 + i * 9); c.stroke(); }
    c.strokeStyle = "#d8d2c4"; c.lineWidth = 1.3; c.strokeRect(36, 90, 64, 46);
    rr(40, 70, 46, 16, 3, "#7a7266", "#1a1a1a");
    c.fillStyle = "#b8b2a6"; c.fillRect(56, 74, 14, 3);
    /* the brass lens barrel */
    var br = c.createLinearGradient(0, 98, 0, 126);
    br.addColorStop(0, "#f0ece0"); br.addColorStop(0.45, "#b8b09c"); br.addColorStop(1, "#5a5448");
    c.fillStyle = br; c.fillRect(10, 100, 22, 24); c.strokeStyle = "#1a1a1a"; c.lineWidth = 1.5; c.strokeRect(10, 100, 22, 24);
    c.fillStyle = br; c.fillRect(4, 97, 9, 30); c.strokeRect(4, 97, 9, 30);
    c.fillStyle = "#0c0c0c"; c.beginPath(); c.ellipse(5, 112, 3, 12, 0, 0, TAU); c.fill();
    c.fillStyle = "rgba(255,255,255,0.7)"; c.fillRect(14, 102, 12, 2);
    /* the crank's boss on the side of the box */
    c.fillStyle = "#2a2a28"; c.beginPath(); c.arc(OP.axleX, OP.axleY, 7, 0, TAU); c.fill();
    c.fillStyle = "#c8c2b4"; c.beginPath(); c.arc(OP.axleX, OP.axleY, 3.5, 0, TAU); c.fill();
  }

  /* La Ciotat station, drawn once for the canvas size: sky, hills, the two tracks, the platform, the canopy and the
     station building, telegraph poles and a signal. C carries the projection. */
  function drawStation(C, W, H) {
    return function (c) {
      var VX = C.VX, VY = C.VY, F = C.F, k = C.k, R = srand(1895), i, g, x, z;
      function p(x, y, z) { var s = F / z; return [VX + x * s, VY + (CAMH - y) * s]; }
      function poly(pts, fill) { c.beginPath(); pts.forEach(function (q, j) { var r = p(q[0], q[1], Math.max(ZN, q[2])); c[j ? "lineTo" : "moveTo"](r[0], r[1]); }); c.closePath(); c.fillStyle = fill; c.fill(); }
      function seg(a3, b3, wd, col) { var a = p(a3[0], a3[1], a3[2]), b = p(b3[0], b3[1], b3[2]); c.strokeStyle = col; c.lineWidth = wd; c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.stroke(); }
      /* the sky: bright summer haze, a few streaks of cloud */
      g = c.createLinearGradient(0, 0, 0, VY);
      g.addColorStop(0, "#8c8b86"); g.addColorStop(0.55, "#c4c2ba"); g.addColorStop(1, "#e4e2da");
      c.fillStyle = g; c.fillRect(0, 0, W, VY + 4);
      for (i = 0; i < 10; i++) {
        var cx = R() * W, cy = VY * (0.12 + R() * 0.55), rw = (60 + R() * 140) * k, rh = (8 + R() * 16) * k;
        g = c.createRadialGradient(cx, cy, 1, cx, cy, rw);
        g.addColorStop(0, "rgba(250,250,246,0.45)"); g.addColorStop(1, "rgba(250,250,246,0)");
        c.save(); c.translate(cx, cy); c.scale(1, rh / rw); c.translate(-cx, -cy); c.fillStyle = g; c.beginPath(); c.arc(cx, cy, rw, 0, TAU); c.fill(); c.restore();
      }
      /* the hills behind La Ciotat: a far range, then the cliffs on the left */
      c.fillStyle = "#b9b7b0"; c.beginPath(); c.moveTo(0, VY);
      for (x = 0; x <= W; x += 18 * k) c.lineTo(x, VY - (14 + 10 * Math.sin(x * 0.011) + 7 * Math.sin(x * 0.031 + 1) + R() * 3) * k);
      c.lineTo(W, VY); c.closePath(); c.fill();
      c.fillStyle = "#9d9b94"; c.beginPath(); c.moveTo(0, VY);
      var cl = [[0, 92], [0.05, 104], [0.09, 98], [0.13, 76], [0.18, 70], [0.24, 52], [0.3, 46], [0.36, 30], [0.42, 22], [0.5, 12], [0.56, 4]];
      cl.forEach(function (q) { c.lineTo(q[0] * W, VY - q[1] * k * (0.9 + R() * 0.15)); });
      c.lineTo(0.6 * W, VY); c.closePath(); c.fill();
      c.strokeStyle = "rgba(60,60,58,0.25)"; c.lineWidth = 1;
      for (i = 0; i < 18; i++) { var hx = R() * 0.5 * W, hy = VY - R() * 70 * k; c.beginPath(); c.moveTo(hx, hy); c.lineTo(hx + 10 * k, hy + 14 * k); c.stroke(); }
      /* the ground */
      g = c.createLinearGradient(0, VY, 0, H);
      g.addColorStop(0, "#a7a59d"); g.addColorStop(1, "#6f6d66");
      c.fillStyle = g; c.fillRect(0, VY, W, H - VY);
      /* trackside telegraph poles and their wires */
      var poles = [8, 26, 44, 62, 80, 110, 150, 210];
      poles.forEach(function (zp) {
        var b = p(-15, -1.05, zp), t = p(-15, 6.8, zp), wd = Math.max(1, 0.2 * F / zp);
        c.fillStyle = "#3a3936"; c.fillRect(b[0] - wd / 2, t[1], wd, b[1] - t[1]);
        seg([-16.2, 6.3, zp], [-13.8, 6.3, zp], Math.max(1, 0.12 * F / zp), "#3a3936");
      });
      c.strokeStyle = "rgba(40,40,38,0.55)"; c.lineWidth = 1;
      [-16, -14].forEach(function (wx) { var a = p(wx, 6.3, 3), b = p(wx, 6.3, 400); c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.stroke(); });
      /* the two tracks: ballast, sleepers, rails */
      [XT - 4.5, XT].forEach(function (X, ti) {
        poly([[X - 2.1, -1.05, ZN], [X - 2.1, -1.05, 500], [X + (ti ? 1.7 : 2.1), -1.05, 500], [X + (ti ? 1.7 : 2.1), -1.05, ZN]], ti ? "#75736c" : "#7c7a73");
        for (z = 1.2; z < 160; z += 0.74) {
          var al = clamp(1 - z / 170, 0.15, 1);
          poly([[X - 1.3, -1.02, z], [X + 1.3, -1.02, z], [X + 1.3, -1.02, z + 0.26], [X - 1.3, -1.02, z + 0.26]], "rgba(52,50,46," + al.toFixed(2) + ")");
        }
        [-0.72, 0.72].forEach(function (dx) {
          poly([[X + dx - 0.05, -0.92, ZN], [X + dx - 0.05, -0.92, 500], [X + dx + 0.05, -0.92, 500], [X + dx + 0.05, -0.92, ZN]], "#e2e0d8");
          poly([[X + dx + 0.05, -0.92, ZN], [X + dx + 0.05, -0.92, 500], [X + dx + 0.05, -1.05, 500], [X + dx + 0.05, -1.05, ZN]], "#4a4844");
        });
      });
      /* a signal between the tracks, far down the line */
      var sb = p(-8.6, -1.05, 78), st = p(-8.6, 6.0, 78), sw2 = Math.max(1.2, 0.18 * F / 78);
      c.fillStyle = "#2c2b28"; c.fillRect(sb[0] - sw2 / 2, st[1], sw2, sb[1] - st[1]);
      var sa = p(-8.6, 5.6, 78), sa2 = p(-7.2, 5.9, 78); c.strokeStyle = "#2c2b28"; c.lineWidth = Math.max(2, 0.3 * F / 78); c.beginPath(); c.moveTo(sa[0], sa[1]); c.lineTo(sa2[0], sa2[1]); c.stroke();
      /* the platform: paving, the white coping at the edge */
      g = c.createLinearGradient(0, VY, 0, H);
      g.addColorStop(0, "#b3b1a9"); g.addColorStop(1, "#cbc9c1");
      poly([[EDGE, 0, ZN], [EDGE, 0, 500], [9.5, 0, 500], [9.5, 0, ZN]], g);
      c.strokeStyle = "rgba(60,58,54,0.16)"; c.lineWidth = 1;
      for (z = 1.5; z < 120; z *= 1.16) { var a1 = p(EDGE + 0.5, 0, z), b1 = p(9.5, 0, z); c.beginPath(); c.moveTo(a1[0], a1[1]); c.lineTo(b1[0], b1[1]); c.stroke(); }
      for (x = -3; x <= 8; x += 1.5) { var a2 = p(x, 0, 1), b2 = p(x, 0, 300); c.beginPath(); c.moveTo(a2[0], a2[1]); c.lineTo(b2[0], b2[1]); c.stroke(); }
      poly([[EDGE, 0, ZN], [EDGE, 0, 500], [EDGE + 0.5, 0, 500], [EDGE + 0.5, 0, ZN]], "#e6e4dc");
      seg([EDGE + 0.5, 0, 1], [EDGE + 0.5, 0, 500], 1, "rgba(60,58,54,0.35)");
      /* the station building, its tall doors and windows */
      poly([[9.5, 0, ZN], [9.5, 7.0, ZN], [9.5, 7.0, 140], [9.5, 0, 140]], "#9c9a93");
      for (z = 3; z < 120; z += 4.6) {
        poly([[9.5, 0, z], [9.5, 3.2, z], [9.5, 3.2, z + 1.7], [9.5, 0, z + 1.7]], "#2e2d2a");
        poly([[9.5, 3.2, z], [9.5, 3.55, z + 0.4], [9.5, 3.65, z + 0.85], [9.5, 3.55, z + 1.3], [9.5, 3.2, z + 1.7]], "#2e2d2a");
        poly([[9.5, 4.3, z + 0.3], [9.5, 5.7, z + 0.3], [9.5, 5.7, z + 1.4], [9.5, 4.3, z + 1.4]], "#3e3d39");
        seg([9.5, 0, z - 0.12], [9.5, 3.4, z - 0.12], Math.max(1, 0.1 * F / z), "#d6d4cc");
      }
      poly([[9.5, 6.3, ZN], [9.5, 7.0, ZN], [9.5, 7.0, 140], [9.5, 6.3, 140]], "#c8c6be");
      /* the canopy over the platform: its underside, the fretted wooden valance, cast-iron columns */
      poly([[3.9, 4.6, ZN], [9.5, 4.6, ZN], [9.5, 4.6, 72], [3.9, 4.6, 72]], "#4a4844");
      for (z = 2; z < 72; z += 3) seg([3.9, 4.6, z], [9.5, 4.6, z], Math.max(1, 0.06 * F / z), "rgba(20,20,18,0.5)");
      [8, 16, 24, 32, 40, 48, 56, 64].forEach(function (zc) {
        var b = p(4.3, 0, zc), t = p(4.3, 4.6, zc), wd = Math.max(1.2, 0.17 * F / zc);
        c.fillStyle = "#262522"; c.fillRect(b[0] - wd / 2, t[1], wd, b[1] - t[1]);
        c.fillRect(b[0] - wd, b[1] - wd * 1.6, wd * 2, wd * 1.6);
        seg([4.3, 3.7, zc], [3.95, 4.5, zc], Math.max(1, 0.07 * F / zc), "#262522");
        seg([4.3, 3.7, zc], [4.9, 4.5, zc], Math.max(1, 0.07 * F / zc), "#262522");
      });
      poly([[3.9, 4.1, ZN], [3.9, 4.6, ZN], [3.9, 4.6, 72], [3.9, 4.1, 72]], "#a6a39b");
      c.fillStyle = "#a6a39b"; c.beginPath();
      for (z = 1.05; z < 72; z += 0.5) { var t0 = p(3.9, 4.1, z), t1 = p(3.9, 3.92, z + 0.25), t2 = p(3.9, 4.1, z + 0.5); c.moveTo(t0[0], t0[1]); c.lineTo(t1[0], t1[1]); c.lineTo(t2[0], t2[1]); }
      c.fill();
      seg([3.9, 4.6, 1], [3.9, 4.6, 72], 1.5, "#2a2926");
      seg([3.9, 4.1, 1], [3.9, 4.1, 72], 1, "rgba(30,30,28,0.6)");
      /* the name board hanging under the canopy */
      var n0 = p(5.0, 4.1, 18), n1 = p(8.6, 3.45, 18);
      c.strokeStyle = "#262522"; c.lineWidth = Math.max(1, 0.05 * F / 18);
      c.beginPath(); c.moveTo(n0[0] + 6 * k, n0[1]); c.lineTo(n0[0] + 6 * k, p(5, 4.6, 18)[1]); c.moveTo(n1[0] - 6 * k, n0[1]); c.lineTo(n1[0] - 6 * k, p(5, 4.6, 18)[1]); c.stroke();
      c.fillStyle = "#f0eee6"; c.fillRect(n0[0], n0[1], n1[0] - n0[0], n1[1] - n0[1]);
      c.strokeStyle = "#1a1a1a"; c.lineWidth = Math.max(1.5, 2 * k); c.strokeRect(n0[0], n0[1], n1[0] - n0[0], n1[1] - n0[1]);
      c.fillStyle = "#151515"; c.font = "bold " + Math.round((n1[1] - n0[1]) * 0.62) + "px " + SERIF; c.textAlign = "center"; c.textBaseline = "middle";
      c.fillText("LA CIOTAT", (n0[0] + n1[0]) / 2, (n0[1] + n1[1]) / 2 + 1);
      /* luggage and a bench under the canopy */
      [[7.2, 10, 1.2, 0.7, "#3c3a36"], [7.4, 10.9, 0.9, 0.5, "#6a6862"], [6.6, 30, 1.0, 0.6, "#4a4844"]].forEach(function (q) {
        poly([[q[0], 0, q[1]], [q[0], q[3], q[1]], [q[0] + q[2], q[3], q[1]], [q[0] + q[2], 0, q[1]]], q[4]);
      });
      [14, 38].forEach(function (zb) {
        poly([[6.6, 0.45, zb], [6.6, 0.55, zb], [6.6, 0.55, zb + 2.2], [6.6, 0.45, zb + 2.2]], "#2c2b28");
        poly([[6.9, 0.55, zb], [6.9, 1.0, zb], [6.9, 1.0, zb + 2.2], [6.9, 0.55, zb + 2.2]], "#3a3936");
        seg([6.6, 0, zb + 0.2], [6.6, 0.5, zb + 0.2], Math.max(1, 0.06 * F / zb), "#2c2b28");
        seg([6.6, 0, zb + 2.0], [6.6, 0.5, zb + 2.0], Math.max(1, 0.06 * F / zb), "#2c2b28");
      });
      /* soft light from the sky on the platform's far end */
      g = c.createLinearGradient(0, VY - 20 * k, 0, VY + 60 * k);
      g.addColorStop(0, "rgba(236,234,226,0)"); g.addColorStop(0.5, "rgba(236,234,226,0.18)"); g.addColorStop(1, "rgba(236,234,226,0)");
      c.fillStyle = g; c.fillRect(0, VY - 20 * k, W, 80 * k);
    };
  }

  function ensureCrankArt(scene) {
    canvasTex(scene, "md-crank-puff", 64, 64, drawPuff);
    for (var i = 0; i < 3; i++) canvasTex(scene, "md-crank-grain-" + i, 256, 256, drawGrain(17 + i * 101));
    canvasTex(scene, "md-crank-op", OP.w, OP.h, drawOperator);
  }

  var KINDS = ["man", "man", "lady", "lady", "man", "porter", "child"];
  var HATS = { man: ["bowler", "bowler", "top", "boater"], lady: ["lady", "lady"], porter: ["cap"], child: ["boater", "cap"] };

  M.extend("crank", {
    name: "Hand-Crank Camera", kind: "camera level", level: "camera level", act: "CRANK",
    how: "La Ciotat, 1895: you are the Lumières' camera operator on the station platform, with a wooden Cinematograph on a tripod. Trains steam in from the distance and sweep past the lens, carriages stop at the platform and passengers crowd past. Every answer letter rides on something: the round plate on an engine's smokebox, a plate on a carriage, or a porter's board. Move the viewfinder onto the right letter and turn the crank at a steady speed: two turns a second is 16 frames a second, the white band on the speed dial. Too slow and the picture flickers; too fast and it blurs. Keep just one letter in the viewfinder while you crank in the white band and the take fills up; a full take films that letter.",
    rules: "Filming a wrong letter costs a life (its plate is crossed out). So does snapping the film by cranking far too fast for too long (the needle in the black SNAP zone), or running your magazine out of film: every turn of the crank uses film, so crank when your letter is in the shot.",
    keys: "◀ ▶ ▲ ▼, WASD or the on-screen pad move the viewfinder (or point with the mouse or a finger) · tap Space, CRANK or a mouse button once for every turn of the crank: about two taps a second.",
    tip: "HAND-CRANK CAMERA — frame the right letter and crank two turns a second (the white band) until the take is full.",
    hint1: "Frame the thing carrying the right letter in the viewfinder and crank steadily until the take is full. The passage stays in the side panel.",
    hint2: "This question has two right letters. Film both of them, one full take each.",
    news: ["",
      "Faster trains, a narrower white band on the speed dial, and every take needs a little more film.",
      "The express! A train that doesn't stop charges straight at your lens. The platform shakes and jolts your crank: hold it steady.",
      "No more help: the beat lamp is out, and the viewfinder no longer drifts onto a letter for you. Keep two turns a second by feel.",
      "Smoke and steam: the engines blow clouds across the scene. A letter inside a thick cloud can't be filmed until it clears.",
      "Onlookers: a curious passenger walks right up to the camera and stares into the lens, blocking whatever is behind him.",
      "The express comes between every two trains now, faster and shaking harder.",
      "Wind off the sea: the camera sways on its tripod and the viewfinder drifts. Hold it on your letter.",
      "Two onlookers at a time, and they stay longer.",
      "The premiere: the fastest trains, the narrowest band, and the film snaps sooner than ever."],
    params: crankParams
  }, {
    crankParams: function (n) { return crankParams(n); },

    setup_crank: function () {
      ensureCrankArt(this);
      var P = crankParams(this.night), self = this, i;
      var C = this.ck = { P: P, t: 0, subs: [], train: null, cyc: { ph: "approach", t: 0, dur: 0 }, puffs: [], puffPool: [], tags: [], tagTx: [],
        prog: {}, dead: [], rate: 0, lastTap: null, turns: 0, ang: 0, frames: 0, film: P.film, snapT: 0, lockMs: 0, lockWhy: "", jolt: 0, joltT: 0, needle: 0,
        fx: 0, fy: 0, tx: null, ty: null, aimMode: "keys", keyHold: 0, lpx: null, lpy: null, idle: 0, drive: 0, driveT: 0,
        ensureT: 0, ambT: 1500, onT: rnd(5000, 8000), told: {}, snaps: 0, empties: 0, filmed: 0, zone: "idle", filming: null, cand: [],
        beatT: 0, flash: 0, title: 2.8, lastFt: -1, lastStatus: "", noSpawn: false, noTrain: false, freeze: false, id: 0, bgKey: null, vigKey: null, sprKey: null };
      this.cameras.main.setBackgroundColor("#0e0e0e");
      C.bg = this.add.image(0, 0, "__DEFAULT").setOrigin(0, 0).setDepth(0);
      C.dynG = this.add.graphics().setDepth(5);
      C.ghostG = this.add.graphics().setDepth(6).setVisible(false);
      C.maskG = this.add.graphics().setDepth(10);
      C.frameG = this.add.graphics().setDepth(11);
      C.tagG = this.add.graphics().setDepth(12);
      C.txStatus = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 32, color: "#f4f2ea", fontStyle: "bold", stroke: "#0c0c0c", strokeThickness: 6 }).setOrigin(0.5, 1).setDepth(14);
      C.hudG = this.add.graphics().setDepth(24);
      C.op = this.add.image(0, 0, "md-crank-op").setOrigin(0, 1).setDepth(24);
      C.crankG = this.add.graphics().setDepth(25);
      var hud = { fontFamily: SERIF, fontSize: 30, color: "#f4f2ea", fontStyle: "bold", stroke: "#0c0c0c", strokeThickness: 6 };
      C.txFps = this.add.text(0, 0, "", hud).setOrigin(0.5, 1).setDepth(26);
      C.txFilm = this.add.text(0, 0, "", hud).setOrigin(0.5, 0).setDepth(26);
      C.dialTx = ["FLICKER", "16", "BLUR", "SNAP"].map(function (s) { return self.add.text(0, 0, s, { fontFamily: SERIF, fontSize: 26, color: "#f4f2ea", fontStyle: "bold", stroke: "#0c0c0c", strokeThickness: 5 }).setOrigin(0.5).setDepth(26); });
      C.titleG = this.add.graphics().setDepth(27);
      C.titleTx = this.add.text(0, 0, "ARRIVAL OF A TRAIN\nAT LA CIOTAT", { fontFamily: SERIF, fontSize: 44, color: "#f4f2ea", fontStyle: "bold", align: "center", lineSpacing: 6 }).setOrigin(0.5).setDepth(28);
      C.titleSub = this.add.text(0, 0, "A. & L. LUMIÈRE · 1895", { fontFamily: SERIF, fontSize: 22, color: "#cfcdc5", fontStyle: "italic", align: "center" }).setOrigin(0.5).setDepth(28);
      C.grain = this.add.tileSprite(0, 0, 16, 16, "md-crank-grain-0").setOrigin(0, 0).setDepth(30).setAlpha(0.55);
      C.flick = this.add.rectangle(0, 0, 16, 16, 0x000000, 1).setOrigin(0, 0).setDepth(31).setAlpha(0);
      C.scratchG = this.add.graphics().setDepth(32);
      C.vig = this.add.image(0, 0, "__DEFAULT").setOrigin(0, 0).setDepth(33);
      C.sprL = this.add.tileSprite(0, 0, 16, 16, "__DEFAULT").setOrigin(0, 0).setDepth(34);
      C.sprR = this.add.tileSprite(0, 0, 16, 16, "__DEFAULT").setOrigin(0, 0).setDepth(34);
      try { this.bigTag.setFontFamily(SERIF).setColor("#f4f2ea").setStroke("#0c0c0c", 8); } catch (e) {}
      this.crankLayout();
      C.fx = C.VX + (C.x1p - C.VX) * 0.2; C.fy = C.VY - 10 * C.k;
      /* a turn of the crank for every press: Space, a click or a tap on the picture, the CRANK button. Counted from the
         events, so a quick tap between two frames is never lost */
      C.tapQ = 0;
      C.onKey = function (e) { if (e && e.repeat) return; self.crankQueueTap(); };
      C.onPtr = function () { self.crankQueueTap(); };
      C.onAct = function () { self.crankQueueTap(); };
      this.input.keyboard.on("keydown-SPACE", C.onKey);
      this.input.on("pointerdown", C.onPtr);
      var actEl = null;
      try { actEl = document.getElementById("btn-action"); if (actEl) actEl.addEventListener("pointerdown", C.onAct); } catch (eA) {}
      var unbind = function () {
        try { self.input.keyboard.off("keydown-SPACE", C.onKey); self.input.off("pointerdown", C.onPtr); } catch (e1) {}
        try { if (actEl) actEl.removeEventListener("pointerdown", C.onAct); } catch (e2) {}
      };
      this.events.once("shutdown", unbind); this.events.once("destroy", unbind);
      /* the first train is already on its way in, and people wait on the platform */
      this.crankSpawnTrain(false, 118);
      for (i = 0; i < 3; i++) this.crankSpawnWalker({ x: rnd(-3.8, -2.2), z: 9 + i * 7 + rnd(0, 3), st: "wait" });
      for (i = 0; i < 2; i++) this.crankSpawnWalker({ x: LANES[3 + i], z: rnd(16, 34), dir: -1 });
      this.makeSol(C.opX + 100 * C.opS, C.opY - 150 * C.opS, "left").setVisible(false);   /* the operator films; the sprite stays for coin pop-ups */
    },

    /* the on-screen pad / action button, in canvas pixels (null when not shown) */
    crankBox: function (sel) {
      try {
        var el = document.querySelector(sel), cv = this.game && this.game.canvas;
        if (!el || !cv) return null;
        var a = el.getBoundingClientRect(), c = cv.getBoundingClientRect();
        if (!a.width || !a.height || !c.width || !c.height || !el.offsetParent) return null;
        var fx = this.W / c.width, fy = this.H / c.height;
        var b = { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
        if (b.x1 < 0 || b.x0 > this.W || b.y1 < 0 || b.y0 > this.H) return null;
        return b;
      } catch (e) { return null; }
    },

    /* everything that depends on the canvas size */
    crankLayout: function () {
      var C = this.ck, W = this.W, H = this.H, k;
      k = C.k = clamp(Math.min(H / 768, W / 1000), 0.6, 1.25);
      C.sw = Math.round(22 * k);
      C.x0p = C.sw; C.x1p = W - C.sw;
      C.VX = Math.round(W * 0.58); C.VY = Math.round(H * 0.4); C.F = H * 0.92;
      /* the HUD along the bottom: the operator by the action button, the speed dial, the film magazine */
      var pad = this.crankBox("#controls .dpad") || this.crankBox(".dpad"), act = this.crankBox("#btn-action");
      C.opS = 0.92 * k;
      var opRight = (act && act.y1 > H * 0.6 && act.x0 > W * 0.5) ? act.x0 - 6 * k : C.x1p - 8 * k;
      C.opX = Math.round(opRight - OP.w * C.opS); C.opY = H - 2 * k;
      C.dialR = Math.round(62 * k);
      C.dialX = Math.round(C.opX - C.dialR - 18 * k); C.dialY = Math.round(H - 34 * k);
      var leftLimit = (pad && pad.y1 > H * 0.6 && pad.x0 < W * 0.4 ? pad.x1 : C.x0p) + 12 * k;
      C.reelR = Math.round(24 * k);
      C.reelX = Math.round(C.dialX - C.dialR - C.reelR - 34 * k); C.reelY = Math.round(H - 70 * k);
      if (C.reelX - C.reelR - 30 * k < leftLimit) { C.reelX = Math.round(C.dialX + C.dialR * 0.15); C.reelY = Math.round(C.dialY - C.dialR - 70 * k); C.reelUp = true; } else C.reelUp = false;
      C.hudTop = Math.min(C.dialY - C.dialR - 30 * k, C.opY - OP.h * C.opS + 40 * k);
      /* the viewfinder: a 4:3 frame */
      C.fw = Math.max(112 * k, C.P.frame * (C.x1p - C.x0p)); C.fh = C.fw * 0.75;
      C.fyMin = Math.max(C.fh / 2 + 34 * k, C.VY - 210 * k); C.fyMax = Math.min(C.hudTop - C.fh / 2 + 40 * k, C.VY + 170 * k);
      if (C.fyMax < C.fyMin) C.fyMax = C.fyMin;
      /* the drawn-once layers */
      var key = "md-crank-bg-" + W + "x" + H, old = C.bgKey;
      if (key !== old) {
        canvasTex(this, key, W, H, drawStation(C, W, H)); C.bgKey = key; C.bg.setTexture(key);
        if (old) { try { this.textures.remove(old); } catch (e) {} }
      }
      var vk = "md-crank-vig-" + W + "x" + H, ov = C.vigKey;
      if (vk !== ov) {
        canvasTex(this, vk, W, H, drawVignette(W, H)); C.vigKey = vk; C.vig.setTexture(vk);
        if (ov) { try { this.textures.remove(ov); } catch (e2) {} }
      }
      C.pitch = Math.round(26 * k);
      var sk = "md-crank-spr-" + C.sw + "-" + C.pitch;
      canvasTex(this, sk, C.sw, C.pitch, drawSprocket(C.sw, C.pitch)); C.sprKey = sk;
      C.sprL.setTexture(sk).setPosition(0, 0).setSize(C.sw, H); C.sprR.setTexture(sk).setPosition(W - C.sw, 0).setSize(C.sw, H);
      C.grain.setPosition(0, 0).setSize(W, H);
      C.flick.setPosition(0, 0).setSize(W, H);
      try { C.flick.width = W; C.flick.height = H; } catch (e3) {}
      C.op.setPosition(C.opX, C.opY).setScale(C.opS);
      var kt = C.kt = Math.max(k, 0.8), fs = function (t, px) { t.setScale(px / 30); };
      fs(C.txFps, 15 * kt); fs(C.txFilm, 13 * kt);
      C.dialTx.forEach(function (t, i) { t.setScale((i === 1 ? 14 : 10) * kt / 26); });
      C.txStatus.setScale(16 * kt / 32);
      C.titleTx.setScale(clamp(W / 1000, 0.6, 1.2) * 34 / 44); C.titleSub.setScale(clamp(W / 1000, 0.6, 1.2) * 0.8);
      this.crankClampFrame();
    },
    resize_crank: function () {
      var C = this.ck, ox = C.VX, oy = C.VY;
      this.crankLayout();
      C.fx += C.VX - ox; C.fy += C.VY - oy;
      this.crankClampFrame();
      if (this.player) this.player.setPosition(C.opX + 100 * C.opS, C.opY - 150 * C.opS);
    },
    crankClampFrame: function () {
      var C = this.ck;
      C.fx = clamp(C.fx, C.x0p + C.fw / 2 + 2, C.x1p - C.fw / 2 - 2);
      C.fy = clamp(C.fy, C.fyMin, C.fyMax);
    },

    /* ── the question: letters onto the scene ── */
    answers_crank: function () {
      var C = this.ck;
      C.dead = []; C.prog = {}; C.film = C.P.film; C.snapT = 0; C.filming = null; C.lastFt = -1;
      C.subs.forEach(function (w) { w.letter = null; });
      if (C.train) { C.train.letters = { loco: null, cars: [null, null, null] }; }
      this.crankEnsure(true);
    },
    crankLive: function () {
      var C = this.ck, self = this;
      return this.choiceLetters().filter(function (L2) { return C.dead.indexOf(L2) === -1 && self.extracted.indexOf(L2) === -1; });
    },
    crankLetterState: function (L2) {
      return this.ck.dead.indexOf(L2) !== -1 ? "dead" : this.extracted.indexOf(L2) !== -1 ? "found" : "live";
    },
    /* is the letter on something that is (or will soon be) in view? */
    crankHasCarrier: function (L2) {
      var C = this.ck, T = C.train, i;
      if (T && T.letters) {
        if (T.letters.loco === L2 && T.zf > 9 && T.phase !== "depart") return true;
        for (i = 0; i < T.cars; i++) if (T.letters.cars[i] === L2 && carZ(T, i) + 6.6 > 7) return true;
      }
      return C.subs.some(function (w) { return w.letter === L2 && !w.gone && w.st !== "out" && (w.dir > 0 || w.z > 6.5); });
    },
    crankEnsure: function (fresh) {
      var C = this.ck, self = this;
      if (C.noSpawn) return;
      var live = shuffle(this.crankLive().slice());
      live.forEach(function (L2) { if (!self.crankHasCarrier(L2)) self.crankGive(L2, fresh); });
    },
    crankGive: function (L2, fresh) {
      var C = this.ck, T = C.train, i;
      if (T && !T.express && T.letters && ((T.phase === "approach" && T.zf > 30) || T.phase === "dwell")) {
        var on = (T.letters.loco ? 1 : 0) + (T.letters.cars[0] ? 1 : 0) + (T.letters.cars[1] ? 1 : 0);
        if (on < 2) {
          if (T.phase === "approach" && !T.letters.loco) { T.letters.loco = L2; return "loco"; }
          for (i = 0; i < 2; i++) if (!T.letters.cars[i]) { T.letters.cars[i] = L2; return "car"; }
        }
      }
      /* a hotel porter (or a traveller) holds the letter up on a board, where it is farthest from every other plate */
      var spot = this.crankSpot();
      this.crankSpawnWalker({ letter: L2, x: spot.x, z: spot.z, dir: -1, stand: C.P.stand * rnd(0.8, 1.2), kind: Math.random() < 0.7 ? "porter" : null });
      return "walker";
    },
    crankSpot: function () {
      var C = this.ck, k = C.k, T = C.train, others = [], best = null, i;
      this.crankComputeTags();
      C.tags.forEach(function (tg) { if (tg.a > 0.05) others.push({ x: tg.x, y: tg.y }); });
      /* where the train's plates will be while it stands at the platform */
      if (T && !T.express) for (i = 0; i < 2; i++) others.push(pj(C, T.X + 1.47, 1.5, T.zStop + LOCO + CARG + i * (CARL + CARG) + 6.6));
      C.subs.forEach(function (w) { if (w.letter && w.st === "stand") others.push(pj(C, w.x + 0.34, 2.32, w.z)); });
      [13, 16, 19, 22, 25, 28, 31].forEach(function (z) {
        LANES.forEach(function (x) {
          var p = pj(C, x + 0.34, 2.32, z), d = 1e9;
          if (p.x < C.x0p + 70 * k || p.x > C.x1p - 70 * k) return;
          others.forEach(function (o) { d = Math.min(d, Math.abs(o.x - p.x) + Math.abs(o.y - p.y) * 1.5); });
          var score = Math.min(d, 260 * k) + z * 1.2 * k + Math.random() * 20 * k;
          if (!best || score > best.score) best = { x: x, z: z, score: score };
        });
      });
      return best || { x: LANES[4], z: 24 };
    },

    /* ── the trains ── */
    crankSpawnTrain: function (express, zStart) {
      var C = this.ck, P = C.P, live = shuffle(this.crankLive().slice());
      var T = { X: XT, express: !!express, cars: express ? 2 : 3, dist: 0, phase: "approach", t: 0, letters: { loco: null, cars: [null, null, null] }, puffT: 0, chuffT: 0, whistled: false };
      if (!express) {
        T.z0 = zStart || 150; T.zStop = -7.2; T.zf = T.z0;
        T.Ta = (11 / P.trainK) * (T.z0 - T.zStop) / 157; var D = T.z0 - T.zStop;
        T.v0 = 2 * D / T.Ta; T.a = T.v0 / T.Ta; T.ad = 1.25 * P.trainK; T.v = T.v0;
        /* two letters at most ride a train: the engine's plate and one carriage's */
        if (live[0] && Math.random() < 0.8) T.letters.loco = live[0];
        if (live[1]) T.letters.cars[Math.random() < 0.6 ? 0 : 1] = live[1];
      } else {
        T.z0 = 240; T.zf = T.z0; T.v = 24 * P.expK;
        if (live.length && Math.random() < 0.75) T.letters.loco = live[Math.floor(Math.random() * live.length)];
      }
      C.train = T;
      C.cyc = { ph: express ? "express" : "approach", t: 0 };
      return T;
    },
    crankCycle: function (s, ms) {
      var C = this.ck, P = C.P, T = C.train, cy = C.cyc, self = this, old;
      cy.t += s;
      if (T) {
        old = T.zf;
        if (T.express) {
          T.zf -= T.v * s;
          if (!T.whistled && T.zf < 150) { T.whistled = true; this.crankWhistle(true); }
          if (T.zf + trainLen(T) < -2) { C.train = null; C.cyc = { ph: "gap", t: 0, dur: rnd(1.2, 2.2) }; }
        } else if (T.phase === "approach") {
          T.t += s;
          if (!T.whistled && T.t > 0.6) { T.whistled = true; this.crankWhistle(false); }
          if (T.t >= T.Ta) { T.zf = T.zStop; T.v = 0; T.phase = "dwell"; T.t = 0; this.crankArrived(); }
          else { T.zf = T.z0 - (T.v0 * T.t - 0.5 * T.a * T.t * T.t); T.v = T.v0 - T.a * T.t; }
        } else if (T.phase === "dwell") {
          T.t += s;
          if (T.t >= P.dwell) { T.phase = "depart"; T.t = 0; this.crankWhistle(false); }
        } else if (T.phase === "depart") {
          T.t += s; T.zf = T.zStop - 0.5 * T.ad * T.t * T.t; T.v = T.ad * T.t;
          if (T.zf + trainLen(T) < -2) {
            C.train = null;
            C.cyc = (P.express && Math.random() < P.express) ? { ph: "preexp", t: 0, dur: rnd(1.4, 2.4) } : { ph: "gap", t: 0, dur: rnd(1.5, 2.6) };
          }
        }
        if (C.train) {
          T.dist += Math.abs(old - T.zf);
          this.crankSmoke(T, s);
          /* the chuff of the engine, louder as it comes near */
          if (T.v > 0.5 && T.zf < 90) {
            T.chuffT -= s;
            if (T.chuffT <= 0) { T.chuffT = clamp(1.6 / (T.v * 0.5 + 1), 0.09, 0.6); var vol = clamp(0.035 * (1 - T.zf / 90), 0.004, 0.035); sfx(function (R) { R.hiss(0.1, 520, vol); }); }
          }
          /* the express shakes the platform as it thunders past */
          if (T.express && T.zf < 34 && T.zf + trainLen(T) > -4 && P.jolt) {
            C.joltT -= ms;
            if (C.joltT <= 0) {
              C.joltT = 230;
              if (C.rate > 0.2) C.jolt += rnd(-0.55, 1) * P.jolt;
              try { this.cameras.main.shake(180, 0.0025); } catch (e) {}
              if (!C.told.express) { C.told.express = true; this.toast("The express! It won't stop. The platform shakes and jolts your crank: hold it steady in the white band.", 4200); }
            }
          }
        }
      } else if (!C.noTrain) {
        if (cy.ph === "preexp" && cy.t >= cy.dur) this.crankSpawnTrain(true);
        else if (cy.ph === "gap" && cy.t >= cy.dur) this.crankSpawnTrain(false);
        else if (cy.ph !== "preexp" && cy.ph !== "gap") C.cyc = { ph: "gap", t: 0, dur: 1 };
      }
      void self;
    },
    /* the train has stopped: waiting people board, passengers step down */
    crankArrived: function () {
      var C = this.ck, T = C.train, i;
      sfx(function (R) { R.blip(2300, 1700, 0.7, "sawtooth", 0.006); R.hiss(0.9, 2400, 0.04); });
      C.subs.forEach(function (w) { if (w.st === "wait") { w.st = "board"; w.t = rnd(0, 1200); } });
      if (C.noSpawn) return;
      for (i = 0; i < 3; i++) {
        var z0 = carZ(T, i), n = i === 2 ? 1 : 2;
        for (var j = 0; j < n; j++) this.crankSpawnWalker({ x: EDGE + 0.25, z: z0 + 2.5 + j * 6.2, st: "alight", lane: LANES[Math.floor(Math.random() * 3)] });
      }
      /* steam from the cylinders */
      for (i = 0; i < 5; i++) this.crankPuff(T.X + 1.6, -0.3, T.zf + 1.5 + i * 0.6, 0.4, 0.55, 2.2, 0.6, 0.35, 0xf4f2ec);
    },
    crankWhistle: function (express) {
      sfx(function (R) {
        if (express) { R.blip(620, 600, 0.9, "sawtooth", 0.018); R.blip(740, 720, 0.9, "triangle", 0.03); R.blip(55, 40, 1.6, "sawtooth", 0.04); }
        else { R.blip(784, 780, 0.55, "triangle", 0.03); R.blip(988, 980, 0.55, "triangle", 0.022); R.blip(784, 780, 0.35, "triangle", 0.025, 0.7); }
      });
    },

    /* ── smoke and steam ── */
    crankPuff: function (x, y, z, r, a, life, grow, rise, tint) {
      var C = this.ck;
      if (C.puffs.length > 90) return;
      var spr = C.puffPool.pop() || this.add.image(0, 0, "md-crank-puff").setDepth(7);
      spr.setVisible(true);
      C.puffs.push({ x: x, y: y, z: z, r: r, a0: a, age: 0, life: life, grow: grow, rise: rise, spr: spr, tint: tint || (Math.random() < 0.5 ? 0x8e8c86 : 0x6e6c68) });
    },
    crankSmoke: function (T, s) {
      var C = this.ck, P = C.P, zc = T.zf + 1.5;
      if (zc < 1.5 || zc > 300) return;
      T.puffT -= s;
      if (T.puffT > 0) return;
      var moving = T.v > 0.5, thick = P.smoke ? 1 : 0;
      T.puffT = moving ? clamp(0.55 - T.v / 70, 0.09, 0.5) : 0.75;
      this.crankPuff(T.X + rnd(-0.15, 0.15), 3.35, zc, 0.45, thick ? 0.85 : 0.6, thick ? 4.2 : 2.6, thick ? 1.25 : 0.8, moving ? 1.3 : 1.7);
    },
    crankPuffs: function (s) {
      var C = this.ck, i;
      for (i = C.puffs.length - 1; i >= 0; i--) {
        var q = C.puffs[i];
        q.age += s; q.r += q.grow * s; q.y += q.rise * s; q.x += 0.25 * s;
        if (q.age >= q.life || q.z < ZN + 0.4) { q.spr.setVisible(false); C.puffPool.push(q.spr); C.puffs.splice(i, 1); continue; }
        var p = pj(C, q.x, q.y, q.z), R2 = q.r * C.F / q.z;
        q.sx = p.x; q.sy = p.y; q.sr = R2; q.al = q.a0 * (1 - q.age / q.life) * Math.min(1, q.age * 4);
        q.spr.setPosition(p.x, p.y).setScale(R2 * 2 / 64).setAlpha(q.al).setTint(q.tint);
        q.spr.setDepth(7 - q.z * 0.001);
      }
    },

    /* ── the passengers ── */
    crankSpawnWalker: function (o) {
      var C = this.ck, P = C.P, kind = o.kind || KINDS[Math.floor(Math.random() * KINDS.length)];
      if (o.letter && kind === "child") kind = "man";
      var hats = HATS[kind] || HATS.man, lady = kind === "lady";
      var w = { id: ++C.id, kind: kind, x: o.x, z: o.z, lane: o.lane != null ? o.lane : o.x, dir: o.dir || -1, st: o.st || (o.stand ? "stand" : "walk"), t: o.stand || 0,
        sc: kind === "child" ? 0.64 : rnd(0.96, 1.06), ph: rnd(0, TAU), a: o.a == null ? 0 : o.a, spd: P.walk * rnd(0.85, 1.12), letter: o.letter || null,
        coat: g2(rnd(30, 70)), trou: g2(rnd(24, 60)), dress: g2(Math.random() < 0.5 ? rnd(170, 215) : rnd(50, 90)), hat: hats[Math.floor(Math.random() * hats.length)],
        hatCol: g2(kind === "lady" ? rnd(40, 200) : rnd(18, 50)), parasol: lady && Math.random() < 0.35 && !o.letter, face: true };
      if (kind === "porter") { w.coat = g2(rnd(40, 60)); w.hatCol = g2(28); }
      if (w.hat === "boater") w.hatCol = g2(rnd(190, 220));
      if (o.onlook) { w.onlook = true; w.st = "onIn"; w.kind = "man"; w.hat = "top"; w.hatCol = g2(20); w.sc = 1.04; w.tx = o.tx; w.parasol = false; w.a = 1; }
      C.subs.push(w);
      return w;
    },
    crankWalkers: function (s, ms) {
      var C = this.ck, P = C.P, i;
      for (i = C.subs.length - 1; i >= 0; i--) {
        var w = C.subs[i], moving = false;
        if (C.freeze) { w.a = Math.min(1, w.a + s * 2.5); continue; }
        if (w.st === "wait") { w.a = Math.min(1, w.a + s * 2); w.face = false; }
        else if (w.st === "stand") { w.a = Math.min(1, w.a + s * 2.5); w.t -= ms; w.face = true; if (w.t <= 0) w.st = "walk"; }
        else if (w.st === "walk") {
          w.a = Math.min(1, w.a + s * 2.5); moving = true;
          w.z += w.dir * w.spd * s; w.face = w.dir < 0;
          w.x += clamp(w.lane - w.x, -0.6 * s, 0.6 * s);
          if ((w.dir < 0 && w.z < (w.letter ? 5.2 : 6.6)) || (w.dir > 0 && w.z > 64)) w.st = "out";
        } else if (w.st === "out") {
          moving = true; w.z += w.dir * w.spd * s; w.a -= s * 2.2;
          if (w.a <= 0) { w.gone = true; C.subs.splice(i, 1); continue; }
        } else if (w.st === "board") {
          w.t -= ms; w.face = false;
          if (w.t <= 0) { moving = true; w.x -= 0.9 * s; if (w.x < EDGE + 0.55) { w.a -= s * 3; if (w.a <= 0) { w.gone = true; C.subs.splice(i, 1); continue; } } }
        } else if (w.st === "alight") {
          w.a = Math.min(1, w.a + s * 3); moving = true; w.face = true;
          w.x += 0.9 * s;
          if (w.x >= EDGE + 1.1) { w.st = "walk"; w.dir = -1; }
        } else if (w.st === "onIn") {
          moving = true; w.face = true;
          var d = w.tx - w.x; w.x += clamp(d, -2.2 * s, 2.2 * s);
          if (Math.abs(d) < 0.02) { w.st = "stare"; w.t = P.onlookMs; }
        } else if (w.st === "stare") {
          w.t -= ms; w.face = true;
          if (w.t <= 0) { w.st = "onOut"; w.ox = w.x < 0 ? -9 : 9; }
        } else if (w.st === "onOut") {
          moving = true; w.face = false; w.x += (w.ox < 0 ? -2.2 : 2.2) * s;
          if (Math.abs(w.x) > 8.5) { w.gone = true; C.subs.splice(i, 1); continue; }
        }
        if (moving) w.ph += s * (w.spd || 1.2) * 5.2;
      }
    },
    /* plain passengers coming and going, and the occasional onlooker */
    crankAmbient: function (ms) {
      var C = this.ck, P = C.P;
      if (C.noSpawn) return;
      C.ambT -= ms;
      var plain = C.subs.filter(function (w) { return !w.letter && !w.onlook && w.st !== "wait"; }).length;
      if (C.ambT <= 0 && plain < P.crowd) {
        C.ambT = rnd(1100, 2600);
        var toward = Math.random() < 0.62, lane = LANES[Math.floor(Math.random() * LANES.length)];
        if (toward) this.crankSpawnWalker({ x: lane, z: rnd(42, 56), dir: -1 });
        else this.crankSpawnWalker({ x: lane + rnd(-0.3, 0.3), z: rnd(7, 9), dir: 1 });
      }
      if (P.onlook) {
        C.onT -= ms;
        var on = C.subs.filter(function (w) { return w.onlook; }).length;
        if (C.onT <= 0 && on < P.onlook) {
          C.onT = rnd(10000, 16000);
          this.crankOnlooker();
        }
      }
    },
    /* a curious passenger walks up to the camera and stares into the lens, right where it is aimed */
    crankOnlooker: function () {
      var C = this.ck, z = 2.9, tx = clamp((C.fx - C.VX) * z / C.F, -3.4, 3.4);
      var w = this.crankSpawnWalker({ onlook: true, x: tx < 0 ? -8 : 8, z: z, tx: tx });
      if (!C.told.onlook) { C.told.onlook = true; this.toast("A curious passenger is staring into your lens! Film around him, or wait for him to walk off.", 4200); }
      return w;
    },

    /* ── the letters' plates, where they are on screen this frame ── */
    crankComputeTags: function () {
      var C = this.ck, P = C.P, k = C.k, T = C.train, out = [], self = this, i;
      function add(L2, x, y, z, kind, sub, alpha) {
        if (!L2 || z < ZN + 0.5) return;
        var p = pj(C, x, y, z), s = C.F / z, size;
        if (kind === "disc") size = clamp(0.95 * s, 28 * k, 96 * k);
        else size = clamp(0.62 * s, 27 * k, 46 * k);
        var a = clamp((112 - z) / 34, 0, 1) * (alpha == null ? 1 : alpha);
        var vis = a > 0.05 && p.x > C.x0p - size && p.x < C.x1p + size && p.y > -size && p.y < self.H + size;
        out.push({ L: L2, x: p.x, y: p.y, z: z, kind: kind, size: size, a: a, vis: vis, sub: sub, state: self.crankLetterState(L2), hid: false });
      }
      if (T && T.letters) {
        add(T.letters.loco, T.X, 1.15, T.zf + 0.6, "disc", T);
        for (i = 0; i < T.cars; i++) add(T.letters.cars[i], T.X + 1.47, 1.5, carZ(T, i) + 6.6, "plate", T);
      }
      C.subs.forEach(function (w) { if (w.letter) add(w.letter, w.x + 0.34 * w.sc, 2.32 * w.sc, w.z, "board", w, w.a); });
      /* what hides a plate: thick smoke (level 41 on), an onlooker standing in front of it */
      var looks = C.subs.filter(function (w) { return w.onlook; }).map(function (w) {
        var s = C.F / w.z, p = pj(C, w.x, 0, w.z);
        return { x0: p.x - 0.36 * s, x1: p.x + 0.36 * s, y0: p.y - 1.95 * s * w.sc, z: w.z };
      });
      out.forEach(function (tg) {
        if (P.smoke) C.puffs.forEach(function (q) { if (q.al > 0.32 && q.sr && q.z < tg.z + 4 && Math.abs(tg.x - q.sx) < q.sr * 0.62 && Math.abs(tg.y - q.sy) < q.sr * 0.62) tg.hid = "smoke"; });
        looks.forEach(function (b) { if (b.z < tg.z && tg.x > b.x0 && tg.x < b.x1 && tg.y > b.y0) tg.hid = "onlooker"; });
      });
      out.sort(function (a, b) { return b.z - a.z; });
      C.tags = out;
      return out;
    },
    crankFrameRect: function () {
      var C = this.ck;
      return { x0: C.cfx - C.fw / 2, y0: C.cfy - C.fh / 2, x1: C.cfx + C.fw / 2, y1: C.cfy + C.fh / 2 };
    },
    /* the live letters inside the viewfinder (a hidden one doesn't count) */
    crankInFrame: function () {
      var C = this.ck, fr = this.crankFrameRect(), out = [], hid = null;
      C.tags.forEach(function (tg) {
        if (!tg.vis || tg.a < 0.5 || tg.state !== "live") return;
        if (tg.x < fr.x0 || tg.x > fr.x1 || tg.y < fr.y0 || tg.y > fr.y1) return;
        if (tg.hid) { hid = tg.hid; return; }
        if (out.indexOf(tg.L) === -1) out.push(tg.L);
      });
      C.hidIn = hid; C.cand = out;
      return out;
    },
    crankTagOf: function (L2) {
      var C = this.ck, best = null;
      C.tags.forEach(function (tg) { if (tg.L === L2 && tg.vis && (!best || tg.z < best.z)) best = tg; });
      return best;
    },

    /* ── the crank ── */
    crankTap: function () {
      var C = this.ck;
      if (C.lockMs > 0) { if (!C.told.lock) { C.told.lock = true; this.toast(C.lockWhy === "snap" ? "Wait: your assistant is threading the film again." : "Wait: your assistant is loading a fresh magazine.", 2400); } return false; }
      var t = C.t;
      if (C.lastTap != null) {
        var iv = Math.max(0.07, t - C.lastTap), inst = Math.min(8, 1 / iv);
        C.rate = C.rate > 0.05 ? C.rate * 0.45 + inst * 0.55 : inst * 0.6;
      }
      C.lastTap = t; C.turns += 1;
      sfx(function (R) { R.blip(210, 140, 0.05, "square", 0.012); R.hiss(0.035, 2600, 0.012); });
      return true;
    },
    crankQueueTap: function () {
      var C = this.ck;
      if (!C || this.readOpen || this.ended || this._finishing || this.helpOpen || Date.now() < (this.tutLockUntil || 0)) return;
      C.tapQ = Math.min(2, (C.tapQ || 0) + 1);
    },
    /* the tests (and only the tests) can turn the crank at a set speed in game time */
    crankDrive: function (fps) { var C = this.ck; C.drive = fps || 0; C.driveT = 0; },
    crankFps: function () { var C = this.ck; return C.rate * FPT; },

    tick_crank: function (s, inp, ms) {
      var C = this.ck, P = C.P, k = C.k;
      C.t += s;
      if (C.lockMs > 0) C.lockMs -= ms;
      if (C.title > 0) C.title -= s;
      if (C.flash > 0) C.flash -= s;
      if (!C.told.start) { C.told.start = true; this.toast("Move the viewfinder onto the right letter, then tap Space (or CRANK) about twice a second to keep the needle in the white band.", 6000); }

      /* 1. the station: trains, people, smoke */
      this.crankCycle(s, ms);
      this.crankWalkers(s, ms);
      this.crankPuffs(s);
      C.ensureT -= ms;
      if (C.ensureT <= 0) { C.ensureT = 400; this.crankEnsure(false); }
      this.crankAmbient(ms);

      /* 2. the viewfinder: the keys or the pad, else the pointer when it moves or is held down */
      var p = this.ptr, moved = C.lpx != null && Math.abs(p.x - C.lpx) + Math.abs(p.y - C.lpy) > 2;
      if (inp.ax || inp.ay) {
        C.keyHold += ms;
        var spd = (340 + Math.min(1, C.keyHold / 600) * 300) * k;
        C.fx += inp.ax * spd * s; C.fy += inp.ay * spd * s; C.aimMode = "keys"; C.idle = 0;
      } else {
        C.keyHold = 0;
        if (moved || inp.ptr) { C.tx = p.x; C.ty = p.y; C.aimMode = "ptr"; C.idle = 0; }
        else C.idle += ms;
        if (C.aimMode === "ptr" && C.tx != null && C.idle < 400) { var e = Math.min(1, s * 16); C.fx += (C.tx - C.fx) * e; C.fy += (C.ty - C.fy) * e; }
      }
      C.lpx = p.x; C.lpy = p.y;
      this.crankClampFrame();
      /* the wind sways the tripod (level 71 on) */
      var swx = P.sway ? P.sway * k * (Math.sin(C.t * 0.83) + 0.55 * Math.sin(C.t * 2.1 + 1)) : 0, swy = P.sway ? P.sway * 0.45 * k * Math.sin(C.t * 1.27 + 2) : 0;
      C.cfx = clamp(C.fx + swx, C.x0p + C.fw / 2, C.x1p - C.fw / 2); C.cfy = C.fy + swy;

      /* 3. the crank: a tap is one turn; the speed is how quickly the turns come */
      if (C.drive > 0) { C.driveT += s; var div = FPT / C.drive; if (C.lastTap == null && C.driveT < div) { C.driveT = div; } if (C.driveT >= div) { C.driveT -= div; this.crankTap(); } }
      if (C.tapQ > 0) { C.tapQ -= 1; this.crankTap(); }   /* one turn a frame at most */
      if (C.lastTap != null) {
        var el = C.t - C.lastTap;
        if (el > 0 && C.rate > 1 / el) C.rate = 1 / el;
        if (el > 2.2) { C.rate = 0; C.lastTap = null; }
      }
      if (C.lockMs > 0) { C.rate = 0; C.lastTap = null; }
      C.jolt *= Math.exp(-s / 0.35);
      var fps = C.rate * FPT, eff = Math.max(0, fps + (fps > 1 ? C.jolt : 0)), cranking = fps > 2;
      C.needle += (eff - C.needle) * Math.min(1, s * 9);
      C.ang += C.rate * TAU * s;
      var before = Math.floor(C.frames);
      C.frames += fps * s;
      if (Math.floor(C.frames) !== before && Math.floor(C.frames) % 2 === 0) sfx(function (R) { R.hiss(0.018, 4200, 0.006); });
      C.zone = !cranking ? "idle" : eff > P.redAt ? "snap" : eff > P.bandHi ? "fast" : eff < P.bandLo ? "slow" : "good";
      if (P.beat) { var bt = C.beatT; C.beatT = (C.beatT + s * 2) % 1; if (C.beatT < bt) sfx(function (R) { R.blip(1500, 1500, 0.03, "sine", 0.008); }); }

      /* 4. the letters in the viewfinder, and the take */
      this.crankComputeTags();
      var cand = this.crankInFrame();
      /* levels 1-30: an idle viewfinder drifts onto a lone letter, to help follow a moving one */
      if (P.stick > 0 && C.idle > 350 && !(inp.ax || inp.ay)) {
        var fr0 = this.crankFrameRect(), lone = null, nIn = 0;
        C.tags.forEach(function (tg) { if (tg.vis && tg.state === "live" && !tg.hid && tg.x > fr0.x0 && tg.x < fr0.x1 && tg.y > fr0.y0 && tg.y < fr0.y1) { nIn++; lone = tg; } });
        if (nIn === 1 && lone) { var ee = Math.min(1, s * 3.2 * P.stick); C.fx += (lone.x - C.fx) * ee; C.fy += (lone.y - C.fy) * ee; this.crankClampFrame(); }
      }
      var filming = null, live = !this._between && !this._finishing;
      if (live && cranking && C.zone === "good" && cand.length === 1 && C.lockMs <= 0) {
        filming = cand[0];
        C.prog[filming] = (C.prog[filming] || 0) + s * (eff / TARGET) / P.shotSec;
      }
      Object.keys(C.prog).forEach(function (L2) { if (L2 !== filming) C.prog[L2] = Math.max(0, C.prog[L2] - P.drain * s); });
      C.filming = filming;
      if (filming && C.prog[filming] >= 1) { C.prog[filming] = 0; this.crankFilmed(filming); if (this._finishing) return; }
      this.crankTips(cranking, cand);

      /* 5. the hazards: the film snaps, the magazine runs dry */
      if (live) {
        if (cranking && eff > P.redAt) {
          C.snapT += ms;
          C.rattle = (C.rattle || 0) - ms;
          if (C.rattle <= 0) { C.rattle = 140; sfx(function (R) { R.blip(320, 200, 0.05, "square", 0.02); }); }
        } else C.snapT = Math.max(0, C.snapT - ms * 2);
        if (C.snapT >= P.snapMs) { this.crankSnap(); if (this._finishing) return; }
        if (fps > 0) C.film = Math.max(0, C.film - fps * s / TARGET);
        if (C.film <= 0) { this.crankEmpty(); if (this._finishing) return; }
      }

      /* 6. draw */
      this.crankDraw();
    },
    crankTips: function (cranking, cand) {
      var C = this.ck, P = C.P, T = C.told;
      if (!cranking && cand.length === 1 && !T.inFrame) { T.inFrame = true; this.toast("Letter " + cand[0] + " is in the viewfinder. If it's the right answer, crank steadily to film it!", 3600); }
      else if (cranking && C.zone === "slow" && C.needle > 3 && !T.slow && C.t > 3) { T.slow = true; this.toast("Too slow: the picture flickers and nothing is filmed. Crank a little faster, about two taps a second.", 3600); }
      else if (cranking && C.zone === "fast" && !T.fast) { T.fast = true; this.toast("Too fast: the picture blurs. Ease off to two taps a second.", 3200); }
      else if (cranking && C.zone === "snap" && !T.snap) { T.snap = true; this.toast("Much too fast! Slow down or the film will snap!", 3000); }
      else if (cand.length > 1 && cranking && !T.two) { T.two = true; this.toast("Two letters are in the viewfinder. Frame just one to film it.", 3400); }
      else if (C.hidIn === "smoke" && !T.smoke) { T.smoke = true; this.toast("Smoke is hiding that letter. Wait for the cloud to clear, then film it.", 3400); }
      else if (C.film < P.film * 0.25 && !T.low) { T.low = true; this.toast("Your film is running low! Crank only when your letter is in the shot.", 3600); }
    },
    /* a full take of letter L */
    crankFilmed: function (L2) {
      var C = this.ck, tg = this.crankTagOf(L2), k = C.k;
      var x = tg ? tg.x : C.cfx, y = tg ? tg.y : C.cfy;
      C.filmed += 1; C.flash = 0.35;
      sfx(function (R) { R.hiss(0.06, 1800, 0.07); R.blip(170, 90, 0.08, "triangle", 0.05); });
      var res = this.answerPick(L2, x, y - 20 * k);
      this.crankInk();
      if (res === "wrong") {
        if (C.dead.indexOf(L2) === -1) C.dead.push(L2);
        this.toast("That take was letter " + L2 + ", the wrong answer. It costs a life, and its plate is crossed out.", 3600);
      } else if (res === "partial") {
        this.toast("A good take of " + L2 + "! This question needs one more letter: film the other right one.", 3600);
      }
      return res;
    },
    /* the big tags in the film's own black and white */
    crankInk: function () { try { this.bigTag.setColor("#f4f2ea").setStroke("#0c0c0c", 8); } catch (e) {} },
    crankSnap: function () {
      var C = this.ck;
      C.snapT = 0; C.rate = 0; C.lastTap = null; C.lockMs = 1300; C.lockWhy = "snap"; C.snaps += 1; C.flash = 0.5; C.needle = 0;
      sfx(function (R) { R.blip(900, 110, 0.3, "sawtooth", 0.05); R.hiss(0.3, 1500, 0.06); });
      this.loseLife("hit", "THE FILM SNAPPED"); this.crankInk();
      if (!this._finishing) this.toast("Snap! Cranking far too fast broke the film. That costs a life. Your assistant threads it again: keep the needle in the white band.", 4200);
    },
    crankEmpty: function () {
      var C = this.ck;
      C.film = C.P.film; C.rate = 0; C.lastTap = null; C.lockMs = 1300; C.lockWhy = "film"; C.empties += 1; C.needle = 0;
      sfx(function (R) { R.blip(400, 200, 0.25, "triangle", 0.04); R.hiss(0.2, 900, 0.04); });
      this.loseLife("hit", "OUT OF FILM"); this.crankInk();
      if (!this._finishing) this.toast("The magazine ran out of film! That costs a life. Your assistant loads a fresh one: crank only when your letter is in the shot.", 4200);
    },

    /* ── drawing every frame ── */
    crankDraw: function () {
      var C = this.ck, P = C.P, k = C.k, W = this.W, H = this.H, self = this;
      /* the scene */
      C.dynG.clear();
      this.crankDrawWorld(C.dynG);
      var blur = C.zone === "fast" || C.zone === "snap";
      if (blur) {
        C.ghostG.clear(); this.crankDrawWorld(C.ghostG);
        var amt = C.zone === "snap" ? 1.6 : 1;
        C.ghostG.setVisible(true).setAlpha(0.42).setPosition((7 + 5 * Math.sin(C.t * 37)) * k * amt, 2 * k * Math.sin(C.t * 23));
      } else if (C.ghostG.visible) { C.ghostG.clear(); C.ghostG.setVisible(false); }
      this.crankDrawTags();
      this.crankDrawFrame(blur);
      this.crankDrawHud();
      /* the film itself: grain, flicker, scratches, the sprocket edges moving as the film runs */
      C.grain.setTexture("md-crank-grain-" + (Math.floor(C.t * 24) % 3));
      C.grain.tilePositionX = Math.floor(Math.random() * 256); C.grain.tilePositionY = Math.floor(Math.random() * 256);
      var fl = 0.025 + Math.random() * 0.035;
      if (C.zone === "slow") { var depth = clamp((P.bandLo - C.needle) / P.bandLo, 0.45, 1); fl += (Math.floor(C.t * Math.max(4, C.needle * 0.75)) % 2 ? 0.55 : 0.05) * depth; }
      C.flick.setFillStyle(C.flash > 0 ? 0xffffff : 0x000000, 1);
      C.flick.setAlpha(C.flash > 0 ? clamp(C.flash * 1.6, 0, 0.75) : fl);
      var sg = C.scratchG; sg.clear();
      if (Math.random() < 0.12) { var sx = rnd(C.x0p, C.x1p), y0 = rnd(0, H * 0.5); sg.lineStyle(1, 0xffffff, rnd(0.15, 0.4)); sg.lineBetween(sx, y0, sx + rnd(-3, 3), y0 + rnd(H * 0.3, H)); }
      if (Math.random() < 0.3) { sg.fillStyle(Math.random() < 0.5 ? 0x000000 : 0xffffff, 0.5); sg.fillCircle(rnd(C.x0p, C.x1p), rnd(0, H), rnd(0.8, 2.2) * k); }
      var roll = C.frames * C.pitch;
      C.sprL.tilePositionY = -roll; C.sprR.tilePositionY = -roll;
      /* the opening title card */
      C.titleG.clear();
      var ta = C.title > 0 ? clamp(C.title / 0.6, 0, 1) : 0;
      C.titleTx.setVisible(ta > 0).setAlpha(ta); C.titleSub.setVisible(ta > 0).setAlpha(ta);
      if (ta > 0) {
        var tw = Math.min(W * 0.62, 560 * k), th = 150 * k, tx0 = W / 2 - tw / 2, ty0 = H * 0.3 - th / 2;
        C.titleG.fillStyle(0x0a0a0a, 0.88 * ta); C.titleG.fillRect(tx0, ty0, tw, th);
        C.titleG.lineStyle(2 * k, 0xe8e6de, ta); C.titleG.strokeRect(tx0 + 8 * k, ty0 + 8 * k, tw - 16 * k, th - 16 * k);
        C.titleG.lineStyle(1, 0xe8e6de, ta * 0.7); C.titleG.strokeRect(tx0 + 13 * k, ty0 + 13 * k, tw - 26 * k, th - 26 * k);
        C.titleTx.setPosition(W / 2, ty0 + th * 0.42); C.titleSub.setPosition(W / 2, ty0 + th * 0.8);
      }
      void self;
    },
    crankDrawWorld: function (g) {
      var C = this.ck, T = C.train, i;
      if (T) {
        for (i = T.cars - 1; i >= 0; i--) drawCar(g, C, T, i, 1);
        drawLoco(g, C, T, 1);
      }
      var list = C.subs.slice().sort(function (a, b) { return b.z - a.z; });
      for (i = 0; i < list.length; i++) {
        var w = list[i];
        if (w.z < ZN + 0.3 || w.a <= 0) continue;
        var p = pj(C, w.x, 0, w.z);
        if (p.x < -300 || p.x > this.W + 300) continue;
        drawPerson(g, p.x, p.y, C.F / w.z, w, clamp(w.a, 0, 1), C.t);
      }
    },
    crankDrawTags: function () {
      var C = this.ck, k = C.k, g = C.tagG, self = this, n = 0, fr = this.crankFrameRect();
      g.clear();
      C.tags.forEach(function (tg) {
        if (!tg.vis) return;
        var a = tg.a * (tg.hid ? 0.3 : 1), sz = tg.size, x = tg.x, y = tg.y, st = tg.state;
        var inF = st === "live" && !tg.hid && x > fr.x0 && x < fr.x1 && y > fr.y0 && y < fr.y1;
        var fill = st === "dead" ? 0x6a6a66 : st === "found" ? 0xdedcd4 : 0xf6f4ec;
        if (tg.kind === "disc") {
          g.fillStyle(0x000000, 0.4 * a); g.fillCircle(x + 2 * k, y + 2 * k, sz / 2);
          g.fillStyle(fill, a); g.fillCircle(x, y, sz / 2);
          g.lineStyle(Math.max(2, sz * 0.07), 0x101010, a); g.strokeCircle(x, y, sz / 2 - sz * 0.035);
          g.lineStyle(1, 0x101010, a); g.strokeCircle(x, y, sz * 0.38);
        } else {
          var w2 = sz * 0.88, h2 = sz;
          g.fillStyle(0x000000, 0.4 * a); g.fillRect(x - w2 / 2 + 2 * k, y - h2 / 2 + 2 * k, w2, h2);
          g.fillStyle(fill, a); g.fillRect(x - w2 / 2, y - h2 / 2, w2, h2);
          g.lineStyle(Math.max(2, sz * 0.07), 0x101010, a); g.strokeRect(x - w2 / 2, y - h2 / 2, w2, h2);
          g.lineStyle(1, 0x101010, a * 0.8); g.strokeRect(x - w2 / 2 + sz * 0.11, y - h2 / 2 + sz * 0.11, w2 - sz * 0.22, h2 - sz * 0.22);
        }
        if (inF) {
          var pulse = C.filming === tg.L ? 1 + 0.08 * Math.sin(C.t * 14) : 1;
          g.lineStyle(3 * k, 0xffffff, a); g.strokeCircle(x, y, sz * 0.72 * pulse);
          g.lineStyle(1.5 * k, 0x000000, a); g.strokeCircle(x, y, sz * 0.72 * pulse + 2.5 * k);
        }
        /* the take so far, as an arc round the plate */
        var pr = C.prog[tg.L] || 0;
        if (pr > 0.01 && st === "live") {
          g.lineStyle(4 * k, 0x000000, a); g.beginPath(); g.arc(x, y, sz * 0.62, -Math.PI / 2, -Math.PI / 2 + TAU * Math.min(1, pr)); g.strokePath();
          g.lineStyle(2.4 * k, 0xffffff, a); g.beginPath(); g.arc(x, y, sz * 0.62, -Math.PI / 2, -Math.PI / 2 + TAU * Math.min(1, pr)); g.strokePath();
        }
        var t = C.tagTx[n];
        if (!t) { t = C.tagTx[n] = self.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 64, color: "#111111", fontStyle: "bold" }).setOrigin(0.5).setDepth(13); }
        var txt = st === "dead" ? "✕" : st === "found" ? "✓" : tg.L;
        if (t.text !== txt) t.setText(txt);
        var col = st === "dead" ? "#2a2a28" : "#111111";
        if (t.style.color !== col) t.setColor(col);
        t.setVisible(true).setAlpha(a).setPosition(x, y + sz * 0.02).setScale(sz * (tg.kind === "disc" ? 0.6 : 0.66) / 64);
        n++;
      });
      for (var i = n; i < C.tagTx.length; i++) C.tagTx[i].setVisible(false);
    },
    crankDrawFrame: function (blur) {
      var C = this.ck, k = C.k, g = C.frameG, m = C.maskG, fr = this.crankFrameRect(), W = this.W, H = this.H;
      var x0 = fr.x0, y0 = fr.y0, x1 = fr.x1, y1 = fr.y1, fw = C.fw, fh = C.fh;
      m.clear(); g.clear();
      /* the world outside the viewfinder dims a little */
      m.fillStyle(0x000000, 0.26);
      m.fillRect(0, 0, W, y0); m.fillRect(0, y1, W, H - y1); m.fillRect(0, y0, x0, fh); m.fillRect(x1, y0, W - x1, fh);
      if (blur) { m.fillStyle(0xffffff, 0.12); m.fillRect(x0, y0, fw, fh); }
      var filming = !!C.filming, two = C.cand.length > 1;
      var col = filming ? 0xffffff : 0xe8e6de, L2 = 22 * k, th = 3.4 * k;
      g.lineStyle(1, 0xffffff, 0.35); g.strokeRect(x0, y0, fw, fh);
      [[x0, y0, 1, 1], [x1, y0, -1, 1], [x0, y1, 1, -1], [x1, y1, -1, -1]].forEach(function (q) {
        g.lineStyle(th + 3 * k, 0x000000, 0.8); g.lineBetween(q[0], q[1], q[0] + q[2] * L2, q[1]); g.lineBetween(q[0], q[1], q[0], q[1] + q[3] * L2);
        g.lineStyle(th, col, 1); g.lineBetween(q[0], q[1], q[0] + q[2] * L2, q[1]); g.lineBetween(q[0], q[1], q[0], q[1] + q[3] * L2);
      });
      var cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
      g.lineStyle(1.5 * k, 0xffffff, 0.55); g.lineBetween(cx - 8 * k, cy, cx + 8 * k, cy); g.lineBetween(cx, cy - 8 * k, cx, cy + 8 * k);
      if (filming && Math.floor(C.t * 4) % 2 === 0) { g.fillStyle(0xffffff, 1); g.fillCircle(x0 + 14 * k, y0 + 14 * k, 5 * k); g.lineStyle(1.5, 0x000000, 1); g.strokeCircle(x0 + 14 * k, y0 + 14 * k, 5 * k); }
      /* the take bar along the bottom of the viewfinder */
      var showL = C.filming || (C.cand.length === 1 ? C.cand[0] : null), pr = showL ? (C.prog[showL] || 0) : 0;
      var bx0 = x0 + 12 * k, bx1 = x1 - 12 * k, by = y1 - 13 * k, bh = 8 * k;
      if (showL) {
        g.fillStyle(0x000000, 0.65); g.fillRect(bx0 - 2, by - bh / 2 - 2, bx1 - bx0 + 4, bh + 4);
        g.fillStyle(0xffffff, 1); g.fillRect(bx0, by - bh / 2, (bx1 - bx0) * clamp(pr, 0, 1), bh);
        g.lineStyle(1, 0xffffff, 0.8); g.strokeRect(bx0, by - bh / 2, bx1 - bx0, bh);
      }
      /* what the viewfinder says */
      var msg;
      if (this._between) msg = "CUT! PRINT IT.";
      else if (C.lockMs > 0) msg = C.lockWhy === "snap" ? "THREADING THE FILM…" : "LOADING NEW FILM…";
      else if (C.zone === "snap") msg = "MUCH TOO FAST!";
      else if (two) msg = "TWO LETTERS IN THE SHOT";
      else if (C.zone === "fast") msg = "TOO FAST · BLUR";
      else if (C.zone === "slow") msg = "TOO SLOW · FLICKER";
      else if (filming) msg = "FILMING " + C.filming;
      else if (C.hidIn === "smoke" && !C.cand.length) msg = "SMOKE IN THE SHOT";
      else if (C.hidIn === "onlooker" && !C.cand.length) msg = "SOMEONE'S IN THE WAY";
      else if (C.cand.length === 1) msg = C.cand[0] + " IN THE SHOT · CRANK!";
      else if (C.zone === "good") msg = "NO LETTER IN THE SHOT";
      else msg = "FRAME A LETTER";
      if (msg !== C.lastStatus) { C.lastStatus = msg; C.txStatus.setText(msg); }
      var above = y0 - 6 * k > 30 * k;
      var half = C.txStatus.displayWidth / 2 + 4;
      C.txStatus.setOrigin(0.5, above ? 1 : 0).setPosition(clamp(cx, C.x0p + half, C.x1p - half), above ? y0 - 6 * k : y1 + 6 * k);
    },
    crankDrawHud: function () {
      var C = this.ck, P = C.P, k = C.k, g = C.hudG, cg = C.crankG, i;
      g.clear(); cg.clear();
      /* the speed dial: frames a second, 0 to 32 */
      var dx = C.dialX, dy = C.dialY, R = C.dialR;
      function ang(v) { return Math.PI + clamp(v, 0, DIAL_MAX) / DIAL_MAX * Math.PI; }
      function arc(v0, v1, col, al, wd) { g.lineStyle(wd, col, al); g.beginPath(); g.arc(dx, dy, R * 0.8, ang(v0), ang(v1)); g.strokePath(); }
      g.fillStyle(0x161616, 0.92); g.beginPath(); g.arc(dx, dy, R + 8 * k, Math.PI, 0); g.closePath(); g.fillPath();
      g.fillRect(dx - R - 8 * k, dy, (R + 8 * k) * 2, 14 * k);
      g.lineStyle(2 * k, 0xd8d6ce, 1); g.beginPath(); g.arc(dx, dy, R + 8 * k, Math.PI, 0); g.strokePath();
      var wd = 13 * k;
      arc(0, P.bandLo, 0x5a5a56, 1, wd);
      arc(P.bandLo, P.bandHi, 0xfafaf4, 1, wd);
      arc(P.bandHi, P.redAt, 0x8e8c86, 1, wd);
      arc(P.redAt, DIAL_MAX, 0x000000, 1, wd);
      for (i = 0; i < 6; i++) {   /* hatching on the SNAP zone */
        var v = P.redAt + (DIAL_MAX - P.redAt) * (i + 0.5) / 6, a = ang(v);
        g.lineStyle(1.5 * k, 0xffffff, 0.8); g.lineBetween(dx + Math.cos(a) * (R * 0.8 - wd / 2), dy + Math.sin(a) * (R * 0.8 - wd / 2), dx + Math.cos(a + 0.05) * (R * 0.8 + wd / 2), dy + Math.sin(a + 0.05) * (R * 0.8 + wd / 2));
      }
      for (i = 0; i <= DIAL_MAX; i += 4) { var at = ang(i); g.lineStyle(1.5 * k, 0xd8d6ce, 0.9); g.lineBetween(dx + Math.cos(at) * R * 0.94, dy + Math.sin(at) * R * 0.94, dx + Math.cos(at) * R * 1.02, dy + Math.sin(at) * R * 1.02); }
      /* the needle (the express's jolts show on it) */
      var na = ang(C.needle), nl = R * 0.92, warn = C.zone === "snap" && Math.floor(C.t * 8) % 2 === 0;
      g.lineStyle(5 * k, 0x000000, 1); g.lineBetween(dx, dy, dx + Math.cos(na) * nl, dy + Math.sin(na) * nl);
      g.lineStyle(2.6 * k, warn ? 0x000000 : 0xffffff, 1); g.lineBetween(dx, dy, dx + Math.cos(na) * nl, dy + Math.sin(na) * nl);
      if (warn) { g.lineStyle(2 * k, 0xffffff, 1); g.strokeCircle(dx, dy, R * 0.25); }
      g.fillStyle(0xd8d6ce, 1); g.fillCircle(dx, dy, 6 * k); g.fillStyle(0x111111, 1); g.fillCircle(dx, dy, 2.5 * k);
      var lab = [[(P.bandLo) * 0.5, R * 0.47], [(P.bandLo + P.bandHi) / 2, R * 0.8], [(P.bandHi + P.redAt) / 2, R * 0.47], [(P.redAt + DIAL_MAX) / 2, R * 1.25]];
      C.dialTx.forEach(function (t, j) { var aa = ang(lab[j][0]), rr = lab[j][1]; t.setPosition(dx + Math.cos(aa) * rr, dy + Math.sin(aa) * rr + (j === 1 ? 0 : 0)); });
      C.dialTx[1].setColor("#111111").setStroke("#fafaf4", 4);
      /* under the dial: the speed in words */
      var fpsTxt = C.lockMs > 0 ? (C.lockWhy === "snap" ? "THREADING…" : "RELOADING…") : C.zone === "idle" ? (P.beat ? "TAP WITH THE LAMP" : "TAP TO CRANK") : Math.round(C.needle) + " FRAMES A SECOND";
      if (C.txFps.text !== fpsTxt) C.txFps.setText(fpsTxt);
      C.txFps.setPosition(dx, dy + 30 * k);
      /* the beat lamp (levels 1-30) on the dial's face: crank with it */
      if (P.beat) {
        var on = C.beatT < 0.22, lx = dx, ly = dy - R * 0.42;
        g.fillStyle(0x000000, 1); g.fillCircle(lx, ly, 8.5 * k);
        g.fillStyle(on ? 0xffffff : 0x4a4a46, 1); g.fillCircle(lx, ly, 6 * k);
        if (on) { g.lineStyle(2 * k, 0xffffff, 0.6); g.strokeCircle(lx, ly, 11 * k); }
      }
      /* the film magazine: a reel that empties and turns as the film runs */
      var rx = C.reelX, ry = C.reelY, rr2 = C.reelR, share = clamp(C.film / P.film, 0, 1), low = share < 0.25;
      g.fillStyle(0x161616, 0.9); g.fillCircle(rx, ry, rr2 + 5 * k);
      g.fillStyle(0x3c3a36, 1); g.fillCircle(rx, ry, rr2 * (0.32 + 0.66 * share));
      g.lineStyle(2 * k, 0xd8d6ce, 1); g.strokeCircle(rx, ry, rr2);
      for (i = 0; i < 3; i++) {
        var sa = C.frames * 0.08 + i * TAU / 3;
        g.fillStyle(0xd8d6ce, 1); g.fillCircle(rx + Math.cos(sa) * rr2 * 0.6, ry + Math.sin(sa) * rr2 * 0.6, rr2 * 0.17);
      }
      g.fillStyle(0xd8d6ce, 1); g.fillCircle(rx, ry, 3 * k);
      var ft = Math.ceil(C.film);
      if (ft !== C.lastFt) { C.lastFt = ft; C.txFilm.setText("FILM " + ft + " FT"); }
      C.txFilm.setPosition(rx, ry + rr2 + 8 * k).setAlpha(low && Math.floor(C.t * 3) % 2 ? 0.45 : 1);
      /* the crank turning, and the operator's arm on its handle */
      var S = C.opS, ox = C.opX, oy = C.opY - OP.h * S, ax = ox + OP.axleX * S, ay = oy + OP.axleY * S, cr = 17 * S;
      var hx = ax + Math.cos(C.ang) * cr, hy = ay + Math.sin(C.ang) * cr;
      cg.lineStyle(1.5 * S, 0xd8d6ce, 0.35); cg.strokeCircle(ax, ay, cr);
      var shx = ox + OP.shX * S, shy = oy + OP.shY * S, ex = (shx + hx) / 2 + 6 * S, ey = Math.max(shy, hy) + 16 * S;
      cg.lineStyle(10 * S, 0x2c2c28, 1); cg.strokePoints([{ x: shx, y: shy }, { x: ex, y: ey }, { x: hx + 4 * S, y: hy + 2 * S }], false, false);
      cg.lineStyle(4 * S, 0x1a1a1a, 1); cg.lineBetween(ax, ay, hx, hy);
      cg.fillStyle(0xcfcac0, 1); cg.fillCircle(hx + 3 * S, hy + 1 * S, 5.5 * S);
      cg.fillStyle(0x8a7c68, 1); cg.fillCircle(hx, hy, 3.5 * S);
      this.blink(C.op);
    },

    /* a right answer: the take is printed; the next question brings new letters */
    clear_crank: function () {
      var C = this.ck;
      C.prog = {}; C.filming = null; C.flash = 0.4;
    }
  });
})();
