/* SOL Labyrinth v5.21 — the Lit and Film mode "noon": Showdown at Noon (High Noon, 1952), a quick-draw level.
 *
 * Hadleyville's main street at midday, in sepia with film grain: false-front storefronts down both sides, dust,
 * and at the end of the street the courthouse with its clock tower. The clock is the game's timer, as it is the
 * film's: the level is the hour before noon, and every question is one showdown on one stroke of the tower bell
 * (the quarters, then twelve o'clock itself, when the noon train pulls in: its smoke crosses the sky as the level
 * goes on). The marshal stands in the foreground behind a water trough, seen over his shoulder.
 *
 *   WAIT   Outlaws step out of the doorways into the street, one per answer letter, each under a wanted poster
 *          with his letter. The minute hand ticks toward the bell mark (a shaded wedge shows the time left). Aim
 *          if you like (◀ ▶ or the mouse), but drawing before the bell is a FOUL and costs a life (on levels 1-10
 *          the first foul of a level is only a warning). Later levels add fake-outs (a shutter bangs, the train
 *          whistles, a crow, an outlaw's hand twitches) and outlaws who trade places while the clock ticks.
 *   DRAW   The bell strikes: draw and shoot the outlaw with the right letter. The shot knocks his gun out of his
 *          hand (no one is hurt: school-appropriate) and picks his letter (answerPick). A wrong letter costs a
 *          life and that outlaw leaves the street. From the bell on, the outlaws take aim one after another:
 *          a glint and a shrinking ring warn of each shot; hold ▼ to duck behind the trough, or the shot knocks
 *          your hat off and costs a life. A six-shooter holds six rounds and reloads by itself.
 *          Later levels: the outlaws sidestep, two or three aim at once, a gunman on the rooftops (no letter:
 *          duck him or shoot him for a bonus), dust gusts, barrels to hide behind, an uneven clock.
 *
 * noonParams(n) is the one difficulty curve (also on the def as `params`). Registered with SolModes.extend
 * (js/modes.js): the methods below are copied onto ModeScene, so `this` is the mode scene. Every texture is drawn
 * once (canvasTex) under an "md-noon-" key; the town is redrawn when the canvas changes size.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, shuffle = L.shuffle, canvasTex = L.canvasTex;
  var TAU = Math.PI * 2;
  var SERIF = "Georgia, 'Times New Roman', serif";
  var SLAB = "Rockwell, 'Roboto Slab', 'Arvo', Georgia, 'Times New Roman', serif";

  /* the world, in feet: the camera is CAMH above the street looking down it; the street runs to the courthouse */
  var CAMH = 5.4, SX = 19, FX = 24, BWH = 1.3, CZ = 118, TICKS = 5, PPF = 29;   /* PPF: outlaw texture pixels per foot */
  var OUT_W = 100, OUT_H = 190;
  var GUN_AT = { stand: [27, 100], aim: [38, 79], up: [50, 60] };   /* where the gun is on the outlaw texture */
  var C = { ink: "#24170d", paper: "#f2e4c4", paper2: "#dcc49a", brass: "#d6a441", rust: "#9a3c22" };
  var INK = 0x24170d, PAPER = 0xf2e4c4, BRASS = 0xd6a441, RUST = 0xa8402a, CREAM = 0xfff3d6;

  /* ── difficulty: one curve for levels 1-100, every level a little harder than the one before ── */
  function noonParams(n) {
    n = clamp(Math.floor(Number(n) || 1), 1, 100);
    return {
      waitMs: 7200 - n * 46,                                          /* the five ticks to the bell: 7154 at 1, 2600 at 100 */
      enterMs: 2100 - n * 7,                                          /* the outlaws step out into the street */
      drawMs: 5800 - n * 44,                                          /* bell to the first outlaw taking aim: 5756 ... 1400 */
      tellMs: 1650 - n * 10.5,                                        /* an outlaw's aim (glint, ring) before he fires: 1640 ... 600 */
      gapMs: 4800 - n * 33,                                           /* between one shot at you and the next aim: 4767 ... 1500 */
      aimers: n >= 91 ? 3 : n >= 31 ? 2 : 1,                          /* outlaws taking aim at once */
      freeFouls: n <= 10 ? 1 : 0,                                     /* a warning, not a life, for the first foul of a level */
      strafe: n >= 11 ? Math.min(0.34, 0.1 + (n - 11) * 0.003) : 0,   /* sidestep after the bell: a share of the gap between outlaws */
      strafeSpd: 0.7 + n * 0.008,                                     /* rad a second */
      fakes: n >= 21 ? Math.min(0.6, 0.16 + (n - 21) * 0.0055) : 0,   /* fake-outs a second during the wait */
      swaps: n >= 41 ? Math.min(2, 0.6 + (n - 41) * 0.024) : 0,       /* outlaws trading places during a wait (on average) */
      dust: n >= 51 ? Math.min(0.32, 0.1 + (n - 51) * 0.0045) : 0,    /* dust gusts a second */
      roof: n >= 61 ? Math.min(0.95, 0.5 + (n - 61) * 0.0145) : 0,    /* chance of a rooftop gunman in a showdown */
      cover: n >= 71 ? Math.min(1, 0.4 + (n - 71) * 0.021) : 0,       /* share of the outlaws with barrels to duck behind */
      jitter: n >= 81 ? Math.min(0.5, 0.25 + (n - 81) * 0.0128) : 0,  /* the clock's ticks come unevenly */
      reloadMs: 900 + n * 5,                                          /* six shots, then the reload */
      quickMs: 2600 - n * 14                                          /* the "lightning draw" bonus: right letter this soon after the bell */
    };
  }

  /* ── art ── */
  function poly(c, pts, fill, stroke, lw) {
    c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); c.closePath();
    if (fill) { c.fillStyle = fill; c.fill(); }
    if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw || 1; c.stroke(); }
  }
  function limb(c, pts, col, wd) {
    c.lineCap = "round"; c.lineJoin = "round";
    c.strokeStyle = C.ink; c.lineWidth = wd + 2.6; c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); c.stroke();
    c.strokeStyle = col; c.lineWidth = wd; c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); c.stroke();
  }
  function hand(c, x, y, r) { c.fillStyle = "#b98b5e"; c.beginPath(); c.arc(x, y, r || 4, 0, TAU); c.fill(); c.strokeStyle = C.ink; c.lineWidth = 1.2; c.stroke(); }

  /* four outlaws, front on, bandanas up (no faces), in sepia browns */
  var GANG = [
    { hat: "#2b2018", band: "#8a6a44", crown: "pinch", coat: "#3d2c1e", long: true, shirt: "#a48e6c", scarf: "#7c3826", pants: "#4b3a2b", boots: "#22170e" },
    { hat: "#a08060", band: "#3b2a1b", crown: "flat", vest: "#4a3322", shirt: "#d8c49c", scarf: "#5c4030", pants: "#5d4733", boots: "#2a1c12" },
    { hat: "#4a3a2c", band: "#b08a50", crown: "dome", poncho: "#86643e", shirt: "#bfa47a", scarf: "#8a4a2a", pants: "#3e3226", boots: "#1f150e" },
    { hat: "#1d1611", band: "#6a5a48", crown: "tall", coat: "#6b6152", long: true, vest: "#2a2018", shirt: "#c9b48c", scarf: "#3a2c22", pants: "#3a2e24", boots: "#1a120c" }
  ];
  function drawOutlaw(v, pose) {
    return function (c) {
      var o = GANG[v], I = C.ink, sleeve = o.coat || o.shirt;
      c.lineJoin = "round"; c.lineCap = "round";
      /* legs and boots, a gunfighter's stance */
      poly(c, [[38, 110], [49, 110], [47, 176], [35, 176]], o.pants, I, 1.4);
      poly(c, [[51, 110], [62, 110], [65, 176], [53, 176]], o.pants, I, 1.4);
      poly(c, [[33, 171], [47, 171], [47, 186], [26, 187], [27, 180]], o.boots, I, 1.2);
      poly(c, [[53, 171], [67, 171], [73, 180], [74, 187], [53, 186]], o.boots, I, 1.2);
      c.strokeStyle = "rgba(240,220,180,0.35)"; c.lineWidth = 1; c.beginPath(); c.moveTo(43, 120); c.lineTo(41, 168); c.moveTo(57, 120); c.lineTo(59, 168); c.stroke();
      /* the long coat's tails behind the legs */
      if (o.long) { poly(c, [[31, 60], [21, 162], [37, 166], [41, 112]], o.coat, I, 1.4); poly(c, [[69, 60], [79, 162], [63, 166], [59, 112]], o.coat, I, 1.4); }
      /* shirt, vest, coat fronts */
      poly(c, [[33, 55], [67, 55], [64, 110], [36, 110]], o.shirt, I, 1.4);
      c.strokeStyle = "rgba(36,23,13,0.4)"; c.lineWidth = 1; c.beginPath(); c.moveTo(50, 58); c.lineTo(50, 104); c.stroke();
      if (o.vest) { poly(c, [[33, 55], [46, 58], [48, 106], [36, 108]], o.vest, I, 1.2); poly(c, [[67, 55], [54, 58], [52, 106], [64, 108]], o.vest, I, 1.2); }
      if (o.long) {
        poly(c, [[31, 54], [42, 58], [41, 112], [38, 152], [29, 150], [27, 100]], o.coat, I, 1.4);
        poly(c, [[69, 54], [58, 58], [59, 112], [62, 152], [71, 150], [73, 100]], o.coat, I, 1.4);
        c.strokeStyle = "rgba(240,220,180,0.25)"; c.beginPath(); c.moveTo(33, 70); c.lineTo(31, 140); c.moveTo(67, 70); c.lineTo(69, 140); c.stroke();
      }
      /* the gun belt, the buckle, the holster on his right hip (screen left) */
      c.fillStyle = "#3a2616"; c.fillRect(34, 103, 32, 7); c.strokeStyle = I; c.lineWidth = 1; c.strokeRect(34, 103, 32, 7);
      c.fillStyle = C.brass; c.fillRect(47, 103.5, 6, 6);
      c.fillStyle = "#c9a86a"; for (var b = 0; b < 5; b++) c.fillRect(56 + b * 2, 105, 1, 3);
      poly(c, [[25, 103], [35, 103], [36, 130], [28, 133]], "#4a3020", I, 1.2);
      if (pose === "stand") { poly(c, [[26, 94], [33, 94], [34, 104], [27, 104]], "#2c2620", I, 1); c.fillStyle = "rgba(255,240,200,0.5)"; c.fillRect(28, 96, 1.5, 6); }
      /* a poncho over it all */
      if (o.poncho) {
        poly(c, [[30, 56], [70, 56], [76, 92], [50, 104], [24, 92]], o.poncho, I, 1.4);
        c.strokeStyle = "#d8c49c"; c.lineWidth = 2; c.beginPath(); c.moveTo(27, 84); c.lineTo(50, 95); c.lineTo(73, 84); c.stroke();
        c.strokeStyle = "#5a3a20"; c.lineWidth = 2; c.beginPath(); c.moveTo(29, 77); c.lineTo(50, 88); c.lineTo(71, 77); c.stroke();
      }
      /* arms */
      if (pose === "up") {
        limb(c, [[34, 60], [22, 40], [17, 18]], sleeve, 8); limb(c, [[66, 60], [78, 40], [83, 18]], sleeve, 8);
        hand(c, 17, 15, 4.6); hand(c, 83, 15, 4.6);
      } else if (pose === "aim") {
        limb(c, [[34, 60], [28, 76], [37, 81]], sleeve, 8); limb(c, [[66, 60], [74, 84], [72, 104]], sleeve, 8); hand(c, 72, 106);
        /* the revolver pointed straight at you: the frame, the cylinder, the dark bore */
        poly(c, [[31, 73], [45, 73], [45, 86], [31, 86]], "#2c2620", I, 1.2);
        c.fillStyle = "#4a443c"; c.beginPath(); c.arc(38, 79, 6, 0, TAU); c.fill(); c.strokeStyle = I; c.stroke();
        c.fillStyle = "#0a0806"; c.beginPath(); c.arc(38, 79, 2.6, 0, TAU); c.fill();
        c.strokeStyle = "rgba(255,240,200,0.7)"; c.lineWidth = 1; c.beginPath(); c.arc(38, 79, 5, Math.PI * 1.1, Math.PI * 1.6); c.stroke();
        hand(c, 37, 87, 4);
      } else {
        limb(c, [[34, 60], [26, 82], [29, 92]], sleeve, 8); hand(c, 29, 93);
        limb(c, [[66, 60], [74, 84], [72, 104]], sleeve, 8); hand(c, 72, 106);
      }
      /* head: neck, a face in the brim's shadow, the bandana up over nose and mouth */
      c.fillStyle = "#9c7550"; c.fillRect(45, 44, 10, 13);
      c.fillStyle = "#b98b5e"; c.beginPath(); c.ellipse(50, 35, 9.5, 11.5, 0, 0, TAU); c.fill(); c.strokeStyle = I; c.lineWidth = 1.2; c.stroke();
      c.fillStyle = "rgba(36,22,12,0.55)"; c.fillRect(40.5, 26, 19, 8);
      c.fillStyle = "#f4e6c8"; c.beginPath(); c.arc(46, 31, 1.2, 0, TAU); c.arc(54, 31, 1.2, 0, TAU); c.fill();
      c.strokeStyle = I; c.lineWidth = 1.3; c.beginPath(); c.moveTo(43, 28.5); c.lineTo(48, 29.5); c.moveTo(57, 28.5); c.lineTo(52, 29.5); c.stroke();
      poly(c, [[39.5, 35], [60.5, 35], [58, 46], [50, 56], [42, 46]], o.scarf, I, 1.2);
      c.strokeStyle = "rgba(240,220,180,0.4)"; c.lineWidth = 1; c.beginPath(); c.moveTo(44, 40); c.lineTo(50, 50); c.lineTo(56, 40); c.stroke();
      c.fillStyle = "rgba(240,220,180,0.55)"; [[45, 38], [55, 38], [50, 44]].forEach(function (q) { c.beginPath(); c.arc(q[0], q[1], 0.9, 0, TAU); c.fill(); });
      /* hat */
      var cr = o.crown;
      if (cr === "pinch") poly(c, [[37, 25], [39, 8], [46, 4], [50, 8], [54, 4], [61, 8], [63, 25]], o.hat, I, 1.3);
      else if (cr === "flat") poly(c, [[36, 25], [38, 9], [62, 9], [64, 25]], o.hat, I, 1.3);
      else if (cr === "dome") { c.fillStyle = o.hat; c.beginPath(); c.moveTo(36, 25); c.quadraticCurveTo(36, 3, 50, 3); c.quadraticCurveTo(64, 3, 64, 25); c.closePath(); c.fill(); c.strokeStyle = I; c.lineWidth = 1.3; c.stroke(); }
      else poly(c, [[37, 25], [39, 2], [61, 2], [63, 25]], o.hat, I, 1.3);
      c.fillStyle = o.band; c.fillRect(37, 19, 26, 4);
      c.fillStyle = o.hat; c.beginPath(); c.ellipse(50, 25, 25, 5.5, 0, 0, TAU); c.fill(); c.strokeStyle = I; c.lineWidth = 1.3; c.stroke();
      c.strokeStyle = "rgba(255,240,210,0.3)"; c.lineWidth = 1; c.beginPath(); c.ellipse(50, 24, 22, 3.6, 0, Math.PI * 1.05, Math.PI * 1.95); c.stroke();
    };
  }
  /* the wanted poster over each outlaw (the letter is a text object on top) */
  function drawPoster(c, w, h) {
    c.fillStyle = "rgba(20,12,6,0.45)"; c.fillRect(4, 5, w - 5, h - 5);
    var g = c.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, "#f7ebd0"); g.addColorStop(0.6, "#efdfbc"); g.addColorStop(1, "#d9c094");
    poly(c, [[2, 3], [w * 0.3, 1], [w * 0.62, 3], [w - 3, 1], [w - 1, h * 0.4], [w - 3, h - 3], [w * 0.55, h - 1], [w * 0.2, h - 3], [1, h - 2], [3, h * 0.5]], null, null);
    c.fillStyle = g; c.fill(); c.strokeStyle = "#5a4024"; c.lineWidth = 1.5; c.stroke();
    c.fillStyle = "rgba(150,110,60,0.18)"; c.beginPath(); c.arc(w * 0.8, h * 0.75, 9, 0, TAU); c.arc(w * 0.18, h * 0.3, 6, 0, TAU); c.fill();
    c.fillStyle = C.ink; c.font = "bold 13px " + SLAB; c.textAlign = "center"; c.textBaseline = "middle";
    c.fillText("WANTED", w / 2, 13);
    c.fillRect(8, 22, w - 16, 1.5); c.fillRect(8, h - 21, w - 16, 1.5);
    c.font = "bold 8px " + SERIF; c.fillText("$500 REWARD", w / 2, h - 12);
    c.fillStyle = "#5a5048"; c.beginPath(); c.arc(w / 2, 4, 2.2, 0, TAU); c.fill();
  }
  /* the marshal from behind: hair, collar, shirt sleeves, a dark vest, the gun belt and an empty holster
     (the right arm and the gun are drawn every frame; the hat is its own sprite) */
  function drawMarshal(c, w, h) {
    var I = C.ink;
    c.lineJoin = "round"; c.lineCap = "round";
    /* left arm, hanging */
    limb(c, [[44, 92], [32, 150], [30, 204]], "#d9c8a4", 19);
    hand(c, 30, 214, 8);
    /* back: shirt shoulders, the vest over them */
    poly(c, [[46, 80], [134, 80], [150, 108], [148, 250], [32, 250], [30, 108]], "#d9c8a4", I, 2);
    c.strokeStyle = "rgba(90,60,30,0.35)"; c.lineWidth = 1.4; c.beginPath(); c.moveTo(40, 120); c.lineTo(52, 160); c.moveTo(140, 120); c.lineTo(128, 160); c.stroke();
    poly(c, [[60, 80], [120, 80], [136, 112], [134, 236], [46, 236], [44, 112]], "#3b2c20", I, 2);
    c.strokeStyle = "rgba(220,190,140,0.25)"; c.lineWidth = 1.2; c.beginPath(); c.moveTo(90, 84); c.lineTo(90, 232); c.stroke();
    c.fillStyle = "#2a1e15"; c.fillRect(72, 196, 36, 7); c.fillStyle = "#a88a54"; c.fillRect(87, 195, 6, 9);
    /* the gun belt with its cartridge loops, the holster on his right hip (screen right) */
    c.fillStyle = "#4a3020"; c.fillRect(30, 232, 122, 14); c.strokeStyle = I; c.lineWidth = 1.4; c.strokeRect(30, 232, 122, 14);
    c.fillStyle = "#c9a35a"; for (var i = 0; i < 14; i++) c.fillRect(40 + i * 7, 235, 3, 8);
    poly(c, [[134, 236], [156, 234], [160, 260], [138, 260]], "#5a3a22", I, 1.6);
    /* neck, collar, ears, the back of his head */
    c.fillStyle = "#a57c52"; c.fillRect(78, 56, 24, 26);
    poly(c, [[70, 76], [90, 70], [110, 76], [106, 86], [74, 86]], "#e8dcc0", I, 1.4);
    c.fillStyle = "#b08560"; c.beginPath(); c.ellipse(66, 46, 4.5, 8, -0.2, 0, TAU); c.ellipse(114, 46, 4.5, 8, 0.2, 0, TAU); c.fill();
    c.fillStyle = "#3a2a1c"; c.beginPath(); c.ellipse(90, 40, 23, 26, 0, 0, TAU); c.fill(); c.strokeStyle = I; c.lineWidth = 1.4; c.stroke();
    c.strokeStyle = "rgba(200,170,120,0.3)"; c.lineWidth = 1; for (var j = 0; j < 6; j++) { c.beginPath(); c.moveTo(74 + j * 6, 30); c.quadraticCurveTo(76 + j * 6, 48, 74 + j * 6.4, 62); c.stroke(); }
  }
  function drawMarshalHat(c, w, h) {
    var I = C.ink;
    poly(c, [[42, 42], [46, 10], [60, 5], [70, 9], [80, 5], [94, 10], [98, 42]], "#4c3e30", I, 1.6);
    c.strokeStyle = "rgba(20,12,6,0.5)"; c.lineWidth = 2; c.beginPath(); c.moveTo(70, 10); c.lineTo(70, 34); c.stroke();
    c.fillStyle = "#2a2018"; c.fillRect(43, 32, 54, 7);
    c.fillStyle = "#5a4a3a"; c.beginPath(); c.ellipse(70, 43, 66, 12, 0, 0, TAU); c.fill(); c.strokeStyle = I; c.lineWidth = 1.6; c.stroke();
    c.strokeStyle = "rgba(255,236,200,0.35)"; c.lineWidth = 1.4; c.beginPath(); c.ellipse(70, 41, 62, 9, 0, Math.PI * 1.05, Math.PI * 1.95); c.stroke();
  }
  /* the water trough: the plank rim, the water and the boards, iron bands */
  function drawTrough(c, w, h) {
    var I = C.ink, g;
    poly(c, [[6, 12], [w - 6, 12], [w - 2, h], [2, h]], "#6e4e30", I, 2);
    for (var i = 0; i < 4; i++) { c.strokeStyle = "rgba(30,18,8,0.55)"; c.lineWidth = 1.6; c.beginPath(); c.moveTo(4, 34 + i * 20); c.lineTo(w - 4, 34 + i * 20); c.stroke(); }
    c.strokeStyle = "rgba(240,210,160,0.22)"; c.lineWidth = 1; for (i = 0; i < 4; i++) { c.beginPath(); c.moveTo(6, 37 + i * 20); c.lineTo(w - 6, 37 + i * 20); c.stroke(); }
    c.fillStyle = "#3a3632"; [w * 0.12, w * 0.88].forEach(function (x) { c.fillRect(x - 5, 12, 10, h - 12); c.fillStyle = "#6a625a"; c.fillRect(x - 5, 12, 2, h - 12); c.fillStyle = "#3a3632"; });
    g = c.createLinearGradient(0, 2, 0, 14);
    g.addColorStop(0, "#d8e2d6"); g.addColorStop(1, "#7e8a80");
    poly(c, [[10, 3], [w - 10, 3], [w - 6, 13], [6, 13]], null, null); c.fillStyle = g; c.fill();
    c.strokeStyle = "rgba(255,255,255,0.7)"; c.lineWidth = 1.2; c.beginPath(); c.moveTo(w * 0.2, 7); c.lineTo(w * 0.32, 7); c.moveTo(w * 0.55, 9); c.lineTo(w * 0.7, 9); c.stroke();
    c.fillStyle = "#8a6440"; c.fillRect(0, 0, w, 4); c.fillRect(0, 12, w, 5); c.strokeStyle = I; c.lineWidth = 1.4; c.strokeRect(0, 0, w, 4); c.strokeRect(0, 12, w, 5);
  }
  /* the gunman on the rooftop: hat, bandana, a rifle aimed at you */
  function drawRoofMan(c, w, h) {
    var I = C.ink;
    poly(c, [[18, 46], [62, 46], [72, h], [8, h]], "#3a2c20", I, 1.4);
    limb(c, [[22, 52], [28, 62], [38, 58]], "#3a2c20", 7); limb(c, [[58, 52], [52, 62], [44, 60]], "#3a2c20", 7);
    poly(c, [[30, 50], [50, 50], [50, 66], [30, 66]], "#2c2620", I, 1);
    c.fillStyle = "#4a443c"; c.beginPath(); c.arc(40, 57, 5, 0, TAU); c.fill(); c.fillStyle = "#0a0806"; c.beginPath(); c.arc(40, 57, 2.3, 0, TAU); c.fill();
    c.fillStyle = "#b98b5e"; c.beginPath(); c.ellipse(40, 30, 9, 10.5, 0, 0, TAU); c.fill(); c.strokeStyle = I; c.lineWidth = 1.2; c.stroke();
    c.fillStyle = "rgba(36,22,12,0.55)"; c.fillRect(31, 22, 18, 7);
    c.fillStyle = "#f4e6c8"; c.beginPath(); c.arc(36, 26, 1.1, 0, TAU); c.arc(44, 26, 1.1, 0, TAU); c.fill();
    poly(c, [[30.5, 30], [49.5, 30], [47, 40], [40, 48], [33, 40]], "#6a3020", I, 1.2);
    poly(c, [[28, 21], [30, 4], [50, 4], [52, 21]], "#2a2018", I, 1.2);
    c.fillStyle = "#2a2018"; c.beginPath(); c.ellipse(40, 21, 22, 5, 0, 0, TAU); c.fill(); c.strokeStyle = I; c.stroke();
  }
  /* cover in the street: two barrels and a crate */
  function drawCover(c, w, h) {
    var I = C.ink;
    function barrel(x, y, bw, bh) {
      var g = c.createLinearGradient(x, 0, x + bw, 0);
      g.addColorStop(0, "#5a3e24"); g.addColorStop(0.4, "#9a7248"); g.addColorStop(1, "#4a321e");
      c.fillStyle = g; c.beginPath(); c.moveTo(x + 4, y); c.quadraticCurveTo(x - 3, y + bh / 2, x + 4, y + bh); c.lineTo(x + bw - 4, y + bh); c.quadraticCurveTo(x + bw + 3, y + bh / 2, x + bw - 4, y); c.closePath(); c.fill();
      c.strokeStyle = I; c.lineWidth = 1.4; c.stroke();
      c.strokeStyle = "#2e2a26"; c.lineWidth = 3; [0.18, 0.82].forEach(function (f) { c.beginPath(); c.moveTo(x + 1, y + bh * f); c.lineTo(x + bw - 1, y + bh * f); c.stroke(); });
      c.fillStyle = "#3a2818"; c.beginPath(); c.ellipse(x + bw / 2, y + 2, bw / 2 - 4, 4, 0, 0, TAU); c.fill(); c.strokeStyle = I; c.lineWidth = 1; c.stroke();
    }
    poly(c, [[48, 34], [94, 34], [94, h - 1], [48, h - 1]], "#8a6a44", I, 1.4);
    c.strokeStyle = "rgba(30,18,8,0.6)"; c.lineWidth = 1.4; c.beginPath(); c.moveTo(48, 34); c.lineTo(94, h - 1); c.moveTo(94, 34); c.lineTo(48, h - 1); c.stroke();
    barrel(4, 14, 44, h - 15); barrel(70, 20, 40, h - 21);
  }
  function drawTumble(c, w, h) {
    var cx = w / 2, cy = h / 2, i, a, r;
    c.lineCap = "round";
    for (i = 0; i < 70; i++) {
      a = Math.random() * TAU; r = (0.25 + Math.random() * 0.7) * w / 2;
      var b = a + rnd(0.6, 1.8), r2 = (0.25 + Math.random() * 0.7) * w / 2;
      c.strokeStyle = i % 3 ? "rgba(110,80,46,0.9)" : "rgba(170,130,80,0.9)"; c.lineWidth = rnd(0.8, 1.8);
      c.beginPath(); c.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      c.quadraticCurveTo(cx + Math.cos((a + b) / 2) * w * 0.55, cy + Math.sin((a + b) / 2) * h * 0.55, cx + Math.cos(b) * r2, cy + Math.sin(b) * r2); c.stroke();
    }
  }
  function drawDust(c, w, h) {
    for (var i = 0; i < 26; i++) {
      var x = rnd(w * 0.15, w * 0.85), y = rnd(h * 0.3, h * 0.75), r = rnd(h * 0.18, h * 0.42);
      var g = c.createRadialGradient(x, y, 1, x, y, r);
      g.addColorStop(0, "rgba(214,184,138,0.42)"); g.addColorStop(1, "rgba(214,184,138,0)");
      c.fillStyle = g; c.fillRect(0, 0, w, h);
    }
  }
  function drawFlash(c, w, h) {
    var cx = w / 2, cy = h / 2, g = c.createRadialGradient(cx, cy, 1, cx, cy, w / 2);
    g.addColorStop(0, "rgba(255,252,236,1)"); g.addColorStop(0.3, "rgba(255,226,150,0.95)"); g.addColorStop(1, "rgba(255,170,60,0)");
    c.fillStyle = g; c.beginPath();
    for (var i = 0; i < 16; i++) { var a = i / 16 * TAU, r = (i % 2 ? 0.22 : 0.5) * w; c[i ? "lineTo" : "moveTo"](cx + Math.cos(a) * r, cy + Math.sin(a) * r); }
    c.closePath(); c.fill();
  }
  /* a revolver seen from the side (it spins away when it is shot out of a hand) */
  function drawGun(c, w, h) {
    var I = C.ink;
    poly(c, [[2, 5], [26, 5], [26, 10], [2, 10]], "#4a4440", I, 1.2);
    poly(c, [[22, 4], [32, 4], [33, 12], [22, 13]], "#3a3430", I, 1.2);
    poly(c, [[28, 11], [34, 11], [38, 21], [30, 21]], "#6a4a2a", I, 1.2);
    c.strokeStyle = I; c.lineWidth = 1.2; c.beginPath(); c.arc(27, 15, 3.5, 0, Math.PI); c.stroke();
  }
  function drawGrain(c, w, h) {
    var d = c.createImageData(w, h), i;
    for (i = 0; i < d.data.length; i += 4) {
      var r = Math.random();
      if (r < 0.06) { d.data[i] = 40; d.data[i + 1] = 26; d.data[i + 2] = 12; d.data[i + 3] = 90 + Math.random() * 90; }
      else if (r < 0.09) { d.data[i] = 255; d.data[i + 1] = 244; d.data[i + 2] = 220; d.data[i + 3] = 70 + Math.random() * 80; }
    }
    c.putImageData(d, 0, 0);
  }
  /* the tower clock's face: an iron rim, a brass ring, Roman numerals (the hands are drawn every frame) */
  function drawFace(c, w, h) {
    var cx = w / 2, cy = h / 2, R = w / 2 - 2, i, a, g;
    c.fillStyle = "#2b2118"; c.beginPath(); c.arc(cx, cy, R, 0, TAU); c.fill();
    g = c.createLinearGradient(0, 0, w, h); g.addColorStop(0, "#e8c47a"); g.addColorStop(1, "#8a6224");
    c.fillStyle = g; c.beginPath(); c.arc(cx, cy, R - 4, 0, TAU); c.fill();
    g = c.createRadialGradient(cx - R * 0.2, cy - R * 0.25, 4, cx, cy, R);
    g.addColorStop(0, "#fbf3df"); g.addColorStop(1, "#e4cf9f");
    c.fillStyle = g; c.beginPath(); c.arc(cx, cy, R - 9, 0, TAU); c.fill();
    c.strokeStyle = C.ink; c.lineWidth = 1.2; c.beginPath(); c.arc(cx, cy, R - 9, 0, TAU); c.stroke();
    for (i = 0; i < 60; i++) {
      a = i / 60 * TAU; var big = i % 5 === 0, r0 = R - (big ? 21 : 15), r1 = R - 11;
      c.strokeStyle = C.ink; c.lineWidth = big ? 3 : 1.2;
      c.beginPath(); c.moveTo(cx + Math.sin(a) * r0, cy - Math.cos(a) * r0); c.lineTo(cx + Math.sin(a) * r1, cy - Math.cos(a) * r1); c.stroke();
    }
    var NUM = ["XII", "I", "II", "III", "IIII", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
    c.fillStyle = C.ink; c.textAlign = "center"; c.textBaseline = "middle";
    for (i = 0; i < 12; i++) {
      a = i / 12 * TAU; var rr = R - 34;
      c.font = "bold " + (i === 0 ? 17 : 14) + "px " + SERIF;
      c.fillText(NUM[i], cx + Math.sin(a) * rr, cy - Math.cos(a) * rr);
    }
    c.font = "italic 9px " + SERIF; c.fillStyle = "rgba(36,23,13,0.7)"; c.fillText("HADLEYVILLE", cx, cy + R * 0.38);
  }
  function ensureNoonArt(scene) {
    for (var v = 0; v < GANG.length; v++) ["stand", "aim", "up"].forEach(function (p) { canvasTex(scene, "md-noon-out-" + v + "-" + p, OUT_W, OUT_H, drawOutlaw(v, p)); });
    canvasTex(scene, "md-noon-poster", 72, 88, drawPoster);
    canvasTex(scene, "md-noon-marshal", 180, 260, drawMarshal);
    canvasTex(scene, "md-noon-hat", 140, 58, drawMarshalHat);
    canvasTex(scene, "md-noon-trough", 340, 110, drawTrough);
    canvasTex(scene, "md-noon-roofman", 80, 80, drawRoofMan);
    canvasTex(scene, "md-noon-cover", 116, 78, drawCover);
    canvasTex(scene, "md-noon-tumble", 64, 64, drawTumble);
    canvasTex(scene, "md-noon-dust", 240, 120, drawDust);
    canvasTex(scene, "md-noon-flash", 48, 48, drawFlash);
    canvasTex(scene, "md-noon-gun", 40, 24, drawGun);
    canvasTex(scene, "md-noon-grain", 256, 256, drawGrain);
    canvasTex(scene, "md-noon-face", 180, 180, drawFace);
  }

  /* ── the town (drawn once per canvas size) ── */
  function proj(B, X, Y, Z) { return { x: B.cx + B.f * X / Z, y: B.hy + B.f * (CAMH - Y) / Z, s: B.f / Z }; }
  /* the storefronts: [near z, far z, height, top, wall colour, name] — far to near is drawn last to first */
  var LEFT = [[12, 34, 21, "flat", "#957250", "BANK"], [34, 54, 24, "step", "#7e5d3e", "SALOON"], [54, 72, 19, "peak", "#a58460", "GENERAL STORE"],
    [72, 92, 23, "step", "#8a6744", "HOTEL"], [92, 112, 17, "flat", "#9b7a55", "BARBER"]];
  var RIGHT = [[12, 36, 20, "step", "#8d6b47", "STAGE LINE"], [36, 56, 22, "flat", "#9a7650", "DRY GOODS"], [56, 76, 24, "step", "#7a5a3c", "MARSHAL"],
    [76, 96, 19, "flat", "#a07d58", "TELEGRAPH"], [96, 114, 16, "peak", "#93704c", "LIVERY"]];
  function drawSky(B, W, H) {
    return function (c) {
      var hy = B.hy, g = c.createLinearGradient(0, 0, 0, hy);
      g.addColorStop(0, "#c9a571"); g.addColorStop(0.5, "#e6cc9c"); g.addColorStop(1, "#f6e9cb");
      c.fillStyle = g; c.fillRect(0, 0, W, H);
      g = c.createRadialGradient(W * 0.5, -H * 0.3, 10, W * 0.5, -H * 0.3, H * 0.85);
      g.addColorStop(0, "rgba(255,250,236,0.75)"); g.addColorStop(1, "rgba(255,250,236,0)");
      c.fillStyle = g; c.fillRect(0, 0, W, hy);
      /* buttes and mesas on the horizon, the far ones paler */
      function butte(x0, x1, top, col) {
        var w = x1 - x0, b = hy + 2;
        poly(c, [[x0, b], [x0 + w * 0.12, top + (b - top) * 0.35], [x0 + w * 0.2, top], [x1 - w * 0.22, top], [x1 - w * 0.12, top + (b - top) * 0.3], [x1, b]], col);
        c.fillStyle = "rgba(255,240,210,0.18)"; c.fillRect(x0 + w * 0.2, top, w * 0.58, Math.max(2, (b - top) * 0.06));
      }
      var far = "#d8bd92", near = "#c2a074";
      butte(-W * 0.05, W * 0.18, hy - H * 0.2, far); butte(W * 0.24, W * 0.38, hy - H * 0.26, far); butte(W * 0.7, W * 0.92, hy - H * 0.22, far);
      butte(W * 0.04, W * 0.13, hy - H * 0.3, near); butte(W * 0.82, W * 1.02, hy - H * 0.27, near); butte(W * 0.6, W * 0.68, hy - H * 0.17, near);
      poly(c, [[W * 0.29, hy - H * 0.26], [W * 0.305, hy - H * 0.33], [W * 0.322, hy - H * 0.33], [W * 0.33, hy - H * 0.26]], far);
      /* the ground out to the horizon */
      c.fillStyle = "#e9d2a4"; c.fillRect(0, hy, W, H - hy);
    };
  }
  function drawTown(B, W, H) {
    return function (c) {
      var hy = B.hy, k = B.k, g, i;
      function P(X, Y, Z) { return proj(B, X, Y, Z); }
      function quad(a, b, cc, d, fill, stroke, lw) { poly(c, [[a.x, a.y], [b.x, b.y], [cc.x, cc.y], [d.x, d.y]], fill, stroke, lw); }
      /* the street, from the courthouse steps to your feet */
      var yE = P(0, 0, CZ).y;
      g = c.createLinearGradient(0, yE, 0, H);
      g.addColorStop(0, "#e6cc9c"); g.addColorStop(0.25, "#d8b986"); g.addColorStop(1, "#b48a58");
      c.fillStyle = g; c.fillRect(0, yE, W, H - yE);
      /* wheel ruts and hoofprints */
      [-7, -4.6, 4.4, 6.8].forEach(function (X) {
        for (var z = 7; z < CZ - 4; z += 2) {
          var a = P(X, 0, z), b = P(X, 0, z + 2);
          c.strokeStyle = "rgba(96,64,32," + (0.12 + 0.08 * Math.min(1, 20 / z)) + ")"; c.lineWidth = Math.max(0.6, B.f * 0.35 / z);
          c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
        }
      });
      for (i = 0; i < 900; i++) {
        var Z = 6 + Math.pow(Math.random(), 0.7) * (CZ - 8), X = rnd(-SX, SX), p = P(X, 0, Z), r = clamp(B.f * 0.07 / Z, 0.5, 3.2);
        c.fillStyle = Math.random() < 0.7 ? "rgba(90,60,30," + rnd(0.12, 0.3) + ")" : "rgba(255,240,210," + rnd(0.15, 0.35) + ")";
        c.beginPath(); c.ellipse(p.x, p.y, r * 1.6, r * 0.7, 0, 0, TAU); c.fill();
      }
      /* the water tower and the windmill beyond the rooftops */
      var wt = P(-40, 0, 150), ws = wt.s;
      c.fillStyle = "#9c7a54";
      [-6, 6].forEach(function (dx) { c.fillRect(wt.x + dx * ws - 1, P(0, 30, 150).y, 2.5, wt.y - P(0, 30, 150).y); });
      poly(c, [[wt.x - 9 * ws, P(0, 30, 150).y], [wt.x + 9 * ws, P(0, 30, 150).y], [wt.x + 8 * ws, P(0, 42, 150).y], [wt.x - 8 * ws, P(0, 42, 150).y]], "#8a6a46", "#5a4026", 1);
      poly(c, [[wt.x - 9.5 * ws, P(0, 42, 150).y], [wt.x + 9.5 * ws, P(0, 42, 150).y], [wt.x, P(0, 47, 150).y]], "#6e5236");
      var wm = P(44, 0, 160), wmt = P(44, 34, 160);
      c.strokeStyle = "#8c6c48"; c.lineWidth = 1.6; c.beginPath(); c.moveTo(wm.x - 4 * wm.s, wm.y); c.lineTo(wmt.x, wmt.y); c.lineTo(wm.x + 4 * wm.s, wm.y); c.stroke();
      for (i = 0; i < 8; i++) { var aa = i / 8 * TAU; c.beginPath(); c.moveTo(wmt.x, wmt.y); c.lineTo(wmt.x + Math.cos(aa) * 6 * wm.s, wmt.y + Math.sin(aa) * 6 * wm.s); c.stroke(); }
      /* the courthouse at the end of the street, with the clock tower (the face, hands and bell are live) */
      var cs = B.f / CZ, base = P(0, 0, CZ).y, top = P(0, 18, CZ).y, hw = 30 * cs, cx = B.cx;
      g = c.createLinearGradient(0, top, 0, base);
      g.addColorStop(0, "#b7946a"); g.addColorStop(1, "#9a7850");
      c.fillStyle = g; c.fillRect(cx - hw, top, hw * 2, base - top);
      c.strokeStyle = "rgba(60,40,20,0.25)"; c.lineWidth = 1;
      for (var yy = top + 3 * cs; yy < base; yy += 1.4 * cs) { c.beginPath(); c.moveTo(cx - hw, yy); c.lineTo(cx + hw, yy); c.stroke(); }
      c.fillStyle = "#5a3e24"; c.fillRect(cx - hw - 2 * cs, top - 1.6 * cs, hw * 2 + 4 * cs, 1.8 * cs);
      poly(c, [[cx - 12 * cs, top - 1.6 * cs], [cx + 12 * cs, top - 1.6 * cs], [cx, top - 6 * cs]], "#a88660", "#5a3e24", 1.2);
      for (var row = 0; row < 2; row++) for (i = 0; i < 6; i++) {
        if (row === 1 && (i === 2 || i === 3)) continue;
        var wx = cx - hw + (i + 0.5) * hw / 3 - 1.5 * cs, wy = top + (row ? 10 : 3.2) * cs;
        c.fillStyle = "#2e2014"; c.fillRect(wx, wy, 3 * cs, 4.6 * cs);
        c.strokeStyle = "#e8d6b0"; c.lineWidth = Math.max(1, 0.35 * cs); c.strokeRect(wx, wy, 3 * cs, 4.6 * cs);
        c.beginPath(); c.moveTo(wx + 1.5 * cs, wy); c.lineTo(wx + 1.5 * cs, wy + 4.6 * cs); c.stroke();
      }
      c.fillStyle = "#2a1c10"; c.fillRect(cx - 3.2 * cs, base - 8 * cs, 6.4 * cs, 7.2 * cs);
      c.fillStyle = "#e8d6b0"; c.fillRect(cx - 7 * cs, base - 10.6 * cs, 14 * cs, 2 * cs);
      c.fillStyle = C.ink; c.font = "bold " + Math.max(7, Math.round(1.5 * cs)) + "px " + SERIF; c.textAlign = "center"; c.textBaseline = "middle";
      c.fillText("COURT HOUSE", cx, base - 9.6 * cs);
      for (i = 0; i < 3; i++) { c.fillStyle = i % 2 ? "#c9ab80" : "#b8996e"; c.fillRect(cx - (6 + i * 1.5) * cs, base - (0.8 - i * 0.27) * cs * 3, (12 + i * 3) * cs, 0.8 * cs); }
      /* the tower: shaft, the clock's round frame, the open belfry, the roof and a weathervane */
      var K = B.clock, tw = K.r * 1.32, bTop = K.y - K.r - 8 * k - K.bh;
      g = c.createLinearGradient(cx - tw, 0, cx + tw, 0);
      g.addColorStop(0, "#9a7850"); g.addColorStop(0.5, "#c4a276"); g.addColorStop(1, "#8a6a44");
      c.fillStyle = g; c.fillRect(cx - tw, bTop, tw * 2, top - bTop);
      c.strokeStyle = "#4a3220"; c.lineWidth = 2; c.strokeRect(cx - tw, bTop, tw * 2, top - bTop);
      c.fillStyle = "#4a3220"; c.fillRect(cx - tw - 4 * k, K.y - K.r - 9 * k, tw * 2 + 8 * k, 4 * k);
      c.fillStyle = "#2b2118"; c.beginPath(); c.arc(K.x, K.y, K.r + 5 * k, 0, TAU); c.fill();
      /* belfry: an arched opening onto the shadow where the bell hangs */
      var ow = tw * 0.62, oy0 = bTop + K.bh * 0.12, oy1 = bTop + K.bh;
      c.fillStyle = "#24170d"; c.beginPath(); c.moveTo(cx - ow, oy1); c.lineTo(cx - ow, oy0 + ow); c.arc(cx, oy0 + ow, ow, Math.PI, 0); c.lineTo(cx + ow, oy1); c.closePath(); c.fill();
      c.fillStyle = "#4a3220"; c.fillRect(cx - tw - 3 * k, oy1 - 1, tw * 2 + 6 * k, 4 * k);
      c.fillStyle = "#3a2818"; c.fillRect(cx - ow, oy0 + K.bh * 0.08, ow * 2, 3 * k);
      var rTop = bTop - K.bh * 0.62;
      poly(c, [[cx - tw - 6 * k, bTop + 2], [cx + tw + 6 * k, bTop + 2], [cx, rTop]], "#5a3e26", "#2e1f12", 1.5);
      c.strokeStyle = "#2e1f12"; c.lineWidth = 1.6; c.beginPath(); c.moveTo(cx, rTop); c.lineTo(cx, rTop - 12 * k); c.moveTo(cx - 8 * k, rTop - 8 * k); c.lineTo(cx + 9 * k, rTop - 8 * k); c.stroke();
      poly(c, [[cx + 9 * k, rTop - 8 * k], [cx + 3 * k, rTop - 11 * k], [cx + 3 * k, rTop - 5 * k]], "#2e1f12");
      /* the storefronts, far to near; doors and window positions are kept for the outlaws and the fake-outs */
      [[LEFT, -1], [RIGHT, 1]].forEach(function (sd) {
        var list = sd[0].slice().sort(function (a, b) { return b[0] - a[0]; }), sg = sd[1];
        list.forEach(function (bd) {
          var z0 = bd[0], z1 = bd[1], ht = bd[2], col = bd[4], X = sg * FX, L = z1 - z0;
          /* the end wall facing you (shows over a lower building in front) */
          quad(P(X, 0, z0), P(X, ht, z0), P(sg * (FX + 40), ht, z0), P(sg * (FX + 40), 0, z0), "#6a4c30", "#3a2818", 1);
          /* the facade with its false front */
          var topPts = [], zz;
          for (i = 0; i <= 20; i++) {
            zz = z0 + L * i / 20; var u = i / 20, yv = ht;
            if (bd[3] === "step" && u > 0.25 && u < 0.75) yv = ht + 3;
            if (bd[3] === "peak") yv = ht + 4 * (1 - Math.abs(u - 0.5) * 2);
            topPts.push(P(X, yv, zz));
          }
          var pts = [[P(X, 0, z0).x, P(X, 0, z0).y]].concat(topPts.map(function (q) { return [q.x, q.y]; })).concat([[P(X, 0, z1).x, P(X, 0, z1).y]]);
          poly(c, pts, col, "#3a2818", 1.2);
          /* clapboard lines */
          c.strokeStyle = "rgba(40,24,12,0.18)"; c.lineWidth = 1;
          for (var yb = 2; yb < ht; yb += 1.2) { var a1 = P(X, yb, z0), b1 = P(X, yb, z1); c.beginPath(); c.moveTo(a1.x, a1.y); c.lineTo(b1.x, b1.y); c.stroke(); }
          /* cornice */
          quad(P(X, ht - 1.2, z0), P(X, ht, z0), P(X, ht, z1), P(X, ht - 1.2, z1), "#4a3220");
          /* the name painted along the false front, in perspective */
          paintAlong(c, B, bd[5], X, ht - 5.2, ht - 1.8, z0 + 1.2, z1 - 1.2, sg);
          /* upstairs windows */
          [0.28, 0.72].forEach(function (f) {
            var za = z0 + L * f - 1.6, zb = z0 + L * f + 1.6;
            quad(P(X, 11, za), P(X, 15.5, za), P(X, 15.5, zb), P(X, 11, zb), "#2a1c10", "#e0cca4", 1.2);
          });
          /* ground floor in the awning's shade: a door between two shop windows */
          quad(P(X, 0, z0), P(X, 9.6, z0), P(X, 9.6, z1), P(X, 0, z1), "rgba(30,18,8,0.28)");
          var zd = z0 + L * 0.5;
          quad(P(X, BWH, zd - 2), P(X, 8.4, zd - 2), P(X, 8.4, zd + 2), P(X, BWH, zd + 2), "#1c120a", "#c8b088", 1);
          [0.2, 0.8].forEach(function (f) { var za = z0 + L * f - 2.2, zb = z0 + L * f + 2.2; quad(P(X, 3, za), P(X, 7.6, za), P(X, 7.6, zb), P(X, 3, zb), "#3a2c1e", "#c8b088", 1); });
          /* the boardwalk: its deck and its edge */
          quad(P(sg * SX, BWH, z0), P(X, BWH, z0), P(X, BWH, z1), P(sg * SX, BWH, z1), "#8a6a46", "#4a3220", 1);
          for (zz = z0; zz < z1; zz += 1.5) { var q0 = P(sg * SX, BWH, zz), q1 = P(X, BWH, zz); c.strokeStyle = "rgba(40,24,12,0.3)"; c.beginPath(); c.moveTo(q0.x, q0.y); c.lineTo(q1.x, q1.y); c.stroke(); }
          quad(P(sg * SX, 0, z0), P(sg * SX, BWH, z0), P(sg * SX, BWH, z1), P(sg * SX, 0, z1), "#4a3220");
          /* the awning: its shady underside, the fascia, the posts */
          quad(P(X, 10, z0), P(X, 10, z1), P(sg * (SX + 0.4), 9.2, z1), P(sg * (SX + 0.4), 9.2, z0), "#3c2818", "#24170d", 1);
          quad(P(sg * (SX + 0.4), 9.2, z0), P(sg * (SX + 0.4), 10.2, z0), P(sg * (SX + 0.4), 10.2, z1), P(sg * (SX + 0.4), 9.2, z1), "#6e5034", "#24170d", 1);
          [z0 + 0.4, z1 - 0.4].forEach(function (zp) {
            var pa = P(sg * (SX + 0.5), BWH, zp), pb = P(sg * (SX + 0.5), 9.3, zp), pw = Math.max(1.5, 0.5 * pa.s);
            c.fillStyle = "#5a3e26"; c.fillRect(pa.x - pw / 2, pb.y, pw, pa.y - pb.y);
            c.fillStyle = "rgba(255,230,190,0.25)"; c.fillRect(pa.x - pw / 2, pb.y, pw * 0.3, pa.y - pb.y);
          });
          /* a hitching rail at the edge of the street */
          var hr0 = P(sg * (SX - 1.2), 3, z0 + L * 0.25), hr1 = P(sg * (SX - 1.2), 3, z0 + L * 0.7);
          c.strokeStyle = "#4a3220"; c.lineWidth = Math.max(1.2, 0.35 * hr0.s); c.beginPath(); c.moveTo(hr0.x, hr0.y); c.lineTo(hr1.x, hr1.y); c.stroke();
          [hr0, hr1].forEach(function (q, j) { var gz = P(sg * (SX - 1.2), 0, z0 + L * (j ? 0.7 : 0.25)); c.beginPath(); c.moveTo(q.x, q.y); c.lineTo(gz.x, gz.y); c.stroke(); });
        });
      });
    };
  }
  /* the doors the outlaws step out of, the upstairs windows (the shutter fake-out), the rooftops (the gunman):
     world places, the same for every canvas size */
  function townPlaces(B) {
    B.doors = []; B.windows = []; B.roofs = [];
    [[LEFT, -1], [RIGHT, 1]].forEach(function (sd) {
      sd[0].forEach(function (bd) {
        var z0 = bd[0], z1 = bd[1], L = z1 - z0, X = sd[1] * FX, zd = z0 + L * 0.5;
        [0.28, 0.72].forEach(function (f) { B.windows.push({ X: X, Y: 13.2, Z: z0 + L * f, sg: sd[1] }); });
        B.doors.push({ X: sd[1] * (FX - 0.6), Z: zd, sg: sd[1] });
        B.roofs.push({ X: X, Y: bd[3] === "flat" ? bd[2] : bd[2] + 3, Z: zd, sg: sd[1] });
      });
    });
  }
  /* letters painted along a receding wall, each one scaled and sheared to its place */
  function paintAlong(c, B, text, X, y0, y1, za, zb, sg) {
    var n = text.length, i;
    if (!n) return;
    var from = sg < 0 ? za : zb, to = sg < 0 ? zb : za;   /* read left to right: near to far on the left side, far to near on the right */
    c.fillStyle = "#f2e4c4"; c.textAlign = "center"; c.textBaseline = "middle";
    for (i = 0; i < n; i++) {
      var ch = text[i]; if (ch === " ") continue;
      var zA = from + (to - from) * i / n, zB = from + (to - from) * (i + 1) / n, zC = (zA + zB) / 2;
      var a = proj(B, X, (y0 + y1) / 2, zA), b = proj(B, X, (y0 + y1) / 2, zB), t0 = proj(B, X, y1, zC), t1 = proj(B, X, y0, zC);
      var wpx = Math.abs(b.x - a.x), hpx = t1.y - t0.y, fs = 40;
      if (wpx < 1.2 || hpx < 3) continue;
      c.save();
      c.translate((a.x + b.x) / 2, (t0.y + t1.y) / 2);
      c.transform(1, (b.y - a.y) / (b.x - a.x), 0, 1, 0, 0);
      c.scale(wpx * 0.86 / (fs * 0.72), hpx / fs);
      c.font = "bold " + fs + "px " + SLAB;
      c.fillStyle = "rgba(36,23,13,0.55)"; c.fillText(ch, 2, 2);
      c.fillStyle = "#f2e4c4"; c.fillText(ch, 0, 0);
      c.restore();
    }
  }
  /* the film look: a warm vignette, darker at the corners */
  function drawVignette(W, H) {
    return function (c) {
      var g = c.createRadialGradient(W / 2, H * 0.48, Math.min(W, H) * 0.32, W / 2, H * 0.5, Math.max(W, H) * 0.78);
      g.addColorStop(0, "rgba(60,36,14,0)"); g.addColorStop(0.7, "rgba(60,36,14,0.22)"); g.addColorStop(1, "rgba(40,22,8,0.62)");
      c.fillStyle = g; c.fillRect(0, 0, W, H);
    };
  }

  /* ── sound: short effects on the realm kit's blips ── */
  function S() { return window.SolRealms; }
  function sfx(name, a) {
    var R = S();
    if (!R || !R.blip) return;
    try {
      if (name === "tick") { R.blip(2100, 1800, 0.035, "square", 0.022); R.hiss(0.03, 4200, 0.025); R.blip(a ? 98 : 82, 55, 0.16, "sine", a ? 0.07 : 0.05); }
      else if (name === "bell") {
        var v = a ? 0.55 : 1;
        R.blip(196, 195, 2.6, "sine", 0.12 * v); R.blip(392, 390, 1.9, "sine", 0.05 * v); R.blip(470, 468, 1.5, "sine", 0.04 * v);
        R.blip(588, 585, 1.2, "sine", 0.028 * v); R.blip(980, 975, 0.7, "sine", 0.02 * v); R.hiss(0.06, 3000, 0.04 * v);
      }
      else if (name === "gun") { R.hiss(0.2, 1100, 0.16); R.hiss(0.55, 320, 0.07, 0.02); R.blip(170, 50, 0.18, "square", 0.05); }
      else if (name === "far") { R.hiss(0.22, 760, 0.12); R.hiss(0.6, 260, 0.05, 0.03); R.blip(120, 45, 0.2, "square", 0.04); }
      else if (name === "ricochet") R.blip(2600, 900, 0.42, "sine", 0.035, 0.04);
      else if (name === "clank") { R.blip(1800, 1500, 0.08, "square", 0.03); R.blip(1250, 1100, 0.14, "triangle", 0.035, 0.02); R.blip(2600, 900, 0.42, "sine", 0.03, 0.06); }
      else if (name === "cock") { R.blip(3000, 2400, 0.025, "square", 0.03); R.blip(2300, 1900, 0.03, "square", 0.03, 0.1); }
      else if (name === "foul") { R.blip(330, 300, 0.25, "sawtooth", 0.035); R.blip(262, 220, 0.5, "sawtooth", 0.035, 0.24); }
      else if (name === "splash") { R.hiss(0.35, 2400, 0.08); R.blip(700, 300, 0.12, "sine", 0.02); R.blip(160, 90, 0.08, "triangle", 0.05); }
      else if (name === "thud") { R.blip(180, 90, 0.08, "triangle", 0.06); R.hiss(0.06, 1500, 0.05); }
      else if (name === "whistle") { R.blip(587, 580, 1.0, "triangle", 0.035); R.blip(740, 733, 1.0, "triangle", 0.03); R.blip(587, 580, 0.6, "triangle", 0.03, 1.15); R.blip(740, 733, 0.6, "triangle", 0.026, 1.15); }
      else if (name === "bang") { R.hiss(0.12, 600, 0.13); R.blip(110, 60, 0.12, "square", 0.05); R.blip(160, 90, 0.1, "triangle", 0.05, 0.12); }
      else if (name === "crow") { if (R.sfx && R.sfx.caw) R.sfx.caw(); }
      else if (name === "twitch") R.blip(2600, 2200, 0.02, "square", 0.02);
      else if (name === "reload") { R.blip(2200, 2000, 0.03, "square", 0.025); R.blip(2400, 2100, 0.03, "square", 0.025, 0.18); R.blip(1800, 1500, 0.05, "square", 0.03, 0.4); }
      else if (name === "whirr") { R.blip(300, 900, 0.6, "triangle", 0.02); R.hiss(0.6, 2000, 0.02); }
      else if (name === "empty") R.blip(2600, 2400, 0.02, "square", 0.02);
    } catch (e) {}
  }

  M.extend("noon", {
    name: "Showdown at Noon", kind: "quick-draw level", level: "quick-draw level", act: "DRAW",
    how: "High Noon: the clock on the courthouse tower ticks toward the hour, and every question is one showdown on one stroke of the bell. Outlaws step out of the doorways into the main street, each under a wanted poster with a letter. Watch the minute hand tick down to the bell mark (the shaded wedge is the time left). You may aim, but DON'T draw before the bell: drawing early is a foul. When the bell strikes, draw and shoot the outlaw with the right letter; your shot knocks the gun out of his hand. From then on the outlaws take aim at you one after another: a glint and a shrinking ring show who is about to fire, so duck behind the water trough until the shot has gone. Your six-shooter reloads by itself after six shots. The last showdown of the level is at twelve noon, when the train comes in.",
    rules: "A wrong letter costs a life (that outlaw leaves the street). So does drawing before the bell (a foul; on levels 1 to 10 the first foul of a level is only a warning), and so does an outlaw's shot when you are not ducking: it knocks your hat off.",
    keys: "◀ ▶ or A / D pick an outlaw · Space, DRAW or a click on an outlaw shoots (after the bell!) · hold ▼, S or Shift to duck behind the trough (the right mouse button ducks too).",
    tip: "SHOWDOWN AT NOON — wait for the bell, then shoot the outlaw with the right letter. Never draw early. Duck (▼) when one takes aim.",
    hint1: "Wait for the bell, then shoot the outlaw under the poster with the right letter. The passage stays in the side panel.",
    hint2: "This question has two right letters. Shoot both outlaws whose posters carry them.",
    news: ["",
      "The outlaws sidestep along the street after the bell: keep your sight on the right one.",
      "Fake-outs: a shutter bangs, the train whistles or a crow caws before the bell. Only the clock's bell means draw.",
      "Two outlaws can take aim at once. Duck until both have fired.",
      "The outlaws trade places while the clock ticks, and an outlaw's hand may twitch: keep your eye on the right letter, and your hand still.",
      "Dust gusts blow down the street and hide the posters for a moment.",
      "A gunman on the rooftops: he has no letter. Duck his shots, or shoot him for a bonus.",
      "Cover: barrels stand in the street, and the outlaws behind them duck down between shots. Shoot when the right one is up.",
      "The clock sticks and jumps: its ticks come unevenly, so watch the hand, not the rhythm.",
      "High noon: three outlaws take aim at once and they draw fastest of all, on top of everything else."],
    params: noonParams
  }, {
    noonParams: function (n) { return noonParams(n); },

    setup_noon: function () {
      ensureNoonArt(this);
      var P = noonParams(this.night), i;
      var R = this.nn = { P: P, t: 0, outlaws: [], tracers: [], puffs: [], guns: [], smoke: [], motes: [], crows: [], shutters: [], dusts: [],
        phase: "idle", pt: 0, min: 55, mark: 60, ticksLeft: 0, plan: [], nextTick: 0, kick: 0, bellA: 0, bellT: 9, tolls: 0, tollT: 0, flashT: 0,
        ammo: 6, reload: 0, cd: 0, duckA: 0, lock: null, sx: 0, sy: 0, lpx: null, lpy: null, prevFire: false, prevAx: 0, armed: false, grace: 0,
        fouls: 0, qFouls: 0, qWrong: 0, hatOff: null, gunOut: 0, nextAim: 0, roof: null, roofAt: -1, tumble: null, ff: null, lastFrame: -9,
        told: {}, bigT: 0, smokeT: 0, statusKey: "", hits: 0, shots: 0, bellAt: 0, scratchT: 0, gx: 0, gy: 0, flick: 0 };
      this.cameras.main.setBackgroundColor("#e6cc9c");
      this.noonLayout();
      R.sky = this.add.image(0, 0, R.skyKey).setOrigin(0, 0).setDepth(0);
      R.smokeG = this.add.graphics().setDepth(1);
      R.town = this.add.image(0, 0, R.townKey).setOrigin(0, 0).setDepth(2);
      R.face = this.add.image(0, 0, "md-noon-face").setDepth(3);
      R.clockG = this.add.graphics().setDepth(3.5);
      R.shadowG = this.add.graphics().setDepth(4);
      R.dustImgs = [];
      R.moteG = this.add.graphics().setDepth(9);
      R.fxG = this.add.graphics().setDepth(11);
      R.trough = this.add.image(0, 0, "md-noon-trough").setOrigin(0.5, 0).setDepth(12);
      R.marshal = this.add.image(0, 0, "md-noon-marshal").setOrigin(0.5, 0).setDepth(13);
      R.armG = this.add.graphics().setDepth(13.7);
      R.hat = this.add.image(0, 0, "md-noon-hat").setOrigin(0.5, 0.74).setDepth(13.6);
      R.sightG = this.add.graphics().setDepth(15);
      R.uiG = this.add.graphics().setDepth(16);
      R.flash = this.add.image(-99, -99, "md-noon-flash").setDepth(13.8).setVisible(false);
      R.txStatus = this.add.text(0, 0, "", { fontFamily: SLAB, fontSize: 18, color: C.paper, fontStyle: "bold", align: "center" }).setOrigin(0.5).setDepth(17);
      R.txBig = this.add.text(0, 0, "", { fontFamily: SLAB, fontSize: 64, color: "#fff3d6", fontStyle: "bold", stroke: C.ink, strokeThickness: 9, align: "center" }).setOrigin(0.5).setDepth(18).setVisible(false);
      R.txAmmo = this.add.text(0, 0, "", { fontFamily: SLAB, fontSize: 12, color: C.paper, fontStyle: "bold", stroke: C.ink, strokeThickness: 3 }).setOrigin(0.5, 0).setDepth(17);
      R.vig = this.add.image(0, 0, R.vigKey).setOrigin(0, 0).setDepth(24);
      R.grain = this.add.tileSprite(0, 0, this.W, this.H, "md-noon-grain").setOrigin(0, 0).setDepth(25).setAlpha(0.32);
      R.filmG = this.add.graphics().setDepth(26);
      for (i = 0; i < 40; i++) R.motes.push({ x: Math.random(), y: Math.random(), r: rnd(0.6, 1.8), a: rnd(0.2, 0.5), ph: rnd(0, 6), v: rnd(0.4, 1) });
      this.noonPlaceStatic();
      this.makeSol(R.mx, R.myTop + 40 * R.mk, "up").setVisible(false);   /* the marshal is drawn by the mode; the sprite stays for coin pop-ups */
    },

    /* everything that depends on the canvas size */
    noonLayout: function () {
      var R = this.nn, W = this.W, H = this.H;
      var k = R.k = clamp(Math.min(H / 768, W / 1024), 0.55, 1.35);
      R.cx = W / 2; R.hy = H * 0.5; R.f = H * 1.333;
      R.clock = { x: W / 2, y: H * 0.245, r: clamp(H * 0.08, 34, 82) };
      R.clock.bh = R.clock.r * 1.18;
      R.bell = { x: W / 2, y: R.clock.y - R.clock.r - 8 * k - R.clock.bh + R.clock.bh * 0.3, s: R.clock.r / 64 };
      /* the marshal, the trough, the status sign and the six-shooter keep clear of the on-screen pad and button */
      var pad = this.noonBox("#controls .dpad", ".dpad"), act = this.noonBox("#btn-action");
      R.padBox = pad; R.actBox = act;
      var mk = R.mk = clamp(H / 768, 0.55, 1.3) * 0.92;
      R.mx = Math.round(clamp(W * 0.36, 150 * mk, W * 0.5));
      if (pad && pad.y0 < H && pad.x1 < W * 0.5) R.mx = Math.max(R.mx, Math.round(pad.x1 + 156 * mk));
      R.myTop = H - 236 * mk; R.duckDy = 132 * mk;
      R.trX = R.mx + 18 * mk; R.trY = H - 124 * mk; R.trW = 340 * mk;
      var right = act && act.x0 > W * 0.6 ? act.x0 - 12 : W - 12;
      R.stX = clamp((R.trX + R.trW / 2 * 1.0 + right) / 2, R.trX + R.trW / 2 + 60 * k, right - 60 * k); R.stY = H - 36 * k;
      R.cylX = act && act.x0 > W * 0.6 ? (act.x0 + act.x1) / 2 : W - 54 * k;
      R.cylY = act && act.y0 > H * 0.5 ? act.y0 - 48 * k : H - 120 * k;
      var key = W + "x" + H;
      if (R.sizeKey !== key) {
        var old = [R.skyKey, R.townKey, R.vigKey];
        R.sizeKey = key;
        R.skyKey = "md-noon-sky-" + key; R.townKey = "md-noon-town-" + key; R.vigKey = "md-noon-vig-" + key;
        canvasTex(this, R.skyKey, W, H, drawSky(R, W, H));
        canvasTex(this, R.townKey, W, H, drawTown(R, W, H));
        canvasTex(this, R.vigKey, W, H, drawVignette(W, H));
        if (R.sky) { R.sky.setTexture(R.skyKey); R.town.setTexture(R.townKey); R.vig.setTexture(R.vigKey); }
        var self = this;
        old.forEach(function (o) { if (o && o !== R.skyKey && o !== R.townKey && o !== R.vigKey) { try { self.textures.remove(o); } catch (e) {} } });
      }
      if (!R.doors) townPlaces(R);
      /* doors you can see: the outlaws step out of these */
      R.vis = R.doors.filter(function (d) { var p = proj(R, d.X, 0, d.Z); return p.x > 20 * k && p.x < W - 20 * k; });
      R.visRoofs = R.roofs.filter(function (d) { var p = proj(R, d.X, d.Y, d.Z); return d.Z < 90 && p.x > 40 * k && p.x < W - 40 * k && p.y > 50 * k; });
      if (!R.visRoofs.length) R.visRoofs = R.roofs.filter(function (d) { var p = proj(R, d.X, d.Y, d.Z); return p.x > 20 * k && p.x < W - 20 * k && p.y > 20 * k; });
    },
    /* a DOM element's box in canvas pixels (null when it is not shown) */
    noonBox: function (sel, alt) {
      try {
        var el = document.querySelector(sel) || (alt && document.querySelector(alt)), cv = this.game && this.game.canvas;
        if (!el || !cv) return null;
        var a = el.getBoundingClientRect(), c = cv.getBoundingClientRect();
        if (!a.width || !a.height || !c.width || !c.height) return null;
        var fx = this.W / c.width, fy = this.H / c.height;
        return { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
      } catch (e) { return null; }
    },
    noonPlaceStatic: function () {
      var R = this.nn, k = R.k, mk = R.mk;
      R.sky.setPosition(0, 0); R.town.setPosition(0, 0); R.vig.setPosition(0, 0);
      R.face.setPosition(R.clock.x, R.clock.y).setScale(R.clock.r * 2 / 176);
      R.trough.setPosition(R.trX, R.trY).setScale(mk);
      R.marshal.setScale(mk); R.hat.setScale(mk);
      R.grain.setSize(this.W, this.H);
      R.txStatus.setFontSize(Math.round(clamp(17 * k, 12, 22)));
      R.txBig.setFontSize(Math.round(clamp(64 * k, 36, 84))).setStroke(C.ink, Math.round(8 * k));
      R.txAmmo.setFontSize(Math.round(clamp(12 * k, 10, 15)));
    },
    resize_noon: function () {
      this.noonLayout();
      this.noonPlaceStatic();
      var R = this.nn, self = this;
      /* the outlaws keep their places on the street; their marks spread over the new width */
      this.noonMarks();
      R.outlaws.forEach(function (o) { if (o.st === "stand" || o.st === "aim" || o.st === "duck") { o.X = o.Xm; o.Z = o.Zm; } });
      if (R.roof) { var rp = R.roof; rp.dead = true; try { rp.spr.destroy(); } catch (e) {} R.roof = null; }
      this.player.setPosition(R.mx, R.myTop + 40 * R.mk);
      void self;
    },

    /* the minute (counted from 10:00) of the bell for question i: the quarters, the last one at twelve noon */
    noonMarkMin: function (i) {
      var n = Math.max(1, this.needExtracts || 5);
      i = clamp(i, 0, n - 1);
      return 120 - 15 * (n - 1 - i);
    },
    noonIsNoon: function () { return this.nn.mark >= 120; },

    /* where each outlaw stands: spread across the street, alternately a little nearer and further */
    noonMarks: function () {
      var R = this.nn, W = this.W, list = R.outlaws.filter(function (o) { return o.slot != null; }), n = R.nSlots || list.length;
      var x0 = W * 0.17, x1 = W * 0.83;
      R.slotX = [];
      for (var i = 0; i < n; i++) {
        var sx = n > 1 ? x0 + (x1 - x0) * i / (n - 1) : W / 2, Z = 38 + (i % 2) * 5;
        R.slotX.push({ X: (sx - R.cx) * Z / R.f, Z: Z });
      }
      list.forEach(function (o) { var m = R.slotX[o.slot]; if (m) { o.Xm = m.X; o.Zm = m.Z; } });
      R.gapX = n > 1 ? Math.abs(R.slotX[1].X - R.slotX[0].X) : 10;
    },

    answers_noon: function () {
      var R = this.nn, P = R.P, self = this, k = R.k;
      R.outlaws.forEach(function (o) { self.noonKill(o); });
      R.outlaws = [];
      if (R.roof) { try { R.roof.spr.destroy(); } catch (e) {} R.roof = null; }
      R.guns.forEach(function (gn) { try { gn.spr.destroy(); } catch (e) {} }); R.guns = [];
      R.tracers = []; R.puffs = [];
      var letters = this.choiceLetters(), n = letters.length;
      R.nSlots = n;
      var vs = shuffle([0, 1, 2, 3]);
      /* doors: the left half of the street from the left side, the right half from the right */
      var leftD = shuffle(R.vis.filter(function (d) { return d.sg < 0; })), rightD = shuffle(R.vis.filter(function (d) { return d.sg > 0; }));
      letters.forEach(function (Lt, i) {
        var side = (i + 0.5) < n / 2 ? leftD : rightD, d = side.length ? side[i % side.length] : { X: (i < n / 2 ? -1 : 1) * FX, Z: 70, sg: i < n / 2 ? -1 : 1 };
        var v = vs[i % 4], o = { letter: Lt, slot: i, v: v, st: "wait", res: "live", X: d.X, Z: d.Z, X0: d.X, Z0: d.Z, Xm: 0, Zm: 40, t: 0, ph: rnd(0, TAU), sg: d.sg,
          delay: P.enterMs * 0.45 * i / Math.max(1, n - 1) + rnd(0, 120), walk: P.enterMs * 0.55, pose: "stand", cover: false, up: true, upT: 0, aimT: 0, aimMs: 0, shootT: 0, twitch: 0 };
        o.spr = self.add.image(-99, -99, "md-noon-out-" + v + "-stand").setOrigin(0.5, 1).setVisible(false);
        o.poster = self.add.image(-99, -99, "md-noon-poster").setVisible(false);
        o.txt = self.add.text(-99, -99, Lt, { fontFamily: SLAB, fontSize: 40, color: C.ink, fontStyle: "bold" }).setOrigin(0.5).setVisible(false);
        o.mark = self.add.text(-99, -99, "", { fontFamily: SLAB, fontSize: 52, color: "#8a2a14", fontStyle: "bold" }).setOrigin(0.5).setVisible(false);
        if (self.extracted.indexOf(Lt) !== -1) o.res = "found";
        R.outlaws.push(o);
      });
      this.noonMarks();
      /* barrels for some of them (level 71 on) */
      if (P.cover > 0) {
        var nc = Math.max(1, Math.round(P.cover * n));
        shuffle(R.outlaws.slice()).slice(0, nc).forEach(function (o) {
          o.cover = true;
          o.cov = self.add.image(-99, -99, "md-noon-cover").setOrigin(0.5, 1).setVisible(false);
        });
      }
      R.outlaws.forEach(function (o) { if (o.res === "found") { o.st = "gone"; } });
      /* the clock: five ticks to the next bell */
      if (R.ff) { R.min = R.ff.to; R.ff = null; }
      R.mark = this.noonMarkMin(this.score);
      R.min = R.mark - TICKS; R.ticksLeft = TICKS; R.kick = 0;
      R.plan = [];
      for (var t = 0; t < TICKS; t++) R.plan.push(P.waitMs / TICKS * (1 + (P.jitter ? rnd(-P.jitter, P.jitter) : 0)));
      var sum = R.plan.reduce(function (a, b) { return a + b; }, 0);
      R.plan = R.plan.map(function (x) { return x * P.waitMs / sum; });
      R.nextTick = R.plan[0];
      R.phase = "enter"; R.pt = 0; R.tolls = 0;
      /* what happens during the wait: fake-outs, swaps, a tumbleweed */
      R.fakeAt = []; var tt = 900;
      if (P.fakes > 0) while (true) { tt += -Math.log(1 - Math.random()) * 1000 / P.fakes; if (tt > P.waitMs - 450) break; R.fakeAt.push(tt); }
      if (P.fakes > 0 && !R.fakeAt.length) R.fakeAt.push(rnd(Math.min(1500, P.waitMs * 0.4), P.waitMs - 500));
      R.swapAt = [];
      if (P.swaps > 0 && n > 1) {
        var ns = Math.floor(P.swaps) + (Math.random() < P.swaps - Math.floor(P.swaps) ? 1 : 0), s0 = P.enterMs + 200, s1 = P.waitMs - 1300;
        for (var q = 0; q < ns && s1 > s0; q++) R.swapAt.push(s0 + (s1 - s0) * (q + rnd(0.1, 0.9)) / ns);
      }
      R.tumble = Math.random() < 0.6 ? { at: rnd(600, Math.max(800, P.waitMs * 0.6)), go: false } : null;
      R.roofAt = P.roof > 0 && Math.random() < P.roof && R.visRoofs.length ? rnd(700, 2200) : -1;
      R.ammo = 6; R.reload = 0; R.cd = 0; R.lock = null; R.qFouls = 0; R.qWrong = 0; R.hatOff = null; R.gunOut = 0;
      var p41 = proj(R, 0, 0, 41);
      R.sx = R.cx; R.sy = p41.y - 100 * p41.s / PPF;
      if (n >= 2) R.sx = (proj(R, R.slotX[0].X, 0, R.slotX[0].Z).x + proj(R, R.slotX[1].X, 0, R.slotX[1].Z).x) / 2;
      R.hat.setVisible(true);
      void k;
    },
    noonKill: function (o) {
      ["spr", "poster", "txt", "mark", "cov"].forEach(function (key) { if (o[key]) { try { o[key].destroy(); } catch (e) {} o[key] = null; } });
    },

    tick_noon: function (s, inp, ms) {
      var R = this.nn, P = R.P, k = R.k, frame = this.game && this.game.loop ? this.game.loop.frame : 0;
      if (frame !== R.lastFrame + 1) { R.armed = false; R.grace = 350; }   /* frames went by without a tick (the reading pop-up): a key still held does not draw */
      R.lastFrame = frame;
      R.t += ms; R.pt += ms;
      if (R.grace > 0) R.grace -= ms;
      if (R.cd > 0) R.cd -= ms;
      if (!R.told.start) { R.told.start = true; this.toast("Read the wanted posters. HOLD your fire until the clock tower's bell strikes — drawing early is a foul!", 5200); }

      /* input: duck; pick an outlaw with ◀ ▶; the mouse aims; fire on the press */
      var rightBtn = !!(this.ptr.down && this.ptr.right);
      var duck = inp.ay > 0 || inp.pull || rightBtn;
      R.duckA = clamp(R.duckA + (duck ? 1 : -1) * ms / 90, 0, 1);
      if (inp.ax !== 0 && inp.ax !== R.prevAx) this.noonCycle(inp.ax);
      R.prevAx = inp.ax;
      var p = this.ptr, moved = R.lpx != null && Math.abs(p.x - R.lpx) + Math.abs(p.y - R.lpy) > 2;
      if (moved && !rightBtn) { R.sx = p.x; R.sy = p.y; R.lock = this.noonHitAt(p.x, p.y); R.lockMouse = true; }
      R.lpx = p.x; R.lpy = p.y;
      var fire = inp.fire && !rightBtn;
      if (!fire) R.armed = true;
      var edge = fire && !R.prevFire && R.armed;
      R.prevFire = fire;
      if (edge && R.grace <= 0) {
        if (this.ptr.down && inp.ptr) { R.sx = p.x; R.sy = p.y; R.lock = this.noonHitAt(p.x, p.y); }
        var aim = this.noonAimPoint();
        this.noonFire(aim.x, aim.y);
        if (this._finishing) return;
      }

      /* the clock and the showdown */
      this.noonClock(s, ms);
      if (this._finishing) return;
      if (R.phase === "enter" || R.phase === "wait") this.noonWait(ms);
      else if (R.phase === "draw") { this.noonShootout(ms); if (this._finishing) return; }
      if (R.reload > 0) { R.reload -= ms; if (R.reload <= 0) { R.ammo = 6; R.reload = 0; } }

      this.noonOutlaws(s, ms);
      this.noonRoof(ms);
      if (this._finishing) return;
      this.noonDraw(s, ms);
    },

    /* ◀ ▶: the sight jumps to the next outlaw left or right */
    noonCycle: function (dir) {
      var R = this.nn, list = this.noonTargets();
      if (!list.length) return;
      list.sort(function (a, b) { return a.sx - b.sx; });
      var cur = R.lock && list.indexOf(R.lock) !== -1 ? list.indexOf(R.lock) : -1, i;
      if (cur === -1) {
        var x = R.sx; i = dir > 0 ? 0 : list.length - 1;
        for (var j = 0; j < list.length; j++) { if (dir > 0 && list[j].sx > x + 4) { i = j; break; } }
        if (dir < 0) for (j = list.length - 1; j >= 0; j--) { if (list[j].sx < x - 4) { i = j; break; } }
      } else i = clamp(cur + dir, 0, list.length - 1);
      R.lock = list[i]; R.lockMouse = false;
      sfx("twitch");
    },
    /* what can be aimed at: live outlaws in the street, and the rooftop gunman */
    noonTargets: function () {
      var R = this.nn, out = R.outlaws.filter(function (o) { return o.res === "live" && (o.st === "stand" || o.st === "aim" || o.st === "duck" || o.st === "shoot" || o.st === "walk" || o.st === "swap"); });
      if (R.roof && !R.roof.dead && R.roof.vis > 0.5) out.push(R.roof);
      return out;
    },
    noonAimPoint: function () {
      var R = this.nn, o = R.lock;
      if (o && (o.res === "live" || o.roof) && !o.dead) { var c = this.noonChest(o); R.sx = c.x; R.sy = c.y; }
      return { x: R.sx, y: R.sy };
    },
    noonChest: function (o) {
      if (o.roof) return { x: o.sx, y: o.sy - 40 * o.sc };
      return { x: o.sx, y: o.sy - 100 * o.sc };
    },
    /* the outlaw (or rooftop gunman) at a point on the canvas, the nearest first */
    noonHitAt: function (x, y) {
      var R = this.nn, best = null, bz = 1e9, pad = 6 * R.k;
      R.outlaws.forEach(function (o) {
        if (o.res !== "live" || !o.spr || !o.spr.visible) return;
        var hw = 30 * o.sc + pad, top = o.sy - (o.st === "duck" ? 186 * o.sc - o.duckPx : 186 * o.sc) - pad;
        var inBody = x >= o.sx - hw && x <= o.sx + hw && y >= top && y <= o.sy + pad;
        var inPoster = o.poster && o.poster.visible && Math.abs(x - o.poster.x) <= 37 * o.ps + pad && Math.abs(y - o.poster.y) <= 45 * o.ps + pad;
        if ((inBody || inPoster) && o.Z < bz) { best = o; bz = o.Z; }
      });
      var rf = R.roof;
      if (rf && !rf.dead && rf.vis > 0.3) {
        var hw2 = 34 * rf.sc + pad;
        if (x >= rf.sx - hw2 && x <= rf.sx + hw2 && y >= rf.sy - 80 * rf.sc * rf.vis - pad && y <= rf.sy + pad && rf.Z < bz) best = rf;
      }
      return best;
    },

    /* ── the clock ── */
    noonClock: function (s, ms) {
      var R = this.nn;
      if (R.kick > 0) R.kick = Math.max(0, R.kick - ms / 260);
      if (R.ff) {   /* after a right answer the hands race on to the next showdown */
        R.ff.t += ms;
        var u = clamp(R.ff.t / R.ff.dur, 0, 1);
        R.min = R.ff.from + (R.ff.to - R.ff.from) * (1 - Math.pow(1 - u, 3));
        if (u >= 1) { R.min = R.ff.to; R.ff = null; }
      }
      if (R.bellT < 8) R.bellT += s;
      if (R.flashT > 0) R.flashT -= ms;
      /* at noon the bell goes on tolling twelve */
      if (R.tolls > 0) {
        R.tollT -= ms;
        if (R.tollT <= 0) { R.tolls -= 1; R.tollT = 1150; R.bellT = 0; sfx("bell", 1); }
      }
    },
    noonWait: function (ms) {
      var R = this.nn, P = R.P, self = this, i;
      if (R.phase === "enter" && R.pt >= P.enterMs) R.phase = "wait";
      /* the ticks */
      R.nextTick -= ms;
      if (R.nextTick <= 0 && R.ticksLeft > 0) {
        R.ticksLeft -= 1; R.min = R.mark - R.ticksLeft; R.kick = 1;
        sfx("tick", R.ticksLeft === 0);
        if (R.ticksLeft === 0) { this.noonBell(); return; }
        R.nextTick += R.plan[TICKS - R.ticksLeft] || 1000;
      }
      /* fake-outs */
      for (i = R.fakeAt.length - 1; i >= 0; i--) if (R.pt >= R.fakeAt[i]) { R.fakeAt.splice(i, 1); this.noonFake(); }
      /* swaps */
      for (i = R.swapAt.length - 1; i >= 0; i--) if (R.pt >= R.swapAt[i]) { R.swapAt.splice(i, 1); this.noonSwap(); }
      /* the tumbleweed */
      if (R.tumble && !R.tumble.go && R.pt >= R.tumble.at) {
        var dir = Math.random() < 0.5 ? 1 : -1;
        R.tumble.go = true; R.tumble.Z = rnd(28, 34); R.tumble.X = -dir * 30; R.tumble.v = dir * rnd(9, 13); R.tumble.r = 0; R.tumble.b = 0;
        R.tumble.spr = this.add.image(-99, -99, "md-noon-tumble").setDepth(8.5);
      }
      if (R.phase === "wait" && !R.told.wait) { R.told.wait = true; }
      void self;
    },
    /* the bell strikes: draw! */
    noonBell: function () {
      var R = this.nn, P = R.P;
      R.phase = "draw"; R.pt = 0; R.bellAt = R.t; R.bellT = 0; R.flashT = 600;
      R.ticksLeft = 0; R.min = R.mark; R.fakeAt = []; R.swapAt = [];
      R.outlaws.forEach(function (o) { if (o.st === "walk" || o.st === "swap" || o.st === "wait") { o.st = "stand"; o.X = o.Xm; o.Z = o.Zm; } if (o.cover && o.st === "stand") { o.upT = rnd(800, 1600); } });
      R.nextAim = P.drawMs;
      sfx("bell");
      var noon = this.noonIsNoon();
      if (noon) { R.tolls = 11; R.tollT = 1150; }
      this.noonBig(noon ? "HIGH NOON!\nDRAW!" : "DRAW!", 1100);
      if (!R.told.bell) { R.told.bell = true; this.toast("DRAW! Shoot the outlaw with the right letter: ◀ ▶ to pick him and Space (or DRAW), or click him.", 4600); }
      return true;
    },
    noonBig: function (txt, ms) {
      var R = this.nn;
      R.txBig.setText(txt).setPosition(this.W / 2, R.hy - 10 * R.k).setVisible(true).setAlpha(1).setScale(1.25);
      R.bigT = ms; R.bigMs = ms;
    },

    /* a fake-out: a sound and a sight that is not the bell */
    noonFake: function () {
      var R = this.nn, P = R.P, kinds = ["shutter", "whistle", "crow"], self = this;
      if (this.night >= 41) kinds.push("twitch", "twitch");
      var kind = kinds[Math.floor(Math.random() * kinds.length)];
      R.lastFake = kind;
      if (kind === "shutter") {
        var w = R.windows.filter(function (q) { var p = proj(R, q.X, q.Y, q.Z); return p.x > 0 && p.x < self.W; });
        if (w.length) { var q = w[Math.floor(Math.random() * w.length)]; R.shutters.push({ q: q, t: 0 }); }
        sfx("bang");
      } else if (kind === "whistle") {
        sfx("whistle");
        for (var i = 0; i < 6; i++) R.smoke.push({ x: this.noonTrainX() + rnd(-8, 8), y: R.hy - R.f * 6 / 300, r: rnd(6, 10) * R.k, vy: -rnd(20, 34) * R.k, vx: rnd(-6, 6) * R.k, t: 0, life: rnd(2200, 3200), white: true });
      } else if (kind === "crow") {
        sfx("crow");
        var dir = Math.random() < 0.5 ? 1 : -1;
        R.crows.push({ x: dir > 0 ? -20 : this.W + 20, y: rnd(this.H * 0.08, this.H * 0.2), vx: dir * rnd(180, 240) * R.k, t: 0 });
      } else {
        var live = R.outlaws.filter(function (o) { return o.res === "live" && o.st === "stand"; });
        if (live.length) { live[Math.floor(Math.random() * live.length)].twitch = 260; sfx("twitch"); }
      }
      if (!R.told.fake) { R.told.fake = true; this.toast("Steady... that was not the bell! Only the clock tower's bell means draw.", 3200); }
      void P;
    },
    /* two outlaws trade places during the wait */
    noonSwap: function () {
      var R = this.nn, list = R.outlaws.filter(function (o) { return o.res === "live" && o.st === "stand"; });
      if (list.length < 2) return;
      list.sort(function (a, b) { return a.slot - b.slot; });
      var i = Math.floor(Math.random() * (list.length - 1)), a = list[i], b = list[i + 1], dur = Math.max(700, 1300 - this.night * 4);
      [[a, b, -1], [b, a, 1]].forEach(function (pr) {
        var o = pr[0];
        o.sw = { fx: o.Xm, fz: o.Zm, tx: pr[1].Xm, tz: pr[1].Zm, t: 0, dur: dur, dz: pr[2] * 4 };
        o.st = "swap";
      });
      var ts = a.slot; a.slot = b.slot; b.slot = ts;
      var tx = a.Xm, tz = a.Zm; a.Xm = b.Xm; a.Zm = b.Zm; b.Xm = tx; b.Zm = tz;
      if (!R.told.swap) { R.told.swap = true; this.toast("Two outlaws are trading places! Keep your eye on the right letter.", 3000); }
    },

    /* ── shooting ── */
    noonFire: function (x, y) {
      var R = this.nn, P = R.P, k = R.k;
      if (this.ended || this._finishing) return "ignore";
      if (R.phase === "enter" || R.phase === "wait") return this.noonFoul();
      if (R.phase !== "draw" || this._between) return "ignore";
      if (R.duckA > 0.35) { if (!R.told.ducked) { R.told.ducked = true; this.toast("You can't shoot while you duck. Let go of ▼ to stand up.", 2600); } return "ducked"; }
      if (R.reload > 0 || R.ammo <= 0) { sfx("empty"); return "reload"; }
      if (R.cd > 0) return "wait";
      R.cd = 200; R.ammo -= 1; R.shots += 1; R.gunOut = 900;
      if (R.ammo <= 0) { R.reload = P.reloadMs; sfx("reload"); if (!R.told.reload) { R.told.reload = true; this.toast("Six shots fired: the marshal reloads his six-shooter.", 2400); } }
      sfx("gun");
      var g = this.noonGunTip();
      R.tracers.push({ x0: g.x, y0: g.y, x1: x, y1: y, t: 0 });
      R.flash.setPosition(g.x, g.y).setScale(k * 1.1).setVisible(true).setAlpha(1); R.flashMs = 90;
      var o = this.noonHitAt(x, y);
      if (!o) {
        R.puffs.push({ x: x, y: Math.max(y, R.hy + 4), t: 0, r: 10 * k, col: 0xe8d2a8 });
        sfx("ricochet");
        return "miss";
      }
      if (o.roof) return this.noonRoofHit(o);
      if (o.st === "duck") {
        R.puffs.push({ x: x, y: y, t: 0, r: 9 * k, col: 0x9a7248 }); sfx("thud");
        return "cover";
      }
      return this.noonHitOutlaw(o);
    },
    noonFoul: function () {
      var R = this.nn, P = R.P;
      if (R.grace > 0) return "ignore";
      R.fouls += 1; R.qFouls += 1; R.gunOut = 700;
      sfx("foul");
      this.noonBig("FOUL!", 900);
      if (R.fouls <= P.freeFouls) {
        this.showTag("FOUL! WAIT FOR THE BELL", "#ffd9a0");
        this.toast("Foul! You drew before the bell. This time it's only a warning — next time a foul costs a life.", 4200);
        return "warn";
      }
      this.loseLife("foul", "FOUL! YOU DREW BEFORE THE BELL");
      if (!R.told.foul) { R.told.foul = true; this.toast("Foul! Never draw before the clock tower's bell strikes. Watch the minute hand reach the mark.", 3800); }
      return "foul";
    },
    /* the shot knocks the outlaw's gun out of his hand, and picks his letter */
    noonHitOutlaw: function (o) {
      var R = this.nn, k = R.k, self = this;
      var g = this.noonGunPos(o);
      this.noonGunFly(g.x, g.y, o.sx < this.W / 2 ? -1 : 1, o.sc);
      sfx("clank");
      o.st = "up"; o.pose = "up"; o.upHold = 900; o.aimT = 0;
      var res = this.answerPick(o.letter, o.sx, o.sy - 200 * o.sc);
      if (res === "wrong") {
        o.res = "dead"; R.qWrong += 1;
        this.noonPaint(o);
      } else if (res === "partial") {
        o.res = "found"; this.noonPaint(o);
      } else if (res === "done") {
        o.res = "found"; this.noonPaint(o);
        var rt = (R.t - R.bellAt) / 1000;
        if (!this.ended) {
          if (!R.qWrong && !R.qFouls && rt * 1000 <= R.P.quickMs) this.awardBonusPoints(500, "Lightning draw: " + rt.toFixed(2) + " s after the bell");
        }
      } else { o.st = "stand"; o.pose = "stand"; }
      if (R.lock === o) R.lock = null;
      void k; void self;
      return res;
    },
    noonPaint: function (o) {
      if (!o.mark) return;
      if (o.res === "dead") { o.mark.setText("✕").setColor("#8a2a14").setVisible(true); o.poster.setTint(0xb0a088); o.txt.setColor("#6a5a48"); }
      else if (o.res === "found") { o.mark.setText("✓").setColor("#2f5a26").setVisible(true); }
    },
    noonGunPos: function (o) {
      var at = GUN_AT[o.pose === "aim" ? "aim" : "stand"];
      return { x: o.sx + (at[0] - OUT_W / 2) * o.sc, y: o.sy - (OUT_H - at[1]) * o.sc };
    },
    noonGunFly: function (x, y, dir, sc) {
      var R = this.nn, k = R.k;
      var gn = { spr: this.add.image(x, y, "md-noon-gun").setDepth(10).setScale(Math.max(0.6, sc * 1.1)), x: x, y: y, vx: dir * rnd(90, 160) * k, vy: -rnd(260, 340) * k, r: 0, vr: dir * rnd(10, 16), t: 0, floor: y + 70 * sc + 10 * k };
      R.guns.push(gn);
      this.burst(x, y, 0xfff0c0, 8);
    },
    noonGunTip: function () { var R = this.nn; return { x: R.gx, y: R.gy }; },

    /* after the bell: the outlaws take aim one after another, and fire */
    noonShootout: function (ms) {
      var R = this.nn, P = R.P, self = this;
      if (this._between) return;
      R.nextAim -= ms;
      if (R.nextAim <= 0) {
        var free = R.outlaws.filter(function (o) { return o.res === "live" && (o.st === "stand" || o.st === "duck"); });
        shuffle(free).slice(0, P.aimers).forEach(function (o, j) { self.noonTell(o, j * 260); });
        R.nextAim = P.gapMs * rnd(0.85, 1.15) + P.tellMs;
      }
      if (R.roofAt >= 0 && R.pt >= R.roofAt && !R.roof) { R.roofAt = -1; this.noonRoofSpawn(); }
    },
    noonTell: function (o, delay) {
      var R = this.nn, P = R.P;
      o.st = "aim"; o.pose = "aim"; o.aimT = -(delay || 0); o.aimMs = P.tellMs * rnd(0.95, 1.08); o.up = true;
      sfx("cock");
      if (!R.told.tell) { R.told.tell = true; this.toast("An outlaw is taking aim! Hold ▼ (or S) to duck behind the trough until he fires.", 4200); }
      return o;
    },
    /* an outlaw (or the rooftop gunman) fires at the marshal */
    noonShotAtYou: function (o, x, y) {
      var R = this.nn, k = R.k, mk = R.mk;
      sfx("far");
      var hx = R.mx + rnd(-30, 30) * mk, hy = R.myTop + R.duckA * R.duckDy + 20 * mk;
      if (R.duckA > 0.55) {
        var tx = R.trX + rnd(-0.35, 0.35) * R.trW, ty = R.trY + 4 * mk;
        R.tracers.push({ x0: x, y0: y, x1: tx, y1: ty, t: 0, foe: true });
        R.puffs.push({ x: tx, y: ty, t: 0, r: 14 * k, col: 0xd8e2d6, splash: true });
        sfx("splash");
        R.dodged = (R.dodged || 0) + 1;
        return "ducked";
      }
      R.tracers.push({ x0: x, y0: y, x1: hx, y1: hy, t: 0, foe: true });
      var lost = this.loseLife("hit", o.roof ? "THE ROOFTOP GUNMAN GOT YOU" : "OUTGUNNED");
      if (lost) {
        R.hits += 1;
        if (!R.hatOff) {
          R.hatOff = { x: R.hat.x, y: R.hat.y, vx: rnd(-120, 120) * k, vy: -rnd(300, 380) * k, r: 0, vr: rnd(-9, 9), t: 0 };
        }
        if (!R.told.hit) { R.told.hit = true; this.toast("Your hat flew off! When an outlaw takes aim (the glint and the ring), hold ▼ to duck.", 3800); }
      }
      return lost ? "hit" : "blocked";
    },

    /* ── the rooftop gunman (level 61 on) ── */
    noonRoofSpawn: function () {
      var R = this.nn;
      var rf = R.visRoofs[Math.floor(Math.random() * R.visRoofs.length)];
      if (!rf) return null;
      R.roof = { roof: true, X: rf.X - rf.sg * 2.5, Y: rf.Y, Z: rf.Z, vis: 0, st: "rise", t: 0, aimT: 0, next: 900, dead: false, sx: 0, sy: 0, sc: 1, sg: rf.sg,
        spr: this.add.image(-99, -99, "md-noon-roofman").setOrigin(0.5, 0).setDepth(4.8) };
      if (!R.told.roof) { R.told.roof = true; this.toast("A gunman on the rooftops! He has no letter: duck when he aims, or shoot him for a bonus.", 4000); }
      return R.roof;
    },
    noonRoof: function (ms) {
      var R = this.nn, P = R.P, rf = R.roof;
      if (!rf) return;
      rf.t += ms;
      var p = proj(R, rf.X, rf.Y, rf.Z);
      rf.sc = p.s / PPF * 1.35; rf.sx = p.x; rf.sy = p.y;
      if (rf.dead) { rf.vis = Math.max(0, rf.vis - ms / 500); if (rf.vis <= 0) { try { rf.spr.destroy(); } catch (e) {} R.roof = null; return; } }
      else if (this._between || R.phase !== "draw") { rf.vis = Math.max(0, rf.vis - ms / 400); rf.st = "hide"; }
      else if (rf.st === "rise") { rf.vis = Math.min(1, rf.vis + ms / 450); if (rf.vis >= 1) { rf.st = "wait"; rf.next = 600; } }
      else if (rf.st === "wait") { rf.next -= ms; if (rf.next <= 0) { rf.st = "aim"; rf.aimT = 0; sfx("cock"); } }
      else if (rf.st === "aim") {
        rf.aimT += ms;
        if (rf.aimT >= P.tellMs * 1.1) {
          var gp = { x: rf.sx, y: rf.sy - 54 * rf.sc };
          this.noonMuzzle(gp.x, gp.y, rf.sc);
          this.noonShotAtYou(rf, gp.x, gp.y);
          if (this._finishing) return;
          rf.st = "wait"; rf.next = P.gapMs * 1.2;
        }
      }
      var vh = 80 * rf.vis;
      rf.spr.setScale(rf.sc).setPosition(rf.sx, rf.sy - vh * rf.sc).setCrop(0, 0, 80, Math.max(0.01, vh)).setVisible(rf.vis > 0.01).setAlpha(rf.dead ? rf.vis : 1);
    },
    noonRoofHit: function (rf) {
      var R = this.nn;
      rf.dead = true; rf.st = "hit";
      this.noonGunFly(rf.sx, rf.sy - 50 * rf.sc, rf.sg < 0 ? -1 : 1, rf.sc);
      sfx("clank");
      this.addKill(rf.sx, rf.sy, "Twelve gunmen disarmed");
      this.awardBonusPoints(300, "Rooftop gunman disarmed");
      if (R.lock === rf) R.lock = null;
      return "roof";
    },

    /* ── the outlaws, every frame ── */
    noonOutlaws: function (s, ms) {
      var R = this.nn, P = R.P, self = this, t = R.t / 1000;
      R.outlaws.forEach(function (o) {
        var bob = 0, rot = 0, alpha = 1, Y = 0;
        o.t += ms;
        if (o.st === "wait") {
          if (R.phase === "enter" || R.phase === "wait") { if (o.t >= o.delay) { o.st = "walk"; o.wt = 0; } }
        }
        if (o.st === "walk") {
          o.wt += ms;
          var u = clamp(o.wt / o.walk, 0, 1), e = u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
          o.X = o.X0 + (o.Xm - o.X0) * e; o.Z = o.Z0 + (o.Zm - o.Z0) * e;
          bob = Math.abs(Math.sin(o.wt / 1000 * 11)) * 0.3; rot = Math.sin(o.wt / 1000 * 11) * 0.03;
          alpha = clamp(o.wt / 220, 0, 1);
          if (u >= 1) o.st = "stand";
        } else if (o.st === "swap") {
          var sw = o.sw; sw.t += ms;
          var v = clamp(sw.t / sw.dur, 0, 1), ee = v < 0.5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2;
          o.X = sw.fx + (sw.tx - sw.fx) * ee; o.Z = sw.fz + (sw.tz - sw.fz) * ee + sw.dz * Math.sin(v * Math.PI);
          bob = Math.abs(Math.sin(sw.t / 1000 * 11)) * 0.3;
          if (v >= 1) { o.st = "stand"; o.sw = null; }
        } else if (o.st === "stand" || o.st === "aim" || o.st === "shoot" || o.st === "duck") {
          var amp = R.phase === "draw" && !o.cover ? P.strafe * R.gapX : 0;   /* an outlaw with barrels keeps to them */
          o.strafeA = clamp((o.strafeA || 0) + (amp ? 1 : -1) * ms / 900, 0, 1);
          o.X = o.Xm + amp * o.strafeA * Math.sin(t * P.strafeSpd + o.ph); o.Z = o.Zm;
          if (o.st === "stand" && o.strafeA > 0.05 && amp) bob = Math.abs(Math.sin(t * 6 + o.ph)) * 0.08;
        }
        /* cover: up and down behind the barrels after the bell */
        o.duckPx = 0;
        if (o.cover && R.phase === "draw" && o.res === "live" && !self._between) {
          if (o.st === "stand") { o.upT -= ms; if (o.upT <= 0) { o.st = "duck"; o.upT = rnd(800, 1300); } }
          else if (o.st === "duck") { o.upT -= ms; if (o.upT <= 0) { o.st = "stand"; o.upT = rnd(1300, 2200); } }
        }
        /* aiming and firing */
        if (o.st === "aim") {
          o.aimT += ms;
          if (o.aimT >= o.aimMs && !self._between) {
            o.st = "shoot"; o.shootT = 0;
            var gp = self.noonGunPos(o);
            self.noonMuzzle(gp.x, gp.y, o.sc);
            self.noonShotAtYou(o, gp.x, gp.y);
          }
        } else if (o.st === "shoot") { o.shootT += ms; if (o.shootT > 320) { o.st = o.cover ? "duck" : "stand"; o.pose = "stand"; o.upT = rnd(700, 1200); } }
        else if (o.st === "up") {
          o.upHold -= ms;
          if (o.upHold <= 0 && o.res !== "live") { o.st = "leave"; o.lt = 0; o.lx = o.X; o.lz = o.Z; o.ls = o.X < 0 ? -1 : 1; }
          else if (o.upHold <= 0) { o.st = "stand"; o.pose = "stand"; }
        } else if (o.st === "leave") {
          o.lt += ms;
          var lu = clamp(o.lt / 1500, 0, 1);
          o.X = o.lx + o.ls * 16 * lu; o.Z = o.lz + 16 * lu;
          bob = Math.abs(Math.sin(o.lt / 1000 * 12)) * 0.3; alpha = 1 - clamp((lu - 0.45) / 0.55, 0, 1);
          if (lu >= 1) { o.st = "gone"; }
        }
        if (o.st === "stand" || o.st === "duck") o.pose = o.twitch > 0 ? "aim" : "stand";
        if (o.twitch > 0) o.twitch -= ms;
        if (o.st === "aim" && o.aimT < 0) o.pose = "stand";
        if (o.st === "aim" && o.aimT >= 0) o.pose = "aim";
        if (o.st === "up" || o.st === "leave") o.pose = "up";
        self.noonPlaceOutlaw(o, Y + bob, rot, alpha);
      });
      /* the guns knocked flying */
      for (var i = R.guns.length - 1; i >= 0; i--) {
        var gn = R.guns[i]; gn.t += ms;
        gn.vy += 900 * R.k * s; gn.x += gn.vx * s; gn.y += gn.vy * s; gn.r += gn.vr * s;
        if (gn.y > gn.floor && gn.vy > 0) { gn.y = gn.floor; gn.vy *= -0.3; gn.vx *= 0.5; gn.vr *= 0.4; }
        gn.spr.setPosition(gn.x, gn.y).setRotation(gn.r).setAlpha(clamp(1 - (gn.t - 1200) / 600, 0, 1));
        if (gn.t > 1800) { try { gn.spr.destroy(); } catch (e) {} R.guns.splice(i, 1); }
      }
    },
    noonPlaceOutlaw: function (o, lift, rot, alpha) {
      var R = this.nn, k = R.k;
      if (!o.spr) return;
      var show = o.st !== "wait" && o.st !== "gone";
      var gY = Math.abs(o.X) > SX ? BWH : 0, p = proj(R, o.X, gY + (lift || 0), o.Z), sc = p.s / PPF;
      o.sx = p.x; o.sy = p.y; o.sc = sc;
      var depth = 5 + (120 - o.Z) / 200;
      var tex = "md-noon-out-" + o.v + "-" + o.pose;
      if (o.spr.texture.key !== tex) o.spr.setTexture(tex);
      /* ducking behind the barrels: sink and hide what is below the street */
      var down = o.st === "duck" ? 1 : 0;
      o.dk = clamp((o.dk || 0) + (down ? 1 : -1) * 0.2, 0, 1);
      o.duckPx = o.dk * 4.2 * PPF * sc;
      o.spr.setPosition(p.x, p.y + o.duckPx).setScale(sc).setRotation(rot || 0).setDepth(depth).setVisible(show).setAlpha(alpha);
      if (o.dk > 0) o.spr.setCrop(0, 0, OUT_W, Math.max(1, OUT_H - o.dk * 4.2 * PPF)); else if (o.spr.isCropped) o.spr.setCrop();
      if (o.cov) {
        var cp = proj(R, o.Xm, 0, o.Zm - 3.5);
        o.cov.setPosition(cp.x, cp.y + 2).setScale(cp.s / PPF * 1.18).setDepth(depth + 0.05).setVisible(show || o.res !== "live");
      }
      /* the wanted poster over his hat (never too small to read) */
      var ps = o.ps = Math.max(sc, 0.62), py = p.y - 196 * sc - 46 * ps - 4 * k + (lift ? 0 : 0);
      var shake = (o.st === "aim" && o.aimT >= 0) ? Math.sin(R.t / 25) * 1.5 * k : 0;
      var pAlpha = alpha * (o.dk > 0.5 ? 0.6 : 1);
      o.poster.setPosition(p.x + shake, py).setScale(ps).setDepth(depth + 0.1).setVisible(show).setAlpha(pAlpha);
      o.txt.setPosition(p.x + shake, py + 3 * ps).setScale(ps).setDepth(depth + 0.11).setVisible(show).setAlpha(pAlpha);
      o.mark.setPosition(p.x + shake, py + 2 * ps).setScale(ps).setDepth(depth + 0.12).setAlpha(alpha);
      if (!show) o.mark.setVisible(false);
      else if (o.res !== "live") o.mark.setVisible(true);
    },
    noonMuzzle: function (x, y, sc) {
      var R = this.nn;
      R.muzz = R.muzz || [];
      R.muzz.push({ x: x, y: y, s: Math.max(0.5, sc * 1.6), t: 0 });
    },

    /* ── drawing every frame ── */
    noonDraw: function (s, ms) {
      var R = this.nn, P = R.P, k = R.k, W = this.W, H = this.H, i;
      var fx = R.fxG, sg = R.shadowG, mg = R.moteG;
      fx.clear(); sg.clear(); mg.clear();
      this.noonDrawClock(ms);
      this.noonDrawSmoke(s, ms);
      /* noon shadows: short, straight under each outlaw */
      R.outlaws.forEach(function (o) {
        if (!o.spr || !o.spr.visible) return;
        var gy = Math.abs(o.X) > SX ? proj(R, o.X, BWH, o.Z).y : proj(R, o.X, 0, o.Z).y;
        sg.fillStyle(0x3a2412, 0.28 * o.spr.alpha); sg.fillEllipse(o.sx + 6 * o.sc, gy, 54 * o.sc, 12 * o.sc);
      });
      /* the tumbleweed rolling through the standoff */
      var tb = R.tumble;
      if (tb && tb.go && tb.spr) {
        tb.X += tb.v * s; tb.r += tb.v * s * 0.18; tb.b += s * 7;
        var tp = proj(R, tb.X, Math.abs(Math.sin(tb.b)) * 1.6, tb.Z), tsc = tp.s / 22;
        tb.spr.setPosition(tp.x, tp.y - 30 * tsc).setScale(tsc).setRotation(tb.r);
        sg.fillStyle(0x3a2412, 0.2); sg.fillEllipse(tp.x, proj(R, tb.X, 0, tb.Z).y, 50 * tsc, 9 * tsc);
        if (Math.abs(tb.X) > 34) { try { tb.spr.destroy(); } catch (e) {} R.tumble = null; }
      }
      /* fake-outs you can see: a shutter swinging, a crow */
      for (i = R.shutters.length - 1; i >= 0; i--) {
        var sh = R.shutters[i]; sh.t += ms;
        var q = sh.q, za = q.Z - 1.6, swing = Math.abs(Math.sin(sh.t / 90)) * Math.max(0, 1 - sh.t / 900);
        var a0 = proj(R, q.X, 11, za), a1 = proj(R, q.X, 15.5, za), w = 3.2 * a0.s * swing;
        fx.fillStyle(0x5a3e26, 1); fx.fillPoints([{ x: a0.x, y: a0.y }, { x: a1.x, y: a1.y }, { x: a1.x - q.sg * w, y: a1.y - 2 }, { x: a0.x - q.sg * w, y: a0.y + 2 }], true);
        if (sh.t > 900) R.shutters.splice(i, 1);
      }
      for (i = R.crows.length - 1; i >= 0; i--) {
        var cw = R.crows[i]; cw.t += ms; cw.x += cw.vx * s; cw.y -= 14 * k * s;
        var fl = Math.sin(cw.t / 70) * 5 * k;
        fx.lineStyle(2.4 * k, 0x24170d, 1); fx.beginPath(); fx.moveTo(cw.x - 9 * k, cw.y - fl); fx.lineTo(cw.x, cw.y); fx.lineTo(cw.x + 9 * k, cw.y - fl); fx.strokePath();
        if (cw.x < -40 || cw.x > W + 40) R.crows.splice(i, 1);
      }
      /* dust gusts (level 51 on) */
      if (P.dust > 0 && Math.random() < P.dust * s && R.dusts.length < 2) {
        var dir = Math.random() < 0.5 ? 1 : -1;
        R.dusts.push({ x: dir > 0 ? -W * 0.35 : W * 1.35, v: dir * W * rnd(0.32, 0.42), y: R.hy + rnd(-0.06, 0.08) * H, img: this.add.image(0, 0, "md-noon-dust").setDepth(8.7), t: 0 });
        if (!R.told.dust) { R.told.dust = true; this.toast("A dust gust is blowing down the street! The posters will show again in a moment.", 3000); }
      }
      for (i = R.dusts.length - 1; i >= 0; i--) {
        var du = R.dusts[i]; du.t += ms; du.x += du.v * s;
        du.img.setPosition(du.x, du.y).setScale(W * 0.6 / 240, H * 0.55 / 120).setAlpha(0.95);
        if (du.x < -W * 0.5 || du.x > W * 1.5) { try { du.img.destroy(); } catch (e) {} R.dusts.splice(i, 1); }
      }
      /* dust motes in the noon light */
      for (i = 0; i < R.motes.length; i++) {
        var m = R.motes[i];
        m.x += 0.01 * s * m.v; m.y += Math.sin(R.t / 1000 + m.ph) * 0.002 * s;
        if (m.x > 1) m.x -= 1;
        mg.fillStyle(0xfff4dc, m.a * (0.6 + 0.4 * Math.sin(R.t / 700 + m.ph))); mg.fillCircle(m.x * W, R.hy * 0.7 + m.y * H * 0.45, m.r * k);
      }
      /* the outlaws' aim: a glint on the gun and a ring closing in */
      var self = this;
      R.outlaws.forEach(function (o) {
        if (o.st !== "aim" || o.aimT < 0 || !o.spr.visible) return;
        var gp = self.noonGunPos(o), u = clamp(o.aimT / o.aimMs, 0, 1), rr = (60 - 44 * u) * Math.max(0.7, o.sc * 1.4);
        fx.lineStyle(5 * k, 0x24170d, 0.5); fx.strokeCircle(gp.x, gp.y, rr);
        fx.lineStyle(3 * k, RUST, 0.6 + 0.4 * u); fx.strokeCircle(gp.x, gp.y, rr);
        self.noonGlint(fx, gp.x, gp.y, (8 + 6 * Math.sin(R.t / 40)) * k);
        var ex = o.sx - 34 * o.sc - 14 * k, ey = o.sy - 150 * o.sc;
        fx.fillStyle(0x24170d, 0.9); fx.fillCircle(ex, ey, 11 * k);
        fx.fillStyle(0xf2e4c4, 1); fx.fillRect(ex - 1.8 * k, ey - 7 * k, 3.6 * k, 9 * k); fx.fillCircle(ex, ey + 5.5 * k, 2 * k);
      });
      var rf = R.roof;
      if (rf && rf.st === "aim" && !rf.dead) {
        var rx = rf.sx, ry = rf.sy - 54 * rf.sc, ru = clamp(rf.aimT / (P.tellMs * 1.1), 0, 1), r2 = (54 - 38 * ru) * Math.max(0.7, rf.sc * 1.4);
        fx.lineStyle(5 * k, 0x24170d, 0.5); fx.strokeCircle(rx, ry, r2); fx.lineStyle(3 * k, RUST, 0.6 + 0.4 * ru); fx.strokeCircle(rx, ry, r2);
        this.noonGlint(fx, rx, ry, (8 + 6 * Math.sin(R.t / 40)) * k);
      }
      /* muzzle flashes, tracers, puffs */
      R.muzz = (R.muzz || []).filter(function (mz) {
        mz.t += ms; var a = 1 - mz.t / 140;
        if (a <= 0) return false;
        fx.fillStyle(0xfff4d0, a); fx.fillCircle(mz.x, mz.y, 14 * mz.s * k); fx.fillStyle(0xffd078, a * 0.8); fx.fillCircle(mz.x, mz.y, 22 * mz.s * k * (1 - a * 0.3));
        return true;
      });
      R.tracers = R.tracers.filter(function (tr) {
        tr.t += ms; var a = 1 - tr.t / 140;
        if (a <= 0) return false;
        fx.lineStyle(2.2 * k, tr.foe ? 0xffe2a8 : 0xfff6e0, a); fx.lineBetween(tr.x0, tr.y0, tr.x1, tr.y1);
        return true;
      });
      R.puffs = R.puffs.filter(function (pf) {
        pf.t += ms; var a = 1 - pf.t / (pf.splash ? 700 : 520);
        if (a <= 0) return false;
        if (pf.splash) {
          for (var j = 0; j < 7; j++) { var an = -Math.PI / 2 + (j - 3) * 0.32, d = pf.t / 700 * 46 * k; fx.fillStyle(0xd8e6dc, a); fx.fillCircle(pf.x + Math.cos(an) * d, pf.y + Math.sin(an) * d + (pf.t / 700) * (pf.t / 700) * 60 * k, (3.4 - j % 2) * k); }
        } else { fx.fillStyle(pf.col, a * 0.75); fx.fillCircle(pf.x, pf.y - pf.t / 520 * 10 * k, pf.r * (0.6 + pf.t / 520)); }
        return true;
      });
      if (R.flashMs > 0) { R.flashMs -= ms; if (R.flashMs <= 0) R.flash.setVisible(false); else R.flash.setAlpha(R.flashMs / 90); }
      this.noonDrawMarshal(s, ms);
      this.noonDrawSight();
      this.noonDrawUi(ms);
      this.noonDrawFilm(ms);
    },
    noonGlint: function (g, x, y, r) {
      g.fillStyle(0xfffbe8, 0.95);
      g.fillTriangle(x - r, y, x, y - r * 0.18, x, y + r * 0.18); g.fillTriangle(x + r, y, x, y - r * 0.18, x, y + r * 0.18);
      g.fillTriangle(x, y - r, x - r * 0.18, y, x + r * 0.18, y); g.fillTriangle(x, y + r, x - r * 0.18, y, x + r * 0.18, y);
      g.fillCircle(x, y, r * 0.22);
    },
    /* the train's smoke source on the horizon: it comes nearer as the hour runs on, and it is in at noon */
    noonTrainX: function () {
      var R = this.nn, n = Math.max(1, this.needExtracts || 5), start = 120 - 15 * (n - 1) - TICKS, u = clamp((R.min - start) / (120 - start), 0, 1);
      return this.W * (1.04 - 0.36 * u);
    },
    noonDrawSmoke: function (s, ms) {
      var R = this.nn, g = R.smokeG, k = R.k;
      g.clear();
      R.smokeT -= ms;
      if (R.smokeT <= 0) {
        R.smokeT = 160;
        R.smoke.push({ x: this.noonTrainX() + rnd(-3, 3) * k, y: R.hy - 2 * k, r: rnd(5, 8) * k, vy: -rnd(16, 24) * k, vx: -rnd(4, 9) * k, t: 0, life: rnd(3600, 4600) });
      }
      R.smoke = R.smoke.filter(function (p) {
        p.t += ms; if (p.t > p.life) return false;
        p.x += p.vx * s; p.y += p.vy * s; p.vy *= 0.995;
        var u = p.t / p.life, r = p.r * (1 + u * 3.2);
        g.fillStyle(p.white ? 0xfffaf0 : 0x8a7a68, (p.white ? 0.75 : 0.42) * (1 - u)); g.fillCircle(p.x, p.y, r);
        return true;
      });
    },
    noonDrawClock: function (ms) {
      var R = this.nn, K = R.clock, g = R.clockG, k = R.k, r = K.r;
      g.clear();
      /* the time left: a shaded wedge from the minute hand to the bell mark */
      var mAng = function (mn) { return (mn % 60) / 60 * TAU - Math.PI / 2; };
      var cur = R.min, am = mAng(cur) + Math.sin(R.kick * 9) * R.kick * 0.06, ak = mAng(R.mark);
      if (R.phase === "enter" || R.phase === "wait") {
        var a1 = ak; while (a1 <= am) a1 += TAU;
        if (a1 - am < TAU - 1e-3) {
          g.fillStyle(RUST, 0.26); g.slice(K.x, K.y, r * 0.86, am, a1, false); g.fillPath();
          g.lineStyle(2 * k, RUST, 0.6); g.beginPath(); g.arc(K.x, K.y, r * 0.86, am, a1, false); g.strokePath();
        }
      }
      /* the bell mark on the rim */
      var mx = K.x + Math.cos(ak) * r * 0.97, my = K.y + Math.sin(ak) * r * 0.97;
      g.fillStyle(RUST, 1); g.fillCircle(mx, my, 4.2 * k); g.lineStyle(1.4 * k, INK, 1); g.strokeCircle(mx, my, 4.2 * k);
      /* the hands */
      var ah = ((10 + cur / 60) % 12) / 12 * TAU - Math.PI / 2;
      g.lineStyle(Math.max(3, 5.5 * k * r / 64), INK, 1); g.lineBetween(K.x - Math.cos(ah) * r * 0.1, K.y - Math.sin(ah) * r * 0.1, K.x + Math.cos(ah) * r * 0.5, K.y + Math.sin(ah) * r * 0.5);
      g.lineStyle(Math.max(2, 3.4 * k * r / 64), INK, 1); g.lineBetween(K.x - Math.cos(am) * r * 0.16, K.y - Math.sin(am) * r * 0.16, K.x + Math.cos(am) * r * 0.8, K.y + Math.sin(am) * r * 0.8);
      var tx = K.x + Math.cos(am) * r * 0.8, ty = K.y + Math.sin(am) * r * 0.8, nx = -Math.sin(am), ny = Math.cos(am), hs = r * 0.07;
      g.fillStyle(INK, 1); g.fillTriangle(tx + Math.cos(am) * hs * 1.8, ty + Math.sin(am) * hs * 1.8, tx + nx * hs, ty + ny * hs, tx - nx * hs, ty - ny * hs);
      g.fillStyle(BRASS, 1); g.fillCircle(K.x, K.y, r * 0.075); g.lineStyle(1.2, INK, 1); g.strokeCircle(K.x, K.y, r * 0.075);
      /* the bell strikes: the face lights up */
      if (R.flashT > 0) { g.fillStyle(0xfff6d8, 0.55 * R.flashT / 600); g.fillCircle(K.x, K.y, r * 1.05); }
      /* the bell in the belfry, swinging after a stroke, and the sound rings */
      var b = R.bell, bs = b.s, sw = R.bellT < 6 ? Math.sin(R.bellT * 7) * 0.42 * Math.exp(-R.bellT * 0.9) : 0;
      var pts = [[-0.18, 0], [0.18, 0], [0.3, 0.2], [0.34, 0.56], [0.5, 0.78], [0.5, 0.86], [-0.5, 0.86], [-0.5, 0.78], [-0.34, 0.56], [-0.3, 0.2]].map(function (q) {
        var x = q[0] * 60 * bs, y = q[1] * 60 * bs, c = Math.cos(sw), sn = Math.sin(sw);
        return { x: b.x + x * c - y * sn, y: b.y + x * sn + y * c };
      });
      g.fillStyle(0x8a6a34, 1); g.fillPoints(pts, true); g.lineStyle(1.5, INK, 1); g.strokePoints(pts, true);
      var cl = { x: b.x - Math.sin(sw * 0.6) * 52 * bs, y: b.y + Math.cos(sw * 0.6) * 52 * bs };
      g.fillStyle(0x3a2818, 1); g.fillCircle(cl.x, cl.y, 5 * bs);
      g.lineStyle(2 * bs, 0xe8c47a, 0.7); g.lineBetween(pts[2].x, pts[2].y, pts[3].x, pts[3].y);
      if (R.bellT < 1.4) {
        var ra = R.bellT / 1.4;
        for (var j = 0; j < 3; j++) {
          var rr = (34 + j * 16 + ra * 50) * bs, al = (1 - ra) * (0.75 - j * 0.2);
          if (al <= 0) continue;
          g.lineStyle(3 * k, 0x24170d, al); g.beginPath(); g.arc(b.x, b.y + 30 * bs, rr, -0.55, 0.55, false); g.strokePath();
          g.beginPath(); g.arc(b.x, b.y + 30 * bs, rr, Math.PI - 0.55, Math.PI + 0.55, false); g.strokePath();
        }
      }
    },
    noonDrawMarshal: function (s, ms) {
      var R = this.nn, k = R.k, mk = R.mk, g = R.armG;
      g.clear();
      var dy = R.duckA * R.duckDy, top = R.myTop + dy + Math.sin(R.t / 900) * 1.2 * mk;
      R.marshal.setPosition(R.mx, top);
      this.blink(R.marshal);
      g.setAlpha(R.marshal.alpha);
      this.player.setPosition(R.mx, top + 40 * mk);
      /* the hat: on his head, or flying off and lying in the dust */
      var hx = R.mx, hy = top + 38 * mk;
      if (R.hatOff) {
        var h = R.hatOff; h.t += ms;
        if (h.t < 2400) { h.vy += 1300 * k * s; h.x += h.vx * s; h.y += h.vy * s; h.r += h.vr * s; if (h.y > this.H - 30 * mk) { h.y = this.H - 30 * mk; h.vy *= -0.25; h.vx *= 0.6; h.vr *= 0.5; } }
        R.hat.setPosition(h.x, h.y).setRotation(h.r).setAlpha(clamp(1 - (h.t - 1800) / 600, 0, 1));
        if (h.t >= 2400) { R.hatOff = null; R.hat.setRotation(0).setAlpha(1); }
      } else R.hat.setPosition(hx, hy).setRotation(0).setAlpha(R.marshal.alpha);
      /* his right arm: on the holster (twitching while he waits), or out with the gun aimed at the sight */
      var shx = R.mx + 52 * mk, shy = top + 92 * mk, drawn = (R.phase === "draw" && R.duckA < 0.35) || R.gunOut > 0;
      if (R.gunOut > 0) R.gunOut -= ms;
      var hipX = R.mx + 60 * mk, hipY = top + 238 * mk, I = INK, SL = 0xd9c8a4, SK = 0xb98b5e;
      if (drawn) {
        var aim = this.noonAimPoint(), ax = aim.x - shx, ay = aim.y - shy, d = Math.max(1, Math.sqrt(ax * ax + ay * ay)), ux = ax / d, uy = ay / d;
        /* the arm reaches into the street, so it looks short; it stays on his right side and the gun turns to the sight */
        var hx2 = shx + clamp(ux * 60, 6, 60) * mk + 6 * mk, hy2 = shy + uy * 58 * mk;
        var ex = (shx + hx2) / 2 + 12 * mk, ey = (shy + hy2) / 2 + 16 * mk;
        ax = aim.x - hx2; ay = aim.y - hy2; d = Math.max(1, Math.sqrt(ax * ax + ay * ay)); ux = ax / d; uy = ay / d;
        g.lineStyle(22 * mk, I, 1); g.strokePoints([{ x: shx, y: shy }, { x: ex, y: ey }, { x: hx2, y: hy2 }]);
        g.lineStyle(18 * mk, SL, 1); g.strokePoints([{ x: shx, y: shy }, { x: ex, y: ey }, { x: hx2, y: hy2 }]);
        /* the revolver from behind: grip and hammer, the barrel pointing away up the street */
        var bx = hx2 + ux * 30 * mk, by = hy2 + uy * 30 * mk, nx = -uy, ny = ux;
        g.lineStyle(11 * mk, I, 1); g.lineBetween(hx2, hy2, bx, by);
        g.lineStyle(7 * mk, 0x5a5650, 1); g.lineBetween(hx2, hy2, bx, by);
        g.fillStyle(0x3a3632, 1); g.fillCircle(hx2 + ux * 8 * mk, hy2 + uy * 8 * mk, 7.5 * mk);
        g.fillStyle(SK, 1); g.fillCircle(hx2, hy2, 9 * mk); g.lineStyle(1.6, I, 1); g.strokeCircle(hx2, hy2, 9 * mk);
        g.fillStyle(0x6a4a2a, 1); g.fillCircle(hx2 - nx * 3 * mk, hy2 - ny * 3 * mk + 6 * mk, 4 * mk);
        R.gx = bx + ux * 4 * mk; R.gy = by + uy * 4 * mk;
      } else {
        var tw = R.phase === "wait" || R.phase === "enter" ? Math.sin(R.t / 140) * 2 * mk : 0;
        var hx3 = hipX + 2 * mk, hy3 = hipY - 26 * mk + tw - (R.phase === "wait" ? 6 * mk : 0);
        g.lineStyle(22 * mk, I, 1); g.strokePoints([{ x: shx, y: shy }, { x: shx + 16 * mk, y: shy + 70 * mk }, { x: hx3, y: hy3 }]);
        g.lineStyle(18 * mk, SL, 1); g.strokePoints([{ x: shx, y: shy }, { x: shx + 16 * mk, y: shy + 70 * mk }, { x: hx3, y: hy3 }]);
        /* the gun in its holster */
        g.fillStyle(0x3a3632, 1); g.fillRect(hipX - 3 * mk, hipY - 14 * mk, 12 * mk, 16 * mk);
        g.fillStyle(0x6a4a2a, 1); g.fillRect(hipX - 1 * mk, hipY - 20 * mk, 9 * mk, 10 * mk);
        g.fillStyle(SK, 1); g.fillCircle(hx3, hy3, 9 * mk); g.lineStyle(1.6, I, 1); g.strokeCircle(hx3, hy3, 9 * mk);
        R.gx = hx3; R.gy = hy3 - 30 * mk;
      }
    },
    noonDrawSight: function () {
      var R = this.nn, k = R.k, g = R.sightG;
      g.clear();
      if (this._between) return;
      var a = this.noonAimPoint(), on = R.lock && !R.lock.dead && (R.lock.roof || R.lock.res === "live");
      var live = R.phase === "draw" && R.duckA < 0.35, col = live ? (on ? 0xfff3d6 : 0xf2e4c4) : 0xc8b08a, r = (on ? 17 : 20) * k;
      var al = live ? 1 : 0.7;
      g.lineStyle(5 * k, INK, 0.6 * al); g.strokeCircle(a.x, a.y, r);
      g.lineStyle(2.4 * k, col, al); g.strokeCircle(a.x, a.y, r);
      [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) {
        g.lineStyle(5 * k, INK, 0.6 * al); g.lineBetween(a.x + d[0] * r * 0.5, a.y + d[1] * r * 0.5, a.x + d[0] * r * 1.45, a.y + d[1] * r * 1.45);
        g.lineStyle(2.4 * k, col, al); g.lineBetween(a.x + d[0] * r * 0.5, a.y + d[1] * r * 0.5, a.x + d[0] * r * 1.45, a.y + d[1] * r * 1.45);
      });
      if (on && !R.lock.roof && R.lock.poster) {
        var pz = R.lock.poster, w = 37 * R.lock.ps + 4 * k, h = 45 * R.lock.ps + 4 * k;
        g.lineStyle(3 * k, live ? 0xfff3d6 : 0xd6a441, 1); g.strokeRect(pz.x - w, pz.y - h, w * 2, h * 2);
      }
    },
    noonDrawUi: function (ms) {
      var R = this.nn, k = R.k, g = R.uiG, W = this.W, H = this.H;
      g.clear();
      /* the six-shooter's cylinder */
      var cx = R.cylX, cy = R.cylY, cr = 24 * k, rot = (6 - R.ammo) / 6 * TAU;
      g.fillStyle(0x24170d, 0.85); g.fillCircle(cx, cy, cr + 5 * k);
      g.fillStyle(0x5a5650, 1); g.fillCircle(cx, cy, cr);
      g.lineStyle(1.6 * k, 0xd8d0c0, 0.6); g.strokeCircle(cx, cy, cr);
      for (var i = 0; i < 6; i++) {
        var a = rot + i / 6 * TAU - Math.PI / 2, px = cx + Math.cos(a) * cr * 0.58, py = cy + Math.sin(a) * cr * 0.58, full = R.reload > 0 ? false : i < R.ammo;
        g.fillStyle(full ? 0xd6a441 : 0x1a120c, 1); g.fillCircle(px, py, cr * 0.24);
        if (full) { g.fillStyle(0xfff0c0, 0.7); g.fillCircle(px - 1.2 * k, py - 1.2 * k, cr * 0.08); }
      }
      g.fillStyle(0x24170d, 1); g.fillCircle(cx, cy, cr * 0.14);
      if (R.reload > 0) { var u = 1 - R.reload / R.P.reloadMs; g.lineStyle(4 * k, 0xd6a441, 1); g.beginPath(); g.arc(cx, cy, cr + 9 * k, -Math.PI / 2, -Math.PI / 2 + u * TAU, false); g.strokePath(); }
      R.txAmmo.setPosition(cx, cy + cr + 8 * k).setText(R.reload > 0 ? "RELOADING" : "SIX-SHOOTER");
      /* the status sign: a plank with what to do now */
      var st, col = C.paper, anyAim = R.outlaws.some(function (o) { return o.st === "aim" && o.aimT >= 0; }) || (R.roof && R.roof.st === "aim" && !R.roof.dead);
      if (this._between) st = "CORRECT!";
      else if (R.phase === "enter" || R.phase === "wait") { st = "HOLD YOUR FIRE · " + R.ticksLeft + " TICK" + (R.ticksLeft === 1 ? "" : "S") + " TO THE BELL"; col = "#ffe6b0"; }
      else if (anyAim && R.duckA < 0.55) { st = "DUCK! HOLD ▼"; col = "#ffb79a"; }
      else if (R.duckA >= 0.55) st = anyAim ? "DUCKED · STAY DOWN" : "DUCKED · LET GO OF ▼ TO SHOOT";
      else if (R.reload > 0) st = "RELOADING…";
      else st = this.need && this.need.length > 1 ? "DRAW! SHOOT BOTH RIGHT LETTERS" : "DRAW! SHOOT THE RIGHT LETTER";
      if (R.statusKey !== st) { R.statusKey = st; R.txStatus.setText(st); }
      R.txStatus.setColor(col);
      var tw = R.txStatus.width + 30 * k, th = R.txStatus.height + 14 * k, sx = clamp(R.stX, tw / 2 + 6, W - tw / 2 - 6);
      if (R.actBox && sx + tw / 2 > R.actBox.x0 - 6 && R.stY + th / 2 > R.actBox.y0) sx = Math.max(tw / 2 + 6, R.actBox.x0 - 6 - tw / 2);
      R.txStatus.setPosition(sx, R.stY);
      g.fillStyle(0x24170d, 0.88); g.fillRoundedRect(sx - tw / 2, R.stY - th / 2, tw, th, 6 * k);
      g.lineStyle(2 * k, 0xa8825a, 1); g.strokeRoundedRect(sx - tw / 2 + 3 * k, R.stY - th / 2 + 3 * k, tw - 6 * k, th - 6 * k, 4 * k);
      g.fillStyle(0xa8825a, 1); g.fillCircle(sx - tw / 2 + 8 * k, R.stY, 2 * k); g.fillCircle(sx + tw / 2 - 8 * k, R.stY, 2 * k);
      /* the big word: DRAW! / FOUL! */
      if (R.bigT > 0) {
        R.bigT -= ms;
        var f = R.bigT / R.bigMs;
        R.txBig.setScale(1 + 0.25 * Math.max(0, f - 0.7) / 0.3).setAlpha(clamp(f / 0.35, 0, 1));
        if (R.bigT <= 0) R.txBig.setVisible(false);
      }
      void H;
    },
    /* the old film: grain that jumps every other frame, a flicker, now and then a scratch */
    noonDrawFilm: function (ms) {
      var R = this.nn, g = R.filmG, W = this.W, H = this.H;
      R.flick += 1;
      if (R.flick % 2 === 0) { R.grain.tilePositionX = Math.floor(Math.random() * 256); R.grain.tilePositionY = Math.floor(Math.random() * 256); }
      g.clear();
      g.fillStyle(0x2a1a0c, Math.random() * 0.035); g.fillRect(0, 0, W, H);
      R.scratchT -= ms;
      if (R.scratchT <= 0) { R.scratch = { x: rnd(0.1, 0.9) * W, t: rnd(60, 160) }; R.scratchT = rnd(1800, 5200); }
      if (R.scratch && R.scratch.t > 0) {
        R.scratch.t -= ms;
        g.lineStyle(1.2, 0xfff4dc, 0.35); g.lineBetween(R.scratch.x, 0, R.scratch.x + rnd(-2, 2), H);
      }
    },

    /* a right answer: the outlaws raise their hands and leave the street; the clock races on to the next showdown */
    clear_noon: function () {
      var R = this.nn, self = this;
      R.phase = "clear";
      R.outlaws.forEach(function (o) {
        if (o.st === "gone" || o.st === "leave") return;
        if (o.res === "live") { o.st = "up"; o.pose = "up"; o.upHold = rnd(250, 600); o.res = "out"; }
      });
      if (R.roof) R.roof.dead = true;
      R.tolls = Math.min(R.tolls, 0);
      if (this.score < this.needExtracts) {
        var to = this.noonMarkMin(this.score) - TICKS;
        R.ff = { from: R.min, to: to, t: 0, dur: 850 };
        sfx("whirr");
      }
      R.lock = null;
      void self;
    }
  });
})();
