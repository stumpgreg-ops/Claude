/* SOL Labyrinth — Geometry game (family GEO), polygons: G.PC.2 (Virginia 2023 Geometry SOL), v5.20 packs for the
   rocks mode, Rune Rocks (space, science and weather) and the sky mode, Sun Chariot (travel and getting around).
   Original items only. A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in
   css/after-hours.css) and the given facts, then six questions about it. Every numeric answer was computed, and
   every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-pc2-rocks-telescope-mirror",
      family: "GEO",
      mode: "rocks",
      title: "The Telescope Mirror Frame",
      kind: "Polygons · G.PC.2",
      blurb: "A nine-sided frame holds a telescope mirror.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A regular nonagon mirror frame. Dashed diagonals from the top corner A split it into seven triangles, shaded in turn. A gold arc marks the interior angle at a bottom corner\"><polygon class=\"sh2\" points=\"160,20 202.4,35.4 225,74.5\"/><polygon class=\"thin\" points=\"160,20 225,74.5 217.2,119\"/><polygon class=\"sh2\" points=\"160,20 217.2,119 182.6,148\"/><polygon class=\"thin\" points=\"160,20 182.6,148 137.4,148\"/><polygon class=\"sh2\" points=\"160,20 137.4,148 102.8,119\"/><polygon class=\"thin\" points=\"160,20 102.8,119 95,74.5\"/><polygon class=\"sh2\" points=\"160,20 95,74.5 117.6,35.4\"/><polygon class=\"ln\" points=\"160,20 202.4,35.4 225,74.5 217.2,119 182.6,148 137.4,148 102.8,119 95,74.5 117.6,35.4\"/><line class=\"thin dash\" x1=\"160\" y1=\"20\" x2=\"225\" y2=\"74.5\"/><line class=\"thin dash\" x1=\"160\" y1=\"20\" x2=\"217.2\" y2=\"119\"/><line class=\"thin dash\" x1=\"160\" y1=\"20\" x2=\"182.6\" y2=\"148\"/><line class=\"thin dash\" x1=\"160\" y1=\"20\" x2=\"137.4\" y2=\"148\"/><line class=\"thin dash\" x1=\"160\" y1=\"20\" x2=\"102.8\" y2=\"119\"/><line class=\"thin dash\" x1=\"160\" y1=\"20\" x2=\"95\" y2=\"74.5\"/><path class=\"ac\" d=\"M126.7 139 A14 14 0 0 1 151.4 148\"/><circle class=\"dt\" cx=\"160\" cy=\"20\" r=\"3\"/><circle class=\"dt\" cx=\"202.4\" cy=\"35.4\" r=\"3\"/><circle class=\"dt\" cx=\"225\" cy=\"74.5\" r=\"3\"/><circle class=\"dt\" cx=\"217.2\" cy=\"119\" r=\"3\"/><circle class=\"dt\" cx=\"182.6\" cy=\"148\" r=\"3\"/><circle class=\"dt\" cx=\"137.4\" cy=\"148\" r=\"3\"/><circle class=\"dt\" cx=\"102.8\" cy=\"119\" r=\"3\"/><circle class=\"dt\" cx=\"95\" cy=\"74.5\" r=\"3\"/><circle class=\"dt\" cx=\"117.6\" cy=\"35.4\" r=\"3\"/><text x=\"160\" y=\"12\" text-anchor=\"middle\">A</text></svg></figure><p class=\"geo-given\">A telescope mirror sits in a frame shaped like a regular nonagon (9 congruent sides and 9 congruent angles). Dashed diagonals from corner <strong>A</strong> split the frame into triangles. The gold arc marks one interior angle.</p>",
      claims: [
        {
          id: "triangles",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "How many triangles do the diagonals from A make?",
          choices: [
            { letter: "A", text: "9" },
            { letter: "B", text: "7" },
            { letter: "C", text: "6" },
            { letter: "D", text: "8" }
          ],
          correct: "B"
        },
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the frame?",
          choices: [
            { letter: "A", text: "1620°" },
            { letter: "B", text: "1440°" },
            { letter: "C", text: "360°" },
            { letter: "D", text: "1260°" }
          ],
          correct: "D"
        },
        {
          id: "gold",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of the gold interior angle?",
          choices: [
            { letter: "A", text: "140°" },
            { letter: "B", text: "40°" },
            { letter: "C", text: "180°" },
            { letter: "D", text: "157.5°" }
          ],
          correct: "A"
        },
        {
          id: "exterior",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of each exterior angle of the frame?",
          choices: [
            { letter: "A", text: "140°" },
            { letter: "B", text: "20°" },
            { letter: "C", text: "40°" },
            { letter: "D", text: "45°" }
          ],
          correct: "C"
        },
        {
          id: "error",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Ava says the frame's angles add to 9 · 180° = 1620°, one triangle for each corner. What is her mistake?",
          choices: [
            { letter: "A", text: "She should use 9 · 360°, one full turn per corner." },
            { letter: "B", text: "She should use 9 · 90°, since each angle is acute." },
            { letter: "C", text: "The angles of any polygon add to 360°." },
            { letter: "D", text: "The diagonals from A make only 7 triangles." }
          ],
          correct: "D"
        },
        {
          id: "bigger",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A larger telescope's mirror frame is a regular polygon with exterior angles of 9°. How many sides does it have?",
          choices: [
            { letter: "A", text: "20" },
            { letter: "B", text: "171" },
            { letter: "C", text: "40" },
            { letter: "D", text: "42" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-rocks-radio-dish",
      family: "GEO",
      mode: "rocks",
      title: "The Radio Dish Rim",
      kind: "Polygons · G.PC.2",
      blurb: "The rim of a radio dish is a regular 20-gon.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Part of the rim of a radio dish: five corners of a regular 20-gon joined by straight rim sections, with dashed spokes to the centre O. Angle 1 is an interior angle of the rim. One rim section is extended (dashed) and angle 2, in gold, is the exterior angle\"><polygon class=\"sh2\" points=\"160,146 87.1,45.7 121.7,28.1\"/><polygon class=\"sh2\" points=\"160,146 121.7,28.1 160,22\"/><polygon class=\"sh2\" points=\"160,146 160,22 198.3,28.1\"/><polygon class=\"sh2\" points=\"160,146 198.3,28.1 232.9,45.7\"/><line class=\"thin dash\" x1=\"160\" y1=\"146\" x2=\"87.1\" y2=\"45.7\"/><line class=\"thin dash\" x1=\"160\" y1=\"146\" x2=\"121.7\" y2=\"28.1\"/><line class=\"thin dash\" x1=\"160\" y1=\"146\" x2=\"160\" y2=\"22\"/><line class=\"thin dash\" x1=\"160\" y1=\"146\" x2=\"198.3\" y2=\"28.1\"/><line class=\"thin dash\" x1=\"160\" y1=\"146\" x2=\"232.9\" y2=\"45.7\"/><polyline class=\"ln\" points=\"87.1,45.7 121.7,28.1 160,22 198.3,28.1 232.9,45.7\"/><line class=\"thin dash\" x1=\"59.7\" y1=\"73.1\" x2=\"87.1\" y2=\"45.7\"/><line class=\"thin dash\" x1=\"232.9\" y1=\"45.7\" x2=\"260.3\" y2=\"73.1\"/><line class=\"ln dash\" x1=\"198.3\" y1=\"28.1\" x2=\"237.8\" y2=\"34.3\"/><path class=\"thin\" d=\"M134.5 26 A13 13 0 0 1 110.1 34\"/><path class=\"ac\" d=\"M220 31.5 A22 22 0 0 1 217.9 38.1\"/><text x=\"122.4\" y=\"56.8\" text-anchor=\"middle\">1</text><text class=\"acc\" x=\"230.8\" y=\"43.3\" text-anchor=\"middle\">2</text><circle class=\"dt\" cx=\"87.1\" cy=\"45.7\" r=\"3\"/><circle class=\"dt\" cx=\"121.7\" cy=\"28.1\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"198.3\" cy=\"28.1\" r=\"3\"/><circle class=\"dt\" cx=\"232.9\" cy=\"45.7\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"146\" r=\"3\"/><text x=\"160\" y=\"163\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"70\" y=\"32\" text-anchor=\"middle\">rim</text></svg></figure><p class=\"geo-given\">The rim of a radio telescope dish is a regular 20-gon with center <strong>O</strong>; the figure shows part of it. ∠1 is an interior angle of the rim. One rim section is extended (dashed), and ∠2 is the exterior angle it makes.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the 20-gon rim?",
          choices: [
            { letter: "A", text: "3240°" },
            { letter: "B", text: "3600°" },
            { letter: "C", text: "3420°" },
            { letter: "D", text: "360°" }
          ],
          correct: "A"
        },
        {
          id: "angle1",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠1, an interior angle of the rim?",
          choices: [
            { letter: "A", text: "18°" },
            { letter: "B", text: "171°" },
            { letter: "C", text: "162°" },
            { letter: "D", text: "180°" }
          ],
          correct: "C"
        },
        {
          id: "angle2",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠2, the gold exterior angle?",
          choices: [
            { letter: "A", text: "162°" },
            { letter: "B", text: "9°" },
            { letter: "C", text: "20°" },
            { letter: "D", text: "18°" }
          ],
          correct: "D"
        },
        {
          id: "extsum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Picture one exterior angle at each of the 20 corners of the rim. What is the sum of those exterior angles?",
          choices: [
            { letter: "A", text: "3240°" },
            { letter: "B", text: "360°" },
            { letter: "C", text: "7200°" },
            { letter: "D", text: "180°" }
          ],
          correct: "B"
        },
        {
          id: "smaller",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A smaller dish has a rim that is a regular polygon with interior angles of 168°. How many sides does that rim have?",
          choices: [
            { letter: "A", text: "30" },
            { letter: "B", text: "12" },
            { letter: "C", text: "about 2.1" },
            { letter: "D", text: "15" }
          ],
          correct: "A"
        },
        {
          id: "huge",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A huge dish has a rim that is a regular polygon with exterior angles of 4°. How many sides does that rim have?",
          choices: [
            { letter: "A", text: "45" },
            { letter: "B", text: "90" },
            { letter: "C", text: "176" },
            { letter: "D", text: "92" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc2-rocks-crystal-lattice",
      family: "GEO",
      mode: "rocks",
      title: "The Crystal Lattice",
      kind: "Polygons · G.PC.2",
      blurb: "Squares and triangles cover a crystal surface.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 146\" role=\"img\" aria-label=\"A strip of a crystal surface: a row of squares between two rows of equilateral triangles. At point P three gold triangles meet above two blue squares\"><polygon class=\"sh\" points=\"124,39.2 142,8 160,39.2\"/><polygon class=\"sh\" points=\"142,8 178,8 160,39.2\"/><polygon class=\"sh\" points=\"160,39.2 178,8 196,39.2\"/><polygon class=\"sh2\" points=\"124,39.2 160,39.2 160,75.2 124,75.2\"/><polygon class=\"sh2\" points=\"160,39.2 196,39.2 196,75.2 160,75.2\"/><line class=\"ln\" x1=\"16\" y1=\"39.2\" x2=\"304\" y2=\"39.2\"/><line class=\"ln\" x1=\"16\" y1=\"75.2\" x2=\"304\" y2=\"75.2\"/><line class=\"ln\" x1=\"34\" y1=\"8\" x2=\"286\" y2=\"8\"/><line class=\"ln\" x1=\"34\" y1=\"106.4\" x2=\"286\" y2=\"106.4\"/><line class=\"ln\" x1=\"16\" y1=\"39.2\" x2=\"16\" y2=\"75.2\"/><line class=\"ln\" x1=\"52\" y1=\"39.2\" x2=\"52\" y2=\"75.2\"/><line class=\"ln\" x1=\"88\" y1=\"39.2\" x2=\"88\" y2=\"75.2\"/><line class=\"ln\" x1=\"124\" y1=\"39.2\" x2=\"124\" y2=\"75.2\"/><line class=\"ln\" x1=\"160\" y1=\"39.2\" x2=\"160\" y2=\"75.2\"/><line class=\"ln\" x1=\"196\" y1=\"39.2\" x2=\"196\" y2=\"75.2\"/><line class=\"ln\" x1=\"232\" y1=\"39.2\" x2=\"232\" y2=\"75.2\"/><line class=\"ln\" x1=\"268\" y1=\"39.2\" x2=\"268\" y2=\"75.2\"/><line class=\"ln\" x1=\"304\" y1=\"39.2\" x2=\"304\" y2=\"75.2\"/><polyline class=\"ln\" points=\"16,39.2 34,8 52,39.2 70,8 88,39.2 106,8 124,39.2 142,8 160,39.2 178,8 196,39.2 214,8 232,39.2 250,8 268,39.2 286,8 304,39.2\"/><polyline class=\"ln\" points=\"16,75.2 34,106.4 52,75.2 70,106.4 88,75.2 106,106.4 124,75.2 142,106.4 160,75.2 178,106.4 196,75.2 214,106.4 232,75.2 250,106.4 268,75.2 286,106.4 304,75.2\"/><circle class=\"dta\" cx=\"160\" cy=\"39.2\" r=\"3\"/><text class=\"acc\" x=\"169\" y=\"56.2\" text-anchor=\"middle\">P</text></svg></figure><p class=\"geo-given\">Under a microscope, a crystal surface shows squares and equilateral triangles with no gaps or overlaps. At point <strong>P</strong>, three triangles (gold) and two squares (blue) meet.</p>",
      claims: [
        {
          id: "atP",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which calculation shows why the shapes leave no gap at P?",
          choices: [
            { letter: "A", text: "2(60°) + 3(90°) = 390°" },
            { letter: "B", text: "3(120°) + 2(90°) = 540°" },
            { letter: "C", text: "3(60°) + 2(90°) = 360°" },
            { letter: "D", text: "5(72°) = 360°" }
          ],
          correct: "C"
        },
        {
          id: "octagon",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Each angle of a regular octagon is 135°. Which reason explains why regular octagons alone cannot cover a flat surface with no gaps or overlaps?",
          choices: [
            { letter: "A", text: "360 ÷ 135 is not a whole number." },
            { letter: "B", text: "Its angle sum, 1080°, is not a multiple of 360°." },
            { letter: "C", text: "Its exterior angles add to more than 360°." },
            { letter: "D", text: "Only polygons with an odd number of sides tile." }
          ],
          correct: "A"
        },
        {
          id: "pentagons",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "In another crystal, two regular pentagons (108° angles) and one other regular polygon meet at a point with no gap or overlap. How many sides does the other polygon have?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "2.5" },
            { letter: "C", text: "144" },
            { letter: "D", text: "10" }
          ],
          correct: "D"
        },
        {
          id: "hexagon",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "Four equilateral triangles and one other regular polygon meet at a point with no gap. How many sides does the other polygon have?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "6" },
            { letter: "C", text: "120" },
            { letter: "D", text: "5" }
          ],
          correct: "B"
        },
        {
          id: "heptagons",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Mia says three regular heptagons (128.6° angles, to the nearest tenth) can fit around a point with no gap or overlap. Which is true?",
          choices: [
            { letter: "A", text: "Yes: 3(128.6°) ≈ 360°." },
            { letter: "B", text: "No: they leave a gap of about 25.7°." },
            { letter: "C", text: "Yes: 7(51.4°) = 360°." },
            { letter: "D", text: "No: 3(128.6°) ≈ 385.7°, so they overlap." }
          ],
          correct: "D"
        },
        {
          id: "list",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which list names every regular polygon that can cover a flat surface by itself, with no gaps or overlaps?",
          choices: [
            { letter: "A", text: "triangle, square, pentagon, hexagon" },
            { letter: "B", text: "square and hexagon only" },
            { letter: "C", text: "triangle, square, hexagon" },
            { letter: "D", text: "square, hexagon, octagon" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-rocks-snow-crystal",
      family: "GEO",
      mode: "rocks",
      title: "The Six-Point Snow Crystal",
      kind: "Polygons · G.PC.2",
      blurb: "A hexagon's sides, extended, make a star.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A six-point star made by extending the sides of a regular hexagon. The hexagon is outlined in the middle. A gold arc marks the angle at the top tip T. Angle 1 is between an extended side and the next side of the hexagon\"><polygon class=\"sh2\" points=\"160,22.6 178,53.8 214,53.8 196,85 214,116.2 178,116.2 160,147.4 142,116.2 106,116.2 124,85 106,53.8 142,53.8\"/><polygon class=\"ln\" points=\"196,85 178,116.2 142,116.2 124,85 142,53.8 178,53.8\"/><line class=\"thin dash\" x1=\"142\" y1=\"53.8\" x2=\"178\" y2=\"53.8\"/><path class=\"ac\" d=\"M167.5 35.6 A15 15 0 0 1 152.5 35.6\"/><path class=\"thin\" d=\"M190 53.8 A12 12 0 0 1 184 64.2\"/><text class=\"acc\" x=\"160\" y=\"15.6\" text-anchor=\"middle\">T</text><text x=\"198.1\" y=\"69.8\" text-anchor=\"middle\">1</text></svg></figure><p class=\"geo-given\">A snow crystal is modeled by a regular hexagon. Each side is extended both ways until it meets the extended sides next to it, making a six-point star. ∠1 is an exterior angle of the hexagon. The gold arc marks the angle at tip <strong>T</strong>.</p>",
      claims: [
        {
          id: "angle1",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠1, the exterior angle of the hexagon?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "30°" },
            { letter: "D", text: "72°" }
          ],
          correct: "B"
        },
        {
          id: "tip",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of the gold angle at tip T?",
          choices: [
            { letter: "A", text: "60°" },
            { letter: "B", text: "120°" },
            { letter: "C", text: "30°" },
            { letter: "D", text: "90°" }
          ],
          correct: "A"
        },
        {
          id: "tipsum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the angles at all six tips of the star?",
          choices: [
            { letter: "A", text: "720°" },
            { letter: "B", text: "1080°" },
            { letter: "C", text: "180°" },
            { letter: "D", text: "360°" }
          ],
          correct: "D"
        },
        {
          id: "kind",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What kind of triangle is each tip of the star?",
          choices: [
            { letter: "A", text: "isosceles, with angles 120°, 30°, 30°" },
            { letter: "B", text: "right, with angles 90°, 45°, 45°" },
            { letter: "C", text: "equilateral, with three 60° angles" },
            { letter: "D", text: "isosceles, with angles 30°, 75°, 75°" }
          ],
          correct: "C"
        },
        {
          id: "octagon",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "The sides of a regular octagon are extended the same way to make an 8-point star. What is the angle at each tip?",
          choices: [
            { letter: "A", text: "45°" },
            { letter: "B", text: "135°" },
            { letter: "C", text: "90°" },
            { letter: "D", text: "270°" }
          ],
          correct: "C"
        },
        {
          id: "sides",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A star is made the same way from a regular polygon, and each tip angle is 120°. How many sides does the polygon have?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "3" },
            { letter: "C", text: "30" },
            { letter: "D", text: "12" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc2-rocks-science-graph",
      family: "GEO",
      mode: "rocks",
      title: "The Science Fair Graph",
      kind: "Polygons · G.PC.2",
      blurb: "A graph of interior angle against the number of sides.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A scatter graph. The horizontal axis is the number of sides n, from 3 to 10. The vertical axis is the angle in degrees, from 0 to 180. Eight points rise from 60 at n = 3 toward a dashed line at 180; the point for n = 8 is gold\"><line class=\"gr\" x1=\"50\" y1=\"121.7\" x2=\"304\" y2=\"121.7\"/><line class=\"gr\" x1=\"50\" y1=\"103.3\" x2=\"304\" y2=\"103.3\"/><line class=\"gr\" x1=\"50\" y1=\"85\" x2=\"304\" y2=\"85\"/><line class=\"gr\" x1=\"50\" y1=\"66.7\" x2=\"304\" y2=\"66.7\"/><line class=\"gr\" x1=\"50\" y1=\"48.3\" x2=\"304\" y2=\"48.3\"/><line class=\"gr\" x1=\"50\" y1=\"30\" x2=\"304\" y2=\"30\"/><line class=\"gr\" x1=\"80\" y1=\"140\" x2=\"80\" y2=\"30\"/><line class=\"gr\" x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\"/><line class=\"gr\" x1=\"140\" y1=\"140\" x2=\"140\" y2=\"30\"/><line class=\"gr\" x1=\"170\" y1=\"140\" x2=\"170\" y2=\"30\"/><line class=\"gr\" x1=\"200\" y1=\"140\" x2=\"200\" y2=\"30\"/><line class=\"gr\" x1=\"230\" y1=\"140\" x2=\"230\" y2=\"30\"/><line class=\"gr\" x1=\"260\" y1=\"140\" x2=\"260\" y2=\"30\"/><line class=\"gr\" x1=\"290\" y1=\"140\" x2=\"290\" y2=\"30\"/><line class=\"ax\" x1=\"50\" y1=\"140\" x2=\"306\" y2=\"140\"/><line class=\"ax\" x1=\"50\" y1=\"140\" x2=\"50\" y2=\"18\"/><line class=\"ln dash\" x1=\"50\" y1=\"30\" x2=\"304\" y2=\"30\"/><text class=\"sm\" x=\"44\" y=\"144\" text-anchor=\"end\">0</text><text class=\"sm\" x=\"44\" y=\"107.3\" text-anchor=\"end\">60</text><text class=\"sm\" x=\"44\" y=\"70.7\" text-anchor=\"end\">120</text><text class=\"sm\" x=\"44\" y=\"34\" text-anchor=\"end\">180</text><text class=\"sm\" x=\"80\" y=\"155\" text-anchor=\"middle\">3</text><text class=\"sm\" x=\"110\" y=\"155\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"140\" y=\"155\" text-anchor=\"middle\">5</text><text class=\"sm\" x=\"170\" y=\"155\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"200\" y=\"155\" text-anchor=\"middle\">7</text><text class=\"sm\" x=\"230\" y=\"155\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"260\" y=\"155\" text-anchor=\"middle\">9</text><text class=\"sm\" x=\"290\" y=\"155\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"308\" y=\"144\" text-anchor=\"start\">n</text><text class=\"sm\" x=\"54\" y=\"12\" text-anchor=\"start\">angle (°)</text><circle class=\"dt\" cx=\"80\" cy=\"103.3\" r=\"3\"/><circle class=\"dt\" cx=\"110\" cy=\"85\" r=\"3\"/><circle class=\"dt\" cx=\"140\" cy=\"74\" r=\"3\"/><circle class=\"dt\" cx=\"170\" cy=\"66.7\" r=\"3\"/><circle class=\"dt\" cx=\"200\" cy=\"61.4\" r=\"3\"/><circle class=\"dta\" cx=\"230\" cy=\"57.5\" r=\"3\"/><circle class=\"dt\" cx=\"260\" cy=\"54.4\" r=\"3\"/><circle class=\"dt\" cx=\"290\" cy=\"52\" r=\"3\"/></svg></figure><p class=\"geo-given\">For a science fair, students found one interior angle of each regular polygon with 3 to 10 sides and graphed the angle against the number of sides, n. The dashed line marks 180°.</p>",
      claims: [
        {
          id: "gold",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the exact angle shown by the gold point, for n = 8?",
          choices: [
            { letter: "A", text: "45°" },
            { letter: "B", text: "1080°" },
            { letter: "C", text: "135°" },
            { letter: "D", text: "157.5°" }
          ],
          correct: "C"
        },
        {
          id: "trend",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement about the graph is true?",
          choices: [
            { letter: "A", text: "As n grows, the angle gets closer to 180° but never reaches it." },
            { letter: "B", text: "The angle grows by the same amount each time n grows by 1." },
            { letter: "C", text: "For a large enough n, the angle is more than 180°." },
            { letter: "D", text: "The angle is largest when n = 3." }
          ],
          correct: "A"
        },
        {
          id: "fifteen",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "If the graph were extended, what angle would the point for n = 15 show?",
          choices: [
            { letter: "A", text: "24°" },
            { letter: "B", text: "156°" },
            { letter: "C", text: "2340°" },
            { letter: "D", text: "168°" }
          ],
          correct: "B"
        },
        {
          id: "which",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "On the extended graph, one point shows an angle of 175°. What is n for that point?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "36" },
            { letter: "C", text: "about 2.1" },
            { letter: "D", text: "72" }
          ],
          correct: "D"
        },
        {
          id: "ben",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "For n = 7, Ben graphed 154.3° (to the nearest tenth). Which error did he make?",
          choices: [
            { letter: "A", text: "He used 7 · 180° instead of (7 − 2) · 180°." },
            { letter: "B", text: "He divided the sum by 5 instead of 7." },
            { letter: "C", text: "He used (7 − 1) · 180° instead of (7 − 2) · 180°." },
            { letter: "D", text: "He subtracted the exterior angle from 360°." }
          ],
          correct: "C"
        },
        {
          id: "extsum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "A second graph shows the SUM of the exterior angles of each polygon, n = 3 to 10. What does that graph look like?",
          choices: [
            { letter: "A", text: "points rising by 180° for each added side" },
            { letter: "B", text: "a flat row of points at 360°" },
            { letter: "C", text: "points falling closer and closer to 0°" },
            { letter: "D", text: "a flat row of points at 180°" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc2-rocks-station-module",
      family: "GEO",
      mode: "rocks",
      title: "The Space Station Module",
      kind: "Polygons · G.PC.2",
      blurb: "An eight-sided module floor with angles in terms of x.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Convex octagon ABCDEFGH with right angles at A and B along the bottom. The angles at C and H are (x + 120) degrees, at D and G (3x + 30) degrees, and at E and F (2x + 60) degrees\"><polygon class=\"sh2\" points=\"60,134 260,134 260,102 242.9,55 204.6,22.9 115.4,22.9 77.1,55 60,102\"/><path class=\"thin\" d=\"M60 124 L70 124 L70 134\"/><path class=\"thin\" d=\"M250 134 L250 124 L260 124\"/><path class=\"thin\" d=\"M260 112 A10 10 0 0 1 256.6 92.6\"/><text class=\"sm\" x=\"224.5\" y=\"112.3\" text-anchor=\"middle\">(x + 120)°</text><path class=\"thin\" d=\"M246.3 64.4 A10 10 0 0 1 235.2 48.6\"/><text class=\"sm\" x=\"215\" y=\"78.5\" text-anchor=\"middle\">(3x + 30)°</text><path class=\"thin\" d=\"M212.3 29.3 A10 10 0 0 1 194.6 22.9\"/><text class=\"sm\" x=\"194.3\" y=\"55.1\" text-anchor=\"middle\">(2x + 60)°</text><path class=\"thin\" d=\"M125.4 22.9 A10 10 0 0 1 107.7 29.3\"/><text class=\"sm\" x=\"125.7\" y=\"55.1\" text-anchor=\"middle\">(2x + 60)°</text><path class=\"thin\" d=\"M84.8 48.6 A10 10 0 0 1 73.7 64.4\"/><text class=\"sm\" x=\"105\" y=\"78.5\" text-anchor=\"middle\">(3x + 30)°</text><path class=\"thin\" d=\"M63.4 92.6 A10 10 0 0 1 60 112\"/><text class=\"sm\" x=\"95.5\" y=\"112.3\" text-anchor=\"middle\">(x + 120)°</text><circle class=\"dt\" cx=\"60\" cy=\"134\" r=\"3\"/><text x=\"50\" y=\"149\" text-anchor=\"middle\">A</text><circle class=\"dt\" cx=\"260\" cy=\"134\" r=\"3\"/><text x=\"270\" y=\"149\" text-anchor=\"middle\">B</text><circle class=\"dt\" cx=\"260\" cy=\"102\" r=\"3\"/><text x=\"272\" y=\"107\" text-anchor=\"middle\">C</text><circle class=\"dt\" cx=\"242.9\" cy=\"55\" r=\"3\"/><text x=\"252.9\" y=\"54\" text-anchor=\"middle\">D</text><circle class=\"dt\" cx=\"204.6\" cy=\"22.9\" r=\"3\"/><text x=\"209.6\" y=\"18.9\" text-anchor=\"middle\">E</text><circle class=\"dt\" cx=\"115.4\" cy=\"22.9\" r=\"3\"/><text x=\"110.4\" y=\"18.9\" text-anchor=\"middle\">F</text><circle class=\"dt\" cx=\"77.1\" cy=\"55\" r=\"3\"/><text x=\"67.1\" y=\"54\" text-anchor=\"middle\">G</text><circle class=\"dt\" cx=\"60\" cy=\"102\" r=\"3\"/><text x=\"48\" y=\"107\" text-anchor=\"middle\">H</text></svg></figure><p class=\"geo-given\">The floor of a space station module is the convex octagon <strong>ABCDEFGH</strong>. ∠A and ∠B are right angles. The other angle measures, in degrees, are shown in terms of x.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which equation can be used to find x?",
          choices: [
            { letter: "A", text: "12x + 420 = 1080" },
            { letter: "B", text: "12x + 600 = 1080" },
            { letter: "C", text: "12x + 600 = 1440" },
            { letter: "D", text: "12x + 600 = 360" }
          ],
          correct: "B"
        },
        {
          id: "x",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the value of x?",
          choices: [
            { letter: "A", text: "55" },
            { letter: "B", text: "70" },
            { letter: "C", text: "25" },
            { letter: "D", text: "40" }
          ],
          correct: "D"
        },
        {
          id: "angleE",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠E?",
          choices: [
            { letter: "A", text: "140°" },
            { letter: "B", text: "170°" },
            { letter: "C", text: "40°" },
            { letter: "D", text: "110°" }
          ],
          correct: "A"
        },
        {
          id: "extC",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of an exterior angle of the module at corner C?",
          choices: [
            { letter: "A", text: "160°" },
            { letter: "B", text: "200°" },
            { letter: "C", text: "20°" },
            { letter: "D", text: "45°" }
          ],
          correct: "C"
        },
        {
          id: "extsix",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the exterior angles at the six corners C, D, E, F, G and H?",
          choices: [
            { letter: "A", text: "180°" },
            { letter: "B", text: "360°" },
            { letter: "C", text: "900°" },
            { letter: "D", text: "270°" }
          ],
          correct: "A"
        },
        {
          id: "mean",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A regular polygon has interior angles equal to the mean (average) of this module's eight angles. How many sides does it have?",
          choices: [
            { letter: "A", text: "about 2.7" },
            { letter: "B", text: "4" },
            { letter: "C", text: "10" },
            { letter: "D", text: "8" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc2-rocks-satellite-ring",
      family: "GEO",
      mode: "rocks",
      title: "The Satellite Ring",
      kind: "Polygons · G.PC.2",
      blurb: "Laser links join satellites into a regular polygon.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Twenty-four satellites evenly spaced on a circular orbit around a planet. Straight links join neighboring satellites into a regular polygon. At the top satellite, the gold angle between its two links is 165 degrees\"><circle class=\"thin dash\" cx=\"160\" cy=\"82\" r=\"77\"/><circle class=\"sh2\" cx=\"160\" cy=\"82\" r=\"24\"/><polygon class=\"ln\" points=\"160,14 177.6,16.3 194,23.1 208.1,33.9 218.9,48 225.7,64.4 228,82 225.7,99.6 218.9,116 208.1,130.1 194,140.9 177.6,147.7 160,150 142.4,147.7 126,140.9 111.9,130.1 101.1,116 94.3,99.6 92,82 94.3,64.4 101.1,48 111.9,33.9 126,23.1 142.4,16.3\"/><path class=\"ac\" d=\"M170.9 15.4 A11 11 0 0 1 149.1 15.4\"/><circle class=\"dta\" cx=\"160\" cy=\"14\" r=\"3\"/><circle class=\"dt\" cx=\"177.6\" cy=\"16.3\" r=\"3\"/><circle class=\"dt\" cx=\"194\" cy=\"23.1\" r=\"3\"/><circle class=\"dt\" cx=\"208.1\" cy=\"33.9\" r=\"3\"/><circle class=\"dt\" cx=\"218.9\" cy=\"48\" r=\"3\"/><circle class=\"dt\" cx=\"225.7\" cy=\"64.4\" r=\"3\"/><circle class=\"dt\" cx=\"228\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"225.7\" cy=\"99.6\" r=\"3\"/><circle class=\"dt\" cx=\"218.9\" cy=\"116\" r=\"3\"/><circle class=\"dt\" cx=\"208.1\" cy=\"130.1\" r=\"3\"/><circle class=\"dt\" cx=\"194\" cy=\"140.9\" r=\"3\"/><circle class=\"dt\" cx=\"177.6\" cy=\"147.7\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"142.4\" cy=\"147.7\" r=\"3\"/><circle class=\"dt\" cx=\"126\" cy=\"140.9\" r=\"3\"/><circle class=\"dt\" cx=\"111.9\" cy=\"130.1\" r=\"3\"/><circle class=\"dt\" cx=\"101.1\" cy=\"116\" r=\"3\"/><circle class=\"dt\" cx=\"94.3\" cy=\"99.6\" r=\"3\"/><circle class=\"dt\" cx=\"92\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"94.3\" cy=\"64.4\" r=\"3\"/><circle class=\"dt\" cx=\"101.1\" cy=\"48\" r=\"3\"/><circle class=\"dt\" cx=\"111.9\" cy=\"33.9\" r=\"3\"/><circle class=\"dt\" cx=\"126\" cy=\"23.1\" r=\"3\"/><circle class=\"dt\" cx=\"142.4\" cy=\"16.3\" r=\"3\"/><text class=\"acc\" x=\"160\" y=\"44\" text-anchor=\"middle\">165°</text><text class=\"sm\" x=\"160\" y=\"86\" text-anchor=\"middle\">planet</text><text class=\"sm\" x=\"242\" y=\"32\" text-anchor=\"start\">orbit</text></svg></figure><p class=\"geo-given\">Satellites are evenly spaced on a circular orbit. A laser link joins each satellite to its two neighbors, so the links form a regular polygon. The angle at each satellite between its two links is 165°.</p>",
      claims: [
        {
          id: "count",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "Use the 165° angle to find the number of satellites in the ring.",
          choices: [
            { letter: "A", text: "15" },
            { letter: "B", text: "12" },
            { letter: "C", text: "24" },
            { letter: "D", text: "about 2.2" }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "A signal travels along the links around the ring. Through what angle does its direction turn at each satellite?",
          choices: [
            { letter: "A", text: "15°" },
            { letter: "B", text: "165°" },
            { letter: "C", text: "7.5°" },
            { letter: "D", text: "30°" }
          ],
          correct: "A"
        },
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the angles between links at all the satellites in the ring?",
          choices: [
            { letter: "A", text: "4320°" },
            { letter: "B", text: "3960°" },
            { letter: "C", text: "4140°" },
            { letter: "D", text: "360°" }
          ],
          correct: "B"
        },
        {
          id: "np",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "Planners ask for a regular ring with a 125° angle at each satellite. Which is true?",
          choices: [
            { letter: "A", text: "It works with 6 satellites (360 ÷ 55, rounded down)." },
            { letter: "B", text: "It works with 7 satellites (360 ÷ 55, rounded up)." },
            { letter: "C", text: "It works, because 125° is less than 180°." },
            { letter: "D", text: "It cannot be done: 360 ÷ 55 is not whole." }
          ],
          correct: "D"
        },
        {
          id: "upgrade",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "An upgrade will place 36 evenly spaced satellites on the orbit instead of 24. By how many degrees will the angle at each satellite increase?",
          choices: [
            { letter: "A", text: "10°" },
            { letter: "B", text: "170°" },
            { letter: "C", text: "5°" },
            { letter: "D", text: "2160°" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "Which change to the 24-satellite ring would make the angle at each satellite exactly 160°?",
          choices: [
            { letter: "A", text: "add 6 satellites" },
            { letter: "B", text: "remove 6 satellites" },
            { letter: "C", text: "remove 5 satellites" },
            { letter: "D", text: "remove 4 satellites" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc2-sky-roundabout",
      family: "GEO",
      mode: "sky",
      title: "The Roundabout Island",
      kind: "Polygons · G.PC.2",
      blurb: "The island in a roundabout is a regular 15-gon.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A roundabout: a circular road with roads entering from the left and right. The center island is a regular 15-gon. Angle 1 is an interior angle at the left of the island. One side on the right is extended (dashed), and angle 2, in gold, is the exterior angle\"><line class=\"ln\" x1=\"6\" y1=\"70\" x2=\"83.3\" y2=\"70\"/><line class=\"ln\" x1=\"236.7\" y1=\"70\" x2=\"314\" y2=\"70\"/><line class=\"ln\" x1=\"6\" y1=\"98\" x2=\"83.3\" y2=\"98\"/><line class=\"ln\" x1=\"236.7\" y1=\"98\" x2=\"314\" y2=\"98\"/><line class=\"thin dash\" x1=\"6\" y1=\"84\" x2=\"82\" y2=\"84\"/><line class=\"thin dash\" x1=\"238\" y1=\"84\" x2=\"314\" y2=\"84\"/><circle class=\"ln\" cx=\"160\" cy=\"84\" r=\"78\"/><circle class=\"thin dash\" cx=\"160\" cy=\"84\" r=\"68\"/><polygon class=\"sh2\" points=\"160,34 180.3,38.3 197.2,50.5 207.6,68.5 209.7,89.2 203.3,109 189.4,124.5 170.4,132.9 149.6,132.9 130.6,124.5 116.7,109 110.3,89.2 112.4,68.5 122.8,50.5 139.7,38.3\"/><line class=\"ln dash\" x1=\"209.7\" y1=\"89.2\" x2=\"212\" y2=\"111.1\"/><path class=\"thin\" d=\"M111.3 79.3 A10 10 0 0 1 113.4 98.7\"/><path class=\"ac\" d=\"M211.4 105.1 A16 16 0 0 1 204.8 104.4\"/><text x=\"131.2\" y=\"92\" text-anchor=\"middle\">1</text><text class=\"acc\" x=\"207.2\" y=\"118.1\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"160\" y=\"88\" text-anchor=\"middle\">island</text></svg></figure><p class=\"geo-given\">The center island of a roundabout is a regular 15-gon (15 congruent sides and 15 congruent angles). ∠1 is an interior angle of the island. One side is extended (dashed), and ∠2 is the exterior angle it makes.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the island?",
          choices: [
            { letter: "A", text: "2700°" },
            { letter: "B", text: "2520°" },
            { letter: "C", text: "2340°" },
            { letter: "D", text: "360°" }
          ],
          correct: "C"
        },
        {
          id: "angle1",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠1, an interior angle of the island?",
          choices: [
            { letter: "A", text: "156°" },
            { letter: "B", text: "24°" },
            { letter: "C", text: "168°" },
            { letter: "D", text: "180°" }
          ],
          correct: "A"
        },
        {
          id: "angle2",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of the gold exterior angle, ∠2?",
          choices: [
            { letter: "A", text: "156°" },
            { letter: "B", text: "12°" },
            { letter: "C", text: "about 25.7°" },
            { letter: "D", text: "24°" }
          ],
          correct: "D"
        },
        {
          id: "dev",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Dev says a regular island with more sides would have a larger sum of exterior angles. Which is true?",
          choices: [
            { letter: "A", text: "Yes: each added side adds 180° to the sum." },
            { letter: "B", text: "No: the exterior angles always add to 360°." },
            { letter: "C", text: "Yes: each added side adds 24° to the sum." },
            { letter: "D", text: "No: the sum gets smaller as sides are added." }
          ],
          correct: "B"
        },
        {
          id: "other",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "Another roundabout island is a regular polygon with interior angles of 172°. How many sides does it have?",
          choices: [
            { letter: "A", text: "8" },
            { letter: "B", text: "about 2.1" },
            { letter: "C", text: "22.5" },
            { letter: "D", text: "45" }
          ],
          correct: "D"
        },
        {
          id: "sign",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "The sign at each entrance is a regular polygon whose exterior angles each measure 120°. How many sides does the sign have?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "60" },
            { letter: "C", text: "1.5" },
            { letter: "D", text: "5" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc2-sky-map-symbols",
      family: "GEO",
      mode: "sky",
      title: "Symbols on the City Map",
      kind: "Polygons · G.PC.2",
      blurb: "Four regular polygons in a map key.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"A map key with four symbols in a row: an equilateral triangle for a bus stop, a square for parking, a regular pentagon for a ferry dock and a regular hexagon for a train station\"><rect class=\"thin\" x=\"6\" y=\"6\" width=\"308\" height=\"128\" rx=\"6\"/><text class=\"sm\" x=\"160\" y=\"24\" text-anchor=\"middle\">MAP KEY</text><polygon class=\"sh2\" points=\"48,44 75.7,92 20.3,92\"/><polygon class=\"sh2\" points=\"103.5,49.5 144.5,49.5 144.5,90.5 103.5,90.5\"/><polygon class=\"sh2\" points=\"200,41 229.5,62.4 218.2,97.1 181.8,97.1 170.5,62.4\"/><polygon class=\"sh2\" points=\"307,70 292,96 262,96 247,70 262,44 292,44\"/><text class=\"sm\" x=\"48\" y=\"124\" text-anchor=\"middle\">bus stop</text><text class=\"sm\" x=\"124\" y=\"124\" text-anchor=\"middle\">parking</text><text class=\"sm\" x=\"200\" y=\"124\" text-anchor=\"middle\">ferry dock</text><text class=\"sm\" x=\"277\" y=\"124\" text-anchor=\"middle\">train</text></svg></figure><p class=\"geo-given\">A city map uses four regular polygon symbols: an equilateral triangle (bus stop), a square (parking), a regular pentagon (ferry dock) and a regular hexagon (train station).</p>",
      claims: [
        {
          id: "which540",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which symbol's interior angles add to 540°?",
          choices: [
            { letter: "A", text: "the train hexagon" },
            { letter: "B", text: "the ferry dock pentagon" },
            { letter: "C", text: "the bus stop triangle" },
            { letter: "D", text: "the parking square" }
          ],
          correct: "B"
        },
        {
          id: "train",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of each interior angle of the train symbol?",
          choices: [
            { letter: "A", text: "60°" },
            { letter: "B", text: "180°" },
            { letter: "C", text: "720°" },
            { letter: "D", text: "120°" }
          ],
          correct: "D"
        },
        {
          id: "largest",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which symbol has the largest exterior angle?",
          choices: [
            { letter: "A", text: "the bus stop triangle" },
            { letter: "B", text: "the train hexagon" },
            { letter: "C", text: "All four are equal." },
            { letter: "D", text: "the parking square" }
          ],
          correct: "A"
        },
        {
          id: "extsum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement about the exterior angles of the symbols is true?",
          choices: [
            { letter: "A", text: "The hexagon's exterior angles add to 720°." },
            { letter: "B", text: "The triangle's exterior angles add to 180°." },
            { letter: "C", text: "Each symbol's exterior angles add to 360°." },
            { letter: "D", text: "The square's exterior angles add to 90°." }
          ],
          correct: "C"
        },
        {
          id: "compare",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "How many degrees larger is each angle of the ferry dock pentagon than each angle of the parking square?",
          choices: [
            { letter: "A", text: "180°" },
            { letter: "B", text: "72°" },
            { letter: "C", text: "18°" },
            { letter: "D", text: "108°" }
          ],
          correct: "C"
        },
        {
          id: "fifth",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "The map maker adds a fifth symbol: a regular polygon whose exterior angles each measure 36°. How many sides does it have?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "10" },
            { letter: "C", text: "144" },
            { letter: "D", text: "12" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc2-sky-station-pavers",
      family: "GEO",
      mode: "sky",
      title: "The Station Plaza Pavers",
      kind: "Polygons · G.PC.2",
      blurb: "Twelve-sided, six-sided and square pavers fit together.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"Plaza pavers: a regular 12-gon in the middle, ringed by squares and regular hexagons that alternate around it. At point P, a corner of the 12-gon, one 12-gon, one gold square and one hexagon meet\"><polygon class=\"sh2\" points=\"193.6,93 184.6,108.6 169,117.6 151,117.6 135.4,108.6 126.4,93 126.4,75 135.4,59.4 151,50.4 169,50.4 184.6,59.4 193.6,75\"/><polygon class=\"ln\" points=\"193.6,93 184.6,108.6 200.2,117.6 209.2,102\"/><polygon class=\"ln\" points=\"200.2,135.6 184.6,144.6 169,135.6 169,117.6 184.6,108.6 200.2,117.6\"/><polygon class=\"ln\" points=\"169,117.6 151,117.6 151,135.6 169,135.6\"/><polygon class=\"ln\" points=\"135.4,144.6 119.8,135.6 119.8,117.6 135.4,108.6 151,117.6 151,135.6\"/><polygon class=\"ln\" points=\"135.4,108.6 126.4,93 110.8,102 119.8,117.6\"/><polygon class=\"ln\" points=\"95.2,93 95.2,75 110.8,66 126.4,75 126.4,93 110.8,102\"/><polygon class=\"ln\" points=\"126.4,75 135.4,59.4 119.8,50.4 110.8,66\"/><polygon class=\"ln\" points=\"119.8,32.4 135.4,23.4 151,32.4 151,50.4 135.4,59.4 119.8,50.4\"/><polygon class=\"ln\" points=\"151,50.4 169,50.4 169,32.4 151,32.4\"/><polygon class=\"ln\" points=\"184.6,23.4 200.2,32.4 200.2,50.4 184.6,59.4 169,50.4 169,32.4\"/><polygon class=\"sh\" points=\"184.6,59.4 193.6,75 209.2,66 200.2,50.4\"/><polygon class=\"ln\" points=\"224.8,75 224.8,93 209.2,102 193.6,93 193.6,75 209.2,66\"/><circle class=\"dta\" cx=\"184.6\" cy=\"59.4\" r=\"3\"/><text class=\"acc\" x=\"195.2\" y=\"67.3\" text-anchor=\"middle\">P</text></svg></figure><p class=\"geo-given\">A train station plaza is paved with regular 12-gons, regular hexagons and squares, all with equal sides, with no gaps or overlaps. At point <strong>P</strong>, one of each shape meets.</p>",
      claims: [
        {
          id: "twelve",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of each angle of a 12-sided paver?",
          choices: [
            { letter: "A", text: "30°" },
            { letter: "B", text: "150°" },
            { letter: "C", text: "165°" },
            { letter: "D", text: "1800°" }
          ],
          correct: "B"
        },
        {
          id: "atP",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which calculation shows why the three pavers leave no gap at P?",
          choices: [
            { letter: "A", text: "90° + 60° + 30° = 180°" },
            { letter: "B", text: "360° + 720° + 1800° = 2880°" },
            { letter: "C", text: "90° + 108° + 162° = 360°" },
            { letter: "D", text: "90° + 120° + 150° = 360°" }
          ],
          correct: "D"
        },
        {
          id: "alone",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Could the 12-sided pavers alone cover the plaza with no gaps or overlaps?",
          choices: [
            { letter: "A", text: "No: 360 ÷ 150 = 2.4 is not whole." },
            { letter: "B", text: "Yes: the angle sum, 1800°, is a multiple of 360°." },
            { letter: "C", text: "Yes: its exterior angles add to 360°." },
            { letter: "D", text: "Yes: 12 is a multiple of 6, like a hexagon." }
          ],
          correct: "A"
        },
        {
          id: "np",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A paver catalog lists a regular polygon with interior angles of 105°. Which is true?",
          choices: [
            { letter: "A", text: "It has 5 sides, rounding 4.8 up." },
            { letter: "B", text: "It has about 3.4 sides: 360 ÷ 105." },
            { letter: "C", text: "It cannot exist: 360 ÷ 75 = 4.8." },
            { letter: "D", text: "It exists, since 105° is less than 180°." }
          ],
          correct: "C"
        },
        {
          id: "gap",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "At another corner, a regular hexagon and two squares meet. How large is the gap that is left?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "150°" },
            { letter: "D", text: "240°" }
          ],
          correct: "B"
        },
        {
          id: "square2",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "Around another point, one square and two congruent regular pavers meet with no gap. How many sides does each of those two pavers have?",
          choices: [
            { letter: "A", text: "135" },
            { letter: "B", text: "about 2.7" },
            { letter: "C", text: "8" },
            { letter: "D", text: "4" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-sky-roundhouse",
      family: "GEO",
      mode: "sky",
      title: "The Train Roundhouse",
      kind: "Polygons · G.PC.2",
      blurb: "Tracks fan out from a turntable to a many-sided wall.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A train roundhouse seen from above: tracks fan out from a turntable at O, 10 degrees apart, to straight wall sections whose corners are all the same distance from O. Angle 1, in gold, is the angle between two wall sections. One wall section is extended (dashed) and angle 2 is the exterior angle\"><circle class=\"sh2\" cx=\"160\" cy=\"150\" r=\"14\"/><line class=\"thin\" x1=\"153\" y1=\"137.9\" x2=\"96.2\" y2=\"39.6\"/><line class=\"thin\" x1=\"155.2\" y1=\"136.8\" x2=\"116.4\" y2=\"30.2\"/><line class=\"thin\" x1=\"157.6\" y1=\"136.2\" x2=\"137.9\" y2=\"24.4\"/><line class=\"thin\" x1=\"160\" y1=\"136\" x2=\"160\" y2=\"22.5\"/><line class=\"thin\" x1=\"162.4\" y1=\"136.2\" x2=\"182.1\" y2=\"24.4\"/><line class=\"thin\" x1=\"164.8\" y1=\"136.8\" x2=\"203.6\" y2=\"30.2\"/><line class=\"thin\" x1=\"167\" y1=\"137.9\" x2=\"223.8\" y2=\"39.6\"/><polyline class=\"ln\" points=\"86.6,45.1 105.9,34 126.9,26.4 148.8,22.5 171.2,22.5 193.1,26.4 214.1,34 233.4,45.1\"/><line class=\"thin dash\" x1=\"69.5\" y1=\"59.5\" x2=\"86.6\" y2=\"45.1\"/><line class=\"thin dash\" x1=\"233.4\" y1=\"45.1\" x2=\"250.5\" y2=\"59.5\"/><path class=\"thin\" d=\"M152 104.7 A46 46 0 0 1 160 104\"/><text class=\"sm\" x=\"154.9\" y=\"96.2\" text-anchor=\"middle\">10°</text><line class=\"ln dash\" x1=\"193.1\" y1=\"26.4\" x2=\"228.6\" y2=\"32.6\"/><path class=\"ac\" d=\"M138.7 24.3 A12 12 0 0 1 115.6 30.5\"/><path class=\"thin\" d=\"M218.7 30.9 A26 26 0 0 1 217.6 35.3\"/><text class=\"acc\" x=\"132.6\" y=\"52.6\" text-anchor=\"middle\">1</text><text x=\"228\" y=\"40.2\" text-anchor=\"middle\">2</text><circle class=\"dt\" cx=\"86.6\" cy=\"45.1\" r=\"3\"/><circle class=\"dt\" cx=\"105.9\" cy=\"34\" r=\"3\"/><circle class=\"dt\" cx=\"126.9\" cy=\"26.4\" r=\"3\"/><circle class=\"dt\" cx=\"148.8\" cy=\"22.5\" r=\"3\"/><circle class=\"dt\" cx=\"171.2\" cy=\"22.5\" r=\"3\"/><circle class=\"dt\" cx=\"193.1\" cy=\"26.4\" r=\"3\"/><circle class=\"dt\" cx=\"214.1\" cy=\"34\" r=\"3\"/><circle class=\"dt\" cx=\"233.4\" cy=\"45.1\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"150\" r=\"3\"/><text x=\"178\" y=\"161\" text-anchor=\"middle\">O</text></svg></figure><p class=\"geo-given\">In a train roundhouse, tracks fan out from a turntable at <strong>O</strong>, 10° apart, to a wall made of straight sections. The wall corners are all the same distance from O, and each section spans 10° at O. If the stalls went all the way around, the wall would be a regular polygon.</p>",
      claims: [
        {
          id: "sides",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "If the wall went all the way around O, how many sides would it have?",
          choices: [
            { letter: "A", text: "36" },
            { letter: "B", text: "18" },
            { letter: "C", text: "10" },
            { letter: "D", text: "34" }
          ],
          correct: "A"
        },
        {
          id: "angle1",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠1, the angle between two wall sections?",
          choices: [
            { letter: "A", text: "10°" },
            { letter: "B", text: "160°" },
            { letter: "C", text: "175°" },
            { letter: "D", text: "170°" }
          ],
          correct: "D"
        },
        {
          id: "angle2",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠2, between the extended wall and the next section?",
          choices: [
            { letter: "A", text: "170°" },
            { letter: "B", text: "10°" },
            { letter: "C", text: "5°" },
            { letter: "D", text: "20°" }
          ],
          correct: "B"
        },
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What would be the sum of the interior angles of the full wall polygon?",
          choices: [
            { letter: "A", text: "6480°" },
            { letter: "B", text: "6300°" },
            { letter: "C", text: "6120°" },
            { letter: "D", text: "360°" }
          ],
          correct: "C"
        },
        {
          id: "larger",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A larger roundhouse's wall would form a regular polygon with interior angles of 174°. How many sides would it have?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "30" },
            { letter: "C", text: "about 2.1" },
            { letter: "D", text: "60" }
          ],
          correct: "D"
        },
        {
          id: "rosa",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Rosa says the angle between two wall sections is 360° ÷ 36 = 10°. Which is true?",
          choices: [
            { letter: "A", text: "She found the exterior angle; it is 170°." },
            { letter: "B", text: "She is right: the angle is 10°." },
            { letter: "C", text: "She should use 180° ÷ 36 = 5°." },
            { letter: "D", text: "She should use (36 − 2) · 180° = 6120°." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc2-sky-sailing-course",
      family: "GEO",
      mode: "sky",
      title: "The Sailing Race Course",
      kind: "Polygons · G.PC.2",
      blurb: "A sailboat turns at five buoys on a closed course.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A closed sailing course ABCDE drawn on a map with a north arrow. Arrows show the boat sailing clockwise. The legs are labeled with compass headings: AB 020 degrees, BC 095, CD 160, DE 245 and EA 300\"><polygon class=\"sh2\" points=\"106.3,101.1 134.4,24 238.8,33.1 263.7,101.7 177.2,142\"/><path class=\"thin\" d=\"M123.2 67.8 L122 57.8 L114.7 64.8\"/><text class=\"sm\" x=\"106.2\" y=\"61.4\" text-anchor=\"middle\">020°</text><path class=\"thin\" d=\"M182.2 32.7 L191.5 29 L183 23.7\"/><text class=\"sm\" x=\"187.9\" y=\"17.6\" text-anchor=\"middle\">095°</text><path class=\"thin\" d=\"M245.6 65.2 L252.9 72.1 L254.1 62.1\"/><text class=\"sm\" x=\"265.3\" y=\"66.3\" text-anchor=\"middle\">160°</text><path class=\"thin\" d=\"M222.2 116.1 L215.9 123.9 L226 124.2\"/><text class=\"sm\" x=\"226.8\" y=\"139.4\" text-anchor=\"middle\">245°</text><path class=\"thin\" d=\"M147.4 119.6 L137.4 119 L142.9 127.4\"/><text class=\"sm\" x=\"134.2\" y=\"138.5\" text-anchor=\"middle\">300°</text><circle class=\"dt\" cx=\"106.3\" cy=\"101.1\" r=\"3\"/><text x=\"93.7\" y=\"109.4\" text-anchor=\"middle\">A</text><circle class=\"dt\" cx=\"134.4\" cy=\"24\" r=\"3\"/><text x=\"125.8\" y=\"19.2\" text-anchor=\"middle\">B</text><circle class=\"dt\" cx=\"238.8\" cy=\"33.1\" r=\"3\"/><text x=\"248.6\" y=\"29.6\" text-anchor=\"middle\">C</text><circle class=\"dt\" cx=\"263.7\" cy=\"101.7\" r=\"3\"/><text x=\"276.3\" y=\"110\" text-anchor=\"middle\">D</text><circle class=\"dt\" cx=\"177.2\" cy=\"142\" r=\"3\"/><text x=\"175.7\" y=\"159.9\" text-anchor=\"middle\">E</text><line class=\"thin\" x1=\"30\" y1=\"64\" x2=\"30\" y2=\"28\"/><path class=\"thin\" d=\"M34.5 34 L30 25 L25.5 34\"/><text class=\"sm\" x=\"30\" y=\"80\" text-anchor=\"middle\">N</text></svg></figure><p class=\"geo-given\">A sailboat races once around the closed course <strong>ABCDE</strong>, clockwise. Each leg's compass heading is shown, in degrees clockwise from north. At each buoy the boat turns right by the change in heading.</p>",
      claims: [
        {
          id: "turnC",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Through what angle does the boat turn at buoy C?",
          choices: [
            { letter: "A", text: "115°" },
            { letter: "B", text: "160°" },
            { letter: "C", text: "65°" },
            { letter: "D", text: "255°" }
          ],
          correct: "C"
        },
        {
          id: "insideD",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the angle inside the course at buoy D?",
          choices: [
            { letter: "A", text: "95°" },
            { letter: "B", text: "85°" },
            { letter: "C", text: "265°" },
            { letter: "D", text: "245°" }
          ],
          correct: "A"
        },
        {
          id: "lap",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Through how many degrees does the boat turn in all during one lap?",
          choices: [
            { letter: "A", text: "540°" },
            { letter: "B", text: "360°" },
            { letter: "C", text: "180°" },
            { letter: "D", text: "900°" }
          ],
          correct: "B"
        },
        {
          id: "insideSum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the five angles inside the course?",
          choices: [
            { letter: "A", text: "360°" },
            { letter: "B", text: "900°" },
            { letter: "C", text: "720°" },
            { letter: "D", text: "540°" }
          ],
          correct: "D"
        },
        {
          id: "smallest",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "At which buoy is the angle inside the course the smallest?",
          choices: [
            { letter: "A", text: "at E" },
            { letter: "B", text: "at D" },
            { letter: "C", text: "at C" },
            { letter: "D", text: "at A" }
          ],
          correct: "B"
        },
        {
          id: "practice",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "For practice, the crew sails a regular course, turning 20° at each buoy. How many buoys does the practice course have?",
          choices: [
            { letter: "A", text: "9" },
            { letter: "B", text: "160" },
            { letter: "C", text: "18" },
            { letter: "D", text: "16" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-sky-airport-terminal",
      family: "GEO",
      mode: "sky",
      title: "The Airport Terminal",
      kind: "Polygons · G.PC.2",
      blurb: "A seven-sided terminal with angles in terms of x.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Convex heptagon ABCDEFG, the floor plan of an airport terminal. The angles at A and G are (x + 60) degrees, at B and F (x + 80) degrees, and at C, D and E (2x + 40) degrees\"><polygon class=\"sh2\" points=\"89.3,146 70.5,94.3 98,46.7 160,24.1 222,46.7 249.5,94.3 230.7,146\"/><path class=\"thin\" d=\"M85.9 136.6 A10 10 0 0 1 99.3 146\"/><text class=\"sm\" x=\"104.8\" y=\"127.9\" text-anchor=\"middle\">(x + 60)°</text><path class=\"thin\" d=\"M75.5 85.7 A10 10 0 0 1 73.9 103.7\"/><text class=\"sm\" x=\"100.4\" y=\"100.9\" text-anchor=\"middle\">(x + 80)°</text><path class=\"thin\" d=\"M107.4 43.3 A10 10 0 0 1 93 55.3\"/><text class=\"sm\" x=\"118.5\" y=\"75.2\" text-anchor=\"middle\">(2x + 40)°</text><path class=\"thin\" d=\"M169.4 27.5 A10 10 0 0 1 150.6 27.5\"/><text class=\"sm\" x=\"160\" y=\"54.1\" text-anchor=\"middle\">(2x + 40)°</text><path class=\"thin\" d=\"M227 55.3 A10 10 0 0 1 212.6 43.3\"/><text class=\"sm\" x=\"201.5\" y=\"75.2\" text-anchor=\"middle\">(2x + 40)°</text><path class=\"thin\" d=\"M246.1 103.7 A10 10 0 0 1 244.5 85.7\"/><text class=\"sm\" x=\"219.6\" y=\"100.9\" text-anchor=\"middle\">(x + 80)°</text><path class=\"thin\" d=\"M220.7 146 A10 10 0 0 1 234.1 136.6\"/><text class=\"sm\" x=\"215.2\" y=\"127.9\" text-anchor=\"middle\">(x + 60)°</text><circle class=\"dt\" cx=\"89.3\" cy=\"146\" r=\"3\"/><text x=\"79.4\" y=\"159.5\" text-anchor=\"middle\">A</text><circle class=\"dt\" cx=\"70.5\" cy=\"94.3\" r=\"3\"/><text x=\"57.5\" y=\"100.6\" text-anchor=\"middle\">B</text><circle class=\"dt\" cx=\"98\" cy=\"46.7\" r=\"3\"/><text x=\"87\" y=\"44.8\" text-anchor=\"middle\">C</text><circle class=\"dt\" cx=\"160\" cy=\"24.1\" r=\"3\"/><text x=\"160\" y=\"16.1\" text-anchor=\"middle\">D</text><circle class=\"dt\" cx=\"222\" cy=\"46.7\" r=\"3\"/><text x=\"233\" y=\"44.8\" text-anchor=\"middle\">E</text><circle class=\"dt\" cx=\"249.5\" cy=\"94.3\" r=\"3\"/><text x=\"262.5\" y=\"100.6\" text-anchor=\"middle\">F</text><circle class=\"dt\" cx=\"230.7\" cy=\"146\" r=\"3\"/><text x=\"240.6\" y=\"159.5\" text-anchor=\"middle\">G</text></svg></figure><p class=\"geo-given\">The floor plan of a new airport terminal is the convex heptagon <strong>ABCDEFG</strong>. Its angle measures, in degrees, are shown in terms of x.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which equation uses the terminal's angle sum to find x?",
          choices: [
            { letter: "A", text: "10x + 400 = 1260" },
            { letter: "B", text: "10x + 400 = 1080" },
            { letter: "C", text: "10x + 400 = 360" },
            { letter: "D", text: "10x + 400 = 900" }
          ],
          correct: "D"
        },
        {
          id: "x",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Find the value of x.",
          choices: [
            { letter: "A", text: "86" },
            { letter: "B", text: "50" },
            { letter: "C", text: "68" },
            { letter: "D", text: "90" }
          ],
          correct: "B"
        },
        {
          id: "angleB",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠B?",
          choices: [
            { letter: "A", text: "130°" },
            { letter: "B", text: "148°" },
            { letter: "C", text: "50°" },
            { letter: "D", text: "166°" }
          ],
          correct: "A"
        },
        {
          id: "extA",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of an exterior angle of the terminal at corner A?",
          choices: [
            { letter: "A", text: "110°" },
            { letter: "B", text: "250°" },
            { letter: "C", text: "70°" },
            { letter: "D", text: "about 51.4°" }
          ],
          correct: "C"
        },
        {
          id: "not",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement about the terminal is NOT true?",
          choices: [
            { letter: "A", text: "Each exterior angle is about 51.4°." },
            { letter: "B", text: "∠C and ∠E have the same measure." },
            { letter: "C", text: "The exterior angles add to 360°." },
            { letter: "D", text: "The angles at A and B add to 240°." }
          ],
          correct: "A"
        },
        {
          id: "np",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A planned terminal will be a regular polygon whose interior angles each equal m∠B. Which is true?",
          choices: [
            { letter: "A", text: "It will have 7 sides, rounding 7.2 down." },
            { letter: "B", text: "It will have 8 sides, rounding 7.2 up." },
            { letter: "C", text: "It cannot be built: 360 ÷ 50 = 7.2." },
            { letter: "D", text: "It is possible, since m∠B is less than 180°." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-sky-drone-path",
      family: "GEO",
      mode: "sky",
      title: "The Drone's Turning Path",
      kind: "Polygons · G.PC.2",
      blurb: "A drone turns 40° after every straight leg.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"The start of a drone's flight path from S: straight 55-meter legs, with a 40 degree left turn, in gold, after each leg. The path continues past the third leg (dashed)\"><line class=\"ln\" x1=\"96\" y1=\"150\" x2=\"151\" y2=\"150\"/><path class=\"thin\" d=\"M119.5 154.5 L128.5 150 L119.5 145.5\"/><line class=\"ln\" x1=\"151\" y1=\"150\" x2=\"193.1\" y2=\"114.6\"/><path class=\"thin\" d=\"M171.9 138.3 L175.9 129.1 L166.1 131.4\"/><line class=\"ln\" x1=\"193.1\" y1=\"114.6\" x2=\"202.7\" y2=\"60.5\"/><path class=\"thin\" d=\"M201.6 92.3 L198.8 82.6 L192.8 90.7\"/><line class=\"ln dash\" x1=\"202.7\" y1=\"60.5\" x2=\"185.7\" y2=\"31\"/><line class=\"thin dash\" x1=\"151\" y1=\"150\" x2=\"181\" y2=\"150\"/><path class=\"ac\" d=\"M166.3 137.1 A20 20 0 0 1 171 150\"/><text class=\"acc\" x=\"186\" y=\"143.7\" text-anchor=\"middle\">40°</text><line class=\"thin dash\" x1=\"193.1\" y1=\"114.6\" x2=\"216.1\" y2=\"95.4\"/><path class=\"ac\" d=\"M196.6 95 A20 20 0 0 1 208.5 101.8\"/><text class=\"acc\" x=\"213.6\" y=\"91.1\" text-anchor=\"middle\">40°</text><circle class=\"dta\" cx=\"96\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"151\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"193.1\" cy=\"114.6\" r=\"3\"/><circle class=\"dt\" cx=\"202.7\" cy=\"60.5\" r=\"3\"/><text class=\"acc\" x=\"82\" y=\"155\" text-anchor=\"middle\">S</text><text class=\"sm\" x=\"123.5\" y=\"142\" text-anchor=\"middle\">55 m</text></svg></figure><p class=\"geo-given\">A drone starts at <strong>S</strong> and flies straight 55-m legs. After each leg it turns left 40°, as shown. It keeps flying legs and turning until it is back at S, heading the way it started.</p>",
      claims: [
        {
          id: "legs",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "The drone's whole path is a regular polygon. How many legs does it have?",
          choices: [
            { letter: "A", text: "4.5" },
            { letter: "B", text: "9" },
            { letter: "C", text: "about 2.6" },
            { letter: "D", text: "7" }
          ],
          correct: "B"
        },
        {
          id: "inside",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the angle between two legs at a turn, measured inside the path?",
          choices: [
            { letter: "A", text: "40°" },
            { letter: "B", text: "220°" },
            { letter: "C", text: "320°" },
            { letter: "D", text: "140°" }
          ],
          correct: "D"
        },
        {
          id: "total",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Through how many degrees does the drone turn in all, from S until it is back at S heading the way it started?",
          choices: [
            { letter: "A", text: "180°" },
            { letter: "B", text: "400°" },
            { letter: "C", text: "360°" },
            { letter: "D", text: "1260°" }
          ],
          correct: "C"
        },
        {
          id: "opposite",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Does the drone ever fly in exactly the opposite direction from its first leg?",
          choices: [
            { letter: "A", text: "No: 180 ÷ 40 = 4.5 is not whole." },
            { letter: "B", text: "Yes: 4 turns of 40° make about 180°." },
            { letter: "C", text: "Yes: 5 turns of 40° make about 180°." },
            { letter: "D", text: "Yes: after 9 turns it has turned 360°." }
          ],
          correct: "A"
        },
        {
          id: "six",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "The pilot changes the turn so that the drone first flies exactly opposite its first leg after 6 equal turns. How many legs will the closed path have?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "30" },
            { letter: "C", text: "24" },
            { letter: "D", text: "12" }
          ],
          correct: "D"
        },
        {
          id: "not",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement about the drone's path is NOT true?",
          choices: [
            { letter: "A", text: "The closed path has 9 legs." },
            { letter: "B", text: "Each angle inside the path measures 40°." },
            { letter: "C", text: "The 9 turns add to 360°." },
            { letter: "D", text: "At each turn, the turn and the inside angle add to 180°." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
