/* SOL Labyrinth — Geometry game (family GEO), G.TR.4 (Virginia 2023 Geometry SOL), modes rocks (Rune Rocks: space, science
   and weather) and sky (Sun Chariot: travel and getting around). Original items only. Built and checked by a script that
   recomputes every key, every distractor (each one named mistake) and every figure coordinate. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      "id": "geo-tr4-rocks-balloon-tether",
      "family": "GEO",
      "mode": "rocks",
      "title": "The Weather Balloon Tether",
      "kind": "Triangles · G.TR.4",
      "blurb": "A tether, a stake and a balloon pushed by the wind.",
      "level": 1,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A weather balloon B on a straight tether to stake S on level ground. B is 21 meters directly above point G, and G is 20 meters from S, with a right angle at G\"><line class=\"ln\" x1=\"10\" y1=\"140\" x2=\"310\" y2=\"140\"/><line class=\"thin dash\" x1=\"182\" y1=\"30.8\" x2=\"182\" y2=\"140\"/><line class=\"ac\" x1=\"78\" y1=\"140\" x2=\"182\" y2=\"30.8\"/><path class=\"thin\" d=\"M173 140 L173 131 L182 131\"/><circle class=\"sh\" cx=\"182\" cy=\"17.8\" r=\"12\"/><path class=\"thin\" d=\"M178 29.3 L186 29.3 L182 30.8 Z\"/><circle class=\"dt\" cx=\"78\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"182\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"182\" cy=\"30.8\" r=\"3\"/><text x=\"66\" y=\"157\" text-anchor=\"middle\">S</text><text x=\"194\" y=\"157\" text-anchor=\"middle\">G</text><text x=\"157\" y=\"29.8\" text-anchor=\"middle\">B</text><text x=\"130\" y=\"161\" text-anchor=\"middle\">20 m</text><text x=\"204\" y=\"90.4\" text-anchor=\"middle\">21 m</text><text class=\"sm\" x=\"114.1\" y=\"74.2\" text-anchor=\"middle\">tether</text><text class=\"sm\" x=\"256\" y=\"56\" text-anchor=\"middle\">wind</text><path class=\"thin\" d=\"M232 62 H282 M276 57 L282 62 L276 67\"/></svg></figure><p class=\"geo-given\">A weather balloon <strong>B</strong> is tied to a stake <strong>S</strong> on level ground. The wind pushes it until it is 21 m directly above point <strong>G</strong>, which is 20 m from S. Treat the tether SB as a straight segment.</p>",
      "claims": [
        {
          "id": "tether",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How long is the tether SB?",
          "choices": [
            {
              "letter": "A",
              "text": "41 m"
            },
            {
              "letter": "B",
              "text": "29 m"
            },
            {
              "letter": "C",
              "text": "about 6.4 m"
            },
            {
              "letter": "D",
              "text": "841 m"
            }
          ],
          "correct": "B"
        },
        {
          "id": "tan",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which ratio is equal to tan S?",
          "choices": [
            {
              "letter": "A",
              "text": "20/21"
            },
            {
              "letter": "B",
              "text": "21/29"
            },
            {
              "letter": "C",
              "text": "20/29"
            },
            {
              "letter": "D",
              "text": "21/20"
            }
          ],
          "correct": "D"
        },
        {
          "id": "vertical",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest degree, what angle does the tether make with the vertical line BG (m∠SBG)?",
          "choices": [
            {
              "letter": "A",
              "text": "44°"
            },
            {
              "letter": "B",
              "text": "46°"
            },
            {
              "letter": "C",
              "text": "72°"
            },
            {
              "letter": "D",
              "text": "18°"
            }
          ],
          "correct": "A"
        },
        {
          "id": "stations",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "Three weather stations are 12 km, 16 km and 19 km apart. Which describes the triangle they form?",
          "choices": [
            {
              "letter": "A",
              "text": "Obtuse, because 19² is less than 12² + 16²"
            },
            {
              "letter": "B",
              "text": "Right, because 12 + 16 is greater than 19"
            },
            {
              "letter": "C",
              "text": "Acute, because 19² is less than 12² + 16²"
            },
            {
              "letter": "D",
              "text": "Obtuse, because 19 is the longest side"
            }
          ],
          "correct": "C"
        },
        {
          "id": "fortyfive",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "Another balloon is 18 m above the ground, and its straight tether makes a 45° angle with the ground. What is the exact length of the tether?",
          "choices": [
            {
              "letter": "A",
              "text": "18√2 m"
            },
            {
              "letter": "B",
              "text": "18√3 m"
            },
            {
              "letter": "C",
              "text": "9√2 m"
            },
            {
              "letter": "D",
              "text": "36 m"
            }
          ],
          "correct": "A"
        },
        {
          "id": "calm",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "Later the wind eases, and the 29-m tether makes a 62° angle with level ground. To the nearest tenth of a meter, how high is the balloon?",
          "choices": [
            {
              "letter": "A",
              "text": "13.6 m"
            },
            {
              "letter": "B",
              "text": "25.6 m"
            },
            {
              "letter": "C",
              "text": "54.5 m"
            },
            {
              "letter": "D",
              "text": "32.8 m"
            }
          ],
          "correct": "B"
        }
      ]
    },
    {
      "id": "geo-tr4-rocks-solar-panel",
      "family": "GEO",
      "mode": "rocks",
      "title": "The Tilted Solar Panel",
      "kind": "Triangles · G.TR.4",
      "blurb": "An 8-foot panel on a roof, tilted toward the sun.",
      "level": 1,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"Solar panel PQ, 8 feet long, rises from P on a flat roof at a 30 degree angle to Q, which rests on a vertical post QR; right angle at R\"><line class=\"ln\" x1=\"10\" y1=\"140\" x2=\"310\" y2=\"140\"/><line class=\"ln\" x1=\"222.3\" y1=\"44\" x2=\"222.3\" y2=\"140\"/><line class=\"ac\" x1=\"56\" y1=\"140\" x2=\"222.3\" y2=\"44\"/><path class=\"thin\" d=\"M213.3 140 L213.3 131 L222.3 131\"/><path class=\"thin\" d=\"M96 140 A40 40 0 0 0 90.6 120\"/><circle class=\"sh\" cx=\"286\" cy=\"34\" r=\"11\"/><line class=\"thin\" x1=\"301\" y1=\"34\" x2=\"307\" y2=\"34\"/><line class=\"thin\" x1=\"296.6\" y1=\"23.4\" x2=\"300.8\" y2=\"19.2\"/><line class=\"thin\" x1=\"286\" y1=\"19\" x2=\"286\" y2=\"13\"/><line class=\"thin\" x1=\"275.4\" y1=\"23.4\" x2=\"271.2\" y2=\"19.2\"/><line class=\"thin\" x1=\"271\" y1=\"34\" x2=\"265\" y2=\"34\"/><line class=\"thin\" x1=\"275.4\" y1=\"44.6\" x2=\"271.2\" y2=\"48.8\"/><line class=\"thin\" x1=\"286\" y1=\"49\" x2=\"286\" y2=\"55\"/><line class=\"thin\" x1=\"296.6\" y1=\"44.6\" x2=\"300.8\" y2=\"48.8\"/><circle class=\"dt\" cx=\"56\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"222.3\" cy=\"44\" r=\"3\"/><circle class=\"dt\" cx=\"222.3\" cy=\"140\" r=\"3\"/><text x=\"44\" y=\"157\" text-anchor=\"middle\">P</text><text x=\"234.3\" y=\"157\" text-anchor=\"middle\">R</text><text x=\"226.3\" y=\"37\" text-anchor=\"middle\">Q</text><text x=\"132.1\" y=\"84.9\" text-anchor=\"middle\">8 ft</text><text x=\"112\" y=\"130\" text-anchor=\"middle\">30°</text><text class=\"sm\" x=\"282.3\" y=\"156\" text-anchor=\"middle\">flat roof</text><text class=\"sm\" x=\"244.3\" y=\"96\" text-anchor=\"middle\">post</text></svg></figure><p class=\"geo-given\">A solar panel <strong>PQ</strong>, 8 ft long, sits on a flat roof. It is tilted 30° from the roof at <strong>P</strong>, and its top edge <strong>Q</strong> rests on a vertical post <strong>QR</strong>.</p>",
      "claims": [
        {
          "id": "post",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "How tall is the post QR?",
          "choices": [
            {
              "letter": "A",
              "text": "4√3 ft"
            },
            {
              "letter": "B",
              "text": "4√2 ft"
            },
            {
              "letter": "C",
              "text": "4 ft"
            },
            {
              "letter": "D",
              "text": "16 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "base",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "What is the exact distance PR along the roof?",
          "choices": [
            {
              "letter": "A",
              "text": "4√3 ft"
            },
            {
              "letter": "B",
              "text": "4 ft"
            },
            {
              "letter": "C",
              "text": "8√3 ft"
            },
            {
              "letter": "D",
              "text": "8√3/3 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "cos",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which ratio is equal to cos P?",
          "choices": [
            {
              "letter": "A",
              "text": "QR/PQ"
            },
            {
              "letter": "B",
              "text": "QR/PR"
            },
            {
              "letter": "C",
              "text": "PQ/PR"
            },
            {
              "letter": "D",
              "text": "PR/PQ"
            }
          ],
          "correct": "D"
        },
        {
          "id": "summer",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "In summer the 8-ft panel is tilted at 37° instead. To the nearest tenth of a foot, how tall must the post be?",
          "choices": [
            {
              "letter": "A",
              "text": "6.4 ft"
            },
            {
              "letter": "B",
              "text": "4.8 ft"
            },
            {
              "letter": "C",
              "text": "6.0 ft"
            },
            {
              "letter": "D",
              "text": "13.3 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "small",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "A smaller panel is 5 ft long, and its top edge is 2.2 ft above the roof. To the nearest degree, at what angle is it tilted?",
          "choices": [
            {
              "letter": "A",
              "text": "24°"
            },
            {
              "letter": "B",
              "text": "64°"
            },
            {
              "letter": "C",
              "text": "66°"
            },
            {
              "letter": "D",
              "text": "26°"
            }
          ],
          "correct": "D"
        },
        {
          "id": "spring",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "In spring the 8-ft panel is tilted at 45°. What is the exact height of its top edge above the roof?",
          "choices": [
            {
              "letter": "A",
              "text": "8√2 ft"
            },
            {
              "letter": "B",
              "text": "4 ft"
            },
            {
              "letter": "C",
              "text": "4√2 ft"
            },
            {
              "letter": "D",
              "text": "4√3 ft"
            }
          ],
          "correct": "C"
        }
      ]
    },
    {
      "id": "geo-tr4-rocks-rocket-path",
      "family": "GEO",
      "mode": "rocks",
      "title": "Tracking the Rocket's Climb",
      "kind": "Triangles · G.TR.4",
      "blurb": "A straight 72° climb seen from a tracking station.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A rocket flies from pad P along a straight path at 72 degrees to level ground; R is 15 km along the path, G is on the ground directly below R, and tracking station S is on the ground 22 km from P, past G\"><line class=\"ln\" x1=\"10\" y1=\"142\" x2=\"310\" y2=\"142\"/><line class=\"ac\" x1=\"40\" y1=\"142\" x2=\"80.8\" y2=\"16.5\"/><line class=\"thin dash\" x1=\"80.8\" y1=\"16.5\" x2=\"80.8\" y2=\"142\"/><line class=\"thin dash\" x1=\"233.6\" y1=\"142\" x2=\"80.8\" y2=\"16.5\"/><path class=\"thin\" d=\"M71.8 142 L71.8 133 L80.8 133\"/><path class=\"thin\" d=\"M58 142 A18 18 0 0 0 45.6 124.9\"/><polygon class=\"sh\" points=\"84.5,5 77,15.2 84.6,17.7\"/><line class=\"thin\" x1=\"40\" y1=\"150\" x2=\"233.6\" y2=\"150\"/><line class=\"thin\" x1=\"40\" y1=\"146\" x2=\"40\" y2=\"154\"/><line class=\"thin\" x1=\"233.6\" y1=\"146\" x2=\"233.6\" y2=\"154\"/><circle class=\"dt\" cx=\"40\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"80.8\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"80.8\" cy=\"16.5\" r=\"3\"/><circle class=\"dt\" cx=\"233.6\" cy=\"142\" r=\"3\"/><text x=\"28\" y=\"139\" text-anchor=\"middle\">P</text><text x=\"92.8\" y=\"137\" text-anchor=\"middle\">G</text><text x=\"94.8\" y=\"19.5\" text-anchor=\"middle\">R</text><text x=\"245.6\" y=\"137\" text-anchor=\"middle\">S</text><text x=\"35.7\" y=\"76.2\" text-anchor=\"middle\">15 km</text><text x=\"65.1\" y=\"128.8\" text-anchor=\"middle\">72°</text><text class=\"sm\" x=\"136.8\" y=\"166\" text-anchor=\"middle\">22 km</text><text class=\"sm\" x=\"267.6\" y=\"120\" text-anchor=\"middle\">station</text></svg></figure><p class=\"geo-given\">A rocket leaves pad <strong>P</strong> on a straight path that makes a 72° angle with level ground. <strong>R</strong> is the rocket after it has flown 15 km along the path, and <strong>G</strong> is the point on the ground directly below R. A tracking station <strong>S</strong> is on the ground 22 km from P, past G.</p>",
      "claims": [
        {
          "id": "altitude",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest tenth of a kilometer, what is the rocket's altitude RG?",
          "choices": [
            {
              "letter": "A",
              "text": "14.3 km"
            },
            {
              "letter": "B",
              "text": "4.6 km"
            },
            {
              "letter": "C",
              "text": "46.2 km"
            },
            {
              "letter": "D",
              "text": "15.8 km"
            }
          ],
          "correct": "A"
        },
        {
          "id": "cosine",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which ratio is equal to cos 72° in this figure?",
          "choices": [
            {
              "letter": "A",
              "text": "RG/PR"
            },
            {
              "letter": "B",
              "text": "RG/PG"
            },
            {
              "letter": "C",
              "text": "PG/PR"
            },
            {
              "letter": "D",
              "text": "PG/RG"
            }
          ],
          "correct": "C"
        },
        {
          "id": "station",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest degree, what is the angle of elevation from station S to the rocket at R?",
          "choices": [
            {
              "letter": "A",
              "text": "33°"
            },
            {
              "letter": "B",
              "text": "39°"
            },
            {
              "letter": "C",
              "text": "51°"
            },
            {
              "letter": "D",
              "text": "55°"
            }
          ],
          "correct": "B"
        },
        {
          "id": "sixty",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "Another rocket flies 15 km along a straight path that makes a 60° angle with the ground. What is its exact altitude?",
          "choices": [
            {
              "letter": "A",
              "text": "7.5 km"
            },
            {
              "letter": "B",
              "text": "15√3 km"
            },
            {
              "letter": "C",
              "text": "7.5√2 km"
            },
            {
              "letter": "D",
              "text": "7.5√3 km"
            }
          ],
          "correct": "D"
        },
        {
          "id": "model",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A model rocket rises 120 m straight up while the wind carries it 22 m sideways. How far is it from the launch point, in a straight line?",
          "choices": [
            {
              "letter": "A",
              "text": "142 m"
            },
            {
              "letter": "B",
              "text": "about 118.0 m"
            },
            {
              "letter": "C",
              "text": "122 m"
            },
            {
              "letter": "D",
              "text": "98 m"
            }
          ],
          "correct": "C"
        },
        {
          "id": "second",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "A second rocket flies 9 km along its straight path and climbs to 8 km above the ground. To the nearest degree, what angle does its path make with the ground?",
          "choices": [
            {
              "letter": "A",
              "text": "63°"
            },
            {
              "letter": "B",
              "text": "42°"
            },
            {
              "letter": "C",
              "text": "27°"
            },
            {
              "letter": "D",
              "text": "48°"
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-rocks-storm-tower",
      "family": "GEO",
      "mode": "rocks",
      "title": "Guy Wires on the Storm Tower",
      "kind": "Triangles · G.TR.4",
      "blurb": "A 24-meter tower held by wires at 60° and 45°.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A 24-meter tower TB on level ground with guy wire TA meeting the ground at 60 degrees on the left and guy wire TC meeting the ground at 45 degrees on the right; right angles at B\"><line class=\"ln\" x1=\"10\" y1=\"146\" x2=\"310\" y2=\"146\"/><rect class=\"sh2\" x=\"156\" y=\"26\" width=\"8\" height=\"120\"/><line class=\"thin\" x1=\"160\" y1=\"26\" x2=\"160\" y2=\"14\"/><line class=\"ac\" x1=\"160\" y1=\"26\" x2=\"90.7\" y2=\"146\"/><line class=\"ln\" x1=\"160\" y1=\"26\" x2=\"280\" y2=\"146\"/><path class=\"thin\" d=\"M152 146 L152 138 L160 138\"/><path class=\"thin\" d=\"M168 146 L168 138 L160 138\"/><path class=\"thin\" d=\"M114.7 146 A24 24 0 0 0 102.7 125.2\"/><path class=\"thin\" d=\"M254 146 A26 26 0 0 1 261.6 127.6\"/><circle class=\"dt\" cx=\"90.7\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"280\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"26\" r=\"3\"/><text x=\"80.7\" y=\"163\" text-anchor=\"middle\">A</text><text x=\"160\" y=\"166\" text-anchor=\"middle\">B</text><text x=\"290\" y=\"163\" text-anchor=\"middle\">C</text><text x=\"173\" y=\"27\" text-anchor=\"middle\">T</text><text x=\"123.6\" y=\"132\" text-anchor=\"middle\">60°</text><text x=\"241.2\" y=\"134.9\" text-anchor=\"middle\">45°</text><text x=\"182\" y=\"113\" text-anchor=\"middle\">24 m</text><text class=\"sm\" x=\"130\" y=\"28\" text-anchor=\"middle\">rod</text></svg></figure><p class=\"geo-given\">A storm-research tower <strong>TB</strong> is 24 m tall, with a lightning rod above its top <strong>T</strong>. It is perpendicular to the level ground. Guy wire <strong>TA</strong> makes a 60° angle with the ground, and guy wire <strong>TC</strong> makes a 45° angle with the ground.</p>",
      "claims": [
        {
          "id": "tc",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "What is the exact length of guy wire TC?",
          "choices": [
            {
              "letter": "A",
              "text": "24√3 m"
            },
            {
              "letter": "B",
              "text": "12√2 m"
            },
            {
              "letter": "C",
              "text": "48 m"
            },
            {
              "letter": "D",
              "text": "24√2 m"
            }
          ],
          "correct": "D"
        },
        {
          "id": "ab",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "What is the exact distance AB from anchor A to the base of the tower?",
          "choices": [
            {
              "letter": "A",
              "text": "24√3 m"
            },
            {
              "letter": "B",
              "text": "8√3 m"
            },
            {
              "letter": "C",
              "text": "12 m"
            },
            {
              "letter": "D",
              "text": "16√3 m"
            }
          ],
          "correct": "B"
        },
        {
          "id": "ta",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "What is the exact length of guy wire TA?",
          "choices": [
            {
              "letter": "A",
              "text": "48 m"
            },
            {
              "letter": "B",
              "text": "8√3 m"
            },
            {
              "letter": "C",
              "text": "16√3 m"
            },
            {
              "letter": "D",
              "text": "24√2 m"
            }
          ],
          "correct": "C"
        },
        {
          "id": "third",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A third wire runs from T to a stake D on the ground, 10 m from B. How long is this wire?",
          "choices": [
            {
              "letter": "A",
              "text": "26 m"
            },
            {
              "letter": "B",
              "text": "34 m"
            },
            {
              "letter": "C",
              "text": "about 21.8 m"
            },
            {
              "letter": "D",
              "text": "676 m"
            }
          ],
          "correct": "A"
        },
        {
          "id": "angle",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "A third wire runs from T to a stake D on the ground, 10 m from B. To the nearest degree, what angle does it make with the ground?",
          "choices": [
            {
              "letter": "A",
              "text": "23°"
            },
            {
              "letter": "B",
              "text": "65°"
            },
            {
              "letter": "C",
              "text": "25°"
            },
            {
              "letter": "D",
              "text": "67°"
            }
          ],
          "correct": "D"
        },
        {
          "id": "gauge",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A worker checks the stand of a rain gauge. She marks 15 cm along the base and 20 cm up the post from the corner, and the marks are 24 cm apart. What can she conclude?",
          "choices": [
            {
              "letter": "A",
              "text": "The angle is obtuse: 24² is less than 15² + 20²."
            },
            {
              "letter": "B",
              "text": "The angle is acute: 24² is less than 15² + 20²."
            },
            {
              "letter": "C",
              "text": "The angle is right: 15 + 20 is more than 24."
            },
            {
              "letter": "D",
              "text": "The angle is right: 15² + 20² = 24²."
            }
          ],
          "correct": "B"
        }
      ]
    },
    {
      "id": "geo-tr4-rocks-crater-shadow",
      "family": "GEO",
      "mode": "rocks",
      "title": "A Shadow in the Crater",
      "kind": "Triangles · G.TR.4",
      "blurb": "Measuring a crater's depth from the sun's angle.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 128\" role=\"img\" aria-label=\"Cross-section of a crater: sunlight grazes the rim R and reaches the floor at S, 12 degrees above the floor; D is on the floor directly below R, and the shadow DS is 2,400 meters long\"><polygon class=\"sh2\" points=\"56,54.1 62,63.1 74,100 272,100\"/><polyline class=\"ln\" points=\"10,54.1 56,54.1 62,63.1 74,100 262,100 292,60.1 300,54.1 312,54.1\"/><line class=\"thin dash\" x1=\"5.1\" y1=\"43.3\" x2=\"56\" y2=\"54.1\"/><line class=\"ac\" x1=\"56\" y1=\"54.1\" x2=\"272\" y2=\"100\"/><line class=\"thin dash\" x1=\"56\" y1=\"54.1\" x2=\"56\" y2=\"100\"/><line class=\"thin dash\" x1=\"56\" y1=\"100\" x2=\"74\" y2=\"100\"/><path class=\"thin\" d=\"M63 100 L63 93 L56 93\"/><path class=\"thin\" d=\"M208 100 A64 64 0 0 1 209.4 86.7\"/><circle class=\"dt\" cx=\"56\" cy=\"54.1\" r=\"3\"/><circle class=\"dt\" cx=\"56\" cy=\"100\" r=\"3\"/><circle class=\"dt\" cx=\"272\" cy=\"100\" r=\"3\"/><text x=\"54\" y=\"47.1\" text-anchor=\"middle\">R</text><text x=\"44\" y=\"113\" text-anchor=\"middle\">D</text><text x=\"276\" y=\"120\" text-anchor=\"middle\">S</text><text x=\"164\" y=\"123\" text-anchor=\"middle\">2,400 m</text><text x=\"174.5\" y=\"94.8\" text-anchor=\"middle\">12°</text><text class=\"sm\" x=\"36\" y=\"30\" text-anchor=\"middle\">sunlight</text><text class=\"sm\" x=\"150\" y=\"44.1\" text-anchor=\"middle\">crater</text></svg></figure><p class=\"geo-given\">Astronomers estimate a crater's depth from a photo. Sunlight grazes the rim <strong>R</strong> and reaches the flat floor at <strong>S</strong>. <strong>D</strong> is the point on the floor's level directly below R, and the shadow DS is 2,400 m long. The sun's rays make a 12° angle with the floor.</p>",
      "claims": [
        {
          "id": "depth",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest meter, how deep is the crater (RD)?",
          "choices": [
            {
              "letter": "A",
              "text": "510 m"
            },
            {
              "letter": "B",
              "text": "499 m"
            },
            {
              "letter": "C",
              "text": "2,454 m"
            },
            {
              "letter": "D",
              "text": "11,291 m"
            }
          ],
          "correct": "A"
        },
        {
          "id": "equation",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Let d = RD. Which equation can be used to find the depth d?",
          "choices": [
            {
              "letter": "A",
              "text": "sin 12° = d/2400"
            },
            {
              "letter": "B",
              "text": "tan 12° = 2400/d"
            },
            {
              "letter": "C",
              "text": "cos 12° = d/2400"
            },
            {
              "letter": "D",
              "text": "tan 12° = d/2400"
            }
          ],
          "correct": "D"
        },
        {
          "id": "other",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "In another photo, a crater 700 m deep casts a shadow 1,300 m long across its floor. To the nearest degree, what angle do the sun's rays make with the floor?",
          "choices": [
            {
              "letter": "A",
              "text": "33°"
            },
            {
              "letter": "B",
              "text": "28°"
            },
            {
              "letter": "C",
              "text": "57°"
            },
            {
              "letter": "D",
              "text": "62°"
            }
          ],
          "correct": "B"
        },
        {
          "id": "rover",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A rover drives straight down a crater wall that drops 0.65 km over a horizontal distance of 0.72 km. How far does it drive?",
          "choices": [
            {
              "letter": "A",
              "text": "1.37 km"
            },
            {
              "letter": "B",
              "text": "about 0.31 km"
            },
            {
              "letter": "C",
              "text": "0.97 km"
            },
            {
              "letter": "D",
              "text": "about 0.94 km"
            }
          ],
          "correct": "C"
        },
        {
          "id": "thirty",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "When the sun is 30° above the floor, a rim 400 m above the floor casts a shadow straight across it. What is the exact length of the shadow?",
          "choices": [
            {
              "letter": "A",
              "text": "400√3/3 m"
            },
            {
              "letter": "B",
              "text": "800 m"
            },
            {
              "letter": "C",
              "text": "200√3 m"
            },
            {
              "letter": "D",
              "text": "400√3 m"
            }
          ],
          "correct": "D"
        },
        {
          "id": "model",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A lab models crater walls with triangles. Which side lengths, in centimeters, form an obtuse triangle?",
          "choices": [
            {
              "letter": "A",
              "text": "5, 9, 11"
            },
            {
              "letter": "B",
              "text": "5, 12, 13"
            },
            {
              "letter": "C",
              "text": "7, 9, 11"
            },
            {
              "letter": "D",
              "text": "3, 4, 8"
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-rocks-lab-ramp",
      "family": "GEO",
      "mode": "rocks",
      "title": "The Lab Cart Ramp",
      "kind": "Triangles · G.TR.4",
      "blurb": "A 100-cm board propped on books for a cart race.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 144\" role=\"img\" aria-label=\"A 100-centimeter board AB rests on a table at A and on a stack of books at B; B is 36 centimeters above C, the point on the table directly below B; a lab cart sits on the board\"><line class=\"ln\" x1=\"10\" y1=\"120\" x2=\"310\" y2=\"120\"/><rect class=\"sh2\" x=\"254.6\" y=\"39.2\" width=\"44\" height=\"26.9\"/><rect class=\"sh2\" x=\"254.6\" y=\"66.1\" width=\"44\" height=\"26.9\"/><rect class=\"sh2\" x=\"254.6\" y=\"93.1\" width=\"44\" height=\"26.9\"/><line class=\"thin dash\" x1=\"254.6\" y1=\"37.2\" x2=\"254.6\" y2=\"120\"/><line class=\"ac\" x1=\"40\" y1=\"120\" x2=\"254.6\" y2=\"37.2\"/><path class=\"thin\" d=\"M246.6 120 L246.6 112 L254.6 112\"/><path class=\"thin\" d=\"M70 120 A30 30 0 0 0 68 109.2\"/><polygon class=\"sh\" points=\"123.7,81.3 155.4,69 151.8,59.7 120.1,72\"/><circle class=\"thin\" cx=\"131.1\" cy=\"81.1\" r=\"3.5\"/><circle class=\"thin\" cx=\"149.8\" cy=\"73.9\" r=\"3.5\"/><circle class=\"dt\" cx=\"40\" cy=\"120\" r=\"3\"/><circle class=\"dt\" cx=\"254.6\" cy=\"37.2\" r=\"3\"/><circle class=\"dt\" cx=\"254.6\" cy=\"120\" r=\"3\"/><text x=\"32\" y=\"113\" text-anchor=\"middle\">A</text><text x=\"250.6\" y=\"29.2\" text-anchor=\"middle\">B</text><text x=\"244.6\" y=\"139\" text-anchor=\"middle\">C</text><text x=\"136.5\" y=\"55.6\" text-anchor=\"middle\">100 cm</text><text x=\"228.6\" y=\"91.6\" text-anchor=\"middle\">36 cm</text><text class=\"sm\" x=\"276.6\" y=\"83.6\" text-anchor=\"middle\">books</text><text class=\"sm\" x=\"140\" y=\"138\" text-anchor=\"middle\">table</text></svg></figure><p class=\"geo-given\">In a physics lab, a 100-cm board <strong>AB</strong> rests on a table at <strong>A</strong> and on a stack of books at <strong>B</strong>. B is 36 cm above the table, and <strong>C</strong> is the point on the table directly below B.</p>",
      "claims": [
        {
          "id": "expr",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which expression gives m∠A, the angle between the board and the table?",
          "choices": [
            {
              "letter": "A",
              "text": "tan⁻¹(36/100)"
            },
            {
              "letter": "B",
              "text": "cos⁻¹(36/100)"
            },
            {
              "letter": "C",
              "text": "sin⁻¹(36/100)"
            },
            {
              "letter": "D",
              "text": "sin⁻¹(100/36)"
            }
          ],
          "correct": "C"
        },
        {
          "id": "ac",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "To the nearest tenth of a centimeter, how far is A from C?",
          "choices": [
            {
              "letter": "A",
              "text": "136.0 cm"
            },
            {
              "letter": "B",
              "text": "93.3 cm"
            },
            {
              "letter": "C",
              "text": "106.3 cm"
            },
            {
              "letter": "D",
              "text": "64.0 cm"
            }
          ],
          "correct": "B"
        },
        {
          "id": "raise",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "The teacher raises B so that the board makes a 26° angle with the table. To the nearest tenth of a centimeter, how much higher is B than it is now?",
          "choices": [
            {
              "letter": "A",
              "text": "53.9 cm"
            },
            {
              "letter": "B",
              "text": "12.8 cm"
            },
            {
              "letter": "C",
              "text": "43.8 cm"
            },
            {
              "letter": "D",
              "text": "7.8 cm"
            }
          ],
          "correct": "D"
        },
        {
          "id": "thirty",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "Another 100-cm board makes a 30° angle with the table. What is the exact horizontal distance between its two ends?",
          "choices": [
            {
              "letter": "A",
              "text": "50√3 cm"
            },
            {
              "letter": "B",
              "text": "50 cm"
            },
            {
              "letter": "C",
              "text": "100√3 cm"
            },
            {
              "letter": "D",
              "text": "50√2 cm"
            }
          ],
          "correct": "A"
        },
        {
          "id": "cosB",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which ratio is equal to cos B?",
          "choices": [
            {
              "letter": "A",
              "text": "AC/AB"
            },
            {
              "letter": "B",
              "text": "BC/AB"
            },
            {
              "letter": "C",
              "text": "AC/BC"
            },
            {
              "letter": "D",
              "text": "BC/AC"
            }
          ],
          "correct": "B"
        },
        {
          "id": "triple",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "Students want a ramp whose height, base and length are whole numbers of centimeters forming a right triangle. Which set works?",
          "choices": [
            {
              "letter": "A",
              "text": "12, 35, 36"
            },
            {
              "letter": "B",
              "text": "20, 30, 50"
            },
            {
              "letter": "C",
              "text": "20, 99, 101"
            },
            {
              "letter": "D",
              "text": "15, 36, 40"
            }
          ],
          "correct": "C"
        }
      ]
    },
    {
      "id": "geo-tr4-rocks-cloud-ceiling",
      "family": "GEO",
      "mode": "rocks",
      "title": "Measuring the Cloud Ceiling",
      "kind": "Triangles · G.TR.4",
      "blurb": "A searchlight spot on the clouds, seen at 54°.",
      "level": 3,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A searchlight at L shines straight up to a bright spot C on the cloud base; observer O is 600 meters from L on level ground and sees C at a 54 degree angle of elevation; right angle at L\"><line class=\"ln\" x1=\"10\" y1=\"146\" x2=\"310\" y2=\"146\"/><path class=\"sh2\" d=\"M110 30.4 C110 14.4 140 10.4 152 18.4 C162 2.4 198 2.4 206 18.4 C224 10.4 254 16.4 254 30.4 Z\"/><line class=\"ac dash\" x1=\"180\" y1=\"138\" x2=\"180\" y2=\"30.4\"/><polygon class=\"sh\" points=\"173,146 187,146 184,138 176,138\"/><line class=\"ln\" x1=\"96\" y1=\"146\" x2=\"180\" y2=\"30.4\"/><path class=\"thin\" d=\"M172 146 L172 138 L180 138\"/><path class=\"thin\" d=\"M126 146 A30 30 0 0 0 113.6 121.7\"/><circle class=\"dt\" cx=\"96\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"180\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"180\" cy=\"30.4\" r=\"3\"/><text x=\"84\" y=\"145\" text-anchor=\"middle\">O</text><text x=\"194\" y=\"143\" text-anchor=\"middle\">L</text><text x=\"194\" y=\"47.4\" text-anchor=\"middle\">C</text><text x=\"138\" y=\"165\" text-anchor=\"middle\">600 m</text><text x=\"137\" y=\"130.1\" text-anchor=\"middle\">54°</text><text class=\"sm\" x=\"226\" y=\"102.2\" text-anchor=\"middle\">light beam</text><text class=\"sm\" x=\"84\" y=\"28.4\" text-anchor=\"middle\">clouds</text></svg></figure><p class=\"geo-given\">To measure the cloud ceiling at night, a searchlight at <strong>L</strong> shines straight up and makes a bright spot <strong>C</strong> on the base of the clouds. An observer at <strong>O</strong>, 600 m from L on level ground, measures a 54° angle of elevation to C.</p>",
      "claims": [
        {
          "id": "ceiling",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest meter, how high is the cloud base (LC)?",
          "choices": [
            {
              "letter": "A",
              "text": "485 m"
            },
            {
              "letter": "B",
              "text": "826 m"
            },
            {
              "letter": "C",
              "text": "353 m"
            },
            {
              "letter": "D",
              "text": "436 m"
            }
          ],
          "correct": "B"
        },
        {
          "id": "sight",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest meter, how far is the observer from the bright spot (OC)?",
          "choices": [
            {
              "letter": "A",
              "text": "353 m"
            },
            {
              "letter": "B",
              "text": "742 m"
            },
            {
              "letter": "C",
              "text": "1,021 m"
            },
            {
              "letter": "D",
              "text": "1,426 m"
            }
          ],
          "correct": "C"
        },
        {
          "id": "drop",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "An hour later the clouds are lower, and the angle of elevation from O to the new spot is 41°. To the nearest meter, how far did the cloud base drop?",
          "choices": [
            {
              "letter": "A",
              "text": "304 m"
            },
            {
              "letter": "B",
              "text": "139 m"
            },
            {
              "letter": "C",
              "text": "522 m"
            },
            {
              "letter": "D",
              "text": "92 m"
            }
          ],
          "correct": "A"
        },
        {
          "id": "thousand",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "On another night the cloud base is 1,000 m above L. To the nearest degree, what angle of elevation does the observer at O measure?",
          "choices": [
            {
              "letter": "A",
              "text": "31°"
            },
            {
              "letter": "B",
              "text": "53°"
            },
            {
              "letter": "C",
              "text": "37°"
            },
            {
              "letter": "D",
              "text": "59°"
            }
          ],
          "correct": "D"
        },
        {
          "id": "sixty",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "Suppose the observer at O measured a 60° angle of elevation to the spot. What would be the exact height of the cloud base?",
          "choices": [
            {
              "letter": "A",
              "text": "200√3 m"
            },
            {
              "letter": "B",
              "text": "600√3 m"
            },
            {
              "letter": "C",
              "text": "1,200 m"
            },
            {
              "letter": "D",
              "text": "300√3 m"
            }
          ],
          "correct": "B"
        },
        {
          "id": "mast",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "To check that a new weather mast stands straight up, a crew marks 0.9 m along the ground and 1.2 m up the mast from its base. The marks are 1.6 m apart. What can they conclude?",
          "choices": [
            {
              "letter": "A",
              "text": "The angle is obtuse, so the mast leans."
            },
            {
              "letter": "B",
              "text": "The angle is acute, so the mast leans."
            },
            {
              "letter": "C",
              "text": "The angle is right: 0.9 + 1.2 is over 1.6."
            },
            {
              "letter": "D",
              "text": "The angle is right: 1.6 is close to 1.5."
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-rocks-observatory",
      "family": "GEO",
      "mode": "rocks",
      "title": "The Hilltop Observatory",
      "kind": "Triangles · G.TR.4",
      "blurb": "Looking down at two radio dishes from a telescope dome.",
      "level": 3,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 136\" role=\"img\" aria-label=\"A hilltop observatory O, 420 meters above point B on the level plain. Horizontal dashed line through O. The angle of depression from O to dish W, west of B, is 35 degrees; the angle of depression from O to dish E, east of B, is 21 degrees\"><line class=\"ln\" x1=\"10\" y1=\"112\" x2=\"310\" y2=\"112\"/><polygon class=\"sh2\" points=\"82,112 108,46.6 124,46.6 172,112\"/><path class=\"sh\" d=\"M107 46.6 A9 9 0 0 1 125 46.6 Z\"/><line class=\"thin dash\" x1=\"46\" y1=\"40.6\" x2=\"236\" y2=\"40.6\"/><line class=\"thin dash\" x1=\"116\" y1=\"40.6\" x2=\"116\" y2=\"112\"/><path class=\"thin\" d=\"M109 112 L109 105 L116 105\"/><line class=\"ln\" x1=\"116\" y1=\"40.6\" x2=\"14\" y2=\"112\"/><line class=\"ac\" x1=\"116\" y1=\"40.6\" x2=\"302\" y2=\"112\"/><path class=\"thin\" d=\"M86 40.6 A30 30 0 0 0 91.4 57.8\"/><path class=\"thin\" d=\"M186 40.6 A70 70 0 0 1 181.3 65.7\"/><circle class=\"dt\" cx=\"116\" cy=\"40.6\" r=\"3\"/><circle class=\"dt\" cx=\"116\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"14\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"302\" cy=\"112\" r=\"3\"/><text x=\"116\" y=\"30.6\" text-anchor=\"middle\">O</text><text x=\"117\" y=\"131\" text-anchor=\"middle\">B</text><text x=\"16\" y=\"131\" text-anchor=\"middle\">W</text><text x=\"300\" y=\"131\" text-anchor=\"middle\">E</text><text x=\"66\" y=\"59.9\" text-anchor=\"middle\">35°</text><text x=\"200.5\" y=\"61.3\" text-anchor=\"middle\">21°</text><text class=\"sm\" x=\"139\" y=\"104\" text-anchor=\"middle\">420 m</text></svg></figure><p class=\"geo-given\">A telescope dome <strong>O</strong> sits on a hilltop, 420 m above <strong>B</strong>, the point on the level plain directly below it. Two radio dishes are on the plain on opposite sides of B: from O, the angle of depression to dish <strong>W</strong> is 35° and to dish <strong>E</strong> is 21°.</p>",
      "claims": [
        {
          "id": "equal",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "Which angle of △OBE has the same measure as the 21° angle of depression from O to E?",
          "choices": [
            {
              "letter": "A",
              "text": "∠BOE"
            },
            {
              "letter": "B",
              "text": "∠OBE"
            },
            {
              "letter": "C",
              "text": "∠OWB"
            },
            {
              "letter": "D",
              "text": "∠OEB"
            }
          ],
          "correct": "D"
        },
        {
          "id": "bw",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest meter, how far is dish W from B?",
          "choices": [
            {
              "letter": "A",
              "text": "294 m"
            },
            {
              "letter": "B",
              "text": "732 m"
            },
            {
              "letter": "C",
              "text": "600 m"
            },
            {
              "letter": "D",
              "text": "344 m"
            }
          ],
          "correct": "C"
        },
        {
          "id": "apart",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest meter, how far apart are the two dishes (WE)?",
          "choices": [
            {
              "letter": "A",
              "text": "494 m"
            },
            {
              "letter": "B",
              "text": "1,694 m"
            },
            {
              "letter": "C",
              "text": "455 m"
            },
            {
              "letter": "D",
              "text": "1,094 m"
            }
          ],
          "correct": "B"
        },
        {
          "id": "oe",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest meter, how long is the line of sight OE?",
          "choices": [
            {
              "letter": "A",
              "text": "1,172 m"
            },
            {
              "letter": "B",
              "text": "450 m"
            },
            {
              "letter": "C",
              "text": "1,094 m"
            },
            {
              "letter": "D",
              "text": "1,514 m"
            }
          ],
          "correct": "A"
        },
        {
          "id": "cable",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A cable runs straight from O down to a point P on the plain. The angle of depression from O to P is 30°. What is the exact length of the cable?",
          "choices": [
            {
              "letter": "A",
              "text": "420√3 m"
            },
            {
              "letter": "B",
              "text": "420√2 m"
            },
            {
              "letter": "C",
              "text": "840 m"
            },
            {
              "letter": "D",
              "text": "280√3 m"
            }
          ],
          "correct": "C"
        },
        {
          "id": "road",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A straight cable runs from O to a point Q on the plain, 560 m from B. How long is the cable?",
          "choices": [
            {
              "letter": "A",
              "text": "980 m"
            },
            {
              "letter": "B",
              "text": "about 370 m"
            },
            {
              "letter": "C",
              "text": "140 m"
            },
            {
              "letter": "D",
              "text": "700 m"
            }
          ],
          "correct": "D"
        }
      ]
    },
    {
      "id": "geo-tr4-sky-truck-ramp",
      "family": "GEO",
      "mode": "sky",
      "title": "The Moving-Truck Ramp",
      "kind": "Triangles · G.TR.4",
      "blurb": "An 8-foot ramp up to a truck bed.",
      "level": 1,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"A ramp AB, 8 feet long, runs from A on level ground up to B at the back of a truck; B is 3.4 feet above C, the point on the ground directly below it\"><line class=\"ln\" x1=\"10\" y1=\"142\" x2=\"310\" y2=\"142\"/><rect class=\"sh2\" x=\"199.3\" y=\"15.2\" width=\"104\" height=\"52\"/><rect class=\"sh2\" x=\"199.3\" y=\"67.2\" width=\"104\" height=\"10\"/><circle class=\"ln\" cx=\"221.3\" cy=\"133\" r=\"9\"/><circle class=\"ln\" cx=\"281.3\" cy=\"133\" r=\"9\"/><line class=\"thin dash\" x1=\"199.3\" y1=\"67.2\" x2=\"199.3\" y2=\"142\"/><line class=\"ac\" x1=\"40\" y1=\"142\" x2=\"199.3\" y2=\"67.2\"/><path class=\"thin\" d=\"M191.3 142 L191.3 134 L199.3 134\"/><path class=\"thin\" d=\"M72 142 A32 32 0 0 0 69 128.4\"/><circle class=\"dt\" cx=\"40\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"199.3\" cy=\"67.2\" r=\"3\"/><circle class=\"dt\" cx=\"199.3\" cy=\"142\" r=\"3\"/><text x=\"34\" y=\"135\" text-anchor=\"middle\">A</text><text x=\"187.3\" y=\"64.2\" text-anchor=\"middle\">B</text><text x=\"189.3\" y=\"160\" text-anchor=\"middle\">C</text><text x=\"113.7\" y=\"96.9\" text-anchor=\"middle\">8 ft</text><text x=\"169.3\" y=\"121.6\" text-anchor=\"middle\">3.4 ft</text><text class=\"sm\" x=\"251.3\" y=\"45.2\" text-anchor=\"middle\">truck</text></svg></figure><p class=\"geo-given\">Movers set an 8-ft ramp <strong>AB</strong> from the ground at <strong>A</strong> to the back of a truck at <strong>B</strong>. The truck bed is 3.4 ft above level ground, and <strong>C</strong> is the point on the ground directly below B.</p>",
      "claims": [
        {
          "id": "run",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "To the nearest tenth of a foot, how far is A from C?",
          "choices": [
            {
              "letter": "A",
              "text": "8.7 ft"
            },
            {
              "letter": "B",
              "text": "4.6 ft"
            },
            {
              "letter": "C",
              "text": "7.2 ft"
            },
            {
              "letter": "D",
              "text": "11.4 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "angle",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest degree, what angle does the ramp make with the ground?",
          "choices": [
            {
              "letter": "A",
              "text": "25°"
            },
            {
              "letter": "B",
              "text": "23°"
            },
            {
              "letter": "C",
              "text": "65°"
            },
            {
              "letter": "D",
              "text": "67°"
            }
          ],
          "correct": "A"
        },
        {
          "id": "tan",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which ratio is equal to tan A?",
          "choices": [
            {
              "letter": "A",
              "text": "AC/BC"
            },
            {
              "letter": "B",
              "text": "BC/AC"
            },
            {
              "letter": "C",
              "text": "BC/AB"
            },
            {
              "letter": "D",
              "text": "AC/AB"
            }
          ],
          "correct": "B"
        },
        {
          "id": "sets",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "Which measures (rise, run, length), in feet, could belong to a ramp that forms a right triangle?",
          "choices": [
            {
              "letter": "A",
              "text": "2.8, 4.5, 7.3"
            },
            {
              "letter": "B",
              "text": "2.4, 3.2, 4.2"
            },
            {
              "letter": "C",
              "text": "1.2, 3.5, 3.6"
            },
            {
              "letter": "D",
              "text": "2.8, 4.5, 5.3"
            }
          ],
          "correct": "D"
        },
        {
          "id": "dock",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A loading dock is 5 ft high. A ramp up to it makes a 30° angle with the ground. What is the exact horizontal run of the ramp?",
          "choices": [
            {
              "letter": "A",
              "text": "5√3 ft"
            },
            {
              "letter": "B",
              "text": "10 ft"
            },
            {
              "letter": "C",
              "text": "5√2 ft"
            },
            {
              "letter": "D",
              "text": "5√3/3 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "twenty",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "The movers want the ramp to meet the ground at exactly 20° and still reach the 3.4-ft truck bed. To the nearest tenth of a foot, how long must the ramp be?",
          "choices": [
            {
              "letter": "A",
              "text": "9.3 ft"
            },
            {
              "letter": "B",
              "text": "1.2 ft"
            },
            {
              "letter": "C",
              "text": "9.9 ft"
            },
            {
              "letter": "D",
              "text": "3.6 ft"
            }
          ],
          "correct": "C"
        }
      ]
    },
    {
      "id": "geo-tr4-sky-kite-string",
      "family": "GEO",
      "mode": "sky",
      "title": "The Kite on a String",
      "kind": "Triangles · G.TR.4",
      "blurb": "A 120-foot kite string at 60° to the ground.",
      "level": 1,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A kite K on a straight 120-foot string tied to stake H on level ground; the string makes a 60 degree angle with the ground; G is on the ground directly below K\"><line class=\"ln\" x1=\"10\" y1=\"146\" x2=\"310\" y2=\"146\"/><line class=\"thin dash\" x1=\"175\" y1=\"36.9\" x2=\"175\" y2=\"146\"/><line class=\"ac\" x1=\"112\" y1=\"146\" x2=\"175\" y2=\"36.9\"/><polygon class=\"sh\" points=\"175,24.9 184,35.9 175,42.9 166,35.9\"/><path class=\"thin\" d=\"M175 42.9 q 6 8 0 14 q -6 7 2 13\"/><path class=\"thin\" d=\"M167 146 L167 138 L175 138\"/><path class=\"thin\" d=\"M140 146 A28 28 0 0 0 126 121.8\"/><circle class=\"dt\" cx=\"112\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"175\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"175\" cy=\"36.9\" r=\"3\"/><text x=\"100\" y=\"139\" text-anchor=\"middle\">H</text><text x=\"187\" y=\"163\" text-anchor=\"middle\">G</text><text x=\"193\" y=\"35.9\" text-anchor=\"middle\">K</text><text x=\"119.3\" y=\"82.4\" text-anchor=\"middle\">120 ft</text><text x=\"148.4\" y=\"130\" text-anchor=\"middle\">60°</text><text class=\"sm\" x=\"92\" y=\"162\" text-anchor=\"middle\">stake</text></svg></figure><p class=\"geo-given\">A kite <strong>K</strong> flies at the end of a 120-ft string tied to a stake <strong>H</strong> on level ground. The string makes a 60° angle with the ground, and <strong>G</strong> is the point on the ground directly below K. Treat the string as straight.</p>",
      "claims": [
        {
          "id": "height",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "How high is the kite (KG)? Give an exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "60 ft"
            },
            {
              "letter": "B",
              "text": "120√3 ft"
            },
            {
              "letter": "C",
              "text": "60√2 ft"
            },
            {
              "letter": "D",
              "text": "60√3 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "ground",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "How far is the stake H from point G?",
          "choices": [
            {
              "letter": "A",
              "text": "60√3 ft"
            },
            {
              "letter": "B",
              "text": "60 ft"
            },
            {
              "letter": "C",
              "text": "40√3 ft"
            },
            {
              "letter": "D",
              "text": "240 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "wind",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "The wind drops, and the 120-ft string now makes a 48° angle with the ground. To the nearest tenth of a foot, how high is the kite?",
          "choices": [
            {
              "letter": "A",
              "text": "89.2 ft"
            },
            {
              "letter": "B",
              "text": "80.3 ft"
            },
            {
              "letter": "C",
              "text": "133.3 ft"
            },
            {
              "letter": "D",
              "text": "161.5 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "sinH",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which ratio is equal to sin H?",
          "choices": [
            {
              "letter": "A",
              "text": "HG/KH"
            },
            {
              "letter": "B",
              "text": "KG/HG"
            },
            {
              "letter": "C",
              "text": "KG/KH"
            },
            {
              "letter": "D",
              "text": "KH/KG"
            }
          ],
          "correct": "C"
        },
        {
          "id": "spars",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A diamond kite's two spars cross at right angles. From the crossing point, two spar ends are 9 in. and 12 in. away. How long is the kite's edge between those two ends?",
          "choices": [
            {
              "letter": "A",
              "text": "21 in."
            },
            {
              "letter": "B",
              "text": "15 in."
            },
            {
              "letter": "C",
              "text": "about 7.9 in."
            },
            {
              "letter": "D",
              "text": "225 in."
            }
          ],
          "correct": "B"
        },
        {
          "id": "another",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Another kite flies on 100 ft of straight string, 64 ft above the stake it is tied to. To the nearest degree, what angle does the string make with the ground?",
          "choices": [
            {
              "letter": "A",
              "text": "33°"
            },
            {
              "letter": "B",
              "text": "50°"
            },
            {
              "letter": "C",
              "text": "57°"
            },
            {
              "letter": "D",
              "text": "40°"
            }
          ],
          "correct": "D"
        }
      ]
    },
    {
      "id": "geo-tr4-sky-glide-path",
      "family": "GEO",
      "mode": "sky",
      "title": "The 3° Glide Path",
      "kind": "Triangles · G.TR.4",
      "blurb": "A plane on its final approach to the runway.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A plane P is 1,200 feet above point G on the ground; its glide path runs straight down to touchdown point T on the runway; the angle of depression from P to T, measured from a horizontal dashed line, is 3 degrees; right angle at G\"><line class=\"ln\" x1=\"10\" y1=\"128\" x2=\"310\" y2=\"128\"/><rect class=\"sh2\" x=\"230\" y=\"128\" width=\"80\" height=\"6\"/><line class=\"thin dash\" x1=\"66\" y1=\"46\" x2=\"300\" y2=\"46\"/><line class=\"thin dash\" x1=\"44\" y1=\"46\" x2=\"44\" y2=\"128\"/><line class=\"ac\" x1=\"44\" y1=\"46\" x2=\"284\" y2=\"128\"/><path class=\"sh\" d=\"M28 43 L58 43 L64 46 L58 49 L28 49 Z\"/><path class=\"thin\" d=\"M42 43 L36 34 M30 43 L26 36\"/><path class=\"thin\" d=\"M52 128 L52 120 L44 120\"/><path class=\"thin\" d=\"M114 46 A70 70 0 0 1 110.2 68.6\"/><circle class=\"dt\" cx=\"44\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"44\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"284\" cy=\"128\" r=\"3\"/><text x=\"40\" y=\"31\" text-anchor=\"middle\">P</text><text x=\"32\" y=\"145\" text-anchor=\"middle\">G</text><text x=\"298\" y=\"121\" text-anchor=\"middle\">T</text><text x=\"84\" y=\"100\" text-anchor=\"middle\">1,200 ft</text><text x=\"135.1\" y=\"63.8\" text-anchor=\"middle\">3°</text><text class=\"sm\" x=\"262\" y=\"146\" text-anchor=\"middle\">runway</text><text class=\"sm\" x=\"154\" y=\"42\" text-anchor=\"middle\">horizontal</text></svg><figcaption>Not drawn to scale</figcaption></figure><p class=\"geo-given\">A plane at <strong>P</strong> is 1,200 ft above the ground on its approach to touchdown point <strong>T</strong> on the runway. The angle of depression from the plane to T is 3°. <strong>G</strong> is the point on the ground directly below the plane.</p>",
      "claims": [
        {
          "id": "gpt",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "What is m∠GPT, the angle at the plane between the vertical segment PG and the glide path PT?",
          "choices": [
            {
              "letter": "A",
              "text": "3°"
            },
            {
              "letter": "B",
              "text": "93°"
            },
            {
              "letter": "C",
              "text": "177°"
            },
            {
              "letter": "D",
              "text": "87°"
            }
          ],
          "correct": "D"
        },
        {
          "id": "ground",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest foot, how far is G from the touchdown point T?",
          "choices": [
            {
              "letter": "A",
              "text": "22,897 ft"
            },
            {
              "letter": "B",
              "text": "63 ft"
            },
            {
              "letter": "C",
              "text": "22,929 ft"
            },
            {
              "letter": "D",
              "text": "1,202 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "equation",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which equation can be used to find PT, the distance the plane flies to touchdown?",
          "choices": [
            {
              "letter": "A",
              "text": "cos 3° = 1200/PT"
            },
            {
              "letter": "B",
              "text": "tan 3° = 1200/PT"
            },
            {
              "letter": "C",
              "text": "sin 3° = 1200/PT"
            },
            {
              "letter": "D",
              "text": "sin 3° = PT/1200"
            }
          ],
          "correct": "C"
        },
        {
          "id": "descend",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "Staying on a 3° glide path, a plane descends from 1,200 ft to 500 ft. To the nearest foot, how far does it travel horizontally?",
          "choices": [
            {
              "letter": "A",
              "text": "13,375 ft"
            },
            {
              "letter": "B",
              "text": "13,357 ft"
            },
            {
              "letter": "C",
              "text": "9,541 ft"
            },
            {
              "letter": "D",
              "text": "32,438 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "heli",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A helicopter 300 ft above a helipad's level descends to the pad along a straight path at a 45° angle of depression. What is the exact length of its path?",
          "choices": [
            {
              "letter": "A",
              "text": "300√2 ft"
            },
            {
              "letter": "B",
              "text": "300 ft"
            },
            {
              "letter": "C",
              "text": "600 ft"
            },
            {
              "letter": "D",
              "text": "300√3 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "map",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "On the airport map, the end of a runway is 840 ft east and 130 ft north of the control tower. How far is it from the tower in a straight line?",
          "choices": [
            {
              "letter": "A",
              "text": "970 ft"
            },
            {
              "letter": "B",
              "text": "about 830 ft"
            },
            {
              "letter": "C",
              "text": "710 ft"
            },
            {
              "letter": "D",
              "text": "850 ft"
            }
          ],
          "correct": "D"
        }
      ]
    },
    {
      "id": "geo-tr4-sky-bridge-cables",
      "family": "GEO",
      "mode": "sky",
      "title": "Cables on the River Bridge",
      "kind": "Triangles · G.TR.4",
      "blurb": "Two cables from one tower to the bridge deck.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A cable-stayed bridge: tower TP rises 60 meters above the deck at P, perpendicular to it; cables run from T to anchors A and B on the deck, 45 meters and 80 meters from P\"><line class=\"ln\" x1=\"10\" y1=\"114\" x2=\"310\" y2=\"114\"/><line class=\"thin\" x1=\"10\" y1=\"119\" x2=\"310\" y2=\"119\"/><line class=\"ln\" x1=\"278\" y1=\"12\" x2=\"278\" y2=\"119\"/><line class=\"ac\" x1=\"278\" y1=\"12\" x2=\"201.5\" y2=\"114\"/><line class=\"ln\" x1=\"278\" y1=\"12\" x2=\"142\" y2=\"114\"/><path class=\"thin\" d=\"M270 114 L270 106 L278 106\"/><path class=\"thin\" d=\"M172 114 A30 30 0 0 0 166 96\"/><path class=\"thin\" d=\"M16 132 q 6 -4 12 0 q 6 4 12 0 q 6 -4 12 0 q 6 4 12 0 q 6 -4 12 0 q 6 4 12 0 q 6 -4 12 0 q 6 4 12 0\"/><path class=\"thin\" d=\"M30 144 q 6 -4 12 0 q 6 4 12 0 q 6 -4 12 0 q 6 4 12 0 q 6 -4 12 0 q 6 4 12 0 q 6 -4 12 0 q 6 4 12 0\"/><circle class=\"dt\" cx=\"278\" cy=\"12\" r=\"3\"/><circle class=\"dt\" cx=\"278\" cy=\"114\" r=\"3\"/><circle class=\"dt\" cx=\"201.5\" cy=\"114\" r=\"3\"/><circle class=\"dt\" cx=\"142\" cy=\"114\" r=\"3\"/><text x=\"266\" y=\"19\" text-anchor=\"middle\">T</text><text x=\"291\" y=\"110\" text-anchor=\"middle\">P</text><text x=\"199.5\" y=\"108\" text-anchor=\"middle\">A</text><text x=\"130\" y=\"109\" text-anchor=\"middle\">B</text><text x=\"298\" y=\"68\" text-anchor=\"middle\">60 m</text><line class=\"thin\" x1=\"201.5\" y1=\"130\" x2=\"278\" y2=\"130\"/><line class=\"thin\" x1=\"201.5\" y1=\"126\" x2=\"201.5\" y2=\"134\"/><line class=\"thin\" x1=\"278\" y1=\"126\" x2=\"278\" y2=\"134\"/><text class=\"sm\" x=\"239.8\" y=\"144\" text-anchor=\"middle\">45 m</text><line class=\"thin\" x1=\"142\" y1=\"152\" x2=\"278\" y2=\"152\"/><line class=\"thin\" x1=\"142\" y1=\"148\" x2=\"142\" y2=\"156\"/><line class=\"thin\" x1=\"278\" y1=\"148\" x2=\"278\" y2=\"156\"/><text class=\"sm\" x=\"210\" y=\"166\" text-anchor=\"middle\">80 m</text><text class=\"sm\" x=\"56\" y=\"164\" text-anchor=\"middle\">river</text></svg></figure><p class=\"geo-given\">On a cable-stayed bridge, the tower <strong>TP</strong> rises 60 m above the deck at <strong>P</strong> and is perpendicular to the deck. Straight cables run from <strong>T</strong> to anchors <strong>A</strong> and <strong>B</strong> on the deck, 45 m and 80 m from P.</p>",
      "claims": [
        {
          "id": "ta",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How long is cable TA?",
          "choices": [
            {
              "letter": "A",
              "text": "105 m"
            },
            {
              "letter": "B",
              "text": "75 m"
            },
            {
              "letter": "C",
              "text": "about 39.7 m"
            },
            {
              "letter": "D",
              "text": "5,625 m"
            }
          ],
          "correct": "B"
        },
        {
          "id": "angleB",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest degree, what angle does cable TB make with the deck?",
          "choices": [
            {
              "letter": "A",
              "text": "53°"
            },
            {
              "letter": "B",
              "text": "49°"
            },
            {
              "letter": "C",
              "text": "37°"
            },
            {
              "letter": "D",
              "text": "41°"
            }
          ],
          "correct": "C"
        },
        {
          "id": "longer",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "How much longer is cable TB than cable TA?",
          "choices": [
            {
              "letter": "A",
              "text": "35 m"
            },
            {
              "letter": "B",
              "text": "100 m"
            },
            {
              "letter": "C",
              "text": "175 m"
            },
            {
              "letter": "D",
              "text": "25 m"
            }
          ],
          "correct": "D"
        },
        {
          "id": "thirty",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A new cable from T will make a 30° angle with the deck. What is the exact distance from P to its anchor?",
          "choices": [
            {
              "letter": "A",
              "text": "60√3 m"
            },
            {
              "letter": "B",
              "text": "20√3 m"
            },
            {
              "letter": "C",
              "text": "120 m"
            },
            {
              "letter": "D",
              "text": "30√3 m"
            }
          ],
          "correct": "A"
        },
        {
          "id": "cosA",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "What is cos∠TAP?",
          "choices": [
            {
              "letter": "A",
              "text": "4/5"
            },
            {
              "letter": "B",
              "text": "3/4"
            },
            {
              "letter": "C",
              "text": "3/5"
            },
            {
              "letter": "D",
              "text": "4/3"
            }
          ],
          "correct": "C"
        },
        {
          "id": "inspect",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "On another bridge, an inspector measures 33 m up a tower, 56 m along the deck, and 65 m between those two points. Is that tower perpendicular to the deck?",
          "choices": [
            {
              "letter": "A",
              "text": "No, because 33 + 56 is not 65."
            },
            {
              "letter": "B",
              "text": "Yes, because 33² + 56² = 65²."
            },
            {
              "letter": "C",
              "text": "Yes, because 33 + 56 is more than 65."
            },
            {
              "letter": "D",
              "text": "No, because 65² is more than 33² + 56²."
            }
          ],
          "correct": "B"
        }
      ]
    },
    {
      "id": "geo-tr4-sky-delivery-drone",
      "family": "GEO",
      "mode": "sky",
      "title": "The Delivery Drone",
      "kind": "Triangles · G.TR.4",
      "blurb": "A drone looks down at its drop spot.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A drone D hovers 50 meters above point G on level ground; the angle of depression from D to the drop spot X, measured from a horizontal dashed line, is 34 degrees; right angle at G\"><line class=\"ln\" x1=\"10\" y1=\"140\" x2=\"310\" y2=\"140\"/><rect class=\"sh2\" x=\"194.3\" y=\"136\" width=\"28\" height=\"4\"/><line class=\"thin dash\" x1=\"72\" y1=\"40\" x2=\"292\" y2=\"40\"/><line class=\"thin dash\" x1=\"60\" y1=\"40\" x2=\"60\" y2=\"140\"/><line class=\"ac\" x1=\"60\" y1=\"40\" x2=\"208.3\" y2=\"140\"/><rect class=\"sh\" x=\"51\" y=\"35\" width=\"18\" height=\"7\"/><line class=\"thin\" x1=\"42\" y1=\"31\" x2=\"54\" y2=\"31\"/><line class=\"thin\" x1=\"66\" y1=\"31\" x2=\"78\" y2=\"31\"/><line class=\"thin\" x1=\"48\" y1=\"31\" x2=\"52\" y2=\"36\"/><line class=\"thin\" x1=\"72\" y1=\"31\" x2=\"68\" y2=\"36\"/><path class=\"thin\" d=\"M68 140 L68 132 L60 132\"/><path class=\"thin\" d=\"M106 40 A46 46 0 0 1 98.1 65.7\"/><circle class=\"dt\" cx=\"60\" cy=\"40\" r=\"3\"/><circle class=\"dt\" cx=\"60\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"208.3\" cy=\"140\" r=\"3\"/><text x=\"34\" y=\"43\" text-anchor=\"middle\">D</text><text x=\"48\" y=\"157\" text-anchor=\"middle\">G</text><text x=\"210.3\" y=\"161\" text-anchor=\"middle\">X</text><text x=\"36\" y=\"95\" text-anchor=\"middle\">50 m</text><text x=\"121.2\" y=\"63.7\" text-anchor=\"middle\">34°</text><text class=\"sm\" x=\"254.3\" y=\"132\" text-anchor=\"middle\">drop spot</text><text class=\"sm\" x=\"250\" y=\"33\" text-anchor=\"middle\">horizontal</text></svg></figure><p class=\"geo-given\">A delivery drone <strong>D</strong> hovers 50 m above point <strong>G</strong> on level ground. The angle of depression from the drone to the drop spot <strong>X</strong> is 34°.</p>",
      "claims": [
        {
          "id": "gx",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest tenth of a meter, how far is G from the drop spot X?",
          "choices": [
            {
              "letter": "A",
              "text": "74.1 m"
            },
            {
              "letter": "B",
              "text": "33.7 m"
            },
            {
              "letter": "C",
              "text": "89.4 m"
            },
            {
              "letter": "D",
              "text": "60.3 m"
            }
          ],
          "correct": "A"
        },
        {
          "id": "time",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "The drone flies straight from D to X at 5 m per second. To the nearest second, how long does the trip take?",
          "choices": [
            {
              "letter": "A",
              "text": "15 s"
            },
            {
              "letter": "B",
              "text": "18 s"
            },
            {
              "letter": "C",
              "text": "10 s"
            },
            {
              "letter": "D",
              "text": "7 s"
            }
          ],
          "correct": "B"
        },
        {
          "id": "y",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "From D, the angle of depression to another spot Y on the ground, 130 m from G, is θ. To the nearest degree, what is θ?",
          "choices": [
            {
              "letter": "A",
              "text": "69°"
            },
            {
              "letter": "B",
              "text": "23°"
            },
            {
              "letter": "C",
              "text": "67°"
            },
            {
              "letter": "D",
              "text": "21°"
            }
          ],
          "correct": "D"
        },
        {
          "id": "fortyfive",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "Another drone, 50 m up, flies straight down to the ground along a path that makes a 45° angle with the ground. What is the exact length of its path?",
          "choices": [
            {
              "letter": "A",
              "text": "50 m"
            },
            {
              "letter": "B",
              "text": "100 m"
            },
            {
              "letter": "C",
              "text": "50√2 m"
            },
            {
              "letter": "D",
              "text": "25√2 m"
            }
          ],
          "correct": "C"
        },
        {
          "id": "route",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "On a delivery route, a drone flies 48 m east and then 55 m north at a constant height. How far is it from its start, in a straight line?",
          "choices": [
            {
              "letter": "A",
              "text": "103 m"
            },
            {
              "letter": "B",
              "text": "73 m"
            },
            {
              "letter": "C",
              "text": "about 27 m"
            },
            {
              "letter": "D",
              "text": "5,329 m"
            }
          ],
          "correct": "B"
        },
        {
          "id": "expr",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which expression gives DX, the distance from the drone to the drop spot?",
          "choices": [
            {
              "letter": "A",
              "text": "50 / sin 34°"
            },
            {
              "letter": "B",
              "text": "50 · sin 34°"
            },
            {
              "letter": "C",
              "text": "50 / cos 34°"
            },
            {
              "letter": "D",
              "text": "50 · tan 34°"
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-sky-zip-line",
      "family": "GEO",
      "mode": "sky",
      "title": "The Zip Line Ride",
      "kind": "Triangles · G.TR.4",
      "blurb": "From a 26-meter platform down to a 6-meter one.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A zip line runs straight from start platform S, 26 meters above level ground, down to landing platform L, 6 meters above the ground, 48 meters away horizontally; H is level with S directly above L, and theta is the angle of depression from S to L\"><line class=\"ln\" x1=\"10\" y1=\"150\" x2=\"310\" y2=\"150\"/><rect class=\"sh2\" x=\"40\" y=\"40.8\" width=\"16\" height=\"109.2\"/><rect class=\"sh2\" x=\"257.6\" y=\"124.8\" width=\"16\" height=\"25.2\"/><line class=\"thin dash\" x1=\"56\" y1=\"40.8\" x2=\"257.6\" y2=\"40.8\"/><line class=\"thin dash\" x1=\"257.6\" y1=\"40.8\" x2=\"257.6\" y2=\"124.8\"/><line class=\"ac\" x1=\"56\" y1=\"40.8\" x2=\"257.6\" y2=\"124.8\"/><path class=\"thin\" d=\"M250.6 40.8 L250.6 47.8 L257.6 47.8\"/><path class=\"thin\" d=\"M106 40.8 A50 50 0 0 1 102.2 60\"/><circle class=\"dt\" cx=\"56\" cy=\"40.8\" r=\"3\"/><circle class=\"dt\" cx=\"257.6\" cy=\"124.8\" r=\"3\"/><circle class=\"dt\" cx=\"257.6\" cy=\"40.8\" r=\"3\"/><text x=\"48\" y=\"33.8\" text-anchor=\"middle\">S</text><text x=\"283.6\" y=\"126.8\" text-anchor=\"middle\">L</text><text x=\"269.6\" y=\"39.8\" text-anchor=\"middle\">H</text><text x=\"166\" y=\"36.8\" text-anchor=\"middle\">48 m</text><text x=\"20\" y=\"100.4\" text-anchor=\"middle\">26 m</text><text x=\"293.6\" y=\"144.4\" text-anchor=\"middle\">6 m</text><text class=\"acc\" x=\"121.6\" y=\"53.3\" text-anchor=\"middle\">θ</text><text class=\"sm\" x=\"151.4\" y=\"99.7\" text-anchor=\"middle\">zip line</text></svg></figure><p class=\"geo-given\">A zip line runs straight from the start platform <strong>S</strong>, 26 m above level ground, to the landing platform <strong>L</strong>, 6 m above the ground. L is 48 m from S horizontally. <strong>H</strong> is level with S, directly above L, and θ is the angle of depression from S to L.</p>",
      "claims": [
        {
          "id": "length",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How long is the zip line SL?",
          "choices": [
            {
              "letter": "A",
              "text": "about 54.6 m"
            },
            {
              "letter": "B",
              "text": "68 m"
            },
            {
              "letter": "C",
              "text": "about 43.6 m"
            },
            {
              "letter": "D",
              "text": "52 m"
            }
          ],
          "correct": "D"
        },
        {
          "id": "theta",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest degree, what is θ?",
          "choices": [
            {
              "letter": "A",
              "text": "25°"
            },
            {
              "letter": "B",
              "text": "67°"
            },
            {
              "letter": "C",
              "text": "23°"
            },
            {
              "letter": "D",
              "text": "28°"
            }
          ],
          "correct": "C"
        },
        {
          "id": "tan",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "What is tan θ?",
          "choices": [
            {
              "letter": "A",
              "text": "5/12"
            },
            {
              "letter": "B",
              "text": "12/5"
            },
            {
              "letter": "C",
              "text": "5/13"
            },
            {
              "letter": "D",
              "text": "12/13"
            }
          ],
          "correct": "A"
        },
        {
          "id": "practice",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A practice zip line is 14 m long and drops at a 30° angle of depression. What is the exact horizontal distance between its ends?",
          "choices": [
            {
              "letter": "A",
              "text": "7 m"
            },
            {
              "letter": "B",
              "text": "7√3 m"
            },
            {
              "letter": "C",
              "text": "14√3 m"
            },
            {
              "letter": "D",
              "text": "7√2 m"
            }
          ],
          "correct": "B"
        },
        {
          "id": "fifteen",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "The park wants θ to be 15°, with the same platform heights. To the nearest tenth of a meter, how far apart horizontally must the platforms be?",
          "choices": [
            {
              "letter": "A",
              "text": "5.4 m"
            },
            {
              "letter": "B",
              "text": "77.3 m"
            },
            {
              "letter": "C",
              "text": "97.0 m"
            },
            {
              "letter": "D",
              "text": "74.6 m"
            }
          ],
          "correct": "D"
        },
        {
          "id": "brace",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A brace under a platform forms a triangle with sides 1.2 m, 1.6 m and 2.1 m. What kind of angle is opposite the 2.1-m side?",
          "choices": [
            {
              "letter": "A",
              "text": "acute"
            },
            {
              "letter": "B",
              "text": "right"
            },
            {
              "letter": "C",
              "text": "obtuse"
            },
            {
              "letter": "D",
              "text": "cannot tell without measuring an angle"
            }
          ],
          "correct": "C"
        }
      ]
    },
    {
      "id": "geo-tr4-sky-hill-tunnel",
      "family": "GEO",
      "mode": "sky",
      "title": "A Tunnel Under the Hill",
      "kind": "Triangles · G.TR.4",
      "blurb": "Is the tunnel shorter than the road over the top?",
      "level": 3,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"A road climbs straight from A to hilltop T at 25 degrees and descends straight to B at 40 degrees; H on line AB is directly below T, with TH = 120 meters; a straight tunnel runs from A to B\"><polygon class=\"sh2\" points=\"24,132 193.8,52.8 288.2,132\"/><line class=\"ln\" x1=\"10\" y1=\"132\" x2=\"24\" y2=\"132\"/><line class=\"ln\" x1=\"288.2\" y1=\"132\" x2=\"310\" y2=\"132\"/><line class=\"ln\" x1=\"24\" y1=\"132\" x2=\"193.8\" y2=\"52.8\"/><line class=\"ln\" x1=\"193.8\" y1=\"52.8\" x2=\"288.2\" y2=\"132\"/><line class=\"ac dash\" x1=\"24\" y1=\"132\" x2=\"288.2\" y2=\"132\"/><line class=\"thin dash\" x1=\"193.8\" y1=\"52.8\" x2=\"193.8\" y2=\"132\"/><path class=\"thin\" d=\"M200.8 132 L200.8 125 L193.8 125\"/><path class=\"thin\" d=\"M68 132 A44 44 0 0 0 63.9 113.4\"/><path class=\"thin\" d=\"M258.2 132 A30 30 0 0 1 265.3 112.7\"/><circle class=\"dt\" cx=\"24\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"288.2\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"193.8\" cy=\"52.8\" r=\"3\"/><circle class=\"dt\" cx=\"193.8\" cy=\"132\" r=\"3\"/><text x=\"20\" y=\"152\" text-anchor=\"middle\">A</text><text x=\"292.2\" y=\"152\" text-anchor=\"middle\">B</text><text x=\"193.8\" y=\"45.8\" text-anchor=\"middle\">T</text><text x=\"193.8\" y=\"152\" text-anchor=\"middle\">H</text><text x=\"167.8\" y=\"109.4\" text-anchor=\"middle\">120 m</text><text x=\"84.5\" y=\"123.6\" text-anchor=\"middle\">25°</text><text x=\"245\" y=\"121.3\" text-anchor=\"middle\">40°</text><text class=\"sm\" x=\"98.9\" y=\"151\" text-anchor=\"middle\">tunnel</text><text class=\"sm\" x=\"103.9\" y=\"85.5\" text-anchor=\"middle\">road</text></svg></figure><p class=\"geo-given\">A road climbs straight from <strong>A</strong> to the hilltop <strong>T</strong> at a 25° angle with level ground, then descends straight to <strong>B</strong> at a 40° angle. T is 120 m above <strong>H</strong>, the point on line AB directly below T. A tunnel will run straight from A to B.</p>",
      "claims": [
        {
          "id": "ah",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest meter, how far is A from H?",
          "choices": [
            {
              "letter": "A",
              "text": "56 m"
            },
            {
              "letter": "B",
              "text": "284 m"
            },
            {
              "letter": "C",
              "text": "257 m"
            },
            {
              "letter": "D",
              "text": "109 m"
            }
          ],
          "correct": "C"
        },
        {
          "id": "tunnel",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest meter, how long will the tunnel AB be?",
          "choices": [
            {
              "letter": "A",
              "text": "157 m"
            },
            {
              "letter": "B",
              "text": "471 m"
            },
            {
              "letter": "C",
              "text": "257 m"
            },
            {
              "letter": "D",
              "text": "400 m"
            }
          ],
          "correct": "D"
        },
        {
          "id": "shorter",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest meter, how much shorter is the tunnel than the road from A over T to B?",
          "choices": [
            {
              "letter": "A",
              "text": "70 m"
            },
            {
              "letter": "B",
              "text": "27 m"
            },
            {
              "letter": "C",
              "text": "44 m"
            },
            {
              "letter": "D",
              "text": "471 m"
            }
          ],
          "correct": "A"
        },
        {
          "id": "equation",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which equation can be used to find BT, the length of the road down the hill?",
          "choices": [
            {
              "letter": "A",
              "text": "cos 40° = 120/BT"
            },
            {
              "letter": "B",
              "text": "sin 40° = 120/BT"
            },
            {
              "letter": "C",
              "text": "tan 40° = 120/BT"
            },
            {
              "letter": "D",
              "text": "sin 40° = BT/120"
            }
          ],
          "correct": "B"
        },
        {
          "id": "small",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "On a smaller hill, a path rises at 45° to a top 30 m high, then falls at 60° to the ground. What is the exact horizontal distance across the base of the hill?",
          "choices": [
            {
              "letter": "A",
              "text": "(30 + 30√3) m"
            },
            {
              "letter": "B",
              "text": "60 m"
            },
            {
              "letter": "C",
              "text": "(30 + 10√3) m"
            },
            {
              "letter": "D",
              "text": "(30√2 + 20√3) m"
            }
          ],
          "correct": "C"
        },
        {
          "id": "survey",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "Survey stakes near the hill form a triangle with sides 300 m, 400 m and 480 m. Which statement is true?",
          "choices": [
            {
              "letter": "A",
              "text": "It is acute: 480² is less than 300² + 400²."
            },
            {
              "letter": "B",
              "text": "It is right: 300-400-500 is a triple."
            },
            {
              "letter": "C",
              "text": "It is obtuse: 480 is the longest side."
            },
            {
              "letter": "D",
              "text": "It is obtuse: 480² is less than 300² + 400²."
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-sky-ferry-lighthouse",
      "family": "GEO",
      "mode": "sky",
      "title": "The Ferry and the Lighthouse",
      "kind": "Triangles · G.TR.4",
      "blurb": "Angles of elevation from a ferry's deck to the light.",
      "level": 3,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 126\" role=\"img\" aria-label=\"A ferry's deck D is 8 meters above the sea; the light L of a lighthouse is 50 meters above the sea; M on the lighthouse is level with D, so LM is 42 meters; the angle of elevation from D to L is 12 degrees; right angle at M\"><line class=\"ln\" x1=\"10\" y1=\"104\" x2=\"310\" y2=\"104\"/><path class=\"thin\" d=\"M110 112 q 6 -4 12 0 q 6 4 12 0 q 6 -4 12 0 q 6 4 12 0 M180 112 q 6 -4 12 0 q 6 4 12 0 q 6 -4 12 0 q 6 4 12 0\"/><polygon class=\"sh2\" points=\"12,95 68,95 62,104 18,104\"/><rect class=\"sh2\" x=\"22\" y=\"86\" width=\"20\" height=\"9\"/><polygon class=\"sh2\" points=\"276.3,104 290.3,104 287.3,54 279.3,54\"/><rect class=\"sh\" x=\"278.3\" y=\"42\" width=\"10\" height=\"12\"/><line class=\"thin dash\" x1=\"62\" y1=\"95\" x2=\"283.3\" y2=\"95\"/><line class=\"ac\" x1=\"62\" y1=\"95\" x2=\"283.3\" y2=\"48\"/><path class=\"thin\" d=\"M276.3 95 L276.3 88 L283.3 88\"/><path class=\"thin\" d=\"M132 95 A70 70 0 0 0 130.5 80.5\"/><circle class=\"dt\" cx=\"62\" cy=\"95\" r=\"3\"/><circle class=\"dt\" cx=\"283.3\" cy=\"95\" r=\"3\"/><circle class=\"dt\" cx=\"283.3\" cy=\"48\" r=\"3\"/><text x=\"66\" y=\"86\" text-anchor=\"middle\">D</text><text x=\"297.3\" y=\"104\" text-anchor=\"middle\">M</text><text x=\"296.3\" y=\"47\" text-anchor=\"middle\">L</text><text x=\"157.5\" y=\"90\" text-anchor=\"middle\">12°</text><text class=\"sm\" x=\"253.3\" y=\"77.5\" text-anchor=\"middle\">42 m</text><text class=\"sm\" x=\"40\" y=\"122\" text-anchor=\"middle\">ferry</text><text class=\"sm\" x=\"256\" y=\"122\" text-anchor=\"middle\">sea</text></svg></figure><p class=\"geo-given\">A ferry's deck <strong>D</strong> is 8 m above the sea. The light <strong>L</strong> at the top of a lighthouse is 50 m above the sea. <strong>M</strong> is the point on the lighthouse level with D, so LM = 42 m. From D, the angle of elevation to L is 12°.</p>",
      "claims": [
        {
          "id": "dm",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest meter, how far is the ferry from the lighthouse horizontally (DM)?",
          "choices": [
            {
              "letter": "A",
              "text": "235 m"
            },
            {
              "letter": "B",
              "text": "198 m"
            },
            {
              "letter": "C",
              "text": "9 m"
            },
            {
              "letter": "D",
              "text": "202 m"
            }
          ],
          "correct": "B"
        },
        {
          "id": "sail",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "The ferry sails straight toward the lighthouse until the angle of elevation from D to L is 20°. To the nearest meter, how far did it sail?",
          "choices": [
            {
              "letter": "A",
              "text": "82 m"
            },
            {
              "letter": "B",
              "text": "299 m"
            },
            {
              "letter": "C",
              "text": "115 m"
            },
            {
              "letter": "D",
              "text": "98 m"
            }
          ],
          "correct": "A"
        },
        {
          "id": "dl",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest meter, how long is the line of sight DL?",
          "choices": [
            {
              "letter": "A",
              "text": "198 m"
            },
            {
              "letter": "B",
              "text": "43 m"
            },
            {
              "letter": "C",
              "text": "240 m"
            },
            {
              "letter": "D",
              "text": "202 m"
            }
          ],
          "correct": "D"
        },
        {
          "id": "thirty",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "At one moment, the angle of elevation from D to L is 30°. What is the exact horizontal distance from D to the lighthouse then?",
          "choices": [
            {
              "letter": "A",
              "text": "14√3 m"
            },
            {
              "letter": "B",
              "text": "84 m"
            },
            {
              "letter": "C",
              "text": "42√3 m"
            },
            {
              "letter": "D",
              "text": "50√3 m"
            }
          ],
          "correct": "C"
        },
        {
          "id": "buoy",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "The ferry's radar shows a buoy 0.5 km north and 1.2 km east of the ferry. How far is the buoy from the ferry, in a straight line?",
          "choices": [
            {
              "letter": "A",
              "text": "1.7 km"
            },
            {
              "letter": "B",
              "text": "about 1.1 km"
            },
            {
              "letter": "C",
              "text": "0.7 km"
            },
            {
              "letter": "D",
              "text": "1.3 km"
            }
          ],
          "correct": "D"
        },
        {
          "id": "near",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "When the ferry is 160 m from the lighthouse horizontally, what is the angle of elevation from D to L, to the nearest degree?",
          "choices": [
            {
              "letter": "A",
              "text": "17°"
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
              "text": "3°"
            }
          ],
          "correct": "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
