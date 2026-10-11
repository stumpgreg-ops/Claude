/* SOL Labyrinth — Geometry game (family GEO), quadrilaterals: G.PC.1 (Virginia 2023 Geometry SOL), v5.20. Original items only.
   Modes: rocks / Rune Rocks (7 packs, space, science and weather) and sky / Sun Chariot (7 packs, travel and getting around).
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given
   facts, then six questions about it. Every figure coordinate and numeric answer was computed, and every distractor is a
   named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-pc1-rocks-solar-panel",
      family: "GEO",
      mode: "rocks",
      title: "The Weather Station Solar Panel",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Two wires cross a 120-by-50-centimeter panel.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Rectangle ABCD, 120 cm wide and 50 cm tall, drawn as a solar panel with cell lines and right angles marked at the corners; gold diagonals AC and BD cross at E\">" +
        "<polygon class=\"sh2\" points=\"64,126 256,126 256,46 64,46\"/><line class=\"gr\" x1=\"96\" y1=\"46\" x2=\"96\" y2=\"126\"/><line class=\"gr\" x1=\"128\" y1=\"46\" x2=\"128\" y2=\"126\"/>" +
        "<line class=\"gr\" x1=\"160\" y1=\"46\" x2=\"160\" y2=\"126\"/><line class=\"gr\" x1=\"192\" y1=\"46\" x2=\"192\" y2=\"126\"/><line class=\"gr\" x1=\"224\" y1=\"46\" x2=\"224\" y2=\"126\"/>" +
        "<line class=\"gr\" x1=\"64\" y1=\"86\" x2=\"256\" y2=\"86\"/><line class=\"ac\" x1=\"64\" y1=\"126\" x2=\"256\" y2=\"46\"/><line class=\"ac\" x1=\"256\" y1=\"126\" x2=\"64\" y2=\"46\"/>" +
        "<path class=\"thin\" d=\"M73 126 L73 117 L64 117\"/><path class=\"thin\" d=\"M256 117 L247 117 L247 126\"/><path class=\"thin\" d=\"M247 46 L247 55 L256 55\"/>" +
        "<path class=\"thin\" d=\"M64 55 L73 55 L73 46\"/><circle class=\"dt\" cx=\"64\" cy=\"126\" r=\"3\"/><circle class=\"dt\" cx=\"256\" cy=\"126\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"256\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"64\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"86\" r=\"3\"/>" +
        "<text x=\"54\" y=\"140\" text-anchor=\"middle\">A</text><text x=\"266\" y=\"140\" text-anchor=\"middle\">B</text><text x=\"266\" y=\"42\" text-anchor=\"middle\">C</text>" +
        "<text x=\"54\" y=\"42\" text-anchor=\"middle\">D</text><text x=\"160\" y=\"77\" text-anchor=\"middle\">E</text><text x=\"160\" y=\"144\" text-anchor=\"middle\">120 cm</text>" +
        "<text x=\"264\" y=\"91\" text-anchor=\"start\">50 cm</text></svg></figure>" +
        "<p class=\"geo-given\">A weather station has a rectangular solar panel <strong>ABCD</strong> that is 120 cm long and 50 cm tall. Two support wires run along its diagonals <strong>AC</strong> and <strong>BD</strong> and cross at <strong>E</strong>.</p>",
      claims: [
        {
          id: "wire",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the wire AC?",
          choices: [
            { letter: "A", text: "170 cm" },
            { letter: "B", text: "about 109.1 cm" },
            { letter: "C", text: "130 cm" },
            { letter: "D", text: "65 cm" }
          ],
          correct: "C"
        },
        {
          id: "diagonals",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement about the wires AC and BD must be true?",
          choices: [
            { letter: "A", text: "They are congruent and bisect each other." },
            { letter: "B", text: "They are perpendicular to each other." },
            { letter: "C", text: "They bisect the angles of the panel." },
            { letter: "D", text: "Only AC bisects BD." }
          ],
          correct: "A"
        },
        {
          id: "be",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How far is the crossing point E from corner B?",
          choices: [
            { letter: "A", text: "130 cm" },
            { letter: "B", text: "60 cm" },
            { letter: "C", text: "25 cm" },
            { letter: "D", text: "65 cm" }
          ],
          correct: "D"
        },
        {
          id: "isosceles",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which triangle in the figure must be isosceles?",
          choices: [
            { letter: "A", text: "△ABC" },
            { letter: "B", text: "△BEC" },
            { letter: "C", text: "△ABD" },
            { letter: "D", text: "△ACD" }
          ],
          correct: "B"
        },
        {
          id: "nottrue",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is NOT true for every rectangle?",
          choices: [
            { letter: "A", text: "All four sides are congruent." },
            { letter: "B", text: "Opposite sides are parallel." },
            { letter: "C", text: "All four angles are right angles." },
            { letter: "D", text: "Its diagonals are congruent." }
          ],
          correct: "A"
        },
        {
          id: "onefact",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "A frame for a second panel is a parallelogram. Which single fact is enough to prove the frame is a rectangle?",
          choices: [
            { letter: "A", text: "Its opposite sides are congruent." },
            { letter: "B", text: "Its diagonals bisect each other." },
            { letter: "C", text: "Its diagonals are perpendicular." },
            { letter: "D", text: "One of its angles is a right angle." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc1-rocks-cubesat",
      family: "GEO",
      mode: "rocks",
      title: "The CubeSat Face",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Each face of a tiny satellite is a 10-centimeter square.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A cube drawn in perspective with only its visible edges; its front face is square ABCD with 10 cm sides, tick marks on all four sides and right angles at the corners; diagonals AC and BD meet at E\">" +
        "<polygon class=\"thin\" points=\"60,40 160,40 205,16 105,16\"/><polygon class=\"thin\" points=\"160,140 205,116 205,16 160,40\"/>" +
        "<polygon class=\"sh\" points=\"60,140 160,140 160,40 60,40\"/><line class=\"thin\" x1=\"60\" y1=\"140\" x2=\"160\" y2=\"40\"/><line class=\"thin\" x1=\"160\" y1=\"140\" x2=\"60\" y2=\"40\"/>" +
        "<path class=\"thin\" d=\"M69 140 L69 131 L60 131\"/><path class=\"thin\" d=\"M160 131 L151 131 L151 140\"/><path class=\"thin\" d=\"M151 40 L151 49 L160 49\"/>" +
        "<path class=\"thin\" d=\"M60 49 L69 49 L69 40\"/><line class=\"thin\" x1=\"110\" y1=\"145\" x2=\"110\" y2=\"135\"/><line class=\"thin\" x1=\"165\" y1=\"90\" x2=\"155\" y2=\"90\"/>" +
        "<line class=\"thin\" x1=\"110\" y1=\"35\" x2=\"110\" y2=\"45\"/><line class=\"thin\" x1=\"55\" y1=\"90\" x2=\"65\" y2=\"90\"/><circle class=\"dt\" cx=\"60\" cy=\"140\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"40\" r=\"3\"/><circle class=\"dt\" cx=\"60\" cy=\"40\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"110\" cy=\"90\" r=\"3\"/><text x=\"49\" y=\"153\" text-anchor=\"middle\">A</text><text x=\"170\" y=\"153\" text-anchor=\"middle\">B</text>" +
        "<text x=\"171\" y=\"57\" text-anchor=\"middle\">C</text><text x=\"49\" y=\"42\" text-anchor=\"middle\">D</text><text x=\"110\" y=\"109\" text-anchor=\"middle\">E</text>" +
        "<text x=\"110\" y=\"157\" text-anchor=\"middle\">10 cm</text></svg></figure>" +
        "<p class=\"geo-given\">Each face of a small CubeSat satellite is a square. On the front face <strong>ABCD</strong>, each side is 10 cm, and the diagonals <strong>AC</strong> and <strong>BD</strong> meet at <strong>E</strong>.</p>",
      claims: [
        {
          id: "diag",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is diagonal AC?",
          choices: [
            { letter: "A", text: "20 cm" },
            { letter: "B", text: "10√2 cm" },
            { letter: "C", text: "10 cm" },
            { letter: "D", text: "5√2 cm" }
          ],
          correct: "B"
        },
        {
          id: "eab",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "What is the measure of the angle between diagonal AC and side AB?",
          choices: [
            { letter: "A", text: "90°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "135°" },
            { letter: "D", text: "45°" }
          ],
          correct: "D"
        },
        {
          id: "squareonly",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is true of square ABCD but NOT true of every rectangle?",
          choices: [
            { letter: "A", text: "Its diagonals are perpendicular." },
            { letter: "B", text: "Its diagonals are congruent." },
            { letter: "C", text: "Its opposite sides are parallel." },
            { letter: "D", text: "All four angles are right angles." }
          ],
          correct: "A"
        },
        {
          id: "rhombus",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Is every square, like ABCD, also a rhombus?",
          choices: [
            { letter: "A", text: "No, because a rhombus has no right angles." },
            { letter: "B", text: "Yes, because its diagonals are congruent." },
            { letter: "C", text: "Yes, because it has four congruent sides." },
            { letter: "D", text: "No, because rhombus diagonals are never congruent." }
          ],
          correct: "C"
        },
        {
          id: "toside",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "E is the center of the face. How far is E from side AB?",
          choices: [
            { letter: "A", text: "5√2 cm" },
            { letter: "B", text: "10 cm" },
            { letter: "C", text: "5 cm" },
            { letter: "D", text: "2.5 cm" }
          ],
          correct: "C"
        },
        {
          id: "bigger",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "A larger CubeSat face is also a square. One side is (3x + 4) cm and the next side is (5x − 8) cm. What is the perimeter of this face?",
          choices: [
            { letter: "A", text: "22 cm" },
            { letter: "B", text: "88 cm" },
            { letter: "C", text: "6 cm" },
            { letter: "D", text: "44 cm" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc1-rocks-antenna-kite",
      family: "GEO",
      mode: "rocks",
      title: "The Kite-Shaped Antenna",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A weather radio antenna with two pairs of equal edges.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"Kite ABCD with A at the left and C at the right; AB and AD have one tick mark, CB and CD have two; diagonals AC and BD meet at right angles at E; the angle at A is 110 degrees, the angle at B is labeled 6x − 2 degrees and the angle at D is labeled 4x + 32 degrees\">" +
        "<polygon class=\"sh\" points=\"62,83 109.9,14.6 256.6,83 109.9,151.4\"/><line class=\"thin\" x1=\"62\" y1=\"83\" x2=\"256.6\" y2=\"83\"/>" +
        "<line class=\"thin\" x1=\"109.9\" y1=\"14.6\" x2=\"109.9\" y2=\"151.4\"/><path class=\"thin\" d=\"M116.9 83 L116.9 76 L109.9 76\"/>" +
        "<line class=\"thin\" x1=\"90\" y1=\"51.7\" x2=\"81.9\" y2=\"45.9\"/><line class=\"thin\" x1=\"81.9\" y1=\"120.1\" x2=\"90\" y2=\"114.3\"/>" +
        "<line class=\"thin\" x1=\"187.2\" y1=\"45.1\" x2=\"182.9\" y2=\"54.2\"/><line class=\"thin\" x1=\"183.5\" y1=\"43.4\" x2=\"179.3\" y2=\"52.5\"/>" +
        "<line class=\"thin\" x1=\"182.9\" y1=\"111.8\" x2=\"187.2\" y2=\"120.9\"/><line class=\"thin\" x1=\"179.3\" y1=\"113.5\" x2=\"183.5\" y2=\"122.6\"/>" +
        "<path class=\"thin\" d=\"M67.2 75.6 A9 9 0 0 1 67.2 90.4\"/><path class=\"thin\" d=\"M104.2 22.8 A10 10 0 0 0 119 18.8\"/>" +
        "<path class=\"thin\" d=\"M104.2 143.2 A10 10 0 0 1 119 147.2\"/><circle class=\"dt\" cx=\"62\" cy=\"83\" r=\"3\"/><circle class=\"dt\" cx=\"109.9\" cy=\"14.6\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"256.6\" cy=\"83\" r=\"3\"/><circle class=\"dt\" cx=\"109.9\" cy=\"151.4\" r=\"3\"/><circle class=\"dt\" cx=\"109.9\" cy=\"83\" r=\"3\"/>" +
        "<text x=\"51\" y=\"88\" text-anchor=\"middle\">A</text><text x=\"97.9\" y=\"18.6\" text-anchor=\"middle\">B</text><text x=\"267.6\" y=\"88\" text-anchor=\"middle\">C</text>" +
        "<text x=\"97.9\" y=\"157.4\" text-anchor=\"middle\">D</text><text x=\"100.9\" y=\"99\" text-anchor=\"middle\">E</text><text class=\"sm\" x=\"74\" y=\"79\" text-anchor=\"start\">110°</text>" +
        "<text class=\"sm\" x=\"114.9\" y=\"58.6\" text-anchor=\"start\">(6x − 2)°</text><text class=\"sm\" x=\"114.9\" y=\"117.4\" text-anchor=\"start\">(4x + 32)°</text></svg></figure>" +
        "<p class=\"geo-given\">The flat antenna on a weather radio is kite <strong>ABCD</strong> with AB = AD and CB = CD. Its diagonals meet at <strong>E</strong>. m∠<strong>BAD</strong> = 110°, m∠<strong>ABC</strong> = <span style=\"white-space:nowrap\">(6x − 2)°</span> and m∠<strong>ADC</strong> = <span style=\"white-space:nowrap\">(4x + 32)°</span>.</p>",
      claims: [
        {
          id: "x",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What value of x fits the antenna?",
          choices: [
            { letter: "A", text: "15" },
            { letter: "B", text: "3.4" },
            { letter: "C", text: "100" },
            { letter: "D", text: "17" }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Why can (6x − 2) be set equal to (4x + 32)?",
          choices: [
            { letter: "A", text: "A kite has one pair of congruent opposite angles, ∠B and ∠D." },
            { letter: "B", text: "Opposite angles of a parallelogram are congruent." },
            { letter: "C", text: "Consecutive angles of a kite are congruent." },
            { letter: "D", text: "The diagonals of a kite are congruent." }
          ],
          correct: "A"
        },
        {
          id: "bcd",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is the measure of ∠BCD, the angle at C?",
          choices: [
            { letter: "A", text: "150°" },
            { letter: "B", text: "50°" },
            { letter: "C", text: "70°" },
            { letter: "D", text: "80°" }
          ],
          correct: "B"
        },
        {
          id: "bca",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "Diagonal AC bisects ∠BCD. What is m∠BCA?",
          choices: [
            { letter: "A", text: "50°" },
            { letter: "B", text: "55°" },
            { letter: "C", text: "25°" },
            { letter: "D", text: "65°" }
          ],
          correct: "C"
        },
        {
          id: "diags",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement about diagonals AC and BD is true?",
          choices: [
            { letter: "A", text: "AC is the perpendicular bisector of BD." },
            { letter: "B", text: "BD is the perpendicular bisector of AC." },
            { letter: "C", text: "AC and BD bisect each other." },
            { letter: "D", text: "AC and BD are congruent." }
          ],
          correct: "A"
        },
        {
          id: "mia",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Mia says m∠BCD = 110° because opposite angles of a kite are congruent. Which statement explains her error?",
          choices: [
            { letter: "A", text: "Opposite angles of a kite are supplementary." },
            { letter: "B", text: "∠BCD is a right angle, since the diagonals are ⊥." },
            { letter: "C", text: "Only ∠ABC and ∠ADC must be congruent in a kite." },
            { letter: "D", text: "She is right; ∠BCD ≅ ∠BAD." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc1-rocks-star-chart",
      family: "GEO",
      mode: "rocks",
      title: "Four Stars on a Chart",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Slopes and midpoints test a shape on a star chart.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"Coordinate grid from −4 to 5 across and −3 to 4 up with a shaded quadrilateral ABCD whose corners are stars: A(−3, −1), B(2, −2), C(4, 2) and D(−1, 3)\">" +
        "<line class=\"gr\" x1=\"84\" y1=\"133\" x2=\"84\" y2=\"14\"/><line class=\"gr\" x1=\"101\" y1=\"133\" x2=\"101\" y2=\"14\"/><line class=\"gr\" x1=\"118\" y1=\"133\" x2=\"118\" y2=\"14\"/>" +
        "<line class=\"gr\" x1=\"135\" y1=\"133\" x2=\"135\" y2=\"14\"/><line class=\"gr\" x1=\"152\" y1=\"133\" x2=\"152\" y2=\"14\"/><line class=\"gr\" x1=\"169\" y1=\"133\" x2=\"169\" y2=\"14\"/>" +
        "<line class=\"gr\" x1=\"186\" y1=\"133\" x2=\"186\" y2=\"14\"/><line class=\"gr\" x1=\"203\" y1=\"133\" x2=\"203\" y2=\"14\"/><line class=\"gr\" x1=\"220\" y1=\"133\" x2=\"220\" y2=\"14\"/>" +
        "<line class=\"gr\" x1=\"237\" y1=\"133\" x2=\"237\" y2=\"14\"/><line class=\"gr\" x1=\"84\" y1=\"133\" x2=\"237\" y2=\"133\"/><line class=\"gr\" x1=\"84\" y1=\"116\" x2=\"237\" y2=\"116\"/>" +
        "<line class=\"gr\" x1=\"84\" y1=\"99\" x2=\"237\" y2=\"99\"/><line class=\"gr\" x1=\"84\" y1=\"82\" x2=\"237\" y2=\"82\"/><line class=\"gr\" x1=\"84\" y1=\"65\" x2=\"237\" y2=\"65\"/>" +
        "<line class=\"gr\" x1=\"84\" y1=\"48\" x2=\"237\" y2=\"48\"/><line class=\"gr\" x1=\"84\" y1=\"31\" x2=\"237\" y2=\"31\"/><line class=\"gr\" x1=\"84\" y1=\"14\" x2=\"237\" y2=\"14\"/>" +
        "<line class=\"ax\" x1=\"84\" y1=\"82\" x2=\"237\" y2=\"82\"/><line class=\"ax\" x1=\"152\" y1=\"133\" x2=\"152\" y2=\"14\"/><text class=\"sm\" x=\"84\" y=\"146\" text-anchor=\"middle\">−4</text>" +
        "<text class=\"sm\" x=\"118\" y=\"146\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"152\" y=\"146\" text-anchor=\"middle\">0</text>" +
        "<text class=\"sm\" x=\"186\" y=\"146\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"220\" y=\"146\" text-anchor=\"middle\">4</text>" +
        "<text class=\"sm\" x=\"79\" y=\"120\" text-anchor=\"end\">−2</text><text class=\"sm\" x=\"79\" y=\"86\" text-anchor=\"end\">0</text>" +
        "<text class=\"sm\" x=\"79\" y=\"52\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"79\" y=\"18\" text-anchor=\"end\">4</text>" +
        "<text class=\"sm\" x=\"246\" y=\"86\" text-anchor=\"middle\">x</text><text class=\"sm\" x=\"160\" y=\"23\" text-anchor=\"middle\">y</text>" +
        "<circle class=\"dta\" cx=\"211.5\" cy=\"20.8\" r=\"1.6\"/><circle class=\"dta\" cx=\"90.8\" cy=\"41.2\" r=\"1.6\"/><circle class=\"dta\" cx=\"230.2\" cy=\"107.5\" r=\"1.6\"/>" +
        "<circle class=\"dta\" cx=\"111.2\" cy=\"126.2\" r=\"1.6\"/><polygon class=\"sh2\" points=\"101,99 186,116 220,48 135,31\"/><circle class=\"dta\" cx=\"101\" cy=\"99\" r=\"3\"/>" +
        "<circle class=\"dta\" cx=\"186\" cy=\"116\" r=\"3\"/><circle class=\"dta\" cx=\"220\" cy=\"48\" r=\"3\"/><circle class=\"dta\" cx=\"135\" cy=\"31\" r=\"3\"/>" +
        "<text x=\"90\" y=\"104\" text-anchor=\"middle\">A</text><text x=\"190\" y=\"131\" text-anchor=\"middle\">B</text><text x=\"231\" y=\"53\" text-anchor=\"middle\">C</text>" +
        "<text x=\"126\" y=\"26\" text-anchor=\"middle\">D</text></svg></figure>" +
        "<p class=\"geo-given\">On a star chart, four stars mark the corners of quadrilateral <strong>ABCD</strong>: <strong>A</strong>(−3, −1), <strong>B</strong>(2, −2), <strong>C</strong>(4, 2) and <strong>D</strong>(−1, 3).</p>",
      claims: [
        {
          id: "slope",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What is the slope of the line through stars A and B?",
          choices: [
            { letter: "A", text: "m = −5" },
            { letter: "B", text: "m = −1/5" },
            { letter: "C", text: "m = 1/5" },
            { letter: "D", text: "m = 5" }
          ],
          correct: "B"
        },
        {
          id: "para",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Which facts prove that ABCD is a parallelogram?",
          choices: [
            { letter: "A", text: "slope AB = −1/5 and slope BC = 2, so AB ⊥ BC" },
            { letter: "B", text: "AB = DC = √26 and nothing more" },
            { letter: "C", text: "AB ∥ DC and BC ∥ AD (slopes −1/5 and 2)" },
            { letter: "D", text: "AC = BD = √58, so the diagonals are congruent" }
          ],
          correct: "C"
        },
        {
          id: "mid",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What is the midpoint of diagonal AC?",
          choices: [
            { letter: "A", text: "(3.5, 1.5)" },
            { letter: "B", text: "(1, 1)" },
            { letter: "C", text: "(−0.5, −1.5)" },
            { letter: "D", text: "(0.5, 0.5)" }
          ],
          correct: "D"
        },
        {
          id: "ab",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "How far apart are stars A and B, in grid units?",
          choices: [
            { letter: "A", text: "√26 units" },
            { letter: "B", text: "6 units" },
            { letter: "C", text: "26 units" },
            { letter: "D", text: "2√6 units" }
          ],
          correct: "A"
        },
        {
          id: "rect",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Is ABCD a rectangle?",
          choices: [
            { letter: "A", text: "Yes, since its diagonals bisect each other." },
            { letter: "B", text: "No, since slope AB · slope BC = −2/5, not −1." },
            { letter: "C", text: "Yes, since both pairs of opposite sides are ∥." },
            { letter: "D", text: "No, since AB ≠ BC." }
          ],
          correct: "B"
        },
        {
          id: "angles",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "ABCD is a parallelogram. Which statement must be true?",
          choices: [
            { letter: "A", text: "∠DAB ≅ ∠ABC" },
            { letter: "B", text: "AC ⊥ BD" },
            { letter: "C", text: "AC ≅ BD" },
            { letter: "D", text: "∠DAB ≅ ∠BCD" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc1-rocks-dome-shutter",
      family: "GEO",
      mode: "rocks",
      title: "The Observatory Shutter",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "An isosceles trapezoid slides open on a telescope dome.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 124\" role=\"img\" aria-label=\"Isosceles trapezoid ABCD with long base AB of 30 ft at the bottom and short base DC of 18 ft at the top; legs AD and BC have tick marks; a dashed height of 7 ft drops from D to AB; gold segment MN joins the midpoints of the legs\">" +
        "<polygon class=\"sh2\" points=\"40,98 280,98 232,42 88,42\"/><line class=\"ac\" x1=\"64\" y1=\"70\" x2=\"256\" y2=\"70\"/><line class=\"thin dash\" x1=\"88\" y1=\"42\" x2=\"88\" y2=\"98\"/>" +
        "<path class=\"thin\" d=\"M88 91 L95 91 L95 98\"/><line class=\"thin\" x1=\"55.8\" y1=\"87.3\" x2=\"48.2\" y2=\"80.7\"/><line class=\"thin\" x1=\"271.8\" y1=\"80.7\" x2=\"264.2\" y2=\"87.3\"/>" +
        "<circle class=\"dt\" cx=\"40\" cy=\"98\" r=\"3\"/><circle class=\"dt\" cx=\"280\" cy=\"98\" r=\"3\"/><circle class=\"dt\" cx=\"232\" cy=\"42\" r=\"3\"/><circle class=\"dt\" cx=\"88\" cy=\"42\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"64\" cy=\"70\" r=\"3\"/><circle class=\"dt\" cx=\"256\" cy=\"70\" r=\"3\"/><text x=\"31\" y=\"112\" text-anchor=\"middle\">A</text>" +
        "<text x=\"289\" y=\"112\" text-anchor=\"middle\">B</text><text x=\"240\" y=\"36\" text-anchor=\"middle\">C</text><text x=\"80\" y=\"36\" text-anchor=\"middle\">D</text>" +
        "<text x=\"52\" y=\"74\" text-anchor=\"middle\">M</text><text x=\"268\" y=\"74\" text-anchor=\"middle\">N</text><text x=\"160\" y=\"116\" text-anchor=\"middle\">30 ft</text>" +
        "<text x=\"160\" y=\"35\" text-anchor=\"middle\">18 ft</text><text class=\"sm\" x=\"100\" y=\"91\" text-anchor=\"start\">7 ft</text></svg></figure>" +
        "<p class=\"geo-given\">A shutter on a telescope dome is isosceles trapezoid <strong>ABCD</strong> with AB ∥ DC, AB = 30 ft, DC = 18 ft and legs AD = BC. The shutter is 7 ft tall. A brace <strong>MN</strong> joins the midpoints of the legs.</p>",
      claims: [
        {
          id: "mn",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the brace MN?",
          choices: [
            { letter: "A", text: "24 ft" },
            { letter: "B", text: "48 ft" },
            { letter: "C", text: "12 ft" },
            { letter: "D", text: "6 ft" }
          ],
          correct: "A"
        },
        {
          id: "ac",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is diagonal AC of the shutter?",
          choices: [
            { letter: "A", text: "about 30.8 ft" },
            { letter: "B", text: "about 19.3 ft" },
            { letter: "C", text: "25 ft" },
            { letter: "D", text: "31 ft" }
          ],
          correct: "C"
        },
        {
          id: "true",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement about the shutter must be true?",
          choices: [
            { letter: "A", text: "AC ⊥ BD" },
            { letter: "B", text: "AC ≅ BD" },
            { letter: "C", text: "AC and BD bisect each other" },
            { letter: "D", text: "AD ∥ BC" }
          ],
          correct: "B"
        },
        {
          id: "pqrs",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "Another isosceles trapezoid PQRS has bases PQ and SR. m∠SPQ = (5y + 3)° and m∠PSR = (7y − 3)°. What is m∠PQR?",
          choices: [
            { letter: "A", text: "102°" },
            { letter: "B", text: "15°" },
            { letter: "C", text: "18°" },
            { letter: "D", text: "78°" }
          ],
          correct: "D"
        },
        {
          id: "nottrue",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is NOT true for shutter ABCD?",
          choices: [
            { letter: "A", text: "Its legs AD and BC are congruent." },
            { letter: "B", text: "∠DAB ≅ ∠ABC" },
            { letter: "C", text: "Its diagonals bisect each other." },
            { letter: "D", text: "AB ∥ DC" }
          ],
          correct: "C"
        },
        {
          id: "x",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "A smaller shutter is also an isosceles trapezoid. Its bases are (2x + 5) ft and (4x − 3) ft, and the segment joining the midpoints of its legs is 16 ft. What is x?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "7/3" },
            { letter: "C", text: "5.5" },
            { letter: "D", text: "4.75" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc1-rocks-rover-plot",
      family: "GEO",
      mode: "rocks",
      title: "The Rover's Survey Plot",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A Mars rover marks out a plot on a coordinate map.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"Coordinate grid from −5 to 2 across and −2 to 4 up with shaded quadrilateral ABCD: A(−3, −1), B(1, 1), C(0, 3), D(−4, 1); dashed diagonals AC and BD; a right angle is marked at A; a note says 1 grid unit = 10 m\">" +
        "<line class=\"gr\" x1=\"160\" y1=\"132\" x2=\"160\" y2=\"12\"/><line class=\"gr\" x1=\"180\" y1=\"132\" x2=\"180\" y2=\"12\"/><line class=\"gr\" x1=\"200\" y1=\"132\" x2=\"200\" y2=\"12\"/>" +
        "<line class=\"gr\" x1=\"220\" y1=\"132\" x2=\"220\" y2=\"12\"/><line class=\"gr\" x1=\"240\" y1=\"132\" x2=\"240\" y2=\"12\"/><line class=\"gr\" x1=\"260\" y1=\"132\" x2=\"260\" y2=\"12\"/>" +
        "<line class=\"gr\" x1=\"280\" y1=\"132\" x2=\"280\" y2=\"12\"/><line class=\"gr\" x1=\"300\" y1=\"132\" x2=\"300\" y2=\"12\"/><line class=\"gr\" x1=\"160\" y1=\"132\" x2=\"300\" y2=\"132\"/>" +
        "<line class=\"gr\" x1=\"160\" y1=\"112\" x2=\"300\" y2=\"112\"/><line class=\"gr\" x1=\"160\" y1=\"92\" x2=\"300\" y2=\"92\"/><line class=\"gr\" x1=\"160\" y1=\"72\" x2=\"300\" y2=\"72\"/>" +
        "<line class=\"gr\" x1=\"160\" y1=\"52\" x2=\"300\" y2=\"52\"/><line class=\"gr\" x1=\"160\" y1=\"32\" x2=\"300\" y2=\"32\"/><line class=\"gr\" x1=\"160\" y1=\"12\" x2=\"300\" y2=\"12\"/>" +
        "<line class=\"ax\" x1=\"160\" y1=\"92\" x2=\"300\" y2=\"92\"/><line class=\"ax\" x1=\"260\" y1=\"132\" x2=\"260\" y2=\"12\"/><text class=\"sm\" x=\"180\" y=\"145\" text-anchor=\"middle\">−4</text>" +
        "<text class=\"sm\" x=\"220\" y=\"145\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"260\" y=\"145\" text-anchor=\"middle\">0</text>" +
        "<text class=\"sm\" x=\"300\" y=\"145\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"155\" y=\"136\" text-anchor=\"end\">−2</text>" +
        "<text class=\"sm\" x=\"155\" y=\"96\" text-anchor=\"end\">0</text><text class=\"sm\" x=\"155\" y=\"56\" text-anchor=\"end\">2</text>" +
        "<text class=\"sm\" x=\"155\" y=\"16\" text-anchor=\"end\">4</text><polygon class=\"sh\" points=\"200,112 280,72 260,32 180,72\"/>" +
        "<line class=\"thin dash\" x1=\"200\" y1=\"112\" x2=\"260\" y2=\"32\"/><line class=\"thin dash\" x1=\"280\" y1=\"72\" x2=\"180\" y2=\"72\"/>" +
        "<path class=\"thin\" d=\"M207.2 108.4 L203.6 101.3 L196.4 104.8\"/><circle class=\"dt\" cx=\"200\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"280\" cy=\"72\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"260\" cy=\"32\" r=\"3\"/><circle class=\"dt\" cx=\"180\" cy=\"72\" r=\"3\"/><text x=\"200\" y=\"129\" text-anchor=\"middle\">A</text>" +
        "<text x=\"291\" y=\"77\" text-anchor=\"middle\">B</text><text x=\"263\" y=\"25\" text-anchor=\"middle\">C</text><text x=\"169\" y=\"77\" text-anchor=\"middle\">D</text>" +
        "<text class=\"sm\" x=\"14\" y=\"70\" text-anchor=\"start\">1 grid unit = 10 m</text><text class=\"sm\" x=\"14\" y=\"88\" text-anchor=\"start\">rover survey plot</text></svg></figure>" +
        "<p class=\"geo-given\">A Mars rover marks a survey plot <strong>ABCD</strong> on a map with corners <strong>A</strong>(−3, −1), <strong>B</strong>(1, 1), <strong>C</strong>(0, 3) and <strong>D</strong>(−4, 1). Each grid unit stands for 10 m.</p>",
      claims: [
        {
          id: "right",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Which calculation proves that ∠DAB is a right angle?",
          choices: [
            { letter: "A", text: "slope AB · slope AD = (1/2)(2) = 1" },
            { letter: "B", text: "slope AB = slope DC = 1/2" },
            { letter: "C", text: "slope AB · slope AD = (1/2)(−2) = −1" },
            { letter: "D", text: "AB = AD = 2√5" }
          ],
          correct: "C"
        },
        {
          id: "ac",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "How long is diagonal AC, in grid units?",
          choices: [
            { letter: "A", text: "5 units" },
            { letter: "B", text: "7 units" },
            { letter: "C", text: "25 units" },
            { letter: "D", text: "√7 units" }
          ],
          correct: "A"
        },
        {
          id: "classify",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "AB = 2√5 and BC = √5. Which statement classifies ABCD correctly?",
          choices: [
            { letter: "A", text: "a square, since AC = BD" },
            { letter: "B", text: "a rhombus, since AC ⊥ BD" },
            { letter: "C", text: "a parallelogram, but not a rectangle" },
            { letter: "D", text: "a rectangle, but not a square" }
          ],
          correct: "D"
        },
        {
          id: "area",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is the area of the survey plot in square meters?",
          choices: [
            { letter: "A", text: "100 m²" },
            { letter: "B", text: "1,000 m²" },
            { letter: "C", text: "1,250 m²" },
            { letter: "D", text: "10 m²" }
          ],
          correct: "B"
        },
        {
          id: "center",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "The rover parks where the diagonals cross. What are the coordinates of that point?",
          choices: [
            { letter: "A", text: "(−1, 0)" },
            { letter: "B", text: "(−3, 2)" },
            { letter: "C", text: "(1.5, 2)" },
            { letter: "D", text: "(−1.5, 1)" }
          ],
          correct: "D"
        },
        {
          id: "kai",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Kai says ABCD is a square because its diagonals are congruent. Which reply is correct?",
          choices: [
            { letter: "A", text: "Congruent diagonals make a rectangle; AB ≠ BC, so not a square." },
            { letter: "B", text: "He is right; congruent diagonals always make a square." },
            { letter: "C", text: "It is a rhombus, since its diagonals bisect each other." },
            { letter: "D", text: "It cannot be a rectangle, since no side is horizontal." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc1-rocks-lab-jack",
      family: "GEO",
      mode: "rocks",
      title: "The Lab Jack",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A scissor jack lifts a beaker; its arms form a rhombus.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"A lab jack: a top plate and a base plate joined by posts to rhombus ABCD, with B at the top and D at the bottom; tick marks show all four 10 cm arms are equal; the gold vertical diagonal BD is 12 cm and meets the dashed diagonal AC at right angles at E\">" +
        "<rect class=\"sh2\" x=\"86\" y=\"8\" width=\"148\" height=\"8\"/><rect class=\"sh2\" x=\"86\" y=\"148\" width=\"148\" height=\"8\"/><line class=\"ln\" x1=\"160\" y1=\"16\" x2=\"160\" y2=\"31\"/>" +
        "<line class=\"ln\" x1=\"160\" y1=\"133\" x2=\"160\" y2=\"148\"/><polygon class=\"ln\" points=\"92,82 160,31 228,82 160,133\"/><line class=\"thin dash\" x1=\"92\" y1=\"82\" x2=\"228\" y2=\"82\"/>" +
        "<line class=\"ac\" x1=\"160\" y1=\"31\" x2=\"160\" y2=\"133\"/><path class=\"thin\" d=\"M167 82 L167 75 L160 75\"/><line class=\"thin\" x1=\"129\" y1=\"60.5\" x2=\"123\" y2=\"52.5\"/>" +
        "<line class=\"thin\" x1=\"191\" y1=\"60.5\" x2=\"197\" y2=\"52.5\"/><line class=\"thin\" x1=\"191\" y1=\"103.5\" x2=\"197\" y2=\"111.5\"/>" +
        "<line class=\"thin\" x1=\"129\" y1=\"103.5\" x2=\"123\" y2=\"111.5\"/><circle class=\"dt\" cx=\"92\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"31\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"228\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"133\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"82\" r=\"3\"/>" +
        "<text x=\"81\" y=\"87\" text-anchor=\"middle\">A</text><text x=\"168\" y=\"30\" text-anchor=\"start\">B</text><text x=\"239\" y=\"87\" text-anchor=\"middle\">C</text>" +
        "<text x=\"168\" y=\"146\" text-anchor=\"start\">D</text><text x=\"151\" y=\"98\" text-anchor=\"middle\">E</text><text class=\"sm\" x=\"118\" y=\"50.5\" text-anchor=\"end\">10 cm</text>" +
        "<text class=\"sm\" x=\"170\" y=\"76\" text-anchor=\"start\">12 cm</text><text class=\"sm\" x=\"242\" y=\"16\" text-anchor=\"start\">top plate</text>" +
        "<text class=\"sm\" x=\"242\" y=\"156\" text-anchor=\"start\">base</text></svg></figure>" +
        "<p class=\"geo-given\">A lab jack raises a beaker. Its four arms form rhombus <strong>ABCD</strong> with sides of 10 cm, and the diagonals meet at <strong>E</strong>. The jack can open or close. In the position shown, the height <strong>BD</strong> is 12 cm.</p>",
      claims: [
        {
          id: "width",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "In the position shown, how wide is the jack (the length of AC)?",
          choices: [
            { letter: "A", text: "8 cm" },
            { letter: "B", text: "16 cm" },
            { letter: "C", text: "about 23.3 cm" },
            { letter: "D", text: "12 cm" }
          ],
          correct: "B"
        },
        {
          id: "always",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is true in every position of the jack?",
          choices: [
            { letter: "A", text: "AC and BD are congruent to each other." },
            { letter: "B", text: "∠DAB and ∠ABC are both right angles." },
            { letter: "C", text: "AC and BD bisect each other at right angles." },
            { letter: "D", text: "AC bisects BD, but BD does not bisect AC." }
          ],
          correct: "C"
        },
        {
          id: "onefact",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which single fact, true in only some positions, would make ABCD a square?",
          choices: [
            { letter: "A", text: "m∠DAB = 90°" },
            { letter: "B", text: "AB = BC" },
            { letter: "C", text: "AC ⊥ BD" },
            { letter: "D", text: "AC bisects ∠DAB" }
          ],
          correct: "A"
        },
        {
          id: "square",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "The jack is raised until ABCD is a square. How tall is it then (the length of BD)?",
          choices: [
            { letter: "A", text: "20 cm" },
            { letter: "B", text: "10 cm" },
            { letter: "C", text: "5√2 cm" },
            { letter: "D", text: "10√2 cm" }
          ],
          correct: "D"
        },
        {
          id: "angle",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "In another position, m∠DAB = (3x + 12)° and m∠ABC = (5x + 8)°. What is m∠DAB?",
          choices: [
            { letter: "A", text: "108°" },
            { letter: "B", text: "72°" },
            { letter: "C", text: "20°" },
            { letter: "D", text: "18°" }
          ],
          correct: "B"
        },
        {
          id: "lowered",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "The jack is lowered until BD is 6 cm. To the nearest tenth of a centimeter, how wide is it then (the length of AC)?",
          choices: [
            { letter: "A", text: "9.5 cm" },
            { letter: "B", text: "20.9 cm" },
            { letter: "C", text: "19.1 cm" },
            { letter: "D", text: "22.0 cm" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc1-sky-beach-kite",
      family: "GEO",
      mode: "sky",
      title: "The Kite at the Beach",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Two crossed spars hold a kite with a 17-inch and a 39-inch pair of edges.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"A tilted kite ABCD with a wavy tail at C; AB and AD have one tick mark and AD is labeled 17 in; CB and CD have two tick marks and CD is labeled 39 in; spars AC and BD cross at right angles at E\">" +
        "<polygon class=\"sh\" points=\"215.6,60.7 172.6,22.1 75,111.9 207.4,117.9\"/><line class=\"thin\" x1=\"215.6\" y1=\"60.7\" x2=\"75\" y2=\"111.9\"/>" +
        "<line class=\"thin\" x1=\"172.6\" y1=\"22.1\" x2=\"207.4\" y2=\"117.9\"/><path class=\"thin\" d=\"M192.4 76.6 L185.8 79 L183.4 72.4\"/>" +
        "<path class=\"thin\" d=\"M75 111.9 Q66.9 107.3 63.7 116 Q60.5 124.6 52.4 120.1 Q44.4 115.5 41.2 124.2 Q37.9 132.8 29.9 128.3\"/>" +
        "<line class=\"thin\" x1=\"197.4\" y1=\"37.7\" x2=\"190.7\" y2=\"45.1\"/><line class=\"thin\" x1=\"206.6\" y1=\"88.6\" x2=\"216.5\" y2=\"90\"/>" +
        "<line class=\"thin\" x1=\"121.9\" y1=\"61.9\" x2=\"128.6\" y2=\"69.3\"/><line class=\"thin\" x1=\"118.9\" y1=\"64.6\" x2=\"125.7\" y2=\"72\"/>" +
        "<line class=\"thin\" x1=\"143.4\" y1=\"110\" x2=\"143\" y2=\"120\"/><line class=\"thin\" x1=\"139.4\" y1=\"109.8\" x2=\"139\" y2=\"119.8\"/><circle class=\"dt\" cx=\"215.6\" cy=\"60.7\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"172.6\" cy=\"22.1\" r=\"3\"/><circle class=\"dt\" cx=\"75\" cy=\"111.9\" r=\"3\"/><circle class=\"dt\" cx=\"207.4\" cy=\"117.9\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"190\" cy=\"70\" r=\"3\"/><text x=\"226.8\" y=\"61.6\" text-anchor=\"middle\">A</text><text x=\"168.5\" y=\"15.8\" text-anchor=\"middle\">B</text>" +
        "<text x=\"79.4\" y=\"129.1\" text-anchor=\"middle\">C</text><text x=\"211.5\" y=\"134.2\" text-anchor=\"middle\">D</text><text x=\"177.3\" y=\"69.1\" text-anchor=\"middle\">E</text>" +
        "<text class=\"sm\" x=\"231.3\" y=\"97.1\" text-anchor=\"middle\">17 in</text><text class=\"sm\" x=\"140.2\" y=\"141.9\" text-anchor=\"middle\">39 in</text></svg></figure>" +
        "<p class=\"geo-given\">A kite <strong>ABCD</strong> flies above the beach. AB = AD = 17 in and CB = CD = 39 in. Its spars <strong>AC</strong> and <strong>BD</strong> cross at right angles at <strong>E</strong>, and BD = 30 in.</p>",
      claims: [
        {
          id: "be",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is segment BE of the spar?",
          choices: [
            { letter: "A", text: "15 in" },
            { letter: "B", text: "30 in" },
            { letter: "C", text: "7.5 in" },
            { letter: "D", text: "8.5 in" }
          ],
          correct: "A"
        },
        {
          id: "ae",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is segment AE of spar AC?",
          choices: [
            { letter: "A", text: "32 in" },
            { letter: "B", text: "about 22.7 in" },
            { letter: "C", text: "2 in" },
            { letter: "D", text: "8 in" }
          ],
          correct: "D"
        },
        {
          id: "ac",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "EC is 36 in. How long is spar AC?",
          choices: [
            { letter: "A", text: "36 in" },
            { letter: "B", text: "28 in" },
            { letter: "C", text: "44 in" },
            { letter: "D", text: "56 in" }
          ],
          correct: "C"
        },
        {
          id: "angle",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which angle must be congruent to ∠CBE?",
          choices: [
            { letter: "A", text: "∠ABE" },
            { letter: "B", text: "∠CDE" },
            { letter: "C", text: "∠BCE" },
            { letter: "D", text: "∠BAE" }
          ],
          correct: "B"
        },
        {
          id: "nottrue",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is NOT true for kite ABCD?",
          choices: [
            { letter: "A", text: "Its spars are perpendicular." },
            { letter: "B", text: "AC bisects ∠BAD." },
            { letter: "C", text: "BE = DE" },
            { letter: "D", text: "Its spars bisect each other." }
          ],
          correct: "D"
        },
        {
          id: "rhombus",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which change to the kite would make it a rhombus?",
          choices: [
            { letter: "A", text: "Make CB and CD 17 in, like AB and AD." },
            { letter: "B", text: "Make spar BD as long as spar AC." },
            { letter: "C", text: "Make the spars meet at right angles." },
            { letter: "D", text: "Make ∠ABC ≅ ∠ADC." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc1-sky-barge-hull",
      family: "GEO",
      mode: "sky",
      title: "The Canal Barge",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "The cross-section of a flat-bottomed boat is an isosceles trapezoid.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 132\" role=\"img\" aria-label=\"Cross-section of a barge: isosceles trapezoid ABCD with the 12 ft deck DC on top and the 8 ft bottom AB below; the sides AD and BC have tick marks; the angle at D is 63 degrees and an arc marks the congruent angle at C; the gold waterline MN joins the midpoints of the sides, with water shaded below it\">" +
        "<polygon class=\"sh2\" points=\"80,71.4 240,71.4 224,102.8 96,102.8\"/><line class=\"thin dash\" x1=\"16\" y1=\"71.4\" x2=\"80\" y2=\"71.4\"/>" +
        "<line class=\"thin dash\" x1=\"240\" y1=\"71.4\" x2=\"304\" y2=\"71.4\"/><polygon class=\"ln\" points=\"96,102.8 224,102.8 256,40 64,40\"/>" +
        "<line class=\"ac\" x1=\"80\" y1=\"71.4\" x2=\"240\" y2=\"71.4\"/><path class=\"thin\" d=\"M79 40 A15 15 0 0 1 70.8 53.4\"/><path class=\"thin\" d=\"M241 40 A15 15 0 0 0 249.2 53.4\"/>" +
        "<line class=\"thin\" x1=\"84.5\" y1=\"91.3\" x2=\"93.4\" y2=\"86.7\"/><line class=\"thin\" x1=\"226.6\" y1=\"86.7\" x2=\"235.5\" y2=\"91.3\"/><circle class=\"dt\" cx=\"96\" cy=\"102.8\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"224\" cy=\"102.8\" r=\"3\"/><circle class=\"dt\" cx=\"256\" cy=\"40\" r=\"3\"/><circle class=\"dt\" cx=\"64\" cy=\"40\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"80\" cy=\"71.4\" r=\"3\"/><circle class=\"dt\" cx=\"240\" cy=\"71.4\" r=\"3\"/><text x=\"54\" y=\"37\" text-anchor=\"middle\">D</text>" +
        "<text x=\"266\" y=\"37\" text-anchor=\"middle\">C</text><text x=\"88\" y=\"117.8\" text-anchor=\"middle\">A</text><text x=\"232\" y=\"117.8\" text-anchor=\"middle\">B</text>" +
        "<text x=\"67\" y=\"87.4\" text-anchor=\"middle\">M</text><text x=\"253\" y=\"87.4\" text-anchor=\"middle\">N</text><text x=\"160\" y=\"33\" text-anchor=\"middle\">12 ft</text>" +
        "<text x=\"160\" y=\"122\" text-anchor=\"middle\">8 ft</text><text class=\"sm\" x=\"94\" y=\"56\" text-anchor=\"middle\">63°</text>" +
        "<text class=\"sm\" x=\"304\" y=\"66.4\" text-anchor=\"end\">waterline</text></svg></figure>" +
        "<p class=\"geo-given\">The cross-section of a flat-bottomed canal barge is isosceles trapezoid <strong>ABCD</strong>. The deck DC is 12 ft, the bottom AB is 8 ft, DC ∥ AB and m∠<strong>ADC</strong> = 63°. The waterline <strong>MN</strong> joins the midpoints of the sides AD and BC.</p>",
      claims: [
        {
          id: "mn",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the waterline MN?",
          choices: [
            { letter: "A", text: "20 ft" },
            { letter: "B", text: "4 ft" },
            { letter: "C", text: "10 ft" },
            { letter: "D", text: "2 ft" }
          ],
          correct: "C"
        },
        {
          id: "abc",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "What is m∠ABC, at the bottom corner B?",
          choices: [
            { letter: "A", text: "63°" },
            { letter: "B", text: "117°" },
            { letter: "C", text: "27°" },
            { letter: "D", text: "126°" }
          ],
          correct: "B"
        },
        {
          id: "sides",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which two sides of the hull must be congruent?",
          choices: [
            { letter: "A", text: "AB and DC" },
            { letter: "B", text: "AD and DC" },
            { letter: "C", text: "AB and BC" },
            { letter: "D", text: "AD and BC" }
          ],
          correct: "D"
        },
        {
          id: "diags",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement about the diagonals AC and BD of the hull is true?",
          choices: [
            { letter: "A", text: "They are congruent but do not bisect each other." },
            { letter: "B", text: "They bisect each other but are not congruent." },
            { letter: "C", text: "They are perpendicular to each other." },
            { letter: "D", text: "They are congruent and bisect each other." }
          ],
          correct: "A"
        },
        {
          id: "deck",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "A bigger barge has the same shape. Its deck is (x + 9) ft, its bottom is (x + 1) ft and its waterline (the midsegment) is 13 ft. How wide is its deck?",
          choices: [
            { letter: "A", text: "8 ft" },
            { letter: "B", text: "17 ft" },
            { letter: "C", text: "9 ft" },
            { letter: "D", text: "10.5 ft" }
          ],
          correct: "B"
        },
        {
          id: "deckhand",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "A deckhand says ∠DAB ≅ ∠ADC because the hull is an isosceles trapezoid. Which statement corrects him?",
          choices: [
            { letter: "A", text: "He is right; all four angles are congruent." },
            { letter: "B", text: "Opposite angles match: ∠DAB ≅ ∠BCD." },
            { letter: "C", text: "The base angles match: ∠DAB ≅ ∠ABC and ∠ADC ≅ ∠BCD." },
            { letter: "D", text: "∠DAB and ∠ADC are complementary." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc1-sky-ferry-landing",
      family: "GEO",
      mode: "sky",
      title: "The Ferry Landing Map",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A dock on a harbor map, tested with slope, distance and midpoint.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 132\" role=\"img\" aria-label=\"Coordinate grid from −4 to 6 across and −2 to 4 up with shaded quadrilateral ABCD: A(−3, −1), B(5, −1), C(3, 3), D(−1, 3); a note says 1 unit = 5 m\">" +
        "<line class=\"gr\" x1=\"40\" y1=\"112\" x2=\"40\" y2=\"16\"/><line class=\"gr\" x1=\"56\" y1=\"112\" x2=\"56\" y2=\"16\"/><line class=\"gr\" x1=\"72\" y1=\"112\" x2=\"72\" y2=\"16\"/>" +
        "<line class=\"gr\" x1=\"88\" y1=\"112\" x2=\"88\" y2=\"16\"/><line class=\"gr\" x1=\"104\" y1=\"112\" x2=\"104\" y2=\"16\"/><line class=\"gr\" x1=\"120\" y1=\"112\" x2=\"120\" y2=\"16\"/>" +
        "<line class=\"gr\" x1=\"136\" y1=\"112\" x2=\"136\" y2=\"16\"/><line class=\"gr\" x1=\"152\" y1=\"112\" x2=\"152\" y2=\"16\"/><line class=\"gr\" x1=\"168\" y1=\"112\" x2=\"168\" y2=\"16\"/>" +
        "<line class=\"gr\" x1=\"184\" y1=\"112\" x2=\"184\" y2=\"16\"/><line class=\"gr\" x1=\"200\" y1=\"112\" x2=\"200\" y2=\"16\"/><line class=\"gr\" x1=\"40\" y1=\"112\" x2=\"200\" y2=\"112\"/>" +
        "<line class=\"gr\" x1=\"40\" y1=\"96\" x2=\"200\" y2=\"96\"/><line class=\"gr\" x1=\"40\" y1=\"80\" x2=\"200\" y2=\"80\"/><line class=\"gr\" x1=\"40\" y1=\"64\" x2=\"200\" y2=\"64\"/>" +
        "<line class=\"gr\" x1=\"40\" y1=\"48\" x2=\"200\" y2=\"48\"/><line class=\"gr\" x1=\"40\" y1=\"32\" x2=\"200\" y2=\"32\"/><line class=\"gr\" x1=\"40\" y1=\"16\" x2=\"200\" y2=\"16\"/>" +
        "<line class=\"ax\" x1=\"40\" y1=\"80\" x2=\"200\" y2=\"80\"/><line class=\"ax\" x1=\"104\" y1=\"112\" x2=\"104\" y2=\"16\"/><text class=\"sm\" x=\"40\" y=\"125\" text-anchor=\"middle\">−4</text>" +
        "<text class=\"sm\" x=\"72\" y=\"125\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"104\" y=\"125\" text-anchor=\"middle\">0</text>" +
        "<text class=\"sm\" x=\"136\" y=\"125\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"168\" y=\"125\" text-anchor=\"middle\">4</text>" +
        "<text class=\"sm\" x=\"200\" y=\"125\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"35\" y=\"84\" text-anchor=\"end\">0</text>" +
        "<text class=\"sm\" x=\"35\" y=\"52\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"35\" y=\"20\" text-anchor=\"end\">4</text>" +
        "<text class=\"sm\" x=\"209\" y=\"84\" text-anchor=\"middle\">x</text><text class=\"sm\" x=\"112\" y=\"18\" text-anchor=\"middle\">y</text>" +
        "<polygon class=\"sh2\" points=\"56,96 184,96 152,32 88,32\"/><circle class=\"dt\" cx=\"56\" cy=\"96\" r=\"3\"/><circle class=\"dt\" cx=\"184\" cy=\"96\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"152\" cy=\"32\" r=\"3\"/><circle class=\"dt\" cx=\"88\" cy=\"32\" r=\"3\"/><text x=\"45\" y=\"101\" text-anchor=\"middle\">A</text>" +
        "<text x=\"195\" y=\"101\" text-anchor=\"middle\">B</text><text x=\"162\" y=\"28\" text-anchor=\"middle\">C</text><text x=\"78\" y=\"28\" text-anchor=\"middle\">D</text>" +
        "<text class=\"sm\" x=\"222\" y=\"60\" text-anchor=\"start\">harbor map</text><text class=\"sm\" x=\"222\" y=\"78\" text-anchor=\"start\">1 unit = 5 m</text></svg></figure>" +
        "<p class=\"geo-given\">On a harbor map, the ferry landing dock is quadrilateral <strong>ABCD</strong> with corners <strong>A</strong>(−3, −1), <strong>B</strong>(5, −1), <strong>C</strong>(3, 3) and <strong>D</strong>(−1, 3). Each grid unit is 5 m. A walkway <strong>MN</strong> will join the midpoints of AD and BC.</p>",
      claims: [
        {
          id: "slopes",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Which slopes show that ABCD has exactly one pair of parallel sides?",
          choices: [
            { letter: "A", text: "AB and DC: 0; AD: 1/2; BC: −1/2" },
            { letter: "B", text: "AB and DC: 0; AD and BC: 2" },
            { letter: "C", text: "AB: 0; DC: undefined" },
            { letter: "D", text: "AB and DC: 0; AD: 2; BC: −2" }
          ],
          correct: "D"
        },
        {
          id: "ad",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "How long is side AD?",
          choices: [
            { letter: "A", text: "2√5 units" },
            { letter: "B", text: "6 units" },
            { letter: "C", text: "20 units" },
            { letter: "D", text: "2√3 units" }
          ],
          correct: "A"
        },
        {
          id: "iso",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Which fact shows that trapezoid ABCD is isosceles?",
          choices: [
            { letter: "A", text: "AB ∥ DC" },
            { letter: "B", text: "AD = BC = 2√5" },
            { letter: "C", text: "AD ⊥ BC" },
            { letter: "D", text: "AB = 2 · DC" }
          ],
          correct: "B"
        },
        {
          id: "n",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "N is the midpoint of BC. What are the coordinates of N?",
          choices: [
            { letter: "A", text: "(−1, 2)" },
            { letter: "B", text: "(8, 2)" },
            { letter: "C", text: "(4, 1)" },
            { letter: "D", text: "(−2, 1)" }
          ],
          correct: "C"
        },
        {
          id: "walk",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long will walkway MN be, in meters?",
          choices: [
            { letter: "A", text: "30 m" },
            { letter: "B", text: "6 m" },
            { letter: "C", text: "60 m" },
            { letter: "D", text: "20 m" }
          ],
          correct: "A"
        },
        {
          id: "nottrue",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is NOT true for dock ABCD?",
          choices: [
            { letter: "A", text: "Diagonals AC and BD are congruent." },
            { letter: "B", text: "Base angles ∠DAB and ∠ABC are congruent." },
            { letter: "C", text: "Bases AB and DC are parallel." },
            { letter: "D", text: "Its diagonals bisect each other." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc1-sky-footbridge",
      family: "GEO",
      mode: "sky",
      title: "The Footbridge Panel",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Cross-braces meet at 60° in a rectangular bridge panel.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 146\" role=\"img\" aria-label=\"Side panel of a footbridge: rectangle ABCD on the deck, with right angles marked; BC is 9 ft; gold cross-braces AC and BD meet at E, where the angle BEC is marked 60 degrees\">" +
        "<line class=\"ln\" x1=\"20\" y1=\"122\" x2=\"300\" y2=\"122\"/><line class=\"thin dash\" x1=\"20\" y1=\"41\" x2=\"90\" y2=\"41\"/>" +
        "<line class=\"thin dash\" x1=\"230.3\" y1=\"41\" x2=\"300\" y2=\"41\"/><polygon class=\"ln\" points=\"90,122 230.3,122 230.3,41 90,41\"/>" +
        "<line class=\"ac\" x1=\"90\" y1=\"122\" x2=\"230.3\" y2=\"41\"/><line class=\"ac\" x1=\"230.3\" y1=\"122\" x2=\"90\" y2=\"41\"/><path class=\"thin\" d=\"M172.3 88.5 A14 14 0 0 0 172.3 74.5\"/>" +
        "<path class=\"thin\" d=\"M99 122 L99 113 L90 113\"/><path class=\"thin\" d=\"M230.3 113 L221.3 113 L221.3 122\"/><path class=\"thin\" d=\"M221.3 41 L221.3 50 L230.3 50\"/>" +
        "<path class=\"thin\" d=\"M90 50 L99 50 L99 41\"/><circle class=\"dt\" cx=\"90\" cy=\"122\" r=\"3\"/><circle class=\"dt\" cx=\"230.3\" cy=\"122\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"230.3\" cy=\"41\" r=\"3\"/><circle class=\"dt\" cx=\"90\" cy=\"41\" r=\"3\"/><circle class=\"dt\" cx=\"160.1\" cy=\"81.5\" r=\"3\"/>" +
        "<text x=\"80\" y=\"138\" text-anchor=\"middle\">A</text><text x=\"240.3\" y=\"138\" text-anchor=\"middle\">B</text><text x=\"240.3\" y=\"36\" text-anchor=\"middle\">C</text>" +
        "<text x=\"80\" y=\"36\" text-anchor=\"middle\">D</text><text x=\"160.1\" y=\"71.5\" text-anchor=\"middle\">E</text><text class=\"sm\" x=\"181.1\" y=\"86.5\" text-anchor=\"start\">60°</text>" +
        "<text x=\"237.3\" y=\"86.5\" text-anchor=\"start\">9 ft</text><text class=\"sm\" x=\"26\" y=\"138\" text-anchor=\"start\">deck</text></svg></figure>" +
        "<p class=\"geo-given\">A side panel of a footbridge is rectangle <strong>ABCD</strong>. Its cross-braces <strong>AC</strong> and <strong>BD</strong> meet at <strong>E</strong>. BC = 9 ft and m∠<strong>BEC</strong> = 60°.</p>",
      claims: [
        {
          id: "ebc",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "What is m∠EBC?",
          choices: [
            { letter: "A", text: "30°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "120°" },
            { letter: "D", text: "90°" }
          ],
          correct: "B"
        },
        {
          id: "bd",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is brace BD?",
          choices: [
            { letter: "A", text: "9 ft" },
            { letter: "B", text: "9√2 ft" },
            { letter: "C", text: "9√3 ft" },
            { letter: "D", text: "18 ft" }
          ],
          correct: "D"
        },
        {
          id: "eab",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is m∠EAB?",
          choices: [
            { letter: "A", text: "30°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "120°" },
            { letter: "D", text: "45°" }
          ],
          correct: "A"
        },
        {
          id: "ab",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the bottom side AB of the panel?",
          choices: [
            { letter: "A", text: "18 ft" },
            { letter: "B", text: "9√5 ft" },
            { letter: "C", text: "9√3 ft" },
            { letter: "D", text: "9 ft" }
          ],
          correct: "C"
        },
        {
          id: "pr",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "Another rectangular panel PQRS has diagonals PR = (4y + 2) ft and QS = (6y − 10) ft. How long is PR?",
          choices: [
            { letter: "A", text: "6 ft" },
            { letter: "B", text: "26 ft" },
            { letter: "C", text: "13 ft" },
            { letter: "D", text: "52 ft" }
          ],
          correct: "B"
        },
        {
          id: "nottrue",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is NOT true for panel ABCD?",
          choices: [
            { letter: "A", text: "AC ⊥ BD" },
            { letter: "B", text: "AE = BE" },
            { letter: "C", text: "AC ≅ BD" },
            { letter: "D", text: "∠ABC is a right angle" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc1-sky-angled-parking",
      family: "GEO",
      mode: "sky",
      title: "The Angled Parking Space",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A slanted space between two painted stripes is a parallelogram.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"Angled parking: parallelogram ABCD with AB on the curb, labeled (2y + 1) ft, the far side DC labeled (y + 5) ft, and the slanted stripe AD labeled 18 ft; arrow marks show AD parallel to BC; dashed diagonals meet at E; neighboring stripes run parallel on each side\">" +
        "<line class=\"ln\" x1=\"20\" y1=\"128\" x2=\"300\" y2=\"128\"/><line class=\"thin\" x1=\"40.2\" y1=\"128\" x2=\"69.1\" y2=\"20.2\"/>" +
        "<line class=\"thin\" x1=\"211.6\" y1=\"128\" x2=\"240.5\" y2=\"20.2\"/><polygon class=\"sh\" points=\"96,128 155.8,128 184.7,20.2 124.9,20.2\"/>" +
        "<line class=\"thin dash\" x1=\"96\" y1=\"128\" x2=\"184.7\" y2=\"20.2\"/><line class=\"thin dash\" x1=\"155.8\" y1=\"128\" x2=\"124.9\" y2=\"20.2\"/>" +
        "" +
        "<path class=\"thin\" d=\"M107.8 99.6 L105.4 92.8 L100 97.5\"/><path class=\"thin\" d=\"M167.6 99.6 L165.2 92.8 L159.8 97.5\"/><circle class=\"dt\" cx=\"96\" cy=\"128\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"155.8\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"184.7\" cy=\"20.2\" r=\"3\"/><circle class=\"dt\" cx=\"124.9\" cy=\"20.2\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"140.3\" cy=\"74.1\" r=\"3\"/><text x=\"84\" y=\"123\" text-anchor=\"middle\">A</text><text x=\"167.8\" y=\"123\" text-anchor=\"middle\">B</text>" +
        "<text x=\"194.7\" y=\"18.2\" text-anchor=\"middle\">C</text><text x=\"114.9\" y=\"18.2\" text-anchor=\"middle\">D</text><text x=\"152.3\" y=\"78.1\" text-anchor=\"middle\">E</text>" +
        "<text x=\"102.4\" y=\"78.1\" text-anchor=\"end\">18 ft</text><text class=\"sm\" x=\"125.9\" y=\"145\" text-anchor=\"middle\">(2y + 1) ft</text>" +
        "<text class=\"sm\" x=\"154.8\" y=\"13.2\" text-anchor=\"middle\">(y + 5) ft</text><text class=\"sm\" x=\"262\" y=\"144\" text-anchor=\"start\">curb</text></svg></figure>" +
        "<p class=\"geo-given\">An angled parking space is parallelogram <strong>ABCD</strong>, with <strong>AB</strong> along the curb. AB = <span style=\"white-space:nowrap\">(2y + 1) ft</span>, DC = <span style=\"white-space:nowrap\">(y + 5) ft</span> and the stripe <strong>AD</strong> = 18 ft. m∠<strong>DAB</strong> = <span style=\"white-space:nowrap\">(3x + 15)°</span> and m∠<strong>ABC</strong> = <span style=\"white-space:nowrap\">(5x + 5)°</span>. The diagonals meet at <strong>E</strong>.</p>",
      claims: [
        {
          id: "bcd",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is m∠BCD in the parking space?",
          choices: [
            { letter: "A", text: "105°" },
            { letter: "B", text: "20°" },
            { letter: "C", text: "75°" },
            { letter: "D", text: "30°" }
          ],
          correct: "C"
        },
        {
          id: "ab",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the curb side AB?",
          choices: [
            { letter: "A", text: "9 ft" },
            { letter: "B", text: "4 ft" },
            { letter: "C", text: "13 ft" },
            { letter: "D", text: "18 ft" }
          ],
          correct: "A"
        },
        {
          id: "be",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which segment must be congruent to BE?",
          choices: [
            { letter: "A", text: "AE" },
            { letter: "B", text: "BD" },
            { letter: "C", text: "AB" },
            { letter: "D", text: "DE" }
          ],
          correct: "D"
        },
        {
          id: "stripes",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Why are the stripes AD and BC the same length?",
          choices: [
            { letter: "A", text: "The diagonals of a parallelogram are congruent." },
            { letter: "B", text: "Opposite sides of a parallelogram are congruent." },
            { letter: "C", text: "Consecutive sides of a parallelogram are congruent." },
            { letter: "D", text: "AD and BC are perpendicular to the curb." }
          ],
          correct: "B"
        },
        {
          id: "rhombus",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Space WXYZ is also a parallelogram. Which single fact is enough to prove WXYZ is a rhombus?",
          choices: [
            { letter: "A", text: "WY = XZ" },
            { letter: "B", text: "∠W is a right angle" },
            { letter: "C", text: "WX = XY" },
            { letter: "D", text: "WX = YZ" }
          ],
          correct: "C"
        },
        {
          id: "perim",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the painted border of the space, all the way around?",
          choices: [
            { letter: "A", text: "27 ft" },
            { letter: "B", text: "44 ft" },
            { letter: "C", text: "36 ft" },
            { letter: "D", text: "54 ft" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc1-sky-drone-route",
      family: "GEO",
      mode: "sky",
      title: "The Drone Delivery Route",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Four drop points on a city grid make a rhombus.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Coordinate grid from −4 to 4 across and −3 to 5 up with shaded quadrilateral ABCD: A(−3, −2), B(1, 0), C(3, 4), D(−1, 2), and its dashed diagonals AC and BD; a note says 1 unit = 100 m\">" +
        "<line class=\"gr\" x1=\"146\" y1=\"140\" x2=\"146\" y2=\"12\"/><line class=\"gr\" x1=\"162\" y1=\"140\" x2=\"162\" y2=\"12\"/><line class=\"gr\" x1=\"178\" y1=\"140\" x2=\"178\" y2=\"12\"/>" +
        "<line class=\"gr\" x1=\"194\" y1=\"140\" x2=\"194\" y2=\"12\"/><line class=\"gr\" x1=\"210\" y1=\"140\" x2=\"210\" y2=\"12\"/><line class=\"gr\" x1=\"226\" y1=\"140\" x2=\"226\" y2=\"12\"/>" +
        "<line class=\"gr\" x1=\"242\" y1=\"140\" x2=\"242\" y2=\"12\"/><line class=\"gr\" x1=\"258\" y1=\"140\" x2=\"258\" y2=\"12\"/><line class=\"gr\" x1=\"274\" y1=\"140\" x2=\"274\" y2=\"12\"/>" +
        "<line class=\"gr\" x1=\"146\" y1=\"140\" x2=\"274\" y2=\"140\"/><line class=\"gr\" x1=\"146\" y1=\"124\" x2=\"274\" y2=\"124\"/><line class=\"gr\" x1=\"146\" y1=\"108\" x2=\"274\" y2=\"108\"/>" +
        "<line class=\"gr\" x1=\"146\" y1=\"92\" x2=\"274\" y2=\"92\"/><line class=\"gr\" x1=\"146\" y1=\"76\" x2=\"274\" y2=\"76\"/><line class=\"gr\" x1=\"146\" y1=\"60\" x2=\"274\" y2=\"60\"/>" +
        "<line class=\"gr\" x1=\"146\" y1=\"44\" x2=\"274\" y2=\"44\"/><line class=\"gr\" x1=\"146\" y1=\"28\" x2=\"274\" y2=\"28\"/><line class=\"gr\" x1=\"146\" y1=\"12\" x2=\"274\" y2=\"12\"/>" +
        "<line class=\"ax\" x1=\"146\" y1=\"92\" x2=\"274\" y2=\"92\"/><line class=\"ax\" x1=\"210\" y1=\"140\" x2=\"210\" y2=\"12\"/><text class=\"sm\" x=\"146\" y=\"153\" text-anchor=\"middle\">−4</text>" +
        "<text class=\"sm\" x=\"178\" y=\"153\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"210\" y=\"153\" text-anchor=\"middle\">0</text>" +
        "<text class=\"sm\" x=\"242\" y=\"153\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"274\" y=\"153\" text-anchor=\"middle\">4</text>" +
        "<text class=\"sm\" x=\"141\" y=\"96\" text-anchor=\"end\">0</text><text class=\"sm\" x=\"141\" y=\"64\" text-anchor=\"end\">2</text>" +
        "<text class=\"sm\" x=\"141\" y=\"32\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"283\" y=\"96\" text-anchor=\"middle\">x</text>" +
        "<text class=\"sm\" x=\"202\" y=\"21\" text-anchor=\"middle\">y</text><polygon class=\"sh\" points=\"162,124 226,92 258,28 194,60\"/>" +
        "<line class=\"thin dash\" x1=\"162\" y1=\"124\" x2=\"258\" y2=\"28\"/><line class=\"thin dash\" x1=\"226\" y1=\"92\" x2=\"194\" y2=\"60\"/><circle class=\"dt\" cx=\"162\" cy=\"124\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"226\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"258\" cy=\"28\" r=\"3\"/><circle class=\"dt\" cx=\"194\" cy=\"60\" r=\"3\"/>" +
        "<text x=\"151\" y=\"129\" text-anchor=\"middle\">A</text><text x=\"237\" y=\"97\" text-anchor=\"middle\">B</text><text x=\"269\" y=\"33\" text-anchor=\"middle\">C</text>" +
        "<text x=\"183\" y=\"64\" text-anchor=\"middle\">D</text><text class=\"sm\" x=\"18\" y=\"66\" text-anchor=\"start\">drone route</text>" +
        "<text class=\"sm\" x=\"18\" y=\"84\" text-anchor=\"start\">1 unit = 100 m</text></svg></figure>" +
        "<p class=\"geo-given\">A delivery drone flies a route <strong>A</strong> → <strong>B</strong> → <strong>C</strong> → <strong>D</strong> → <strong>A</strong> between drop points <strong>A</strong>(−3, −2), <strong>B</strong>(1, 0), <strong>C</strong>(3, 4) and <strong>D</strong>(−1, 2) on a city map. Each grid unit is 100 m.</p>",
      claims: [
        {
          id: "proof",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Which facts, taken together, prove that ABCD is a rhombus?",
          choices: [
            { letter: "A", text: "AC and BD bisect each other and are ⊥." },
            { letter: "B", text: "Both pairs of opposite sides are parallel." },
            { letter: "C", text: "Both pairs of opposite sides are congruent." },
            { letter: "D", text: "AC and BD bisect each other." }
          ],
          correct: "A"
        },
        {
          id: "bd",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "To the nearest meter, how long is diagonal BD on the ground?",
          choices: [
            { letter: "A", text: "400 m" },
            { letter: "B", text: "283 m" },
            { letter: "C", text: "800 m" },
            { letter: "D", text: "200 m" }
          ],
          correct: "B"
        },
        {
          id: "cross",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "At what point do the diagonals cross?",
          choices: [
            { letter: "A", text: "(3, 3)" },
            { letter: "B", text: "(0, 2)" },
            { letter: "C", text: "(−2, 0)" },
            { letter: "D", text: "(0, 1)" }
          ],
          correct: "D"
        },
        {
          id: "notright",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Which result shows that ∠ABC is NOT a right angle?",
          choices: [
            { letter: "A", text: "AB = BC = 2√5, so the sides are equal" },
            { letter: "B", text: "slope AB = slope DC = 1/2" },
            { letter: "C", text: "slope AB · slope BC = 1, not −1" },
            { letter: "D", text: "slope AC · slope BD = −1" }
          ],
          correct: "C"
        },
        {
          id: "route",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "To the nearest meter, how far does the drone fly on the whole route A → B → C → D → A?",
          choices: [
            { letter: "A", text: "1,789 m" },
            { letter: "B", text: "447 m" },
            { letter: "C", text: "2,400 m" },
            { letter: "D", text: "894 m" }
          ],
          correct: "A"
        },
        {
          id: "angles",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement about the angles of ABCD is true?",
          choices: [
            { letter: "A", text: "All four angles are right angles." },
            { letter: "B", text: "Diagonal AC bisects ∠DAB and ∠BCD." },
            { letter: "C", text: "∠DAB ≅ ∠ABC." },
            { letter: "D", text: "∠DAB and ∠BCD are supplementary." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc1-sky-rail-loop",
      family: "GEO",
      mode: "sky",
      title: "The Four-Town Rail Loop",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Known facts about a rail loop decide its shape.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"Quadrilateral PQRS of rail lines with PQ on top and SR on the bottom, each labeled 40 mi, with tick marks and arrow marks; dashed roads PR and QS cross at T; a note says PR = QS = 58 mi and PQ ∥ SR\">" +
        "<polygon class=\"sh2\" points=\"60,22 164,22 164,131.2 60,131.2\"/><line class=\"thin dash\" x1=\"60\" y1=\"22\" x2=\"164\" y2=\"131.2\"/>" +
        "<line class=\"thin dash\" x1=\"164\" y1=\"22\" x2=\"60\" y2=\"131.2\"/><line class=\"thin\" x1=\"91.2\" y1=\"27\" x2=\"91.2\" y2=\"17\"/>" +
        "<line class=\"thin\" x1=\"91.2\" y1=\"136.2\" x2=\"91.2\" y2=\"126.2\"/><path class=\"thin\" d=\"M121.5 26 L127.5 22 L121.5 18\"/>" +
        "<path class=\"thin\" d=\"M121.5 135.2 L127.5 131.2 L121.5 127.2\"/><circle class=\"dt\" cx=\"60\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"164\" cy=\"22\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"164\" cy=\"131.2\" r=\"3\"/><circle class=\"dt\" cx=\"60\" cy=\"131.2\" r=\"3\"/><circle class=\"dt\" cx=\"112\" cy=\"76.6\" r=\"3\"/>" +
        "<text x=\"50\" y=\"20\" text-anchor=\"middle\">P</text><text x=\"174\" y=\"20\" text-anchor=\"middle\">Q</text><text x=\"174\" y=\"143.2\" text-anchor=\"middle\">R</text>" +
        "<text x=\"50\" y=\"143.2\" text-anchor=\"middle\">S</text><text x=\"125\" y=\"81.6\" text-anchor=\"middle\">T</text><text x=\"112\" y=\"15\" text-anchor=\"middle\">40 mi</text>" +
        "<text x=\"112\" y=\"147.2\" text-anchor=\"middle\">40 mi</text><text class=\"sm\" x=\"186\" y=\"66\" text-anchor=\"start\">PR = QS = 58 mi</text>" +
        "<text class=\"sm\" x=\"186\" y=\"86\" text-anchor=\"start\">PQ ∥ SR</text></svg></figure>" +
        "<p class=\"geo-given\">A rail loop joins four towns <strong>P</strong>, <strong>Q</strong>, <strong>R</strong> and <strong>S</strong>. Straight roads <strong>PR</strong> and <strong>QS</strong> cross at <strong>T</strong>. Surveyors know only that PQ ∥ SR, PQ = SR = 40 mi and PR = QS = 58 mi.</p>",
      claims: [
        {
          id: "para",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Using only the facts PQ ∥ SR and PQ = SR, what can you conclude?",
          choices: [
            { letter: "A", text: "PQRS is a trapezoid." },
            { letter: "B", text: "PQRS is a rectangle." },
            { letter: "C", text: "PQRS is a rhombus." },
            { letter: "D", text: "PQRS is a parallelogram." }
          ],
          correct: "D"
        },
        {
          id: "rect",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which reason proves that PQRS is a rectangle?",
          choices: [
            { letter: "A", text: "Its diagonals bisect each other." },
            { letter: "B", text: "It has a pair of congruent opposite sides." },
            { letter: "C", text: "It is a parallelogram with congruent diagonals." },
            { letter: "D", text: "Its diagonals are perpendicular." }
          ],
          correct: "C"
        },
        {
          id: "qr",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "PQRS is a rectangle. How long is the rail line QR?",
          choices: [
            { letter: "A", text: "18 mi" },
            { letter: "B", text: "42 mi" },
            { letter: "C", text: "about 70.5 mi" },
            { letter: "D", text: "98 mi" }
          ],
          correct: "B"
        },
        {
          id: "loop",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the whole rail loop P → Q → R → S → P?",
          choices: [
            { letter: "A", text: "164 mi" },
            { letter: "B", text: "82 mi" },
            { letter: "C", text: "160 mi" },
            { letter: "D", text: "196 mi" }
          ],
          correct: "A"
        },
        {
          id: "pt",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How far is it along road PR from town P to the crossing T?",
          choices: [
            { letter: "A", text: "58 mi" },
            { letter: "B", text: "20 mi" },
            { letter: "C", text: "21 mi" },
            { letter: "D", text: "29 mi" }
          ],
          correct: "D"
        },
        {
          id: "notjust",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is NOT justified by the surveyors' facts?",
          choices: [
            { letter: "A", text: "PT = QT" },
            { letter: "B", text: "PR ⊥ QS" },
            { letter: "C", text: "∠PQR is a right angle" },
            { letter: "D", text: "PS ∥ QR" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
