/* SOL Labyrinth v5.22 — the Lit and Film mode "sync": Keep It in Sync (The Jazz Singer, 1927; Film History).
 *
 * The projection booth of a 1927 picture palace on the night the talkies arrive. Through the booth's front window:
 * the art-deco auditorium, warm sepia and gold, the gilded proscenium and its velvet curtains, the screen with the
 * picture on it (a singer by a piano, flickering and grainy) and the audience's heads in rows below it, lit by the
 * projector's beam. In the booth: the projector at the left (its reels, its film path and its arc lamp), the big
 * Vitaphone turntable at the right (the record, the heavy tonearm), and between them the lip-sync meter, the
 * audience's patience, the changeover lamp and the rack of reels, one per answer letter.
 *
 * Sound-on-disc: the picture comes off the film and the sound off a separate record, and they drift apart. The meter
 * shows the drift in frames (sound late at the left, early at the right): ◀ / ▶ (A / D, the pad, or holding the mouse
 * on the left or right half of the record) nudge the turntable slower or faster to keep its needle in the green.
 * The audience's patience drains while the meter is out of the green (faster in the red) and refills in it; when it
 * runs out they boo, and that costs a life. Now and then the tonearm shakes: press CUE (Space, the CUE button or a
 * click) before it stops shaking to catch the needle; if it skips, that costs a life and throws the sound off.
 * The answer: pick the reel with the right letter in the rack (▲ ▼ / W S, or click it), wait for the cue dot in the
 * corner of the picture (a small dot warns first) and press CUE on the big dot: the changeover to that reel picks its
 * letter (answerPick). It only takes while the meter is in the green; CUE with no dot up is a false cue (the audience
 * grumbles). The game clock keeps the cue and the needle apart, so CUE never means both at once.
 * A tune of the house's own plays off the record: its notes come out of the speakers late or early, exactly as far as
 * the meter says, while the singer's mouth keeps the picture's time.
 *
 * syncParams sets one difficulty curve for levels 1-100; each tier of ten levels adds something (the news lines).
 * Registered with SolModes.extend (js/modes.js); the methods are copied onto ModeScene, so `this` is the mode scene.
 * Every texture is drawn once (canvasTex) under an "md-sync-" key.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, canvasTex = L.canvasTex;

  var C = { ink: "#1a120b", wood: "#4a2e1a", gold: "#d4a84a", goldL: "#f2d488", goldD: "#8a6420", cream: "#f3e6c4",
    sepia: "#a07850", sepiaL: "#d8c09a", velvet: "#5a1a14", velvetL: "#8a2a1e", green: "#9ccf74", amber: "#e8a83a", red: "#c8402a" };
  var TAU = Math.PI * 2, DEG = Math.PI / 180;
  var MAXF = 16;                 /* the meter's range, frames either way */
  var FPS = 24;                  /* sound film's speed: a frame is 1/24 s */
  var BEAT = 60 / 112;           /* the house tune's beat, s */
  var SERIF = "Georgia, 'Palatino Linotype', 'Book Antiqua', serif";
  var DECO = "'Trebuchet MS', 'Century Gothic', 'Segoe UI', Roboto, sans-serif";
  /* the house tune (an original little foxtrot): one note a beat, null a rest; a chord a bar */
  var MEL = [64, 67, 69, 67, 64, null, 62, 60, 62, 64, 67, 64, 62, null, null, null,
    64, 67, 69, 72, 69, null, 67, 64, 62, 64, 62, 60, 60, null, null, null];
  var CHORDS = [[48, 60, 64, 67], [45, 57, 60, 64], [50, 62, 65, 69], [43, 55, 59, 62], [48, 60, 64, 67], [41, 53, 57, 60], [43, 55, 59, 62], [48, 60, 64, 67]];
  function hz(m) { return 440 * Math.pow(2, (m - 69) / 12); }

  /* ── difficulty: one curve for every level 1-100, each level harder than the one before ── */
  function syncParams(n) {
    n = Math.min(100, Math.max(1, Number(n) || 1));
    return {
      drift: 1 + n * 0.035,                                         /* frames a second the record wanders: 1.04 at 1, 4.5 at 100 */
      driftEvery: 4 - n * 0.022,                                    /* s between changes in the wander */
      nudge: 3.4 + n * 0.085,                                       /* frames a second a held ◀ or ▶ moves the sound */
      lag: 0.05 + n * 0.003,                                        /* s the heavy platter takes to answer a nudge */
      green: 6 - n * 0.035,                                         /* the green band, frames either side of sync: 6 → 2.5 */
      amber: 4.5 - n * 0.02,                                        /* the amber band beyond it, frames */
      drainA: n >= 81 ? (0.16 + n * 0.0028) * 0.8 : 0.05 + n * 0.0012,   /* patience lost a second in the amber (81 on: a tough crowd) */
      drainR: 0.16 + n * 0.0028,                                    /* ... and in the red: 6 s at 1, 2.3 s at 100 */
      regain: 0.14 - n * 0.0007,                                    /* patience won back a second in the green */
      refill: 0.75 - n * 0.002,                                     /* patience after they boo */
      falseCost: 0.06 + n * 0.0012,                                 /* patience lost by a cue at the wrong moment */
      skipMin: 12 - n * 0.08,                                       /* s between needle skips: 12-18 at 1, 4-7 at 100 */
      skipSpan: 6 - n * 0.03,
      warnMs: 2200 - n * 15,                                        /* the tonearm shakes this long before it skips */
      jump: 4 + n * 0.07,                                           /* frames a skip throws the sound */
      reelMs: 6000 - n * 25,                                        /* ms from one cue to the next */
      cueMs: 2000 - n * 14,                                         /* the big cue dot is up this long */
      motorMs: 1200 - n * 4,                                        /* the small dot before it */
      warp: n >= 11 ? 0.6 + (n - 11) * 0.021 : 0,                   /* warped discs: the sound wavers, frames a second */
      warpHz: 0.2 + n * 0.002,
      surgeRate: n >= 21 ? 1 / (14 - (n - 21) * 0.09) : 0,          /* motor surges a second */
      surge: n >= 21 ? 2.5 + (n - 21) * 0.019 : 0,                  /* ... and how hard, frames a second */
      spliceRate: n >= 31 ? 1 / (13 - (n - 31) * 0.09) : 0,         /* bad splices a second */
      splice: n >= 31 ? 4 + (n - 31) * 0.06 : 0,                    /* frames a splice jumps the picture */
      scratchRate: n >= 41 ? 1 / (7 - (n - 41) * 0.05) : 0,         /* scratches that look like cue dots, a second */
      double: n >= 51 ? 0.25 + (n - 51) * 0.008 : 0,                /* chance a caught needle shakes again at once */
      darkRate: n >= 61 ? 1 / (12 - (n - 61) * 0.1) : 0,            /* the meter lamp goes out, a second */
      darkMs: n >= 61 ? 1500 + (n - 61) * 25 : 0,
      twoStep: n >= 71 ? 1 : 0,                                     /* the two-dot changeover: motor, then change over */
      tough: n >= 81 ? 1 : 0                                        /* the crowd boos in the amber as in the red */
    };
  }

  /* ── art, drawn once ── */
  function rr(c, x, y, w, h, r) {
    c.beginPath(); c.moveTo(x + r, y); c.lineTo(x + w - r, y); c.quadraticCurveTo(x + w, y, x + w, y + r); c.lineTo(x + w, y + h - r);
    c.quadraticCurveTo(x + w, y + h, x + w - r, y + h); c.lineTo(x + r, y + h); c.quadraticCurveTo(x, y + h, x, y + h - r); c.lineTo(x, y + r);
    c.quadraticCurveTo(x, y, x + r, y); c.closePath();
  }
  /* a ziggurat outline: the art-deco stepped frame */
  function stepped(c, x0, y0, x1, y1, s) {
    c.beginPath(); c.moveTo(x0, y1); c.lineTo(x0, y0 + 2 * s); c.lineTo(x0 + s, y0 + 2 * s); c.lineTo(x0 + s, y0 + s); c.lineTo(x0 + 2 * s, y0 + s);
    c.lineTo(x0 + 2 * s, y0); c.lineTo(x1 - 2 * s, y0); c.lineTo(x1 - 2 * s, y0 + s); c.lineTo(x1 - s, y0 + s); c.lineTo(x1 - s, y0 + 2 * s);
    c.lineTo(x1, y0 + 2 * s); c.lineTo(x1, y1);
  }
  function fan(c, x, y, r, n, a0, a1, colA, colB) {
    for (var i = 0; i < n; i++) {
      var u0 = a0 + (a1 - a0) * i / n, u1 = a0 + (a1 - a0) * (i + 1) / n;
      c.fillStyle = i % 2 ? colB : colA; c.beginPath(); c.moveTo(x, y); c.arc(x, y, r, u0, u1); c.closePath(); c.fill();
    }
  }
  /* the picture on the screen: a singer by an upright piano on a little stage, in sepia black-and-white */
  function drawPicture(open) {
    return function (c, w, h) {
      var i, g;
      for (i = 0; i < w; i += 16) {
        g = c.createLinearGradient(i, 0, i + 16, 0);
        g.addColorStop(0, "#3a3026"); g.addColorStop(0.5, "#6e604c"); g.addColorStop(1, "#3a3026");
        c.fillStyle = g; c.fillRect(i, 0, 16, h * 0.76);
      }
      g = c.createRadialGradient(w * 0.62, h * 0.5, 6, w * 0.62, h * 0.5, w * 0.42);
      g.addColorStop(0, "rgba(250,236,204,0.55)"); g.addColorStop(1, "rgba(250,236,204,0)");
      c.fillStyle = g; c.fillRect(0, 0, w, h);
      c.fillStyle = "#2e261d"; c.fillRect(0, h * 0.76, w, h * 0.24);
      c.strokeStyle = "rgba(200,180,150,0.18)"; c.lineWidth = 1;
      for (i = 0; i < 6; i++) { c.beginPath(); c.moveTo(0, h * 0.78 + i * 9); c.lineTo(w, h * 0.78 + i * 9 + 4); c.stroke(); }
      g = c.createRadialGradient(w * 0.63, h * 0.8, 4, w * 0.63, h * 0.8, w * 0.2);
      g.addColorStop(0, "rgba(255,244,220,0.45)"); g.addColorStop(1, "rgba(255,244,220,0)");
      c.fillStyle = g; c.fillRect(0, h * 0.6, w, h * 0.4);
      /* the upright piano and its stool */
      c.fillStyle = "#1c1611"; c.fillRect(w * 0.08, h * 0.42, w * 0.3, h * 0.36);
      c.fillStyle = "#2c241b"; c.fillRect(w * 0.06, h * 0.4, w * 0.34, h * 0.04);
      c.fillStyle = "#e8dcc0"; c.fillRect(w * 0.09, h * 0.6, w * 0.28, h * 0.035);
      c.fillStyle = "#1c1611"; for (i = 0; i < 14; i++) if (i % 7 !== 2 && i % 7 !== 6) c.fillRect(w * 0.095 + i * w * 0.02, h * 0.6, w * 0.009, h * 0.02);
      c.fillStyle = "#3a3026"; c.fillRect(w * 0.12, h * 0.46, w * 0.22, h * 0.1);
      c.fillStyle = "#cfc2a4"; c.fillRect(w * 0.18, h * 0.44, w * 0.08, h * 0.05);   /* sheet music */
      c.fillStyle = "#1c1611"; c.fillRect(w * 0.16, h * 0.72, w * 0.12, h * 0.03); c.fillRect(w * 0.17, h * 0.74, w * 0.015, h * 0.06); c.fillRect(w * 0.25, h * 0.74, w * 0.015, h * 0.06);
      /* the singer: dark suit, white shirt front, a bow tie, one arm out on the long notes */
      var sx = w * 0.63, sy = h * 0.79;
      c.fillStyle = "#15110d";
      c.fillRect(sx - 15, sy - 62, 12, 62); c.fillRect(sx + 3, sy - 62, 12, 62);
      c.fillRect(sx - 20, sy - 4, 18, 5); c.fillRect(sx + 2, sy - 4, 18, 5);
      c.beginPath(); c.moveTo(sx - 22, sy - 60); c.lineTo(sx - 20, sy - 118); c.lineTo(sx + 20, sy - 118); c.lineTo(sx + 22, sy - 60); c.closePath(); c.fill();
      c.fillStyle = "#e6dcc6"; c.beginPath(); c.moveTo(sx - 7, sy - 118); c.lineTo(sx + 7, sy - 118); c.lineTo(sx, sy - 82); c.closePath(); c.fill();
      c.fillStyle = "#15110d"; c.beginPath(); c.moveTo(sx - 7, sy - 116); c.lineTo(sx, sy - 112); c.lineTo(sx + 7, sy - 116); c.lineTo(sx + 7, sy - 108); c.lineTo(sx, sy - 112); c.lineTo(sx - 7, sy - 108); c.closePath(); c.fill();
      c.strokeStyle = "#15110d"; c.lineCap = "round"; c.lineWidth = 9;
      if (open) {
        c.beginPath(); c.moveTo(sx + 17, sy - 112); c.lineTo(sx + 40, sy - 122); c.lineTo(sx + 58, sy - 140); c.stroke();
        c.beginPath(); c.moveTo(sx - 17, sy - 112); c.lineTo(sx - 30, sy - 92); c.lineTo(sx - 22, sy - 76); c.stroke();
        c.fillStyle = "#d8ccb4"; c.beginPath(); c.arc(sx + 60, sy - 143, 5, 0, TAU); c.fill(); c.beginPath(); c.arc(sx - 21, sy - 74, 4.5, 0, TAU); c.fill();
      } else {
        c.beginPath(); c.moveTo(sx + 17, sy - 112); c.lineTo(sx + 30, sy - 92); c.lineTo(sx + 24, sy - 74); c.stroke();
        c.beginPath(); c.moveTo(sx - 17, sy - 112); c.lineTo(sx - 30, sy - 92); c.lineTo(sx - 22, sy - 76); c.stroke();
        c.fillStyle = "#d8ccb4"; c.beginPath(); c.arc(sx + 23, sy - 72, 4.5, 0, TAU); c.fill(); c.beginPath(); c.arc(sx - 21, sy - 74, 4.5, 0, TAU); c.fill();
      }
      /* the head: plain features, hair combed back; the mouth opens on the notes */
      c.fillStyle = "#d8ccb4"; c.fillRect(sx - 5, sy - 128, 10, 12);
      c.beginPath(); c.ellipse(sx, sy - 140, 13, 16, 0, 0, TAU); c.fill();
      c.fillStyle = "#1e1812"; c.beginPath(); c.ellipse(sx, sy - 150, 14, 8, 0, Math.PI, TAU); c.fill();
      c.fillRect(sx - 14, sy - 151, 28, 4);
      c.fillStyle = "#2a2219"; c.fillRect(sx - 6, sy - 143, 3, 2.4); c.fillRect(sx + 3, sy - 143, 3, 2.4);
      c.fillStyle = "#3a2c22";
      if (open) { c.beginPath(); c.ellipse(sx, sy - 131, 4.2, 5.2, 0, 0, TAU); c.fill(); }
      else c.fillRect(sx - 4, sy - 132, 8, 1.8);
      /* the old film's vignette */
      g = c.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, w * 0.62);
      g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(14,10,6,0.62)");
      c.fillStyle = g; c.fillRect(0, 0, w, h);
    };
  }
  function drawGrain(seed) {
    return function (c, w, h) {
      var s = seed * 9301 + 49297, i;
      function r() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
      for (i = 0; i < 900; i++) {
        c.fillStyle = r() < 0.5 ? "rgba(255,246,224," + (0.25 + r() * 0.5) + ")" : "rgba(10,6,2," + (0.3 + r() * 0.5) + ")";
        c.fillRect(Math.floor(r() * w), Math.floor(r() * h), 1 + (r() < 0.15 ? 1 : 0), 1);
      }
      c.fillStyle = "rgba(255,246,224,0.5)"; c.fillRect(Math.floor(r() * w), Math.floor(r() * h), 2, 2);
      c.fillStyle = "rgba(10,6,2,0.6)"; c.beginPath(); c.arc(r() * w, r() * h, 1.6, 0, TAU); c.fill();
    };
  }
  /* the back of a head in the audience, with a rim of light from the screen; seven 1927 styles */
  function drawHead(v) {
    return function (c, w, h) {
      var cx = w / 2, cy = h * 0.5, D = "#120b06", RIM = "rgba(214,170,110,0.75)";
      c.fillStyle = D;
      c.beginPath(); c.ellipse(cx, h + 6, w * 0.48, h * 0.32, 0, Math.PI, TAU); c.fill();
      c.fillRect(cx - 6, cy + 8, 12, h * 0.3);
      c.beginPath(); c.ellipse(cx, cy, 13, 15, 0, 0, TAU); c.fill();
      c.strokeStyle = RIM; c.lineWidth = 1.6;
      function rimArc(x, y, rx, ry, a0, a1) { c.beginPath(); c.ellipse(x, y, rx, ry, 0, a0, a1); c.stroke(); }
      if (v === 0) {        /* a fedora */
        c.fillStyle = D; c.beginPath(); c.ellipse(cx, cy - 6, 21, 5, 0, 0, TAU); c.fill();
        c.beginPath(); c.moveTo(cx - 12, cy - 6); c.quadraticCurveTo(cx - 12, cy - 24, cx, cy - 22); c.quadraticCurveTo(cx + 12, cy - 24, cx + 12, cy - 6); c.closePath(); c.fill();
        rimArc(cx, cy - 6, 21, 5, Math.PI * 1.05, Math.PI * 1.95); rimArc(cx, cy - 14, 11, 9, Math.PI * 1.1, Math.PI * 1.9);
      } else if (v === 1) { /* a cloche hat */
        c.fillStyle = D; c.beginPath(); c.moveTo(cx - 16, cy + 2); c.quadraticCurveTo(cx - 17, cy - 20, cx, cy - 20); c.quadraticCurveTo(cx + 17, cy - 20, cx + 16, cy + 2); c.closePath(); c.fill();
        rimArc(cx, cy - 4, 16, 16, Math.PI * 1.1, Math.PI * 1.9);
        c.strokeStyle = "rgba(214,170,110,0.4)"; c.beginPath(); c.moveTo(cx - 15, cy - 6); c.lineTo(cx + 15, cy - 6); c.stroke();
      } else if (v === 2) { /* a bob */
        c.fillStyle = D; c.beginPath(); c.moveTo(cx - 15, cy + 6); c.quadraticCurveTo(cx - 16, cy - 17, cx, cy - 17); c.quadraticCurveTo(cx + 16, cy - 17, cx + 15, cy + 6); c.closePath(); c.fill();
        rimArc(cx, cy - 2, 15, 15, Math.PI * 1.15, Math.PI * 1.85);
      } else if (v === 3) { /* a bowler */
        c.fillStyle = D; c.beginPath(); c.ellipse(cx, cy - 7, 17, 4, 0, 0, TAU); c.fill();
        c.beginPath(); c.arc(cx, cy - 8, 11.5, Math.PI, TAU); c.fill();
        rimArc(cx, cy - 8, 11.5, 11.5, Math.PI * 1.1, Math.PI * 1.9);
      } else if (v === 4) { /* a flat cap */
        c.fillStyle = D; c.beginPath(); c.ellipse(cx, cy - 9, 15, 8, 0, Math.PI, TAU); c.fill(); c.fillRect(cx - 15, cy - 10, 30, 4);
        rimArc(cx, cy - 9, 15, 8, Math.PI * 1.1, Math.PI * 1.9);
      } else if (v === 5) { /* hair combed flat */
        rimArc(cx, cy, 13, 15, Math.PI * 1.15, Math.PI * 1.85);
      } else {              /* a hat with a feather */
        c.fillStyle = D; c.beginPath(); c.ellipse(cx, cy - 6, 18, 5, 0, 0, TAU); c.fill();
        c.beginPath(); c.arc(cx, cy - 7, 11, Math.PI, TAU); c.fill();
        c.strokeStyle = "rgba(214,170,110,0.65)"; c.lineWidth = 2; c.beginPath(); c.moveTo(cx + 6, cy - 12); c.quadraticCurveTo(cx + 22, cy - 26, cx + 14, cy - 34); c.stroke();
        c.strokeStyle = RIM; c.lineWidth = 1.6; rimArc(cx, cy - 7, 11, 11, Math.PI * 1.1, Math.PI * 1.9);
      }
      c.strokeStyle = "rgba(214,170,110,0.35)"; c.lineWidth = 1.2; rimArc(cx, h + 6, w * 0.48, h * 0.32, Math.PI * 1.2, Math.PI * 1.8);
    };
  }
  /* a reel of film in its tin, with its Vitaphone disc standing behind it (the can's label carries the letter) */
  function drawCan(c, w, h) {
    var cy = h / 2, g;
    c.fillStyle = "#0c0a08"; c.beginPath(); c.arc(66, cy, 28, 0, TAU); c.fill();
    c.strokeStyle = "rgba(160,140,110,0.35)"; c.lineWidth = 0.8;
    for (var r = 12; r < 27; r += 2.5) { c.beginPath(); c.arc(66, cy, r, -1.2, 1.2); c.stroke(); }
    c.fillStyle = "#c9a24a"; c.beginPath(); c.arc(66, cy, 9, 0, TAU); c.fill();
    c.fillStyle = "#0c0a08"; c.beginPath(); c.arc(66, cy, 1.6, 0, TAU); c.fill();
    g = c.createLinearGradient(6, 4, 58, 60);
    g.addColorStop(0, "#d9cdb2"); g.addColorStop(0.45, "#9a8a6c"); g.addColorStop(1, "#5a4c38");
    c.fillStyle = g; c.beginPath(); c.arc(32, cy, 28, 0, TAU); c.fill();
    c.strokeStyle = "#2a2014"; c.lineWidth = 1.4; c.stroke();
    c.strokeStyle = "rgba(255,248,230,0.5)"; c.lineWidth = 1; c.beginPath(); c.arc(32, cy, 24.5, Math.PI * 0.9, Math.PI * 1.7); c.stroke();
    c.strokeStyle = "rgba(42,32,20,0.55)"; c.beginPath(); c.arc(32, cy, 22.5, 0, TAU); c.stroke();
    c.fillStyle = C.cream; c.beginPath(); c.arc(32, cy, 16, 0, TAU); c.fill();
    c.strokeStyle = C.goldD; c.lineWidth = 1.4; c.stroke();
    c.strokeStyle = "rgba(138,100,32,0.6)"; c.lineWidth = 0.8; c.beginPath(); c.arc(32, cy, 13.5, 0, TAU); c.stroke();
  }
  /* a projector reel: a pressed-steel flange with three windows (the film shows through them) */
  function drawReel(c, w, h) {
    var cx = w / 2, cy = h / 2, R = w / 2 - 1, g, i;
    g = c.createRadialGradient(cx - R * 0.3, cy - R * 0.3, 4, cx, cy, R);
    g.addColorStop(0, "#d8d0c0"); g.addColorStop(0.6, "#8c8270"); g.addColorStop(1, "#4a4236");
    c.fillStyle = g; c.beginPath(); c.arc(cx, cy, R, 0, TAU); c.fill();
    c.globalCompositeOperation = "destination-out";
    for (i = 0; i < 3; i++) {
      var a = i * TAU / 3 - Math.PI / 2;
      c.beginPath(); c.arc(cx, cy, R * 0.84, a - 0.72, a + 0.72); c.arc(cx, cy, R * 0.3, a + 0.6, a - 0.6, true); c.closePath(); c.fill();
    }
    c.globalCompositeOperation = "source-over";
    c.strokeStyle = "#2a241c"; c.lineWidth = 2; c.beginPath(); c.arc(cx, cy, R - 1, 0, TAU); c.stroke();
    c.strokeStyle = "rgba(255,250,235,0.35)"; c.lineWidth = 1.5; c.beginPath(); c.arc(cx, cy, R - 4, Math.PI * 1.05, Math.PI * 1.6); c.stroke();
    c.fillStyle = "#3a342a"; c.beginPath(); c.arc(cx, cy, R * 0.16, 0, TAU); c.fill();
    c.fillStyle = "#c8bea8"; c.beginPath(); c.arc(cx, cy, R * 0.07, 0, TAU); c.fill();
  }
  /* the sound disc: black shellac, fine grooves, a gold label with the start arrow scratched on it (Vitaphone
     records were played from the inside out, so the arrow is near the label) */
  function drawDisc(c, w, h) {
    var cx = w / 2, cy = h / 2, R = w / 2 - 1, r;
    c.fillStyle = "#0b0907"; c.beginPath(); c.arc(cx, cy, R, 0, TAU); c.fill();
    for (r = R * 0.34; r < R * 0.97; r += 1.7) {
      c.strokeStyle = "rgba(120,104,84," + (0.12 + 0.1 * Math.sin(r * 0.37)) + ")"; c.lineWidth = 0.7;
      c.beginPath(); c.arc(cx, cy, r, 0, TAU); c.stroke();
    }
    c.strokeStyle = "rgba(0,0,0,0.9)"; c.lineWidth = 2.5;
    [0.52, 0.71, 0.86].forEach(function (f) { c.beginPath(); c.arc(cx, cy, R * f, 0, TAU); c.stroke(); });
    var g = c.createRadialGradient(cx, cy, 2, cx, cy, R * 0.3);
    g.addColorStop(0, "#e9c873"); g.addColorStop(1, "#a87e2c");
    c.fillStyle = g; c.beginPath(); c.arc(cx, cy, R * 0.3, 0, TAU); c.fill();
    c.strokeStyle = "#5a3e10"; c.lineWidth = 2; c.stroke();
    c.lineWidth = 1; c.beginPath(); c.arc(cx, cy, R * 0.25, 0, TAU); c.stroke();
    fan(c, cx, cy, R * 0.22, 12, -Math.PI * 0.95, -Math.PI * 0.05, "rgba(90,62,16,0.55)", "rgba(255,236,170,0.25)");
    c.fillStyle = "#5a3e10"; c.font = "bold " + Math.round(R * 0.075) + "px Georgia, serif"; c.textAlign = "center"; c.textBaseline = "middle";
    c.fillText("SOUND DISC", cx, cy + R * 0.12); c.fillText("33⅓", cx, cy + R * 0.2);
    c.fillStyle = "#fff6dc"; c.beginPath(); c.moveTo(cx, cy - R * 0.36); c.lineTo(cx - 6, cy - R * 0.27); c.lineTo(cx + 6, cy - R * 0.27); c.closePath(); c.fill();
    c.fillRect(cx - 1.5, cy - R * 0.28, 3, R * 0.1);
    c.fillStyle = "#1a120b"; c.beginPath(); c.arc(cx, cy, R * 0.025, 0, TAU); c.fill();
  }
  function drawNote(c, w, h) {
    c.lineJoin = "round";
    function shape() { c.beginPath(); c.ellipse(w * 0.36, h * 0.78, w * 0.26, h * 0.13, -0.4, 0, TAU); c.moveTo(w * 0.58, h * 0.74); c.lineTo(w * 0.58, h * 0.12); c.quadraticCurveTo(w * 0.9, h * 0.22, w * 0.88, h * 0.48); }
    c.strokeStyle = "#1a120b"; c.lineWidth = 5; shape(); c.stroke();
    c.fillStyle = "#f2d488"; c.beginPath(); c.ellipse(w * 0.36, h * 0.78, w * 0.26, h * 0.13, -0.4, 0, TAU); c.fill();
    c.strokeStyle = "#f2d488"; c.lineWidth = 2.4; c.beginPath(); c.moveTo(w * 0.58, h * 0.74); c.lineTo(w * 0.58, h * 0.12); c.quadraticCurveTo(w * 0.9, h * 0.22, w * 0.88, h * 0.48); c.stroke();
  }
  /* the projectionist's gloved hand that steadies the tonearm */
  function drawHand(c, w, h) {
    c.fillStyle = "#1a120b";
    rr(c, 3, 13, 30, 24, 9); c.fill();
    for (var i = 0; i < 4; i++) { rr(c, 5 + i * 7, 2 + (i === 0 || i === 3 ? 4 : 0), 8, 18, 4); c.fill(); }
    c.fillStyle = "#f3ecdc";
    rr(c, 5, 15, 26, 20, 8); c.fill();
    for (i = 0; i < 4; i++) { rr(c, 6.5 + i * 7, 3.5 + (i === 0 || i === 3 ? 4 : 0), 5.5, 16, 3); c.fill(); }
    c.fillStyle = "#c8bca4"; c.fillRect(5, 32, 26, 4);
    c.strokeStyle = "rgba(90,70,50,0.5)"; c.lineWidth = 1; for (i = 0; i < 3; i++) { c.beginPath(); c.moveTo(12 + i * 7, 22); c.lineTo(12 + i * 7, 30); c.stroke(); }
  }
  function ensureSyncArt(scene) {
    canvasTex(scene, "md-sync-pic-0", 320, 240, drawPicture(false));
    canvasTex(scene, "md-sync-pic-1", 320, 240, drawPicture(true));
    for (var i = 0; i < 3; i++) canvasTex(scene, "md-sync-grain-" + i, 160, 120, drawGrain(i + 1));
    for (i = 0; i < 7; i++) canvasTex(scene, "md-sync-head-" + i, 48, 60, drawHead(i));
    canvasTex(scene, "md-sync-can", 100, 64, drawCan);
    canvasTex(scene, "md-sync-reel", 128, 128, drawReel);
    canvasTex(scene, "md-sync-disc", 256, 256, drawDisc);
    canvasTex(scene, "md-sync-note", 24, 32, drawNote);
    canvasTex(scene, "md-sync-hand", 36, 40, drawHand);
  }

  /* the theater and the booth, drawn once for the canvas size (S is the layout) */
  function drawHall(S, W, H) {
    return function (c) {
      var k = S.k, hy = S.hy, sc = S.scr, A = S.arch, g, i, x, y;
      /* ── the auditorium ── */
      g = c.createLinearGradient(0, 0, 0, hy);
      g.addColorStop(0, "#120a05"); g.addColorStop(0.5, "#2a190d"); g.addColorStop(1, "#3a2313");
      c.fillStyle = g; c.fillRect(0, 0, W, hy);
      /* a frieze of chevrons along the cornice */
      c.fillStyle = "rgba(212,168,74,0.18)"; c.fillRect(0, 2 * k, W, 2 * k);
      c.strokeStyle = "rgba(212,168,74,0.22)"; c.lineWidth = 1.5 * k;
      c.beginPath(); for (x = 0; x < W; x += 16 * k) { c.moveTo(x, 13 * k); c.lineTo(x + 8 * k, 6 * k); c.lineTo(x + 16 * k, 13 * k); } c.stroke();
      /* the side walls: fluted pilasters, fan sconces and a box on each side */
      var side = A.x0 - 12 * k;
      [0, 1].forEach(function (sd) {
        var mir = function (xx) { return sd ? W - xx : xx; };
        if (side > 70 * k) {
          [0.16, 0.9].forEach(function (f) {
            var px = mir(side * f), pw = 18 * k;
            g = c.createLinearGradient(px - pw / 2, 0, px + pw / 2, 0);
            g.addColorStop(0, "#3e2812"); g.addColorStop(0.5, "#6a4a22"); g.addColorStop(1, "#2e1c0c");
            c.fillStyle = g; c.fillRect(px - pw / 2, 18 * k, pw, hy - 18 * k);
            c.strokeStyle = "rgba(242,212,136,0.35)"; c.lineWidth = 1;
            for (i = -1; i <= 1; i++) { c.beginPath(); c.moveTo(px + i * 5 * k, 30 * k); c.lineTo(px + i * 5 * k, hy); c.stroke(); }
            c.fillStyle = C.gold; c.fillRect(px - pw / 2 - 4 * k, 18 * k, pw + 8 * k, 4 * k); c.fillRect(px - pw / 2 - 2 * k, 24 * k, pw + 4 * k, 2 * k);
          });
          /* a fan sconce, lit */
          var sx = mir(side * 0.53), sy = hy * 0.22;
          g = c.createRadialGradient(sx, sy, 2, sx, sy, 70 * k);
          g.addColorStop(0, "rgba(255,214,140,0.42)"); g.addColorStop(1, "rgba(255,214,140,0)");
          c.fillStyle = g; c.fillRect(sx - 80 * k, sy - 80 * k, 160 * k, 160 * k);
          fan(c, sx, sy + 9 * k, 17 * k, 7, Math.PI, TAU, "#e9c873", "#a87e2c");
          c.fillStyle = "#fff0c8"; c.beginPath(); c.arc(sx, sy + 9 * k, 4 * k, Math.PI, TAU); c.fill();
          /* a theater box with its gilded rail and two silhouettes */
          var bx0 = mir(side * 0.24), bx1 = mir(side * 0.82), bl = Math.min(bx0, bx1), bw = Math.abs(bx1 - bx0), by = hy * 0.46;
          if (bw > 40 * k) {
            c.fillStyle = "#0e0804"; c.fillRect(bl, by - 30 * k, bw, 30 * k);
            [0.3, 0.68].forEach(function (f, j) {
              var hx = bl + bw * f;
              c.fillStyle = "#1c120a"; c.beginPath(); c.arc(hx, by - 12 * k, 7 * k, 0, TAU); c.fill(); c.fillRect(hx - 9 * k, by - 6 * k, 18 * k, 6 * k);
              if (j === 1) { c.beginPath(); c.ellipse(hx, by - 18 * k, 10 * k, 3 * k, 0, 0, TAU); c.fill(); }
            });
            g = c.createLinearGradient(0, by, 0, by + 26 * k);
            g.addColorStop(0, C.velvetL); g.addColorStop(1, C.velvet);
            c.fillStyle = g; c.beginPath(); c.moveTo(bl - 4 * k, by); c.lineTo(bl + bw + 4 * k, by); c.quadraticCurveTo(bl + bw, by + 30 * k, bl + bw / 2, by + 32 * k); c.quadraticCurveTo(bl, by + 30 * k, bl - 4 * k, by); c.fill();
            c.strokeStyle = C.gold; c.lineWidth = 3 * k; c.beginPath(); c.moveTo(bl - 5 * k, by); c.lineTo(bl + bw + 5 * k, by); c.stroke();
            c.lineWidth = 1.2 * k; c.beginPath(); c.moveTo(bl + 4 * k, by + 7 * k); c.quadraticCurveTo(bl + bw / 2, by + 24 * k, bl + bw - 4 * k, by + 7 * k); c.stroke();
          }
        }
      });
      /* the proscenium: three gilded stepped frames around a dark opening */
      var st = 9 * k;
      c.fillStyle = "#0c0704"; stepped(c, A.x0, A.y0, A.x1, A.y1, st); c.closePath(); c.fill();
      for (i = 3; i >= 0; i--) {
        var o = i * 6 * k;
        c.strokeStyle = i % 2 ? "#4a2e10" : (i === 0 ? C.goldL : C.gold); c.lineWidth = (i === 0 ? 2.4 : 4) * k;
        stepped(c, A.x0 - o, A.y0 - o, A.x1 + o, A.y1, st); c.stroke();
      }
      /* the curtains, gathered at the sides */
      function curtain(x0, x1, flip) {
        var top = A.y0 + 2 * st + 2 * k, bot = A.y1 - 2 * k, pw = 8 * k, xx;
        for (xx = x0; xx < x1; xx += pw) {
          var gg = c.createLinearGradient(xx, 0, xx + pw, 0);
          gg.addColorStop(0, "#2a0a06"); gg.addColorStop(0.45, C.velvetL); gg.addColorStop(1, "#300c08");
          c.fillStyle = gg;
          var f = (flip ? (x1 - xx) : (xx - x0)) / Math.max(1, x1 - x0);
          c.fillRect(xx, top, pw + 0.5, (bot - top) * (0.94 + 0.06 * f));
        }
        c.fillStyle = C.gold; c.fillRect(x0, bot - 4 * k, x1 - x0, 2 * k);
        var ty = sc.y + sc.h * 0.6;
        c.strokeStyle = C.goldL; c.lineWidth = 2.5 * k; c.beginPath(); c.moveTo(flip ? x1 : x0, ty - 4 * k); c.quadraticCurveTo((x0 + x1) / 2, ty + 4 * k, flip ? x0 : x1, ty - 6 * k); c.stroke();
      }
      curtain(A.x0 + 2 * k, sc.x - 7 * k, false);
      curtain(sc.x + sc.w + 7 * k, A.x1 - 2 * k, true);
      /* the valance with its scallops and fringe, and a sunburst over the screen */
      var vy0 = A.y0 + 2 * st, vy1 = sc.y - 7 * k;
      if (vy1 > vy0 + 4 * k) {
        g = c.createLinearGradient(0, vy0, 0, vy1);
        g.addColorStop(0, "#3a0e08"); g.addColorStop(1, C.velvetL);
        c.fillStyle = g; c.fillRect(A.x0 + 2 * st, vy0, A.x1 - A.x0 - 4 * st, vy1 - vy0);
        var sw2 = 22 * k;
        for (x = A.x0 + 2 * st; x < A.x1 - 2 * st; x += sw2) { c.fillStyle = C.velvetL; c.beginPath(); c.arc(x + sw2 / 2, vy1, sw2 / 2, 0, Math.PI); c.fill(); }
        c.fillStyle = C.gold; c.fillRect(A.x0 + 2 * st, vy1 - 1.5 * k, A.x1 - A.x0 - 4 * st, 2 * k);
        fan(c, W / 2, vy1 - 1 * k, Math.min(28 * k, vy1 - vy0 + 4 * k), 11, Math.PI, TAU, C.gold, "#5a3a10");
      }
      /* the screen's black masking and the stage apron with its footlights */
      c.fillStyle = "#050302"; c.fillRect(sc.x - 5 * k, sc.y - 5 * k, sc.w + 10 * k, sc.h + 10 * k);
      c.fillStyle = "#e8dcc0"; c.fillRect(sc.x, sc.y, sc.w, sc.h);
      var ay0 = sc.y + sc.h + 5 * k;
      g = c.createLinearGradient(0, ay0, 0, A.y1);
      g.addColorStop(0, "#6a4424"); g.addColorStop(1, "#2a180c");
      c.fillStyle = g; c.fillRect(A.x0 + 3 * k, ay0, A.x1 - A.x0 - 6 * k, A.y1 - ay0);
      c.fillStyle = C.gold; c.fillRect(A.x0 - 18 * k, A.y1, A.x1 - A.x0 + 36 * k, 3 * k);
      for (x = A.x0 + 16 * k; x < A.x1 - 10 * k; x += 20 * k) {
        g = c.createRadialGradient(x, A.y1 - 2 * k, 0.5, x, A.y1 - 2 * k, 9 * k);
        g.addColorStop(0, "rgba(255,226,160,0.9)"); g.addColorStop(1, "rgba(255,226,160,0)");
        c.fillStyle = g; c.fillRect(x - 9 * k, A.y1 - 11 * k, 18 * k, 12 * k);
      }
      /* the stalls: dark rows falling away toward the booth */
      g = c.createLinearGradient(0, A.y1 + 3 * k, 0, hy);
      g.addColorStop(0, "#1e1209"); g.addColorStop(1, "#0e0805");
      c.fillStyle = g; c.fillRect(0, A.y1 + 3 * k, W, hy - A.y1 - 3 * k);
      c.strokeStyle = "rgba(160,110,60,0.12)"; c.lineWidth = 2 * k;
      for (i = 1; i < 5; i++) { y = A.y1 + (hy - A.y1) * i / 5; c.beginPath(); c.moveTo(0, y); c.quadraticCurveTo(W / 2, y - 6 * k, W, y); c.stroke(); }

      /* ── the booth's window sill, with the projection port ── */
      g = c.createLinearGradient(0, hy, 0, S.by0);
      g.addColorStop(0, "#6a4426"); g.addColorStop(1, "#2e1c10");
      c.fillStyle = g; c.fillRect(0, hy, W, S.by0 - hy);
      c.fillStyle = C.gold; c.fillRect(0, hy, W, 2 * k); c.fillRect(0, S.by0 - 2 * k, W, 1.5 * k);
      /* ── the booth: walnut paneling with gilt inlay, a rail, the floor ── */
      g = c.createLinearGradient(0, S.by0, 0, S.floorY);
      g.addColorStop(0, "#3c2616"); g.addColorStop(0.5, "#2c1b0f"); g.addColorStop(1, "#1e1209");
      c.fillStyle = g; c.fillRect(0, S.by0, W, S.floorY - S.by0);
      var pw2 = Math.max(80 * k, W / 9);
      for (x = pw2 * 0.5; x < W; x += pw2) {
        c.strokeStyle = "rgba(212,168,74,0.22)"; c.lineWidth = 1;
        c.strokeRect(x - pw2 / 2 + 8 * k, S.by0 + 10 * k, pw2 - 16 * k, S.railY - S.by0 - 20 * k);
        c.strokeStyle = "rgba(0,0,0,0.35)"; c.strokeRect(x - pw2 / 2 + 11 * k, S.by0 + 13 * k, pw2 - 22 * k, S.railY - S.by0 - 26 * k);
        c.strokeStyle = "rgba(212,168,74,0.3)"; c.beginPath(); c.moveTo(x - 10 * k, S.by0 + 22 * k); c.lineTo(x, S.by0 + 15 * k); c.lineTo(x + 10 * k, S.by0 + 22 * k); c.stroke();
      }
      c.fillStyle = "#4a2e1a"; c.fillRect(0, S.railY, W, 6 * k);
      c.fillStyle = "rgba(212,168,74,0.5)"; c.fillRect(0, S.railY, W, 1.5 * k);
      c.fillStyle = "#24160c"; c.fillRect(0, S.railY + 6 * k, W, S.floorY - S.railY - 6 * k);
      g = c.createLinearGradient(0, S.floorY, 0, H);
      g.addColorStop(0, "#1a110a"); g.addColorStop(1, "#0c0805");
      c.fillStyle = g; c.fillRect(0, S.floorY, W, H - S.floorY);
      c.strokeStyle = "rgba(120,80,40,0.25)"; c.lineWidth = 1;
      for (y = S.floorY + 6 * k; y < H; y += 9 * k) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
      /* the sign every booth had: nitrate film burns */
      var ns = S.sign;
      if (ns) {
        c.fillStyle = "#1a0e08"; rr(c, ns.x - ns.w / 2, ns.y - ns.h / 2, ns.w, ns.h, 4 * k); c.fill();
        c.strokeStyle = C.gold; c.lineWidth = 1.5 * k; c.stroke();
        c.fillStyle = C.red; c.font = "bold " + Math.round(10 * k) + "px " + DECO; c.textAlign = "center"; c.textBaseline = "middle";
        c.fillText("NO SMOKING", ns.x, ns.y - 5 * k);
        c.fillStyle = C.sepiaL; c.font = Math.round(8 * k) + "px " + DECO; c.fillText("NITRATE FILM", ns.x, ns.y + 6 * k);
      }
      drawProjector(c, S);
      drawRack(c, S);
      drawMeterCase(c, S);
      drawTurntable(c, S);
    };
  }
  /* the projector in profile: lamp house, mechanism, lens toward the port, the reel arms and the pedestal */
  function drawProjector(c, S) {
    var k = S.k, P = S.pr, g, i;
    var hx = P.x, hy = P.headY, top = hy - P.hh * 0.5, bot = hy + P.hh * 0.5;
    /* the pedestal */
    g = c.createLinearGradient(hx - P.hw, 0, hx + P.hw, 0);
    g.addColorStop(0, "#1e1a16"); g.addColorStop(0.5, "#4a4238"); g.addColorStop(1, "#1a1612");
    c.fillStyle = g; c.beginPath(); c.moveTo(hx - P.hw * 0.4, bot); c.lineTo(hx + P.hw * 0.4, bot); c.lineTo(hx + P.hw * 0.75, S.floorY); c.lineTo(hx - P.hw * 0.75, S.floorY); c.closePath(); c.fill();
    c.fillStyle = "#14100c"; c.fillRect(hx - P.hw * 0.95, S.floorY - 6 * k, P.hw * 1.9, 8 * k);
    c.fillStyle = "rgba(212,168,74,0.6)"; c.fillRect(hx - P.hw * 0.95, S.floorY - 6 * k, P.hw * 1.9, 1.5 * k);
    /* the reel arms */
    c.strokeStyle = "#2a2520"; c.lineWidth = 7 * k; c.lineCap = "round";
    c.beginPath(); c.moveTo(hx, top); c.lineTo(hx, P.feedY); c.moveTo(hx, bot); c.lineTo(hx, P.takeY); c.stroke();
    c.strokeStyle = "rgba(200,190,170,0.35)"; c.lineWidth = 1.5 * k;
    c.beginPath(); c.moveTo(hx - 2 * k, top); c.lineTo(hx - 2 * k, P.feedY); c.moveTo(hx - 2 * k, bot); c.lineTo(hx - 2 * k, P.takeY); c.stroke();
    /* the lamp house, with its chimney */
    var lx0 = hx - P.hw * 2.3, lx1 = hx - P.hw * 0.75;
    g = c.createLinearGradient(lx0, 0, lx1, 0);
    g.addColorStop(0, "#1a1612"); g.addColorStop(0.4, "#3e362c"); g.addColorStop(1, "#201b16");
    c.fillStyle = g; rr(c, lx0, hy - P.hh * 0.62, lx1 - lx0, P.hh * 1.12, 5 * k); c.fill();
    c.strokeStyle = "rgba(212,168,74,0.5)"; c.lineWidth = 1.2 * k; c.stroke();
    c.fillStyle = "#2a241e"; c.fillRect(lx0 + (lx1 - lx0) * 0.3, hy - P.hh * 0.62 - 26 * k, (lx1 - lx0) * 0.4, 26 * k);
    c.fillStyle = "#3e362c"; c.fillRect(lx0 + (lx1 - lx0) * 0.24, hy - P.hh * 0.62 - 30 * k, (lx1 - lx0) * 0.52, 6 * k);
    S.vents = [];
    for (i = 0; i < 4; i++) { var vy = hy - P.hh * 0.38 + i * P.hh * 0.16; S.vents.push({ x: lx0 + 8 * k, y: vy, w: lx1 - lx0 - 16 * k, h: 3.5 * k }); c.fillStyle = "#0a0806"; c.fillRect(lx0 + 8 * k, vy, lx1 - lx0 - 16 * k, 3.5 * k); }
    /* the mechanism */
    g = c.createLinearGradient(hx - P.hw, 0, hx + P.hw, 0);
    g.addColorStop(0, "#14110e"); g.addColorStop(0.45, "#3a342c"); g.addColorStop(1, "#16120e");
    c.fillStyle = g; rr(c, hx - P.hw, top, P.hw * 2, P.hh, 6 * k); c.fill();
    c.strokeStyle = "rgba(220,210,190,0.45)"; c.lineWidth = 1.4 * k; c.stroke();
    c.strokeStyle = "rgba(212,168,74,0.55)"; c.lineWidth = 1 * k; c.strokeRect(hx - P.hw + 5 * k, top + 5 * k, P.hw * 2 - 10 * k, P.hh - 10 * k);
    c.fillStyle = "#6a6050"; c.beginPath(); c.arc(hx - P.hw * 0.35, hy + P.hh * 0.18, 7 * k, 0, TAU); c.fill();
    c.fillStyle = "#1a1612"; c.beginPath(); c.arc(hx - P.hw * 0.35, hy + P.hh * 0.18, 2.5 * k, 0, TAU); c.fill();
    /* the lens barrel, aimed out of the port at the screen */
    var a = P.lensA, ca = Math.cos(a), sa = Math.sin(a), bx = P.lensX0, by = P.lensY0, Ln = P.lensL, rad = 9 * k;
    c.save(); c.translate(bx, by); c.rotate(a);
    g = c.createLinearGradient(0, -rad, 0, rad);
    g.addColorStop(0, "#b8a888"); g.addColorStop(0.45, "#e8dcc0"); g.addColorStop(1, "#5a5040");
    c.fillStyle = g; c.fillRect(0, -rad, Ln, rad * 2);
    c.fillStyle = "#8a6420"; c.fillRect(Ln * 0.25, -rad - 1.5 * k, 4 * k, rad * 2 + 3 * k); c.fillRect(Ln * 0.7, -rad - 1.5 * k, 4 * k, rad * 2 + 3 * k);
    c.fillStyle = "#2a2018"; c.fillRect(Ln - 3 * k, -rad - 2 * k, 5 * k, rad * 2 + 4 * k);
    c.restore();
    void ca; void sa;
  }
  function drawRack(c, S) {
    var k = S.k, R = S.rk, g;
    var x0 = R.x - R.w / 2, x1 = R.x + R.w / 2, y0 = R.y0, y1 = R.y1;
    g = c.createLinearGradient(x0, 0, x1, 0);
    g.addColorStop(0, "#2a1a0e"); g.addColorStop(0.5, "#4e3220"); g.addColorStop(1, "#24160c");
    c.fillStyle = g; c.fillRect(x0, y0, R.w, y1 - y0);
    c.fillStyle = "#140c06"; c.fillRect(x0 + 6 * k, y0 + 6 * k, R.w - 12 * k, y1 - y0 - 12 * k);
    c.strokeStyle = C.gold; c.lineWidth = 2 * k; c.strokeRect(x0 + 1, y0 + 1, R.w - 2, y1 - y0 - 2);
    /* the crown: a stepped top with its plate */
    c.fillStyle = "#4e3220"; stepped(c, x0 - 4 * k, y0 - 14 * k, x1 + 4 * k, y0 + 2, 5 * k); c.closePath(); c.fill();
    c.strokeStyle = C.gold; c.lineWidth = 1.5 * k; stepped(c, x0 - 4 * k, y0 - 14 * k, x1 + 4 * k, y0 + 2, 5 * k); c.stroke();
    c.fillStyle = C.goldL; c.font = "bold " + Math.round(10 * k) + "px " + DECO; c.textAlign = "center"; c.textBaseline = "middle";
    c.fillText("REELS", R.x, y0 - 4 * k);
    c.fillStyle = "#140c06"; c.fillRect(x0 - 2 * k, y1, R.w + 4 * k, Math.max(0, S.floorY - y1));
  }
  function drawMeterCase(c, S) {
    var k = S.k, m = S.mt, g;
    var r = m.r + 16 * k, x0 = m.x - r, x1 = m.x + r, y0 = m.y - r, y1 = m.y + 14 * k;
    g = c.createLinearGradient(0, y0, 0, y1);
    g.addColorStop(0, "#3a2614"); g.addColorStop(1, "#1a100a");
    c.fillStyle = g; c.beginPath(); c.moveTo(x0, y1); c.lineTo(x0, m.y); c.arc(m.x, m.y, r, Math.PI, TAU); c.lineTo(x1, y1); c.closePath(); c.fill();
    c.strokeStyle = C.gold; c.lineWidth = 3 * k; c.stroke();
    c.strokeStyle = "rgba(242,212,136,0.45)"; c.lineWidth = 1 * k; c.beginPath(); c.moveTo(x0 + 6 * k, y1 - 4 * k); c.lineTo(x0 + 6 * k, m.y); c.arc(m.x, m.y, r - 6 * k, Math.PI, TAU); c.lineTo(x1 - 6 * k, y1 - 4 * k); c.stroke();
    /* the panel under the meter: the audience's patience and the changeover lamp */
    var p = S.panel;
    c.fillStyle = "#170e07"; rr(c, p.x0, p.y0, p.x1 - p.x0, p.y1 - p.y0, 6 * k); c.fill();
    c.strokeStyle = C.gold; c.lineWidth = 1.6 * k; c.stroke();
  }
  function drawTurntable(c, S) {
    var k = S.k, T = S.tt, g, i;
    var x0 = T.px0, x1 = T.px1, y0 = T.py0, y1 = T.py1;
    /* the cabinet under the plinth, with a fan grille */
    g = c.createLinearGradient(x0, 0, x1, 0);
    g.addColorStop(0, "#2a1a0e"); g.addColorStop(0.5, "#4a2e1a"); g.addColorStop(1, "#22140a");
    c.fillStyle = g; c.fillRect(x0 + 10 * k, y1, x1 - x0 - 20 * k, S.floorY - y1);
    c.strokeStyle = "rgba(212,168,74,0.5)"; c.lineWidth = 1.2 * k; c.strokeRect(x0 + 16 * k, y1 + 6 * k, x1 - x0 - 32 * k, S.floorY - y1 - 12 * k);
    var gx = (x0 + x1) / 2, gy = S.floorY - 8 * k, gr = Math.min((x1 - x0) * 0.3, S.floorY - y1 - 16 * k);
    if (gr > 12 * k) fan(c, gx, gy, gr, 9, Math.PI, TAU, "rgba(212,168,74,0.35)", "rgba(20,12,6,0.6)");
    /* the plinth */
    g = c.createLinearGradient(0, y0, 0, y1);
    g.addColorStop(0, "#5a3820"); g.addColorStop(1, "#2e1c0e");
    c.fillStyle = g; rr(c, x0, y0, x1 - x0, y1 - y0, 10 * k); c.fill();
    c.strokeStyle = C.gold; c.lineWidth = 2.4 * k; c.stroke();
    c.strokeStyle = "rgba(242,212,136,0.4)"; c.lineWidth = 1 * k; rr(c, x0 + 6 * k, y0 + 6 * k, x1 - x0 - 12 * k, y1 - y0 - 12 * k, 7 * k); c.stroke();
    /* the platter's well and felt */
    c.fillStyle = "#120a05"; c.beginPath(); c.arc(T.x, T.y, T.R * 1.06, 0, TAU); c.fill();
    c.strokeStyle = "#b8a070"; c.lineWidth = 2 * k; c.beginPath(); c.arc(T.x, T.y, T.R * 1.03, 0, TAU); c.stroke();
    /* the tonearm's pillar */
    g = c.createRadialGradient(T.pvX - 4 * k, T.pvY - 4 * k, 2, T.pvX, T.pvY, 16 * k);
    g.addColorStop(0, "#f2d488"); g.addColorStop(1, "#6a4a18");
    c.fillStyle = g; c.beginPath(); c.arc(T.pvX, T.pvY, 15 * k, 0, TAU); c.fill();
    c.strokeStyle = "#2a1a08"; c.lineWidth = 1.5 * k; c.stroke();
    /* the speed plates: SLOWER and FASTER */
    [T.slow, T.fast].forEach(function (b) {
      c.fillStyle = "#1a100a"; rr(c, b.x - b.w / 2, b.y - b.h / 2, b.w, b.h, 5 * k); c.fill();
      c.strokeStyle = C.gold; c.lineWidth = 1.4 * k; c.stroke();
    });
    for (i = 0; i < 4; i++) { c.fillStyle = "#c8a050"; c.beginPath(); c.arc(i < 2 ? x0 + 8 * k : x1 - 8 * k, i % 2 ? y1 - 8 * k : y0 + 8 * k, 2 * k, 0, TAU); c.fill(); }
  }
  /* the convex hull of a few points (the projector's beam) */
  function hull(pts) {
    pts = pts.slice().sort(function (a, b) { return a.x - b.x || a.y - b.y; });
    function cross(o, a, b) { return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x); }
    var lo = [], up = [], i;
    for (i = 0; i < pts.length; i++) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], pts[i]) <= 0) lo.pop(); lo.push(pts[i]); }
    for (i = pts.length - 1; i >= 0; i--) { while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], pts[i]) <= 0) up.pop(); up.push(pts[i]); }
    up.pop(); lo.pop();
    return lo.concat(up);
  }
  function blip(f, f2, dur, type, vol, delay) { try { var R = window.SolRealms; if (R && R.blip) R.blip(f, f2, dur, type, vol, delay); } catch (e) {} }
  function hiss(dur, f, vol, delay) { try { var R = window.SolRealms; if (R && R.hiss) R.hiss(dur, f, vol, delay); } catch (e) {} }

  M.extend("sync", {
    name: "Keep It in Sync", kind: "sound-sync level", level: "sound-sync level", act: "CUE",
    how: "October 1927, the night the talkies arrive: you run the projection booth for The Jazz Singer. The picture comes off the film in the projector and the sound off a separate Vitaphone record on the turntable beside it, and the two drift apart. Keep the lip-sync meter's needle in the green by nudging the turntable slower or faster. When the tonearm shakes, press CUE to catch the needle before it skips. To answer, pick the reel with the right letter in the rack, then press CUE on the big cue dot in the corner of the picture (a small dot warns first). The changeover only works while the meter is in the green.",
    rules: "A wrong reel costs a life. So does a needle that skips, or the audience's patience running out: it drains while the meter is out of the green and with every cue pressed when there is no dot, and comes back while you stay in sync.",
    keys: "◀ ▶ or A / D nudge the record slower or faster (or hold the mouse on either half of the record) · ▲ ▼ or W / S pick a reel (or click it) · Space, the CUE button or a click anywhere else: change over on the big dot, or catch the needle.",
    tip: "KEEP IT IN SYNC — keep the meter in the green with ◀ ▶, pick the right reel with ▲ ▼, and press CUE on the big cue dot. Catch the needle when the arm shakes!",
    hint1: "Pick the reel with the right letter (▲ ▼ or click it), then press CUE on the big cue dot while the meter is in the green. The passage stays in the side panel.",
    hint2: "This question has two right letters. Change over to both reels that carry them, one cue at a time.",
    news: ["",
      "Warped discs: the sound now wavers back and forth on its own. Watch the meter swing and lead it back.",
      "Motor surges: sparks fly from the turntable motor and an arrow shows which way, then the record lurches. Push back.",
      "Bad splices: a white splice runs down the film to the gate, and the picture jumps ahead. The sound falls late: push ▶.",
      "Scratches on the film flash in the corner like cue dots. Cue only on the round dot.",
      "Double skips: a needle you catch can start shaking again right away.",
      "The meter's lamp flickers out now and then. Judge the sync by the singer's mouth and the notes from the speakers, and by the crowd.",
      "The two-dot changeover: press CUE on the first, small dot to start the motor, then again on the big dot to change over.",
      "A tough crowd: they boo as soon as the meter leaves the green, not just in the red.",
      "Opening night: the record wanders faster, the needle skips sooner and the cue dots flash for a moment, on top of everything else."],
    params: syncParams
  }, {
    syncParams: function (n) { return syncParams(n); },

    setup_sync: function () {
      ensureSyncArt(this);
      var P = syncParams(this.night), self = this, i;
      var S = this.sy = { P: P, t: 0, d: 0, dShow: 0, dv: 0, dvT: 0, driftT: 1.5, nv: 0, warpPh: rnd(0, TAU), rate: 0,
        pat: 1, zone: 0, slots: [], sel: 0, ayPrev: 0, ayRep: 0, actPrev: true, pressLatch: false, ptrLatch: null, ptrMode: null, btnDown: false, lastFrame: -9, cdMs: 0,
        skip: { phase: "idle", t: 0, next: 1000 * rnd(P.skipMin, P.skipMin + P.skipSpan) * 0.7, dir: 1, dbl: false },
        cue: { phase: "reel", t: 0, len: 4200, motorOn: false },
        surge: { phase: "idle", t: 0, next: P.surgeRate ? rnd(0.5, 1) * 1000 / P.surgeRate : 0, dir: 1 },
        splice: { phase: "idle", t: 0, next: P.spliceRate ? rnd(0.5, 1) * 1000 / P.spliceRate : 0 },
        dark: { phase: "idle", t: 0, next: P.darkRate ? rnd(0.6, 1.2) * 1000 / P.darkRate : 0 },
        scratchMs: 0, scratchNext: P.scratchRate ? rnd(0.5, 1) * 1000 / P.scratchRate : 0, scratchY: 0.5,
        flashMs: 0, booMs: 0, booNext: 0, cheerMs: 0, card: null, fly: null, feedL: "", feed: 1, filmOff: 0, discA: 0, reelA: 0,
        lastSB: null, notes: [], bubbles: [], motes: [], heads: [], sparks: [], told: {}, hitQ: 0, catches: 0, skips: 0, booed: 0, falseN: 0, outN: 0,
        hallKey: null, ducked: false };
      this.cameras.main.setBackgroundColor("#0c0704");
      this.syncLayout();
      S.hall = this.add.image(0, 0, S.hallKey).setOrigin(0, 0).setDepth(0);
      S.beamG = this.add.graphics().setDepth(1);
      S.pic = this.add.image(0, 0, "md-sync-pic-0").setOrigin(0, 0).setDepth(2);
      S.grain = this.add.image(0, 0, "md-sync-grain-0").setOrigin(0, 0).setDepth(2.2).setAlpha(0.5);
      S.scrG = this.add.graphics().setDepth(2.5);
      S.glassG = this.add.graphics().setDepth(4.8);
      S.mechG = this.add.graphics().setDepth(6);
      S.feedR = this.add.image(0, 0, "md-sync-reel").setDepth(7);
      S.takeR = this.add.image(0, 0, "md-sync-reel").setDepth(7);
      S.disc = this.add.image(0, 0, "md-sync-disc").setDepth(7);
      S.rackG = this.add.graphics().setDepth(6.5);
      S.armG = this.add.graphics().setDepth(9);
      S.hand = this.add.image(0, 0, "md-sync-hand").setDepth(9.5).setVisible(false);
      S.uiG = this.add.graphics().setDepth(11);
      S.flyImg = this.add.image(0, 0, "md-sync-can").setDepth(14).setVisible(false);
      var txt = function (str, size, color, o) {
        var st = { fontFamily: (o && o.serif) ? SERIF : DECO, fontSize: size, color: color, fontStyle: "bold" };
        if (o && o.stroke) { st.stroke = o.stroke; st.strokeThickness = o.thick || 4; }
        if (o && o.ls) st.letterSpacing = o.ls;
        if (o && o.align) st.align = o.align;
        return self.add.text(0, 0, str, st).setOrigin(0.5).setDepth(o && o.depth || 12);
      };
      S.txCard = txt("", 20, C.cream, { serif: true, align: "center", depth: 3 });
      S.txCardSub = txt("", 12, C.sepiaL, { serif: true, align: "center", depth: 3 });
      S.txMeter = txt("LIP-SYNC", 13, C.goldL, { ls: 3 });
      S.txLate = txt("SOUND\nLATE", 9, "#5a3a14", { align: "center" });
      S.txEarly = txt("SOUND\nEARLY", 9, "#5a3a14", { align: "center" });
      S.txSync = txt("IN SYNC", 10, "#2e4a1a");
      S.txLamp = txt("LAMP OUT", 13, C.amber, { stroke: C.ink, thick: 4 }).setVisible(false);
      S.txAud = txt("THE AUDIENCE", 10, C.sepiaL, { ls: 2 }).setOrigin(0, 0.5);
      S.txCue = txt("", 12, C.cream, { align: "center" });
      S.txSlow = txt("◀ SLOWER", 11, C.goldL);
      S.txFast = txt("FASTER ▶", 11, C.goldL);
      S.txFeed = txt("", 14, C.ink, { serif: true, depth: 8 });
      S.txDisc = txt("", 15, "#3a2608", { serif: true, depth: 8 });
      S.txArm = txt("CATCH IT!", 14, "#ffd0b0", { stroke: C.ink, thick: 5, depth: 13 }).setVisible(false);
      S.txSurge = txt("", 13, C.amber, { stroke: C.ink, thick: 4, depth: 13 }).setVisible(false);
      S.txFly = txt("", 16, C.ink, { serif: true, depth: 15 }).setVisible(false);
      for (i = 0; i < 26; i++) S.motes.push({ u: Math.random(), v: rnd(-0.45, 0.45), sp: rnd(0.02, 0.07), a: rnd(0.15, 0.4), r: rnd(0.6, 1.5) });
      this.syncBuildHeads();
      this.syncPlaceStatic();
      S.card = { text: "THE JAZZ SINGER", sub: "1927 · WITH SYNCHRONIZED SOUND", ms: 2600, kind: "intro" };
      this.makeSol(S.tt.x, S.tt.y, "down").setVisible(false);   /* the projectionist runs the booth; the sprite stays for coin pop-ups */
      /* the on-screen CUE button is held, not tapped, by some fingers: track it directly */
      /* presses are latched as they happen, so a quick tap between two slow frames still counts */
      var act = document.getElementById("btn-action");
      var open = function () { return !self.sy || self.readOpen || self.ended || Date.now() < (self.tutLockUntil || 0); };
      var dn = function () { if (open()) return; self.sy.btnDown = true; self.sy.pressLatch = true; }, up = function () { if (self.sy) self.sy.btnDown = false; };
      var onKey = function (e) { if (open() || (e && e.repeat)) return; self.sy.pressLatch = true; };
      var onPtr = function (pt) { if (open()) return; self.sy.ptrLatch = { x: pt.x, y: pt.y }; };
      if (act) { act.addEventListener("pointerdown", dn); ["pointerup", "pointerleave", "pointercancel"].forEach(function (e) { act.addEventListener(e, up); }); }
      this.input.keyboard.on("keydown-SPACE", onKey);
      this.input.on("pointerdown", onPtr);
      var off = function () {
        try { self.input.keyboard.off("keydown-SPACE", onKey); self.input.off("pointerdown", onPtr); } catch (e) {}
        if (act) { act.removeEventListener("pointerdown", dn); ["pointerup", "pointerleave", "pointercancel"].forEach(function (e) { act.removeEventListener(e, up); }); }
        if (self.sy && self.sy.ducked && window.SolMusic && SolMusic.duck) { self.sy.ducked = false; try { SolMusic.duck(false); } catch (e) {} }
      };
      this.events.once("shutdown", off);
      this.events.once("destroy", off);
    },

    /* everything that depends on the canvas size */
    syncLayout: function () {
      var S = this.sy, W = this.W, H = this.H, k;
      k = S.k = clamp(Math.min(W / 1000, H / 700), 0.5, 1.3);
      S.hy = Math.round(H * 0.43);
      S.by0 = S.hy + Math.round(14 * k);
      S.floorY = Math.round(H - Math.max(10, 0.035 * H));
      S.railY = Math.round(S.floorY - (S.floorY - S.by0) * 0.16);
      var bh = S.bh = S.floorY - S.by0;
      /* the screen and its arch */
      var top = Math.max(S.hy * 0.14, 46 * k), sh = Math.round(S.hy * 0.6), sw = Math.round(Math.min(sh * 1.33, W * 0.46));
      sh = Math.round(sw / 1.33);
      S.scr = { x: Math.round(W / 2 - sw / 2), y: Math.round(top), w: sw, h: sh };
      S.arch = { x0: S.scr.x - Math.max(54 * k, W * 0.085), x1: S.scr.x + sw + Math.max(54 * k, W * 0.085), y0: Math.max(4 * k, S.scr.y - 34 * k), y1: Math.round(S.scr.y + sh + 18 * k) };
      /* the projector, left */
      var pad = this.syncPadBox();
      var P = S.pr = {};
      P.rr = Math.round(Math.min(0.16 * bh, 0.062 * W, 80 * k));
      P.x = Math.round(Math.max(W * 0.15, P.rr + 0.075 * W + 14 * k));
      P.hw = Math.round(0.034 * W); P.hh = Math.round(0.2 * bh);
      P.feedY = S.by0 + P.rr + 8 * k;
      P.headY = Math.round(P.feedY + P.rr + P.hh * 0.5 + 6 * k);
      P.takeY = Math.round(Math.min(S.floorY - P.rr * 0.7, P.headY + P.hh * 0.5 + P.rr + 4 * k));
      P.gx = P.x + P.hw * 0.55;
      /* the turntable, right */
      var T = S.tt = {};
      T.R = Math.round(Math.min(0.33 * bh, 0.11 * W));
      T.x = Math.round(W * 0.79); T.y = Math.round(S.by0 + 0.07 * bh + T.R * 1.05);
      if (T.x + T.R * 1.5 > W - 8) T.x = Math.round(W - 8 - T.R * 1.5);
      T.pvX = T.x + T.R * 1.2; T.pvY = T.y - T.R * 0.8;
      T.D = Math.sqrt(Math.pow(T.pvX - T.x, 2) + Math.pow(T.pvY - T.y, 2)); T.psi = Math.atan2(T.pvY - T.y, T.pvX - T.x); T.armL = T.R * 1.16;
      T.px0 = T.x - T.R - 0.03 * W; T.px1 = Math.min(W - 4, T.pvX + 0.03 * W); T.py0 = T.y - T.R - 0.045 * bh; T.py1 = T.y + T.R + 0.05 * bh + 22 * k;
      T.slow = { x: T.x - T.R * 0.55, y: T.py1 - 15 * k, w: 78 * k, h: 20 * k }; T.fast = { x: T.x + T.R * 0.55, y: T.py1 - 15 * k, w: 78 * k, h: 20 * k };
      /* the lip-sync meter and its panel, and the rack */
      var mid0 = P.x + P.hw + 0.02 * W, mid1 = T.px0 - 0.012 * W;
      var R = S.rk = {};
      R.w = Math.round(Math.max(64 * k, Math.min(0.09 * W, 92 * k)));
      R.x = Math.round(mid1 - R.w / 2 - 0.012 * W);
      R.y0 = Math.round(S.by0 + 0.08 * bh + 14 * k); R.y1 = Math.round(S.floorY - 0.03 * bh);
      var m = S.mt = {};
      var mx0 = mid0, mx1 = R.x - R.w / 2 - 0.015 * W;
      m.x = Math.round((mx0 + mx1) / 2 + 0.01 * W);
      m.r = Math.round(Math.max(40 * k, Math.min((mx1 - mx0) / 2 - 18 * k, 0.24 * bh, 112 * k)));
      m.y = Math.round(S.by0 + m.r + 34 * k);
      var pw = Math.max(m.r * 2 + 30 * k, 170 * k);
      S.panel = { x0: m.x - pw / 2, x1: m.x + pw / 2, y0: m.y + 22 * k, y1: Math.min(R.y1, m.y + 22 * k + Math.max(74 * k, 0.2 * bh)) };
      S.patBar = { x0: S.panel.x0 + 12 * k, x1: S.panel.x1 - 12 * k, y: S.panel.y0 + 30 * k, h: 10 * k };
      S.lamp = { x: S.panel.x0 + 22 * k, y: S.panel.y1 - Math.max(20 * k, (S.panel.y1 - S.panel.y0 - 44 * k) / 2), r: 9 * k };
      S.sign = (S.railY - (S.panel.y1 + 4 * k) > 30 * k) ? { x: m.x, y: (S.panel.y1 + S.railY) / 2, w: 92 * k, h: 30 * k } : null;
      /* the lens: from the mechanism's front, aimed at the middle of the screen */
      var lx = P.x + P.hw, ly = P.headY - P.hh * 0.18, tx = S.scr.x + S.scr.w / 2, ty = S.scr.y + S.scr.h / 2;
      P.lensA = Math.atan2(ty - ly, tx - lx); P.lensL = 0.05 * W; P.lensX0 = lx - 4 * k; P.lensY0 = ly;
      P.lensX = lx + Math.cos(P.lensA) * P.lensL; P.lensY = ly + Math.sin(P.lensA) * P.lensL;
      void pad;
      var key = "md-sync-hall-" + W + "x" + H;
      if (S.hallKey !== key) {
        var old = S.hallKey;
        canvasTex(this, key, W, H, drawHall(S, W, H));
        S.hallKey = key;
        if (S.hall) S.hall.setTexture(key);
        if (old && old !== key) { try { this.textures.remove(old); } catch (e) {} }
      }
    },
    /* the on-screen pad's box in canvas pixels (null when it is not shown) */
    syncPadBox: function () {
      try {
        var pad = document.querySelector("#controls .dpad") || document.querySelector(".dpad"), cv = this.game && this.game.canvas;
        if (!pad || !cv) return null;
        var a = pad.getBoundingClientRect(), c = cv.getBoundingClientRect();
        if (!a.width || !a.height || !c.width || !c.height) return null;
        var fx = this.W / c.width, fy = this.H / c.height;
        return { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
      } catch (e) { return null; }
    },
    /* the audience: three rows of heads, smaller toward the screen */
    syncBuildHeads: function () {
      var S = this.sy, self = this;
      S.heads.forEach(function (h) { try { h.spr.destroy(); } catch (e) {} });
      S.heads = [];
      var W = this.W, k = S.k, rows = [[0.62, 0.0], [0.8, 0.5], [1.0, 1.0]];
      rows.forEach(function (rw, ri) {
        var sc = rw[0] * k, step = 40 * sc, y = S.arch.y1 + (S.hy - S.arch.y1) * (0.42 + ri * 0.3) + 6 * k;
        for (var x = -step * 0.5 + (ri % 2 ? step * 0.5 : 0) + rnd(-4, 4); x < W + step; x += step * rnd(0.92, 1.12)) {
          var spr = self.add.image(x, y, "md-sync-head-" + Math.floor(Math.random() * 7)).setOrigin(0.5, 0.62).setScale(sc * rnd(0.92, 1.06)).setDepth(4 + ri * 0.1);
          if (Math.random() < 0.5) spr.setFlipX(true);
          S.heads.push({ spr: spr, x: x, y: y, row: ri, ph: rnd(0, TAU), jit: 0, sc: spr.scaleX });
        }
      });
    },
    syncPlaceStatic: function () {
      var S = this.sy, k = S.k, P = S.pr, T = S.tt, m = S.mt;
      S.hall.setPosition(0, 0);
      S.pic.setPosition(S.scr.x, S.scr.y).setDisplaySize(S.scr.w, S.scr.h);
      S.grain.setPosition(S.scr.x, S.scr.y).setDisplaySize(S.scr.w, S.scr.h);
      S.feedR.setPosition(P.x, P.feedY).setScale(P.rr * 2 / 128);
      S.takeR.setPosition(P.x, P.takeY).setScale(P.rr * 2 / 128);
      S.disc.setPosition(T.x, T.y).setScale(T.R * 2 / 256);
      S.txFeed.setPosition(P.x, P.feedY).setFontSize(Math.round(14 * k));
      S.txDisc.setFontSize(Math.round(15 * k));
      S.txMeter.setPosition(m.x, m.y - m.r - 6 * k).setFontSize(Math.round(12 * k));
      S.txLate.setPosition(m.x - m.r * 0.5, m.y - m.r * 0.16).setFontSize(Math.round(9 * k));
      S.txEarly.setPosition(m.x + m.r * 0.5, m.y - m.r * 0.16).setFontSize(Math.round(9 * k));
      S.txSync.setPosition(m.x, m.y - m.r * 0.44).setFontSize(Math.round(Math.max(8, 9 * k)));
      S.txLamp.setPosition(m.x, m.y - m.r * 0.32).setFontSize(Math.round(13 * k));
      S.txAud.setPosition(S.patBar.x0, S.panel.y0 + 13 * k).setFontSize(Math.round(10 * k));
      S.txCue.setPosition((S.lamp.x + S.lamp.r + S.panel.x1) / 2 + 2 * k, S.lamp.y).setFontSize(Math.round(12 * k)).setWordWrapWidth(S.panel.x1 - S.lamp.x - S.lamp.r - 12 * k);
      S.txSlow.setPosition(T.slow.x, T.slow.y).setFontSize(Math.round(11 * k));
      S.txFast.setPosition(T.fast.x, T.fast.y).setFontSize(Math.round(11 * k));
      S.txArm.setFontSize(Math.round(14 * k)); S.txSurge.setFontSize(Math.round(13 * k));
      S.txCard.setPosition(S.scr.x + S.scr.w / 2, S.scr.y + S.scr.h * 0.44).setFontSize(Math.round(Math.max(13, S.scr.h * 0.11))).setWordWrapWidth(S.scr.w * 0.86);
      S.txCardSub.setPosition(S.scr.x + S.scr.w / 2, S.scr.y + S.scr.h * 0.66).setFontSize(Math.round(Math.max(9, S.scr.h * 0.055))).setWordWrapWidth(S.scr.w * 0.86);
      S.hand.setScale(k);
      /* the window glass: two faint reflections across the auditorium */
      var g = S.glassG; g.clear();
      g.fillStyle(0xfff4dc, 0.035);
      g.fillPoints([{ x: this.W * 0.06, y: S.hy }, { x: this.W * 0.16, y: S.hy }, { x: this.W * 0.3, y: 0 }, { x: this.W * 0.2, y: 0 }], true);
      g.fillStyle(0xfff4dc, 0.025);
      g.fillPoints([{ x: this.W * 0.66, y: S.hy }, { x: this.W * 0.7, y: S.hy }, { x: this.W * 0.84, y: 0 }, { x: this.W * 0.8, y: 0 }], true);
      this.syncPlaceSlots();
    },
    resize_sync: function () {
      var S = this.sy;
      this.syncLayout();
      this.syncBuildHeads();
      this.syncPlaceStatic();
      if (this.player) this.player.setPosition(S.tt.x, S.tt.y);
    },

    /* ── the reels in the rack: one per answer letter ── */
    answers_sync: function () {
      var S = this.sy, self = this;
      S.slots.forEach(function (sl) { try { sl.spr.destroy(); sl.txt.destroy(); } catch (e) {} });
      S.slots = [];
      this.choiceLetters().forEach(function (Lt) {
        var sl = { letter: Lt, state: self.extracted.indexOf(Lt) !== -1 ? "found" : "live", x: 0, y: 0, lift: 0 };
        sl.spr = self.add.image(0, 0, "md-sync-can").setDepth(7);
        sl.txt = self.add.text(0, 0, Lt, { fontFamily: SERIF, fontSize: 22, color: C.ink, fontStyle: "bold" }).setOrigin(0.5).setDepth(8);
        S.slots.push(sl);
      });
      S.sel = 0;
      for (var i = 0; i < S.slots.length; i++) if (S.slots[i].state === "live") { S.sel = i; break; }
      this.syncPlaceSlots();
      S.slots.forEach(function (sl) { self.syncPaintSlot(sl); });
      /* a fresh reel: the first cue comes soon, the needle waits a moment, the crowd settles */
      var c = S.cue; c.phase = "reel"; c.t = 0; c.len = Math.max(2600, S.P.reelMs * 0.6); c.motorOn = false;
      S.skip.phase = "idle"; S.skip.dbl = false; S.skip.next = Math.max(S.skip.next, 3500);
      S.pat = Math.max(S.pat, 0.85); S.hitQ = 0; S.feedL = ""; S.feed = 1; S.fly = null;
      if (S.card && S.card.kind !== "intro") S.card = null;
    },
    syncPlaceSlots: function () {
      var S = this.sy, R = S.rk, k = S.k, n = Math.max(1, S.slots.length), self = this;
      var span = R.y1 - R.y0 - 16 * k, slotH = span / Math.max(4, n);
      var canR = Math.min(slotH * 0.4, R.w * 0.36, 34 * k);
      R.slotH = slotH; R.canR = canR;
      var used = slotH * n, top = R.y0 + 8 * k + (span - used) / 2;
      S.slots.forEach(function (sl, i) {
        sl.x = R.x - canR * 0.32; sl.y = top + slotH * (i + 0.5);
        sl.sc = canR / 28;
        sl.spr.setScale(sl.sc);
        sl.txt.setFontSize(Math.round(Math.max(13, canR * 0.8)));
        self.syncSlotPos(sl);
      });
    },
    syncSlotPos: function (sl) {
      var lift = sl.lift || 0;
      sl.spr.setPosition(sl.x + lift, sl.y);
      sl.txt.setPosition(sl.x + lift - 18 * sl.sc, sl.y + 1);
    },
    syncPaintSlot: function (sl) {
      var dead = sl.state === "dead", found = sl.state === "found";
      sl.spr.setTint(dead ? 0x6a6058 : found ? 0xbff0c8 : 0xffffff);
      sl.txt.setText(dead ? "✕" : found ? "✓" : sl.letter).setColor(dead ? "#5a1408" : found ? "#1f6a3a" : C.ink);
    },
    syncSelect: function (i, exact) {
      var S = this.sy, n = S.slots.length;
      if (!n) return;
      var want = clamp(i, 0, n - 1), dir = i < S.sel ? -1 : 1, j;
      if (!exact && S.slots[want].state !== "live") {
        for (j = want; j >= 0 && j < n; j += dir) if (S.slots[j].state === "live") { want = j; break; }
        if (S.slots[want].state !== "live") want = S.sel;
      }
      if (want !== S.sel) blip(520 + want * 60, 0, 0.05, "triangle", 0.02);
      S.sel = want;
    },

    /* ── every frame ── */
    tick_sync: function (s, inp, ms) {
      var S = this.sy, P = S.P, frame = this.game && this.game.loop ? this.game.loop.frame : 0, p = this.ptr;
      if (frame !== S.lastFrame + 1) { S.actPrev = true; S.pressLatch = false; S.ptrLatch = null; S.ayPrev = inp.ay; }   /* the reading pop-up was up: a key or a press still held is not a new one */
      S.lastFrame = frame;
      S.t += s;
      if (S.cdMs > 0) S.cdMs -= ms;
      if (!S.told.start) { S.told.start = true; this.toast("Keep the lip-sync needle in the green: ◀ slows the record, ▶ speeds it up.", 5200); }
      else if (!S.told.pick && S.t > 6) { S.told.pick = true; this.toast("Pick the reel with the right letter in the rack: ▲ ▼, or click it.", 4200); }

      /* the mouse: a press on a reel picks it, on the record (or a speed plate) nudges, anywhere else is CUE */
      var ptrAct = false, ptrAx = 0, pl = S.ptrLatch;
      S.ptrLatch = null;
      if (pl) {
        var hit = this.syncHit(pl.x, pl.y);
        S.ptrMode = hit.kind;
        if (hit.kind === "slot") this.syncSelect(hit.i, true);
        else if (hit.kind === "act") ptrAct = true;
      } else if (!p.down) S.ptrMode = null;
      if (S.ptrMode === "platter" && (p.down || pl)) ptrAx = (p.down ? p.x : pl.x) < S.tt.x ? -1 : 1;

      /* the keys and the pad: ▲ ▼ step through the rack (held, they repeat) */
      var ay = inp.ay;
      if (ay) {
        if (S.ayPrev !== ay) { this.syncSelect(S.sel + ay); S.ayRep = 380; }
        else { S.ayRep -= ms; if (S.ayRep <= 0) { this.syncSelect(S.sel + ay); S.ayRep = 200; } }
      }
      S.ayPrev = ay;
      var locked = Date.now() < (this.tutLockUntil || 0);
      var keyAct = !locked && (this.keys.SPACE.isDown || S.btnDown || (inp.fire && !p.down));
      var press = (!locked && S.pressLatch) || (keyAct && !S.actPrev) || ptrAct;
      S.pressLatch = false;
      S.actPrev = keyAct;
      S.ax = inp.ax || ptrAx;

      var live = !this._between;
      if (live) {
        this.syncDrift(s, S.ax);
        this.syncCueTick(ms);
        this.syncSkipTick(ms);
        this.syncSurgeTick(ms);
        this.syncSpliceTick(ms);
        this.syncDarkTick(ms);
        this.syncScratchTick(ms);
        if (press) this.syncPress();
        if (this._finishing) return;
        this.syncPatience(s);
        if (this._finishing) return;
      }
      this.syncMusic();
      this.syncDuck();
      this.syncDraw(s, ms);
    },

    /* what the pointer is over */
    syncHit: function (x, y) {
      var S = this.sy, T = S.tt, R = S.rk, i;
      for (i = 0; i < S.slots.length; i++) {
        var sl = S.slots[i];
        if (Math.abs(x - R.x) < R.w * 0.6 && Math.abs(y - sl.y) < R.slotH * 0.5) return { kind: "slot", i: i };
      }
      var dx = x - T.x, dy = y - T.y;
      if (dx * dx + dy * dy < T.R * T.R * 1.1) return { kind: "platter" };
      if ([T.slow, T.fast].some(function (b) { return Math.abs(x - b.x) < b.w / 2 && Math.abs(y - b.y) < b.h / 2 + 2; })) return { kind: "platter" };
      return { kind: "act" };
    },

    /* the record wanders; the player's nudges pull it back */
    syncDrift: function (s, ax) {
      var S = this.sy, P = S.P;
      S.driftT -= s;
      if (S.driftT <= 0) {
        S.driftT = P.driftEvery * rnd(0.7, 1.3);
        var sg = Math.random() < 0.5 ? -1 : 1;
        if (Math.abs(S.dvT) > 0 && Math.random() < 0.35) sg = -Math.sign(S.dvT);
        S.dvT = sg * P.drift * rnd(0.55, 1);
      }
      S.dv += clamp(S.dvT - S.dv, -P.drift * 1.2 * s, P.drift * 1.2 * s);
      S.warpPh += TAU * P.warpHz * s;
      var warp = P.warp ? P.warp * Math.sin(S.warpPh) : 0;
      var surge = S.surge.phase === "kick" ? S.surge.dir * P.surge : 0;
      S.nv += (ax * P.nudge - S.nv) * Math.min(1, s / P.lag);
      S.rate = S.dv + warp + surge + S.nv;
      S.d = clamp(S.d + S.rate * s, -MAXF, MAXF);
    },
    syncInSync: function () { return Math.abs(this.sy.d) <= this.sy.P.green; },

    /* the audience: patience drains out of sync and comes back in sync; at nothing they boo (a life) */
    syncPatience: function (s) {
      var S = this.sy, P = S.P, ad = Math.abs(S.d);
      S.zone = ad <= P.green ? 0 : ad <= P.green + P.amber ? 1 : 2;
      if (S.zone === 0) S.pat = Math.min(1, S.pat + P.regain * s);
      else S.pat -= (S.zone === 1 ? P.drainA : P.drainR) * s;
      if (S.zone === 2 && !S.told.red) { S.told.red = true; this.toast("Out of sync! The audience is booing. Bring the meter back to the green: " + (S.d < 0 ? "▶ speeds the record up." : "◀ slows the record down."), 3800); }
      if (S.pat <= 0) {
        S.pat = 0;
        if (this.loseLife("hit", "THE AUDIENCE BOOED")) {
          S.pat = P.refill; S.hitQ += 1; S.booed += 1; S.booMs = 2600;
          this.syncBoo(true);
          if (!S.told.booed) { S.told.booed = true; this.toast("The audience booed! Keep the meter in the green and their patience comes back.", 3800); }
        }
      }
    },

    /* ── CUE: catch the needle, or change over on the cue dot ── */
    syncPress: function () {
      var S = this.sy, P = S.P, c = S.cue;
      if (this._between || this._finishing || this.ended) return "ignore";
      if (S.skip.phase === "warn") return this.syncCatch();
      if (S.cdMs > 0) return "wait";
      if (c.phase === "window") return this.syncChangeover();
      if (c.phase === "motor") {
        if (P.twoStep) {
          if (!c.motorOn) { c.motorOn = true; blip(90, 140, 0.4, "sawtooth", 0.03); hiss(0.3, 600, 0.03); this.toast("Motor running! Now press CUE again on the big dot.", 2600); }
          return "motor";
        }
        if (!S.told.early) { S.told.early = true; this.toast("That's the small warning dot. Wait for the big cue dot, then press CUE.", 3000); }
        return "early";
      }
      return this.syncFalseCue(S.scratchMs > 0 ? "scratch" : "none");
    },
    syncFalseCue: function (why) {
      var S = this.sy, P = S.P;
      S.pat -= P.falseCost; S.cdMs = 450; S.falseN += 1;
      blip(220, 160, 0.14, "square", 0.02);
      if (why === "scratch") this.toast("That was a scratch on the film, not a cue dot! Cue only on the round dot.", 3200);
      else if (why === "nomotor") this.toast("Start the motor first: press CUE on the small dot, then on the big one.", 3200);
      else this.toast("No cue dot yet! Wait for the dot in the corner of the picture. (A false cue tries the audience's patience.)", 3400);
      return "false";
    },
    syncCatch: function () {
      var S = this.sy, P = S.P, k = S.skip;
      k.phase = "caught"; k.t = 0; S.catches += 1;
      this.addKill(S.tt.x, S.tt.y, "Twelve needles caught");
      blip(320, 220, 0.09, "triangle", 0.05); hiss(0.05, 1200, 0.02);
      this.burst(this.syncNeedle().x, this.syncNeedle().y, 0xf2d488, 8);
      if (!S.told.caught) { S.told.caught = true; this.toast("Caught! The needle stayed in its groove.", 2200); }
      if (P.double && !k.dbl && Math.random() < P.double) { k.dbl = true; k.next = rnd(450, 800); }
      else { k.dbl = false; k.next = 1000 * rnd(P.skipMin, P.skipMin + P.skipSpan); }
      return "caught";
    },
    /* the needle may start shaking only when the cue dots are well away, so CUE never means two things */
    syncSkipClear: function () {
      var S = this.sy, c = S.cue;
      return c.phase === "reel" && c.len - S.P.motorMs - c.t > S.P.warnMs + 700 && !(S.card && S.card.bad);
    },
    syncSkipTick: function (ms) {
      var S = this.sy, P = S.P, k = S.skip;
      k.t += ms;
      if (k.phase === "idle") {
        k.next -= ms;
        if (k.next <= 0 && this.syncSkipClear()) this.syncStartSkip();
      } else if (k.phase === "warn") {
        if (Math.floor(k.t / 140) !== Math.floor((k.t - ms) / 140)) hiss(0.05, 2600 + Math.random() * 1500, 0.035);
        if (k.t >= P.warnMs) this.syncSkip();
      } else if (k.t >= 650) k.phase = "idle";
    },
    syncStartSkip: function () {
      var S = this.sy, k = S.skip;
      k.phase = "warn"; k.t = 0; k.dir = Math.random() < 0.5 ? -1 : 1;
      if (!S.told.skip) { S.told.skip = true; this.toast("The tonearm is shaking! Press Space or CUE now to catch the needle before it skips!", 3600); }
      return k;
    },
    syncSkip: function () {
      var S = this.sy, P = S.P, k = S.skip;
      k.phase = "jumped"; k.t = 0; S.skips += 1;
      S.d = clamp(S.d + k.dir * P.jump, -MAXF, MAXF);
      hiss(0.3, 3200, 0.06); blip(1100, 180, 0.25, "sawtooth", 0.03);
      var n = this.syncNeedle(); this.burst(n.x, n.y, 0xffb08a, 12);
      k.dbl = false; k.next = 1000 * rnd(P.skipMin, P.skipMin + P.skipSpan);
      if (this.loseLife("hit", "THE NEEDLE SKIPPED")) S.hitQ += 1;
      if (!S.told.skipped && !this._finishing) { S.told.skipped = true; this.toast("The needle skipped and the sound jumped! Next time press CUE while the arm shakes.", 3600); }
    },

    /* the cue dots: a reel runs, a small dot warns, the big dot is the moment to change over */
    syncCueTick: function (ms) {
      var S = this.sy, P = S.P, c = S.cue;
      c.t += ms;
      if (c.phase === "reel") {
        if (c.t >= c.len - P.motorMs && S.skip.phase !== "warn") {
          c.phase = "motor"; c.t = 0; c.motorOn = false;
          blip(880, 0, 0.06, "sine", 0.02);
          if (!S.told.motor) { S.told.motor = true; this.toast(P.twoStep ? "The first cue dot! Press CUE now to start the motor." : "A small cue dot: the reel is ending. Get ready to press CUE on the big dot!", 3000); }
        }
      } else if (c.phase === "motor") {
        if (c.t >= P.motorMs) {
          c.phase = "window"; c.t = 0;
          blip(1320, 0, 0.08, "sine", 0.025);
          if (!S.told.window) { S.told.window = true; this.toast("The big cue dot! Press Space or CUE now to change over to your reel.", 3000); }
        }
      } else if (c.phase === "window") {
        if (c.t >= P.cueMs) {
          c.phase = "reel"; c.t = 0; c.len = P.reelMs; c.motorOn = false; S.feed = 1;
          if (!S.told.missed && !S.told.changed) { S.told.missed = true; this.toast("You missed that cue. Another one comes in a few seconds.", 2600); }
        }
      }
    },
    /* open the cue window right now (the tests use this) */
    syncOpenCue: function () {
      var S = this.sy, c = S.cue;
      if (S.skip.phase === "warn") { S.skip.phase = "idle"; S.skip.next = 3000; }
      c.phase = "window"; c.t = 0; c.motorOn = true;
      return c;
    },
    syncChangeover: function () {
      var S = this.sy, P = S.P, c = S.cue;
      if (P.twoStep && !c.motorOn) return this.syncFalseCue("nomotor");
      if (!this.syncInSync()) {
        S.pat -= P.falseCost; S.cdMs = 350; S.outN += 1;
        blip(200, 150, 0.18, "square", 0.02);
        this.toast("Out of sync! The changeover only works while the meter is in the green. Fix it, quick!", 3000);
        return "sync";
      }
      var sl = S.slots[S.sel];
      if (!sl || sl.state !== "live") {
        this.toast(sl && sl.state === "dead" ? "That reel is crossed out. Pick another one with ▲ ▼." : "That reel already played. Pick the other right one.", 2600);
        return "dead";
      }
      var clean = !this.claimWrong && !S.hitQ;
      c.phase = "reel"; c.t = 0; c.len = P.reelMs; c.motorOn = false;
      S.told.changed = true;
      S.fly = { x0: sl.x, y0: sl.y, x1: S.pr.x, y1: S.pr.feedY, t: 0, letter: sl.letter };
      S.feedL = sl.letter; S.feed = 1;
      blip(180, 90, 0.12, "square", 0.04); hiss(0.08, 1400, 0.04);
      var res = this.answerPick(sl.letter, sl.x, sl.y);
      if (res === "wrong") {
        sl.state = "dead"; this.syncPaintSlot(sl);
        S.card = { text: "WRONG REEL!", sub: "The crowd boos.", ms: 1800, bad: true };
        S.booMs = 2600; this.syncBoo(true);
        this.syncSelect(S.sel + 1);
      } else if (res === "partial") {
        sl.state = "found"; this.syncPaintSlot(sl);
        S.card = { text: "RIGHT REEL!", sub: "One more to go.", ms: 1800 };
        S.cheerMs = 1800; this.syncSelect(S.sel + 1);
      } else if (res === "done") {
        sl.state = "found"; this.syncPaintSlot(sl);
        S.card = { text: "IN SYNC!", sub: "The crowd cheers the talkies.", ms: 2200 };
        if (clean && !this.ended) this.awardBonusPoints(1000, "A perfect changeover");
      }
      return res;
    },
    /* a right answer: the crowd cheers, the needle settles */
    clear_sync: function () {
      var S = this.sy;
      S.cheerMs = 2400; S.booMs = 0;
      if (S.skip.phase === "warn") S.skip.phase = "idle";
      S.skip.next = Math.max(S.skip.next, 3000);
      S.surge.phase = "idle"; S.splice.phase = "idle";
      hiss(0.6, 1700, 0.04);
    },

    /* ── what the later tiers add ── */
    syncSurgeTick: function (ms) {
      var S = this.sy, P = S.P, u = S.surge;
      if (!P.surgeRate) return;
      u.t += ms;
      if (u.phase === "idle") {
        u.next -= ms;
        if (u.next <= 0) { u.phase = "spark"; u.t = 0; u.dir = Math.random() < 0.5 ? -1 : 1; hiss(0.5, 2200, 0.03); if (!S.told.surge) { S.told.surge = true; this.toast("Sparks at the motor: a surge is coming! The arrow shows which way the needle will lurch. Push back.", 3600); } }
      } else if (u.phase === "spark") { if (u.t >= 900) { u.phase = "kick"; u.t = 0; blip(70, u.dir > 0 ? 120 : 50, 0.5, "sawtooth", 0.03); } }
      else if (u.phase === "kick") { if (u.t >= 1200) { u.phase = "idle"; u.t = 0; u.next = rnd(0.6, 1.4) * 1000 / P.surgeRate; } }
    },
    syncSpliceTick: function (ms) {
      var S = this.sy, P = S.P, q = S.splice;
      if (!P.spliceRate) return;
      q.t += ms;
      if (q.phase === "idle") { q.next -= ms; if (q.next <= 0) { q.phase = "run"; q.t = 0; if (!S.told.splice) { S.told.splice = true; this.toast("A bad splice is running down the film! When it hits the gate the picture jumps ahead and the sound falls late.", 3800); } } }
      else if (q.phase === "run" && q.t >= 1600) {
        q.phase = "idle"; q.t = 0; q.next = rnd(0.6, 1.4) * 1000 / P.spliceRate;
        S.d = clamp(S.d - P.splice, -MAXF, MAXF); S.flashMs = 160;
        hiss(0.1, 900, 0.05); blip(300, 120, 0.1, "square", 0.025);
      }
    },
    syncDarkTick: function (ms) {
      var S = this.sy, P = S.P, dk = S.dark;
      if (!P.darkRate) return;
      dk.t += ms;
      if (dk.phase === "idle") { dk.next -= ms; if (dk.next <= 0) { dk.phase = "out"; dk.t = 0; blip(140, 60, 0.15, "square", 0.015); if (!S.told.dark) { S.told.dark = true; this.toast("The meter's lamp went out! Watch the singer's mouth and the notes: do they match?", 3600); } } }
      else if (dk.t >= P.darkMs) { dk.phase = "idle"; dk.t = 0; dk.next = rnd(0.6, 1.4) * 1000 / P.darkRate; }
    },
    syncScratchTick: function (ms) {
      var S = this.sy, P = S.P;
      if (!P.scratchRate) return;
      if (S.scratchMs > 0) S.scratchMs -= ms;
      S.scratchNext -= ms;
      if (S.scratchNext <= 0) {
        S.scratchNext = rnd(0.6, 1.4) * 1000 / P.scratchRate;
        if (S.cue.phase === "reel" && S.cue.len - S.cue.t > P.motorMs + 600) { S.scratchMs = 420; S.scratchY = rnd(0.1, 0.4); }
      }
    },

    /* ── sound ── */
    syncMusic: function () {
      var S = this.sy;
      var quiet = this._between || S.skip.phase === "jumped" || (S.card && S.card.bad) || (S.card && S.card.kind === "intro");
      var sc = S.t + S.d / FPS, bi = Math.floor(sc / BEAT);
      if (S.lastSB === null) { S.lastSB = bi; return; }
      if (bi === S.lastSB) return;
      S.lastSB = bi;
      var i = ((bi % MEL.length) + MEL.length) % MEL.length, note = MEL[i];
      if (quiet) return;
      var ch = CHORDS[Math.floor(i / 4) % CHORDS.length];
      if (note != null) { blip(hz(note), hz(note) * 0.998, BEAT * 0.8, "triangle", 0.045); blip(hz(note + 12), hz(note + 12), BEAT * 0.4, "sine", 0.008); this.syncNote(); }
      if (i % 2 === 0) blip(hz(ch[0]), hz(ch[0]) * 0.99, BEAT * 0.7, "sine", 0.04);
      else { blip(hz(ch[2]), 0, 0.12, "square", 0.006); blip(hz(ch[3]), 0, 0.12, "square", 0.005); }
      if (i % 4 === 1 || i % 4 === 3) hiss(0.03, 5200, 0.012);
    },
    /* the realm's own music stays low under the record (SolMusic's duck, renewed: closing a card lifts it) */
    syncDuck: function () {
      var S = this.sy, want = !this._between, now = Date.now();
      if (!window.SolMusic || !SolMusic.duck) return;
      if (want && (!S.ducked || now - (S.duckAt || 0) > 500)) { S.ducked = true; S.duckAt = now; try { SolMusic.duck(true); } catch (e) {} }
      else if (!want && S.ducked) { S.ducked = false; try { SolMusic.duck(false); } catch (e) {} }
    },
    syncNote: function () {
      var S = this.sy, k = S.k, sc = S.scr, side = S.notes.length % 2 ? 1 : -1;
      var n = null;
      for (var i = 0; i < S.notes.length; i++) if (!S.notes[i].on) { n = S.notes[i]; break; }
      if (!n) { if (S.notes.length > 10) return; n = { spr: this.add.image(0, 0, "md-sync-note").setDepth(3.5) }; S.notes.push(n); }
      n.on = true; n.t = 0; n.x = sc.x + sc.w / 2 + side * (sc.w * 0.5 + 18 * k); n.y = sc.y + sc.h * 0.62; n.vx = side * rnd(8, 22) * k; n.vy = -rnd(26, 40) * k;
      n.spr.setVisible(true).setScale(k * 0.8).setAlpha(1);
    },
    syncBoo: function (loud) {
      var S = this.sy;
      blip(170, 130, 0.55, "sawtooth", loud ? 0.03 : 0.018); blip(140, 110, 0.6, "sawtooth", loud ? 0.025 : 0.014, 0.08);
      var n = loud ? 4 : 1, self = this;
      for (var i = 0; i < n; i++) {
        var h = S.heads[Math.floor(Math.random() * S.heads.length)];
        if (h) self.syncBubble(h.x, h.y - 26 * S.k * h.sc / S.k, Math.random() < 0.7 ? "BOO!" : "SYNC IT!", "#ffd8b0");
      }
    },
    syncBubble: function (x, y, str, col) {
      var S = this.sy, b = null, k = S.k;
      for (var i = 0; i < S.bubbles.length; i++) if (!S.bubbles[i].on) { b = S.bubbles[i]; break; }
      if (!b) { if (S.bubbles.length > 9) return; b = { txt: this.add.text(0, 0, "", { fontFamily: DECO, fontSize: 14, color: "#ffd8b0", fontStyle: "bold", stroke: C.ink, strokeThickness: 4 }).setOrigin(0.5).setDepth(5) }; S.bubbles.push(b); }
      b.on = true; b.t = 0; b.x = clamp(x, 30 * k, this.W - 30 * k); b.y = Math.max(y, S.arch.y1 + 10 * k);
      b.txt.setText(str).setColor(col).setFontSize(Math.round(14 * k)).setVisible(true).setAlpha(1);
    },

    /* the needle's point on the record */
    syncNeedle: function () {
      var S = this.sy, T = S.tt, c = S.cue, f = c.phase === "reel" ? clamp(c.t / Math.max(1, c.len), 0, 1) : 1;
      var rN = T.R * (0.36 + 0.54 * f);
      var cs = clamp((T.D * T.D + rN * rN - T.armL * T.armL) / (2 * T.D * rN), -1, 1), phi = T.psi + Math.acos(cs);
      return { x: T.x + rN * Math.cos(phi), y: T.y + rN * Math.sin(phi), r: rN };
    },

    /* ── drawing ── */
    syncDraw: function (s, ms) {
      var S = this.sy;
      S.dShow += (S.d - S.dShow) * Math.min(1, s * 14);
      if (S.flashMs > 0) S.flashMs -= ms;
      if (S.booMs > 0) S.booMs -= ms;
      if (S.cheerMs > 0) S.cheerMs -= ms;
      if (S.card) { S.card.ms -= ms; if (S.card.ms <= 0) S.card = null; }
      this.syncDrawScreen(s, ms);
      this.syncDrawCrowd(s, ms);
      this.syncDrawMachines(s, ms);
      this.syncDrawMeter();
      this.syncDrawRack(s, ms);
    },
    syncDrawScreen: function (s, ms) {
      var S = this.sy, k = S.k, sc = S.scr, g = S.scrG, bg = S.beamG, P = S.pr, i;
      g.clear(); bg.clear();
      /* the picture: the singer's mouth keeps the picture's time (open on the tune's notes) */
      var pb = Math.floor(S.t / BEAT), fr = S.t / BEAT - pb, note = MEL[((pb % MEL.length) + MEL.length) % MEL.length];
      var open = note != null && fr < 0.55 && !this._between;
      S.pic.setTexture(open ? "md-sync-pic-1" : "md-sync-pic-0");
      var fl = 0.86 + 0.1 * Math.sin(S.t * 47) * Math.sin(S.t * 13.3) + (Math.random() < 0.04 ? -0.12 : 0);
      if (S.flashMs > 0) fl = 1.25;
      var tone = Math.round(clamp(fl, 0.6, 1) * 255);
      S.pic.setTint(Phaser.Display.Color.GetColor(tone, Math.round(tone * 0.96), Math.round(tone * 0.88)));
      if (Math.random() < 0.35) S.grain.setTexture("md-sync-grain-" + Math.floor(Math.random() * 3)).setFlip(Math.random() < 0.5, Math.random() < 0.5);
      /* scratches running down the print */
      if (Math.random() < 0.6) {
        g.lineStyle(1, 0xfff6dc, rnd(0.15, 0.35)); var x1 = sc.x + rnd(0.05, 0.95) * sc.w; g.lineBetween(x1, sc.y, x1 + rnd(-2, 2), sc.y + sc.h);
      }
      if (S.flashMs > 0) { g.fillStyle(0xfff6dc, 0.55); g.fillRect(sc.x, sc.y, sc.w, sc.h); }
      /* an intertitle card */
      if (S.card) {
        var a = clamp(Math.min(S.card.ms, 2600 - 0) / 250, 0, 1);
        g.fillStyle(0x0a0705, 0.94 * a); g.fillRect(sc.x, sc.y, sc.w, sc.h);
        g.lineStyle(2 * k, 0xd8c09a, 0.9 * a); g.strokeRect(sc.x + 8 * k, sc.y + 8 * k, sc.w - 16 * k, sc.h - 16 * k);
        g.lineStyle(1 * k, 0xd8c09a, 0.6 * a); g.strokeRect(sc.x + 13 * k, sc.y + 13 * k, sc.w - 26 * k, sc.h - 26 * k);
        [[sc.x + 13 * k, sc.y + 13 * k], [sc.x + sc.w - 13 * k, sc.y + 13 * k], [sc.x + 13 * k, sc.y + sc.h - 13 * k], [sc.x + sc.w - 13 * k, sc.y + sc.h - 13 * k]].forEach(function (q) { g.fillStyle(0xd8c09a, 0.8 * a); g.fillCircle(q[0], q[1], 3 * k); });
        S.txCard.setText(S.card.text).setVisible(true).setAlpha(a).setColor(S.card.bad ? "#ffb49a" : C.cream);
        S.txCardSub.setText(S.card.sub || "").setVisible(true).setAlpha(a);
      } else { S.txCard.setVisible(false); S.txCardSub.setVisible(false); }
      /* the cue dots, top right of the picture, as on every reel of film */
      var c = S.cue, dx = sc.x + sc.w * 0.89, dy = sc.y + sc.h * 0.14, pulse = 1 + 0.08 * Math.sin(S.t * 18);
      if (c.phase === "motor" && !this._between) {
        var r1 = Math.max(4, sc.w * 0.022);
        g.fillStyle(0x0a0705, 0.8); g.fillCircle(dx, dy, r1 + 2.5 * k);
        g.fillStyle(0xfff4d8, c.motorOn ? 1 : 0.9); g.fillCircle(dx, dy, r1);
        if (c.motorOn) { g.lineStyle(2 * k, 0xe8a83a, 0.9); g.strokeCircle(dx, dy, r1 + 6 * k); }
      } else if (c.phase === "window" && !this._between) {
        var r2 = Math.max(7, sc.w * 0.045) * pulse;
        g.fillStyle(0xfff4d8, 0.25); g.fillCircle(dx, dy, r2 * 2);
        g.fillStyle(0x0a0705, 0.85); g.fillCircle(dx, dy, r2 + 3 * k);
        g.fillStyle(0xfffaf0, 1); g.fillCircle(dx, dy, r2);
        g.lineStyle(2.5 * k, 0x9ccf74, 0.6 + 0.4 * Math.sin(S.t * 18)); g.strokeCircle(dx, dy, r2 + 8 * k);
      }
      if (S.scratchMs > 0) {
        var sy2 = sc.y + sc.h * S.scratchY, pts = [];
        for (i = 0; i < 6; i++) pts.push({ x: dx - sc.w * 0.06 + i * sc.w * 0.025, y: sy2 + (i % 2 ? -5 : 5) * k + rnd(-2, 2) });
        g.lineStyle(2.5 * k, 0xfffaf0, 0.95); g.strokePoints(pts);
      }
      /* the beam: from the lens, out through the port, onto the screen, with dust turning in it */
      var bf = 0.13 + 0.02 * Math.sin(S.t * 31) + (S.flashMs > 0 ? 0.05 : 0);
      var tip = { x: P.lensX, y: P.lensY };
      var hl = hull([tip, { x: sc.x, y: sc.y }, { x: sc.x + sc.w, y: sc.y }, { x: sc.x + sc.w, y: sc.y + sc.h }, { x: sc.x, y: sc.y + sc.h }]);
      bg.fillStyle(0xfff0c8, bf); bg.fillPoints(hl, true);
      var ix = sc.w * 0.25, iy = sc.h * 0.25, cx = sc.x + sc.w / 2, cy = sc.y + sc.h / 2;
      var hl2 = hull([tip, { x: cx - ix, y: cy - iy }, { x: cx + ix, y: cy - iy }, { x: cx + ix, y: cy + iy }, { x: cx - ix, y: cy + iy }]);
      bg.fillStyle(0xfff6dc, bf * 0.9); bg.fillPoints(hl2, true);
      bg.fillStyle(0xfff6dc, 0.5); bg.fillCircle(tip.x, tip.y, 4 * k);
      S.motes.forEach(function (m) {
        m.u += m.sp * s; if (m.u > 1) { m.u -= 1; m.v = rnd(-0.45, 0.45); }
        var ex = cx + m.v * sc.w, ey = cy + m.v * 0.5 * sc.h, mx = tip.x + (ex - tip.x) * m.u, my = tip.y + (ey - tip.y) * m.u;
        bg.fillStyle(0xfff4dc, m.a * (0.4 + 0.6 * m.u)); bg.fillCircle(mx, my, m.r * k);
      });
      /* the notes from the speakers behind the screen */
      S.notes.forEach(function (n) {
        if (!n.on) return;
        n.t += ms; n.x += n.vx * s; n.y += n.vy * s;
        n.spr.setPosition(n.x, n.y).setAlpha(clamp(1 - n.t / 1300, 0, 1)).setRotation(Math.sin(n.t * 0.008) * 0.25);
        if (n.t > 1300) { n.on = false; n.spr.setVisible(false); }
      });
    },
    syncDrawCrowd: function (s, ms) {
      var S = this.sy, k = S.k, mad = S.booMs > 0 || (S.zone === 2 && S.pat < 0.55) || (S.zone === 1 && S.P.tough && S.pat < 0.5);
      var happy = S.cheerMs > 0, sway = S.zone === 0 && !mad, beat = S.t / BEAT;
      S.heads.forEach(function (h, i) {
        var dx = 0, dy = 0;
        if (mad && (i % 3 === 0 || S.booMs > 0)) { dx = Math.sin(S.t * 30 + h.ph) * 2.2 * k; dy = -Math.abs(Math.sin(S.t * 9 + h.ph)) * 3 * k; }
        else if (happy) dy = -Math.abs(Math.sin(S.t * 10 + h.ph)) * 5 * k;
        else if (sway) dx = Math.sin(beat * Math.PI + h.ph * 0.3) * 1.2 * k;
        h.spr.setPosition(h.x + dx, h.y + dy);
      });
      if (!this._between) {
        if (mad && S.t > S.booNext) { S.booNext = S.t + rnd(0.9, 1.6); this.syncBoo(false); }
        if (happy && S.t > S.booNext) { S.booNext = S.t + 0.3; var h = S.heads[Math.floor(Math.random() * S.heads.length)]; if (h) this.syncBubble(h.x, h.y - 26 * h.sc, Math.random() < 0.5 ? "HOORAY!" : "BRAVO!", "#d8f0b0"); }
      }
      S.bubbles.forEach(function (b) {
        if (!b.on) return;
        b.t += ms; b.txt.setPosition(b.x, b.y - b.t * 0.02 * k).setAlpha(clamp(1.4 - b.t / 900, 0, 1));
        if (b.t > 1300) { b.on = false; b.txt.setVisible(false); }
      });
    },
    syncDrawMachines: function (s, ms) {
      var S = this.sy, k = S.k, P = S.pr, T = S.tt, g = S.mechG, a = S.armG, c = S.cue, i;
      g.clear(); a.clear();
      /* the reels turn; the feed reel empties toward the cue dots */
      if (!this._between) S.feed = c.phase === "reel" ? clamp(1 - c.t / Math.max(1, c.len) * 0.85, 0.15, 1) : 0.12;
      S.reelA += s * 2.2; S.filmOff = (S.filmOff + s * 70 * k) % (10 * k);
      var rf = P.rr * (0.34 + 0.58 * S.feed), rt = P.rr * (0.34 + 0.58 * (1 - S.feed));
      g.fillStyle(0x3a2412, 1); g.fillCircle(P.x, P.feedY, rf); g.fillCircle(P.x, P.takeY, rt);
      g.lineStyle(1, 0x7a5030, 0.6); g.strokeCircle(P.x, P.feedY, rf * 0.8); g.strokeCircle(P.x, P.takeY, rt * 0.8);
      S.feedR.setRotation(S.reelA); S.takeR.setRotation(S.reelA * 1.3);
      S.txFeed.setText(S.feedL).setVisible(!!S.feedL);
      if (S.feedL) { g.fillStyle(0xf3e6c4, 1); g.fillCircle(P.x, P.feedY, 10 * k); g.lineStyle(1.5 * k, 0x8a6420, 1); g.strokeCircle(P.x, P.feedY, 10 * k); }
      /* the film's path: off the feed reel, down through the gate, onto the take-up reel */
      var top = P.headY - P.hh * 0.5, bot = P.headY + P.hh * 0.5;
      var path = [{ x: P.x + rf * 0.98, y: P.feedY }, { x: P.gx, y: top + 4 * k }, { x: P.gx, y: bot - 4 * k }, { x: P.x + rt * 0.98, y: P.takeY }];
      g.lineStyle(6 * k, 0x2a1a0e, 1); g.strokePoints(path);
      g.lineStyle(1.2 * k, 0xa07850, 0.7); g.strokePoints(path);
      var segs = [], tot = 0;
      for (i = 0; i < path.length - 1; i++) { var Lq = Math.hypot(path[i + 1].x - path[i].x, path[i + 1].y - path[i].y); segs.push(Lq); tot += Lq; }
      var at = function (u) { var dd = u * tot; for (var j = 0; j < segs.length; j++) { if (dd <= segs[j] || j === segs.length - 1) { var f = clamp(dd / segs[j], 0, 1); return { x: path[j].x + (path[j + 1].x - path[j].x) * f, y: path[j].y + (path[j + 1].y - path[j].y) * f }; } dd -= segs[j]; } return path[0]; };
      for (var d0 = S.filmOff; d0 < tot; d0 += 10 * k) { var q = at(d0 / tot); g.fillStyle(0xd8c09a, 0.55); g.fillRect(q.x - 1, q.y - 1, 2, 2); }
      /* a bad splice on its way to the gate */
      if (S.splice.phase === "run") {
        var gateU = (segs[0] + segs[1] * 0.4) / tot, sp = at(gateU * clamp(S.splice.t / 1600, 0, 1));
        g.fillStyle(0xfffaf0, 1); g.fillRect(sp.x - 5 * k, sp.y - 3 * k, 10 * k, 6 * k);
        g.lineStyle(1.5 * k, 0xe8a83a, 0.9); g.strokeCircle(sp.x, sp.y, 10 * k + 2 * Math.sin(S.t * 20));
      }
      /* the gate's light and the arc lamp in its house */
      var lf = 0.65 + 0.2 * Math.sin(S.t * 41) * Math.sin(S.t * 7);
      g.fillStyle(0xfff0c0, 0.7 * lf); g.fillRect(P.gx - 4 * k, P.headY - P.hh * 0.2, 8 * k, P.hh * 0.22);
      (S.vents || []).forEach(function (v) { g.fillStyle(0xffc060, 0.55 * lf); g.fillRect(v.x, v.y, v.w, v.h); });
      /* the record: it turns at 33⅓, a little faster or slower as you nudge it */
      S.discA += s * TAU * (33.333 / 60) * (1 + clamp(S.rate || 0, -12, 12) * 0.02);
      S.disc.setRotation(S.discA);
      S.txDisc.setText(S.feedL).setVisible(!!S.feedL).setRotation(S.discA).setPosition(T.x + Math.cos(S.discA + Math.PI / 2) * T.R * 0.13, T.y + Math.sin(S.discA + Math.PI / 2) * T.R * 0.13);
      /* the light on the shellac (it stays put while the record turns) */
      a.fillStyle(0xfff4dc, 0.06); a.slice(T.x, T.y, T.R * 0.96, -2.4, -1.9, false); a.fillPath();
      a.fillStyle(0xfff4dc, 0.05); a.slice(T.x, T.y, T.R * 0.96, 0.75, 1.2, false); a.fillPath();
      /* the nudge: a hand-width arrow on the side being pushed */
      if (S.ax) {
        var dir = S.ax, ang0 = dir > 0 ? -0.5 : Math.PI + 0.5, ang1 = dir > 0 ? 0.5 : Math.PI - 0.5;
        a.lineStyle(4 * k, 0xf2d488, 0.85); a.beginPath(); a.arc(T.x, T.y, T.R * 1.12, Math.min(ang0, ang1), Math.max(ang0, ang1), false); a.strokePath();
        var ea = dir > 0 ? 0.5 : Math.PI - 0.5, ex = T.x + Math.cos(ea) * T.R * 1.12, ey = T.y + Math.sin(ea) * T.R * 1.12, tg = ea + Math.PI / 2;
        a.fillStyle(0xf2d488, 0.95); a.fillTriangle(ex + Math.cos(tg) * 10 * k, ey + Math.sin(tg) * 10 * k, ex + Math.cos(tg + 2.4) * 8 * k, ey + Math.sin(tg + 2.4) * 8 * k, ex + Math.cos(tg - 2.4) * 8 * k, ey + Math.sin(tg - 2.4) * 8 * k);
      }
      [T.slow, T.fast].forEach(function (b, j) {
        var on = (j === 0 && S.ax < 0) || (j === 1 && S.ax > 0);
        if (on) { a.fillStyle(0xf2d488, 0.3); a.fillRoundedRect(b.x - b.w / 2, b.y - b.h / 2, b.w, b.h, 5 * k); }
      });
      /* the tonearm and its reproducer (the soundbox), the needle in the groove */
      var n = this.syncNeedle(), sk = S.skip, jx = 0, jy = 0;
      if (sk.phase === "warn") { var amp = (1.5 + 3 * sk.t / S.P.warnMs) * k; jx = Math.sin(S.t * 60) * amp; jy = Math.cos(S.t * 47) * amp; }
      if (sk.phase === "jumped" && sk.t < 300) { jx = (1 - sk.t / 300) * 14 * k * sk.dir; jy = -(1 - sk.t / 300) * 10 * k; }
      var nx = n.x + jx, ny = n.y + jy, ang = Math.atan2(ny - T.pvY, nx - T.pvX);
      var hx = nx - Math.cos(ang) * 12 * k, hy2 = ny - Math.sin(ang) * 12 * k;
      a.lineStyle(9 * k, 0x1a120b, 1); a.lineBetween(T.pvX, T.pvY, hx, hy2);
      a.lineStyle(6 * k, 0xc9a24a, 1); a.lineBetween(T.pvX, T.pvY, hx, hy2);
      a.lineStyle(1.5 * k, 0xfff0c0, 0.7); a.lineBetween(T.pvX - 2 * k, T.pvY - 2 * k, hx - 2 * k, hy2 - 2 * k);
      a.fillStyle(0x1a120b, 1); a.fillCircle(hx, hy2, 15 * k);
      a.fillStyle(0xb8a070, 1); a.fillCircle(hx, hy2, 13 * k);
      a.fillStyle(0xe8dcc0, 1); a.fillCircle(hx, hy2, 9 * k);
      a.lineStyle(1 * k, 0x8a7a5a, 0.8); a.strokeCircle(hx, hy2, 6 * k); a.strokeCircle(hx, hy2, 3 * k);
      a.fillStyle(0x6a4a18, 1); a.fillCircle(T.pvX, T.pvY, 7 * k);
      a.fillStyle(0xfff4d8, 1); a.fillCircle(nx, ny, 2 * k);
      if (sk.phase === "warn") {
        a.lineStyle(2 * k, 0xffb08a, 0.9);
        for (i = 0; i < 3; i++) { var aa = S.t * 9 + i * 2.1, r0 = 20 * k, r1 = 28 * k; a.lineBetween(hx + Math.cos(aa) * r0, hy2 + Math.sin(aa) * r0, hx + Math.cos(aa) * r1, hy2 + Math.sin(aa) * r1); }
        var pr = clamp(sk.t / S.P.warnMs, 0, 1);
        a.lineStyle(4 * k, 0x1a120b, 0.8); a.beginPath(); a.arc(hx, hy2, 22 * k, -Math.PI / 2, -Math.PI / 2 + TAU * (1 - pr), false); a.strokePath();
        a.lineStyle(2.5 * k, 0xffb08a, 1); a.beginPath(); a.arc(hx, hy2, 22 * k, -Math.PI / 2, -Math.PI / 2 + TAU * (1 - pr), false); a.strokePath();
        S.txArm.setText("CATCH IT!").setVisible(true).setPosition(clamp(hx, 50 * k, this.W - 50 * k), hy2 - 38 * k);
      } else S.txArm.setVisible(false);
      S.hand.setVisible(sk.phase === "caught" && sk.t < 600).setPosition(hx + 4 * k, hy2 - 10 * k - Math.max(0, 1 - sk.t / 150) * 8 * k);
      /* a motor surge: sparks at the motor and an arrow for the lurch */
      var u = S.surge;
      if (u.phase === "spark" || u.phase === "kick") {
        var mx = T.px0 + 22 * k, my = T.py1 - 14 * k;
        for (i = 0; i < 5; i++) { var sa = rnd(0, TAU), sl = rnd(4, 14) * k; a.lineStyle(1.5 * k, 0xffe08a, 0.9); a.lineBetween(mx, my, mx + Math.cos(sa) * sl, my + Math.sin(sa) * sl); }
        S.txSurge.setText(u.dir > 0 ? "SURGE: EARLY ▶" : "◀ DRAG: LATE").setVisible(true).setPosition(clamp(T.x, 80 * k, this.W - 80 * k), T.py0 - 12 * k);
      } else S.txSurge.setVisible(false);
      /* the reel flying from the rack to the projector at a changeover */
      if (S.fly) {
        S.fly.t += ms;
        var f2 = clamp(S.fly.t / 450, 0, 1), fx = S.fly.x0 + (S.fly.x1 - S.fly.x0) * f2, fy = S.fly.y0 + (S.fly.y1 - S.fly.y0) * f2 - Math.sin(f2 * Math.PI) * 50 * k;
        S.flyImg.setVisible(f2 < 1).setPosition(fx, fy).setScale(k * (0.9 - 0.3 * f2));
        S.txFly.setVisible(f2 < 1).setText(S.fly.letter).setPosition(fx - 18 * k * (0.9 - 0.3 * f2), fy).setFontSize(Math.round(18 * k));
        if (f2 >= 1) S.fly = null;
      } else { S.flyImg.setVisible(false); S.txFly.setVisible(false); }
    },
    syncDrawMeter: function () {
      var S = this.sy, P = S.P, k = S.k, m = S.mt, g = S.uiG, i;
      g.clear();
      var dark = S.dark.phase === "out", A0 = -Math.PI / 2 - 70 * DEG;
      var ang = function (f) { return -Math.PI / 2 + clamp(f / MAXF, -1, 1) * 70 * DEG; };
      /* the face: cream, with red, amber and green bands */
      g.fillStyle(dark ? 0x2a2218 : 0xf3e6c4, 1); g.slice(m.x, m.y, m.r, Math.PI, TAU, false); g.fillPath();
      var band = function (f0, f1, col) { g.lineStyle(m.r * 0.2, col, dark ? 0.25 : 1); g.beginPath(); g.arc(m.x, m.y, m.r * 0.8, ang(f0), ang(f1), false); g.strokePath(); };
      band(-MAXF, -(P.green + P.amber), 0xc8402a); band(P.green + P.amber, MAXF, 0xc8402a);
      band(-(P.green + P.amber), -P.green, 0xe8a83a); band(P.green, P.green + P.amber, 0xe8a83a);
      band(-P.green, P.green, 0x8ec060);
      for (i = -MAXF; i <= MAXF; i += 2) {
        var ta = ang(i), r0 = m.r * (i % 4 === 0 ? 0.6 : 0.66), r1 = m.r * 0.7;
        g.lineStyle(1.2 * k, 0x1a120b, dark ? 0.3 : 0.8); g.lineBetween(m.x + Math.cos(ta) * r0, m.y + Math.sin(ta) * r0, m.x + Math.cos(ta) * r1, m.y + Math.sin(ta) * r1);
      }
      g.lineStyle(2 * k, 0x8a6420, 1); g.beginPath(); g.arc(m.x, m.y, m.r, Math.PI, TAU, false); g.strokePath();
      void A0;
      /* the needle (hidden while the meter's lamp is out) */
      if (!dark) {
        var na = ang(S.dShow), L2 = m.r * 0.92;
        g.lineStyle(3.2 * k, 0x1a120b, 1); g.lineBetween(m.x, m.y, m.x + Math.cos(na) * L2, m.y + Math.sin(na) * L2);
        g.lineStyle(1.4 * k, S.zone === 0 ? 0x2e6a1a : S.zone === 1 ? 0xb87010 : 0xb8321e, 1); g.lineBetween(m.x, m.y, m.x + Math.cos(na) * L2 * 0.95, m.y + Math.sin(na) * L2 * 0.95);
      } else {
        var fl = Math.random() < 0.06;
        if (fl) { var na2 = ang(S.dShow); g.lineStyle(2.4 * k, 0x1a120b, 0.5); g.lineBetween(m.x, m.y, m.x + Math.cos(na2) * m.r * 0.9, m.y + Math.sin(na2) * m.r * 0.9); }
      }
      g.fillStyle(0x1a120b, 1); g.fillCircle(m.x, m.y, 6 * k); g.fillStyle(0xd4a84a, 1); g.fillCircle(m.x, m.y, 3 * k);
      S.txLamp.setVisible(dark);
      S.txSync.setVisible(!dark);
      /* the audience's patience */
      var pb = S.patBar, pf = clamp(S.pat, 0, 1), flash = pf < 0.3 && Math.floor(S.t * 6) % 2 === 0;
      g.fillStyle(0x0a0603, 1); g.fillRect(pb.x0, pb.y - pb.h / 2, pb.x1 - pb.x0, pb.h);
      g.fillStyle(pf < 0.3 ? 0xc8402a : pf < 0.6 ? 0xe8a83a : 0x8ec060, 1); g.fillRect(pb.x0, pb.y - pb.h / 2, (pb.x1 - pb.x0) * pf, pb.h);
      g.lineStyle(1.5 * k, flash ? 0xc8402a : 0xd4a84a, 1); g.strokeRect(pb.x0, pb.y - pb.h / 2, pb.x1 - pb.x0, pb.h);
      var face = pf > 0.6 ? "THE AUDIENCE ☺" : pf > 0.3 ? "THE AUDIENCE ~" : "THE AUDIENCE: BOO!";
      if (S.txAud.text !== face) S.txAud.setText(face).setColor(pf > 0.3 ? C.sepiaL : "#ffb49a");
      /* the changeover lamp: what CUE does right now */
      var c = S.cue, lp = S.lamp, col = 0x3a2a18, msg = "WAIT FOR THE CUE DOT", tc = C.sepiaL;
      if (S.skip.phase === "warn") { col = Math.floor(S.t * 10) % 2 ? 0xff7050 : 0xc8402a; msg = "CATCH THE NEEDLE!\nPRESS CUE"; tc = "#ffb49a"; }
      else if (this._between) { col = 0x8ec060; msg = "CHANGEOVER!"; tc = C.green; }
      else if (c.phase === "motor") {
        col = 0xe8a83a;
        if (S.P.twoStep) { msg = c.motorOn ? "MOTOR RUNNING\nWAIT FOR THE BIG DOT" : "FIRST DOT: PRESS CUE\nTO START THE MOTOR"; tc = C.amber; }
        else { msg = "GET READY…"; tc = C.amber; }
      } else if (c.phase === "window") {
        var ok = this.syncInSync() && (!S.P.twoStep || c.motorOn);
        col = ok ? (Math.floor(S.t * 8) % 2 ? 0xfffaf0 : 0x9ccf74) : 0xc8402a;
        msg = ok ? "CUE NOW!\nPRESS CUE" : (S.P.twoStep && !c.motorOn ? "MISSED THE MOTOR DOT" : "GET IN SYNC FIRST!"); tc = ok ? "#e8ffd0" : "#ffb49a";
      }
      g.fillStyle(0x0a0603, 1); g.fillCircle(lp.x, lp.y, lp.r + 3 * k);
      g.fillStyle(col, 1); g.fillCircle(lp.x, lp.y, lp.r);
      if (col !== 0x3a2a18) { g.fillStyle(col, 0.25); g.fillCircle(lp.x, lp.y, lp.r * 1.9); }
      g.lineStyle(1.5 * k, 0xd4a84a, 1); g.strokeCircle(lp.x, lp.y, lp.r + 3 * k);
      if (S.txCue.text !== msg) S.txCue.setText(msg);
      S.txCue.setColor(tc);
    },
    syncDrawRack: function (s, ms) {
      var S = this.sy, k = S.k, R = S.rk, g = S.rackG, self = this;
      g.clear();
      S.slots.forEach(function (sl, i) {
        var y = sl.y, sel = i === S.sel;
        g.lineStyle(2 * k, 0x6a4426, 1); g.lineBetween(R.x - R.w / 2 + 6 * k, y + R.slotH * 0.42, R.x + R.w / 2 - 6 * k, y + R.slotH * 0.42);
        sl.lift += ((sel && sl.state === "live" ? 6 * k : 0) - sl.lift) * Math.min(1, s * 14);
        if (sel) {
          var pul = 0.55 + 0.35 * Math.sin(S.t * 6);
          g.fillStyle(0xf2d488, 0.16 * pul); g.fillRoundedRect(R.x - R.w / 2 + 3 * k, y - R.slotH * 0.46, R.w - 6 * k, R.slotH * 0.92, 6 * k);
          g.lineStyle(2.2 * k, 0xf2d488, pul + 0.1); g.strokeRoundedRect(R.x - R.w / 2 + 3 * k, y - R.slotH * 0.46, R.w - 6 * k, R.slotH * 0.92, 6 * k);
          var ax = R.x - R.w / 2 - 6 * k;
          g.fillStyle(0xf2d488, 1); g.fillTriangle(ax, y, ax - 11 * k, y - 8 * k, ax - 11 * k, y + 8 * k);
        }
        self.syncSlotPos(sl);
      });
    }
  });
})();
