/* Draw the Odyssey emblem: node tools/make-odyssey-logo.js [--svg]
   Writes assets/logo/odyssey-labyrinth-512.png (512 × 512, clear outside the round emblem)
   and the favicons assets/logo/odyssey-favicon-32.png, -64.png and -180.png.
   The emblem is an SVG drawn here and rendered in headless Chromium (playwright):
   a Greek-key ring; a black-figure galley with a square sail on the wine-dark sea, under a
   rising sun whose rays are the rings of a labyrinth; "THE ODYSSEY" and "LABYRINTH OF THE
   WINE-DARK SEA" in ochre and terracotta on black glaze. --svg also saves the SVG beside it. */
var fs = require("fs"), path = require("path");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var root = path.join(__dirname, ".."), out = path.join(root, "assets", "logo");

var COL = { glaze: "#140c0a", glaze2: "#24140f", terra: "#d9772b", ochre: "#e8b04a", bone: "#efe6d2", wine: "#3a0f2a", wine2: "#24081a", sea: "#1e5f8c", foam: "#9fd3d6" };
var CX = 256, CY = 256;
var FONT = "'Cinzel', 'Trajan Pro', 'Bitstream Charter', Georgia, 'Palatino Linotype', 'FreeSerif', serif";
function f(n) { return Math.round(n * 100) / 100; }
function pol(a, r) { return [CX + Math.cos(a) * r, CY + Math.sin(a) * r]; }

/* A Greek key bent round a ring: the key is drawn in a flat (u, v) box (u along the ring,
   v from the outer edge in) and every point is mapped onto the circle. */
function meanderRing(rOut, rIn, units) {
  var key = [[[0, 0.82], [0.69, 0.82], [0.69, 0.18], [0.12, 0.18], [0.12, 0.64], [0.5, 0.64], [0.5, 0.38], [0.33, 0.38]]];
  var base = [[0, 0.82], [1, 0.82]];
  var d = "", i, u0, du = 1 / units;
  function map(u, v) { var a = -Math.PI / 2 + u * Math.PI * 2, r = rOut - (rOut - rIn) * v; return pol(a, r); }
  function seg(pts) {
    var s = "", k, j;
    for (k = 0; k < pts.length - 1; k++) {
      var p0 = pts[k], p1 = pts[k + 1], steps = Math.abs(p1[1] - p0[1]) < 1e-6 ? 8 : 1;
      for (j = (k ? 1 : 0); j <= steps; j++) {
        var t = j / steps, q = map(p0[0] + (p1[0] - p0[0]) * t, p0[1] + (p1[1] - p0[1]) * t);
        s += (k === 0 && j === 0 ? "M" : "L") + f(q[0]) + " " + f(q[1]) + " ";
      }
    }
    return s;
  }
  for (i = 0; i < units; i++) {
    u0 = i * du;
    key.forEach(function (pts) { d += seg(pts.map(function (q) { return [u0 + q[0] * du, q[1]]; })); });
    d += seg(base.map(function (q) { return [u0 + q[0] * du, q[1]]; }));
  }
  return d;
}

/* The sun's rays: the rings of a round labyrinth, each ring broken by one gate, with
   short walls joining ring to ring — clipped to the sky above the horizon. */
function labyrinthRays(cx, cy) {
  var s = "", rings = [92, 116, 140, 164, 188, 212], gates = [-1.2, -2.2, -0.55, -2.65, -1.65, -0.95], i;
  for (i = 0; i < rings.length; i++) {
    var r = rings[i], g = gates[i], w = 0.22 * 92 / r * 1.4;
    var a0 = Math.PI + 0.02, a1 = Math.PI * 2 - 0.02;
    [[a0, g - w], [g + w, a1]].forEach(function (span) {
      if (span[1] <= span[0]) return;
      var p0 = [cx + Math.cos(span[0]) * r, cy + Math.sin(span[0]) * r], p1 = [cx + Math.cos(span[1]) * r, cy + Math.sin(span[1]) * r];
      s += "M" + f(p0[0]) + " " + f(p0[1]) + " A" + r + " " + r + " 0 0 1 " + f(p1[0]) + " " + f(p1[1]) + " ";
    });
    if (i < rings.length - 1) {
      var aw = (gates[i] + gates[i + 1]) / 2 + (i % 2 ? 0.35 : -0.35);
      s += "M" + f(cx + Math.cos(aw) * r) + " " + f(cy + Math.sin(aw) * r) + " L" + f(cx + Math.cos(aw) * rings[i + 1]) + " " + f(cy + Math.sin(aw) * rings[i + 1]) + " ";
    }
  }
  /* straight rays between the rings' gates, like sunbeams */
  for (i = 0; i < 9; i++) {
    var a = Math.PI + (i + 0.5) / 9 * Math.PI;
    s += "M" + f(cx + Math.cos(a) * 224) + " " + f(cy + Math.sin(a) * 224) + " L" + f(cx + Math.cos(a) * 252) + " " + f(cy + Math.sin(a) * 252) + " ";
  }
  return s;
}

/* a straight Greek key from x0 to x1, top at y, h tall, units of w */
function meanderBand(x0, x1, y, h, w) {
  var d = "M" + x0 + " " + y + " H" + x1 + " M" + x0 + " " + (y + h) + " H" + x1 + " ", x;
  for (x = x0; x < x1 - w; x += w) {
    var k = function (u, v) { return f(x + u * w) + " " + f(y + v * h); };
    d += "M" + k(0, 0.8) + " L" + k(0.7, 0.8) + " L" + k(0.7, 0.2) + " L" + k(0.15, 0.2) + " L" + k(0.15, 0.62) + " L" + k(0.5, 0.62) + " L" + k(0.5, 0.42) + " M" + k(0.7, 0.8) + " L" + k(1, 0.8) + " ";
  }
  return d;
}

function galley() {
  var g = "";
  var HY = 262;   /* the waterline */
  /* oars, dipping into the sea */
  var oars = "";
  for (var i = 0; i < 11; i++) { var x = 176 + i * 15.5; oars += "M" + x + " " + (HY - 6) + " L" + (x - 16) + " " + (HY + 30) + " "; }
  g += '<path d="' + oars + '" stroke="' + COL.glaze + '" stroke-width="3.2" stroke-linecap="round"/>';
  /* hull: a long low black-figure ship, the ram low at the bow (right), the stern curling up (left) */
  g += '<path d="M118 228 C120 246 140 260 170 262 L352 262 C366 262 378 260 392 266 L404 268 L394 256 C384 250 376 246 372 238 L360 238 L168 240 C150 240 136 232 130 214 C127 205 132 196 140 197 C147 198 147 207 141 208 C137 209 135 204 137 202" fill="' + COL.glaze + '" stroke="' + COL.glaze + '" stroke-width="4" stroke-linejoin="round"/>';
  /* incised lines: the rail, the planking, a row of shields */
  g += '<path d="M166 246 L362 245 M172 254 L350 254" stroke="' + COL.terra + '" stroke-width="1.6" fill="none"/>';
  for (i = 0; i < 9; i++) g += '<circle cx="' + (186 + i * 20) + '" cy="238" r="6.2" fill="' + COL.glaze + '" stroke="' + COL.ochre + '" stroke-width="1.6"/>';
  /* the eye on the prow */
  g += '<path d="M366 247 Q373 241 381 247 Q373 252 366 247 Z" fill="' + COL.bone + '"/><circle cx="373.5" cy="247" r="2.3" fill="' + COL.glaze + '"/>';
  /* the stern ornament */
  g += '<path d="M131 214 C124 196 126 184 136 180" stroke="' + COL.glaze + '" stroke-width="5" fill="none" stroke-linecap="round"/>';
  /* mast, yard and the square sail */
  g += '<path d="M262 238 L262 92" stroke="' + COL.glaze + '" stroke-width="6" stroke-linecap="round"/>';
  g += '<path d="M190 112 Q262 100 334 112" stroke="' + COL.glaze + '" stroke-width="6" fill="none" stroke-linecap="round"/>';
  g += '<path d="M196 116 Q262 106 328 116 L322 196 Q262 206 202 196 Z" fill="' + COL.glaze + '"/>';
  var seams = "";
  for (i = 1; i < 6; i++) { var sx = 196 + i * 22; seams += "M" + sx + " " + (113 - Math.sin(i / 6 * Math.PI) * 6) + " L" + (sx + (sx < 262 ? 1 : -1) * 1.5) + " " + (198 + Math.sin(i / 6 * Math.PI) * 6) + " "; }
  g += '<path d="' + seams + '" stroke="' + COL.terra + '" stroke-width="1.4" fill="none"/>';
  g += '<path d="M200 150 Q262 160 324 150" stroke="' + COL.terra + '" stroke-width="1.4" fill="none"/>';
  /* stays */
  g += '<path d="M262 94 L132 186 M262 94 L384 238" stroke="' + COL.glaze + '" stroke-width="1.8"/>';
  return g;
}

function waves(y0, y1) {
  var s = "", row, x;
  for (row = 0; row < 3; row++) {
    var y = y0 + 12 + row * ((y1 - y0 - 16) / 3), off = row % 2 ? 14 : 0;
    for (x = 40 + off; x < 480; x += 28) s += "M" + x + " " + f(y) + " q7 -8 14 0 t14 0 ";
  }
  return s;
}

function svg() {
  var R = 252, RING_IN = 226, H = 230, SEA = 56;   /* outer radius, inside of the key ring, horizon */
  var s = '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">';
  s += "<defs>";
  s += '<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b85a1c"/><stop offset=".55" stop-color="' + COL.terra + '"/><stop offset="1" stop-color="#eba052"/></linearGradient>';
  s += '<radialGradient id="sun" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff2c8"/><stop offset=".7" stop-color="#f6cf72"/><stop offset="1" stop-color="' + COL.ochre + '"/></radialGradient>';
  s += '<linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a1436"/><stop offset="1" stop-color="' + COL.wine2 + '"/></linearGradient>';
  s += '<radialGradient id="glaze" cx=".5" cy=".35" r=".7"><stop offset="0" stop-color="#2a1812"/><stop offset="1" stop-color="' + COL.glaze + '"/></radialGradient>';
  s += '<clipPath id="field"><circle cx="256" cy="256" r="' + (RING_IN - 6) + '"/></clipPath>';
  s += '<clipPath id="skyclip"><rect x="0" y="0" width="512" height="' + H + '"/></clipPath>';
  var a0 = Math.PI * 5 / 6, a1 = Math.PI / 6, rr = 200;
  s += '<path id="arcLow" d="M' + f(CX + rr * Math.cos(a0)) + " " + f(CY + rr * Math.sin(a0)) + " A" + rr + " " + rr + " 0 0 0 " + f(CX + rr * Math.cos(a1)) + " " + f(CY + rr * Math.sin(a1)) + '"/>';
  s += '<filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="6"/></filter>';
  s += "</defs>";
  /* the plate: black glaze, an ochre rim */
  s += '<circle cx="256" cy="256" r="' + R + '" fill="url(#glaze)"/>';
  s += '<circle cx="256" cy="256" r="' + (R - 2) + '" fill="none" stroke="' + COL.ochre + '" stroke-width="3"/>';
  s += '<path d="' + meanderRing(R - 7, RING_IN + 3, 40) + '" fill="none" stroke="' + COL.ochre + '" stroke-width="3" stroke-linejoin="miter" stroke-linecap="square"/>';
  s += '<circle cx="256" cy="256" r="' + RING_IN + '" fill="none" stroke="' + COL.ochre + '" stroke-width="2.5"/>';
  /* the field */
  s += '<g clip-path="url(#field)">';
  s += '<rect x="0" y="0" width="512" height="' + H + '" fill="url(#sky)"/>';
  s += '<g clip-path="url(#skyclip)">';
  s += '<circle cx="256" cy="' + H + '" r="96" fill="#ffd98a" opacity=".45" filter="url(#soft)"/>';
  s += '<path d="' + labyrinthRays(256, H) + '" fill="none" stroke="#fadc9c" stroke-width="5.5" stroke-linecap="round"/>';
  s += '<circle cx="256" cy="' + H + '" r="80" fill="url(#sun)" stroke="#f9e2a8" stroke-width="3"/>';
  s += "</g>";
  s += '<rect x="0" y="' + H + '" width="512" height="' + SEA + '" fill="url(#sea)"/>';
  s += '<path d="' + waves(H, H + SEA) + '" fill="none" stroke="' + COL.terra + '" stroke-width="2.2" stroke-linecap="round" opacity=".75"/>';
  s += '<rect x="0" y="' + (H + SEA) + '" width="512" height="240" fill="url(#glaze)"/>';
  s += '<path d="M20 ' + (H + SEA + 1) + ' H492" stroke="' + COL.ochre + '" stroke-width="2.5"/>';
  /* a straight key band under the sea */
  s += '<path d="' + meanderBand(20, 492, H + SEA + 9, 14, 17) + '" fill="none" stroke="' + COL.terra + '" stroke-width="2" stroke-linecap="square"/>';
  s += '<g transform="translate(262 ' + (H - 1) + ') scale(0.82) translate(-262 -262)">' + galley() + "</g>";
  s += "</g>";
  /* the title, and the subtitle round the lower rim */
  s += '<text x="256" y="372" text-anchor="middle" font-family="' + FONT + '" font-weight="700" font-size="45" letter-spacing="3" textLength="318" lengthAdjust="spacingAndGlyphs" fill="' + COL.ochre + '">THE ODYSSEY</text>';
  s += '<text font-family="' + FONT + '" font-weight="700" font-size="14" letter-spacing="2.2" fill="' + COL.terra + '"><textPath href="#arcLow" startOffset="50%" text-anchor="middle">LABYRINTH OF THE WINE-DARK SEA</textPath></text>';
  /* small ochre diamonds either end of the subtitle */
  [[96, 384], [408, 384]].forEach(function (q) { s += '<path d="M' + q[0] + " " + q[1] + ' l4 -4 l4 4 l-4 4 z" fill="' + COL.ochre + '"/>'; });
  s += "</svg>";
  return s;
}

/* the favicons: the same plate made simple — sun, sea and ship, big, no words or fine rings */
function iconSvg(withText) {
  if (withText) return svg();
  var H = 300, s = '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">';
  s += "<defs>";
  s += '<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b85a1c"/><stop offset=".6" stop-color="' + COL.terra + '"/><stop offset="1" stop-color="#eba052"/></linearGradient>';
  s += '<radialGradient id="sun" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff2c8"/><stop offset=".7" stop-color="#f6cf72"/><stop offset="1" stop-color="' + COL.ochre + '"/></radialGradient>';
  s += '<clipPath id="disc"><circle cx="256" cy="256" r="232"/></clipPath>';
  s += "</defs>";
  s += '<circle cx="256" cy="256" r="254" fill="' + COL.glaze + '"/>';
  s += '<g clip-path="url(#disc)">';
  s += '<rect x="0" y="0" width="512" height="' + H + '" fill="url(#sky)"/>';
  s += '<circle cx="256" cy="' + H + '" r="118" fill="url(#sun)"/>';
  s += '<rect x="0" y="' + H + '" width="512" height="240" fill="' + COL.wine + '"/>';
  s += '<path d="' + waves(H + 20, H + 150) + '" fill="none" stroke="' + COL.terra + '" stroke-width="6" stroke-linecap="round"/>';
  s += '<g transform="translate(256 ' + (H + 4) + ') scale(1.3) translate(-262 -262)">' + galley() + "</g>";
  s += "</g>";
  s += '<circle cx="256" cy="256" r="240" fill="none" stroke="' + COL.ochre + '" stroke-width="18"/>';
  return s + "</svg>";
}

(async function () {
  var code = svg();
  if (process.argv.indexOf("--svg") !== -1) fs.writeFileSync(path.join(out, "odyssey-labyrinth.svg"), code);
  var browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }).catch(function () { return chromium.launch(); });
  var page = await browser.newPage({ viewport: { width: 512, height: 512 } });
  await page.setContent('<!doctype html><html><body style="margin:0;background:transparent">' + code + "</body></html>");
  await page.waitForTimeout(150);
  var big = path.join(out, "odyssey-labyrinth-512.png");
  await page.screenshot({ path: big, omitBackground: true, clip: { x: 0, y: 0, width: 512, height: 512 } });
  /* favicons: the full emblem for the 180 px touch icon; a bold, simple plate for 64 and 32 px */
  for (var sz of [180, 64, 32]) {
    await page.setViewportSize({ width: sz, height: sz });
    var scaled = iconSvg(sz >= 180).replace('width="512" height="512"', 'width="' + sz + '" height="' + sz + '"');
    await page.setContent('<!doctype html><html><body style="margin:0;background:transparent">' + scaled + "</body></html>");
    await page.waitForTimeout(80);
    await page.screenshot({ path: path.join(out, "odyssey-favicon-" + sz + ".png"), omitBackground: true, clip: { x: 0, y: 0, width: sz, height: sz } });
  }
  await browser.close();
  console.log("wrote " + path.relative(root, big) + " and odyssey-favicon-32/64/180.png");
})().catch(function (e) { console.error(e); process.exit(1); });
