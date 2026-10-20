/* SOL Labyrinth v5.22 — the Lit and Film mode "towcable": Tow Cable (The Empire Strikes Back, 1980; genre SCIFI).
 *
 * The battle on the ice plain, seen low over the snow in cold blue-white light. Giant four-legged armored walkers
 * (a generic design: a long plated hull, a slit-visored cab on a ribbed neck, twin chin guns) march from the right
 * toward the rebels' trench and shield generator at the left, each with a letter painted on a plate on its side.
 * Blasters can't hurt their armor, so the player's snowspeeder (a generic two-seat airspeeder, white and orange)
 * carries a harpoon on a tow cable.
 *
 * Fly (arrow keys / WASD / the pad, or the speeder follows the mouse pointer). A target box locks on to the
 * nearest walker in harpoon range; Space, HARPOON or a click fires the harpoon into it (clicking a walker picks
 * that walker). Then fly circles around its legs: every loop wraps the cable tighter (bands coil up the legs, the
 * ring on the snow fills, the legs pull together) and when the ring is full the walker topples into the snow:
 * that walker's letter is the pick (answerPick) at the moment it hits the ground. Press the button again to cut
 * the cable loose (free). The cable holds the speeder within its length; the legs push it out (a harmless bump).
 *
 * Hazards (each a life): the walkers' chin guns: a gun glows, a red line and a reticle track the speeder, the
 * line stops following (it "locks") and the bolt flies along it; the guns only point forward, so behind a walker
 * is safe from that walker. And the march: if a walker's head reaches the shield generator line, the ion cannon
 * fires, the walkers fall back, and it costs a life. From level 21 the wind pushes the speeder, from 71 snow
 * squalls slow it, from 81 a cable pulled tight too long snaps. towParams(n) is the one difficulty curve.
 *
 * Registered with SolModes.extend (js/modes.js); the methods are copied onto ModeScene, so `this` is the mode
 * scene. Every texture is drawn once (canvasTex) under an "md-towcable-" key; the plain again on a resize.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, dist = L.dist, angDiff = L.angDiff, canvasTex = L.canvasTex;

  var TAU = Math.PI * 2, RES = 2;
  var HUD = "'Trebuchet MS', Verdana, sans-serif";
  var HUDC = "#9fe6ff", HUDN = 0x9fe6ff, RED = 0xff4a26, OK = 0x9aefc0;
  var HIP_Y = -112;                 /* walker units: the feet stand on y = 0, the hips at HIP_Y */
  var HEAD_X = -92, HEAD_Y = -148;  /* the neck joint the cab turns on */
  var MUZZLE = [-78, 15];           /* the chin guns' muzzle, from the neck joint */
  var PLATE = [8, -142];            /* the letter plate on the hull */
  var FALL_MS = 950;
  var SP_SPD = 300;                 /* the speeder's top speed, px a second (times k) */

  /* ── difficulty: one curve for every level 1-100, each level harder than the one before ── */
  function towParams(n) {
    n = Math.max(1, Number(n) || 1);
    return {
      boltSpd: 210 + n * 3.2,                                   /* a bolt's speed, px a second (213 at 1, 530 at 100) */
      warnMs: 1700 - n * 9,                                     /* a gun glows and aims this long before it fires (1691 ... 800) */
      lockMs: 700 - n * 3.4,                                    /* the last part of that, when the line stops following you (697 ... 360) */
      fireGap: 4.2 - n * 0.03,                                  /* seconds between the start of one shot and the next (4.17 ... 1.2) */
      shooters: n >= 61 ? 3 : n >= 31 ? 2 : 1,                  /* guns aiming at once */
      twin: n >= 11 ? 1 : 0,                                    /* two bolts side by side */
      wind: n >= 21 ? 30 + (n - 21) : 0,                        /* gusts, px a second at their strongest */
      tetherShoot: n >= 41 ? 1 : 0,                             /* the walker you are wrapping fires too */
      lead: n >= 51 ? Math.min(1, 0.45 + (n - 51) * 0.011) : 0, /* the gunners aim this share of the way to where you are going */
      squalls: n >= 91 ? 2 : n >= 71 ? 1 : 0,                   /* drifting snow squalls that slow the speeder */
      snapMs: n >= 81 ? 1200 - (n - 81) * 20 : 99999,           /* a cable held tight this long snaps */
      loops: 1.5 + (n - 1) * 0.02,                              /* loops round the legs to trip a walker (1.5 ... 3.48) */
      range: 300 - n * 1.1,                                     /* the harpoon's range, px (299 ... 190) */
      cable: 240 - n * 0.8,                                     /* the tow cable's length, px (239 ... 160) */
      marchS: 130 - n * 0.8                                     /* seconds for the lead walker to reach the generator (129 ... 50) */
    };
  }

  /* ── art, drawn once ── */
  function poly(c, pts) { c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); c.closePath(); }
  function seeded(seed) { var s = seed >>> 0; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

  /* the walker's hull and neck, local units (x -104..96, y -212..-94), facing left */
  function drawHull(c) {
    c.setTransform(RES, 0, 0, RES, 104 * RES, 212 * RES);
    c.lineJoin = "round"; c.lineCap = "round";
    /* the ribbed neck, out to the cab */
    var g = c.createLinearGradient(0, -162, 0, -136);
    g.addColorStop(0, "#8d98a5"); g.addColorStop(0.5, "#5d6773"); g.addColorStop(1, "#353d47");
    c.fillStyle = g; c.fillRect(-104, -161, 26, 24);
    c.strokeStyle = "rgba(20,26,34,0.75)"; c.lineWidth = 1.4;
    for (var x = -102; x < -78; x += 4) { c.beginPath(); c.moveTo(x, -160); c.lineTo(x, -138); c.stroke(); }
    c.strokeStyle = "rgba(200,212,224,0.35)"; c.lineWidth = 1;
    for (x = -100.5; x < -78; x += 4) { c.beginPath(); c.moveTo(x, -159); c.lineTo(x, -148); c.stroke(); }
    /* the hull: a long armored body with chamfered ends */
    var hull = [[-80, -104], [84, -104], [91, -118], [93, -150], [83, -167], [58, -179], [-54, -181], [-73, -173], [-84, -157], [-86, -121]];
    g = c.createLinearGradient(0, -182, 0, -104);
    g.addColorStop(0, "#cdd5de"); g.addColorStop(0.32, "#99a5b3"); g.addColorStop(0.7, "#6c7786"); g.addColorStop(1, "#47505c");
    c.fillStyle = g; poly(c, hull); c.fill();
    /* the rear in shadow, the front catching the light */
    g = c.createLinearGradient(-86, 0, 93, 0);
    g.addColorStop(0, "rgba(255,255,255,0.18)"); g.addColorStop(0.35, "rgba(255,255,255,0)"); g.addColorStop(0.75, "rgba(20,30,50,0)"); g.addColorStop(1, "rgba(20,30,50,0.32)");
    c.fillStyle = g; poly(c, hull); c.fill();
    /* the side skirt */
    c.fillStyle = "#454e5a"; poly(c, [[-82, -123], [88, -123], [84, -104], [-80, -104]]); c.fill();
    c.strokeStyle = "rgba(15,20,28,0.7)"; c.lineWidth = 1.2;
    for (x = -70; x < 82; x += 12) { c.beginPath(); c.moveTo(x, -120); c.lineTo(x - 2, -107); c.stroke(); }
    c.fillStyle = "rgba(190,205,220,0.35)"; c.fillRect(-82, -124, 170, 1.6);
    /* panel seams and rivets */
    c.strokeStyle = "rgba(28,36,46,0.6)"; c.lineWidth = 1.1;
    [-50, -18, 36, 66].forEach(function (sx) { c.beginPath(); c.moveTo(sx, -175); c.lineTo(sx, -124); c.stroke(); });
    c.beginPath(); c.moveTo(-80, -160); c.lineTo(88, -160); c.stroke();
    c.fillStyle = "rgba(30,38,48,0.7)";
    [-50, -18, 36, 66].forEach(function (sx) { for (var y = -170; y < -126; y += 8) { c.beginPath(); c.arc(sx + 3, y, 0.9, 0, TAU); c.fill(); } });
    /* vents at the rear and a hatch up front */
    c.fillStyle = "#3b434e";
    for (var i = 0; i < 4; i++) c.fillRect(46 + i * 0, -154 + i * 7, 14, 3.2);
    c.fillRect(-74, -152, 18, 22);
    c.strokeStyle = "rgba(200,212,224,0.45)"; c.lineWidth = 1; c.strokeRect(-74, -152, 18, 22);
    /* marker lights */
    c.fillStyle = "#ff6a3a"; c.beginPath(); c.arc(78, -150, 1.8, 0, TAU); c.fill();
    c.fillStyle = "#ffd27a"; c.beginPath(); c.arc(-65, -164, 1.5, 0, TAU); c.fill();
    /* the letter plate: a dark stenciled panel */
    var px = PLATE[0], py = PLATE[1];
    c.fillStyle = "#1f2731"; c.beginPath();
    if (c.roundRect) c.roundRect(px - 27, py - 23, 54, 46, 5); else c.rect(px - 27, py - 23, 54, 46);
    c.fill();
    c.strokeStyle = "#e8eef4"; c.lineWidth = 2; c.stroke();
    c.strokeStyle = "rgba(232,238,244,0.35)"; c.lineWidth = 1; c.strokeRect(px - 23, py - 19, 46, 38);
    /* snow lying along the top, with a few drips down the plates */
    c.fillStyle = "#f6f9fc";
    c.beginPath(); c.moveTo(-73, -173); c.lineTo(-54, -182); c.lineTo(58, -180); c.lineTo(84, -168);
    c.lineTo(80, -164); c.quadraticCurveTo(60, -172, 40, -173); c.lineTo(30, -170); c.lineTo(22, -174); c.quadraticCurveTo(-10, -176, -30, -174);
    c.lineTo(-36, -170); c.lineTo(-42, -175); c.quadraticCurveTo(-60, -175, -71, -168); c.closePath(); c.fill();
    c.fillStyle = "rgba(160,185,210,0.6)"; c.fillRect(-60, -174, 110, 1.2);
    /* the outline */
    c.strokeStyle = "#232a33"; c.lineWidth = 2; poly(c, hull); c.stroke();
    /* a sensor mast at the rear and a domed hatch on the back: this walker's own kit */
    c.strokeStyle = "#232a33"; c.lineWidth = 2.6; c.beginPath(); c.moveTo(68, -174); c.lineTo(72, -205); c.stroke();
    c.strokeStyle = "#8e99a6"; c.lineWidth = 1.2; c.beginPath(); c.moveTo(68, -175); c.lineTo(72, -204); c.stroke();
    c.strokeStyle = "#232a33"; c.lineWidth = 1.6; c.beginPath(); c.moveTo(64, -196); c.lineTo(78, -198); c.stroke();
    c.fillStyle = "#ff5a2a"; c.beginPath(); c.arc(72, -206, 2.2, 0, TAU); c.fill();
    g = c.createLinearGradient(0, -192, 0, -178);
    g.addColorStop(0, "#dfe5ec"); g.addColorStop(1, "#7d8894");
    c.fillStyle = g; c.beginPath(); c.ellipse(-16, -179, 17, 10, 0, Math.PI, 0); c.closePath(); c.fill();
    c.strokeStyle = "#232a33"; c.lineWidth = 1.6; c.stroke();
    c.fillStyle = "#f6f9fc"; c.beginPath(); c.ellipse(-16, -186, 11, 3.6, 0, Math.PI, 0); c.closePath(); c.fill();
    c.fillStyle = "#3b434e"; c.fillRect(-21, -184, 10, 3);
  }
  /* the walker's cab, around its neck joint (x -82..6, y -32..30) */
  function drawHead(c) {
    c.setTransform(RES, 0, 0, RES, 82 * RES, 32 * RES);
    c.lineJoin = "round";
    /* the twin chin guns under the cab */
    c.fillStyle = "#2a313a"; c.fillRect(-50, 9, 22, 14);
    c.strokeStyle = "#1a2028"; c.lineWidth = 4.2; c.lineCap = "butt";
    c.beginPath(); c.moveTo(-48, 13); c.lineTo(-79, 13); c.moveTo(-46, 19.5); c.lineTo(-76, 19.5); c.stroke();
    c.strokeStyle = "#6c7684"; c.lineWidth = 1.4;
    c.beginPath(); c.moveTo(-48, 12); c.lineTo(-78, 12); c.moveTo(-46, 18.5); c.lineTo(-75, 18.5); c.stroke();
    /* the cab: a rounded wedge */
    var cab = [[-8, -24], [-8, 18], [-34, 22], [-58, 15], [-71, 3], [-68, -10], [-50, -23], [-26, -28]];
    var g = c.createLinearGradient(0, -28, 0, 22);
    g.addColorStop(0, "#d0d8e1"); g.addColorStop(0.45, "#97a3b1"); g.addColorStop(1, "#56606d");
    c.fillStyle = g; poly(c, cab); c.fill();
    g = c.createLinearGradient(-71, 0, -8, 0);
    g.addColorStop(0, "rgba(255,255,255,0.2)"); g.addColorStop(1, "rgba(20,30,50,0.25)");
    c.fillStyle = g; poly(c, cab); c.fill();
    /* the visor slit, a cold amber glow inside */
    c.fillStyle = "#151b22"; poly(c, [[-66, -3], [-30, -8], [-28, -1], [-62, 3]]); c.fill();
    c.strokeStyle = "rgba(255,190,110,0.85)"; c.lineWidth = 1.2; c.beginPath(); c.moveTo(-62, 0); c.lineTo(-32, -4); c.stroke();
    /* plates */
    c.strokeStyle = "rgba(28,36,46,0.6)"; c.lineWidth = 1;
    c.beginPath(); c.moveTo(-40, -25); c.lineTo(-44, 20); c.moveTo(-20, -27); c.lineTo(-22, 20); c.stroke();
    c.fillStyle = "#3b434e"; c.fillRect(-20, 6, 9, 3); c.fillRect(-20, 11, 9, 3);
    /* snow on the cab roof */
    c.fillStyle = "#f6f9fc"; c.beginPath(); c.moveTo(-50, -23); c.lineTo(-26, -29); c.lineTo(-8, -25); c.lineTo(-8, -21); c.quadraticCurveTo(-28, -25, -48, -19); c.closePath(); c.fill();
    c.strokeStyle = "#232a33"; c.lineWidth = 2; poly(c, cab); c.stroke();
  }
  /* the snowspeeder, side view facing right (x -40..40, y -18..16) */
  function drawSpeeder(c) {
    c.setTransform(RES, 0, 0, RES, 40 * RES, 18 * RES);
    c.lineJoin = "round"; c.lineCap = "round";
    /* the far engine pod, a little higher */
    c.fillStyle = "#9d978d"; poly(c, [[-33, -13], [-12, -13], [-9, -10], [-12, -7], [-33, -7]]); c.fill();
    /* the harpoon gun under the tail */
    c.fillStyle = "#2c333c"; c.fillRect(-39, 5, 13, 3.4); c.fillRect(-28, 3.5, 6, 5);
    /* the body: a low wedge */
    var body = [[-36, 1], [-31, 8], [20, 7], [36, 1], [31, -3], [12, -7], [-14, -8], [-34, -5]];
    var g = c.createLinearGradient(0, -8, 0, 8);
    g.addColorStop(0, "#fbf8f2"); g.addColorStop(0.6, "#ddd6ca"); g.addColorStop(1, "#a59d90");
    c.fillStyle = g; poly(c, body); c.fill();
    /* orange paint: a side stripe and the nose */
    c.fillStyle = "#e0702e"; poly(c, [[-28, 0.5], [22, 0], [24, 2.6], [-28, 3.2]]); c.fill();
    poly(c, [[27, -2.2], [36, 1], [31, 4.6], [25, 4]]); c.fill();
    /* panel lines and the air brakes */
    c.strokeStyle = "rgba(70,62,52,0.55)"; c.lineWidth = 0.8;
    c.beginPath(); c.moveTo(-4, -7.5); c.lineTo(-6, 7); c.moveTo(-22, -7); c.lineTo(-23, 7.5); c.stroke();
    /* the canopy */
    g = c.createLinearGradient(0, -16, 0, -7);
    g.addColorStop(0, "#9fd2f2"); g.addColorStop(1, "#244663");
    c.fillStyle = g; c.beginPath(); c.moveTo(-1, -7.5); c.quadraticCurveTo(6, -16, 18, -7.2); c.closePath(); c.fill();
    c.strokeStyle = "#3c4652"; c.lineWidth = 1; c.stroke();
    c.strokeStyle = "rgba(255,255,255,0.8)"; c.lineWidth = 1; c.beginPath(); c.moveTo(4, -10.5); c.quadraticCurveTo(8, -13.5, 12, -11); c.stroke();
    /* the near engine pod */
    g = c.createLinearGradient(0, -6, 0, 3);
    g.addColorStop(0, "#efeae2"); g.addColorStop(1, "#9a9388");
    c.fillStyle = g; poly(c, [[-35, -6], [-12, -6], [-8, -2.5], [-12, 1.5], [-35, 1.5]]); c.fill();
    c.strokeStyle = "#5a544c"; c.lineWidth = 0.9; c.stroke();
    c.fillStyle = "#e0702e"; c.fillRect(-20, -6, 3, 7.5);
    c.fillStyle = "#3a3f46"; c.fillRect(-37, -5.5, 3, 6.5);
    c.strokeStyle = "#4a4239"; c.lineWidth = 1.3; poly(c, body); c.stroke();
  }
  /* a soft smoke puff (tinted per use) */
  function drawPuff(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,255,0.95)"); g.addColorStop(0.45, "rgba(255,255,255,0.55)"); g.addColorStop(1, "rgba(255,255,255,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    var r = seeded(7);
    for (var i = 0; i < 9; i++) {
      var a = r() * TAU, d = r() * w * 0.22, x = w / 2 + Math.cos(a) * d, y = h / 2 + Math.sin(a) * d, rr = w * (0.12 + r() * 0.12);
      g = c.createRadialGradient(x, y, 1, x, y, rr);
      g.addColorStop(0, "rgba(255,255,255,0.35)"); g.addColorStop(1, "rgba(255,255,255,0)");
      c.fillStyle = g; c.fillRect(0, 0, w, h);
    }
  }
  function ensureTowArt(scene) {
    canvasTex(scene, "md-towcable-hull", 200 * RES, 118 * RES, drawHull);
    canvasTex(scene, "md-towcable-head", 88 * RES, 62 * RES, drawHead);
    canvasTex(scene, "md-towcable-speeder", 80 * RES, 34 * RES, drawSpeeder);
    canvasTex(scene, "md-towcable-puff", 64, 64, drawPuff);
  }

  /* the ice plain, drawn once for the canvas size (B is the layout) */
  function drawPlain(B, W, H) {
    return function (c) {
      var k = B.k, hz = B.hz, g, i, x, y, r = seeded(1980);
      /* an overcast sky, darker overhead */
      g = c.createLinearGradient(0, 0, 0, hz);
      g.addColorStop(0, "#8ea4bd"); g.addColorStop(0.55, "#c9d6e3"); g.addColorStop(1, "#eef3f7");
      c.fillStyle = g; c.fillRect(0, 0, W, hz + 2);
      for (i = 0; i < 7; i++) {
        y = hz * (0.1 + r() * 0.6); x = r() * W;
        g = c.createRadialGradient(x, y, 4, x, y, W * (0.18 + r() * 0.15));
        g.addColorStop(0, "rgba(240,245,250,0.4)"); g.addColorStop(1, "rgba(240,245,250,0)");
        c.save(); c.translate(x, y); c.scale(1, 0.22); c.translate(-x, -y); c.fillStyle = g; c.fillRect(0, 0, W, H); c.restore();
      }
      /* two ranges of snowy mountains: jagged ridges (midpoint displacement), gullies in blue shadow */
      function ridge(n, rough, rr) {
        var m = 1 << n, h = [], st, i2;
        h[0] = rr(); h[m] = rr();
        for (st = m, r0 = 1; st > 1; st >>= 1, r0 *= rough) for (i2 = st >> 1; i2 < m; i2 += st) h[i2] = (h[i2 - (st >> 1)] + h[i2 + (st >> 1)]) / 2 + (rr() - 0.5) * r0;
        var lo = Math.min.apply(null, h), hi = Math.max.apply(null, h);
        return h.map(function (v) { return (v - lo) / (hi - lo || 1); });
      }
      var r0;
      function range(base, amp, top, bot, shade, seed, lift, nn) {
        var rr = seeded(seed), h = ridge(nn, 0.58, rr), n = h.length - 1, pts = [];
        for (var j = 0; j <= n; j++) pts.push([-20 + (W + 40) * j / n, base - amp * (lift + (1 - lift) * h[j])]);
        var gg = c.createLinearGradient(0, base - amp, 0, base);
        gg.addColorStop(0, top); gg.addColorStop(1, bot);
        c.fillStyle = gg; c.beginPath(); c.moveTo(-20, base + 2);
        pts.forEach(function (q) { c.lineTo(q[0], q[1]); }); c.lineTo(W + 20, base + 2); c.closePath(); c.fill();
        /* faces turned from the light: each slope that falls to the right in blue shadow, fading toward the foot */
        var sg = c.createLinearGradient(0, base - amp, 0, base);
        sg.addColorStop(0, shade); sg.addColorStop(1, "rgba(120,145,175,0.05)");
        c.fillStyle = sg;
        for (j = 0; j < n; j++) {
          var p0 = pts[j], p1 = pts[j + 1], k2 = j + 1;
          if (p1[1] <= p0[1]) continue;
          while (k2 < n && pts[k2 + 1][1] > pts[k2][1]) k2++;
          var pe = pts[k2];
          c.beginPath(); c.moveTo(p0[0], p0[1]);
          for (var j2 = j + 1; j2 <= k2; j2++) c.lineTo(pts[j2][0], pts[j2][1]);
          c.lineTo(pe[0], base + 2); c.lineTo(p0[0] + (pe[0] - p0[0]) * 0.35, base + 2); c.closePath(); c.fill();
          /* a few streaks of rock down the shadowed face */
          c.strokeStyle = "rgba(90,110,135,0.25)"; c.lineWidth = 1;
          c.beginPath(); c.moveTo(p0[0] + (pe[0] - p0[0]) * 0.3, p0[1] + (pe[1] - p0[1]) * 0.3 + 3); c.lineTo(p0[0] + (pe[0] - p0[0]) * 0.45, base - (base - p0[1]) * 0.3); c.stroke();
          j = k2 - 1;
        }
        c.strokeStyle = "rgba(255,255,255,0.7)"; c.lineWidth = 1;
        c.beginPath(); pts.forEach(function (q, i3) { c[i3 ? "lineTo" : "moveTo"](q[0], q[1]); }); c.stroke();
      }
      range(hz - 2 * k, 118 * k, "#f4f7fa", "#b9c8d7", "rgba(104,132,166,0.55)", 5, 0.12, 5);
      range(hz + 1, 44 * k, "#fbfdfe", "#d4dfe9", "rgba(118,144,178,0.45)", 17, 0.08, 6);
      /* the shield generator on the far left of the horizon: a tower and a sphere */
      var gx = Math.max(26 * k, B.genX * 0.42), gy = hz + 3 * k;
      c.fillStyle = "#4a5a6c"; c.fillRect(gx - 3 * k, gy - 44 * k, 6 * k, 44 * k);
      poly(c, [[gx - 12 * k, gy], [gx + 12 * k, gy], [gx + 5 * k, gy - 16 * k], [gx - 5 * k, gy - 16 * k]]); c.fill();
      g = c.createRadialGradient(gx - 3 * k, gy - 52 * k, 1, gx, gy - 49 * k, 11 * k);
      g.addColorStop(0, "#9fb4c8"); g.addColorStop(1, "#3c4b5c");
      c.fillStyle = g; c.beginPath(); c.arc(gx, gy - 49 * k, 10 * k, 0, TAU); c.fill();
      c.fillStyle = "rgba(160,220,255,0.9)"; c.beginPath(); c.arc(gx, gy - 49 * k, 2.2 * k, 0, TAU); c.fill();
      /* haze along the horizon */
      g = c.createLinearGradient(0, hz - 30 * k, 0, hz + 30 * k);
      g.addColorStop(0, "rgba(238,243,247,0)"); g.addColorStop(0.5, "rgba(238,243,247,0.75)"); g.addColorStop(1, "rgba(238,243,247,0)");
      c.fillStyle = g; c.fillRect(0, hz - 30 * k, W, 60 * k);
      /* the plain: bluer in the distance, brighter close by */
      g = c.createLinearGradient(0, hz, 0, H);
      g.addColorStop(0, "#d6e1eb"); g.addColorStop(0.35, "#e7eef5"); g.addColorStop(1, "#f5f8fb");
      c.fillStyle = g; c.fillRect(0, hz + 2, W, H - hz);
      /* soft blue hollows in the snow */
      for (i = 0; i < 14; i++) {
        var f0 = r(), y0 = hz + 10 + (H - hz) * f0 * f0, w0 = (120 + r() * 260) * (0.3 + f0) * k;
        x = r() * W;
        g = c.createRadialGradient(x, y0, 2, x, y0, w0);
        g.addColorStop(0, "rgba(150,176,206,0.22)"); g.addColorStop(1, "rgba(150,176,206,0)");
        c.save(); c.translate(x, y0); c.scale(1, 0.16); c.translate(-x, -y0); c.fillStyle = g; c.fillRect(x - w0, y0 - w0, w0 * 2, w0 * 2); c.restore();
      }
      /* drifts: long wind-carved ridges, a bright crest over a blue shadow, thinner in the distance */
      for (i = 0; i < 46; i++) {
        var f = Math.pow(r(), 1.35), yy = hz + 6 + (H - hz) * f, pw = (0.2 + f) * k, ww = (120 + r() * 380) * pw, sag = (2 + r() * 5) * pw;
        x = r() * (W + 200) - 100;
        c.lineCap = "round";
        c.strokeStyle = "rgba(140,168,200," + (0.18 + f * 0.16).toFixed(3) + ")"; c.lineWidth = (1.5 + 4 * f) * k;
        c.beginPath(); c.moveTo(x, yy + 2 * pw); c.quadraticCurveTo(x + ww * 0.5, yy - sag + 2 * pw, x + ww, yy + 2 * pw); c.stroke();
        c.strokeStyle = "rgba(255,255,255," + (0.6 + f * 0.3).toFixed(3) + ")"; c.lineWidth = (1 + 2.4 * f) * k;
        c.beginPath(); c.moveTo(x + ww * 0.05, yy); c.quadraticCurveTo(x + ww * 0.5, yy - sag, x + ww * 0.95, yy); c.stroke();
      }
      /* wind-carved streaks */
      c.strokeStyle = "rgba(140,165,195,0.16)"; c.lineWidth = 1;
      for (i = 0; i < 60; i++) {
        var f2 = r(), y2 = hz + 8 + (H - hz) * f2 * f2, l2 = (20 + r() * 90) * (0.3 + f2) * k;
        x = r() * W; c.beginPath(); c.moveTo(x, y2); c.lineTo(x + l2, y2 + l2 * 0.02); c.stroke();
      }
      /* distant smoke columns from earlier fighting: soft billows leaning with the wind */
      [[0.3, 0.9], [0.6, 0.7], [0.86, 1]].forEach(function (q) {
        var sx = W * q[0], sy = hz + 3 * k;
        for (var j = 0; j < 16; j++) {
          var u = j / 15, cx = sx + u * u * 70 * k * q[1], cy = sy - u * 130 * k * q[1], rad = (5 + u * 22) * k * q[1];
          var gg = c.createRadialGradient(cx, cy, 1, cx, cy, rad);
          gg.addColorStop(0, "rgba(64,72,84," + (0.42 * (1 - u * 0.75)).toFixed(3) + ")"); gg.addColorStop(1, "rgba(64,72,84,0)");
          c.fillStyle = gg; c.fillRect(cx - rad, cy - rad, rad * 2, rad * 2);
        }
        c.fillStyle = "rgba(255,140,60,0.75)"; c.beginPath(); c.ellipse(sx, sy, 6 * k, 1.8 * k, 0, 0, TAU); c.fill();
        c.fillStyle = "rgba(40,46,56,0.7)"; c.beginPath(); c.ellipse(sx + 3 * k, sy + 1 * k, 12 * k, 2.2 * k, 0, 0, TAU); c.fill();
      });
      /* the rebel trench: a dark cut in the snow, wider close by, with a bright lip on its far side */
      var tx0 = B.genX - 34 * k, tx1 = B.genX + 22 * k, ty0 = H + 4, ty1 = hz + 6 * k;
      function tX(t) { return tx0 + (tx1 - tx0) * t; }
      function tW(t) { return (40 - 34 * t) * k; }
      c.fillStyle = "#56677c"; c.beginPath();
      for (i = 0; i <= 20; i++) { var t = i / 20; c[i ? "lineTo" : "moveTo"](tX(t) - tW(t) * 0.5, ty0 + (ty1 - ty0) * t); }
      for (i = 20; i >= 0; i--) { t = i / 20; c.lineTo(tX(t) + tW(t) * 0.5, ty0 + (ty1 - ty0) * t); }
      c.closePath(); c.fill();
      c.strokeStyle = "#ffffff"; c.lineWidth = 3 * k; c.beginPath();
      for (i = 0; i <= 20; i++) { t = i / 20; c[i ? "lineTo" : "moveTo"](tX(t) + tW(t) * 0.5 + 1, ty0 + (ty1 - ty0) * t); }
      c.stroke();
      c.strokeStyle = "rgba(60,75,95,0.5)"; c.lineWidth = 1.5 * k; c.beginPath();
      for (i = 0; i <= 20; i++) { t = i / 20; c[i ? "lineTo" : "moveTo"](tX(t) - tW(t) * 0.5, ty0 + (ty1 - ty0) * t); }
      c.stroke();
      /* gun emplacements along the trench */
      [0.12, 0.38, 0.62, 0.84].forEach(function (t3) {
        var ex = tX(t3) + tW(t3) * 0.2, ey = ty0 + (ty1 - ty0) * t3, es = (1.7 - t3 * 1.2) * k;
        c.fillStyle = "#3d4a5a"; c.beginPath(); c.ellipse(ex, ey, 11 * es, 6 * es, 0, Math.PI, 0); c.fill();
        c.strokeStyle = "#2a333e"; c.lineWidth = 2.4 * es; c.beginPath(); c.moveTo(ex + 4 * es, ey - 5 * es); c.lineTo(ex + 18 * es, ey - 9 * es); c.stroke();
        c.fillStyle = "#ffffff"; c.beginPath(); c.ellipse(ex - 1 * es, ey - 5.5 * es, 7 * es, 1.6 * es, 0, 0, TAU); c.fill();
      });
      /* a cold vignette */
      g = c.createRadialGradient(W / 2, H * 0.55, Math.min(W, H) * 0.35, W / 2, H * 0.55, Math.max(W, H) * 0.78);
      g.addColorStop(0, "rgba(40,70,110,0)"); g.addColorStop(1, "rgba(40,70,110,0.32)");
      c.fillStyle = g; c.fillRect(0, 0, W, H);
    };
  }

  M.extend("towcable", {
    name: "Tow Cable", kind: "snowspeeder level", level: "snowspeeder level", act: "HARPOON",
    how: "The battle on the ice plain: giant armored walkers march across the snow toward the rebels' trench and shield generator on the left, and each one carries a letter on a plate on its side. Blasters can't hurt their armor, so your snowspeeder carries a harpoon on a tow cable. Fly close to the walker with the right letter (the target box locks on to the nearest walker in range) and fire the harpoon. Then fly circles around its legs: every loop wraps the cable tighter, and when the ring on the snow is full the walker's legs tangle and it crashes into the snow. Watch the walkers' heads: when a gun glows and a red line points at you, fly out of its way before it fires. The guns only point forward, so behind a walker you are safe from it. Hooked the wrong walker? Fire again to cut the cable loose.",
    rules: "Tripping a walker with a wrong letter costs a life. So does a cannon bolt hitting your speeder, or a walker reaching the shield generator on the left (then the ion cannon drives them back). Cutting the cable costs nothing, and bumping into a walker's legs only knocks you aside.",
    keys: "Arrow keys, WASD or the on-screen pad fly the speeder (or move the mouse: the speeder follows the pointer) · Space, HARPOON or a mouse click fires the harpoon at the walker in the target box (click a walker to pick it) · fire again to cut the cable.",
    tip: "TOW CABLE — harpoon the walker with the right letter, then fly circles around its legs until it falls. Dodge the red bolts!",
    hint1: "Harpoon the walker with the right letter and fly circles around its legs to trip it. The passage stays in the side panel.",
    hint2: "This question has two right letters. Trip both walkers that carry them.",
    news: ["",
      "Twin bolts: the walkers' guns fire two bolts side by side, so dodge farther.",
      "Wind: gusts push your speeder sideways. The blowing snow and the WIND arrows show which way.",
      "Two walkers can aim at you at once.",
      "The walker you are wrapping fires at you too while you circle it. Keep behind its head.",
      "The gunners lead their shots: they aim where you are going, not where you are.",
      "Three walkers can aim at you at once.",
      "Snow squalls drift across the plain: inside the blowing snow your speeder flies slower.",
      "The cable can snap: pull it tight against the dashed ring for too long and it breaks, and you have to harpoon again.",
      "The final assault: two snow squalls, and the walkers march faster and fire more often, on top of everything else."],
    params: towParams
  }, {
    towParams: function (n) { return towParams(n); },

    setup_towcable: function () {
      ensureTowArt(this);
      var P = towParams(this.night), i;
      var B = this.tc = { P: P, walkers: [], bolts: [], shots: [], puffs: [], pool: [], emit: [], flashes: [], flakes: [], squalls: [], scorch: [],
        t: 0, fireCd: 2.2, tow: null, lock: null, follow: false, lpx: null, lpy: null, prevFire: false, lastFrame: -9, told: {},
        windA: 0, wph: rnd(0, 6), stepT: 0, stepCd: 0, windCd: 0, bumpCd: 0, push: 0, ion: 0, march0: 1, marchF: 0, hits: 0, trips: 0, bgKey: null };
      this.cameras.main.setBackgroundColor("#dfe8f0");
      this.towLayout();
      B.bg = this.add.image(0, 0, B.bgKey).setOrigin(0, 0).setDepth(0);
      B.groundG = this.add.graphics().setDepth(2);
      B.cableG = this.add.graphics().setDepth(3.5);
      B.fxG = this.add.graphics().setDepth(5.5);
      B.boltG = this.add.graphics().setDepth(5.6);
      B.squallG = this.add.graphics().setDepth(5.8);
      B.snowG = this.add.graphics().setDepth(6);
      B.hudG = this.add.graphics().setDepth(7);
      var sp = B.sp = { x: this.W * 0.2, gy: this.H * 0.74, vx: 0, vy: 0, face: 1, spin: 0, smoke: 0 };
      sp.shadowK = 1;
      sp.spr = this.add.image(0, 0, "md-towcable-speeder").setDepth(4);
      var hs = { fontFamily: HUD, fontSize: 13, color: HUDC, fontStyle: "bold", stroke: "#10233a", strokeThickness: 4 };
      B.txGen = this.add.text(0, 0, "WALKERS TO THE SHIELD GENERATOR", hs).setOrigin(0, 0.5).setDepth(8);
      B.txWind = this.add.text(0, 0, "WIND", hs).setOrigin(1, 0.5).setDepth(8).setVisible(false);
      B.txLock = this.add.text(0, 0, "LOCKED", Object.assign({}, hs, { fontSize: 12 })).setOrigin(0.5, 1).setDepth(8).setVisible(false);
      B.txWrap = this.add.text(0, 0, "WRAP 0%", Object.assign({}, hs, { fontSize: 14 })).setOrigin(0.5, 0).setDepth(8).setVisible(false);
      B.txRange = this.add.text(0, 0, "OUT OF RANGE", Object.assign({}, hs, { fontSize: 12, color: "#ffd0b8", stroke: "#3a1408" })).setOrigin(0.5, 1).setDepth(8).setVisible(false);
      for (i = 0; i < 110; i++) B.flakes.push({ x: Math.random(), y: Math.random(), z: Math.random(), ph: rnd(0, TAU) });
      for (i = 0; i < P.squalls; i++) B.squalls.push({ x: rnd(0.2, 0.9), y: rnd(0.2, 0.8), vx: (i % 2 ? -1 : 1) * rnd(0.018, 0.03), ph: rnd(0, 6) });
      /* distant smoke columns, rising for the whole level */
      [[0.27, 0.9], [0.58, 0.7], [0.82, 1]].forEach(function (q) { B.emit.push({ fx: q[0], bg: true, rate: 0.7 * q[1], acc: 0, until: Infinity, sc: 0.55 * q[1] }); });
      this.towPlaceHud();
      this.makeSol(sp.x, sp.gy, "right").setVisible(false);   /* the speeder flies; the sprite stays for coin pop-ups */
    },

    /* everything that depends on the canvas size */
    towLayout: function () {
      var B = this.tc, W = this.W, H = this.H;
      var k = B.k = clamp(Math.min(H / 620, W / 1000), 0.5, 1.3);
      B.hz = Math.round(H * 0.3);
      B.gTop = H * 0.47; B.gBot = H * 0.92;           /* where walkers stand */
      B.sTop = H * 0.45; B.sBot = H * 0.975;          /* where the speeder's shadow can go */
      B.genX = Math.round(Math.max(54 * k, W * 0.085));
      B.hudY = Math.max(64, 62 * k);
      var key = "md-towcable-plain-" + W + "x" + H;
      if (B.bgKey !== key) {
        var old = B.bgKey;
        canvasTex(this, key, W, H, drawPlain(B, W, H));
        B.bgKey = key;
        if (B.bg) B.bg.setTexture(key);
        if (old && old !== key) { try { this.textures.remove(old); } catch (e) {} }
      }
    },
    /* the depth scale: far things (high on the screen) are smaller */
    towDs: function (gy) { var B = this.tc; return 0.56 + 0.44 * clamp((gy - B.gTop) / (B.gBot - B.gTop), 0, 1); },
    towAlt: function (gy) { return 30 * this.towDs(gy) * this.tc.k; },
    towPlaceHud: function () {
      var B = this.tc, k = B.k, fs = Math.round(clamp(13 * k, 11, 15));
      B.txGen.setFontSize(fs).setPosition(Math.max(16, 18 * k), B.hudY);
      B.genBar = { x0: Math.max(16, 18 * k), x1: Math.max(16, 18 * k) + Math.max(180, 250 * k), y: B.hudY + 16 * k };
      B.txWind.setFontSize(fs).setPosition(this.W - 92 * k, B.hudY);
      B.txLock.setFontSize(Math.round(clamp(12 * k, 10, 14)));
      B.txWrap.setFontSize(Math.round(clamp(14 * k, 11, 16)));
      B.txRange.setFontSize(Math.round(clamp(12 * k, 10, 14)));
    },
    resize_towcable: function (oldW, oldH) {
      var B = this.tc, fx = this.W / (oldW || this.W), fy = this.H / (oldH || this.H), self = this;
      this.towLayout();
      B.bg.setTexture(B.bgKey);
      B.sp.x *= fx; B.sp.gy *= fy;
      B.walkers.forEach(function (w) { w.x *= fx; w.tx *= fx; w.gy *= fy; w.sc = self.towDs(w.gy) * B.k * 0.92; });
      B.bolts = []; B.shots.forEach(function (sh) { sh.w.aiming = false; }); B.shots = [];
      B.puffs.forEach(function (p) { p.x *= fx; p.y *= fy; });
      B.scorch.forEach(function (q) { q.x *= fx; q.gy *= fy; });
      this.towPlaceHud();
      this.towMarchBase();
    },

    /* ── a new question: a fresh line of walkers marches in from the right ── */
    answers_towcable: function () {
      var B = this.tc, self = this, W = this.W, H = this.H;
      this.towCut(true);
      B.bolts = []; B.shots = [];
      B.walkers.forEach(function (w) {
        if (w.state === "down") { B.emit.push({ x: w.x - 120 * w.sc, y: w.gy - 20 * w.sc, rate: 6, acc: 0, until: B.t + 8, sc: w.sc * 1.6, dark: true }); B.scorch.push({ x: w.x - 110 * w.sc, gy: w.gy, r: 120 * w.sc, a: 0.5 }); }
        self.towKillWalker(w);
      });
      B.walkers = [];
      B.emit = B.emit.filter(function (e) { return !e.w; });
      var letters = this.choiceLetters(), n = letters.length;
      var rows = n <= 3 ? [0.4, 0.88, 0.12] : n === 4 ? [0.3, 0.86, 0.08, 0.62] : [0.3, 0.9, 0.06, 0.62, 0.36];
      letters.forEach(function (Lt, i) {
        var fx = n > 1 ? 0.37 + 0.51 * i / (n - 1) : 0.6;
        var gy = B.gTop + (B.gBot - B.gTop) * rows[i % rows.length];
        var w = self.towMakeWalker(Lt, W * fx + rnd(-10, 10) * B.k, gy);
        w.x = w.tx + W * 0.5 + i * 30 * B.k;
        if (self.extracted.indexOf(Lt) !== -1) w.mark = "right";
        B.walkers.push(w);
      });
      B.push = 0; B.ion = 0; B.marchF = 0;
      this.towMarchBase();
      B.fireCd = Math.max(B.fireCd, 2.4);
    },
    /* the march clock: how far the lead walker's head has to go to the generator */
    towMarchBase: function () {
      var B = this.tc, lead = Infinity;
      B.walkers.forEach(function (w) { if (w.state !== "down" && w.state !== "fall") lead = Math.min(lead, w.tx - 150 * w.sc); });
      if (lead === Infinity) lead = this.W * 0.3;
      B.march0 = Math.max(60, lead - B.genX);
      B.vMarch = B.march0 / B.P.marchS;
    },
    towMakeWalker: function (Lt, x, gy) {
      var B = this.tc, sc = this.towDs(gy) * B.k * 0.92;
      var w = { letter: Lt, state: "enter", mark: null, x: x, tx: x, gy: gy, sc: sc, walkT: rnd(0, 1), bind: 0, rot: 0, fallT: 0, headA: 0, bob: 0, aiming: false, pushV: 0 };
      w.coilB = this.add.graphics(); w.legF = this.add.graphics(); w.legN = this.add.graphics(); w.coilF = this.add.graphics();
      w.hull = this.add.image(-104, -212, "md-towcable-hull").setOrigin(0, 0).setScale(1 / RES);
      w.head = this.add.image(HEAD_X, HEAD_Y, "md-towcable-head").setOrigin(82 / 88, 32 / 62).setScale(1 / RES);
      w.txt = this.add.text(PLATE[0], PLATE[1], Lt, { fontFamily: HUD, fontSize: 40, color: "#f4f8fb", fontStyle: "bold", stroke: "#10161d", strokeThickness: 6 }).setOrigin(0.5);
      w.ctr = this.add.container(x, gy, [w.coilB, w.legF, w.hull, w.head, w.legN, w.coilF, w.txt]);
      this.towPaint(w);
      return w;
    },
    towKillWalker: function (w) { try { w.ctr.destroy(); } catch (e) {} w.ctr = null; },
    towPaint: function (w) {
      var dead = w.mark === "wrong", found = w.mark === "right";
      w.txt.setText(dead ? "✕" : found ? "✓" : w.letter).setColor(dead ? "#ff9a7a" : found ? "#9aefc0" : "#f4f8fb");
      var tint = w.state === "down" ? 0x9aa2ac : 0xffffff;
      w.hull.setTint(tint); w.head.setTint(tint);
    },
    towWalker: function (Lt) { var B = this.tc; for (var i = 0; i < B.walkers.length; i++) if (B.walkers[i].letter === Lt) return B.walkers[i]; return null; },
    /* a point on a walker (local units) in canvas pixels */
    towW2S: function (w, lx, ly) {
      var c = Math.cos(w.rot), s = Math.sin(w.rot);
      return { x: w.x + (lx * c - ly * s) * w.sc, y: w.gy + (lx * s + ly * c) * w.sc };
    },
    towMuzzle: function (w) {
      var c = Math.cos(w.headA), s = Math.sin(w.headA), b = w.bob || 0;
      return this.towW2S(w, HEAD_X + MUZZLE[0] * c - MUZZLE[1] * s, HEAD_Y + b + MUZZLE[0] * s + MUZZLE[1] * c);
    },
    towStanding: function (w) { return w.state === "live" || w.state === "enter"; },

    tick_towcable: function (s, inp, ms) {
      var B = this.tc, P = B.P, frame = (this.game && this.game.loop && this.game.loop.frame) || 0;
      var fire = !!inp.fire, edge = fire && !B.prevFire && B.lastFrame === frame - 1;   /* a fresh press; never the first frame after the reading card */
      B.prevFire = fire; B.lastFrame = frame;
      B.t += s;
      if (!B.told.start) { B.told.start = true; this.toast("Fly close to a walker with the arrow keys or the mouse. The target box shows the walker your harpoon will hit.", 5200); }

      this.towWind(s);
      this.towFly(s, ms, inp);
      this.towWalkers(s, ms);
      if (this._finishing) return;
      this.towTowing(s, ms);
      if (this._finishing) return;
      B.lock = this.towFindLock();
      if (edge && !this._between) this.towAction(inp);
      this.towGuns(s, ms);
      if (this._finishing) return;
      this.towBolts(s, ms);
      if (this._finishing) return;
      this.towMarch(s, ms);
      if (this._finishing) return;
      this.towSounds(s, ms);
      this.towDraw(s, ms);
    },

    /* ── the speeder ── */
    towWind: function (s) {
      var B = this.tc, P = B.P;
      B.windA = P.wind ? P.wind * B.k * (0.65 * Math.sin(B.t * 0.31 + B.wph) + 0.35 * Math.sin(B.t * 0.83 + B.wph * 2)) : 0;
      if (P.wind && !B.told.wind && B.t > 2.5) { B.told.wind = true; this.toast("Wind! Gusts push your speeder sideways. Watch the WIND arrows and the blowing snow.", 4200); }
    },
    towInSquall: function (x, gy) {
      var B = this.tc, W = this.W, H = this.H;
      for (var i = 0; i < B.squalls.length; i++) {
        var q = B.squalls[i], cx = q.x * W, cy = B.sTop + (B.sBot - B.sTop) * q.y, rx = 130 * B.k, ry = 70 * B.k;
        var dx = (x - cx) / rx, dy = (gy - cy) / ry;
        if (dx * dx + dy * dy < 1) return true;
      }
      return false;
    },
    towFly: function (s, ms, inp) {
      var B = this.tc, P = B.P, sp = B.sp, k = B.k, p = this.ptr;
      var moved = B.lpx != null && Math.abs(p.x - B.lpx) + Math.abs(p.y - B.lpy) > 3;
      B.lpx = p.x; B.lpy = p.y;
      if (inp.ax || inp.ay) B.follow = false;
      else if (moved || inp.ptr) B.follow = true;
      var slow = this.towInSquall(sp.x, sp.gy);
      if (slow && !B.told.squall) { B.told.squall = true; this.toast("Snow squall! Inside the blowing snow your speeder flies slower.", 3600); }
      var max = SP_SPD * k * (slow ? 0.55 : 1), dvx = 0, dvy = 0;
      if (sp.spin > 0) sp.spin -= ms;
      else if (inp.ax || inp.ay) {
        var l = Math.sqrt(inp.ax * inp.ax + inp.ay * inp.ay);
        dvx = inp.ax / l * max; dvy = inp.ay / l * max;
      } else if (B.follow) {
        var tgy = p.y + this.towAlt(p.y), dx = p.x - sp.x, dy = tgy - sp.gy, d = Math.sqrt(dx * dx + dy * dy);
        if (d > 4) { var v = Math.min(max, d * 5); dvx = dx / d * v; dvy = dy / d * v; }
      }
      var a = Math.min(1, 7 * s);
      sp.vx += (dvx - sp.vx) * a; sp.vy += (dvy - sp.vy) * a;
      sp.x += (sp.vx + B.windA) * s; sp.gy += sp.vy * s;
      /* the cable holds the speeder within its length */
      var T = B.tow;
      if (T && T.phase === "tight" && T.w.ctr) {
        var cx = T.w.x, cy = T.w.gy, rx = sp.x - cx, ry = sp.gy - cy, rd = Math.sqrt(rx * rx + ry * ry), cl = P.cable * k;
        if (rd > cl) {
          sp.x = cx + rx / rd * cl; sp.gy = cy + ry / rd * cl;
          var out = (sp.vx * rx + sp.vy * ry) / rd;
          if (out > 0) { sp.vx -= out * rx / rd; sp.vy -= out * ry / rd; }
          T.strain += ms;
        } else T.strain = Math.max(0, T.strain - ms * 2);
      }
      /* the legs push the speeder out (a harmless bump) */
      for (var i = 0; i < B.walkers.length; i++) {
        var w = B.walkers[i];
        if (!this.towStanding(w)) continue;
        var ex = 76 * w.sc, ey = 24 * w.sc, qx = (sp.x - w.x) / ex, qy = (sp.gy - w.gy) / ey, q = qx * qx + qy * qy;
        if (q < 1) {
          var n = Math.sqrt(q), nx = n > 0.02 ? qx / n : (sp.x >= w.x ? 1 : -1), ny = n > 0.02 ? qy / n : 0;
          sp.x = w.x + nx * ex * 1.01; sp.gy = w.gy + ny * ey * 1.01;
          var vn = sp.vx * nx + sp.vy * ny;
          if (vn < 0) { sp.vx -= 1.6 * vn * nx; sp.vy -= 1.6 * vn * ny; }
          if (B.bumpCd <= 0) {
            B.bumpCd = 400; this.towSnd("bump");
            if (!B.told.bump) { B.told.bump = true; this.toast("Bump! You flew into its legs. Fly circles around the legs, not through them.", 3200); }
          }
        }
      }
      if (B.bumpCd > 0) B.bumpCd -= ms;
      sp.x = clamp(sp.x, 10, this.W - 10); sp.gy = clamp(sp.gy, B.sTop, B.sBot);
      if (sp.vx < -25) sp.face = -1; else if (sp.vx > 25) sp.face = 1;
      sp.ds = this.towDs(sp.gy);
      sp.alt = this.towAlt(sp.gy) + Math.sin(B.t * 3.1) * 1.6 * k;
      sp.dx = sp.x; sp.dy = sp.gy - sp.alt;           /* where the speeder is drawn */
      this.player.setPosition(sp.dx, sp.dy - 20 * k);
    },
    /* the walker the harpoon would hit: the nearest standing one in range */
    towFindLock: function () {
      var B = this.tc, sp = B.sp, best = null, bd = Infinity, R = B.P.range * B.k;
      if (B.tow) return null;
      B.walkers.forEach(function (w) {
        if (w.state !== "live") return;
        var d = dist(sp.x, sp.gy, w.x, w.gy);
        if (d <= R && d < bd) { bd = d; best = w; }
      });
      return best;
    },
    /* which walker is under the pointer (the front one first) */
    towWalkerAt: function (x, y) {
      var B = this.tc, hit = null;
      B.walkers.forEach(function (w) {
        if (w.state !== "live") return;
        if (x >= w.x - 165 * w.sc && x <= w.x + 98 * w.sc && y >= w.gy - 192 * w.sc && y <= w.gy + 12 * w.sc && (!hit || w.gy > hit.gy)) hit = w;
      });
      return hit;
    },
    /* the action button: fire the harpoon, or cut the cable */
    towAction: function (inp) {
      var B = this.tc, sp = B.sp, T = B.tow;
      if (T) {
        if (T.phase === "tight" && T.t > 350) {
          this.towCut();
          if (!B.told.cut) { B.told.cut = true; this.toast("Cable cut loose. Harpoon the walker with the right letter.", 3000); }
        }
        return null;
      }
      var target = B.lock, keyed = this.keys.SPACE.isDown;
      if (inp.ptr && !keyed) {
        var under = this.towWalkerAt(inp.ptr.x, inp.ptr.y);
        if (under) {
          if (dist(sp.x, sp.gy, under.x, under.gy) <= B.P.range * B.k) target = under;
          else { B.rangeMs = 1400; this.toast("That walker is out of harpoon range. Fly closer to it first.", 2600); return null; }
        }
      }
      if (!target) {
        B.rangeMs = 1400;
        if (!B.told.range) { B.told.range = true; this.toast("No walker in range. Fly closer: the target box shows which walker the harpoon will hit.", 3400); }
        return null;
      }
      return this.towHarpoon(target);
    },
    /* the harpoon leaves the speeder for a walker's front leg */
    towHarpoon: function (w) {
      var B = this.tc;
      if (!w || w.state !== "live" || B.tow) return null;
      var sp = B.sp, a = this.towW2S(w, -46, -46);
      B.tow = { w: w, phase: "fly", t: 0, dur: clamp(dist(sp.dx, sp.dy, a.x, a.y) / (900 * B.k), 0.12, 0.4) * 1000, accum: 0, last: 0, half: 0, strain: 0, hx: sp.dx, hy: sp.dy };
      this.towSnd("harpoon");
      return B.tow;
    },
    towCut: function (quiet) {
      var B = this.tc;
      if (!B.tow) return;
      B.tow = null;
      if (!quiet) this.towSnd("cut");
    },
    towTowing: function (s, ms) {
      var B = this.tc, P = B.P, T = B.tow, sp = B.sp;
      B.walkers.forEach(function (w) { if (!T || T.w !== w) w.bind = Math.max(0, w.bind - s * 0.8); });
      if (!T) return;
      var w = T.w;
      if (!w.ctr || w.state !== "live") { B.tow = null; return; }
      T.t += ms;
      if (T.phase === "fly") {
        if (T.t >= T.dur) {
          T.phase = "tight"; T.t = 0; T.last = Math.atan2(sp.gy - w.gy, sp.x - w.x);
          this.towSnd("clang");
          var a = this.towW2S(w, -46, -46); this.burst(a.x, a.y, 0xffe2b0, 8);
          if (!B.told.hook) { B.told.hook = true; this.toast("Hooked! Now fly circles around its legs until the ring on the snow is full.", 4200); }
        }
        return;
      }
      /* every loop round the legs wraps the cable tighter */
      var ang = Math.atan2(sp.gy - w.gy, sp.x - w.x);
      T.accum += angDiff(ang, T.last); T.last = ang;
      var need = P.loops * TAU, prog = Math.min(1, Math.abs(T.accum) / need);
      w.bind = Math.max(w.bind, prog);
      T.prog = prog;
      var half = Math.floor(Math.abs(T.accum) / Math.PI);
      if (half > T.half) { T.half = half; this.towSnd("wrap", half); }
      if (P.snapMs < 99999 && T.strain >= P.snapMs) {
        B.tow = null; this.towSnd("snap");
        this.toast("The cable snapped! You pulled it too tight. Harpoon the walker again and stay inside the dashed ring.", 4000);
        return;
      }
      if (prog >= 1) this.towTrip(w);
    },
    /* the cable is wrapped: the walker topples */
    towTrip: function (w) {
      var B = this.tc;
      if (!w || w.state !== "live") return;
      B.tow = null;
      w.state = "fall"; w.fallT = 0; w.bind = 1; w.aiming = false;
      B.shots = B.shots.filter(function (sh) { return sh.w !== w; });
      this.towSnd("creak");
      B.trips += 1;
    },
    /* it hits the snow: that walker's letter is the pick */
    towLanded: function (w) {
      var B = this.tc, k = B.k;
      w.state = "down";
      var c = this.towW2S(w, 0, -140);
      this.towSnd("crash");
      try { this.cameras.main.shake(260, 0.008); } catch (e) {}
      B.flashes.push({ x: c.x, y: c.y, r: 160 * w.sc, t: 0, max: 520 });
      this.burst(c.x, c.y, 0xffffff, 26);
      for (var i = 0; i < 14; i++) {
        var q = this.towW2S(w, rnd(-150, 90), rnd(-180, -100));
        this.towPuff(q.x, q.y, rnd(-60, 60) * k, rnd(-60, -10) * k, rnd(0.6, 1.3) * w.sc * 2.2, 0xf4f8fc, 0.9, rnd(900, 1500), 4.9);
      }
      B.emit.push({ x: c.x, y: c.y - 10 * w.sc, rate: 7, acc: 0, until: Infinity, sc: w.sc * 1.8, dark: true, w: w });
      var res = this.answerPick(w.letter, c.x, c.y - 40 * k);
      if (res === "wrong") w.mark = "wrong";
      else if (res === "partial" || res === "done") w.mark = "right";
      if (res !== "ignore") this.towPaint(w);
      return res;
    },

    /* ── the walkers ── */
    towWalkers: function (s, ms) {
      var B = this.tc, self = this, tow = B.tow;
      var march = this._between ? 0 : B.vMarch;
      for (var i = 0; i < B.walkers.length; i++) {
        var w = B.walkers[i];
        if (!w.ctr) continue;
        if (w.state === "enter") {
          w.x -= Math.max(march, 260 * B.k) * s;
          w.walkT += s * 1.2;
          if (w.x <= w.tx) { w.x = w.tx; w.state = "live"; }
        } else if (w.state === "live") {
          var v = march * (tow && tow.w === w ? 0.4 : 1) * (1 - 0.6 * w.bind);
          w.x -= v * s; w.tx -= v * s;
          if (w.pushV > 0) { var d = Math.min(w.pushV * s, w.pushLeft); w.x += d; w.tx += d; w.pushLeft -= d; if (w.pushLeft <= 0) w.pushV = 0; }
          w.walkT += s * 0.42 * (1 - 0.85 * w.bind);
        } else if (w.state === "fall") {
          w.fallT += ms;
          var u = clamp(w.fallT / FALL_MS, 0, 1);
          w.rot = -1.45 * (u < 0.25 ? 0.06 * Math.sin(u / 0.25 * Math.PI * 3) * (1 - u) : (u - 0.25) / 0.75 * (u - 0.25) / 0.75);
          if (u >= 1) { w.rot = -1.45; this.towLanded(w); if (this._finishing) return; }
        }
        w.bob = w.state === "live" || w.state === "enter" ? Math.sin(w.walkT * TAU * 2) * 1.6 : 0;
        if (!w.aiming) w.headA += (Math.sin(B.t * 0.4 + i) * 0.06 - w.headA) * Math.min(1, 3 * s);
      }
      /* the footfalls: one deep thud a step */
      B.stepT += s * 0.84;
      if (B.stepT >= 1) { B.stepT -= 1; if (B.walkers.some(function (w) { return self.towStanding(w); })) this.towSnd("step"); }
    },

    /* ── the guns ── */
    towGuns: function (s, ms) {
      var B = this.tc, P = B.P, sp = B.sp, self = this, k = B.k;
      if (this._between) { B.shots.forEach(function (sh) { sh.w.aiming = false; }); B.shots = []; return; }
      B.fireCd -= s;
      if (B.fireCd <= 0 && B.shots.length < P.shooters) {
        var cands = B.walkers.filter(function (w) {
          if (w.state !== "live" || w.aiming) return false;
          if (B.tow && B.tow.w === w && !P.tetherShoot) return false;
          var m = self.towMuzzle(w);
          return sp.dx < m.x - 20 * k && Math.abs(Math.atan2(sp.dy - m.y, m.x - sp.dx)) < 1.1;   /* the guns only point forward */
        });
        if (cands.length) {
          cands.sort(function (a, b) { return dist(a.x, a.gy, sp.x, sp.gy) - dist(b.x, b.gy, sp.x, sp.gy); });
          var w = cands[Math.random() < 0.7 ? 0 : Math.floor(Math.random() * cands.length)];
          this.towAim(w);
          B.fireCd = P.fireGap * rnd(0.85, 1.15);
        } else B.fireCd = 0.4;
      }
      for (var i = B.shots.length - 1; i >= 0; i--) {
        var sh = B.shots[i], w2 = sh.w;
        if (w2.state !== "live" || !w2.ctr) { w2.aiming = false; B.shots.splice(i, 1); continue; }
        sh.t += ms;
        var m2 = this.towMuzzle(w2);
        if (sh.t < P.warnMs - P.lockMs) {
          var lead = 0;
          if (P.lead) { var dd = dist(m2.x, m2.y, sp.dx, sp.dy), tt = dd / (P.boltSpd * k) + P.lockMs / 1000; lead = P.lead * tt; }
          sh.ax = clamp(sp.dx + sp.vx * lead, 0, this.W); sh.ay = clamp(sp.dy + sp.vy * lead, B.hz, this.H);
        } else if (!sh.locked) { sh.locked = true; this.towSnd("lock"); }
        /* the cab turns toward the aim */
        var want = -clamp(Math.atan2(sh.ay - m2.y, m2.x - sh.ax), -0.45, 0.55);
        w2.headA += (want - w2.headA) * Math.min(1, 6 * s);
        if (sh.t >= P.warnMs) { this.towFire(w2, sh); w2.aiming = false; B.shots.splice(i, 1); if (this._finishing) return; }
      }
    },
    /* a gun starts to glow and aim (a test calls it directly) */
    towAim: function (w) {
      var B = this.tc, sp = B.sp;
      if (!w || w.state !== "live" || w.aiming) return null;
      w.aiming = true;
      var sh = { w: w, t: 0, ax: sp.dx, ay: sp.dy, locked: false };
      B.shots.push(sh);
      this.towSnd("charge");
      if (!B.told.gun) { B.told.gun = true; this.toast("A walker's gun is glowing and a red line points at you: fly out of its way before it fires!", 4200); }
      return sh;
    },
    towFire: function (w, sh) {
      var B = this.tc, P = B.P, k = B.k, m = this.towMuzzle(w);
      var dx = sh.ax - m.x, dy = sh.ay - m.y, d = Math.sqrt(dx * dx + dy * dy) || 1, ux = dx / d, uy = dy / d;
      var offs = P.twin ? [-7 * k, 7 * k] : [0];
      offs.forEach(function (o) {
        B.bolts.push({ x: m.x - uy * o, y: m.y + ux * o, ux: ux, uy: uy, spd: P.boltSpd * k, run: 0, max: d + 70 * k, len: 34 * k });
      });
      B.flashes.push({ x: m.x, y: m.y, r: 22 * k, t: 0, max: 160, col: 0xff8a50 });
      this.towSnd("laser");
    },
    towBolts: function (s, ms) {
      var B = this.tc, sp = B.sp, k = B.k;
      for (var i = B.bolts.length - 1; i >= 0; i--) {
        var b = B.bolts[i], x0 = b.x, y0 = b.y, step = b.spd * s;
        b.x += b.ux * step; b.y += b.uy * step; b.run += step;
        /* the speeder: the bolt's path this frame passes close to it */
        var r = 15 * k * (sp.ds || 1);
        if (!this._between && this.towSegDist(sp.dx, sp.dy, x0, y0, b.x, b.y) < r) {
          B.bolts.splice(i, 1);
          this.towHitSpeeder(b);
          if (this._finishing) return;
          continue;
        }
        if (b.run >= b.max || b.x < -40 || b.x > this.W + 40 || b.y > this.H + 40) {
          B.bolts.splice(i, 1);
          if (b.y > B.hz && b.y < this.H) {
            this.towPuff(b.x, b.y, 0, -30 * k, 0.7 * k, 0xffffff, 0.85, 700, 4.8);
            B.scorch.push({ x: b.x, gy: b.y, r: 14 * k, a: 0.45 });
            B.flashes.push({ x: b.x, y: b.y, r: 18 * k, t: 0, max: 220, col: 0xff9a60 });
            this.towSnd("thump");
          }
        }
      }
    },
    towSegDist: function (px, py, ax, ay, bx, by) {
      var vx = bx - ax, vy = by - ay, l = vx * vx + vy * vy, t = l ? clamp(((px - ax) * vx + (py - ay) * vy) / l, 0, 1) : 0;
      return dist(px, py, ax + vx * t, ay + vy * t);
    },
    towHitSpeeder: function (b) {
      var B = this.tc, sp = B.sp, k = B.k;
      if (this.iframeMs > 0) return false;
      this.burst(sp.dx, sp.dy, 0xff8a50, 18);
      B.flashes.push({ x: sp.dx, y: sp.dy, r: 34 * k, t: 0, max: 300, col: 0xffb070 });
      this.towSnd("hit");
      var hit = this.loseLife("hit", "A WALKER'S CANNON HIT YOU");
      if (hit) {
        B.hits += 1; B.hitQ = true;
        sp.spin = 450; sp.smoke = 2200;
        sp.vx = (b ? b.ux : 0) * 220 * k; sp.vy = (b ? b.uy : 0) * 220 * k;
      }
      return hit;
    },

    /* ── the march: the lead walker's head reaching the generator costs a life ── */
    towMarch: function (s, ms) {
      var B = this.tc, self = this, lead = Infinity;
      if (B.ion > 0) B.ion -= ms;
      B.walkers.forEach(function (w) { if (w.state === "live") lead = Math.min(lead, w.x - 150 * w.sc); });
      if (lead === Infinity) { B.marchF = 0; return; }
      B.marchF = clamp(1 - (lead - B.genX) / B.march0, 0, 1);
      if (B.marchF > 0.75 && !B.told.close && !this._between) { B.told.close = true; this.toast("The walkers are close to the shield generator! Trip the walker with the right letter soon.", 3800); }
      if (lead <= B.genX && !this._between) {
        this.iframeMs = 0;
        this.loseLife("hit", "A WALKER REACHED THE SHIELD GENERATOR");
        if (this._finishing) return;
        this.toast("A walker reached the shield generator! That costs a life. The ion cannon drives the walkers back.", 4200);
        this.towIon();
      }
    },
    towIon: function () {
      var B = this.tc, back = this.W * 0.22;
      B.ion = 900; B.told.close = false;
      B.walkers.forEach(function (w) { if (w.state === "live") { w.pushLeft = back; w.pushV = back / 1.1; } });
      /* nudge them past the line at once so the same walker can't cost two lives */
      B.walkers.forEach(function (w) { if (w.state === "live") { var d = Math.max(0, B.genX + 12 - (w.x - 150 * w.sc)); w.x += d; w.tx += d; } });
      this.towSnd("ion");
    },

    /* ── smoke, snow and sound ── */
    towPuff: function (x, y, vx, vy, sc, tint, a, life, depth) {
      var B = this.tc, p = B.pool.pop();
      if (!p) { if (B.puffs.length > 160) return null; p = { spr: this.add.image(0, 0, "md-towcable-puff") }; }
      p.x = x; p.y = y; p.vx = vx; p.vy = vy; p.sc = sc; p.a = a; p.t = 0; p.life = life;
      p.spr.setVisible(true).setTint(tint).setDepth(depth || 4.9).setPosition(x, y).setScale(sc * 0.4).setAlpha(a);
      B.puffs.push(p);
      return p;
    },
    towSmoke: function (s, ms) {
      var B = this.tc, k = B.k, i, self = this;
      for (i = B.emit.length - 1; i >= 0; i--) {
        var e = B.emit[i];
        if (B.t > e.until) { B.emit.splice(i, 1); continue; }
        e.acc += e.rate * s;
        while (e.acc >= 1) {
          e.acc -= 1;
          if (e.bg) this.towPuff(this.W * e.fx + rnd(-4, 4) * k, B.hz + rnd(-2, 2) * k, rnd(4, 10) * k, -rnd(10, 18) * k, e.sc * k * rnd(0.7, 1.1), 0x5a6270, 0.4, rnd(5000, 7000), 0.5);
          else {
            var ex = e.x, ey = e.y;
            if (e.w && e.w.ctr) { var c = this.towW2S(e.w, rnd(-60, 30), -130); ex = c.x; ey = c.y; }
            this.towPuff(ex + rnd(-8, 8) * k, ey, rnd(-4, 10) * k + this.tc.windA * 0.3, -rnd(26, 40) * k, e.sc * rnd(0.7, 1.1), Math.random() < 0.15 ? 0xff9a50 : 0x3c424b, 0.62, rnd(2600, 3600), 4.95);
          }
        }
      }
      /* the speeder trails smoke for a while after a hit */
      var sp = B.sp;
      if (sp.smoke > 0) { sp.smoke -= ms; if (Math.random() < s * 14) this.towPuff(sp.dx - sp.face * 20 * k, sp.dy, -sp.face * 20 * k, -14 * k, 0.45 * k, 0x4a4f58, 0.6, 900, 4.85); }
      /* snow spray under a fast speeder */
      var sv = Math.sqrt(sp.vx * sp.vx + sp.vy * sp.vy);
      if (sv > 140 * k && Math.random() < s * 16) this.towPuff(sp.x - sp.vx * 0.06, sp.gy, -sp.vx * 0.15, -12 * k, 0.32 * k * (sp.ds || 1), 0xffffff, 0.7, 600, 3 + sp.gy / this.H - 0.001);
      for (i = B.puffs.length - 1; i >= 0; i--) {
        var p = B.puffs[i];
        p.t += ms;
        if (p.t >= p.life) { p.spr.setVisible(false); B.puffs.splice(i, 1); B.pool.push(p); continue; }
        var u = p.t / p.life;
        p.x += (p.vx + B.windA * 0.35) * s; p.y += p.vy * s; p.vy *= 1 - 0.25 * s;
        p.spr.setPosition(p.x, p.y).setScale(p.sc * (0.4 + 0.9 * u)).setAlpha(p.a * (u < 0.15 ? u / 0.15 : 1 - (u - 0.15) / 0.85));
      }
    },
    towSnd: function (name, n) {
      var R = window.SolRealms;
      if (!R || !R.blip) return;
      try {
        if (name === "harpoon") { R.blip(760, 200, 0.2, "square", 0.028); R.hiss(0.22, 2600, 0.04); }
        else if (name === "clang") { R.blip(1900, 1100, 0.14, "triangle", 0.045); R.blip(260, 140, 0.16, "square", 0.02); }
        else if (name === "wrap") { R.blip(420 + Math.min(12, n || 0) * 55, 0, 0.07, "triangle", 0.03); R.hiss(0.08, 3200, 0.015); }
        else if (name === "cut") { R.blip(1400, 500, 0.1, "square", 0.025); R.hiss(0.12, 4000, 0.03); }
        else if (name === "snap") { R.blip(1600, 300, 0.18, "sawtooth", 0.035); R.hiss(0.2, 3500, 0.05); }
        else if (name === "charge") R.blip(180, 520, Math.max(0.3, this.tc.P.warnMs / 1000 * 0.7), "sine", 0.018);
        else if (name === "lock") R.blip(980, 980, 0.06, "square", 0.018);
        else if (name === "laser") { R.blip(1500, 210, 0.24, "sawtooth", 0.034); R.blip(900, 160, 0.2, "square", 0.012, 0.02); }
        else if (name === "thump") { R.hiss(0.3, 520, 0.05); R.blip(120, 50, 0.2, "sine", 0.04); }
        else if (name === "hit") { R.hiss(0.45, 900, 0.08); R.blip(320, 60, 0.35, "sawtooth", 0.05); }
        else if (name === "bump") R.blip(210, 90, 0.1, "square", 0.025);
        else if (name === "step") R.blip(64, 38, 0.24, "sine", 0.05);
        else if (name === "creak") { R.blip(140, 70, 0.8, "sawtooth", 0.03); R.blip(95, 60, 0.7, "square", 0.012, 0.15); }
        else if (name === "crash") { R.blip(85, 30, 1.2, "sawtooth", 0.07); R.hiss(1.3, 300, 0.1); R.hiss(1.6, 1200, 0.04, 0.1); }
        else if (name === "ion") { R.blip(200, 1400, 0.5, "sine", 0.05); R.hiss(0.6, 1800, 0.05, 0.05); }
        else if (name === "wind") R.hiss(2.6, 380 + Math.random() * 200, 0.016);
      } catch (e) {}
    },
    towSounds: function (s, ms) {
      var B = this.tc;
      B.windCd -= ms;
      if (B.windCd <= 0) { B.windCd = 2300 + Math.random() * 1200; this.towSnd("wind"); }
    },

    /* ── drawing every frame ── */
    towDraw: function (s, ms) {
      var B = this.tc, k = B.k, self = this, gG = B.groundG, sp = B.sp, i;
      gG.clear(); B.cableG.clear(); B.fxG.clear(); B.boltG.clear(); B.hudG.clear(); B.squallG.clear(); B.snowG.clear();
      this.towSmoke(s, ms);
      /* scorch marks and shadows on the snow */
      for (i = B.scorch.length - 1; i >= 0; i--) {
        var q = B.scorch[i]; q.a -= s * 0.03;
        if (q.a <= 0) { B.scorch.splice(i, 1); continue; }
        gG.fillStyle(0x4a5664, q.a * 0.6); gG.fillEllipse(q.x, q.gy, q.r * 2, q.r * 0.5);
      }
      B.walkers.forEach(function (w) {
        if (!w.ctr) return;
        var down = w.state === "down" || w.state === "fall";
        gG.fillStyle(0x50688a, 0.22); gG.fillEllipse(w.x - (down ? 120 * w.sc * Math.min(1, -w.rot) : 10 * w.sc), w.gy + 2, (down ? 300 : 210) * w.sc, 30 * w.sc);
      });
      gG.fillStyle(0x50688a, 0.28); gG.fillEllipse(sp.x, sp.gy, 58 * k * sp.ds, 11 * k * sp.ds);
      /* the walkers */
      B.walkers.forEach(function (w) { if (w.ctr) self.towDrawWalker(w); });
      /* the speeder */
      var spin = sp.spin > 0 ? Math.sin(sp.spin / 450 * Math.PI * 3) * 0.5 : 0;
      sp.spr.setPosition(sp.dx, sp.dy).setScale(sp.ds * k * 1.3 / RES).setFlipX(sp.face < 0)
        .setRotation(clamp(sp.vy / (SP_SPD * k), -1, 1) * 0.18 * sp.face + spin).setDepth(3 + sp.gy / this.H);
      this.blink(sp.spr);
      var nz = sp.ds * k * 1.3;
      B.fxG.fillStyle(0xffb46a, 0.55 + 0.3 * Math.random()); B.fxG.fillCircle(sp.dx - sp.face * 37 * nz, sp.dy - 2 * nz, (2.4 + Math.random() * 1.2) * nz);
      B.fxG.fillStyle(0xfff0d0, 0.9); B.fxG.fillCircle(sp.dx - sp.face * 37 * nz, sp.dy - 2 * nz, 1.2 * nz);
      this.towDrawCable();
      this.towDrawGuns();
      this.towDrawFx(s, ms);
      this.towDrawHud();
    },
    towDrawWalker: function (w) {
      var B = this.tc, sp = B.sp, b = w.bob || 0;
      w.ctr.setPosition(w.x, w.gy).setScale(w.sc).setRotation(w.rot).setDepth(3 + w.gy / this.H);
      w.hull.setY(-212 + b); w.head.setPosition(HEAD_X, HEAD_Y + b).setRotation(w.headA);
      var ts = Math.max(1, 23 / (40 * w.sc));
      w.txt.setPosition(PLATE[0], PLATE[1] + b).setScale(ts).setRotation(-w.rot);
      /* legs: far pair darker, behind the hull; near pair in front */
      var gF = w.legF, gN = w.legN;
      gF.clear(); gN.clear();
      for (var i = 0; i < 4; i++) {
        var near = i < 2, front = i % 2 === 0, g = near ? gN : gF;
        var phase = (w.walkT + ((i === 0 || i === 3) ? 0 : 0.5)) % 1;
        var base = (front ? -50 : 48) * (1 - 0.32 * w.bind) + (near ? 0 : 7);
        var stride = 15 * (1 - w.bind), fx, lift;
        if (w.state === "fall" || w.state === "down") { fx = base * 0.7; lift = 0; }
        else if (phase < 0.62) { fx = base - stride / 2 + stride * (phase / 0.62); lift = 0; }
        else { var v = (phase - 0.62) / 0.38; fx = base + stride / 2 - stride * v; lift = Math.sin(Math.PI * v) * 9; }
        var footY = near ? 6 : -7, hipX = base + (front ? 2 : -2), hipY = HIP_Y + b + (near ? 3 : -3);
        var ax = fx, ay = footY - 12 - lift, kx = (hipX + ax) / 2 + 10 + lift * 0.3, ky = (hipY + ay) / 2 - 2;
        var O = near ? 0x262d36 : 0x1f252d, F = near ? 0x808a97 : 0x59626e, Hh = near ? 0xb8c2cd : 0x78818c, D2 = near ? 0x5d6774 : 0x434b56;
        /* the thigh: a thick armored strut */
        g.lineStyle(26, O, 1); g.lineBetween(hipX, hipY, kx, ky);
        g.lineStyle(21, F, 1); g.lineBetween(hipX, hipY, kx, ky);
        g.lineStyle(5, Hh, 0.85); g.lineBetween(hipX - 6, hipY + 2, kx - 7, ky);
        /* the shin: a tapered plate, wide under the knee */
        var sx = ax - kx, sy = ay - ky, sl = Math.sqrt(sx * sx + sy * sy) || 1, nx = -sy / sl, ny = sx / sl;
        var shin = [{ x: kx + nx * 11, y: ky + ny * 11 }, { x: ax + nx * 7, y: ay + ny * 7 }, { x: ax - nx * 7, y: ay - ny * 7 }, { x: kx - nx * 11, y: ky - ny * 11 }];
        g.fillStyle(F, 1); g.fillPoints(shin, true);
        g.fillStyle(D2, 1); g.fillPoints([shin[0], shin[1], { x: ax + nx * 2, y: ay + ny * 2 }, { x: kx + nx * 3, y: ky + ny * 3 }], true);
        g.lineStyle(2.5, O, 1); g.strokePoints(shin, true);
        g.lineStyle(2, Hh, 0.7); g.lineBetween(kx - nx * 7, ky - ny * 7 + 6, ax - nx * 4, ay - ny * 4 - 2);
        /* the knee */
        g.fillStyle(O, 1); g.fillCircle(kx, ky, 14); g.fillStyle(F, 1); g.fillCircle(kx, ky, 11.5);
        g.fillStyle(D2, 1); g.fillCircle(kx + 1.5, ky + 1.5, 6); g.fillStyle(Hh, 0.95); g.fillCircle(kx - 4, ky - 4, 3.5);
        if (near) { g.fillStyle(O, 1); g.fillCircle(hipX, hipY, 14); g.fillStyle(F, 1); g.fillCircle(hipX, hipY, 11); g.fillStyle(D2, 1); g.fillCircle(hipX, hipY, 5); }
        /* the foot: a broad round pad */
        var fy = footY - lift;
        g.fillStyle(O, 1); g.fillPoints([{ x: ax - 10, y: ay - 3 }, { x: ax + 10, y: ay - 3 }, { x: ax + 21, y: fy }, { x: ax - 21, y: fy }], true);
        g.fillStyle(F, 1); g.fillPoints([{ x: ax - 8, y: ay - 1 }, { x: ax + 8, y: ay - 1 }, { x: ax + 18, y: fy - 2.5 }, { x: ax - 18, y: fy - 2.5 }], true);
        g.fillStyle(Hh, 0.8); g.fillRect(ax - 7, ay - 1, 14, 2);
        g.fillStyle(0xf4f8fc, near ? 0.95 : 0.65); g.fillRect(ax - 20, fy - 2, 40, 3);   /* snow on the pad */
        /* a puff of snow where a foot comes down */
        if (near && w.ctr.visible && (w.state === "live" || w.state === "enter")) {
          var lp = w.lastPh ? w.lastPh[i] : null;
          if (!w.lastPh) w.lastPh = [];
          w.lastPh[i] = phase;
          if (lp != null && lp > 0.9 && phase < 0.1) { var fp = this.towW2S(w, ax, footY); this.towPuff(fp.x, fp.y, 0, -14 * B.k, 0.55 * w.sc * 1.6, 0xffffff, 0.8, 800, 3 + w.gy / this.H + 0.0004); }
        }
      }
      /* the cable wrapped round the legs: bands coil up as the loops add up */
      var cB = w.coilB, cF = w.coilF;
      cB.clear(); cF.clear();
      var T = B.tow, half = 0;
      if (T && T.w === w && T.phase === "tight") half = Math.floor(Math.abs(T.accum) / Math.PI);
      else if (w.state === "fall" || w.state === "down") half = w.halfDone || 0;
      if (T && T.w === w) w.halfDone = half;
      for (var j = 0; j < half; j++) {
        var yb = -48 - Math.floor(j / 2) * 10 + b * 0.5, gg = j % 2 === 0 ? cB : cF, off = j % 2 === 0 ? -4 : 3;
        gg.lineStyle(7, 0x15191e, 1); gg.lineBetween(-70, yb + off, 68, yb + off + 1);
        gg.lineStyle(3.2, 0xdfe7ee, 1); gg.lineBetween(-70, yb + off - 0.8, 68, yb + off + 0.2);
      }
    },
    towDrawCable: function () {
      var B = this.tc, T = B.tow, sp = B.sp, k = B.k, g = B.cableG;
      if (!T) return;
      var w = T.w, nz = sp.ds * k * 1.3;
      var mx = sp.dx - sp.face * 34 * nz, my = sp.dy + 7 * nz;   /* the harpoon gun under the tail */
      var a;
      if (T.phase === "fly") {
        var u = clamp(T.t / T.dur, 0, 1), tgt = this.towW2S(w, -46, -46);
        a = { x: mx + (tgt.x - mx) * u, y: my + (tgt.y - my) * u - Math.sin(Math.PI * u) * 10 * k };
        g.setDepth(4.95);
        g.lineStyle(2, 0x1c2026, 0.9); g.lineBetween(mx, my, a.x, a.y);
        g.fillStyle(0xe8eef4, 1); g.fillCircle(a.x, a.y, 3 * k);
        g.lineStyle(2, 0x1c2026, 1); g.strokeCircle(a.x, a.y, 3 * k);
        return;
      }
      /* from the coil (or the harpoon in the front leg) to the speeder */
      var half = Math.floor(Math.abs(T.accum) / Math.PI);
      if (half === 0) a = this.towW2S(w, -46, -46);
      else { var yb = -48 - Math.floor((half - 1) / 2) * 10; a = this.towW2S(w, sp.x < w.x ? -70 : 68, yb); }
      var behind = sp.gy < w.gy;
      g.setDepth(behind ? 3 + w.gy / this.H - 0.0005 : 3 + Math.max(w.gy, sp.gy) / this.H + 0.0005);
      var taut = T.strain > 0;
      g.lineStyle(3.2 * Math.max(0.7, k), 0x1c2026, 1); g.lineBetween(a.x, a.y, mx, my);
      g.lineStyle(1.3 * Math.max(0.7, k), taut ? 0xffd0a0 : 0xd8e2ec, 0.95); g.lineBetween(a.x, a.y, mx, my);
      var h = this.towW2S(w, -46, -46); g.fillStyle(0x1c2026, 1); g.fillCircle(h.x, h.y, 3.2 * w.sc * 1.6);
    },
    towDrawGuns: function () {
      var B = this.tc, P = B.P, k = B.k, fx = B.fxG, bg = B.boltG, self = this;
      B.shots.forEach(function (sh) {
        var m = self.towMuzzle(sh.w), u = clamp(sh.t / P.warnMs, 0, 1), pulse = 0.5 + 0.5 * Math.sin(sh.t * 0.03);
        /* the muzzle glow, growing */
        fx.fillStyle(0xff5a2a, 0.25 + 0.35 * u); fx.fillCircle(m.x, m.y, (6 + 10 * u) * k);
        fx.fillStyle(0xffd2b0, 0.6 + 0.4 * pulse * u); fx.fillCircle(m.x, m.y, (2 + 3 * u) * k);
        /* the aiming line: dotted while it follows you, solid once it locks */
        var dx = sh.ax - m.x, dy = sh.ay - m.y, d = Math.sqrt(dx * dx + dy * dy) || 1, n = Math.floor(d / (11 * k)), j;
        if (sh.locked) {
          fx.lineStyle(3 * k, 0xff3a1a, 0.25); fx.lineBetween(m.x, m.y, sh.ax, sh.ay);
          fx.lineStyle(1.4 * k, 0xff5a3a, 0.85); fx.lineBetween(m.x, m.y, sh.ax, sh.ay);
        } else for (j = 1; j < n; j++) { fx.fillStyle(0xff4a26, 0.35 + 0.45 * u); fx.fillCircle(m.x + dx * j / n, m.y + dy * j / n, 1.6 * k); }
        /* the reticle where it will strike */
        var rr = (26 - 12 * u) * k;
        fx.lineStyle(2 * k, 0xff4a26, 0.6 + 0.4 * u); fx.strokeCircle(sh.ax, sh.ay, rr);
        fx.lineBetween(sh.ax - rr - 6 * k, sh.ay, sh.ax - rr + 5 * k, sh.ay); fx.lineBetween(sh.ax + rr - 5 * k, sh.ay, sh.ax + rr + 6 * k, sh.ay);
        fx.lineBetween(sh.ax, sh.ay - rr - 6 * k, sh.ax, sh.ay - rr + 5 * k); fx.lineBetween(sh.ax, sh.ay + rr - 5 * k, sh.ax, sh.ay + rr + 6 * k);
      });
      /* the bolts in flight: a red glow round a hot white core */
      B.bolts.forEach(function (b) {
        var tx = b.x - b.ux * b.len, ty = b.y - b.uy * b.len;
        bg.lineStyle(9 * k, 0xff3a1a, 0.22); bg.lineBetween(tx, ty, b.x, b.y);
        bg.lineStyle(5 * k, 0xff4a26, 0.65); bg.lineBetween(tx, ty, b.x, b.y);
        bg.lineStyle(2 * k, 0xfff0e0, 1); bg.lineBetween(tx + b.ux * 4 * k, ty + b.uy * 4 * k, b.x, b.y);
      });
    },
    towDrawFx: function (s, ms) {
      var B = this.tc, k = B.k, W = this.W, H = this.H, fx = B.fxG, i;
      for (i = B.flashes.length - 1; i >= 0; i--) {
        var f = B.flashes[i]; f.t += ms;
        if (f.t >= f.max) { B.flashes.splice(i, 1); continue; }
        var u = f.t / f.max;
        fx.fillStyle(f.col || 0xfff4e0, 0.6 * (1 - u)); fx.fillCircle(f.x, f.y, f.r * (0.4 + 0.8 * u));
      }
      /* the ion cannon's blast down the plain from the generator */
      if (B.ion > 0) {
        var a = B.ion / 900;
        fx.lineStyle(26 * k * a, 0x7fd8ff, 0.35 * a); fx.lineBetween(B.genX, B.hz + 10 * k, W, B.hz + 60 * k);
        fx.lineStyle(7 * k * a, 0xeaffff, 0.9 * a); fx.lineBetween(B.genX, B.hz + 10 * k, W, B.hz + 60 * k);
      }
      /* snow squalls: drifting curtains of blowing snow */
      var sq = B.squallG;
      B.squalls.forEach(function (q, j) {
        q.x += q.vx * s + B.windA / W * s * 0.5; if (q.x > 1.15) q.x = -0.15; if (q.x < -0.15) q.x = 1.15;
        var cx = q.x * W, cy = B.sTop + (B.sBot - B.sTop) * q.y, rx = 130 * k, ry = 70 * k;
        for (var m = 0; m < 6; m++) {
          var ox = Math.sin(B.t * 0.7 + m * 1.7 + q.ph) * 22 * k, oy = Math.cos(B.t * 0.5 + m * 2.3 + q.ph) * 10 * k, sc = 1 - m * 0.13;
          sq.fillStyle(0xf6f9fc, 0.2); sq.fillEllipse(cx + ox, cy - 34 * k + oy, rx * 2 * sc, ry * 2.4 * sc);
        }
        /* blowing snow: streaks racing through it */
        for (m = 0; m < 26; m++) {
          var span = rx * 2.2, sx = cx - span / 2 + ((m * 47 + B.t * (150 + (m % 5) * 30) * k) % span), sy = cy - 80 * k + ((m * 53) % (ry * 2.2)), fade = 1 - Math.abs(sx - cx) / (span / 2);
          sq.lineStyle(1.6, 0xffffff, 0.85 * fade); sq.lineBetween(sx, sy, sx + 26 * k, sy + 5 * k);
          sq.lineStyle(1, 0x9fb6cf, 0.35 * fade); sq.lineBetween(sx, sy + 1.5, sx + 26 * k, sy + 6.5 * k);
        }
      });
      /* falling snow, blown by the wind */
      var sg = B.snowG, wn = B.windA / Math.max(1, 60 * k);
      B.flakes.forEach(function (f) {
        f.y += s * (0.05 + 0.09 * f.z); f.x += s * (0.012 * Math.sin(B.t * 1.3 + f.ph) + wn * 0.05 * (0.5 + f.z));
        if (f.y > 1) { f.y -= 1; f.x = Math.random(); } if (f.x > 1) f.x -= 1; if (f.x < 0) f.x += 1;
        sg.fillStyle(0xffffff, 0.45 + 0.45 * f.z); sg.fillCircle(f.x * W, f.y * H, 0.8 + 2.2 * f.z * k);
      });
    },
    towDrawHud: function () {
      var B = this.tc, P = B.P, k = B.k, g = B.hudG, W = this.W, H = this.H, sp = B.sp, self = this;
      /* the cockpit's corner brackets */
      var cl = 26 * k, cm = 8;
      g.lineStyle(2, 0x2a5a80, 0.5);
      [[cm, cm + 48, 1, 1], [W - cm, cm + 48, -1, 1], [cm, H - cm, 1, -1], [W - cm, H - cm, -1, -1]].forEach(function (q) {
        g.lineBetween(q[0], q[1], q[0] + q[2] * cl, q[1]); g.lineBetween(q[0], q[1], q[0], q[1] + q[3] * cl);
      });
      /* the march: how close the lead walker is to the shield generator */
      var gb = B.genBar, bh = 9 * Math.max(0.8, k), f = B.marchF;
      g.fillStyle(0x0c1a2a, 0.55); g.fillRect(gb.x0 - 3, gb.y - 3, gb.x1 - gb.x0 + 6, bh + 6);
      g.fillStyle(f > 0.75 ? 0xff5a3a : 0xffb060, f > 0.75 && Math.floor(B.t * 5) % 2 ? 0.6 : 0.95); g.fillRect(gb.x0, gb.y, (gb.x1 - gb.x0) * f, bh);
      g.lineStyle(1.5, HUDN, 0.8); g.strokeRect(gb.x0 - 3, gb.y - 3, gb.x1 - gb.x0 + 6, bh + 6);
      g.fillStyle(0x7fd8ff, 1); g.fillCircle(gb.x0 - 1, gb.y + bh / 2, 4);
      /* the generator line on the snow, near the trench */
      g.lineStyle(1.5, 0x7fd8ff, 0.35 + (f > 0.75 ? 0.4 * Math.abs(Math.sin(B.t * 5)) : 0));
      for (var yy = B.gTop - 30 * k; yy < H - 8; yy += 14) g.lineBetween(B.genX, yy, B.genX, yy + 7);
      /* the wind */
      B.txWind.setVisible(!!P.wind);
      if (P.wind) {
        var wn = B.windA / (P.wind * k), nCh = Math.round(Math.abs(wn) * 3), wx = W - 84 * k, wy = B.hudY;
        for (var i = 0; i < 3; i++) {
          var x = wx + 10 * k + i * 13 * k, on = i < nCh;
          g.fillStyle(HUDN, on ? 0.95 : 0.2);
          if (wn >= 0) g.fillTriangle(x + 6 * k, wy, x - 4 * k, wy - 6 * k, x - 4 * k, wy + 6 * k);
          else g.fillTriangle(x - 6 * k, wy, x + 4 * k, wy - 6 * k, x + 4 * k, wy + 6 * k);
        }
      }
      /* the target box on the walker the harpoon would hit */
      var lk = B.lock;
      B.txLock.setVisible(!!lk && !this._between);
      if (lk && !this._between) {
        var x0 = lk.x - 168 * lk.sc, x1 = lk.x + 100 * lk.sc, y0 = lk.gy - 196 * lk.sc, y1 = lk.gy + 14 * lk.sc, c = 16 * k, pl = 0.75 + 0.25 * Math.sin(B.t * 8);
        [[5, 0x0c1a2a, 0.55], [2.5, HUDN, pl]].forEach(function (st) {
          g.lineStyle(st[0] * Math.max(0.8, k), st[1], st[2]);
          [[x0, y0, 1, 1], [x1, y0, -1, 1], [x0, y1, 1, -1], [x1, y1, -1, -1]].forEach(function (q) { g.lineBetween(q[0], q[1], q[0] + q[2] * c, q[1]); g.lineBetween(q[0], q[1], q[0], q[1] + q[3] * c); });
        });
        B.txLock.setText("HARPOON LOCK · " + lk.letter).setPosition((x0 + x1) / 2, y0 - 4);
        var hx = lk.x - 46 * lk.sc, hy = lk.gy - 46 * lk.sc, ddx = hx - sp.dx, ddy = hy - sp.dy, dd = Math.sqrt(ddx * ddx + ddy * ddy) || 1, nd = Math.floor(dd / (9 * k));
        for (var di = 1; di < nd; di++) { g.fillStyle(0x0c1a2a, 0.35); g.fillCircle(sp.dx + ddx * di / nd, sp.dy + ddy * di / nd, 2.2 * k); g.fillStyle(HUDN, 0.8); g.fillCircle(sp.dx + ddx * di / nd, sp.dy + ddy * di / nd, 1.3 * k); }
      }
      /* the harpoon's range round the speeder (faint), and OUT OF RANGE after a miss */
      if (!B.tow && !lk) { g.lineStyle(3, 0x0c1a2a, 0.12); g.strokeEllipse(sp.x, sp.gy, P.range * k * 2, P.range * k * 2); g.lineStyle(1.2, HUDN, 0.45); g.strokeEllipse(sp.x, sp.gy, P.range * k * 2, P.range * k * 2); }
      if (B.rangeMs > 0) B.rangeMs -= this.game.loop.delta || 16;
      B.txRange.setVisible(B.rangeMs > 0 && !lk).setPosition(sp.dx, sp.dy - 22 * k);
      /* the wrap ring round the hooked walker's feet */
      var T = B.tow;
      B.txWrap.setVisible(!!T && T.phase === "tight");
      if (T && T.phase === "tight") {
        var w = T.w, rx = 104 * w.sc, ry = 32 * w.sc, prog = T.prog || 0, pts = [], n = 48, j;
        g.lineStyle(5 * Math.max(0.8, k), 0x0c1a2a, 0.35); g.strokeEllipse(w.x, w.gy, rx * 2, ry * 2);
        for (j = 0; j <= Math.round(n * prog); j++) { var an = -Math.PI / 2 + (T.accum < 0 ? -1 : 1) * TAU * j / n; pts.push({ x: w.x + Math.cos(an) * rx, y: w.gy + Math.sin(an) * ry }); }
        if (pts.length > 1) { g.lineStyle(4.5 * Math.max(0.8, k), OK, 0.95); g.strokePoints(pts); }
        B.txWrap.setText("WRAP " + Math.floor(prog * 100) + "%").setPosition(w.x, w.gy + ry + 4 * k);
        /* the cable's reach: dashed, and only where it can snap */
        if (P.snapMs < 99999) {
          var cl2 = P.cable * k, tight = T.strain > P.snapMs * 0.25;
          for (j = 0; j < 48; j += 2) {
            var a0 = TAU * j / 48, a1 = TAU * (j + 1) / 48, p0x = w.x + Math.cos(a0) * cl2, p0y = w.gy + Math.sin(a0) * cl2, p1x = w.x + Math.cos(a1) * cl2, p1y = w.gy + Math.sin(a1) * cl2;
            g.lineStyle(4, 0x0c1a2a, 0.25); g.lineBetween(p0x, p0y, p1x, p1y);
            g.lineStyle(2, tight ? 0xff7a3a : HUDN, tight ? 0.6 + 0.4 * Math.abs(Math.sin(B.t * 12)) : 0.6); g.lineBetween(p0x, p0y, p1x, p1y);
          }
        }
        if (!B.told.circle && prog < 0.05 && T.t > 2600) { B.told.circle = true; this.toast("Fly round and round the walker's legs: the green ring on the snow fills as the cable wraps.", 4200); }
      }
    },

    /* a right answer: the guns go quiet, the bolts vanish, the cable comes free; the walkers stay until the next question */
    clear_towcable: function () {
      var B = this.tc;
      B.shots.forEach(function (sh) { sh.w.aiming = false; });
      B.shots = []; B.bolts = [];
      B.tow = null;
      try { B.fxG.clear(); B.boltG.clear(); B.cableG.clear(); } catch (e) {}
    }
  });
})();
