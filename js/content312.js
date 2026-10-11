/* SOL Labyrinth — Geometry game (family GEO), G.TR.1 (Virginia 2023 Geometry SOL): triangle side and angle
   relationships, the triangle inequality, the angle sum and the exterior angle theorem. Modes: ring (art, design, music
   and making things) and worms (nature and the outdoors). Original items only. Every numeric answer and every distractor was
   computed (each distractor is a named mistake), and every figure coordinate was computed. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-tr1-ring-hanging-mobile",
      family: "GEO",
      mode: "ring",
      title: "The Hanging Mobile",
      kind: "Triangles · G.TR.1",
      blurb: "Three triangle pieces hang from one rod.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 142\" role=\"img\" aria-label=\"A mobile: a rod hangs from a string and holds three flat pieces. Piece 1 is triangle ABC with tick marks on AB and AC and a 72 degree angle at B. Piece 2 is triangle DEF with a tick mark on every side. Piece 3 is triangle GHJ with a 35 degree angle at G and a 100 degree angle at H\"><line class=\"thin\" x1=\"160\" y1=\"2\" x2=\"160\" y2=\"14\"/><line class=\"ln\" x1=\"30\" y1=\"14\" x2=\"292\" y2=\"14\"/><line class=\"thin\" x1=\"52\" y1=\"14\" x2=\"52\" y2=\"40\"/><polygon class=\"ln\" points=\"52,40 28.5,112.3 75.5,112.3\"/><line class=\"thin\" x1=\"36.5\" y1=\"74.9\" x2=\"44.1\" y2=\"77.4\"/><line class=\"thin\" x1=\"59.9\" y1=\"77.4\" x2=\"67.5\" y2=\"74.9\"/><path class=\"thin\" d=\"M38.5 112.3 A10 10 0 0 0 31.6 102.8\"/><text class=\"sm\" x=\"48.7\" y=\"101.8\" text-anchor=\"middle\">72°</text><circle class=\"dt\" cx=\"52\" cy=\"40\" r=\"3\"/><circle class=\"dt\" cx=\"28.5\" cy=\"112.3\" r=\"3\"/><circle class=\"dt\" cx=\"75.5\" cy=\"112.3\" r=\"3\"/><text x=\"40\" y=\"43.3\" text-anchor=\"middle\">A</text><text x=\"17.5\" y=\"123.6\" text-anchor=\"middle\">B</text><text x=\"86.5\" y=\"123.6\" text-anchor=\"middle\">C</text><text class=\"sm\" x=\"52\" y=\"134.2\" text-anchor=\"middle\">piece 1</text><line class=\"thin\" x1=\"268\" y1=\"14\" x2=\"268\" y2=\"42\"/><polygon class=\"ln\" points=\"268,42 235,99.2 301,99.2\"/><line class=\"thin\" x1=\"248\" y1=\"68.6\" x2=\"255\" y2=\"72.6\"/><line class=\"thin\" x1=\"281\" y1=\"72.6\" x2=\"288\" y2=\"68.6\"/><line class=\"thin\" x1=\"268\" y1=\"103.2\" x2=\"268\" y2=\"95.2\"/><circle class=\"dt\" cx=\"268\" cy=\"42\" r=\"3\"/><circle class=\"dt\" cx=\"235\" cy=\"99.2\" r=\"3\"/><circle class=\"dt\" cx=\"301\" cy=\"99.2\" r=\"3\"/><text x=\"281\" y=\"45.3\" text-anchor=\"middle\">D</text><text x=\"224\" y=\"110.5\" text-anchor=\"middle\">E</text><text x=\"312\" y=\"110.5\" text-anchor=\"middle\">F</text><text class=\"sm\" x=\"268\" y=\"134.2\" text-anchor=\"middle\">piece 2</text><line class=\"thin\" x1=\"160\" y1=\"14\" x2=\"160\" y2=\"34\"/><polygon class=\"ln\" points=\"98.4,85.7 160,34 210,75.9\"/><path class=\"thin\" d=\"M115.2 71.6 A22 22 0 0 1 120.3 83.8\"/><text class=\"sm\" x=\"135.4\" y=\"74.6\" text-anchor=\"middle\">35°</text><path class=\"thin\" d=\"M150.8 41.7 A12 12 0 0 0 169.2 41.7\"/><text class=\"sm\" x=\"160\" y=\"64.2\" text-anchor=\"middle\">100°</text><circle class=\"dt\" cx=\"98.4\" cy=\"85.7\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"34\" r=\"3\"/><circle class=\"dt\" cx=\"210\" cy=\"75.9\" r=\"3\"/><text x=\"90.4\" y=\"79\" text-anchor=\"middle\">G</text><text x=\"173\" y=\"35.3\" text-anchor=\"middle\">H</text><text x=\"222\" y=\"87.2\" text-anchor=\"middle\">J</text><text class=\"sm\" x=\"156\" y=\"110.2\" text-anchor=\"middle\">piece 3</text></svg></figure><p class=\"geo-given\">A mobile holds three flat pieces. Piece 1 is △<strong>ABC</strong>, with AB ≅ AC and m∠ABC = 72°. Piece 2 is the equilateral triangle <strong>DEF</strong>. Piece 3 is △<strong>GHJ</strong>, with m∠G = 35° and m∠H = 100°.</p>",
      claims: [
        {
          id: "top",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠BAC, the top angle of piece 1?",
          choices: [
            { letter: "A", text: "108°" },
            { letter: "B", text: "36°" },
            { letter: "C", text: "72°" },
            { letter: "D", text: "144°" }
          ],
          correct: "B"
        },
        {
          id: "short1",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which side of piece 1 is the shortest?",
          choices: [
            { letter: "A", text: "BC" },
            { letter: "B", text: "AB" },
            { letter: "C", text: "AB and AC tie for shortest" },
            { letter: "D", text: "All three sides are equal" }
          ],
          correct: "A"
        },
        {
          id: "equi",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠DEF in piece 2?",
          choices: [
            { letter: "A", text: "180°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "120°" },
            { letter: "D", text: "60°" }
          ],
          correct: "D"
        },
        {
          id: "third",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠J in piece 3?",
          choices: [
            { letter: "A", text: "135°" },
            { letter: "B", text: "145°" },
            { letter: "C", text: "45°" },
            { letter: "D", text: "80°" }
          ],
          correct: "C"
        },
        {
          id: "order3",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the sides of piece 3 from shortest to longest?",
          choices: [
            { letter: "A", text: "GJ, GH, HJ" },
            { letter: "B", text: "HJ, GH, GJ" },
            { letter: "C", text: "GH, HJ, GJ" },
            { letter: "D", text: "HJ, GJ, GH" }
          ],
          correct: "B"
        },
        {
          id: "wire",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "The artist will bend wire into a fourth piece. Which three lengths can form a triangle?",
          choices: [
            { letter: "A", text: "7 cm, 10 cm, 15 cm" },
            { letter: "B", text: "4 cm, 7 cm, 12 cm" },
            { letter: "C", text: "5 cm, 8 cm, 13 cm" },
            { letter: "D", text: "3 cm, 3 cm, 7 cm" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr1-ring-folding-easel",
      family: "GEO",
      mode: "ring",
      title: "The Folding Easel",
      kind: "Triangles · G.TR.1",
      blurb: "Two legs, the floor and a canvas.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Side view of a folding easel: triangle TFK with the front leg TF, the back leg TK and the floor FK; a canvas leans on the front leg; the floor line continues past F to E; angle F is 68 degrees and angle K is 57 degrees\"><line class=\"thin\" x1=\"14\" y1=\"134\" x2=\"306\" y2=\"134\"/><polygon class=\"sh2\" points=\"107.6,111.7 136.1,41.3 130.5,39 102,109.5\"/><line class=\"ln\" x1=\"22\" y1=\"134\" x2=\"220\" y2=\"134\"/><line class=\"ln\" x1=\"104\" y1=\"134\" x2=\"148.5\" y2=\"23.9\"/><line class=\"ln\" x1=\"148.5\" y1=\"23.9\" x2=\"220\" y2=\"134\"/><path class=\"thin\" d=\"M122 134 A18 18 0 0 0 110.7 117.3\"/><text class=\"sm\" x=\"130.5\" y=\"120.3\" text-anchor=\"middle\">68°</text><path class=\"thin\" d=\"M210.2 118.9 A18 18 0 0 0 202 134\"/><text class=\"sm\" x=\"191.9\" y=\"122.9\" text-anchor=\"middle\">57°</text><circle class=\"dt\" cx=\"148.5\" cy=\"23.9\" r=\"3\"/><circle class=\"dt\" cx=\"104\" cy=\"134\" r=\"3\"/><circle class=\"dt\" cx=\"220\" cy=\"134\" r=\"3\"/><circle class=\"dt\" cx=\"22\" cy=\"134\" r=\"3\"/><text x=\"148.5\" y=\"17.2\" text-anchor=\"middle\">T</text><text x=\"104\" y=\"153.3\" text-anchor=\"middle\">F</text><text x=\"222\" y=\"153.3\" text-anchor=\"middle\">K</text><text x=\"24\" y=\"153.3\" text-anchor=\"middle\">E</text><text class=\"sm\" x=\"238\" y=\"84.2\" text-anchor=\"middle\">back leg</text><text class=\"sm\" x=\"84\" y=\"78.2\" text-anchor=\"middle\">canvas</text></svg></figure><p class=\"geo-given\">From the side, a folding easel is the triangle <strong>TFK</strong>: the front leg TF, the back leg TK and the floor FK. m∠TFK = 68° and m∠TKF = 57°. The floor line continues past F to <strong>E</strong>.</p>",
      claims: [
        {
          id: "top",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠FTK, the angle at the top of the easel?",
          choices: [
            { letter: "A", text: "125°" },
            { letter: "B", text: "112°" },
            { letter: "C", text: "123°" },
            { letter: "D", text: "55°" }
          ],
          correct: "D"
        },
        {
          id: "ext",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠TFE, the angle between the front leg and the floor beyond F?",
          choices: [
            { letter: "A", text: "68°" },
            { letter: "B", text: "123°" },
            { letter: "C", text: "112°" },
            { letter: "D", text: "125°" }
          ],
          correct: "C"
        },
        {
          id: "longest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which part of the easel triangle is the longest?",
          choices: [
            { letter: "A", text: "the front leg TF" },
            { letter: "B", text: "the floor distance FK" },
            { letter: "C", text: "TF and TK are the same length" },
            { letter: "D", text: "the back leg TK" }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders FK, TF and TK from shortest to longest?",
          choices: [
            { letter: "A", text: "FK, TF, TK" },
            { letter: "B", text: "TK, TF, FK" },
            { letter: "C", text: "TF, FK, TK" },
            { letter: "D", text: "FK, TK, TF" }
          ],
          correct: "A"
        },
        {
          id: "error",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Kai says: ∠TKF is smaller than ∠TFK, so the back leg TK is shorter than the front leg TF. What is Kai's error?",
          choices: [
            { letter: "A", text: "∠TKF is larger than ∠TFK, not smaller." },
            { letter: "B", text: "The legs are equal, since easels are symmetric." },
            { letter: "C", text: "TK is opposite the larger angle, so TK is longer." },
            { letter: "D", text: "Kai made no error; his reasoning is correct." }
          ],
          correct: "C"
        },
        {
          id: "feet",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "An artist builds a taller easel with legs of 1.6 m and 1.4 m. The legs and the floor form a triangle. Which could be the distance between the feet?",
          choices: [
            { letter: "A", text: "0.2 m" },
            { letter: "B", text: "1.1 m" },
            { letter: "C", text: "3.0 m" },
            { letter: "D", text: "3.2 m" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr1-ring-quilt-piece",
      family: "GEO",
      mode: "ring",
      title: "The Quilt Piece",
      kind: "Triangles · G.TR.1",
      blurb: "A fabric triangle with sides of 5, 7 and 9 inches.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 132\" role=\"img\" aria-label=\"A triangular quilt piece PQR drawn to scale, with PQ 5 inches, QR 7 inches and PR 9 inches along its sewing lines, and a dashed cutting line just outside it\"><polygon class=\"thin dash\" points=\"54,106.8 250.8,106.8 123.2,22.1\"/><polygon class=\"sh\" points=\"64,102 235,102 124.2,28.5\"/><polygon class=\"ln\" points=\"64,102 235,102 124.2,28.5\"/><circle class=\"dt\" cx=\"64\" cy=\"102\" r=\"3\"/><circle class=\"dt\" cx=\"124.2\" cy=\"28.5\" r=\"3\"/><circle class=\"dt\" cx=\"235\" cy=\"102\" r=\"3\"/><text x=\"42\" y=\"109.3\" text-anchor=\"middle\">P</text><text x=\"118.3\" y=\"16.8\" text-anchor=\"middle\">Q</text><text x=\"261\" y=\"109.3\" text-anchor=\"middle\">R</text><text x=\"78.6\" y=\"57.9\" text-anchor=\"middle\">5 in</text><text x=\"191.7\" y=\"52.2\" text-anchor=\"middle\">7 in</text><text x=\"149.5\" y=\"125.3\" text-anchor=\"middle\">9 in</text><line class=\"thin\" x1=\"66\" y1=\"22\" x2=\"105.9\" y2=\"43.3\"/><text class=\"sm\" x=\"32\" y=\"22.2\" text-anchor=\"middle\">cutting line</text></svg></figure><p class=\"geo-given\">A quilter cuts the triangle <strong>PQR</strong> from fabric. Along its sewing lines, PQ = 5 in, QR = 7 in and PR = 9 in. The dashed cutting line is 1/4 in outside the sewing lines.</p>",
      claims: [
        {
          id: "compare",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement about the angles of △PQR is true?",
          choices: [
            { letter: "A", text: "m∠Q is greater than m∠P." },
            { letter: "B", text: "m∠R is greater than m∠P." },
            { letter: "C", text: "m∠P is greater than m∠Q." },
            { letter: "D", text: "m∠R is the largest angle." }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the angles of △PQR from largest to smallest?",
          choices: [
            { letter: "A", text: "∠R, ∠P, ∠Q" },
            { letter: "B", text: "∠Q, ∠P, ∠R" },
            { letter: "C", text: "∠Q, ∠R, ∠P" },
            { letter: "D", text: "∠P, ∠Q, ∠R" }
          ],
          correct: "B"
        },
        {
          id: "range",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "The quilter keeps PQ = 5 in and QR = 7 in but changes PR. Which inequality gives all possible lengths of PR, in inches?",
          choices: [
            { letter: "A", text: "5 < PR < 7" },
            { letter: "B", text: "0 < PR < 12" },
            { letter: "C", text: "2 < PR < 12" },
            { letter: "D", text: "7 < PR < 12" }
          ],
          correct: "C"
        },
        {
          id: "pattern",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A pattern lists a piece with sides of 3 in, 4.5 in and 8 in. Can it be a triangle? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes, because 3 + 8 is greater than 4.5." },
            { letter: "B", text: "No, because 8 − 3 is less than 4.5." },
            { letter: "C", text: "Yes, because 4.5 + 8 is greater than 3." },
            { letter: "D", text: "No, because 3 + 4.5 is less than 8." }
          ],
          correct: "D"
        },
        {
          id: "sum",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "A protractor gives m∠P ≈ 50.7° and m∠R ≈ 33.6°. What is m∠Q, to the nearest tenth of a degree?",
          choices: [
            { letter: "A", text: "84.3°" },
            { letter: "B", text: "129.3°" },
            { letter: "C", text: "95.7°" },
            { letter: "D", text: "146.4°" }
          ],
          correct: "C"
        },
        {
          id: "hst",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Another piece is a half-square triangle: an isosceles right triangle. What is the measure of each of its acute angles?",
          choices: [
            { letter: "A", text: "90°" },
            { letter: "B", text: "45°" },
            { letter: "C", text: "60°" },
            { letter: "D", text: "135°" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr1-ring-a-frame-sign",
      family: "GEO",
      mode: "ring",
      title: "The A-Frame Sign",
      kind: "Triangles · G.TR.1",
      blurb: "Two 30-inch legs and a chain that sets the spread.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"Side view of an A-frame sign: triangle ABC with equal legs AB and AC marked with tick marks, a chain joining the middles of the legs, and the ground line BC continuing past C to G. The figure shows one setting\"><line class=\"thin\" x1=\"30\" y1=\"138.8\" x2=\"286\" y2=\"138.8\"/><line class=\"ln\" x1=\"150\" y1=\"22\" x2=\"102.8\" y2=\"138.8\"/><line class=\"ln\" x1=\"150\" y1=\"22\" x2=\"197.2\" y2=\"138.8\"/><line class=\"ln\" x1=\"102.8\" y1=\"138.8\" x2=\"197.2\" y2=\"138.8\"/><line class=\"ln\" x1=\"197.2\" y1=\"138.8\" x2=\"286\" y2=\"138.8\"/><line class=\"thin dash\" x1=\"126.4\" y1=\"80.4\" x2=\"173.6\" y2=\"80.4\"/><line class=\"thin\" x1=\"110\" y1=\"107.7\" x2=\"119.2\" y2=\"111.5\"/><line class=\"thin\" x1=\"180.8\" y1=\"111.5\" x2=\"190\" y2=\"107.7\"/><circle class=\"dt\" cx=\"150\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"102.8\" cy=\"138.8\" r=\"3\"/><circle class=\"dt\" cx=\"197.2\" cy=\"138.8\" r=\"3\"/><circle class=\"dt\" cx=\"286\" cy=\"138.8\" r=\"3\"/><text x=\"150\" y=\"15.3\" text-anchor=\"middle\">A</text><text x=\"98.8\" y=\"158.1\" text-anchor=\"middle\">B</text><text x=\"201.2\" y=\"158.1\" text-anchor=\"middle\">C</text><text x=\"286\" y=\"158.1\" text-anchor=\"middle\">G</text><text x=\"106\" y=\"77.5\" text-anchor=\"middle\">30 in</text><text x=\"194\" y=\"77.5\" text-anchor=\"middle\">30 in</text><text class=\"sm\" x=\"150\" y=\"95.6\" text-anchor=\"middle\">chain</text></svg></figure><p class=\"geo-given\">From the side, an A-frame sign is the triangle <strong>ABC</strong>. Its legs are equal: AB = AC = 30 in. A chain sets the spread BC, so BC can change; the figure shows one setting. The ground line continues past C to <strong>G</strong>.</p>",
      claims: [
        {
          id: "spread",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Which spread BC is NOT possible for this sign?",
          choices: [
            { letter: "A", text: "6 in" },
            { letter: "B", text: "30 in" },
            { letter: "C", text: "59 in" },
            { letter: "D", text: "60 in" }
          ],
          correct: "D"
        },
        {
          id: "base",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Suppose the chain is set so that m∠BAC = 48°. What is m∠ABC?",
          choices: [
            { letter: "A", text: "66°" },
            { letter: "B", text: "132°" },
            { letter: "C", text: "48°" },
            { letter: "D", text: "42°" }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Suppose the spread is BC = 38 in. Which list orders the angles of △ABC from smallest to largest?",
          choices: [
            { letter: "A", text: "∠A, then ∠B and ∠C (equal)" },
            { letter: "B", text: "All three angles are equal" },
            { letter: "C", text: "∠B and ∠C (equal), then ∠A" },
            { letter: "D", text: "∠B, then ∠A, then ∠C" }
          ],
          correct: "C"
        },
        {
          id: "equi",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "For which spread BC is each angle of △ABC equal to 60°?",
          choices: [
            { letter: "A", text: "60 in" },
            { letter: "B", text: "15 in" },
            { letter: "C", text: "No spread gives three 60° angles" },
            { letter: "D", text: "30 in" }
          ],
          correct: "D"
        },
        {
          id: "alg",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Another A-frame sign is △JKL, with JK ≅ JL. m∠KJL = (2y + 10)⁠° and m∠JKL = (3y + 5)⁠°. What is m∠JKL?",
          choices: [
            { letter: "A", text: "104°" },
            { letter: "B", text: "65°" },
            { letter: "C", text: "50°" },
            { letter: "D", text: "20°" }
          ],
          correct: "B"
        },
        {
          id: "ext",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Suppose m∠BAC = 40°. What is m∠ACG?",
          choices: [
            { letter: "A", text: "110°" },
            { letter: "B", text: "140°" },
            { letter: "C", text: "70°" },
            { letter: "D", text: "40°" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr1-ring-tent-display",
      family: "GEO",
      mode: "ring",
      title: "The Tent-Shaped Display",
      kind: "Triangles · G.TR.1",
      blurb: "An art fair stand with sides written in x.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 132\" role=\"img\" aria-label=\"A tent-shaped display stand, triangle TAB, with matching angle arcs at A and B; side TA is labeled 3x minus 4 inches, side TB is labeled x plus 12 inches and the base AB is labeled 4x minus 2 inches; the table edge continues past B to C\"><line class=\"thin\" x1=\"14\" y1=\"108\" x2=\"298\" y2=\"108\"/><polygon class=\"sh\" points=\"155,26 62,108 248,108\"/><polygon class=\"ln\" points=\"155,26 62,108 248,108\"/><line class=\"ln\" x1=\"248\" y1=\"108\" x2=\"298\" y2=\"108\"/><path class=\"thin\" d=\"M80 108 A18 18 0 0 0 75.5 96.1\"/><path class=\"thin\" d=\"M230 108 A18 18 0 0 1 234.5 96.1\"/><circle class=\"dt\" cx=\"155\" cy=\"26\" r=\"3\"/><circle class=\"dt\" cx=\"62\" cy=\"108\" r=\"3\"/><circle class=\"dt\" cx=\"248\" cy=\"108\" r=\"3\"/><circle class=\"dt\" cx=\"298\" cy=\"108\" r=\"3\"/><text x=\"155\" y=\"19.3\" text-anchor=\"middle\">T</text><text x=\"58\" y=\"127.3\" text-anchor=\"middle\">A</text><text x=\"248\" y=\"127.3\" text-anchor=\"middle\">B</text><text x=\"296\" y=\"127.3\" text-anchor=\"middle\">C</text><text x=\"82\" y=\"42.3\" text-anchor=\"middle\">(3x − 4) in</text><text x=\"228\" y=\"42.3\" text-anchor=\"middle\">(x + 12) in</text><text x=\"155\" y=\"127.3\" text-anchor=\"middle\">(4x − 2) in</text><text class=\"sm\" x=\"32\" y=\"102.2\" text-anchor=\"middle\">table</text></svg></figure><p class=\"geo-given\">A tent-shaped display stand at an art fair is the triangle <strong>TAB</strong>, with ∠TAB ≅ ∠TBA. TA = (3x − 4) in, TB = (x + 12) in and AB = (4x − 2) in. The base AB lies along the table edge, which continues past B to <strong>C</strong>.</p>",
      claims: [
        {
          id: "x",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "The base angles are equal, so the sides opposite them are equal. What is the value of x?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "14/3" },
            { letter: "C", text: "8" },
            { letter: "D", text: "20" }
          ],
          correct: "C"
        },
        {
          id: "largest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which angle of △TAB is the largest?",
          choices: [
            { letter: "A", text: "∠TAB" },
            { letter: "B", text: "∠TAB and ∠TBA tie for largest" },
            { letter: "C", text: "You cannot tell without a protractor." },
            { letter: "D", text: "∠T" }
          ],
          correct: "D"
        },
        {
          id: "must",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement about △TAB must be true?",
          choices: [
            { letter: "A", text: "m∠T is greater than 60°." },
            { letter: "B", text: "m∠TAB is greater than 60°." },
            { letter: "C", text: "m∠T is less than m∠TAB." },
            { letter: "D", text: "m∠TAB + m∠TBA is greater than 120°." }
          ],
          correct: "A"
        },
        {
          id: "notx",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Another stand has sides of (3x − 4) in, (x + 12) in and (4x − 2) in, with no two angles equal. Which value of x would NOT give three side lengths that form a triangle?",
          choices: [
            { letter: "A", text: "x = 4" },
            { letter: "B", text: "x = 2" },
            { letter: "C", text: "x = 6" },
            { letter: "D", text: "x = 12" }
          ],
          correct: "B"
        },
        {
          id: "other",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Another stand, △KLM, has KL ≅ KM. Its base LM is extended past M to N, and m∠KMN = 132°. What is m∠LKM?",
          choices: [
            { letter: "A", text: "48°" },
            { letter: "B", text: "66°" },
            { letter: "C", text: "132°" },
            { letter: "D", text: "84°" }
          ],
          correct: "D"
        },
        {
          id: "not",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Which statement about △TAB and ∠TBC is NOT true?",
          choices: [
            { letter: "A", text: "m∠TBC = m∠TAB + m∠TBA" },
            { letter: "B", text: "m∠TBC = m∠ATB + m∠TAB" },
            { letter: "C", text: "m∠TBC + m∠TBA = 180°" },
            { letter: "D", text: "m∠TBC is greater than m∠ATB" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr1-ring-shelf-bracket",
      family: "GEO",
      mode: "ring",
      title: "The Shelf Bracket",
      kind: "Triangles · G.TR.1",
      blurb: "A woodshop brace, a strut and some algebra.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"A shelf bracket: the wall CW is vertical, the shelf CS is horizontal with a right angle at C, the brace WS joins them, and a strut joins C to P on the brace. Angle CWS is x plus 22 degrees, angle CSW is 2x plus 5 degrees, and angle WCP is 55 degrees\"><rect class=\"sh2\" x=\"18\" y=\"4\" width=\"26\" height=\"158\"/><rect class=\"sh\" x=\"44\" y=\"14\" width=\"155.2\" height=\"12\"/><line class=\"ln\" x1=\"44\" y1=\"26\" x2=\"44\" y2=\"156\"/><line class=\"ln\" x1=\"44\" y1=\"26\" x2=\"165.2\" y2=\"26\"/><line class=\"ln\" x1=\"44\" y1=\"156\" x2=\"165.2\" y2=\"26\"/><line class=\"ln\" x1=\"44\" y1=\"26\" x2=\"117.3\" y2=\"77.4\"/><path class=\"thin\" d=\"M44 35 L53 35 L53 26\"/><path class=\"thin\" d=\"M44 102 A54 54 0 0 1 80.8 116.5\"/><line class=\"thin\" x1=\"70\" y1=\"94\" x2=\"63.8\" y2=\"105.8\"/><text class=\"sm\" x=\"74\" y=\"90.2\" text-anchor=\"middle\">(x + 22)⁠°</text><path class=\"thin\" d=\"M141.2 26 A24 24 0 0 0 148.9 43.6\"/><text class=\"sm\" x=\"111.2\" y=\"43.2\" text-anchor=\"middle\">(2x + 5)⁠°</text><path class=\"thin\" d=\"M44 42 A16 16 0 0 0 57.1 35.2\"/><text class=\"sm\" x=\"57.9\" y=\"56.8\" text-anchor=\"middle\">55°</text><circle class=\"dt\" cx=\"44\" cy=\"26\" r=\"3\"/><circle class=\"dt\" cx=\"44\" cy=\"156\" r=\"3\"/><circle class=\"dt\" cx=\"165.2\" cy=\"26\" r=\"3\"/><circle class=\"dt\" cx=\"117.3\" cy=\"77.4\" r=\"3\"/><text x=\"32\" y=\"16.3\" text-anchor=\"middle\">C</text><text x=\"57\" y=\"158.3\" text-anchor=\"middle\">W</text><text x=\"175.2\" y=\"44.3\" text-anchor=\"middle\">S</text><text x=\"127.3\" y=\"92.7\" text-anchor=\"middle\">P</text><text class=\"sm\" x=\"31\" y=\"124.2\" text-anchor=\"middle\">wall</text><text class=\"sm\" x=\"213.2\" y=\"43.2\" text-anchor=\"middle\">shelf</text></svg></figure><p class=\"geo-given\">A shelf bracket is the triangle <strong>WCS</strong>. The wall CW is perpendicular to the shelf CS, and the brace WS joins them. A strut joins C to the point <strong>P</strong> on the brace. m∠CWS = (x + 22)⁠°, m∠CSW = (2x + 5)⁠° and m∠WCP = 55°.</p>",
      claims: [
        {
          id: "x",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Use the right angle at C to find the value of x.",
          choices: [
            { letter: "A", text: "17" },
            { letter: "B", text: "51" },
            { letter: "C", text: "21" },
            { letter: "D", text: "43" }
          ],
          correct: "C"
        },
        {
          id: "cps",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠CPS, the angle between the strut and the brace PS?",
          choices: [
            { letter: "A", text: "82°" },
            { letter: "B", text: "98°" },
            { letter: "C", text: "102°" },
            { letter: "D", text: "125°" }
          ],
          correct: "B"
        },
        {
          id: "pcs",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠PCS, the angle between the strut and the shelf?",
          choices: [
            { letter: "A", text: "55°" },
            { letter: "B", text: "125°" },
            { letter: "C", text: "145°" },
            { letter: "D", text: "35°" }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "In △CPS, which list orders the sides from shortest to longest?",
          choices: [
            { letter: "A", text: "CS, CP, PS" },
            { letter: "B", text: "PS, CP, CS" },
            { letter: "C", text: "CP, PS, CS" },
            { letter: "D", text: "PS, CS, CP" }
          ],
          correct: "B"
        },
        {
          id: "not",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement about the bracket is NOT true?",
          choices: [
            { letter: "A", text: "CP is shorter than CS." },
            { letter: "B", text: "CP is shorter than CW." },
            { letter: "C", text: "CW is shorter than CS." },
            { letter: "D", text: "WS is the longest side of △WCS." }
          ],
          correct: "C"
        },
        {
          id: "b",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Another brace triangle will have sides of 20 in, (3b − 2) in and (b + 6) in. Which inequality gives all possible values of b?",
          choices: [
            { letter: "A", text: "4 < b < 14" },
            { letter: "B", text: "b > 4" },
            { letter: "C", text: "b < 14" },
            { letter: "D", text: "−6 < b < 14" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr1-ring-stage-spotlights",
      family: "GEO",
      mode: "ring",
      title: "The Stage Spotlights",
      kind: "Triangles · G.TR.1",
      blurb: "Two beams, one performer and an angle outside the triangle.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"A lighting bar with spotlights at A and B; the bar continues past B to E. Beams from A and B meet at the performer P on the stage below, forming triangle ABP. Angle PAB is x plus 30 degrees, angle APB is x plus 14 degrees, and angle PBE is 3x plus 4 degrees\"><line class=\"ln\" x1=\"20\" y1=\"26\" x2=\"296\" y2=\"26\"/><line class=\"thin\" x1=\"20\" y1=\"151.2\" x2=\"306\" y2=\"151.2\"/><rect class=\"sh2\" x=\"71\" y=\"12\" width=\"14\" height=\"9\"/><rect class=\"sh2\" x=\"201\" y=\"12\" width=\"14\" height=\"9\"/><line class=\"ln\" x1=\"78\" y1=\"26\" x2=\"123.6\" y2=\"151.2\"/><line class=\"ln\" x1=\"208\" y1=\"26\" x2=\"123.6\" y2=\"151.2\"/><path class=\"thin\" d=\"M98 26 A20 20 0 0 1 84.8 44.8\"/><text class=\"sm\" x=\"123.9\" y=\"62.3\" text-anchor=\"middle\">(x + 30)⁠°</text><path class=\"thin\" d=\"M107.1 106.1 A48 48 0 0 1 150.4 111.4\"/><text class=\"sm\" x=\"133.5\" y=\"91.4\" text-anchor=\"middle\">(x + 14)⁠°</text><path class=\"thin\" d=\"M199.1 39.3 A16 16 0 0 0 224 26\"/><text class=\"sm\" x=\"250\" y=\"46.2\" text-anchor=\"middle\">(3x + 4)⁠°</text><circle class=\"dt\" cx=\"78\" cy=\"26\" r=\"3\"/><circle class=\"dt\" cx=\"208\" cy=\"26\" r=\"3\"/><circle class=\"dt\" cx=\"296\" cy=\"26\" r=\"3\"/><circle class=\"dt\" cx=\"123.6\" cy=\"151.2\" r=\"3\"/><text x=\"61\" y=\"22.3\" text-anchor=\"middle\">A</text><text x=\"225\" y=\"22.3\" text-anchor=\"middle\">B</text><text x=\"296\" y=\"19.3\" text-anchor=\"middle\">E</text><text x=\"109.6\" y=\"151.5\" text-anchor=\"middle\">P</text><text class=\"sm\" x=\"266\" y=\"146.4\" text-anchor=\"middle\">stage</text></svg></figure><p class=\"geo-given\">Spotlights <strong>A</strong> and <strong>B</strong> hang on a straight lighting bar, which continues past B to <strong>E</strong>. Their beams meet at the performer <strong>P</strong>. m∠PAB = (x + 30)⁠°, m∠APB = (x + 14)⁠° and m∠PBE = (3x + 4)⁠°.</p>",
      claims: [
        {
          id: "eq",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Which equation can be used to find x?",
          choices: [
            { letter: "A", text: "(x + 30) + (x + 14) + (3x + 4) = 180" },
            { letter: "B", text: "3x + 4 = (x + 30) + (x + 14)" },
            { letter: "C", text: "(3x + 4) + (x + 30) = 180" },
            { letter: "D", text: "3x + 4 = (x + 30) − (x + 14)" }
          ],
          correct: "B"
        },
        {
          id: "abp",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ABP, the angle between the bar and beam BP?",
          choices: [
            { letter: "A", text: "124°" },
            { letter: "B", text: "40°" },
            { letter: "C", text: "54°" },
            { letter: "D", text: "56°" }
          ],
          correct: "D"
        },
        {
          id: "reason",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which beam is longer, AP or BP? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "BP, because it is opposite the larger angle, ∠PAB." },
            { letter: "B", text: "AP, because it is opposite the larger angle, ∠ABP." },
            { letter: "C", text: "BP, because ∠ABP is the largest angle of △ABP." },
            { letter: "D", text: "AP, because ∠PBE is greater than ∠PAB." }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the sides of △ABP from shortest to longest?",
          choices: [
            { letter: "A", text: "BP, AP, AB" },
            { letter: "B", text: "AP, AB, BP" },
            { letter: "C", text: "AB, AP, BP" },
            { letter: "D", text: "AB, BP, AP" }
          ],
          correct: "C"
        },
        {
          id: "notab",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "For a different show, the beams are AP = 5 m and BP = 6.5 m. Which could NOT be the distance AB between the lights?",
          choices: [
            { letter: "A", text: "1.6 m" },
            { letter: "B", text: "1.2 m" },
            { letter: "C", text: "6.5 m" },
            { letter: "D", text: "11.4 m" }
          ],
          correct: "B"
        },
        {
          id: "next",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "For the next song, the light at A is tilted so that m∠PAB = 62°, and the performer moves so that m∠APB = 50°. What is m∠PBE then?",
          choices: [
            { letter: "A", text: "112°" },
            { letter: "B", text: "68°" },
            { letter: "C", text: "130°" },
            { letter: "D", text: "118°" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr1-worms-three-campsites",
      family: "GEO",
      mode: "worms",
      title: "Three Campsites",
      kind: "Triangles · G.TR.1",
      blurb: "Straight trails join three campsites near a lake.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Trail map: campsites A, B and C joined by straight trails, drawn to scale, with AB 1.8 kilometers, BC 2.6 kilometers and AC 3.1 kilometers; a small lake lies east of the triangle\"><ellipse class=\"sh2\" cx=\"276\" cy=\"72\" rx=\"28\" ry=\"16\"/><text class=\"sm\" x=\"276\" y=\"76.2\" text-anchor=\"middle\">lake</text><polygon class=\"ln\" points=\"52,128 109,40.5 231.8,128\"/><circle class=\"dt\" cx=\"52\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"109\" cy=\"40.5\" r=\"3\"/><circle class=\"dt\" cx=\"231.8\" cy=\"128\" r=\"3\"/><path class=\"sh2\" d=\"M27 123 L34 113 L41 123 Z\"/><path class=\"sh2\" d=\"M84 43.5 L91 33.5 L98 43.5 Z\"/><path class=\"sh2\" d=\"M242.8 123 L249.8 113 L256.8 123 Z\"/><text x=\"35.1\" y=\"139.5\" text-anchor=\"middle\">A</text><text x=\"103.3\" y=\"30.8\" text-anchor=\"middle\">B</text><text x=\"249.1\" y=\"138.3\" text-anchor=\"middle\">C</text><text x=\"57\" y=\"74.3\" text-anchor=\"middle\">1.8 km</text><text x=\"184.3\" y=\"70\" text-anchor=\"middle\">2.6 km</text><text x=\"141.9\" y=\"147.3\" text-anchor=\"middle\">3.1 km</text></svg></figure><p class=\"geo-given\">Straight trails join the campsites <strong>A</strong>, <strong>B</strong> and <strong>C</strong>: AB = 1.8 km, BC = 2.6 km and AC = 3.1 km.</p>",
      claims: [
        {
          id: "smallest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which angle of △ABC is the smallest?",
          choices: [
            { letter: "A", text: "∠A" },
            { letter: "B", text: "∠B" },
            { letter: "C", text: "∠C" },
            { letter: "D", text: "∠A and ∠C tie for smallest" }
          ],
          correct: "C"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the angles of △ABC from smallest to largest?",
          choices: [
            { letter: "A", text: "∠B, ∠A, ∠C" },
            { letter: "B", text: "∠A, ∠C, ∠B" },
            { letter: "C", text: "∠C, ∠B, ∠A" },
            { letter: "D", text: "∠C, ∠A, ∠B" }
          ],
          correct: "D"
        },
        {
          id: "route",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A ranger hikes from A to B and then from B to C. How does that route compare with the direct trail AC? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "It is the same, because both routes join A and C." },
            { letter: "B", text: "It is longer, because AB + BC is greater than AC." },
            { letter: "C", text: "It is shorter, because it uses two trails." },
            { letter: "D", text: "It is longer, because AC is the shortest trail." }
          ],
          correct: "B"
        },
        {
          id: "sam",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Sam says a fourth campsite could be 1.2 km from A and 1.6 km from C. Why is Sam wrong?",
          choices: [
            { letter: "A", text: "1.2 + 1.6 is less than AC, 3.1 km." },
            { letter: "B", text: "1.2 + 3.1 is less than 1.6." },
            { letter: "C", text: "A campsite must be farther from A than from C." },
            { letter: "D", text: "1.6 km is more than AB, 1.8 km." }
          ],
          correct: "A"
        },
        {
          id: "sum",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "A ranger measures m∠B ≈ 88° and m∠C ≈ 35°. What is m∠A, to the nearest degree?",
          choices: [
            { letter: "A", text: "123°" },
            { letter: "B", text: "92°" },
            { letter: "C", text: "145°" },
            { letter: "D", text: "57°" }
          ],
          correct: "D"
        },
        {
          id: "loop",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Rangers plan a triangular loop trail with two equal legs that meet at a 108° angle. What angle does each equal leg make with the third leg?",
          choices: [
            { letter: "A", text: "72°" },
            { letter: "B", text: "108°" },
            { letter: "C", text: "36°" },
            { letter: "D", text: "54°" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr1-worms-nest-fork",
      family: "GEO",
      mode: "worms",
      title: "The Nest in the Fork",
      kind: "Triangles · G.TR.1",
      blurb: "A branch, a twig and an upright trunk hold a nest.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A tree: the upright trunk passes through B, then T, then U. A branch runs from B up to the nest at N, and a twig joins T to N, forming triangle BTN. Angle TBN is 38 degrees and angle BNT is 47 degrees\"><line class=\"thin\" x1=\"30\" y1=\"160\" x2=\"300\" y2=\"160\"/><line class=\"ln\" x1=\"104\" y1=\"160\" x2=\"104\" y2=\"14\"/><line class=\"ln\" x1=\"104\" y1=\"152\" x2=\"179.5\" y2=\"55.4\"/><line class=\"ln\" x1=\"104\" y1=\"62\" x2=\"179.5\" y2=\"55.4\"/><path class=\"sh2\" d=\"M181.5 51.4 Q197.5 71.4 213.5 51.4\"/><path class=\"thin\" d=\"M104 130 A22 22 0 0 1 117.5 134.7\"/><text class=\"sm\" x=\"116.4\" y=\"120.3\" text-anchor=\"middle\">38°</text><path class=\"thin\" d=\"M167.2 71.2 A20 20 0 0 1 159.6 57.1\"/><text class=\"sm\" x=\"146.1\" y=\"77.7\" text-anchor=\"middle\">47°</text><path class=\"ac\" d=\"M104 48 A14 14 0 0 1 117.9 60.8\"/><circle class=\"dt\" cx=\"104\" cy=\"152\" r=\"3\"/><circle class=\"dt\" cx=\"104\" cy=\"62\" r=\"3\"/><circle class=\"dt\" cx=\"104\" cy=\"14\" r=\"3\"/><circle class=\"dt\" cx=\"179.5\" cy=\"55.4\" r=\"3\"/><text x=\"91\" y=\"157.3\" text-anchor=\"middle\">B</text><text x=\"91\" y=\"67.3\" text-anchor=\"middle\">T</text><text x=\"91\" y=\"23.3\" text-anchor=\"middle\">U</text><text x=\"183.5\" y=\"46.7\" text-anchor=\"middle\">N</text><text class=\"sm\" x=\"197.5\" y=\"79.6\" text-anchor=\"middle\">nest</text><text class=\"sm\" x=\"70\" y=\"124.2\" text-anchor=\"middle\">trunk</text></svg></figure><p class=\"geo-given\">A nest sits at <strong>N</strong>, where a branch BN and a twig TN meet. <strong>B</strong> and <strong>T</strong> are on the straight, upright trunk, which continues above T to <strong>U</strong>. m∠TBN = 38° and m∠BNT = 47°.</p>",
      claims: [
        {
          id: "btn",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠BTN, the angle between the trunk and the twig?",
          choices: [
            { letter: "A", text: "85°" },
            { letter: "B", text: "95°" },
            { letter: "C", text: "142°" },
            { letter: "D", text: "133°" }
          ],
          correct: "B"
        },
        {
          id: "utn",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠UTN, the angle between the twig and the trunk above T?",
          choices: [
            { letter: "A", text: "85°" },
            { letter: "B", text: "95°" },
            { letter: "C", text: "38°" },
            { letter: "D", text: "142°" }
          ],
          correct: "A"
        },
        {
          id: "longest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which side of △BTN is the longest?",
          choices: [
            { letter: "A", text: "the twig TN" },
            { letter: "B", text: "the branch BN" },
            { letter: "C", text: "the trunk piece BT" },
            { letter: "D", text: "BT and TN are the same length" }
          ],
          correct: "B"
        },
        {
          id: "true",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement about △BTN is true?",
          choices: [
            { letter: "A", text: "The twig TN is shorter than the trunk piece BT." },
            { letter: "B", text: "The trunk piece BT is shorter than the twig TN." },
            { letter: "C", text: "The branch BN is shorter than the twig TN." },
            { letter: "D", text: "The twig TN is the longest side." }
          ],
          correct: "A"
        },
        {
          id: "equi",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Another nest rests in a triangle of three twigs that are all the same length. What is the angle between any two of the twigs?",
          choices: [
            { letter: "A", text: "180°" },
            { letter: "B", text: "120°" },
            { letter: "C", text: "90°" },
            { letter: "D", text: "60°" }
          ],
          correct: "D"
        },
        {
          id: "twig",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A bird finds two twigs, 9 cm and 14 cm long. Which third twig could make a triangle with them?",
          choices: [
            { letter: "A", text: "5 cm" },
            { letter: "B", text: "23 cm" },
            { letter: "C", text: "12 cm" },
            { letter: "D", text: "4 cm" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr1-worms-river-crossing",
      family: "GEO",
      mode: "worms",
      title: "The River Crossing",
      kind: "Triangles · G.TR.1",
      blurb: "Two points on one bank, a tree on the other.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A river between two banks. A and B are on the near bank, which continues past B to D; C is a tree on the far bank; segments AC and BC cross the river. AB is 40 meters. Angle CAB is 3x plus 4 degrees, angle ACB is 4x minus 4 degrees, and angle CBD is 6x plus 15 degrees\"><line class=\"thin\" x1=\"4\" y1=\"40\" x2=\"316\" y2=\"40\"/><line class=\"thin\" x1=\"4\" y1=\"140\" x2=\"316\" y2=\"140\"/><path class=\"thin\" d=\"M236 70 q5 -4 10 0 t10 0 t10 0\"/><path class=\"thin\" d=\"M268 104 q5 -4 10 0 t10 0 t10 0\"/><path class=\"thin\" d=\"M40 72 q5 -4 10 0 t10 0 t10 0\"/><path class=\"thin\" d=\"M64 52 q5 -4 10 0 t10 0 t10 0\"/><path class=\"thin\" d=\"M24 112 q5 -4 10 0 t10 0 t10 0\"/><circle class=\"thin\" cx=\"151.4\" cy=\"11.7\" r=\"10\"/><line class=\"ln\" x1=\"52\" y1=\"140\" x2=\"151.4\" y2=\"25.7\"/><line class=\"ln\" x1=\"182\" y1=\"140\" x2=\"151.4\" y2=\"25.7\"/><line class=\"ln\" x1=\"52\" y1=\"140\" x2=\"292\" y2=\"140\"/><path class=\"thin\" d=\"M72 140 A20 20 0 0 0 65.1 124.9\"/><text class=\"sm\" x=\"104.8\" y=\"120.1\" text-anchor=\"middle\">(3x + 4)⁠°</text><path class=\"thin\" d=\"M121.2 60.4 A46 46 0 0 0 163.3 70.1\"/><text class=\"sm\" x=\"133.4\" y=\"89.9\" text-anchor=\"middle\">(4x − 4)⁠°</text><path class=\"thin\" d=\"M177.9 124.5 A16 16 0 0 1 198 140\"/><text class=\"sm\" x=\"234\" y=\"128.2\" text-anchor=\"middle\">(6x + 15)⁠°</text><circle class=\"dt\" cx=\"52\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"182\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"151.4\" cy=\"25.7\" r=\"3\"/><circle class=\"dt\" cx=\"292\" cy=\"140\" r=\"3\"/><text x=\"48\" y=\"159.3\" text-anchor=\"middle\">A</text><text x=\"182\" y=\"159.3\" text-anchor=\"middle\">B</text><text x=\"292\" y=\"159.3\" text-anchor=\"middle\">D</text><text x=\"129.4\" y=\"25\" text-anchor=\"middle\">C</text><text class=\"sm\" x=\"117\" y=\"158.2\" text-anchor=\"middle\">40 m</text><text class=\"sm\" x=\"282\" y=\"90.2\" text-anchor=\"middle\">river</text><text class=\"sm\" x=\"40\" y=\"36.2\" text-anchor=\"middle\">far bank</text></svg></figure><p class=\"geo-given\"><strong>A</strong> and <strong>B</strong> are on the straight near bank of a river, and <strong>C</strong> is a tree on the far bank. The bank line continues past B to <strong>D</strong>. AB = 40 m, m∠CAB = (3x + 4)⁠°, m∠ACB = (4x − 4)⁠° and m∠CBD = (6x + 15)⁠°.</p>",
      claims: [
        {
          id: "error",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "A student writes (3x + 4) + (4x − 4) + (6x + 15) = 180 to find x. What is the error?",
          choices: [
            { letter: "A", text: "∠CBD is outside the triangle; it equals m∠CAB + m∠ACB." },
            { letter: "B", text: "The three angles should add to 360°." },
            { letter: "C", text: "∠CAB and ∠ACB should be set equal." },
            { letter: "D", text: "There is no error in the equation." }
          ],
          correct: "A"
        },
        {
          id: "abc",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ABC, the angle inside the triangle at B?",
          choices: [
            { letter: "A", text: "105°" },
            { letter: "B", text: "15°" },
            { letter: "C", text: "124°" },
            { letter: "D", text: "75°" }
          ],
          correct: "D"
        },
        {
          id: "reason",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which crossing to the tree is shorter, AC or BC? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "AC, because it is opposite the smaller angle, ∠ABC." },
            { letter: "B", text: "BC, because it is opposite the smaller angle, ∠CAB." },
            { letter: "C", text: "BC, because ∠ABC is the smallest angle." },
            { letter: "D", text: "AC, because ∠ACB is the largest angle." }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders AB, BC and AC from longest to shortest?",
          choices: [
            { letter: "A", text: "BC, AB, AC" },
            { letter: "B", text: "AB, AC, BC" },
            { letter: "C", text: "AC, AB, BC" },
            { letter: "D", text: "AC, BC, AB" }
          ],
          correct: "C"
        },
        {
          id: "stake",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A stake E is 65 m from A. A, B and E are not on one line. Which inequality gives all possible distances BE, in meters?",
          choices: [
            { letter: "A", text: "40 < BE < 65" },
            { letter: "B", text: "0 < BE < 105" },
            { letter: "C", text: "25 ≤ BE ≤ 105" },
            { letter: "D", text: "25 < BE < 105" }
          ],
          correct: "D"
        },
        {
          id: "must",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement must be true?",
          choices: [
            { letter: "A", text: "BC is less than 40 m." },
            { letter: "B", text: "BC is more than 40 m." },
            { letter: "C", text: "AC is less than 40 m." },
            { letter: "D", text: "BC and AC are the same length." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr1-worms-tent-guy-line",
      family: "GEO",
      mode: "worms",
      title: "The Tent and Its Guy Line",
      kind: "Triangles · G.TR.1",
      blurb: "A tent with equal sides, a guy line and a stake.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Front view of a tent: triangle TLR with tick marks showing TL equal to TR, standing on level ground. A guy line runs from the top T to a stake S on the ground beyond R. Angle TLR is 62 degrees and angle TSR is 34 degrees\"><line class=\"thin\" x1=\"14\" y1=\"138\" x2=\"306\" y2=\"138\"/><polygon class=\"sh\" points=\"94,44 44,138 144,138\"/><polygon class=\"ln\" points=\"94,44 44,138 144,138\"/><line class=\"ln\" x1=\"94\" y1=\"44\" x2=\"233.4\" y2=\"138\"/><line class=\"ln\" x1=\"144\" y1=\"138\" x2=\"233.4\" y2=\"138\"/><line class=\"thin\" x1=\"233.4\" y1=\"138\" x2=\"233.4\" y2=\"148\"/><line class=\"thin\" x1=\"64.6\" y1=\"88.6\" x2=\"73.4\" y2=\"93.3\"/><line class=\"thin\" x1=\"114.6\" y1=\"93.3\" x2=\"123.4\" y2=\"88.6\"/><path class=\"thin\" d=\"M62 138 A18 18 0 0 0 52.5 122.1\"/><text class=\"sm\" x=\"71.4\" y=\"125.7\" text-anchor=\"middle\">62°</text><path class=\"thin\" d=\"M208.5 121.2 A30 30 0 0 0 203.4 138\"/><text class=\"sm\" x=\"187.5\" y=\"128.2\" text-anchor=\"middle\">34°</text><circle class=\"dt\" cx=\"94\" cy=\"44\" r=\"3\"/><circle class=\"dt\" cx=\"44\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"144\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"233.4\" cy=\"138\" r=\"3\"/><text x=\"94\" y=\"37.3\" text-anchor=\"middle\">T</text><text x=\"42\" y=\"158.3\" text-anchor=\"middle\">L</text><text x=\"144\" y=\"158.3\" text-anchor=\"middle\">R</text><text x=\"245.4\" y=\"155.3\" text-anchor=\"middle\">S</text><text class=\"sm\" x=\"214\" y=\"86.2\" text-anchor=\"middle\">guy line</text></svg></figure><p class=\"geo-given\">The front of a tent is the triangle <strong>TLR</strong>, with TL ≅ TR. A guy line runs from the top T to a stake <strong>S</strong>, and L, R and S lie on the level ground line. m∠TLR = 62° and m∠TSR = 34°.</p>",
      claims: [
        {
          id: "peak",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠LTR, the angle at the peak of the tent?",
          choices: [
            { letter: "A", text: "118°" },
            { letter: "B", text: "62°" },
            { letter: "C", text: "56°" },
            { letter: "D", text: "28°" }
          ],
          correct: "C"
        },
        {
          id: "trs",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠TRS, the angle between the tent side TR and the ground RS?",
          choices: [
            { letter: "A", text: "62°" },
            { letter: "B", text: "118°" },
            { letter: "C", text: "124°" },
            { letter: "D", text: "146°" }
          ],
          correct: "B"
        },
        {
          id: "rts",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠RTS, the angle between the tent side TR and the guy line?",
          choices: [
            { letter: "A", text: "28°" },
            { letter: "B", text: "34°" },
            { letter: "C", text: "84°" },
            { letter: "D", text: "62°" }
          ],
          correct: "A"
        },
        {
          id: "not",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement about the tent is NOT true?",
          choices: [
            { letter: "A", text: "TS is longer than TL." },
            { letter: "B", text: "LR is shorter than TL." },
            { letter: "C", text: "TR is longer than TS." },
            { letter: "D", text: "RS is shorter than TR." }
          ],
          correct: "C"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the sides of △TRS from shortest to longest?",
          choices: [
            { letter: "A", text: "TS, TR, RS" },
            { letter: "B", text: "TR, RS, TS" },
            { letter: "C", text: "RS, TS, TR" },
            { letter: "D", text: "RS, TR, TS" }
          ],
          correct: "D"
        },
        {
          id: "small",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "A smaller tent has sides of 1.4 m and a guy line 2.3 m long. The top, a bottom corner and the stake form a triangle. Which could be the distance from that corner to the stake?",
          choices: [
            { letter: "A", text: "0.9 m" },
            { letter: "B", text: "1.2 m" },
            { letter: "C", text: "3.7 m" },
            { letter: "D", text: "4.6 m" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr1-worms-meadow-paths",
      family: "GEO",
      mode: "worms",
      title: "Animal Paths in the Meadow",
      kind: "Triangles · G.TR.1",
      blurb: "A fox den, a pond and a hollow log, with paths written in x.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Meadow map drawn to scale: animal paths form triangle FPL with a fox den at F, a pond at P and a hollow log at L. FP is x plus 14 meters, PL is 2x plus 3 meters and FL is 3x minus 8 meters. The path from L through P continues to a stream crossing at S\"><ellipse class=\"sh2\" cx=\"100\" cy=\"152\" rx=\"18\" ry=\"7\"/><path class=\"thin\" d=\"M16 128 Q24 136 18 144 Q12 152 20 160\"/><line class=\"ln\" x1=\"22\" y1=\"144\" x2=\"231.4\" y2=\"144\"/><line class=\"ln\" x1=\"98\" y1=\"144\" x2=\"146.3\" y2=\"29.6\"/><line class=\"ln\" x1=\"146.3\" y1=\"29.6\" x2=\"231.4\" y2=\"144\"/><rect class=\"sh\" x=\"235.4\" y=\"132\" width=\"26\" height=\"8\"/><circle class=\"dt\" cx=\"146.3\" cy=\"29.6\" r=\"3\"/><circle class=\"dt\" cx=\"98\" cy=\"144\" r=\"3\"/><circle class=\"dt\" cx=\"231.4\" cy=\"144\" r=\"3\"/><circle class=\"dt\" cx=\"22\" cy=\"144\" r=\"3\"/><text x=\"146.3\" y=\"22.9\" text-anchor=\"middle\">F</text><text x=\"92\" y=\"135.3\" text-anchor=\"middle\">P</text><text x=\"227.4\" y=\"163.3\" text-anchor=\"middle\">L</text><text x=\"36\" y=\"137.3\" text-anchor=\"middle\">S</text><text x=\"87.1\" y=\"77.3\" text-anchor=\"middle\">(x + 14) m</text><text x=\"219.3\" y=\"69.4\" text-anchor=\"middle\">(3x − 8) m</text><text x=\"164.7\" y=\"162.3\" text-anchor=\"middle\">(2x + 3) m</text><text class=\"sm\" x=\"248.4\" y=\"126.2\" text-anchor=\"middle\">log</text><text class=\"sm\" x=\"178.3\" y=\"33.8\" text-anchor=\"middle\">den</text></svg></figure><p class=\"geo-given\">Animal paths join a fox den <strong>F</strong>, a pond <strong>P</strong> and a hollow log <strong>L</strong>. FP = (x + 14) m, PL = (2x + 3) m and FL = (3x − 8) m. A ranger measures FL = 31 m. The path from L to P continues straight past P to a stream crossing <strong>S</strong>.</p>",
      claims: [
        {
          id: "pl",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "How long is the path PL?",
          choices: [
            { letter: "A", text: "29 m" },
            { letter: "B", text: "27 m" },
            { letter: "C", text: "13 m" },
            { letter: "D", text: "65 m" }
          ],
          correct: "A"
        },
        {
          id: "largest",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which angle of △FPL is the largest?",
          choices: [
            { letter: "A", text: "∠F" },
            { letter: "B", text: "∠P" },
            { letter: "C", text: "∠L" },
            { letter: "D", text: "You cannot tell without a protractor." }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the angles of △FPL from smallest to largest?",
          choices: [
            { letter: "A", text: "∠P, ∠F, ∠L" },
            { letter: "B", text: "∠F, ∠L, ∠P" },
            { letter: "C", text: "∠L, ∠P, ∠F" },
            { letter: "D", text: "∠L, ∠F, ∠P" }
          ],
          correct: "D"
        },
        {
          id: "x4",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Three other paths would be (x + 14) m, (2x + 3) m and (3x − 8) m long, with x = 4. Could they form a triangle? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes, because 18 + 11 is greater than 4." },
            { letter: "B", text: "Yes, because every path has a positive length." },
            { letter: "C", text: "No, because 11 + 4 is less than 18." },
            { letter: "D", text: "No, because 4 + 18 is less than 11." }
          ],
          correct: "C"
        },
        {
          id: "x8",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Another meadow has three paths of (x + 14) m, (2x + 3) m and (3x − 8) m, labeled FP, PL and FL as in this figure, with x = 8. Which angle of that triangle would be the largest?",
          choices: [
            { letter: "A", text: "∠P" },
            { letter: "B", text: "∠F" },
            { letter: "C", text: "∠F and ∠P would tie" },
            { letter: "D", text: "∠L" }
          ],
          correct: "D"
        },
        {
          id: "fps",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "The ranger measures m∠F ≈ 60° and m∠L ≈ 53°. What is m∠FPS, to the nearest degree?",
          choices: [
            { letter: "A", text: "67°" },
            { letter: "B", text: "113°" },
            { letter: "C", text: "120°" },
            { letter: "D", text: "127°" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr1-worms-ridge-trail",
      family: "GEO",
      mode: "worms",
      title: "Peaks from the Ridge Trail",
      kind: "Triangles · G.TR.1",
      blurb: "A straight trail, one peak and four sightings.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A straight trail through A, B, C and D, in that order, with sightlines from A, B and C up to the peak M. Angle MAB is 2x plus 10 degrees, angle AMB is x plus 10 degrees, angle MBC is 5x minus 10 degrees and angle MCD is 115 degrees\"><line class=\"thin\" x1=\"6\" y1=\"142\" x2=\"312\" y2=\"142\"/><line class=\"ln\" x1=\"14\" y1=\"142\" x2=\"304\" y2=\"142\"/><line class=\"ln\" x1=\"14\" y1=\"142\" x2=\"157.1\" y2=\"21.9\"/><line class=\"ln\" x1=\"101.1\" y1=\"142\" x2=\"157.1\" y2=\"21.9\"/><line class=\"ln\" x1=\"213.1\" y1=\"142\" x2=\"157.1\" y2=\"21.9\"/><path class=\"thin\" d=\"M32 142 A18 18 0 0 0 27.8 130.4\"/><text class=\"sm\" x=\"66\" y=\"137.2\" text-anchor=\"middle\">(2x + 10)⁠°</text><path class=\"thin\" d=\"M131.1 43.8 A34 34 0 0 0 142.8 52.7\"/><line class=\"thin\" x1=\"136.4\" y1=\"48.9\" x2=\"107.1\" y2=\"61.9\"/><text class=\"sm\" x=\"77.1\" y=\"68.1\" text-anchor=\"middle\">(x + 10)⁠°</text><path class=\"thin\" d=\"M107.9 127.5 A16 16 0 0 1 117.1 142\"/><text class=\"sm\" x=\"145.1\" y=\"136.2\" text-anchor=\"middle\">(5x − 10)⁠°</text><path class=\"thin\" d=\"M207.2 129.3 A14 14 0 0 1 227.1 142\"/><text class=\"sm\" x=\"249.1\" y=\"130.2\" text-anchor=\"middle\">115°</text><circle class=\"dt\" cx=\"14\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"101.1\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"213.1\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"304\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"157.1\" cy=\"21.9\" r=\"3\"/><text x=\"14\" y=\"161.3\" text-anchor=\"middle\">A</text><text x=\"101.1\" y=\"161.3\" text-anchor=\"middle\">B</text><text x=\"213.1\" y=\"161.3\" text-anchor=\"middle\">C</text><text x=\"304\" y=\"161.3\" text-anchor=\"middle\">D</text><text x=\"171.1\" y=\"21.2\" text-anchor=\"middle\">M</text><text class=\"sm\" x=\"290\" y=\"132.2\" text-anchor=\"middle\">trail</text></svg></figure><p class=\"geo-given\">A straight trail passes <strong>A</strong>, <strong>B</strong>, <strong>C</strong> and <strong>D</strong>, in that order. From each point a hiker sights the peak <strong>M</strong>. m∠MAB = (2x + 10)⁠°, m∠AMB = (x + 10)⁠°, m∠MBC = (5x − 10)⁠° and m∠MCD = 115°.</p>",
      claims: [
        {
          id: "x",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "Use △ABM and the angle at B outside it to find x.",
          choices: [
            { letter: "A", text: "20/3" },
            { letter: "B", text: "21.25" },
            { letter: "C", text: "15" },
            { letter: "D", text: "65" }
          ],
          correct: "C"
        },
        {
          id: "bmc",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠BMC, the angle at the peak between the sightlines from B and C?",
          choices: [
            { letter: "A", text: "50°" },
            { letter: "B", text: "65°" },
            { letter: "C", text: "130°" },
            { letter: "D", text: "25°" }
          ],
          correct: "A"
        },
        {
          id: "equal",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which two sightlines are the same length? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "MA and MB, because both meet the trail." },
            { letter: "B", text: "MB and MC, because ∠MBC ≅ ∠MCB." },
            { letter: "C", text: "MA and MC, because ∠MAB ≅ ∠MCD." },
            { letter: "D", text: "MB and MC, because ∠BMC is a right angle." }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the sides of △ABM from shortest to longest?",
          choices: [
            { letter: "A", text: "AM, BM, AB" },
            { letter: "B", text: "BM, AB, AM" },
            { letter: "C", text: "AB, AM, BM" },
            { letter: "D", text: "AB, BM, AM" }
          ],
          correct: "D"
        },
        {
          id: "not",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement about the sightlines is NOT true?",
          choices: [
            { letter: "A", text: "MA is longer than MC." },
            { letter: "B", text: "AB is shorter than MB." },
            { letter: "C", text: "MC is longer than MA." },
            { letter: "D", text: "BC is shorter than MB." }
          ],
          correct: "C"
        },
        {
          id: "lakes",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "From the peak, one lake is 4.2 km away and another is 6.5 km away. The peak and the lakes are not on one line. What are the least and greatest whole numbers of kilometers the lakes could be apart?",
          choices: [
            { letter: "A", text: "3 km and 10 km" },
            { letter: "B", text: "2 km and 11 km" },
            { letter: "C", text: "3 km and 11 km" },
            { letter: "D", text: "2.3 km and 10.7 km" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr1-worms-crossed-lines",
      family: "GEO",
      mode: "worms",
      title: "The Crossed Fishing Lines",
      kind: "Triangles · G.TR.1",
      blurb: "Two lines cross between a dock and two buoys.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Two anglers on a straight dock at A and B. Their straight lines AD and BE cross at C and reach the buoys D and E, which are joined by a rope DE. Angle CAB is 3x minus 1 degrees, angle CBA is 2x plus 6 degrees, angle CDE is 4x minus 10 degrees and angle CED is 2x plus 1 degrees\"><rect class=\"sh2\" x=\"30\" y=\"150\" width=\"222\" height=\"10\"/><line class=\"ln\" x1=\"60\" y1=\"150\" x2=\"228\" y2=\"150\"/><line class=\"ln\" x1=\"60\" y1=\"150\" x2=\"200.1\" y2=\"28.2\"/><line class=\"ln\" x1=\"228\" y1=\"150\" x2=\"24.7\" y2=\"12.9\"/><line class=\"ln\" x1=\"200.1\" y1=\"28.2\" x2=\"24.7\" y2=\"12.9\"/><circle class=\"thin\" cx=\"200.1\" cy=\"28.2\" r=\"5\"/><circle class=\"thin\" cx=\"24.7\" cy=\"12.9\" r=\"5\"/><path class=\"thin\" d=\"M80 150 A20 20 0 0 0 75.1 136.9\"/><text class=\"sm\" x=\"112\" y=\"146.2\" text-anchor=\"middle\">(3x − 1)⁠°</text><path class=\"thin\" d=\"M208 150 A20 20 0 0 1 211.4 138.8\"/><text class=\"sm\" x=\"170\" y=\"146.2\" text-anchor=\"middle\">(2x + 6)⁠°</text><path class=\"thin\" d=\"M188 38.7 A16 16 0 0 1 184.1 26.8\"/><text class=\"sm\" x=\"147.1\" y=\"45.4\" text-anchor=\"middle\">(4x − 10)⁠°</text><path class=\"thin\" d=\"M43 25.2 A22 22 0 0 0 46.7 14.8\"/><text class=\"sm\" x=\"90.7\" y=\"34.1\" text-anchor=\"middle\">(2x + 1)⁠°</text><circle class=\"dt\" cx=\"60\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"228\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"133.4\" cy=\"86.2\" r=\"3\"/><circle class=\"dt\" cx=\"200.1\" cy=\"28.2\" r=\"3\"/><circle class=\"dt\" cx=\"24.7\" cy=\"12.9\" r=\"3\"/><text x=\"46\" y=\"146.3\" text-anchor=\"middle\">A</text><text x=\"242\" y=\"146.3\" text-anchor=\"middle\">B</text><text x=\"133.4\" y=\"107.5\" text-anchor=\"middle\">C</text><text x=\"214.1\" y=\"37.5\" text-anchor=\"middle\">D</text><text x=\"10.7\" y=\"20.2\" text-anchor=\"middle\">E</text><text class=\"sm\" x=\"274\" y=\"159.2\" text-anchor=\"middle\">dock</text></svg></figure><p class=\"geo-given\">Anglers at <strong>A</strong> and <strong>B</strong> stand on a straight dock. Their straight lines run to the buoys <strong>D</strong> and <strong>E</strong> and cross at <strong>C</strong>. A rope DE joins the buoys. m∠CAB = (3x − 1)⁠°, m∠CBA = (2x + 6)⁠°, m∠CDE = (4x − 10)⁠° and m∠CED = (2x + 1)⁠°.</p>",
      claims: [
        {
          id: "x",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "The angles at C are vertical angles. What is the value of x?",
          choices: [
            { letter: "A", text: "14" },
            { letter: "B", text: "9" },
            { letter: "C", text: "17" },
            { letter: "D", text: "105" }
          ],
          correct: "A"
        },
        {
          id: "acb",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠ACB, the angle between the two lines at C?",
          choices: [
            { letter: "A", text: "75°" },
            { letter: "B", text: "105°" },
            { letter: "C", text: "41°" },
            { letter: "D", text: "285°" }
          ],
          correct: "B"
        },
        {
          id: "bcd",
          sol: "G.TR.1",
          sub: "G.TR.1.3",
          stem: "What is m∠BCD?",
          choices: [
            { letter: "A", text: "105°" },
            { letter: "B", text: "46°" },
            { letter: "C", text: "34°" },
            { letter: "D", text: "75°" }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which list orders the sides of △DCE from shortest to longest?",
          choices: [
            { letter: "A", text: "DE, CE, CD" },
            { letter: "B", text: "CE, CD, DE" },
            { letter: "C", text: "CD, CE, DE" },
            { letter: "D", text: "CD, DE, CE" }
          ],
          correct: "C"
        },
        {
          id: "true",
          sol: "G.TR.1",
          sub: "G.TR.1.1",
          stem: "Which statement is true?",
          choices: [
            { letter: "A", text: "BC is the longest side of △ABC." },
            { letter: "B", text: "CE is shorter than CD." },
            { letter: "C", text: "DE is shorter than CE." },
            { letter: "D", text: "AC is the shortest side of △ABC." }
          ],
          correct: "D"
        },
        {
          id: "n",
          sol: "G.TR.1",
          sub: "G.TR.1.2",
          stem: "Three ropes on the dock are (n + 1) ft, (n + 4) ft and 2n ft long. They will form a triangle. Which inequality gives all possible values of n?",
          choices: [
            { letter: "A", text: "n > 3/2" },
            { letter: "B", text: "3/2 < n < 5" },
            { letter: "C", text: "n > −3/2" },
            { letter: "D", text: "n > 0" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
