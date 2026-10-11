/* SOL Labyrinth — Geometry game (family GEO), equations of circles: G.PC.4 (Virginia 2023 Geometry SOL), for the
   rocks mode, Rune Rocks (space, science and weather), and the sky mode, Sun Chariot (travel and getting around).
   Original items only. A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in
   css/after-hours.css) and the given facts, then six questions about it. Every numeric answer was computed, and every
   distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-pc4-rocks-petri-dish",
      family: "GEO",
      mode: "rocks",
      title: "The Petri Dish",
      kind: "Equations of circles · G.PC.4",
      blurb: "A round lab dish on graph paper: read its center and radius.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Graph paper with x- and y-axes, numbered from −6 to 4 across and −7 to 3 up. A shaded circle, the petri dish, is drawn on the grid; its center is a gold dot and its edge passes through grid points.\">" +
        "<line class=\"gr\" x1=\"40\" y1=\"146\" x2=\"40\" y2=\"16\"/><line class=\"gr\" x1=\"53\" y1=\"146\" x2=\"53\" y2=\"16\"/><line class=\"gr\" x1=\"66\" y1=\"146\" x2=\"66\" y2=\"16\"/><line class=\"gr\" x1=\"79\" y1=\"146\" x2=\"79\" y2=\"16\"/><line class=\"gr\" x1=\"92\" y1=\"146\" x2=\"92\" y2=\"16\"/>" +
        "<line class=\"gr\" x1=\"105\" y1=\"146\" x2=\"105\" y2=\"16\"/><line class=\"gr\" x1=\"118\" y1=\"146\" x2=\"118\" y2=\"16\"/><line class=\"gr\" x1=\"131\" y1=\"146\" x2=\"131\" y2=\"16\"/><line class=\"gr\" x1=\"144\" y1=\"146\" x2=\"144\" y2=\"16\"/>" +
        "<line class=\"gr\" x1=\"157\" y1=\"146\" x2=\"157\" y2=\"16\"/><line class=\"gr\" x1=\"170\" y1=\"146\" x2=\"170\" y2=\"16\"/><line class=\"gr\" x1=\"40\" y1=\"146\" x2=\"170\" y2=\"146\"/><line class=\"gr\" x1=\"40\" y1=\"133\" x2=\"170\" y2=\"133\"/>" +
        "<line class=\"gr\" x1=\"40\" y1=\"120\" x2=\"170\" y2=\"120\"/><line class=\"gr\" x1=\"40\" y1=\"107\" x2=\"170\" y2=\"107\"/><line class=\"gr\" x1=\"40\" y1=\"94\" x2=\"170\" y2=\"94\"/><line class=\"gr\" x1=\"40\" y1=\"81\" x2=\"170\" y2=\"81\"/><line class=\"gr\" x1=\"40\" y1=\"68\" x2=\"170\" y2=\"68\"/>" +
        "<line class=\"gr\" x1=\"40\" y1=\"55\" x2=\"170\" y2=\"55\"/><line class=\"gr\" x1=\"40\" y1=\"42\" x2=\"170\" y2=\"42\"/><line class=\"gr\" x1=\"40\" y1=\"29\" x2=\"170\" y2=\"29\"/><line class=\"gr\" x1=\"40\" y1=\"16\" x2=\"170\" y2=\"16\"/><line class=\"ax\" x1=\"40\" y1=\"55\" x2=\"170\" y2=\"55\"/>" +
        "<line class=\"ax\" x1=\"118\" y1=\"146\" x2=\"118\" y2=\"16\"/><text class=\"sm\" x=\"40\" y=\"160\" text-anchor=\"middle\">−6</text><text class=\"sm\" x=\"66\" y=\"160\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"92\" y=\"160\" text-anchor=\"middle\">−2</text>" +
        "<text class=\"sm\" x=\"118\" y=\"160\" text-anchor=\"middle\">0</text><text class=\"sm\" x=\"144\" y=\"160\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"170\" y=\"160\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"35\" y=\"137\" text-anchor=\"end\">−6</text>" +
        "<text class=\"sm\" x=\"35\" y=\"111\" text-anchor=\"end\">−4</text><text class=\"sm\" x=\"35\" y=\"85\" text-anchor=\"end\">−2</text><text class=\"sm\" x=\"35\" y=\"59\" text-anchor=\"end\">0</text><text class=\"sm\" x=\"35\" y=\"33\" text-anchor=\"end\">2</text>" +
        "<circle class=\"sh2\" cx=\"105\" cy=\"81\" r=\"52\"/><circle class=\"dta\" cx=\"105\" cy=\"81\" r=\"3\"/><text class=\"sm\" x=\"186\" y=\"40\">Petri dish on</text><text class=\"sm\" x=\"186\" y=\"55\">graph paper</text><text class=\"sm\" x=\"186\" y=\"78\">1 square = 1 cm</text>" +
        "<text class=\"sm\" x=\"186\" y=\"101\">gold dot: center</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A round petri dish sits on graph paper with x- and y-axes. Each square is 1 cm. The shaded circle is the dish, and the gold dot is its center.</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the coordinates of the center of the petri dish?",
          choices: [
            { letter: "A", text: "(1, 2)" },
            { letter: "B", text: "(−1, −2)" },
            { letter: "C", text: "(−2, −1)" },
            { letter: "D", text: "(3, −2)" }
          ],
          correct: "B"
        },
        {
          id: "radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What is the radius of the petri dish?",
          choices: [
            { letter: "A", text: "4 cm" },
            { letter: "B", text: "8 cm" },
            { letter: "C", text: "16 cm" },
            { letter: "D", text: "2 cm" }
          ],
          correct: "A"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the petri dish?",
          choices: [
            { letter: "A", text: "(x − 1)² + (y − 2)² = 16" },
            { letter: "B", text: "(x + 1)² + (y + 2)² = 4" },
            { letter: "C", text: "(x + 1)² + (y + 2)² = 64" },
            { letter: "D", text: "(x + 1)² + (y + 2)² = 16" }
          ],
          correct: "D"
        },
        {
          id: "outside",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Bacteria colonies grow at the four points below. Which colony is outside the dish?",
          choices: [
            { letter: "A", text: "(1, 0)" },
            { letter: "B", text: "(−5, 1)" },
            { letter: "C", text: "(3, −2)" },
            { letter: "D", text: "(−2, −5)" }
          ],
          correct: "B"
        },
        {
          id: "distance",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives the distance from the center of the dish to a colony at (1, 0)?",
          choices: [
            { letter: "A", text: "(1 + 1)² + (0 + 2)²" },
            { letter: "B", text: "√((1 − 1)² + (0 − 2)²)" },
            { letter: "C", text: "√((1 + 1)² + (0 + 2)²)" },
            { letter: "D", text: "√((1 + 1) + (0 + 2))" }
          ],
          correct: "C"
        },
        {
          id: "bigger",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A larger dish has the edge x² + (y − 3)² = 25. What are its center and radius?",
          choices: [
            { letter: "A", text: "(0, 3); r = 5" },
            { letter: "B", text: "(0, −3); r = 5" },
            { letter: "C", text: "(0, 3); r = 25" },
            { letter: "D", text: "(3, 0); r = 5" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc4-rocks-planet-orbits",
      family: "GEO",
      mode: "rocks",
      title: "Two Planet Orbits",
      kind: "Equations of circles · G.PC.4",
      blurb: "A star, two circular orbits and the equations that describe them.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A gold star S at the center of two circles with the same center: a solid inner orbit with planet A on it, and a larger dashed outer orbit with planet B on it.\">" +
        "<circle class=\"ln dash\" cx=\"110\" cy=\"75\" r=\"70\"/><circle class=\"ln\" cx=\"110\" cy=\"75\" r=\"28\"/><circle class=\"dta\" cx=\"110\" cy=\"75\" r=\"3\"/><circle class=\"dta\" cx=\"110\" cy=\"75\" r=\"5.5\"/><circle class=\"dt\" cx=\"138\" cy=\"75\" r=\"4\"/>" +
        "<circle class=\"dt\" cx=\"54\" cy=\"33\" r=\"4.5\"/><text x=\"108\" y=\"96\" text-anchor=\"middle\">S</text><text x=\"146\" y=\"80\">A</text><text x=\"47\" y=\"28\" text-anchor=\"end\">B</text><text class=\"sm\" x=\"164\" y=\"143\">outer orbit</text>" +
        "<text class=\"sm\" x=\"204\" y=\"40\">Star system model</text><text class=\"sm\" x=\"204\" y=\"58\">S: star</text><text class=\"sm\" x=\"204\" y=\"74\">A, B: planets</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">In a model of a star system, the outer orbit is the circle (x + 3)² + (y + 2)² = 25. The inner orbit has the same center, the star <strong>S</strong>, and a radius of 2 units. Planet <strong>A</strong>(−1, −2) is on the inner orbit. Planet <strong>B</strong>(−7, 1) is on the outer orbit.</p>",
      claims: [
        {
          id: "star",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the coordinates of the star S?",
          choices: [
            { letter: "A", text: "(3, 2)" },
            { letter: "B", text: "(−2, −3)" },
            { letter: "C", text: "(−3, −2)" },
            { letter: "D", text: "(2, 3)" }
          ],
          correct: "C"
        },
        {
          id: "outer-radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What is the radius of the outer orbit?",
          choices: [
            { letter: "A", text: "25 units" },
            { letter: "B", text: "12.5 units" },
            { letter: "C", text: "10 units" },
            { letter: "D", text: "5 units" }
          ],
          correct: "D"
        },
        {
          id: "inner",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the inner orbit?",
          choices: [
            { letter: "A", text: "(x + 3)² + (y + 2)² = 4" },
            { letter: "B", text: "(x + 3)² + (y + 2)² = 2" },
            { letter: "C", text: "(x − 3)² + (y − 2)² = 4" },
            { letter: "D", text: "(x + 3)² + (y + 2)² = 16" }
          ],
          correct: "A"
        },
        {
          id: "comet",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A comet passes the four points below. Which point is on the outer orbit?",
          choices: [
            { letter: "A", text: "(2, 3)" },
            { letter: "B", text: "(−2, 2)" },
            { letter: "C", text: "(0, 2)" },
            { letter: "D", text: "(−3, 23)" }
          ],
          correct: "C"
        },
        {
          id: "pythagoras",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which equation uses the Pythagorean theorem to show that planet B is on the outer orbit?",
          choices: [
            { letter: "A", text: "10² + 1² = 5²" },
            { letter: "B", text: "4² + 3² = 5²" },
            { letter: "C", text: "4 + 3 = 5" },
            { letter: "D", text: "7² + 1² = 5²" }
          ],
          correct: "B"
        },
        {
          id: "moon",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A moon circles planet B at a distance of 2 units. Which equation describes the moon's path?",
          choices: [
            { letter: "A", text: "(x + 7)² + (y − 1)² = 2" },
            { letter: "B", text: "(x − 7)² + (y + 1)² = 4" },
            { letter: "C", text: "(x + 3)² + (y + 2)² = 4" },
            { letter: "D", text: "(x + 7)² + (y − 1)² = 4" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc4-rocks-crater-map",
      family: "GEO",
      mode: "rocks",
      title: "The Crater Map",
      kind: "Equations of circles · G.PC.4",
      blurb: "A segment across a moon crater gives its center and radius.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A coordinate grid in kilometers, numbered from −6 to 8 on both axes. A shaded circle is a crater. Gold segment AB goes straight across the crater through its center, with A at the upper left and B at the lower right, both on the rim.\">" +
        "<line class=\"gr\" x1=\"30\" y1=\"150\" x2=\"30\" y2=\"10\"/><line class=\"gr\" x1=\"40\" y1=\"150\" x2=\"40\" y2=\"10\"/><line class=\"gr\" x1=\"50\" y1=\"150\" x2=\"50\" y2=\"10\"/><line class=\"gr\" x1=\"60\" y1=\"150\" x2=\"60\" y2=\"10\"/><line class=\"gr\" x1=\"70\" y1=\"150\" x2=\"70\" y2=\"10\"/>" +
        "<line class=\"gr\" x1=\"80\" y1=\"150\" x2=\"80\" y2=\"10\"/><line class=\"gr\" x1=\"90\" y1=\"150\" x2=\"90\" y2=\"10\"/><line class=\"gr\" x1=\"100\" y1=\"150\" x2=\"100\" y2=\"10\"/><line class=\"gr\" x1=\"110\" y1=\"150\" x2=\"110\" y2=\"10\"/>" +
        "<line class=\"gr\" x1=\"120\" y1=\"150\" x2=\"120\" y2=\"10\"/><line class=\"gr\" x1=\"130\" y1=\"150\" x2=\"130\" y2=\"10\"/><line class=\"gr\" x1=\"140\" y1=\"150\" x2=\"140\" y2=\"10\"/><line class=\"gr\" x1=\"150\" y1=\"150\" x2=\"150\" y2=\"10\"/>" +
        "<line class=\"gr\" x1=\"160\" y1=\"150\" x2=\"160\" y2=\"10\"/><line class=\"gr\" x1=\"170\" y1=\"150\" x2=\"170\" y2=\"10\"/><line class=\"gr\" x1=\"30\" y1=\"150\" x2=\"170\" y2=\"150\"/><line class=\"gr\" x1=\"30\" y1=\"140\" x2=\"170\" y2=\"140\"/>" +
        "<line class=\"gr\" x1=\"30\" y1=\"130\" x2=\"170\" y2=\"130\"/><line class=\"gr\" x1=\"30\" y1=\"120\" x2=\"170\" y2=\"120\"/><line class=\"gr\" x1=\"30\" y1=\"110\" x2=\"170\" y2=\"110\"/><line class=\"gr\" x1=\"30\" y1=\"100\" x2=\"170\" y2=\"100\"/>" +
        "<line class=\"gr\" x1=\"30\" y1=\"90\" x2=\"170\" y2=\"90\"/><line class=\"gr\" x1=\"30\" y1=\"80\" x2=\"170\" y2=\"80\"/><line class=\"gr\" x1=\"30\" y1=\"70\" x2=\"170\" y2=\"70\"/><line class=\"gr\" x1=\"30\" y1=\"60\" x2=\"170\" y2=\"60\"/><line class=\"gr\" x1=\"30\" y1=\"50\" x2=\"170\" y2=\"50\"/>" +
        "<line class=\"gr\" x1=\"30\" y1=\"40\" x2=\"170\" y2=\"40\"/><line class=\"gr\" x1=\"30\" y1=\"30\" x2=\"170\" y2=\"30\"/><line class=\"gr\" x1=\"30\" y1=\"20\" x2=\"170\" y2=\"20\"/><line class=\"gr\" x1=\"30\" y1=\"10\" x2=\"170\" y2=\"10\"/><line class=\"ax\" x1=\"30\" y1=\"90\" x2=\"170\" y2=\"90\"/>" +
        "<line class=\"ax\" x1=\"90\" y1=\"150\" x2=\"90\" y2=\"10\"/><text class=\"sm\" x=\"30\" y=\"163\" text-anchor=\"middle\">−6</text><text class=\"sm\" x=\"50\" y=\"163\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"70\" y=\"163\" text-anchor=\"middle\">−2</text>" +
        "<text class=\"sm\" x=\"90\" y=\"163\" text-anchor=\"middle\">0</text><text class=\"sm\" x=\"110\" y=\"163\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"130\" y=\"163\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"150\" y=\"163\" text-anchor=\"middle\">6</text>" +
        "<text class=\"sm\" x=\"170\" y=\"163\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"25\" y=\"134\" text-anchor=\"end\">−4</text><text class=\"sm\" x=\"25\" y=\"114\" text-anchor=\"end\">−2</text><text class=\"sm\" x=\"25\" y=\"94\" text-anchor=\"end\">0</text>" +
        "<text class=\"sm\" x=\"25\" y=\"74\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"25\" y=\"54\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"25\" y=\"34\" text-anchor=\"end\">6</text><text class=\"sm\" x=\"25\" y=\"14\" text-anchor=\"end\">8</text>" +
        "<circle class=\"sh\" cx=\"100\" cy=\"80\" r=\"64\"/><line class=\"ac\" x1=\"60\" y1=\"30\" x2=\"140\" y2=\"130\"/><circle class=\"dt\" cx=\"60\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"140\" cy=\"130\" r=\"3\"/><text x=\"53\" y=\"25\" text-anchor=\"end\">A</text><text x=\"147\" y=\"145\">B</text>" +
        "<text class=\"sm\" x=\"186\" y=\"30\">Moon crater map</text><text class=\"sm\" x=\"186\" y=\"48\">1 unit = 1 km</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a map of a moon crater (units in kilometers), segment <strong>AB</strong> runs straight across the crater through its center, from <strong>A</strong>(−3, 6) to <strong>B</strong>(5, −4). Both ends are on the rim.</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "What are the coordinates of the center of the crater?",
          choices: [
            { letter: "A", text: "(4, −5)" },
            { letter: "B", text: "(2, 2)" },
            { letter: "C", text: "(1, 1)" },
            { letter: "D", text: "(8, −10)" }
          ],
          correct: "C"
        },
        {
          id: "radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What is the radius of the crater, in simplest radical form?",
          choices: [
            { letter: "A", text: "√41 km" },
            { letter: "B", text: "2√41 km" },
            { letter: "C", text: "41 km" },
            { letter: "D", text: "9 km" }
          ],
          correct: "A"
        },
        {
          id: "rim",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the rim of the crater?",
          choices: [
            { letter: "A", text: "(x + 1)² + (y + 1)² = 41" },
            { letter: "B", text: "(x − 1)² + (y − 1)² = 41" },
            { letter: "C", text: "(x − 1)² + (y − 1)² = 164" },
            { letter: "D", text: "(x + 3)² + (y − 6)² = 41" }
          ],
          correct: "B"
        },
        {
          id: "boulder",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A rover's map marks four boulders. Which boulder sits exactly on the rim?",
          choices: [
            { letter: "A", text: "(6, 3)" },
            { letter: "B", text: "(−5, 1)" },
            { letter: "C", text: "(−4, −3)" },
            { letter: "D", text: "(5, −5)" }
          ],
          correct: "C"
        },
        {
          id: "lena",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Lena finds the radius with the distance formula, from the center of the crater to B. Which line of work is correct?",
          choices: [
            { letter: "A", text: "√((5 − 1)² + (−4 − 1)²) = 9" },
            { letter: "B", text: "√((5 + 1)² + (−4 + 1)²) = √45" },
            { letter: "C", text: "√((5 + 3)² + (−4 − 6)²) = √164" },
            { letter: "D", text: "√((5 − 1)² + (−4 − 1)²) = √41" }
          ],
          correct: "D"
        },
        {
          id: "small",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A small crater has its center at A. Its rim passes through (−1, 7). Which equation describes the small crater's rim?",
          choices: [
            { letter: "A", text: "(x + 3)² + (y − 6)² = 5" },
            { letter: "B", text: "(x − 3)² + (y + 6)² = 5" },
            { letter: "C", text: "(x + 3)² + (y − 6)² = 9" },
            { letter: "D", text: "(x + 3)² + (y − 6)² = √5" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc4-rocks-telescope",
      family: "GEO",
      mode: "rocks",
      title: "The Telescope View",
      kind: "Equations of circles · G.PC.4",
      blurb: "A right triangle inside a telescope's round field of view.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A shaded circle is a telescope's field of view, with dashed crosshairs through its center C. Right triangle CQE: leg CQ runs right from C, leg QE runs up from Q with a right angle at Q, and the gold side CE reaches star E on the edge of the circle.\">" +
        "<circle class=\"sh2\" cx=\"110\" cy=\"80\" r=\"70.3\"/><line class=\"thin dash\" x1=\"39.7\" y1=\"80\" x2=\"180.3\" y2=\"80\"/><line class=\"thin dash\" x1=\"110\" y1=\"9.7\" x2=\"110\" y2=\"150.3\"/><line class=\"ln\" x1=\"110\" y1=\"80\" x2=\"155\" y2=\"80\"/>" +
        "<line class=\"ln\" x1=\"155\" y1=\"80\" x2=\"155\" y2=\"26\"/><line class=\"ac\" x1=\"110\" y1=\"80\" x2=\"155\" y2=\"26\"/><path class=\"thin\" d=\"M147 80 V72 H155\"/><circle class=\"dta\" cx=\"110\" cy=\"80\" r=\"3\"/><circle class=\"dt\" cx=\"155\" cy=\"80\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"155\" cy=\"26\" r=\"4\"/><text x=\"104\" y=\"74\" text-anchor=\"end\">C</text><text x=\"161\" y=\"96\">Q</text><text x=\"163\" y=\"28\">E</text><text class=\"sm\" x=\"200\" y=\"128\">eyepiece view</text><text class=\"sm\" x=\"200\" y=\"144\">on a star chart</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A telescope's round field of view is drawn on a star chart grid. Its center is <strong>C</strong>(−2, 1). The star <strong>E</strong>(3, 7) is on the edge of the field. Point <strong>Q</strong>(3, 1) makes right triangle <strong>CQE</strong>.</p>",
      claims: [
        {
          id: "leg",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives the length of leg CQ?",
          choices: [
            { letter: "A", text: "3 − 2 = 1" },
            { letter: "B", text: "7 − 1 = 6" },
            { letter: "C", text: "−2 − 3 = −5" },
            { letter: "D", text: "3 − (−2) = 5" }
          ],
          correct: "D"
        },
        {
          id: "pythagoras",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which equation does the Pythagorean theorem give for triangle CQE?",
          choices: [
            { letter: "A", text: "5 + 6 = CE" },
            { letter: "B", text: "5² + 6² = CE²" },
            { letter: "C", text: "5² + CE² = 6²" },
            { letter: "D", text: "1² + 6² = CE²" }
          ],
          correct: "B"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the field of view?",
          choices: [
            { letter: "A", text: "(x + 2)² + (y − 1)² = 61" },
            { letter: "B", text: "(x − 2)² + (y + 1)² = 61" },
            { letter: "C", text: "(x + 2)² + (y − 1)² = 11" },
            { letter: "D", text: "(x + 2)² + (y − 1)² = √61" }
          ],
          correct: "A"
        },
        {
          id: "why",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Why is the right side of the field's equation 61 and not √61?",
          choices: [
            { letter: "A", text: "The radius is 5² + 6² = 61 units." },
            { letter: "B", text: "61 is the diameter of the field." },
            { letter: "C", text: "√61 is rounded to a whole number." },
            { letter: "D", text: "It uses r², and r² = 5² + 6² = 61." }
          ],
          correct: "D"
        },
        {
          id: "radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "To the nearest tenth, what is the radius of the field of view in grid units?",
          choices: [
            { letter: "A", text: "11.0 units" },
            { letter: "B", text: "30.5 units" },
            { letter: "C", text: "7.8 units" },
            { letter: "D", text: "15.6 units" }
          ],
          correct: "C"
        },
        {
          id: "star",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which star is inside the field of view?",
          choices: [
            { letter: "A", text: "(−8, 6)" },
            { letter: "B", text: "(4, 4)" },
            { letter: "C", text: "(5, −3)" },
            { letter: "D", text: "(1, −7)" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc4-rocks-storm-track",
      family: "GEO",
      mode: "rocks",
      title: "The Storm Track",
      kind: "Equations of circles · G.PC.4",
      blurb: "A storm circle at noon and the same storm six hours later.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 158\" role=\"img\" aria-label=\"Weather map with x- and y-axes and no tick marks. A dashed circle labeled noon is in the lower left. An arrow leads from its center to the center of a gold circle of the same size labeled 6 p.m., up and to the right.\">" +
        "<line class=\"ax\" x1=\"26\" y1=\"78\" x2=\"191\" y2=\"78\"/><line class=\"ax\" x1=\"125\" y1=\"12\" x2=\"125\" y2=\"144\"/><text class=\"sm\" x=\"195\" y=\"82\">x</text><text class=\"sm\" x=\"130\" y=\"16\">y</text><circle class=\"ln dash\" cx=\"70\" cy=\"100\" r=\"33\"/>" +
        "<circle class=\"ac\" cx=\"147\" cy=\"56\" r=\"33\"/><circle class=\"dt\" cx=\"70\" cy=\"100\" r=\"3\"/><circle class=\"dta\" cx=\"147\" cy=\"56\" r=\"3\"/><line class=\"thin dash\" x1=\"75.2\" y1=\"97\" x2=\"141.8\" y2=\"59\"/><path class=\"thin\" d=\"M137.3 65.6 L141.8 59 L133.8 59.5\"/>" +
        "<text class=\"sm\" x=\"70\" y=\"147\" text-anchor=\"middle\">noon</text><text class=\"sm\" x=\"184\" y=\"29\">6 p.m.</text><text class=\"sm\" x=\"312\" y=\"120\" text-anchor=\"end\">weather map</text><text class=\"sm\" x=\"312\" y=\"136\" text-anchor=\"end\">1 unit = 10 mi</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a weather map (1 unit = 10 miles), the dashed circle shows a storm at noon: (x + 5)² + (y + 2)² = 9. By 6 p.m. the storm has moved 7 units right and 4 units up without changing size (the gold circle).</p>",
      claims: [
        {
          id: "noon-center",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Where was the center of the storm at noon?",
          choices: [
            { letter: "A", text: "(5, 2)" },
            { letter: "B", text: "(−2, −5)" },
            { letter: "C", text: "(5, −2)" },
            { letter: "D", text: "(−5, −2)" }
          ],
          correct: "D"
        },
        {
          id: "reach",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "How far does the storm reach from its center, in miles?",
          choices: [
            { letter: "A", text: "30 mi" },
            { letter: "B", text: "90 mi" },
            { letter: "C", text: "60 mi" },
            { letter: "D", text: "3 mi" }
          ],
          correct: "A"
        },
        {
          id: "six-pm",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the storm at 6 p.m.?",
          choices: [
            { letter: "A", text: "(x + 12)² + (y + 6)² = 9" },
            { letter: "B", text: "(x − 7)² + (y − 4)² = 9" },
            { letter: "C", text: "(x − 2)² + (y − 2)² = 9" },
            { letter: "D", text: "(x + 2)² + (y + 2)² = 9" }
          ],
          correct: "C"
        },
        {
          id: "moved",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives how far the center of the storm moved, in grid units?",
          choices: [
            { letter: "A", text: "√(7² + 4²)" },
            { letter: "B", text: "7 + 4" },
            { letter: "C", text: "7² + 4²" },
            { letter: "D", text: "√(7² − 4²)" }
          ],
          correct: "A"
        },
        {
          id: "station",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Four weather stations are at the points below. At 6 p.m., which station is inside the storm?",
          choices: [
            { letter: "A", text: "(−4, −1)" },
            { letter: "B", text: "(0, 1)" },
            { letter: "C", text: "(5, 2)" },
            { letter: "D", text: "(−2, 0)" }
          ],
          correct: "B"
        },
        {
          id: "nine-pm",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "At 9 p.m. the storm has the same center as at 6 p.m., but it has grown. Its edge now passes through (6, −1). Which equation describes the storm at 9 p.m.?",
          choices: [
            { letter: "A", text: "(x − 2)² + (y − 2)² = 5" },
            { letter: "B", text: "(x − 6)² + (y + 1)² = 25" },
            { letter: "C", text: "(x − 2)² + (y − 2)² = 49" },
            { letter: "D", text: "(x − 2)² + (y − 2)² = 25" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc4-rocks-weather-balloon",
      family: "GEO",
      mode: "rocks",
      title: "The Weather Balloon",
      kind: "Equations of circles · G.PC.4",
      blurb: "Complete the square to find where a balloon's radio can be heard.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Map with x- and y-axes and no tick marks. A shaded circle shows where a weather balloon's radio can be heard; its center, the launch site L, is a gold dot below and to the left of the origin, with a small balloon drawn beside it.\">" +
        "<line class=\"ax\" x1=\"10\" y1=\"36\" x2=\"170\" y2=\"36\"/><line class=\"ax\" x1=\"120\" y1=\"6\" x2=\"120\" y2=\"156\"/><text class=\"sm\" x=\"174\" y=\"40\">x</text><text class=\"sm\" x=\"125\" y=\"14\">y</text><circle class=\"sh2\" cx=\"90\" cy=\"76\" r=\"63.2\"/>" +
        "<circle class=\"dta\" cx=\"90\" cy=\"76\" r=\"3\"/><text x=\"82\" y=\"94\" text-anchor=\"middle\">L</text><line class=\"thin\" x1=\"90\" y1=\"72\" x2=\"100\" y2=\"54\"/><circle class=\"ln\" cx=\"103\" cy=\"46\" r=\"8\"/><text class=\"sm\" x=\"186\" y=\"70\">radio range of a</text>" +
        "<text class=\"sm\" x=\"186\" y=\"86\">weather balloon</text><text class=\"sm\" x=\"186\" y=\"110\">units in km</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A weather balloon's radio can be heard inside a circle on a map (units in km). The edge of that circle is x² + y² + 6x + 8y − 15 = 0. The balloon was launched from the center of the circle, <strong>L</strong>.</p>",
      claims: [
        {
          id: "complete",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which line correctly completes the square for the edge of the circle?",
          choices: [
            { letter: "A", text: "(x² + 6x + 9) + (y² + 8y + 16) = 15" },
            { letter: "B", text: "(x² + 6x + 9) + (y² + 8y + 16) = 15 + 9 + 16" },
            { letter: "C", text: "(x² + 6x + 3) + (y² + 8y + 4) = 15 + 3 + 4" },
            { letter: "D", text: "(x² + 6x + 9) + (y² + 8y + 16) = −15 + 9 + 16" }
          ],
          correct: "B"
        },
        {
          id: "center-radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the center and radius of the circle where the radio can be heard?",
          choices: [
            { letter: "A", text: "(3, 4); r = 2√10" },
            { letter: "B", text: "(−3, −4); r = 40" },
            { letter: "C", text: "(−3, −4); r = 2√10" },
            { letter: "D", text: "(−3, −4); r = √10" }
          ],
          correct: "C"
        },
        {
          id: "ana",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Ana says the launch site L is at (3, 4) because the equation has +6x and +8y. Which statement corrects her?",
          choices: [
            { letter: "A", text: "L is at (6, 8), the coefficients of x and y." },
            { letter: "B", text: "L is at (−6, −8), the opposites of 6 and 8." },
            { letter: "C", text: "L is at (9, 16), the numbers added to each side." },
            { letter: "D", text: "(x + 3)² = (x − (−3))², so L is at (−3, −4)." }
          ],
          correct: "D"
        },
        {
          id: "station",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Where is a ground station at (3, −2) compared with the circle? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Inside: its distance squared is 36, less than r²" },
            { letter: "B", text: "On: its distance squared is 40, equal to r²" },
            { letter: "C", text: "Outside: its distance squared is 40, and r² is 2√10" },
            { letter: "D", text: "Outside: its distance squared is 40, and r² is 10" }
          ],
          correct: "B"
        },
        {
          id: "carlos",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Carlos says (x + 3)² + (y + 4)² = 40 cannot be a circle because it is not x² + y² = r². Which reply is correct?",
          choices: [
            { letter: "A", text: "Every point on it is √40 km from (−3, −4), so it is a circle." },
            { letter: "B", text: "He is right: only x² + y² = r² makes a circle." },
            { letter: "C", text: "It is a circle, but its radius is 40 km." },
            { letter: "D", text: "It is a circle only if 40 is a perfect square." }
          ],
          correct: "A"
        },
        {
          id: "second",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A second balloon is launched from L. The edge of its radio range passes through (2, 1). Which equation describes that edge?",
          choices: [
            { letter: "A", text: "(x − 3)² + (y − 4)² = 50" },
            { letter: "B", text: "(x − 2)² + (y − 1)² = 50" },
            { letter: "C", text: "(x + 3)² + (y + 4)² = 50" },
            { letter: "D", text: "(x + 3)² + (y + 4)² = 10" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc4-rocks-satellite",
      family: "GEO",
      mode: "rocks",
      title: "Satellite Coverage",
      kind: "Equations of circles · G.PC.4",
      blurb: "The smallest coverage circle that reaches three towns, and a drift.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"Map with a gold point G below a satellite and three towns A, B and C. Dashed segments join G to each town. A gold dashed circle centered at G passes through town A; towns B and C are inside it.\">" +
        "<circle class=\"ac dash\" cx=\"98\" cy=\"79\" r=\"65.5\"/><line class=\"thin dash\" x1=\"98\" y1=\"79\" x2=\"35\" y2=\"61\"/><line class=\"thin dash\" x1=\"98\" y1=\"79\" x2=\"134\" y2=\"43\"/><line class=\"thin dash\" x1=\"98\" y1=\"79\" x2=\"89\" y2=\"142\"/>" +
        "<circle class=\"dta\" cx=\"98\" cy=\"79\" r=\"3\"/><circle class=\"dt\" cx=\"35\" cy=\"61\" r=\"3\"/><circle class=\"dt\" cx=\"134\" cy=\"43\" r=\"3\"/><circle class=\"dt\" cx=\"89\" cy=\"142\" r=\"3\"/><text x=\"106\" y=\"95\">G</text><text x=\"28\" y=\"55\" text-anchor=\"end\">A</text>" +
        "<text x=\"127\" y=\"38\" text-anchor=\"end\">B</text><text x=\"97\" y=\"136\">C</text><rect class=\"ln\" x=\"236\" y=\"18\" width=\"16\" height=\"12\"/><line class=\"ln\" x1=\"222\" y1=\"24\" x2=\"236\" y2=\"24\"/><line class=\"ln\" x1=\"252\" y1=\"24\" x2=\"266\" y2=\"24\"/>" +
        "<rect class=\"sh2\" x=\"210\" y=\"19\" width=\"12\" height=\"10\"/><rect class=\"sh2\" x=\"266\" y=\"19\" width=\"12\" height=\"10\"/><text class=\"sm\" x=\"244\" y=\"50\" text-anchor=\"middle\">satellite above G</text>" +
        "<text class=\"sm\" x=\"244\" y=\"136\" text-anchor=\"middle\">1 unit = 100 km</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A weather satellite covers a circle centered at <strong>G</strong>(2, −1), the point on the map right below it (1 unit = 100 km). The towns are <strong>A</strong>(−5, 1), <strong>B</strong>(6, 3) and <strong>C</strong>(1, −8). The dashed circle is the smallest circle centered at G that reaches all three towns.</p>",
      claims: [
        {
          id: "farthest",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "How far from G is the farthest town, in map units?",
          choices: [
            { letter: "A", text: "9 units" },
            { letter: "B", text: "√53 units" },
            { letter: "C", text: "53 units" },
            { letter: "D", text: "3√10 units" }
          ],
          correct: "B"
        },
        {
          id: "dashed",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the dashed circle?",
          choices: [
            { letter: "A", text: "(x − 2)² + (y + 1)² = 32" },
            { letter: "B", text: "(x + 2)² + (y − 1)² = 53" },
            { letter: "C", text: "(x − 2)² + (y + 1)² = √53" },
            { letter: "D", text: "(x − 2)² + (y + 1)² = 53" }
          ],
          correct: "D"
        },
        {
          id: "drift",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "After a drift, the edge of the coverage is x² + y² − 6x + 8y − 11 = 0. What are its center and radius?",
          choices: [
            { letter: "A", text: "(3, −4); r = 6" },
            { letter: "B", text: "(−3, 4); r = 6" },
            { letter: "C", text: "(3, −4); r = √11" },
            { letter: "D", text: "(3, −4); r = 36" }
          ],
          correct: "A"
        },
        {
          id: "towns",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "After the drift, the coverage is the circle x² + y² − 6x + 8y − 11 = 0 and its inside. Which towns does it reach?",
          choices: [
            { letter: "A", text: "A only" },
            { letter: "B", text: "C only" },
            { letter: "C", text: "None of them" },
            { letter: "D", text: "A, B and C" }
          ],
          correct: "B"
        },
        {
          id: "rule",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "An engineer's rule for a covered point (x, y) is √((x − 2)² + (y + 1)²) ≤ √53. Which rule says the same thing without square roots?",
          choices: [
            { letter: "A", text: "(x − 2) + (y + 1) ≤ √53" },
            { letter: "B", text: "(x − 2)² + (y + 1)² ≤ √53" },
            { letter: "C", text: "(x − 2)² + (y + 1)² ≤ 53" },
            { letter: "D", text: "(x − 2)² + (y + 1)² ≥ 53" }
          ],
          correct: "C"
        },
        {
          id: "second",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A second satellite is right above town B. The edge of its coverage passes through G. Which equation describes that edge?",
          choices: [
            { letter: "A", text: "(x − 6)² + (y − 3)² = 32" },
            { letter: "B", text: "(x + 6)² + (y + 3)² = 32" },
            { letter: "C", text: "(x − 2)² + (y + 1)² = 32" },
            { letter: "D", text: "(x − 6)² + (y − 3)² = 8" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc4-sky-radio-tower",
      family: "GEO",
      mode: "sky",
      title: "The Radio Tower",
      kind: "Equations of circles · G.PC.4",
      blurb: "A tower's signal range on a road map, written as a circle.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Road map: Highway 1 runs across and Route 9 runs down; they meet at the town of Ash, A. A radio tower T stands below and to the right of Ash. A gold dashed circle around T shows the edge of its range.\">" +
        "<line class=\"ln\" x1=\"11.4\" y1=\"40\" x2=\"177.5\" y2=\"40\"/><line class=\"ln\" x1=\"40\" y1=\"4.8\" x2=\"40\" y2=\"145.6\"/><text class=\"sm\" x=\"177.5\" y=\"34\" text-anchor=\"end\">Hwy 1</text><text class=\"sm\" x=\"34\" y=\"147\" text-anchor=\"end\">Rt 9</text>" +
        "<circle class=\"ac dash\" cx=\"84\" cy=\"73\" r=\"66\"/><path class=\"ln\" d=\"M78 86 L84 73 L90 86\"/><circle class=\"dta\" cx=\"84\" cy=\"73\" r=\"3\"/><path class=\"thin\" d=\"M77 67 A9 9 0 0 1 91 67\"/><text x=\"94\" y=\"78\">T</text><circle class=\"dt\" cx=\"40\" cy=\"40\" r=\"3\"/>" +
        "<text x=\"46\" y=\"55\">A</text><text class=\"sm\" x=\"312\" y=\"100\" text-anchor=\"end\">road map</text><text class=\"sm\" x=\"312\" y=\"116\" text-anchor=\"end\">1 unit = 4 mi</text><text class=\"sm\" x=\"312\" y=\"132\" text-anchor=\"end\">A: Ash</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a road map, each unit is 4 miles, and the town of Ash, <strong>A</strong>, is at the origin. The radio tower <strong>T</strong> reaches every point inside the circle (x − 4)² + (y + 3)² = 36, the edge of its range.</p>",
      claims: [
        {
          id: "tower",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Where is the radio tower T?",
          choices: [
            { letter: "A", text: "(−4, 3)" },
            { letter: "B", text: "(−3, 4)" },
            { letter: "C", text: "(4, 3)" },
            { letter: "D", text: "(4, −3)" }
          ],
          correct: "D"
        },
        {
          id: "reach",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "How far does the signal reach from the tower, in miles?",
          choices: [
            { letter: "A", text: "144 mi" },
            { letter: "B", text: "48 mi" },
            { letter: "C", text: "24 mi" },
            { letter: "D", text: "6 mi" }
          ],
          correct: "C"
        },
        {
          id: "rest-stop",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Four rest stops are at the points below. Which one is outside the tower's range?",
          choices: [
            { letter: "A", text: "(9, −3)" },
            { letter: "B", text: "(−2, −1)" },
            { letter: "C", text: "(4, 3)" },
            { letter: "D", text: "(2, 1)" }
          ],
          correct: "B"
        },
        {
          id: "ash",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives the distance, in map units, from the tower to Ash?",
          choices: [
            { letter: "A", text: "(0 − 4)² + (0 + 3)²" },
            { letter: "B", text: "√((0 − 4) + (0 + 3))" },
            { letter: "C", text: "√((0 − 4)² − (0 + 3)²)" },
            { letter: "D", text: "√((0 − 4)² + (0 + 3)²)" }
          ],
          correct: "D"
        },
        {
          id: "upgrade",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "An upgrade lets the tower reach 28 miles. Which equation, in map units, describes the new edge of its range?",
          choices: [
            { letter: "A", text: "(x − 4)² + (y + 3)² = 49" },
            { letter: "B", text: "(x − 4)² + (y + 3)² = 784" },
            { letter: "C", text: "(x − 4)² + (y + 3)² = 7" },
            { letter: "D", text: "(x + 4)² + (y − 3)² = 49" }
          ],
          correct: "A"
        },
        {
          id: "second",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A second tower's range has the edge (x + 7)² + (y − 1)² = 27. What are its center and radius?",
          choices: [
            { letter: "A", text: "(7, −1); r = 3√3" },
            { letter: "B", text: "(−7, 1); r = 27" },
            { letter: "C", text: "(−7, 1); r = 3√3" },
            { letter: "D", text: "(−7, 1); r = 9√3" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc4-sky-roundabout",
      family: "GEO",
      mode: "sky",
      title: "The Roundabout",
      kind: "Equations of circles · G.PC.4",
      blurb: "A roundabout and its center island on a city grid.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"City grid with x- and y-axes numbered from −1 to 8 across and −2 to 7 up. A roundabout is drawn as a blue ring with four roads leading into it, around a small gold center island. Its center is a gold dot at a grid point.\">" +
        "<line class=\"gr\" x1=\"45\" y1=\"150\" x2=\"45\" y2=\"15\"/><line class=\"gr\" x1=\"60\" y1=\"150\" x2=\"60\" y2=\"15\"/><line class=\"gr\" x1=\"75\" y1=\"150\" x2=\"75\" y2=\"15\"/><line class=\"gr\" x1=\"90\" y1=\"150\" x2=\"90\" y2=\"15\"/><line class=\"gr\" x1=\"105\" y1=\"150\" x2=\"105\" y2=\"15\"/>" +
        "<line class=\"gr\" x1=\"120\" y1=\"150\" x2=\"120\" y2=\"15\"/><line class=\"gr\" x1=\"135\" y1=\"150\" x2=\"135\" y2=\"15\"/><line class=\"gr\" x1=\"150\" y1=\"150\" x2=\"150\" y2=\"15\"/><line class=\"gr\" x1=\"165\" y1=\"150\" x2=\"165\" y2=\"15\"/>" +
        "<line class=\"gr\" x1=\"180\" y1=\"150\" x2=\"180\" y2=\"15\"/><line class=\"gr\" x1=\"45\" y1=\"150\" x2=\"180\" y2=\"150\"/><line class=\"gr\" x1=\"45\" y1=\"135\" x2=\"180\" y2=\"135\"/><line class=\"gr\" x1=\"45\" y1=\"120\" x2=\"180\" y2=\"120\"/>" +
        "<line class=\"gr\" x1=\"45\" y1=\"105\" x2=\"180\" y2=\"105\"/><line class=\"gr\" x1=\"45\" y1=\"90\" x2=\"180\" y2=\"90\"/><line class=\"gr\" x1=\"45\" y1=\"75\" x2=\"180\" y2=\"75\"/><line class=\"gr\" x1=\"45\" y1=\"60\" x2=\"180\" y2=\"60\"/><line class=\"gr\" x1=\"45\" y1=\"45\" x2=\"180\" y2=\"45\"/>" +
        "<line class=\"gr\" x1=\"45\" y1=\"30\" x2=\"180\" y2=\"30\"/><line class=\"gr\" x1=\"45\" y1=\"15\" x2=\"180\" y2=\"15\"/><line class=\"ax\" x1=\"45\" y1=\"120\" x2=\"180\" y2=\"120\"/><line class=\"ax\" x1=\"60\" y1=\"150\" x2=\"60\" y2=\"15\"/>" +
        "<text class=\"sm\" x=\"60\" y=\"162\" text-anchor=\"middle\">0</text><text class=\"sm\" x=\"90\" y=\"162\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"120\" y=\"162\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"150\" y=\"162\" text-anchor=\"middle\">6</text>" +
        "<text class=\"sm\" x=\"180\" y=\"162\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"40\" y=\"154\" text-anchor=\"end\">−2</text><text class=\"sm\" x=\"40\" y=\"124\" text-anchor=\"end\">0</text><text class=\"sm\" x=\"40\" y=\"94\" text-anchor=\"end\">2</text>" +
        "<text class=\"sm\" x=\"40\" y=\"64\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"40\" y=\"34\" text-anchor=\"end\">6</text><rect class=\"sh2\" x=\"45\" y=\"82.5\" width=\"15\" height=\"15\"/><rect class=\"sh2\" x=\"150\" y=\"82.5\" width=\"30\" height=\"15\"/>" +
        "<rect class=\"sh2\" x=\"97.5\" y=\"15\" width=\"15\" height=\"30\"/><rect class=\"sh2\" x=\"97.5\" y=\"135\" width=\"15\" height=\"15\"/><circle class=\"sh2\" cx=\"105\" cy=\"90\" r=\"45\"/><circle class=\"sh\" cx=\"105\" cy=\"90\" r=\"15\"/><circle class=\"dta\" cx=\"105\" cy=\"90\" r=\"3\"/>" +
        "<text class=\"sm\" x=\"200\" y=\"40\">city grid</text><text class=\"sm\" x=\"200\" y=\"56\">1 unit = 10 m</text><text class=\"sm\" x=\"200\" y=\"80\">blue: roads</text><text class=\"sm\" x=\"200\" y=\"96\">gold: center island</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A roundabout is drawn on a city grid (1 unit = 10 m). Cars drive on the blue ring between the gold center island and the outer edge. Both edges are circles with the same center, the gold dot.</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the coordinates of the center of the roundabout?",
          choices: [
            { letter: "A", text: "(2, 3)" },
            { letter: "B", text: "(−3, −2)" },
            { letter: "C", text: "(3, 2)" },
            { letter: "D", text: "(3, 5)" }
          ],
          correct: "C"
        },
        {
          id: "outer-radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What is the radius of the outer edge of the roundabout, in grid units?",
          choices: [
            { letter: "A", text: "3 units" },
            { letter: "B", text: "6 units" },
            { letter: "C", text: "9 units" },
            { letter: "D", text: "2 units" }
          ],
          correct: "A"
        },
        {
          id: "outer",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the outer edge of the roundabout?",
          choices: [
            { letter: "A", text: "(x + 3)² + (y + 2)² = 9" },
            { letter: "B", text: "(x − 3)² + (y − 2)² = 9" },
            { letter: "C", text: "(x − 3)² + (y − 2)² = 3" },
            { letter: "D", text: "(x − 2)² + (y − 3)² = 9" }
          ],
          correct: "B"
        },
        {
          id: "island",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the center island?",
          choices: [
            { letter: "A", text: "(x − 3)² + (y − 2)² = 1" },
            { letter: "B", text: "(x − 3)² + (y − 2)² = 4" },
            { letter: "C", text: "x² + y² = 1" },
            { letter: "D", text: "(x + 3)² + (y + 2)² = 1" }
          ],
          correct: "A"
        },
        {
          id: "car",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A car is at (5, 4). Where is it? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Outside: its distance is 8, more than 3" },
            { letter: "B", text: "Outside: its distance is 2 + 2 = 4, more than 3" },
            { letter: "C", text: "On the ring: its distance squared is 8, between 1 and 9" },
            { letter: "D", text: "Outside: its distance squared is 100, more than 9" }
          ],
          correct: "C"
        },
        {
          id: "triangle",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "A driver finds the car's distance d from the center of the roundabout with a right triangle whose legs follow the grid. The car is at (5, 4). Which equation does she use?",
          choices: [
            { letter: "A", text: "5² + 4² = d²" },
            { letter: "B", text: "2 + 2 = d" },
            { letter: "C", text: "3² + 2² = d²" },
            { letter: "D", text: "2² + 2² = d²" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc4-sky-no-fly-zone",
      family: "GEO",
      mode: "sky",
      title: "The No-Fly Zone",
      kind: "Equations of circles · G.PC.4",
      blurb: "A circle around an airport that planes may not enter.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 165\" role=\"img\" aria-label=\"Air map with x- and y-axes and no tick marks. Airport A is the center of a gold dashed circle. Segment AB reaches beacon B on the circle. Dashed legs AK and KB, with a right angle at K, make right triangle AKB.\">" +
        "<line class=\"ax\" x1=\"16\" y1=\"75\" x2=\"173.7\" y2=\"75\"/><line class=\"ax\" x1=\"130\" y1=\"8.5\" x2=\"130\" y2=\"159.6\"/><text class=\"sm\" x=\"176.7\" y=\"79\">x</text><text class=\"sm\" x=\"135\" y=\"14.5\">y</text><circle class=\"ac dash\" cx=\"92\" cy=\"84.5\" r=\"72.3\"/>" +
        "<line class=\"thin dash\" x1=\"92\" y1=\"84.5\" x2=\"158.5\" y2=\"84.5\"/><line class=\"thin dash\" x1=\"158.5\" y1=\"84.5\" x2=\"158.5\" y2=\"56\"/><line class=\"ln\" x1=\"92\" y1=\"84.5\" x2=\"158.5\" y2=\"56\"/><path class=\"thin\" d=\"M151.5 84.5 V77.5 H158.5\"/>" +
        "<circle class=\"dta\" cx=\"92\" cy=\"84.5\" r=\"3\"/><circle class=\"dt\" cx=\"158.5\" cy=\"56\" r=\"3\"/><circle class=\"dt\" cx=\"158.5\" cy=\"84.5\" r=\"3\"/><text x=\"83\" y=\"81.5\" text-anchor=\"end\">A</text><text x=\"167.5\" y=\"59\">B</text>" +
        "<text x=\"154.5\" y=\"101.5\" text-anchor=\"end\">K</text><text class=\"sm\" x=\"312\" y=\"132\" text-anchor=\"end\">air map</text><text class=\"sm\" x=\"312\" y=\"148\" text-anchor=\"end\">units in km</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On an air map (units in km), the airport is at <strong>A</strong>(−4, −1). Planes may not fly inside the dashed circle. Its edge passes through the beacon <strong>B</strong>(3, 2). Point <strong>K</strong>(3, −1) makes right triangle <strong>AKB</strong>.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the no-fly zone?",
          choices: [
            { letter: "A", text: "(x − 4)² + (y − 1)² = 58" },
            { letter: "B", text: "(x + 4)² + (y + 1)² = 58" },
            { letter: "C", text: "(x + 4)² + (y + 1)² = 100" },
            { letter: "D", text: "(x − 3)² + (y − 2)² = 58" }
          ],
          correct: "B"
        },
        {
          id: "pythagoras",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which equation applies the Pythagorean theorem to triangle AKB to find the radius r of the zone?",
          choices: [
            { letter: "A", text: "1² + 3² = r²" },
            { letter: "B", text: "7 + 3 = r" },
            { letter: "C", text: "7² − 3² = r²" },
            { letter: "D", text: "7² + 3² = r²" }
          ],
          correct: "D"
        },
        {
          id: "width",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "To the nearest tenth of a kilometer, how wide is the no-fly zone (its diameter)?",
          choices: [
            { letter: "A", text: "7.6 km" },
            { letter: "B", text: "116.0 km" },
            { letter: "C", text: "15.2 km" },
            { letter: "D", text: "20.0 km" }
          ],
          correct: "C"
        },
        {
          id: "pilot",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A pilot reports four possible positions. Which one is inside the no-fly zone?",
          choices: [
            { letter: "A", text: "(−10, 2)" },
            { letter: "B", text: "(2, 4)" },
            { letter: "C", text: "(−4, 7)" },
            { letter: "D", text: "(1, −7)" }
          ],
          correct: "A"
        },
        {
          id: "not-true",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which statement about the no-fly zone is NOT true?",
          choices: [
            { letter: "A", text: "B(3, 2) is on the edge." },
            { letter: "B", text: "(4, −4) is inside the zone." },
            { letter: "C", text: "(−11, −1) is inside the zone." },
            { letter: "D", text: "The radius of the zone is √58 km." }
          ],
          correct: "B"
        },
        {
          id: "drones",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Drones get a smaller zone with the same center and a radius of 3 km. Which equation describes its edge?",
          choices: [
            { letter: "A", text: "(x + 4)² + (y + 1)² = 3" },
            { letter: "B", text: "(x − 4)² + (y − 1)² = 9" },
            { letter: "C", text: "(x + 4)² + (y + 1)² = 6" },
            { letter: "D", text: "(x + 4)² + (y + 1)² = 9" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc4-sky-harbor",
      family: "GEO",
      mode: "sky",
      title: "The Harbor Slow Zone",
      kind: "Equations of circles · G.PC.4",
      blurb: "Two lighthouses mark a diameter of a circular slow zone.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Harbor map: two headlands of land, with lighthouse L at the tip of the upper left one and lighthouse M at the tip of the lower right one. A blue circle is the slow zone, and the gold segment LM crosses it through its center.\">" +
        "<path class=\"sh\" d=\"M0 0 H117 L55 24 L0 54 Z\"/><path class=\"sh\" d=\"M87 156 L127 132 L197 156 Z\"/><circle class=\"sh2\" cx=\"91\" cy=\"78\" r=\"64.9\"/><line class=\"ac\" x1=\"55\" y1=\"24\" x2=\"127\" y2=\"132\"/><circle class=\"dt\" cx=\"55\" cy=\"24\" r=\"4\"/>" +
        "<circle class=\"dt\" cx=\"127\" cy=\"132\" r=\"4\"/><text x=\"47\" y=\"18\" text-anchor=\"end\">L</text><text x=\"127\" y=\"153\" text-anchor=\"middle\">M</text><text class=\"sm\" x=\"6\" y=\"14\">land</text><text class=\"sm\" x=\"312\" y=\"40\" text-anchor=\"end\">harbor map</text>" +
        "<text class=\"sm\" x=\"312\" y=\"56\" text-anchor=\"end\">1 unit = 100 m</text><text class=\"sm\" x=\"312\" y=\"80\" text-anchor=\"end\">blue: slow zone</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a harbor map (1 unit = 100 m), boats must slow down inside a circle. Segment <strong>LM</strong> is a diameter of that circle, from lighthouse <strong>L</strong>(−5, 6) to lighthouse <strong>M</strong>(3, −6).</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "What are the coordinates of the center of the slow zone?",
          choices: [
            { letter: "A", text: "(−1, 0)" },
            { letter: "B", text: "(4, −6)" },
            { letter: "C", text: "(−2, 0)" },
            { letter: "D", text: "(8, −12)" }
          ],
          correct: "A"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the slow zone?",
          choices: [
            { letter: "A", text: "(x − 1)² + y² = 52" },
            { letter: "B", text: "(x + 1)² + y² = 208" },
            { letter: "C", text: "(x + 1)² + y² = 100" },
            { letter: "D", text: "(x + 1)² + y² = 52" }
          ],
          correct: "D"
        },
        {
          id: "dock",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "A dock is at (5, 4). Which equation uses the Pythagorean theorem to check that the dock is on the edge of the slow zone?",
          choices: [
            { letter: "A", text: "4² + 4² = 52" },
            { letter: "B", text: "6² + 4² = 52" },
            { letter: "C", text: "5² + 4² = 52" },
            { letter: "D", text: "6² + 4² = 52²" }
          ],
          correct: "B"
        },
        {
          id: "ferry",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A ferry waits at (−5, −5). Is it inside the slow zone? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: it lies on segment LM" },
            { letter: "B", text: "No: its distance squared is 61, more than 52" },
            { letter: "C", text: "No: its distance is 4 + 5 = 9, more than √52" },
            { letter: "D", text: "Yes: its distance squared is 41, less than 52" }
          ],
          correct: "D"
        },
        {
          id: "edge-point",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which point is exactly on the edge of the slow zone?",
          choices: [
            { letter: "A", text: "(−5, −4)" },
            { letter: "B", text: "(−6, −4)" },
            { letter: "C", text: "(−7, −4)" },
            { letter: "D", text: "(9, 0)" }
          ],
          correct: "C"
        },
        {
          id: "no-wake",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "The harbor adds a no-wake circle around lighthouse M with a radius of 300 m. Which equation, in map units, describes it?",
          choices: [
            { letter: "A", text: "(x − 3)² + (y + 6)² = 9" },
            { letter: "B", text: "(x − 3)² + (y + 6)² = 90000" },
            { letter: "C", text: "(x − 3)² + (y + 6)² = 3" },
            { letter: "D", text: "(x + 3)² + (y − 6)² = 9" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc4-sky-drone-delivery",
      family: "GEO",
      mode: "sky",
      title: "Drone Delivery",
      kind: "Equations of circles · G.PC.4",
      blurb: "How far a delivery drone can fly from its hub.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"City map with two streets and a river. A delivery hub H, drawn as a small square with a gold dot, is the center of a gold dashed circle that marks the edge of the delivery range.\">" +
        "<path class=\"sh2\" d=\"M0 118 C 80 100, 150 150, 220 128 L 220 142 C 150 164, 80 114, 0 132 Z\"/><line class=\"thin\" x1=\"0\" y1=\"40\" x2=\"220\" y2=\"40\"/><line class=\"thin\" x1=\"150\" y1=\"0\" x2=\"150\" y2=\"156\"/><circle class=\"ac dash\" cx=\"100\" cy=\"78\" r=\"64\"/>" +
        "<rect class=\"ln\" x=\"94\" y=\"72\" width=\"12\" height=\"12\"/><circle class=\"dta\" cx=\"100\" cy=\"78\" r=\"3\"/><text x=\"90\" y=\"83\" text-anchor=\"end\">H</text><text class=\"sm\" x=\"226\" y=\"140\">river</text><text class=\"sm\" x=\"312\" y=\"60\" text-anchor=\"end\">city map</text>" +
        "<text class=\"sm\" x=\"312\" y=\"76\" text-anchor=\"end\">1 unit = 1 km</text><text class=\"sm\" x=\"312\" y=\"100\" text-anchor=\"end\">dashed: edge of</text><text class=\"sm\" x=\"312\" y=\"116\" text-anchor=\"end\">delivery range</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A drone delivery hub <strong>H</strong> is at (−2, 4) on a city map (units in km). A drone can fly up to 8 km from the hub. The dashed circle is the edge of the delivery range.</p>",
      claims: [
        {
          id: "rule",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "The app checks a delivery address (x, y). Which rule says the address is within 8 km of the hub?",
          choices: [
            { letter: "A", text: "√((x − 2)² + (y + 4)²) ≤ 8" },
            { letter: "B", text: "(x + 2) + (y − 4) ≤ 8" },
            { letter: "C", text: "√((x + 2)² + (y − 4)²) ≤ 8" },
            { letter: "D", text: "√((x + 2)² + (y − 4)²) ≥ 8" }
          ],
          correct: "C"
        },
        {
          id: "edge",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the delivery range?",
          choices: [
            { letter: "A", text: "(x + 2)² + (y − 4)² = 8" },
            { letter: "B", text: "(x + 2)² + (y − 4)² = 64" },
            { letter: "C", text: "(x + 2)² + (y − 4)² = 16" },
            { letter: "D", text: "(x − 2)² + (y + 4)² = 64" }
          ],
          correct: "B"
        },
        {
          id: "house",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Can a drone deliver to a house at (6, 1)? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: its distance from H is √73 km, more than 8 km" },
            { letter: "B", text: "No: its distance from H is 11 km, more than 8 km" },
            { letter: "C", text: "Yes: its distance from H is √41 km" },
            { letter: "D", text: "Yes: it is exactly 8 km from H, on the edge" }
          ],
          correct: "A"
        },
        {
          id: "customer",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "A customer is at (6, 6). To the nearest tenth of a kilometer, how far is the customer from the hub?",
          choices: [
            { letter: "A", text: "10.0 km" },
            { letter: "B", text: "68.0 km" },
            { letter: "C", text: "8.2 km" },
            { letter: "D", text: "10.8 km" }
          ],
          correct: "C"
        },
        {
          id: "hub2",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "The company adds a second hub at (3, −5) with a range of 6 km. Which equation describes the edge of its range?",
          choices: [
            { letter: "A", text: "(x + 3)² + (y − 5)² = 36" },
            { letter: "B", text: "(x − 3)² + (y + 5)² = 6" },
            { letter: "C", text: "(x − 3)² + (y + 5)² = 12" },
            { letter: "D", text: "(x − 3)² + (y + 5)² = 36" }
          ],
          correct: "D"
        },
        {
          id: "edge-point",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which point is exactly on the edge of the delivery range?",
          choices: [
            { letter: "A", text: "(6, 12)" },
            { letter: "B", text: "(6, 4)" },
            { letter: "C", text: "(2, 4)" },
            { letter: "D", text: "(2, 8)" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc4-sky-bike-loop",
      family: "GEO",
      mode: "sky",
      title: "The Bike Loop",
      kind: "Equations of circles · G.PC.4",
      blurb: "Complete the square to find a city bike loop's center and size.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 158\" role=\"img\" aria-label=\"A grid of city blocks with no numbers. A gold circle is a bike loop around a fountain F at its center.\"><line class=\"gr\" x1=\"40\" y1=\"6\" x2=\"40\" y2=\"154\"/>" +
        "<line class=\"gr\" x1=\"50\" y1=\"6\" x2=\"50\" y2=\"154\"/><line class=\"gr\" x1=\"60\" y1=\"6\" x2=\"60\" y2=\"154\"/><line class=\"gr\" x1=\"70\" y1=\"6\" x2=\"70\" y2=\"154\"/><line class=\"gr\" x1=\"80\" y1=\"6\" x2=\"80\" y2=\"154\"/><line class=\"gr\" x1=\"90\" y1=\"6\" x2=\"90\" y2=\"154\"/>" +
        "<line class=\"gr\" x1=\"100\" y1=\"6\" x2=\"100\" y2=\"154\"/><line class=\"gr\" x1=\"110\" y1=\"6\" x2=\"110\" y2=\"154\"/><line class=\"gr\" x1=\"120\" y1=\"6\" x2=\"120\" y2=\"154\"/><line class=\"gr\" x1=\"130\" y1=\"6\" x2=\"130\" y2=\"154\"/><line class=\"gr\" x1=\"140\" y1=\"6\" x2=\"140\" y2=\"154\"/>" +
        "<line class=\"gr\" x1=\"150\" y1=\"6\" x2=\"150\" y2=\"154\"/><line class=\"gr\" x1=\"160\" y1=\"6\" x2=\"160\" y2=\"154\"/><line class=\"gr\" x1=\"170\" y1=\"6\" x2=\"170\" y2=\"154\"/><line class=\"gr\" x1=\"180\" y1=\"6\" x2=\"180\" y2=\"154\"/>" +
        "<line class=\"gr\" x1=\"36\" y1=\"150\" x2=\"184\" y2=\"150\"/><line class=\"gr\" x1=\"36\" y1=\"140\" x2=\"184\" y2=\"140\"/><line class=\"gr\" x1=\"36\" y1=\"130\" x2=\"184\" y2=\"130\"/><line class=\"gr\" x1=\"36\" y1=\"120\" x2=\"184\" y2=\"120\"/>" +
        "<line class=\"gr\" x1=\"36\" y1=\"110\" x2=\"184\" y2=\"110\"/><line class=\"gr\" x1=\"36\" y1=\"100\" x2=\"184\" y2=\"100\"/><line class=\"gr\" x1=\"36\" y1=\"90\" x2=\"184\" y2=\"90\"/><line class=\"gr\" x1=\"36\" y1=\"80\" x2=\"184\" y2=\"80\"/><line class=\"gr\" x1=\"36\" y1=\"70\" x2=\"184\" y2=\"70\"/>" +
        "<line class=\"gr\" x1=\"36\" y1=\"60\" x2=\"184\" y2=\"60\"/><line class=\"gr\" x1=\"36\" y1=\"50\" x2=\"184\" y2=\"50\"/><line class=\"gr\" x1=\"36\" y1=\"40\" x2=\"184\" y2=\"40\"/><line class=\"gr\" x1=\"36\" y1=\"30\" x2=\"184\" y2=\"30\"/><line class=\"gr\" x1=\"36\" y1=\"20\" x2=\"184\" y2=\"20\"/>" +
        "<line class=\"gr\" x1=\"36\" y1=\"10\" x2=\"184\" y2=\"10\"/><circle class=\"ac\" cx=\"110\" cy=\"80\" r=\"60.8\"/><circle class=\"sh2\" cx=\"110\" cy=\"80\" r=\"6\"/><circle class=\"dta\" cx=\"110\" cy=\"80\" r=\"3\"/><text x=\"119\" y=\"97\">F</text>" +
        "<text class=\"sm\" x=\"200\" y=\"40\">city blocks</text><text class=\"sm\" x=\"200\" y=\"56\">1 unit = 1 block</text><text class=\"sm\" x=\"200\" y=\"80\">gold: bike loop</text><text class=\"sm\" x=\"200\" y=\"96\">F: fountain</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a city map, 1 unit is 1 block. A circular bike loop has the equation x² + y² − 8x + 4y − 17 = 0. The loop goes around a fountain <strong>F</strong> at its center.</p>",
      claims: [
        {
          id: "complete",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which equation is the result of completing the square for the bike loop?",
          choices: [
            { letter: "A", text: "(x − 4)² + (y + 2)² = 17" },
            { letter: "B", text: "(x − 4)² + (y + 2)² = 37" },
            { letter: "C", text: "(x + 4)² + (y − 2)² = 37" },
            { letter: "D", text: "(x − 8)² + (y + 4)² = 37" }
          ],
          correct: "B"
        },
        {
          id: "center-radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the center and radius of the bike loop?",
          choices: [
            { letter: "A", text: "(4, −2); r = √37" },
            { letter: "B", text: "(−4, 2); r = √37" },
            { letter: "C", text: "(4, −2); r = 37" },
            { letter: "D", text: "(4, −2); r = √17" }
          ],
          correct: "A"
        },
        {
          id: "jo",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Jo completes the square and writes (x − 4)² + (y + 2)² = 17 + 16 − 4. What is her mistake?",
          choices: [
            { letter: "A", text: "She should add 64 and 16, not 16 and 4." },
            { letter: "B", text: "She should use −17 on the right side, not 17." },
            { letter: "C", text: "She subtracted 4; she must add 4 to the right side." },
            { letter: "D", text: "She should add 8 and 4, the coefficients." }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Why does completing the square show that the bike loop is a circle?",
          choices: [
            { letter: "A", text: "It gives x² + y² = 37, centered at the origin." },
            { letter: "B", text: "Its x² and y² terms show a radius of 17 blocks." },
            { letter: "C", text: "Each point (x, y) on it is 37 blocks from (4, −2)." },
            { letter: "D", text: "Each point (x, y) on it is √37 blocks from (4, −2)." }
          ],
          correct: "D"
        },
        {
          id: "landmark",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which landmark is outside the bike loop?",
          choices: [
            { letter: "A", text: "School at (10, 1)" },
            { letter: "B", text: "Library at (5, 4)" },
            { letter: "C", text: "Park at (0, 0)" },
            { letter: "D", text: "City hall at (−1, 0)" }
          ],
          correct: "A"
        },
        {
          id: "longer",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A longer loop will have the same center and pass the stadium at (−2, 6). Which equation describes the longer loop?",
          choices: [
            { letter: "A", text: "(x + 4)² + (y − 2)² = 100" },
            { letter: "B", text: "(x − 4)² + (y + 2)² = 100" },
            { letter: "C", text: "(x + 2)² + (y − 6)² = 100" },
            { letter: "D", text: "(x − 4)² + (y + 2)² = 14" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc4-sky-pickup-zone",
      family: "GEO",
      mode: "sky",
      title: "The Pickup Zone",
      kind: "Equations of circles · G.PC.4",
      blurb: "A rideshare pickup circle around a train station, and the streets it crosses.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 145\" role=\"img\" aria-label=\"Street map with no grid. A blue circle is the pickup zone around train station S, which sits on a dashed rail line. Main Street is a straight horizontal line that cuts across the lower part of the circle. Taxi stand T is to the lower right, outside the circle.\">" +
        "<circle class=\"sh2\" cx=\"70\" cy=\"62\" r=\"50\"/><line class=\"ln\" x1=\"4\" y1=\"92\" x2=\"240\" y2=\"92\"/><text class=\"sm\" x=\"240\" y=\"107\" text-anchor=\"end\">Main St</text><line class=\"thin dash\" x1=\"0\" y1=\"32\" x2=\"170\" y2=\"105\"/>" +
        "<rect class=\"ln\" x=\"63\" y=\"57\" width=\"14\" height=\"10\"/><circle class=\"dta\" cx=\"70\" cy=\"62\" r=\"3\"/><text x=\"58\" y=\"52\" text-anchor=\"end\">S</text><circle class=\"dt\" cx=\"150\" cy=\"122\" r=\"3\"/><text x=\"157\" y=\"136\">T</text>" +
        "<text class=\"sm\" x=\"312\" y=\"24\" text-anchor=\"end\">street map</text><text class=\"sm\" x=\"312\" y=\"40\" text-anchor=\"end\">units: blocks</text><text class=\"sm\" x=\"312\" y=\"58\" text-anchor=\"end\">blue: pickup zone</text>" +
        "<text class=\"sm\" x=\"312\" y=\"74\" text-anchor=\"end\">dashed: rail line</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A train station <strong>S</strong> has a rideshare pickup zone: the circle (x + 3)² + (y − 2)² = 25 and its inside. Units are city blocks. Main Street is the line y = −1. The taxi stand is at <strong>T</strong>(5, −4).</p>",
      claims: [
        {
          id: "center-radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the coordinates of the station S and the radius of the pickup zone?",
          choices: [
            { letter: "A", text: "(3, −2); r = 5" },
            { letter: "B", text: "(−3, 2); r = 25" },
            { letter: "C", text: "(2, −3); r = 5" },
            { letter: "D", text: "(−3, 2); r = 5" }
          ],
          correct: "D"
        },
        {
          id: "main-street",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Where does Main Street cross the edge of the pickup zone?",
          choices: [
            { letter: "A", text: "(7, −1) and (−1, −1)" },
            { letter: "B", text: "(2, −1) and (−8, −1)" },
            { letter: "C", text: "(1, −1) and (−7, −1)" },
            { letter: "D", text: "(1, −1) only" }
          ],
          correct: "C"
        },
        {
          id: "bus-stop",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "The city keeps the center and enlarges the zone so that its edge reaches the bus stop at (2, −5). Which equation describes the new edge?",
          choices: [
            { letter: "A", text: "(x + 3)² + (y − 2)² = 74" },
            { letter: "B", text: "(x − 3)² + (y + 2)² = 74" },
            { letter: "C", text: "(x − 2)² + (y + 5)² = 74" },
            { letter: "D", text: "(x + 3)² + (y − 2)² = 144" }
          ],
          correct: "A"
        },
        {
          id: "rider",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "A rider stands at (0, 6). Using the distance formula, where is she compared with the pickup zone?",
          choices: [
            { letter: "A", text: "Outside: her distance is 3 + 4 = 7" },
            { letter: "B", text: "Outside: her distance is √73" },
            { letter: "C", text: "Inside: her distance is √7" },
            { letter: "D", text: "On the edge: her distance is √(3² + 4²) = 5" }
          ],
          correct: "D"
        },
        {
          id: "ferry",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "The ferry terminal's pickup zone has the edge x² + y² − 2x + 10y + 10 = 0. What are its center and radius?",
          choices: [
            { letter: "A", text: "(−1, 5); r = 4" },
            { letter: "B", text: "(1, −5); r = 4" },
            { letter: "C", text: "(1, −5); r = 16" },
            { letter: "D", text: "(1, −5); r = √2" }
          ],
          correct: "B"
        },
        {
          id: "new-zone",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A new zone will have a diameter from the station S to the taxi stand T. Which equation describes its edge?",
          choices: [
            { letter: "A", text: "(x + 3)² + (y − 2)² = 100" },
            { letter: "B", text: "(x + 1)² + (y − 1)² = 25" },
            { letter: "C", text: "(x − 1)² + (y + 1)² = 25" },
            { letter: "D", text: "(x − 1)² + (y + 1)² = 100" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
