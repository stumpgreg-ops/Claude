/* SOL Labyrinth v5.21 — the Lit and Film mode "speeder": Forest Chase (Return of the Jedi, 1983; genre SCIFI, strand JEDI).
 *
 * A hover-bike chase at full speed through a forest of giant redwood-like trees, in pseudo-3D from behind the rider
 * (a road-racer projection: x across the forest, z ahead, y up; the camera rides CAM_BACK behind the bike at CAM_H).
 * Green-gold forest light: shafts of sun through the canopy, a bright haze at the horizon, ferns and moss, motion
 * blur (ghost trunks and speed streaks) when the bike is fast.
 *
 * Scout bikes ride ahead of you, each carrying a glowing letter plate. Their distance ahead swells and shrinks, so
 * they come back to you now and then; ▲ speeds you up to catch one, ▼ lets one come back. Pull alongside the scout
 * with the right letter and steer into it: the bump knocks it out of control and it careens into the next trunk on
 * that side (answerPick). The blaster (Space / FIRE / mouse button) can bring a scout down too, but it takes several
 * hits (hp) and overheats when held down. A wrong letter knocked down costs a life (and that letter is gone).
 * Red-striped gunner scouts (no letter) hang back ahead and fire: the gun glows, then a red bolt comes back at you
 * and a red ring on the ground shows where it will cross; get out of the ring. Knocking a gunner
 * down pays a bonus. Hazards (each costs a life, each avoidable): a trunk, a bolt, fallen logs across the floor
 * (from 21, steer through the gap), swinging log traps (from 71, time your pass). Scouts jink away when you pull
 * alongside (from 31: corner them against the trees), gunners lead their shots (41), mist (51), armored scouts and
 * lettered scouts that shoot back (61), a third gunner (81), five-hit scouts (91). speederParams sets one curve.
 *
 * The forest is generated in rows ahead of you around a guaranteed open line (pathX) that never moves sideways faster
 * than a bike can steer, so every row can be passed. Registered with SolModes.extend; the methods below are copied
 * onto ModeScene, so `this` is the mode scene. Every texture is drawn once (canvasTex) under an "md-speeder-" key.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var lib = M.lib, clamp = lib.clamp, rnd = lib.rnd, shuffle = lib.shuffle, canvasTex = lib.canvasTex;
  var TAU = Math.PI * 2;

  /* the world (units ≈ metres): the player's lane is -XR..XR; a wall of trunks stands at ±EDGE */
  var XR = 5.0, EDGE = 6.9, SC_LAT = 5.0, ZFAR = 92, CAM_BACK = 5, CAM_H = 2.8, HOVER = 0.34;
  var BIKE_HW = 0.42, ALONG = 1.7, BIKE_WU = 1.3;       /* a bike's half width for hits; how close in z counts as alongside; the texture's width */
  var STEER = 6.8, STEER_ACC = 30, BOOST = 1.45, BRAKE = 0.6;
  var FOG_LV = 5;                                        /* the trunk textures come in five depths of haze */
  var HAZE = "#e6e0a2", HAZE_RGB = [230, 224, 162];
  var BT_W = 240, BT_H = 270;                            /* the bike textures */

  /* ── difficulty: one curve for every level 1-100, each level harder than the one before ── */
  function speederParams(n) {
    n = clamp(Math.floor(Number(n) || 1), 1, 100);
    return {
      speed: 19 + n * 0.18,                                       /* cruising speed, units a second: 19.2 at 1, 37 at 100 */
      rowGap: 16 - n * 0.08,                                      /* units between rows of trunks: 15.9 → 8 */
      trees: 0.9 + n * 0.017,                                     /* trunks a row in the lane: 0.92 → 2.6 */
      fog: 80 - n * 0.16 - (n >= 51 ? 16 : 0),                    /* how far you can see: 80 → 64 at 50; the mist at 51 → 48 at 100 */
      weave: 2.2 + n * 0.035,                                     /* how fast the scouts weave across, units a second */
      fireMs: Math.max(1150, 4800 - n * 36.5),                    /* ms between the pack's shots: 4.76 s → 1.15 s */
      chargeMs: 1150 - n * 5,                                     /* the gun glows this long before a shot */
      boltRel: 14 + n * 0.21,                                     /* a bolt's closing speed */
      aimLead: n >= 41 ? Math.min(1, 0.35 + (n - 41) * 0.011) : 0, /* gunners aim where you are going (share of your sideways speed) */
      gunners: n >= 81 ? 3 : n >= 11 ? 2 : 1,
      hp: n >= 91 ? 5 : n >= 61 ? 4 : 3,                          /* blaster hits to bring a scout down */
      heat: 0.16 + n * 0.0016,                                    /* blaster heat a shot (1 = overheated) */
      cool: 0.5 - n * 0.0015,                                     /* heat lost a second */
      jink: n >= 31 ? Math.min(0.9, 0.35 + (n - 31) * 0.008) : 0, /* chance a scout swerves away when you pull alongside */
      logs: n >= 21 ? 0.5 + (n - 21) * 0.012 : 0,                 /* fallen logs every 100 units */
      logGap: n >= 21 ? 4 - (n - 21) * 0.02 : 99,                 /* the gap to steer through */
      letterFire: n >= 61 ? 0.25 + (n - 61) * 0.012 : 0,          /* share of shots fired by the lettered scouts */
      traps: n >= 71 ? 0.45 + (n - 71) * 0.02 : 0,                /* swinging log traps every 100 units */
      trapSpd: n >= 71 ? 1.1 + (n - 71) * 0.012 : 0               /* their swing, radians a second */
    };
  }

  /* ── sound: short effects on the realm kit's WebAudio blips ── */
  function sfx(name, arg) {
    var R = window.SolRealms;
    if (!R || !R.blip) return;
    try {
      if (name === "pew") { R.blip(1500, 380, 0.11, "sawtooth", 0.022); }
      else if (name === "enemy") { R.blip(820, 180, 0.2, "square", 0.02); }
      else if (name === "charge") { R.blip(300, 900, Math.max(0.3, arg || 0.8), "sine", 0.018); }
      else if (name === "bump") { R.blip(170, 80, 0.14, "triangle", 0.07); R.hiss && R.hiss(0.12, 900, 0.05); }
      else if (name === "crash") { R.hiss && R.hiss(0.7, 380, 0.09); R.blip(120, 40, 0.55, "sawtooth", 0.05); }
      else if (name === "tree") { R.blip(150, 55, 0.32, "triangle", 0.08); R.hiss && R.hiss(0.25, 600, 0.06); }
      else if (name === "zap") { R.blip(600, 200, 0.2, "square", 0.04); R.hiss && R.hiss(0.2, 2400, 0.05); }
      else if (name === "whoosh") { R.hiss && R.hiss(0.22, 1700 + Math.random() * 600, 0.022); }
      else if (name === "hot") { R.blip(220, 160, 0.25, "square", 0.025); }
    } catch (e) {}
  }

  /* ── art: drawn once ── */
  function rgba(r, g, b, a) { return "rgba(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + "," + a + ")"; }
  function mixRGB(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }
  function hexRGB(h) { var v = parseInt(h.slice(1), 16); return [(v >> 16) & 255, (v >> 8) & 255, v & 255]; }
  function fogged(h, t) { var c = mixRGB(hexRGB(h), HAZE_RGB, t); return rgba(c[0], c[1], c[2], 1); }
  function seeded(seed) { var s = seed >>> 0; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

  /* the backdrop: canopy, the bright haze at the horizon, the forest floor */
  function drawBackdrop(hyR) {
    return function (c, w, h) {
      var hy = h * hyR, g = c.createLinearGradient(0, 0, 0, h), R = seeded(7), i;
      g.addColorStop(0, "#0b1f0e"); g.addColorStop(0.16, "#1b3a1a"); g.addColorStop(hyR * 0.72, "#5d7c3a");
      g.addColorStop(hyR - 0.02, "#d2d48e"); g.addColorStop(hyR, HAZE); g.addColorStop(hyR + 0.025, "#a8b46c");
      g.addColorStop(hyR + 0.12, "#5c6e30"); g.addColorStop(0.8, "#34461c"); g.addColorStop(1, "#1a2810");
      c.fillStyle = g; c.fillRect(0, 0, w, h);
      /* the sun low in the haze, upper left of centre */
      var sg = c.createRadialGradient(w * 0.38, hy - h * 0.05, 4, w * 0.38, hy - h * 0.05, h * 0.42);
      sg.addColorStop(0, "rgba(255,248,205,0.85)"); sg.addColorStop(0.25, "rgba(250,236,160,0.35)"); sg.addColorStop(1, "rgba(250,236,160,0)");
      c.fillStyle = sg; c.fillRect(0, 0, w, h);
      /* the canopy: dark leaf masses with gold flecks of sky */
      for (i = 0; i < 70; i++) {
        var x = R() * w, y = R() * h * 0.2 - h * 0.03, r = (14 + R() * 46) * h / 700;
        c.fillStyle = "rgba(" + (8 + R() * 14) + "," + (26 + R() * 24) + "," + (10 + R() * 12) + "," + (0.55 + R() * 0.4) + ")";
        c.beginPath(); c.ellipse(x, y, r * 1.6, r, R() * 3, 0, TAU); c.fill();
      }
      for (i = 0; i < 140; i++) {
        var fx = R() * w, fy = R() * h * 0.24, fr = (0.8 + R() * 2.4) * h / 700;
        c.fillStyle = "rgba(255," + (220 + R() * 30) + ",140," + (0.25 + R() * 0.5) + ")";
        c.beginPath(); c.arc(fx, fy, fr, 0, TAU); c.fill();
      }
      /* moss texture on the floor */
      for (i = 0; i < 900; i++) {
        var gy = hy + Math.pow(R(), 0.7) * (h - hy), gx = R() * w, d = (gy - hy) / (h - hy);
        c.fillStyle = R() < 0.5 ? "rgba(20,34,10," + (0.12 + d * 0.2) + ")" : "rgba(150,170,70," + (0.05 + d * 0.08) + ")";
        c.fillRect(gx, gy, (2 + R() * 10) * (0.3 + d), 1 + d * 2);
      }
    };
  }
  /* distant trunks in the haze (a tiling strip); near: darker and wider */
  function drawFarTrees(near) {
    return function (c, w, h) {
      var R = seeded(near ? 31 : 17), n = near ? 15 : 30, i, k;
      for (i = 0; i < n; i++) {
        var x = R() * w, tw = near ? 18 + R() * 30 : 6 + R() * 14, t = near ? 0.35 + R() * 0.2 : 0.6 + R() * 0.25;
        var col = mixRGB([92, 52, 30], HAZE_RGB, t);
        for (k = -1; k <= 1; k++) {
          var xx = x + k * w, g = c.createLinearGradient(xx - tw / 2, 0, xx + tw / 2, 0);
          g.addColorStop(0, rgba(col[0] + 30, col[1] + 26, col[2] + 10, 1)); g.addColorStop(0.45, rgba(col[0], col[1], col[2], 1)); g.addColorStop(1, rgba(col[0] - 14, col[1] - 10, col[2] - 6, 1));
          c.fillStyle = g; c.fillRect(xx - tw / 2, 0, tw, h);
          c.fillStyle = rgba(col[0] - 10, col[1] - 6, col[2] - 4, 1);
          c.beginPath(); c.moveTo(xx - tw * 0.5, h); c.quadraticCurveTo(xx - tw * 0.5, h * 0.94, xx - tw * 0.9, h); c.closePath(); c.fill();
          c.beginPath(); c.moveTo(xx + tw * 0.5, h); c.quadraticCurveTo(xx + tw * 0.5, h * 0.94, xx + tw * 0.9, h); c.closePath(); c.fill();
        }
      }
      /* the bottom melts into the haze */
      var hg = c.createLinearGradient(0, h * 0.55, 0, h);
      hg.addColorStop(0, rgba(HAZE_RGB[0], HAZE_RGB[1], HAZE_RGB[2], 0)); hg.addColorStop(1, rgba(HAZE_RGB[0], HAZE_RGB[1], HAZE_RGB[2], near ? 0.55 : 0.8));
      c.fillStyle = hg; c.fillRect(0, 0, w, h);
    };
  }
  /* a giant trunk: red-brown bark with deep vertical furrows, gold light on the left, shade on the right */
  function drawTrunk(v, fogT) {
    return function (c, w, h) {
      var R = seeded(101 + v * 17), g = c.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, fogged("#c47a3e", fogT)); g.addColorStop(0.08, fogged("#a1542c", fogT)); g.addColorStop(0.35, fogged(v ? "#7a3d22" : "#83432a", fogT));
      g.addColorStop(0.75, fogged("#4f2414", fogT)); g.addColorStop(1, fogged("#2c130b", fogT));
      c.fillStyle = g; c.fillRect(0, 0, w, h);
      /* furrows: long wavy dark strips and light ridges */
      for (var i = 0; i < 16; i++) {
        var x = 4 + R() * (w - 8), wd = 1.5 + R() * 4, dark = i % 3 !== 0;
        c.strokeStyle = dark ? rgba(30, 12, 6, (0.45 + R() * 0.35) * (1 - fogT * 0.75)) : rgba(220, 150, 100, (0.18 + R() * 0.2) * (1 - fogT * 0.6));
        c.lineWidth = wd; c.beginPath(); c.moveTo(x, 0);
        for (var y = 0; y <= h; y += 32) c.lineTo(x + Math.sin(y * 0.02 + i) * 2.5 + (R() - 0.5) * 2, y);
        c.stroke();
      }
      /* the sunlit rim */
      var rg = c.createLinearGradient(0, 0, w * 0.18, 0);
      rg.addColorStop(0, rgba(255, 214, 140, 0.55 * (1 - fogT * 0.5))); rg.addColorStop(1, "rgba(255,214,140,0)");
      c.fillStyle = rg; c.fillRect(0, 0, w * 0.18, h);
    };
  }
  /* the flared base of a trunk, roots and moss; drawn over the trunk's foot */
  function drawBase(fogT) {
    return function (c, w, h) {
      var cx = w / 2, R = seeded(53), g = c.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, fogged("#a35a30", fogT)); g.addColorStop(0.4, fogged("#6e3620", fogT)); g.addColorStop(1, fogged("#2e150b", fogT));
      c.fillStyle = g; c.beginPath();
      c.moveTo(cx - w * 0.3, 0); c.lineTo(cx + w * 0.3, 0);
      c.bezierCurveTo(cx + w * 0.3, h * 0.55, cx + w * 0.42, h * 0.8, w, h);
      c.lineTo(0, h); c.bezierCurveTo(cx - w * 0.42, h * 0.8, cx - w * 0.3, h * 0.55, cx - w * 0.3, 0); c.closePath(); c.fill();
      /* root ridges */
      c.strokeStyle = rgba(30, 12, 6, 0.55 * (1 - fogT * 0.7)); c.lineWidth = 3;
      [-0.2, -0.05, 0.12, 0.24].forEach(function (o) { c.beginPath(); c.moveTo(cx + o * w, h * 0.15); c.quadraticCurveTo(cx + o * w * 1.4, h * 0.7, cx + o * w * 2.6, h); c.stroke(); });
      /* moss along the foot */
      for (var i = 0; i < 70; i++) {
        var x = R() * w, y = h * (0.62 + R() * 0.38);
        c.fillStyle = fogged(R() < 0.5 ? "#5f8a2a" : "#3f6a1e", fogT * 0.9).replace(",1)", "," + (0.55 + R() * 0.4) + ")");
        c.beginPath(); c.ellipse(x, y, 3 + R() * 6, 2 + R() * 3, 0, 0, TAU); c.fill();
      }
    };
  }
  function drawFern(v) {
    return function (c, w, h) {
      var R = seeded(211 + v * 29), cx = w / 2, n = 7 + v * 2, i, j;
      for (i = 0; i < n; i++) {
        var a = -Math.PI / 2 + (i / (n - 1) - 0.5) * 2.6 + (R() - 0.5) * 0.2, len = h * (0.75 + R() * 0.3), droop = 0.55 + R() * 0.3;
        var col = ["#3f7a24", "#5c9a2e", "#79b23a", "#2f5f1a"][Math.floor(R() * 4)];
        var pts = [];
        for (j = 0; j <= 10; j++) {
          var t = j / 10, ang = a + Math.sign(Math.cos(a)) * droop * t * t;
          pts.push([cx + Math.cos(ang) * len * t * (w / h) * 0.95, h - 2 + Math.sin(ang) * len * t]);
        }
        c.strokeStyle = col; c.lineWidth = 2;
        c.beginPath(); pts.forEach(function (p, k) { c[k ? "lineTo" : "moveTo"](p[0], p[1]); }); c.stroke();
        c.fillStyle = col;
        for (j = 1; j < 10; j++) {
          var p = pts[j], q = pts[j + 1], dx = q[0] - p[0], dy = q[1] - p[1], L = Math.sqrt(dx * dx + dy * dy) || 1, nx = -dy / L, ny = dx / L, lf = (1 - j / 11) * 12 + 3;
          c.beginPath(); c.moveTo(p[0], p[1]); c.quadraticCurveTo(p[0] + nx * lf + dx * 0.4, p[1] + ny * lf + dy * 0.4, q[0], q[1]); c.fill();
          c.beginPath(); c.moveTo(p[0], p[1]); c.quadraticCurveTo(p[0] - nx * lf + dx * 0.4, p[1] - ny * lf + dy * 0.4, q[0], q[1]); c.fill();
        }
      }
      c.fillStyle = "rgba(220,240,140,0.22)";
      for (i = 0; i < 18; i++) { c.beginPath(); c.arc(R() * w, R() * h * 0.7, 1 + R() * 1.5, 0, TAU); c.fill(); }
    };
  }
  function drawRadial(stops) {
    return function (c, w, h) {
      var g = c.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.min(w, h) / 2);
      stops.forEach(function (s) { g.addColorStop(s[0], s[1]); });
      c.fillStyle = g; c.save(); c.translate(w / 2, h / 2); c.scale(w / Math.min(w, h), h / Math.min(w, h)); c.translate(-w / 2, -h / 2);
      c.fillRect(0, 0, w, h); c.restore();
    };
  }
  function drawRay(c, w, h) {
    var g = c.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, "rgba(255,240,170,0)"); g.addColorStop(0.5, "rgba(255,240,170,1)"); g.addColorStop(1, "rgba(255,240,170,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    var v = c.createLinearGradient(0, 0, 0, h);
    v.addColorStop(0, "rgba(0,0,0,0)"); v.addColorStop(0.25, "rgba(0,0,0,0.0)"); v.addColorStop(1, "rgba(0,0,0,1)");
    c.globalCompositeOperation = "destination-out"; c.fillStyle = v; c.fillRect(0, 0, w, h); c.globalCompositeOperation = "source-over";
  }
  function drawVignette(c, w, h) {
    var g = c.createRadialGradient(w / 2, h * 0.55, h * 0.3, w / 2, h * 0.55, w * 0.62);
    g.addColorStop(0, "rgba(8,16,4,0)"); g.addColorStop(0.7, "rgba(8,16,4,0.22)"); g.addColorStop(1, "rgba(6,12,2,0.62)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  /* the morning mist (level 51 on): the haze laid over everything beyond the middle distance */
  function drawMist(c, w, h) {
    var g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, rgba(HAZE_RGB[0], HAZE_RGB[1], HAZE_RGB[2], 0.25)); g.addColorStop(0.3, rgba(HAZE_RGB[0], HAZE_RGB[1], HAZE_RGB[2], 0.62));
    g.addColorStop(0.4, rgba(HAZE_RGB[0], HAZE_RGB[1], HAZE_RGB[2], 0.7)); g.addColorStop(0.55, rgba(HAZE_RGB[0], HAZE_RGB[1], HAZE_RGB[2], 0.3)); g.addColorStop(1, rgba(HAZE_RGB[0], HAZE_RGB[1], HAZE_RGB[2], 0));
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  function drawHazeBand(c, w, h) {
    var g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, rgba(HAZE_RGB[0], HAZE_RGB[1], HAZE_RGB[2], 0)); g.addColorStop(0.55, rgba(HAZE_RGB[0], HAZE_RGB[1], HAZE_RGB[2], 0.85));
    g.addColorStop(0.7, rgba(HAZE_RGB[0], HAZE_RGB[1], HAZE_RGB[2], 0.6)); g.addColorStop(1, rgba(HAZE_RGB[0], HAZE_RGB[1], HAZE_RGB[2], 0));
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  /* a fallen log, seen side-on across the floor: bark with moss on top */
  function drawLog(c, w, h) {
    var g = c.createLinearGradient(0, 0, 0, h), R = seeded(77);
    g.addColorStop(0, "#9a5a32"); g.addColorStop(0.35, "#6e3a20"); g.addColorStop(1, "#2a140a");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    for (var i = 0; i < 40; i++) { c.strokeStyle = "rgba(30,12,6,0.5)"; c.lineWidth = 1 + R() * 2; var y = R() * h; c.beginPath(); c.moveTo(0, y); c.lineTo(w, y + (R() - 0.5) * 6); c.stroke(); }
    for (i = 0; i < 90; i++) { c.fillStyle = R() < 0.5 ? "rgba(96,140,40,0.85)" : "rgba(64,110,30,0.85)"; c.beginPath(); c.ellipse(R() * w, R() * h * 0.28, 3 + R() * 7, 2 + R() * 3, 0, 0, TAU); c.fill(); }
  }
  function drawLogEnd(c, w, h) {
    var cx = w / 2, cy = h / 2, r = w / 2 - 1;
    c.fillStyle = "#4a2412"; c.beginPath(); c.arc(cx, cy, r, 0, TAU); c.fill();
    c.fillStyle = "#c99a62"; c.beginPath(); c.arc(cx, cy, r * 0.84, 0, TAU); c.fill();
    c.strokeStyle = "rgba(110,64,30,0.8)"; c.lineWidth = 1.5;
    for (var k = 1; k < 6; k++) { c.beginPath(); c.arc(cx + 1, cy, r * 0.14 * k, 0, TAU); c.stroke(); }
  }
  function drawScorch(c, w, h) {
    var g = c.createRadialGradient(w / 2, h * 0.6, 2, w / 2, h * 0.6, w * 0.55);
    g.addColorStop(0, "rgba(10,6,4,0.95)"); g.addColorStop(0.6, "rgba(30,16,8,0.6)"); g.addColorStop(1, "rgba(30,16,8,0)");
    c.fillStyle = g; c.beginPath(); c.ellipse(w / 2, h * 0.55, w * 0.5, h * 0.48, 0, 0, TAU); c.fill();
  }
  function drawPlate(c, w, h) {
    c.fillStyle = "rgba(255,190,60,0.35)"; c.beginPath(); c.ellipse(w / 2, h / 2 - 4, w / 2, h / 2 - 4, 0, 0, TAU); c.fill();
    var x = 6, y = 6, pw = w - 12, ph = h - 22, r = 9;
    c.fillStyle = "#1c1206"; c.beginPath();
    c.moveTo(x + r, y); c.arcTo(x + pw, y, x + pw, y + ph, r); c.arcTo(x + pw, y + ph, x, y + ph, r); c.arcTo(x, y + ph, x, y, r); c.arcTo(x, y, x + pw, y, r); c.closePath(); c.fill();
    var g = c.createLinearGradient(0, y, 0, y + ph); g.addColorStop(0, "#fff0b0"); g.addColorStop(0.5, "#ffd257"); g.addColorStop(1, "#e89a24");
    c.fillStyle = g; c.beginPath(); x += 3; y += 3; pw -= 6; ph -= 6; r = 7;
    c.moveTo(x + r, y); c.arcTo(x + pw, y, x + pw, y + ph, r); c.arcTo(x + pw, y + ph, x, y + ph, r); c.arcTo(x, y + ph, x, y, r); c.arcTo(x, y, x + pw, y, r); c.closePath(); c.fill();
    /* the pointer down to the bike */
    c.fillStyle = "#1c1206"; c.beginPath(); c.moveTo(w / 2 - 9, h - 17); c.lineTo(w / 2 + 9, h - 17); c.lineTo(w / 2, h - 3); c.closePath(); c.fill();
    c.fillStyle = "#ffd257"; c.beginPath(); c.moveTo(w / 2 - 5, h - 17); c.lineTo(w / 2 + 5, h - 17); c.lineTo(w / 2, h - 8); c.closePath(); c.fill();
  }

  /* a hover-bike seen from behind and a little above (generic design): the rear engine with two glowing nozzles, side
     fins, a long body tapering forward to two steering vanes on forks, handlebars out to the sides, the rider on top.
     kind 0: the player's bike (olive and tan, a rider in a mottled camouflage poncho and a round helmet);
     1: a scout (light grey armor, white helmet); 2: a gunner scout (red stripes, a rear gun). */
  function drawBike(kind) {
    return function (c, w, h) {
      var cx = w / 2, P = kind === 0;
      var body = P ? "#58603a" : "#c9ccc8", bodyD = P ? "#2f3520" : "#6e7378", bodyL = P ? "#a3a66a" : "#f0f2ee", trim = P ? "#c8a050" : kind === 2 ? "#b8322a" : "#53585e";
      c.lineJoin = "round"; c.lineCap = "round";
      function poly(pts, fill, stroke, lw) {
        c.beginPath(); pts.forEach(function (p, i) { c[i ? "lineTo" : "moveTo"](p[0], p[1]); }); c.closePath();
        if (fill) { c.fillStyle = fill; c.fill(); }
        if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw || 2; c.stroke(); }
      }
      /* the forks and vanes, far ahead (small, high) */
      c.strokeStyle = bodyD; c.lineWidth = 5;
      c.beginPath(); c.moveTo(cx - 22, 150); c.lineTo(cx - 40, 60); c.moveTo(cx + 22, 150); c.lineTo(cx + 40, 60); c.stroke();
      poly([[cx - 74, 58], [cx - 30, 52], [cx - 28, 64], [cx - 72, 68]], body, bodyD, 2);
      poly([[cx + 74, 58], [cx + 30, 52], [cx + 28, 64], [cx + 72, 68]], body, bodyD, 2);
      c.fillStyle = trim; c.fillRect(cx - 70, 59, 14, 5); c.fillRect(cx + 56, 59, 14, 5);
      /* the long body, tapering forward */
      poly([[cx - 34, 230], [cx - 20, 110], [cx + 20, 110], [cx + 34, 230]], body, bodyD, 2);
      poly([[cx - 8, 112], [cx + 8, 112], [cx + 12, 200], [cx - 12, 200]], bodyL);
      /* side fins */
      poly([[cx - 40, 214], [cx - 104, 222], [cx - 108, 236], [cx - 44, 238]], body, bodyD, 2);
      poly([[cx + 40, 214], [cx + 104, 222], [cx + 108, 236], [cx + 44, 238]], body, bodyD, 2);
      c.fillStyle = trim; c.fillRect(cx - 104, 225, 20, 6); c.fillRect(cx + 84, 225, 20, 6);
      /* the rear engine block */
      poly([[cx - 58, 206], [cx + 58, 206], [cx + 64, 262], [cx - 64, 262]], bodyD, "#141810", 2);
      poly([[cx - 52, 210], [cx + 52, 210], [cx + 56, 224], [cx - 56, 224]], body);
      [-30, 30].forEach(function (o) {
        var g = c.createRadialGradient(cx + o, 243, 2, cx + o, 243, 19);
        g.addColorStop(0, "#fffbe0"); g.addColorStop(0.35, "#ffc35a"); g.addColorStop(0.8, "#d0541c"); g.addColorStop(1, "#3a1608");
        c.fillStyle = "#151510"; c.beginPath(); c.arc(cx + o, 243, 19, 0, TAU); c.fill();
        c.fillStyle = g; c.beginPath(); c.arc(cx + o, 243, 15, 0, TAU); c.fill();
      });
      if (kind === 2) {   /* the rear gun under the seat, with its red sight */
        c.fillStyle = "#2a2c30"; c.fillRect(cx - 6, 222, 12, 26);
        c.fillStyle = "#ff5a3a"; c.beginPath(); c.arc(cx, 250, 5, 0, TAU); c.fill();
      }
      /* handlebars out to the sides */
      c.strokeStyle = bodyD; c.lineWidth = 7;
      c.beginPath(); c.moveTo(cx - 64, 150); c.lineTo(cx - 24, 158); c.moveTo(cx + 64, 150); c.lineTo(cx + 24, 158); c.stroke();
      /* the rider: legs on the footrests, the back, arms out to the bars, the helmet */
      var cloth = P ? "#55603a" : "#e9ebe8", clothD = P ? "#323a22" : "#9da2a6";
      poly([[cx - 40, 214], [cx - 30, 176], [cx - 16, 176], [cx - 20, 216]], clothD);
      poly([[cx + 40, 214], [cx + 30, 176], [cx + 16, 176], [cx + 20, 216]], clothD);
      if (P) {   /* a mottled camouflage poncho */
        poly([[cx - 42, 194], [cx - 38, 118], [cx - 22, 100], [cx + 22, 100], [cx + 38, 118], [cx + 42, 194], [cx + 20, 200], [cx, 196], [cx - 20, 200]], cloth, "#20261a", 2);
        var R = seeded(5);
        for (var i = 0; i < 26; i++) {
          c.fillStyle = ["#3a4426", "#7a7a46", "#2c3420", "#6c5a34"][i % 4];
          c.beginPath(); c.ellipse(cx - 34 + R() * 68, 108 + R() * 86, 4 + R() * 7, 3 + R() * 5, R() * 3, 0, TAU); c.fill();
        }
      } else {   /* light armor plates over a dark suit */
        poly([[cx - 36, 194], [cx - 34, 118], [cx - 22, 104], [cx + 22, 104], [cx + 34, 118], [cx + 36, 194]], "#1c1e22");
        poly([[cx - 26, 116], [cx + 26, 116], [cx + 22, 160], [cx - 22, 160]], cloth, "#5a5f64", 2);
        poly([[cx - 22, 166], [cx + 22, 166], [cx + 20, 190], [cx - 20, 190]], cloth, "#5a5f64", 2);
        if (kind === 2) { c.fillStyle = "#b8322a"; c.fillRect(cx - 34, 118, 10, 22); c.fillRect(cx + 24, 118, 10, 22); }
      }
      /* arms */
      c.strokeStyle = P ? "#3e4628" : "#1c1e22"; c.lineWidth = 12;
      c.beginPath(); c.moveTo(cx - 32, 122); c.lineTo(cx - 52, 140); c.lineTo(cx - 60, 150); c.moveTo(cx + 32, 122); c.lineTo(cx + 52, 140); c.lineTo(cx + 60, 150); c.stroke();
      if (!P) {
        c.strokeStyle = cloth; c.lineWidth = 9;
        c.beginPath(); c.moveTo(cx - 34, 120); c.lineTo(cx - 46, 133); c.moveTo(cx + 34, 120); c.lineTo(cx + 46, 133); c.stroke();
      }
      /* the helmet, from behind */
      var hg = c.createRadialGradient(cx - 7, 76, 3, cx, 86, 26);
      if (P) { hg.addColorStop(0, "#9a9a62"); hg.addColorStop(1, "#4a5030"); } else { hg.addColorStop(0, "#ffffff"); hg.addColorStop(1, "#b8bcbe"); }
      c.fillStyle = hg; c.beginPath(); c.ellipse(cx, 86, 22, 24, 0, 0, TAU); c.fill();
      c.strokeStyle = "#1a1c14"; c.lineWidth = 2; c.stroke();
      c.fillStyle = P ? "#2c3020" : "#24272b"; c.fillRect(cx - 21, 94, 42, 7);
      if (!P) { c.fillStyle = "#24272b"; c.fillRect(cx - 3, 64, 6, 22); }
    };
  }

  function ensureSpeederArt(scene) {
    var i, f;
    for (f = 0; f < FOG_LV; f++) {
      var t = f / (FOG_LV - 1) * 0.86;
      canvasTex(scene, "md-speeder-trunk-0-" + f, 96, 512, drawTrunk(0, t));
      canvasTex(scene, "md-speeder-trunk-1-" + f, 96, 512, drawTrunk(1, t));
      canvasTex(scene, "md-speeder-base-" + f, 192, 90, drawBase(t));
    }
    for (i = 0; i < 3; i++) canvasTex(scene, "md-speeder-fern-" + i, 180, 96, drawFern(i));
    canvasTex(scene, "md-speeder-far-0", 1024, 360, drawFarTrees(false));
    canvasTex(scene, "md-speeder-far-1", 1024, 360, drawFarTrees(true));
    canvasTex(scene, "md-speeder-ray", 128, 512, drawRay);
    canvasTex(scene, "md-speeder-vig", 512, 288, drawVignette);
    canvasTex(scene, "md-speeder-hazeband", 64, 128, drawHazeBand);
    canvasTex(scene, "md-speeder-mist", 32, 256, drawMist);
    canvasTex(scene, "md-speeder-dapple", 128, 64, drawRadial([[0, "rgba(255,236,150,0.55)"], [0.6, "rgba(255,236,150,0.18)"], [1, "rgba(255,236,150,0)"]]));
    canvasTex(scene, "md-speeder-shadow", 128, 48, drawRadial([[0, "rgba(6,12,2,0.6)"], [0.7, "rgba(6,12,2,0.3)"], [1, "rgba(6,12,2,0)"]]));
    canvasTex(scene, "md-speeder-glow", 64, 64, drawRadial([[0, "rgba(255,240,200,1)"], [0.3, "rgba(255,170,70,0.7)"], [1, "rgba(255,90,20,0)"]]));
    canvasTex(scene, "md-speeder-rglow", 64, 64, drawRadial([[0, "rgba(255,240,230,1)"], [0.3, "rgba(255,60,40,0.8)"], [1, "rgba(255,0,0,0)"]]));
    canvasTex(scene, "md-speeder-fire", 128, 128, drawRadial([[0, "rgba(255,255,230,1)"], [0.25, "rgba(255,210,90,0.95)"], [0.6, "rgba(240,110,30,0.6)"], [1, "rgba(160,40,10,0)"]]));
    canvasTex(scene, "md-speeder-smoke", 128, 128, drawRadial([[0, "rgba(70,72,62,0.75)"], [0.6, "rgba(90,92,80,0.4)"], [1, "rgba(110,110,96,0)"]]));
    canvasTex(scene, "md-speeder-log", 256, 48, drawLog);
    canvasTex(scene, "md-speeder-logend", 64, 64, drawLogEnd);
    canvasTex(scene, "md-speeder-scorch", 64, 96, drawScorch);
    canvasTex(scene, "md-speeder-plate", 64, 66, drawPlate);
    canvasTex(scene, "md-speeder-bike-0", BT_W, BT_H, drawBike(0));
    canvasTex(scene, "md-speeder-bike-1", BT_W, BT_H, drawBike(1));
    canvasTex(scene, "md-speeder-bike-2", BT_W, BT_H, drawBike(2));
  }

  var DEF = {
    name: "Forest Chase", kind: "speeder-bike chase", level: "chase level", act: "FIRE",
    how: "A hover-bike chase at full speed through a forest of giant trees, seen from behind your rider. Scout bikes race ahead of you, each with a glowing letter plate. Weave between the trunks, pull alongside the scout with the right answer and steer into it: the bump knocks it out of control and it crashes into the next tree on that side. You can also shoot it down, but a scout takes several blaster hits and the blaster overheats if you hold it down. Speed up to catch a scout; slow down to let one drop back to you. Red-striped gunner scouts carry no letter: they hang back ahead and fire at you. When a gun glows, a red ring on the ground shows where its bolt will pass: steer out of the ring. Knock a gunner into a tree for a bonus.",
    rules: "Knocking down a scout with a wrong letter costs a life. So does hitting a tree, being hit by a scout's bolt, and (on later levels) hitting a fallen log or a swinging log trap.",
    keys: "◀ ▶ or A / D steer · ▲ / W speeds up, ▼ / S slows down · Space, FIRE or a mouse button shoots · or point with the mouse: the bike steers toward the pointer (point ahead to speed up, behind the bike to slow down).",
    tip: "FOREST CHASE — bump the scout with the right letter into a tree (or shoot it down). Dodge the trunks and the red bolts.",
    hint1: "Knock the scout bike with the right letter into a tree: pull alongside and steer into it, or shoot it. The passage stays in the side panel.",
    hint2: "This question has two right letters. Knock down both scouts that carry them.",
    news: ["",
      "A second gunner scout rides with the pack, and the trees stand a little closer.",
      "Fallen logs lie across the forest floor. Steer through the gap (it shows from far off).",
      "The scouts swerve away when you pull alongside. Corner them against the trees and the forest's edge.",
      "The gunners lead their shots: they aim where you are going, not where you are.",
      "Morning mist: the trees come out of the haze much closer than before.",
      "Armored scouts take four blaster hits, and the lettered scouts shoot back too.",
      "Swinging log traps hang across the trail. Watch the swing and pass when the way is clear.",
      "A third gunner scout, and your blaster heats up faster.",
      "Full speed: scouts take five blaster hits, on top of everything else."],
    params: speederParams
  };

  /* depth: nearer things in front; the world uses depths 1-16 (the shared particles, tags and coin pop-ups sit above) */
  function dep(dz) { return 1 + (100 - clamp(dz, 0, 100)) * 0.15; }

  M.extend("speeder", DEF, {
    speederParams: function (n) { return speederParams(n); },

    setup_speeder: function () {
      ensureSpeederArt(this);
      var P = speederParams(this.night), self = this, i;
      var S = this.sp = { P: P, t: 0, pz: 0, px: 0, pvx: 0, spd: P.speed, camX: 0, camZ: -CAM_BACK, prevPz: 0,
        trees: [], treePool: [], ferns: [], fernPool: [], dapples: [], dapPool: [], logs: [], traps: [], scouts: [], bolts: [], fx: [], fxPool: [],
        rows: [], genZ: 6, pathX: 0, nextLogZ: P.logs ? 60 + 100 / P.logs * 0.5 : 1e12, nextTrapZ: P.traps ? 90 + 100 / P.traps * 0.4 : 1e12,
        fernZ: 0, dapZ: 0, heat: 0, over: false, shotCd: 0, packCd: P.fireMs * 0.8, gunWait: [], hits: 0, crashes: 0, bumps: 0, shots: 0,
        mouseOn: false, lpx: null, lpy: null, mouseT: -1e9, told: {}, floats: [], lastFrame: -9, whooshCd: 0 };
      this.cameras.main.setBackgroundColor("#0b1f0e");
      this.speederLayout();
      S.bg = this.add.image(0, 0, S.bgKey).setOrigin(0, 0).setDepth(0);
      S.far0 = this.add.tileSprite(0, 0, 16, 16, "md-speeder-far-0").setOrigin(0, 1).setDepth(0.2);
      S.far1 = this.add.tileSprite(0, 0, 16, 16, "md-speeder-far-1").setOrigin(0, 1).setDepth(0.3);
      S.rays = [];
      for (i = 0; i < 5; i++) S.rays.push({ img: this.add.image(0, 0, "md-speeder-ray").setOrigin(0.5, 0).setDepth(16.2).setBlendMode(1), x: i / 5 + rnd(0, 0.1), ph: rnd(0, TAU), w: rnd(0.6, 1.4) });
      S.groundG = this.add.graphics().setDepth(0.6);
      S.haze = this.add.image(0, 0, "md-speeder-hazeband").setOrigin(0.5, 0.5).setDepth(dep(P.fog * 0.62));
      S.mist = P.fog < 60 ? this.add.image(0, 0, "md-speeder-mist").setOrigin(0, 0).setDepth(dep(P.fog * 0.42)).setAlpha(0.8) : null;
      S.boltG = this.add.graphics().setDepth(dep(CAM_BACK + 0.2)).setBlendMode(1);
      S.ringG = this.add.graphics().setDepth(0.9);
      S.trapG = this.add.graphics().setDepth(5);
      S.speedG = this.add.graphics().setDepth(16.4);
      S.vig = this.add.image(0, 0, "md-speeder-vig").setOrigin(0, 0).setDepth(16.6);
      S.hudG = this.add.graphics().setDepth(17);
      S.moteG = this.add.graphics().setDepth(16.3).setBlendMode(1);
      S.motes = [];
      for (i = 0; i < 34; i++) S.motes.push({ x: Math.random(), y: Math.random(), r: rnd(0.8, 2), a: rnd(0.25, 0.6), ph: rnd(0, TAU), v: rnd(0.4, 1.2) });
      /* the player's bike */
      S.shadow = this.add.image(0, 0, "md-speeder-shadow").setDepth(dep(CAM_BACK) - 0.05);
      S.bike = this.add.image(0, 0, "md-speeder-bike-0").setOrigin(0.5, 1).setDepth(dep(CAM_BACK));
      S.glowL = this.add.image(0, 0, "md-speeder-glow").setDepth(dep(CAM_BACK) + 0.01).setBlendMode(1);
      S.glowR = this.add.image(0, 0, "md-speeder-glow").setDepth(dep(CAM_BACK) + 0.01).setBlendMode(1);
      var hud = { fontFamily: "Trebuchet MS", fontSize: 13, color: "#f4e6b0", fontStyle: "bold", stroke: "#10200a", strokeThickness: 4 };
      S.txHeat = this.add.text(0, 0, "BLASTER", hud).setOrigin(0, 0.5).setDepth(17.1);
      S.txSpeed = this.add.text(0, 0, "SPEED", hud).setOrigin(0, 0.5).setDepth(17.1);
      S.txRadar = this.add.text(0, 0, "SCOUTS", hud).setOrigin(0.5, 0).setDepth(17.1);
      S.radarLabels = [];
      S.behind = [];
      /* the forest ahead */
      while (S.genZ < ZFAR + 12) this.speederGenRow();
      for (S.fernZ = 2; S.fernZ < ZFAR;) this.speederGenFern();
      for (S.dapZ = 2; S.dapZ < ZFAR;) this.speederGenDapple();
      this.makeSol(this.W / 2, this.H * 0.7, "up").setVisible(false);   /* the coin pop-ups rise from here */
      this.speederPlaceStatic();
      this.speederRender(0);
    },

    /* everything that depends on the canvas size */
    speederLayout: function () {
      var S = this.sp, W = this.W, H = this.H;
      S.hyR = 0.36;
      S.hy = Math.round(H * S.hyR);
      S.F = H * 0.94;
      S.cx = W / 2;
      S.k = clamp(Math.min(H / 768, W / 1000), 0.6, 1.3);
      var key = "md-speeder-bg-" + W + "x" + H;
      if (S.bgKey !== key) {
        var old = S.bgKey;
        canvasTex(this, key, W, H, drawBackdrop(S.hyR));
        S.bgKey = key;
        if (S.bg) S.bg.setTexture(key);
        if (old && old !== key) { try { this.textures.remove(old); } catch (e) {} }
      }
    },
    speederPlaceStatic: function () {
      var S = this.sp, W = this.W, H = this.H, k = S.hk = Math.max(S.k, 0.8);
      S.bg.setPosition(0, 0).setDisplaySize(W, H);
      S.far0.setPosition(0, S.hy + H * 0.012).setSize(W, S.hy * 1.02).setTileScale(S.hy * 1.02 / 360);
      S.far1.setPosition(0, S.hy + H * 0.02).setSize(W, S.hy * 1.05).setTileScale(S.hy * 1.05 / 360);
      S.haze.setPosition(W / 2, S.hy + H * 0.02).setDisplaySize(W, H * (this.sp.P.fog < 60 ? 0.3 : 0.2));
      S.vig.setPosition(0, 0).setDisplaySize(W, H);
      if (S.mist) S.mist.setPosition(0, 0).setDisplaySize(W, H);
      [S.txHeat, S.txSpeed, S.txRadar].forEach(function (t) { t.setFontSize(Math.round(13 * k)); });
      /* the gauges and the radar, top left, under the Menu button (the stage's buttons sit along the top, the pad bottom left) */
      var top = 12 * k, quit = this.speederDomBox("#btn-quit");
      if (quit && quit.x0 < W * 0.4 && quit.y1 > 0 && quit.y1 < H * 0.3) top = Math.max(top, quit.y1 + 10 * k);
      S.hud = { x: 14 * k, y: top, bw: 120 * k, bh: 10 * k, rw: 92 * k, rh: 108 * k };
      S.txHeat.setPosition(S.hud.x, S.hud.y + 7 * k);
      S.txSpeed.setPosition(S.hud.x, S.hud.y + 27 * k);
      S.rx = S.hud.x + S.hud.rw / 2; S.ry = S.hud.y + 50 * k;
      S.txRadar.setPosition(S.rx, S.ry + S.hud.rh + 2 * k);
    },
    /* a DOM element's box in canvas pixels (null when it is not shown) */
    speederDomBox: function (sel) {
      try {
        var el = document.querySelector(sel), cv = this.game && this.game.canvas;
        if (!el || !cv || el.classList.contains("hidden")) return null;
        var a = el.getBoundingClientRect(), c = cv.getBoundingClientRect();
        if (!a.width || !a.height || !c.width || !c.height) return null;
        var fx = this.W / c.width, fy = this.H / c.height;
        return { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
      } catch (e) { return null; }
    },
    resize_speeder: function () {
      this.speederLayout();
      this.speederPlaceStatic();
      this.speederRender(0);
    },

    /* ── the forest: rows of trunks ahead, around a guaranteed open line ── */
    speederGenRow: function () {
      var S = this.sp, P = S.P, z = S.genZ, i, tries;
      /* the open line drifts no faster than a bike can follow (half its steering speed) */
      var reach = Math.min(3.2, 0.5 * STEER * P.rowGap / P.speed);
      S.pathX = clamp(S.pathX + rnd(-reach, reach), -XR + 1.2, XR - 1.2);
      var row = { z: z, pathX: S.pathX };
      S.rows.push(row);
      var isLog = z >= S.nextLogZ, isTrap = !isLog && z >= S.nextTrapZ;
      if (isLog) { this.speederMakeLog(z, S.pathX); S.nextLogZ = z + 100 / P.logs * rnd(0.8, 1.25); }
      if (isTrap) { this.speederMakeTrap(z, S.pathX); S.nextTrapZ = z + 100 / P.traps * rnd(0.8, 1.25); }
      var lane = [];
      if (!isLog && !isTrap) {
        var n = Math.floor(P.trees) + (Math.random() < P.trees % 1 ? 1 : 0);
        for (i = 0; i < n; i++) {
          for (tries = 0; tries < 12; tries++) {
            var r = rnd(0.75, 1.2), x = rnd(-XR - 0.4, XR + 0.4), zz = z + rnd(-1.5, 1.5);
            if (Math.abs(x - S.pathX) < r + BIKE_HW + 0.9) continue;
            if (lane.some(function (q) { return Math.abs(q.x - x) < q.r + r + 2.1; })) continue;
            lane.push({ x: x, z: zz, r: r });
            break;
          }
        }
      }
      lane.forEach(function (q) { this.speederTree(q.x, q.z, q.r, false); }, this);
      /* the wall at the forest's edge, and the forest beyond (scenery) */
      this.speederTree(-EDGE - rnd(0, 0.7), z + rnd(-2, 2), rnd(1.0, 1.3), false);
      this.speederTree(EDGE + rnd(0, 0.7), z + rnd(-2, 2), rnd(1.0, 1.3), false);
      for (i = 0; i < 4; i++) { var sd = i % 2 ? 1 : -1; this.speederTree(sd * rnd(9.5, 30), z + rnd(-P.rowGap / 2, P.rowGap / 2), rnd(1.0, 1.9), true); }
      S.genZ += P.rowGap * rnd(0.85, 1.15);
      while (S.rows.length > 40) S.rows.shift();
    },
    /* the open line at z (the scouts follow it too) */
    speederPathAt: function (z) {
      var R = this.sp.rows, i;
      for (i = 0; i < R.length - 1; i++) if (R[i + 1].z >= z) {
        var t = clamp((z - R[i].z) / Math.max(0.01, R[i + 1].z - R[i].z), 0, 1);
        return R[i].pathX + (R[i + 1].pathX - R[i].pathX) * t;
      }
      return R.length ? R[R.length - 1].pathX : 0;
    },
    speederTree: function (x, z, r, deco) {
      var S = this.sp, t = S.treePool.pop();
      if (!t) {
        t = { col: this.add.image(0, 0, "md-speeder-trunk-0-0").setOrigin(0.5, 1), base: this.add.image(0, 0, "md-speeder-base-0").setOrigin(0.5, 1),
          ghost: this.add.image(0, 0, "md-speeder-trunk-0-0").setOrigin(0.5, 1), scorch: this.add.image(0, 0, "md-speeder-scorch").setOrigin(0.5, 1) };
      }
      t.x = x; t.z = z; t.r = r; t.deco = deco; t.v = Math.random() < 0.5 ? 0 : 1; t.hit = false; t.burnt = 0; t.tex = ""; t.btex = "";
      t.col.setVisible(true); t.base.setVisible(true); t.ghost.setVisible(false); t.scorch.setVisible(false);
      S.trees.push(t);
      return t;
    },
    speederFreeTree: function (t) {
      var S = this.sp, i = S.trees.indexOf(t);
      if (i !== -1) S.trees.splice(i, 1);
      t.col.setVisible(false); t.base.setVisible(false); t.ghost.setVisible(false); t.scorch.setVisible(false);
      S.treePool.push(t);
    },
    speederGenFern: function () {
      var S = this.sp, f = S.fernPool.pop() || { img: this.add.image(0, 0, "md-speeder-fern-0").setOrigin(0.5, 1) };
      var side = Math.random();
      f.x = side < 0.35 ? rnd(-XR, XR) : (side < 0.67 ? -1 : 1) * rnd(XR - 0.5, 16);
      f.z = S.fernZ; f.s = rnd(1.1, 2.1); f.flip = Math.random() < 0.5;
      f.img.setTexture("md-speeder-fern-" + Math.floor(Math.random() * 3)).setVisible(true).setFlipX(f.flip);
      S.ferns.push(f);
      S.fernZ += rnd(0.9, 2.2);
    },
    speederGenDapple: function () {
      var S = this.sp, d = S.dapPool.pop() || { img: this.add.image(0, 0, "md-speeder-dapple").setDepth(0.7).setBlendMode(1) };
      d.x = rnd(-14, 14); d.z = S.dapZ; d.r = rnd(1.2, 3.2); d.a = rnd(0.35, 0.8);
      d.img.setVisible(true);
      S.dapples.push(d);
      S.dapZ += rnd(5, 10);
    },
    /* a fallen log across the floor at z, a gap around gx */
    speederMakeLog: function (z, gx) {
      var S = this.sp, P = S.P, half = P.logGap / 2;
      var lg = { z: z, g0: clamp(gx - half, -XR - 0.4, XR + 0.4 - P.logGap), r: 0.42, hit: false };
      lg.g1 = lg.g0 + P.logGap;
      lg.L = this.add.image(0, 0, "md-speeder-log").setOrigin(1, 1);
      lg.R = this.add.image(0, 0, "md-speeder-log").setOrigin(0, 1);
      lg.eL = this.add.image(0, 0, "md-speeder-logend");
      lg.eR = this.add.image(0, 0, "md-speeder-logend");
      S.logs.push(lg);
      return lg;
    },
    /* a log trap: a log hung on two ropes from a high branch, swinging across the trail */
    speederMakeTrap: function (z, cx) {
      var S = this.sp, P = S.P;
      var tp = { z: z, cx: clamp(cx, -2.5, 2.5), amp: rnd(3.2, 4.2), ph: rnd(0, TAU), spd: P.trapSpd, half: 1.35, y: 1.0, hit: false };
      tp.img = this.add.image(0, 0, "md-speeder-log").setOrigin(0.5, 0.5);
      S.traps.push(tp);
      return tp;
    },
    speederTrapX: function (tp) { return tp.cx + tp.amp * Math.sin(this.sp.t * tp.spd + tp.ph); },

    /* ── the scouts ── */
    speederScout: function (letter, x, z, lead, kind) {
      var S = this.sp, P = S.P;
      var sc = { letter: letter, kind: kind, x: x, z: z, vx: 0, lead: lead, amp: kind === 2 ? 3 : 4.5, w: rnd(0.22, 0.38), ph: rnd(0, TAU),
        state: "enter", hp: P.hp, flash: 0, jinkT: 0, jinkCd: 1, jinkDir: 1, tgt: null, spin: 0, smokeCd: 0, charge: 0, wander: rnd(0, TAU), bank: 0 };
      sc.shadow = this.add.image(0, 0, "md-speeder-shadow");
      sc.spr = this.add.image(0, 0, "md-speeder-bike-" + kind).setOrigin(0.5, 1);
      sc.glow = this.add.image(0, 0, "md-speeder-glow").setBlendMode(1);
      sc.gun = this.add.image(0, 0, "md-speeder-rglow").setBlendMode(1).setVisible(false);
      if (letter) {
        sc.plate = this.add.image(0, 0, "md-speeder-plate").setOrigin(0.5, 1);
        sc.label = this.add.text(0, 0, letter, { fontFamily: "Trebuchet MS", fontSize: 30, color: "#2a1604", fontStyle: "bold" }).setOrigin(0.5);
      }
      S.scouts.push(sc);
      return sc;
    },
    speederKillScout: function (sc) {
      var S = this.sp, i = S.scouts.indexOf(sc);
      if (i !== -1) S.scouts.splice(i, 1);
      ["shadow", "spr", "glow", "gun", "plate", "label"].forEach(function (k) { if (sc[k]) { try { sc[k].destroy(); } catch (e) {} sc[k] = null; } });
    },

    answers_speeder: function () {
      var S = this.sp, self = this, letters = this.choiceLetters();
      /* the last question's scouts peel off ahead */
      S.scouts.forEach(function (sc) { if (sc.letter && sc.state !== "crash") sc.state = "leave"; });
      var live = letters.filter(function (L) { return self.extracted.indexOf(L) === -1; });
      var lanes = shuffle([-3.4, -1.1, 1.1, 3.4, 0]).slice(0, Math.max(live.length, 1)), order = shuffle(live.map(function (L, i) { return i; }));
      live.forEach(function (L, i) {
        var lead = 5.5 + order[i] * 3.3;
        self.speederScout(L, lanes[i % lanes.length], S.pz - 6 - i * 3.5, lead, 1);
      });
      /* the gunners, if they are not riding already */
      var guns = S.scouts.filter(function (sc) { return sc.kind === 2 && sc.state !== "crash"; }).length + S.gunWait.length;
      for (var g = guns; g < S.P.gunners; g++) this.speederScout(null, (g % 2 ? 1 : -1) * rnd(1.5, 4), S.pz - 8 - g * 4, 15 + g * 4, 2);
      S.heat = 0; S.over = false;
    },

    speederLetterScouts: function () { return this.sp.scouts.filter(function (sc) { return sc.letter && sc.state !== "leave" && sc.state !== "crash"; }); },

    /* ── one frame ── */
    tick_speeder: function (s, inp, ms) {
      var S = this.sp, P = S.P, i, self = this;
      var frame = this.game && this.game.loop ? this.game.loop.frame : 0;
      if (frame > S.lastFrame + 1) S.armed = false;   /* the reading pop-up was up: a held key or button doesn't fire */
      S.lastFrame = frame;
      if (!inp.fire) S.armed = true;
      S.t += s;
      if (!S.told.start) { S.told.start = true; this.toast("Pull alongside the scout with the right letter and steer into it: it crashes into a tree. Or shoot it down (" + P.hp + " hits).", 5600); }

      /* steering: keys or pad; else the mouse, when it moves or is held */
      var p = this.ptr, moved = S.lpx != null && Math.abs(p.x - S.lpx) + Math.abs(p.y - S.lpy) > 2;
      S.lpx = p.x; S.lpy = p.y;
      if (inp.ax || inp.ay) S.mouseOn = false;
      else if (moved || inp.ptr) { S.mouseOn = true; S.mouseT = S.t; }
      var tvx = inp.ax * STEER, thr = inp.ay < 0 ? 1 : inp.ay > 0 ? -1 : 0;
      if (S.mouseOn && !inp.ax && !inp.ay) {
        var g = this.speederGroundAt(p.x, p.y);
        tvx = clamp((g.x - S.px) * 3.2, -STEER, STEER);
        thr = g.ahead > 7 ? 1 : g.ahead < -0.5 ? -1 : 0;
      }
      S.pvx += clamp(tvx - S.pvx, -STEER_ACC * s, STEER_ACC * s);
      S.px += S.pvx * s;
      if (S.px > XR) { S.px = XR; S.pvx = Math.min(0, S.pvx); }
      if (S.px < -XR) { S.px = -XR; S.pvx = Math.max(0, S.pvx); }
      var want = P.speed * (thr > 0 ? BOOST : thr < 0 ? BRAKE : 1);
      S.spd += clamp(want - S.spd, -P.speed * 1.6 * s, P.speed * 0.9 * s);
      S.boost = thr;
      S.prevPz = S.pz;
      S.pz += S.spd * s;
      S.camX += (S.px * 0.82 - S.camX) * Math.min(1, s * 5);
      S.camZ = S.pz - CAM_BACK;

      /* the forest ahead, and what fell behind */
      while (S.genZ < S.pz + ZFAR + 12) this.speederGenRow();
      while (S.fernZ < S.pz + ZFAR) this.speederGenFern();
      while (S.dapZ < S.pz + ZFAR) this.speederGenDapple();
      for (i = S.trees.length - 1; i >= 0; i--) if (S.trees[i].z < S.camZ + 0.5) this.speederFreeTree(S.trees[i]);
      /* a trunk flashing past close by: a whoosh */
      if (S.whooshCd > 0) S.whooshCd -= s;
      for (i = 0; i < S.trees.length && !(S.whooshCd > 0); i++) {
        var wt = S.trees[i];
        if (!wt.deco && wt.z > S.prevPz && wt.z <= S.pz && Math.abs(wt.x - S.px) < wt.r + 2.2) { sfx("whoosh"); S.whooshCd = 0.25; }
      }
      for (i = S.ferns.length - 1; i >= 0; i--) if (S.ferns[i].z < S.camZ + 0.6) { S.ferns[i].img.setVisible(false); S.fernPool.push(S.ferns[i]); S.ferns.splice(i, 1); }
      for (i = S.dapples.length - 1; i >= 0; i--) if (S.dapples[i].z < S.camZ + 0.6) { S.dapples[i].img.setVisible(false); S.dapPool.push(S.dapples[i]); S.dapples.splice(i, 1); }
      for (i = S.logs.length - 1; i >= 0; i--) if (S.logs[i].z < S.camZ + 0.4) { var lg = S.logs[i]; [lg.L, lg.R, lg.eL, lg.eR].forEach(function (o) { o.destroy(); }); S.logs.splice(i, 1); }
      for (i = S.traps.length - 1; i >= 0; i--) if (S.traps[i].z < S.camZ + 0.4) { S.traps[i].img.destroy(); S.traps.splice(i, 1); }

      /* the player against the trunks, the logs and the traps */
      this.speederPlayerHits();
      if (this._finishing) { this.speederRender(s); return; }

      /* the blaster */
      if (S.shotCd > 0) S.shotCd -= s;
      S.heat = Math.max(0, S.heat - P.cool * s);
      if (S.over && S.heat < 0.3) S.over = false;
      if (inp.fire && S.armed && !this._between) {
        if (S.over) { if (!S.told.over) { S.told.over = true; this.toast("Your blaster overheated! Let it cool, or knock scouts into trees instead: a bump never overheats.", 3600); } }
        else if (S.shotCd <= 0) this.speederShoot();
      }

      /* scouts */
      var scouts = S.scouts.slice();
      for (i = 0; i < scouts.length; i++) {
        if (S.scouts.indexOf(scouts[i]) === -1) continue;
        this.speederScoutTick(scouts[i], s);
        if (this._finishing) { this.speederRender(s); return; }
      }
      /* the pack's guns */
      if (!this._between) {
        S.packCd -= ms;
        if (S.packCd <= 0) {
          var shooters = S.scouts.filter(function (sc) { return sc.state === "ride" && sc.charge <= 0 && sc.z - S.pz > 6 && (sc.kind === 2 || P.letterFire > 0); });
          var gunners = shooters.filter(function (sc) { return sc.kind === 2; }), letterers = shooters.filter(function (sc) { return sc.kind !== 2; });
          var pick = (letterers.length && (Math.random() < P.letterFire || !gunners.length)) ? letterers : gunners;
          if (pick.length) { var sh = pick[Math.floor(Math.random() * pick.length)]; sh.charge = P.chargeMs; sfx("charge", P.chargeMs / 1000); }
          S.packCd = P.fireMs * rnd(0.8, 1.2);
        }
      }
      /* bolts */
      this.speederBolts(s);
      if (this._finishing) { this.speederRender(s); return; }
      /* effects */
      this.speederFx(s);
      /* a gunner that went down comes back after a while */
      for (i = S.gunWait.length - 1; i >= 0; i--) {
        S.gunWait[i] -= ms;
        if (S.gunWait[i] <= 0) { S.gunWait.splice(i, 1); this.speederScout(null, rnd(-3, 3), S.pz - 7, 15 + rnd(0, 6), 2); }
      }
      /* teaching moments */
      var near = this.speederLetterScouts().filter(function (sc) { return Math.abs(sc.z - S.pz) < 3; })[0];
      if (near && !S.told.along) { S.told.along = true; this.toast("Scout " + near.letter + " is alongside! Steer into it to knock it into a tree (only if " + near.letter + " is your answer).", 4200); }
      this.speederRender(s);
    },

    /* the ground point under a screen point: its x, and how far ahead of the bike it is */
    speederGroundAt: function (x, y) {
      var S = this.sp;
      if (y <= S.hy + 2) return { x: S.camX + (x - S.cx) / S.F * 40, ahead: 40 };
      var dz = CAM_H * S.F / (y - S.hy);
      return { x: S.camX + (x - S.cx) * dz / S.F, ahead: dz - CAM_BACK };
    },

    speederPlayerHits: function () {
      var S = this.sp, z0 = S.prevPz, z1 = S.pz, i;
      for (i = 0; i < S.trees.length; i++) {
        var t = S.trees[i];
        if (t.deco || t.hit || t.z <= z0 || t.z > z1) continue;
        if (Math.abs(t.x - S.px) < t.r + BIKE_HW) {
          t.hit = true;
          this.speederCrashPlayer(t.x < S.px ? 1 : -1, "YOU HIT A TREE");
          return;
        }
      }
      for (i = 0; i < S.logs.length; i++) {
        var lg = S.logs[i];
        if (lg.hit || lg.z <= z0 || lg.z > z1) continue;
        if (S.px - BIKE_HW < lg.g0 || S.px + BIKE_HW > lg.g1) {
          lg.hit = true;
          this.speederCrashPlayer(S.px < (lg.g0 + lg.g1) / 2 ? 1 : -1, "YOU HIT A FALLEN LOG");
          return;
        }
      }
      for (i = 0; i < S.traps.length; i++) {
        var tp = S.traps[i];
        if (tp.hit || tp.z <= z0 || tp.z > z1) continue;
        var tx = this.speederTrapX(tp);
        if (Math.abs(tx - S.px) < tp.half + BIKE_HW) {
          tp.hit = true;
          this.speederCrashPlayer(S.px < tx ? -1 : 1, "A LOG TRAP HIT YOU");
          return;
        }
      }
    },
    speederCrashPlayer: function (dir, label) {
      var S = this.sp, sp = this.speederScreen(S.px, 0.8, S.pz);
      S.pvx = dir * 5; S.spd *= 0.55; S.hits += 1;
      this.burst(sp ? sp.x : this.W / 2, sp ? sp.y : this.H * 0.75, 0xffc070, 18);
      sfx("tree");
      this.loseLife("hit", label);
    },

    speederShoot: function () {
      var S = this.sp, P = S.P;
      S.bolts.push({ mine: true, x: S.px, y: 0.95, z: S.pz + 1.2, vx: 0, life: 0 });
      S.heat += P.heat; S.shotCd = 0.17; S.shots += 1;
      if (S.heat >= 1) { S.heat = 1; S.over = true; sfx("hot"); }
      sfx("pew");
    },

    speederScoutTick: function (sc, s) {
      var S = this.sp, P = S.P, self = this, dzP = sc.z - S.pz, i;
      if (sc.flash > 0) sc.flash -= s;
      if (sc.state === "leave") {
        sc.z += S.spd * 1.8 * s + 10 * s;
        if (sc.z > S.pz + ZFAR || sc.z < S.camZ - 4) this.speederKillScout(sc);
        return;
      }
      if (sc.state === "crash") return;
      if (sc.state === "careen") {
        /* out of control: straight into the target trunk */
        var tg = sc.tgt, v = P.speed * 0.95;
        if (S.trees.indexOf(tg) === -1) { sc.tgt = null; this.speederScoutCrash(sc); return; }   /* its trunk went by: it crashes where it is */
        sc.z += v * s;
        var tleft = Math.max(0.04, (tg.z - sc.z) / v);
        sc.vx = clamp((tg.x - sc.x) / tleft, -14, 14);
        sc.x += sc.vx * s;
        sc.spin += s * 9 * sc.dir;
        sc.smokeCd -= s;
        if (sc.smokeCd <= 0) { sc.smokeCd = 0.05; this.speederPuff(sc.x, 0.7, sc.z - 0.6, "smoke", 0.9, 0.9); }
        if (sc.z >= tg.z - tg.r * 0.4 || Math.abs(tg.x - sc.x) < tg.r * 0.6 && tg.z - sc.z < 1) this.speederScoutCrash(sc);
        return;
      }
      /* how far ahead it wants to be: it drifts back to you and away again */
      var want = sc.lead + sc.amp * Math.sin(S.t * sc.w + sc.ph);
      var cruise = P.speed, sv;
      if (sc.state === "enter") {
        sv = cruise * 1.65;
        if (dzP > want) sc.state = "ride";
      } else sv = cruise + clamp((want - dzP) * 0.9, -cruise * 0.2, cruise * 0.2);
      if (sc.state === "ride" && dzP < -3) sv = cruise * 1.5;   /* fell behind you: catch up */
      /* it never drops back onto you from in front: it comes back alongside */
      var dx0 = sc.x - S.px, inFront = sc.state === "ride" && dzP > ALONG && dzP < 6 && Math.abs(dx0) < 1.7;
      if (inFront) sv = Math.max(sv, cruise);
      sc.sv = sv;
      sc.z += sv * s;
      /* sideways: wander about the open line, round the trunks and through the log gaps */
      var tx = this.speederPathAt(sc.z + 8) + Math.sin(S.t * 0.45 + sc.wander) * 2.2;
      for (i = 0; i < S.logs.length; i++) { var lg = S.logs[i]; if (lg.z > sc.z && lg.z - sc.z < 16) { tx = (lg.g0 + lg.g1) / 2; break; } }
      tx = clamp(tx, -SC_LAT, SC_LAT);
      var near = null, nd = 99;
      for (i = 0; i < S.trees.length; i++) {
        var t = S.trees[i];
        if (t.deco || t.z <= sc.z || t.z - sc.z > 11) continue;
        if (Math.abs(t.x - tx) < t.r + 1.0 && t.z - sc.z < nd) { near = t; nd = t.z - sc.z; }
      }
      if (inFront) tx = S.px + (dx0 >= 0 ? 1 : -1) * 2;   /* and edges out of your line */
      if (near) { var side = sc.x >= near.x ? 1 : -1; tx = near.x + side * (near.r + 1.1); if (Math.abs(tx) > SC_LAT) tx = near.x - side * (near.r + 1.1); }
      /* the others: keep a little apart */
      S.scouts.forEach(function (o) { if (o !== sc && o.state === "ride" && Math.abs(o.z - sc.z) < 3 && Math.abs(o.x - sc.x) < 1.4) tx += (sc.x >= o.x ? 1 : -1) * 1.2; });
      var maxV = P.weave + 2;
      if (sc.jinkCd > 0) sc.jinkCd -= s;
      if (sc.jinkT > 0) { sc.jinkT -= s; sc.vx = sc.jinkDir * STEER * 1.05; }
      else sc.vx += clamp(clamp((tx - sc.x) * 2.2, -maxV, maxV) - sc.vx, -18 * s, 18 * s);
      var x0 = sc.x;
      sc.x = clamp(sc.x + sc.vx * s, -SC_LAT - 0.6, SC_LAT + 0.6);
      sc.bank += (clamp(sc.vx * 0.05, -0.3, 0.3) - sc.bank) * Math.min(1, s * 8);
      /* a jinking scout can run itself into a trunk */
      if (sc.jinkT > 0) {
        for (i = 0; i < S.trees.length; i++) {
          var tt = S.trees[i];
          if (tt.deco || Math.abs(tt.z - sc.z) > 1.2) continue;
          if (Math.abs(tt.x - sc.x) < tt.r + BIKE_HW && Math.abs(tt.x - x0) >= Math.abs(tt.x - sc.x)) { sc.dir = sc.jinkDir; sc.tgt = tt; this.speederScoutCrash(sc); return; }
        }
      }
      if (sc.state !== "ride") return;
      /* pulling alongside: from level 31 it may swerve away */
      var dx = sc.x - S.px;
      if (P.jink && sc.jinkCd <= 0 && sc.jinkT <= 0 && Math.abs(dzP) < 3 && Math.abs(dx) < 2.4) {
        if (Math.random() < P.jink) { sc.jinkT = 0.5; sc.jinkDir = dx >= 0 ? 1 : -1; sc.jinkCd = 2.4; }
        else sc.jinkCd = 1.2;
      }
      /* the bump: you steer into it, or ram it from behind going faster; a scout that drifts into you just slides off */
      if (Math.abs(dzP) < ALONG && Math.abs(dx) < BIKE_HW * 2 && !this._between) {
        var dir = dx > 0.05 ? 1 : dx < -0.05 ? -1 : (S.pvx < 0 ? -1 : 1);
        if (!(S.pvx * dir > 0.8 || (dzP > 0.3 && S.spd > (sc.sv || 0) + 0.5))) {
          sc.x = clamp(S.px + dir * BIKE_HW * 2.02, -SC_LAT - 0.6, SC_LAT + 0.6);
          sc.vx = dir * Math.abs(sc.vx);
          return;
        }
        S.bumps += 1;
        S.pvx = -dir * 3.2;
        S.px = clamp(sc.x - dir * BIKE_HW * 2.05, -XR, XR);
        var ss = this.speederScreen((sc.x + S.px) / 2, 0.8, sc.z);
        if (ss) this.burst(ss.x, ss.y, 0xffe0a0, 12);
        sfx("bump");
        this.speederCareen(sc, dir, "bump");
        return;
      }
      /* its gun: the glow, then the bolt */
      if (sc.charge > 0) {
        sc.charge -= s * 1000;
        if (sc.charge <= 0) {
          sc.charge = 0;
          if (dzP > 4) {
            var T = Math.max(0.2, (sc.z - S.pz) / P.boltRel), aim = clamp(S.px + S.pvx * T * P.aimLead, -XR, XR);
            S.bolts.push({ mine: false, x: sc.x, y: 0.9, z: sc.z - 0.8, vx: (aim - sc.x) / T, aim: aim, life: 0 });
            sfx("enemy");
          }
        }
      }
    },

    /* knocked out of control: it veers into the nearest trunk it can reach on that side (or the forest's edge) */
    speederCareen: function (sc, dir, why) {
      var S = this.sp, best = null, bz = 1e9, v = S.P.speed * 0.95, i;
      for (i = 0; i < S.trees.length; i++) {
        var t = S.trees[i];
        if (t.deco) continue;
        var dz = t.z - sc.z, dx = (t.x - sc.x) * dir;
        if (dz < 2.5 || dz > 40 || dx < 0.2) continue;
        if (Math.abs(t.x - sc.x) / (dz / v) > 12) continue;   /* too far across to reach */
        if (dz < bz) { bz = dz; best = t; }
      }
      if (!best) best = this.speederTree(dir * (EDGE + 0.3), sc.z + 12, 1.2, false);
      sc.state = "careen"; sc.tgt = best; sc.dir = dir; sc.why = why; sc.charge = 0; sc.gun.setVisible(false);
      if (sc.letter && !S.told.careen) { S.told.careen = true; this.toast("Scout " + sc.letter + " is out of control!", 1800); }
    },
    speederScoutCrash: function (sc) {
      var S = this.sp, t = sc.tgt, x = t ? t.x - sc.dir * t.r * 0.7 : sc.x, z = t ? t.z - 0.3 : sc.z;
      sc.state = "crash";
      S.crashes += 1;
      if (t) { t.burnt = 1; }
      this.speederPuff(x, 1.0, z, "fire", 2.6, 0.7);
      this.speederPuff(x, 1.6, z, "fire", 1.8, 0.5);
      for (var i = 0; i < 5; i++) this.speederPuff(x + rnd(-0.6, 0.6), 1 + rnd(0, 1.2), z - rnd(0, 0.5), "smoke", rnd(1.6, 2.6), rnd(1.2, 1.9));
      var sp = this.speederScreen(x, 1, z) || { x: this.W / 2, y: this.H * 0.5 };
      this.burst(sp.x, sp.y, 0xffa040, 22);
      sfx("crash");
      var L = sc.letter;
      this.speederKillScout(sc);
      if (L) {
        var r = this.answerPick(L, sp.x, sp.y);
        if (r === "wrong") this.speederFloat(sp.x, sp.y - 30, "✕ " + L, "#ff9a7a");
      } else {
        S.gunWait.push(7000);
        this.addKill(sp.x, sp.y, "Twelve scouts down");
        this.awardBonusPoints(600, "Gunner scout down");
        this.speederFloat(sp.x, sp.y - 30, "GUNNER DOWN!", "#9aefc0");
      }
    },

    speederBolts: function (s) {
      var S = this.sp, P = S.P, list = S.bolts.slice(), i, j;
      for (i = 0; i < list.length; i++) {
        var b = list[i], z0 = b.z, gone = false;
        b.life += s;
        if (b.mine) {
          b.z += (S.spd + 70) * s;
          /* trunks stop it */
          for (j = 0; j < S.trees.length && !gone; j++) {
            var t = S.trees[j];
            if (t.deco || t.z <= z0 || t.z > b.z) continue;
            if (Math.abs(t.x - b.x) < t.r) { gone = true; this.speederPuff(b.x, b.y, t.z - t.r * 0.5, "fire", 0.5, 0.25); }
          }
          for (j = 0; j < S.scouts.length && !gone; j++) {
            var sc = S.scouts[j];
            if ((sc.state !== "ride" && sc.state !== "enter") || sc.z <= z0 - 0.6 || sc.z > b.z + 0.6) continue;
            if (Math.abs(sc.x - b.x) < 0.62) {
              gone = true;
              sc.hp -= 1; sc.flash = 0.18;
              var sp = this.speederScreen(sc.x, 0.8, sc.z);
              if (sp) this.burst(sp.x, sp.y, 0x9affc0, 6);
              if (sc.hp <= 0) {
                /* it spins out toward the nearer trunk side */
                var dir = this.speederNearSide(sc);
                this.speederCareen(sc, dir, "shot");
              } else if (sc.letter && !S.told.hp) { S.told.hp = true; this.toast("Hit! A scout takes " + P.hp + " blaster hits. A bump into a tree is quicker.", 3000); }
            }
          }
          if (!gone && b.z > S.pz + 70) gone = true;
        } else {
          /* a scout's bolt closes on you at boltRel */
          b.z += (S.spd - P.boltRel) * s;
          b.x += b.vx * s;
          for (j = 0; j < S.trees.length && !gone; j++) {
            var tr = S.trees[j];
            if (tr.deco || tr.z >= z0 || tr.z < b.z) continue;
            if (Math.abs(tr.x - b.x) < tr.r) { gone = true; this.speederPuff(b.x, b.y, tr.z + tr.r * 0.5, "fire", 0.6, 0.3); }
          }
          if (!gone && z0 > S.prevPz && b.z <= S.pz) {
            b.vx = 0;
            if (Math.abs(b.x - S.px) < BIKE_HW + 0.14) {
              gone = true;
              var ps = this.speederScreen(S.px, 0.9, S.pz);
              if (ps) this.burst(ps.x, ps.y, 0xff6a4a, 16);
              S.hits += 1;
              sfx("zap");
              this.loseLife("hit", "A SCOUT'S BOLT HIT YOU");
            } else if (!S.told.dodge) { S.told.dodge = true; this.toast("Dodged! Watch for a red ring on the ground: that's where a bolt will pass.", 3000); }
          }
          if (!gone && b.z < S.camZ + 0.8) gone = true;
        }
        if (gone) { var k = S.bolts.indexOf(b); if (k !== -1) S.bolts.splice(k, 1); }
        if (this._finishing) return;
      }
    },
    /* which side has the nearer trunk ahead of a scout (+1 right, -1 left) */
    speederNearSide: function (sc) {
      var S = this.sp, best = null, bd = 1e9;
      S.trees.forEach(function (t) {
        if (t.deco) return;
        var dz = t.z - sc.z; if (dz < 3 || dz > 30) return;
        var d = dz + Math.abs(t.x - sc.x) * 3;
        if (Math.abs(t.x - sc.x) > 0.2 && d < bd) { bd = d; best = t; }
      });
      return best ? (best.x > sc.x ? 1 : -1) : (sc.x >= 0 ? 1 : -1);
    },

    speederPuff: function (x, y, z, kind, size, life) {
      var S = this.sp, f = S.fxPool.pop() || { img: this.add.image(0, 0, "md-speeder-fire") };
      f.x = x; f.y = y; f.z = z; f.kind = kind; f.size = size; f.life = life; f.t = 0; f.vy = kind === "smoke" ? rnd(0.6, 1.4) : 0.3;
      f.img.setTexture(kind === "fire" ? "md-speeder-fire" : "md-speeder-smoke").setBlendMode(kind === "fire" ? 1 : 0).setVisible(true);
      S.fx.push(f);
    },
    speederFx: function (s) {
      var S = this.sp, i;
      for (i = S.fx.length - 1; i >= 0; i--) {
        var f = S.fx[i];
        f.t += s; f.y += f.vy * s; f.z += S.spd * (f.kind === "smoke" ? 0.15 : 0.6) * s;
        if (f.t >= f.life || f.z < S.camZ + 0.6) { f.img.setVisible(false); S.fxPool.push(f); S.fx.splice(i, 1); }
      }
      for (i = S.floats.length - 1; i >= 0; i--) {
        var fl = S.floats[i];
        fl.t += s; fl.txt.setY(fl.y - fl.t * 50).setAlpha(clamp(1.6 - fl.t, 0, 1));
        if (fl.t > 1.6) { fl.txt.destroy(); S.floats.splice(i, 1); }
      }
    },
    speederFloat: function (x, y, msg, col) {
      var t = this.add.text(x, y, msg, { fontFamily: "Trebuchet MS", fontSize: Math.round(22 * this.sp.k), color: col, fontStyle: "bold", stroke: "#10200a", strokeThickness: 5 }).setOrigin(0.5).setDepth(40);
      this.sp.floats.push({ txt: t, y: y, t: 0 });
    },

    /* a world point on screen (null when behind the camera) */
    speederScreen: function (x, y, z) {
      var S = this.sp, dz = z - S.camZ;
      if (dz < 0.3) return null;
      var f = S.F / dz;
      return { x: S.cx + (x - S.camX) * f, y: S.hy + (CAM_H - y) * f, f: f, dz: dz };
    },

    /* ── drawing: everything placed from the world each frame ── */
    speederRender: function (s) {
      var S = this.sp, P = S.P, W = this.W, H = this.H, F = S.F, cx = S.cx, hy = S.hy, camX = S.camX, camZ = S.camZ, k = S.k, i, self = this;
      var fogFar = P.fog, fogNear = Math.max(6, P.fog * 0.18);
      var speedT = clamp((S.spd - P.speed * 0.8) / (P.speed * 0.7), 0, 1);
      function fogOf(dz) { return clamp((dz - fogNear) / (fogFar - fogNear), 0, 1); }
      function fade(dz) { return clamp((fogFar + 8 - dz) / 12, 0, 1); }
      /* between the camera and the bike things turn to ghosts, so nothing hides the bike */
      function near(dz) { return dz < CAM_BACK ? clamp((dz - 1.2) / (CAM_BACK - 1.2), 0.12, 1) : 1; }
      /* parallax layers */
      S.far0.tilePositionX = camX * 6 / S.far0.tileScaleX;
      S.far1.tilePositionX = camX * 14 / S.far1.tileScaleX;
      S.rays.forEach(function (r, j) {
        var a = 0.1 + 0.07 * Math.sin(S.t * 0.4 * r.w + r.ph);
        r.img.setPosition(((r.x * W * 1.3 - camX * 9 + W * 2) % (W * 1.3)) - W * 0.15, -H * 0.06).setDisplaySize(W * 0.09 * r.w, H * 1.05).setRotation(-0.32).setAlpha(a);
      });
      /* the ground: bands that rush toward you */
      var G = S.groundG;
      G.clear();
      var band = 6, z0 = Math.floor((camZ + 1) / band) * band;
      for (var bz = z0; bz < camZ + fogFar; bz += band) {
        if (Math.floor(bz / band) % 2) continue;
        var d0 = Math.max(0.8, bz - camZ), d1 = bz + band * 0.5 - camZ, y0 = hy + CAM_H * F / d0, y1 = hy + CAM_H * F / d1;
        G.fillStyle(0x0c1806, 0.13 * (1 - fogOf(d0)));
        G.fillRect(0, y1, W, Math.max(0, y0 - y1));
      }
      /* dapples of sunlight on the floor */
      S.dapples.forEach(function (d) {
        var dz = d.z - camZ, f = F / dz;
        if (dz < 0.6) { d.img.setVisible(false); return; }
        var w = 2 * d.r * f, h = Math.max(1, 2 * d.r * CAM_H * F / (dz * dz) * 0.9);
        d.img.setVisible(true).setPosition(cx + (d.x - camX) * f, hy + CAM_H * f).setDisplaySize(w, h).setAlpha(d.a * fade(dz) * (1 - fogOf(dz) * 0.6));
      });
      /* trunks */
      for (i = 0; i < S.trees.length; i++) {
        var t = S.trees[i], dz = t.z - camZ;
        var f = F / dz, sx = cx + (t.x - camX) * f, sy = hy + CAM_H * f, w = 2 * t.r * f;
        if (dz < 0.5 || sx + w * 0.9 < 0 || sx - w * 0.9 > W || dz > fogFar + 9) { t.col.setVisible(false); t.base.setVisible(false); t.ghost.setVisible(false); t.scorch.setVisible(false); continue; }
        var lv = Math.min(FOG_LV - 1, Math.round(fogOf(dz) * (FOG_LV - 1))), key = "md-speeder-trunk-" + t.v + "-" + lv, bkey = "md-speeder-base-" + lv;
        if (t.tex !== key) { t.col.setTexture(key); t.ghost.setTexture(key); t.tex = key; }
        if (t.btex !== bkey) { t.base.setTexture(bkey); t.btex = bkey; }
        /* between the camera and the bike a trunk turns to a ghost, so it never hides the road */
        var a = fade(dz) * near(dz), d = dep(dz);
        t.col.setVisible(true).setPosition(sx, sy).setDisplaySize(w, sy + 8).setDepth(d).setAlpha(a);
        t.base.setVisible(dz > CAM_BACK - 0.5).setPosition(sx, sy + w * 0.05).setDisplaySize(w * 1.75, w * 0.7).setDepth(d + 0.001).setAlpha(a);
        /* motion blur: a ghost where it was a moment ago */
        if (dz < 13 && dz > 1.5 && speedT > 0.02) {
          var dz2 = dz + S.spd * 0.05, f2 = F / dz2;
          t.ghost.setVisible(true).setPosition(cx + (t.x - camX) * f2, hy + CAM_H * f2).setDisplaySize(2 * t.r * f2, hy + CAM_H * f2 + 8).setDepth(d - 0.002).setAlpha(a * 0.32 * (0.4 + speedT * 0.6));
        } else t.ghost.setVisible(false);
        if (t.burnt) t.scorch.setVisible(true).setPosition(sx, sy - 0.3 * f).setDisplaySize(w * 0.9, 2.6 * f).setDepth(d + 0.002).setAlpha(a * 0.9);
        else t.scorch.setVisible(false);
      }
      /* ferns */
      S.ferns.forEach(function (fe) {
        var dz = fe.z - camZ;
        if (dz < 0.7 || dz > fogFar) { fe.img.setVisible(false); return; }
        var f = F / dz, sx = cx + (fe.x - camX) * f, w = fe.s * f;
        if (sx + w < 0 || sx - w > W) { fe.img.setVisible(false); return; }
        /* the bike hovers over the ferns: none draws over it */
        fe.img.setVisible(true).setPosition(sx, hy + CAM_H * f + 0.05 * f).setDisplaySize(w, w * 0.55).setDepth(Math.min(dep(dz) - 0.01, dep(CAM_BACK) - 0.06))
          .setAlpha(clamp((fogFar * 0.7 - dz) / 12, 0, 1) * clamp((dz - CAM_BACK + 1.2) / 2.5, 0.15, 1));
      });
      /* fallen logs */
      S.logs.forEach(function (lg) {
        var dz = lg.z - camZ;
        if (dz < 0.6) { [lg.L, lg.R, lg.eL, lg.eR].forEach(function (o) { o.setVisible(false); }); return; }
        var f = F / dz, gy = hy + CAM_H * f, hgt = 2 * lg.r * f, a = fade(dz) * near(dz), d = dep(dz);
        var xl = cx + (lg.g0 - camX) * f, xr = cx + (lg.g1 - camX) * f, xL = cx + (-EDGE - 3 - camX) * f, xR = cx + (EDGE + 3 - camX) * f;
        lg.L.setVisible(true).setPosition(xl, gy).setDisplaySize(Math.max(1, xl - xL), hgt).setDepth(d).setAlpha(a);
        lg.R.setVisible(true).setPosition(xr, gy).setDisplaySize(Math.max(1, xR - xr), hgt).setDepth(d).setAlpha(a);
        lg.eL.setVisible(true).setPosition(xl, gy - hgt / 2).setDisplaySize(hgt * 0.8, hgt).setDepth(d + 0.001).setAlpha(a);
        lg.eR.setVisible(true).setPosition(xr, gy - hgt / 2).setDisplaySize(hgt * 0.8, hgt).setDepth(d + 0.001).setAlpha(a);
      });
      /* swinging log traps */
      var TG = S.trapG;
      TG.clear();
      S.traps.forEach(function (tp) {
        var dz = tp.z - camZ;
        if (dz < 0.6) { tp.img.setVisible(false); return; }
        var f = F / dz, tx = self.speederTrapX(tp), sx = cx + (tx - camX) * f, sy = hy + (CAM_H - tp.y) * f, a = fade(dz) * near(dz);
        var ang = Math.cos(S.t * tp.spd + tp.ph) * 0.35, pivot = cx + (tp.cx - camX) * f;
        tp.img.setVisible(true).setPosition(sx, sy).setDisplaySize(tp.half * 2 * f, 0.55 * f).setDepth(dep(dz)).setAlpha(a).setRotation(ang * 0.15);
        TG.setDepth(dep(dz) - 0.003);
        TG.lineStyle(Math.max(1, 0.07 * f), 0x3a2a14, a);
        TG.lineBetween(sx - tp.half * 0.7 * f, sy, pivot - tp.half * 0.3 * f, -10);
        TG.lineBetween(sx + tp.half * 0.7 * f, sy, pivot + tp.half * 0.3 * f, -10);
      });
      /* scouts */
      var ringG = S.ringG;
      ringG.clear();
      S.behind.length = 0;
      S.scouts.forEach(function (sc) {
        var dz = sc.z - camZ, show = dz > 1.0 && dz < fogFar + 6;
        var f = F / Math.max(0.5, dz), sx = cx + (sc.x - camX) * f, gy = hy + CAM_H * f, by = hy + (CAM_H - HOVER - Math.sin(S.t * 6 + sc.ph) * 0.03) * f;
        var all = [sc.shadow, sc.spr, sc.glow, sc.gun, sc.plate, sc.label];
        if (!show) { all.forEach(function (o) { if (o) o.setVisible(false); }); if (sc.letter && sc.state !== "leave" && dz <= 1.0) S.behind.push(sc); return; }
        var a = fade(dz) * (dz < CAM_BACK - 0.5 ? clamp((dz - 1) / (CAM_BACK - 1.5), 0.15, 1) : 1), d = dep(dz) + 0.005;
        var bw = BIKE_WU * f, bh = bw * BT_H / BT_W;
        sc.shadow.setVisible(true).setPosition(sx, gy).setDisplaySize(bw * 1.1, bw * 0.22).setDepth(d - 0.004).setAlpha(a);
        var rot = sc.state === "careen" ? Math.sin(sc.spin) * 0.6 : sc.bank;
        sc.spr.setVisible(true).setPosition(sx, by).setDisplaySize(bw, bh).setDepth(d).setAlpha(a).setRotation(rot)
          .setTint(sc.flash > 0 ? 0xb0ffd0 : sc.state === "careen" ? 0xffb090 : 0xffffff);
        sc.glow.setVisible(true).setPosition(sx, by - bh * 0.08).setDisplaySize(bw * 0.9, bw * 0.45).setDepth(d + 0.001).setAlpha(a * (0.55 + 0.25 * Math.sin(S.t * 30 + sc.ph)));
        if (sc.charge > 0) {
          var cT = 1 - sc.charge / P.chargeMs;
          sc.gun.setVisible(true).setPosition(sx, by - bh * 0.12).setDisplaySize(bw * (0.3 + cT * 0.6), bw * (0.3 + cT * 0.6)).setDepth(d + 0.002).setAlpha(0.6 + 0.4 * Math.sin(S.t * 40));
          /* where the bolt will pass: a red ring on the ground by the bike */
          var T = Math.max(0.2, (sc.z - S.pz) / P.boltRel), ax = clamp(S.px + S.pvx * T * P.aimLead, -XR, XR);
          self.speederRing(ax, 0.35 + cT * 0.5);
        } else sc.gun.setVisible(false);
        if (sc.plate && sc.state === "leave") { sc.plate.setVisible(false); sc.label.setVisible(false); }
        else if (sc.plate) {
          var pk = clamp(f * 0.9 / 64, 0.62 * k, 1.25 * k), py = by - bh * 0.96;
          sc.plate.setVisible(true).setPosition(sx, py).setScale(pk).setDepth(d + 0.003).setAlpha(Math.max(a, 0.85)).setRotation(rot * 0.5);
          sc.label.setVisible(true).setPosition(sx, py - 66 * pk * 0.6).setFontSize(Math.round(30 * pk)).setDepth(d + 0.004).setAlpha(Math.max(a, 0.85));
        }
      });
      /* bolts in flight and the rings where enemy bolts will cross */
      var BG = S.boltG;
      BG.clear();
      S.bolts.forEach(function (b) {
        var len = b.mine ? 2.6 : 1.6, za = b.z, zb = b.mine ? b.z - len : b.z + len;
        var A = self.speederScreen(b.x, b.y, za), B = self.speederScreen(b.x - (b.mine ? 0 : b.vx * 0.05), b.y, zb);
        if (!A || !B) return;
        var wd = Math.max(1.5, 0.16 * A.f), col = b.mine ? 0x8cff7a : 0xff4a2a, core = b.mine ? 0xeaffd8 : 0xffe0d0;
        BG.lineStyle(wd * 3, col, 0.22); BG.lineBetween(A.x, A.y, B.x, B.y);
        BG.lineStyle(wd * 1.4, col, 0.85); BG.lineBetween(A.x, A.y, B.x, B.y);
        BG.lineStyle(Math.max(1, wd * 0.5), core, 1); BG.lineBetween(A.x, A.y, B.x, B.y);
        if (!b.mine) self.speederRing(b.aim != null ? b.aim : b.x, 1);
      });
      /* effects */
      S.fx.forEach(function (fx) {
        var dz = fx.z - camZ;
        if (dz < 0.6) { fx.img.setVisible(false); return; }
        var f = F / dz, u = fx.t / fx.life, sz = fx.size * f * (fx.kind === "fire" ? 0.6 + u * 0.8 : 0.5 + u * 1.1);
        fx.img.setVisible(true).setPosition(cx + (fx.x - camX) * f, hy + (CAM_H - fx.y) * f).setDisplaySize(sz, sz).setDepth(dep(dz) + 0.01)
          .setAlpha((fx.kind === "fire" ? 1 - u : 0.8 * (1 - u)) * fade(dz));
      });
      /* the player's bike */
      var pf = F / CAM_BACK, psx = cx + (S.px - camX) * pf, pgy = hy + CAM_H * pf, pby = hy + (CAM_H - HOVER - Math.sin(S.t * 7) * 0.025) * pf;
      var pbw = BIKE_WU * pf, pbh = pbw * BT_H / BT_W;
      S.shadow.setPosition(psx, pgy).setDisplaySize(pbw * 1.15, pbw * 0.24);
      S.bike.setPosition(psx, pby).setDisplaySize(pbw, pbh).setRotation(clamp(S.pvx * 0.045, -0.3, 0.3));
      this.blink(S.bike);
      var gl = (0.6 + 0.3 * Math.sin(S.t * 34)) * (0.7 + speedT * 0.5);
      S.glowL.setPosition(psx - pbw * 0.125, pby - pbh * 0.1).setDisplaySize(pbw * 0.42 * (1 + speedT * 0.4), pbw * 0.42).setAlpha(gl);
      S.glowR.setPosition(psx + pbw * 0.125, pby - pbh * 0.1).setDisplaySize(pbw * 0.42 * (1 + speedT * 0.4), pbw * 0.42).setAlpha(gl);
      if (this.player) this.player.setPosition(psx, pby - pbh * 0.6);
      /* speed streaks from the vanishing point, and pollen in the light */
      var SG = S.speedG;
      SG.clear();
      var nS = Math.round(10 + speedT * 22), vx = cx - camX * 2, vy = hy;
      for (i = 0; i < nS; i++) {
        var ang = rnd(0, TAU), r0 = rnd(0.42, 0.75) * W, r1 = r0 + rnd(0.08, 0.2) * W * (0.6 + speedT);
        var ca = Math.cos(ang), sa = Math.sin(ang);
        if (vy + sa * r0 < hy - H * 0.05 && Math.random() < 0.6) continue;
        SG.lineStyle(rnd(1, 2.4) * k, 0xfff2c0, rnd(0.05, 0.14) * (0.4 + speedT));
        SG.lineBetween(vx + ca * r0, vy + sa * r0 * 0.75, vx + ca * r1, vy + sa * r1 * 0.75);
      }
      var MG = S.moteG;
      MG.clear();
      S.motes.forEach(function (m) {
        m.y += (0.012 + m.v * 0.01) * (s || 0) * 1.5; m.x -= (S.pvx * 0.004 + Math.sin(S.t + m.ph) * 0.002) * (s ? 1 : 0);
        if (m.y > 1) { m.y = 0; m.x = Math.random(); } if (m.x < 0) m.x += 1; if (m.x > 1) m.x -= 1;
        MG.fillStyle(0xfff0b0, m.a * (0.6 + 0.4 * Math.sin(S.t * 2 + m.ph))); MG.fillCircle(m.x * W, m.y * H * 0.9, m.r * k);
      });
      this.speederHud();
    },
    /* a red ring on the floor at the bike's depth: an enemy bolt will pass here */
    speederRing: function (x, a) {
      var S = this.sp, f = S.F / CAM_BACK, sx = S.cx + (x - S.camX) * f, gy = S.hy + CAM_H * f, rw = (BIKE_HW + 0.14) * f, G = S.ringG;
      G.lineStyle(Math.max(2, 3 * S.k), 0xff3a22, 0.85 * a);
      G.strokeEllipse(sx, gy, rw * 2, rw * 0.5);
      G.fillStyle(0xff3a22, 0.18 * a);
      G.fillEllipse(sx, gy, rw * 2, rw * 0.5);
    },
    speederHud: function () {
      var S = this.sp, G = S.hudG, h = S.hud, k = S.hk, i, self = this;
      G.clear();
      var bx = h.x + 70 * k;
      /* blaster heat */
      G.fillStyle(0x0c1a08, 0.7); G.fillRoundedRect(h.x - 6 * k, h.y - 4 * k, bx - h.x + h.bw + 14 * k, 44 * k, 6 * k);
      G.fillStyle(0x24361a, 1); G.fillRect(bx, h.y + 2 * k, h.bw, 10 * k);
      G.fillStyle(S.over ? 0xff4a2a : S.heat > 0.7 ? 0xffa040 : 0x8cff7a, 1); G.fillRect(bx, h.y + 2 * k, h.bw * clamp(S.heat, 0, 1), 10 * k);
      G.lineStyle(1, 0xf4e6b0, 0.7); G.strokeRect(bx, h.y + 2 * k, h.bw, 10 * k);
      S.txHeat.setText(S.over ? "TOO HOT!" : "BLASTER").setColor(S.over ? "#ff9a7a" : "#f4e6b0");
      /* speed */
      var sT = clamp(S.spd / (S.P.speed * BOOST), 0, 1);
      G.fillStyle(0x24361a, 1); G.fillRect(bx, h.y + 22 * k, h.bw, 10 * k);
      G.fillStyle(S.boost > 0 ? 0xffd257 : S.boost < 0 ? 0x8ab4ff : 0xe8e0b0, 1); G.fillRect(bx, h.y + 22 * k, h.bw * sT, 10 * k);
      G.lineStyle(1, 0xf4e6b0, 0.7); G.strokeRect(bx, h.y + 22 * k, h.bw, 10 * k);
      /* the scout radar: the lane seen from above, you at the bottom */
      var rx = S.rx, ry = S.ry, rw = h.rw, rh = h.rh, zr0 = -6, zr1 = 34;
      G.fillStyle(0x0c1a08, 0.7); G.fillRoundedRect(rx - rw / 2, ry, rw, rh, 6 * k);
      G.lineStyle(1, 0x8aa868, 0.6); G.strokeRoundedRect(rx - rw / 2, ry, rw, rh, 6 * k);
      function RX(x) { return rx + x / (EDGE + 0.5) * (rw / 2 - 6 * k); }
      function RY(dz) { return ry + rh - 8 * k - (dz - zr0) / (zr1 - zr0) * (rh - 16 * k); }
      G.fillStyle(0xa0c070, 0.25);
      for (i = 0; i < S.trees.length; i++) { var t = S.trees[i], tz = t.z - S.pz; if (!t.deco && tz > zr0 && tz < zr1 && Math.abs(t.x) < EDGE) G.fillCircle(RX(t.x), RY(tz), 2 * k); }
      G.fillStyle(0x8cff7a, 1); G.fillTriangle(RX(S.px), RY(0) - 5 * k, RX(S.px) - 4 * k, RY(0) + 4 * k, RX(S.px) + 4 * k, RY(0) + 4 * k);
      var labs = 0;
      S.scouts.forEach(function (sc) {
        if (sc.state === "leave") return;
        var dz = clamp(sc.z - S.pz, zr0, zr1);
        G.fillStyle(sc.letter ? 0xffd257 : 0xff4a2a, 1); G.fillCircle(RX(sc.x), RY(dz), 3.6 * k);
        if (sc.letter) {
          var lt = S.radarLabels[labs] || (S.radarLabels[labs] = self.add.text(0, 0, "", { fontFamily: "Trebuchet MS", fontSize: 11, color: "#ffe9a0", fontStyle: "bold", stroke: "#10200a", strokeThickness: 3 }).setOrigin(0, 0.5).setDepth(17.1));
          lt.setVisible(true).setText(sc.letter).setFontSize(Math.round(11 * k)).setPosition(RX(sc.x) + 5 * k, RY(dz));
          labs++;
        }
      });
      for (i = labs; i < S.radarLabels.length; i++) S.radarLabels[i].setVisible(false);
      /* scouts behind the camera: a marker at the bottom edge */
      S.behind.forEach(function (sc) {
        var x = clamp(S.cx + (sc.x - S.camX) * S.F / CAM_BACK, 30, self.W - 30), y = self.H - 16 * k;
        G.fillStyle(0xffd257, 0.85); G.fillTriangle(x, y + 8 * k, x - 9 * k, y - 4 * k, x + 9 * k, y - 4 * k);
      });
    }
  });
})();
