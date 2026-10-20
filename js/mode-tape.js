/* SOL Labyrinth v5.22 — the Lit and Film mode "tape": Seven Days (HORROR · The Ring, 2002).
 *
 * A dark room in the film's cold teal-green: rain runs down the window, a bare bulb hangs from the ceiling and
 * flickers, an old CRT with rabbit ears sits on a low cabinet with a VCR whose display counts the days. Through the
 * open door at the right a dark hallway; at its far end, something pale with long black hair is crawling. Every
 * "day" the lights dip, the calendar loses a square and, when they come back, she is closer. Answer before the
 * seventh day and she goes back down the hallway (seven more days for the next question); let the seventh day end
 * and she reaches you: a life, and the days start again.
 *
 * The answer: the TV's channel dial (fixed numbers round a turning knob). Most channels are static; one station per
 * answer letter shows a grainy picture with its letter. Turn the dial (◀ ▶ / A D / the pad; ▲ ▼ / W S fine-tune;
 * drag the knob or point at a number; the mouse wheel) until the picture is clear, then hold TUNE (Space, the
 * action button, or a mouse button on the screen) until the lock ring round the knob closes: that letter is
 * picked (answerPick). One channel plays the cursed tape: a well in a clearing, and a ring of light closing over
 * it like an eclipse. Passing through is safe; staying until the ring closes costs a life.
 *
 * Harder level by level (tapeParams, one curve 1-100): shorter days, more channels, narrower tuning, a longer
 * lock, the stations drift off their channels (11), the tape moves every day (21), power cuts hide the dial (31),
 * the TV turns itself to the tape (41), the dial loses its station dots (51), heavier static (61), the stations
 * swap channels every day (71), two tapes (81), and the seventh day (91).
 *
 * Registered with SolModes.extend (js/modes.js); the methods are copied onto ModeScene, so `this` is the mode
 * scene. Every texture is drawn once (canvasTex) under an "md-tape-" key. Dread, not gore: she is never seen
 * closer than a silhouette with her hair over her face.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, shuffle = L.shuffle, canvasTex = L.canvasTex, angDiff = L.angDiff;

  var TAU = Math.PI * 2, DEG = Math.PI / 180;
  var SERIF = "Georgia, 'Times New Roman', serif", MONO = "'Courier New', Courier, monospace";
  var RES = 2;                                  /* the TV and its knob are drawn at twice their size, for crisp scaling */
  var TVW = 480, TVH = 380;                     /* the TV texture (units): antenna 0-50, body 50-372, feet to 380 */
  var SCR = { x: 26, y: 74, w: 306, h: 232 };   /* the screen hole in the TV texture */
  var KNOB = { x: 409, y: 142, r: 30, ring: 47 };
  var DIAL0 = 120 * DEG, DIALSPAN = 300 * DEG;  /* channel 0 sits at the lower left; the numbers run clockwise */
  var FIG_W = 200, FIG_H = 160, RISE_W = 180, RISE_H = 330;
  var MOTIFS = ["tree", "ladder", "chair", "lighthouse", "mirror", "house"];
  var C = { ink: 0x040a09, teal: 0x2f7a6b, sea: 0x5fb8a2, pale: 0xcfe8df, led: 0x7dffb0, red: 0xd0583e, amber: 0xd9b45a };

  /* ── difficulty: one curve for every level 1-100, each level harder than the one before ── */
  function tapeParams(n) {
    n = clamp(Math.floor(Number(n) || 1), 1, 100);
    return {
      dayMs: 9000 - n * 55,                                         /* one "day", ms: 8.9 s at 1 (62 s for all seven), 3.5 s at 100 (25 s) */
      channels: Math.min(12, 6 + Math.floor((n - 1) / 10)),         /* channels on the dial: 6 ... 12 (from 61) */
      tuneW: 0.42 - n * 0.0022,                                     /* how far off a station (in channels) the picture still shows */
      lockMs: 450 + n * 6,                                          /* hold TUNE this long on a clear picture */
      drift: n >= 11 ? Math.min(0.32, 0.06 + (n - 11) * 0.003) : 0, /* stations wander off their channel, ± channels */
      driftSpd: 0.35 + n * 0.006,                                   /* ... this fast (rad/s) */
      snap: n <= 20 ? 1 - (n - 1) * 0.04 : 0,                       /* the dial settles on a channel by itself */
      ringMs: 3200 - n * 20,                                        /* watching the tape this long closes the ring */
      tapeMoves: n >= 21 ? 1 : 0,                                   /* the tape changes channel every day */
      blackEvery: n >= 31 ? Math.max(5000, 14000 - (n - 31) * 130) : 1e9,   /* power cuts: ms between them */
      blackMs: n >= 31 ? 900 + (n - 31) * 12 : 0,                   /* ... and how long the dark lasts */
      hijackEvery: n >= 41 ? (16000 - (n - 41) * 150) * (n >= 91 ? 0.8 : 1) : 1e9,   /* the TV turns itself to the tape */
      hijackWarn: Math.max(700, 1500 - n * 8),                      /* the knob shudders first, ms */
      dots: n < 51 ? 1 : 0,                                         /* the dial marks the stations' channels */
      noise: 0.05 + n * 0.004,                                      /* static left on a clear picture */
      swap: n >= 71 ? 1 : 0,                                        /* the stations swap channels every day */
      tapes: n >= 81 ? 2 : 1                                        /* channels playing the tape */
    };
  }

  /* ── art ── */
  /* a text's colour, set only when it changes (setColor redraws the text) */
  function tcol(t, col) { if (t._col !== col) { t._col = col; t.setColor(col); } return t; }
  function rr(c, x, y, w, h, r) {
    c.beginPath(); c.moveTo(x + r, y); c.lineTo(x + w - r, y); c.quadraticCurveTo(x + w, y, x + w, y + r); c.lineTo(x + w, y + h - r);
    c.quadraticCurveTo(x + w, y + h, x + w - r, y + h); c.lineTo(x + r, y + h); c.quadraticCurveTo(x, y + h, x, y + h - r); c.lineTo(x, y + r);
    c.quadraticCurveTo(x, y, x + r, y); c.closePath();
  }
  /* the CRT's screen: a rounded rectangle that bulges a little at every side */
  function screenPath(c, x, y, w, h, r, b) {
    c.beginPath(); c.moveTo(x + r, y);
    c.quadraticCurveTo(x + w / 2, y - b, x + w - r, y); c.quadraticCurveTo(x + w, y, x + w, y + r);
    c.quadraticCurveTo(x + w + b, y + h / 2, x + w, y + h - r); c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    c.quadraticCurveTo(x + w / 2, y + h + b, x + r, y + h); c.quadraticCurveTo(x, y + h, x, y + h - r);
    c.quadraticCurveTo(x - b, y + h / 2, x, y + r); c.quadraticCurveTo(x, y, x + r, y); c.closePath();
  }
  function grain(c, w, h, n, a) {
    for (var i = 0; i < n; i++) { var v = Math.random(); c.fillStyle = "rgba(" + (v > 0.5 ? "220,240,232," : "0,8,6,") + (a * Math.random()) + ")"; c.fillRect(Math.random() * w, Math.random() * h, 1.2, 1.2); }
  }
  function drawStatic(c, w, h) {
    var img = c.createImageData(w, h), d = img.data, i, y, x, row;
    for (y = 0; y < h; y++) {
      row = Math.random() < 0.08 ? rnd(-60, 60) : 0;       /* a few brighter or darker bands */
      for (x = 0; x < w; x++) {
        i = (y * w + x) * 4;
        var v = clamp(Math.random() * 235 + row, 0, 255);
        d[i] = v * 0.78; d[i + 1] = v * 0.97; d[i + 2] = v * 0.9; d[i + 3] = 255;
      }
    }
    c.putImageData(img, 0, 0);
  }
  function drawScan(c, w, h) { c.fillStyle = "rgba(0,0,0,0.42)"; c.fillRect(0, 0, w, 1.5); c.fillStyle = "rgba(160,255,220,0.05)"; c.fillRect(0, 2, w, 1); }
  /* a station's picture: a grainy black-and-white image tinted teal, one lonely thing in it */
  function drawMotif(kind) {
    return function (c, w, h) {
      var g = c.createLinearGradient(0, 0, 0, h), hz = h * 0.66;
      g.addColorStop(0, "#9fbfb4"); g.addColorStop(0.6, "#5f8379"); g.addColorStop(1, "#22362f");
      c.fillStyle = g; c.fillRect(0, 0, w, h);
      c.fillStyle = "#1b2b26"; c.lineWidth = 2; c.strokeStyle = "#0c1512";
      var k = w / 240;
      if (kind === "tree") {
        c.beginPath(); c.moveTo(0, hz + 8 * k); c.quadraticCurveTo(w * 0.5, hz - 22 * k, w, hz + 10 * k); c.lineTo(w, h); c.lineTo(0, h); c.closePath(); c.fill();
        c.strokeStyle = "#0d1714"; c.lineCap = "round";
        (function br(x, y, a, len, wd, depth) {
          var x2 = x + Math.cos(a) * len, y2 = y + Math.sin(a) * len;
          c.lineWidth = wd; c.beginPath(); c.moveTo(x, y); c.lineTo(x2, y2); c.stroke();
          if (depth > 0) { br(x2, y2, a - rnd(0.3, 0.6), len * 0.72, wd * 0.66, depth - 1); br(x2, y2, a + rnd(0.3, 0.6), len * 0.7, wd * 0.66, depth - 1); }
        })(w * 0.56, hz - 12 * k, -Math.PI / 2, 34 * k, 7 * k, 6);
      } else if (kind === "ladder") {
        c.fillStyle = "#3e5a51"; c.fillRect(w * 0.18, h * 0.08, w * 0.64, hz - h * 0.08);
        c.fillStyle = "#24362f"; c.fillRect(0, hz, w, h - hz);
        c.strokeStyle = "#0b1411"; c.lineWidth = 5 * k;
        c.beginPath(); c.moveTo(w * 0.42, hz + 18 * k); c.lineTo(w * 0.5, h * 0.06); c.moveTo(w * 0.6, hz + 18 * k); c.lineTo(w * 0.66, h * 0.06); c.stroke();
        c.lineWidth = 3.5 * k;
        for (var r = 0; r < 8; r++) { var t = (r + 0.5) / 8, y = hz + 18 * k - t * (hz + 18 * k - h * 0.06); c.beginPath(); c.moveTo(w * (0.42 + 0.08 * t), y); c.lineTo(w * (0.6 + 0.06 * t), y); c.stroke(); }
      } else if (kind === "chair") {
        c.fillStyle = "#4a675e"; c.fillRect(0, 0, w, hz);
        c.fillStyle = "#c9e2d8"; c.globalAlpha = 0.35; c.fillRect(w * 0.62, h * 0.12, w * 0.2, h * 0.34); c.globalAlpha = 1;
        c.fillStyle = "#2a3d36"; c.fillRect(0, hz, w, h - hz);
        c.fillStyle = "#0c1512";
        c.fillRect(w * 0.36, h * 0.24, 6 * k, hz - h * 0.24 + 26 * k); c.fillRect(w * 0.36 + 44 * k, h * 0.24, 6 * k, hz - h * 0.24 + 6 * k);
        c.fillRect(w * 0.36, hz - 8 * k, 56 * k, 7 * k);
        c.fillRect(w * 0.36 + 8 * k, hz - 2 * k, 5 * k, 34 * k); c.fillRect(w * 0.36 + 48 * k, hz - 2 * k, 5 * k, 24 * k);
        for (var s = 0; s < 3; s++) c.fillRect(w * 0.36, h * 0.28 + s * 12 * k, 50 * k, 3 * k);
      } else if (kind === "lighthouse") {
        c.fillStyle = "#33504a"; c.fillRect(0, hz + 6 * k, w, h - hz);
        c.fillStyle = "#0e1815"; c.beginPath(); c.moveTo(0, hz - 4 * k); c.lineTo(w * 0.62, hz - 10 * k); c.lineTo(w * 0.72, hz + 6 * k); c.lineTo(w * 0.72, h); c.lineTo(0, h); c.closePath(); c.fill();
        var lx = w * 0.4;
        c.beginPath(); c.moveTo(lx - 12 * k, hz - 8 * k); c.lineTo(lx - 7 * k, h * 0.2); c.lineTo(lx + 7 * k, h * 0.2); c.lineTo(lx + 12 * k, hz - 8 * k); c.closePath(); c.fill();
        c.fillRect(lx - 10 * k, h * 0.12, 20 * k, 10 * k);
        var bg = c.createLinearGradient(lx, 0, w, 0); bg.addColorStop(0, "rgba(235,255,245,0.7)"); bg.addColorStop(1, "rgba(235,255,245,0)");
        c.fillStyle = bg; c.beginPath(); c.moveTo(lx, h * 0.16); c.lineTo(w, h * 0.04); c.lineTo(w, h * 0.3); c.closePath(); c.fill();
        c.fillStyle = "#f2fff8"; c.fillRect(lx - 5 * k, h * 0.135, 10 * k, 6 * k);
      } else if (kind === "mirror") {
        c.fillStyle = "#3f5c53"; c.fillRect(0, 0, w, h);
        c.fillStyle = "#0e1815"; c.beginPath(); c.ellipse(w * 0.5, h * 0.45, 44 * k, 60 * k, 0, 0, TAU); c.fill();
        var mg = c.createLinearGradient(0, h * 0.2, 0, h * 0.7); mg.addColorStop(0, "#b8d4ca"); mg.addColorStop(1, "#4e6c63");
        c.fillStyle = mg; c.beginPath(); c.ellipse(w * 0.5, h * 0.45, 37 * k, 53 * k, 0, 0, TAU); c.fill();
        c.fillStyle = "rgba(10,20,17,0.55)"; c.beginPath(); c.ellipse(w * 0.53, h * 0.5, 14 * k, 26 * k, 0, 0, TAU); c.fill();
      } else {
        c.fillStyle = "#26392f"; c.fillRect(0, hz, w, h - hz);
        c.fillStyle = "#0e1815"; c.fillRect(w * 0.35, hz - 38 * k, 70 * k, 40 * k);
        c.beginPath(); c.moveTo(w * 0.35 - 8 * k, hz - 36 * k); c.lineTo(w * 0.35 + 35 * k, hz - 66 * k); c.lineTo(w * 0.35 + 78 * k, hz - 36 * k); c.closePath(); c.fill();
        c.fillStyle = "rgba(220,240,200,0.55)"; c.fillRect(w * 0.35 + 12 * k, hz - 26 * k, 9 * k, 10 * k);
      }
      grain(c, w, h, 1600, 0.5);
      var v = c.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, w * 0.7);
      v.addColorStop(0, "rgba(0,0,0,0)"); v.addColorStop(1, "rgba(0,10,8,0.7)");
      c.fillStyle = v; c.fillRect(0, 0, w, h);
    };
  }
  /* the tape: a stone well in a clearing ringed by dark trees, under a pale sky */
  function drawWell(c, w, h) {
    var k = w / 240, g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "#d6ece4"); g.addColorStop(0.55, "#7fa69a"); g.addColorStop(1, "#1a2a25");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    c.fillStyle = "#0b1311";
    for (var i = 0; i < 26; i++) { var x = i / 25 * w, th = rnd(26, 52) * k; c.beginPath(); c.moveTo(x - 10 * k, h * 0.62); c.lineTo(x, h * 0.62 - th); c.lineTo(x + 10 * k, h * 0.62); c.closePath(); c.fill(); }
    c.fillStyle = "#2c4039"; c.fillRect(0, h * 0.6, w, h * 0.4);
    var cx = w / 2, cy = h * 0.8;
    c.fillStyle = "#56706a"; c.fillRect(cx - 34 * k, cy - 22 * k, 68 * k, 30 * k);
    c.fillStyle = "#8aa69d"; c.beginPath(); c.ellipse(cx, cy - 22 * k, 34 * k, 9 * k, 0, 0, TAU); c.fill();
    c.fillStyle = "#050807"; c.beginPath(); c.ellipse(cx, cy - 22 * k, 26 * k, 6 * k, 0, 0, TAU); c.fill();
    c.strokeStyle = "rgba(10,20,17,0.6)"; c.lineWidth = 1;
    for (var r = 0; r < 3; r++) { c.beginPath(); c.moveTo(cx - 34 * k, cy - 14 * k + r * 8 * k); c.lineTo(cx + 34 * k, cy - 14 * k + r * 8 * k); c.stroke(); }
    grain(c, w, h, 1800, 0.55);
    var v = c.createRadialGradient(w / 2, h / 2, h * 0.25, w / 2, h / 2, w * 0.7);
    v.addColorStop(0, "rgba(0,0,0,0)"); v.addColorStop(1, "rgba(0,10,8,0.75)");
    c.fillStyle = v; c.fillRect(0, 0, w, h);
  }
  /* glass: dark corners and a soft reflection of the room */
  function drawGlass(c, w, h) {
    var v = c.createRadialGradient(w / 2, h / 2, h * 0.32, w / 2, h / 2, w * 0.62);
    v.addColorStop(0, "rgba(0,0,0,0)"); v.addColorStop(1, "rgba(0,6,5,0.6)");
    c.fillStyle = v; c.fillRect(0, 0, w, h);
    var g = c.createLinearGradient(0, 0, w * 0.5, h * 0.6);
    g.addColorStop(0, "rgba(220,255,240,0.16)"); g.addColorStop(1, "rgba(220,255,240,0)");
    c.fillStyle = g; c.beginPath(); c.moveTo(w * 0.04, h * 0.05); c.quadraticCurveTo(w * 0.4, h * 0.0, w * 0.62, h * 0.06); c.quadraticCurveTo(w * 0.3, h * 0.2, w * 0.05, h * 0.55); c.closePath(); c.fill();
  }
  function drawTv(c) {
    c.scale(RES, RES);
    var g;
    /* the rabbit ears */
    c.strokeStyle = "#9aa9a3"; c.lineWidth = 2.2; c.lineCap = "round";
    c.beginPath(); c.moveTo(232, 46); c.lineTo(150, 3); c.moveTo(248, 46); c.lineTo(334, 6); c.stroke();
    c.fillStyle = "#cfe0d9"; c.beginPath(); c.arc(150, 3, 2.6, 0, TAU); c.arc(334, 6, 2.6, 0, TAU); c.fill();
    c.fillStyle = "#1d2422"; c.beginPath(); c.ellipse(240, 52, 22, 10, 0, Math.PI, 0); c.fill();
    /* the cabinet of the set: dark walnut under teal light */
    g = c.createLinearGradient(0, 50, 0, 372);
    g.addColorStop(0, "#3a3a2e"); g.addColorStop(0.5, "#2a2a22"); g.addColorStop(1, "#1a1b16");
    c.fillStyle = g; rr(c, 0, 50, 480, 322, 22); c.fill();
    c.strokeStyle = "rgba(120,200,180,0.25)"; c.lineWidth = 1.5; rr(c, 1.5, 51.5, 477, 319, 21); c.stroke();
    c.strokeStyle = "rgba(0,0,0,0.25)"; c.lineWidth = 1;
    for (var i = 0; i < 26; i++) { var y = 60 + i * 12 + rnd(-2, 2); c.beginPath(); c.moveTo(4, y); c.bezierCurveTo(120, y + rnd(-5, 5), 300, y + rnd(-5, 5), 476, y + rnd(-3, 3)); c.stroke(); }
    /* feet */
    c.fillStyle = "#121411"; c.fillRect(54, 370, 30, 10); c.fillRect(396, 370, 30, 10);
    /* the bezel round the screen, and the hole */
    g = c.createLinearGradient(0, 64, 0, 318); g.addColorStop(0, "#4b5753"); g.addColorStop(1, "#262e2b");
    c.fillStyle = g; rr(c, 14, 62, 330, 258, 30); c.fill();
    c.fillStyle = "#0a0e0d"; screenPath(c, SCR.x - 6, SCR.y - 6, SCR.w + 12, SCR.h + 12, 30, 6); c.fill();
    c.save(); c.globalCompositeOperation = "destination-out"; screenPath(c, SCR.x, SCR.y, SCR.w, SCR.h, 26, 6); c.fill(); c.restore();
    /* the strip under the screen: a grille and four buttons */
    c.fillStyle = "#151a18"; rr(c, 30, 326, 298, 34, 6); c.fill();
    c.strokeStyle = "rgba(140,190,175,0.18)"; c.lineWidth = 1;
    for (var s = 0; s < 6; s++) { c.beginPath(); c.moveTo(40, 332 + s * 4.5); c.lineTo(190, 332 + s * 4.5); c.stroke(); }
    for (var b = 0; b < 4; b++) { c.fillStyle = "#56625e"; rr(c, 210 + b * 28, 334, 20, 16, 3); c.fill(); c.fillStyle = "rgba(255,255,255,0.12)"; c.fillRect(212 + b * 28, 335, 16, 3); }
    /* the panel: brushed metal */
    g = c.createLinearGradient(352, 0, 468, 0); g.addColorStop(0, "#3a4643"); g.addColorStop(0.5, "#4f5c58"); g.addColorStop(1, "#323d3a");
    c.fillStyle = g; rr(c, 352, 64, 116, 296, 10); c.fill();
    c.strokeStyle = "rgba(0,0,0,0.5)"; c.lineWidth = 1.2; rr(c, 352, 64, 116, 296, 10); c.stroke();
    c.fillStyle = "rgba(220,240,232,0.75)"; c.font = "bold 9px " + MONO; c.textAlign = "center"; c.fillText("CHANNEL", KNOB.x, 80);
    /* the dark well the knob turns in */
    c.fillStyle = "#1a201e"; c.beginPath(); c.arc(KNOB.x, KNOB.y, KNOB.r + 6, 0, TAU); c.fill();
    c.strokeStyle = "rgba(200,230,220,0.2)"; c.lineWidth = 1; c.beginPath(); c.arc(KNOB.x, KNOB.y, KNOB.ring + 9, DIAL0 - 0.08, DIAL0 + DIALSPAN + 0.08); c.stroke();
    /* the fixed pointer over the knob: the channel tuned is the one the knob's line points to */
    /* the fine-tune knob and the power light */
    c.fillStyle = "#1a201e"; c.beginPath(); c.arc(426, 224, 15, 0, TAU); c.fill();
    g = c.createRadialGradient(422, 220, 2, 426, 224, 13); g.addColorStop(0, "#6a7672"); g.addColorStop(1, "#262d2b");
    c.fillStyle = g; c.beginPath(); c.arc(426, 224, 12, 0, TAU); c.fill();
    c.fillStyle = "rgba(220,240,232,0.6)"; c.font = "bold 7px " + MONO; c.fillText("FINE", 426, 248);
    c.fillStyle = "#3a0d08"; c.beginPath(); c.arc(380, 224, 4, 0, TAU); c.fill();
    c.fillText("POWER", 380, 248);
    /* the speaker grille */
    c.fillStyle = "#1c2321"; rr(c, 364, 258, 92, 90, 6); c.fill();
    c.strokeStyle = "#0b0f0e"; c.lineWidth = 2.4;
    for (var q = 0; q < 12; q++) { c.beginPath(); c.moveTo(370, 266 + q * 6.8); c.lineTo(450, 266 + q * 6.8); c.stroke(); }
  }
  /* the channel knob: ribbed bakelite with a white line (pointing up before it turns) */
  function drawKnob(c) {
    c.scale(RES, RES);
    var cx = 40, cy = 40, r = KNOB.r, g;
    c.fillStyle = "rgba(0,0,0,0.45)"; c.beginPath(); c.arc(cx + 2, cy + 3, r, 0, TAU); c.fill();
    g = c.createRadialGradient(cx - 9, cy - 10, 3, cx, cy, r);
    g.addColorStop(0, "#5b6662"); g.addColorStop(0.6, "#262d2b"); g.addColorStop(1, "#111614");
    c.fillStyle = g; c.beginPath(); c.arc(cx, cy, r, 0, TAU); c.fill();
    c.strokeStyle = "rgba(0,0,0,0.55)"; c.lineWidth = 1.4;
    for (var i = 0; i < 28; i++) { var a = i / 28 * TAU; c.beginPath(); c.moveTo(cx + Math.cos(a) * (r - 4), cy + Math.sin(a) * (r - 4)); c.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); c.stroke(); }
    g = c.createRadialGradient(cx - 4, cy - 5, 1, cx, cy, r * 0.62);
    g.addColorStop(0, "#4d5854"); g.addColorStop(1, "#1d2422");
    c.fillStyle = g; c.beginPath(); c.arc(cx, cy, r * 0.62, 0, TAU); c.fill();
    c.fillStyle = "#e8f4ee"; rr(c, cx - 2.2, cy - r + 2, 4.4, r * 0.62, 2); c.fill();
  }
  function drawGlow(rgb) {
    return function (c, w, h) {
      var g = c.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2);
      g.addColorStop(0, "rgba(" + rgb + ",0.55)"); g.addColorStop(0.45, "rgba(" + rgb + ",0.16)"); g.addColorStop(1, "rgba(" + rgb + ",0)");
      c.fillStyle = g; c.fillRect(0, 0, w, h);
    };
  }
  function drawBulb(c, w, h) {
    c.fillStyle = "#1b2220"; c.fillRect(w / 2 - 6, 0, 12, 14);
    var g = c.createRadialGradient(w / 2 - 3, 24, 2, w / 2, 26, 13);
    g.addColorStop(0, "#fffbe8"); g.addColorStop(0.5, "#e8f0d0"); g.addColorStop(1, "#8faa96");
    c.fillStyle = g; c.beginPath(); c.moveTo(w / 2 - 5, 13); c.quadraticCurveTo(w / 2 - 14, 22, w / 2 - 9, 33); c.quadraticCurveTo(w / 2, 42, w / 2 + 9, 33); c.quadraticCurveTo(w / 2 + 14, 22, w / 2 + 5, 13); c.closePath(); c.fill();
  }
  function drawCone(c, w, h) {
    var g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "rgba(210,240,220,0.32)"); g.addColorStop(1, "rgba(210,240,220,0)");
    c.fillStyle = g; c.beginPath(); c.moveTo(w / 2 - 10, 0); c.lineTo(w / 2 + 10, 0); c.lineTo(w, h); c.lineTo(0, h); c.closePath(); c.fill();
  }
  function drawCalendar(c, w, h) {
    c.fillStyle = "rgba(0,0,0,0.35)"; c.fillRect(4, 5, w - 4, h - 4);
    c.fillStyle = "#c7d6cc"; c.fillRect(0, 0, w - 4, h - 4);
    c.fillStyle = "#6b2e26"; c.fillRect(0, 0, w - 4, 22);
    c.fillStyle = "#e9f2ec"; c.font = "bold 12px " + SERIF; c.textAlign = "center"; c.fillText("SEVEN DAYS", (w - 4) / 2, 15);
    c.strokeStyle = "#34463f"; c.lineWidth = 1; c.fillStyle = "#34463f"; c.font = "bold 13px " + SERIF;
    for (var i = 0; i < 7; i++) {
      var col = i % 4, row = Math.floor(i / 4), bx = 6 + col * 24, by = 30 + row * 34;
      c.strokeRect(bx, by, 21, 29); c.fillText(String(i + 1), bx + 10.5, by + 19);
    }
    c.fillStyle = "#8e9f97"; c.beginPath(); c.arc((w - 4) / 2, -1, 3, 0, TAU); c.fill();
  }
  /* she crawls toward you: a front view, head bowed, the long black hair hanging over her face to the floor.
     frame 0 and 1 swap the arm that reaches forward. Bottom centre = where she touches the floor. */
  function drawCrawl(f) {
    return function (c, w, h) {
      var cx = w / 2;
      c.fillStyle = "rgba(0,0,0,0.45)"; c.beginPath(); c.ellipse(cx, h - 6, 84, 9, 0, 0, TAU); c.fill();
      /* the white dress: hunched shoulders and the back rising behind the head */
      var g = c.createLinearGradient(0, 30, 0, 120); g.addColorStop(0, "#e4eee8"); g.addColorStop(1, "#8fa59c");
      c.fillStyle = g;
      c.beginPath(); c.moveTo(cx - 52, 92); c.quadraticCurveTo(cx - 50, 36, cx, 30); c.quadraticCurveTo(cx + 50, 36, cx + 52, 92); c.quadraticCurveTo(cx, 104, cx - 52, 92); c.closePath(); c.fill();
      c.fillStyle = "rgba(60,80,72,0.35)"; c.beginPath(); c.moveTo(cx - 20, 40); c.quadraticCurveTo(cx - 30, 70, cx - 40, 96); c.lineTo(cx - 30, 96); c.quadraticCurveTo(cx - 18, 66, cx - 12, 40); c.fill();
      /* the arms, thin and pale, braced on the floor */
      function arm(sx, sy, ex, ey, kx, ky) {
        c.strokeStyle = "#7e938a"; c.lineWidth = 12; c.lineCap = "round"; c.lineJoin = "round"; c.beginPath(); c.moveTo(sx, sy); c.lineTo(kx, ky); c.lineTo(ex, ey); c.stroke();
        c.strokeStyle = "#d8e4de"; c.lineWidth = 8.5; c.beginPath(); c.moveTo(sx, sy); c.lineTo(kx, ky); c.lineTo(ex, ey); c.stroke();
        c.fillStyle = "#cddbd4"; c.beginPath(); c.ellipse(ex, ey + 1, 8, 4.5, 0, 0, TAU); c.fill();
      }
      var fwdL = f === 0 ? 1 : 0;
      arm(cx - 42, 68, cx - 56 - fwdL * 4, h - 14 + fwdL * 3, cx - 58 + fwdL * 2, 108 + fwdL * 6);
      arm(cx + 42, 68, cx + 56 + (1 - fwdL) * 4, h - 14 + (1 - fwdL) * 3, cx + 58 - (1 - fwdL) * 2, 108 + (1 - fwdL) * 6);
      /* the head, bowed, and the curtain of hair down to the floor */
      c.fillStyle = "#050807"; c.beginPath(); c.ellipse(cx, 52, 24, 22, 0, 0, TAU); c.fill();
      c.beginPath(); c.moveTo(cx - 26, 50);
      c.bezierCurveTo(cx - 34, 90, cx - 30, 130, cx - 36, h - 8);
      for (var s = 0; s <= 10; s++) c.lineTo(cx - 36 + s * 7.2, h - 8 - (s % 2) * 7 - Math.random() * 4);
      c.bezierCurveTo(cx + 30, 130, cx + 34, 90, cx + 26, 50); c.closePath(); c.fill();
      c.strokeStyle = "rgba(90,140,125,0.35)"; c.lineWidth = 1.1;
      for (var t = 0; t < 14; t++) { var x0 = cx - 20 + t * 3; c.beginPath(); c.moveTo(x0, 40); c.bezierCurveTo(x0 + rnd(-6, 6), 80, x0 + rnd(-8, 8), 110, x0 + rnd(-10, 10), h - 14); c.stroke(); }
    };
  }
  /* the seventh day: she stands, hair over her face, one arm lifting toward you */
  function drawRise(c, w, h) {
    var cx = w / 2, g = c.createLinearGradient(0, 60, 0, h);
    g.addColorStop(0, "#e8f2ec"); g.addColorStop(1, "#7f968c");
    c.fillStyle = g;
    c.beginPath(); c.moveTo(cx - 30, 74); c.quadraticCurveTo(cx - 42, 200, cx - 58, h); c.lineTo(cx + 58, h); c.quadraticCurveTo(cx + 42, 200, cx + 30, 74); c.quadraticCurveTo(cx, 64, cx - 30, 74); c.closePath(); c.fill();
    c.strokeStyle = "#d8e4de"; c.lineWidth = 9; c.lineCap = "round";
    c.beginPath(); c.moveTo(cx - 30, 86); c.quadraticCurveTo(cx - 40, 150, cx - 38, 196); c.stroke();
    c.beginPath(); c.moveTo(cx + 30, 86); c.quadraticCurveTo(cx + 62, 120, cx + 78, 104); c.stroke();
    c.fillStyle = "#050807"; c.beginPath(); c.ellipse(cx, 40, 23, 27, 0.1, 0, TAU); c.fill();
    c.beginPath(); c.moveTo(cx - 24, 34); c.bezierCurveTo(cx - 34, 90, cx - 30, 150, cx - 34, 182);
    for (var s = 0; s <= 8; s++) c.lineTo(cx - 34 + s * 8.5, 182 - (s % 2) * 9);
    c.bezierCurveTo(cx + 30, 150, cx + 34, 90, cx + 24, 34); c.closePath(); c.fill();
    c.strokeStyle = "rgba(90,140,125,0.35)"; c.lineWidth = 1.1;
    for (var t = 0; t < 12; t++) { var x0 = cx - 18 + t * 3.2; c.beginPath(); c.moveTo(x0, 22); c.bezierCurveTo(x0 + rnd(-5, 5), 90, x0 + rnd(-8, 8), 140, x0 + rnd(-9, 9), 178); c.stroke(); }
  }
  function ensureTapeArt(scene) {
    var i;
    for (i = 0; i < 5; i++) canvasTex(scene, "md-tape-static-" + i, 128, 96, drawStatic);
    for (i = 0; i < 5; i++) { try { scene.textures.get("md-tape-static-" + i).setFilter(Phaser.Textures.FilterMode.NEAREST); } catch (e) {} }
    canvasTex(scene, "md-tape-scan", 8, 4, drawScan);
    MOTIFS.forEach(function (m) { canvasTex(scene, "md-tape-pic-" + m, 240, 182, drawMotif(m)); });
    canvasTex(scene, "md-tape-well", 240, 182, drawWell);
    canvasTex(scene, "md-tape-glass", 306, 232, drawGlass);
    canvasTex(scene, "md-tape-tv", TVW * RES, TVH * RES, drawTv);
    canvasTex(scene, "md-tape-knob", 80 * RES, 80 * RES, drawKnob);
    canvasTex(scene, "md-tape-glow", 256, 256, drawGlow("120,230,200"));
    canvasTex(scene, "md-tape-warm", 256, 256, drawGlow("220,240,210"));
    canvasTex(scene, "md-tape-bulb", 40, 46, drawBulb);
    canvasTex(scene, "md-tape-cone", 300, 360, drawCone);
    canvasTex(scene, "md-tape-cal", 104, 104, drawCalendar);
    canvasTex(scene, "md-tape-girl-0", FIG_W, FIG_H, drawCrawl(0));
    canvasTex(scene, "md-tape-girl-1", FIG_W, FIG_H, drawCrawl(1));
    canvasTex(scene, "md-tape-rise", RISE_W, RISE_H, drawRise);
  }
  /* the room, drawn once for the canvas size (B is the layout) */
  function drawRoom(B, W, H) {
    return function (c) {
      var fy = B.floorY, k = B.k, g, i;
      /* the wall: cold teal-green, darker toward the ceiling, faint wallpaper stripes, a damp stain */
      g = c.createLinearGradient(0, 0, 0, fy);
      g.addColorStop(0, "#040b0a"); g.addColorStop(0.45, "#0d211d"); g.addColorStop(1, "#163631");
      c.fillStyle = g; c.fillRect(0, 0, W, fy);
      g = c.createRadialGradient(B.tvX, B.scrY + B.scrH / 2, 20, B.tvX, B.scrY + B.scrH / 2, W * 0.6);
      g.addColorStop(0, "rgba(90,180,155,0.14)"); g.addColorStop(1, "rgba(90,180,155,0)");
      c.fillStyle = g; c.fillRect(0, 0, W, fy);
      c.fillStyle = "rgba(0,0,0,0.13)";
      for (var x = 0; x < W; x += 34 * k) c.fillRect(x, 0, 14 * k, fy);
      g = c.createRadialGradient(W * 0.64, 8, 4, W * 0.64, 8, 120 * k);
      g.addColorStop(0, "rgba(40,30,15,0.35)"); g.addColorStop(1, "rgba(40,30,15,0)");
      c.fillStyle = g; c.fillRect(0, 0, W, 140 * k);
      /* the baseboard and the floorboards, running toward the far wall */
      c.fillStyle = "#0b1a17"; c.fillRect(0, fy - 10 * k, W, 10 * k);
      g = c.createLinearGradient(0, fy, 0, H);
      g.addColorStop(0, "#101e1b"); g.addColorStop(1, "#1d302b");
      c.fillStyle = g; c.fillRect(0, fy, W, H - fy);
      var vx = W * 0.5, vy = fy - H * 0.9;
      c.strokeStyle = "rgba(0,0,0,0.35)"; c.lineWidth = 1.2;
      for (i = -14; i <= 14; i++) { var bx = W * 0.5 + i * 70 * k; var t0 = (fy - vy) / (H - vy); c.beginPath(); c.moveTo(vx + (bx - vx) * t0, fy); c.lineTo(bx, H); c.stroke(); }
      c.strokeStyle = "rgba(0,0,0,0.18)";
      for (i = 1; i < 7; i++) { var yy = fy + (H - fy) * Math.pow(i / 7, 1.5); c.beginPath(); c.moveTo(0, yy); c.lineTo(W, yy); c.stroke(); }
      /* the window, rain outside (the rain itself is drawn every frame) */
      var wx0 = B.win.x0, wx1 = B.win.x1, wy0 = B.win.y0, wy1 = B.win.y1;
      g = c.createLinearGradient(0, wy0, 0, wy1);
      g.addColorStop(0, "#0e2a26"); g.addColorStop(0.7, "#1f4a42"); g.addColorStop(1, "#173a34");
      c.fillStyle = g; c.fillRect(wx0, wy0, wx1 - wx0, wy1 - wy0);
      c.fillStyle = "#051210";
      for (i = 0; i < 14; i++) { var tx = wx0 + (i + 0.5) / 14 * (wx1 - wx0), th = rnd(0.12, 0.3) * (wy1 - wy0); c.beginPath(); c.moveTo(tx - 9 * k, wy1); c.lineTo(tx, wy1 - th); c.lineTo(tx + 9 * k, wy1); c.closePath(); c.fill(); }
      c.fillStyle = "#081614"; c.fillRect(wx0, wy1 - (wy1 - wy0) * 0.08, wx1 - wx0, (wy1 - wy0) * 0.08);
      c.strokeStyle = "#8ea69c"; c.lineWidth = 6 * k; c.strokeRect(wx0, wy0, wx1 - wx0, wy1 - wy0);
      c.lineWidth = 3.5 * k; c.beginPath(); c.moveTo((wx0 + wx1) / 2, wy0); c.lineTo((wx0 + wx1) / 2, wy1); c.moveTo(wx0, (wy0 + wy1) / 2); c.lineTo(wx1, (wy0 + wy1) / 2); c.stroke();
      c.fillStyle = "#6f877e"; c.fillRect(wx0 - 12 * k, wy1 + 2 * k, wx1 - wx0 + 24 * k, 7 * k);
      /* the open door at the right and the hallway beyond it */
      var d0 = B.door.x0, d1 = B.door.x1, dt = B.door.top, fx = B.hall.x, fw = B.hall.w, ft = B.hall.top, fb = B.hall.floor;
      c.fillStyle = "#020605"; c.fillRect(d0, dt, d1 - d0, fy - dt);
      c.fillStyle = "#07120f"; c.beginPath(); c.moveTo(d0, dt); c.lineTo(fx - fw / 2, ft); c.lineTo(fx - fw / 2, fb); c.lineTo(d0, fy); c.closePath(); c.fill();
      c.fillStyle = "#091614"; c.beginPath(); c.moveTo(d1, dt); c.lineTo(fx + fw / 2, ft); c.lineTo(fx + fw / 2, fb); c.lineTo(d1, fy); c.closePath(); c.fill();
      c.fillStyle = "#0d1d19"; c.beginPath(); c.moveTo(d0, fy); c.lineTo(fx - fw / 2, fb); c.lineTo(fx + fw / 2, fb); c.lineTo(d1, fy); c.closePath(); c.fill();
      g = c.createLinearGradient(0, ft, 0, fb); g.addColorStop(0, "#3f6a60"); g.addColorStop(1, "#1d3530");
      c.fillStyle = g; c.fillRect(fx - fw / 2, ft, fw, fb - ft);
      c.fillStyle = "rgba(200,240,225,0.35)"; c.fillRect(fx - fw * 0.22, ft + (fb - ft) * 0.18, fw * 0.44, (fb - ft) * 0.4);
      g = c.createRadialGradient(fx, (ft + fb) / 2, 2, fx, (ft + fb) / 2, fw * 1.6);
      g.addColorStop(0, "rgba(150,220,200,0.2)"); g.addColorStop(1, "rgba(150,220,200,0)");
      c.fillStyle = g; c.fillRect(d0, dt, d1 - d0, fy - dt);
      c.strokeStyle = "#5c7169"; c.lineWidth = 7 * k; c.beginPath(); c.moveTo(d0, fy); c.lineTo(d0, dt); c.lineTo(d1, dt); c.lineTo(d1, fy); c.stroke();
      /* the low cabinet the TV stands on, the VCR on its shelf, a stack of tapes */
      var cx0 = B.tvX - B.cabW / 2, cx1 = B.tvX + B.cabW / 2, ct = B.cabTop, cb = B.cabBot;
      c.fillStyle = "rgba(0,0,0,0.5)"; c.beginPath(); c.ellipse(B.tvX, cb + 2 * k, B.cabW * 0.56, 12 * k, 0, 0, TAU); c.fill();
      g = c.createLinearGradient(0, ct, 0, cb); g.addColorStop(0, "#2d2a20"); g.addColorStop(1, "#16150f");
      c.fillStyle = g; c.fillRect(cx0, ct, cx1 - cx0, cb - ct);
      c.fillStyle = "#3d3a2c"; c.fillRect(cx0 - 6 * k, ct, cx1 - cx0 + 12 * k, 8 * k);
      c.fillStyle = "#070a09"; c.fillRect(cx0 + 14 * k, ct + 16 * k, cx1 - cx0 - 28 * k, cb - ct - 26 * k);
      var vx0 = B.vcr.x0, vy0 = B.vcr.y0, vw = B.vcr.w, vh = B.vcr.h;
      g = c.createLinearGradient(0, vy0, 0, vy0 + vh); g.addColorStop(0, "#2a302e"); g.addColorStop(1, "#141817");
      c.fillStyle = g; c.fillRect(vx0, vy0, vw, vh);
      c.fillStyle = "#050807"; c.fillRect(vx0 + 12 * k, vy0 + vh * 0.32, vw * 0.38, 6 * k);
      c.fillStyle = "#020403"; c.fillRect(B.vcr.lx - 48 * k, B.vcr.ly - 12 * k, 96 * k, 24 * k);
      c.strokeStyle = "rgba(120,200,170,0.25)"; c.lineWidth = 1; c.strokeRect(B.vcr.lx - 48 * k, B.vcr.ly - 12 * k, 96 * k, 24 * k);
      for (i = 0; i < 4; i++) { c.fillStyle = "#4a5552"; c.fillRect(vx0 + vw - (24 + i * 16) * k, vy0 + vh * 0.62, 11 * k, 6 * k); }
      for (i = 0; i < 3; i++) {
        var tx0 = cx1 - 108 * k, ty0 = cb - 12 * k - (i + 1) * 15 * k;
        c.fillStyle = "#0b0d0c"; c.fillRect(tx0, ty0, 82 * k, 13 * k);
        c.fillStyle = i === 1 ? "#d9e6df" : "#596660"; c.fillRect(tx0 + 12 * k, ty0 + 3 * k, 54 * k, 7 * k);
      }
      /* the lamp's cord from the ceiling */
      c.strokeStyle = "#0a1210"; c.lineWidth = 2 * k; c.beginPath(); c.moveTo(B.lampX, 0); c.lineTo(B.lampX, B.lampY); c.stroke();
    };
  }

  M.extend("tape", {
    name: "Seven Days", kind: "horror level", level: "horror level", act: "TUNE",
    how: "A cursed videotape, and seven days. You sit in a dark room in front of an old TV while the rain runs down the window. Turn the TV's channel dial through the static: one channel for each answer letter shows a grainy picture with its letter. Turn until the picture is clear, then hold TUNE until the ring round the knob closes, and that letter is your answer. Every day the lights flicker, the calendar loses a day and something crawls a little closer up the dark hallway. Answer before the seventh day and she goes back; every new question brings seven more days. One channel plays the tape itself: a well, and a ring of light closing over it. Turn past it quickly and never stay to watch.",
    rules: "Tuning in to a wrong letter costs a life. So does letting the seven days run out (she reaches you), or staying on the tape's channel until its ring of light closes. Static and channels you have already crossed out cost nothing.",
    keys: "◀ ▶, A / D or the on-screen pad turn the dial (▲ ▼ or W / S turn it slowly, to fine-tune) · drag the knob, point at a channel number, or roll the mouse wheel · hold Space, TUNE or a mouse button on the screen to tune in.",
    tip: "SEVEN DAYS — turn the dial to the channel with the right letter and hold TUNE. Don't watch the tape. Answer before the seventh day.",
    hint1: "Turn the dial to the channel that shows the right letter and hold TUNE until it locks. The passage stays in the side panel.",
    hint2: "This question has two right letters. Tune in to both channels that show them.",
    news: ["",
      "The stations drift: a picture slides off its channel, so keep fine-tuning (▲ ▼) while you hold TUNE. The dial no longer settles by itself as easily.",
      "The tape moves: every day it plays on a different channel, and the dial no longer settles on a channel by itself.",
      "Power cuts: the lights go out without warning, and in the dark you can't read the dial. Watch the screen.",
      "The TV changes channel by itself: when the knob shudders, it is about to jump to the tape. Turn away before the ring closes.",
      "No more dots on the dial: search the channels to find the stations.",
      "Heavier static and twelve channels on the dial.",
      "The stations swap channels at the end of every day.",
      "Two channels play the tape.",
      "The seventh day: short days, and the TV turns to the tape more often, on top of everything else."],
    params: tapeParams
  }, {
    tapeParams: function (n) { return tapeParams(n); },

    setup_tape: function () {
      ensureTapeArt(this);
      var P = tapeParams(this.night), self = this, i;
      var B = this.tp = { P: P, t: 0, d: 0, dTarget: null, stations: [], tapes: [], N: P.channels, day: 0, dayT: 0, figP: 0, figFrom: 0, lurch: 0,
        lockT: 0, lockSt: null, ringT: 0, hij: null, hijackT: P.hijackEvery * rnd(0.7, 1), dark: 0, blackT: P.blackEvery * rnd(0.6, 1), dip: 0, flick: [], flickT: rnd(2500, 5000),
        rise: 0, retreat: 0, drag: null, ptrWas: false, armed: true, lastFrame: -9, turnHold: 0, idle: 0, lastCh: 0, staticSnd: 0, hissT: 0, beatT: 0, rainT: 0,
        bolt: 0, boltT: rnd(9000, 16000), rain: [], drops: [], noiseF: 0, noiseT: 0, told: {}, roomKey: null, hits: 0, picks: 0 };
      for (i = 0; i < 70; i++) B.rain.push({ x: Math.random(), y: Math.random(), v: rnd(1.6, 2.6), l: rnd(0.04, 0.09) });
      for (i = 0; i < 14; i++) B.drops.push({ x: Math.random(), y: Math.random(), v: rnd(0.02, 0.07), r: rnd(1, 2.2) });
      this.cameras.main.setBackgroundColor("#030807");
      this.tapeLayout();
      B.room = this.add.image(0, 0, B.roomKey).setOrigin(0, 0).setDepth(0);
      B.cal = this.add.image(0, 0, "md-tape-cal").setOrigin(0, 0).setDepth(1);
      B.rainG = this.add.graphics().setDepth(1);
      B.cone = this.add.image(0, 0, "md-tape-cone").setOrigin(0.5, 0).setDepth(2).setBlendMode(1);
      B.calG = this.add.graphics().setDepth(2);
      B.girl = this.add.image(0, 0, "md-tape-girl-0").setOrigin(0.5, 1).setDepth(3);
      B.noise = this.add.image(0, 0, "md-tape-static-0").setOrigin(0, 0).setDepth(4);
      B.pic = this.add.image(0, 0, "md-tape-pic-tree").setOrigin(0.5, 0.5).setDepth(4.1);
      B.well = this.add.image(0, 0, "md-tape-well").setOrigin(0.5, 0.5).setDepth(4.2);
      B.noise2 = this.add.image(0, 0, "md-tape-static-1").setOrigin(0, 0).setDepth(4.3);
      B.scrG = this.add.graphics().setDepth(4.4);
      B.letter = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 100, color: "#eef8f3", fontStyle: "bold", stroke: "#03100c", strokeThickness: 10 }).setOrigin(0.5).setDepth(5);
      B.mark = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 120, color: "#ff8a6a", fontStyle: "bold", stroke: "#03100c", strokeThickness: 8 }).setOrigin(0.5).setDepth(5.1);
      B.osd = this.add.text(0, 0, "CH 2", { fontFamily: MONO, fontSize: 20, color: "#7dffb0", fontStyle: "bold", stroke: "#02140b", strokeThickness: 4 }).setOrigin(1, 0).setDepth(5.2);
      B.osd2 = this.add.text(0, 0, "", { fontFamily: MONO, fontSize: 16, color: "#7dffb0", fontStyle: "bold", stroke: "#02140b", strokeThickness: 4 }).setOrigin(0, 0).setDepth(5.2);
      B.scan = this.add.tileSprite(0, 0, 10, 10, "md-tape-scan").setOrigin(0, 0).setDepth(6).setAlpha(0.8);
      B.glass = this.add.image(0, 0, "md-tape-glass").setOrigin(0, 0).setDepth(6.5);
      B.tv = this.add.image(0, 0, "md-tape-tv").setOrigin(0, 0).setDepth(7);
      B.knob = this.add.image(0, 0, "md-tape-knob").setOrigin(0.5).setDepth(8);
      B.dialG = this.add.graphics().setDepth(8.1);
      B.nums = [];
      B.darkG = this.add.graphics().setDepth(10);
      B.glow = this.add.image(0, 0, "md-tape-glow").setDepth(11).setBlendMode(1);
      B.warm = this.add.image(0, 0, "md-tape-warm").setDepth(11).setBlendMode(1);
      B.bulb = this.add.image(0, 0, "md-tape-bulb").setOrigin(0.5, 0).setDepth(12);
      B.riseImg = this.add.image(0, 0, "md-tape-rise").setOrigin(0.5, 1).setDepth(12).setVisible(false);
      B.uiG = this.add.graphics().setDepth(13);
      B.vcrTx = this.add.text(0, 0, "7 DAYS", { fontFamily: MONO, fontSize: 18, color: "#7dffb0", fontStyle: "bold" }).setOrigin(0.5).setDepth(13);
      B.warnTx = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 18, color: "#ffd2c4", fontStyle: "bold", stroke: "#03100c", strokeThickness: 5, align: "center" }).setOrigin(0.5, 1).setDepth(14);
      this.tapePlaceStatic();
      this.tapeMakeNums();
      this.makeSol(B.scrX + B.scrW / 2, B.scrY + B.scrH / 2, "down").setVisible(false);   /* the coin pop-ups need Sol; he stays hidden */
      this.input.on("wheel", function (p, o, dx, dy) { if (self.tp === B && !self.readOpen && !self.ended && !B.hijSpin) { B.d = clamp(B.d + (dy > 0 ? -0.22 : 0.22), 0, B.N - 1); B.idle = 0; B.dTarget = null; } });
    },

    /* everything that depends on the canvas size */
    tapeLayout: function () {
      var B = this.tp, W = this.W, H = this.H, k;
      k = B.k = clamp(Math.min(W / 1080, H / 700), 0.42, 1.5);
      B.floorY = Math.round(H * 0.62);
      B.tvX = Math.round(W * 0.45);
      B.cabW = 540 * k; B.cabBot = Math.round(H * 0.94); B.cabTop = Math.round(B.cabBot - 96 * k);
      B.tvLeft = B.tvX - TVW * k / 2; B.tvTop = B.cabTop - 376 * k;
      B.scrX = B.tvLeft + SCR.x * k; B.scrY = B.tvTop + SCR.y * k; B.scrW = SCR.w * k; B.scrH = SCR.h * k;
      B.kx = B.tvLeft + KNOB.x * k; B.ky = B.tvTop + KNOB.y * k;
      B.vcr = { x0: B.tvX - 150 * k, y0: B.cabTop + 26 * k, w: 230 * k, h: 50 * k };
      B.vcr.lx = B.vcr.x0 + B.vcr.w - 70 * k; B.vcr.ly = B.vcr.y0 + 18 * k;
      B.lampX = B.tvX; B.lampY = Math.max(24 * k, B.tvTop - 150 * k);
      B.win = { x0: Math.round(W * 0.035), x1: Math.round(Math.min(W * 0.18, B.tvLeft - 26 * k)), y0: Math.round(H * 0.13), y1: Math.round(H * 0.5) };
      B.door = { x0: Math.round(Math.max(W * 0.8, B.tvLeft + (TVW + 150) * k)), x1: Math.round(W * 0.94) };
      B.door.top = Math.round(Math.max(H * 0.1, B.floorY - H * 0.47));
      var dw = B.door.x1 - B.door.x0, dh = B.floorY - B.door.top;
      B.hall = { x: (B.door.x0 + B.door.x1) / 2, w: dw * 0.36, top: B.door.top + dh * 0.36, floor: B.floorY - dh * 0.17 };
      B.calX = Math.round((B.tvLeft + TVW * k + B.door.x0) / 2 - 52 * k); B.calY = Math.round(H * 0.14);
      /* where she is on each day: the far end of the hallway (0) to right in front of you (6); 7 is the seventh day */
      var hx = B.hall.x, fl = B.floorY;
      B.path = [
        [hx, B.hall.floor + 2, 0.2], [hx - W * 0.004, B.hall.floor + (fl - B.hall.floor) * 0.6, 0.3], [hx - W * 0.01, fl + H * 0.04, 0.42],
        [hx - W * 0.02, fl + H * 0.1, 0.55], [hx - W * 0.035, fl + H * 0.17, 0.69], [hx - W * 0.05, fl + H * 0.25, 0.84], [hx - W * 0.065, H * 0.985, 1.02], [hx - W * 0.075, H + 8 * k, 1.2]
      ];
      var key = "md-tape-room-" + W + "x" + H;
      if (B.roomKey !== key) {
        var old = B.roomKey;
        canvasTex(this, key, W, H, drawRoom(B, W, H));
        B.roomKey = key;
        if (B.room) B.room.setTexture(key);
        if (old && old !== key) { try { this.textures.remove(old); } catch (e) {} }
      }
    },
    tapePlaceStatic: function () {
      var B = this.tp, k = B.k, cx = B.scrX + B.scrW / 2, cy = B.scrY + B.scrH / 2;
      B.room.setPosition(0, 0);
      B.cal.setPosition(B.calX, B.calY).setScale(k);
      B.cone.setPosition(B.lampX, B.lampY + 30 * k).setScale(k * 1.5, k * 1.1);
      B.noise.setPosition(B.scrX, B.scrY).setDisplaySize(B.scrW, B.scrH);
      B.noise2.setPosition(B.scrX, B.scrY).setDisplaySize(B.scrW, B.scrH);
      B.pic.setPosition(cx, cy).setDisplaySize(B.scrW, B.scrH);
      B.well.setPosition(cx, cy).setDisplaySize(B.scrW, B.scrH);
      B.letter.setPosition(cx, cy + 8 * k).setFontSize(Math.round(118 * k)).setStroke("#03100c", Math.max(4, 10 * k));
      B.mark.setPosition(cx, cy + 8 * k).setFontSize(Math.round(150 * k));
      B.osd.setPosition(B.scrX + B.scrW - 16 * k, B.scrY + 12 * k).setFontSize(Math.max(11, Math.round(22 * k)));
      B.osd2.setPosition(B.scrX + 16 * k, B.scrY + 12 * k).setFontSize(Math.max(10, Math.round(17 * k)));
      B.scan.setPosition(B.scrX, B.scrY).setSize(B.scrW, B.scrH);
      B.glass.setPosition(B.scrX, B.scrY).setDisplaySize(B.scrW, B.scrH);
      B.tv.setPosition(B.tvLeft, B.tvTop).setScale(k / RES);
      B.knob.setPosition(B.kx, B.ky).setScale(k / RES);
      B.glow.setPosition(cx, cy).setScale(B.scrW * 3 / 256, B.scrH * 3.4 / 256);
      B.warm.setPosition(B.lampX, B.lampY + 40 * k).setScale(k * 3.2);
      B.bulb.setPosition(B.lampX, B.lampY).setScale(k * 1.1);
      B.vcrTx.setPosition(B.vcr.lx, B.vcr.ly).setFontSize(Math.max(10, Math.round(18 * k)));
      B.warnTx.setFontSize(Math.max(12, Math.round(19 * k))).setPosition(cx, B.tvTop + 44 * k);
    },
    /* the channel numbers round the knob (2, 3, 4 ... like an old VHF dial) */
    tapeMakeNums: function () {
      var B = this.tp, self = this;
      B.nums.forEach(function (t) { try { t.destroy(); } catch (e) {} });
      B.nums = [];
      for (var i = 0; i < B.N; i++) {
        var p = this.tapeNumPos(i);
        B.nums.push(self.add.text(p.x, p.y, String(i + 2), { fontFamily: MONO, fontSize: Math.max(8, Math.round(12.5 * B.k)), color: "#d6e8e0", fontStyle: "bold" }).setOrigin(0.5).setDepth(8.2));
      }
    },
    tapeAng: function (d) { var B = this.tp; return DIAL0 + DIALSPAN * d / Math.max(1, B.N - 1); },
    tapeNumPos: function (i) { var B = this.tp, a = this.tapeAng(i), r = KNOB.ring * B.k; return { x: B.kx + Math.cos(a) * r, y: B.ky + Math.sin(a) * r }; },
    /* the channel a screen point at angle a round the knob points to */
    tapeAngToD: function (a) {
      var B = this.tp, rel = a - DIAL0;
      while (rel < -0.0001) rel += TAU;
      while (rel > TAU) rel -= TAU;
      if (rel > DIALSPAN) rel = rel - DIALSPAN < (TAU - DIALSPAN) / 2 ? DIALSPAN : 0;   /* the gap at the bottom: the nearer end */
      return rel / DIALSPAN * (B.N - 1);
    },
    resize_tape: function () {
      this.tapeLayout();
      this.tapePlaceStatic();
      this.tapeMakeNums();
    },

    answers_tape: function () {
      var B = this.tp, P = B.P, self = this, letters = this.choiceLetters(), i;
      var N = Math.max(P.channels, letters.length + P.tapes + 1);
      if (N !== B.N) { B.N = N; this.tapeMakeNums(); }
      B.d = clamp(B.d, 0, B.N - 1);
      var start = Math.round(B.d);
      var free = []; for (i = 0; i < B.N; i++) if (i !== start) free.push(i);
      shuffle(free);
      B.stations = letters.map(function (Lt, j) {
        return { letter: Lt, ch: free[j], ph: rnd(0, TAU), motif: MOTIFS[j % MOTIFS.length], state: self.extracted.indexOf(Lt) !== -1 ? "found" : "live" };
      });
      B.tapes = [];
      for (i = 0; i < P.tapes; i++) B.tapes.push({ ch: free[letters.length + i] });
      B.dayT = 0; B.day = 0; B.figP = 0; B.figFrom = 0; B.lurch = 0; B.retreat = 0; B.rise = 0;
      B.lockT = 0; B.lockSt = null; B.ringT = 0; B.hij = null; B.hijSpin = false; B.dTarget = null;
      B.hijackT = P.hijackEvery * rnd(0.7, 1); B.dark = 0; B.blackT = P.blackEvery * rnd(0.6, 1);
      B.qWrong = 0;
      this.tapeCalendar();
    },
    /* a station's position on the dial right now (it drifts from level 11) */
    tapePos: function (st) { var B = this.tp, P = B.P; return st.ch + (P.drift ? P.drift * Math.sin(B.t * P.driftSpd + st.ph) : 0); },
    tapeClarity: function (st) { var B = this.tp; return clamp(1 - Math.abs(B.d - this.tapePos(st)) / B.P.tuneW, 0, 1); },
    tapeTapeC: function (tp) { var B = this.tp; return clamp(1 - Math.abs(B.d - tp.ch) / Math.max(0.3, B.P.tuneW), 0, 1); },
    /* the station on the screen (the clearest one), or null */
    tapeBest: function () {
      var B = this.tp, best = null, bc = 0, self = this;
      B.stations.forEach(function (st) { var c = self.tapeClarity(st); if (c > bc) { bc = c; best = st; } });
      return best ? { st: best, c: bc } : null;
    },
    tapeOnTape: function () {
      var B = this.tp, best = null, bc = 0, self = this;
      B.tapes.forEach(function (tp) { var c = self.tapeTapeC(tp); if (c > bc) { bc = c; best = tp; } });
      return best ? { tp: best, c: bc } : null;
    },
    /* the dial straight onto a channel (for the tests, and the TV turning itself) */
    tapeDialTo: function (d) { var B = this.tp; B.d = clamp(d, 0, B.N - 1); B.dTarget = null; B.idle = 0; return B.d; },
    tapeStationOf: function (L) { var B = this.tp; for (var i = 0; i < B.stations.length; i++) if (B.stations[i].letter === L) return B.stations[i]; return null; },
    tapeFreeChannels: function (avoid) {
      var B = this.tp, used = {}, out = [], i;
      B.stations.forEach(function (st) { used[st.ch] = 1; });
      B.tapes.forEach(function (tp) { used[tp.ch] = 1; });
      for (i = 0; i < B.N; i++) if (!used[i] && (avoid == null || Math.abs(i - avoid) > 1)) out.push(i);
      if (!out.length) for (i = 0; i < B.N; i++) if (!used[i] && i !== Math.round(avoid)) out.push(i);
      return out;
    },
    tapeMoveTape: function (tp) {
      var B = this.tp, free;
      B.tapes.splice(B.tapes.indexOf(tp), 1);
      free = this.tapeFreeChannels(B.d);
      B.tapes.push(tp);
      if (free.length) tp.ch = free[Math.floor(Math.random() * free.length)];
    },

    tick_tape: function (s, inp, ms) {
      var B = this.tp, P = B.P, k = B.k, frame = this.game && this.game.loop ? this.game.loop.frame : 0;
      if (frame !== B.lastFrame + 1) B.armed = false;   /* frames went by without a tick (the reading pop-up): a key still held does not tune */
      B.lastFrame = frame;
      B.t += s;
      if (!B.told.start) { B.told.start = true; this.toast("Turn the dial (◀ ▶) through the static to a channel with a letter, then hold TUNE (Space) until it locks.", 5600); }

      this.tapeInput(s, inp, ms);
      if (this._finishing) return;
      if (!this._between) {
        this.tapeDays(ms);
        if (this._finishing) return;
        this.tapeHazards(s, ms);
        if (this._finishing) return;
      }
      this.tapeLights(ms);
      this.tapeDrawScreen(ms);
      this.tapeDrawDial();
      this.tapeDrawRoom(s, ms);
      this.tapeDrawFigure(ms);
      this.tapeDrawUi();
      this.tapeSound(ms);
    },

    /* ── the dial and TUNE ── */
    tapeInput: function (s, inp, ms) {
      var B = this.tp, P = B.P, k = B.k, p = this.ptr, d0 = B.d;
      /* the pointer: a press on the knob (or its numbers) turns the dial toward where it points; a press anywhere else tunes */
      var onKnob = false;
      if (inp.ptr) {
        if (!B.ptrWas) B.drag = Math.hypot(p.x - B.kx, p.y - B.ky) < (KNOB.ring + 14) * k ? "knob" : "screen";
        onKnob = B.drag === "knob";
      } else B.drag = null;
      B.ptrWas = !!inp.ptr;
      if (B.hijSpin) {
        /* the TV turns itself: the dial won't budge until it gets there */
        var dd = B.hijSpin.to - B.d, sp = 9 * s;
        B.d += clamp(dd, -sp, sp);
        if (Math.abs(dd) < 0.01) { B.d = B.hijSpin.to; B.hijSpin = false; }
      } else if (inp.ax || inp.ay) {
        B.turnHold += ms;
        var dir = inp.ax || -inp.ay, fine = !inp.ax;
        var spd = fine ? 0.7 : Math.min(5.5, 1.5 + B.turnHold / 1000 * 4.5);
        if (B.turnHold === ms) B.d += dir * 0.04;
        B.d += dir * spd * s; B.idle = 0; B.dTarget = null;
      } else {
        B.turnHold = 0;
        if (onKnob) { B.dTarget = this.tapeAngToD(Math.atan2(p.y - B.ky, p.x - B.kx)); B.idle = 0; }
        if (B.dTarget != null) {
          var dt = B.dTarget - B.d, sp2 = 7 * s;
          B.d += clamp(dt, -sp2, sp2);
          if (Math.abs(dt) < 0.002) { B.d = B.dTarget; if (!onKnob) B.dTarget = null; }
        } else {
          B.idle += ms;
          /* the easy levels: the dial settles on the nearest channel when you let go */
          if (P.snap > 0 && B.idle > 160) B.d += (Math.round(B.d) - B.d) * Math.min(1, P.snap * 7 * s);
        }
      }
      B.d = clamp(B.d, 0, B.N - 1);
      /* a click at every channel */
      var ch = Math.round(B.d);
      if (ch !== B.lastCh) { B.lastCh = ch; this.tapeClick(); }
      B.moved = Math.abs(B.d - d0) > 1e-4;

      /* TUNE: Space, the TUNE button, or holding a mouse button on the screen */
      var tune = !!(this.keys.SPACE.isDown || (inp.fire && !inp.ptr) || (inp.ptr && !onKnob));
      if (!tune) B.armed = true;
      if (this._between || !tune || !B.armed) { B.lockT = 0; B.lockSt = null; if (!tune) B.toldStaticNow = false; return; }
      var best = this.tapeBest(), clear = best && best.c >= 0.5 ? best.st : null;
      if (!clear) {
        B.lockT = 0; B.lockSt = null;
        var tt = this.tapeOnTape();
        if (!B.toldStaticNow) {
          B.toldStaticNow = true;
          if (tt && tt.c > 0.35) this.toast("That's the tape, not a station! Turn away before the ring of light closes.", 3000);
          else if (best && best.c > 0.05) this.toast("Almost: turn the dial a little more until the picture is clear, then hold TUNE.", 2800);
          else this.toast("Only static on this channel. Turn the dial to a channel with a letter.", 2600);
        }
        return;
      }
      if (clear.state !== "live") {
        if (!B.toldStaticNow) { B.toldStaticNow = true; this.toast(clear.state === "dead" ? "That channel is crossed out. Try another letter." : "You already found that letter. Find the other right one.", 2600); }
        B.lockT = 0; B.lockSt = null; return;
      }
      if (B.lockSt !== clear) { B.lockSt = clear; B.lockT = 0; }
      B.lockT += ms;
      if (B.lockT >= P.lockMs) { B.lockT = 0; B.lockSt = null; B.armed = false; this.tapePick(clear); }
    },
    /* a channel tuned in: its letter is the pick */
    tapePick: function (st) {
      var B = this.tp, k = B.k, clean = !this.claimWrong, cx = B.scrX + B.scrW / 2, cy = B.scrY + B.scrH / 2;
      B.picks += 1;
      var res = this.answerPick(st.letter, cx, cy);
      if (res === "wrong") {
        st.state = "dead";
        this.tapeTone(180, 90, 0.5, "sawtooth", 0.04);
      } else if (res === "partial") {
        st.state = "found";
        this.tapeTone(660, 990, 0.25, "sine", 0.05);
      } else if (res === "done") {
        st.state = "found";
        if (clean && B.day <= 1 && !this.ended) this.awardBonusPoints(1000, "Tuned in before the second day");
      }
      return res;
    },
    /* a right answer: she goes back down the hallway; the next question brings seven more days */
    clear_tape: function () {
      var B = this.tp;
      B.lockT = 0; B.lockSt = null; B.hij = null; B.hijSpin = false; B.ringT = 0; B.dark = 0;
      B.retreat = 1; B.figFrom = B.figP; B.lurch = 0;
    },

    /* ── the seven days ── */
    tapeDays: function (ms) {
      var B = this.tp, P = B.P;
      B.dayT += ms;
      var day = Math.floor(B.dayT / P.dayMs);
      if (day > B.day) {
        B.day = day;
        if (day >= 7) this.tapeSeventh();
        else this.tapeNewDay();
      }
    },
    tapeNewDay: function () {
      var B = this.tp, P = B.P, self = this;
      B.figFrom = B.figP; B.lurch = 1; B.dip = 520;
      this.tapeCalendar();
      this.tapeTone(68, 44, 0.9, "sine", 0.1); this.tapeHiss(0.5, 260, 0.04);
      this.tapeTone(150, 92, 0.6, "sawtooth", 0.018, 0.15);
      if (!B.told.day) { B.told.day = true; this.toast("A day has passed. Something is crawling closer. Tune in to the right letter before the seventh day.", 4200); }
      else if (B.day === 6) this.toast("The last day! Tune in now.", 2600);
      if (P.tapeMoves) {
        B.tapes.forEach(function (tp) { self.tapeMoveTape(tp); });
        if (!B.told.moves) { B.told.moves = true; this.toast("The tape moved to another channel. Watch for the well.", 2800); }
      }
      if (P.swap) {
        var live = B.stations, chs = shuffle(live.map(function (st) { return st.ch; }));
        if (live.length > 1) { while (chs.every(function (c2, i) { return c2 === live[i].ch; })) chs = shuffle(chs); }
        live.forEach(function (st, i) { st.ch = chs[i]; });
        if (!B.told.swap) { B.told.swap = true; this.toast("The stations swapped channels! Search the dial again.", 2800); }
      }
    },
    /* the seventh day ends: she reaches you. A life, and the days start again. */
    tapeSeventh: function () {
      var B = this.tp;
      B.rise = 1; B.dip = 900; B.lurch = 0;
      this.tapeHiss(1.3, 2600, 0.07); this.tapeTone(110, 52, 1.3, "sawtooth", 0.04);
      if (this.loseLife("hit", "THE SEVENTH DAY")) B.hits += 1;
      if (this._finishing) return;
      this.toast("Seven days are up and she reached you! That costs a life. The days start again: tune in faster.", 3800);
      B.dayT = 0; B.day = 0; B.figP = 0; B.figFrom = 0;
      this.tapeCalendar();
    },
    tapeCalendar: function () {
      var B = this.tp, k = B.k, g = B.calG, i;
      g.clear();
      g.lineStyle(Math.max(1.5, 2.6 * k), 0x8a2a1c, 0.95);
      for (i = 0; i < Math.min(7, B.day); i++) {
        var col = i % 4, row = Math.floor(i / 4), x = B.calX + (6 + col * 24) * k, y = B.calY + (30 + row * 34) * k;
        g.lineBetween(x + 2 * k, y + 2 * k, x + 19 * k, y + 27 * k); g.lineBetween(x + 19 * k, y + 2 * k, x + 2 * k, y + 27 * k);
      }
    },

    /* ── the tape's channel, the TV turning itself, power cuts ── */
    tapeHazards: function (s, ms) {
      var B = this.tp, P = B.P, self = this;
      /* watching the tape: the ring of light closes */
      var on = this.tapeOnTape(), watching = on && on.c > 0.35 && !this.ended;
      if (watching) {
        B.ringT += ms;
        if (!B.told.tape) { B.told.tape = true; this.toast("The tape! A ring of light is closing over the well. Turn the dial away before it closes.", 3600); }
        if (B.ringT >= P.ringMs) {
          B.ringT = 0;
          this.tapeHiss(0.9, 3000, 0.07); this.tapeTone(1400, 300, 0.8, "sine", 0.04);
          if (this.loseLife("hit", "YOU WATCHED THE TAPE")) B.hits += 1;
          if (this._finishing) return;
          this.tapeMoveTape(on.tp);
          B.dip = 600;
        }
      } else B.ringT = Math.max(0, B.ringT - ms * 2);
      /* the TV turns itself to the tape (from level 41): the knob shudders, then the dial spins */
      if (B.hij) {
        B.hij.t += ms;
        if (B.hij.t >= P.hijackWarn) {
          var tp = B.hij.tp;
          B.hij = null; B.dTarget = null;
          if (B.tapes.indexOf(tp) !== -1) B.hijSpin = { to: tp.ch };
          B.hijackT = P.hijackEvery * rnd(0.8, 1.2);
          this.tapeHiss(0.4, 1800, 0.05);
        }
      } else if (!B.hijSpin && P.hijackEvery < 1e8 && B.tapes.length) {
        B.hijackT -= ms;
        if (B.hijackT <= 0) this.tapeHijack();
      }
      /* power cuts (from level 31) */
      if (B.dark > 0) B.dark = Math.max(0, B.dark - ms);
      else if (P.blackMs > 0) {
        B.blackT -= ms;
        if (B.blackT <= 0) {
          B.dark = P.blackMs; B.blackT = P.blackEvery * rnd(0.7, 1.3);
          this.tapeTone(90, 40, 0.3, "square", 0.02);
          if (!B.told.dark) { B.told.dark = true; this.toast("The power is out! You can't see the dial in the dark. Watch the screen.", 3200); }
        }
      }
    },
    tapeHijack: function () {
      var B = this.tp, best = null, bd = 1e9;
      B.tapes.forEach(function (tp) { var dd = Math.abs(tp.ch - B.d); if (dd < bd) { bd = dd; best = tp; } });
      if (!best) return null;
      B.hij = { t: 0, tp: best };
      this.tapeTone(240, 180, 0.4, "sawtooth", 0.025);
      if (!B.told.hij) { B.told.hij = true; this.toast("The knob is shaking: the TV is about to change the channel by itself! Turn away from the tape as soon as it lands.", 4200); }
      return B.hij;
    },

    /* ── drawing ── */
    tapeLights: function (ms) {
      var B = this.tp;
      if (B.dip > 0) B.dip = Math.max(0, B.dip - ms);
      /* the bulb flickers now and then: a few quick, shallow dips */
      B.flickT -= ms;
      if (B.flickT <= 0) {
        B.flickT = rnd(2600, 6500);
        var n = 2 + Math.floor(Math.random() * 3), t = 0;
        for (var i = 0; i < n; i++) { t += rnd(60, 140); B.flick.push({ at: t, len: rnd(50, 110), depth: rnd(0.25, 0.5) }); }
      }
      var lv = 1;
      for (var j = B.flick.length - 1; j >= 0; j--) {
        var f = B.flick[j]; f.at -= ms;
        if (f.at <= 0) { lv = Math.min(lv, 1 - f.depth); f.len -= ms; if (f.len <= 0) B.flick.splice(j, 1); }
      }
      if (B.dip > 0) lv = Math.min(lv, 0.1);
      if (B.dark > 0) lv = Math.min(lv, 0.04);
      B.light = lv;
    },
    tapeDrawScreen: function (ms) {
      var B = this.tp, P = B.P, k = B.k, g = B.scrG, cx = B.scrX + B.scrW / 2, cy = B.scrY + B.scrH / 2;
      g.clear();
      B.noiseT += ms;
      if (B.noiseT > 55) { B.noiseT = 0; B.noiseF = (B.noiseF + 1) % 5; B.noise.setTexture("md-tape-static-" + B.noiseF); B.noise2.setTexture("md-tape-static-" + ((B.noiseF + 2) % 5)); }
      var best = this.tapeBest(), on = this.tapeOnTape(), c = best ? best.c : 0, tc = on ? on.c : 0;
      var shake = B.hij ? 1 : 0;
      var showTape = tc > c;
      B.screenSt = showTape ? null : (best && c > 0 ? best.st : null);
      /* the picture: clear in the middle of a station, torn and rolling at its edge */
      var clarity = Math.max(c, tc), tear = (1 - clarity) * 22 * k * (Math.random() - 0.5) * 2, roll = (1 - clarity) * 8 * k * Math.sin(B.t * 13);
      if (showTape) {
        B.well.setVisible(true).setAlpha(tc).setPosition(cx + tear, cy + roll);
        B.pic.setVisible(false);
      } else {
        B.well.setVisible(false);
        if (best && c > 0) {
          if (B.pic.texture.key !== "md-tape-pic-" + best.st.motif) B.pic.setTexture("md-tape-pic-" + best.st.motif);
          B.pic.setVisible(true).setAlpha(c).setDisplaySize(B.scrW, B.scrH).setPosition(cx + tear, cy + roll);
          B.pic.setTint(best.st.state === "dead" ? 0x8a8f8c : 0xffffff);
        } else B.pic.setVisible(false);
      }
      B.noise.setAlpha(1);
      B.noise2.setAlpha(clamp(1 - clarity * (1 - P.noise), 0, 1) * (shake ? 1 : 0.92));
      /* the letter (and a tick or a cross once it is decided) */
      var la = showTape ? 0 : clamp((c - 0.12) / 0.45, 0, 1);
      if (best && la > 0) {
        var st = best.st;
        tcol(B.letter.setText(st.letter), st.state === "dead" ? "#9aa59f" : st.state === "found" ? "#b8ffd6" : "#eef8f3").setAlpha(la).setPosition(cx + tear * 1.2, cy + 8 * k + roll);
        tcol(B.mark.setText(st.state === "dead" ? "✕" : st.state === "found" ? "✓" : ""), st.state === "dead" ? "#ff7a5a" : "#8affb8").setAlpha(la * 0.95).setPosition(cx + tear * 1.2, cy + 8 * k + roll);
      } else { B.letter.setAlpha(0); B.mark.setAlpha(0); }
      /* the tape's ring of light: an eclipse closing over the well */
      if (showTape && tc > 0.05) {
        var pr = clamp(B.ringT / B.P.ringMs, 0, 1), R = 34 * k, ex = cx + tear, ey = B.scrY + B.scrH * 0.34 + roll;
        g.fillStyle(0xeafff6, 0.22 * tc); g.fillCircle(ex, ey, R * 1.9);
        g.fillStyle(0xf4fffa, 0.95 * tc); g.fillCircle(ex, ey, R);
        g.fillStyle(0x020504, tc); g.fillCircle(ex + (1 - pr) * R * 2.05, ey - (1 - pr) * R * 0.25, R * 0.9);
        if (pr > 0.6) { g.lineStyle(3 * k, 0xffffff, (pr - 0.6) * 2.5 * tc); g.strokeCircle(ex, ey, R * 0.95); }
      }
      /* the on-screen display: the channel, PLAY on the tape, the signal bars, the lock */
      var shownCh = Math.round(B.d) + 2;
      B.osd.setText("CH " + (shownCh < 10 ? "0" : "") + shownCh);
      tcol(B.osd2.setText(showTape && tc > 0.35 ? "▶ PLAY" : ""), Math.floor(B.t * 2) % 2 ? "#7dffb0" : "#c8ffe0");
      var bars = Math.round(c * 5), bx = B.scrX + 18 * k, by = B.scrY + B.scrH - 16 * k;
      for (var i = 0; i < 5; i++) {
        var on2 = i < bars;
        g.fillStyle(on2 ? C.led : 0x0b2a1c, on2 ? 0.95 : 0.6);
        g.fillRect(bx + i * 9 * k, by - (4 + i * 3) * k, 6 * k, (4 + i * 3) * k);
      }
      if (B.lockT > 0 && B.lockSt) {
        var lf = clamp(B.lockT / P.lockMs, 0, 1), lw = B.scrW * 0.5, lx = cx - lw / 2, ly = B.scrY + B.scrH - 22 * k;
        g.fillStyle(0x02140b, 0.8); g.fillRect(lx - 3 * k, ly - 3 * k, lw + 6 * k, 12 * k);
        g.fillStyle(C.led, 1); g.fillRect(lx, ly, lw * lf, 6 * k);
      }
      B.glow.setAlpha((0.35 + 0.25 * (1 - clarity) + (showTape ? 0.25 * tc : 0)) * (0.9 + 0.1 * Math.random()));
    },
    tapeDrawDial: function () {
      var B = this.tp, P = B.P, k = B.k, g = B.dialG, self = this;
      g.clear();
      var shudder = B.hij ? Math.sin(B.t * 60) * 0.12 * Math.min(1, B.hij.t / 200) : 0;
      B.knob.setRotation(this.tapeAng(B.d) + Math.PI / 2 + shudder);
      var dark = B.light < 0.3;
      /* the station dots (to level 50), the tape's number glowing red when the TV is about to turn to it */
      B.nums.forEach(function (t, i) {
        var isSt = B.stations.some(function (st) { return st.ch === i; }), tape = B.tapes.some(function (tp) { return tp.ch === i; });
        var hot = B.hij && B.hij.tp.ch === i && Math.floor(B.t * 8) % 2 === 0;
        var cur = Math.round(B.d) === i;
        tcol(t, hot ? "#ff8a6a" : cur ? "#ffffff" : "#bcd2c9").setAlpha(dark ? 0.12 : cur ? 1 : 0.85);
        if (P.dots && isSt && !dark) {
          var a = self.tapeAng(i), r = (KNOB.ring + 10) * k;
          g.fillStyle(C.sea, 0.95); g.fillCircle(B.kx + Math.cos(a) * r, B.ky + Math.sin(a) * r, 2.4 * k);
        }
      });
      /* the pointer mark at the knob's line */
      var a = this.tapeAng(B.d), r0 = (KNOB.r + 2) * k, r1 = (KNOB.ring - 9) * k;
      g.lineStyle(2.4 * k, 0xeaf6f0, dark ? 0.25 : 0.9); g.lineBetween(B.kx + Math.cos(a) * r0, B.ky + Math.sin(a) * r0, B.kx + Math.cos(a) * r1, B.ky + Math.sin(a) * r1);
    },
    tapeDrawRoom: function (s, ms) {
      var B = this.tp, k = B.k, g = B.rainG, W = this.W, H = this.H, i, lv = B.light;
      g.clear();
      /* the rain on the window */
      var w0 = B.win.x0 + 3 * k, w1 = B.win.x1 - 3 * k, h0 = B.win.y0 + 3 * k, h1 = B.win.y1 - 3 * k, ww = w1 - w0, wh = h1 - h0;
      B.boltT -= ms;
      if (B.boltT <= 0) { B.boltT = rnd(11000, 20000); B.bolt = 260; this.tapeHiss(1.6, 120, 0.05, 0.35); }
      if (B.bolt > 0) { B.bolt -= ms; g.fillStyle(0xcfeee4, B.bolt > 160 ? 0.22 : B.bolt > 90 ? 0.06 : 0.14); g.fillRect(w0, h0, ww, wh); }
      g.lineStyle(Math.max(1, 1.2 * k), 0xbfe8dc, 0.32);
      for (i = 0; i < B.rain.length; i++) {
        var r = B.rain[i];
        r.y += r.v * s; if (r.y > 1.1) { r.y -= 1.2; r.x = Math.random(); }
        var x = w0 + r.x * ww, y = h0 + r.y * wh, y2 = y - r.l * wh;
        if (y2 > h1 || y < h0) continue;
        g.lineBetween(x - 2 * k, Math.max(h0, y2), x, Math.min(h1, y));
      }
      for (i = 0; i < B.drops.length; i++) {
        var d = B.drops[i];
        d.y += d.v * s * (Math.random() < 0.05 ? 4 : 1); if (d.y > 1) { d.y = 0; d.x = Math.random(); }
        g.fillStyle(0xd8f4ea, 0.4); g.fillCircle(w0 + d.x * ww, h0 + d.y * wh, d.r * k);
        g.fillStyle(0xd8f4ea, 0.12); g.fillRect(w0 + d.x * ww - 0.6 * k, h0 + Math.max(0, d.y - 0.08) * wh, 1.2 * k, 0.08 * wh * Math.min(1, d.y / 0.08));
      }
      /* a lighthouse far out in the rain */
      var lh = 0.5 + 0.5 * Math.sin(B.t * 1.4);
      g.fillStyle(0xeafff6, 0.25 + 0.6 * lh * lh); g.fillCircle(w0 + ww * 0.72, h0 + wh * 0.8, 1.8 * k);
      /* the bulb and its light */
      B.cone.setAlpha(0.55 * lv); B.warm.setAlpha(0.32 * lv); B.bulb.setAlpha(0.25 + 0.75 * lv);
      /* the dark: everything but the TV's screen */
      var dg = B.darkG, a = clamp((1 - lv) * 0.9, 0, 0.92);
      dg.clear();
      if (a > 0.01) {
        dg.fillStyle(0x010403, a);
        dg.fillRect(0, 0, W, B.scrY); dg.fillRect(0, B.scrY + B.scrH, W, H - B.scrY - B.scrH);
        dg.fillRect(0, B.scrY, B.scrX, B.scrH); dg.fillRect(B.scrX + B.scrW, B.scrY, W - B.scrX - B.scrW, B.scrH);
      }
    },
    /* where she is on the floor at progress p (0 the far end of the hallway, 1 the seventh day) */
    tapeFigAt: function (p) {
      var B = this.tp, q = clamp(p, 0, 1) * 7, i = Math.min(6, Math.floor(q)), f = q - i, a = B.path[i], b = B.path[i + 1];
      return { x: a[0] + (b[0] - a[0]) * f, y: a[1] + (b[1] - a[1]) * f, s: a[2] + (b[2] - a[2]) * f };
    },
    tapeDrawFigure: function (ms) {
      var B = this.tp, k = B.k, target = B.day / 7, frame = 0;
      if (B.retreat > 0) {
        /* sent back: she slides back down the hallway into the dark */
        B.retreat = Math.max(0, B.retreat - ms / 900);
        B.figP = B.figFrom * B.retreat * B.retreat;
        B.girl.setAlpha(B.retreat);
        if (B.retreat <= 0) { B.figP = 0; B.girl.setAlpha(1); }
      } else if (B.lurch > 0) {
        /* a new day: she crawls forward while the lights are down */
        B.lurch = Math.max(0, B.lurch - ms / 820);
        var u = 1 - B.lurch;
        B.figP = B.figFrom + (target - B.figFrom) * (u * u * (3 - 2 * u));
        frame = Math.floor(B.t * 7) % 2;
        B.girl.setAlpha(1);
      } else { B.figP = target; B.girl.setAlpha(1); }
      var at = this.tapeFigAt(B.figP), twitch = B.lurch > 0 ? 0 : Math.sin(B.t * 2.1) * 0.6 + (Math.random() < 0.01 ? 2 : 0);
      B.girl.setTexture("md-tape-girl-" + frame).setPosition(at.x + twitch * k, at.y).setScale(at.s * k);
      var far = clamp(B.figP / 0.86, 0, 1);
      var shade = Math.round(70 + 185 * far), tint = (Math.round(shade * 0.8) << 16) | (shade << 8) | Math.round(shade * 0.92);
      B.girl.setTint(tint);
      /* the seventh day: she rises right in front of you, then fades */
      if (B.rise > 0) {
        B.rise = Math.max(0, B.rise - ms / 1400);
        var p7 = B.path[7];
        B.riseImg.setVisible(true).setPosition(p7[0], p7[1]).setScale(k * 1.15).setAlpha(Math.min(1, B.rise * 2.2));
        B.girl.setAlpha(1 - Math.min(1, B.rise * 2));
      } else B.riseImg.setVisible(false);
    },
    tapeDrawUi: function () {
      var B = this.tp, P = B.P, k = B.k, g = B.uiG;
      g.clear();
      /* the lock ring round the knob */
      if (B.lockT > 0 && B.lockSt) {
        var f = clamp(B.lockT / P.lockMs, 0, 1), r = (KNOB.r + 5) * k;
        g.lineStyle(4 * k, 0x02140b, 0.8); g.strokeCircle(B.kx, B.ky, r);
        g.lineStyle(3.2 * k, C.led, 1); g.beginPath(); g.arc(B.kx, B.ky, r, -Math.PI / 2, -Math.PI / 2 + f * TAU, false); g.strokePath();
      }
      /* the VCR counts the days */
      var left = Math.max(1, 7 - B.day), last = left === 1;
      tcol(B.vcrTx.setText(left + (left === 1 ? " DAY " : " DAYS")), last ? "#ff8a6a" : "#7dffb0").setAlpha(last && Math.floor(B.t * 3) % 2 ? 0.45 : 1);
      g.fillStyle(last ? 0xff6a4a : C.led, 0.12); g.fillRect(B.vcr.lx - 48 * k, B.vcr.ly - 12 * k, 96 * k, 24 * k);
      /* the warning over the TV */
      var wt = "";
      if (B.hij) wt = "THE TV IS CHANGING THE CHANNEL…";
      else if (B.hijSpin) wt = "IT TURNED TO THE TAPE!";
      else if (B.ringT > B.P.ringMs * 0.25) wt = "DON'T WATCH THE TAPE — TURN AWAY";
      B.warnTx.setText(wt).setAlpha(wt ? 0.8 + 0.2 * Math.sin(B.t * 10) : 0);
      if (wt) {
        var bw = B.warnTx.width + 24 * k, bh = B.warnTx.height + 8 * k;
        g.fillStyle(0x020806, 0.78); g.fillRoundedRect(B.warnTx.x - bw / 2, B.warnTx.y - bh + 2 * k, bw, bh, 6 * k);
        g.lineStyle(1.5 * k, 0xff8a6a, 0.6); g.strokeRoundedRect(B.warnTx.x - bw / 2, B.warnTx.y - bh + 2 * k, bw, bh, 6 * k);
      }
    },

    /* ── sound ── */
    tapeTone: function (f, f2, dur, type, vol, delay) { try { var R = window.SolRealms; if (R && R.blip) R.blip(f, f2, dur, type, vol, delay); } catch (e) {} },
    tapeHiss: function (dur, f, vol, delay) { try { var R = window.SolRealms; if (R && R.hiss) R.hiss(dur, f, vol, delay); } catch (e) {} },
    tapeClick: function () { this.tapeTone(1900, 1300, 0.025, "square", 0.012); this.tapeHiss(0.06, 3400, 0.018); },
    tapeSound: function (ms) {
      var B = this.tp, best = null;
      /* static while the dial moves between stations; a hum on a clear one */
      B.staticSnd -= ms;
      if (B.moved && B.staticSnd <= 0) {
        B.staticSnd = 130;
        best = this.tapeBest();
        if (!best || best.c < 0.4) this.tapeHiss(0.14, rnd(2400, 3600), 0.016);
      }
      if (B.lockT > 0 && Math.floor((B.lockT - ms) / 120) !== Math.floor(B.lockT / 120)) this.tapeTone(300 + 600 * B.lockT / B.P.lockMs, 0, 0.08, "sine", 0.02);
      if (B.ringT > 0 && Math.floor((B.ringT - ms) / 400) !== Math.floor(B.ringT / 400)) this.tapeTone(1180 + B.ringT * 0.1, 1170, 0.4, "sine", 0.018);
      /* the rain, softly, all the time */
      B.rainT -= ms;
      if (B.rainT <= 0) { B.rainT = 1500; this.tapeHiss(1.8, 5200, 0.006); }
      /* a heartbeat on the last two days */
      if (!this._between && B.day >= 5 && B.retreat <= 0) {
        B.beatT -= ms;
        if (B.beatT <= 0) { B.beatT = B.day >= 6 ? 640 : 950; this.tapeTone(58, 44, 0.16, "sine", 0.09); this.tapeTone(54, 42, 0.14, "sine", 0.07, 0.2); }
      }
    }
  });
})();
