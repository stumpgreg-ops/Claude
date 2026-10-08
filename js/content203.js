/* SOL Labyrinth — Geometry game (family GEO), polygons and circles: G.PC.1–G.PC.4 (Virginia 2023 Geometry SOL). Original items only.
   Quadrilaterals (G.PC.1), polygon angles (G.PC.2), circles (G.PC.3) and equations of circles (G.PC.4), four packs each.
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given
   facts, then six questions about it. Every figure coordinate and numeric answer was computed, and every distractor is a
   named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-pc1-kite",
      family: "GEO",
      title: "The Festival Kite",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A kite frame with two pairs of equal sides.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Kite ABCD with A at the top, C at the bottom, B at the left and D at the right; diagonals AC and BD cross at right angles at E\">" +
        "<polygon class=\"ln\" points=\"160,22 85.6,53 160,152.2 234.4,53\"/>" +
        "<line class=\"thin\" x1=\"160\" y1=\"22\" x2=\"160\" y2=\"152.2\"/>" +
        "<line class=\"thin\" x1=\"85.6\" y1=\"53\" x2=\"234.4\" y2=\"53\"/>" +
        "<path class=\"thin\" d=\"M167 53 L167 46 L160 46\"/>" +
        "<line class=\"thin\" x1=\"120.9\" y1=\"32.9\" x2=\"124.7\" y2=\"42.1\"/>" +
        "<line class=\"thin\" x1=\"195.3\" y1=\"42.1\" x2=\"199.1\" y2=\"32.9\"/>" +
        "<line class=\"thin\" x1=\"128\" y1=\"101.2\" x2=\"120\" y2=\"107.2\"/><line class=\"thin\" x1=\"125.6\" y1=\"98\" x2=\"117.6\" y2=\"104\"/>" +
        "<line class=\"thin\" x1=\"200\" y1=\"107.2\" x2=\"192\" y2=\"101.2\"/><line class=\"thin\" x1=\"202.4\" y1=\"104\" x2=\"194.4\" y2=\"98\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"22\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"85.6\" cy=\"53\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"152.2\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"234.4\" cy=\"53\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"53\" r=\"3\"/>" +
        "<text x=\"160\" y=\"17\" text-anchor=\"middle\">A</text>" +
        "<text x=\"74.6\" y=\"58\" text-anchor=\"middle\">B</text>" +
        "<text x=\"172\" y=\"163.2\" text-anchor=\"middle\">C</text>" +
        "<text x=\"245.4\" y=\"58\" text-anchor=\"middle\">D</text>" +
        "<text x=\"169\" y=\"71\" text-anchor=\"middle\">E</text>" +
        "<text x=\"106\" y=\"28.4\" text-anchor=\"middle\">13 in</text>" +
        "<text x=\"102\" y=\"123.2\" text-anchor=\"middle\">20 in</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">Kite <strong>ABCD</strong> has <strong>AB</strong> = <strong>AD</strong> = 13 in and <strong>CB</strong> = <strong>CD</strong> = 20 in. Its crossbars are the diagonals <strong>AC</strong> and <strong>BD</strong>, which meet at <strong>E</strong>. <strong>BD</strong> = 24 in.</p>",
      claims: [
        {
          id: "diagonals",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement about the diagonals of kite ABCD is true?",
          choices: [
            { letter: "A", text: "AC ≅ BD" },
            { letter: "B", text: "BD bisects AC" },
            { letter: "C", text: "AC ⊥ BD" },
            { letter: "D", text: "AC and BD bisect each other" }
          ],
          correct: "C"
        },
        {
          id: "angles",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which pair of angles of the kite must be congruent?",
          choices: [
            { letter: "A", text: "∠ABC and ∠ADC" },
            { letter: "B", text: "∠BAD and ∠BCD" },
            { letter: "C", text: "∠ABC and ∠BAD" },
            { letter: "D", text: "∠BCD and ∠ADC" }
          ],
          correct: "A"
        },
        {
          id: "half",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is BE?",
          choices: [
            { letter: "A", text: "24 in" },
            { letter: "B", text: "12 in" },
            { letter: "C", text: "6 in" },
            { letter: "D", text: "13 in" }
          ],
          correct: "B"
        },
        {
          id: "ec",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "Use right triangle BEC to find EC.",
          choices: [
            { letter: "A", text: "8 in" },
            { letter: "B", text: "about 23.3 in" },
            { letter: "C", text: "12 in" },
            { letter: "D", text: "16 in" }
          ],
          correct: "D"
        },
        {
          id: "bisect",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "Suppose m∠BCD = 74°. What is m∠BCE?",
          choices: [
            { letter: "A", text: "37°" },
            { letter: "B", text: "74°" },
            { letter: "C", text: "53°" },
            { letter: "D", text: "106°" }
          ],
          correct: "A"
        },
        {
          id: "rhombus",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which property does every rhombus have that kite ABCD does NOT have?",
          choices: [
            { letter: "A", text: "The diagonals are perpendicular." },
            { letter: "B", text: "Opposite sides are congruent." },
            { letter: "C", text: "One diagonal bisects the other." },
            { letter: "D", text: "Two pairs of adjacent sides are congruent." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc1-shelf",
      family: "GEO",
      title: "The Leaning Bookshelf",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A shelf frame pushed out of square.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 134\" role=\"img\" aria-label=\"Parallelogram ABCD leaning to the right, with A at the bottom left, B at the bottom right, C at the top right and D at the top left; dashed diagonals AC and BD meet at E\">" +
        "<polygon class=\"ln\" points=\"52,106 217,106 261,29.8 96,29.8\"/>" +
        "<line class=\"thin dash\" x1=\"52\" y1=\"106\" x2=\"261\" y2=\"29.8\"/>" +
        "<line class=\"thin dash\" x1=\"217\" y1=\"106\" x2=\"96\" y2=\"29.8\"/>" +
        "<path class=\"thin\" d=\"M67 106 A15 15 0 0 0 59.5 93\"/>" +
        "<path class=\"thin\" d=\"M223.5 94.7 A13 13 0 0 0 204 106\"/><path class=\"thin\" d=\"M225.5 91.3 A17 17 0 0 0 200 106\"/>" +
        "<path class=\"thin\" d=\"M131.5 110 L137.5 106 L131.5 102\"/>" +
        "<path class=\"thin\" d=\"M175.5 33.8 L181.5 29.8 L175.5 25.8\"/>" +
        "<path class=\"thin\" d=\"M76 72.5 L75.5 65.3 L69 68.5\"/><path class=\"thin\" d=\"M78.5 68.2 L78 61 L71.5 64.2\"/>" +
        "<path class=\"thin\" d=\"M241 72.5 L240.5 65.3 L234 68.5\"/><path class=\"thin\" d=\"M243.5 68.2 L243 61 L236.5 64.2\"/>" +
        "<circle class=\"dt\" cx=\"52\" cy=\"106\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"217\" cy=\"106\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"261\" cy=\"29.8\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"96\" cy=\"29.8\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"156.5\" cy=\"67.9\" r=\"3\"/>" +
        "<text x=\"43\" y=\"120\" text-anchor=\"middle\">A</text>" +
        "<text x=\"226\" y=\"120\" text-anchor=\"middle\">B</text>" +
        "<text x=\"271\" y=\"28.8\" text-anchor=\"middle\">C</text>" +
        "<text x=\"86\" y=\"28.8\" text-anchor=\"middle\">D</text>" +
        "<text x=\"156.5\" y=\"58.9\" text-anchor=\"middle\">E</text>" +
        "<text x=\"134.5\" y=\"123\" text-anchor=\"middle\">15 in</text>" +
        "<text x=\"53.9\" y=\"61.3\" text-anchor=\"middle\">8 in</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A bookshelf frame <strong>ABCD</strong> came loose and leaned into a parallelogram. <strong>AB</strong> = 15 in, <strong>AD</strong> = 8 in, m∠<strong>DAB</strong> = <span style=\"white-space:nowrap\">(2y − 10)°</span> and m∠<strong>ABC</strong> = <span style=\"white-space:nowrap\">(3y + 15)°</span>. The diagonals meet at <strong>E</strong>.</p>",
      claims: [
        {
          id: "y",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is the value of y?",
          choices: [
            { letter: "A", text: "71" },
            { letter: "B", text: "17" },
            { letter: "C", text: "−25" },
            { letter: "D", text: "35" }
          ],
          correct: "D"
        },
        {
          id: "bcd",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "What is m∠BCD?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "60°" },
            { letter: "D", text: "35°" }
          ],
          correct: "C"
        },
        {
          id: "segments",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which two segments must be congruent in the leaning frame?",
          choices: [
            { letter: "A", text: "AE and EC" },
            { letter: "B", text: "AC and BD" },
            { letter: "C", text: "AE and BE" },
            { letter: "D", text: "AB and BC" }
          ],
          correct: "A"
        },
        {
          id: "rect",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "The frame is still a parallelogram. Which single fact would be enough to prove it is a rectangle?",
          choices: [
            { letter: "A", text: "AC ⊥ BD" },
            { letter: "B", text: "AC ≅ BD" },
            { letter: "C", text: "AB ∥ DC" },
            { letter: "D", text: "AC bisects ∠DAB" }
          ],
          correct: "B"
        },
        {
          id: "diag",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "Ana squares the frame into a rectangle. Now AC = (2x + 5) in and BD = (4x − 7) in. How long is each diagonal?",
          choices: [
            { letter: "A", text: "6 in" },
            { letter: "B", text: "8.5 in" },
            { letter: "C", text: "17 in" },
            { letter: "D", text: "34 in" }
          ],
          correct: "C"
        },
        {
          id: "square",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Ana says that because AC ≅ BD, the frame is now a square. Is she right?",
          choices: [
            { letter: "A", text: "Yes: congruent diagonals make it a square." },
            { letter: "B", text: "No: a square's diagonals are not congruent." },
            { letter: "C", text: "Yes: every rectangle is a square." },
            { letter: "D", text: "No: AB ≠ AD, so it is not a square." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc1-garden",
      family: "GEO",
      title: "The Raised Garden Bed",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "An isosceles trapezoid and its midsegment.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Isosceles trapezoid ABCD with the long base AB at the bottom and the short base DC at the top; segment MN joins the midpoints of the legs\">" +
        "<polygon class=\"ln\" points=\"50,122 270,122 230,40 90,40\"/>" +
        "<line class=\"ac\" x1=\"70\" y1=\"81\" x2=\"250\" y2=\"81\"/>" +
        "<path class=\"thin\" d=\"M157 126 L163 122 L157 118\"/>" +
        "<path class=\"thin\" d=\"M157 44 L163 40 L157 36\"/>" +
        "<line class=\"thin\" x1=\"64.5\" y1=\"103.7\" x2=\"55.5\" y2=\"99.3\"/>" +
        "<line class=\"thin\" x1=\"84.5\" y1=\"62.7\" x2=\"75.5\" y2=\"58.3\"/>" +
        "<line class=\"thin\" x1=\"264.5\" y1=\"99.3\" x2=\"255.5\" y2=\"103.7\"/>" +
        "<line class=\"thin\" x1=\"244.5\" y1=\"58.3\" x2=\"235.5\" y2=\"62.7\"/>" +
        "<path class=\"thin\" d=\"M64 122 A14 14 0 0 0 56.1 109.4\"/>" +
        "<path class=\"thin\" d=\"M256 122 A14 14 0 0 1 263.9 109.4\"/>" +
        "<circle class=\"dt\" cx=\"50\" cy=\"122\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"270\" cy=\"122\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"230\" cy=\"40\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"90\" cy=\"40\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"70\" cy=\"81\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"250\" cy=\"81\" r=\"3\"/>" +
        "<text x=\"41\" y=\"135\" text-anchor=\"middle\">A</text>" +
        "<text x=\"279\" y=\"135\" text-anchor=\"middle\">B</text>" +
        "<text x=\"239\" y=\"38\" text-anchor=\"middle\">C</text>" +
        "<text x=\"81\" y=\"38\" text-anchor=\"middle\">D</text>" +
        "<text x=\"58\" y=\"86\" text-anchor=\"middle\">M</text>" +
        "<text x=\"262\" y=\"86\" text-anchor=\"middle\">N</text>" +
        "<text x=\"160\" y=\"142\" text-anchor=\"middle\">22 ft</text>" +
        "<text x=\"160\" y=\"33\" text-anchor=\"middle\">14 ft</text>" +
        "<text class=\"sm\" x=\"68\" y=\"117\" text-anchor=\"start\">(2x + 14)°</text>" +
        "<text class=\"sm\" x=\"252\" y=\"117\" text-anchor=\"end\">(3x − 11)°</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A garden bed <strong>ABCD</strong> is an isosceles trapezoid with bases <strong>AB</strong> = 22 ft and <strong>DC</strong> = 14 ft. A path <strong>MN</strong> (gold) joins the midpoints of the legs. m∠<strong>A</strong> = <span style=\"white-space:nowrap\">(2x + 14)°</span> and m∠<strong>B</strong> = <span style=\"white-space:nowrap\">(3x − 11)°</span>.</p>",
      claims: [
        {
          id: "x",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is the value of x?",
          choices: [
            { letter: "A", text: "64" },
            { letter: "B", text: "25" },
            { letter: "C", text: "35.4" },
            { letter: "D", text: "5" }
          ],
          correct: "B"
        },
        {
          id: "c",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "What is m∠C?",
          choices: [
            { letter: "A", text: "64°" },
            { letter: "B", text: "26°" },
            { letter: "C", text: "52°" },
            { letter: "D", text: "116°" }
          ],
          correct: "D"
        },
        {
          id: "mn",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the path MN?",
          choices: [
            { letter: "A", text: "18 ft" },
            { letter: "B", text: "36 ft" },
            { letter: "C", text: "8 ft" },
            { letter: "D", text: "4 ft" }
          ],
          correct: "A"
        },
        {
          id: "diag",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is true of every isosceles trapezoid, including ABCD?",
          choices: [
            { letter: "A", text: "Its diagonals bisect each other." },
            { letter: "B", text: "Its diagonals are perpendicular." },
            { letter: "C", text: "Its diagonals are congruent." },
            { letter: "D", text: "Its opposite angles are congruent." }
          ],
          correct: "C"
        },
        {
          id: "base",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "A second trapezoid bed has a midsegment of 20 ft and one base of 26 ft. How long is its other base?",
          choices: [
            { letter: "A", text: "14 ft" },
            { letter: "B", text: "23 ft" },
            { letter: "C", text: "6 ft" },
            { letter: "D", text: "46 ft" }
          ],
          correct: "A"
        },
        {
          id: "supp",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Why are ∠A and ∠D supplementary?",
          choices: [
            { letter: "A", text: "AD ≅ BC, so they are base angles." },
            { letter: "B", text: "They are opposite angles of the trapezoid." },
            { letter: "C", text: "The diagonals of ABCD are congruent." },
            { letter: "D", text: "AB ∥ DC, so they are same-side interior angles." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc1-grid",
      family: "GEO",
      title: "Four Points on a Grid",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Slope, distance and midpoint decide the shape.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Coordinate grid from 0 to 6 with quadrilateral ABCD: A(1, 1), B(4, 2), C(5, 5), D(2, 4), and its dashed diagonals\">" +
        "<line class=\"gr\" x1=\"94\" y1=\"146\" x2=\"94\" y2=\"14\"/><line class=\"gr\" x1=\"116\" y1=\"146\" x2=\"116\" y2=\"14\"/><line class=\"gr\" x1=\"138\" y1=\"146\" x2=\"138\" y2=\"14\"/><line class=\"gr\" x1=\"160\" y1=\"146\" x2=\"160\" y2=\"14\"/><line class=\"gr\" x1=\"182\" y1=\"146\" x2=\"182\" y2=\"14\"/><line class=\"gr\" x1=\"204\" y1=\"146\" x2=\"204\" y2=\"14\"/><line class=\"gr\" x1=\"226\" y1=\"146\" x2=\"226\" y2=\"14\"/><line class=\"gr\" x1=\"94\" y1=\"146\" x2=\"226\" y2=\"146\"/><line class=\"gr\" x1=\"94\" y1=\"124\" x2=\"226\" y2=\"124\"/><line class=\"gr\" x1=\"94\" y1=\"102\" x2=\"226\" y2=\"102\"/><line class=\"gr\" x1=\"94\" y1=\"80\" x2=\"226\" y2=\"80\"/><line class=\"gr\" x1=\"94\" y1=\"58\" x2=\"226\" y2=\"58\"/><line class=\"gr\" x1=\"94\" y1=\"36\" x2=\"226\" y2=\"36\"/><line class=\"gr\" x1=\"94\" y1=\"14\" x2=\"226\" y2=\"14\"/><line class=\"ax\" x1=\"94\" y1=\"146\" x2=\"226\" y2=\"146\"/><line class=\"ax\" x1=\"94\" y1=\"146\" x2=\"94\" y2=\"14\"/><text class=\"sm\" x=\"138\" y=\"159\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"182\" y=\"159\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"226\" y=\"159\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"90\" y=\"106\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"90\" y=\"62\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"90\" y=\"18\" text-anchor=\"end\">6</text>" +
        "<polygon class=\"sh\" points=\"116,124 182,102 204,36 138,58\"/>" +
        "<line class=\"thin dash\" x1=\"116\" y1=\"124\" x2=\"204\" y2=\"36\"/>" +
        "<line class=\"thin dash\" x1=\"182\" y1=\"102\" x2=\"138\" y2=\"58\"/>" +
        "<circle class=\"dt\" cx=\"116\" cy=\"124\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"182\" cy=\"102\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"204\" cy=\"36\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"138\" cy=\"58\" r=\"3\"/>" +
        "<text x=\"107\" y=\"138\" text-anchor=\"middle\">A</text>" +
        "<text x=\"193\" y=\"111\" text-anchor=\"middle\">B</text>" +
        "<text x=\"213\" y=\"33\" text-anchor=\"middle\">C</text>" +
        "<text x=\"128\" y=\"56\" text-anchor=\"middle\">D</text>" +
        "<text class=\"sm\" x=\"238\" y=\"150\" text-anchor=\"middle\">x</text>" +
        "<text class=\"sm\" x=\"103\" y=\"20\" text-anchor=\"middle\">y</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">Quadrilateral <strong>ABCD</strong> has vertices <strong>A</strong>(1, 1), <strong>B</strong>(4, 2), <strong>C</strong>(5, 5) and <strong>D</strong>(2, 4). The dashed segments are its diagonals.</p>",
      claims: [
        {
          id: "slope",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What is the slope of side AB?",
          choices: [
            { letter: "A", text: "1/3" },
            { letter: "B", text: "3" },
            { letter: "C", text: "−3" },
            { letter: "D", text: "−1/3" }
          ],
          correct: "A"
        },
        {
          id: "length",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "How long is side AB?",
          choices: [
            { letter: "A", text: "10" },
            { letter: "B", text: "4" },
            { letter: "C", text: "√10" },
            { letter: "D", text: "2√2" }
          ],
          correct: "C"
        },
        {
          id: "mid",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What is the midpoint of diagonal BD?",
          choices: [
            { letter: "A", text: "(6, 6)" },
            { letter: "B", text: "(3, 3)" },
            { letter: "C", text: "(−1, 1)" },
            { letter: "D", text: "(1, 1)" }
          ],
          correct: "B"
        },
        {
          id: "perp",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "The diagonals share a midpoint, so ABCD is a parallelogram. The slope of AC is 1 and the slope of BD is −1. What do the slopes show?",
          choices: [
            { letter: "A", text: "AC ≅ BD, so ABCD is a rectangle." },
            { letter: "B", text: "AC ∥ BD, so ABCD is a trapezoid." },
            { letter: "C", text: "AC ⊥ BD, so ABCD is a rectangle." },
            { letter: "D", text: "AC ⊥ BD, so ABCD is a rhombus." }
          ],
          correct: "D"
        },
        {
          id: "name",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What is the most specific name for ABCD?",
          choices: [
            { letter: "A", text: "square" },
            { letter: "B", text: "rhombus" },
            { letter: "C", text: "rectangle" },
            { letter: "D", text: "parallelogram" }
          ],
          correct: "B"
        },
        {
          id: "notsq",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Which result shows that ABCD is NOT a square?",
          choices: [
            { letter: "A", text: "AB = BC = √10" },
            { letter: "B", text: "slope of AC × slope of BD = −1" },
            { letter: "C", text: "AC = 4√2 but BD = 2√2" },
            { letter: "D", text: "AC and BD have the same midpoint" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-stopsign",
      family: "GEO",
      title: "The Stop Sign",
      kind: "Polygons · G.PC.2",
      blurb: "A regular octagon at the corner of School Street.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A regular octagon stop sign; its bottom side is extended to the right as a dashed line, and the gold arc marks the exterior angle between the extension and the next side\">" +
        "<polygon class=\"sh\" points=\"195.3,98.7 161.7,132.3 114.3,132.3 80.7,98.7 80.7,51.3 114.3,17.7 161.7,17.7 195.3,51.3\"/>" +
        "<line class=\"ln dash\" x1=\"161.7\" y1=\"132.3\" x2=\"253.7\" y2=\"132.3\"/>" +
        "<path class=\"ac\" d=\"M179.7 132.3 A18 18 0 0 0 174.5 119.6\"/>" +
        "<text x=\"138\" y=\"80\" text-anchor=\"middle\">STOP</text>" +
        "<text class=\"sm acc\" x=\"185.7\" y=\"126.3\" text-anchor=\"start\">exterior angle</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A stop sign is a regular octagon: 8 congruent sides and 8 congruent angles. One side is extended (dashed) to show an exterior angle, in gold.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the stop sign?",
          choices: [
            { letter: "A", text: "1440°" },
            { letter: "B", text: "1080°" },
            { letter: "C", text: "1260°" },
            { letter: "D", text: "360°" }
          ],
          correct: "B"
        },
        {
          id: "interior",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of each interior angle of the stop sign?",
          choices: [
            { letter: "A", text: "45°" },
            { letter: "B", text: "180°" },
            { letter: "C", text: "157.5°" },
            { letter: "D", text: "135°" }
          ],
          correct: "D"
        },
        {
          id: "exterior",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of the gold exterior angle?",
          choices: [
            { letter: "A", text: "135°" },
            { letter: "B", text: "22.5°" },
            { letter: "C", text: "45°" },
            { letter: "D", text: "51.4°" }
          ],
          correct: "C"
        },
        {
          id: "extsum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Picture one exterior angle at each of the 8 corners. What is the sum of those 8 exterior angles?",
          choices: [
            { letter: "A", text: "360°" },
            { letter: "B", text: "1080°" },
            { letter: "C", text: "2880°" },
            { letter: "D", text: "180°" }
          ],
          correct: "A"
        },
        {
          id: "sides",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "Another sign is a regular polygon whose exterior angles each measure 72°. How many sides does it have?",
          choices: [
            { letter: "A", text: "7" },
            { letter: "B", text: "3" },
            { letter: "C", text: "2.5" },
            { letter: "D", text: "5" }
          ],
          correct: "D"
        },
        {
          id: "triangles",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Diagonals drawn from one corner of the octagon split it into triangles. How many triangles?",
          choices: [
            { letter: "A", text: "8" },
            { letter: "B", text: "7" },
            { letter: "C", text: "6" },
            { letter: "D", text: "5" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-tiles",
      family: "GEO",
      title: "Octagon and Square Tiles",
      kind: "Polygons · G.PC.2",
      blurb: "A tiled floor where octagons and squares meet.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A floor of regular octagon tiles with small square tiles in the gaps; point P is a corner where two octagons and one square meet\">" +
        "<polygon class=\"sh\" points=\"127,55.7 107.7,75 80.3,75 61,55.7 61,28.3 80.3,9 107.7,9 127,28.3\"/><polygon class=\"ln\" points=\"193,55.7 173.7,75 146.3,75 127,55.7 127,28.3 146.3,9 173.7,9 193,28.3\"/><polygon class=\"ln\" points=\"259,55.7 239.7,75 212.3,75 193,55.7 193,28.3 212.3,9 239.7,9 259,28.3\"/><polygon class=\"ln\" points=\"127,121.7 107.7,141 80.3,141 61,121.7 61,94.3 80.3,75 107.7,75 127,94.3\"/><polygon class=\"ln\" points=\"193,121.7 173.7,141 146.3,141 127,121.7 127,94.3 146.3,75 173.7,75 193,94.3\"/><polygon class=\"ln\" points=\"259,121.7 239.7,141 212.3,141 193,121.7 193,94.3 212.3,75 239.7,75 259,94.3\"/>" +
        "<polygon class=\"sh2\" points=\"127,55.7 146.3,75 127,94.3 107.7,75\"/>" +
        "<polygon class=\"ln\" points=\"193,55.7 212.3,75 193,94.3 173.7,75\"/>" +
        "<circle class=\"dta\" cx=\"127\" cy=\"55.7\" r=\"3\"/>" +
        "<text class=\"acc\" x=\"137\" y=\"51.7\" text-anchor=\"middle\">P</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A floor is covered with regular octagons and squares, with no gaps or overlaps. At point <strong>P</strong>, two octagons (one shaded gold) and one square (shaded blue) meet.</p>",
      claims: [
        {
          id: "fill",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Each angle of a square is 90°. What must each angle of an octagon be so that the three angles at P make 360°?",
          choices: [
            { letter: "A", text: "135°" },
            { letter: "B", text: "270°" },
            { letter: "C", text: "120°" },
            { letter: "D", text: "180°" }
          ],
          correct: "A"
        },
        {
          id: "pentagon",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which regular polygon can NOT cover a floor by itself, with no gaps or overlaps?",
          choices: [
            { letter: "A", text: "equilateral triangle" },
            { letter: "B", text: "regular pentagon" },
            { letter: "C", text: "square" },
            { letter: "D", text: "regular hexagon" }
          ],
          correct: "B"
        },
        {
          id: "twelve",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A tile maker wants a regular polygon whose interior angles each measure 150°. How many sides will it have?",
          choices: [
            { letter: "A", text: "14" },
            { letter: "B", text: "6" },
            { letter: "C", text: "2.4" },
            { letter: "D", text: "12" }
          ],
          correct: "D"
        },
        {
          id: "impossible",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "Can a regular polygon have interior angles that each measure 155°?",
          choices: [
            { letter: "A", text: "Yes: it has 14 sides" },
            { letter: "B", text: "Yes: it has 15 sides" },
            { letter: "C", text: "No: 360 ÷ 25 = 14.4 sides" },
            { letter: "D", text: "No: no angle can be more than 150°" }
          ],
          correct: "C"
        },
        {
          id: "sum12",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of a 12-sided regular polygon?",
          choices: [
            { letter: "A", text: "2160°" },
            { letter: "B", text: "1800°" },
            { letter: "C", text: "1980°" },
            { letter: "D", text: "150°" }
          ],
          correct: "B"
        },
        {
          id: "triangles",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "A floor is covered with equilateral triangles only. How many triangles meet at each corner?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "3" },
            { letter: "C", text: "4" },
            { letter: "D", text: "2" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc2-gazebo",
      family: "GEO",
      title: "The Park Gazebo",
      kind: "Polygons · G.PC.2",
      blurb: "A regular hexagon floor and a walkway.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"Regular hexagon ABCDEF, the gazebo floor, with side AB on top; side AB is extended past B as a dashed walkway, and the gold arc marks the angle between the walkway and side BC\">" +
        "<polygon class=\"sh2\" points=\"87,26.3 149,26.3 180,80 149,133.7 87,133.7 56,80\"/>" +
        "<line class=\"ln dash\" x1=\"149\" y1=\"26.3\" x2=\"254\" y2=\"26.3\"/>" +
        "<path class=\"ac\" d=\"M166 26.3 A17 17 0 0 1 157.5 41\"/>" +
        "<circle class=\"dt\" cx=\"87\" cy=\"26.3\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"149\" cy=\"26.3\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"180\" cy=\"80\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"149\" cy=\"133.7\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"87\" cy=\"133.7\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"56\" cy=\"80\" r=\"3\"/>" +
        "<text x=\"81.5\" y=\"21.8\" text-anchor=\"middle\">A</text>" +
        "<text x=\"149\" y=\"19.3\" text-anchor=\"middle\">B</text>" +
        "<text x=\"191\" y=\"85\" text-anchor=\"middle\">C</text>" +
        "<text x=\"154.5\" y=\"148.2\" text-anchor=\"middle\">D</text>" +
        "<text x=\"81.5\" y=\"148.2\" text-anchor=\"middle\">E</text>" +
        "<text x=\"45\" y=\"85\" text-anchor=\"middle\">F</text>" +
        "<text class=\"sm\" x=\"224\" y=\"20.3\" text-anchor=\"middle\">walkway</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">The floor of a park gazebo is a regular hexagon <strong>ABCDEF</strong>. A straight walkway (dashed) continues side <strong>AB</strong> past corner <strong>B</strong>.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the gazebo floor?",
          choices: [
            { letter: "A", text: "1080°" },
            { letter: "B", text: "360°" },
            { letter: "C", text: "720°" },
            { letter: "D", text: "900°" }
          ],
          correct: "C"
        },
        {
          id: "corner",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of each interior angle of the gazebo floor, such as ∠ABC?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "180°" },
            { letter: "D", text: "144°" }
          ],
          correct: "A"
        },
        {
          id: "walkway",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of the gold angle between the walkway and side BC?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "30°" },
            { letter: "C", text: "72°" },
            { letter: "D", text: "60°" }
          ],
          correct: "D"
        },
        {
          id: "nine",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "The town's next gazebo will be a regular polygon with interior angles of 140°. How many sides will it have?",
          choices: [
            { letter: "A", text: "11" },
            { letter: "B", text: "9" },
            { letter: "C", text: "4.5" },
            { letter: "D", text: "about 2.6" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "At each corner of a larger regular gazebo, the railing turns 30° (an exterior angle). How many sides does that gazebo have?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "12" },
            { letter: "C", text: "14" },
            { letter: "D", text: "10" }
          ],
          correct: "B"
        },
        {
          id: "walk",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Lee walks once around the edge of the hexagon floor, turning at each corner. How many degrees does he turn in all?",
          choices: [
            { letter: "A", text: "720°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "360°" },
            { letter: "D", text: "120°" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-plot",
      family: "GEO",
      title: "The Five-Sided Garden Plot",
      kind: "Polygons · G.PC.2",
      blurb: "An irregular pentagon with angle expressions.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Convex pentagon ABCDE: a right angle at A, angle B labeled 3x degrees, angle C labeled 2x plus 25 degrees, angle D labeled 3x minus 5 degrees, and angle E labeled 110 degrees\">" +
        "<polygon class=\"sh\" points=\"88,140 208,140 244,77.6 193.1,26.7 88,65\"/>" +
        "<path class=\"thin\" d=\"M97 140 L97 131 L88 131\"/>" +
        "<path class=\"thin\" d=\"M195 140 A13 13 0 0 1 214.5 128.7\"/>" +
        "<path class=\"thin\" d=\"M237.5 88.9 A13 13 0 0 1 234.8 68.5\"/>" +
        "<path class=\"thin\" d=\"M202.3 35.9 A13 13 0 0 1 180.9 31.2\"/>" +
        "<path class=\"thin\" d=\"M100.2 60.5 A13 13 0 0 1 88 78\"/>" +
        "<circle class=\"dt\" cx=\"88\" cy=\"140\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"208\" cy=\"140\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"244\" cy=\"77.6\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"193.1\" cy=\"26.7\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"88\" cy=\"65\" r=\"3\"/>" +
        "<text x=\"79\" y=\"154\" text-anchor=\"middle\">A</text>" +
        "<text x=\"217\" y=\"154\" text-anchor=\"middle\">B</text>" +
        "<text x=\"256\" y=\"82.6\" text-anchor=\"middle\">C</text>" +
        "<text x=\"197.1\" y=\"19.7\" text-anchor=\"middle\">D</text>" +
        "<text x=\"76\" y=\"68\" text-anchor=\"middle\">E</text>" +
        "<text class=\"sm\" x=\"195.5\" y=\"122.3\" text-anchor=\"middle\">3x°</text>" +
        "<text class=\"sm\" x=\"194.4\" y=\"88.2\" text-anchor=\"middle\">(2x + 25)°</text>" +
        "<text class=\"sm\" x=\"186.6\" y=\"60\" text-anchor=\"middle\">(3x − 5)°</text>" +
        "<text class=\"sm\" x=\"112.6\" y=\"86.2\" text-anchor=\"middle\">110°</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A community garden <strong>ABCDE</strong> is a convex pentagon. ∠<strong>A</strong> is a right angle, m∠<strong>E</strong> = 110°, and the other three angles are given in terms of x.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the garden?",
          choices: [
            { letter: "A", text: "900°" },
            { letter: "B", text: "720°" },
            { letter: "C", text: "360°" },
            { letter: "D", text: "540°" }
          ],
          correct: "D"
        },
        {
          id: "x",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Use the angle sum to find x.",
          choices: [
            { letter: "A", text: "62.5" },
            { letter: "B", text: "40" },
            { letter: "C", text: "17.5" },
            { letter: "D", text: "65" }
          ],
          correct: "B"
        },
        {
          id: "largest",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which angle of the garden is the largest?",
          choices: [
            { letter: "A", text: "∠B" },
            { letter: "B", text: "∠C" },
            { letter: "C", text: "∠D" },
            { letter: "D", text: "∠E" }
          ],
          correct: "A"
        },
        {
          id: "exterior",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of an exterior angle at corner E?",
          choices: [
            { letter: "A", text: "110°" },
            { letter: "B", text: "250°" },
            { letter: "C", text: "70°" },
            { letter: "D", text: "72°" }
          ],
          correct: "C"
        },
        {
          id: "cut",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "A new straight fence cuts off corner A, so the garden becomes a hexagon. What is the new sum of its interior angles?",
          choices: [
            { letter: "A", text: "540°" },
            { letter: "B", text: "630°" },
            { letter: "C", text: "900°" },
            { letter: "D", text: "720°" }
          ],
          correct: "D"
        },
        {
          id: "regular",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A second garden will be a regular polygon whose exterior angles each measure 24°. How many sides will it have?",
          choices: [
            { letter: "A", text: "15" },
            { letter: "B", text: "7.5" },
            { letter: "C", text: "17" },
            { letter: "D", text: "156" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc3-pizza",
      family: "GEO",
      title: "Slicing the Pizza",
      kind: "Circles · G.PC.3",
      blurb: "A 16-inch pizza cut into 8 equal slices.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 158\" role=\"img\" aria-label=\"A circular pizza with center O cut by four straight cuts through the center into 8 equal slices; slice AOB is shaded and its crust, arc AB, is gold\">" +
        "<circle class=\"ln\" cx=\"160\" cy=\"82\" r=\"64\"/>" +
        "<path class=\"sh\" d=\"M160 82 L160 18 A64 64 0 0 1 205.3 36.7 Z\"/>" +
        "<line class=\"thin\" x1=\"224\" y1=\"82\" x2=\"96\" y2=\"82\"/><line class=\"thin\" x1=\"205.3\" y1=\"127.3\" x2=\"114.7\" y2=\"36.7\"/><line class=\"thin\" x1=\"160\" y1=\"146\" x2=\"160\" y2=\"18\"/><line class=\"thin\" x1=\"114.7\" y1=\"127.3\" x2=\"205.3\" y2=\"36.7\"/>" +
        "<path class=\"ac\" d=\"M160 18 A64 64 0 0 1 205.3 36.7\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"82\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"18\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"205.3\" cy=\"36.7\" r=\"3\"/>" +
        "<text x=\"145.9\" y=\"14.4\" text-anchor=\"middle\">A</text>" +
        "<text x=\"217.5\" y=\"38.8\" text-anchor=\"middle\">B</text>" +
        "<text x=\"176\" y=\"97\" text-anchor=\"middle\">O</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A 16-inch pizza (16 in is its diameter) is cut through its center <strong>O</strong> into 8 equal slices. The crust of the shaded slice <strong>AOB</strong> is arc <strong>AB</strong> (gold).</p>",
      claims: [
        {
          id: "central",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠AOB, the central angle of one slice?",
          choices: [
            { letter: "A", text: "45°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "22.5°" },
            { letter: "D", text: "135°" }
          ],
          correct: "A"
        },
        {
          id: "crust",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is the crust of one slice, in terms of π?",
          choices: [
            { letter: "A", text: "4π in" },
            { letter: "B", text: "8π in" },
            { letter: "C", text: "π in" },
            { letter: "D", text: "2π in" }
          ],
          correct: "D"
        },
        {
          id: "area",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "What is the area of one slice, to the nearest tenth of a square inch?",
          choices: [
            { letter: "A", text: "100.5 in²" },
            { letter: "B", text: "25.1 in²" },
            { letter: "C", text: "6.3 in²" },
            { letter: "D", text: "201.1 in²" }
          ],
          correct: "B"
        },
        {
          id: "angle",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Mia cuts a bigger slice from another 16-inch pizza. Its crust is 3π in long. What is its central angle?",
          choices: [
            { letter: "A", text: "135°" },
            { letter: "B", text: "33.75°" },
            { letter: "C", text: "67.5°" },
            { letter: "D", text: "16.9°" }
          ],
          correct: "C"
        },
        {
          id: "compare",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Another shop cuts a 12-inch pizza into 6 equal slices. How much more area does one slice here have than one slice there?",
          choices: [
            { letter: "A", text: "2π in²" },
            { letter: "B", text: "8π in²" },
            { letter: "C", text: "0 in²" },
            { letter: "D", text: "28π in²" }
          ],
          correct: "A"
        },
        {
          id: "size",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "One of 8 equal slices of a different pizza has an area of 18π in². What is that pizza's diameter?",
          choices: [
            { letter: "A", text: "12 in" },
            { letter: "B", text: "24 in" },
            { letter: "C", text: "144 in" },
            { letter: "D", text: "about 8.5 in" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-ferris",
      family: "GEO",
      title: "The Ferris Wheel",
      kind: "Circles · G.PC.3",
      blurb: "Eight cars equally spaced on a 20 m wheel.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A Ferris wheel: a circle with hub O and eight equally spaced cars labeled A to H clockwise from the top; chords AD and CH cross at P, and the gold arc marks angle APC\">" +
        "<circle class=\"ln\" cx=\"160\" cy=\"82\" r=\"58\"/>" +
        "<line class=\"gr\" x1=\"160\" y1=\"82\" x2=\"160\" y2=\"24\"/><line class=\"gr\" x1=\"160\" y1=\"82\" x2=\"201\" y2=\"41\"/><line class=\"gr\" x1=\"160\" y1=\"82\" x2=\"218\" y2=\"82\"/><line class=\"gr\" x1=\"160\" y1=\"82\" x2=\"201\" y2=\"123\"/><line class=\"gr\" x1=\"160\" y1=\"82\" x2=\"160\" y2=\"140\"/><line class=\"gr\" x1=\"160\" y1=\"82\" x2=\"119\" y2=\"123\"/><line class=\"gr\" x1=\"160\" y1=\"82\" x2=\"102\" y2=\"82\"/><line class=\"gr\" x1=\"160\" y1=\"82\" x2=\"119\" y2=\"41\"/>" +
        "<line class=\"ln\" x1=\"160\" y1=\"24\" x2=\"201\" y2=\"123\"/>" +
        "<line class=\"ln\" x1=\"218\" y1=\"82\" x2=\"119\" y2=\"41\"/>" +
        "<path class=\"ac\" d=\"M173.2 55.8 A10 10 0 0 1 186.2 68.8\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"24\" r=\"3\"/><circle class=\"dt\" cx=\"201\" cy=\"41\" r=\"3\"/><circle class=\"dt\" cx=\"218\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"201\" cy=\"123\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"119\" cy=\"123\" r=\"3\"/><circle class=\"dt\" cx=\"102\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"119\" cy=\"41\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"82\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"177\" cy=\"65\" r=\"3\"/>" +
        "<text x=\"160\" y=\"17\" text-anchor=\"middle\">A</text><text x=\"209.5\" y=\"37.5\" text-anchor=\"middle\">B</text><text x=\"230\" y=\"87\" text-anchor=\"middle\">C</text><text x=\"209.5\" y=\"136.5\" text-anchor=\"middle\">D</text><text x=\"160\" y=\"157\" text-anchor=\"middle\">E</text><text x=\"110.5\" y=\"136.5\" text-anchor=\"middle\">F</text><text x=\"90\" y=\"87\" text-anchor=\"middle\">G</text><text x=\"110.5\" y=\"37.5\" text-anchor=\"middle\">H</text>" +
        "<text x=\"149\" y=\"93\" text-anchor=\"middle\">O</text>" +
        "<text x=\"166.3\" y=\"59.4\" text-anchor=\"middle\">P</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A Ferris wheel has radius 20 m and 8 cars, <strong>A</strong> to <strong>H</strong>, equally spaced on the circle around hub <strong>O</strong>. Light strings run straight from car <strong>A</strong> to car <strong>D</strong> and from car <strong>C</strong> to car <strong>H</strong>; they cross at <strong>P</strong>.</p>",
      claims: [
        {
          id: "central",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠AOB, the angle between the spokes to two cars next to each other?",
          choices: [
            { letter: "A", text: "22.5°" },
            { letter: "B", text: "135°" },
            { letter: "C", text: "45°" },
            { letter: "D", text: "90°" }
          ],
          correct: "C"
        },
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How far apart are two cars next to each other, measured along the circle? Round to the nearest tenth of a meter.",
          choices: [
            { letter: "A", text: "7.9 m" },
            { letter: "B", text: "15.7 m" },
            { letter: "C", text: "157.1 m" },
            { letter: "D", text: "125.7 m" }
          ],
          correct: "B"
        },
        {
          id: "semicircle",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "A rider in car C looks at car A and car E. What is m∠ACE?",
          choices: [
            { letter: "A", text: "180°" },
            { letter: "B", text: "45°" },
            { letter: "C", text: "60°" },
            { letter: "D", text: "90°" }
          ],
          correct: "D"
        },
        {
          id: "chords",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "The light strings cross at P. What is m∠APC, marked in gold?",
          choices: [
            { letter: "A", text: "135°" },
            { letter: "B", text: "45°" },
            { letter: "C", text: "270°" },
            { letter: "D", text: "90°" }
          ],
          correct: "A"
        },
        {
          id: "quad",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Strings also join cars A, B, C and E to form an inscribed quadrilateral ABCE, with m∠ABC = 135°. What is m∠AEC?",
          choices: [
            { letter: "A", text: "135°" },
            { letter: "B", text: "67.5°" },
            { letter: "C", text: "45°" },
            { letter: "D", text: "225°" }
          ],
          correct: "C"
        },
        {
          id: "ride",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "The wheel makes one full turn every 6 minutes. How far does car A travel in 2 minutes, to the nearest tenth of a meter?",
          choices: [
            { letter: "A", text: "20.9 m" },
            { letter: "B", text: "418.9 m" },
            { letter: "C", text: "125.7 m" },
            { letter: "D", text: "41.9 m" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc3-tangents",
      family: "GEO",
      title: "Two Tangents and a Secant",
      kind: "Circles · G.PC.3",
      blurb: "Segments and angles from a point outside a circle.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Circle O with tangent segments PA and PB from an outside point P, radii OA and OB with central angle 100 degrees, and a secant from P that meets the circle at C and then D\">" +
        "<circle class=\"ln\" cx=\"122\" cy=\"76\" r=\"60\"/>" +
        "<line class=\"ln\" x1=\"215.3\" y1=\"76\" x2=\"160.6\" y2=\"30\"/>" +
        "<line class=\"ln\" x1=\"215.3\" y1=\"76\" x2=\"160.6\" y2=\"122\"/>" +
        "<line class=\"ln\" x1=\"215.3\" y1=\"76\" x2=\"78.4\" y2=\"117.2\"/>" +
        "<line class=\"thin\" x1=\"122\" y1=\"76\" x2=\"160.6\" y2=\"30\"/>" +
        "<line class=\"thin\" x1=\"122\" y1=\"76\" x2=\"160.6\" y2=\"122\"/>" +
        "<path class=\"thin\" d=\"M129.1 67.6 A11 11 0 0 1 129.1 84.4\"/>" +
        "<circle class=\"dt\" cx=\"122\" cy=\"76\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160.6\" cy=\"30\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160.6\" cy=\"122\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"181.1\" cy=\"86.3\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"78.4\" cy=\"117.2\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"215.3\" cy=\"76\" r=\"3\"/>" +
        "<text x=\"167\" y=\"27.4\" text-anchor=\"middle\">A</text>" +
        "<text x=\"167\" y=\"134.6\" text-anchor=\"middle\">B</text>" +
        "<text x=\"166.1\" y=\"83.3\" text-anchor=\"middle\">C</text>" +
        "<text x=\"71.1\" y=\"129.1\" text-anchor=\"middle\">D</text>" +
        "<text x=\"226.3\" y=\"81\" text-anchor=\"middle\">P</text>" +
        "<text x=\"111\" y=\"81\" text-anchor=\"middle\">O</text>" +
        "<text class=\"sm\" x=\"147\" y=\"80\" text-anchor=\"middle\">100°</text>" +
        "<text x=\"197.5\" y=\"46.6\" text-anchor=\"middle\">12</text>" +
        "<text x=\"195.1\" y=\"75.7\" text-anchor=\"middle\">6</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\"><strong>PA</strong> and <strong>PB</strong> are tangent to circle <strong>O</strong> at <strong>A</strong> and <strong>B</strong>. A secant from <strong>P</strong> meets the circle at <strong>C</strong> and <strong>D</strong>. <strong>PA</strong> = 12, <strong>PC</strong> = 6, and minor arc <strong>AB</strong> measures 100°.</p>",
      claims: [
        {
          id: "radius",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠OAP?",
          choices: [
            { letter: "A", text: "50°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "80°" },
            { letter: "D", text: "100°" }
          ],
          correct: "B"
        },
        {
          id: "congruent",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Which segment must be congruent to PA?",
          choices: [
            { letter: "A", text: "PC" },
            { letter: "B", text: "PO" },
            { letter: "C", text: "PB" },
            { letter: "D", text: "AB" }
          ],
          correct: "C"
        },
        {
          id: "cd",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is chord CD?",
          choices: [
            { letter: "A", text: "18" },
            { letter: "B", text: "24" },
            { letter: "C", text: "6" },
            { letter: "D", text: "about 10.4" }
          ],
          correct: "A"
        },
        {
          id: "outside",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠APB?",
          choices: [
            { letter: "A", text: "50°" },
            { letter: "B", text: "100°" },
            { letter: "C", text: "180°" },
            { letter: "D", text: "80°" }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Why must m∠AOB + m∠APB = 180°?",
          choices: [
            { letter: "A", text: "OAPB is a parallelogram, so consecutive angles are supplementary." },
            { letter: "B", text: "∠OAP and ∠OBP are 90°, and the angles of OAPB add to 360°." },
            { letter: "C", text: "∠AOB and ∠APB form a linear pair, so they add to 180°." },
            { letter: "D", text: "∠APB is an inscribed angle, so it is half of the major arc." }
          ],
          correct: "B"
        },
        {
          id: "distance",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "From a point Q, a tangent segment to a circle with radius 5 cm is 12 cm long. How far is Q from the center?",
          choices: [
            { letter: "A", text: "17 cm" },
            { letter: "B", text: "about 10.9 cm" },
            { letter: "C", text: "13 cm" },
            { letter: "D", text: "7 cm" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc3-plate",
      family: "GEO",
      title: "The Broken Plate",
      kind: "Circles · G.PC.3",
      blurb: "Finding the size of a plate from one piece.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Circle O drawn from a broken piece of a plate: the shaded piece lies above chord AB; M is the midpoint of AB, segment MC is perpendicular to AB and reaches the edge at C, and line CM continues through center O to D on the far edge\">" +
        "<path class=\"sh\" d=\"M108.8 47.6 A64 64 0 0 1 211.2 47.6 Z\"/>" +
        "<path class=\"thin dash\" d=\"M211.2 47.6 A64 64 0 1 1 108.8 47.6\"/>" +
        "<line class=\"thin dash\" x1=\"160\" y1=\"22\" x2=\"160\" y2=\"150\"/>" +
        "<path class=\"thin\" d=\"M167 47.6 L167 54.6 L160 54.6\"/>" +
        "<line class=\"thin\" x1=\"134.4\" y1=\"52.6\" x2=\"134.4\" y2=\"42.6\"/>" +
        "<line class=\"thin\" x1=\"185.6\" y1=\"52.6\" x2=\"185.6\" y2=\"42.6\"/>" +
        "<circle class=\"dt\" cx=\"108.8\" cy=\"47.6\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"211.2\" cy=\"47.6\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"22\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"150\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"47.6\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"86\" r=\"3\"/>" +
        "<text x=\"97.8\" y=\"52.6\" text-anchor=\"middle\">A</text>" +
        "<text x=\"222.2\" y=\"52.6\" text-anchor=\"middle\">B</text>" +
        "<text x=\"160\" y=\"17\" text-anchor=\"middle\">C</text>" +
        "<text x=\"160\" y=\"166\" text-anchor=\"middle\">D</text>" +
        "<text x=\"150\" y=\"63.6\" text-anchor=\"middle\">M</text>" +
        "<text x=\"171\" y=\"94\" text-anchor=\"middle\">O</text>" +
        "<text class=\"sm\" x=\"177\" y=\"38.8\" text-anchor=\"middle\">4 cm</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">An archaeologist finds a piece of a round plate (shaded). She draws chord <strong>AB</strong> = 16 cm with midpoint <strong>M</strong>. Along the line perpendicular to <strong>AB</strong> at <strong>M</strong>, <strong>MC</strong> = 4 cm to the edge at <strong>C</strong>. Line <strong>CM</strong> continues across the full plate to <strong>D</strong>.</p>",
      claims: [
        {
          id: "md",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Chords AB and CD cross at M. How long is MD?",
          choices: [
            { letter: "A", text: "2 cm" },
            { letter: "B", text: "12 cm" },
            { letter: "C", text: "about 8.9 cm" },
            { letter: "D", text: "16 cm" }
          ],
          correct: "D"
        },
        {
          id: "radius",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "What was the radius of the whole plate?",
          choices: [
            { letter: "A", text: "10 cm" },
            { letter: "B", text: "20 cm" },
            { letter: "C", text: "8 cm" },
            { letter: "D", text: "16 cm" }
          ],
          correct: "A"
        },
        {
          id: "central",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Use right triangle AMO, where OM = 6 cm, to find m∠AOB to the nearest degree.",
          choices: [
            { letter: "A", text: "53°" },
            { letter: "B", text: "74°" },
            { letter: "C", text: "106°" },
            { letter: "D", text: "127°" }
          ],
          correct: "C"
        },
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Use m∠AOB ≈ 106°. How long is the curved edge of the piece, arc ACB, to the nearest tenth of a cm?",
          choices: [
            { letter: "A", text: "37.0 cm" },
            { letter: "B", text: "18.5 cm" },
            { letter: "C", text: "9.3 cm" },
            { letter: "D", text: "92.5 cm" }
          ],
          correct: "B"
        },
        {
          id: "ring",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "A museum makes a metal ring to fit around the rim of the whole plate. To the nearest tenth of a cm, how long is the ring?",
          choices: [
            { letter: "A", text: "62.8 cm" },
            { letter: "B", text: "31.4 cm" },
            { letter: "C", text: "314.2 cm" },
            { letter: "D", text: "125.7 cm" }
          ],
          correct: "A"
        },
        {
          id: "center",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Why must line CD pass through the center of the plate?",
          choices: [
            { letter: "A", text: "Any line through the midpoint of a chord passes through the center." },
            { letter: "B", text: "C is the midpoint of chord AB, so CD is a diameter." },
            { letter: "C", text: "Two chords that cross always cross at the center." },
            { letter: "D", text: "The perpendicular bisector of a chord passes through the center." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc4-grid",
      family: "GEO",
      title: "A Circle on the Grid",
      kind: "Equations of circles · G.PC.4",
      blurb: "Read the center and radius, then write the equation.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Coordinate grid from x = −2 to 7 and y = −5 to 3 with a circle whose center is the marked point (2, −1) and which passes through (5, −1), (2, 2), (−1, −1) and (2, −4)\">" +
        "<line class=\"gr\" x1=\"88\" y1=\"138\" x2=\"88\" y2=\"10\"/><line class=\"gr\" x1=\"104\" y1=\"138\" x2=\"104\" y2=\"10\"/><line class=\"gr\" x1=\"120\" y1=\"138\" x2=\"120\" y2=\"10\"/><line class=\"gr\" x1=\"136\" y1=\"138\" x2=\"136\" y2=\"10\"/><line class=\"gr\" x1=\"152\" y1=\"138\" x2=\"152\" y2=\"10\"/><line class=\"gr\" x1=\"168\" y1=\"138\" x2=\"168\" y2=\"10\"/><line class=\"gr\" x1=\"184\" y1=\"138\" x2=\"184\" y2=\"10\"/><line class=\"gr\" x1=\"200\" y1=\"138\" x2=\"200\" y2=\"10\"/><line class=\"gr\" x1=\"216\" y1=\"138\" x2=\"216\" y2=\"10\"/><line class=\"gr\" x1=\"232\" y1=\"138\" x2=\"232\" y2=\"10\"/><line class=\"gr\" x1=\"88\" y1=\"138\" x2=\"232\" y2=\"138\"/><line class=\"gr\" x1=\"88\" y1=\"122\" x2=\"232\" y2=\"122\"/><line class=\"gr\" x1=\"88\" y1=\"106\" x2=\"232\" y2=\"106\"/><line class=\"gr\" x1=\"88\" y1=\"90\" x2=\"232\" y2=\"90\"/><line class=\"gr\" x1=\"88\" y1=\"74\" x2=\"232\" y2=\"74\"/><line class=\"gr\" x1=\"88\" y1=\"58\" x2=\"232\" y2=\"58\"/><line class=\"gr\" x1=\"88\" y1=\"42\" x2=\"232\" y2=\"42\"/><line class=\"gr\" x1=\"88\" y1=\"26\" x2=\"232\" y2=\"26\"/><line class=\"gr\" x1=\"88\" y1=\"10\" x2=\"232\" y2=\"10\"/><line class=\"ax\" x1=\"88\" y1=\"58\" x2=\"232\" y2=\"58\"/><line class=\"ax\" x1=\"120\" y1=\"138\" x2=\"120\" y2=\"10\"/><text class=\"sm\" x=\"88\" y=\"55\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"152\" y=\"55\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"184\" y=\"55\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"216\" y=\"55\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"116\" y=\"30\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"116\" y=\"126\" text-anchor=\"end\">−4</text>" +
        "<circle class=\"ln\" cx=\"152\" cy=\"74\" r=\"48\"/>" +
        "<circle class=\"dta\" cx=\"152\" cy=\"74\" r=\"3\"/>" +
        "<text class=\"sm\" x=\"241\" y=\"62\" text-anchor=\"middle\">x</text>" +
        "<text class=\"sm\" x=\"128\" y=\"17\" text-anchor=\"middle\">y</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A circle is graphed on the coordinate grid. Its center is the gold point, and it passes through grid points.</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What is the center of the circle?",
          choices: [
            { letter: "A", text: "(−2, 1)" },
            { letter: "B", text: "(2, −1)" },
            { letter: "C", text: "(−1, 2)" },
            { letter: "D", text: "(2, 1)" }
          ],
          correct: "B"
        },
        {
          id: "radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What is the radius of the circle?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "6" },
            { letter: "C", text: "9" },
            { letter: "D", text: "√3" }
          ],
          correct: "A"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes this circle?",
          choices: [
            { letter: "A", text: "(x + 2)² + (y − 1)² = 9" },
            { letter: "B", text: "(x − 2)² + (y + 1)² = 3" },
            { letter: "C", text: "(x − 2)² + (y − 1)² = 9" },
            { letter: "D", text: "(x − 2)² + (y + 1)² = 9" }
          ],
          correct: "D"
        },
        {
          id: "inside",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which point is inside the circle?",
          choices: [
            { letter: "A", text: "(5, 1)" },
            { letter: "B", text: "(−1, 1)" },
            { letter: "C", text: "(3, 0)" },
            { letter: "D", text: "(4, 2)" }
          ],
          correct: "C"
        },
        {
          id: "read",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A different circle has the equation (x + 4)² + (y − 5)² = 20. What are its center and radius?",
          choices: [
            { letter: "A", text: "(4, −5); r = 2√5" },
            { letter: "B", text: "(−4, 5); r = 2√5" },
            { letter: "C", text: "(−4, 5); r = 20" },
            { letter: "D", text: "(−4, 5); r = 10" }
          ],
          correct: "B"
        },
        {
          id: "shift",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "The circle in the graph is moved 4 units left. Its radius does not change. What is the new equation?",
          choices: [
            { letter: "A", text: "(x − 6)² + (y + 1)² = 9" },
            { letter: "B", text: "(x − 2)² + (y + 5)² = 9" },
            { letter: "C", text: "(x + 2)² + (y − 1)² = 9" },
            { letter: "D", text: "(x + 2)² + (y + 1)² = 9" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc4-diameter",
      family: "GEO",
      title: "Ends of a Diameter",
      kind: "Equations of circles · G.PC.4",
      blurb: "The midpoint and half the distance give the circle.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Coordinate grid with segment AB from A(−2, −1) to B(4, 7), a diameter of a circle that is not drawn\">" +
        "<line class=\"gr\" x1=\"108\" y1=\"140\" x2=\"108\" y2=\"10\"/><line class=\"gr\" x1=\"121\" y1=\"140\" x2=\"121\" y2=\"10\"/><line class=\"gr\" x1=\"134\" y1=\"140\" x2=\"134\" y2=\"10\"/><line class=\"gr\" x1=\"147\" y1=\"140\" x2=\"147\" y2=\"10\"/><line class=\"gr\" x1=\"160\" y1=\"140\" x2=\"160\" y2=\"10\"/><line class=\"gr\" x1=\"173\" y1=\"140\" x2=\"173\" y2=\"10\"/><line class=\"gr\" x1=\"186\" y1=\"140\" x2=\"186\" y2=\"10\"/><line class=\"gr\" x1=\"199\" y1=\"140\" x2=\"199\" y2=\"10\"/><line class=\"gr\" x1=\"212\" y1=\"140\" x2=\"212\" y2=\"10\"/><line class=\"gr\" x1=\"108\" y1=\"140\" x2=\"212\" y2=\"140\"/><line class=\"gr\" x1=\"108\" y1=\"127\" x2=\"212\" y2=\"127\"/><line class=\"gr\" x1=\"108\" y1=\"114\" x2=\"212\" y2=\"114\"/><line class=\"gr\" x1=\"108\" y1=\"101\" x2=\"212\" y2=\"101\"/><line class=\"gr\" x1=\"108\" y1=\"88\" x2=\"212\" y2=\"88\"/><line class=\"gr\" x1=\"108\" y1=\"75\" x2=\"212\" y2=\"75\"/><line class=\"gr\" x1=\"108\" y1=\"62\" x2=\"212\" y2=\"62\"/><line class=\"gr\" x1=\"108\" y1=\"49\" x2=\"212\" y2=\"49\"/><line class=\"gr\" x1=\"108\" y1=\"36\" x2=\"212\" y2=\"36\"/><line class=\"gr\" x1=\"108\" y1=\"23\" x2=\"212\" y2=\"23\"/><line class=\"gr\" x1=\"108\" y1=\"10\" x2=\"212\" y2=\"10\"/><line class=\"ax\" x1=\"108\" y1=\"114\" x2=\"212\" y2=\"114\"/><line class=\"ax\" x1=\"147\" y1=\"140\" x2=\"147\" y2=\"10\"/><text class=\"sm\" x=\"121\" y=\"111\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"173\" y=\"111\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"199\" y=\"111\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"143\" y=\"92\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"143\" y=\"66\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"143\" y=\"40\" text-anchor=\"end\">6</text><text class=\"sm\" x=\"143\" y=\"14\" text-anchor=\"end\">8</text>" +
        "<line class=\"ac\" x1=\"121\" y1=\"127\" x2=\"199\" y2=\"23\"/>" +
        "<circle class=\"dt\" cx=\"121\" cy=\"127\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"199\" cy=\"23\" r=\"3\"/>" +
        "<text x=\"110\" y=\"135\" text-anchor=\"middle\">A</text>" +
        "<text x=\"209\" y=\"25\" text-anchor=\"middle\">B</text>" +
        "<text class=\"sm\" x=\"221\" y=\"118\" text-anchor=\"middle\">x</text>" +
        "<text class=\"sm\" x=\"155\" y=\"17\" text-anchor=\"middle\">y</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">Segment <strong>AB</strong> is a diameter of a circle. Its endpoints are <strong>A</strong><span style=\"white-space:nowrap\">(−2, −1)</span> and <strong>B</strong>(4, 7).</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "What is the center of the circle with diameter AB?",
          choices: [
            { letter: "A", text: "(3, 4)" },
            { letter: "B", text: "(2, 6)" },
            { letter: "C", text: "(1, 3)" },
            { letter: "D", text: "(−1, −3)" }
          ],
          correct: "C"
        },
        {
          id: "radius",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "How long is the radius of this circle?",
          choices: [
            { letter: "A", text: "10" },
            { letter: "B", text: "25" },
            { letter: "C", text: "7" },
            { letter: "D", text: "5" }
          ],
          correct: "D"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the circle?",
          choices: [
            { letter: "A", text: "(x − 1)² + (y − 3)² = 25" },
            { letter: "B", text: "(x + 1)² + (y + 3)² = 25" },
            { letter: "C", text: "(x − 1)² + (y − 3)² = 100" },
            { letter: "D", text: "(x − 1)² + (y − 3)² = 5" }
          ],
          correct: "A"
        },
        {
          id: "point",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which point is also on this circle?",
          choices: [
            { letter: "A", text: "(2, 1)" },
            { letter: "B", text: "(5, 0)" },
            { letter: "C", text: "(6, 7)" },
            { letter: "D", text: "(4, 3)" }
          ],
          correct: "B"
        },
        {
          id: "expr",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives the radius, using the distance formula from the center to A?",
          choices: [
            { letter: "A", text: "√((−2 − 1)² + (−1 − 3)²)" },
            { letter: "B", text: "√((−2 + 1)² + (−1 + 3)²)" },
            { letter: "C", text: "(−2 − 1)² + (−1 − 3)²" },
            { letter: "D", text: "√((4 + 2)² + (7 + 1)²)" }
          ],
          correct: "A"
        },
        {
          id: "origin",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A second circle has the same center and passes through the origin. What is its equation?",
          choices: [
            { letter: "A", text: "(x − 1)² + (y − 3)² = √10" },
            { letter: "B", text: "(x + 1)² + (y + 3)² = 10" },
            { letter: "C", text: "(x − 1)² + (y − 3)² = 10" },
            { letter: "D", text: "(x − 1)² + (y − 3)² = 16" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc4-wifi",
      family: "GEO",
      title: "The Wi-Fi Router",
      kind: "Equations of circles · G.PC.4",
      blurb: "A signal circle on the school map.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Coordinate grid of a school map with router R at (−1, 2), point P at (3, 4) on a dashed circle centered at R, and a dashed right triangle from R across to (3, 2) and up to P\">" +
        "<line class=\"gr\" x1=\"89\" y1=\"139\" x2=\"89\" y2=\"9\"/><line class=\"gr\" x1=\"102\" y1=\"139\" x2=\"102\" y2=\"9\"/><line class=\"gr\" x1=\"115\" y1=\"139\" x2=\"115\" y2=\"9\"/><line class=\"gr\" x1=\"128\" y1=\"139\" x2=\"128\" y2=\"9\"/><line class=\"gr\" x1=\"141\" y1=\"139\" x2=\"141\" y2=\"9\"/><line class=\"gr\" x1=\"154\" y1=\"139\" x2=\"154\" y2=\"9\"/><line class=\"gr\" x1=\"167\" y1=\"139\" x2=\"167\" y2=\"9\"/><line class=\"gr\" x1=\"180\" y1=\"139\" x2=\"180\" y2=\"9\"/><line class=\"gr\" x1=\"193\" y1=\"139\" x2=\"193\" y2=\"9\"/><line class=\"gr\" x1=\"206\" y1=\"139\" x2=\"206\" y2=\"9\"/><line class=\"gr\" x1=\"219\" y1=\"139\" x2=\"219\" y2=\"9\"/><line class=\"gr\" x1=\"232\" y1=\"139\" x2=\"232\" y2=\"9\"/><line class=\"gr\" x1=\"89\" y1=\"139\" x2=\"232\" y2=\"139\"/><line class=\"gr\" x1=\"89\" y1=\"126\" x2=\"232\" y2=\"126\"/><line class=\"gr\" x1=\"89\" y1=\"113\" x2=\"232\" y2=\"113\"/><line class=\"gr\" x1=\"89\" y1=\"100\" x2=\"232\" y2=\"100\"/><line class=\"gr\" x1=\"89\" y1=\"87\" x2=\"232\" y2=\"87\"/><line class=\"gr\" x1=\"89\" y1=\"74\" x2=\"232\" y2=\"74\"/><line class=\"gr\" x1=\"89\" y1=\"61\" x2=\"232\" y2=\"61\"/><line class=\"gr\" x1=\"89\" y1=\"48\" x2=\"232\" y2=\"48\"/><line class=\"gr\" x1=\"89\" y1=\"35\" x2=\"232\" y2=\"35\"/><line class=\"gr\" x1=\"89\" y1=\"22\" x2=\"232\" y2=\"22\"/><line class=\"gr\" x1=\"89\" y1=\"9\" x2=\"232\" y2=\"9\"/><line class=\"ax\" x1=\"89\" y1=\"100\" x2=\"232\" y2=\"100\"/><line class=\"ax\" x1=\"167\" y1=\"139\" x2=\"167\" y2=\"9\"/><text class=\"sm\" x=\"115\" y=\"113\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"141\" y=\"113\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"193\" y=\"113\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"219\" y=\"113\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"163\" y=\"52\" text-anchor=\"end\">4</text>" +
        "<circle class=\"ln dash\" cx=\"154\" cy=\"74\" r=\"58.1\"/>" +
        "<line class=\"thin dash\" x1=\"154\" y1=\"74\" x2=\"206\" y2=\"74\"/>" +
        "<line class=\"thin dash\" x1=\"206\" y1=\"74\" x2=\"206\" y2=\"48\"/>" +
        "<line class=\"ac\" x1=\"154\" y1=\"74\" x2=\"206\" y2=\"48\"/>" +
        "<path class=\"thin\" d=\"M200 74 L200 68 L206 68\"/>" +
        "<circle class=\"dt\" cx=\"154\" cy=\"74\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"206\" cy=\"48\" r=\"3\"/>" +
        "<text x=\"145\" y=\"89\" text-anchor=\"middle\">R</text>" +
        "<text x=\"215\" y=\"46\" text-anchor=\"middle\">P</text>" +
        "<text class=\"sm\" x=\"276\" y=\"144\" text-anchor=\"middle\">1 unit = 10 m</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a school map, each grid unit is 10 m. A Wi-Fi router at <strong>R</strong><span style=\"white-space:nowrap\">(−1, 2)</span> reaches exactly as far as point <strong>P</strong>(3, 4) in every direction, so the edge of its signal is a circle.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the signal?",
          choices: [
            { letter: "A", text: "(x − 1)² + (y + 2)² = 20" },
            { letter: "B", text: "(x + 1)² + (y − 2)² = 2√5" },
            { letter: "C", text: "(x − 3)² + (y − 4)² = 20" },
            { letter: "D", text: "(x + 1)² + (y − 2)² = 20" }
          ],
          correct: "D"
        },
        {
          id: "radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What is the radius in grid units, in simplest radical form?",
          choices: [
            { letter: "A", text: "2√5 units" },
            { letter: "B", text: "20 units" },
            { letter: "C", text: "4√5 units" },
            { letter: "D", text: "10 units" }
          ],
          correct: "A"
        },
        {
          id: "meters",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "To the nearest meter, how far does the signal reach?",
          choices: [
            { letter: "A", text: "200 m" },
            { letter: "B", text: "45 m" },
            { letter: "C", text: "4 m" },
            { letter: "D", text: "60 m" }
          ],
          correct: "B"
        },
        {
          id: "outside",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which building is outside the signal circle?",
          choices: [
            { letter: "A", text: "Library at (2, −1)" },
            { letter: "B", text: "Cafeteria at (−5, 1)" },
            { letter: "C", text: "Gym at (−4, 6)" },
            { letter: "D", text: "Office at (1, 5)" }
          ],
          correct: "C"
        },
        {
          id: "pyth",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which equation applies the Pythagorean theorem to the dashed right triangle?",
          choices: [
            { letter: "A", text: "4² + 2² = r²" },
            { letter: "B", text: "4 + 2 = r" },
            { letter: "C", text: "3² + 4² = r²" },
            { letter: "D", text: "4² − 2² = r²" }
          ],
          correct: "A"
        },
        {
          id: "upgrade",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "The router is upgraded to reach 60 m from the same spot. What is the new equation?",
          choices: [
            { letter: "A", text: "(x + 1)² + (y − 2)² = 60" },
            { letter: "B", text: "(x + 1)² + (y − 2)² = 36" },
            { letter: "C", text: "(x + 1)² + (y − 2)² = 3600" },
            { letter: "D", text: "(x + 1)² + (y − 2)² = 6" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc4-derive",
      family: "GEO",
      title: "Deriving the Circle Equation",
      kind: "Equations of circles · G.PC.4",
      blurb: "The Pythagorean theorem behind the equation of a circle.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Coordinate axes with a circle of center C(h, k) and radius r; P(x, y) is a point on the circle and Q(x, k) is level with C and directly below P, forming right triangle CQP\">" +
        "<line class=\"ax\" x1=\"20\" y1=\"160\" x2=\"304\" y2=\"160\"/>" +
        "<line class=\"ax\" x1=\"26\" y1=\"166\" x2=\"26\" y2=\"12\"/>" +
        "<text class=\"sm\" x=\"310\" y=\"164\" text-anchor=\"middle\">x</text>" +
        "<text class=\"sm\" x=\"35\" y=\"18\" text-anchor=\"middle\">y</text>" +
        "<circle class=\"ln\" cx=\"140\" cy=\"92\" r=\"56\"/>" +
        "<line class=\"thin dash\" x1=\"140\" y1=\"92\" x2=\"182.9\" y2=\"92\"/>" +
        "<line class=\"thin dash\" x1=\"182.9\" y1=\"92\" x2=\"182.9\" y2=\"56\"/>" +
        "<line class=\"ac\" x1=\"140\" y1=\"92\" x2=\"182.9\" y2=\"56\"/>" +
        "<path class=\"thin\" d=\"M175.9 92 L175.9 85 L182.9 85\"/>" +
        "<circle class=\"dt\" cx=\"140\" cy=\"92\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"182.9\" cy=\"56\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"182.9\" cy=\"92\" r=\"3\"/>" +
        "<text x=\"134\" y=\"115\" text-anchor=\"middle\">C(h, k)</text>" +
        "<text x=\"212.9\" y=\"53\" text-anchor=\"middle\">P(x, y)</text>" +
        "<text x=\"202\" y=\"109\" text-anchor=\"start\">Q(x, k)</text>" +
        "<text class=\"acc\" x=\"155\" y=\"71.3\" text-anchor=\"middle\">r</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A circle has center <strong>C</strong>(h, k) and radius r. <strong>P</strong>(x, y) is any point on the circle, and <strong>Q</strong>(x, k) makes right triangle <strong>CQP</strong>.</p>",
      claims: [
        {
          id: "leg",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives the length of leg CQ?",
          choices: [
            { letter: "A", text: "|x + h|" },
            { letter: "B", text: "|y − k|" },
            { letter: "C", text: "|x − h|" },
            { letter: "D", text: "|x − k|" }
          ],
          correct: "C"
        },
        {
          id: "pyth",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which equation does the Pythagorean theorem give for triangle CQP?",
          choices: [
            { letter: "A", text: "(x − h) + (y − k) = r" },
            { letter: "B", text: "(x + h)² + (y + k)² = r²" },
            { letter: "C", text: "(x − h)² + r² = (y − k)²" },
            { letter: "D", text: "(x − h)² + (y − k)² = r²" }
          ],
          correct: "D"
        },
        {
          id: "next",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "The distance formula gives r = √((x − h)² + (y − k)²). What is the next step to reach the equation of the circle?",
          choices: [
            { letter: "A", text: "Take the square root of both sides." },
            { letter: "B", text: "Square both sides." },
            { letter: "C", text: "Subtract (y − k)² from both sides." },
            { letter: "D", text: "Add h and k to both sides." }
          ],
          correct: "B"
        },
        {
          id: "sign",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "If P is to the left of C, then x − h is negative. Does the equation still work?",
          choices: [
            { letter: "A", text: "Yes: (x − h)² is the same as |x − h|²." },
            { letter: "B", text: "No: a leg cannot have a negative length." },
            { letter: "C", text: "No: use (x + h)² when P is on the left." },
            { letter: "D", text: "Yes, but only if y − k is negative too." }
          ],
          correct: "A"
        },
        {
          id: "point",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which point is on the circle (x − 3)² + (y + 2)² = 25?",
          choices: [
            { letter: "A", text: "(1, 5)" },
            { letter: "B", text: "(3, 7)" },
            { letter: "C", text: "(8, 3)" },
            { letter: "D", text: "(−1, 1)" }
          ],
          correct: "D"
        },
        {
          id: "write",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which is the equation of the circle with center (−1, 4) that passes through (2, −2)?",
          choices: [
            { letter: "A", text: "(x + 1)² + (y − 4)² = 3√5" },
            { letter: "B", text: "(x − 1)² + (y + 4)² = 45" },
            { letter: "C", text: "(x + 1)² + (y − 4)² = 45" },
            { letter: "D", text: "(x + 1)² + (y − 4)² = 5" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
