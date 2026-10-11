/* SOL Labyrinth — Geometry game (family GEO), G.RLT.3 (symmetry and transformations), modes rocks and sky (v5.20).
   rocks (Rune Rocks) packs: space, science and weather; sky (Sun Chariot) packs: travel and getting around. Original items only.
   Every key and distractor was computed (gx-308/gen.js); every distractor is a named mistake; grid vertices are exact grid points. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-rlt3-rocks-ice-crystals",
      family: "GEO",
      mode: "rocks",
      title: "Snowflakes and Crystals",
      kind: "Transformations · G.RLT.3",
      blurb: "A snowflake, a salt crystal and a quartz point: mirror lines and turns.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 142\" role=\"img\" aria-label=\"Crystal 1, a snowflake with six equal arms, each with two side branches; Crystal 2, a square; Crystal 3, a rectangle topped by a centered point, like a house shape\">" +
        "<line class=\"ln\" x1=\"60\" y1=\"68\" x2=\"60\" y2=\"24\"/><line class=\"ln\" x1=\"60\" y1=\"42\" x2=\"71.26\" y2=\"35.5\"/><line class=\"ln\" x1=\"60\" y1=\"42\" x2=\"48.74\" y2=\"35.5\"/><line class=\"ln\" x1=\"60\" y1=\"68\" x2=\"21.89\" y2=\"46\"/><line class=\"ln\" x1=\"37.48\" y1=\"55\" x2=\"37.48\" y2=\"42\"/><line class=\"ln\" x1=\"37.48\" y1=\"55\" x2=\"26.23\" y2=\"61.5\"/><line class=\"ln\" x1=\"60\" y1=\"68\" x2=\"21.89\" y2=\"90\"/><line class=\"ln\" x1=\"37.48\" y1=\"81\" x2=\"26.23\" y2=\"74.5\"/><line class=\"ln\" x1=\"37.48\" y1=\"81\" x2=\"37.48\" y2=\"94\"/><line class=\"ln\" x1=\"60\" y1=\"68\" x2=\"60\" y2=\"112\"/><line class=\"ln\" x1=\"60\" y1=\"94\" x2=\"48.74\" y2=\"100.5\"/><line class=\"ln\" x1=\"60\" y1=\"94\" x2=\"71.26\" y2=\"100.5\"/><line class=\"ln\" x1=\"60\" y1=\"68\" x2=\"98.11\" y2=\"90\"/><line class=\"ln\" x1=\"82.52\" y1=\"81\" x2=\"82.52\" y2=\"94\"/><line class=\"ln\" x1=\"82.52\" y1=\"81\" x2=\"93.77\" y2=\"74.5\"/><line class=\"ln\" x1=\"60\" y1=\"68\" x2=\"98.11\" y2=\"46\"/><line class=\"ln\" x1=\"82.52\" y1=\"55\" x2=\"93.77\" y2=\"61.5\"/><line class=\"ln\" x1=\"82.52\" y1=\"55\" x2=\"82.52\" y2=\"42\"/>" +
        "<polygon class=\"sh2\" points=\"128,36 192,36 192,100 128,100\"/>" +
        "<polygon class=\"sh\" points=\"238,112 286,112 286,54 262,24 238,54\"/>" +
        "<text class=\"sm\" x=\"60\" y=\"134\" text-anchor=\"middle\">Crystal 1</text><text class=\"sm\" x=\"160\" y=\"134\" text-anchor=\"middle\">Crystal 2</text><text class=\"sm\" x=\"262\" y=\"134\" text-anchor=\"middle\">Crystal 3</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A science class photographs three crystals. <strong>Crystal 1</strong> is a snowflake with six identical arms equally spaced around its center. <strong>Crystal 2</strong> is the square face of a salt crystal. <strong>Crystal 3</strong> is a quartz crystal seen from the side: a rectangle topped by a point that is centered above it.</p>",
      claims: [
        {
          id: "flake-lines",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "How many lines of symmetry does Crystal 1 have?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "6" },
            { letter: "C", text: "12" },
            { letter: "D", text: "2" }
          ],
          correct: "B"
        },
        {
          id: "flake-turn",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the smallest angle of rotation, about its center, that maps Crystal 1 onto itself?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "30°" },
            { letter: "C", text: "360°" },
            { letter: "D", text: "60°" }
          ],
          correct: "D"
        },
        {
          id: "salt-order",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the order of rotational symmetry of Crystal 2?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "90" },
            { letter: "C", text: "8" },
            { letter: "D", text: "2" }
          ],
          correct: "A"
        },
        {
          id: "quartz",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which describes the symmetry of Crystal 3?",
          choices: [
            { letter: "A", text: "2 lines of symmetry; rotational symmetry of order 2" },
            { letter: "B", text: "No lines of symmetry; rotational symmetry of order 2" },
            { letter: "C", text: "1 line of symmetry; no rotational symmetry" },
            { letter: "D", text: "1 line of symmetry; rotational symmetry of order 5" }
          ],
          correct: "C"
        },
        {
          id: "not-flake",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which rotation about its center does NOT map Crystal 1 onto itself?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "180°" },
            { letter: "C", text: "90°" },
            { letter: "D", text: "240°" }
          ],
          correct: "C"
        },
        {
          id: "zoom",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A microscope camera enlarges Crystal 1 by a dilation with scale factor 40. Which is true of the image?",
          choices: [
            { letter: "A", text: "Its arms are 40 times as long; neighboring arms meet at 60°." },
            { letter: "B", text: "It is congruent to Crystal 1." },
            { letter: "C", text: "Its arms are 40 times as long; neighboring arms meet at 1.5°." },
            { letter: "D", text: "Its arms are 1,600 times as long; neighboring arms meet at 60°." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-rocks-star-map",
      family: "GEO",
      mode: "rocks",
      title: "Stars on the Star Map",
      kind: "Transformations · G.RLT.3",
      blurb: "Four stars of a constellation slide, flip and turn on a sky grid.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Coordinate grid star map with four stars joined by thin lines: K at (-4, 3), L at (-1, 2), M at (1, 3) and N at (3, -2)\">" +
        "<line class=\"gr\" x1=\"60\" y1=\"8\" x2=\"60\" y2=\"148\"/><line class=\"gr\" x1=\"80\" y1=\"8\" x2=\"80\" y2=\"148\"/><line class=\"gr\" x1=\"100\" y1=\"8\" x2=\"100\" y2=\"148\"/><line class=\"gr\" x1=\"120\" y1=\"8\" x2=\"120\" y2=\"148\"/><line class=\"gr\" x1=\"140\" y1=\"8\" x2=\"140\" y2=\"148\"/><line class=\"gr\" x1=\"180\" y1=\"8\" x2=\"180\" y2=\"148\"/><line class=\"gr\" x1=\"200\" y1=\"8\" x2=\"200\" y2=\"148\"/><line class=\"gr\" x1=\"220\" y1=\"8\" x2=\"220\" y2=\"148\"/><line class=\"gr\" x1=\"240\" y1=\"8\" x2=\"240\" y2=\"148\"/><line class=\"gr\" x1=\"260\" y1=\"8\" x2=\"260\" y2=\"148\"/>" +
        "<line class=\"gr\" x1=\"60\" y1=\"148\" x2=\"260\" y2=\"148\"/><line class=\"gr\" x1=\"60\" y1=\"128\" x2=\"260\" y2=\"128\"/><line class=\"gr\" x1=\"60\" y1=\"108\" x2=\"260\" y2=\"108\"/><line class=\"gr\" x1=\"60\" y1=\"68\" x2=\"260\" y2=\"68\"/><line class=\"gr\" x1=\"60\" y1=\"48\" x2=\"260\" y2=\"48\"/><line class=\"gr\" x1=\"60\" y1=\"28\" x2=\"260\" y2=\"28\"/><line class=\"gr\" x1=\"60\" y1=\"8\" x2=\"260\" y2=\"8\"/>" +
        "<line class=\"ax\" x1=\"60\" y1=\"88\" x2=\"260\" y2=\"88\"/><line class=\"ax\" x1=\"160\" y1=\"148\" x2=\"160\" y2=\"8\"/>" +
        "<text class=\"sm\" x=\"80\" y=\"101\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"120\" y=\"101\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"240\" y=\"101\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"156\" y=\"132\" text-anchor=\"end\">−2</text><text class=\"sm\" x=\"264\" y=\"92\">x</text><text class=\"sm\" x=\"165\" y=\"18\">y</text>" +
        "<polyline class=\"thin dash\" points=\"80,28 140,48 180,28 220,128\"/>" +
        "<circle class=\"dta\" cx=\"80\" cy=\"28\" r=\"3\"/><circle class=\"dta\" cx=\"140\" cy=\"48\" r=\"3\"/><circle class=\"dta\" cx=\"180\" cy=\"28\" r=\"3\"/><circle class=\"dta\" cx=\"220\" cy=\"128\" r=\"3\"/>" +
        "<text x=\"80\" y=\"21\" text-anchor=\"middle\">K</text><text x=\"140\" y=\"65\" text-anchor=\"middle\">L</text><text x=\"188\" y=\"33\">M</text><text x=\"228\" y=\"133\">N</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A star map puts a grid on the night sky. Four stars of a small constellation are at <strong>K</strong>(−4, 3), <strong>L</strong>(−1, 2), <strong>M</strong>(1, 3) and <strong>N</strong>(3, −2).</p>",
      claims: [
        {
          id: "slide-k",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The map is shifted by the rule (x, y) → (x + 3, y − 4). What is the image of K?",
          choices: [
            { letter: "A", text: "(−1, −1)" },
            { letter: "B", text: "(−7, 7)" },
            { letter: "C", text: "(−8, 6)" },
            { letter: "D", text: "(−1, 3)" }
          ],
          correct: "A"
        },
        {
          id: "flip-n",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of star N after a reflection over the x-axis?",
          choices: [
            { letter: "A", text: "(−3, −2)" },
            { letter: "B", text: "(−3, 2)" },
            { letter: "C", text: "(−2, 3)" },
            { letter: "D", text: "(3, 2)" }
          ],
          correct: "D"
        },
        {
          id: "turn-m",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of star M after a rotation of 90° counterclockwise about the origin?",
          choices: [
            { letter: "A", text: "(3, −1)" },
            { letter: "B", text: "(−3, 1)" },
            { letter: "C", text: "(3, 1)" },
            { letter: "D", text: "(−1, −3)" }
          ],
          correct: "B"
        },
        {
          id: "diag-l",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of star L after a reflection over the line y = x?",
          choices: [
            { letter: "A", text: "(−2, 1)" },
            { letter: "B", text: "(1, 2)" },
            { letter: "C", text: "(2, −1)" },
            { letter: "D", text: "(1, −2)" }
          ],
          correct: "C"
        },
        {
          id: "which",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A second chart shows the same stars at K′(4, 3), L′(1, 2), M′(−1, 3) and N′(−3, −2). Which single transformation maps K, L, M, N to K′, L′, M′, N′?",
          choices: [
            { letter: "A", text: "Reflection over the x-axis" },
            { letter: "B", text: "Reflection over the y-axis" },
            { letter: "C", text: "Rotation of 180° about the origin" },
            { letter: "D", text: "Translation 8 units right" }
          ],
          correct: "B"
        },
        {
          id: "distance",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The whole map is rotated 180° about the origin. Which is true of the distance between any two of the stars?",
          choices: [
            { letter: "A", text: "It doubles." },
            { letter: "B", text: "It is cut in half." },
            { letter: "C", text: "It changes unless a star is on an axis." },
            { letter: "D", text: "It stays the same." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt3-rocks-radar-storm",
      family: "GEO",
      mode: "rocks",
      title: "A Storm Cell on the Radar",
      kind: "Transformations · G.RLT.3",
      blurb: "A storm cell turned about the radar at the origin, in both directions.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Radar screen drawn on a coordinate grid, with the radar marked at the origin; storm cell triangle PQR with P at (-4, 1), Q at (-1, 2) and R at (-3, 5)\">" +
        "<line class=\"gr\" x1=\"82\" y1=\"5\" x2=\"82\" y2=\"161\"/><line class=\"gr\" x1=\"95\" y1=\"5\" x2=\"95\" y2=\"161\"/><line class=\"gr\" x1=\"108\" y1=\"5\" x2=\"108\" y2=\"161\"/><line class=\"gr\" x1=\"121\" y1=\"5\" x2=\"121\" y2=\"161\"/><line class=\"gr\" x1=\"134\" y1=\"5\" x2=\"134\" y2=\"161\"/><line class=\"gr\" x1=\"147\" y1=\"5\" x2=\"147\" y2=\"161\"/><line class=\"gr\" x1=\"173\" y1=\"5\" x2=\"173\" y2=\"161\"/><line class=\"gr\" x1=\"186\" y1=\"5\" x2=\"186\" y2=\"161\"/><line class=\"gr\" x1=\"199\" y1=\"5\" x2=\"199\" y2=\"161\"/><line class=\"gr\" x1=\"212\" y1=\"5\" x2=\"212\" y2=\"161\"/><line class=\"gr\" x1=\"225\" y1=\"5\" x2=\"225\" y2=\"161\"/><line class=\"gr\" x1=\"238\" y1=\"5\" x2=\"238\" y2=\"161\"/>" +
        "<line class=\"gr\" x1=\"82\" y1=\"161\" x2=\"238\" y2=\"161\"/><line class=\"gr\" x1=\"82\" y1=\"148\" x2=\"238\" y2=\"148\"/><line class=\"gr\" x1=\"82\" y1=\"135\" x2=\"238\" y2=\"135\"/><line class=\"gr\" x1=\"82\" y1=\"122\" x2=\"238\" y2=\"122\"/><line class=\"gr\" x1=\"82\" y1=\"109\" x2=\"238\" y2=\"109\"/><line class=\"gr\" x1=\"82\" y1=\"96\" x2=\"238\" y2=\"96\"/><line class=\"gr\" x1=\"82\" y1=\"70\" x2=\"238\" y2=\"70\"/><line class=\"gr\" x1=\"82\" y1=\"57\" x2=\"238\" y2=\"57\"/><line class=\"gr\" x1=\"82\" y1=\"44\" x2=\"238\" y2=\"44\"/><line class=\"gr\" x1=\"82\" y1=\"31\" x2=\"238\" y2=\"31\"/><line class=\"gr\" x1=\"82\" y1=\"18\" x2=\"238\" y2=\"18\"/><line class=\"gr\" x1=\"82\" y1=\"5\" x2=\"238\" y2=\"5\"/>" +
        "<line class=\"ax\" x1=\"82\" y1=\"83\" x2=\"238\" y2=\"83\"/><line class=\"ax\" x1=\"160\" y1=\"161\" x2=\"160\" y2=\"5\"/>" +
        "<text class=\"sm\" x=\"121\" y=\"96\" text-anchor=\"middle\">−3</text><text class=\"sm\" x=\"199\" y=\"96\" text-anchor=\"middle\">3</text><text class=\"sm\" x=\"164\" y=\"126\">−3</text><text class=\"sm\" x=\"164\" y=\"48\">3</text><text class=\"sm\" x=\"242\" y=\"87\">x</text><text class=\"sm\" x=\"155\" y=\"15\" text-anchor=\"end\">y</text>" +
        "<circle class=\"dta\" cx=\"160\" cy=\"83\" r=\"4\"/>" +
        "<polygon class=\"sh\" points=\"108,70 147,57 121,18\"/>" +
        "<circle class=\"dt\" cx=\"108\" cy=\"70\" r=\"3\"/><circle class=\"dt\" cx=\"147\" cy=\"57\" r=\"3\"/><circle class=\"dt\" cx=\"121\" cy=\"18\" r=\"3\"/>" +
        "<text x=\"100\" y=\"75\" text-anchor=\"end\">P</text><text x=\"147\" y=\"74\" text-anchor=\"middle\">Q</text><text x=\"113\" y=\"23\" text-anchor=\"end\">R</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A weather radar sits at the origin of a grid measured in miles. A storm cell is <strong>△PQR</strong> with P(−4, 1), Q(−1, 2) and R(−3, 5). Forecasters study how the cell would look turned about the radar.</p>",
      claims: [
        {
          id: "cw-q",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of Q after a rotation of 90° clockwise about the origin?",
          choices: [
            { letter: "A", text: "(−2, −1)" },
            { letter: "B", text: "(1, −2)" },
            { letter: "C", text: "(2, 1)" },
            { letter: "D", text: "(2, −1)" }
          ],
          correct: "C"
        },
        {
          id: "half-r",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of R after a rotation of 180° about the origin?",
          choices: [
            { letter: "A", text: "(3, −5)" },
            { letter: "B", text: "(−3, −5)" },
            { letter: "C", text: "(3, 5)" },
            { letter: "D", text: "(5, −3)" }
          ],
          correct: "A"
        },
        {
          id: "ccw270-p",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of P after a rotation of 270° counterclockwise about the origin?",
          choices: [
            { letter: "A", text: "(−1, −4)" },
            { letter: "B", text: "(4, −1)" },
            { letter: "C", text: "(1, −4)" },
            { letter: "D", text: "(1, 4)" }
          ],
          correct: "D"
        },
        {
          id: "rule",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which rule describes a rotation of 90° counterclockwise about the origin?",
          choices: [
            { letter: "A", text: "(x, y) → (y, −x)" },
            { letter: "B", text: "(x, y) → (−y, x)" },
            { letter: "C", text: "(x, y) → (−x, −y)" },
            { letter: "D", text: "(x, y) → (y, x)" }
          ],
          correct: "B"
        },
        {
          id: "which",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Later the cell appears as △P′Q′R′ with P′(−1, −4), Q′(−2, −1) and R′(−5, −3). Which single transformation maps △PQR to △P′Q′R′?",
          choices: [
            { letter: "A", text: "Rotation of 90° counterclockwise about the origin" },
            { letter: "B", text: "Rotation of 90° clockwise about the origin" },
            { letter: "C", text: "Reflection over the line y = x" },
            { letter: "D", text: "Rotation of 180° about the origin" }
          ],
          correct: "A"
        },
        {
          id: "turn-up",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The cell is rotated 90° clockwise about the origin and then translated 3 miles up. Where does R end up?",
          choices: [
            { letter: "A", text: "(8, 3)" },
            { letter: "B", text: "(−5, 0)" },
            { letter: "C", text: "(5, 6)" },
            { letter: "D", text: "(5, 3)" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt3-rocks-storm-track",
      family: "GEO",
      mode: "rocks",
      title: "The Storm on the Weather Map",
      kind: "Transformations · G.RLT.3",
      blurb: "A storm drifts across the map one day at a time.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 136\" role=\"img\" aria-label=\"Coordinate grid weather map with storm region ABCD: A at (-5, -1), B at (-2, -2), C at (-1, 0) and D at (-3, 2)\">" +
        "<line class=\"gr\" x1=\"79\" y1=\"14\" x2=\"79\" y2=\"122\"/><line class=\"gr\" x1=\"97\" y1=\"14\" x2=\"97\" y2=\"122\"/><line class=\"gr\" x1=\"115\" y1=\"14\" x2=\"115\" y2=\"122\"/><line class=\"gr\" x1=\"133\" y1=\"14\" x2=\"133\" y2=\"122\"/><line class=\"gr\" x1=\"151\" y1=\"14\" x2=\"151\" y2=\"122\"/><line class=\"gr\" x1=\"169\" y1=\"14\" x2=\"169\" y2=\"122\"/><line class=\"gr\" x1=\"205\" y1=\"14\" x2=\"205\" y2=\"122\"/><line class=\"gr\" x1=\"223\" y1=\"14\" x2=\"223\" y2=\"122\"/><line class=\"gr\" x1=\"241\" y1=\"14\" x2=\"241\" y2=\"122\"/>" +
        "<line class=\"gr\" x1=\"79\" y1=\"122\" x2=\"241\" y2=\"122\"/><line class=\"gr\" x1=\"79\" y1=\"104\" x2=\"241\" y2=\"104\"/><line class=\"gr\" x1=\"79\" y1=\"86\" x2=\"241\" y2=\"86\"/><line class=\"gr\" x1=\"79\" y1=\"50\" x2=\"241\" y2=\"50\"/><line class=\"gr\" x1=\"79\" y1=\"32\" x2=\"241\" y2=\"32\"/><line class=\"gr\" x1=\"79\" y1=\"14\" x2=\"241\" y2=\"14\"/>" +
        "<line class=\"ax\" x1=\"79\" y1=\"68\" x2=\"241\" y2=\"68\"/><line class=\"ax\" x1=\"187\" y1=\"122\" x2=\"187\" y2=\"14\"/>" +
        "<text class=\"sm\" x=\"223\" y=\"81\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"191\" y=\"108\">−2</text><text class=\"sm\" x=\"191\" y=\"36\">2</text><text class=\"sm\" x=\"245\" y=\"72\">x</text><text class=\"sm\" x=\"182\" y=\"24\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh2\" points=\"97,86 151,104 169,68 133,32\"/>" +
        "<circle class=\"dt\" cx=\"97\" cy=\"86\" r=\"3\"/><circle class=\"dt\" cx=\"151\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"169\" cy=\"68\" r=\"3\"/><circle class=\"dt\" cx=\"133\" cy=\"32\" r=\"3\"/>" +
        "<text x=\"89\" y=\"91\" text-anchor=\"end\">A</text><text x=\"151\" y=\"121\" text-anchor=\"middle\">B</text><text x=\"174\" y=\"83\">C</text><text x=\"133\" y=\"25\" text-anchor=\"middle\">D</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a weather map, a storm is region <strong>ABCD</strong> with A(−5, −1), B(−2, −2), C(−1, 0) and D(−3, 2). Its area is 8.5 square units. Each day the storm moves by the rule (x, y) → (x + 2, y + 1).</p>",
      claims: [
        {
          id: "day1",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Where is point C of the storm after one day?",
          choices: [
            { letter: "A", text: "(−3, −1)" },
            { letter: "B", text: "(1, 1)" },
            { letter: "C", text: "(0, 2)" },
            { letter: "D", text: "(1, 0)" }
          ],
          correct: "B"
        },
        {
          id: "day3",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Where is point A of the storm after three days?",
          choices: [
            { letter: "A", text: "(−3, 0)" },
            { letter: "B", text: "(−2, 2)" },
            { letter: "C", text: "(1, 0)" },
            { letter: "D", text: "(1, 2)" }
          ],
          correct: "D"
        },
        {
          id: "rule3",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which single rule moves the storm as far as three days of moves?",
          choices: [
            { letter: "A", text: "(x, y) → (x + 6, y + 3)" },
            { letter: "B", text: "(x, y) → (x + 5, y + 4)" },
            { letter: "C", text: "(x, y) → (x + 6, y + 1)" },
            { letter: "D", text: "(x, y) → (3x + 2, 3y + 1)" }
          ],
          correct: "A"
        },
        {
          id: "second",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A second storm moves from (−4, 3) to (1, 1) in one day. Which rule describes its move?",
          choices: [
            { letter: "A", text: "(x, y) → (x − 5, y + 2)" },
            { letter: "B", text: "(x, y) → (x + 1, y + 1)" },
            { letter: "C", text: "(x, y) → (x + 5, y − 2)" },
            { letter: "D", text: "(x, y) → (x − 3, y + 4)" }
          ],
          correct: "C"
        },
        {
          id: "area2",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "What is the area of the storm region after it moves for 2 days?",
          choices: [
            { letter: "A", text: "17 square units" },
            { letter: "B", text: "34 square units" },
            { letter: "C", text: "10.5 square units" },
            { letter: "D", text: "8.5 square units" }
          ],
          correct: "D"
        },
        {
          id: "half",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The map is printed at half size by a dilation with scale factor 1/2 centered at the origin. What is the image of D?",
          choices: [
            { letter: "A", text: "(−6, 4)" },
            { letter: "B", text: "(−1.5, 1)" },
            { letter: "C", text: "(−3.5, 1.5)" },
            { letter: "D", text: "(−1.5, 2)" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt3-rocks-molecule-zoom",
      family: "GEO",
      mode: "rocks",
      title: "A Molecule Under the Microscope",
      kind: "Transformations · G.RLT.3",
      blurb: "Zooming in and out on a three-atom model is a dilation.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"Coordinate grid with a molecule model: atom J at (-4, 2) and atom K at (0, 2) are each bonded to the central atom M at (-2, 4)\">" +
        "<line class=\"gr\" x1=\"80\" y1=\"10\" x2=\"80\" y2=\"130\"/><line class=\"gr\" x1=\"100\" y1=\"10\" x2=\"100\" y2=\"130\"/><line class=\"gr\" x1=\"120\" y1=\"10\" x2=\"120\" y2=\"130\"/><line class=\"gr\" x1=\"140\" y1=\"10\" x2=\"140\" y2=\"130\"/><line class=\"gr\" x1=\"160\" y1=\"10\" x2=\"160\" y2=\"130\"/><line class=\"gr\" x1=\"200\" y1=\"10\" x2=\"200\" y2=\"130\"/><line class=\"gr\" x1=\"220\" y1=\"10\" x2=\"220\" y2=\"130\"/><line class=\"gr\" x1=\"240\" y1=\"10\" x2=\"240\" y2=\"130\"/>" +
        "<line class=\"gr\" x1=\"80\" y1=\"130\" x2=\"240\" y2=\"130\"/><line class=\"gr\" x1=\"80\" y1=\"90\" x2=\"240\" y2=\"90\"/><line class=\"gr\" x1=\"80\" y1=\"70\" x2=\"240\" y2=\"70\"/><line class=\"gr\" x1=\"80\" y1=\"50\" x2=\"240\" y2=\"50\"/><line class=\"gr\" x1=\"80\" y1=\"30\" x2=\"240\" y2=\"30\"/><line class=\"gr\" x1=\"80\" y1=\"10\" x2=\"240\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"80\" y1=\"110\" x2=\"240\" y2=\"110\"/><line class=\"ax\" x1=\"180\" y1=\"130\" x2=\"180\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"100\" y=\"123\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"140\" y=\"123\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"220\" y=\"123\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"184\" y=\"34\">4</text><text class=\"sm\" x=\"244\" y=\"114\">x</text><text class=\"sm\" x=\"175\" y=\"20\" text-anchor=\"end\">y</text>" +
        "<line class=\"ln\" x1=\"100\" y1=\"70\" x2=\"140\" y2=\"30\"/><line class=\"ln\" x1=\"140\" y1=\"30\" x2=\"180\" y2=\"70\"/>" +
        "<circle class=\"sh2\" cx=\"100\" cy=\"70\" r=\"6\"/><circle class=\"sh2\" cx=\"140\" cy=\"30\" r=\"6\"/><circle class=\"sh2\" cx=\"180\" cy=\"70\" r=\"6\"/>" +
        "<circle class=\"dt\" cx=\"100\" cy=\"70\" r=\"3\"/><circle class=\"dt\" cx=\"140\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"180\" cy=\"70\" r=\"3\"/>" +
        "<text x=\"92\" y=\"89\" text-anchor=\"end\">J</text><text x=\"140\" y=\"19\" text-anchor=\"middle\">M</text><text x=\"188\" y=\"89\">K</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A microscope image of a molecule model is placed on a grid. Atoms <strong>J</strong>(−4, 2) and <strong>K</strong>(0, 2) are each bonded to the central atom <strong>M</strong>(−2, 4). Each bond is 2√2 units long. Zooming in or out is a dilation centered at the origin.</p>",
      claims: [
        {
          id: "zoom-m",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The image is zoomed in by a dilation with scale factor 3. What is the image of M?",
          choices: [
            { letter: "A", text: "(1, 7)" },
            { letter: "B", text: "(−6, 4)" },
            { letter: "C", text: "(−6, 12)" },
            { letter: "D", text: "(−2/3, 4/3)" }
          ],
          correct: "C"
        },
        {
          id: "zoom-j",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The image is zoomed out by a dilation with scale factor 1/2. What is the image of J?",
          choices: [
            { letter: "A", text: "(−2, 1)" },
            { letter: "B", text: "(−8, 4)" },
            { letter: "C", text: "(−4.5, 1.5)" },
            { letter: "D", text: "(−2, 2)" }
          ],
          correct: "A"
        },
        {
          id: "bond",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "How long is each bond in the image after a dilation with scale factor 3?",
          choices: [
            { letter: "A", text: "2√2 units" },
            { letter: "B", text: "18√2 units" },
            { letter: "C", text: "2√2 + 3 units" },
            { letter: "D", text: "6√2 units" }
          ],
          correct: "D"
        },
        {
          id: "factor",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A dilation centered at the origin maps J(−4, 2) to (−10, 5). What is its scale factor?",
          choices: [
            { letter: "A", text: "2/5" },
            { letter: "B", text: "5/2" },
            { letter: "C", text: "6" },
            { letter: "D", text: "3" }
          ],
          correct: "B"
        },
        {
          id: "mirror",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which line is a line of symmetry of the molecule model JMK?",
          choices: [
            { letter: "A", text: "x = 0" },
            { letter: "B", text: "y = 3" },
            { letter: "C", text: "x = −2" },
            { letter: "D", text: "y = −x" }
          ],
          correct: "C"
        },
        {
          id: "not-true",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which is NOT true of the image of the model after a dilation with scale factor 3 centered at the origin?",
          choices: [
            { letter: "A", text: "The angle at M is 3 times as large." },
            { letter: "B", text: "Each bond is 3 times as long." },
            { letter: "C", text: "The image is similar to the model." },
            { letter: "D", text: "Its line of symmetry is x = −6." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-rocks-satellite",
      family: "GEO",
      mode: "rocks",
      title: "The Satellite and Its Panels",
      kind: "Transformations · G.RLT.3",
      blurb: "A satellite outline reflected over lines on the grid, and its own mirror lines.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 134\" role=\"img\" aria-label=\"Coordinate grid with a satellite outline: a body from x = 3 to x = 5 and y = 1 to y = 5, with solar panels from x = 0 to x = 8 between y = 2 and y = 4; labeled corners P at (8, 4), R at (5, 1) and S at (3, 5)\">" +
        "<line class=\"gr\" x1=\"80\" y1=\"11\" x2=\"80\" y2=\"123\"/><line class=\"gr\" x1=\"112\" y1=\"11\" x2=\"112\" y2=\"123\"/><line class=\"gr\" x1=\"128\" y1=\"11\" x2=\"128\" y2=\"123\"/><line class=\"gr\" x1=\"144\" y1=\"11\" x2=\"144\" y2=\"123\"/><line class=\"gr\" x1=\"160\" y1=\"11\" x2=\"160\" y2=\"123\"/><line class=\"gr\" x1=\"176\" y1=\"11\" x2=\"176\" y2=\"123\"/><line class=\"gr\" x1=\"192\" y1=\"11\" x2=\"192\" y2=\"123\"/><line class=\"gr\" x1=\"208\" y1=\"11\" x2=\"208\" y2=\"123\"/><line class=\"gr\" x1=\"224\" y1=\"11\" x2=\"224\" y2=\"123\"/><line class=\"gr\" x1=\"240\" y1=\"11\" x2=\"240\" y2=\"123\"/>" +
        "<line class=\"gr\" x1=\"80\" y1=\"123\" x2=\"240\" y2=\"123\"/><line class=\"gr\" x1=\"80\" y1=\"91\" x2=\"240\" y2=\"91\"/><line class=\"gr\" x1=\"80\" y1=\"75\" x2=\"240\" y2=\"75\"/><line class=\"gr\" x1=\"80\" y1=\"59\" x2=\"240\" y2=\"59\"/><line class=\"gr\" x1=\"80\" y1=\"43\" x2=\"240\" y2=\"43\"/><line class=\"gr\" x1=\"80\" y1=\"27\" x2=\"240\" y2=\"27\"/><line class=\"gr\" x1=\"80\" y1=\"11\" x2=\"240\" y2=\"11\"/>" +
        "<line class=\"ax\" x1=\"80\" y1=\"107\" x2=\"240\" y2=\"107\"/><line class=\"ax\" x1=\"96\" y1=\"123\" x2=\"96\" y2=\"11\"/>" +
        "<text class=\"sm\" x=\"160\" y=\"120\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"224\" y=\"120\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"92\" y=\"63\" text-anchor=\"end\">3</text><text class=\"sm\" x=\"244\" y=\"111\">x</text><text class=\"sm\" x=\"101\" y=\"21\">y</text>" +
        "<polygon class=\"sh2\" points=\"96,75 144,75 144,91 176,91 176,75 224,75 224,43 176,43 176,27 144,27 144,43 96,43\"/>" +
        "<circle class=\"dt\" cx=\"224\" cy=\"43\" r=\"3\"/><circle class=\"dt\" cx=\"176\" cy=\"91\" r=\"3\"/><circle class=\"dt\" cx=\"144\" cy=\"27\" r=\"3\"/>" +
        "<text x=\"229\" y=\"38\">P</text><text x=\"181\" y=\"106\">R</text><text x=\"139\" y=\"22\" text-anchor=\"end\">S</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A satellite's outline is drawn on a grid: a body from x = 3 to x = 5 and y = 1 to y = 5, with a solar panel on each side from x = 0 to x = 8 and y = 2 to y = 4. Its center is (4, 3). Corners <strong>P</strong>(8, 4), <strong>R</strong>(5, 1) and <strong>S</strong>(3, 5) are labeled.</p>",
      claims: [
        {
          id: "lines",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which lines are lines of symmetry of the satellite outline?",
          choices: [
            { letter: "A", text: "x = 3 and y = 4" },
            { letter: "B", text: "x = 4 only" },
            { letter: "C", text: "x = 8 and y = 4" },
            { letter: "D", text: "x = 4 and y = 3" }
          ],
          correct: "D"
        },
        {
          id: "onto",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which transformation maps the satellite outline onto itself?",
          choices: [
            { letter: "A", text: "Rotation of 90° about (4, 3)" },
            { letter: "B", text: "Rotation of 180° about (4, 3)" },
            { letter: "C", text: "Reflection over the line y = x" },
            { letter: "D", text: "Translation 4 units right" }
          ],
          correct: "B"
        },
        {
          id: "twin",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A twin satellite is the mirror image of this one over the line x = 10. What is the image of P?",
          choices: [
            { letter: "A", text: "(12, 4)" },
            { letter: "B", text: "(−8, 4)" },
            { letter: "C", text: "(8, 16)" },
            { letter: "D", text: "(18, 4)" }
          ],
          correct: "A"
        },
        {
          id: "yx-r",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of R after a reflection over the line y = x?",
          choices: [
            { letter: "A", text: "(−1, −5)" },
            { letter: "B", text: "(−5, 1)" },
            { letter: "C", text: "(1, 5)" },
            { letter: "D", text: "(5, −1)" }
          ],
          correct: "C"
        },
        {
          id: "ynx-s",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of S after a reflection over the line y = −x?",
          choices: [
            { letter: "A", text: "(5, 3)" },
            { letter: "B", text: "(−3, −5)" },
            { letter: "C", text: "(−3, 5)" },
            { letter: "D", text: "(−5, −3)" }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The outline is reflected over the line y = x. Which is true of the image?",
          choices: [
            { letter: "A", text: "It is larger, because it moves farther from the origin." },
            { letter: "B", text: "It is congruent to the outline, with its panels running up and down." },
            { letter: "C", text: "It lands exactly on the outline, because y = x is a line of symmetry." },
            { letter: "D", text: "It is congruent, with its panels still running left and right." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt3-rocks-capsule-dock",
      family: "GEO",
      mode: "rocks",
      title: "Docking the Space Capsule",
      kind: "Transformations · G.RLT.3",
      blurb: "A capsule icon is enlarged and moved to the dock: in which order?",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 124\" role=\"img\" aria-label=\"Coordinate grid with capsule ABCD: A at (1, 1), B at (4, 1), C at (3, 2) and D at (1, 3); and its image A'B'C'D': A' at (-7, -1), B' at (-1, -1), C' at (-3, 1) and D' at (-7, 3)\">" +
        "<line class=\"gr\" x1=\"56\" y1=\"14\" x2=\"56\" y2=\"110\"/><line class=\"gr\" x1=\"72\" y1=\"14\" x2=\"72\" y2=\"110\"/><line class=\"gr\" x1=\"88\" y1=\"14\" x2=\"88\" y2=\"110\"/><line class=\"gr\" x1=\"104\" y1=\"14\" x2=\"104\" y2=\"110\"/><line class=\"gr\" x1=\"120\" y1=\"14\" x2=\"120\" y2=\"110\"/><line class=\"gr\" x1=\"136\" y1=\"14\" x2=\"136\" y2=\"110\"/><line class=\"gr\" x1=\"152\" y1=\"14\" x2=\"152\" y2=\"110\"/><line class=\"gr\" x1=\"168\" y1=\"14\" x2=\"168\" y2=\"110\"/><line class=\"gr\" x1=\"200\" y1=\"14\" x2=\"200\" y2=\"110\"/><line class=\"gr\" x1=\"216\" y1=\"14\" x2=\"216\" y2=\"110\"/><line class=\"gr\" x1=\"232\" y1=\"14\" x2=\"232\" y2=\"110\"/><line class=\"gr\" x1=\"248\" y1=\"14\" x2=\"248\" y2=\"110\"/><line class=\"gr\" x1=\"264\" y1=\"14\" x2=\"264\" y2=\"110\"/>" +
        "<line class=\"gr\" x1=\"56\" y1=\"110\" x2=\"264\" y2=\"110\"/><line class=\"gr\" x1=\"56\" y1=\"94\" x2=\"264\" y2=\"94\"/><line class=\"gr\" x1=\"56\" y1=\"62\" x2=\"264\" y2=\"62\"/><line class=\"gr\" x1=\"56\" y1=\"46\" x2=\"264\" y2=\"46\"/><line class=\"gr\" x1=\"56\" y1=\"30\" x2=\"264\" y2=\"30\"/><line class=\"gr\" x1=\"56\" y1=\"14\" x2=\"264\" y2=\"14\"/>" +
        "<line class=\"ax\" x1=\"56\" y1=\"78\" x2=\"264\" y2=\"78\"/><line class=\"ax\" x1=\"184\" y1=\"110\" x2=\"184\" y2=\"14\"/>" +
        "<text class=\"sm\" x=\"216\" y=\"91\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"248\" y=\"91\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"188\" y=\"34\">3</text><text class=\"sm\" x=\"268\" y=\"82\">x</text><text class=\"sm\" x=\"179\" y=\"24\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh\" points=\"200,62 248,62 232,46 200,30\"/>" +
        "<polygon class=\"sh2\" points=\"72,94 168,94 136,62 72,30\"/>" +
        "<circle class=\"dt\" cx=\"200\" cy=\"62\" r=\"3\"/><circle class=\"dt\" cx=\"248\" cy=\"62\" r=\"3\"/><circle class=\"dt\" cx=\"232\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"200\" cy=\"30\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"72\" cy=\"94\" r=\"3\"/><circle class=\"dt\" cx=\"168\" cy=\"94\" r=\"3\"/><circle class=\"dt\" cx=\"136\" cy=\"62\" r=\"3\"/><circle class=\"dt\" cx=\"72\" cy=\"30\" r=\"3\"/>" +
        "<text x=\"195\" y=\"57\" text-anchor=\"end\">A</text><text x=\"256\" y=\"67\">B</text><text x=\"237\" y=\"41\">C</text><text x=\"205\" y=\"25\">D</text>" +
        "<text x=\"64\" y=\"99\" text-anchor=\"end\">A′</text><text x=\"176\" y=\"99\">B′</text><text x=\"141\" y=\"57\">C′</text><text x=\"64\" y=\"35\" text-anchor=\"end\">D′</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A docking simulation shows a capsule as <strong>ABCD</strong>: A(1, 1), B(4, 1), C(3, 2) and D(1, 3); its area is 3.5 square units. At the dock it appears as <strong>A′B′C′D′</strong>: A′(−7, −1), B′(−1, −1), C′(−3, 1) and D′(−7, 3).</p>",
      claims: [
        {
          id: "sequence",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which sequence maps ABCD to A′B′C′D′?",
          choices: [
            { letter: "A", text: "Translate by (x, y) → (x − 9, y − 3), then dilate by 2 about the origin" },
            { letter: "B", text: "Dilate by 1/2 about the origin, then translate by (x, y) → (x − 9, y − 3)" },
            { letter: "C", text: "Dilate by 2 about the origin, then translate by (x, y) → (x − 9, y − 3)" },
            { letter: "D", text: "Translate by (x, y) → (x − 8, y − 2), with no dilation" }
          ],
          correct: "C"
        },
        {
          id: "similar",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which is true of ABCD and A′B′C′D′?",
          choices: [
            { letter: "A", text: "They are similar but not congruent." },
            { letter: "B", text: "They are congruent, because a translation is an isometry." },
            { letter: "C", text: "They are neither similar nor congruent." },
            { letter: "D", text: "They are congruent, because their angles are equal." }
          ],
          correct: "A"
        },
        {
          id: "area",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "What is the area of A′B′C′D′?",
          choices: [
            { letter: "A", text: "7 square units" },
            { letter: "B", text: "14 square units" },
            { letter: "C", text: "3.5 square units" },
            { letter: "D", text: "28 square units" }
          ],
          correct: "B"
        },
        {
          id: "swap",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "If the translation (x, y) → (x − 9, y − 3) is done first and the dilation by 2 about the origin second, where does C(3, 2) land?",
          choices: [
            { letter: "A", text: "(−3, 1)" },
            { letter: "B", text: "(−3, −0.5)" },
            { letter: "C", text: "(6, 4)" },
            { letter: "D", text: "(−12, −2)" }
          ],
          correct: "D"
        },
        {
          id: "undo",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which sequence maps A′B′C′D′ back onto ABCD?",
          choices: [
            { letter: "A", text: "Dilate by 1/2 about the origin, then translate by (x, y) → (x + 9, y + 3)" },
            { letter: "B", text: "Translate by (x, y) → (x + 9, y + 3), then dilate by 1/2 about the origin" },
            { letter: "C", text: "Translate by (x, y) → (x + 9, y + 3), then dilate by 2 about the origin" },
            { letter: "D", text: "Translate by (x, y) → (x − 9, y − 3), then dilate by 1/2 about the origin" }
          ],
          correct: "B"
        },
        {
          id: "turn-d",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Before docking, ABCD is rotated 90° clockwise about the origin. What is the image of D?",
          choices: [
            { letter: "A", text: "(−3, 1)" },
            { letter: "B", text: "(3, 1)" },
            { letter: "C", text: "(3, −1)" },
            { letter: "D", text: "(−1, −3)" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt3-rocks-hurricane",
      family: "GEO",
      mode: "rocks",
      title: "The Hurricane Symbol",
      kind: "Transformations · G.RLT.3",
      blurb: "A storm symbol that turns onto itself but has no mirror line.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"Coordinate grid with a hurricane symbol centered at the origin O: a circle of radius 1 and two curved arms; one arm leaves the circle at (0, 1) and curls to the tip P at (-3, -1); the other leaves at (0, -1) and curls to the tip U at (3, 1)\">" +
        "<line class=\"gr\" x1=\"100\" y1=\"10\" x2=\"100\" y2=\"130\"/><line class=\"gr\" x1=\"115\" y1=\"10\" x2=\"115\" y2=\"130\"/><line class=\"gr\" x1=\"130\" y1=\"10\" x2=\"130\" y2=\"130\"/><line class=\"gr\" x1=\"145\" y1=\"10\" x2=\"145\" y2=\"130\"/><line class=\"gr\" x1=\"175\" y1=\"10\" x2=\"175\" y2=\"130\"/><line class=\"gr\" x1=\"190\" y1=\"10\" x2=\"190\" y2=\"130\"/><line class=\"gr\" x1=\"205\" y1=\"10\" x2=\"205\" y2=\"130\"/><line class=\"gr\" x1=\"220\" y1=\"10\" x2=\"220\" y2=\"130\"/>" +
        "<line class=\"gr\" x1=\"100\" y1=\"130\" x2=\"220\" y2=\"130\"/><line class=\"gr\" x1=\"100\" y1=\"115\" x2=\"220\" y2=\"115\"/><line class=\"gr\" x1=\"100\" y1=\"100\" x2=\"220\" y2=\"100\"/><line class=\"gr\" x1=\"100\" y1=\"85\" x2=\"220\" y2=\"85\"/><line class=\"gr\" x1=\"100\" y1=\"55\" x2=\"220\" y2=\"55\"/><line class=\"gr\" x1=\"100\" y1=\"40\" x2=\"220\" y2=\"40\"/><line class=\"gr\" x1=\"100\" y1=\"25\" x2=\"220\" y2=\"25\"/><line class=\"gr\" x1=\"100\" y1=\"10\" x2=\"220\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"100\" y1=\"70\" x2=\"220\" y2=\"70\"/><line class=\"ax\" x1=\"160\" y1=\"130\" x2=\"160\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"130\" y=\"83\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"164\" y=\"104\">−2</text><text class=\"sm\" x=\"164\" y=\"44\">2</text><text class=\"sm\" x=\"224\" y=\"74\">x</text><text class=\"sm\" x=\"155\" y=\"20\" text-anchor=\"end\">y</text>" +
        "<circle class=\"sh\" cx=\"160\" cy=\"70\" r=\"15\"/>" +
        "<path class=\"ac\" d=\"M160 55 Q115 55 115 85 M160 85 Q205 85 205 55\"/>" +
        "<circle class=\"dt\" cx=\"115\" cy=\"85\" r=\"3\"/><circle class=\"dt\" cx=\"205\" cy=\"55\" r=\"3\"/>" +
        "<text x=\"115\" y=\"102\" text-anchor=\"middle\">P</text><text x=\"205\" y=\"48\" text-anchor=\"middle\">U</text>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"70\" r=\"2.5\"/><text class=\"sm\" x=\"162\" y=\"67\">O</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A weather map marks a hurricane with the symbol shown, centered at the origin <strong>O</strong>. Each arm is the other arm turned 180° about O. The arm tips are <strong>P</strong>(−3, −1) and <strong>U</strong>(3, 1). Maps of the Southern Hemisphere use the mirror image of this symbol.</p>",
      claims: [
        {
          id: "order",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the order of rotational symmetry of the hurricane symbol about O?",
          choices: [
            { letter: "A", text: "2" },
            { letter: "B", text: "1" },
            { letter: "C", text: "4" },
            { letter: "D", text: "180" }
          ],
          correct: "A"
        },
        {
          id: "describe",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which describes the line symmetry of the hurricane symbol?",
          choices: [
            { letter: "A", text: "The x- and y-axes are lines of symmetry." },
            { letter: "B", text: "The line y = x is its only line of symmetry." },
            { letter: "C", text: "It has 2 lines of symmetry, one for each arm." },
            { letter: "D", text: "It has no lines of symmetry." }
          ],
          correct: "D"
        },
        {
          id: "turn-p",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The symbol is rotated 90° clockwise about O. What is the image of tip P?",
          choices: [
            { letter: "A", text: "(1, −3)" },
            { letter: "B", text: "(3, 1)" },
            { letter: "C", text: "(−1, 3)" },
            { letter: "D", text: "(−1, −3)" }
          ],
          correct: "C"
        },
        {
          id: "south",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The Southern Hemisphere symbol is made by reflecting this symbol over the y-axis. Which is true of it?",
          choices: [
            { letter: "A", text: "It is the original turned 180° about O." },
            { letter: "B", text: "It is congruent, but no turn of the original matches it." },
            { letter: "C", text: "It is the original turned 90° about O." },
            { letter: "D", text: "It is smaller than the original." }
          ],
          correct: "B"
        },
        {
          id: "tv",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "For a TV map, the symbol is dilated by scale factor 1.5 centered at O. What is the image of tip U?",
          choices: [
            { letter: "A", text: "(4.5, 1.5)" },
            { letter: "B", text: "(4.5, 2.5)" },
            { letter: "C", text: "(4.5, 1)" },
            { letter: "D", text: "(6, 2)" }
          ],
          correct: "A"
        },
        {
          id: "two-flips",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The symbol is reflected over the x-axis and then over the y-axis. Which is true?",
          choices: [
            { letter: "A", text: "This is a reflection over y = x, so the symbol is mirrored." },
            { letter: "B", text: "This is a 90° turn about O, so the arms point a new way." },
            { letter: "C", text: "This is a translation, so the symbol moves off O." },
            { letter: "D", text: "This is a 180° turn about O, so the symbol lands on itself." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt3-sky-rail-signs",
      family: "GEO",
      mode: "sky",
      title: "Signs at the Train Station",
      kind: "Transformations · G.RLT.3",
      blurb: "A crossbuck, a pennant and a letter N: which ones flip or turn onto themselves?",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 142\" role=\"img\" aria-label=\"Sign 1, a crossbuck: two equal boards crossing at their centers to form an X, meeting at a 70 degree angle; Sign 2, a pennant, an isosceles triangle pointing right; Sign 3, a block letter N\">" +
        "<polygon class=\"sh\" points=\"15.03,88.94 96.94,31.59 104.97,43.06 23.06,100.41\"/><polygon class=\"sh\" points=\"23.06,31.59 104.97,88.94 96.94,100.41 15.03,43.06\"/>" +
        "<path class=\"thin\" d=\"M74.74 76.32 A18 18 0 0 0 74.74 55.68\"/>" +
        "<text class=\"sm\" x=\"88\" y=\"71\">70°</text>" +
        "<polygon class=\"sh2\" points=\"128,36 128,100 196,68\"/>" +
        "<polygon class=\"sh\" points=\"234,98 234,34 248,34 276,76 276,34 290,34 290,98 276,98 248,56 248,98\"/>" +
        "<text class=\"sm\" x=\"60\" y=\"134\" text-anchor=\"middle\">Sign 1</text><text class=\"sm\" x=\"160\" y=\"134\" text-anchor=\"middle\">Sign 2</text><text class=\"sm\" x=\"262\" y=\"134\" text-anchor=\"middle\">Sign 3</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">Three signs stand near a train station. <strong>Sign 1</strong> is a crossbuck: two identical rectangular boards cross at their centers and meet at a 70° angle. <strong>Sign 2</strong> is a pennant shaped like an isosceles triangle. <strong>Sign 3</strong> is a block letter N for the north platform.</p>",
      claims: [
        {
          id: "x-lines",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "How many lines of symmetry does Sign 1 have?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "1" },
            { letter: "C", text: "2" },
            { letter: "D", text: "0" }
          ],
          correct: "C"
        },
        {
          id: "x-turn",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the smallest angle of rotation, about its center, that maps Sign 1 onto itself?",
          choices: [
            { letter: "A", text: "180°" },
            { letter: "B", text: "70°" },
            { letter: "C", text: "90°" },
            { letter: "D", text: "35°" }
          ],
          correct: "A"
        },
        {
          id: "n-order",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the order of rotational symmetry of Sign 3?",
          choices: [
            { letter: "A", text: "1" },
            { letter: "B", text: "0" },
            { letter: "C", text: "180" },
            { letter: "D", text: "2" }
          ],
          correct: "D"
        },
        {
          id: "pennant",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which describes the symmetry of Sign 2?",
          choices: [
            { letter: "A", text: "3 lines of symmetry; rotational symmetry of order 3" },
            { letter: "B", text: "1 line of symmetry; no rotational symmetry" },
            { letter: "C", text: "No lines of symmetry; no rotational symmetry" },
            { letter: "D", text: "1 line of symmetry; rotational symmetry of order 2" }
          ],
          correct: "B"
        },
        {
          id: "highway",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A highway copy of Sign 2 is made by a dilation with scale factor 2. Which is true of the copy?",
          choices: [
            { letter: "A", text: "Its sides and its angles are twice as large." },
            { letter: "B", text: "Its sides are twice as long; its area is twice as large." },
            { letter: "C", text: "Its sides are twice as long; its angles are the same." },
            { letter: "D", text: "It is congruent to Sign 2." }
          ],
          correct: "C"
        },
        {
          id: "backward",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A sign shop flips Sign 3 over a vertical line by mistake. Which is true of the flipped sign?",
          choices: [
            { letter: "A", text: "It matches Sign 3, because N has rotational symmetry." },
            { letter: "B", text: "It matches Sign 3, because N has a vertical line of symmetry." },
            { letter: "C", text: "It is smaller than Sign 3." },
            { letter: "D", text: "It is congruent to Sign 3 but reads as a backward N." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt3-sky-airport-plane",
      family: "GEO",
      mode: "sky",
      title: "The Plane on the Airport Map",
      kind: "Transformations · G.RLT.3",
      blurb: "A plane icon taxis, flips and turns on the airport grid.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 134\" role=\"img\" aria-label=\"Coordinate grid airport map with a plane icon, triangle JET: J at (2, -1), E at (5, -2) and T at (1, -4)\">" +
        "<line class=\"gr\" x1=\"88\" y1=\"11\" x2=\"88\" y2=\"123\"/><line class=\"gr\" x1=\"104\" y1=\"11\" x2=\"104\" y2=\"123\"/><line class=\"gr\" x1=\"120\" y1=\"11\" x2=\"120\" y2=\"123\"/><line class=\"gr\" x1=\"152\" y1=\"11\" x2=\"152\" y2=\"123\"/><line class=\"gr\" x1=\"168\" y1=\"11\" x2=\"168\" y2=\"123\"/><line class=\"gr\" x1=\"184\" y1=\"11\" x2=\"184\" y2=\"123\"/><line class=\"gr\" x1=\"200\" y1=\"11\" x2=\"200\" y2=\"123\"/><line class=\"gr\" x1=\"216\" y1=\"11\" x2=\"216\" y2=\"123\"/><line class=\"gr\" x1=\"232\" y1=\"11\" x2=\"232\" y2=\"123\"/>" +
        "<line class=\"gr\" x1=\"88\" y1=\"123\" x2=\"232\" y2=\"123\"/><line class=\"gr\" x1=\"88\" y1=\"107\" x2=\"232\" y2=\"107\"/><line class=\"gr\" x1=\"88\" y1=\"91\" x2=\"232\" y2=\"91\"/><line class=\"gr\" x1=\"88\" y1=\"75\" x2=\"232\" y2=\"75\"/><line class=\"gr\" x1=\"88\" y1=\"59\" x2=\"232\" y2=\"59\"/><line class=\"gr\" x1=\"88\" y1=\"27\" x2=\"232\" y2=\"27\"/><line class=\"gr\" x1=\"88\" y1=\"11\" x2=\"232\" y2=\"11\"/>" +
        "<line class=\"ax\" x1=\"88\" y1=\"43\" x2=\"232\" y2=\"43\"/><line class=\"ax\" x1=\"136\" y1=\"123\" x2=\"136\" y2=\"11\"/>" +
        "<text class=\"sm\" x=\"104\" y=\"56\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"168\" y=\"56\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"200\" y=\"56\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"132\" y=\"79\" text-anchor=\"end\">−2</text><text class=\"sm\" x=\"132\" y=\"111\" text-anchor=\"end\">−4</text><text class=\"sm\" x=\"236\" y=\"47\">x</text><text class=\"sm\" x=\"141\" y=\"21\">y</text>" +
        "<polygon class=\"sh\" points=\"168,59 216,75 152,107\"/>" +
        "<circle class=\"dt\" cx=\"168\" cy=\"59\" r=\"3\"/><circle class=\"dt\" cx=\"216\" cy=\"75\" r=\"3\"/><circle class=\"dt\" cx=\"152\" cy=\"107\" r=\"3\"/>" +
        "<text x=\"176\" y=\"64\">J</text><text x=\"224\" y=\"80\">E</text><text x=\"144\" y=\"112\" text-anchor=\"end\">T</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">An airport map is drawn on a grid with the control tower at the origin. A plane icon is <strong>△JET</strong> with J(2, −1), E(5, −2) and T(1, −4). The main runway lies along the y-axis.</p>",
      claims: [
        {
          id: "taxi",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The plane taxis by the rule (x, y) → (x − 4, y + 3). What is the image of E?",
          choices: [
            { letter: "A", text: "(9, −5)" },
            { letter: "B", text: "(1, 1)" },
            { letter: "C", text: "(8, −6)" },
            { letter: "D", text: "(1, −2)" }
          ],
          correct: "B"
        },
        {
          id: "runway",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The icon is reflected over the runway (the y-axis). What is the image of J?",
          choices: [
            { letter: "A", text: "(−2, −1)" },
            { letter: "B", text: "(2, 1)" },
            { letter: "C", text: "(−2, 1)" },
            { letter: "D", text: "(−1, 2)" }
          ],
          correct: "A"
        },
        {
          id: "half-t",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of T after a rotation of 180° about the origin?",
          choices: [
            { letter: "A", text: "(1, 4)" },
            { letter: "B", text: "(−1, −4)" },
            { letter: "C", text: "(4, 1)" },
            { letter: "D", text: "(−1, 4)" }
          ],
          correct: "D"
        },
        {
          id: "quarter-e",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of E after a rotation of 90° counterclockwise about the origin?",
          choices: [
            { letter: "A", text: "(−2, −5)" },
            { letter: "B", text: "(−2, 5)" },
            { letter: "C", text: "(2, 5)" },
            { letter: "D", text: "(−5, 2)" }
          ],
          correct: "C"
        },
        {
          id: "gate",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The tower moves the icon so that J lands on (−3, 2). Which rule describes this translation?",
          choices: [
            { letter: "A", text: "(x, y) → (x − 5, y + 3)" },
            { letter: "B", text: "(x, y) → (x + 5, y − 3)" },
            { letter: "C", text: "(x, y) → (x − 3, y + 2)" },
            { letter: "D", text: "(x, y) → (x − 1, y + 1)" }
          ],
          correct: "A"
        },
        {
          id: "bigger",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A wall map shows the icon at J′(4, −2), E′(10, −4) and T′(2, −8). Which is true?",
          choices: [
            { letter: "A", text: "It is a translation, so the icons are congruent." },
            { letter: "B", text: "It is a dilation by 2, so the icons are similar, not congruent." },
            { letter: "C", text: "It is a dilation by 1/2, so the new icon is smaller." },
            { letter: "D", text: "It is a reflection, so the icons are congruent." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt3-sky-kite-festival",
      family: "GEO",
      mode: "sky",
      title: "The Kite Festival",
      kind: "Transformations · G.RLT.3",
      blurb: "A kite on the field grid: its mirror line, and flips over diagonal lines.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 128\" role=\"img\" aria-label=\"Coordinate grid with kite KITE: K at (1, 1), I at (4, 2), T at (4, 4) and E at (2, 4)\">" +
        "<line class=\"gr\" x1=\"97\" y1=\"10\" x2=\"97\" y2=\"118\"/><line class=\"gr\" x1=\"115\" y1=\"10\" x2=\"115\" y2=\"118\"/><line class=\"gr\" x1=\"151\" y1=\"10\" x2=\"151\" y2=\"118\"/><line class=\"gr\" x1=\"169\" y1=\"10\" x2=\"169\" y2=\"118\"/><line class=\"gr\" x1=\"187\" y1=\"10\" x2=\"187\" y2=\"118\"/><line class=\"gr\" x1=\"205\" y1=\"10\" x2=\"205\" y2=\"118\"/><line class=\"gr\" x1=\"223\" y1=\"10\" x2=\"223\" y2=\"118\"/>" +
        "<line class=\"gr\" x1=\"97\" y1=\"118\" x2=\"223\" y2=\"118\"/><line class=\"gr\" x1=\"97\" y1=\"82\" x2=\"223\" y2=\"82\"/><line class=\"gr\" x1=\"97\" y1=\"64\" x2=\"223\" y2=\"64\"/><line class=\"gr\" x1=\"97\" y1=\"46\" x2=\"223\" y2=\"46\"/><line class=\"gr\" x1=\"97\" y1=\"28\" x2=\"223\" y2=\"28\"/><line class=\"gr\" x1=\"97\" y1=\"10\" x2=\"223\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"97\" y1=\"100\" x2=\"223\" y2=\"100\"/><line class=\"ax\" x1=\"133\" y1=\"118\" x2=\"133\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"115\" y=\"113\" text-anchor=\"middle\">−1</text><text class=\"sm\" x=\"169\" y=\"113\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"205\" y=\"113\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"129\" y=\"68\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"129\" y=\"32\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"227\" y=\"104\">x</text><text class=\"sm\" x=\"138\" y=\"20\">y</text>" +
        "<polygon class=\"sh\" points=\"151,82 205,64 205,28 169,28\"/>" +
        "<line class=\"thin\" x1=\"151\" y1=\"82\" x2=\"205\" y2=\"28\"/><line class=\"thin\" x1=\"205\" y1=\"64\" x2=\"169\" y2=\"28\"/>" +
        "<circle class=\"dt\" cx=\"151\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"205\" cy=\"64\" r=\"3\"/><circle class=\"dt\" cx=\"205\" cy=\"28\" r=\"3\"/><circle class=\"dt\" cx=\"169\" cy=\"28\" r=\"3\"/>" +
        "<text x=\"146\" y=\"97\" text-anchor=\"end\">K</text><text x=\"213\" y=\"69\">I</text><text x=\"210\" y=\"23\">T</text><text x=\"164\" y=\"23\" text-anchor=\"end\">E</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">At a kite festival, a field map uses a grid in meters. A kite is <strong>KITE</strong> with K(1, 1), I(4, 2), T(4, 4) and E(2, 4). KI = KE = √10 m and IT = ET = 2 m. Its two cross sticks are drawn inside it.</p>",
      claims: [
        {
          id: "symmetry",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which describes the symmetry of kite KITE?",
          choices: [
            { letter: "A", text: "2 lines of symmetry, along both cross sticks" },
            { letter: "B", text: "1 line of symmetry, y = x; rotational symmetry of order 2" },
            { letter: "C", text: "1 line of symmetry, y = x; no rotational symmetry" },
            { letter: "D", text: "1 line of symmetry, x = 2.5; no rotational symmetry" }
          ],
          correct: "C"
        },
        {
          id: "ynx-i",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of I after a reflection over the line y = −x?",
          choices: [
            { letter: "A", text: "(−2, −4)" },
            { letter: "B", text: "(2, 4)" },
            { letter: "C", text: "(−4, −2)" },
            { letter: "D", text: "(−4, 2)" }
          ],
          correct: "A"
        },
        {
          id: "second",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A second kite flies as the mirror image of KITE over the line x = −1. What is the image of I?",
          choices: [
            { letter: "A", text: "(−4, 2)" },
            { letter: "B", text: "(−5, 2)" },
            { letter: "C", text: "(4, −4)" },
            { letter: "D", text: "(−6, 2)" }
          ],
          correct: "D"
        },
        {
          id: "compose",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which single transformation has the same effect as a rotation of 90° counterclockwise about the origin followed by a reflection over the y-axis?",
          choices: [
            { letter: "A", text: "Reflection over the line y = −x" },
            { letter: "B", text: "Reflection over the line y = x" },
            { letter: "C", text: "Rotation of 90° clockwise about the origin" },
            { letter: "D", text: "Rotation of 180° about the origin" }
          ],
          correct: "B"
        },
        {
          id: "turn-t",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of T after a rotation of 270° clockwise about the origin?",
          choices: [
            { letter: "A", text: "(4, −4)" },
            { letter: "B", text: "(−4, −4)" },
            { letter: "C", text: "(−4, 4)" },
            { letter: "D", text: "(4, 4)" }
          ],
          correct: "C"
        },
        {
          id: "pond",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A gust moves the kite by (x, y) → (x + 3, y − 5). Then its reflection appears in a pond along the x-axis. Where is the reflection of E?",
          choices: [
            { letter: "A", text: "(5, −9)" },
            { letter: "B", text: "(5, 1)" },
            { letter: "C", text: "(5, −1)" },
            { letter: "D", text: "(−5, −1)" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt3-sky-train-yard",
      family: "GEO",
      mode: "sky",
      title: "The Engine in the Rail Yard",
      kind: "Transformations · G.RLT.3",
      blurb: "A train engine slides along tracks and spins on a turntable.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 132\" role=\"img\" aria-label=\"Coordinate grid track map with train car ABCD: A at (-6, -3), B at (-2, -3), C at (-1, -1) and D at (-6, -1)\">" +
        "<line class=\"gr\" x1=\"79\" y1=\"12\" x2=\"79\" y2=\"120\"/><line class=\"gr\" x1=\"97\" y1=\"12\" x2=\"97\" y2=\"120\"/><line class=\"gr\" x1=\"115\" y1=\"12\" x2=\"115\" y2=\"120\"/><line class=\"gr\" x1=\"133\" y1=\"12\" x2=\"133\" y2=\"120\"/><line class=\"gr\" x1=\"151\" y1=\"12\" x2=\"151\" y2=\"120\"/><line class=\"gr\" x1=\"169\" y1=\"12\" x2=\"169\" y2=\"120\"/><line class=\"gr\" x1=\"187\" y1=\"12\" x2=\"187\" y2=\"120\"/><line class=\"gr\" x1=\"223\" y1=\"12\" x2=\"223\" y2=\"120\"/><line class=\"gr\" x1=\"241\" y1=\"12\" x2=\"241\" y2=\"120\"/>" +
        "<line class=\"gr\" x1=\"79\" y1=\"120\" x2=\"241\" y2=\"120\"/><line class=\"gr\" x1=\"79\" y1=\"102\" x2=\"241\" y2=\"102\"/><line class=\"gr\" x1=\"79\" y1=\"84\" x2=\"241\" y2=\"84\"/><line class=\"gr\" x1=\"79\" y1=\"66\" x2=\"241\" y2=\"66\"/><line class=\"gr\" x1=\"79\" y1=\"30\" x2=\"241\" y2=\"30\"/><line class=\"gr\" x1=\"79\" y1=\"12\" x2=\"241\" y2=\"12\"/>" +
        "<line class=\"ax\" x1=\"79\" y1=\"48\" x2=\"241\" y2=\"48\"/><line class=\"ax\" x1=\"205\" y1=\"120\" x2=\"205\" y2=\"12\"/>" +
        "<text class=\"sm\" x=\"97\" y=\"61\" text-anchor=\"middle\">−6</text><text class=\"sm\" x=\"133\" y=\"61\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"169\" y=\"61\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"209\" y=\"88\">−2</text><text class=\"sm\" x=\"245\" y=\"52\">x</text><text class=\"sm\" x=\"200\" y=\"22\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh2\" points=\"97,102 169,102 187,66 97,66\"/>" +
        "<circle class=\"dt\" cx=\"97\" cy=\"102\" r=\"3\"/><circle class=\"dt\" cx=\"169\" cy=\"102\" r=\"3\"/><circle class=\"dt\" cx=\"187\" cy=\"66\" r=\"3\"/><circle class=\"dt\" cx=\"97\" cy=\"66\" r=\"3\"/>" +
        "<text x=\"92\" y=\"117\" text-anchor=\"end\">A</text><text x=\"169\" y=\"119\" text-anchor=\"middle\">B</text><text x=\"195\" y=\"71\">C</text><text x=\"89\" y=\"71\" text-anchor=\"end\">D</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a rail yard map, a train engine is outlined as <strong>ABCD</strong> with A(−6, −3), B(−2, −3), C(−1, −1) and D(−6, −1). A turntable for engines is centered at the origin.</p>",
      claims: [
        {
          id: "slide-c",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The engine moves by the rule (x, y) → (x + 6, y + 3). What is the image of C?",
          choices: [
            { letter: "A", text: "(−7, −4)" },
            { letter: "B", text: "(2, 5)" },
            { letter: "C", text: "(5, −1)" },
            { letter: "D", text: "(5, 2)" }
          ],
          correct: "D"
        },
        {
          id: "rule-b",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The engine slides so that B lands on (1, 2). Which rule describes the slide?",
          choices: [
            { letter: "A", text: "(x, y) → (x + 3, y + 5)" },
            { letter: "B", text: "(x, y) → (x − 3, y − 5)" },
            { letter: "C", text: "(x, y) → (x + 1, y + 2)" },
            { letter: "D", text: "(x, y) → (x + 3, y − 5)" }
          ],
          correct: "A"
        },
        {
          id: "two-moves",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The engine moves by (x, y) → (x + 7, y + 2) and then by (x, y) → (x − 3, y + 5). Which single rule has the same effect?",
          choices: [
            { letter: "A", text: "(x, y) → (x + 10, y − 3)" },
            { letter: "B", text: "(x, y) → (x − 3, y + 5)" },
            { letter: "C", text: "(x, y) → (x + 4, y + 7)" },
            { letter: "D", text: "(x, y) → (x − 21, y + 10)" }
          ],
          correct: "C"
        },
        {
          id: "platform",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A matching engine on the other side of the platform is the mirror image of ABCD over the line y = 1. What is the image of A?",
          choices: [
            { letter: "A", text: "(−6, 3)" },
            { letter: "B", text: "(−6, 5)" },
            { letter: "C", text: "(−6, 4)" },
            { letter: "D", text: "(8, −3)" }
          ],
          correct: "B"
        },
        {
          id: "keeps",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which is true of ABCD and its image after any translation?",
          choices: [
            { letter: "A", text: "They have the same side lengths but face opposite ways." },
            { letter: "B", text: "The image is larger when the slide moves it up." },
            { letter: "C", text: "The sides stay the same, but the angles change." },
            { letter: "D", text: "They have the same side lengths and face the same way." }
          ],
          correct: "D"
        },
        {
          id: "turntable",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The turntable turns the engine 180° about the origin. What is the image of D?",
          choices: [
            { letter: "A", text: "(6, 1)" },
            { letter: "B", text: "(−6, 1)" },
            { letter: "C", text: "(6, −1)" },
            { letter: "D", text: "(−1, 6)" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-sky-model-sail",
      family: "GEO",
      mode: "sky",
      title: "Sails for a Model Boat",
      kind: "Transformations · G.RLT.3",
      blurb: "A triangular sail shrunk and enlarged about the origin.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Coordinate grid with sail SAL, a right triangle: S at (2, 2), A at (2, 8) and L at (6, 2), with the right angle at S\">" +
        "<line class=\"gr\" x1=\"108\" y1=\"10\" x2=\"108\" y2=\"140\"/><line class=\"gr\" x1=\"134\" y1=\"10\" x2=\"134\" y2=\"140\"/><line class=\"gr\" x1=\"147\" y1=\"10\" x2=\"147\" y2=\"140\"/><line class=\"gr\" x1=\"160\" y1=\"10\" x2=\"160\" y2=\"140\"/><line class=\"gr\" x1=\"173\" y1=\"10\" x2=\"173\" y2=\"140\"/><line class=\"gr\" x1=\"186\" y1=\"10\" x2=\"186\" y2=\"140\"/><line class=\"gr\" x1=\"199\" y1=\"10\" x2=\"199\" y2=\"140\"/><line class=\"gr\" x1=\"212\" y1=\"10\" x2=\"212\" y2=\"140\"/>" +
        "<line class=\"gr\" x1=\"108\" y1=\"140\" x2=\"212\" y2=\"140\"/><line class=\"gr\" x1=\"108\" y1=\"114\" x2=\"212\" y2=\"114\"/><line class=\"gr\" x1=\"108\" y1=\"101\" x2=\"212\" y2=\"101\"/><line class=\"gr\" x1=\"108\" y1=\"88\" x2=\"212\" y2=\"88\"/><line class=\"gr\" x1=\"108\" y1=\"75\" x2=\"212\" y2=\"75\"/><line class=\"gr\" x1=\"108\" y1=\"62\" x2=\"212\" y2=\"62\"/><line class=\"gr\" x1=\"108\" y1=\"49\" x2=\"212\" y2=\"49\"/><line class=\"gr\" x1=\"108\" y1=\"36\" x2=\"212\" y2=\"36\"/><line class=\"gr\" x1=\"108\" y1=\"23\" x2=\"212\" y2=\"23\"/><line class=\"gr\" x1=\"108\" y1=\"10\" x2=\"212\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"108\" y1=\"127\" x2=\"212\" y2=\"127\"/><line class=\"ax\" x1=\"121\" y1=\"140\" x2=\"121\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"147\" y=\"140\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"199\" y=\"140\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"117\" y=\"105\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"117\" y=\"27\" text-anchor=\"end\">8</text><text class=\"sm\" x=\"216\" y=\"131\">x</text><text class=\"sm\" x=\"126\" y=\"20\">y</text>" +
        "<polygon class=\"sh\" points=\"147,101 147,23 199,101\"/>" +
        "<path class=\"thin\" d=\"M155 101 V93 H147\"/>" +
        "<circle class=\"dt\" cx=\"147\" cy=\"101\" r=\"3\"/><circle class=\"dt\" cx=\"147\" cy=\"23\" r=\"3\"/><circle class=\"dt\" cx=\"199\" cy=\"101\" r=\"3\"/>" +
        "<text x=\"142\" y=\"116\" text-anchor=\"end\">S</text><text x=\"147\" y=\"16\" text-anchor=\"middle\">A</text><text x=\"207\" y=\"106\">L</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A boat builder draws a sail as right triangle <strong>SAL</strong> with S(2, 2), A(2, 8) and L(6, 2), in feet. The mast side SA is 6 ft long and the sail's area is 12 square feet. Models of the sail are made by dilations centered at the origin.</p>",
      claims: [
        {
          id: "half-a",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A model uses a dilation with scale factor 1/2. What is the image of A?",
          choices: [
            { letter: "A", text: "(4, 16)" },
            { letter: "B", text: "(1.5, 7.5)" },
            { letter: "C", text: "(1, 4)" },
            { letter: "D", text: "(1, 8)" }
          ],
          correct: "C"
        },
        {
          id: "big-l",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A larger sail uses a dilation with scale factor 3/2. What is the image of L?",
          choices: [
            { letter: "A", text: "(7.5, 3.5)" },
            { letter: "B", text: "(9, 3)" },
            { letter: "C", text: "(12, 4)" },
            { letter: "D", text: "(9, 2)" }
          ],
          correct: "B"
        },
        {
          id: "factor",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "In another model, the image of the mast side SA is 4.5 ft long. What is the scale factor of the dilation?",
          choices: [
            { letter: "A", text: "4/3" },
            { letter: "B", text: "1.5" },
            { letter: "C", text: "9/16" },
            { letter: "D", text: "3/4" }
          ],
          correct: "D"
        },
        {
          id: "error",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Dev says a model made with scale factor 1/2 has a sail area of 6 square feet, because each side is half as long. What is his error?",
          choices: [
            { letter: "A", text: "Area scales by (1/2)², so it is 3 square feet." },
            { letter: "B", text: "There is no error; area scales by 1/2." },
            { letter: "C", text: "Dilations keep area, so it is 12 square feet." },
            { letter: "D", text: "Area scales by 2², so it is 48 square feet." }
          ],
          correct: "A"
        },
        {
          id: "display",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A model sail is dilated by scale factor 1/2 about the origin and then translated 3 ft right on a display board. Where does L end up?",
          choices: [
            { letter: "A", text: "(4.5, 1)" },
            { letter: "B", text: "(3, 1)" },
            { letter: "C", text: "(6, 1)" },
            { letter: "D", text: "(0, 1)" }
          ],
          correct: "C"
        },
        {
          id: "larger",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Which rule makes a larger copy of the sail by a dilation centered at the origin?",
          choices: [
            { letter: "A", text: "(x, y) → (0.8x, 0.8y)" },
            { letter: "B", text: "(x, y) → (1.25x, 1.25y)" },
            { letter: "C", text: "(x, y) → (x + 1.25, y + 1.25)" },
            { letter: "D", text: "(x, y) → (−x, −y)" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt3-sky-drone-route",
      family: "GEO",
      mode: "sky",
      title: "The Delivery Drone Routes",
      kind: "Transformations · G.RLT.3",
      blurb: "Two drone routes from one launch pad: one is the other turned.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 124\" role=\"img\" aria-label=\"Coordinate grid with drone route 1, a solid path from O at the origin to A at (3, 1), B at (4, 3) and C at (2, 4); and route 2, a dashed path from O to A' at (-1, 3), B' at (-3, 4) and C' at (-4, 2)\">" +
        "<line class=\"gr\" x1=\"80\" y1=\"14\" x2=\"80\" y2=\"110\"/><line class=\"gr\" x1=\"96\" y1=\"14\" x2=\"96\" y2=\"110\"/><line class=\"gr\" x1=\"112\" y1=\"14\" x2=\"112\" y2=\"110\"/><line class=\"gr\" x1=\"128\" y1=\"14\" x2=\"128\" y2=\"110\"/><line class=\"gr\" x1=\"144\" y1=\"14\" x2=\"144\" y2=\"110\"/><line class=\"gr\" x1=\"176\" y1=\"14\" x2=\"176\" y2=\"110\"/><line class=\"gr\" x1=\"192\" y1=\"14\" x2=\"192\" y2=\"110\"/><line class=\"gr\" x1=\"208\" y1=\"14\" x2=\"208\" y2=\"110\"/><line class=\"gr\" x1=\"224\" y1=\"14\" x2=\"224\" y2=\"110\"/><line class=\"gr\" x1=\"240\" y1=\"14\" x2=\"240\" y2=\"110\"/>" +
        "<line class=\"gr\" x1=\"80\" y1=\"110\" x2=\"240\" y2=\"110\"/><line class=\"gr\" x1=\"80\" y1=\"78\" x2=\"240\" y2=\"78\"/><line class=\"gr\" x1=\"80\" y1=\"62\" x2=\"240\" y2=\"62\"/><line class=\"gr\" x1=\"80\" y1=\"46\" x2=\"240\" y2=\"46\"/><line class=\"gr\" x1=\"80\" y1=\"30\" x2=\"240\" y2=\"30\"/><line class=\"gr\" x1=\"80\" y1=\"14\" x2=\"240\" y2=\"14\"/>" +
        "<line class=\"ax\" x1=\"80\" y1=\"94\" x2=\"240\" y2=\"94\"/><line class=\"ax\" x1=\"160\" y1=\"110\" x2=\"160\" y2=\"14\"/>" +
        "<text class=\"sm\" x=\"96\" y=\"107\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"128\" y=\"107\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"192\" y=\"107\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"224\" y=\"107\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"164\" y=\"66\">2</text><text class=\"sm\" x=\"164\" y=\"34\">4</text><text class=\"sm\" x=\"244\" y=\"98\">x</text><text class=\"sm\" x=\"155\" y=\"24\" text-anchor=\"end\">y</text>" +
        "<polyline class=\"ln\" points=\"160,94 208,78 224,46 192,30\"/>" +
        "<polyline class=\"ln dash\" points=\"160,94 144,46 112,30 96,62\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"94\" r=\"3\"/><circle class=\"dt\" cx=\"208\" cy=\"78\" r=\"3\"/><circle class=\"dt\" cx=\"224\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"192\" cy=\"30\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"144\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"112\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"96\" cy=\"62\" r=\"3\"/>" +
        "<text x=\"216\" y=\"83\">A</text><text x=\"232\" y=\"51\">B</text><text x=\"192\" y=\"23\" text-anchor=\"middle\">C</text>" +
        "<text x=\"152\" y=\"51\">A′</text><text x=\"112\" y=\"23\" text-anchor=\"middle\">B′</text><text x=\"88\" y=\"67\" text-anchor=\"end\">C′</text>" +
        "<text x=\"166\" y=\"110\">O</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A delivery drone takes off from its launch pad <strong>O</strong> at the origin. Route 1 (solid) visits A(3, 1), B(4, 3) and C(2, 4). Route 2 (dashed) visits A′(−1, 3), B′(−3, 4) and C′(−4, 2).</p>",
      claims: [
        {
          id: "which",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which single transformation maps route 1 onto route 2?",
          choices: [
            { letter: "A", text: "Rotation of 90° clockwise about O" },
            { letter: "B", text: "Reflection over the y-axis" },
            { letter: "C", text: "Reflection over the line y = −x" },
            { letter: "D", text: "Rotation of 90° counterclockwise about O" }
          ],
          correct: "D"
        },
        {
          id: "half-b",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A third route is route 1 rotated 180° about O. What is the image of B?",
          choices: [
            { letter: "A", text: "(4, −3)" },
            { letter: "B", text: "(−4, −3)" },
            { letter: "C", text: "(−4, 3)" },
            { letter: "D", text: "(3, −4)" }
          ],
          correct: "B"
        },
        {
          id: "c270",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of C after a rotation of 270° counterclockwise about O?",
          choices: [
            { letter: "A", text: "(4, −2)" },
            { letter: "B", text: "(−4, 2)" },
            { letter: "C", text: "(−2, −4)" },
            { letter: "D", text: "(4, 2)" }
          ],
          correct: "A"
        },
        {
          id: "leg",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "How long is leg A′B′ of route 2?",
          choices: [
            { letter: "A", text: "3 units" },
            { letter: "B", text: "√3 units" },
            { letter: "C", text: "√5 units" },
            { letter: "D", text: "5 units" }
          ],
          correct: "C"
        },
        {
          id: "short",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A short route is route 1 dilated by scale factor 1/2 about O. What is the image of B?",
          choices: [
            { letter: "A", text: "(8, 6)" },
            { letter: "B", text: "(3.5, 2.5)" },
            { letter: "C", text: "(2, 3)" },
            { letter: "D", text: "(2, 1.5)" }
          ],
          correct: "D"
        },
        {
          id: "flip-turn",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Route 1 is reflected over the x-axis and then rotated 90° counterclockwise about O. Where does A end up?",
          choices: [
            { letter: "A", text: "(1, 3)" },
            { letter: "B", text: "(−1, −3)" },
            { letter: "C", text: "(3, −1)" },
            { letter: "D", text: "(−3, 1)" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-sky-ferry-harbor",
      family: "GEO",
      mode: "sky",
      title: "Two Ferries in the Harbor",
      kind: "Transformations · G.RLT.3",
      blurb: "One ferry is the other turned a quarter turn, or flipped twice.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"Coordinate grid with ferry ABCDE: A at (2, 1), B at (5, 1), C at (6, 2), D at (3, 5) and E at (1, 2); and ferry A'B'C'D'E': A' at (-1, 2), B' at (-1, 5), C' at (-2, 6), D' at (-5, 3) and E' at (-2, 1)\">" +
        "<line class=\"gr\" x1=\"69\" y1=\"14\" x2=\"69\" y2=\"126\"/><line class=\"gr\" x1=\"83\" y1=\"14\" x2=\"83\" y2=\"126\"/><line class=\"gr\" x1=\"97\" y1=\"14\" x2=\"97\" y2=\"126\"/><line class=\"gr\" x1=\"111\" y1=\"14\" x2=\"111\" y2=\"126\"/><line class=\"gr\" x1=\"125\" y1=\"14\" x2=\"125\" y2=\"126\"/><line class=\"gr\" x1=\"139\" y1=\"14\" x2=\"139\" y2=\"126\"/><line class=\"gr\" x1=\"167\" y1=\"14\" x2=\"167\" y2=\"126\"/><line class=\"gr\" x1=\"181\" y1=\"14\" x2=\"181\" y2=\"126\"/><line class=\"gr\" x1=\"195\" y1=\"14\" x2=\"195\" y2=\"126\"/><line class=\"gr\" x1=\"209\" y1=\"14\" x2=\"209\" y2=\"126\"/><line class=\"gr\" x1=\"223\" y1=\"14\" x2=\"223\" y2=\"126\"/><line class=\"gr\" x1=\"237\" y1=\"14\" x2=\"237\" y2=\"126\"/><line class=\"gr\" x1=\"251\" y1=\"14\" x2=\"251\" y2=\"126\"/>" +
        "<line class=\"gr\" x1=\"69\" y1=\"126\" x2=\"251\" y2=\"126\"/><line class=\"gr\" x1=\"69\" y1=\"98\" x2=\"251\" y2=\"98\"/><line class=\"gr\" x1=\"69\" y1=\"84\" x2=\"251\" y2=\"84\"/><line class=\"gr\" x1=\"69\" y1=\"70\" x2=\"251\" y2=\"70\"/><line class=\"gr\" x1=\"69\" y1=\"56\" x2=\"251\" y2=\"56\"/><line class=\"gr\" x1=\"69\" y1=\"42\" x2=\"251\" y2=\"42\"/><line class=\"gr\" x1=\"69\" y1=\"28\" x2=\"251\" y2=\"28\"/><line class=\"gr\" x1=\"69\" y1=\"14\" x2=\"251\" y2=\"14\"/>" +
        "<line class=\"ax\" x1=\"69\" y1=\"112\" x2=\"251\" y2=\"112\"/><line class=\"ax\" x1=\"153\" y1=\"126\" x2=\"153\" y2=\"14\"/>" +
        "<text class=\"sm\" x=\"97\" y=\"125\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"209\" y=\"125\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"149\" y=\"60\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"255\" y=\"116\">x</text><text class=\"sm\" x=\"158\" y=\"24\">y</text>" +
        "<polygon class=\"sh\" points=\"181,98 223,98 237,84 195,42 167,84\"/>" +
        "<polygon class=\"sh2\" points=\"139,84 139,42 125,28 83,70 125,98\"/>" +
        "<circle class=\"dt\" cx=\"181\" cy=\"98\" r=\"3\"/><circle class=\"dt\" cx=\"223\" cy=\"98\" r=\"3\"/><circle class=\"dt\" cx=\"237\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"195\" cy=\"42\" r=\"3\"/><circle class=\"dt\" cx=\"167\" cy=\"84\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"139\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"139\" cy=\"42\" r=\"3\"/><circle class=\"dt\" cx=\"125\" cy=\"28\" r=\"3\"/><circle class=\"dt\" cx=\"83\" cy=\"70\" r=\"3\"/><circle class=\"dt\" cx=\"125\" cy=\"98\" r=\"3\"/>" +
        "<text x=\"181\" y=\"115\" text-anchor=\"middle\">A</text><text x=\"223\" y=\"115\" text-anchor=\"middle\">B</text><text x=\"245\" y=\"89\">C</text><text x=\"195\" y=\"35\" text-anchor=\"middle\">D</text><text x=\"159\" y=\"89\" text-anchor=\"end\">E</text>" +
        "<text x=\"139\" y=\"101\" text-anchor=\"middle\">A′</text><text x=\"144\" y=\"37\">B′</text><text x=\"125\" y=\"21\" text-anchor=\"middle\">C′</text><text x=\"75\" y=\"75\" text-anchor=\"end\">D′</text><text x=\"125\" y=\"115\" text-anchor=\"middle\">E′</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A harbor map shows a ferry as <strong>ABCDE</strong>: A(2, 1), B(5, 1), C(6, 2), D(3, 5) and E(1, 2). A second ferry of the same design is <strong>A′B′C′D′E′</strong>: A′(−1, 2), B′(−1, 5), C′(−2, 6), D′(−5, 3) and E′(−2, 1).</p>",
      claims: [
        {
          id: "single",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which single transformation maps ABCDE to A′B′C′D′E′?",
          choices: [
            { letter: "A", text: "Rotation of 90° clockwise about the origin" },
            { letter: "B", text: "Rotation of 90° counterclockwise about the origin" },
            { letter: "C", text: "Reflection over the line y = x" },
            { letter: "D", text: "Reflection over the y-axis" }
          ],
          correct: "B"
        },
        {
          id: "pair",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which pair of reflections, in order, also maps ABCDE to A′B′C′D′E′?",
          choices: [
            { letter: "A", text: "Over the line y = x, then over the x-axis" },
            { letter: "B", text: "Over the y-axis, then over the x-axis" },
            { letter: "C", text: "Over the x-axis, then over the line y = x" },
            { letter: "D", text: "Over the x-axis, then over the line y = −x" }
          ],
          correct: "C"
        },
        {
          id: "orient",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Vertices A, B, C, D, E run counterclockwise. Which is true of A′B′C′D′E′?",
          choices: [
            { letter: "A", text: "It is congruent, and A′, B′, C′, D′, E′ also run counterclockwise." },
            { letter: "B", text: "It is congruent, but A′, B′, C′, D′, E′ run clockwise." },
            { letter: "C", text: "It is smaller, and A′, B′, C′, D′, E′ run counterclockwise." },
            { letter: "D", text: "It is not congruent, because it faces a new way." }
          ],
          correct: "A"
        },
        {
          id: "dock",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The second ferry then sails by the rule (x, y) → (x + 1, y − 4). Where does A′ end up?",
          choices: [
            { letter: "A", text: "(−2, 6)" },
            { letter: "B", text: "(3, −3)" },
            { letter: "C", text: "(−5, 3)" },
            { letter: "D", text: "(0, −2)" }
          ],
          correct: "D"
        },
        {
          id: "third",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A third ferry is the mirror image of ABCDE over the line x = −2. What is the image of D?",
          choices: [
            { letter: "A", text: "(−3, 5)" },
            { letter: "B", text: "(−7, 5)" },
            { letter: "C", text: "(−5, 5)" },
            { letter: "D", text: "(3, −9)" }
          ],
          correct: "B"
        },
        {
          id: "rule",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A fourth ferry is the image of ABCDE under the rule (x, y) → (−y, −x). Which transformation is this?",
          choices: [
            { letter: "A", text: "Reflection over the line y = x" },
            { letter: "B", text: "Rotation of 90° counterclockwise about the origin" },
            { letter: "C", text: "Rotation of 180° about the origin" },
            { letter: "D", text: "Reflection over the line y = −x" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt3-sky-compass-rose",
      family: "GEO",
      mode: "sky",
      title: "The Compass Rose",
      kind: "Transformations · G.RLT.3",
      blurb: "A four-pointed star on a travel map: mirror lines, turns and a mix-up.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Coordinate grid with a four-pointed compass rose centered at the origin O: long points at (0, 4), (4, 0), (0, -4) and (-4, 0), labeled N, E, S and W, and short points at (1, 1), (1, -1), (-1, -1) and (-1, 1)\">" +
        "<line class=\"gr\" x1=\"90\" y1=\"8\" x2=\"90\" y2=\"148\"/><line class=\"gr\" x1=\"104\" y1=\"8\" x2=\"104\" y2=\"148\"/><line class=\"gr\" x1=\"118\" y1=\"8\" x2=\"118\" y2=\"148\"/><line class=\"gr\" x1=\"132\" y1=\"8\" x2=\"132\" y2=\"148\"/><line class=\"gr\" x1=\"146\" y1=\"8\" x2=\"146\" y2=\"148\"/><line class=\"gr\" x1=\"174\" y1=\"8\" x2=\"174\" y2=\"148\"/><line class=\"gr\" x1=\"188\" y1=\"8\" x2=\"188\" y2=\"148\"/><line class=\"gr\" x1=\"202\" y1=\"8\" x2=\"202\" y2=\"148\"/><line class=\"gr\" x1=\"216\" y1=\"8\" x2=\"216\" y2=\"148\"/><line class=\"gr\" x1=\"230\" y1=\"8\" x2=\"230\" y2=\"148\"/>" +
        "<line class=\"gr\" x1=\"90\" y1=\"148\" x2=\"230\" y2=\"148\"/><line class=\"gr\" x1=\"90\" y1=\"134\" x2=\"230\" y2=\"134\"/><line class=\"gr\" x1=\"90\" y1=\"120\" x2=\"230\" y2=\"120\"/><line class=\"gr\" x1=\"90\" y1=\"106\" x2=\"230\" y2=\"106\"/><line class=\"gr\" x1=\"90\" y1=\"92\" x2=\"230\" y2=\"92\"/><line class=\"gr\" x1=\"90\" y1=\"64\" x2=\"230\" y2=\"64\"/><line class=\"gr\" x1=\"90\" y1=\"50\" x2=\"230\" y2=\"50\"/><line class=\"gr\" x1=\"90\" y1=\"36\" x2=\"230\" y2=\"36\"/><line class=\"gr\" x1=\"90\" y1=\"22\" x2=\"230\" y2=\"22\"/><line class=\"gr\" x1=\"90\" y1=\"8\" x2=\"230\" y2=\"8\"/>" +
        "<line class=\"ax\" x1=\"90\" y1=\"78\" x2=\"230\" y2=\"78\"/><line class=\"ax\" x1=\"160\" y1=\"148\" x2=\"160\" y2=\"8\"/>" +
        "<text class=\"sm\" x=\"104\" y=\"91\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"216\" y=\"91\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"234\" y=\"82\">x</text><text class=\"sm\" x=\"155\" y=\"18\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh\" points=\"160,22 174,64 216,78 174,92 160,134 146,92 104,78 146,64\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"216\" cy=\"78\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"134\" r=\"3\"/><circle class=\"dt\" cx=\"104\" cy=\"78\" r=\"3\"/>" +
        "<text class=\"acc\" x=\"168\" y=\"27\">N</text><text class=\"acc\" x=\"221\" y=\"73\">E</text><text class=\"acc\" x=\"152\" y=\"139\" text-anchor=\"end\">S</text><text class=\"acc\" x=\"99\" y=\"73\" text-anchor=\"end\">W</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A travel map has a compass rose centered at the origin <strong>O</strong>. Its long points are at (0, 4), (4, 0), (0, −4) and (−4, 0), marked N, E, S and W. Its short points are at (1, 1), (1, −1), (−1, −1) and (−1, 1).</p>",
      claims: [
        {
          id: "describe",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which describes the symmetry of the compass rose (ignoring the letters)?",
          choices: [
            { letter: "A", text: "4 lines of symmetry; rotational symmetry of order 4" },
            { letter: "B", text: "2 lines of symmetry; rotational symmetry of order 4" },
            { letter: "C", text: "4 lines of symmetry; rotational symmetry of order 8" },
            { letter: "D", text: "8 lines of symmetry; rotational symmetry of order 8" }
          ],
          correct: "A"
        },
        {
          id: "not",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which transformation does NOT map the compass rose onto itself (ignoring the letters)?",
          choices: [
            { letter: "A", text: "Reflection over the line y = −x" },
            { letter: "B", text: "Rotation of 270° about O" },
            { letter: "C", text: "Rotation of 45° about O" },
            { letter: "D", text: "Reflection over the x-axis" }
          ],
          correct: "C"
        },
        {
          id: "compose",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A map maker rotates the rose 90° counterclockwise about O and then reflects it over the line y = x. Which single transformation has the same effect?",
          choices: [
            { letter: "A", text: "Reflection over the y-axis" },
            { letter: "B", text: "Reflection over the x-axis" },
            { letter: "C", text: "Rotation of 90° clockwise about O" },
            { letter: "D", text: "Rotation of 180° about O" }
          ],
          correct: "B"
        },
        {
          id: "where-n",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The rose is rotated 90° clockwise about O, so its outline lands on itself. Where is the letter N now?",
          choices: [
            { letter: "A", text: "At the tip (−4, 0)" },
            { letter: "B", text: "At the tip (0, −4)" },
            { letter: "C", text: "Still at the tip (0, 4)" },
            { letter: "D", text: "At the tip (4, 0)" }
          ],
          correct: "D"
        },
        {
          id: "poster",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "For a poster, the rose is dilated by scale factor 2.5 centered at O. What is the image of the short point (1, −1)?",
          choices: [
            { letter: "A", text: "(3.5, 1.5)" },
            { letter: "B", text: "(2.5, −1)" },
            { letter: "C", text: "(2.5, −2.5)" },
            { letter: "D", text: "(0.4, −0.4)" }
          ],
          correct: "C"
        },
        {
          id: "error",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Ana says, “A 90° turn about O maps the rose onto itself, so the rule (x, y) → (−y, x) leaves every point where it was.” What is her error?",
          choices: [
            { letter: "A", text: "The outline lands on itself, but each point moves to another point." },
            { letter: "B", text: "There is no error; every point stays where it was." },
            { letter: "C", text: "A 90° turn does not map the rose onto itself." },
            { letter: "D", text: "The rule should be (x, y) → (y, x)." }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
