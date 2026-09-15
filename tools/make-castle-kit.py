#!/usr/bin/env python3
"""Build the castle tile kit for the reward builder from Kenney's Castle Kit (CC0).

Source: a checkout of Kenney's "Castle Kit 1.0" isometric renders, e.g. the
GitHub mirror ETdoFresh/kenney.nl (castle-kit-1.0/Isometric). Pass its path as
the first argument. Writes:
  assets/build/kit/<sprite>_<orient>.png          the blue (default) set
  assets/build/kit/<color>/<sprite>_<orient>.png  red / green / gold recolours
                                                   (only sprites that carry blue)
and rewrites the "castle" theme in assets/build/pieces.json with kit modules.

Geometry: every kit tile is one isometric cell, 151 px wide and 87 px tall
(true 30° isometric). A sprite's bottom-centre pixel is the cell's front apex.
A stack part sits on the previous part: lift = sprite height - diamond height.
"""
import os, sys, json, glob, colorsys, shutil
import numpy as np
from PIL import Image

SRC = sys.argv[1] if len(sys.argv) > 1 else "kenney-castle/Isometric"
ROOT = os.path.join(os.path.dirname(__file__), "..")
OUT = os.path.join(ROOT, "assets", "build", "kit")
CELL_W, CELL_H = 151, 87.2

COLORS = {          # hue in degrees for the blue accents (flags, roofs, colour bands)
    "red":   (355, 1.05, 1.0),
    "green": (128, 0.9, 0.95),
    "gold":  (44, 1.1, 1.08),
}
ORIENTS = ["NE", "NW", "SE", "SW"]

# sprites we ship (name -> orientations)
SPRITES = {
    "wall": ["NE", "NW"], "wallCorner": ORIENTS, "wallDoor": ["NE", "NW"], "metalGate": ["NE", "NW"],
    "wallNarrowStairs": ["NE", "NW"], "wallCornerHalfTower": ORIENTS, "wallHalf": ["NE", "NW"],
    "towerBase": ["NE"], "towerTop": ["NE"], "towerTopRoof": ["NE"], "towerBalcony": ["NE"],
    "towerSquareBase": ["NE"], "towerSquareBaseColor": ["NE"], "towerSquareMid": ["NE"], "towerSquareMidWindows": ["NE"],
    "towerSquareMidOpen": ["NE"], "towerSquareMidColor": ["NE"], "towerSquareArch": ["NE"], "towerSquareTop": ["NE"],
    "towerSquareTopRoof": ["NE"], "towerSquareTopRoofHigh": ["NE"], "towerSquareTopColor": ["NE"], "towerSquareRoof": ["NE"],
    "towerSquarePoles": ["NE"],
    "flagBlue": ["NE"], "flagBlueWide": ["NE"], "flagBannerLong": ["NE"], "flagBannerShort": ["NE"], "shieldBlue": ["NE"],
    "bridge": ["NE", "NW"], "stairsStone": ["NE"], "king": ["NE"], "knightBlue": ["NE"], "knightRed": ["NE"],
    "siegeBallista": ["NE"], "siegeCatapult": ["NE"], "siegeRam": ["NE"], "siegeTower": ["NE"], "siegeTrebuchet": ["NE"],
}

def is_blue(h, s, v):
    return (h > 0.52) & (h < 0.70) & (s > 0.42) & (v > 0.15)

def recolour(img, hue, sgain, vgain):
    a = np.array(img.convert("RGBA")).astype(float) / 255.0
    m = a[..., 3] > 0.02
    rgb = a[m][:, :3]
    hsv = np.array([colorsys.rgb_to_hsv(*p) for p in rgb])
    sel = is_blue(hsv[:, 0], hsv[:, 1], hsv[:, 2])
    if not sel.any():
        return None
    hsv[sel, 0] = hue / 360.0
    hsv[sel, 1] = np.clip(hsv[sel, 1] * sgain, 0, 1)
    hsv[sel, 2] = np.clip(hsv[sel, 2] * vgain, 0, 1)
    out = np.array([colorsys.hsv_to_rgb(*p) for p in hsv])
    a[m, :3] = out
    return Image.fromarray((a * 255).round().astype(np.uint8), "RGBA")

def geom(path):
    im = Image.open(path)
    w, h = im.size
    diamond = w * 0.5774                      # true-iso diamond height for this sprite's width
    return {"w": w, "h": h, "lift": max(0, round(h - diamond))}

def main():
    os.makedirs(OUT, exist_ok=True)
    for c in COLORS: os.makedirs(os.path.join(OUT, c), exist_ok=True)
    sprites = {}
    n_files = 0
    for name, orients in SPRITES.items():
        for o in orients:
            src = os.path.join(SRC, "%s_%s.png" % (name, o))
            if not os.path.exists(src):
                print("missing", src); continue
            dst = os.path.join(OUT, "%s_%s.png" % (name, o))
            shutil.copyfile(src, dst); n_files += 1
            sprites["%s_%s" % (name, o)] = geom(dst)
            img = Image.open(src)
            for c, (hue, sg, vg) in COLORS.items():
                r = recolour(img, hue, sg, vg)
                if r is not None:
                    r.save(os.path.join(OUT, c, "%s_%s.png" % (name, o)), optimize=True); n_files += 1
                    sprites["%s_%s" % (name, o)]["coloured"] = True
    print("wrote", n_files, "sprites")

    # ── modules ──────────────────────────────────────────────────────────────
    def M(id, name, desc, kind, tier, price, score, parts=None, fits=None, extra=None):
        m = {"id": id, "theme": "castle", "name": name, "desc": desc, "role": "core" if kind == "core" else ("deco" if kind in ("topper", "prop") else "module"),
             "kind": kind, "tier": tier, "price": price, "score": score, "cells": 1}
        if parts: m["parts"] = parts
        if extra: m.update(extra)
        return m
    S = lambda name, o="NE": name + "_" + o
    modules = [
        # cores (reward 1): a modest keep that grows a storey as the castle grows (theme.growAt = building counts per stage)
        M("keep", "Keep", "A modest square keep with a tiled roof. It grows taller as your castle grows.", "core", 1, 80, 40,
          [S("towerSquareBase"), S("towerSquareTopRoof")], None,
          {"grow": [[S("towerSquareBase"), S("towerSquareTopRoof")],
                    [S("towerSquareBase"), S("towerSquareMidWindows"), S("towerSquareTopRoof")],
                    [S("towerSquareBaseColor"), S("towerSquareMidWindows"), S("towerSquareMidColor"), S("towerSquareTopRoofHigh")],
                    [S("towerSquareBaseColor"), S("towerSquareMidWindows"), S("towerSquareMidColor"), S("towerSquareMidWindows"), S("towerSquareTopRoofHigh")]]}),
        M("round-keep", "Round keep", "A small round keep with a pointed roof. It grows taller as your castle grows.", "core", 1, 80, 40,
          [S("towerBase"), S("towerTopRoof")], None,
          {"grow": [[S("towerBase"), S("towerTopRoof")],
                    [S("towerBase"), S("towerTop"), S("towerTopRoof")],
                    [S("towerBase"), S("towerBase"), S("towerBalcony"), S("towerTopRoof")],
                    [S("towerBase"), S("towerBase"), S("towerBalcony"), S("towerTop"), S("towerTopRoof")]]}),
        M("watch-keep", "Watch keep", "A squat keep with battlements. It grows a lookout as your castle grows.", "core", 1, 80, 38,
          [S("towerSquareBase"), S("towerSquareTop")], None,
          {"grow": [[S("towerSquareBase"), S("towerSquareTop")],
                    [S("towerSquareBase"), S("towerSquareMidOpen"), S("towerSquareTop")],
                    [S("towerSquareBase"), S("towerSquareMid"), S("towerSquareMidOpen"), S("towerSquareTop"), S("towerSquarePoles")],
                    [S("towerSquareBaseColor"), S("towerSquareMidColor"), S("towerSquareMidOpen"), S("towerSquareMidWindows"), S("towerSquareTop"), S("towerSquarePoles")]]}),
        # walls (auto-tiled: straight / corner / gate from their neighbours). Rewards 2-5 offer only towers and gate pieces (tier 1).
        M("wall", "Wall", "One length of curtain wall. It turns corners by itself.", "wall", 2, 15, 8, None, None,
          {"auto": {"u": S("wall", "NE"), "v": S("wall", "NW"), "corner": {"-u+v": S("wallCorner", "NE"), "-u-v": S("wallCorner", "SE"), "+u-v": S("wallCorner", "SW"), "+u+v": S("wallCorner", "NW")}}}),
        M("gate", "Portcullis gate", "A wall with an iron portcullis.", "wall", 1, 30, 14, None, None,
          {"auto": {"u": [S("wallDoor", "NE"), S("metalGate", "NE")], "v": [S("wallDoor", "NW"), S("metalGate", "NW")]}}),
        M("doorway", "Open gate", "A wall with an open archway through it.", "wall", 1, 25, 12, None, None,
          {"auto": {"u": S("wallDoor", "NE"), "v": S("wallDoor", "NW")}}),
        M("stairs-wall", "Wall stairs", "A wall with steps up to the walkway.", "wall", 2, 25, 10, None, None,
          {"auto": {"u": S("wallNarrowStairs", "NE"), "v": S("wallNarrowStairs", "NW")}}),
        M("corner-tower", "Corner turret", "A turret built into a corner of the wall.", "wall", 2, 40, 18, None, None,
          {"auto": {"u": S("wallCornerHalfTower", "NE"), "v": S("wallCornerHalfTower", "NW"), "corner": {"-u+v": S("wallCornerHalfTower", "NE"), "-u-v": S("wallCornerHalfTower", "SE"), "+u-v": S("wallCornerHalfTower", "SW"), "+u+v": S("wallCornerHalfTower", "NW")}}}),
        # towers
        M("round-tower", "Round tower", "A round tower with a pointed roof.", "tower", 1, 45, 25, [S("towerBase"), S("towerTop"), S("towerTopRoof")]),
        M("square-tower", "Square tower", "A square tower with battlements.", "tower", 1, 45, 25, [S("towerSquareBase"), S("towerSquareTop")]),
        M("gate-tower", "Gate tower", "A tower with an archway through its foot — a gate with battlements.", "tower", 1, 50, 28, [S("towerSquareArch"), S("towerSquareTop")]),
        M("roof-tower", "Roofed tower", "A square tower with a tiled roof.", "tower", 2, 70, 35, [S("towerSquareBase"), S("towerSquareMid"), S("towerSquareTopRoof")]),
        M("balcony-tower", "Balcony tower", "A round tower with a balcony under the roof.", "tower", 2, 70, 35, [S("towerBase"), S("towerBalcony"), S("towerTopRoof")]),
        M("watchtower", "Watchtower", "A tall open tower with a lookout deck.", "tower", 2, 75, 38, [S("towerSquareBase"), S("towerSquareMid"), S("towerSquareTop"), S("towerSquarePoles")]),
        M("grand-tower", "Grand tower", "Three storeys with coloured bands and a high roof.", "tower", 3, 120, 60, [S("towerSquareBaseColor"), S("towerSquareMidColor"), S("towerSquareMidWindows"), S("towerSquareTopRoofHigh")]),
        M("arch-tower", "Gatehouse tower", "A tall gate tower with an open gallery above the archway.", "tower", 2, 110, 55, [S("towerSquareArch"), S("towerSquareMidOpen"), S("towerSquareTopColor")]),
        M("great-tower", "Great round tower", "The tallest round tower, four storeys high.", "tower", 4, 160, 80, [S("towerBase"), S("towerBase"), S("towerBalcony"), S("towerTop"), S("towerTopRoof")]),
        M("royal-tower", "Royal tower", "Five storeys with a roof to see for miles.", "tower", 4, 180, 90, [S("towerSquareBaseColor"), S("towerSquareMidWindows"), S("towerSquareMidColor"), S("towerSquareMidWindows"), S("towerSquareTopRoofHigh")]),
        # toppers: sit on top of a tower or keep
        M("flag", "Flag", "A flag in your colour on top of a tower.", "topper", 1, 12, 6, [S("flagBlue")]),
        M("flag-wide", "Wide flag", "A big banner flag for the tallest tower.", "topper", 2, 18, 8, [S("flagBlueWide")]),
        M("banner-long", "Long banner", "A long hanging banner.", "topper", 2, 18, 8, [S("flagBannerLong")]),
        M("banner-short", "Short banner", "A short hanging banner.", "topper", 1, 12, 6, [S("flagBannerShort")]),
        # props: ground pieces in the courtyard or outside the walls
        M("bridge", "Bridge", "A wooden bridge over the moat.", "prop", 1, 25, 10, [S("bridge")]),
        M("stone-stairs", "Stone stairs", "Stone steps up to a doorway.", "prop", 1, 15, 6, [S("stairsStone")]),
        M("knight", "Knight", "A knight of your colour standing guard.", "prop", 1, 20, 8, [S("knightBlue")]),
        M("knight-red", "Red knight", "A knight in red on patrol.", "prop", 2, 20, 8, [S("knightRed")]),
        M("king", "The king", "The king himself, come to inspect the castle.", "prop", 3, 60, 25, [S("king")]),
        M("ballista", "Ballista", "A giant crossbow on the walls.", "prop", 2, 45, 18, [S("siegeBallista")]),
        M("catapult", "Catapult", "A catapult in the courtyard.", "prop", 2, 55, 22, [S("siegeCatapult")]),
        M("ram", "Battering ram", "A covered battering ram.", "prop", 3, 60, 24, [S("siegeRam")]),
        M("trebuchet", "Trebuchet", "The biggest siege engine of all.", "prop", 3, 90, 40, [S("siegeTrebuchet")]),
        M("siege-tower", "Siege tower", "A rolling tower for storming walls.", "prop", 4, 110, 45, [S("siegeTower")]),
    ]
    for m in modules:
        m["img"] = "assets/build/kit/" + ((m.get("parts") or [None])[0] or (m.get("auto") or {}).get("u") if not isinstance((m.get("auto") or {}).get("u"), list) else m["auto"]["u"][0]) + ".png" if (m.get("parts") or m.get("auto")) else ""
        m["nostyle"] = False
    # ── write pieces.json ────────────────────────────────────────────────────
    pj = os.path.join(ROOT, "assets", "build", "pieces.json")
    d = json.load(open(pj))
    d["pieces"] = [p for p in d["pieces"] if p["theme"] != "castle"] + modules
    d["kit"] = {"dir": "assets/build/kit/", "cellW": CELL_W, "cellH": CELL_H, "sprites": sprites}
    d["themes"]["castle"] = {
        "name": "Castle", "desc": "A modest keep that grows into a grand castle: towers and gates first, walls that turn corners, flags in your colour.",
        "kit": True, "cell": CELL_W, "cellH": CELL_H, "unitPx": 1, "drawScale": 1, "wallLevel": 8,
        "growAt": [1, 4, 8, 13],   # buildings (rewards + shop, not the auto walls) at which the keep reaches growth stage 0..3
        "styles": [
            {"id": "blue", "name": "Royal Blue", "desc": "Blue roofs, flags and bands.", "dir": "", "pairs": ["gold"]},
            {"id": "red", "name": "Crimson", "desc": "Red roofs, flags and bands.", "dir": "red/", "pairs": ["gold"]},
            {"id": "green", "name": "Forest", "desc": "Green roofs, flags and bands.", "dir": "green/", "pairs": ["blue"]},
            {"id": "gold", "name": "Gold", "desc": "Gold roofs, flags and bands.", "dir": "gold/", "pairs": ["red"]},
        ],
        "ranks": [[0, "Camp"], [120, "Fort"], [300, "Stronghold"], [600, "Castle"], [1000, "Fortress"], [1600, "Citadel"], [2400, "Royal Seat"]],
        "packs": [
            {"id": "walls", "name": "Wall pack", "desc": "Four lengths of curtain wall, 25% off. They turn corners by themselves.", "items": ["wall", "wall", "wall", "wall"], "discount": 0.25},
            {"id": "gatehouse", "name": "Gatehouse pack", "desc": "A gate with a square tower either side, 15% off.", "items": ["square-tower", "gate", "square-tower"], "discount": 0.15},
            {"id": "tower", "name": "Tower pack", "desc": "A round tower with a flag on top, 15% off.", "items": ["round-tower", "flag"], "discount": 0.15},
            {"id": "siege", "name": "Siege pack", "desc": "A catapult and a ballista for the courtyard, 20% off.", "items": ["catapult", "ballista"], "discount": 0.2},
        ],
    }
    d["v"] = 2
    json.dump(d, open(pj, "w"), indent=1)
    print("castle modules:", len(modules), "→", pj)

if __name__ == "__main__":
    main()
