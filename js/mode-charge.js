/* SOL Labyrinth v5.22 — the Lit and Film mode "charge": Reins in His Teeth (Westerns: True Grit, 2010).
 *
 * The famous charge. A wide meadow of golden autumn grass under the mountains, late in the day. The one-eyed
 * marshal gallops in from the left, his horse's reins in his teeth and a revolver in each hand; four outlaws
 * ride at him from the right across the meadow, each with a wanted poster over his head that carries a letter.
 * The view is from the side, a little above: the screen's height is the meadow's depth (z: 0 at the far edge
 * by the trees, 1 right in front), so riders further off ride higher up and smaller.
 *
 * Steer up and down the meadow (▲ ▼ / W S / the pad, or point) and rein in or spur on (◀ ▶ / A D) to line
 * up with a rider; Space, FIRE or a click fires both guns along the dotted line on the grass. A rider whose
 * poster shows the right letter tumbles off into the grass (answerPick); a wrong one costs a life and his
 * poster is stamped with a red cross. The gang charges past and wheels round to come again, so steer
 * between their horses (riding into one costs a life). When an outlaw levels his gun a dotted line shows
 * where he aims; ride out of it before the shot (a life if it hits). Later: rocks and gopher holes in the
 * grass (11), shots that lead you (21), six shots in each gun and a reload (31), riders who swap places (41),
 * a rifleman on the far ridge (71), two-shot bursts (81). chargeParams(n) is the one difficulty curve (also
 * on the def as `params`).
 *
 * Registered with SolModes.extend (js/modes.js); the methods below are copied onto ModeScene, so `this` is
 * the mode scene. Every texture is drawn once (canvasTex) under an "md-charge-" key.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, shuffle = L.shuffle, snd = L.snd, canvasTex = L.canvasTex;

  var TAU = Math.PI * 2, DEG = Math.PI / 180;
  var SERIF = "Georgia, 'Palatino Linotype', 'Times New Roman', serif";
  /* the horse texture: HW x HH, hooves on y = 100, its ground point (the sprite's origin) at x = 75 */
  var HW = 150, HH = 104, HGX = 75, HGY = 100;
  /* the rider texture: RW x RH, the hip (the sprite's origin) at (RHX, RHY) when he faces right */
  var RW = 130, RH = 120, RHX = 40, RHY = 96;
  var SADDLE = { x: 66, y: 36 };              /* where the rider sits on the horse (horse texture, facing right) */
  var BIT = { x: 141, y: 38 };                /* the bit, where the reins end */
  var BOB = [2, 0, -3, -1];                   /* the horse's body bob in each gallop frame */
  var GUN_N = { x: 67, y: -38 }, GUN_F = { x: 63, y: -52 };   /* the marshal's two muzzles, from his hip */
  var MOUTH = { x: 31, y: -46 };              /* the reins in his teeth */
  var AIM_MZ = { x: 68, y: -41 };             /* an outlaw's muzzle when he aims, from his hip (facing right) */
  var SHOT_H = 104;                           /* how high over the grass the shots fly (texture px) */
  var POSTER_W = 48, POSTER_H = 58;

  /* ── difficulty: one curve for levels 1-100; every level harder than the one before (approach and warnMs move every level) ── */
  function chargeParams(n) {
    n = clamp(Math.floor(Number(n) || 1), 1, 100);
    return {
      approach: 70 + n * 0.9,                                    /* px/s the gang gains on you: 71 at 1, 160 at 100 */
      ground: 230 + n * 2.6,                                     /* px/s the meadow streams past (rocks and holes come at you this fast) */
      weave: Math.min(0.085, 0.022 + n * 0.00065),               /* how far a rider weaves up and down the meadow (z) */
      weaveSpd: 0.7 + n * 0.012,                                 /* rad a second */
      shooters: n >= 91 ? 4 : n >= 51 ? 3 : n >= 21 ? 2 : 1,    /* outlaws who level their guns in one volley */
      fireMs: 3500 - n * 17,                                     /* from one volley to the next: 3483 at 1, 1800 at 100 */
      warnMs: 1350 - n * 9,                                      /* the aim: the gun levelled and the dotted line, before the shot (1341 ... 450) */
      bulletSpd: 230 + n * 4,                                    /* px/s their bullets fly */
      lead: n >= 21 ? Math.min(1, 0.45 + (n - 21) * 0.007) : 0,  /* how far ahead of you they aim (1: where you will be) */
      rocks: n >= 11 ? 0.14 + (n - 11) * 0.0042 : 0,             /* rocks and gopher holes a second */
      reload: n >= 31 ? 850 + (n - 31) * 9 : 0,                  /* six shots in each gun, then a reload this long (ms) */
      swap: n >= 41 ? 0.05 + (n - 41) * 0.0016 : 0,              /* riders swapping places, a second */
      hitZ: 0.078 - n * 0.00032,                                 /* how close up or down the meadow a shot has to pass */
      glow: n < 61 ? 1 : 0,                                      /* the rider in your sights lights up */
      ridge: n >= 71 ? 0.11 + (n - 71) * 0.004 : 0,              /* rifle shots from the far ridge, a second */
      burst: n >= 81 ? 2 : 1                                     /* shots in each outlaw's volley */
    };
  }

  /* ── art, drawn once ── */
  function path(c, pts) { c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); }
  function shade(hex, f) {
    var v = parseInt(hex.slice(1), 16), r = (v >> 16) & 255, g = (v >> 8) & 255, b = v & 255;
    function ch(x) { return Math.round(clamp(f < 0 ? x * (1 + f) : x + (255 - x) * f, 0, 255)); }
    return "rgb(" + ch(r) + "," + ch(g) + "," + ch(b) + ")";
  }
  var OUTLINE = "rgba(34,18,8,0.9)";
  var COATS = {
    bay:     { body: "#7c4524", dark: "#24140c", light: "#a8693c", sock: null, blaze: true, blanket: ["#8a2a1e", "#e0c080"] },
    grey:    { body: "#aaa59c", dark: "#4a4540", light: "#d8d4ca", sock: null, dapple: true, blanket: ["#2e4a6a", "#d8c8a0"] },
    black:   { body: "#2e2724", dark: "#100c0a", light: "#544840", sock: "#d8d0c0", blanket: ["#6a5a2a", "#c89a3a"] },
    chestnut:{ body: "#9c5428", dark: "#6a3416", light: "#c47e44", sock: "#e8dcc0", mane: "#e0c07a", blaze: true, blanket: ["#3a5a3a", "#d8c890"] },
    buck:    { body: "#c9a262", dark: "#2e2216", light: "#e8cc94", sock: null, blanket: ["#7a2a3a", "#e0c8a0"] }
  };
  /* a leg: from the joint at (x, y), the upper part at angle a1 and the lower at a2 (degrees from straight down, + is forward) */
  function leg(c, x, y, a1, a2, l1, l2, w, col, dark, sock) {
    var kx = x + Math.sin(a1 * DEG) * l1, ky = y + Math.cos(a1 * DEG) * l1;
    var fx = kx + Math.sin(a2 * DEG) * l2, fy = ky + Math.cos(a2 * DEG) * l2;
    c.lineCap = "round"; c.lineJoin = "round";
    c.strokeStyle = OUTLINE; c.lineWidth = w * 1.5 + 2; path(c, [[x, y], [kx, ky]]); c.stroke();
    c.lineWidth = w * 0.8 + 2; path(c, [[kx, ky], [fx, fy]]); c.stroke();
    c.strokeStyle = col; c.lineWidth = w * 1.5; path(c, [[x, y], [kx, ky]]); c.stroke();
    c.lineWidth = w * 0.8; path(c, [[kx, ky], [fx, fy]]); c.stroke();
    if (sock) { c.strokeStyle = sock; c.lineWidth = w * 0.8; var sx = kx + (fx - kx) * 0.55, sy = ky + (fy - ky) * 0.55; path(c, [[sx, sy], [fx, fy]]); c.stroke(); }
    /* the hoof */
    c.fillStyle = dark; c.beginPath(); c.ellipse(fx + Math.sin(a2 * DEG) * 2, fy + Math.cos(a2 * DEG) * 2, w * 0.62, w * 0.5, -a2 * DEG, 0, TAU); c.fill();
  }
  /* the gallop: the four legs' angles in each of the four frames [upper, lower] — near/far front, near/far hind */
  var GAIT = [
    { fn: [52, 78], ff: [36, 58], hn: [-42, -64], hf: [-26, -46], tail: 0 },     /* stretched out */
    { fn: [10, 2], ff: [34, 56], hn: [-12, -38], hf: [8, -22], tail: 3 },        /* a front hoof lands */
    { fn: [22, -58], ff: [12, -44], hn: [36, -4], hf: [26, -14], tail: 6 },      /* gathered under */
    { fn: [42, -14], ff: [26, -34], hn: [14, -6], hf: [-12, -32], tail: 3 }      /* the hind hooves land */
  ];
  function drawHorse(coat, f, left, saddled) {
    var C = COATS[coat], G = GAIT[f], b = BOB[f];
    return function (c, w, h) {
      if (left) { c.translate(w, 0); c.scale(-1, 1); }
      var farCol = shade(C.body, -0.3), mane = C.mane || C.dark;
      /* the far legs, in shadow */
      leg(c, 92, 58 + b, G.ff[0], G.ff[1], 20, 22, 6, farCol, C.dark, null);
      leg(c, 42, 56 + b, G.hf[0], G.hf[1], 20, 23, 7, farCol, C.dark, null);
      /* the tail, streaming back */
      c.lineCap = "round";
      for (var i = 0; i < 6; i++) {
        c.strokeStyle = i % 2 ? mane : shade(mane, -0.25); c.lineWidth = 4 - i * 0.4;
        c.beginPath(); c.moveTo(31, 42 + b);
        c.quadraticCurveTo(16, 34 + b + G.tail + i * 2, 3 + i, 44 + b + G.tail * 1.5 + i * 3.2); c.stroke();
      }
      /* the body: quarters, barrel, chest */
      c.fillStyle = C.body; c.strokeStyle = OUTLINE; c.lineWidth = 1.6;
      c.beginPath();
      c.moveTo(30, 46 + b);
      c.bezierCurveTo(28, 30 + b, 50, 28 + b, 60, 34 + b);           /* croup */
      c.bezierCurveTo(74, 37 + b, 84, 33 + b, 90, 30 + b);           /* back, to the withers */
      c.bezierCurveTo(100, 24 + b, 108, 16 + b, 118, 12 + b);        /* crest of the neck */
      c.lineTo(126, 11 + b);                                          /* poll */
      c.bezierCurveTo(134, 13 + b, 142, 24 + b, 147, 32 + b);        /* forehead, face */
      c.quadraticCurveTo(149, 38 + b, 143, 40 + b);                  /* the muzzle */
      c.lineTo(133, 37 + b);                                          /* jaw */
      c.quadraticCurveTo(124, 36 + b, 119, 33 + b);                  /* throat */
      c.bezierCurveTo(114, 42 + b, 110, 56 + b, 100, 63 + b);        /* the neck's underside, the chest */
      c.bezierCurveTo(86, 70 + b, 64, 70 + b, 52, 66 + b);           /* belly */
      c.bezierCurveTo(42, 66 + b, 32, 60 + b, 30, 46 + b);           /* stifle, buttock */
      c.closePath(); c.fill(); c.stroke();
      /* light along the top and on the shoulder, shadow under the belly */
      var g = c.createLinearGradient(0, 14 + b, 0, 70 + b);
      g.addColorStop(0, "rgba(255,236,190,0.28)"); g.addColorStop(0.45, "rgba(255,236,190,0)"); g.addColorStop(0.75, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(20,10,0,0.3)");
      c.fillStyle = g; c.fill();
      c.strokeStyle = shade(C.body, -0.22); c.lineWidth = 1.2;
      c.beginPath(); c.moveTo(96, 34 + b); c.quadraticCurveTo(92, 48 + b, 98, 60 + b); c.stroke();     /* the shoulder */
      c.beginPath(); c.moveTo(44, 36 + b); c.quadraticCurveTo(54, 46 + b, 50, 62 + b); c.stroke();     /* the quarters */
      if (C.dapple) {
        c.fillStyle = "rgba(255,255,255,0.22)";
        [[40, 44], [50, 52], [62, 46], [74, 54], [86, 48], [58, 58], [46, 40], [70, 42]].forEach(function (q) { c.beginPath(); c.arc(q[0], q[1] + b, 3.4, 0, TAU); c.fill(); });
        c.fillStyle = "rgba(60,56,50,0.18)";
        [[36, 52], [66, 62], [104, 40]].forEach(function (q) { c.beginPath(); c.arc(q[0], q[1] + b, 4, 0, TAU); c.fill(); });
      }
      if (C.blaze) { c.fillStyle = "#efe6d4"; path(c, [[132, 16 + b], [136, 17 + b], [146, 33 + b], [143, 36 + b]]); c.closePath(); c.fill(); }
      /* the muzzle dark, the nostril, the eye, an ear */
      c.fillStyle = shade(C.body, -0.45); c.beginPath(); c.ellipse(143, 36 + b, 4.5, 3.6, 0.5, 0, TAU); c.fill();
      c.fillStyle = "#120a06"; c.beginPath(); c.ellipse(144, 33.5 + b, 1.6, 1.1, 0.6, 0, TAU); c.fill();
      c.beginPath(); c.arc(130, 20 + b, 2.1, 0, TAU); c.fill();
      c.fillStyle = "rgba(255,255,255,0.8)"; c.beginPath(); c.arc(130.7, 19.4 + b, 0.7, 0, TAU); c.fill();
      c.fillStyle = C.body; c.strokeStyle = OUTLINE; c.lineWidth = 1.3;
      path(c, [[121, 12 + b], [121, 2 + b], [127, 10 + b]]); c.closePath(); c.fill(); c.stroke();
      /* the mane, blowing back */
      c.strokeStyle = mane; c.lineCap = "round";
      for (i = 0; i < 9; i++) {
        var t = i / 8, mx = 124 - t * 34, my = 11 + t * 21 + b;
        c.lineWidth = 3.4 - t; c.beginPath(); c.moveTo(mx, my); c.quadraticCurveTo(mx - 6, my - 7, mx - 13, my - 4 + (i % 2) * 3); c.stroke();
      }
      /* the bridle */
      c.strokeStyle = "#2a1408"; c.lineWidth = 1.4;
      c.beginPath(); c.moveTo(124, 13 + b); c.lineTo(138, 36 + b); c.moveTo(127, 26 + b); c.lineTo(146, 30 + b); c.stroke();
      c.fillStyle = "#c8c0a8"; c.beginPath(); c.arc(BIT.x, BIT.y + b, 1.8, 0, TAU); c.fill();
      if (saddled !== false) {
        /* the saddle blanket and the saddle */
        c.fillStyle = C.blanket[0]; c.strokeStyle = OUTLINE; c.lineWidth = 1.2;
        path(c, [[52, 34 + b], [82, 32 + b], [84, 54 + b], [50, 56 + b]]); c.closePath(); c.fill(); c.stroke();
        c.strokeStyle = C.blanket[1]; c.lineWidth = 2;
        c.beginPath(); c.moveTo(52, 50 + b); c.lineTo(84, 48.5 + b); c.moveTo(52, 45 + b); c.lineTo(84, 43.5 + b); c.stroke();
        c.fillStyle = "#5a3418"; c.strokeStyle = OUTLINE; c.lineWidth = 1.2;
        c.beginPath(); c.moveTo(54, 34 + b); c.quadraticCurveTo(58, 26 + b, 64, 34 + b); c.lineTo(76, 33 + b); c.lineTo(80, 25 + b); c.lineTo(84, 26 + b); c.lineTo(82, 36 + b); c.quadraticCurveTo(68, 44 + b, 54, 40 + b); c.closePath(); c.fill(); c.stroke();
        c.strokeStyle = "#3a200c"; c.lineWidth = 2; c.beginPath(); c.moveTo(68, 40 + b); c.lineTo(66, 62 + b); c.stroke();   /* the stirrup leather */
        c.strokeStyle = "#b8a070"; c.lineWidth = 1.6; c.strokeRect(62, 61 + b, 7, 4);
      }
      /* the near legs */
      leg(c, 98, 60 + b, G.fn[0], G.fn[1], 20, 22, 6.4, C.body, C.dark, C.sock);
      leg(c, 48, 58 + b, G.hn[0], G.hn[1], 20, 23, 7.6, C.body, C.dark, null);
    };
  }

  /* the riders, facing right, drawn round the hip at (RHX, RHY); "left" mirrors them */
  var STYLES = {
    marshal: { coat: "#3c3028", coatL: "#5a4a3c", shirt: "#8a7a5a", hat: "#2a221c", band: "#5a4632", skin: "#c48e64", beard: "#7a6a58", pants: "#4a3a2c" },
    ned:     { coat: "#a8916a", coatL: "#c8b088", shirt: "#e0d6c0", hat: "#1e1a18", band: "#8a2a1e", skin: "#c99a70", stache: "#3a2416", scarf: "#a8281e", pants: "#3a3430" },
    vest:    { coat: "#5a3a24", coatL: "#7a5434", shirt: "#e8e0cc", hat: "#6a4a2a", band: "#2a1a10", skin: "#b88058", stache: "#2a1a10", pants: "#2e3440", vest: true },
    blue:    { coat: "#3a5070", coatL: "#56709a", shirt: "#3a5070", hat: "#8a8478", band: "#3a3028", skin: "#c49068", mask: "#8a2a2a", pants: "#5a4a38" },
    green:   { coat: "#4a5236", coatL: "#6a7450", shirt: "#c8b890", hat: "#d8c8a0", band: "#6a4a2a", skin: "#b07850", stache: "#5a3a20", scarf: "#d8a040", pants: "#4a3a2c" }
  };
  function limb(c, pts, w, col) {
    c.lineCap = "round"; c.lineJoin = "round";
    c.strokeStyle = OUTLINE; c.lineWidth = w + 2.2; path(c, pts); c.stroke();
    c.strokeStyle = col; c.lineWidth = w; path(c, pts); c.stroke();
  }
  function revolver(c, x, y, ang, len) {
    c.save(); c.translate(x, y); c.rotate(ang);
    c.fillStyle = "#4a2c18"; path(c, [[-3, -1], [2, -1], [0, 7], [-5, 6]]); c.closePath(); c.fill();     /* the grip */
    c.fillStyle = "#26262a"; c.fillRect(-1, -3.5, len, 3.4);                                         /* the barrel */
    c.fillStyle = "#3a3a40"; c.fillRect(1, -4.5, 6, 5.5);                                            /* the cylinder */
    c.fillStyle = "rgba(220,220,230,0.6)"; c.fillRect(1, -3.4, len - 3, 0.9);
    c.restore();
  }
  function drawHat(c, S, x, y, wide, tilt) {
    c.save(); c.translate(x, y); c.rotate(tilt || 0);
    c.fillStyle = S.hat; c.strokeStyle = OUTLINE; c.lineWidth = 1.2;
    /* crown, with a crease */
    c.beginPath(); c.moveTo(-10, 0); c.quadraticCurveTo(-11, -12, -4, -13); c.quadraticCurveTo(0, -10, 4, -13); c.quadraticCurveTo(11, -12, 10, 0); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = S.band; c.fillRect(-10.4, -4, 20.8, 3.2);
    /* the brim, turned up a little at the edges */
    c.fillStyle = S.hat; c.beginPath(); c.moveTo(-wide, -2); c.quadraticCurveTo(0, 5, wide, -2.5); c.quadraticCurveTo(0, 1.5, -wide, -2); c.closePath(); c.fill(); c.stroke();
    c.restore();
  }
  function drawRider(style, pose, left, bare) {
    var S = STYLES[style], marshal = style === "marshal";
    return function (c, w, h) {
      if (left) { c.translate(w, 0); c.scale(-1, 1); }
      var hx = RHX, hy = RHY;
      /* the far arm, behind the body */
      var farC = shade(S.coat, -0.25);
      if (marshal) { limb(c, [[hx + 10, hy - 38], [hx + 28, hy - 44], [hx + 46, hy - 50]], 6.4, farC); revolver(c, hx + 47, hy - 50, -0.04, 16); }
      else if (pose === "aim") { limb(c, [[hx + 10, hy - 38], [hx + 24, hy - 30], [hx + 36, hy - 24]], 6, farC); }
      else { limb(c, [[hx + 10, hy - 38], [hx + 24, hy - 30], [hx + 38, hy - 26]], 6, farC); }
      /* the coat tail flapping behind */
      c.fillStyle = shade(S.coat, -0.1); c.strokeStyle = OUTLINE; c.lineWidth = 1.2;
      path(c, [[hx + 2, hy - 30], [hx - 6, hy - 10], [hx - 22, hy - 2], [hx - 30, hy - 10], [hx - 18, hy - 12], [hx - 8, hy - 22]]); c.closePath(); c.fill(); c.stroke();
      /* the leg in the stirrup */
      limb(c, [[hx + 2, hy - 2], [hx + 20, hy + 4], [hx + 17, hy + 18]], 8, S.pants);
      c.fillStyle = "#2a1a10"; path(c, [[hx + 12, hy + 16], [hx + 24, hy + 16], [hx + 25, hy + 21], [hx + 11, hy + 21]]); c.closePath(); c.fill();
      /* the body, leaning into the charge */
      c.fillStyle = S.coat; c.strokeStyle = OUTLINE; c.lineWidth = 1.4;
      path(c, [[hx - 9, hy + 1], [hx + 10, hy + 2], [hx + 18, hy - 22], [hx + 22, hy - 38], [hx + 16, hy - 44], [hx + 4, hy - 42], [hx - 4, hy - 24]]); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = S.coatL; path(c, [[hx + 10, hy - 2], [hx + 17, hy - 22], [hx + 21, hy - 37], [hx + 18, hy - 38], [hx + 13, hy - 22], [hx + 6, hy - 2]]); c.closePath(); c.fill();
      if (S.vest) { c.fillStyle = S.shirt; path(c, [[hx + 13, hy - 24], [hx + 19, hy - 38], [hx + 15, hy - 41], [hx + 10, hy - 26]]); c.closePath(); c.fill(); }
      if (marshal) {   /* the marshal's star */
        c.fillStyle = "#e8c860"; c.strokeStyle = "#6a4a10"; c.lineWidth = 0.8; c.beginPath();
        for (var si = 0; si < 10; si++) { var sa = -Math.PI / 2 + si * Math.PI / 5, sr = si % 2 ? 1.6 : 3.8; c[si ? "lineTo" : "moveTo"](hx + 15 + Math.cos(sa) * sr, hy - 28 + Math.sin(sa) * sr); }
        c.closePath(); c.fill(); c.stroke();
      }
      c.fillStyle = "#2a1a10"; c.fillRect(hx - 5, hy - 8, 16, 3);       /* the gun belt */
      c.fillStyle = "#b89a50"; c.fillRect(hx + 4, hy - 8, 3, 3);
      /* the neck and head, a little forward */
      var cx = hx + 22, cy = hy - 50;
      c.fillStyle = S.skin; c.fillRect(cx - 5, cy + 4, 7, 7);
      c.strokeStyle = OUTLINE; c.lineWidth = 1.3;
      c.beginPath(); c.arc(cx, cy, 8.2, 0, TAU); c.fill(); c.stroke();
      path(c, [[cx + 7.5, cy - 1], [cx + 10.5, cy + 2.5], [cx + 7.5, cy + 3.5]]); c.fill();   /* the nose */
      if (S.scarf) { c.fillStyle = S.scarf; path(c, [[cx - 6, cy + 7], [cx + 6, cy + 7], [cx + 4, cy + 12], [cx - 4, cy + 12], [cx - 12, cy + 16]]); c.closePath(); c.fill(); }
      if (marshal) {
        /* a full grizzled beard, the reins clamped in his teeth, the patch over one eye */
        c.fillStyle = S.beard; path(c, [[cx - 6, cy + 1], [cx + 1, cy + 5], [cx + 9, cy + 4], [cx + 9, cy + 10], [cx + 3, cy + 15], [cx - 4, cy + 12], [cx - 7, cy + 6]]); c.closePath(); c.fill();
        c.strokeStyle = "rgba(255,255,255,0.25)"; c.lineWidth = 0.8;
        c.beginPath(); c.moveTo(cx - 2, cy + 8); c.lineTo(cx + 1, cy + 13); c.moveTo(cx + 3, cy + 7); c.lineTo(cx + 5, cy + 12); c.stroke();
        c.strokeStyle = "#1a0e06"; c.lineWidth = 2.4; c.beginPath(); c.moveTo(cx + 4, cy + 4.5); c.lineTo(cx + 10, cy + 4.5); c.stroke();
        c.strokeStyle = "#0c0806"; c.lineWidth = 1.3; c.beginPath(); c.moveTo(cx - 7.5, cy - 5); c.lineTo(cx + 5, cy - 2); c.stroke();
        c.fillStyle = "#0c0806"; c.beginPath(); c.ellipse(cx + 4.4, cy - 1.6, 3.3, 2.7, 0.2, 0, TAU); c.fill();
        c.fillStyle = "rgba(255,255,255,0.18)"; c.beginPath(); c.arc(cx + 3.6, cy - 2.6, 0.9, 0, TAU); c.fill();
      } else {
        c.fillStyle = "#120a06"; c.beginPath(); c.arc(cx + 4.4, cy - 1.8, 1.3, 0, TAU); c.fill();
        c.strokeStyle = "#120a06"; c.lineWidth = 1.2; c.beginPath(); c.moveTo(cx + 2, cy - 4.6); c.lineTo(cx + 7, cy - 4); c.stroke();
        if (S.stache) { c.fillStyle = S.stache; path(c, [[cx + 2, cy + 4], [cx + 9, cy + 3], [cx + 8, cy + 6.5], [cx + 3, cy + 6]]); c.closePath(); c.fill(); }
        if (S.mask) { c.fillStyle = S.mask; path(c, [[cx - 3, cy + 1], [cx + 10.5, cy + 1.5], [cx + 9, cy + 8], [cx - 2, cy + 10]]); c.closePath(); c.fill();
          c.fillStyle = "rgba(255,255,255,0.35)"; [[cx + 2, cy + 4], [cx + 6, cy + 6]].forEach(function (q) { c.beginPath(); c.arc(q[0], q[1], 0.8, 0, TAU); c.fill(); }); }
        c.fillStyle = "#2a1a10"; path(c, [[cx - 8, cy - 4], [cx - 2, cy - 5], [cx - 4, cy + 2], [cx - 8, cy + 3]]); c.closePath(); c.fill();   /* hair at the nape */
      }
      if (bare) { c.fillStyle = "#3a2414"; c.beginPath(); c.arc(cx - 1, cy - 3, 8, Math.PI * 1.05, Math.PI * 1.95); c.fill(); }
      else drawHat(c, S, cx - 1, cy - 6, marshal ? 16 : 15, marshal ? -0.08 : -0.05);
      /* the near arm */
      if (marshal) { limb(c, [[hx + 16, hy - 36], [hx + 34, hy - 30], [hx + 51, hy - 36]], 7, S.coat); revolver(c, hx + 51, hy - 36, -0.03, 17);
        c.fillStyle = S.skin; c.beginPath(); c.arc(hx + 51, hy - 35, 3, 0, TAU); c.fill(); }
      else if (pose === "aim") { limb(c, [[hx + 16, hy - 36], [hx + 34, hy - 38], [hx + 52, hy - 40]], 6.6, S.coat); revolver(c, hx + 52, hy - 40, -0.02, 17);
        c.fillStyle = S.skin; c.beginPath(); c.arc(hx + 52, hy - 39, 3, 0, TAU); c.fill(); }
      else { limb(c, [[hx + 16, hy - 36], [hx + 26, hy - 50], [hx + 30, hy - 66]], 6.6, S.coat); revolver(c, hx + 30, hy - 66, -1.45, 15);
        c.fillStyle = S.skin; c.beginPath(); c.arc(hx + 30, hy - 66, 3, 0, TAU); c.fill(); }
      if (!marshal) { c.fillStyle = S.skin; c.beginPath(); c.arc(hx + (pose === "aim" ? 36 : 38), hy - (pose === "aim" ? 24 : 26), 2.8, 0, TAU); c.fill(); }
    };
  }
  /* an outlaw thrown from the saddle: the same figure, no horse, arms flung up (drawn round the middle) */
  function drawTumbler(style) {
    var S = STYLES[style];
    return function (c, w, h) {
      var hx = w / 2, hy = h / 2 + 12;
      limb(c, [[hx, hy], [hx - 12, hy + 14], [hx - 6, hy + 28]], 7, S.pants);
      limb(c, [[hx, hy], [hx + 10, hy + 16], [hx + 18, hy + 26]], 7, S.pants);
      c.fillStyle = S.coat; c.strokeStyle = OUTLINE; c.lineWidth = 1.3;
      path(c, [[hx - 8, hy + 2], [hx + 8, hy + 2], [hx + 9, hy - 22], [hx - 9, hy - 22]]); c.closePath(); c.fill(); c.stroke();
      limb(c, [[hx - 6, hy - 18], [hx - 16, hy - 30], [hx - 20, hy - 42]], 5.6, S.coat);
      limb(c, [[hx + 6, hy - 18], [hx + 17, hy - 28], [hx + 24, hy - 38]], 5.6, S.coat);
      c.fillStyle = S.skin; c.beginPath(); c.arc(hx, hy - 30, 7.6, 0, TAU); c.fill(); c.stroke();
      c.fillStyle = "#120a06"; c.beginPath(); c.arc(hx - 2.6, hy - 31, 1.1, 0, TAU); c.arc(hx + 2.6, hy - 31, 1.1, 0, TAU); c.fill();
      c.beginPath(); c.arc(hx, hy - 26.5, 2, 0, TAU); c.fill();
    };
  }
  function drawLooseHat(style) { return function (c, w, h) { drawHat(c, STYLES[style], w / 2, h / 2 + 4, 15, 0); }; }
  /* the wanted poster each outlaw carries over his head */
  function drawPoster(c, w, h) {
    c.fillStyle = "rgba(30,14,4,0.45)"; c.fillRect(3, 4, w - 4, h - 4);
    var g = c.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, "#f6e8c4"); g.addColorStop(1, "#e2c88e");
    c.fillStyle = g; c.fillRect(1, 1, w - 4, h - 5);
    c.strokeStyle = "#5a3a1a"; c.lineWidth = 1.6; c.strokeRect(1.5, 1.5, w - 5, h - 6);
    c.strokeStyle = "rgba(90,58,26,0.55)"; c.lineWidth = 0.8; c.strokeRect(4.5, 4.5, w - 11, h - 12);
    c.fillStyle = "#4a2a10"; c.font = "bold 9px Georgia, serif"; c.textAlign = "center"; c.textBaseline = "middle";
    c.fillText("WANTED", (w - 3) / 2, 10.5);
    c.fillStyle = "rgba(120,80,40,0.5)"; c.fillRect(9, h - 14, w - 21, 1); c.fillRect(13, h - 11, w - 29, 1);
    /* a nail at the top */
    c.fillStyle = "#3a2a1a"; c.beginPath(); c.arc((w - 3) / 2, 3.5, 1.4, 0, TAU); c.fill();
  }
  function drawRock(c, w, h) {
    c.fillStyle = "rgba(40,24,8,0.3)"; c.beginPath(); c.ellipse(w / 2 + 3, h - 6, w * 0.46, 5, 0, 0, TAU); c.fill();
    var g = c.createLinearGradient(0, 4, 0, h - 4);
    g.addColorStop(0, "#c2b49c"); g.addColorStop(1, "#6a5e50");
    c.fillStyle = g; c.strokeStyle = OUTLINE; c.lineWidth = 1.4;
    path(c, [[6, h - 6], [9, h - 18], [18, h - 28], [32, h - 31], [44, h - 26], [53, h - 16], [55, h - 6]]); c.closePath(); c.fill(); c.stroke();
    c.strokeStyle = "rgba(60,48,36,0.7)"; c.lineWidth = 1; c.beginPath(); c.moveTo(30, h - 30); c.lineTo(26, h - 16); c.lineTo(34, h - 8); c.stroke();
    c.fillStyle = "rgba(255,250,230,0.35)"; path(c, [[14, h - 20], [20, h - 27], [30, h - 29], [22, h - 22]]); c.closePath(); c.fill();
    c.strokeStyle = "#a88a3a"; c.lineWidth = 1.4;
    [[4, 0], [8, 1], [50, 1], [55, -1], [58, 1]].forEach(function (q) { c.beginPath(); c.moveTo(q[0], h - 4); c.lineTo(q[0] + q[1] * 3, h - 13); c.stroke(); });
  }
  function drawHole(c, w, h) {
    c.fillStyle = "#8a6430"; c.beginPath(); c.ellipse(w / 2 + 8, h * 0.56, w * 0.36, h * 0.3, 0, 0, TAU); c.fill();      /* the dirt mound */
    c.fillStyle = "#a67c40"; c.beginPath(); c.ellipse(w / 2 + 8, h * 0.5, w * 0.3, h * 0.2, 0, Math.PI, TAU); c.fill();
    c.fillStyle = "#1e1208"; c.strokeStyle = "#5a3c18"; c.lineWidth = 1.6;
    c.beginPath(); c.ellipse(w / 2 - 6, h * 0.66, w * 0.27, h * 0.2, 0, 0, TAU); c.fill(); c.stroke();
    c.fillStyle = "rgba(255,220,150,0.3)"; c.beginPath(); c.ellipse(w / 2 - 6, h * 0.6, w * 0.2, h * 0.06, 0, Math.PI, TAU); c.fill();
  }
  function drawTuft(v) {
    return function (c, w, h) {
      var cols = ["#e8c870", "#c89a40", "#b08030", "#f0d890"], n = 9 + v * 2;
      c.lineCap = "round";
      for (var i = 0; i < n; i++) {
        var x = w * 0.5 + (i - n / 2) * (w / n) * 0.8, lean = (i - n / 2) * 0.9 + (v - 1) * 2, ht = h * (0.55 + ((i * 37) % 10) / 22);
        c.strokeStyle = cols[(i + v) % cols.length]; c.lineWidth = 1.6;
        c.beginPath(); c.moveTo(x, h); c.quadraticCurveTo(x + lean * 0.4, h - ht * 0.6, x + lean, h - ht); c.stroke();
      }
    };
  }
  function drawGrain(c, w, h) {
    var img = c.createImageData(w, h), d = img.data;
    for (var i = 0; i < d.length; i += 4) {
      var v = Math.random(), on = v > 0.86 || v < 0.1;
      d[i] = d[i + 1] = d[i + 2] = v > 0.5 ? 255 : 30; d[i + 3] = on ? 60 + Math.floor(Math.random() * 90) : 0;
    }
    c.putImageData(img, 0, 0);
  }
  function drawGlint(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,240,1)"); g.addColorStop(0.25, "rgba(255,240,180,0.8)"); g.addColorStop(1, "rgba(255,200,100,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    c.strokeStyle = "rgba(255,255,230,0.9)"; c.lineWidth = 1.4;
    c.beginPath(); c.moveTo(w / 2, 1); c.lineTo(w / 2, h - 1); c.moveTo(1, h / 2); c.lineTo(w - 1, h / 2); c.stroke();
  }
  function ensureChargeArt(scene) {
    var f;
    for (f = 0; f < 4; f++) {
      canvasTex(scene, "md-charge-h-bay-R-" + f, HW, HH, drawHorse("bay", f, false));
      ["grey", "black", "chestnut", "buck"].forEach(function (co) {
        canvasTex(scene, "md-charge-h-" + co + "-L-" + f, HW, HH, drawHorse(co, f, true));
      });
    }
    canvasTex(scene, "md-charge-r-marshal", RW, RH, drawRider("marshal", "ride", false));
    ["ned", "vest", "blue", "green"].forEach(function (st) {
      canvasTex(scene, "md-charge-r-" + st + "-ride", RW, RH, drawRider(st, "ride", true));
      canvasTex(scene, "md-charge-r-" + st + "-aim", RW, RH, drawRider(st, "aim", true));
      canvasTex(scene, "md-charge-r-" + st + "-ride-bare", RW, RH, drawRider(st, "ride", true, true));
      canvasTex(scene, "md-charge-r-" + st + "-aim-bare", RW, RH, drawRider(st, "aim", true, true));
      canvasTex(scene, "md-charge-fall-" + st, 70, 90, drawTumbler(st));
      canvasTex(scene, "md-charge-hat-" + st, 40, 24, drawLooseHat(st));
    });
    canvasTex(scene, "md-charge-poster", POSTER_W, POSTER_H, drawPoster);
    canvasTex(scene, "md-charge-rock", 62, 38, drawRock);
    canvasTex(scene, "md-charge-hole", 64, 30, drawHole);
    for (f = 0; f < 3; f++) canvasTex(scene, "md-charge-tuft-" + f, 34, 22, drawTuft(f));
    canvasTex(scene, "md-charge-grain", 256, 256, drawGrain);
    canvasTex(scene, "md-charge-glint", 40, 40, drawGlint);
  }

  /* the landscape, drawn once for the canvas size: sky, sun, the mountains, the trees and the meadow */
  function drawLand(B, W, H) {
    return function (c) {
      var yH = B.yH, k = B.k, g, i, x;
      var seed = 7; function r() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
      g = c.createLinearGradient(0, 0, 0, yH);
      g.addColorStop(0, "#7d9cb0"); g.addColorStop(0.42, "#c3c3a6"); g.addColorStop(0.78, "#eccd8e"); g.addColorStop(1, "#f4b46c");
      c.fillStyle = g; c.fillRect(0, 0, W, yH + 2);
      /* the low sun behind the gang */
      var sx = W * 0.74, sy = yH - Math.max(70 * k, H * 0.12);
      g = c.createRadialGradient(sx, sy, 2, sx, sy, W * 0.42);
      g.addColorStop(0, "rgba(255,246,214,0.95)"); g.addColorStop(0.08, "rgba(255,226,160,0.7)"); g.addColorStop(0.35, "rgba(250,190,110,0.25)"); g.addColorStop(1, "rgba(250,170,90,0)");
      c.fillStyle = g; c.fillRect(0, 0, W, yH);
      c.fillStyle = "rgba(255,250,232,0.95)"; c.beginPath(); c.arc(sx, sy, 17 * k, 0, TAU); c.fill();
      /* long thin clouds */
      for (i = 0; i < 7; i++) {
        var cx = r() * W, cy = yH * (0.12 + r() * 0.5), cw = (90 + r() * 220) * k, ch = (4 + r() * 6) * k;
        c.fillStyle = "rgba(255,232,196," + (0.35 + r() * 0.3) + ")"; c.beginPath(); c.ellipse(cx, cy, cw, ch, 0, 0, TAU); c.fill();
        c.fillStyle = "rgba(160,110,100,0.18)"; c.beginPath(); c.ellipse(cx + cw * 0.1, cy + ch * 0.9, cw * 0.8, ch * 0.5, 0, 0, TAU); c.fill();
      }
      /* a pair of distant birds */
      c.strokeStyle = "rgba(60,40,30,0.6)"; c.lineWidth = 1.3;
      [[0.3, 0.25], [0.33, 0.29]].forEach(function (q) { var bx = W * q[0], by = yH * q[1]; c.beginPath(); c.moveTo(bx - 6 * k, by - 2 * k); c.quadraticCurveTo(bx - 2 * k, by - 4 * k, bx, by); c.quadraticCurveTo(bx + 2 * k, by - 4 * k, bx + 6 * k, by - 2 * k); c.stroke(); });
      /* the far mountains, hazy blue-violet */
      function range(base, amp, step, col1, col2, rough) {
        var pts = [], y;
        for (x = -20; x <= W + 20; x += step * k) { y = base - amp * (0.45 + 0.55 * Math.abs(Math.sin(x / (W * 0.23) + rough))) - r() * amp * 0.28; pts.push([x, y]); }
        g = c.createLinearGradient(0, base - amp, 0, base);
        g.addColorStop(0, col1); g.addColorStop(1, col2);
        c.fillStyle = g; c.beginPath(); c.moveTo(-20, base + 2);
        pts.forEach(function (q) { c.lineTo(q[0], q[1]); });
        c.lineTo(W + 20, base + 2); c.closePath(); c.fill();
        return pts;
      }
      var far = range(yH - 10 * k, Math.max(70 * k, yH * 0.4), 26, "#9a90ac", "#d2bfae", 0.7);
      /* sunlit edges on the far peaks */
      c.strokeStyle = "rgba(255,230,190,0.35)"; c.lineWidth = 1.5; c.beginPath(); far.forEach(function (q, j) { c[j ? "lineTo" : "moveTo"](q[0], q[1] + 1); }); c.stroke();
      range(yH - 4 * k, Math.max(40 * k, yH * 0.24), 18, "#6e6878", "#a69488", 2.1);
      /* the rolling foothills and the tree line along the far edge of the meadow */
      g = c.createLinearGradient(0, yH - 30 * k, 0, yH + 8 * k);
      g.addColorStop(0, "#6a6440"); g.addColorStop(1, "#8a7a44");
      c.fillStyle = g; c.beginPath(); c.moveTo(0, yH + 8 * k);
      for (x = 0; x <= W; x += 12 * k) c.lineTo(x, yH - 8 * k - 12 * k * (0.5 + 0.5 * Math.sin(x / (W * 0.11) + 1.3)) - r() * 3 * k);
      c.lineTo(W, yH + 8 * k); c.closePath(); c.fill();
      var trees = Math.round(W / (14 * k));
      for (i = 0; i < trees; i++) {
        x = r() * W; var ty = yH + 4 * k - r() * 10 * k, tr = (5 + r() * 8) * k, gold = r() < 0.35;
        c.fillStyle = gold ? (r() < 0.5 ? "#c89a3a" : "#b8862c") : (r() < 0.5 ? "#4a4a28" : "#3a3c22");
        c.beginPath(); c.ellipse(x, ty - tr * 0.7, tr * 0.8, tr, 0, 0, TAU); c.fill();
        c.beginPath(); c.ellipse(x + tr * 0.5, ty - tr * 0.4, tr * 0.6, tr * 0.7, 0, 0, TAU); c.fill();
        if (gold) { c.fillStyle = "rgba(255,230,150,0.35)"; c.beginPath(); c.ellipse(x + tr * 0.3, ty - tr * 1.1, tr * 0.4, tr * 0.35, 0, 0, TAU); c.fill(); }
      }
      /* the meadow: hazy gold far off, deep amber in front */
      g = c.createLinearGradient(0, yH, 0, H);
      g.addColorStop(0, "#dcc078"); g.addColorStop(0.18, "#d4ac5c"); g.addColorStop(0.55, "#b8873a"); g.addColorStop(1, "#8a5c24");
      c.fillStyle = g; c.fillRect(0, yH + 2 * k, W, H - yH);
      /* soft bands where the wind lays the grass over */
      for (i = 0; i < 16; i++) {
        var bz = r(), by2 = B.zy(bz) - 6 * k, bw = (120 + r() * 300) * k * (0.5 + bz);
        c.fillStyle = r() < 0.5 ? "rgba(255,236,170,0.12)" : "rgba(90,50,10,0.1)";
        c.beginPath(); c.ellipse(r() * W, by2, bw, (6 + 14 * bz) * k, 0, 0, TAU); c.fill();
      }
      /* blades of grass: thicker and taller toward the front */
      var cols = ["#f0d68e", "#e2bc66", "#c8963e", "#a8742c", "#8a5c22", "#f6e2a8"], n = Math.round(W * H / 220);
      c.lineCap = "round";
      for (i = 0; i < n; i++) {
        var z = Math.pow(r(), 0.8), y = B.zy(z) + r() * 6 * k - 8 * k, len = (2 + 14 * z * z) * k * (0.6 + r() * 0.8);
        if (y < yH + 3 * k) continue;
        x = r() * W;
        c.strokeStyle = cols[Math.floor(r() * cols.length)]; c.globalAlpha = 0.55 + 0.45 * z; c.lineWidth = (0.6 + 1.4 * z) * k;
        c.beginPath(); c.moveTo(x, y); c.lineTo(x - (1 + 4 * z) * k * (0.3 + r()), y - len); c.stroke();
      }
      c.globalAlpha = 1;
      /* a few dark sage bushes and late flowers */
      for (i = 0; i < 14; i++) {
        z = r(); y = B.zy(z); x = r() * W; var bs = (2.5 + 7 * z) * k;
        for (var q = 0; q < 6; q++) {
          var ox = (r() - 0.5) * bs * 2.4, oy = -r() * bs * 0.9;
          c.fillStyle = q % 2 ? "rgba(118,122,84,0.8)" : "rgba(150,150,104,0.75)";
          c.beginPath(); c.arc(x + ox, y + oy - bs * 0.4, bs * (0.45 + r() * 0.3), 0, TAU); c.fill();
        }
      }
      for (i = 0; i < 70; i++) { z = r(); c.fillStyle = r() < 0.5 ? "rgba(240,236,220,0.8)" : "rgba(170,110,170,0.7)"; c.beginPath(); c.arc(r() * W, B.zy(z) - r() * 6 * k, (0.8 + 1.6 * z) * k, 0, TAU); c.fill(); }
      /* a haze where the meadow meets the trees */
      g = c.createLinearGradient(0, yH - 14 * k, 0, yH + 30 * k);
      g.addColorStop(0, "rgba(255,226,170,0)"); g.addColorStop(0.5, "rgba(255,226,170,0.35)"); g.addColorStop(1, "rgba(255,226,170,0)");
      c.fillStyle = g; c.fillRect(0, yH - 14 * k, W, 44 * k);
    };
  }
  /* the old film's vignette and warm sepia edges */
  function drawVignette(W, H) {
    return function (c) {
      var g = c.createRadialGradient(W / 2, H * 0.52, Math.min(W, H) * 0.32, W / 2, H * 0.52, Math.max(W, H) * 0.75);
      g.addColorStop(0, "rgba(60,30,8,0)"); g.addColorStop(0.65, "rgba(60,30,8,0.18)"); g.addColorStop(1, "rgba(40,18,4,0.62)");
      c.fillStyle = g; c.fillRect(0, 0, W, H);
    };
  }

  M.extend("charge", {
    name: "Reins in His Teeth", kind: "charge level", level: "charge level", act: "FIRE",
    how: "True Grit's famous charge: the one-eyed marshal Rooster Cogburn takes his horse's reins in his teeth, a revolver in each hand, and gallops across the meadow at Lucky Ned Pepper's gang. The outlaws ride at you, each with a wanted poster over his head that carries a letter. Steer up and down the meadow until you are level with the rider who carries the right answer (the dotted line on the grass shows where your shots will fly), and fire both guns. The gang charges past you and wheels round to come again, so steer between their horses. When an outlaw levels his gun, a red dotted line shows where he is aiming: ride out of it before he fires.",
    rules: "Shooting a wrong rider costs a life, and his poster is stamped with a cross. So does an outlaw's bullet, or riding into an outlaw's horse. Later, riding over a rock or a gopher hole in the grass, or standing in a ring of dust when the rifleman on the ridge fires, costs a life too.",
    keys: "▲ ▼, W / S or the on-screen pad steer up and down the meadow · ◀ ▶ or A / D rein in or spur on · Space, FIRE or a mouse button fires both guns · or point with the mouse or a finger: the marshal rides level with what you point at (point at a rider or his poster to follow him), and a click or a tap fires.",
    tip: "REINS IN HIS TEETH — ride level with the outlaw whose poster has the right letter and fire both guns. Get out of the red line of fire!",
    hint1: "Ride level with the outlaw whose wanted poster shows the right letter, and fire. The passage stays in the side panel.",
    hint2: "This question has two right letters. Shoot both outlaws whose posters carry them.",
    news: ["",
      "Rocks and gopher holes hide in the grass. Steer around them, or your horse stumbles.",
      "Two outlaws shoot at once, and they aim where you are riding, not where you are. Change direction to dodge.",
      "Six shots in each gun: after twelve shots the marshal has to reload. The bullets in the corner show what is left.",
      "The riders weave more, and they swap places in the line. Watch the posters.",
      "Three outlaws shoot at once.",
      "The rider in your sights no longer lights up: line the dotted line up with him yourself.",
      "A rifleman on the far ridge: a glint of sun, then a ring of dust shows where his shot will land. Get out of the ring.",
      "Every outlaw fires two quick shots.",
      "The last charge: all four outlaws shoot at once, on top of everything else."],
    params: chargeParams
  }, {
    chargeParams: function (n) { return chargeParams(n); },

    setup_charge: function () {
      ensureChargeArt(this);
      var P = chargeParams(this.night), self = this, i;
      var B = this.cg = { P: P, t: 0, riders: [], shots: [], foes: [], rocks: [], tufts: [], puffs: [], glints: [], fallers: [],
        rz: 0.5, rx: 0, rvx: 0, rvz: 0, pz: null, cd: 0, ammo: 12, reloadMs: 0, volleyCd: P.fireMs * 0.9, rockCd: 2.5, ridgeCd: 4, swapCd: 3,
        frame: 0, gt: 0, lastClaim: null, lastNow: 0, tz: null, tx: null, lpx: null, lpy: null, landKey: null, vigKey: null, fired: 0, hits: 0, sights: -1 };
      this.cameras.main.setBackgroundColor("#2a1a0c");
      this.chargeLayout();
      B.land = this.add.image(0, 0, B.landKey).setOrigin(0, 0).setDepth(0);
      for (i = 0; i < 70; i++) {
        var z = Math.pow(Math.random(), 0.7);
        B.tufts.push({ z: z, x: Math.random() * this.W, spr: this.add.image(0, 0, "md-charge-tuft-" + (i % 3)).setOrigin(0.5, 1).setDepth(1) });
      }
      B.groundG = this.add.graphics().setDepth(2);      /* shadows, the aim line, dust rings */
      B.fxG = this.add.graphics().setDepth(8);          /* bullets, reins, flashes, dust */
      B.uiG = this.add.graphics().setDepth(30);
      B.horse = this.add.image(0, 0, "md-charge-h-bay-R-0").setOrigin(HGX / HW, HGY / HH);
      B.rider = this.add.image(0, 0, "md-charge-r-marshal").setOrigin(RHX / RW, RHY / RH);
      B.vig = this.add.image(0, 0, B.vigKey).setOrigin(0, 0).setDepth(40);
      B.grain = this.add.tileSprite(0, 0, this.W, this.H, "md-charge-grain").setOrigin(0, 0).setDepth(41).setAlpha(0.22);
      B.txAmmo = this.add.text(0, 0, "SHOTS", { fontFamily: SERIF, fontSize: 13, color: "#f6e8c4", fontStyle: "bold", stroke: "#2a1608", strokeThickness: 4 }).setOrigin(0, 0.5).setDepth(31).setVisible(P.reload > 0);
      B.rx = B.xMin + (B.xMax - B.xMin) * 0.3;
      this.chargePlaceStatic();
      this.makeSol(B.rx, this.H * 0.5, "right").setVisible(false);   /* the marshal rides; the sprite stays for coin pop-ups */
      B.started = false;
      void self;
    },

    /* everything that depends on the canvas size */
    chargeLayout: function () {
      var B = this.cg, W = this.W, H = this.H, k;
      k = B.k = clamp(Math.min(H / 768, W / 1000), 0.55, 1.25);
      B.yH = Math.round(H * 0.36);                    /* the far edge of the meadow (the trees) */
      B.yFar = B.yH + 34 * k;                         /* where the hooves of a rider at z = 0 touch the grass */
      B.yNear = H - 12 * k;                           /* ... and at z = 1 */
      B.zy = function (z) { return B.yFar + (B.yNear - B.yFar) * z; };
      B.xMin = Math.round(W * 0.12); B.xMax = Math.round(W * 0.44);
      var pad = this.chargePadBox();
      /* the on-screen pad covers the canvas's bottom-left corner: keep the marshal clear of it */
      if (pad && pad.x0 < W * 0.4 && pad.y0 < H) B.xMin = Math.max(B.xMin, Math.round(pad.x1 + 95 * k));
      B.xMax = Math.max(B.xMax, B.xMin + 120 * k);
      B.xRe = W + 70 * k;                              /* where riders come back in */
      var key = "md-charge-land-" + W + "x" + H;
      if (B.landKey !== key) {
        var old = B.landKey;
        canvasTex(this, key, W, H, drawLand(B, W, H));
        B.landKey = key;
        if (B.land) B.land.setTexture(key);
        if (old && old !== key) { try { this.textures.remove(old); } catch (e) {} }
      }
      var vk = "md-charge-vig-" + W + "x" + H;
      if (B.vigKey !== vk) {
        var ov = B.vigKey;
        canvasTex(this, vk, W, H, drawVignette(W, H));
        B.vigKey = vk;
        if (B.vig) B.vig.setTexture(vk);
        if (ov && ov !== vk) { try { this.textures.remove(ov); } catch (e2) {} }
      }
    },
    chargePadBox: function () {
      try {
        var pad = document.querySelector("#controls .dpad") || document.querySelector(".dpad"), cv = this.game && this.game.canvas;
        if (!pad || !cv) return null;
        var a = pad.getBoundingClientRect(), c = cv.getBoundingClientRect();
        if (!a.width || !a.height || !c.width || !c.height) return null;
        var fx = this.W / c.width, fy = this.H / c.height;
        return { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
      } catch (e) { return null; }
    },
    chargePlaceStatic: function () {
      var B = this.cg, k = B.k;
      B.land.setPosition(0, 0);
      B.vig.setPosition(0, 0);
      B.grain.setSize(this.W, this.H);
      /* the shots left go under the Menu button, at the top left */
      var top = 18 * k;
      try {
        var mb = document.getElementById("btn-quit"), cv = this.game && this.game.canvas;
        if (mb && cv && mb.offsetParent) { var a = mb.getBoundingClientRect(), c = cv.getBoundingClientRect(); if (a.left - c.left < this.W * 0.3) top = Math.max(top, (a.bottom - c.top) * this.H / c.height + 16 * k); }
      } catch (e) {}
      B.ammoY = top;
      B.txAmmo.setFontSize(Math.max(11, Math.round(13 * k))).setPosition(14 * k, top);
    },
    resize_charge: function () {
      var B = this.cg;
      this.chargeLayout();
      this.chargePlaceStatic();
      B.rx = clamp(B.rx, B.xMin, B.xMax);
      B.tufts.forEach(function (t) { t.x = Math.random() * this.W; }, this);
    },
    /* sprite scale at depth z */
    chargeS: function (z) { return this.cg.k * (0.5 + 0.72 * z); },
    /* the depth whose gun line (where shots fly) is at screen y */
    chargeZAt: function (py) {
      var B = this.cg, k = B.k, a = B.yFar - SHOT_H * k * 0.5, b = (B.yNear - B.yFar) - SHOT_H * k * 0.72;
      return clamp((py - a) / b, 0, 1);
    },
    chargeLanes: function (n) {
      var out = [], i, z0 = 0.06, z1 = 0.96;
      for (i = 0; i < n; i++) out.push(n > 1 ? z0 + (z1 - z0) * i / (n - 1) : 0.5);
      return out;
    },

    answers_charge: function () {
      var B = this.cg, self = this, k = B.k;
      B.riders.forEach(function (r) { self.chargeKillRider(r); });
      B.riders = [];
      B.fallers.forEach(function (f) { try { f.spr.destroy(); if (f.hat) f.hat.destroy(); } catch (e) {} });
      B.fallers = [];
      B.foes.forEach(function (b) { b.dead = true; }); B.foes = [];
      B.shots = [];
      B.glints = [];
      var letters = this.choiceLetters(), n = letters.length, lanes = this.chargeLanes(n);
      var styles = ["ned", "vest", "blue", "green"], coats = ["grey", "black", "chestnut", "buck"];
      var order = shuffle(letters.map(function (x, i) { return i; }));
      letters.forEach(function (Lt, i) {
        var lane = order[i], st = styles[i % 4], co = coats[i % 4];
        var r = { letter: Lt, state: self.extracted.indexOf(Lt) !== -1 ? "found" : "ride", lane: lane, zb: lanes[lane], z: lanes[lane], style: st, coat: co,
          x: self.W + 30 * k + (lane % 2) * 130 * k + rnd(0, 50) * k, ph: rnd(0, 6), gph: rnd(0, 4), aim: null, wait: 0, flash: 0, alpha: 1, passed: false };
        r.horse = self.add.image(-200, -200, "md-charge-h-" + co + "-L-0").setOrigin(HGX / HW, HGY / HH);
        r.rider = self.add.image(-200, -200, "md-charge-r-" + st + "-ride").setOrigin((RW - RHX) / RW, RHY / RH);
        r.poster = self.add.image(-200, -200, "md-charge-poster").setDepth(20);
        r.label = self.add.text(-200, -200, Lt, { fontFamily: SERIF, fontSize: Math.round(26 * k), color: "#3a1c08", fontStyle: "bold" }).setOrigin(0.5).setDepth(21);
        r.stamp = self.add.text(-200, -200, "", { fontFamily: SERIF, fontSize: Math.round(40 * k), color: "#b8201a", fontStyle: "bold" }).setOrigin(0.5).setDepth(22).setAlpha(0.88);
        if (r.state === "found") { r.horse.setVisible(false); r.rider.setVisible(false); r.poster.setVisible(false); r.label.setVisible(false); }
        B.riders.push(r);
      });
      B.volleyCd = Math.max(B.P.fireMs * 0.8, 2200);
      B.cd = 0;
      if (!B.started) { B.started = true; this.chargeBugle(); this.showTag("CHARGE!", "#ffe08a"); }
      else this.chargeBugle();
    },
    chargeKillRider: function (r) {
      ["horse", "rider", "poster", "label", "stamp"].forEach(function (k) { if (r[k]) { try { r[k].destroy(); } catch (e) {} r[k] = null; } });
    },
    /* the rider whose poster shows letter L (for the tests) */
    chargeRiderOf: function (L) { var a = this.cg.riders; for (var i = 0; i < a.length; i++) if (a[i].letter === L) return a[i]; return null; },

    tick_charge: function (s, inp, ms) {
      var B = this.cg, P = B.P, k = B.k, i, self = this, W = this.W, H = this.H;
      /* a new question (its reading pop-up) or a long pause: a key or button still held does not fire at once */
      var now = this.time ? this.time.now : 0;
      if (this.claim !== B.lastClaim || now - B.lastNow > 2500) B.armed = false;
      B.lastClaim = this.claim; B.lastNow = now;
      B.t += s;
      if (!B.told) { B.told = true; this.toast("Steer with ▲ ▼ (or point), fire both guns with Space. Shoot the outlaw whose poster has the right letter!", 5200); }

      /* ── the marshal: steer (keys or pad, else the pointer) ── */
      var p = this.ptr, moved = B.lpx != null && Math.abs(p.x - B.lpx) + Math.abs(p.y - B.lpy) > 2;
      if (inp.ax || inp.ay) { B.tz = null; B.tx = null; B.follow = null; }
      else if (moved || inp.ptr) {
        var hit = this.chargePointAt(p.x, p.y);
        B.follow = hit; B.tz = hit ? null : this.chargeZAt(p.y); B.tx = clamp(p.x, B.xMin, B.xMax);
        if (hit) B.tx = clamp(p.x - 260 * k, B.xMin, B.xMax);
      }
      B.lpx = p.x; B.lpy = p.y;
      if (B.follow && (B.follow.state !== "ride" && B.follow.state !== "dead")) B.follow = null;
      var zSpd = 0.78, xSpd = 230 * k, want;
      if (inp.ay) B.rz += inp.ay * zSpd * s;
      else if (B.follow || B.tz != null) { want = B.follow ? B.follow.z : B.tz; B.rz += clamp(want - B.rz, -zSpd * s, zSpd * s); }
      if (inp.ax) B.rx += inp.ax * xSpd * s;
      else if (B.tx != null) B.rx += clamp(B.tx - B.rx, -xSpd * s, xSpd * s);
      B.rz = clamp(B.rz, 0, 1); B.rx = clamp(B.rx, B.xMin, B.xMax);
      /* how fast he is moving up or down the meadow (the outlaws lead their aim by it from 21) */
      B.rvz = B.rvz * 0.8 + 0.2 * (s > 0 && B.pz != null ? (B.rz - B.pz) / s : 0); B.pz = B.rz;

      /* ── fire both guns ── */
      if (B.cd > 0) B.cd -= ms;
      if (B.reloadMs > 0) { B.reloadMs -= ms; if (B.reloadMs <= 0) { B.ammo = 12; snd("beam"); } }
      if (!inp.fire) B.armed = true;
      if (inp.fire && B.armed && B.cd <= 0 && !this._between) {
        if (B.reloadMs > 0) { if (!B.toldReload) { B.toldReload = true; this.toast("Reloading! Six shots in each gun, then the marshal has to reload.", 2600); } }
        else this.chargeFire();
      }

      /* ── the gallop ── */
      B.gt += s * 9.5;
      var f = Math.floor(B.gt) % 4;
      if (f !== B.frame) { B.frame = f; if (f === 0) this.chargeHooves(); }
      var ground = P.ground * k;

      /* ── the meadow streams past ── */
      B.tufts.forEach(function (t) {
        var sc = self.chargeS(t.z);
        t.x -= ground * (sc / k) * s;
        if (t.x < -30) { t.x = W + rnd(10, 80); t.z = Math.pow(Math.random(), 0.7); }
        t.spr.setPosition(t.x, B.zy(t.z) + 3 * sc).setScale(sc * 1.1).setDepth(1 + t.z * 0.5);
      });

      /* ── the gang ── */
      this.chargeRiders(s, ms);
      if (this._finishing) return;
      this.chargeVolley(s, ms);
      this.chargeFoes(s, ms);
      if (this._finishing) return;
      this.chargeShots(s);
      if (this._finishing) return;
      if (P.rocks) { this.chargeRocks(s, ms); if (this._finishing) return; }
      if (P.ridge) { this.chargeRidge(s, ms); if (this._finishing) return; }
      this.chargeFallers(s);

      /* ── draw ── */
      B.grain.setTilePosition(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
      B.grain.setAlpha(0.18 + Math.random() * 0.08);
      this.chargeDraw(s);
    },

    /* what the pointer is on: a rider or his poster (null: open meadow) */
    chargePointAt: function (x, y) {
      var B = this.cg, best = null;
      B.riders.forEach(function (r) {
        if (r.state !== "ride" && r.state !== "dead") return;
        if (!r.horse || !r.poster) return;
        var hb = r.horse.getBounds ? r.horse.getBounds() : null, pb = r.poster.getBounds ? r.poster.getBounds() : null;
        var on = (pb && pb.contains(x, y)) || (hb && hb.contains(x, y));
        if (on && (!best || r.z > best.z)) best = r;
      });
      return best;
    },

    chargeFire: function () {
      var B = this.cg, k = B.k, s = this.chargeS(B.rz), y = B.zy(B.rz), b = BOB[B.frame];
      var hipX = B.rx + (SADDLE.x - HGX) * s, hipY = y + (SADDLE.y - HGY + b) * s;
      var id = ++B.fired;
      B.shots.push({ id: id, x: hipX + GUN_N.x * s, z: clamp(B.rz + 0.024, 0, 1), y0: hipY + GUN_N.y * s, gun: 0, life: 0 });
      B.shots.push({ id: id, x: hipX + GUN_F.x * s, z: clamp(B.rz - 0.024, 0, 1), y0: hipY + GUN_F.y * s, gun: 1, life: 0 });
      B.flash = 70;
      B.cd = 300;
      if (B.P.reload) { B.ammo -= 2; if (B.ammo <= 0) { B.ammo = 0; B.reloadMs = B.P.reload; } }
      try { var R = window.SolRealms; if (R && R.blip) { R.hiss(0.12, 1500, 0.05); R.blip(190, 60, 0.12, "square", 0.028); R.hiss(0.1, 1300, 0.045, 0.05); R.blip(170, 55, 0.12, "square", 0.024, 0.05); } } catch (e) {}
      return id;
    },
    /* the marshal's shots fly right along their depth: the first rider they meet within hitZ is hit */
    chargeShots: function (s) {
      var B = this.cg, P = B.P, k = B.k, self = this, done = {};
      var spd = 1250 * k;
      B.shots.slice().forEach(function (b) {
        if (B.shots.indexOf(b) === -1) return;
        var x0 = b.x; b.x += spd * s; b.life += s;
        if (done[b.id]) return;
        var hit = null;
        B.riders.forEach(function (r) {
          if (r.state !== "ride" && r.state !== "dead") return;
          if (r.x > self.W - 6 * k) return;
          var sc = self.chargeS(r.z);
          if (Math.abs(r.z - b.z) <= P.hitZ && b.x >= r.x - 40 * sc && x0 <= r.x + 44 * sc) { if (!hit || r.x < hit.x) hit = r; }
        });
        if (hit) {
          done[b.id] = true;
          B.shots = B.shots.filter(function (o) { return o.id !== b.id; });
          self.chargeHitRider(hit);
        }
      });
      B.shots = B.shots.filter(function (b) { return b.x < self.W + 40; });
    },
    chargeHitRider: function (r) {
      var B = this.cg, k = B.k, sc = this.chargeS(r.z), y = B.zy(r.z) - 120 * sc;
      B.hits += 1;
      if (r.state === "dead") {
        this.chargeHatOff(r);
        if (!B.toldDead) { B.toldDead = true; this.toast("That outlaw's poster is crossed out. Find the rider with another letter.", 2600); }
        return "dead";
      }
      var right = (this.need || []).indexOf(r.letter) !== -1;
      if (right) this.chargeUnhorse(r);
      var res = this.answerPick(r.letter, r.x, y);
      if (res === "wrong") {
        r.state = "dead"; r.flash = 500;
        r.stamp.setText("✕");
        r.poster.setTint(0xb0a090); r.label.setColor("#6a5a4a");
        this.chargeHatOff(r);
      } else if (res === "ignore" && right) {
        /* (between questions nothing is picked; the rider is down anyway) */
      }
      return res;
    },
    /* a right answer: the outlaw tumbles out of the saddle into the grass and his horse bolts */
    chargeUnhorse: function (r) {
      var B = this.cg, k = B.k, sc = this.chargeS(r.z), y = B.zy(r.z);
      r.state = "found";
      r.rider.setVisible(false); r.poster.setVisible(false); r.label.setVisible(false); r.stamp.setVisible(false);
      var fl = { x: r.x + 6 * sc, y: y - 120 * sc, gy: y - 8 * sc, z: r.z, vx: 150 * k, vy: -260 * k, rot: 0, vr: 5, t: 0, landed: false,
        spr: this.add.image(r.x, y - 120 * sc, "md-charge-fall-" + r.style).setScale(sc).setDepth(5 + r.z + 0.02),
        hat: this.add.image(r.x - 10 * sc, y - 150 * sc, "md-charge-hat-" + r.style).setScale(sc).setDepth(5 + r.z + 0.03), hvx: 90 * k, hvy: -420 * k };
      B.fallers.push(fl);
      r.bolt = true;
      this.chargeDust(r.x, y, sc, 10);
      snd("pop");
    },
    chargeHatOff: function (r) {
      var B = this.cg, k = B.k, sc = this.chargeS(r.z), y = B.zy(r.z);
      if (r.hatGone) return;
      r.hatGone = true;
      B.fallers.push({ hatOnly: true, x: r.x, y: y - 150 * sc, gy: y - 4 * sc, z: r.z, t: 0, landed: false, rot: 0,
        hat: this.add.image(r.x, y - 150 * sc, "md-charge-hat-" + r.style).setScale(sc).setDepth(5 + r.z + 0.03), hvx: 120 * k, hvy: -380 * k });
      try { var R = window.SolRealms; if (R && R.blip) R.blip(1800, 600, 0.16, "sine", 0.02); } catch (e) {}
    },
    chargeFallers: function (s) {
      var B = this.cg, k = B.k, g = 1100 * k, ground = B.P.ground * k;
      B.fallers = B.fallers.filter(function (f) {
        f.t += s;
        if (f.spr) {
          if (!f.landed) {
            f.vy += g * s; f.x += f.vx * s; f.y += f.vy * s; f.rot -= f.vr * s;
            if (f.y >= f.gy) { f.y = f.gy; f.landed = true; f.rot = -Math.PI / 2; }
          } else f.x -= ground * 0.8 * s;
          f.spr.setPosition(f.x, f.y).setRotation(f.rot).setAlpha(clamp(2.6 - f.t, 0, 1));
        }
        if (f.hat) {
          if (f.hy == null) { f.hx = f.hatOnly ? f.x : f.x - 10; f.hy = f.y - (f.hatOnly ? 0 : 30 * k); }
          if (f.hy < f.gy) { f.hvy += g * 0.8 * s; f.hx += f.hvx * s; f.hy += f.hvy * s; f.hr = (f.hr || 0) + 7 * s; }
          else { f.hy = f.gy; f.hx -= ground * 0.8 * s; }
          f.hat.setPosition(f.hx, f.hy).setRotation(f.hr || 0).setAlpha(clamp(2.6 - f.t, 0, 1));
        }
        if (f.t > 2.6) { try { if (f.spr) f.spr.destroy(); if (f.hat) f.hat.destroy(); } catch (e) {} return false; }
        return true;
      });
    },

    /* the riders gallop at you, weave, pass and wheel round to come again */
    chargeRiders: function (s, ms) {
      var B = this.cg, P = B.P, k = B.k, self = this, lanes = this.chargeLanes(B.riders.length);
      /* now and then two neighbours swap places (41 on) */
      if (P.swap && !this._between) {
        B.swapCd -= s;
        if (B.swapCd <= 0) {
          B.swapCd = 1 / P.swap * rnd(0.6, 1.4);
          var live = B.riders.filter(function (r) { return r.state === "ride" || r.state === "dead"; }).sort(function (a, b) { return a.lane - b.lane; });
          if (live.length >= 2) { var j = Math.floor(Math.random() * (live.length - 1)), a = live[j], b2 = live[j + 1], t = a.lane; a.lane = b2.lane; b2.lane = t; }
        }
      }
      B.riders.forEach(function (r) {
        if (!r.horse) return;
        var sc = self.chargeS(r.z), y;
        if (r.flash > 0) r.flash -= ms;
        if (r.state === "found") {
          if (!r.bolt) return;
          /* the riderless horse bolts away toward the far trees */
          r.x -= (P.approach + 90) * k * (sc / k) * s; r.z = Math.max(0, r.z - 0.3 * s); r.alpha -= s * 0.8;
          sc = self.chargeS(r.z); y = B.zy(r.z);
          r.gph += s * 11;
          r.horse.setTexture("md-charge-h-" + r.coat + "-L-" + (Math.floor(r.gph) % 4)).setPosition(r.x, y).setScale(sc).setDepth(5 + r.z).setAlpha(clamp(r.alpha, 0, 1));
          if (r.alpha <= 0) { r.horse.setVisible(false); r.bolt = false; }
          return;
        }
        if (r.state === "flee") {
          r.alpha -= s * 1.6; r.x += 60 * k * s; r.z = Math.max(0, r.z - 0.2 * s);
          if (r.alpha <= 0) { [r.horse, r.rider, r.poster, r.label, r.stamp].forEach(function (o) { if (o) o.setVisible(false); }); return; }
        } else if (r.state === "gone") {
          r.wait -= ms;
          if (r.wait <= 0 && !self._between) {
            r.state = r.wasDead ? "dead" : "ride"; r.x = B.xRe + rnd(0, 90) * k; r.passed = false; r.hit = false;
            [r.horse, r.rider, r.poster, r.label, r.stamp].forEach(function (o) { if (o) o.setVisible(true); });
          } else return;
        } else {
          /* ride at the marshal along the lane, weaving */
          r.zb += clamp(lanes[r.lane] - r.zb, -0.25 * s, 0.25 * s);
          r.z = clamp(r.zb + P.weave * Math.sin(B.t * P.weaveSpd + r.ph), 0, 1);
          r.x -= P.approach * k * s;
          /* riding through the marshal */
          var sc2 = self.chargeS(r.z), dz = Math.abs(r.z - B.rz), dx = r.x - B.rx;
          if (!r.hit && dz < 0.06 && Math.abs(dx) < 46 * sc2) {
            r.hit = true;
            self.chargeDust(B.rx, B.zy(B.rz), self.chargeS(B.rz), 12);
            if (self.loseLife("hit", "RIDDEN DOWN")) {
              if (!B.toldRam) { B.toldRam = true; self.toast("Ridden down! Steer into the gap between the outlaws' horses as they charge past.", 3200); }
            }
            if (self._finishing) return;
          }
          if (r.x < -110 * k) {
            r.wasDead = r.state === "dead"; r.state = "gone"; r.wait = 900 + rnd(0, 700); r.aim = null;
            [r.horse, r.rider, r.poster, r.label, r.stamp].forEach(function (o) { if (o) o.setVisible(false); });
            return;
          }
        }
        sc = self.chargeS(r.z); y = B.zy(r.z);
        r.gph += s * 9.5;
        var f = Math.floor(r.gph) % 4, b = BOB[f];
        r.horse.setTexture("md-charge-h-" + r.coat + "-L-" + f).setPosition(r.x, y).setScale(sc).setDepth(5 + r.z).setAlpha(clamp(r.alpha, 0, 1));
        var hx = r.x - (SADDLE.x - HGX) * sc, hy = y + (SADDLE.y - HGY + b) * sc;
        r.rider.setTexture("md-charge-r-" + r.style + (r.aim ? "-aim" : "-ride") + (r.hatGone ? "-bare" : "")).setPosition(hx, hy).setScale(sc).setDepth(5 + r.z + 0.001).setAlpha(clamp(r.alpha, 0, 1));
        r.rider.setTint(r.flash > 0 && Math.floor(r.flash / 90) % 2 ? 0xff8a6a : 0xffffff);
        /* the poster rides over his head, never smaller than readable */
        var ps = Math.max(sc, 0.78 * k, 0.6), py = hy - 92 * sc - 34 * ps;
        r.hatY = hy - 66 * sc; r.hatX = r.x - 13 * sc;
        r.px = r.x - 13 * sc; r.py = py + Math.sin(B.t * 3 + r.ph) * 2 * k;
        r.poster.setPosition(r.px, r.py).setScale(ps).setAlpha(clamp(r.alpha, 0, 1)).setDepth(20 + r.z);
        var fs = Math.round(27 * ps);
        if (r.fs !== fs) { r.fs = fs; r.label.setFontSize(fs); r.stamp.setFontSize(Math.round(40 * ps)); }   /* text is redrawn only when its size changes */
        r.label.setPosition(r.px - 1.5 * ps, r.py + 4 * ps).setAlpha(clamp(r.alpha, 0, 1)).setDepth(21 + r.z);
        r.stamp.setPosition(r.px - 1.5 * ps, r.py + 3 * ps).setAlpha(clamp(r.alpha, 0, 1) * 0.9).setDepth(22 + r.z);
      });
    },

    /* the outlaws level their guns: a red dotted line shows the aim, then the shot (or two) */
    chargeVolley: function (s, ms) {
      var B = this.cg, P = B.P, k = B.k, self = this;
      if (this._between) return;
      var aiming = B.riders.filter(function (r) { return r.aim; });
      aiming.forEach(function (r) {
        var A = r.aim;
        if (r.state !== "ride" && r.state !== "dead") { r.aim = null; return; }
        A.t += ms;
        if (A.t < A.warn) {
          /* he tracks you while he aims, leading you from 21 */
          var lead = P.lead * (A.flight || 1);
          A.tz = clamp(B.rz + B.rvz * lead, 0, 1); A.tx = B.rx;
        } else if (A.fired < A.burst && A.t >= A.warn + A.fired * 200) {
          self.chargeEnemyShot(r, A.tz, A.tx);
          A.fired += 1;
        } else if (A.fired >= A.burst && A.t >= A.warn + A.burst * 200 + 150) r.aim = null;
      });
      B.volleyCd -= ms;
      if (B.volleyCd > 0) return;
      B.volleyCd = P.fireMs * rnd(0.85, 1.15);
      var ready = B.riders.filter(function (r) { return (r.state === "ride" || r.state === "dead") && !r.aim && r.x > B.rx + 150 * k && r.x < self.W - 20 * k; });
      shuffle(ready).slice(0, P.shooters).forEach(function (r, j) { self.chargeAim(r, j * 160); });
    },
    chargeAim: function (r, delay) {
      var B = this.cg, P = B.P, k = B.k;
      var dist = Math.max(80 * k, r.x - B.rx);
      r.aim = { t: -(delay || 0), warn: P.warnMs, fired: 0, burst: P.burst, tz: B.rz, tx: B.rx, flight: dist / (P.bulletSpd * k) };
      if (!B.toldAim) { B.toldAim = true; this.toast("An outlaw is aiming at you! Ride out of his red dotted line before he fires.", 3400); }
      try { var R = window.SolRealms; if (R && R.blip) R.blip(620, 820, 0.08, "triangle", 0.018); } catch (e) {}
      return r.aim;
    },
    chargeEnemyShot: function (r, tz, tx) {
      var B = this.cg, P = B.P, k = B.k, sc = this.chargeS(r.z);
      var mx = r.x - (SADDLE.x - HGX) * sc - AIM_MZ.x * sc;
      var dx = Math.max(40 * k, mx - tx), vx = -P.bulletSpd * k;
      var b = { x: mx, z: r.z, vx: vx, vz: (tz - r.z) * (-vx) / dx, from: r, t: 0, near: false };
      B.foes.push(b);
      r.mflash = 80;
      try { var R = window.SolRealms; if (R && R.blip) { R.hiss(0.14, 900, 0.035); R.blip(150, 50, 0.12, "square", 0.02); } } catch (e) {}
      return b;
    },
    chargeFoes: function (s, ms) {
      var B = this.cg, k = B.k, self = this;
      B.foes = B.foes.filter(function (b) {
        if (b.dead) return false;
        var x0 = b.x;
        b.x += b.vx * s; b.z += b.vz * s; b.t += s;
        if (b.z < -0.05 || b.z > 1.05) b.vz = 0;
        var sc = self.chargeS(B.rz);
        /* crossing the marshal */
        if (x0 >= B.rx - 18 * sc && b.x <= B.rx + 30 * sc && !b.done) {
          var dz = Math.abs(b.z - B.rz);
          if (dz < 0.055) {
            b.done = true;
            self.chargeDust(B.rx, B.zy(B.rz), sc, 6);
            self.loseLife("hit", "SHOT BY AN OUTLAW");
            return false;
          } else if (dz < 0.16 && !b.near) {
            b.near = true;
            try { var R = window.SolRealms; if (R && R.blip) R.blip(2600, 700, 0.2, "sine", 0.016); } catch (e) {}
          }
        }
        if (b.x < -30) { self.chargeDust(b.x + 40, B.zy(clamp(b.z, 0, 1)), self.chargeS(clamp(b.z, 0, 1)), 2); return false; }
        return true;
      });
    },

    /* rocks and gopher holes stream at you through the grass (11 on) */
    chargeRocks: function (s, ms) {
      var B = this.cg, P = B.P, k = B.k, self = this, ground = P.ground * k;
      if (!this._between) {
        B.rockCd -= s;
        if (B.rockCd <= 0) {
          B.rockCd = 1 / P.rocks * rnd(0.7, 1.3);
          this.chargeAddRock(Math.random() < 0.5 ? "rock" : "hole", Math.random());
        }
      }
      B.rocks = B.rocks.filter(function (o) {
        var sc = self.chargeS(o.z);
        o.x -= ground * (sc / k) * s;
        o.spr.setPosition(o.x, B.zy(o.z) + 4 * sc).setScale(sc).setDepth(5 + o.z - 0.01);
        if (!o.done && Math.abs(o.z - B.rz) < 0.05 && Math.abs(o.x - (B.rx + 26 * sc)) < 30 * sc) {
          o.done = true;
          self.chargeDust(o.x, B.zy(o.z), sc, 8);
          self.loseLife("hit", o.kind === "rock" ? "YOUR HORSE STUMBLED ON A ROCK" : "YOUR HORSE STEPPED IN A GOPHER HOLE");
          if (!B.toldRock) { B.toldRock = true; self.toast("Your horse stumbled! Steer around the rocks and gopher holes in the grass.", 3000); }
        }
        if (o.x < -60) { o.spr.destroy(); return false; }
        return true;
      });
    },
    chargeAddRock: function (kind, z) {
      var B = this.cg, o = { kind: kind, z: clamp(z, 0, 1), x: this.W + 40 * B.k, done: false };
      o.spr = this.add.image(o.x, B.zy(o.z), kind === "rock" ? "md-charge-rock" : "md-charge-hole").setOrigin(0.5, 1);
      B.rocks.push(o);
      return o;
    },
    /* the rifleman on the ridge (71 on): a glint, a ring of dust where the shot will land, then the shot */
    chargeRidge: function (s, ms) {
      var B = this.cg, P = B.P, k = B.k, self = this;
      if (!this._between) {
        B.ridgeCd -= s;
        if (B.ridgeCd <= 0) { B.ridgeCd = 1 / P.ridge * rnd(0.75, 1.25); this.chargeSnipe(B.rx, B.rz); }
      }
      B.glints = B.glints.filter(function (g) {
        g.t += ms;
        if (!g.fired && g.t >= g.warn) {
          g.fired = true;
          self.chargeDust(g.x, B.zy(g.z), self.chargeS(g.z), 9);
          try { var R = window.SolRealms; if (R && R.blip) { R.hiss(0.3, 600, 0.05); R.blip(110, 40, 0.3, "square", 0.025); } } catch (e) {}
          var sc = self.chargeS(B.rz);
          if (Math.abs(B.rz - g.z) < 0.075 && Math.abs(B.rx - g.x) < 52 * sc) self.loseLife("hit", "A RIFLE SHOT FROM THE RIDGE");
          if (!B.toldRidge) { B.toldRidge = true; self.toast("A rifleman on the ridge! When the ring of dust shows, ride out of it.", 3200); }
        }
        return g.t < g.warn + 500;
      });
    },
    chargeSnipe: function (x, z) {
      var B = this.cg, P = B.P;
      var g = { gx: this.W * rnd(0.5, 0.95), gy: B.yH - rnd(6, 20) * B.k, x: x, z: z, t: 0, warn: Math.max(700, P.warnMs + 450), fired: false };
      B.glints.push(g);
      return g;
    },

    chargeDust: function (x, y, sc, n) {
      var B = this.cg;
      for (var i = 0; i < (n || 6); i++) B.puffs.push({ x: x + rnd(-24, 24) * sc, y: y - rnd(0, 10) * sc, r: rnd(6, 13) * sc, vx: rnd(-80, -20) * sc, vy: rnd(-30, -6) * sc, t: 0, life: rnd(0.5, 0.9) });
    },
    chargeHooves: function () {
      try {
        var R = window.SolRealms; if (!R || !R.blip) return;
        R.blip(95, 55, 0.06, "triangle", 0.03); R.blip(85, 50, 0.06, "triangle", 0.026, 0.07); R.blip(100, 55, 0.07, "triangle", 0.032, 0.16);
      } catch (e) {}
    },
    /* the cavalry call at the start of every charge */
    chargeBugle: function () {
      try {
        var R = window.SolRealms; if (!R || !R.blip) return;
        [[392, 0, 0.13], [523, 0.15, 0.13], [659, 0.3, 0.13], [784, 0.45, 0.42]].forEach(function (q) { R.blip(q[0], q[0] * 1.002, q[2], "triangle", 0.035, q[1]); R.blip(q[0] * 2, q[0] * 2, q[2], "sine", 0.01, q[1]); });
      } catch (e) {}
    },

    chargeDraw: function (s) {
      var B = this.cg, P = B.P, k = B.k, self = this, g = B.groundG, fx = B.fxG, W = this.W;
      g.clear(); fx.clear(); B.uiG.clear();
      /* the marshal on his horse */
      var sc = this.chargeS(B.rz), y = B.zy(B.rz), f = B.frame, b = BOB[f];
      B.horse.setTexture("md-charge-h-bay-R-" + f).setPosition(B.rx, y).setScale(sc).setDepth(5 + B.rz);
      var hipX = B.rx + (SADDLE.x - HGX) * sc, hipY = y + (SADDLE.y - HGY + b) * sc;
      B.rider.setPosition(hipX, hipY).setScale(sc).setDepth(5 + B.rz + 0.001);
      this.blink(B.horse); this.blink(B.rider);
      if (this.player) this.player.setPosition(B.rx, y - 120 * sc);
      /* shadows on the grass */
      g.fillStyle(0x3a2208, 0.26);
      g.fillEllipse(B.rx - 4 * sc, y + 2 * sc, 112 * sc, 14 * sc);
      B.riders.forEach(function (r) {
        if (!r.horse || !r.horse.visible || r.alpha <= 0) return;
        var rs = self.chargeS(r.z); g.fillStyle(0x3a2208, 0.24 * clamp(r.alpha, 0, 1)); g.fillEllipse(r.x + 4 * rs, B.zy(r.z) + 2 * rs, 112 * rs, 14 * rs);
      });
      B.rocks.forEach(function (o) { var rs = self.chargeS(o.z); g.fillStyle(0x3a2208, 0.2); g.fillEllipse(o.x + 3 * rs, B.zy(o.z) + 3 * rs, 56 * rs, 8 * rs); });
      /* the line of fire: dots on the grass from the marshal's guns along his depth; the rider in your sights lights up */
      B.sights = -1;
      var inSights = null;
      B.riders.forEach(function (r, i) {
        if ((r.state !== "ride" && r.state !== "dead") || r.x < B.rx + 40 * k || r.x > W - 6 * k) return;
        if (Math.abs(r.z - B.rz) <= P.hitZ + 0.02 && (!inSights || r.x < inSights.x)) { inSights = r; B.sights = i; }
      });
      var lit = inSights && P.glow && inSights.state === "ride", dotC = lit ? 0xfff0a0 : 0xfff4dc, x;
      var x1 = inSights ? inSights.x - 30 * self.chargeS(inSights.z) : W;
      for (x = B.rx + 70 * sc; x < x1; x += 16 * k) {
        var t = (x - B.rx) / Math.max(1, W - B.rx);
        g.fillStyle(dotC, (lit ? 0.85 : 0.55) * (1 - t * 0.5)); g.fillCircle(x, y + 1 * sc, (lit ? 2.6 : 2) * k * (1 - t * 0.3));
      }
      B.riders.forEach(function (r, i) {
        if (!r.poster || !r.poster.visible) return;
        var ps = r.poster.scaleX, on = lit && inSights === r;
        /* a cord from the poster down to its outlaw's hat, so it is clear whose poster it is */
        var pb = r.py + (POSTER_H / 2 - 4) * ps, al = clamp(r.alpha, 0, 1);
        fx.lineStyle(Math.max(1.2, 1.8 * ps), 0x2a1608, 0.75 * al); fx.lineBetween(r.px - 1.5 * ps, pb, r.hatX, r.hatY);
        fx.lineStyle(Math.max(0.8, 1 * ps), 0xf0dca8, 0.8 * al); fx.lineBetween(r.px - 1.5 * ps, pb, r.hatX, r.hatY);
        if (on) {
          fx.lineStyle(3.2 * k, 0xffe066, 0.95); fx.strokeRect(r.px - POSTER_W / 2 * ps - 3 * k, r.py - POSTER_H / 2 * ps - 3 * k, POSTER_W * ps + 3 * k, POSTER_H * ps + 3 * k);
          fx.lineStyle(1.5 * k, 0xffffff, 0.6 + 0.4 * Math.sin(B.t * 10)); fx.strokeRect(r.px - POSTER_W / 2 * ps - 6 * k, r.py - POSTER_H / 2 * ps - 6 * k, POSTER_W * ps + 9 * k, POSTER_H * ps + 9 * k);
        }
        r.poster.setTint(r.state === "dead" ? 0xb0a090 : on ? 0xfff6d0 : 0xffffff);
      });
      /* the outlaws' aim: the red dotted line on the grass, the glint of the levelled gun */
      B.riders.forEach(function (r) {
        var A = r.aim;
        if (!A || (r.state !== "ride" && r.state !== "dead")) return;
        var rs = self.chargeS(r.z), mx = r.x - (SADDLE.x - HGX) * rs - AIM_MZ.x * rs, my = B.zy(r.z) + (SADDLE.y - HGY) * rs + AIM_MZ.y * rs;
        if (A.t >= 0 && A.t < A.warn + A.burst * 200) {
          var pulse = 0.55 + 0.45 * Math.sin(B.t * 16), x0 = r.x - 40 * rs, z0 = r.z, n = 26, j;
          var x2 = Math.min(x0 - 10, A.tx - 120 * k);
          for (j = 0; j <= n; j++) {
            var u = j / n, xx = x0 + (x2 - x0) * u, zz = z0 + (A.tz - z0) * (xx - x0) / Math.min(-1, A.tx - x0);
            if (xx < 0) break;
            var ss = self.chargeS(clamp(zz, 0, 1));
            g.fillStyle(0xd8281a, (0.5 + 0.4 * pulse) * (A.t < A.warn ? 1 : 0.5)); g.fillCircle(xx, B.zy(clamp(zz, 0, 1)) + 1 * ss, 2.6 * ss / B.k * k);
          }
          /* a cross on the grass where he aims */
          var tsy = B.zy(A.tz), tss = self.chargeS(A.tz);
          g.lineStyle(2.4 * tss, 0xd8281a, 0.8 * pulse);
          g.strokeEllipse(A.tx, tsy + 1, 52 * tss, 12 * tss);
          if (A.t < A.warn) { fx.fillStyle(0xfff4c0, 0.6 + 0.4 * pulse); fx.fillCircle(mx, my, (3 + 3 * pulse) * rs); }
        }
        if (r.mflash > 0) { r.mflash -= s * 1000; fx.fillStyle(0xffe8a0, 0.95); fx.fillCircle(mx - 5 * rs, my, 9 * rs); fx.fillStyle(0xffffff, 1); fx.fillCircle(mx - 3 * rs, my, 4 * rs); }
      });
      /* the rifleman's glint on the ridge, and his ring of dust */
      B.glints.forEach(function (gl) {
        var gs = self.chargeS(gl.z), gy = B.zy(gl.z), u = clamp(gl.t / gl.warn, 0, 1);
        if (!gl.fired) {
          fx.fillStyle(0xfff8d8, 0.5 + 0.5 * Math.abs(Math.sin(B.t * 14))); fx.fillCircle(gl.gx, gl.gy, (3 + 3 * Math.abs(Math.sin(B.t * 14))) * k);
          fx.lineStyle(1.4 * k, 0xffffff, 0.7); fx.lineBetween(gl.gx - 9 * k, gl.gy, gl.gx + 9 * k, gl.gy); fx.lineBetween(gl.gx, gl.gy - 9 * k, gl.gx, gl.gy + 9 * k);
          g.lineStyle(3 * gs, 0xa0281a, 0.5 + 0.4 * u); g.strokeEllipse(gl.x, gy + 2, 104 * gs * (1.3 - u * 0.3), 26 * gs * (1.3 - u * 0.3));
          g.fillStyle(0xa0281a, 0.12 + 0.18 * u); g.fillEllipse(gl.x, gy + 2, 104 * gs, 26 * gs);
        } else {
          var v = clamp((gl.t - gl.warn) / 500, 0, 1);
          fx.lineStyle(2 * k, 0xfff0c0, 1 - v); fx.lineBetween(gl.gx, gl.gy, gl.x, gy - 8 * gs);
        }
      });
      /* the reins, from his teeth to the bit */
      var mX = hipX + MOUTH.x * sc, mY = hipY + MOUTH.y * sc, bx = B.rx + (BIT.x - HGX) * sc, by = y + (BIT.y - HGY + b) * sc;
      fx.lineStyle(2.2 * sc, 0x9a6a3a, B.horse.alpha); fx.beginPath(); fx.moveTo(mX, mY); fx.lineTo((mX + bx) / 2 + 4 * sc, (mY + by) / 2 + 9 * sc); fx.lineTo(bx, by); fx.strokePath();
      fx.lineStyle(1.8 * sc, 0x7a4a22, B.horse.alpha); fx.beginPath(); fx.moveTo(mX, mY + 1.5 * sc); fx.lineTo((mX + bx) / 2, (mY + by) / 2 + 13 * sc); fx.lineTo(bx - 2 * sc, by + 1 * sc); fx.strokePath();
      /* both guns' muzzle flash */
      if (B.flash > 0) {
        B.flash -= s * 1000;
        [GUN_N, GUN_F].forEach(function (G) { var gx = hipX + G.x * sc, gy = hipY + G.y * sc; fx.fillStyle(0xffd070, 0.9); fx.fillCircle(gx + 6 * sc, gy, 10 * sc); fx.fillStyle(0xffffff, 1); fx.fillCircle(gx + 4 * sc, gy, 4.5 * sc); });
      }
      /* the marshal's bullets: bright streaks flying right */
      B.shots.forEach(function (o) {
        var os = self.chargeS(o.z), oy = B.zy(o.z) - SHOT_H * os - (o.gun ? 12 * os : 0);
        fx.lineStyle(3 * os, 0xffe8a0, 0.45); fx.lineBetween(o.x - 34 * os, oy, o.x, oy);
        fx.fillStyle(0xfffbe8, 1); fx.fillCircle(o.x, oy, 2.6 * os);
      });
      /* their bullets: hot red-orange streaks flying left */
      B.foes.forEach(function (o) {
        var z = clamp(o.z, 0, 1), os = self.chargeS(z), oy = B.zy(z) - (SHOT_H - 2) * os;
        fx.lineStyle(4 * os, 0xff7a3a, 0.5); fx.lineBetween(o.x, oy, o.x + 36 * os, oy - o.vz * 36 * os / Math.max(1, -o.vx) * (B.yNear - B.yFar));
        fx.fillStyle(0xfff0d0, 1); fx.fillCircle(o.x, oy, 3 * os);
        fx.lineStyle(1.2 * os, 0x6a1a08, 0.9); fx.strokeCircle(o.x, oy, 3.6 * os);
      });
      /* dust from the hooves */
      B.dustT = (B.dustT || 0) + s;
      if (B.dustT > 0.09) {
        B.dustT = 0;
        B.puffs.push({ x: B.rx - 40 * sc, y: y - 3 * sc, r: rnd(5, 10) * sc, vx: -P.ground * k * 0.5 * (sc / k), vy: -rnd(4, 18) * sc, t: 0, life: 0.7 });
        B.riders.forEach(function (r) {
          if (r.state !== "ride" && r.state !== "dead" && !(r.state === "found" && r.bolt)) return;
          if (Math.random() < 0.6) { var rs = self.chargeS(r.z); B.puffs.push({ x: r.x + 40 * rs, y: B.zy(r.z) - 3 * rs, r: rnd(5, 10) * rs, vx: 20 * rs, vy: -rnd(4, 18) * rs, t: 0, life: 0.6 }); }
        });
      }
      B.puffs = B.puffs.filter(function (d) {
        d.t += s; d.x += d.vx * s; d.y += d.vy * s; d.r += 14 * k * s;
        var a = 0.32 * (1 - d.t / d.life);
        if (a <= 0) return false;
        g.fillStyle(0xe6cf98, a); g.fillCircle(d.x, d.y, d.r);
        return true;
      });
      if (B.puffs.length > 220) B.puffs.splice(0, B.puffs.length - 220);
      /* the shots left in both guns (31 on) */
      if (P.reload) {
        var ux = 14 * k + B.txAmmo.width + 10 * k, uy = B.ammoY, i2;
        for (i2 = 0; i2 < 12; i2++) {
          var on = B.reloadMs > 0 ? (i2 < Math.floor(12 * (1 - B.reloadMs / P.reload))) : i2 < B.ammo;
          var bx2 = ux + i2 * 9 * k + (i2 >= 6 ? 8 * k : 0);
          B.uiG.fillStyle(0x2a1608, 0.6); B.uiG.fillRoundedRect(bx2 - 1 * k, uy - 8 * k, 7 * k, 17 * k, 2 * k);
          B.uiG.fillStyle(on ? 0xd8a840 : 0x5a4a30, on ? 1 : 0.6); B.uiG.fillRoundedRect(bx2, uy - 7 * k, 5 * k, 15 * k, { tl: 2.5 * k, tr: 2.5 * k, bl: 0, br: 0 });
        }
        var txt = B.reloadMs > 0 ? "RELOADING" : "SHOTS";
        if (B.txAmmo.text !== txt) B.txAmmo.setText(txt).setColor(B.reloadMs > 0 ? "#ffb08a" : "#f6e8c4");
      }
    },

    /* a right answer: the rest of the gang scatters, the shots in the air vanish; a new line rides in with the next question */
    clear_charge: function () {
      var B = this.cg;
      B.riders.forEach(function (r) { if (r.state === "ride" || r.state === "dead" || r.state === "gone") { if (r.state === "gone") r.alpha = 0; r.state = "flee"; r.aim = null; } });
      B.foes = []; B.shots = []; B.glints = [];
      B.rocks.forEach(function (o) { o.done = true; });
    }
  });
})();
