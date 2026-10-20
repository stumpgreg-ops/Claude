/* SOL Labyrinth v5.21 — the Lit and Film mode "lastcar": The Last Car (Double Indemnity, 1944, Billy Wilder).
 *
 * Film noir, in black and white. Night, the observation platform at the back of a moving train, seen from the
 * side: the last car fills the right of the screen (lit windows striped by their blinds throw venetian-blind light
 * onto the cinders), the rear platform with its railing and red tail lamp stands at the left of it, and the track
 * runs off behind into the dark. A man in a fedora and a trench coat waits on the platform for his stop.
 *
 * Trackside markers rush past in the foreground, each a white board on a post with a lamp over it and a pool of
 * light at its foot; every board carries a letter. Jump off (Space, ▲, JUMP or a click) so that you come down in
 * the pool of light of the marker with the right letter: a ring on the cinders shows where a jump would land, so
 * the jump is timed (the marker has to reach the ring as you land) and placed (◀ ▶ walk along the platform before
 * the jump and steer a little in the air). Landing on the right letter answers (answerPick); a wrong letter costs a
 * life and that letter's boards are crossed out; landing between markers costs nothing but time. After every jump
 * the scene fades out and the story is told again from the platform (the narration in the bottom bar is a
 * hardboiled confession, in the game's own words).
 *
 * Hazards, each a life: telegraph poles whip past in the foreground (don't be in the air when one goes by);
 * from level 11 signal masts swing an arm past at head height (duck, ▼); and the conductor: footsteps, his
 * shadow on the door's blinds, then the door opens and the light spills out over the platform — duck below the
 * railing, or (to level 50) stand in the dark corner beyond the light, until he goes back in. From 51 he sweeps a
 * flashlight over the whole platform. lastcarParams(n) is one curve for levels 1-100 (the train's speed, the
 * landing pools, air control, poles, signals, the conductor, steam, rain, the car's sway).
 *
 * Registered with SolModes.extend (js/modes.js); the methods below are copied onto ModeScene, so `this` is the
 * mode scene. Every texture is drawn once (canvasTex) under an "md-lastcar-" key. World positions (u) are in base
 * pixels along the track (k = 1); the screen x of a thing is (u - dist) * k.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, shuffle = L.shuffle, snd = L.snd, canvasTex = L.canvasTex;

  var TAU = Math.PI * 2;
  var PLAT_W = 150;                 /* the platform's length, base px */
  var DROP = 140;                   /* platform deck to the cinders, base px */
  var JUMP_VY = -300, JUMP_G = 1700, DRIFT = -70;   /* a jump: up, gravity and the drift back, base px/s */
  var FLY_T = (-JUMP_VY + Math.sqrt(JUMP_VY * JUMP_VY + 2 * JUMP_G * DROP)) / JUMP_G;   /* time in the air, s (0.62) */
  var WALK = 150;                   /* walking speed on the platform, base px/s */
  var MAN_HW = 13, POLE_HW = 11;     /* half widths for the pole check */
  var ARM_L = 58, ARM_R = 6;        /* a signal arm reaches this far left / right of its mast */
  var POST_H = 156, BOARD_CY = 39;  /* the marker texture: height and the board's centre from the top */
  var POLE_H = 780, POLE_ARM = 70;  /* the pole texture: height and its crossarm */
  var SIG_W = 100, SIG_H = 340, SIG_MAST = 74, SIG_ARM_Y = 112;
  var SERIF = "Georgia, 'Times New Roman', serif", TYPE = "'Courier New', Courier, monospace";
  var DANGER = 0xc8372d;            /* the one spot colour: the tail lamp and danger cues */

  /* ── difficulty: one curve for every level 1-100, each level harder than the one before ── */
  function lastcarParams(n) {
    n = Math.max(1, Number(n) || 1);
    var speed = 210 + n * 3.2, gap = 500 + n * 1.2;
    return {
      speed: speed,                                               /* the train, base px a second: 213 at 1, 530 at 100 */
      gap: gap,                                                   /* track between two markers, base px (at least) */
      gapS: gap / speed,                                          /* ... in seconds: 2.35 at 1, 1.17 at 100 */
      tol: 44 - n * 0.18,                                         /* half the landing pool, base px: 44 at 1, 26 at 100 */
      airCtl: 120 - n * 0.5,                                      /* steering in the air, base px/s */
      poleGap: 1500 - n * 8,                                      /* track between telegraph poles, base px */
      sigGap: n >= 11 ? 3600 - (n - 11) * 20 : 1e9,               /* between signal masts (from 11) */
      condEvery: 17000 - n * 90,                                  /* ms between the conductor's visits */
      condWarn: 2800 - n * 17,                                    /* footsteps and his shadow on the blinds first, ms */
      condLook: 2000 + n * 22,                                    /* how long he stays out, ms */
      condGrace: 650 - n * 4.5,                                   /* ms in his light before he sees you */
      reach: 0.5 + n * 0.0035,                                    /* share of the platform the doorway's light covers */
      beam: n >= 51 ? 1 : 0,                                      /* he sweeps a flashlight over the whole platform */
      guide: n < 41 ? 1 : 0,                                      /* the board a jump would land on lights up */
      poleWarn: n < 61 ? 1 : 0,                                   /* the landing ring turns red when a pole is in the way */
      steam: n >= 21 ? 0.25 + (n - 21) * 0.007 : 0,               /* the engine's steam rolls over the markers */
      slick: n >= 31 ? 0.3 + (n - 31) * 0.005 : 0,                /* rain: a slick platform */
      sway: n >= 71 ? 10 + (n - 71) * 0.35 : 0,                   /* the car sways: base px the landing swings */
      twice: n >= 81 ? 0.25 + (n - 81) * 0.02 : 0                 /* the conductor comes straight back out */
    };
  }

  /* ── the hardboiled voice (the game's own lines) ── */
  var VOICE = {
    start: ["It was a warm night and the train was in no hurry. I was. I watched the markers go by and waited for mine.",
      "The last car. Nobody comes out here but the wind and the conductor, and I was counting on the wind.",
      "I had it all figured: one marker, one jump, and nobody the wiser. That's how it always starts."],
    right: ["Right on the mark. I hit the cinders rolling, and for one second I thought I'd gotten away with it.",
      "That was the one. Clean as a new policy, and twice as easy to sign.",
      "I picked my spot and I landed on it. It was the only thing that went right all week."],
    found: ["One right. The fine print said there was a second one. There always is.",
      "Half the job done. In my line of work, half is how they catch you."],
    wrong: ["Wrong marker. I knew it the second my shoes hit the gravel. You don't get those seconds back.",
      "I jumped at the wrong sign. In my business, that's called a bad risk.",
      "Wrong stop. Somewhere a claims man was already sharpening his pencil."],
    miss: ["Nothing out there but cinders and moonlight. I climbed back aboard and started the story over.",
      "I came down between the markers with nobody to meet but my own shadow. Back on the train.",
      "Too early, or too late. Out here the difference is a whole night."],
    pole: ["A telegraph pole stepped out of the dark and introduced itself. We didn't get along.",
      "I never saw the pole. It saw me."],
    signal: ["The signal arm came out of the night at the height of my hat. It took the hat, and some of my pride.",
      "A signal arm swung past at head height. I should have kept my head down. I usually do."],
    seen: ["The conductor looked right at me. I'd been careful. I hadn't been careful enough.",
      "He saw me, all right. Now there was a witness, and witnesses remember."],
    hid: ["He looked out at the night and saw only the night. Then the door closed.",
      "Down behind the railing, I listened to him breathe. Then the latch clicked and he was gone."],
    warn: ["Footsteps behind the blinds. Somebody was coming out to check the platform.",
      "A shadow on the blinds. The conductor was making his rounds."],
    again: "Let me tell it again, the way it should have gone."
  };
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  /* ── art, drawn once ── */
  function fillPath(c, pts) { c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); c.closePath(); c.fill(); }
  function ell(c, x, y, rx, ry, rot) { c.beginPath(); c.ellipse(x, y, rx, ry, rot || 0, 0, TAU); c.fill(); }
  function disc(c, x, y, r) { c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); }
  function limb(c, pts, w) { c.lineWidth = w; c.lineCap = "round"; c.lineJoin = "round"; c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); c.stroke(); }
  /* a figure drawn twice: once in the rim light (offset), then in black over it */
  function silhouette(shape, rim, body, dx, dy, all) {
    return function (c) {
      var offs = [[dx, dy]];
      /* all: a thin edge of light all round as well, so the figure reads against the dark cinders */
      if (all) offs = offs.concat([[1.3, 0], [0, 1.3], [-1, 1], [1, -1], [0, -1.4], [-1.4, 0]]);
      offs.forEach(function (o, i) {
        c.save(); c.translate(o[0], o[1]); c.fillStyle = i ? all : rim; c.strokeStyle = i ? all : rim; shape(c); c.restore();
      });
      c.fillStyle = body; c.strokeStyle = body; shape(c);
    };
  }
  function fedora(c, x, y, s, tilt) {
    s = s || 1;
    c.save(); c.translate(x, y); c.rotate(tilt || 0); c.scale(s, s);
    fillPath(c, [[-9, 0], [-8.5, -9], [-4, -11.5], [0, -10], [4, -11.5], [8.5, -9], [9, 0]]);
    ell(c, 0, 0.6, 16, 3.3, 0);
    c.restore();
  }
  /* the man, standing, facing right; feet on the bottom edge (64x124) */
  function manStandShape(c) {
    fedora(c, 33, 19.5, 1, 0.05);
    disc(c, 33, 26.5, 7.8);
    fillPath(c, [[39.5, 23.5], [43.5, 28.5], [39.5, 30.5]]);
    c.fillRect(29, 31, 8, 6);
    fillPath(c, [[19, 39], [25, 33], [41, 33], [47, 39], [49, 54], [50, 76], [53, 101], [43, 103], [33, 100], [23, 103], [12, 101], [15, 76], [16, 54]]);
    c.fillRect(23, 98, 7, 22); c.fillRect(35, 98, 7, 22);
    ell(c, 28, 121.5, 7.5, 2.8); ell(c, 43, 121.5, 7.5, 2.8);
  }
  function drawManStand(c) {
    silhouette(manStandShape, "#d6d6d0", "#0d0d0d", -1.7, -1, "#6a6a64")(c);
    c.strokeStyle = "#3a3a3a"; c.lineWidth = 1.2;
    limb(c, [[17, 68], [49, 68]], 2.2);                         /* the belt */
    c.strokeStyle = "#2c2c2c"; limb(c, [[26, 34], [32, 52], [33, 99]], 1.2); limb(c, [[40, 34], [34, 52]], 1.2);
    limb(c, [[20, 56], [22, 76]], 1.2); limb(c, [[46, 56], [44, 76]], 1.2);   /* hands in the pockets */
    c.fillStyle = "#4a4a4a"; c.fillRect(24.5, 16.6, 17, 2.2);   /* the hat band */
  }
  /* crouched low behind the railing's panel, only the crown of the hat above it (72x84) */
  function manDuckShape(c) {
    fedora(c, 46, 37, 1, 0.16);
    disc(c, 45, 44, 7.2);
    fillPath(c, [[51, 42], [55, 47], [51, 49]]);
    fillPath(c, [[12, 84], [10, 70], [16, 58], [32, 48], [50, 50], [58, 62], [58, 74], [63, 84]]);
    ell(c, 20, 82, 8, 2.6); ell(c, 57, 82, 8, 2.6);
  }
  function drawManDuck(c) {
    silhouette(manDuckShape, "#b4b4ac", "#0d0d0d", -1.4, -0.8, "#5a5a55")(c);
    c.strokeStyle = "#2c2c2c"; limb(c, [[22, 70], [52, 71]], 2);
    c.fillStyle = "#4a4a4a"; c.save(); c.translate(46, 37); c.rotate(0.16); c.fillRect(-8.5, -3.4, 17, 2.2); c.restore();
  }
  /* in the air, coat flying, one hand on the hat (96x120) */
  function manLeapShape(c) {
    fedora(c, 55, 15, 1, -0.18);
    disc(c, 53, 25, 7.8);
    fillPath(c, [[60, 22], [64, 27], [60, 29]]);
    limb(c, [[47, 38], [56, 30], [58, 16]], 6);
    fillPath(c, [[36, 36], [55, 37], [59, 54], [58, 76], [44, 80], [26, 86], [6, 92], [14, 78], [30, 60]]);
    limb(c, [[52, 74], [66, 90], [62, 108]], 7.5);
    limb(c, [[42, 76], [32, 96], [18, 102]], 7.5);
    ell(c, 66, 109, 7.5, 2.8, 0.1); ell(c, 14, 103, 7.5, 2.8, -0.4);
    limb(c, [[38, 42], [26, 50], [18, 46]], 5.5);
  }
  function drawManLeap(c) {
    silhouette(manLeapShape, "#e4e4dc", "#0d0d0d", -1.9, -1.2, "#a8a8a0")(c);
    c.strokeStyle = "#2c2c2c"; limb(c, [[34, 64], [56, 62]], 2);
  }
  function drawHat(c) {
    c.fillStyle = "#d6d6d0"; fedora(c, 19.3, 13, 1, 0);
    c.fillStyle = "#0d0d0d"; fedora(c, 20.5, 14, 1, 0);
    c.fillStyle = "#4a4a4a"; c.fillRect(12, 10.8, 17, 2.2);
  }
  /* the conductor, facing left, backlit by the doorway (72x132); fl: holding a flashlight */
  function condShape(fl) {
    return function (c) {
      c.fillRect(25, 5, 21, 11);
      fillPath(c, [[25, 14], [12, 18], [25, 18]]);
      disc(c, 35, 25, 8.4);
      fillPath(c, [[28, 22], [23, 27], [28, 29]]);
      c.fillRect(31, 31, 8, 6);
      fillPath(c, [[18, 39], [52, 39], [57, 60], [57, 82], [53, 98], [17, 98], [14, 80], [15, 58]]);
      c.fillRect(22, 96, 9, 30); c.fillRect(39, 96, 9, 30);
      ell(c, 24, 128, 8.5, 3); ell(c, 44, 128, 8.5, 3);
      if (fl) { limb(c, [[20, 44], [10, 56], [2, 54]], 6.5); c.fillRect(0, 50, 9, 6); }
      else limb(c, [[19, 44], [13, 66], [12, 82]], 6.5);
    };
  }
  function drawConductor(fl) {
    return function (c) {
      silhouette(condShape(fl), "#e8e8e2", "#0c0c0c", 1.8, -0.6)(c);
      c.fillStyle = "#9a9a94";
      [52, 60, 68, 76].forEach(function (y) { disc(c, 30, y, 1.2); disc(c, 41, y, 1.2); });
      c.fillStyle = "#4a4a4a"; c.fillRect(25, 12, 21, 2.4);   /* the cap band */
      if (!fl) {
        /* the lantern */
        c.fillStyle = "#0c0c0c"; c.fillRect(5, 82, 14, 20); c.fillRect(8, 79, 8, 3);
        c.fillStyle = "#f4f2e8"; c.fillRect(7.5, 85, 9, 13);
        c.fillStyle = "#0c0c0c"; c.fillRect(11.3, 85, 1.4, 13);
      } else { c.fillStyle = "#f4f2e8"; c.fillRect(0, 51, 1.8, 4); }
    };
  }
  /* a trackside marker: a white board on a post, a lamp hood over it; foot on the bottom edge (60xPOST_H) */
  function drawPost(c, w, h) {
    c.fillStyle = "#c8c8c2"; c.fillRect(25.5, 60, 7, h - 60);
    c.fillStyle = "#121212"; c.fillRect(27, 60, 6, h - 60);
    c.fillStyle = "#121212"; c.fillRect(1, 13, 58, 52);
    c.fillStyle = "#f2f2ec"; c.fillRect(4, 16, 52, 46);
    c.strokeStyle = "#121212"; c.lineWidth = 1.2; c.strokeRect(7.5, 19.5, 45, 39);
    fillPath(c, [[22, 13], [24, 3], [36, 3], [38, 13]]);
    c.fillStyle = "#121212"; fillPath(c, [[21, 13], [24, 2], [36, 2], [39, 13]]);
    c.fillStyle = "#ffffff"; c.fillRect(26, 10, 8, 3);
    c.fillStyle = "#121212"; c.fillRect(10, h - 6, 40, 6);
  }
  /* a telegraph pole; foot on the bottom edge (70xPOLE_H) */
  function drawPole(c, w, h) {
    var cx = 35;
    c.fillStyle = "#5a5a56"; fillPath(c, [[cx - 9.5, h], [cx - 6.5, 30], [cx + 5, 30], [cx + 8, h]]);
    c.fillStyle = "#0a0a0a"; fillPath(c, [[cx - 8, h], [cx - 5.5, 30], [cx + 5.5, 30], [cx + 8, h]]);
    [[POLE_ARM, 68], [POLE_ARM + 42, 50]].forEach(function (a) {
      var y = a[0], hw = a[1] / 2;
      c.fillStyle = "#5a5a56"; c.fillRect(cx - hw, y - 1.2, hw * 2, 2);
      c.fillStyle = "#0a0a0a"; c.fillRect(cx - hw, y, hw * 2, 7);
      for (var i = 0; i < 4; i++) {
        var x = cx - hw + 4 + i * (hw * 2 - 8) / 3;
        c.fillStyle = "#0a0a0a"; c.fillRect(x - 2, y - 7, 4, 7);
        c.fillStyle = "#b8b8b0"; c.fillRect(x - 1, y - 8, 2.5, 3);
      }
    });
    c.fillStyle = "#0a0a0a";
    for (var y = 300; y < h - 60; y += 46) c.fillRect((y / 46) % 2 ? cx + 5 : cx - 13, y, 8, 2.5);
  }
  /* a signal mast with its lamp and its arm at head height; foot on the bottom edge (SIG_W x SIG_H) */
  function drawSignal(c, w, h) {
    var x = SIG_MAST, i;
    c.fillStyle = "#121212"; c.fillRect(x - 12, h - 14, 24, 14);
    c.strokeStyle = "#0c0c0c"; c.lineWidth = 3;
    c.beginPath(); c.moveTo(x - 4, 60); c.lineTo(x - 4, h - 12); c.moveTo(x + 4, 60); c.lineTo(x + 4, h - 12); c.stroke();
    c.lineWidth = 1.2; c.beginPath();
    for (i = 70; i < h - 20; i += 16) { c.moveTo(x - 4, i); c.lineTo(x + 4, i + 8); c.lineTo(x - 4, i + 16); }
    c.stroke();
    c.strokeStyle = "#8a8a84"; c.lineWidth = 1; c.beginPath(); c.moveTo(x - 5.5, 60); c.lineTo(x - 5.5, h - 12); c.stroke();
    /* the lamp head */
    c.fillStyle = "#0c0c0c"; disc(c, x, 52, 15); c.fillRect(x - 15, 37, 30, 4);
    c.fillStyle = "#3a3a38"; disc(c, x, 52, 9.5);
    c.fillStyle = "#0c0c0c"; c.fillRect(x - 3, 66, 6, 40);
    /* the arm: a striped blade */
    var y0 = SIG_ARM_Y - 6, al = x - ARM_L;
    c.fillStyle = "#0c0c0c"; fillPath(c, [[x + 6, y0 - 2], [al - 2, y0 - 2], [al - 6, y0 + 6], [al - 2, y0 + 14], [x + 6, y0 + 14]]);
    c.fillStyle = "#ecece6"; fillPath(c, [[x - 2, y0], [al, y0], [al - 3, y0 + 6], [al, y0 + 12], [x - 2, y0 + 12]]);
    c.fillStyle = "#0c0c0c";
    for (i = 0; i < 3; i++) { var sx = al + 8 + i * 16; fillPath(c, [[sx, y0], [sx + 6, y0], [sx + 2, y0 + 6], [sx + 6, y0 + 12], [sx, y0 + 12], [sx - 4, y0 + 6]]); }
    disc(c, x, SIG_ARM_Y, 4.5);
    c.fillStyle = "#8a8a84"; disc(c, x, SIG_ARM_Y, 1.6);
  }
  function drawGlow(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 1, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,255,0.9)"); g.addColorStop(0.25, "rgba(255,255,255,0.35)"); g.addColorStop(1, "rgba(255,255,255,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  function drawPuff(c, w, h) {
    var blobs = [[0.3, 0.6, 0.28], [0.5, 0.45, 0.34], [0.7, 0.58, 0.27], [0.45, 0.7, 0.25], [0.62, 0.35, 0.22]];
    blobs.forEach(function (b) {
      var x = b[0] * w, y = b[1] * h, r = b[2] * w, g = c.createRadialGradient(x, y - r * 0.25, 1, x, y, r);
      g.addColorStop(0, "rgba(220,220,215,0.55)"); g.addColorStop(0.6, "rgba(170,170,165,0.32)"); g.addColorStop(1, "rgba(120,120,118,0)");
      c.fillStyle = g; c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill();
    });
  }
  function drawGrain(c, w, h) {
    var img = c.createImageData(w, h), d = img.data, i;
    for (i = 0; i < d.length; i += 4) {
      var r = Math.random();
      if (r < 0.16) { var v = Math.random() < 0.5 ? 0 : 255; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 40 + Math.random() * 80; }
    }
    c.putImageData(img, 0, 0);
    c.strokeStyle = "rgba(255,255,255,0.18)"; c.lineWidth = 1;   /* a couple of scratches */
    c.beginPath(); c.moveTo(w * 0.31, 0); c.lineTo(w * 0.32, h); c.moveTo(w * 0.77, 0); c.lineTo(w * 0.765, h * 0.6); c.stroke();
  }
  function drawVignette(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, w * 0.28, w / 2, h / 2, w * 0.72);
    g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(0.65, "rgba(0,0,0,0.35)"); g.addColorStop(1, "rgba(0,0,0,0.88)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  /* the far skyline: a low city, oil derricks and palms against the moonlit haze (1024x220, base on the bottom) */
  function drawSkyline(c, w, h) {
    var x = 0, i, seed = 7;
    function r() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    c.fillStyle = "#121212";
    while (x < w) {
      var bw = 26 + r() * 50, bh = 30 + r() * 70, kind = r();
      if (kind < 0.12) {
        /* an oil derrick */
        var dx = x + 16;
        c.strokeStyle = "#101010"; c.lineWidth = 2; c.beginPath();
        c.moveTo(dx - 14, h); c.lineTo(dx, h - 104); c.lineTo(dx + 14, h);
        for (i = 1; i < 6; i++) { var yy = h - i * 18, hw = 14 * (1 - i * 18 / 104); c.moveTo(dx - hw, yy); c.lineTo(dx + hw, yy); }
        c.stroke(); x += 34; continue;
      }
      if (kind < 0.22) {
        /* a palm */
        var px = x + 12, ph = 70 + r() * 40;
        c.strokeStyle = "#101010"; c.lineWidth = 3; c.beginPath(); c.moveTo(px, h); c.quadraticCurveTo(px + 6, h - ph * 0.5, px + 2, h - ph); c.stroke();
        c.lineWidth = 2.2; for (i = 0; i < 7; i++) { var a = i / 7 * TAU; c.beginPath(); c.moveTo(px + 2, h - ph); c.quadraticCurveTo(px + 2 + Math.cos(a) * 12, h - ph - 8, px + 2 + Math.cos(a) * 22, h - ph + 6 + Math.abs(Math.sin(a)) * 6); c.stroke(); }
        x += 26; continue;
      }
      if (kind > 0.93) bh += 50;
      c.fillStyle = "#121212"; c.fillRect(x, h - bh, bw, bh);
      if (kind > 0.93) { c.fillRect(x + bw * 0.35, h - bh - 24, bw * 0.3, 24); c.fillRect(x + bw * 0.47, h - bh - 40, 2, 16); }
      c.fillStyle = "#2a2a28"; c.fillRect(x, h - bh, bw, 1.5);
      for (var wy = h - bh + 7; wy < h - 6; wy += 9) for (var wx = x + 4; wx < x + bw - 5; wx += 8) if (r() < 0.12) { c.fillStyle = r() < 0.5 ? "#8a8a82" : "#5a5a56"; c.fillRect(wx, wy, 3, 4); }
      x += bw + r() * 10;
    }
  }
  /* the middle distance: rows of orange-grove trees and a fence (1024x120) */
  function drawGrove(c, w, h) {
    var x = 0, seed = 3;
    function r() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    while (x < w + 20) {
      var tr = 10 + r() * 6, ty = h - 14 - tr * 0.7;
      c.fillStyle = "#3a3a37"; ell(c, x, ty - 1.5, tr * 1.25, tr * 0.75);
      c.fillStyle = "#090909"; ell(c, x, ty, tr * 1.25, tr * 0.75); ell(c, x - tr * 0.5, ty + 3, tr * 0.8, tr * 0.5); ell(c, x + tr * 0.6, ty + 2, tr * 0.7, tr * 0.5);
      c.fillRect(x - 1.5, ty, 3, h - ty);
      x += tr * 2.6 + 4 + r() * 10;
    }
    c.fillStyle = "#0d0d0d"; c.fillRect(0, h - 8, w, 8);
    for (x = 6; x < w; x += 32) { c.fillStyle = "#2a2a28"; c.fillRect(x, h - 24, 2, 16); c.fillStyle = "#0d0d0d"; c.fillRect(x + 1, h - 24, 3, 16); }
    c.fillStyle = "#2a2a28"; c.fillRect(0, h - 19, w, 1); c.fillRect(0, h - 13, w, 1);
  }
  function ensureLastcarArt(scene) {
    canvasTex(scene, "md-lastcar-man", 64, 124, drawManStand);
    canvasTex(scene, "md-lastcar-duck", 72, 84, drawManDuck);
    canvasTex(scene, "md-lastcar-leap", 96, 120, drawManLeap);
    canvasTex(scene, "md-lastcar-hat", 40, 20, drawHat);
    canvasTex(scene, "md-lastcar-cond", 72, 132, drawConductor(false));
    canvasTex(scene, "md-lastcar-condf", 72, 132, drawConductor(true));
    canvasTex(scene, "md-lastcar-post", 60, POST_H, drawPost);
    canvasTex(scene, "md-lastcar-pole", 70, POLE_H, drawPole);
    canvasTex(scene, "md-lastcar-signal", SIG_W, SIG_H, drawSignal);
    canvasTex(scene, "md-lastcar-glow", 128, 128, drawGlow);
    canvasTex(scene, "md-lastcar-puff", 180, 120, drawPuff);
    canvasTex(scene, "md-lastcar-grain", 256, 256, drawGrain);
    canvasTex(scene, "md-lastcar-vig", 256, 256, drawVignette);
    canvasTex(scene, "md-lastcar-skyline", 1024, 220, drawSkyline);
    canvasTex(scene, "md-lastcar-grove", 1024, 120, drawGrove);
  }

  /* ── the size-dependent pictures (B is the layout) ── */
  function drawBack(B, W, H) {
    return function (c) {
      var k = B.k, g = c.createLinearGradient(0, 0, 0, B.yHz), i;
      g.addColorStop(0, "#030303"); g.addColorStop(0.45, "#0c0c0c"); g.addColorStop(0.8, "#232321"); g.addColorStop(1, "#4c4c47");
      c.fillStyle = g; c.fillRect(0, 0, W, B.yHz);
      var seed = 11; function r() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
      for (i = 0; i < 60; i++) { c.fillStyle = "rgba(255,255,255," + (0.15 + r() * 0.55) + ")"; var st = r() < 0.15 ? 2 : 1.2; c.fillRect(r() * W, B.yTop + r() * (B.yHz - B.yTop) * 0.55, st, st); }
      var mx = B.moonX, my = B.moonY, mr = 26 * k;
      g = c.createRadialGradient(mx, my, mr * 0.8, mx, my, mr * 9);
      g.addColorStop(0, "rgba(235,235,225,0.32)"); g.addColorStop(0.3, "rgba(200,200,190,0.1)"); g.addColorStop(1, "rgba(200,200,190,0)");
      c.fillStyle = g; c.fillRect(0, 0, W, B.yHz);
      /* long soft clouds, lit along their tops */
      c.save();
      try { c.filter = "blur(" + Math.round(3 * k) + "px)"; } catch (eF) {}
      for (i = 0; i < 6; i++) {
        var cy = B.yTop + (0.1 + r() * 0.42) * (B.yHz - B.yTop), cx = (i === 0 ? mx + 150 * k : r() * W), cw = (110 + r() * 220) * k, chh = (8 + r() * 8) * k;
        if (i > 0 && Math.abs(cx - mx) < 120 * k && Math.abs(cy - my) < 40 * k) cy += 70 * k;
        for (var j = 0; j < 5; j++) {
          var ex = cx + (j - 2) * cw * 0.32 + r() * 20 * k, ey = cy - Math.sin(j / 4 * Math.PI) * chh * 0.9, erx = cw * (0.28 + r() * 0.18), ery = chh * (0.7 + r() * 0.6);
          g = c.createLinearGradient(0, ey - ery, 0, ey + ery);
          g.addColorStop(0, "rgba(150,150,142,0.5)"); g.addColorStop(0.35, "rgba(40,40,38,0.75)"); g.addColorStop(1, "rgba(8,8,8,0.85)");
          c.fillStyle = g; ell(c, ex, ey, erx, ery);
        }
      }
      c.restore();
      /* the moon, and one thin wisp across it */
      c.fillStyle = "#f2f2ea"; disc(c, mx, my, mr);
      c.fillStyle = "rgba(150,150,140,0.3)"; disc(c, mx - mr * 0.3, my - mr * 0.15, mr * 0.28); disc(c, mx + mr * 0.25, my + mr * 0.3, mr * 0.2); disc(c, mx + mr * 0.35, my - mr * 0.35, mr * 0.12);
      c.save();
      try { c.filter = "blur(" + Math.round(2 * k) + "px)"; } catch (eG) {}
      c.fillStyle = "rgba(10,10,10,0.6)"; ell(c, mx + 10 * k, my + mr * 0.45, mr * 2.4, 4.5 * k, -0.06);
      c.fillStyle = "rgba(10,10,10,0.45)"; ell(c, mx - 30 * k, my + mr * 0.85, mr * 1.8, 3 * k, -0.04);
      c.restore();
      /* the dark ground beyond the track */
      g = c.createLinearGradient(0, B.yHz, 0, B.yRail);
      g.addColorStop(0, "#0b0b0b"); g.addColorStop(1, "#121212");
      c.fillStyle = g; c.fillRect(0, B.yHz, W, B.yRail - B.yHz + 2);
      /* the near embankment: cinders falling away toward us */
      g = c.createLinearGradient(0, B.yRail, 0, H);
      g.addColorStop(0, "#2a2a28"); g.addColorStop(0.08, "#1a1a19"); g.addColorStop(0.5, "#101010"); g.addColorStop(1, "#060606");
      c.fillStyle = g; c.fillRect(0, B.yRail + 4 * k, W, H - B.yRail);
      c.fillStyle = "rgba(255,255,255,0.05)"; c.fillRect(0, B.yGnd - 2 * k, W, 3 * k);
    };
  }
  /* the last car: its rear end, the platform deck, the end wall with the door, the side with its lit windows */
  function drawCar(B, W, H) {
    return function (c) {
      c.translate(-B.carOX, -B.carOY);
      var k = B.k, x0 = B.xCar0, xw = B.xWall, yp = B.yPlat, yr = B.yRoof, i, g;
      /* the car side */
      var sx = xw + 40 * k;
      g = c.createLinearGradient(0, yr, 0, yp + 18 * k);
      g.addColorStop(0, "#2a2a28"); g.addColorStop(0.5, "#1e1e1d"); g.addColorStop(1, "#141414");
      c.fillStyle = g; c.fillRect(sx, yr, W - sx + 4, yp + 18 * k - yr);
      c.fillStyle = "#3a3a38"; c.fillRect(sx, yp - 56 * k, W - sx + 4, 2 * k); c.fillRect(sx, yp - 120 * k, W - sx + 4, 1.5 * k);
      c.fillStyle = "#333331";
      for (i = sx + 10 * k; i < W; i += 9 * k) { c.fillRect(i, yp - 52 * k, 1.5 * k, 1.5 * k); c.fillRect(i, yp + 8 * k, 1.5 * k, 1.5 * k); }
      /* the windows: lit from inside, striped by their blinds */
      B.windows.forEach(function (wx, j) {
        var wy = yp - 112 * k, ww = 44 * k, wh = 46 * k, shade = j % 3 === 1 ? 0.45 : 0;
        c.fillStyle = "#0a0a0a"; c.fillRect(wx - 3 * k, wy - 3 * k, ww + 6 * k, wh + 6 * k);
        g = c.createLinearGradient(wx, wy, wx + ww, wy + wh);
        g.addColorStop(0, "#f0efe6"); g.addColorStop(1, "#b8b7ae");
        c.fillStyle = g; c.fillRect(wx, wy, ww, wh);
        c.fillStyle = "#4a4a46";
        for (var sy = wy + 3 * k; sy < wy + wh; sy += 4.2 * k) c.fillRect(wx, sy, ww, 1.6 * k);
        if (shade) { c.fillStyle = "#171716"; c.fillRect(wx, wy, ww, wh * shade); c.fillStyle = "#5a5a56"; c.fillRect(wx, wy + wh * shade - 1.5 * k, ww, 1.5 * k); }
        c.fillStyle = "#0a0a0a"; c.fillRect(wx + ww / 2 - 1 * k, wy, 2 * k, wh);
      });
      /* the end wall, seen a little from the side, with the door */
      g = c.createLinearGradient(xw, 0, xw + 40 * k, 0);
      g.addColorStop(0, "#3a3a37"); g.addColorStop(1, "#4e4e4a");
      c.fillStyle = g; c.fillRect(xw, yr, 40 * k, yp - yr + 2 * k);
      c.fillStyle = "#0a0a0a"; c.fillRect(xw + 39 * k, yr, 1.5 * k, yp + 18 * k - yr);
      var dx0 = B.doorX0, dx1 = B.doorX1, dy0 = B.doorY0;
      c.fillStyle = "#1a1a19"; c.fillRect(dx0 - 2 * k, dy0 - 2 * k, dx1 - dx0 + 4 * k, yp - dy0 + 2 * k);
      g = c.createLinearGradient(dx0, 0, dx1, 0);
      g.addColorStop(0, "#5a5a55"); g.addColorStop(1, "#46463f");
      c.fillStyle = g; c.fillRect(dx0, dy0, dx1 - dx0, yp - dy0);
      c.strokeStyle = "#2a2a28"; c.lineWidth = 1.2 * k; c.strokeRect(dx0 + 3 * k, yp - 54 * k, dx1 - dx0 - 6 * k, 46 * k);
      c.fillStyle = "#e6e5dc"; c.fillRect(B.winX0, B.winY0, B.winX1 - B.winX0, B.winY1 - B.winY0);
      c.fillStyle = "#3a3a36";
      for (var by = B.winY0 + 2 * k; by < B.winY1; by += 4 * k) c.fillRect(B.winX0, by, B.winX1 - B.winX0, 1.7 * k);
      c.fillStyle = "#8a8a84"; c.fillRect(dx0 + 3 * k, yp - 64 * k, 3.5 * k, 3 * k);
      /* the roof, running back over the platform as a canopy */
      c.fillStyle = "#121212";
      c.beginPath(); c.moveTo(x0 - 10 * k, yr + 4 * k); c.quadraticCurveTo(x0 - 10 * k, yr - 16 * k, x0 + 14 * k, yr - 18 * k); c.lineTo(W + 4, yr - 18 * k); c.lineTo(W + 4, yr + 4 * k); c.closePath(); c.fill();
      c.strokeStyle = "#a8a8a0"; c.lineWidth = 1.5 * k; c.beginPath(); c.moveTo(x0 - 9 * k, yr - 2 * k); c.quadraticCurveTo(x0 - 9 * k, yr - 16 * k, x0 + 14 * k, yr - 17 * k); c.lineTo(W + 4, yr - 17 * k); c.stroke();
      c.fillStyle = "#1a1a19"; c.fillRect(x0 - 10 * k, yr + 2 * k, xw - x0 + 10 * k, 5 * k);
      /* the corner post at the back and the tail lamp on it */
      c.fillStyle = "#0e0e0e"; c.fillRect(x0 - 2 * k, yr + 6 * k, 5 * k, yp - 48 * k - yr - 6 * k);
      c.fillStyle = "#8a8a84"; c.fillRect(x0 - 2.5 * k, yr + 6 * k, 1.2 * k, yp - 48 * k - yr - 6 * k);
      c.fillStyle = "#0e0e0e"; c.fillRect(B.lampX - 6 * k, B.lampY - 8 * k, 12 * k, 16 * k);
      g = c.createRadialGradient(B.lampX, B.lampY, 1, B.lampX, B.lampY, 7 * k);
      g.addColorStop(0, "#ffb0a0"); g.addColorStop(0.5, "#d0402e"); g.addColorStop(1, "#6a1410");
      c.fillStyle = g; disc(c, B.lampX, B.lampY, 4.6 * k);
      /* the deck, the underframe and the truck frames */
      c.fillStyle = "#0c0c0c"; c.fillRect(x0 - 6 * k, yp + 6 * k, W - x0 + 10, 12 * k);
      c.fillStyle = "#262624"; c.fillRect(x0 - 8 * k, yp - 1 * k, xw - x0 + 8 * k, 8 * k);
      c.fillStyle = "#b0b0a8"; c.fillRect(x0 - 8 * k, yp - 1.5 * k, xw - x0 + 8 * k, 1.4 * k);
      c.fillStyle = "#0a0a0a";
      fillPath(c, [[x0 + 30 * k, yp + 18 * k], [x0 + 60 * k, yp + 18 * k], [x0 + 52 * k, yp + 28 * k], [x0 + 38 * k, yp + 28 * k]]);   /* the step */
    };
  }
  /* the platform railing, drawn in front of the man (and hiding him when he ducks) */
  function drawRail(B, W, H) {
    return function (c) {
      c.translate(-B.railOX, -B.railOY);
      var k = B.k, x0 = B.xCar0 - 6 * k, x1 = B.xWall + 1 * k, yp = B.yPlat, top = yp - 50 * k, pan = yp - 30 * k, x;
      c.fillStyle = "#151515"; c.fillRect(x0, pan, x1 - x0, yp - pan + 2 * k);
      c.strokeStyle = "#4a4a46"; c.lineWidth = 1.2 * k; c.strokeRect(x0 + 4 * k, pan + 4 * k, x1 - x0 - 8 * k, yp - pan - 7 * k);
      c.fillStyle = "#4a4a46"; var mx = (x0 + x1) / 2, my = (pan + yp) / 2;
      fillPath(c, [[mx, my - 7 * k], [mx + 12 * k, my], [mx, my + 7 * k], [mx - 12 * k, my]]);
      c.fillStyle = "#151515"; fillPath(c, [[mx, my - 4 * k], [mx + 7 * k, my], [mx, my + 4 * k], [mx - 7 * k, my]]);
      for (x = x0 + 5 * k; x < x1; x += 9 * k) {
        c.fillStyle = "#121212"; c.fillRect(x, top, 2.4 * k, pan - top);
        c.fillStyle = "#6a6a64"; c.fillRect(x - 0.6 * k, top, 0.9 * k, pan - top);
      }
      c.fillStyle = "#121212"; c.fillRect(x0, top - 2 * k, x1 - x0, 5 * k);
      c.fillStyle = "#c8c8c0"; c.fillRect(x0, top - 2.5 * k, x1 - x0, 1.6 * k);
      c.fillStyle = "#121212"; c.beginPath(); c.arc(x0, top + 9 * k, 11 * k, Math.PI, Math.PI * 1.5); c.lineTo(x0, top + 3 * k); c.lineTo(x0 - 6 * k, top + 9 * k); c.closePath(); c.fill();
      c.fillRect(x0 - 11 * k, top + 9 * k, 5 * k, yp - top - 7 * k);
      c.fillStyle = "#9a9a92"; c.fillRect(x0 - 11.5 * k, top + 9 * k, 1.2 * k, yp - top - 7 * k);
    };
  }

  var DEF = {
    name: "The Last Car", kind: "noir jumping level", level: "noir level", act: "JUMP",
    how: "Night, the observation platform at the back of a moving train. Trackside markers rush past in the dark, each with a letter on its board and a pool of light at its foot. Jump off at the marker with the right answer: the ring on the cinders shows where a jump would land, so jump when the right marker is about to reach the ring, and come down in its pool of light. Walk along the platform (◀ ▶) to move the ring, and steer a little in the air. Telegraph poles whip past in the foreground: don't be in the air when one goes by. When you hear footsteps and see a shadow on the door's blinds, the conductor is coming out: duck below the railing, or stand in the dark corner beyond his light, until he goes back in.",
    rules: "Landing at a wrong letter costs a life, and that letter is crossed out from then on. So does flying into a telegraph pole, being seen by the conductor, or (from level 11) a signal arm catching you standing up. Landing between the markers costs no life: you climb back aboard and try again.",
    keys: "◀ ▶ or A / D walk along the platform (and steer in the air) · Space, ▲, W, JUMP or a left click or tap jumps · hold ▼, S or the right mouse button to duck · or point with the mouse to walk.",
    tip: "THE LAST CAR — jump off at the marker with the right letter. Mind the poles; duck when the conductor comes out.",
    hint1: "Jump off at the trackside marker with the right letter: land in its pool of light. The passage stays in the side panel.",
    hint2: "This question has two right letters. Jump off at both markers that carry them.",
    news: ["",
      "Signal masts: their arms swing past at head height. Duck (▼) as one goes by, or it knocks you down. The lamp on the mast flashes as it comes.",
      "Steam from the engine rolls back along the train and hides the markers for a moment.",
      "Rain: the platform is slick, and you slide a little when you stop walking.",
      "No more glow: the board a jump would land on no longer lights up. Watch the ring and the pools of light.",
      "The conductor brings a flashlight and sweeps the whole platform with it. The dark corner won't hide you now: duck.",
      "The landing ring no longer turns red when a pole is in the way. Watch the poles yourself.",
      "The car sways on the curves, and the landing ring sways with it.",
      "The conductor sometimes comes straight back out, with less warning.",
      "The last stop: the fastest train and the smallest pools of light, on top of everything else."],
    params: lastcarParams
  };

  M.extend("lastcar", DEF, {
    lastcarParams: function (n) { return lastcarParams(n); },

    setup_lastcar: function () {
      ensureLastcarArt(this);
      var P = lastcarParams(this.night), self = this, i;
      var S = this.lc = { P: P, t: 0, dist: 0, plans: [], marks: [], poles: [], sigs: [], puffs: [], drops: [], pool: { mark: [], pole: [], sig: [], puff: [] },
        lastMarkU: 0, nextPoleU: 0, nextSigU: 0, queue: [], dead: [], lastL: null, told: {}, hold: false,
        pl: { state: "plat", px: PLAT_W * 0.42, x: 0, y: 0, vx: 0, vy: 0, duck: false, rot: 0, res: null, t: 0, bonk: false },
        cond: { st: "in", t: 0, next: Math.min(P.condEvery, 9000 + P.condEvery * 0.25), seen: 0, caught: false, twice: false },
        fade: 0, fadeDir: 0, armed: false, jumpWas: false, lastFrame: -9, ptrT: null, lpx: null, lpy: null,
        narr: { text: "", shown: 0, t: 0 }, clackD: 0, puffCd: 1.5, hiPuffCd: 0.5, beamX: 0, bob: 0, hat: null,
        jumpsQ: 0, hitQ: false, jumps: 0, lands: 0, poleHits: 0, sigHits: 0, seenN: 0, hidN: 0, misses: 0, keyBack: null };
      this.cameras.main.setBackgroundColor("#050505");
      /* black and white: this scene's sparks and dust go grey while The Last Car plays (ModeScene's burst is shared) */
      var proto = Object.getPrototypeOf(this);
      this.burst = function (x, y, color, n) {
        var cc = color >>> 0, lum = Math.round(0.3 * ((cc >> 16) & 255) + 0.59 * ((cc >> 8) & 255) + 0.11 * (cc & 255)), gray = Math.min(255, lum + 70);
        try { this.dust.particleTint = (gray << 16) | (gray << 8) | gray; this.dust.emitParticleAt(x, y, Math.round((n || 14) * 1.3)); } catch (e) {}
      };
      this.events.once("shutdown", function () { delete self.burst; });
      S.back = this.add.image(0, 0, "__DEFAULT").setOrigin(0, 0).setDepth(0);
      S.far = this.add.tileSprite(0, 0, 16, 16, "md-lastcar-skyline").setOrigin(0, 1).setDepth(1);
      S.mid = this.add.tileSprite(0, 0, 16, 16, "md-lastcar-grove").setOrigin(0, 1).setDepth(1.5);
      S.trackG = this.add.graphics().setDepth(2);
      S.car = this.add.image(0, 0, "__DEFAULT").setOrigin(0, 0).setDepth(3);
      S.wheelG = this.add.graphics().setDepth(3.1);
      S.doorG = this.add.graphics().setDepth(3.2);
      S.condSpr = this.add.image(0, 0, "md-lastcar-cond").setOrigin(0.5, 1).setDepth(5.6).setVisible(false);
      S.lampGlow = this.add.image(0, 0, "md-lastcar-glow").setDepth(3.5).setBlendMode(1).setTint(DANGER);
      S.lantern = this.add.image(0, 0, "md-lastcar-glow").setDepth(5.7).setBlendMode(1).setVisible(false);
      S.winG = this.add.graphics().setDepth(4.8).setBlendMode(1);
      S.manSpr = this.add.image(0, 0, "md-lastcar-man").setOrigin(0.5, 1).setDepth(5);
      S.coneG = this.add.graphics().setDepth(5.5).setBlendMode(1);
      S.rail = this.add.image(0, 0, "__DEFAULT").setOrigin(0, 0).setDepth(6);
      S.poolG = this.add.graphics().setDepth(6.5).setBlendMode(1);
      S.glowG = this.add.graphics().setDepth(6.9);
      S.guideG = this.add.graphics().setDepth(8.5);
      S.wireG = this.add.graphics().setDepth(9.9);
      S.rainG = this.add.graphics().setDepth(11);
      S.uiG = this.add.graphics().setDepth(13);
      var cue = { fontFamily: SERIF, fontSize: 18, color: "#ffffff", fontStyle: "bold italic", stroke: "#000000", strokeThickness: 5 };
      S.cue = this.add.text(0, 0, "", cue).setOrigin(0.5, 1).setDepth(13.5).setVisible(false);
      S.doorCue = this.add.text(0, 0, "FOOTSTEPS…", cue).setOrigin(0.5, 1).setDepth(13.5).setVisible(false);
      S.ringTag = this.add.text(0, 0, "✕ POLE", { fontFamily: SERIF, fontSize: 13, color: "#ffd0c8", fontStyle: "bold", stroke: "#000000", strokeThickness: 4 }).setOrigin(0.5, 0).setDepth(13.5).setVisible(false);
      S.grain = this.add.tileSprite(0, 0, 16, 16, "md-lastcar-grain").setOrigin(0, 0).setDepth(20).setAlpha(0.5);
      S.vig = this.add.image(0, 0, "md-lastcar-vig").setOrigin(0, 0).setDepth(21);
      S.fxG = this.add.graphics().setDepth(22);
      S.boxG = this.add.graphics().setDepth(24);
      S.narrT = this.add.text(0, 0, "", { fontFamily: TYPE, fontSize: 14, color: "#e4e4dc", fontStyle: "bold" }).setOrigin(0, 0.5).setDepth(25);
      for (i = 0; i < 90; i++) S.drops.push({ x: Math.random(), y: Math.random(), l: rnd(0.6, 1.2) });
      this.lcLayout();
      this.makeSol(S.xCar0, S.yPlat - 60, "right").setVisible(false);   /* the man is drawn here; the sprite stays for coin pop-ups */
      S.lastMarkU = this.W / S.k + 60 - P.gap * 0.5;
      S.nextPoleU = this.W / S.k * 0.35; S.nextSigU = this.W / S.k + 500;
      /* poles already standing along the line when the story opens */
      this.lcPlan(this.W / S.k + 900);
      this.lcSpawnDue();
      try { var R = window.SolRealms; if (R && R.blip) { R.blip(620, 600, 0.7, "sine", 0.03); R.blip(780, 760, 0.7, "sine", 0.022); R.blip(620, 600, 0.9, "sine", 0.026, 0.85); R.blip(780, 760, 0.9, "sine", 0.02, 0.85); } } catch (e) {}
      this.lcSay(pick(VOICE.start));
      this.lcPlacePlayer();
      self.lcDrawStatic();
    },

    /* everything that depends on the canvas size */
    lcLayout: function () {
      var S = this.lc, W = this.W, H = this.H, k, i;
      k = S.k = clamp(Math.min(H / 520, W / 820), 0.55, 1.5);
      S.barB = Math.max(30, Math.round(40 * k)); S.barT = Math.max(10, Math.round(14 * k));
      S.yPlat = Math.round(Math.min(H * 0.6, H - S.barB - (DROP + 30) * k));
      S.yGnd = S.yPlat + DROP * k;
      S.yRail = S.yPlat + 34 * k; S.yHz = S.yRail - 6 * k; S.yRoof = S.yPlat - 150 * k; S.yTop = S.barT;
      S.xCar0 = Math.round(clamp(W * 0.22, 120 * k, 400));
      var pad = this.lcBox(".dpad"), act = this.lcBox("#btn-action");
      if (pad && pad.x0 < W * 0.35 && pad.y0 < S.yGnd + 30 * k) S.xCar0 = Math.max(S.xCar0, Math.round(pad.x1 + 70 * k));
      /* the narration keeps clear of the on-screen pad and the JUMP button */
      S.narrX0 = Math.round(16 * k); S.narrX1 = W - 16 * k;
      if (pad && pad.y1 > H - S.barB && pad.x0 < W * 0.4) S.narrX0 = Math.round(pad.x1 + 14);
      if (act && act.y1 > H - S.barB && act.x1 > W * 0.6) S.narrX1 = Math.round(act.x0 - 14);
      S.xWall = S.xCar0 + PLAT_W * k;
      S.doorX0 = S.xWall + 8 * k; S.doorX1 = S.xWall + 31 * k; S.doorY0 = S.yPlat - 118 * k;
      S.winX0 = S.doorX0 + 4 * k; S.winX1 = S.doorX1 - 4 * k; S.winY0 = S.yPlat - 108 * k; S.winY1 = S.yPlat - 68 * k;
      S.lampX = S.xCar0 - 1 * k; S.lampY = S.yRoof + 26 * k;
      S.moonX = Math.round(Math.max(W * 0.12, 70 * k)); S.moonY = Math.round(S.barT + Math.max(60 * k, (S.yRoof - S.barT) * 0.42));
      S.windows = []; for (i = S.xWall + 62 * k; i < W + 10; i += 66 * k) S.windows.push(i);
      S.trucks = []; for (i = S.xWall + 110 * k; i < W + 60 * k; i += 420 * k) S.trucks.push(i);
      S.walk0 = 16; S.walk1 = PLAT_W - 22;
      S.poleBase = S.yGnd + 40 * k; S.poleTop = S.barT + 26 * k;
      S.poleSy = (S.poleBase - S.poleTop) / (POLE_H - POLE_ARM);
      /* the car and the railing are drawn into textures cropped to their own boxes */
      S.carOX = Math.floor(S.xCar0 - 16 * k); S.carOY = Math.floor(S.yRoof - 24 * k);
      S.railOX = Math.floor(S.xCar0 - 22 * k); S.railOY = Math.floor(S.yPlat - 58 * k);
      var key = W + "x" + H + "-" + Math.round(k * 1000) + "-" + S.xCar0;
      if (S.key !== key) {
        var old = S.key;
        S.key = key;
        canvasTex(this, "md-lastcar-back-" + key, W, H, drawBack(S, W, H));
        canvasTex(this, "md-lastcar-car-" + key, Math.ceil(W - S.carOX + 2), Math.ceil(S.yPlat + 32 * k - S.carOY), drawCar(S, W, H));
        canvasTex(this, "md-lastcar-rail-" + key, Math.ceil(S.xWall + 6 * k - S.railOX), Math.ceil(S.yPlat + 4 * k - S.railOY), drawRail(S, W, H));
        S.back.setTexture("md-lastcar-back-" + key); S.car.setTexture("md-lastcar-car-" + key); S.rail.setTexture("md-lastcar-rail-" + key);
        if (old) { var self = this; ["back", "car", "rail"].forEach(function (n) { try { self.textures.remove("md-lastcar-" + n + "-" + old); } catch (e) {} }); }
      }
      S.far.setSize(W, 220 * k).setTileScale(k, k).setPosition(0, S.yHz + 2 * k).setAlpha(0.95);
      S.mid.setSize(W, 120 * k * 0.9).setTileScale(k * 0.9, k * 0.9).setPosition(0, S.yHz + 4 * k);
      S.grain.setSize(W, H);
      S.vig.setDisplaySize(W, H);
      S.lampGlow.setPosition(S.lampX, S.lampY).setScale(0.75 * k);
      var fs = Math.max(11, Math.round(12.5 * k));
      S.narrT.setFontSize(fs).setPosition(S.narrX0, H - S.barB / 2).setWordWrapWidth(Math.max(160, S.narrX1 - S.narrX0));
      S.cue.setFontSize(Math.max(14, Math.round(19 * k))); S.doorCue.setFontSize(Math.max(12, Math.round(15 * k)));
      S.ringTag.setFontSize(Math.max(11, Math.round(13 * k)));
      S.condSpr.setScale(k);
    },
    /* an on-screen control's box in canvas pixels (null when it is not shown) */
    lcBox: function (sel) {
      try {
        var pad = (sel === ".dpad" && document.querySelector("#controls .dpad")) || document.querySelector(sel), cv = this.game && this.game.canvas;
        if (!pad || !cv) return null;
        var a = pad.getBoundingClientRect(), c = cv.getBoundingClientRect();
        if (!a.width || !a.height || !c.width || !c.height) return null;
        var fx = this.W / c.width, fy = this.H / c.height;
        return { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
      } catch (e) { return null; }
    },
    /* the window light on the cinders: venetian-blind stripes thrown down from every lit window */
    lcDrawStatic: function () {
      var S = this.lc, k = S.k, g = S.winG, y0 = S.yRail + 6 * k, y1 = S.yGnd + 34 * k;
      g.clear();
      S.windows.forEach(function (wx, j) {
        var ww = 44 * k, sk = 30 * k, shade = j % 3 === 1 ? 0.45 : 0, ya = y0 + (y1 - y0) * shade;
        g.fillStyle(0xffffff, 0.06);
        g.fillPoints([{ x: wx + sk * 0.3, y: ya }, { x: wx + ww + sk * 0.3, y: ya }, { x: wx + ww + sk, y: y1 }, { x: wx + sk, y: y1 }], true);
        for (var y = ya + 3 * k; y < y1; y += 7 * k) {
          var f = (y - y0) / (y1 - y0), xa = wx + sk * (0.3 + 0.7 * f);
          g.fillStyle(0xffffff, 0.07); g.fillRect(xa, y, ww, 3.2 * k * (0.6 + f));
        }
      });
    },
    resize_lastcar: function () {
      var S = this.lc;
      this.lcLayout();
      this.lcDrawStatic();
      if (S.pl.state !== "plat") { S.pl.state = "plat"; S.fade = 0; S.fadeDir = 0; }
      var k = S.k;
      S.marks.forEach(function (o) { o.spr.setScale(k); o.label.setFontSize(Math.round(30 * k)); o.xm.setFontSize(Math.round(44 * k)); o.lamp.setScale(0.5 * k); });
      S.poles.forEach(function (o) { o.spr.setScale(k * 1.5, S.poleSy); });
      S.sigs.forEach(function (o) { o.spr.setScale(k); o.lamp.setScale(0.6 * k); });
      S.condSpr.setScale(k);
      this.lcMove(0, 0, S.P.speed * k);
      this.lcPlacePlayer();
    },

    /* ── what passes: markers (the letters), telegraph poles and signal masts, planned along the track ahead ── */
    lcV: function () { return this.lc.P.speed; },
    lcSpawnU: function () { var S = this.lc; return S.dist + this.W / S.k + 70; },
    lcPlan: function (uMax) {
      var S = this.lc, P = S.P, vT = P.speed * FLY_T, guard = 0;
      while (S.lastMarkU < uMax && guard++ < 50) {
        var m0 = S.lastMarkU, m1 = m0 + P.gap * rnd(1, 1.3);
        /* a signal arm must have passed the man a quarter second before a jump onto the next marker (never during it) */
        if (P.sigGap < 1e8 && S.nextSigU < m1) {
          var lo = m0 + 40, hi = m1 - vT - 0.25 * P.speed - 13, u = Math.max(S.nextSigU, lo);
          if (u <= hi) { S.plans.push({ u: u, kind: "sig" }); S.nextSigU = u + P.sigGap * rnd(0.75, 1.25); }
        }
        while (S.nextPoleU < m1 + 50) {
          var pu = S.nextPoleU;
          if (S.plans.some(function (q) { return q.kind === "sig" && Math.abs(q.u - pu) < 70; })) pu += 80;
          S.plans.push({ u: pu, kind: "pole" });
          S.nextPoleU = pu + P.poleGap * rnd(0.7, 1.3);
        }
        /* no pole may cross a jump that lands on this marker: one in the way moves on past it */
        S.plans.forEach(function (q) {
          if (q.kind === "pole" && q.u > m1 - vT - 30 && q.u < m1 + 50) { q.u = m1 + 50 + rnd(0, 30); S.nextPoleU = Math.max(S.nextPoleU, q.u + P.poleGap * 0.6); }
        });
        S.plans.push({ u: m1, kind: "mark" });
        S.lastMarkU = m1;
      }
      S.plans.sort(function (a, b) { return a.u - b.u; });
    },
    lcSpawnDue: function () {
      var S = this.lc, line = this.lcSpawnU();
      while (S.plans.length && S.plans[0].u <= line) {
        var p = S.plans.shift();
        if (p.kind === "mark") this.lcAddMark(p.u);
        else if (p.kind === "pole") this.lcAddPole(p.u);
        else this.lcAddSig(p.u);
      }
    },
    /* for the tests: stop the line ahead (and clear it), and put a marker, a pole or a signal at screen x */
    lcHold: function (on) {
      var S = this.lc, self = this;
      S.hold = !!on;
      if (on) { S.plans = []; S.marks.concat(S.poles, S.sigs).forEach(function (o) { self.lcFree(o); }); }
      else { var line = this.lcSpawnU(); S.lastMarkU = line - S.P.gap * 0.5; S.nextPoleU = line + 200; S.nextSigU = line + 300; }
    },
    lcPlace: function (kind, x, Lt) {
      var S = this.lc, u = S.dist + x / S.k;
      var o = kind === "mark" ? this.lcAddMark(u, Lt) : kind === "pole" ? this.lcAddPole(u) : this.lcAddSig(u);
      this.lcMove(0, 0, S.P.speed * S.k);
      return o;
    },
    lcGet: function (kind, tex, ox, oy, depth) {
      var o = this.lc.pool[kind].pop();
      if (!o) o = { spr: this.add.image(0, 0, tex).setOrigin(ox, oy).setDepth(depth) };
      o.spr.setVisible(true).setAlpha(1).clearTint();
      return o;
    },
    lcAddMark: function (u, Lt) {
      var S = this.lc, L0 = Lt || this.lcNextLetter();
      if (!L0 || !this.claim) return null;
      var o = this.lcGet("mark", "md-lastcar-post", 0.5, 1, 7);
      if (!o.label) {
        o.label = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 30, color: "#111111", fontStyle: "bold" }).setOrigin(0.5).setDepth(7.1);
        o.xm = this.add.text(0, 0, "✕", { fontFamily: SERIF, fontSize: 40, color: "#111111", fontStyle: "bold" }).setOrigin(0.5).setDepth(7.2);
        o.lamp = this.add.image(0, 0, "md-lastcar-glow").setDepth(7.3).setBlendMode(1);
      }
      o.u = u; o.L = L0; o.kind = "mark"; o.hl = 0;
      o.spr.setScale(S.k); o.label.setVisible(true).setFontSize(Math.round(30 * S.k)); o.xm.setFontSize(Math.round(44 * S.k)); o.lamp.setVisible(true).setScale(0.5 * S.k);
      S.marks.push(o);
      this.lcPaint(o, S.dead.indexOf(L0) !== -1 ? "dead" : this.extracted.indexOf(L0) !== -1 ? "found" : "live");
      this.lcTell("mark", "A marker with a letter is coming. Jump (Space or JUMP) so you come down in its pool of light: the ring on the cinders shows where you'd land.");
      return o;
    },
    lcAddPole: function (u) {
      var S = this.lc, o = this.lcGet("pole", "md-lastcar-pole", 0.5, 1, 10);
      o.u = u; o.kind = "pole"; o.passed = false; S.lastPoleU = Math.max(S.lastPoleU || -1e9, u);
      o.spr.setScale(S.k * 1.5, S.poleSy);
      S.poles.push(o);
      return o;
    },
    lcAddSig: function (u) {
      var S = this.lc, o = this.lcGet("sig", "md-lastcar-signal", SIG_MAST / SIG_W, 1, 7.5);
      if (!o.lamp) o.lamp = this.add.image(0, 0, "md-lastcar-glow").setDepth(7.6).setBlendMode(1);
      o.u = u; o.kind = "sig"; o.hit = false; o.rang = false; S.lastSigU = Math.max(S.lastSigU || -1e9, u);
      o.spr.setScale(S.k); o.lamp.setVisible(true).setScale(0.6 * S.k);
      S.sigs.push(o);
      this.lcTell("sig", "A signal mast! Its arm swings past at head height: hold ▼ (or S) to duck as it goes by.");
      return o;
    },
    lcFree: function (o) {
      var S = this.lc, list = o.kind === "mark" ? S.marks : o.kind === "pole" ? S.poles : S.sigs, i = list.indexOf(o);
      if (i !== -1) list.splice(i, 1);
      o.spr.setVisible(false);
      if (o.label) { o.label.setVisible(false); o.xm.setVisible(false); }
      if (o.lamp) o.lamp.setVisible(false);
      S.pool[o.kind].push(o);
    },
    lcX: function (o) { var S = this.lc; return (o.u - S.dist) * S.k; },
    /* the next letter to send: every letter not found yet comes round in turn (the wrong ones crossed out) */
    lcNextLetter: function () {
      var S = this.lc, self = this;
      var cand = this.choiceLetters().filter(function (Lx) { return self.extracted.indexOf(Lx) === -1; });
      if (!cand.length) return null;
      S.queue = S.queue.filter(function (Lx) { return cand.indexOf(Lx) !== -1; });
      if (!S.queue.length) {
        S.queue = shuffle(cand.slice());
        if (S.queue.length > 1 && S.queue[0] === S.lastL) S.queue.push(S.queue.shift());
      }
      S.lastL = S.queue.shift();
      return S.lastL;
    },
    lcPaint: function (o, state) {
      o.state = state;
      if (state === "dead") { o.spr.setTint(0x6a6a66); o.label.setText(o.L).setColor("#3a3a38"); o.xm.setVisible(true); }
      else if (state === "found") { o.spr.setTint(0xb8b8b0); o.label.setText("✓").setColor("#111111"); o.xm.setVisible(false); }
      else { o.spr.clearTint(); o.label.setText(o.L).setColor("#111111"); o.xm.setVisible(false); }
    },
    lcMarkLetter: function (Lt, state) {
      var self = this;
      this.lc.marks.forEach(function (o) { if (o.L === Lt) self.lcPaint(o, state); });
    },
    lcTell: function (key, msg, ms) {
      var S = this.lc;
      if (S.told[key]) return;
      S.told[key] = true;
      this.toast(msg, ms || 4600);
    },
    /* the narration in the bottom bar, typed out */
    lcSay: function (text) { var N = this.lc.narr; N.text = text; N.shown = 0; N.t = 0; },

    answers_lastcar: function () {
      var S = this.lc, self = this, line = this.lcSpawnU();
      S.marks.slice().forEach(function (o) { self.lcFree(o); });
      S.dead = []; S.queue = []; S.lastL = null;
      var P = S.P, vT = P.speed * FLY_T;
      S.plans = [];
      if (!S.hold) {
        /* the first marker comes soon, but never where a pole or a signal already standing would spoil the jump */
        S.lastMarkU = Math.max(line - P.gap * 0.55, (S.lastPoleU || -1e9) + vT + 60 - P.gap, (S.lastSigU || -1e9) + vT + 0.25 * P.speed + 30 - P.gap);
        S.nextPoleU = Math.max(line + 30, (S.lastPoleU || -1e9) + P.poleGap * 0.6);
        if (P.sigGap < 1e8) S.nextSigU = Math.max(S.nextSigU, line + 120);
      }
      S.jumpsQ = 0; S.hitQ = false;
      if (S.pl.state !== "plat") this.lcRespawn();
      S.armed = false;
    },
    clear_lastcar: function () {
      var S = this.lc;
      S.cond.st = "in"; S.cond.t = 0; S.cond.seen = 0; S.cond.next = Math.max(S.cond.next, 4000);
      S.condSpr.setVisible(false); S.lantern.setVisible(false);
    },

    /* ── the man ── */
    lcPlacePlayer: function () {
      var S = this.lc, pl = S.pl, k = S.k;
      if (pl.state === "plat") {
        pl.x = S.xCar0 + pl.px * k; pl.y = S.yPlat + S.bob;
        S.manSpr.setTexture(pl.duck ? "md-lastcar-duck" : "md-lastcar-man").setPosition(pl.x, pl.y + (pl.duck ? 2 * k : 0)).setRotation(0).setDepth(5).setScale(k);
      } else {
        S.manSpr.setPosition(pl.x, pl.y).setRotation(pl.rot).setScale(k);
      }
      this.blink(S.manSpr);
      if (this.player) this.player.setPosition(pl.x, pl.y - 70 * k);
    },
    /* where a jump made now would land (no steering) and how long it takes */
    lcLandX: function () {
      var S = this.lc, P = S.P, k = S.k, pl = S.pl;
      return pl.x + (DRIFT * k + this.lcSwayV()) * FLY_T;
    },
    lcSwayV: function () { var S = this.lc; return S.P.sway ? S.P.sway * S.k * Math.sin(S.t * 1.3) / FLY_T : 0; },
    /* what a jump made now would meet: the marker it lands on, and a pole in the way */
    lcPredict: function () {
      var S = this.lc, P = S.P, k = S.k, v = P.speed * k, xl = this.lcLandX(), x0 = S.pl.x, vx = (xl - x0) / FLY_T, self = this, out = { x: xl, mark: null, pole: null, T: FLY_T };
      S.marks.forEach(function (o) {
        var xm = self.lcX(o) - v * FLY_T;
        if (Math.abs(xm - xl) <= P.tol * k && (!out.mark || Math.abs(xm - xl) < out.d)) { out.mark = o; out.d = Math.abs(xm - xl); }
      });
      S.poles.concat(S.sigs).forEach(function (o) {
        var d0 = self.lcX(o) - x0, d1 = d0 - (v + vx) * FLY_T, w = (POLE_HW + MAN_HW) * k;
        if (d0 > -w && d1 < w) out.pole = o;
      });
      return out;
    },
    /* the screen x a marker must have now for a jump made now to land on it (for the tests) */
    lcJumpX: function () { var S = this.lc; return this.lcLandX() + S.P.speed * S.k * FLY_T; },
    lcJump: function () {
      var S = this.lc, pl = S.pl, k = S.k;
      if (pl.state !== "plat" || this._between || this._finishing || this.ended || !this.claim || S.fade > 0.35) return false;
      if (pl.duck) { this.lcTell("duckjump", "You can't jump while you're ducking. Let go of ▼ first.", 2600); return false; }
      pl.state = "air"; pl.y = S.yPlat; pl.vy = JUMP_VY * k; pl.sw = this.lcSwayV(); pl.vx = DRIFT * k + pl.sw; pl.t = 0; pl.bonk = false; pl.rot = 0;
      S.manSpr.setTexture("md-lastcar-leap").setDepth(9);
      S.jumps += 1; S.jumpsQ += 1;
      try { var R = window.SolRealms; if (R && R.hiss) { R.hiss(0.35, 2400, 0.05); R.blip(240, 120, 0.12, "triangle", 0.03); } } catch (e) {}
      return true;
    },
    lcRespawn: function () {
      var S = this.lc, pl = S.pl;
      pl.state = "plat"; pl.duck = false; pl.rot = 0; pl.vx = 0; pl.res = null; pl.bonk = false;
      pl.px = clamp(pl.px, S.walk0, S.walk1);
      S.fadeDir = -1; if (S.fade <= 0) S.fade = 0.0001;
      S.manSpr.setTexture("md-lastcar-man").setDepth(5).setRotation(0);
      if (S.hat && S.hat.ret) { try { S.hat.spr.destroy(); } catch (e) {} S.hat = null; }
      this.lcPlacePlayer();
    },
    /* he comes down on the cinders: on a marker's pool of light, or between them */
    lcLand: function () {
      var S = this.lc, P = S.P, k = S.k, pl = S.pl, self = this, best = null, bd = 1e9;
      pl.y = S.yGnd; pl.state = "ground"; pl.t = 0; S.lands += 1;
      S.manSpr.setDepth(8);
      try { var R = window.SolRealms; if (R && R.blip) { R.blip(110, 50, 0.16, "triangle", 0.07); R.hiss(0.18, 700, 0.04); } } catch (e) {}
      this.burst(pl.x, S.yGnd - 4 * k, 0xbdbdb5, 10);
      if (pl.bonk) { pl.res = "pole"; return "pole"; }
      S.marks.forEach(function (o) { var d = Math.abs(self.lcX(o) - pl.x); if (d <= P.tol * k && d < bd) { bd = d; best = o; } });
      if (!best) {
        pl.res = "miss"; S.misses += 1;
        this.lcSay(pick(VOICE.miss));
        this.lcTell("miss", "You came down between the markers: no life lost, but no answer either. Jump so the marker's pool of light meets the ring.", 4200);
        return "miss";
      }
      if (best.state !== "live") {
        pl.res = "miss";
        this.toast(best.state === "dead" ? "That letter is crossed out. Wait for another marker." : "You already found that letter. Jump at the other right one.", 2800);
        this.lcSay(pick(VOICE.miss));
        return "miss";
      }
      var clean = S.jumpsQ === 1 && !S.hitQ && !this.claimWrong;
      var res = this.answerPick(best.L, self.lcX(best), S.yGnd - 120 * k);
      pl.res = res;
      if (res === "wrong") {
        if (S.dead.indexOf(best.L) === -1) S.dead.push(best.L);
        this.lcMarkLetter(best.L, "dead");
        this.lcSay(pick(VOICE.wrong));
      } else if (res === "partial") {
        this.lcMarkLetter(best.L, "found");
        this.lcSay(pick(VOICE.found));
      } else if (res === "done") {
        this.lcMarkLetter(best.L, "found");
        this.lcSay(pick(VOICE.right));
        if (clean && !this.ended) this.awardBonusPoints(500, "One jump, right on the mark");
      }
      return res;
    },
    lcHatOff: function () {
      var S = this.lc, k = S.k;
      if (S.hat) { try { S.hat.spr.destroy(); } catch (e) {} }
      S.hat = { x: S.pl.x + 2 * k, y: S.pl.y - 104 * k, vx: -S.P.speed * k * 0.5, vy: -180 * k, r: 0, t: 0, ret: false,
        spr: this.add.image(0, 0, "md-lastcar-hat").setDepth(12).setScale(k) };
    },

    /* ── the frame ── */
    tick_lastcar: function (s, inp, ms) {
      var S = this.lc, P = S.P, k = S.k, W = this.W, pl = S.pl, i, self = this, frame = this.game && this.game.loop ? this.game.loop.frame : 0;
      if (frame > S.lastFrame + 1) S.armed = false;   /* frames went by without a tick (the reading pop-up): a key still held does not jump */
      S.lastFrame = frame;
      S.t += s;
      var v = P.speed * k;
      S.dist += P.speed * s;
      S.bob = Math.sin(S.t * 11) * 0.6 * k + (Math.sin(S.t * 1.7) > 0.97 ? 1 : 0) * k;

      /* the line ahead */
      if (!S.hold) { this.lcPlan(this.lcSpawnU() + 400); this.lcSpawnDue(); }

      /* input: jump on a press; duck held; walk (keys, or toward the pointer) */
      var p = this.ptr, rightHeld = !!(p.down && p.right);
      var jumpHeld = (!!inp.fire && !rightHeld) || inp.ay < 0, duckHeld = inp.ay > 0 || rightHeld;
      var moved = S.lpx != null && Math.abs(p.x - S.lpx) + Math.abs(p.y - S.lpy) > 2;
      if (inp.ax) S.ptrT = null; else if (moved || (p.down && !rightHeld)) S.ptrT = p.x;
      S.lpx = p.x; S.lpy = p.y;
      var ax = inp.ax;
      if (!ax && S.ptrT != null) {
        var tx = pl.state === "plat" ? clamp(S.ptrT, S.xCar0 + S.walk0 * k, S.xCar0 + S.walk1 * k) : S.ptrT;
        if (Math.abs(tx - pl.x) > 3 * k) ax = tx > pl.x ? 1 : -1;
      }
      if (!jumpHeld) S.armed = true;
      var press = jumpHeld && S.armed;
      if (press) S.armed = false;

      if (pl.state === "plat") {
        var wantDuck = duckHeld && S.fade < 0.5;
        if (wantDuck !== pl.duck) { pl.duck = wantDuck; if (wantDuck) this.lcTell("duck", "Ducked down behind the railing: nobody on the platform can see you, and a signal arm passes over you.", 3400); }
        var sp = WALK * (pl.duck ? 0.4 : 1), want = ax * sp, slip = P.slick ? 1 - P.slick : 1;
        pl.vx += (want - pl.vx) * Math.min(1, s * (2 + 16 * slip));
        pl.px = pl.px + pl.vx * s;
        if (pl.px < S.walk0) { pl.px = S.walk0; pl.vx = 0; } if (pl.px > S.walk1) { pl.px = S.walk1; pl.vx = 0; }
        if (press && S.fade < 0.35) this.lcJump();
      }
      if (pl.state === "air") {
        pl.t += s;
        pl.vx = pl.bonk ? -v : DRIFT * k + pl.sw + ax * P.airCtl * k;
        pl.vy += JUMP_G * k * s; pl.x += pl.vx * s; pl.y += pl.vy * s;
        pl.rot = pl.bonk ? pl.rot - 6 * s : clamp(pl.vy / (900 * k), -0.25, 0.35) * 0.4;
        if (!pl.bonk) {
          var w = (POLE_HW + MAN_HW) * k;
          S.poles.concat(S.sigs).forEach(function (o) {
            if (pl.bonk || Math.abs(self.lcX(o) - pl.x) >= w) return;
            pl.bonk = true; S.hitQ = true; S.poleHits += 1;
            self.burst(pl.x, pl.y - 60 * k, 0xffffff, 14);
            try { var R = window.SolRealms; if (R && R.blip) { R.blip(170, 70, 0.22, "square", 0.05); R.blip(90, 50, 0.3, "triangle", 0.06, 0.03); } } catch (e) {}
            self.loseLife("hit", o.kind === "pole" ? "YOU FLEW INTO A TELEGRAPH POLE" : "YOU FLEW INTO A SIGNAL MAST");
            self.lcSay(pick(VOICE.pole));
            self.lcHatOff();
          });
        }
        if (pl.y >= S.yGnd) this.lcLand();
      } else if (pl.state === "ground") {
        pl.t += s;
        pl.x -= v * s * (pl.res === "done" || pl.res === "partial" ? 1 : 1.04);
        if (pl.res === "done" || pl.res === "partial") { S.manSpr.setTexture("md-lastcar-duck"); pl.rot = 0; }
        else pl.rot -= 7 * s * Math.max(0, 1 - pl.t / 0.7);
        if (pl.t > 0.55 && S.fadeDir === 0) { S.fadeDir = 1; if (pl.res && pl.res !== "done") this.time.delayedCall(300, function () { if (S.pl.state !== "plat") self.lcSay(VOICE.again); }); }
      }
      /* the fade between tellings */
      if (S.fadeDir) {
        S.fade = clamp(S.fade + S.fadeDir * s / (S.fadeDir > 0 ? 0.45 : 0.4), 0, 1);
        if (S.fadeDir > 0 && S.fade >= 1) { S.fadeDir = 0; if (!this._between && pl.res !== "done") this.lcRespawn(); }
        else if (S.fadeDir < 0 && S.fade <= 0) S.fadeDir = 0;
      }

      /* the things along the track */
      this.lcMove(s, ms, v);
      if (this._finishing) return;
      this.lcConductor(s, ms);
      if (this._finishing) return;
      this.lcEffects(s, ms, v);
      this.lcPlacePlayer();
      this.lcDraw(s, v);
    },

    lcMove: function (s, ms, v) {
      var S = this.lc, P = S.P, k = S.k, pl = S.pl, self = this, W = this.W;
      S.marks.slice().forEach(function (o) {
        var x = self.lcX(o), y = S.yGnd;
        if (x < -80 * k) { self.lcFree(o); return; }
        o.spr.setPosition(x, y);
        var ly = y - (POST_H - BOARD_CY) * k;
        o.label.setPosition(x, ly + 1 * k); o.xm.setPosition(x, ly);
        o.lamp.setPosition(x, y - (POST_H - 9) * k).setAlpha(o.state === "live" ? 0.8 + 0.2 * Math.sin(S.t * 13 + o.u) : 0.25);
      });
      S.poles.slice().forEach(function (o) {
        var x = self.lcX(o);
        if (x < -P.poleGap * 1.4 * k) { self.lcFree(o); return; }
        o.spr.setPosition(x, S.poleBase);
        if (!o.passed && x < pl.x) {
          o.passed = true;
          if (x > -20) { try { var R = window.SolRealms; if (R && R.hiss) R.hiss(0.12, 3000, 0.022); } catch (e) {} }
        }
      });
      /* signal masts: the arm sweeps past at head height; ducked, it passes over */
      S.sigs.slice().forEach(function (o) {
        var x = self.lcX(o);
        if (x < -120 * k) { self.lcFree(o); return; }
        o.spr.setPosition(x, S.yGnd + 10 * k);
        var near = x - pl.x, warn = near > 0 && near < v * 1.2 + 80 * k;
        o.lamp.setPosition(x, S.yGnd + 10 * k - (SIG_H - 52) * k).setAlpha(warn ? (Math.floor(S.t * 8) % 2 ? 1 : 0.25) : 0.35);
        if (warn && !o.rang) { o.rang = true; try { var R = window.SolRealms; if (R && R.blip) { for (var j = 0; j < 4; j++) R.blip(1250, 1240, 0.09, "sine", 0.018, j * 0.22); } } catch (e) {} }
        var a0 = x - ARM_L * k, a1 = x + ARM_R * k;
        if (!o.hit && pl.state === "plat" && !pl.duck && S.fade < 0.5 && a1 > pl.x - 12 * k && a0 < pl.x + 12 * k) {
          o.hit = true;
          if (self.loseLife("hit", "A SIGNAL ARM CAUGHT YOU")) {
            S.sigHits += 1; S.hitQ = true;
            self.burst(pl.x, S.yPlat - 90 * k, 0xffffff, 12);
            self.lcSay(pick(VOICE.signal));
            self.lcHatOff();
            try { var R2 = window.SolRealms; if (R2 && R2.blip) R2.blip(300, 120, 0.2, "square", 0.04); } catch (e2) {}
          }
        }
      });
    },

    /* ── the conductor ── */
    lcInLight: function (x) {
      var S = this.lc, P = S.P, k = S.k, edge = S.xWall - P.reach * PLAT_W * k;
      if (x + 10 * k > edge) return true;
      if (P.beam && Math.abs(x - S.beamX) < 26 * k) return true;
      return false;
    },
    lcConductor: function (s, ms) {
      var S = this.lc, P = S.P, C = S.cond, k = S.k, pl = S.pl, self = this;
      var onPlat = pl.state === "plat" && S.fade < 0.5;
      if (this._between || (!onPlat && C.st === "in")) return;
      C.t += ms;
      if (C.st === "in") {
        if (C.t >= C.next) {
          C.st = "warn"; C.t = 0; C.step = 0; C.seen = 0; C.caught = false;
          if (!S.told.warnSay) { S.told.warnSay = true; this.lcSay(pick(VOICE.warn)); }
          this.lcTell("cond", "Footsteps behind the door: the conductor is coming out! Duck (▼) or step into the dark corner (◀) before the door opens.", 5200);
        }
      } else if (C.st === "warn") {
        if (C.t >= C.step) { C.step += 420; try { var R = window.SolRealms; if (R && R.blip) { R.blip(95, 70, 0.07, "triangle", 0.05); } } catch (e) {} }
        if (C.t >= (C.short ? Math.min(P.condWarn, 900) : P.condWarn)) {
          C.st = "out"; C.t = 0; C.short = false;
          S.condSpr.setTexture(P.beam ? "md-lastcar-condf" : "md-lastcar-cond").setVisible(true);
          try { var R2 = window.SolRealms; if (R2 && R2.blip) { R2.blip(320, 180, 0.35, "sawtooth", 0.018); R2.blip(140, 90, 0.08, "square", 0.03, 0.3); } } catch (e2) {}
          if (P.beam) this.lcTell("beam", "He's sweeping a flashlight over the whole platform. Only ducking (▼) hides you now.", 4200);
        }
      } else if (C.st === "out") {
        S.beamX = S.xWall - 20 * k - (0.5 - 0.5 * Math.cos(C.t / 1000 * 2.6)) * (PLAT_W - 20) * k;
        var exposed = onPlat && !pl.duck && this.lcInLight(pl.x);
        if (exposed && !C.caught) {
          C.seen += ms;
          if (C.seen >= P.condGrace) {
            C.seen = 0;
            if (this.loseLife("hit", "THE CONDUCTOR SAW YOU")) {
              C.caught = true; S.seenN += 1; S.hitQ = true;
              this.lcSay(pick(VOICE.seen));
              try { var R3 = window.SolRealms; if (R3 && R3.blip) R3.blip(520, 380, 0.25, "square", 0.03); } catch (e3) {}
              C.t = Math.max(C.t, P.condLook - 700);
            }
          }
        } else C.seen = Math.max(0, C.seen - ms * 2);
        if (C.t >= P.condLook) {
          C.st = "in"; C.t = 0;
          S.condSpr.setVisible(false); S.lantern.setVisible(false);
          try { var R4 = window.SolRealms; if (R4 && R4.blip) R4.blip(150, 100, 0.08, "square", 0.03); } catch (e4) {}
          if (!C.caught) { S.hidN += 1; if (S.hidN === 1 || Math.random() < 0.3) this.lcSay(pick(VOICE.hid)); }
          if (P.twice && Math.random() < P.twice && !C.again) { C.next = 1200; C.again = true; C.short = true; }
          else { C.next = P.condEvery * rnd(0.8, 1.2); C.again = false; }
        }
      }
    },
    /* force a visit now (for the tests) */
    lcConductorNow: function (phase) {
      var C = this.lc.cond;
      C.st = phase || "warn"; C.t = 0; C.step = 0; C.seen = 0; C.caught = false;
      if (C.st === "out") this.lc.condSpr.setTexture(this.lc.P.beam ? "md-lastcar-condf" : "md-lastcar-cond").setVisible(true);
      return C;
    },

    /* steam, rain, film grain and flicker */
    lcEffects: function (s, ms, v) {
      var S = this.lc, P = S.P, k = S.k, W = this.W, H = this.H, i;
      S.puffCd -= s; S.hiPuffCd -= s;
      /* the engine's smoke drifting back over the roof; from level 21 banks of steam roll low, over the boards */
      if (S.hiPuffCd <= 0) { S.hiPuffCd = rnd(1.4, 2.6); this.lcPuff(rnd(S.yRoof - 60 * k, S.yRoof - 24 * k), rnd(0.12, 0.2), 0.55, rnd(0.9, 1.4), 0, 2.2); }
      if (P.steam && S.puffCd <= 0) {
        S.puffCd = rnd(3, 5) * (1.3 - P.steam * 0.6);
        var n = 2 + (P.steam > 0.55 ? 1 : 0);
        for (i = 0; i < n; i++) this.lcPuff(S.yGnd - rnd(95, 135) * k, rnd(0.6, 0.8), 0.82, rnd(0.85, 1.2), i * 85 * k);
        this.lcTell("steam", "Steam from the engine rolls back over the track. A marker inside it comes out the other side: wait for it.", 4200);
      }
      S.puffs.slice().forEach(function (o) {
        o.x -= v * o.sp * s; o.y += o.vy * s;
        o.spr.setPosition(o.x, o.y).setScale(o.sc * k * (1 + (W - o.x) / W * 0.4));
        if (o.x < -200 * k) { o.spr.setVisible(false); S.puffs.splice(S.puffs.indexOf(o), 1); S.pool.puff.push(o); }
      });
      var g = S.rainG; g.clear();
      if (P.slick) {
        this.lcTell("rain", "Rain: the platform is slick. You slide a little when you stop walking.", 3600);
        g.lineStyle(1.2, 0xd8d8d0, 0.35);
        for (i = 0; i < S.drops.length; i++) {
          var d = S.drops[i];
          d.y += s * 1.6 * d.l; d.x -= s * 0.35 * d.l;
          if (d.y > 1) { d.y -= 1; d.x = Math.random() * 1.2; } if (d.x < -0.1) d.x += 1.2;
          var x = d.x * W, y = S.barT + d.y * (H - S.barT - S.barB), len = 16 * k * d.l;
          g.lineBetween(x, y, x - len * 0.3, y + len);
        }
      }
      S.grain.tilePositionX = Math.random() * 256; S.grain.tilePositionY = Math.random() * 256;
    },
    lcPuff: function (y, alpha, sp, sc, dx, depth) {
      var S = this.lc, o = S.pool.puff.pop();
      if (!o) o = { spr: this.add.image(0, 0, "md-lastcar-puff") };
      o.spr.setDepth(depth || 7.8);
      o.x = this.W + 120 * S.k + (dx || 0); o.y = y; o.vy = rnd(-6, 4) * S.k; o.sp = sp; o.sc = sc;
      o.spr.setVisible(true).setAlpha(alpha).setPosition(o.x, o.y).setScale(sc * S.k).setFlipX(Math.random() < 0.5);
      S.puffs.push(o);
    },

    /* ── drawing every frame ── */
    lcDraw: function (s, v) {
      var S = this.lc, P = S.P, k = S.k, W = this.W, H = this.H, pl = S.pl, C = S.cond, self = this, i, g;
      /* the distance: the skyline and the groves drift; the track runs */
      S.far.tilePositionX += v * 0.03 * s / k; S.mid.tilePositionX += v * 0.12 * s / (k * 0.9);
      S.car.setPosition(S.carOX, S.carOY + S.bob); S.rail.setPosition(S.railOX, S.railOY + S.bob); S.doorG.y = S.bob;
      S.lampGlow.setPosition(S.lampX, S.lampY + S.bob).setAlpha(0.75 + 0.1 * Math.sin(S.t * 5));
      g = S.trackG; g.clear();
      var yr = S.yRail, off = (S.dist * k) % (26 * k);
      g.fillStyle(0x1e1e1d, 1); g.fillRect(0, yr, W, 7 * k);
      g.fillStyle(0x0a0a0a, 1);
      for (i = -off; i < W; i += 26 * k) g.fillRect(i, yr + 1 * k, 12 * k, 6 * k);
      g.fillStyle(0x3a3a38, 1); g.fillRect(0, yr - 4 * k, W, 4 * k);
      g.fillStyle(0xb8b8b0, 0.85); g.fillRect(0, yr - 4 * k, W, 1.1 * k);
      /* the wheels turn */
      g = S.wheelG; g.clear();
      var ang = S.dist / 13;
      S.trucks.forEach(function (tx) {
        [-24, 24].forEach(function (dx) {
          var cx = tx + dx * k, cy = yr - 13 * k + S.bob * 0.3, r = 13 * k;
          g.fillStyle(0x0c0c0c, 1); g.fillCircle(cx, cy, r);
          g.lineStyle(1.6 * k, 0x8a8a84, 1); g.beginPath(); g.arc(cx, cy, r - 1 * k, Math.PI * 0.95, Math.PI * 1.75); g.strokePath();
          g.lineStyle(1, 0x3a3a38, 1); g.strokeCircle(cx, cy, r - 1 * k);
          g.lineStyle(1.6 * k, 0x2e2e2c, 1);
          for (var j = 0; j < 3; j++) { var a = ang + j * Math.PI / 3; g.lineBetween(cx - Math.cos(a) * r * 0.85, cy - Math.sin(a) * r * 0.85, cx + Math.cos(a) * r * 0.85, cy + Math.sin(a) * r * 0.85); }
          g.fillStyle(0x5a5a56, 1); g.fillCircle(cx, cy, 2.5 * k);
        });
        g.fillStyle(0x0e0e0e, 1); g.fillRect(tx - 42 * k, yr - 17 * k + S.bob * 0.3, 84 * k, 7 * k);
        g.fillStyle(0x4a4a46, 1); g.fillRect(tx - 42 * k, yr - 17 * k + S.bob * 0.3, 84 * k, 1.2 * k);
        g.fillStyle(0x0e0e0e, 1); g.fillRect(tx - 8 * k, S.yPlat + 16 * k + S.bob, 16 * k, yr - 17 * k - S.yPlat - 16 * k);
      });
      /* the door: the conductor's shadow grows on the blinds, then the doorway opens */
      g = S.doorG; g.clear();
      if (C.st === "warn") {
        var f = clamp(C.t / P.condWarn, 0, 1), cxs = (S.winX0 + S.winX1) / 2, sw = (S.winX1 - S.winX0);
        g.fillStyle(0x050505, 0.35 + 0.55 * f);
        g.fillEllipse(cxs, S.winY0 + 18 * k, sw * (0.5 + 0.3 * f), 16 * k * (0.7 + 0.4 * f));
        g.fillRect(cxs - sw * (0.25 + 0.15 * f), S.winY0 + 4 * k, sw * (0.5 + 0.3 * f), 7 * k);
        g.fillRect(cxs - sw * (0.38 + 0.12 * f), S.winY0 + 24 * k, sw * (0.76 + 0.24 * f), S.winY1 - S.winY0 - 24 * k);
        S.doorCue.setText(Math.floor(C.t / 420) % 2 ? "FOOTSTEPS…" : "FOOTSTEPS").setPosition((S.doorX0 + S.doorX1) / 2 + 20 * k, S.yRoof - 24 * k).setVisible(true).setAlpha(0.7 + 0.3 * Math.sin(S.t * 10));
      } else S.doorCue.setVisible(false);
      g = S.coneG; g.clear();
      if (C.st === "out") {
        var x0 = S.doorX0, x1 = S.doorX1, yp = S.yPlat + S.bob, edge = S.xWall - P.reach * PLAT_W * k;
        g.fillStyle(0xf4f2e6, 0.9); g.fillRect(x0, S.doorY0 + S.bob, x1 - x0, yp - S.doorY0);
        /* the light spilling out: faint in the air, bright on the deck, with a hard edge */
        var mid = (x0 + edge) / 2;
        g.fillStyle(0xf4f2e6, 0.06);
        g.fillPoints([{ x: x0, y: S.doorY0 + S.bob }, { x: x0, y: yp }, { x: edge, y: yp + 4 * k }, { x: edge, y: S.doorY0 - 16 * k + S.bob }], true);
        g.fillStyle(0xf4f2e6, 0.07);
        g.fillPoints([{ x: x0, y: S.doorY0 + 30 * k + S.bob }, { x: x0, y: yp }, { x: mid, y: yp + 2 * k }, { x: mid, y: S.doorY0 + 10 * k + S.bob }], true);
        g.fillStyle(0xf4f2e6, 0.3); g.fillRect(edge, yp - 3 * k, x0 - edge, 4 * k);
        g.lineStyle(1.5 * k, 0xffffff, 0.3); g.lineBetween(edge, S.doorY0 - 16 * k + S.bob, edge, yp + 4 * k);
        if (P.beam) {
          var hx = S.xWall - 18 * k - 34 * k, hy = yp - 76 * k, bx = S.beamX;
          g.fillStyle(0xffffff, 0.2);
          g.fillTriangle(hx, hy, bx - 30 * k, yp + 2 * k, bx + 30 * k, yp + 2 * k);
          g.fillStyle(0xffffff, 0.22); g.fillEllipse(bx, yp, 64 * k, 8 * k);
        }
        S.condSpr.setPosition(S.xWall - 18 * k, yp + 1 * k);
        if (!P.beam) S.lantern.setVisible(true).setPosition(S.xWall - 18 * k - 24 * k, yp - 40 * k).setScale(0.7 * k).setAlpha(0.8 + 0.15 * Math.sin(S.t * 17));
      }
      /* the marker pools of light, and the board a jump would land on */
      g = S.poolG; g.clear();
      var gg = S.glowG; gg.clear();
      var pred = pl.state === "plat" && !pl.duck && !this._between && S.fade < 0.35 ? this.lcPredict() : null;
      S.marks.forEach(function (o) {
        var x = self.lcX(o), live = o.state === "live", tw = P.tol * k;
        g.fillStyle(0xffffff, live ? 0.1 : 0.04); g.fillEllipse(x, S.yGnd, tw * 3.2, 18 * k);
        g.fillStyle(0xffffff, live ? 0.2 : 0.06); g.fillEllipse(x, S.yGnd, tw * 2, 10 * k);
        if (pred && P.guide && pred.mark === o) {
          var by = S.yGnd - (POST_H - BOARD_CY) * k;
          gg.fillStyle(0xffffff, 0.35 + 0.2 * Math.sin(S.t * 14)); gg.fillRect(x - 34 * k, by - 30 * k, 68 * k, 60 * k);
        }
      });
      /* the telegraph wires, sagging from pole to pole */
      g = S.wireG; g.clear();
      var xs = S.poles.map(function (o) { return self.lcX(o); });
      S.plans.forEach(function (pp) { if (pp.kind === "pole" && xs.length < 12) xs.push((pp.u - S.dist) * k); });
      xs.sort(function (a, b) { return a - b; });
      if (xs.length) {
        if (xs[0] > 0) xs.unshift(xs[0] - P.poleGap * k);
        if (xs[xs.length - 1] < W) xs.push(xs[xs.length - 1] + P.poleGap * k);
      }
      var wy = S.poleBase - (POLE_H - POLE_ARM + 8) * S.poleSy;
      g.lineStyle(1.2, 0x8a8a84, 0.55);
      for (i = 0; i + 1 < xs.length; i++) {
        var xa = xs[i], xb = xs[i + 1];
        if (xb < 0 || xa > W) continue;
        for (var wj = 0; wj < 3; wj++) {
          var ox = (-22 + wj * 16) * k, sag = (16 + (xb - xa) / k * 0.025) * k, prev = null;
          for (var t = 0; t <= 1.0001; t += 0.1) {
            var pt = { x: xa + ox + (xb - xa) * t, y: wy + wj * 1.5 * k + sag * 4 * t * (1 - t) };
            if (prev) g.lineBetween(prev.x, prev.y, pt.x, pt.y);
            prev = pt;
          }
        }
      }
      /* the landing ring and the dotted arc to it */
      g = S.guideG; g.clear();
      S.ringTag.setVisible(false);
      if (pred) {
        var lx = pred.x, bad = pred.pole && P.poleWarn, hit = pred.mark && P.guide, col = bad ? DANGER : 0xffffff;
        var pulse = 1 + 0.08 * Math.sin(S.t * 9);
        g.fillStyle(col, hit ? 0.28 : 0.12); g.fillEllipse(lx, S.yGnd, 34 * k * pulse, 10 * k * pulse);
        g.lineStyle(6 * k, 0x000000, 0.6); g.strokeEllipse(lx, S.yGnd, 34 * k * pulse, 10 * k * pulse);
        g.lineStyle((hit ? 3.4 : 2.4) * k, col, hit ? 1 : 0.9); g.strokeEllipse(lx, S.yGnd, 34 * k * pulse, 10 * k * pulse);
        if (bad) { S.ringTag.setText("✕ POLE").setPosition(lx, S.yGnd + 8 * k).setVisible(true); }
        var vx = (lx - pl.x) / FLY_T, vy0 = JUMP_VY * k;
        for (i = 3; i < 12; i += 1.5) {
          var tt = FLY_T * i / 12, px = pl.x + vx * tt, py = S.yPlat - 40 * k + vy0 * tt + 0.5 * JUMP_G * k * tt * tt;
          if (py > S.yGnd - 14 * k) break;
          g.fillStyle(0x000000, 0.55); g.fillCircle(px, py, 3.4 * k);
          g.fillStyle(col, 0.75); g.fillCircle(px, py, 2.2 * k);
        }
      }
      /* cues: DUCK! for a signal arm or the conductor's light */
      var cue = "";
      if (pl.state === "plat" && !pl.duck && S.fade < 0.5) {
        if (C.st === "out" && this.lcInLight(pl.x)) cue = "DUCK!";
        else if (C.st === "warn" && C.t > P.condWarn * 0.35) cue = this.lcInLight(pl.x) ? "HIDE!" : "";
        else if (P.guide || P.poleWarn) S.sigs.forEach(function (o) { var d = self.lcX(o) - ARM_R * k - (pl.x + 12 * k); if (d > 0 && d < v * 0.8) cue = "DUCK!"; });
      }
      if (cue) S.cue.setText(cue).setPosition(pl.x, S.yPlat - 112 * k + S.bob).setVisible(true).setColor(cue === "DUCK!" ? "#ffd8d0" : "#ffffff");
      else S.cue.setVisible(false);
      /* seen: an exclamation over him while the conductor's light is on him */
      g = S.uiG; g.clear();
      if (C.st === "out" && C.seen > 0) {
        var sf = clamp(C.seen / P.condGrace, 0, 1), ex = pl.x, ey = S.yPlat - 140 * k;
        g.fillStyle(0x000000, 0.7); g.fillCircle(ex, ey, 12 * k);
        g.lineStyle(3 * k, DANGER, 1); g.beginPath(); g.arc(ex, ey, 12 * k, -Math.PI / 2, -Math.PI / 2 + sf * TAU); g.strokePath();
        g.fillStyle(0xffffff, 1); g.fillRect(ex - 1.5 * k, ey - 7 * k, 3 * k, 9 * k); g.fillRect(ex - 1.5 * k, ey + 4 * k, 3 * k, 3 * k);
      }
      /* the knocked-off hat */
      if (S.hat) {
        var h = S.hat;
        h.t += s; h.vy += 900 * k * s; h.x += h.vx * s; h.y += h.vy * s; h.r -= 9 * s;
        if (h.y > S.yGnd - 4 * k) { h.y = S.yGnd - 4 * k; h.vy *= -0.3; h.vx = -v; }
        h.spr.setPosition(h.x, h.y).setRotation(h.r).setAlpha(clamp(2.2 - h.t, 0, 1));
        if (h.t > 2.2 || h.x < -60) { h.ret = true; try { h.spr.destroy(); } catch (e) {} S.hat = null; }
      }
      /* the film: flicker, the fade, the letterbox and the narration */
      g = S.fxG; g.clear();
      S.vig.setAlpha(0.88 + Math.random() * 0.12); S.grain.setAlpha(0.4 + Math.random() * 0.2 + (Math.random() < 0.03 ? 0.3 : 0));
      if (S.fade > 0) { g.fillStyle(0x000000, S.fade); g.fillRect(0, 0, W, H); }
      g = S.boxG; g.clear();
      g.fillStyle(0x000000, 1); g.fillRect(0, 0, W, S.barT); g.fillRect(0, H - S.barB, W, S.barB);
      g.fillStyle(0x3a3a38, 1); g.fillRect(0, H - S.barB, W, 1);
      var N = S.narr;
      if (N.text) {
        N.t += s;
        var want = Math.min(N.text.length, Math.floor(N.t * 48));
        if (want !== N.shown) { N.shown = want; S.narrT.setText(N.text.slice(0, want)); }
        S.narrT.setAlpha(clamp(1 - (N.t - (N.text.length / 48 + 5)) / 1.2, 0, 1));
      }
      /* the clatter of the rails */
      S.clackD += P.speed * s;
      if (S.clackD > 230) {
        S.clackD -= 230;
        try { var R = window.SolRealms; if (R && R.blip) { R.blip(85, 55, 0.05, "square", 0.01); R.blip(80, 50, 0.05, "square", 0.009, 0.09); } } catch (e) {}
      }
    }
  });
})();
