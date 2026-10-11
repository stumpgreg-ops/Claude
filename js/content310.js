/* SOL Labyrinth — Geometry game (family GEO), G.TR.1 (Virginia 2023 Geometry SOL): triangle side and angle
   relationships, the triangle inequality, the angle sum and the exterior angle theorem. Modes: maze (a school building
   and its grounds) and raid (sports and games). Original items only. Every numeric answer and every distractor was
   computed (each distractor is a named mistake), and every figure coordinate was computed. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-tr1-maze-hallways",
      family: "GEO",
      mode: "maze",
      title: "Three Hallways",
      kind: "Triangles · G.TR.1",
      blurb: "Hallways join the library, the office and the cafeteria.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Triangle LMC of hallways: angle L is 47 degrees and angle M is 71 degrees; hallway LC continues straight past C to the gym door D\"><polygon class=\"ln\" points=\"40,142 148.3,25.9 210,142\"/><line class=\"ln\" x1=\"210\" y1=\"142\" x2=\"282\" y2=\"142\"/><path class=\"thin\" d=\"M60 142 A20 20 0 0 0 53.6 127.4\"/><path class=\"thin\" d=\"M136 39.1 A18 18 0 0 0 156.7 41.8\"/><path class=\"ac\" d=\"M225 142 A15 15 0 0 0 203 128.8\"/><circle class=\"dt\" cx=\"40\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"148.3\" cy=\"25.9\" r=\"3\"/><circle class=\"dt\" cx=\"210\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"282\" cy=\"142\" r=\"3\"/><text x=\"28\" y=\"151\" text-anchor=\"middle\">L</text><text x=\"148.3\" y=\"17.9\" text-anchor=\"middle\">M</text><text x=\"210\" y=\"164\" text-anchor=\"middle\">C</text><text x=\"282\" y=\"164\" text-anchor=\"middle\">D</text><text x=\"76.7\" y=\"131.1\" text-anchor=\"middle\">47°</text><text x=\"143.3\" y=\"68.6\" text-anchor=\"middle\">71°</text><text class=\"sm\" x=\"274\" y=\"132\" text-anchor=\"middle\">gym door</text></svg></figure><p class=\"geo-given\">Three straight hallways join the library <strong>L</strong>, the main office <strong>M</strong> and the cafeteria <strong>C</strong>. m∠L = 47° and m∠M = 71°. Hallway LC continues straight past C to the gym door <strong>D</strong>.</p>",
      claims: [
        {
          id: "angle-c",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠LCM, the angle inside the triangle at the cafeteria?",
          choices: [
            { letter: "A", text: "118°" },
            { letter: "B", text: "133°" },
            { letter: "C", text: "62°" },
            { letter: "D", text: "242°" }
          ],
          correct: "C"
        },
        {
          id: "door",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠MCD, the angle between hallway CM and the hallway on to the gym door?",
          choices: [
            { letter: "A", text: "118°" },
            { letter: "B", text: "62°" },
            { letter: "C", text: "24°" },
            { letter: "D", text: "109°" }
          ],
          correct: "A"
        },
        {
          id: "longest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which hallway is the longest?",
          choices: [
            { letter: "A", text: "LM" },
            { letter: "B", text: "MC" },
            { letter: "C", text: "You cannot tell without the lengths." },
            { letter: "D", text: "LC" }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the hallways from shortest to longest?",
          choices: [
            { letter: "A", text: "LC, LM, MC" },
            { letter: "B", text: "MC, LM, LC" },
            { letter: "C", text: "LM, MC, LC" },
            { letter: "D", text: "MC, LC, LM" }
          ],
          correct: "B"
        },
        {
          id: "third",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A new wing will have a triangle of hallways. Two of them are 30 m and 45 m long. Which could be the length of the third hallway?",
          choices: [
            { letter: "A", text: "15 m" },
            { letter: "B", text: "75 m" },
            { letter: "C", text: "52 m" },
            { letter: "D", text: "80 m" }
          ],
          correct: "C"
        },
        {
          id: "form",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Could three hallways of 18 m, 25 m and 45 m form a triangle?",
          choices: [
            { letter: "A", text: "No, because 18 + 25 is less than 45." },
            { letter: "B", text: "Yes, because 25 + 45 is greater than 18." },
            { letter: "C", text: "Yes, because 18 + 45 is greater than 25." },
            { letter: "D", text: "No, because the three lengths are all different." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr1-maze-bus-island",
      family: "GEO",
      mode: "maze",
      title: "The Bus Loop Island",
      kind: "Triangles · G.TR.1",
      blurb: "A grass island with two equal curbs.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Isosceles triangle ABC with tick marks showing AB congruent to CB; angle A is 5x minus 12 degrees and angle BCA is 3x plus 14 degrees; side CB is extended past B to D\"><polygon class=\"ln\" points=\"72.6,146 160,30 247.4,146\"/><line class=\"ln\" x1=\"160\" y1=\"30\" x2=\"144.4\" y2=\"9.2\"/><line class=\"thin\" x1=\"121.1\" y1=\"91.6\" x2=\"111.5\" y2=\"84.4\"/><line class=\"thin\" x1=\"208.5\" y1=\"84.4\" x2=\"198.9\" y2=\"91.6\"/><path class=\"thin\" d=\"M88.6 146 A16 16 0 0 0 82.2 133.2\"/><path class=\"thin\" d=\"M231.4 146 A16 16 0 0 1 237.8 133.2\"/><path class=\"ac\" d=\"M151.6 41.2 A14 14 0 0 1 151.6 18.8\"/><circle class=\"dt\" cx=\"72.6\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"247.4\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"144.4\" cy=\"9.2\" r=\"3\"/><text x=\"59.6\" y=\"151\" text-anchor=\"middle\">A</text><text x=\"260.4\" y=\"151\" text-anchor=\"middle\">C</text><text x=\"173\" y=\"33\" text-anchor=\"middle\">B</text><text x=\"132.4\" y=\"14.2\" text-anchor=\"middle\">D</text><text class=\"sm\" x=\"118.6\" y=\"142\" text-anchor=\"middle\">(5x − 12)°</text><text class=\"sm\" x=\"201.4\" y=\"142\" text-anchor=\"middle\">(3x + 14)°</text></svg></figure><p class=\"geo-given\">A grass island in the bus loop is the triangle <strong>ABC</strong>, with AB ≅ CB. m∠A = (5x − 12)⁠° and m∠BCA = (3x + 14)⁠°. The curb CB continues straight past B to a sign post <strong>D</strong>.</p>",
      claims: [
        {
          id: "x",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is the value of x?",
          choices: [
            { letter: "A", text: "22.25" },
            { letter: "B", text: "11" },
            { letter: "C", text: "1" },
            { letter: "D", text: "13" }
          ],
          correct: "D"
        },
        {
          id: "apex",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ABC, the angle at the tip of the island?",
          choices: [
            { letter: "A", text: "53°" },
            { letter: "B", text: "74°" },
            { letter: "C", text: "106°" },
            { letter: "D", text: "127°" }
          ],
          correct: "B"
        },
        {
          id: "ext",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ABD?",
          choices: [
            { letter: "A", text: "74°" },
            { letter: "B", text: "53°" },
            { letter: "C", text: "106°" },
            { letter: "D", text: "127°" }
          ],
          correct: "C"
        },
        {
          id: "longest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which side of the island is the longest?",
          choices: [
            { letter: "A", text: "AC" },
            { letter: "B", text: "AB" },
            { letter: "C", text: "AB and BC tie for longest" },
            { letter: "D", text: "All three sides are equal" }
          ],
          correct: "A"
        },
        {
          id: "order50",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Another island is also isosceles, with AB ≅ CB, but its angle at B is 50°. Which list orders its sides from shortest to longest?",
          choices: [
            { letter: "A", text: "AC, then AB = BC" },
            { letter: "B", text: "AB = BC, then AC" },
            { letter: "C", text: "AB, then BC, then AC" },
            { letter: "D", text: "All three sides are equal" }
          ],
          correct: "A"
        },
        {
          id: "range",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Another isosceles island will have two 9 m curbs. Which inequality gives all possible lengths x of its third curb, in meters?",
          choices: [
            { letter: "A", text: "9 < x < 18" },
            { letter: "B", text: "0 < x < 9" },
            { letter: "C", text: "0 < x ≤ 18" },
            { letter: "D", text: "0 < x < 18" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr1-maze-walkways",
      family: "GEO",
      mode: "maze",
      title: "Parking Lot Walkways",
      kind: "Triangles · G.TR.1",
      blurb: "Five walkways, two triangles and one diagonal.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Quadrilateral ABCD of walkways with diagonal BD. In triangle ABD, angle A is 6x degrees, angle ABD is x plus 8 degrees and angle ADB is x plus 12 degrees. In triangle BCD, angle DBC is 105 degrees and angle C is 52 degrees\"><polygon class=\"ln\" points=\"167.2,18.3 70,70 46.9,156.2 250,70\"/><line class=\"ln\" x1=\"70\" y1=\"70\" x2=\"250\" y2=\"70\"/><path class=\"thin\" d=\"M156.6 23.9 A12 12 0 0 0 177.4 24.7\"/><path class=\"thin\" d=\"M85.9 61.5 A18 18 0 0 1 88 70\"/><path class=\"thin\" d=\"M236.4 61.5 A16 16 0 0 0 234 70\"/><path class=\"thin\" d=\"M85 70 A15 15 0 0 1 66.1 84.5\"/><path class=\"thin\" d=\"M206 70 A44 44 0 0 0 209.5 87.2\"/><path class=\"thin\" d=\"M51 140.7 A16 16 0 0 1 61.6 149.9\"/><circle class=\"dt\" cx=\"167.2\" cy=\"18.3\" r=\"3\"/><circle class=\"dt\" cx=\"70\" cy=\"70\" r=\"3\"/><circle class=\"dt\" cx=\"46.9\" cy=\"156.2\" r=\"3\"/><circle class=\"dt\" cx=\"250\" cy=\"70\" r=\"3\"/><text x=\"178.2\" y=\"15.3\" text-anchor=\"middle\">A</text><text x=\"57\" y=\"73\" text-anchor=\"middle\">B</text><text x=\"263\" y=\"75\" text-anchor=\"middle\">D</text><text x=\"33.9\" y=\"163.2\" text-anchor=\"middle\">C</text><text class=\"sm\" x=\"167.2\" y=\"43.3\" text-anchor=\"middle\">6x°</text><text class=\"sm\" x=\"124\" y=\"67\" text-anchor=\"middle\">(x + 8)°</text><text class=\"sm\" x=\"196\" y=\"67\" text-anchor=\"middle\">(x + 12)°</text><text class=\"sm\" x=\"88.3\" y=\"97.8\" text-anchor=\"middle\">105°</text><text class=\"sm\" x=\"66.6\" y=\"137.6\" text-anchor=\"middle\">52°</text></svg></figure><p class=\"geo-given\">Walkways in the parking lot form the quadrilateral <strong>ABCD</strong>, with a diagonal walkway <strong>BD</strong>. In △ABD, m∠A = 6x°, m∠ABD = (x + 8)⁠° and m∠ADB = (x + 12)⁠°. In △BCD, m∠DBC = 105° and m∠C = 52°.</p>",
      claims: [
        {
          id: "angle-a",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠A?",
          choices: [
            { letter: "A", text: "20" },
            { letter: "B", text: "120°" },
            { letter: "C", text: "60°" },
            { letter: "D", text: "28°" }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the sides of △ABD from shortest to longest?",
          choices: [
            { letter: "A", text: "BD, AB, AD" },
            { letter: "B", text: "AB, AD, BD" },
            { letter: "C", text: "BD, AD, AB" },
            { letter: "D", text: "AD, AB, BD" }
          ],
          correct: "D"
        },
        {
          id: "longest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which of the five walkways is the longest?",
          choices: [
            { letter: "A", text: "BD" },
            { letter: "B", text: "BC" },
            { letter: "C", text: "DC" },
            { letter: "D", text: "AB" }
          ],
          correct: "C"
        },
        {
          id: "not-true",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement is NOT true?",
          choices: [
            { letter: "A", text: "AB is longer than DC." },
            { letter: "B", text: "BD is longer than AB." },
            { letter: "C", text: "DC is longer than BD." },
            { letter: "D", text: "BC is shorter than BD." }
          ],
          correct: "A"
        },
        {
          id: "corner",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ADC, the whole corner angle at D?",
          choices: [
            { letter: "A", text: "23°" },
            { letter: "B", text: "55°" },
            { letter: "C", text: "125°" },
            { letter: "D", text: "157°" }
          ],
          correct: "B"
        },
        {
          id: "range",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A new walkway triangle will have sides of 8 m and 15 m, and a third side of (2n − 3) m. Which inequality gives all possible values of n?",
          choices: [
            { letter: "A", text: "7 < n < 23" },
            { letter: "B", text: "2 < n < 10" },
            { letter: "C", text: "5 < n < 13" },
            { letter: "D", text: "5 < n < 9" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr1-raid-corner-kick",
      family: "GEO",
      mode: "raid",
      title: "Three Players, One Ball",
      kind: "Triangles · G.TR.1",
      blurb: "Kim, Luis and Maya pass on a soccer field.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Triangle KLM of soccer players: KL is 18 yards, LM is 25 yards and KM is 30 yards; the line from K through M continues to the goal post G\"><rect class=\"thin\" x=\"286\" y=\"126\" width=\"10\" height=\"28\"/><polygon class=\"ln\" points=\"36,140 95.9,50.1 216,140\"/><line class=\"ln dash\" x1=\"216\" y1=\"140\" x2=\"286\" y2=\"140\"/><path class=\"ac\" d=\"M230 140 A14 14 0 0 0 204.8 131.6\"/><circle class=\"dt\" cx=\"36\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"95.9\" cy=\"50.1\" r=\"3\"/><circle class=\"dt\" cx=\"216\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"286\" cy=\"140\" r=\"3\"/><text x=\"23.8\" y=\"149.6\" text-anchor=\"middle\">K</text><text x=\"95.9\" y=\"42.1\" text-anchor=\"middle\">L</text><text x=\"216\" y=\"161\" text-anchor=\"middle\">M</text><text x=\"282\" y=\"123\" text-anchor=\"middle\">G</text><text x=\"46\" y=\"86.7\" text-anchor=\"middle\">18 yd</text><text x=\"167.9\" y=\"84\" text-anchor=\"middle\">25 yd</text><text x=\"126\" y=\"159\" text-anchor=\"middle\">30 yd</text></svg></figure><p class=\"geo-given\">Soccer players stand at <strong>K</strong> (Kim), <strong>L</strong> (Luis) and <strong>M</strong> (Maya): KL = 18 yd, LM = 25 yd and KM = 30 yd. The line from Kim through Maya continues straight to the goal post <strong>G</strong>.</p>",
      claims: [
        {
          id: "largest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Using the three distances, which angle of △KLM is the largest?",
          choices: [
            { letter: "A", text: "∠K" },
            { letter: "B", text: "∠L" },
            { letter: "C", text: "∠M" },
            { letter: "D", text: "You need a protractor to tell." }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the angles of △KLM from smallest to largest?",
          choices: [
            { letter: "A", text: "∠L, ∠K, ∠M" },
            { letter: "B", text: "∠K, ∠L, ∠M" },
            { letter: "C", text: "∠K, ∠M, ∠L" },
            { letter: "D", text: "∠M, ∠K, ∠L" }
          ],
          correct: "D"
        },
        {
          id: "angle-l",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "The coach measures m∠K ≈ 56° and m∠M ≈ 37°. What is m∠L, to the nearest degree?",
          choices: [
            { letter: "A", text: "87°" },
            { letter: "B", text: "93°" },
            { letter: "C", text: "124°" },
            { letter: "D", text: "267°" }
          ],
          correct: "A"
        },
        {
          id: "exterior",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "m∠KML ≈ 37°. What is m∠LMG, to the nearest degree?",
          choices: [
            { letter: "A", text: "37°" },
            { letter: "B", text: "53°" },
            { letter: "C", text: "143°" },
            { letter: "D", text: "323°" }
          ],
          correct: "C"
        },
        {
          id: "move",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Luis moves, but stays 18 yd from Kim. Kim and Maya stay 30 yd apart, and the three players still form a triangle. Which could be the new distance LM?",
          choices: [
            { letter: "A", text: "11 yd" },
            { letter: "B", text: "12 yd" },
            { letter: "C", text: "48 yd" },
            { letter: "D", text: "40 yd" }
          ],
          correct: "D"
        },
        {
          id: "nia",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Nia says she is 9 yd from Kim and 20 yd from Maya. Kim and Maya are 30 yd apart. Why must one of Nia's distances be wrong?",
          choices: [
            { letter: "A", text: "9 + 30 is greater than 20." },
            { letter: "B", text: "9 + 20 is less than 30." },
            { letter: "C", text: "20 − 9 is less than 30." },
            { letter: "D", text: "No two of the distances are equal." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr1-raid-pin-rack",
      family: "GEO",
      mode: "raid",
      title: "The Pin Rack",
      kind: "Triangles · G.TR.1",
      blurb: "Ten bowling pins in an equilateral triangle.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Ten bowling pins in an equilateral triangle ABC with tick marks on all three sides; pin E is next to B on the back row; dashed segment AE; side BC is extended past C to D\"><polygon class=\"ln\" points=\"160,12 85,141.9 235,141.9\"/><line class=\"ln\" x1=\"235\" y1=\"141.9\" x2=\"296\" y2=\"141.9\"/><line class=\"ac dash\" x1=\"160\" y1=\"12\" x2=\"135\" y2=\"141.9\"/><line class=\"thin\" x1=\"117.3\" y1=\"74\" x2=\"127.7\" y2=\"80\"/><line class=\"thin\" x1=\"160\" y1=\"147.9\" x2=\"160\" y2=\"135.9\"/><line class=\"thin\" x1=\"192.3\" y1=\"80\" x2=\"202.7\" y2=\"74\"/><path class=\"thin\" d=\"M249 141.9 A14 14 0 0 0 228 129.8\"/><circle class=\"thin\" cx=\"160\" cy=\"12\" r=\"6\"/><circle class=\"dt\" cx=\"160\" cy=\"12\" r=\"2.5\"/><circle class=\"thin\" cx=\"135\" cy=\"55.3\" r=\"6\"/><circle class=\"dt\" cx=\"135\" cy=\"55.3\" r=\"2.5\"/><circle class=\"thin\" cx=\"185\" cy=\"55.3\" r=\"6\"/><circle class=\"dt\" cx=\"185\" cy=\"55.3\" r=\"2.5\"/><circle class=\"thin\" cx=\"110\" cy=\"98.6\" r=\"6\"/><circle class=\"dt\" cx=\"110\" cy=\"98.6\" r=\"2.5\"/><circle class=\"thin\" cx=\"160\" cy=\"98.6\" r=\"6\"/><circle class=\"dt\" cx=\"160\" cy=\"98.6\" r=\"2.5\"/><circle class=\"thin\" cx=\"210\" cy=\"98.6\" r=\"6\"/><circle class=\"dt\" cx=\"210\" cy=\"98.6\" r=\"2.5\"/><circle class=\"thin\" cx=\"85\" cy=\"141.9\" r=\"6\"/><circle class=\"dt\" cx=\"85\" cy=\"141.9\" r=\"2.5\"/><circle class=\"thin\" cx=\"135\" cy=\"141.9\" r=\"6\"/><circle class=\"dt\" cx=\"135\" cy=\"141.9\" r=\"2.5\"/><circle class=\"thin\" cx=\"185\" cy=\"141.9\" r=\"6\"/><circle class=\"dt\" cx=\"185\" cy=\"141.9\" r=\"2.5\"/><circle class=\"thin\" cx=\"235\" cy=\"141.9\" r=\"6\"/><circle class=\"dt\" cx=\"235\" cy=\"141.9\" r=\"2.5\"/><text x=\"176\" y=\"19\" text-anchor=\"middle\">A</text><text x=\"71\" y=\"148.9\" text-anchor=\"middle\">B</text><text x=\"135\" y=\"162.9\" text-anchor=\"middle\">E</text><text x=\"237\" y=\"162.9\" text-anchor=\"middle\">C</text><text x=\"290\" y=\"162.9\" text-anchor=\"middle\">D</text><text class=\"sm\" x=\"76\" y=\"44\" text-anchor=\"middle\">pins 12 in apart</text></svg></figure><p class=\"geo-given\">Ten pins stand 12 in apart, so the rack is an equilateral triangle <strong>ABC</strong> with sides of 36 in. Pin <strong>E</strong> is next to B on the back row, so BE = 12 in and AE ≈ 31.7 in. The back row BC is extended past C to <strong>D</strong>.</p>",
      claims: [
        {
          id: "each",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is the measure of each angle of the rack, △ABC?",
          choices: [
            { letter: "A", text: "180°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "60°" },
            { letter: "D", text: "120°" }
          ],
          correct: "C"
        },
        {
          id: "ext",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ACD?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "180°" },
            { letter: "D", text: "300°" }
          ],
          correct: "A"
        },
        {
          id: "largest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "In △ABE, which angle is the largest?",
          choices: [
            { letter: "A", text: "∠ABE" },
            { letter: "B", text: "∠AEB" },
            { letter: "C", text: "∠BAE" },
            { letter: "D", text: "All three are 60°." }
          ],
          correct: "B"
        },
        {
          id: "aeb",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "In △ABE, m∠BAE ≈ 19°. What is m∠AEB, to the nearest degree?",
          choices: [
            { letter: "A", text: "79°" },
            { letter: "B", text: "161°" },
            { letter: "C", text: "41°" },
            { letter: "D", text: "101°" }
          ],
          correct: "D"
        },
        {
          id: "logo",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "The bowling alley's logo is an isosceles triangle with a 40° vertex angle. What is the measure of each base angle?",
          choices: [
            { letter: "A", text: "140°" },
            { letter: "B", text: "70°" },
            { letter: "C", text: "40°" },
            { letter: "D", text: "50°" }
          ],
          correct: "B"
        },
        {
          id: "rails",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Which three lengths, in inches, could NOT be the sides of a triangle?",
          choices: [
            { letter: "A", text: "12, 12, 20" },
            { letter: "B", text: "12, 30, 36" },
            { letter: "C", text: "12, 24, 36" },
            { letter: "D", text: "20, 20, 36" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr1-raid-pump-track",
      family: "GEO",
      mode: "raid",
      title: "The Pump Track Loop",
      kind: "Triangles · G.TR.1",
      blurb: "Two fixed sides for a skate park loop, and a third still open.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Triangle HPQ of a skate park loop: HP is 22 meters, HQ is 14 meters and the third side PQ is x meters\"><path class=\"sh2\" d=\"M66 144 L264 144 L44.1 19.9 Z\"/><polygon class=\"ln\" points=\"66,144 264,144 44.1,19.9\"/><path class=\"thin\" d=\"M80 144 A14 14 0 0 0 63.6 130.2\"/><circle class=\"dt\" cx=\"66\" cy=\"144\" r=\"3\"/><circle class=\"dt\" cx=\"264\" cy=\"144\" r=\"3\"/><circle class=\"dt\" cx=\"44.1\" cy=\"19.9\" r=\"3\"/><text x=\"55.4\" y=\"156.5\" text-anchor=\"middle\">H</text><text x=\"276.5\" y=\"152.7\" text-anchor=\"middle\">P</text><text x=\"31.1\" y=\"20.9\" text-anchor=\"middle\">Q</text><text x=\"165\" y=\"164\" text-anchor=\"middle\">22 m</text><text x=\"35.4\" y=\"90.4\" text-anchor=\"middle\">14 m</text><text class=\"acc\" x=\"160.9\" y=\"74.8\" text-anchor=\"middle\">x m</text></svg></figure><p class=\"geo-given\">A skate park's pump track is a triangular loop <strong>HPQ</strong>. Side HP is 22 m and side HQ is 14 m. The designer has not yet chosen the length x of side PQ.</p>",
      claims: [
        {
          id: "range",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Which inequality gives all possible values of x, in meters?",
          choices: [
            { letter: "A", text: "0 < x < 36" },
            { letter: "B", text: "8 < x < 36" },
            { letter: "C", text: "8 < x < 22" },
            { letter: "D", text: "14 < x < 22" }
          ],
          correct: "B"
        },
        {
          id: "count",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "How many whole-number lengths, in meters, could x be?",
          choices: [
            { letter: "A", text: "27" },
            { letter: "B", text: "28" },
            { letter: "C", text: "29" },
            { letter: "D", text: "35" }
          ],
          correct: "A"
        },
        {
          id: "big30",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Suppose the designer makes x = 30 m. Which angle of the loop is then the largest?",
          choices: [
            { letter: "A", text: "∠P" },
            { letter: "B", text: "∠Q" },
            { letter: "C", text: "∠H" },
            { letter: "D", text: "It cannot be found without a protractor." }
          ],
          correct: "C"
        },
        {
          id: "true18",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Suppose the designer makes x = 18 m. Which statement is then true?",
          choices: [
            { letter: "A", text: "m∠H is greater than m∠Q." },
            { letter: "B", text: "m∠P is greater than m∠H." },
            { letter: "C", text: "m∠P is greater than m∠Q." },
            { letter: "D", text: "m∠Q is greater than m∠H." }
          ],
          correct: "D"
        },
        {
          id: "least-y",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Another loop will have sides of 12 m, 20 m and (2y − 4) m. What is the least whole number y could be?",
          choices: [
            { letter: "A", text: "7" },
            { letter: "B", text: "6" },
            { letter: "C", text: "8" },
            { letter: "D", text: "3" }
          ],
          correct: "A"
        },
        {
          id: "angle-q",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "The designer makes m∠H = 100°. Then m∠P ≈ 29°. What is m∠Q, to the nearest degree?",
          choices: [
            { letter: "A", text: "129°" },
            { letter: "B", text: "80°" },
            { letter: "C", text: "51°" },
            { letter: "D", text: "151°" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr1-raid-game-map",
      family: "GEO",
      mode: "raid",
      title: "The Video Game Map",
      kind: "Triangles · G.TR.1",
      blurb: "Three checkpoints, a straight road and some algebra.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Triangle ABC of checkpoints on a game map; angle A is 2x plus 7 degrees and angle C is 5x minus 9 degrees; road AB continues past B to D, and the exterior angle CBD is 6x plus 10 degrees\"><rect class=\"thin\" x=\"6\" y=\"6\" width=\"308\" height=\"156\" rx=\"10\"/><path class=\"gr\" fill=\"none\" d=\"M6 50 H314 M6 94 H314 M80 6 V162 M160 6 V162 M240 6 V162\"/><polygon class=\"ln\" points=\"34,138 196,138 210.9,31.7\"/><line class=\"ln\" x1=\"196\" y1=\"138\" x2=\"286\" y2=\"138\"/><path class=\"thin\" d=\"M60 138 A26 26 0 0 0 56.3 124.6\"/><path class=\"thin\" d=\"M195.5 41 A18 18 0 0 0 208.4 49.5\"/><path class=\"ac\" d=\"M212 138 A16 16 0 0 0 198.2 122.2\"/><circle class=\"dt\" cx=\"34\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"196\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"210.9\" cy=\"31.7\" r=\"3\"/><circle class=\"dt\" cx=\"286\" cy=\"138\" r=\"3\"/><text x=\"20.6\" y=\"147.2\" text-anchor=\"middle\">A</text><text x=\"194\" y=\"156\" text-anchor=\"middle\">B</text><text x=\"212.9\" y=\"23.7\" text-anchor=\"middle\">C</text><text x=\"286\" y=\"156\" text-anchor=\"middle\">D</text><text class=\"sm\" x=\"108\" y=\"133\" text-anchor=\"middle\">(2x + 7)°</text><text class=\"sm\" x=\"174.9\" y=\"85.7\" text-anchor=\"middle\">(5x − 9)°</text><text class=\"sm\" x=\"246\" y=\"116\" text-anchor=\"middle\">(6x + 10)°</text></svg></figure><p class=\"geo-given\">On a video game map, routes join the checkpoints <strong>A</strong>, <strong>B</strong> and <strong>C</strong>. The route from A through B goes straight on to <strong>D</strong>. m∠A = (2x + 7)⁠°, m∠BCA = (5x − 9)⁠° and m∠CBD = (6x + 10)⁠°.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Which equation can be used to find x?",
          choices: [
            { letter: "A", text: "(2x + 7) + (5x − 9) + (6x + 10) = 180" },
            { letter: "B", text: "6x + 10 = (2x + 7) + (5x − 9)" },
            { letter: "C", text: "(6x + 10) + (5x − 9) = 180" },
            { letter: "D", text: "(2x + 7) + (5x − 9) = 180" }
          ],
          correct: "B"
        },
        {
          id: "angle-b",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ABC?",
          choices: [
            { letter: "A", text: "98°" },
            { letter: "B", text: "82°" },
            { letter: "C", text: "51°" },
            { letter: "D", text: "149°" }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the routes from shortest to longest?",
          choices: [
            { letter: "A", text: "AC, AB, BC" },
            { letter: "B", text: "AB, AC, BC" },
            { letter: "C", text: "BC, AB, AC" },
            { letter: "D", text: "BC, AC, AB" }
          ],
          correct: "C"
        },
        {
          id: "reason",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Which theorem says that m∠CBD = m∠A + m∠BCA?",
          choices: [
            { letter: "A", text: "Vertical Angles Theorem" },
            { letter: "B", text: "Isosceles Triangle Theorem" },
            { letter: "C", text: "Triangle Inequality Theorem" },
            { letter: "D", text: "Exterior Angle Theorem" }
          ],
          correct: "D"
        },
        {
          id: "not-third",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "In a new level, two routes from one checkpoint are 35 and 50 units long, and a third route closes the triangle. Which could NOT be the length of the third route?",
          choices: [
            { letter: "A", text: "16 units" },
            { letter: "B", text: "50 units" },
            { letter: "C", text: "84 units" },
            { letter: "D", text: "85 units" }
          ],
          correct: "D"
        },
        {
          id: "error",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Kai says: ∠A is the smallest angle, so AB, a side at A, is the shortest route. What is Kai's error?",
          choices: [
            { letter: "A", text: "∠C is the smallest angle, not ∠A." },
            { letter: "B", text: "The shortest side is opposite ∠A, so it is BC." },
            { letter: "C", text: "The shortest side is AC, the other side at A." },
            { letter: "D", text: "Kai made no error." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr1-raid-swim-course",
      family: "GEO",
      mode: "raid",
      title: "The Open-Water Swim",
      kind: "Triangles · G.TR.1",
      blurb: "Three buoys, three legs written with x, and a 400 m loop.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Triangle PQR of buoys: PQ is 2x plus 30 meters, QR is 3x plus 10 meters and PR is x plus 60 meters; leg QR continues past R to the dock S\"><path class=\"thin\" d=\"M22 30 q6 -5 12 0 t12 0\"/><path class=\"thin\" d=\"M262 24 q6 -5 12 0 t12 0\"/><path class=\"thin\" d=\"M284 96 q6 -5 12 0 t12 0\"/><polygon class=\"ln\" points=\"161.1,17.5 30,140 250.8,140\"/><line class=\"ln dash\" x1=\"250.8\" y1=\"140\" x2=\"296.8\" y2=\"140\"/><path class=\"ac\" d=\"M264.8 140 A14 14 0 0 0 242.5 128.7\"/><circle class=\"thin\" cx=\"161.1\" cy=\"17.5\" r=\"6\"/><circle class=\"thin\" cx=\"30\" cy=\"140\" r=\"6\"/><circle class=\"thin\" cx=\"250.8\" cy=\"140\" r=\"6\"/><circle class=\"dt\" cx=\"161.1\" cy=\"17.5\" r=\"3\"/><circle class=\"dt\" cx=\"30\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"250.8\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"296.8\" cy=\"140\" r=\"3\"/><text x=\"175.1\" y=\"22.5\" text-anchor=\"middle\">P</text><text x=\"15.8\" y=\"149.9\" text-anchor=\"middle\">Q</text><text x=\"248.8\" y=\"163\" text-anchor=\"middle\">R</text><text x=\"296.8\" y=\"162\" text-anchor=\"middle\">S</text><text class=\"sm\" x=\"75.1\" y=\"60.8\" text-anchor=\"middle\">(2x + 30) m</text><text class=\"sm\" x=\"230.2\" y=\"65\" text-anchor=\"middle\">(x + 60) m</text><text class=\"sm\" x=\"140.4\" y=\"157\" text-anchor=\"middle\">(3x + 10) m</text></svg></figure><p class=\"geo-given\">A swim course is the triangle <strong>PQR</strong>, with a buoy at each corner. PQ = (2x + 30) m, QR = (3x + 10) m and PR = (x + 60) m. The whole loop is 400 m. The line of leg QR continues straight past R to the dock <strong>S</strong>.</p>",
      claims: [
        {
          id: "largest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which angle of the course is the largest?",
          choices: [
            { letter: "A", text: "∠P, opposite QR" },
            { letter: "B", text: "∠Q, between the two longest legs" },
            { letter: "C", text: "∠R, opposite PQ" },
            { letter: "D", text: "You cannot tell until you know x." }
          ],
          correct: "A"
        },
        {
          id: "x5",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Before the loop length was set, the planner tried x = 5. Could the three legs form a triangle then?",
          choices: [
            { letter: "A", text: "Yes, because 25 + 65 is greater than 40." },
            { letter: "B", text: "Yes, because every leg is a positive length." },
            { letter: "C", text: "No, because 40 + 25 is not greater than 65." },
            { letter: "D", text: "No, because the three legs are not equal." }
          ],
          correct: "C"
        },
        {
          id: "all-x",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Ignore the 400 m loop length. For which values of x do the three expressions form a triangle?",
          choices: [
            { letter: "A", text: "x > 0" },
            { letter: "B", text: "x > −20" },
            { letter: "C", text: "x ≥ 5" },
            { letter: "D", text: "x > 5" }
          ],
          correct: "D"
        },
        {
          id: "angle-r",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "The angles of the course are m∠P ≈ 83° and m∠Q ≈ 43°. What is m∠R, to the nearest degree?",
          choices: [
            { letter: "A", text: "126°" },
            { letter: "B", text: "54°" },
            { letter: "C", text: "97°" },
            { letter: "D", text: "137°" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "The angles of the course are m∠P ≈ 83° and m∠Q ≈ 43°. What is m∠PRS, to the nearest degree?",
          choices: [
            { letter: "A", text: "54°" },
            { letter: "B", text: "40°" },
            { letter: "C", text: "126°" },
            { letter: "D", text: "234°" }
          ],
          correct: "C"
        },
        {
          id: "long-leg",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "How long is the leg opposite the largest angle of the course?",
          choices: [
            { letter: "A", text: "160 m" },
            { letter: "B", text: "110 m" },
            { letter: "C", text: "130 m" },
            { letter: "D", text: "210 m" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr1-raid-pitchers-mound",
      family: "GEO",
      mode: "raid",
      title: "The Pitcher's Mound",
      kind: "Triangles · G.TR.1",
      blurb: "Home plate, the mound and first base make a triangle.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Baseball diamond: home plate H, first base F and the pitcher's mound M on the line from home to second base; HM is 60.5 feet, HF is 90 feet, angle MHF is 45 degrees; the baseline HF continues past F to R\"><path class=\"gr\" fill=\"none\" d=\"M150 156 L78.7 84.7 L150 13.4 L221.3 84.7\"/><line class=\"ln dash\" x1=\"150\" y1=\"156\" x2=\"150\" y2=\"88.2\"/><path class=\"gr\" fill=\"none\" d=\"M150 88.2 L150 13.4\"/><polygon class=\"ln\" points=\"150,156 150,88.2 221.3,84.7\"/><line class=\"ln dash\" x1=\"221.3\" y1=\"84.7\" x2=\"249.6\" y2=\"56.4\"/><path class=\"thin\" d=\"M215.6 90.4 L210 84.7 L215.6 79\"/><path class=\"thin\" d=\"M150 134 A22 22 0 0 1 165.6 140.4\"/><path class=\"thin\" d=\"M195.3 86 A26 26 0 0 0 202.9 103.1\"/><path class=\"ac\" d=\"M229.8 76.2 A12 12 0 0 0 209.3 85.3\"/><circle class=\"dt\" cx=\"150\" cy=\"156\" r=\"3\"/><circle class=\"dt\" cx=\"150\" cy=\"88.2\" r=\"3\"/><circle class=\"dt\" cx=\"221.3\" cy=\"84.7\" r=\"3\"/><circle class=\"dt\" cx=\"249.6\" cy=\"56.4\" r=\"3\"/><circle class=\"dt\" cx=\"150\" cy=\"13.4\" r=\"2.5\"/><circle class=\"dt\" cx=\"78.7\" cy=\"84.7\" r=\"2.5\"/><text x=\"136\" y=\"163\" text-anchor=\"middle\">H</text><text x=\"137\" y=\"87.2\" text-anchor=\"middle\">M</text><text x=\"227.3\" y=\"105.7\" text-anchor=\"middle\">F</text><text x=\"261.6\" y=\"61.4\" text-anchor=\"middle\">R</text><text x=\"116\" y=\"129.1\" text-anchor=\"middle\">60.5 ft</text><text x=\"199.8\" y=\"139.5\" text-anchor=\"middle\">90 ft</text><text class=\"sm\" x=\"163\" y=\"128.6\" text-anchor=\"middle\">45°</text><text class=\"sm\" x=\"170\" y=\"19.4\" text-anchor=\"middle\">2nd</text><text class=\"sm\" x=\"74.7\" y=\"77.7\" text-anchor=\"middle\">3rd</text></svg></figure><p class=\"geo-given\">On a baseball field, the pitcher's mound <strong>M</strong> is on the line from home plate <strong>H</strong> to second base, so m∠MHF = 45°. HM = 60.5 ft and HF = 90 ft, and m∠HFM ≈ 42°. The baseline HF continues straight past first base <strong>F</strong> to <strong>R</strong>.</p>",
      claims: [
        {
          id: "angle-m",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠HMF, to the nearest degree?",
          choices: [
            { letter: "A", text: "87°" },
            { letter: "B", text: "135°" },
            { letter: "C", text: "138°" },
            { letter: "D", text: "93°" }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the sides of △HMF from shortest to longest?",
          choices: [
            { letter: "A", text: "HF, MF, HM" },
            { letter: "B", text: "HM, MF, HF" },
            { letter: "C", text: "MF, HM, HF" },
            { letter: "D", text: "HM, HF, MF" }
          ],
          correct: "B"
        },
        {
          id: "range",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Using only the triangle inequality, which gives all possible lengths of MF, in feet?",
          choices: [
            { letter: "A", text: "0 < MF < 150.5" },
            { letter: "B", text: "29.5 < MF < 90" },
            { letter: "C", text: "29.5 < MF < 150.5" },
            { letter: "D", text: "60.5 < MF < 150.5" }
          ],
          correct: "C"
        },
        {
          id: "estimate",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Use the angles and the side lengths. About how far is the mound from first base?",
          choices: [
            { letter: "A", text: "about 64 ft" },
            { letter: "B", text: "about 55 ft" },
            { letter: "C", text: "about 95 ft" },
            { letter: "D", text: "about 152 ft" }
          ],
          correct: "A"
        },
        {
          id: "ext",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠MFR, to the nearest degree?",
          choices: [
            { letter: "A", text: "42°" },
            { letter: "B", text: "87°" },
            { letter: "C", text: "135°" },
            { letter: "D", text: "138°" }
          ],
          correct: "D"
        },
        {
          id: "mira",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Mira says MF could be 30 ft, because 30 ft passes all three triangle inequality tests. Why is she wrong?",
          choices: [
            { letter: "A", text: "30 + 60.5 is less than 90." },
            { letter: "B", text: "MF is opposite the largest angle, so it must be longer than HF." },
            { letter: "C", text: "∠H is larger than ∠F, so MF must be longer than HM." },
            { letter: "D", text: "MF must equal HM, since M is on the diagonal." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr1-raid-pass-drill",
      family: "GEO",
      mode: "raid",
      title: "The Passing Drill",
      kind: "Triangles · G.TR.1",
      blurb: "Four players on a court, two equal passes and a long one.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"Triangle ABC of basketball players with D on BC; tick marks show AB congruent to AD; angle ABD is 3x plus 20 degrees, angle ADB is 5x degrees and angle C is 22 degrees\"><path class=\"thin dash\" d=\"M6 120 H314\"/><polygon class=\"ln\" points=\"87.5,31.6 20,112 286.5,112\"/><line class=\"ln\" x1=\"87.5\" y1=\"31.6\" x2=\"155\" y2=\"112\"/><line class=\"thin\" x1=\"49.2\" y1=\"67.9\" x2=\"58.3\" y2=\"75.7\"/><line class=\"thin\" x1=\"116.7\" y1=\"75.7\" x2=\"125.8\" y2=\"67.9\"/><path class=\"thin\" d=\"M35 112 A15 15 0 0 0 29.6 100.5\"/><path class=\"thin\" d=\"M140 112 A15 15 0 0 1 145.4 100.5\"/><path class=\"thin\" d=\"M258.7 100.8 A30 30 0 0 0 256.5 112\"/><path class=\"ac\" d=\"M104.2 51.5 A26 26 0 0 0 111.6 41.3\"/><circle class=\"dt\" cx=\"87.5\" cy=\"31.6\" r=\"3\"/><circle class=\"dt\" cx=\"20\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"155\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"286.5\" cy=\"112\" r=\"3\"/><text x=\"87.5\" y=\"23.6\" text-anchor=\"middle\">A</text><text x=\"19\" y=\"135\" text-anchor=\"middle\">B</text><text x=\"155\" y=\"135\" text-anchor=\"middle\">D</text><text x=\"287.5\" y=\"135\" text-anchor=\"middle\">C</text><text class=\"sm\" x=\"72\" y=\"108\" text-anchor=\"middle\">(3x + 20)°</text><text class=\"sm\" x=\"123\" y=\"108\" text-anchor=\"middle\">5x°</text><text class=\"sm\" x=\"237.4\" y=\"106.5\" text-anchor=\"middle\">22°</text></svg></figure><p class=\"geo-given\">In a passing drill, players stand at <strong>A</strong>, <strong>B</strong>, <strong>C</strong> and <strong>D</strong>, with D on the baseline BC. The passes AB and AD are equal: AB ≅ AD. m∠ABD = (3x + 20)⁠°, m∠ADB = 5x° and m∠ACD = 22°.</p>",
      claims: [
        {
          id: "bad",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠BAD?",
          choices: [
            { letter: "A", text: "80°" },
            { letter: "B", text: "50°" },
            { letter: "C", text: "130°" },
            { letter: "D", text: "65°" }
          ],
          correct: "A"
        },
        {
          id: "adc",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ADC?",
          choices: [
            { letter: "A", text: "50°" },
            { letter: "B", text: "100°" },
            { letter: "C", text: "158°" },
            { letter: "D", text: "130°" }
          ],
          correct: "D"
        },
        {
          id: "dac",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠DAC?",
          choices: [
            { letter: "A", text: "108°" },
            { letter: "B", text: "28°" },
            { letter: "C", text: "158°" },
            { letter: "D", text: "72°" }
          ],
          correct: "B"
        },
        {
          id: "longest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which pass is the longest: AB, AD or AC?",
          choices: [
            { letter: "A", text: "AB" },
            { letter: "B", text: "AD" },
            { letter: "C", text: "AC" },
            { letter: "D", text: "AB and AD tie for longest" }
          ],
          correct: "C"
        },
        {
          id: "not-true",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement about the distances is NOT true?",
          choices: [
            { letter: "A", text: "AC is longer than AD." },
            { letter: "B", text: "BD is longer than AB." },
            { letter: "C", text: "AB is shorter than AC." },
            { letter: "D", text: "AD is longer than DC." }
          ],
          correct: "D"
        },
        {
          id: "drill",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Another drill uses a triangle of passes 10 ft, (x + 3) ft and (2x − 2) ft long. Which inequality gives all possible values of x?",
          choices: [
            { letter: "A", text: "x < 15" },
            { letter: "B", text: "3 < x < 15" },
            { letter: "C", text: "x > 3" },
            { letter: "D", text: "−5 < x < 15" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
