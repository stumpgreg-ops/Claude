/* SOL Labyrinth v5.22 — the Lit and Film mode "moonshot": Shoot the Moon (A Trip to the Moon, Georges Méliès, 1902).
 *
 * Méliès's painted theater, as if projected from a worn print: a black-and-white painted stage (curtains, a
 * scalloped valance, footlights, painted Paris rooftops and the foundry's smokestacks), with the hand-tinted
 * stencil color of the 1902 colored prints on a few things only (the Moon, the shell, the crater rings, the
 * Selenites, the dream star), and film grain, flicker, scratches, gate weave and a vignette over everything.
 * Each question opens with a Méliès-style intertitle naming one of the film's own tableaux.
 *
 * The great cannon stands on the rooftops at the left; the Moon, a painted flat with a face, hangs at the right.
 * Every answer letter is a crater on the Moon's face (A, B on the forehead, C, D on the cheeks). The capsule
 * flies INTO the picture toward the Moon (it shrinks as it goes), so the shot is aimed like a mortar: ▲ ▼ set the
 * cannon's angle, ◀ ▶ the powder (the power), and the landing ring shows where the capsule will come down; or
 * point with the mouse or a finger to put the ring there (click, or let go, to fire). The capsule takes a moment
 * to fly while the Moon drifts (and, from level 21, comes toward you and backs away), so aim where the crater
 * WILL be; until level 71 the crater the shot will land in lights up. Landing in a crater picks its letter
 * (answerPick); the face, the sky, a cloud flat sliding on its track (level 11) or a dream star swinging on a
 * wire (level 51) only waste a shell. Selenites, the Moon-men, pop onto craters in puffs of smoke (Méliès's stop trick; smoke gathers first)
 * and vanish again, and from level 41 can hop to another crater: landing on one costs a life (they capture the
 * astronomers). Using up every shell costs a life too (the gunners bring more). moonParams sets one difficulty
 * curve for all of it.
 *
 * Registered with SolModes.extend (js/modes.js); the methods below are copied onto ModeScene, so `this` is the
 * mode scene. Every texture is drawn once (canvasTex) under an "md-moonshot-" key; the backdrop, the city and
 * the frame are drawn per canvas size.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, shuffle = L.shuffle, snd = L.snd, canvasTex = L.canvasTex;

  var TAU = Math.PI * 2, DEG = Math.PI / 180;
  var SERIF = "Georgia, 'Palatino Linotype', 'Book Antiqua', serif";
  var INK = "#16130f", PAPER = "#ece5d2", INKN = 0x16130f, PAPERN = 0xece5d2, GOLDN = 0xf0bf48;
  /* the stencil colors of the hand-tinted prints, one per crater ring */
  var STENCIL = ["#c8553a", "#3d6db0", "#4c9a5c", "#d29a2a", "#8a58a8", "#c25f7c"];
  var MOON_R = 146;                 /* the Moon texture's radius */
  var CLOUD_U = 0.25, STAR_U = 0.55; /* how far along its flight (into the picture) the capsule passes the clouds and the stars */
  var BARREL_PIV = 54, BARREL_W = 212, MUZZLE = 152;
  /* the craters on the Moon's face (in Moon radii from its centre), for 2-6 letters: forehead, cheeks, chin, crown */
  var CRATERS = {
    1: [[0, -0.5]],
    2: [[-0.45, -0.45], [0.45, -0.45]],
    3: [[-0.44, -0.47], [0.44, -0.47], [0, 0.7]],
    4: [[-0.44, -0.48], [0.44, -0.48], [-0.6, 0.28], [0.6, 0.28]],
    5: [[-0.44, -0.48], [0.44, -0.48], [-0.6, 0.28], [0.6, 0.28], [0, 0.72]],
    6: [[-0.44, -0.48], [0.44, -0.48], [-0.6, 0.28], [0.6, 0.28], [0, 0.72], [0, -0.8]]
  };
  /* intertitles: the tableaux of Méliès's 1902 catalogue, in the film's order */
  var TABLEAUX = ["The Scientific Congress at the Astronomic Club", "Planning the Trip", "The Workshops: Building the Shell",
    "The Foundry: Casting the Monster Gun", "The Astronomers Enter the Shell", "Loading the Gun", "Fire!!!",
    "The Flight Through Space", "Approaching the Moon", "Landed Right in the Eye!!!", "The Plain of Craters",
    "The Dream: the Stars and Saturn", "The Snowstorm", "Into a Lunar Crater", "The Giant Mushroom Grotto",
    "Encounter with the Selenites", "Prisoners!!", "The Kingdom of the Moon", "The Wild Pursuit",
    "Departure from the Moon", "The Vertical Drop into Space", "Splashdown in the Open Sea", "The Rescue",
    "The Triumphal March Past"];

  /* ── difficulty: one curve for every level 1-100, each level harder than the one before ── */
  function moonParams(n) {
    n = Math.max(1, Number(n) || 1);
    return {
      driftX: 8 + n * 0.85,                                        /* px the Moon drifts either side (8.9 at 1, 93 at 100) */
      driftY: 5 + n * 0.45,                                        /* px up and down */
      driftSpd: 0.28 + n * 0.0055,                                 /* rad a second (a 22 s sway at 1, 7.6 s at 100) */
      zoom: n >= 21 ? Math.min(0.17, 0.05 + (n - 21) * 0.0016) : 0, /* the Moon comes toward you and backs away: share of its size */
      craterR: 0.22 - n * 0.0006,                                  /* a crater's landing radius, in Moon radii (0.219 → 0.16) */
      flightMs: 1050 + n * 4.5,                                    /* the capsule's flight (1.05 s → 1.5 s): how far to lead the Moon */
      guide: 1 - n * 0.0045,                                       /* how much of the dotted arc shows */
      glow: n < 71 ? 1 : 0,                                        /* the crater the shot will land in lights up */
      shells: 8 - Math.floor((n - 1) / 30),                        /* shells a question: 8, 7 (31), 6 (61), 5 (91) */
      sels: n >= 81 ? 3 : n >= 31 ? 2 : 1,                         /* Selenites on the craters at once */
      selEvery: 9000 - n * 52,                                     /* ms between Selenites (8.9 s → 3.8 s) */
      selWarn: 1900 - n * 11,                                      /* ms the smoke gathers before one appears */
      selStay: 1700 + n * 20,                                      /* ms one stays */
      hop: n >= 41 ? Math.min(0.6, 0.25 + (n - 41) * 0.006) : 0,  /* a Selenite vanishes and pops up on another crater */
      clouds: n >= 81 ? 2 : n >= 11 ? 1 : 0,                       /* painted clouds sliding across the sky */
      cloudSpd: n >= 11 ? 28 + (n - 11) * 0.45 : 0,                /* px a second */
      stars: n >= 91 ? 2 : n >= 51 ? 1 : 0,                        /* dream stars swinging on wires */
      starSpd: n >= 51 ? 0.8 + (n - 51) * 0.008 : 0                /* rad a second */
    };
  }

  /* ── art: drawn once, in grays, with a little stencil color (hand tinting bleeds a pixel past the lines) ── */
  function circ(c, x, y, r) { c.beginPath(); c.arc(x, y, r, 0, TAU); }
  function star5(c, x, y, r1, r2, rot) {
    c.beginPath();
    for (var i = 0; i < 10; i++) { var a = (rot || 0) + i * Math.PI / 5 - Math.PI / 2, r = i % 2 ? r2 : r1; c[i ? "lineTo" : "moveTo"](x + Math.cos(a) * r, y + Math.sin(a) * r); }
    c.closePath();
  }
  function poly(c, pts) { c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); c.closePath(); }
  /* engraving hatch inside the current clip */
  function hatch(c, x0, y0, x1, y1, gap, col, lw, slope) {
    c.strokeStyle = col; c.lineWidth = lw || 1; c.beginPath();
    var s = slope == null ? 1 : slope, span = (y1 - y0) * Math.abs(s);
    for (var x = x0 - span; x < x1 + span; x += gap) { c.moveTo(x, y1); c.lineTo(x + (y1 - y0) * s, y0); }
    c.stroke();
  }
  function rrect(c, x, y, w, h, r, keep) {
    if (!keep) c.beginPath();
    c.moveTo(x + r, y); c.lineTo(x + w - r, y); c.quadraticCurveTo(x + w, y, x + w, y + r); c.lineTo(x + w, y + h - r);
    c.quadraticCurveTo(x + w, y + h, x + w - r, y + h); c.lineTo(x + r, y + h); c.quadraticCurveTo(x, y + h, x, y + h - r); c.lineTo(x, y + r);
    c.quadraticCurveTo(x, y, x + r, y); c.closePath();
  }

  /* the Moon: a painted plaster disc, the face is drawn every frame (it reacts) */
  function drawMoon(c, w, h) {
    var cx = w / 2, cy = h / 2, r = MOON_R, i, g;
    g = c.createRadialGradient(cx - r * 0.32, cy - r * 0.36, r * 0.08, cx, cy, r);
    g.addColorStop(0, "#fdfbf4"); g.addColorStop(0.55, "#e6e1d3"); g.addColorStop(1, "#a9a395");
    c.fillStyle = g; circ(c, cx, cy, r); c.fill();
    c.save(); circ(c, cx, cy, r - 1); c.clip();
    for (i = 0; i < 16; i++) {
      var a = rnd(0, TAU), d = rnd(0.15, 0.85) * r;
      c.fillStyle = "rgba(118,110,96," + rnd(0.06, 0.12).toFixed(3) + ")";
      c.beginPath(); c.ellipse(cx + Math.cos(a) * d, cy + Math.sin(a) * d, rnd(12, 34), rnd(8, 22), rnd(0, 3), 0, TAU); c.fill();
    }
    /* small craters round the rim (the letter craters sit on top, separately) */
    for (i = 0; i < 18; i++) {
      var aa = i / 18 * TAU + rnd(-0.12, 0.12), dd = r * rnd(0.8, 0.9), rr = rnd(3.5, 8), x = cx + Math.cos(aa) * dd, y = cy + Math.sin(aa) * dd;
      c.fillStyle = "rgba(96,90,78,0.32)"; circ(c, x, y, rr); c.fill();
      c.strokeStyle = "rgba(255,255,250,0.7)"; c.lineWidth = 1.2; c.beginPath(); c.arc(x, y, rr, Math.PI * 0.1, Math.PI * 0.9); c.stroke();
      c.strokeStyle = "rgba(40,36,30,0.55)"; c.beginPath(); c.arc(x, y, rr, Math.PI * 1.1, Math.PI * 1.9); c.stroke();
    }
    /* engraved shading on the lower-right limb */
    c.beginPath(); c.arc(cx, cy, r, 0, TAU); c.arc(cx - r * 0.2, cy - r * 0.22, r * 0.96, 0, TAU, true); c.clip("evenodd");
    hatch(c, cx - r, cy - r, cx + r, cy + r, 4.5, "rgba(36,32,26,0.42)", 1.1, 1);
    c.restore();
    c.strokeStyle = INK; c.lineWidth = 3.2; circ(c, cx, cy, r); c.stroke();
  }
  /* a letter crater with its stencil-colored ring */
  function drawCrater(col) {
    return function (c, w, h) {
      var cx = w / 2, cy = h / 2, g;
      g = c.createRadialGradient(cx - 10, cy - 12, 4, cx, cy, 48);
      g.addColorStop(0, "#faf7ee"); g.addColorStop(1, "#aaa496");
      c.fillStyle = g; circ(c, cx, cy, 46); c.fill();
      c.strokeStyle = INK; c.lineWidth = 2.2; c.stroke();
      c.globalAlpha = 0.82; c.strokeStyle = col; c.lineWidth = 7.5; circ(c, cx + 1.4, cy - 1, 41); c.stroke(); c.globalAlpha = 1;
      g = c.createLinearGradient(cx - 36, cy - 36, cx + 36, cy + 36);
      g.addColorStop(0, "#3e3a33"); g.addColorStop(0.45, "#8c8679"); g.addColorStop(1, "#ddd7c7");
      c.fillStyle = g; circ(c, cx, cy, 36); c.fill();
      c.strokeStyle = INK; c.lineWidth = 1.6; c.stroke();
      c.fillStyle = "#f1ecdd"; c.beginPath(); c.ellipse(cx + 2.5, cy + 3, 28, 26, 0, 0, TAU); c.fill();
      c.save(); circ(c, cx, cy, 35); c.clip();
      c.beginPath(); c.arc(cx, cy, 36, 0, TAU); c.arc(cx + 9, cy + 10, 34, 0, TAU, true); c.clip("evenodd");
      hatch(c, cx - 40, cy - 40, cx + 40, cy + 40, 4, "rgba(20,18,14,0.35)", 1, -1);
      c.restore();
    };
  }
  /* a Selenite: a spiky-headed Moon-man with a spear, green-tinted. Feet at the bottom (64 x 92) */
  function drawSelenite(c, w, h) {
    c.lineCap = "round"; c.lineJoin = "round";
    function body(dx, dy) {
      c.beginPath(); c.ellipse(32 + dx, 54 + dy, 13, 16, 0, 0, TAU);
      c.moveTo(32 + 13 + dx, 26 + dy); c.arc(32 + dx, 26 + dy, 13, 0, TAU);
    }
    /* the spear, held at the left */
    c.strokeStyle = INK; c.lineWidth = 3.2; c.beginPath(); c.moveTo(9, 16); c.lineTo(12, 90); c.stroke();
    c.fillStyle = "#cfc9b9"; poly(c, [[8.5, 2], [13, 16], [5, 17]]); c.fill(); c.lineWidth = 1.2; c.stroke();
    /* legs with knobby knees */
    c.strokeStyle = INK; c.lineWidth = 3.4;
    c.beginPath(); c.moveTo(27, 66); c.lineTo(22, 77); c.lineTo(20, 89); c.moveTo(37, 66); c.lineTo(43, 77); c.lineTo(45, 89); c.stroke();
    c.fillStyle = INK; circ(c, 22, 77, 3); c.fill(); circ(c, 43, 77, 3); c.fill();
    poly(c, [[14, 88], [24, 88], [24, 92], [13, 92]]); c.fill(); poly(c, [[41, 88], [51, 88], [52, 92], [41, 92]]); c.fill();
    /* arms */
    c.lineWidth = 3; c.beginPath(); c.moveTo(21, 46); c.lineTo(13, 54); c.lineTo(11, 44); c.moveTo(43, 46); c.lineTo(52, 54); c.lineTo(55, 46); c.stroke();
    /* the spiky crest */
    c.fillStyle = "#6c675c";
    [[-11, -9, 0.95], [-6, -13, 1.15], [0, -15, 1.25], [6, -13, 1.15], [11, -9, 0.95]].forEach(function (s) {
      var bx = 32 + s[0], by = 26 + s[1] * 0.75, tx = 32 + s[0] * 1.9, ty = 26 + s[1] * 1.85 * s[2];
      poly(c, [[bx - 3.5, by + 2], [tx, ty], [bx + 3.5, by + 2]]); c.fill(); c.strokeStyle = INK; c.lineWidth = 1.2; c.stroke();
    });
    /* body and head */
    var g = c.createLinearGradient(16, 10, 48, 70);
    g.addColorStop(0, "#d9d4c6"); g.addColorStop(1, "#6e695e");
    c.fillStyle = g; body(0, 0); c.fill();
    c.strokeStyle = INK; c.lineWidth = 2; c.beginPath(); c.ellipse(32, 54, 13, 16, 0, 0, TAU); c.stroke(); circ(c, 32, 26, 13); c.stroke();
    /* the carapace's segments */
    c.lineWidth = 1.2; [46, 53, 60].forEach(function (y) { c.beginPath(); c.moveTo(21, y); c.quadraticCurveTo(32, y + 4, 43, y); c.stroke(); });
    /* stencil green, a pixel off the lines */
    c.fillStyle = "rgba(92,176,96,0.42)"; body(1.2, 1); c.fill();
    /* big round eyes and a beak */
    c.fillStyle = "#fbf8ee"; circ(c, 26.5, 24, 5); c.fill(); circ(c, 37.5, 24, 5); c.fill();
    c.strokeStyle = INK; c.lineWidth = 1.3; circ(c, 26.5, 24, 5); c.stroke(); circ(c, 37.5, 24, 5); c.stroke();
    c.fillStyle = INK; circ(c, 27.5, 25, 2.2); c.fill(); circ(c, 36.5, 25, 2.2); c.fill();
    c.fillStyle = "#4a463e"; poly(c, [[29, 30], [35, 30], [32, 38]]); c.fill(); c.stroke();
  }
  /* the professor: an astronomer in a tall starry hat and robe, holding a telescope. Feet at (40, 138) */
  function drawProfessor(c, w, h) {
    c.lineCap = "round"; c.lineJoin = "round";
    var g;
    /* the robe */
    g = c.createLinearGradient(14, 50, 64, 138);
    g.addColorStop(0, "#9b978c"); g.addColorStop(1, "#3c3a35");
    c.fillStyle = g; poly(c, [[30, 56], [50, 56], [62, 136], [16, 136]]); c.fill();
    c.strokeStyle = INK; c.lineWidth = 2; c.stroke();
    c.fillStyle = "rgba(70,96,170,0.3)"; poly(c, [[31, 57], [51, 57], [63, 137], [17, 137]]); c.fill();
    c.strokeStyle = "rgba(20,18,14,0.45)"; c.lineWidth = 1;
    [[34, 70, 28, 134], [40, 70, 40, 134], [46, 70, 52, 134]].forEach(function (l) { c.beginPath(); c.moveTo(l[0], l[1]); c.lineTo(l[2], l[3]); c.stroke(); });
    c.fillStyle = "#efe9d6"; [[26, 100], [50, 92], [38, 118], [44, 80], [30, 82], [54, 120]].forEach(function (p) { star5(c, p[0], p[1], 3.2, 1.3, 0); c.fill(); });
    c.fillStyle = INK; poly(c, [[14, 134], [30, 134], [30, 139], [12, 139]]); c.fill(); poly(c, [[48, 134], [64, 134], [66, 139], [48, 139]]); c.fill();
    /* the telescope, raised toward the Moon */
    g = c.createLinearGradient(48, 30, 76, 54);
    g.addColorStop(0, "#d6d0bf"); g.addColorStop(1, "#5c574d");
    c.fillStyle = g; poly(c, [[50, 60], [74, 22], [80, 26], [56, 64]]); c.fill(); c.strokeStyle = INK; c.lineWidth = 1.6; c.stroke();
    c.fillStyle = "rgba(214,168,70,0.6)"; poly(c, [[71, 27], [75, 21], [80, 25], [76, 31]]); c.fill(); poly(c, [[58, 49], [61, 45], [66, 48], [63, 52]]); c.fill();
    /* the arm */
    c.strokeStyle = INK; c.lineWidth = 6.5; c.beginPath(); c.moveTo(46, 62); c.lineTo(56, 70); c.lineTo(60, 56); c.stroke();
    c.strokeStyle = "#8a867b"; c.lineWidth = 4; c.stroke();
    /* the face and the long white beard */
    c.fillStyle = "#e9e2cf"; circ(c, 40, 46, 9); c.fill(); c.strokeStyle = INK; c.lineWidth = 1.5; c.stroke();
    c.fillStyle = "#f6f3ea"; poly(c, [[31, 47], [49, 47], [46, 62], [40, 76], [34, 62]]); c.fill(); c.stroke();
    c.strokeStyle = "rgba(20,18,14,0.4)"; c.lineWidth = 0.8; [36, 40, 44].forEach(function (x) { c.beginPath(); c.moveTo(x, 52); c.lineTo(40 + (x - 40) * 0.4, 72); c.stroke(); });
    c.fillStyle = INK; circ(c, 37, 44, 1.2); c.fill(); circ(c, 43.5, 44, 1.2); c.fill();
    /* the tall pointed hat, with stars and a crescent */
    g = c.createLinearGradient(28, 0, 52, 40);
    g.addColorStop(0, "#a8a498"); g.addColorStop(1, "#3a3833");
    c.fillStyle = g; poly(c, [[28, 39], [52, 39], [43, 0]]); c.fill(); c.strokeStyle = INK; c.lineWidth = 1.6; c.stroke();
    c.fillStyle = "rgba(70,96,170,0.38)"; poly(c, [[29, 40], [53, 40], [44, 1]]); c.fill();
    c.fillStyle = INK; c.beginPath(); c.ellipse(40, 39, 15, 3.4, 0, 0, TAU); c.fill();
    c.fillStyle = "rgba(240,206,96,0.95)"; star5(c, 40, 26, 3.4, 1.4, 0); c.fill(); star5(c, 44, 13, 2.6, 1.1, 0.3); c.fill();
    c.beginPath(); c.arc(36, 33, 3.2, 0.5, 4.6); c.arc(37.4, 32.3, 2.5, 4.4, 0.7, true); c.closePath(); c.fill();
  }
  /* the gun carriage: a great spoked wheel and the trunnion block; the barrel's pivot is at (80, 28) */
  function drawCarriage(c, w, h) {
    var cx = 84, cy = 62, r = 32, i, g;
    c.lineCap = "round";
    /* the cradle */
    g = c.createLinearGradient(50, 20, 110, 96);
    g.addColorStop(0, "#77736a"); g.addColorStop(1, "#2c2a26");
    c.fillStyle = g; poly(c, [[66, 22], [96, 22], [128, 96], [30, 96]]); c.fill(); c.strokeStyle = INK; c.lineWidth = 2; c.stroke();
    c.strokeStyle = "rgba(230,224,208,0.35)"; c.lineWidth = 1; c.beginPath(); c.moveTo(68, 26); c.lineTo(36, 92); c.stroke();
    /* rivets */
    c.fillStyle = "#c9c3b2"; for (i = 0; i < 6; i++) { circ(c, 52 + i * 12, 88, 1.8); c.fill(); }
    /* the wheel */
    c.strokeStyle = INK; c.lineWidth = 9; circ(c, cx, cy, r); c.stroke();
    c.strokeStyle = "#8d887c"; c.lineWidth = 5.5; circ(c, cx, cy, r); c.stroke();
    c.strokeStyle = INK; c.lineWidth = 3;
    for (i = 0; i < 12; i++) { var a = i / 12 * TAU; c.beginPath(); c.moveTo(cx + Math.cos(a) * 6, cy + Math.sin(a) * 6); c.lineTo(cx + Math.cos(a) * (r - 3), cy + Math.sin(a) * (r - 3)); c.stroke(); }
    c.fillStyle = "#59554c"; circ(c, cx, cy, 8); c.fill(); c.strokeStyle = INK; c.lineWidth = 2; c.stroke();
    c.fillStyle = "rgba(214,168,70,0.6)"; circ(c, cx, cy, 4); c.fill();
    /* the trunnion block */
    c.fillStyle = "#4a473f"; c.fillRect(68, 16, 24, 20); c.strokeStyle = INK; c.lineWidth = 2; c.strokeRect(68, 16, 24, 20);
    c.fillStyle = "#c9c3b2"; circ(c, 80, 26, 4); c.fill();
  }
  /* the barrel, pointing right, its pivot (trunnions) at (54, 28) */
  function drawBarrel(c, w, h) {
    var g = c.createLinearGradient(0, 4, 0, 52), i;
    g.addColorStop(0, "#2a2824"); g.addColorStop(0.28, "#b9b4a7"); g.addColorStop(0.5, "#7d796f"); g.addColorStop(1, "#1f1d1a");
    /* breech knob */
    c.fillStyle = g; circ(c, 13, 28, 9); c.fill(); c.strokeStyle = INK; c.lineWidth = 2; c.stroke();
    c.fillStyle = g; poly(c, [[18, 5], [196, 13], [196, 43], [18, 51]]); c.fill(); c.stroke();
    /* reinforcing bands */
    [[22, 9], [44, 7], [92, 6], [140, 6]].forEach(function (b) {
      var x = b[0], t = 5 + (x - 18) / 178 * 8 - 2.5, bt = 51 - (x - 18) / 178 * 8 + 2.5;
      c.fillStyle = g; c.fillRect(x, t, b[1], bt - t); c.strokeStyle = INK; c.lineWidth = 1.6; c.strokeRect(x, t, b[1], bt - t);
      c.fillStyle = "#e3ddcb"; for (var k = 0; k < 3; k++) { circ(c, x + b[1] / 2, t + 6 + k * (bt - t - 12) / 2, 1.3); c.fill(); }
    });
    /* the flared muzzle ring, a brass hand-tint */
    c.fillStyle = g; poly(c, [[190, 8], [210, 3], [210, 53], [190, 48]]); c.fill(); c.strokeStyle = INK; c.lineWidth = 2; c.stroke();
    c.fillStyle = "rgba(214,168,70,0.5)"; poly(c, [[191, 9], [211, 4], [211, 54], [191, 49]]); c.fill();
    c.strokeStyle = "rgba(255,250,236,0.35)"; c.lineWidth = 1.2; c.beginPath(); c.moveTo(20, 15); c.lineTo(190, 19); c.stroke();
    for (i = 0; i < 9; i++) { c.fillStyle = "rgba(20,18,14,0.6)"; circ(c, 66 + i * 14, 45 - i * 0.4, 1); c.fill(); }
  }
  /* the shell (the astronomers' capsule), pointing right, brass-tinted, with a porthole */
  function drawCapsule(c, w, h) {
    var g = c.createLinearGradient(0, 2, 0, 30);
    g.addColorStop(0, "#5a564c"); g.addColorStop(0.3, "#efe9d8"); g.addColorStop(0.6, "#a39d8e"); g.addColorStop(1, "#2e2b26");
    c.fillStyle = g; c.beginPath(); c.moveTo(8, 4); c.lineTo(38, 4); c.bezierCurveTo(52, 4, 60, 10, 63, 16); c.bezierCurveTo(60, 22, 52, 28, 38, 28); c.lineTo(8, 28); c.closePath(); c.fill();
    c.strokeStyle = INK; c.lineWidth = 2; c.stroke();
    c.fillStyle = "rgba(220,172,64,0.55)"; c.beginPath(); c.moveTo(9, 5); c.lineTo(39, 5); c.bezierCurveTo(53, 5, 61, 11, 64, 17); c.bezierCurveTo(61, 23, 53, 29, 39, 29); c.lineTo(9, 29); c.closePath(); c.fill();
    c.fillStyle = g; c.fillRect(2, 2, 7, 28); c.strokeRect(2, 2, 7, 28);
    c.strokeStyle = "rgba(20,18,14,0.6)"; c.lineWidth = 1; c.beginPath(); c.moveTo(38, 5); c.lineTo(38, 27); c.moveTo(18, 5); c.lineTo(18, 27); c.stroke();
    c.fillStyle = "#2a2723"; circ(c, 28, 16, 5.5); c.fill(); c.strokeStyle = "#e9e3d0"; c.lineWidth = 1.6; c.stroke();
    c.fillStyle = "rgba(255,255,255,0.6)"; circ(c, 26.5, 14.5, 1.6); c.fill();
  }
  /* a puff of Méliès smoke */
  function drawPuff(c, w, h) {
    [[32, 37, 17], [19, 39, 12], [45, 39, 13], [25, 26, 13], [40, 25, 12], [33, 16, 10], [12, 31, 8], [52, 31, 8]].forEach(function (b) {
      var g = c.createRadialGradient(b[0] - b[2] * 0.3, b[1] - b[2] * 0.35, 1, b[0], b[1], b[2]);
      g.addColorStop(0, "rgba(255,255,252,1)"); g.addColorStop(0.68, "rgba(232,229,220,0.95)"); g.addColorStop(1, "rgba(170,166,156,0)");
      c.fillStyle = g; circ(c, b[0], b[1], b[2]); c.fill();
    });
    c.strokeStyle = "rgba(80,76,68,0.32)"; c.lineWidth = 1.3; c.beginPath(); c.arc(32, 37, 15.5, 0.18 * Math.PI, 0.82 * Math.PI); c.stroke();
  }
  /* a painted cloud flat (a stage cut-out: flat along the bottom) */
  function drawCloud(c, w, h) {
    var bumps = [[20, 58, 15], [44, 46, 21], [76, 36, 25], [110, 32, 27], [144, 38, 23], [174, 50, 18], [190, 62, 9]], g;
    c.fillStyle = INK;
    bumps.forEach(function (b) { circ(c, b[0], b[1], b[2] + 2.4); c.fill(); });
    c.fillRect(3, 54, 196, 22);
    g = c.createLinearGradient(0, 4, 0, 74);
    g.addColorStop(0, "#f2eee4"); g.addColorStop(0.6, "#c9c5ba"); g.addColorStop(1, "#8f8b81");
    c.fillStyle = g;
    bumps.forEach(function (b) { circ(c, b[0], b[1], b[2]); c.fill(); });
    c.fillRect(5.5, 54, 191, 19.5);
    c.strokeStyle = "rgba(255,255,255,0.65)"; c.lineWidth = 1.6;
    bumps.forEach(function (b) { c.beginPath(); c.arc(b[0], b[1], b[2] * 0.72, Math.PI * 1.15, Math.PI * 1.55); c.stroke(); });
    c.save(); c.beginPath(); c.rect(6, 56, 190, 17); c.clip();
    hatch(c, 6, 56, 196, 74, 5, "rgba(30,27,22,0.3)", 1, 1);
    c.restore();
  }
  /* a dream star on its wire: a five-pointed star with a sleepy face (84 x 96, hook at the top) */
  function drawStar(c, w, h) {
    var cx = 42, cy = 54, g;
    c.strokeStyle = INK; c.lineWidth = 2; circ(c, cx, 8, 4); c.stroke();
    g = c.createRadialGradient(cx - 6, cy - 8, 3, cx, cy, 40);
    g.addColorStop(0, "#fbf7ea"); g.addColorStop(1, "#b7ad93");
    c.fillStyle = g; star5(c, cx, cy, 40, 17, 0); c.fill();
    c.fillStyle = "rgba(236,186,64,0.5)"; star5(c, cx + 1.5, cy + 1, 40, 17, 0); c.fill();
    c.strokeStyle = INK; c.lineWidth = 2.6; star5(c, cx, cy, 40, 17, 0); c.stroke();
    c.lineWidth = 1.8; c.beginPath(); c.arc(cx - 7.5, cy - 2, 4.2, 0.15 * Math.PI, 0.85 * Math.PI); c.stroke();
    c.beginPath(); c.arc(cx + 7.5, cy - 2, 4.2, 0.15 * Math.PI, 0.85 * Math.PI); c.stroke();
    c.beginPath(); c.arc(cx, cy + 5, 4.5, 0.2 * Math.PI, 0.8 * Math.PI); c.stroke();
    c.fillStyle = "rgba(214,110,90,0.35)"; circ(c, cx - 12, cy + 4, 3.5); c.fill(); circ(c, cx + 12, cy + 4, 3.5); c.fill();
  }
  /* film grain: a tile of sparse black and white specks */
  function drawGrain(c, w, h) {
    var img = c.createImageData(w, h), d = img.data;
    for (var i = 0; i < d.length; i += 4) {
      var v = Math.random() < 0.5 ? 12 : 245, a = Math.random();
      d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = Math.round(a * a * a * 80);
    }
    c.putImageData(img, 0, 0);
  }
  /* an intertitle card: black, with a double border and corner ornaments */
  function drawCard(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w * 0.6);
    g.addColorStop(0, "#1c1a17"); g.addColorStop(1, "#070706");
    c.fillStyle = g; rrect(c, 0, 0, w, h, 10); c.fill();
    c.strokeStyle = PAPER; c.lineWidth = 2.4; rrect(c, 10, 10, w - 20, h - 20, 6); c.stroke();
    c.lineWidth = 1; rrect(c, 17, 17, w - 34, h - 34, 4); c.stroke();
    c.fillStyle = PAPER;
    [[24, 24], [w - 24, 24], [24, h - 24], [w - 24, h - 24]].forEach(function (p) { star5(c, p[0], p[1], 7, 3, 0); c.fill(); });
    [[50, h / 2], [w - 50, h / 2]].forEach(function (p) {
      c.beginPath(); c.arc(p[0], p[1], 9, 0, TAU); c.lineWidth = 1.5; c.stroke();
      c.beginPath(); c.arc(p[0] + (p[0] < w / 2 ? 4 : -4), p[1] - 2, 7, 0, TAU); c.fillStyle = "#0b0a09"; c.fill();
    });
  }
  function ensureMoonArt(scene) {
    canvasTex(scene, "md-moonshot-moon", MOON_R * 2 + 8, MOON_R * 2 + 8, drawMoon);
    for (var i = 0; i < STENCIL.length; i++) canvasTex(scene, "md-moonshot-crater-" + i, 100, 100, drawCrater(STENCIL[i]));
    canvasTex(scene, "md-moonshot-sel", 64, 94, drawSelenite);
    canvasTex(scene, "md-moonshot-prof", 84, 140, drawProfessor);
    canvasTex(scene, "md-moonshot-carriage", 160, 98, drawCarriage);
    canvasTex(scene, "md-moonshot-barrel", BARREL_W, 56, drawBarrel);
    canvasTex(scene, "md-moonshot-capsule", 66, 32, drawCapsule);
    canvasTex(scene, "md-moonshot-puff", 64, 64, drawPuff);
    canvasTex(scene, "md-moonshot-cloud", 202, 78, drawCloud);
    canvasTex(scene, "md-moonshot-star", 84, 96, drawStar);
    canvasTex(scene, "md-moonshot-grain", 256, 256, drawGrain);
    canvasTex(scene, "md-moonshot-card", 600, 170, drawCard);
  }

  /* ── the painted backdrop, the city flats and the theater frame, drawn per canvas size (B is the layout) ── */
  function drawSky(B, W, H) {
    return function (c) {
      var k = B.k, g, i;
      g = c.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, "#0f0f0e"); g.addColorStop(0.5, "#23221f"); g.addColorStop(0.78, "#3c3a35"); g.addColorStop(1, "#4d4a43");
      c.fillStyle = g; c.fillRect(0, 0, W, H);
      /* brush strokes on the painted canvas */
      for (i = 0; i < 46; i++) {
        var x = rnd(-100, W), y = rnd(0, H * 0.8), len = rnd(120, 380) * k;
        c.strokeStyle = "rgba(255,255,250," + rnd(0.012, 0.035).toFixed(3) + ")"; c.lineWidth = rnd(6, 22) * k;
        c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + len / 2, y + rnd(-14, 14) * k, x + len, y + rnd(-8, 8) * k); c.stroke();
      }
      c.save(); c.globalAlpha = 0.05; hatch(c, 0, 0, W, H * 0.8, 7 * k, "#ffffff", 1, 1); c.restore();
      /* painted stars */
      for (i = 0; i < 90; i++) { c.fillStyle = "rgba(232,228,214," + rnd(0.25, 0.8).toFixed(2) + ")"; var sz = rnd(1, 2.2) * k; c.fillRect(rnd(0, W), rnd(0, H * 0.66), sz, sz); }
      for (i = 0; i < 16; i++) {
        var sx = rnd(W * 0.05, W * 0.95), sy = rnd(H * 0.06, H * 0.6), r = rnd(3.5, 7.5) * k;
        c.fillStyle = "#dcd7c8"; star5(c, sx, sy, r, r * 0.42, rnd(-0.3, 0.3)); c.fill();
        c.strokeStyle = "rgba(10,9,8,0.8)"; c.lineWidth = 1; c.stroke();
      }
      /* Saturn, from the film's dream, painted small and far away */
      var px = W * 0.34, py = H * 0.17, pr = 15 * k;
      c.fillStyle = "#b9b3a3"; circ(c, px, py, pr); c.fill();
      c.fillStyle = "rgba(206,150,80,0.35)"; circ(c, px + 1, py + 1, pr); c.fill();
      c.strokeStyle = INK; c.lineWidth = 1.5; circ(c, px, py, pr); c.stroke();
      c.strokeStyle = "#d9d3c2"; c.lineWidth = 3 * k; c.beginPath(); c.ellipse(px, py, pr * 2, pr * 0.55, -0.3, 0.05 * Math.PI, 0.95 * Math.PI); c.stroke();
      c.strokeStyle = "#d9d3c2"; c.beginPath(); c.ellipse(px, py, pr * 2, pr * 0.55, -0.3, 1.0 * Math.PI, 2 * Math.PI); c.stroke();
      /* a low bank of painted cloud along the horizon */
      for (i = 0; i < 26; i++) {
        var bx = i / 25 * W + rnd(-20, 20), by = H * 0.7 + rnd(-10, 12) * k, br = rnd(26, 52) * k;
        g = c.createRadialGradient(bx, by - br * 0.4, 2, bx, by, br);
        g.addColorStop(0, "rgba(140,136,126,0.55)"); g.addColorStop(1, "rgba(90,86,78,0)");
        c.fillStyle = g; circ(c, bx, by, br); c.fill();
      }
    };
  }
  function drawCity(B, W, H) {
    return function (c) {
      var k = B.k, i, g, x;
      var hz = H * 0.74;
      /* the foundry's smokestacks on the far side of the city, smoke drifting */
      var stacks = [0.08, 0.15, 0.21, 0.27, 0.34, 0.42, 0.5, 0.58, 0.88, 0.94];
      stacks.forEach(function (f, j) {
        var sx = W * f, top = hz - (H * 0.12 + (j % 3) * H * 0.035), sw = (9 + (j % 2) * 4) * k;
        for (var p = 0; p < 6; p++) {
          var r = (10 + p * 5) * k;
          c.fillStyle = "rgba(170,166,156," + (0.22 - p * 0.03).toFixed(2) + ")"; circ(c, sx + p * 13 * k, top - 8 * k - p * 9 * k, r); c.fill();
        }
        c.fillStyle = "#2f2d29"; c.fillRect(sx - sw / 2, top, sw, hz - top + 4);
        c.fillStyle = "#4a4741"; c.fillRect(sx - sw / 2 - 2 * k, top, sw + 4 * k, 4 * k); c.fillRect(sx - sw / 2, top + 14 * k, sw, 2 * k);
      });
      /* the far roofs */
      c.fillStyle = "#26251f"; c.beginPath(); c.moveTo(0, H);
      for (x = 0; x <= W + 40; x += 40 * k) { var hh = hz + ((x * 7) % 23) * k * 0.6; c.lineTo(x, hh); c.lineTo(x + 20 * k, hh - 12 * k); c.lineTo(x + 40 * k, hh); }
      c.lineTo(W, H); c.closePath(); c.fill();
      /* lit windows in the far roofs */
      for (i = 0; i < 40; i++) { c.fillStyle = "rgba(226,214,170," + rnd(0.25, 0.6).toFixed(2) + ")"; c.fillRect(rnd(0, W), hz + rnd(6, 30) * k, 2.5 * k, 3.5 * k); }
      /* nearer houses: tall mansard roofs at the left (behind the cannon), lower roofs to the right under the Moon */
      function house(x0, w, top, wall) {
        var roofH = 30 * k, wy = top + roofH;
        g = c.createLinearGradient(x0, top, x0 + w, top);
        g.addColorStop(0, "#5a574f"); g.addColorStop(1, "#3e3c36");
        c.fillStyle = g; poly(c, [[x0, wy], [x0 + 10 * k, top], [x0 + w - 10 * k, top], [x0 + w, wy]]); c.fill();
        c.strokeStyle = INK; c.lineWidth = 1.6; c.stroke();
        c.save(); poly(c, [[x0, wy], [x0 + 10 * k, top], [x0 + w - 10 * k, top], [x0 + w, wy]]); c.clip();
        c.strokeStyle = "rgba(15,13,10,0.35)"; c.lineWidth = 1; for (var yy = top + 5 * k; yy < wy; yy += 5 * k) { c.beginPath(); c.moveTo(x0, yy); c.lineTo(x0 + w, yy); c.stroke(); }
        c.restore();
        /* dormers */
        for (var d = x0 + 18 * k; d < x0 + w - 24 * k; d += 34 * k) {
          c.fillStyle = "#77736a"; poly(c, [[d, wy - 4 * k], [d, top + 10 * k], [d + 7 * k, top + 4 * k], [d + 14 * k, top + 10 * k], [d + 14 * k, wy - 4 * k]]); c.fill(); c.strokeStyle = INK; c.lineWidth = 1.2; c.stroke();
          c.fillStyle = Math.random() < 0.5 ? "rgba(232,218,170,0.75)" : "#1d1b18"; c.fillRect(d + 3.5 * k, top + 12 * k, 7 * k, 9 * k);
        }
        /* chimneys */
        for (var ch = 0; ch < 2; ch++) {
          var cx2 = x0 + w * (0.25 + ch * 0.5);
          c.fillStyle = "#6a665d"; c.fillRect(cx2, top - 16 * k, 12 * k, 18 * k); c.strokeStyle = INK; c.lineWidth = 1.2; c.strokeRect(cx2, top - 16 * k, 12 * k, 18 * k);
          c.fillStyle = "#3a3832"; c.fillRect(cx2 + 2 * k, top - 22 * k, 3 * k, 6 * k); c.fillRect(cx2 + 7 * k, top - 21 * k, 3 * k, 5 * k);
        }
        g = c.createLinearGradient(0, wy, 0, H);
        g.addColorStop(0, wall); g.addColorStop(1, "#1f1d1a");
        c.fillStyle = g; c.fillRect(x0, wy, w, H - wy); c.strokeStyle = INK; c.lineWidth = 1.6; c.strokeRect(x0, wy, w, H - wy);
        for (var wx = x0 + 10 * k; wx < x0 + w - 14 * k; wx += 22 * k) for (var wy2 = wy + 10 * k; wy2 < B.floorY - 16 * k; wy2 += 26 * k) {
          c.fillStyle = Math.random() < 0.3 ? "rgba(232,218,170,0.7)" : "#25231f"; c.fillRect(wx, wy2, 9 * k, 14 * k);
          c.strokeStyle = "rgba(10,9,8,0.8)"; c.lineWidth = 1; c.strokeRect(wx, wy2, 9 * k, 14 * k);
        }
      }
      var left = B.edgeL;
      house(left - 20 * k, B.pivX - left + 30 * k, H * 0.64, "#6c6960");
      house(B.pivX + 30 * k, 150 * k, H * 0.69, "#615e56");
      house(B.pivX + 190 * k, 120 * k, H * 0.74, "#57544d");
      for (x = B.pivX + 330 * k; x < W; x += 170 * k) house(x, 150 * k, H * (0.79 + ((x / k) % 3) * 0.012), "#4f4c46");
      /* the gun platform: a timber deck on trestles */
      var d0 = B.pivX - 112 * k, d1 = B.pivX + 96 * k, dy = B.baseY;
      c.strokeStyle = INK; c.lineWidth = 5 * k;
      for (x = d0 + 14 * k; x < d1; x += 52 * k) { c.beginPath(); c.moveTo(x, dy); c.lineTo(x + 40 * k, B.floorY); c.moveTo(x + 40 * k, dy); c.lineTo(x, B.floorY); c.stroke(); }
      c.strokeStyle = "#6e6a60"; c.lineWidth = 2.6 * k;
      for (x = d0 + 14 * k; x < d1; x += 52 * k) { c.beginPath(); c.moveTo(x, dy); c.lineTo(x + 40 * k, B.floorY); c.moveTo(x + 40 * k, dy); c.lineTo(x, B.floorY); c.stroke(); }
      g = c.createLinearGradient(0, dy, 0, dy + 12 * k);
      g.addColorStop(0, "#8f8a7e"); g.addColorStop(1, "#3d3a34");
      c.fillStyle = g; c.fillRect(d0, dy, d1 - d0, 12 * k); c.strokeStyle = INK; c.lineWidth = 1.8; c.strokeRect(d0, dy, d1 - d0, 12 * k);
      /* the stage floor and the footlights */
      g = c.createLinearGradient(0, B.floorY, 0, H);
      g.addColorStop(0, "#3a3630"); g.addColorStop(1, "#14120f");
      c.fillStyle = g; c.fillRect(0, B.floorY, W, H - B.floorY);
      c.strokeStyle = "rgba(0,0,0,0.6)"; c.lineWidth = 1;
      for (x = -W; x < W * 2; x += 46 * k) { c.beginPath(); c.moveTo(W / 2 + (x - W / 2) * 0.6, B.floorY); c.lineTo(x, H); c.stroke(); }
      c.fillStyle = "#8a8478"; c.fillRect(0, B.floorY, W, 2 * k);
      for (x = B.edgeL + 30 * k; x < B.edgeR - 10 * k; x += 64 * k) {
        g = c.createRadialGradient(x, B.floorY, 1, x, B.floorY - 6 * k, 46 * k);
        g.addColorStop(0, "rgba(255,236,170,0.4)"); g.addColorStop(1, "rgba(255,236,170,0)");
        c.fillStyle = g; c.fillRect(x - 50 * k, B.floorY - 52 * k, 100 * k, 56 * k);
        c.fillStyle = "#16140f"; c.beginPath(); c.arc(x, B.floorY + 6 * k, 9 * k, Math.PI, 0); c.fill();
        c.fillStyle = "#fff4cf"; c.beginPath(); c.ellipse(x, B.floorY + 1.5 * k, 5 * k, 2 * k, 0, 0, TAU); c.fill();
      }
      /* the sign on two posts: the gunner's board (the HUD is painted on it each frame) */
      var hb = B.hud;
      c.fillStyle = "#2a2621"; c.fillRect(hb.x + 18 * k, hb.y + hb.h, 6 * k, B.floorY - hb.y - hb.h); c.fillRect(hb.x + hb.w - 24 * k, hb.y + hb.h, 6 * k, B.floorY - hb.y - hb.h);
      c.fillStyle = "#e4dcc6"; rrect(c, hb.x, hb.y, hb.w, hb.h, 5 * k); c.fill();
      c.strokeStyle = INK; c.lineWidth = 2.4; c.stroke();
      c.lineWidth = 1; rrect(c, hb.x + 4 * k, hb.y + 4 * k, hb.w - 8 * k, hb.h - 8 * k, 3 * k); c.stroke();
    };
  }
  function drawFrame(B, W, H) {
    return function (c) {
      var k = B.k, g, i, y;
      /* the vignette */
      g = c.createRadialGradient(W / 2, H * 0.48, Math.min(W, H) * 0.32, W / 2, H * 0.48, Math.sqrt(W * W + H * H) * 0.56);
      g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,0.62)");
      c.fillStyle = g; c.fillRect(0, 0, W, H);
      /* the curtains, tied back a little at the middle, with a faded crimson wash */
      function curtain(side) {
        var x0 = side < 0 ? B.sprW : W - B.sprW, cw = B.curW;
        c.beginPath(); c.moveTo(x0, 0);
        for (y = 0; y <= H; y += 8) { var tuck = 1 - 0.38 * Math.sin(Math.PI * y / H); c.lineTo(x0 - side * cw * tuck, y); }
        c.lineTo(x0, H); c.closePath();
        g = c.createLinearGradient(x0, 0, x0 - side * cw, 0);
        g.addColorStop(0, "#0e0d0c"); g.addColorStop(0.3, "#3a3632"); g.addColorStop(0.55, "#1a1816"); g.addColorStop(0.8, "#4a4540"); g.addColorStop(1, "#24211e");
        c.fillStyle = g; c.fill();
        c.fillStyle = "rgba(150,34,34,0.2)"; c.fill();
        c.strokeStyle = INK; c.lineWidth = 2; c.stroke();
        /* the tie-back cord with a gold tassel */
        var ty = H * 0.5, tx = x0 - side * cw * 0.62;
        c.strokeStyle = "rgba(214,170,70,0.75)"; c.lineWidth = 2.5 * k; c.beginPath(); c.moveTo(x0, ty - 8 * k); c.quadraticCurveTo((x0 + tx) / 2, ty + 6 * k, tx, ty); c.stroke();
        c.fillStyle = "rgba(214,170,70,0.85)"; poly(c, [[tx - 3 * k, ty], [tx + 3 * k, ty], [tx + 5 * k, ty + 16 * k], [tx - 5 * k, ty + 16 * k]]); c.fill();
      }
      curtain(-1); curtain(1);
      /* the valance: folds, a scalloped hem with fringe, a gold braid */
      var vh = B.valH;
      g = c.createLinearGradient(0, 0, W, 0);
      for (i = 0; i <= 24; i++) g.addColorStop(i / 24, i % 2 ? "#2c2925" : "#46423c");
      c.fillStyle = g; c.beginPath(); c.moveTo(0, 0); c.lineTo(W, 0); c.lineTo(W, vh);
      var sc = 46 * k, n = Math.ceil(W / sc);
      for (i = n; i >= 0; i--) { var sx = i * sc; c.quadraticCurveTo(sx - sc / 2, vh + 12 * k, sx - sc, vh); }
      c.closePath(); c.fill();
      c.fillStyle = "rgba(150,34,34,0.2)"; c.fill();
      c.strokeStyle = INK; c.lineWidth = 2; c.stroke();
      c.strokeStyle = "rgba(214,170,70,0.7)"; c.lineWidth = 2.5 * k; c.beginPath(); c.moveTo(0, vh - 7 * k); c.lineTo(W, vh - 7 * k); c.stroke();
      c.strokeStyle = "rgba(214,190,130,0.55)"; c.lineWidth = 1;
      for (i = 0; i <= n; i++) for (var f = 0; f < 6; f++) { var fx = i * sc - sc / 2 + (f - 2.5) * 5 * k, fy = vh + 8 * k * (1 - Math.pow((f - 2.5) / 3.2, 2)); c.beginPath(); c.moveTo(fx, fy); c.lineTo(fx, fy + 5 * k); c.stroke(); }
      /* the film's edges: sprocket holes down both sides */
      c.fillStyle = "#050505"; c.fillRect(0, 0, B.sprW, H); c.fillRect(W - B.sprW, 0, B.sprW, H);
      var hw = B.sprW * 0.52, hh = B.sprW * 0.4, step = B.sprW * 1.5;
      c.fillStyle = "rgba(214,208,192,0.78)";
      for (y = step * 0.3; y < H; y += step) { rrect(c, (B.sprW - hw) / 2, y, hw, hh, 2); c.fill(); rrect(c, W - B.sprW + (B.sprW - hw) / 2, y, hw, hh, 2); c.fill(); }
      /* the projector gate's rounded corners */
      c.fillStyle = "#000"; c.beginPath(); c.rect(0, 0, W, H); rrect(c, 0, 0, W, H, 20 * k, true); c.fill("evenodd");
    };
  }

  function roman(n) {
    var v = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]], out = "";
    n = Math.max(1, Math.min(39, n | 0));
    v.forEach(function (p) { while (n >= p[0]) { out += p[1]; n -= p[0]; } });
    return out;
  }
  function sfx(name) {
    var R = window.SolRealms;
    if (!R || !R.blip) return;
    try {
      if (name === "boom") { R.blip(120, 38, 0.6, "sawtooth", 0.06); R.blip(70, 30, 0.7, "sine", 0.12); R.hiss(0.8, 320, 0.1); }
      else if (name === "puff") { R.hiss(0.24, 2400, 0.04); R.blip(640, 1300, 0.09, "sine", 0.018); }
      else if (name === "gather") R.blip(260, 520, 0.4, "triangle", 0.014);
      else if (name === "thunk") { R.blip(170, 70, 0.2, "triangle", 0.08); R.hiss(0.14, 700, 0.05); }
      else if (name === "bonk") { R.blip(560, 360, 0.14, "square", 0.025); R.blip(300, 220, 0.12, "triangle", 0.04, 0.05); }
      else if (name === "twinkle") { R.blip(1500, 2600, 0.25, "sine", 0.02); R.blip(2200, 3000, 0.2, "sine", 0.014, 0.12); }
      else if (name === "clang") { R.blip(1700, 1100, 0.35, "triangle", 0.035); R.blip(2550, 1900, 0.3, "sine", 0.02); }
      else if (name === "laugh") { R.blip(700, 900, 0.09, "square", 0.018); R.blip(760, 980, 0.09, "square", 0.018, 0.12); R.blip(820, 1060, 0.1, "square", 0.018, 0.24); }
      else if (name === "click") R.blip(900, 0, 0.03, "square", 0.01);
    } catch (e) {}
  }

  M.extend("moonshot", {
    name: "Shoot the Moon", kind: "cannon level", level: "cannon level", act: "FIRE",
    how: "Georges Méliès's A Trip to the Moon (1902), on his painted stage: the astronomers climb into the shell and the great cannon fires them at the Moon. Every crater on the Moon's face carries a letter. Raise or lower the cannon (its angle) and pack more or less powder (its power) until the landing ring sits where you want the capsule to come down, then fire. The capsule flies into the picture for a moment while the Moon drifts, so aim where the crater WILL be: while your shot is lined up, that crater lights up. The Selenites, the Moon-men, pop onto the craters in puffs of smoke and vanish again (Méliès's stop trick: stop the camera, change the scene, start again). Smoke gathers on a crater just before one appears. Never land on a Selenite.",
    rules: "Landing in a wrong crater costs a life. So does landing on a Selenite (they capture the astronomers), or using up every shell (the gunners roll in more). A capsule that bounces off the Moon's face, misses the Moon, or is lost in a cloud or on a star costs a shell, not a life.",
    keys: "▲ ▼ or W / S raise and lower the cannon · ◀ ▶ or A / D less or more powder · Space or FIRE fires · or point with the mouse or a finger to put the landing ring there, and click (or lift your finger) to fire. The on-screen pad aims too.",
    tip: "SHOOT THE MOON — land the capsule in the crater with the right letter. Never land on a Selenite.",
    hint1: "Fire the capsule into the crater with the right letter. The passage stays in the side panel.",
    hint2: "This question has two right letters. Land a capsule in both craters that carry them.",
    news: ["",
      "Painted clouds slide across the sky. A capsule that flies into a cloud is lost: fire through the gaps.",
      "The Moon comes toward you and backs away (it grows and shrinks), as in Méliès's famous close-up, and drifts further.",
      "Two Selenites can guard the craters at once, and the gunners have one shell fewer.",
      "Stop trick! A Selenite can vanish in a puff of smoke and pop up on another crater. Watch where the smoke gathers.",
      "A star from the film's dream sequence swings across the sky on a wire. A capsule that hits it is lost.",
      "One shell fewer, and the Moon drifts faster and further.",
      "The craters no longer light up when your shot is lined up. Lead the drifting Moon yourself.",
      "Three Selenites at once, and two clouds cross the sky.",
      "The far side of the Moon: two swinging stars, five shells, and everything moves faster."],
    params: moonParams
  }, {
    moonParams: function (n) { return moonParams(n); },

    setup_moonshot: function () {
      ensureMoonArt(this);
      var P = moonParams(this.night), i;
      var B = this.mo = { P: P, craters: [], sels: [], puffs: [], caps: [], clouds: [], stars: [], cap: null, mt: rnd(0, 40), t: 0,
        ang: 50 * DEG, pow: 0.5, shells: P.shells, cd: 0, aimHold: 0, powHold: 0, lpx: null, lpy: null, kbArmed: false, ptrArmed: false, ptrWas: false,
        lastFrame: -9, face: { mood: "calm", ms: 0, side: 1 }, selCd: 5000, glow: -1, glowSel: false, fired: 0, landed: 0, wastedQ: 0, captures: 0,
        recoil: 0, filmT: 0, scr: [], qn: 0, titleMs: 0, titlePending: false, told: {}, ph1: rnd(0, TAU), ph2: rnd(0, TAU), ph3: rnd(0, TAU),
        skyKey: null, cityKey: null, frameKey: null, outcome: null };
      this.cameras.main.setBackgroundColor("#0b0a09");
      this.moonLayout();
      B.sky = this.add.image(0, 0, B.skyKey).setOrigin(0, 0).setDepth(0);
      B.moon = this.add.image(0, 0, "md-moonshot-moon").setDepth(2).setTint(0xf6e6ae);
      B.wisps = [this.add.image(0, 0, "md-moonshot-cloud").setDepth(2.6).setTint(0xcac6bc), this.add.image(0, 0, "md-moonshot-cloud").setDepth(2.6).setTint(0xbdb9ae).setFlipX(true)];
      B.faceG = this.add.graphics().setDepth(3);
      B.glowG = this.add.graphics().setDepth(4.2);
      B.selG = this.add.graphics().setDepth(6.6);
      B.city = this.add.image(0, 0, B.cityKey).setOrigin(0, 0).setDepth(7.5);
      B.gFar = this.add.graphics().setDepth(8);
      B.wireG = this.add.graphics().setDepth(8.8);
      B.gMid = this.add.graphics().setDepth(10);
      B.gNear = this.add.graphics().setDepth(12);
      B.ringG = this.add.graphics().setDepth(12.6);
      B.barrel = this.add.image(0, 0, "md-moonshot-barrel").setOrigin(BARREL_PIV / BARREL_W, 0.5).setDepth(13.6);
      B.carriage = this.add.image(0, 0, "md-moonshot-carriage").setOrigin(0.5, 1).setDepth(14);
      B.prof = this.add.image(0, 0, "md-moonshot-prof").setOrigin(0.48, 1).setDepth(14.2);
      B.fxG = this.add.graphics().setDepth(15.5);
      B.hudG = this.add.graphics().setDepth(16);
      var tx = { fontFamily: SERIF, fontSize: 14, color: INK, fontStyle: "bold" };
      B.txAngle = this.add.text(0, 0, "", tx).setOrigin(0, 0.5).setDepth(16.5);
      B.txPow = this.add.text(0, 0, "POWDER", tx).setOrigin(0, 0.5).setDepth(16.5);
      B.txShells = this.add.text(0, 0, "SHELLS", tx).setOrigin(0, 0.5).setDepth(16.5);
      B.txKeys = this.add.text(0, 0, "▲▼ angle · ◀▶ powder", { fontFamily: SERIF, fontSize: 11, color: "#4a453c", fontStyle: "italic" }).setOrigin(1, 0.5).setDepth(16.5);
      B.frame = this.add.image(0, 0, B.frameKey).setOrigin(0, 0).setDepth(20);
      B.card = this.add.image(0, 0, "md-moonshot-card").setDepth(19.4).setVisible(false);
      B.cardTop = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 14, color: "#d9d2bd", align: "center" }).setOrigin(0.5).setDepth(19.5).setVisible(false);
      B.cardMain = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 28, color: PAPER, fontStyle: "italic", align: "center" }).setOrigin(0.5).setDepth(19.5).setVisible(false);
      B.grain = this.add.tileSprite(0, 0, this.W, this.H, "md-moonshot-grain").setOrigin(0, 0).setDepth(21).setAlpha(0.55);
      B.filmG = this.add.graphics().setDepth(22);
      for (i = 0; i < 2; i++) B.clouds.push({ spr: this.add.image(-999, -999, "md-moonshot-cloud").setDepth(11).setVisible(false), lane: i, x0: i ? Math.PI + rnd(-0.5, 0.5) : rnd(0, TAU), dir: i ? -1 : 1, spd: i ? 0.8 : 1 });
      for (i = 0; i < 2; i++) B.stars.push({ spr: this.add.image(-999, -999, "md-moonshot-star").setOrigin(0.5, 0.06).setDepth(9).setVisible(false), ph: i ? Math.PI * 0.9 : rnd(0, TAU) });
      this.moonPlaceStatic();
      this.makeSol(B.pivX, B.baseY - 70 * B.k, "right").setVisible(false);   /* the professor fires the gun; the sprite stays for coin pop-ups */
    },

    /* everything that depends on the canvas size */
    moonLayout: function () {
      var B = this.mo, P = B.P, W = this.W, H = this.H, k;
      k = B.k = clamp(Math.min(H / 700, W / 1000), 0.6, 1.3);
      B.sprW = Math.round(13 * k); B.curW = Math.round(30 * k); B.valH = Math.round(34 * k);
      B.edgeL = B.sprW + B.curW * 0.62; B.edgeR = W - B.edgeL;
      B.floorY = Math.round(H - 22 * k);
      B.baseY = Math.round(B.floorY - 48 * k);
      B.pivX = Math.round(Math.max(B.edgeL + 92 * k, W * 0.13));
      /* the on-screen pad sits over the canvas's bottom-left corner: the cannon keeps clear of it */
      var pad = this.moonPadBox();
      if (pad && pad.x0 < W * 0.4 && pad.y0 < B.floorY) B.pivX = Math.max(B.pivX, Math.round(pad.x1 + 96 * k));
      B.pivY = B.baseY - 70 * k;
      B.bl = MUZZLE * k;
      B.aMin = 14 * DEG; B.aMax = 88 * DEG;
      /* the Moon: big and high on the right, kept clear of the curtains and the valance at its widest drift */
      B.R = Math.min(H * 0.19, W * 0.135);
      var grow = 1 + P.zoom, right = Math.min(B.edgeR, this.moonButtonsLeft());
      B.mx = Math.max(W * 0.52, Math.min(W * 0.7, right - B.R * grow - P.driftX * k - 6 * k));
      B.my = Math.max(H * 0.37, B.valH + 14 * k + B.R * 0.72 * grow + P.driftY * k);
      /* the flight: the landing point is the muzzle + the throw (angle, powder) + the drop; the throw that lands on the
         Moon's centre at 47° sets the scale, so half the powder lands about there */
      var m0 = this.moonMuzzle(47 * DEG);
      B.drop = 1.2 * Math.max(60 * k, m0.y - B.my);
      B.reach = Math.sqrt(Math.pow(B.mx - m0.x, 2) + Math.pow(B.my - B.drop - m0.y, 2));
      /* where a shot at the Moon's centre crosses the clouds and the stars: the cloud lanes and the star wires go there */
      var aim = this.moonSolve(B.mx, B.my), pc = this.moonPoint(aim.ang, aim.pow, CLOUD_U), ps = this.moonPoint(aim.ang, aim.pow, STAR_U);
      B.cloudY = [pc.y, Math.min(H * 0.6, pc.y + 60 * k)];
      B.cloudX0 = B.pivX + 40 * k;
      B.cloudX1 = Math.max(B.cloudX0 + 80 * k, B.mx - B.R * grow - P.driftX * k - 96 * k);
      var off = (54 - 96 * 0.06) * 0.78 * k;   /* from the wire's end to the star's centre */
      B.starPiv = [{ x: ps.x, len: Math.max(60 * k, ps.y - off) }, { x: ps.x - W * 0.12, len: Math.max(50 * k, (ps.y - off) * 0.8) }];
      /* the gunner's board */
      var hw = Math.round(clamp(W * 0.3, 250 * k, 330 * k)), hh = Math.round(48 * k);
      var hx = Math.round(clamp(W * 0.5 - hw / 2, B.pivX + 120 * k, W - B.edgeL - hw - 10 * k));
      B.hud = { x: hx, y: Math.round(B.floorY - 12 * k - hh), w: hw, h: hh };
      var self = this;
      [["skyKey", "md-moonshot-sky-", drawSky], ["cityKey", "md-moonshot-city-", drawCity], ["frameKey", "md-moonshot-frame-", drawFrame]].forEach(function (d) {
        var key = d[1] + W + "x" + H + "-" + Math.round(B.pivX);
        if (B[d[0]] === key) return;
        var old = B[d[0]];
        canvasTex(self, key, W, H, d[2](B, W, H));
        B[d[0]] = key;
        if (old && old !== key) { try { self.textures.remove(old); } catch (e) {} }
      });
    },
    /* the page's own buttons (Look, music, full screen) can hang down over the right of the canvas in a short frame:
       the Moon drifts clear of them */
    moonButtonsLeft: function () {
      var W = this.W, out = W;
      try {
        var cv = this.game && this.game.canvas, c = cv.getBoundingClientRect(), fx = W / c.width, fy = this.H / c.height, B = this.mo;
        ["btn-char", "btn-music-hud", "music-vol-hud", "btn-fs"].forEach(function (id) {
          var el = document.getElementById(id); if (!el || !el.offsetParent) return;
          var a = el.getBoundingClientRect(); if (!a.width) return;
          var x0 = (a.left - c.left) * fx, y1 = (a.bottom - c.top) * fy, x1 = (a.right - c.left) * fx;
          if (x1 > 0 && x0 < W && x0 > W * 0.5 && y1 > B.valH + 30 * B.k) out = Math.min(out, x0 - 6);
        });
      } catch (e) {}
      return out;
    },
    moonPadBox: function () {
      try {
        var pad = document.querySelector("#controls .dpad") || document.querySelector(".dpad"), cv = this.game && this.game.canvas;
        if (!pad || !cv) return null;
        var a = pad.getBoundingClientRect(), c = cv.getBoundingClientRect();
        if (!a.width || !a.height || !c.width || !c.height) return null;
        if (a.right < c.left || a.left > c.right || a.bottom < c.top || a.top > c.bottom) return null;
        var fx = this.W / c.width, fy = this.H / c.height;
        return { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
      } catch (e) { return null; }
    },
    moonPlaceStatic: function () {
      var B = this.mo, k = B.k, W = this.W, H = this.H, hb = B.hud;
      B.sky.setTexture(B.skyKey).setPosition(0, 0);
      B.city.setTexture(B.cityKey).setPosition(0, 0);
      B.frame.setTexture(B.frameKey).setPosition(0, 0);
      B.carriage.setPosition(B.pivX - 4 * k, B.baseY + 2 * k).setScale(k);
      B.barrel.setScale(k);
      B.prof.setPosition(B.pivX - 82 * k, B.baseY + 1).setScale(k);
      B.txAngle.setFontSize(Math.round(15 * k)).setPosition(hb.x + 12 * k, hb.y + hb.h * 0.32);
      B.txPow.setFontSize(Math.round(13 * k)).setPosition(hb.x + hb.w * 0.42, hb.y + hb.h * 0.32);
      B.txShells.setFontSize(Math.round(13 * k)).setPosition(hb.x + 12 * k, hb.y + hb.h * 0.72);
      B.txKeys.setFontSize(Math.round(11 * k)).setPosition(hb.x + hb.w - 10 * k, hb.y + hb.h * 0.72);
      B.card.setPosition(W / 2, H * 0.47).setScale(Math.min(1, (W - 2 * B.edgeL) / 640) * Math.max(0.75, k));
      B.cardTop.setFontSize(Math.round(14 * k)).setPosition(W / 2, H * 0.47 - 30 * B.card.scaleY);
      B.cardMain.setFontSize(Math.round(27 * k)).setPosition(W / 2, H * 0.47 + 12 * B.card.scaleY).setWordWrapWidth(520 * B.card.scaleX);
      B.grain.setSize(W, H);
      B.clouds.forEach(function (c) { c.spr.setScale(0.9 * k); });
      B.stars.forEach(function (s) { s.spr.setScale(0.78 * k); });
    },
    resize_moonshot: function () {
      var B = this.mo, self = this;
      this.moonLayout();
      this.moonPlaceStatic();
      /* a capsule in the air goes back on the pile */
      if (B.cap) { B.shells += 1; this.moonFreeCap(B.cap); B.cap = null; }
      B.caps.slice().forEach(function (c) { if (c.state !== "stuck") self.moonFreeCap(c); });
      this.moonCraterFont();
      this.player.setPosition(B.pivX, B.baseY - 70 * B.k);
    },

    /* ── the geometry of a shot ── */
    moonMuzzle: function (a) {
      var B = this.mo;
      return { x: B.pivX + Math.cos(a) * B.bl, y: B.pivY - Math.sin(a) * B.bl };
    },
    moonThrow: function (pow) { return this.mo.reach * (0.55 + 0.9 * pow); },
    /* the capsule's place on screen at share u of its flight (it lands at u = 1) */
    moonPoint: function (a, pow, u) {
      var B = this.mo, m = this.moonMuzzle(a), d = this.moonThrow(pow);
      return { x: m.x + Math.cos(a) * d * u, y: m.y - Math.sin(a) * d * u + B.drop * u * u };
    },
    moonLanding: function (a, pow) { return this.moonPoint(a == null ? this.mo.ang : a, pow == null ? this.mo.pow : pow, 1); },
    /* the angle and powder that land the capsule on (x, y), clamped to what the cannon can do */
    moonSolve: function (x, y) {
      var B = this.mo, a = 47 * DEG, dx = 0, dy = 0, i;
      for (i = 0; i < 5; i++) {
        var m = this.moonMuzzle(a);
        dx = x - m.x; dy = (y - B.drop) - m.y;
        a = clamp(Math.atan2(-dy, Math.max(1, dx)), B.aMin, B.aMax);
      }
      var m2 = this.moonMuzzle(a); dx = x - m2.x; dy = (y - B.drop) - m2.y;
      var d = Math.sqrt(dx * dx + dy * dy);
      return { ang: a, pow: clamp((d / B.reach - 0.55) / 0.9, 0, 1) };
    },
    moonAimAt: function (x, y) { var s = this.moonSolve(x, y); this.mo.ang = s.ang; this.mo.pow = s.pow; return s; },
    /* the Moon at clock time t: centre, scale, radius */
    moonAt: function (t) {
      var B = this.mo, P = B.P, k = B.k, w = P.driftSpd, sc = 1 + P.zoom * Math.sin((0.45 * w + 0.18) * t + B.ph3);
      return { x: B.mx + P.driftX * k * Math.sin(w * t + B.ph1), y: B.my + P.driftY * k * Math.sin(w * 1.37 * t + B.ph2), s: sc, r: B.R * sc };
    },
    moonCraterAt: function (cr, t) {
      var st = this.moonAt(t);
      return { x: st.x + cr.px * st.r, y: st.y + cr.py * st.r, r: this.mo.P.craterR * st.r };
    },
    /* the shot (angle, powder) that lands in crater i if fired now (it leads the drifting Moon) */
    moonCraterAim: function (i) {
      var B = this.mo, cr = B.craters[i]; if (!cr) return null;
      var at = this.moonCraterAt(cr, B.mt + B.P.flightMs / 1000);
      return this.moonSolve(at.x, at.y);
    },
    /* the clouds and the stars at clock time t */
    moonCloudAt: function (c, t) {
      /* a cloud flat pushed back and forth on its track between the gun and the Moon (it never hides a crater) */
      var B = this.mo, k = B.k, span = Math.max(40 * k, B.cloudX1 - B.cloudX0), w = 2 * B.P.cloudSpd * k * c.spd / span, ph = w * t + c.x0;
      return { x: B.cloudX0 + span * (0.5 - 0.5 * Math.cos(ph)), y: B.cloudY[c.lane] + 4 * k * Math.sin(t * 0.7 + c.x0), hw: 84 * k, hh: 27 * k };
    },
    moonStarAt: function (s, i, t) {
      var B = this.mo, sp = B.starPiv[i], A = Math.asin(Math.min(0.85, this.W * 0.15 / sp.len)), th = A * Math.sin(B.P.starSpd * t + s.ph);
      var off = (54 - 96 * 0.06) * 0.78 * B.k, x = sp.x + sp.len * Math.sin(th), y = sp.len * Math.cos(th);
      return { x: x, y: y, cx: x + off * Math.sin(th), cy: y + off * Math.cos(th), th: th, px: sp.x, r: 27 * B.k };
    },
    /* where a shot fired at clock time t0 ends: blocked by a cloud or a star, a crater, the face, or the sky */
    moonPredict: function (a, pow, t0) {
      var B = this.mo, P = B.P, T = P.flightMs / 1000, i, p;
      if (P.clouds) {
        p = this.moonPoint(a, pow, CLOUD_U);
        for (i = 0; i < P.clouds; i++) { var c = this.moonCloudAt(B.clouds[i], t0 + CLOUD_U * T); if (Math.pow((p.x - c.x) / c.hw, 2) + Math.pow((p.y - c.y) / c.hh, 2) <= 1) return { kind: "cloud", i: i, x: p.x, y: p.y }; }
      }
      if (P.stars) {
        p = this.moonPoint(a, pow, STAR_U);
        for (i = 0; i < P.stars; i++) { var s = this.moonStarAt(B.stars[i], i, t0 + STAR_U * T); if (Math.pow(p.x - s.cx, 2) + Math.pow(p.y - s.cy, 2) <= s.r * s.r) return { kind: "star", i: i, x: p.x, y: p.y }; }
      }
      var L = this.moonPoint(a, pow, 1), st = this.moonAt(t0 + T), best = -1, bd = 1e9;
      for (i = 0; i < B.craters.length; i++) {
        var cr = B.craters[i], cx = st.x + cr.px * st.r, cy = st.y + cr.py * st.r, d = Math.sqrt(Math.pow(L.x - cx, 2) + Math.pow(L.y - cy, 2));
        if (d <= P.craterR * st.r + 1.5 * B.k && d < bd) { bd = d; best = i; }
      }
      if (best >= 0) return { kind: "crater", i: best, x: L.x, y: L.y };
      if (Math.pow(L.x - st.x, 2) + Math.pow(L.y - st.y, 2) <= st.r * st.r) return { kind: "face", x: L.x, y: L.y };
      return { kind: "miss", x: L.x, y: L.y };
    },

    answers_moonshot: function () {
      var B = this.mo, P = B.P, self = this;
      B.craters.forEach(function (cr) { self.moonKillCrater(cr); });
      B.craters = [];
      if (B.cap) { this.moonFreeCap(B.cap); B.cap = null; }
      B.caps.slice().forEach(function (c) { self.moonFreeCap(c); });
      this.moonEndSels(true);
      var letters = this.choiceLetters(), n = letters.length, pos = CRATERS[clamp(n, 1, 6)];
      letters.forEach(function (Lt, i) {
        var p = pos[Math.min(i, pos.length - 1)];
        var cr = { letter: Lt, i: i, px: p[0], py: p[1], state: "live", stuck: null,
          img: self.add.image(-99, -99, "md-moonshot-crater-" + (i % STENCIL.length)).setDepth(4),
          tx: self.add.text(-99, -99, Lt, { fontFamily: SERIF, fontSize: 24, color: INK, fontStyle: "bold", stroke: PAPER, strokeThickness: 4 }).setOrigin(0.5).setDepth(7) };
        if (self.extracted.indexOf(Lt) !== -1) cr.state = "found";
        B.craters.push(cr);
        self.moonPaint(cr);
      });
      this.moonCraterFont();
      B.shells = P.shells; B.wastedQ = 0; B.cd = 0; B.lastCrater = null;
      B.face.mood = "calm"; B.face.ms = 0;
      B.selCd = Math.max(2500, P.selEvery * 0.55);
      /* start aimed at the Moon's nose, between the craters, never on one */
      var st = this.moonAt(B.mt + P.flightMs / 1000);
      this.moonAimAt(st.x, st.y + st.r * 0.08);
      B.qn += 1; B.titlePending = true;
      this.moonPlaceMoon();
    },
    moonCraterFont: function () {
      var B = this.mo, fs = Math.round(clamp(B.P.craterR * B.R * 1.15, 13, 34));
      B.craters.forEach(function (cr) { cr.fs0 = fs; cr.tx.setFontSize(fs).setStroke(PAPER, Math.max(3, Math.round(fs / 6))); });
    },
    moonPaint: function (cr) {
      var dead = cr.state === "dead", found = cr.state === "found";
      cr.img.setTint(dead ? 0x6e6a62 : found ? 0xcdf2c4 : 0xffffff);
      cr.tx.setText(dead ? "✕" : found ? "✓" : cr.letter).setColor(dead ? "#57524a" : found ? "#1f6a3a" : INK);
    },
    moonKillCrater: function (cr) {
      try { cr.img.destroy(); cr.tx.destroy(); } catch (e) {}
      if (cr.stuck) { this.moonFreeCap(cr.stuck); cr.stuck = null; }
    },

    tick_moonshot: function (s, inp, ms) {
      var B = this.mo, P = B.P, k = B.k, frame = this.game && this.game.loop ? this.game.loop.frame : 0;
      if (frame !== B.lastFrame + 1) { B.kbArmed = false; B.ptrArmed = false; }   /* frames went by without a tick (the reading pop-up): a key or press still held does not fire */
      B.lastFrame = frame;
      B.t += s; B.mt += s;
      if (B.cd > 0) B.cd -= ms;
      if (B.face.ms > 0) { B.face.ms -= ms; if (B.face.ms <= 0) B.face.mood = "calm"; }
      if (B.titlePending) { B.titlePending = false; this.moonTitle(); }
      if (!B.told.start) { B.told.start = true; this.toast("Put the landing ring on the crater with the right letter (▲▼ angle, ◀▶ powder, or point with the mouse), then FIRE. Never land on a Selenite.", 5600); }

      /* aim: the keys or the pad; else the pointer, when it moves or is held down */
      if (inp.ay) {
        if (!B.aimHold) B.ang -= inp.ay * 0.3 * DEG;
        B.aimHold += ms;
        B.ang -= inp.ay * Math.min(36, 9 + B.aimHold / 500 * 24) * DEG * s;
      } else B.aimHold = 0;
      if (inp.ax) {
        if (!B.powHold) B.pow += inp.ax * 0.004;
        B.powHold += ms;
        B.pow += inp.ax * Math.min(0.6, 0.14 + B.powHold / 600 * 0.4) * s;
      } else B.powHold = 0;
      var p = this.ptr, moved = B.lpx != null && Math.abs(p.x - B.lpx) + Math.abs(p.y - B.lpy) > 2;
      if (!inp.ax && !inp.ay && (moved || inp.ptr)) this.moonAimAt(p.x, p.y);
      B.lpx = p.x; B.lpy = p.y;
      B.ang = clamp(B.ang, B.aMin, B.aMax); B.pow = clamp(B.pow, 0, 1);

      /* fire: Space or the FIRE button on the press; the mouse or a finger on the release */
      var kb = !!inp.fire && !inp.ptr, pd = !!inp.ptr;
      if (!kb) B.kbArmed = true;
      else if (B.kbArmed) { B.kbArmed = false; this.moonTryFire(); }
      if (pd && !B.ptrWas) B.ptrArmed = true;
      if (!pd && B.ptrWas && B.ptrArmed) { B.ptrArmed = false; this.moonTryFire(); }
      B.ptrWas = pd;

      this.moonPlaceMoon();
      this.moonPlaceSky();
      if (!this._between) this.moonSels(ms); else this.moonSelsDraw();
      if (B.cap) { this.moonFly(B.cap, s, ms); if (this._finishing) return; }
      this.moonCaps(s, ms);
      this.moonPuffs(ms);
      this.moonDrawAim();
      this.moonDrawFace();
      this.moonDrawCannon(s);
      this.moonDrawHud();
      this.moonFilm(s);
    },

    moonTryFire: function () {
      var B = this.mo;
      if (this._between || this._finishing || this.ended) return null;
      if (B.cap) { if (!B.told.one) { B.told.one = true; this.toast("One capsule at a time: wait for it to land.", 2200); } return null; }
      if (B.cd > 0 || B.shells <= 0) return null;
      return this.moonFire(B.ang, B.pow);
    },
    /* the gun fires a capsule at this angle and powder */
    moonFire: function (a, pow) {
      var B = this.mo, P = B.P, k = B.k, i;
      var c = { state: "fly", ang: a, pow: pow, mt0: B.mt, T: P.flightMs / 1000, t: 0, u: 0, crossC: false, crossS: false, crater: null, spr: null };
      c.spr = this.add.image(0, 0, "md-moonshot-capsule").setDepth(12).setScale(k);
      c.land = this.moonPoint(a, pow, 1);
      B.cap = c; B.caps.push(c);
      B.shells = Math.max(0, B.shells - 1); B.fired += 1; B.recoil = 1; B.cd = 300;
      this.moonPlaceCap(c);
      var m = this.moonMuzzle(a);
      for (i = 0; i < 6; i++) this.moonPuff(m.x + Math.cos(a) * i * 9 * k + rnd(-6, 6) * k, m.y - Math.sin(a) * i * 9 * k + rnd(-6, 6) * k, (0.7 + i * 0.12) * k, { dur: 1300 + i * 120, vx: rnd(-10, 30) * k, vy: rnd(-40, -16) * k, depth: 15 });
      this.moonPuff(m.x - 40 * k, B.baseY - 4 * k, 0.9 * k, { dur: 1500, vx: -30 * k, vy: -10 * k, depth: 15 });
      B.flash = 140;
      sfx("boom");
      try { this.cameras.main.shake(140, 0.004); } catch (e) {}
      return c;
    },
    moonFreeCap: function (c) {
      var B = this.mo, i = B.caps.indexOf(c);
      if (i !== -1) B.caps.splice(i, 1);
      if (B.cap === c) B.cap = null;
      c.state = "gone";
      try { c.spr.destroy(); } catch (e) {}
    },
    moonCapScale: function (u) { return this.mo.k * Math.max(0.2, 1 - 0.64 * u); },
    moonPlaceCap: function (c) {
      var B = this.mo, u = c.u, pt = this.moonPoint(c.ang, c.pow, u), d = this.moonThrow(c.pow);
      var vx = Math.cos(c.ang) * d, vy = -Math.sin(c.ang) * d + 2 * B.drop * u;
      c.x = pt.x; c.y = pt.y;
      c.spr.setPosition(pt.x, pt.y).setRotation(Math.atan2(vy, vx)).setScale(this.moonCapScale(u))
        .setDepth(u < CLOUD_U ? 12 : u < STAR_U ? 10 : 8.4);
    },
    /* the capsule in the air: past the clouds, past the stars, then down on the Moon */
    moonFly: function (c, s, ms) {
      var B = this.mo, P = B.P, k = B.k;
      c.t += s; c.u = Math.min(1, c.t / c.T);
      this.moonPlaceCap(c);
      var pr;
      if (!c.crossC && c.u >= CLOUD_U) {
        c.crossC = true;
        if (P.clouds) {
          pr = this.moonPredict(c.ang, c.pow, c.mt0);
          if (pr.kind === "cloud") {
            var pc = this.moonPoint(c.ang, c.pow, CLOUD_U);
            this.moonPuff(pc.x, pc.y, 0.8 * k, { dur: 700, depth: 11.5 });
            this.moonFreeCap(c);
            sfx("puff"); B.outcome = "cloud";
            return this.moonWasted("cloud");
          }
        }
      }
      if (!c.crossS && c.u >= STAR_U) {
        c.crossS = true;
        if (P.stars) {
          pr = this.moonPredict(c.ang, c.pow, c.mt0);
          if (pr.kind === "star") {
            B.cap = null; c.state = "fall"; c.ft = 0; c.vx = -140 * k; c.vy = -120 * k; c.spin = 9;
            this.burst(c.x, c.y, 0xf0c050, 10); sfx("clang"); B.outcome = "star";
            return this.moonWasted("star");
          }
        }
      }
      if (c.u >= 1) return this.moonLand(c);
      return null;
    },
    moonLand: function (c) {
      var B = this.mo, P = B.P, k = B.k, self = this;
      B.cap = null; B.landed += 1;
      var pr = this.moonPredict(c.ang, c.pow, c.mt0), L = c.land;
      B.outcome = pr.kind;
      if (pr.kind === "crater") {
        var cr = B.craters[pr.i], at = this.moonCraterAt(cr, B.mt);
        var sel = this.moonSelOn(pr.i);
        if (sel && sel.phase === "up") {
          /* a Selenite catches the shell: stop trick, both gone in a puff */
          this.moonPuffBurst(sel.x, sel.y - at.r * 0.4, at.r * 0.05 + 0.6 * k, 6);
          this.moonKillSel(sel);
          this.moonFreeCap(c);
          B.captures += 1;
          B.face.mood = "laugh"; B.face.ms = 1500;
          sfx("laugh");
          this.loseLife("hit", "CAPTURED BY THE SELENITES");
          if (!B.told.cap && !this._finishing) { B.told.cap = true; this.toast("The Selenites captured the astronomers! Never land on a Selenite: wait for it to vanish in its puff of smoke.", 4200); }
          this.moonRefill();
          return "captured";
        }
        if (sel) { this.moonPuffBurst(sel.x, sel.y - at.r * 0.2, 0.5 * k, 3); this.moonKillSel(sel); }   /* the smoke was only gathering: it blows away */
        if (cr.state !== "live") {
          this.moonBounce(c, at);
          if (!this._finishing) this.toast(cr.state === "dead" ? "That crater is crossed out. Try another letter." : "You already found that letter. Land in the other right one.", 2600);
          return this.moonWasted("used");
        }
        sfx("thunk");
        /* the shell sticks in the crater, nose first, the way it lands in the Moon's eye in the film */
        c.state = "stuck"; c.crater = cr; c.spr.setOrigin(0.86, 0.5);
        c.ox = (L.x - at.x) / at.r; c.oy = (L.y - at.y) / at.r;
        var clean = !B.wastedQ && !this.claimWrong;
        B.lastCrater = cr;
        this.burst(at.x, at.y, 0xf2e6b0, 10);
        var res = this.answerPick(cr.letter, at.x, at.y - at.r * 1.2);
        if (res === "wrong") {
          cr.state = "dead"; this.moonPaint(cr);
          B.face.mood = "frown"; B.face.ms = 1600;
          c.state = "fall"; c.ft = 0; c.vx = (c.ox < 0 ? -1 : 1) * 60 * k; c.vy = -80 * k; c.spin = 4; c.crater = null;
          this.moonRefill();
        } else if (res === "partial" || res === "done") {
          if (cr.stuck && cr.stuck !== c) this.moonFreeCap(cr.stuck);
          cr.stuck = c; cr.state = "found"; this.moonPaint(cr);
          B.face.mood = "ouch"; B.face.ms = 1800; B.face.side = cr.px < 0 ? -1 : 1;
          if (res === "done" && clean && !this.ended) this.awardBonusPoints(1000, "Right in the crater, no shell wasted");
        } else {
          c.state = "fall"; c.ft = 0; c.vx = 0; c.vy = -60 * k; c.spin = 3; c.crater = null;
        }
        return res;
      }
      if (pr.kind === "face") {
        var st = this.moonAt(B.mt);
        this.moonBounce(c, { x: L.x, y: L.y, r: st.r });
        B.face.mood = "frown"; B.face.ms = 900;
        if (!B.told.face) { B.told.face = true; this.toast("Bonk! The capsule bounced off the Moon's face. Land it inside a crater.", 3000); }
        return this.moonWasted("face");
      }
      /* the sky: it sails on into space and twinkles out */
      c.state = "away"; c.ft = 0;
      sfx("twinkle");
      if (!B.told.miss) { B.told.miss = true; this.toast("Missed the Moon! The capsule sailed off into space. Watch the landing ring.", 3000); }
      return this.moonWasted("miss");
    },
    moonBounce: function (c, at) {
      var k = this.mo.k;
      c.state = "fall"; c.ft = 0; c.vx = (c.x < at.x ? -1 : 1) * rnd(50, 90) * k; c.vy = -rnd(110, 150) * k; c.spin = 6; c.crater = null;
      this.burst(c.x, c.y, 0xd8d2c0, 6);
      sfx("bonk");
    },
    moonWasted: function (what) {
      var B = this.mo;
      B.wastedQ += 1;
      if (what === "cloud" && !B.told.cloud) { B.told.cloud = true; this.toast("Lost in the clouds! A capsule that flies into a cloud is gone. Fire through a gap.", 3200); }
      if (what === "star" && !B.told.star) { B.told.star = true; this.toast("Clang! The capsule hit a swinging star. Wait for it to swing out of the way.", 3200); }
      this.moonCheckShells();
      return what;
    },
    /* the last shell is gone and none is in the air: a life, and the gunners roll in more */
    moonCheckShells: function () {
      var B = this.mo;
      if (B.shells > 0 || B.cap || this._between || this._finishing || this.ended) return;
      B.shells = B.P.shells;
      this.loseLife("hit", "OUT OF SHELLS");
      if (!this._finishing) this.toast("Out of shells! That costs a life. The gunners roll in a fresh load.", 3400);
    },
    /* a wrong crater or a capture already cost a life: the last shell is simply replaced */
    moonRefill: function () {
      var B = this.mo;
      if (B.shells <= 0 && !B.cap) B.shells = B.P.shells;
    },
    /* capsules that are not flying: stuck in a crater, falling, or sailing off into space */
    moonCaps: function (s, ms) {
      var B = this.mo, k = B.k, self = this;
      B.caps.slice().forEach(function (c) {
        if (c.state === "stuck") {
          if (!c.crater || B.craters.indexOf(c.crater) === -1) return;
          var at = self.moonCraterAt(c.crater, B.mt);
          c.x = at.x + c.ox * at.r; c.y = at.y + c.oy * at.r;
          c.spr.setPosition(c.x, c.y).setScale(self.moonCapScale(1) * 1.6 * at.r / B.R).setDepth(6.4);
        } else if (c.state === "fall") {
          c.ft += ms; c.vy += 700 * k * s; c.x += c.vx * s; c.y += c.vy * s;
          c.spr.setPosition(c.x, c.y).setRotation(c.spr.rotation + c.spin * s).setAlpha(clamp(1 - (c.ft - 500) / 500, 0, 1));
          if (c.ft > 1000) self.moonFreeCap(c);
        } else if (c.state === "away") {
          c.ft += ms;
          var f = c.ft / 600, d = self.moonThrow(c.pow), vx = Math.cos(c.ang) * d, vy = -Math.sin(c.ang) * d + 2 * B.drop;
          c.x += vx * s * 0.25; c.y += vy * s * 0.25;
          c.spr.setPosition(c.x, c.y).setScale(self.moonCapScale(1) * Math.max(0, 1 - f));
          if (f >= 1) { self.moonTwinkle(c.x, c.y); self.moonFreeCap(c); }
        }
      });
    },

    /* ── the Moon, the clouds, the stars ── */
    moonPlaceMoon: function () {
      var B = this.mo, P = B.P, st = this.moonAt(B.mt), sc = st.r / MOON_R, self = this;
      B.st = st;
      B.moon.setPosition(st.x, st.y).setScale(sc);
      B.wisps[0].setPosition(st.x - st.r * 0.78, st.y + st.r * 0.9).setScale(st.r / 150);
      B.wisps[1].setPosition(st.x + st.r * 0.8, st.y + st.r * 0.86).setScale(st.r / 165);
      B.craters.forEach(function (cr) {
        var cx = st.x + cr.px * st.r, cy = st.y + cr.py * st.r, rc = P.craterR * st.r;
        cr.x = cx; cr.y = cy; cr.r = rc;
        cr.img.setPosition(cx, cy).setScale(rc / 46);
        cr.tx.setPosition(cx + 1, cy + 1).setScale(st.s);
      });
    },
    moonPlaceSky: function () {
      var B = this.mo, P = B.P, k = B.k, g = B.wireG, i;
      g.clear();
      for (i = 0; i < B.clouds.length; i++) {
        var c = B.clouds[i];
        if (i >= P.clouds) { c.spr.setVisible(false); continue; }
        var at = this.moonCloudAt(c, B.mt);
        c.spr.setVisible(true).setPosition(at.x, at.y).setFlipX(c.dir < 0);
      }
      for (i = 0; i < B.stars.length; i++) {
        var s = B.stars[i];
        if (i >= P.stars) { s.spr.setVisible(false); continue; }
        var sa = this.moonStarAt(s, i, B.mt);
        s.spr.setVisible(true).setPosition(sa.x, sa.y).setRotation(-sa.th);
        g.lineStyle(1.4 * k, 0xb8b2a2, 0.85); g.lineBetween(sa.px, 0, sa.x, sa.y);
      }
    },

    /* ── the Selenites: smoke gathers on a crater, one appears (stop trick), stays a while, vanishes or hops ── */
    moonSelOn: function (ci) {
      var B = this.mo;
      for (var i = 0; i < B.sels.length; i++) if (B.sels[i].ci === ci) return B.sels[i];
      return null;
    },
    moonFreeCraters: function (except) {
      var B = this.mo, self = this, out = [];
      B.craters.forEach(function (cr, i) { if (i !== except && cr.state === "live" && !self.moonSelOn(i)) out.push(i); });
      return out;
    },
    /* a Selenite on crater ci; phase "warn" (smoke gathering) or "up" (there) */
    moonSelenite: function (ci, phase, ms) {
      var B = this.mo, P = B.P, old = this.moonSelOn(ci);
      if (old) this.moonKillSel(old);
      var sel = { ci: ci, phase: phase || "warn", t: 0, dur: ms || (phase === "up" ? P.selStay * rnd(0.85, 1.15) : P.selWarn), spr: null, x: 0, y: 0 };
      B.sels.push(sel);
      if (sel.phase === "up") this.moonSelAppear(sel, true);
      else sfx("gather");
      return sel;
    },
    moonSelAppear: function (sel, quiet) {
      var B = this.mo, P = B.P, cr = B.craters[sel.ci];
      sel.phase = "up"; sel.t = 0;
      if (sel.dur == null || sel.dur === P.selWarn || sel.warned) sel.dur = P.selStay * rnd(0.85, 1.15);
      if (!sel.spr) sel.spr = this.add.image(0, 0, "md-moonshot-sel").setOrigin(0.5, 0.86).setDepth(6.2).setTint(0xffffff);
      sel.spr.setVisible(true);
      if (cr) { sel.x = cr.x; sel.y = cr.y; this.moonPuffBurst(cr.x, cr.y - cr.r * 0.6, 0.55 * B.k * (cr.r / 30 + 0.4), 5); }
      if (!quiet) sfx("puff");
      if (!B.told.sel && !this._finishing) { B.told.sel = true; this.toast("A Selenite! The Moon-men pop up in puffs of smoke (Méliès's stop trick). Don't land on one: wait for it to vanish.", 4600); }
    },
    moonKillSel: function (sel) {
      var B = this.mo, i = B.sels.indexOf(sel);
      if (i !== -1) B.sels.splice(i, 1);
      if (sel.spr) { try { sel.spr.destroy(); } catch (e) {} sel.spr = null; }
    },
    moonEndSels: function (quiet) {
      var B = this.mo, self = this;
      B.sels.slice().forEach(function (sel) {
        if (!quiet && sel.phase === "up" && sel.spr) self.moonPuffBurst(sel.x, sel.y - 10 * B.k, 0.6 * B.k, 4);
        self.moonKillSel(sel);
      });
    },
    moonSels: function (ms) {
      var B = this.mo, P = B.P, self = this;
      B.selCd -= ms;
      if (B.selCd <= 0) {
        B.selCd = P.selEvery * rnd(0.75, 1.2);
        var free = this.moonFreeCraters(-1);
        if (B.sels.length < P.sels && free.length) this.moonSelenite(free[Math.floor(Math.random() * free.length)], "warn");
      }
      B.sels.slice().forEach(function (sel) {
        var cr = B.craters[sel.ci];
        if (!cr || cr.state === "dead") { self.moonKillSel(sel); return; }
        sel.t += ms;
        if (sel.phase === "warn") {
          if (sel.t >= sel.dur) { sel.warned = true; self.moonSelAppear(sel); }
          if (!B.told.warn && sel.t > 300 && !self._finishing) { B.told.warn = true; self.toast("Smoke is gathering on a crater: a Selenite is about to appear there!", 3200); }
        } else if (sel.t >= sel.dur) {
          var free = self.moonFreeCraters(sel.ci);
          self.moonPuffBurst(sel.x, sel.y - cr.r * 0.6, 0.55 * B.k * (cr.r / 30 + 0.4), 5);
          sfx("puff");
          if (P.hop && free.length && Math.random() < P.hop) {
            /* stop trick: gone from here, and smoke gathers on another crater */
            sel.ci = free[Math.floor(Math.random() * free.length)]; sel.phase = "warn"; sel.t = 0; sel.dur = P.selWarn * 0.7; sel.warned = true;
            if (sel.spr) sel.spr.setVisible(false);
            if (!B.told.hop && !self._finishing) { B.told.hop = true; self.toast("Stop trick! That Selenite vanished and is popping up on another crater. Watch the smoke.", 3600); }
          } else self.moonKillSel(sel);
        }
      });
      this.moonSelsDraw();
    },
    moonSelsDraw: function () {
      var B = this.mo, g = B.selG, k = B.k, t = B.t;
      g.clear();
      B.sels.forEach(function (sel) {
        var cr = B.craters[sel.ci];
        if (!cr) return;
        if (sel.phase === "warn") {
          /* the smoke gathers: wisps swirl in and thicken */
          var f = clamp(sel.t / sel.dur, 0, 1);
          for (var j = 0; j < 7; j++) {
            var a = t * 3.2 + j / 7 * TAU, rr = cr.r * (1.25 - 0.55 * f);
            g.fillStyle(0xf4f1e8, 0.25 + 0.6 * f); g.fillCircle(cr.x + Math.cos(a) * rr, cr.y - cr.r * 0.2 + Math.sin(a) * rr * 0.6, (2.5 + 5 * f) * k * (cr.r / 30 + 0.3));
          }
          g.lineStyle(2 * k, 0xf4f1e8, 0.3 + 0.5 * f); g.strokeCircle(cr.x, cr.y, cr.r * (1.05 + 0.1 * Math.sin(t * 9)));
        } else if (sel.spr) {
          sel.x = cr.x; sel.y = cr.y;
          var h = cr.r * 3.3 / 94;
          sel.spr.setPosition(cr.x + cr.r * 0.1, cr.y + cr.r * 0.75 + Math.sin(t * 6 + sel.ci) * 1.2 * k).setScale(h).setAlpha(1);
        }
      });
    },

    /* ── smoke, flashes, twinkles ── */
    moonPuff: function (x, y, sc, o) {
      o = o || {};
      var B = this.mo, spr = this.add.image(x, y, "md-moonshot-puff").setDepth(o.depth || 6.8).setScale(sc * 0.4).setRotation(rnd(0, TAU));
      var p = { spr: spr, t: 0, dur: o.dur || 650, x: x, y: y, vx: o.vx || 0, vy: o.vy || 0, s0: sc * 0.4, s1: sc };
      B.puffs.push(p);
      return p;
    },
    moonPuffBurst: function (x, y, sc, n) {
      for (var i = 0; i < n; i++) {
        var a = i / n * TAU + rnd(-0.3, 0.3), d = sc * 14;
        this.moonPuff(x + Math.cos(a) * d, y + Math.sin(a) * d * 0.7, sc * rnd(0.8, 1.2), { dur: rnd(520, 760), vx: Math.cos(a) * 26 * sc, vy: Math.sin(a) * 18 * sc - 10 * sc });
      }
      this.moonPuff(x, y, sc * 1.35, { dur: 700 });
    },
    moonPuffs: function (ms) {
      var B = this.mo;
      for (var i = B.puffs.length - 1; i >= 0; i--) {
        var p = B.puffs[i];
        p.t += ms;
        var f = clamp(p.t / p.dur, 0, 1), e = 1 - Math.pow(1 - f, 3);
        p.spr.setPosition(p.x + p.vx * f, p.y + p.vy * f).setScale(p.s0 + (p.s1 - p.s0) * e).setAlpha(f < 0.6 ? 1 : 1 - (f - 0.6) / 0.4);
        if (f >= 1) { try { p.spr.destroy(); } catch (e2) {} B.puffs.splice(i, 1); }
      }
    },
    moonTwinkle: function (x, y) {
      var B = this.mo;
      B.twinkles = B.twinkles || [];
      B.twinkles.push({ x: x, y: y, t: 0 });
    },

    /* ── drawing every frame ── */
    /* the dotted arc, the landing ring, and the crater it lines up with */
    moonDrawAim: function () {
      var B = this.mo, P = B.P, k = B.k, gs = [B.gNear, B.gMid, B.gFar], i;
      gs.forEach(function (g) { g.clear(); });
      B.ringG.clear(); B.glowG.clear();
      B.glow = -1; B.glowSel = false;
      var ready = !B.cap && !this._between && !this._finishing;
      if (B.twinkles) for (i = B.twinkles.length - 1; i >= 0; i--) {
        var tw = B.twinkles[i]; tw.t += 16;
        var f = tw.t / 500, r = (3 + 7 * Math.sin(Math.PI * Math.min(1, f))) * k;
        B.ringG.lineStyle(1.6 * k, 0xfff6d8, 1 - f); B.ringG.lineBetween(tw.x - r, tw.y, tw.x + r, tw.y); B.ringG.lineBetween(tw.x, tw.y - r, tw.x, tw.y + r);
        if (f >= 1) B.twinkles.splice(i, 1);
      }
      if (!ready) return;
      var pr = this.moonPredict(B.ang, B.pow, B.mt);
      if (P.glow && pr.kind === "crater" && B.craters[pr.i].state === "live") {
        B.glow = pr.i;
        var sel = this.moonSelOn(pr.i);
        B.glowSel = !!(sel && sel.phase === "up");
      }
      /* the arc: dots shrink as the capsule flies into the picture */
      var d = this.moonThrow(B.pow), n = Math.max(12, Math.round(d * 1.15 / (17 * k)));
      var lit = B.glow >= 0, col = B.glowSel ? 0xff7a5a : lit ? GOLDN : PAPERN;
      for (i = 1; i <= n; i++) {
        var u = i / n;
        if (u > P.guide) break;
        if (u > 0.96) break;
        var pt = this.moonPoint(B.ang, B.pow, u), rad = (2.9 * (1 - 0.6 * u)) * k, g = u < CLOUD_U ? B.gNear : u < STAR_U ? B.gMid : B.gFar;
        g.fillStyle(INKN, 0.85); g.fillCircle(pt.x, pt.y, rad + 1.2 * k);
        g.fillStyle(col, 0.95 - 0.35 * u); g.fillCircle(pt.x, pt.y, rad);
      }
      /* the landing ring */
      var Lp = this.moonPoint(B.ang, B.pow, 1), rr = Math.max(9 * k, P.craterR * B.R * 0.8), pulse = 1 + 0.06 * Math.sin(B.t * 7), rg = B.ringG;
      rg.lineStyle(5 * k, INKN, 0.75); rg.strokeCircle(Lp.x, Lp.y, rr * pulse);
      rg.lineStyle(2.4 * k, col, 1); rg.strokeCircle(Lp.x, Lp.y, rr * pulse);
      for (i = 0; i < 4; i++) {
        var a = i * Math.PI / 2, x0 = Lp.x + Math.cos(a) * rr * 0.45, y0 = Lp.y + Math.sin(a) * rr * 0.45, x1 = Lp.x + Math.cos(a) * rr * 1.35, y1 = Lp.y + Math.sin(a) * rr * 1.35;
        rg.lineStyle(4 * k, INKN, 0.7); rg.lineBetween(x0, y0, x1, y1);
        rg.lineStyle(2 * k, col, 1); rg.lineBetween(x0, y0, x1, y1);
      }
      if (lit) {
        var cr = B.craters[B.glow];
        B.glowG.lineStyle(6 * k, B.glowSel ? 0xff7a5a : GOLDN, 0.55 + 0.3 * Math.sin(B.t * 9)); B.glowG.strokeCircle(cr.x, cr.y, cr.r * 1.18);
        B.glowG.lineStyle(2 * k, 0xfff4cc, 0.9); B.glowG.strokeCircle(cr.x, cr.y, cr.r * 1.32);
      }
    },
    /* the Moon's face: eyes that follow the capsule, and a mood */
    moonDrawFace: function () {
      var B = this.mo, g = B.faceG, st = B.st, r = st.r, x = st.x, y = st.y, mood = B.face.mood, lw = Math.max(1.6, r * 0.024);
      g.clear();
      /* where it looks: the capsule in the air, else the gun */
      var tx, ty;
      if (B.cap) { tx = B.cap.x; ty = B.cap.y; } else { var m = this.moonMuzzle(B.ang); tx = m.x; ty = m.y; }
      var dx = tx - x, dy = ty - y, dl = Math.sqrt(dx * dx + dy * dy) || 1; dx /= dl; dy /= dl;
      /* rosy cheeks, a faint stencil wash */
      g.fillStyle(0xd4826a, 0.16); g.fillCircle(x - r * 0.36, y + r * 0.2, r * 0.11); g.fillCircle(x + r * 0.36, y + r * 0.2, r * 0.11);
      var ey = y - r * 0.05, erx = r * 0.1, ery = r * 0.072;
      [-1, 1].forEach(function (sd) {
        var ex = x + sd * r * 0.26;
        g.lineStyle(lw, INKN, 1);
        if ((mood === "ouch" && sd === B.face.side) || mood === "laugh") {
          /* squeezed shut */
          if (mood === "laugh") { g.beginPath(); g.arc(ex, ey + ery * 0.5, erx, Math.PI * 1.15, Math.PI * 1.85); g.strokePath(); }
          else {
            /* a chevron pointing at the nose: > < */
            var tip = ex - sd * erx * 0.55;
            g.beginPath(); g.moveTo(ex + sd * erx, ey - ery * 0.9); g.lineTo(tip, ey); g.lineTo(ex + sd * erx, ey + ery * 0.9); g.strokePath();
          }
        } else {
          g.fillStyle(0xfbf8ef, 1); g.fillEllipse(ex, ey, erx * 2, ery * 2 * (mood === "ouch" ? 1.3 : 1));
          g.strokeEllipse(ex, ey, erx * 2, ery * 2 * (mood === "ouch" ? 1.3 : 1));
          g.fillStyle(INKN, 1); g.fillCircle(ex + dx * erx * 0.42, ey + dy * ery * 0.4, r * 0.034);
        }
        /* brows */
        g.beginPath();
        if (mood === "frown") { g.moveTo(ex - sd * erx * 1.1, ey - ery * 2.1); g.lineTo(ex + sd * erx * 0.9, ey - ery * 1.4); }
        else if (mood === "ouch") { g.arc(ex, ey - ery * 1.2, erx * 1.1, Math.PI * 1.15, Math.PI * 1.85); }
        else { g.arc(ex, ey - ery * 0.6, erx * 1.15, Math.PI * 1.2, Math.PI * 1.8); }
        g.strokePath();
      });
      /* the nose */
      g.lineStyle(lw, INKN, 1);
      g.beginPath(); g.moveTo(x + r * 0.01, y + r * 0.02); g.lineTo(x + r * 0.07, y + r * 0.17); g.lineTo(x - r * 0.03, y + r * 0.19); g.strokePath();
      /* the mouth */
      if (mood === "frown") { g.beginPath(); g.arc(x, y + r * 0.56, r * 0.2, Math.PI * 1.22, Math.PI * 1.78); g.strokePath(); }
      else if (mood === "ouch") { g.fillStyle(0x2a1a14, 1); g.fillEllipse(x, y + r * 0.42, r * 0.13, r * 0.16); g.strokeEllipse(x, y + r * 0.42, r * 0.13, r * 0.16); }
      else if (mood === "laugh") {
        g.fillStyle(0x3a1a14, 1); g.beginPath(); g.arc(x, y + r * 0.3, r * 0.2, 0, Math.PI); g.closePath(); g.fillPath();
        g.beginPath(); g.arc(x, y + r * 0.3, r * 0.2, 0, Math.PI); g.closePath(); g.strokePath();
      } else {
        g.beginPath(); g.arc(x, y + r * 0.18, r * 0.24, Math.PI * 0.22, Math.PI * 0.78); g.strokePath();
        g.beginPath(); g.arc(x - r * 0.18, y + r * 0.36, r * 0.03, Math.PI * 0.9, Math.PI * 1.6); g.strokePath();
        g.beginPath(); g.arc(x + r * 0.18, y + r * 0.36, r * 0.03, Math.PI * 1.4, Math.PI * 2.1); g.strokePath();
      }
    },
    moonDrawCannon: function (s) {
      var B = this.mo, k = B.k, g = B.fxG, a = B.ang;
      B.recoil = Math.max(0, B.recoil - s * 2.6);
      var back = 12 * k * B.recoil * B.recoil;
      B.barrel.setPosition(B.pivX - Math.cos(a) * back, B.pivY + Math.sin(a) * back).setRotation(-a);
      this.blink(B.barrel); this.blink(B.carriage); this.blink(B.prof);
      var hop = B.recoil > 0 ? Math.sin(B.recoil * Math.PI) * 6 * k : 0;
      B.prof.setPosition(B.pivX - 82 * k, B.baseY + 1 - hop);
      this.player.setPosition(B.pivX, B.baseY - 70 * k);
      g.clear();
      if (B.flash > 0) {
        B.flash -= s * 1000;
        var m = this.moonMuzzle(a), f = clamp(B.flash / 140, 0, 1);
        g.fillStyle(0xffd27a, 0.85 * f); g.fillCircle(m.x + Math.cos(a) * 14 * k, m.y - Math.sin(a) * 14 * k, 22 * k * (1.4 - f * 0.4));
        g.fillStyle(0xfff6dc, f); g.fillCircle(m.x + Math.cos(a) * 8 * k, m.y - Math.sin(a) * 8 * k, 11 * k);
      }
    },
    moonDrawHud: function () {
      var B = this.mo, P = B.P, k = B.k, g = B.hudG, hb = B.hud, i;
      g.clear();
      B.txAngle.setText("ANGLE " + Math.round(B.ang / DEG) + "°");
      /* the powder: a bar with ticks */
      var x0 = B.txPow.x + B.txPow.width + 8 * k, x1 = hb.x + hb.w - 12 * k, by = hb.y + hb.h * 0.32 - 5 * k, bh = 10 * k;
      g.fillStyle(0xcfc6ad, 1); g.fillRect(x0, by, x1 - x0, bh);
      g.fillStyle(INKN, 1); g.fillRect(x0, by, (x1 - x0) * B.pow, bh);
      g.fillStyle(0xd09a32, 0.6); g.fillRect(x0 + 1, by + 1, Math.max(0, (x1 - x0) * B.pow - 2), bh - 2);
      g.lineStyle(1.4, INKN, 1); g.strokeRect(x0, by, x1 - x0, bh);
      for (i = 1; i < 10; i++) { var tx = x0 + (x1 - x0) * i / 10; g.lineBetween(tx, by + bh, tx, by + bh + (i % 5 ? 2 : 4) * k); }
      /* the shells left */
      var sx = B.txShells.x + B.txShells.width + 8 * k, sy = hb.y + hb.h * 0.72;
      for (i = 0; i < P.shells; i++) {
        var on = i < B.shells, cx = sx + i * 13 * k;
        g.fillStyle(on ? INKN : 0xb8ae96, 1);
        g.fillRect(cx, sy - 4 * k, 6 * k, 8 * k); g.fillTriangle(cx + 6 * k, sy - 4 * k, cx + 6 * k, sy + 4 * k, cx + 10 * k, sy);
        if (on) { g.fillStyle(0xd09a32, 0.75); g.fillRect(cx + 1, sy - 3 * k, 4 * k, 6 * k); }
      }
      B.txKeys.setVisible(B.txKeys.x - B.txKeys.width > sx + P.shells * 13 * k + 4 * k);
    },
    /* the intertitle at the start of each question: one of the film's tableaux */
    moonTitle: function () {
      var B = this.mo, idx = (B.qn - 1 + Math.floor((this.night - 1) / 4)) % TABLEAUX.length;
      B.cardTop.setText("— TABLEAU " + roman(B.qn) + " —");
      B.cardMain.setText(TABLEAUX[idx]);
      B.titleMs = 1500;
    },
    /* the projector: grain, flicker, scratches and dust, gate weave, at about 18 frames a second */
    moonFilm: function (s) {
      var B = this.mo, k = B.k, W = this.W, H = this.H, g = B.filmG, i;
      /* the intertitle fades in and out */
      if (B.titleMs > 0) B.titleMs -= s * 1000;
      var a = B.titleMs > 0 ? clamp(Math.min((1500 - B.titleMs) / 160, B.titleMs / 400), 0, 1) : 0;
      if (B.card.visible !== a > 0) { B.card.setVisible(a > 0); B.cardTop.setVisible(a > 0); B.cardMain.setVisible(a > 0); }
      if (a > 0) { B.card.setAlpha(a); B.cardTop.setAlpha(a); B.cardMain.setAlpha(a); }
      B.filmT += s;
      if (B.filmT < 1 / 18) return;
      B.filmT = 0;
      B.grain.setTilePosition(rnd(0, 256), rnd(0, 256));
      try { this.cameras.main.setScroll(rnd(-0.6, 0.6), rnd(-0.8, 0.8)); } catch (e) {}
      g.clear();
      var fl = Math.random() < 0.06 ? 0.13 : rnd(0.0, 0.06);
      g.fillStyle(0x000000, fl); g.fillRect(-4, -4, W + 8, H + 8);
      if (Math.random() < 0.04) { g.fillStyle(0xfffaf0, 0.035); g.fillRect(-4, -4, W + 8, H + 8); }
      /* scratches live for a few frames and wander a little */
      if (B.scr.length < 2 && Math.random() < 0.12) B.scr.push({ x: rnd(W * 0.08, W * 0.92), life: Math.floor(rnd(4, 14)), dark: Math.random() < 0.4 });
      for (i = B.scr.length - 1; i >= 0; i--) {
        var sc = B.scr[i];
        sc.x += rnd(-3, 3); sc.life -= 1;
        g.lineStyle(1.1, sc.dark ? 0x0a0908 : 0xf4efe2, sc.dark ? 0.35 : 0.3); g.lineBetween(sc.x, 0, sc.x + rnd(-2, 2), H);
        if (sc.life <= 0) B.scr.splice(i, 1);
      }
      /* dust and hairs on the print */
      var nd = Math.floor(rnd(0, 4));
      for (i = 0; i < nd; i++) { g.fillStyle(Math.random() < 0.5 ? 0x0a0908 : 0xf4efe2, rnd(0.35, 0.7)); g.fillCircle(rnd(0, W), rnd(0, H), rnd(0.8, 2.4) * k); }
      if (Math.random() < 0.03) {
        var hx = rnd(W * 0.1, W * 0.9), hy = rnd(H * 0.1, H * 0.9);
        g.lineStyle(1, 0x0a0908, 0.5); g.beginPath(); g.moveTo(hx, hy);
        for (i = 1; i < 6; i++) g.lineTo(hx + i * 6 * k + rnd(-4, 4) * k, hy + Math.sin(i) * 8 * k);
        g.strokePath();
      }
    },

    /* a right answer: the Selenites vanish, the shell stays in its crater; the craters stay until the next question */
    clear_moonshot: function () {
      var B = this.mo;
      this.moonEndSels(false);
      if (B.lastCrater) { B.lastCrater.state = "found"; this.moonPaint(B.lastCrater); }
      try { B.ringG.clear(); B.gNear.clear(); B.gMid.clear(); B.gFar.clear(); B.glowG.clear(); B.selG.clear(); } catch (e) {}
    }
  });
})();
