/* SOL Labyrinth — Geometry game (family GEO), v5.20: G.TR.4 (right triangles: the Pythagorean theorem and its
   converse, special right triangles, trigonometric ratios, angles of elevation and depression) for two game modes:
   ring (Wolf Ring — art, design, music and making things) and worms (Root Worms — nature and the outdoors).
   Original items only. Every number was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      "id": "geo-tr4-ring-miter-frame",
      "family": "GEO",
      "mode": "ring",
      "title": "The Mitered Picture Frame",
      "kind": "Triangles · G.TR.4",
      "blurb": "A 45° miter seam joins two 3-inch-wide strips of moulding.",
      "level": 1,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"The top left corner of a picture frame made of moulding 3 inches wide. The miter seam AC runs from the outer corner A to the inner corner C. B is on the outer top edge, and BC is perpendicular to that edge\"><polygon class=\"sh2\" points=\"24,26 300,26 300,86 84,86\"/><polygon class=\"sh2\" points=\"24,26 84,86 84,156 24,156\"/><line class=\"ac\" x1=\"24\" y1=\"26\" x2=\"84\" y2=\"86\"/><line class=\"thin dash\" x1=\"84\" y1=\"26\" x2=\"84\" y2=\"86\"/><path class=\"thin\" d=\"M76 26 L76 34 L84 34\"/><circle class=\"dt\" cx=\"24\" cy=\"26\" r=\"3\"/><circle class=\"dt\" cx=\"84\" cy=\"26\" r=\"3\"/><circle class=\"dt\" cx=\"84\" cy=\"86\" r=\"3\"/><text x=\"13\" y=\"32\" text-anchor=\"middle\">A</text><text x=\"84\" y=\"20\" text-anchor=\"middle\">B</text><text x=\"94\" y=\"102\" text-anchor=\"middle\">C</text><text x=\"106\" y=\"61\" text-anchor=\"middle\">3 in.</text><text class=\"sm\" x=\"200\" y=\"124\" text-anchor=\"middle\">picture</text></svg></figure><p class=\"geo-given\">A picture frame is made of moulding 3 in. wide. At the corner, two pieces meet along the miter seam <strong>AC</strong>, cut at 45°. <strong>B</strong> is on the outer edge, with BC perpendicular to that edge and BC = 3 in.</p>",
      "claims": [
        {
          "id": "seam",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "How long is the miter seam AC?",
          "choices": [
            {
              "letter": "A",
              "text": "3 in."
            },
            {
              "letter": "B",
              "text": "3√2 in."
            },
            {
              "letter": "C",
              "text": "6 in."
            },
            {
              "letter": "D",
              "text": "3√3 in."
            }
          ],
          "correct": "B"
        },
        {
          "id": "wider",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "Another frame has a 45° miter seam that is 8 in. long. How wide is its moulding?",
          "choices": [
            {
              "letter": "A",
              "text": "4√2 in."
            },
            {
              "letter": "B",
              "text": "8√2 in."
            },
            {
              "letter": "C",
              "text": "4 in."
            },
            {
              "letter": "D",
              "text": "4√3 in."
            }
          ],
          "correct": "A"
        },
        {
          "id": "cos",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "In △ABC, what is cos ∠BAC?",
          "choices": [
            {
              "letter": "A",
              "text": "1"
            },
            {
              "letter": "B",
              "text": "√2"
            },
            {
              "letter": "C",
              "text": "√3/2"
            },
            {
              "letter": "D",
              "text": "√2/2"
            }
          ],
          "correct": "D"
        },
        {
          "id": "check",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "To check a frame corner, a framer marks 10 in. along one outer edge and 24 in. along the other. The marks are 25 in. apart. What can the framer conclude about the corner?",
          "choices": [
            {
              "letter": "A",
              "text": "It is more than 90°, because 25² is less than 10² + 24²."
            },
            {
              "letter": "B",
              "text": "It is less than 90°, because 25² is less than 10² + 24²."
            },
            {
              "letter": "C",
              "text": "It is exactly 90°, because 10² + 24² = 25²."
            },
            {
              "letter": "D",
              "text": "It is exactly 90°, because 10, 24 and 25 form a Pythagorean triple."
            }
          ],
          "correct": "B"
        },
        {
          "id": "nottrue",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "Which statement about △ABC is NOT true?",
          "choices": [
            {
              "letter": "A",
              "text": "m∠BCA = 45°"
            },
            {
              "letter": "B",
              "text": "AB = BC"
            },
            {
              "letter": "C",
              "text": "AC = 2·BC"
            },
            {
              "letter": "D",
              "text": "AC = BC·√2"
            }
          ],
          "correct": "C"
        },
        {
          "id": "block",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A frame maker cuts a corner block shaped like a 30°-60°-90° triangle. Its shortest side is 4 in. How long is its longest side?",
          "choices": [
            {
              "letter": "A",
              "text": "8 in."
            },
            {
              "letter": "B",
              "text": "4√3 in."
            },
            {
              "letter": "C",
              "text": "4√2 in."
            },
            {
              "letter": "D",
              "text": "2 in."
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-ring-picture-wire",
      "family": "GEO",
      "mode": "ring",
      "title": "Hanging the Gallery Painting",
      "kind": "Triangles · G.TR.4",
      "blurb": "A wire over one nail, hooked 32 inches apart.",
      "level": 1,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"The back of a framed painting. A wire runs from hook P up to nail N and down to hook Q. M is the midpoint of PQ, 16 inches from each hook, and N is 12 inches directly above M\"><rect class=\"sh2\" x=\"30\" y=\"84\" width=\"260\" height=\"64\"/><line class=\"thin dash\" x1=\"160\" y1=\"32\" x2=\"160\" y2=\"104\"/><path class=\"ac\" d=\"M64 104 L160 32 L256 104\"/><line class=\"thin\" x1=\"64\" y1=\"104\" x2=\"256\" y2=\"104\"/><path class=\"thin\" d=\"M168 104 L168 96 L160 96\"/><line class=\"thin\" x1=\"112\" y1=\"99\" x2=\"112\" y2=\"109\"/><line class=\"thin\" x1=\"208\" y1=\"99\" x2=\"208\" y2=\"109\"/><circle class=\"dt\" cx=\"64\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"256\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"32\" r=\"3\"/><text x=\"160\" y=\"24\" text-anchor=\"middle\">N</text><text x=\"50\" y=\"109\" text-anchor=\"middle\">P</text><text x=\"270\" y=\"109\" text-anchor=\"middle\">Q</text><text x=\"160\" y=\"123\" text-anchor=\"middle\">M</text><text x=\"182\" y=\"80\" text-anchor=\"middle\">12 in.</text><text x=\"112\" y=\"123\" text-anchor=\"middle\">16 in.</text><text x=\"208\" y=\"123\" text-anchor=\"middle\">16 in.</text><text class=\"sm\" x=\"160\" y=\"142\" text-anchor=\"middle\">back of frame</text></svg></figure><p class=\"geo-given\">A painting hangs from a wire. The wire runs from hook <strong>P</strong> up over the nail <strong>N</strong> and down to hook <strong>Q</strong>. The hooks are 32 in. apart. N is directly above <strong>M</strong>, the midpoint of PQ, and NM = 12 in.</p>",
      "claims": [
        {
          "id": "half",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How long is the wire from P to N?",
          "choices": [
            {
              "letter": "A",
              "text": "28 in."
            },
            {
              "letter": "B",
              "text": "about 34.2 in."
            },
            {
              "letter": "C",
              "text": "20 in."
            },
            {
              "letter": "D",
              "text": "about 10.6 in."
            }
          ],
          "correct": "C"
        },
        {
          "id": "equation",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which equation can be used to find m∠NPM?",
          "choices": [
            {
              "letter": "A",
              "text": "sin ∠NPM = 12/16"
            },
            {
              "letter": "B",
              "text": "tan ∠NPM = 16/12"
            },
            {
              "letter": "C",
              "text": "cos ∠NPM = 12/20"
            },
            {
              "letter": "D",
              "text": "tan ∠NPM = 12/16"
            }
          ],
          "correct": "D"
        },
        {
          "id": "angle",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest degree, what angle does the wire PN make with PQ (m∠NPM)?",
          "choices": [
            {
              "letter": "A",
              "text": "37°"
            },
            {
              "letter": "B",
              "text": "53°"
            },
            {
              "letter": "C",
              "text": "49°"
            },
            {
              "letter": "D",
              "text": "41°"
            }
          ],
          "correct": "A"
        },
        {
          "id": "higher",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "Suppose the nail is moved to 15 in. above M, with the hooks still 32 in. apart. How long must the whole wire be, to the nearest tenth of an inch?",
          "choices": [
            {
              "letter": "A",
              "text": "21.9 in."
            },
            {
              "letter": "B",
              "text": "62.0 in."
            },
            {
              "letter": "C",
              "text": "43.9 in."
            },
            {
              "letter": "D",
              "text": "70.7 in."
            }
          ],
          "correct": "C"
        },
        {
          "id": "hooks",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "The 40-in. wire is moved to hooks 24 in. apart, with the nail still directly above their midpoint. How far above that midpoint is the nail?",
          "choices": [
            {
              "letter": "A",
              "text": "8 in."
            },
            {
              "letter": "B",
              "text": "16 in."
            },
            {
              "letter": "C",
              "text": "about 23.3 in."
            },
            {
              "letter": "D",
              "text": "32 in."
            }
          ],
          "correct": "B"
        },
        {
          "id": "triple",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "Which set of numbers is a Pythagorean triple?",
          "choices": [
            {
              "letter": "A",
              "text": "15, 20, 35"
            },
            {
              "letter": "B",
              "text": "4, 5, 6"
            },
            {
              "letter": "C",
              "text": "8, 15, 16"
            },
            {
              "letter": "D",
              "text": "9, 40, 41"
            }
          ],
          "correct": "D"
        }
      ]
    },
    {
      "id": "geo-tr4-ring-piano-lid",
      "family": "GEO",
      "mode": "ring",
      "title": "The Grand Piano Lid",
      "kind": "Triangles · G.TR.4",
      "blurb": "A prop stick holds a piano lid open at 28°.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 158\" role=\"img\" aria-label=\"Side view of a grand piano lid HT hinged at H on the case top, opened 28 degrees. A prop stick PQ stands perpendicular to the case top at P and touches the lid at Q, 50 inches from H\"><rect class=\"sh2\" x=\"18\" y=\"140\" width=\"290\" height=\"16\"/><line class=\"ln\" x1=\"30\" y1=\"140\" x2=\"263.1\" y2=\"16.06\"/><line class=\"ac\" x1=\"206.59\" y1=\"140\" x2=\"206.59\" y2=\"46.11\"/><path class=\"thin\" d=\"M198.59 140 L198.59 132 L206.59 132\"/><path class=\"thin\" d=\"M62 140 A32 32 0 0 0 58.25 124.98\"/><circle class=\"dt\" cx=\"30\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"206.59\" cy=\"46.11\" r=\"3\"/><circle class=\"dt\" cx=\"206.59\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"263.1\" cy=\"16.06\" r=\"3\"/><text x=\"28\" y=\"132\" text-anchor=\"middle\">H</text><text x=\"218.59\" y=\"56.11\" text-anchor=\"middle\">Q</text><text x=\"218.59\" y=\"134\" text-anchor=\"middle\">P</text><text x=\"276.1\" y=\"22.06\" text-anchor=\"middle\">T</text><text x=\"82.91\" y=\"134.6\" text-anchor=\"middle\">28°</text><text x=\"110.29\" y=\"81.05\" text-anchor=\"middle\">50 in.</text><text class=\"sm\" x=\"184.59\" y=\"104\" text-anchor=\"middle\">prop</text><text class=\"sm\" x=\"250\" y=\"153\" text-anchor=\"middle\">case top</text></svg></figure><p class=\"geo-given\">The lid of a grand piano is hinged at <strong>H</strong>. A prop stick <strong>PQ</strong> holds it open: <strong>P</strong> is on the flat case top, <strong>Q</strong> is on the lid, and PQ is perpendicular to the case top. HQ = 50 in., the lid makes a 28° angle with the case top, and the lid's tip <strong>T</strong> is 66 in. from H.</p>",
      "claims": [
        {
          "id": "prop",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "How long is the prop stick PQ, to the nearest tenth of an inch?",
          "choices": [
            {
              "letter": "A",
              "text": "23.5 in."
            },
            {
              "letter": "B",
              "text": "44.1 in."
            },
            {
              "letter": "C",
              "text": "26.6 in."
            },
            {
              "letter": "D",
              "text": "106.5 in."
            }
          ],
          "correct": "A"
        },
        {
          "id": "hp",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which equation gives HP, the distance along the case top from the hinge to the prop?",
          "choices": [
            {
              "letter": "A",
              "text": "HP = 50·sin 28°"
            },
            {
              "letter": "B",
              "text": "HP = 50/cos 28°"
            },
            {
              "letter": "C",
              "text": "HP = 50·cos 28°"
            },
            {
              "letter": "D",
              "text": "HP = 50·tan 28°"
            }
          ],
          "correct": "C"
        },
        {
          "id": "tip",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "How high above the case top is the lid's tip T, to the nearest tenth of an inch?",
          "choices": [
            {
              "letter": "A",
              "text": "58.3 in."
            },
            {
              "letter": "B",
              "text": "31.0 in."
            },
            {
              "letter": "C",
              "text": "35.1 in."
            },
            {
              "letter": "D",
              "text": "23.5 in."
            }
          ],
          "correct": "B"
        },
        {
          "id": "setting",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "On a higher setting, a 32-in. prop stands perpendicular to the case top and touches the lid 50 in. from H. To the nearest degree, what angle does the lid make with the case top?",
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
        },
        {
          "id": "desk",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "The music desk leans back at 72° from the case top, and its slanted edge is 15 in. long. How high does its top edge rise above the case top, to the nearest tenth of an inch?",
          "choices": [
            {
              "letter": "A",
              "text": "4.6 in."
            },
            {
              "letter": "B",
              "text": "46.2 in."
            },
            {
              "letter": "C",
              "text": "14.3 in."
            },
            {
              "letter": "D",
              "text": "15.8 in."
            }
          ],
          "correct": "C"
        },
        {
          "id": "tuner",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "On another piano, a tuner measures HP = 40 in., PQ = 21 in. and HQ = 45 in. Is ∠HPQ a right angle? Choose the answer with the correct reason.",
          "choices": [
            {
              "letter": "A",
              "text": "No, it is acute, because 45² is less than 40² + 21²."
            },
            {
              "letter": "B",
              "text": "Yes, because 45² = 40² + 21²."
            },
            {
              "letter": "C",
              "text": "No, it is obtuse, because 45² is greater than 40² + 21²."
            },
            {
              "letter": "D",
              "text": "Yes, because 40, 21 and 45 form a Pythagorean triple."
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-ring-stage-spotlight",
      "family": "GEO",
      "mode": "ring",
      "title": "The Spotlight on the Truss",
      "kind": "Triangles · G.TR.4",
      "blurb": "A light 22 feet up, aimed at a singer's mark.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"A spotlight S hangs from a lighting truss 22 feet above point G on the stage floor. Its beam SM reaches a mark M on the floor 15 feet from G. A dashed horizontal line runs through S\"><rect class=\"sh2\" x=\"20\" y=\"4\" width=\"280\" height=\"12\"/><line class=\"ln\" x1=\"10\" y1=\"134\" x2=\"310\" y2=\"134\"/><line class=\"thin\" x1=\"90\" y1=\"16\" x2=\"90\" y2=\"24\"/><line class=\"thin dash\" x1=\"90\" y1=\"24\" x2=\"250\" y2=\"24\"/><line class=\"thin dash\" x1=\"90\" y1=\"24\" x2=\"90\" y2=\"134\"/><line class=\"ac\" x1=\"90\" y1=\"24\" x2=\"165\" y2=\"134\"/><path class=\"thin\" d=\"M90 126 L98 126 L98 134\"/><circle class=\"dt\" cx=\"90\" cy=\"24\" r=\"3\"/><circle class=\"dt\" cx=\"90\" cy=\"134\" r=\"3\"/><circle class=\"dt\" cx=\"165\" cy=\"134\" r=\"3\"/><text x=\"77\" y=\"30\" text-anchor=\"middle\">S</text><text x=\"90\" y=\"151\" text-anchor=\"middle\">G</text><text x=\"165\" y=\"151\" text-anchor=\"middle\">M</text><text x=\"66\" y=\"86\" text-anchor=\"middle\">22 ft</text><text x=\"128\" y=\"151\" text-anchor=\"middle\">15 ft</text><text class=\"sm\" x=\"282\" y=\"30\" text-anchor=\"middle\">truss</text><text class=\"sm\" x=\"260\" y=\"150\" text-anchor=\"middle\">stage floor</text></svg></figure><p class=\"geo-given\">A spotlight <strong>S</strong> hangs from a lighting truss, 22 ft directly above point <strong>G</strong> on the level stage floor. It is aimed at a singer's mark <strong>M</strong> on the floor, 15 ft from G. The truss is parallel to the floor.</p>",
      "claims": [
        {
          "id": "beam",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How long is the light beam SM, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "37.0 ft"
            },
            {
              "letter": "B",
              "text": "16.1 ft"
            },
            {
              "letter": "C",
              "text": "709 ft"
            },
            {
              "letter": "D",
              "text": "26.6 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "depression",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To the nearest degree, what is the angle of depression from S to M?",
          "choices": [
            {
              "letter": "A",
              "text": "34°"
            },
            {
              "letter": "B",
              "text": "56°"
            },
            {
              "letter": "C",
              "text": "43°"
            },
            {
              "letter": "D",
              "text": "47°"
            }
          ],
          "correct": "B"
        },
        {
          "id": "same",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "Which statement about the angle of depression from S to M is true?",
          "choices": [
            {
              "letter": "A",
              "text": "It equals m∠SMG, because the truss is parallel to the floor."
            },
            {
              "letter": "B",
              "text": "It equals m∠GSM, because they are vertical angles."
            },
            {
              "letter": "C",
              "text": "It is the complement of m∠SMG, because they form a linear pair."
            },
            {
              "letter": "D",
              "text": "It is 90°, because the beam is perpendicular to the floor."
            }
          ],
          "correct": "A"
        },
        {
          "id": "move",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "The director moves the mark so that the angle of depression from S is 40°. The light stays where it is. How far from G is the new mark, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "18.5 ft"
            },
            {
              "letter": "B",
              "text": "34.2 ft"
            },
            {
              "letter": "C",
              "text": "26.2 ft"
            },
            {
              "letter": "D",
              "text": "16.9 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "ratio",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which ratio is equal to tan ∠GSM?",
          "choices": [
            {
              "letter": "A",
              "text": "22/15"
            },
            {
              "letter": "B",
              "text": "15/22"
            },
            {
              "letter": "C",
              "text": "15/√709"
            },
            {
              "letter": "D",
              "text": "22/√709"
            }
          ],
          "correct": "B"
        },
        {
          "id": "sixty",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "The designer wants the beam to meet the floor at a 60° angle at M, with M still 15 ft from G. How high above G should the light hang? Give the exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "5√3 ft"
            },
            {
              "letter": "B",
              "text": "30 ft"
            },
            {
              "letter": "C",
              "text": "15√2 ft"
            },
            {
              "letter": "D",
              "text": "15√3 ft"
            }
          ],
          "correct": "D"
        }
      ]
    },
    {
      "id": "geo-tr4-ring-model-roof",
      "family": "GEO",
      "mode": "ring",
      "title": "The Model House Roof",
      "kind": "Triangles · G.TR.4",
      "blurb": "A gable roof 40 cm wide and 21 cm tall.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Front of a model house with a gable roof, triangle ABC with AB equal to AC. D is the midpoint of BC, BC is 40 centimeters, and the altitude AD is 21 centimeters\"><rect class=\"sh2\" x=\"80\" y=\"104\" width=\"160\" height=\"36\"/><rect class=\"thin\" x=\"198\" y=\"116\" width=\"18\" height=\"24\"/><rect class=\"thin\" x=\"100\" y=\"114\" width=\"22\" height=\"14\"/><polygon class=\"ln\" points=\"160,20 80,104 240,104\"/><line class=\"thin dash\" x1=\"160\" y1=\"20\" x2=\"160\" y2=\"104\"/><path class=\"thin\" d=\"M168 104 L168 96 L160 96\"/><line class=\"thin\" x1=\"123.62\" y1=\"65.45\" x2=\"116.38\" y2=\"58.55\"/><line class=\"thin\" x1=\"203.62\" y1=\"58.55\" x2=\"196.38\" y2=\"65.45\"/><line class=\"thin\" x1=\"80\" y1=\"148\" x2=\"240\" y2=\"148\"/><line class=\"thin\" x1=\"80\" y1=\"143\" x2=\"80\" y2=\"153\"/><line class=\"thin\" x1=\"240\" y1=\"143\" x2=\"240\" y2=\"153\"/><circle class=\"dt\" cx=\"160\" cy=\"20\" r=\"3\"/><circle class=\"dt\" cx=\"80\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"240\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"104\" r=\"3\"/><text x=\"175\" y=\"24\" text-anchor=\"middle\">A</text><text x=\"68\" y=\"106\" text-anchor=\"middle\">B</text><text x=\"252\" y=\"106\" text-anchor=\"middle\">C</text><text x=\"170\" y=\"119\" text-anchor=\"middle\">D</text><text x=\"154\" y=\"90\" text-anchor=\"end\">21 cm</text><text x=\"160\" y=\"164\" text-anchor=\"middle\">40 cm</text></svg></figure><p class=\"geo-given\">The front of a model house has a gable roof, triangle <strong>ABC</strong>, with AB = AC. <strong>D</strong> is the midpoint of BC, and AD ⊥ BC. BC = 40 cm and AD = 21 cm.</p>",
      "claims": [
        {
          "id": "rafter",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How long is the rafter AB?",
          "choices": [
            {
              "letter": "A",
              "text": "41 cm"
            },
            {
              "letter": "B",
              "text": "about 45.2 cm"
            },
            {
              "letter": "C",
              "text": "about 6.4 cm"
            },
            {
              "letter": "D",
              "text": "29 cm"
            }
          ],
          "correct": "D"
        },
        {
          "id": "pitch",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest degree, what is the roof's pitch angle, m∠ABD?",
          "choices": [
            {
              "letter": "A",
              "text": "46°"
            },
            {
              "letter": "B",
              "text": "44°"
            },
            {
              "letter": "C",
              "text": "87°"
            },
            {
              "letter": "D",
              "text": "134°"
            }
          ],
          "correct": "A"
        },
        {
          "id": "cos",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which ratio is equal to cos ∠ABD?",
          "choices": [
            {
              "letter": "A",
              "text": "21/29"
            },
            {
              "letter": "B",
              "text": "21/20"
            },
            {
              "letter": "C",
              "text": "20/29"
            },
            {
              "letter": "D",
              "text": "29/20"
            }
          ],
          "correct": "C"
        },
        {
          "id": "pitch12",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "Builders write a roof's pitch as its rise for every 12 units of run. A model roof 40 cm wide, like BC, has a pitch of 9 in 12. How tall is its gable, from the peak down to BC?",
          "choices": [
            {
              "letter": "A",
              "text": "15 cm"
            },
            {
              "letter": "B",
              "text": "30 cm"
            },
            {
              "letter": "C",
              "text": "9 cm"
            },
            {
              "letter": "D",
              "text": "about 26.7 cm"
            }
          ],
          "correct": "A"
        },
        {
          "id": "chapel",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A model chapel has rafters that make 60° angles with its flat ceiling, and its roof is 12 cm tall. How long is each rafter? Give the exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "24 cm"
            },
            {
              "letter": "B",
              "text": "8√3 cm"
            },
            {
              "letter": "C",
              "text": "4√3 cm"
            },
            {
              "letter": "D",
              "text": "6√3 cm"
            }
          ],
          "correct": "B"
        },
        {
          "id": "dormer",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A dormer front is cut with sides 9 cm, 12 cm and 14 cm. Which describes this triangle? Choose the answer with the correct reason.",
          "choices": [
            {
              "letter": "A",
              "text": "Obtuse, because 14² is greater than 9² + 12²."
            },
            {
              "letter": "B",
              "text": "Right, because 14² = 9² + 12²."
            },
            {
              "letter": "C",
              "text": "Right, because 9, 12 and 14 form a Pythagorean triple."
            },
            {
              "letter": "D",
              "text": "Acute, because 14² is less than 9² + 12²."
            }
          ],
          "correct": "D"
        }
      ]
    },
    {
      "id": "geo-tr4-ring-stained-glass",
      "family": "GEO",
      "mode": "ring",
      "title": "The Stained-Glass Panel",
      "kind": "Triangles · G.TR.4",
      "blurb": "Lead lines cut a 21-by-8-inch panel into three triangles.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Rectangle ABCD, 21 inches by 8 inches, with lead lines from A and from B to point E on the top side DC. DE is 6 inches and EC is 15 inches. Triangle ABE is shaded\"><polygon class=\"sh2\" points=\"24,138 297,138 102,34\"/><polygon class=\"ln\" points=\"24,138 297,138 297,34 24,34\"/><line class=\"ln\" x1=\"24\" y1=\"138\" x2=\"102\" y2=\"34\"/><line class=\"ln\" x1=\"297\" y1=\"138\" x2=\"102\" y2=\"34\"/><path class=\"thin\" d=\"M24 42 L32 42 L32 34\"/><path class=\"thin\" d=\"M297 42 L289 42 L289 34\"/><circle class=\"dt\" cx=\"24\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"297\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"297\" cy=\"34\" r=\"3\"/><circle class=\"dt\" cx=\"24\" cy=\"34\" r=\"3\"/><circle class=\"dt\" cx=\"102\" cy=\"34\" r=\"3\"/><text x=\"12\" y=\"152\" text-anchor=\"middle\">A</text><text x=\"308\" y=\"152\" text-anchor=\"middle\">B</text><text x=\"308\" y=\"30\" text-anchor=\"middle\">C</text><text x=\"12\" y=\"30\" text-anchor=\"middle\">D</text><text x=\"102\" y=\"26\" text-anchor=\"middle\">E</text><text x=\"61\" y=\"26\" text-anchor=\"middle\">6 in.</text><text x=\"200\" y=\"26\" text-anchor=\"middle\">15 in.</text><text x=\"38\" y=\"95\" text-anchor=\"middle\">8 in.</text><text x=\"160\" y=\"156\" text-anchor=\"middle\">21 in.</text></svg></figure><p class=\"geo-given\">A stained-glass panel is rectangle <strong>ABCD</strong>, 21 in. long and 8 in. tall. Lead lines run from <strong>A</strong> and <strong>B</strong> to point <strong>E</strong> on side DC, with DE = 6 in. and EC = 15 in.</p>",
      "claims": [
        {
          "id": "ae",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How long is the lead line AE?",
          "choices": [
            {
              "letter": "A",
              "text": "14 in."
            },
            {
              "letter": "B",
              "text": "about 5.3 in."
            },
            {
              "letter": "C",
              "text": "10 in."
            },
            {
              "letter": "D",
              "text": "100 in."
            }
          ],
          "correct": "C"
        },
        {
          "id": "be",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "Which equation can be used to find BE?",
          "choices": [
            {
              "letter": "A",
              "text": "BE² = 15² − 8²"
            },
            {
              "letter": "B",
              "text": "BE² = 8² + 15²"
            },
            {
              "letter": "C",
              "text": "BE = 8 + 15"
            },
            {
              "letter": "D",
              "text": "BE² = 8² + 21²"
            }
          ],
          "correct": "B"
        },
        {
          "id": "right",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "Is ∠AEB a right angle? Choose the answer with the correct reason.",
          "choices": [
            {
              "letter": "A",
              "text": "Yes, because AE² + BE² = AB²."
            },
            {
              "letter": "B",
              "text": "No, it is acute, because AB² is less than AE² + BE²."
            },
            {
              "letter": "C",
              "text": "Yes, because △ADE and △BCE are congruent."
            },
            {
              "letter": "D",
              "text": "No, it is obtuse, because AB² is greater than AE² + BE²."
            }
          ],
          "correct": "D"
        },
        {
          "id": "cbe",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest degree, what is m∠CBE?",
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
          "correct": "A"
        },
        {
          "id": "leg45",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "The artist cuts a piece shaped like a 45°-45°-90° triangle with a 10-in. hypotenuse. How long is each leg?",
          "choices": [
            {
              "letter": "A",
              "text": "10√2 in."
            },
            {
              "letter": "B",
              "text": "5√2 in."
            },
            {
              "letter": "C",
              "text": "5 in."
            },
            {
              "letter": "D",
              "text": "5√3 in."
            }
          ],
          "correct": "B"
        },
        {
          "id": "short30",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "Another piece is a 30°-60°-90° triangle whose longer leg is 9 in. How long is its shorter leg?",
          "choices": [
            {
              "letter": "A",
              "text": "9√3 in."
            },
            {
              "letter": "B",
              "text": "4.5 in."
            },
            {
              "letter": "C",
              "text": "3√3 in."
            },
            {
              "letter": "D",
              "text": "18 in."
            }
          ],
          "correct": "C"
        }
      ]
    },
    {
      "id": "geo-tr4-ring-theater-balcony",
      "family": "GEO",
      "mode": "ring",
      "title": "Sight Lines from the Balcony",
      "kind": "Triangles · G.TR.4",
      "blurb": "Two sight lines from one balcony seat down to the stage.",
      "level": 3,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A viewer's eyes E in a theater balcony, 34 feet above point G on the level of the stage floor. Sight lines run from E down to F, the front edge of the stage, and to K, the foot of the back wall. A dashed horizontal line runs through E. The angle of depression from E to K, marked in gold, is 20 degrees, and the angle at F between FG and FE is 31 degrees\"><rect class=\"sh2\" x=\"6\" y=\"34\" width=\"50\" height=\"12\"/><rect class=\"sh2\" x=\"203.12\" y=\"118.4\" width=\"108.88\" height=\"20\"/><line class=\"ln\" x1=\"298.88\" y1=\"118.4\" x2=\"298.88\" y2=\"62.4\"/><line class=\"thin dash\" x1=\"56\" y1=\"118.4\" x2=\"203.12\" y2=\"118.4\"/><line class=\"thin dash\" x1=\"56\" y1=\"30\" x2=\"290\" y2=\"30\"/><line class=\"thin dash\" x1=\"56\" y1=\"30\" x2=\"56\" y2=\"118.4\"/><line class=\"ln\" x1=\"56\" y1=\"30\" x2=\"203.12\" y2=\"118.4\"/><line class=\"ac\" x1=\"56\" y1=\"30\" x2=\"298.88\" y2=\"118.4\"/><path class=\"thin\" d=\"M56 110.4 L64 110.4 L64 118.4\"/><path class=\"ac\" d=\"M99.23 45.73 A46 46 0 0 0 102 30\"/><path class=\"thin\" d=\"M184.26 107.07 A22 22 0 0 0 181.12 118.4\"/><circle class=\"dt\" cx=\"56\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"56\" cy=\"118.4\" r=\"3\"/><circle class=\"dt\" cx=\"203.12\" cy=\"118.4\" r=\"3\"/><circle class=\"dt\" cx=\"298.88\" cy=\"118.4\" r=\"3\"/><text x=\"44\" y=\"26\" text-anchor=\"middle\">E</text><text x=\"44\" y=\"123.4\" text-anchor=\"middle\">G</text><text x=\"211.12\" y=\"110.4\" text-anchor=\"middle\">F</text><text x=\"308.88\" y=\"123.4\" text-anchor=\"middle\">K</text><text class=\"acc\" x=\"125.26\" y=\"44.39\" text-anchor=\"middle\">20°</text><text x=\"164.43\" y=\"113.78\" text-anchor=\"middle\">31°</text><text x=\"50\" y=\"80\" text-anchor=\"end\">34 ft</text><text class=\"sm\" x=\"250\" y=\"133.4\" text-anchor=\"middle\">stage</text><text class=\"sm\" x=\"30\" y=\"58\" text-anchor=\"middle\">balcony</text><text class=\"sm\" x=\"290.88\" y=\"78.4\" text-anchor=\"end\">back wall</text></svg></figure><p class=\"geo-given\">A viewer's eyes <strong>E</strong> in a theater balcony are 34 ft above the level of the stage floor. <strong>G</strong> is the point on that level directly below E. <strong>F</strong>, the front edge of the stage, and <strong>K</strong>, the foot of the back wall, are in line with G. From E, the angle of depression to K is 20°. From F, the angle of elevation to E is 31°.</p>",
      "claims": [
        {
          "id": "gf",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "How far is F from G, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "56.6 ft"
            },
            {
              "letter": "B",
              "text": "20.4 ft"
            },
            {
              "letter": "C",
              "text": "66.0 ft"
            },
            {
              "letter": "D",
              "text": "29.1 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "fk",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "How deep is the stage, from F to K, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "93.4 ft"
            },
            {
              "letter": "B",
              "text": "36.8 ft"
            },
            {
              "letter": "C",
              "text": "174.9 ft"
            },
            {
              "letter": "D",
              "text": "8.1 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "gk",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which equation gives GK?",
          "choices": [
            {
              "letter": "A",
              "text": "GK = 34·tan 20°"
            },
            {
              "letter": "B",
              "text": "GK = 34/sin 20°"
            },
            {
              "letter": "C",
              "text": "GK = 34/tan 20°"
            },
            {
              "letter": "D",
              "text": "GK = 34·cos 20°"
            }
          ],
          "correct": "C"
        },
        {
          "id": "ek",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "How long is the sight line EK, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "36.2 ft"
            },
            {
              "letter": "B",
              "text": "99.4 ft"
            },
            {
              "letter": "C",
              "text": "11.6 ft"
            },
            {
              "letter": "D",
              "text": "93.4 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "lower",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "A seat directly below E has eyes 24 ft above the stage floor level. To the nearest degree, what is the angle of depression from this seat to F?",
          "choices": [
            {
              "letter": "A",
              "text": "67°"
            },
            {
              "letter": "B",
              "text": "25°"
            },
            {
              "letter": "C",
              "text": "10°"
            },
            {
              "letter": "D",
              "text": "23°"
            }
          ],
          "correct": "D"
        },
        {
          "id": "brace",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A brace under the balcony rail forms a triangle with sides 18 in., 24 in. and 31 in. Which describes the triangle? Choose the answer with the correct reason.",
          "choices": [
            {
              "letter": "A",
              "text": "Obtuse, because 31² is greater than 18² + 24²."
            },
            {
              "letter": "B",
              "text": "Acute, because 31² is less than 18² + 24²."
            },
            {
              "letter": "C",
              "text": "Right, because 31² = 18² + 24²."
            },
            {
              "letter": "D",
              "text": "Right, because 18, 24 and 31 form a Pythagorean triple."
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-ring-camera-crane",
      "family": "GEO",
      "mode": "ring",
      "title": "The Camera Crane at the Concert",
      "kind": "Triangles · G.TR.4",
      "blurb": "A 15-foot crane arm films a band from above.",
      "level": 3,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A camera crane: a post PB, 6 feet tall, stands on the floor. The arm PC, 15 feet long, is raised 38 degrees above the dashed horizontal line PH. H is directly below the camera C\"><line class=\"ln\" x1=\"10\" y1=\"146\" x2=\"310\" y2=\"146\"/><line class=\"ln\" x1=\"80\" y1=\"146\" x2=\"80\" y2=\"95\"/><line class=\"thin dash\" x1=\"80\" y1=\"95\" x2=\"210.47\" y2=\"95\"/><line class=\"thin dash\" x1=\"180.47\" y1=\"16.5\" x2=\"180.47\" y2=\"95\"/><line class=\"ac\" x1=\"80\" y1=\"95\" x2=\"180.47\" y2=\"16.5\"/><path class=\"thin\" d=\"M172.47 95 L172.47 87 L180.47 87\"/><path class=\"thin\" d=\"M110 95 A30 30 0 0 0 103.64 76.53\"/><rect class=\"sh\" x=\"182.47\" y=\"9.5\" width=\"16\" height=\"11\"/><circle class=\"dt\" cx=\"80\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"80\" cy=\"95\" r=\"3\"/><circle class=\"dt\" cx=\"180.47\" cy=\"16.5\" r=\"3\"/><circle class=\"dt\" cx=\"180.47\" cy=\"95\" r=\"3\"/><text x=\"80\" y=\"163\" text-anchor=\"middle\">B</text><text x=\"67\" y=\"99\" text-anchor=\"middle\">P</text><text x=\"166.47\" y=\"14.5\" text-anchor=\"middle\">C</text><text x=\"190.47\" y=\"111\" text-anchor=\"middle\">H</text><text x=\"131.9\" y=\"85.97\" text-anchor=\"middle\">38°</text><text x=\"120.24\" y=\"45.75\" text-anchor=\"middle\">15 ft</text><text x=\"72\" y=\"126\" text-anchor=\"end\">6 ft</text><text class=\"sm\" x=\"270\" y=\"141\" text-anchor=\"middle\">floor</text></svg></figure><p class=\"geo-given\">A camera crane films a concert. Its arm <strong>PC</strong> is 15 ft long and pivots at <strong>P</strong>, on top of a post 6 ft above the floor at <strong>B</strong>. PB is perpendicular to the level floor. In the figure, the arm is raised 38° above the horizontal line through P, and <strong>H</strong> on that line is directly below the camera <strong>C</strong>.</p>",
      "claims": [
        {
          "id": "height",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "How high above the floor is the camera C, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "9.2 ft"
            },
            {
              "letter": "B",
              "text": "17.8 ft"
            },
            {
              "letter": "C",
              "text": "21.0 ft"
            },
            {
              "letter": "D",
              "text": "15.2 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "error",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Jay finds PH this way: PH = 15·sin 38° ≈ 9.2 ft. Which statement about his work is correct?",
          "choices": [
            {
              "letter": "A",
              "text": "PH is opposite the 38° angle, so his answer is correct."
            },
            {
              "letter": "B",
              "text": "He should divide: PH = 15/sin 38° ≈ 24.4 ft."
            },
            {
              "letter": "C",
              "text": "PH is adjacent to the 38° angle, so PH = 15·cos 38° ≈ 11.8 ft."
            },
            {
              "letter": "D",
              "text": "He should use tangent: PH = 15·tan 38° ≈ 11.7 ft."
            }
          ],
          "correct": "C"
        },
        {
          "id": "raise",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "To film the drummer, the camera must be 14 ft above the floor. To the nearest degree, how far above the horizontal must the arm be raised?",
          "choices": [
            {
              "letter": "A",
              "text": "28°"
            },
            {
              "letter": "B",
              "text": "32°"
            },
            {
              "letter": "C",
              "text": "58°"
            },
            {
              "letter": "D",
              "text": "69°"
            }
          ],
          "correct": "B"
        },
        {
          "id": "low",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "For a low shot, the arm is lowered to 20° below the horizontal. How high above the floor is the camera then, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "11.1 ft"
            },
            {
              "letter": "B",
              "text": "5.1 ft"
            },
            {
              "letter": "C",
              "text": "0.5 ft"
            },
            {
              "letter": "D",
              "text": "0.9 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "fortyfive",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "When the arm is raised 45° above the horizontal, how high above the pivot P is the camera? Give the exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "15√2/2 ft"
            },
            {
              "letter": "B",
              "text": "15√2 ft"
            },
            {
              "letter": "C",
              "text": "7.5 ft"
            },
            {
              "letter": "D",
              "text": "15√3/2 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "rope",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A counterweight rope runs straight from P to a hook on the floor, 4.5 ft from B. How long is the rope?",
          "choices": [
            {
              "letter": "A",
              "text": "10.5 ft"
            },
            {
              "letter": "B",
              "text": "about 4.0 ft"
            },
            {
              "letter": "C",
              "text": "7.5 ft"
            },
            {
              "letter": "D",
              "text": "56.25 ft"
            }
          ],
          "correct": "C"
        }
      ]
    },
    {
      "id": "geo-tr4-worms-cardinal",
      "family": "GEO",
      "mode": "worms",
      "title": "The Cardinal on the Branch",
      "kind": "Triangles · G.TR.4",
      "blurb": "A camera on the ground, 35 feet from the bird.",
      "level": 1,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A cardinal C sits on a branch 12 feet directly above point T on level ground. A camera at W on the ground is 35 feet from T. The sight line WC is drawn\"><rect class=\"sh2\" x=\"284\" y=\"14\" width=\"14\" height=\"126\"/><line class=\"ln\" x1=\"10\" y1=\"140\" x2=\"310\" y2=\"140\"/><line class=\"ln\" x1=\"284\" y1=\"59\" x2=\"252\" y2=\"59\"/><line class=\"thin dash\" x1=\"275\" y1=\"56\" x2=\"275\" y2=\"140\"/><line class=\"ac\" x1=\"30\" y1=\"140\" x2=\"275\" y2=\"56\"/><path class=\"thin\" d=\"M267 140 L267 132 L275 132\"/><circle class=\"dt\" cx=\"30\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"275\" cy=\"140\" r=\"3\"/><circle class=\"dta\" cx=\"275\" cy=\"56\" r=\"4\"/><text x=\"26\" y=\"157\" text-anchor=\"middle\">W</text><text x=\"275\" y=\"157\" text-anchor=\"middle\">T</text><text x=\"271\" y=\"47\" text-anchor=\"middle\">C</text><text x=\"254\" y=\"112\" text-anchor=\"middle\">12 ft</text><text x=\"150\" y=\"157\" text-anchor=\"middle\">35 ft</text><text class=\"sm\" x=\"66\" y=\"157\" text-anchor=\"middle\">camera</text></svg></figure><p class=\"geo-given\">A cardinal <strong>C</strong> sits on a branch, 12 ft directly above point <strong>T</strong> on level ground. A birder's camera rests on the ground at <strong>W</strong>, 35 ft from T.</p>",
      "claims": [
        {
          "id": "sight",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How far is the camera from the cardinal (the length of WC)?",
          "choices": [
            {
              "letter": "A",
              "text": "47 ft"
            },
            {
              "letter": "B",
              "text": "about 32.9 ft"
            },
            {
              "letter": "C",
              "text": "37 ft"
            },
            {
              "letter": "D",
              "text": "1,369 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "ratio",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which ratio is equal to the tangent of the angle of elevation from W to C?",
          "choices": [
            {
              "letter": "A",
              "text": "12/35"
            },
            {
              "letter": "B",
              "text": "35/12"
            },
            {
              "letter": "C",
              "text": "12/37"
            },
            {
              "letter": "D",
              "text": "35/37"
            }
          ],
          "correct": "A"
        },
        {
          "id": "hop",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "The cardinal hops to a branch 20 ft above T. To the nearest degree, what is the angle of elevation from W to the bird now?",
          "choices": [
            {
              "letter": "A",
              "text": "60°"
            },
            {
              "letter": "B",
              "text": "35°"
            },
            {
              "letter": "C",
              "text": "55°"
            },
            {
              "letter": "D",
              "text": "30°"
            }
          ],
          "correct": "D"
        },
        {
          "id": "worm",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "From C, the cardinal spots a worm on the ground at a 52° angle of depression. How far is the worm from T, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "9.4 ft"
            },
            {
              "letter": "B",
              "text": "15.4 ft"
            },
            {
              "letter": "C",
              "text": "7.4 ft"
            },
            {
              "letter": "D",
              "text": "19.5 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "nest",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "From W, the angle of elevation to a nest directly above T is 45°. How far is it from W straight to the nest? Give the exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "35 ft"
            },
            {
              "letter": "B",
              "text": "35√2 ft"
            },
            {
              "letter": "C",
              "text": "70 ft"
            },
            {
              "letter": "D",
              "text": "35√3 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "hole",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "From W, the angle of elevation to a woodpecker hole directly above T is 30°. How high is the hole above T? Give the exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "35√3 ft"
            },
            {
              "letter": "B",
              "text": "17.5 ft"
            },
            {
              "letter": "C",
              "text": "35√3/3 ft"
            },
            {
              "letter": "D",
              "text": "70√3/3 ft"
            }
          ],
          "correct": "C"
        }
      ]
    },
    {
      "id": "geo-tr4-worms-pup-tent",
      "family": "GEO",
      "mode": "worms",
      "title": "The Pup Tent",
      "kind": "Triangles · G.TR.4",
      "blurb": "Two tent walls meet at a right angle at the peak.",
      "level": 1,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"The front of a pup tent, triangle LPR. The equal walls PL and PR meet at a right angle at the peak P. The tent is staked at L and R on level ground, and M is the midpoint of LR, 4 feet from each stake\"><line class=\"ln\" x1=\"10\" y1=\"142\" x2=\"310\" y2=\"142\"/><polygon class=\"sh2\" points=\"40,142 160,22 280,142\"/><line class=\"thin dash\" x1=\"160\" y1=\"22\" x2=\"160\" y2=\"142\"/><path class=\"thin\" d=\"M154.34 27.66 L160 33.31 L165.66 27.66\"/><path class=\"thin\" d=\"M168 142 L168 134 L160 134\"/><line class=\"thin\" x1=\"103.54\" y1=\"85.54\" x2=\"96.46\" y2=\"78.46\"/><line class=\"thin\" x1=\"223.54\" y1=\"78.46\" x2=\"216.46\" y2=\"85.54\"/><line class=\"thin\" x1=\"40\" y1=\"142\" x2=\"28\" y2=\"154\"/><line class=\"thin\" x1=\"280\" y1=\"142\" x2=\"292\" y2=\"154\"/><circle class=\"dt\" cx=\"40\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"280\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"22\" r=\"3\"/><text x=\"160\" y=\"14\" text-anchor=\"middle\">P</text><text x=\"26\" y=\"138\" text-anchor=\"middle\">L</text><text x=\"294\" y=\"138\" text-anchor=\"middle\">R</text><text x=\"160\" y=\"159\" text-anchor=\"middle\">M</text><text x=\"100\" y=\"159\" text-anchor=\"middle\">4 ft</text><text x=\"220\" y=\"159\" text-anchor=\"middle\">4 ft</text><text class=\"sm\" x=\"24\" y=\"163\" text-anchor=\"middle\">stake</text><text class=\"sm\" x=\"296\" y=\"163\" text-anchor=\"middle\">stake</text></svg></figure><p class=\"geo-given\">The front of a pup tent is triangle <strong>LPR</strong>. The walls PL and PR are equal and meet at a right angle at the peak <strong>P</strong>. The tent is staked at <strong>L</strong> and <strong>R</strong>, 8 ft apart on level ground, and <strong>M</strong> is the midpoint of LR.</p>",
      "claims": [
        {
          "id": "wall",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "How long is each wall, such as PL? Give the exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "8√2 ft"
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
              "text": "2√2 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "nottrue",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "Which statement about the tent is NOT true?",
          "choices": [
            {
              "letter": "A",
              "text": "m∠PLM = 45°"
            },
            {
              "letter": "B",
              "text": "PM = LM"
            },
            {
              "letter": "C",
              "text": "LR = PL·√2"
            },
            {
              "letter": "D",
              "text": "PL = 2·PM"
            }
          ],
          "correct": "D"
        },
        {
          "id": "sixty",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A larger tent's walls each make a 60° angle with the ground, and each wall is 7 ft long. How tall is that tent? Give the exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "3.5 ft"
            },
            {
              "letter": "B",
              "text": "7√3 ft"
            },
            {
              "letter": "C",
              "text": "7√3/2 ft"
            },
            {
              "letter": "D",
              "text": "7√2/2 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "tarp",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A lean-to tarp runs straight from the top of a 3-ft pole down to the ground and makes a 30° angle with the ground. How long is the tarp?",
          "choices": [
            {
              "letter": "A",
              "text": "3√3 ft"
            },
            {
              "letter": "B",
              "text": "6 ft"
            },
            {
              "letter": "C",
              "text": "3√2 ft"
            },
            {
              "letter": "D",
              "text": "1.5 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "sin",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "In △PLM, what is sin ∠PLM?",
          "choices": [
            {
              "letter": "A",
              "text": "√2/2"
            },
            {
              "letter": "B",
              "text": "√3/2"
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
          "correct": "A"
        },
        {
          "id": "floor",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "A dome tent's floor is a rectangle 7 ft by 9 ft. How long is its diagonal, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "16.0 ft"
            },
            {
              "letter": "B",
              "text": "5.7 ft"
            },
            {
              "letter": "C",
              "text": "130 ft"
            },
            {
              "letter": "D",
              "text": "11.4 ft"
            }
          ],
          "correct": "D"
        }
      ]
    },
    {
      "id": "geo-tr4-worms-river-width",
      "family": "GEO",
      "mode": "worms",
      "title": "Across the River",
      "kind": "Triangles · G.TR.4",
      "blurb": "Measuring a river's width without getting wet.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Top view of a river with parallel banks. A and B are on the near bank, 40 meters apart. Tree T on the far bank is directly across from A, so AT is perpendicular to the banks. The angle at B between BA and BT is 58 degrees\"><line class=\"ln\" x1=\"10\" y1=\"18.37\" x2=\"310\" y2=\"18.37\"/><line class=\"ln\" x1=\"10\" y1=\"140\" x2=\"310\" y2=\"140\"/><path class=\"thin\" d=\"M180 56 q5 -4 10 0 t10 0 t10 0\"/><path class=\"thin\" d=\"M250 70 q5 -4 10 0 t10 0 t10 0\"/><path class=\"thin\" d=\"M170 112 q5 -4 10 0 t10 0 t10 0\"/><path class=\"thin\" d=\"M270 118 q5 -4 10 0 t10 0 t10 0\"/><line class=\"ac\" x1=\"60\" y1=\"140\" x2=\"60\" y2=\"18.37\"/><line class=\"ln\" x1=\"136\" y1=\"140\" x2=\"60\" y2=\"18.37\"/><path class=\"thin\" d=\"M68 140 L68 132 L60 132\"/><path class=\"thin\" d=\"M124.34 121.34 A22 22 0 0 0 114 140\"/><circle class=\"sh\" cx=\"60\" cy=\"9.37\" r=\"7\"/><circle class=\"dt\" cx=\"60\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"136\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"60\" cy=\"18.37\" r=\"3\"/><text x=\"60\" y=\"157\" text-anchor=\"middle\">A</text><text x=\"136\" y=\"157\" text-anchor=\"middle\">B</text><text x=\"44\" y=\"12.37\" text-anchor=\"middle\">T</text><text x=\"95.02\" y=\"124.61\" text-anchor=\"middle\">58°</text><text x=\"98\" y=\"157\" text-anchor=\"middle\">40 m</text><text class=\"sm\" x=\"232\" y=\"94\" text-anchor=\"middle\">river</text><text class=\"sm\" x=\"250\" y=\"13.37\" text-anchor=\"middle\">far bank</text><text class=\"sm\" x=\"250\" y=\"155\" text-anchor=\"middle\">near bank</text></svg></figure><p class=\"geo-given\">The banks of a river are parallel. <strong>A</strong> and <strong>B</strong> are on the near bank, 40 m apart. A tree <strong>T</strong> on the far bank is directly across from A, so AT is perpendicular to the banks. From B, the sight line to T makes a 58° angle with the bank (m∠ABT = 58°).</p>",
      "claims": [
        {
          "id": "width",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "How wide is the river (AT), to the nearest tenth of a meter?",
          "choices": [
            {
              "letter": "A",
              "text": "25.0 m"
            },
            {
              "letter": "B",
              "text": "64.0 m"
            },
            {
              "letter": "C",
              "text": "33.9 m"
            },
            {
              "letter": "D",
              "text": "21.2 m"
            }
          ],
          "correct": "B"
        },
        {
          "id": "bt",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which expression gives BT?",
          "choices": [
            {
              "letter": "A",
              "text": "40/cos 58°"
            },
            {
              "letter": "B",
              "text": "40·cos 58°"
            },
            {
              "letter": "C",
              "text": "40/sin 58°"
            },
            {
              "letter": "D",
              "text": "40·tan 58°"
            }
          ],
          "correct": "A"
        },
        {
          "id": "upstream",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "Upstream, the river is 50 m wide. A hiker stands on the near bank, 30 m from the point directly across from a rock on the far bank. To the nearest degree, what angle does her sight line to the rock make with the bank?",
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
              "text": "59°"
            },
            {
              "letter": "D",
              "text": "37°"
            }
          ],
          "correct": "C"
        },
        {
          "id": "kayak",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "At a fishing spot the river is 45 m wide. A kayaker aims straight across, but the current carries her 28 m downstream. How far does she travel in a straight line?",
          "choices": [
            {
              "letter": "A",
              "text": "73 m"
            },
            {
              "letter": "B",
              "text": "about 35.2 m"
            },
            {
              "letter": "C",
              "text": "17 m"
            },
            {
              "letter": "D",
              "text": "53 m"
            }
          ],
          "correct": "D"
        },
        {
          "id": "true",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which statement about △ABT is true?",
          "choices": [
            {
              "letter": "A",
              "text": "tan B = AT/AB"
            },
            {
              "letter": "B",
              "text": "sin B = AT/AB"
            },
            {
              "letter": "C",
              "text": "cos B = AB/AT"
            },
            {
              "letter": "D",
              "text": "tan T = AT/AB"
            }
          ],
          "correct": "A"
        },
        {
          "id": "walk",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "The team walks 40 m farther along the bank from B, to C, so AC = 80 m. To the nearest degree, what is m∠ACT?",
          "choices": [
            {
              "letter": "A",
              "text": "29°"
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
              "text": "53°"
            }
          ],
          "correct": "B"
        }
      ]
    },
    {
      "id": "geo-tr4-worms-trail-grade",
      "family": "GEO",
      "mode": "worms",
      "title": "The Ridge Trail",
      "kind": "Triangles · G.TR.4",
      "blurb": "A 20% grade, then 800 feet at 17°.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"Side view of a trail from A to B to C. Section AB rises 240 feet over a horizontal run of 1,200 feet. Section BC is 800 feet long and climbs at 17 degrees above the horizontal\"><polygon class=\"sh2\" points=\"16,142 190,107.2 300.93,73.28 300.93,142\"/><line class=\"ln\" x1=\"8\" y1=\"142\" x2=\"312\" y2=\"142\"/><line class=\"thin dash\" x1=\"190\" y1=\"107.2\" x2=\"190\" y2=\"142\"/><line class=\"thin dash\" x1=\"190\" y1=\"107.2\" x2=\"308.93\" y2=\"107.2\"/><line class=\"thin dash\" x1=\"300.93\" y1=\"73.28\" x2=\"300.93\" y2=\"107.2\"/><path class=\"ac\" d=\"M16 142 L190 107.2 L300.93 73.28\"/><path class=\"thin\" d=\"M182 142 L182 134 L190 134\"/><path class=\"thin\" d=\"M292.93 107.2 L292.93 99.2 L300.93 99.2\"/><path class=\"thin\" d=\"M240 107.2 A50 50 0 0 0 237.82 92.58\"/><circle class=\"dt\" cx=\"16\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"190\" cy=\"107.2\" r=\"3\"/><circle class=\"dt\" cx=\"300.93\" cy=\"73.28\" r=\"3\"/><text x=\"18\" y=\"134\" text-anchor=\"middle\">A</text><text x=\"180\" y=\"99.2\" text-anchor=\"middle\">B</text><text x=\"296.93\" y=\"64.28\" text-anchor=\"middle\">C</text><text x=\"98\" y=\"158\" text-anchor=\"middle\">1,200 ft</text><text x=\"156\" y=\"134\" text-anchor=\"middle\">240 ft</text><text x=\"236\" y=\"76\" text-anchor=\"middle\">800 ft</text><text x=\"265.3\" y=\"103.18\" text-anchor=\"middle\">17°</text><text class=\"sm\" x=\"70\" y=\"40\" text-anchor=\"middle\">side view of the trail</text></svg></figure><p class=\"geo-given\">This is a side view of a trail. From the trailhead <strong>A</strong>, section <strong>AB</strong> rises 240 ft over a horizontal run of 1,200 ft. Section <strong>BC</strong> is 800 ft long, measured along the trail, and climbs at a 17° angle with the horizontal to <strong>C</strong>.</p>",
      "claims": [
        {
          "id": "grade",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "A trail's grade is its rise divided by its horizontal run, written as a percent. What is the grade of AB?",
          "choices": [
            {
              "letter": "A",
              "text": "about 19.6%"
            },
            {
              "letter": "B",
              "text": "500%"
            },
            {
              "letter": "C",
              "text": "20%"
            },
            {
              "letter": "D",
              "text": "0.2%"
            }
          ],
          "correct": "C"
        },
        {
          "id": "angle",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest degree, what angle does AB make with the horizontal?",
          "choices": [
            {
              "letter": "A",
              "text": "79°"
            },
            {
              "letter": "B",
              "text": "20°"
            },
            {
              "letter": "C",
              "text": "0.2°"
            },
            {
              "letter": "D",
              "text": "11°"
            }
          ],
          "correct": "D"
        },
        {
          "id": "rise",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "How many feet does section BC rise, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "765.0 ft"
            },
            {
              "letter": "B",
              "text": "233.9 ft"
            },
            {
              "letter": "C",
              "text": "244.6 ft"
            },
            {
              "letter": "D",
              "text": "2,736.2 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "total",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "What is the total rise from A to C, to the nearest foot?",
          "choices": [
            {
              "letter": "A",
              "text": "234 ft"
            },
            {
              "letter": "B",
              "text": "1,005 ft"
            },
            {
              "letter": "C",
              "text": "474 ft"
            },
            {
              "letter": "D",
              "text": "485 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "length",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How long is section AB, measured along the trail, to the nearest foot?",
          "choices": [
            {
              "letter": "A",
              "text": "1,224 ft"
            },
            {
              "letter": "B",
              "text": "1,440 ft"
            },
            {
              "letter": "C",
              "text": "1,176 ft"
            },
            {
              "letter": "D",
              "text": "1,200 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "steep",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "A trail guide calls a section steep if its grade is more than 30%. Is BC steep? Choose the answer with the correct reason.",
          "choices": [
            {
              "letter": "A",
              "text": "No, because its grade is sin 17° ≈ 29.2%."
            },
            {
              "letter": "B",
              "text": "No, because its grade is 17%, the same as its angle."
            },
            {
              "letter": "C",
              "text": "Yes, because its grade is cos 17° ≈ 95.6%."
            },
            {
              "letter": "D",
              "text": "Yes, because its grade is tan 17° ≈ 30.6%."
            }
          ],
          "correct": "D"
        }
      ]
    },
    {
      "id": "geo-tr4-worms-hill-slope",
      "family": "GEO",
      "mode": "worms",
      "title": "Planting on the Hillside",
      "kind": "Triangles · G.TR.4",
      "blurb": "A level board and a plumb line measure a slope.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A hillside rising to the right. A level board PQ, 5 feet long, sticks out from point P on the slope. A plumb line hangs 2 feet straight down from Q to point R on the slope\"><polygon class=\"sh2\" points=\"10,155.6 310,35.6 310,150 10,150\"/><line class=\"ln\" x1=\"244\" y1=\"62\" x2=\"94\" y2=\"62\"/><line class=\"ac\" x1=\"94\" y1=\"62\" x2=\"94\" y2=\"122\"/><path class=\"thin\" d=\"M102 62 L102 70 L94 70\"/><circle class=\"dt\" cx=\"244\" cy=\"62\" r=\"3\"/><circle class=\"dt\" cx=\"94\" cy=\"62\" r=\"3\"/><circle class=\"dt\" cx=\"94\" cy=\"122\" r=\"3\"/><text x=\"248\" y=\"54\" text-anchor=\"middle\">P</text><text x=\"82\" y=\"58\" text-anchor=\"middle\">Q</text><text x=\"81\" y=\"119\" text-anchor=\"middle\">R</text><text x=\"169\" y=\"54\" text-anchor=\"middle\">5 ft</text><text x=\"112\" y=\"98\" text-anchor=\"middle\">2 ft</text><text class=\"sm\" x=\"115\" y=\"34\" text-anchor=\"middle\">level board</text><text class=\"sm\" x=\"220\" y=\"128\" text-anchor=\"middle\">hillside</text></svg></figure><p class=\"geo-given\">To measure a hillside's slope, a gardener holds a level board <strong>PQ</strong>, 5 ft long, out from point <strong>P</strong> on the slope. A plumb line hangs straight down from <strong>Q</strong> and touches the slope at <strong>R</strong>, 2 ft below Q.</p>",
      "claims": [
        {
          "id": "slope",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "To the nearest degree, what angle does the hillside make with the horizontal (m∠QPR)?",
          "choices": [
            {
              "letter": "A",
              "text": "22°"
            },
            {
              "letter": "B",
              "text": "68°"
            },
            {
              "letter": "C",
              "text": "24°"
            },
            {
              "letter": "D",
              "text": "66°"
            }
          ],
          "correct": "A"
        },
        {
          "id": "pr",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "How long is PR, measured along the slope, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "7.0 ft"
            },
            {
              "letter": "B",
              "text": "4.6 ft"
            },
            {
              "letter": "C",
              "text": "5.4 ft"
            },
            {
              "letter": "D",
              "text": "29.0 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "rows",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "On a hillside that slopes at 22°, bean rows are planted 3 ft apart, measured along the slope. How far apart are they horizontally, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "1.1 ft"
            },
            {
              "letter": "B",
              "text": "3.2 ft"
            },
            {
              "letter": "C",
              "text": "7.4 ft"
            },
            {
              "letter": "D",
              "text": "2.8 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "terrace",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "A gardener builds a level terrace 6 ft wide (measured horizontally) on a 22° slope. Its uphill edge meets the slope, and a wall holds up its downhill edge. How tall is the wall, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "2.2 ft"
            },
            {
              "letter": "B",
              "text": "5.6 ft"
            },
            {
              "letter": "C",
              "text": "2.4 ft"
            },
            {
              "letter": "D",
              "text": "14.9 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "thirty",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "A steep patch of the hill slopes at 30°. A path climbs 40 ft along this slope. How far does it go horizontally? Give the exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "20 ft"
            },
            {
              "letter": "B",
              "text": "20√3 ft"
            },
            {
              "letter": "C",
              "text": "40√3 ft"
            },
            {
              "letter": "D",
              "text": "20√2 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "error",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "Mia lays out a string triangle with sides 15 ft, 20 ft and 24 ft for a garden bed. She says: \"15² + 20² = 625 and 24² = 576. These are close, so the corner between the 15-ft and 20-ft sides is a right angle.\" Which statement is correct?",
          "choices": [
            {
              "letter": "A",
              "text": "She is wrong: 24² is less than 15² + 20², so the corner is acute."
            },
            {
              "letter": "B",
              "text": "She is wrong: 24² is less than 15² + 20², so the corner is obtuse."
            },
            {
              "letter": "C",
              "text": "She is right: a difference of 49 is small enough to call it 90°."
            },
            {
              "letter": "D",
              "text": "She is wrong: she should compare 15 + 20 with 24, so the corner is obtuse."
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-worms-sycamore",
      "family": "GEO",
      "mode": "worms",
      "title": "Measuring the Sycamore",
      "kind": "Triangles · G.TR.4",
      "blurb": "Eyes 5 feet up, 38 feet from the trunk, 51° to the top.",
      "level": 2,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Ava's eyes E are 5 feet above level ground and 38 feet from the trunk of a sycamore. F is on the trunk level with her eyes, and T is the top of the tree directly above F. The angle of elevation from E to T is 51 degrees\"><line class=\"ln\" x1=\"10\" y1=\"146\" x2=\"310\" y2=\"146\"/><rect class=\"sh2\" x=\"161\" y=\"56.18\" width=\"8\" height=\"89.82\"/><circle class=\"sh\" cx=\"165\" cy=\"46.18\" r=\"30\"/><line class=\"ln\" x1=\"70\" y1=\"146\" x2=\"70\" y2=\"133.5\"/><line class=\"thin dash\" x1=\"70\" y1=\"133.5\" x2=\"165\" y2=\"133.5\"/><line class=\"thin dash\" x1=\"165\" y1=\"133.5\" x2=\"165\" y2=\"16.18\"/><line class=\"ac\" x1=\"70\" y1=\"133.5\" x2=\"165\" y2=\"16.18\"/><path class=\"thin\" d=\"M157 133.5 L157 125.5 L165 125.5\"/><path class=\"thin\" d=\"M98 133.5 A28 28 0 0 0 87.62 111.74\"/><circle class=\"dt\" cx=\"70\" cy=\"133.5\" r=\"3\"/><circle class=\"dt\" cx=\"165\" cy=\"133.5\" r=\"3\"/><circle class=\"dt\" cx=\"165\" cy=\"16.18\" r=\"3\"/><text x=\"58\" y=\"130.5\" text-anchor=\"middle\">E</text><text x=\"179\" y=\"138.5\" text-anchor=\"middle\">F</text><text x=\"180\" y=\"18.18\" text-anchor=\"middle\">T</text><text x=\"116.2\" y=\"120.6\" text-anchor=\"middle\">51°</text><text class=\"sm\" x=\"64\" y=\"145\" text-anchor=\"end\">5 ft</text><text x=\"118\" y=\"161\" text-anchor=\"middle\">38 ft</text><text class=\"sm\" x=\"262\" y=\"140\" text-anchor=\"middle\">level ground</text></svg></figure><p class=\"geo-given\">Ava's eyes <strong>E</strong> are 5 ft above level ground, 38 ft from the trunk of a sycamore. <strong>F</strong> is the point on the trunk level with her eyes, and <strong>T</strong> is the top of the tree, directly above F. The angle of elevation from E to T is 51°.</p>",
      "claims": [
        {
          "id": "height",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "How tall is the tree, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "46.9 ft"
            },
            {
              "letter": "B",
              "text": "34.5 ft"
            },
            {
              "letter": "C",
              "text": "35.8 ft"
            },
            {
              "letter": "D",
              "text": "51.9 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "eq",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which equation can be used to find FT?",
          "choices": [
            {
              "letter": "A",
              "text": "sin 51° = FT/38"
            },
            {
              "letter": "B",
              "text": "tan 51° = FT/38"
            },
            {
              "letter": "C",
              "text": "tan 51° = 38/FT"
            },
            {
              "letter": "D",
              "text": "cos 51° = FT/38"
            }
          ],
          "correct": "B"
        },
        {
          "id": "trick",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "Foresters use a trick: stand where the angle of elevation to the treetop is 45°. Then the tree's height above eye level equals the distance to the trunk. Why does this work?",
          "choices": [
            {
              "letter": "A",
              "text": "The hypotenuse of a 45°-45°-90° triangle is twice each leg."
            },
            {
              "letter": "B",
              "text": "Because sin 45° = 1, the height equals the sight line."
            },
            {
              "letter": "C",
              "text": "The two legs of a 45°-45°-90° triangle are equal."
            },
            {
              "letter": "D",
              "text": "Every right triangle has two equal legs."
            }
          ],
          "correct": "C"
        },
        {
          "id": "pine",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "For a white pine, the angle of elevation from Ava's eyes to the top is 30°, and she stands 45 ft from the trunk. How far above her eyes is the top? Give the exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "15√3 ft"
            },
            {
              "letter": "B",
              "text": "45√3 ft"
            },
            {
              "letter": "C",
              "text": "22.5 ft"
            },
            {
              "letter": "D",
              "text": "45√3/2 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "sight",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "How long is the line of sight ET, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "48.9 ft"
            },
            {
              "letter": "B",
              "text": "23.9 ft"
            },
            {
              "letter": "C",
              "text": "46.9 ft"
            },
            {
              "letter": "D",
              "text": "60.4 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "back",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "Ava steps back so she is 60 ft from the trunk, with her eyes still 5 ft up. To the nearest degree, what is the angle of elevation to T now?",
          "choices": [
            {
              "letter": "A",
              "text": "32°"
            },
            {
              "letter": "B",
              "text": "38°"
            },
            {
              "letter": "C",
              "text": "52°"
            },
            {
              "letter": "D",
              "text": "41°"
            }
          ],
          "correct": "B"
        }
      ]
    },
    {
      "id": "geo-tr4-worms-waterfall",
      "family": "GEO",
      "mode": "worms",
      "title": "The Waterfall from the Lookout",
      "kind": "Triangles · G.TR.4",
      "blurb": "One lookout: an angle up to the top, an angle down to the pool.",
      "level": 3,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A lookout L on a cliff faces a waterfall TB, 85 meters away horizontally. A dashed level line runs from L to H on the falls. The angle of elevation from L to the top T is 14 degrees, marked above the level line. The angle of depression from L to the base B is 33 degrees, marked below the level line\"><polygon class=\"sh2\" points=\"8,54.85 76,54.85 76,160 8,160\"/><rect class=\"sh2\" x=\"201.75\" y=\"22\" width=\"110.25\" height=\"138\"/><rect class=\"sh2\" x=\"76\" y=\"140.41\" width=\"125.75\" height=\"19.59\"/><line class=\"thin dash\" x1=\"70\" y1=\"54.85\" x2=\"201.75\" y2=\"54.85\"/><line class=\"ac\" x1=\"201.75\" y1=\"22\" x2=\"201.75\" y2=\"140.41\"/><line class=\"ln\" x1=\"70\" y1=\"54.85\" x2=\"201.75\" y2=\"22\"/><line class=\"ln\" x1=\"70\" y1=\"54.85\" x2=\"201.75\" y2=\"140.41\"/><path class=\"thin\" d=\"M193.75 54.85 L193.75 46.85 L201.75 46.85\"/><path class=\"thin\" d=\"M116 54.85 A46 46 0 0 0 114.63 43.72\"/><path class=\"thin\" d=\"M95.16 71.19 A30 30 0 0 0 100 54.85\"/><circle class=\"dt\" cx=\"70\" cy=\"54.85\" r=\"3\"/><circle class=\"dt\" cx=\"201.75\" cy=\"54.85\" r=\"3\"/><circle class=\"dt\" cx=\"201.75\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"201.75\" cy=\"140.41\" r=\"3\"/><text x=\"58\" y=\"50.85\" text-anchor=\"middle\">L</text><text x=\"213.75\" y=\"59.85\" text-anchor=\"middle\">H</text><text x=\"189.75\" y=\"18\" text-anchor=\"middle\">T</text><text x=\"189.75\" y=\"154.41\" text-anchor=\"middle\">B</text><text x=\"149.4\" y=\"50.1\" text-anchor=\"middle\">14°</text><text x=\"112.3\" y=\"71.98\" text-anchor=\"middle\">33°</text><text x=\"152\" y=\"72.85\" text-anchor=\"middle\">85 m</text><text class=\"sm\" x=\"262\" y=\"100\" text-anchor=\"middle\">falls</text><text class=\"sm\" x=\"140\" y=\"154\" text-anchor=\"middle\">pool</text></svg></figure><p class=\"geo-given\">A lookout <strong>L</strong> on a cliff faces a waterfall 85 m away, measured horizontally. <strong>H</strong> is the point on the falls level with L. From L, the angle of elevation to the top of the falls, <strong>T</strong>, is 14°, and the angle of depression to its base, <strong>B</strong>, at the pool is 33°. TB is vertical.</p>",
      "claims": [
        {
          "id": "hb",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "How high is the lookout above the pool (HB), to the nearest tenth of a meter?",
          "choices": [
            {
              "letter": "A",
              "text": "55.2 m"
            },
            {
              "letter": "B",
              "text": "46.3 m"
            },
            {
              "letter": "C",
              "text": "130.9 m"
            },
            {
              "letter": "D",
              "text": "71.3 m"
            }
          ],
          "correct": "A"
        },
        {
          "id": "th",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "Which equation gives TH?",
          "choices": [
            {
              "letter": "A",
              "text": "TH = 85·sin 14°"
            },
            {
              "letter": "B",
              "text": "TH = 85/tan 14°"
            },
            {
              "letter": "C",
              "text": "TH = 85·cos 14°"
            },
            {
              "letter": "D",
              "text": "TH = 85·tan 14°"
            }
          ],
          "correct": "D"
        },
        {
          "id": "tb",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "How tall is the waterfall (TB), to the nearest tenth of a meter?",
          "choices": [
            {
              "letter": "A",
              "text": "91.2 m"
            },
            {
              "letter": "B",
              "text": "76.4 m"
            },
            {
              "letter": "C",
              "text": "34.0 m"
            },
            {
              "letter": "D",
              "text": "55.2 m"
            }
          ],
          "correct": "B"
        },
        {
          "id": "pool",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "Which statement about the angle of elevation from B up to L is true?",
          "choices": [
            {
              "letter": "A",
              "text": "It is 57°, because it is the complement of the 33° angle at L."
            },
            {
              "letter": "B",
              "text": "It is 14°, because it matches the angle above the level line through L."
            },
            {
              "letter": "C",
              "text": "It is 47°, because it is the sum of the two angles marked at L."
            },
            {
              "letter": "D",
              "text": "It is 33°, because the level line through L is parallel to the pool."
            }
          ],
          "correct": "D"
        },
        {
          "id": "lt",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "How long is the sight line from L to the top of the falls, to the nearest tenth of a meter?",
          "choices": [
            {
              "letter": "A",
              "text": "82.5 m"
            },
            {
              "letter": "B",
              "text": "351.4 m"
            },
            {
              "letter": "C",
              "text": "87.6 m"
            },
            {
              "letter": "D",
              "text": "106.2 m"
            }
          ],
          "correct": "C"
        },
        {
          "id": "smaller",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "Downstream, a smaller waterfall is seen from a ledge level with its top, 30 m away horizontally. The angle of depression from the ledge to the base of these falls is 60°. How tall are they? Give the exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "30√3 m"
            },
            {
              "letter": "B",
              "text": "10√3 m"
            },
            {
              "letter": "C",
              "text": "60 m"
            },
            {
              "letter": "D",
              "text": "15√3 m"
            }
          ],
          "correct": "A"
        }
      ]
    },
    {
      "id": "geo-tr4-worms-fishing-rod",
      "family": "GEO",
      "mode": "worms",
      "title": "Fishing from the Dock",
      "kind": "Triangles · G.TR.4",
      "blurb": "A 9-foot rod at 40° and a line down to the bobber.",
      "level": 3,
      "passage": "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"An angler's 9-foot rod GT rises at 40 degrees above the horizontal from the grip G, 3.5 feet above the water. The line runs straight from the tip T down to the bobber B on the water at a 25 degree angle of depression. Dashed horizontal lines run through G and T\"><rect class=\"sh2\" x=\"8\" y=\"140\" width=\"304\" height=\"24\"/><rect class=\"sh2\" x=\"8\" y=\"126\" width=\"48\" height=\"14\"/><line class=\"thin dash\" x1=\"40\" y1=\"140\" x2=\"40\" y2=\"105.7\"/><line class=\"thin dash\" x1=\"40\" y1=\"105.7\" x2=\"130\" y2=\"105.7\"/><line class=\"thin dash\" x1=\"107.57\" y1=\"49.01\" x2=\"217.57\" y2=\"49.01\"/><line class=\"ln\" x1=\"40\" y1=\"105.7\" x2=\"107.57\" y2=\"49.01\"/><line class=\"ac\" x1=\"107.57\" y1=\"49.01\" x2=\"302.7\" y2=\"140\"/><path class=\"thin\" d=\"M70 105.7 A30 30 0 0 0 62.98 86.42\"/><path class=\"thin\" d=\"M158.32 72.67 A56 56 0 0 0 163.57 49.01\"/><circle class=\"dt\" cx=\"40\" cy=\"105.7\" r=\"3\"/><circle class=\"dt\" cx=\"107.57\" cy=\"49.01\" r=\"3\"/><circle class=\"dta\" cx=\"302.7\" cy=\"140\" r=\"4\"/><text x=\"28\" y=\"108.7\" text-anchor=\"middle\">G</text><text x=\"105.57\" y=\"40.01\" text-anchor=\"middle\">T</text><text x=\"300.7\" y=\"131\" text-anchor=\"middle\">B</text><text x=\"91.75\" y=\"95.49\" text-anchor=\"middle\">40°</text><text x=\"190.41\" y=\"68.2\" text-anchor=\"middle\">25°</text><text x=\"58\" y=\"72\" text-anchor=\"middle\">9 ft</text><text class=\"sm\" x=\"46\" y=\"121\" text-anchor=\"start\">3.5 ft</text><text class=\"sm\" x=\"200\" y=\"157\" text-anchor=\"middle\">water</text><text class=\"sm\" x=\"22\" y=\"136\" text-anchor=\"middle\">dock</text></svg></figure><p class=\"geo-given\">An angler on a dock holds a 9-ft fishing rod at its grip <strong>G</strong>, 3.5 ft above the water. The rod <strong>GT</strong> makes a 40° angle with the horizontal. The line runs straight from the tip <strong>T</strong> to the bobber <strong>B</strong> on the water, at a 25° angle of depression from T.</p>",
      "claims": [
        {
          "id": "rise",
          "sol": "G.TR.4",
          "sub": "G.TR.4.3",
          "stem": "How far above G is the tip T, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "6.9 ft"
            },
            {
              "letter": "B",
              "text": "5.8 ft"
            },
            {
              "letter": "C",
              "text": "7.6 ft"
            },
            {
              "letter": "D",
              "text": "14.0 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "water",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "How high above the water is the tip T, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "5.8 ft"
            },
            {
              "letter": "B",
              "text": "10.4 ft"
            },
            {
              "letter": "C",
              "text": "9.3 ft"
            },
            {
              "letter": "D",
              "text": "2.3 ft"
            }
          ],
          "correct": "C"
        },
        {
          "id": "line",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "How long is the fishing line from T to the bobber, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "22.0 ft"
            },
            {
              "letter": "B",
              "text": "13.7 ft"
            },
            {
              "letter": "C",
              "text": "10.2 ft"
            },
            {
              "letter": "D",
              "text": "19.9 ft"
            }
          ],
          "correct": "A"
        },
        {
          "id": "far",
          "sol": "G.TR.4",
          "sub": "G.TR.4.4",
          "stem": "How far is the bobber from G, measured horizontally, to the nearest tenth of a foot?",
          "choices": [
            {
              "letter": "A",
              "text": "19.9 ft"
            },
            {
              "letter": "B",
              "text": "26.8 ft"
            },
            {
              "letter": "C",
              "text": "28.9 ft"
            },
            {
              "letter": "D",
              "text": "25.7 ft"
            }
          ],
          "correct": "B"
        },
        {
          "id": "sixty",
          "sol": "G.TR.4",
          "sub": "G.TR.4.2",
          "stem": "If the angler raises the 9-ft rod to a 60° angle with the horizontal, how far above G is the tip? Give the exact answer.",
          "choices": [
            {
              "letter": "A",
              "text": "4.5 ft"
            },
            {
              "letter": "B",
              "text": "9√3 ft"
            },
            {
              "letter": "C",
              "text": "9√2/2 ft"
            },
            {
              "letter": "D",
              "text": "9√3/2 ft"
            }
          ],
          "correct": "D"
        },
        {
          "id": "posts",
          "sol": "G.TR.4",
          "sub": "G.TR.4.1",
          "stem": "Three dock posts are joined by ropes 7 ft, 10 ft and 13 ft long, forming a triangle. Which describes the triangle? Choose the answer with the correct reason.",
          "choices": [
            {
              "letter": "A",
              "text": "Acute, because 13² is less than 7² + 10²."
            },
            {
              "letter": "B",
              "text": "Right, because 7² + 10² = 13²."
            },
            {
              "letter": "C",
              "text": "Obtuse, because 13² is greater than 7² + 10²."
            },
            {
              "letter": "D",
              "text": "It is not a triangle, because 7 + 10 is less than 13."
            }
          ],
          "correct": "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
