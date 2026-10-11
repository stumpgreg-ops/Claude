/* SOL Labyrinth — Geometry game (family GEO), v5.20: G.TR.4 (right triangles: the Pythagorean theorem and its
   converse, special right triangles, trigonometric ratios, angles of elevation and depression) for two game modes:
   maze (Labyrinth — a school building and its grounds) and raid (Eagle Swoop — sports and games).
   Original items only. Every number was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      "id": "geo-tr4-maze-courtyard",
      "family": "GEO",
      "mode": "maze",
      "title": "The Courtyard Shortcut",
      "kind": "Triangles · G.TR.4",
      "blurb": "A diagonal path across a 24-yd by 7-yd courtyard.",
      "level": 1,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 136\" role=\"img\" aria-label=\"Rectangle ABCD, 24 yards long and 7 yards wide, with a diagonal path from corner A to corner C\"><polygon class=\"sh2\" points=\"35,106 275,106 275,36 35,36\"/><line class=\"ac\" x1=\"35\" y1=\"106\" x2=\"275\" y2=\"36\"/><path class=\"thin\" d=\"M266 106 L266 97 L275 97\"/><path class=\"thin\" d=\"M35 45 L44 45 L44 36\"/><path class=\"thin\" d=\"M69 106 A34 34 0 0 0 67.6 96.5\"/><circle class=\"dt\" cx=\"35\" cy=\"106\" r=\"3\"/><circle class=\"dt\" cx=\"275\" cy=\"106\" r=\"3\"/><circle class=\"dt\" cx=\"275\" cy=\"36\" r=\"3\"/><circle class=\"dt\" cx=\"35\" cy=\"36\" r=\"3\"/><text x=\"24\" y=\"123\" text-anchor=\"middle\">A</text><text x=\"286\" y=\"123\" text-anchor=\"middle\">B</text><text x=\"286\" y=\"32\" text-anchor=\"middle\">C</text><text x=\"24\" y=\"32\" text-anchor=\"middle\">D</text><text x=\"155\" y=\"127\" text-anchor=\"middle\">24 yd</text><text x=\"296\" y=\"76\" text-anchor=\"middle\">7 yd</text><text class=\"sm\" x=\"151.4\" y=\"62.5\" text-anchor=\"middle\">path</text></svg></figure><p class=\"geo-given\">The school courtyard is rectangle <strong>ABCD</strong>. Side <strong>AB</strong> is 24 yd and side <strong>BC</strong> is 7 yd. Students cut across on the straight path <strong>AC</strong>.</p>",
      "claims": [
        {
          "id": "path",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How long is the diagonal path AC?",
          "choices": [
            {
              "letter": "A",
              "text": "31 yd"
            },
            {
              "letter": "B",
              "text": "25 yd"
            },
            {
              "letter": "C",
              "text": "about 23.0 yd"
            },
            {
              "letter": "D",
              "text": "625 yd"
            }
          ],
          "correct": "B"
        },
        {
          "id": "saved",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How many yards shorter is the path AC than walking from A to B to C along the edges?",
          "choices": [
            {
              "letter": "A",
              "text": "6 yd"
            },
            {
              "letter": "B",
              "text": "17 yd"
            },
            {
              "letter": "C",
              "text": "25 yd"
            },
            {
              "letter": "D",
              "text": "about 8.0 yd"
            }
          ],
          "correct": "A"
        },
        {
          "id": "tan",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which ratio is equal to tan ∠CAB?",
          "choices": [
            {
              "letter": "A",
              "text": "24/7"
            },
            {
              "letter": "B",
              "text": "7/25"
            },
            {
              "letter": "C",
              "text": "24/25"
            },
            {
              "letter": "D",
              "text": "7/24"
            }
          ],
          "correct": "D"
        },
        {
          "id": "angle",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest degree, what angle does the path make with side AB (m∠CAB)?",
          "choices": [
            {
              "letter": "A",
              "text": "74°"
            },
            {
              "letter": "B",
              "text": "17°"
            },
            {
              "letter": "C",
              "text": "16°"
            },
            {
              "letter": "D",
              "text": "73°"
            }
          ],
          "correct": "C"
        },
        {
          "id": "patio",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "The cafeteria patio is a square with 9-yd sides. What is the exact length of its diagonal?",
          "choices": [
            {
              "letter": "A",
              "text": "9√2 yd"
            },
            {
              "letter": "B",
              "text": "18 yd"
            },
            {
              "letter": "C",
              "text": "9√3 yd"
            },
            {
              "letter": "D",
              "text": "4.5√2 yd"
            }
          ],
          "correct": "A"
        },
        {
          "id": "mural",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "The art club wants a triangle with a right angle for a hallway mural. Which side lengths, in feet, form a right triangle?",
          "choices": [
            {
              "letter": "A",
              "text": "8, 15, 16"
            },
            {
              "letter": "B",
              "text": "9, 40, 41"
            },
            {
              "letter": "C",
              "text": "10, 24, 25"
            },
            {
              "letter": "D",
              "text": "7, 24, 26"
            }
          ],
          "correct": "B"
        }
      ]
    },
    {
      "id": "geo-tr4-maze-bleachers",
      "family": "GEO",
      "mode": "maze",
      "title": "The Gym Bleachers",
      "kind": "Triangles · G.TR.4",
      "blurb": "Bleachers that rise at 33° over an 18-ft floor.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"Side view of bleachers: right triangle FGT with the right angle at G, floor FG 18 feet, and the front edge FT rising at 33 degrees from F, with nine equal rows of steps\"><polygon class=\"sh2\" points=\"46,134 208,134 208,28.8\"/><polyline class=\"thin\" points=\"46,134 46,122.3 64,122.3 64,110.6 82,110.6 82,98.9 100,98.9 100,87.2 118,87.2 118,75.6 136,75.6 136,63.9 154,63.9 154,52.2 172,52.2 172,40.5 190,40.5 190,28.8 208,28.8\"/><line class=\"ac\" x1=\"46\" y1=\"134\" x2=\"208\" y2=\"28.8\"/><line class=\"ln\" x1=\"208\" y1=\"134\" x2=\"208\" y2=\"28.8\"/><line class=\"ln\" x1=\"46\" y1=\"134\" x2=\"208\" y2=\"134\"/><line class=\"thin dash\" x1=\"208\" y1=\"28.8\" x2=\"112\" y2=\"28.8\"/><path class=\"thin\" d=\"M199 134 L199 125 L208 125\"/><path class=\"thin\" d=\"M80 134 A34 34 0 0 0 74.5 115.5\"/><circle class=\"dt\" cx=\"46\" cy=\"134\" r=\"3\"/><circle class=\"dt\" cx=\"208\" cy=\"134\" r=\"3\"/><circle class=\"dt\" cx=\"208\" cy=\"28.8\" r=\"3\"/><text x=\"35\" y=\"149\" text-anchor=\"middle\">F</text><text x=\"219\" y=\"149\" text-anchor=\"middle\">G</text><text x=\"219\" y=\"29.8\" text-anchor=\"middle\">T</text><text x=\"127\" y=\"155\" text-anchor=\"middle\">18 ft</text><text x=\"108.6\" y=\"125.7\" text-anchor=\"middle\">33°</text><text class=\"sm\" x=\"248\" y=\"85.4\" text-anchor=\"middle\">back wall</text></svg></figure><p class=\"geo-given\">A side view of the gym bleachers is right triangle <strong>FGT</strong>, with the right angle at <strong>G</strong>. The floor depth <strong>FG</strong> is 18 ft, and the front edge <strong>FT</strong> rises at 33° from the floor at <strong>F</strong>.</p>",
      "claims": [
        {
          "id": "height",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest tenth of a foot, how tall are the bleachers (GT)?",
          "choices": [
            {
              "letter": "A",
              "text": "9.8 ft"
            },
            {
              "letter": "B",
              "text": "15.1 ft"
            },
            {
              "letter": "C",
              "text": "11.7 ft"
            },
            {
              "letter": "D",
              "text": "27.7 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "edge",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest tenth of a foot, how long is the sloped front edge FT?",
          "choices": [
            {
              "letter": "A",
              "text": "15.1 ft"
            },
            {
              "letter": "B",
              "text": "33.0 ft"
            },
            {
              "letter": "C",
              "text": "29.7 ft"
            },
            {
              "letter": "D",
              "text": "21.5 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "rows",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "The bleachers have 9 rows of equal height from F up to T. To the nearest tenth of a foot, how much does each row rise?",
          "choices": [
            {
              "letter": "A",
              "text": "2.0 ft"
            },
            {
              "letter": "B",
              "text": "1.3 ft"
            },
            {
              "letter": "C",
              "text": "2.4 ft"
            },
            {
              "letter": "D",
              "text": "1.1 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "depress",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "A student at T looks down at F. What is the angle of depression from T to F, and why?",
          "choices": [
            {
              "letter": "A",
              "text": "33°: it and ∠F are alternate interior angles"
            },
            {
              "letter": "B",
              "text": "57°: it and ∠F are complementary"
            },
            {
              "letter": "C",
              "text": "57°: it is equal to ∠FTG"
            },
            {
              "letter": "D",
              "text": "147°: it and ∠F form a linear pair"
            }
          ],
          "correct": "A"
        },
        {
          "id": "newset",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A new set of bleachers will rise at 30° from the floor over the same 18-ft floor depth. What is its exact height?",
          "choices": [
            {
              "letter": "A",
              "text": "9 ft"
            },
            {
              "letter": "B",
              "text": "18√3 ft"
            },
            {
              "letter": "C",
              "text": "9√3 ft"
            },
            {
              "letter": "D",
              "text": "6√3 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "brace",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "Jai says a brace triangle with sides 6 ft, 9 ft and 11 ft is acute, because 6 + 9 is more than 11. What is his error?",
          "choices": [
            {
              "letter": "A",
              "text": "He must compare 11² to 6² + 9²; 121 is more than 117, so it is acute."
            },
            {
              "letter": "B",
              "text": "He must compare 11² to 6² + 9²; 121 is close to 117, so it is right."
            },
            {
              "letter": "C",
              "text": "He must compare 11² to 6² + 9²; 121 is more than 117, so it is obtuse."
            },
            {
              "letter": "D",
              "text": "There is no error; a triangle is acute when the two short sides add to more than the long side."
            }
          ],
          "correct": "C"
        }
      ]
    },
    {
      "id": "geo-tr4-maze-parking",
      "family": "GEO",
      "mode": "maze",
      "title": "The Angled Parking Spaces",
      "kind": "Triangles · G.TR.4",
      "blurb": "Parking stripes at 60° to the curb.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Three parallel parking stripes meet a straight curb at 60 degree angles, 11 feet apart along the curb; stripe PQ is 16 feet long and QR is perpendicular to the curb\"><line class=\"ln\" x1=\"8\" y1=\"138\" x2=\"312\" y2=\"138\"/><line class=\"ln\" x1=\"22\" y1=\"138\" x2=\"86\" y2=\"27.1\"/><line class=\"ln\" x1=\"110\" y1=\"138\" x2=\"174\" y2=\"27.1\"/><line class=\"ac\" x1=\"198\" y1=\"138\" x2=\"262\" y2=\"27.1\"/><line class=\"thin dash\" x1=\"262\" y1=\"27.1\" x2=\"262\" y2=\"138\"/><path class=\"thin\" d=\"M253 138 L253 129 L262 129\"/><path class=\"thin\" d=\"M220 138 A22 22 0 0 0 209 118.9\"/><circle class=\"dt\" cx=\"198\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"262\" cy=\"27.1\" r=\"3\"/><circle class=\"dt\" cx=\"262\" cy=\"138\" r=\"3\"/><text x=\"198\" y=\"159\" text-anchor=\"middle\">P</text><text x=\"262\" y=\"159\" text-anchor=\"middle\">R</text><text x=\"273\" y=\"29.1\" text-anchor=\"middle\">Q</text><text x=\"212.7\" y=\"77.6\" text-anchor=\"middle\">16 ft</text><text x=\"236.8\" y=\"122.3\" text-anchor=\"middle\">60°</text><line class=\"thin\" x1=\"22\" y1=\"145\" x2=\"110\" y2=\"145\"/><line class=\"thin\" x1=\"22\" y1=\"141\" x2=\"22\" y2=\"149\"/><line class=\"thin\" x1=\"110\" y1=\"141\" x2=\"110\" y2=\"149\"/><text x=\"66\" y=\"163\" text-anchor=\"middle\">11 ft</text><text class=\"sm\" x=\"296\" y=\"155\" text-anchor=\"middle\">curb</text></svg></figure><p class=\"geo-given\">Stripes in the teacher lot make a 60° angle with the curb and are 11 ft apart along the curb. Stripe <strong>PQ</strong> is 16 ft long, and <strong>QR</strong> is perpendicular to the curb.</p>",
      "claims": [
        {
          "id": "depth",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "How far from the curb does the end of the stripe reach (QR)? Give an exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "8√3 ft"
            },
            {
              "letter": "B",
              "text": "8 ft"
            },
            {
              "letter": "C",
              "text": "16√3 ft"
            },
            {
              "letter": "D",
              "text": "8√2 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "along",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "How far along the curb is R from P (PR)? Give an exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "8√3 ft"
            },
            {
              "letter": "B",
              "text": "16√3/3 ft"
            },
            {
              "letter": "C",
              "text": "8 ft"
            },
            {
              "letter": "D",
              "text": "32 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "visitor",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "In the visitor lot, a 17-ft stripe makes a 52° angle with the curb. To the nearest tenth of a foot, how far from the curb does it reach?",
          "choices": [
            {
              "letter": "A",
              "text": "10.5 ft"
            },
            {
              "letter": "B",
              "text": "21.8 ft"
            },
            {
              "letter": "C",
              "text": "27.6 ft"
            },
            {
              "letter": "D",
              "text": "13.4 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "paint",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "A painter marks a 16-ft stripe whose far end is 14 ft from the curb. To the nearest degree, what angle does it make with the curb?",
          "choices": [
            {
              "letter": "A",
              "text": "29°"
            },
            {
              "letter": "B",
              "text": "61°"
            },
            {
              "letter": "C",
              "text": "41°"
            },
            {
              "letter": "D",
              "text": "49°"
            }
          ],
          "correct": "B"
        },
        {
          "id": "width",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest tenth of a foot, how wide is one space, measured perpendicular to the stripes?",
          "choices": [
            {
              "letter": "A",
              "text": "5.5 ft"
            },
            {
              "letter": "B",
              "text": "12.7 ft"
            },
            {
              "letter": "C",
              "text": "9.5 ft"
            },
            {
              "letter": "D",
              "text": "19.1 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "camera",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "A security camera is 20 ft up a light pole in the lot. The angle of depression from the camera to a car is 35°. To the nearest foot, how far is the car from the base of the pole?",
          "choices": [
            {
              "letter": "A",
              "text": "29 ft"
            },
            {
              "letter": "B",
              "text": "14 ft"
            },
            {
              "letter": "C",
              "text": "35 ft"
            },
            {
              "letter": "D",
              "text": "24 ft"
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-maze-scoreboard",
      "family": "GEO",
      "mode": "maze",
      "title": "The Stadium Scoreboard",
      "kind": "Triangles · G.TR.4",
      "blurb": "Two angles of elevation, 50 ft apart, to one scoreboard.",
      "level": 3,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Scoreboard TS stands at S on level ground. From A the angle of elevation to the top T is 24 degrees; from B, 50 feet closer, it is 37 degrees. TS is perpendicular to the ground\"><line class=\"ln\" x1=\"10\" y1=\"132\" x2=\"312\" y2=\"132\"/><rect class=\"sh2\" x=\"250.4\" y=\"23.2\" width=\"40\" height=\"22\"/><line class=\"ac\" x1=\"270.4\" y1=\"132\" x2=\"270.4\" y2=\"23.2\"/><line class=\"ln\" x1=\"26\" y1=\"132\" x2=\"270.4\" y2=\"23.2\"/><line class=\"ln\" x1=\"126\" y1=\"132\" x2=\"270.4\" y2=\"23.2\"/><path class=\"thin\" d=\"M261.4 132 L261.4 123 L270.4 123\"/><path class=\"thin\" d=\"M62 132 A36 36 0 0 0 58.9 117.4\"/><path class=\"thin\" d=\"M152 132 A26 26 0 0 0 146.8 116.4\"/><circle class=\"dt\" cx=\"26\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"126\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"270.4\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"270.4\" cy=\"23.2\" r=\"3\"/><text x=\"26\" y=\"153\" text-anchor=\"middle\">A</text><text x=\"126\" y=\"153\" text-anchor=\"middle\">B</text><text x=\"270.4\" y=\"153\" text-anchor=\"middle\">S</text><text x=\"240.4\" y=\"22.2\" text-anchor=\"middle\">T</text><text x=\"80.8\" y=\"125.4\" text-anchor=\"middle\">24°</text><text x=\"169.6\" y=\"122.4\" text-anchor=\"middle\">37°</text><text x=\"76\" y=\"153\" text-anchor=\"middle\">50 ft</text><text class=\"acc\" x=\"198.2\" y=\"153\" text-anchor=\"middle\">x</text><text class=\"acc\" x=\"281.4\" y=\"99.6\" text-anchor=\"middle\">h</text></svg></figure><p class=\"geo-given\">From <strong>A</strong> on the track, the angle of elevation to <strong>T</strong>, the top of the scoreboard, is 24°. From <strong>B</strong>, 50 ft closer, it is 37°. A, B and the base <strong>S</strong> are on level ground, and TS is perpendicular to it. Let h = TS and x = BS.</p>",
      "claims": [
        {
          "id": "eqB",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which equation relates h and x in right triangle TSB?",
          "choices": [
            {
              "letter": "A",
              "text": "sin 37° = h/x"
            },
            {
              "letter": "B",
              "text": "tan 37° = x/h"
            },
            {
              "letter": "C",
              "text": "cos 37° = h/x"
            },
            {
              "letter": "D",
              "text": "tan 37° = h/x"
            }
          ],
          "correct": "D"
        },
        {
          "id": "eqA",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "Which equation relates h and x in right triangle TSA?",
          "choices": [
            {
              "letter": "A",
              "text": "tan 24° = h/(x − 50)"
            },
            {
              "letter": "B",
              "text": "tan 24° = h/(x + 50)"
            },
            {
              "letter": "C",
              "text": "tan 24° = h/50"
            },
            {
              "letter": "D",
              "text": "tan 24° = (x + 50)/h"
            }
          ],
          "correct": "B"
        },
        {
          "id": "height",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest foot, how tall is the scoreboard (h)?",
          "choices": [
            {
              "letter": "A",
              "text": "54 ft"
            },
            {
              "letter": "B",
              "text": "22 ft"
            },
            {
              "letter": "C",
              "text": "38 ft"
            },
            {
              "letter": "D",
              "text": "15 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "dist",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest foot, how far is B from the base of the scoreboard (x)?",
          "choices": [
            {
              "letter": "A",
              "text": "122 ft"
            },
            {
              "letter": "B",
              "text": "41 ft"
            },
            {
              "letter": "C",
              "text": "90 ft"
            },
            {
              "letter": "D",
              "text": "72 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "sight",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest foot, how long is the line of sight from A to T?",
          "choices": [
            {
              "letter": "A",
              "text": "122 ft"
            },
            {
              "letter": "B",
              "text": "60 ft"
            },
            {
              "letter": "C",
              "text": "134 ft"
            },
            {
              "letter": "D",
              "text": "90 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "tower",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A camera at the top of a 30-ft tower by the field looks down at a player at a 60° angle of depression. How far is the player from the base of the tower? Give an exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "30√3 ft"
            },
            {
              "letter": "B",
              "text": "10√3 ft"
            },
            {
              "letter": "C",
              "text": "20√3 ft"
            },
            {
              "letter": "D",
              "text": "15 ft"
            }
          ],
          "correct": "B"
        }
      ]
    },
    {
      "id": "geo-tr4-raid-softball",
      "family": "GEO",
      "mode": "raid",
      "title": "The Softball Diamond",
      "kind": "Triangles · G.TR.4",
      "blurb": "A 60-ft square and the long throw to second base.",
      "level": 1,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Square HFST with 60-foot sides, drawn as a softball diamond, with the throw HS from home plate to second base as a diagonal\"><polygon class=\"sh2\" points=\"160,142 220,82 160,22 100,82\"/><line class=\"ac\" x1=\"160\" y1=\"142\" x2=\"160\" y2=\"22\"/><path class=\"thin\" d=\"M214.3 87.7 L208.7 82 L214.3 76.3\"/><path class=\"thin\" d=\"M105.7 87.7 L111.3 82 L105.7 76.3\"/><circle class=\"dt\" cx=\"160\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"220\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"82\" r=\"3\"/><text x=\"160\" y=\"163\" text-anchor=\"middle\">H</text><text x=\"232\" y=\"91\" text-anchor=\"middle\">F</text><text x=\"160\" y=\"17\" text-anchor=\"middle\">S</text><text x=\"88\" y=\"91\" text-anchor=\"middle\">T</text><text x=\"202\" y=\"129\" text-anchor=\"middle\">60 ft</text><text class=\"sm\" x=\"138\" y=\"92\" text-anchor=\"middle\">throw</text></svg></figure><p class=\"geo-given\">A softball diamond is a square <strong>HFST</strong> with 60-ft sides: home plate <strong>H</strong>, first base <strong>F</strong>, second base <strong>S</strong> and third base <strong>T</strong>. The catcher throws from H straight to S.</p>",
      "claims": [
        {
          "id": "throw",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "How far is the throw from home plate H to second base S? Give an exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "120 ft"
            },
            {
              "letter": "B",
              "text": "60√3 ft"
            },
            {
              "letter": "C",
              "text": "30√2 ft"
            },
            {
              "letter": "D",
              "text": "60√2 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "shorter",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "To the nearest foot, how much shorter is the throw HS than running from H to F to S?",
          "choices": [
            {
              "letter": "A",
              "text": "35 ft"
            },
            {
              "letter": "B",
              "text": "85 ft"
            },
            {
              "letter": "C",
              "text": "16 ft"
            },
            {
              "letter": "D",
              "text": "78 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "angle",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "What is m∠FHS, the angle between the first-base line HF and the throw HS?",
          "choices": [
            {
              "letter": "A",
              "text": "90°"
            },
            {
              "letter": "B",
              "text": "60°"
            },
            {
              "letter": "C",
              "text": "45°"
            },
            {
              "letter": "D",
              "text": "30°"
            }
          ],
          "correct": "C"
        },
        {
          "id": "sine",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "In right triangle HFS, what is sin ∠FSH?",
          "choices": [
            {
              "letter": "A",
              "text": "√3/2"
            },
            {
              "letter": "B",
              "text": "√2/2"
            },
            {
              "letter": "C",
              "text": "√2"
            },
            {
              "letter": "D",
              "text": "1/2"
            }
          ],
          "correct": "B"
        },
        {
          "id": "practice",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "On a practice field, the sides from H to F and F to S are 60 ft, and H to S measures 86 ft. What is true about the angle at F?",
          "choices": [
            {
              "letter": "A",
              "text": "It is obtuse, because 86² is more than 60² + 60²."
            },
            {
              "letter": "B",
              "text": "It is acute, because 86² is more than 60² + 60²."
            },
            {
              "letter": "C",
              "text": "It is a right angle, because 86 is close to 60√2."
            },
            {
              "letter": "D",
              "text": "It is a right angle, because 60 + 60 is more than 86."
            }
          ],
          "correct": "A"
        },
        {
          "id": "fan",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "A fan sits 20 ft above the field, 50 ft back from home plate (horizontally). To the nearest degree, what is the angle of depression from the fan to home plate?",
          "choices": [
            {
              "letter": "A",
              "text": "68°"
            },
            {
              "letter": "B",
              "text": "24°"
            },
            {
              "letter": "C",
              "text": "66°"
            },
            {
              "letter": "D",
              "text": "22°"
            }
          ],
          "correct": "D"
        }
      ]
    },
    {
      "id": "geo-tr4-raid-game-map",
      "family": "GEO",
      "mode": "raid",
      "title": "The Video Game Map",
      "kind": "Triangles · G.TR.4",
      "blurb": "A hero, a grid and a straight-line dash.",
      "level": 1,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Coordinate grid: the hero walks from H(1, 1) east to J(9, 1), then north to K(9, 5); a straight dash goes from H to K\"><line class=\"gr\" x1=\"36\" y1=\"136\" x2=\"36\" y2=\"16\"/><line class=\"gr\" x1=\"60\" y1=\"136\" x2=\"60\" y2=\"16\"/><line class=\"gr\" x1=\"84\" y1=\"136\" x2=\"84\" y2=\"16\"/><line class=\"gr\" x1=\"108\" y1=\"136\" x2=\"108\" y2=\"16\"/><line class=\"gr\" x1=\"132\" y1=\"136\" x2=\"132\" y2=\"16\"/><line class=\"gr\" x1=\"156\" y1=\"136\" x2=\"156\" y2=\"16\"/><line class=\"gr\" x1=\"180\" y1=\"136\" x2=\"180\" y2=\"16\"/><line class=\"gr\" x1=\"204\" y1=\"136\" x2=\"204\" y2=\"16\"/><line class=\"gr\" x1=\"228\" y1=\"136\" x2=\"228\" y2=\"16\"/><line class=\"gr\" x1=\"252\" y1=\"136\" x2=\"252\" y2=\"16\"/><line class=\"gr\" x1=\"276\" y1=\"136\" x2=\"276\" y2=\"16\"/><line class=\"gr\" x1=\"300\" y1=\"136\" x2=\"300\" y2=\"16\"/><line class=\"gr\" x1=\"36\" y1=\"136\" x2=\"300\" y2=\"136\"/><line class=\"gr\" x1=\"36\" y1=\"112\" x2=\"300\" y2=\"112\"/><line class=\"gr\" x1=\"36\" y1=\"88\" x2=\"300\" y2=\"88\"/><line class=\"gr\" x1=\"36\" y1=\"64\" x2=\"300\" y2=\"64\"/><line class=\"gr\" x1=\"36\" y1=\"40\" x2=\"300\" y2=\"40\"/><line class=\"gr\" x1=\"36\" y1=\"16\" x2=\"300\" y2=\"16\"/><line class=\"ax\" x1=\"36\" y1=\"136\" x2=\"300\" y2=\"136\"/><line class=\"ax\" x1=\"36\" y1=\"136\" x2=\"36\" y2=\"16\"/><text class=\"sm\" x=\"36\" y=\"153\" text-anchor=\"middle\">0</text><text class=\"sm\" x=\"84\" y=\"153\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"132\" y=\"153\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"180\" y=\"153\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"228\" y=\"153\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"276\" y=\"153\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"26\" y=\"116\" text-anchor=\"middle\">1</text><text class=\"sm\" x=\"26\" y=\"92\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"26\" y=\"68\" text-anchor=\"middle\">3</text><text class=\"sm\" x=\"26\" y=\"44\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"26\" y=\"20\" text-anchor=\"middle\">5</text><line class=\"ln\" x1=\"60\" y1=\"112\" x2=\"252\" y2=\"112\"/><line class=\"ln\" x1=\"252\" y1=\"112\" x2=\"252\" y2=\"16\"/><line class=\"ac\" x1=\"60\" y1=\"112\" x2=\"252\" y2=\"16\"/><path class=\"thin\" d=\"M244 112 L244 104 L252 104\"/><circle class=\"dt\" cx=\"60\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"252\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"252\" cy=\"16\" r=\"3\"/><text x=\"54\" y=\"105\" text-anchor=\"middle\">H</text><text x=\"264\" y=\"129\" text-anchor=\"middle\">J</text><text x=\"264\" y=\"23\" text-anchor=\"middle\">K</text></svg></figure><p class=\"geo-given\">On a video game map, each grid square is 1 block. The hero walks from <strong>H</strong>(1, 1) east to <strong>J</strong>(9, 1), then north to <strong>K</strong>(9, 5). A dash power-up moves the hero straight from H to K.</p>",
      "claims": [
        {
          "id": "dash",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "To the nearest tenth of a block, how long is the straight dash from H to K?",
          "choices": [
            {
              "letter": "A",
              "text": "12.0 blocks"
            },
            {
              "letter": "B",
              "text": "6.9 blocks"
            },
            {
              "letter": "C",
              "text": "8.9 blocks"
            },
            {
              "letter": "D",
              "text": "80.0 blocks"
            }
          ],
          "correct": "C"
        },
        {
          "id": "tan",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "What is tan ∠KHJ?",
          "choices": [
            {
              "letter": "A",
              "text": "2"
            },
            {
              "letter": "B",
              "text": "1/2"
            },
            {
              "letter": "C",
              "text": "√5/5"
            },
            {
              "letter": "D",
              "text": "2√5/5"
            }
          ],
          "correct": "B"
        },
        {
          "id": "dir",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest degree, what angle does the dash make with the east direction (m∠KHJ)?",
          "choices": [
            {
              "letter": "A",
              "text": "63°"
            },
            {
              "letter": "B",
              "text": "30°"
            },
            {
              "letter": "C",
              "text": "60°"
            },
            {
              "letter": "D",
              "text": "27°"
            }
          ],
          "correct": "D"
        },
        {
          "id": "classify",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "Points H(1, 1), M(4, 5) and J(9, 1) form a triangle on the map. Which describes triangle HMJ?",
          "choices": [
            {
              "letter": "A",
              "text": "Acute, because 8² is less than 5² + (√41)²"
            },
            {
              "letter": "B",
              "text": "Right, because 3² + 4² = 5²"
            },
            {
              "letter": "C",
              "text": "Obtuse, because 8² is more than 5² + 4²"
            },
            {
              "letter": "D",
              "text": "Obtuse, because 41 is more than 25"
            }
          ],
          "correct": "A"
        },
        {
          "id": "diag",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A glide move crosses squares corner to corner, at 45° to the grid lines. What is the exact length of a glide across 5 squares?",
          "choices": [
            {
              "letter": "A",
              "text": "10 blocks"
            },
            {
              "letter": "B",
              "text": "5√3 blocks"
            },
            {
              "letter": "C",
              "text": "5√2 blocks"
            },
            {
              "letter": "D",
              "text": "5 blocks"
            }
          ],
          "correct": "C"
        },
        {
          "id": "level2",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "On the next level, the gate is 20 blocks east and 21 blocks north of the hero. How far is it in a straight line?",
          "choices": [
            {
              "letter": "A",
              "text": "41 blocks"
            },
            {
              "letter": "B",
              "text": "29 blocks"
            },
            {
              "letter": "C",
              "text": "about 6.4 blocks"
            },
            {
              "letter": "D",
              "text": "841 blocks"
            }
          ],
          "correct": "B"
        }
      ]
    },
    {
      "id": "geo-tr4-raid-pool",
      "family": "GEO",
      "mode": "raid",
      "title": "The Pool's Sloped Floor",
      "kind": "Triangles · G.TR.4",
      "blurb": "A pool floor that drops 8 ft over 15 ft.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Side view of a pool: the floor is 4 feet deep at the shallow end and 12 feet deep at the deep end; the sloped floor PQ drops 8 feet over a horizontal run RQ of 15 feet, with PR vertical\"><polygon class=\"sh2\" points=\"18,22 18,58 81,58 216,130 302,130 302,22\"/><line class=\"ln\" x1=\"10\" y1=\"22\" x2=\"310\" y2=\"22\"/><line class=\"ac\" x1=\"81\" y1=\"58\" x2=\"216\" y2=\"130\"/><line class=\"thin dash\" x1=\"81\" y1=\"58\" x2=\"81\" y2=\"130\"/><line class=\"thin dash\" x1=\"81\" y1=\"130\" x2=\"216\" y2=\"130\"/><path class=\"thin\" d=\"M81 122 L89 122 L89 130\"/><path class=\"thin\" d=\"M186 130 A30 30 0 0 1 189.5 115.9\"/><circle class=\"dt\" cx=\"81\" cy=\"58\" r=\"3\"/><circle class=\"dt\" cx=\"216\" cy=\"130\" r=\"3\"/><circle class=\"dt\" cx=\"81\" cy=\"130\" r=\"3\"/><text x=\"89\" y=\"53\" text-anchor=\"middle\">P</text><text x=\"220\" y=\"151\" text-anchor=\"middle\">Q</text><text x=\"77\" y=\"151\" text-anchor=\"middle\">R</text><text x=\"148.5\" y=\"151\" text-anchor=\"middle\">15 ft</text><text x=\"65\" y=\"99\" text-anchor=\"middle\">8 ft</text><text class=\"sm\" x=\"49.5\" y=\"44\" text-anchor=\"middle\">4 ft deep</text><text class=\"sm\" x=\"259\" y=\"120\" text-anchor=\"middle\">12 ft deep</text><text class=\"sm\" x=\"160\" y=\"18\" text-anchor=\"middle\">water surface</text></svg></figure><p class=\"geo-given\">A side view of a pool. The water is 4 ft deep over the shallow floor and 12 ft deep over the deep floor. The sloped floor <strong>PQ</strong> drops from <strong>P</strong> to <strong>Q</strong> over a horizontal run <strong>RQ</strong> of 15 ft; <strong>PR</strong> is vertical.</p>",
      "claims": [
        {
          "id": "slope",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How long is the sloped floor PQ?",
          "choices": [
            {
              "letter": "A",
              "text": "17 ft"
            },
            {
              "letter": "B",
              "text": "23 ft"
            },
            {
              "letter": "C",
              "text": "about 12.7 ft"
            },
            {
              "letter": "D",
              "text": "about 15.5 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "tilt",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest degree, what angle does the sloped floor make with the horizontal (m∠PQR)?",
          "choices": [
            {
              "letter": "A",
              "text": "62°"
            },
            {
              "letter": "B",
              "text": "28°"
            },
            {
              "letter": "C",
              "text": "32°"
            },
            {
              "letter": "D",
              "text": "58°"
            }
          ],
          "correct": "B"
        },
        {
          "id": "deck",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A lifeguard measures 9 ft along one edge of the deck, 12 ft along the other, and 14.7 ft between the two marks. What is true about the corner?",
          "choices": [
            {
              "letter": "A",
              "text": "It is more than 90°, because 14.7² is less than 9² + 12²."
            },
            {
              "letter": "B",
              "text": "It is exactly 90°, because 14.7 rounds to 15."
            },
            {
              "letter": "C",
              "text": "It is more than 90°, because 9 + 12 is more than 14.7."
            },
            {
              "letter": "D",
              "text": "It is less than 90°, because 14.7² is less than 9² + 12²."
            }
          ],
          "correct": "D"
        },
        {
          "id": "guard",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "A lifeguard's eyes are 9 ft above the water. The angle of depression to a swimmer is 16°. To the nearest foot, how far is the swimmer from the point on the water directly below her eyes?",
          "choices": [
            {
              "letter": "A",
              "text": "3 ft"
            },
            {
              "letter": "B",
              "text": "31 ft"
            },
            {
              "letter": "C",
              "text": "33 ft"
            },
            {
              "letter": "D",
              "text": "9 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "point",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "A diver touches the sloped floor at a point 6 ft past P, measured horizontally. To the nearest tenth of a foot, how deep is the water there?",
          "choices": [
            {
              "letter": "A",
              "text": "3.2 ft"
            },
            {
              "letter": "B",
              "text": "6.8 ft"
            },
            {
              "letter": "C",
              "text": "7.2 ft"
            },
            {
              "letter": "D",
              "text": "8.8 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "slide",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "The pool slide's chute is 11 ft long and makes a 30° angle with the deck. How high is the top of the chute above the deck?",
          "choices": [
            {
              "letter": "A",
              "text": "5.5 ft"
            },
            {
              "letter": "B",
              "text": "(11√3)/2 ft"
            },
            {
              "letter": "C",
              "text": "11√3 ft"
            },
            {
              "letter": "D",
              "text": "22 ft"
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-raid-tennis",
      "family": "GEO",
      "mode": "raid",
      "title": "The Tennis Serve",
      "kind": "Triangles · G.TR.4",
      "blurb": "A straight-line serve from 10 ft over a 3-ft net.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 128\" role=\"img\" aria-label=\"Side view of a tennis court: the ball is hit at B, 10 feet above the baseline point S, and travels in a straight line down to L, 60 feet away; a 3-foot net stands at N, 39 feet from S\"><line class=\"ln\" x1=\"10\" y1=\"100\" x2=\"312\" y2=\"100\"/><line class=\"ln\" x1=\"24\" y1=\"100\" x2=\"24\" y2=\"55\"/><line class=\"ln\" x1=\"199.5\" y1=\"100\" x2=\"199.5\" y2=\"86.5\"/><line class=\"thin\" x1=\"196.5\" y1=\"86.5\" x2=\"202.5\" y2=\"86.5\"/><line class=\"thin dash\" x1=\"24\" y1=\"55\" x2=\"174\" y2=\"55\"/><line class=\"ac\" x1=\"24\" y1=\"55\" x2=\"294\" y2=\"100\"/><path class=\"thin\" d=\"M32 100 L32 92 L24 92\"/><path class=\"thin\" d=\"M120 55 A96 96 0 0 1 118.7 70.8\"/><circle class=\"dt\" cx=\"24\" cy=\"55\" r=\"3\"/><circle class=\"dt\" cx=\"24\" cy=\"100\" r=\"3\"/><circle class=\"dt\" cx=\"294\" cy=\"100\" r=\"3\"/><text x=\"23\" y=\"48\" text-anchor=\"middle\">B</text><text x=\"24\" y=\"121\" text-anchor=\"middle\">S</text><text x=\"294\" y=\"121\" text-anchor=\"middle\">L</text><text x=\"199.5\" y=\"121\" text-anchor=\"middle\">N</text><text x=\"111.8\" y=\"121\" text-anchor=\"middle\">39 ft</text><text x=\"246.8\" y=\"121\" text-anchor=\"middle\">21 ft</text><text x=\"48\" y=\"90.5\" text-anchor=\"middle\">10 ft</text><text class=\"sm\" x=\"183.5\" y=\"97\" text-anchor=\"middle\">net</text></svg></figure><p class=\"geo-given\">A player hits a serve at <strong>B</strong>, 10 ft above point <strong>S</strong> on the baseline. Model its path as a straight line to <strong>L</strong>, 60 ft from S on the court. The net, 3 ft high, stands at <strong>N</strong>, 39 ft from S.</p>",
      "claims": [
        {
          "id": "dep",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest degree, what is the angle of depression from B to L?",
          "choices": [
            {
              "letter": "A",
              "text": "81°"
            },
            {
              "letter": "B",
              "text": "14°"
            },
            {
              "letter": "C",
              "text": "3°"
            },
            {
              "letter": "D",
              "text": "9°"
            }
          ],
          "correct": "D"
        },
        {
          "id": "path",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "To the nearest tenth of a foot, how far does the ball travel from B to L?",
          "choices": [
            {
              "letter": "A",
              "text": "70.0 ft"
            },
            {
              "letter": "B",
              "text": "59.2 ft"
            },
            {
              "letter": "C",
              "text": "60.8 ft"
            },
            {
              "letter": "D",
              "text": "50.0 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "clear",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest tenth of a foot, how far above the top of the net does the ball's path pass?",
          "choices": [
            {
              "letter": "A",
              "text": "0.5 ft"
            },
            {
              "letter": "B",
              "text": "3.5 ft"
            },
            {
              "letter": "C",
              "text": "0.8 ft"
            },
            {
              "letter": "D",
              "text": "7.0 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "eq",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Let θ be the angle of depression from B to L. Which equation is true?",
          "choices": [
            {
              "letter": "A",
              "text": "sin θ = 10/60"
            },
            {
              "letter": "B",
              "text": "tan θ = 60/10"
            },
            {
              "letter": "C",
              "text": "cos θ = 10/60"
            },
            {
              "letter": "D",
              "text": "tan θ = 10/60"
            }
          ],
          "correct": "D"
        },
        {
          "id": "steep",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "Suppose the ball left B at a 30° angle of depression. How far from S would it land? Give an exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "(10√3)/3 ft"
            },
            {
              "letter": "B",
              "text": "10√3 ft"
            },
            {
              "letter": "C",
              "text": "20 ft"
            },
            {
              "letter": "D",
              "text": "5√3 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "ump",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "An umpire's eyes are 7 ft above the court. The angle of depression to a ball on the court is 23°. To the nearest tenth of a foot, how long is the line of sight from the umpire's eyes to the ball?",
          "choices": [
            {
              "letter": "A",
              "text": "16.5 ft"
            },
            {
              "letter": "B",
              "text": "7.6 ft"
            },
            {
              "letter": "C",
              "text": "17.9 ft"
            },
            {
              "letter": "D",
              "text": "2.7 ft"
            }
          ],
          "correct": "C"
        }
      ]
    },
    {
      "id": "geo-tr4-raid-archery",
      "family": "GEO",
      "mode": "raid",
      "title": "The Archery Target Stand",
      "kind": "Triangles · G.TR.4",
      "blurb": "An A-frame stand, its height and its rope.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A-frame target stand: legs AL and AR are 8 feet, feet L and R are 6 feet apart with midpoint M, AM is perpendicular to the ground, and a rope runs from A to stake K, 5 feet past R\"><line class=\"ln\" x1=\"12\" y1=\"138\" x2=\"306\" y2=\"138\"/><circle class=\"sh\" cx=\"110\" cy=\"110\" r=\"14\"/><circle class=\"thin\" cx=\"110\" cy=\"110\" r=\"9\"/><circle class=\"thin\" cx=\"110\" cy=\"110\" r=\"4\"/><line class=\"ln\" x1=\"62\" y1=\"138\" x2=\"110\" y2=\"19.3\"/><line class=\"ln\" x1=\"110\" y1=\"19.3\" x2=\"158\" y2=\"138\"/><line class=\"thin dash\" x1=\"110\" y1=\"19.3\" x2=\"110\" y2=\"138\"/><line class=\"ac\" x1=\"110\" y1=\"19.3\" x2=\"238\" y2=\"138\"/><path class=\"thin\" d=\"M118 138 L118 130 L110 130\"/><line class=\"thin\" x1=\"90.6\" y1=\"80.5\" x2=\"81.4\" y2=\"76.8\"/><line class=\"thin\" x1=\"129.4\" y1=\"80.5\" x2=\"138.6\" y2=\"76.8\"/><line class=\"thin\" x1=\"84\" y1=\"143\" x2=\"84\" y2=\"133\"/><line class=\"thin\" x1=\"88\" y1=\"143\" x2=\"88\" y2=\"133\"/><line class=\"thin\" x1=\"132\" y1=\"143\" x2=\"132\" y2=\"133\"/><line class=\"thin\" x1=\"136\" y1=\"143\" x2=\"136\" y2=\"133\"/><circle class=\"dt\" cx=\"110\" cy=\"19.3\" r=\"3\"/><circle class=\"dt\" cx=\"62\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"110\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"158\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"238\" cy=\"138\" r=\"3\"/><text x=\"110\" y=\"15.3\" text-anchor=\"middle\">A</text><text x=\"62\" y=\"159\" text-anchor=\"middle\">L</text><text x=\"110\" y=\"159\" text-anchor=\"middle\">M</text><text x=\"158\" y=\"159\" text-anchor=\"middle\">R</text><text x=\"238\" y=\"159\" text-anchor=\"middle\">K</text><text class=\"sm\" x=\"86\" y=\"158\" text-anchor=\"middle\">3 ft</text><text class=\"sm\" x=\"134\" y=\"158\" text-anchor=\"middle\">3 ft</text><text class=\"sm\" x=\"198\" y=\"158\" text-anchor=\"middle\">5 ft</text><text x=\"67.5\" y=\"76.2\" text-anchor=\"middle\">8 ft</text><text class=\"sm\" x=\"214\" y=\"80\" text-anchor=\"middle\">rope</text></svg></figure><p class=\"geo-given\">A target stand is an A-frame. Legs <strong>AL</strong> and <strong>AR</strong> are each 8 ft long, the feet L and R are 6 ft apart, and <strong>M</strong> is the midpoint of LR, with AM perpendicular to the ground. A rope runs from A to a stake <strong>K</strong> on the ground, 5 ft past R.</p>",
      "claims": [
        {
          "id": "tall",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "To the nearest tenth of a foot, how tall is the stand (AM)?",
          "choices": [
            {
              "letter": "A",
              "text": "8.5 ft"
            },
            {
              "letter": "B",
              "text": "5.3 ft"
            },
            {
              "letter": "C",
              "text": "7.4 ft"
            },
            {
              "letter": "D",
              "text": "5.0 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "leg",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest degree, what angle does each leg make with the ground (m∠ALM)?",
          "choices": [
            {
              "letter": "A",
              "text": "68°"
            },
            {
              "letter": "B",
              "text": "22°"
            },
            {
              "letter": "C",
              "text": "21°"
            },
            {
              "letter": "D",
              "text": "41°"
            }
          ],
          "correct": "A"
        },
        {
          "id": "small",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A smaller stand has 5-ft legs that make a 60° angle with the ground. What is its exact height?",
          "choices": [
            {
              "letter": "A",
              "text": "5/2 ft"
            },
            {
              "letter": "B",
              "text": "5√3 ft"
            },
            {
              "letter": "C",
              "text": "(5√2)/2 ft"
            },
            {
              "letter": "D",
              "text": "(5√3)/2 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "hill",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "On a hill course, a target is 40 m away horizontally, up an angle of elevation of 20°. To the nearest tenth of a meter, how much higher is the target than the archer's bow?",
          "choices": [
            {
              "letter": "A",
              "text": "13.7 m"
            },
            {
              "letter": "B",
              "text": "37.6 m"
            },
            {
              "letter": "C",
              "text": "14.6 m"
            },
            {
              "letter": "D",
              "text": "109.9 m"
            }
          ],
          "correct": "C"
        },
        {
          "id": "rope",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest tenth of a foot, how long is the rope AK?",
          "choices": [
            {
              "letter": "A",
              "text": "8.9 ft"
            },
            {
              "letter": "B",
              "text": "10.9 ft"
            },
            {
              "letter": "C",
              "text": "15.4 ft"
            },
            {
              "letter": "D",
              "text": "13.0 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "ratio",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which ratio is equal to sin ∠LAM?",
          "choices": [
            {
              "letter": "A",
              "text": "3/8"
            },
            {
              "letter": "B",
              "text": "√55/8"
            },
            {
              "letter": "C",
              "text": "3/√55"
            },
            {
              "letter": "D",
              "text": "8/3"
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-raid-hoop",
      "family": "GEO",
      "mode": "raid",
      "title": "The Basketball Hoop",
      "kind": "Triangles · G.TR.4",
      "blurb": "Eye level, a 10-ft rim and a 15-ft distance.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Right triangle EPR: a player's eyes E are 6 feet above the floor and 15 feet horizontally from the rim R, which is 10 feet above the floor; P is level with E directly below R\"><line class=\"ln\" x1=\"10\" y1=\"142\" x2=\"312\" y2=\"142\"/><line class=\"ln\" x1=\"262.5\" y1=\"142\" x2=\"262.5\" y2=\"23\"/><line class=\"ln\" x1=\"262.5\" y1=\"23\" x2=\"242.5\" y2=\"23\"/><line class=\"ln\" x1=\"242.5\" y1=\"7\" x2=\"242.5\" y2=\"37\"/><line class=\"thin\" x1=\"228.5\" y1=\"27\" x2=\"242.5\" y2=\"27\"/><line class=\"thin dash\" x1=\"56\" y1=\"142\" x2=\"56\" y2=\"73\"/><line class=\"thin dash\" x1=\"228.5\" y1=\"73\" x2=\"228.5\" y2=\"142\"/><line class=\"thin dash\" x1=\"56\" y1=\"73\" x2=\"228.5\" y2=\"73\"/><line class=\"ln\" x1=\"228.5\" y1=\"73\" x2=\"228.5\" y2=\"27\"/><line class=\"ac\" x1=\"56\" y1=\"73\" x2=\"228.5\" y2=\"27\"/><path class=\"thin\" d=\"M220.5 73 L220.5 65 L228.5 65\"/><path class=\"thin\" d=\"M96 73 A40 40 0 0 0 94.6 62.7\"/><circle class=\"dt\" cx=\"56\" cy=\"73\" r=\"3\"/><circle class=\"dt\" cx=\"228.5\" cy=\"27\" r=\"3\"/><circle class=\"dt\" cx=\"228.5\" cy=\"73\" r=\"3\"/><text x=\"44\" y=\"74\" text-anchor=\"middle\">E</text><text x=\"216.5\" y=\"28\" text-anchor=\"middle\">R</text><text x=\"239.5\" y=\"90\" text-anchor=\"middle\">P</text><text x=\"142.3\" y=\"162\" text-anchor=\"middle\">15 ft</text><text x=\"38\" y=\"112.5\" text-anchor=\"middle\">6 ft</text><line class=\"thin\" x1=\"276.5\" y1=\"142\" x2=\"276.5\" y2=\"27\"/><line class=\"thin\" x1=\"271.5\" y1=\"142\" x2=\"281.5\" y2=\"142\"/><line class=\"thin\" x1=\"271.5\" y1=\"27\" x2=\"281.5\" y2=\"27\"/><text class=\"sm\" x=\"293.5\" y=\"88.5\" text-anchor=\"middle\">10 ft</text></svg></figure><p class=\"geo-given\">A player's eyes <strong>E</strong> are 6 ft above the floor, 15 ft (horizontally) from the point below the rim <strong>R</strong>. The rim is 10 ft above the floor. <strong>P</strong> is level with E, directly below R.</p>",
      "claims": [
        {
          "id": "elev",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest degree, what is the angle of elevation from E to R?",
          "choices": [
            {
              "letter": "A",
              "text": "34°"
            },
            {
              "letter": "B",
              "text": "15°"
            },
            {
              "letter": "C",
              "text": "75°"
            },
            {
              "letter": "D",
              "text": "22°"
            }
          ],
          "correct": "B"
        },
        {
          "id": "sight",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "To the nearest tenth of a foot, how far is it from E straight to R?",
          "choices": [
            {
              "letter": "A",
              "text": "18.0 ft"
            },
            {
              "letter": "B",
              "text": "19.0 ft"
            },
            {
              "letter": "C",
              "text": "14.5 ft"
            },
            {
              "letter": "D",
              "text": "15.5 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "base",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A portable hoop's base has a triangle with sides 12 in., 35 in. and 37 in. Is the angle between the 12-in. and 35-in. sides a right angle?",
          "choices": [
            {
              "letter": "A",
              "text": "No, because 12 + 35 is not equal to 37."
            },
            {
              "letter": "B",
              "text": "No, it is acute, because 37² is less than 12² + 35²."
            },
            {
              "letter": "C",
              "text": "Yes, because 12² + 35² = 37²."
            },
            {
              "letter": "D",
              "text": "Yes, because 37 is the longest side."
            }
          ],
          "correct": "C"
        },
        {
          "id": "nottrue",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which statement about right triangle EPR is NOT true?",
          "choices": [
            {
              "letter": "A",
              "text": "sin ∠E = 4/15"
            },
            {
              "letter": "B",
              "text": "tan ∠E = 4/15"
            },
            {
              "letter": "C",
              "text": "tan ∠R = 15/4"
            },
            {
              "letter": "D",
              "text": "∠E and ∠R are complementary"
            }
          ],
          "correct": "A"
        },
        {
          "id": "brace",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A support arm makes a 60° angle with the hoop's pole and reaches 4 ft out from the pole. How long is the arm? Give an exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "8 ft"
            },
            {
              "letter": "B",
              "text": "4√3 ft"
            },
            {
              "letter": "C",
              "text": "(4√3)/3 ft"
            },
            {
              "letter": "D",
              "text": "(8√3)/3 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "board",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "A player whose eyes are 5.5 ft above the floor sees the top of the 13-ft backboard at a 28° angle of elevation. To the nearest tenth of a foot, how far is she from the backboard, horizontally?",
          "choices": [
            {
              "letter": "A",
              "text": "24.4 ft"
            },
            {
              "letter": "B",
              "text": "14.1 ft"
            },
            {
              "letter": "C",
              "text": "4.0 ft"
            },
            {
              "letter": "D",
              "text": "16.0 ft"
            }
          ],
          "correct": "B"
        }
      ]
    },
    {
      "id": "geo-tr4-raid-soccer",
      "family": "GEO",
      "mode": "raid",
      "title": "The Soccer Shot Angle",
      "kind": "Triangles · G.TR.4",
      "blurb": "How wide is the goal from 18 yd out?",
      "level": 3,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Top view of a soccer goal: goal line through posts N and F, 8 yards apart, with midpoint G; player P is 18 yards from the goal line, and PN is perpendicular to the goal line\"><polygon class=\"sh2\" points=\"276,140 290,140 290,44 276,44\"/><line class=\"ln\" x1=\"276\" y1=\"8\" x2=\"276\" y2=\"160\"/><line class=\"ln\" x1=\"60\" y1=\"140\" x2=\"276\" y2=\"140\"/><line class=\"ac\" x1=\"60\" y1=\"140\" x2=\"276\" y2=\"44\"/><line class=\"thin dash\" x1=\"60\" y1=\"140\" x2=\"276\" y2=\"92\"/><path class=\"thin\" d=\"M268 140 L268 132 L276 132\"/><path class=\"thin\" d=\"M108 140 A48 48 0 0 0 103.9 120.5\"/><circle class=\"dt\" cx=\"276\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"276\" cy=\"44\" r=\"3\"/><circle class=\"dt\" cx=\"276\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"60\" cy=\"140\" r=\"3\"/><text x=\"302\" y=\"149\" text-anchor=\"middle\">N</text><text x=\"302\" y=\"53\" text-anchor=\"middle\">F</text><text x=\"302\" y=\"101\" text-anchor=\"middle\">G</text><text x=\"48\" y=\"149\" text-anchor=\"middle\">P</text><text x=\"168\" y=\"161\" text-anchor=\"middle\">18 yd</text><text class=\"sm\" x=\"274\" y=\"34\" text-anchor=\"middle\">8-yd goal</text><text class=\"sm\" x=\"242\" y=\"160\" text-anchor=\"middle\">goal line</text></svg></figure><p class=\"geo-given\">Top view of a goal. The posts <strong>N</strong> and <strong>F</strong> are 8 yd apart on the goal line, and <strong>G</strong> is the midpoint of NF. Player <strong>P</strong> is 18 yd from the goal line, in line with the near post: PN is perpendicular to the goal line.</p>",
      "claims": [
        {
          "id": "shot",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest degree, what is m∠NPF, the angle she has to shoot into?",
          "choices": [
            {
              "letter": "A",
              "text": "24°"
            },
            {
              "letter": "B",
              "text": "66°"
            },
            {
              "letter": "C",
              "text": "26°"
            },
            {
              "letter": "D",
              "text": "64°"
            }
          ],
          "correct": "A"
        },
        {
          "id": "far",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "To the nearest tenth of a yard, how far is the player from the far post (PF)?",
          "choices": [
            {
              "letter": "A",
              "text": "26.0 yd"
            },
            {
              "letter": "B",
              "text": "16.1 yd"
            },
            {
              "letter": "C",
              "text": "10.0 yd"
            },
            {
              "letter": "D",
              "text": "19.7 yd"
            }
          ],
          "correct": "D"
        },
        {
          "id": "closer",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "She dribbles straight toward N until she is 12 yd from the goal line. To the nearest degree, by how much does her shooting angle ∠NPF grow?",
          "choices": [
            {
              "letter": "A",
              "text": "34°"
            },
            {
              "letter": "B",
              "text": "10°"
            },
            {
              "letter": "C",
              "text": "15°"
            },
            {
              "letter": "D",
              "text": "53°"
            }
          ],
          "correct": "B"
        },
        {
          "id": "keeper",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "The goalkeeper stands at G. To the nearest degree, what is m∠GPF, the part of her shooting angle on the far side of the goalkeeper?",
          "choices": [
            {
              "letter": "A",
              "text": "12°"
            },
            {
              "letter": "B",
              "text": "13°"
            },
            {
              "letter": "C",
              "text": "11°"
            },
            {
              "letter": "D",
              "text": "24°"
            }
          ],
          "correct": "C"
        },
        {
          "id": "small",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "On a small practice field, the posts are 4 yd apart. A player in line with the near post sees the goal at a 30° angle. How far is she from the goal line? Give an exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "(4√3)/3 yd"
            },
            {
              "letter": "B",
              "text": "8 yd"
            },
            {
              "letter": "C",
              "text": "2√3 yd"
            },
            {
              "letter": "D",
              "text": "4√3 yd"
            }
          ],
          "correct": "D"
        },
        {
          "id": "eq",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "Let d be her distance from the goal line when ∠NPF measures 40°, with the same 8-yd goal. Which equation finds d?",
          "choices": [
            {
              "letter": "A",
              "text": "tan 40° = 8/d"
            },
            {
              "letter": "B",
              "text": "tan 40° = d/8"
            },
            {
              "letter": "C",
              "text": "sin 40° = 8/d"
            },
            {
              "letter": "D",
              "text": "cos 40° = 8/d"
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-raid-climbing",
      "family": "GEO",
      "mode": "raid",
      "title": "The Climbing Wall Camera",
      "kind": "Triangles · G.TR.4",
      "blurb": "Two angles of elevation from one camera.",
      "level": 3,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A camera K on a tripod, 4 feet above the floor and 48 feet from a 40-foot climbing wall; X is on the wall level with K; the angle of elevation from K to the climber at P is 20 degrees and to the climber at Q is 35 degrees\"><line class=\"ln\" x1=\"12\" y1=\"146\" x2=\"312\" y2=\"146\"/><rect class=\"sh2\" x=\"236\" y=\"14\" width=\"14\" height=\"132\"/><line class=\"ln\" x1=\"236\" y1=\"146\" x2=\"236\" y2=\"14\"/><line class=\"thin\" x1=\"69.6\" y1=\"146\" x2=\"77.6\" y2=\"132.8\"/><line class=\"thin\" x1=\"85.6\" y1=\"146\" x2=\"77.6\" y2=\"132.8\"/><line class=\"thin dash\" x1=\"77.6\" y1=\"132.8\" x2=\"236\" y2=\"132.8\"/><line class=\"ln\" x1=\"77.6\" y1=\"132.8\" x2=\"236\" y2=\"75.1\"/><line class=\"ac\" x1=\"77.6\" y1=\"132.8\" x2=\"236\" y2=\"21.9\"/><path class=\"thin\" d=\"M229 132.8 L229 125.8 L236 125.8\"/><path class=\"thin\" d=\"M123.6 132.8 A46 46 0 0 0 120.8 117.1\"/><path class=\"thin\" d=\"M161.6 132.8 A84 84 0 0 0 146.4 84.6\"/><line class=\"thin\" x1=\"278\" y1=\"14\" x2=\"278\" y2=\"146\"/><line class=\"thin\" x1=\"273\" y1=\"14\" x2=\"283\" y2=\"14\"/><line class=\"thin\" x1=\"273\" y1=\"146\" x2=\"283\" y2=\"146\"/><circle class=\"dt\" cx=\"77.6\" cy=\"132.8\" r=\"3\"/><circle class=\"dt\" cx=\"236\" cy=\"132.8\" r=\"3\"/><circle class=\"dt\" cx=\"236\" cy=\"75.1\" r=\"3\"/><circle class=\"dt\" cx=\"236\" cy=\"21.9\" r=\"3\"/><circle class=\"dt\" cx=\"236\" cy=\"14\" r=\"3\"/><text x=\"71.6\" y=\"124.8\" text-anchor=\"middle\">K</text><text x=\"261\" y=\"139.8\" text-anchor=\"middle\">X</text><text x=\"261\" y=\"82.1\" text-anchor=\"middle\">P</text><text x=\"261\" y=\"29.9\" text-anchor=\"middle\">Q</text><text x=\"226\" y=\"16\" text-anchor=\"middle\">T</text><text x=\"140.8\" y=\"127.8\" text-anchor=\"middle\">20°</text><text x=\"175.6\" y=\"87.9\" text-anchor=\"middle\">35°</text><text x=\"156.8\" y=\"165\" text-anchor=\"middle\">48 ft</text><text class=\"sm\" x=\"53.6\" y=\"142.4\" text-anchor=\"middle\">4 ft</text><text class=\"sm\" x=\"300\" y=\"84\" text-anchor=\"middle\">40 ft</text></svg></figure><p class=\"geo-given\">A camera <strong>K</strong> on a tripod is 4 ft above the floor and 48 ft from a 40-ft climbing wall. <strong>X</strong> is on the wall, level with K, and <strong>T</strong> is the top of the wall. The angle of elevation from K to a climber is 20° when she is at <strong>P</strong> and 35° when she is at <strong>Q</strong>.</p>",
      "claims": [
        {
          "id": "p",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest tenth of a foot, how high above the floor is the climber at P?",
          "choices": [
            {
              "letter": "A",
              "text": "17.5 ft"
            },
            {
              "letter": "B",
              "text": "20.4 ft"
            },
            {
              "letter": "C",
              "text": "21.5 ft"
            },
            {
              "letter": "D",
              "text": "135.9 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "climb",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest tenth of a foot, how far up the wall does she climb from P to Q?",
          "choices": [
            {
              "letter": "A",
              "text": "33.6 ft"
            },
            {
              "letter": "B",
              "text": "16.1 ft"
            },
            {
              "letter": "C",
              "text": "37.6 ft"
            },
            {
              "letter": "D",
              "text": "12.9 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "kq",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest foot, how long is the camera's line of sight KQ?",
          "choices": [
            {
              "letter": "A",
              "text": "59 ft"
            },
            {
              "letter": "B",
              "text": "84 ft"
            },
            {
              "letter": "C",
              "text": "39 ft"
            },
            {
              "letter": "D",
              "text": "34 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "top",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How far is the camera K from T, the top of the wall?",
          "choices": [
            {
              "letter": "A",
              "text": "about 62.5 ft"
            },
            {
              "letter": "B",
              "text": "84 ft"
            },
            {
              "letter": "C",
              "text": "about 31.7 ft"
            },
            {
              "letter": "D",
              "text": "60 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "slab",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "Part of another wall leans back at 45°. A climber moves 12 ft along it. How much higher does she get? Give an exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "12√2 ft"
            },
            {
              "letter": "B",
              "text": "6√2 ft"
            },
            {
              "letter": "C",
              "text": "6 ft"
            },
            {
              "letter": "D",
              "text": "6√3 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "angles",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "Which statement about the angles in the figure is NOT true?",
          "choices": [
            {
              "letter": "A",
              "text": "The angle of depression from Q to K is 35°."
            },
            {
              "letter": "B",
              "text": "m∠KPX = 70°"
            },
            {
              "letter": "C",
              "text": "The angle of depression from P to K is 70°."
            },
            {
              "letter": "D",
              "text": "m∠PKQ = 15°"
            }
          ],
          "correct": "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
