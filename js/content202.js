/* SOL Labyrinth — Geometry game (family GEO), triangles: G.TR.1–G.TR.4 (Virginia 2023 Geometry SOL). Original items only.
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given
   facts, then six questions about it. Every numeric answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-tr4-ladder",
      family: "GEO",
      title: "The Ladder on the Gym Wall",
      kind: "Triangles · G.TR.4",
      blurb: "A 13-foot ladder, a wall and level ground.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 172\" role=\"img\" aria-label=\"Right triangle ABC: ladder AB leans from the ground at B to the wall at A; C is the base of the wall, with a right angle at C\">" +
        "<line class=\"ln\" x1=\"40\" y1=\"150\" x2=\"290\" y2=\"150\"/>" +
        "<rect class=\"sh2\" x=\"210\" y=\"12\" width=\"22\" height=\"138\"/>" +
        "<line class=\"ln\" x1=\"210\" y1=\"24\" x2=\"210\" y2=\"150\"/>" +
        "<line class=\"ac\" x1=\"157.5\" y1=\"150\" x2=\"210\" y2=\"24\"/>" +
        "<path class=\"thin\" d=\"M200 150 V140 H210\"/>" +
        "<path class=\"thin\" d=\"M175.5 150 A18 18 0 0 0 164.4 133.4\"/>" +
        "<circle class=\"dt\" cx=\"210\" cy=\"24\" r=\"3\"/><circle class=\"dt\" cx=\"157.5\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"210\" cy=\"150\" r=\"3\"/>" +
        "<text x=\"192\" y=\"26\">A</text><text x=\"144\" y=\"168\">B</text><text x=\"214\" y=\"168\">C</text>" +
        "<text class=\"acc\" x=\"132\" y=\"88\">13 ft</text><text x=\"168\" y=\"168\">5 ft</text>" +
        "<text class=\"sm\" x=\"240\" y=\"90\">wall</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">A 13-foot ladder <strong>AB</strong> leans against the gym wall. Its foot <strong>B</strong> is 5 feet from <strong>C</strong>, the base of the wall, on level ground. The wall is perpendicular to the ground.</p>",
      claims: [
        {
          id: "height",
          sol: "G.TR.4",
          sub: "G.TR.4.1",
          stem: "How high up the wall does the ladder reach (the length of AC)?",
          choices: [
            { letter: "A", text: "8 ft" },
            { letter: "B", text: "12 ft" },
            { letter: "C", text: "about 13.9 ft" },
            { letter: "D", text: "18 ft" }
          ],
          correct: "B"
        },
        {
          id: "cosine",
          sol: "G.TR.4",
          sub: "G.TR.4.3",
          stem: "Which ratio is equal to cos B?",
          choices: [
            { letter: "A", text: "12/13" },
            { letter: "B", text: "5/12" },
            { letter: "C", text: "5/13" },
            { letter: "D", text: "13/5" }
          ],
          correct: "C"
        },
        {
          id: "angle",
          sol: "G.TR.4",
          sub: "G.TR.4.3",
          stem: "To the nearest degree, what angle does the ladder make with the ground (m∠B)?",
          choices: [
            { letter: "A", text: "23°" },
            { letter: "B", text: "45°" },
            { letter: "C", text: "79°" },
            { letter: "D", text: "67°" }
          ],
          correct: "D"
        },
        {
          id: "rule",
          sol: "G.TR.4",
          sub: "G.TR.4.4",
          stem: "A safety rule says the ladder should make a 75° angle with the ground. How far from the wall should the foot of the same 13-foot ladder be, to the nearest tenth of a foot?",
          choices: [
            { letter: "A", text: "3.4 ft" },
            { letter: "B", text: "12.6 ft" },
            { letter: "C", text: "48.5 ft" },
            { letter: "D", text: "50.2 ft" }
          ],
          correct: "A"
        },
        {
          id: "higher",
          sol: "G.TR.4",
          sub: "G.TR.4.4",
          stem: "If the same ladder is set at a 75° angle with the ground instead, about how much higher up the wall does it reach than it does in the figure?",
          choices: [
            { letter: "A", text: "1.6 ft" },
            { letter: "B", text: "0.6 ft" },
            { letter: "C", text: "3.4 ft" },
            { letter: "D", text: "12.6 ft" }
          ],
          correct: "B"
        },
        {
          id: "square",
          sol: "G.TR.4",
          sub: "G.TR.4.1",
          stem: "To check another corner, a painter measures 6 ft along the floor, 8 ft up the wall, and 10.2 ft between those two marks. What can she conclude about the corner?",
          choices: [
            { letter: "A", text: "It is a right angle, because 6 + 8 > 10.2." },
            { letter: "B", text: "It is less than 90°, because 10.2² > 6² + 8²." },
            { letter: "C", text: "It is more than 90°, because 10.2² > 6² + 8²." },
            { letter: "D", text: "It is a right angle, because 10.2 is close to 10." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr1-towns",
      family: "GEO",
      title: "Three Towns, Three Roads",
      kind: "Triangles · G.TR.1",
      blurb: "Straight roads join Ashby, Bell and Carver.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Triangle ABC of roads: AB 9 miles, BC 14 miles, AC 11 miles; angle A is 88 degrees and angle C is 40 degrees; the road BC continues straight past C to D\">" +
        "<polygon class=\"ln\" points=\"123.6,28 40,134 250,134\"/>" + "<line class=\"ln\" x1=\"250\" y1=\"134\" x2=\"296\" y2=\"134\"/>" +
        "<path class=\"thin\" d=\"M113.7 40.5 A16 16 0 0 0 135.8 38.3\"/>" + "<path class=\"thin\" d=\"M226 134 A24 24 0 0 1 231.6 118.6\"/>" +
        "<path class=\"ac\" d=\"M239.3 125 A14 14 0 0 1 264 134\"/>" +
        "<circle class=\"dt\" cx=\"123.6\" cy=\"28\" r=\"3\"/><circle class=\"dt\" cx=\"40\" cy=\"134\" r=\"3\"/><circle class=\"dt\" cx=\"250\" cy=\"134\" r=\"3\"/><circle class=\"dt\" cx=\"296\" cy=\"134\" r=\"3\"/>" +
        "<text x=\"121\" y=\"20.2\" text-anchor=\"middle\">A</text>" + "<text x=\"27.8\" y=\"143.4\" text-anchor=\"middle\">B</text>" +
        "<text x=\"250\" y=\"154\" text-anchor=\"middle\">C</text>" + "<text x=\"296\" y=\"154\" text-anchor=\"middle\">D</text>" +
        "<text x=\"66.3\" y=\"73.8\" text-anchor=\"middle\">9 mi</text>" + "<text x=\"145\" y=\"149.5\" text-anchor=\"middle\">14 mi</text>" +
        "<text x=\"200.4\" y=\"69.7\" text-anchor=\"middle\">11 mi</text>" + "<text x=\"126.6\" y=\"62.8\" text-anchor=\"middle\">88°</text>" +
        "<text x=\"210.5\" y=\"124.6\" text-anchor=\"middle\">40°</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">Straight roads join the towns <strong>A</strong> (Ashby), <strong>B</strong> (Bell) and <strong>C</strong> (Carver): AB = 9 mi, BC = 14 mi and AC = 11 mi. A surveyor finds m∠A ≈ 88° and m∠C ≈ 40° (to the nearest degree). The road from Bell through Carver goes straight on to the town <strong>D</strong>.</p>",
      claims: [
        {
          id: "largest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Using only the three road lengths, which angle of the triangle must be the largest?",
          choices: [
            { letter: "A", text: "∠B" },
            { letter: "B", text: "∠C" },
            { letter: "C", text: "∠A" },
            { letter: "D", text: "∠B and ∠C are equal" }
          ],
          correct: "C"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the angles of the triangle from smallest to largest?",
          choices: [
            { letter: "A", text: "∠C, ∠B, ∠A" },
            { letter: "B", text: "∠A, ∠B, ∠C" },
            { letter: "C", text: "∠B, ∠C, ∠A" },
            { letter: "D", text: "∠C, ∠A, ∠B" }
          ],
          correct: "A"
        },
        {
          id: "angleB",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "To the nearest degree, what is m∠B?",
          choices: [
            { letter: "A", text: "128°" },
            { letter: "B", text: "92°" },
            { letter: "C", text: "140°" },
            { letter: "D", text: "52°" }
          ],
          correct: "D"
        },
        {
          id: "exterior",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ACD, the angle between road CA and the road on to D?",
          choices: [
            { letter: "A", text: "40°" },
            { letter: "B", text: "140°" },
            { letter: "C", text: "128°" },
            { letter: "D", text: "92°" }
          ],
          correct: "B"
        },
        {
          id: "eden",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A new town, Eden, is 6 mi from Carver. Eden, Ashby and Carver are not on one straight line. Which could be the distance from Ashby to Eden?",
          choices: [
            { letter: "A", text: "4 mi" },
            { letter: "B", text: "5 mi" },
            { letter: "C", text: "17 mi" },
            { letter: "D", text: "12 mi" }
          ],
          correct: "D"
        },
        {
          id: "shortest",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "What is the shortest whole number of miles that Eden could be from Ashby?",
          choices: [
            { letter: "A", text: "5 mi" },
            { letter: "B", text: "6 mi" },
            { letter: "C", text: "11 mi" },
            { letter: "D", text: "17 mi" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr1-garden",
      family: "GEO",
      title: "The Corner Garden Bed",
      kind: "Triangles · G.TR.1",
      blurb: "Three angles written with x, and a gate post.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Triangle PQR: angle P is 2x plus 10 degrees, angle Q is 3x minus 5 degrees, angle R is x plus 25 degrees; side PR is extended past R to S\">" +
        "<polygon class=\"ln\" points=\"56,146 125.3,26 226,146\"/>" + "<line class=\"ln\" x1=\"226\" y1=\"146\" x2=\"272\" y2=\"146\"/>" +
        "<path class=\"thin\" d=\"M74 146 A18 18 0 0 0 65 130.4\"/>" + "<path class=\"thin\" d=\"M116.3 41.6 A18 18 0 0 0 136.9 39.8\"/>" +
        "<path class=\"thin\" d=\"M214.4 132.2 A18 18 0 0 0 208 146\"/>" + "<path class=\"ac\" d=\"M217.6 136 A13 13 0 0 1 239 146\"/>" +
        "<circle class=\"dt\" cx=\"56\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"125.3\" cy=\"26\" r=\"3\"/><circle class=\"dt\" cx=\"226\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"272\" cy=\"146\" r=\"3\"/>" +
        "<text x=\"43.8\" y=\"155.4\" text-anchor=\"middle\">P</text>" + "<text x=\"123.6\" y=\"18.1\" text-anchor=\"middle\">Q</text>" +
        "<text x=\"226\" y=\"166\" text-anchor=\"middle\">R</text>" + "<text x=\"272\" y=\"166\" text-anchor=\"middle\">S</text>" +
        "<text class=\"sm\" x=\"100\" y=\"139\" text-anchor=\"middle\">(2x + 10)°</text>" +
        "<text class=\"sm\" x=\"129.7\" y=\"79.8\" text-anchor=\"middle\">(3x − 5)°</text>" +
        "<text class=\"sm\" x=\"180\" y=\"141\" text-anchor=\"middle\">(x + 25)°</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">A garden bed is the triangle <strong>PQR</strong>, with m∠P = (2x + 10)⁠°, m∠Q = (3x − 5)⁠° and m∠R = (x + 25)⁠°. The edge PR runs straight on past R to a gate post <strong>S</strong>.</p>",
      claims: [
        {
          id: "x",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is the value of x?",
          choices: [
            { letter: "A", text: "30" },
            { letter: "B", text: "25" },
            { letter: "C", text: "55" },
            { letter: "D", text: "35" }
          ],
          correct: "B"
        },
        {
          id: "angleQ",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠Q?",
          choices: [
            { letter: "A", text: "110°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "75°" },
            { letter: "D", text: "70°" }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the edges of the bed from shortest to longest?",
          choices: [
            { letter: "A", text: "PQ, QR, PR" },
            { letter: "B", text: "PR, QR, PQ" },
            { letter: "C", text: "QR, PQ, PR" },
            { letter: "D", text: "PR, PQ, QR" }
          ],
          correct: "A"
        },
        {
          id: "gate",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠QRS?",
          choices: [
            { letter: "A", text: "50°" },
            { letter: "B", text: "110°" },
            { letter: "C", text: "130°" },
            { letter: "D", text: "120°" }
          ],
          correct: "C"
        },
        {
          id: "boards",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "The gardener will build a second bed from three straight boards. Which set of board lengths could form a triangle?",
          choices: [
            { letter: "A", text: "3 ft, 8 ft, 10 ft" },
            { letter: "B", text: "4 ft, 5 ft, 10 ft" },
            { letter: "C", text: "6 ft, 6 ft, 12 ft" },
            { letter: "D", text: "2 ft, 7 ft, 9.5 ft" }
          ],
          correct: "A"
        },
        {
          id: "greatest",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A third bed will have edges of 6 ft and 13 ft. What is the greatest whole number of feet the third edge could be?",
          choices: [
            { letter: "A", text: "13 ft" },
            { letter: "B", text: "19 ft" },
            { letter: "C", text: "18 ft" },
            { letter: "D", text: "7 ft" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr1-brace",
      family: "GEO",
      title: "The Skate Ramp Brace",
      kind: "Triangles · G.TR.1",
      blurb: "An exterior angle, some algebra, and scrap boards.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Triangle JKL with side KL extended past L to M: angle J is x plus 8 degrees, angle K is 2x plus 6 degrees, and exterior angle JLM is 4x minus 16 degrees\">" +
        "<polygon class=\"ln\" points=\"226,150 46,150 92.5,45.7\"/>" + "<line class=\"ln\" x1=\"92.5\" y1=\"45.7\" x2=\"104.7\" y2=\"18.3\"/>" +
        "<path class=\"thin\" d=\"M64 150 A18 18 0 0 0 53.3 133.6\"/>" + "<path class=\"thin\" d=\"M204 150 A22 22 0 0 1 208.7 136.5\"/>" +
        "<path class=\"ac\" d=\"M98.6 32 A15 15 0 0 1 104.3 54.9\"/>" +
        "<circle class=\"dt\" cx=\"226\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"46\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"92.5\" cy=\"45.7\" r=\"3\"/><circle class=\"dt\" cx=\"104.7\" cy=\"18.3\" r=\"3\"/>" +
        "<text x=\"33.8\" y=\"159.4\" text-anchor=\"middle\">K</text>" + "<text x=\"238.2\" y=\"159.4\" text-anchor=\"middle\">J</text>" +
        "<text x=\"80.2\" y=\"46.2\" text-anchor=\"middle\">L</text>" + "<text x=\"116.7\" y=\"23.3\" text-anchor=\"middle\">M</text>" +
        "<text class=\"sm\" x=\"89.6\" y=\"125.7\" text-anchor=\"middle\">(2x + 6)°</text>" +
        "<text class=\"sm\" x=\"167.4\" y=\"133.8\" text-anchor=\"middle\">(x + 8)°</text>" +
        "<text class=\"sm\" x=\"137.1\" y=\"38.5\" text-anchor=\"middle\">(4x − 16)°</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">A side brace for a skate ramp is the triangle <strong>JKL</strong>. Side KL is extended past L to <strong>M</strong>. m∠J = (x + 8)⁠°, m∠K = (2x + 6)⁠° and m∠JLM = (4x − 16)⁠°.</p>",
      claims: [
        {
          id: "x",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Solve for x.",
          choices: [
            { letter: "A", text: "26" },
            { letter: "B", text: "38" },
            { letter: "C", text: "104" },
            { letter: "D", text: "30" }
          ],
          correct: "D"
        },
        {
          id: "angleL",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠JLK, the angle inside the brace at L?",
          choices: [
            { letter: "A", text: "104°" },
            { letter: "B", text: "76°" },
            { letter: "C", text: "14°" },
            { letter: "D", text: "66°" }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the sides of the brace from shortest to longest?",
          choices: [
            { letter: "A", text: "JK, JL, KL" },
            { letter: "B", text: "JL, KL, JK" },
            { letter: "C", text: "KL, JL, JK" },
            { letter: "D", text: "KL, JK, JL" }
          ],
          correct: "C"
        },
        {
          id: "theorem",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Which equation is true for every triangle drawn like this one?",
          choices: [
            { letter: "A", text: "m∠J + m∠K = m∠JLM" },
            { letter: "B", text: "m∠J + m∠K = m∠JLK" },
            { letter: "C", text: "m∠JLM + m∠J = 180°" },
            { letter: "D", text: "m∠JLM = m∠K + m∠JLK" }
          ],
          correct: "A"
        },
        {
          id: "scrap",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "The builder has scrap boards 2 ft, 3 ft, 4 ft and 5 ft long. Which three boards can NOT be joined at their ends to make a triangle?",
          choices: [
            { letter: "A", text: "2 ft, 3 ft, 4 ft" },
            { letter: "B", text: "2 ft, 3 ft, 5 ft" },
            { letter: "C", text: "2 ft, 4 ft, 5 ft" },
            { letter: "D", text: "3 ft, 4 ft, 5 ft" }
          ],
          correct: "B"
        },
        {
          id: "range",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Another brace has sides of 7 ft and 10 ft, and its third side is (2y + 1) ft. Which inequality gives all possible values of y?",
          choices: [
            { letter: "A", text: "3 < y < 17" },
            { letter: "B", text: "2 < y < 16" },
            { letter: "C", text: "1.5 < y < 8.5" },
            { letter: "D", text: "1 < y < 8" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr1-sail",
      family: "GEO",
      title: "The Shade Sail",
      kind: "Triangles · G.TR.1",
      blurb: "A triangular sail with edges of 15 ft, 8 ft and 12 ft.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"Triangle DEF: DE 15 feet, EF 8 feet, DF 12 feet; angle E is about 53 degrees and angle F about 95 degrees; DF is extended past F to G\">" +
        "<polygon class=\"sh\" points=\"36,142 276,142 198.7,40\"/>" + "<line class=\"ln\" x1=\"198.7\" y1=\"40\" x2=\"230.9\" y2=\"19.8\"/>" +
        "<path class=\"thin\" d=\"M258 142 A18 18 0 0 1 265.1 127.7\"/>" + "<path class=\"thin\" d=\"M186.8 47.4 A14 14 0 0 0 207.1 51.2\"/>" +
        "<path class=\"ac\" d=\"M208.8 33.6 A12 12 0 0 1 205.9 49.6\"/>" +
        "<circle class=\"dt\" cx=\"36\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"276\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"198.7\" cy=\"40\" r=\"3\"/><circle class=\"dt\" cx=\"230.9\" cy=\"19.8\" r=\"3\"/>" +
        "<text x=\"23.8\" y=\"151.4\" text-anchor=\"middle\">D</text>" + "<text x=\"288.2\" y=\"151.4\" text-anchor=\"middle\">E</text>" +
        "<text x=\"192.2\" y=\"33.7\" text-anchor=\"middle\">F</text>" + "<text x=\"242.1\" y=\"18.3\" text-anchor=\"middle\">G</text>" +
        "<text x=\"156\" y=\"157.5\" text-anchor=\"middle\">15 ft</text>" + "<text x=\"106.9\" y=\"79.4\" text-anchor=\"middle\">12 ft</text>" +
        "<text x=\"253.1\" y=\"84\" text-anchor=\"middle\">8 ft</text>" + "<text x=\"245.5\" y=\"131.9\" text-anchor=\"middle\">53°</text>" +
        "<text x=\"193.3\" y=\"74.5\" text-anchor=\"middle\">95°</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">A shade sail is the triangle <strong>DEF</strong> with DE = 15 ft, EF = 8 ft and DF = 12 ft. With a protractor, m∠E ≈ 53° and m∠F ≈ 95°. Edge DF is extended past F to <strong>G</strong>.</p>",
      claims: [
        {
          id: "range",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Before choosing DF, the sailmaker knew only that DE = 15 ft and EF = 8 ft. Which inequality gives all possible lengths x of DF, in feet?",
          choices: [
            { letter: "A", text: "7 < x < 23" },
            { letter: "B", text: "8 < x < 15" },
            { letter: "C", text: "x < 23" },
            { letter: "D", text: "7 ≤ x ≤ 23" }
          ],
          correct: "A"
        },
        {
          id: "count",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "How many whole-number lengths of DF, in feet, were possible?",
          choices: [
            { letter: "A", text: "17" },
            { letter: "B", text: "22" },
            { letter: "C", text: "15" },
            { letter: "D", text: "16" }
          ],
          correct: "C"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Using the side lengths, which list orders the sail's angles from smallest to largest?",
          choices: [
            { letter: "A", text: "∠F, ∠E, ∠D" },
            { letter: "B", text: "∠D, ∠E, ∠F" },
            { letter: "C", text: "∠E, ∠D, ∠F" },
            { letter: "D", text: "∠D, ∠F, ∠E" }
          ],
          correct: "B"
        },
        {
          id: "angleD",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Using the protractor readings, what is m∠D?",
          choices: [
            { letter: "A", text: "148°" },
            { letter: "B", text: "127°" },
            { letter: "C", text: "85°" },
            { letter: "D", text: "32°" }
          ],
          correct: "D"
        },
        {
          id: "exterior",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Using the protractor readings, what is m∠EFG?",
          choices: [
            { letter: "A", text: "95°" },
            { letter: "B", text: "148°" },
            { letter: "C", text: "85°" },
            { letter: "D", text: "53°" }
          ],
          correct: "C"
        },
        {
          id: "flat",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Why could no sail have edges of 15 ft, 8 ft and 23 ft?",
          choices: [
            { letter: "A", text: "15 + 8 = 23, so the edges lie flat" },
            { letter: "B", text: "23 is longer than 15" },
            { letter: "C", text: "23 − 15 is less than 8" },
            { letter: "D", text: "8² + 15² does not equal 23²" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr2-marks",
      family: "GEO",
      title: "Matching Marks",
      kind: "Triangles · G.TR.2",
      blurb: "Ticks and arcs on two triangles that mirror each other.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 154\" role=\"img\" aria-label=\"Triangles ABC and DEF, mirror images: AB and DE have one tick mark, BC and EF have two tick marks, and angles B and E have one arc\">" +
        "<polygon class=\"ln\" points=\"74,45.2 16,128 146,128\"/>" + "<polygon class=\"ln\" points=\"246,45.2 304,128 174,128\"/>" +
        "<path class=\"thin\" d=\"M40.9 83.7 L49.1 89.5\"/>" + "<path class=\"thin\" d=\"M270.9 89.5 L279.1 83.7\"/>" +
        "<path class=\"thin\" d=\"M79 133 L79 123 M83 133 L83 123\"/>" + "<path class=\"thin\" d=\"M241 123 L241 133 M237 123 L237 133\"/>" +
        "<path class=\"thin\" d=\"M36 128 A20 20 0 0 0 27.5 111.6\"/>" + "<path class=\"thin\" d=\"M284 128 A20 20 0 0 1 292.5 111.6\"/>" +
        "<circle class=\"dt\" cx=\"74\" cy=\"45.2\" r=\"3\"/><circle class=\"dt\" cx=\"16\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"146\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"246\" cy=\"45.2\" r=\"3\"/><circle class=\"dt\" cx=\"304\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"174\" cy=\"128\" r=\"3\"/>" +
        "<text x=\"72.9\" y=\"37.2\" text-anchor=\"middle\">A</text>" + "<text x=\"16\" y=\"148\" text-anchor=\"middle\">B</text>" +
        "<text x=\"146\" y=\"148\" text-anchor=\"middle\">C</text>" + "<text x=\"247.1\" y=\"37.2\" text-anchor=\"middle\">D</text>" +
        "<text x=\"304\" y=\"148\" text-anchor=\"middle\">E</text>" + "<text x=\"174\" y=\"148\" text-anchor=\"middle\">F</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">Matching tick marks show congruent sides and matching arcs show congruent angles: AB ≅ DE, ∠B ≅ ∠E and BC ≅ EF.</p>",
      claims: [
        {
          id: "which",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which criterion proves △ABC ≅ △DEF?",
          choices: [
            { letter: "A", text: "SSA" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "ASA" },
            { letter: "D", text: "SSS" }
          ],
          correct: "B"
        },
        {
          id: "ssa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose the marks showed AB ≅ DE, BC ≅ EF and ∠A ≅ ∠D instead. What could you conclude?",
          choices: [
            { letter: "A", text: "SSA does not prove congruence" },
            { letter: "B", text: "They are congruent by SAS" },
            { letter: "C", text: "They are congruent by ASA" },
            { letter: "D", text: "They are congruent by SSS" }
          ],
          correct: "A"
        },
        {
          id: "asa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Keep AB ≅ DE and ∠B ≅ ∠E. Which one more fact would prove the triangles congruent by ASA?",
          choices: [
            { letter: "A", text: "∠C ≅ ∠F" },
            { letter: "B", text: "AC ≅ DF" },
            { letter: "C", text: "BC ≅ EF" },
            { letter: "D", text: "∠A ≅ ∠D" }
          ],
          correct: "D"
        },
        {
          id: "parts",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Since △ABC ≅ △DEF, which segment is congruent to AC?",
          choices: [
            { letter: "A", text: "EF" },
            { letter: "B", text: "DE" },
            { letter: "C", text: "DF" },
            { letter: "D", text: "BC" }
          ],
          correct: "C"
        },
        {
          id: "angleF",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠A = 76° and m∠E = 55°. What is m∠F?",
          choices: [
            { letter: "A", text: "55°" },
            { letter: "B", text: "76°" },
            { letter: "C", text: "104°" },
            { letter: "D", text: "49°" }
          ],
          correct: "D"
        },
        {
          id: "aaa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Ana finds that the three angles of △ABC are congruent to the three angles of another triangle, △GHJ. What can she conclude?",
          choices: [
            { letter: "A", text: "They are congruent by AAA" },
            { letter: "B", text: "Only that they are similar" },
            { letter: "C", text: "They are congruent by ASA" },
            { letter: "D", text: "They are not similar" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr2-bowtie",
      family: "GEO",
      title: "The Bridge Cross-Brace",
      kind: "Triangles · G.TR.2",
      blurb: "Two braces cross at C. Finish the proof.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Segments AE and BD cross at C, forming triangles ABC and EDC; AC and EC have one tick mark, BC and DC have two tick marks\">" +
        "<line class=\"ln\" x1=\"109.8\" y1=\"40\" x2=\"210.2\" y2=\"132\"/>" + "<line class=\"ln\" x1=\"89.2\" y1=\"150.9\" x2=\"230.8\" y2=\"21.1\"/>" +
        "<line class=\"ln\" x1=\"109.8\" y1=\"40\" x2=\"89.2\" y2=\"150.9\"/>" + "<line class=\"ln\" x1=\"210.2\" y1=\"132\" x2=\"230.8\" y2=\"21.1\"/>" +
        "<path class=\"thin\" d=\"M131.5 66.7 L138.3 59.3\"/>" + "<path class=\"thin\" d=\"M181.7 112.7 L188.5 105.3\"/>" +
        "<path class=\"thin\" d=\"M126.5 123.5 L119.8 116.1 M129.5 120.8 L122.7 113.4\"/>" +
        "<path class=\"thin\" d=\"M197.3 58.6 L190.5 51.2 M200.2 55.9 L193.5 48.5\"/>" +
        "<circle class=\"dt\" cx=\"109.8\" cy=\"40\" r=\"3\"/><circle class=\"dt\" cx=\"89.2\" cy=\"150.9\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"86\" r=\"3\"/><circle class=\"dt\" cx=\"230.8\" cy=\"21.1\" r=\"3\"/><circle class=\"dt\" cx=\"210.2\" cy=\"132\" r=\"3\"/>" +
        "<text x=\"98.5\" y=\"38.5\" text-anchor=\"middle\">A</text>" + "<text x=\"78\" y=\"162.4\" text-anchor=\"middle\">B</text>" +
        "<text x=\"144\" y=\"91\" text-anchor=\"middle\">C</text>" + "<text x=\"242\" y=\"19.6\" text-anchor=\"middle\">D</text>" +
        "<text x=\"221.5\" y=\"143.5\" text-anchor=\"middle\">E</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">Two straight braces, <strong>AE</strong> and <strong>BD</strong>, cross at <strong>C</strong>, with AC ≅ EC and BC ≅ DC. Prove that AB ≅ ED.</p>" +
        "<table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. AC ≅ EC; BC ≅ DC</td><td>Given</td></tr><tr><td>2. ∠ACB ≅ ∠ECD</td><td>(a) ____</td></tr><tr><td>3. △ABC ≅ △EDC</td><td>(b) ____</td></tr><tr><td>4. AB ≅ ED</td><td>(c) ____</td></tr></table>",
      claims: [
        {
          id: "reasonA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 2, ∠ACB ≅ ∠ECD (blank a)?",
          choices: [
            { letter: "A", text: "Alternate interior angles are congruent" },
            { letter: "B", text: "Reflexive property" },
            { letter: "C", text: "Vertical angles are congruent" },
            { letter: "D", text: "Definition of midpoint" }
          ],
          correct: "C"
        },
        {
          id: "reasonB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 3, △ABC ≅ △EDC (blank b)?",
          choices: [
            { letter: "A", text: "ASA" },
            { letter: "B", text: "SSS" },
            { letter: "C", text: "HL" },
            { letter: "D", text: "SAS" }
          ],
          correct: "D"
        },
        {
          id: "reasonC",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 4, AB ≅ ED (blank c)?",
          choices: [
            { letter: "A", text: "CPCTC" },
            { letter: "B", text: "Given" },
            { letter: "C", text: "SAS" },
            { letter: "D", text: "Vertical angles are congruent" }
          ],
          correct: "A"
        },
        {
          id: "algebra",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AB = 3x − 2 and ED = x + 10, in feet. How long is AB?",
          choices: [
            { letter: "A", text: "6 ft" },
            { letter: "B", text: "16 ft" },
            { letter: "C", text: "10 ft" },
            { letter: "D", text: "4 ft" }
          ],
          correct: "B"
        },
        {
          id: "parallel",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose you knew AC ≅ EC and AB ∥ ED, but not BC ≅ DC. Which criterion would prove △ABC ≅ △EDC?",
          choices: [
            { letter: "A", text: "ASA" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "SSS" },
            { letter: "D", text: "HL" }
          ],
          correct: "A"
        },
        {
          id: "angleD",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠A = 58° and m∠ACB = 85°. What is m∠D?",
          choices: [
            { letter: "A", text: "58°" },
            { letter: "B", text: "85°" },
            { letter: "C", text: "37°" },
            { letter: "D", text: "95°" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr2-tent",
      family: "GEO",
      title: "The Tent and Its Pole",
      kind: "Triangles · G.TR.2",
      blurb: "A center pole meets the floor at a right angle.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Isosceles triangle ABC with AB and CB marked congruent; segment BD from the top B meets AC at D at a right angle\">" +
        "<polygon class=\"sh2\" points=\"98,146 160,29.4 222,146\"/>" + "<line class=\"ac\" x1=\"160\" y1=\"29.4\" x2=\"160\" y2=\"146\"/>" +
        "<path class=\"thin\" d=\"M170 146 L170 136 L160 136\"/>" + "<path class=\"thin\" d=\"M133.4 90 L124.6 85.4\"/>" +
        "<path class=\"thin\" d=\"M195.4 85.4 L186.6 90\"/>" +
        "<circle class=\"dt\" cx=\"98\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"29.4\" r=\"3\"/><circle class=\"dt\" cx=\"222\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"146\" r=\"3\"/>" +
        "<text x=\"85.8\" y=\"155.4\" text-anchor=\"middle\">A</text>" + "<text x=\"160\" y=\"21.4\" text-anchor=\"middle\">B</text>" +
        "<text x=\"234.2\" y=\"155.4\" text-anchor=\"middle\">C</text>" + "<text x=\"160\" y=\"166\" text-anchor=\"middle\">D</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">The end of a tent is the triangle <strong>ABC</strong> with AB ≅ CB. The center pole <strong>BD</strong> is perpendicular to the floor AC. Prove that AD ≅ CD.</p>" +
        "<table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. AB ≅ CB; BD ⊥ AC</td><td>Given</td></tr><tr><td>2. ∠ADB and ∠CDB are right angles</td><td>Definition of perpendicular lines</td></tr><tr><td>3. BD ≅ BD</td><td>(a) ____</td></tr><tr><td>4. △ABD ≅ △CBD</td><td>(b) ____</td></tr><tr><td>5. AD ≅ CD</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "reasonA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 3, BD ≅ BD (blank a)?",
          choices: [
            { letter: "A", text: "Reflexive property" },
            { letter: "B", text: "Vertical angles are congruent" },
            { letter: "C", text: "Definition of perpendicular lines" },
            { letter: "D", text: "CPCTC" }
          ],
          correct: "A"
        },
        {
          id: "reasonB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 4, △ABD ≅ △CBD (blank b)?",
          choices: [
            { letter: "A", text: "SSA" },
            { letter: "B", text: "HL" },
            { letter: "C", text: "AAA" },
            { letter: "D", text: "SAS" }
          ],
          correct: "B"
        },
        {
          id: "width",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AD = (x + 3) ft and CD = (3x − 5) ft. How wide is the tent floor, AC?",
          choices: [
            { letter: "A", text: "7 ft" },
            { letter: "B", text: "4 ft" },
            { letter: "C", text: "8 ft" },
            { letter: "D", text: "14 ft" }
          ],
          correct: "D"
        },
        {
          id: "asa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose you did not know AB ≅ CB, but you knew BD ⊥ AC and ∠ABD ≅ ∠CBD. Which criterion would prove △ABD ≅ △CBD?",
          choices: [
            { letter: "A", text: "HL" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "ASA" },
            { letter: "D", text: "SSS" }
          ],
          correct: "C"
        },
        {
          id: "apex",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠ABD = 28°. What is m∠ABC, the angle at the top of the tent?",
          choices: [
            { letter: "A", text: "28°" },
            { letter: "B", text: "56°" },
            { letter: "C", text: "62°" },
            { letter: "D", text: "124°" }
          ],
          correct: "B"
        },
        {
          id: "notenough",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which set of facts is NOT enough to prove two triangles congruent?",
          choices: [
            { letter: "A", text: "Two sides and a non-included angle" },
            { letter: "B", text: "Three pairs of sides" },
            { letter: "C", text: "Two angles and the included side" },
            { letter: "D", text: "A hypotenuse and a leg of right triangles" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr2-frame",
      family: "GEO",
      title: "The Gate Brace",
      kind: "Triangles · G.TR.2",
      blurb: "A gate frame, a diagonal brace, and an indirect proof.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Quadrilateral ABCD with diagonal AC; AB and DC have parallel arrows and one tick mark each\">" +
        "<polygon class=\"ln\" points=\"36,150 216.4,150 261.2,20 80.8,20\"/>" + "<line class=\"ac\" x1=\"36\" y1=\"150\" x2=\"261.2\" y2=\"20\"/>" +
        "<path class=\"thin\" d=\"M98.6 154 L104.6 150 L98.6 146\"/>" + "<path class=\"thin\" d=\"M143.3 24 L149.3 20 L143.3 16\"/>" +
        "<path class=\"thin\" d=\"M155.1 155 L155.1 145\"/>" + "<path class=\"thin\" d=\"M199.8 25 L199.8 15\"/>" +
        "<circle class=\"dt\" cx=\"36\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"216.4\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"261.2\" cy=\"20\" r=\"3\"/><circle class=\"dt\" cx=\"80.8\" cy=\"20\" r=\"3\"/>" +
        "<text x=\"26.8\" y=\"164.2\" text-anchor=\"middle\">A</text>" + "<text x=\"225.6\" y=\"164.2\" text-anchor=\"middle\">B</text>" +
        "<text x=\"270.4\" y=\"15.8\" text-anchor=\"middle\">C</text>" + "<text x=\"71.6\" y=\"15.8\" text-anchor=\"middle\">D</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">A gate frame <strong>ABCD</strong> has a diagonal brace <strong>AC</strong>, with AB ∥ DC and AB ≅ DC. Prove that △ABC ≅ △CDA.</p>" +
        "<table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. AB ∥ DC; AB ≅ DC</td><td>Given</td></tr><tr><td>2. ∠BAC ≅ ∠DCA</td><td>(a) ____</td></tr><tr><td>3. AC ≅ CA</td><td>Reflexive property</td></tr><tr><td>4. △ABC ≅ △CDA</td><td>(b) ____</td></tr><tr><td>5. BC ≅ DA</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "reasonA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 2, ∠BAC ≅ ∠DCA (blank a)?",
          choices: [
            { letter: "A", text: "Corresponding angles are congruent" },
            { letter: "B", text: "Vertical angles are congruent" },
            { letter: "C", text: "Reflexive property" },
            { letter: "D", text: "Alternate interior angles are congruent" }
          ],
          correct: "D"
        },
        {
          id: "reasonB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 4, △ABC ≅ △CDA (blank b)?",
          choices: [
            { letter: "A", text: "ASA" },
            { letter: "B", text: "SSA" },
            { letter: "C", text: "SAS" },
            { letter: "D", text: "AAS" }
          ],
          correct: "C"
        },
        {
          id: "side",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "BC = (4x − 7) in. and DA = (2x + 9) in. How long is BC?",
          choices: [
            { letter: "A", text: "8 in." },
            { letter: "B", text: "25 in." },
            { letter: "C", text: "16 in." },
            { letter: "D", text: "50 in." }
          ],
          correct: "B"
        },
        {
          id: "angle",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠BCA = (3y + 5)⁠° and m∠DAC = (5y − 19)⁠°. What is m∠BCA?",
          choices: [
            { letter: "A", text: "41°" },
            { letter: "B", text: "12°" },
            { letter: "C", text: "26°" },
            { letter: "D", text: "82°" }
          ],
          correct: "A"
        },
        {
          id: "assume",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "A second frame, also named ABCD with brace AC, has BC = 9 in. and DA = 11 in. Lena will prove indirectly that △ABC is not congruent to △CDA. What should she assume first?",
          choices: [
            { letter: "A", text: "△ABC ≇ △CDA" },
            { letter: "B", text: "BC = DA" },
            { letter: "C", text: "△ABC ≅ △CDA" },
            { letter: "D", text: "AB ∥ DC" }
          ],
          correct: "C"
        },
        {
          id: "contradiction",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which statement gives the contradiction that finishes Lena's proof?",
          choices: [
            { letter: "A", text: "AC = CA by the reflexive property." },
            { letter: "B", text: "Alternate interior angles are congruent." },
            { letter: "C", text: "SAS gives △ABC ≅ △CDA." },
            { letter: "D", text: "CPCTC gives BC = DA, but 9 ≠ 11." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-twins",
      family: "GEO",
      title: "Two Triangles, One Shape",
      kind: "Triangles · G.TR.3",
      blurb: "Matching angles, a scale factor and a missing side.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Triangle ABC with AB 6, BC 7 and AC 8 centimeters, and a larger triangle DEF with DE 9 centimeters; angles A and D have one arc, angles B and E have two arcs\">" +
        "<polygon class=\"ln\" points=\"14,128 53.8,64.5 114,128\"/>" + "<polygon class=\"ln\" points=\"156,128 215.8,32.7 306,128\"/>" +
        "<path class=\"thin\" d=\"M28 128 A14 14 0 0 0 21.4 116.1\"/>" + "<path class=\"thin\" d=\"M170 128 A14 14 0 0 0 163.4 116.1\"/>" +
        "<path class=\"thin\" d=\"M47.5 74.6 A12 12 0 0 0 62.1 73.2\"/><path class=\"thin\" d=\"M45.3 78 A16 16 0 0 0 64.8 76.1\"/>" +
        "<path class=\"thin\" d=\"M209.4 42.9 A12 12 0 0 0 224 41.4\"/><path class=\"thin\" d=\"M207.3 46.2 A16 16 0 0 0 226.8 44.3\"/>" +
        "<circle class=\"dt\" cx=\"14\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"53.8\" cy=\"64.5\" r=\"3\"/><circle class=\"dt\" cx=\"114\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"156\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"215.8\" cy=\"32.7\" r=\"3\"/><circle class=\"dt\" cx=\"306\" cy=\"128\" r=\"3\"/>" +
        "<text x=\"5.5\" y=\"141.5\" text-anchor=\"middle\">A</text>" + "<text x=\"51.8\" y=\"56.6\" text-anchor=\"middle\">B</text>" +
        "<text x=\"122.5\" y=\"141.5\" text-anchor=\"middle\">C</text>" + "<text x=\"147.5\" y=\"141.5\" text-anchor=\"middle\">D</text>" +
        "<text x=\"213.7\" y=\"24.9\" text-anchor=\"middle\">E</text>" + "<text x=\"314.5\" y=\"141.5\" text-anchor=\"middle\">F</text>" +
        "<text x=\"24.1\" y=\"95.1\" text-anchor=\"middle\">6</text>" + "<text x=\"92.6\" y=\"93\" text-anchor=\"middle\">7</text>" +
        "<text x=\"64\" y=\"143.5\" text-anchor=\"middle\">8</text>" + "<text x=\"176.1\" y=\"79.2\" text-anchor=\"middle\">9</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">In △ABC and △DEF, ∠A ≅ ∠D and ∠B ≅ ∠E (matching arcs). AB = 6 cm, BC = 7 cm, AC = 8 cm and DE = 9 cm.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that △ABC ∼ △DEF?",
          choices: [
            { letter: "A", text: "SSS∼" },
            { letter: "B", text: "AA" },
            { letter: "C", text: "SAS∼" },
            { letter: "D", text: "ASA" }
          ],
          correct: "B"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement is correct?",
          choices: [
            { letter: "A", text: "△ABC ∼ △EDF" },
            { letter: "B", text: "△CAB ∼ △DEF" },
            { letter: "C", text: "△BCA ∼ △EDF" },
            { letter: "D", text: "△CAB ∼ △FDE" }
          ],
          correct: "D"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from △ABC to △DEF?",
          choices: [
            { letter: "A", text: "2/3" },
            { letter: "B", text: "3" },
            { letter: "C", text: "3/2" },
            { letter: "D", text: "1/2" }
          ],
          correct: "C"
        },
        {
          id: "ef",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is EF?",
          choices: [
            { letter: "A", text: "10.5 cm" },
            { letter: "B", text: "about 4.7 cm" },
            { letter: "C", text: "10 cm" },
            { letter: "D", text: "13.5 cm" }
          ],
          correct: "A"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the perimeter of △DEF?",
          choices: [
            { letter: "A", text: "21 cm" },
            { letter: "B", text: "30 cm" },
            { letter: "C", text: "47.25 cm" },
            { letter: "D", text: "31.5 cm" }
          ],
          correct: "D"
        },
        {
          id: "ghi",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "△GHI has sides of 12 cm, 14 cm and 15 cm. Is △GHI similar to △ABC?",
          choices: [
            { letter: "A", text: "No, because 15/8 ≠ 12/6" },
            { letter: "B", text: "Yes, because 12/6 = 14/7" },
            { letter: "C", text: "Yes, because each side is longer" },
            { letter: "D", text: "No, because the sizes differ" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr3-shadow",
      family: "GEO",
      title: "The Flagpole's Shadow",
      kind: "Triangles · G.TR.3",
      blurb: "A student, a flagpole and two shadows at the same moment.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A flagpole FG with shadow GH of 18 feet, and a 5-foot student PQ with shadow QR of 4 feet; sun rays FH and PR are parallel; right angles at G and Q\">" +
        "<line class=\"thin\" x1=\"14\" y1=\"146\" x2=\"306\" y2=\"146\"/>" + "<line class=\"ln\" x1=\"40\" y1=\"146\" x2=\"40\" y2=\"24.5\"/>" +
        "<line class=\"ln\" x1=\"222\" y1=\"146\" x2=\"222\" y2=\"119\"/>" + "<line class=\"ln dash\" x1=\"40\" y1=\"24.5\" x2=\"137.2\" y2=\"146\"/>" +
        "<line class=\"ln dash\" x1=\"222\" y1=\"119\" x2=\"243.6\" y2=\"146\"/>" + "<line class=\"ac\" x1=\"40\" y1=\"146\" x2=\"137.2\" y2=\"146\"/>" +
        "<line class=\"ac\" x1=\"222\" y1=\"146\" x2=\"243.6\" y2=\"146\"/>" + "<path class=\"thin\" d=\"M40 137 L49 137 L49 146\"/>" +
        "<path class=\"thin\" d=\"M222 139 L229 139 L229 146\"/>" + "<path class=\"thin\" d=\"M126 131.9 A18 18 0 0 0 119.2 146\"/>" +
        "<path class=\"thin\" d=\"M236.1 136.6 A12 12 0 0 0 231.6 146\"/>" +
        "<circle class=\"dt\" cx=\"40\" cy=\"24.5\" r=\"3\"/><circle class=\"dt\" cx=\"40\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"137.2\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"222\" cy=\"119\" r=\"3\"/><circle class=\"dt\" cx=\"222\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"243.6\" cy=\"146\" r=\"3\"/>" +
        "<text x=\"40\" y=\"16.5\" text-anchor=\"middle\">F</text>" + "<text x=\"28.7\" y=\"157.5\" text-anchor=\"middle\">G</text>" +
        "<text x=\"148.5\" y=\"157.5\" text-anchor=\"middle\">H</text>" + "<text x=\"222\" y=\"111\" text-anchor=\"middle\">P</text>" +
        "<text x=\"208.8\" y=\"155.8\" text-anchor=\"middle\">Q</text>" + "<text x=\"256.8\" y=\"155.8\" text-anchor=\"middle\">R</text>" +
        "<text x=\"88.6\" y=\"163\" text-anchor=\"middle\">18 ft</text>" + "<text x=\"232.8\" y=\"165\" text-anchor=\"middle\">4 ft</text>" +
        "<text x=\"204\" y=\"131.5\" text-anchor=\"middle\">5 ft</text>" + "<text class=\"acc\" x=\"26\" y=\"90.3\" text-anchor=\"middle\">?</text>" +
        "</svg></figure>" +
        "<p class=\"geo-given\">At the same moment, a 5-ft student <strong>PQ</strong> casts a 4-ft shadow <strong>QR</strong>, and a flagpole <strong>FG</strong> casts an 18-ft shadow <strong>GH</strong>. Both stand straight up on level ground, and the sun's rays FH and PR are parallel.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is △FGH ∼ △PQR?",
          choices: [
            { letter: "A", text: "SSS∼: all three side lengths are known" },
            { letter: "B", text: "SAS∼: GH/QR = 18/4 with the right angles" },
            { letter: "C", text: "AA: right angles at G and Q, equal angles at H and R" },
            { letter: "D", text: "HL: both are right triangles" }
          ],
          correct: "C"
        },
        {
          id: "height",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How tall is the flagpole?",
          choices: [
            { letter: "A", text: "22.5 ft" },
            { letter: "B", text: "14.4 ft" },
            { letter: "C", text: "19 ft" },
            { letter: "D", text: "90 ft" }
          ],
          correct: "A"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What scale factor maps △PQR onto △FGH?",
          choices: [
            { letter: "A", text: "2/9" },
            { letter: "B", text: "4.5" },
            { letter: "C", text: "14" },
            { letter: "D", text: "3.6" }
          ],
          correct: "B"
        },
        {
          id: "pair",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which post and shadow, measured at the same moment, fit these similar triangles?",
          choices: [
            { letter: "A", text: "a 6-ft post, a 7.5-ft shadow" },
            { letter: "B", text: "a 10-ft post, a 9-ft shadow" },
            { letter: "C", text: "a 4-ft post, a 5-ft shadow" },
            { letter: "D", text: "a 6-ft post, a 4.8-ft shadow" }
          ],
          correct: "D"
        },
        {
          id: "later",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Later, the student's shadow is 6 ft long. How long is the flagpole's shadow then?",
          choices: [
            { letter: "A", text: "27 ft" },
            { letter: "B", text: "20 ft" },
            { letter: "C", text: "33.75 ft" },
            { letter: "D", text: "21.6 ft" }
          ],
          correct: "A"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement matches the vertices correctly?",
          choices: [
            { letter: "A", text: "△PQR ∼ △HGF" },
            { letter: "B", text: "△PQR ∼ △FGH" },
            { letter: "C", text: "△QPR ∼ △FGH" },
            { letter: "D", text: "△PRQ ∼ △FGH" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-bracket",
      family: "GEO",
      title: "The Shelf Bracket",
      kind: "Triangles · G.TR.3",
      blurb: "A crossbar parallel to one side makes a smaller triangle.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Triangle ABC with D on AB and E on AC, and segment DE parallel to BC; AD 4, DB 6, AE 5 and DE 6 inches\">" +
        "<polygon class=\"ln\" points=\"116.4,28 32,152 257,152\"/>" + "<line class=\"ac\" x1=\"82.6\" y1=\"77.6\" x2=\"172.6\" y2=\"77.6\"/>" +
        "<path class=\"thin\" d=\"M126.1 81.6 L132.1 77.6 L126.1 73.6\"/>" + "<path class=\"thin\" d=\"M149.8 156 L155.8 152 L149.8 148\"/>" +
        "<circle class=\"dt\" cx=\"116.4\" cy=\"28\" r=\"3\"/><circle class=\"dt\" cx=\"32\" cy=\"152\" r=\"3\"/><circle class=\"dt\" cx=\"257\" cy=\"152\" r=\"3\"/><circle class=\"dt\" cx=\"82.6\" cy=\"77.6\" r=\"3\"/><circle class=\"dt\" cx=\"172.6\" cy=\"77.6\" r=\"3\"/>" +
        "<text x=\"116.4\" y=\"20\" text-anchor=\"middle\">A</text>" + "<text x=\"20.7\" y=\"163.5\" text-anchor=\"middle\">B</text>" +
        "<text x=\"268.3\" y=\"163.5\" text-anchor=\"middle\">C</text>" + "<text x=\"69.6\" y=\"82.6\" text-anchor=\"middle\">D</text>" +
        "<text x=\"185.6\" y=\"82.6\" text-anchor=\"middle\">E</text>" + "<text x=\"89.9\" y=\"51.2\" text-anchor=\"middle\">4</text>" +
        "<text x=\"47.7\" y=\"113.2\" text-anchor=\"middle\">6</text>" + "<text x=\"152.4\" y=\"48.8\" text-anchor=\"middle\">5</text>" +
        "<text x=\"127.6\" y=\"70.6\" text-anchor=\"middle\">6</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">A shelf bracket is the triangle <strong>ABC</strong>. A crossbar <strong>DE</strong> joins D on AB to E on AC, and DE ∥ BC. AD = 4 in., DB = 6 in., AE = 5 in. and DE = 6 in.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is △ADE ∼ △ABC?",
          choices: [
            { letter: "A", text: "SAS∼: AD/DB = AE/EC" },
            { letter: "B", text: "SSS∼: all sides are proportional" },
            { letter: "C", text: "ASA: DE ∥ BC" },
            { letter: "D", text: "AA: ∠A is shared and ∠ADE ≅ ∠ABC" }
          ],
          correct: "D"
        },
        {
          id: "bc",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is BC?",
          choices: [
            { letter: "A", text: "9 in." },
            { letter: "B", text: "15 in." },
            { letter: "C", text: "2.4 in." },
            { letter: "D", text: "12 in." }
          ],
          correct: "B"
        },
        {
          id: "ec",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is EC?",
          choices: [
            { letter: "A", text: "7.5 in." },
            { letter: "B", text: "about 3.3 in." },
            { letter: "C", text: "12.5 in." },
            { letter: "D", text: "7 in." }
          ],
          correct: "A"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor of the dilation centered at A that maps △ADE onto △ABC?",
          choices: [
            { letter: "A", text: "2/5" },
            { letter: "B", text: "3/2" },
            { letter: "C", text: "5/2" },
            { letter: "D", text: "2/3" }
          ],
          correct: "C"
        },
        {
          id: "marco",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "On another bracket, AD = 2, DB = 3, AE = 3 and EC = 4.4 (inches). Marco says DE ∥ BC. Is he right?",
          choices: [
            { letter: "A", text: "Yes; both ratios round to 0.7" },
            { letter: "B", text: "No; 2/3 ≠ 3/4.4" },
            { letter: "C", text: "Yes; D and E are nearer to A" },
            { letter: "D", text: "No; AD ≠ AE" }
          ],
          correct: "B"
        },
        {
          id: "notTrue",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Which proportion is NOT true for this bracket?",
          choices: [
            { letter: "A", text: "AD/AB = DE/BC" },
            { letter: "B", text: "AD/DB = AE/EC" },
            { letter: "C", text: "AE/AC = DE/BC" },
            { letter: "D", text: "AD/DB = DE/BC" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-pond",
      family: "GEO",
      title: "Across the Pond",
      kind: "Triangles · G.TR.3",
      blurb: "Stakes, crossing lines and a distance no one can walk.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A pond between points A and B; segments AD and BC cross at E below the pond; AE 36, ED 12, BE 30, EC 10 and DC 14 meters\">" +
        "<ellipse class=\"sh2\" cx=\"159.4\" cy=\"30\" rx=\"62.4\" ry=\"19\"/>" + "<line class=\"ac dash\" x1=\"88\" y1=\"34\" x2=\"230.8\" y2=\"34\"/>" +
        "<line class=\"ln\" x1=\"88\" y1=\"34\" x2=\"204.6\" y2=\"148.2\"/>" + "<line class=\"ln\" x1=\"230.8\" y1=\"34\" x2=\"157\" y2=\"148.2\"/>" +
        "<line class=\"ln\" x1=\"157\" y1=\"148.2\" x2=\"204.6\" y2=\"148.2\"/>" +
        "<circle class=\"dt\" cx=\"88\" cy=\"34\" r=\"3\"/><circle class=\"dt\" cx=\"230.8\" cy=\"34\" r=\"3\"/><circle class=\"dt\" cx=\"157\" cy=\"148.2\" r=\"3\"/><circle class=\"dt\" cx=\"204.6\" cy=\"148.2\" r=\"3\"/><circle class=\"dt\" cx=\"175.4\" cy=\"119.7\" r=\"3\"/>" +
        "<text x=\"75\" y=\"39\" text-anchor=\"middle\">A</text>" + "<text x=\"243.8\" y=\"39\" text-anchor=\"middle\">B</text>" +
        "<text x=\"175.4\" y=\"109.7\" text-anchor=\"middle\">E</text>" + "<text x=\"145.7\" y=\"159.7\" text-anchor=\"middle\">C</text>" +
        "<text x=\"215.8\" y=\"159.7\" text-anchor=\"middle\">D</text>" + "<text class=\"sm\" x=\"120.2\" y=\"92.6\" text-anchor=\"middle\">36 m</text>" +
        "<text class=\"sm\" x=\"217.7\" y=\"90.2\" text-anchor=\"middle\">30 m</text>" +
        "<text class=\"sm\" x=\"201.5\" y=\"126.2\" text-anchor=\"middle\">12 m</text>" +
        "<text class=\"sm\" x=\"151.7\" y=\"128.5\" text-anchor=\"middle\">10 m</text>" +
        "<text class=\"sm\" x=\"180.8\" y=\"161.7\" text-anchor=\"middle\">14 m</text>" +
        "<text class=\"sm\" x=\"159.4\" y=\"26\" text-anchor=\"middle\">pond</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">To find the distance <strong>AB</strong> across a pond, a crew stakes out <strong>C</strong> and <strong>D</strong> so that AD and BC are straight and cross at <strong>E</strong>. AE = 36 m, ED = 12 m, BE = 30 m, EC = 10 m and DC = 14 m.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that △AEB ∼ △DEC?",
          choices: [
            { letter: "A", text: "SAS∼" },
            { letter: "B", text: "AA" },
            { letter: "C", text: "SSS∼" },
            { letter: "D", text: "SAS" }
          ],
          correct: "A"
        },
        {
          id: "ratios",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Along with the vertical angles at E, which fact justifies the similarity?",
          choices: [
            { letter: "A", text: "AE/EC = BE/ED" },
            { letter: "B", text: "AE − ED = BE − EC" },
            { letter: "C", text: "AE/DE = BE/CE = 3" },
            { letter: "D", text: "AB/DC = 3" }
          ],
          correct: "C"
        },
        {
          id: "ab",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How far is it across the pond from A to B?",
          choices: [
            { letter: "A", text: "about 4.7 m" },
            { letter: "B", text: "38 m" },
            { letter: "C", text: "56 m" },
            { letter: "D", text: "42 m" }
          ],
          correct: "D"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which statement lists the similar triangles with matching vertices in order?",
          choices: [
            { letter: "A", text: "△AEB ∼ △CED" },
            { letter: "B", text: "△BEA ∼ △CED" },
            { letter: "C", text: "△ABE ∼ △CDE" },
            { letter: "D", text: "△EBA ∼ △EDC" }
          ],
          correct: "B"
        },
        {
          id: "second",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Another crew's stakes give AE = 20 m, ED = 8 m, BE = 15 m and EC = 5 m. Can they use the same method?",
          choices: [
            { letter: "A", text: "Yes; the vertical angles give AA" },
            { letter: "B", text: "No; SAS∼ needs a right angle" },
            { letter: "C", text: "No; 20/8 ≠ 15/5, so not similar" },
            { letter: "D", text: "Yes; AE is still the longest" }
          ],
          correct: "C"
        },
        {
          id: "parallel",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Because △AEB ∼ △DEC, ∠A ≅ ∠D. What else must be true?",
          choices: [
            { letter: "A", text: "AB ∥ DC" },
            { letter: "B", text: "AB ≅ DC" },
            { letter: "C", text: "AE ≅ ED" },
            { letter: "D", text: "∠A ≅ ∠B" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr4-sign",
      family: "GEO",
      title: "A Square Tile and a Triangle Sign",
      kind: "Triangles · G.TR.4",
      blurb: "A diagonal and an altitude make special right triangles.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Square ABCD with 8-inch sides and diagonal AC; equilateral triangle PQR with 10-inch sides and altitude PS meeting QR at a right angle at its midpoint S\">" +
        "<polygon class=\"ln\" points=\"20,140 124,140 124,36 20,36\"/>" + "<line class=\"ac\" x1=\"20\" y1=\"140\" x2=\"124\" y2=\"36\"/>" +
        "<path class=\"thin\" d=\"M116 140 L116 132 L124 132\"/>" + "<path class=\"thin\" d=\"M20 44 L28 44 L28 36\"/>" +
        "<polygon class=\"ln\" points=\"237,27.4 172,140 302,140\"/>" + "<line class=\"ac\" x1=\"237\" y1=\"27.4\" x2=\"237\" y2=\"140\"/>" +
        "<path class=\"thin\" d=\"M245 140 L245 132 L237 132\"/>" + "<path class=\"thin\" d=\"M188 140 A16 16 0 0 0 180 126.1\"/>" +
        "<circle class=\"dt\" cx=\"20\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"124\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"124\" cy=\"36\" r=\"3\"/><circle class=\"dt\" cx=\"20\" cy=\"36\" r=\"3\"/><circle class=\"dt\" cx=\"237\" cy=\"27.4\" r=\"3\"/><circle class=\"dt\" cx=\"172\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"302\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"237\" cy=\"140\" r=\"3\"/>" +
        "<text x=\"11.5\" y=\"153.5\" text-anchor=\"middle\">A</text>" + "<text x=\"132.5\" y=\"153.5\" text-anchor=\"middle\">B</text>" +
        "<text x=\"132.5\" y=\"32.5\" text-anchor=\"middle\">C</text>" + "<text x=\"11.5\" y=\"32.5\" text-anchor=\"middle\">D</text>" +
        "<text x=\"237\" y=\"19.4\" text-anchor=\"middle\">P</text>" + "<text x=\"163.5\" y=\"153.5\" text-anchor=\"middle\">Q</text>" +
        "<text x=\"310.5\" y=\"153.5\" text-anchor=\"middle\">R</text>" + "<text x=\"237\" y=\"160\" text-anchor=\"middle\">S</text>" +
        "<text class=\"sm\" x=\"72\" y=\"153.5\" text-anchor=\"middle\">8 in.</text>" +
        "<text class=\"sm\" x=\"185.4\" y=\"76.7\" text-anchor=\"middle\">10 in.</text>" +
        "<text class=\"sm\" x=\"198\" y=\"129\" text-anchor=\"middle\">60°</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">Square tile <strong>ABCD</strong> has 8-in. sides and a diagonal <strong>AC</strong>. Triangle sign <strong>PQR</strong> is equilateral with 10-in. sides; its altitude <strong>PS</strong> meets QR at its midpoint S.</p>",
      claims: [
        {
          id: "diagonal",
          sol: "G.TR.4",
          sub: "G.TR.4.2",
          stem: "How long is the diagonal AC?",
          choices: [
            { letter: "A", text: "16 in." },
            { letter: "B", text: "8√2 in." },
            { letter: "C", text: "8√3 in." },
            { letter: "D", text: "4√2 in." }
          ],
          correct: "B"
        },
        {
          id: "altitude",
          sol: "G.TR.4",
          sub: "G.TR.4.2",
          stem: "How long is the altitude PS?",
          choices: [
            { letter: "A", text: "5 in." },
            { letter: "B", text: "5√2 in." },
            { letter: "C", text: "10√3 in." },
            { letter: "D", text: "5√3 in." }
          ],
          correct: "D"
        },
        {
          id: "leg45",
          sol: "G.TR.4",
          sub: "G.TR.4.2",
          stem: "A 45°-45°-90° triangle has a hypotenuse of 12 cm. How long is each leg?",
          choices: [
            { letter: "A", text: "6√2 cm" },
            { letter: "B", text: "12√2 cm" },
            { letter: "C", text: "6 cm" },
            { letter: "D", text: "6√3 cm" }
          ],
          correct: "A"
        },
        {
          id: "leg60",
          sol: "G.TR.4",
          sub: "G.TR.4.2",
          stem: "A 30°-60°-90° triangle has a hypotenuse of 14 cm. How long is its longer leg?",
          choices: [
            { letter: "A", text: "7 cm" },
            { letter: "B", text: "14√3 cm" },
            { letter: "C", text: "7√3 cm" },
            { letter: "D", text: "7√2 cm" }
          ],
          correct: "C"
        },
        {
          id: "tanQ",
          sol: "G.TR.4",
          sub: "G.TR.4.3",
          stem: "In right triangle PSQ, what is tan Q?",
          choices: [
            { letter: "A", text: "√3/2" },
            { letter: "B", text: "1/2" },
            { letter: "C", text: "√3/3" },
            { letter: "D", text: "√3" }
          ],
          correct: "D"
        },
        {
          id: "classify",
          sol: "G.TR.4",
          sub: "G.TR.4.1",
          stem: "A triangle has sides of 9 cm, 12 cm and 16 cm. Which describes it?",
          choices: [
            { letter: "A", text: "Acute, because 16² > 9² + 12²" },
            { letter: "B", text: "Obtuse, because 16² > 9² + 12²" },
            { letter: "C", text: "Right, because 9 + 12 > 16" },
            { letter: "D", text: "Acute, because 16 is less than 9 + 12" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr4-ramp",
      family: "GEO",
      title: "The Skate Park Ramp",
      kind: "Triangles · G.TR.4",
      blurb: "Sine, cosine and tangent on a 10-foot ramp.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 146\" role=\"img\" aria-label=\"Right triangle RST with the right angle at T: ramp RS is 10 feet long and makes a 17 degree angle with the ground at R\">" +
        "<polygon class=\"sh2\" points=\"30,124 269.1,50.9 269.1,124\"/>" + "<line class=\"ac\" x1=\"30\" y1=\"124\" x2=\"269.1\" y2=\"50.9\"/>" +
        "<path class=\"thin\" d=\"M259.1 124 L259.1 114 L269.1 114\"/>" + "<path class=\"thin\" d=\"M74 124 A44 44 0 0 0 72.1 111.1\"/>" +
        "<circle class=\"dt\" cx=\"30\" cy=\"124\" r=\"3\"/><circle class=\"dt\" cx=\"269.1\" cy=\"50.9\" r=\"3\"/><circle class=\"dt\" cx=\"269.1\" cy=\"124\" r=\"3\"/>" +
        "<text x=\"17.8\" y=\"133.4\" text-anchor=\"middle\">R</text>" + "<text x=\"275.6\" y=\"44.6\" text-anchor=\"middle\">S</text>" +
        "<text x=\"278.3\" y=\"138.2\" text-anchor=\"middle\">T</text>" + "<text x=\"144.6\" y=\"76.5\" text-anchor=\"middle\">10 ft</text>" +
        "<text x=\"91.3\" y=\"119.8\" text-anchor=\"middle\">17°</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">The side of a skate ramp is the right triangle <strong>RST</strong>, with the right angle at <strong>T</strong>. The ramp surface RS is 10 ft long and makes a 17° angle with the level ground at <strong>R</strong>.</p>",
      claims: [
        {
          id: "ratio",
          sol: "G.TR.4",
          sub: "G.TR.4.3",
          stem: "Which ratio is equal to sin R?",
          choices: [
            { letter: "A", text: "RT/RS" },
            { letter: "B", text: "ST/RT" },
            { letter: "C", text: "ST/RS" },
            { letter: "D", text: "RS/ST" }
          ],
          correct: "C"
        },
        {
          id: "height",
          sol: "G.TR.4",
          sub: "G.TR.4.3",
          stem: "To the nearest tenth of a foot, how tall is the ramp (ST)?",
          choices: [
            { letter: "A", text: "2.9 ft" },
            { letter: "B", text: "9.6 ft" },
            { letter: "C", text: "3.1 ft" },
            { letter: "D", text: "34.2 ft" }
          ],
          correct: "A"
        },
        {
          id: "run",
          sol: "G.TR.4",
          sub: "G.TR.4.3",
          stem: "To the nearest tenth of a foot, how long is the ramp's base (RT)?",
          choices: [
            { letter: "A", text: "10.5 ft" },
            { letter: "B", text: "9.6 ft" },
            { letter: "C", text: "2.9 ft" },
            { letter: "D", text: "32.7 ft" }
          ],
          correct: "B"
        },
        {
          id: "angle",
          sol: "G.TR.4",
          sub: "G.TR.4.4",
          stem: "A second ramp rises 3 ft over a horizontal run of 8 ft. To the nearest degree, what angle does it make with the ground?",
          choices: [
            { letter: "A", text: "22°" },
            { letter: "B", text: "68°" },
            { letter: "C", text: "69°" },
            { letter: "D", text: "21°" }
          ],
          correct: "D"
        },
        {
          id: "beginner",
          sol: "G.TR.4",
          sub: "G.TR.4.4",
          stem: "A beginner ramp must make an angle of at most 12° with the ground. If it is 2.5 ft tall, what is the shortest horizontal run it can have, to the nearest tenth of a foot?",
          choices: [
            { letter: "A", text: "11.8 ft" },
            { letter: "B", text: "0.5 ft" },
            { letter: "C", text: "12.0 ft" },
            { letter: "D", text: "2.4 ft" }
          ],
          correct: "A"
        },
        {
          id: "surface",
          sol: "G.TR.4",
          sub: "G.TR.4.1",
          stem: "A third ramp has a rise of 5 ft and a run of 12 ft. How long is its sloped surface?",
          choices: [
            { letter: "A", text: "17 ft" },
            { letter: "B", text: "about 10.9 ft" },
            { letter: "C", text: "13 ft" },
            { letter: "D", text: "7 ft" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr4-lighthouse",
      family: "GEO",
      title: "The Lighthouse and the Boat",
      kind: "Triangles · G.TR.4",
      blurb: "Angles of depression from a 120-foot light.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 130\" role=\"img\" aria-label=\"Lighthouse LB, 120 feet tall, with a right angle at its base B; a horizontal dashed line from the light L; the line of sight from L down to the boat S makes a 14 degree angle of depression with the horizontal\">" +
        "<polygon class=\"sh2\" points=\"22,104 42,104 42,44 27,44\"/>" + "<line class=\"thin\" x1=\"16\" y1=\"104\" x2=\"312\" y2=\"104\"/>" +
        "<line class=\"thin dash\" x1=\"42\" y1=\"44\" x2=\"306\" y2=\"44\"/>" + "<line class=\"ac\" x1=\"42\" y1=\"44\" x2=\"282.6\" y2=\"104\"/>" +
        "<line class=\"ln\" x1=\"42\" y1=\"44\" x2=\"42\" y2=\"104\"/>" + "<path class=\"thin\" d=\"M42 96 L50 96 L50 104\"/>" +
        "<path class=\"thin\" d=\"M98 44 A56 56 0 0 1 96.3 57.5\"/>" + "<path class=\"thin\" d=\"M253.5 96.7 A30 30 0 0 0 252.6 104\"/>" +
        "<circle class=\"dt\" cx=\"42\" cy=\"44\" r=\"3\"/><circle class=\"dt\" cx=\"42\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"282.6\" cy=\"104\" r=\"3\"/>" +
        "<text x=\"32.8\" y=\"39.8\" text-anchor=\"middle\">L</text>" + "<text x=\"42\" y=\"124\" text-anchor=\"middle\">B</text>" +
        "<text x=\"282.6\" y=\"124\" text-anchor=\"middle\">S</text>" + "<text class=\"sm\" x=\"70\" y=\"90\" text-anchor=\"middle\">120 ft</text>" +
        "<text class=\"sm\" x=\"123.4\" y=\"58\" text-anchor=\"middle\">14°</text>" +
        "<text class=\"sm\" x=\"262\" y=\"39\" text-anchor=\"middle\">horizontal</text>" + "</svg></figure>" +
        "<p class=\"geo-given\">The light <strong>L</strong> is 120 ft above <strong>B</strong>, the base of the lighthouse at sea level. From L, the angle of depression to a boat <strong>S</strong> is 14°. Treat LB as perpendicular to the water.</p>",
      claims: [
        {
          id: "same",
          sol: "G.TR.4",
          sub: "G.TR.4.4",
          stem: "Which angle of △LBS has the same measure as the 14° angle of depression?",
          choices: [
            { letter: "A", text: "∠BLS" },
            { letter: "B", text: "∠LBS" },
            { letter: "C", text: "None of its angles" },
            { letter: "D", text: "∠LSB" }
          ],
          correct: "D"
        },
        {
          id: "distance",
          sol: "G.TR.4",
          sub: "G.TR.4.4",
          stem: "To the nearest foot, how far is the boat from the base of the lighthouse (BS)?",
          choices: [
            { letter: "A", text: "30 ft" },
            { letter: "B", text: "481 ft" },
            { letter: "C", text: "496 ft" },
            { letter: "D", text: "116 ft" }
          ],
          correct: "B"
        },
        {
          id: "sight",
          sol: "G.TR.4",
          sub: "G.TR.4.3",
          stem: "To the nearest foot, how long is the line of sight LS?",
          choices: [
            { letter: "A", text: "481 ft" },
            { letter: "B", text: "124 ft" },
            { letter: "C", text: "496 ft" },
            { letter: "D", text: "29 ft" }
          ],
          correct: "C"
        },
        {
          id: "farther",
          sol: "G.TR.4",
          sub: "G.TR.4.4",
          stem: "Later, the angle of depression to the boat is 8°. To the nearest foot, how much farther from B is the boat now?",
          choices: [
            { letter: "A", text: "373 ft" },
            { letter: "B", text: "854 ft" },
            { letter: "C", text: "366 ft" },
            { letter: "D", text: "13 ft" }
          ],
          correct: "A"
        },
        {
          id: "second",
          sol: "G.TR.4",
          sub: "G.TR.4.3",
          stem: "A second boat is 300 ft from B. To the nearest degree, what is the angle of depression from L to that boat?",
          choices: [
            { letter: "A", text: "68°" },
            { letter: "B", text: "22°" },
            { letter: "C", text: "24°" },
            { letter: "D", text: "66°" }
          ],
          correct: "B"
        },
        {
          id: "special",
          sol: "G.TR.4",
          sub: "G.TR.4.2",
          stem: "How far from B is a boat when the angle of depression is 30°? Give an exact answer.",
          choices: [
            { letter: "A", text: "40√3 ft" },
            { letter: "B", text: "240 ft" },
            { letter: "C", text: "60 ft" },
            { letter: "D", text: "120√3 ft" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
