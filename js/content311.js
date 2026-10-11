/* SOL Labyrinth — Geometry game (family GEO), G.TR.1 (Virginia 2023 Geometry SOL): triangle side and angle
   relationships, the triangle inequality, the angle sum and the exterior angle theorem. Modes: rocks (space, science
   and weather) and sky (travel and getting around). Original items only. Every numeric answer and every distractor was
   computed (each distractor is a named mistake), and every figure coordinate was computed. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-tr1-rocks-summer-triangle",
      family: "GEO",
      mode: "rocks",
      title: "The Summer Triangle",
      kind: "Triangles · G.TR.1",
      blurb: "Vega, Deneb and Altair on a classroom star chart.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Star chart: the stars V (Vega), D (Deneb) and A (Altair) joined by dashed lines into triangle VDA, with VD 6 cm, VA 8.5 cm and DA 9.6 cm\"><circle class=\"dt\" cx=\"40\" cy=\"30\" r=\"1.2\"/><circle class=\"dt\" cx=\"62\" cy=\"120\" r=\"1.2\"/><circle class=\"dt\" cx=\"286\" cy=\"60\" r=\"1.2\"/><circle class=\"dt\" cx=\"268\" cy=\"140\" r=\"1.2\"/><circle class=\"dt\" cx=\"150\" cy=\"150\" r=\"1.2\"/><circle class=\"dt\" cx=\"30\" cy=\"84\" r=\"1.2\"/><polygon class=\"ln dash\" points=\"212,26 135.2,39.5 213.8,136.5\"/><circle class=\"thin\" cx=\"212\" cy=\"26\" r=\"6\"/><circle class=\"dt\" cx=\"212\" cy=\"26\" r=\"3\"/><circle class=\"thin\" cx=\"135.2\" cy=\"39.5\" r=\"6\"/><circle class=\"dt\" cx=\"135.2\" cy=\"39.5\" r=\"3\"/><circle class=\"thin\" cx=\"213.8\" cy=\"136.5\" r=\"6\"/><circle class=\"dt\" cx=\"213.8\" cy=\"136.5\" r=\"3\"/><text x=\"220.8\" y=\"16.8\" text-anchor=\"middle\">V</text><text class=\"sm\" x=\"246\" y=\"34.2\" text-anchor=\"middle\">Vega</text><text x=\"119.2\" y=\"38.8\" text-anchor=\"middle\">D</text><text class=\"sm\" x=\"113.2\" y=\"56.7\" text-anchor=\"middle\">Deneb</text><text x=\"229.8\" y=\"145.8\" text-anchor=\"middle\">A</text><text class=\"sm\" x=\"235.8\" y=\"160.7\" text-anchor=\"middle\">Altair</text><text x=\"171.3\" y=\"25.3\" text-anchor=\"middle\">6 cm</text><text x=\"242.9\" y=\"86.1\" text-anchor=\"middle\">8.5 cm</text><text x=\"151.2\" y=\"112.2\" text-anchor=\"middle\">9.6 cm</text></svg></figure><p class=\"geo-given\">On a star chart, the bright stars <strong>V</strong> (Vega), <strong>D</strong> (Deneb) and <strong>A</strong> (Altair) form the Summer Triangle. The chart distances are VD = 6 cm, VA = 8.5 cm and DA = 9.6 cm.</p>",
      claims: [
        {
          id: "largest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Using only the chart distances, which angle of △VDA has the greatest measure?",
          choices: [
            { letter: "A", text: "∠D" },
            { letter: "B", text: "∠A" },
            { letter: "C", text: "You cannot tell without a protractor." },
            { letter: "D", text: "∠V" }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Using only the chart distances, which statement about the angles must be true?",
          choices: [
            { letter: "A", text: "m∠A is greater than m∠D." },
            { letter: "B", text: "m∠D is greater than m∠A." },
            { letter: "C", text: "m∠A is greater than m∠V." },
            { letter: "D", text: "m∠D is greater than m∠V." }
          ],
          correct: "B"
        },
        {
          id: "third",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "A student measures m∠V ≈ 81° and m∠D ≈ 61° on the chart. Using these readings, what is m∠A?",
          choices: [
            { letter: "A", text: "142°" },
            { letter: "B", text: "119°" },
            { letter: "C", text: "38°" },
            { letter: "D", text: "99°" }
          ],
          correct: "C"
        },
        {
          id: "albireo",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A fourth star, Albireo, is 5 cm from Vega on the chart. Albireo is not on line VA. Which could be its chart distance from Altair?",
          choices: [
            { letter: "A", text: "10 cm" },
            { letter: "B", text: "3.5 cm" },
            { letter: "C", text: "13.5 cm" },
            { letter: "D", text: "14.6 cm" }
          ],
          correct: "A"
        },
        {
          id: "notform",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Which three chart lengths could NOT be the sides of a triangle?",
          choices: [
            { letter: "A", text: "6 cm, 8.5 cm, 9.6 cm" },
            { letter: "B", text: "4 cm, 4 cm, 7 cm" },
            { letter: "C", text: "3 cm, 5.5 cm, 8.5 cm" },
            { letter: "D", text: "2 cm, 9 cm, 10 cm" }
          ],
          correct: "C"
        },
        {
          id: "vertex",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Three other stars form an isosceles triangle on the chart. Its two base angles are each 46°. What is its vertex angle?",
          choices: [
            { letter: "A", text: "134°" },
            { letter: "B", text: "46°" },
            { letter: "C", text: "92°" },
            { letter: "D", text: "88°" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr1-rocks-rocket-fin",
      family: "GEO",
      mode: "rocks",
      title: "The Rocket Fin",
      kind: "Triangles · G.TR.1",
      blurb: "A swept-back fin on a model rocket.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Side view of a model rocket: a fin, triangle FGH, sits on the body with edge FG along the body; the body line continues past G to K\"><rect class=\"thin\" x=\"88\" y=\"26\" width=\"30\" height=\"136\"/><path class=\"thin\" d=\"M88 26 L103 4 L118 26\"/><text class=\"sm\" x=\"55\" y=\"64.2\" text-anchor=\"middle\">rocket</text><text class=\"sm\" x=\"55\" y=\"78.2\" text-anchor=\"middle\">body</text><polygon class=\"sh\" points=\"118,30 118,118 187.5,150.4\"/><line class=\"ln\" x1=\"118\" y1=\"118\" x2=\"118\" y2=\"162\"/><path class=\"thin\" d=\"M118 54 A24 24 0 0 0 130 50.8\"/><text class=\"sm\" x=\"129.9\" y=\"78.6\" text-anchor=\"middle\">30°</text><path class=\"thin\" d=\"M118 106 A12 12 0 0 1 128.9 123.1\"/><text class=\"sm\" x=\"138.2\" y=\"109.3\" text-anchor=\"middle\">115°</text><circle class=\"dt\" cx=\"118\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"118\" cy=\"118\" r=\"3\"/><circle class=\"dt\" cx=\"187.5\" cy=\"150.4\" r=\"3\"/><circle class=\"dt\" cx=\"118\" cy=\"162\" r=\"3\"/><text x=\"131\" y=\"27.3\" text-anchor=\"middle\">F</text><text x=\"105\" y=\"125.3\" text-anchor=\"middle\">G</text><text x=\"201.5\" y=\"151.7\" text-anchor=\"middle\">H</text><text x=\"131\" y=\"165.3\" text-anchor=\"middle\">K</text></svg></figure><p class=\"geo-given\">A model rocket fin is the triangle <strong>FGH</strong>. Its edge FG lies along the rocket's body, and the body line continues straight past G to <strong>K</strong>. m∠GFH = 30° and m∠FGH = 115°.</p>",
      claims: [
        {
          id: "tip",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠FHG, the angle at the tip of the fin?",
          choices: [
            { letter: "A", text: "35°" },
            { letter: "B", text: "65°" },
            { letter: "C", text: "145°" },
            { letter: "D", text: "150°" }
          ],
          correct: "A"
        },
        {
          id: "outside",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠HGK, the angle between the fin edge GH and the body below G?",
          choices: [
            { letter: "A", text: "115°" },
            { letter: "B", text: "65°" },
            { letter: "C", text: "35°" },
            { letter: "D", text: "145°" }
          ],
          correct: "B"
        },
        {
          id: "theorem",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Which equation is true for this fin?",
          choices: [
            { letter: "A", text: "m∠HGK = m∠GFH + m∠FGH" },
            { letter: "B", text: "m∠HGK + m∠FHG = 180°" },
            { letter: "C", text: "m∠HGK = m∠FGH − m∠GFH" },
            { letter: "D", text: "m∠HGK = m∠GFH + m∠FHG" }
          ],
          correct: "D"
        },
        {
          id: "longest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which edge of the fin is the longest?",
          choices: [
            { letter: "A", text: "FH" },
            { letter: "B", text: "FG" },
            { letter: "C", text: "GH" },
            { letter: "D", text: "FG and GH are the same length" }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the edges of the fin from shortest to longest?",
          choices: [
            { letter: "A", text: "FH, FG, GH" },
            { letter: "B", text: "GH, FG, FH" },
            { letter: "C", text: "FG, GH, FH" },
            { letter: "D", text: "GH, FH, FG" }
          ],
          correct: "B"
        },
        {
          id: "strips",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "The club cuts fins from balsa strips. Which three strip lengths can form a triangle?",
          choices: [
            { letter: "A", text: "3 cm, 5 cm, 9 cm" },
            { letter: "B", text: "4 cm, 6 cm, 10 cm" },
            { letter: "C", text: "4 cm, 7 cm, 10 cm" },
            { letter: "D", text: "2 cm, 2 cm, 5 cm" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr1-rocks-satellite",
      family: "GEO",
      mode: "rocks",
      title: "Tracking a Satellite",
      kind: "Triangles · G.TR.1",
      blurb: "Two ground stations, one satellite and three angles written with x.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Ground stations G and H on a level ground line that continues past H to K; a satellite S high above and to the right of H; segments GS and HS\"><line class=\"thin\" x1=\"14\" y1=\"146\" x2=\"306\" y2=\"146\"/><line class=\"ln\" x1=\"30\" y1=\"146\" x2=\"150\" y2=\"12.7\"/><line class=\"ln\" x1=\"136\" y1=\"146\" x2=\"150\" y2=\"12.7\"/><line class=\"ln\" x1=\"30\" y1=\"146\" x2=\"250\" y2=\"146\"/><rect class=\"thin\" x=\"158\" y=\"8.7\" width=\"18\" height=\"8\"/><rect class=\"thin\" x=\"124\" y=\"8.7\" width=\"18\" height=\"8\"/><path class=\"thin\" d=\"M52 146 A22 22 0 0 0 44.7 129.7\"/><text class=\"sm\" x=\"86\" y=\"140.2\" text-anchor=\"middle\">(2x − 20)°</text><path class=\"thin\" d=\"M122 146 A14 14 0 0 1 137.5 132.1\"/><text class=\"sm\" x=\"104\" y=\"116.2\" text-anchor=\"middle\">(3x − 6)°</text><path class=\"thin\" d=\"M133.9 30.6 A24 24 0 0 0 147.5 36.6\"/><text class=\"sm\" x=\"119.1\" y=\"86.3\" text-anchor=\"middle\">(x + 2)°</text><path class=\"ac\" d=\"M156 146 A20 20 0 0 0 138.1 126.1\"/><circle class=\"dt\" cx=\"30\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"136\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"250\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"150\" cy=\"12.7\" r=\"3\"/><text x=\"26\" y=\"166.3\" text-anchor=\"middle\">G</text><text x=\"136\" y=\"166.3\" text-anchor=\"middle\">H</text><text x=\"250\" y=\"166.3\" text-anchor=\"middle\">K</text><text x=\"165\" y=\"34\" text-anchor=\"middle\">S</text></svg></figure><p class=\"geo-given\">Ground stations <strong>G</strong> and <strong>H</strong> track a satellite <strong>S</strong>. The ground line GH continues straight past H to <strong>K</strong>. m∠SGH = (2x − 20)°, m∠GHS = (3x − 6)° and m∠GSH = (x + 2)°.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Which equation can be used to find x?",
          choices: [
            { letter: "A", text: "(x + 2) + (2x − 20) = 3x − 6" },
            { letter: "B", text: "(x + 2) + (2x − 20) + (3x − 6) = 360" },
            { letter: "C", text: "(2x − 20) + (3x − 6) = 180" },
            { letter: "D", text: "(x + 2) + (2x − 20) + (3x − 6) = 180" }
          ],
          correct: "D"
        },
        {
          id: "angH",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠GHS, the angle inside the triangle at station H?",
          choices: [
            { letter: "A", text: "34°" },
            { letter: "B", text: "96°" },
            { letter: "C", text: "84°" },
            { letter: "D", text: "36°" }
          ],
          correct: "B"
        },
        {
          id: "elev",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Station H measures m∠SHK, the angle from the ground ray HK up to the satellite. What is m∠SHK?",
          choices: [
            { letter: "A", text: "96°" },
            { letter: "B", text: "48°" },
            { letter: "C", text: "84°" },
            { letter: "D", text: "132°" }
          ],
          correct: "C"
        },
        {
          id: "farthest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which of the three distances GH, HS and GS is the longest?",
          choices: [
            { letter: "A", text: "GS" },
            { letter: "B", text: "HS" },
            { letter: "C", text: "GH" },
            { letter: "D", text: "HS and GS are equal" }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders GH, HS and GS from shortest to longest?",
          choices: [
            { letter: "A", text: "GS, HS, GH" },
            { letter: "B", text: "HS, GH, GS" },
            { letter: "C", text: "GH, HS, GS" },
            { letter: "D", text: "GH, GS, HS" }
          ],
          correct: "C"
        },
        {
          id: "nottrue",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement about △GHS is NOT true?",
          choices: [
            { letter: "A", text: "∠GSH is the smallest angle of △GHS." },
            { letter: "B", text: "GS is shorter than HS." },
            { letter: "C", text: "HS is longer than GH." },
            { letter: "D", text: "m∠SHK = m∠SGH + m∠GSH" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr1-rocks-lab-truss",
      family: "GEO",
      mode: "rocks",
      title: "The Lab Truss",
      kind: "Triangles · G.TR.1",
      blurb: "An isosceles truss and a strut in a bridge-strength lab.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Lab truss: triangle ABC with base AB on a test bench, tick marks showing CA and CB congruent, and a strut from the top C down to D on AB\"><line class=\"thin\" x1=\"24\" y1=\"150\" x2=\"296\" y2=\"150\"/><text class=\"sm\" x=\"262\" y=\"164.2\" text-anchor=\"middle\">test bench</text><line class=\"thin\" x1=\"46\" y1=\"128\" x2=\"46\" y2=\"150\"/><line class=\"thin\" x1=\"274\" y1=\"128\" x2=\"274\" y2=\"150\"/><polygon class=\"ln\" points=\"46,128 274,128 160,35.7\"/><line class=\"ac\" x1=\"160\" y1=\"35.7\" x2=\"150.3\" y2=\"128\"/><line class=\"thin\" x1=\"99.2\" y1=\"77.2\" x2=\"106.8\" y2=\"86.5\"/><line class=\"thin\" x1=\"213.2\" y1=\"86.5\" x2=\"220.8\" y2=\"77.2\"/><path class=\"thin\" d=\"M68 128 A22 22 0 0 0 63.1 114.2\"/><text x=\"83.7\" y=\"119.9\" text-anchor=\"middle\">39°</text><path class=\"thin\" d=\"M142.9 49.5 A22 22 0 0 0 157.7 57.6\"/><text class=\"sm\" x=\"140\" y=\"76.8\" text-anchor=\"middle\">45°</text><circle class=\"dt\" cx=\"46\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"274\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"35.7\" r=\"3\"/><circle class=\"dt\" cx=\"150.3\" cy=\"128\" r=\"3\"/><text x=\"33\" y=\"136.3\" text-anchor=\"middle\">A</text><text x=\"287\" y=\"136.3\" text-anchor=\"middle\">B</text><text x=\"160\" y=\"28\" text-anchor=\"middle\">C</text><text x=\"150.3\" y=\"146.3\" text-anchor=\"middle\">D</text></svg></figure><p class=\"geo-given\">A truss for a bridge-strength lab is the triangle <strong>ABC</strong>, with CA ≅ CB. A strut runs from C to <strong>D</strong> on the base AB. m∠CAB = 39° and m∠ACD = 45°.</p>",
      claims: [
        {
          id: "apex",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ACB, the angle at the top of the truss?",
          choices: [
            { letter: "A", text: "141°" },
            { letter: "B", text: "78°" },
            { letter: "C", text: "45°" },
            { letter: "D", text: "102°" }
          ],
          correct: "D"
        },
        {
          id: "cdb",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠CDB, the angle between the strut and DB?",
          choices: [
            { letter: "A", text: "84°" },
            { letter: "B", text: "96°" },
            { letter: "C", text: "57°" },
            { letter: "D", text: "78°" }
          ],
          correct: "A"
        },
        {
          id: "orderBCD",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "In △BCD, which list orders the sides from shortest to longest?",
          choices: [
            { letter: "A", text: "BC, BD, CD" },
            { letter: "B", text: "BD, CD, BC" },
            { letter: "C", text: "CD, BD, BC" },
            { letter: "D", text: "CD, BC, BD" }
          ],
          correct: "C"
        },
        {
          id: "truestmt",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement about the truss is true?",
          choices: [
            { letter: "A", text: "AD is the longest side of △ACD." },
            { letter: "B", text: "CD is the shortest side of △ACD." },
            { letter: "C", text: "CD is longer than BC." },
            { letter: "D", text: "AC is shorter than AD." }
          ],
          correct: "B"
        },
        {
          id: "member",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A student builds another truss triangle with members of 14 cm and 23 cm. What is the shortest whole-number length the third member can have?",
          choices: [
            { letter: "A", text: "9 cm" },
            { letter: "B", text: "37 cm" },
            { letter: "C", text: "36 cm" },
            { letter: "D", text: "10 cm" }
          ],
          correct: "D"
        },
        {
          id: "moved",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Suppose the strut is moved so that m∠ACD = 51°, and the base angles stay 39°. What is m∠CDB then?",
          choices: [
            { letter: "A", text: "90°" },
            { letter: "B", text: "84°" },
            { letter: "C", text: "12°" },
            { letter: "D", text: "129°" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr1-rocks-weather-stations",
      family: "GEO",
      mode: "rocks",
      title: "Weather Stations and a Storm",
      kind: "Triangles · G.TR.1",
      blurb: "Three stations, three distances and a lightning report.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Map of weather stations P, Q and R joined by straight lines: PQ 20 km, QR 16 km, PR 13 km\"><polygon class=\"ln\" points=\"40,132 223.9,92.9 91.7,21.3\"/><path class=\"thin\" d=\"M34 134 L40 122 L46 134\"/><circle class=\"dt\" cx=\"40\" cy=\"132\" r=\"3\"/><path class=\"thin\" d=\"M217.9 94.9 L223.9 82.9 L229.9 94.9\"/><circle class=\"dt\" cx=\"223.9\" cy=\"92.9\" r=\"3\"/><path class=\"thin\" d=\"M85.7 23.3 L91.7 11.3 L97.7 23.3\"/><circle class=\"dt\" cx=\"91.7\" cy=\"21.3\" r=\"3\"/><text x=\"36\" y=\"153.3\" text-anchor=\"middle\">P</text><text x=\"237.9\" y=\"102.2\" text-anchor=\"middle\">Q</text><text x=\"75.7\" y=\"22.6\" text-anchor=\"middle\">R</text><text x=\"134.9\" y=\"131.5\" text-anchor=\"middle\">20 km</text><text x=\"168.3\" y=\"43\" text-anchor=\"middle\">16 km</text><text x=\"44.1\" y=\"71.8\" text-anchor=\"middle\">13 km</text><path class=\"thin\" d=\"M244 30 a10 10 0 0 1 18 -6 a12 12 0 0 1 22 4 a8 8 0 0 1 2 15 h-40 a7 7 0 0 1 -2 -13 z\"/><path class=\"thin\" d=\"M262 46 l-5 10 h7 l-5 11\"/><text class=\"sm\" x=\"268\" y=\"88.2\" text-anchor=\"middle\">storm</text></svg></figure><p class=\"geo-given\">Weather stations <strong>P</strong>, <strong>Q</strong> and <strong>R</strong> track storms. The straight-line distances are PQ = 20 km, QR = 16 km and PR = 13 km.</p>",
      claims: [
        {
          id: "largest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which angle of △PQR is the largest?",
          choices: [
            { letter: "A", text: "∠P" },
            { letter: "B", text: "∠R" },
            { letter: "C", text: "∠Q" },
            { letter: "D", text: "You cannot tell without a protractor." }
          ],
          correct: "B"
        },
        {
          id: "strike",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A lightning strike is not on line PQ. Which pair of distances, from P and from Q, could the two stations report?",
          choices: [
            { letter: "A", text: "12 km from P and 9 km from Q" },
            { letter: "B", text: "6 km from P and 13 km from Q" },
            { letter: "C", text: "5 km from P and 26 km from Q" },
            { letter: "D", text: "10 km from P and 10 km from Q" }
          ],
          correct: "A"
        },
        {
          id: "newT",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A new station T will be 7 km from P. T, P and Q will not lie on one line. Which inequality gives all possible distances d from T to Q, in km?",
          choices: [
            { letter: "A", text: "0 < d < 27" },
            { letter: "B", text: "7 < d < 20" },
            { letter: "C", text: "13 < d < 27" },
            { letter: "D", text: "13 < d < 20" }
          ],
          correct: "C"
        },
        {
          id: "stationU",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Another station U is planned with PU = (x + 5) km and QU = (2x − 3) km, so that P, Q and U form a triangle. Which inequality gives all possible values of x?",
          choices: [
            { letter: "A", text: "x > 6" },
            { letter: "B", text: "x < 28" },
            { letter: "C", text: "−12 < x < 28" },
            { letter: "D", text: "6 < x < 28" }
          ],
          correct: "D"
        },
        {
          id: "angR",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "A forecaster measures m∠P ≈ 53° and m∠Q ≈ 40°. Using these, what is m∠R?",
          choices: [
            { letter: "A", text: "93°" },
            { letter: "B", text: "127°" },
            { letter: "C", text: "87°" },
            { letter: "D", text: "140°" }
          ],
          correct: "C"
        },
        {
          id: "orderAng",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the angles of △PQR from smallest to largest?",
          choices: [
            { letter: "A", text: "∠R, ∠P, ∠Q" },
            { letter: "B", text: "∠P, ∠Q, ∠R" },
            { letter: "C", text: "∠Q, ∠R, ∠P" },
            { letter: "D", text: "∠Q, ∠P, ∠R" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr1-rocks-volcano",
      family: "GEO",
      mode: "rocks",
      title: "The Volcano Cross Section",
      kind: "Triangles · G.TR.1",
      blurb: "A summit angle, an exterior angle and a lava tube.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 158\" role=\"img\" aria-label=\"Cross section of a volcano: triangle WSE with summit S, a ground line from W through E continuing to F, and a lava tube from S down to V on WE\"><line class=\"thin\" x1=\"10\" y1=\"132\" x2=\"310\" y2=\"132\"/><polygon class=\"sh\" points=\"22,132 131.8,52.3 250,132\"/><line class=\"ln\" x1=\"250\" y1=\"132\" x2=\"302\" y2=\"132\"/><line class=\"ac dash\" x1=\"131.8\" y1=\"52.3\" x2=\"145.8\" y2=\"132\"/><path class=\"thin\" d=\"M46 132 A24 24 0 0 0 41.4 117.9\"/><text class=\"sm\" x=\"75.3\" y=\"118.9\" text-anchor=\"middle\">(2x − 4)°</text><path class=\"thin\" d=\"M120.4 60.5 A14 14 0 0 0 143.4 60.1\"/><text class=\"sm\" x=\"103.8\" y=\"104.5\" text-anchor=\"middle\">(5x + 10)°</text><path class=\"thin\" d=\"M266 132 A16 16 0 0 0 236.7 123.1\"/><text class=\"sm\" x=\"280\" y=\"114.2\" text-anchor=\"middle\">(8x − 14)°</text><path class=\"thin\" d=\"M131.8 132 A14 14 0 0 1 143.4 118.2\"/><text class=\"sm\" x=\"125.9\" y=\"119.5\" text-anchor=\"middle\">80°</text><circle class=\"dt\" cx=\"22\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"131.8\" cy=\"52.3\" r=\"3\"/><circle class=\"dt\" cx=\"250\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"302\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"145.8\" cy=\"132\" r=\"3\"/><text x=\"22\" y=\"152.3\" text-anchor=\"middle\">W</text><text x=\"131.8\" y=\"44.6\" text-anchor=\"middle\">S</text><text x=\"250\" y=\"152.3\" text-anchor=\"middle\">E</text><text x=\"300\" y=\"152.3\" text-anchor=\"middle\">F</text><text x=\"145.8\" y=\"152.3\" text-anchor=\"middle\">V</text></svg></figure><p class=\"geo-given\">A cross section of a volcano is the triangle <strong>WSE</strong>, with summit <strong>S</strong>. The ground line WE continues straight past E to <strong>F</strong>. m∠SWE = (2x − 4)°, m∠WSE = (5x + 10)° and m∠SEF = (8x − 14)°. A lava tube runs straight from S to <strong>V</strong> on WE, with m∠SVW = 80°.</p>",
      claims: [
        {
          id: "sef",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠SEF?",
          choices: [
            { letter: "A", text: "20°" },
            { letter: "B", text: "146°" },
            { letter: "C", text: "34°" },
            { letter: "D", text: "110°" }
          ],
          correct: "B"
        },
        {
          id: "summit",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠WSE, the angle at the summit?",
          choices: [
            { letter: "A", text: "110°" },
            { letter: "B", text: "20°" },
            { letter: "C", text: "70°" },
            { letter: "D", text: "90°" }
          ],
          correct: "A"
        },
        {
          id: "slopes",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders SW, SE and WE from shortest to longest?",
          choices: [
            { letter: "A", text: "SE, SW, WE" },
            { letter: "B", text: "WE, SE, SW" },
            { letter: "C", text: "SW, WE, SE" },
            { letter: "D", text: "SW, SE, WE" }
          ],
          correct: "D"
        },
        {
          id: "vse",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠VSE, the angle between the lava tube and the slope SE?",
          choices: [
            { letter: "A", text: "100°" },
            { letter: "B", text: "46°" },
            { letter: "C", text: "64°" },
            { letter: "D", text: "114°" }
          ],
          correct: "B"
        },
        {
          id: "shortest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which of the segments SV, SW and SE is the shortest?",
          choices: [
            { letter: "A", text: "SV" },
            { letter: "B", text: "SW" },
            { letter: "C", text: "SE" },
            { letter: "D", text: "SV and SW are the same length" }
          ],
          correct: "A"
        },
        {
          id: "otherVolcano",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Another volcano's cross section is a triangle with slopes of 4 km and 6 km and a base of (3n − 2) km. Which inequality gives all possible values of n?",
          choices: [
            { letter: "A", text: "2 < n < 10" },
            { letter: "B", text: "n < 4" },
            { letter: "C", text: "4/3 < n < 4" },
            { letter: "D", text: "0 < n < 8/3" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr1-rocks-laser-mirror",
      family: "GEO",
      mode: "rocks",
      title: "The Laser and the Mirror",
      kind: "Triangles · G.TR.1",
      blurb: "A reflected beam makes an isosceles triangle.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Laser lab: source S and detector D at the top, a flat mirror at M below; beams SM and MD with tick marks showing them congruent; line SD continues past D to a screen at E\"><line class=\"ln\" x1=\"75\" y1=\"137.7\" x2=\"215\" y2=\"137.7\"/><line class=\"thin\" x1=\"83\" y1=\"139.7\" x2=\"75\" y2=\"149.7\"/><line class=\"thin\" x1=\"101\" y1=\"139.7\" x2=\"93\" y2=\"149.7\"/><line class=\"thin\" x1=\"119\" y1=\"139.7\" x2=\"111\" y2=\"149.7\"/><line class=\"thin\" x1=\"137\" y1=\"139.7\" x2=\"129\" y2=\"149.7\"/><line class=\"thin\" x1=\"155\" y1=\"139.7\" x2=\"147\" y2=\"149.7\"/><line class=\"thin\" x1=\"173\" y1=\"139.7\" x2=\"165\" y2=\"149.7\"/><line class=\"thin\" x1=\"191\" y1=\"139.7\" x2=\"183\" y2=\"149.7\"/><line class=\"thin\" x1=\"209\" y1=\"139.7\" x2=\"201\" y2=\"149.7\"/><text class=\"sm\" x=\"241\" y=\"143.9\" text-anchor=\"middle\">mirror</text><line class=\"ln\" x1=\"64\" y1=\"34\" x2=\"226\" y2=\"34\"/><line class=\"ln\" x1=\"226\" y1=\"34\" x2=\"300\" y2=\"34\"/><line class=\"ac\" x1=\"64\" y1=\"34\" x2=\"145\" y2=\"137.7\"/><line class=\"ac\" x1=\"145\" y1=\"137.7\" x2=\"226\" y2=\"34\"/><rect class=\"thin\" x=\"34\" y=\"26\" width=\"22\" height=\"16\"/><text class=\"sm\" x=\"45\" y=\"60.2\" text-anchor=\"middle\">laser</text><line class=\"ln\" x1=\"300\" y1=\"16\" x2=\"300\" y2=\"52\"/><text class=\"sm\" x=\"286\" y=\"66.2\" text-anchor=\"middle\">screen</text><line class=\"thin\" x1=\"99.8\" y1=\"89.5\" x2=\"109.2\" y2=\"82.1\"/><line class=\"thin\" x1=\"190.2\" y1=\"89.5\" x2=\"180.8\" y2=\"82.1\"/><path class=\"thin\" d=\"M135.1 125.1 A16 16 0 0 1 154.9 125.1\"/><text class=\"sm\" x=\"145\" y=\"95.9\" text-anchor=\"middle\">(4x + 4)°</text><path class=\"thin\" d=\"M86 34 A22 22 0 0 1 77.5 51.3\"/><text class=\"sm\" x=\"112.5\" y=\"61.9\" text-anchor=\"middle\">(3x − 2)°</text><circle class=\"dt\" cx=\"64\" cy=\"34\" r=\"3\"/><circle class=\"dt\" cx=\"226\" cy=\"34\" r=\"3\"/><circle class=\"dt\" cx=\"145\" cy=\"137.7\" r=\"3\"/><circle class=\"dt\" cx=\"300\" cy=\"34\" r=\"3\"/><text x=\"66\" y=\"25.3\" text-anchor=\"middle\">S</text><text x=\"226\" y=\"25.3\" text-anchor=\"middle\">D</text><text x=\"121\" y=\"133\" text-anchor=\"middle\">M</text><text x=\"288\" y=\"25.3\" text-anchor=\"middle\">E</text></svg></figure><p class=\"geo-given\">In a lab, a laser beam goes from the source <strong>S</strong> to a flat mirror at <strong>M</strong> and reflects to the detector <strong>D</strong>, so SM ≅ MD. The straight line SD continues past D to a screen at <strong>E</strong>. m∠SMD = (4x + 4)° and m∠MSD = (3x − 2)°.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Which equation models the angles of △SMD?",
          choices: [
            { letter: "A", text: "(4x + 4) + 2(3x − 2) = 180" },
            { letter: "B", text: "(4x + 4) + (3x − 2) = 180" },
            { letter: "C", text: "4x + 4 = 3x − 2" },
            { letter: "D", text: "(4x + 4) + 2(3x − 2) = 360" }
          ],
          correct: "A"
        },
        {
          id: "apex",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠SMD, the angle between the two beams at the mirror?",
          choices: [
            { letter: "A", text: "18°" },
            { letter: "B", text: "76°" },
            { letter: "C", text: "52°" },
            { letter: "D", text: "104°" }
          ],
          correct: "B"
        },
        {
          id: "mde",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠MDE?",
          choices: [
            { letter: "A", text: "52°" },
            { letter: "B", text: "76°" },
            { letter: "C", text: "128°" },
            { letter: "D", text: "104°" }
          ],
          correct: "C"
        },
        {
          id: "beams",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement about the lengths is true?",
          choices: [
            { letter: "A", text: "SM is longer than SD." },
            { letter: "B", text: "SD is shorter than MD." },
            { letter: "C", text: "All three are the same length." },
            { letter: "D", text: "SD is longer than SM." }
          ],
          correct: "D"
        },
        {
          id: "sixty",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "The mirror is turned so that m∠SMD = 60°, and SM and MD stay equal. Which describes △SMD then?",
          choices: [
            { letter: "A", text: "Isosceles only: each base angle is 30°" },
            { letter: "B", text: "Right: the base angles are 90° and 30°" },
            { letter: "C", text: "Equilateral: each base angle is also 60°" },
            { letter: "D", text: "Isosceles only: each base angle is 120°" }
          ],
          correct: "C"
        },
        {
          id: "newSetup",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "In a new setup, SM = MD = (y + 4) cm and SD = 30 cm. Which inequality gives all possible values of y?",
          choices: [
            { letter: "A", text: "y > 13" },
            { letter: "B", text: "y > 11" },
            { letter: "C", text: "y > 26" },
            { letter: "D", text: "y < 11" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr1-sky-three-airports",
      family: "GEO",
      mode: "sky",
      title: "Three Airports",
      kind: "Triangles · G.TR.1",
      blurb: "Flight legs join three airports, and one route flies on.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Route map: airports F, G and H joined by straight flight legs, with the leg from G to H continuing straight on to airport K; a north arrow\"><polygon class=\"ln\" points=\"142.8,20.8 34,146 196,146\"/><line class=\"ln\" x1=\"196\" y1=\"146\" x2=\"292\" y2=\"146\"/><path class=\"thin\" d=\"M131 34.4 A18 18 0 0 0 149.9 37.4\"/><text x=\"137.5\" y=\"59.7\" text-anchor=\"middle\">64°</text><path class=\"thin\" d=\"M58 146 A24 24 0 0 0 49.7 127.9\"/><text x=\"75.9\" y=\"132.2\" text-anchor=\"middle\">49°</text><circle class=\"thin\" cx=\"142.8\" cy=\"20.8\" r=\"6\"/><circle class=\"dt\" cx=\"142.8\" cy=\"20.8\" r=\"3\"/><circle class=\"thin\" cx=\"34\" cy=\"146\" r=\"6\"/><circle class=\"dt\" cx=\"34\" cy=\"146\" r=\"3\"/><circle class=\"thin\" cx=\"196\" cy=\"146\" r=\"6\"/><circle class=\"dt\" cx=\"196\" cy=\"146\" r=\"3\"/><circle class=\"thin\" cx=\"292\" cy=\"146\" r=\"6\"/><circle class=\"dt\" cx=\"292\" cy=\"146\" r=\"3\"/><text x=\"126.8\" y=\"23.1\" text-anchor=\"middle\">F</text><text x=\"34\" y=\"136.3\" text-anchor=\"middle\">G</text><text x=\"198\" y=\"167.3\" text-anchor=\"middle\">H</text><text x=\"292\" y=\"136.3\" text-anchor=\"middle\">K</text><line class=\"thin\" x1=\"290\" y1=\"52\" x2=\"290\" y2=\"22\"/><path class=\"thin\" d=\"M293.6 26 L290 20 L286.4 26\"/><text class=\"sm\" x=\"290\" y=\"66.2\" text-anchor=\"middle\">N</text></svg></figure><p class=\"geo-given\">Flights join the airports <strong>F</strong>, <strong>G</strong> and <strong>H</strong> in straight legs. On the route map, m∠GFH = 64° and m∠FGH = 49°. The leg from G to H continues straight on to airport <strong>K</strong>.</p>",
      claims: [
        {
          id: "angH",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠FHG, the angle at airport H inside the triangle?",
          choices: [
            { letter: "A", text: "67°" },
            { letter: "B", text: "113°" },
            { letter: "C", text: "116°" },
            { letter: "D", text: "131°" }
          ],
          correct: "A"
        },
        {
          id: "fhk",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠FHK, the angle between leg HF and the route on to K?",
          choices: [
            { letter: "A", text: "67°" },
            { letter: "B", text: "131°" },
            { letter: "C", text: "116°" },
            { letter: "D", text: "113°" }
          ],
          correct: "D"
        },
        {
          id: "longest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which flight leg of the triangle is the longest?",
          choices: [
            { letter: "A", text: "GH" },
            { letter: "B", text: "FH" },
            { letter: "C", text: "FG" },
            { letter: "D", text: "FH and GH are the same length" }
          ],
          correct: "C"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the three legs from shortest to longest?",
          choices: [
            { letter: "A", text: "FG, GH, FH" },
            { letter: "B", text: "FH, GH, FG" },
            { letter: "C", text: "GH, FH, FG" },
            { letter: "D", text: "FH, FG, GH" }
          ],
          correct: "B"
        },
        {
          id: "detour",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "The direct flight from F to G is 380 mi. A traveler instead flies from F to airport X, then from X to G. X is not on the straight route FG. Which could be the total distance of the two legs?",
          choices: [
            { letter: "A", text: "455 mi" },
            { letter: "B", text: "380 mi" },
            { letter: "C", text: "350 mi" },
            { letter: "D", text: "190 mi" }
          ],
          correct: "A"
        },
        {
          id: "legs",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Which three flight legs could form a triangle of routes?",
          choices: [
            { letter: "A", text: "210 mi, 340 mi, 600 mi" },
            { letter: "B", text: "420 mi, 180 mi, 250 mi" },
            { letter: "C", text: "150 mi, 150 mi, 300 mi" },
            { letter: "D", text: "90 mi, 500 mi, 400 mi" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr1-sky-footbridge-truss",
      family: "GEO",
      mode: "sky",
      title: "The Footbridge Truss",
      kind: "Triangles · G.TR.1",
      blurb: "Two equal members and a post over a creek.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Footbridge truss: triangle ABC over the deck BC, with tick marks showing AB and AC congruent and a post AD perpendicular to the deck at its midpoint D; a creek below\"><line class=\"ln\" x1=\"14\" y1=\"124\" x2=\"306\" y2=\"124\"/><polygon class=\"ln\" points=\"160,49 40,124 280,124\"/><line class=\"ac\" x1=\"160\" y1=\"49\" x2=\"160\" y2=\"124\"/><path class=\"thin\" d=\"M169 124 L169 115 L160 115\"/><line class=\"thin\" x1=\"96.8\" y1=\"81.4\" x2=\"103.2\" y2=\"91.6\"/><line class=\"thin\" x1=\"216.8\" y1=\"91.6\" x2=\"223.2\" y2=\"81.4\"/><line class=\"thin\" x1=\"97.8\" y1=\"129\" x2=\"97.8\" y2=\"119\"/><line class=\"thin\" x1=\"102.3\" y1=\"129\" x2=\"102.3\" y2=\"119\"/><line class=\"thin\" x1=\"217.8\" y1=\"129\" x2=\"217.8\" y2=\"119\"/><line class=\"thin\" x1=\"222.3\" y1=\"129\" x2=\"222.3\" y2=\"119\"/><path class=\"thin\" d=\"M64 124 A24 24 0 0 0 60.4 111.3\"/><text x=\"84.2\" y=\"116.6\" text-anchor=\"middle\">32°</text><path class=\"thin\" d=\"M24 146 q12 -6 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0\"/><text class=\"sm\" x=\"160\" y=\"163.2\" text-anchor=\"middle\">creek</text><circle class=\"dt\" cx=\"160\" cy=\"49\" r=\"3\"/><circle class=\"dt\" cx=\"40\" cy=\"124\" r=\"3\"/><circle class=\"dt\" cx=\"280\" cy=\"124\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"124\" r=\"3\"/><text x=\"160\" y=\"41.3\" text-anchor=\"middle\">A</text><text x=\"36\" y=\"116.3\" text-anchor=\"middle\">B</text><text x=\"284\" y=\"116.3\" text-anchor=\"middle\">C</text><text x=\"172\" y=\"143.3\" text-anchor=\"middle\">D</text></svg></figure><p class=\"geo-given\">A footbridge truss is the triangle <strong>ABC</strong>, with AB ≅ AC. The post <strong>AD</strong> is perpendicular to the deck BC at its midpoint D. m∠ABC = 32°.</p>",
      claims: [
        {
          id: "angC",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ACB?",
          choices: [
            { letter: "A", text: "58°" },
            { letter: "B", text: "116°" },
            { letter: "C", text: "148°" },
            { letter: "D", text: "32°" }
          ],
          correct: "D"
        },
        {
          id: "top",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠BAC, the angle at the top of the truss?",
          choices: [
            { letter: "A", text: "148°" },
            { letter: "B", text: "64°" },
            { letter: "C", text: "116°" },
            { letter: "D", text: "58°" }
          ],
          correct: "C"
        },
        {
          id: "bad",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠BAD, the angle between member AB and the post?",
          choices: [
            { letter: "A", text: "116°" },
            { letter: "B", text: "58°" },
            { letter: "C", text: "32°" },
            { letter: "D", text: "122°" }
          ],
          correct: "B"
        },
        {
          id: "longABD",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "In △ABD, which side is the longest?",
          choices: [
            { letter: "A", text: "AD" },
            { letter: "B", text: "BD" },
            { letter: "C", text: "AD and BD are the same length" },
            { letter: "D", text: "AB" }
          ],
          correct: "D"
        },
        {
          id: "orderABD",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the sides of △ABD from shortest to longest?",
          choices: [
            { letter: "A", text: "AB, BD, AD" },
            { letter: "B", text: "BD, AD, AB" },
            { letter: "C", text: "AD, BD, AB" },
            { letter: "D", text: "AD, AB, BD" }
          ],
          correct: "C"
        },
        {
          id: "panel",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A builder has spare members of 9 ft, 9 ft and 20 ft. Can they form a triangular panel? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No, because 9 + 9 is less than 20." },
            { letter: "B", text: "Yes, because 9 + 9 is greater than 20." },
            { letter: "C", text: "Yes, because any three members make a triangle." },
            { letter: "D", text: "No, because a triangle cannot have two equal sides." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr1-sky-road-junction",
      family: "GEO",
      mode: "sky",
      title: "The Road Junction",
      kind: "Triangles · G.TR.1",
      blurb: "Three crossing roads, two outside angles and some algebra.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Three straight roads form triangle PQR; road RP continues past P to S, road PQ continues past Q to T, and road QR continues past R\"><line class=\"ln\" x1=\"174.2\" y1=\"8.5\" x2=\"72.5\" y2=\"153.9\"/><line class=\"ln\" x1=\"62\" y1=\"126\" x2=\"286\" y2=\"126\"/><line class=\"ln\" x1=\"218.1\" y1=\"147.8\" x2=\"154.9\" y2=\"12.1\"/><path class=\"ac\" d=\"M108 126 A16 16 0 0 1 82.8 139.1\"/><text class=\"sm\" x=\"110.5\" y=\"165.7\" text-anchor=\"middle\">(3x + 5)°</text><path class=\"ac\" d=\"M201.2 111.5 A16 16 0 0 1 224 126\"/><text class=\"sm\" x=\"229.5\" y=\"96.5\" text-anchor=\"middle\">(2x + 35)°</text><path class=\"thin\" d=\"M151.3 41.3 A18 18 0 0 0 169.2 42.9\"/><text class=\"sm\" x=\"157.1\" y=\"82.6\" text-anchor=\"middle\">(x + 20)°</text><circle class=\"dt\" cx=\"92\" cy=\"126\" r=\"3\"/><circle class=\"dt\" cx=\"208\" cy=\"126\" r=\"3\"/><circle class=\"dt\" cx=\"161.6\" cy=\"26.6\" r=\"3\"/><circle class=\"dt\" cx=\"72.5\" cy=\"153.9\" r=\"3\"/><circle class=\"dt\" cx=\"286\" cy=\"126\" r=\"3\"/><text x=\"78\" y=\"125.3\" text-anchor=\"middle\">P</text><text x=\"196\" y=\"146.3\" text-anchor=\"middle\">Q</text><text x=\"146.6\" y=\"29.9\" text-anchor=\"middle\">R</text><text x=\"59.5\" y=\"159.2\" text-anchor=\"middle\">S</text><text x=\"286\" y=\"117.3\" text-anchor=\"middle\">T</text></svg></figure><p class=\"geo-given\">Three straight roads meet at the junctions <strong>P</strong>, <strong>Q</strong> and <strong>R</strong>. Road RP continues past P to <strong>S</strong>, and road PQ continues past Q to <strong>T</strong>. m∠QPS = (3x + 5)°, m∠RQT = (2x + 35)° and m∠PRQ = (x + 20)°.</p>",
      claims: [
        {
          id: "x",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What value of x fits the three road angles?",
          choices: [
            { letter: "A", text: "40" },
            { letter: "B", text: "20" },
            { letter: "C", text: "28" },
            { letter: "D", text: "60" }
          ],
          correct: "A"
        },
        {
          id: "angQ",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠PQR, the angle inside the triangle at junction Q?",
          choices: [
            { letter: "A", text: "115°" },
            { letter: "B", text: "40°" },
            { letter: "C", text: "65°" },
            { letter: "D", text: "55°" }
          ],
          correct: "C"
        },
        {
          id: "theorem",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Which equation shows the Exterior Angle Theorem at junction P?",
          choices: [
            { letter: "A", text: "m∠QPS = m∠QPR + m∠PRQ" },
            { letter: "B", text: "m∠QPS + m∠RQT = 180°" },
            { letter: "C", text: "m∠QPS = m∠RQT + m∠PRQ" },
            { letter: "D", text: "m∠QPS = m∠PQR + m∠PRQ" }
          ],
          correct: "D"
        },
        {
          id: "longest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which side of triangle PQR is the longest road segment?",
          choices: [
            { letter: "A", text: "QR" },
            { letter: "B", text: "PR" },
            { letter: "C", text: "PQ" },
            { letter: "D", text: "All three are the same length" }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the sides of triangle PQR from shortest to longest?",
          choices: [
            { letter: "A", text: "QR, PQ, PR" },
            { letter: "B", text: "PR, PQ, QR" },
            { letter: "C", text: "PQ, QR, PR" },
            { letter: "D", text: "QR, PR, PQ" }
          ],
          correct: "A"
        },
        {
          id: "newJunction",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A new triangular junction will have roads of 0.8 mi and 1.3 mi. Which could be the length of the third road?",
          choices: [
            { letter: "A", text: "0.5 mi" },
            { letter: "B", text: "2.1 mi" },
            { letter: "C", text: "2.6 mi" },
            { letter: "D", text: "1.9 mi" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr1-sky-sailing-race",
      family: "GEO",
      mode: "sky",
      title: "The Sailing Race",
      kind: "Triangles · G.TR.1",
      blurb: "Two legs are set; the committee must choose the third.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Sailing course: buoys at the start S, the windward mark W and the reach mark R, joined by straight legs; SW 2.4 nmi, WR 1.6 nmi, and RS marked with a question mark; a wind arrow\"><line class=\"ln\" x1=\"46\" y1=\"140\" x2=\"100.7\" y2=\"27.8\"/><path class=\"thin\" d=\"M77.2 84.2 L76.6 77.2 L70.8 81\"/><line class=\"ln\" x1=\"100.7\" y1=\"27.8\" x2=\"142\" y2=\"100\"/><path class=\"thin\" d=\"M117.7 64.9 L123.8 68.3 L124 61.3\"/><line class=\"ln\" x1=\"142\" y1=\"100\" x2=\"46\" y2=\"140\"/><path class=\"thin\" d=\"M92.4 116.8 L88.2 122.4 L95.2 123.4\"/><circle class=\"thin\" cx=\"46\" cy=\"140\" r=\"6\"/><circle class=\"dt\" cx=\"46\" cy=\"140\" r=\"3\"/><circle class=\"thin\" cx=\"100.7\" cy=\"27.8\" r=\"6\"/><circle class=\"dt\" cx=\"100.7\" cy=\"27.8\" r=\"3\"/><circle class=\"thin\" cx=\"142\" cy=\"100\" r=\"6\"/><circle class=\"dt\" cx=\"142\" cy=\"100\" r=\"3\"/><text x=\"32\" y=\"147.3\" text-anchor=\"middle\">S</text><text x=\"100.7\" y=\"19.1\" text-anchor=\"middle\">W</text><text x=\"157\" y=\"107.3\" text-anchor=\"middle\">R</text><text x=\"44.6\" y=\"75.2\" text-anchor=\"middle\">2.4 nmi</text><text x=\"149.1\" y=\"53.4\" text-anchor=\"middle\">1.6 nmi</text><text class=\"acc\" x=\"99\" y=\"137.3\" text-anchor=\"middle\">?</text><line class=\"thin\" x1=\"262\" y1=\"22\" x2=\"262\" y2=\"62\"/><path class=\"thin\" d=\"M258.4 58 L262 64 L265.6 58\"/><text class=\"sm\" x=\"262\" y=\"80.2\" text-anchor=\"middle\">wind</text></svg></figure><p class=\"geo-given\">A sailing race goes around three marks: the start <strong>S</strong>, the windward mark <strong>W</strong> and the reach mark <strong>R</strong>. SW = 2.4 nautical miles (nmi) and WR = 1.6 nmi. The committee has not yet chosen RS. At a mark, a boat turns through the exterior angle there.</p>",
      claims: [
        {
          id: "range",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Which inequality gives all possible lengths of RS, in nautical miles?",
          choices: [
            { letter: "A", text: "0 < RS < 4" },
            { letter: "B", text: "0.8 < RS < 4" },
            { letter: "C", text: "1.6 < RS < 2.4" },
            { letter: "D", text: "0.8 < RS < 2.4" }
          ],
          correct: "B"
        },
        {
          id: "biggestW",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "The race committee wants ∠SWR to be the largest angle of the course. Which gives all possible lengths of RS, in nautical miles?",
          choices: [
            { letter: "A", text: "0.8 < RS < 2.4" },
            { letter: "B", text: "RS > 2.4" },
            { letter: "C", text: "2.4 < RS < 4" },
            { letter: "D", text: "1.6 < RS < 2.4" }
          ],
          correct: "C"
        },
        {
          id: "smallest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Suppose the committee sets RS = 2.0 nmi. Which angle of the course is then the smallest?",
          choices: [
            { letter: "A", text: "∠S" },
            { letter: "B", text: "∠W" },
            { letter: "C", text: "∠R" },
            { letter: "D", text: "∠S and ∠R are equal" }
          ],
          correct: "A"
        },
        {
          id: "turnW",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "On a different course, the angle inside the triangle is 40° at the start and 58° at the reach mark. Through what angle does a boat turn at the windward mark?",
          choices: [
            { letter: "A", text: "82°" },
            { letter: "B", text: "122°" },
            { letter: "C", text: "98°" },
            { letter: "D", text: "140°" }
          ],
          correct: "C"
        },
        {
          id: "training",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "A training course is an isosceles triangle. Its two 1.5 nmi legs meet at a 50° angle. Through what angle does a boat turn at each of the other two marks?",
          choices: [
            { letter: "A", text: "65°" },
            { letter: "B", text: "130°" },
            { letter: "C", text: "155°" },
            { letter: "D", text: "115°" }
          ],
          correct: "D"
        },
        {
          id: "tenths",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "The committee will choose RS as a length in tenths of a nautical mile, such as 1.7 nmi. How many lengths are possible?",
          choices: [
            { letter: "A", text: "32" },
            { letter: "B", text: "31" },
            { letter: "C", text: "33" },
            { letter: "D", text: "3" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr1-sky-beach-kite",
      family: "GEO",
      mode: "sky",
      title: "The Beach Kite",
      kind: "Triangles · G.TR.1",
      blurb: "A kite from a beach-town shop: two isosceles triangles.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Kite ABCD with A at the top and C at the bottom; tick marks show AB congruent to AD and CB congruent to CD; spine AC and cross spar BD drawn inside\"><polygon class=\"sh\" points=\"132,8 96,59.4 132,158.3 168,59.4\"/><line class=\"thin\" x1=\"132\" y1=\"8\" x2=\"132\" y2=\"158.3\"/><line class=\"thin\" x1=\"96\" y1=\"59.4\" x2=\"168\" y2=\"59.4\"/><line class=\"thin\" x1=\"104.8\" y1=\"36.4\" x2=\"114.6\" y2=\"43.3\"/><line class=\"thin\" x1=\"149.4\" y1=\"43.3\" x2=\"159.2\" y2=\"36.4\"/><line class=\"thin\" x1=\"112.5\" y1=\"87.2\" x2=\"101.2\" y2=\"91.3\"/><line class=\"thin\" x1=\"110.9\" y1=\"82.9\" x2=\"99.7\" y2=\"87\"/><line class=\"thin\" x1=\"162.8\" y1=\"91.3\" x2=\"151.5\" y2=\"87.2\"/><line class=\"thin\" x1=\"164.3\" y1=\"87\" x2=\"153.1\" y2=\"82.9\"/><path class=\"thin\" d=\"M124 19.5 A14 14 0 0 0 140 19.5\"/><text class=\"sm\" x=\"132\" y=\"39.2\" text-anchor=\"middle\">70°</text><path class=\"thin\" d=\"M123.8 135.8 A24 24 0 0 1 140.2 135.8\"/><text class=\"sm\" x=\"132\" y=\"122.5\" text-anchor=\"middle\">40°</text><path class=\"thin dash\" d=\"M132 158.3 q30 4 40 -14 t44 -10 t40 -24\"/><circle class=\"dt\" cx=\"132\" cy=\"8\" r=\"3\"/><circle class=\"dt\" cx=\"96\" cy=\"59.4\" r=\"3\"/><circle class=\"dt\" cx=\"132\" cy=\"158.3\" r=\"3\"/><circle class=\"dt\" cx=\"168\" cy=\"59.4\" r=\"3\"/><text x=\"146\" y=\"15.3\" text-anchor=\"middle\">A</text><text x=\"83\" y=\"64.7\" text-anchor=\"middle\">B</text><text x=\"118\" y=\"161.6\" text-anchor=\"middle\">C</text><text x=\"181\" y=\"64.7\" text-anchor=\"middle\">D</text><text class=\"sm\" x=\"250\" y=\"34.2\" text-anchor=\"middle\">spine AC</text><text class=\"sm\" x=\"250\" y=\"50.2\" text-anchor=\"middle\">spar BD</text><text class=\"sm\" x=\"272\" y=\"122.2\" text-anchor=\"middle\">string</text></svg></figure><p class=\"geo-given\">A kite <strong>ABCD</strong> from a beach-town shop has AB ≅ AD and CB ≅ CD. Its spine AC is a line of symmetry, and its cross spar is BD. m∠BAD = 70° and m∠BCD = 40°.</p>",
      claims: [
        {
          id: "abd",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ABD?",
          choices: [
            { letter: "A", text: "110°" },
            { letter: "B", text: "70°" },
            { letter: "C", text: "55°" },
            { letter: "D", text: "35°" }
          ],
          correct: "C"
        },
        {
          id: "abc",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ABC, the whole angle of the kite at B?",
          choices: [
            { letter: "A", text: "55°" },
            { letter: "B", text: "125°" },
            { letter: "C", text: "70°" },
            { letter: "D", text: "110°" }
          ],
          correct: "B"
        },
        {
          id: "shortBCD",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "In △BCD, which side is the shortest?",
          choices: [
            { letter: "A", text: "BD" },
            { letter: "B", text: "CB" },
            { letter: "C", text: "CD" },
            { letter: "D", text: "All three are the same length" }
          ],
          correct: "A"
        },
        {
          id: "orderABC",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "In △ABC, which list orders the sides from shortest to longest?",
          choices: [
            { letter: "A", text: "AC, BC, AB" },
            { letter: "B", text: "BC, AB, AC" },
            { letter: "C", text: "AB, AC, BC" },
            { letter: "D", text: "AB, BC, AC" }
          ],
          correct: "D"
        },
        {
          id: "nottrue",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement about the kite's lengths is NOT true?",
          choices: [
            { letter: "A", text: "AD is longer than CD." },
            { letter: "B", text: "BD is longer than AB." },
            { letter: "C", text: "CB is longer than BD." },
            { letter: "D", text: "CB is longer than AB." }
          ],
          correct: "A"
        },
        {
          id: "spar",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A different kite has AB = AD = 18 in and CB = CD = 30 in. Using the triangle inequality in △ABD and in △BCD, which gives all possible lengths x of the spar BD, in inches?",
          choices: [
            { letter: "A", text: "12 < x < 48" },
            { letter: "B", text: "0 < x < 60" },
            { letter: "C", text: "12 < x < 36" },
            { letter: "D", text: "0 < x < 36" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr1-sky-drone-loop",
      family: "GEO",
      mode: "sky",
      title: "The Drone Delivery Loop",
      kind: "Triangles · G.TR.1",
      blurb: "Two fixed legs, a battery limit and the turns at each stop.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Drone loop: depot D, stop P and stop Q joined by straight legs with arrows from D to P, P to Q and Q back to D; DP 3.5 km, DQ 4 km; a dashed extension of PQ past Q shows the turn there\"><line class=\"ln\" x1=\"40\" y1=\"140\" x2=\"114.4\" y2=\"29.7\"/><path class=\"thin\" d=\"M80.5 86.3 L80.9 79.4 L74.6 82.3\"/><line class=\"ln\" x1=\"114.4\" y1=\"29.7\" x2=\"191.2\" y2=\"124.1\"/><path class=\"thin\" d=\"M150 79.3 L156.6 81.6 L155.6 74.7\"/><line class=\"ln\" x1=\"191.2\" y1=\"124.1\" x2=\"40\" y2=\"140\"/><path class=\"thin\" d=\"M113.6 128.6 L108 132.9 L114.4 135.8\"/><line class=\"thin dash\" x1=\"191.2\" y1=\"124.1\" x2=\"213.9\" y2=\"152\"/><path class=\"ac\" d=\"M201.3 136.5 A16 16 0 0 1 175.3 125.8\"/><path class=\"thin\" d=\"M61.9 137.7 A22 22 0 0 0 52.3 121.8\"/><text class=\"sm\" x=\"72.6\" y=\"124.6\" text-anchor=\"middle\">50°</text><rect class=\"thin\" x=\"33\" y=\"133\" width=\"14\" height=\"14\"/><circle class=\"dt\" cx=\"114.4\" cy=\"29.7\" r=\"3\"/><circle class=\"dt\" cx=\"191.2\" cy=\"124.1\" r=\"3\"/><circle class=\"dt\" cx=\"40\" cy=\"140\" r=\"2.5\"/><text x=\"24\" y=\"149.3\" text-anchor=\"middle\">D</text><text x=\"110.4\" y=\"20\" text-anchor=\"middle\">P</text><text x=\"204.2\" y=\"121.4\" text-anchor=\"middle\">Q</text><text x=\"55.6\" y=\"75.6\" text-anchor=\"middle\">3.5 km</text><text x=\"116.9\" y=\"150.3\" text-anchor=\"middle\">4 km</text><text class=\"sm\" x=\"243.2\" y=\"152.3\" text-anchor=\"middle\">turn at Q</text></svg></figure><p class=\"geo-given\">A delivery drone flies from its depot <strong>D</strong> to stop <strong>P</strong>, then to stop <strong>Q</strong>, then back to D, in straight legs. The stops change each day, but DP = 3.5 km and DQ = 4 km every day. The battery allows at most 11 km per loop. At a stop, the drone turns through the exterior angle there. Today, m∠PDQ = 50°.</p>",
      claims: [
        {
          id: "range",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Using only the triangle inequality, which gives all possible lengths of PQ, in km?",
          choices: [
            { letter: "A", text: "0 < PQ < 7.5" },
            { letter: "B", text: "0.5 < PQ < 7.5" },
            { letter: "C", text: "3.5 < PQ < 4" },
            { letter: "D", text: "0.5 < PQ < 4" }
          ],
          correct: "B"
        },
        {
          id: "batteryRange",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Which gives all lengths of PQ, in km, that the triangle inequality and the battery both allow?",
          choices: [
            { letter: "A", text: "0.5 < PQ < 7.5" },
            { letter: "B", text: "0 < PQ ≤ 3.5" },
            { letter: "C", text: "0.5 < PQ ≤ 3.5" },
            { letter: "D", text: "0.5 < PQ ≤ 11" }
          ],
          correct: "C"
        },
        {
          id: "largestD",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Can the battery allow a loop in which ∠PDQ is the largest angle? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: PQ can be up to 7.5 km, so it can be the longest leg." },
            { letter: "B", text: "No: PQ would have to be more than 4 km, but PQ ≤ 3.5 km." },
            { letter: "C", text: "Yes: the angle at the depot is always the largest." },
            { letter: "D", text: "No: the largest angle is always ∠DQP, at the end of DQ." }
          ],
          correct: "B"
        },
        {
          id: "order3",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Suppose PQ = 3 km on one loop. Which list orders the angles of △DPQ from smallest to largest?",
          choices: [
            { letter: "A", text: "∠DPQ, ∠DQP, ∠PDQ" },
            { letter: "B", text: "∠PDQ, ∠DPQ, ∠DQP" },
            { letter: "C", text: "∠DQP, ∠PDQ, ∠DPQ" },
            { letter: "D", text: "∠PDQ, ∠DQP, ∠DPQ" }
          ],
          correct: "D"
        },
        {
          id: "otherDay",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "On another day, the stops are closer together. The drone turns about 98° at P, and m∠DQP = 60°. About what is m∠PDQ?",
          choices: [
            { letter: "A", text: "82°" },
            { letter: "B", text: "158°" },
            { letter: "C", text: "38°" },
            { letter: "D", text: "22°" }
          ],
          correct: "C"
        },
        {
          id: "turnQ",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "On the loop in the figure, m∠DPQ ≈ 73°. Through about what angle does the drone turn at Q?",
          choices: [
            { letter: "A", text: "123°" },
            { letter: "B", text: "57°" },
            { letter: "C", text: "107°" },
            { letter: "D", text: "130°" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr1-sky-ferry-ramp",
      family: "GEO",
      mode: "sky",
      title: "The Ferry Ramp",
      kind: "Triangles · G.TR.1",
      blurb: "A boarding ramp, its post and a strut.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Side view of a ferry ramp: ramp AC from the dock at A up to the deck at C, post CB perpendicular to the dock line AB, a strut from C to D on AB, and the dock line continuing past A to E\"><rect class=\"sh2\" x=\"252\" y=\"61.4\" width=\"56\" height=\"90.6\"/><text class=\"sm\" x=\"284\" y=\"87.6\" text-anchor=\"middle\">ferry</text><line class=\"ln\" x1=\"14\" y1=\"132\" x2=\"252\" y2=\"132\"/><polygon class=\"ln\" points=\"58,132 252,132 252,61.4\"/><line class=\"ac\" x1=\"252\" y1=\"61.4\" x2=\"192.8\" y2=\"132\"/><path class=\"thin\" d=\"M243 132 L243 123 L252 123\"/><path class=\"thin\" d=\"M86 132 A28 28 0 0 0 84.3 122.4\"/><text class=\"sm\" x=\"121\" y=\"125.1\" text-anchor=\"middle\">(2x − 4)°</text><path class=\"thin\" d=\"M206.8 132 A14 14 0 0 0 201.8 121.3\"/><text class=\"sm\" x=\"217.2\" y=\"124.8\" text-anchor=\"middle\">50°</text><text class=\"sm\" x=\"34\" y=\"154.2\" text-anchor=\"middle\">dock</text><circle class=\"dt\" cx=\"58\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"252\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"252\" cy=\"61.4\" r=\"3\"/><circle class=\"dt\" cx=\"192.8\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"14\" cy=\"132\" r=\"3\"/><text x=\"62\" y=\"152.3\" text-anchor=\"middle\">A</text><text x=\"242\" y=\"152.3\" text-anchor=\"middle\">B</text><text x=\"248\" y=\"53.7\" text-anchor=\"middle\">C</text><text x=\"192.8\" y=\"152.3\" text-anchor=\"middle\">D</text><text x=\"16\" y=\"124.3\" text-anchor=\"middle\">E</text></svg></figure><p class=\"geo-given\">A boarding ramp <strong>AC</strong> runs from the dock at <strong>A</strong> up to the ferry deck at <strong>C</strong>. The post <strong>CB</strong> is perpendicular to the dock line AB, and a strut runs from C to <strong>D</strong> on AB. The dock line continues past A to <strong>E</strong>. m∠CAB = (2x − 4)°, m∠ACB = (5x + 10)° and m∠CDB = 50°.</p>",
      claims: [
        {
          id: "solveX",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Use △ABC to find x.",
          choices: [
            { letter: "A", text: "12" },
            { letter: "B", text: "20" },
            { letter: "C", text: "24.9" },
            { letter: "D", text: "13.7" }
          ],
          correct: "A"
        },
        {
          id: "cae",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠CAE, the angle between the ramp and the dock beyond A?",
          choices: [
            { letter: "A", text: "20°" },
            { letter: "B", text: "70°" },
            { letter: "C", text: "160°" },
            { letter: "D", text: "110°" }
          ],
          correct: "C"
        },
        {
          id: "acd",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ACD, the angle between the ramp and the strut?",
          choices: [
            { letter: "A", text: "40°" },
            { letter: "B", text: "30°" },
            { letter: "C", text: "70°" },
            { letter: "D", text: "130°" }
          ],
          correct: "B"
        },
        {
          id: "orderACD",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the sides of △ACD from shortest to longest?",
          choices: [
            { letter: "A", text: "AC, AD, CD" },
            { letter: "B", text: "AD, CD, AC" },
            { letter: "C", text: "CD, AC, AD" },
            { letter: "D", text: "CD, AD, AC" }
          ],
          correct: "D"
        },
        {
          id: "shortest4",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which of the four segments CB, CD, AD and AC is the shortest?",
          choices: [
            { letter: "A", text: "CD" },
            { letter: "B", text: "AD" },
            { letter: "C", text: "CB" },
            { letter: "D", text: "AC" }
          ],
          correct: "C"
        },
        {
          id: "gangway",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A second ramp's side frame is a triangle with sides of 6 ft, (k + 2) ft and (2k − 1) ft. Which inequality gives all possible values of k?",
          choices: [
            { letter: "A", text: "5/3 < k < 9" },
            { letter: "B", text: "k < 9" },
            { letter: "C", text: "k > 5/3" },
            { letter: "D", text: "−3 < k < 9" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
