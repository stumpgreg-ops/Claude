#!/usr/bin/env python3
"""Teacher's annotated copy of "The Lotus Eaters" (Odyssey, Unit 2 Lesson 3) for 9.RL.1.A.

Writes, next to this file:
  annotated-page.svg                    the annotated passage (one Letter page)
  LotusEaters-TeacherCopy-print.html    page 1 = annotated passage, pages 2+ = teacher key
  LotusEaters-TeacherCopy-9RL1A.pdf     the print file (needs Chromium)
  LotusEaters-Annotated.png             the annotated page as a picture (upload to Canvas Files)
  LotusEaters-Canvas-Embed.html         paste into the Canvas HTML editor

The margin notes are drawn as pen strokes (Caveat glyph outlines turned into SVG paths), so
they look handwritten without the font installed. The passage stays real text; every word
carries its measured x and textLength, so the highlights and circles line up whichever serif
font the browser substitutes.

Usage: python3 build.py [--image-url URL] [path-to-chrome]
  --image-url  the link to LotusEaters-Annotated.png once it is uploaded to Canvas Files; without it the
               Canvas page carries the placeholder REPLACE-WITH-CANVAS-IMAGE-LINK to swap by hand.
"""
import html
import math
import random
import subprocess
import sys
from pathlib import Path

from fontTools.pens.basePen import BasePen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

HERE = Path(__file__).resolve().parent
FONTS = HERE / "fonts"
W, H = 816, 1056  # US Letter at 96 px per inch

INK = {
    "leader": "#c2185b",   # pink: Odysseus acting as a hero / leader
    "event": "#c62828",    # red circle: major event
    "setting": "#1565c0",  # blue: setting detail
    "theme": "#6a1b9a",    # purple underline: theme clue
    "clarify": "#2e7d32",  # green star: clarifying / explaining
    "plain": "#263238",
}
FILL = {"leader": "#ff8ac4", "setting": "#8fd0ff"}
SERIF = "Georgia, Gelasio, 'Times New Roman', Times, serif"


def num(v):
    s = f"{v:.1f}"
    return s[:-2] if s.endswith(".0") else s


# ---------------------------------------------------------------- fonts

class Font:
    def __init__(self, name):
        self.tt = TTFont(FONTS / name)
        self.upm = self.tt["head"].unitsPerEm
        self.cmap = self.tt.getBestCmap()
        self.hmtx = self.tt["hmtx"]
        self.glyphs = self.tt.getGlyphSet()

    def gname(self, ch):
        return self.cmap.get(ord(ch)) or self.cmap[ord("?")]

    def width(self, s, size):
        return sum(self.hmtx[self.gname(c)][0] for c in s) * size / self.upm

    def draw(self, pen, s, size, x, y):
        k = size / self.upm
        for c in s:
            g = self.gname(c)
            self.glyphs[g].draw(TransformPen(pen, (k, 0, 0, -k, x, y)))
            x += self.hmtx[g][0] * k
        return x


SERIF_FONT = Font("Gelasio-Regular.ttf")  # metric-compatible with Georgia
HAND = Font("Caveat-Medium.ttf")
HAND_BOLD = Font("Caveat-Bold.ttf")

rng = random.Random(9)


def rdp(pts, eps):
    """Ramer-Douglas-Peucker simplification of a polyline."""
    if len(pts) < 3:
        return pts
    (x0, y0), (x1, y1) = pts[0], pts[-1]
    dx, dy = x1 - x0, y1 - y0
    ln = math.hypot(dx, dy)
    best, idx = -1, 0
    for i in range(1, len(pts) - 1):
        px, py = pts[i]
        d = abs(dy * (px - x0) - dx * (py - y0)) / ln if ln else math.hypot(px - x0, py - y0)
        if d > best:
            best, idx = d, i
    if best <= eps:
        return [pts[0], pts[-1]]
    return rdp(pts[:idx + 1], eps)[:-1] + rdp(pts[idx:], eps)


class FlatPen(BasePen):
    """Collects glyph outlines as simplified polygons and writes a compact SVG path.
    Caveat's curves are dense; flattening to 0.1 px keeps the pen look at a fraction of the size."""

    def __init__(self, glyphs, eps=0.1):
        super().__init__(glyphs)
        self.eps, self.contours, self.cur = eps, [], None

    def _moveTo(self, p):
        self.cur = [p]

    def _lineTo(self, p):
        self.cur.append(p)

    def _curveToOne(self, p1, p2, p3):
        p0 = self.cur[-1]
        for k in range(1, 9):
            t = k / 8
            a, b, c, d = (1 - t) ** 3, 3 * t * (1 - t) ** 2, 3 * t * t * (1 - t), t ** 3
            self.cur.append((a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0], a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1]))

    def _qCurveToOne(self, p1, p2):
        p0 = self.cur[-1]
        for k in range(1, 7):
            t = k / 6
            a, b, c = (1 - t) ** 2, 2 * t * (1 - t), t * t
            self.cur.append((a * p0[0] + b * p1[0] + c * p2[0], a * p0[1] + b * p1[1] + c * p2[1]))

    def _closePath(self):
        if self.cur and len(self.cur) > 2:
            self.contours.append(self.cur)
        self.cur = None

    _endPath = _closePath

    def getCommands(self):
        out = []
        for c in self.contours:
            pts = rdp(c + [c[0]], self.eps)[:-1]
            q = [(round(x * 10), round(y * 10)) for x, y in pts]
            d = [f"M{num(q[0][0] / 10)} {num(q[0][1] / 10)}l"]
            for (ax, ay), (bx, by) in zip(q, q[1:]):
                for v in ((bx - ax) / 10, (by - ay) / 10):
                    t = num(v)
                    if t.startswith("0."):
                        t = t[1:]
                    elif t.startswith("-0."):
                        t = "-" + t[2:]
                    d.append(t if t.startswith("-") or d[-1].endswith("l") else " " + t)
            out.append("".join(d) + "z")
        return "".join(out)


def smooth(points, closed=False):
    """Catmull-Rom through the points, as an SVG path of cubic curves."""
    pts = points + points[:3] if closed else [points[0]] + points + [points[-1]]
    d = [f"M{num(pts[1][0])} {num(pts[1][1])}"]
    for i in range(1, len(pts) - 2):
        p0, p1, p2, p3 = pts[i - 1], pts[i], pts[i + 1], pts[i + 2]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d.append(f"C{num(c1[0])} {num(c1[1])} {num(c2[0])} {num(c2[1])} {num(p2[0])} {num(p2[1])}")
    return "".join(d)


# ---------------------------------------------------------------- handwriting

class Hand:
    """Handwritten text as one filled path. '->' becomes a drawn arrow, '*' a drawn star."""

    def __init__(self, size=17.5, font=HAND):
        self.size, self.font = size, font
        self.pen = FlatPen(font.glyphs)
        self.extra = []  # stroked bits (arrows, stars)

    def token_width(self, tok):
        if tok == "->":
            return self.size * 0.95
        if tok == "*":
            return self.size * 0.75
        return self.font.width(tok, self.size)

    def write(self, text, x, y):
        """Writes one line; returns its end x."""
        sp = self.font.width(" ", self.size)
        for i, tok in enumerate(text.split(" ")):
            if i:
                x += sp
            if tok == "->":
                s = self.size
                y0 = y - s * 0.28
                self.extra.append(f"M{num(x + 1)} {num(y0 + 0.6)}Q{num(x + s * .45)} {num(y0 - 1.2)} {num(x + s * .85)} {num(y0)}"
                                  f"M{num(x + s * .6)} {num(y0 - 4)}L{num(x + s * .86)} {num(y0)}L{num(x + s * .58)} {num(y0 + 3.6)}")
            elif tok == "*":
                self.extra.append(star_path(x + self.size * .36, y - self.size * .33, self.size * .32))
            else:
                self.font.draw(self.pen, tok, self.size, x, y)
            x += self.token_width(tok)
        return x

    def wrap(self, text, width):
        lines, cur = [], ""
        for word in text.split(" "):
            trial = (cur + " " + word).strip()
            if cur and self.line_width(trial) > width:
                lines.append(cur)
                cur = word
            else:
                cur = trial
        lines.append(cur)
        return lines

    def line_width(self, text):
        toks = text.split(" ")
        return sum(self.token_width(t) for t in toks) + self.font.width(" ", self.size) * (len(toks) - 1)

    def svg(self, color, stroke_w=1.5, transform=""):
        t = f' transform="{transform}"' if transform else ""
        out = f'<g{t}><path d="{self.pen.getCommands()}" fill="{color}"/>'
        if self.extra:
            out += (f'<path d="{"".join(self.extra)}" fill="none" stroke="{color}" stroke-width="{stroke_w}" '
                    f'stroke-linecap="round" stroke-linejoin="round"/>')
        return out + "</g>"


def star_path(cx, cy, r):
    """A star drawn the way people draw one: a single pentagram stroke."""
    pts = []
    for k in range(6):
        a = math.radians(-90 + k * 144 + rng.uniform(-4, 4))
        rr = r * rng.uniform(0.9, 1.08)
        pts.append((cx + rr * math.cos(a), cy + rr * math.sin(a)))
    return "M" + "L".join(f"{num(px)} {num(py)}" for px, py in pts)


# ---------------------------------------------------------------- the passage

PASSAGE = [
    "“I might have made it safely home, that",
    "time, but as I came round Malea the current",
    "took me out to sea, and from the north a fresh",
    "gale drove me on, past Cythera. Nine days I",
    "drifted on the teeming sea before dangerous",
    "high winds. Upon the tenth we came to the",
    "coastline of the Lotus Eaters, who live upon",
    "that flower. We landed there to take on water.",
    "All ships’ companies mustered alongside for",
    "the mid-day meal. Then I sent out two",
    "picked men and a runner to learn what race of",
    "men that land sustained. They fell in, soon",
    "enough, with Lotus Eaters, who showed no",
    "will to do us harm, only offering the sweet",
    "Lotus to our friends— but those who ate",
    "this honeyed plant, the Lotus, never cared to",
    "report, not to return:",
    "they longed to stay forever, browsing on that",
    "native bloom, forgetful of their homeland. I",
    "drove them, all three wailing, to the ships,",
    "tied them down under their rowing benches,",
    "and called the rest: ‘All hands aboard; come,",
    "clear the beach and no one taste the Lotus, or",
    "you lose your hope of home.’ Filing in to their",
    "places by the rowlocks my oarsmen",
    "dipped their long oars in the surf, and we",
    "moved out again on our sea faring.”",
]
SIZE = 15.5
LINE_H = 26.4
TOP = 214  # baseline of line 1
COL_W = max(SERIF_FONT.width(t, SIZE) for t in PASSAGE)
X0 = round((W - COL_W) / 2) + 6


def baseline(n):
    return TOP + (n - 1) * LINE_H


def char_x(n, i):
    return X0 + SERIF_FONT.width(PASSAGE[n - 1][:i], SIZE)


def span(n, phrase):
    """Box of `phrase` on line n: (x1, x2, baseline)."""
    text = PASSAGE[n - 1]
    i = text.find(phrase)
    if i < 0:
        raise SystemExit(f"line {n}: {phrase!r} not found in {text!r}")
    return (char_x(n, i), char_x(n, i + len(phrase)), baseline(n))


def passage_svg():
    out = [f'<g font-family="{SERIF}" font-size="{SIZE}" fill="#1b1b1b">']
    for n, text in enumerate(PASSAGE, 1):
        y = baseline(n)
        words, i = [], 0
        for w in text.split(" "):
            words.append((i, w))
            i += len(w) + 1
        tsp = "".join(
            f'<tspan x="{num(char_x(n, i))}" textLength="{num(SERIF_FONT.width(w, SIZE))}" '
            f'lengthAdjust="spacingAndGlyphs">{html.escape(w, quote=False)}</tspan>'
            for i, w in words)
        out.append(f'<text y="{num(y)}">{tsp}</text>')
    out.append("</g>")
    nums = "".join(f'<text x="{X0 - 34}" y="{num(baseline(n))}">{n}</text>' for n in (1, 5, 10, 15, 20, 25))
    out.append(f'<g font-family="{SERIF}" font-size="10.5" fill="#8a8a8a">{nums}</g>')
    return "\n".join(out)


# ---------------------------------------------------------------- marks

MARKS = {
    # pink = Odysseus as hero / leader (lesson directions)
    "lead_water": ("leader", [(8, "We landed there to take on water.")]),
    "lead_scouts": ("leader", [(10, "Then I sent out two"), (11, "picked men and a runner to learn what race of"),
                               (12, "men that land sustained.")]),
    "lead_drove": ("leader", [(19, "I"), (20, "drove them, all three wailing, to the ships,"),
                              (21, "tied them down under their rowing benches,")]),
    "lead_order": ("leader", [(22, "and called the rest: ‘All hands aboard; come,"),
                              (23, "clear the beach and no one taste the Lotus, or"),
                              (24, "you lose your hope of home.’")]),
    # blue = setting
    "set_storm": ("setting", [(2, "the current"), (3, "took me out to sea, and from the north a fresh"),
                              (4, "gale drove me on, past Cythera.")]),
    "set_sea": ("setting", [(5, "drifted on the teeming sea before dangerous"), (6, "high winds.")]),
    "set_island": ("setting", [(7, "coastline of the Lotus Eaters, who live upon"), (8, "that flower.")]),
    # red circles = major events
    "ev_storm": ("event", [(3, "took me out to sea,")]),
    "ev_island": ("event", [(7, "coastline of the Lotus Eaters,")]),
    "ev_lotus": ("event", [(17, "report, not to return:")]),
    "ev_tied": ("event", [(21, "tied them down under their rowing benches,")]),
    "ev_sail": ("event", [(27, "moved out again on our sea faring.”")]),
    # purple underline = theme clue
    "th_home1": ("theme", [(1, "safely home,")]),
    "th_sweet": ("theme", [(14, "sweet")]),
    "th_honey": ("theme", [(16, "this honeyed plant,")]),
    "th_forever": ("theme", [(18, "they longed to stay forever,")]),
    "th_forget": ("theme", [(19, "forgetful of their homeland.")]),
    "th_home2": ("theme", [(24, "hope of home.’")]),
    # green star = clarify
    "cl_nine": ("clarify", [(4, "Nine days I")]),
    "cl_harm": ("clarify", [(13, "who showed no"), (14, "will to do us harm,")]),
}
STARS = [("cl_nine", 4), ("cl_harm", 13)]


def highlight(x1, x2, y, color):
    top, bot = y - 13.2, y + 4.6
    pts = [(x1 - 2.5, top + rng.uniform(-.8, .8)), (x2 + 2.5, top + rng.uniform(-.8, .8)),
           (x2 + 3.5, bot + rng.uniform(-.8, .8)), (x1 - 1.5, bot + rng.uniform(-.8, .8))]
    d = "M" + "L".join(f"{num(px)} {num(py)}" for px, py in pts) + "Z"
    return f'<path d="{d}" fill="{color}" fill-opacity="0.5"/>'


def underline(x1, x2, y, color):
    pts, n = [], max(3, int((x2 - x1) / 14))
    for k in range(n + 1):
        t = k / n
        pts.append((x1 - 1 + t * (x2 - x1 + 2), y + 3.6 + rng.uniform(-.7, .7) + t * .8))
    return f'<path d="{smooth(pts)}" fill="none" stroke="{color}" stroke-width="1.7" stroke-linecap="round"/>'


def circle(x1, x2, y, color):
    cx, cy = (x1 + x2) / 2, y - 4.6
    rx, ry = (x2 - x1) / 2 + 9, 13.5
    a0 = math.radians(rng.uniform(190, 230))
    phase = rng.uniform(0, 6)
    pts = []
    steps = 34
    for k in range(steps + 1):
        a = a0 + (2 * math.pi + 0.45) * k / steps
        wob = 1 + 0.035 * math.sin(3 * a + phase) + 0.05 * k / steps
        pts.append((cx + rx * wob * math.cos(a), cy + ry * wob * math.sin(a)))
    return f'<path d="{smooth(pts)}" fill="none" stroke="{color}" stroke-width="1.7" stroke-linecap="round"/>'


def mark_boxes(mid):
    return [span(n, p) for n, p in MARKS[mid][1]]


def marks_svg():
    under, over = [], []
    for mid, (kind, pieces) in MARKS.items():
        for x1, x2, y in mark_boxes(mid):
            if kind in FILL:
                under.append(highlight(x1, x2, y, FILL[kind]))
            elif kind == "theme":
                over.append(underline(x1, x2, y, INK["theme"]))
            elif kind == "event":
                over.append(circle(x1, x2, y, INK["event"]))
    for mid, n in STARS:
        x1, x2, y = next(b for b in mark_boxes(mid) if b[2] == baseline(n))
        over.append(f'<path d="{star_path(X0 - 13, y - 5, 6.5)}" fill="none" stroke="{INK["clarify"]}" '
                    f'stroke-width="1.5" stroke-linejoin="round"/>')
    return "\n".join(under), "\n".join(over)


# ---------------------------------------------------------------- margin notes

# (side, ink, text, [(mark id, line the arrow lands on[, "above"])])
NOTES = [
    ("R", "theme", "“Home” = Odysseus’s GOAL. Watch this word -> it comes back in lines 19 & 24. "
                   "Repeated idea = THEME clue!", [("th_home1", 1, "above")]),
    ("L", "event", "MAJOR EVENT: the storm blows them off course. Setting (current, gale) is the first "
                   "challenge & it DRIVES the plot. (I Do think-aloud)", [("ev_storm", 3)]),
    ("R", "clarify", "* 9 days adrift: wise to ride it out, or should he fight to steer home? "
                     "(We Do debate) Nature tests patience.", [("cl_nine", 4)]),
    ("L", "setting", "New setting: a calm, peaceful island after the storm. Mood shift = the calm "
                     "before the conflict.", [("ev_island", 7)]),
    ("R", "leader", "Leader meets the crew’s needs: water, food, rest.", [("lead_water", 8)]),
    ("L", "leader", "Cautious & strategic: sends scouts instead of risking everyone. "
                    "(Remember the Cicones: 72 men lost!)", [("lead_scouts", 11)]),
    ("R", "clarify", "* No weapons, no attack... the danger here is TEMPTATION, a sneakier kind "
                     "of challenge.", [("cl_harm", 13)]),
    ("L", "theme", "Sensory words “sweet” (ln 14) & “honeyed” -> the Lotus FEELS good. "
                   "Easy pleasure = a trap.", [("th_honey", 16)]),
    ("R", "event", "MAJOR EVENT: the scouts eat the Lotus & give up the mission. "
                   "Setting + weak choices = conflict.", [("ev_lotus", 17)]),
    ("L", "theme", "THEME DEVELOPS: giving in to temptation makes the men forget who they are & "
                   "where they’re going. The island = an easy escape from life’s challenges.",
     [("th_forever", 18)]),
    ("R", "leader", "HERO / LEADER: decisive, tough love. He makes an unpopular choice to save "
                    "his men. Traits: responsible, determined.", [("ev_tied", 21)]),
    ("L", "leader", "He says the theme out loud: taste the Lotus = “lose your hope of home.” "
                    "Leads by warning & protecting.", [("lead_order", 22), ("th_home2", 24)]),
    ("R", "event", "Back on course: challenge overcome (for now). The plot moves on. EQ: challenges "
                   "test focus & loyalty.", [("ev_sail", 27)]),
]
NOTE_SIZE = 17.5
NOTE_LH = 18.5


def layout_notes():
    left_x, left_r = 30, X0 - 50
    right_x, right_r = X0 + COL_W + 22, W - 26
    placed = []
    for side, ink, text, targets in NOTES:
        x, r = (left_x, left_r) if side == "L" else (right_x, right_r)
        lines = Hand(NOTE_SIZE).wrap(text, r - x)
        h = len(lines) * NOTE_LH
        ty = sum(baseline(n) for _, n, *_ in targets[:1]) - 5
        placed.append(dict(side=side, ink=ink, text=text, lines=lines, x=x, w=r - x, h=h,
                           top=ty - h / 2, targets=targets))
    lo, hi = 172, 905
    for side in "LR":
        col = sorted((p for p in placed if p["side"] == side), key=lambda p: p["top"])
        y = lo
        for p in col:
            p["top"] = max(p["top"], y)
            y = p["top"] + p["h"] + 12
        y = hi
        for p in reversed(col):
            p["top"] = min(p["top"], y - p["h"])
            y = p["top"] - 12
    return placed


def arrow(x0, y0, x1, y1, color, bend):
    dx, dy = x1 - x0, y1 - y0
    ln = math.hypot(dx, dy) or 1
    cx = (x0 + x1) / 2 - dy / ln * bend * ln
    cy = (y0 + y1) / 2 + dx / ln * bend * ln
    ang = math.atan2(y1 - cy, x1 - cx)
    head = []
    for s in (-1, 1):
        a = ang + math.pi + s * math.radians(27)
        head.append((x1 + 9 * math.cos(a), y1 + 9 * math.sin(a)))
    d = (f"M{num(x0)} {num(y0)}Q{num(cx)} {num(cy)} {num(x1)} {num(y1)}"
         f"M{num(head[0][0])} {num(head[0][1])}L{num(x1)} {num(y1)}L{num(head[1][0])} {num(head[1][1])}")
    return (f'<path d="{d}" fill="none" stroke="{color}" stroke-width="1.6" '
            f'stroke-linecap="round" stroke-linejoin="round"/>')


def notes_svg(placed):
    out = []
    for i, p in enumerate(placed):
        color = INK[p["ink"]]
        hand = Hand(NOTE_SIZE)
        widths = []
        for k, line in enumerate(p["lines"]):
            y = p["top"] + NOTE_LH * (k + 1) - 4
            widths.append(hand.write(line, p["x"], y) - p["x"])
        p["widths"] = widths
        rot = rng.uniform(-1.6, 1.6)
        cx, cy = p["x"] + p["w"] / 2, p["top"] + p["h"] / 2
        out.append(hand.svg(color, transform=f"rotate({num(rot)} {num(cx)} {num(cy)})"))
        for j, (mid, n, *land) in enumerate(p["targets"]):
            x1, x2, y = next(b for b in mark_boxes(mid) if b[2] == baseline(n))
            ty = y - 5
            # leave from the note line nearest the target, on the side facing the passage
            k = 0 if land == ["above"] else min(range(len(p["lines"])), key=lambda k: abs(p["top"] + NOTE_LH * (k + .6) - ty))
            sy = p["top"] + NOTE_LH * (k + .6)
            pad = 12 if MARKS[mid][0] == "event" else 5
            if p["side"] == "L":
                sx, ex = p["x"] + widths[k] + 6, x1 - pad
                blocked = x1 > X0 + 2
            else:
                sx, ex = p["x"] - 6, x2 + pad
                blocked = x2 < X0 + SERIF_FONT.width(PASSAGE[n - 1], SIZE) - 2
            if blocked:  # other words sit between the margin and the phrase: land just above or under it
                ex = (x1 + x2) / 2 + (-0.2 if p["side"] == "L" else 0.2) * (x2 - x1)
                ty = y - 19 if land == ["above"] else y + 9
            bend = (0.16 if (p["side"] == "L") == (sy > ty) else -0.16) * (1 if j == 0 else -0.6)
            out.append(arrow(sx, sy, ex, ty, color, bend))
    return "\n".join(out)


# ---------------------------------------------------------------- header, legend, brackets, summary

def hand_svg(text, x, y, color, size=17.5, font=HAND, transform="", width=None, lh=None):
    h = Hand(size, font)
    lines = h.wrap(text, width) if width else [text]
    for k, line in enumerate(lines):
        h.write(line, x, y + k * (lh or size * 1.08))
    return h.svg(color, transform=transform), len(lines)


def header_svg():
    out = [f'<g font-family="{SERIF}" fill="#1b1b1b">'
           f'<text x="40" y="46" font-size="13">Name: ____________________</text>'
           f'<text x="268" y="46" font-size="13">From <tspan font-style="italic">The Odyssey</tspan> by Homer'
           f'  “The Lotus Eaters”</text></g>']
    sw = Hand(22, HAND_BOLD).line_width("TEACHER COPY")
    sx = W - 44 - sw
    stamp, _ = hand_svg("TEACHER COPY", sx, 40, INK["event"], 22, HAND_BOLD)
    out.append(f'<g transform="rotate(-5 {num(sx + sw / 2)} 32)">{stamp}'
               f'<rect x="{num(sx - 8)}" y="17" width="{num(sw + 16)}" height="30" rx="5" fill="none" stroke="{INK["event"]}" '
               f'stroke-width="1.8"/></g>')
    # legend
    y = 76
    out.append(f'<rect x="40" y="{y - 12}" width="{W - 80}" height="78" rx="8" fill="#f7f7f4" stroke="#d9d9d2"/>')
    out.append(f'<text x="54" y="{y + 5}" font-family="{SERIF}" font-size="12.2" fill="#1b1b1b">'
               f'<tspan font-weight="bold">9.RL.1.A</tspan> Explain stated or implied themes, analyzing their '
               f'development over the course of the text,</text>'
               f'<text x="54" y="{y + 21}" font-family="{SERIF}" font-size="12.2" fill="#1b1b1b">and the relationship '
               f'of characters, setting, and plot to those themes. <tspan fill="#555" font-style="italic">Theme focus: '
               f'How do the challenges of life affect a person?</tspan></text>')
    items = [("hl", "leader", "Odysseus as hero/leader"), ("circle", "event", "major event"),
             ("hl", "setting", "setting"), ("under", "theme", "theme clue"), ("star", "clarify", "clarify/explain")]
    x, ly = 56, y + 50
    for kind, ink, label in items:
        if kind == "hl":
            out.append(highlight(x, x + 22, ly, FILL[ink]))
            sw = 26
        elif kind == "circle":
            out.append(circle(x + 4, x + 18, ly, INK[ink]))
            sw = 30
        elif kind == "under":
            out.append(underline(x, x + 22, ly, INK[ink]))
            sw = 26
        else:
            out.append(f'<path d="{star_path(x + 8, ly - 5, 6.5)}" fill="none" stroke="{INK[ink]}" stroke-width="1.5"/>')
            sw = 20
        out.append(f'<text x="{x + sw}" y="{ly}" font-family="{SERIF}" font-size="12" fill="#333">{label}</text>')
        x += sw + SERIF_FONT.width(label, 12) + 26
    return "\n".join(out)


def brackets_svg():
    out = []
    groups = [(1, 4, "I Do"), (4, 17, "We Do: whole class"), (18, 27, "We Do: partners, 7 min")]
    for a, b, label in groups:
        y1, y2 = baseline(a) - 13 + (6 if a == 4 else 0), baseline(b) + 4 - (6 if b == 4 else 0)
        x = 16
        d = f"M{x + 6} {num(y1)}Q{x} {num(y1)} {x} {num(y1 + 6)}L{x} {num(y2 - 6)}Q{x} {num(y2)} {x + 6} {num(y2)}"
        out.append(f'<path d="{d}" fill="none" stroke="#78909c" stroke-width="1.4" stroke-linecap="round"/>')
        h = Hand(14)
        tw = h.line_width(label)
        cy = (y1 + y2) / 2
        h.write(label, x - 4 - tw / 2, cy)  # drawn centred on the bracket, then turned upright
        out.append(h.svg("#607d8b", transform=f"rotate(-90 {x - 4} {num(cy)}) translate(0 -5)"))
    return "\n".join(out)


SUMMARY = ("Exit discussion (slide 23) — How did the setting drive the plot? The storm at sea pushes them off "
           "course -> lands them on the Lotus island -> the calm, “sweet” setting tempts the crew -> Odysseus "
           "must act as a leader to get them home. Theme: giving in to temptation makes people forget their "
           "goals; staying on course takes discipline (and sometimes a leader’s hard choices).")


def summary_svg():
    y0 = 918
    out = [f'<path d="M36 {y0}L{W - 34} {y0 + 2}L{W - 36} {H - 26}L38 {H - 24}Z" fill="#fff6c9" '
           f'stroke="#e0c86a" stroke-width="1.2"/>']
    g, _ = hand_svg(SUMMARY, 52, y0 + 26, "#1a3a6b", 18.5, HAND, width=W - 108, lh=21.5)
    out.append(g)
    return "\n".join(out)


def page_svg():
    placed = layout_notes()
    under, over = marks_svg()
    parts = [header_svg(), brackets_svg(), under, passage_svg(), over, notes_svg(placed), summary_svg()]
    ns = ' xmlns="http://www.w3.org/2000/svg"'
    title = ("Teacher's annotated copy of The Lotus Eaters for standard 9.RL.1.A, with handwritten margin "
             "notes and arrows. The notes are written out as text below the picture.")
    body = "\n".join(parts)
    return (f'<svg{ns} viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="{html.escape(title)}"'
            + f'><title>{html.escape(title)}</title><rect width="{W}" height="{H}" fill="#ffffff"/>\n{body}\n</svg>'), placed


# ---------------------------------------------------------------- teacher key (inline styles, used by both outputs)

def esc(s):
    return html.escape(s, quote=False)


S_H2 = "font-family:Georgia,serif;font-size:19px;color:#1a3a6b;margin:22px 0 8px;border-bottom:2px solid #c9d6ea;padding-bottom:4px"
S_P = "margin:6px 0;line-height:1.5"
S_TABLE = "border-collapse:collapse;width:100%;font-size:13px;margin:8px 0"
S_TH = "border:1px solid #9fb3cf;background:#e8eef7;padding:6px 8px;text-align:left;vertical-align:top"
S_TD = "border:1px solid #c5d1e2;padding:6px 8px;vertical-align:top;line-height:1.4"
S_BOX = "background:#fff6c9;border:1px solid #e0c86a;border-radius:6px;padding:10px 14px;margin:10px 0;line-height:1.5"


def table(head, rows, widths=None):
    cols = "".join(f'<th style="{S_TH}{";width:" + widths[i] if widths else ""}">{h}</th>' for i, h in enumerate(head))
    body = "".join("<tr>" + "".join(f'<td style="{S_TD}">{c}</td>' for c in r) + "</tr>" for r in rows)
    return f'<table style="{S_TABLE}"><thead><tr>{cols}</tr></thead><tbody>{body}</tbody></table>'


def key_html():
    q = lambda s: f"<em>“{esc(s)}”</em>"
    parts = []
    parts.append(f'<h2 style="{S_H2}">At a glance</h2>')
    parts.append(table(["", ""], [
        ["<strong>Standard</strong>", "9.RL.1.A — Explain stated or implied themes, analyzing their development over the "
                                      "course of texts, and the relationship of characters, setting, and plot to those themes."],
        ["<strong>Big Idea</strong>", "Challenge Accepted!"],
        ["<strong>EQ / EU</strong>", "How do the challenges of life affect a person? / Navigating through challenges is a part of "
                                     "life for everyone."],
        ["<strong>Learning target</strong>", "Annotate for character traits and major events; show how character traits and setting "
                                             "drive the plot, using specific details in annotations and the Facing Challenges Character Tracker."],
        ["<strong>Annotation codes</strong>", "From the lesson: <span style=\"background:#ffc4e1\">pink highlight</span> = Odysseus acting as a "
                                              "hero/leader; circle = major event; ★ = clarifying / explaining (then write the explanation). "
                                              "Added for 9.RL.1.A on this key: <span style=\"background:#c7e8ff\">blue</span> = setting detail, "
                                              "<span style=\"border-bottom:2px solid #6a1b9a\">purple underline</span> = theme clue."],
    ], ["22%", "78%"]).replace(f'<thead><tr><th style="{S_TH};width:22%"></th><th style="{S_TH};width:78%"></th></tr></thead>', ""))

    parts.append(f'<h2 style="{S_H2}">Theme statements to aim for</h2>')
    parts.append(f'<p style="{S_P}">Accept any complete statement that the text supports. Push students past a one-word topic '
                 f'(“temptation”) to what the text <em>says</em> about the topic.</p>')
    parts.append(f'<div style="{S_BOX}"><strong>Primary:</strong> Giving in to temptation can make people forget their goals and the '
                 f'people who depend on them.<br><strong>Also strong:</strong> Staying on course through life’s challenges takes '
                 f'discipline, and sometimes a leader has to make hard, unpopular choices for the good of the group.<br>'
                 f'<strong>Tie to the EQ:</strong> Challenges do not always look dangerous; the easiest path can be the one that '
                 f'costs us the most.</div>')
    parts.append(f'<p style="{S_P}"><strong>Stated or implied?</strong> Mostly implied (the men become {q("forgetful of their homeland")}), '
                 f'but Odysseus comes close to stating it in lines 23–24: {q("no one taste the Lotus, or you lose your hope of home.")}</p>')

    parts.append(f'<h2 style="{S_H2}">How the theme develops over the passage</h2>')
    parts.append(table(
        ["Part", "Plot (major events)", "Setting", "Characters", "Theme development"],
        [
            ["<strong>Beginning</strong><br>lines 1–8", "A storm takes the ships off course; nine days adrift; they land on the Lotus Eaters’ coast.",
             f"Dangerous sea: {q('the current took me out to sea')}, {q('dangerous high winds')}.",
             "Odysseus endures the storm, then lands to take on water and feed the crew.",
             f"Sets up the goal — {q('safely home')} — and the first obstacle: nature."],
            ["<strong>Middle</strong><br>lines 9–19", "Odysseus sends scouts; the Lotus Eaters offer the Lotus; the scouts eat it and refuse to return.",
             f"A calm, welcoming island; the {q('sweet')}, {q('honeyed')} flower. The Lotus Eaters show {q('no will to do us harm')}.",
             "Odysseus is cautious and strategic; the scouts give in to pleasure.",
             f"The real challenge is temptation, not violence. The men {q('longed to stay forever')}, {q('forgetful of their homeland')}."],
            ["<strong>End</strong><br>lines 19–27", "Odysseus drives the men to the ships, ties them under the benches, orders everyone aboard; they sail.",
             "Leaving the island for the open sea again.",
             f"Odysseus is decisive and firm ({q('all three wailing')}); the rest of the crew obeys.",
             f"Stated outright: taste the Lotus and {q('you lose your hope of home')}. Resisting temptation keeps the goal alive."],
        ], ["13%", "22%", "21%", "20%", "24%"]))

    parts.append(f'<h2 style="{S_H2}">Model response (characters + setting + plot → theme)</h2>')
    parts.append(f'<div style="{S_BOX}">In “The Lotus Eaters,” Homer develops the theme that giving in to temptation can make '
                 f'people forget their goals. The setting drives the plot: a storm pushes Odysseus’s ships off course to an island '
                 f'where the people offer the {q("sweet")} Lotus. Because the Lotus Eaters show {q("no will to do us harm")}, the danger is '
                 f'easy to miss. When the scouts eat the plant, they become {q("forgetful of their homeland")}, which shows how easy '
                 f'pleasure can erase a person’s purpose. Odysseus’s response develops the theme further: he drives the men '
                 f'{q("all three wailing")} to the ships and warns that anyone who tastes the Lotus will {q("lose your hope of home")}. '
                 f'His decisive leadership shows that staying true to a goal can require discipline and hard choices.</div>')

    parts.append(f'<h2 style="{S_H2}">Discussion key (from the slide notes)</h2>')
    parts.append(table(["When", "Ask", "Listen for"], [
        ["Slide 20 · I Do<br>lines 1–4", "Think aloud.",
         "Odysseus was on his way home when a storm threw him off his route. That is a major event because it takes him off course."],
        ["Slide 21 · We Do<br>lines 4–6", "What does drifting for nine days tell us about his leadership? Or does it?",
         "Either side, with a reason: smart not to battle a sea he can’t beat (saves the crew and the ship), or he should have "
         "fought to steer toward home and safety."],
        ["Slide 21 · We Do<br>lines 6–10", "Any major events? What do we learn about his leadership?",
         "Reaching the Lotus Eaters’ island is a major event. Stopping for water and a meal lets the crew recover their strength."],
        ["Slide 21 · We Do<br>lines 10–17", "What major event happens? What does it say about his leadership?",
         "He sends men to learn who lives there; they eat the Lotus and never report back. Some will say the men did not "
         "respect him: they gave in to temptation instead of doing their job."],
        ["Slide 22 · partners<br>lines 18–27 (7 min)", "Highlight major events and where Odysseus acts as a hero/leader.",
         "He ties the crying men under the rowing benches; orders everyone aboard and forbids the Lotus; gets the ships moving "
         "again. Note the cost: some men no longer wanted to go home."],
        ["Slide 23 · 5–7 min", "How did the setting of the Lotus Eaters drive the plot?",
         "The storm keeps Odysseus from home and brings him to the island; the island’s Lotus makes crew members stop wanting "
         "to leave, which forces Odysseus to act."],
    ], ["20%", "32%", "48%"]))

    parts.append(f'<h2 style="{S_H2}">Facing Challenges Character Tracker: sample rows</h2>')
    parts.append(table(["Character", "Event / challenge", "Quote (from the text)", "Traits shown"], [
        ["Odysseus", "His scouts eat the Lotus and refuse to leave the island.",
         f"{q('I drove them, all three wailing, to the ships, tied them down under their rowing benches')} (lines 19–21)",
         "Decisive, responsible, protective, determined"],
        ["The scouts", "Offered the Lotus by the Lotus Eaters.",
         f"{q('they longed to stay forever, browsing on that native bloom, forgetful of their homeland')} (lines 18–19)",
         "Easily tempted, forgetful of duty"],
        ["Odysseus", "Blown off course by a storm for nine days.",
         f"{q('Nine days I drifted on the teeming sea before dangerous high winds')} (lines 4–6)",
         "Patient, enduring"],
    ], ["14%", "26%", "40%", "20%"]))

    parts.append(f'<h2 style="{S_H2}">Exit ticket (3-2-1) key</h2>')
    parts.append(f'<p style="{S_P}"><strong>3 major events:</strong> a storm drives the ships off course for nine days; '
                 f'the scouts eat the Lotus and refuse to return; Odysseus forces them aboard, ties them down, and the ships sail on.<br>'
                 f'<strong>2 ways setting can impact a text:</strong> it creates conflict (the storm, the tempting island); it shapes '
                 f'characters’ actions (the men want to stay); it creates mood (calm after the storm); it can symbolize a theme '
                 f'(the island as an easy escape).<br>'
                 f'<strong>1 thing you wonder:</strong> answers vary, e.g. “Would Odysseus have eaten the Lotus if he went ashore himself?”</p>')

    parts.append(f'<h2 style="{S_H2}">Look-fors and misconceptions</h2>')
    parts.append(f'<ul style="margin:6px 0 6px 20px;padding:0;line-height:1.5">'
                 f'<li><strong>Topic vs. theme.</strong> “Temptation” is a topic. Ask: “What does the story say <em>about</em> temptation?”</li>'
                 f'<li><strong>“The Lotus Eaters are villains.”</strong> They are not hostile. The danger comes from inside the men, which is why it is a theme about choices.</li>'
                 f'<li><strong>Who is telling this?</strong> Odysseus narrates in first person to King Alcinous (in medias res). Extension: could he be making himself look like a better leader than he was?</li>'
                 f'<li><strong>Setting is more than a place.</strong> Students should connect the sea and the island to what characters do and to the theme, not just list where it happens.</li>'
                 f'</ul>')
    return "\n".join(parts)


def notes_text_html(placed):
    rows = []
    label = {"leader": "Hero/leader", "event": "Major event", "setting": "Setting", "theme": "Theme", "clarify": "Clarify ★"}
    for p in sorted(placed, key=lambda p: p["targets"][0][1]):
        lines = sorted({t[1] for t in p["targets"]})
        phrase = " … ".join(" ".join(t for _, t in MARKS[mid][1]) for mid, *_ in p["targets"]).strip("“”")
        text = p["text"].replace(" -> ", " → ").replace("* ", "")
        rows.append([f"{', '.join(map(str, lines))}", f'<strong style="color:{INK[p["ink"]]}">{label[p["ink"]]}</strong>',
                     f"<em>“{esc(phrase)}”</em>", esc(text)])
    return table(["Line", "Code", "Marked text", "Teacher note"], rows, ["7%", "14%", "30%", "49%"])


# ---------------------------------------------------------------- outputs

def print_html(svg, placed):
    font_face = "".join(
        f"@font-face{{font-family:Gelasio;src:url(fonts/{f}) format('truetype');font-weight:{w};font-style:{s}}}"
        for f, w, s in [("Gelasio-Regular.ttf", 400, "normal"), ("Gelasio-Bold.ttf", 700, "normal"), ("Gelasio-Italic.ttf", 400, "italic")])
    return f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lotus Eaters Teacher Copy</title>
<style>
{font_face}
@page {{ size: letter; margin: 0.55in 0.6in; }}
@page cover {{ margin: 0; }}
html, body {{ margin: 0; background: #fff; color: #1b1b1b; font-family: Georgia, Gelasio, serif; }}
.page {{ page: cover; width: 8.5in; height: 11in; overflow: hidden; page-break-after: always; break-after: page; }}
.page svg {{ display: block; width: 8.5in; height: 11in; }}
.key {{ font-size: 13.5px; }}
.key h1 {{ font-size: 24px; margin: 0 0 4px; color: #1a3a6b; }}
.key .sub {{ color: #555; margin: 0 0 6px; }}
.key table {{ break-inside: auto; }} .key tr {{ break-inside: avoid; }} .key h2 {{ break-after: avoid; }}
@media screen {{ body {{ background: #e9e9e4; }} .page, .key {{ margin: 16px auto; background: #fff; box-shadow: 0 1px 6px rgba(0,0,0,.2); }}
  .page {{ max-width: 100%; height: auto; }} .page svg {{ width: 100%; height: auto; }} .key {{ width: 8.5in; max-width: 100%; box-sizing: border-box; padding: 0.55in 0.6in; }} }}
</style></head><body>
<div class="page">{svg}</div>
<div class="key">
<h1>Teacher Key: Theme in “The Lotus Eaters”</h1>
<p class="sub">Grade 9 · Unit 2 · Lesson 3, Challenge Accepted! · <em>The Odyssey</em> (textbook p. 721) · 9.RL.1.A</p>
{key_html()}
<h2 style="{S_H2}">Margin notes as text</h2>
{notes_text_html(placed)}
</div>
</body></html>
"""


IMAGE_PLACEHOLDER = "REPLACE-WITH-CANVAS-IMAGE-LINK"


def canvas_html(placed, image_url):
    """Canvas strips <svg>, <style>, data: URLs and some CSS (font-weight, letter-spacing...), so the
    annotated page goes in as a picture the teacher uploads to Canvas Files, and everything else uses
    only tags, attributes and inline CSS on Canvas's allowlist (canvas_sanitize.rb)."""
    wrap = "max-width:900px;margin:0 auto;font-family:Georgia,'Times New Roman',serif;color:#1b1b1b;font-size:15px"
    summary = "cursor:pointer;font-size:17px;color:#1a3a6b;padding:8px 0"
    det = "border:1px solid #c9d6ea;border-radius:8px;padding:4px 14px 10px;margin:12px 0;background:#fbfcfe"
    alt = ("Teacher's annotated copy of The Lotus Eaters (lines 1 to 27) with handwritten margin notes and arrows: "
           "pink highlights where Odysseus acts as a hero or leader, red circles around major events, blue highlights "
           "on setting details, purple underlines on theme clues, and green stars on lines to clarify. "
           "The notes are written out in the table below the picture.")
    return f"""<div style="{wrap}">
<div style="background:#1a3a6b;color:#ffffff;border-radius:8px;padding:12px 16px;margin:0 0 12px">
<p style="margin:0;font-size:13px">TEACHER ANNOTATED COPY · 9.RL.1.A</p>
<p style="margin:4px 0 0;font-size:22px"><strong>The Odyssey: “The Lotus Eaters”</strong></p>
<p style="margin:4px 0 0;font-size:14px">Grade 9 · Unit 2 · Lesson 3, Challenge Accepted! · Theme development through character, setting and plot</p>
</div>
<p style="margin:0 0 8px;font-size:13px;color:#555">Click the page to open it full size.</p>
<div style="border:1px solid #d9d9d2;border-radius:6px;overflow:hidden;background:#ffffff">
<a href="{image_url}" target="_blank"><img src="{image_url}" alt="{html.escape(alt)}" width="816" style="display:block;width:100%;max-width:100%;height:auto"></a>
</div>
<details style="{det}">
<summary style="{summary}"><strong>Margin notes as text (accessible version)</strong></summary>
{notes_text_html(placed)}
</details>
<details style="{det}">
<summary style="{summary}"><strong>Teacher key: themes, development chart, discussion answers</strong></summary>
{key_html()}
</details>
</div>
"""


def main():
    args = sys.argv[1:]
    image_url = IMAGE_PLACEHOLDER
    if "--image-url" in args:
        k = args.index("--image-url")
        image_url = args[k + 1]
        del args[k:k + 2]
    chrome = args[0] if args else "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"
    svg_page, placed = page_svg()
    (HERE / "annotated-page.svg").write_text(svg_page, encoding="utf-8")
    p = HERE / "LotusEaters-TeacherCopy-print.html"
    p.write_text(print_html(svg_page, placed), encoding="utf-8")
    (HERE / "LotusEaters-Canvas-Embed.html").write_text(canvas_html(placed, html.escape(image_url)), encoding="utf-8")
    pdf = HERE / "LotusEaters-TeacherCopy-9RL1A.pdf"
    common = [chrome, "--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars"]
    subprocess.run(common + ["--no-pdf-header-footer", f"--print-to-pdf={pdf}", p.as_uri()], check=True, capture_output=True)
    # the picture for Canvas: page 1 at twice screen size (1632 x 2112), reduced to 96 colours to stay small
    png = HERE / "LotusEaters-Annotated.png"
    subprocess.run(["pdftoppm", "-png", "-r", "192", "-f", "1", "-l", "1", "-singlefile", str(pdf), str(png.with_suffix(""))],
                   check=True)
    from PIL import Image
    Image.open(png).convert("RGB").quantize(96, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(png, optimize=True)
    print("built", ", ".join(f.name for f in sorted(HERE.glob("LotusEaters-*"))))


if __name__ == "__main__":
    main()
