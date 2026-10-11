/* SOL Labyrinth — Geometry game (family GEO), G.TR.3 similar triangles (Virginia 2023 Geometry SOL): game modes "ring"
   (Wolf Ring: art, design, music and making things) and "worms" (Root Worms: nature and the outdoors). Original items only.
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given facts,
   then six questions about it. Every numeric answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-tr3-ring-pantograph",
      family: "GEO",
      mode: "ring",
      title: "The Pantograph",
      kind: "Triangles · G.TR.3",
      blurb: "Rods and a pivot copy a drawing at a larger size.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A pantograph: rod OB through A from the fixed pivot O, rod AP to the stylus P and rod BQ to the pen Q, with AP parallel to BQ; O, P and Q lie on one dashed line; OA 10 cm, AB 15 cm, AP 8 cm\">" +
        "<line class=\"thin dash\" x1=\"36\" y1=\"140\" x2=\"246\" y2=\"140\"/><line class=\"ln\" x1=\"36\" y1=\"140\" x2=\"167.3\" y2=\"24.2\"/>" +
        "<line class=\"ln\" x1=\"88.5\" y1=\"93.7\" x2=\"120\" y2=\"140\"/><line class=\"ac\" x1=\"167.3\" y1=\"24.2\" x2=\"246\" y2=\"140\"/>" +
        "<path class=\"thin\" d=\"M99.1 116.5 L105.8 119.2 L105.8 112\"/><path class=\"thin\" d=\"M203.9 85.2 L210.6 87.9 L210.5 80.7\"/>" +
        "<circle class=\"dt\" cx=\"36\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"88.5\" cy=\"93.7\" r=\"3\"/><circle class=\"dt\" cx=\"167.3\" cy=\"24.2\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"120\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"246\" cy=\"140\" r=\"3\"/><text x=\"34\" y=\"159\" text-anchor=\"middle\">O</text>" +
        "<text x=\"77.5\" y=\"91.7\" text-anchor=\"middle\">A</text><text x=\"165.3\" y=\"17.2\" text-anchor=\"middle\">B</text>" +
        "<text x=\"120\" y=\"159\" text-anchor=\"middle\">P</text><text x=\"248\" y=\"159\" text-anchor=\"middle\">Q</text>" +
        "<text x=\"53\" y=\"111.3\" text-anchor=\"middle\">10 cm</text><text x=\"118.6\" y=\"53.5\" text-anchor=\"middle\">15 cm</text>" +
        "<text x=\"115\" y=\"114.5\" text-anchor=\"middle\">8 cm</text><text class=\"sm\" x=\"150\" y=\"158\" text-anchor=\"middle\">stylus</text>" +
        "<text class=\"sm\" x=\"284\" y=\"136\" text-anchor=\"middle\">pen</text><text class=\"sm\" x=\"40\" y=\"92\" text-anchor=\"middle\">pivot</text></svg></figure>" +
        "<p class=\"geo-given\">A pantograph copies a drawing. The pivot <strong>O</strong> is fixed, the stylus <strong>P</strong> traces the drawing and the pen <strong>Q</strong> draws the copy. O, A and B lie on one rod, O, P and Q stay in one line, and rod <strong>AP</strong> stays parallel to rod <strong>BQ</strong>. OA = 10 cm, AB = 15 cm and AP = 8 cm.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that △OAP ∼ △OBQ?",
          choices: [
            { letter: "A", text: "SSS∼" },
            { letter: "B", text: "SAS∼" },
            { letter: "C", text: "AA" },
            { letter: "D", text: "ASA" }
          ],
          correct: "C"
        },
        {
          id: "angles",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which pair of angles is congruent because AP ∥ BQ?",
          choices: [
            { letter: "A", text: "∠OAP ≅ ∠OBQ" },
            { letter: "B", text: "∠OAP ≅ ∠OQB" },
            { letter: "C", text: "∠APO ≅ ∠OBQ" },
            { letter: "D", text: "∠AOP ≅ ∠OQB" }
          ],
          correct: "A"
        },
        {
          id: "bq",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is rod BQ?",
          choices: [
            { letter: "A", text: "12 cm" },
            { letter: "B", text: "23 cm" },
            { letter: "C", text: "3.2 cm" },
            { letter: "D", text: "20 cm" }
          ],
          correct: "D"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from the drawing traced by P to the copy drawn by Q?",
          choices: [
            { letter: "A", text: "2/5" },
            { letter: "B", text: "5/2" },
            { letter: "C", text: "3/2" },
            { letter: "D", text: "5/3" }
          ],
          correct: "B"
        },
        {
          id: "copy",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The stylus traces a line segment 6 cm long. How long is the segment the pen draws?",
          choices: [
            { letter: "A", text: "2.4 cm" },
            { letter: "B", text: "21 cm" },
            { letter: "C", text: "15 cm" },
            { letter: "D", text: "37.5 cm" }
          ],
          correct: "C"
        },
        {
          id: "homemade",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Kai builds his own pantograph with OA = 9 cm, OB = 27 cm, OP = 11 cm and OQ = 33 cm, with ∠O shared. Is △OAP ∼ △OBQ? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 27 − 9 = 33 − 11" },
            { letter: "B", text: "No; 9/11 ≠ 27/33" },
            { letter: "C", text: "No; 27/9 ≠ 33/11" },
            { letter: "D", text: "Yes; 27/9 = 33/11 and ∠O is shared" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-ring-sculpture-model",
      family: "GEO",
      mode: "ring",
      title: "The Sculpture and Its Model",
      kind: "Triangles · G.TR.3",
      blurb: "A small model and the full-size steel triangle.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Two triangles: a small model ABC with sides AB 7 in., BC 12 in. and AC 15 in., and a large sculpture XYZ with sides XZ 42 in., XY 72 in. and YZ 90 in.\">" +
        "<polygon class=\"ln\" points=\"28,90.8 36,132 108,132\"/><polygon class=\"ln\" points=\"178.7,67.7 303.5,132 128,132\"/>" +
        "<circle class=\"dt\" cx=\"28\" cy=\"90.8\" r=\"3\"/><circle class=\"dt\" cx=\"36\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"108\" cy=\"132\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"178.7\" cy=\"67.7\" r=\"3\"/><circle class=\"dt\" cx=\"303.5\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"128\" cy=\"132\" r=\"3\"/>" +
        "<text x=\"19.2\" y=\"87.6\" text-anchor=\"middle\">A</text><text x=\"25.1\" y=\"144\" text-anchor=\"middle\">B</text>" +
        "<text x=\"120.5\" y=\"140.4\" text-anchor=\"middle\">C</text><text x=\"172.7\" y=\"62.3\" text-anchor=\"middle\">X</text>" +
        "<text x=\"316.2\" y=\"139.7\" text-anchor=\"middle\">Y</text><text x=\"115.5\" y=\"140.6\" text-anchor=\"middle\">Z</text>" +
        "<text x=\"12.4\" y=\"120.2\" text-anchor=\"middle\">7 in.</text><text x=\"72\" y=\"149\" text-anchor=\"middle\">12 in.</text>" +
        "<text x=\"74.4\" y=\"103.9\" text-anchor=\"middle\">15 in.</text><text x=\"136.1\" y=\"91.2\" text-anchor=\"middle\">42 in.</text>" +
        "<text x=\"251.2\" y=\"85.3\" text-anchor=\"middle\">72 in.</text><text x=\"215.8\" y=\"149\" text-anchor=\"middle\">90 in.</text>" +
        "<text class=\"sm\" x=\"80\" y=\"154\" text-anchor=\"middle\">model</text><text class=\"sm\" x=\"216\" y=\"154\" text-anchor=\"middle\">sculpture</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">An artist builds a model <strong>△ABC</strong> of a steel sculpture <strong>△XYZ</strong>. Model: AB = 7 in., BC = 12 in. and AC = 15 in. Sculpture: XZ = 42 in., XY = 72 in. and YZ = 90 in.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that the model is similar to the sculpture?",
          choices: [
            { letter: "A", text: "AA" },
            { letter: "B", text: "SSS∼" },
            { letter: "C", text: "SAS∼" },
            { letter: "D", text: "SSS" }
          ],
          correct: "B"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement is correct?",
          choices: [
            { letter: "A", text: "△ABC ∼ △XYZ" },
            { letter: "B", text: "△ABC ∼ △ZYX" },
            { letter: "C", text: "△ABC ∼ △XZY" },
            { letter: "D", text: "△ABC ∼ △ZXY" }
          ],
          correct: "D"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from the model to the sculpture?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "1/6" },
            { letter: "C", text: "35" },
            { letter: "D", text: "4.8" }
          ],
          correct: "A"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the perimeter of the sculpture?",
          choices: [
            { letter: "A", text: "34 in." },
            { letter: "B", text: "1224 in." },
            { letter: "C", text: "204 in." },
            { letter: "D", text: "about 5.7 in." }
          ],
          correct: "C"
        },
        {
          id: "second",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "A second model has sides 14 in., 24 in. and 32 in. Is it similar to the sculpture? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No; 90/32 ≠ 42/14" },
            { letter: "B", text: "Yes; 42/14 = 72/24 = 90/32" },
            { letter: "C", text: "No; 72/24 ≠ 42/14" },
            { letter: "D", text: "Yes; 42 − 14 = 72 − 24" }
          ],
          correct: "A"
        },
        {
          id: "mini",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "A mini model of the same sculpture has a longest side of 7.5 in. How long is its shortest side?",
          choices: [
            { letter: "A", text: "about 16.1 in." },
            { letter: "B", text: "3.5 in." },
            { letter: "C", text: "6 in." },
            { letter: "D", text: "about 0.6 in." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-ring-quilt-patch",
      family: "GEO",
      mode: "ring",
      title: "The Quilt Patch",
      kind: "Triangles · G.TR.3",
      blurb: "A seam across a right-triangle patch: parallel or not?",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Right triangle ABC, a quilt patch, with the right angle at A, AB up the left and AC along the bottom; a seam DE joins D on AB to E on AC; AD 9 in., DB 6 in., AE 12 in., EC 8 in. and BC 25 in.; triangle ADE is shaded\">" +
        "<polygon class=\"sh\" points=\"88,150 88,92.4 164.8,150\"/><polygon class=\"ln\" points=\"88,150 88,54 216,150\"/>" +
        "<line class=\"ac\" x1=\"88\" y1=\"92.4\" x2=\"164.8\" y2=\"150\"/><path class=\"thin\" d=\"M88 141 L97 141 L97 150\"/><circle class=\"dt\" cx=\"88\" cy=\"150\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"88\" cy=\"54\" r=\"3\"/><circle class=\"dt\" cx=\"216\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"88\" cy=\"92.4\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"164.8\" cy=\"150\" r=\"3\"/><text x=\"76\" y=\"163\" text-anchor=\"middle\">A</text><text x=\"76\" y=\"57\" text-anchor=\"middle\">B</text>" +
        "<text x=\"227\" y=\"159\" text-anchor=\"middle\">C</text><text x=\"76\" y=\"97.4\" text-anchor=\"middle\">D</text>" +
        "<text x=\"164.8\" y=\"169\" text-anchor=\"middle\">E</text><text x=\"58\" y=\"126.2\" text-anchor=\"middle\">9 in.</text>" +
        "<text x=\"58\" y=\"78.2\" text-anchor=\"middle\">6 in.</text><text x=\"126.4\" y=\"169\" text-anchor=\"middle\">12 in.</text>" +
        "<text x=\"190.4\" y=\"169\" text-anchor=\"middle\">8 in.</text><text x=\"161.6\" y=\"94.2\" text-anchor=\"middle\">25 in.</text>" +
        "<text class=\"sm\" x=\"268\" y=\"44\" text-anchor=\"middle\">quilt patch</text></svg></figure>" +
        "<p class=\"geo-given\">A quilt patch is the right triangle <strong>ABC</strong>, with the right angle at A. A straight seam <strong>DE</strong> joins D on AB to E on AC. AD = 9 in., DB = 6 in., AE = 12 in., EC = 8 in. and BC = 25 in.</p>",
      claims: [
        {
          id: "parallel",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Is the seam DE parallel to BC? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 9/6 = 12/8" },
            { letter: "B", text: "No; 9/12 ≠ 6/8" },
            { letter: "C", text: "Yes; 9 + 6 = 12 + 8" },
            { letter: "D", text: "No; 9/6 ≠ 12/8" }
          ],
          correct: "A"
        },
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Using AD, AB, AE, AC and the angle at A, which criterion shows △ADE ∼ △ABC?",
          choices: [
            { letter: "A", text: "AA" },
            { letter: "B", text: "SSS∼" },
            { letter: "C", text: "SAS∼" },
            { letter: "D", text: "SAS" }
          ],
          correct: "C"
        },
        {
          id: "seam",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is the seam DE?",
          choices: [
            { letter: "A", text: "37.5 in." },
            { letter: "B", text: "15 in." },
            { letter: "C", text: "19 in." },
            { letter: "D", text: "10 in." }
          ],
          correct: "B"
        },
        {
          id: "second",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "A second seam FG will run parallel to BC, with F on AB and G on AC. If AF = 12 in., how long is AG?",
          choices: [
            { letter: "A", text: "9 in." },
            { letter: "B", text: "17 in." },
            { letter: "C", text: "20 in." },
            { letter: "D", text: "16 in." }
          ],
          correct: "D"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the perimeter of the small triangle ADE?",
          choices: [
            { letter: "A", text: "36 in." },
            { letter: "B", text: "21.6 in." },
            { letter: "C", text: "46 in." },
            { letter: "D", text: "24 in." }
          ],
          correct: "A"
        },
        {
          id: "not",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Which statement is NOT true?",
          choices: [
            { letter: "A", text: "AD/AB = DE/BC" },
            { letter: "B", text: "∠ADE ≅ ∠ABC" },
            { letter: "C", text: "△AED ∼ △ACB" },
            { letter: "D", text: "AD/DB = DE/BC" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-ring-camera-lens",
      family: "GEO",
      mode: "ring",
      title: "The Camera and the Statue",
      kind: "Triangles · G.TR.3",
      blurb: "Light through a lens makes a tiny upside-down image.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A statue AB stands on the left; rays from A and B cross at the lens L and reach D and C on the camera sensor at the right; the dashed axis through L meets the statue at M and the sensor at N at right angles\">" +
        "<rect class=\"sh2\" x=\"192\" y=\"52\" width=\"98\" height=\"62\"/><rect class=\"sh\" x=\"256.4\" y=\"46\" width=\"5\" height=\"76\"/>" +
        "<ellipse class=\"thin\" cx=\"196\" cy=\"82\" rx=\"4\" ry=\"20\"/><line class=\"thin dash\" x1=\"40\" y1=\"82\" x2=\"268.4\" y2=\"82\"/>" +
        "<line class=\"ln\" x1=\"40\" y1=\"17\" x2=\"40\" y2=\"137\"/><line class=\"thin\" x1=\"40\" y1=\"17\" x2=\"258.4\" y2=\"108\"/>" +
        "<line class=\"thin\" x1=\"40\" y1=\"137\" x2=\"258.4\" y2=\"60\"/><line class=\"ac\" x1=\"258.4\" y1=\"60\" x2=\"258.4\" y2=\"108\"/>" +
        "<path class=\"thin\" d=\"M40 75 L47 75 L47 82\"/><path class=\"thin\" d=\"M252.4 82 L252.4 88 L258.4 88\"/><circle class=\"dt\" cx=\"40\" cy=\"17\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"40\" cy=\"137\" r=\"3\"/><circle class=\"dt\" cx=\"196\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"258.4\" cy=\"60\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"258.4\" cy=\"108\" r=\"3\"/><text x=\"28\" y=\"22\" text-anchor=\"middle\">A</text><text x=\"28\" y=\"142\" text-anchor=\"middle\">B</text>" +
        "<text x=\"28\" y=\"87\" text-anchor=\"middle\">M</text><text x=\"192\" y=\"57\" text-anchor=\"middle\">L</text>" +
        "<text x=\"272.4\" y=\"61\" text-anchor=\"middle\">C</text><text x=\"272.4\" y=\"117\" text-anchor=\"middle\">D</text>" +
        "<text x=\"276.4\" y=\"87\" text-anchor=\"middle\">N</text><text x=\"64\" y=\"108\" text-anchor=\"middle\">2.4 m</text>" +
        "<text x=\"132\" y=\"137\" text-anchor=\"middle\">8 m</text><text x=\"226\" y=\"133\" text-anchor=\"middle\">50 mm</text>" +
        "<text class=\"sm\" x=\"66\" y=\"17\" text-anchor=\"middle\">statue</text><text class=\"sm\" x=\"244\" y=\"48\" text-anchor=\"middle\">camera</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">A statue <strong>AB</strong> is 2.4 m tall and 8 m from the camera's lens <strong>L</strong> (LM = 8 m). Light from A and B crosses at L and reaches the sensor at <strong>D</strong> and <strong>C</strong>. The sensor is 50 mm behind the lens (LN = 50 mm). AB ∥ CD, and the axis MN is perpendicular to both.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is the statue's triangle LAB similar to the image's triangle?",
          choices: [
            { letter: "A", text: "SAS∼: LM/LN and the vertical angles at L" },
            { letter: "B", text: "AA: vertical angles at L, and ∠A ≅ ∠D" },
            { letter: "C", text: "SSS∼: all three sides of each are known" },
            { letter: "D", text: "AA: vertical angles at L, and ∠A ≅ ∠C" }
          ],
          correct: "B"
        },
        {
          id: "ratio",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Which proportion is true for the statue's triangle and the image's triangle?",
          choices: [
            { letter: "A", text: "AB/DC = LA/LC" },
            { letter: "B", text: "AB/DC = LB/LD" },
            { letter: "C", text: "LA/LD = LC/LB" },
            { letter: "D", text: "AB/DC = LA/LD" }
          ],
          correct: "D"
        },
        {
          id: "image",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How tall is the statue's image CD on the sensor?",
          choices: [
            { letter: "A", text: "about 166.7 mm" },
            { letter: "B", text: "120 mm" },
            { letter: "C", text: "15 mm" },
            { letter: "D", text: "1.5 mm" }
          ],
          correct: "C"
        },
        {
          id: "fill",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The sensor is 24 mm tall. How far from the statue should the lens be so that the image exactly fills the sensor's height?",
          choices: [
            { letter: "A", text: "5 m" },
            { letter: "B", text: "12.8 m" },
            { letter: "C", text: "0.5 m" },
            { letter: "D", text: "about 1.2 m" }
          ],
          correct: "A"
        },
        {
          id: "reason",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which reason proves that ∠BAL ≅ ∠CDL?",
          choices: [
            { letter: "A", text: "They are alternate interior angles, and AB ∥ CD." },
            { letter: "B", text: "They are vertical angles." },
            { letter: "C", text: "They are both right angles." },
            { letter: "D", text: "They are angles of congruent triangles." }
          ],
          correct: "A"
        },
        {
          id: "back",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The photographer steps back so the lens is 10 m from the statue. The sensor stays 50 mm behind the lens. How tall is the image now?",
          choices: [
            { letter: "A", text: "18.75 mm" },
            { letter: "B", text: "12 mm" },
            { letter: "C", text: "13 mm" },
            { letter: "D", text: "9.6 mm" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-ring-stage-perspective",
      family: "GEO",
      mode: "ring",
      title: "The Stage Set in Perspective",
      kind: "Triangles · G.TR.3",
      blurb: "Painted lamp posts shrink toward a vanishing point.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A backdrop in perspective: a level floor line from H through G and F to the vanishing point V, and a line from V up to M; three vertical posts HM, GK and FJ stand between the lines; HG 45 cm, GF 30 cm, FV 45 cm and HM 96 cm\">" +
        "<rect class=\"sh2\" x=\"12\" y=\"8\" width=\"296\" height=\"132\"/><line class=\"ln\" x1=\"20\" y1=\"140\" x2=\"306\" y2=\"140\"/>" +
        "<line class=\"thin\" x1=\"292\" y1=\"140\" x2=\"282.4\" y2=\"140\"/><line class=\"thin\" x1=\"292\" y1=\"140\" x2=\"37.6\" y2=\"26\"/>" +
        "<line class=\"ln\" x1=\"52\" y1=\"140\" x2=\"52\" y2=\"32.5\"/><line class=\"ac\" x1=\"142\" y1=\"140\" x2=\"142\" y2=\"72.8\"/>" +
        "<line class=\"ln\" x1=\"202\" y1=\"140\" x2=\"202\" y2=\"99.7\"/><path class=\"thin\" d=\"M52 133 L59 133 L59 140\"/>" +
        "<path class=\"thin\" d=\"M142 133 L149 133 L149 140\"/><path class=\"thin\" d=\"M202 133 L209 133 L209 140\"/><circle class=\"dt\" cx=\"292\" cy=\"140\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"52\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"142\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"202\" cy=\"140\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"52\" cy=\"32.5\" r=\"3\"/><circle class=\"dt\" cx=\"142\" cy=\"72.8\" r=\"3\"/><circle class=\"dt\" cx=\"202\" cy=\"99.7\" r=\"3\"/>" +
        "<text x=\"52\" y=\"159\" text-anchor=\"middle\">H</text><text x=\"142\" y=\"159\" text-anchor=\"middle\">G</text>" +
        "<text x=\"202\" y=\"159\" text-anchor=\"middle\">F</text><text x=\"292\" y=\"159\" text-anchor=\"middle\">V</text>" +
        "<text x=\"52\" y=\"25.5\" text-anchor=\"middle\">M</text><text x=\"142\" y=\"65.8\" text-anchor=\"middle\">K</text>" +
        "<text x=\"202\" y=\"92.7\" text-anchor=\"middle\">J</text><text class=\"sm\" x=\"97\" y=\"162\" text-anchor=\"middle\">45 cm</text>" +
        "<text class=\"sm\" x=\"172\" y=\"162\" text-anchor=\"middle\">30 cm</text><text class=\"sm\" x=\"247\" y=\"162\" text-anchor=\"middle\">45 cm</text>" +
        "<text x=\"28\" y=\"91.2\" text-anchor=\"middle\">96 cm</text><text class=\"sm\" x=\"254\" y=\"96\" text-anchor=\"middle\">vanishing</text>" +
        "<text class=\"sm\" x=\"254\" y=\"110\" text-anchor=\"middle\">point</text></svg><figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">A backdrop for a play shows lamp posts in perspective. Their bases <strong>H</strong>, <strong>G</strong> and <strong>F</strong> lie on the level floor line through the vanishing point <strong>V</strong>, and their tops <strong>M</strong>, <strong>K</strong> and <strong>J</strong> lie on line VM. The posts are vertical. HG = 45 cm, GF = 30 cm, FV = 45 cm and post HM is 96 cm tall.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that △VFJ ∼ △VHM?",
          choices: [
            { letter: "A", text: "SAS∼" },
            { letter: "B", text: "SSS∼" },
            { letter: "C", text: "HL" },
            { letter: "D", text: "AA" }
          ],
          correct: "D"
        },
        {
          id: "gk",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How tall is the middle post GK?",
          choices: [
            { letter: "A", text: "51 cm" },
            { letter: "B", text: "60 cm" },
            { letter: "C", text: "153.6 cm" },
            { letter: "D", text: "36 cm" }
          ],
          correct: "B"
        },
        {
          id: "new",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The painter adds one more post, 30 cm tall, between the two lines. How far from V is its base?",
          choices: [
            { letter: "A", text: "37.5 cm" },
            { letter: "B", text: "24 cm" },
            { letter: "C", text: "54 cm" },
            { letter: "D", text: "60 cm" }
          ],
          correct: "A"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from △VFJ to △VHM?",
          choices: [
            { letter: "A", text: "3/8" },
            { letter: "B", text: "75" },
            { letter: "C", text: "8/3" },
            { letter: "D", text: "5/3" }
          ],
          correct: "C"
        },
        {
          id: "check",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "A helper paints a post whose base is 100 cm from V and makes it 82 cm tall. Does its top lie on line VM? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 82/100 = 96/120" },
            { letter: "B", text: "Yes; 120 − 100 = 96 − 82" },
            { letter: "C", text: "No; it should be 76 cm tall" },
            { letter: "D", text: "No; 82/100 ≠ 96/120" }
          ],
          correct: "D"
        },
        {
          id: "equation",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Which equation can be used to find the height of post GK?",
          choices: [
            { letter: "A", text: "GK/96 = 120/75" },
            { letter: "B", text: "GK/96 = 45/120" },
            { letter: "C", text: "GK/96 = 75/120" },
            { letter: "D", text: "GK/75 = 120/96" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr3-ring-grid-logo",
      family: "GEO",
      mode: "ring",
      title: "The Logo on Grid Paper",
      kind: "Triangles · G.TR.3",
      blurb: "A designer doubles a triangle logo on a grid.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A coordinate grid with a small logo triangle A(1, 1), B(4, 1), C(2, 3) and a large logo triangle D(7, 1), E(13, 1), F(9, 5)\">" +
        "<line class=\"gr\" x1=\"16\" y1=\"150\" x2=\"16\" y2=\"30\"/><line class=\"gr\" x1=\"36\" y1=\"150\" x2=\"36\" y2=\"30\"/>" +
        "<line class=\"gr\" x1=\"56\" y1=\"150\" x2=\"56\" y2=\"30\"/><line class=\"gr\" x1=\"76\" y1=\"150\" x2=\"76\" y2=\"30\"/>" +
        "<line class=\"gr\" x1=\"96\" y1=\"150\" x2=\"96\" y2=\"30\"/><line class=\"gr\" x1=\"116\" y1=\"150\" x2=\"116\" y2=\"30\"/>" +
        "<line class=\"gr\" x1=\"136\" y1=\"150\" x2=\"136\" y2=\"30\"/><line class=\"gr\" x1=\"156\" y1=\"150\" x2=\"156\" y2=\"30\"/>" +
        "<line class=\"gr\" x1=\"176\" y1=\"150\" x2=\"176\" y2=\"30\"/><line class=\"gr\" x1=\"196\" y1=\"150\" x2=\"196\" y2=\"30\"/>" +
        "<line class=\"gr\" x1=\"216\" y1=\"150\" x2=\"216\" y2=\"30\"/><line class=\"gr\" x1=\"236\" y1=\"150\" x2=\"236\" y2=\"30\"/>" +
        "<line class=\"gr\" x1=\"256\" y1=\"150\" x2=\"256\" y2=\"30\"/><line class=\"gr\" x1=\"276\" y1=\"150\" x2=\"276\" y2=\"30\"/>" +
        "<line class=\"gr\" x1=\"296\" y1=\"150\" x2=\"296\" y2=\"30\"/><line class=\"gr\" x1=\"16\" y1=\"150\" x2=\"296\" y2=\"150\"/>" +
        "<line class=\"gr\" x1=\"16\" y1=\"130\" x2=\"296\" y2=\"130\"/><line class=\"gr\" x1=\"16\" y1=\"110\" x2=\"296\" y2=\"110\"/>" +
        "<line class=\"gr\" x1=\"16\" y1=\"90\" x2=\"296\" y2=\"90\"/><line class=\"gr\" x1=\"16\" y1=\"70\" x2=\"296\" y2=\"70\"/>" +
        "<line class=\"gr\" x1=\"16\" y1=\"50\" x2=\"296\" y2=\"50\"/><line class=\"gr\" x1=\"16\" y1=\"30\" x2=\"296\" y2=\"30\"/>" +
        "<line class=\"ax\" x1=\"16\" y1=\"150\" x2=\"296\" y2=\"150\"/><line class=\"ax\" x1=\"16\" y1=\"150\" x2=\"16\" y2=\"30\"/>" +
        "<polygon class=\"ln\" points=\"36,130 96,130 56,90\"/><polygon class=\"ln\" points=\"156,130 276,130 196,50\"/><circle class=\"dt\" cx=\"36\" cy=\"130\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"96\" cy=\"130\" r=\"3\"/><circle class=\"dt\" cx=\"56\" cy=\"90\" r=\"3\"/><circle class=\"dt\" cx=\"156\" cy=\"130\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"276\" cy=\"130\" r=\"3\"/><circle class=\"dt\" cx=\"196\" cy=\"50\" r=\"3\"/><text x=\"30\" y=\"148\" text-anchor=\"middle\">A</text>" +
        "<text x=\"102\" y=\"148\" text-anchor=\"middle\">B</text><text x=\"56\" y=\"83\" text-anchor=\"middle\">C</text>" +
        "<text x=\"150\" y=\"148\" text-anchor=\"middle\">D</text><text x=\"282\" y=\"148\" text-anchor=\"middle\">E</text>" +
        "<text x=\"196\" y=\"43\" text-anchor=\"middle\">F</text><text class=\"sm\" x=\"16\" y=\"164\" text-anchor=\"middle\">0</text>" +
        "<text class=\"sm\" x=\"116\" y=\"164\" text-anchor=\"middle\">5</text><text class=\"sm\" x=\"216\" y=\"164\" text-anchor=\"middle\">10</text>" +
        "<text class=\"sm\" x=\"8\" y=\"54\" text-anchor=\"middle\">5</text></svg></figure>" +
        "<p class=\"geo-given\">A designer draws a small logo <strong>△ABC</strong> and a large logo <strong>△DEF</strong> on grid paper: A(1, 1), B(4, 1), C(2, 3), D(7, 1), E(13, 1) and F(9, 5). Each grid square is 1 unit on a side.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "The side lengths are AB = 3, AC = √5, BC = 2√2, DE = 6, DF = 2√5 and EF = 4√2 units. Which similarity criterion do these lengths support?",
          choices: [
            { letter: "A", text: "SSS∼" },
            { letter: "B", text: "SAS∼" },
            { letter: "C", text: "AA" },
            { letter: "D", text: "SSS" }
          ],
          correct: "A"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from the small logo to the large logo?",
          choices: [
            { letter: "A", text: "1/2" },
            { letter: "B", text: "3" },
            { letter: "C", text: "2" },
            { letter: "D", text: "4" }
          ],
          correct: "C"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the perimeter of the large logo, to the nearest tenth of a unit?",
          choices: [
            { letter: "A", text: "about 32.3 units" },
            { letter: "B", text: "about 16.1 units" },
            { letter: "C", text: "about 8.1 units" },
            { letter: "D", text: "20 units" }
          ],
          correct: "B"
        },
        {
          id: "third",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "△GHJ has vertices G(0, 0), H(6, 0) and J(3, 3). Is it similar to △ABC? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; GH/AB = GJ/AC = HJ/BC = 2" },
            { letter: "B", text: "No; GH/AB = 3, so the ratios differ" },
            { letter: "C", text: "Yes; GH = 2 · AB and GJ = 2 · AC" },
            { letter: "D", text: "No; GJ = HJ, but △ABC has no equal sides" }
          ],
          correct: "D"
        },
        {
          id: "angle",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Which statement about the angles of the two logos is true?",
          choices: [
            { letter: "A", text: "m∠D = 2 · m∠A" },
            { letter: "B", text: "m∠E = 45°" },
            { letter: "C", text: "∠F ≅ ∠B" },
            { letter: "D", text: "m∠D = 90°" }
          ],
          correct: "B"
        },
        {
          id: "print",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The small logo is printed so that AB is 4.5 cm long. How long is AC on the print, to the nearest tenth of a centimeter?",
          choices: [
            { letter: "A", text: "about 3.4 cm" },
            { letter: "B", text: "about 2.2 cm" },
            { letter: "C", text: "about 3 cm" },
            { letter: "D", text: "about 4.2 cm" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr3-ring-easel-brace",
      family: "GEO",
      mode: "ring",
      title: "The Easel's Brace",
      kind: "Triangles · G.TR.3",
      blurb: "A brace across an easel's legs makes a turned triangle.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Side view of an easel: triangle ABC with legs AB and AC meeting at the top A and floor bar BC; a brace DE joins D on AB to E on AC; AD 16 in., DB 14 in., AE 12 in., EC 28 in. and BC 35 in.\">" +
        "<line class=\"thin\" x1=\"40\" y1=\"146\" x2=\"290\" y2=\"146\"/><polygon class=\"ln\" points=\"127.3,32.7 98,146 234.5,146\"/>" +
        "<line class=\"ac\" x1=\"111.7\" y1=\"93.1\" x2=\"159.4\" y2=\"66.7\"/><circle class=\"dt\" cx=\"127.3\" cy=\"32.7\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"98\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"234.5\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"111.7\" cy=\"93.1\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"159.4\" cy=\"66.7\" r=\"3\"/><text x=\"127.3\" y=\"25.7\" text-anchor=\"middle\">A</text>" +
        "<text x=\"88\" y=\"163\" text-anchor=\"middle\">B</text><text x=\"244.5\" y=\"163\" text-anchor=\"middle\">C</text>" +
        "<text x=\"98.7\" y=\"98.1\" text-anchor=\"middle\">D</text><text x=\"172.4\" y=\"69.7\" text-anchor=\"middle\">E</text>" +
        "<text x=\"98.1\" y=\"62.4\" text-anchor=\"middle\">16 in.</text><text x=\"83.5\" y=\"119.1\" text-anchor=\"middle\">14 in.</text>" +
        "<text x=\"159.3\" y=\"39.6\" text-anchor=\"middle\">12 in.</text><text x=\"212.9\" y=\"96.2\" text-anchor=\"middle\">28 in.</text>" +
        "<text x=\"166.3\" y=\"163\" text-anchor=\"middle\">35 in.</text></svg></figure>" +
        "<p class=\"geo-given\">The side of a folding easel is <strong>△ABC</strong>: legs AB and AC meet at the top <strong>A</strong>, and a floor bar joins their feet B and C. A brace <strong>DE</strong> joins D on AB to E on AC. AD = 16 in., DB = 14 in., AE = 12 in., EC = 28 in. and BC = 35 in.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that the small triangle at the top of the easel is similar to the whole easel triangle?",
          choices: [
            { letter: "A", text: "AA" },
            { letter: "B", text: "SAS∼" },
            { letter: "C", text: "SSS∼" },
            { letter: "D", text: "SAS" }
          ],
          correct: "B"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement is correct?",
          choices: [
            { letter: "A", text: "△ADE ∼ △ABC" },
            { letter: "B", text: "△AED ∼ △ACB" },
            { letter: "C", text: "△ADE ∼ △ACB" },
            { letter: "D", text: "△DAE ∼ △ACB" }
          ],
          correct: "C"
        },
        {
          id: "brace",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is the brace DE?",
          choices: [
            { letter: "A", text: "14 in." },
            { letter: "B", text: "about 18.7 in." },
            { letter: "C", text: "10.5 in." },
            { letter: "D", text: "87.5 in." }
          ],
          correct: "A"
        },
        {
          id: "parallel",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Is the brace DE parallel to BC? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 16/30 = 12/40" },
            { letter: "B", text: "No; 16/40 ≠ 12/30" },
            { letter: "C", text: "Yes; 16 + 14 = 12 + 18" },
            { letter: "D", text: "No; 16/30 ≠ 12/40" }
          ],
          correct: "D"
        },
        {
          id: "move",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The painter keeps D where it is and slides E along AC so that the brace becomes parallel to BC. How far from A is E then?",
          choices: [
            { letter: "A", text: "16 in." },
            { letter: "B", text: "about 21.3 in." },
            { letter: "C", text: "12 in." },
            { letter: "D", text: "24 in." }
          ],
          correct: "B"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the perimeter of the small triangle ADE?",
          choices: [
            { letter: "A", text: "105 in." },
            { letter: "B", text: "16.8 in." },
            { letter: "C", text: "262.5 in." },
            { letter: "D", text: "42 in." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-ring-mosaic-cut",
      family: "GEO",
      mode: "ring",
      title: "The Mosaic Tile Cut",
      kind: "Triangles · G.TR.3",
      blurb: "One straight cut makes a smaller copy of the tile.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Triangle ABC, a mosaic tile, with a cut AD from A to D on BC; angle BAD and angle C are marked congruent with single arcs; AB 12 cm, AC 15 cm and BC 18 cm\">" +
        "<polygon class=\"sh2\" points=\"136.8,50.7 76,140 238,140\"/><polygon class=\"ln\" points=\"136.8,50.7 76,140 238,140\"/>" +
        "<line class=\"ac\" x1=\"136.8\" y1=\"50.7\" x2=\"148\" y2=\"140\"/><path class=\"thin\" d=\"M126.6 65.6 A18 18 0 0 0 139 68.6\"/>" +
        "<path class=\"thin\" d=\"M221.5 125.4 A22 22 0 0 0 216 140\"/><circle class=\"dt\" cx=\"136.8\" cy=\"50.7\" r=\"3\"/><circle class=\"dt\" cx=\"76\" cy=\"140\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"238\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"148\" cy=\"140\" r=\"3\"/><text x=\"136.8\" y=\"43.7\" text-anchor=\"middle\">A</text>" +
        "<text x=\"65\" y=\"154\" text-anchor=\"middle\">B</text><text x=\"249\" y=\"154\" text-anchor=\"middle\">C</text>" +
        "<text x=\"148\" y=\"160\" text-anchor=\"middle\">D</text><text x=\"88.2\" y=\"88\" text-anchor=\"middle\">12 cm</text>" +
        "<text x=\"200.6\" y=\"85.4\" text-anchor=\"middle\">15 cm</text><text x=\"197\" y=\"159\" text-anchor=\"middle\">18 cm</text></svg></figure>" +
        "<p class=\"geo-given\">A mosaic artist cuts a triangular tile <strong>ABC</strong> along <strong>AD</strong>, from A to D on BC, so that ∠BAD ≅ ∠C. AB = 12 cm, AC = 15 cm and BC = 18 cm.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that the piece ABD is similar to the whole tile?",
          choices: [
            { letter: "A", text: "SAS∼" },
            { letter: "B", text: "SSS∼" },
            { letter: "C", text: "AA" },
            { letter: "D", text: "ASA" }
          ],
          correct: "C"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement is correct?",
          choices: [
            { letter: "A", text: "△BAD ∼ △BCA" },
            { letter: "B", text: "△BAD ∼ △BAC" },
            { letter: "C", text: "△BDA ∼ △BCA" },
            { letter: "D", text: "△ABD ∼ △ACB" }
          ],
          correct: "A"
        },
        {
          id: "bd",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is BD?",
          choices: [
            { letter: "A", text: "9.6 cm" },
            { letter: "B", text: "6 cm" },
            { letter: "C", text: "27 cm" },
            { letter: "D", text: "8 cm" }
          ],
          correct: "D"
        },
        {
          id: "ad",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is the cut AD?",
          choices: [
            { letter: "A", text: "22.5 cm" },
            { letter: "B", text: "10 cm" },
            { letter: "C", text: "about 6.7 cm" },
            { letter: "D", text: "12 cm" }
          ],
          correct: "B"
        },
        {
          id: "piece",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Is the other piece, ADC, similar to the whole tile? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; DC/BC = AC/AB" },
            { letter: "B", text: "No; ∠ADC is a right angle" },
            { letter: "C", text: "No; AD = DC, but the tile has no equal sides" },
            { letter: "D", text: "Yes; AD/AB = DC/AC" }
          ],
          correct: "C"
        },
        {
          id: "bigger",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The artist makes a larger tile similar to △ABC, with a longest side of 27 cm. What is its perimeter?",
          choices: [
            { letter: "A", text: "54 cm" },
            { letter: "B", text: "67.5 cm" },
            { letter: "C", text: "101.25 cm" },
            { letter: "D", text: "30 cm" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-worms-mirror-oak",
      family: "GEO",
      mode: "worms",
      title: "The Mirror Under the Oak",
      kind: "Triangles · G.TR.3",
      blurb: "A mirror on the grass shows the top of a tall oak.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Level ground with Mira's eye E above her feet S on the left, a mirror M on the ground, and an oak TB on the right; the sight line goes from E down to M and up to the top T; angles EMS and TMB are marked equal; SM 2 m, MB 16 m, ES 1.5 m\">" +
        "<line class=\"thin\" x1=\"10\" y1=\"150\" x2=\"310\" y2=\"150\"/><rect class=\"sh\" x=\"68\" y=\"147\" width=\"12\" height=\"3\"/>" +
        "<line class=\"ln\" x1=\"46\" y1=\"150\" x2=\"46\" y2=\"133.5\"/><line class=\"ln\" x1=\"298\" y1=\"150\" x2=\"298\" y2=\"18\"/>" +
        "<line class=\"thin dash\" x1=\"46\" y1=\"133.5\" x2=\"74\" y2=\"150\"/><line class=\"thin dash\" x1=\"74\" y1=\"150\" x2=\"298\" y2=\"18\"/>" +
        "<path class=\"thin\" d=\"M46 144 L52 144 L52 150\"/><path class=\"thin\" d=\"M298 143 L291 143 L291 150\"/>" +
        "<path class=\"thin\" d=\"M62 150 A12 12 0 0 1 63.7 143.9\"/><path class=\"thin\" d=\"M86 150 A12 12 0 0 0 84.3 143.9\"/>" +
        "<circle class=\"dt\" cx=\"46\" cy=\"133.5\" r=\"3\"/><circle class=\"dt\" cx=\"46\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"74\" cy=\"150\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"298\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"298\" cy=\"18\" r=\"3\"/><text x=\"42\" y=\"125.5\" text-anchor=\"middle\">E</text>" +
        "<text x=\"46\" y=\"168\" text-anchor=\"middle\">S</text><text x=\"74\" y=\"168\" text-anchor=\"middle\">M</text>" +
        "<text x=\"298\" y=\"168\" text-anchor=\"middle\">B</text><text x=\"286\" y=\"21\" text-anchor=\"middle\">T</text>" +
        "<text x=\"20\" y=\"147\" text-anchor=\"middle\">1.5 m</text><text class=\"sm\" x=\"64\" y=\"168\" text-anchor=\"middle\">2 m</text>" +
        "<text x=\"186\" y=\"169\" text-anchor=\"middle\">16 m</text><text class=\"sm\" x=\"274\" y=\"66\" text-anchor=\"middle\">oak</text>" +
        "<text class=\"sm\" x=\"76\" y=\"136\" text-anchor=\"middle\">mirror</text></svg><figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">Mira lays a mirror <strong>M</strong> flat on level ground, 16 m from the base <strong>B</strong> of an oak. She stands at <strong>S</strong>, 2 m from the mirror, and sees the top <strong>T</strong> of the oak in it. Her eyes <strong>E</strong> are 1.5 m above the ground. ES and TB are vertical, and the mirror makes ∠EMS ≅ ∠TMB.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that △ESM ∼ △TBM?",
          choices: [
            { letter: "A", text: "AA" },
            { letter: "B", text: "SAS∼" },
            { letter: "C", text: "SSS∼" },
            { letter: "D", text: "HL" }
          ],
          correct: "A"
        },
        {
          id: "tree",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How tall is the oak?",
          choices: [
            { letter: "A", text: "about 21.3 m" },
            { letter: "B", text: "15.5 m" },
            { letter: "C", text: "12 m" },
            { letter: "D", text: "8 m" }
          ],
          correct: "C"
        },
        {
          id: "friend",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Mira's brother, whose eyes are 1.2 m above the ground, uses the same mirror spot. How far from the mirror must he stand to see the top of the oak?",
          choices: [
            { letter: "A", text: "2.5 m" },
            { letter: "B", text: "1.6 m" },
            { letter: "C", text: "1.7 m" },
            { letter: "D", text: "2 m" }
          ],
          correct: "B"
        },
        {
          id: "reason",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which reason proves that ∠MES ≅ ∠MTB?",
          choices: [
            { letter: "A", text: "They are vertical angles." },
            { letter: "B", text: "They are alternate interior angles." },
            { letter: "C", text: "They are both right angles." },
            { letter: "D", text: "The other two angle pairs are congruent." }
          ],
          correct: "D"
        },
        {
          id: "pine",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Later, Mira's eyes are 1.4 m up and she stands 1.75 m from a mirror. She says she sees the top of a 10-m pine whose base is 12 m from the mirror. Is that possible? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 1.4/1.75 = 10/12" },
            { letter: "B", text: "Yes; 1.4/10 = 1.75/12" },
            { letter: "C", text: "No; 1.4/1.75 ≠ 10/12" },
            { letter: "D", text: "No; 1.75/1.4 = 12/10" }
          ],
          correct: "C"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from Mira's triangle to the oak's triangle?",
          choices: [
            { letter: "A", text: "8" },
            { letter: "B", text: "1/8" },
            { letter: "C", text: "14" },
            { letter: "D", text: "4/3" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr3-worms-meadow-shadows",
      family: "GEO",
      mode: "worms",
      title: "Shadows in the Meadow",
      kind: "Triangles · G.TR.3",
      blurb: "A hiker's shadow tells how tall a tree is.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Level ground with a tree TB and its shadow BS on the left and a hiker HG and her shadow GK on the right; the sun's rays TS and HK are parallel dashed lines; BS 22 m, HG 1.8 m and GK 2.4 m\">" +
        "<line class=\"thin\" x1=\"14\" y1=\"146\" x2=\"306\" y2=\"146\"/><line class=\"ln\" x1=\"36\" y1=\"146\" x2=\"36\" y2=\"56.9\"/>" +
        "<line class=\"ac\" x1=\"36\" y1=\"146\" x2=\"154.8\" y2=\"146\"/><line class=\"thin dash\" x1=\"36\" y1=\"56.9\" x2=\"154.8\" y2=\"146\"/>" +
        "<line class=\"ln\" x1=\"206\" y1=\"146\" x2=\"206\" y2=\"108.2\"/><line class=\"ac\" x1=\"206\" y1=\"146\" x2=\"256.4\" y2=\"146\"/>" +
        "<line class=\"thin dash\" x1=\"206\" y1=\"108.2\" x2=\"256.4\" y2=\"146\"/><path class=\"thin\" d=\"M36 139 L43 139 L43 146\"/>" +
        "<path class=\"thin\" d=\"M206 140 L212 140 L212 146\"/><circle class=\"dt\" cx=\"36\" cy=\"56.9\" r=\"3\"/><circle class=\"dt\" cx=\"36\" cy=\"146\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"154.8\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"206\" cy=\"108.2\" r=\"3\"/><circle class=\"dt\" cx=\"206\" cy=\"146\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"256.4\" cy=\"146\" r=\"3\"/><text x=\"24\" y=\"61.9\" text-anchor=\"middle\">T</text><text x=\"36\" y=\"165\" text-anchor=\"middle\">B</text>" +
        "<text x=\"154.8\" y=\"165\" text-anchor=\"middle\">S</text><text x=\"194\" y=\"113.2\" text-anchor=\"middle\">H</text>" +
        "<text x=\"206\" y=\"165\" text-anchor=\"middle\">G</text><text x=\"256.4\" y=\"165\" text-anchor=\"middle\">K</text>" +
        "<text x=\"95.4\" y=\"165\" text-anchor=\"middle\">22 m</text><text x=\"182\" y=\"132.1\" text-anchor=\"middle\">1.8 m</text>" +
        "<text x=\"231.2\" y=\"165\" text-anchor=\"middle\">2.4 m</text><text class=\"sm\" x=\"58\" y=\"66.9\" text-anchor=\"middle\">tree</text>" +
        "<text class=\"sm\" x=\"210\" y=\"98.2\" text-anchor=\"middle\">hiker</text><text class=\"sm\" x=\"282\" y=\"28\" text-anchor=\"middle\">sun rays</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">At the same moment, a hiker <strong>HG</strong>, 1.8 m tall, casts a shadow <strong>GK</strong> 2.4 m long, and a tree <strong>TB</strong> casts a shadow <strong>BS</strong> 22 m long. Both stand straight up on level ground, and the sun's rays HK and TS are parallel.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is the hiker's triangle similar to the tree's triangle?",
          choices: [
            { letter: "A", text: "SSS∼: all three sides of each are known" },
            { letter: "B", text: "AA: right angles, and equal angles of the sun's rays" },
            { letter: "C", text: "HL: both are right triangles" },
            { letter: "D", text: "AA: each triangle has a 45° angle" }
          ],
          correct: "B"
        },
        {
          id: "tree",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How tall is the tree?",
          choices: [
            { letter: "A", text: "about 29.3 m" },
            { letter: "B", text: "21.4 m" },
            { letter: "C", text: "39.6 m" },
            { letter: "D", text: "16.5 m" }
          ],
          correct: "D"
        },
        {
          id: "later",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "An hour later, the hiker's shadow is 3 m long. How long is the tree's shadow then?",
          choices: [
            { letter: "A", text: "27.5 m" },
            { letter: "B", text: "22.6 m" },
            { letter: "C", text: "17.6 m" },
            { letter: "D", text: "22 m" }
          ],
          correct: "A"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement is correct?",
          choices: [
            { letter: "A", text: "△HGK ∼ △BTS" },
            { letter: "B", text: "△GHK ∼ △TBS" },
            { letter: "C", text: "△HGK ∼ △TBS" },
            { letter: "D", text: "△HKG ∼ △TBS" }
          ],
          correct: "C"
        },
        {
          id: "post",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "A 1.2-m fence post nearby has a 1.5-m shadow at the same moment. Is that possible? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 1.2/1.5 = 1.8/2.4" },
            { letter: "B", text: "Yes; 1.5 − 1.2 = 2.4 − 1.8" },
            { letter: "C", text: "No; its shadow should be 1.8 m" },
            { letter: "D", text: "No; 1.2/1.5 ≠ 1.8/2.4" }
          ],
          correct: "D"
        },
        {
          id: "equation",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Which equation gives the tree's height h, in meters?",
          choices: [
            { letter: "A", text: "h/22 = 2.4/1.8" },
            { letter: "B", text: "h/22 = 1.8/2.4" },
            { letter: "C", text: "h/2.4 = 1.8/22" },
            { letter: "D", text: "h − 1.8 = 22 − 2.4" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-worms-sapling-stake",
      family: "GEO",
      mode: "worms",
      title: "The Sapling and Its Stake",
      kind: "Triangles · G.TR.3",
      blurb: "A rope from a young tree rests on a short stake.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Level ground with a rope AT from the anchor A to the top T of a sapling TB; a stake SP stands under the rope and its top P touches the rope; AS 0.8 m, SB 1.6 m, SP 0.6 m and AP 1.0 m\">" +
        "<line class=\"thin\" x1=\"30\" y1=\"150\" x2=\"300\" y2=\"150\"/><line class=\"ln\" x1=\"232\" y1=\"150\" x2=\"232\" y2=\"24\"/>" +
        "<line class=\"ln\" x1=\"120\" y1=\"150\" x2=\"120\" y2=\"108\"/><line class=\"ac\" x1=\"64\" y1=\"150\" x2=\"232\" y2=\"24\"/>" +
        "<path class=\"thin\" d=\"M120 144 L114 144 L114 150\"/><path class=\"thin\" d=\"M232 143 L225 143 L225 150\"/><circle class=\"dt\" cx=\"64\" cy=\"150\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"120\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"120\" cy=\"108\" r=\"3\"/><circle class=\"dt\" cx=\"232\" cy=\"150\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"232\" cy=\"24\" r=\"3\"/><text x=\"54\" y=\"167\" text-anchor=\"middle\">A</text><text x=\"120\" y=\"169\" text-anchor=\"middle\">S</text>" +
        "<text x=\"118\" y=\"100\" text-anchor=\"middle\">P</text><text x=\"232\" y=\"169\" text-anchor=\"middle\">B</text>" +
        "<text x=\"244\" y=\"29\" text-anchor=\"middle\">T</text><text x=\"92\" y=\"169\" text-anchor=\"middle\">0.8 m</text>" +
        "<text x=\"176\" y=\"169\" text-anchor=\"middle\">1.6 m</text><text x=\"144\" y=\"138\" text-anchor=\"middle\">0.6 m</text>" +
        "<text x=\"80\" y=\"122\" text-anchor=\"middle\">1.0 m</text><text class=\"sm\" x=\"262\" y=\"94\" text-anchor=\"middle\">sapling</text>" +
        "<text class=\"sm\" x=\"140\" y=\"142\" text-anchor=\"middle\">stake</text></svg></figure>" +
        "<p class=\"geo-given\">A rope runs straight from the top <strong>T</strong> of a sapling to an anchor <strong>A</strong> on level ground. It rests on the top <strong>P</strong> of a stake <strong>SP</strong>. The sapling TB and the stake are vertical. AS = 0.8 m, SB = 1.6 m, SP = 0.6 m and AP = 1.0 m.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that △ASP ∼ △ABT?",
          choices: [
            { letter: "A", text: "SAS∼" },
            { letter: "B", text: "SSS∼" },
            { letter: "C", text: "HL" },
            { letter: "D", text: "AA" }
          ],
          correct: "D"
        },
        {
          id: "sapling",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How tall is the sapling TB?",
          choices: [
            { letter: "A", text: "1.2 m" },
            { letter: "B", text: "1.8 m" },
            { letter: "C", text: "2.2 m" },
            { letter: "D", text: "0.2 m" }
          ],
          correct: "B"
        },
        {
          id: "rope",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is the rope AT?",
          choices: [
            { letter: "A", text: "3 m" },
            { letter: "B", text: "2 m" },
            { letter: "C", text: "2.6 m" },
            { letter: "D", text: "about 0.3 m" }
          ],
          correct: "A"
        },
        {
          id: "second",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "A second stake, 1.2 m tall, will also touch the rope. How far from A should it stand?",
          choices: [
            { letter: "A", text: "0.9 m" },
            { letter: "B", text: "1.4 m" },
            { letter: "C", text: "1.6 m" },
            { letter: "D", text: "0.96 m" }
          ],
          correct: "C"
        },
        {
          id: "not",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which statement is NOT true?",
          choices: [
            { letter: "A", text: "△ASP ∼ △ABT" },
            { letter: "B", text: "AS/AB = SP/BT" },
            { letter: "C", text: "SP/BT = SB/AB" },
            { letter: "D", text: "AP/PT = AS/SB" }
          ],
          correct: "C"
        },
        {
          id: "other",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "In another garden, a 0.5-m stake stands 0.7 m from the anchor, and a 2-m sapling stands 2.8 m from the anchor, on the same side. Can one straight rope from the sapling's top to the anchor rest on the stake's top? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No; 0.5/0.7 ≠ 2/2.8" },
            { letter: "B", text: "Yes; 2.8 − 0.7 = 2 − 0.5" },
            { letter: "C", text: "No; 0.5/2 ≠ 0.7/2.8" },
            { letter: "D", text: "Yes; 0.5/0.7 = 2/2.8" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-worms-canyon-width",
      family: "GEO",
      mode: "worms",
      title: "Across the Canyon",
      kind: "Triangles · G.TR.3",
      blurb: "Stakes on the near rim measure a canyon from above.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A canyon seen from above: point T on the far rim; A and B on the near rim; lines from T through A and B reach D and E farther back; AB is parallel to DE; AB 36 m, DE 48 m, AD 15 m; TA is x\">" +
        "<rect class=\"sh2\" x=\"6\" y=\"7.9\" width=\"308\" height=\"100.1\"/><line class=\"thin\" x1=\"6\" y1=\"108\" x2=\"314\" y2=\"108\"/>" +
        "<line class=\"thin\" x1=\"6\" y1=\"7.9\" x2=\"314\" y2=\"7.9\"/><line class=\"ln\" x1=\"230.2\" y1=\"7.9\" x2=\"123.3\" y2=\"141.4\"/>" +
        "<line class=\"ln\" x1=\"230.2\" y1=\"7.9\" x2=\"260.1\" y2=\"141.4\"/><line class=\"ln\" x1=\"150\" y1=\"108\" x2=\"252.6\" y2=\"108\"/>" +
        "<line class=\"ln\" x1=\"123.3\" y1=\"141.4\" x2=\"260.1\" y2=\"141.4\"/><path class=\"thin\" d=\"M205.6 112 L211.6 108 L205.6 104\"/>" +
        "<path class=\"thin\" d=\"M199.4 145.4 L205.4 141.4 L199.4 137.4\"/><circle class=\"dt\" cx=\"230.2\" cy=\"7.9\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"150\" cy=\"108\" r=\"3\"/><circle class=\"dt\" cx=\"252.6\" cy=\"108\" r=\"3\"/><circle class=\"dt\" cx=\"123.3\" cy=\"141.4\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"260.1\" cy=\"141.4\" r=\"3\"/><text x=\"230.2\" y=\"1.9\" text-anchor=\"middle\">T</text>" +
        "<text x=\"137\" y=\"106\" text-anchor=\"middle\">A</text><text x=\"265.6\" y=\"106\" text-anchor=\"middle\">B</text>" +
        "<text x=\"111.3\" y=\"150.4\" text-anchor=\"middle\">D</text><text x=\"272.1\" y=\"150.4\" text-anchor=\"middle\">E</text>" +
        "<text x=\"189.3\" y=\"126\" text-anchor=\"middle\">36 m</text><text x=\"191.7\" y=\"161.4\" text-anchor=\"middle\">48 m</text>" +
        "<text x=\"124.2\" y=\"119.7\" text-anchor=\"middle\">15 m</text><text class=\"acc\" x=\"178.1\" y=\"62.9\" text-anchor=\"middle\">x</text>" +
        "<text class=\"sm\" x=\"262\" y=\"54\" text-anchor=\"middle\">canyon</text><text class=\"sm\" x=\"262\" y=\"36\" text-anchor=\"middle\">far rim</text>" +
        "<text class=\"sm\" x=\"268\" y=\"124\" text-anchor=\"middle\">near rim</text></svg></figure>" +
        "<p class=\"geo-given\">A ranger picks a rock <strong>T</strong> on the far rim of a canyon. She stakes <strong>A</strong> and <strong>B</strong> on the near rim, then <strong>D</strong> and <strong>E</strong> farther back so that T, A, D and T, B, E are on straight lines and AB ∥ DE. AB = 36 m, DE = 48 m and AD = 15 m. Let x = TA.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that △TAB ∼ △TDE?",
          choices: [
            { letter: "A", text: "SAS∼" },
            { letter: "B", text: "AA" },
            { letter: "C", text: "SSS∼" },
            { letter: "D", text: "HL" }
          ],
          correct: "B"
        },
        {
          id: "equation",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Which equation can be used to find x?",
          choices: [
            { letter: "A", text: "x/(x + 15) = 36/48" },
            { letter: "B", text: "x/15 = 36/48" },
            { letter: "C", text: "x/(x + 15) = 48/36" },
            { letter: "D", text: "x/48 = 15/36" }
          ],
          correct: "A"
        },
        {
          id: "ta",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How far is it from A across the canyon to T?",
          choices: [
            { letter: "A", text: "11.25 m" },
            { letter: "B", text: "60 m" },
            { letter: "C", text: "45 m" },
            { letter: "D", text: "20 m" }
          ],
          correct: "C"
        },
        {
          id: "tb",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The ranger also measures BE = 12 m. How far is it from B to T?",
          choices: [
            { letter: "A", text: "48 m" },
            { letter: "B", text: "9 m" },
            { letter: "C", text: "16 m" },
            { letter: "D", text: "36 m" }
          ],
          correct: "D"
        },
        {
          id: "must",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which statement must be true because AB ∥ DE?",
          choices: [
            { letter: "A", text: "∠TAB ≅ ∠TED" },
            { letter: "B", text: "TA = AD" },
            { letter: "C", text: "∠TAB ≅ ∠TDE" },
            { letter: "D", text: "∠TBA ≅ ∠TDE" }
          ],
          correct: "C"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from △TAB to △TDE?",
          choices: [
            { letter: "A", text: "3/4" },
            { letter: "B", text: "4/3" },
            { letter: "C", text: "12" },
            { letter: "D", text: "5/4" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-worms-fern-fronds",
      family: "GEO",
      mode: "worms",
      title: "Three Fern Fronds",
      kind: "Triangles · G.TR.3",
      blurb: "Which fronds are the same shape?",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Three fern fronds drawn as triangles: ABC with AB 3 cm, AC 8 cm and a 60 degree angle at A; DEF with DF 7.5 cm, DE 20 cm and a 60 degree angle at D; GHJ with GH 6 cm, GJ 16 cm and a 50 degree angle at G\">" +
        "<polygon class=\"sh2\" points=\"56,150 85.9,124.9 37.9,47.6\"/><polygon class=\"ln\" points=\"56,150 85.9,124.9 37.9,47.6\"/>" +
        "<polygon class=\"sh2\" points=\"160,150 182.9,20 122.1,118.2\"/><polygon class=\"ln\" points=\"160,150 182.9,20 122.1,118.2\"/>" +
        "<polygon class=\"sh2\" points=\"262,150 296.8,115.2 250.6,19.3\"/><polygon class=\"ln\" points=\"262,150 296.8,115.2 250.6,19.3\"/>" +
        "<line class=\"thin\" x1=\"56\" y1=\"150\" x2=\"56\" y2=\"162\"/><line class=\"thin\" x1=\"160\" y1=\"150\" x2=\"160\" y2=\"162\"/>" +
        "<line class=\"thin\" x1=\"262\" y1=\"150\" x2=\"262\" y2=\"162\"/><circle class=\"dt\" cx=\"56\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"85.9\" cy=\"124.9\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"37.9\" cy=\"47.6\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"182.9\" cy=\"20\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"122.1\" cy=\"118.2\" r=\"3\"/><circle class=\"dt\" cx=\"262\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"296.8\" cy=\"115.2\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"250.6\" cy=\"19.3\" r=\"3\"/><text x=\"45\" y=\"159\" text-anchor=\"middle\">A</text>" +
        "<text x=\"95.8\" y=\"136.6\" text-anchor=\"middle\">B</text><text x=\"33.8\" y=\"41.3\" text-anchor=\"middle\">C</text>" +
        "<text x=\"171\" y=\"159\" text-anchor=\"middle\">D</text><text x=\"187.1\" y=\"13.7\" text-anchor=\"middle\">E</text>" +
        "<text x=\"112.1\" y=\"129.9\" text-anchor=\"middle\">F</text><text x=\"251\" y=\"159\" text-anchor=\"middle\">G</text>" +
        "<text x=\"306.4\" y=\"127.4\" text-anchor=\"middle\">H</text><text x=\"247.6\" y=\"12.7\" text-anchor=\"middle\">J</text>" +
        "<text x=\"83.8\" y=\"157.8\" text-anchor=\"middle\">3 cm</text><text x=\"27.3\" y=\"107.3\" text-anchor=\"middle\">8 cm</text>" +
        "<text class=\"sm\" x=\"64.6\" y=\"130.5\" text-anchor=\"middle\">60°</text><text x=\"126.9\" y=\"155.9\" text-anchor=\"middle\">7.5 cm</text>" +
        "<text x=\"193.1\" y=\"93.8\" text-anchor=\"middle\">20 cm</text><text class=\"sm\" x=\"151.1\" y=\"129.6\" text-anchor=\"middle\">60°</text>" +
        "<text x=\"292.1\" y=\"150.3\" text-anchor=\"middle\">6 cm</text><text x=\"236.4\" y=\"91.4\" text-anchor=\"middle\">16 cm</text>" +
        "<text class=\"sm\" x=\"271.6\" y=\"127.7\" text-anchor=\"middle\">50°</text></svg><figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">A botanist traces three fern fronds as triangles. Frond 1, <strong>△ABC</strong>: AB = 3 cm, AC = 8 cm, m∠A = 60° and BC = 7 cm. Frond 2, <strong>△DEF</strong>: DF = 7.5 cm, DE = 20 cm and m∠D = 60°. Frond 3, <strong>△GHJ</strong>: GH = 6 cm, GJ = 16 cm and m∠G = 50°.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that frond 1 is similar to frond 2?",
          choices: [
            { letter: "A", text: "AA" },
            { letter: "B", text: "SSS∼" },
            { letter: "C", text: "SAS∼" },
            { letter: "D", text: "SAS" }
          ],
          correct: "C"
        },
        {
          id: "third",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Is frond 3 similar to frond 1? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No; m∠G ≠ m∠A" },
            { letter: "B", text: "Yes; 6/3 = 16/8 and m∠G = m∠A" },
            { letter: "C", text: "No; 6/3 ≠ 16/8" },
            { letter: "D", text: "Yes; 16 − 6 = 8 − 3" }
          ],
          correct: "A"
        },
        {
          id: "ef",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is side EF of frond 2?",
          choices: [
            { letter: "A", text: "19 cm" },
            { letter: "B", text: "43.75 cm" },
            { letter: "C", text: "2.8 cm" },
            { letter: "D", text: "17.5 cm" }
          ],
          correct: "D"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from frond 1 to frond 2?",
          choices: [
            { letter: "A", text: "2/5" },
            { letter: "B", text: "5/2" },
            { letter: "C", text: "12" },
            { letter: "D", text: "8/3" }
          ],
          correct: "B"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement is correct?",
          choices: [
            { letter: "A", text: "△ABC ∼ △DFE" },
            { letter: "B", text: "△ABC ∼ △DEF" },
            { letter: "C", text: "△ABC ∼ △EDF" },
            { letter: "D", text: "△ABC ∼ △FDE" }
          ],
          correct: "A"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the perimeter of frond 2?",
          choices: [
            { letter: "A", text: "112.5 cm" },
            { letter: "B", text: "7.2 cm" },
            { letter: "C", text: "30 cm" },
            { letter: "D", text: "45 cm" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-worms-hillside-post",
      family: "GEO",
      mode: "worms",
      title: "The Fence Post on the Hillside",
      kind: "Triangles · G.TR.3",
      blurb: "Two shadows lie down a slope, not on level ground.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A straight hillside sloping down to the right; a hoodoo HK stands up from K with its shadow KL down the slope; farther down, a fence post PQ stands up from Q with its shadow QR; the sun's rays HL and PR are parallel dashed lines; PQ 1.2 m, QR 2 m and KL 15 m\">" +
        "<polygon class=\"sh2\" points=\"6,77.4 314,165.2 314,170 6,170\"/><line class=\"thin\" x1=\"6\" y1=\"77.1\" x2=\"314\" y2=\"165.2\"/>" +
        "<line class=\"ln\" x1=\"30\" y1=\"84\" x2=\"30\" y2=\"3\"/><line class=\"ln\" x1=\"181.4\" y1=\"127.3\" x2=\"181.4\" y2=\"100.3\"/>" +
        "<line class=\"ac\" x1=\"30\" y1=\"84\" x2=\"159.8\" y2=\"121.1\"/><line class=\"ac\" x1=\"181.4\" y1=\"127.3\" x2=\"224.7\" y2=\"139.7\"/>" +
        "<line class=\"thin dash\" x1=\"30\" y1=\"3\" x2=\"159.8\" y2=\"121.1\"/><line class=\"thin dash\" x1=\"181.4\" y1=\"100.3\" x2=\"224.7\" y2=\"139.7\"/>" +
        "<circle class=\"dt\" cx=\"30\" cy=\"3\" r=\"3\"/><circle class=\"dt\" cx=\"30\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"159.8\" cy=\"121.1\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"181.4\" cy=\"100.3\" r=\"3\"/><circle class=\"dt\" cx=\"181.4\" cy=\"127.3\" r=\"3\"/><circle class=\"dt\" cx=\"224.7\" cy=\"139.7\" r=\"3\"/>" +
        "<text x=\"18\" y=\"10\" text-anchor=\"middle\">H</text><text x=\"24\" y=\"104\" text-anchor=\"middle\">K</text>" +
        "<text x=\"159.8\" y=\"142.1\" text-anchor=\"middle\">L</text><text x=\"170.4\" y=\"101.3\" text-anchor=\"middle\">P</text>" +
        "<text x=\"177.4\" y=\"148.3\" text-anchor=\"middle\">Q</text><text x=\"228.7\" y=\"160.7\" text-anchor=\"middle\">R</text>" +
        "<text x=\"100.9\" y=\"124.6\" text-anchor=\"middle\">15 m</text><text x=\"155.4\" y=\"120.8\" text-anchor=\"middle\">1.2 m</text>" +
        "<text x=\"209.1\" y=\"168.5\" text-anchor=\"middle\">2 m</text><text class=\"sm\" x=\"60\" y=\"15\" text-anchor=\"middle\">hoodoo</text>" +
        "<text class=\"sm\" x=\"187.4\" y=\"88.3\" text-anchor=\"middle\">post</text><text class=\"sm\" x=\"250\" y=\"24\" text-anchor=\"middle\">sun rays</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">A fence post <strong>PQ</strong> and a rock spire (a hoodoo) <strong>HK</strong> stand straight up on a straight, sloping hillside. At the same moment, their shadows <strong>QR</strong> and <strong>KL</strong> lie down the slope. The sun's rays PR and HL are parallel. PQ = 1.2 m, QR = 2 m and KL = 15 m.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is the post's triangle similar to the hoodoo's triangle?",
          choices: [
            { letter: "A", text: "AA: the post and hoodoo are parallel, and so are the rays" },
            { letter: "B", text: "AA: both have right angles where they meet the ground" },
            { letter: "C", text: "SSS∼: all three sides of each are known" },
            { letter: "D", text: "SAS∼: the shadows are in proportion, with right angles" }
          ],
          correct: "A"
        },
        {
          id: "hoodoo",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How tall is the hoodoo?",
          choices: [
            { letter: "A", text: "14.2 m" },
            { letter: "B", text: "25 m" },
            { letter: "C", text: "9 m" },
            { letter: "D", text: "18 m" }
          ],
          correct: "C"
        },
        {
          id: "right",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "A hiker says ∠PQR is a right angle because the post is vertical. Is she right? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; a vertical post always makes a right angle with the ground" },
            { letter: "B", text: "No; the post is vertical, but the ground slopes" },
            { letter: "C", text: "Yes; PQ ⊥ QR because PR ∥ HL" },
            { letter: "D", text: "No; ∠PQR is an acute angle" }
          ],
          correct: "B"
        },
        {
          id: "sign",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "A trail sign 2.1 m tall stands straight up on the same hillside. How long is its shadow down the slope at the same moment?",
          choices: [
            { letter: "A", text: "1.26 m" },
            { letter: "B", text: "2.9 m" },
            { letter: "C", text: "4.2 m" },
            { letter: "D", text: "3.5 m" }
          ],
          correct: "D"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement is correct?",
          choices: [
            { letter: "A", text: "△PQR ∼ △KHL" },
            { letter: "B", text: "△QPR ∼ △HKL" },
            { letter: "C", text: "△PRQ ∼ △HKL" },
            { letter: "D", text: "△PQR ∼ △HKL" }
          ],
          correct: "D"
        },
        {
          id: "ray",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The sun's ray from P to R is 2.6 m long. How long is the ray from H to L?",
          choices: [
            { letter: "A", text: "15.6 m" },
            { letter: "B", text: "19.5 m" },
            { letter: "C", text: "about 0.3 m" },
            { letter: "D", text: "32.5 m" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-worms-waterfall",
      family: "GEO",
      mode: "worms",
      title: "How Tall Is the Waterfall?",
      kind: "Triangles · G.TR.3",
      blurb: "A right angle at the eye splits into two similar triangles.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A waterfall TB on the right falls into a pool at B; Jo's eye E is on a rock ledge across the pool, level with M on the falls; sight lines ET and EB meet at a right angle at E; EM is perpendicular to TB; EM 6 m and MB 3 m\">" +
        "<rect class=\"sh2\" x=\"54\" y=\"155\" width=\"186\" height=\"10\"/><rect class=\"sh\" x=\"120\" y=\"132\" width=\"40\" height=\"23\"/>" +
        "<rect class=\"sh2\" x=\"214\" y=\"16\" width=\"12\" height=\"139\"/><line class=\"ln\" x1=\"214\" y1=\"20\" x2=\"214\" y2=\"155\"/>" +
        "<line class=\"thin\" x1=\"160\" y1=\"128\" x2=\"214\" y2=\"20\"/><line class=\"thin\" x1=\"160\" y1=\"128\" x2=\"214\" y2=\"155\"/>" +
        "<line class=\"ac\" x1=\"160\" y1=\"128\" x2=\"214\" y2=\"128\"/><path class=\"thin\" d=\"M164 120 L172.1 124 L168 132\"/>" +
        "<path class=\"thin\" d=\"M207 128 L207 121 L214 121\"/><circle class=\"dt\" cx=\"160\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"214\" cy=\"20\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"214\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"214\" cy=\"155\" r=\"3\"/><text x=\"149\" y=\"129\" text-anchor=\"middle\">E</text>" +
        "<text x=\"202\" y=\"27\" text-anchor=\"middle\">T</text><text x=\"226\" y=\"135\" text-anchor=\"middle\">M</text>" +
        "<text x=\"226\" y=\"156\" text-anchor=\"middle\">B</text><text x=\"187\" y=\"126\" text-anchor=\"middle\">6 m</text>" +
        "<text class=\"sm\" x=\"196\" y=\"148.5\" text-anchor=\"middle\">3 m</text><text class=\"sm\" x=\"260\" y=\"64\" text-anchor=\"middle\">waterfall</text>" +
        "<text class=\"sm\" x=\"94\" y=\"160\" text-anchor=\"middle\">pool</text></svg></figure>" +
        "<p class=\"geo-given\">Jo stands on a rock ledge across a pool from a waterfall <strong>TB</strong>. She holds a carpenter's square at her eye <strong>E</strong>: one edge points to the top <strong>T</strong> and the other to the bottom <strong>B</strong>, so ∠TEB = 90°. Her eye is level with <strong>M</strong> on the falls, and EM ⊥ TB. EM = 6 m and MB = 3 m.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that the two right triangles that meet at M are similar?",
          choices: [
            { letter: "A", text: "SAS∼" },
            { letter: "B", text: "AA" },
            { letter: "C", text: "SSS∼" },
            { letter: "D", text: "HL" }
          ],
          correct: "B"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement is correct?",
          choices: [
            { letter: "A", text: "△TME ∼ △BME" },
            { letter: "B", text: "△TEM ∼ △EMB" },
            { letter: "C", text: "△TME ∼ △EMB" },
            { letter: "D", text: "△TME ∼ △MEB" }
          ],
          correct: "C"
        },
        {
          id: "tm",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How far is it from M up to the top T?",
          choices: [
            { letter: "A", text: "12 m" },
            { letter: "B", text: "18 m" },
            { letter: "C", text: "1.5 m" },
            { letter: "D", text: "6 m" }
          ],
          correct: "A"
        },
        {
          id: "height",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How tall is the waterfall TB?",
          choices: [
            { letter: "A", text: "12 m" },
            { letter: "B", text: "9 m" },
            { letter: "C", text: "21 m" },
            { letter: "D", text: "15 m" }
          ],
          correct: "D"
        },
        {
          id: "sight",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Which statement about the two sight lines is true?",
          choices: [
            { letter: "A", text: "ET = 4 · EB" },
            { letter: "B", text: "EB = 2 · ET" },
            { letter: "C", text: "ET = EB + 9" },
            { letter: "D", text: "ET = 2 · EB" }
          ],
          correct: "D"
        },
        {
          id: "guide",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "At another waterfall, Jo's eye is 8 m from the falls and 4 m above the pool, with the same right angle at her eye. A guide says the falls are 20 m tall. Could that be right? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No; 8/4 ≠ 16/8" },
            { letter: "B", text: "Yes; 16/8 = 8/4, and 16 + 4 = 20" },
            { letter: "C", text: "Yes; 8 · 4 = 20 − 4" },
            { letter: "D", text: "No; 20 − 4 ≠ 8 · 2" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-worms-gorge-nest",
      family: "GEO",
      mode: "worms",
      title: "The Nest Across the Gorge",
      kind: "Triangles · G.TR.3",
      blurb: "A ruler at arm's length measures a cliff far away.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A hiker's eye E on the left; a ruler held upright at R, 0.6 m from E; a cliff across the gorge at C, 45 m from E, on the dashed level line; sight lines from E pass through U on the ruler to the nest N and through V to the river at W at the foot of the cliff\">" +
        "<rect class=\"sh\" x=\"0\" y=\"70\" width=\"40\" height=\"98\"/><rect class=\"sh\" x=\"290\" y=\"4\" width=\"26\" height=\"160\"/>" +
        "<rect class=\"sh2\" x=\"150\" y=\"159.3\" width=\"140\" height=\"8.8\"/><line class=\"ln\" x1=\"290\" y1=\"4\" x2=\"290\" y2=\"159.3\"/>" +
        "<line class=\"ln\" x1=\"100\" y1=\"36\" x2=\"100\" y2=\"96\"/><line class=\"thin dash\" x1=\"20\" y1=\"58\" x2=\"290\" y2=\"58\"/>" +
        "<line class=\"thin\" x1=\"20\" y1=\"58\" x2=\"290\" y2=\"17.5\"/><line class=\"thin\" x1=\"20\" y1=\"58\" x2=\"290\" y2=\"159.3\"/>" +
        "<path class=\"thin\" d=\"M94 58 L94 52 L100 52\"/><path class=\"thin\" d=\"M283 58 L283 51 L290 51\"/><circle class=\"dt\" cx=\"20\" cy=\"58\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"100\" cy=\"58\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"88\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"290\" cy=\"58\" r=\"3\"/><circle class=\"dt\" cx=\"290\" cy=\"17.5\" r=\"3\"/><circle class=\"dt\" cx=\"290\" cy=\"159.3\" r=\"3\"/>" +
        "<text x=\"16\" y=\"51\" text-anchor=\"middle\">E</text><text x=\"90\" y=\"76\" text-anchor=\"middle\">R</text><text x=\"90\" y=\"43\" text-anchor=\"middle\">U</text>" +
        "<text x=\"89\" y=\"102\" text-anchor=\"middle\">V</text><text x=\"279\" y=\"76\" text-anchor=\"middle\">C</text>" +
        "<text x=\"278\" y=\"20.5\" text-anchor=\"middle\">N</text><text x=\"278\" y=\"158.3\" text-anchor=\"middle\">W</text>" +
        "<text class=\"sm\" x=\"120\" y=\"57\" text-anchor=\"middle\">4 cm</text><text class=\"sm\" x=\"124\" y=\"86\" text-anchor=\"middle\">10 cm</text>" +
        "<text class=\"sm\" x=\"186\" y=\"56\" text-anchor=\"middle\">45 m</text><text class=\"sm\" x=\"256\" y=\"33.5\" text-anchor=\"middle\">nest</text>" +
        "<text class=\"sm\" x=\"70\" y=\"36\" text-anchor=\"middle\">ruler</text><text class=\"sm\" x=\"206\" y=\"164\" text-anchor=\"middle\">river</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">A hiker holds a ruler upright 0.6 m from her eye <strong>E</strong> (ER = 0.6 m). A cliff across the gorge is 45 m from her eye (EC = 45 m). R and C are level with E, and the ruler and cliff are vertical. A bird's nest <strong>N</strong> lines up with <strong>U</strong>, 4 cm above R. The river <strong>W</strong> at the cliff's foot lines up with <strong>V</strong>, 10 cm below R.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that △ERU ∼ △ECN?",
          choices: [
            { letter: "A", text: "SAS∼" },
            { letter: "B", text: "SSS∼" },
            { letter: "C", text: "AA" },
            { letter: "D", text: "HL" }
          ],
          correct: "C"
        },
        {
          id: "nest",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How high above her eye level is the nest (the length CN)?",
          choices: [
            { letter: "A", text: "3 m" },
            { letter: "B", text: "300 m" },
            { letter: "C", text: "1.8 m" },
            { letter: "D", text: "7.5 m" }
          ],
          correct: "A"
        },
        {
          id: "total",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How high above the river is the nest?",
          choices: [
            { letter: "A", text: "4.5 m" },
            { letter: "B", text: "7.5 m" },
            { letter: "C", text: "6.3 m" },
            { letter: "D", text: "10.5 m" }
          ],
          correct: "D"
        },
        {
          id: "not",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which statement is NOT true?",
          choices: [
            { letter: "A", text: "RU ∥ CN" },
            { letter: "B", text: "RU/RV = CW/CN" },
            { letter: "C", text: "△ERV ∼ △ECW" },
            { letter: "D", text: "ER/EC = RU/CN" }
          ],
          correct: "B"
        },
        {
          id: "back",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "She walks straight back from the gorge to a spot 60 m from the cliff, on the same level ground, and holds the ruler 0.6 m from her eye again. How many centimeters above R does the nest line up now?",
          choices: [
            { letter: "A", text: "4 cm" },
            { letter: "B", text: "about 5.3 cm" },
            { letter: "C", text: "3 cm" },
            { letter: "D", text: "2.25 cm" }
          ],
          correct: "C"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from the ruler's small triangle ERU to the cliff's triangle ECN?",
          choices: [
            { letter: "A", text: "1/75" },
            { letter: "B", text: "75" },
            { letter: "C", text: "750" },
            { letter: "D", text: "44.4" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
