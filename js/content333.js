/* SOL Labyrinth — Geometry game (family GEO), equations of circles: G.PC.4 (Virginia 2023 Geometry SOL), for the
   ring mode, Wolf Ring (art, design, music and making things), and the worms mode, Root Worms (nature and the
   outdoors). Original items only. A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in
   css/after-hours.css) and the given facts, then six questions about it. Every numeric answer was computed, and every
   distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-pc4-ring-sticker",
      family: "GEO",
      mode: "ring",
      title: "The Round Sticker",
      kind: "Equations of circles · G.PC.4",
      blurb: "A round sticker drawn on a design grid.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Design grid with x from −8 to 2 and y from −4 to 6. A shaded circle is the sticker; a gold dot marks its center, and its edge passes through grid points.\">" +
        "<line class=\"gr\" x1=\"46\" y1=\"140\" x2=\"46\" y2=\"10\"/><line class=\"gr\" x1=\"59\" y1=\"140\" x2=\"59\" y2=\"10\"/><line class=\"gr\" x1=\"72\" y1=\"140\" x2=\"72\" y2=\"10\"/><line class=\"gr\" x1=\"85\" y1=\"140\" x2=\"85\" y2=\"10\"/><line class=\"gr\" x1=\"98\" y1=\"140\" x2=\"98\" y2=\"10\"/>" +
        "<line class=\"gr\" x1=\"111\" y1=\"140\" x2=\"111\" y2=\"10\"/><line class=\"gr\" x1=\"124\" y1=\"140\" x2=\"124\" y2=\"10\"/><line class=\"gr\" x1=\"137\" y1=\"140\" x2=\"137\" y2=\"10\"/><line class=\"gr\" x1=\"150\" y1=\"140\" x2=\"150\" y2=\"10\"/>" +
        "<line class=\"gr\" x1=\"163\" y1=\"140\" x2=\"163\" y2=\"10\"/><line class=\"gr\" x1=\"176\" y1=\"140\" x2=\"176\" y2=\"10\"/><line class=\"gr\" x1=\"46\" y1=\"140\" x2=\"176\" y2=\"140\"/><line class=\"gr\" x1=\"46\" y1=\"127\" x2=\"176\" y2=\"127\"/>" +
        "<line class=\"gr\" x1=\"46\" y1=\"114\" x2=\"176\" y2=\"114\"/><line class=\"gr\" x1=\"46\" y1=\"101\" x2=\"176\" y2=\"101\"/><line class=\"gr\" x1=\"46\" y1=\"88\" x2=\"176\" y2=\"88\"/><line class=\"gr\" x1=\"46\" y1=\"75\" x2=\"176\" y2=\"75\"/><line class=\"gr\" x1=\"46\" y1=\"62\" x2=\"176\" y2=\"62\"/>" +
        "<line class=\"gr\" x1=\"46\" y1=\"49\" x2=\"176\" y2=\"49\"/><line class=\"gr\" x1=\"46\" y1=\"36\" x2=\"176\" y2=\"36\"/><line class=\"gr\" x1=\"46\" y1=\"23\" x2=\"176\" y2=\"23\"/><line class=\"gr\" x1=\"46\" y1=\"10\" x2=\"176\" y2=\"10\"/><line class=\"ax\" x1=\"46\" y1=\"88\" x2=\"176\" y2=\"88\"/>" +
        "<line class=\"ax\" x1=\"150\" y1=\"140\" x2=\"150\" y2=\"10\"/><text class=\"sm\" x=\"72\" y=\"154\" text-anchor=\"middle\">−6</text><text class=\"sm\" x=\"98\" y=\"154\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"124\" y=\"154\" text-anchor=\"middle\">−2</text>" +
        "<text class=\"sm\" x=\"176\" y=\"154\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"41\" y=\"144\" text-anchor=\"end\">−4</text><text class=\"sm\" x=\"41\" y=\"118\" text-anchor=\"end\">−2</text><text class=\"sm\" x=\"41\" y=\"66\" text-anchor=\"end\">2</text>" +
        "<text class=\"sm\" x=\"41\" y=\"40\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"41\" y=\"14\" text-anchor=\"end\">6</text><circle class=\"sh\" cx=\"111\" cy=\"75\" r=\"52\"/><circle class=\"dta\" cx=\"111\" cy=\"75\" r=\"3\"/><text class=\"sm\" x=\"194\" y=\"40\">Sticker design</text>" +
        "<text class=\"sm\" x=\"194\" y=\"58\">1 unit = 1 cm</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A designer draws a round sticker on a grid. Each unit is 1 cm. The shaded circle is the edge of the sticker, and the gold dot is its center.</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the coordinates of the center of the sticker?",
          choices: [
            { letter: "A", text: "(3, −1)" },
            { letter: "B", text: "(−3, 1)" },
            { letter: "C", text: "(1, −3)" },
            { letter: "D", text: "(−3, 5)" }
          ],
          correct: "B"
        },
        {
          id: "diameter",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "How wide is the sticker, measured straight across through its center?",
          choices: [
            { letter: "A", text: "8 cm" },
            { letter: "B", text: "4 cm" },
            { letter: "C", text: "16 cm" },
            { letter: "D", text: "2 cm" }
          ],
          correct: "A"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the sticker?",
          choices: [
            { letter: "A", text: "(x − 3)² + (y + 1)² = 16" },
            { letter: "B", text: "(x + 3)² + (y − 1)² = 4" },
            { letter: "C", text: "(x + 3)² + (y − 1)² = 64" },
            { letter: "D", text: "(x + 3)² + (y − 1)² = 16" }
          ],
          correct: "D"
        },
        {
          id: "star",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A small star is printed at (−1, 4). Where is it compared with the sticker? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Outside: 2 + 3 = 5, more than 4" },
            { letter: "B", text: "Outside: (−1 − 3)² + (4 + 1)² = 41, more than 16" },
            { letter: "C", text: "Inside: 2² + 3² = 13, less than 16" },
            { letter: "D", text: "Outside: 2² + 3² = 13, more than 4" }
          ],
          correct: "C"
        },
        {
          id: "legs",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "A right triangle has the radius from the center to a point (x, y) on the edge as its hypotenuse. Its legs follow the grid lines. Which expressions give the lengths of the legs?",
          choices: [
            { letter: "A", text: "|x + 3| and |y − 1|" },
            { letter: "B", text: "|x − 3| and |y + 1|" },
            { letter: "C", text: "|x| and |y|" },
            { letter: "D", text: "|x + 3| and |y + 1|" }
          ],
          correct: "A"
        },
        {
          id: "second",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A second sticker has the edge (x − 5)² + (y + 6)² = 28. What are its center and radius?",
          choices: [
            { letter: "A", text: "(−5, 6); r = 2√7 cm" },
            { letter: "B", text: "(5, −6); r = 28 cm" },
            { letter: "C", text: "(5, −6); r = 14 cm" },
            { letter: "D", text: "(5, −6); r = 2√7 cm" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc4-ring-wall-clock",
      family: "GEO",
      mode: "ring",
      title: "The Wall Clock",
      kind: "Equations of circles · G.PC.4",
      blurb: "The equation of a clock face, from its center to its 12.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A round clock face with tick marks, the numbers 12, 3, 6 and 9, and two hands pinned at a gold dot at its center.\"><circle class=\"thin\" cx=\"160\" cy=\"80\" r=\"71\"/>" +
        "<circle class=\"sh2\" cx=\"160\" cy=\"80\" r=\"66\"/><line class=\"thin\" x1=\"160\" y1=\"24\" x2=\"160\" y2=\"14\"/><line class=\"thin\" x1=\"190\" y1=\"28\" x2=\"193\" y2=\"22.8\"/><line class=\"thin\" x1=\"212\" y1=\"50\" x2=\"217.2\" y2=\"47\"/>" +
        "<line class=\"thin\" x1=\"216\" y1=\"80\" x2=\"226\" y2=\"80\"/><line class=\"thin\" x1=\"212\" y1=\"110\" x2=\"217.2\" y2=\"113\"/><line class=\"thin\" x1=\"190\" y1=\"132\" x2=\"193\" y2=\"137.2\"/><line class=\"thin\" x1=\"160\" y1=\"136\" x2=\"160\" y2=\"146\"/>" +
        "<line class=\"thin\" x1=\"130\" y1=\"132\" x2=\"127\" y2=\"137.2\"/><line class=\"thin\" x1=\"108\" y1=\"110\" x2=\"102.8\" y2=\"113\"/><line class=\"thin\" x1=\"104\" y1=\"80\" x2=\"94\" y2=\"80\"/><line class=\"thin\" x1=\"108\" y1=\"50\" x2=\"102.8\" y2=\"47\"/>" +
        "<line class=\"thin\" x1=\"130\" y1=\"28\" x2=\"127\" y2=\"22.8\"/><text x=\"160\" y=\"40\" text-anchor=\"middle\">12</text><text x=\"206\" y=\"85\" text-anchor=\"middle\">3</text><text x=\"160\" y=\"131\" text-anchor=\"middle\">6</text><text x=\"114\" y=\"85\" text-anchor=\"middle\">9</text>" +
        "<line class=\"ln\" x1=\"160\" y1=\"80\" x2=\"135.8\" y2=\"66\"/><line class=\"ln\" x1=\"160\" y1=\"80\" x2=\"198.1\" y2=\"58\"/><circle class=\"dta\" cx=\"160\" cy=\"80\" r=\"3\"/><text class=\"sm\" x=\"250\" y=\"140\">clock design</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a design plan in inches, the edge of a wall clock's face is (x − 4)² + (y + 5)² = 169. The hands are pinned at the center. The 12 is at the edge, straight above the center.</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Where are the hands pinned? Give the coordinates of the center of the face.",
          choices: [
            { letter: "A", text: "(−4, 5)" },
            { letter: "B", text: "(−4, −5)" },
            { letter: "C", text: "(4, −5)" },
            { letter: "D", text: "(4, 5)" }
          ],
          correct: "C"
        },
        {
          id: "hand",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A minute hand reaches from the center exactly to the edge of the face. How long is it?",
          choices: [
            { letter: "A", text: "169 in" },
            { letter: "B", text: "26 in" },
            { letter: "C", text: "84.5 in" },
            { letter: "D", text: "13 in" }
          ],
          correct: "D"
        },
        {
          id: "twelve",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "The 12 is on the edge, straight above the center. What are its coordinates?",
          choices: [
            { letter: "A", text: "(4, 8)" },
            { letter: "B", text: "(4, −18)" },
            { letter: "C", text: "(17, −5)" },
            { letter: "D", text: "(4, 164)" }
          ],
          correct: "A"
        },
        {
          id: "onEdge",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which point is on the edge of the clock face?",
          choices: [
            { letter: "A", text: "(1, 17)" },
            { letter: "B", text: "(9, 7)" },
            { letter: "C", text: "(9, 3)" },
            { letter: "D", text: "(6, −2)" }
          ],
          correct: "B"
        },
        {
          id: "pythag",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "A right triangle has its hypotenuse from the center of the face to the point (−8, 0), with one horizontal leg and one vertical leg. Which equation gives that distance d?",
          choices: [
            { letter: "A", text: "4² + 5² = d²" },
            { letter: "B", text: "8² + 0² = d²" },
            { letter: "C", text: "12 + 5 = d" },
            { letter: "D", text: "12² + 5² = d²" }
          ],
          correct: "D"
        },
        {
          id: "small",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A desk clock has the same center and a diameter of 10 in. Which equation describes the edge of its face?",
          choices: [
            { letter: "A", text: "(x − 4)² + (y + 5)² = 25" },
            { letter: "B", text: "(x − 4)² + (y + 5)² = 100" },
            { letter: "C", text: "(x − 4)² + (y + 5)² = 5" },
            { letter: "D", text: "(x + 4)² + (y − 5)² = 25" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc4-ring-spotlight",
      family: "GEO",
      mode: "ring",
      title: "The Stage Spotlight",
      kind: "Equations of circles · G.PC.4",
      blurb: "Two tape marks on a stage are the ends of a diameter of a spotlight's circle.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A stage seen from above. A shaded circle of light has points A and B on its edge, and a dashed gold segment AB crosses the circle through its center.\">" +
        "<rect class=\"thin\" x=\"30\" y=\"8\" width=\"260\" height=\"142\" rx=\"4\"/><line class=\"ln\" x1=\"30\" y1=\"150\" x2=\"290\" y2=\"150\"/><circle class=\"sh\" cx=\"150\" cy=\"78\" r=\"60\"/><line class=\"ac dash\" x1=\"102\" y1=\"114\" x2=\"198\" y2=\"42\"/>" +
        "<circle class=\"dt\" cx=\"102\" cy=\"114\" r=\"3\"/><circle class=\"dt\" cx=\"198\" cy=\"42\" r=\"3\"/><text x=\"94\" y=\"128\" text-anchor=\"end\">A</text><text x=\"206\" y=\"38\">B</text><text class=\"sm\" x=\"160\" y=\"163\" text-anchor=\"middle\">front of stage</text>" +
        "<text class=\"sm\" x=\"38\" y=\"26\">stage plan</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a stage plan (units in feet), a spotlight lights a circle on the floor. Tape marks <strong>A</strong>(−5, 2) and <strong>B</strong>(3, 8) are the ends of a diameter of the lit circle.</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Where should the light be aimed? Give the center of the lit circle.",
          choices: [
            { letter: "A", text: "(−1, 5)" },
            { letter: "B", text: "(−2, 10)" },
            { letter: "C", text: "(4, 3)" },
            { letter: "D", text: "(8, 6)" }
          ],
          correct: "A"
        },
        {
          id: "radius",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "What is the radius of the lit circle?",
          choices: [
            { letter: "A", text: "10 ft" },
            { letter: "B", text: "25 ft" },
            { letter: "C", text: "5 ft" },
            { letter: "D", text: "7 ft" }
          ],
          correct: "C"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the lit circle?",
          choices: [
            { letter: "A", text: "(x − 1)² + (y + 5)² = 25" },
            { letter: "B", text: "(x + 1)² + (y − 5)² = 25" },
            { letter: "C", text: "(x + 1)² + (y − 5)² = 100" },
            { letter: "D", text: "(x + 5)² + (y − 2)² = 25" }
          ],
          correct: "B"
        },
        {
          id: "actor",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "An actor stands at (1, 1). Is she in the light? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: (1 − 1)² + (1 + 5)² = 36, more than 25" },
            { letter: "B", text: "No: 2 + 4 = 6 ft, more than 5 ft" },
            { letter: "C", text: "No: (1 + 1)² + (1 − 5)² = 20, more than 5" },
            { letter: "D", text: "Yes: (1 + 1)² + (1 − 5)² = 20, less than 25" }
          ],
          correct: "D"
        },
        {
          id: "legs",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Rae checks that B is on the circle with a right triangle. Its hypotenuse runs from the center of the circle to B, and its legs are horizontal and vertical. How long are the legs?",
          choices: [
            { letter: "A", text: "8 ft and 6 ft" },
            { letter: "B", text: "4 ft and 3 ft" },
            { letter: "C", text: "3 ft and 8 ft" },
            { letter: "D", text: "4 ft and 13 ft" }
          ],
          correct: "B"
        },
        {
          id: "follow",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A small follow spot is centered at B. Its edge passes through (4, 5). Which equation describes its edge?",
          choices: [
            { letter: "A", text: "(x − 3)² + (y − 8)² = √10" },
            { letter: "B", text: "(x + 3)² + (y + 8)² = 10" },
            { letter: "C", text: "(x − 3)² + (y − 8)² = 10" },
            { letter: "D", text: "(x − 4)² + (y − 5)² = 10" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc4-ring-drum-rug",
      family: "GEO",
      mode: "ring",
      title: "The Drum Rug",
      kind: "Equations of circles · G.PC.4",
      blurb: "A round rug under a drum kit, from its center and one point on its edge.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Floor plan of a music room 14 ft by 13 ft on a 1-foot grid, with the x-axis numbered along the bottom wall. A shaded round rug has its center at the gold point D, and point P is on its edge.\">" +
        "<line class=\"gr\" x1=\"30\" y1=\"150\" x2=\"30\" y2=\"7\"/><line class=\"gr\" x1=\"41\" y1=\"150\" x2=\"41\" y2=\"7\"/><line class=\"gr\" x1=\"52\" y1=\"150\" x2=\"52\" y2=\"7\"/><line class=\"gr\" x1=\"63\" y1=\"150\" x2=\"63\" y2=\"7\"/><line class=\"gr\" x1=\"74\" y1=\"150\" x2=\"74\" y2=\"7\"/>" +
        "<line class=\"gr\" x1=\"85\" y1=\"150\" x2=\"85\" y2=\"7\"/><line class=\"gr\" x1=\"96\" y1=\"150\" x2=\"96\" y2=\"7\"/><line class=\"gr\" x1=\"107\" y1=\"150\" x2=\"107\" y2=\"7\"/><line class=\"gr\" x1=\"118\" y1=\"150\" x2=\"118\" y2=\"7\"/><line class=\"gr\" x1=\"129\" y1=\"150\" x2=\"129\" y2=\"7\"/>" +
        "<line class=\"gr\" x1=\"140\" y1=\"150\" x2=\"140\" y2=\"7\"/><line class=\"gr\" x1=\"151\" y1=\"150\" x2=\"151\" y2=\"7\"/><line class=\"gr\" x1=\"162\" y1=\"150\" x2=\"162\" y2=\"7\"/><line class=\"gr\" x1=\"173\" y1=\"150\" x2=\"173\" y2=\"7\"/><line class=\"gr\" x1=\"184\" y1=\"150\" x2=\"184\" y2=\"7\"/>" +
        "<line class=\"gr\" x1=\"30\" y1=\"150\" x2=\"184\" y2=\"150\"/><line class=\"gr\" x1=\"30\" y1=\"139\" x2=\"184\" y2=\"139\"/><line class=\"gr\" x1=\"30\" y1=\"128\" x2=\"184\" y2=\"128\"/><line class=\"gr\" x1=\"30\" y1=\"117\" x2=\"184\" y2=\"117\"/>" +
        "<line class=\"gr\" x1=\"30\" y1=\"106\" x2=\"184\" y2=\"106\"/><line class=\"gr\" x1=\"30\" y1=\"95\" x2=\"184\" y2=\"95\"/><line class=\"gr\" x1=\"30\" y1=\"84\" x2=\"184\" y2=\"84\"/><line class=\"gr\" x1=\"30\" y1=\"73\" x2=\"184\" y2=\"73\"/><line class=\"gr\" x1=\"30\" y1=\"62\" x2=\"184\" y2=\"62\"/>" +
        "<line class=\"gr\" x1=\"30\" y1=\"51\" x2=\"184\" y2=\"51\"/><line class=\"gr\" x1=\"30\" y1=\"40\" x2=\"184\" y2=\"40\"/><line class=\"gr\" x1=\"30\" y1=\"29\" x2=\"184\" y2=\"29\"/><line class=\"gr\" x1=\"30\" y1=\"18\" x2=\"184\" y2=\"18\"/><line class=\"gr\" x1=\"30\" y1=\"7\" x2=\"184\" y2=\"7\"/>" +
        "<rect class=\"ln\" x=\"30\" y=\"7\" width=\"154\" height=\"143\"/><text class=\"sm\" x=\"30\" y=\"164\" text-anchor=\"middle\">0</text><text class=\"sm\" x=\"52\" y=\"164\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"74\" y=\"164\" text-anchor=\"middle\">4</text>" +
        "<text class=\"sm\" x=\"96\" y=\"164\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"118\" y=\"164\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"140\" y=\"164\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"162\" y=\"164\" text-anchor=\"middle\">12</text>" +
        "<text class=\"sm\" x=\"184\" y=\"164\" text-anchor=\"middle\">14</text><circle class=\"sh2\" cx=\"107\" cy=\"84\" r=\"56.1\"/><circle class=\"dta\" cx=\"107\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"118\" cy=\"29\" r=\"3\"/><text x=\"101\" y=\"100\" text-anchor=\"end\">D</text>" +
        "<text x=\"124\" y=\"24\">P</text><text class=\"sm\" x=\"200\" y=\"40\">Music room</text><text class=\"sm\" x=\"200\" y=\"58\">1 unit = 1 ft</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a floor plan of a music room (units in feet), a round rug sits under the drum kit. Its center is <strong>D</strong>(7, 6), and <strong>P</strong>(8, 11) is on its edge.</p>",
      claims: [
        {
          id: "expr",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives the radius of the rug, using the distance formula?",
          choices: [
            { letter: "A", text: "√((8 + 7)² + (11 + 6)²)" },
            { letter: "B", text: "(8 − 7)² + (11 − 6)²" },
            { letter: "C", text: "√((8 − 7) + (11 − 6))" },
            { letter: "D", text: "√((8 − 7)² + (11 − 6)²)" }
          ],
          correct: "D"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the rug?",
          choices: [
            { letter: "A", text: "(x + 7)² + (y + 6)² = 26" },
            { letter: "B", text: "(x − 7)² + (y − 6)² = 26" },
            { letter: "C", text: "(x − 7)² + (y − 6)² = √26" },
            { letter: "D", text: "(x − 8)² + (y − 11)² = 26" }
          ],
          correct: "B"
        },
        {
          id: "radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "To the nearest tenth of a foot, what is the radius of the rug?",
          choices: [
            { letter: "A", text: "5.1 ft" },
            { letter: "B", text: "6.0 ft" },
            { letter: "C", text: "13.0 ft" },
            { letter: "D", text: "10.2 ft" }
          ],
          correct: "A"
        },
        {
          id: "notTrue",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which statement about the rug is NOT true?",
          choices: [
            { letter: "A", text: "(2, 5) is on the edge of the rug." },
            { letter: "B", text: "(10, 9) is inside the rug." },
            { letter: "C", text: "(11, 2) is on the edge of the rug." },
            { letter: "D", text: "(4, 3) is inside the rug." }
          ],
          correct: "C"
        },
        {
          id: "small",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A smaller rug has the same center. Its edge passes through (7, 9). Which equation describes its edge?",
          choices: [
            { letter: "A", text: "(x − 7)² + (y − 6)² = 9" },
            { letter: "B", text: "(x − 7)² + (y − 9)² = 9" },
            { letter: "C", text: "(x − 7)² + (y − 6)² = 3" },
            { letter: "D", text: "(x − 7)² + (y − 6)² = 81" }
          ],
          correct: "A"
        },
        {
          id: "lee",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Lee says the edge of the rug is every point that is 26 ft from D. What is his mistake?",
          choices: [
            { letter: "A", text: "The edge is every point 26 ft from P." },
            { letter: "B", text: "26 is r², so the edge is √26 ft from D." },
            { letter: "C", text: "26 is the diameter, so the edge is 13 ft from D." },
            { letter: "D", text: "The edge is 26² ft from D." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc4-ring-pottery-wheel",
      family: "GEO",
      mode: "ring",
      title: "The Pottery Wheel",
      kind: "Equations of circles · G.PC.4",
      blurb: "A right triangle inside a potter's wheel head gives its equation.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Coordinate axes with a shaded circle, the wheel head, centered at the gold point C. P is on the edge of the wheel, on the x-axis. Q is directly below P and level with C. Dashed legs CQ and QP and the gold radius CP form a right triangle with the right angle at Q.\">" +
        "<line class=\"ax\" x1=\"14\" y1=\"56\" x2=\"306\" y2=\"56\"/><line class=\"ax\" x1=\"132\" y1=\"4\" x2=\"132\" y2=\"166\"/><text class=\"sm\" x=\"306\" y=\"50\" text-anchor=\"end\">x</text><text class=\"sm\" x=\"138\" y=\"14\">y</text><circle class=\"sh2\" cx=\"150\" cy=\"92\" r=\"72.6\"/>" +
        "<line class=\"thin dash\" x1=\"150\" y1=\"92\" x2=\"213\" y2=\"92\"/><line class=\"thin dash\" x1=\"213\" y1=\"92\" x2=\"213\" y2=\"56\"/><line class=\"ac\" x1=\"150\" y1=\"92\" x2=\"213\" y2=\"56\"/><path class=\"thin\" d=\"M206 92 L206 85 L213 85\"/>" +
        "<circle class=\"dta\" cx=\"150\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"213\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"213\" cy=\"56\" r=\"3\"/><text x=\"144\" y=\"108\" text-anchor=\"end\">C</text><text x=\"209\" y=\"108\" text-anchor=\"end\">Q</text><text x=\"220\" y=\"50\">P</text>" +
        "<text class=\"sm\" x=\"232\" y=\"150\">wheel head</text><text class=\"sm\" x=\"232\" y=\"164\">(top view)</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A potter's plan shows the round wheel head from above (units in inches). Its center is <strong>C</strong>(2, −4), and <strong>P</strong>(9, 0) is on its edge. Point <strong>Q</strong>(9, −4) makes right triangle <strong>CQP</strong>.</p>",
      claims: [
        {
          id: "leg",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "How long is leg CQ?",
          choices: [
            { letter: "A", text: "11 in" },
            { letter: "B", text: "7 in" },
            { letter: "C", text: "9 in" },
            { letter: "D", text: "4 in" }
          ],
          correct: "B"
        },
        {
          id: "pythag",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which equation does the Pythagorean theorem give for triangle CQP, where r = CP?",
          choices: [
            { letter: "A", text: "7 + 4 = r" },
            { letter: "B", text: "7² − 4² = r²" },
            { letter: "C", text: "7² + 4² = r²" },
            { letter: "D", text: "11² + 4² = r²" }
          ],
          correct: "C"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the wheel head?",
          choices: [
            { letter: "A", text: "(x − 2)² + (y + 4)² = 65" },
            { letter: "B", text: "(x + 2)² + (y − 4)² = 65" },
            { letter: "C", text: "(x − 2)² + (y + 4)² = 121" },
            { letter: "D", text: "(x − 9)² + y² = 65" }
          ],
          correct: "A"
        },
        {
          id: "radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "To the nearest tenth of an inch, what is the radius of the wheel head?",
          choices: [
            { letter: "A", text: "32.5 in" },
            { letter: "B", text: "11.0 in" },
            { letter: "C", text: "16.1 in" },
            { letter: "D", text: "8.1 in" }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Why does every point (x, y) on the edge of the wheel head fit (x − 2)² + (y + 4)² = 65?",
          choices: [
            { letter: "A", text: "It is 65 in from C; square the distance formula." },
            { letter: "B", text: "Its x and y distances from C add to √65 in." },
            { letter: "C", text: "It is √65 in from C; square the distance formula." },
            { letter: "D", text: "It is √65 in from P; square the distance formula." }
          ],
          correct: "C"
        },
        {
          id: "tool",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A trimming tool rests at (6, −9). Is it on the wheel head? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: (6 − 2)² + (−9 + 4)² = 41, less than 65" },
            { letter: "B", text: "No: 4 + 5 = 9 in, more than the radius" },
            { letter: "C", text: "No: (6 + 2)² + (−9 − 4)² = 233, more than 65" },
            { letter: "D", text: "No: 41 is more than √65, the radius" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc4-ring-record",
      family: "GEO",
      mode: "ring",
      title: "The Record Design",
      kind: "Equations of circles · G.PC.4",
      blurb: "Completing the square finds the center and size of a record.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Coordinate axes with no tick marks. A record is drawn as a shaded circle with grooves, a small paper label circle in the middle and a gold spindle dot at its center. The axes cross the record.\">" +
        "<line class=\"ax\" x1=\"14\" y1=\"120\" x2=\"306\" y2=\"120\"/><line class=\"ax\" x1=\"60\" y1=\"4\" x2=\"60\" y2=\"164\"/><text class=\"sm\" x=\"306\" y=\"114\" text-anchor=\"end\">x</text><text class=\"sm\" x=\"54\" y=\"14\" text-anchor=\"end\">y</text>" +
        "<circle class=\"sh2\" cx=\"110\" cy=\"90\" r=\"70\"/><circle class=\"thin\" cx=\"110\" cy=\"90\" r=\"58\"/><circle class=\"thin\" cx=\"110\" cy=\"90\" r=\"46\"/><circle class=\"thin\" cx=\"110\" cy=\"90\" r=\"34\"/><circle class=\"sh\" cx=\"110\" cy=\"90\" r=\"20\"/>" +
        "<circle class=\"dta\" cx=\"110\" cy=\"90\" r=\"3\"/><text class=\"sm\" x=\"196\" y=\"26\">record design</text><text class=\"sm\" x=\"196\" y=\"42\">(no scale marks)</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A design app draws a record (units in inches). The edge of the record is x² + y² − 10x − 6y − 15 = 0. The spindle hole is at the center.</p>",
      claims: [
        {
          id: "square",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Dee groups x² − 10x and y² − 6y. Which trinomial is a perfect square?",
          choices: [
            { letter: "A", text: "x² − 10x + 5" },
            { letter: "B", text: "x² − 10x + 100" },
            { letter: "C", text: "x² − 10x + 25" },
            { letter: "D", text: "x² − 10x − 25" }
          ],
          correct: "C"
        },
        {
          id: "centerRadius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the center and radius of the record?",
          choices: [
            { letter: "A", text: "(5, 3); r = 7 in" },
            { letter: "B", text: "(−5, −3); r = 7 in" },
            { letter: "C", text: "(5, 3); r = 49 in" },
            { letter: "D", text: "(5, 3); r = √15 in" }
          ],
          correct: "A"
        },
        {
          id: "omar",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Omar writes (x − 5)² + (y − 3)² = −15 + 25 + 9 = 19. What is his mistake?",
          choices: [
            { letter: "A", text: "He should add 10 and 6, not 25 and 9." },
            { letter: "B", text: "He should subtract 25 and 9 on the right side." },
            { letter: "C", text: "He should write (x + 5)² + (y + 3)²." },
            { letter: "D", text: "The −15 moves to the right side as +15." }
          ],
          correct: "D"
        },
        {
          id: "label",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "The paper label is a circle with the same center as the record and a diameter of 4 in. Which equation describes its edge?",
          choices: [
            { letter: "A", text: "(x − 5)² + (y − 3)² = 16" },
            { letter: "B", text: "(x − 5)² + (y − 3)² = 4" },
            { letter: "C", text: "(x − 5)² + (y − 3)² = 2" },
            { letter: "D", text: "(x + 5)² + (y + 3)² = 4" }
          ],
          correct: "B"
        },
        {
          id: "speck",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A dust speck sits on the record at (1, 7). How far is it from the spindle hole?",
          choices: [
            { letter: "A", text: "8 in" },
            { letter: "B", text: "32 in" },
            { letter: "C", text: "2√13 in" },
            { letter: "D", text: "4√2 in" }
          ],
          correct: "D"
        },
        {
          id: "inequality",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "A point (x, y) is on the record when its distance from the center is 7 in or less. Squaring the distance formula, which inequality says this?",
          choices: [
            { letter: "A", text: "(x − 5)² + (y − 3)² ≤ 7" },
            { letter: "B", text: "(x − 5)² + (y − 3)² ≥ 49" },
            { letter: "C", text: "(x − 5)² + (y − 3)² ≤ 49" },
            { letter: "D", text: "(x + 5)² + (y + 3)² ≤ 49" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc4-ring-speaker",
      family: "GEO",
      mode: "ring",
      title: "The Speaker Cone",
      kind: "Equations of circles · G.PC.4",
      blurb: "A speaker cone and its dust cap share a center.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"A speaker seen from the front: a large shaded circle, the cone, and a small gold-shaded circle, the dust cap, in its middle. Gold segment PQ runs across the dust cap through its center, with P and Q on the cap's edge.\">" +
        "<rect class=\"thin\" x=\"84\" y=\"4\" width=\"152\" height=\"156\" rx=\"10\"/><circle class=\"thin\" cx=\"160\" cy=\"82\" r=\"72\"/><circle class=\"sh2\" cx=\"160\" cy=\"82\" r=\"66\"/><circle class=\"sh\" cx=\"160\" cy=\"82\" r=\"24.6\"/><line class=\"ac\" x1=\"149\" y1=\"104\" x2=\"171\" y2=\"60\"/>" +
        "<circle class=\"dt\" cx=\"149\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"171\" cy=\"60\" r=\"3\"/><text x=\"143\" y=\"118\" text-anchor=\"end\">P</text><text x=\"177\" y=\"56\">Q</text><text class=\"sm\" x=\"246\" y=\"30\">speaker,</text><text class=\"sm\" x=\"246\" y=\"46\">front view</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a speaker design (units in cm), the edge of the cone is x² + y² + 4x − 12y + 4 = 0. The dust cap is a circle with diameter <strong>PQ</strong>, from <strong>P</strong>(−3, 4) to <strong>Q</strong>(−1, 8).</p>",
      claims: [
        {
          id: "blank",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Kim completes the square for the cone: (x² + 4x + 4) + (y² − 12y + 36) = ____. What number goes in the blank?",
          choices: [
            { letter: "A", text: "44" },
            { letter: "B", text: "36" },
            { letter: "C", text: "40" },
            { letter: "D", text: "−4" }
          ],
          correct: "B"
        },
        {
          id: "cone",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the center and radius of the cone?",
          choices: [
            { letter: "A", text: "(2, −6); r = 6 cm" },
            { letter: "B", text: "(−2, 6); r = 36 cm" },
            { letter: "C", text: "(−2, 6); r = 2 cm" },
            { letter: "D", text: "(−2, 6); r = 6 cm" }
          ],
          correct: "D"
        },
        {
          id: "cap",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the dust cap?",
          choices: [
            { letter: "A", text: "(x + 2)² + (y − 6)² = 20" },
            { letter: "B", text: "(x + 3)² + (y − 4)² = 5" },
            { letter: "C", text: "(x + 2)² + (y − 6)² = 5" },
            { letter: "D", text: "(x − 2)² + (y + 6)² = 5" }
          ],
          correct: "C"
        },
        {
          id: "pq",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives the length of PQ, the diameter of the dust cap?",
          choices: [
            { letter: "A", text: "√((−1 + 3)² + (8 − 4)²)" },
            { letter: "B", text: "√((−1 − 3)² + (8 − 4)²)" },
            { letter: "C", text: "(−1 + 3)² + (8 − 4)²" },
            { letter: "D", text: "√((−1 + 3)² − (8 − 4)²)" }
          ],
          correct: "A"
        },
        {
          id: "felt",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A felt dot is glued at (2, 9). Where is it? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Off the cone: (2 − 2)² + (9 + 6)² = 225" },
            { letter: "B", text: "On the cone, off the cap: 25 is between 5 and 36" },
            { letter: "C", text: "Off the cone: 4 + 3 = 7 cm, more than 6 cm" },
            { letter: "D", text: "Off the cone: 25 is more than 6" }
          ],
          correct: "B"
        },
        {
          id: "bigger",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A larger speaker uses the same center. Its cone's edge passes through (4, 13). Which equation describes that edge?",
          choices: [
            { letter: "A", text: "(x + 2)² + (y − 6)² = 85" },
            { letter: "B", text: "(x − 4)² + (y − 13)² = 85" },
            { letter: "C", text: "(x + 2)² + (y − 6)² = √85" },
            { letter: "D", text: "(x − 2)² + (y + 6)² = 85" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc4-worms-sprinkler",
      family: "GEO",
      mode: "worms",
      title: "The Garden Sprinkler",
      kind: "Equations of circles · G.PC.4",
      blurb: "A sprinkler wets a circle on a garden grid.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"Garden grid with x from −1 to 11 and y from −4 to 8. A blue shaded circle shows the wet ground; the sprinkler is a gold dot at its center, and the edge passes through grid points.\">" +
        "<line class=\"gr\" x1=\"40\" y1=\"144\" x2=\"40\" y2=\"12\"/><line class=\"gr\" x1=\"51\" y1=\"144\" x2=\"51\" y2=\"12\"/><line class=\"gr\" x1=\"62\" y1=\"144\" x2=\"62\" y2=\"12\"/><line class=\"gr\" x1=\"73\" y1=\"144\" x2=\"73\" y2=\"12\"/><line class=\"gr\" x1=\"84\" y1=\"144\" x2=\"84\" y2=\"12\"/>" +
        "<line class=\"gr\" x1=\"95\" y1=\"144\" x2=\"95\" y2=\"12\"/><line class=\"gr\" x1=\"106\" y1=\"144\" x2=\"106\" y2=\"12\"/><line class=\"gr\" x1=\"117\" y1=\"144\" x2=\"117\" y2=\"12\"/><line class=\"gr\" x1=\"128\" y1=\"144\" x2=\"128\" y2=\"12\"/>" +
        "<line class=\"gr\" x1=\"139\" y1=\"144\" x2=\"139\" y2=\"12\"/><line class=\"gr\" x1=\"150\" y1=\"144\" x2=\"150\" y2=\"12\"/><line class=\"gr\" x1=\"161\" y1=\"144\" x2=\"161\" y2=\"12\"/><line class=\"gr\" x1=\"172\" y1=\"144\" x2=\"172\" y2=\"12\"/>" +
        "<line class=\"gr\" x1=\"40\" y1=\"144\" x2=\"172\" y2=\"144\"/><line class=\"gr\" x1=\"40\" y1=\"133\" x2=\"172\" y2=\"133\"/><line class=\"gr\" x1=\"40\" y1=\"122\" x2=\"172\" y2=\"122\"/><line class=\"gr\" x1=\"40\" y1=\"111\" x2=\"172\" y2=\"111\"/>" +
        "<line class=\"gr\" x1=\"40\" y1=\"100\" x2=\"172\" y2=\"100\"/><line class=\"gr\" x1=\"40\" y1=\"89\" x2=\"172\" y2=\"89\"/><line class=\"gr\" x1=\"40\" y1=\"78\" x2=\"172\" y2=\"78\"/><line class=\"gr\" x1=\"40\" y1=\"67\" x2=\"172\" y2=\"67\"/><line class=\"gr\" x1=\"40\" y1=\"56\" x2=\"172\" y2=\"56\"/>" +
        "<line class=\"gr\" x1=\"40\" y1=\"45\" x2=\"172\" y2=\"45\"/><line class=\"gr\" x1=\"40\" y1=\"34\" x2=\"172\" y2=\"34\"/><line class=\"gr\" x1=\"40\" y1=\"23\" x2=\"172\" y2=\"23\"/><line class=\"gr\" x1=\"40\" y1=\"12\" x2=\"172\" y2=\"12\"/><line class=\"ax\" x1=\"40\" y1=\"100\" x2=\"172\" y2=\"100\"/>" +
        "<line class=\"ax\" x1=\"51\" y1=\"144\" x2=\"51\" y2=\"12\"/><text class=\"sm\" x=\"73\" y=\"158\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"95\" y=\"158\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"117\" y=\"158\" text-anchor=\"middle\">6</text>" +
        "<text class=\"sm\" x=\"139\" y=\"158\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"161\" y=\"158\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"35\" y=\"148\" text-anchor=\"end\">−4</text><text class=\"sm\" x=\"35\" y=\"126\" text-anchor=\"end\">−2</text>" +
        "<text class=\"sm\" x=\"35\" y=\"82\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"35\" y=\"60\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"35\" y=\"38\" text-anchor=\"end\">6</text><text class=\"sm\" x=\"35\" y=\"16\" text-anchor=\"end\">8</text>" +
        "<circle class=\"sh2\" cx=\"106\" cy=\"78\" r=\"55\"/><circle class=\"dta\" cx=\"106\" cy=\"78\" r=\"3\"/><text class=\"sm\" x=\"196\" y=\"40\">Vegetable garden</text><text class=\"sm\" x=\"196\" y=\"58\">1 unit = 1 ft</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A sprinkler sits in a vegetable garden drawn on a grid. Each unit is 1 ft. The shaded circle is the ground it wets, and the gold dot is the sprinkler.</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the coordinates of the sprinkler?",
          choices: [
            { letter: "A", text: "(2, 5)" },
            { letter: "B", text: "(5, 7)" },
            { letter: "C", text: "(10, 2)" },
            { letter: "D", text: "(5, 2)" }
          ],
          correct: "D"
        },
        {
          id: "reach",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "How far does the water reach from the sprinkler?",
          choices: [
            { letter: "A", text: "10 ft" },
            { letter: "B", text: "5 ft" },
            { letter: "C", text: "25 ft" },
            { letter: "D", text: "2.5 ft" }
          ],
          correct: "B"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the wet circle?",
          choices: [
            { letter: "A", text: "(x − 5)² + (y − 2)² = 25" },
            { letter: "B", text: "(x + 5)² + (y + 2)² = 25" },
            { letter: "C", text: "(x − 5)² + (y − 2)² = 5" },
            { letter: "D", text: "(x − 2)² + (y − 5)² = 25" }
          ],
          correct: "A"
        },
        {
          id: "plants",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which plant is inside the wet circle?",
          choices: [
            { letter: "A", text: "Pepper at (1, 6)" },
            { letter: "B", text: "Bean at (9, −2)" },
            { letter: "C", text: "Tomato at (8, 5)" },
            { letter: "D", text: "Squash at (10, 4)" }
          ],
          correct: "C"
        },
        {
          id: "pythag",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "A right triangle has its hypotenuse from the sprinkler to the point (8, 6), with one horizontal leg and one vertical leg. Which equation gives that distance d?",
          choices: [
            { letter: "A", text: "3² + 4² = d²" },
            { letter: "B", text: "8² + 6² = d²" },
            { letter: "C", text: "3 + 4 = d" },
            { letter: "D", text: "4² − 3² = d²" }
          ],
          correct: "A"
        },
        {
          id: "second",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A second sprinkler is at (−3, 4). It sprays water up to 7 ft away. Which equation describes the edge of its wet circle?",
          choices: [
            { letter: "A", text: "(x + 3)² + (y − 4)² = 7" },
            { letter: "B", text: "(x + 3)² + (y − 4)² = 196" },
            { letter: "C", text: "(x + 3)² + (y − 4)² = 49" },
            { letter: "D", text: "(x − 3)² + (y + 4)² = 49" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc4-worms-fairy-ring",
      family: "GEO",
      mode: "worms",
      title: "The Fairy Ring",
      kind: "Equations of circles · G.PC.4",
      blurb: "Mushrooms grow in a ring on a meadow.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A meadow seen from above with tufts of grass and mushrooms growing in a ring along a dashed circle.\"><circle class=\"thin dash\" cx=\"160\" cy=\"80\" r=\"62\"/>" +
        "<line class=\"thin\" x1=\"220.8\" y1=\"92.3\" x2=\"220.8\" y2=\"97.3\"/><path class=\"sh\" d=\"M214.8 92.3 A6 6 0 0 1 226.8 92.3 Z\"/><line class=\"thin\" x1=\"201.9\" y1=\"125.7\" x2=\"201.9\" y2=\"130.7\"/><path class=\"sh\" d=\"M195.9 125.7 A6 6 0 0 1 207.9 125.7 Z\"/>" +
        "<line class=\"thin\" x1=\"167.1\" y1=\"141.6\" x2=\"167.1\" y2=\"146.6\"/><path class=\"sh\" d=\"M161.1 141.6 A6 6 0 0 1 173.1 141.6 Z\"/><line class=\"thin\" x1=\"129.5\" y1=\"134\" x2=\"129.5\" y2=\"139\"/><path class=\"sh\" d=\"M123.5 134 A6 6 0 0 1 135.5 134 Z\"/>" +
        "<line class=\"thin\" x1=\"103.6\" y1=\"105.8\" x2=\"103.6\" y2=\"110.8\"/><path class=\"sh\" d=\"M97.6 105.8 A6 6 0 0 1 109.6 105.8 Z\"/><line class=\"thin\" x1=\"99.2\" y1=\"67.7\" x2=\"99.2\" y2=\"72.7\"/><path class=\"sh\" d=\"M93.2 67.7 A6 6 0 0 1 105.2 67.7 Z\"/>" +
        "<line class=\"thin\" x1=\"118.1\" y1=\"34.3\" x2=\"118.1\" y2=\"39.3\"/><path class=\"sh\" d=\"M112.1 34.3 A6 6 0 0 1 124.1 34.3 Z\"/><line class=\"thin\" x1=\"152.9\" y1=\"18.4\" x2=\"152.9\" y2=\"23.4\"/><path class=\"sh\" d=\"M146.9 18.4 A6 6 0 0 1 158.9 18.4 Z\"/>" +
        "<line class=\"thin\" x1=\"190.5\" y1=\"26\" x2=\"190.5\" y2=\"31\"/><path class=\"sh\" d=\"M184.5 26 A6 6 0 0 1 196.5 26 Z\"/><line class=\"thin\" x1=\"216.4\" y1=\"54.2\" x2=\"216.4\" y2=\"59.2\"/><path class=\"sh\" d=\"M210.4 54.2 A6 6 0 0 1 222.4 54.2 Z\"/>" +
        "<path class=\"thin\" d=\"M35 30 L38 23 M40 30 L40 21 M45 30 L42 23\"/><path class=\"thin\" d=\"M271 40 L274 33 M276 40 L276 31 M281 40 L278 33\"/><path class=\"thin\" d=\"M47 140 L50 133 M52 140 L52 131 M57 140 L54 133\"/>" +
        "<path class=\"thin\" d=\"M265 132 L268 125 M270 132 L270 123 M275 132 L272 125\"/><path class=\"thin\" d=\"M173 106 L176 99 M178 106 L178 97 M183 106 L180 99\"/><text class=\"sm\" x=\"250\" y=\"154\">meadow</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">Mushrooms in a meadow grow in a circle called a fairy ring. On a map of the meadow (units in meters), the ring is (x + 1)² + (y + 6)² = 100.</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the coordinates of the center of the fairy ring?",
          choices: [
            { letter: "A", text: "(1, 6)" },
            { letter: "B", text: "(−6, −1)" },
            { letter: "C", text: "(−1, −6)" },
            { letter: "D", text: "(−1, 6)" }
          ],
          correct: "C"
        },
        {
          id: "width",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "How wide is the fairy ring, measured straight across through its center?",
          choices: [
            { letter: "A", text: "20 m" },
            { letter: "B", text: "10 m" },
            { letter: "C", text: "100 m" },
            { letter: "D", text: "50 m" }
          ],
          correct: "A"
        },
        {
          id: "mushroom",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which point is on the fairy ring?",
          choices: [
            { letter: "A", text: "(7, 14)" },
            { letter: "B", text: "(5, 2)" },
            { letter: "C", text: "(9, 4)" },
            { letter: "D", text: "(3, 0)" }
          ],
          correct: "B"
        },
        {
          id: "distance",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives the distance from the center of the ring to a mushroom at (−7, 2)?",
          choices: [
            { letter: "A", text: "√((−7 − 1)² + (2 − 6)²)" },
            { letter: "B", text: "(−7 + 1)² + (2 + 6)²" },
            { letter: "C", text: "√((−7 + 1) + (2 + 6))" },
            { letter: "D", text: "√((−7 + 1)² + (2 + 6)²)" }
          ],
          correct: "D"
        },
        {
          id: "grow",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "The ring grows outward 1 m each year, and its center stays put. Which equation describes the ring 2 years from now?",
          choices: [
            { letter: "A", text: "(x + 1)² + (y + 6)² = 102" },
            { letter: "B", text: "(x + 1)² + (y + 6)² = 104" },
            { letter: "C", text: "(x + 1)² + (y + 6)² = 144" },
            { letter: "D", text: "(x + 1)² + (y + 6)² = 12" }
          ],
          correct: "C"
        },
        {
          id: "pack",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A hiker sets her pack down at (7, −8). Where is it? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Outside: (7 − 1)² + (−8 − 6)² = 232" },
            { letter: "B", text: "Inside: (7 + 1)² + (−8 + 6)² = 68, less than 100" },
            { letter: "C", text: "On the ring: it is 8 + 2 = 10 m from the center" },
            { letter: "D", text: "Outside: 68 is more than 10" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc4-worms-oak-canopy",
      family: "GEO",
      mode: "worms",
      title: "The Oak Canopy",
      kind: "Equations of circles · G.PC.4",
      blurb: "A tree's round canopy, and a root zone twice as wide.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Map of an oak seen from above: a shaded circle is the canopy, centered at the trunk T, with a larger dashed circle around it for the root zone. P is on the edge of the canopy. Q is level with T and directly below P; dashed legs TQ and QP and the gold segment TP form a right triangle with the right angle at Q.\">" +
        "<circle class=\"thin dash\" cx=\"160\" cy=\"84\" r=\"73.8\"/><circle class=\"sh\" cx=\"160\" cy=\"84\" r=\"36.9\"/><line class=\"thin dash\" x1=\"160\" y1=\"84\" x2=\"193\" y2=\"84\"/><line class=\"thin dash\" x1=\"193\" y1=\"84\" x2=\"193\" y2=\"67.5\"/>" +
        "<line class=\"ac\" x1=\"160\" y1=\"84\" x2=\"193\" y2=\"67.5\"/><path class=\"thin\" d=\"M188 84 L188 79 L193 79\"/><circle class=\"dta\" cx=\"160\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"193\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"193\" cy=\"67.5\" r=\"3\"/>" +
        "<text x=\"155\" y=\"99\" text-anchor=\"end\">T</text><text x=\"201.9\" y=\"94\">Q</text><text x=\"199\" y=\"62.5\">P</text><text class=\"sm\" x=\"246\" y=\"40\">canopy</text><text class=\"sm\" x=\"246\" y=\"140\">root zone</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a park map (units in meters), an oak's trunk is at <strong>T</strong>(−5, 1). Its canopy is a circle centered at T, and <strong>P</strong>(1, 4) is on its edge. Point <strong>Q</strong>(1, 1) makes right triangle <strong>TQP</strong>. The roots reach twice as far from T as the canopy does (dashed circle).</p>",
      claims: [
        {
          id: "pythag",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which equation applies the Pythagorean theorem to triangle TQP to find the radius r of the canopy?",
          choices: [
            { letter: "A", text: "6² + 3² = r²" },
            { letter: "B", text: "6 + 3 = r" },
            { letter: "C", text: "6² − 3² = r²" },
            { letter: "D", text: "4² + 3² = r²" }
          ],
          correct: "A"
        },
        {
          id: "radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What is the radius of the canopy, in simplest radical form?",
          choices: [
            { letter: "A", text: "9 m" },
            { letter: "B", text: "45 m" },
            { letter: "C", text: "3√3 m" },
            { letter: "D", text: "3√5 m" }
          ],
          correct: "D"
        },
        {
          id: "canopy",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the canopy?",
          choices: [
            { letter: "A", text: "(x − 5)² + (y + 1)² = 45" },
            { letter: "B", text: "(x + 5)² + (y − 1)² = 45" },
            { letter: "C", text: "(x + 5)² + (y − 1)² = 3√5" },
            { letter: "D", text: "(x − 1)² + (y − 4)² = 45" }
          ],
          correct: "B"
        },
        {
          id: "roots",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the root zone?",
          choices: [
            { letter: "A", text: "(x + 5)² + (y − 1)² = 90" },
            { letter: "B", text: "(x + 5)² + (y − 1)² = 6√5" },
            { letter: "C", text: "(x + 5)² + (y − 1)² = 180" },
            { letter: "D", text: "(x + 5)² + (y − 1)² = 2025" }
          ],
          correct: "C"
        },
        {
          id: "bench",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A bench is at (−9, 6). Is it under the canopy? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: its distance squared from T is 41, less than 45" },
            { letter: "B", text: "No: it is 4 + 5 = 9 m from T, more than 3√5 m" },
            { letter: "C", text: "No: (−9 − 5)² + (6 + 1)² = 245, more than 45" },
            { letter: "D", text: "No: its distance squared from T, 41, is more than 3√5" }
          ],
          correct: "A"
        },
        {
          id: "notTrue",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which statement about the canopy is NOT true?",
          choices: [
            { letter: "A", text: "(1, −2) is on the edge of the canopy." },
            { letter: "B", text: "(−5, 7) is under the canopy." },
            { letter: "C", text: "(−11, 1) is outside the canopy." },
            { letter: "D", text: "(−8, −5) is on the edge of the canopy." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc4-worms-campfire",
      family: "GEO",
      mode: "worms",
      title: "The Campfire Circle",
      kind: "Equations of circles · G.PC.4",
      blurb: "A rope across a campfire's safety circle is a diameter.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"Campsite seen from above with two tents. A small shaded circle is the fire pit, inside a larger dashed circle, the safety circle. A gold rope runs from stake A to stake B across the safety circle, over the center of the fire pit; A and B are on the dashed circle.\">" +
        "<circle class=\"ln dash\" cx=\"160\" cy=\"82\" r=\"64.6\"/><circle class=\"sh\" cx=\"160\" cy=\"82\" r=\"12\"/><line class=\"ac\" x1=\"100\" y1=\"58\" x2=\"220\" y2=\"106\"/><circle class=\"dt\" cx=\"100\" cy=\"58\" r=\"3\"/><circle class=\"dt\" cx=\"220\" cy=\"106\" r=\"3\"/>" +
        "<text x=\"92\" y=\"56\" text-anchor=\"end\">A</text><text x=\"228\" y=\"118\">B</text><path class=\"thin\" d=\"M24 40 L44 14 L64 40 Z M44 14 L44 40\"/><path class=\"thin\" d=\"M258 140 L278 114 L298 140 Z M278 114 L278 140\"/><text class=\"sm\" x=\"250\" y=\"30\">campsite</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">At a campsite (units in meters), no one may sit inside the safety circle around the fire pit. A rope from stake <strong>A</strong>(−7, 2) to stake <strong>B</strong>(3, −2) is a diameter of the safety circle. The fire pit has the same center.</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "What are the coordinates of the center of the fire pit?",
          choices: [
            { letter: "A", text: "(−4, 0)" },
            { letter: "B", text: "(−2, 0)" },
            { letter: "C", text: "(5, −2)" },
            { letter: "D", text: "(10, −4)" }
          ],
          correct: "B"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the safety circle?",
          choices: [
            { letter: "A", text: "(x − 2)² + y² = 29" },
            { letter: "B", text: "(x + 2)² + y² = 116" },
            { letter: "C", text: "(x + 2)² + y² = √29" },
            { letter: "D", text: "(x + 2)² + y² = 29" }
          ],
          correct: "D"
        },
        {
          id: "radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "To the nearest tenth of a meter, what is the radius of the safety circle?",
          choices: [
            { letter: "A", text: "5.4 m" },
            { letter: "B", text: "10.8 m" },
            { letter: "C", text: "7.0 m" },
            { letter: "D", text: "14.5 m" }
          ],
          correct: "A"
        },
        {
          id: "log",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "A log seat L is at (0, 5). A right triangle has its hypotenuse from the center of the fire pit to L, with one horizontal leg and one vertical leg. Which equation gives that distance d?",
          choices: [
            { letter: "A", text: "0² + 5² = d²" },
            { letter: "B", text: "2 + 5 = d" },
            { letter: "C", text: "2² + 5² = d²" },
            { letter: "D", text: "5² − 2² = d²" }
          ],
          correct: "C"
        },
        {
          id: "seat",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Campers may sit only outside the safety circle. Which spot is allowed?",
          choices: [
            { letter: "A", text: "(2, 3)" },
            { letter: "B", text: "(−5, −4)" },
            { letter: "C", text: "(−7, −1)" },
            { letter: "D", text: "(1, −5)" }
          ],
          correct: "D"
        },
        {
          id: "pit",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "The fire pit is a circle with a diameter of 2 m. Which equation describes its edge?",
          choices: [
            { letter: "A", text: "(x + 2)² + y² = 1" },
            { letter: "B", text: "(x + 2)² + y² = 4" },
            { letter: "C", text: "(x + 2)² + y² = 2" },
            { letter: "D", text: "(x − 2)² + y² = 1" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc4-worms-pivot",
      family: "GEO",
      mode: "worms",
      title: "The Irrigation Pivot",
      kind: "Equations of circles · G.PC.4",
      blurb: "A center-pivot sprinkler arm sweeps a circle in a field.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A square crop field seen from above with a large shaded circle watered by a center pivot. The pivot C is at the center, and the gold arm CE reaches the edge of the circle at E. Two dashed circles show wheel tracks.\">" +
        "<rect class=\"thin\" x=\"84.4\" y=\"8.4\" width=\"151.1\" height=\"151.1\"/><circle class=\"sh2\" cx=\"160\" cy=\"84\" r=\"71.6\"/><circle class=\"thin dash\" cx=\"160\" cy=\"84\" r=\"23.9\"/><circle class=\"thin dash\" cx=\"160\" cy=\"84\" r=\"47.7\"/>" +
        "<line class=\"ac\" x1=\"160\" y1=\"84\" x2=\"96\" y2=\"116\"/><circle class=\"dta\" cx=\"160\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"96\" cy=\"116\" r=\"3\"/><text x=\"165\" y=\"99\">C</text><text x=\"80\" y=\"121\" text-anchor=\"end\">E</text>" +
        "<text class=\"sm\" x=\"250\" y=\"30\">crop field</text><text class=\"sm\" x=\"250\" y=\"46\">1 unit = 50 m</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A center-pivot sprinkler turns around <strong>C</strong>(3, 4) on a farm map (1 unit = 50 m). The end of its arm is at <strong>E</strong>(−5, 0), so the arm sweeps a circle with radius CE.</p>",
      claims: [
        {
          id: "expr",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives the length of the arm CE, in map units?",
          choices: [
            { letter: "A", text: "√((−5 + 3)² + (0 + 4)²)" },
            { letter: "B", text: "(−5 − 3)² + (0 − 4)²" },
            { letter: "C", text: "√((−5 − 3)² + (0 − 4)²)" },
            { letter: "D", text: "√((−5 − 3) + (0 − 4))" }
          ],
          correct: "C"
        },
        {
          id: "radical",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "How long is the arm in map units, in simplest radical form?",
          choices: [
            { letter: "A", text: "12 units" },
            { letter: "B", text: "4√5 units" },
            { letter: "C", text: "4√3 units" },
            { letter: "D", text: "16√5 units" }
          ],
          correct: "B"
        },
        {
          id: "meters",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "To the nearest meter, how long is the arm?",
          choices: [
            { letter: "A", text: "894 m" },
            { letter: "B", text: "600 m" },
            { letter: "C", text: "4000 m" },
            { letter: "D", text: "447 m" }
          ],
          correct: "D"
        },
        {
          id: "square",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Pat writes √((x − 3)² + (y − 4)²) = 4√5 for a point (x, y) on the edge of the watered circle. Which equation should come next?",
          choices: [
            { letter: "A", text: "(x − 3)² + (y − 4)² = 80" },
            { letter: "B", text: "(x − 3)² + (y − 4)² = 20" },
            { letter: "C", text: "(x − 3)² + (y − 4)² = 4√5" },
            { letter: "D", text: "(x − 3) + (y − 4) = 80" }
          ],
          correct: "A"
        },
        {
          id: "water",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which point on the map gets water from the pivot?",
          choices: [
            { letter: "A", text: "(12, 4)" },
            { letter: "B", text: "(8, 9)" },
            { letter: "C", text: "(−3, 11)" },
            { letter: "D", text: "(11, 9)" }
          ],
          correct: "B"
        },
        {
          id: "second",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A second pivot turns around E. Its arm reaches exactly to C. Which equation describes the edge of its circle?",
          choices: [
            { letter: "A", text: "(x − 5)² + y² = 80" },
            { letter: "B", text: "(x − 3)² + (y − 4)² = 80" },
            { letter: "C", text: "(x + 5)² + y² = 4√5" },
            { letter: "D", text: "(x + 5)² + y² = 80" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc4-worms-duck-pond",
      family: "GEO",
      mode: "worms",
      title: "The Duck Pond",
      kind: "Equations of circles · G.PC.4",
      blurb: "Completing the square finds the center of a round pond.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Coordinate axes with no tick marks. A shaded circle, the pond, crosses both axes; most of it is right of the y-axis.\"><line class=\"ax\" x1=\"14\" y1=\"72\" x2=\"306\" y2=\"72\"/>" +
        "<line class=\"ax\" x1=\"94\" y1=\"4\" x2=\"94\" y2=\"156\"/><text class=\"sm\" x=\"306\" y=\"66\" text-anchor=\"end\">x</text><text class=\"sm\" x=\"88\" y=\"14\" text-anchor=\"end\">y</text><circle class=\"sh2\" cx=\"150\" cy=\"86\" r=\"62.6\"/><text class=\"sm\" x=\"232\" y=\"30\">duck pond</text>" +
        "<text class=\"sm\" x=\"232\" y=\"46\">(no scale marks)</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a park map (units in meters), the edge of a round duck pond is x² + y² − 8x + 2y − 3 = 0.</p>",
      claims: [
        {
          id: "complete",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which equation do you get by completing the square?",
          choices: [
            { letter: "A", text: "(x − 4)² + (y + 1)² = 20" },
            { letter: "B", text: "(x − 4)² + (y + 1)² = 3" },
            { letter: "C", text: "(x + 4)² + (y − 1)² = 20" },
            { letter: "D", text: "(x − 4)² + (y + 1)² = 14" }
          ],
          correct: "A"
        },
        {
          id: "centerRadius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the center and radius of the pond?",
          choices: [
            { letter: "A", text: "(−4, 1); r = 2√5 m" },
            { letter: "B", text: "(4, −1); r = 20 m" },
            { letter: "C", text: "(4, −1); r = 2√5 m" },
            { letter: "D", text: "(4, −1); r = √3 m" }
          ],
          correct: "C"
        },
        {
          id: "ty",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Ty writes (x² − 8x + 64) + (y² + 2y + 4) = 3 + 64 + 4. What is his mistake?",
          choices: [
            { letter: "A", text: "He should subtract 64 and 4 on the right side." },
            { letter: "B", text: "He should use −3 on the right side, not 3." },
            { letter: "C", text: "He should add 8 and 2, not their squares." },
            { letter: "D", text: "He should square half of 8 and 2: 16 and 1." }
          ],
          correct: "D"
        },
        {
          id: "reed",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Where is a reed at (6, 3)? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Outside: it is 2 + 4 = 6 m from the center" },
            { letter: "B", text: "On the edge: (6 − 4)² + (3 + 1)² = 20" },
            { letter: "C", text: "Outside: (6 + 4)² + (3 − 1)² = 104" },
            { letter: "D", text: "Outside: 20 is more than 2√5" }
          ],
          correct: "B"
        },
        {
          id: "ripple",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A duck lands at the center of the pond. Its ripple is a circle that grows until its edge reaches a lily pad at (5, 1). Which equation describes the ripple then?",
          choices: [
            { letter: "A", text: "(x − 5)² + (y − 1)² = 5" },
            { letter: "B", text: "(x − 4)² + (y + 1)² = √5" },
            { letter: "C", text: "(x − 4)² + (y + 1)² = 5" },
            { letter: "D", text: "(x + 4)² + (y − 1)² = 5" }
          ],
          correct: "C"
        },
        {
          id: "meaning",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which statement is true for every point (x, y) on the edge of the pond?",
          choices: [
            { letter: "A", text: "It is 20 m from (4, −1)." },
            { letter: "B", text: "It is 2√5 m from (4, −1)." },
            { letter: "C", text: "It is 2√5 m from (−4, 1)." },
            { letter: "D", text: "It is √3 m from the origin." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc4-worms-bird-feeders",
      family: "GEO",
      mode: "worms",
      title: "Two Bird Feeders",
      kind: "Equations of circles · G.PC.4",
      blurb: "Two feeders, two overlapping circles where birds come to eat.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A backyard seen from above with two overlapping shaded circles: the range of feeder A, on the left, and the smaller range of feeder B, on the right. Each feeder is a gold dot at the center of its circle.\">" +
        "<circle class=\"sh\" cx=\"130\" cy=\"88\" r=\"48\"/><circle class=\"sh2\" cx=\"202\" cy=\"64\" r=\"36\"/><circle class=\"dta\" cx=\"130\" cy=\"88\" r=\"3\"/><circle class=\"dta\" cx=\"202\" cy=\"64\" r=\"3\"/><text x=\"124\" y=\"104\" text-anchor=\"end\">A</text><text x=\"208\" y=\"80\">B</text>" +
        "<text class=\"sm\" x=\"250\" y=\"22\">backyard</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">Birds visit a feeder from anywhere inside or on its range circle. On a yard map (units in meters), the edge of feeder <strong>A</strong>'s range is x² + y² + 10x − 4y + 13 = 0. Feeder <strong>B</strong> is at (1, 4), and birds come to it from up to 3 m away.</p>",
      claims: [
        {
          id: "centerA",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the center and radius of feeder A's range?",
          choices: [
            { letter: "A", text: "(5, −2); r = 4 m" },
            { letter: "B", text: "(−5, 2); r = 4 m" },
            { letter: "C", text: "(−5, 2); r = 16 m" },
            { letter: "D", text: "(−5, 2); r = √13 m" }
          ],
          correct: "B"
        },
        {
          id: "edgeA",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which point is on the edge of feeder A's range?",
          choices: [
            { letter: "A", text: "(−9, 2)" },
            { letter: "B", text: "(9, −2)" },
            { letter: "C", text: "(−1, 6)" },
            { letter: "D", text: "(−5, 18)" }
          ],
          correct: "A"
        },
        {
          id: "rangeB",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of feeder B's range?",
          choices: [
            { letter: "A", text: "(x + 1)² + (y + 4)² = 9" },
            { letter: "B", text: "(x − 1)² + (y − 4)² = 3" },
            { letter: "C", text: "(x − 1)² + (y − 4)² = 9" },
            { letter: "D", text: "(x − 1)² + (y − 4)² = 36" }
          ],
          correct: "C"
        },
        {
          id: "between",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives the distance between the two feeders?",
          choices: [
            { letter: "A", text: "√((1 − 5)² + (4 − 2)²)" },
            { letter: "B", text: "(1 + 5)² + (4 − 2)²" },
            { letter: "C", text: "√((1 + 5) + (4 − 2))" },
            { letter: "D", text: "√((1 + 5)² + (4 − 2)²)" }
          ],
          correct: "D"
        },
        {
          id: "bath",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A birdbath is at (−3, 4). Whose range is it in? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Neither: 8 is more than 4, and 16 is more than 3" },
            { letter: "B", text: "A's only: 8 is less than 16, but 16 is more than 9" },
            { letter: "C", text: "Neither: 100 is more than 16, and 16 is more than 9" },
            { letter: "D", text: "Both: √8 is less than 4, and √16 is less than 9" }
          ],
          correct: "B"
        },
        {
          id: "third",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A third feeder goes at the midpoint between feeders A and B. The edge of its range passes exactly through feeder B. Which equation describes that edge?",
          choices: [
            { letter: "A", text: "(x + 4)² + (y − 6)² = 10" },
            { letter: "B", text: "(x + 2)² + (y − 3)² = 40" },
            { letter: "C", text: "(x − 2)² + (y + 3)² = 10" },
            { letter: "D", text: "(x + 2)² + (y − 3)² = 10" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
