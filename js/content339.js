/* SOL Labyrinth — Geometry game (family GEO), v5.20: changing dimensions and similar figures, G.DF.2 (Virginia 2023 Geometry SOL),
   for two game modes: ring / Wolf Ring (art, design, music and making things) and worms / Root Worms (nature and the outdoors).
   Original items only. A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and
   the given facts, then six questions about it. Solids are drawn in simple oblique projection, hidden edges dashed. Every numeric
   answer was computed, and every distractor is a named mistake (k for k² or k³, a square root for a cube root, one dimension
   treated as all …). */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-df2-ring-photo-print",
      family: "GEO",
      mode: "ring",
      title: "From Photo Print to Poster",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A 6 in by 4 in photo, blown up, stretched and cropped.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 142\" role=\"img\" aria-label=\"A photo print 6 in wide and 4 in tall sits in the lower-left corner of a poster 15 in wide and 10 in tall; a dashed diagonal from that corner passes through the far corner of each\"><rect class=\"sh2\" x=\"40\" y=\"20\" width=\"165\" height=\"110\"/><rect class=\"sh\" x=\"40\" y=\"86\" width=\"66\" height=\"44\"/><line class=\"thin dash\" x1=\"40\" y1=\"130\" x2=\"205\" y2=\"20\"/><text x=\"122.5\" y=\"14\" text-anchor=\"middle\">15 in</text><text x=\"211\" y=\"80\" text-anchor=\"start\">10 in</text><text x=\"73\" y=\"80\" text-anchor=\"middle\">6 in</text><text x=\"111\" y=\"113\" text-anchor=\"start\">4 in</text><text class=\"sm\" x=\"73\" y=\"118\" text-anchor=\"middle\">print</text><text class=\"sm\" x=\"175\" y=\"118\" text-anchor=\"middle\">poster</text></svg></figure><p class=\"geo-given\">A photo print is 6 in wide and 4 in tall. Its perimeter is 20 in and its area is 24 in². A shop enlarges it to a poster 15 in wide and 10 in tall, so every length is multiplied by 2.5.</p>",
      claims: [
        {
          id: "poster-area",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the area of the poster?",
          choices: [
            { letter: "A", text: "375 in²" },
            { letter: "B", text: "150 in²" },
            { letter: "C", text: "55.25 in²" },
            { letter: "D", text: "60 in²" }
          ],
          correct: "B"
        },
        {
          id: "poster-perimeter",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the perimeter of the poster?",
          choices: [
            { letter: "A", text: "50 in" },
            { letter: "B", text: "125 in" },
            { letter: "C", text: "25 in" },
            { letter: "D", text: "30 in" }
          ],
          correct: "A"
        },
        {
          id: "panorama",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A panorama print keeps the 4 in height but is 3 times as wide, 18 in. Which statement is true?",
          choices: [
            { letter: "A", text: "Its area is 9 times as large: 216 in²." },
            { letter: "B", text: "Its perimeter is 3 times as large: 60 in." },
            { letter: "C", text: "It is similar to the 6 in by 4 in print." },
            { letter: "D", text: "Its area is 3 times as large: 72 in²." }
          ],
          correct: "D"
        },
        {
          id: "crop",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "The shop also sells a print of the same photo cropped to 10 in wide and 8 in tall. Is it similar to the 6 in by 4 in print? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: its area is 2² = 4 times as large." },
            { letter: "B", text: "No: 10/6 = 1.5, but 8/4 = 2." },
            { letter: "C", text: "No: 10/6 ≈ 1.67, but 8/4 = 2." },
            { letter: "D", text: "Yes: 10/6 = 8/4 = 2." }
          ],
          correct: "C"
        },
        {
          id: "wallet",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A wallet print is similar to the 6 in by 4 in print and has an area of 6 in². What are its width and height?",
          choices: [
            { letter: "A", text: "3 in wide, 2 in tall" },
            { letter: "B", text: "1.5 in wide, 1 in tall" },
            { letter: "C", text: "√6 in wide, √6 in tall" },
            { letter: "D", text: "6 in wide, 1 in tall" }
          ],
          correct: "A"
        },
        {
          id: "perim-forty",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Which change to the 6 in by 4 in print gives a print with a perimeter of 40 in?",
          choices: [
            { letter: "A", text: "Double the width only." },
            { letter: "B", text: "Double both the width and the height." },
            { letter: "C", text: "Multiply the width and the height by 4." },
            { letter: "D", text: "Add 4 in to the width and to the height." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df2-ring-cake-tiers",
      family: "GEO",
      mode: "ring",
      title: "Three Tiers of Cake",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Round tiers of one height but three different radii.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"A cake of three round tiers stacked on one another, each 4 in tall: the top tier (shaded) has radius 3 in, the middle tier 6 in and the bottom tier 9 in\"><path class=\"ln\" d=\"M47 90 L47 118 A63 13.9 0 0 0 173 118 L173 90\"/><path class=\"ln\" d=\"M47 90 A63 13.9 0 0 0 173 90\"/><path class=\"ln\" d=\"M47 90 A63 13.9 0 0 1 68 79.7 M152 79.7 A63 13.9 0 0 1 173 90\"/><text x=\"181\" y=\"109\" text-anchor=\"start\">r = 9 in</text><path class=\"ln\" d=\"M68 62 L68 90 A42 9.2 0 0 0 152 90 L152 62\"/><path class=\"ln\" d=\"M68 62 A42 9.2 0 0 0 152 62\"/><path class=\"ln\" d=\"M68 62 A42 9.2 0 0 1 89 54 M131 54 A42 9.2 0 0 1 152 62\"/><text x=\"160\" y=\"81\" text-anchor=\"start\">r = 6 in</text><path class=\"sh\" d=\"M89 34 L89 62 A21 4.6 0 0 0 131 62 L131 34 A21 4.6 0 0 0 89 34 Z\"/><ellipse class=\"ln\" cx=\"110\" cy=\"34\" rx=\"21\" ry=\"4.6\"/><path class=\"ln\" d=\"M89 34 L89 62 A21 4.6 0 0 0 131 62 L131 34\"/><text x=\"139\" y=\"53\" text-anchor=\"start\">r = 3 in</text><path class=\"thin\" d=\"M33 90 H41 M33 118 H41 M37 90 V118\"/><text x=\"31\" y=\"109\" text-anchor=\"end\">4 in</text></svg></figure><p class=\"geo-given\">A cake has three round tiers, and every tier is 4 in tall. The radii are 3 in (top), 6 in (middle) and 9 in (bottom). The top tier holds 36π in³ of cake, and the whole cake holds 504π in³.</p>",
      claims: [
        {
          id: "bottom-tier",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The bottom tier has 3 times the radius of the top tier and the same 4 in height. How much cake does the bottom tier hold?",
          choices: [
            { letter: "A", text: "108π in³" },
            { letter: "B", text: "972π in³" },
            { letter: "C", text: "1,296π in³" },
            { letter: "D", text: "324π in³" }
          ],
          correct: "D"
        },
        {
          id: "frosting",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Frosting covers the curved side of each tier. Which statement compares the middle tier with the top tier correctly?",
          choices: [
            { letter: "A", text: "Its side has 2 times the area, and it holds 2 times as much cake." },
            { letter: "B", text: "Its side has 4 times the area, and it holds 4 times as much cake." },
            { letter: "C", text: "Its side has 2 times the area, and it holds 4 times as much cake." },
            { letter: "D", text: "Its side has 4 times the area, and it holds 8 times as much cake." }
          ],
          correct: "C"
        },
        {
          id: "tiers-similar",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Are the top tier and the bottom tier similar cylinders? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: 9/3 = 3, but 4/4 = 1." },
            { letter: "B", text: "Yes: 9/3 = 3 and 4/4 = 3." },
            { letter: "C", text: "Yes: all cylinders are similar." },
            { letter: "D", text: "No: the bottom tier holds 3 times as much cake." }
          ],
          correct: "A"
        },
        {
          id: "mini",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A mini cake is similar to the top tier and is 2 in tall. How much cake does it hold?",
          choices: [
            { letter: "A", text: "9π in³" },
            { letter: "B", text: "72π in³" },
            { letter: "C", text: "18π in³" },
            { letter: "D", text: "4.5π in³" }
          ],
          correct: "D"
        },
        {
          id: "grand",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A baker makes a tier similar to the middle tier. The top of the new tier has an area of 81π in². How tall is the new tier?",
          choices: [
            { letter: "A", text: "4 in" },
            { letter: "B", text: "6 in" },
            { letter: "C", text: "13.5 in" },
            { letter: "D", text: "9 in" }
          ],
          correct: "B"
        },
        {
          id: "taller",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The baker makes every tier 8 in tall instead of 4 in and keeps the same radii. How much cake does the whole cake hold?",
          choices: [
            { letter: "A", text: "4,032π in³" },
            { letter: "B", text: "2,016π in³" },
            { letter: "C", text: "1,008π in³" },
            { letter: "D", text: "504π in³" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df2-ring-gift-boxes",
      family: "GEO",
      mode: "ring",
      title: "Nesting Gift Boxes",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Ribbon, wrapping paper and space in a set of similar boxes.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A closed gift box, a rectangular prism 12 in long, 8 in wide and 6 in tall, drawn with hidden edges dashed; a gold ribbon crosses the top and runs down the front and the right side\"><polygon class=\"sh2\" points=\"50,140 170,140 170,80 50,80\"/><polygon class=\"sh2\" points=\"170,140 204.6,120 204.6,60 170,80\"/><polygon class=\"sh2\" points=\"50,80 170,80 204.6,60 84.6,60\"/><path class=\"thin dash\" d=\"M84.6 120 L50 140 M84.6 120 L204.6 120 M84.6 120 L84.6 60\"/><path class=\"ac\" d=\"M110 140 L110 80 L144.6 60 M67.3 70 L187.3 70 L187.3 130\"/><ellipse class=\"thin\" cx=\"120.3\" cy=\"67\" rx=\"7\" ry=\"4\"/><ellipse class=\"thin\" cx=\"134.3\" cy=\"67\" rx=\"7\" ry=\"4\"/><text x=\"110\" y=\"157\" text-anchor=\"middle\">12 in</text><text x=\"44\" y=\"115\" text-anchor=\"end\">6 in</text><text x=\"196.3\" y=\"142\" text-anchor=\"start\">8 in</text><text class=\"sm acc\" x=\"214.6\" y=\"62\" text-anchor=\"start\">ribbon</text></svg></figure><p class=\"geo-given\">A set of nesting gift boxes are similar rectangular prisms. The medium box, shown, is 12 in long, 8 in wide and 6 in tall. It holds 576 in³, its outside surface is 432 in², and a ribbon tied in a cross around it (not counting the bow) is 64 in long.</p>",
      claims: [
        {
          id: "large-paper",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The large box in the set is 18 in long. How much paper covers its outside surface?",
          choices: [
            { letter: "A", text: "972 in²" },
            { letter: "B", text: "1,458 in²" },
            { letter: "C", text: "1,296 in²" },
            { letter: "D", text: "648 in²" }
          ],
          correct: "A"
        },
        {
          id: "small-ribbon",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The small box in the set is 9 in long. How long is the ribbon tied in a cross around it (not counting the bow)?",
          choices: [
            { letter: "A", text: "27 in" },
            { letter: "B", text: "36 in" },
            { letter: "C", text: "48 in" },
            { letter: "D", text: "61 in" }
          ],
          correct: "C"
        },
        {
          id: "small-volume",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The small box in the set is 9 in long. How much does it hold?",
          choices: [
            { letter: "A", text: "768 in³" },
            { letter: "B", text: "243 in³" },
            { letter: "C", text: "432 in³" },
            { letter: "D", text: "324 in³" }
          ],
          correct: "B"
        },
        {
          id: "other-box",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A shop sells another box that is 15 in long, 10 in wide and 8 in tall. Could it belong to this nesting set? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: 15/12 = 10/8 = 1.25, but 8/6 ≈ 1.33." },
            { letter: "B", text: "Yes: 15/12 = 10/8 = 1.25, and 8/6 = 1.25." },
            { letter: "C", text: "Yes: every edge is 3 in longer." },
            { letter: "D", text: "No: 15/12 = 1.25, but 10/8 = 1.2." }
          ],
          correct: "A"
        },
        {
          id: "tall-box",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A tall box keeps the medium box's 12 in by 8 in bottom but is 9 in tall. Which statement is true?",
          choices: [
            { letter: "A", text: "It holds 2.25 times as much: 1,296 in³." },
            { letter: "B", text: "It holds about 3.4 times as much: 1,944 in³." },
            { letter: "C", text: "It holds the same amount: 576 in³." },
            { letter: "D", text: "It holds 1.5 times as much: 864 in³." }
          ],
          correct: "D"
        },
        {
          id: "jumbo",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A jumbo box is similar to the medium box and holds 4,608 in³. How long is it?",
          choices: [
            { letter: "A", text: "20 in" },
            { letter: "B", text: "96 in" },
            { letter: "C", text: "24 in" },
            { letter: "D", text: "about 33.9 in" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df2-ring-drums",
      family: "GEO",
      mode: "ring",
      title: "The Tom and the Bass Drum",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Two drum shells: same shape or not?",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Two drums shaped like cylinders: a tom 10 in across and 8 in deep, and a bass drum 20 in across and 16 in deep; each drumhead is shaded\"><path class=\"ln\" d=\"M50.5 88 L50.5 132 A27.5 7.7 0 0 0 105.5 132 L105.5 88\"/><ellipse class=\"sh2\" cx=\"78\" cy=\"88\" rx=\"27.5\" ry=\"7.7\"/><path class=\"thin\" d=\"M50.5 93 A27.5 7.7 0 0 0 105.5 93 M50.5 127 A27.5 7.7 0 0 0 105.5 127\"/><line class=\"thin dash\" x1=\"50.5\" y1=\"88\" x2=\"105.5\" y2=\"88\"/><text x=\"78\" y=\"74.3\" text-anchor=\"middle\">10 in</text><text x=\"44.5\" y=\"115\" text-anchor=\"end\">8 in</text><text class=\"sm\" x=\"78\" y=\"154.7\" text-anchor=\"middle\">tom</text><path class=\"ln\" d=\"M155 44 L155 132 A55 15.4 0 0 0 265 132 L265 44\"/><ellipse class=\"sh2\" cx=\"210\" cy=\"44\" rx=\"55\" ry=\"15.4\"/><path class=\"thin\" d=\"M155 49 A55 15.4 0 0 0 265 49 M155 127 A55 15.4 0 0 0 265 127\"/><line class=\"thin dash\" x1=\"155\" y1=\"44\" x2=\"265\" y2=\"44\"/><text x=\"210\" y=\"22.6\" text-anchor=\"middle\">20 in</text><text x=\"271\" y=\"93\" text-anchor=\"start\">16 in</text><text class=\"sm\" x=\"210\" y=\"162.4\" text-anchor=\"middle\">bass drum</text></svg></figure><p class=\"geo-given\">A drum maker builds two drums shaped like cylinders. The tom is 10 in across and 8 in deep. The bass drum is 20 in across and 16 in deep. The tom's drumhead (one circular face) has an area of 25π in².</p>",
      claims: [
        {
          id: "similar",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Are the tom and the bass drum similar cylinders? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: the bass drum's head has 2 times the area." },
            { letter: "B", text: "Yes: all cylinders are similar." },
            { letter: "C", text: "No: 20/10 = 2, but 16/8 = 1.5." },
            { letter: "D", text: "Yes: 20/10 = 16/8 = 2." }
          ],
          correct: "D"
        },
        {
          id: "bass-head",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the area of the bass drum's head?",
          choices: [
            { letter: "A", text: "400π in²" },
            { letter: "B", text: "100π in²" },
            { letter: "C", text: "200π in²" },
            { letter: "D", text: "50π in²" }
          ],
          correct: "B"
        },
        {
          id: "bass-air",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The tom's shell holds 200π in³ of air. How much air does the bass drum's shell hold?",
          choices: [
            { letter: "A", text: "400π in³" },
            { letter: "B", text: "800π in³" },
            { letter: "C", text: "1,600π in³" },
            { letter: "D", text: "6,400π in³" }
          ],
          correct: "C"
        },
        {
          id: "floor-tom",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A floor tom is 16 in across and 14 in deep. Is it similar to the tom? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: 16/10 = 1.6, but 14/8 = 1.75." },
            { letter: "B", text: "Yes: the floor tom's head has 1.6 times the area." },
            { letter: "C", text: "Yes: 16/10 = 14/8 = 1.6." },
            { letter: "D", text: "No: 16/10 = 1.6, but 14/8 = 1.5." }
          ],
          correct: "A"
        },
        {
          id: "deeper-shell",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A builder keeps the tom's 10 in width but makes its shell 12 in deep instead of 8 in. How much wood veneer covers the new shell's curved side?",
          choices: [
            { letter: "A", text: "240π in²" },
            { letter: "B", text: "120π in²" },
            { letter: "C", text: "180π in²" },
            { letter: "D", text: "270π in²" }
          ],
          correct: "B"
        },
        {
          id: "toy-drum",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A toy drum is similar to the tom, and its head has an area of 4π in². How deep is the toy drum?",
          choices: [
            { letter: "A", text: "1.28 in" },
            { letter: "B", text: "20 in" },
            { letter: "C", text: "0.512 in" },
            { letter: "D", text: "3.2 in" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df2-ring-mural-grid",
      family: "GEO",
      mode: "ring",
      title: "The Pencil Mural",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A grid sketch of a pencil, blown up for a wall.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A pencil shape on a grid of 1 cm squares: a rectangle 8 cm long and 6 cm tall with a triangular tip that sticks out 4 cm; the two slanted sides of the tip are 5 cm each\"><line class=\"gr\" x1=\"40\" y1=\"146\" x2=\"40\" y2=\"13\"/><line class=\"gr\" x1=\"59\" y1=\"146\" x2=\"59\" y2=\"13\"/><line class=\"gr\" x1=\"78\" y1=\"146\" x2=\"78\" y2=\"13\"/><line class=\"gr\" x1=\"97\" y1=\"146\" x2=\"97\" y2=\"13\"/><line class=\"gr\" x1=\"116\" y1=\"146\" x2=\"116\" y2=\"13\"/><line class=\"gr\" x1=\"135\" y1=\"146\" x2=\"135\" y2=\"13\"/><line class=\"gr\" x1=\"154\" y1=\"146\" x2=\"154\" y2=\"13\"/><line class=\"gr\" x1=\"173\" y1=\"146\" x2=\"173\" y2=\"13\"/><line class=\"gr\" x1=\"192\" y1=\"146\" x2=\"192\" y2=\"13\"/><line class=\"gr\" x1=\"211\" y1=\"146\" x2=\"211\" y2=\"13\"/><line class=\"gr\" x1=\"230\" y1=\"146\" x2=\"230\" y2=\"13\"/><line class=\"gr\" x1=\"249\" y1=\"146\" x2=\"249\" y2=\"13\"/><line class=\"gr\" x1=\"268\" y1=\"146\" x2=\"268\" y2=\"13\"/><line class=\"gr\" x1=\"287\" y1=\"146\" x2=\"287\" y2=\"13\"/><line class=\"gr\" x1=\"40\" y1=\"146\" x2=\"287\" y2=\"146\"/><line class=\"gr\" x1=\"40\" y1=\"127\" x2=\"287\" y2=\"127\"/><line class=\"gr\" x1=\"40\" y1=\"108\" x2=\"287\" y2=\"108\"/><line class=\"gr\" x1=\"40\" y1=\"89\" x2=\"287\" y2=\"89\"/><line class=\"gr\" x1=\"40\" y1=\"70\" x2=\"287\" y2=\"70\"/><line class=\"gr\" x1=\"40\" y1=\"51\" x2=\"287\" y2=\"51\"/><line class=\"gr\" x1=\"40\" y1=\"32\" x2=\"287\" y2=\"32\"/><line class=\"gr\" x1=\"40\" y1=\"13\" x2=\"287\" y2=\"13\"/><polygon class=\"sh\" points=\"40,146 192,146 268,89 192,32 40,32\"/><line class=\"thin\" x1=\"192\" y1=\"146\" x2=\"192\" y2=\"32\"/><text x=\"116\" y=\"162\" text-anchor=\"middle\">8 cm</text><text x=\"34\" y=\"94\" text-anchor=\"end\">6 cm</text><text x=\"238\" y=\"56.5\" text-anchor=\"start\">5 cm</text><text x=\"238\" y=\"131.5\" text-anchor=\"start\">5 cm</text></svg></figure><p class=\"geo-given\">For a mural, Lena sketches a pencil on a grid of 1 cm squares. The sketch is a rectangle 8 cm by 6 cm with a triangle tip that sticks out 4 cm. The sketch has an area of 60 cm² and a perimeter of 32 cm. On the wall, each 1 cm grid square becomes a square 0.5 m on a side.</p>",
      claims: [
        {
          id: "wall-area",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the area of the pencil on the wall?",
          choices: [
            { letter: "A", text: "15 m²" },
            { letter: "B", text: "120 m²" },
            { letter: "C", text: "7.5 m²" },
            { letter: "D", text: "30 m²" }
          ],
          correct: "A"
        },
        {
          id: "wall-outline",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "How long is the outline of the pencil on the wall (its perimeter)?",
          choices: [
            { letter: "A", text: "8 m" },
            { letter: "B", text: "32 m" },
            { letter: "C", text: "64 m" },
            { letter: "D", text: "16 m" }
          ],
          correct: "D"
        },
        {
          id: "longer-body",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Lena makes the pencil's body longer in her sketch: the rectangle becomes 14 cm long instead of 8 cm, and the tip stays the same. What is the new area of the sketch?",
          choices: [
            { letter: "A", text: "105 cm²" },
            { letter: "B", text: "183.75 cm²" },
            { letter: "C", text: "96 cm²" },
            { letter: "D", text: "66 cm²" }
          ],
          correct: "C"
        },
        {
          id: "classmate",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A classmate sketches a pencil whose rectangle is 16 cm long and 9 cm tall, with a tip that sticks out 6 cm. Is it similar to Lena's sketch? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: every pair of matching lengths has ratio 1.5." },
            { letter: "B", text: "No: 16/8 = 2, but 9/6 = 1.5." },
            { letter: "C", text: "No: its area is 2 times as large." },
            { letter: "D", text: "Yes: 16/8 = 9/6 = 6/4 = 2." }
          ],
          correct: "B"
        },
        {
          id: "poster",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A poster of the design is similar to Lena's sketch and has an area of 540 cm². How long is the poster's pencil, from its flat end to its tip?",
          choices: [
            { letter: "A", text: "108 cm" },
            { letter: "B", text: "about 23.2 cm" },
            { letter: "C", text: "4 cm" },
            { letter: "D", text: "36 cm" }
          ],
          correct: "D"
        },
        {
          id: "double-all",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Lena doubles every length of the sketch. Which statement is true?",
          choices: [
            { letter: "A", text: "The perimeter becomes 64 cm and the area 240 cm²." },
            { letter: "B", text: "The perimeter becomes 64 cm and the area 120 cm²." },
            { letter: "C", text: "The perimeter becomes 64 cm and the area 480 cm²." },
            { letter: "D", text: "The perimeter becomes 128 cm and the area 240 cm²." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df2-ring-maquette",
      family: "GEO",
      mode: "ring",
      title: "The Sculptor's Clay Model",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A small prism-and-pyramid model of a stone sculpture.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A clay model: a square prism with 6 cm base edges and 20 cm tall, topped by a square pyramid 4 cm tall whose slant height, in gold, is 5 cm; hidden edges are dashed\"><polygon class=\"sh2\" points=\"120,150 153,150 153,40 120,40\"/><polygon class=\"sh2\" points=\"153,150 167.3,141.8 167.3,31.8 153,40\"/><path class=\"ln\" d=\"M120 40 L143.6 13.9 L153 40 M143.6 13.9 L167.3 31.8\"/><path class=\"thin dash\" d=\"M134.3 141.8 L120 150 M134.3 141.8 L167.3 141.8 M134.3 141.8 L134.3 31.8 L120 40 M134.3 31.8 L167.3 31.8 M134.3 31.8 L143.6 13.9 M143.6 13.9 L143.6 35.9\"/><line class=\"ac\" x1=\"143.6\" y1=\"13.9\" x2=\"136.5\" y2=\"40\"/><path class=\"thin dash\" d=\"M143.6 13.9 H183.3 M143.6 35.9 H183.3\"/><path class=\"thin\" d=\"M175.3 13.9 H183.3 M175.3 35.9 H183.3 M179.3 13.9 V35.9\"/><text x=\"187.3\" y=\"29.9\" text-anchor=\"start\">4 cm</text><text x=\"136.5\" y=\"166\" text-anchor=\"middle\">6 cm</text><text x=\"173.3\" y=\"106.8\" text-anchor=\"start\">20 cm</text><text class=\"acc\" x=\"132.1\" y=\"28.9\" text-anchor=\"end\">5 cm</text></svg></figure><p class=\"geo-given\">An artist makes a clay model of a stone sculpture: a square prism with a square pyramid on top. The prism has 6 cm base edges and is 20 cm tall. The pyramid is 4 cm tall, and its slant height is 5 cm. The model's volume is 768 cm³, and its outside, not counting the bottom, has an area of 540 cm². The sculpture will be similar to the model, with every length 25 times as long.</p>",
      claims: [
        {
          id: "real-height",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "How tall will the sculpture be, from the ground to the tip of the pyramid?",
          choices: [
            { letter: "A", text: "5 m" },
            { letter: "B", text: "60 m" },
            { letter: "C", text: "6 m" },
            { letter: "D", text: "150 m" }
          ],
          correct: "C"
        },
        {
          id: "sealer",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The sculpture's outside, not counting the bottom, will be sealed. To the nearest tenth of a square meter, how much area needs sealer? (1 m² = 10,000 cm²)",
          choices: [
            { letter: "A", text: "3.4 m²" },
            { letter: "B", text: "33.8 m²" },
            { letter: "C", text: "1.4 m²" },
            { letter: "D", text: "843.8 m²" }
          ],
          correct: "B"
        },
        {
          id: "weight",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The stone weighs 2,600 kg per cubic meter. How many kilograms will the sculpture weigh? (1 m³ = 1,000,000 cm³)",
          choices: [
            { letter: "A", text: "1,248 kg" },
            { letter: "B", text: "29,250 kg" },
            { letter: "C", text: "49.92 kg" },
            { letter: "D", text: "31,200 kg" }
          ],
          correct: "D"
        },
        {
          id: "taller-prism",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "On a second model, the artist keeps the 6 cm base edges and the same pyramid but makes the prism 30 cm tall instead of 20 cm. What is the volume of the second model?",
          choices: [
            { letter: "A", text: "2,592 cm³" },
            { letter: "B", text: "1,128 cm³" },
            { letter: "C", text: "1,152 cm³" },
            { letter: "D", text: "1,080 cm³" }
          ],
          correct: "B"
        },
        {
          id: "student-model",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A student's model has 9 cm base edges, a prism 30 cm tall and a pyramid 5 cm tall. Is it similar to the artist's model? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: 9/6 = 30/20 = 1.5, but 5/4 = 1.25." },
            { letter: "B", text: "No: 9/6 = 1.5, but 30/20 = 2." },
            { letter: "C", text: "Yes: its volume is 1.5 times the model's volume." },
            { letter: "D", text: "Yes: all three ratios equal 1.5." }
          ],
          correct: "A"
        },
        {
          id: "bronze-copy",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A small bronze copy is similar to the model and has a volume of 96 cm³. How tall is the copy, from its base to the tip of the pyramid?",
          choices: [
            { letter: "A", text: "3 cm" },
            { letter: "B", text: "10 cm" },
            { letter: "C", text: "12 cm" },
            { letter: "D", text: "about 8.5 cm" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df2-ring-cone-candles",
      family: "GEO",
      mode: "ring",
      title: "Cone Candles",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Wax, wrappers and prices for candles of one shape.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A cone-shaped candle, point up with a wick: base radius 4 cm, height 7.5 cm (dashed, with a right angle at the center of the base) and slant height 8.5 cm in gold\"><path class=\"sh\" d=\"M68 140 L120 42.5 L172 140 A52 13 0 0 1 68 140 Z\"/><path class=\"ln\" d=\"M68 140 L120 42.5 M68 140 A52 13 0 0 0 172 140\"/><path class=\"thin dash\" d=\"M68 140 A52 13 0 0 1 172 140\"/><line class=\"ac\" x1=\"120\" y1=\"42.5\" x2=\"172\" y2=\"140\"/><line class=\"thin dash\" x1=\"120\" y1=\"42.5\" x2=\"120\" y2=\"140\"/><line class=\"thin\" x1=\"120\" y1=\"140\" x2=\"172\" y2=\"140\"/><path class=\"thin\" d=\"M127 140 V133 H120\"/><path class=\"thin\" d=\"M120 42.5 V33.5\"/><path class=\"thin\" d=\"M120 20.5 C126 28.5 123 33.5 120 33.5 C117 33.5 114 28.5 120 20.5 Z\"/><circle class=\"dt\" cx=\"120\" cy=\"140\" r=\"2.5\"/><path class=\"thin\" d=\"M46 42.5 H54 M46 140 H54 M50 42.5 V140\"/><text x=\"44\" y=\"96.3\" text-anchor=\"end\">7.5 cm</text><text x=\"148\" y=\"134\" text-anchor=\"middle\">4 cm</text><text class=\"acc\" x=\"158\" y=\"91.3\" text-anchor=\"start\">8.5 cm</text></svg></figure><p class=\"geo-given\">A candle maker pours cone-shaped candles. The standard candle has a base radius of 4 cm, a height of 7.5 cm and a slant height of 8.5 cm. It uses 40π cm³ of wax, and its sloped side has an area of 34π cm².</p>",
      claims: [
        {
          id: "large-wax",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A large candle is similar to the standard one and has a base radius of 6 cm. How much wax does it use?",
          choices: [
            { letter: "A", text: "405π cm³" },
            { letter: "B", text: "135π cm³" },
            { letter: "C", text: "90π cm³" },
            { letter: "D", text: "60π cm³" }
          ],
          correct: "B"
        },
        {
          id: "mini-cost",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The wax in a standard candle costs $3.20. A mini candle is similar to it and has a base radius of 3 cm. What does the wax in the mini candle cost?",
          choices: [
            { letter: "A", text: "$1.35" },
            { letter: "B", text: "$7.59" },
            { letter: "C", text: "$2.40" },
            { letter: "D", text: "$1.80" }
          ],
          correct: "A"
        },
        {
          id: "wrap",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "Paper wraps the sloped side of each candle. A candle similar to the standard one has a slant height of 17 cm. How much paper covers its sloped side?",
          choices: [
            { letter: "A", text: "289π cm²" },
            { letter: "B", text: "272π cm²" },
            { letter: "C", text: "136π cm²" },
            { letter: "D", text: "68π cm²" }
          ],
          correct: "C"
        },
        {
          id: "wide-candle",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The maker pours a wide candle with a base radius of 8 cm and the same 7.5 cm height. Which statement is true?",
          choices: [
            { letter: "A", text: "It uses 4 times as much wax: 160π cm³." },
            { letter: "B", text: "It uses 8 times as much wax: 320π cm³." },
            { letter: "C", text: "It is similar to the standard candle." },
            { letter: "D", text: "It uses 2 times as much wax: 80π cm³." }
          ],
          correct: "A"
        },
        {
          id: "which-similar",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Which candle is similar to the standard candle?",
          choices: [
            { letter: "A", text: "base radius 6 cm, height 9.5 cm" },
            { letter: "B", text: "base radius 6 cm, height 11.25 cm" },
            { letter: "C", text: "base radius 8 cm, height 7.5 cm" },
            { letter: "D", text: "base radius 2 cm, height 5.5 cm" }
          ],
          correct: "B"
        },
        {
          id: "giant",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A giant display candle is similar to the standard one and uses 2,560π cm³ of wax. How tall is it?",
          choices: [
            { letter: "A", text: "16 cm" },
            { letter: "B", text: "60 cm" },
            { letter: "C", text: "480 cm" },
            { letter: "D", text: "30 cm" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df2-worms-snowman",
      family: "GEO",
      mode: "worms",
      title: "Building a Snowman",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Three snowballs: a head, a middle and a base.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A snowman of three stacked spheres, each touching the next: the head has radius 6 in, the middle 9 in and the base 12 in; each radius is drawn from the center\"><line class=\"thin\" x1=\"24\" y1=\"160\" x2=\"296\" y2=\"160\"/><circle class=\"sh2\" cx=\"110\" cy=\"126.4\" r=\"33.6\"/><line class=\"thin\" x1=\"110\" y1=\"126.4\" x2=\"143.6\" y2=\"126.4\"/><circle class=\"dt\" cx=\"110\" cy=\"126.4\" r=\"2.5\"/><text x=\"151.6\" y=\"131.4\" text-anchor=\"start\">12 in</text><circle class=\"sh2\" cx=\"110\" cy=\"67.6\" r=\"25.2\"/><line class=\"thin\" x1=\"110\" y1=\"67.6\" x2=\"135.2\" y2=\"67.6\"/><circle class=\"dt\" cx=\"110\" cy=\"67.6\" r=\"2.5\"/><text x=\"143.2\" y=\"72.6\" text-anchor=\"start\">9 in</text><circle class=\"sh2\" cx=\"110\" cy=\"25.6\" r=\"16.8\"/><line class=\"thin\" x1=\"110\" y1=\"25.6\" x2=\"126.8\" y2=\"25.6\"/><circle class=\"dt\" cx=\"110\" cy=\"25.6\" r=\"2.5\"/><text x=\"134.8\" y=\"30.6\" text-anchor=\"start\">6 in</text><text class=\"sm\" x=\"172.8\" y=\"30.6\" text-anchor=\"start\">head</text><text class=\"sm\" x=\"181.2\" y=\"72.6\" text-anchor=\"start\">middle</text><text class=\"sm\" x=\"189.6\" y=\"131.4\" text-anchor=\"start\">base</text></svg></figure><p class=\"geo-given\">A snowman is made of three snowballs, each a sphere. Their radii are 6 in (head), 9 in (middle) and 12 in (base). The head has a surface area of 144π in² and a volume of 288π in³.</p>",
      claims: [
        {
          id: "base-volume",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The base has twice the radius of the head. What is the volume of the base?",
          choices: [
            { letter: "A", text: "1,728π in³" },
            { letter: "B", text: "1,152π in³" },
            { letter: "C", text: "2,304π in³" },
            { letter: "D", text: "576π in³" }
          ],
          correct: "C"
        },
        {
          id: "area-ratio",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the ratio of the middle snowball's surface area to the head's surface area?",
          choices: [
            { letter: "A", text: "27 : 8" },
            { letter: "B", text: "3 : 2" },
            { letter: "C", text: "4 : 9" },
            { letter: "D", text: "9 : 4" }
          ],
          correct: "D"
        },
        {
          id: "all-similar",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Which statement about the three snowballs is true?",
          choices: [
            { letter: "A", text: "Only the head and the base are similar, because 12/6 is a whole number." },
            { letter: "B", text: "Any two of them are similar, because all spheres are similar." },
            { letter: "C", text: "The head and the base are similar, with a volume ratio of 2." },
            { letter: "D", text: "None of them are similar, because their radii are different." }
          ],
          correct: "B"
        },
        {
          id: "mini-snowman",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A mini snowman is similar to this one, and its base has a radius of 3 in. What is the radius of its head?",
          choices: [
            { letter: "A", text: "0.375 in" },
            { letter: "B", text: "0.75 in" },
            { letter: "C", text: "1.5 in" },
            { letter: "D", text: "6 in" }
          ],
          correct: "C"
        },
        {
          id: "roll-bigger",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Kids roll the head in more snow until its radius is 9 in. How much more snow is in the head now than before?",
          choices: [
            { letter: "A", text: "684π in³" },
            { letter: "B", text: "144π in³" },
            { letter: "C", text: "972π in³" },
            { letter: "D", text: "360π in³" }
          ],
          correct: "A"
        },
        {
          id: "circumference",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "The head's widest circumference is 12π in. What is the widest circumference of the base?",
          choices: [
            { letter: "A", text: "48π in" },
            { letter: "B", text: "96π in" },
            { letter: "C", text: "144π in" },
            { letter: "D", text: "24π in" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df2-worms-raised-bed",
      family: "GEO",
      mode: "worms",
      title: "The Raised Garden Bed",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Soil, boards and planting space in a backyard bed.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A raised garden bed: a wooden box 8 ft long, 3 ft wide and 1.5 ft deep with no top or bottom, filled with soil (shaded) with sprouts; hidden edges dashed\"><polygon class=\"sh\" points=\"50,97 226,97 254.6,80.5 78.6,80.5\"/><polygon class=\"sh2\" points=\"50,130 226,130 226,97 50,97\"/><polygon class=\"sh2\" points=\"226,130 254.6,113.5 254.6,80.5 226,97\"/><path class=\"thin dash\" d=\"M78.6 113.5 L50 130 M78.6 113.5 L254.6 113.5 M78.6 113.5 L78.6 80.5\"/><path class=\"thin\" d=\"M50 113.5 L226 113.5 L254.6 97\"/><path class=\"thin\" d=\"M103.5 91.5 L99.5 84.5 M103.5 91.5 L107.5 84.5\"/><path class=\"thin\" d=\"M157.1 86 L153.1 79 M157.1 86 L161.1 79\"/><path class=\"thin\" d=\"M191.5 91.5 L187.5 84.5 M191.5 91.5 L195.5 84.5\"/><path class=\"thin\" d=\"M141.4 84.9 L137.4 77.9 M141.4 84.9 L145.4 77.9\"/><path class=\"thin\" d=\"M173 92.1 L169 85.1 M173 92.1 L177 85.1\"/><text x=\"138\" y=\"147\" text-anchor=\"middle\">8 ft</text><text x=\"44\" y=\"118.5\" text-anchor=\"end\">1.5 ft</text><text x=\"248.3\" y=\"135.8\" text-anchor=\"start\">3 ft</text><text class=\"sm\" x=\"166.6\" y=\"66.5\" text-anchor=\"middle\">soil</text></svg></figure><p class=\"geo-given\">A raised garden bed is a wooden frame with no top or bottom, 8 ft long, 3 ft wide and 1.5 ft deep. It holds 36 ft³ of soil. Its four wooden sides have an area of 33 ft², and its top is 24 ft² of planting space.</p>",
      claims: [
        {
          id: "long-bed",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A second bed is 16 ft long, 3 ft wide and 1.5 ft deep. How much soil does it hold?",
          choices: [
            { letter: "A", text: "72 ft³" },
            { letter: "B", text: "44 ft³" },
            { letter: "C", text: "288 ft³" },
            { letter: "D", text: "144 ft³" }
          ],
          correct: "A"
        },
        {
          id: "deeper-sides",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The gardener makes the bed 3 ft deep instead of 1.5 ft, with the same 8 ft length and 3 ft width. What is the area of its four wooden sides?",
          choices: [
            { letter: "A", text: "264 ft²" },
            { letter: "B", text: "33 ft²" },
            { letter: "C", text: "66 ft²" },
            { letter: "D", text: "132 ft²" }
          ],
          correct: "C"
        },
        {
          id: "kids-bed",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A kids' bed is similar to this bed, with every length half as long. How much soil does it hold?",
          choices: [
            { letter: "A", text: "9 ft³" },
            { letter: "B", text: "72 ft³" },
            { letter: "C", text: "18 ft³" },
            { letter: "D", text: "4.5 ft³" }
          ],
          correct: "D"
        },
        {
          id: "bed-kit",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A bed kit is 12 ft long, 4.5 ft wide and 2 ft deep. Is it similar to this bed? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: 12/8 = 4.5/3 = 2/1.5 = 1.5." },
            { letter: "B", text: "Yes: its planting space is 1.5 times as large." },
            { letter: "C", text: "No: 12/8 = 4.5/3 = 1.5, but 2/1.5 ≈ 1.33." },
            { letter: "D", text: "No: 12/8 = 1.5, but 4.5/3 = 1.4." }
          ],
          correct: "C"
        },
        {
          id: "four-times",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "Which change to the bed gives it room for 4 times as much soil?",
          choices: [
            { letter: "A", text: "Add 4 ft to the length; keep the width and the depth." },
            { letter: "B", text: "Double the length and the width; keep the depth." },
            { letter: "C", text: "Double the length, the width and the depth." },
            { letter: "D", text: "Double the length; keep the width and the depth." }
          ],
          correct: "B"
        },
        {
          id: "big-bed",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A bigger bed is similar to this bed and has 96 ft² of planting space on top. How deep is it?",
          choices: [
            { letter: "A", text: "3 ft" },
            { letter: "B", text: "12 ft" },
            { letter: "C", text: "4 ft" },
            { letter: "D", text: "6 ft" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df2-worms-fish-pond",
      family: "GEO",
      mode: "worms",
      title: "The Backyard Fish Pond",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Water, liner and edging stones for a round pond.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 132\" role=\"img\" aria-label=\"A round backyard fish pond seen from above at an angle: the water surface is 10 ft across, a gold ring of edging stones runs around the rim, and dashed lines show the walls and floor 2 ft below the ground\"><line class=\"thin\" x1=\"20\" y1=\"46\" x2=\"62\" y2=\"46\"/><line class=\"thin\" x1=\"258\" y1=\"46\" x2=\"300\" y2=\"46\"/><path class=\"thin dash\" d=\"M70 46 V82 A90 27 0 0 0 250 82 V46\"/><ellipse class=\"sh2\" cx=\"160\" cy=\"46\" rx=\"90\" ry=\"27\"/><ellipse class=\"ac\" cx=\"160\" cy=\"46\" rx=\"94\" ry=\"30\"/><line class=\"thin dash\" x1=\"70\" y1=\"46\" x2=\"250\" y2=\"46\"/><text x=\"160\" y=\"39\" text-anchor=\"middle\">10 ft</text><path class=\"thin\" d=\"M262 46 H270 M262 82 H270 M266 46 V82\"/><text x=\"274\" y=\"69\" text-anchor=\"start\">2 ft</text><text class=\"sm\" x=\"60\" y=\"86\" text-anchor=\"end\">underground</text><text class=\"sm acc\" x=\"160\" y=\"91\" text-anchor=\"middle\">edging stones</text></svg></figure><p class=\"geo-given\">A backyard fish pond is a cylinder 10 ft across (radius 5 ft) and 2 ft deep. It holds 50π ft³ of water. Its liner covers the floor and the side: 45π ft². A ring of edging stones runs around its rim, 10π ft long.</p>",
      claims: [
        {
          id: "deeper",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The owner digs the pond deeper, 3 ft instead of 2 ft, and keeps the 10 ft width. How much water does it hold?",
          choices: [
            { letter: "A", text: "168.75π ft³" },
            { letter: "B", text: "75π ft³" },
            { letter: "C", text: "112.5π ft³" },
            { letter: "D", text: "300π ft³" }
          ],
          correct: "B"
        },
        {
          id: "wider-liner",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The owner widens the pond to 20 ft across and keeps it 2 ft deep. How much liner does it need for the floor and the side?",
          choices: [
            { letter: "A", text: "90π ft²" },
            { letter: "B", text: "360π ft²" },
            { letter: "C", text: "180π ft²" },
            { letter: "D", text: "140π ft²" }
          ],
          correct: "D"
        },
        {
          id: "patio-pond",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A small patio pond is similar to this pond and is 6 ft across. How much water does it hold?",
          choices: [
            { letter: "A", text: "10.8π ft³" },
            { letter: "B", text: "30π ft³" },
            { letter: "C", text: "18π ft³" },
            { letter: "D", text: "43.2π ft³" }
          ],
          correct: "A"
        },
        {
          id: "neighbor",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A neighbor's pond is a cylinder 8 ft across and 1.5 ft deep. Is it similar to this pond? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: both are cylinders, so they are similar." },
            { letter: "B", text: "No: 8/10 = 0.8, but 1.5/2 = 0.75." },
            { letter: "C", text: "No: 8/10 = 0.8, but 1.5/2 = 0.5." },
            { letter: "D", text: "Yes: 8/10 = 1.5/2 = 0.8." }
          ],
          correct: "B"
        },
        {
          id: "edging",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A larger pond is similar to this pond, and its ring of edging stones is 25π ft long. How deep is it?",
          choices: [
            { letter: "A", text: "12.5 ft" },
            { letter: "B", text: "31.25 ft" },
            { letter: "C", text: "5 ft" },
            { letter: "D", text: "4.5 ft" }
          ],
          correct: "C"
        },
        {
          id: "big-pond",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "Another pond is similar to this pond and holds 400π ft³ of water. How wide is it across?",
          choices: [
            { letter: "A", text: "10 ft" },
            { letter: "B", text: "about 28.3 ft" },
            { letter: "C", text: "80 ft" },
            { letter: "D", text: "20 ft" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df2-worms-bird-eggs",
      family: "GEO",
      mode: "worms",
      title: "Eggs at the Nature Center",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Chicken, goose, duck and robin eggs compared.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 154\" role=\"img\" aria-label=\"Two eggs drawn to scale, lying on their sides: a chicken egg 6 cm long and 4.5 cm wide, and a goose egg 8 cm long and 6 cm wide\"><path class=\"sh2\" d=\"M97.8 28.5 A37.8 31.5 0 0 0 97.8 91.5 A46.2 31.5 0 0 0 97.8 28.5 Z\"/><path class=\"sh2\" d=\"M246.4 18 A50.4 42 0 0 0 246.4 102 A61.6 42 0 0 0 246.4 18 Z\"/><path class=\"thin\" d=\"M60 108 V116 M144 108 V116 M60 112 H144\"/><text x=\"102\" y=\"130\" text-anchor=\"middle\">6 cm</text><path class=\"thin\" d=\"M51 28.5 H59 M51 91.5 H59 M55 28.5 V91.5\"/><text x=\"49\" y=\"65\" text-anchor=\"end\">4.5 cm</text><text class=\"sm\" x=\"102\" y=\"148\" text-anchor=\"middle\">chicken</text><path class=\"thin\" d=\"M196 108 V116 M308 108 V116 M196 112 H308\"/><text x=\"252\" y=\"130\" text-anchor=\"middle\">8 cm</text><path class=\"thin\" d=\"M187 18 H195 M187 102 H195 M191 18 V102\"/><text x=\"185\" y=\"65\" text-anchor=\"end\">6 cm</text><text class=\"sm\" x=\"252\" y=\"148\" text-anchor=\"middle\">goose</text></svg></figure><p class=\"geo-given\">A nature center shows bird eggs. Eggs with the same shape are similar solids. A chicken egg is 6 cm long and 4.5 cm wide. Its shell has an area of 63 cm², and it holds 54 cm³. A goose egg has the same shape: it is 8 cm long and 6 cm wide.</p>",
      claims: [
        {
          id: "same-shape",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Which egg has the same shape as the chicken egg?",
          choices: [
            { letter: "A", text: "9 cm long and 6 cm wide" },
            { letter: "B", text: "5 cm long and 3.5 cm wide" },
            { letter: "C", text: "6 cm long and 3 cm wide" },
            { letter: "D", text: "4.8 cm long and 3.6 cm wide" }
          ],
          correct: "D"
        },
        {
          id: "goose-volume",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "How much does the goose egg hold?",
          choices: [
            { letter: "A", text: "128 cm³" },
            { letter: "B", text: "40.5 cm³" },
            { letter: "C", text: "72 cm³" },
            { letter: "D", text: "96 cm³" }
          ],
          correct: "A"
        },
        {
          id: "shell-ratio",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "What is the ratio of the goose egg's shell area to the chicken egg's shell area?",
          choices: [
            { letter: "A", text: "64 : 27" },
            { letter: "B", text: "16 : 9" },
            { letter: "C", text: "4 : 3" },
            { letter: "D", text: "9 : 16" }
          ],
          correct: "B"
        },
        {
          id: "duck",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A duck egg is 7.5 cm long and 5 cm wide. Is it similar to the chicken egg? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: each length is 1.5 cm more." },
            { letter: "B", text: "Yes: 7.5/6 = 5/4.5 = 1.25." },
            { letter: "C", text: "No: 7.5/6 = 1.25, but 5/4.5 = 0.9." },
            { letter: "D", text: "No: 7.5/6 = 1.25, but 5/4.5 ≈ 1.11." }
          ],
          correct: "D"
        },
        {
          id: "robin",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A robin's egg has the same shape as the chicken egg and holds 6.75 cm³. How long is it?",
          choices: [
            { letter: "A", text: "about 2.1 cm" },
            { letter: "B", text: "0.75 cm" },
            { letter: "C", text: "3 cm" },
            { letter: "D", text: "12 cm" }
          ],
          correct: "C"
        },
        {
          id: "turkey",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A turkey egg has the same shape as the chicken egg, and its shell has an area of 90.72 cm². How wide is it?",
          choices: [
            { letter: "A", text: "5.4 cm" },
            { letter: "B", text: "6.48 cm" },
            { letter: "C", text: "3.75 cm" },
            { letter: "D", text: "7.2 cm" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df2-worms-garden-shed",
      family: "GEO",
      mode: "worms",
      title: "The Garden Shed",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A pentagonal-prism shed, a playhouse and a barn.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A garden shed shaped like a pentagonal prism: the front is 8 ft wide with 6 ft walls and a peak 9 ft above the ground, each roof slope is 5 ft, and the shed is 10 ft deep; the right roof panel is shaded and hidden edges are dashed\"><polygon class=\"sh2\" points=\"80,150 168,150 168,84 124,51 80,84\"/><polygon class=\"sh2\" points=\"168,150 215.6,122.5 215.6,56.5 168,84\"/><polygon class=\"sh\" points=\"168,84 124,51 171.6,23.5 215.6,56.5\"/><path class=\"thin dash\" d=\"M171.6 23.5 L127.6 56.5 L80 84 M127.6 56.5 L127.6 122.5 L80 150 M127.6 122.5 L215.6 122.5\"/><path class=\"thin\" d=\"M113 150 L113 106 L135 106 L135 150\"/><path class=\"thin\" d=\"M40 51 H48 M40 150 H48 M44 51 V150\"/><text x=\"39\" y=\"105.5\" text-anchor=\"end\">9 ft</text><text x=\"124\" y=\"166\" text-anchor=\"middle\">8 ft</text><text x=\"74\" y=\"122\" text-anchor=\"end\">6 ft</text><text x=\"95\" y=\"63.5\" text-anchor=\"end\">5 ft</text><text x=\"200.8\" y=\"149.3\" text-anchor=\"start\">10 ft</text><text class=\"sm\" x=\"223.6\" y=\"42.5\" text-anchor=\"start\">roof</text></svg></figure><p class=\"geo-given\">A garden shed is a pentagonal prism. Its front is a rectangle 8 ft wide and 6 ft tall with a triangle on top. The peak is 9 ft above the ground, and each roof slope is 5 ft long. The shed is 10 ft deep. Its front has an area of 60 ft², it encloses 600 ft³, and its two roof panels have an area of 100 ft².</p>",
      claims: [
        {
          id: "longer-volume",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A longer shed has the same front but is 15 ft deep. What is its volume?",
          choices: [
            { letter: "A", text: "300 ft³" },
            { letter: "B", text: "1,350 ft³" },
            { letter: "C", text: "900 ft³" },
            { letter: "D", text: "2,025 ft³" }
          ],
          correct: "C"
        },
        {
          id: "taller-walls",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A taller shed keeps the 8 ft width, the 10 ft depth and the same roof triangle, but its walls are 8 ft tall instead of 6 ft. What is its volume?",
          choices: [
            { letter: "A", text: "800 ft³" },
            { letter: "B", text: "760 ft³" },
            { letter: "C", text: "640 ft³" },
            { letter: "D", text: "840 ft³" }
          ],
          correct: "B"
        },
        {
          id: "playhouse",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A playhouse is similar to the shed at a scale of 1 : 2. How much space does it enclose?",
          choices: [
            { letter: "A", text: "75 ft³" },
            { letter: "B", text: "150 ft³" },
            { letter: "C", text: "300 ft³" },
            { letter: "D", text: "1,200 ft³" }
          ],
          correct: "A"
        },
        {
          id: "barn",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A barn is similar to the shed, and its front has an area of 540 ft². How tall is the barn at its peak?",
          choices: [
            { letter: "A", text: "12 ft" },
            { letter: "B", text: "18 ft" },
            { letter: "C", text: "27 ft" },
            { letter: "D", text: "81 ft" }
          ],
          correct: "C"
        },
        {
          id: "shed-kit",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A shed kit has a front 12 ft wide with 9 ft walls and a peak 13.5 ft above the ground, and it is 16 ft deep. Is it similar to this shed? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: 12/8 = 1.5, but 9/6 = 1.6." },
            { letter: "B", text: "Yes: the fronts are similar, so the sheds are similar." },
            { letter: "C", text: "Yes: every ratio is 1.5." },
            { letter: "D", text: "No: the front ratios are all 1.5, but 16/10 = 1.6." }
          ],
          correct: "D"
        },
        {
          id: "twice-space",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The owner wants a shed with twice as much space as this one. Which plan works?",
          choices: [
            { letter: "A", text: "Make the walls 12 ft tall with the same roof." },
            { letter: "B", text: "Make it 20 ft deep with the same front." },
            { letter: "C", text: "Double every length of the shed." },
            { letter: "D", text: "Double the width and the depth." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df2-worms-silo-bales",
      family: "GEO",
      mode: "worms",
      title: "The Silo and the Hay Bales",
      kind: "Changing dimensions · G.DF.2",
      blurb: "A domed silo and bales of hay, big and small.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Left: a silo, a cylinder with radius 6 ft and walls 40 ft tall, topped by a half-sphere dome. Right: a small hay bale, a box 3 ft by 1.5 ft by 1.5 ft with two strings around it\"><path class=\"sh2\" d=\"M52 30 V150 A18 5.4 0 0 0 88 150 V30 A18 18 0 0 0 52 30 Z\"/><path class=\"ln\" d=\"M52 30 V150 A18 5.4 0 0 0 88 150 V30 A18 18 0 0 0 52 30\"/><path class=\"thin\" d=\"M52 30 A18 5.4 0 0 0 88 30\"/><path class=\"thin dash\" d=\"M52 150 A18 5.4 0 0 1 88 150\"/><line class=\"thin dash\" x1=\"70\" y1=\"30\" x2=\"88\" y2=\"30\"/><circle class=\"dt\" cx=\"70\" cy=\"30\" r=\"2.5\"/><text x=\"94\" y=\"32\" text-anchor=\"start\">6 ft</text><text x=\"46\" y=\"95\" text-anchor=\"end\">40 ft</text><text class=\"sm\" x=\"70\" y=\"169.4\" text-anchor=\"middle\">silo</text><polygon class=\"sh\" points=\"176,136 242,136 242,103 176,103\"/><polygon class=\"sh\" points=\"242,136 256.3,127.8 256.3,94.8 242,103\"/><polygon class=\"sh\" points=\"176,103 242,103 256.3,94.8 190.3,94.8\"/><path class=\"thin\" d=\"M198 136 L198 103 L212.3 94.8\"/><path class=\"thin\" d=\"M220 136 L220 103 L234.3 94.8\"/><text x=\"209\" y=\"153\" text-anchor=\"middle\">3 ft</text><text x=\"170\" y=\"124.5\" text-anchor=\"end\">1.5 ft</text><text x=\"257.1\" y=\"144.9\" text-anchor=\"start\">1.5 ft</text><text class=\"sm\" x=\"216.1\" y=\"84.8\" text-anchor=\"middle\">small hay bale</text></svg><figcaption>The silo and the bale are not drawn to the same scale.</figcaption></figure><p class=\"geo-given\">A farm stores grain in a silo: a cylinder with a radius of 6 ft and walls 40 ft tall, topped by a half-sphere dome. The silo holds 1,584π ft³, and its painted outside (side and dome) is 552π ft². A small hay bale is a box 3 ft long, 1.5 ft wide and 1.5 ft tall.</p>",
      claims: [
        {
          id: "half-silo",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A smaller silo is similar to this one and is 23 ft tall from the ground to the top of its dome. How much does it hold?",
          choices: [
            { letter: "A", text: "198π ft³" },
            { letter: "B", text: "396π ft³" },
            { letter: "C", text: "792π ft³" },
            { letter: "D", text: "864π ft³" }
          ],
          correct: "A"
        },
        {
          id: "add-ten",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The farmer builds the silo's walls 10 ft higher, to 50 ft, with the same radius and dome. How much more grain does it hold now?",
          choices: [
            { letter: "A", text: "396π ft³" },
            { letter: "B", text: "360π ft³" },
            { letter: "C", text: "1,944π ft³" },
            { letter: "D", text: "120π ft³" }
          ],
          correct: "B"
        },
        {
          id: "big-bale",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "A big hay bale is a box 8 ft long, 4 ft wide and 3 ft tall. Is it similar to the small bale? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: both bales are boxes, so they are similar." },
            { letter: "B", text: "Yes: every ratio is about 2.67." },
            { letter: "C", text: "No: 8/3 ≈ 2.67, but 4/1.5 = 2." },
            { letter: "D", text: "No: 8/3 = 4/1.5 ≈ 2.67, but 3/1.5 = 2." }
          ],
          correct: "D"
        },
        {
          id: "display-bale",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A display bale at a fall festival is similar to the small bale and holds 182.25 ft³ of hay. How long is it?",
          choices: [
            { letter: "A", text: "81 ft" },
            { letter: "B", text: "9 ft" },
            { letter: "C", text: "about 15.6 ft" },
            { letter: "D", text: "27 ft" }
          ],
          correct: "B"
        },
        {
          id: "best-buy",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A small bale weighs 45 lb and costs $6. A bale similar to it, with every length doubled, costs $40. Which is the better buy per pound of hay?",
          choices: [
            { letter: "A", text: "They cost the same per pound, since every length is doubled." },
            { letter: "B", text: "The small bale: the doubled bale costs about 6.7 times as much but holds 4 times as much." },
            { letter: "C", text: "The doubled bale: it costs about 6.7 times as much but holds 8 times as much." },
            { letter: "D", text: "The small bale: the doubled bale costs about 6.7 times as much but holds 2 times as much." }
          ],
          correct: "C"
        },
        {
          id: "paint",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A similar silo has a radius of 4.5 ft. Paint costs $0.40 per square foot. To the nearest dollar, what does it cost to paint its side and dome?",
          choices: [
            { letter: "A", text: "$390" },
            { letter: "B", text: "$293" },
            { letter: "C", text: "$694" },
            { letter: "D", text: "$520" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df2-worms-logs",
      family: "GEO",
      mode: "worms",
      title: "Logs from One Tree",
      kind: "Changing dimensions · G.DF.2",
      blurb: "Cutting, comparing and weighing cylinder logs.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 124\" role=\"img\" aria-label=\"A log lying on its side, shaped like a cylinder 3 ft across and 16 ft long; the near end shows tree rings and the hidden half of the far end is dashed\"><path class=\"sh2\" d=\"M52 45.4 H272 A8 20.6 0 0 1 272 86.6 H52 Z\"/><path class=\"ln\" d=\"M52 45.4 H272 A8 20.6 0 0 1 272 86.6 H52\"/><path class=\"thin dash\" d=\"M272 45.4 A8 20.6 0 0 0 272 86.6\"/><ellipse class=\"sh\" cx=\"52\" cy=\"66\" rx=\"8\" ry=\"20.6\"/><ellipse class=\"thin\" cx=\"52\" cy=\"66\" rx=\"5\" ry=\"12.8\"/><ellipse class=\"thin\" cx=\"52\" cy=\"66\" rx=\"2.2\" ry=\"5.8\"/><path class=\"thin\" d=\"M112 52.4 h18 M172 70 h22 M227 78.6 h16\"/><path class=\"thin\" d=\"M52 94.6 V102.6 M272 94.6 V102.6 M52 98.6 H272\"/><text x=\"162\" y=\"116.6\" text-anchor=\"middle\">16 ft</text><path class=\"thin\" d=\"M32 45.4 H40 M32 86.6 H40 M36 45.4 V86.6\"/><text x=\"30\" y=\"71\" text-anchor=\"end\">3 ft</text></svg></figure><p class=\"geo-given\">A logger cuts a tree trunk into logs. Treat each log as a cylinder. The first log is 3 ft across (radius 1.5 ft) and 16 ft long. It has 36π ft³ of wood, and its bark (the curved side) covers 48π ft².</p>",
      claims: [
        {
          id: "thin-log",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "A log from higher up the tree is 1.5 ft across and still 16 ft long. How much wood does it have?",
          choices: [
            { letter: "A", text: "4.5π ft³" },
            { letter: "B", text: "36π ft³" },
            { letter: "C", text: "18π ft³" },
            { letter: "D", text: "9π ft³" }
          ],
          correct: "D"
        },
        {
          id: "cut-in-two",
          sol: "G.DF.2",
          sub: "G.DF.2.1",
          stem: "The logger cuts the first log into two logs, each 8 ft long. What is the total bark area of the two shorter logs? (Count only the curved sides.)",
          choices: [
            { letter: "A", text: "12π ft²" },
            { letter: "B", text: "24π ft²" },
            { letter: "C", text: "48π ft²" },
            { letter: "D", text: "96π ft²" }
          ],
          correct: "C"
        },
        {
          id: "which-log",
          sol: "G.DF.2",
          sub: "G.DF.2.3",
          stem: "Which log is similar to the first log?",
          choices: [
            { letter: "A", text: "1.5 ft across and 4 ft long" },
            { letter: "B", text: "2.25 ft across and 12 ft long" },
            { letter: "C", text: "2 ft across and 15 ft long" },
            { letter: "D", text: "3 ft across and 8 ft long" }
          ],
          correct: "B"
        },
        {
          id: "short-log",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A short log is similar to the first log and has 4.5π ft³ of wood. How long is it?",
          choices: [
            { letter: "A", text: "8 ft" },
            { letter: "B", text: "about 5.7 ft" },
            { letter: "C", text: "4 ft" },
            { letter: "D", text: "2 ft" }
          ],
          correct: "A"
        },
        {
          id: "weight",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "A log similar to the first log is 6 ft across. The wood weighs 40 lb per cubic foot. To the nearest hundred pounds, how much does the log weigh?",
          choices: [
            { letter: "A", text: "18,100 lb" },
            { letter: "B", text: "9,000 lb" },
            { letter: "C", text: "4,500 lb" },
            { letter: "D", text: "36,200 lb" }
          ],
          correct: "D"
        },
        {
          id: "mia-bark",
          sol: "G.DF.2",
          sub: "G.DF.2.2",
          stem: "Mia says a log similar to the first log, but 3 times as long, has 3 times as much bark, 144π ft². Which statement is true?",
          choices: [
            { letter: "A", text: "Mia is right: 144π ft²." },
            { letter: "B", text: "It has 27 times as much bark: 1,296π ft²." },
            { letter: "C", text: "It has 9 times as much bark: 432π ft²." },
            { letter: "D", text: "It has 6 times as much bark: 288π ft²." }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
