/* SOL Labyrinth — Geometry game (family GEO), three-dimensional figures: G.DF.1 (Virginia 2023 Geometry SOL), v5.20.
   Modes: ring (Wolf Ring: art, design, music and making things) and worms (Root Worms: nature and the outdoors).
   Original items only. A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css)
   and the given facts, then six questions about it. Prisms are drawn in oblique projection and circular solids in a true view
   (level circles as ellipses), hidden edges dashed. Every numeric answer was computed, and every distractor is a named
   mistake (radius for diameter, height for slant height, a missing 1/3 or 1/2, lateral for total surface area, rounding
   the wrong way …). */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-df1-ring-pillar-candle",
      family: "GEO",
      mode: "ring",
      title: "The Pillar Candle",
      kind: "3-D figures · G.DF.1",
      blurb: "Melted wax poured into a mold makes a cylinder candle.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"An upright cylinder: a pillar candle 7 cm across and 12 cm tall, with a short wick on top. The hidden back half of the bottom edge is dashed.\"><path class=\"ln\" d=\"M118.5 39 V142 A31.5 9.5 0 0 0 181.5 142 V39\"/><path class=\"ln dash\" d=\"M118.5 142 A31.5 9.5 0 0 1 181.5 142\"/><ellipse class=\"ln\" cx=\"150\" cy=\"39\" rx=\"31.5\" ry=\"9.5\"/><line class=\"thin\" x1=\"150\" y1=\"29.5\" x2=\"150\" y2=\"24.5\"/><path class=\"thin\" d=\"M118.5 12.5 H181.5 M118.5 8.5 V16.5 M181.5 8.5 V16.5\"/><text x=\"189.5\" y=\"17.5\">7 cm</text><path class=\"thin\" d=\"M102.5 39 V142 M98.5 39 H106.5 M98.5 142 H106.5\"/><text x=\"96.5\" y=\"95.5\" text-anchor=\"end\">12 cm</text><text class=\"sm\" x=\"195.5\" y=\"94.5\">wax</text></svg></figure><p class=\"geo-given\">A candle maker pours melted wax into a mold to make a pillar candle. The candle is a cylinder 7 cm across and 12 cm tall.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much wax is in the candle, in terms of π?",
          choices: [
            { letter: "A", text: "42π cm³" },
            { letter: "B", text: "147π cm³" },
            { letter: "C", text: "588π cm³" },
            { letter: "D", text: "49π cm³" }
          ],
          correct: "B"
        },
        {
          id: "surface",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the total surface area of the candle, to the nearest tenth of a square centimeter?",
          choices: [
            { letter: "A", text: "263.9 cm²" },
            { letter: "B", text: "835.7 cm²" },
            { letter: "C", text: "302.4 cm²" },
            { letter: "D", text: "340.9 cm²" }
          ],
          correct: "D"
        },
        {
          id: "notcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Which shape can NOT be a cross section of the candle?",
          choices: [
            { letter: "A", text: "a triangle" },
            { letter: "B", text: "a circle" },
            { letter: "C", text: "an oval (ellipse)" },
            { letter: "D", text: "a rectangle" }
          ],
          correct: "A"
        },
        {
          id: "halves",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the top cuts the candle into two pieces. What is the area of the new flat face on one piece, to the nearest tenth of a square centimeter?",
          choices: [
            { letter: "A", text: "38.5 cm²" },
            { letter: "B", text: "84.0 cm²" },
            { letter: "C", text: "22.0 cm²" },
            { letter: "D", text: "153.9 cm²" }
          ],
          correct: "A"
        },
        {
          id: "blocks",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The candle maker has a block of 2,400 cm³ of wax. How many whole candles like this one can she make from it?",
          choices: [
            { letter: "A", text: "15" },
            { letter: "B", text: "18" },
            { letter: "C", text: "5" },
            { letter: "D", text: "6" }
          ],
          correct: "C"
        },
        {
          id: "true",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Which statement about the candle is true?",
          choices: [
            { letter: "A", text: "It holds 2 times as much wax as a cone with the same base and height." },
            { letter: "B", text: "It holds 3 times as much wax as a cone with the same base and height." },
            { letter: "C", text: "Its curved side has an area of π · 3.5 · 12 cm²." },
            { letter: "D", text: "Its top has an area of 7π cm²." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df1-ring-jewelry-box",
      family: "GEO",
      mode: "ring",
      title: "The Wooden Jewelry Box",
      kind: "3-D figures · G.DF.1",
      blurb: "A small box for rings: its volume, its faces and its net.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"A closed rectangular box drawn in oblique view: 20 cm long, 12 cm deep and 6 cm tall, with a small clasp on the front. Hidden edges are dashed.\"><polygon class=\"sh2\" points=\"52,114 232,114 232,60 52,60\"/><path class=\"ln\" d=\"M52 114 L232 114 M232 114 L232 60 M232 60 L52 60 M52 114 L52 60 M278.8 87 L278.8 33 M278.8 33 L98.8 33 M232 114 L278.8 87 M232 60 L278.8 33 M52 60 L98.8 33\"/><path class=\"ln dash\" d=\"M98.8 87 L278.8 87 M98.8 87 L98.8 33 M52 114 L98.8 87\"/><path class=\"thin\" d=\"M133 68.1 h18 v9 h-18 Z\"/><text x=\"142\" y=\"131\" text-anchor=\"middle\">20 cm</text><text x=\"46\" y=\"92\" text-anchor=\"end\">6 cm</text><text x=\"267.4\" y=\"112.5\">12 cm</text></svg></figure><p class=\"geo-given\">A wooden jewelry box is a rectangular prism 20 cm long, 12 cm deep and 6 cm tall. Ignore the thickness of the wood.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much space is inside the jewelry box?",
          choices: [
            { letter: "A", text: "432 cm³" },
            { letter: "B", text: "38 cm³" },
            { letter: "C", text: "1,440 cm³" },
            { letter: "D", text: "240 cm³" }
          ],
          correct: "C"
        },
        {
          id: "surface",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the total surface area of the jewelry box?",
          choices: [
            { letter: "A", text: "432 cm²" },
            { letter: "B", text: "384 cm²" },
            { letter: "C", text: "624 cm²" },
            { letter: "D", text: "864 cm²" }
          ],
          correct: "D"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Leave out the top of the box. The other five faces unfold into a net: the 20 cm by 12 cm bottom with the four sides laid flat around it. How long is the net, measured along the 20 cm edges?",
          choices: [
            { letter: "A", text: "20 cm" },
            { letter: "B", text: "32 cm" },
            { letter: "C", text: "26 cm" },
            { letter: "D", text: "24 cm" }
          ],
          correct: "B"
        },
        {
          id: "cut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the bottom cuts the box 2 cm below its top. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 20 cm by 12 cm" },
            { letter: "B", text: "a rectangle 20 cm by 6 cm" },
            { letter: "C", text: "a rectangle 20 cm by 4 cm" },
            { letter: "D", text: "a rectangle 18 cm by 10 cm" }
          ],
          correct: "A"
        },
        {
          id: "velvet",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "Velvet covers the outside of the four side faces, but not the top or the bottom. Velvet costs $0.02 per square centimeter. What does the velvet cost?",
          choices: [
            { letter: "A", text: "$17.28" },
            { letter: "B", text: "$8.64" },
            { letter: "C", text: "$7.68" },
            { letter: "D", text: "$28.80" }
          ],
          correct: "C"
        },
        {
          id: "tray",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "A tray that exactly fits the bottom of the box is 2 cm deep. What is the volume of the tray?",
          choices: [
            { letter: "A", text: "608 cm³" },
            { letter: "B", text: "240 cm³" },
            { letter: "C", text: "960 cm³" },
            { letter: "D", text: "480 cm³" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df1-ring-paperweight",
      family: "GEO",
      mode: "ring",
      title: "The Glass Paperweight",
      kind: "3-D figures · G.DF.1",
      blurb: "A square pyramid of solid glass on a desk.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A square pyramid drawn in oblique view with base edges of 9 cm. T is the top, C is the center of the base and E is the midpoint of the front base edge. The height TC and segment CE are dashed and meet at a right angle; segment TE lies on the shaded front face. Hidden edges are dashed.\"><polygon class=\"sh\" points=\"66,140 192,140 156.3,40.3\"/><path class=\"ln\" d=\"M66 140 L192 140 M192 140 L246.6 108.5 M192 140 L156.3 40.3 M66 140 L156.3 40.3 M246.6 108.5 L156.3 40.3\"/><path class=\"ln dash\" d=\"M246.6 108.5 L120.6 108.5 M66 140 L120.6 108.5 M120.6 108.5 L156.3 40.3\"/><line class=\"thin dash\" x1=\"156.3\" y1=\"40.3\" x2=\"156.3\" y2=\"124.3\"/><line class=\"thin dash\" x1=\"156.3\" y1=\"124.3\" x2=\"129\" y2=\"140\"/><line class=\"thin\" x1=\"156.3\" y1=\"40.3\" x2=\"129\" y2=\"140\"/><path class=\"thin\" d=\"M156.3 116.6 L150.9 119.6 L150.9 127.3\"/><circle class=\"dt\" cx=\"156.3\" cy=\"40.3\" r=\"2.5\"/><circle class=\"dt\" cx=\"156.3\" cy=\"124.3\" r=\"2.5\"/><circle class=\"dt\" cx=\"129\" cy=\"140\" r=\"2.5\"/><text x=\"156.3\" y=\"32.3\" text-anchor=\"middle\">T</text><text x=\"163.3\" y=\"121.3\">C</text><text x=\"129\" y=\"157\" text-anchor=\"middle\">E</text><text x=\"229.3\" y=\"136.3\">9 cm</text></svg></figure><p class=\"geo-given\">A glass paperweight is a solid square pyramid with base edges of 9 cm. <strong>T</strong> is its top, <strong>C</strong> the center of its base and <strong>E</strong> the midpoint of a base edge. The height <strong>TC</strong> is 6 cm and the slant height <strong>TE</strong> is 7.5 cm.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much glass is in the paperweight?",
          choices: [
            { letter: "A", text: "162 cm³" },
            { letter: "B", text: "486 cm³" },
            { letter: "C", text: "202.5 cm³" },
            { letter: "D", text: "243 cm³" }
          ],
          correct: "A"
        },
        {
          id: "surface",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the total surface area of the paperweight, base included?",
          choices: [
            { letter: "A", text: "351 cm²" },
            { letter: "B", text: "216 cm²" },
            { letter: "C", text: "135 cm²" },
            { letter: "D", text: "189 cm²" }
          ],
          correct: "B"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A net of the paperweight is a square with a triangle on each side. What is the area of one triangle in the net?",
          choices: [
            { letter: "A", text: "33.75 cm²" },
            { letter: "B", text: "135 cm²" },
            { letter: "C", text: "67.5 cm²" },
            { letter: "D", text: "27 cm²" }
          ],
          correct: "A"
        },
        {
          id: "cut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the base cuts the paperweight 2 cm below T. What is the area of the cross section?",
          choices: [
            { letter: "A", text: "3 cm²" },
            { letter: "B", text: "81 cm²" },
            { letter: "C", text: "9 cm²" },
            { letter: "D", text: "36 cm²" }
          ],
          correct: "C"
        },
        {
          id: "mass",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The glass has a mass of 2.5 g per cubic centimeter. What is the mass of the paperweight?",
          choices: [
            { letter: "A", text: "64.8 g" },
            { letter: "B", text: "540 g" },
            { letter: "C", text: "405 g" },
            { letter: "D", text: "1,215 g" }
          ],
          correct: "C"
        },
        {
          id: "foam",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The paperweight is packed in a box shaped like a cube with 9 cm edges. Foam fills the rest of the box. How much foam is needed?",
          choices: [
            { letter: "A", text: "729 cm³" },
            { letter: "B", text: "513 cm³" },
            { letter: "C", text: "243 cm³" },
            { letter: "D", text: "567 cm³" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df1-ring-gift-box",
      family: "GEO",
      mode: "ring",
      title: "The Gift Box with a Ribbon",
      kind: "3-D figures · G.DF.1",
      blurb: "A triangular prism box, a ribbon and some gift wrap.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A triangular prism lying on a rectangular face, drawn in oblique view. The front end is an isosceles triangle with a 12 cm base and 10 cm sides. The box is 25 cm long. A ribbon with a bow goes around the middle of the box. Hidden edges are dashed.\"><polygon class=\"sh2\" points=\"36,148 144,148 90,76\"/><path class=\"ln\" d=\"M36 148 L144 148 M144 148 L90 76 M36 148 L90 76 M241.4 91.8 L187.4 19.8 M144 148 L241.4 91.8 M90 76 L187.4 19.8\"/><path class=\"ln dash\" d=\"M133.4 91.8 L241.4 91.8 M133.4 91.8 L187.4 19.8 M36 148 L133.4 91.8\"/><line class=\"ac\" x1=\"138.7\" y1=\"47.9\" x2=\"192.7\" y2=\"119.9\"/><path class=\"thin\" d=\"M138.7 47.9 c-10 -9 -18 -2 -12 4 Z M138.7 47.9 c10 -9 18 -2 12 4 Z\"/><text x=\"90\" y=\"165\" text-anchor=\"middle\">12 cm</text><text x=\"56\" y=\"110\" text-anchor=\"end\">10 cm</text><text x=\"204.7\" y=\"135.9\">25 cm</text></svg></figure><p class=\"geo-given\">A gift box is a triangular prism lying on one rectangular face. Each end is an isosceles triangle with a 12 cm base, two 10 cm sides and a height of 8 cm. The box is 25 cm long. A ribbon goes once around the middle of the box.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the gift box?",
          choices: [
            { letter: "A", text: "1,500 cm³" },
            { letter: "B", text: "400 cm³" },
            { letter: "C", text: "1,200 cm³" },
            { letter: "D", text: "2,400 cm³" }
          ],
          correct: "C"
        },
        {
          id: "surface",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the total surface area of the gift box?",
          choices: [
            { letter: "A", text: "796 cm²" },
            { letter: "B", text: "992 cm²" },
            { letter: "C", text: "800 cm²" },
            { letter: "D", text: "896 cm²" }
          ],
          correct: "D"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "In a net of the box, the three rectangles are joined side by side in one strip, along their 25 cm edges. How wide is the strip, across all three rectangles?",
          choices: [
            { letter: "A", text: "30 cm" },
            { letter: "B", text: "32 cm" },
            { letter: "C", text: "28 cm" },
            { letter: "D", text: "22 cm" }
          ],
          correct: "B"
        },
        {
          id: "cut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the bottom face cuts the box 2 cm above the bottom. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 9 cm by 25 cm" },
            { letter: "B", text: "a rectangle 3 cm by 25 cm" },
            { letter: "C", text: "a rectangle 10 cm by 25 cm" },
            { letter: "D", text: "a rectangle 12 cm by 25 cm" }
          ],
          correct: "A"
        },
        {
          id: "ribbon",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The ribbon goes once around the box at the middle of its length, across the bottom and both sloped faces. Another 18 cm is used for the bow. How much ribbon is used?",
          choices: [
            { letter: "A", text: "46 cm" },
            { letter: "B", text: "43 cm" },
            { letter: "C", text: "40 cm" },
            { letter: "D", text: "50 cm" }
          ],
          correct: "D"
        },
        {
          id: "wrap",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The whole box is covered in gift wrap, plus 20% extra for the overlaps. How much gift wrap is used, to the nearest square centimeter?",
          choices: [
            { letter: "A", text: "916 cm²" },
            { letter: "B", text: "1,075 cm²" },
            { letter: "C", text: "179 cm²" },
            { letter: "D", text: "960 cm²" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df1-ring-lampshade",
      family: "GEO",
      mode: "ring",
      title: "The Cone Lampshade",
      kind: "3-D figures · G.DF.1",
      blurb: "Fabric stretched over a cone-shaped frame.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A cone with its tip at the top and an open circular bottom rim. A dashed segment from the tip to the center of the rim is 12 inches, and a dashed radius from the center to the rim is 9 inches, with a right-angle mark between them. The hidden back half of the rim is dashed.\"><path class=\"sh2\" d=\"M150 36.4 L80 122.9 A72 21.6 0 1 0 220 122.9 Z\"/><path class=\"ln\" d=\"M80 122.9 L150 36.4 L220 122.9 A72 21.6 0 1 1 80 122.9\"/><path class=\"ln dash\" d=\"M80 122.9 A72 21.6 0 0 1 220 122.9\"/><line class=\"thin dash\" x1=\"150\" y1=\"36.4\" x2=\"150\" y2=\"128\"/><line class=\"thin dash\" x1=\"150\" y1=\"128\" x2=\"222\" y2=\"128\"/><path class=\"thin\" d=\"M150 121 H157 V128\"/><text class=\"sm\" x=\"186\" y=\"123\" text-anchor=\"middle\">9 in</text><text class=\"sm\" x=\"144\" y=\"94.2\" text-anchor=\"end\">12 in</text></svg></figure><p class=\"geo-given\">A lampshade is the curved surface of a cone, open at the bottom. Its bottom rim has a radius of 9 in, and the shade is 12 in tall from the center of the rim to the tip.</p>",
      claims: [
        {
          id: "slant",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the slant height of the shade, from the tip to the rim?",
          choices: [
            { letter: "A", text: "15 in" },
            { letter: "B", text: "about 21.6 in" },
            { letter: "C", text: "about 7.9 in" },
            { letter: "D", text: "21 in" }
          ],
          correct: "A"
        },
        {
          id: "fabric",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much fabric covers the shade, in terms of π?",
          choices: [
            { letter: "A", text: "216π in²" },
            { letter: "B", text: "135π in²" },
            { letter: "C", text: "108π in²" },
            { letter: "D", text: "270π in²" }
          ],
          correct: "B"
        },
        {
          id: "sector",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "The fabric is cut along a straight line from the tip and laid flat. It makes a sector of a circle. What is the central angle of the sector?",
          choices: [
            { letter: "A", text: "216°" },
            { letter: "B", text: "288°" },
            { letter: "C", text: "270°" },
            { letter: "D", text: "144°" }
          ],
          correct: "A"
        },
        {
          id: "cut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Think of the shade as a solid cone. A level plane cuts it 4 in below the tip. What is the cross section?",
          choices: [
            { letter: "A", text: "a circle with radius 6 in" },
            { letter: "B", text: "a circle with radius 9 in" },
            { letter: "C", text: "a circle with radius 2.4 in" },
            { letter: "D", text: "a circle with radius 3 in" }
          ],
          correct: "D"
        },
        {
          id: "roll",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "A roll of fabric covers 2,200 in². How many whole shades like this one can be covered from one roll?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "2" },
            { letter: "C", text: "5" },
            { letter: "D", text: "3" }
          ],
          correct: "C"
        },
        {
          id: "space",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much space is under the shade, inside the cone, to the nearest cubic inch?",
          choices: [
            { letter: "A", text: "3,054 in³" },
            { letter: "B", text: "1,272 in³" },
            { letter: "C", text: "113 in³" },
            { letter: "D", text: "1,018 in³" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df1-ring-sculpture",
      family: "GEO",
      mode: "ring",
      title: "The Bronze Ball Sculpture",
      kind: "3-D figures · G.DF.1",
      blurb: "A solid bronze ball sits on a tall stone plinth.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A sphere 30 cm across rests on the center of the top of a square prism. The prism is 40 cm wide and 45 cm tall. The hidden back edge at the bottom of the prism and the hidden half of the sphere's equator are dashed.\"><polygon class=\"sh2\" points=\"98,150 162,150 162,81.3 98,81.3\"/><path class=\"ln\" d=\"M98 150 L162 150 L162 81.3 L98 81.3 Z M98 81.3 L98 62.1 L110 62.1 M150 62.1 L162 62.1 L162 81.3\"/><line class=\"ln dash\" x1=\"98\" y1=\"130.8\" x2=\"162\" y2=\"130.8\"/><circle class=\"ln\" cx=\"130\" cy=\"48.8\" r=\"24\"/><path class=\"thin\" d=\"M106 48.8 A24 7.2 0 0 0 154 48.8\"/><path class=\"thin dash\" d=\"M106 48.8 A24 7.2 0 0 1 154 48.8\"/><path class=\"thin\" d=\"M106 18.8 H154 M106 14.8 V22.8 M154 14.8 V22.8\"/><text x=\"162\" y=\"23.8\">30 cm</text><text x=\"130\" y=\"166\" text-anchor=\"middle\">40 cm</text><path class=\"thin\" d=\"M86 81.3 V150 M82 81.3 H90 M82 150 H90\"/><text x=\"80\" y=\"120.7\" text-anchor=\"end\">45 cm</text><text class=\"sm\" x=\"170\" y=\"119.7\">stone</text><text class=\"sm\" x=\"98\" y=\"52.8\" text-anchor=\"end\">bronze</text></svg></figure><p class=\"geo-given\">A sculpture is a solid bronze ball 30 cm across, resting on the center of a stone plinth. The plinth is a square prism with a 40 cm by 40 cm top and a height of 45 cm.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the bronze ball, in terms of π?",
          choices: [
            { letter: "A", text: "36,000π cm³" },
            { letter: "B", text: "300π cm³" },
            { letter: "C", text: "4,500π cm³" },
            { letter: "D", text: "3,375π cm³" }
          ],
          correct: "C"
        },
        {
          id: "surface",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "The ball is polished all over. What is its surface area, in terms of π?",
          choices: [
            { letter: "A", text: "450π cm²" },
            { letter: "B", text: "900π cm²" },
            { letter: "C", text: "225π cm²" },
            { letter: "D", text: "3,600π cm²" }
          ],
          correct: "B"
        },
        {
          id: "paint",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The four sides and the top of the plinth are painted, but not the bottom. What area is painted? Ignore the point where the ball touches.",
          choices: [
            { letter: "A", text: "10,400 cm²" },
            { letter: "B", text: "7,200 cm²" },
            { letter: "C", text: "8,800 cm²" },
            { letter: "D", text: "72,000 cm²" }
          ],
          correct: "C"
        },
        {
          id: "ballcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A level plane cuts the ball 9 cm above its center. What is the cross section?",
          choices: [
            { letter: "A", text: "a circle with radius 6 cm" },
            { letter: "B", text: "a circle with radius 12 cm" },
            { letter: "C", text: "a circle with radius about 17.5 cm" },
            { letter: "D", text: "a circle with radius 15 cm" }
          ],
          correct: "B"
        },
        {
          id: "plinthcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane cuts the plinth from top to bottom through two opposite vertical edges. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 40√2 cm by 45 cm" },
            { letter: "B", text: "a square 40 cm by 40 cm" },
            { letter: "C", text: "a rectangle 40 cm by 45 cm" },
            { letter: "D", text: "a rectangle 80 cm by 45 cm" }
          ],
          correct: "A"
        },
        {
          id: "cost",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "Bronze costs $0.09 per cubic centimeter. To the nearest dollar, what does the bronze in the ball cost?",
          choices: [
            { letter: "A", text: "$954" },
            { letter: "B", text: "$636" },
            { letter: "C", text: "$10,179" },
            { letter: "D", text: "$1,272" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df1-ring-chocolate-mold",
      family: "GEO",
      mode: "ring",
      title: "The Truffle Mold",
      kind: "3-D figures · G.DF.1",
      blurb: "A silicone block with twelve half-sphere hollows for chocolate.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"A rectangular block 24 cm long, 10 cm wide and 4 cm thick, seen from above and in front. Its top has 12 round hollows in two rows of 6. The hidden back bottom edge is dashed.\"><polygon class=\"sh\" points=\"28,102 292,102 292,69 28,69\"/><polygon class=\"ln\" points=\"28,144 292,144 292,102 28,102\"/><path class=\"ln\" d=\"M28 102 L28 69 L292 69 L292 102\"/><line class=\"ln dash\" x1=\"28\" y1=\"111\" x2=\"292\" y2=\"111\"/><ellipse class=\"sh2\" cx=\"50\" cy=\"93.8\" rx=\"16.5\" ry=\"5\"/><ellipse class=\"sh2\" cx=\"94\" cy=\"93.8\" rx=\"16.5\" ry=\"5\"/><ellipse class=\"sh2\" cx=\"138\" cy=\"93.8\" rx=\"16.5\" ry=\"5\"/><ellipse class=\"sh2\" cx=\"182\" cy=\"93.8\" rx=\"16.5\" ry=\"5\"/><ellipse class=\"sh2\" cx=\"226\" cy=\"93.8\" rx=\"16.5\" ry=\"5\"/><ellipse class=\"sh2\" cx=\"270\" cy=\"93.8\" rx=\"16.5\" ry=\"5\"/><ellipse class=\"sh2\" cx=\"50\" cy=\"77.3\" rx=\"16.5\" ry=\"5\"/><ellipse class=\"sh2\" cx=\"94\" cy=\"77.3\" rx=\"16.5\" ry=\"5\"/><ellipse class=\"sh2\" cx=\"138\" cy=\"77.3\" rx=\"16.5\" ry=\"5\"/><ellipse class=\"sh2\" cx=\"182\" cy=\"77.3\" rx=\"16.5\" ry=\"5\"/><ellipse class=\"sh2\" cx=\"226\" cy=\"77.3\" rx=\"16.5\" ry=\"5\"/><ellipse class=\"sh2\" cx=\"270\" cy=\"77.3\" rx=\"16.5\" ry=\"5\"/><text x=\"160\" y=\"159\" text-anchor=\"middle\">24 cm</text><text x=\"298\" y=\"128\">4 cm</text><text x=\"298\" y=\"90.5\">10 cm</text><line class=\"thin\" x1=\"270\" y1=\"77.3\" x2=\"260\" y2=\"56\"/><text class=\"sm\" x=\"258\" y=\"53\" text-anchor=\"end\">hollow</text></svg></figure><p class=\"geo-given\">A silicone chocolate mold is a rectangular block 24 cm long, 10 cm wide and 4 cm thick. Its top has 12 hollows in two rows of 6. Each hollow is a hemisphere with a radius of 1.5 cm.</p>",
      claims: [
        {
          id: "hollow",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much chocolate fills one hollow, in terms of π?",
          choices: [
            { letter: "A", text: "2.25π cm³" },
            { letter: "B", text: "4.5π cm³" },
            { letter: "C", text: "18π cm³" },
            { letter: "D", text: "1.5π cm³" }
          ],
          correct: "A"
        },
        {
          id: "fill",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How much chocolate fills all 12 hollows, to the nearest cubic centimeter?",
          choices: [
            { letter: "A", text: "170 cm³" },
            { letter: "B", text: "85 cm³" },
            { letter: "C", text: "7 cm³" },
            { letter: "D", text: "127 cm³" }
          ],
          correct: "B"
        },
        {
          id: "truffles",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "A chef melts 400 cm³ of chocolate. How many whole truffles can she make, one per hollow?",
          choices: [
            { letter: "A", text: "57" },
            { letter: "B", text: "56" },
            { letter: "C", text: "177" },
            { letter: "D", text: "28" }
          ],
          correct: "B"
        },
        {
          id: "silicone",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How much silicone is in the mold, to the nearest cubic centimeter?",
          choices: [
            { letter: "A", text: "960 cm³" },
            { letter: "B", text: "1,045 cm³" },
            { letter: "C", text: "790 cm³" },
            { letter: "D", text: "875 cm³" }
          ],
          correct: "D"
        },
        {
          id: "levelcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the top cuts the mold 0.9 cm below the top. In the cross section, what shape is each hole made by a hollow?",
          choices: [
            { letter: "A", text: "a circle with radius 1.2 cm" },
            { letter: "B", text: "a circle with radius 0.9 cm" },
            { letter: "C", text: "a circle with radius 0.6 cm" },
            { letter: "D", text: "a circle with radius 1.5 cm" }
          ],
          correct: "A"
        },
        {
          id: "rowcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane parallel to the 24 cm edges cuts through the centers of the 6 hollows in one row. What is the cross section?",
          choices: [
            { letter: "A", text: "a 24 cm by 4 cm rectangle with 6 triangles cut from its top" },
            { letter: "B", text: "a 24 cm by 10 cm rectangle with 6 half circles cut from its top" },
            { letter: "C", text: "a 24 cm by 4 cm rectangle with 6 half circles cut from its top" },
            { letter: "D", text: "a 24 cm by 4 cm rectangle with 6 whole circles cut out" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df1-ring-clay-vase",
      family: "GEO",
      mode: "ring",
      title: "The Potter's Clay Vase",
      kind: "3-D figures · G.DF.1",
      blurb: "A hollow cylinder of clay: water inside, glaze outside.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 165\" role=\"img\" aria-label=\"An upright cylinder, open at the top, 12 cm across and 20 cm tall. A smaller circle inside the rim shows the opening, and dashed lines show the hidden inside walls and the inside floor just above the bottom. The hidden back half of the bottom edge is dashed.\"><path class=\"ln\" d=\"M114 31.5 V146 A36 10.8 0 0 0 186 146 V31.5\"/><path class=\"ln dash\" d=\"M114 146 A36 10.8 0 0 1 186 146\"/><ellipse class=\"ln\" cx=\"150\" cy=\"31.5\" rx=\"36\" ry=\"10.8\"/><ellipse class=\"ln\" cx=\"150\" cy=\"31.5\" rx=\"30\" ry=\"9\"/><path class=\"thin dash\" d=\"M120 31.5 V140.3 M180 31.5 V140.3\"/><path class=\"thin dash\" d=\"M120 140.3 A30 9 0 0 0 180 140.3\"/><path class=\"thin\" d=\"M114 11.7 H186 M114 7.7 V15.7 M186 7.7 V15.7\"/><text x=\"194\" y=\"16.7\">12 cm</text><path class=\"thin\" d=\"M100 31.5 V146 M96 31.5 H104 M96 146 H104\"/><text x=\"94\" y=\"93.8\" text-anchor=\"end\">20 cm</text><text class=\"sm\" x=\"196\" y=\"92.8\">clay</text></svg></figure><p class=\"geo-given\">A potter makes a vase shaped like a cylinder, open at the top. Outside, it is 12 cm across and 20 cm tall. The walls and the base are 1 cm thick, so the inside is 10 cm across and 19 cm deep.</p>",
      claims: [
        {
          id: "holds",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much water can the vase hold, in terms of π?",
          choices: [
            { letter: "A", text: "720π cm³" },
            { letter: "B", text: "500π cm³" },
            { letter: "C", text: "1,900π cm³" },
            { letter: "D", text: "475π cm³" }
          ],
          correct: "D"
        },
        {
          id: "clay",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How much clay is in the vase, to the nearest cubic centimeter?",
          choices: [
            { letter: "A", text: "63 cm³" },
            { letter: "B", text: "2,262 cm³" },
            { letter: "C", text: "770 cm³" },
            { letter: "D", text: "691 cm³" }
          ],
          correct: "C"
        },
        {
          id: "liters",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How many liters of water does the full vase hold, to the nearest tenth? Use 1 L = 1,000 cm³.",
          choices: [
            { letter: "A", text: "6.0 L" },
            { letter: "B", text: "1.5 L" },
            { letter: "C", text: "0.5 L" },
            { letter: "D", text: "2.3 L" }
          ],
          correct: "B"
        },
        {
          id: "glaze",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "Glaze covers every surface of the vase except the bottom it stands on: the outside wall, the rim, the inside wall and the inside floor. What area is glazed, in terms of π?",
          choices: [
            { letter: "A", text: "455π cm²" },
            { letter: "B", text: "516π cm²" },
            { letter: "C", text: "466π cm²" },
            { letter: "D", text: "491π cm²" }
          ],
          correct: "C"
        },
        {
          id: "levelcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A level plane cuts the vase 10 cm above the table. What is the cross section of the clay?",
          choices: [
            { letter: "A", text: "a ring between circles of radius 6 cm and 7 cm" },
            { letter: "B", text: "a circle with radius 6 cm" },
            { letter: "C", text: "a circle with radius 5 cm" },
            { letter: "D", text: "a ring between circles of radius 5 cm and 6 cm" }
          ],
          correct: "D"
        },
        {
          id: "vcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane cuts the vase in half through its center line. What is the area of the clay in the cross section?",
          choices: [
            { letter: "A", text: "50 cm²" },
            { letter: "B", text: "52 cm²" },
            { letter: "C", text: "240 cm²" },
            { letter: "D", text: "40 cm²" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df1-worms-hay-bale",
      family: "GEO",
      mode: "worms",
      title: "The Round Hay Bale",
      kind: "3-D figures · G.DF.1",
      blurb: "A cylinder of hay lying on its side in a field.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A cylinder lying on its curved side on the ground, with its flat round ends to the left and right. It is 6 ft across and 5 ft wide from one flat end to the other. The hidden half of the far end is dashed.\"><line class=\"thin\" x1=\"40\" y1=\"142\" x2=\"292\" y2=\"142\"/><path class=\"ln\" d=\"M100 10 A23.1 66 0 0 0 100 142\"/><path class=\"ln dash\" d=\"M100 10 A23.1 66 0 0 1 100 142\"/><path class=\"ln\" d=\"M100 10 H203 M100 142 H203\"/><ellipse class=\"sh2\" cx=\"203\" cy=\"76\" rx=\"23.1\" ry=\"66\"/><path class=\"thin\" d=\"M240.1 10 V142 M236.1 10 H244.1 M236.1 142 H244.1\"/><text x=\"246.1\" y=\"81\">6 ft</text><path class=\"thin\" d=\"M100 150 H203 M100 146 V154 M203 146 V154\"/><text x=\"151.5\" y=\"165\" text-anchor=\"middle\">5 ft</text><text class=\"sm\" x=\"68.9\" y=\"136\" text-anchor=\"end\">ground</text></svg></figure><p class=\"geo-given\">A round hay bale lies on its curved side in a field. It is a cylinder 6 ft across and 5 ft wide from one flat end to the other.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the bale, to the nearest tenth of a cubic foot?",
          choices: [
            { letter: "A", text: "141.4 ft³" },
            { letter: "B", text: "565.5 ft³" },
            { letter: "C", text: "47.1 ft³" },
            { letter: "D", text: "45.0 ft³" }
          ],
          correct: "A"
        },
        {
          id: "wrap",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Net wrap covers the curved surface of the bale but not its flat ends. How much net wrap is that, in terms of π?",
          choices: [
            { letter: "A", text: "60π ft²" },
            { letter: "B", text: "15π ft²" },
            { letter: "C", text: "30π ft²" },
            { letter: "D", text: "48π ft²" }
          ],
          correct: "C"
        },
        {
          id: "cut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane cuts the bale from its top straight down to the ground, through the centers of both flat ends. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 3 ft by 5 ft" },
            { letter: "B", text: "a rectangle 6 ft by 5 ft" },
            { letter: "C", text: "a rectangle 6π ft by 5 ft" },
            { letter: "D", text: "a circle 6 ft across" }
          ],
          correct: "B"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "In a net of the bale, the curved surface unrolls into a rectangle. What are its length and width?",
          choices: [
            { letter: "A", text: "6π ft by 5 ft" },
            { letter: "B", text: "3π ft by 5 ft" },
            { letter: "C", text: "6 ft by 5 ft" },
            { letter: "D", text: "9π ft by 5 ft" }
          ],
          correct: "A"
        },
        {
          id: "bales",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "A farmer needs 3,000 ft³ of hay for the winter. How many bales like this one must he make?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "67" },
            { letter: "C", text: "22" },
            { letter: "D", text: "21" }
          ],
          correct: "C"
        },
        {
          id: "weight",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The hay weighs about 11 lb per cubic foot. About how much does the bale weigh, to the nearest pound?",
          choices: [
            { letter: "A", text: "518 lb" },
            { letter: "B", text: "6,220 lb" },
            { letter: "C", text: "495 lb" },
            { letter: "D", text: "1,555 lb" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df1-worms-anthill",
      family: "GEO",
      mode: "worms",
      title: "The Ant Mound",
      kind: "3-D figures · G.DF.1",
      blurb: "A cone of soil built by a busy ant colony.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A wide, low cone standing on the ground. A dashed diameter across its circular base is 80 cm, and a dashed segment from the top down to the center of the base is 30 cm, with a right-angle mark. The hidden back half of the base is dashed.\"><path class=\"sh\" d=\"M160 43.6 L65.6 104.9 A104 31.2 0 1 0 254.4 104.9 Z\"/><path class=\"ln\" d=\"M65.6 104.9 L160 43.6 L254.4 104.9 A104 31.2 0 1 1 65.6 104.9\"/><path class=\"ln dash\" d=\"M65.6 104.9 A104 31.2 0 0 1 254.4 104.9\"/><line class=\"thin dash\" x1=\"160\" y1=\"43.6\" x2=\"160\" y2=\"118\"/><line class=\"thin dash\" x1=\"56\" y1=\"118\" x2=\"264\" y2=\"118\"/><path class=\"thin\" d=\"M160 111 H167 V118\"/><text x=\"210\" y=\"136\" text-anchor=\"middle\">80 cm</text><text class=\"sm\" x=\"155\" y=\"77.8\" text-anchor=\"end\">30 cm</text></svg></figure><p class=\"geo-given\">An ant mound in a meadow is shaped like a cone. Its base is 80 cm across, and it is 30 cm tall.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the mound, in terms of π?",
          choices: [
            { letter: "A", text: "16,000π cm³" },
            { letter: "B", text: "64,000π cm³" },
            { letter: "C", text: "24,000π cm³" },
            { letter: "D", text: "48,000π cm³" }
          ],
          correct: "A"
        },
        {
          id: "slant",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the slant height of the mound, from its top down to the edge of its base?",
          choices: [
            { letter: "A", text: "70 cm" },
            { letter: "B", text: "50 cm" },
            { letter: "C", text: "about 8.4 cm" },
            { letter: "D", text: "110 cm" }
          ],
          correct: "B"
        },
        {
          id: "vcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane cuts the mound through its top and the center of its base. What is the area of the cross section?",
          choices: [
            { letter: "A", text: "2,000 cm²" },
            { letter: "B", text: "2,400 cm²" },
            { letter: "C", text: "1,200 cm²" },
            { letter: "D", text: "600 cm²" }
          ],
          correct: "C"
        },
        {
          id: "levelcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A level plane cuts the mound 12 cm above the ground. What is the cross section?",
          choices: [
            { letter: "A", text: "a circle with radius 40 cm" },
            { letter: "B", text: "a circle with radius 24 cm" },
            { letter: "C", text: "a circle with radius 28 cm" },
            { letter: "D", text: "a circle with radius 16 cm" }
          ],
          correct: "B"
        },
        {
          id: "lateral",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the area of the mound's sloping surface, not counting the ground under it, in terms of π?",
          choices: [
            { letter: "A", text: "3,600π cm²" },
            { letter: "B", text: "1,200π cm²" },
            { letter: "C", text: "4,000π cm²" },
            { letter: "D", text: "2,000π cm²" }
          ],
          correct: "D"
        },
        {
          id: "soil",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "About 45% of the mound's volume is tunnels and rooms; the rest is soil. How much soil is in the mound, to the nearest liter? Use 1 L = 1,000 cm³.",
          choices: [
            { letter: "A", text: "46 L" },
            { letter: "B", text: "83 L" },
            { letter: "C", text: "23 L" },
            { letter: "D", text: "28 L" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df1-worms-beehive",
      family: "GEO",
      mode: "worms",
      title: "The Beehive Box",
      kind: "3-D figures · G.DF.1",
      blurb: "An open wooden frame where the bees build their comb.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A rectangular wooden frame with no top and no bottom, drawn in oblique view: 50 cm long, 42 cm wide and 24 cm tall. The inner edge of the top rim shows the thickness of the walls. Hidden outer edges are dashed.\"><polygon class=\"sh2\" points=\"50,146 230,146 230,59.6 50,59.6\"/><path class=\"ln\" d=\"M50 146 L230 146 M230 146 L230 59.6 M230 59.6 L50 59.6 M50 146 L50 59.6 M295.5 108.2 L295.5 21.8 M295.5 21.8 L115.5 21.8 M230 146 L295.5 108.2 M230 59.6 L295.5 21.8 M50 59.6 L115.5 21.8\"/><path class=\"ln dash\" d=\"M115.5 108.2 L295.5 108.2 M115.5 108.2 L115.5 21.8 M50 146 L115.5 108.2\"/><polygon class=\"thin\" points=\"60.3,57.8 225.9,57.8 285.2,23.6 119.6,23.6\"/><line class=\"thin\" x1=\"119.6\" y1=\"23.6\" x2=\"119.6\" y2=\"57.8\"/><text x=\"140\" y=\"163\" text-anchor=\"middle\">50 cm</text><text x=\"44\" y=\"107.8\" text-anchor=\"end\">24 cm</text><text x=\"268.7\" y=\"143.1\">42 cm</text></svg></figure><p class=\"geo-given\">A beehive box is a wooden frame with four walls and no top or bottom. Outside, it is 50 cm long, 42 cm wide and 24 cm tall. The walls are 2 cm thick.</p>",
      claims: [
        {
          id: "paint",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the area of the four outside walls of the box?",
          choices: [
            { letter: "A", text: "8,616 cm²" },
            { letter: "B", text: "50,400 cm²" },
            { letter: "C", text: "2,208 cm²" },
            { letter: "D", text: "4,416 cm²" }
          ],
          correct: "D"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Ignore the thickness of the walls. Which shapes make up a net of the outside of the box?",
          choices: [
            { letter: "A", text: "6 rectangles: two 50 by 24, two 42 by 24, two 50 by 42" },
            { letter: "B", text: "4 rectangles: two 46 by 24 cm and two 38 by 24 cm" },
            { letter: "C", text: "4 rectangles: two 50 by 24 cm and two 50 by 42 cm" },
            { letter: "D", text: "4 rectangles: two 50 by 24 cm and two 42 by 24 cm" }
          ],
          correct: "D"
        },
        {
          id: "inside",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much space is inside the box, between its walls?",
          choices: [
            { letter: "A", text: "34,960 cm³" },
            { letter: "B", text: "41,952 cm³" },
            { letter: "C", text: "50,400 cm³" },
            { letter: "D", text: "46,080 cm³" }
          ],
          correct: "B"
        },
        {
          id: "wood",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How much wood is in the four walls?",
          choices: [
            { letter: "A", text: "8,448 cm³" },
            { letter: "B", text: "4,320 cm³" },
            { letter: "C", text: "8,832 cm³" },
            { letter: "D", text: "15,440 cm³" }
          ],
          correct: "A"
        },
        {
          id: "levelcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A level plane cuts the box halfway up. What is the cross section?",
          choices: [
            { letter: "A", text: "a 50 cm by 42 cm rectangle with a 46 cm by 38 cm hole" },
            { letter: "B", text: "a 50 cm by 42 cm rectangle with no hole" },
            { letter: "C", text: "a 50 cm by 24 cm rectangle" },
            { letter: "D", text: "a 50 cm by 42 cm rectangle with a 48 cm by 40 cm hole" }
          ],
          correct: "A"
        },
        {
          id: "cans",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "A beekeeper paints the four outside walls of 3 boxes like this one. One can of paint covers 6,000 cm². How many cans must she buy?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "1" },
            { letter: "C", text: "3" },
            { letter: "D", text: "2" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df1-worms-snowman",
      family: "GEO",
      mode: "worms",
      title: "The Snowman",
      kind: "3-D figures · G.DF.1",
      blurb: "Three balls of snow, stacked on a winter lawn.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A snowman made of three spheres stacked on the ground, each touching the next: from the bottom up they are 60 cm, 40 cm and 24 cm across. Each ball shows its equator, with the hidden back half dashed. A twig arm sticks out of the middle ball.\"><line class=\"thin\" x1=\"70\" y1=\"150\" x2=\"280\" y2=\"150\"/><circle class=\"ln\" cx=\"175\" cy=\"117\" r=\"33\"/><path class=\"thin\" d=\"M142 117 A33 9.9 0 0 0 208 117\"/><path class=\"thin dash\" d=\"M142 117 A33 9.9 0 0 1 208 117\"/><circle class=\"ln\" cx=\"175\" cy=\"62\" r=\"22\"/><path class=\"thin\" d=\"M153 62 A22 6.6 0 0 0 197 62\"/><path class=\"thin dash\" d=\"M153 62 A22 6.6 0 0 1 197 62\"/><circle class=\"ln\" cx=\"175\" cy=\"26.8\" r=\"13.2\"/><path class=\"thin\" d=\"M161.8 26.8 A13.2 4 0 0 0 188.2 26.8\"/><path class=\"thin dash\" d=\"M161.8 26.8 A13.2 4 0 0 1 188.2 26.8\"/><path class=\"thin\" d=\"M130 84 V150 M126 84 H134 M126 150 H134\"/><text x=\"124\" y=\"122\" text-anchor=\"end\">60 cm</text><path class=\"thin\" d=\"M141 40 V84 M137 40 H145 M137 84 H145\"/><text x=\"135\" y=\"67\" text-anchor=\"end\">40 cm</text><path class=\"thin\" d=\"M149.8 13.6 V40 M145.8 13.6 H153.8 M145.8 40 H153.8\"/><text x=\"143.8\" y=\"31.8\" text-anchor=\"end\">24 cm</text><path class=\"thin\" d=\"M194.1 55.4 l24 -14 M210.1 46.1 l4 -9\"/></svg></figure><p class=\"geo-given\">A snowman is made of three balls of snow, each a sphere. From the bottom up, their diameters are 60 cm, 40 cm and 24 cm.</p>",
      claims: [
        {
          id: "bottom",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the bottom ball, in terms of π?",
          choices: [
            { letter: "A", text: "36,000π cm³" },
            { letter: "B", text: "27,000π cm³" },
            { letter: "C", text: "3,600π cm³" },
            { letter: "D", text: "288,000π cm³" }
          ],
          correct: "A"
        },
        {
          id: "total",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How much snow is in the whole snowman, to the nearest liter? Use 1 L = 1,000 cm³.",
          choices: [
            { letter: "A", text: "998 L" },
            { letter: "B", text: "1,231 L" },
            { letter: "C", text: "154 L" },
            { letter: "D", text: "115 L" }
          ],
          correct: "C"
        },
        {
          id: "flat",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Before the middle ball goes on, the top of the bottom ball is sliced off flat. The flat face is a circle with a radius of 18 cm. How far is that flat face from the center of the bottom ball?",
          choices: [
            { letter: "A", text: "6 cm" },
            { letter: "B", text: "12 cm" },
            { letter: "C", text: "24 cm" },
            { letter: "D", text: "about 35.0 cm" }
          ],
          correct: "C"
        },
        {
          id: "head",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the surface area of the head, the top ball, in terms of π?",
          choices: [
            { letter: "A", text: "288π cm²" },
            { letter: "B", text: "144π cm²" },
            { letter: "C", text: "2,304π cm²" },
            { letter: "D", text: "576π cm²" }
          ],
          correct: "D"
        },
        {
          id: "sled",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "A sled carries 18 L of packed snow per trip. How many trips bring enough snow for the whole snowman? Use 1 L = 1,000 cm³.",
          choices: [
            { letter: "A", text: "8" },
            { letter: "B", text: "9" },
            { letter: "C", text: "69" },
            { letter: "D", text: "7" }
          ],
          correct: "B"
        },
        {
          id: "true",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Which statement about cross sections of the snowballs is true?",
          choices: [
            { letter: "A", text: "A plane through the center of the middle ball makes a circle with radius 40 cm." },
            { letter: "B", text: "Every plane that cuts through a ball makes a circle." },
            { letter: "C", text: "A slanted plane cuts a ball in an oval that is not a circle." },
            { letter: "D", text: "A cut 25 cm from the bottom ball's center makes a bigger circle than a cut 15 cm from it." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df1-worms-corner-planter",
      family: "GEO",
      mode: "worms",
      title: "The Corner Planter",
      kind: "3-D figures · G.DF.1",
      blurb: "A three-sided planter that fits the corner of a deck.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A prism standing on a right-triangle floor, open at the top, drawn in oblique view. The front wall is 80 cm long and the right wall is 60 cm long; they meet at a right angle. The third wall, 100 cm long, runs from the front left corner to the back right corner. The walls are 40 cm tall and soil is shaded inside. The hidden bottom edge of the 100 cm wall is dashed.\"><polygon class=\"sh2\" points=\"58,146 218,146 218,66 58,66\"/><polygon class=\"sh2\" points=\"218,146 260.4,103.6 260.4,23.6 218,66\"/><polygon class=\"sh\" points=\"247.8,36.2 105.7,66 218,66\"/><path class=\"ln\" d=\"M58 146 L218 146 M218 146 L260.4 103.6 M58 66 L218 66 M218 66 L260.4 23.6 M58 66 L260.4 23.6 M218 146 L218 66 M58 146 L58 66 M260.4 103.6 L260.4 23.6\"/><path class=\"ln dash\" d=\"M58 146 L260.4 103.6\"/><path class=\"thin\" d=\"M204 66 L208.9 61.1 L222.9 61.1\"/><text x=\"138\" y=\"163\" text-anchor=\"middle\">80 cm</text><text x=\"248.2\" y=\"138.8\">60 cm</text><text x=\"151.2\" y=\"36.8\" text-anchor=\"end\">100 cm</text><text x=\"52\" y=\"111\" text-anchor=\"end\">40 cm</text></svg></figure><p class=\"geo-given\">A corner planter is a prism with no top. Its floor is a right triangle: the two walls that meet at the right-angled corner are 60 cm and 80 cm long, and the third wall is 100 cm long. The walls are 40 cm tall. Ignore the thickness of the boards. Soil fills it to 5 cm below the top.</p>",
      claims: [
        {
          id: "full",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much soil would fill the planter to the very top?",
          choices: [
            { letter: "A", text: "96,000 cm³" },
            { letter: "B", text: "192,000 cm³" },
            { letter: "C", text: "160,000 cm³" },
            { letter: "D", text: "2,400 cm³" }
          ],
          correct: "A"
        },
        {
          id: "bags",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "Potting soil comes in 25 L bags. How many bags are needed to fill the planter to 5 cm below the top? Use 1 L = 1,000 cm³.",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "7" },
            { letter: "C", text: "4" },
            { letter: "D", text: "6" }
          ],
          correct: "C"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Which shapes make up a net of the planter, which has no top?",
          choices: [
            { letter: "A", text: "2 right triangles and 3 rectangles" },
            { letter: "B", text: "1 right triangle and 3 rectangles" },
            { letter: "C", text: "1 right triangle and 2 rectangles" },
            { letter: "D", text: "3 right triangles and 1 rectangle" }
          ],
          correct: "B"
        },
        {
          id: "boards",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much board makes the three walls and the floor?",
          choices: [
            { letter: "A", text: "12,000 cm²" },
            { letter: "B", text: "8,000 cm²" },
            { letter: "C", text: "14,400 cm²" },
            { letter: "D", text: "9,600 cm²" }
          ],
          correct: "A"
        },
        {
          id: "cut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane parallel to the 60 cm wall cuts the planter halfway along the 80 cm wall. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 50 cm by 40 cm" },
            { letter: "B", text: "a rectangle 40 cm by 40 cm" },
            { letter: "C", text: "a rectangle 60 cm by 40 cm" },
            { letter: "D", text: "a rectangle 30 cm by 40 cm" }
          ],
          correct: "D"
        },
        {
          id: "not",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Which statement about the planter is NOT true?",
          choices: [
            { letter: "A", text: "The 100 cm wall has more area than either of the other walls." },
            { letter: "B", text: "The 100 cm wall has the same area as the other two walls together." },
            { letter: "C", text: "The floor and the top rim are congruent triangles." },
            { letter: "D", text: "A level plane cuts it in a right triangle with legs 60 cm and 80 cm." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df1-worms-termite-mound",
      family: "GEO",
      mode: "worms",
      title: "The Termite Mound",
      kind: "3-D figures · G.DF.1",
      blurb: "A tall cone of dried mud on the savanna.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 165\" role=\"img\" aria-label=\"A tall, narrow cone standing on the ground. A dashed segment from the top down to the center of the base is 3.5 m, and a dashed radius of the base is 1.2 m, with a right-angle mark between them. The hidden back half of the base is dashed.\"><path class=\"sh\" d=\"M160 19.8 L117.1 138.6 A43.2 13 0 1 0 202.9 138.6 Z\"/><path class=\"ln\" d=\"M117.1 138.6 L160 19.8 L202.9 138.6 A43.2 13 0 1 1 117.1 138.6\"/><path class=\"ln dash\" d=\"M117.1 138.6 A43.2 13 0 0 1 202.9 138.6\"/><line class=\"thin dash\" x1=\"160\" y1=\"19.8\" x2=\"160\" y2=\"140\"/><line class=\"thin dash\" x1=\"160\" y1=\"140\" x2=\"203.2\" y2=\"140\"/><path class=\"thin\" d=\"M160 133 H167 V140\"/><text x=\"209.2\" y=\"145\">1.2 m</text><path class=\"thin\" d=\"M102.8 19.8 V140 M98.8 19.8 H106.8 M98.8 140 H106.8\"/><text x=\"96.8\" y=\"84.9\" text-anchor=\"end\">3.5 m</text><line class=\"thin\" x1=\"60\" y1=\"155\" x2=\"270\" y2=\"155\"/></svg></figure><p class=\"geo-given\">A termite mound on the savanna is shaped like a cone. Its base has a radius of 1.2 m, and it is 3.5 m tall.</p>",
      claims: [
        {
          id: "slant",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the slant height of the termite mound?",
          choices: [
            { letter: "A", text: "about 3.3 m" },
            { letter: "B", text: "2.3 m" },
            { letter: "C", text: "4.7 m" },
            { letter: "D", text: "3.7 m" }
          ],
          correct: "D"
        },
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the mound, to the nearest tenth of a cubic meter?",
          choices: [
            { letter: "A", text: "15.8 m³" },
            { letter: "B", text: "21.1 m³" },
            { letter: "C", text: "5.6 m³" },
            { letter: "D", text: "5.3 m³" }
          ],
          correct: "D"
        },
        {
          id: "vcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane cuts the mound through its top and the center of its base. What is the cross section?",
          choices: [
            { letter: "A", text: "a circle with radius 1.2 m" },
            { letter: "B", text: "a triangle with base 1.2 m and height 3.5 m" },
            { letter: "C", text: "a triangle with base 2.4 m and height 3.5 m" },
            { letter: "D", text: "a rectangle 2.4 m by 3.5 m" }
          ],
          correct: "C"
        },
        {
          id: "levelcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A level plane cuts the mound 2.1 m above the ground. What is the radius of the cross section?",
          choices: [
            { letter: "A", text: "0.6 m" },
            { letter: "B", text: "0.48 m" },
            { letter: "C", text: "0.72 m" },
            { letter: "D", text: "1.2 m" }
          ],
          correct: "B"
        },
        {
          id: "lateral",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the area of the mound's curved outer surface, in terms of π?",
          choices: [
            { letter: "A", text: "4.44π m²" },
            { letter: "B", text: "4.2π m²" },
            { letter: "C", text: "8.88π m²" },
            { letter: "D", text: "5.88π m²" }
          ],
          correct: "A"
        },
        {
          id: "mass",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "Dried mound mud has a mass of about 1,400 kg per cubic meter. What is the mass of the mound, to the nearest 100 kg?",
          choices: [
            { letter: "A", text: "7,800 kg" },
            { letter: "B", text: "11,100 kg" },
            { letter: "C", text: "7,400 kg" },
            { letter: "D", text: "22,200 kg" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df1-worms-tree-trunk",
      family: "GEO",
      mode: "worms",
      title: "The Fallen Tree Trunk",
      kind: "3-D figures · G.DF.1",
      blurb: "A sawmill cuts the biggest square beam from a round log.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Two views of a log. End view: a circle with a dashed diameter of 50 cm and a shaded square inside it whose four corners lie on the circle. Side view: the log lying on its side, 3.2 m long, with the hidden top and bottom faces of the beam inside shown as dashed lines.\"><circle class=\"ln\" cx=\"72\" cy=\"76\" r=\"60\"/><polygon class=\"sh\" points=\"29.6,33.6 114.4,33.6 114.4,118.4 29.6,118.4\"/><line class=\"thin dash\" x1=\"12\" y1=\"76\" x2=\"132\" y2=\"76\"/><text class=\"sm\" x=\"72\" y=\"71\" text-anchor=\"middle\">50 cm</text><text class=\"sm\" x=\"72\" y=\"154\" text-anchor=\"middle\">end view</text><path class=\"ln\" d=\"M162 64.3 A4.1 11.7 0 0 0 162 87.7\"/><path class=\"ln dash\" d=\"M162 64.3 A4.1 11.7 0 0 1 162 87.7\"/><path class=\"ln\" d=\"M162 64.3 H302 M162 87.7 H302\"/><ellipse class=\"ln\" cx=\"302\" cy=\"76\" rx=\"4.1\" ry=\"11.7\"/><path class=\"thin dash\" d=\"M162 67.7 H302 M162 84.3 H302\"/><path class=\"thin\" d=\"M162 99.7 H302 M162 95.7 V103.7 M302 95.7 V103.7\"/><text x=\"232\" y=\"115.7\" text-anchor=\"middle\">3.2 m</text><text class=\"sm\" x=\"232\" y=\"154\" text-anchor=\"middle\">side view</text></svg><figcaption>Not drawn to scale</figcaption></figure><p class=\"geo-given\">A fallen tree trunk is a cylinder 50 cm across and 3.2 m long. A sawmill cuts the largest possible square beam from it: the beam runs the whole length, and the corners of its square ends lie on the circular ends of the trunk.</p>",
      claims: [
        {
          id: "side",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "How long is each side of the beam's square end?",
          choices: [
            { letter: "A", text: "50 cm" },
            { letter: "B", text: "25√2 cm" },
            { letter: "C", text: "25 cm" },
            { letter: "D", text: "50√2 cm" }
          ],
          correct: "B"
        },
        {
          id: "trunk",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the trunk, to the nearest hundredth of a cubic meter?",
          choices: [
            { letter: "A", text: "0.21 m³" },
            { letter: "B", text: "5.03 m³" },
            { letter: "C", text: "2.51 m³" },
            { letter: "D", text: "0.63 m³" }
          ],
          correct: "D"
        },
        {
          id: "beam",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the beam, to the nearest hundredth of a cubic meter?",
          choices: [
            { letter: "A", text: "0.20 m³" },
            { letter: "B", text: "1.60 m³" },
            { letter: "C", text: "0.40 m³" },
            { letter: "D", text: "0.80 m³" }
          ],
          correct: "C"
        },
        {
          id: "waste",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "What percent of the trunk's wood is cut away when the beam is made, to the nearest percent?",
          choices: [
            { letter: "A", text: "68%" },
            { letter: "B", text: "64%" },
            { letter: "C", text: "36%" },
            { letter: "D", text: "57%" }
          ],
          correct: "C"
        },
        {
          id: "bark",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Bark covers the curved surface of the trunk. What is the area of the bark, to the nearest tenth of a square meter?",
          choices: [
            { letter: "A", text: "5.0 m²" },
            { letter: "B", text: "5.4 m²" },
            { letter: "C", text: "2.5 m²" },
            { letter: "D", text: "0.4 m²" }
          ],
          correct: "A"
        },
        {
          id: "diag",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane cuts the beam along its whole length, through two opposite long edges. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 50 cm by 3.2 m" },
            { letter: "B", text: "a rectangle 50√2 cm by 3.2 m" },
            { letter: "C", text: "a square with sides of 50 cm" },
            { letter: "D", text: "a rectangle 25 cm by 3.2 m" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df1-worms-woodpile",
      family: "GEO",
      mode: "worms",
      title: "The Woodpile",
      kind: "3-D figures · G.DF.1",
      blurb: "Round logs stacked in a rectangular pile.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A rectangular pile of logs drawn in oblique view, 10 ft long, 4 ft tall and 4 ft deep. The front shows the round cut ends of the logs in 8 rows of 20, each log touching its neighbors.\"><polygon class=\"sh\" points=\"38,66 238,66 272.6,46 72.6,46\"/><polygon class=\"sh2\" points=\"238,146 272.6,126 272.6,46 238,66\"/><path class=\"ln\" d=\"M38 146 L238 146 M238 146 L238 66 M238 66 L38 66 M38 146 L38 66 M272.6 126 L272.6 46 M272.6 46 L72.6 46 M238 146 L272.6 126 M238 66 L272.6 46 M38 66 L72.6 46\"/><circle class=\"thin\" cx=\"43\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"43\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"43\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"43\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"43\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"43\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"43\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"43\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"53\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"53\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"53\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"53\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"53\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"53\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"53\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"53\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"63\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"63\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"63\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"63\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"63\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"63\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"63\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"63\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"73\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"73\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"73\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"73\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"73\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"73\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"73\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"73\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"83\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"83\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"83\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"83\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"83\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"83\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"83\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"83\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"93\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"93\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"93\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"93\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"93\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"93\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"93\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"93\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"103\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"103\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"103\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"103\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"103\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"103\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"103\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"103\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"113\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"113\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"113\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"113\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"113\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"113\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"113\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"113\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"123\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"123\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"123\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"123\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"123\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"123\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"123\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"123\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"133\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"133\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"133\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"133\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"133\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"133\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"133\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"133\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"143\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"143\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"143\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"143\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"143\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"143\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"143\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"143\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"153\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"153\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"153\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"153\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"153\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"153\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"153\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"153\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"163\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"163\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"163\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"163\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"163\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"163\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"163\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"163\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"173\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"173\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"173\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"173\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"173\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"173\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"173\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"173\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"183\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"183\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"183\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"183\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"183\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"183\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"183\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"183\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"193\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"193\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"193\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"193\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"193\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"193\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"193\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"193\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"203\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"203\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"203\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"203\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"203\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"203\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"203\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"203\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"213\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"213\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"213\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"213\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"213\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"213\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"213\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"213\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"223\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"223\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"223\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"223\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"223\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"223\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"223\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"223\" cy=\"71\" r=\"5\"/><circle class=\"thin\" cx=\"233\" cy=\"141\" r=\"5\"/><circle class=\"thin\" cx=\"233\" cy=\"131\" r=\"5\"/><circle class=\"thin\" cx=\"233\" cy=\"121\" r=\"5\"/><circle class=\"thin\" cx=\"233\" cy=\"111\" r=\"5\"/><circle class=\"thin\" cx=\"233\" cy=\"101\" r=\"5\"/><circle class=\"thin\" cx=\"233\" cy=\"91\" r=\"5\"/><circle class=\"thin\" cx=\"233\" cy=\"81\" r=\"5\"/><circle class=\"thin\" cx=\"233\" cy=\"71\" r=\"5\"/><text x=\"138\" y=\"163\" text-anchor=\"middle\">10 ft</text><text x=\"32\" y=\"111\" text-anchor=\"end\">4 ft</text><text x=\"265.3\" y=\"148\">4 ft</text></svg></figure><p class=\"geo-given\">A woodpile is shaped like a rectangular prism 10 ft long, 4 ft tall and 4 ft deep. Each log is a cylinder 6 in across and 4 ft long. The logs are stacked in straight rows and columns, touching each other and filling the pile from edge to edge. Use 1 ft = 12 in.</p>",
      claims: [
        {
          id: "one",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of one log, in terms of π?",
          choices: [
            { letter: "A", text: "2π ft³" },
            { letter: "B", text: "π ft³" },
            { letter: "C", text: "36π ft³" },
            { letter: "D", text: "0.25π ft³" }
          ],
          correct: "D"
        },
        {
          id: "cut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane parallel to the front of the pile cuts through it 1 ft behind the front. What does the cross section look like?",
          choices: [
            { letter: "A", text: "160 circles, each 6 in across" },
            { letter: "B", text: "160 rectangles, each 6 in by 4 ft" },
            { letter: "C", text: "one 10 ft by 4 ft rectangle" },
            { letter: "D", text: "160 circles, each 3 in across" }
          ],
          correct: "A"
        },
        {
          id: "wood",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How much of the pile's space is wood, to the nearest cubic foot?",
          choices: [
            { letter: "A", text: "160 ft³" },
            { letter: "B", text: "126 ft³" },
            { letter: "C", text: "34 ft³" },
            { letter: "D", text: "503 ft³" }
          ],
          correct: "B"
        },
        {
          id: "weight",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "Dry oak weighs about 40 lb per cubic foot of solid wood. What do the logs weigh, to the nearest 10 lb?",
          choices: [
            { letter: "A", text: "1,370 lb" },
            { letter: "B", text: "5,030 lb" },
            { letter: "C", text: "20,110 lb" },
            { letter: "D", text: "6,400 lb" }
          ],
          correct: "B"
        },
        {
          id: "bark",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Bark covers the curved side of every log. What is the total area of the bark, to the nearest square foot?",
          choices: [
            { letter: "A", text: "503 ft²" },
            { letter: "B", text: "1,068 ft²" },
            { letter: "C", text: "1,005 ft²" },
            { letter: "D", text: "2,011 ft²" }
          ],
          correct: "C"
        },
        {
          id: "stove",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "A wood stove burns 0.9 ft³ of wood a day. For how many full days will the logs last?",
          choices: [
            { letter: "A", text: "177" },
            { letter: "B", text: "38" },
            { letter: "C", text: "140" },
            { letter: "D", text: "139" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
