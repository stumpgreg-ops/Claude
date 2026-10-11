/* SOL Labyrinth — Geometry game (family GEO), three-dimensional figures: G.DF.1 (Virginia 2023 Geometry SOL), v5.20.
   Modes: rocks (Rune Rocks: space, science and weather) and sky (Sun Chariot: travel and getting around). Original items only.
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given
   facts, then six questions about it. Solids are drawn in oblique or orthographic projection, hidden edges dashed, circular faces as
   ellipses. Every numeric answer was computed, and every distractor is a named mistake (radius for diameter, height
   for slant height, a missing 1/3 or 1/2, lateral for total surface area, a skipped unit conversion …). */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-df1-rocks-rain-gauge",
      family: "GEO",
      mode: "rocks",
      title: "The Rain Gauge",
      kind: "3-D figures · G.DF.1",
      blurb: "A clear cylinder catches the rain at the weather station.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A rain gauge drawn as an upright cylinder, open at the top, 10 cm across and 30 cm tall. Rainwater fills the bottom 3 cm and is shaded. The hidden back half of the bottom edge is dashed.\"><path class=\"sh2\" d=\"M160 134.6 V146 A20 6 0 0 1 120 146 V134.6 A20 6 0 0 1 160 134.6 Z\"/><ellipse class=\"thin\" cx=\"140\" cy=\"134.6\" rx=\"20\" ry=\"6\"/><path class=\"ln\" d=\"M120 31.5 V146 M160 31.5 V146 M160 146 A20 6 0 0 1 120 146\"/><path class=\"ln dash\" d=\"M120 146 A20 6 0 0 1 160 146\"/><ellipse class=\"ln\" cx=\"140\" cy=\"31.5\" rx=\"20\" ry=\"6\"/><path class=\"thin\" d=\"M120 16.5 H160 M120 11.5 V21.5 M160 11.5 V21.5\"/><text x=\"112\" y=\"21.5\" text-anchor=\"end\">10 cm</text><path class=\"thin\" d=\"M106 31.5 V146 M101 31.5 H111 M101 146 H111\"/><text x=\"98\" y=\"93.8\" text-anchor=\"end\">30 cm</text><path class=\"thin\" d=\"M174 134.6 V146 M169 134.6 H179 M169 146 H179\"/><text x=\"184\" y=\"145.3\">3 cm</text><text class=\"sm\" x=\"184\" y=\"112.6\">water</text><line class=\"thin\" x1=\"182\" y1=\"115.6\" x2=\"156\" y2=\"137.6\"/></svg></figure><p class=\"geo-given\">The school weather station's rain gauge is a clear cylinder, open at the top. Its inside diameter is 10 cm and it is 30 cm tall. After a storm, the water in it is 3 cm deep.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much water can the gauge hold when it is full, in terms of π?",
          choices: [
            { letter: "A", text: "3,000π cm³" },
            { letter: "B", text: "750π cm³" },
            { letter: "C", text: "150π cm³" },
            { letter: "D", text: "300π cm³" }
          ],
          correct: "B"
        },
        {
          id: "water",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the water in the gauge after the storm, to the nearest tenth of a cubic centimeter?",
          choices: [
            { letter: "A", text: "235.6 cm³" },
            { letter: "B", text: "942.5 cm³" },
            { letter: "C", text: "2,356.2 cm³" },
            { letter: "D", text: "47.1 cm³" }
          ],
          correct: "A"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "The gauge has a bottom but no top. Which shapes make up a net of the gauge?",
          choices: [
            { letter: "A", text: "a rectangle and two circles" },
            { letter: "B", text: "a sector and one circle" },
            { letter: "C", text: "a triangle and one circle" },
            { letter: "D", text: "a rectangle and one circle" }
          ],
          correct: "D"
        },
        {
          id: "surface",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "The flat top surface of the water is a cross section of the gauge. What is its area, in terms of π?",
          choices: [
            { letter: "A", text: "100π cm²" },
            { letter: "B", text: "25π cm²" },
            { letter: "C", text: "10π cm²" },
            { letter: "D", text: "30π cm²" }
          ],
          correct: "B"
        },
        {
          id: "vcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane cuts the gauge straight down through the center of its circular bottom. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 5 cm by 30 cm" },
            { letter: "B", text: "a circle with diameter 10 cm" },
            { letter: "C", text: "a rectangle 10 cm by 30 cm" },
            { letter: "D", text: "a triangle with base 10 cm and height 30 cm" }
          ],
          correct: "C"
        },
        {
          id: "plastic",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much plastic makes the bottom and the curved side of the gauge, in terms of π?",
          choices: [
            { letter: "A", text: "325π cm²" },
            { letter: "B", text: "350π cm²" },
            { letter: "C", text: "300π cm²" },
            { letter: "D", text: "175π cm²" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df1-rocks-crystal",
      family: "GEO",
      mode: "rocks",
      title: "The Pyramid Crystal",
      kind: "3-D figures · G.DF.1",
      blurb: "A crystal grown in the lab is a square pyramid.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A crystal drawn as a square pyramid with base edges of 18 mm. V is the tip, O is the center of the base and M is the midpoint of the front base edge. The height VO and segment OM are dashed and meet at a right angle; the slant height VM lies on the front face. Hidden edges are dashed.\"><polygon class=\"sh\" points=\"56,134 185.6,134 148.9,31.4\"/><path class=\"ln\" d=\"M56 134 L185.6 134 M185.6 134 L241.7 101.6 M185.6 134 L148.9 31.4 M56 134 L148.9 31.4 M241.7 101.6 L148.9 31.4\"/><path class=\"ln dash\" d=\"M241.7 101.6 L112.1 101.6 M56 134 L112.1 101.6 M112.1 101.6 L148.9 31.4\"/><line class=\"thin dash\" x1=\"148.9\" y1=\"31.4\" x2=\"148.9\" y2=\"117.8\"/><line class=\"thin dash\" x1=\"148.9\" y1=\"117.8\" x2=\"120.8\" y2=\"134\"/><line class=\"thin\" x1=\"148.9\" y1=\"31.4\" x2=\"120.8\" y2=\"134\"/><path class=\"thin\" d=\"M148.9 110.8 L142.8 114.3 L142.8 121.3\"/><circle class=\"dt\" cx=\"148.9\" cy=\"31.4\" r=\"2.5\"/><circle class=\"dt\" cx=\"148.9\" cy=\"117.8\" r=\"2.5\"/><circle class=\"dt\" cx=\"120.8\" cy=\"134\" r=\"2.5\"/><text x=\"148.9\" y=\"24.4\" text-anchor=\"middle\">V</text><text x=\"156.9\" y=\"129.8\">O</text><text x=\"120.8\" y=\"151\" text-anchor=\"middle\">M</text><text x=\"223.7\" y=\"131.8\">18 mm</text></svg></figure><p class=\"geo-given\">A crystal grown in the science lab is a square pyramid with base edges of 18 mm. <strong>V</strong> is its tip, <strong>O</strong> the center of its base and <strong>M</strong> the midpoint of a base edge. The height <strong>VO</strong> is 12 mm and the slant height <strong>VM</strong> is 15 mm.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the crystal?",
          choices: [
            { letter: "A", text: "3,888 mm³" },
            { letter: "B", text: "1,620 mm³" },
            { letter: "C", text: "1,944 mm³" },
            { letter: "D", text: "1,296 mm³" }
          ],
          correct: "D"
        },
        {
          id: "surface",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the total surface area of the crystal, base included?",
          choices: [
            { letter: "A", text: "540 mm²" },
            { letter: "B", text: "1,188 mm²" },
            { letter: "C", text: "864 mm²" },
            { letter: "D", text: "756 mm²" }
          ],
          correct: "C"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A net of the crystal is a square with a triangle on each side. What is the height of each triangle in the net?",
          choices: [
            { letter: "A", text: "15 mm" },
            { letter: "B", text: "12 mm" },
            { letter: "C", text: "18 mm" },
            { letter: "D", text: "9 mm" }
          ],
          correct: "A"
        },
        {
          id: "diag",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane passes through V and two opposite corners of the base. What is the cross section?",
          choices: [
            { letter: "A", text: "a triangle with base 18 mm and height 12 mm" },
            { letter: "B", text: "a triangle with base 18√2 mm and height 15 mm" },
            { letter: "C", text: "a square with sides 18 mm" },
            { letter: "D", text: "a triangle with base 18√2 mm and height 12 mm" }
          ],
          correct: "D"
        },
        {
          id: "level",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the base cuts the crystal 4 mm above the base. What is the cross section?",
          choices: [
            { letter: "A", text: "a square with sides 18 mm" },
            { letter: "B", text: "a square with sides 12 mm" },
            { letter: "C", text: "a square with sides 6 mm" },
            { letter: "D", text: "a square with sides 14 mm" }
          ],
          correct: "B"
        },
        {
          id: "nottrue",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Which statement about the crystal is NOT true?",
          choices: [
            { letter: "A", text: "Its four triangular faces are congruent." },
            { letter: "B", text: "Its slant height is longer than its height." },
            { letter: "C", text: "Its base and each triangular face have equal areas." },
            { letter: "D", text: "Its volume is 1/3 of a square prism's with the same base and height." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-df1-rocks-polar-tent",
      family: "GEO",
      mode: "rocks",
      title: "The Polar Research Tent",
      kind: "3-D figures · G.DF.1",
      blurb: "A triangular-prism tent for scientists on the ice.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A research tent drawn as a triangular prism resting on its rectangular floor. The front end is an equilateral triangle with tick marks on its three 6 ft sides and a door flap, and the tent is 10 ft long. Hidden edges are dashed.\"><polygon class=\"sh2\" points=\"77,136 173,136 125,52.9\"/><path class=\"ln\" d=\"M173 136 L125 52.9 M77 136 L173 136 M77 136 L125 52.9 M242.3 96 L194.3 12.9 M173 136 L242.3 96 M125 52.9 L194.3 12.9\"/><path class=\"ln dash\" d=\"M146.3 96 L194.3 12.9 M146.3 96 L242.3 96 M77 136 L146.3 96\"/><path class=\"thin\" d=\"M105.8 136 L125 84.5 L144.2 136\"/><path class=\"thin\" d=\"M125 131 L125 141 M144.7 96.9 L153.3 91.9 M105.3 96.9 L96.7 91.9\"/><text x=\"125\" y=\"154\" text-anchor=\"middle\">6 ft</text><text x=\"89\" y=\"94.4\" text-anchor=\"end\">6 ft</text><text x=\"217.6\" y=\"130\">10 ft</text></svg></figure><p class=\"geo-given\">Scientists on a polar ice sheet sleep in a tent shaped like a triangular prism. Each end is an equilateral triangle with sides of 6 ft, and the tent is 10 ft long. The floor, the two ends and the two sloped sides are all made of nylon.</p>",
      claims: [
        {
          id: "height",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How tall is the tent at its peak (the height of one triangular end)?",
          choices: [
            { letter: "A", text: "3√5 ft" },
            { letter: "B", text: "3 ft" },
            { letter: "C", text: "3√3 ft" },
            { letter: "D", text: "6√3 ft" }
          ],
          correct: "C"
        },
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much air space is inside the tent, to the nearest tenth of a cubic foot?",
          choices: [
            { letter: "A", text: "155.9 ft³" },
            { letter: "B", text: "311.8 ft³" },
            { letter: "C", text: "180.0 ft³" },
            { letter: "D", text: "90.0 ft³" }
          ],
          correct: "A"
        },
        {
          id: "nylon",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much nylon makes the whole tent, to the nearest tenth of a square foot?",
          choices: [
            { letter: "A", text: "180.0 ft²" },
            { letter: "B", text: "211.2 ft²" },
            { letter: "C", text: "195.6 ft²" },
            { letter: "D", text: "216.0 ft²" }
          ],
          correct: "B"
        },
        {
          id: "endcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the triangular ends cuts the tent 4 ft from the front. What is the cross section?",
          choices: [
            { letter: "A", text: "an equilateral triangle with sides of 6 ft" },
            { letter: "B", text: "an equilateral triangle with sides of 2.4 ft" },
            { letter: "C", text: "a rectangle 6 ft by 10 ft" },
            { letter: "D", text: "a rectangle 6 ft by 4 ft" }
          ],
          correct: "A"
        },
        {
          id: "levelcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the floor cuts the tent halfway up to its peak. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 6 ft by 10 ft" },
            { letter: "B", text: "a rectangle 3 ft by 5 ft" },
            { letter: "C", text: "a rectangle 3 ft by 10 ft" },
            { letter: "D", text: "an equilateral triangle with sides of 3 ft" }
          ],
          correct: "C"
        },
        {
          id: "sleepers",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "Each person in the tent needs at least 25 ft³ of air space. How many people can sleep in the tent?",
          choices: [
            { letter: "A", text: "7" },
            { letter: "B", text: "12" },
            { letter: "C", text: "3" },
            { letter: "D", text: "6" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df1-rocks-model-planet",
      family: "GEO",
      mode: "rocks",
      title: "The Model Planet",
      kind: "3-D figures · G.DF.1",
      blurb: "A foam planet with radius 10 cm, sliced to show its layers.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A model planet drawn as a sphere. A plane cuts it 6 cm above its center, making a circle drawn in gold. A dashed 6 cm segment runs up from the center of the sphere to the center of that circle, at a right angle to a radius of the circle; a 10 cm segment runs from the center of the sphere to the edge of the circle.\"><circle class=\"sh2\" cx=\"150\" cy=\"84\" r=\"65\"/><path class=\"ac\" d=\"M202 45 A52 13 0 0 1 98 45\"/><path class=\"ac dash\" d=\"M98 45 A52 13 0 0 1 202 45\"/><line class=\"thin dash\" x1=\"150\" y1=\"84\" x2=\"150\" y2=\"45\"/><line class=\"thin\" x1=\"150\" y1=\"45\" x2=\"202\" y2=\"45\"/><line class=\"thin\" x1=\"150\" y1=\"84\" x2=\"202\" y2=\"45\"/><path class=\"thin\" d=\"M150 51 L156 51 L156 45\"/><circle class=\"dt\" cx=\"150\" cy=\"84\" r=\"2.5\"/><circle class=\"dt\" cx=\"150\" cy=\"45\" r=\"2.5\"/><text x=\"144\" y=\"70.5\" text-anchor=\"end\">6 cm</text><text x=\"176\" y=\"88\" text-anchor=\"middle\">10 cm</text></svg></figure><p class=\"geo-given\">A science club makes a foam model of a planet. The model is a sphere with a radius of 10 cm. To show the layers inside, a plane cuts the model 6 cm from its center.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much foam is in the whole model, to the nearest tenth of a cubic centimeter?",
          choices: [
            { letter: "A", text: "1,256.6 cm³" },
            { letter: "B", text: "3,141.6 cm³" },
            { letter: "C", text: "33,510.3 cm³" },
            { letter: "D", text: "4,188.8 cm³" }
          ],
          correct: "D"
        },
        {
          id: "cutr",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "What is the radius of the circle made by the cut 6 cm from the center?",
          choices: [
            { letter: "A", text: "4 cm" },
            { letter: "B", text: "8 cm" },
            { letter: "C", text: "10 cm" },
            { letter: "D", text: "6 cm" }
          ],
          correct: "B"
        },
        {
          id: "cut8",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A second plane cuts the model 8 cm from its center. What is the area of that cross section, in terms of π?",
          choices: [
            { letter: "A", text: "4π cm²" },
            { letter: "B", text: "100π cm²" },
            { letter: "C", text: "36π cm²" },
            { letter: "D", text: "12π cm²" }
          ],
          correct: "C"
        },
        {
          id: "paint",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The outside of the whole model is painted. One jar of paint covers 300 cm². How many jars must be bought?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "4" },
            { letter: "C", text: "3" },
            { letter: "D", text: "17" }
          ],
          correct: "A"
        },
        {
          id: "halves",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Another model just like this one is cut through its center into two halves. How much flat surface does the cut make on the two halves together, in terms of π?",
          choices: [
            { letter: "A", text: "100π cm²" },
            { letter: "B", text: "400π cm²" },
            { letter: "C", text: "20π cm²" },
            { letter: "D", text: "200π cm²" }
          ],
          correct: "D"
        },
        {
          id: "nottrue",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Which statement about cross sections of the model is NOT true?",
          choices: [
            { letter: "A", text: "Every plane that cuts through the model makes a circle." },
            { letter: "B", text: "Planes 3 cm and 6 cm from the center make circles of the same size." },
            { letter: "C", text: "A plane through the center makes the largest circle." },
            { letter: "D", text: "A plane 10 cm from the center touches the model at just one point." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df1-rocks-lab-funnel",
      family: "GEO",
      mode: "rocks",
      title: "The Lab Funnel",
      kind: "3-D figures · G.DF.1",
      blurb: "A cone-shaped funnel and its paper filter.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 158\" role=\"img\" aria-label=\"A lab funnel drawn as a cone with its tip down and a thin stem below. The circular rim has a radius of 8 cm, drawn from the center of the rim at a right angle to the dashed axis; the funnel is 15 cm deep from the rim to the tip.\"><path class=\"sh\" d=\"M160 122.8 L215.3 24.4 A56 15.7 0 0 1 104.7 24.4 Z\"/><path class=\"ln\" d=\"M104.7 24.4 L160 122.8 L215.3 24.4\"/><ellipse class=\"ln\" cx=\"160\" cy=\"22\" rx=\"56\" ry=\"15.7\"/><path class=\"thin\" d=\"M157 117.4 V148.8 M163 117.4 V148.8\"/><line class=\"thin dash\" x1=\"160\" y1=\"22\" x2=\"160\" y2=\"122.8\"/><line class=\"thin\" x1=\"160\" y1=\"22\" x2=\"216\" y2=\"22\"/><path class=\"thin\" d=\"M166 22 L166 28 L160 28\"/><circle class=\"dt\" cx=\"160\" cy=\"22\" r=\"2.5\"/><path class=\"thin\" d=\"M88 22 V122.8 M83 22 H93 M83 122.8 H93\"/><path class=\"thin dash\" d=\"M91 122.8 H156\"/><text x=\"80\" y=\"77.4\" text-anchor=\"end\">15 cm</text><text x=\"222\" y=\"27\">8 cm</text><text class=\"sm\" x=\"172\" y=\"142.8\">stem</text></svg></figure><p class=\"geo-given\">A chemistry lab funnel is shaped like a cone, tip down, with a thin stem below the tip (ignore the stem). Its circular rim has a radius of 8 cm, and the funnel is 15 cm deep from the center of the rim to the tip.</p>",
      claims: [
        {
          id: "slant",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the slant height of the funnel, from the tip to the rim?",
          choices: [
            { letter: "A", text: "17 cm" },
            { letter: "B", text: "23 cm" },
            { letter: "C", text: "about 12.7 cm" },
            { letter: "D", text: "about 21.9 cm" }
          ],
          correct: "A"
        },
        {
          id: "axiscut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane cuts the funnel through its tip and the center of its rim. What is the area of the cross section?",
          choices: [
            { letter: "A", text: "240 cm²" },
            { letter: "B", text: "136 cm²" },
            { letter: "C", text: "60 cm²" },
            { letter: "D", text: "120 cm²" }
          ],
          correct: "D"
        },
        {
          id: "filter",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "A paper filter lines the whole inside of the funnel. What is the area of the filter, in terms of π?",
          choices: [
            { letter: "A", text: "120π cm²" },
            { letter: "B", text: "200π cm²" },
            { letter: "C", text: "136π cm²" },
            { letter: "D", text: "272π cm²" }
          ],
          correct: "C"
        },
        {
          id: "sector",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "The funnel's side is cut along a straight line from the tip and laid flat. It makes a sector of a circle. What fraction of a whole circle is the sector?",
          choices: [
            { letter: "A", text: "8/15" },
            { letter: "B", text: "8/17" },
            { letter: "C", text: "15/17" },
            { letter: "D", text: "9/17" }
          ],
          correct: "B"
        },
        {
          id: "levelcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A level plane cuts the funnel 6 cm below its rim. What is the radius of the cross section?",
          choices: [
            { letter: "A", text: "3.2 cm" },
            { letter: "B", text: "8 cm" },
            { letter: "C", text: "2 cm" },
            { letter: "D", text: "4.8 cm" }
          ],
          correct: "D"
        },
        {
          id: "drain",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The funnel is full of water, and the water drains out at 15 mL per second. To the nearest second, how long until the funnel is empty? Use 1 cm³ = 1 mL.",
          choices: [
            { letter: "A", text: "67 s" },
            { letter: "B", text: "201 s" },
            { letter: "C", text: "76 s" },
            { letter: "D", text: "268 s" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df1-rocks-planetarium",
      family: "GEO",
      mode: "rocks",
      title: "The Planetarium",
      kind: "3-D figures · G.DF.1",
      blurb: "A square building with a half-sphere dome for the star show.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A planetarium drawn as a box 14 m long, 14 m wide and 6 m tall with a dome shaped like half of a sphere on its flat roof. A dashed diameter of 12 m crosses the base of the dome. Hidden edges are dashed.\"><polygon class=\"sh2\" points=\"64.5,124 173.6,149.2 173.6,99.7 64.5,74.5\"/><path class=\"ln\" d=\"M64.5 124 L173.6 149.2 M173.6 149.2 L236.6 105.6 M236.6 56.1 L201.7 48 M173.6 99.7 L236.6 56.1 M64.5 74.5 L173.6 99.7 M64.5 74.5 L98.5 51 M173.6 149.2 L173.6 99.7 M64.5 124 L64.5 74.5 M236.6 105.6 L236.6 56.1\"/><path class=\"ln dash\" d=\"M236.6 105.6 L155.4 86.8 M64.5 124 L122.6 83.8\"/><path class=\"sh\" d=\"M96.6 65.3 A54 54 0 0 1 204.6 65.3 A54 21.6 0 0 1 96.6 65.3 Z\"/><path class=\"thin dash\" d=\"M96.6 65.3 A54 21.6 0 0 1 204.6 65.3\"/><line class=\"thin dash\" x1=\"96.6\" y1=\"65.3\" x2=\"204.6\" y2=\"65.3\"/><circle class=\"dt\" cx=\"150.6\" cy=\"65.3\" r=\"2.5\"/><text x=\"150.6\" y=\"57.3\" text-anchor=\"middle\">12 m</text><text x=\"57.5\" y=\"104.3\" text-anchor=\"end\">6 m</text><text x=\"111.1\" y=\"158.6\" text-anchor=\"middle\">14 m</text><text x=\"217.1\" y=\"145.4\">14 m</text></svg></figure><p class=\"geo-given\">A planetarium is a building shaped like a rectangular prism, 14 m long, 14 m wide and 6 m tall. On its flat roof sits a dome shaped like a hemisphere with a diameter of 12 m. The inside of the dome is open to the room below.</p>",
      claims: [
        {
          id: "dome",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the dome, in terms of π?",
          choices: [
            { letter: "A", text: "288π m³" },
            { letter: "B", text: "1,152π m³" },
            { letter: "C", text: "144π m³" },
            { letter: "D", text: "72π m³" }
          ],
          correct: "C"
        },
        {
          id: "total",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How much space is inside the building and the dome together, to the nearest tenth of a cubic meter?",
          choices: [
            { letter: "A", text: "2,080.8 m³" },
            { letter: "B", text: "1,628.4 m³" },
            { letter: "C", text: "1,402.2 m³" },
            { letter: "D", text: "4,795.1 m³" }
          ],
          correct: "B"
        },
        {
          id: "paint",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The curved outside of the dome is painted with paint that costs $7 per square meter. To the nearest dollar, what does the paint cost?",
          choices: [
            { letter: "A", text: "$1,583" },
            { letter: "B", text: "$3,167" },
            { letter: "C", text: "$792" },
            { letter: "D", text: "$2,375" }
          ],
          correct: "A"
        },
        {
          id: "roof",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much of the flat roof is not covered by the dome, to the nearest tenth of a square meter?",
          choices: [
            { letter: "A", text: "309.1 m²" },
            { letter: "B", text: "113.1 m²" },
            { letter: "C", text: "160.0 m²" },
            { letter: "D", text: "82.9 m²" }
          ],
          correct: "D"
        },
        {
          id: "vcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane parallel to the front wall cuts through the center of the dome. What is the cross section?",
          choices: [
            { letter: "A", text: "a 14 m by 6 m rectangle with a half circle of radius 12 m on top" },
            { letter: "B", text: "a 14 m by 6 m rectangle with a triangle on top" },
            { letter: "C", text: "a 14 m by 6 m rectangle with a half circle of radius 6 m on top" },
            { letter: "D", text: "a 14 m by 12 m rectangle" }
          ],
          correct: "C"
        },
        {
          id: "levelcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A level plane cuts the building 2 m above the floor. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 14 m by 2 m" },
            { letter: "B", text: "a square with sides of 14 m" },
            { letter: "C", text: "a circle with a radius of 6 m" },
            { letter: "D", text: "a square with sides of 12 m" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df1-rocks-oxygen-tank",
      family: "GEO",
      mode: "rocks",
      title: "The Liquid-Oxygen Tank",
      kind: "3-D figures · G.DF.1",
      blurb: "A rocket tank: a cylinder with a half sphere on each end.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"A rocket's liquid-oxygen tank lying on its side: a cylinder 6 m long with a hemisphere on each end. A radius of 1.5 m runs from the center of the right end of the cylinder to the tip of the tank. The seams between the cylinder and the hemispheres are drawn with their hidden halves dashed.\"><path class=\"sh2\" d=\"M89.3 23 H230.7 A39 39 0 0 1 230.7 101 H89.3 A39 39 0 0 1 89.3 23 Z\"/><path class=\"thin\" d=\"M89.3 101 A16.5 39 0 0 1 89.3 23 M230.7 101 A16.5 39 0 0 1 230.7 23\"/><path class=\"thin dash\" d=\"M89.3 23 A16.5 39 0 0 1 89.3 101 M230.7 23 A16.5 39 0 0 1 230.7 101\"/><line class=\"thin\" x1=\"230.7\" y1=\"62\" x2=\"269.7\" y2=\"62\"/><circle class=\"dt\" cx=\"230.7\" cy=\"62\" r=\"2.5\"/><text x=\"275.7\" y=\"67\">1.5 m</text><path class=\"thin\" d=\"M89.3 113 H230.7 M89.3 108 V118 M230.7 108 V118\"/><text x=\"160\" y=\"131\" text-anchor=\"middle\">6 m</text></svg></figure><p class=\"geo-given\">A rocket's liquid-oxygen tank is a cylinder 6 m long with a hemisphere on each end. The cylinder and both hemispheres have a radius of 1.5 m. Use 1 m³ = 1,000 L.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the whole tank, in terms of π?",
          choices: [
            { letter: "A", text: "18π m³" },
            { letter: "B", text: "15.75π m³" },
            { letter: "C", text: "20.25π m³" },
            { letter: "D", text: "22.5π m³" }
          ],
          correct: "A"
        },
        {
          id: "fill",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "A pump fills the empty tank at 500 L per second. To the nearest second, how long does it take to fill the tank?",
          choices: [
            { letter: "A", text: "99 s" },
            { letter: "B", text: "113 s" },
            { letter: "C", text: "127 s" },
            { letter: "D", text: "141 s" }
          ],
          correct: "B"
        },
        {
          id: "surferr",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Kai finds the tank's surface area as 2π(1.5)(6) + 2π(1.5)² = 22.5π m². What did Kai do wrong?",
          choices: [
            { letter: "A", text: "He should use the 9 m length in 2πrh; it is 31.5π m²." },
            { letter: "B", text: "He should use the 3 m diameter in 2πrh; it is 40.5π m²." },
            { letter: "C", text: "Nothing; the surface area is 22.5π m²." },
            { letter: "D", text: "He used flat circles for the ends; with hemispheres it is 27π m²." }
          ],
          correct: "D"
        },
        {
          id: "axiscut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane cuts the tank along its whole length, through the centers of both hemispheres. What is the cross section?",
          choices: [
            { letter: "A", text: "a 6 m by 3 m rectangle with a full circle on each 3 m side" },
            { letter: "B", text: "a 6 m by 3 m rectangle with a triangle on each 3 m side" },
            { letter: "C", text: "a 6 m by 3 m rectangle with a half circle on each 3 m side" },
            { letter: "D", text: "a 6 m by 1.5 m rectangle with a half circle on each end" }
          ],
          correct: "C"
        },
        {
          id: "tipcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane perpendicular to the tank's length cuts it 0.5 m from one tip. What is the radius of the cross section, to the nearest tenth of a meter?",
          choices: [
            { letter: "A", text: "1.5 m" },
            { letter: "B", text: "1.1 m" },
            { letter: "C", text: "0.5 m" },
            { letter: "D", text: "1.8 m" }
          ],
          correct: "B"
        },
        {
          id: "redesign",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "A new tank must hold 60,000 L. It keeps the 1.5 m radius and the two hemispheres, but its cylinder is longer. To the nearest tenth of a meter, how long must the cylinder be?",
          choices: [
            { letter: "A", text: "6.5 m" },
            { letter: "B", text: "8.5 m" },
            { letter: "C", text: "7.5 m" },
            { letter: "D", text: "4.5 m" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df1-rocks-ice-core",
      family: "GEO",
      mode: "rocks",
      title: "The Ice Core",
      kind: "3-D figures · G.DF.1",
      blurb: "A long cylinder of ancient ice, cut and boxed for the lab.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 120\" role=\"img\" aria-label=\"An ice core drawn as a long cylinder lying on its side, 12 cm across and 150 cm long, with two cut lines marking three equal sections. Hidden halves of the cut lines and of the far end are dashed.\"><path class=\"sh2\" d=\"M71.2 46.4 H288.8 A4.1 9.6 0 0 1 288.8 65.6 H71.2 A4.1 9.6 0 0 1 71.2 46.4 Z\"/><ellipse class=\"ln\" cx=\"288.8\" cy=\"56\" rx=\"4.1\" ry=\"9.6\"/><path class=\"ln\" d=\"M71.2 65.6 A4.1 9.6 0 0 1 71.2 46.4\"/><path class=\"ln dash\" d=\"M71.2 46.4 A4.1 9.6 0 0 1 71.2 65.6\"/><path class=\"thin\" d=\"M143.7 65.6 A4.1 9.6 0 0 1 143.7 46.4 M216.3 65.6 A4.1 9.6 0 0 1 216.3 46.4\"/><path class=\"thin dash\" d=\"M143.7 46.4 A4.1 9.6 0 0 1 143.7 65.6 M216.3 46.4 A4.1 9.6 0 0 1 216.3 65.6\"/><path class=\"thin\" d=\"M57.2 46.4 V65.6 M52.2 46.4 H62.2 M52.2 65.6 H62.2\"/><text x=\"49.2\" y=\"61\" text-anchor=\"end\">12 cm</text><path class=\"thin\" d=\"M71.2 76.6 H288.8 M71.2 71.6 V81.6 M288.8 71.6 V81.6\"/><text x=\"180\" y=\"94.6\" text-anchor=\"middle\">150 cm</text><text class=\"sm\" x=\"143.7\" y=\"38.4\" text-anchor=\"middle\">cut</text><text class=\"sm\" x=\"216.3\" y=\"38.4\" text-anchor=\"middle\">cut</text></svg></figure><p class=\"geo-given\">Scientists drill an ice core: a cylinder of ice 12 cm across and 150 cm long. In the lab they cut it into three equal sections, and each section goes in its own storage box, a rectangular prism 52 cm long, 14 cm wide and 14 cm tall on the inside.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the volume of the whole ice core, in terms of π?",
          choices: [
            { letter: "A", text: "21,600π cm³" },
            { letter: "B", text: "1,800π cm³" },
            { letter: "C", text: "900π cm³" },
            { letter: "D", text: "5,400π cm³" }
          ],
          correct: "D"
        },
        {
          id: "space",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "One section lies in its box. How much empty space is left in the box around it, to the nearest cubic centimeter?",
          choices: [
            { letter: "A", text: "4,537 cm³" },
            { letter: "B", text: "5,655 cm³" },
            { letter: "C", text: "4,145 cm³" },
            { letter: "D", text: "8,307 cm³" }
          ],
          correct: "A"
        },
        {
          id: "melt",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "When ice melts, the water takes up about 0.9 of the ice's volume. To the nearest tenth of a liter, how much water does the whole core make? Use 1 L = 1,000 cm³.",
          choices: [
            { letter: "A", text: "17.0 L" },
            { letter: "B", text: "5.1 L" },
            { letter: "C", text: "15.3 L" },
            { letter: "D", text: "61.1 L" }
          ],
          correct: "C"
        },
        {
          id: "slant",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A saw cuts through one section at a slant. The cut crosses the curved side all the way around and does not touch the flat ends. What is the shape of the cut face?",
          choices: [
            { letter: "A", text: "a circle 12 cm across" },
            { letter: "B", text: "an ellipse (an oval)" },
            { letter: "C", text: "a rectangle 12 cm wide" },
            { letter: "D", text: "a parallelogram" }
          ],
          correct: "B"
        },
        {
          id: "cuts",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "Cutting the core into three sections makes new flat faces. How much more surface area do the three sections have in all than the whole core had, in terms of π?",
          choices: [
            { letter: "A", text: "72π cm²" },
            { letter: "B", text: "216π cm²" },
            { letter: "C", text: "144π cm²" },
            { letter: "D", text: "576π cm²" }
          ],
          correct: "C"
        },
        {
          id: "board",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Each box is closed on all six sides. How much board makes one box, using its inside measurements?",
          choices: [
            { letter: "A", text: "3,108 cm²" },
            { letter: "B", text: "2,912 cm²" },
            { letter: "C", text: "1,652 cm²" },
            { letter: "D", text: "3,304 cm²" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-df1-sky-suitcase",
      family: "GEO",
      mode: "sky",
      title: "The Carry-On Suitcase",
      kind: "3-D figures · G.DF.1",
      blurb: "A rolling suitcase that just fits in the overhead bin.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A carry-on suitcase drawn as a rectangular prism standing upright: 14 in wide, 22 in tall and 9 in deep, with a handle on top and a zipper line on the front. Hidden edges are dashed.\"><polygon class=\"sh2\" points=\"128,140 202.2,140 202.2,23.4 128,23.4\"/><path class=\"ln\" d=\"M128 140 L202.2 140 M202.2 140 L222.9 128.1 M222.9 11.5 L148.7 11.5 M202.2 23.4 L222.9 11.5 M128 23.4 L202.2 23.4 M128 23.4 L148.7 11.5 M202.2 140 L202.2 23.4 M128 140 L128 23.4 M222.9 128.1 L222.9 11.5\"/><path class=\"ln dash\" d=\"M222.9 128.1 L148.7 128.1 M128 140 L148.7 128.1 M148.7 128.1 L148.7 11.5\"/><path class=\"thin\" d=\"M164.8 17.4 V11.4 H186 V17.4\"/><line class=\"thin dash\" x1=\"136\" y1=\"129.4\" x2=\"136\" y2=\"34\"/><text x=\"165.1\" y=\"157\" text-anchor=\"middle\">14 in</text><text x=\"121\" y=\"86.7\" text-anchor=\"end\">22 in</text><text x=\"221.5\" y=\"147\">9 in</text></svg></figure><p class=\"geo-given\">A carry-on suitcase is a rectangular prism. Standing up, it is 14 in wide, 22 in tall and 9 in deep.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much space is inside the suitcase, using its outside measurements?",
          choices: [
            { letter: "A", text: "308 in³" },
            { letter: "B", text: "924 in³" },
            { letter: "C", text: "2,772 in³" },
            { letter: "D", text: "1,264 in³" }
          ],
          correct: "C"
        },
        {
          id: "surface",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the total surface area of the suitcase?",
          choices: [
            { letter: "A", text: "632 in²" },
            { letter: "B", text: "1,138 in²" },
            { letter: "C", text: "2,772 in²" },
            { letter: "D", text: "1,264 in²" }
          ],
          correct: "D"
        },
        {
          id: "net",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A net of the suitcase is made of six rectangles. How many of them are 22 in by 9 in?",
          choices: [
            { letter: "A", text: "2" },
            { letter: "B", text: "4" },
            { letter: "C", text: "1" },
            { letter: "D", text: "6" }
          ],
          correct: "A"
        },
        {
          id: "frontcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A plane parallel to the front face cuts the suitcase halfway between the front and the back. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 22 in by 9 in" },
            { letter: "B", text: "a rectangle 14 in by 22 in" },
            { letter: "C", text: "a rectangle 14 in by 9 in" },
            { letter: "D", text: "a rectangle 7 in by 11 in" }
          ],
          correct: "B"
        },
        {
          id: "cover",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "A travel cover wraps the whole outside of the suitcase. To the nearest tenth of a square foot, how much cover is that? Use 1 ft² = 144 in².",
          choices: [
            { letter: "A", text: "105.3 ft²" },
            { letter: "B", text: "4.4 ft²" },
            { letter: "C", text: "8.8 ft²" },
            { letter: "D", text: "7.9 ft²" }
          ],
          correct: "C"
        },
        {
          id: "nottrue",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "Which statement about the suitcase is NOT true?",
          choices: [
            { letter: "A", text: "Its surface area is 14 · 22 · 9 square inches." },
            { letter: "B", text: "Its front and back faces are congruent rectangles." },
            { letter: "C", text: "Its volume is the area of its bottom times 22 in." },
            { letter: "D", text: "Every cross section parallel to the bottom is 14 in by 9 in." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-df1-sky-wheel-chock",
      family: "GEO",
      mode: "sky",
      title: "The Wheel Chock",
      kind: "3-D figures · G.DF.1",
      blurb: "A rubber wedge that keeps a parked plane from rolling.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"An airplane wheel chock drawn as a triangular prism. Each end is a right triangle with legs of 7 in (up) and 24 in (along the ground) and a 25 in sloped side; the chock is 10 in wide. Hidden edges are dashed.\"><polygon class=\"sh\" points=\"24,118 252,118 24,51.5\"/><path class=\"ln\" d=\"M252 118 L24 51.5 M24 118 L252 118 M24 118 L24 51.5 M293.1 94.3 L65.1 27.8 M252 118 L293.1 94.3 M24 51.5 L65.1 27.8\"/><path class=\"ln dash\" d=\"M65.1 94.3 L65.1 27.8 M65.1 94.3 L293.1 94.3 M24 118 L65.1 94.3\"/><path class=\"thin\" d=\"M32 118 V110 H24\"/><text x=\"138\" y=\"135\" text-anchor=\"middle\">24 in</text><text x=\"26\" y=\"44.5\" text-anchor=\"middle\">7 in</text><text x=\"144.2\" y=\"67.6\" text-anchor=\"middle\">25 in</text><text x=\"282.6\" y=\"120.1\">10 in</text></svg></figure><p class=\"geo-given\">At the airport, a rubber wheel chock keeps a parked plane from rolling. The chock is a triangular prism. Each end is a right triangle with legs of 7 in and 24 in and a sloped side of 25 in, and the chock is 10 in wide.</p>",
      claims: [
        {
          id: "volume",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "How much rubber is in the chock?",
          choices: [
            { letter: "A", text: "1,680 in³" },
            { letter: "B", text: "840 in³" },
            { letter: "C", text: "875 in³" },
            { letter: "D", text: "280 in³" }
          ],
          correct: "B"
        },
        {
          id: "surface",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "What is the total surface area of the chock?",
          choices: [
            { letter: "A", text: "560 in²" },
            { letter: "B", text: "896 in²" },
            { letter: "C", text: "644 in²" },
            { letter: "D", text: "728 in²" }
          ],
          correct: "D"
        },
        {
          id: "faces",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "Which shape is NOT one of the faces of the chock?",
          choices: [
            { letter: "A", text: "a rectangle 24 in by 7 in" },
            { letter: "B", text: "a rectangle 25 in by 10 in" },
            { letter: "C", text: "a rectangle 7 in by 10 in" },
            { letter: "D", text: "a right triangle with legs 7 in and 24 in" }
          ],
          correct: "A"
        },
        {
          id: "cut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane parallel to the 7 in tall back face cuts the chock 12 in in front of it. What is the cross section?",
          choices: [
            { letter: "A", text: "a rectangle 7 in by 10 in" },
            { letter: "B", text: "a rectangle 3.5 in by 12 in" },
            { letter: "C", text: "a rectangle 3.5 in by 10 in" },
            { letter: "D", text: "a right triangle with legs 3.5 in and 12 in" }
          ],
          correct: "C"
        },
        {
          id: "weight",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "The rubber weighs 0.05 lb per cubic inch. How much does the chock weigh?",
          choices: [
            { letter: "A", text: "84 lb" },
            { letter: "B", text: "14 lb" },
            { letter: "C", text: "16,800 lb" },
            { letter: "D", text: "42 lb" }
          ],
          correct: "D"
        },
        {
          id: "grip",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "A grip pad covers the whole sloped face that touches the tire. What is the area of the pad?",
          choices: [
            { letter: "A", text: "240 in²" },
            { letter: "B", text: "250 in²" },
            { letter: "C", text: "125 in²" },
            { letter: "D", text: "70 in²" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-df1-sky-fuel-truck",
      family: "GEO",
      mode: "sky",
      title: "The Fuel Truck",
      kind: "3-D figures · G.DF.1",
      blurb: "A cylinder of fuel on wheels, bound for the gas stations.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 120\" role=\"img\" aria-label=\"A fuel truck: the tank is a cylinder lying on its side, 9 m long and 2.2 m across, with a vertical diameter drawn on its near end. A simple cab and wheels are drawn with thin lines. The hidden half of the far end is dashed.\"><path class=\"thin\" d=\"M14 87.3 V50 H34 L55.3 60 V87.3\"/><path class=\"thin\" d=\"M14 87.3 H274.3\"/><circle class=\"thin\" cx=\"34\" cy=\"96.3\" r=\"9\"/><circle class=\"thin\" cx=\"189.6\" cy=\"96.3\" r=\"9\"/><circle class=\"thin\" cx=\"213.6\" cy=\"96.3\" r=\"9\"/><path class=\"sh2\" d=\"M72 30.7 H259.6 A10.7 25.3 0 0 1 259.6 81.3 H72 A10.7 25.3 0 0 1 72 30.7 Z\"/><ellipse class=\"ln\" cx=\"259.6\" cy=\"56\" rx=\"10.7\" ry=\"25.3\"/><path class=\"ln\" d=\"M72 81.3 A10.7 25.3 0 0 1 72 30.7\"/><path class=\"ln dash\" d=\"M72 30.7 A10.7 25.3 0 0 1 72 81.3\"/><line class=\"thin\" x1=\"259.6\" y1=\"30.7\" x2=\"259.6\" y2=\"81.3\"/><text x=\"276.3\" y=\"61\">2.2 m</text><path class=\"thin\" d=\"M72 21.7 H259.6 M72 16.7 V26.7 M259.6 16.7 V26.7\"/><text x=\"165.8\" y=\"15.7\" text-anchor=\"middle\">9 m</text></svg></figure><p class=\"geo-given\">The tank on a fuel truck is a cylinder lying on its side, closed at both ends. It is 2.2 m across and 9 m long. Use 1 m³ = 1,000 L.</p>",
      claims: [
        {
          id: "liters",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "How many liters does the full tank hold, to the nearest liter?",
          choices: [
            { letter: "A", text: "136,848 L" },
            { letter: "B", text: "31,102 L" },
            { letter: "C", text: "10,890 L" },
            { letter: "D", text: "34,212 L" }
          ],
          correct: "D"
        },
        {
          id: "endcut",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "A vertical plane cuts straight across the tank, parallel to its flat ends. What is the cross section?",
          choices: [
            { letter: "A", text: "a circle 2.2 m across" },
            { letter: "B", text: "a circle 4.4 m across" },
            { letter: "C", text: "a rectangle 2.2 m by 9 m" },
            { letter: "D", text: "a circle 1.1 m across" }
          ],
          correct: "A"
        },
        {
          id: "halffull",
          sol: "G.DF.1",
          sub: "G.DF.1.1",
          stem: "When the tank is exactly half full, the top of the fuel is a level cross section through the middle of the tank. What is its area?",
          choices: [
            { letter: "A", text: "9.9 m²" },
            { letter: "B", text: "19.8 m²" },
            { letter: "C", text: "3.8 m²" },
            { letter: "D", text: "62.2 m²" }
          ],
          correct: "B"
        },
        {
          id: "paint",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "The whole outside of the tank is painted. What area is painted, to the nearest tenth of a square meter?",
          choices: [
            { letter: "A", text: "62.2 m²" },
            { letter: "B", text: "66.0 m²" },
            { letter: "C", text: "69.8 m²" },
            { letter: "D", text: "154.8 m²" }
          ],
          correct: "C"
        },
        {
          id: "loads",
          sol: "G.DF.1",
          sub: "G.DF.1.3",
          stem: "A depot must deliver 100,000 L of fuel. How many full loads of this truck does it take?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "2" },
            { letter: "C", text: "1" },
            { letter: "D", text: "4" }
          ],
          correct: "A"
        },
        {
          id: "band",
          sol: "G.DF.1",
          sub: "G.DF.1.2",
          stem: "A reflective band 0.4 m wide goes once around the curved side of the tank. What is the area of the band, to the nearest tenth of a square meter?",
          choices: [
            { letter: "A", text: "1.4 m²" },
            { letter: "B", text: "5.5 m²" },
            { letter: "C", text: "0.9 m²" },
            { letter: "D", text: "2.8 m²" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
