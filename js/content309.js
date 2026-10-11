/* SOL Labyrinth — Geometry game (family GEO), G.RLT.3 (symmetry and transformations), modes ring and worms (v5.20).
   ring (Wolf Ring) packs: art, design, music and making things; worms (Root Worms) packs: nature and the outdoors. Original items only.
   Every key and distractor was computed (gx-309/gen.js); every distractor is a named mistake; grid vertices are exact grid points. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-rlt3-ring-fabric-stamps",
      family: "GEO",
      mode: "ring",
      title: "Stamps for Printing Fabric",
      kind: "Transformations · G.RLT.3",
      blurb: "A ten-point star, a block H and a heart: mirror lines and turns.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 146\" role=\"img\" aria-label=\"Stamp 1, a star with ten equal points; Stamp 2, a block letter H; Stamp 3, a heart\">" +
        "<polygon class=\"sh\" points=\"60,24 53.82,48.98 34.14,32.4 43.82,56.24 18.15,54.4 40,68 18.15,81.6 43.82,79.76 34.14,103.6 53.82,87.02 60,112 66.18,87.02 85.86,103.6 76.18,79.76 101.85,81.6 80,68 101.85,54.4 76.18,56.24 85.86,32.4 66.18,48.98\"/>" +
        "<polygon class=\"sh2\" points=\"130,33 146,33 146,60 174,60 174,33 190,33 190,103 174,103 174,76 146,76 146,103 130,103\"/>" +
        "<polygon class=\"ln\" points=\"262,51.76 262.02,51.43 262.18,50.46 262.6,48.94 263.38,47.01 264.6,44.83 266.3,42.61 268.49,40.53 271.14,38.8 274.16,37.56 277.46,36.94 280.91,37 284.34,37.79 287.61,39.26 290.54,41.37 293,44 294.86,47.06 296.01,50.4 296.4,53.91 296.01,57.5 294.86,61.06 293,64.55 290.54,67.94 287.61,71.2 284.34,74.34 280.91,77.37 277.46,80.32 274.16,83.17 271.14,85.92 268.49,88.55 266.3,91.02 264.6,93.27 263.38,95.24 262.6,96.86 262.18,98.06 262.02,98.81 262,99.06 261.98,98.81 261.82,98.06 261.4,96.86 260.62,95.24 259.4,93.27 257.7,91.02 255.51,88.55 252.86,85.92 249.84,83.17 246.54,80.32 243.09,77.37 239.66,74.34 236.39,71.2 233.46,67.94 231,64.55 229.14,61.06 227.99,57.5 227.6,53.91 227.99,50.4 229.14,47.06 231,44 233.46,41.37 236.39,39.26 239.66,37.79 243.09,37 246.54,36.94 249.84,37.56 252.86,38.8 255.51,40.53 257.7,42.61 259.4,44.83 260.62,47.01 261.4,48.94 261.82,50.46 261.98,51.43\"/>" +
        "<text class=\"sm\" x=\"60\" y=\"134\" text-anchor=\"middle\">Stamp 1</text><text class=\"sm\" x=\"160\" y=\"134\" text-anchor=\"middle\">Stamp 2</text><text class=\"sm\" x=\"262\" y=\"134\" text-anchor=\"middle\">Stamp 3</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A print shop carves three rubber stamps for fabric. <strong>Stamp 1</strong> is a star with ten identical points, equally spaced. <strong>Stamp 2</strong> is a block letter H: its two posts are the same size, and its crossbar is at the middle. <strong>Stamp 3</strong> is a heart.</p>",
      claims: [
        {
          id: "star-lines",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "How many lines of symmetry does Stamp 1 have?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "10" },
            { letter: "C", text: "20" },
            { letter: "D", text: "2" }
          ],
          correct: "B"
        },
        {
          id: "star-turn",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the smallest angle of rotation, about its center, that maps Stamp 1 onto itself?",
          choices: [
            { letter: "A", text: "72°" },
            { letter: "B", text: "36°" },
            { letter: "C", text: "18°" },
            { letter: "D", text: "180°" }
          ],
          correct: "B"
        },
        {
          id: "h-sym",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which describes the symmetry of Stamp 2?",
          choices: [
            { letter: "A", text: "1 line of symmetry; rotational symmetry of order 2" },
            { letter: "B", text: "2 lines of symmetry; no rotational symmetry" },
            { letter: "C", text: "4 lines of symmetry; rotational symmetry of order 4" },
            { letter: "D", text: "2 lines of symmetry; rotational symmetry of order 2" }
          ],
          correct: "D"
        },
        {
          id: "heart-sym",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which describes the symmetry of Stamp 3?",
          choices: [
            { letter: "A", text: "1 line of symmetry; no rotational symmetry" },
            { letter: "B", text: "2 lines of symmetry; no rotational symmetry" },
            { letter: "C", text: "No lines of symmetry; rotational symmetry of order 2" },
            { letter: "D", text: "No lines of symmetry; no rotational symmetry" }
          ],
          correct: "A"
        },
        {
          id: "star-not",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which rotation about its center does NOT map Stamp 1 onto itself?",
          choices: [
            { letter: "A", text: "108°" },
            { letter: "B", text: "144°" },
            { letter: "C", text: "60°" },
            { letter: "D", text: "252°" }
          ],
          correct: "C"
        },
        {
          id: "print",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Pressing a stamp onto fabric prints its mirror image at the same size. Which describes the print compared with the stamp?",
          choices: [
            { letter: "A", text: "A reflection; it is congruent to the stamp." },
            { letter: "B", text: "A rotation; it is congruent to the stamp." },
            { letter: "C", text: "A reflection; it is similar but not congruent." },
            { letter: "D", text: "A translation; it is congruent to the stamp." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-ring-cross-stitch",
      family: "GEO",
      mode: "ring",
      title: "The Cross-Stitch Crown",
      kind: "Transformations · G.RLT.3",
      blurb: "A stitched crown slides, flips and turns on the pattern grid.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 144\" role=\"img\" aria-label=\"Coordinate grid with a cross-stitch crown, polygon ABCDEFG: A at (-6, 1), B at (-2, 1), C at (-2, 4), D at (-3, 2), E at (-4, 4), F at (-5, 2) and G at (-6, 4)\">" +
        "<line class=\"gr\" x1=\"60\" y1=\"12\" x2=\"60\" y2=\"132\"/><line class=\"gr\" x1=\"80\" y1=\"12\" x2=\"80\" y2=\"132\"/><line class=\"gr\" x1=\"100\" y1=\"12\" x2=\"100\" y2=\"132\"/><line class=\"gr\" x1=\"120\" y1=\"12\" x2=\"120\" y2=\"132\"/><line class=\"gr\" x1=\"140\" y1=\"12\" x2=\"140\" y2=\"132\"/><line class=\"gr\" x1=\"160\" y1=\"12\" x2=\"160\" y2=\"132\"/><line class=\"gr\" x1=\"180\" y1=\"12\" x2=\"180\" y2=\"132\"/><line class=\"gr\" x1=\"220\" y1=\"12\" x2=\"220\" y2=\"132\"/><line class=\"gr\" x1=\"240\" y1=\"12\" x2=\"240\" y2=\"132\"/><line class=\"gr\" x1=\"260\" y1=\"12\" x2=\"260\" y2=\"132\"/>" +
        "<line class=\"gr\" x1=\"60\" y1=\"132\" x2=\"260\" y2=\"132\"/><line class=\"gr\" x1=\"60\" y1=\"92\" x2=\"260\" y2=\"92\"/><line class=\"gr\" x1=\"60\" y1=\"72\" x2=\"260\" y2=\"72\"/><line class=\"gr\" x1=\"60\" y1=\"52\" x2=\"260\" y2=\"52\"/><line class=\"gr\" x1=\"60\" y1=\"32\" x2=\"260\" y2=\"32\"/><line class=\"gr\" x1=\"60\" y1=\"12\" x2=\"260\" y2=\"12\"/>" +
        "<line class=\"ax\" x1=\"60\" y1=\"112\" x2=\"260\" y2=\"112\"/><line class=\"ax\" x1=\"200\" y1=\"132\" x2=\"200\" y2=\"12\"/>" +
        "<text class=\"sm\" x=\"80\" y=\"125\" text-anchor=\"middle\">−6</text><text class=\"sm\" x=\"240\" y=\"125\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"204\" y=\"76\">2</text><text class=\"sm\" x=\"204\" y=\"36\">4</text><text class=\"sm\" x=\"264\" y=\"116\">x</text><text class=\"sm\" x=\"195\" y=\"22\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh\" points=\"80,92 160,92 160,32 140,72 120,32 100,72 80,32\"/>" +
        "<circle class=\"dt\" cx=\"80\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"32\" r=\"3\"/><circle class=\"dt\" cx=\"140\" cy=\"72\" r=\"3\"/><circle class=\"dt\" cx=\"120\" cy=\"32\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"72\" r=\"3\"/><circle class=\"dt\" cx=\"80\" cy=\"32\" r=\"3\"/>" +
        "<text x=\"75\" y=\"107\" text-anchor=\"end\">A</text><text x=\"165\" y=\"107\">B</text><text x=\"165\" y=\"27\">C</text><text x=\"140\" y=\"89\" text-anchor=\"middle\">D</text><text x=\"120\" y=\"25\" text-anchor=\"middle\">E</text><text x=\"100\" y=\"89\" text-anchor=\"middle\">F</text><text x=\"75\" y=\"27\" text-anchor=\"end\">G</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A cross-stitch pattern is sewn on a grid. A crown is polygon <strong>ABCDEFG</strong> with A(−6, 1), B(−2, 1), C(−2, 4), D(−3, 2), E(−4, 4), F(−5, 2) and G(−6, 4).</p>",
      claims: [
        {
          id: "slide-c",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The crown is stitched again using the rule (x, y) → (x + 6, y − 3). What is the image of C?",
          choices: [
            { letter: "A", text: "(−8, 7)" },
            { letter: "B", text: "(−5, 10)" },
            { letter: "C", text: "(4, 4)" },
            { letter: "D", text: "(4, 1)" }
          ],
          correct: "D"
        },
        {
          id: "flip-g",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of G after a reflection over the x-axis?",
          choices: [
            { letter: "A", text: "(−6, −4)" },
            { letter: "B", text: "(6, 4)" },
            { letter: "C", text: "(6, −4)" },
            { letter: "D", text: "(4, −6)" }
          ],
          correct: "A"
        },
        {
          id: "half-a",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of A after a rotation of 180° about the origin?",
          choices: [
            { letter: "A", text: "(−6, −1)" },
            { letter: "B", text: "(6, 1)" },
            { letter: "C", text: "(−1, −6)" },
            { letter: "D", text: "(6, −1)" }
          ],
          correct: "D"
        },
        {
          id: "flip-f",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of F after a reflection over the y-axis?",
          choices: [
            { letter: "A", text: "(−5, −2)" },
            { letter: "B", text: "(5, −2)" },
            { letter: "C", text: "(5, 2)" },
            { letter: "D", text: "(2, −5)" }
          ],
          correct: "C"
        },
        {
          id: "mirror",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which line is a line of symmetry of the crown?",
          choices: [
            { letter: "A", text: "y = 2.5" },
            { letter: "B", text: "x = −4" },
            { letter: "C", text: "x = 0" },
            { letter: "D", text: "x = −2" }
          ],
          correct: "B"
        },
        {
          id: "border",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The crown is reflected over the x-axis for a bottom border. Which is true of the image?",
          choices: [
            { letter: "A", text: "It is congruent to the crown, and its points still face up." },
            { letter: "B", text: "It is congruent to the crown, and its points face left." },
            { letter: "C", text: "It is congruent to the crown, and its points face down." },
            { letter: "D", text: "It is not congruent, because a flip changes the angles." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt3-ring-stage-turns",
      family: "GEO",
      mode: "ring",
      title: "Turns on the Dance Stage",
      kind: "Transformations · G.RLT.3",
      blurb: "Three dancers turn about center stage, and a mirror move.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Coordinate grid stage with center stage O at the origin and three dancers: P at (1, 4), Q at (4, 3) and R at (3, 1)\">" +
        "<line class=\"gr\" x1=\"95\" y1=\"10\" x2=\"95\" y2=\"140\"/><line class=\"gr\" x1=\"108\" y1=\"10\" x2=\"108\" y2=\"140\"/><line class=\"gr\" x1=\"121\" y1=\"10\" x2=\"121\" y2=\"140\"/><line class=\"gr\" x1=\"134\" y1=\"10\" x2=\"134\" y2=\"140\"/><line class=\"gr\" x1=\"147\" y1=\"10\" x2=\"147\" y2=\"140\"/><line class=\"gr\" x1=\"173\" y1=\"10\" x2=\"173\" y2=\"140\"/><line class=\"gr\" x1=\"186\" y1=\"10\" x2=\"186\" y2=\"140\"/><line class=\"gr\" x1=\"199\" y1=\"10\" x2=\"199\" y2=\"140\"/><line class=\"gr\" x1=\"212\" y1=\"10\" x2=\"212\" y2=\"140\"/><line class=\"gr\" x1=\"225\" y1=\"10\" x2=\"225\" y2=\"140\"/>" +
        "<line class=\"gr\" x1=\"95\" y1=\"140\" x2=\"225\" y2=\"140\"/><line class=\"gr\" x1=\"95\" y1=\"127\" x2=\"225\" y2=\"127\"/><line class=\"gr\" x1=\"95\" y1=\"114\" x2=\"225\" y2=\"114\"/><line class=\"gr\" x1=\"95\" y1=\"101\" x2=\"225\" y2=\"101\"/><line class=\"gr\" x1=\"95\" y1=\"88\" x2=\"225\" y2=\"88\"/><line class=\"gr\" x1=\"95\" y1=\"62\" x2=\"225\" y2=\"62\"/><line class=\"gr\" x1=\"95\" y1=\"49\" x2=\"225\" y2=\"49\"/><line class=\"gr\" x1=\"95\" y1=\"36\" x2=\"225\" y2=\"36\"/><line class=\"gr\" x1=\"95\" y1=\"23\" x2=\"225\" y2=\"23\"/><line class=\"gr\" x1=\"95\" y1=\"10\" x2=\"225\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"95\" y1=\"75\" x2=\"225\" y2=\"75\"/><line class=\"ax\" x1=\"160\" y1=\"140\" x2=\"160\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"108\" y=\"88\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"134\" y=\"88\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"164\" y=\"131\">−4</text><text class=\"sm\" x=\"229\" y=\"79\">x</text><text class=\"sm\" x=\"155\" y=\"20\" text-anchor=\"end\">y</text>" +
        "<polyline class=\"thin dash\" points=\"173,23 212,36 199,62 173,23\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"75\" r=\"3\"/>" +
        "<text class=\"sm\" x=\"155\" y=\"88\" text-anchor=\"end\">O</text>" +
        "<circle class=\"sh\" cx=\"173\" cy=\"23\" r=\"6\"/><circle class=\"sh\" cx=\"212\" cy=\"36\" r=\"6\"/><circle class=\"sh\" cx=\"199\" cy=\"62\" r=\"6\"/>" +
        "<circle class=\"dta\" cx=\"173\" cy=\"23\" r=\"3\"/><circle class=\"dta\" cx=\"212\" cy=\"36\" r=\"3\"/><circle class=\"dta\" cx=\"199\" cy=\"62\" r=\"3\"/>" +
        "<text x=\"178\" y=\"18\">P</text><text x=\"217\" y=\"31\">Q</text><text x=\"207\" y=\"67\">R</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A dance is planned on a stage grid with center stage at the origin <strong>O</strong>. Three dancers start at <strong>P</strong>(1, 4), <strong>Q</strong>(4, 3) and <strong>R</strong>(3, 1). During the dance their formation turns about O.</p>",
      claims: [
        {
          id: "cw-q",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of Q after a rotation of 90° clockwise about O?",
          choices: [
            { letter: "A", text: "(−3, 4)" },
            { letter: "B", text: "(−4, −3)" },
            { letter: "C", text: "(3, −4)" },
            { letter: "D", text: "(3, 4)" }
          ],
          correct: "C"
        },
        {
          id: "cw270-p",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of P after a rotation of 270° clockwise about O?",
          choices: [
            { letter: "A", text: "(4, −1)" },
            { letter: "B", text: "(−1, −4)" },
            { letter: "C", text: "(−1, 4)" },
            { letter: "D", text: "(−4, 1)" }
          ],
          correct: "D"
        },
        {
          id: "which",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "On a later count the dancers stand at P′(−1, −4), Q′(−4, −3) and R′(−3, −1). Which single transformation maps P, Q, R to P′, Q′, R′?",
          choices: [
            { letter: "A", text: "Rotation of 180° about O" },
            { letter: "B", text: "Rotation of 90° clockwise about O" },
            { letter: "C", text: "Reflection over the line y = −x" },
            { letter: "D", text: "Reflection over the x-axis" }
          ],
          correct: "A"
        },
        {
          id: "mirror-move",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "In a mirror move, the formation is reflected over the y-axis and then turned 90° counterclockwise about O. Which single transformation has the same effect?",
          choices: [
            { letter: "A", text: "Rotation of 180° about O" },
            { letter: "B", text: "Reflection over the line y = −x" },
            { letter: "C", text: "Reflection over the line y = x" },
            { letter: "D", text: "Rotation of 90° counterclockwise about O" }
          ],
          correct: "B"
        },
        {
          id: "finale",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "In the finale, 9 dancers stand evenly spaced on a circle centered at O. Which rotation about O does NOT map their formation onto itself?",
          choices: [
            { letter: "A", text: "60°" },
            { letter: "B", text: "80°" },
            { letter: "C", text: "120°" },
            { letter: "D", text: "200°" }
          ],
          correct: "A"
        },
        {
          id: "turn-up",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The formation turns 180° about O and then moves up the stage by (x, y) → (x, y + 2). Where does R end up?",
          choices: [
            { letter: "A", text: "(−3, −3)" },
            { letter: "B", text: "(−3, −1)" },
            { letter: "C", text: "(−3, 1)" },
            { letter: "D", text: "(3, 1)" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt3-ring-chevron-tile",
      family: "GEO",
      mode: "ring",
      title: "The Chevron Floor Tile",
      kind: "Transformations · G.RLT.3",
      blurb: "A chevron tile slides to cover a floor with no gaps.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 144\" role=\"img\" aria-label=\"Coordinate grid with a chevron tile, hexagon ABCDEF: A at (-5, -1), B at (-3, -1), C at (-1, 1), D at (-3, 3), E at (-5, 3) and F at (-3, 1)\">" +
        "<line class=\"gr\" x1=\"70\" y1=\"12\" x2=\"70\" y2=\"132\"/><line class=\"gr\" x1=\"90\" y1=\"12\" x2=\"90\" y2=\"132\"/><line class=\"gr\" x1=\"110\" y1=\"12\" x2=\"110\" y2=\"132\"/><line class=\"gr\" x1=\"130\" y1=\"12\" x2=\"130\" y2=\"132\"/><line class=\"gr\" x1=\"150\" y1=\"12\" x2=\"150\" y2=\"132\"/><line class=\"gr\" x1=\"170\" y1=\"12\" x2=\"170\" y2=\"132\"/><line class=\"gr\" x1=\"210\" y1=\"12\" x2=\"210\" y2=\"132\"/><line class=\"gr\" x1=\"230\" y1=\"12\" x2=\"230\" y2=\"132\"/><line class=\"gr\" x1=\"250\" y1=\"12\" x2=\"250\" y2=\"132\"/>" +
        "<line class=\"gr\" x1=\"70\" y1=\"132\" x2=\"250\" y2=\"132\"/><line class=\"gr\" x1=\"70\" y1=\"112\" x2=\"250\" y2=\"112\"/><line class=\"gr\" x1=\"70\" y1=\"72\" x2=\"250\" y2=\"72\"/><line class=\"gr\" x1=\"70\" y1=\"52\" x2=\"250\" y2=\"52\"/><line class=\"gr\" x1=\"70\" y1=\"32\" x2=\"250\" y2=\"32\"/><line class=\"gr\" x1=\"70\" y1=\"12\" x2=\"250\" y2=\"12\"/>" +
        "<line class=\"ax\" x1=\"70\" y1=\"92\" x2=\"250\" y2=\"92\"/><line class=\"ax\" x1=\"190\" y1=\"132\" x2=\"190\" y2=\"12\"/>" +
        "<text class=\"sm\" x=\"230\" y=\"105\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"194\" y=\"56\">2</text><text class=\"sm\" x=\"254\" y=\"96\">x</text><text class=\"sm\" x=\"185\" y=\"22\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh2\" points=\"90,112 130,112 170,72 130,32 90,32 130,72\"/>" +
        "<circle class=\"dt\" cx=\"90\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"130\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"170\" cy=\"72\" r=\"3\"/><circle class=\"dt\" cx=\"130\" cy=\"32\" r=\"3\"/><circle class=\"dt\" cx=\"90\" cy=\"32\" r=\"3\"/><circle class=\"dt\" cx=\"130\" cy=\"72\" r=\"3\"/>" +
        "<text x=\"85\" y=\"127\" text-anchor=\"end\">A</text><text x=\"135\" y=\"127\">B</text><text x=\"178\" y=\"77\">C</text><text x=\"135\" y=\"27\">D</text><text x=\"85\" y=\"27\" text-anchor=\"end\">E</text><text x=\"122\" y=\"77\" text-anchor=\"end\">F</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A tile maker designs a chevron tile, <strong>ABCDEF</strong>, with A(−5, −1), B(−3, −1), C(−1, 1), D(−3, 3), E(−5, 3) and F(−3, 1). Copies of the tile cover a floor with no gaps or overlaps.</p>",
      claims: [
        {
          id: "next",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The next tile in the row is the image of ABCDEF under (x, y) → (x + 2, y). Which vertex of the next tile lands exactly on C(−1, 1)?",
          choices: [
            { letter: "A", text: "E′" },
            { letter: "B", text: "F′" },
            { letter: "C", text: "A′" },
            { letter: "D", text: "C′" }
          ],
          correct: "B"
        },
        {
          id: "above",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The tile directly above ABCDEF has its vertex A″ at (−5, 3). Which rule maps ABCDEF to that tile?",
          choices: [
            { letter: "A", text: "(x, y) → (x, y + 3)" },
            { letter: "B", text: "(x, y) → (x, y − 4)" },
            { letter: "C", text: "(x, y) → (x, y + 4)" },
            { letter: "D", text: "(x, y) → (x − 5, y + 3)" }
          ],
          correct: "C"
        },
        {
          id: "many",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A layout moves the tile by (x, y) → (x + 2, y) three times, then by (x, y) → (x, y + 4) twice. Which single rule has the same effect?",
          choices: [
            { letter: "A", text: "(x, y) → (x + 2, y + 4)" },
            { letter: "B", text: "(x, y) → (x + 6, y + 8)" },
            { letter: "C", text: "(x, y) → (x + 6, y + 12)" },
            { letter: "D", text: "(x, y) → (x + 4, y + 12)" }
          ],
          correct: "B"
        },
        {
          id: "mirror",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which line is a line of symmetry of tile ABCDEF?",
          choices: [
            { letter: "A", text: "x = −3" },
            { letter: "B", text: "y = −1" },
            { letter: "C", text: "x = −1" },
            { letter: "D", text: "y = 1" }
          ],
          correct: "D"
        },
        {
          id: "not-slide",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which is NOT true of every image of tile ABCDEF under a translation?",
          choices: [
            { letter: "A", text: "Its sides have the same lengths." },
            { letter: "B", text: "Its angles have the same measures." },
            { letter: "C", text: "Its area is the same." },
            { letter: "D", text: "It points in a different direction." }
          ],
          correct: "D"
        },
        {
          id: "flip-e",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "For a border, the tile is reflected over the line x = −1. What is the image of E?",
          choices: [
            { letter: "A", text: "(3, 3)" },
            { letter: "B", text: "(5, 3)" },
            { letter: "C", text: "(−1, 3)" },
            { letter: "D", text: "(−5, −5)" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-ring-fabric-fold",
      family: "GEO",
      mode: "ring",
      title: "Folding the Printed Fabric",
      kind: "Transformations · G.RLT.3",
      blurb: "A fabric motif is mirrored over fold lines, straight and slanted.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"Coordinate grid with fabric motif PQRS: P at (2, 1), Q at (5, 2), R at (4, 4) and S at (1, 3); a dashed fold line runs along x = 6\">" +
        "<line class=\"gr\" x1=\"40\" y1=\"10\" x2=\"40\" y2=\"130\"/><line class=\"gr\" x1=\"60\" y1=\"10\" x2=\"60\" y2=\"130\"/><line class=\"gr\" x1=\"100\" y1=\"10\" x2=\"100\" y2=\"130\"/><line class=\"gr\" x1=\"120\" y1=\"10\" x2=\"120\" y2=\"130\"/><line class=\"gr\" x1=\"140\" y1=\"10\" x2=\"140\" y2=\"130\"/><line class=\"gr\" x1=\"160\" y1=\"10\" x2=\"160\" y2=\"130\"/><line class=\"gr\" x1=\"180\" y1=\"10\" x2=\"180\" y2=\"130\"/><line class=\"gr\" x1=\"200\" y1=\"10\" x2=\"200\" y2=\"130\"/><line class=\"gr\" x1=\"220\" y1=\"10\" x2=\"220\" y2=\"130\"/><line class=\"gr\" x1=\"240\" y1=\"10\" x2=\"240\" y2=\"130\"/><line class=\"gr\" x1=\"260\" y1=\"10\" x2=\"260\" y2=\"130\"/><line class=\"gr\" x1=\"280\" y1=\"10\" x2=\"280\" y2=\"130\"/>" +
        "<line class=\"gr\" x1=\"40\" y1=\"130\" x2=\"280\" y2=\"130\"/><line class=\"gr\" x1=\"40\" y1=\"90\" x2=\"280\" y2=\"90\"/><line class=\"gr\" x1=\"40\" y1=\"70\" x2=\"280\" y2=\"70\"/><line class=\"gr\" x1=\"40\" y1=\"50\" x2=\"280\" y2=\"50\"/><line class=\"gr\" x1=\"40\" y1=\"30\" x2=\"280\" y2=\"30\"/><line class=\"gr\" x1=\"40\" y1=\"10\" x2=\"280\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"40\" y1=\"110\" x2=\"280\" y2=\"110\"/><line class=\"ax\" x1=\"80\" y1=\"130\" x2=\"80\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"160\" y=\"123\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"240\" y=\"123\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"76\" y=\"74\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"76\" y=\"34\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"284\" y=\"114\">x</text><text class=\"sm\" x=\"85\" y=\"20\">y</text>" +
        "<line class=\"ln dash\" x1=\"200\" y1=\"10\" x2=\"200\" y2=\"130\"/>" +
        "<text class=\"sm\" x=\"204\" y=\"22\">fold x = 6</text>" +
        "<polygon class=\"sh\" points=\"120,90 180,70 160,30 100,50\"/>" +
        "<circle class=\"dt\" cx=\"120\" cy=\"90\" r=\"3\"/><circle class=\"dt\" cx=\"180\" cy=\"70\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"50\" r=\"3\"/>" +
        "<text x=\"120\" y=\"107\" text-anchor=\"middle\">P</text><text x=\"185\" y=\"85\">Q</text><text x=\"160\" y=\"23\" text-anchor=\"middle\">R</text><text x=\"92\" y=\"55\" text-anchor=\"end\">S</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A fabric designer prints motif <strong>PQRS</strong> with P(2, 1), Q(5, 2), R(4, 4) and S(1, 3). She makes mirror copies by reflecting the motif over lines, like folding the fabric. One fold line is x = 6.</p>",
      claims: [
        {
          id: "yx-s",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "One fold runs along the line y = x. What is the image of S in that fold?",
          choices: [
            { letter: "A", text: "(−3, −1)" },
            { letter: "B", text: "(−1, 3)" },
            { letter: "C", text: "(3, 1)" },
            { letter: "D", text: "(3, −1)" }
          ],
          correct: "C"
        },
        {
          id: "ynx-q",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Another fold runs along the line y = −x. What is the image of Q in that fold?",
          choices: [
            { letter: "A", text: "(2, 5)" },
            { letter: "B", text: "(−2, −5)" },
            { letter: "C", text: "(−5, −2)" },
            { letter: "D", text: "(−2, 5)" }
          ],
          correct: "B"
        },
        {
          id: "fold-p",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of P after a reflection over the fold line x = 6?",
          choices: [
            { letter: "A", text: "(6, 1)" },
            { letter: "B", text: "(4, 1)" },
            { letter: "C", text: "(8, 1)" },
            { letter: "D", text: "(10, 1)" }
          ],
          correct: "D"
        },
        {
          id: "find-line",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "On another copy, R(4, 4) lands on (4, −2). Over which line was the motif reflected?",
          choices: [
            { letter: "A", text: "y = 1" },
            { letter: "B", text: "y = −2" },
            { letter: "C", text: "y = 3" },
            { letter: "D", text: "y = 0" }
          ],
          correct: "A"
        },
        {
          id: "two-folds",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The motif is reflected over the line y = x and then over the x-axis. Which single transformation has the same effect?",
          choices: [
            { letter: "A", text: "Rotation of 90° counterclockwise about the origin" },
            { letter: "B", text: "Rotation of 180° about the origin" },
            { letter: "C", text: "Reflection over the line y = −x" },
            { letter: "D", text: "Rotation of 90° clockwise about the origin" }
          ],
          correct: "D"
        },
        {
          id: "pair",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "A border shows motif PQRS together with its mirror image over the line y = x. Which line is a line of symmetry of the two motifs together?",
          choices: [
            { letter: "A", text: "y = x" },
            { letter: "B", text: "x = 3" },
            { letter: "C", text: "x = 0" },
            { letter: "D", text: "y = −x" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-ring-t-stencil",
      family: "GEO",
      mode: "ring",
      title: "The Letter T Stencil",
      kind: "Transformations · G.RLT.3",
      blurb: "A T stencil is copied larger and smaller by dilations.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Coordinate grid with a T-shaped stencil, polygon ABCDEFGH: A at (0, 6), B at (6, 6), C at (6, 4), D at (4, 4), E at (4, 0), F at (2, 0), G at (2, 4) and H at (0, 4)\">" +
        "<line class=\"gr\" x1=\"92\" y1=\"10\" x2=\"92\" y2=\"146\"/><line class=\"gr\" x1=\"126\" y1=\"10\" x2=\"126\" y2=\"146\"/><line class=\"gr\" x1=\"143\" y1=\"10\" x2=\"143\" y2=\"146\"/><line class=\"gr\" x1=\"160\" y1=\"10\" x2=\"160\" y2=\"146\"/><line class=\"gr\" x1=\"177\" y1=\"10\" x2=\"177\" y2=\"146\"/><line class=\"gr\" x1=\"194\" y1=\"10\" x2=\"194\" y2=\"146\"/><line class=\"gr\" x1=\"211\" y1=\"10\" x2=\"211\" y2=\"146\"/><line class=\"gr\" x1=\"228\" y1=\"10\" x2=\"228\" y2=\"146\"/>" +
        "<line class=\"gr\" x1=\"92\" y1=\"146\" x2=\"228\" y2=\"146\"/><line class=\"gr\" x1=\"92\" y1=\"112\" x2=\"228\" y2=\"112\"/><line class=\"gr\" x1=\"92\" y1=\"95\" x2=\"228\" y2=\"95\"/><line class=\"gr\" x1=\"92\" y1=\"78\" x2=\"228\" y2=\"78\"/><line class=\"gr\" x1=\"92\" y1=\"61\" x2=\"228\" y2=\"61\"/><line class=\"gr\" x1=\"92\" y1=\"44\" x2=\"228\" y2=\"44\"/><line class=\"gr\" x1=\"92\" y1=\"27\" x2=\"228\" y2=\"27\"/><line class=\"gr\" x1=\"92\" y1=\"10\" x2=\"228\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"92\" y1=\"129\" x2=\"228\" y2=\"129\"/><line class=\"ax\" x1=\"109\" y1=\"146\" x2=\"109\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"211\" y=\"142\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"105\" y=\"99\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"232\" y=\"133\">x</text><text class=\"sm\" x=\"114\" y=\"20\">y</text>" +
        "<polygon class=\"sh\" points=\"109,27 211,27 211,61 177,61 177,129 143,129 143,61 109,61\"/>" +
        "<circle class=\"dt\" cx=\"109\" cy=\"27\" r=\"3\"/><circle class=\"dt\" cx=\"211\" cy=\"27\" r=\"3\"/><circle class=\"dt\" cx=\"211\" cy=\"61\" r=\"3\"/><circle class=\"dt\" cx=\"177\" cy=\"61\" r=\"3\"/><circle class=\"dt\" cx=\"177\" cy=\"129\" r=\"3\"/><circle class=\"dt\" cx=\"143\" cy=\"129\" r=\"3\"/><circle class=\"dt\" cx=\"143\" cy=\"61\" r=\"3\"/><circle class=\"dt\" cx=\"109\" cy=\"61\" r=\"3\"/>" +
        "<text x=\"104\" y=\"22\" text-anchor=\"end\">A</text><text x=\"216\" y=\"22\">B</text><text x=\"216\" y=\"76\">C</text><text x=\"182\" y=\"76\">D</text><text x=\"182\" y=\"144\">E</text><text x=\"138\" y=\"144\" text-anchor=\"end\">F</text><text x=\"138\" y=\"76\" text-anchor=\"end\">G</text><text x=\"101\" y=\"66\" text-anchor=\"end\">H</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A sign maker cuts a stencil of the letter T, polygon <strong>ABCDEFGH</strong>: A(0, 6), B(6, 6), C(6, 4), D(4, 4), E(4, 0), F(2, 0), G(2, 4) and H(0, 4). Its perimeter is 24 units and its area is 20 square units. Copies are made by dilations centered at the origin.</p>",
      claims: [
        {
          id: "half-d",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of D under a dilation with scale factor 1/2 centered at the origin?",
          choices: [
            { letter: "A", text: "(8, 8)" },
            { letter: "B", text: "(3.5, 3.5)" },
            { letter: "C", text: "(2, 2)" },
            { letter: "D", text: "(2, 4)" }
          ],
          correct: "C"
        },
        {
          id: "half-per",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the perimeter of the image of the stencil under a dilation with scale factor 1/2 centered at the origin?",
          choices: [
            { letter: "A", text: "12 units" },
            { letter: "B", text: "6 units" },
            { letter: "C", text: "24 units" },
            { letter: "D", text: "20 units" }
          ],
          correct: "A"
        },
        {
          id: "big-area",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the area of the image of the stencil under a dilation with scale factor 3/2 centered at the origin?",
          choices: [
            { letter: "A", text: "30 square units" },
            { letter: "B", text: "45 square units" },
            { letter: "C", text: "67.5 square units" },
            { letter: "D", text: "21.5 square units" }
          ],
          correct: "B"
        },
        {
          id: "sticker",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "For a small sticker, a dilation centered at the origin maps C(6, 4) to (1.5, 1). What is its scale factor?",
          choices: [
            { letter: "A", text: "k = 4" },
            { letter: "B", text: "k = 4.5" },
            { letter: "C", text: "k = 1/4" },
            { letter: "D", text: "k = 3" }
          ],
          correct: "C"
        },
        {
          id: "half-line",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which line is a line of symmetry of the image of the stencil under a dilation with scale factor 1/2 centered at the origin?",
          choices: [
            { letter: "A", text: "x = 3" },
            { letter: "B", text: "x = 1.5" },
            { letter: "C", text: "x = 6" },
            { letter: "D", text: "y = 1.5" }
          ],
          correct: "B"
        },
        {
          id: "jo",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Jo says that after a dilation with scale factor 1/2, each 90° corner of the T becomes a 45° corner. What is her error?",
          choices: [
            { letter: "A", text: "There is no error; each angle is multiplied by 1/2." },
            { letter: "B", text: "Only the 270° corners change; they become 135°." },
            { letter: "C", text: "Dilations keep side lengths; only the angles change." },
            { letter: "D", text: "Dilations keep angle measures; the corners stay 90°." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt3-ring-monogram",
      family: "GEO",
      mode: "ring",
      title: "Moving the Monogram",
      kind: "Transformations · G.RLT.3",
      blurb: "A letter F is turned and slid, then moved back, in the right order.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Coordinate grid with the letter F in Quadrant I, with corners P at (1, 1), Q at (4, 6) and R at (3, 3), and its image F' below and to the left, with P' at (-1, -5), Q' at (-6, -2) and R' at (-3, -3)\">" +
        "<line class=\"gr\" x1=\"88\" y1=\"7\" x2=\"88\" y2=\"163\"/><line class=\"gr\" x1=\"100\" y1=\"7\" x2=\"100\" y2=\"163\"/><line class=\"gr\" x1=\"112\" y1=\"7\" x2=\"112\" y2=\"163\"/><line class=\"gr\" x1=\"124\" y1=\"7\" x2=\"124\" y2=\"163\"/><line class=\"gr\" x1=\"136\" y1=\"7\" x2=\"136\" y2=\"163\"/><line class=\"gr\" x1=\"148\" y1=\"7\" x2=\"148\" y2=\"163\"/><line class=\"gr\" x1=\"160\" y1=\"7\" x2=\"160\" y2=\"163\"/><line class=\"gr\" x1=\"184\" y1=\"7\" x2=\"184\" y2=\"163\"/><line class=\"gr\" x1=\"196\" y1=\"7\" x2=\"196\" y2=\"163\"/><line class=\"gr\" x1=\"208\" y1=\"7\" x2=\"208\" y2=\"163\"/><line class=\"gr\" x1=\"220\" y1=\"7\" x2=\"220\" y2=\"163\"/><line class=\"gr\" x1=\"232\" y1=\"7\" x2=\"232\" y2=\"163\"/>" +
        "<line class=\"gr\" x1=\"88\" y1=\"163\" x2=\"232\" y2=\"163\"/><line class=\"gr\" x1=\"88\" y1=\"151\" x2=\"232\" y2=\"151\"/><line class=\"gr\" x1=\"88\" y1=\"139\" x2=\"232\" y2=\"139\"/><line class=\"gr\" x1=\"88\" y1=\"127\" x2=\"232\" y2=\"127\"/><line class=\"gr\" x1=\"88\" y1=\"115\" x2=\"232\" y2=\"115\"/><line class=\"gr\" x1=\"88\" y1=\"103\" x2=\"232\" y2=\"103\"/><line class=\"gr\" x1=\"88\" y1=\"79\" x2=\"232\" y2=\"79\"/><line class=\"gr\" x1=\"88\" y1=\"67\" x2=\"232\" y2=\"67\"/><line class=\"gr\" x1=\"88\" y1=\"55\" x2=\"232\" y2=\"55\"/><line class=\"gr\" x1=\"88\" y1=\"43\" x2=\"232\" y2=\"43\"/><line class=\"gr\" x1=\"88\" y1=\"31\" x2=\"232\" y2=\"31\"/><line class=\"gr\" x1=\"88\" y1=\"19\" x2=\"232\" y2=\"19\"/><line class=\"gr\" x1=\"88\" y1=\"7\" x2=\"232\" y2=\"7\"/>" +
        "<line class=\"ax\" x1=\"88\" y1=\"91\" x2=\"232\" y2=\"91\"/><line class=\"ax\" x1=\"172\" y1=\"163\" x2=\"172\" y2=\"7\"/>" +
        "<text class=\"sm\" x=\"124\" y=\"104\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"220\" y=\"104\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"176\" y=\"143\">−4</text><text class=\"sm\" x=\"236\" y=\"95\">x</text><text class=\"sm\" x=\"167\" y=\"17\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh\" points=\"184,79 196,79 196,55 208,55 208,43 196,43 196,31 220,31 220,19 184,19\"/>" +
        "<polygon class=\"sh2\" points=\"160,151 160,139 136,139 136,127 124,127 124,139 112,139 112,115 100,115 100,151\"/>" +
        "<circle class=\"dt\" cx=\"184\" cy=\"79\" r=\"3\"/><circle class=\"dt\" cx=\"220\" cy=\"19\" r=\"3\"/><circle class=\"dt\" cx=\"208\" cy=\"55\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"151\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"115\" r=\"3\"/><circle class=\"dt\" cx=\"136\" cy=\"127\" r=\"3\"/>" +
        "<text x=\"189\" y=\"94\">P</text><text x=\"225\" y=\"14\">Q</text><text x=\"216\" y=\"60\">R</text>" +
        "<text x=\"165\" y=\"166\">P′</text><text x=\"92\" y=\"120\" text-anchor=\"end\">Q′</text><text x=\"141\" y=\"122\">R′</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A designer's monogram is the letter <strong>F</strong> (gold), with corners P(1, 1), Q(4, 6) and R(3, 3). After two moves it appears as <strong>F′</strong> (blue), with P′(−1, −5), Q′(−6, −2) and R′(−3, −3).</p>",
      claims: [
        {
          id: "which",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which sequence of moves maps F to F′?",
          choices: [
            { letter: "A", text: "Rotate 90° clockwise about the origin, then translate 6 units down" },
            { letter: "B", text: "Translate 6 units down, then rotate 90° counterclockwise about the origin" },
            { letter: "C", text: "Rotate 90° counterclockwise about the origin, then translate 6 units down" },
            { letter: "D", text: "Reflect over the line y = x, then translate 6 units down" }
          ],
          correct: "C"
        },
        {
          id: "true",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which is true of F′ compared with F?",
          choices: [
            { letter: "A", text: "It is congruent to F but is a mirror image." },
            { letter: "B", text: "It is congruent to F and is not a mirror image." },
            { letter: "C", text: "It is similar to F but smaller." },
            { letter: "D", text: "It is not congruent, because it was turned." }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Suppose the moves are done in the other order: translate F 6 units down, then rotate it 90° counterclockwise about the origin. Where does Q(4, 6) end up?",
          choices: [
            { letter: "A", text: "(−6, −2)" },
            { letter: "B", text: "(0, 4)" },
            { letter: "C", text: "(0, −4)" },
            { letter: "D", text: "(−6, 4)" }
          ],
          correct: "B"
        },
        {
          id: "seal",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "For a wax seal, F is dilated by scale factor 2 about the origin and then reflected over the x-axis. Where does Q(4, 6) end up?",
          choices: [
            { letter: "A", text: "(8, −12)" },
            { letter: "B", text: "(8, 12)" },
            { letter: "C", text: "(−8, 12)" },
            { letter: "D", text: "(6, −8)" }
          ],
          correct: "A"
        },
        {
          id: "back",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which sequence maps F′ back onto F?",
          choices: [
            { letter: "A", text: "Rotate 90° clockwise about the origin, then translate 6 units up" },
            { letter: "B", text: "Translate 6 units up, then rotate 90° counterclockwise about the origin" },
            { letter: "C", text: "Translate 6 units down, then rotate 90° clockwise about the origin" },
            { letter: "D", text: "Translate 6 units up, then rotate 90° clockwise about the origin" }
          ],
          correct: "D"
        },
        {
          id: "letter",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "In a plain block font, which letter maps onto itself under a reflection over a horizontal line but NOT under a rotation of 180°?",
          choices: [
            { letter: "A", text: "E" },
            { letter: "B", text: "X" },
            { letter: "C", text: "S" },
            { letter: "D", text: "A" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-ring-kaleidoscope",
      family: "GEO",
      mode: "ring",
      title: "Inside the Kaleidoscope",
      kind: "Transformations · G.RLT.3",
      blurb: "Two mirrors turn one bead into a pattern of four.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Coordinate grid kaleidoscope pattern: triangle JKL with J at (1, 2), K at (4, 1) and L at (3, 4) in Quadrant I, and its three mirror images in the other quadrants\">" +
        "<line class=\"gr\" x1=\"95\" y1=\"10\" x2=\"95\" y2=\"140\"/><line class=\"gr\" x1=\"108\" y1=\"10\" x2=\"108\" y2=\"140\"/><line class=\"gr\" x1=\"121\" y1=\"10\" x2=\"121\" y2=\"140\"/><line class=\"gr\" x1=\"134\" y1=\"10\" x2=\"134\" y2=\"140\"/><line class=\"gr\" x1=\"147\" y1=\"10\" x2=\"147\" y2=\"140\"/><line class=\"gr\" x1=\"173\" y1=\"10\" x2=\"173\" y2=\"140\"/><line class=\"gr\" x1=\"186\" y1=\"10\" x2=\"186\" y2=\"140\"/><line class=\"gr\" x1=\"199\" y1=\"10\" x2=\"199\" y2=\"140\"/><line class=\"gr\" x1=\"212\" y1=\"10\" x2=\"212\" y2=\"140\"/><line class=\"gr\" x1=\"225\" y1=\"10\" x2=\"225\" y2=\"140\"/>" +
        "<line class=\"gr\" x1=\"95\" y1=\"140\" x2=\"225\" y2=\"140\"/><line class=\"gr\" x1=\"95\" y1=\"127\" x2=\"225\" y2=\"127\"/><line class=\"gr\" x1=\"95\" y1=\"114\" x2=\"225\" y2=\"114\"/><line class=\"gr\" x1=\"95\" y1=\"101\" x2=\"225\" y2=\"101\"/><line class=\"gr\" x1=\"95\" y1=\"88\" x2=\"225\" y2=\"88\"/><line class=\"gr\" x1=\"95\" y1=\"62\" x2=\"225\" y2=\"62\"/><line class=\"gr\" x1=\"95\" y1=\"49\" x2=\"225\" y2=\"49\"/><line class=\"gr\" x1=\"95\" y1=\"36\" x2=\"225\" y2=\"36\"/><line class=\"gr\" x1=\"95\" y1=\"23\" x2=\"225\" y2=\"23\"/><line class=\"gr\" x1=\"95\" y1=\"10\" x2=\"225\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"95\" y1=\"75\" x2=\"225\" y2=\"75\"/><line class=\"ax\" x1=\"160\" y1=\"140\" x2=\"160\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"156\" y=\"131\" text-anchor=\"end\">−4</text><text class=\"sm\" x=\"156\" y=\"27\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"229\" y=\"79\">x</text><text class=\"sm\" x=\"165\" y=\"20\">y</text>" +
        "<polygon class=\"sh2\" points=\"147,49 108,62 121,23\"/>" +
        "<polygon class=\"sh2\" points=\"147,101 108,88 121,127\"/>" +
        "<polygon class=\"sh2\" points=\"173,101 212,88 199,127\"/>" +
        "<polygon class=\"sh\" points=\"173,49 212,62 199,23\"/>" +
        "<circle class=\"dt\" cx=\"173\" cy=\"49\" r=\"3\"/><circle class=\"dt\" cx=\"212\" cy=\"62\" r=\"3\"/><circle class=\"dt\" cx=\"199\" cy=\"23\" r=\"3\"/>" +
        "<text x=\"165\" y=\"54\" text-anchor=\"end\">J</text><text x=\"217\" y=\"57\">K</text><text x=\"199\" y=\"16\" text-anchor=\"middle\">L</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A kaleidoscope has two mirrors at right angles, along the x-axis and the y-axis. A bead shaped like <strong>△JKL</strong>, with J(1, 2), K(4, 1) and L(3, 4), sits in Quadrant I. The mirrors show its images in the other three quadrants, which makes the pattern.</p>",
      claims: [
        {
          id: "lines",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "How many lines of symmetry does the whole pattern of four triangles have?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "0" },
            { letter: "C", text: "1" },
            { letter: "D", text: "2" }
          ],
          correct: "D"
        },
        {
          id: "lena",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Lena says the pattern has rotational symmetry of order 4 because it has four copies of the bead. What is her error?",
          choices: [
            { letter: "A", text: "There is no error; four copies give order 4." },
            { letter: "B", text: "A 90° turn does not map the pattern onto itself; the order is 2." },
            { letter: "C", text: "No turn maps the pattern onto itself; the order is 1." },
            { letter: "D", text: "Each copy has two mirror images; the order is 8." }
          ],
          correct: "B"
        },
        {
          id: "q4",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The triangle in Quadrant IV is the image of △JKL under which single transformation?",
          choices: [
            { letter: "A", text: "Reflection over the x-axis" },
            { letter: "B", text: "Reflection over the y-axis" },
            { letter: "C", text: "Rotation of 180° about the origin" },
            { letter: "D", text: "Rotation of 90° clockwise about the origin" }
          ],
          correct: "A"
        },
        {
          id: "third",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A third mirror is added along the line y = x. L is reflected over the y-axis and then over the line y = x. Where does L end up?",
          choices: [
            { letter: "A", text: "(−4, 3)" },
            { letter: "B", text: "(−3, 4)" },
            { letter: "C", text: "(−3, −4)" },
            { letter: "D", text: "(4, −3)" }
          ],
          correct: "D"
        },
        {
          id: "tube",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The tube is turned so the whole pattern rotates 90° counterclockwise about the origin. What is the image of K?",
          choices: [
            { letter: "A", text: "(1, −4)" },
            { letter: "B", text: "(1, 4)" },
            { letter: "C", text: "(−1, 4)" },
            { letter: "D", text: "(−4, −1)" }
          ],
          correct: "C"
        },
        {
          id: "q2-q4",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which single transformation maps the triangle in Quadrant II onto the triangle in Quadrant IV?",
          choices: [
            { letter: "A", text: "Reflection over the x-axis" },
            { letter: "B", text: "Reflection over the line y = x" },
            { letter: "C", text: "Rotation of 180° about the origin" },
            { letter: "D", text: "Rotation of 90° counterclockwise about the origin" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt3-worms-nature-sketches",
      family: "GEO",
      mode: "worms",
      title: "Sketches from a Nature Walk",
      kind: "Transformations · G.RLT.3",
      blurb: "A starfish, a clover and a leaf: mirror lines and turns.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 146\" role=\"img\" aria-label=\"A starfish with five equal arms; a clover with three equal round leaves; a leaf with a stem\">" +
        "<polygon class=\"sh\" points=\"60,24 50.01,56.25 16.25,55.79 43.83,75.25 32.96,107.21 60,87 87.04,107.21 76.17,75.25 103.75,55.79 69.99,56.25\"/>" +
        "<circle class=\"sh2\" cx=\"160\" cy=\"51\" r=\"18\"/><circle class=\"sh2\" cx=\"143.55\" cy=\"79.5\" r=\"18\"/><circle class=\"sh2\" cx=\"176.45\" cy=\"79.5\" r=\"18\"/>" +
        "<polygon class=\"ln\" points=\"262,26 264.02,27.9 266,29.8 267.91,31.7 269.75,33.6 271.51,35.5 273.18,37.4 274.75,39.3 276.21,41.2 277.56,43.1 278.78,45 279.87,46.9 280.83,48.8 281.65,50.7 282.33,52.6 282.87,54.5 283.27,56.4 283.52,58.3 283.64,60.2 283.61,62.1 283.45,64 283.16,65.9 282.74,67.8 282.19,69.7 281.53,71.6 280.77,73.5 279.9,75.4 278.93,77.3 277.88,79.2 276.75,81.1 275.56,83 274.31,84.9 273,86.8 271.66,88.7 270.29,90.6 268.9,92.5 267.5,94.4 266.1,96.3 264.71,98.2 263.34,100.1 262,102 260.66,100.1 259.29,98.2 257.9,96.3 256.5,94.4 255.1,92.5 253.71,90.6 252.34,88.7 251,86.8 249.69,84.9 248.44,83 247.25,81.1 246.12,79.2 245.07,77.3 244.1,75.4 243.23,73.5 242.47,71.6 241.81,69.7 241.26,67.8 240.84,65.9 240.55,64 240.39,62.1 240.36,60.2 240.48,58.3 240.73,56.4 241.13,54.5 241.67,52.6 242.35,50.7 243.17,48.8 244.13,46.9 245.22,45 246.44,43.1 247.79,41.2 249.25,39.3 250.82,37.4 252.49,35.5 254.25,33.6 256.09,31.7 258,29.8 259.98,27.9\"/>" +
        "<line class=\"ln\" x1=\"262\" y1=\"102\" x2=\"262\" y2=\"120\"/>" +
        "<line class=\"thin\" x1=\"262\" y1=\"32\" x2=\"262\" y2=\"102\"/>" +
        "<text class=\"sm\" x=\"60\" y=\"136\" text-anchor=\"middle\">starfish</text><text class=\"sm\" x=\"160\" y=\"136\" text-anchor=\"middle\">clover</text><text class=\"sm\" x=\"262\" y=\"136\" text-anchor=\"middle\">leaf</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a nature walk, a class sketches three things. The <strong>starfish</strong> has five identical arms, equally spaced. The <strong>clover</strong> has three identical round leaves, equally spaced around its center. The <strong>leaf</strong> has a stem and two matching halves.</p>",
      claims: [
        {
          id: "fish-lines",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "How many lines of symmetry does the starfish have?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "10" },
            { letter: "C", text: "1" },
            { letter: "D", text: "0" }
          ],
          correct: "A"
        },
        {
          id: "fish-turn",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the smallest angle of rotation, about its center, that maps the starfish onto itself?",
          choices: [
            { letter: "A", text: "36°" },
            { letter: "B", text: "108°" },
            { letter: "C", text: "72°" },
            { letter: "D", text: "180°" }
          ],
          correct: "C"
        },
        {
          id: "clover-order",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "What is the order of rotational symmetry of the clover?",
          choices: [
            { letter: "A", text: "120" },
            { letter: "B", text: "6" },
            { letter: "C", text: "3" },
            { letter: "D", text: "1" }
          ],
          correct: "C"
        },
        {
          id: "leaf-sym",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which describes the symmetry of the leaf, including its stem?",
          choices: [
            { letter: "A", text: "2 lines of symmetry; rotational symmetry of order 2" },
            { letter: "B", text: "1 line of symmetry; no rotational symmetry" },
            { letter: "C", text: "No lines of symmetry; no rotational symmetry" },
            { letter: "D", text: "1 line of symmetry; rotational symmetry of order 2" }
          ],
          correct: "B"
        },
        {
          id: "fish-not",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which rotation about its center does NOT map the starfish onto itself?",
          choices: [
            { letter: "A", text: "144°" },
            { letter: "B", text: "216°" },
            { letter: "C", text: "288°" },
            { letter: "D", text: "120°" }
          ],
          correct: "D"
        },
        {
          id: "guide",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A field guide prints the starfish 3 times as large, by a dilation with scale factor 3. Which is true of the picture?",
          choices: [
            { letter: "A", text: "Each arm is 3 times as long; the angles are unchanged." },
            { letter: "B", text: "It is congruent to the starfish." },
            { letter: "C", text: "Each arm is 9 times as long; the angles are unchanged." },
            { letter: "D", text: "Each arm is 3 times as long; each angle is 3 times as large." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-worms-pond-pine",
      family: "GEO",
      mode: "worms",
      title: "The Pine in the Pond",
      kind: "Transformations · G.RLT.3",
      blurb: "A pine tree and its upside-down image in a still pond.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Coordinate grid with a pine tree above the x-axis, which is the surface of a pond shaded below it; the tree has top T at (-2, 6) and lower corners A at (-4, 2) and B at (0, 2), and a trunk from y = 1 to y = 2\">" +
        "<rect class=\"sh2\" x=\"95\" y=\"87\" width=\"130\" height=\"65\"/>" +
        "<line class=\"gr\" x1=\"95\" y1=\"9\" x2=\"95\" y2=\"152\"/><line class=\"gr\" x1=\"108\" y1=\"9\" x2=\"108\" y2=\"152\"/><line class=\"gr\" x1=\"121\" y1=\"9\" x2=\"121\" y2=\"152\"/><line class=\"gr\" x1=\"134\" y1=\"9\" x2=\"134\" y2=\"152\"/><line class=\"gr\" x1=\"147\" y1=\"9\" x2=\"147\" y2=\"152\"/><line class=\"gr\" x1=\"160\" y1=\"9\" x2=\"160\" y2=\"152\"/><line class=\"gr\" x1=\"186\" y1=\"9\" x2=\"186\" y2=\"152\"/><line class=\"gr\" x1=\"199\" y1=\"9\" x2=\"199\" y2=\"152\"/><line class=\"gr\" x1=\"212\" y1=\"9\" x2=\"212\" y2=\"152\"/><line class=\"gr\" x1=\"225\" y1=\"9\" x2=\"225\" y2=\"152\"/>" +
        "<line class=\"gr\" x1=\"95\" y1=\"152\" x2=\"225\" y2=\"152\"/><line class=\"gr\" x1=\"95\" y1=\"139\" x2=\"225\" y2=\"139\"/><line class=\"gr\" x1=\"95\" y1=\"126\" x2=\"225\" y2=\"126\"/><line class=\"gr\" x1=\"95\" y1=\"113\" x2=\"225\" y2=\"113\"/><line class=\"gr\" x1=\"95\" y1=\"100\" x2=\"225\" y2=\"100\"/><line class=\"gr\" x1=\"95\" y1=\"74\" x2=\"225\" y2=\"74\"/><line class=\"gr\" x1=\"95\" y1=\"61\" x2=\"225\" y2=\"61\"/><line class=\"gr\" x1=\"95\" y1=\"48\" x2=\"225\" y2=\"48\"/><line class=\"gr\" x1=\"95\" y1=\"35\" x2=\"225\" y2=\"35\"/><line class=\"gr\" x1=\"95\" y1=\"22\" x2=\"225\" y2=\"22\"/><line class=\"gr\" x1=\"95\" y1=\"9\" x2=\"225\" y2=\"9\"/>" +
        "<line class=\"ax\" x1=\"95\" y1=\"87\" x2=\"225\" y2=\"87\"/><line class=\"ax\" x1=\"173\" y1=\"152\" x2=\"173\" y2=\"9\"/>" +
        "<text class=\"sm\" x=\"121\" y=\"100\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"199\" y=\"100\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"177\" y=\"143\">−4</text><text class=\"sm\" x=\"177\" y=\"39\">4</text><text class=\"sm\" x=\"229\" y=\"91\">x</text><text class=\"sm\" x=\"168\" y=\"19\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh\" points=\"147,9 173,61 160,61 160,74 134,74 134,61 121,61\"/>" +
        "<circle class=\"dt\" cx=\"147\" cy=\"9\" r=\"3\"/><circle class=\"dt\" cx=\"121\" cy=\"61\" r=\"3\"/><circle class=\"dt\" cx=\"173\" cy=\"61\" r=\"3\"/>" +
        "<text x=\"139\" y=\"14\" text-anchor=\"end\">T</text><text x=\"113\" y=\"66\" text-anchor=\"end\">A</text><text x=\"181\" y=\"66\">B</text>" +
        "<text class=\"sm\" x=\"99\" y=\"143\">pond</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A pine tree stands at the edge of a still pond. On a grid, the pond's surface is the x-axis. The tree's outline has top <strong>T</strong>(−2, 6) and lower corners <strong>A</strong>(−4, 2) and <strong>B</strong>(0, 2), with a trunk from y = 1 to y = 2 between x = −3 and x = −1.</p>",
      claims: [
        {
          id: "pond-t",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The pond reflects the tree over the x-axis. What is the image of T?",
          choices: [
            { letter: "A", text: "(2, 6)" },
            { letter: "B", text: "(−2, −6)" },
            { letter: "C", text: "(2, −6)" },
            { letter: "D", text: "(6, −2)" }
          ],
          correct: "B"
        },
        {
          id: "plant",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A second pine grows farther up the bank, where the first tree would land under (x, y) → (x + 7, y + 1). What is the image of A?",
          choices: [
            { letter: "A", text: "(3, 3)" },
            { letter: "B", text: "(−11, 1)" },
            { letter: "C", text: "(−3, 9)" },
            { letter: "D", text: "(3, 2)" }
          ],
          correct: "A"
        },
        {
          id: "photo",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A photo of the scene is turned a quarter turn, 90° counterclockwise about the origin. What is the image of A?",
          choices: [
            { letter: "A", text: "(2, 4)" },
            { letter: "B", text: "(−2, −4)" },
            { letter: "C", text: "(4, −2)" },
            { letter: "D", text: "(2, −4)" }
          ],
          correct: "B"
        },
        {
          id: "mirror",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which line is a line of symmetry of the tree?",
          choices: [
            { letter: "A", text: "y = 0" },
            { letter: "B", text: "x = 0" },
            { letter: "C", text: "y = 3" },
            { letter: "D", text: "x = −2" }
          ],
          correct: "D"
        },
        {
          id: "which",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which single transformation maps the tree onto its image in the pond?",
          choices: [
            { letter: "A", text: "Rotation of 180° about the origin" },
            { letter: "B", text: "Reflection over the y-axis" },
            { letter: "C", text: "Reflection over the x-axis" },
            { letter: "D", text: "Translation 7 units down" }
          ],
          correct: "C"
        },
        {
          id: "not-same",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which is NOT the same for the tree and its image in the pond?",
          choices: [
            { letter: "A", text: "The height of the tree" },
            { letter: "B", text: "The angle at the top" },
            { letter: "C", text: "The area of the outline" },
            { letter: "D", text: "The y-coordinate of the top" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt3-worms-butterfly",
      family: "GEO",
      mode: "worms",
      title: "Painting a Butterfly",
      kind: "Transformations · G.RLT.3",
      blurb: "One wing is painted; the other is its mirror image over the body.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Coordinate grid with a butterfly body along the line x = 1 from y = 1 to y = 5, and right wing ABCD: A at (1, 4), B at (4, 6), C at (6, 3) and D at (1, 2)\">" +
        "<line class=\"gr\" x1=\"64\" y1=\"11\" x2=\"64\" y2=\"139\"/><line class=\"gr\" x1=\"80\" y1=\"11\" x2=\"80\" y2=\"139\"/><line class=\"gr\" x1=\"96\" y1=\"11\" x2=\"96\" y2=\"139\"/><line class=\"gr\" x1=\"112\" y1=\"11\" x2=\"112\" y2=\"139\"/><line class=\"gr\" x1=\"128\" y1=\"11\" x2=\"128\" y2=\"139\"/><line class=\"gr\" x1=\"160\" y1=\"11\" x2=\"160\" y2=\"139\"/><line class=\"gr\" x1=\"176\" y1=\"11\" x2=\"176\" y2=\"139\"/><line class=\"gr\" x1=\"192\" y1=\"11\" x2=\"192\" y2=\"139\"/><line class=\"gr\" x1=\"208\" y1=\"11\" x2=\"208\" y2=\"139\"/><line class=\"gr\" x1=\"224\" y1=\"11\" x2=\"224\" y2=\"139\"/><line class=\"gr\" x1=\"240\" y1=\"11\" x2=\"240\" y2=\"139\"/><line class=\"gr\" x1=\"256\" y1=\"11\" x2=\"256\" y2=\"139\"/>" +
        "<line class=\"gr\" x1=\"64\" y1=\"139\" x2=\"256\" y2=\"139\"/><line class=\"gr\" x1=\"64\" y1=\"107\" x2=\"256\" y2=\"107\"/><line class=\"gr\" x1=\"64\" y1=\"91\" x2=\"256\" y2=\"91\"/><line class=\"gr\" x1=\"64\" y1=\"75\" x2=\"256\" y2=\"75\"/><line class=\"gr\" x1=\"64\" y1=\"59\" x2=\"256\" y2=\"59\"/><line class=\"gr\" x1=\"64\" y1=\"43\" x2=\"256\" y2=\"43\"/><line class=\"gr\" x1=\"64\" y1=\"27\" x2=\"256\" y2=\"27\"/><line class=\"gr\" x1=\"64\" y1=\"11\" x2=\"256\" y2=\"11\"/>" +
        "<line class=\"ax\" x1=\"64\" y1=\"123\" x2=\"256\" y2=\"123\"/><line class=\"ax\" x1=\"144\" y1=\"139\" x2=\"144\" y2=\"11\"/>" +
        "<text class=\"sm\" x=\"80\" y=\"136\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"208\" y=\"136\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"140\" y=\"31\" text-anchor=\"end\">6</text><text class=\"sm\" x=\"260\" y=\"127\">x</text><text class=\"sm\" x=\"149\" y=\"21\">y</text>" +
        "<polygon class=\"sh2\" points=\"160,59 208,27 240,75 160,91\"/>" +
        "<rect class=\"sh\" x=\"157\" y=\"43\" width=\"6\" height=\"64\" rx=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"59\" r=\"3\"/><circle class=\"dt\" cx=\"208\" cy=\"27\" r=\"3\"/><circle class=\"dt\" cx=\"240\" cy=\"75\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"91\" r=\"3\"/>" +
        "<text x=\"152\" y=\"64\" text-anchor=\"end\">A</text><text x=\"208\" y=\"20\" text-anchor=\"middle\">B</text><text x=\"248\" y=\"80\">C</text><text x=\"152\" y=\"96\" text-anchor=\"end\">D</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">An artist paints a butterfly on a grid. The body lies along the line x = 1. The right wing is <strong>ABCD</strong> with A(1, 4), B(4, 6), C(6, 3) and D(1, 2). The left wing will be the mirror image of the right wing over the line x = 1.</p>",
      claims: [
        {
          id: "left-b",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of B on the left wing (its reflection over the line x = 1)?",
          choices: [
            { letter: "A", text: "(−2, 6)" },
            { letter: "B", text: "(−4, 6)" },
            { letter: "C", text: "(−3, 6)" },
            { letter: "D", text: "(4, −4)" }
          ],
          correct: "A"
        },
        {
          id: "shadow",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A shadow of the right wing is drawn by reflecting it over the line y = −1. What is the image of C?",
          choices: [
            { letter: "A", text: "(6, −3)" },
            { letter: "B", text: "(6, −5)" },
            { letter: "C", text: "(6, −4)" },
            { letter: "D", text: "(−8, 3)" }
          ],
          correct: "B"
        },
        {
          id: "photo",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "In a photo, the right wing appears as A′(−4, −1), B′(−6, −4), C′(−3, −6) and D′(−2, −1). Which single transformation maps ABCD to A′B′C′D′?",
          choices: [
            { letter: "A", text: "Rotation of 180° about the origin" },
            { letter: "B", text: "Reflection over the line y = x" },
            { letter: "C", text: "Reflection over the line y = −x" },
            { letter: "D", text: "Rotation of 90° clockwise about the origin" }
          ],
          correct: "C"
        },
        {
          id: "sequence",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which sequence also maps the right wing onto the left wing?",
          choices: [
            { letter: "A", text: "Reflect over the y-axis, then translate 1 unit right" },
            { letter: "B", text: "Translate 2 units right, then reflect over the y-axis" },
            { letter: "C", text: "Translate 2 units left, with no reflection" },
            { letter: "D", text: "Reflect over the y-axis, then translate 2 units right" }
          ],
          correct: "D"
        },
        {
          id: "congruent",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Is the left wing congruent to the right wing? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; a reflection keeps all lengths and angle measures." },
            { letter: "B", text: "No; a reflection reverses the wing, so its angles change." },
            { letter: "C", text: "No; the left wing covers a larger area." },
            { letter: "D", text: "Yes; every reflection is also a translation." }
          ],
          correct: "A"
        },
        {
          id: "onto",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "When both wings are painted, which transformation maps the whole butterfly onto itself?",
          choices: [
            { letter: "A", text: "Rotation of 180° about (1, 4)" },
            { letter: "B", text: "Reflection over the y-axis" },
            { letter: "C", text: "Reflection over the line y = 4" },
            { letter: "D", text: "Reflection over the line x = 1" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt3-worms-garden-beds",
      family: "GEO",
      mode: "worms",
      title: "Planning the Flower Beds",
      kind: "Transformations · G.RLT.3",
      blurb: "A garden bed is scaled up and down about the origin.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Coordinate grid with a garden bed, pentagon ABCDE: A at (-6, -3), B at (3, -3), C at (6, 3), D at (0, 6) and E at (-6, 3)\">" +
        "<line class=\"gr\" x1=\"76\" y1=\"12\" x2=\"76\" y2=\"144\"/><line class=\"gr\" x1=\"88\" y1=\"12\" x2=\"88\" y2=\"144\"/><line class=\"gr\" x1=\"100\" y1=\"12\" x2=\"100\" y2=\"144\"/><line class=\"gr\" x1=\"112\" y1=\"12\" x2=\"112\" y2=\"144\"/><line class=\"gr\" x1=\"124\" y1=\"12\" x2=\"124\" y2=\"144\"/><line class=\"gr\" x1=\"136\" y1=\"12\" x2=\"136\" y2=\"144\"/><line class=\"gr\" x1=\"148\" y1=\"12\" x2=\"148\" y2=\"144\"/><line class=\"gr\" x1=\"172\" y1=\"12\" x2=\"172\" y2=\"144\"/><line class=\"gr\" x1=\"184\" y1=\"12\" x2=\"184\" y2=\"144\"/><line class=\"gr\" x1=\"196\" y1=\"12\" x2=\"196\" y2=\"144\"/><line class=\"gr\" x1=\"208\" y1=\"12\" x2=\"208\" y2=\"144\"/><line class=\"gr\" x1=\"220\" y1=\"12\" x2=\"220\" y2=\"144\"/><line class=\"gr\" x1=\"232\" y1=\"12\" x2=\"232\" y2=\"144\"/><line class=\"gr\" x1=\"244\" y1=\"12\" x2=\"244\" y2=\"144\"/>" +
        "<line class=\"gr\" x1=\"76\" y1=\"144\" x2=\"244\" y2=\"144\"/><line class=\"gr\" x1=\"76\" y1=\"132\" x2=\"244\" y2=\"132\"/><line class=\"gr\" x1=\"76\" y1=\"120\" x2=\"244\" y2=\"120\"/><line class=\"gr\" x1=\"76\" y1=\"108\" x2=\"244\" y2=\"108\"/><line class=\"gr\" x1=\"76\" y1=\"84\" x2=\"244\" y2=\"84\"/><line class=\"gr\" x1=\"76\" y1=\"72\" x2=\"244\" y2=\"72\"/><line class=\"gr\" x1=\"76\" y1=\"60\" x2=\"244\" y2=\"60\"/><line class=\"gr\" x1=\"76\" y1=\"48\" x2=\"244\" y2=\"48\"/><line class=\"gr\" x1=\"76\" y1=\"36\" x2=\"244\" y2=\"36\"/><line class=\"gr\" x1=\"76\" y1=\"24\" x2=\"244\" y2=\"24\"/><line class=\"gr\" x1=\"76\" y1=\"12\" x2=\"244\" y2=\"12\"/>" +
        "<line class=\"ax\" x1=\"76\" y1=\"96\" x2=\"244\" y2=\"96\"/><line class=\"ax\" x1=\"160\" y1=\"144\" x2=\"160\" y2=\"12\"/>" +
        "<text class=\"sm\" x=\"124\" y=\"109\" text-anchor=\"middle\">−3</text><text class=\"sm\" x=\"196\" y=\"109\" text-anchor=\"middle\">3</text><text class=\"sm\" x=\"164\" y=\"64\">3</text><text class=\"sm\" x=\"248\" y=\"100\">x</text><text class=\"sm\" x=\"155\" y=\"22\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh2\" points=\"88,132 196,132 232,60 160,24 88,60\"/>" +
        "<circle class=\"dt\" cx=\"88\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"196\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"232\" cy=\"60\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"24\" r=\"3\"/><circle class=\"dt\" cx=\"88\" cy=\"60\" r=\"3\"/>" +
        "<text x=\"83\" y=\"147\" text-anchor=\"end\">A</text><text x=\"201\" y=\"147\">B</text><text x=\"240\" y=\"65\">C</text><text x=\"165\" y=\"19\">D</text><text x=\"80\" y=\"65\" text-anchor=\"end\">E</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A garden plan uses a grid in meters. A flower bed is pentagon <strong>ABCDE</strong> with A(−6, −3), B(3, −3), C(6, 3), D(0, 6) and E(−6, 3). Its area is 81 square meters. Other beds are planned by dilations centered at the origin.</p>",
      claims: [
        {
          id: "small-c",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of C under a dilation with scale factor 2/3 centered at the origin?",
          choices: [
            { letter: "A", text: "(4, 2)" },
            { letter: "B", text: "(9, 4.5)" },
            { letter: "C", text: "(4, 3)" },
            { letter: "D", text: "(12, 6)" }
          ],
          correct: "A"
        },
        {
          id: "small-area",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the area of the image of ABCDE under a dilation with scale factor 2/3 centered at the origin?",
          choices: [
            { letter: "A", text: "54 square meters" },
            { letter: "B", text: "81 square meters" },
            { letter: "C", text: "36 square meters" },
            { letter: "D", text: "24 square meters" }
          ],
          correct: "C"
        },
        {
          id: "rule",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A larger bed is made by a dilation with scale factor 4/3 centered at the origin. Which rule describes it?",
          choices: [
            { letter: "A", text: "(x, y) → (x + 4/3, y + 4/3)" },
            { letter: "B", text: "(x, y) → ((4/3)x, (4/3)y)" },
            { letter: "C", text: "(x, y) → ((3/4)x, (3/4)y)" },
            { letter: "D", text: "(x, y) → ((4/3)x, y)" }
          ],
          correct: "B"
        },
        {
          id: "factor",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "A dilation centered at the origin maps E(−6, 3) to (−2, 1). What is its scale factor?",
          choices: [
            { letter: "A", text: "k = 3" },
            { letter: "B", text: "k = 1/3" },
            { letter: "C", text: "k = 4" },
            { letter: "D", text: "k = 2" }
          ],
          correct: "B"
        },
        {
          id: "not-true",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which is NOT true of the image of ABCDE under a dilation with scale factor 2/3 centered at the origin?",
          choices: [
            { letter: "A", text: "Its angles have the same measures as those of ABCDE." },
            { letter: "B", text: "Each side is parallel to the matching side of ABCDE." },
            { letter: "C", text: "Its perimeter is 4/9 of the perimeter of ABCDE." },
            { letter: "D", text: "The image of D is on the y-axis." }
          ],
          correct: "C"
        },
        {
          id: "quarter",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The gardener wants a bed with the same shape as ABCDE and one fourth of its area, made by a dilation centered at the origin. What scale factor should she use?",
          choices: [
            { letter: "A", text: "1/4" },
            { letter: "B", text: "1/16" },
            { letter: "C", text: "1/8" },
            { letter: "D", text: "1/2" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt3-worms-maple-seed",
      family: "GEO",
      mode: "worms",
      title: "The Spinning Maple Seed",
      kind: "Transformations · G.RLT.3",
      blurb: "A maple seed's wing turns about the seed as it falls.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"Coordinate grid with a maple seed wing, quadrilateral OABC: O at the origin, A at (1, 2), B at (5, 3) and C at (4, 1)\">" +
        "<line class=\"gr\" x1=\"88\" y1=\"10\" x2=\"88\" y2=\"154\"/><line class=\"gr\" x1=\"100\" y1=\"10\" x2=\"100\" y2=\"154\"/><line class=\"gr\" x1=\"112\" y1=\"10\" x2=\"112\" y2=\"154\"/><line class=\"gr\" x1=\"124\" y1=\"10\" x2=\"124\" y2=\"154\"/><line class=\"gr\" x1=\"136\" y1=\"10\" x2=\"136\" y2=\"154\"/><line class=\"gr\" x1=\"148\" y1=\"10\" x2=\"148\" y2=\"154\"/><line class=\"gr\" x1=\"172\" y1=\"10\" x2=\"172\" y2=\"154\"/><line class=\"gr\" x1=\"184\" y1=\"10\" x2=\"184\" y2=\"154\"/><line class=\"gr\" x1=\"196\" y1=\"10\" x2=\"196\" y2=\"154\"/><line class=\"gr\" x1=\"208\" y1=\"10\" x2=\"208\" y2=\"154\"/><line class=\"gr\" x1=\"220\" y1=\"10\" x2=\"220\" y2=\"154\"/><line class=\"gr\" x1=\"232\" y1=\"10\" x2=\"232\" y2=\"154\"/>" +
        "<line class=\"gr\" x1=\"88\" y1=\"154\" x2=\"232\" y2=\"154\"/><line class=\"gr\" x1=\"88\" y1=\"142\" x2=\"232\" y2=\"142\"/><line class=\"gr\" x1=\"88\" y1=\"130\" x2=\"232\" y2=\"130\"/><line class=\"gr\" x1=\"88\" y1=\"118\" x2=\"232\" y2=\"118\"/><line class=\"gr\" x1=\"88\" y1=\"106\" x2=\"232\" y2=\"106\"/><line class=\"gr\" x1=\"88\" y1=\"94\" x2=\"232\" y2=\"94\"/><line class=\"gr\" x1=\"88\" y1=\"70\" x2=\"232\" y2=\"70\"/><line class=\"gr\" x1=\"88\" y1=\"58\" x2=\"232\" y2=\"58\"/><line class=\"gr\" x1=\"88\" y1=\"46\" x2=\"232\" y2=\"46\"/><line class=\"gr\" x1=\"88\" y1=\"34\" x2=\"232\" y2=\"34\"/><line class=\"gr\" x1=\"88\" y1=\"22\" x2=\"232\" y2=\"22\"/><line class=\"gr\" x1=\"88\" y1=\"10\" x2=\"232\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"88\" y1=\"82\" x2=\"232\" y2=\"82\"/><line class=\"ax\" x1=\"160\" y1=\"154\" x2=\"160\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"112\" y=\"95\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"164\" y=\"134\">−4</text><text class=\"sm\" x=\"236\" y=\"86\">x</text><text class=\"sm\" x=\"155\" y=\"20\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh\" points=\"160,82 172,58 220,46 208,70\"/>" +
        "<circle class=\"sh2\" cx=\"160\" cy=\"82\" r=\"6\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"172\" cy=\"58\" r=\"3\"/><circle class=\"dt\" cx=\"220\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"208\" cy=\"70\" r=\"3\"/>" +
        "<text x=\"155\" y=\"97\" text-anchor=\"end\">O</text><text x=\"167\" y=\"53\" text-anchor=\"end\">A</text><text x=\"225\" y=\"41\">B</text><text x=\"213\" y=\"85\">C</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A maple seed spins as it falls. In a top view on a grid, the seed is at the origin <strong>O</strong> and its wing is quadrilateral <strong>OABC</strong> with A(1, 2), B(5, 3) and C(4, 1). As the seed spins, the wing turns about O.</p>",
      claims: [
        {
          id: "cw-b",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of B after a rotation of 90° clockwise about O?",
          choices: [
            { letter: "A", text: "(3, −5)" },
            { letter: "B", text: "(−3, 5)" },
            { letter: "C", text: "(−5, −3)" },
            { letter: "D", text: "(3, 5)" }
          ],
          correct: "A"
        },
        {
          id: "half-a",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of A after a rotation of 180° about O?",
          choices: [
            { letter: "A", text: "(−1, −2)" },
            { letter: "B", text: "(1, −2)" },
            { letter: "C", text: "(−1, 2)" },
            { letter: "D", text: "(−2, 1)" }
          ],
          correct: "A"
        },
        {
          id: "ccw270-c",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "The wing turns 270° counterclockwise about O. What is the image of C?",
          choices: [
            { letter: "A", text: "(−1, 4)" },
            { letter: "B", text: "(−4, −1)" },
            { letter: "C", text: "(1, 4)" },
            { letter: "D", text: "(1, −4)" }
          ],
          correct: "D"
        },
        {
          id: "which",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Later the wing is OA′B′C′ with A′(−2, 1), B′(−3, 5) and C′(−1, 4). Which single transformation maps OABC to OA′B′C′?",
          choices: [
            { letter: "A", text: "Rotation of 90° clockwise about O" },
            { letter: "B", text: "Rotation of 90° counterclockwise about O" },
            { letter: "C", text: "Reflection over the line y = x" },
            { letter: "D", text: "Reflection over the y-axis" }
          ],
          correct: "B"
        },
        {
          id: "three",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "The wing turns 90° clockwise about O three times in a row. Which single rotation about O has the same effect?",
          choices: [
            { letter: "A", text: "270° counterclockwise" },
            { letter: "B", text: "90° counterclockwise" },
            { letter: "C", text: "180°" },
            { letter: "D", text: "90° clockwise" }
          ],
          correct: "B"
        },
        {
          id: "pair",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Maple seeds grow in joined pairs. Model a pair as OABC together with its image under a rotation of 180° about O. Which describes the symmetry of the pair?",
          choices: [
            { letter: "A", text: "Rotational symmetry of order 2; 1 line of symmetry" },
            { letter: "B", text: "Rotational symmetry of order 4; no lines of symmetry" },
            { letter: "C", text: "Rotational symmetry of order 2; no lines of symmetry" },
            { letter: "D", text: "No rotational symmetry; 1 line of symmetry" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt3-worms-fox-tracks",
      family: "GEO",
      mode: "worms",
      title: "Fox Tracks in the Snow",
      kind: "Transformations · G.RLT.3",
      blurb: "Left and right paw prints: a flip and a slide along the trail.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 148\" role=\"img\" aria-label=\"Coordinate grid snowy trail with the x-axis as its middle; print 1, triangle PQR with P at (-6, 1), Q at (-3, 2) and R at (-5, 3); print 2, triangle P'Q'R' with P' at (-3, -1), Q' at (0, -2) and R' at (-2, -3)\">" +
        "<line class=\"gr\" x1=\"72\" y1=\"10\" x2=\"72\" y2=\"138\"/><line class=\"gr\" x1=\"88\" y1=\"10\" x2=\"88\" y2=\"138\"/><line class=\"gr\" x1=\"104\" y1=\"10\" x2=\"104\" y2=\"138\"/><line class=\"gr\" x1=\"120\" y1=\"10\" x2=\"120\" y2=\"138\"/><line class=\"gr\" x1=\"136\" y1=\"10\" x2=\"136\" y2=\"138\"/><line class=\"gr\" x1=\"152\" y1=\"10\" x2=\"152\" y2=\"138\"/><line class=\"gr\" x1=\"168\" y1=\"10\" x2=\"168\" y2=\"138\"/><line class=\"gr\" x1=\"200\" y1=\"10\" x2=\"200\" y2=\"138\"/><line class=\"gr\" x1=\"216\" y1=\"10\" x2=\"216\" y2=\"138\"/><line class=\"gr\" x1=\"232\" y1=\"10\" x2=\"232\" y2=\"138\"/><line class=\"gr\" x1=\"248\" y1=\"10\" x2=\"248\" y2=\"138\"/>" +
        "<line class=\"gr\" x1=\"72\" y1=\"138\" x2=\"248\" y2=\"138\"/><line class=\"gr\" x1=\"72\" y1=\"122\" x2=\"248\" y2=\"122\"/><line class=\"gr\" x1=\"72\" y1=\"106\" x2=\"248\" y2=\"106\"/><line class=\"gr\" x1=\"72\" y1=\"90\" x2=\"248\" y2=\"90\"/><line class=\"gr\" x1=\"72\" y1=\"58\" x2=\"248\" y2=\"58\"/><line class=\"gr\" x1=\"72\" y1=\"42\" x2=\"248\" y2=\"42\"/><line class=\"gr\" x1=\"72\" y1=\"26\" x2=\"248\" y2=\"26\"/><line class=\"gr\" x1=\"72\" y1=\"10\" x2=\"248\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"72\" y1=\"74\" x2=\"248\" y2=\"74\"/><line class=\"ax\" x1=\"184\" y1=\"138\" x2=\"184\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"216\" y=\"87\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"188\" y=\"14\">4</text><text class=\"sm\" x=\"252\" y=\"78\">x</text><text class=\"sm\" x=\"179\" y=\"20\" text-anchor=\"end\">y</text>" +
        "<line class=\"thin dash\" x1=\"72\" y1=\"74\" x2=\"248\" y2=\"74\"/>" +
        "<polygon class=\"sh\" points=\"88,58 136,42 104,26\"/>" +
        "<polygon class=\"sh2\" points=\"136,90 184,106 152,122\"/>" +
        "<circle class=\"dt\" cx=\"88\" cy=\"58\" r=\"3\"/><circle class=\"dt\" cx=\"136\" cy=\"42\" r=\"3\"/><circle class=\"dt\" cx=\"104\" cy=\"26\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"136\" cy=\"90\" r=\"3\"/><circle class=\"dt\" cx=\"184\" cy=\"106\" r=\"3\"/><circle class=\"dt\" cx=\"152\" cy=\"122\" r=\"3\"/>" +
        "<text x=\"80\" y=\"63\" text-anchor=\"end\">P</text><text x=\"144\" y=\"47\">Q</text><text x=\"104\" y=\"19\" text-anchor=\"middle\">R</text>" +
        "<text x=\"128\" y=\"95\" text-anchor=\"end\">P′</text><text x=\"192\" y=\"111\">Q′</text><text x=\"152\" y=\"139\" text-anchor=\"middle\">R′</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A fox walks along a straight trail in the snow. On a grid, the middle of the trail is the x-axis. Print 1 is <strong>△PQR</strong> with P(−6, 1), Q(−3, 2) and R(−5, 3). Print 2 is <strong>△P′Q′R′</strong> with P′(−3, −1), Q′(0, −2) and R′(−2, −3).</p>",
      claims: [
        {
          id: "which",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which sequence maps print 1 to print 2?",
          choices: [
            { letter: "A", text: "Reflect over the x-axis, then translate 3 units right" },
            { letter: "B", text: "Translate 3 units right and 2 units down" },
            { letter: "C", text: "Reflect over the y-axis, then translate 3 units left" },
            { letter: "D", text: "Reflect over the x-axis, with no translation" }
          ],
          correct: "A"
        },
        {
          id: "print3",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Print 3 is the image of print 2 under the same moves: reflect over the x-axis, then translate 3 units right. Where is the image of R′?",
          choices: [
            { letter: "A", text: "(1, −3)" },
            { letter: "B", text: "(1, 3)" },
            { letter: "C", text: "(−2, 3)" },
            { letter: "D", text: "(−5, 3)" }
          ],
          correct: "B"
        },
        {
          id: "one-to-three",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Print 3 is print 2 reflected over the x-axis and then translated 3 units right. Which single transformation maps print 1 onto print 3?",
          choices: [
            { letter: "A", text: "Translation 3 units right" },
            { letter: "B", text: "Reflection over the x-axis" },
            { letter: "C", text: "Translation 6 units right" },
            { letter: "D", text: "Rotation of 180° about the origin" }
          ],
          correct: "C"
        },
        {
          id: "order",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "If print 1 is translated 3 units right first and then reflected over the x-axis, is the image still print 2? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No; changing the order of two moves always changes the image." },
            { letter: "B", text: "No; reflecting last leaves the image above the x-axis." },
            { letter: "C", text: "Yes; the order of transformations never matters." },
            { letter: "D", text: "Yes; the slide runs along the mirror line, so the order does not matter here." }
          ],
          correct: "D"
        },
        {
          id: "map",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "A trail map is printed upside down, which rotates it 180° about the origin. What is the image of Q?",
          choices: [
            { letter: "A", text: "(−3, −2)" },
            { letter: "B", text: "(3, 2)" },
            { letter: "C", text: "(3, −2)" },
            { letter: "D", text: "(2, 3)" }
          ],
          correct: "C"
        },
        {
          id: "not-same",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which is NOT the same for print 1 and print 2?",
          choices: [
            { letter: "A", text: "Their side lengths" },
            { letter: "B", text: "Their angle measures" },
            { letter: "C", text: "Their areas" },
            { letter: "D", text: "Their orientation" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt3-worms-geese-rules",
      family: "GEO",
      mode: "worms",
      title: "Rules for a Flock of Geese",
      kind: "Transformations · G.RLT.3",
      blurb: "Four mapping rules move a V of geese: which keep its shape?",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Coordinate grid with five geese flying in a V: L at (2, 5), A at (1, 4), B at (0, 3), C at (3, 4) and D at (4, 3)\">" +
        "<line class=\"gr\" x1=\"78\" y1=\"15\" x2=\"78\" y2=\"135\"/><line class=\"gr\" x1=\"93\" y1=\"15\" x2=\"93\" y2=\"135\"/><line class=\"gr\" x1=\"108\" y1=\"15\" x2=\"108\" y2=\"135\"/><line class=\"gr\" x1=\"123\" y1=\"15\" x2=\"123\" y2=\"135\"/><line class=\"gr\" x1=\"138\" y1=\"15\" x2=\"138\" y2=\"135\"/><line class=\"gr\" x1=\"168\" y1=\"15\" x2=\"168\" y2=\"135\"/><line class=\"gr\" x1=\"183\" y1=\"15\" x2=\"183\" y2=\"135\"/><line class=\"gr\" x1=\"198\" y1=\"15\" x2=\"198\" y2=\"135\"/><line class=\"gr\" x1=\"213\" y1=\"15\" x2=\"213\" y2=\"135\"/><line class=\"gr\" x1=\"228\" y1=\"15\" x2=\"228\" y2=\"135\"/><line class=\"gr\" x1=\"243\" y1=\"15\" x2=\"243\" y2=\"135\"/>" +
        "<line class=\"gr\" x1=\"78\" y1=\"135\" x2=\"243\" y2=\"135\"/><line class=\"gr\" x1=\"78\" y1=\"120\" x2=\"243\" y2=\"120\"/><line class=\"gr\" x1=\"78\" y1=\"90\" x2=\"243\" y2=\"90\"/><line class=\"gr\" x1=\"78\" y1=\"75\" x2=\"243\" y2=\"75\"/><line class=\"gr\" x1=\"78\" y1=\"60\" x2=\"243\" y2=\"60\"/><line class=\"gr\" x1=\"78\" y1=\"45\" x2=\"243\" y2=\"45\"/><line class=\"gr\" x1=\"78\" y1=\"30\" x2=\"243\" y2=\"30\"/><line class=\"gr\" x1=\"78\" y1=\"15\" x2=\"243\" y2=\"15\"/>" +
        "<line class=\"ax\" x1=\"78\" y1=\"105\" x2=\"243\" y2=\"105\"/><line class=\"ax\" x1=\"153\" y1=\"135\" x2=\"153\" y2=\"15\"/>" +
        "<text class=\"sm\" x=\"93\" y=\"118\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"183\" y=\"118\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"213\" y=\"118\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"247\" y=\"109\">x</text><text class=\"sm\" x=\"148\" y=\"25\" text-anchor=\"end\">y</text>" +
        "<polyline class=\"thin dash\" points=\"153,60 168,45 183,30 198,45 213,60\"/>" +
        "<circle class=\"dta\" cx=\"183\" cy=\"30\" r=\"3\"/><circle class=\"dta\" cx=\"168\" cy=\"45\" r=\"3\"/><circle class=\"dta\" cx=\"153\" cy=\"60\" r=\"3\"/><circle class=\"dta\" cx=\"198\" cy=\"45\" r=\"3\"/><circle class=\"dta\" cx=\"213\" cy=\"60\" r=\"3\"/>" +
        "<text x=\"183\" y=\"23\" text-anchor=\"middle\">L</text><text x=\"163\" y=\"40\" text-anchor=\"end\">A</text><text x=\"145\" y=\"65\" text-anchor=\"end\">B</text><text x=\"203\" y=\"40\">C</text><text x=\"221\" y=\"65\">D</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A biologist models a flock of geese flying in a V on a grid: <strong>L</strong>(2, 5), <strong>A</strong>(1, 4), <strong>B</strong>(0, 3), <strong>C</strong>(3, 4) and <strong>D</strong>(4, 3). Her model moves birds with four rules.</p><p class=\"geo-given\">Rule 1: (x, y) → (y, −x)<br>Rule 2: (x, y) → (−x, y)<br>Rule 3: (x, y) → (x − 4, y + 1)<br>Rule 4: (x, y) → (2x, 2y)</p>",
      claims: [
        {
          id: "rule1",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which transformation does Rule 1 describe?",
          choices: [
            { letter: "A", text: "Rotation of 90° counterclockwise about the origin" },
            { letter: "B", text: "Reflection over the line y = −x" },
            { letter: "C", text: "Rotation of 90° clockwise about the origin" },
            { letter: "D", text: "Reflection over the line y = x" }
          ],
          correct: "C"
        },
        {
          id: "b-moves",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Bird B is moved by Rule 1 and then by Rule 3. Where does it end up?",
          choices: [
            { letter: "A", text: "(4, 4)" },
            { letter: "B", text: "(3, 0)" },
            { letter: "C", text: "(−7, 1)" },
            { letter: "D", text: "(−1, 1)" }
          ],
          correct: "D"
        },
        {
          id: "two-rules",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which single transformation is the same as Rule 2 followed by Rule 1?",
          choices: [
            { letter: "A", text: "Reflection over the line y = −x" },
            { letter: "B", text: "Reflection over the line y = x" },
            { letter: "C", text: "Rotation of 180° about the origin" },
            { letter: "D", text: "Rotation of 90° clockwise about the origin" }
          ],
          correct: "B"
        },
        {
          id: "keep",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which rules always keep the V the same size and shape?",
          choices: [
            { letter: "A", text: "Rule 3 only" },
            { letter: "B", text: "Rules 1, 2, 3 and 4" },
            { letter: "C", text: "Rules 1, 2 and 3 only" },
            { letter: "D", text: "Rules 1 and 3 only" }
          ],
          correct: "C"
        },
        {
          id: "four",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "Bird D is moved by Rule 1 four times in a row. Where does it end up?",
          choices: [
            { letter: "A", text: "(4, 3)" },
            { letter: "B", text: "(3, −4)" },
            { letter: "C", text: "(−4, −3)" },
            { letter: "D", text: "(−3, 4)" }
          ],
          correct: "A"
        },
        {
          id: "v-line",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which line is a line of symmetry of the V of geese?",
          choices: [
            { letter: "A", text: "x = 2" },
            { letter: "B", text: "x = 0" },
            { letter: "C", text: "y = 3" },
            { letter: "D", text: "y = x + 3" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt3-worms-fern-frond",
      family: "GEO",
      mode: "worms",
      title: "The Fern Frond",
      kind: "Transformations · G.RLT.3",
      blurb: "Fern leaflets shrink toward the tip by repeated dilations.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 154\" role=\"img\" aria-label=\"Coordinate grid with a fern frond: a stem along the y-axis from the tip O at the origin up to (0, 9); leaflet 1 is right triangle ABC with A at (0, 8), B at (8, 4) and C at (0, 4), and a matching leaflet is drawn on the left side of the stem\">" +
        "<line class=\"gr\" x1=\"25\" y1=\"10\" x2=\"25\" y2=\"145\"/><line class=\"gr\" x1=\"40\" y1=\"10\" x2=\"40\" y2=\"145\"/><line class=\"gr\" x1=\"55\" y1=\"10\" x2=\"55\" y2=\"145\"/><line class=\"gr\" x1=\"70\" y1=\"10\" x2=\"70\" y2=\"145\"/><line class=\"gr\" x1=\"85\" y1=\"10\" x2=\"85\" y2=\"145\"/><line class=\"gr\" x1=\"100\" y1=\"10\" x2=\"100\" y2=\"145\"/><line class=\"gr\" x1=\"115\" y1=\"10\" x2=\"115\" y2=\"145\"/><line class=\"gr\" x1=\"130\" y1=\"10\" x2=\"130\" y2=\"145\"/><line class=\"gr\" x1=\"145\" y1=\"10\" x2=\"145\" y2=\"145\"/><line class=\"gr\" x1=\"175\" y1=\"10\" x2=\"175\" y2=\"145\"/><line class=\"gr\" x1=\"190\" y1=\"10\" x2=\"190\" y2=\"145\"/><line class=\"gr\" x1=\"205\" y1=\"10\" x2=\"205\" y2=\"145\"/><line class=\"gr\" x1=\"220\" y1=\"10\" x2=\"220\" y2=\"145\"/><line class=\"gr\" x1=\"235\" y1=\"10\" x2=\"235\" y2=\"145\"/><line class=\"gr\" x1=\"250\" y1=\"10\" x2=\"250\" y2=\"145\"/><line class=\"gr\" x1=\"265\" y1=\"10\" x2=\"265\" y2=\"145\"/><line class=\"gr\" x1=\"280\" y1=\"10\" x2=\"280\" y2=\"145\"/><line class=\"gr\" x1=\"295\" y1=\"10\" x2=\"295\" y2=\"145\"/>" +
        "<line class=\"gr\" x1=\"25\" y1=\"130\" x2=\"295\" y2=\"130\"/><line class=\"gr\" x1=\"25\" y1=\"115\" x2=\"295\" y2=\"115\"/><line class=\"gr\" x1=\"25\" y1=\"100\" x2=\"295\" y2=\"100\"/><line class=\"gr\" x1=\"25\" y1=\"85\" x2=\"295\" y2=\"85\"/><line class=\"gr\" x1=\"25\" y1=\"70\" x2=\"295\" y2=\"70\"/><line class=\"gr\" x1=\"25\" y1=\"55\" x2=\"295\" y2=\"55\"/><line class=\"gr\" x1=\"25\" y1=\"40\" x2=\"295\" y2=\"40\"/><line class=\"gr\" x1=\"25\" y1=\"25\" x2=\"295\" y2=\"25\"/><line class=\"gr\" x1=\"25\" y1=\"10\" x2=\"295\" y2=\"10\"/>" +
        "<line class=\"ax\" x1=\"25\" y1=\"145\" x2=\"295\" y2=\"145\"/><line class=\"ax\" x1=\"160\" y1=\"145\" x2=\"160\" y2=\"10\"/>" +
        "<text class=\"sm\" x=\"40\" y=\"141\" text-anchor=\"middle\">−8</text><text class=\"sm\" x=\"100\" y=\"141\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"220\" y=\"141\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"280\" y=\"141\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"299\" y=\"149\">x</text><text class=\"sm\" x=\"155\" y=\"20\" text-anchor=\"end\">y</text>" +
        "<polygon class=\"sh2\" points=\"160,25 40,85 160,85\"/>" +
        "<polygon class=\"sh\" points=\"160,25 280,85 160,85\"/>" +
        "<line class=\"ln\" x1=\"160\" y1=\"145\" x2=\"160\" y2=\"10\"/>" +
        "<path class=\"thin\" d=\"M168 85 V77 H160\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"145\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"25\" r=\"3\"/><circle class=\"dt\" cx=\"280\" cy=\"85\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"85\" r=\"3\"/>" +
        "<text x=\"165\" y=\"20\">A</text><text x=\"288\" y=\"90\">B</text><text x=\"165\" y=\"100\">C</text>" +
        "<text x=\"166\" y=\"141\">O</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A fern frond is drawn on a grid with its tip <strong>O</strong> at the origin and its stem along the y-axis. Leaflet 1 is right triangle <strong>ABC</strong> with A(0, 8), B(8, 4) and C(0, 4); its area is 16 square units. Each leaflet has a mirror image across the stem. Leaflet 2 is leaflet 1 dilated by scale factor 1/2 about O; leaflet 2 and its mirror image are not drawn.</p>",
      claims: [
        {
          id: "l2-b",
          sol: "G.RLT.3",
          sub: "G.RLT.3.2",
          stem: "What is the image of B on leaflet 2?",
          choices: [
            { letter: "A", text: "(16, 8)" },
            { letter: "B", text: "(4, 2)" },
            { letter: "C", text: "(7.5, 3.5)" },
            { letter: "D", text: "(4, 4)" }
          ],
          correct: "B"
        },
        {
          id: "l3",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Leaflet 3 is leaflet 2 dilated by scale factor 1/2 about O. Which single dilation about O maps leaflet 1 to leaflet 3?",
          choices: [
            { letter: "A", text: "Scale factor 1" },
            { letter: "B", text: "Scale factor 1/2" },
            { letter: "C", text: "Scale factor 1/4" },
            { letter: "D", text: "Scale factor 1/8" }
          ],
          correct: "C"
        },
        {
          id: "l2-area",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "What is the area of leaflet 2?",
          choices: [
            { letter: "A", text: "8 square units" },
            { letter: "B", text: "2 square units" },
            { letter: "C", text: "16 square units" },
            { letter: "D", text: "4 square units" }
          ],
          correct: "D"
        },
        {
          id: "frond-line",
          sol: "G.RLT.3",
          sub: "G.RLT.3.1",
          stem: "Which line is a line of symmetry of the frond drawn in the figure?",
          choices: [
            { letter: "A", text: "x = 4" },
            { letter: "B", text: "y = x" },
            { letter: "C", text: "y = 4" },
            { letter: "D", text: "x = 0" }
          ],
          correct: "D"
        },
        {
          id: "left2",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Which sequence maps leaflet 1 onto the mirror image of leaflet 2 across the stem?",
          choices: [
            { letter: "A", text: "Dilate by 1/2 about O, then reflect over the y-axis" },
            { letter: "B", text: "Dilate by 1/2 about O, then reflect over the x-axis" },
            { letter: "C", text: "Dilate by 2 about O, then reflect over the y-axis" },
            { letter: "D", text: "Dilate by 1/2 about O, then rotate 180° about O" }
          ],
          correct: "A"
        },
        {
          id: "max",
          sol: "G.RLT.3",
          sub: "G.RLT.3.3",
          stem: "Max says leaflet 2 is congruent to leaflet 1 because their angles are the same. What is his error?",
          choices: [
            { letter: "A", text: "There is no error; equal angles mean congruent." },
            { letter: "B", text: "Equal angles show it is similar; its sides are 1/2 as long." },
            { letter: "C", text: "Its angles are 1/2 as large, so it is not similar." },
            { letter: "D", text: "It is not similar, because it is closer to O." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
