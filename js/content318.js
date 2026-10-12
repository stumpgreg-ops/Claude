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
        "<line class=\"thin dash\" x1=\"58\" y1=\"138\" x2=\"268\" y2=\"138\"/><line class=\"ln\" x1=\"58\" y1=\"138\" x2=\"189.3\" y2=\"22.2\"/>" +
        "<line class=\"ln\" x1=\"110.5\" y1=\"91.7\" x2=\"142\" y2=\"138\"/><line class=\"ac\" x1=\"189.3\" y1=\"22.2\" x2=\"268\" y2=\"138\"/>" +
        "<path class=\"thin\" d=\"M121.1 114.5 L127.8 117.2 L127.8 110\"/><path class=\"thin\" d=\"M225.9 83.2 L232.6 85.9 L232.5 78.7\"/>" +
        "<circle class=\"dt\" cx=\"58\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"110.5\" cy=\"91.7\" r=\"3\"/><circle class=\"dt\" cx=\"189.3\" cy=\"22.2\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"142\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"268\" cy=\"138\" r=\"3\"/><text x=\"56\" y=\"157\" text-anchor=\"middle\">O</text>" +
        "<text x=\"99.5\" y=\"89.7\" text-anchor=\"middle\">A</text><text x=\"187.3\" y=\"15.2\" text-anchor=\"middle\">B</text>" +
        "<text x=\"142\" y=\"157\" text-anchor=\"middle\">P</text><text x=\"270\" y=\"157\" text-anchor=\"middle\">Q</text>" +
        "<text x=\"71\" y=\"104.8\" text-anchor=\"middle\">10 cm</text><text x=\"136.6\" y=\"47\" text-anchor=\"middle\">15 cm</text>" +
        "<text x=\"144.4\" y=\"107.5\" text-anchor=\"middle\">8 cm</text><text class=\"sm\" x=\"172\" y=\"156\" text-anchor=\"middle\">stylus</text>" +
        "<text class=\"sm\" x=\"294\" y=\"143\" text-anchor=\"middle\">pen</text><text class=\"sm\" x=\"28\" y=\"143\" text-anchor=\"middle\">pivot</text></svg></figure>" +
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
            { letter: "A", text: "Yes; 27 − 9 = 33 − 11 and ∠O is shared" },
            { letter: "B", text: "No; 9/11 ≠ 27/33, so the sides differ" },
            { letter: "C", text: "No; 27/9 ≠ 33/11, so the sides differ" },
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
        "<polygon class=\"ln\" points=\"30.9,65.3 40,112 121.6,112\"/><polygon class=\"ln\" points=\"215.9,66.5 304.2,112 180,112\"/>" +
        "<circle class=\"dt\" cx=\"30.9\" cy=\"65.3\" r=\"3\"/><circle class=\"dt\" cx=\"40\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"121.6\" cy=\"112\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"215.9\" cy=\"66.5\" r=\"3\"/><circle class=\"dt\" cx=\"304.2\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"180\" cy=\"112\" r=\"3\"/>" +
        "<text x=\"22.2\" y=\"62.1\" text-anchor=\"middle\">A</text><text x=\"29.1\" y=\"124\" text-anchor=\"middle\">B</text>" +
        "<text x=\"134.1\" y=\"120.4\" text-anchor=\"middle\">C</text><text x=\"209.9\" y=\"61.1\" text-anchor=\"middle\">X</text>" +
        "<text x=\"316.9\" y=\"119.7\" text-anchor=\"middle\">Y</text><text x=\"167.5\" y=\"120.6\" text-anchor=\"middle\">Z</text>" +
        "<text x=\"15.8\" y=\"97.4\" text-anchor=\"middle\">7 in.</text><text x=\"80.8\" y=\"129\" text-anchor=\"middle\">12 in.</text>" +
        "<text x=\"82.7\" y=\"81.2\" text-anchor=\"middle\">15 in.</text><text x=\"180.7\" y=\"80.6\" text-anchor=\"middle\">42 in.</text>" +
        "<text x=\"270.1\" y=\"74.7\" text-anchor=\"middle\">72 in.</text><text x=\"242.1\" y=\"129\" text-anchor=\"middle\">90 in.</text>" +
        "<text class=\"sm\" x=\"82\" y=\"150\" text-anchor=\"middle\">model</text><text class=\"sm\" x=\"242\" y=\"150\" text-anchor=\"middle\">sculpture</text></svg>" +
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
          stem: "Which similarity statement matches the model to the sculpture?",
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
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Right triangle ABC, a quilt patch, with the right angle at A, AB up the left and AC along the bottom; a seam DE joins D on AB to E on AC; AD 9 in., DB 6 in., AE 12 in., EC 8 in. and BC 25 in.; triangle ADE is shaded\">" +
        "<polygon class=\"sh\" points=\"92,140 92,84.2 166.4,140\"/><polygon class=\"ln\" points=\"92,140 92,47 216,140\"/>" +
        "<line class=\"ac\" x1=\"92\" y1=\"84.2\" x2=\"166.4\" y2=\"140\"/><path class=\"thin\" d=\"M92 131 L101 131 L101 140\"/><circle class=\"dt\" cx=\"92\" cy=\"140\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"92\" cy=\"47\" r=\"3\"/><circle class=\"dt\" cx=\"216\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"92\" cy=\"84.2\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"166.4\" cy=\"140\" r=\"3\"/><text x=\"80\" y=\"153\" text-anchor=\"middle\">A</text><text x=\"80\" y=\"50\" text-anchor=\"middle\">B</text>" +
        "<text x=\"227\" y=\"149\" text-anchor=\"middle\">C</text><text x=\"80\" y=\"89.2\" text-anchor=\"middle\">D</text>" +
        "<text x=\"168.4\" y=\"134\" text-anchor=\"middle\">E</text><text x=\"62\" y=\"117.1\" text-anchor=\"middle\">9 in.</text>" +
        "<text x=\"62\" y=\"70.6\" text-anchor=\"middle\">6 in.</text><text x=\"129.2\" y=\"159\" text-anchor=\"middle\">12 in.</text>" +
        "<text x=\"191.2\" y=\"159\" text-anchor=\"middle\">8 in.</text><text x=\"163.6\" y=\"85.7\" text-anchor=\"middle\">25 in.</text>" +
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
          stem: "Which statement about the patch is NOT true?",
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
        "<rect class=\"sh2\" x=\"208\" y=\"50\" width=\"84.4\" height=\"64\"/><rect class=\"sh\" x=\"272.4\" y=\"56\" width=\"4\" height=\"56\"/>" +
        "<ellipse class=\"thin\" cx=\"212\" cy=\"82\" rx=\"4\" ry=\"20\"/><line class=\"thin dash\" x1=\"56\" y1=\"82\" x2=\"284.4\" y2=\"82\"/>" +
        "<line class=\"ln\" x1=\"56\" y1=\"17\" x2=\"56\" y2=\"137\"/><line class=\"thin\" x1=\"56\" y1=\"17\" x2=\"274.4\" y2=\"108\"/>" +
        "<line class=\"thin\" x1=\"56\" y1=\"137\" x2=\"274.4\" y2=\"60\"/><line class=\"ac\" x1=\"274.4\" y1=\"60\" x2=\"274.4\" y2=\"108\"/>" +
        "<path class=\"thin\" d=\"M56 75 L63 75 L63 82\"/><path class=\"thin\" d=\"M268.4 82 L268.4 88 L274.4 88\"/><circle class=\"dt\" cx=\"56\" cy=\"17\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"56\" cy=\"137\" r=\"3\"/><circle class=\"dt\" cx=\"212\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"274.4\" cy=\"60\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"274.4\" cy=\"108\" r=\"3\"/><text x=\"44\" y=\"22\" text-anchor=\"middle\">A</text><text x=\"44\" y=\"142\" text-anchor=\"middle\">B</text>" +
        "<text x=\"44\" y=\"87\" text-anchor=\"middle\">M</text><text x=\"200\" y=\"73\" text-anchor=\"middle\">L</text>" +
        "<text x=\"284.4\" y=\"63\" text-anchor=\"middle\">C</text><text x=\"284.4\" y=\"115\" text-anchor=\"middle\">D</text>" +
        "<text x=\"304.4\" y=\"87\" text-anchor=\"middle\">N</text><text x=\"30\" y=\"104\" text-anchor=\"middle\">2.4 m</text>" +
        "<text x=\"134\" y=\"76\" text-anchor=\"middle\">8 m</text><text class=\"sm\" x=\"237.2\" y=\"134\" text-anchor=\"middle\">50 mm</text>" +
        "<text class=\"sm\" x=\"82\" y=\"17\" text-anchor=\"middle\">statue</text><text class=\"sm\" x=\"230\" y=\"44\" text-anchor=\"middle\">camera</text></svg>" +
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
            { letter: "D", text: "AA: right angles at M and N, and vertical angles at L" }
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
        "<line class=\"ln\" x1=\"20\" y1=\"128\" x2=\"306\" y2=\"128\"/><line class=\"thin\" x1=\"292\" y1=\"128\" x2=\"282.4\" y2=\"128\"/>" +
        "<line class=\"thin\" x1=\"292\" y1=\"128\" x2=\"37.6\" y2=\"26.2\"/><line class=\"ln\" x1=\"52\" y1=\"128\" x2=\"52\" y2=\"32\"/>" +
        "<line class=\"ac\" x1=\"142\" y1=\"128\" x2=\"142\" y2=\"68\"/><line class=\"ln\" x1=\"202\" y1=\"128\" x2=\"202\" y2=\"92\"/>" +
        "<path class=\"thin\" d=\"M52 121 L59 121 L59 128\"/><path class=\"thin\" d=\"M142 121 L149 121 L149 128\"/>" +
        "<path class=\"thin\" d=\"M202 121 L209 121 L209 128\"/><circle class=\"dt\" cx=\"292\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"52\" cy=\"128\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"142\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"202\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"52\" cy=\"32\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"142\" cy=\"68\" r=\"3\"/><circle class=\"dt\" cx=\"202\" cy=\"92\" r=\"3\"/><text x=\"52\" y=\"147\" text-anchor=\"middle\">H</text>" +
        "<text x=\"142\" y=\"147\" text-anchor=\"middle\">G</text><text x=\"202\" y=\"147\" text-anchor=\"middle\">F</text>" +
        "<text x=\"292\" y=\"147\" text-anchor=\"middle\">V</text><text x=\"52\" y=\"25\" text-anchor=\"middle\">M</text>" +
        "<text x=\"142\" y=\"61\" text-anchor=\"middle\">K</text><text x=\"202\" y=\"85\" text-anchor=\"middle\">J</text>" +
        "<text class=\"sm\" x=\"97\" y=\"160\" text-anchor=\"middle\">45 cm</text><text class=\"sm\" x=\"172\" y=\"160\" text-anchor=\"middle\">30 cm</text>" +
        "<text class=\"sm\" x=\"247\" y=\"160\" text-anchor=\"middle\">45 cm</text><text x=\"28\" y=\"85\" text-anchor=\"middle\">96 cm</text>" +
        "<text class=\"sm\" x=\"288\" y=\"98\" text-anchor=\"middle\">vanishing</text><text class=\"sm\" x=\"296\" y=\"112\" text-anchor=\"middle\">point</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
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
            { letter: "A", text: "32.3 units" },
            { letter: "B", text: "16.1 units" },
            { letter: "C", text: "8.1 units" },
            { letter: "D", text: "20.0 units" }
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
          stem: "The small logo is printed so that AB is 6 cm long. How long is AC on the print, to the nearest tenth of a centimeter?",
          choices: [
            { letter: "A", text: "4.5 cm" },
            { letter: "B", text: "2.2 cm" },
            { letter: "C", text: "4.0 cm" },
            { letter: "D", text: "5.7 cm" }
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
        "<text x=\"92.3\" y=\"60.9\" text-anchor=\"middle\">16 in.</text><text x=\"77.7\" y=\"117.6\" text-anchor=\"middle\">14 in.</text>" +
        "<text x=\"162.2\" y=\"36.8\" text-anchor=\"middle\">12 in.</text><text x=\"215.8\" y=\"93.5\" text-anchor=\"middle\">28 in.</text>" +
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
          stem: "Which similarity statement matches the vertices of the two easel triangles?",
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
            { letter: "B", text: "Yes; 16/28 = 12/14" },
            { letter: "C", text: "Yes; 16 + 14 = 12 + 28" },
            { letter: "D", text: "No; 16/30 ≠ 12/40" }
          ],
          correct: "D"
        },
        {
          id: "move",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The painter keeps D where it is and slides E along AC so that the brace becomes parallel to BC. How far from A is E then, to the nearest tenth of an inch?",
          choices: [
            { letter: "A", text: "21.3 in." },
            { letter: "B", text: "16.0 in." },
            { letter: "C", text: "12.0 in." },
            { letter: "D", text: "24.0 in." }
          ],
          correct: "A"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the perimeter of the triangle ADE at the top of the easel?",
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
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Triangle ABC, a mosaic tile, with a cut AD from A to D on BC; angle BAD and angle C are marked congruent with single arcs; AB 12 cm, AC 15 cm and BC 18 cm\">" +
        "<polygon class=\"sh2\" points=\"136.8,38.7 76,128 238,128\"/><polygon class=\"ln\" points=\"136.8,38.7 76,128 238,128\"/>" +
        "<line class=\"ac\" x1=\"136.8\" y1=\"38.7\" x2=\"148\" y2=\"128\"/><path class=\"thin\" d=\"M126.6 53.6 A18 18 0 0 0 139 56.6\"/>" +
        "<path class=\"thin\" d=\"M221.5 113.4 A22 22 0 0 0 216 128\"/><circle class=\"dt\" cx=\"136.8\" cy=\"38.7\" r=\"3\"/><circle class=\"dt\" cx=\"76\" cy=\"128\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"238\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"148\" cy=\"128\" r=\"3\"/><text x=\"136.8\" y=\"31.7\" text-anchor=\"middle\">A</text>" +
        "<text x=\"65\" y=\"142\" text-anchor=\"middle\">B</text><text x=\"249\" y=\"142\" text-anchor=\"middle\">C</text>" +
        "<text x=\"148\" y=\"145\" text-anchor=\"middle\">D</text><text x=\"88.2\" y=\"76\" text-anchor=\"middle\">12 cm</text>" +
        "<text x=\"200.6\" y=\"73.4\" text-anchor=\"middle\">15 cm</text><text x=\"191\" y=\"159\" text-anchor=\"middle\">18 cm</text>" +
        "<line class=\"thin\" x1=\"76\" y1=\"140\" x2=\"140\" y2=\"140\"/><line class=\"thin\" x1=\"156\" y1=\"140\" x2=\"238\" y2=\"140\"/>" +
        "<line class=\"thin\" x1=\"76\" y1=\"136\" x2=\"76\" y2=\"144\"/><line class=\"thin\" x1=\"238\" y1=\"136\" x2=\"238\" y2=\"144\"/></svg></figure>" +
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
          stem: "Which similarity statement pairs the piece ABD with the whole tile?",
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
            { letter: "A", text: "Yes; DC/BC = AC/AB, so the sides match" },
            { letter: "B", text: "No; ∠ADC is a right angle, but ∠B is not" },
            { letter: "C", text: "No; AD = DC, but the tile has no equal sides" },
            { letter: "D", text: "Yes; AD/AB = DC/AC, and ∠C is shared" }
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
        "<line class=\"thin\" x1=\"10\" y1=\"134\" x2=\"310\" y2=\"134\"/><rect class=\"sh\" x=\"103\" y=\"131\" width=\"14\" height=\"3\"/>" +
        "<line class=\"ln\" x1=\"44\" y1=\"134\" x2=\"44\" y2=\"93.5\"/><line class=\"ln\" x1=\"286\" y1=\"134\" x2=\"286\" y2=\"26\"/>" +
        "<line class=\"thin dash\" x1=\"44\" y1=\"93.5\" x2=\"110\" y2=\"134\"/><line class=\"thin dash\" x1=\"110\" y1=\"134\" x2=\"286\" y2=\"26\"/>" +
        "<path class=\"thin\" d=\"M44 128 L50 128 L50 134\"/><path class=\"thin\" d=\"M286 127 L279 127 L279 134\"/>" +
        "<path class=\"thin\" d=\"M90 134 A20 20 0 0 1 93 123.5\"/><path class=\"thin\" d=\"M130 134 A20 20 0 0 0 127 123.5\"/>" +
        "<circle class=\"dt\" cx=\"44\" cy=\"93.5\" r=\"3\"/><circle class=\"dt\" cx=\"44\" cy=\"134\" r=\"3\"/><circle class=\"dt\" cx=\"110\" cy=\"134\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"286\" cy=\"134\" r=\"3\"/><circle class=\"dt\" cx=\"286\" cy=\"26\" r=\"3\"/><text x=\"32\" y=\"96.5\" text-anchor=\"middle\">E</text>" +
        "<text x=\"44\" y=\"152\" text-anchor=\"middle\">S</text><text x=\"110\" y=\"152\" text-anchor=\"middle\">M</text>" +
        "<text x=\"286\" y=\"152\" text-anchor=\"middle\">B</text><text x=\"274\" y=\"29\" text-anchor=\"middle\">T</text>" +
        "<text x=\"20\" y=\"120.8\" text-anchor=\"middle\">1.5 m</text><text x=\"77\" y=\"152\" text-anchor=\"middle\">2 m</text>" +
        "<text x=\"198\" y=\"152\" text-anchor=\"middle\">16 m</text><text class=\"sm\" x=\"304\" y=\"74\" text-anchor=\"middle\">oak</text>" +
        "<text class=\"sm\" x=\"110\" y=\"166\" text-anchor=\"middle\">mirror</text></svg><figcaption>Not drawn to scale</figcaption></figure>" +
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
        "<line class=\"thin\" x1=\"10\" y1=\"136\" x2=\"310\" y2=\"136\"/><line class=\"ln\" x1=\"24\" y1=\"136\" x2=\"24\" y2=\"27.1\"/>" +
        "<line class=\"ac\" x1=\"24\" y1=\"136\" x2=\"169.2\" y2=\"136\"/><line class=\"thin dash\" x1=\"24\" y1=\"27.1\" x2=\"169.2\" y2=\"136\"/>" +
        "<line class=\"ln\" x1=\"214\" y1=\"136\" x2=\"214\" y2=\"85.6\"/><line class=\"ac\" x1=\"214\" y1=\"136\" x2=\"281.2\" y2=\"136\"/>" +
        "<line class=\"thin dash\" x1=\"214\" y1=\"85.6\" x2=\"281.2\" y2=\"136\"/><path class=\"thin\" d=\"M24 129 L31 129 L31 136\"/>" +
        "<path class=\"thin\" d=\"M214 130 L220 130 L220 136\"/><circle class=\"dt\" cx=\"24\" cy=\"27.1\" r=\"3\"/><circle class=\"dt\" cx=\"24\" cy=\"136\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"169.2\" cy=\"136\" r=\"3\"/><circle class=\"dt\" cx=\"214\" cy=\"85.6\" r=\"3\"/><circle class=\"dt\" cx=\"214\" cy=\"136\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"281.2\" cy=\"136\" r=\"3\"/><text x=\"12\" y=\"32.1\" text-anchor=\"middle\">T</text><text x=\"24\" y=\"155\" text-anchor=\"middle\">B</text>" +
        "<text x=\"169.2\" y=\"155\" text-anchor=\"middle\">S</text><text x=\"202\" y=\"90.6\" text-anchor=\"middle\">H</text>" +
        "<text x=\"214\" y=\"155\" text-anchor=\"middle\">G</text><text x=\"281.2\" y=\"155\" text-anchor=\"middle\">K</text>" +
        "<text x=\"96.6\" y=\"155\" text-anchor=\"middle\">22 m</text><text x=\"190\" y=\"115.8\" text-anchor=\"middle\">1.8 m</text>" +
        "<text x=\"247.6\" y=\"155\" text-anchor=\"middle\">2.4 m</text><text class=\"sm\" x=\"46\" y=\"37.1\" text-anchor=\"middle\">tree</text>" +
        "<text class=\"sm\" x=\"238\" y=\"81.6\" text-anchor=\"middle\">hiker</text><text class=\"sm\" x=\"150\" y=\"44\" text-anchor=\"middle\">sun rays</text></svg>" +
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
          stem: "Which similarity statement pairs the hiker's triangle with the tree's?",
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
        "<line class=\"thin\" x1=\"20\" y1=\"144\" x2=\"300\" y2=\"144\"/><line class=\"ln\" x1=\"230\" y1=\"144\" x2=\"230\" y2=\"9\"/>" +
        "<line class=\"ln\" x1=\"110\" y1=\"144\" x2=\"110\" y2=\"99\"/><line class=\"ac\" x1=\"50\" y1=\"144\" x2=\"230\" y2=\"9\"/>" +
        "<path class=\"thin\" d=\"M110 138 L104 138 L104 144\"/><path class=\"thin\" d=\"M230 137 L223 137 L223 144\"/><circle class=\"dt\" cx=\"50\" cy=\"144\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"110\" cy=\"144\" r=\"3\"/><circle class=\"dt\" cx=\"110\" cy=\"99\" r=\"3\"/><circle class=\"dt\" cx=\"230\" cy=\"144\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"230\" cy=\"9\" r=\"3\"/><text x=\"40\" y=\"161\" text-anchor=\"middle\">A</text><text x=\"110\" y=\"163\" text-anchor=\"middle\">S</text>" +
        "<text x=\"108\" y=\"91\" text-anchor=\"middle\">P</text><text x=\"230\" y=\"163\" text-anchor=\"middle\">B</text>" +
        "<text x=\"242\" y=\"14\" text-anchor=\"middle\">T</text><text x=\"80\" y=\"163\" text-anchor=\"middle\">0.8 m</text>" +
        "<text x=\"170\" y=\"163\" text-anchor=\"middle\">1.6 m</text><text x=\"134\" y=\"120.5\" text-anchor=\"middle\">0.6 m</text>" +
        "<text x=\"68\" y=\"114.5\" text-anchor=\"middle\">1.0 m</text><text class=\"sm\" x=\"260\" y=\"84\" text-anchor=\"middle\">sapling</text>" +
        "<text class=\"sm\" x=\"132\" y=\"138\" text-anchor=\"middle\">stake</text></svg></figure>" +
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
          stem: "A second stake, 1.5 m tall, will also touch the rope. How far from A should it stand?",
          choices: [
            { letter: "A", text: "1.125 m" },
            { letter: "B", text: "2.3 m" },
            { letter: "C", text: "2 m" },
            { letter: "D", text: "1.2 m" }
          ],
          correct: "C"
        },
        {
          id: "not",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which statement about the rope and the stake is NOT true?",
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
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A canyon seen from above: point T on the far rim; A and B on the near rim; lines from T through A and B reach D and E farther back; AB is parallel to DE; AB 36 m, DE 48 m, AD 15 m; TA is x\">" +
        "<rect class=\"sh2\" x=\"0\" y=\"24.7\" width=\"320\" height=\"91.3\"/><line class=\"thin\" x1=\"0\" y1=\"116\" x2=\"320\" y2=\"116\"/>" +
        "<line class=\"thin\" x1=\"0\" y1=\"24.7\" x2=\"320\" y2=\"24.7\"/><line class=\"ln\" x1=\"223.1\" y1=\"24.7\" x2=\"125.6\" y2=\"146.4\"/>" +
        "<line class=\"ln\" x1=\"223.1\" y1=\"24.7\" x2=\"250.4\" y2=\"146.4\"/><line class=\"ln\" x1=\"150\" y1=\"116\" x2=\"243.6\" y2=\"116\"/>" +
        "<line class=\"ln\" x1=\"125.6\" y1=\"146.4\" x2=\"250.4\" y2=\"146.4\"/><path class=\"thin\" d=\"M200.2 120 L206.2 116 L200.2 112\"/>" +
        "<path class=\"thin\" d=\"M194.5 150.4 L200.5 146.4 L194.5 142.4\"/><circle class=\"dt\" cx=\"223.1\" cy=\"24.7\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"150\" cy=\"116\" r=\"3\"/><circle class=\"dt\" cx=\"243.6\" cy=\"116\" r=\"3\"/><circle class=\"dt\" cx=\"125.6\" cy=\"146.4\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"250.4\" cy=\"146.4\" r=\"3\"/><text x=\"223.1\" y=\"18.7\" text-anchor=\"middle\">T</text>" +
        "<text x=\"163\" y=\"112\" text-anchor=\"middle\">A</text><text x=\"230.6\" y=\"112\" text-anchor=\"middle\">B</text>" +
        "<text x=\"113.6\" y=\"155.4\" text-anchor=\"middle\">D</text><text x=\"262.4\" y=\"155.4\" text-anchor=\"middle\">E</text>" +
        "<text x=\"184.8\" y=\"134\" text-anchor=\"middle\">36 m</text><text x=\"188\" y=\"166.4\" text-anchor=\"middle\">48 m</text>" +
        "<text x=\"115.8\" y=\"132.2\" text-anchor=\"middle\">15 m</text><text class=\"acc\" x=\"174.6\" y=\"75.3\" text-anchor=\"middle\">x</text>" +
        "<text class=\"sm\" x=\"272\" y=\"74.3\" text-anchor=\"middle\">canyon</text><text class=\"sm\" x=\"272\" y=\"18.7\" text-anchor=\"middle\">far rim</text>" +
        "<text class=\"sm\" x=\"282\" y=\"132\" text-anchor=\"middle\">near rim</text></svg></figure>" +
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
          stem: "The ranger also measures BE = 14 m. How far is it from B to T?",
          choices: [
            { letter: "A", text: "56 m" },
            { letter: "B", text: "10.5 m" },
            { letter: "C", text: "about 18.7 m" },
            { letter: "D", text: "42 m" }
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
        "<polygon class=\"sh2\" points=\"58,146 87.9,120.9 39.9,43.6\"/><polygon class=\"ln\" points=\"58,146 87.9,120.9 39.9,43.6\"/>" +
        "<polygon class=\"sh2\" points=\"176,146 197.5,23.9 140.4,116.1\"/><polygon class=\"ln\" points=\"176,146 197.5,23.9 140.4,116.1\"/>" +
        "<polygon class=\"sh2\" points=\"270,146 238.6,114.6 280.3,28.1\"/><polygon class=\"ln\" points=\"270,146 238.6,114.6 280.3,28.1\"/>" +
        "<line class=\"thin\" x1=\"58\" y1=\"146\" x2=\"58\" y2=\"162\"/><line class=\"thin\" x1=\"176\" y1=\"146\" x2=\"176\" y2=\"162\"/>" +
        "<line class=\"thin\" x1=\"270\" y1=\"146\" x2=\"270\" y2=\"162\"/><path class=\"thin\" d=\"M68.7 137 A14 14 0 0 0 55.6 132.2\"/>" +
        "<path class=\"thin\" d=\"M178.4 132.2 A14 14 0 0 0 165.3 137\"/><path class=\"thin\" d=\"M260.1 136.1 A14 14 0 0 1 271.2 132.1\"/>" +
        "<circle class=\"dt\" cx=\"58\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"87.9\" cy=\"120.9\" r=\"3\"/><circle class=\"dt\" cx=\"39.9\" cy=\"43.6\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"176\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"197.5\" cy=\"23.9\" r=\"3\"/><circle class=\"dt\" cx=\"140.4\" cy=\"116.1\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"270\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"238.6\" cy=\"114.6\" r=\"3\"/><circle class=\"dt\" cx=\"280.3\" cy=\"28.1\" r=\"3\"/>" +
        "<text x=\"47\" y=\"155\" text-anchor=\"middle\">A</text><text x=\"97.8\" y=\"132.6\" text-anchor=\"middle\">B</text>" +
        "<text x=\"35.8\" y=\"37.3\" text-anchor=\"middle\">C</text><text x=\"187\" y=\"155\" text-anchor=\"middle\">D</text>" +
        "<text x=\"201.7\" y=\"17.6\" text-anchor=\"middle\">E</text><text x=\"130.4\" y=\"127.8\" text-anchor=\"middle\">F</text>" +
        "<text x=\"281\" y=\"155\" text-anchor=\"middle\">G</text><text x=\"229\" y=\"126.8\" text-anchor=\"middle\">H</text>" +
        "<text x=\"283.3\" y=\"21.4\" text-anchor=\"middle\">J</text><text x=\"84.5\" y=\"152.3\" text-anchor=\"middle\">3 cm</text>" +
        "<text x=\"29.3\" y=\"103.3\" text-anchor=\"middle\">8 cm</text><text class=\"sm\" x=\"67.2\" y=\"124.6\" text-anchor=\"middle\">60°</text>" +
        "<text x=\"144\" y=\"152.9\" text-anchor=\"middle\">7.5 cm</text><text x=\"208.4\" y=\"93.8\" text-anchor=\"middle\">20 cm</text>" +
        "<text class=\"sm\" x=\"167.1\" y=\"125.6\" text-anchor=\"middle\">60°</text><text x=\"241.6\" y=\"148\" text-anchor=\"middle\">6 cm</text>" +
        "<text x=\"297.1\" y=\"93.9\" text-anchor=\"middle\">16 cm</text><text class=\"sm\" x=\"260.1\" y=\"122.7\" text-anchor=\"middle\">50°</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
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
          stem: "Which similarity statement is correct for fronds 1 and 2?",
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
        "<polygon class=\"sh2\" points=\"0,70.3 320,161.8 320,170 0,170\"/><line class=\"thin\" x1=\"0\" y1=\"70.3\" x2=\"320\" y2=\"161.8\"/>" +
        "<line class=\"ln\" x1=\"34\" y1=\"80\" x2=\"34\" y2=\"12.5\"/><line class=\"ln\" x1=\"207.1\" y1=\"129.5\" x2=\"207.1\" y2=\"98\"/>" +
        "<line class=\"ac\" x1=\"34\" y1=\"80\" x2=\"142.2\" y2=\"110.9\"/><line class=\"ac\" x1=\"207.1\" y1=\"129.5\" x2=\"257.5\" y2=\"143.9\"/>" +
        "<line class=\"thin dash\" x1=\"34\" y1=\"12.5\" x2=\"142.2\" y2=\"110.9\"/><line class=\"thin dash\" x1=\"207.1\" y1=\"98\" x2=\"257.5\" y2=\"143.9\"/>" +
        "<circle class=\"dt\" cx=\"34\" cy=\"12.5\" r=\"3\"/><circle class=\"dt\" cx=\"34\" cy=\"80\" r=\"3\"/><circle class=\"dt\" cx=\"142.2\" cy=\"110.9\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"207.1\" cy=\"98\" r=\"3\"/><circle class=\"dt\" cx=\"207.1\" cy=\"129.5\" r=\"3\"/><circle class=\"dt\" cx=\"257.5\" cy=\"143.9\" r=\"3\"/>" +
        "<text x=\"22\" y=\"19.5\" text-anchor=\"middle\">H</text><text x=\"30.4\" y=\"97.5\" text-anchor=\"middle\">K</text>" +
        "<text x=\"138.6\" y=\"128.4\" text-anchor=\"middle\">L</text><text x=\"196.1\" y=\"99\" text-anchor=\"middle\">P</text>" +
        "<text x=\"203.5\" y=\"147\" text-anchor=\"middle\">Q</text><text x=\"254\" y=\"161.4\" text-anchor=\"middle\">R</text>" +
        "<text x=\"84.2\" y=\"113.9\" text-anchor=\"middle\">15 m</text><text x=\"183.1\" y=\"119\" text-anchor=\"middle\">1.2 m</text>" +
        "<text x=\"228.4\" y=\"155.2\" text-anchor=\"middle\">2 m</text><text class=\"sm\" x=\"58\" y=\"68\" text-anchor=\"middle\">hoodoo</text>" +
        "<text class=\"sm\" x=\"229.1\" y=\"96\" text-anchor=\"middle\">post</text><text class=\"sm\" x=\"250\" y=\"28\" text-anchor=\"middle\">sun rays</text></svg>" +
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
          stem: "Which similarity statement pairs the post's triangle with the hoodoo's?",
          choices: [
            { letter: "A", text: "△PQR ∼ △KHL" },
            { letter: "B", text: "△QPR ∼ △HKL" },
            { letter: "C", text: "△PQR ∼ △HKL" },
            { letter: "D", text: "△PRQ ∼ △HKL" }
          ],
          correct: "C"
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
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A waterfall TB on the right falls into a pool at B; Jo's eye E is on a rock ledge across the pool, level with M on the falls; sight lines ET and EB meet at a right angle at E; EM is perpendicular to TB; EM 6 m and MB 3 m\">" +
        "<rect class=\"sh2\" x=\"40\" y=\"162\" width=\"172\" height=\"8\"/><rect class=\"sh\" x=\"96\" y=\"136\" width=\"44\" height=\"26\"/>" +
        "<rect class=\"sh2\" x=\"200\" y=\"12\" width=\"12\" height=\"150\"/><line class=\"ln\" x1=\"200\" y1=\"12\" x2=\"200\" y2=\"162\"/>" +
        "<line class=\"thin\" x1=\"140\" y1=\"132\" x2=\"200\" y2=\"12\"/><line class=\"thin\" x1=\"140\" y1=\"132\" x2=\"200\" y2=\"162\"/>" +
        "<line class=\"ac\" x1=\"140\" y1=\"132\" x2=\"200\" y2=\"132\"/><path class=\"thin\" d=\"M144 124 L152.1 128 L148 136\"/>" +
        "<path class=\"thin\" d=\"M193 132 L193 125 L200 125\"/><circle class=\"dt\" cx=\"140\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"200\" cy=\"12\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"200\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"200\" cy=\"162\" r=\"3\"/><text x=\"129\" y=\"133\" text-anchor=\"middle\">E</text>" +
        "<text x=\"188\" y=\"21\" text-anchor=\"middle\">T</text><text x=\"224\" y=\"139\" text-anchor=\"middle\">M</text>" +
        "<text x=\"224\" y=\"163\" text-anchor=\"middle\">B</text><text x=\"170\" y=\"128\" text-anchor=\"middle\">6 m</text>" +
        "<text class=\"sm\" x=\"250\" y=\"151\" text-anchor=\"middle\">3 m</text><line class=\"thin\" x1=\"236\" y1=\"132\" x2=\"236\" y2=\"162\"/>" +
        "<text class=\"sm\" x=\"248\" y=\"66\" text-anchor=\"middle\">waterfall</text><text class=\"sm\" x=\"70\" y=\"158\" text-anchor=\"middle\">pool</text></svg></figure>" +
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
          stem: "Which similarity statement is correct for the upper and lower right triangles?",
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
            { letter: "A", text: "No; 8/4 ≠ 16/8, so the angle is not 90°" },
            { letter: "B", text: "Yes; 16/8 = 8/4 and 16 + 4 = 20" },
            { letter: "C", text: "Yes; 8 · 4 = 20 − 4, so the parts fit" },
            { letter: "D", text: "No; 20 − 4 ≠ 8 · 2, so TM is too long" }
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
        "<rect class=\"sh2\" x=\"0\" y=\"74\" width=\"40\" height=\"94\"/><rect class=\"sh2\" x=\"290\" y=\"4\" width=\"30\" height=\"164\"/>" +
        "<rect class=\"sh2\" x=\"150\" y=\"159.3\" width=\"140\" height=\"8.8\"/><rect class=\"sh\" x=\"97\" y=\"30\" width=\"6\" height=\"70\"/>" +
        "<line class=\"ln\" x1=\"290\" y1=\"4\" x2=\"290\" y2=\"159.3\"/><line class=\"thin dash\" x1=\"20\" y1=\"58\" x2=\"290\" y2=\"58\"/>" +
        "<line class=\"thin\" x1=\"20\" y1=\"58\" x2=\"290\" y2=\"17.5\"/><line class=\"thin\" x1=\"20\" y1=\"58\" x2=\"290\" y2=\"159.3\"/>" +
        "<path class=\"thin\" d=\"M283 58 L283 51 L290 51\"/><circle class=\"dt\" cx=\"20\" cy=\"58\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"58\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"100\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"88\" r=\"3\"/><circle class=\"dt\" cx=\"290\" cy=\"58\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"290\" cy=\"17.5\" r=\"3\"/><circle class=\"dt\" cx=\"290\" cy=\"159.3\" r=\"3\"/><text x=\"16\" y=\"51\" text-anchor=\"middle\">E</text>" +
        "<text x=\"89\" y=\"74\" text-anchor=\"middle\">R</text><text x=\"89\" y=\"43\" text-anchor=\"middle\">U</text><text x=\"89\" y=\"102\" text-anchor=\"middle\">V</text>" +
        "<text x=\"304\" y=\"63\" text-anchor=\"middle\">C</text><text x=\"304\" y=\"22.5\" text-anchor=\"middle\">N</text>" +
        "<text x=\"304\" y=\"160.3\" text-anchor=\"middle\">W</text><text class=\"sm\" x=\"134\" y=\"56\" text-anchor=\"middle\">4 cm</text>" +
        "<text class=\"sm\" x=\"126\" y=\"80\" text-anchor=\"middle\">10 cm</text><text class=\"sm\" x=\"196\" y=\"74\" text-anchor=\"middle\">45 m</text>" +
        "<text class=\"sm\" x=\"258\" y=\"37.5\" text-anchor=\"middle\">nest</text><text class=\"sm\" x=\"100\" y=\"24\" text-anchor=\"middle\">ruler</text>" +
        "<text class=\"sm\" x=\"236\" y=\"154\" text-anchor=\"middle\">river</text></svg><figcaption>Not drawn to scale</figcaption></figure>" +
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
          stem: "Which statement about the ruler and the cliff is NOT true?",
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
            { letter: "A", text: "75" },
            { letter: "B", text: "1/75" },
            { letter: "C", text: "750" },
            { letter: "D", text: "44.4" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
