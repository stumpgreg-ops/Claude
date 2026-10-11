/* SOL Labyrinth — Geometry game (family GEO), equations of circles: G.PC.4 (Virginia 2023 Geometry SOL), for the
   maze mode (a school building and its grounds) and the raid mode, Eagle Swoop (sports and games). Original items only.
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given
   facts, then six questions about it. Every numeric answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-pc4-maze-bus-loop",
      family: "GEO",
      mode: "maze",
      title: "The Bus Loop",
      kind: "Equations of circles · G.PC.4",
      blurb: "A circular bus loop around the flagpole on the school site plan.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Site plan grid from 0 to 15 across and 0 to 8 up, 1 unit = 10 ft. A gold circle, the bus loop, has its center at the flagpole F (6, 4) and passes through the bus stop S (10, 4). The school is a shaded rectangle from x = 11.5 to 15 and y = 1 to 7.\">" +
        "<line class=\"gr\" x1=\"40\" y1=\"135\" x2=\"40\" y2=\"15\"/><line class=\"gr\" x1=\"55\" y1=\"135\" x2=\"55\" y2=\"15\"/><line class=\"gr\" x1=\"70\" y1=\"135\" x2=\"70\" y2=\"15\"/><line class=\"gr\" x1=\"85\" y1=\"135\" x2=\"85\" y2=\"15\"/><line class=\"gr\" x1=\"100\" y1=\"135\" x2=\"100\" y2=\"15\"/>" +
        "<line class=\"gr\" x1=\"115\" y1=\"135\" x2=\"115\" y2=\"15\"/><line class=\"gr\" x1=\"130\" y1=\"135\" x2=\"130\" y2=\"15\"/><line class=\"gr\" x1=\"145\" y1=\"135\" x2=\"145\" y2=\"15\"/><line class=\"gr\" x1=\"160\" y1=\"135\" x2=\"160\" y2=\"15\"/>" +
        "<line class=\"gr\" x1=\"175\" y1=\"135\" x2=\"175\" y2=\"15\"/><line class=\"gr\" x1=\"190\" y1=\"135\" x2=\"190\" y2=\"15\"/><line class=\"gr\" x1=\"205\" y1=\"135\" x2=\"205\" y2=\"15\"/><line class=\"gr\" x1=\"220\" y1=\"135\" x2=\"220\" y2=\"15\"/>" +
        "<line class=\"gr\" x1=\"235\" y1=\"135\" x2=\"235\" y2=\"15\"/><line class=\"gr\" x1=\"250\" y1=\"135\" x2=\"250\" y2=\"15\"/><line class=\"gr\" x1=\"265\" y1=\"135\" x2=\"265\" y2=\"15\"/><line class=\"gr\" x1=\"40\" y1=\"135\" x2=\"265\" y2=\"135\"/>" +
        "<line class=\"gr\" x1=\"40\" y1=\"120\" x2=\"265\" y2=\"120\"/><line class=\"gr\" x1=\"40\" y1=\"105\" x2=\"265\" y2=\"105\"/><line class=\"gr\" x1=\"40\" y1=\"90\" x2=\"265\" y2=\"90\"/><line class=\"gr\" x1=\"40\" y1=\"75\" x2=\"265\" y2=\"75\"/><line class=\"gr\" x1=\"40\" y1=\"60\" x2=\"265\" y2=\"60\"/>" +
        "<line class=\"gr\" x1=\"40\" y1=\"45\" x2=\"265\" y2=\"45\"/><line class=\"gr\" x1=\"40\" y1=\"30\" x2=\"265\" y2=\"30\"/><line class=\"gr\" x1=\"40\" y1=\"15\" x2=\"265\" y2=\"15\"/><line class=\"ax\" x1=\"40\" y1=\"135\" x2=\"265\" y2=\"135\"/><line class=\"ax\" x1=\"40\" y1=\"135\" x2=\"40\" y2=\"15\"/>" +
        "<text class=\"sm\" x=\"70\" y=\"148\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"100\" y=\"148\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"130\" y=\"148\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"160\" y=\"148\" text-anchor=\"middle\">8</text>" +
        "<text class=\"sm\" x=\"190\" y=\"148\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"220\" y=\"148\" text-anchor=\"middle\">12</text><text class=\"sm\" x=\"35\" y=\"109\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"35\" y=\"79\" text-anchor=\"end\">4</text>" +
        "<text class=\"sm\" x=\"35\" y=\"49\" text-anchor=\"end\">6</text><text class=\"sm\" x=\"35\" y=\"19\" text-anchor=\"end\">8</text><rect class=\"sh2\" x=\"212.5\" y=\"30\" width=\"52.5\" height=\"90\"/><text class=\"sm\" x=\"238.8\" y=\"79\" text-anchor=\"middle\">school</text>" +
        "<circle class=\"ac\" cx=\"130\" cy=\"75\" r=\"60\"/><circle class=\"dta\" cx=\"130\" cy=\"75\" r=\"3\"/><circle class=\"dt\" cx=\"190\" cy=\"75\" r=\"3\"/><text x=\"136\" y=\"69\">F</text><text x=\"182\" y=\"80\" text-anchor=\"end\">S</text>" +
        "<text class=\"sm\" x=\"312\" y=\"12\" text-anchor=\"end\">1 unit = 10 ft</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On the school site plan, each grid unit is 10 ft. The bus loop is a circle around the flagpole <strong>F</strong>. The bus stop <strong>S</strong> is on the loop.</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the coordinates of the flagpole F, the center of the bus loop?",
          choices: [
            { letter: "A", text: "(4, 6)" },
            { letter: "B", text: "(6, 4)" },
            { letter: "C", text: "(10, 4)" },
            { letter: "D", text: "(6, 8)" }
          ],
          correct: "B"
        },
        {
          id: "feet",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "How far is the bus loop from the flagpole, in feet?",
          choices: [
            { letter: "A", text: "80 ft" },
            { letter: "B", text: "160 ft" },
            { letter: "C", text: "4 ft" },
            { letter: "D", text: "40 ft" }
          ],
          correct: "D"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Using grid units, which equation describes the bus loop?",
          choices: [
            { letter: "A", text: "(x − 6)² + (y − 4)² = 16" },
            { letter: "B", text: "(x + 6)² + (y + 4)² = 16" },
            { letter: "C", text: "(x − 6)² + (y − 4)² = 4" },
            { letter: "D", text: "(x − 4)² + (y − 6)² = 16" }
          ],
          correct: "A"
        },
        {
          id: "bench",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A bench is at (8, 7). Where is it compared with the loop?",
          choices: [
            { letter: "A", text: "Outside: 5 units from F" },
            { letter: "B", text: "Outside: 13 units from F" },
            { letter: "C", text: "Inside: √13 units from F" },
            { letter: "D", text: "Inside: 3 units from F" }
          ],
          correct: "C"
        },
        {
          id: "art",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "The art club paints a different circle on the blacktop: (x + 7)² + (y − 2)² = 49. What are its center and radius?",
          choices: [
            { letter: "A", text: "(7, −2); r = 7" },
            { letter: "B", text: "(−7, 2); r = 7" },
            { letter: "C", text: "(−7, 2); r = 49" },
            { letter: "D", text: "(2, −7); r = 7" }
          ],
          correct: "B"
        },
        {
          id: "distance",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which equation says that a point (x, y) is 4 units from F(6, 4)?",
          choices: [
            { letter: "A", text: "√((x + 6)² + (y + 4)²) = 4" },
            { letter: "B", text: "(x − 6) + (y − 4) = 4" },
            { letter: "C", text: "√((x − 6)² − (y − 4)²) = 4" },
            { letter: "D", text: "√((x − 6)² + (y − 4)²) = 4" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc4-maze-library-rug",
      family: "GEO",
      mode: "maze",
      title: "The Library Rug",
      kind: "Equations of circles · G.PC.4",
      blurb: "A round rug on the library floor plan, with a diameter marked.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Floor plan of a library room 12 ft by 8 ft with the corner at the origin. A round shaded rug has diameter AB from A (2, 2) to B (8, 6). Shelves run along the right wall.\">" +
        "<line class=\"gr\" x1=\"74\" y1=\"130\" x2=\"74\" y2=\"18\"/><line class=\"gr\" x1=\"88\" y1=\"130\" x2=\"88\" y2=\"18\"/><line class=\"gr\" x1=\"102\" y1=\"130\" x2=\"102\" y2=\"18\"/><line class=\"gr\" x1=\"116\" y1=\"130\" x2=\"116\" y2=\"18\"/>" +
        "<line class=\"gr\" x1=\"130\" y1=\"130\" x2=\"130\" y2=\"18\"/><line class=\"gr\" x1=\"144\" y1=\"130\" x2=\"144\" y2=\"18\"/><line class=\"gr\" x1=\"158\" y1=\"130\" x2=\"158\" y2=\"18\"/><line class=\"gr\" x1=\"172\" y1=\"130\" x2=\"172\" y2=\"18\"/>" +
        "<line class=\"gr\" x1=\"186\" y1=\"130\" x2=\"186\" y2=\"18\"/><line class=\"gr\" x1=\"200\" y1=\"130\" x2=\"200\" y2=\"18\"/><line class=\"gr\" x1=\"214\" y1=\"130\" x2=\"214\" y2=\"18\"/><line class=\"gr\" x1=\"60\" y1=\"116\" x2=\"228\" y2=\"116\"/>" +
        "<line class=\"gr\" x1=\"60\" y1=\"102\" x2=\"228\" y2=\"102\"/><line class=\"gr\" x1=\"60\" y1=\"88\" x2=\"228\" y2=\"88\"/><line class=\"gr\" x1=\"60\" y1=\"74\" x2=\"228\" y2=\"74\"/><line class=\"gr\" x1=\"60\" y1=\"60\" x2=\"228\" y2=\"60\"/><line class=\"gr\" x1=\"60\" y1=\"46\" x2=\"228\" y2=\"46\"/>" +
        "<line class=\"gr\" x1=\"60\" y1=\"32\" x2=\"228\" y2=\"32\"/><rect class=\"ln\" x=\"60\" y=\"18\" width=\"168\" height=\"112\"/><rect class=\"sh2\" x=\"207\" y=\"25\" width=\"21\" height=\"98\"/><text class=\"sm\" x=\"234\" y=\"78\" text-anchor=\"start\">shelves</text>" +
        "<circle class=\"sh\" cx=\"130\" cy=\"74\" r=\"50.5\"/><line class=\"ac\" x1=\"88\" y1=\"102\" x2=\"172\" y2=\"46\"/><circle class=\"dt\" cx=\"88\" cy=\"102\" r=\"3\"/><circle class=\"dt\" cx=\"172\" cy=\"46\" r=\"3\"/><text x=\"76\" y=\"115\" text-anchor=\"middle\">A</text>" +
        "<text x=\"182\" y=\"42\" text-anchor=\"middle\">B</text><text class=\"sm\" x=\"60\" y=\"143\" text-anchor=\"middle\">0</text><text class=\"sm\" x=\"88\" y=\"143\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"116\" y=\"143\" text-anchor=\"middle\">4</text>" +
        "<text class=\"sm\" x=\"144\" y=\"143\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"172\" y=\"143\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"200\" y=\"143\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"228\" y=\"143\" text-anchor=\"middle\">12</text>" +
        "<text class=\"sm\" x=\"54\" y=\"106\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"54\" y=\"78\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"54\" y=\"50\" text-anchor=\"end\">6</text><text class=\"sm\" x=\"54\" y=\"22\" text-anchor=\"end\">8</text>" +
        "<text class=\"sm\" x=\"312\" y=\"12\" text-anchor=\"end\">1 unit = 1 ft</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A library floor plan uses feet, with a corner of the room at the origin. Segment <strong>AB</strong> is a diameter of the round rug, from <strong>A</strong>(2, 2) to <strong>B</strong>(8, 6).</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "What are the coordinates of the center of the rug?",
          choices: [
            { letter: "A", text: "(3, 2)" },
            { letter: "B", text: "(10, 8)" },
            { letter: "C", text: "(5, 4)" },
            { letter: "D", text: "(6, 4)" }
          ],
          correct: "C"
        },
        {
          id: "radius",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "What is the radius of the rug, in simplest radical form?",
          choices: [
            { letter: "A", text: "√13 ft" },
            { letter: "B", text: "2√13 ft" },
            { letter: "C", text: "13 ft" },
            { letter: "D", text: "5 ft" }
          ],
          correct: "A"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the rug?",
          choices: [
            { letter: "A", text: "(x − 5)² + (y − 4)² = 52" },
            { letter: "B", text: "(x + 5)² + (y + 4)² = 13" },
            { letter: "C", text: "(x − 5)² + (y − 4)² = √13" },
            { letter: "D", text: "(x − 5)² + (y − 4)² = 13" }
          ],
          correct: "D"
        },
        {
          id: "not-true",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which statement about the rug is NOT true?",
          choices: [
            { letter: "A", text: "(7, 7) is on the edge of the rug." },
            { letter: "B", text: "(1, 5) is inside the rug." },
            { letter: "C", text: "(5, 7) is inside the rug." },
            { letter: "D", text: "(2, 6) is on the edge of the rug." }
          ],
          correct: "B"
        },
        {
          id: "legs",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Kai finds the radius with a right triangle. Its hypotenuse runs from the center of the rug to B, and its legs follow the grid. How long are the legs?",
          choices: [
            { letter: "A", text: "3 ft and 2 ft" },
            { letter: "B", text: "6 ft and 4 ft" },
            { letter: "C", text: "8 ft and 6 ft" },
            { letter: "D", text: "5 ft and 4 ft" }
          ],
          correct: "A"
        },
        {
          id: "slide",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "The librarian slides the rug 1 ft to the right. Its size does not change. Which equation describes its new edge?",
          choices: [
            { letter: "A", text: "(x − 4)² + (y − 4)² = 13" },
            { letter: "B", text: "(x − 5)² + (y − 5)² = 13" },
            { letter: "C", text: "(x − 6)² + (y − 4)² = 13" },
            { letter: "D", text: "(x − 6)² + (y − 4)² = 14" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc4-maze-sprinkler",
      family: "GEO",
      mode: "maze",
      title: "The Cafeteria Sprinkler",
      kind: "Equations of circles · G.PC.4",
      blurb: "Complete the square to find the circle a ceiling sprinkler wets.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Coordinate axes for a cafeteria plan in meters, with a circle centered at the gold point C, which is left of the y-axis and above the x-axis. A box gives the circle's equation, x squared plus y squared plus 4x minus 10y plus 11 equals 0.\">" +
        "<line class=\"ax\" x1=\"14\" y1=\"150\" x2=\"146\" y2=\"150\"/><line class=\"ax\" x1=\"104\" y1=\"156\" x2=\"104\" y2=\"24\"/><line class=\"thin\" x1=\"20\" y1=\"147\" x2=\"20\" y2=\"153\"/><line class=\"thin\" x1=\"32\" y1=\"147\" x2=\"32\" y2=\"153\"/>" +
        "<line class=\"thin\" x1=\"44\" y1=\"147\" x2=\"44\" y2=\"153\"/><line class=\"thin\" x1=\"56\" y1=\"147\" x2=\"56\" y2=\"153\"/><line class=\"thin\" x1=\"68\" y1=\"147\" x2=\"68\" y2=\"153\"/><line class=\"thin\" x1=\"80\" y1=\"147\" x2=\"80\" y2=\"153\"/>" +
        "<line class=\"thin\" x1=\"92\" y1=\"147\" x2=\"92\" y2=\"153\"/><line class=\"thin\" x1=\"116\" y1=\"147\" x2=\"116\" y2=\"153\"/><line class=\"thin\" x1=\"128\" y1=\"147\" x2=\"128\" y2=\"153\"/><line class=\"thin\" x1=\"140\" y1=\"147\" x2=\"140\" y2=\"153\"/>" +
        "<line class=\"thin\" x1=\"101\" y1=\"138\" x2=\"107\" y2=\"138\"/><line class=\"thin\" x1=\"101\" y1=\"126\" x2=\"107\" y2=\"126\"/><line class=\"thin\" x1=\"101\" y1=\"114\" x2=\"107\" y2=\"114\"/><line class=\"thin\" x1=\"101\" y1=\"102\" x2=\"107\" y2=\"102\"/>" +
        "<line class=\"thin\" x1=\"101\" y1=\"90\" x2=\"107\" y2=\"90\"/><line class=\"thin\" x1=\"101\" y1=\"78\" x2=\"107\" y2=\"78\"/><line class=\"thin\" x1=\"101\" y1=\"66\" x2=\"107\" y2=\"66\"/><line class=\"thin\" x1=\"101\" y1=\"54\" x2=\"107\" y2=\"54\"/>" +
        "<line class=\"thin\" x1=\"101\" y1=\"42\" x2=\"107\" y2=\"42\"/><line class=\"thin\" x1=\"101\" y1=\"30\" x2=\"107\" y2=\"30\"/><text class=\"sm\" x=\"32\" y=\"164\" text-anchor=\"middle\">−6</text><text class=\"sm\" x=\"56\" y=\"164\" text-anchor=\"middle\">−4</text>" +
        "<text class=\"sm\" x=\"80\" y=\"164\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"128\" y=\"164\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"99\" y=\"130\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"99\" y=\"106\" text-anchor=\"end\">4</text>" +
        "<text class=\"sm\" x=\"99\" y=\"82\" text-anchor=\"end\">6</text><text class=\"sm\" x=\"99\" y=\"58\" text-anchor=\"end\">8</text><text class=\"sm\" x=\"99\" y=\"34\" text-anchor=\"end\">10</text><circle class=\"ln\" cx=\"80\" cy=\"90\" r=\"50.9\"/><circle class=\"dta\" cx=\"80\" cy=\"90\" r=\"3\"/>" +
        "<text x=\"74\" y=\"106\" text-anchor=\"end\">C</text><rect class=\"thin\" x=\"168\" y=\"34\" width=\"146\" height=\"84\" rx=\"6\"/><text class=\"sm\" x=\"178\" y=\"54\">Sprinkler edge:</text><text x=\"178\" y=\"79\">x² + y² + 4x</text><text x=\"178\" y=\"102\">− 10y + 11 = 0</text>" +
        "<text class=\"sm\" x=\"241\" y=\"140\" text-anchor=\"middle\">1 unit = 1 m</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a plan of the cafeteria (units in meters), a ceiling sprinkler wets a circle on the floor with center <strong>C</strong>. The edge of the circle has the equation x² + y² + 4x − 10y + 11 = 0.</p>",
      claims: [
        {
          id: "blanks",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "To complete the square, Ana groups x² + 4x and y² − 10y. Which numbers must she add to both sides of the equation?",
          choices: [
            { letter: "A", text: "4 and 25" },
            { letter: "B", text: "2 and 5" },
            { letter: "C", text: "16 and 100" },
            { letter: "D", text: "4 and −25" }
          ],
          correct: "A"
        },
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the center and radius of the sprinkler's circle?",
          choices: [
            { letter: "A", text: "(2, −5); r = 3√2" },
            { letter: "B", text: "(−2, 5); r = 18" },
            { letter: "C", text: "(−2, 5); r = 3√2" },
            { letter: "D", text: "(−2, 5); r = 2√10" }
          ],
          correct: "C"
        },
        {
          id: "outside",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "The wet region includes its edge. Which table is outside the wet region?",
          choices: [
            { letter: "A", text: "(0, 2)" },
            { letter: "B", text: "(−5, 4)" },
            { letter: "C", text: "(1, 8)" },
            { letter: "D", text: "(2, 8)" }
          ],
          correct: "D"
        },
        {
          id: "reason",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which reason explains why every point (x, y) on the edge fits (x + 2)² + (y − 5)² = 18?",
          choices: [
            { letter: "A", text: "It is 18 m from (−2, 5); square the distance formula." },
            { letter: "B", text: "It is √18 m from (−2, 5); square the distance formula." },
            { letter: "C", text: "It is √18 m from (2, −5); square the distance formula." },
            { letter: "D", text: "Its x and y distances from (−2, 5) add to √18 m." }
          ],
          correct: "B"
        },
        {
          id: "error",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Leo completes the square and writes (x + 2)² + (y − 5)² = −11. What is his mistake?",
          choices: [
            { letter: "A", text: "He should have written (x − 2)² + (y + 5)²." },
            { letter: "B", text: "He did not add 4 and 25 to the right side." },
            { letter: "C", text: "He should have added 2 and 5 to the right side." },
            { letter: "D", text: "He should have subtracted 4 and 25 on the right." }
          ],
          correct: "B"
        },
        {
          id: "second",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A second sprinkler has the same center. The edge of its circle passes through a table at (2, 9). Which equation describes that edge?",
          choices: [
            { letter: "A", text: "(x − 2)² + (y − 9)² = 32" },
            { letter: "B", text: "(x + 2)² + (y − 5)² = 4√2" },
            { letter: "C", text: "(x − 2)² + (y + 5)² = 32" },
            { letter: "D", text: "(x + 2)² + (y − 5)² = 32" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc4-raid-archery",
      family: "GEO",
      mode: "raid",
      title: "The Archery Target",
      kind: "Equations of circles · G.PC.4",
      blurb: "Three rings with one center on a coordinate grid.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 145\" role=\"img\" aria-label=\"Coordinate grid from x = −8 to 1 and y = −1 to 8 with an archery target: three circles with the same gold center at (−4, 4) and radii 1, 2 and 3; the inner circle is shaded.\">" +
        "<line class=\"gr\" x1=\"100\" y1=\"138\" x2=\"100\" y2=\"12\"/><line class=\"gr\" x1=\"114\" y1=\"138\" x2=\"114\" y2=\"12\"/><line class=\"gr\" x1=\"128\" y1=\"138\" x2=\"128\" y2=\"12\"/><line class=\"gr\" x1=\"142\" y1=\"138\" x2=\"142\" y2=\"12\"/>" +
        "<line class=\"gr\" x1=\"156\" y1=\"138\" x2=\"156\" y2=\"12\"/><line class=\"gr\" x1=\"170\" y1=\"138\" x2=\"170\" y2=\"12\"/><line class=\"gr\" x1=\"184\" y1=\"138\" x2=\"184\" y2=\"12\"/><line class=\"gr\" x1=\"198\" y1=\"138\" x2=\"198\" y2=\"12\"/>" +
        "<line class=\"gr\" x1=\"212\" y1=\"138\" x2=\"212\" y2=\"12\"/><line class=\"gr\" x1=\"226\" y1=\"138\" x2=\"226\" y2=\"12\"/><line class=\"gr\" x1=\"100\" y1=\"138\" x2=\"226\" y2=\"138\"/><line class=\"gr\" x1=\"100\" y1=\"124\" x2=\"226\" y2=\"124\"/>" +
        "<line class=\"gr\" x1=\"100\" y1=\"110\" x2=\"226\" y2=\"110\"/><line class=\"gr\" x1=\"100\" y1=\"96\" x2=\"226\" y2=\"96\"/><line class=\"gr\" x1=\"100\" y1=\"82\" x2=\"226\" y2=\"82\"/><line class=\"gr\" x1=\"100\" y1=\"68\" x2=\"226\" y2=\"68\"/>" +
        "<line class=\"gr\" x1=\"100\" y1=\"54\" x2=\"226\" y2=\"54\"/><line class=\"gr\" x1=\"100\" y1=\"40\" x2=\"226\" y2=\"40\"/><line class=\"gr\" x1=\"100\" y1=\"26\" x2=\"226\" y2=\"26\"/><line class=\"gr\" x1=\"100\" y1=\"12\" x2=\"226\" y2=\"12\"/>" +
        "<line class=\"ax\" x1=\"100\" y1=\"124\" x2=\"226\" y2=\"124\"/><line class=\"ax\" x1=\"212\" y1=\"138\" x2=\"212\" y2=\"12\"/><text class=\"sm\" x=\"128\" y=\"136\" text-anchor=\"middle\">−6</text><text class=\"sm\" x=\"156\" y=\"136\" text-anchor=\"middle\">−4</text>" +
        "<text class=\"sm\" x=\"184\" y=\"136\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"216\" y=\"100\" text-anchor=\"start\">2</text><text class=\"sm\" x=\"216\" y=\"72\" text-anchor=\"start\">4</text><text class=\"sm\" x=\"216\" y=\"44\" text-anchor=\"start\">6</text>" +
        "<text class=\"sm\" x=\"216\" y=\"16\" text-anchor=\"start\">8</text><circle class=\"ln\" cx=\"156\" cy=\"68\" r=\"42\"/><circle class=\"ln\" cx=\"156\" cy=\"68\" r=\"28\"/><circle class=\"sh\" cx=\"156\" cy=\"68\" r=\"14\"/><circle class=\"dta\" cx=\"156\" cy=\"68\" r=\"3\"/>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">An archery target is drawn on a coordinate grid. Its three rings are circles with the same center, the gold point. Their radii are 1, 2 and 3 units.</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the coordinates of the center of the target?",
          choices: [
            { letter: "A", text: "(4, 4)" },
            { letter: "B", text: "(4, −4)" },
            { letter: "C", text: "(−4, 4)" },
            { letter: "D", text: "(−4, 7)" }
          ],
          correct: "C"
        },
        {
          id: "outer",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the outer ring?",
          choices: [
            { letter: "A", text: "(x + 4)² + (y − 4)² = 9" },
            { letter: "B", text: "(x − 4)² + (y + 4)² = 9" },
            { letter: "C", text: "(x + 4)² + (y − 4)² = 3" },
            { letter: "D", text: "(x + 4)² + (y − 4)² = 6" }
          ],
          correct: "A"
        },
        {
          id: "arrow",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "An arrow hits (−2, 5). Where on the target is it?",
          choices: [
            { letter: "A", text: "Outside the outer ring" },
            { letter: "B", text: "Exactly on the outer ring" },
            { letter: "C", text: "Exactly on the middle ring" },
            { letter: "D", text: "Between the middle and outer rings" }
          ],
          correct: "D"
        },
        {
          id: "expression",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "An arrow lands at (−6, 5). Which expression gives its distance from the center of the target?",
          choices: [
            { letter: "A", text: "√((−6 − 4)² + (5 + 4)²)" },
            { letter: "B", text: "√((−6 + 4)² + (5 − 4)²)" },
            { letter: "C", text: "(−6 + 4)² + (5 − 4)²" },
            { letter: "D", text: "√((−6 + 4)² − (5 − 4)²)" }
          ],
          correct: "B"
        },
        {
          id: "bigger",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A larger practice target has the same center. Its outer ring passes through (−4, 8). Which equation describes that ring?",
          choices: [
            { letter: "A", text: "(x + 4)² + (y − 4)² = 4" },
            { letter: "B", text: "(x + 4)² + (y − 8)² = 16" },
            { letter: "C", text: "(x + 4)² + (y − 4)² = 64" },
            { letter: "D", text: "(x + 4)² + (y − 4)² = 16" }
          ],
          correct: "D"
        },
        {
          id: "not-true",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which statement about the rings is NOT true?",
          choices: [
            { letter: "A", text: "(−3, 5) is inside the inner ring." },
            { letter: "B", text: "(−4, 2) is on the middle ring." },
            { letter: "C", text: "(−7, 4) is on the outer ring." },
            { letter: "D", text: "(−4, 5) is on the inner ring." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc4-raid-shield",
      family: "GEO",
      mode: "raid",
      title: "The Shield Bubble",
      kind: "Equations of circles · G.PC.4",
      blurb: "A video game hero, a round shield and four enemies.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"A video game screen with coordinate axes. A dashed gold circle, the shield, is centered at the hero P (1, −1) with radius 6. Enemies: A at (5, 3), B at (−3, 4), C at (1, 5) on the circle, and D at (6, −4).\">" +
        "<rect class=\"thin\" x=\"4\" y=\"3\" width=\"312\" height=\"146\" rx=\"10\"/><line class=\"ax\" x1=\"81\" y1=\"66\" x2=\"225\" y2=\"66\"/><line class=\"ax\" x1=\"144\" y1=\"138\" x2=\"144\" y2=\"7.5\"/><line class=\"thin\" x1=\"81\" y1=\"63.5\" x2=\"81\" y2=\"68.5\"/>" +
        "<line class=\"thin\" x1=\"90\" y1=\"63.5\" x2=\"90\" y2=\"68.5\"/><line class=\"thin\" x1=\"99\" y1=\"63.5\" x2=\"99\" y2=\"68.5\"/><line class=\"thin\" x1=\"108\" y1=\"63.5\" x2=\"108\" y2=\"68.5\"/><line class=\"thin\" x1=\"117\" y1=\"63.5\" x2=\"117\" y2=\"68.5\"/>" +
        "<line class=\"thin\" x1=\"126\" y1=\"63.5\" x2=\"126\" y2=\"68.5\"/><line class=\"thin\" x1=\"135\" y1=\"63.5\" x2=\"135\" y2=\"68.5\"/><line class=\"thin\" x1=\"153\" y1=\"63.5\" x2=\"153\" y2=\"68.5\"/><line class=\"thin\" x1=\"162\" y1=\"63.5\" x2=\"162\" y2=\"68.5\"/>" +
        "<line class=\"thin\" x1=\"171\" y1=\"63.5\" x2=\"171\" y2=\"68.5\"/><line class=\"thin\" x1=\"180\" y1=\"63.5\" x2=\"180\" y2=\"68.5\"/><line class=\"thin\" x1=\"189\" y1=\"63.5\" x2=\"189\" y2=\"68.5\"/><line class=\"thin\" x1=\"198\" y1=\"63.5\" x2=\"198\" y2=\"68.5\"/>" +
        "<line class=\"thin\" x1=\"207\" y1=\"63.5\" x2=\"207\" y2=\"68.5\"/><line class=\"thin\" x1=\"216\" y1=\"63.5\" x2=\"216\" y2=\"68.5\"/><line class=\"thin\" x1=\"225\" y1=\"63.5\" x2=\"225\" y2=\"68.5\"/><line class=\"thin\" x1=\"141.5\" y1=\"138\" x2=\"146.5\" y2=\"138\"/>" +
        "<line class=\"thin\" x1=\"141.5\" y1=\"129\" x2=\"146.5\" y2=\"129\"/><line class=\"thin\" x1=\"141.5\" y1=\"120\" x2=\"146.5\" y2=\"120\"/><line class=\"thin\" x1=\"141.5\" y1=\"111\" x2=\"146.5\" y2=\"111\"/><line class=\"thin\" x1=\"141.5\" y1=\"102\" x2=\"146.5\" y2=\"102\"/>" +
        "<line class=\"thin\" x1=\"141.5\" y1=\"93\" x2=\"146.5\" y2=\"93\"/><line class=\"thin\" x1=\"141.5\" y1=\"84\" x2=\"146.5\" y2=\"84\"/><line class=\"thin\" x1=\"141.5\" y1=\"75\" x2=\"146.5\" y2=\"75\"/><line class=\"thin\" x1=\"141.5\" y1=\"57\" x2=\"146.5\" y2=\"57\"/>" +
        "<line class=\"thin\" x1=\"141.5\" y1=\"48\" x2=\"146.5\" y2=\"48\"/><line class=\"thin\" x1=\"141.5\" y1=\"39\" x2=\"146.5\" y2=\"39\"/><line class=\"thin\" x1=\"141.5\" y1=\"30\" x2=\"146.5\" y2=\"30\"/><line class=\"thin\" x1=\"141.5\" y1=\"21\" x2=\"146.5\" y2=\"21\"/>" +
        "<line class=\"thin\" x1=\"141.5\" y1=\"12\" x2=\"146.5\" y2=\"12\"/><text class=\"sm\" x=\"126\" y=\"79\" text-anchor=\"middle\">−2</text><text class=\"sm\" x=\"180\" y=\"79\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"139\" y=\"34\" text-anchor=\"end\">4</text>" +
        "<text class=\"sm\" x=\"139\" y=\"106\" text-anchor=\"end\">−4</text><circle class=\"ac dash\" cx=\"153\" cy=\"75\" r=\"54\"/><circle class=\"dta\" cx=\"153\" cy=\"75\" r=\"3\"/><circle class=\"dt\" cx=\"189\" cy=\"39\" r=\"3\"/><circle class=\"dt\" cx=\"117\" cy=\"30\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"153\" cy=\"21\" r=\"3\"/><circle class=\"dt\" cx=\"198\" cy=\"102\" r=\"3\"/><text x=\"158\" y=\"91\">P</text><text x=\"195\" y=\"36\">A</text><text x=\"111\" y=\"27\" text-anchor=\"end\">B</text><text x=\"159\" y=\"16\">C</text><text x=\"204\" y=\"110\">D</text>" +
        "<text class=\"sm\" x=\"16\" y=\"22\">SHIELD  r = 6</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">In a video game, the hero stands at <strong>P</strong>(1, −1) inside a round shield with a radius of 6 units. Enemies <strong>A</strong>, <strong>B</strong>, <strong>C</strong> and <strong>D</strong> stand on grid points.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the shield?",
          choices: [
            { letter: "A", text: "(x − 1)² + (y + 1)² = 36" },
            { letter: "B", text: "(x + 1)² + (y − 1)² = 36" },
            { letter: "C", text: "(x − 1)² + (y + 1)² = 6" },
            { letter: "D", text: "(x − 1)² + (y + 1)² = 12" }
          ],
          correct: "A"
        },
        {
          id: "outside",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which enemy is outside the shield?",
          choices: [
            { letter: "A", text: "A at (5, 3)" },
            { letter: "B", text: "B at (−3, 4)" },
            { letter: "C", text: "C at (1, 5)" },
            { letter: "D", text: "D at (6, −4)" }
          ],
          correct: "B"
        },
        {
          id: "player2",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Player 2's shield has the edge (x + 5)² + (y − 4)² = 50. What are its center and radius?",
          choices: [
            { letter: "A", text: "(5, −4); r = 5√2" },
            { letter: "B", text: "(−5, 4); r = 25" },
            { letter: "C", text: "(−5, 4); r = 50" },
            { letter: "D", text: "(−5, 4); r = 5√2" }
          ],
          correct: "D"
        },
        {
          id: "pyth",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "The game finds the distance PA with the Pythagorean theorem. Which equation does it use?",
          choices: [
            { letter: "A", text: "4 + 4 = PA" },
            { letter: "B", text: "5² + 3² = PA²" },
            { letter: "C", text: "4² + 4² = PA²" },
            { letter: "D", text: "6² + 2² = PA²" }
          ],
          correct: "C"
        },
        {
          id: "power",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A power-up doubles the shield's radius. The center stays at P. Which equation describes the new edge?",
          choices: [
            { letter: "A", text: "(x − 1)² + (y + 1)² = 144" },
            { letter: "B", text: "(x − 1)² + (y + 1)² = 72" },
            { letter: "C", text: "(x − 1)² + (y + 1)² = 12" },
            { letter: "D", text: "(x − 2)² + (y + 2)² = 144" }
          ],
          correct: "A"
        },
        {
          id: "on-edge",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which point is on the edge of the shield?",
          choices: [
            { letter: "A", text: "(7, 5)" },
            { letter: "B", text: "(5, 1)" },
            { letter: "C", text: "(−5, −1)" },
            { letter: "D", text: "(1, 11)" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc4-raid-diving-pool",
      family: "GEO",
      mode: "raid",
      title: "The Diving Pool",
      kind: "Equations of circles · G.PC.4",
      blurb: "A lane rope across a round pool marks a diameter.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"A pool deck with a round pool. A dashed gold lane rope crosses the pool through its center from P (−6, 1) to Q (2, 3); both ends are on the edge of the pool.\">" +
        "<rect class=\"thin\" x=\"20\" y=\"8\" width=\"280\" height=\"140\" rx=\"4\"/><text class=\"sm\" x=\"30\" y=\"26\">deck</text><circle class=\"sh2\" cx=\"150\" cy=\"78\" r=\"53.6\"/><line class=\"ac dash\" x1=\"98\" y1=\"91\" x2=\"202\" y2=\"65\"/><circle class=\"dt\" cx=\"98\" cy=\"91\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"202\" cy=\"65\" r=\"3\"/><text x=\"93\" y=\"108\" text-anchor=\"end\">P(−6, 1)</text><text x=\"208\" y=\"59\">Q(2, 3)</text><text class=\"sm\" x=\"290\" y=\"140\" text-anchor=\"end\">1 unit = 1 m</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A round diving pool is drawn on a coordinate plan in meters. A lane rope runs straight across the pool through its center, from <strong>P</strong>(−6, 1) to <strong>Q</strong>(2, 3).</p>",
      claims: [
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "What are the coordinates of the center of the pool?",
          choices: [
            { letter: "A", text: "(−2, 2)" },
            { letter: "B", text: "(−4, 4)" },
            { letter: "C", text: "(4, 1)" },
            { letter: "D", text: "(8, 2)" }
          ],
          correct: "A"
        },
        {
          id: "equation",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the pool?",
          choices: [
            { letter: "A", text: "(x − 2)² + (y + 2)² = 17" },
            { letter: "B", text: "(x + 2)² + (y − 2)² = 68" },
            { letter: "C", text: "(x + 2)² + (y − 2)² = 17" },
            { letter: "D", text: "(x + 2)² + (y − 2)² = √17" }
          ],
          correct: "C"
        },
        {
          id: "radius",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "To the nearest tenth of a meter, what is the radius of the pool?",
          choices: [
            { letter: "A", text: "8.2 m" },
            { letter: "B", text: "4.1 m" },
            { letter: "C", text: "8.5 m" },
            { letter: "D", text: "5.0 m" }
          ],
          correct: "B"
        },
        {
          id: "rope",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives the length of the lane rope PQ?",
          choices: [
            { letter: "A", text: "√((2 − 6)² + (3 − 1)²)" },
            { letter: "B", text: "(2 + 6)² + (3 − 1)²" },
            { letter: "C", text: "√((2 + 6)² + (3 + 1)²)" },
            { letter: "D", text: "√((2 + 6)² + (3 − 1)²)" }
          ],
          correct: "D"
        },
        {
          id: "float",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A swimmer's ball floats at (1, −1). Is it in the pool?",
          choices: [
            { letter: "A", text: "Yes: 6 is less than 17" },
            { letter: "B", text: "No: 18 is more than 17" },
            { letter: "C", text: "Yes: 2 is less than 17" },
            { letter: "D", text: "Yes: √18 is less than 17" }
          ],
          correct: "B"
        },
        {
          id: "ring",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A round float line in the pool has the same center as the pool. It passes through (0, 3). Which equation describes it?",
          choices: [
            { letter: "A", text: "(x + 2)² + (y − 2)² = √5" },
            { letter: "B", text: "x² + (y − 3)² = 5" },
            { letter: "C", text: "(x + 2)² + (y − 2)² = 3" },
            { letter: "D", text: "(x + 2)² + (y − 2)² = 5" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc4-raid-shot-put",
      family: "GEO",
      mode: "raid",
      title: "The Shot Put Throw",
      kind: "Equations of circles · G.PC.4",
      blurb: "A throw from the center of the ring and the distance arcs.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"First-quadrant axes in meters with the throwing ring at the origin O. Two rays form the landing sector, and dashed arcs mark 10 m and 15 m from O. A gold segment runs from O to the landing point L (9, 12) on the 15 m arc, with a dashed vertical leg down to (9, 0) and a right angle there.\">" +
        "<line class=\"ax\" x1=\"40\" y1=\"142\" x2=\"192\" y2=\"142\"/><line class=\"ax\" x1=\"40\" y1=\"142\" x2=\"40\" y2=\"10\"/><line class=\"thin\" x1=\"80\" y1=\"139\" x2=\"80\" y2=\"145\"/><text class=\"sm\" x=\"80\" y=\"155\" text-anchor=\"middle\">5</text>" +
        "<line class=\"thin\" x1=\"37\" y1=\"102\" x2=\"43\" y2=\"102\"/><text class=\"sm\" x=\"34\" y=\"106\" text-anchor=\"end\">5</text><line class=\"thin\" x1=\"120\" y1=\"139\" x2=\"120\" y2=\"145\"/><text class=\"sm\" x=\"120\" y=\"155\" text-anchor=\"middle\">10</text>" +
        "<line class=\"thin\" x1=\"37\" y1=\"62\" x2=\"43\" y2=\"62\"/><text class=\"sm\" x=\"34\" y=\"66\" text-anchor=\"end\">10</text><line class=\"thin\" x1=\"160\" y1=\"139\" x2=\"160\" y2=\"145\"/><text class=\"sm\" x=\"160\" y=\"155\" text-anchor=\"middle\">15</text>" +
        "<line class=\"thin\" x1=\"37\" y1=\"22\" x2=\"43\" y2=\"22\"/><text class=\"sm\" x=\"34\" y=\"26\" text-anchor=\"end\">15</text><line class=\"ln\" x1=\"40\" y1=\"142\" x2=\"151.4\" y2=\"64\"/><line class=\"ln\" x1=\"40\" y1=\"142\" x2=\"86.5\" y2=\"14.2\"/>" +
        "<path class=\"thin dash\" d=\"M105.5 96.1 A80 80 0 0 0 67.4 66.8\"/><path class=\"thin dash\" d=\"M138.3 73.2 A120 120 0 0 0 81 29.2\"/><line class=\"thin dash\" x1=\"112\" y1=\"142\" x2=\"112\" y2=\"46\"/><path class=\"thin\" d=\"M106 142 V136 H112\"/>" +
        "<line class=\"ac\" x1=\"40\" y1=\"142\" x2=\"112\" y2=\"46\"/><circle class=\"dt\" cx=\"40\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"112\" cy=\"46\" r=\"3\"/><text x=\"118\" y=\"42\">L(9, 12)</text><text x=\"32\" y=\"154\" text-anchor=\"end\">O</text>" +
        "<text class=\"sm\" x=\"116\" y=\"108\">10 m</text><text class=\"sm\" x=\"142\" y=\"84\">15 m</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">In a shot put event, the throw starts at the center <strong>O</strong>(0, 0) of the ring. Distances are in meters. A throw lands at <strong>L</strong>(9, 12). The dashed arcs are 10 m and 15 m from <strong>O</strong>.</p>",
      claims: [
        {
          id: "pyth",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which equation uses the Pythagorean theorem to find the length of the throw, OL?",
          choices: [
            { letter: "A", text: "9 + 12 = OL" },
            { letter: "B", text: "9² + 12² = OL²" },
            { letter: "C", text: "12² − 9² = OL²" },
            { letter: "D", text: "9² + 12² = OL" }
          ],
          correct: "B"
        },
        {
          id: "length",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "How far from O did the throw land?",
          choices: [
            { letter: "A", text: "21 m" },
            { letter: "B", text: "3√7 m" },
            { letter: "C", text: "225 m" },
            { letter: "D", text: "15 m" }
          ],
          correct: "D"
        },
        {
          id: "arc",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the circle with center O that passes through L?",
          choices: [
            { letter: "A", text: "x² + y² = 225" },
            { letter: "B", text: "x² + y² = 15" },
            { letter: "C", text: "(x − 9)² + (y − 12)² = 225" },
            { letter: "D", text: "x² + y² = 441" }
          ],
          correct: "A"
        },
        {
          id: "another",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Another throw lands at (10, 13). To the nearest tenth of a meter, how far from O is it?",
          choices: [
            { letter: "A", text: "23.0 m" },
            { letter: "B", text: "8.3 m" },
            { letter: "C", text: "16.4 m" },
            { letter: "D", text: "269.0 m" }
          ],
          correct: "C"
        },
        {
          id: "short",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "The 14-meter line is the arc x² + y² = 196. Which landing point is short of that line?",
          choices: [
            { letter: "A", text: "(9, 11)" },
            { letter: "B", text: "(0, 14)" },
            { letter: "C", text: "(6, 12)" },
            { letter: "D", text: "(13, 6)" }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Why does a circle with center (0, 0) and radius r have the equation x² + y² = r²?",
          choices: [
            { letter: "A", text: "The distance from (0, 0) to (x, y) is √(x² + y²), and it is r." },
            { letter: "B", text: "The legs x and y of a right triangle add up to r." },
            { letter: "C", text: "The slope from (0, 0) to (x, y) is always r." },
            { letter: "D", text: "Every point (x, y) is r units right and r units up." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc4-raid-skate-bowls",
      family: "GEO",
      mode: "raid",
      title: "Two Skate Bowls",
      kind: "Equations of circles · G.PC.4",
      blurb: "Two round skate bowls, their equations and the gap between them.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 142\" role=\"img\" aria-label=\"Coordinate grid from x = −7 to 7 and y = −5 to 4 with two shaded circles: bowl A centered at A (−4, 1) and a larger bowl B centered at B (3, −1). The circles do not touch.\">" +
        "<line class=\"gr\" x1=\"76\" y1=\"122\" x2=\"76\" y2=\"14\"/><line class=\"gr\" x1=\"88\" y1=\"122\" x2=\"88\" y2=\"14\"/><line class=\"gr\" x1=\"100\" y1=\"122\" x2=\"100\" y2=\"14\"/><line class=\"gr\" x1=\"112\" y1=\"122\" x2=\"112\" y2=\"14\"/>" +
        "<line class=\"gr\" x1=\"124\" y1=\"122\" x2=\"124\" y2=\"14\"/><line class=\"gr\" x1=\"136\" y1=\"122\" x2=\"136\" y2=\"14\"/><line class=\"gr\" x1=\"148\" y1=\"122\" x2=\"148\" y2=\"14\"/><line class=\"gr\" x1=\"160\" y1=\"122\" x2=\"160\" y2=\"14\"/>" +
        "<line class=\"gr\" x1=\"172\" y1=\"122\" x2=\"172\" y2=\"14\"/><line class=\"gr\" x1=\"184\" y1=\"122\" x2=\"184\" y2=\"14\"/><line class=\"gr\" x1=\"196\" y1=\"122\" x2=\"196\" y2=\"14\"/><line class=\"gr\" x1=\"208\" y1=\"122\" x2=\"208\" y2=\"14\"/>" +
        "<line class=\"gr\" x1=\"220\" y1=\"122\" x2=\"220\" y2=\"14\"/><line class=\"gr\" x1=\"232\" y1=\"122\" x2=\"232\" y2=\"14\"/><line class=\"gr\" x1=\"244\" y1=\"122\" x2=\"244\" y2=\"14\"/><line class=\"gr\" x1=\"76\" y1=\"122\" x2=\"244\" y2=\"122\"/>" +
        "<line class=\"gr\" x1=\"76\" y1=\"110\" x2=\"244\" y2=\"110\"/><line class=\"gr\" x1=\"76\" y1=\"98\" x2=\"244\" y2=\"98\"/><line class=\"gr\" x1=\"76\" y1=\"86\" x2=\"244\" y2=\"86\"/><line class=\"gr\" x1=\"76\" y1=\"74\" x2=\"244\" y2=\"74\"/><line class=\"gr\" x1=\"76\" y1=\"62\" x2=\"244\" y2=\"62\"/>" +
        "<line class=\"gr\" x1=\"76\" y1=\"50\" x2=\"244\" y2=\"50\"/><line class=\"gr\" x1=\"76\" y1=\"38\" x2=\"244\" y2=\"38\"/><line class=\"gr\" x1=\"76\" y1=\"26\" x2=\"244\" y2=\"26\"/><line class=\"gr\" x1=\"76\" y1=\"14\" x2=\"244\" y2=\"14\"/><line class=\"ax\" x1=\"76\" y1=\"62\" x2=\"244\" y2=\"62\"/>" +
        "<line class=\"ax\" x1=\"160\" y1=\"122\" x2=\"160\" y2=\"14\"/><text class=\"sm\" x=\"88\" y=\"135\" text-anchor=\"middle\">−6</text><text class=\"sm\" x=\"112\" y=\"135\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"136\" y=\"135\" text-anchor=\"middle\">−2</text>" +
        "<text class=\"sm\" x=\"160\" y=\"135\" text-anchor=\"middle\">0</text><text class=\"sm\" x=\"184\" y=\"135\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"208\" y=\"135\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"232\" y=\"135\" text-anchor=\"middle\">6</text>" +
        "<text class=\"sm\" x=\"71\" y=\"114\" text-anchor=\"end\">−4</text><text class=\"sm\" x=\"71\" y=\"90\" text-anchor=\"end\">−2</text><text class=\"sm\" x=\"71\" y=\"42\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"71\" y=\"18\" text-anchor=\"end\">4</text>" +
        "<circle class=\"sh2\" cx=\"112\" cy=\"50\" r=\"33.9\"/><circle class=\"sh2\" cx=\"196\" cy=\"74\" r=\"41.6\"/><circle class=\"dt\" cx=\"112\" cy=\"50\" r=\"3\"/><circle class=\"dt\" cx=\"196\" cy=\"74\" r=\"3\"/><text x=\"117\" y=\"45\">A</text><text x=\"201\" y=\"69\">B</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">Two round skate bowls are drawn on a grid in meters. Bowl A has center <strong>A</strong> and edge (x + 4)² + (y − 1)² = 8. Bowl B has center <strong>B</strong> and edge (x − 3)² + (y + 1)² = 12.</p>",
      claims: [
        {
          id: "bowl-a",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the center and radius of bowl A?",
          choices: [
            { letter: "A", text: "(4, −1); r = 2√2" },
            { letter: "B", text: "(−4, 1); r = 4" },
            { letter: "C", text: "(−4, 1); r = 2√2" },
            { letter: "D", text: "(−4, 1); r = 8" }
          ],
          correct: "C"
        },
        {
          id: "bowl-b",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What is the radius of bowl B?",
          choices: [
            { letter: "A", text: "2√3 m" },
            { letter: "B", text: "6 m" },
            { letter: "C", text: "12 m" },
            { letter: "D", text: "4√3 m" }
          ],
          correct: "A"
        },
        {
          id: "gap",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives the distance between the centers of the two bowls?",
          choices: [
            { letter: "A", text: "√((3 − 4)² + (−1 + 1)²)" },
            { letter: "B", text: "(3 + 4)² + (−1 − 1)²" },
            { letter: "C", text: "√((3 + 4)² − (−1 − 1)²)" },
            { letter: "D", text: "√((3 + 4)² + (−1 − 1)²)" }
          ],
          correct: "D"
        },
        {
          id: "overlap",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Do the two bowls overlap? Lengths are rounded to the nearest tenth of a meter.",
          choices: [
            { letter: "A", text: "Yes: centers 7.3 m apart, radii add to 20.0 m" },
            { letter: "B", text: "No: centers 7.3 m apart, radii add to 6.3 m" },
            { letter: "C", text: "Yes: centers 7.3 m apart, radii add to 10.0 m" },
            { letter: "D", text: "No: centers 9.0 m apart, radii add to 6.3 m" }
          ],
          correct: "B"
        },
        {
          id: "third",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A third bowl will have center (1, 9). Its edge will pass through (6, 7). Which equation describes its edge?",
          choices: [
            { letter: "A", text: "(x + 1)² + (y + 9)² = 29" },
            { letter: "B", text: "(x − 6)² + (y − 7)² = 29" },
            { letter: "C", text: "(x − 1)² + (y − 9)² = 29" },
            { letter: "D", text: "(x − 1)² + (y − 9)² = 49" }
          ],
          correct: "C"
        },
        {
          id: "inside-b",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Which point is inside bowl B?",
          choices: [
            { letter: "A", text: "(5, 1)" },
            { letter: "B", text: "(6, −3)" },
            { letter: "C", text: "(−3, 1)" },
            { letter: "D", text: "(3, 3)" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc4-raid-mini-golf",
      family: "GEO",
      mode: "raid",
      title: "The Mini-Golf Pond",
      kind: "Equations of circles · G.PC.4",
      blurb: "Complete the square to find a pond's center on a mini-golf plan.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Coordinate axes on a mini-golf plan. A shaded round pond passes through the tee T at the origin; most of the pond is right of the y-axis and below the x-axis. A flag marks the hole to the right of the pond.\">" +
        "<circle class=\"sh2\" cx=\"150\" cy=\"72\" r=\"51\"/><line class=\"ax\" x1=\"80\" y1=\"62\" x2=\"225\" y2=\"62\"/><line class=\"ax\" x1=\"100\" y1=\"137\" x2=\"100\" y2=\"12\"/><line class=\"thin\" x1=\"80\" y1=\"59.5\" x2=\"80\" y2=\"64.5\"/>" +
        "<line class=\"thin\" x1=\"90\" y1=\"59.5\" x2=\"90\" y2=\"64.5\"/><line class=\"thin\" x1=\"110\" y1=\"59.5\" x2=\"110\" y2=\"64.5\"/><line class=\"thin\" x1=\"120\" y1=\"59.5\" x2=\"120\" y2=\"64.5\"/><line class=\"thin\" x1=\"130\" y1=\"59.5\" x2=\"130\" y2=\"64.5\"/>" +
        "<line class=\"thin\" x1=\"140\" y1=\"59.5\" x2=\"140\" y2=\"64.5\"/><line class=\"thin\" x1=\"150\" y1=\"59.5\" x2=\"150\" y2=\"64.5\"/><line class=\"thin\" x1=\"160\" y1=\"59.5\" x2=\"160\" y2=\"64.5\"/><line class=\"thin\" x1=\"170\" y1=\"59.5\" x2=\"170\" y2=\"64.5\"/>" +
        "<line class=\"thin\" x1=\"180\" y1=\"59.5\" x2=\"180\" y2=\"64.5\"/><line class=\"thin\" x1=\"190\" y1=\"59.5\" x2=\"190\" y2=\"64.5\"/><line class=\"thin\" x1=\"200\" y1=\"59.5\" x2=\"200\" y2=\"64.5\"/><line class=\"thin\" x1=\"210\" y1=\"59.5\" x2=\"210\" y2=\"64.5\"/>" +
        "<line class=\"thin\" x1=\"220\" y1=\"59.5\" x2=\"220\" y2=\"64.5\"/><line class=\"thin\" x1=\"97.5\" y1=\"132\" x2=\"102.5\" y2=\"132\"/><line class=\"thin\" x1=\"97.5\" y1=\"122\" x2=\"102.5\" y2=\"122\"/><line class=\"thin\" x1=\"97.5\" y1=\"112\" x2=\"102.5\" y2=\"112\"/>" +
        "<line class=\"thin\" x1=\"97.5\" y1=\"102\" x2=\"102.5\" y2=\"102\"/><line class=\"thin\" x1=\"97.5\" y1=\"92\" x2=\"102.5\" y2=\"92\"/><line class=\"thin\" x1=\"97.5\" y1=\"82\" x2=\"102.5\" y2=\"82\"/><line class=\"thin\" x1=\"97.5\" y1=\"72\" x2=\"102.5\" y2=\"72\"/>" +
        "<line class=\"thin\" x1=\"97.5\" y1=\"52\" x2=\"102.5\" y2=\"52\"/><line class=\"thin\" x1=\"97.5\" y1=\"42\" x2=\"102.5\" y2=\"42\"/><line class=\"thin\" x1=\"97.5\" y1=\"32\" x2=\"102.5\" y2=\"32\"/><line class=\"thin\" x1=\"97.5\" y1=\"22\" x2=\"102.5\" y2=\"22\"/>" +
        "<line class=\"thin\" x1=\"97.5\" y1=\"12\" x2=\"102.5\" y2=\"12\"/><text class=\"sm\" x=\"140\" y=\"76\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"180\" y=\"76\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"94\" y=\"26\" text-anchor=\"end\">4</text>" +
        "<text class=\"sm\" x=\"94\" y=\"106\" text-anchor=\"end\">−4</text><circle class=\"dt\" cx=\"100\" cy=\"62\" r=\"3\"/><text x=\"94\" y=\"56\" text-anchor=\"end\">T</text><text class=\"sm\" x=\"150\" y=\"106\" text-anchor=\"middle\">pond</text><circle class=\"dt\" cx=\"220\" cy=\"32\" r=\"3\"/>" +
        "<line class=\"thin\" x1=\"220\" y1=\"32\" x2=\"220\" y2=\"10\"/><path class=\"sh\" d=\"M220 10 l14 5 l-14 5 z\"/><text class=\"sm\" x=\"220\" y=\"47\" text-anchor=\"middle\">hole</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a mini-golf plan (units in feet), the edge of a round pond has the equation x² + y² − 10x + 2y = 0. The tee <strong>T</strong> is at the origin.</p>",
      claims: [
        {
          id: "square",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "To complete the square, which numbers are added to both sides of x² − 10x + y² + 2y = 0?",
          choices: [
            { letter: "A", text: "5 and 1" },
            { letter: "B", text: "25 and 1" },
            { letter: "C", text: "100 and 4" },
            { letter: "D", text: "−25 and 1" }
          ],
          correct: "B"
        },
        {
          id: "center",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "What are the center and radius of the pond?",
          choices: [
            { letter: "A", text: "(−5, 1); r = √26" },
            { letter: "B", text: "(5, −1); r = 26" },
            { letter: "C", text: "(5, −1); r = 2√6" },
            { letter: "D", text: "(5, −1); r = √26" }
          ],
          correct: "D"
        },
        {
          id: "tee",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which reason shows that the tee T(0, 0) is on the edge of the pond?",
          choices: [
            { letter: "A", text: "It is √(5² + 1²) = √26 ft from the center (5, −1)." },
            { letter: "B", text: "It is √(5² + 1²) = √26 ft from the center (−5, 1)." },
            { letter: "C", text: "Every circle's equation is true at the point (0, 0)." },
            { letter: "D", text: "It is 5 + 1 = 6 ft from the center (5, −1)." }
          ],
          correct: "A"
        },
        {
          id: "ball",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A golf ball stops at (8, 3). Is it in the pond?",
          choices: [
            { letter: "A", text: "No: 8² + 3² = 73, more than 26" },
            { letter: "B", text: "No: (8 + 5)² + (3 − 1)² = 173, more than 26" },
            { letter: "C", text: "Yes: (8 − 5)² + (3 + 1)² = 25, less than 26" },
            { letter: "D", text: "No: 3 + 4 = 7, more than √26" }
          ],
          correct: "C"
        },
        {
          id: "path",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "A round walking path has the same center as the pond. It passes through a bench at (−1, 5). Which equation describes the path?",
          choices: [
            { letter: "A", text: "(x − 5)² + (y + 1)² = 6√2" },
            { letter: "B", text: "(x − 5)² + (y + 1)² = 72" },
            { letter: "C", text: "(x + 5)² + (y − 1)² = 72" },
            { letter: "D", text: "(x + 1)² + (y − 5)² = 72" }
          ],
          correct: "B"
        },
        {
          id: "crossing",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "The edge of the pond crosses the x-axis at T and at one other point. Which point?",
          choices: [
            { letter: "A", text: "(5, 0)" },
            { letter: "B", text: "(−10, 0)" },
            { letter: "C", text: "(0, −2)" },
            { letter: "D", text: "(10, 0)" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc4-raid-blast-zone",
      family: "GEO",
      mode: "raid",
      title: "The Blast Zone",
      kind: "Equations of circles · G.PC.4",
      blurb: "A board game bomb, its circular blast and the pieces in range.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"A 12 by 12 game board grid. A gold token B at (6, 6) is the center of a dashed gold circle that passes through the tower T at (1, 3) and piece A at (9, 11). Piece C at (2, 10) and piece E at (10, 9) are inside the circle; piece D at (11, 2) is outside.\">" +
        "<line class=\"gr\" x1=\"97\" y1=\"138\" x2=\"97\" y2=\"12\"/><line class=\"gr\" x1=\"107.5\" y1=\"138\" x2=\"107.5\" y2=\"12\"/><line class=\"gr\" x1=\"118\" y1=\"138\" x2=\"118\" y2=\"12\"/><line class=\"gr\" x1=\"128.5\" y1=\"138\" x2=\"128.5\" y2=\"12\"/>" +
        "<line class=\"gr\" x1=\"139\" y1=\"138\" x2=\"139\" y2=\"12\"/><line class=\"gr\" x1=\"149.5\" y1=\"138\" x2=\"149.5\" y2=\"12\"/><line class=\"gr\" x1=\"160\" y1=\"138\" x2=\"160\" y2=\"12\"/><line class=\"gr\" x1=\"170.5\" y1=\"138\" x2=\"170.5\" y2=\"12\"/>" +
        "<line class=\"gr\" x1=\"181\" y1=\"138\" x2=\"181\" y2=\"12\"/><line class=\"gr\" x1=\"191.5\" y1=\"138\" x2=\"191.5\" y2=\"12\"/><line class=\"gr\" x1=\"202\" y1=\"138\" x2=\"202\" y2=\"12\"/><line class=\"gr\" x1=\"212.5\" y1=\"138\" x2=\"212.5\" y2=\"12\"/>" +
        "<line class=\"gr\" x1=\"223\" y1=\"138\" x2=\"223\" y2=\"12\"/><line class=\"gr\" x1=\"97\" y1=\"138\" x2=\"223\" y2=\"138\"/><line class=\"gr\" x1=\"97\" y1=\"127.5\" x2=\"223\" y2=\"127.5\"/><line class=\"gr\" x1=\"97\" y1=\"117\" x2=\"223\" y2=\"117\"/>" +
        "<line class=\"gr\" x1=\"97\" y1=\"106.5\" x2=\"223\" y2=\"106.5\"/><line class=\"gr\" x1=\"97\" y1=\"96\" x2=\"223\" y2=\"96\"/><line class=\"gr\" x1=\"97\" y1=\"85.5\" x2=\"223\" y2=\"85.5\"/><line class=\"gr\" x1=\"97\" y1=\"75\" x2=\"223\" y2=\"75\"/>" +
        "<line class=\"gr\" x1=\"97\" y1=\"64.5\" x2=\"223\" y2=\"64.5\"/><line class=\"gr\" x1=\"97\" y1=\"54\" x2=\"223\" y2=\"54\"/><line class=\"gr\" x1=\"97\" y1=\"43.5\" x2=\"223\" y2=\"43.5\"/><line class=\"gr\" x1=\"97\" y1=\"33\" x2=\"223\" y2=\"33\"/>" +
        "<line class=\"gr\" x1=\"97\" y1=\"22.5\" x2=\"223\" y2=\"22.5\"/><line class=\"gr\" x1=\"97\" y1=\"12\" x2=\"223\" y2=\"12\"/><rect class=\"ln\" x=\"97\" y=\"12\" width=\"126\" height=\"126\"/><text class=\"sm\" x=\"118\" y=\"151\" text-anchor=\"middle\">2</text>" +
        "<text class=\"sm\" x=\"139\" y=\"151\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"160\" y=\"151\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"181\" y=\"151\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"202\" y=\"151\" text-anchor=\"middle\">10</text>" +
        "<text class=\"sm\" x=\"223\" y=\"151\" text-anchor=\"middle\">12</text><text class=\"sm\" x=\"92\" y=\"121\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"92\" y=\"100\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"92\" y=\"79\" text-anchor=\"end\">6</text>" +
        "<text class=\"sm\" x=\"92\" y=\"58\" text-anchor=\"end\">8</text><text class=\"sm\" x=\"92\" y=\"37\" text-anchor=\"end\">10</text><text class=\"sm\" x=\"92\" y=\"16\" text-anchor=\"end\">12</text><circle class=\"ac dash\" cx=\"160\" cy=\"75\" r=\"61.2\"/>" +
        "<circle class=\"dta\" cx=\"160\" cy=\"75\" r=\"3\"/><circle class=\"dt\" cx=\"107.5\" cy=\"106.5\" r=\"3\"/><circle class=\"dt\" cx=\"191.5\" cy=\"22.5\" r=\"3\"/><circle class=\"dt\" cx=\"118\" cy=\"33\" r=\"3\"/><circle class=\"dt\" cx=\"212.5\" cy=\"117\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"202\" cy=\"43.5\" r=\"3\"/><text x=\"166\" y=\"70\">B</text><text x=\"111.5\" y=\"120.5\">T</text><text x=\"197.5\" y=\"26.5\">A</text><text x=\"124\" y=\"30\">C</text><text x=\"206.5\" y=\"113\" text-anchor=\"end\">D</text><text x=\"208\" y=\"47.5\">E</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">On a game board, the bomb token <strong>B</strong> is at (6, 6). Its blast reaches exactly as far as the tower <strong>T</strong>(1, 3) in every direction; the dashed circle is the edge of the blast. <strong>A</strong>, <strong>C</strong>, <strong>D</strong> and <strong>E</strong> are game pieces.</p>",
      claims: [
        {
          id: "edge",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "Which equation describes the edge of the blast?",
          choices: [
            { letter: "A", text: "(x + 6)² + (y + 6)² = 34" },
            { letter: "B", text: "(x − 6)² + (y − 6)² = √34" },
            { letter: "C", text: "(x − 6)² + (y − 6)² = 34" },
            { letter: "D", text: "(x − 1)² + (y − 3)² = 34" }
          ],
          correct: "C"
        },
        {
          id: "bt",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Which expression gives the distance BT?",
          choices: [
            { letter: "A", text: "√((6 − 1)² + (6 − 3)²)" },
            { letter: "B", text: "√((6 + 1)² + (6 + 3)²)" },
            { letter: "C", text: "(6 − 1)² + (6 − 3)²" },
            { letter: "D", text: "√((6 − 6)² + (1 − 3)²)" }
          ],
          correct: "A"
        },
        {
          id: "safe",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "A piece is hit if it is as close to B as T is, or closer. Which piece is NOT hit?",
          choices: [
            { letter: "A", text: "A at (9, 11)" },
            { letter: "B", text: "C at (2, 10)" },
            { letter: "C", text: "E at (10, 9)" },
            { letter: "D", text: "D at (11, 2)" }
          ],
          correct: "D"
        },
        {
          id: "slide",
          sol: "G.PC.4",
          sub: "G.PC.4.2",
          stem: "The token slides 3 squares left and 2 squares down. The blast size stays the same. Which equation describes the new edge?",
          choices: [
            { letter: "A", text: "(x − 9)² + (y − 8)² = 34" },
            { letter: "B", text: "(x − 3)² + (y − 4)² = 34" },
            { letter: "C", text: "(x + 3)² + (y + 4)² = 34" },
            { letter: "D", text: "(x − 3)² + (y − 4)² = 29" }
          ],
          correct: "B"
        },
        {
          id: "next",
          sol: "G.PC.4",
          sub: "G.PC.4.3",
          stem: "Sam writes √((x − 6)² + (y − 6)²) = √34 for a point (x, y) on the edge of the blast. Which equation should come next?",
          choices: [
            { letter: "A", text: "(x − 6) + (y − 6) = √34" },
            { letter: "B", text: "(x − 6)² + (y − 6)² = 34" },
            { letter: "C", text: "(x − 6)² + (y − 6)² = √34" },
            { letter: "D", text: "(x − 6)² + (y − 6)² = 1156" }
          ],
          correct: "B"
        },
        {
          id: "reach",
          sol: "G.PC.4",
          sub: "G.PC.4.1",
          stem: "Each square on the board is 2 cm wide. To the nearest tenth of a centimeter, how far does the blast reach from B?",
          choices: [
            { letter: "A", text: "5.8 cm" },
            { letter: "B", text: "68.0 cm" },
            { letter: "C", text: "11.7 cm" },
            { letter: "D", text: "16.0 cm" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
