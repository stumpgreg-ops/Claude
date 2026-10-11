/* SOL Labyrinth — Geometry game (family GEO), G.RLT.3 (symmetry and transformations), modes maze and raid (v5.20).
   maze packs: a school building and its grounds; raid (Eagle Swoop) packs: sports and games. Original items only.
   Every key and distractor was computed (gx-307/gen.js); every distractor is a named mistake; grid vertices are exact grid points. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-rlt3-maze-bus-signs",
      family: "GEO",
      mode: "maze",
      title: "Signs Around the Bus Loop",
      kind: "Transformations · G.RLT.3",
      blurb: "A stop sign, a yield sign and a diamond sign: lines and turns of symmetry.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"Sign 1, a regular octagon; Sign 2, an equilateral triangle pointing down; Sign 3, a rhombus standing on one corner with no right angles\">" +
        "<polygon class=\"sh\" points=\"98.65,78.84 74.84,102.65 41.16,102.65 17.35,78.84 17.35,45.16 41.16,21.35 74.84,21.35 98.65,45.16\"/>" +
        "<polygon class=\"sh2\" points=\"160,106 118.43,34 201.57,34\"/>" +
        "<polygon class=\"sh\" points=\"262,16 290,62 262,108 234,62\"/>" +
        "<text class=\"sm\" x=\"58\" y=\"132\" text-anchor=\"middle\">Sign 1</text><text class=\"sm\" x=\"160\" y=\"132\" text-anchor=\"middle\">Sign 2</text><text class=\"sm\" x=\"262\" y=\"132\" text-anchor=\"middle\">Sign 3</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">Three signs stand by the school's bus loop. <strong>Sign 1</strong> is a regular octagon. <strong>Sign 2</strong> is an equilateral triangle. <strong>Sign 3</strong> is a rhombus with no right angles.</p>",
      claims: [
        {
          id: "oct-lines",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "How many lines of symmetry does Sign 1 have?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "8" },
            { letter: "C", text: "16" },
            { letter: "D", text: "1" }
          ],
          correct: "B"
        },
        {
          id: "oct-turn",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the smallest angle of rotation, about its center, that maps Sign 1 onto itself?",
          choices: [
            { letter: "A", text: "135°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "22.5°" },
            { letter: "D", text: "45°" }
          ],
          correct: "D"
        },
        {
          id: "yield-order",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the order of rotational symmetry of Sign 2?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "1" },
            { letter: "C", text: "6" },
            { letter: "D", text: "120" }
          ],
          correct: "A"
        },
        {
          id: "diamond",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which describes the symmetry of Sign 3?",
          choices: [
            { letter: "A", text: "4 lines of symmetry; rotational symmetry of order 4" },
            { letter: "B", text: "No lines of symmetry; rotational symmetry of order 2" },
            { letter: "C", text: "2 lines of symmetry; rotational symmetry of order 2" },
            { letter: "D", text: "2 lines of symmetry; no rotational symmetry" }
          ],
          correct: "C"
        },
        {
          id: "oct-quarter",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "A custodian turns Sign 1 by 90° about its center. Does the sign map onto itself?",
          choices: [
            { letter: "A", text: "Yes, because 90° is a multiple of 45°." },
            { letter: "B", text: "No, because only a 45° turn works." },
            { letter: "C", text: "No, because the turn must be 135°." },
            { letter: "D", text: "Yes, because any turn maps a polygon onto itself." }
          ],
          correct: "A"
        },
        {
          id: "yield-map",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Sign 2 is copied onto a hallway map by a dilation with scale factor 1/4. Which is true of the copy?",
          choices: [
            { letter: "A", text: "Its angles are 15°, one fourth of 60°." },
            { letter: "B", text: "It is congruent to Sign 2." },
            { letter: "C", text: "Its angles are 60°, and it is smaller than Sign 2." },
            { letter: "D", text: "It has only 1 line of symmetry." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt3-maze-parking-arrow",
      family: "GEO",
      mode: "maze",
      title: "The Arrow in the Parking Lot",
      kind: "Transformations · G.RLT.3",
      blurb: "A painted arrow is slid, flipped and turned on the lot's grid.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 142\" role=\"img\" aria-label=\"Coordinate grid with pentagon ABCDE, an arrow pointing up: A at (2, 1), B at (4, 1), C at (4, 3), D at (3, 4) and E at (2, 3)\">" +
        "<line class=\"gr\" x1=\"60\" y1=\"11\" x2=\"60\" y2=\"131\"/><line class=\"gr\" x1=\"80\" y1=\"11\" x2=\"80\" y2=\"131\"/><line class=\"gr\" x1=\"100\" y1=\"11\" x2=\"100\" y2=\"131\"/><line class=\"gr\" x1=\"140\" y1=\"11\" x2=\"140\" y2=\"131\"/><line class=\"gr\" x1=\"160\" y1=\"11\" x2=\"160\" y2=\"131\"/><line class=\"gr\" x1=\"180\" y1=\"11\" x2=\"180\" y2=\"131\"/><line class=\"gr\" x1=\"200\" y1=\"11\" x2=\"200\" y2=\"131\"/><line class=\"gr\" x1=\"220\" y1=\"11\" x2=\"220\" y2=\"131\"/><line class=\"gr\" x1=\"240\" y1=\"11\" x2=\"240\" y2=\"131\"/><line class=\"gr\" x1=\"260\" y1=\"11\" x2=\"260\" y2=\"131\"/>" +
        "<line class=\"gr\" x1=\"60\" y1=\"131\" x2=\"260\" y2=\"131\"/><line class=\"gr\" x1=\"60\" y1=\"91\" x2=\"260\" y2=\"91\"/><line class=\"gr\" x1=\"60\" y1=\"71\" x2=\"260\" y2=\"71\"/><line class=\"gr\" x1=\"60\" y1=\"51\" x2=\"260\" y2=\"51\"/><line class=\"gr\" x1=\"60\" y1=\"31\" x2=\"260\" y2=\"31\"/><line class=\"gr\" x1=\"60\" y1=\"11\" x2=\"260\" y2=\"11\"/>" +
        "<line class=\"ax\" x1=\"60\" y1=\"111\" x2=\"260\" y2=\"111\"/><line class=\"ax\" x1=\"120\" y1=\"131\" x2=\"120\" y2=\"11\"/>" +
        "<text class=\"sm\" x=\"80\" y=\"124\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"160\" y=\"124\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"200\" y=\"124\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"116\" y=\"75\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"116\" y=\"35\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"264\" y=\"115\">x</text><text class=\"sm\" x=\"125\" y=\"21\">y</text>" +
        "<polygon class=\"sh\" points=\"160,91 200,91 200,51 180,31 160,51\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"91\" r=\"3\"/><circle class=\"dt\" cx=\"200\" cy=\"91\" r=\"3\"/><circle class=\"dt\" cx=\"200\" cy=\"51\" r=\"3\"/><circle class=\"dt\" cx=\"180\" cy=\"31\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"51\" r=\"3\"/>" +
        "<text x=\"155\" y=\"106\" text-anchor=\"end\">A</text><text x=\"205\" y=\"106\">B</text><text x=\"208\" y=\"56\">C</text><text x=\"180\" y=\"24\" text-anchor=\"middle\">D</text><text x=\"152\" y=\"56\" text-anchor=\"end\">E</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A painted arrow, pentagon <strong>ABCDE</strong>, points up a one-way lane in the school parking lot: A(2, 1), B(4, 1), C(4, 3), D(3, 4) and E(2, 3).</p>",
      claims: [
        {
          id: "slide-d",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The arrow is repainted using the rule (x, y) → (x − 6, y + 2). What is the image of D?",
          choices: [
            { letter: "A", text: "(9, 2)" },
            { letter: "B", text: "(5, −2)" },
            { letter: "C", text: "(−3, 6)" },
            { letter: "D", text: "(−3, 4)" }
          ],
          correct: "C"
        },
        {
          id: "flip-c",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of C after a reflection over the x-axis?",
          choices: [
            { letter: "A", text: "(4, −3)" },
            { letter: "B", text: "(−4, 3)" },
            { letter: "C", text: "(3, 4)" },
            { letter: "D", text: "(−4, −3)" }
          ],
          correct: "A"
        },
        {
          id: "flip-b",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of B after a reflection over the line x = −1?",
          choices: [
            { letter: "A", text: "(−4, 1)" },
            { letter: "B", text: "(4, −3)" },
            { letter: "C", text: "(2, 1)" },
            { letter: "D", text: "(−6, 1)" }
          ],
          correct: "D"
        },
        {
          id: "rule",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A second arrow is made by sliding ABCDE so that A lands on (−3, 4). Which rule describes the slide?",
          choices: [
            { letter: "A", text: "(x, y) → (x + 5, y − 3)" },
            { letter: "B", text: "(x, y) → (x − 5, y + 3)" },
            { letter: "C", text: "(x, y) → (x − 3, y + 4)" },
            { letter: "D", text: "(x, y) → (x − 1, y + 5)" }
          ],
          correct: "B"
        },
        {
          id: "line",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which line is a line of symmetry of arrow ABCDE?",
          choices: [
            { letter: "A", text: "y = 2.5" },
            { letter: "B", text: "x = 2" },
            { letter: "C", text: "y = x" },
            { letter: "D", text: "x = 3" }
          ],
          correct: "D"
        },
        {
          id: "which",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A third arrow has A′(−1, 2), B′(−1, 4), C′(−3, 4), D′(−4, 3) and E′(−3, 2). Which single transformation maps ABCDE to A′B′C′D′E′?",
          choices: [
            { letter: "A", text: "Rotation of 90° clockwise about the origin" },
            { letter: "B", text: "Rotation of 90° counterclockwise about the origin" },
            { letter: "C", text: "Reflection over the line y = x" },
            { letter: "D", text: "Reflection over the y-axis" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt3-maze-library-rug",
      family: "GEO",
      mode: "maze",
      title: "The Library Reading Rug",
      kind: "Transformations · G.RLT.3",
      blurb: "A triangular rug on the floor plan, shrunk and enlarged about the origin.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"Coordinate grid with triangle RST: R at (-3, 6), S at (6, 3) and T at (3, -3)\">" +
        "<line class=\"gr\" x1=\"94\" y1=\"10\" x2=\"94\" y2=\"142\"/><line class=\"gr\" x1=\"106\" y1=\"10\" x2=\"106\" y2=\"142\"/><line class=\"gr\" x1=\"118\" y1=\"10\" x2=\"118\" y2=\"142\"/><line class=\"gr\" x1=\"130\" y1=\"10\" x2=\"130\" y2=\"142\"/><line class=\"gr\" x1=\"154\" y1=\"10\" x2=\"154\" y2=\"142\"/><line class=\"gr\" x1=\"166\" y1=\"10\" x2=\"166\" y2=\"142\"/><line class=\"gr\" x1=\"178\" y1=\"10\" x2=\"178\" y2=\"142\"/><line class=\"gr\" x1=\"190\" y1=\"10\" x2=\"190\" y2=\"142\"/><line class=\"gr\" x1=\"202\" y1=\"10\" x2=\"202\" y2=\"142\"/><line class=\"gr\" x1=\"214\" y1=\"10\" x2=\"214\" y2=\"142\"/><line class=\"gr\" x1=\"226\" y1=\"10\" x2=\"226\" y2=\"142\"/>" +
        "<line class=\"gr\" x1=\"94\" y1=\"142\" x2=\"226\" y2=\"142\"/><line class=\"gr\" x1=\"94\" y1=\"130\" x2=\"226\" y2=\"130\"/><line class=\"gr\" x1=\"94\" y1=\"118\" x2=\"226\" y2=\"118\"/><line class=\"gr\" x1=\"94\" y1=\"106\" x2=\"226\" y2=\"106\"/><line class=\"gr\" x1=\"94\" y1=\"82\" x2=\"226\" y2=\"82\"/><line class=\"gr\" x1=\"94\" y1=\"70\" x2=\"226\" y2=\"70\"/><line class=\"gr\" x1=\"94\" y1=\"58\" x2=\"226\" y2=\"58\"/><line class=\"gr\" x1=\"94\" y1=\"46\" x2=\"226\" y2=\"46\"/><line class=\"gr\" x1=\"94\" y1=\"34\" x2=\"226\" y2=\"34\"/><line class=\"gr\" x1=\"94\" y1=\"22\" x2=\"226\" y2=\"22\"/><line class=\"gr\" x1=\"94\" y1=\"10\" x2=\"226\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"94\" y1=\"94\" x2=\"226\" y2=\"94\"/><line class=\"ax\" x1=\"142\" y1=\"142\" x2=\"142\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"106\" y=\"107\" text-anchor=\"middle\">−3</text><text class=\"sm\" x=\"214\" y=\"107\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"146\" y=\"134\">−3</text><text class=\"sm\" x=\"146\" y=\"26\">6</text><text class=\"sm\" x=\"230\" y=\"98\">x</text><text class=\"sm\" x=\"137\" y=\"20\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh2\" points=\"106,22 214,58 178,130\"/>" +
        "<circle class=\"dt\" cx=\"106\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"214\" cy=\"58\" r=\"3\"/><circle class=\"dt\" cx=\"178\" cy=\"130\" r=\"3\"/>" +
        "<text x=\"101\" y=\"17\" text-anchor=\"end\">R</text><text x=\"222\" y=\"63\">S</text><text x=\"178\" y=\"147\" text-anchor=\"middle\">T</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On the library floor plan, the reading rug is <strong>△RST</strong> with R(−3, 6), S(6, 3) and T(3, −3). Its area is 31.5 square units. New copies of the plan are made by dilations centered at the origin.</p>",
      claims: [
        {
          id: "image-s",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Under a dilation with scale factor 1/3 centered at the origin, what is the image of S?",
          choices: [
            { letter: "A", text: "(2, 1)" },
            { letter: "B", text: "(18, 9)" },
            { letter: "C", text: "(3, 0)" },
            { letter: "D", text: "(2, 3)" }
          ],
          correct: "A"
        },
        {
          id: "area",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the area of the image of △RST under a dilation with scale factor 1/3 centered at the origin?",
          choices: [
            { letter: "A", text: "10.5 square units" },
            { letter: "B", text: "31.5 square units" },
            { letter: "C", text: "3.5 square units" },
            { letter: "D", text: "283.5 square units" }
          ],
          correct: "C"
        },
        {
          id: "factor",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A dilation centered at the origin maps R(−3, 6) to (−2, 4). What is its scale factor?",
          choices: [
            { letter: "A", text: "3/2" },
            { letter: "B", text: "2/3" },
            { letter: "C", text: "2" },
            { letter: "D", text: "1/3" }
          ],
          correct: "B"
        },
        {
          id: "not-true",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which is NOT true of the image of △RST under a dilation with scale factor 1/3 centered at the origin?",
          choices: [
            { letter: "A", text: "Each side is one third as long." },
            { letter: "B", text: "Each angle has the same measure." },
            { letter: "C", text: "It is similar to △RST." },
            { letter: "D", text: "It is congruent to △RST." }
          ],
          correct: "D"
        },
        {
          id: "then-flip",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The plan is dilated by scale factor 1/3 about the origin and then reflected over the y-axis. Where does T end up?",
          choices: [
            { letter: "A", text: "(1, 1)" },
            { letter: "B", text: "(−3, −3)" },
            { letter: "C", text: "(−1, −1)" },
            { letter: "D", text: "(1, −1)" }
          ],
          correct: "C"
        },
        {
          id: "poster",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "For a wall poster, the plan is enlarged to 3 times its size by a dilation centered at the origin. Which rule describes it?",
          choices: [
            { letter: "A", text: "(x, y) → (3x, 3y)" },
            { letter: "B", text: "(x, y) → (x + 3, y + 3)" },
            { letter: "C", text: "(x, y) → (x/3, y/3)" },
            { letter: "D", text: "(x, y) → (3x, y)" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-maze-band-field",
      family: "GEO",
      mode: "maze",
      title: "The Drum Line on the Field",
      kind: "Transformations · G.RLT.3",
      blurb: "A drill move on the stadium grid, and the compositions that make it.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Coordinate grid with quadrilateral FGHJ: F at (2, 1), G at (4, 2), H at (3, 4), J at (1, 3); and quadrilateral F'G'H'J': F' at (-1, -2), G' at (-2, -4), H' at (-4, -3), J' at (-3, -1)\">" +
        "<line class=\"gr\" x1=\"90\" y1=\"10\" x2=\"90\" y2=\"150\"/><line class=\"gr\" x1=\"104\" y1=\"10\" x2=\"104\" y2=\"150\"/><line class=\"gr\" x1=\"118\" y1=\"10\" x2=\"118\" y2=\"150\"/><line class=\"gr\" x1=\"132\" y1=\"10\" x2=\"132\" y2=\"150\"/><line class=\"gr\" x1=\"146\" y1=\"10\" x2=\"146\" y2=\"150\"/><line class=\"gr\" x1=\"174\" y1=\"10\" x2=\"174\" y2=\"150\"/><line class=\"gr\" x1=\"188\" y1=\"10\" x2=\"188\" y2=\"150\"/><line class=\"gr\" x1=\"202\" y1=\"10\" x2=\"202\" y2=\"150\"/><line class=\"gr\" x1=\"216\" y1=\"10\" x2=\"216\" y2=\"150\"/><line class=\"gr\" x1=\"230\" y1=\"10\" x2=\"230\" y2=\"150\"/>" +
        "<line class=\"gr\" x1=\"90\" y1=\"150\" x2=\"230\" y2=\"150\"/><line class=\"gr\" x1=\"90\" y1=\"136\" x2=\"230\" y2=\"136\"/><line class=\"gr\" x1=\"90\" y1=\"122\" x2=\"230\" y2=\"122\"/><line class=\"gr\" x1=\"90\" y1=\"108\" x2=\"230\" y2=\"108\"/><line class=\"gr\" x1=\"90\" y1=\"94\" x2=\"230\" y2=\"94\"/><line class=\"gr\" x1=\"90\" y1=\"66\" x2=\"230\" y2=\"66\"/><line class=\"gr\" x1=\"90\" y1=\"52\" x2=\"230\" y2=\"52\"/><line class=\"gr\" x1=\"90\" y1=\"38\" x2=\"230\" y2=\"38\"/><line class=\"gr\" x1=\"90\" y1=\"24\" x2=\"230\" y2=\"24\"/><line class=\"gr\" x1=\"90\" y1=\"10\" x2=\"230\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"90\" y1=\"80\" x2=\"230\" y2=\"80\"/><line class=\"ax\" x1=\"160\" y1=\"150\" x2=\"160\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"188\" y=\"93\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"216\" y=\"93\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"164\" y=\"56\">2</text><text class=\"sm\" x=\"164\" y=\"140\">−4</text><text class=\"sm\" x=\"234\" y=\"84\">x</text><text class=\"sm\" x=\"155\" y=\"20\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh2\" points=\"188,66 216,52 202,24 174,38\"/>" +
        "<polygon class=\"sh\" points=\"146,108 132,136 104,122 118,94\"/>" +
        "<circle class=\"dt\" cx=\"188\" cy=\"66\" r=\"3\"/><circle class=\"dt\" cx=\"216\" cy=\"52\" r=\"3\"/><circle class=\"dt\" cx=\"202\" cy=\"24\" r=\"3\"/><circle class=\"dt\" cx=\"174\" cy=\"38\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"146\" cy=\"108\" r=\"3\"/><circle class=\"dt\" cx=\"132\" cy=\"136\" r=\"3\"/><circle class=\"dt\" cx=\"104\" cy=\"122\" r=\"3\"/><circle class=\"dt\" cx=\"118\" cy=\"94\" r=\"3\"/>" +
        "<text x=\"196\" y=\"71\">F</text><text x=\"224\" y=\"57\">G</text><text x=\"202\" y=\"17\" text-anchor=\"middle\">H</text><text x=\"174\" y=\"31\" text-anchor=\"middle\">J</text>" +
        "<text x=\"146\" y=\"101\" text-anchor=\"middle\">F′</text><text x=\"132\" y=\"153\" text-anchor=\"middle\">G′</text><text x=\"96\" y=\"127\" text-anchor=\"end\">H′</text><text x=\"110\" y=\"99\" text-anchor=\"end\">J′</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A grid is laid over the stadium field. The drum line stands in the shape of <strong>FGHJ</strong>: F(2, 1), G(4, 2), H(3, 4), J(1, 3). After a drill move it stands as <strong>F′G′H′J′</strong>: F′(−1, −2), G′(−2, −4), H′(−4, −3), J′(−3, −1).</p>",
      claims: [
        {
          id: "single",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which single transformation maps FGHJ to F′G′H′J′?",
          choices: [
            { letter: "A", text: "Reflection over the line y = x" },
            { letter: "B", text: "Rotation of 180° about the origin" },
            { letter: "C", text: "Rotation of 90° clockwise about the origin" },
            { letter: "D", text: "Reflection over the line y = −x" }
          ],
          correct: "D"
        },
        {
          id: "compose",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which composition also maps FGHJ to F′G′H′J′?",
          choices: [
            { letter: "A", text: "Reflect over the x-axis, then rotate 90° counterclockwise about the origin" },
            { letter: "B", text: "Reflect over the x-axis, then rotate 90° clockwise about the origin" },
            { letter: "C", text: "Rotate 90° clockwise about the origin, then reflect over the x-axis" },
            { letter: "D", text: "Reflect over the y-axis, then reflect over the x-axis" }
          ],
          correct: "B"
        },
        {
          id: "flip-h",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Where does H(3, 4) go after a reflection over the line y = −1?",
          choices: [
            { letter: "A", text: "(3, −4)" },
            { letter: "B", text: "(3, −5)" },
            { letter: "C", text: "(3, −6)" },
            { letter: "D", text: "(−5, 4)" }
          ],
          correct: "C"
        },
        {
          id: "turn-g",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of G(4, 2) after a rotation of 270° counterclockwise about the origin?",
          choices: [
            { letter: "A", text: "(2, −4)" },
            { letter: "B", text: "(−2, 4)" },
            { letter: "C", text: "(−4, −2)" },
            { letter: "D", text: "(2, 4)" }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "FGHJ is translated by (x, y) → (x + 2, y − 3) and then reflected over the y-axis. Where does J end up?",
          choices: [
            { letter: "A", text: "(1, 0)" },
            { letter: "B", text: "(−3, 0)" },
            { letter: "C", text: "(3, 0)" },
            { letter: "D", text: "(−3, 6)" }
          ],
          correct: "B"
        },
        {
          id: "orient",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "F, G, H, J are in counterclockwise order. Which is true of F′G′H′J′?",
          choices: [
            { letter: "A", text: "It is congruent; F′, G′, H′, J′ run counterclockwise." },
            { letter: "B", text: "It is smaller; F′, G′, H′, J′ run clockwise." },
            { letter: "C", text: "It is not congruent, because it faces another way." },
            { letter: "D", text: "It is congruent; F′, G′, H′, J′ run clockwise." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt3-raid-game-tile",
      family: "GEO",
      mode: "raid",
      title: "A Tile on the Game Board",
      kind: "Transformations · G.RLT.3",
      blurb: "A parallelogram tile slides, flips and turns on a board game's grid.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 146\" role=\"img\" aria-label=\"Coordinate grid with parallelogram PQRS: P at (1, -4), Q at (4, -4), R at (5, -2) and S at (2, -2)\">" +
        "<line class=\"gr\" x1=\"97\" y1=\"10\" x2=\"97\" y2=\"136\"/><line class=\"gr\" x1=\"111\" y1=\"10\" x2=\"111\" y2=\"136\"/><line class=\"gr\" x1=\"125\" y1=\"10\" x2=\"125\" y2=\"136\"/><line class=\"gr\" x1=\"153\" y1=\"10\" x2=\"153\" y2=\"136\"/><line class=\"gr\" x1=\"167\" y1=\"10\" x2=\"167\" y2=\"136\"/><line class=\"gr\" x1=\"181\" y1=\"10\" x2=\"181\" y2=\"136\"/><line class=\"gr\" x1=\"195\" y1=\"10\" x2=\"195\" y2=\"136\"/><line class=\"gr\" x1=\"209\" y1=\"10\" x2=\"209\" y2=\"136\"/><line class=\"gr\" x1=\"223\" y1=\"10\" x2=\"223\" y2=\"136\"/>" +
        "<line class=\"gr\" x1=\"97\" y1=\"136\" x2=\"223\" y2=\"136\"/><line class=\"gr\" x1=\"97\" y1=\"122\" x2=\"223\" y2=\"122\"/><line class=\"gr\" x1=\"97\" y1=\"108\" x2=\"223\" y2=\"108\"/><line class=\"gr\" x1=\"97\" y1=\"94\" x2=\"223\" y2=\"94\"/><line class=\"gr\" x1=\"97\" y1=\"80\" x2=\"223\" y2=\"80\"/><line class=\"gr\" x1=\"97\" y1=\"52\" x2=\"223\" y2=\"52\"/><line class=\"gr\" x1=\"97\" y1=\"38\" x2=\"223\" y2=\"38\"/><line class=\"gr\" x1=\"97\" y1=\"24\" x2=\"223\" y2=\"24\"/><line class=\"gr\" x1=\"97\" y1=\"10\" x2=\"223\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"97\" y1=\"66\" x2=\"223\" y2=\"66\"/><line class=\"ax\" x1=\"139\" y1=\"136\" x2=\"139\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"111\" y=\"79\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"195\" y=\"79\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"135\" y=\"42\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"135\" y=\"98\" text-anchor=\"end\">−2</text><text class=\"sm\" x=\"135\" y=\"126\" text-anchor=\"end\">−4</text><text class=\"sm\" x=\"227\" y=\"70\">x</text><text class=\"sm\" x=\"144\" y=\"20\">y</text>" +
        "<polygon class=\"sh\" points=\"153,122 195,122 209,94 167,94\"/>" +
        "<circle class=\"dt\" cx=\"153\" cy=\"122\" r=\"3\"/><circle class=\"dt\" cx=\"195\" cy=\"122\" r=\"3\"/><circle class=\"dt\" cx=\"209\" cy=\"94\" r=\"3\"/><circle class=\"dt\" cx=\"167\" cy=\"94\" r=\"3\"/>" +
        "<text x=\"148\" y=\"137\" text-anchor=\"end\">P</text><text x=\"200\" y=\"137\">Q</text><text x=\"217\" y=\"99\">R</text><text x=\"162\" y=\"89\" text-anchor=\"end\">S</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A board game is played on a coordinate grid. A game tile is parallelogram <strong>PQRS</strong> with P(1, −4), Q(4, −4), R(5, −2) and S(2, −2).</p>",
      claims: [
        {
          id: "slide-s",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A player moves the tile by (x, y) → (x − 6, y + 5). What is the image of S?",
          choices: [
            { letter: "A", text: "(8, −7)" },
            { letter: "B", text: "(−4, 3)" },
            { letter: "C", text: "(−4, −2)" },
            { letter: "D", text: "(7, −8)" }
          ],
          correct: "B"
        },
        {
          id: "flip-p",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of P after a reflection over the y-axis?",
          choices: [
            { letter: "A", text: "(−1, −4)" },
            { letter: "B", text: "(1, 4)" },
            { letter: "C", text: "(−1, 4)" },
            { letter: "D", text: "(−4, 1)" }
          ],
          correct: "A"
        },
        {
          id: "turn-r",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of R after a rotation of 180° about the origin?",
          choices: [
            { letter: "A", text: "(5, 2)" },
            { letter: "B", text: "(−5, −2)" },
            { letter: "C", text: "(2, 5)" },
            { letter: "D", text: "(−5, 2)" }
          ],
          correct: "D"
        },
        {
          id: "rule",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "On another turn, the tile slides so that Q lands on (1, 2). Which rule describes the slide?",
          choices: [
            { letter: "A", text: "(x, y) → (x + 3, y − 6)" },
            { letter: "B", text: "(x, y) → (x + 1, y + 2)" },
            { letter: "C", text: "(x, y) → (x − 3, y + 6)" },
            { letter: "D", text: "(x, y) → (x − 3, y − 6)" }
          ],
          correct: "C"
        },
        {
          id: "symmetry",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which describes the symmetry of parallelogram PQRS?",
          choices: [
            { letter: "A", text: "No lines of symmetry; rotational symmetry of order 2" },
            { letter: "B", text: "2 lines of symmetry; rotational symmetry of order 2" },
            { letter: "C", text: "1 line of symmetry; no rotational symmetry" },
            { letter: "D", text: "No lines of symmetry; no rotational symmetry" }
          ],
          correct: "A"
        },
        {
          id: "shrink",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A Shrink card moves the tile by (x, y) → (0.5x, 0.5y). Which is true of the new tile?",
          choices: [
            { letter: "A", text: "It is congruent to PQRS." },
            { letter: "B", text: "Its sides are half as long; its angles are the same." },
            { letter: "C", text: "Its sides and its angles are half as large." },
            { letter: "D", text: "Its area is half the area of PQRS." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt3-raid-sport-shapes",
      family: "GEO",
      mode: "raid",
      title: "Symmetry in Sports Shapes",
      kind: "Transformations · G.RLT.3",
      blurb: "A soccer-ball hexagon, a rack of bowling pins and a running track.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"Shape 1, a regular hexagon; Shape 2, ten bowling pins in a triangle with rows of 4, 3, 2 and 1; Shape 3, a running track made of two straight sides and two half circles\">" +
        "<polygon class=\"sh2\" points=\"96,64 75,100.37 33,100.37 12,64 33,27.63 75,27.63\"/>" +
        "<circle class=\"sh2\" cx=\"124\" cy=\"34\" r=\"7\"/><circle class=\"sh2\" cx=\"148\" cy=\"34\" r=\"7\"/><circle class=\"sh2\" cx=\"172\" cy=\"34\" r=\"7\"/><circle class=\"sh2\" cx=\"196\" cy=\"34\" r=\"7\"/><circle class=\"sh2\" cx=\"136\" cy=\"54.78\" r=\"7\"/><circle class=\"sh2\" cx=\"160\" cy=\"54.78\" r=\"7\"/><circle class=\"sh2\" cx=\"184\" cy=\"54.78\" r=\"7\"/><circle class=\"sh2\" cx=\"148\" cy=\"75.57\" r=\"7\"/><circle class=\"sh2\" cx=\"172\" cy=\"75.57\" r=\"7\"/><circle class=\"sh2\" cx=\"160\" cy=\"96.35\" r=\"7\"/>" +
        "<path class=\"sh\" d=\"M244 36 H280 A28 28 0 0 1 280 92 H244 A28 28 0 0 1 244 36 Z\"/><path class=\"ln\" d=\"M244 47 H280 A17 17 0 0 1 280 81 H244 A17 17 0 0 1 244 47 Z\"/>" +
        "<text class=\"sm\" x=\"54\" y=\"132\" text-anchor=\"middle\">Shape 1</text><text class=\"sm\" x=\"160\" y=\"132\" text-anchor=\"middle\">Shape 2</text><text class=\"sm\" x=\"262\" y=\"132\" text-anchor=\"middle\">Shape 3</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\"><strong>Shape 1</strong> is a regular hexagon from a soccer ball. <strong>Shape 2</strong> is the triangle of 10 bowling pins, seen from above. <strong>Shape 3</strong> is a running track: two equal, parallel straight sides joined by two half circles.</p>",
      claims: [
        {
          id: "hex-lines",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "How many lines of symmetry does Shape 1 have?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "12" },
            { letter: "C", text: "6" },
            { letter: "D", text: "2" }
          ],
          correct: "C"
        },
        {
          id: "hex-turn",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the smallest angle of rotation, about its center, that maps Shape 1 onto itself?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "30°" },
            { letter: "C", text: "180°" },
            { letter: "D", text: "60°" }
          ],
          correct: "D"
        },
        {
          id: "pins-order",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the order of rotational symmetry of Shape 2?",
          choices: [
            { letter: "A", text: "10" },
            { letter: "B", text: "3" },
            { letter: "C", text: "1" },
            { letter: "D", text: "6" }
          ],
          correct: "B"
        },
        {
          id: "track",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which describes the symmetry of Shape 3?",
          choices: [
            { letter: "A", text: "Both line and rotational symmetry" },
            { letter: "B", text: "Line symmetry only" },
            { letter: "C", text: "Rotational symmetry only" },
            { letter: "D", text: "Neither kind of symmetry" }
          ],
          correct: "A"
        },
        {
          id: "hex-not",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which rotation about its center does NOT map Shape 1 onto itself?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "180°" },
            { letter: "C", text: "240°" },
            { letter: "D", text: "90°" }
          ],
          correct: "D"
        },
        {
          id: "pins-photo",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A photo of Shape 2 is enlarged by a dilation with scale factor 2. How many lines of symmetry does the enlarged shape have?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "1" },
            { letter: "C", text: "3" },
            { letter: "D", text: "0" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt3-raid-skate-ramp",
      family: "GEO",
      mode: "raid",
      title: "The Skate Park Ramp",
      kind: "Transformations · G.RLT.3",
      blurb: "A right-triangle ramp reflected over diagonal lines and turned about the origin.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 132\" role=\"img\" aria-label=\"Coordinate grid with right triangle DEF: D at (-5, 1), E at (-1, 1) and F at (-1, 4), with the right angle at E\">" +
        "<line class=\"gr\" x1=\"72\" y1=\"10\" x2=\"72\" y2=\"122\"/><line class=\"gr\" x1=\"88\" y1=\"10\" x2=\"88\" y2=\"122\"/><line class=\"gr\" x1=\"104\" y1=\"10\" x2=\"104\" y2=\"122\"/><line class=\"gr\" x1=\"120\" y1=\"10\" x2=\"120\" y2=\"122\"/><line class=\"gr\" x1=\"136\" y1=\"10\" x2=\"136\" y2=\"122\"/><line class=\"gr\" x1=\"152\" y1=\"10\" x2=\"152\" y2=\"122\"/><line class=\"gr\" x1=\"184\" y1=\"10\" x2=\"184\" y2=\"122\"/><line class=\"gr\" x1=\"200\" y1=\"10\" x2=\"200\" y2=\"122\"/><line class=\"gr\" x1=\"216\" y1=\"10\" x2=\"216\" y2=\"122\"/><line class=\"gr\" x1=\"232\" y1=\"10\" x2=\"232\" y2=\"122\"/><line class=\"gr\" x1=\"248\" y1=\"10\" x2=\"248\" y2=\"122\"/>" +
        "<line class=\"gr\" x1=\"72\" y1=\"122\" x2=\"248\" y2=\"122\"/><line class=\"gr\" x1=\"72\" y1=\"106\" x2=\"248\" y2=\"106\"/><line class=\"gr\" x1=\"72\" y1=\"74\" x2=\"248\" y2=\"74\"/><line class=\"gr\" x1=\"72\" y1=\"58\" x2=\"248\" y2=\"58\"/><line class=\"gr\" x1=\"72\" y1=\"42\" x2=\"248\" y2=\"42\"/><line class=\"gr\" x1=\"72\" y1=\"26\" x2=\"248\" y2=\"26\"/><line class=\"gr\" x1=\"72\" y1=\"10\" x2=\"248\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"72\" y1=\"90\" x2=\"248\" y2=\"90\"/><line class=\"ax\" x1=\"168\" y1=\"122\" x2=\"168\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"104\" y=\"103\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"200\" y=\"103\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"232\" y=\"103\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"172\" y=\"62\">2</text><text class=\"sm\" x=\"252\" y=\"94\">x</text><text class=\"sm\" x=\"173\" y=\"20\">y</text>" +
        "<polygon class=\"sh\" points=\"88,74 152,74 152,26\"/>" +
        "<path class=\"thin\" d=\"M144 74 V66 H152\"/>" +
        "<circle class=\"dt\" cx=\"88\" cy=\"74\" r=\"3\"/><circle class=\"dt\" cx=\"152\" cy=\"74\" r=\"3\"/><circle class=\"dt\" cx=\"152\" cy=\"26\" r=\"3\"/>" +
        "<text x=\"80\" y=\"79\" text-anchor=\"end\">D</text><text x=\"157\" y=\"89\">E</text><text x=\"152\" y=\"19\" text-anchor=\"middle\">F</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a skate park plan, a ramp's footprint is right triangle <strong>DEF</strong> with D(−5, 1), E(−1, 1) and F(−1, 4). The right angle is at E.</p>",
      claims: [
        {
          id: "over-yx",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of F after a reflection over the line y = x?",
          choices: [
            { letter: "A", text: "(−4, 1)" },
            { letter: "B", text: "(1, 4)" },
            { letter: "C", text: "(−1, −4)" },
            { letter: "D", text: "(4, −1)" }
          ],
          correct: "D"
        },
        {
          id: "over-ynx",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of D after a reflection over the line y = −x?",
          choices: [
            { letter: "A", text: "(1, −5)" },
            { letter: "B", text: "(5, −1)" },
            { letter: "C", text: "(−1, 5)" },
            { letter: "D", text: "(−1, −5)" }
          ],
          correct: "C"
        },
        {
          id: "turn-f",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of F after a rotation of 90° counterclockwise about the origin?",
          choices: [
            { letter: "A", text: "(−4, −1)" },
            { letter: "B", text: "(4, 1)" },
            { letter: "C", text: "(1, −4)" },
            { letter: "D", text: "(−4, 1)" }
          ],
          correct: "A"
        },
        {
          id: "stretch",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A builder tries the rule (x, y) → (x + 4, 2y) on the ramp. Is the new footprint congruent to △DEF?",
          choices: [
            { letter: "A", text: "Yes; adding 4 to x is a translation." },
            { letter: "B", text: "No; it gets taller but not wider." },
            { letter: "C", text: "Yes; it is still a right triangle." },
            { letter: "D", text: "No; it is a dilation by scale factor 2." }
          ],
          correct: "B"
        },
        {
          id: "which",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A second ramp has D′(1, 5), E′(1, 1) and F′(4, 1). Which single transformation maps △DEF to △D′E′F′?",
          choices: [
            { letter: "A", text: "Rotation of 90° counterclockwise about the origin" },
            { letter: "B", text: "Reflection over the line y = x" },
            { letter: "C", text: "Rotation of 90° clockwise about the origin" },
            { letter: "D", text: "Reflection over the x-axis" }
          ],
          correct: "C"
        },
        {
          id: "slide",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The ramp is moved by a translation so that E lands at (3, −2). Where does D land?",
          choices: [
            { letter: "A", text: "(−1, −2)" },
            { letter: "B", text: "(−9, 4)" },
            { letter: "C", text: "(−1, 4)" },
            { letter: "D", text: "(−2, −1)" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-raid-home-plate",
      family: "GEO",
      mode: "raid",
      title: "Home Plate on the Scoreboard",
      kind: "Transformations · G.RLT.3",
      blurb: "A home-plate pentagon grows and shrinks about the origin.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 148\" role=\"img\" aria-label=\"Coordinate grid with pentagon ABCDE shaped like home plate: A at (-2, 4), B at (2, 4), C at (2, 2), D at (0, 0) and E at (-2, 2)\">" +
        "<line class=\"gr\" x1=\"96\" y1=\"10\" x2=\"96\" y2=\"138\"/><line class=\"gr\" x1=\"112\" y1=\"10\" x2=\"112\" y2=\"138\"/><line class=\"gr\" x1=\"128\" y1=\"10\" x2=\"128\" y2=\"138\"/><line class=\"gr\" x1=\"144\" y1=\"10\" x2=\"144\" y2=\"138\"/><line class=\"gr\" x1=\"176\" y1=\"10\" x2=\"176\" y2=\"138\"/><line class=\"gr\" x1=\"192\" y1=\"10\" x2=\"192\" y2=\"138\"/><line class=\"gr\" x1=\"208\" y1=\"10\" x2=\"208\" y2=\"138\"/><line class=\"gr\" x1=\"224\" y1=\"10\" x2=\"224\" y2=\"138\"/>" +
        "<line class=\"gr\" x1=\"96\" y1=\"138\" x2=\"224\" y2=\"138\"/><line class=\"gr\" x1=\"96\" y1=\"106\" x2=\"224\" y2=\"106\"/><line class=\"gr\" x1=\"96\" y1=\"90\" x2=\"224\" y2=\"90\"/><line class=\"gr\" x1=\"96\" y1=\"74\" x2=\"224\" y2=\"74\"/><line class=\"gr\" x1=\"96\" y1=\"58\" x2=\"224\" y2=\"58\"/><line class=\"gr\" x1=\"96\" y1=\"42\" x2=\"224\" y2=\"42\"/><line class=\"gr\" x1=\"96\" y1=\"26\" x2=\"224\" y2=\"26\"/><line class=\"gr\" x1=\"96\" y1=\"10\" x2=\"224\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"96\" y1=\"122\" x2=\"224\" y2=\"122\"/><line class=\"ax\" x1=\"160\" y1=\"138\" x2=\"160\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"96\" y=\"135\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"128\" y=\"135\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"156\" y=\"30\" text-anchor=\"end\">6</text><text class=\"sm\" x=\"228\" y=\"126\">x</text><text class=\"sm\" x=\"165\" y=\"20\">y</text>" +
        "<polygon class=\"sh2\" points=\"128,58 192,58 192,90 160,122 128,90\"/>" +
        "<circle class=\"dt\" cx=\"128\" cy=\"58\" r=\"3\"/><circle class=\"dt\" cx=\"192\" cy=\"58\" r=\"3\"/><circle class=\"dt\" cx=\"192\" cy=\"90\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"122\" r=\"3\"/><circle class=\"dt\" cx=\"128\" cy=\"90\" r=\"3\"/>" +
        "<text x=\"123\" y=\"53\" text-anchor=\"end\">A</text><text x=\"197\" y=\"53\">B</text><text x=\"200\" y=\"95\">C</text><text x=\"165\" y=\"137\">D</text><text x=\"120\" y=\"95\" text-anchor=\"end\">E</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A scoreboard draws home plate as pentagon <strong>ABCDE</strong>: A(−2, 4), B(2, 4), C(2, 2), D(0, 0) and E(−2, 2). Its perimeter is 8 + 4√2 units and its area is 12 square units. The animation dilates it about the origin.</p>",
      claims: [
        {
          id: "image-c",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Under a dilation with scale factor 3/2 centered at the origin, what is the image of C?",
          choices: [
            { letter: "A", text: "(3, 3)" },
            { letter: "B", text: "(3.5, 3.5)" },
            { letter: "C", text: "(3, 2)" },
            { letter: "D", text: "(6, 6)" }
          ],
          correct: "A"
        },
        {
          id: "fixed",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Under a dilation with scale factor 3/2 centered at the origin, which vertices are their own images?",
          choices: [
            { letter: "A", text: "None of them" },
            { letter: "B", text: "D only" },
            { letter: "C", text: "C and E" },
            { letter: "D", text: "A and B" }
          ],
          correct: "B"
        },
        {
          id: "perimeter",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the perimeter of the image of ABCDE under a dilation with scale factor 3/2 centered at the origin?",
          choices: [
            { letter: "A", text: "8 + 4√2 units" },
            { letter: "B", text: "18 + 9√2 units" },
            { letter: "C", text: "12 + 4√2 units" },
            { letter: "D", text: "12 + 6√2 units" }
          ],
          correct: "D"
        },
        {
          id: "area",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the area of the image of ABCDE under a dilation with scale factor 1/2 centered at the origin?",
          choices: [
            { letter: "A", text: "6 square units" },
            { letter: "B", text: "12 square units" },
            { letter: "C", text: "3 square units" },
            { letter: "D", text: "48 square units" }
          ],
          correct: "C"
        },
        {
          id: "line",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which line is a line of symmetry of ABCDE?",
          choices: [
            { letter: "A", text: "The x-axis" },
            { letter: "B", text: "The line y = 2" },
            { letter: "C", text: "The line y = x" },
            { letter: "D", text: "The y-axis" }
          ],
          correct: "D"
        },
        {
          id: "shrink",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A dilation centered at the origin makes a small plate whose image of side AB is 1 unit long. What is the scale factor?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "1/4" },
            { letter: "C", text: "3" },
            { letter: "D", text: "1/16" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt3-raid-block-game",
      family: "GEO",
      mode: "raid",
      title: "The Falling-Block Game",
      kind: "Transformations · G.RLT.3",
      blurb: "An L piece turns about the origin, but can it ever become a J?",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Coordinate grid with an L-shaped piece of four unit squares, hexagon ABCDEF: A at (1, 1), B at (3, 1), C at (3, 2), D at (2, 2), E at (2, 4) and F at (1, 4)\">" +
        "<line class=\"gr\" x1=\"80\" y1=\"10\" x2=\"80\" y2=\"150\"/><line class=\"gr\" x1=\"100\" y1=\"10\" x2=\"100\" y2=\"150\"/><line class=\"gr\" x1=\"120\" y1=\"10\" x2=\"120\" y2=\"150\"/><line class=\"gr\" x1=\"160\" y1=\"10\" x2=\"160\" y2=\"150\"/><line class=\"gr\" x1=\"180\" y1=\"10\" x2=\"180\" y2=\"150\"/><line class=\"gr\" x1=\"200\" y1=\"10\" x2=\"200\" y2=\"150\"/><line class=\"gr\" x1=\"220\" y1=\"10\" x2=\"220\" y2=\"150\"/><line class=\"gr\" x1=\"240\" y1=\"10\" x2=\"240\" y2=\"150\"/>" +
        "<line class=\"gr\" x1=\"80\" y1=\"150\" x2=\"240\" y2=\"150\"/><line class=\"gr\" x1=\"80\" y1=\"130\" x2=\"240\" y2=\"130\"/><line class=\"gr\" x1=\"80\" y1=\"90\" x2=\"240\" y2=\"90\"/><line class=\"gr\" x1=\"80\" y1=\"70\" x2=\"240\" y2=\"70\"/><line class=\"gr\" x1=\"80\" y1=\"50\" x2=\"240\" y2=\"50\"/><line class=\"gr\" x1=\"80\" y1=\"30\" x2=\"240\" y2=\"30\"/><line class=\"gr\" x1=\"80\" y1=\"10\" x2=\"240\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"80\" y1=\"110\" x2=\"240\" y2=\"110\"/><line class=\"ax\" x1=\"140\" y1=\"150\" x2=\"140\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"100\" y=\"123\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"180\" y=\"123\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"220\" y=\"123\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"136\" y=\"74\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"244\" y=\"114\">x</text><text class=\"sm\" x=\"135\" y=\"20\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh\" points=\"160,90 200,90 200,70 180,70 180,30 160,30\"/>" +
        "<path class=\"thin\" d=\"M160 70 H180 M160 50 H180 M180 90 V70\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"90\" r=\"3\"/><circle class=\"dt\" cx=\"200\" cy=\"90\" r=\"3\"/><circle class=\"dt\" cx=\"200\" cy=\"70\" r=\"3\"/><circle class=\"dt\" cx=\"180\" cy=\"70\" r=\"3\"/><circle class=\"dt\" cx=\"180\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"30\" r=\"3\"/>" +
        "<text x=\"155\" y=\"105\" text-anchor=\"end\">A</text><text x=\"208\" y=\"95\">B</text><text x=\"208\" y=\"75\">C</text><text x=\"185\" y=\"65\">D</text><text x=\"185\" y=\"25\">E</text><text x=\"155\" y=\"25\" text-anchor=\"end\">F</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">In a falling-block video game, an L piece is hexagon <strong>ABCDEF</strong> with A(1, 1), B(3, 1), C(3, 2), D(2, 2), E(2, 4) and F(1, 4). The game turns pieces about the origin.</p>",
      claims: [
        {
          id: "cw-f",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of F after a rotation of 90° clockwise about the origin?",
          choices: [
            { letter: "A", text: "(−4, 1)" },
            { letter: "B", text: "(−1, −4)" },
            { letter: "C", text: "(4, −1)" },
            { letter: "D", text: "(4, 1)" }
          ],
          correct: "C"
        },
        {
          id: "half-b",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of B after a rotation of 180° about the origin?",
          choices: [
            { letter: "A", text: "(−3, −1)" },
            { letter: "B", text: "(−3, 1)" },
            { letter: "C", text: "(3, −1)" },
            { letter: "D", text: "(−1, −3)" }
          ],
          correct: "A"
        },
        {
          id: "which-turn",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The game shows the piece at A′(−1, 1), B′(−1, 3), C′(−2, 3), D′(−2, 2), E′(−4, 2) and F′(−4, 1). Which rotation about the origin maps ABCDEF to A′B′C′D′E′F′?",
          choices: [
            { letter: "A", text: "90° clockwise" },
            { letter: "B", text: "270° clockwise" },
            { letter: "C", text: "180°" },
            { letter: "D", text: "270° counterclockwise" }
          ],
          correct: "B"
        },
        {
          id: "mirror",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A player wants the mirror image of the L piece (a J piece). Can a rotation about the origin make it?",
          choices: [
            { letter: "A", text: "Yes; a 180° rotation flips it over." },
            { letter: "B", text: "Yes; a 90° rotation flips it over." },
            { letter: "C", text: "No; a rotation changes its size." },
            { letter: "D", text: "No; a rotation never flips a piece over." }
          ],
          correct: "D"
        },
        {
          id: "drop",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The piece is rotated 180° about the origin and then translated by (x, y) → (x + 4, y). Where does D end up?",
          choices: [
            { letter: "A", text: "(2, −2)" },
            { letter: "B", text: "(−6, −2)" },
            { letter: "C", text: "(−2, −2)" },
            { letter: "D", text: "(−2, 2)" }
          ],
          correct: "A"
        },
        {
          id: "symmetry",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which describes the symmetry of the L piece?",
          choices: [
            { letter: "A", text: "One line of symmetry, the line y = x" },
            { letter: "B", text: "Rotational symmetry of order 4" },
            { letter: "C", text: "No line symmetry and no rotational symmetry" },
            { letter: "D", text: "One line of symmetry, the line x = 2" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt3-raid-kickboard",
      family: "GEO",
      mode: "raid",
      title: "The Kickboard and the Lane Rope",
      kind: "Transformations · G.RLT.3",
      blurb: "A kickboard reflected over a lane rope and other lines of the pool grid.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 146\" role=\"img\" aria-label=\"Coordinate grid with pentagon KLMNP: K at (-5, 1), L at (-2, 1), M at (-1, 2), N at (-2, 3) and P at (-5, 3); a dashed lane rope runs along the line x = 1\">" +
        "<line class=\"gr\" x1=\"79\" y1=\"10\" x2=\"79\" y2=\"136\"/><line class=\"gr\" x1=\"97\" y1=\"10\" x2=\"97\" y2=\"136\"/><line class=\"gr\" x1=\"115\" y1=\"10\" x2=\"115\" y2=\"136\"/><line class=\"gr\" x1=\"133\" y1=\"10\" x2=\"133\" y2=\"136\"/><line class=\"gr\" x1=\"151\" y1=\"10\" x2=\"151\" y2=\"136\"/><line class=\"gr\" x1=\"169\" y1=\"10\" x2=\"169\" y2=\"136\"/><line class=\"gr\" x1=\"205\" y1=\"10\" x2=\"205\" y2=\"136\"/><line class=\"gr\" x1=\"223\" y1=\"10\" x2=\"223\" y2=\"136\"/><line class=\"gr\" x1=\"241\" y1=\"10\" x2=\"241\" y2=\"136\"/>" +
        "<line class=\"gr\" x1=\"79\" y1=\"136\" x2=\"241\" y2=\"136\"/><line class=\"gr\" x1=\"79\" y1=\"118\" x2=\"241\" y2=\"118\"/><line class=\"gr\" x1=\"79\" y1=\"82\" x2=\"241\" y2=\"82\"/><line class=\"gr\" x1=\"79\" y1=\"64\" x2=\"241\" y2=\"64\"/><line class=\"gr\" x1=\"79\" y1=\"46\" x2=\"241\" y2=\"46\"/><line class=\"gr\" x1=\"79\" y1=\"28\" x2=\"241\" y2=\"28\"/><line class=\"gr\" x1=\"79\" y1=\"10\" x2=\"241\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"79\" y1=\"100\" x2=\"241\" y2=\"100\"/><line class=\"ax\" x1=\"187\" y1=\"136\" x2=\"187\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"115\" y=\"113\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"151\" y=\"113\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"223\" y=\"113\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"191\" y=\"32\">4</text><text class=\"sm\" x=\"245\" y=\"104\">x</text><text class=\"sm\" x=\"182\" y=\"20\" text-anchor=\"end\">y</text>" +
        "<line class=\"ac dash\" x1=\"205\" y1=\"10\" x2=\"205\" y2=\"136\"/>" +
        "<text class=\"sm acc\" x=\"210\" y=\"22\">x = 1</text>" +
        "<polygon class=\"sh2\" points=\"97,82 151,82 169,64 151,46 97,46\"/>" +
        "<circle class=\"dt\" cx=\"97\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"151\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"169\" cy=\"64\" r=\"3\"/><circle class=\"dt\" cx=\"151\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"97\" cy=\"46\" r=\"3\"/>" +
        "<text x=\"92\" y=\"97\" text-anchor=\"end\">K</text><text x=\"156\" y=\"97\">L</text><text x=\"177\" y=\"69\">M</text><text x=\"156\" y=\"41\">N</text><text x=\"92\" y=\"41\" text-anchor=\"end\">P</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A pool map uses a grid in meters. A kickboard is pentagon <strong>KLMNP</strong> with K(−5, 1), L(−2, 1), M(−1, 2), N(−2, 3) and P(−5, 3). A lane rope lies along the line x = 1.</p>",
      claims: [
        {
          id: "over-rope",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of K after a reflection over the lane rope, x = 1?",
          choices: [
            { letter: "A", text: "(5, 1)" },
            { letter: "B", text: "(7, 1)" },
            { letter: "C", text: "(−3, 1)" },
            { letter: "D", text: "(6, 1)" }
          ],
          correct: "B"
        },
        {
          id: "over-y",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of N after a reflection over the line y = −1?",
          choices: [
            { letter: "A", text: "(−2, −3)" },
            { letter: "B", text: "(−2, 1)" },
            { letter: "C", text: "(4, 3)" },
            { letter: "D", text: "(−2, −5)" }
          ],
          correct: "D"
        },
        {
          id: "two-ropes",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The kickboard is reflected over the line x = 1 and then over the line x = 4. Which single transformation has the same result?",
          choices: [
            { letter: "A", text: "A translation 3 units right" },
            { letter: "B", text: "A translation 6 units left" },
            { letter: "C", text: "A translation 6 units right" },
            { letter: "D", text: "A reflection over the line x = 5" }
          ],
          correct: "C"
        },
        {
          id: "find-line",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Over which line would you reflect the kickboard so that K lands on (3, 1)?",
          choices: [
            { letter: "A", text: "x = −1" },
            { letter: "B", text: "x = 4" },
            { letter: "C", text: "the y-axis" },
            { letter: "D", text: "x = −2" }
          ],
          correct: "A"
        },
        {
          id: "line",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which line is a line of symmetry of kickboard KLMNP?",
          choices: [
            { letter: "A", text: "x = −3" },
            { letter: "B", text: "x = 1" },
            { letter: "C", text: "y = 2" },
            { letter: "D", text: "y = 1" }
          ],
          correct: "C"
        },
        {
          id: "kept",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which property does a reflection keep but a dilation with scale factor 2 does NOT keep?",
          choices: [
            { letter: "A", text: "Angle measures" },
            { letter: "B", text: "Parallel sides stay parallel" },
            { letter: "C", text: "Clockwise order of the vertices" },
            { letter: "D", text: "Side lengths" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt3-raid-archery",
      family: "GEO",
      mode: "raid",
      title: "Moving the Archery Targets",
      kind: "Transformations · G.RLT.3",
      blurb: "A target stand is flipped and slid across the range map.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"Coordinate grid with triangle TUV: T at (2, 3), U at (3, 5), V at (5, 2); and triangle T'U'V': T' at (-2, -3), U' at (-3, -1), V' at (-5, -4)\">" +
        "<line class=\"gr\" x1=\"88\" y1=\"10\" x2=\"88\" y2=\"142\"/><line class=\"gr\" x1=\"100\" y1=\"10\" x2=\"100\" y2=\"142\"/><line class=\"gr\" x1=\"112\" y1=\"10\" x2=\"112\" y2=\"142\"/><line class=\"gr\" x1=\"124\" y1=\"10\" x2=\"124\" y2=\"142\"/><line class=\"gr\" x1=\"136\" y1=\"10\" x2=\"136\" y2=\"142\"/><line class=\"gr\" x1=\"148\" y1=\"10\" x2=\"148\" y2=\"142\"/><line class=\"gr\" x1=\"172\" y1=\"10\" x2=\"172\" y2=\"142\"/><line class=\"gr\" x1=\"184\" y1=\"10\" x2=\"184\" y2=\"142\"/><line class=\"gr\" x1=\"196\" y1=\"10\" x2=\"196\" y2=\"142\"/><line class=\"gr\" x1=\"208\" y1=\"10\" x2=\"208\" y2=\"142\"/><line class=\"gr\" x1=\"220\" y1=\"10\" x2=\"220\" y2=\"142\"/><line class=\"gr\" x1=\"232\" y1=\"10\" x2=\"232\" y2=\"142\"/>" +
        "<line class=\"gr\" x1=\"88\" y1=\"142\" x2=\"232\" y2=\"142\"/><line class=\"gr\" x1=\"88\" y1=\"130\" x2=\"232\" y2=\"130\"/><line class=\"gr\" x1=\"88\" y1=\"118\" x2=\"232\" y2=\"118\"/><line class=\"gr\" x1=\"88\" y1=\"106\" x2=\"232\" y2=\"106\"/><line class=\"gr\" x1=\"88\" y1=\"94\" x2=\"232\" y2=\"94\"/><line class=\"gr\" x1=\"88\" y1=\"70\" x2=\"232\" y2=\"70\"/><line class=\"gr\" x1=\"88\" y1=\"58\" x2=\"232\" y2=\"58\"/><line class=\"gr\" x1=\"88\" y1=\"46\" x2=\"232\" y2=\"46\"/><line class=\"gr\" x1=\"88\" y1=\"34\" x2=\"232\" y2=\"34\"/><line class=\"gr\" x1=\"88\" y1=\"22\" x2=\"232\" y2=\"22\"/><line class=\"gr\" x1=\"88\" y1=\"10\" x2=\"232\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"88\" y1=\"82\" x2=\"232\" y2=\"82\"/><line class=\"ax\" x1=\"160\" y1=\"142\" x2=\"160\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"184\" y=\"95\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"208\" y=\"95\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"156\" y=\"62\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"156\" y=\"38\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"236\" y=\"86\">x</text><text class=\"sm\" x=\"165\" y=\"20\">y</text>" +
        "<polygon class=\"sh2\" points=\"184,46 196,22 220,58\"/>" +
        "<polygon class=\"sh\" points=\"136,118 124,94 100,130\"/>" +
        "<circle class=\"dt\" cx=\"184\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"196\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"220\" cy=\"58\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"136\" cy=\"118\" r=\"3\"/><circle class=\"dt\" cx=\"124\" cy=\"94\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"130\" r=\"3\"/>" +
        "<text x=\"176\" y=\"51\" text-anchor=\"end\">T</text><text x=\"196\" y=\"15\" text-anchor=\"middle\">U</text><text x=\"228\" y=\"63\">V</text>" +
        "<text x=\"144\" y=\"123\">T′</text><text x=\"116\" y=\"99\" text-anchor=\"end\">U′</text><text x=\"100\" y=\"147\" text-anchor=\"middle\">V′</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On the archery range map, a target stand is <strong>△TUV</strong> with T(2, 3), U(3, 5) and V(5, 2). After the range is rearranged, the stand is <strong>△T′U′V′</strong> with T′(−2, −3), U′(−3, −1) and V′(−5, −4).</p>",
      claims: [
        {
          id: "compose",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which composition maps △TUV to △T′U′V′?",
          choices: [
            { letter: "A", text: "Reflect over the y-axis, then translate 6 units down" },
            { letter: "B", text: "Reflect over the x-axis, then translate 6 units left" },
            { letter: "C", text: "Translate 6 units down, then reflect over the x-axis" },
            { letter: "D", text: "Reflect over the y-axis, then translate 6 units up" }
          ],
          correct: "A"
        },
        {
          id: "orient",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which statement about △T′U′V′ is true?",
          choices: [
            { letter: "A", text: "It is congruent to △TUV, with the same orientation." },
            { letter: "B", text: "It is similar to △TUV, but smaller." },
            { letter: "C", text: "It is congruent to △TUV, with opposite orientation." },
            { letter: "D", text: "It is a 180° rotation of △TUV about the origin." }
          ],
          correct: "C"
        },
        {
          id: "turn-u",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of U after a rotation of 270° clockwise about the origin?",
          choices: [
            { letter: "A", text: "(5, −3)" },
            { letter: "B", text: "(−3, −5)" },
            { letter: "C", text: "(3, −5)" },
            { letter: "D", text: "(−5, 3)" }
          ],
          correct: "D"
        },
        {
          id: "dil-slide",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "△TUV is dilated by scale factor 1/2 centered at the origin, then translated by (x, y) → (x + 3, y − 1). Where does V end up?",
          choices: [
            { letter: "A", text: "(4, 0.5)" },
            { letter: "B", text: "(5.5, 0)" },
            { letter: "C", text: "(13, 3)" },
            { letter: "D", text: "(2.5, 1)" }
          ],
          correct: "B"
        },
        {
          id: "two-flips",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Reflecting △TUV over the x-axis and then over the y-axis gives the same image as which single transformation?",
          choices: [
            { letter: "A", text: "Reflection over the line y = x" },
            { letter: "B", text: "Rotation of 180° about the origin" },
            { letter: "C", text: "Rotation of 90° counterclockwise about the origin" },
            { letter: "D", text: "Reflection over the line y = −x" }
          ],
          correct: "B"
        },
        {
          id: "error",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Kai writes the rule for a 90° clockwise rotation about the origin as (x, y) → (−y, x). What is wrong?",
          choices: [
            { letter: "A", text: "It turns counterclockwise; T should go to (3, −2)." },
            { letter: "B", text: "Nothing; T goes to (−3, 2)." },
            { letter: "C", text: "Both signs change; T should go to (−3, −2)." },
            { letter: "D", text: "Only swap; T should go to (3, 2)." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-raid-esports-logo",
      family: "GEO",
      mode: "raid",
      title: "The Esports Team Logo",
      kind: "Transformations · G.RLT.3",
      blurb: "A four-blade pinwheel logo: turns, mirrors and a jersey-size copy.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 148\" role=\"img\" aria-label=\"Coordinate grid with a pinwheel logo of four right triangles meeting at the origin O; one blade has vertices O (0, 0), P (3, 0) and Q (3, 2)\">" +
        "<line class=\"gr\" x1=\"96\" y1=\"10\" x2=\"96\" y2=\"138\"/><line class=\"gr\" x1=\"112\" y1=\"10\" x2=\"112\" y2=\"138\"/><line class=\"gr\" x1=\"128\" y1=\"10\" x2=\"128\" y2=\"138\"/><line class=\"gr\" x1=\"144\" y1=\"10\" x2=\"144\" y2=\"138\"/><line class=\"gr\" x1=\"176\" y1=\"10\" x2=\"176\" y2=\"138\"/><line class=\"gr\" x1=\"192\" y1=\"10\" x2=\"192\" y2=\"138\"/><line class=\"gr\" x1=\"208\" y1=\"10\" x2=\"208\" y2=\"138\"/><line class=\"gr\" x1=\"224\" y1=\"10\" x2=\"224\" y2=\"138\"/>" +
        "<line class=\"gr\" x1=\"96\" y1=\"138\" x2=\"224\" y2=\"138\"/><line class=\"gr\" x1=\"96\" y1=\"122\" x2=\"224\" y2=\"122\"/><line class=\"gr\" x1=\"96\" y1=\"106\" x2=\"224\" y2=\"106\"/><line class=\"gr\" x1=\"96\" y1=\"90\" x2=\"224\" y2=\"90\"/><line class=\"gr\" x1=\"96\" y1=\"58\" x2=\"224\" y2=\"58\"/><line class=\"gr\" x1=\"96\" y1=\"42\" x2=\"224\" y2=\"42\"/><line class=\"gr\" x1=\"96\" y1=\"26\" x2=\"224\" y2=\"26\"/><line class=\"gr\" x1=\"96\" y1=\"10\" x2=\"224\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"96\" y1=\"74\" x2=\"224\" y2=\"74\"/><line class=\"ax\" x1=\"160\" y1=\"138\" x2=\"160\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"192\" y=\"87\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"164\" y=\"46\">2</text><text class=\"sm\" x=\"228\" y=\"78\">x</text><text class=\"sm\" x=\"155\" y=\"20\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh\" points=\"160,74 208,74 208,42\"/>" +
        "<polygon class=\"sh2\" points=\"160,74 160,26 128,26\"/>" +
        "<polygon class=\"sh2\" points=\"160,74 112,74 112,106\"/>" +
        "<polygon class=\"sh2\" points=\"160,74 160,122 192,122\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"74\" r=\"3\"/><circle class=\"dt\" cx=\"208\" cy=\"74\" r=\"3\"/><circle class=\"dt\" cx=\"208\" cy=\"42\" r=\"3\"/>" +
        "<text x=\"163\" y=\"66\">O</text><text x=\"213\" y=\"89\">P</text><text x=\"213\" y=\"37\">Q</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">An esports team's logo is four congruent right triangles that meet at the origin <strong>O</strong>. One blade is △OPQ with O(0, 0), P(3, 0) and Q(3, 2). The other blades are its images under rotations of 90°, 180° and 270° about O.</p>",
      claims: [
        {
          id: "order",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the order of rotational symmetry of the logo?",
          choices: [
            { letter: "A", text: "1" },
            { letter: "B", text: "2" },
            { letter: "C", text: "8" },
            { letter: "D", text: "4" }
          ],
          correct: "D"
        },
        {
          id: "lines",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "How many lines of symmetry does the logo have?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "0" },
            { letter: "C", text: "2" },
            { letter: "D", text: "1" }
          ],
          correct: "B"
        },
        {
          id: "not-map",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which transformation does NOT map the logo onto itself?",
          choices: [
            { letter: "A", text: "Reflection over the line y = x" },
            { letter: "B", text: "Rotation of 90° clockwise about O" },
            { letter: "C", text: "Rotation of 180° about O" },
            { letter: "D", text: "Rotation of 270° clockwise about O" }
          ],
          correct: "A"
        },
        {
          id: "jersey",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "For a jersey, the logo is dilated by scale factor 1.5 centered at O. What is the image of Q?",
          choices: [
            { letter: "A", text: "(4.5, 3.5)" },
            { letter: "B", text: "(4.5, 2)" },
            { letter: "C", text: "(4.5, 3)" },
            { letter: "D", text: "(6, 4)" }
          ],
          correct: "C"
        },
        {
          id: "mirror",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "For a banner, the logo is reflected over the y-axis. Which is true of the mirrored logo?",
          choices: [
            { letter: "A", text: "It is exactly the same as the logo." },
            { letter: "B", text: "It is the logo turned 90° about O." },
            { letter: "C", text: "It now has 4 lines of symmetry." },
            { letter: "D", text: "It has order 4, but its blades turn the other way." }
          ],
          correct: "D"
        },
        {
          id: "two-moves",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Q(3, 2) is rotated 90° counterclockwise about O and then reflected over the x-axis. Where does Q end up?",
          choices: [
            { letter: "A", text: "(2, 3)" },
            { letter: "B", text: "(−2, −3)" },
            { letter: "C", text: "(−2, 3)" },
            { letter: "D", text: "(−3, 2)" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
