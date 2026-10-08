/* SOL Labyrinth — Geometry game (family GEO), three-dimensional figures: G.DF.1–G.DF.2 (Virginia 2023 Geometry SOL). Original items only.
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given
   facts, then six questions about it. Solids are drawn in simple oblique projection, hidden edges dashed. Every numeric
   answer was computed, and every distractor is a named mistake (radius for diameter, height for slant height, a missing
   1/3, lateral for total surface area, k for k² or k³ …). */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-df1-ballcan",
      family: "GEO",
      title: "Three Balls in a Can",
      kind: "3-D figures · G.DF.1",
      blurb: "A cylinder that holds three spheres.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"A clear cylinder-shaped can lying on its side, 24 cm long with radius 4 cm, holding three balls in a row\">" +
        "<circle class=\"sh2\" cx=\"86\" cy=\"70\" r=\"36\"/><circle class=\"sh2\" cx=\"158\" cy=\"70\" r=\"36\"/><circle class=\"sh2\" cx=\"230\" cy=\"70\" r=\"36\"/>" +
        "<path class=\"ln\" d=\"M50 34 H266 M50 106 H266\"/>" +
        "<path class=\"ln\" d=\"M50 34 A11 36 0 0 0 50 106\"/><path class=\"ln dash\" d=\"M50 34 A11 36 0 0 1 50 106\"/>" +
        "<ellipse class=\"ln\" cx=\"266\" cy=\"70\" rx=\"11\" ry=\"36\"/>" +
        "<line class=\"thin\" x1=\"266\" y1=\"70\" x2=\"266\" y2=\"34\"/><circle class=\"dt\" cx=\"266\" cy=\"70\" r=\"2.5\"/>" +
        "<text x=\"282\" y=\"58\">4 cm</text><text x=\"140\" y=\"128\">24 cm</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A clear can is a cylinder with radius 4 cm and height 24 cm (shown lying on its side). It holds three balls in a row. Each ball is a sphere with radius 4 cm, and the balls touch each other, the ends and the side of the can.</p>",
      claims: [
        {
          id: "canvol",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the can, in terms of π?",
          choices: [
            { letter: "A", text: "96π cm³" },
            { letter: "B", text: "384π cm³" },
            { letter: "C", text: "192π cm³" },
            { letter: "D", text: "1536π cm³" }
          ],
          correct: "B"
        },
        {
          id: "ballvol",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of one ball, to the nearest tenth of a cubic centimeter?",
          choices: [
            { letter: "A", text: "201.1 cm³" },
            { letter: "B", text: "67.0 cm³" },
            { letter: "C", text: "2144.7 cm³" },
            { letter: "D", text: "268.1 cm³" }
          ],
          correct: "D"
        },
        {
          id: "label",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "A paper label covers the curved side of the can but not its two ends. What is the area of the label, in terms of π?",
          choices: [
            { letter: "A", text: "192π cm²" },
            { letter: "B", text: "224π cm²" },
            { letter: "C", text: "96π cm²" },
            { letter: "D", text: "384π cm²" }
          ],
          correct: "A"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A net of the can is a rectangle with a circle attached to each of two opposite sides. One side of the rectangle is 24 cm. How long is the other side, the one that wraps around a circular end?",
          choices: [
            { letter: "A", text: "4π cm" },
            { letter: "B", text: "8 cm" },
            { letter: "C", text: "8π cm" },
            { letter: "D", text: "16π cm" }
          ],
          correct: "C"
        },
        {
          id: "parallel",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the circular ends cuts the can halfway along its length. What is the cross section of the can?",
          choices: [
            { letter: "A", text: "a circle with radius 4 cm" },
            { letter: "B", text: "a circle with radius 8 cm" },
            { letter: "C", text: "a rectangle 8 cm by 24 cm" },
            { letter: "D", text: "a circle with radius 2 cm" }
          ],
          correct: "A"
        },
        {
          id: "lengthwise",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane perpendicular to the circular ends cuts the can along its center line, the long way. What is the cross section of the can?",
          choices: [
            { letter: "A", text: "a rectangle 4 cm by 24 cm" },
            { letter: "B", text: "a rectangle 8 cm by 24 cm" },
            { letter: "C", text: "a circle with radius 4 cm" },
            { letter: "D", text: "a triangle with base 8 cm and height 24 cm" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df1-waffle",
      family: "GEO",
      title: "The Waffle Cone",
      kind: "3-D figures · G.DF.1",
      blurb: "A cone, a scoop on top and a paper sleeve.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A cone pointing down with rim diameter 5 cm, height 6 cm and slant height 6.5 cm, with a hemisphere scoop of ice cream sitting on its rim\">" +
        "<path class=\"sh\" d=\"M85 54 A45 45 0 0 1 175 54 A45 10 0 0 1 85 54 Z\"/>" +
        "<path class=\"ln\" d=\"M85 54 L130 162 L175 54\"/>" +
        "<line class=\"thin dash\" x1=\"85\" y1=\"54\" x2=\"175\" y2=\"54\"/>" +
        "<path class=\"thin\" d=\"M60 54 H72 M60 162 H72 M66 54 V162\"/><path class=\"thin dash\" d=\"M72 54 H83 M72 162 H126\"/>" +
        "<text x=\"112\" y=\"49\">5 cm</text><text x=\"22\" y=\"113\">6 cm</text><text x=\"160\" y=\"122\">6.5 cm</text>" +
        "<text class=\"sm\" x=\"186\" y=\"30\">scoop (hemisphere)</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A waffle cone has a circular rim with diameter 5 cm. The cone is 6 cm tall and its slant height is 6.5 cm. The scoop of ice cream on top is a hemisphere with the same 5 cm diameter.</p>",
      claims: [
        {
          id: "conevol",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the cone, to the nearest tenth of a cubic centimeter?",
          choices: [
            { letter: "A", text: "117.8 cm³" },
            { letter: "B", text: "157.1 cm³" },
            { letter: "C", text: "39.3 cm³" },
            { letter: "D", text: "42.5 cm³" }
          ],
          correct: "C"
        },
        {
          id: "scoop",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the hemisphere scoop, to the nearest tenth of a cubic centimeter?",
          choices: [
            { letter: "A", text: "32.7 cm³" },
            { letter: "B", text: "65.4 cm³" },
            { letter: "C", text: "261.8 cm³" },
            { letter: "D", text: "13.1 cm³" }
          ],
          correct: "A"
        },
        {
          id: "total",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The cone is packed full of ice cream and the scoop sits on top. How much ice cream is there in all, to the nearest tenth of a cubic centimeter?",
          choices: [
            { letter: "A", text: "104.7 cm³" },
            { letter: "B", text: "150.5 cm³" },
            { letter: "C", text: "75.3 cm³" },
            { letter: "D", text: "72.0 cm³" }
          ],
          correct: "D"
        },
        {
          id: "sleeve",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "A paper sleeve covers the curved surface of the cone. What is its area, to the nearest tenth of a square centimeter?",
          choices: [
            { letter: "A", text: "47.1 cm²" },
            { letter: "B", text: "51.1 cm²" },
            { letter: "C", text: "70.7 cm²" },
            { letter: "D", text: "102.1 cm²" }
          ],
          correct: "B"
        },
        {
          id: "halfway",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the rim cuts the cone halfway between its tip and its rim. What is the cross section of the cone?",
          choices: [
            { letter: "A", text: "a circle with radius 2.5 cm" },
            { letter: "B", text: "a triangle with base 2.5 cm and height 3 cm" },
            { letter: "C", text: "a square with side 2.5 cm" },
            { letter: "D", text: "a circle with radius 1.25 cm" }
          ],
          correct: "D"
        },
        {
          id: "vertical",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane cuts the cone through its tip and the center of its rim. What is the area of the cross section of the cone?",
          choices: [
            { letter: "A", text: "30 cm²" },
            { letter: "B", text: "16.25 cm²" },
            { letter: "C", text: "15 cm²" },
            { letter: "D", text: "7.5 cm²" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df1-artsolids",
      family: "GEO",
      title: "Plaster Solids in the Art Room",
      kind: "3-D figures · G.DF.1",
      blurb: "A square pyramid and a cube, cut and unfolded.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Left: a square pyramid with tip V, base center O and M the midpoint of a base edge, with height VO and slant height VM drawn. Right: cube ABCDEFGH with hidden edges dashed\">" +
        "<path class=\"ln\" d=\"M12 152 H120 L158 118 L85 63 Z M85 63 L120 152\"/>" +
        "<path class=\"ln dash\" d=\"M12 152 L50 118 H158 M50 118 L85 63\"/>" +
        "<path class=\"thin dash\" d=\"M85 63 V135 H139\"/><path class=\"thin\" d=\"M91 135 V129 H85\"/>" +
        "<line class=\"thin\" x1=\"85\" y1=\"63\" x2=\"139\" y2=\"135\"/>" +
        "<circle class=\"dt\" cx=\"85\" cy=\"63\" r=\"3\"/><circle class=\"dt\" cx=\"85\" cy=\"135\" r=\"3\"/><circle class=\"dt\" cx=\"139\" cy=\"135\" r=\"3\"/>" +
        "<text x=\"79\" y=\"55\">V</text><text x=\"69\" y=\"141\">O</text><text x=\"143\" y=\"153\">M</text><text x=\"48\" y=\"166\">6 cm</text>" +
        "<path class=\"ln\" d=\"M192 152 H264 V80 H192 Z M264 152 L290 129 V57 L264 80 M192 80 L218 57 H290\"/>" +
        "<path class=\"ln dash\" d=\"M192 152 L218 129 H290 M218 129 V57\"/>" +
        "<text x=\"179\" y=\"166\">A</text><text x=\"268\" y=\"166\">B</text><text x=\"295\" y=\"134\">C</text><text x=\"222\" y=\"124\">D</text>" +
        "<text x=\"178\" y=\"84\">E</text><text x=\"251\" y=\"96\">F</text><text x=\"295\" y=\"58\">G</text><text x=\"205\" y=\"52\">H</text>" +
        "<text x=\"212\" y=\"166\">6 cm</text>" +
        "</svg><figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">A plaster square pyramid has base edges of 6 cm. <strong>V</strong> is its tip, <strong>O</strong> the center of its base and <strong>M</strong> the midpoint of a base edge: the height <strong>VO</strong> is 4 cm and the slant height <strong>VM</strong> is 5 cm. Beside it is a plaster cube <strong>ABCDEFGH</strong> with edges of 6 cm.</p>",
      claims: [
        {
          id: "pyrvol",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the pyramid?",
          choices: [
            { letter: "A", text: "144 cm³" },
            { letter: "B", text: "60 cm³" },
            { letter: "C", text: "72 cm³" },
            { letter: "D", text: "48 cm³" }
          ],
          correct: "D"
        },
        {
          id: "pyrsa",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the total surface area of the pyramid, including its base?",
          choices: [
            { letter: "A", text: "60 cm²" },
            { letter: "B", text: "96 cm²" },
            { letter: "C", text: "84 cm²" },
            { letter: "D", text: "156 cm²" }
          ],
          correct: "B"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Which shapes make up a net of the pyramid?",
          choices: [
            { letter: "A", text: "a 6 cm square and 4 triangles with base 6 cm and height 4 cm" },
            { letter: "B", text: "a 6 cm square and 4 rectangles, each 6 cm by 5 cm" },
            { letter: "C", text: "a 6 cm square and 4 triangles with base 6 cm and height 5 cm" },
            { letter: "D", text: "a 6 cm square and 3 triangles with base 6 cm and height 5 cm" }
          ],
          correct: "C"
        },
        {
          id: "pyrcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane perpendicular to the base passes through V, O and M. What is the cross section of the pyramid?",
          choices: [
            { letter: "A", text: "a triangle with base 6 cm and height 4 cm" },
            { letter: "B", text: "a triangle with base 6 cm and height 5 cm" },
            { letter: "C", text: "a square with side 6 cm" },
            { letter: "D", text: "a triangle with base 3 cm and height 4 cm" }
          ],
          correct: "A"
        },
        {
          id: "bde",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane cuts the cube through the three vertices B, D and E. What is the cross section?",
          choices: [
            { letter: "A", text: "a right triangle with legs of 6 cm" },
            { letter: "B", text: "an equilateral triangle with sides of 6√2 cm" },
            { letter: "C", text: "an equilateral triangle with sides of 6 cm" },
            { letter: "D", text: "a rectangle 6 cm by 6√2 cm" }
          ],
          correct: "B"
        },
        {
          id: "aceg",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane cuts the cube through the four vertices A, C, G and E. What is the area of the cross section, to the nearest tenth of a square centimeter?",
          choices: [
            { letter: "A", text: "50.9 cm²" },
            { letter: "B", text: "36.0 cm²" },
            { letter: "C", text: "72.0 cm²" },
            { letter: "D", text: "62.4 cm²" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df1-farm",
      family: "GEO",
      title: "The Barn and the Silo",
      kind: "3-D figures · G.DF.1",
      blurb: "Grain space, a metal roof and paint for the silo.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A barn shaped like a house: a box 30 ft wide, 40 ft long and 12 ft tall with a triangular roof rising 8 ft. Beside it, a silo: a cylinder with radius 10 ft and height 40 ft topped by a hemisphere dome\">" +
        "<path class=\"ln\" d=\"M50 148 H140 V112 L95 88 L50 112 Z\"/>" +
        "<path class=\"ln\" d=\"M140 148 L182 106 V70 L140 112 M95 88 L137 46 L182 70 M50 112 L92 70 L137 46\"/>" +
        "<path class=\"ln dash\" d=\"M50 148 L92 106 H182 M92 106 V70\"/>" +
        "<path class=\"thin\" d=\"M36 88 V148 M31 88 H41 M31 112 H41 M31 148 H41\"/><path class=\"thin dash\" d=\"M41 88 H93\"/>" +
        "<text x=\"1\" y=\"136\">12 ft</text><text x=\"8\" y=\"105\">8 ft</text><text x=\"78\" y=\"166\">30 ft</text><text x=\"168\" y=\"146\">40 ft</text>" +
        "<path class=\"ln\" d=\"M222 32 A28 28 0 0 1 278 32 M222 32 V144 M278 32 V144 M222 144 A28 7 0 0 0 278 144\"/>" +
        "<path class=\"ln dash\" d=\"M222 144 A28 7 0 0 1 278 144\"/>" +
        "<path class=\"thin\" d=\"M222 32 A28 7 0 0 0 278 32\"/><path class=\"thin dash\" d=\"M222 32 A28 7 0 0 1 278 32\"/>" +
        "<line class=\"thin\" x1=\"250\" y1=\"144\" x2=\"278\" y2=\"144\"/><circle class=\"dt\" cx=\"250\" cy=\"144\" r=\"2.5\"/>" +
        "<text x=\"284\" y=\"92\">40 ft</text><text x=\"236\" y=\"166\">10 ft</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">The barn is a prism. Its front wall is a 30 ft by 12 ft rectangle topped by a triangle that rises 8 ft to the peak, and the barn is 40 ft long. The silo is a cylinder with radius 10 ft and height 40 ft, topped by a hemisphere dome.</p>",
      claims: [
        {
          id: "silovol",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How much space is inside the silo, cylinder and dome together, to the nearest cubic foot?",
          choices: [
            { letter: "A", text: "14,661 ft³" },
            { letter: "B", text: "16,755 ft³" },
            { letter: "C", text: "12,566 ft³" },
            { letter: "D", text: "67,021 ft³" }
          ],
          correct: "A"
        },
        {
          id: "barnvol",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "What is the volume of the barn, including the space under the roof?",
          choices: [
            { letter: "A", text: "24,000 ft³" },
            { letter: "B", text: "14,400 ft³" },
            { letter: "C", text: "19,200 ft³" },
            { letter: "D", text: "24,600 ft³" }
          ],
          correct: "C"
        },
        {
          id: "front",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the area of the barn's front wall, the five-sided face?",
          choices: [
            { letter: "A", text: "360 ft²" },
            { letter: "B", text: "480 ft²" },
            { letter: "C", text: "600 ft²" },
            { letter: "D", text: "615 ft²" }
          ],
          correct: "B"
        },
        {
          id: "roof",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The two slanted sides of the roof are covered with metal that costs $3.25 per square foot. The roof does not hang over the walls. What does the metal cost?",
          choices: [
            { letter: "A", text: "$2,080" },
            { letter: "B", text: "$2,210" },
            { letter: "C", text: "$3,900" },
            { letter: "D", text: "$4,420" }
          ],
          correct: "D"
        },
        {
          id: "paint",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The curved wall and the dome of the silo will be painted, but not the floor. One gallon of paint covers 350 square feet. How many whole gallons must be bought?",
          choices: [
            { letter: "A", text: "8 gallons" },
            { letter: "B", text: "10 gallons" },
            { letter: "C", text: "9 gallons" },
            { letter: "D", text: "11 gallons" }
          ],
          correct: "C"
        },
        {
          id: "slice",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the front wall cuts through the middle of the barn. What is the cross section of the barn?",
          choices: [
            { letter: "A", text: "a rectangle 30 ft by 12 ft" },
            { letter: "B", text: "a triangle with base 30 ft and height 8 ft" },
            { letter: "C", text: "a rectangle 40 ft by 12 ft" },
            { letter: "D", text: "a pentagon congruent to the front wall" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df1-tank",
      family: "GEO",
      title: "The Garden Water Tank",
      kind: "3-D figures · G.DF.1",
      blurb: "A cylinder on a cone: gallons, a hose and sheet metal.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A water tank: a cylinder 6 ft across and 5 ft tall with a flat lid, above a cone 4 ft tall that points down\">" +
        "<ellipse class=\"ln\" cx=\"120\" cy=\"28\" rx=\"45\" ry=\"9\"/>" +
        "<path class=\"ln\" d=\"M75 28 V103 M165 28 V103 M75 103 A45 9 0 0 0 165 103 M75 103 L120 163 L165 103\"/>" +
        "<path class=\"ln dash\" d=\"M75 103 A45 9 0 0 1 165 103\"/>" +
        "<line class=\"thin\" x1=\"75\" y1=\"28\" x2=\"165\" y2=\"28\"/>" +
        "<path class=\"thin\" d=\"M184 28 V163 M178 28 H190 M178 103 H190 M178 163 H190\"/>" +
        "<text x=\"108\" y=\"14\">6 ft</text><text x=\"194\" y=\"70\">5 ft</text><text x=\"194\" y=\"138\">4 ft</text>" +
        "<text class=\"sm\" x=\"226\" y=\"70\">cylinder</text><text class=\"sm\" x=\"226\" y=\"138\">cone</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A garden water tank is a cylinder with diameter 6 ft and height 5 ft, closed by a flat lid. Under it is a cone with the same diameter and a height of 4 ft. Use 1 ft³ ≈ 7.48 gallons.</p>",
      claims: [
        {
          id: "conevol",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the cone part of the tank, in terms of π?",
          choices: [
            { letter: "A", text: "36π ft³" },
            { letter: "B", text: "12π ft³" },
            { letter: "C", text: "15π ft³" },
            { letter: "D", text: "48π ft³" }
          ],
          correct: "B"
        },
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "What is the volume of the whole tank, to the nearest cubic foot?",
          choices: [
            { letter: "A", text: "179 ft³" },
            { letter: "B", text: "254 ft³" },
            { letter: "C", text: "188 ft³" },
            { letter: "D", text: "716 ft³" }
          ],
          correct: "A"
        },
        {
          id: "gallons",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "About how many gallons does the full tank hold, to the nearest gallon?",
          choices: [
            { letter: "A", text: "24 gal" },
            { letter: "B", text: "1,057 gal" },
            { letter: "C", text: "1,903 gal" },
            { letter: "D", text: "1,339 gal" }
          ],
          correct: "D"
        },
        {
          id: "hose",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "A hose fills the empty tank at 8 gallons per minute. To the nearest minute, how long does it take to fill?",
          choices: [
            { letter: "A", text: "132 min" },
            { letter: "B", text: "22 min" },
            { letter: "C", text: "167 min" },
            { letter: "D", text: "238 min" }
          ],
          correct: "C"
        },
        {
          id: "metal",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The lid, the curved side of the cylinder and the curved side of the cone are made of sheet metal that costs $6 per square foot. To the nearest dollar, what does the metal cost?",
          choices: [
            { letter: "A", text: "$1,018" },
            { letter: "B", text: "$961" },
            { letter: "C", text: "$848" },
            { letter: "D", text: "$1,188" }
          ],
          correct: "A"
        },
        {
          id: "section",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane cuts the tank through its center line, from the lid to the tip of the cone. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 6 ft by 9 ft" },
            { letter: "B", text: "a circle with radius 3 ft" },
            { letter: "C", text: "a pentagon: a rectangle above a triangle" },
            { letter: "D", text: "a triangle with base 6 ft and height 9 ft" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df2-paintcan",
      family: "GEO",
      title: "Bigger Paint Cans",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Change the radius, the height, or both.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A paint can shaped like a cylinder with radius 3 in and height 8 in\">" +
        "<path class=\"sh2\" d=\"M88 62 A42 11 0 0 0 172 62 V108 A42 11 0 0 1 88 108 Z\"/>" +
        "<ellipse class=\"ln\" cx=\"130\" cy=\"30\" rx=\"42\" ry=\"11\"/>" +
        "<path class=\"ln\" d=\"M88 30 V142 M172 30 V142 M88 142 A42 11 0 0 0 172 142\"/>" +
        "<path class=\"ln dash\" d=\"M88 142 A42 11 0 0 1 172 142\"/>" +
        "<line class=\"thin\" x1=\"130\" y1=\"30\" x2=\"172\" y2=\"30\"/><circle class=\"dt\" cx=\"130\" cy=\"30\" r=\"2.5\"/>" +
        "<text x=\"180\" y=\"35\">3 in</text><text x=\"180\" y=\"92\">8 in</text><text class=\"sm\" x=\"111\" y=\"92\">PAINT</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A paint can is a cylinder with radius 3 in and height 8 in. It holds 72π in³ of paint, and its total surface area (both ends and the side) is 66π in².</p>",
      claims: [
        {
          id: "radius2",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A new can has twice the radius and the same 8 in height. What is its volume?",
          choices: [
            { letter: "A", text: "144π in³" },
            { letter: "B", text: "288π in³" },
            { letter: "C", text: "576π in³" },
            { letter: "D", text: "1152π in³" }
          ],
          correct: "B"
        },
        {
          id: "height2",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A new can has twice the height and the same 3 in radius. What is its total surface area?",
          choices: [
            { letter: "A", text: "132π in²" },
            { letter: "B", text: "264π in²" },
            { letter: "C", text: "96π in²" },
            { letter: "D", text: "114π in²" }
          ],
          correct: "D"
        },
        {
          id: "alldouble",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "If both the radius and the height of the can are doubled, how do its surface area and volume change?",
          choices: [
            { letter: "A", text: "surface area × 4, volume × 8" },
            { letter: "B", text: "surface area × 2, volume × 2" },
            { letter: "C", text: "surface area × 8, volume × 4" },
            { letter: "D", text: "surface area × 4, volume × 4" }
          ],
          correct: "A"
        },
        {
          id: "lid",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A larger lid has three times the diameter of this can's lid. What is the area of the larger lid?",
          choices: [
            { letter: "A", text: "27π in²" },
            { letter: "B", text: "243π in²" },
            { letter: "C", text: "81π in²" },
            { letter: "D", text: "324π in²" }
          ],
          correct: "C"
        },
        {
          id: "tallthin",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A tall, thin can has half the radius and twice the height of this can. How does its volume compare?",
          choices: [
            { letter: "A", text: "It is the same, 72π in³." },
            { letter: "B", text: "It is 1/4 as much, 18π in³." },
            { letter: "C", text: "It is twice as much, 144π in³." },
            { letter: "D", text: "It is half as much, 36π in³." }
          ],
          correct: "D"
        },
        {
          id: "similar",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A larger can is similar to this one and is 12 in tall. What is its volume?",
          choices: [
            { letter: "A", text: "108π in³" },
            { letter: "B", text: "243π in³" },
            { letter: "C", text: "162π in³" },
            { letter: "D", text: "588π in³" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df2-pizza",
      family: "GEO",
      title: "Pizza Night",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Two pizza sizes, two prices and two boxes.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Two round pizzas seen from above: a small one 10 inches across priced at 9 dollars and a large one 15 inches across priced at 18 dollars\">" +
        "<circle class=\"sh\" cx=\"72\" cy=\"80\" r=\"40\"/><circle class=\"thin\" cx=\"72\" cy=\"80\" r=\"34\"/>" +
        "<line class=\"thin dash\" x1=\"32\" y1=\"80\" x2=\"112\" y2=\"80\"/>" +
        "<circle class=\"sh\" cx=\"222\" cy=\"74\" r=\"60\"/><circle class=\"thin\" cx=\"222\" cy=\"74\" r=\"53\"/>" +
        "<line class=\"thin dash\" x1=\"162\" y1=\"74\" x2=\"282\" y2=\"74\"/>" +
        "<text x=\"54\" y=\"74\">10 in</text><text x=\"204\" y=\"68\">15 in</text>" +
        "<text class=\"sm\" x=\"64\" y=\"138\">$9</text><text class=\"sm\" x=\"212\" y=\"148\">$18</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A pizza shop sells a 10-inch pizza for $9 and a 15-inch pizza for $18 (the sizes are diameters). The small pizza comes in a box 10 in by 10 in by 2 in, and the large one in a box 15 in by 15 in by 2 in.</p>",
      claims: [
        {
          id: "crust",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the ratio of the large pizza's circumference (its crust) to the small pizza's circumference?",
          choices: [
            { letter: "A", text: "3 : 2" },
            { letter: "B", text: "9 : 4" },
            { letter: "C", text: "27 : 8" },
            { letter: "D", text: "2 : 3" }
          ],
          correct: "A"
        },
        {
          id: "area",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The small pizza's top has an area of 25π in². What is the area of the large pizza's top?",
          choices: [
            { letter: "A", text: "37.5π in²" },
            { letter: "B", text: "225π in²" },
            { letter: "C", text: "56.25π in²" },
            { letter: "D", text: "84.375π in²" }
          ],
          correct: "C"
        },
        {
          id: "deal",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "Which pizza gives more pizza for the money, and why?",
          choices: [
            { letter: "A", text: "The small: the large costs 2 times as much but is only 1.5 times as wide." },
            { letter: "B", text: "The large: it costs 2 times as much but has 2.25 times the area." },
            { letter: "C", text: "Neither: price and size grow together, so the cost per square inch is the same." },
            { letter: "D", text: "The small: it has 4/9 of the large pizza's area for 1/2 of the price." }
          ],
          correct: "B"
        },
        {
          id: "boxes",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Are the two pizza boxes similar solids?",
          choices: [
            { letter: "A", text: "Yes: both boxes are square prisms." },
            { letter: "B", text: "Yes: the pizzas are similar, so their boxes are too." },
            { letter: "C", text: "Yes: their volumes have ratio 2.25, which is 1.5²." },
            { letter: "D", text: "No: the side lengths have ratio 15/10, but the heights 2/2." }
          ],
          correct: "D"
        },
        {
          id: "boxvol",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The small box has a volume of 200 in³. What is the volume of the large box?",
          choices: [
            { letter: "A", text: "450 in³" },
            { letter: "B", text: "300 in³" },
            { letter: "C", text: "675 in³" },
            { letter: "D", text: "225 in³" }
          ],
          correct: "A"
        },
        {
          id: "party",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A party pizza has 4 times the area of the 10-inch pizza. What is its diameter, to the nearest tenth of an inch?",
          choices: [
            { letter: "A", text: "40.0 in" },
            { letter: "B", text: "20.0 in" },
            { letter: "C", text: "15.9 in" },
            { letter: "D", text: "10.0 in" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df2-statue",
      family: "GEO",
      title: "The Statue and Its Model",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A scale model in concrete, and two pedestals.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A 12-foot statue of a person on a box-shaped pedestal, and an 18-inch model of the statue on its own box-shaped pedestal\">" +
        "<path class=\"ln\" d=\"M54 158 H150 V128 H54 Z M54 128 L78 114 H174 L150 128 M150 158 L174 144 V114\"/>" +
        "<path class=\"ln dash\" d=\"M54 158 L78 144 H174 M78 144 V114\"/>" +
        "<circle class=\"sh2\" cx=\"114\" cy=\"26\" r=\"10\"/>" +
        "<path class=\"sh2\" d=\"M100 40 H128 L123 80 L126 121 H116 L114 92 L112 121 H102 L105 80 Z\"/>" +
        "<path class=\"ln\" d=\"M100 42 L95 78 M128 42 L133 78\"/>" +
        "<path class=\"thin\" d=\"M34 16 H46 M34 121 H46 M40 16 V121\"/><text x=\"2\" y=\"74\">12 ft</text>" +
        "<path class=\"ln\" d=\"M222 158 H270 V140 H222 Z M222 140 L234 133 H282 L270 140 M270 158 L282 151 V133\"/>" +
        "<path class=\"ln dash\" d=\"M222 158 L234 151 H282 M234 151 V133\"/>" +
        "<circle class=\"sh2\" cx=\"252\" cy=\"89\" r=\"5\"/>" +
        "<path class=\"sh2\" d=\"M245 96 H259 L256.5 116 L258 136.5 H253 L252 122 L251 136.5 H246 L247.5 116 Z\"/>" +
        "<path class=\"thin\" d=\"M245 97 L242.5 115 M259 97 L261.5 115\"/>" +
        "<path class=\"thin\" d=\"M207 84 H217 M207 136.5 H217 M212 84 V136.5\"/><text x=\"170\" y=\"104\">18 in</text>" +
        "</svg><figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">An art class makes a scale model of the park's concrete statue, cast in the same concrete. The statue is 12 ft tall and the model, similar to it, is 18 in tall (not counting pedestals). The statue's pedestal is 6 ft long, 4 ft wide and 3 ft tall; the model's pedestal is 9 in long, 6 in wide and 4 in tall.</p>",
      claims: [
        {
          id: "arm",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "An arm of the model is 3 in long. How long is the same arm on the statue?",
          choices: [
            { letter: "A", text: "0.375 in" },
            { letter: "B", text: "192 in" },
            { letter: "C", text: "24 in" },
            { letter: "D", text: "1,536 in" }
          ],
          correct: "C"
        },
        {
          id: "sealer",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The model's surface area is 90 in². The statue's surface will be coated with sealer. What is the statue's surface area in square feet? (1 ft² = 144 in²)",
          choices: [
            { letter: "A", text: "5 ft²" },
            { letter: "B", text: "320 ft²" },
            { letter: "C", text: "480 ft²" },
            { letter: "D", text: "40 ft²" }
          ],
          correct: "D"
        },
        {
          id: "weight",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "Both figures are solid concrete, and the model weighs 4 lb. What does the statue weigh?",
          choices: [
            { letter: "A", text: "32 lb" },
            { letter: "B", text: "256 lb" },
            { letter: "C", text: "2,048 lb" },
            { letter: "D", text: "6,912 lb" }
          ],
          correct: "C"
        },
        {
          id: "souvenir",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A souvenir copy, also similar, uses 1/27 as much concrete as the 18-inch model. How tall is the souvenir?",
          choices: [
            { letter: "A", text: "6 in" },
            { letter: "B", text: "2 in" },
            { letter: "C", text: "about 0.7 in" },
            { letter: "D", text: "about 3.5 in" }
          ],
          correct: "A"
        },
        {
          id: "pedestal",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Is the model's pedestal similar to the statue's pedestal?",
          choices: [
            { letter: "A", text: "Yes: both are rectangular prisms." },
            { letter: "B", text: "Yes: the tops are similar, since 6/4 = 9/6." },
            { letter: "C", text: "Yes: the scale factor is 8 for the statues, so it is 8 for the pedestals." },
            { letter: "D", text: "No: the length and width ratios are 8, but the height ratio is 9." }
          ],
          correct: "D"
        },
        {
          id: "fix",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Keeping its 9 in length and 6 in width, how tall should the model's pedestal be to make it similar to the statue's pedestal?",
          choices: [
            { letter: "A", text: "4 in" },
            { letter: "B", text: "4.5 in" },
            { letter: "C", text: "0.375 in" },
            { letter: "D", text: "0.5625 in" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
