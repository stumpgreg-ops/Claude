/* SOL Labyrinth — Geometry game (family GEO), quadrilaterals: G.PC.1 (Virginia 2023 Geometry SOL), v5.20. Original items only.
   Modes: maze (3 packs, a school building and its grounds) and raid / Eagle Swoop (7 packs, sports and games).
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given
   facts, then six questions about it. Every figure coordinate and numeric answer was computed, and every distractor is a
   named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-pc1-maze-lobby-tile",
      family: "GEO",
      mode: "maze",
      title: "The Lobby Floor Tile",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A rhombus tile with diagonals of 30 in and 16 in.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Rhombus ABCD with A at the left, B at the top, C at the right and D at the bottom; diagonals AC and BD cross at right angles at E; one tick mark on each side\">" +
        "<polygon class=\"sh\" points=\"55,80 160,24 265,80 160,136\"/><line class=\"thin\" x1=\"55\" y1=\"80\" x2=\"265\" y2=\"80\"/><line class=\"thin\" x1=\"160\" y1=\"24\" x2=\"160\" y2=\"136\"/>" +
        "<path class=\"thin\" d=\"M168 80 L168 88 L160 88\"/><line class=\"thin\" x1=\"109.9\" y1=\"56.4\" x2=\"105.1\" y2=\"47.6\"/>" +
        "<line class=\"thin\" x1=\"210.1\" y1=\"56.4\" x2=\"214.9\" y2=\"47.6\"/><line class=\"thin\" x1=\"210.1\" y1=\"103.6\" x2=\"214.9\" y2=\"112.4\"/>" +
        "<line class=\"thin\" x1=\"109.9\" y1=\"103.6\" x2=\"105.1\" y2=\"112.4\"/><circle class=\"dt\" cx=\"55\" cy=\"80\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"24\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"265\" cy=\"80\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"136\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"80\" r=\"3\"/>" +
        "<text x=\"44\" y=\"85\" text-anchor=\"middle\">A</text><text x=\"160\" y=\"17\" text-anchor=\"middle\">B</text><text x=\"276\" y=\"85\" text-anchor=\"middle\">C</text>" +
        "<text x=\"160\" y=\"153\" text-anchor=\"middle\">D</text><text x=\"151\" y=\"73\" text-anchor=\"middle\">E</text></svg></figure>" +
        "<p class=\"geo-given\">A tile set into the school lobby floor is rhombus <strong>ABCD</strong>. Its diagonals <strong>AC</strong> = 30 in and <strong>BD</strong> = 16 in meet at <strong>E</strong>.</p>",
      claims: [
        {
          id: "diagonals",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement about diagonals AC and BD must be true?",
          choices: [
            { letter: "A", text: "They are congruent." },
            { letter: "B", text: "They are perpendicular and bisect each other." },
            { letter: "C", text: "They are congruent and perpendicular." },
            { letter: "D", text: "AC bisects BD, but BD does not bisect AC." }
          ],
          correct: "B"
        },
        {
          id: "half",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is AE?",
          choices: [
            { letter: "A", text: "30 in" },
            { letter: "B", text: "8 in" },
            { letter: "C", text: "7.5 in" },
            { letter: "D", text: "15 in" }
          ],
          correct: "D"
        },
        {
          id: "side",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is each side of the tile?",
          choices: [
            { letter: "A", text: "17 in" },
            { letter: "B", text: "23 in" },
            { letter: "C", text: "34 in" },
            { letter: "D", text: "about 12.7 in" }
          ],
          correct: "A"
        },
        {
          id: "angle",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which angle must be congruent to ∠BAE?",
          choices: [
            { letter: "A", text: "∠ABE" },
            { letter: "B", text: "∠AEB" },
            { letter: "C", text: "∠DCE" },
            { letter: "D", text: "∠CBE" }
          ],
          correct: "C"
        },
        {
          id: "nottrue",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is NOT true for every rhombus?",
          choices: [
            { letter: "A", text: "All four angles are congruent." },
            { letter: "B", text: "All four sides are congruent." },
            { letter: "C", text: "Opposite angles are congruent." },
            { letter: "D", text: "Consecutive angles are supplementary." }
          ],
          correct: "A"
        },
        {
          id: "square",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which single extra fact would prove that a rhombus is a square?",
          choices: [
            { letter: "A", text: "Its diagonals are perpendicular." },
            { letter: "B", text: "Its four sides are congruent." },
            { letter: "C", text: "A diagonal bisects two angles." },
            { letter: "D", text: "Its diagonals are congruent." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc1-maze-bulletin-board",
      family: "GEO",
      mode: "maze",
      title: "Ribbons on the Bulletin Board",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Two ribbons cross a 48-by-36-inch board.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 154\" role=\"img\" aria-label=\"Rectangle ABCD, 48 in wide and 36 in tall, with right angles marked at the corners; gold diagonals AC and BD cross at E; AE is labeled 4x + 6 and BE is labeled 7x − 12\">" +
        "<polygon class=\"ln\" points=\"88,132 232,132 232,24 88,24\"/><line class=\"ac\" x1=\"88\" y1=\"132\" x2=\"232\" y2=\"24\"/><line class=\"ac\" x1=\"232\" y1=\"132\" x2=\"88\" y2=\"24\"/>" +
        "<path class=\"thin\" d=\"M97 132 L97 123 L88 123\"/><path class=\"thin\" d=\"M232 123 L223 123 L223 132\"/><path class=\"thin\" d=\"M223 24 L223 33 L232 33\"/>" +
        "<path class=\"thin\" d=\"M88 33 L97 33 L97 24\"/><circle class=\"dt\" cx=\"88\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"232\" cy=\"132\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"232\" cy=\"24\" r=\"3\"/><circle class=\"dt\" cx=\"88\" cy=\"24\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"78\" r=\"3\"/>" +
        "<text x=\"78\" y=\"145\" text-anchor=\"middle\">A</text><text x=\"242\" y=\"145\" text-anchor=\"middle\">B</text><text x=\"242\" y=\"21\" text-anchor=\"middle\">C</text>" +
        "<text x=\"78\" y=\"21\" text-anchor=\"middle\">D</text><text x=\"160\" y=\"69\" text-anchor=\"middle\">E</text><text x=\"160\" y=\"149\" text-anchor=\"middle\">48 in</text>" +
        "<text x=\"240\" y=\"83\" text-anchor=\"start\">36 in</text><text class=\"sm\" x=\"112\" y=\"90\" text-anchor=\"middle\">4x + 6</text>" +
        "<text class=\"sm\" x=\"207\" y=\"90\" text-anchor=\"middle\">7x − 12</text></svg></figure>" +
        "<p class=\"geo-given\">Two ribbons, <strong>AC</strong> and <strong>BD</strong>, run corner to corner across the rectangular bulletin board <strong>ABCD</strong> in a classroom and cross at <strong>E</strong>. <strong>AB</strong> = 48 in, <strong>BC</strong> = 36 in, <strong>AE</strong> = <span style=\"white-space:nowrap\">(4x + 6) in</span> and <strong>BE</strong> = <span style=\"white-space:nowrap\">(7x − 12) in</span>.</p>",
      claims: [
        {
          id: "x",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is the value of x?",
          choices: [
            { letter: "A", text: "−2" },
            { letter: "B", text: "13.5" },
            { letter: "C", text: "6" },
            { letter: "D", text: "30" }
          ],
          correct: "C"
        },
        {
          id: "bd",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is ribbon BD?",
          choices: [
            { letter: "A", text: "60 in" },
            { letter: "B", text: "30 in" },
            { letter: "C", text: "84 in" },
            { letter: "D", text: "about 31.7 in" }
          ],
          correct: "A"
        },
        {
          id: "halves",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement must be true?",
          choices: [
            { letter: "A", text: "∠AEB is a right angle" },
            { letter: "B", text: "AC bisects ∠DAB" },
            { letter: "C", text: "AB = BC = CD = DA" },
            { letter: "D", text: "AE = BE = CE = DE" }
          ],
          correct: "D"
        },
        {
          id: "isosceles",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Why is △AEB isosceles?",
          choices: [
            { letter: "A", text: "The diagonals are perpendicular to each other." },
            { letter: "B", text: "The diagonals are congruent and bisect each other." },
            { letter: "C", text: "∠DAB is a right angle, so ∠EAB = 45°." },
            { letter: "D", text: "AB ∥ DC, so ∠EAB ≅ ∠ECD." }
          ],
          correct: "B"
        },
        {
          id: "counter",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Jamal says, \"If a quadrilateral has congruent diagonals, it must be a rectangle.\" Which shape shows he is wrong?",
          choices: [
            { letter: "A", text: "a square" },
            { letter: "B", text: "a rhombus that is not a square" },
            { letter: "C", text: "an isosceles trapezoid" },
            { letter: "D", text: "a parallelogram with no right angle" }
          ],
          correct: "C"
        },
        {
          id: "y",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "A student writes m∠DAB = (5y + 15)°. What value of y fits the board?",
          choices: [
            { letter: "A", text: "33" },
            { letter: "B", text: "15" },
            { letter: "C", text: "21" },
            { letter: "D", text: "18" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc1-maze-drop-off",
      family: "GEO",
      mode: "maze",
      title: "The Drop-Off Zone Map",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Slope, distance and midpoint on a parking-lot grid.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 154\" role=\"img\" aria-label=\"Coordinate grid from 0 to 7 across and 0 to 5 up with shaded quadrilateral ABCD: A(1, 2), B(5, 0), C(6, 2), D(2, 4), and its dashed diagonals AC and BD\">" +
        "<line class=\"gr\" x1=\"70\" y1=\"132\" x2=\"70\" y2=\"22\"/><line class=\"gr\" x1=\"92\" y1=\"132\" x2=\"92\" y2=\"22\"/><line class=\"gr\" x1=\"114\" y1=\"132\" x2=\"114\" y2=\"22\"/>" +
        "<line class=\"gr\" x1=\"136\" y1=\"132\" x2=\"136\" y2=\"22\"/><line class=\"gr\" x1=\"158\" y1=\"132\" x2=\"158\" y2=\"22\"/><line class=\"gr\" x1=\"180\" y1=\"132\" x2=\"180\" y2=\"22\"/>" +
        "<line class=\"gr\" x1=\"202\" y1=\"132\" x2=\"202\" y2=\"22\"/><line class=\"gr\" x1=\"224\" y1=\"132\" x2=\"224\" y2=\"22\"/><line class=\"gr\" x1=\"70\" y1=\"132\" x2=\"224\" y2=\"132\"/>" +
        "<line class=\"gr\" x1=\"70\" y1=\"110\" x2=\"224\" y2=\"110\"/><line class=\"gr\" x1=\"70\" y1=\"88\" x2=\"224\" y2=\"88\"/><line class=\"gr\" x1=\"70\" y1=\"66\" x2=\"224\" y2=\"66\"/>" +
        "<line class=\"gr\" x1=\"70\" y1=\"44\" x2=\"224\" y2=\"44\"/><line class=\"gr\" x1=\"70\" y1=\"22\" x2=\"224\" y2=\"22\"/><line class=\"ax\" x1=\"70\" y1=\"132\" x2=\"224\" y2=\"132\"/>" +
        "<line class=\"ax\" x1=\"70\" y1=\"132\" x2=\"70\" y2=\"22\"/><text class=\"sm\" x=\"114\" y=\"145\" text-anchor=\"middle\">2</text>" +
        "<text class=\"sm\" x=\"158\" y=\"145\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"202\" y=\"145\" text-anchor=\"middle\">6</text>" +
        "<text class=\"sm\" x=\"65\" y=\"92\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"65\" y=\"48\" text-anchor=\"end\">4</text>" +
        "<text class=\"sm\" x=\"234\" y=\"136\" text-anchor=\"middle\">x</text><text class=\"sm\" x=\"70\" y=\"17\" text-anchor=\"middle\">y</text>" +
        "<polygon class=\"sh2\" points=\"92,88 180,132 202,88 114,44\"/><line class=\"thin dash\" x1=\"92\" y1=\"88\" x2=\"202\" y2=\"88\"/>" +
        "<line class=\"thin dash\" x1=\"180\" y1=\"132\" x2=\"114\" y2=\"44\"/><circle class=\"dt\" cx=\"92\" cy=\"88\" r=\"3\"/><circle class=\"dt\" cx=\"180\" cy=\"132\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"202\" cy=\"88\" r=\"3\"/><circle class=\"dt\" cx=\"114\" cy=\"44\" r=\"3\"/><text x=\"82\" y=\"80\" text-anchor=\"middle\">A</text>" +
        "<text x=\"194\" y=\"131\" text-anchor=\"middle\">B</text><text x=\"213\" y=\"93\" text-anchor=\"middle\">C</text><text x=\"106\" y=\"38\" text-anchor=\"middle\">D</text></svg></figure>" +
        "<p class=\"geo-given\">On a map of the school parking lot, the bus drop-off zone <strong>ABCD</strong> has corners <strong>A</strong>(1, 2), <strong>B</strong>(5, 0), <strong>C</strong>(6, 2) and <strong>D</strong>(2, 4). Each grid unit stands for 3 meters.</p>",
      claims: [
        {
          id: "slopes",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Which pair of slopes shows that ∠ABC is a right angle?",
          choices: [
            { letter: "A", text: "slope AB = −2, slope BC = 1/2" },
            { letter: "B", text: "slope AB = 1/2, slope BC = 2" },
            { letter: "C", text: "slope AB = −1/2, slope CD = −1/2" },
            { letter: "D", text: "slope AB = −1/2, slope BC = 2" }
          ],
          correct: "D"
        },
        {
          id: "ab",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "How long is side AB, in grid units?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "2√5" },
            { letter: "C", text: "2√3" },
            { letter: "D", text: "20" }
          ],
          correct: "B"
        },
        {
          id: "bd",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "How long is diagonal BD, in grid units?",
          choices: [
            { letter: "A", text: "7" },
            { letter: "B", text: "√7" },
            { letter: "C", text: "5" },
            { letter: "D", text: "25" }
          ],
          correct: "C"
        },
        {
          id: "classify",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Which statement correctly classifies ABCD?",
          choices: [
            { letter: "A", text: "Rectangle: its diagonals bisect each other and are ≅" },
            { letter: "B", text: "Square: its diagonals bisect each other and are ≅" },
            { letter: "C", text: "Rhombus: its diagonals bisect each other and are ⊥" },
            { letter: "D", text: "Kite: it has two pairs of congruent adjacent sides" }
          ],
          correct: "A"
        },
        {
          id: "proof",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "All four of these facts are true. Which one, by itself, proves that ABCD is a parallelogram?",
          choices: [
            { letter: "A", text: "AB ∥ DC and AD = BC" },
            { letter: "B", text: "AB ∥ DC and AB = DC" },
            { letter: "C", text: "AC = BD, so the diagonals are ≅" },
            { letter: "D", text: "AB ⊥ BC, so ∠B is a right angle" }
          ],
          correct: "B"
        },
        {
          id: "paint",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "To the nearest meter, how long is the painted border of the zone (its perimeter)?",
          choices: [
            { letter: "A", text: "13 m" },
            { letter: "B", text: "20 m" },
            { letter: "C", text: "40 m" },
            { letter: "D", text: "54 m" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc1-raid-diamond",
      family: "GEO",
      mode: "raid",
      title: "Around the Bases",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A baseball diamond is a 90-foot square.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Square HFST turned like a diamond: H at the bottom, F at the right, S at the top and T at the left; dashed diagonals HS and FT meet at M; a right angle is marked at H and each side has one tick mark\">" +
        "<polygon class=\"sh2\" points=\"160,146 222,84 160,22 98,84\"/><line class=\"thin dash\" x1=\"160\" y1=\"146\" x2=\"160\" y2=\"22\"/>" +
        "<line class=\"thin dash\" x1=\"222\" y1=\"84\" x2=\"98\" y2=\"84\"/><path class=\"thin\" d=\"M166.4 139.6 L160 133.3 L153.6 139.6\"/>" +
        "<line class=\"thin\" x1=\"194.5\" y1=\"118.5\" x2=\"187.5\" y2=\"111.5\"/><line class=\"thin\" x1=\"194.5\" y1=\"49.5\" x2=\"187.5\" y2=\"56.5\"/>" +
        "<line class=\"thin\" x1=\"125.5\" y1=\"49.5\" x2=\"132.5\" y2=\"56.5\"/><line class=\"thin\" x1=\"125.5\" y1=\"118.5\" x2=\"132.5\" y2=\"111.5\"/><circle class=\"dt\" cx=\"160\" cy=\"146\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"222\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"98\" cy=\"84\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"84\" r=\"3\"/><text x=\"160\" y=\"163\" text-anchor=\"middle\">H</text><text x=\"234\" y=\"89\" text-anchor=\"middle\">F</text>" +
        "<text x=\"160\" y=\"16\" text-anchor=\"middle\">S</text><text x=\"86\" y=\"89\" text-anchor=\"middle\">T</text><text x=\"171\" y=\"78\" text-anchor=\"middle\">M</text>" +
        "<text x=\"222\" y=\"138\" text-anchor=\"middle\">90 ft</text><text class=\"sm\" x=\"134\" y=\"158\" text-anchor=\"end\">home</text></svg></figure>" +
        "<p class=\"geo-given\">A baseball diamond is square <strong>HFST</strong> with 90-foot sides: <strong>H</strong> is home plate, <strong>F</strong> first base, <strong>S</strong> second base and <strong>T</strong> third base. The diagonals <strong>HS</strong> and <strong>FT</strong> meet at <strong>M</strong>.</p>",
      claims: [
        {
          id: "diagonals",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement about diagonals HS and FT is true?",
          choices: [
            { letter: "A", text: "They are congruent and perpendicular." },
            { letter: "B", text: "They are congruent but not perpendicular." },
            { letter: "C", text: "They are perpendicular but not congruent." },
            { letter: "D", text: "They do not bisect each other." }
          ],
          correct: "A"
        },
        {
          id: "second",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "To the nearest tenth of a foot, how far is it from home plate to second base?",
          choices: [
            { letter: "A", text: "180 ft" },
            { letter: "B", text: "90 ft" },
            { letter: "C", text: "127.3 ft" },
            { letter: "D", text: "63.6 ft" }
          ],
          correct: "C"
        },
        {
          id: "angle",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "What is m∠SHF, the angle between diagonal HS and the first-base line HF?",
          choices: [
            { letter: "A", text: "90°" },
            { letter: "B", text: "45°" },
            { letter: "C", text: "135°" },
            { letter: "D", text: "22.5°" }
          ],
          correct: "B"
        },
        {
          id: "segment",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which segment must be congruent to HM?",
          choices: [
            { letter: "A", text: "HF" },
            { letter: "B", text: "HS" },
            { letter: "C", text: "FT" },
            { letter: "D", text: "FM" }
          ],
          correct: "D"
        },
        {
          id: "practice",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "A coach chalks a smaller practice square. One side is (4x − 6) ft and the next side is (2x + 24) ft. How long is each side?",
          choices: [
            { letter: "A", text: "15 ft" },
            { letter: "B", text: "216 ft" },
            { letter: "C", text: "30 ft" },
            { letter: "D", text: "54 ft" }
          ],
          correct: "D"
        },
        {
          id: "family",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is true of every square, including HFST?",
          choices: [
            { letter: "A", text: "It is both a rhombus and a rectangle." },
            { letter: "B", text: "It is a rhombus but not a rectangle." },
            { letter: "C", text: "It is a rectangle but not a rhombus." },
            { letter: "D", text: "It is neither a rhombus nor a rectangle." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc1-raid-funbox",
      family: "GEO",
      mode: "raid",
      title: "The Skate Park Funbox",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "An isosceles trapezoid with two ramps and a deck.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 136\" role=\"img\" aria-label=\"Isosceles trapezoid ABCD seen from the side: long base AB on the ground, short base DC on top, congruent legs AD and BC marked with ticks, parallel bases marked with arrows, a 35° angle at A, and gold segment MN joining the midpoints of the legs\">" +
        "<line class=\"thin\" x1=\"14\" y1=\"112\" x2=\"306\" y2=\"112\"/><polygon class=\"sh\" points=\"40,112 280,112 220,70 100,70\"/><line class=\"ac\" x1=\"70\" y1=\"91\" x2=\"250\" y2=\"91\"/>" +
        "<path class=\"thin\" d=\"M109 116 L115 112 L109 108\"/><path class=\"thin\" d=\"M133 74 L139 70 L133 66\"/><line class=\"thin\" x1=\"87.9\" y1=\"84.6\" x2=\"82.1\" y2=\"76.4\"/>" +
        "<line class=\"thin\" x1=\"237.9\" y1=\"76.4\" x2=\"232.1\" y2=\"84.6\"/><path class=\"thin\" d=\"M62 112 A22 22 0 0 0 58 99.4\"/><circle class=\"dt\" cx=\"40\" cy=\"112\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"280\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"220\" cy=\"70\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"70\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"70\" cy=\"91\" r=\"3\"/><circle class=\"dt\" cx=\"250\" cy=\"91\" r=\"3\"/><text x=\"32\" y=\"127\" text-anchor=\"middle\">A</text>" +
        "<text x=\"288\" y=\"127\" text-anchor=\"middle\">B</text><text x=\"230\" y=\"65\" text-anchor=\"middle\">C</text><text x=\"90\" y=\"65\" text-anchor=\"middle\">D</text>" +
        "<text x=\"62\" y=\"96\" text-anchor=\"end\">M</text><text x=\"258\" y=\"96\" text-anchor=\"start\">N</text><text x=\"160\" y=\"129\" text-anchor=\"middle\">16 ft</text>" +
        "<text x=\"160\" y=\"63\" text-anchor=\"middle\">8 ft</text><text class=\"sm\" x=\"83\" y=\"108\" text-anchor=\"middle\">35°</text></svg></figure>" +
        "<p class=\"geo-given\">From the side, a skate park funbox <strong>ABCD</strong> is an isosceles trapezoid. The ground base <strong>AB</strong> = 16 ft, the flat deck <strong>DC</strong> = 8 ft and m∠<strong>DAB</strong> = 35°. A support beam <strong>MN</strong> (gold) joins the midpoints of the ramps <strong>AD</strong> and <strong>BC</strong>.</p>",
      claims: [
        {
          id: "beam",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the support beam MN?",
          choices: [
            { letter: "A", text: "24 ft" },
            { letter: "B", text: "12 ft" },
            { letter: "C", text: "8 ft" },
            { letter: "D", text: "4 ft" }
          ],
          correct: "B"
        },
        {
          id: "congruent",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which pair of angles must be congruent?",
          choices: [
            { letter: "A", text: "∠DAB and ∠BCD" },
            { letter: "B", text: "∠DAB and ∠ADC" },
            { letter: "C", text: "∠ABC and ∠ADC" },
            { letter: "D", text: "∠DAB and ∠ABC" }
          ],
          correct: "D"
        },
        {
          id: "nottrue",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is NOT true for funbox ABCD?",
          choices: [
            { letter: "A", text: "AB ∥ DC" },
            { letter: "B", text: "AD ≅ BC" },
            { letter: "C", text: "AD ∥ BC" },
            { letter: "D", text: "∠ADC ≅ ∠BCD" }
          ],
          correct: "C"
        },
        {
          id: "deck",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is m∠BCD?",
          choices: [
            { letter: "A", text: "145°" },
            { letter: "B", text: "35°" },
            { letter: "C", text: "55°" },
            { letter: "D", text: "290°" }
          ],
          correct: "A"
        },
        {
          id: "x",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "On another funbox, the deck is (x + 2) ft, the ground base is (3x − 2) ft and the beam joining the midpoints of the ramps is 14 ft. What is x?",
          choices: [
            { letter: "A", text: "7" },
            { letter: "B", text: "3.5" },
            { letter: "C", text: "9" },
            { letter: "D", text: "19" }
          ],
          correct: "A"
        },
        {
          id: "why",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Why is ABCD a trapezoid and not a parallelogram?",
          choices: [
            { letter: "A", text: "Its legs AD and BC are congruent." },
            { letter: "B", text: "It has no right angles." },
            { letter: "C", text: "Only one pair of its sides is parallel." },
            { letter: "D", text: "Its diagonals are congruent." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc1-raid-game-tile",
      family: "GEO",
      mode: "raid",
      title: "The Board Game Tile",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A rhombus tile with a 60° corner.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"Rhombus ABCD with AB along the bottom and a 60° angle at A; one tick mark on each side; dashed diagonals AC and BD meet at E; AB is labeled 2x + 3 cm and BC is labeled 5x − 6 cm\">" +
        "<polygon class=\"sh\" points=\"70,130 190,130 250,26.1 130,26.1\"/><line class=\"thin dash\" x1=\"70\" y1=\"130\" x2=\"250\" y2=\"26.1\"/>" +
        "<line class=\"thin dash\" x1=\"190\" y1=\"130\" x2=\"130\" y2=\"26.1\"/><path class=\"thin\" d=\"M90 130 A20 20 0 0 0 80 112.7\"/>" +
        "<line class=\"thin\" x1=\"130\" y1=\"135\" x2=\"130\" y2=\"125\"/><line class=\"thin\" x1=\"224.3\" y1=\"80.5\" x2=\"215.7\" y2=\"75.5\"/>" +
        "<line class=\"thin\" x1=\"190\" y1=\"21.1\" x2=\"190\" y2=\"31.1\"/><line class=\"thin\" x1=\"95.7\" y1=\"75.5\" x2=\"104.3\" y2=\"80.5\"/><circle class=\"dt\" cx=\"70\" cy=\"130\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"190\" cy=\"130\" r=\"3\"/><circle class=\"dt\" cx=\"250\" cy=\"26.1\" r=\"3\"/><circle class=\"dt\" cx=\"130\" cy=\"26.1\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"78\" r=\"3\"/><text x=\"60\" y=\"143\" text-anchor=\"middle\">A</text><text x=\"200\" y=\"143\" text-anchor=\"middle\">B</text>" +
        "<text x=\"261\" y=\"24.1\" text-anchor=\"middle\">C</text><text x=\"119\" y=\"24.1\" text-anchor=\"middle\">D</text><text x=\"176\" y=\"86\" text-anchor=\"middle\">E</text>" +
        "<text class=\"sm\" x=\"105\" y=\"125\" text-anchor=\"middle\">60°</text><text class=\"sm\" x=\"130\" y=\"146\" text-anchor=\"middle\">(2x + 3) cm</text>" +
        "<text class=\"sm\" x=\"234\" y=\"86\" text-anchor=\"start\">(5x − 6) cm</text></svg></figure>" +
        "<p class=\"geo-given\">A board game uses rhombus-shaped tiles. On tile <strong>ABCD</strong>, <strong>AB</strong> = <span style=\"white-space:nowrap\">(2x + 3) cm</span>, <strong>BC</strong> = <span style=\"white-space:nowrap\">(5x − 6) cm</span> and m∠<strong>DAB</strong> = 60°. The diagonals (dashed) meet at <strong>E</strong>.</p>",
      claims: [
        {
          id: "x",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "Use the two side lengths to find the value of x.",
          choices: [
            { letter: "A", text: "−1" },
            { letter: "B", text: "9" },
            { letter: "C", text: "9/7" },
            { letter: "D", text: "3" }
          ],
          correct: "D"
        },
        {
          id: "bd",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is diagonal BD?",
          choices: [
            { letter: "A", text: "9 cm" },
            { letter: "B", text: "18 cm" },
            { letter: "C", text: "4.5 cm" },
            { letter: "D", text: "9√3 cm" }
          ],
          correct: "A"
        },
        {
          id: "abc",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "What is m∠ABC?",
          choices: [
            { letter: "A", text: "60°" },
            { letter: "B", text: "120°" },
            { letter: "C", text: "30°" },
            { letter: "D", text: "300°" }
          ],
          correct: "B"
        },
        {
          id: "bac",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "What is m∠BAC?",
          choices: [
            { letter: "A", text: "60°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "30°" },
            { letter: "D", text: "45°" }
          ],
          correct: "C"
        },
        {
          id: "rhombus",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "A different tile PQRS is known to be a parallelogram. Which single fact is enough to prove it is a rhombus?",
          choices: [
            { letter: "A", text: "Diagonals PR and QS are congruent." },
            { letter: "B", text: "Diagonal PR bisects ∠SPQ." },
            { letter: "C", text: "∠SPQ is a right angle." },
            { letter: "D", text: "Sides PQ and SR are parallel." }
          ],
          correct: "B"
        },
        {
          id: "error",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Lena says that since ABCD has four congruent sides, its diagonals must be congruent too. Which statement explains her error?",
          choices: [
            { letter: "A", text: "She is right: all rhombus diagonals are congruent." },
            { letter: "B", text: "Rhombus diagonals are never perpendicular." },
            { letter: "C", text: "Rhombus diagonals never bisect each other." },
            { letter: "D", text: "Rhombus diagonals are congruent only in a square." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc1-raid-shield",
      family: "GEO",
      mode: "raid",
      title: "The Shield Icon",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A kite drawn on a video game's pixel grid.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"Coordinate grid from 0 to 7 on both axes with shaded kite ABCD: A(1, 6), B(2, 3), C(6, 1), D(4, 5), and its dashed diagonals AC and BD\">" +
        "<line class=\"gr\" x1=\"96\" y1=\"146\" x2=\"96\" y2=\"20\"/><line class=\"gr\" x1=\"114\" y1=\"146\" x2=\"114\" y2=\"20\"/><line class=\"gr\" x1=\"132\" y1=\"146\" x2=\"132\" y2=\"20\"/>" +
        "<line class=\"gr\" x1=\"150\" y1=\"146\" x2=\"150\" y2=\"20\"/><line class=\"gr\" x1=\"168\" y1=\"146\" x2=\"168\" y2=\"20\"/><line class=\"gr\" x1=\"186\" y1=\"146\" x2=\"186\" y2=\"20\"/>" +
        "<line class=\"gr\" x1=\"204\" y1=\"146\" x2=\"204\" y2=\"20\"/><line class=\"gr\" x1=\"222\" y1=\"146\" x2=\"222\" y2=\"20\"/><line class=\"gr\" x1=\"96\" y1=\"146\" x2=\"222\" y2=\"146\"/>" +
        "<line class=\"gr\" x1=\"96\" y1=\"128\" x2=\"222\" y2=\"128\"/><line class=\"gr\" x1=\"96\" y1=\"110\" x2=\"222\" y2=\"110\"/><line class=\"gr\" x1=\"96\" y1=\"92\" x2=\"222\" y2=\"92\"/>" +
        "<line class=\"gr\" x1=\"96\" y1=\"74\" x2=\"222\" y2=\"74\"/><line class=\"gr\" x1=\"96\" y1=\"56\" x2=\"222\" y2=\"56\"/><line class=\"gr\" x1=\"96\" y1=\"38\" x2=\"222\" y2=\"38\"/>" +
        "<line class=\"gr\" x1=\"96\" y1=\"20\" x2=\"222\" y2=\"20\"/><line class=\"ax\" x1=\"96\" y1=\"146\" x2=\"222\" y2=\"146\"/><line class=\"ax\" x1=\"96\" y1=\"146\" x2=\"96\" y2=\"20\"/>" +
        "<text class=\"sm\" x=\"132\" y=\"159\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"168\" y=\"159\" text-anchor=\"middle\">4</text>" +
        "<text class=\"sm\" x=\"204\" y=\"159\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"91\" y=\"114\" text-anchor=\"end\">2</text>" +
        "<text class=\"sm\" x=\"91\" y=\"78\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"91\" y=\"42\" text-anchor=\"end\">6</text>" +
        "<text class=\"sm\" x=\"232\" y=\"150\" text-anchor=\"middle\">x</text><text class=\"sm\" x=\"96\" y=\"15\" text-anchor=\"middle\">y</text>" +
        "<polygon class=\"sh\" points=\"114,38 132,92 204,128 168,56\"/><line class=\"thin dash\" x1=\"114\" y1=\"38\" x2=\"204\" y2=\"128\"/>" +
        "<line class=\"thin dash\" x1=\"132\" y1=\"92\" x2=\"168\" y2=\"56\"/><circle class=\"dt\" cx=\"114\" cy=\"38\" r=\"3\"/><circle class=\"dt\" cx=\"132\" cy=\"92\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"204\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"168\" cy=\"56\" r=\"3\"/><text x=\"105\" y=\"33\" text-anchor=\"middle\">A</text>" +
        "<text x=\"121\" y=\"100\" text-anchor=\"middle\">B</text><text x=\"214\" y=\"138\" text-anchor=\"middle\">C</text><text x=\"178\" y=\"51\" text-anchor=\"middle\">D</text></svg></figure>" +
        "<p class=\"geo-given\">In a video game, a shield icon is quadrilateral <strong>ABCD</strong> drawn on a pixel grid with <strong>A</strong>(1, 6), <strong>B</strong>(2, 3), <strong>C</strong>(6, 1) and <strong>D</strong>(4, 5). The artist says it is a kite. The dashed segments are its diagonals.</p>",
      claims: [
        {
          id: "ab",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "How many grid units long is side AB of the shield?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "10" },
            { letter: "C", text: "√10" },
            { letter: "D", text: "2√2" }
          ],
          correct: "C"
        },
        {
          id: "kite",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Which facts show that ABCD is a kite?",
          choices: [
            { letter: "A", text: "AB = CD = √10 and AD = CB = 2√5" },
            { letter: "B", text: "AB = AD = √10 and CB = CD = 2√5" },
            { letter: "C", text: "AB = BC = CD = DA = √10" },
            { letter: "D", text: "AC = BD = 2√5, so the diagonals are ≅" }
          ],
          correct: "B"
        },
        {
          id: "slopes",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What do the slopes of the diagonals show?",
          choices: [
            { letter: "A", text: "AC: −1 and BD: 1, so AC ⊥ BD" },
            { letter: "B", text: "AC: −1 and BD: 1, so AC ∥ BD" },
            { letter: "C", text: "AC: 1 and BD: 1, so AC ∥ BD" },
            { letter: "D", text: "AC: −1 and BD: 1, so AC ≅ BD" }
          ],
          correct: "A"
        },
        {
          id: "mid",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What is the midpoint of diagonal BD?",
          choices: [
            { letter: "A", text: "(3.5, 3.5)" },
            { letter: "B", text: "(1, 1)" },
            { letter: "C", text: "(6, 8)" },
            { letter: "D", text: "(3, 4)" }
          ],
          correct: "D"
        },
        {
          id: "bisect",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement about how the diagonals of kite ABCD cut each other is true?",
          choices: [
            { letter: "A", text: "BD bisects AC, but AC does not bisect BD." },
            { letter: "B", text: "AC and BD bisect each other." },
            { letter: "C", text: "AC bisects BD, but BD does not bisect AC." },
            { letter: "D", text: "Neither diagonal bisects the other." }
          ],
          correct: "C"
        },
        {
          id: "rhombus",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "The artist moves only C so that ABCD becomes a rhombus. A, B and D stay put. Where should C go?",
          choices: [
            { letter: "A", text: "(5, 2)" },
            { letter: "B", text: "(6, 1)" },
            { letter: "C", text: "(3, 4)" },
            { letter: "D", text: "(6, 8)" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc1-raid-lap-pool",
      family: "GEO",
      mode: "raid",
      title: "The Lap Pool",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A right trapezoid under the water.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 124\" role=\"img\" aria-label=\"Side view of a pool as trapezoid ABCD: water surface AB on top, vertical end walls AD and BC with right angles at A and B, sloped floor DC; gold segment MN joins the midpoints of AB and DC\">" +
        "<polygon class=\"sh2\" points=\"40,40 280,40 280,100 40,60\"/><line class=\"ac\" x1=\"160\" y1=\"40\" x2=\"160\" y2=\"80\"/><path class=\"thin\" d=\"M48 40 L48 48 L40 48\"/>" +
        "<path class=\"thin\" d=\"M272 40 L272 48 L280 48\"/><circle class=\"dt\" cx=\"40\" cy=\"40\" r=\"3\"/><circle class=\"dt\" cx=\"280\" cy=\"40\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"280\" cy=\"100\" r=\"3\"/><circle class=\"dt\" cx=\"40\" cy=\"60\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"40\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"80\" r=\"3\"/><text x=\"31\" y=\"34\" text-anchor=\"middle\">A</text><text x=\"289\" y=\"34\" text-anchor=\"middle\">B</text>" +
        "<text x=\"290\" y=\"112\" text-anchor=\"middle\">C</text><text x=\"30\" y=\"74\" text-anchor=\"middle\">D</text><text x=\"160\" y=\"33\" text-anchor=\"middle\">M</text>" +
        "<text x=\"166\" y=\"97\" text-anchor=\"middle\">N</text><text x=\"100\" y=\"33\" text-anchor=\"middle\">12 m</text><text x=\"18\" y=\"55\" text-anchor=\"middle\">1 m</text>" +
        "<text x=\"302\" y=\"75\" text-anchor=\"middle\">3 m</text><text class=\"sm\" x=\"225\" y=\"33\" text-anchor=\"middle\">water surface</text></svg></figure>" +
        "<p class=\"geo-given\">The side view of a lap pool is trapezoid <strong>ABCD</strong>. The end walls <strong>AD</strong> and <strong>BC</strong> are vertical, and the water surface <strong>AB</strong> is level and 12 m long. The shallow end is <strong>AD</strong> = 1 m deep and the deep end is <strong>BC</strong> = 3 m deep. <strong>MN</strong> (gold) joins the midpoints of <strong>AB</strong> and <strong>DC</strong>.</p>",
      claims: [
        {
          id: "middle",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How deep is the water halfway along the pool (the length of MN)?",
          choices: [
            { letter: "A", text: "2 m" },
            { letter: "B", text: "4 m" },
            { letter: "C", text: "1 m" },
            { letter: "D", text: "1.5 m" }
          ],
          correct: "A"
        },
        {
          id: "bases",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which two sides of ABCD are parallel?",
          choices: [
            { letter: "A", text: "AB and DC" },
            { letter: "B", text: "AB and BC" },
            { letter: "C", text: "AD and DC" },
            { letter: "D", text: "AD and BC" }
          ],
          correct: "D"
        },
        {
          id: "supp",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which pair of angles is supplementary?",
          choices: [
            { letter: "A", text: "∠ADC and ∠DAB" },
            { letter: "B", text: "∠ADC and ∠BCD" },
            { letter: "C", text: "∠BCD and ∠ABC" },
            { letter: "D", text: "∠DAB and ∠BCD" }
          ],
          correct: "B"
        },
        {
          id: "x",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "Another pool has the same shape. Its shallow end is 1.2 m deep, its deep end is 3.4 m deep, and the depth halfway along is (x + 1) m. What is x?",
          choices: [
            { letter: "A", text: "3.6" },
            { letter: "B", text: "0.1" },
            { letter: "C", text: "1.3" },
            { letter: "D", text: "2.3" }
          ],
          correct: "C"
        },
        {
          id: "floor",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "To the nearest tenth of a meter, how long is the sloped floor DC?",
          choices: [
            { letter: "A", text: "14 m" },
            { letter: "B", text: "11.8 m" },
            { letter: "C", text: "12.4 m" },
            { letter: "D", text: "12.2 m" }
          ],
          correct: "D"
        },
        {
          id: "name",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "What is the most specific name for ABCD?",
          choices: [
            { letter: "A", text: "an isosceles trapezoid" },
            { letter: "B", text: "a right trapezoid" },
            { letter: "C", text: "a rectangle" },
            { letter: "D", text: "a parallelogram" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc1-raid-archery",
      family: "GEO",
      mode: "raid",
      title: "The Archery Field Plan",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Four target stands on a coordinate grid.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 154\" role=\"img\" aria-label=\"Coordinate grid from −3 to 4 across and −4 to 3 up with shaded quadrilateral PQRS: P(−2, −2), Q(2, −3), R(3, 1), S(−1, 2), and its dashed diagonals PR and QS\">" +
        "<line class=\"gr\" x1=\"100\" y1=\"135\" x2=\"100\" y2=\"16\"/><line class=\"gr\" x1=\"117\" y1=\"135\" x2=\"117\" y2=\"16\"/><line class=\"gr\" x1=\"134\" y1=\"135\" x2=\"134\" y2=\"16\"/>" +
        "<line class=\"gr\" x1=\"151\" y1=\"135\" x2=\"151\" y2=\"16\"/><line class=\"gr\" x1=\"168\" y1=\"135\" x2=\"168\" y2=\"16\"/><line class=\"gr\" x1=\"185\" y1=\"135\" x2=\"185\" y2=\"16\"/>" +
        "<line class=\"gr\" x1=\"202\" y1=\"135\" x2=\"202\" y2=\"16\"/><line class=\"gr\" x1=\"219\" y1=\"135\" x2=\"219\" y2=\"16\"/><line class=\"gr\" x1=\"100\" y1=\"135\" x2=\"219\" y2=\"135\"/>" +
        "<line class=\"gr\" x1=\"100\" y1=\"118\" x2=\"219\" y2=\"118\"/><line class=\"gr\" x1=\"100\" y1=\"101\" x2=\"219\" y2=\"101\"/><line class=\"gr\" x1=\"100\" y1=\"84\" x2=\"219\" y2=\"84\"/>" +
        "<line class=\"gr\" x1=\"100\" y1=\"67\" x2=\"219\" y2=\"67\"/><line class=\"gr\" x1=\"100\" y1=\"50\" x2=\"219\" y2=\"50\"/><line class=\"gr\" x1=\"100\" y1=\"33\" x2=\"219\" y2=\"33\"/>" +
        "<line class=\"gr\" x1=\"100\" y1=\"16\" x2=\"219\" y2=\"16\"/><line class=\"ax\" x1=\"100\" y1=\"67\" x2=\"219\" y2=\"67\"/><line class=\"ax\" x1=\"151\" y1=\"135\" x2=\"151\" y2=\"16\"/>" +
        "<text class=\"sm\" x=\"117\" y=\"148\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"185\" y=\"148\" text-anchor=\"middle\">2</text>" +
        "<text class=\"sm\" x=\"219\" y=\"148\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"95\" y=\"105\" text-anchor=\"end\">−2</text>" +
        "<text class=\"sm\" x=\"95\" y=\"37\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"229\" y=\"71\" text-anchor=\"middle\">x</text>" +
        "<text class=\"sm\" x=\"159\" y=\"25\" text-anchor=\"middle\">y</text><polygon class=\"sh\" points=\"117,101 185,118 202,50 134,33\"/>" +
        "<line class=\"thin dash\" x1=\"117\" y1=\"101\" x2=\"202\" y2=\"50\"/><line class=\"thin dash\" x1=\"185\" y1=\"118\" x2=\"134\" y2=\"33\"/><circle class=\"dt\" cx=\"117\" cy=\"101\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"185\" cy=\"118\" r=\"3\"/><circle class=\"dt\" cx=\"202\" cy=\"50\" r=\"3\"/><circle class=\"dt\" cx=\"134\" cy=\"33\" r=\"3\"/>" +
        "<text x=\"109\" y=\"117\" text-anchor=\"middle\">P</text><text x=\"194\" y=\"131\" text-anchor=\"middle\">Q</text><text x=\"213\" y=\"55\" text-anchor=\"middle\">R</text>" +
        "<text x=\"124\" y=\"28\" text-anchor=\"middle\">S</text></svg></figure>" +
        "<p class=\"geo-given\">On a field plan, four archery target stands sit at <strong>P</strong>(−2, −2), <strong>Q</strong>(2, −3), <strong>R</strong>(3, 1) and <strong>S</strong>(−1, 2). Each grid unit is 5 m.</p>",
      claims: [
        {
          id: "qr",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "The slope of PQ is −1/4. What is the slope of QR, and what does it show?",
          choices: [
            { letter: "A", text: "1/4, so PQ ⊥ QR" },
            { letter: "B", text: "4, so PQ ⊥ QR" },
            { letter: "C", text: "−4, so PQ ⊥ QR" },
            { letter: "D", text: "4, so PQ ∥ QR" }
          ],
          correct: "B"
        },
        {
          id: "pr",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "How long is diagonal PR on the plan?",
          choices: [
            { letter: "A", text: "8 units" },
            { letter: "B", text: "34 units" },
            { letter: "C", text: "√34 units" },
            { letter: "D", text: "4 units" }
          ],
          correct: "C"
        },
        {
          id: "mid",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What is the midpoint of QS?",
          choices: [
            { letter: "A", text: "(−1.5, 2.5)" },
            { letter: "B", text: "(1, −1)" },
            { letter: "C", text: "(1.5, 2.5)" },
            { letter: "D", text: "(0.5, −0.5)" }
          ],
          correct: "D"
        },
        {
          id: "square",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "All four of these facts are true. Which one, by itself, proves that PQRS is a square?",
          choices: [
            { letter: "A", text: "PR and QS bisect each other, are ≅ and are ⊥" },
            { letter: "B", text: "All four sides measure √17 units each" },
            { letter: "C", text: "PR and QS bisect each other and are ≅" },
            { letter: "D", text: "PR ⊥ QS and PR bisects QS" }
          ],
          correct: "A"
        },
        {
          id: "walk",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "To the nearest meter, how far does an archer walk going once around all four stands, from P to Q to R to S and back to P?",
          choices: [
            { letter: "A", text: "82 m" },
            { letter: "B", text: "16 m" },
            { letter: "C", text: "100 m" },
            { letter: "D", text: "41 m" }
          ],
          correct: "A"
        },
        {
          id: "reply",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Dev says PQRS is only a rhombus, because its diagonals are perpendicular. Which reply is correct?",
          choices: [
            { letter: "A", text: "Perpendicular diagonals make it a rectangle." },
            { letter: "B", text: "Its diagonals are also congruent, so it is a square." },
            { letter: "C", text: "Its diagonals are not perpendicular, so it is a kite." },
            { letter: "D", text: "A square cannot also be a rhombus." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc1-raid-tangram",
      family: "GEO",
      mode: "raid",
      title: "The Tangram Parallelogram",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A puzzle piece with 45° and 135° corners.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Parallelogram ABCD leaning to the right, with AB along the bottom; AB is 4 in, AD is 2√2 in, the angle at A is labeled 3x degrees and the angle at B is labeled 6x + 45 degrees\">" +
        "<polygon class=\"sh\" points=\"50,125 210,125 290,45 130,45\"/><path class=\"thin\" d=\"M72 125 A22 22 0 0 0 65.6 109.4\"/>" +
        "<path class=\"thin\" d=\"M221.3 113.7 A16 16 0 0 0 194 125\"/><circle class=\"dt\" cx=\"50\" cy=\"125\" r=\"3\"/><circle class=\"dt\" cx=\"210\" cy=\"125\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"290\" cy=\"45\" r=\"3\"/><circle class=\"dt\" cx=\"130\" cy=\"45\" r=\"3\"/><text x=\"40\" y=\"138\" text-anchor=\"middle\">A</text>" +
        "<text x=\"220\" y=\"138\" text-anchor=\"middle\">B</text><text x=\"301\" y=\"48\" text-anchor=\"middle\">C</text><text x=\"121\" y=\"39\" text-anchor=\"middle\">D</text>" +
        "<text x=\"130\" y=\"142\" text-anchor=\"middle\">4 in</text><text x=\"80\" y=\"74\" text-anchor=\"end\">2√2 in</text><text class=\"sm\" x=\"80\" y=\"120\" text-anchor=\"start\">(3x)°</text>" +
        "<text class=\"sm\" x=\"186\" y=\"116\" text-anchor=\"end\">(6x + 45)°</text></svg></figure>" +
        "<p class=\"geo-given\">The parallelogram piece <strong>ABCD</strong> of a tangram puzzle has <strong>AB</strong> = 4 in and <strong>AD</strong> = 2√2 in. m∠<strong>DAB</strong> = <span style=\"white-space:nowrap\">(3x)°</span> and m∠<strong>ABC</strong> = <span style=\"white-space:nowrap\">(6x + 45)°</span>.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "Which equation can be used to find x?",
          choices: [
            { letter: "A", text: "3x = 6x + 45" },
            { letter: "B", text: "3x + 6x + 45 = 360" },
            { letter: "C", text: "3x + 6x + 45 = 90" },
            { letter: "D", text: "3x + 6x + 45 = 180" }
          ],
          correct: "D"
        },
        {
          id: "bcd",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is the measure of ∠BCD on the tangram piece?",
          choices: [
            { letter: "A", text: "45°" },
            { letter: "B", text: "135°" },
            { letter: "C", text: "90°" },
            { letter: "D", text: "15°" }
          ],
          correct: "A"
        },
        {
          id: "adb",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "Diagonal BD is 2√2 in long, the same as AD. What is m∠ADB?",
          choices: [
            { letter: "A", text: "45°" },
            { letter: "B", text: "135°" },
            { letter: "C", text: "90°" },
            { letter: "D", text: "67.5°" }
          ],
          correct: "C"
        },
        {
          id: "ac",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "The piece is 2 in tall (the distance between AB and DC). How long is diagonal AC?",
          choices: [
            { letter: "A", text: "2√5 in" },
            { letter: "B", text: "2√10 in" },
            { letter: "C", text: "2√6 in" },
            { letter: "D", text: "(4 + 2√2) in" }
          ],
          correct: "B"
        },
        {
          id: "square",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Suppose a parallelogram is known to be a rectangle. Which single extra fact proves it is a square?",
          choices: [
            { letter: "A", text: "Its diagonals are congruent." },
            { letter: "B", text: "Its opposite sides are parallel." },
            { letter: "C", text: "Its diagonals are perpendicular." },
            { letter: "D", text: "Its diagonals bisect each other." }
          ],
          correct: "C"
        },
        {
          id: "nottrue",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is NOT true for piece ABCD?",
          choices: [
            { letter: "A", text: "Its diagonals bisect each other." },
            { letter: "B", text: "Its opposite sides are congruent." },
            { letter: "C", text: "∠DAB and ∠ADC are supplementary." },
            { letter: "D", text: "Its diagonals bisect its angles." }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
