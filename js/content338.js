/* SOL Labyrinth — Geometry game (family GEO), v5.20: changing dimensions and similar figures, G.DF.2 (Virginia 2023 Geometry SOL),
   for two game modes: rocks / Rune Rocks (space, science and weather) and sky / Sun Chariot (travel and getting around).
   Original items only. A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css)
   and the given facts, then six questions about it. Solids are drawn in oblique (cavalier) projection with hidden edges dashed.
   Every numeric answer was computed, and every distractor is a named mistake (k for k² or k³, a square root for a cube root,
   differences for ratios, a missed unit conversion …). */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-df2-rocks-hex-mirror",
      family: "GEO",
      mode: "rocks",
      title: "The Hexagon Mirror",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A telescope mirror built from hexagon tiles.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"A telescope mirror made of seven hexagon segments fitted together, with the middle segment shaded; beside it one segment drawn larger, a regular hexagon with equal sides marked and one side labeled 20 cm\"><polygon class=\"sh\" points=\"82,58 101.05,69 101.05,91 82,102 62.95,91 62.95,69\"/><polygon class=\"sh2\" points=\"120.11,58 139.16,69 139.16,91 120.11,102 101.05,91 101.05,69\"/><polygon class=\"sh2\" points=\"101.05,91 120.11,102 120.11,124 101.05,135 82,124 82,102\"/><polygon class=\"sh2\" points=\"62.95,91 82,102 82,124 62.95,135 43.89,124 43.89,102\"/><polygon class=\"sh2\" points=\"43.89,58 62.95,69 62.95,91 43.89,102 24.84,91 24.84,69\"/><polygon class=\"sh2\" points=\"62.95,25 82,36 82,58 62.95,69 43.89,58 43.89,36\"/><polygon class=\"sh2\" points=\"101.05,25 120.11,36 120.11,58 101.05,69 82,58 82,36\"/><polygon class=\"sh\" points=\"226,34 264.11,56 264.11,100 226,122 187.89,100 187.89,56\"/><path class=\"thin\" d=\"M247.55 40.67 L242.55 49.33 M269.11 78 L259.11 78 M247.55 115.33 L242.55 106.67 M204.45 115.33 L209.45 106.67 M182.89 78 L192.89 78 M204.45 40.67 L209.45 49.33\"/><text x=\"272.1\" y=\"82\" text-anchor=\"start\">20 cm</text><text class=\"sm\" x=\"82\" y=\"152\" text-anchor=\"middle\">mirror</text><text class=\"sm\" x=\"226\" y=\"148\" text-anchor=\"middle\">one segment</text></svg></figure><p class=\"geo-given\">A museum model of a space telescope has a main mirror made of segments. Each segment is a regular hexagon with sides of 20 cm. One segment has a perimeter of 120 cm and an area of 600√3 cm².</p>",
      claims: [
        {
          id: "perim",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A new segment has every side doubled, to 40 cm. What is its perimeter?",
          choices: [
            { letter: "A", text: "480 cm" },
            { letter: "B", text: "240 cm" },
            { letter: "C", text: "960 cm" },
            { letter: "D", text: "140 cm" }
          ],
          correct: "B"
        },
        {
          id: "triple",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Every side of a segment is tripled. What is the area of the new segment?",
          choices: [
            { letter: "A", text: "16,200√3 cm²" },
            { letter: "B", text: "3,600√3 cm²" },
            { letter: "C", text: "1,800√3 cm²" },
            { letter: "D", text: "5,400√3 cm²" }
          ],
          correct: "D"
        },
        {
          id: "desk",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A desk model uses a similar hexagon with 5 cm sides. What is the ratio of its area to the area of one 20 cm segment?",
          choices: [
            { letter: "A", text: "1 : 16" },
            { letter: "B", text: "16 : 1" },
            { letter: "C", text: "1 : 4" },
            { letter: "D", text: "1 : 64" }
          ],
          correct: "A"
        },
        {
          id: "regular",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Which statement about hexagons is true?",
          choices: [
            { letter: "A", text: "Any two hexagons are similar." },
            { letter: "B", text: "Two regular hexagons are similar only if their sides are equal." },
            { letter: "C", text: "Any two regular hexagons are similar." },
            { letter: "D", text: "Any two hexagons with 20 cm sides are similar." }
          ],
          correct: "C"
        },
        {
          id: "fromarea",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A larger segment is similar to these and has an area of 2,400√3 cm². How long is each of its sides?",
          choices: [
            { letter: "A", text: "40 cm" },
            { letter: "B", text: "about 31.7 cm" },
            { letter: "C", text: "10 cm" },
            { letter: "D", text: "80 cm" }
          ],
          correct: "A"
        },
        {
          id: "juan",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "Juan says a similar segment with 30 cm sides has 1.5 times the area of one 20 cm segment. What is true?",
          choices: [
            { letter: "A", text: "Its area is 3 times as much: 1,800√3 cm²." },
            { letter: "B", text: "Juan is right: the area is 900√3 cm²." },
            { letter: "C", text: "Its area is 2.25 times as much: 1,350√3 cm²." },
            { letter: "D", text: "Its area is 3.375 times as much: 2,025√3 cm²." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df2-rocks-hailstones",
      family: "GEO",
      mode: "rocks",
      title: "Hailstones After the Storm",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A pea-sized hailstone and a big one, side by side.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Two round hailstones resting on a centimeter ruler: a small one with radius 1 cm and a large one with radius 4 cm\"><rect class=\"thin\" x=\"32\" y=\"120\" width=\"256\" height=\"18\"/><path class=\"thin\" d=\"M40 120 V130 M52 120 V125 M64 120 V125 M76 120 V125 M88 120 V125 M100 120 V130 M112 120 V125 M124 120 V125 M136 120 V125 M148 120 V125 M160 120 V130 M172 120 V125 M184 120 V125 M196 120 V125 M208 120 V125 M220 120 V130 M232 120 V125 M244 120 V125 M256 120 V125 M268 120 V125 M280 120 V130\"/><text class=\"sm\" x=\"40\" y=\"152\" text-anchor=\"middle\">0</text><text class=\"sm\" x=\"100\" y=\"152\" text-anchor=\"middle\">5</text><text class=\"sm\" x=\"160\" y=\"152\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"220\" y=\"152\" text-anchor=\"middle\">15</text><text class=\"sm\" x=\"280\" y=\"152\" text-anchor=\"middle\">20 cm</text><circle class=\"sh2\" cx=\"76\" cy=\"108\" r=\"12\"/><circle class=\"sh2\" cx=\"200\" cy=\"72\" r=\"48\"/><line class=\"thin dash\" x1=\"200\" y1=\"72\" x2=\"248\" y2=\"72\"/><circle class=\"dt\" cx=\"200\" cy=\"72\" r=\"2.5\"/><line class=\"thin dash\" x1=\"76\" y1=\"108\" x2=\"88\" y2=\"108\"/><text x=\"224\" y=\"66\" text-anchor=\"middle\">4 cm</text><text x=\"82\" y=\"88\" text-anchor=\"middle\">1 cm</text></svg></figure><p class=\"geo-given\">After a storm, a weather spotter measures two hailstones and treats each one as a sphere. The small stone has a radius of 1 cm. The large stone has a radius of 4 cm.</p>",
      claims: [
        {
          id: "saratio",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the ratio of the large stone's surface area to the small stone's surface area?",
          choices: [
            { letter: "A", text: "4 : 1" },
            { letter: "B", text: "64 : 1" },
            { letter: "C", text: "16 : 1" },
            { letter: "D", text: "8 : 1" }
          ],
          correct: "C"
        },
        {
          id: "grow",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Inside a storm cloud, a hailstone's radius grows from 1 cm to 2 cm. Which statement is true?",
          choices: [
            { letter: "A", text: "Its surface area becomes 4 times as large and its volume 8 times as large." },
            { letter: "B", text: "Its surface area becomes 8 times as large and its volume 4 times as large." },
            { letter: "C", text: "Its surface area becomes 4 times as large and its volume 6 times as large." },
            { letter: "D", text: "Its surface area and its volume both become 2 times as large." }
          ],
          correct: "A"
        },
        {
          id: "vol",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The small stone has a volume of 4π/3 cm³. What is the volume of the large stone?",
          choices: [
            { letter: "A", text: "64π cm³" },
            { letter: "B", text: "64π/3 cm³" },
            { letter: "C", text: "16π/3 cm³" },
            { letter: "D", text: "256π/3 cm³" }
          ],
          correct: "D"
        },
        {
          id: "egg",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A hailstone shaped like an egg is 2 cm wide and 3 cm long. Is it similar to the small stone, a sphere 2 cm across? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: both are round pieces of ice, so they have the same shape." },
            { letter: "B", text: "No: the width ratio is 2/2 = 1, but the length ratio is 3/2 = 1.5." },
            { letter: "C", text: "No: two hailstones of different sizes can never be similar." },
            { letter: "D", text: "Yes: its length is 1.5 times its width, just like a sphere's." }
          ],
          correct: "B"
        },
        {
          id: "eight",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A third hailstone, also a sphere, has 8 times the volume of the small stone. What is its radius?",
          choices: [
            { letter: "A", text: "about 2.8 cm" },
            { letter: "B", text: "4 cm" },
            { letter: "C", text: "8 cm" },
            { letter: "D", text: "2 cm" }
          ],
          correct: "D"
        },
        {
          id: "mass",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The small stone has a mass of 3.8 g. Both stones are the same kind of ice. What is the mass of the large stone?",
          choices: [
            { letter: "A", text: "6.8 g" },
            { letter: "B", text: "243.2 g" },
            { letter: "C", text: "60.8 g" },
            { letter: "D", text: "15.2 g" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df2-rocks-lab-tank",
      family: "GEO",
      mode: "rocks",
      title: "The Lab's Glass Tank",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A tadpole tank made taller, smaller and bigger.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A glass lab tank shaped like a rectangular prism, open at the top: 50 cm long, 20 cm wide and 30 cm tall, with hidden edges dashed\"><polygon class=\"sh2\" points=\"52,140 202,140 202,50 52,50\"/><polygon class=\"sh2\" points=\"202,140 253.96,110 253.96,20 202,50\"/><path class=\"ln\" d=\"M52 50 L103.96 20 L253.96 20 L202 50\"/><path class=\"ln dash\" d=\"M52 140 L103.96 110 L253.96 110 M103.96 110 L103.96 20\"/><text x=\"127\" y=\"158\" text-anchor=\"middle\">50 cm</text><text x=\"46\" y=\"100\" text-anchor=\"end\">30 cm</text><text x=\"236\" y=\"139\" text-anchor=\"start\">20 cm</text><text class=\"sm\" x=\"179\" y=\"14\" text-anchor=\"middle\">open top</text></svg></figure><p class=\"geo-given\">A biology lab keeps tadpoles in a glass tank. The tank is a rectangular prism 50 cm long, 20 cm wide and 30 cm tall, open at the top. Full, it holds 30,000 cm³ of water. Its glass (the bottom and four sides) has an area of 5,200 cm².</p>",
      claims: [
        {
          id: "tallvol",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A new tank has the same 50 cm by 20 cm bottom but is 60 cm tall. How much water does it hold when full?",
          choices: [
            { letter: "A", text: "120,000 cm³" },
            { letter: "B", text: "240,000 cm³" },
            { letter: "C", text: "15,000 cm³" },
            { letter: "D", text: "60,000 cm³" }
          ],
          correct: "D"
        },
        {
          id: "tallglass",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A new open tank has the same 50 cm by 20 cm bottom but is 60 cm tall. How much glass does it need?",
          choices: [
            { letter: "A", text: "20,800 cm²" },
            { letter: "B", text: "9,400 cm²" },
            { letter: "C", text: "8,400 cm²" },
            { letter: "D", text: "10,400 cm²" }
          ],
          correct: "B"
        },
        {
          id: "half",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A desk tank has every dimension of this tank cut in half. How much water does it hold when full?",
          choices: [
            { letter: "A", text: "5,000 cm³" },
            { letter: "B", text: "15,000 cm³" },
            { letter: "C", text: "3,750 cm³" },
            { letter: "D", text: "7,500 cm³" }
          ],
          correct: "C"
        },
        {
          id: "second",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A second tank is 75 cm long, 30 cm wide and 40 cm tall. Is it similar to this tank? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: 75/50 = 30/20 = 1.5, but 40/30 ≈ 1.33." },
            { letter: "B", text: "Yes: 75/50 = 30/20, so the tanks are similar." },
            { letter: "C", text: "Yes: all rectangular prisms are similar." },
            { letter: "D", text: "No: 75/50 is not equal to 30/20." }
          ],
          correct: "A"
        },
        {
          id: "display",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A display tank is similar to this tank and is 75 cm long. How much glass does it need?",
          choices: [
            { letter: "A", text: "17,550 cm²" },
            { letter: "B", text: "9,450 cm²" },
            { letter: "C", text: "7,800 cm²" },
            { letter: "D", text: "11,700 cm²" }
          ],
          correct: "D"
        },
        {
          id: "bigtank",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A pond tank is similar to this tank and holds 240,000 cm³ when full. How tall is it?",
          choices: [
            { letter: "A", text: "60 cm" },
            { letter: "B", text: "100 cm" },
            { letter: "C", text: "240 cm" },
            { letter: "D", text: "about 84.9 cm" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df2-rocks-glass-prism",
      family: "GEO",
      mode: "rocks",
      title: "The Light-Splitting Prism",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A glass prism from the physics lab, resized.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"A glass prism lying on its side: its ends are equilateral triangles with 4 cm sides and it is 10 cm long; hidden edges are dashed\"><polygon class=\"sh2\" points=\"98,128 255.57,100.22 223.57,44.79 66,72.57\"/><polygon class=\"sh2\" points=\"34,128 98,128 66,72.57\"/><path class=\"ln dash\" d=\"M34 128 L191.57 100.22 L255.57 100.22 M191.57 100.22 L223.57 44.79\"/><path class=\"ln\" d=\"M255.57 100.22 L223.57 44.79\"/><path class=\"thin\" d=\"M66 124 L66 132 M78.54 102.29 L85.46 98.29 M53.46 102.29 L46.54 98.29\"/><text x=\"66\" y=\"146\" text-anchor=\"middle\">4 cm</text><text x=\"190.8\" y=\"136.1\" text-anchor=\"start\">10 cm</text></svg></figure><p class=\"geo-given\">A physics lab uses a glass prism to split white light into colors. The prism's two ends are equilateral triangles with 4 cm sides, and the prism is 10 cm long. Each end has an area of 4√3 cm², the prism's volume is 40√3 cm³, and its total surface area is 8√3 + 120 cm².</p>",
      claims: [
        {
          id: "long",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A longer prism has the same 4 cm triangle ends but is 30 cm long. What is its volume?",
          choices: [
            { letter: "A", text: "120√3 cm³" },
            { letter: "B", text: "360√3 cm³" },
            { letter: "C", text: "1,080√3 cm³" },
            { letter: "D", text: "40√3 cm³" }
          ],
          correct: "A"
        },
        {
          id: "sa20",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Only the length of the prism is doubled, to 20 cm. What is its new total surface area?",
          choices: [
            { letter: "A", text: "32√3 + 480 cm²" },
            { letter: "B", text: "4√3 + 240 cm²" },
            { letter: "C", text: "8√3 + 240 cm²" },
            { letter: "D", text: "16√3 + 240 cm²" }
          ],
          correct: "C"
        },
        {
          id: "souvenir",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A souvenir prism is similar to this one, with 2 cm triangle sides. What is its volume?",
          choices: [
            { letter: "A", text: "8√3 cm³" },
            { letter: "B", text: "5√3 cm³" },
            { letter: "C", text: "20√3 cm³" },
            { letter: "D", text: "10√3 cm³" }
          ],
          correct: "B"
        },
        {
          id: "other",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Another prism has equilateral triangle ends with 6 cm sides and is 16 cm long. Is it similar to this prism? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: both have equilateral triangle ends." },
            { letter: "B", text: "Yes: 6/4 and 16/10 are both equal to 1.5." },
            { letter: "C", text: "No: equilateral triangles of different sizes are never similar." },
            { letter: "D", text: "No: 6/4 = 1.5, but 16/10 = 1.6." }
          ],
          correct: "D"
        },
        {
          id: "display",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A display prism is similar to this one and has a volume of 320√3 cm³. How long is it?",
          choices: [
            { letter: "A", text: "about 28.3 cm" },
            { letter: "B", text: "20 cm" },
            { letter: "C", text: "8 cm" },
            { letter: "D", text: "80 cm" }
          ],
          correct: "B"
        },
        {
          id: "endarea",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A larger prism is similar to this one and is 25 cm long. What is the area of one of its triangle ends?",
          choices: [
            { letter: "A", text: "6.25√3 cm²" },
            { letter: "B", text: "10√3 cm²" },
            { letter: "C", text: "25√3 cm²" },
            { letter: "D", text: "62.5√3 cm²" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df2-rocks-beaker",
      family: "GEO",
      mode: "rocks",
      title: "The Chemistry Beaker",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A cylinder beaker made wider, taller and smaller.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"A lab beaker shaped like a cylinder, radius 4 cm and height 12 cm, partly filled with liquid and standing on a hot plate\"><path class=\"sh2\" d=\"M74 60 V138 A36 8 0 0 0 146 138 V60 A36 8 0 0 1 74 60 Z\"/><ellipse class=\"thin\" cx=\"110\" cy=\"60\" rx=\"36\" ry=\"8\"/><path class=\"ln\" d=\"M74 30 V138 A36 8 0 0 0 146 138 V30\"/><ellipse class=\"ln\" cx=\"110\" cy=\"30\" rx=\"36\" ry=\"8\"/><path class=\"thin\" d=\"M146 30 l8 -5\"/><line class=\"thin dash\" x1=\"110\" y1=\"30\" x2=\"146\" y2=\"30\"/><circle class=\"dt\" cx=\"110\" cy=\"30\" r=\"2.5\"/><path class=\"thin\" d=\"M74 78 h8 M74 96 h8 M74 114 h8 M74 132 h8\"/><path class=\"thin\" d=\"M54 30 h8 M54 138 h8 M58 30 V138\"/><text x=\"52\" y=\"89\" text-anchor=\"end\">12 cm</text><text x=\"128\" y=\"18\" text-anchor=\"middle\">4 cm</text><rect class=\"sh\" x=\"60\" y=\"146\" width=\"100\" height=\"12\" rx=\"3\"/><circle class=\"thin\" cx=\"102\" cy=\"110\" r=\"3\"/><circle class=\"thin\" cx=\"120\" cy=\"94\" r=\"2.5\"/><circle class=\"thin\" cx=\"112\" cy=\"126\" r=\"2\"/><text class=\"sm\" x=\"172\" y=\"156\" text-anchor=\"start\">hot plate</text></svg></figure><p class=\"geo-given\">A chemistry beaker is a cylinder with an inside radius of 4 cm and an inside height of 12 cm. Filled to the top, it holds 192π cm³.</p>",
      claims: [
        {
          id: "wide",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A wider beaker has a radius of 8 cm and the same 12 cm height. How much does it hold?",
          choices: [
            { letter: "A", text: "384π cm³" },
            { letter: "B", text: "768π cm³" },
            { letter: "C", text: "1,536π cm³" },
            { letter: "D", text: "3,072π cm³" }
          ],
          correct: "B"
        },
        {
          id: "triple",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Which change to the beaker makes it hold exactly 3 times as much?",
          choices: [
            { letter: "A", text: "Triple the height only." },
            { letter: "B", text: "Triple both the radius and the height." },
            { letter: "C", text: "Add 3 cm to the radius and 3 cm to the height." },
            { letter: "D", text: "Triple the radius only." }
          ],
          correct: "A"
        },
        {
          id: "small",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A small beaker is similar to this one and is 9 cm tall. How much does it hold?",
          choices: [
            { letter: "A", text: "9π cm³" },
            { letter: "B", text: "144π cm³" },
            { letter: "C", text: "108π cm³" },
            { letter: "D", text: "81π cm³" }
          ],
          correct: "D"
        },
        {
          id: "grad",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A graduated cylinder has an inside radius of 2 cm and an inside height of 20 cm. Is it similar to the beaker? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: both are cylinders, and all cylinders are similar." },
            { letter: "B", text: "Yes: halving a cylinder's radius always gives a similar cylinder." },
            { letter: "C", text: "No: 2/4 = 0.5, but 20/12 ≈ 1.67." },
            { letter: "D", text: "No: it holds 80π cm³, which is more than the beaker holds." }
          ],
          correct: "C"
        },
        {
          id: "jar",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A storage jar is similar to the beaker and holds 1,536π cm³. What is its inside radius?",
          choices: [
            { letter: "A", text: "8 cm" },
            { letter: "B", text: "about 11.3 cm" },
            { letter: "C", text: "24 cm" },
            { letter: "D", text: "32 cm" }
          ],
          correct: "A"
        },
        {
          id: "nottrue",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A new beaker is similar to this one, with every length doubled. Which statement is NOT true?",
          choices: [
            { letter: "A", text: "It holds 8 times as much." },
            { letter: "B", text: "Its inside height is 24 cm." },
            { letter: "C", text: "Its base has 4 times the area." },
            { letter: "D", text: "Its curved side has 8 times the area." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df2-rocks-model-rocket",
      family: "GEO",
      mode: "rocks",
      title: "The Rocket Club's Model",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A cone-nosed model and the launch rocket it copies.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 142\" role=\"img\" aria-label=\"A model rocket lying on its side: a cylinder body 50 cm long with radius 3 cm, and a cone nose 4 cm long with slant height 5 cm; fins at the tail\"><polygon class=\"sh2\" points=\"30,55 62,55 30,35\"/><polygon class=\"sh2\" points=\"30,85 62,85 30,105\"/><rect class=\"sh\" x=\"30\" y=\"55\" width=\"250\" height=\"30\"/><polygon class=\"sh\" points=\"280,55 300,70 280,85\"/><ellipse class=\"ln\" cx=\"30\" cy=\"70\" rx=\"5\" ry=\"15\"/><path class=\"thin\" d=\"M120 55 V85 M220 55 V85\"/><circle class=\"thin\" cx=\"196\" cy=\"70\" r=\"5\"/><line class=\"thin dash\" x1=\"276\" y1=\"70\" x2=\"276\" y2=\"55\"/><text x=\"271\" y=\"75\" text-anchor=\"end\">3 cm</text><path class=\"thin\" d=\"M30 112 V124 M280 112 V124 M300 112 V124 M30 118 H300\"/><text x=\"155\" y=\"136\" text-anchor=\"middle\">50 cm</text><text x=\"290\" y=\"136\" text-anchor=\"middle\">4 cm</text><text x=\"288\" y=\"47\" text-anchor=\"middle\">5 cm</text></svg></figure><p class=\"geo-given\">A rocket club builds a model of a real rocket. The model's body is a cylinder 50 cm long with a radius of 3 cm, and its nose is a cone 4 cm long with a slant height of 5 cm. The painted outside (the body's curved side and the cone's side) is 315π cm², and the space inside is 462π cm³.</p>",
      claims: [
        {
          id: "realpaint",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The real rocket is similar to the model at a scale of 1 : 80. To the nearest square meter, what is the area of its matching painted surface? (1 m² = 10,000 cm²)",
          choices: [
            { letter: "A", text: "8 m²" },
            { letter: "B", text: "63,335 m²" },
            { letter: "C", text: "633 m²" },
            { letter: "D", text: "202 m²" }
          ],
          correct: "C"
        },
        {
          id: "realspace",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The real rocket is similar to the model at a scale of 1 : 80. To the nearest cubic meter, how much space is inside it? (1 m³ = 1,000,000 cm³)",
          choices: [
            { letter: "A", text: "74,312 m³" },
            { letter: "B", text: "237 m³" },
            { letter: "C", text: "9 m³" },
            { letter: "D", text: "743 m³" }
          ],
          correct: "D"
        },
        {
          id: "longbody",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A builder makes the body 75 cm long instead of 50 cm, with the same 3 cm radius and the same nose cone. What is the new painted area?",
          choices: [
            { letter: "A", text: "450π cm²" },
            { letter: "B", text: "465π cm²" },
            { letter: "C", text: "472.5π cm²" },
            { letter: "D", text: "708.75π cm²" }
          ],
          correct: "B"
        },
        {
          id: "second",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Another club's rocket has a body radius of 4.5 cm, a body 75 cm long and a cone nose 5 cm long. Is it similar to this model? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: 4.5/3 = 75/50 = 1.5, but 5/4 = 1.25." },
            { letter: "B", text: "Yes: the bodies are similar, so the whole rockets are similar." },
            { letter: "C", text: "Yes: every length of that rocket is longer than the model's." },
            { letter: "D", text: "No: 4.5/3 is not equal to 75/50." }
          ],
          correct: "A"
        },
        {
          id: "expr",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A smaller model is similar to this one, with a cone nose 2 cm long. Which expression gives the space inside it, in cm³?",
          choices: [
            { letter: "A", text: "462π · (1/2)" },
            { letter: "B", text: "462π · 2³" },
            { letter: "C", text: "462π · (1/2)³" },
            { letter: "D", text: "462π · (1/2)²" }
          ],
          correct: "C"
        },
        {
          id: "kai",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "Kai builds a similar model with every length 3 times as long. He says it needs 3 times the paint and holds 9 times the space. Which correction is right?",
          choices: [
            { letter: "A", text: "It needs 9 times the paint and holds 9 times the space." },
            { letter: "B", text: "It needs 9 times the paint and holds 27 times the space." },
            { letter: "C", text: "Kai is right about both." },
            { letter: "D", text: "It needs 3 times the paint and holds 27 times the space." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df2-rocks-volcano",
      family: "GEO",
      mode: "rocks",
      title: "The Science-Fair Volcano",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A clay cone volcano and the mountain it copies.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A clay volcano model shaped like a cone: base radius 15 cm, height 20 cm and slant height 25 cm, with a puff of smoke at the top\"><path class=\"sh\" d=\"M35 130 L110 30 L185 130 A75 11 0 0 1 35 130 Z\"/><path class=\"thin dash\" d=\"M35 130 A75 11 0 0 1 185 130\"/><line class=\"thin dash\" x1=\"110\" y1=\"30\" x2=\"110\" y2=\"130\"/><line class=\"thin\" x1=\"110\" y1=\"130\" x2=\"185\" y2=\"130\"/><path class=\"thin\" d=\"M110 122 H118 V130\"/><circle class=\"dt\" cx=\"110\" cy=\"130\" r=\"2.5\"/><path class=\"thin\" d=\"M110 30 q-12 -8 -6 -18 M110 30 q10 -6 8 -20\"/><circle class=\"thin\" cx=\"100\" cy=\"8\" r=\"5\"/><circle class=\"thin\" cx=\"124\" cy=\"5\" r=\"4\"/><text x=\"115\" y=\"112\" text-anchor=\"start\">20 cm</text><text x=\"160.3\" y=\"74.4\" text-anchor=\"start\">25 cm</text><text x=\"147.5\" y=\"158\" text-anchor=\"middle\">15 cm</text></svg></figure><p class=\"geo-given\">For the science fair, Rosa shapes a clay volcano as a cone with a base radius of 15 cm, a height of 20 cm and a slant height of 25 cm. Its volume is 1,500π cm³, and its sloped side has an area of 375π cm².</p>",
      claims: [
        {
          id: "realr",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A real volcano is similar to Rosa's model and is 1,000 m tall. What is its base radius?",
          choices: [
            { letter: "A", text: "1,250 m" },
            { letter: "B", text: "7,500 m" },
            { letter: "C", text: "about 1,333 m" },
            { letter: "D", text: "750 m" }
          ],
          correct: "D"
        },
        {
          id: "wide",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Rosa doubles the base radius to 30 cm and keeps the 20 cm height. Which statement about the volume is true?",
          choices: [
            { letter: "A", text: "It becomes 8 times as large: 12,000π cm³." },
            { letter: "B", text: "It stays 1,500π cm³, since the height is the same." },
            { letter: "C", text: "It becomes 4 times as large: 6,000π cm³." },
            { letter: "D", text: "It doubles: 3,000π cm³." }
          ],
          correct: "C"
        },
        {
          id: "tall",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Rosa makes a second volcano twice as tall, 40 cm, with the same 15 cm base radius. To the nearest square centimeter, what is the area of its sloped side?",
          choices: [
            { letter: "A", text: "2,013 cm²" },
            { letter: "B", text: "1,885 cm²" },
            { letter: "C", text: "2,356 cm²" },
            { letter: "D", text: "4,712 cm²" }
          ],
          correct: "A"
        },
        {
          id: "eighth",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A smaller volcano is similar to Rosa's and uses 1/8 as much clay. What is its base radius?",
          choices: [
            { letter: "A", text: "1.875 cm" },
            { letter: "B", text: "7.5 cm" },
            { letter: "C", text: "about 5.3 cm" },
            { letter: "D", text: "5 cm" }
          ],
          correct: "B"
        },
        {
          id: "cone2",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Another clay cone has a base radius of 12 cm and a slant height of 20 cm. Is it similar to Rosa's volcano? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: its height is not 0.8 × 20 cm." },
            { letter: "B", text: "No: a cone's slant ratio can never equal its radius ratio." },
            { letter: "C", text: "Yes: all cones are similar." },
            { letter: "D", text: "Yes: 12/15 = 20/25 = 0.8." }
          ],
          correct: "D"
        },
        {
          id: "realside",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A real volcano is similar to the model, with every length 5,000 times as long. To the nearest tenth of a square kilometer, what is the area of its sloped side? (1 km² = 10,000,000,000 cm²)",
          choices: [
            { letter: "A", text: "2.9 km²" },
            { letter: "B", text: "14,726.2 km²" },
            { letter: "C", text: "0.9 km²" },
            { letter: "D", text: "29.5 km²" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df2-sky-kite",
      family: "GEO",
      mode: "sky",
      title: "The Beach Kite",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A kite stretched, shrunk and copied for the beach shop.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A kite with a vertical spine 50 cm long and a cross spar 48 cm long that meet at right angles; the two top sides are 30 cm and the two bottom sides are 40 cm; a string trails from the bottom\"><polygon class=\"sh\" points=\"100,18 152.8,57.6 100,128 47.2,57.6\"/><line class=\"thin dash\" x1=\"100\" y1=\"18\" x2=\"100\" y2=\"128\"/><line class=\"thin dash\" x1=\"47.2\" y1=\"57.6\" x2=\"152.8\" y2=\"57.6\"/><path class=\"thin\" d=\"M100 51.6 H106 V57.6\"/><path class=\"thin\" d=\"M76 41 L71.2 34.6 M128.8 34.6 L124 41 M75.6 88.8 L69.2 93.6 M78 92 L71.6 96.8 M130.8 93.6 L124.4 88.8 M128.4 96.8 L122 92\"/><path class=\"thin dash\" d=\"M104 18 H178 M104 128 H178\"/><path class=\"thin\" d=\"M170 18 V128 M166 18 H174 M166 128 H174\"/><text x=\"178\" y=\"78\" text-anchor=\"start\">50 cm</text><text x=\"79\" y=\"72\" text-anchor=\"middle\">48 cm</text><text x=\"66\" y=\"32\" text-anchor=\"end\">30 cm</text><text x=\"64\" y=\"106\" text-anchor=\"end\">40 cm</text><path class=\"thin\" d=\"M100 128 q50 34 120 26 t90 8\"/></svg></figure><p class=\"geo-given\">A beach shop's kite has a spine 50 cm long and a cross spar 48 cm long. They meet at right angles, and the spar crosses the spine 18 cm below the top. The kite's sides are 30 cm, 30 cm, 40 cm and 40 cm, so its perimeter is 140 cm. Its area is 1,200 cm².</p>",
      claims: [
        {
          id: "spine",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A new kite doubles the spine to 100 cm and keeps the 48 cm spar. What is its area?",
          choices: [
            { letter: "A", text: "2,400 cm²" },
            { letter: "B", text: "4,800 cm²" },
            { letter: "C", text: "9,600 cm²" },
            { letter: "D", text: "1,250 cm²" }
          ],
          correct: "A"
        },
        {
          id: "perim",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Every length of the kite is multiplied by 1.5. What is the new perimeter?",
          choices: [
            { letter: "A", text: "472.5 cm" },
            { letter: "B", text: "210 cm" },
            { letter: "C", text: "141.5 cm" },
            { letter: "D", text: "315 cm" }
          ],
          correct: "B"
        },
        {
          id: "mini",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A mini kite is similar to this one and has a spine 25 cm long. What is its area?",
          choices: [
            { letter: "A", text: "312.5 cm²" },
            { letter: "B", text: "600 cm²" },
            { letter: "C", text: "150 cm²" },
            { letter: "D", text: "300 cm²" }
          ],
          correct: "D"
        },
        {
          id: "second",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A second kite has a 48 cm spar and a 60 cm spine that meet at right angles, with the spar 18 cm below the top. Is it similar to this kite? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: all kites are similar." },
            { letter: "B", text: "Yes: stretching one diagonal of a kite keeps it similar." },
            { letter: "C", text: "No: 48/48 = 1, but 60/50 = 1.2." },
            { letter: "D", text: "No: its spine is shorter than this kite's spine." }
          ],
          correct: "C"
        },
        {
          id: "giant",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A giant kite is similar to this one and has an area of 4,800 cm². How long is its spine?",
          choices: [
            { letter: "A", text: "about 79.4 cm" },
            { letter: "B", text: "100 cm" },
            { letter: "C", text: "96 cm" },
            { letter: "D", text: "200 cm" }
          ],
          correct: "B"
        },
        {
          id: "nottrue",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A festival kite is similar to this one, with every length 3 times as long. Which statement is NOT true?",
          choices: [
            { letter: "A", text: "Its area is 10,800 cm²." },
            { letter: "B", text: "Its spine is 150 cm." },
            { letter: "C", text: "Its area is 3,600 cm²." },
            { letter: "D", text: "Its perimeter is 420 cm." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df2-sky-bus-map",
      family: "GEO",
      mode: "sky",
      title: "The Downtown Bus Map",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A map zone copied, enlarged and stretched.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A city bus map on a 1-centimeter grid; the downtown zone is a shaded rectangle 8 cm long and 5 cm wide; a bus route runs along the edge of the map; a north arrow is at the right\"><rect class=\"thin\" x=\"14\" y=\"10\" width=\"220\" height=\"140\"/><path class=\"gr\" d=\"M29 10 V150 M44 10 V150 M59 10 V150 M74 10 V150 M89 10 V150 M104 10 V150 M119 10 V150 M134 10 V150 M149 10 V150 M164 10 V150 M179 10 V150 M194 10 V150 M209 10 V150 M224 10 V150 M14 25 H234 M14 40 H234 M14 55 H234 M14 70 H234 M14 85 H234 M14 100 H234 M14 115 H234 M14 130 H234 M14 145 H234\"/><rect class=\"sh\" x=\"44\" y=\"40\" width=\"120\" height=\"75\"/><path class=\"thin dash\" d=\"M14 140 H209 V10\"/><circle class=\"dt\" cx=\"74\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"149\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"209\" cy=\"85\" r=\"3\"/><text x=\"104\" y=\"132\" text-anchor=\"middle\">8 cm</text><text x=\"170\" y=\"82.5\" text-anchor=\"start\">5 cm</text><path class=\"ln\" d=\"M276 78 V44 M268 54 L276 40 L284 54\"/><text x=\"276\" y=\"30\" text-anchor=\"middle\">N</text><text class=\"sm\" x=\"276\" y=\"112\" text-anchor=\"middle\">bus map</text></svg></figure><p class=\"geo-given\">On a city bus map, the downtown zone is a rectangle 8 cm long and 5 cm wide. Its area on the map is 40 cm² and its perimeter is 26 cm. The map scale is 1 cm = 0.5 km.</p>",
      claims: [
        {
          id: "copy",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The map is copied at 200%, so every length on it doubles. What is the area of the zone on the copy?",
          choices: [
            { letter: "A", text: "80 cm²" },
            { letter: "B", text: "320 cm²" },
            { letter: "C", text: "160 cm²" },
            { letter: "D", text: "52 cm²" }
          ],
          correct: "C"
        },
        {
          id: "scale",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The map is copied at 200%, so every length on it doubles. What is the scale of the copy?",
          choices: [
            { letter: "A", text: "1 cm = 0.125 km" },
            { letter: "B", text: "1 cm = 0.25 km" },
            { letter: "C", text: "1 cm = 0.5 km" },
            { letter: "D", text: "1 cm = 1 km" }
          ],
          correct: "B"
        },
        {
          id: "real",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the real area of the downtown zone?",
          choices: [
            { letter: "A", text: "10 km²" },
            { letter: "B", text: "40 km²" },
            { letter: "C", text: "20 km²" },
            { letter: "D", text: "5 km²" }
          ],
          correct: "A"
        },
        {
          id: "pocket",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A pocket map shows the zone as a rectangle 4 cm by 3 cm. Is it similar to the zone on this map? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: both are rectangles, and all rectangles are similar." },
            { letter: "B", text: "Yes: 4/8 = 3/5." },
            { letter: "C", text: "No: a smaller map can never be similar to a larger one." },
            { letter: "D", text: "No: 4/8 = 0.5, but 3/5 = 0.6." }
          ],
          correct: "D"
        },
        {
          id: "wall",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "On a wall map that is a similar enlargement, the zone covers 360 cm². How long is the zone on the wall map?",
          choices: [
            { letter: "A", text: "24 cm" },
            { letter: "B", text: "about 16.6 cm" },
            { letter: "C", text: "15 cm" },
            { letter: "D", text: "72 cm" }
          ],
          correct: "A"
        },
        {
          id: "stretch",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A designer stretches the map sideways only: the zone's 8 cm length becomes 12 cm and its 5 cm width stays. Which statement is true?",
          choices: [
            { letter: "A", text: "The area becomes 60 cm², and the zone is still similar." },
            { letter: "B", text: "The area becomes 90 cm², since lengths grew by 1.5." },
            { letter: "C", text: "The area stays 40 cm², since only one side changed." },
            { letter: "D", text: "The area becomes 60 cm², and the zone is no longer similar." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df2-sky-truss-bridge",
      family: "GEO",
      mode: "sky",
      title: "The Truss Footbridge",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Steel triangles on a river footbridge, changed and copied.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A footbridge over a river; its side is a truss of congruent isosceles triangles standing on the deck; the shaded triangle has a base of 6 m and legs of 5 m, and the truss is 4 m tall\"><polygon class=\"sh\" points=\"52,124 88,76 124,124\"/><path class=\"ln\" d=\"M52 124 L88 76 L124 124 M124 124 L160 76 L196 124 M196 124 L232 76 L268 124 M88 76 H232\"/><path class=\"ln\" d=\"M30 124 H290\"/><path class=\"thin\" d=\"M30 124 V160 M290 124 V160\"/><path class=\"thin\" d=\"M24 152 q10 -6 20 0 q10 -6 20 0 q10 -6 20 0 q10 -6 20 0 q10 -6 20 0 q10 -6 20 0 q10 -6 20 0 q10 -6 20 0 q10 -6 20 0 q10 -6 20 0 q10 -6 20 0 q10 -6 20 0 q10 -6 20 0\"/><path class=\"thin dash\" d=\"M236 76 H286\"/><path class=\"thin\" d=\"M278 76 V124 M274 76 H282 M274 124 H282\"/><text x=\"284\" y=\"105\" text-anchor=\"start\">4 m</text><text x=\"88\" y=\"141\" text-anchor=\"middle\">6 m</text><text x=\"59.6\" y=\"97.2\" text-anchor=\"end\">5 m</text></svg></figure><p class=\"geo-given\">The side of a river footbridge is a truss of congruent isosceles triangles. Each triangle has a base of 6 m, legs of 5 m and a height of 4 m, so its perimeter is 16 m and its area is 12 m². Each triangle is welded from three steel bars.</p>",
      claims: [
        {
          id: "model",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A model of the bridge is built at a scale of 1 : 50. What is the area of one triangle on the model? (1 m² = 10,000 cm²)",
          choices: [
            { letter: "A", text: "2,400 cm²" },
            { letter: "B", text: "0.96 cm²" },
            { letter: "C", text: "4.8 cm²" },
            { letter: "D", text: "48 cm²" }
          ],
          correct: "D"
        },
        {
          id: "taller",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Engineers make each triangle 8 m tall instead of 4 m, with the same 6 m base. What is the area of one new triangle?",
          choices: [
            { letter: "A", text: "24 m²" },
            { letter: "B", text: "12 m²" },
            { letter: "C", text: "16 m²" },
            { letter: "D", text: "48 m²" }
          ],
          correct: "A"
        },
        {
          id: "tallper",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Engineers make each triangle 8 m tall instead of 4 m, with the same 6 m base. To the nearest tenth of a meter, what is the perimeter of one new triangle?",
          choices: [
            { letter: "A", text: "22.0 m" },
            { letter: "B", text: "32.0 m" },
            { letter: "C", text: "23.1 m" },
            { letter: "D", text: "26.0 m" }
          ],
          correct: "C"
        },
        {
          id: "other",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Another bridge's truss triangles have a base of 9 m and legs of 7.5 m. Are they similar to these triangles? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: all isosceles triangles are similar." },
            { letter: "B", text: "Yes: 9/6 = 7.5/5 = 1.5 for all three sides." },
            { letter: "C", text: "No: 9/6 is not equal to 7.5/5." },
            { letter: "D", text: "No: the heights must be given before we can decide." }
          ],
          correct: "B"
        },
        {
          id: "big",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A larger bridge uses similar triangles, each with an area of 48 m². How long is each base?",
          choices: [
            { letter: "A", text: "about 9.5 m" },
            { letter: "B", text: "10 m" },
            { letter: "C", text: "12 m" },
            { letter: "D", text: "24 m" }
          ],
          correct: "C"
        },
        {
          id: "steel",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A larger bridge uses similar triangles with 15 m bases. How many meters of steel bar are in one of its triangles?",
          choices: [
            { letter: "A", text: "25 m" },
            { letter: "B", text: "40 m" },
            { letter: "C", text: "100 m" },
            { letter: "D", text: "250 m" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df2-sky-containers",
      family: "GEO",
      mode: "sky",
      title: "Twenty-Foot and Forty-Foot Boxes",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Two shipping containers, a toy one and a bigger plan.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"Two shipping containers drawn to the same scale as rectangular prisms: one 20 ft long and one 40 ft long, each 8 ft wide and 8.5 ft tall\"><polygon class=\"sh2\" points=\"56,70 156,70 156,27.5 56,27.5\"/><polygon class=\"sh2\" points=\"56,27.5 156,27.5 190.64,7.5 90.64,7.5\"/><polygon class=\"sh2\" points=\"156,70 190.64,50 190.64,7.5 156,27.5\"/><path class=\"ln dash\" d=\"M56 70 L90.64 50 L190.64 50 M90.64 50 L90.64 7.5\"/><path class=\"gr\" d=\"M66 30.5 V67 M76 30.5 V67 M86 30.5 V67 M96 30.5 V67 M106 30.5 V67 M116 30.5 V67 M126 30.5 V67 M136 30.5 V67 M146 30.5 V67\"/><text x=\"106\" y=\"53.8\" text-anchor=\"middle\">20 ft</text><text x=\"50\" y=\"53.8\" text-anchor=\"end\">8.5 ft</text><polygon class=\"sh2\" points=\"56,150 256,150 256,107.5 56,107.5\"/><polygon class=\"sh2\" points=\"56,107.5 256,107.5 290.64,87.5 90.64,87.5\"/><polygon class=\"sh2\" points=\"256,150 290.64,130 290.64,87.5 256,107.5\"/><path class=\"ln dash\" d=\"M56 150 L90.64 130 L290.64 130 M90.64 130 L90.64 87.5\"/><path class=\"gr\" d=\"M66 110.5 V147 M76 110.5 V147 M86 110.5 V147 M96 110.5 V147 M106 110.5 V147 M116 110.5 V147 M126 110.5 V147 M136 110.5 V147 M146 110.5 V147 M156 110.5 V147 M166 110.5 V147 M176 110.5 V147 M186 110.5 V147 M196 110.5 V147 M206 110.5 V147 M216 110.5 V147 M226 110.5 V147 M236 110.5 V147 M246 110.5 V147\"/><text x=\"156\" y=\"133.8\" text-anchor=\"middle\">40 ft</text><text x=\"50\" y=\"133.8\" text-anchor=\"end\">8.5 ft</text><text x=\"181.3\" y=\"68\" text-anchor=\"start\">8 ft</text></svg></figure><p class=\"geo-given\">At a port, a short shipping container is a rectangular prism 20 ft long, 8 ft wide and 8.5 ft tall. It holds 1,360 ft³, and its outside surface area is 796 ft². A long container is 40 ft long, 8 ft wide and 8.5 ft tall.</p>",
      claims: [
        {
          id: "vol40",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "What is the volume of the long container?",
          choices: [
            { letter: "A", text: "5,440 ft³" },
            { letter: "B", text: "2,720 ft³" },
            { letter: "C", text: "10,880 ft³" },
            { letter: "D", text: "1,380 ft³" }
          ],
          correct: "B"
        },
        {
          id: "paint",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Both containers are painted on the outside. How much more surface does the long container have than the short one?",
          choices: [
            { letter: "A", text: "2,388 ft²" },
            { letter: "B", text: "340 ft²" },
            { letter: "C", text: "660 ft²" },
            { letter: "D", text: "796 ft²" }
          ],
          correct: "C"
        },
        {
          id: "similar",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Is the long container similar to the short one? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: its volume is 4 times as much." },
            { letter: "B", text: "Yes: all rectangular prisms are similar." },
            { letter: "C", text: "Yes: every length of the long container is doubled." },
            { letter: "D", text: "No: 40/20 = 2, but 8/8 = 1." }
          ],
          correct: "D"
        },
        {
          id: "toy",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A toy-shop model of the short container is similar to it at a scale of 1 : 40. What is the model's volume? (1 ft³ = 1,728 in³)",
          choices: [
            { letter: "A", text: "36.72 in³" },
            { letter: "B", text: "1,468.8 in³" },
            { letter: "C", text: "58,752 in³" },
            { letter: "D", text: "about 0.02 in³" }
          ],
          correct: "A"
        },
        {
          id: "fromsa",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A new container is similar to the short one and has an outside surface area of 1,791 ft². How long is it?",
          choices: [
            { letter: "A", text: "about 26.2 ft" },
            { letter: "B", text: "30 ft" },
            { letter: "C", text: "12 ft" },
            { letter: "D", text: "45 ft" }
          ],
          correct: "B"
        },
        {
          id: "equation",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A designer wants a container similar to the short one that holds twice as much. Which equation gives its length L, in feet?",
          choices: [
            { letter: "A", text: "(L/20)³ = 2" },
            { letter: "B", text: "(20/L)³ = 2" },
            { letter: "C", text: "L/20 = 2" },
            { letter: "D", text: "(L/20)² = 2" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df2-sky-drone-photo",
      family: "GEO",
      mode: "sky",
      title: "The Drone's Photo",
      kind: "Changing dimensions · G.DF.2",
      blurb: "How much ground a survey drone sees from higher up.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"Left, side view: a drone 50 m above flat ground; lines from the camera reach the ground 80 m apart. Right, top view: the photo covers a rectangle of ground 80 m by 60 m\"><line class=\"ln\" x1=\"8\" y1=\"116\" x2=\"152\" y2=\"116\"/><line class=\"thin\" x1=\"80\" y1=\"36\" x2=\"16\" y2=\"116\"/><line class=\"thin\" x1=\"80\" y1=\"36\" x2=\"144\" y2=\"116\"/><line class=\"ac\" x1=\"16\" y1=\"116\" x2=\"144\" y2=\"116\"/><line class=\"thin dash\" x1=\"80\" y1=\"36\" x2=\"80\" y2=\"116\"/><path class=\"thin\" d=\"M80 109 H87 V116\"/><rect class=\"sh2\" x=\"72\" y=\"29\" width=\"16\" height=\"7\" rx=\"2\"/><path class=\"thin\" d=\"M72 31 H62 M88 31 H98\"/><ellipse class=\"thin\" cx=\"62\" cy=\"28\" rx=\"8\" ry=\"2.5\"/><ellipse class=\"thin\" cx=\"98\" cy=\"28\" rx=\"8\" ry=\"2.5\"/><text x=\"75\" y=\"100\" text-anchor=\"end\">50 m</text><text x=\"80\" y=\"134\" text-anchor=\"middle\">80 m</text><rect class=\"sh\" x=\"172\" y=\"20\" width=\"128\" height=\"96\"/><path class=\"gr\" d=\"M188 20 V116 M204 20 V116 M220 20 V116 M236 20 V116 M252 20 V116 M268 20 V116 M284 20 V116\"/><text x=\"236\" y=\"134\" text-anchor=\"middle\">80 m</text><text x=\"166\" y=\"73\" text-anchor=\"end\">60 m</text><text class=\"sm\" x=\"80\" y=\"156\" text-anchor=\"middle\">side view</text><text class=\"sm\" x=\"236\" y=\"156\" text-anchor=\"middle\">top view of the photo</text></svg></figure><p class=\"geo-given\">A survey drone hovers 50 m above flat ground and takes a photo straight down. The photo covers a rectangle of ground 80 m long and 60 m wide: an area of 4,800 m² and a perimeter of 280 m. When the drone flies higher, the covered rectangle stays similar, and its lengths grow in proportion to the height.</p>",
      claims: [
        {
          id: "climb",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The drone climbs to 100 m. How much ground does one photo cover?",
          choices: [
            { letter: "A", text: "19,200 m²" },
            { letter: "B", text: "9,600 m²" },
            { letter: "C", text: "38,400 m²" },
            { letter: "D", text: "14,300 m²" }
          ],
          correct: "A"
        },
        {
          id: "height",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "At what height does one photo cover 10,800 m²?",
          choices: [
            { letter: "A", text: "about 65.5 m" },
            { letter: "B", text: "about 103.9 m" },
            { letter: "C", text: "112.5 m" },
            { letter: "D", text: "75 m" }
          ],
          correct: "D"
        },
        {
          id: "lens",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "With a new lens, a photo from 50 m covers a rectangle 120 m long and still 60 m wide. What area does it cover?",
          choices: [
            { letter: "A", text: "360 m²" },
            { letter: "B", text: "7,200 m²" },
            { letter: "C", text: "10,800 m²" },
            { letter: "D", text: "4,840 m²" }
          ],
          correct: "B"
        },
        {
          id: "wide",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A wide-angle camera covers a rectangle 100 m long and 75 m wide. Is it similar to the 80 m by 60 m rectangle? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: all rectangles are similar." },
            { letter: "B", text: "No: 100/80 is not equal to 75/60." },
            { letter: "C", text: "Yes: 100/80 = 75/60 = 1.25." },
            { letter: "D", text: "No: similar rectangles must grow by equal amounts, and 20 ≠ 15." }
          ],
          correct: "C"
        },
        {
          id: "perim",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the perimeter of the ground covered by one photo taken from 125 m?",
          choices: [
            { letter: "A", text: "4,375 m" },
            { letter: "B", text: "355 m" },
            { letter: "C", text: "1,750 m" },
            { letter: "D", text: "700 m" }
          ],
          correct: "D"
        },
        {
          id: "lower",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The drone flies lower, at 25 m, to get sharper photos. Which statement is true?",
          choices: [
            { letter: "A", text: "Each photo covers the same area, just in more detail." },
            { letter: "B", text: "Each photo covers 1/2 the area, so about 2 times as many photos are needed." },
            { letter: "C", text: "Each photo covers 1/4 the area, so about 4 times as many photos are needed." },
            { letter: "D", text: "Each photo covers 1/8 the area, so about 8 times as many photos are needed." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df2-sky-model-plane",
      family: "GEO",
      mode: "sky",
      title: "The Museum's Model Plane",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A 1 : 20 model of a small plane, hanging in a museum.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Top view of a small real plane: wingspan 11 m and length 8 m from nose to tail\"><polygon class=\"sh2\" points=\"101,62 27.5,66 27.5,80 101,84\"/><polygon class=\"sh2\" points=\"119,62 192.5,66 192.5,80 119,84\"/><polygon class=\"sh2\" points=\"104,126 78,130 78,138 104,138\"/><polygon class=\"sh2\" points=\"116,126 142,130 142,138 116,138\"/><path class=\"sh\" d=\"M110 22 C120 28 120 52 119 60 L115 142 H105 L101 60 C100 52 100 28 110 22 Z\"/><path class=\"thin dash\" d=\"M118 22 H222 M118 142 H222\"/><path class=\"thin\" d=\"M216 22 V142 M212 22 H220 M212 142 H220\"/><text x=\"222\" y=\"87\" text-anchor=\"start\">8 m</text><path class=\"thin dash\" d=\"M27.5 84 V152 M192.5 84 V152\"/><path class=\"thin\" d=\"M27.5 150 H192.5 M27.5 146 V154 M192.5 146 V154\"/><text x=\"110\" y=\"166\" text-anchor=\"middle\">11 m</text><text class=\"sm\" x=\"272\" y=\"40\" text-anchor=\"middle\">top view</text></svg></figure><p class=\"geo-given\">A travel museum hangs a model plane that is similar to a real plane at a scale of 1 : 20. The real plane has an 11 m wingspan and is 8 m long. Its wings have an area of 16 m², and its fuel tank holds 200 L.</p>",
      claims: [
        {
          id: "span",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the model's wingspan, in centimeters?",
          choices: [
            { letter: "A", text: "5.5 cm" },
            { letter: "B", text: "2.75 cm" },
            { letter: "C", text: "55 cm" },
            { letter: "D", text: "22,000 cm" }
          ],
          correct: "C"
        },
        {
          id: "wing",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the area of the model's wings, in square centimeters? (1 m² = 10,000 cm²)",
          choices: [
            { letter: "A", text: "400 cm²" },
            { letter: "B", text: "20 cm²" },
            { letter: "C", text: "0.04 cm²" },
            { letter: "D", text: "8,000 cm²" }
          ],
          correct: "A"
        },
        {
          id: "tank",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "If the model had a tank similar to the real one, how much would it hold, in cubic centimeters? (1 L = 1,000 cm³)",
          choices: [
            { letter: "A", text: "about 3,333 cm³" },
            { letter: "B", text: "25 cm³" },
            { letter: "C", text: "10,000 cm³" },
            { letter: "D", text: "500 cm³" }
          ],
          correct: "B"
        },
        {
          id: "stretch",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Another model has wings with an area of 300 cm² and a 50 cm span. A builder stretches the wings only from tip to tip, to a 60 cm span, keeping their front-to-back width. What is the new wing area?",
          choices: [
            { letter: "A", text: "432 cm²" },
            { letter: "B", text: "518.4 cm²" },
            { letter: "C", text: "310 cm²" },
            { letter: "D", text: "360 cm²" }
          ],
          correct: "D"
        },
        {
          id: "toy",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A toy plane has a 22 cm wingspan and is 20 cm long. Is it similar to the real plane? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: 22/1,100 = 0.02, but 20/800 = 0.025." },
            { letter: "B", text: "Yes: 22/1,100 = 20/800." },
            { letter: "C", text: "No: a similar toy would have to use the museum's 1 : 20 scale." },
            { letter: "D", text: "Yes: any two planes whose wingspan is longer than the body are similar." }
          ],
          correct: "A"
        },
        {
          id: "paint",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The real plane's outside takes 30 L of paint. How much paint, in milliliters, would the model's outside take, with paint spread just as thick? (1 L = 1,000 mL)",
          choices: [
            { letter: "A", text: "750 mL" },
            { letter: "B", text: "75 mL" },
            { letter: "C", text: "1,500 mL" },
            { letter: "D", text: "3.75 mL" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df2-sky-rail-tunnel",
      family: "GEO",
      mode: "sky",
      title: "The Railway Tunnel",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A tunnel through a hill, a longer one and a model one.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"The opening of a railway tunnel in a hillside: a rectangle 8 m wide with 3 m walls, topped by a half-circle whose diameter is the 8 m width\"><polygon class=\"sh2\" points=\"10,140 160,16 310,140\"/><path class=\"sh\" d=\"M104 140 V98 A56 56 0 0 1 216 98 V140 Z\"/><line class=\"thin dash\" x1=\"104\" y1=\"98\" x2=\"216\" y2=\"98\"/><line class=\"ln\" x1=\"4\" y1=\"140\" x2=\"316\" y2=\"140\"/><path class=\"thin\" d=\"M104 148 H216 M104 144 V152 M216 144 V152\"/><path class=\"thin\" d=\"M126 140 L134 128 M194 140 L186 128 M131 132 H189\"/><text x=\"160\" y=\"164\" text-anchor=\"middle\">8 m</text><text x=\"98\" y=\"124\" text-anchor=\"end\">3 m</text></svg></figure><p class=\"geo-given\">A railway tunnel's opening is a rectangle 8 m wide with walls 3 m tall, topped by a half-circle with an 8 m diameter. The opening's area is 24 + 8π m². The tunnel is 200 m long, so 4,800 + 1,600π m³ of rock was removed.</p>",
      claims: [
        {
          id: "longer",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A new tunnel has the same opening but is 300 m long. How much rock is removed? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "10,800 + 3,600π m³" },
            { letter: "B", text: "16,200 + 5,400π m³" },
            { letter: "C", text: "7,200 + 1,600π m³" },
            { letter: "D", text: "7,200 + 2,400π m³" }
          ],
          correct: "D"
        },
        {
          id: "modelarea",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A model railroad has a tunnel similar to this one at a scale of 1 : 80. To the nearest square centimeter, what is the area of the model's opening? (1 m² = 10,000 cm²)",
          choices: [
            { letter: "A", text: "1 cm²" },
            { letter: "B", text: "38 cm²" },
            { letter: "C", text: "77 cm²" },
            { letter: "D", text: "6,142 cm²" }
          ],
          correct: "C"
        },
        {
          id: "highway",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A highway tunnel is similar to this one, and its opening has 4 times the area. How wide is it?",
          choices: [
            { letter: "A", text: "16 m" },
            { letter: "B", text: "6 m" },
            { letter: "C", text: "32 m" },
            { letter: "D", text: "about 12.7 m" }
          ],
          correct: "A"
        },
        {
          id: "second",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Another tunnel's opening is a rectangle 12 m wide with walls 4.5 m tall, topped by a half-circle with a 12 m diameter. Is it similar to this opening? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: only the half-circles must match, and all half-circles are similar." },
            { letter: "B", text: "No: 12/8 is not equal to 4.5/3." },
            { letter: "C", text: "No: a similar opening would have exactly 1.5 times the area." },
            { letter: "D", text: "Yes: 12/8 = 4.5/3 = 6/4 = 1.5." }
          ],
          correct: "D"
        },
        {
          id: "walls",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Engineers raise the walls from 3 m to 4 m and keep the 8 m width and the half-circle. By how much does the opening's area increase?",
          choices: [
            { letter: "A", text: "32 m²" },
            { letter: "B", text: "8 m²" },
            { letter: "C", text: "about 38.2 m²" },
            { letter: "D", text: "about 16.4 m²" }
          ],
          correct: "B"
        },
        {
          id: "foam",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A model railroad has a tunnel similar to this one at a scale of 1 : 80. To the nearest liter, how much foam is carved out to make it? (1 m³ = 1,000 L)",
          choices: [
            { letter: "A", text: "13 L" },
            { letter: "B", text: "1,535 L" },
            { letter: "C", text: "19 L" },
            { letter: "D", text: "122,832 L" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
