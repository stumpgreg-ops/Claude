/* SOL Labyrinth — Geometry game (family GEO), three-dimensional figures: G.DF.1 (Virginia 2023 Geometry SOL), v5.20.
   Modes: maze (a school building and its grounds) and raid (Eagle Swoop: sports and games). Original items only.
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given
   facts, then six questions about it. Solids are drawn in oblique projection, hidden edges dashed, circular faces as
   ellipses. Every numeric answer was computed, and every distractor is a named mistake (radius for diameter, height
   for slant height, a missing 1/3 or 1/2, lateral for total surface area, a skipped unit conversion …). */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-df1-maze-wedge-mat",
      family: "GEO",
      mode: "maze",
      title: "The Gym Wedge Mat",
      kind: "3-D figures · G.DF.1",
      blurb: "A foam ramp shaped like a triangular prism.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A gym wedge mat drawn as a triangular prism. Each end is a right triangle with legs 16 in (up) and 30 in (along the floor) and a 34 in sloped side; the mat is 20 in wide. Hidden edges are dashed.\"><polygon class=\"sh2\" points=\"45,148 231,148 45,48.8\"/><path class=\"ln\" d=\"M231 148 L45 48.8 M45 148 L231 148 M45 148 L45 48.8 M284.7 117 L98.7 17.8 M231 148 L284.7 117 M45 48.8 L98.7 17.8\"/><path class=\"ln dash\" d=\"M98.7 117 L98.7 17.8 M98.7 117 L284.7 117 M45 148 L98.7 117\"/><path class=\"thin\" d=\"M54 148 V139 H45\"/><text x=\"39\" y=\"103.4\" text-anchor=\"end\">16 in</text><text x=\"138\" y=\"165\" text-anchor=\"middle\">30 in</text><text x=\"147.4\" y=\"85.8\" text-anchor=\"middle\">34 in</text><text x=\"265.8\" y=\"148.5\">20 in</text></svg></figure><p class=\"geo-given\">A foam wedge mat in the gym is a triangular prism. Each end is a right triangle with legs of 16 in and 30 in and a sloped side of 34 in. The mat is 20 in wide.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much foam is in the wedge mat?",
          choices: [
            { letter: "A", text: "9,600 in³" },
            { letter: "B", text: "5,440 in³" },
            { letter: "C", text: "4,800 in³" },
            { letter: "D", text: "1,600 in³" }
          ],
          correct: "C"
        },
        {
          id: "cover",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "A vinyl cover wraps all five faces of the mat. What is the total surface area of the mat?",
          choices: [
            { letter: "A", text: "2,080 in²" },
            { letter: "B", text: "1,600 in²" },
            { letter: "C", text: "2,560 in²" },
            { letter: "D", text: "1,400 in²" }
          ],
          correct: "A"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Which shapes make up a net of the wedge mat?",
          choices: [
            { letter: "A", text: "2 right triangles and 2 rectangles" },
            { letter: "B", text: "1 right triangle and 3 rectangles" },
            { letter: "C", text: "3 right triangles and 2 rectangles" },
            { letter: "D", text: "2 right triangles and 3 rectangles" }
          ],
          correct: "D"
        },
        {
          id: "endcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the two triangular ends cuts the mat 5 in from one end. What is the cross section?",
          choices: [
            { letter: "A", text: "a right triangle with legs 8 in and 15 in" },
            { letter: "B", text: "a right triangle with legs 16 in and 30 in" },
            { letter: "C", text: "a rectangle 16 in by 20 in" },
            { letter: "D", text: "a rectangle 30 in by 20 in" }
          ],
          correct: "B"
        },
        {
          id: "levelcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the floor cuts the mat 8 in above the floor. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 15 in by 20 in" },
            { letter: "B", text: "a rectangle 30 in by 20 in" },
            { letter: "C", text: "a right triangle with legs 8 in and 15 in" },
            { letter: "D", text: "a rectangle 8 in by 20 in" }
          ],
          correct: "A"
        },
        {
          id: "slopeerr",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Lee finds the area of the sloped top face as 30 × 20 = 600 in². What should he have done?",
          choices: [
            { letter: "A", text: "Used the 16 in edge: 320 in²" },
            { letter: "B", text: "Halved it: 300 in²" },
            { letter: "C", text: "Used the 34 in edge: 680 in²" },
            { letter: "D", text: "Added the ends: 1,080 in²" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df1-maze-traffic-cone",
      family: "GEO",
      mode: "maze",
      title: "Cones in the Parking Lot",
      kind: "3-D figures · G.DF.1",
      blurb: "A traffic cone: height, slant height and paint.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A traffic cone standing on the parking lot: a cone with base diameter 14 in and height 24 in. The height is a dashed segment from the tip to the center of the base, at a right angle to a radius.\"><path class=\"sh\" d=\"M132 30.4 L162.7 135.2 A30.8 9.2 0 1 1 101.3 135.2 Z\"/><path class=\"ln\" d=\"M101.3 135.2 L132 30.4 L162.7 135.2 A30.8 9.2 0 1 1 101.3 135.2\"/><path class=\"ln dash\" d=\"M101.3 135.2 A30.8 9.2 0 0 1 162.7 135.2\"/><line class=\"thin dash\" x1=\"132\" y1=\"30.4\" x2=\"132\" y2=\"136\"/><line class=\"thin\" x1=\"132\" y1=\"136\" x2=\"162.8\" y2=\"136\"/><path class=\"thin\" d=\"M139 136 V129 H132\"/><circle class=\"dt\" cx=\"132\" cy=\"136\" r=\"2.5\"/><path class=\"thin\" d=\"M79.2 30.4 V136 M74.2 30.4 H84.2 M74.2 136 H84.2\"/><path class=\"thin dash\" d=\"M84.2 30.4 H129\"/><text x=\"71.2\" y=\"88.2\" text-anchor=\"end\">24 in</text><path class=\"thin\" d=\"M101.2 159.2 H162.8 M101.2 154.2 V164.2 M162.8 154.2 V164.2\"/><path class=\"thin dash\" d=\"M101.2 138 V154.2 M162.8 138 V154.2\"/><text x=\"172.8\" y=\"164.2\">14 in</text></svg></figure><p class=\"geo-given\">A traffic cone in the school parking lot is a cone with a base diameter of 14 in and a height of 24 in. Treat it as a solid cone.</p>",
      claims: [
        {
          id: "slant",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the slant height of the cone?",
          choices: [
            { letter: "A", text: "about 27.8 in" },
            { letter: "B", text: "25 in" },
            { letter: "C", text: "31 in" },
            { letter: "D", text: "about 23.0 in" }
          ],
          correct: "B"
        },
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the cone, in terms of π?",
          choices: [
            { letter: "A", text: "1,176π in³" },
            { letter: "B", text: "1,568π in³" },
            { letter: "C", text: "56π in³" },
            { letter: "D", text: "392π in³" }
          ],
          correct: "D"
        },
        {
          id: "lateralerr",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Dana finds the area of the cone's curved surface as π · 7 · 24 = 168π in². What is her mistake?",
          choices: [
            { letter: "A", text: "She used the height, not the slant height; it is 175π in²." },
            { letter: "B", text: "She used the radius, not the diameter; it is 336π in²." },
            { letter: "C", text: "She left out the base; it is 217π in²." },
            { letter: "D", text: "She forgot the 1/3; it is 56π in²." }
          ],
          correct: "A"
        },
        {
          id: "cans",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The curved surface of each cone gets reflective paint. One can of paint covers 1,000 in². How many cans are needed for 12 cones?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "9" },
            { letter: "C", text: "7" },
            { letter: "D", text: "14" }
          ],
          correct: "C"
        },
        {
          id: "levelcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the ground cuts the cone 12 in above the ground. What is the area of the cross section, to the nearest tenth of a square inch?",
          choices: [
            { letter: "A", text: "77.0 in²" },
            { letter: "B", text: "153.9 in²" },
            { letter: "C", text: "22.0 in²" },
            { letter: "D", text: "38.5 in²" }
          ],
          correct: "D"
        },
        {
          id: "sector",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "The cone's curved surface is cut along a straight line from the tip and laid flat. It makes a sector of a circle. What is the radius of that sector?",
          choices: [
            { letter: "A", text: "24 in" },
            { letter: "B", text: "25 in" },
            { letter: "C", text: "7 in" },
            { letter: "D", text: "14 in" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df1-maze-book-drop",
      family: "GEO",
      mode: "maze",
      title: "The Library Book Drop",
      kind: "3-D figures · G.DF.1",
      blurb: "A box with a half-cylinder top: books, paint and metal.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"The library book drop: a box 20 in wide, 36 in tall and 18 in deep, topped by half of a cylinder whose curved top runs from front to back. The front face is a rectangle with a semicircle on top and has a return slot. Hidden edges are dashed.\"><path class=\"sh2\" d=\"M130 144 L184 144 L184 46.8 A27 27 0 0 0 130 46.8 Z\"/><path class=\"ln\" d=\"M130 144 L184 144 L184 46.8 A27 27 0 0 0 130 46.8 Z\"/><path class=\"ln\" d=\"M184 144 L205 131.9 L205 34.7 M184 46.8 L205 34.7 A27 27 0 0 0 164.5 11.3 M143.5 23.4 L164.5 11.3\"/><path class=\"ln dash\" d=\"M164.5 11.3 A27 27 0 0 0 151 34.7 L151 131.9 L205 131.9 M151 131.9 L130 144 M130 46.8 L151 34.7\"/><rect class=\"thin\" x=\"143.5\" y=\"67.1\" width=\"27\" height=\"4\"/><text x=\"122\" y=\"100.4\" text-anchor=\"end\">36 in</text><text x=\"202.5\" y=\"151.9\">18 in</text><text x=\"157\" y=\"162\" text-anchor=\"middle\">20 in</text><text class=\"sm\" x=\"224\" y=\"79.1\">return slot</text><line class=\"thin\" x1=\"221\" y1=\"75.1\" x2=\"173.5\" y2=\"69.1\"/></svg></figure><p class=\"geo-given\">The library book drop is a rectangular prism 20 in wide, 18 in deep and 36 in tall. On top is half of a cylinder with radius 10 in, lying on its side and running the full 18 in from front to back.</p>",
      claims: [
        {
          id: "expr",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Which expression gives the volume of the book drop, in cubic inches?",
          choices: [
            { letter: "A", text: "20 · 18 · 36 + ½ · π · 10² · 18" },
            { letter: "B", text: "20 · 18 · 36 + π · 10² · 18" },
            { letter: "C", text: "20 · 18 · 46" },
            { letter: "D", text: "20 · 18 · 36 + ½ · π · 20² · 18" }
          ],
          correct: "A"
        },
        {
          id: "cubicft",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How many cubic feet can the book drop hold, to the nearest tenth? Use 1 ft³ = 1,728 in³.",
          choices: [
            { letter: "A", text: "7.5 ft³" },
            { letter: "B", text: "10.8 ft³" },
            { letter: "C", text: "9.1 ft³" },
            { letter: "D", text: "1,315.6 ft³" }
          ],
          correct: "C"
        },
        {
          id: "frontcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the front face cuts through the book drop. What shape is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 20 in by 36 in" },
            { letter: "B", text: "a rectangle with a semicircle on top" },
            { letter: "C", text: "a rectangle with a triangle on top" },
            { letter: "D", text: "a circle with radius 10 in" }
          ],
          correct: "B"
        },
        {
          id: "sidecut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane cuts the book drop from front to back, through the middle of the front face. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 18 in by 36 in" },
            { letter: "B", text: "a rectangle 20 in by 46 in" },
            { letter: "C", text: "a rectangle 18 in by 56 in" },
            { letter: "D", text: "a rectangle 18 in by 46 in" }
          ],
          correct: "D"
        },
        {
          id: "paint",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "Every outside surface of the book drop except the bottom is painted. What area is painted, to the nearest square inch?",
          choices: [
            { letter: "A", text: "3,301 in²" },
            { letter: "B", text: "3,976 in²" },
            { letter: "C", text: "3,616 in²" },
            { letter: "D", text: "3,930 in²" }
          ],
          correct: "C"
        },
        {
          id: "metal",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "The curved top is one bent sheet of metal. What is its area, in terms of π?",
          choices: [
            { letter: "A", text: "180π in²" },
            { letter: "B", text: "360π in²" },
            { letter: "C", text: "90π in²" },
            { letter: "D", text: "100π in²" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df1-raid-hockey-puck",
      family: "GEO",
      mode: "raid",
      title: "The Hockey Puck",
      kind: "3-D figures · G.DF.1",
      blurb: "A short rubber cylinder: volume, surface and cuts.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"A hockey puck drawn as a short cylinder 3 in across and 1 in thick; the diameter is drawn across the top face and the hidden back half of the bottom edge is dashed.\"><path class=\"sh\" d=\"M75 46 V96 A75 30 0 0 0 225 96 V46 A75 30 0 0 1 75 46 Z\"/><ellipse class=\"sh2\" cx=\"150\" cy=\"46\" rx=\"75\" ry=\"30\"/><path class=\"ln\" d=\"M75 46 V96 M225 46 V96 M225 96 A75 30 0 0 1 75 96\"/><path class=\"ln dash\" d=\"M75 96 A75 30 0 0 1 225 96\"/><line class=\"thin\" x1=\"75\" y1=\"46\" x2=\"225\" y2=\"46\"/><circle class=\"dt\" cx=\"150\" cy=\"46\" r=\"2.5\"/><text x=\"150\" y=\"40\" text-anchor=\"middle\">3 in</text><path class=\"thin\" d=\"M241 46 V96 M236 46 H246 M236 96 H246\"/><text x=\"251\" y=\"76\">1 in</text></svg></figure><p class=\"geo-given\">A hockey puck is a solid rubber cylinder. Its flat faces are circles 3 in across, and it is 1 in thick.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the puck, in terms of π?",
          choices: [
            { letter: "A", text: "9π in³" },
            { letter: "B", text: "3π in³" },
            { letter: "C", text: "0.75π in³" },
            { letter: "D", text: "2.25π in³" }
          ],
          correct: "D"
        },
        {
          id: "surface",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the total surface area of the puck, to the nearest tenth of a square inch?",
          choices: [
            { letter: "A", text: "9.4 in²" },
            { letter: "B", text: "23.6 in²" },
            { letter: "C", text: "16.5 in²" },
            { letter: "D", text: "75.4 in²" }
          ],
          correct: "B"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Which shapes make up a net of the puck?",
          choices: [
            { letter: "A", text: "a rectangle and one circle" },
            { letter: "B", text: "a sector and one circle" },
            { letter: "C", text: "a rectangle and two circles" },
            { letter: "D", text: "a square and two circles" }
          ],
          correct: "C"
        },
        {
          id: "vcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane cuts the puck straight down through the centers of both flat faces. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 3 in by 1 in" },
            { letter: "B", text: "a circle 3 in across" },
            { letter: "C", text: "a rectangle 1.5 in by 1 in" },
            { letter: "D", text: "a triangle with base 3 in" }
          ],
          correct: "A"
        },
        {
          id: "hcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the flat faces cuts the puck halfway through its thickness. What is the cross section?",
          choices: [
            { letter: "A", text: "a circle 1.5 in across" },
            { letter: "B", text: "a circle 3 in across" },
            { letter: "C", text: "a rectangle 3 in by 0.5 in" },
            { letter: "D", text: "a ring 3 in across" }
          ],
          correct: "B"
        },
        {
          id: "nottrue",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Which statement about the puck is NOT true?",
          choices: [
            { letter: "A", text: "Its two flat faces are congruent circles." },
            { letter: "B", text: "Its curved side unrolls into a rectangle 1 in wide." },
            { letter: "C", text: "Its volume is the area of a flat face times 1 in." },
            { letter: "D", text: "Its radius is 3 in." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df1-raid-shot-put",
      family: "GEO",
      mode: "raid",
      title: "The Shot Put",
      kind: "3-D figures · G.DF.1",
      blurb: "An iron sphere, and a practice shot cut in half.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Left: a shot put drawn as a sphere 12 cm across, with its equator shown (back half dashed). Right: one half of a cut shot, a hemisphere with its flat circular face up.\"><circle class=\"sh2\" cx=\"82\" cy=\"76\" r=\"57\"/><path class=\"thin\" d=\"M139 76 A57 14.3 0 0 1 25 76\"/><path class=\"thin dash\" d=\"M25 76 A57 14.3 0 0 1 139 76\"/><path class=\"thin\" d=\"M25 145 H139 M25 140 V150 M139 140 V150\"/><path class=\"thin dash\" d=\"M25 76 V140 M139 76 V140\"/><text x=\"82\" y=\"162\" text-anchor=\"middle\">12 cm</text><path class=\"ln\" d=\"M181 62 A57 57 0 0 0 295 62\"/><ellipse class=\"sh\" cx=\"238\" cy=\"62\" rx=\"57\" ry=\"14.3\"/><text class=\"sm\" x=\"238\" y=\"141\" text-anchor=\"middle\">one half (cut face up)</text></svg></figure><p class=\"geo-given\">A shot put is a solid iron sphere with a diameter of 12 cm. A practice shot of the same size is cut in half to show its inside; each half is a hemisphere.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the shot, in terms of π?",
          choices: [
            { letter: "A", text: "288π cm³" },
            { letter: "B", text: "2,304π cm³" },
            { letter: "C", text: "144π cm³" },
            { letter: "D", text: "48π cm³" }
          ],
          correct: "A"
        },
        {
          id: "surface",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the surface area of the shot, to the nearest tenth of a square centimeter?",
          choices: [
            { letter: "A", text: "1,809.6 cm²" },
            { letter: "B", text: "113.1 cm²" },
            { letter: "C", text: "226.2 cm²" },
            { letter: "D", text: "452.4 cm²" }
          ],
          correct: "D"
        },
        {
          id: "great",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane passes through the center of the shot. What is the area of the cross section, in terms of π?",
          choices: [
            { letter: "A", text: "144π cm²" },
            { letter: "B", text: "36π cm²" },
            { letter: "C", text: "12π cm²" },
            { letter: "D", text: "72π cm²" }
          ],
          correct: "B"
        },
        {
          id: "offcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane cuts the shot 3 cm from its center. What is the cross section?",
          choices: [
            { letter: "A", text: "a circle with radius 6 cm" },
            { letter: "B", text: "an ellipse with a long axis of 12 cm" },
            { letter: "C", text: "a circle with radius less than 6 cm" },
            { letter: "D", text: "a semicircle with radius 6 cm" }
          ],
          correct: "C"
        },
        {
          id: "halfsa",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the total surface area of one half, curved part and flat face together, in terms of π?",
          choices: [
            { letter: "A", text: "108π cm²" },
            { letter: "B", text: "72π cm²" },
            { letter: "C", text: "144π cm²" },
            { letter: "D", text: "180π cm²" }
          ],
          correct: "A"
        },
        {
          id: "mass",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "Iron has a mass of about 7.87 g per cubic centimeter. What is the mass of the whole shot, to the nearest tenth of a kilogram? Use 1 kg = 1,000 g.",
          choices: [
            { letter: "A", text: "57.0 kg" },
            { letter: "B", text: "3.6 kg" },
            { letter: "C", text: "7.1 kg" },
            { letter: "D", text: "7,120.6 kg" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df1-raid-game-gem",
      family: "GEO",
      mode: "raid",
      title: "The Gem Token",
      kind: "3-D figures · G.DF.1",
      blurb: "Two square pyramids joined base to base.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A board-game gem token: two square pyramids joined at a shared square base with 10 mm sides. Each pyramid is 12 mm tall, shown by a dashed axis through the center of the square. Hidden edges are dashed.\"><polygon class=\"sh\" points=\"118,88 173,88 157.4,15.1\"/><path class=\"ln\" d=\"M173 88 L157.4 15.1 M118 88 L173 88 M118 88 L157.4 15.1 M196.8 74.3 L157.4 15.1 M173 88 L196.8 74.3 M173 88 L157.4 147.1 M118 88 L157.4 147.1 M196.8 74.3 L157.4 147.1\"/><path class=\"ln dash\" d=\"M141.8 74.3 L157.4 15.1 M196.8 74.3 L141.8 74.3 M118 88 L141.8 74.3 M141.8 74.3 L157.4 147.1\"/><path class=\"thin dash\" d=\"M157.4 15.1 L157.4 147.1\"/><circle class=\"dt\" cx=\"157.4\" cy=\"81.1\" r=\"2.5\"/><path class=\"thin dash\" d=\"M157.4 15.1 H207.8 M161.4 81.1 H207.8 M157.4 147.1 H207.8\"/><path class=\"thin\" d=\"M212.8 15.1 V81.1 M207.8 15.1 H217.8 M207.8 81.1 H217.8\"/><path class=\"thin\" d=\"M212.8 81.1 V147.1 M207.8 81.1 H217.8 M207.8 147.1 H217.8\"/><text x=\"221.8\" y=\"53.1\">12 mm</text><text x=\"221.8\" y=\"119.1\">12 mm</text><path class=\"thin dash\" d=\"M118 91 V152.1 M173 91 V152.1\"/><path class=\"thin\" d=\"M118 156.1 H173 M118 151.1 V161.1 M173 151.1 V161.1\"/><text x=\"109\" y=\"161.1\" text-anchor=\"end\">10 mm</text></svg></figure><p class=\"geo-given\">A board-game token is a gem made of two square pyramids joined at their bases. The shared square has sides of 10 mm, and each pyramid is 12 mm tall.</p>",
      claims: [
        {
          id: "slant",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the slant height of each triangular face?",
          choices: [
            { letter: "A", text: "about 15.6 mm" },
            { letter: "B", text: "17 mm" },
            { letter: "C", text: "13 mm" },
            { letter: "D", text: "about 10.9 mm" }
          ],
          correct: "C"
        },
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the gem?",
          choices: [
            { letter: "A", text: "800 mm³" },
            { letter: "B", text: "2,400 mm³" },
            { letter: "C", text: "400 mm³" },
            { letter: "D", text: "1,600 mm³" }
          ],
          correct: "A"
        },
        {
          id: "surface",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the surface area of the gem?",
          choices: [
            { letter: "A", text: "480 mm²" },
            { letter: "B", text: "620 mm²" },
            { letter: "C", text: "1,040 mm²" },
            { letter: "D", text: "520 mm²" }
          ],
          correct: "D"
        },
        {
          id: "halfcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the shared square cuts the top pyramid halfway between the square and the top tip. What is the cross section?",
          choices: [
            { letter: "A", text: "a square with sides 10 mm" },
            { letter: "B", text: "a square with sides 5 mm" },
            { letter: "C", text: "a square with sides 2.5 mm" },
            { letter: "D", text: "a triangle with base 5 mm" }
          ],
          correct: "B"
        },
        {
          id: "rhombus",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane passes through both tips and the midpoints of two opposite sides of the shared square. What is the cross section?",
          choices: [
            { letter: "A", text: "a square with sides 10 mm" },
            { letter: "B", text: "a triangle with base 10 mm and height 24 mm" },
            { letter: "C", text: "a rhombus with diagonals 10 mm and 12 mm" },
            { letter: "D", text: "a rhombus with diagonals 10 mm and 24 mm" }
          ],
          correct: "D"
        },
        {
          id: "resin",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "A game maker prints 250 gems. Resin costs $0.12 per cubic centimeter, and 1 cm³ = 1,000 mm³. What does the resin cost?",
          choices: [
            { letter: "A", text: "$72.00" },
            { letter: "B", text: "$24.00" },
            { letter: "C", text: "$12.00" },
            { letter: "D", text: "$240.00" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df1-raid-water-cooler",
      family: "GEO",
      mode: "raid",
      title: "The Team Water Cooler",
      kind: "3-D figures · G.DF.1",
      blurb: "A cylinder of water and cone-shaped paper cups.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 154\" role=\"img\" aria-label=\"Left: the team water cooler, a cylinder 12 in across and 16 in tall, with water 12 in deep. Right: a paper cup, a cone pointing down with radius 1.5 in and height 4 in, open at the top.\"><path class=\"sh2\" d=\"M53.6 57.6 V134.4 A38.4 11.5 0 0 0 130.4 134.4 V57.6 A38.4 11.5 0 0 0 53.6 57.6 Z\"/><path class=\"thin\" d=\"M130.4 57.6 A38.4 11.5 0 0 1 53.6 57.6\"/><path class=\"thin dash\" d=\"M53.6 57.6 A38.4 11.5 0 0 1 130.4 57.6\"/><ellipse class=\"ln\" cx=\"92\" cy=\"32\" rx=\"38.4\" ry=\"11.5\"/><path class=\"ln\" d=\"M53.6 32 V134.4 M130.4 32 V134.4 M130.4 134.4 A38.4 11.5 0 0 1 53.6 134.4\"/><path class=\"ln dash\" d=\"M53.6 134.4 A38.4 11.5 0 0 1 130.4 134.4\"/><line class=\"thin\" x1=\"53.6\" y1=\"32\" x2=\"130.4\" y2=\"32\"/><text x=\"92\" y=\"16.5\" text-anchor=\"middle\">12 in</text><path class=\"thin\" d=\"M39.6 32 V134.4 M34.6 32 H44.6 M34.6 134.4 H44.6\"/><text x=\"32.6\" y=\"88.2\" text-anchor=\"end\">16 in</text><path class=\"thin\" d=\"M144.4 57.6 V134.4 M139.4 57.6 H149.4 M139.4 134.4 H149.4\"/><text x=\"152.4\" y=\"101\">12 in</text><text class=\"sm\" x=\"152.4\" y=\"116\">water</text><ellipse class=\"ln\" cx=\"250\" cy=\"60\" rx=\"24\" ry=\"7.2\"/><path class=\"ln\" d=\"M226.2 60.8 L250 124 L273.8 60.8\"/><line class=\"thin dash\" x1=\"250\" y1=\"60\" x2=\"250\" y2=\"124\"/><line class=\"thin\" x1=\"250\" y1=\"60\" x2=\"274\" y2=\"60\"/><circle class=\"dt\" cx=\"250\" cy=\"60\" r=\"2\"/><text x=\"262\" y=\"47.8\" text-anchor=\"middle\">1.5 in</text><path class=\"thin\" d=\"M288 60 V124 M283 60 H293 M283 124 H293\"/><text x=\"296\" y=\"97\">4 in</text><text class=\"sm\" x=\"250\" y=\"146\" text-anchor=\"middle\">paper cup</text></svg><figcaption>Not drawn to scale</figcaption></figure><p class=\"geo-given\">The team's water cooler is a cylinder with an inside diameter of 12 in and an inside height of 16 in. Water fills it to a depth of 12 in. Each paper cup is a cone, open at the top, with radius 1.5 in and height 4 in.</p>",
      claims: [
        {
          id: "full",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much can the cooler hold when it is full, to the nearest cubic inch?",
          choices: [
            { letter: "A", text: "7,238 in³" },
            { letter: "B", text: "1,810 in³" },
            { letter: "C", text: "603 in³" },
            { letter: "D", text: "829 in³" }
          ],
          correct: "B"
        },
        {
          id: "gallons",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How many gallons of water are in the cooler, to the nearest tenth? Use 1 gallon = 231 in³.",
          choices: [
            { letter: "A", text: "7.8 gal" },
            { letter: "B", text: "23.5 gal" },
            { letter: "C", text: "5.9 gal" },
            { letter: "D", text: "2.0 gal" }
          ],
          correct: "C"
        },
        {
          id: "cup",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of one cup, in terms of π?",
          choices: [
            { letter: "A", text: "3π in³" },
            { letter: "B", text: "9π in³" },
            { letter: "C", text: "12π in³" },
            { letter: "D", text: "2π in³" }
          ],
          correct: "A"
        },
        {
          id: "cups",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How many cups can be filled completely with the water in the cooler?",
          choices: [
            { letter: "A", text: "192" },
            { letter: "B", text: "48" },
            { letter: "C", text: "36" },
            { letter: "D", text: "144" }
          ],
          correct: "D"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A cup is cut open and laid flat. Which shape is its net?",
          choices: [
            { letter: "A", text: "a sector of a circle" },
            { letter: "B", text: "a sector and a circle" },
            { letter: "C", text: "a rectangle and a circle" },
            { letter: "D", text: "a triangle" }
          ],
          correct: "A"
        },
        {
          id: "paper",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much paper makes one cup, to the nearest tenth of a square inch?",
          choices: [
            { letter: "A", text: "18.8 in²" },
            { letter: "B", text: "27.2 in²" },
            { letter: "C", text: "20.1 in²" },
            { letter: "D", text: "47.1 in²" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df1-raid-quarter-pipe",
      family: "GEO",
      mode: "raid",
      title: "The Skate Park Quarter-Pipe",
      kind: "3-D figures · G.DF.1",
      blurb: "A concrete ramp: a box with a quarter cylinder taken out.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A skate park quarter-pipe drawn in oblique view. Each end is a 6 ft by 6 ft square with a quarter circle of radius 6 ft cut out, so the riding surface curves up from the ground to a vertical top. The ramp is 12 ft wide. Hidden edges are dashed.\"><path class=\"sh2\" d=\"M70 140 L148 140 L148 62 A78 78 0 0 1 70 140 Z\"/><path class=\"ln\" d=\"M70 140 L148 140 L148 62 A78 78 0 0 1 70 140 Z\"/><path class=\"ln\" d=\"M148 140 L215.5 101 L215.5 23 L148 62 M70 140 L137.5 101 A78 78 0 0 0 176.5 90.5 M109 129.5 L176.5 90.5\"/><path class=\"ln dash\" d=\"M176.5 90.5 A78 78 0 0 0 215.5 23 M137.5 101 L215.5 101\"/><text x=\"109\" y=\"158\" text-anchor=\"middle\">6 ft</text><text x=\"191.8\" y=\"136.5\">12 ft</text><text x=\"223.5\" y=\"67\">6 ft</text></svg></figure><p class=\"geo-given\">A skate park quarter-pipe is solid concrete. Each end is a 6 ft by 6 ft square with a quarter circle of radius 6 ft cut out of it, and the ramp is 12 ft wide.</p>",
      claims: [
        {
          id: "endcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the two ends cuts through the ramp. What is the shape of the cross section?",
          choices: [
            { letter: "A", text: "a right triangle with legs of 6 ft" },
            { letter: "B", text: "a quarter circle with radius 6 ft" },
            { letter: "C", text: "a rectangle 6 ft by 12 ft" },
            { letter: "D", text: "a square with a quarter circle cut out" }
          ],
          correct: "D"
        },
        {
          id: "endarea",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the area of one end of the ramp, to the nearest tenth of a square foot?",
          choices: [
            { letter: "A", text: "7.7 ft²" },
            { letter: "B", text: "28.3 ft²" },
            { letter: "C", text: "26.6 ft²" },
            { letter: "D", text: "18.0 ft²" }
          ],
          correct: "A"
        },
        {
          id: "yards",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How many cubic yards of concrete are in the ramp, to the nearest tenth? Use 1 yd³ = 27 ft³.",
          choices: [
            { letter: "A", text: "92.7 yd³" },
            { letter: "B", text: "16.0 yd³" },
            { letter: "C", text: "3.4 yd³" },
            { letter: "D", text: "12.6 yd³" }
          ],
          correct: "C"
        },
        {
          id: "cost",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "Concrete is sold only in whole cubic yards, at $140 per cubic yard. What does the concrete for the ramp cost? Use 1 yd³ = 27 ft³.",
          choices: [
            { letter: "A", text: "$476" },
            { letter: "B", text: "$560" },
            { letter: "C", text: "$2,240" },
            { letter: "D", text: "$420" }
          ],
          correct: "B"
        },
        {
          id: "curved",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the area of the curved riding surface, to the nearest square foot?",
          choices: [
            { letter: "A", text: "226 ft²" },
            { letter: "B", text: "452 ft²" },
            { letter: "C", text: "113 ft²" },
            { letter: "D", text: "339 ft²" }
          ],
          correct: "C"
        },
        {
          id: "jae",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Jae writes the volume of the ramp as 6 · 6 · 12 − π · 6² · 12. What is wrong?",
          choices: [
            { letter: "A", text: "Jae should add the cylinder, not take it away." },
            { letter: "B", text: "Jae should use 12 ft as the radius." },
            { letter: "C", text: "Jae should multiply the cylinder part by 1/3." },
            { letter: "D", text: "Jae took away a whole cylinder, not a quarter of one." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df1-raid-archery-block",
      family: "GEO",
      mode: "raid",
      title: "The Archery Target Block",
      kind: "3-D figures · G.DF.1",
      blurb: "A foam rectangular prism: cuts, a net and target fabric.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"An archery target block drawn as a rectangular prism 32 in wide, 24 in tall and 18 in thick, with target rings on its front face. Hidden edges are dashed.\"><path class=\"ln\" d=\"M199.2 31.6 L52 31.6 M199.2 142 L199.2 31.6 M52 142 L199.2 142 M52 142 L52 31.6 M235.1 121.3 L235.1 10.9 M235.1 10.9 L87.9 10.9 M199.2 142 L235.1 121.3 M199.2 31.6 L235.1 10.9 M52 31.6 L87.9 10.9\"/><path class=\"ln dash\" d=\"M87.9 121.3 L235.1 121.3 M87.9 121.3 L87.9 10.9 M52 142 L87.9 121.3\"/><circle class=\"thin\" cx=\"125.6\" cy=\"86.8\" r=\"48.3\"/><circle class=\"thin\" cx=\"125.6\" cy=\"86.8\" r=\"34.5\"/><circle class=\"thin\" cx=\"125.6\" cy=\"86.8\" r=\"20.7\"/><circle class=\"sh\" cx=\"125.6\" cy=\"86.8\" r=\"7.4\"/><text x=\"125.6\" y=\"160\" text-anchor=\"middle\">32 in</text><text x=\"45\" y=\"91.8\" text-anchor=\"end\">24 in</text><text x=\"226.1\" y=\"146.7\">18 in</text></svg></figure><p class=\"geo-given\">An archery target is a foam block shaped like a rectangular prism. It is 32 in wide, 24 in tall and 18 in thick from front to back.</p>",
      claims: [
        {
          id: "cubicft",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "What is the volume of the block in cubic feet? Use 1 ft³ = 1,728 in³.",
          choices: [
            { letter: "A", text: "8 ft³" },
            { letter: "B", text: "96 ft³" },
            { letter: "C", text: "1,152 ft³" },
            { letter: "D", text: "13,824 ft³" }
          ],
          correct: "A"
        },
        {
          id: "surface",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the total surface area of the block?",
          choices: [
            { letter: "A", text: "1,776 in²" },
            { letter: "B", text: "3,552 in²" },
            { letter: "C", text: "2,016 in²" },
            { letter: "D", text: "2,784 in²" }
          ],
          correct: "B"
        },
        {
          id: "diagcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane cuts the block through its top front edge and its bottom back edge. What is the area of the cross section?",
          choices: [
            { letter: "A", text: "768 in²" },
            { letter: "B", text: "1,280 in²" },
            { letter: "C", text: "576 in²" },
            { letter: "D", text: "960 in²" }
          ],
          correct: "D"
        },
        {
          id: "corner",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane slices one corner off the block, through the three corners next to it. Which describes the cross section?",
          choices: [
            { letter: "A", text: "a right triangle with legs 24 in and 18 in" },
            { letter: "B", text: "a right triangle with sides 30, 40 and 50 in" },
            { letter: "C", text: "a triangle with sides 30, 40 and about 36.7 in" },
            { letter: "D", text: "a rectangle 32 in by 30 in" }
          ],
          correct: "C"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Which set of rectangles can be folded into the block?",
          choices: [
            { letter: "A", text: "three 32 by 24 and three 24 by 18" },
            { letter: "B", text: "two 32 by 24, two 32 by 18, two 24 by 18" },
            { letter: "C", text: "two 32 by 24 and four 24 by 18" },
            { letter: "D", text: "six 32 by 24" }
          ],
          correct: "B"
        },
        {
          id: "fabric",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The front and back faces are covered with target fabric that costs $3.50 per square foot. What does the fabric cost, to the nearest cent? Use 1 ft² = 144 in².",
          choices: [
            { letter: "A", text: "$37.33" },
            { letter: "B", text: "$18.67" },
            { letter: "C", text: "$448.00" },
            { letter: "D", text: "$86.33" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df1-raid-swim-pool",
      family: "GEO",
      mode: "raid",
      title: "The Swim Meet Pool",
      kind: "3-D figures · G.DF.1",
      blurb: "A prism of water with a sloping floor.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 136\" role=\"img\" aria-label=\"A swimming pool full of water drawn as a prism 25 m long and 15 m wide. The near long wall is a trapezoid: 1.2 m deep at the shallow end and 2 m deep at the deep end, with the floor sloping between them. Hidden edges are dashed.\"><polygon class=\"sh2\" points=\"30,50 220,50 269.4,21.5 79.4,21.5\"/><path class=\"ln\" d=\"M30 50 L220 50 M220 50 L220 98 M220 98 L30 78.8 M30 50 L30 78.8 M269.4 21.5 L269.4 69.5 M79.4 21.5 L269.4 21.5 M220 50 L269.4 21.5 M30 50 L79.4 21.5 M220 98 L269.4 69.5\"/><path class=\"ln dash\" d=\"M269.4 69.5 L79.4 50.3 M79.4 21.5 L79.4 50.3 M30 78.8 L79.4 50.3\"/><text x=\"125\" y=\"43\" text-anchor=\"middle\">25 m</text><text x=\"254.7\" y=\"37.8\">15 m</text><text x=\"36\" y=\"69.4\">1.2 m</text><text x=\"214\" y=\"79\" text-anchor=\"end\">2 m</text><text class=\"sm\" x=\"34\" y=\"96.8\">shallow end</text><text class=\"sm\" x=\"224\" y=\"114\" text-anchor=\"end\">deep end</text></svg><figcaption>Not drawn to scale</figcaption></figure><p class=\"geo-given\">A swim meet pool is 25 m long and 15 m wide. The water is 1.2 m deep at the shallow end and 2 m deep at the deep end, and the floor slopes evenly between them, so each long wall is a trapezoid.</p>",
      claims: [
        {
          id: "wall",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the area of one long wall, up to the water line?",
          choices: [
            { letter: "A", text: "80 m²" },
            { letter: "B", text: "50 m²" },
            { letter: "C", text: "40 m²" },
            { letter: "D", text: "30 m²" }
          ],
          correct: "C"
        },
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of water in the full pool?",
          choices: [
            { letter: "A", text: "1,200 m³" },
            { letter: "B", text: "750 m³" },
            { letter: "C", text: "450 m³" },
            { letter: "D", text: "600 m³" }
          ],
          correct: "D"
        },
        {
          id: "fill",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "A pump adds 2,500 L of water per minute, and 1 m³ = 1,000 L. How many hours does it take to fill the empty pool?",
          choices: [
            { letter: "A", text: "8 h" },
            { letter: "B", text: "4 h" },
            { letter: "C", text: "5 h" },
            { letter: "D", text: "240 h" }
          ],
          correct: "B"
        },
        {
          id: "tile",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The two long walls and the two end walls are tiled up to the water line. How many square meters of wall are tiled?",
          choices: [
            { letter: "A", text: "128 m²" },
            { letter: "B", text: "88 m²" },
            { letter: "C", text: "208 m²" },
            { letter: "D", text: "160 m²" }
          ],
          correct: "A"
        },
        {
          id: "midcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane parallel to the end walls cuts the water halfway along the pool. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 15 m by 2 m" },
            { letter: "B", text: "a rectangle 15 m by 1.2 m" },
            { letter: "C", text: "a trapezoid with parallel sides 1.2 m and 2 m" },
            { letter: "D", text: "a rectangle 15 m by 1.6 m" }
          ],
          correct: "D"
        },
        {
          id: "nottrue",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Which statement about cross sections of the water is NOT true?",
          choices: [
            { letter: "A", text: "A plane parallel to an end wall gives a rectangle." },
            { letter: "B", text: "A level plane 1.5 m below the surface gives a 25 m by 15 m rectangle." },
            { letter: "C", text: "A plane parallel to a long wall gives a trapezoid." },
            { letter: "D", text: "A level plane 0.5 m below the surface gives a 25 m by 15 m rectangle." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df1-raid-sand-court",
      family: "GEO",
      mode: "raid",
      title: "Sand for the Volleyball Court",
      kind: "3-D figures · G.DF.1",
      blurb: "A cone-shaped pile of sand and a rectangular sand bed.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Left: a pile of sand shaped like a cone, 20 ft across and 6 ft high. Right: the rectangular sand bed of a volleyball court, 30 ft by 50 ft, seen at an angle.\"><path class=\"sh\" d=\"M68 94 L111.3 116.5 A50 15 0 1 1 24.7 116.5 Z\"/><path class=\"ln\" d=\"M24.7 116.5 L68 94 L111.3 116.5 A50 15 0 1 1 24.7 116.5\"/><path class=\"ln dash\" d=\"M24.7 116.5 A50 15 0 0 1 111.3 116.5\"/><line class=\"thin dash\" x1=\"68\" y1=\"94\" x2=\"68\" y2=\"124\"/><circle class=\"dt\" cx=\"68\" cy=\"124\" r=\"2.5\"/><path class=\"thin\" d=\"M130 94 V124 M125 94 H135 M125 124 H135\"/><path class=\"thin dash\" d=\"M71 94 H125 M71 124 H117\"/><text x=\"137\" y=\"114\">6 ft</text><path class=\"thin\" d=\"M18 150 H118 M18 145 V155 M118 145 V155\"/><text x=\"68\" y=\"167\" text-anchor=\"middle\">20 ft</text><polygon class=\"sh2\" points=\"190,146 256,146 303.6,118.5 237.6,118.5\"/><text x=\"223\" y=\"163\" text-anchor=\"middle\">30 ft</text><text x=\"206.8\" y=\"135.3\" text-anchor=\"end\">50 ft</text><text class=\"sm\" x=\"246.8\" y=\"96.3\" text-anchor=\"middle\">sand bed</text></svg><figcaption>Not drawn to scale</figcaption></figure><p class=\"geo-given\">A truck dumps sand for a beach volleyball court in a pile shaped like a cone, 20 ft across and 6 ft high. The court's sand bed is a rectangle 50 ft long and 30 ft wide.</p>",
      claims: [
        {
          id: "pile",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the pile, to the nearest cubic foot?",
          choices: [
            { letter: "A", text: "1,885 ft³" },
            { letter: "B", text: "628 ft³" },
            { letter: "C", text: "2,513 ft³" },
            { letter: "D", text: "1,221 ft³" }
          ],
          correct: "B"
        },
        {
          id: "loads",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The sand must be 18 in deep over the whole bed. How many piles like this one must be delivered?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "3" },
            { letter: "C", text: "2" },
            { letter: "D", text: "43" }
          ],
          correct: "A"
        },
        {
          id: "depth",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "One pile is spread evenly over the whole bed. How deep is the sand, to the nearest tenth of an inch?",
          choices: [
            { letter: "A", text: "0.4 in" },
            { letter: "B", text: "15.1 in" },
            { letter: "C", text: "5.0 in" },
            { letter: "D", text: "20.1 in" }
          ],
          correct: "C"
        },
        {
          id: "slant",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the slant height of the pile, to the nearest tenth of a foot?",
          choices: [
            { letter: "A", text: "8.0 ft" },
            { letter: "B", text: "16.0 ft" },
            { letter: "C", text: "20.9 ft" },
            { letter: "D", text: "11.7 ft" }
          ],
          correct: "D"
        },
        {
          id: "tarp",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "A tarp covers the curved surface of the pile. What is its area, to the nearest square foot?",
          choices: [
            { letter: "A", text: "366 ft²" },
            { letter: "B", text: "188 ft²" },
            { letter: "C", text: "681 ft²" },
            { letter: "D", text: "1,312 ft²" }
          ],
          correct: "A"
        },
        {
          id: "levelcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the ground cuts the pile 2 ft above the ground. What is the cross section?",
          choices: [
            { letter: "A", text: "a circle with radius about 3.3 ft" },
            { letter: "B", text: "a circle with radius 10 ft" },
            { letter: "C", text: "a circle with radius about 6.7 ft" },
            { letter: "D", text: "a circle with radius 8 ft" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
