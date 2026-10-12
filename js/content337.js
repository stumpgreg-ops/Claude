/* SOL Labyrinth — Geometry game (family GEO), v5.20: changing dimensions and similar figures, G.DF.2 (Virginia 2023 Geometry SOL),
   for two game modes: maze (a school building and its grounds) and raid / Eagle Swoop (sports and games). Original items only.
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given facts,
   then six questions about it. Solids are drawn in simple oblique projection, hidden edges dashed. Every numeric answer was
   computed, and every distractor is a named mistake (k for k² or k³, a square root for a cube root, differences for ratios …). */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-df2-maze-rug",
      family: "GEO",
      mode: "maze",
      title: "The Reading-Corner Rug",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A 9 ft by 6 ft rug, stretched, shrunk and copied.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"A rectangular rug 9 feet long and 6 feet wide on a classroom floor, next to a bookshelf and a beanbag chair\"><rect class=\"sh2\" x=\"22\" y=\"22\" width=\"30\" height=\"108\"/><path class=\"thin\" d=\"M22 49 H52 M22 76 H52 M22 103 H52\"/><rect class=\"sh\" x=\"104\" y=\"22\" width=\"144\" height=\"96\"/><rect class=\"thin dash\" x=\"112\" y=\"30\" width=\"128\" height=\"80\"/><ellipse class=\"thin\" cx=\"286\" cy=\"112\" rx=\"20\" ry=\"14\"/><text x=\"176\" y=\"136\" text-anchor=\"middle\">9 ft</text><text x=\"256\" y=\"75\">6 ft</text><text class=\"sm\" x=\"37\" y=\"146\" text-anchor=\"middle\">shelf</text><text class=\"sm\" x=\"286\" y=\"146\" text-anchor=\"middle\">beanbag</text></svg></figure><p class=\"geo-given\">The reading corner of a classroom has a rectangular rug that is 9 ft long and 6 ft wide. Its perimeter is 30 ft and its area is 54 ft².</p>",
      claims: [
        {
          id: "longer",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The class gets a new rug that is twice as long as this rug and just as wide. What is the area of the new rug?",
          choices: [
            { letter: "A", text: "216 ft²" },
            { letter: "B", text: "108 ft²" },
            { letter: "C", text: "48 ft²" },
            { letter: "D", text: "63 ft²" }
          ],
          correct: "B"
        },
        {
          id: "triple",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Both the length and the width of the rug are tripled. What is the perimeter of the larger rug?",
          choices: [
            { letter: "A", text: "42 ft" },
            { letter: "B", text: "33 ft" },
            { letter: "C", text: "270 ft" },
            { letter: "D", text: "90 ft" }
          ],
          correct: "D"
        },
        {
          id: "halfrug",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Jada says a rug with half the length and half the width of this rug has half its area, 27 ft². What is true?",
          choices: [
            { letter: "A", text: "The area is 1/4 as much: 13.5 ft²." },
            { letter: "B", text: "The area stays 54 ft², since the shape is the same." },
            { letter: "C", text: "The area is 1/8 as much: 6.75 ft²." },
            { letter: "D", text: "Jada is right: the area is 27 ft²." }
          ],
          correct: "A"
        },
        {
          id: "simperim",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "Another rug is similar to this one and has a perimeter of 50 ft. How long is it?",
          choices: [
            { letter: "A", text: "10 ft" },
            { letter: "B", text: "25 ft" },
            { letter: "C", text: "15 ft" },
            { letter: "D", text: "29 ft" }
          ],
          correct: "C"
        },
        {
          id: "runner",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A hallway runner rug is 12 ft long and 3 ft wide. Is it similar to the reading-corner rug?",
          choices: [
            { letter: "A", text: "Yes: both have a 30 ft perimeter." },
            { letter: "B", text: "Yes: 12 − 9 = 6 − 3." },
            { letter: "C", text: "Yes: both are rectangles." },
            { letter: "D", text: "No: 12/9 ≠ 3/6." }
          ],
          correct: "D"
        },
        {
          id: "doubles",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Which change to the 9 ft by 6 ft rug doubles its area?",
          choices: [
            { letter: "A", text: "Double the length only." },
            { letter: "B", text: "Double the length and halve the width." },
            { letter: "C", text: "Double the length and the width." },
            { letter: "D", text: "Add 2 ft to the length and the width." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df2-maze-cone-cup",
      family: "GEO",
      mode: "maze",
      title: "Cone Cups at the Fountain",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Paper cone cups of different sizes in the hallway.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A paper cone cup, point down: radius 5 cm across the top, depth 12 cm from the top to the point, slant height 13 cm; a water fountain stands to the right\"><path class=\"sh2\" d=\"M65 24 L110 132 L155 24 A45 10 0 0 1 65 24 Z\"/><ellipse class=\"ln\" cx=\"110\" cy=\"24\" rx=\"45\" ry=\"10\"/><line class=\"thin dash\" x1=\"110\" y1=\"24\" x2=\"110\" y2=\"132\"/><line class=\"thin\" x1=\"110\" y1=\"24\" x2=\"155\" y2=\"24\"/><path class=\"thin\" d=\"M110 32 H118 V24\"/><circle class=\"dt\" cx=\"110\" cy=\"24\" r=\"2.5\"/><path class=\"thin\" d=\"M44 24 H56 M44 132 H56 M50 24 V132\"/><text x=\"44\" y=\"83\" text-anchor=\"end\">12 cm</text><text x=\"161\" y=\"22\">5 cm</text><text x=\"146.5\" y=\"86\">13 cm</text><path class=\"sh2\" d=\"M232 72 H300 V140 H232 Z\"/><path class=\"ln\" d=\"M246 72 V58 H262\"/><path class=\"thin\" d=\"M240 86 H292\"/><text class=\"sm\" x=\"266\" y=\"112\" text-anchor=\"middle\">fountain</text></svg></figure><p class=\"geo-given\">Paper cups by the hallway water fountain are cones, point down. Each cup has a radius of 5 cm, a depth (height) of 12 cm and a slant height of 13 cm. A cup holds 100π cm³, and its paper side has an area of 65π cm².</p>",
      claims: [
        {
          id: "deeper",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A new cup keeps the 5 cm radius but is 24 cm deep. What is its volume?",
          choices: [
            { letter: "A", text: "400π cm³" },
            { letter: "B", text: "800π cm³" },
            { letter: "C", text: "200π cm³" },
            { letter: "D", text: "600π cm³" }
          ],
          correct: "C"
        },
        {
          id: "widetall",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A party cup has 3 times the radius and half the depth of this cup. What is its volume?",
          choices: [
            { letter: "A", text: "450π cm³" },
            { letter: "B", text: "900π cm³" },
            { letter: "C", text: "1,350π cm³" },
            { letter: "D", text: "150π cm³" }
          ],
          correct: "A"
        },
        {
          id: "simdeep",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A larger cup is similar to this cup and is 18 cm deep. What is its volume?",
          choices: [
            { letter: "A", text: "726π cm³" },
            { letter: "B", text: "150π cm³" },
            { letter: "C", text: "225π cm³" },
            { letter: "D", text: "337.5π cm³" }
          ],
          correct: "D"
        },
        {
          id: "smallcup",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A sample cup is similar to this cup and holds 12.5π cm³. How deep is it?",
          choices: [
            { letter: "A", text: "1.5 cm" },
            { letter: "B", text: "6 cm" },
            { letter: "C", text: "3 cm" },
            { letter: "D", text: "about 4.2 cm" }
          ],
          correct: "B"
        },
        {
          id: "othercup",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Another cone cup has a radius of 4 cm and a depth of 9.6 cm. Is it similar to these cups? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: 5 − 4 ≠ 12 − 9.6." },
            { letter: "B", text: "Yes: 4/5 = 9.6/12 = 0.8." },
            { letter: "C", text: "No: its volume is not 0.8 × 100π." },
            { letter: "D", text: "Yes: all cones are similar." }
          ],
          correct: "B"
        },
        {
          id: "paper",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A jumbo cup is similar to this cup and is 24 cm deep. How much paper is in its side (its lateral area)?",
          choices: [
            { letter: "A", text: "240π cm²" },
            { letter: "B", text: "130π cm²" },
            { letter: "C", text: "260π cm²" },
            { letter: "D", text: "520π cm²" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df2-maze-bus-island",
      family: "GEO",
      mode: "maze",
      title: "The Bus-Loop Island",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A right-triangle patch of grass where the buses turn.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"A right-triangle grass island in the bus loop: legs 12 m and 16 m, longest side 20 m, with a school bus parked beside it\"><polygon class=\"sh\" points=\"54,130 158,130 54,52\"/><path class=\"thin\" d=\"M54 121 H63 V130\"/><text x=\"48\" y=\"96\" text-anchor=\"end\">12 m</text><text x=\"106\" y=\"148\" text-anchor=\"middle\">16 m</text><text x=\"113.2\" y=\"81.4\">20 m</text><path class=\"thin dash\" d=\"M200 120 H312\"/><rect class=\"sh2\" x=\"206\" y=\"60\" width=\"100\" height=\"40\" rx=\"6\"/><path class=\"thin\" d=\"M216 68 H236 V80 H216 Z M244 68 H264 V80 H244 Z M272 68 H292 V80 H272 Z\"/><circle class=\"thin\" cx=\"226\" cy=\"102\" r=\"7\"/><circle class=\"thin\" cx=\"286\" cy=\"102\" r=\"7\"/><text class=\"sm\" x=\"256\" y=\"140\" text-anchor=\"middle\">bus lane</text></svg></figure><p class=\"geo-given\">A grass island in the school's bus loop is a right triangle with legs of 12 m and 16 m and a longest side of 20 m. Its perimeter is 48 m and its area is 96 m².</p>",
      claims: [
        {
          id: "stretch",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The 16 m leg is stretched to 32 m, and the 12 m leg stays the same. What is the area of the new island?",
          choices: [
            { letter: "A", text: "384 m²" },
            { letter: "B", text: "112 m²" },
            { letter: "C", text: "768 m²" },
            { letter: "D", text: "192 m²" }
          ],
          correct: "D"
        },
        {
          id: "newper",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "One leg of the island is stretched from 16 m to 32 m, and the 12 m leg stays the same. To the nearest tenth of a meter, what is the new perimeter?",
          choices: [
            { letter: "A", text: "64.0 m" },
            { letter: "B", text: "78.2 m" },
            { letter: "C", text: "84.0 m" },
            { letter: "D", text: "96.0 m" }
          ],
          correct: "B"
        },
        {
          id: "gym",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A smaller island by the gym is similar to this one. Its longest side is 15 m. What is its area?",
          choices: [
            { letter: "A", text: "128 m²" },
            { letter: "B", text: "72 m²" },
            { letter: "C", text: "54 m²" },
            { letter: "D", text: "40.5 m²" }
          ],
          correct: "C"
        },
        {
          id: "fromarea",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A larger island is similar to this one and has an area of 216 m². How long is its shortest side?",
          choices: [
            { letter: "A", text: "18 m" },
            { letter: "B", text: "27 m" },
            { letter: "C", text: "24 m" },
            { letter: "D", text: "about 14.7 m" }
          ],
          correct: "A"
        },
        {
          id: "planter",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A planter near the entrance is a right triangle with legs of 10 m and 14 m. Is it similar to the island? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: each leg is 2 m shorter." },
            { letter: "B", text: "No: its longest side would have to be 20 m." },
            { letter: "C", text: "No: 10/12 ≠ 14/16." },
            { letter: "D", text: "Yes: both are right triangles." }
          ],
          correct: "C"
        },
        {
          id: "plan",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "Planners want a new island similar to this one, with a longest side of 25 m. What should its legs be?",
          choices: [
            { letter: "A", text: "9.6 m and 12.8 m" },
            { letter: "B", text: "15 m and 20 m" },
            { letter: "C", text: "17 m and 21 m" },
            { letter: "D", text: "18.75 m and 25 m" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df2-maze-skylight",
      family: "GEO",
      mode: "maze",
      title: "The Library Skylight",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A glass pyramid over the library, and plans for more.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A square-pyramid glass skylight with base edge 12 feet, and beside it a cross-section through the apex: a right triangle with height 8 feet, half the base 6 feet and slant height 10 feet\"><path class=\"sh2\" d=\"M20 140 L140 140 L105 47 Z\"/><path class=\"sh2\" d=\"M140 140 L190 114 L105 47 Z\"/><path class=\"ln dash\" d=\"M20 140 L70 114 L190 114 M70 114 L105 47\"/><line class=\"thin dash\" x1=\"105\" y1=\"127\" x2=\"105\" y2=\"47\"/><line class=\"ac\" x1=\"80\" y1=\"140\" x2=\"105\" y2=\"47\"/><path class=\"thin\" d=\"M86 140 L87.56 134.21 L81.56 134.21\"/><text x=\"80\" y=\"157\" text-anchor=\"middle\">12 ft</text><text class=\"sm\" x=\"256\" y=\"20\" text-anchor=\"middle\">cut through the top</text><polygon class=\"sh2\" points=\"226,47 226,127 286,127\"/><line class=\"thin dash\" x1=\"226\" y1=\"47\" x2=\"226\" y2=\"127\"/><line class=\"ac\" x1=\"226\" y1=\"47\" x2=\"286\" y2=\"127\"/><path class=\"thin\" d=\"M226 119 H234 V127\"/><text x=\"220\" y=\"92\" text-anchor=\"end\">8 ft</text><text x=\"256\" y=\"145\" text-anchor=\"middle\">6 ft</text><text class=\"acc\" x=\"264\" y=\"85\">10 ft</text></svg></figure><p class=\"geo-given\">The library's skylight is a square pyramid of glass with a base edge of 12 ft, a height of 8 ft and a slant height of 10 ft (gold). Its four triangular faces have 240 ft² of glass, and it encloses 384 ft³ of air.</p>",
      claims: [
        {
          id: "wing",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The new wing will get a skylight similar to this one, with an 18 ft base edge. How much glass will its four triangular faces have?",
          choices: [
            { letter: "A", text: "540 ft²" },
            { letter: "B", text: "360 ft²" },
            { letter: "C", text: "810 ft²" },
            { letter: "D", text: "864 ft²" }
          ],
          correct: "A"
        },
        {
          id: "cost",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "Glass costs $35 per square foot. A similar skylight with an 18 ft base edge is planned. How much more will its glass cost than the glass in this skylight?",
          choices: [
            { letter: "A", text: "$8,400" },
            { letter: "B", text: "$18,900" },
            { letter: "C", text: "$10,500" },
            { letter: "D", text: "$4,200" }
          ],
          correct: "C"
        },
        {
          id: "tallvol",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "If the skylight's height were doubled to 16 ft and its 12 ft base kept, what would its volume be?",
          choices: [
            { letter: "A", text: "2,304 ft³" },
            { letter: "B", text: "768 ft³" },
            { letter: "C", text: "1,536 ft³" },
            { letter: "D", text: "3,072 ft³" }
          ],
          correct: "B"
        },
        {
          id: "tallglass",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "If the height were doubled to 16 ft and the 12 ft base kept, how much glass would the four faces need, to the nearest square foot?",
          choices: [
            { letter: "A", text: "480 ft²" },
            { letter: "B", text: "960 ft²" },
            { letter: "C", text: "384 ft²" },
            { letter: "D", text: "410 ft²" }
          ],
          correct: "D"
        },
        {
          id: "atrium",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "An atrium skylight is similar to this one and encloses 1,296 ft³ of air. How tall is it?",
          choices: [
            { letter: "A", text: "12 ft" },
            { letter: "B", text: "18 ft" },
            { letter: "C", text: "15 ft" },
            { letter: "D", text: "27 ft" }
          ],
          correct: "A"
        },
        {
          id: "offer",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A company offers a square-pyramid skylight with a 15 ft base edge and a 12 ft slant height. Is it similar to this skylight? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: its height would have to be 8 ft." },
            { letter: "B", text: "Yes: both are square pyramids." },
            { letter: "C", text: "Yes: both ratios are greater than 1." },
            { letter: "D", text: "No: 15/12 = 1.25 but 12/10 = 1.2." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df2-raid-archery",
      family: "GEO",
      mode: "raid",
      title: "The Archery Target",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Rings of a target, a youth target and a toy one.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"An archery target of five rings around one center: the gold bullseye has radius 6 cm and the outer edge has radius 30 cm\"><circle class=\"sh2\" cx=\"92\" cy=\"80\" r=\"72\"/><circle class=\"thin\" cx=\"92\" cy=\"80\" r=\"72\"/><circle class=\"thin\" cx=\"92\" cy=\"80\" r=\"57.6\"/><circle class=\"thin\" cx=\"92\" cy=\"80\" r=\"43.2\"/><circle class=\"thin\" cx=\"92\" cy=\"80\" r=\"28.8\"/><circle class=\"sh\" cx=\"92\" cy=\"80\" r=\"14.4\"/><circle class=\"ln\" cx=\"92\" cy=\"80\" r=\"72\"/><line class=\"ac\" x1=\"92\" y1=\"80\" x2=\"102.18\" y2=\"69.82\"/><line class=\"ac\" x1=\"92\" y1=\"80\" x2=\"161.55\" y2=\"98.63\"/><circle class=\"dt\" cx=\"92\" cy=\"80\" r=\"2.5\"/><path class=\"thin dash\" d=\"M102.18 69.82 L196 46 M161.55 98.63 L196 112\"/><text class=\"sm\" x=\"200\" y=\"30\">bullseye</text><text x=\"200\" y=\"50\">r = 6 cm</text><text class=\"sm\" x=\"200\" y=\"100\">outer edge</text><text x=\"200\" y=\"120\">r = 30 cm</text></svg></figure><p class=\"geo-given\">An archery target is five circles with the same center. The gold bullseye has a radius of 6 cm, and each ring adds 6 cm, so the outer edge has a radius of 30 cm.</p>",
      claims: [
        {
          id: "circ",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the ratio of the circumference of the outer edge to the circumference of the bullseye?",
          choices: [
            { letter: "A", text: "25 : 1" },
            { letter: "B", text: "125 : 1" },
            { letter: "C", text: "5 : 1" },
            { letter: "D", text: "1 : 5" }
          ],
          correct: "C"
        },
        {
          id: "face",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The bullseye has an area of 36π cm². What is the area of the whole target face?",
          choices: [
            { letter: "A", text: "4,500π cm²" },
            { letter: "B", text: "900π cm²" },
            { letter: "C", text: "60π cm²" },
            { letter: "D", text: "180π cm²" }
          ],
          correct: "B"
        },
        {
          id: "youth",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A youth target doubles the radius of every ring. What is the area of its bullseye?",
          choices: [
            { letter: "A", text: "576π cm²" },
            { letter: "B", text: "72π cm²" },
            { letter: "C", text: "288π cm²" },
            { letter: "D", text: "144π cm²" }
          ],
          correct: "D"
        },
        {
          id: "allcircles",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Which statement about the bullseye circle and the outer-edge circle is true?",
          choices: [
            { letter: "A", text: "They are similar, since all circles are similar." },
            { letter: "B", text: "They are not similar, since their radii differ." },
            { letter: "C", text: "They are congruent, since they share a center." },
            { letter: "D", text: "They are similar only because they share a center." }
          ],
          correct: "A"
        },
        {
          id: "toy",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A toy target is similar to this one, with an outer radius of 7.5 cm. What is the radius of its bullseye?",
          choices: [
            { letter: "A", text: "0.375 cm" },
            { letter: "B", text: "1.5 cm" },
            { letter: "C", text: "1.25 cm" },
            { letter: "D", text: "24 cm" }
          ],
          correct: "B"
        },
        {
          id: "bigedge",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "If the radius of the outer edge is tripled to 90 cm, what is the new outer circumference?",
          choices: [
            { letter: "A", text: "180π cm" },
            { letter: "B", text: "8,100π cm" },
            { letter: "C", text: "540π cm" },
            { letter: "D", text: "1,620π cm" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df2-raid-dice",
      family: "GEO",
      mode: "raid",
      title: "Giant Foam Dice",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A board-game die and a foam die ten centimeters wide.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Two cube-shaped dice drawn to the same scale: a small die with 2 cm edges and a foam die with 10 cm edges\"><path class=\"sh2\" d=\"M46 126 H66 V146 H46 Z\"/><path class=\"sh2\" d=\"M46 126 L53 119 H73 L66 126 Z\"/><path class=\"sh2\" d=\"M66 126 L73 119 V139 L66 146 Z\"/><circle class=\"dt\" cx=\"56\" cy=\"136\" r=\"2\"/><path class=\"sh2\" d=\"M150 46 H250 V146 H150 Z\"/><path class=\"sh2\" d=\"M150 46 L185 11 H285 L250 46 Z\"/><path class=\"sh2\" d=\"M250 46 L285 11 V111 L250 146 Z\"/><circle class=\"dt\" cx=\"175\" cy=\"71\" r=\"6\"/><circle class=\"dt\" cx=\"225\" cy=\"71\" r=\"6\"/><circle class=\"dt\" cx=\"200\" cy=\"96\" r=\"6\"/><circle class=\"dt\" cx=\"175\" cy=\"121\" r=\"6\"/><circle class=\"dt\" cx=\"225\" cy=\"121\" r=\"6\"/><text x=\"56\" y=\"163\" text-anchor=\"middle\">2 cm</text><text x=\"200\" y=\"163\" text-anchor=\"middle\">10 cm</text><text class=\"sm\" x=\"56\" y=\"110\" text-anchor=\"middle\">small die</text><text class=\"sm\" x=\"142\" y=\"66\" text-anchor=\"end\">foam die</text></svg></figure><p class=\"geo-given\">A board game's small die is a cube with 2 cm edges. A foam die for a giant floor game is a cube with 10 cm edges. All cubes are similar.</p>",
      claims: [
        {
          id: "nottrue",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "Which statement comparing the foam die to the small die is NOT true?",
          choices: [
            { letter: "A", text: "Each edge is 5 times as long." },
            { letter: "B", text: "Each face has 25 times the area." },
            { letter: "C", text: "Its surface area is 25 times as much." },
            { letter: "D", text: "Its volume is 25 times as much." }
          ],
          correct: "D"
        },
        {
          id: "sa",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The small die has a surface area of 24 cm². What is the surface area of the foam die?",
          choices: [
            { letter: "A", text: "600 cm²" },
            { letter: "B", text: "3,000 cm²" },
            { letter: "C", text: "100 cm²" },
            { letter: "D", text: "120 cm²" }
          ],
          correct: "A"
        },
        {
          id: "vol",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The small die has a volume of 8 cm³. What is the volume of the foam die?",
          choices: [
            { letter: "A", text: "600 cm³" },
            { letter: "B", text: "40 cm³" },
            { letter: "C", text: "1,000 cm³" },
            { letter: "D", text: "200 cm³" }
          ],
          correct: "C"
        },
        {
          id: "piece",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A game piece is made by stretching the small die to 6 cm tall while keeping its 2 cm by 2 cm base. What is the volume of the piece?",
          choices: [
            { letter: "A", text: "216 cm³" },
            { letter: "B", text: "24 cm³" },
            { letter: "C", text: "72 cm³" },
            { letter: "D", text: "12 cm³" }
          ],
          correct: "B"
        },
        {
          id: "simpiece",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A game piece measures 2 cm by 2 cm by 6 cm. Is it similar to the small die?",
          choices: [
            { letter: "A", text: "Yes: its volume is 3 times as much." },
            { letter: "B", text: "Yes: two of its edges match the die." },
            { letter: "C", text: "No: 6/2 = 3 but 2/2 = 1." },
            { letter: "D", text: "Yes: both are rectangular prisms." }
          ],
          correct: "C"
        },
        {
          id: "jumbo",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A jumbo die is similar to the small die and has a surface area of 54 cm². How long is each edge?",
          choices: [
            { letter: "A", text: "9 cm" },
            { letter: "B", text: "4.5 cm" },
            { letter: "C", text: "about 7.3 cm" },
            { letter: "D", text: "3 cm" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df2-raid-pool",
      family: "GEO",
      mode: "raid",
      title: "The Swim-Team Pool",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Deeper, wider and smaller pools for the swim team.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 124\" role=\"img\" aria-label=\"A rectangular swimming pool, 25 meters long, 10 meters wide and 2 meters deep, drawn as a box with lane lines on the water\"><path class=\"sh2\" d=\"M34 50 L234 50 L268.64 30 L68.64 30 Z\"/><line class=\"thin dash\" x1=\"42.66\" y1=\"45\" x2=\"242.66\" y2=\"45\"/><line class=\"thin dash\" x1=\"51.32\" y1=\"40\" x2=\"251.32\" y2=\"40\"/><line class=\"thin dash\" x1=\"59.98\" y1=\"35\" x2=\"259.98\" y2=\"35\"/><path class=\"ln\" d=\"M34 50 V90 H234 V50 M234 90 L268.64 70 V30\"/><path class=\"ln dash\" d=\"M34 90 L68.64 70 L268.64 70 M68.64 30 V70\"/><text x=\"134\" y=\"108\" text-anchor=\"middle\">25 m</text><text x=\"254.6\" y=\"24\">10 m</text><text x=\"28\" y=\"75\" text-anchor=\"end\">2 m</text></svg><figcaption>Not drawn to scale</figcaption></figure><p class=\"geo-given\">The swim team's pool is a rectangular prism 25 m long, 10 m wide and 2 m deep. It holds 500 m³ of water when full. Tile covers its floor and four walls: 390 m².</p>",
      claims: [
        {
          id: "deepen",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The pool is made deeper, from 2 m to 3 m. The length and width stay the same. How much water does it hold when full?",
          choices: [
            { letter: "A", text: "1,125 m³" },
            { letter: "B", text: "750 m³" },
            { letter: "C", text: "1,687.5 m³" },
            { letter: "D", text: "858 m³" }
          ],
          correct: "B"
        },
        {
          id: "tile",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A new pool doubles the length and the width but stays 2 m deep. How much tile does its floor and four walls need?",
          choices: [
            { letter: "A", text: "1,560 m²" },
            { letter: "B", text: "3,120 m²" },
            { letter: "C", text: "780 m²" },
            { letter: "D", text: "1,280 m²" }
          ],
          correct: "D"
        },
        {
          id: "kiddepth",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A kiddie pool is similar to the swim-team pool and is 5 m long. How deep is it?",
          choices: [
            { letter: "A", text: "0.4 m" },
            { letter: "B", text: "2 m" },
            { letter: "C", text: "0.08 m" },
            { letter: "D", text: "1 m" }
          ],
          correct: "A"
        },
        {
          id: "kidwater",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A kiddie pool is similar to the swim-team pool and is 5 m long. How much water does it hold when full?",
          choices: [
            { letter: "A", text: "100 m³" },
            { letter: "B", text: "20 m³" },
            { letter: "C", text: "4 m³" },
            { letter: "D", text: "125 m³" }
          ],
          correct: "C"
        },
        {
          id: "diving",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A diving pool is 20 m long, 8 m wide and 5 m deep. Is it similar to the swim-team pool? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: 20/25 = 8/10, but 5/2 is not 0.8." },
            { letter: "B", text: "Yes: both pools are rectangular prisms." },
            { letter: "C", text: "No: a similar pool would have to hold 500 m³." },
            { letter: "D", text: "Yes: its length and width ratios are both 0.8." }
          ],
          correct: "A"
        },
        {
          id: "practice",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A practice pool is similar to the swim-team pool. Its floor has an area of 160 m². How long is it?",
          choices: [
            { letter: "A", text: "8 m" },
            { letter: "B", text: "20 m" },
            { letter: "C", text: "16 m" },
            { letter: "D", text: "about 12.6 m" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df2-raid-skate-ramp",
      family: "GEO",
      mode: "raid",
      title: "The Skate-Park Wedge",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A wedge ramp made wider, steeper, smaller and bigger.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A wedge-shaped skate ramp: a triangular prism whose front face is a right triangle with run 6 feet, rise 2.5 feet and sloped side 6.5 feet; the ramp is 4 feet wide and its sloped riding surface is shaded gold\"><path class=\"sh\" d=\"M80 140 L224 80 L184 50 L40 110 Z\"/><path class=\"sh2\" d=\"M80 140 L224 140 L224 80 Z\"/><path class=\"ln dash\" d=\"M40 110 L184 110 L184 50 M184 110 L224 140\"/><path class=\"thin\" d=\"M216 140 V132 H224\"/><text x=\"152\" y=\"158\" text-anchor=\"middle\">6 ft</text><text x=\"231\" y=\"115\">2.5 ft</text><text x=\"144.3\" y=\"96.5\" text-anchor=\"middle\">6.5 ft</text><text x=\"52\" y=\"135\" text-anchor=\"end\">4 ft</text><text class=\"sm\" x=\"80\" y=\"62\" text-anchor=\"middle\">riding surface</text></svg></figure><p class=\"geo-given\">A skate-park ramp is a wedge (a triangular prism). Its front face is a right triangle with a run of 6 ft, a rise of 2.5 ft and a sloped side of 6.5 ft. The ramp is 4 ft wide. Its volume is 30 ft³, and its sloped riding surface (gold) has an area of 26 ft².</p>",
      claims: [
        {
          id: "wider",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The ramp is widened from 4 ft to 8 ft, with the same front triangle. What is its new volume?",
          choices: [
            { letter: "A", text: "60 ft³" },
            { letter: "B", text: "120 ft³" },
            { letter: "C", text: "240 ft³" },
            { letter: "D", text: "34 ft³" }
          ],
          correct: "A"
        },
        {
          id: "steeper",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Only the rise is changed, from 2.5 ft to 5 ft; the run stays 6 ft and the width 4 ft. To the nearest tenth, what is the area of the new riding surface?",
          choices: [
            { letter: "A", text: "26.0 ft²" },
            { letter: "B", text: "44.0 ft²" },
            { letter: "C", text: "31.2 ft²" },
            { letter: "D", text: "52.0 ft²" }
          ],
          correct: "C"
        },
        {
          id: "mini",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A mini ramp is similar to this ramp and has a rise of 1 ft. What is its volume?",
          choices: [
            { letter: "A", text: "75 ft³" },
            { letter: "B", text: "12 ft³" },
            { letter: "C", text: "4.8 ft³" },
            { letter: "D", text: "1.92 ft³" }
          ],
          correct: "D"
        },
        {
          id: "bigramp",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A bigger ramp is similar to this ramp, and its riding surface has an area of 58.5 ft². What is its rise?",
          choices: [
            { letter: "A", text: "5.625 ft" },
            { letter: "B", text: "3.75 ft" },
            { letter: "C", text: "9.75 ft" },
            { letter: "D", text: "about 7.6 ft" }
          ],
          correct: "B"
        },
        {
          id: "second",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A second wedge ramp has a right-triangle front face with a rise of 3 ft and a run of 7.2 ft, and it is 4.8 ft wide. Is it similar to this ramp?",
          choices: [
            { letter: "A", text: "No: its sloped side is not given." },
            { letter: "B", text: "No: the widths would have to match." },
            { letter: "C", text: "No: 3 − 2.5 ≠ 7.2 − 6." },
            { letter: "D", text: "Yes: each ratio is 1.2." }
          ],
          correct: "D"
        },
        {
          id: "samclaim",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "Sam says a ramp similar to this one with a 5 ft rise has a 52 ft² riding surface, because the scale factor is 2. What is true?",
          choices: [
            { letter: "A", text: "The scale factor is 2.5, so it is 65 ft²." },
            { letter: "B", text: "Area grows by 2³ = 8, so it is 208 ft²." },
            { letter: "C", text: "Area grows by 2² = 4, so it is 104 ft²." },
            { letter: "D", text: "Sam is right: it is 52 ft²." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df2-raid-ball-sizes",
      family: "GEO",
      mode: "raid",
      title: "Handball and Cage Ball",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A small ball, a giant ball and the balls in between.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Two balls drawn to the same scale: a handball with radius 3 inches and a cage ball with radius 24 inches\"><circle class=\"sh2\" cx=\"196\" cy=\"78\" r=\"64\"/><path class=\"thin\" d=\"M132 78 A64 15 0 0 0 260 78\"/><path class=\"thin dash\" d=\"M132 78 A64 15 0 0 1 260 78\"/><line class=\"ac\" x1=\"196\" y1=\"78\" x2=\"260\" y2=\"78\"/><circle class=\"dt\" cx=\"196\" cy=\"78\" r=\"2.5\"/><text x=\"266\" y=\"83\">24 in</text><circle class=\"sh\" cx=\"64\" cy=\"128\" r=\"8\"/><line class=\"ac\" x1=\"64\" y1=\"128\" x2=\"72\" y2=\"128\"/><text x=\"78\" y=\"133\">3 in</text><text class=\"sm\" x=\"64\" y=\"110\" text-anchor=\"middle\">handball</text><text class=\"sm\" x=\"196\" y=\"156\" text-anchor=\"middle\">cage ball</text></svg></figure><p class=\"geo-given\">A gym-class handball is a sphere with a radius of 3 in. Its surface area is 36π in², and its volume is 36π in³. A giant cage ball is a sphere with a radius of 24 in.</p>",
      claims: [
        {
          id: "cagesa",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the surface area of the cage ball?",
          choices: [
            { letter: "A", text: "288π in²" },
            { letter: "B", text: "18,432π in²" },
            { letter: "C", text: "9,216π in²" },
            { letter: "D", text: "2,304π in²" }
          ],
          correct: "D"
        },
        {
          id: "cagevol",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the volume of the cage ball?",
          choices: [
            { letter: "A", text: "288π in³" },
            { letter: "B", text: "18,432π in³" },
            { letter: "C", text: "13,824π in³" },
            { letter: "D", text: "2,304π in³" }
          ],
          correct: "B"
        },
        {
          id: "double",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A ball maker doubles the radius of the handball. What is the volume of the new ball?",
          choices: [
            { letter: "A", text: "288π in³" },
            { letter: "B", text: "216π in³" },
            { letter: "C", text: "72π in³" },
            { letter: "D", text: "144π in³" }
          ],
          correct: "A"
        },
        {
          id: "fromsa",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A ball has a surface area of 81π in². What is its radius?",
          choices: [
            { letter: "A", text: "6.75 in" },
            { letter: "B", text: "9 in" },
            { letter: "C", text: "4.5 in" },
            { letter: "D", text: "20.25 in" }
          ],
          correct: "C"
        },
        {
          id: "spheres",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Which statement about balls (spheres) is true?",
          choices: [
            { letter: "A", text: "Two spheres are similar only if their radii have a whole-number ratio." },
            { letter: "B", text: "Any two spheres are similar." },
            { letter: "C", text: "A sphere and a cylinder with the same radius are similar." },
            { letter: "D", text: "Two spheres are similar only if their volumes are equal." }
          ],
          correct: "B"
        },
        {
          id: "third",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A medicine ball is similar to the cage ball and holds 1/27 of its volume. What is the radius of the medicine ball?",
          choices: [
            { letter: "A", text: "8 in" },
            { letter: "B", text: "about 4.6 in" },
            { letter: "C", text: "about 0.9 in" },
            { letter: "D", text: "about 2.7 in" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df2-raid-pixel-block",
      family: "GEO",
      mode: "raid",
      title: "The Puzzle-Game Block",
      kind: "Changing dimensions · G.DF.2",
      blurb: "An L-block on a grid, zoomed, stretched and resized.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A coordinate grid with an L-shaped game block with vertices (0, 0), (3, 0), (3, 1), (1, 1), (1, 4) and (0, 4)\"><line class=\"gr\" x1=\"40\" y1=\"140\" x2=\"40\" y2=\"10\"/><line class=\"gr\" x1=\"66\" y1=\"140\" x2=\"66\" y2=\"10\"/><line class=\"gr\" x1=\"92\" y1=\"140\" x2=\"92\" y2=\"10\"/><line class=\"gr\" x1=\"118\" y1=\"140\" x2=\"118\" y2=\"10\"/><line class=\"gr\" x1=\"144\" y1=\"140\" x2=\"144\" y2=\"10\"/><line class=\"gr\" x1=\"170\" y1=\"140\" x2=\"170\" y2=\"10\"/><line class=\"gr\" x1=\"196\" y1=\"140\" x2=\"196\" y2=\"10\"/><line class=\"gr\" x1=\"40\" y1=\"140\" x2=\"196\" y2=\"140\"/><line class=\"gr\" x1=\"40\" y1=\"114\" x2=\"196\" y2=\"114\"/><line class=\"gr\" x1=\"40\" y1=\"88\" x2=\"196\" y2=\"88\"/><line class=\"gr\" x1=\"40\" y1=\"62\" x2=\"196\" y2=\"62\"/><line class=\"gr\" x1=\"40\" y1=\"36\" x2=\"196\" y2=\"36\"/><line class=\"gr\" x1=\"40\" y1=\"10\" x2=\"196\" y2=\"10\"/><line class=\"ax\" x1=\"40\" y1=\"140\" x2=\"204\" y2=\"140\"/><line class=\"ax\" x1=\"40\" y1=\"140\" x2=\"40\" y2=\"6\"/><polygon class=\"sh\" points=\"40,140 118,140 118,114 66,114 66,36 40,36\"/><text class=\"sm\" x=\"92\" y=\"155\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"144\" y=\"155\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"196\" y=\"155\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"32\" y=\"92\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"32\" y=\"40\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"32\" y=\"155\" text-anchor=\"end\">0</text><text class=\"sm\" x=\"208\" y=\"144\">x</text><text class=\"sm\" x=\"32\" y=\"18\" text-anchor=\"end\">y</text><text class=\"sm\" x=\"236\" y=\"40\">1 grid unit</text><text class=\"sm\" x=\"236\" y=\"56\">= 10 pixels</text><text class=\"sm\" x=\"236\" y=\"100\">L-block</text><path class=\"thin dash\" d=\"M232 96 L72 75\"/></svg></figure><p class=\"geo-given\">In a puzzle video game, the L-block has vertices (0, 0), (3, 0), (3, 1), (1, 1), (1, 4) and (0, 4). Its area is 6 square grid units and its perimeter is 14 grid units. On a phone, 1 grid unit is 10 pixels.</p>",
      claims: [
        {
          id: "zoom",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The game zooms in on the L-block with a scale factor of 3. What is the area of the zoomed block, in square grid units?",
          choices: [
            { letter: "A", text: "18" },
            { letter: "B", text: "162" },
            { letter: "C", text: "54" },
            { letter: "D", text: "42" }
          ],
          correct: "C"
        },
        {
          id: "stretch",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A power-up doubles every x-coordinate of the block and keeps every y-coordinate. What is the new area, in square grid units?",
          choices: [
            { letter: "A", text: "12" },
            { letter: "B", text: "6" },
            { letter: "C", text: "9" },
            { letter: "D", text: "24" }
          ],
          correct: "A"
        },
        {
          id: "stretchsim",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A power-up doubles every x-coordinate of the block and keeps every y-coordinate. Is the new block similar to the original?",
          choices: [
            { letter: "A", text: "Yes: its vertices are still on grid points." },
            { letter: "B", text: "No: widths double but heights stay the same." },
            { letter: "C", text: "Yes: its area is exactly twice as much." },
            { letter: "D", text: "Yes: all its angles are still right angles." }
          ],
          correct: "B"
        },
        {
          id: "giant",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A giant block is similar to the L-block and has an area of 150 square grid units. How tall is it, in grid units?",
          choices: [
            { letter: "A", text: "100" },
            { letter: "B", text: "25" },
            { letter: "C", text: "about 12.2" },
            { letter: "D", text: "20" }
          ],
          correct: "D"
        },
        {
          id: "expr",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A block similar to the L-block has a perimeter of 49 grid units. Which expression gives its area, in square grid units?",
          choices: [
            { letter: "A", text: "6 · (14/49)²" },
            { letter: "B", text: "6 · (49/14)³" },
            { letter: "C", text: "6 · (49/14)" },
            { letter: "D", text: "6 · (49/14)²" }
          ],
          correct: "D"
        },
        {
          id: "tablet",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "On a phone the block covers 600 square pixels, with 10 pixels per grid unit. On a tablet, 1 grid unit is 25 pixels. How many square pixels does the block cover on the tablet?",
          choices: [
            { letter: "A", text: "150" },
            { letter: "B", text: "1,500" },
            { letter: "C", text: "3,750" },
            { letter: "D", text: "9,375" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df2-raid-hockey-puck",
      family: "GEO",
      mode: "raid",
      title: "The Hockey Puck",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A regulation puck, a giant fan puck and some lookalikes.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 146\" role=\"img\" aria-label=\"A hockey puck shaped like a cylinder, 3 inches across and 1 inch thick, with a hockey stick beside it\"><path class=\"sh2\" d=\"M37 52 V102 A75 20 0 0 0 187 102 V52 Z\"/><ellipse class=\"sh2\" cx=\"112\" cy=\"52\" rx=\"75\" ry=\"20\"/><path class=\"ln dash\" d=\"M37 102 A75 20 0 0 1 187 102\"/><line class=\"ac\" x1=\"37\" y1=\"52\" x2=\"187\" y2=\"52\"/><circle class=\"dt\" cx=\"112\" cy=\"52\" r=\"2.5\"/><text x=\"112\" y=\"24\" text-anchor=\"middle\">3 in</text><path class=\"thin\" d=\"M195 52 H203 M195 102 H203 M199 52 V102\"/><text x=\"207\" y=\"82\">1 in</text><path class=\"sh2\" d=\"M292 8 L301 10 L272 112 Q267 128 250 128 H212 V118 H250 Q258 118 262 108 Z\"/><text class=\"sm\" x=\"112\" y=\"138\" text-anchor=\"middle\">puck</text></svg></figure><p class=\"geo-given\">A hockey puck is a cylinder 3 in across (radius 1.5 in) and 1 in thick. Its volume is 2.25π in³, and its total surface area (top, bottom and side) is 7.5π in².</p>",
      claims: [
        {
          id: "giantvol",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A giant fan puck is similar to this puck and is 36 in across. What is its volume?",
          choices: [
            { letter: "A", text: "324π in³" },
            { letter: "B", text: "3,888π in³" },
            { letter: "C", text: "27π in³" },
            { letter: "D", text: "15,552π in³" }
          ],
          correct: "B"
        },
        {
          id: "paint",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A giant fan puck similar to this puck is 36 in across. Its whole surface is painted, and one can of paint covers 1,000 in². How many cans are needed?",
          choices: [
            { letter: "A", text: "1 can" },
            { letter: "B", text: "41 cans" },
            { letter: "C", text: "4 cans" },
            { letter: "D", text: "3 cans" }
          ],
          correct: "C"
        },
        {
          id: "wide",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A wide puck is 6 in across and still 1 in thick. What is its volume?",
          choices: [
            { letter: "A", text: "9π in³" },
            { letter: "B", text: "36π in³" },
            { letter: "C", text: "18π in³" },
            { letter: "D", text: "4.5π in³" }
          ],
          correct: "A"
        },
        {
          id: "thick",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A thick puck keeps the 3 in width but is 2 in thick. What is its total surface area?",
          choices: [
            { letter: "A", text: "15π in²" },
            { letter: "B", text: "30π in²" },
            { letter: "C", text: "12π in²" },
            { letter: "D", text: "10.5π in²" }
          ],
          correct: "D"
        },
        {
          id: "coaster",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A puck-shaped coaster is 4 in across and 1.5 in thick. Is it similar to the puck? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: both measures are larger." },
            { letter: "B", text: "No: it would have to be 1 in thick." },
            { letter: "C", text: "No: 4/3 ≠ 1.5/1." },
            { letter: "D", text: "Yes: both are cylinders." }
          ],
          correct: "C"
        },
        {
          id: "youth",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A youth puck is similar to this puck and holds 51.2% as much rubber. How far across is it?",
          choices: [
            { letter: "A", text: "2.4 in" },
            { letter: "B", text: "about 2.15 in" },
            { letter: "C", text: "1.536 in" },
            { letter: "D", text: "1.92 in" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
