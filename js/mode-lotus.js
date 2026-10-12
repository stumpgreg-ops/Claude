/* SOL Labyrinth v5.18.3 — the Odyssey mode "lotus": The Lotus-Eaters (Odyssey, Book 9).
 *
 * After the storm Odysseus's ships reach the land of the Lotus-Eaters. He sends three scouts inland; the
 * friendly Lotus-Eaters give them the honey-sweet lotus, and whoever eats it forgets home and wants to stay
 * forever. Odysseus drags the weeping men back to the ships, ties them under the rowing benches and orders
 * everyone aboard before anyone else tastes the lotus.
 *
 * Top-down (three-quarter) view of a green-gold meadow; the beach and the black ships are on the right.
 * Dazed crewmen wander among the lotus bushes, each holding up a clay tablet with a letter on it. Odysseus
 * walks up to one and takes hold of him (Space, the GRAB button, a click or a tap):
 *   the RIGHT letter  he follows on a rope, slowly, pulling back toward the lotus; lead him onto the beach
 *                     by the ships and that answers (answerPick). Space again lets go.
 *   a WRONG letter    "I will stay here forever!": a life, and that letter is crossed out on every man.
 * A Select TWO question needs both right men brought to the ships (the first one is tied aboard, ticked).
 * The friendly Lotus-Eaters wander and come to offer the lotus: touching one (or, from level 21, walking
 * through a drift of lotus petals) makes Odysseus forget for a moment: he walks slowly and unsteadily and the
 * meadow goes pale and dreamy. No life. From level 31 a Lotus-Eater who comes close to the man you lead lures
 * him away (a red ring first): catch him again. More men from 41, the wind turns the drifts from 81.
 * lotusParams(n) is the one difficulty curve (also on the def as `params`).
 *
 * Loaded after js/modes.js; SolModes.extend adds the MODES entry and the scene methods below. Only the
 * Odyssey build offers it (game.js GAME_MODE_DEFS ody: true, SolModes.ODY_ROT); the file loads in every build.
 * Art: canvas textures drawn once (keys md-lotus-*); the meadow is drawn again only when the canvas is resized.
 */
(function () {
  "use strict";
  var M = window.SolModes;
  if (!M || !M.extend || !M.lib) return;
  var lib = M.lib, clamp = lib.clamp, rnd = lib.rnd, dist = lib.dist, shuffle = lib.shuffle, canvasTex = lib.canvasTex, ST = lib.ST;
  var TAU = Math.PI * 2, SERIF = "Georgia, 'Palatino Linotype', serif";
  var C = { terra: "#d9772b", ochre: "#e8b04a", glaze: "#140c0a", wine: "#3a0f2a", blue: "#1e5f8c", foam: "#9fd3d6", bone: "#efe6d2",
    skin: "#d9a066", skinDk: "#a8703e", hair: "#2a1a12", bronze: "#c8902a", crest: "#c0341e",
    robe: "#7a2e5c", robeDk: "#4e1a3a", pink: "#f7b6d2", pinkDk: "#c9588a", leaf: "#3f6b2a", leafLt: "#79a442" };

  /* texture sizes; each figure's origin is at its feet */
  var CREW_W = 56, CREW_H = 92, CREW_FY = 87, TAB_Y = 17;
  var ODY_W = 56, ODY_H = 80, ODY_FY = 76;
  var EAT_W = 64, EAT_H = 88, EAT_FY = 84;
  var PL_W = 100, PL_H = 86, PL_FY = 80;
  var ODY_SP = 205;                 /* Odysseus's pace, px/s at 620 px high */
  var GRAB_R = 40, TOUCH_R = 26, LEASH = 34, SEP = 46;

  /* ── difficulty: one curve, a little harder every level and never easier in any way ── */
  function lotusParams(n) {
    n = clamp(Math.floor(Number(n) || 1), 1, 100);
    var late = n >= 91 ? 1.08 : 1;
    return {
      extra: n >= 41 ? Math.min(3, 1 + Math.floor((n - 41) / 20)) : 0,          /* dazed men beyond one per letter: 1 at 41, 2 at 61, 3 at 81 */
      wanderSp: (24 + n * 0.42) * late,                                          /* how fast the dazed men wander, px/s */
      leadK: 0.72 - n * 0.0022,                                                  /* Odysseus's pace while he leads a man (0.69 at 12, 0.5 at 99) */
      pull: 6 + n * 0.42,                                                        /* the man's pull back toward the lotus, px/s */
      eaters: Math.min(4, 1 + Math.floor((n - 1) / 25)),                         /* friendly Lotus-Eaters: 1, 2 at 26, 3 at 51, 4 at 76 */
      eaterSp: (28 + n * 0.5) * late,
      seek: Math.min(0.8, 0.12 + n * 0.0068),                                    /* how often a Lotus-Eater walks over to offer you the lotus */
      eaterCd: Math.max(1800, 4200 - n * 24),                                    /* ms a Lotus-Eater stays away after offering */
      forgetMs: 1500 + n * 15,                                                   /* how long the lotus makes you forget */
      forgetK: 0.55 - n * 0.0018,                                                /* your pace while you forget */
      clouds: n >= 21 ? Math.min(5, 1 + Math.floor((n - 21) / 16)) : 0,          /* drifts of lotus petals: 1 at 21 ... 5 at 85 */
      cloudR: n >= 21 ? 40 + (n - 21) * 0.4 : 0,
      cloudSp: n >= 21 ? (16 + (n - 21) * 0.35) * late : 0,
      lureR: n >= 31 ? 64 + (n - 31) * 0.5 : 0,                                  /* a Lotus-Eater this close to the man you lead lures him */
      lureMs: n >= 31 ? Math.max(380, 1400 - (n - 31) * 14) : 1e9,               /* ... after this long (the red ring) */
      lureSp: n >= 31 ? (40 + (n - 31) * 0.5) * late : 0,                         /* how fast a lured man runs off */
      windEvery: n >= 81 ? Math.max(2500, 7000 - (n - 81) * 200) : 1e9           /* the wind turns the petal drifts */
    };
  }

  /* ── art ── */
  function ell(c, x, y, rx, ry, rot) { c.beginPath(); c.ellipse(x, y, rx, ry, rot || 0, 0, TAU); }
  function circ(c, x, y, r) { c.beginPath(); c.arc(x, y, r, 0, TAU); }
  function seeded(seed) { var s = seed % 233280; return function () { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }
  function limb(c, x0, y0, x1, y1, w, col) {
    c.lineCap = "round";
    c.strokeStyle = C.glaze; c.lineWidth = w + 2.4; c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke();
    c.strokeStyle = col; c.lineWidth = w; c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke();
  }
  function poly(c, pts) { c.beginPath(); for (var i = 0; i < pts.length; i++) c[i ? "lineTo" : "moveTo"](pts[i][0], pts[i][1]); c.closePath(); }
  /* a little five-petalled lotus flower */
  function flower(c, x, y, r, petal, edge) {
    c.fillStyle = petal; c.strokeStyle = edge; c.lineWidth = Math.max(0.8, r * 0.18);
    for (var i = 0; i < 5; i++) { var a = i / 5 * TAU - Math.PI / 2; ell(c, x + Math.cos(a) * r * 0.62, y + Math.sin(a) * r * 0.62, r * 0.5, r * 0.32, a); c.fill(); c.stroke(); }
    c.fillStyle = C.ochre; circ(c, x, y, r * 0.3); c.fill();
  }
  /* a dazed crewman holding a clay tablet up over his head (the letter is a text drawn on top) */
  function drawCrew(frame) {
    return function (c) {
      var cx = CREW_W / 2, st = frame ? 3 : -3;
      c.lineJoin = "round";
      c.fillStyle = "rgba(10,6,4,0.32)"; ell(c, cx, CREW_FY, 14, 4.5); c.fill();
      limb(c, cx - 4, 70, cx - 5 + st, 84, 3.4, C.skin); limb(c, cx + 4, 70, cx + 5 - st, 84, 3.4, C.skin);
      c.fillStyle = "#5a3418"; ell(c, cx - 5 + st, 85, 3.6, 2.2); c.fill(); ell(c, cx + 5 - st, 85, 3.6, 2.2); c.fill();
      /* tunic: bone, a terracotta hem, an ochre belt */
      c.fillStyle = C.bone; c.strokeStyle = C.glaze; c.lineWidth = 1.6;
      poly(c, [[cx - 9, 49], [cx + 9, 49], [cx + 12, 73], [cx - 12, 73]]); c.fill(); c.stroke();
      c.save(); poly(c, [[cx - 9, 49], [cx + 9, 49], [cx + 12, 73], [cx - 12, 73]]); c.clip();
      c.fillStyle = C.terra; c.fillRect(cx - 14, 67, 28, 7);
      c.fillStyle = C.glaze; for (var k = -10; k < 12; k += 5) c.fillRect(cx + k, 69, 2.4, 2.4);
      c.restore();
      c.strokeStyle = C.ochre; c.lineWidth = 2.2; c.beginPath(); c.moveTo(cx - 10, 59); c.lineTo(cx + 10, 59); c.stroke();
      /* the tablet */
      c.fillStyle = C.terra; c.strokeStyle = C.glaze; c.lineWidth = 2; circ(c, cx, TAB_Y, 16.5); c.fill(); c.stroke();
      c.fillStyle = C.bone; circ(c, cx, TAB_Y, 13.6); c.fill();
      /* arms raised, hands on the rim */
      limb(c, cx - 8, 51, cx - 13, 30, 3.6, C.skin); limb(c, cx + 8, 51, cx + 13, 30, 3.6, C.skin);
      c.fillStyle = C.skin; c.strokeStyle = C.glaze; c.lineWidth = 1.3; circ(c, cx - 13, 29, 3); c.fill(); c.stroke(); circ(c, cx + 13, 29, 3); c.fill(); c.stroke();
      /* head: dark curls, sleepy closed eyes, a dreamy smile, a lotus flower tucked behind one ear */
      c.fillStyle = C.skin; c.strokeStyle = C.glaze; c.lineWidth = 1.6; circ(c, cx, 42, 7.4); c.fill(); c.stroke();
      c.fillStyle = C.hair; c.beginPath(); c.arc(cx, 41, 7.6, Math.PI * 1.05, Math.PI * 1.95); c.fill();
      circ(c, cx - 6.5, 38.5, 2.6); c.fill(); circ(c, cx + 6.5, 38.5, 2.6); c.fill();
      c.strokeStyle = C.glaze; c.lineWidth = 1.2;
      c.beginPath(); c.arc(cx - 3, 42.4, 1.7, 0.2, Math.PI - 0.2); c.stroke();
      c.beginPath(); c.arc(cx + 3, 42.4, 1.7, 0.2, Math.PI - 0.2); c.stroke();
      c.beginPath(); c.arc(cx, 45, 2.4, 0.3, Math.PI - 0.3); c.stroke();
      flower(c, cx + 7.5, 36.5, 4.2, C.pink, C.pinkDk);
    };
  }
  /* Odysseus: bronze helmet with a red crest, bone tunic, terracotta cloak, bronze greaves */
  function drawOdy(frame) {
    return function (c) {
      var cx = ODY_W / 2, st = frame ? 3.4 : -3.4;
      c.lineJoin = "round";
      c.fillStyle = "rgba(10,6,4,0.34)"; ell(c, cx, ODY_FY, 15, 5); c.fill();
      c.fillStyle = C.terra; c.strokeStyle = C.glaze; c.lineWidth = 1.6;
      poly(c, [[cx - 10, 39], [cx + 10, 39], [cx + 15, 66], [cx - 15, 66]]); c.fill(); c.stroke();
      limb(c, cx - 4, 60, cx - 5 + st, 73, 3.8, C.skin); limb(c, cx + 4, 60, cx + 5 - st, 73, 3.8, C.skin);
      limb(c, cx - 5 + st * 0.6, 66, cx - 5 + st, 72, 3.8, C.bronze); limb(c, cx + 5 - st * 0.6, 66, cx + 5 - st, 72, 3.8, C.bronze);
      c.fillStyle = "#5a3418"; ell(c, cx - 5 + st, 74, 3.8, 2.2); c.fill(); ell(c, cx + 5 - st, 74, 3.8, 2.2); c.fill();
      c.fillStyle = C.bone; c.strokeStyle = C.glaze; c.lineWidth = 1.6;
      poly(c, [[cx - 8.5, 39], [cx + 8.5, 39], [cx + 10, 61], [cx - 10, 61]]); c.fill(); c.stroke();
      c.fillStyle = C.glaze; c.fillRect(cx - 10, 56, 20, 2.2);
      c.strokeStyle = C.bronze; c.lineWidth = 2.6; c.beginPath(); c.moveTo(cx - 9, 48); c.lineTo(cx + 9, 48); c.stroke();
      /* the sword at his hip */
      c.strokeStyle = C.glaze; c.lineWidth = 2.4; c.beginPath(); c.moveTo(cx - 9, 48); c.lineTo(cx - 15, 60); c.stroke();
      limb(c, cx - 8, 41, cx - 13, 55, 3.6, C.skin); limb(c, cx + 8, 41, cx + 13, 55, 3.6, C.skin);
      c.fillStyle = C.skin; c.strokeStyle = C.glaze; c.lineWidth = 1.2; circ(c, cx - 13, 56, 2.8); c.fill(); c.stroke(); circ(c, cx + 13, 56, 2.8); c.fill(); c.stroke();
      /* head, beard, helmet, crest */
      c.lineWidth = 1.6; circ(c, cx, 31, 7.4); c.fill(); c.stroke();
      c.fillStyle = C.hair; c.beginPath(); c.moveTo(cx - 6.5, 33); c.quadraticCurveTo(cx, 42, cx + 6.5, 33); c.quadraticCurveTo(cx, 37, cx - 6.5, 33); c.fill();
      c.fillStyle = C.glaze; circ(c, cx - 2.8, 31, 1.1); c.fill(); circ(c, cx + 2.8, 31, 1.1); c.fill();
      c.fillStyle = C.bronze; c.strokeStyle = C.glaze; c.lineWidth = 1.6;
      c.beginPath(); c.moveTo(cx - 8.4, 33); c.lineTo(cx - 8.4, 27); c.arc(cx, 27.5, 8.4, Math.PI, 0); c.lineTo(cx + 8.4, 33); c.lineTo(cx + 5.6, 33); c.lineTo(cx + 5.6, 28.5); c.lineTo(cx - 5.6, 28.5); c.lineTo(cx - 5.6, 33); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = "rgba(255,230,150,0.6)"; ell(c, cx - 3, 23, 2.4, 1.6); c.fill();
      c.fillStyle = C.crest; c.beginPath(); c.moveTo(cx - 10, 24); c.quadraticCurveTo(cx - 9, 6, cx, 5); c.quadraticCurveTo(cx + 9, 6, cx + 10, 24); c.quadraticCurveTo(cx, 15, cx - 10, 24); c.closePath(); c.fill(); c.stroke();
      c.strokeStyle = "rgba(20,12,10,0.55)"; c.lineWidth = 1;
      for (var i = -3; i <= 3; i++) { c.beginPath(); c.moveTo(cx + i * 2.3, 8 + Math.abs(i) * 1.2); c.lineTo(cx + i * 2.8, 18); c.stroke(); }
    };
  }
  /* a friendly Lotus-Eater: a long wine-dark robe with pink rosettes, a crown of lotus flowers, long hair,
     one hand holding out a big pink lotus flower, the other a bowl of lotus fruit; a soft pink glow */
  function drawEater(frame) {
    return function (c) {
      var cx = EAT_W / 2 - 3, st = frame ? 2.5 : -2.5;
      var g = c.createRadialGradient(cx + 4, 48, 2, cx + 4, 48, 32);
      g.addColorStop(0, "rgba(247,182,210,0.5)"); g.addColorStop(1, "rgba(247,182,210,0)");
      c.fillStyle = g; c.fillRect(0, 10, EAT_W, EAT_H - 10);
      c.lineJoin = "round";
      c.fillStyle = "rgba(10,6,4,0.3)"; ell(c, cx, EAT_FY, 15, 4.5); c.fill();
      c.fillStyle = C.skin; ell(c, cx - 5 + st, 82, 3.6, 2.2); c.fill(); ell(c, cx + 5 - st, 82, 3.6, 2.2); c.fill();
      /* long hair behind */
      c.fillStyle = C.hair; poly(c, [[cx - 8, 30], [cx + 8, 30], [cx + 10, 52], [cx - 10, 52]]); c.fill();
      /* the robe */
      var robe = [[cx - 9, 42], [cx + 9, 42], [cx + 16, 81], [cx - 16, 81]];
      c.fillStyle = C.robe; c.strokeStyle = C.glaze; c.lineWidth = 1.7; poly(c, robe); c.fill(); c.stroke();
      c.save(); poly(c, robe); c.clip();
      c.strokeStyle = C.robeDk; c.lineWidth = 1.4;
      [-6, 0, 6].forEach(function (dx) { c.beginPath(); c.moveTo(cx + dx * 0.6, 46); c.lineTo(cx + dx * 1.5, 80); c.stroke(); });
      c.fillStyle = C.pink; c.fillRect(cx - 18, 73, 36, 8);
      for (var k = -14; k <= 14; k += 7) { c.fillStyle = C.robeDk; circ(c, cx + k, 77, 2); c.fill(); }
      c.restore();
      c.strokeStyle = C.ochre; c.lineWidth = 2; c.beginPath(); c.moveTo(cx - 9, 52); c.lineTo(cx + 9, 52); c.stroke();
      /* the bowl of lotus fruit */
      limb(c, cx - 8, 45, cx - 11, 58, 3.4, C.skin);
      c.fillStyle = C.ochre; c.strokeStyle = C.glaze; c.lineWidth = 1.5;
      c.beginPath(); c.moveTo(cx - 20, 58); c.quadraticCurveTo(cx - 12, 68, cx - 3, 58); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = "#e88a2a"; [[-15, 56.5], [-11, 55.5], [-7, 56.5]].forEach(function (q) { circ(c, cx + q[0], q[1], 2.3); c.fill(); c.stroke(); });
      /* the offered flower */
      limb(c, cx + 8, 45, cx + 19, 38, 3.4, C.skin);
      c.strokeStyle = "#3f6b2a"; c.lineWidth = 2; c.beginPath(); c.moveTo(cx + 19, 38); c.lineTo(cx + 22, 30); c.stroke();
      flower(c, cx + 23, 25, 8.5, C.pink, C.pinkDk);
      /* the head, smiling, eyes closed, a crown of flowers */
      c.fillStyle = C.skin; c.strokeStyle = C.glaze; c.lineWidth = 1.6; circ(c, cx, 33, 7.4); c.fill(); c.stroke();
      c.fillStyle = C.hair; c.beginPath(); c.arc(cx, 32, 7.6, Math.PI, TAU); c.fill();
      c.strokeStyle = C.glaze; c.lineWidth = 1.2;
      c.beginPath(); c.arc(cx - 3, 33.6, 1.6, Math.PI + 0.3, TAU - 0.3); c.stroke();
      c.beginPath(); c.arc(cx + 3, 33.6, 1.6, Math.PI + 0.3, TAU - 0.3); c.stroke();
      c.beginPath(); c.arc(cx, 35.8, 2.6, 0.25, Math.PI - 0.25); c.stroke();
      [-7, -3.5, 0, 3.5, 7].forEach(function (dx, i) { flower(c, cx + dx, 26 + Math.abs(dx) * 0.35, 3.4, i % 2 ? "#ffffff" : C.pink, C.pinkDk); });
    };
  }
  /* a lotus bush: dark leaves, pink-white blossoms and honey-gold fruit */
  function drawPlant(seed) {
    return function (c) {
      var r = seeded(seed), i, cx = PL_W / 2;
      c.fillStyle = "rgba(10,6,4,0.3)"; ell(c, cx, PL_FY, 38, 7); c.fill();
      c.strokeStyle = "#5a3418"; c.lineWidth = 5; c.lineCap = "round";
      c.beginPath(); c.moveTo(cx, PL_FY); c.lineTo(cx, 58); c.moveTo(cx, 66); c.lineTo(cx - 14, 54); c.moveTo(cx, 64); c.lineTo(cx + 15, 52); c.stroke();
      var blobs = [[cx - 21, 52, 17], [cx + 21, 52, 17], [cx, 40, 22], [cx - 11, 28, 15], [cx + 12, 27, 15], [cx, 58, 14]];
      c.fillStyle = C.glaze; blobs.forEach(function (b) { circ(c, b[0], b[1], b[2] + 2); c.fill(); });
      c.fillStyle = C.leaf; blobs.forEach(function (b) { circ(c, b[0], b[1], b[2]); c.fill(); });
      c.fillStyle = C.leafLt;
      for (i = 0; i < 16; i++) { var b = blobs[i % blobs.length]; ell(c, b[0] + (r() - 0.5) * b[2], b[1] + (r() - 0.7) * b[2], 4.5, 2.2, r() * 3); c.fill(); }
      for (i = 0; i < 6; i++) { var bf = blobs[(i + 2) % blobs.length]; c.fillStyle = "#e88a2a"; c.strokeStyle = C.glaze; c.lineWidth = 1.2; circ(c, bf[0] + (r() - 0.5) * bf[2] * 1.2, bf[1] + (r() - 0.5) * bf[2], 3); c.fill(); c.stroke(); }
      for (i = 0; i < 8; i++) { var bb = blobs[i % blobs.length]; flower(c, bb[0] + (r() - 0.5) * bb[2] * 1.3, bb[1] + (r() - 0.5) * bb[2] * 1.1, 5 + r() * 2, i % 3 ? "#fbd8e7" : "#ffffff", C.pinkDk); }
    };
  }
  /* a drift of lotus petals and golden pollen on the wind */
  function drawCloud(c, w, h) {
    var r = seeded(13), i, cx = w / 2, cy = h / 2;
    var g = c.createRadialGradient(cx, cy, 4, cx, cy, w / 2);
    g.addColorStop(0, "rgba(250,205,226,0.62)"); g.addColorStop(0.6, "rgba(247,182,210,0.32)"); g.addColorStop(1, "rgba(247,182,210,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    for (i = 0; i < 30; i++) {
      var a = r() * TAU, d = Math.sqrt(r()) * w * 0.4, x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d;
      c.fillStyle = i % 4 ? C.pink : "#ffffff"; c.strokeStyle = C.pinkDk; c.lineWidth = 0.9;
      ell(c, x, y, 4.5, 2.4, r() * 3); c.fill(); c.stroke();
    }
    c.fillStyle = "rgba(255,214,120,0.9)";
    for (i = 0; i < 26; i++) { var a2 = r() * TAU, d2 = Math.sqrt(r()) * w * 0.42; circ(c, cx + Math.cos(a2) * d2, cy + Math.sin(a2) * d2, 1.2); c.fill(); }
  }
  function drawCross(c, w, h) {
    c.lineCap = "round";
    [[9, C.glaze], [5, "#c0392b"]].forEach(function (q) { c.strokeStyle = q[1]; c.lineWidth = q[0]; c.beginPath(); c.moveTo(9, 9); c.lineTo(w - 9, h - 9); c.moveTo(w - 9, 9); c.lineTo(9, h - 9); c.stroke(); });
  }
  /* the meadow, the beach and the sea, drawn for the canvas size */
  function drawBg(G) {
    return function (c, w, h) {
      var r = seeded(57), i, x, y, k;
      var g = c.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#7d8f3c"); g.addColorStop(1, "#a29d4a");
      c.fillStyle = g; c.fillRect(0, 0, G.sandX + 30, h);
      for (i = 0; i < 260; i++) { x = r() * G.sandX; y = r() * h; c.fillStyle = i % 2 ? "rgba(56,84,28,0.16)" : "rgba(214,196,96,0.16)"; ell(c, x, y, 14 + r() * 44, 7 + r() * 18, r() * 3); c.fill(); }
      for (i = 0; i < 700; i++) {
        x = r() * G.sandX; y = r() * h; c.strokeStyle = i % 3 ? "rgba(52,80,26,0.5)" : "rgba(196,190,96,0.55)"; c.lineWidth = 1.3;
        for (k = -1; k <= 1; k++) { c.beginPath(); c.moveTo(x + k * 2, y); c.lineTo(x + k * 3, y - 4 - r() * 4); c.stroke(); }
      }
      var fc = ["rgba(255,255,255,0.85)", "rgba(247,182,210,0.9)", "rgba(240,200,80,0.9)"];
      for (i = 0; i < 220; i++) { c.fillStyle = fc[i % 3]; circ(c, r() * G.sandX, r() * h, 1.2 + r() * 1.4); c.fill(); }
      /* a trodden path from the ships into the meadow */
      for (i = 0; i < 26; i++) { var u = i / 25; c.fillStyle = "rgba(214,190,130,0.28)"; ell(c, G.sandX - u * G.sandX * 0.7, G.shipY[1] + Math.sin(u * 7) * 26 * G.vs, 26 * G.vs, 12 * G.vs, 0); c.fill(); }
      /* the beach */
      c.fillStyle = "#dcc28a"; c.beginPath(); c.moveTo(G.sandX, 0);
      for (y = 0; y <= h; y += 20) c.lineTo(G.sandX + Math.sin(y * 0.05) * 7, y);
      c.lineTo(G.seaX + 10, h); c.lineTo(G.seaX + 10, 0); c.closePath(); c.fill();
      for (i = 0; i < 260; i++) { c.fillStyle = i % 2 ? "rgba(150,118,70,0.35)" : "rgba(255,244,214,0.5)"; circ(c, G.sandX + r() * (G.seaX - G.sandX), r() * h, 0.8 + r() * 1.2); c.fill(); }
      c.strokeStyle = "rgba(52,80,26,0.7)"; c.lineWidth = 1.4;
      for (y = 6; y < h; y += 14) { x = G.sandX + Math.sin(y * 0.05) * 7; for (k = -1; k <= 1; k++) { c.beginPath(); c.moveTo(x + k * 3, y); c.lineTo(x + k * 5 + 3, y - 6); c.stroke(); } }
      /* wet sand, the sea, the foam */
      c.fillStyle = "#b89c64"; c.fillRect(G.seaX - 10, 0, 14, h);
      var gs = c.createLinearGradient(G.seaX, 0, w, 0);
      gs.addColorStop(0, "#2a78a8"); gs.addColorStop(0.35, C.blue); gs.addColorStop(1, "#123f60");
      c.fillStyle = gs; c.beginPath(); c.moveTo(G.seaX, 0);
      for (y = 0; y <= h; y += 16) c.lineTo(G.seaX + Math.sin(y * 0.07) * 5, y);
      c.lineTo(w, h); c.lineTo(w, 0); c.closePath(); c.fill();
      c.strokeStyle = "rgba(239,230,210,0.85)"; c.lineWidth = 3; c.beginPath();
      for (y = 0; y <= h; y += 16) c[y ? "lineTo" : "moveTo"](G.seaX + Math.sin(y * 0.07) * 5, y); c.stroke();
      for (i = 0; i < 40; i++) {
        x = G.seaX + 14 + r() * (w - G.seaX); y = r() * h; var len = 14 + r() * 30;
        c.strokeStyle = "rgba(159,211,214," + (0.18 + r() * 0.3).toFixed(2) + ")"; c.lineWidth = 1.6;
        c.beginPath(); c.moveTo(x - len / 2, y); c.quadraticCurveTo(x, y - 4, x + len / 2, y); c.stroke();
      }
      /* the vase band along the top: terracotta with a black-glaze meander */
      var bh = G.band;
      c.fillStyle = C.terra; c.fillRect(0, 0, w, bh);
      c.strokeStyle = C.glaze; c.lineWidth = Math.max(1.6, bh * 0.12);
      var s = bh * 0.9;
      for (x = 4; x < w; x += s * 1.3) {
        c.beginPath(); c.moveTo(x, bh * 0.82); c.lineTo(x, bh * 0.18); c.lineTo(x + s * 0.8, bh * 0.18); c.lineTo(x + s * 0.8, bh * 0.62); c.lineTo(x + s * 0.4, bh * 0.62); c.lineTo(x + s * 0.4, bh * 0.4); c.stroke();
      }
      c.fillStyle = C.glaze; c.fillRect(0, bh - 2, w, 2.5);
    };
  }
  function ensureLotusArt(scene) {
    canvasTex(scene, "md-lotus-crew-0", CREW_W, CREW_H, drawCrew(0));
    canvasTex(scene, "md-lotus-crew-1", CREW_W, CREW_H, drawCrew(1));
    canvasTex(scene, "md-lotus-ody-0", ODY_W, ODY_H, drawOdy(0));
    canvasTex(scene, "md-lotus-ody-1", ODY_W, ODY_H, drawOdy(1));
    canvasTex(scene, "md-lotus-eater-0", EAT_W, EAT_H, drawEater(0));
    canvasTex(scene, "md-lotus-eater-1", EAT_W, EAT_H, drawEater(1));
    for (var i = 0; i < 3; i++) canvasTex(scene, "md-lotus-plant-" + i, PL_W, PL_H, drawPlant(31 + i * 47));
    canvasTex(scene, "md-lotus-cloud", 140, 140, drawCloud);
    canvasTex(scene, "md-lotus-x", 40, 40, drawCross);
    canvasTex(scene, "md-lotus-ship", lib.SHIP_W, lib.SHIP_H, lib.drawGalley(0));
  }
  function lsnd(name) {
    var S = window.SolRealms;
    if (!S || !S.blip) return;
    try {
      if (name === "grab") S.blip(330, 470, 0.1, "sine", 0.03);
      else if (name === "letgo") S.blip(460, 300, 0.1, "sine", 0.025);
      else if (name === "refuse") { S.blip(260, 180, 0.25, "triangle", 0.03); S.blip(220, 150, 0.3, "triangle", 0.025, 0.18); }
      else if (name === "dream") { S.blip(880, 660, 0.5, "sine", 0.025); S.blip(660, 440, 0.7, "sine", 0.02, 0.3); }
      else if (name === "board") { S.blip(520, 780, 0.15, "triangle", 0.03); if (S.hiss) S.hiss(0.15, 900, 0.02); }
      else if (name === "lure") S.blip(700, 900, 0.18, "sine", 0.02);
    } catch (e) {}
  }

  var DEF = {
    name: "The Lotus-Eaters", kind: "rescue level", level: "rescue level", act: "GRAB",
    how: "After the storm, Odysseus's ships land on the shore of the Lotus-Eaters. His scouts have eaten the honey-sweet lotus, and now they have forgotten home and want to stay here forever. The dazed men wander among the lotus bushes, and each one holds up a letter. Walk up to the man with the right answer and take hold of him. He will follow you, but slowly, because he keeps pulling back toward the lotus. Lead him onto the beach by the black ships to answer. The Lotus-Eaters are friendly, and that is the danger: they walk over to offer you the lotus. If one touches you, you forget for a moment. You walk slowly and unsteadily until your head clears.",
    rules: "Taking hold of a man with a wrong letter costs a life (\"I will stay here forever!\"), and that letter is crossed out from then on. The lotus never costs a life, but while you forget you are slow, and the man you are leading may get away.",
    keys: "Arrow keys, WASD or the on-screen pad move Odysseus · Space, GRAB, a click or a tap: take hold of the man you are touching (press again to let go). Lead him to the ships on the right.",
    tip: "THE LOTUS-EATERS — take hold of the man with the right letter and lead him back to the ships. Keep away from the Lotus-Eaters.",
    hint1: "Take hold of the man holding the right letter and lead him onto the beach by the ships. The passage stays in the side panel.",
    hint2: "This question has two right letters. Bring both men back to the ships, one at a time.",
    news: ["",
      "The Lotus-Eaters come over to offer you the lotus more often, and the men pull back toward it harder.",
      "Drifts of lotus petals blow across the meadow. Walking through one makes you forget too.",
      "A Lotus-Eater can lure away the man you are leading. When a red ring shows around him, walk him away from her fast, or you will have to catch him again.",
      "More dazed men wander among the lotus, and they wander faster.",
      "Thicker drifts of petals, and the lotus makes you forget for longer.",
      "The men pull back harder, so leading them is slower.",
      "Four Lotus-Eaters walk the meadow, and they lure a man away faster.",
      "The wind turns: the petal drifts change direction now and then.",
      "Ithaca is calling: everyone moves faster, on top of everything else."],
    params: lotusParams
  };

  M.extend("lotus", DEF, {
    lotusParams: function (n) { return lotusParams(n); },

    setup_lotus: function () {
      ensureLotusArt(this);
      var P = lotusParams(this.night), i;
      var S = this.lt = { P: P, t: 0, crew: [], eaters: [], clouds: [], plants: [], ships: [], dead: [], aboard: [], told: {}, prevFire: false, lastFrame: -9,
        hudTxt: "", sayMs: 0, windCd: P.windEvery, forgets: 0, haze: 0, lures: 0 };
      this.cameras.main.setBackgroundColor("#2a3a18");
      S.lowG = this.add.graphics().setDepth(5);
      S.topG = this.add.graphics().setDepth(29);
      S.hazeG = this.add.graphics().setDepth(48);
      var hud = { fontFamily: SERIF, fontSize: 15, color: C.bone, fontStyle: "bold", stroke: C.glaze, strokeThickness: 4, lineSpacing: 2 };
      S.hud = this.add.text(10, 0, "", hud).setDepth(55);
      S.say = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 17, color: "#fff4dc", fontStyle: "bold", stroke: C.glaze, strokeThickness: 5, align: "center" }).setOrigin(0.5, 1).setDepth(56).setVisible(false);
      S.dream = this.add.text(0, 0, "The sweet lotus… you forget home…", { fontFamily: SERIF, fontSize: 24, color: "#ffe6f1", fontStyle: "italic bold", stroke: C.robeDk, strokeThickness: 6, align: "center" }).setOrigin(0.5).setDepth(56).setVisible(false);
      S.toShip = this.add.text(0, 0, "SHIPS ▶", { fontFamily: SERIF, fontSize: 18, color: C.ochre, fontStyle: "bold", stroke: C.glaze, strokeThickness: 5 }).setOrigin(1, 0.5).setDepth(54).setVisible(false);
      S.lureMark = this.add.text(0, 0, "!", { fontFamily: SERIF, fontSize: 30, color: "#ff8a5a", fontStyle: "bold", stroke: C.glaze, strokeThickness: 6 }).setOrigin(0.5, 1).setDepth(54).setVisible(false);
      for (i = 0; i < 3; i++) S.ships.push(this.add.image(0, 0, "md-lotus-ship").setRotation(-Math.PI / 2).setDepth(6));
      S.aboardTxt = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 16, color: "#c8f5d2", fontStyle: "bold", stroke: C.glaze, strokeThickness: 4, align: "center" }).setOrigin(0.5, 1).setDepth(54);
      S.ody = { x: 0, y: 0, face: 1, walk: 0, lead: null, forget: 0, imm: 0, ph: 0,
        spr: this.add.image(0, 0, "md-lotus-ody-0").setOrigin(0.5, ODY_FY / ODY_H) };
      this.lotusLayout();
      this.lotusPlants();
      S.ody.x = S.start.x; S.ody.y = S.start.y;
      for (i = 0; i < P.eaters; i++) this.lotusEater();
      for (i = 0; i < P.clouds; i++) this.lotusCloud();
      this.makeSol(S.ody.x, S.ody.y, "right").setVisible(false);   /* the coin pop-ups follow this sprite */
    },

    /* the field's shape for the canvas size; redraws the meadow */
    lotusLayout: function () {
      var S = this.lt, W = this.W, H = this.H, i;
      S.vs = clamp(H / 620, 0.72, 1.3);
      S.band = Math.round(14 * S.vs);
      S.seaW = Math.round(clamp(W * 0.12, 84, 150));
      S.seaX = W - S.seaW;
      S.sandW = Math.round(clamp(W * 0.075, 50, 92));
      S.sandX = S.seaX - S.sandW;
      S.boardX = S.sandX + 6 * clamp(H / 620, 0.72, 1.3);   /* a led man who steps onto the beach is at the ships */
      S.fx0 = 14 * S.vs; S.fy0 = S.band + 46 + 88 * S.vs; S.fy1 = H - 10 * S.vs;   /* a man's tablet stays clear of the two HUD lines */
      S.shipY = [H * 0.3, H * 0.57, H * 0.84];
      S.start = { x: S.sandX - 46 * S.vs, y: S.shipY[1] };
      var shS = 0.92 * S.vs, len = lib.SHIP_H * shS;
      for (i = 0; i < 3; i++) S.ships[i].setScale(shS).setPosition(S.seaX + len * 0.5 - 24 * S.vs, S.shipY[i]);
      S.ody.spr.setScale(S.vs);
      S.hud.setPosition(10, S.band + 4).setFontSize(Math.round(clamp(15 * S.vs, 12, 17)));
      S.say.setFontSize(Math.round(17 * S.vs));
      S.dream.setFontSize(Math.round(24 * S.vs)).setPosition(S.sandX / 2, S.band + 64 * S.vs).setWordWrapWidth(Math.max(200, S.sandX - 30));
      S.toShip.setFontSize(Math.round(18 * S.vs)).setPosition(S.sandX - 6, S.shipY[1] - 40 * S.vs);
      S.aboardTxt.setFontSize(Math.round(15 * S.vs)).setPosition(S.seaX + 6 * S.vs, S.shipY[1] - 36 * S.vs);
      S.lureMark.setFontSize(Math.round(30 * S.vs));
      if (S.bg) { S.bg.destroy(); S.bg = null; }
      if (this.textures.exists("md-lotus-bg")) this.textures.remove("md-lotus-bg");
      canvasTex(this, "md-lotus-bg", W, H, drawBg(S));
      S.bg = this.add.image(0, 0, "md-lotus-bg").setOrigin(0, 0).setDepth(0);
    },
    resize_lotus: function (oldW, oldH) {
      var S = this.lt, fx = this.W / (oldW || this.W), fy = this.H / (oldH || this.H), self = this;
      this.lotusLayout();
      function sc(o) { o.x *= fx; o.y *= fy; if (o.tx != null) { o.tx *= fx; o.ty *= fy; } }
      S.crew.forEach(sc); S.eaters.forEach(sc); S.clouds.forEach(sc); sc(S.ody);
      S.plants.forEach(function (p) { p.spr.destroy(); });
      this.lotusPlants();
      S.crew.forEach(function (c) { c.spr.setScale(S.vs); c.txt.setFontSize(Math.round(22 * S.vs)); c.xm.setScale(0.62 * S.vs); });
      S.eaters.forEach(function (e) { e.spr.setScale(S.vs); });
      S.clouds.forEach(function (k) { k.spr.setScale(k.r * 2.3 * S.vs / 140); });
      this.lotusKeep(S.ody, true);
      S.crew.forEach(function (c) { self.lotusKeep(c, c.state === "led"); });
    },

    /* lotus bushes spread over the meadow (not on the path right by the ships) */
    lotusPlants: function () {
      var S = this.lt, vs = S.vs, area = (S.sandX - S.fx0) * (S.fy1 - S.fy0), n = clamp(Math.round(area / (170 * 170 * vs * vs)), 5, 11), t, k = 0;
      S.plants = [];
      var r = seeded(this.night * 7 + 3);
      for (t = 0; t < 300 && S.plants.length < n; t++) {
        var x = S.fx0 + 40 * vs + r() * (S.sandX - S.fx0 - 110 * vs), y = S.fy0 + 20 * vs + r() * (S.fy1 - S.fy0 - 30 * vs);
        if (dist(x, y, S.start.x, S.start.y) < 120 * vs) continue;
        if (S.plants.some(function (p) { return dist(p.x, p.y, x, y) < 120 * vs; })) continue;
        S.plants.push({ x: x, y: y, spr: this.add.image(x, y, "md-lotus-plant-" + (k++ % 3)).setOrigin(0.5, PL_FY / PL_H).setScale(0.9 * vs).setDepth(10 + y * 0.004) });
      }
    },
    /* keep a figure in the meadow (led men and Odysseus may go onto the beach; nobody into the sea) */
    lotusKeep: function (o, beach) {
      var S = this.lt;
      o.x = clamp(o.x, S.fx0, beach ? S.seaX - 14 * S.vs : S.sandX - 18 * S.vs);
      o.y = clamp(o.y, S.fy0, S.fy1);
    },
    lotusNearPlant: function (x, y) {
      var best = null, bd = 1e9;
      this.lt.plants.forEach(function (p) { var d = dist(x, y, p.x, p.y); if (d < bd) { bd = d; best = p; } });
      return best;
    },
    lotusMeadowSpot: function (awayX, awayY, away) {
      var S = this.lt, vs = S.vs, t, x, y;
      for (t = 0; t < 30; t++) {
        var p = S.plants.length && Math.random() < 0.75 ? S.plants[Math.floor(Math.random() * S.plants.length)] : null;
        if (p) { x = p.x + rnd(-50, 50) * vs; y = p.y + rnd(8, 34) * vs; }
        else { x = rnd(S.fx0 + 20 * vs, S.sandX - 40 * vs); y = rnd(S.fy0, S.fy1); }
        x = clamp(x, S.fx0 + 10 * vs, S.sandX - 30 * vs); y = clamp(y, S.fy0, S.fy1);
        if (away == null || dist(x, y, awayX, awayY) >= away) return { x: x, y: y };
      }
      return { x: x, y: y };
    },
    lotusTell: function (key, msg, ms, again) {
      var S = this.lt, now = this.time.now;
      if (again ? now - (S.told[key] || -1e9) < 4000 : S.told[key]) return;
      S.told[key] = now || 1;
      this.toast(msg, ms || 3400);
    },
    lotusSay: function (txt, x, y, ms, col) {
      var S = this.lt;
      S.say.setText(txt).setColor(col || "#fff4dc").setPosition(clamp(x, 90, this.W - 90), Math.max(S.band + 30, y)).setVisible(true).setAlpha(1);
      S.sayMs = ms || 1800;
    },
    lotusActLabel: function () {
      try {
        var act = document.getElementById("btn-action"), want = this.lt.ody.lead ? "LET GO" : (this.mode.act || "GRAB");
        if (act && act.textContent !== want) act.textContent = want;
      } catch (e) {}
    },

    /* ── the dazed men ── */
    lotusAddCrew: function (L, x, y) {
      var S = this.lt;
      var c = { L: L, x: x, y: y, tx: x, ty: y, state: "eat", pause: rnd(300, 2200), mark: "", walk: rnd(0, 20), frame: 0, face: 1, a: 0, ph: rnd(0, 6), lureT: 0, lureMs: 0, lureBy: null, refuseMs: 0,
        spr: this.add.image(x, y, "md-lotus-crew-0").setOrigin(0.5, CREW_FY / CREW_H).setScale(S.vs).setAlpha(0),
        txt: this.add.text(x, y, L, { fontFamily: SERIF, fontSize: Math.round(22 * S.vs), color: C.glaze, fontStyle: "bold" }).setOrigin(0.5).setDepth(31).setAlpha(0),
        xm: this.add.image(x, y, "md-lotus-x").setScale(0.62 * S.vs).setDepth(32).setVisible(false) };
      S.crew.push(c);
      if (S.dead.indexOf(L) !== -1) this.lotusPaint(c, "wrong");
      else if (this.extracted.indexOf(L) !== -1) this.lotusPaint(c, "right");
      this.lotusPlace(c);
      return c;
    },
    lotusKill: function (c) {
      try { c.spr.destroy(); c.txt.destroy(); c.xm.destroy(); } catch (e) {}
      c.state = "gone";
    },
    lotusPaint: function (c, state) {
      c.mark = state;
      if (state === "wrong") { c.spr.setTint(0x9a9288); c.txt.setText(c.L).setColor("#7a6a60"); c.xm.setVisible(true); }
      else if (state === "right") { c.spr.setTint(0xc8eccc); c.txt.setText("✓").setColor("#1f6a3a"); c.xm.setVisible(false); }
      else { c.spr.clearTint(); c.txt.setText(c.L).setColor(C.glaze); c.xm.setVisible(false); }
    },
    lotusMark: function (L, state) {
      var self = this;
      this.lt.crew.forEach(function (c) { if (c.L === L && c.state !== "gone") self.lotusPaint(c, state); });
    },
    lotusPlace: function (c) {
      var S = this.lt, vs = S.vs, sx = c.state === "refuse" ? Math.sin(S.t * 40) * 3 * vs : 0, bob = c.state === "eat" ? Math.sin(S.t * 2 + c.ph) * 1.2 * vs : 0;
      c.spr.setPosition(c.x + sx, c.y + bob).setFlipX(c.face < 0).setDepth(10 + c.y * 0.004).setAlpha(c.a);
      var ty = c.y + bob - (CREW_FY - TAB_Y) * vs;
      c.txt.setPosition(c.x + sx, ty + 1).setAlpha(c.a);
      c.xm.setPosition(c.x + sx, ty).setAlpha(c.a);
    },
    /* a new set of dazed men for the question: every letter once, and (from level 41) extra men with live letters */
    lotusCrew: function () {
      var S = this.lt, P = S.P, self = this, o = S.ody;
      S.crew.forEach(function (c) { self.lotusKill(c); });
      S.crew = [];
      var letters = this.choiceLetters().filter(function (L) { return self.extracted.indexOf(L) === -1; });
      var live = letters.filter(function (L) { return S.dead.indexOf(L) === -1; }), list = letters.slice(), sh = shuffle(live.slice());
      for (var i = 0; i < P.extra && sh.length; i++) list.push(sh[i % sh.length]);
      shuffle(list).forEach(function (L) {
        var best = null, bd = -1;
        for (var t = 0; t < 14; t++) {
          var sp = self.lotusMeadowSpot(), d = dist(sp.x, sp.y, o.x, o.y) * 0.6;
          S.crew.forEach(function (c) { d = Math.min(d, dist(sp.x, sp.y, c.x, c.y)); });
          if (d > bd) { bd = d; best = sp; }
        }
        self.lotusAddCrew(L, best.x, best.y);
      });
    },
    lotusTickCrew: function (s, ms) {
      var S = this.lt, P = S.P, o = S.ody, vs = S.vs, crew = S.crew, i, j;
      for (i = 0; i < crew.length; i++) {
        var c = crew[i];
        if (c.state === "gone") continue;
        var ox = c.x, oy = c.y, dx, dy, d, sp;
        if (c.state === "embark" || c.state === "aboard") c.a = Math.max(0, c.a - s * (c.state === "aboard" ? 1.6 : 0.5));
        else if (c.a < 1) c.a = Math.min(1, c.a + s * 1.6);
        if (c.refuseMs > 0) { c.refuseMs -= ms; if (c.refuseMs <= 0 && c.state === "refuse") { c.state = "eat"; c.pause = rnd(600, 1600); } }
        if (c.state === "led") {
          /* he follows on the rope, pulling back toward the nearest lotus bush */
          var pl = this.lotusNearPlant(c.x, c.y);
          if (pl) { dx = pl.x - c.x; dy = pl.y - c.y; d = Math.sqrt(dx * dx + dy * dy) || 1; c.x += dx / d * P.pull * vs * 0.8 * s; c.y += dy / d * P.pull * vs * 0.8 * s; }
          dx = c.x - o.x; dy = c.y - o.y; d = Math.sqrt(dx * dx + dy * dy) || 1;
          var leash = LEASH * vs;
          if (d > leash) { c.x = o.x + dx / d * leash; c.y = o.y + dy / d * leash; }
          this.lotusKeep(c, true);
          /* a Lotus-Eater close by lures him away (a red ring first) */
          if (P.lureMs < 1e8 && !this._between) {
            var near = null;
            S.eaters.forEach(function (e) { if (e.cd <= 0 && dist(e.x, e.y, c.x, c.y) < P.lureR * vs) near = e; });
            if (near) {
              c.lureT += ms; c.lureBy = near;
              this.lotusTell("lure", "A Lotus-Eater is luring your man away! Walk him away from her, quickly.", 3400);
              if (c.lureT >= P.lureMs) { this.lotusLured(c, near); continue; }
            } else c.lureT = Math.max(0, c.lureT - ms * 2);
          }
          if (c.x >= S.boardX && !this._between) {
            this.lotusBoard(c);
            if (this._finishing || S.crew !== crew) return;
            continue;
          }
        } else if (c.state === "lured") {
          c.lureMs -= ms;
          var e = c.lureBy, gx = e ? e.x - 20 * vs : c.tx, gy = e ? e.y + 6 * vs : c.ty;
          dx = gx - c.x; dy = gy - c.y; d = Math.sqrt(dx * dx + dy * dy) || 1;
          if (d > 8 * vs) { sp = P.lureSp * vs; c.x += dx / d * sp * s; c.y += dy / d * sp * s; }
          if (c.lureMs <= 0) { c.state = "eat"; c.pause = rnd(800, 1800); c.lureBy = null; }
        } else if (c.state === "eat") {
          c.pause -= ms;
          if (c.pause <= 0) { var t = this.lotusMeadowSpot(); c.tx = t.x; c.ty = t.y; c.state = "wander"; }
        } else if (c.state === "wander") {
          dx = c.tx - c.x; dy = c.ty - c.y; d = Math.sqrt(dx * dx + dy * dy);
          if (d < 6 * vs) { c.state = "eat"; c.pause = rnd(1000, 3200); }
          else { sp = P.wanderSp * vs * Math.min(1, d / (24 * vs) + 0.4); c.x += dx / d * sp * s + Math.sin(S.t * 1.7 + c.ph) * 6 * vs * s; c.y += dy / d * sp * s; }
        } else if (c.state === "embark") {
          dx = S.boardX + 20 * vs - c.x; dy = S.shipY[1] - c.y; d = Math.sqrt(dx * dx + dy * dy) || 1;
          c.x += dx / d * 90 * vs * s; c.y += dy / d * 90 * vs * s;
          if (c.a <= 0) { this.lotusKill(c); continue; }
        } else if (c.state === "aboard") {
          if (c.a <= 0) { this.lotusKill(c); continue; }
        }
        /* the men keep a little apart */
        if (c.state === "wander" || c.state === "eat") {
          for (j = 0; j < crew.length; j++) {
            var q = crew[j];
            if (q === c || (q.state !== "wander" && q.state !== "eat" && q.state !== "led")) continue;
            var sx = c.x - q.x, sy = c.y - q.y, sd = sx * sx + sy * sy, sep = SEP * vs;
            if (sd < sep * sep && sd > 0.01) { var sdd = Math.sqrt(sd), push = (sep - sdd) * 3; c.x += sx / sdd * push * s; c.y += sy / sdd * push * s; }
          }
          this.lotusKeep(c, false);
        }
        var mx = c.x - ox, spd = Math.sqrt(mx * mx + (c.y - oy) * (c.y - oy)) / Math.max(s, 0.001);
        if (Math.abs(mx) > 0.05) c.face = mx > 0 ? 1 : -1;
        c.walk += spd * s;
        var fr = spd > 4 ? Math.floor(c.walk / (11 * vs)) % 2 : 0;
        if (fr !== c.frame) { c.frame = fr; c.spr.setTexture("md-lotus-crew-" + fr); }
        this.lotusPlace(c);
      }
    },
    /* the man you lead walks off with a Lotus-Eater: catch him again */
    lotusLured: function (c, e) {
      var S = this.lt;
      if (S.ody.lead === c) S.ody.lead = null;
      c.state = "lured"; c.lureT = 0; c.lureBy = e; c.lureMs = 2600; S.lures++;
      lsnd("lure");
      this.lotusSay("\"Stay with us… eat the lotus…\"", e.x, e.y - (CREW_H + 12) * S.vs, 2000, "#ffd6ea");
      this.lotusTell("lured", "She lured him away! Catch him again and lead him to the ships.", 3400);
      this.lotusActLabel();
    },
    /* a led man reaches the beach by the ships: his letter is the answer */
    lotusBoard: function (c) {
      var S = this.lt, L = c.L;
      S.ody.lead = null;
      c.state = "aboard";
      var res = this.answerPick(L, c.x, c.y - 40 * S.vs);
      lsnd("board");
      this.lotusActLabel();
      if (res === "done") return;
      if (res === "ignore") { c.state = "eat"; c.a = 1; c.pause = 400; return; }
      if (res === "partial") {
        this.lotusMark(L, "right");
        c.state = "aboard";
        if (S.aboard.indexOf(L) === -1) S.aboard.push(L);
        S.aboardTxt.setText("Tied under the benches: " + S.aboard.map(function (q) { return "✓" + q; }).join(" "));
        this.lotusTell("tied", "He's tied under the rowing benches. Now bring back the man with the other right letter.", 3600);
      }
    },
    lotusTouching: function () {
      var S = this.lt, o = S.ody, best = null, bd = 1e9, marked = null, md = 1e9;
      S.crew.forEach(function (c) {
        if ((c.state !== "wander" && c.state !== "eat" && c.state !== "lured" && c.state !== "refuse") || c.a < 0.6) return;
        var d = dist(c.x, c.y, o.x, o.y);
        if (d >= GRAB_R * S.vs) return;
        if (c.mark || c.state === "refuse") { if (d < md) { md = d; marked = c; } }
        else if (d < bd) { bd = d; best = c; }
      });
      return best || marked;
    },
    lotusTryGrab: function () {
      var S = this.lt, o = S.ody, c = this.lotusTouching();
      if (!c) { this.lotusTell("near", "Walk right up to a man first, then press Space (or GRAB) to take hold of him.", 2800, true); return; }
      if (c.mark === "wrong" || c.state === "refuse") { this.lotusTell("crossed", "Letter " + c.L + " is crossed out. He won't come. Find a man with another letter.", 2800, true); return; }
      if (c.mark === "right") { this.lotusTell("found", c.L + " is already aboard. Find the man with the other right letter.", 2800, true); return; }
      if ((this.need || []).indexOf(c.L) === -1) {
        /* a wrong letter: he won't come, a life, and the letter is crossed out on every man */
        var res = this.answerPick(c.L, c.x, c.y - 40 * S.vs);
        if (res === "wrong") {
          if (S.dead.indexOf(c.L) === -1) S.dead.push(c.L);
          this.lotusMark(c.L, "wrong");
          c.state = "refuse"; c.refuseMs = 1400;
          lsnd("refuse");
          this.lotusSay("\"I will stay here forever!\"", c.x, c.y - (CREW_H + 4) * S.vs, 1800);
        }
        return;
      }
      o.lead = c; c.state = "led"; c.lureT = 0; c.lureBy = null;
      lsnd("grab");
      this.lotusSay("\"Just one more taste…\"", c.x, c.y - (CREW_H + 4) * S.vs, 1500);
      this.lotusTell("led", "He follows you, but slowly: he wants the lotus. Lead him onto the beach by the ships (▶).", 4000);
      this.lotusActLabel();
    },
    lotusLetGo: function () {
      var S = this.lt, c = S.ody.lead;
      S.ody.lead = null;
      if (c) { c.state = "eat"; c.pause = rnd(400, 1000); c.lureT = 0; }
      lsnd("letgo");
      this.lotusActLabel();
    },

    /* ── Odysseus ── */
    lotusSpeed: function () {
      var S = this.lt, o = S.ody, P = S.P;
      return ODY_SP * S.vs * (o.lead ? P.leadK : 1) * (o.forget > 0 ? P.forgetK : 1);
    },
    lotusTickOdy: function (s, ms, inp, edge) {
      var S = this.lt, o = S.ody, P = S.P, vs = S.vs;
      if (o.forget > 0) { o.forget -= ms; if (o.forget <= 0) { o.forget = 0; o.imm = 1500; this.lotusTell("clear", "Your head clears. Remember: home is Ithaca!", 2600, true); } }
      else if (o.imm > 0) o.imm -= ms;
      if (edge && !this._between) {
        if (o.lead) this.lotusLetGo(); else this.lotusTryGrab();
        if (this._finishing) return;
      }
      var ax = inp.ax, ay = inp.ay, l = Math.sqrt(ax * ax + ay * ay), sp = this.lotusSpeed(), ox = o.x, oy = o.y;
      if (l > 0) {
        ax /= l; ay /= l;
        if (o.forget > 0) {
          /* forgetting: the feet wander off the line you want */
          var a = Math.sin(S.t * 2.1) * 0.75 + Math.sin(S.t * 5.3) * 0.25, ca = Math.cos(a), sa = Math.sin(a);
          var rx = ax * ca - ay * sa, ry = ax * sa + ay * ca; ax = rx; ay = ry;
        }
        o.x += ax * sp * s; o.y += ay * sp * s;
      }
      if (o.lead) {
        /* the man drags back toward the lotus */
        var pl = this.lotusNearPlant(o.lead.x, o.lead.y);
        if (pl) { var dx = pl.x - o.x, dy = pl.y - o.y, d = Math.sqrt(dx * dx + dy * dy) || 1; if (d > 30 * vs) { o.x += dx / d * P.pull * vs * s; o.y += dy / d * P.pull * vs * s; } }
      }
      this.lotusKeep(o, true);
      var mx = o.x - ox, moved = Math.sqrt(mx * mx + (o.y - oy) * (o.y - oy));
      if (Math.abs(mx) > 0.05 && l > 0) o.face = mx > 0 ? 1 : -1;
      o.walk += moved;
      var fr = moved > 0.2 ? Math.floor(o.walk / (12 * vs)) % 2 : 0;
      o.spr.setTexture("md-lotus-ody-" + fr).setPosition(o.x, o.y).setFlipX(o.face < 0).setDepth(10 + o.y * 0.004 + 0.001)
        .setRotation(o.forget > 0 ? Math.sin(S.t * 3) * 0.09 : 0);
      this.blink(o.spr);
      this.player.setPosition(o.x, o.y - 40 * vs);
      if (o.x > S.sandX + 4 && !o.lead) this.lotusTell("ships", "These are your ships. Bring the man with the right letter here!", 3000);
    },
    /* the lotus: Odysseus forgets for a moment (never a life) */
    lotusForget: function (x, y, kind) {
      var S = this.lt, o = S.ody, P = S.P;
      if (o.forget > 0 || o.imm > 0 || this._between || this._finishing) return false;
      o.forget = P.forgetMs * (kind === "cloud" ? 0.7 : 1);
      S.forgets++;
      lsnd("dream");
      this.burst(o.x, o.y - 30 * S.vs, 0xf7b6d2, 14);
      if (kind === "cloud") this.lotusTell("cloud", "The lotus petals! Breathing them in makes you forget for a moment. Walk around the pink drifts.", 3800);
      else {
        this.lotusSay("\"Taste the lotus, stranger…\"", x, y - (CREW_H + 12) * S.vs, 1800, "#ffd6ea");
        this.lotusTell("eater", "A Lotus-Eater gave you the lotus, and you forget for a moment. It costs no life, but keep away from them!", 3800);
      }
      return true;
    },

    /* ── the friendly Lotus-Eaters ── */
    lotusEater: function (x, y) {
      var S = this.lt, o = S.ody;
      if (x == null) { var sp = this.lotusMeadowSpot(o.x, o.y, 220 * S.vs); x = sp.x; y = sp.y; }
      var e = { x: x, y: y, tx: x, ty: y, cd: 0, re: rnd(400, 1800), seeking: false, walk: rnd(0, 20), frame: 0, face: -1,
        spr: this.add.image(x, y, "md-lotus-eater-0").setOrigin(0.5, EAT_FY / EAT_H).setScale(S.vs) };
      S.eaters.push(e);
      return e;
    },
    lotusTickEaters: function (s, ms) {
      var S = this.lt, P = S.P, o = S.ody, vs = S.vs, self = this;
      S.eaters.forEach(function (e) {
        var ox = e.x, oy = e.y;
        if (e.cd > 0) e.cd -= ms;
        e.re -= ms;
        if (e.re <= 0) {
          e.re = rnd(1200, 2600);
          e.seeking = e.cd <= 0 && !self._between && o.x < S.sandX && Math.random() < P.seek;
          if (!e.seeking) { var t = e.cd > 0 ? self.lotusMeadowSpot(o.x, o.y, 200 * vs) : self.lotusMeadowSpot(); e.tx = t.x; e.ty = t.y; }
        }
        if (e.seeking && (e.cd > 0 || o.x >= S.sandX)) { e.seeking = false; e.re = 0; }
        if (e.seeking) { e.tx = o.x; e.ty = o.y; }
        var dx = e.tx - e.x, dy = e.ty - e.y, d = Math.sqrt(dx * dx + dy * dy);
        if (d > 5 * vs) { var sp = P.eaterSp * vs * (e.cd > 0 ? 1.15 : 1) * Math.min(1, d / (20 * vs) + 0.4); e.x += dx / d * sp * s; e.y += dy / d * sp * s; }
        e.x = clamp(e.x, S.fx0, S.sandX - 22 * vs); e.y = clamp(e.y, S.fy0, S.fy1);
        var mx = e.x - ox, spd = Math.sqrt(mx * mx + (e.y - oy) * (e.y - oy)) / Math.max(s, 0.001);
        if (Math.abs(mx) > 0.05) e.face = mx > 0 ? 1 : -1;
        e.walk += spd * s;
        var fr = spd > 4 ? Math.floor(e.walk / (12 * vs)) % 2 : 0;
        if (fr !== e.frame) { e.frame = fr; e.spr.setTexture("md-lotus-eater-" + fr); }
        e.spr.setPosition(e.x, e.y).setFlipX(e.face < 0).setDepth(10 + e.y * 0.004).setAlpha(e.cd > 0 ? 0.8 : 1);
        if (e.cd <= 0 && dist(e.x, e.y, o.x, o.y) < TOUCH_R * vs * 1.25 && self.lotusForget(e.x, e.y, "eater")) { e.cd = P.eaterCd; e.seeking = false; e.re = 0; }
      });
    },
    /* ── drifts of lotus petals ── */
    lotusCloud: function (x, y) {
      var S = this.lt, P = S.P, vs = S.vs, o = S.ody;
      if (x == null) { var sp = this.lotusMeadowSpot(o.x, o.y, 200 * vs); x = sp.x; y = sp.y; }
      var a = rnd(0, TAU), r = P.cloudR || 44;
      var k = { x: x, y: y, r: r, vx: Math.cos(a) * P.cloudSp, vy: Math.sin(a) * P.cloudSp, ph: rnd(0, 6),
        spr: this.add.image(x, y, "md-lotus-cloud").setDepth(24).setScale(r * 2.3 * vs / 140).setAlpha(0.85) };
      S.clouds.push(k);
      return k;
    },
    lotusTickClouds: function (s, ms) {
      var S = this.lt, P = S.P, o = S.ody, vs = S.vs, self = this;
      if (P.windEvery < 1e8 && S.clouds.length) {
        S.windCd -= ms;
        if (S.windCd <= 0) {
          S.windCd = P.windEvery * rnd(0.85, 1.15);
          var a = rnd(0, TAU);
          S.clouds.forEach(function (k) { var b = a + rnd(-0.5, 0.5); k.vx = Math.cos(b) * P.cloudSp * 1.2; k.vy = Math.sin(b) * P.cloudSp * 1.2; });
          this.lotusTell("wind", "The wind turns! The petal drifts change direction.", 2600);
        }
      }
      S.clouds.forEach(function (k) {
        k.x += k.vx * vs * s; k.y += k.vy * vs * s;
        var rr = k.r * vs * 0.6;
        if (k.x < S.fx0 + rr) { k.x = S.fx0 + rr; k.vx = Math.abs(k.vx); }
        if (k.x > S.sandX - rr) { k.x = S.sandX - rr; k.vx = -Math.abs(k.vx); }
        if (k.y < S.fy0) { k.y = S.fy0; k.vy = Math.abs(k.vy); }
        if (k.y > S.fy1) { k.y = S.fy1; k.vy = -Math.abs(k.vy); }
        k.spr.setPosition(k.x, k.y).setRotation(Math.sin(S.t * 0.6 + k.ph) * 0.4).setScale(k.r * 2.3 * vs / 140 * (1 + 0.05 * Math.sin(S.t * 2 + k.ph)));
        if (dist(k.x, k.y, o.x, o.y - 14 * vs) < k.r * vs * 0.75) self.lotusForget(k.x, k.y, "cloud");
      });
    },

    answers_lotus: function () {
      var S = this.lt, o = S.ody, self = this;
      S.dead = []; S.aboard = []; S.aboardTxt.setText("");
      o.lead = null; o.forget = 0; o.imm = 0;
      o.x = S.start.x; o.y = S.start.y;
      S.eaters.forEach(function (e) { if (dist(e.x, e.y, o.x, o.y) < 200 * S.vs) { var sp = self.lotusMeadowSpot(o.x, o.y, 220 * S.vs); e.x = sp.x; e.y = sp.y; } e.cd = 1500; e.seeking = false; e.re = 0; });
      S.clouds.forEach(function (k) { if (dist(k.x, k.y, o.x, o.y) < (k.r + 90) * S.vs) { var sp = self.lotusMeadowSpot(o.x, o.y, 220 * S.vs); k.x = sp.x; k.y = sp.y; } });
      this.lotusCrew();
      this.lotusActLabel();
    },
    /* a full right answer: Odysseus orders everyone aboard */
    clear_lotus: function () {
      var S = this.lt, self = this;
      S.ody.lead = null;
      S.crew.forEach(function (c) { if (c.state !== "gone" && c.state !== "aboard") { c.state = "embark"; self.burst(c.x, c.y - 30 * S.vs, 0xe8b04a, 4); } });
      this.lotusTell("aboard", "\"Everyone aboard, before anyone else tastes the lotus!\" Odysseus ties the weeping men under the rowing benches.", 3600);
      this.lotusActLabel();
    },

    tick_lotus: function (s, inp, ms) {
      var S = this.lt, frame = (this.game && this.game.loop && this.game.loop.frame) || 0;
      /* the action acts on a fresh press; the first frame after a pause (the reading card) never counts */
      var fire = !!inp.fire, edge = fire && !S.prevFire && S.lastFrame === frame - 1;
      S.prevFire = fire; S.lastFrame = frame;
      S.t += s;
      var crew = S.crew;
      this.lotusTickOdy(s, ms, inp, edge && S.crew === crew);
      if (this._finishing) return;
      this.lotusTickCrew(s, ms);
      if (this._finishing) return;
      this.lotusTickEaters(s, ms);
      this.lotusTickClouds(s, ms);
      this.lotusDraw(s, ms);
    },

    lotusDraw: function (s, ms) {
      var S = this.lt, o = S.ody, vs = S.vs, lg = S.lowG, tg = S.topG, P = S.P;
      lg.clear(); tg.clear();
      /* the ring at Odysseus's feet, and the man he could take hold of */
      lg.lineStyle(3, 0xffd27a, 0.9); lg.strokeEllipse(o.x, o.y, 40 * vs, 15 * vs);
      if (!o.lead && !this._between) {
        var tc = this.lotusTouching();
        if (tc) { lg.lineStyle(2.5, tc.mark ? 0x9a9288 : 0xefe6d2, 0.85); lg.strokeEllipse(tc.x, tc.y, 46 * vs, 18 * vs); }
      }
      var c = o.lead;
      S.lureMark.setVisible(false);
      if (c) {
        /* the rope, sagging, from Odysseus's hand to the man's waist */
        var hx = o.x + 13 * vs * o.face, hy = o.y - 20 * vs, cx = c.x, cy = c.y - 30 * vs, mx = (hx + cx) / 2, my = Math.max(hy, cy) + 8 * vs, i, px = hx, py = hy;
        tg.lineStyle(4 * vs, 0x140c0a, 0.9);
        for (i = 1; i <= 8; i++) { var u = i / 8, qx = (1 - u) * (1 - u) * hx + 2 * u * (1 - u) * mx + u * u * cx, qy = (1 - u) * (1 - u) * hy + 2 * u * (1 - u) * my + u * u * cy; tg.lineBetween(px, py, qx, qy); px = qx; py = qy; }
        tg.lineStyle(2.2 * vs, 0xc8a060, 1); px = hx; py = hy;
        for (i = 1; i <= 8; i++) { var u2 = i / 8, rx = (1 - u2) * (1 - u2) * hx + 2 * u2 * (1 - u2) * mx + u2 * u2 * cx, ry = (1 - u2) * (1 - u2) * hy + 2 * u2 * (1 - u2) * my + u2 * u2 * cy; tg.lineBetween(px, py, rx, ry); px = rx; py = ry; }
        if (c.lureT > 0) {
          var k = clamp(c.lureT / P.lureMs, 0, 1), pul = 0.5 + 0.5 * Math.sin(S.t * 14);
          lg.lineStyle(4, 0xe0482a, 0.6 + 0.4 * pul); lg.strokeEllipse(c.x, c.y, (60 - 20 * k) * vs, (24 - 8 * k) * vs);
          S.lureMark.setVisible(true).setPosition(c.x, c.y - (CREW_H + 6) * vs - 3 * pul);
        }
        /* the beach line to cross */
        lg.lineStyle(2, 0xefe6d2, 0.35 + 0.25 * Math.sin(S.t * 5));
        for (var y = S.fy0; y < S.fy1; y += 18 * vs) lg.lineBetween(S.boardX, y, S.boardX, y + 9 * vs);
      }
      S.toShip.setVisible(!!c).setAlpha(0.7 + 0.3 * Math.sin(S.t * 6)).setX(S.sandX - 6 + Math.sin(S.t * 6) * 4);
      /* the lotus dream: the meadow goes pale and pink, the edges blur into mist */
      var want = o.forget > 0 ? 1 : 0;
      S.haze += (want - S.haze) * Math.min(1, s * (want ? 5 : 2.5));
      var hg = S.hazeG; hg.clear();
      if (S.haze > 0.01) {
        var W = this.W, H = this.H, a = S.haze;
        hg.fillStyle(0xd8ccd2, 0.42 * a); hg.fillRect(0, 0, W, H);
        for (var j = 0; j < 7; j++) {
          var bx = (j * 173 + S.t * 30) % (W + 200) - 100, by = H * (0.15 + (j * 0.29) % 0.8);
          hg.fillStyle(0xf7d6e6, 0.16 * a); hg.fillEllipse(bx, by, 260 * vs, 120 * vs);
        }
        for (var m = 1; m <= 4; m++) {
          var bw = m * 16 * vs;
          hg.fillStyle(0xead0dc, 0.09 * a); hg.fillRect(0, 0, W, bw); hg.fillRect(0, H - bw, W, bw); hg.fillRect(0, bw, bw, H - bw * 2); hg.fillRect(W - bw, bw, bw, H - bw * 2);
        }
        S.dream.setVisible(true).setAlpha(Math.min(1, a * 1.3)).setScale(1 + 0.03 * Math.sin(S.t * 3));
      } else S.dream.setVisible(false);
      if (S.sayMs > 0) { S.sayMs -= ms; S.say.setAlpha(clamp(S.sayMs / 400, 0, 1)); if (S.sayMs <= 0) S.say.setVisible(false); }
      var left = S.crew.filter(function (q) { return q.state !== "gone" && q.state !== "aboard" && q.state !== "embark"; }).length;
      var line2 = o.forget > 0 ? "The lotus… you forget… (it passes)"
        : c ? "Leading " + c.L + " to the ships ▶ (Space lets go)"
        : "Take hold of the man with the right letter (Space / GRAB)";
      var txt = "Dazed men in the meadow: " + left + "\n" + line2;
      if (txt !== S.hudTxt) { S.hudTxt = txt; S.hud.setText(txt); }
    }
  });
})();
