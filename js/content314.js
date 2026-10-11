/* SOL Labyrinth — Geometry game (family GEO), G.TR.2 congruent triangles (Virginia 2023 Geometry SOL). Original items only.
   Modes: rocks (7 packs; space, science and weather), then sky (7 packs; travel and getting around).
   Every figure coordinate and every numeric answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-tr2-rocks-solar-brackets",
      family: "GEO",
      mode: "rocks",
      title: "Brackets on the Solar Farm",
      kind: "Triangles · G.TR.2",
      blurb: "Two triangular panel brackets, one bolted on turned around.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Two shaded triangles. Triangle JKL sits on side JK. Triangle MNP is the same shape turned around. Angles J and M have one arc, angles K and N have two arcs, and sides KL and NP have one tick mark\"><polygon class=\"sh2\" points=\"24,138 124,138 96.1,52.1\"/><polygon class=\"sh2\" points=\"296,85.9 209.4,35.9 190.6,124.2\"/><path class=\"thin\" d=\"M41 138 A17 17 0 0 0 34.9 125\"/><path class=\"thin\" d=\"M281.3 77.4 A17 17 0 0 0 280 91.7\"/><path class=\"thin\" d=\"M110 138 A14 14 0 0 1 119.7 124.7 M106 138 A18 18 0 0 1 118.4 120.9\"/><path class=\"thin\" d=\"M221.5 42.9 A14 14 0 0 1 206.5 49.6 M225 44.9 A18 18 0 0 1 205.7 53.5\"/><path class=\"thin\" d=\"M114.8 93.5 L105.3 96.6\"/><path class=\"thin\" d=\"M195.1 79 L204.9 81.1\"/><circle class=\"dt\" cx=\"24\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"124\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"96.1\" cy=\"52.1\" r=\"3\"/><circle class=\"dt\" cx=\"296\" cy=\"85.9\" r=\"3\"/><circle class=\"dt\" cx=\"209.4\" cy=\"35.9\" r=\"3\"/><circle class=\"dt\" cx=\"190.6\" cy=\"124.2\" r=\"3\"/><text x=\"12.4\" y=\"148.8\" text-anchor=\"middle\">J</text><text x=\"134.8\" y=\"150.2\" text-anchor=\"middle\">K</text><text x=\"99.3\" y=\"44.5\" text-anchor=\"middle\">L</text><text x=\"309\" y=\"91.7\" text-anchor=\"middle\">M</text><text x=\"203.7\" y=\"29.2\" text-anchor=\"middle\">N</text><text x=\"181.5\" y=\"138.5\" text-anchor=\"middle\">P</text></svg></figure><p class=\"geo-given\">Two triangular brackets, <strong>△JKL</strong> and <strong>△MNP</strong>, hold up panels on a solar farm. The second one was bolted on turned around. The marks show ∠J ≅ ∠M, ∠K ≅ ∠N and KL ≅ NP.</p>",
      claims: [
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which shortcut do the marks support for △JKL ≅ △MNP?",
          choices: [
            { letter: "A", text: "ASA" },
            { letter: "B", text: "SSA" },
            { letter: "C", text: "AAS" },
            { letter: "D", text: "AAA" }
          ],
          correct: "C"
        },
        {
          id: "angP",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠J = 50° and m∠K = 72°. What is m∠P?",
          choices: [
            { letter: "A", text: "58°" },
            { letter: "B", text: "72°" },
            { letter: "C", text: "50°" },
            { letter: "D", text: "122°" }
          ],
          correct: "A"
        },
        {
          id: "asa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Keep ∠J ≅ ∠M and ∠K ≅ ∠N. Which pair of sides would prove the brackets congruent by ASA instead?",
          choices: [
            { letter: "A", text: "KL ≅ NP" },
            { letter: "B", text: "JK ≅ MN" },
            { letter: "C", text: "JL ≅ MP" },
            { letter: "D", text: "KL ≅ MP" }
          ],
          correct: "B"
        },
        {
          id: "x",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "KL = 36 cm and NP = (3x − 6) cm. What is x?",
          choices: [
            { letter: "A", text: "10" },
            { letter: "B", text: "12" },
            { letter: "C", text: "42" },
            { letter: "D", text: "14" }
          ],
          correct: "D"
        },
        {
          id: "notEnough",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which set of facts would NOT prove another bracket congruent to △JKL?",
          choices: [
            { letter: "A", text: "Its three sides match △JKL's sides" },
            { letter: "B", text: "Two angles and a non-included side match" },
            { letter: "C", text: "Two sides and the included angle match" },
            { letter: "D", text: "Its three angles match △JKL's angles" }
          ],
          correct: "D"
        },
        {
          id: "valid",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Rosa writes: ∠J ≅ ∠M and ∠K ≅ ∠N, so ∠L ≅ ∠P (Third Angles Theorem). Then ∠K, KL and ∠L give ASA. Is her proof valid?",
          choices: [
            { letter: "A", text: "Yes; KL lies between ∠K and ∠L" },
            { letter: "B", text: "No; ASA needs side JK" },
            { letter: "C", text: "No; that theorem is only for right triangles" },
            { letter: "D", text: "No; she has only SSA" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr2-rocks-orbit",
      family: "GEO",
      mode: "rocks",
      title: "Four Satellites, One Orbit",
      kind: "Triangles · G.TR.2",
      blurb: "Satellites on a circular orbit and two equal gaps between them.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A dashed circle, the orbit, with center O inside a small shaded planet. Points A, B, C and D on the orbit are joined to O. Segments AB and CD have one tick mark each\"><circle class=\"thin dash\" cx=\"160\" cy=\"86\" r=\"74\"/><circle class=\"sh2\" cx=\"160\" cy=\"86\" r=\"24\"/><line class=\"ln\" x1=\"160\" y1=\"86\" x2=\"98.7\" y2=\"127.4\"/><line class=\"ln\" x1=\"160\" y1=\"86\" x2=\"95.9\" y2=\"49\"/><line class=\"ln\" x1=\"160\" y1=\"86\" x2=\"194.7\" y2=\"20.7\"/><line class=\"ln\" x1=\"160\" y1=\"86\" x2=\"234\" y2=\"88.6\"/><line class=\"ln\" x1=\"98.7\" y1=\"127.4\" x2=\"95.9\" y2=\"49\"/><line class=\"ln\" x1=\"194.7\" y1=\"20.7\" x2=\"234\" y2=\"88.6\"/><path class=\"thin\" d=\"M102.3 88 L92.3 88.4\"/><path class=\"thin\" d=\"M210 57.1 L218.7 52.1\"/><circle class=\"dt\" cx=\"160\" cy=\"86\" r=\"3\"/><circle class=\"dt\" cx=\"98.7\" cy=\"127.4\" r=\"3\"/><circle class=\"dt\" cx=\"95.9\" cy=\"49\" r=\"3\"/><circle class=\"dt\" cx=\"194.7\" cy=\"20.7\" r=\"3\"/><circle class=\"dt\" cx=\"234\" cy=\"88.6\" r=\"3\"/><text x=\"87.9\" y=\"139.6\" text-anchor=\"middle\">A</text><text x=\"84.7\" y=\"47.5\" text-anchor=\"middle\">B</text><text x=\"200.8\" y=\"14.2\" text-anchor=\"middle\">C</text><text x=\"246.9\" y=\"94\" text-anchor=\"middle\">D</text><text x=\"160\" y=\"104\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"221.6\" y=\"154.4\" text-anchor=\"middle\">orbit</text></svg></figure><p class=\"geo-given\">Satellites <strong>A</strong>, <strong>B</strong>, <strong>C</strong> and <strong>D</strong> travel on a circular orbit with center <strong>O</strong>. The straight-line distances AB and CD are equal.</p>",
      claims: [
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which criterion proves △AOB ≅ △COD?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "SSS" },
            { letter: "C", text: "HL" },
            { letter: "D", text: "AAA" }
          ],
          correct: "B"
        },
        {
          id: "radii",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Why is OA ≅ OC?",
          choices: [
            { letter: "A", text: "Reflexive property of congruence" },
            { letter: "B", text: "Vertical angles are congruent" },
            { letter: "C", text: "All radii of a circle are congruent" },
            { letter: "D", text: "Definition of congruent chords" }
          ],
          correct: "C"
        },
        {
          id: "angOCD",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠AOB = 64°. What is m∠OCD?",
          choices: [
            { letter: "A", text: "64°" },
            { letter: "B", text: "116°" },
            { letter: "C", text: "26°" },
            { letter: "D", text: "58°" }
          ],
          correct: "D"
        },
        {
          id: "chord",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AB = (3x + 200) km and CD = (5x − 1,800) km. How far apart are satellites A and B?",
          choices: [
            { letter: "A", text: "3,200 km" },
            { letter: "B", text: "1,000 km" },
            { letter: "C", text: "950 km" },
            { letter: "D", text: "6,400 km" }
          ],
          correct: "A"
        },
        {
          id: "twoSides",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose you knew only that OA ≅ OC and AB ≅ CD. What could you conclude about △AOB and △COD?",
          choices: [
            { letter: "A", text: "Not enough to prove congruence" },
            { letter: "B", text: "They are congruent by SSS" },
            { letter: "C", text: "They are congruent by SAS" },
            { letter: "D", text: "They are congruent by HL" }
          ],
          correct: "A"
        },
        {
          id: "notTrue",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Which statement is NOT necessarily true?",
          choices: [
            { letter: "A", text: "∠OAB ≅ ∠OCD" },
            { letter: "B", text: "∠AOB ≅ ∠COD" },
            { letter: "C", text: "AB ∥ CD" },
            { letter: "D", text: "OB ≅ OD" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr2-rocks-weather-shelter",
      family: "GEO",
      mode: "rocks",
      title: "Braces on the Weather Shelter",
      kind: "Triangles · G.TR.2",
      blurb: "Two braces from the middle of the top edge to the bottom corners.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Rectangle PQRS with a right-angle mark at each corner. M is the midpoint of the top side PQ, with one tick mark on PM and on MQ. Sides PS and QR have two tick marks. Segments MS and MR are drawn\"><polygon class=\"sh2\" points=\"70,30 250,30 250,150 70,150\"/><line class=\"ln\" x1=\"160\" y1=\"30\" x2=\"70\" y2=\"150\"/><line class=\"ln\" x1=\"160\" y1=\"30\" x2=\"250\" y2=\"150\"/><path class=\"thin\" d=\"M79 30 L79 39 L70 39\"/><path class=\"thin\" d=\"M241 30 L241 39 L250 39\"/><path class=\"thin\" d=\"M70 141 L79 141 L79 150\"/><path class=\"thin\" d=\"M250 141 L241 141 L241 150\"/><path class=\"thin\" d=\"M115 35 L115 25\"/><path class=\"thin\" d=\"M205 35 L205 25\"/><path class=\"thin\" d=\"M65 88 L75 88 M65 92 L75 92\"/><path class=\"thin\" d=\"M245 88 L255 88 M245 92 L255 92\"/><circle class=\"dt\" cx=\"70\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"250\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"250\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"70\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"30\" r=\"3\"/><text x=\"59\" y=\"29\" text-anchor=\"middle\">P</text><text x=\"261\" y=\"29\" text-anchor=\"middle\">Q</text><text x=\"261\" y=\"161\" text-anchor=\"middle\">R</text><text x=\"59\" y=\"161\" text-anchor=\"middle\">S</text><text x=\"160\" y=\"22\" text-anchor=\"middle\">M</text></svg></figure><p class=\"geo-given\">The front of a weather station shelter is the rectangle <strong>PQRS</strong>. <strong>M</strong> is the midpoint of the top edge PQ. Braces MS and MR run to the bottom corners. Prove that MS ≅ MR.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. PQRS is a rectangle; M is the midpoint of PQ</td><td>Given</td></tr><tr><td>2. PM ≅ QM</td><td>(a) ____</td></tr><tr><td>3. ∠P ≅ ∠Q</td><td>All right angles are congruent</td></tr><tr><td>4. PS ≅ QR</td><td>Opposite sides of a rectangle are congruent</td></tr><tr><td>5. △MPS ≅ △MQR</td><td>(b) ____</td></tr><tr><td>6. MS ≅ MR</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 2, PM ≅ QM (blank a)?",
          choices: [
            { letter: "A", text: "Reflexive property" },
            { letter: "B", text: "Definition of midpoint" },
            { letter: "C", text: "Segment Addition Postulate" },
            { letter: "D", text: "Definition of right angle" }
          ],
          correct: "B"
        },
        {
          id: "blankB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 5, △MPS ≅ △MQR (blank b)?",
          choices: [
            { letter: "A", text: "SSA" },
            { letter: "B", text: "ASA" },
            { letter: "C", text: "HL" },
            { letter: "D", text: "SAS" }
          ],
          correct: "D"
        },
        {
          id: "brace",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "MS = (5y − 10) in. and MR = (3y + 6) in. How long is brace MS?",
          choices: [
            { letter: "A", text: "8 in." },
            { letter: "B", text: "60 in." },
            { letter: "C", text: "30 in." },
            { letter: "D", text: "40 in." }
          ],
          correct: "C"
        },
        {
          id: "total",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "The shelter is 36 in. wide (PQ) and 24 in. tall (PS). How many inches of brace do MS and MR use together?",
          choices: [
            { letter: "A", text: "60 in." },
            { letter: "B", text: "30 in." },
            { letter: "C", text: "84 in." },
            { letter: "D", text: "about 86.5 in." }
          ],
          correct: "A"
        },
        {
          id: "sss",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose PQRS were not a rectangle, but you knew PM ≅ QM, PS ≅ QR and MS ≅ MR. Which criterion would prove △MPS ≅ △MQR?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "HL" },
            { letter: "C", text: "ASA" },
            { letter: "D", text: "SSS" }
          ],
          correct: "D"
        },
        {
          id: "hlError",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Lee says step 5 could use HL instead, because ∠P and ∠Q are right angles. What is wrong with his idea?",
          choices: [
            { letter: "A", text: "HL works only for isosceles triangles" },
            { letter: "B", text: "∠P and ∠Q are not right angles" },
            { letter: "C", text: "HL needs MS ≅ MR, the thing being proved" },
            { letter: "D", text: "HL needs two pairs of angles" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr2-rocks-probe-tangents",
      family: "GEO",
      mode: "rocks",
      title: "The Probe's Lines of Sight",
      kind: "Triangles · G.TR.2",
      blurb: "A space probe sees the two edges of a planet.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A shaded circle, the planet, with center O. From the point P outside it, segments PA and PB touch the circle at A and B. Radii OA and OB have one tick mark each and right-angle marks at A and B. Dashed segment OP\"><circle class=\"sh2\" cx=\"78\" cy=\"84\" r=\"54\"/><line class=\"ln\" x1=\"218.4\" y1=\"84\" x2=\"98.8\" y2=\"34.2\"/><line class=\"ln\" x1=\"218.4\" y1=\"84\" x2=\"98.8\" y2=\"133.8\"/><line class=\"ln\" x1=\"78\" y1=\"84\" x2=\"98.8\" y2=\"34.2\"/><line class=\"ln\" x1=\"78\" y1=\"84\" x2=\"98.8\" y2=\"133.8\"/><line class=\"ln dash\" x1=\"78\" y1=\"84\" x2=\"218.4\" y2=\"84\"/><path class=\"thin\" d=\"M95.3 42.5 L103.6 45.9 L107.1 37.6\"/><path class=\"thin\" d=\"M95.3 125.5 L103.6 122.1 L107.1 130.4\"/><path class=\"thin\" d=\"M93 61 L83.8 57.2\"/><path class=\"thin\" d=\"M83.8 110.8 L93 107\"/><circle class=\"dt\" cx=\"78\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"98.8\" cy=\"34.2\" r=\"3\"/><circle class=\"dt\" cx=\"98.8\" cy=\"133.8\" r=\"3\"/><circle class=\"dt\" cx=\"218.4\" cy=\"84\" r=\"3\"/><text x=\"96.8\" y=\"26.2\" text-anchor=\"middle\">A</text><text x=\"96.8\" y=\"151.8\" text-anchor=\"middle\">B</text><text x=\"65\" y=\"89\" text-anchor=\"middle\">O</text><text x=\"231.4\" y=\"89\" text-anchor=\"middle\">P</text><text class=\"sm\" x=\"56\" y=\"116\" text-anchor=\"middle\">planet</text></svg></figure><p class=\"geo-given\">A space probe <strong>P</strong> sees the edges of a planet at <strong>A</strong> and <strong>B</strong>. The lines of sight PA and PB are tangent to the planet's circular outline, which has center <strong>O</strong>.</p>",
      claims: [
        {
          id: "why90",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Why are ∠OAP and ∠OBP right angles?",
          choices: [
            { letter: "A", text: "A tangent is ⊥ to the radius at its endpoint" },
            { letter: "B", text: "All radii of a circle are congruent" },
            { letter: "C", text: "Vertical angles are congruent" },
            { letter: "D", text: "The two lines of sight are the same length" }
          ],
          correct: "A"
        },
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which criterion proves △OAP ≅ △OBP most directly?",
          choices: [
            { letter: "A", text: "SSA" },
            { letter: "B", text: "HL" },
            { letter: "C", text: "ASA" },
            { letter: "D", text: "AAA" }
          ],
          correct: "B"
        },
        {
          id: "pb",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "The planet's radius OA is 2,500 km, and OP = 6,500 km. How far is the probe from B (PB)?",
          choices: [
            { letter: "A", text: "4,000 km" },
            { letter: "B", text: "about 6,964 km" },
            { letter: "C", text: "2,500 km" },
            { letter: "D", text: "6,000 km" }
          ],
          correct: "D"
        },
        {
          id: "aob",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠APO ≈ 22.6°. To the nearest tenth of a degree, what is m∠AOB?",
          choices: [
            { letter: "A", text: "67.4°" },
            { letter: "B", text: "45.2°" },
            { letter: "C", text: "134.8°" },
            { letter: "D", text: "157.4°" }
          ],
          correct: "C"
        },
        {
          id: "ssaError",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Mo says, “Each triangle shows only two sides and a non-included angle, so they cannot be proved congruent.” Why is he wrong?",
          choices: [
            { letter: "A", text: "The angle is a right angle, so HL applies" },
            { letter: "B", text: "Two sides are always enough" },
            { letter: "C", text: "OP is not a side of either triangle" },
            { letter: "D", text: "The triangles share ∠AOB" }
          ],
          correct: "A"
        },
        {
          id: "sas",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Without using the right angles, which fact together with OA ≅ OB and OP ≅ OP would prove △OAP ≅ △OBP by SAS?",
          choices: [
            { letter: "A", text: "∠APO ≅ ∠BPO" },
            { letter: "B", text: "∠AOP ≅ ∠BOP" },
            { letter: "C", text: "PA ≅ PB" },
            { letter: "D", text: "∠OAP ≅ ∠OBP" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr2-rocks-star-chart",
      family: "GEO",
      mode: "rocks",
      title: "Triangles on the Star Chart",
      kind: "Triangles · G.TR.2",
      blurb: "Two star triangles on a planetarium grid, one a turned copy.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A coordinate grid from 0 to 12 across and 0 to 6 up, with triangle RST at R(1, 2), S(5, 1), T(3, 5) and triangle MKL at M(10, 1), K(11, 5), L(7, 3)\"><line class=\"gr\" x1=\"26\" y1=\"146\" x2=\"26\" y2=\"14\"/><line class=\"gr\" x1=\"48\" y1=\"146\" x2=\"48\" y2=\"14\"/><line class=\"gr\" x1=\"70\" y1=\"146\" x2=\"70\" y2=\"14\"/><line class=\"gr\" x1=\"92\" y1=\"146\" x2=\"92\" y2=\"14\"/><line class=\"gr\" x1=\"114\" y1=\"146\" x2=\"114\" y2=\"14\"/><line class=\"gr\" x1=\"136\" y1=\"146\" x2=\"136\" y2=\"14\"/><line class=\"gr\" x1=\"158\" y1=\"146\" x2=\"158\" y2=\"14\"/><line class=\"gr\" x1=\"180\" y1=\"146\" x2=\"180\" y2=\"14\"/><line class=\"gr\" x1=\"202\" y1=\"146\" x2=\"202\" y2=\"14\"/><line class=\"gr\" x1=\"224\" y1=\"146\" x2=\"224\" y2=\"14\"/><line class=\"gr\" x1=\"246\" y1=\"146\" x2=\"246\" y2=\"14\"/><line class=\"gr\" x1=\"268\" y1=\"146\" x2=\"268\" y2=\"14\"/><line class=\"gr\" x1=\"290\" y1=\"146\" x2=\"290\" y2=\"14\"/><line class=\"gr\" x1=\"26\" y1=\"146\" x2=\"290\" y2=\"146\"/><line class=\"gr\" x1=\"26\" y1=\"124\" x2=\"290\" y2=\"124\"/><line class=\"gr\" x1=\"26\" y1=\"102\" x2=\"290\" y2=\"102\"/><line class=\"gr\" x1=\"26\" y1=\"80\" x2=\"290\" y2=\"80\"/><line class=\"gr\" x1=\"26\" y1=\"58\" x2=\"290\" y2=\"58\"/><line class=\"gr\" x1=\"26\" y1=\"36\" x2=\"290\" y2=\"36\"/><line class=\"gr\" x1=\"26\" y1=\"14\" x2=\"290\" y2=\"14\"/><line class=\"ax\" x1=\"26\" y1=\"146\" x2=\"26\" y2=\"14\"/><line class=\"ax\" x1=\"26\" y1=\"146\" x2=\"290\" y2=\"146\"/><text class=\"sm\" x=\"70\" y=\"161\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"114\" y=\"161\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"158\" y=\"161\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"202\" y=\"161\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"246\" y=\"161\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"290\" y=\"161\" text-anchor=\"middle\">12</text><text class=\"sm\" x=\"15\" y=\"106\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"15\" y=\"62\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"15\" y=\"18\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"17\" y=\"161\" text-anchor=\"middle\">0</text><polygon class=\"sh2\" points=\"48,102 136,124 92,36\"/><polygon class=\"sh2\" points=\"246,124 268,36 180,80\"/><circle class=\"dt\" cx=\"48\" cy=\"102\" r=\"3\"/><circle class=\"dt\" cx=\"136\" cy=\"124\" r=\"3\"/><circle class=\"dt\" cx=\"92\" cy=\"36\" r=\"3\"/><circle class=\"dt\" cx=\"246\" cy=\"124\" r=\"3\"/><circle class=\"dt\" cx=\"268\" cy=\"36\" r=\"3\"/><circle class=\"dt\" cx=\"180\" cy=\"80\" r=\"3\"/><text x=\"36.6\" y=\"110.8\" text-anchor=\"middle\">R</text><text x=\"145.2\" y=\"136.7\" text-anchor=\"middle\">S</text><text x=\"92\" y=\"29\" text-anchor=\"middle\">T</text><text x=\"249.8\" y=\"140.4\" text-anchor=\"middle\">M</text><text x=\"275.7\" y=\"31.8\" text-anchor=\"middle\">K</text><text x=\"168\" y=\"85\" text-anchor=\"middle\">L</text></svg></figure><p class=\"geo-given\">A planetarium star chart shows two triangles of stars on a grid: <strong>R</strong>(1, 2), <strong>S</strong>(5, 1), <strong>T</strong>(3, 5) and <strong>M</strong>(10, 1), <strong>K</strong>(11, 5), <strong>L</strong>(7, 3).</p>",
      claims: [
        {
          id: "st",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "What is the length of ST, in grid units?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "20" },
            { letter: "C", text: "2√5" },
            { letter: "D", text: "2√3" }
          ],
          correct: "C"
        },
        {
          id: "sss",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Dana finds RS = MK, ST = KL and RT = ML. What can she conclude?",
          choices: [
            { letter: "A", text: "△RST ≅ △MKL by SSS" },
            { letter: "B", text: "△RST ≅ △KLM by SSS" },
            { letter: "C", text: "Only that the triangles are similar" },
            { letter: "D", text: "Nothing until she measures an angle" }
          ],
          correct: "A"
        },
        {
          id: "angS",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Which angle is congruent to ∠S?",
          choices: [
            { letter: "A", text: "∠L" },
            { letter: "B", text: "∠K" },
            { letter: "C", text: "∠M" },
            { letter: "D", text: "∠T" }
          ],
          correct: "B"
        },
        {
          id: "error",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Ravi finds KL = √((11 − 7) + (5 − 3)) = √6, so he decides the triangles are not congruent. What is his error?",
          choices: [
            { letter: "A", text: "He subtracted the coordinates" },
            { letter: "B", text: "He should have added the coordinates" },
            { letter: "C", text: "He chose the wrong pair of points" },
            { letter: "D", text: "He did not square the differences" }
          ],
          correct: "D"
        },
        {
          id: "perp",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "△MKL is △RST turned 90°. Which statement about their sides is true?",
          choices: [
            { letter: "A", text: "RS ∥ MK" },
            { letter: "B", text: "ST ∥ KL" },
            { letter: "C", text: "RS ⊥ MK" },
            { letter: "D", text: "RT ∥ ML" }
          ],
          correct: "C"
        },
        {
          id: "sas",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Dana knows only RS = MK = √17 and ST = KL = 2√5. Which one more fact would let her use SAS?",
          choices: [
            { letter: "A", text: "∠S ≅ ∠K" },
            { letter: "B", text: "∠R ≅ ∠M" },
            { letter: "C", text: "∠T ≅ ∠L" },
            { letter: "D", text: "RT = ML" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr2-rocks-telescope-struts",
      family: "GEO",
      mode: "rocks",
      title: "The Radio Telescope Frame",
      kind: "Triangles · G.TR.2",
      blurb: "Four struts meet at a hub, and two cables cross.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Four segments OA, OB, OC and OD fan out from O. OA and OB have one tick mark, OC and OD have two tick marks, and angles AOB and COD have one arc each. Cables AC and BD cross\"><line class=\"ln\" x1=\"160\" y1=\"146\" x2=\"73.5\" y2=\"114.5\"/><line class=\"ln\" x1=\"160\" y1=\"146\" x2=\"107.2\" y2=\"70.6\"/><line class=\"ln\" x1=\"160\" y1=\"146\" x2=\"235.7\" y2=\"37.9\"/><line class=\"ln\" x1=\"160\" y1=\"146\" x2=\"284\" y2=\"100.9\"/><line class=\"ln\" x1=\"73.5\" y1=\"114.5\" x2=\"235.7\" y2=\"37.9\"/><line class=\"ln\" x1=\"107.2\" y1=\"70.6\" x2=\"284\" y2=\"100.9\"/><path class=\"thin\" d=\"M137.4 137.8 A24 24 0 0 1 146.2 126.3\"/><path class=\"thin\" d=\"M173.8 126.3 A24 24 0 0 1 182.6 137.8\"/><path class=\"thin\" d=\"M108.1 121.8 L104.7 131.2\"/><path class=\"thin\" d=\"M131.4 96.4 L123.2 102.1\"/><path class=\"thin\" d=\"M209.9 83.5 L201.7 77.7 M212.2 80.2 L204 74.5\"/><path class=\"thin\" d=\"M236.7 123.4 L233.3 114 M240.5 122 L237.1 112.6\"/><circle class=\"dt\" cx=\"160\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"73.5\" cy=\"114.5\" r=\"3\"/><circle class=\"dt\" cx=\"107.2\" cy=\"70.6\" r=\"3\"/><circle class=\"dt\" cx=\"235.7\" cy=\"37.9\" r=\"3\"/><circle class=\"dt\" cx=\"284\" cy=\"100.9\" r=\"3\"/><text x=\"62.3\" y=\"115.4\" text-anchor=\"middle\">A</text><text x=\"100.3\" y=\"65.8\" text-anchor=\"middle\">B</text><text x=\"242.6\" y=\"33\" text-anchor=\"middle\">C</text><text x=\"295.3\" y=\"101.7\" text-anchor=\"middle\">D</text><text x=\"160\" y=\"162\" text-anchor=\"middle\">O</text></svg></figure><p class=\"geo-given\">Struts <strong>OA</strong>, <strong>OB</strong>, <strong>OC</strong> and <strong>OD</strong> meet at the hub <strong>O</strong> of a radio telescope frame, with OA ≅ OB, OC ≅ OD and ∠AOB ≅ ∠COD. Prove that the cables AC and BD are congruent.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. OA ≅ OB; OC ≅ OD; ∠AOB ≅ ∠COD</td><td>Given</td></tr><tr><td>2. m∠AOB + m∠BOC = m∠COD + m∠BOC</td><td>(a) ____</td></tr><tr><td>3. m∠AOC = m∠BOD</td><td>Angle Addition Postulate</td></tr><tr><td>4. △AOC ≅ △BOD</td><td>(b) ____</td></tr><tr><td>5. AC ≅ BD</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 2 (blank a)?",
          choices: [
            { letter: "A", text: "Angle Addition Postulate" },
            { letter: "B", text: "Reflexive property" },
            { letter: "C", text: "Vertical angles are congruent" },
            { letter: "D", text: "Addition property of equality" }
          ],
          correct: "D"
        },
        {
          id: "blankB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 4, △AOC ≅ △BOD (blank b)?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "SSA" },
            { letter: "C", text: "ASA" },
            { letter: "D", text: "SSS" }
          ],
          correct: "A"
        },
        {
          id: "bod",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠AOB = (2k + 9)°, m∠COD = (4k − 17)° and m∠BOC = 70°. What is m∠BOD?",
          choices: [
            { letter: "A", text: "35°" },
            { letter: "B", text: "83°" },
            { letter: "C", text: "105°" },
            { letter: "D", text: "140°" }
          ],
          correct: "C"
        },
        {
          id: "sss",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose you did not know ∠AOB ≅ ∠COD, but you knew AC ≅ BD. Which criterion would prove △AOC ≅ △BOD?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "HL" },
            { letter: "C", text: "SSS" },
            { letter: "D", text: "ASA" }
          ],
          correct: "C"
        },
        {
          id: "assume",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "A second frame has the same layout, with OA = OB and OC = OD, but AC = 5.1 m and BD = 4.8 m. To prove indirectly that ∠AOB ≇ ∠COD, what should you assume first?",
          choices: [
            { letter: "A", text: "AC ≅ BD" },
            { letter: "B", text: "∠AOB ≅ ∠COD" },
            { letter: "C", text: "∠AOB ≇ ∠COD" },
            { letter: "D", text: "OA ≇ OB" }
          ],
          correct: "B"
        },
        {
          id: "contra",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "A second frame has OA = OB and OC = OD, but AC = 5.1 m and BD = 4.8 m. Mia assumes ∠AOB ≅ ∠COD. Which result contradicts the facts?",
          choices: [
            { letter: "A", text: "The Angle Addition Postulate gives ∠AOC ≅ ∠BOD" },
            { letter: "B", text: "OA = OB gives OA = OC" },
            { letter: "C", text: "SSA gives △AOB ≅ △COD" },
            { letter: "D", text: "SAS and CPCTC give AC = BD" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr2-rocks-crystal-face",
      family: "GEO",
      mode: "rocks",
      title: "The Pentagon Crystal Face",
      kind: "Triangles · G.TR.2",
      blurb: "Two diagonals from one corner of a regular pentagon.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Shaded regular pentagon ABCDE with A at the top; each side has one tick mark and angles B and E have one arc. Diagonals AC and AD are drawn from A\"><polygon class=\"sh2\" points=\"160,22 93.4,70.4 118.9,148.6 201.1,148.6 226.6,70.4\"/><line class=\"ln\" x1=\"160\" y1=\"22\" x2=\"118.9\" y2=\"148.6\"/><line class=\"ln\" x1=\"160\" y1=\"22\" x2=\"201.1\" y2=\"148.6\"/><path class=\"thin\" d=\"M123.8 42.1 L129.7 50.2\"/><path class=\"thin\" d=\"M101.4 111 L110.9 108\"/><path class=\"thin\" d=\"M160 153.6 L160 143.6\"/><path class=\"thin\" d=\"M218.6 111 L209.1 108\"/><path class=\"thin\" d=\"M196.2 42.1 L190.3 50.2\"/><path class=\"thin\" d=\"M105.6 61.6 A15 15 0 0 1 98.1 84.6\"/><path class=\"thin\" d=\"M221.9 84.6 A15 15 0 0 1 214.4 61.6\"/><circle class=\"dt\" cx=\"160\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"93.4\" cy=\"70.4\" r=\"3\"/><circle class=\"dt\" cx=\"118.9\" cy=\"148.6\" r=\"3\"/><circle class=\"dt\" cx=\"201.1\" cy=\"148.6\" r=\"3\"/><circle class=\"dt\" cx=\"226.6\" cy=\"70.4\" r=\"3\"/><text x=\"160\" y=\"15\" text-anchor=\"middle\">A</text><text x=\"81.1\" y=\"71.4\" text-anchor=\"middle\">B</text><text x=\"111.2\" y=\"164.1\" text-anchor=\"middle\">C</text><text x=\"208.8\" y=\"164.1\" text-anchor=\"middle\">D</text><text x=\"238.9\" y=\"71.4\" text-anchor=\"middle\">E</text></svg></figure><p class=\"geo-given\">One face of a model crystal is the regular pentagon <strong>ABCDE</strong>: all five sides are congruent and each angle measures 108°. Diagonals <strong>AC</strong> and <strong>AD</strong> are drawn from <strong>A</strong>.</p>",
      claims: [
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which criterion shows △ABC ≅ △AED?",
          choices: [
            { letter: "A", text: "SSA" },
            { letter: "B", text: "ASA" },
            { letter: "C", text: "SAS" },
            { letter: "D", text: "HL" }
          ],
          correct: "C"
        },
        {
          id: "bac",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Each angle of the pentagon measures 108°. What is m∠BAC?",
          choices: [
            { letter: "A", text: "36°" },
            { letter: "B", text: "72°" },
            { letter: "C", text: "54°" },
            { letter: "D", text: "108°" }
          ],
          correct: "A"
        },
        {
          id: "acd",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Each angle of the pentagon measures 108°. Since AC ≅ AD, what is m∠ACD?",
          choices: [
            { letter: "A", text: "36°" },
            { letter: "B", text: "108°" },
            { letter: "C", text: "54°" },
            { letter: "D", text: "72°" }
          ],
          correct: "D"
        },
        {
          id: "diag",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AC = (5n − 4) mm and AD = (3n + 10) mm. How long is diagonal AC?",
          choices: [
            { letter: "A", text: "7 mm" },
            { letter: "B", text: "31 mm" },
            { letter: "C", text: "11 mm" },
            { letter: "D", text: "62 mm" }
          ],
          correct: "B"
        },
        {
          id: "notCpctc",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "After proving △ABC ≅ △AED, which statement is NOT a result of CPCTC?",
          choices: [
            { letter: "A", text: "AC ≅ AD" },
            { letter: "B", text: "AC ≅ CD" },
            { letter: "C", text: "∠BCA ≅ ∠EDA" },
            { letter: "D", text: "∠BAC ≅ ∠EAD" }
          ],
          correct: "B"
        },
        {
          id: "indirect",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Another face ABCDE has AB = AE and BC = ED, but m∠B = 110° and m∠E = 104°. Lin assumes AC = AD. Which reasoning gives her contradiction?",
          choices: [
            { letter: "A", text: "SAS gives △ABC ≅ △AED, so AC = AD" },
            { letter: "B", text: "SSA gives △ABC ≅ △AED, so ∠B ≅ ∠E" },
            { letter: "C", text: "AAA gives △ABC ≅ △AED, so AB = AE" },
            { letter: "D", text: "SSS gives △ABC ≅ △AED, so ∠B ≅ ∠E" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr2-sky-rest-stop",
      family: "GEO",
      mode: "sky",
      title: "The Rest Stop Between Highways",
      kind: "Triangles · G.TR.2",
      blurb: "A road splits the angle between two highways, and short roads meet them squarely.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Two highways leave point A. Segment AP runs between them, with equal arcs marking angles BAP and PAC. From P, segments PB and PC meet the highways at B and C with right-angle marks\"><line class=\"ln\" x1=\"22\" y1=\"86\" x2=\"263.7\" y2=\"16.7\"/><line class=\"ln\" x1=\"22\" y1=\"86\" x2=\"263.7\" y2=\"155.3\"/><line class=\"ln\" x1=\"22\" y1=\"86\" x2=\"242\" y2=\"86\"/><line class=\"ln\" x1=\"242\" y1=\"86\" x2=\"225.3\" y2=\"27.7\"/><line class=\"ln\" x1=\"242\" y1=\"86\" x2=\"225.3\" y2=\"144.3\"/><path class=\"thin\" d=\"M216.6 30.2 L219.1 38.8 L227.8 36.4\"/><path class=\"thin\" d=\"M216.6 141.8 L219.1 133.2 L227.8 135.6\"/><path class=\"thin\" d=\"M66.2 73.3 A46 46 0 0 1 68 86\"/><path class=\"thin\" d=\"M74 86 A52 52 0 0 1 72 100.3\"/><circle class=\"dt\" cx=\"22\" cy=\"86\" r=\"3\"/><circle class=\"dt\" cx=\"242\" cy=\"86\" r=\"3\"/><circle class=\"dt\" cx=\"225.3\" cy=\"27.7\" r=\"3\"/><circle class=\"dt\" cx=\"225.3\" cy=\"144.3\" r=\"3\"/><text x=\"11\" y=\"91\" text-anchor=\"middle\">A</text><text x=\"254\" y=\"91\" text-anchor=\"middle\">P</text><text x=\"219.3\" y=\"19.7\" text-anchor=\"middle\">B</text><text x=\"219.3\" y=\"162.3\" text-anchor=\"middle\">C</text><text class=\"sm\" x=\"130\" y=\"46\" text-anchor=\"middle\">highway</text><text class=\"sm\" x=\"130\" y=\"134\" text-anchor=\"middle\">highway</text></svg></figure><p class=\"geo-given\">Two highways leave the junction <strong>A</strong>. Road AP splits the angle between them into two equal angles. From the rest stop <strong>P</strong>, access roads PB and PC meet the highways at right angles.</p>",
      claims: [
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which shortcut proves △ABP ≅ △ACP?",
          choices: [
            { letter: "A", text: "ASA" },
            { letter: "B", text: "AAS" },
            { letter: "C", text: "SSA" },
            { letter: "D", text: "HL" }
          ],
          correct: "B"
        },
        {
          id: "right",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Why is ∠ABP ≅ ∠ACP?",
          choices: [
            { letter: "A", text: "All right angles are congruent" },
            { letter: "B", text: "Vertical angles are congruent" },
            { letter: "C", text: "Reflexive property" },
            { letter: "D", text: "Definition of angle bisector" }
          ],
          correct: "A"
        },
        {
          id: "ac",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AP = 2.5 km and PC = 0.69 km. To the nearest tenth of a kilometer, how far is it from A to C along the highway?",
          choices: [
            { letter: "A", text: "3.2 km" },
            { letter: "B", text: "1.8 km" },
            { letter: "C", text: "2.6 km" },
            { letter: "D", text: "2.4 km" }
          ],
          correct: "D"
        },
        {
          id: "bpc",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠BAP = 16°. What is m∠BPC?",
          choices: [
            { letter: "A", text: "74°" },
            { letter: "B", text: "32°" },
            { letter: "C", text: "148°" },
            { letter: "D", text: "164°" }
          ],
          correct: "C"
        },
        {
          id: "hl",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose road AP did not split the angle evenly, but PB = PC. Which criterion would prove △ABP ≅ △ACP?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "AAS" },
            { letter: "C", text: "SSA, so none" },
            { letter: "D", text: "HL" }
          ],
          correct: "D"
        },
        {
          id: "notTrue",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Which statement is NOT true?",
          choices: [
            { letter: "A", text: "PB ≅ PC" },
            { letter: "B", text: "AB ≅ AC" },
            { letter: "C", text: "AB ≅ BP" },
            { letter: "D", text: "∠APB ≅ ∠APC" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr2-sky-rail-bridge",
      family: "GEO",
      mode: "sky",
      title: "Panels of the Rail Bridge",
      kind: "Triangles · G.TR.2",
      blurb: "Two triangular panels sit along a straight bridge deck.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Triangles ABE and CDF stand on a straight line with A, B, C, D in order. AB and CD have one tick mark. AE and CF have one arrowhead each; BE and DF have two arrowheads each, showing parallel sides\"><line class=\"thin\" x1=\"8\" y1=\"138\" x2=\"312\" y2=\"138\"/><polygon class=\"ln\" points=\"22,138 130,138 86.8,45.4\"/><polygon class=\"ln\" points=\"182,138 290,138 246.8,45.4\"/><path class=\"thin\" d=\"M76 143 L76 133\"/><path class=\"thin\" d=\"M236 143 L236 133\"/><path class=\"thin\" d=\"M56 96.5 L56.1 89.3 L49.4 91.9\"/><path class=\"thin\" d=\"M216 96.5 L216.1 89.3 L209.4 91.9\"/><path class=\"thin\" d=\"M114.6 95.5 L108.4 91.7 L107.3 98.8 M112 90 L105.9 86.3 L104.8 93.4\"/><path class=\"thin\" d=\"M274.6 95.5 L268.4 91.7 L267.3 98.8 M272 90 L265.9 86.3 L264.8 93.4\"/><circle class=\"dt\" cx=\"22\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"130\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"182\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"290\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"86.8\" cy=\"45.4\" r=\"3\"/><circle class=\"dt\" cx=\"246.8\" cy=\"45.4\" r=\"3\"/><text x=\"22\" y=\"156\" text-anchor=\"middle\">A</text><text x=\"130\" y=\"156\" text-anchor=\"middle\">B</text><text x=\"182\" y=\"156\" text-anchor=\"middle\">C</text><text x=\"290\" y=\"156\" text-anchor=\"middle\">D</text><text x=\"86.8\" y=\"38.4\" text-anchor=\"middle\">E</text><text x=\"246.8\" y=\"38.4\" text-anchor=\"middle\">F</text><text class=\"sm\" x=\"160\" y=\"156\" text-anchor=\"middle\">deck</text></svg></figure><p class=\"geo-given\">A railroad bridge has triangular panels <strong>△ABE</strong> and <strong>△CDF</strong> along its straight deck. AB ≅ CD, AE ∥ CF and BE ∥ DF.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Why is ∠EAB ≅ ∠FCD?",
          choices: [
            { letter: "A", text: "Alternate interior angles are congruent" },
            { letter: "B", text: "Vertical angles are congruent" },
            { letter: "C", text: "Corresponding angles are congruent" },
            { letter: "D", text: "Reflexive property" }
          ],
          correct: "C"
        },
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "The parallel sides give ∠EAB ≅ ∠FCD and ∠EBA ≅ ∠FDC. Which criterion then proves △ABE ≅ △CDF?",
          choices: [
            { letter: "A", text: "ASA" },
            { letter: "B", text: "AAS" },
            { letter: "C", text: "SAS" },
            { letter: "D", text: "AAA" }
          ],
          correct: "A"
        },
        {
          id: "angF",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠EAB = 55° and m∠EBA = 65°. What is m∠CFD?",
          choices: [
            { letter: "A", text: "55°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "65°" },
            { letter: "D", text: "120°" }
          ],
          correct: "B"
        },
        {
          id: "x",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AB = 12 m and CD = (2x − 4) m. What is x?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "16" },
            { letter: "C", text: "10" },
            { letter: "D", text: "8" }
          ],
          correct: "D"
        },
        {
          id: "aaa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose the builders knew only that AE ∥ CF and BE ∥ DF. What could they conclude about the two panels?",
          choices: [
            { letter: "A", text: "They are congruent by ASA" },
            { letter: "B", text: "They are congruent by AAA" },
            { letter: "C", text: "They are neither similar nor congruent" },
            { letter: "D", text: "They are similar, but maybe not congruent" }
          ],
          correct: "D"
        },
        {
          id: "cpctc",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Since △ABE ≅ △CDF, which statement must be true?",
          choices: [
            { letter: "A", text: "AE ≅ BE" },
            { letter: "B", text: "AE ≅ CF" },
            { letter: "C", text: "BE ≅ CF" },
            { letter: "D", text: "AB ≅ BC" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr2-sky-drone-range",
      family: "GEO",
      mode: "sky",
      title: "The Drone and the Tower",
      kind: "Triangles · G.TR.2",
      blurb: "A drone path crosses a tower's range twice.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A straight highway through A and B, 12 km apart. A drone path leaves A at a 30 degree angle to the highway. Points C and D on the path are each joined to B; BC and BD have one tick mark. M is on the path between C and D, with dashed BM meeting the path at a right angle\"><line class=\"thin\" x1=\"8\" y1=\"146\" x2=\"312\" y2=\"146\"/><line class=\"ln\" x1=\"24\" y1=\"146\" x2=\"255.2\" y2=\"12.5\"/><line class=\"ln\" x1=\"216\" y1=\"146\" x2=\"94.7\" y2=\"105.2\"/><line class=\"ln\" x1=\"216\" y1=\"146\" x2=\"241.3\" y2=\"20.5\"/><line class=\"ln dash\" x1=\"216\" y1=\"146\" x2=\"168\" y2=\"62.9\"/><path class=\"thin\" d=\"M172.5 70.7 L180.3 66.2 L175.8 58.4\"/><path class=\"thin\" d=\"M156.9 120.9 L153.7 130.3\"/><path class=\"thin\" d=\"M233.6 84.3 L223.8 82.3\"/><path class=\"thin\" d=\"M54 146 A30 30 0 0 0 50 131\"/><circle class=\"dt\" cx=\"24\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"216\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"94.7\" cy=\"105.2\" r=\"3\"/><circle class=\"dt\" cx=\"241.3\" cy=\"20.5\" r=\"3\"/><circle class=\"dt\" cx=\"168\" cy=\"62.9\" r=\"3\"/><text x=\"14\" y=\"160\" text-anchor=\"middle\">A</text><text x=\"216\" y=\"164\" text-anchor=\"middle\">B</text><text x=\"85.7\" y=\"101.2\" text-anchor=\"middle\">C</text><text x=\"232.3\" y=\"15.5\" text-anchor=\"middle\">D</text><text x=\"159\" y=\"57.9\" text-anchor=\"middle\">M</text><text class=\"sm\" x=\"74\" y=\"138\" text-anchor=\"middle\">30°</text><text class=\"sm\" x=\"138\" y=\"163\" text-anchor=\"middle\">12 km</text><text class=\"sm\" x=\"296\" y=\"163\" text-anchor=\"middle\">highway</text></svg></figure><p class=\"geo-given\">A drone flies from <strong>A</strong> on a straight path that makes a 30° angle with highway AB. Tower <strong>B</strong> is 12 km from A. The drone is exactly 8 km from the tower at two points, <strong>C</strong> and <strong>D</strong>. <strong>M</strong> is the point of the path closest to the tower, so BM ⊥ CD.</p>",
      claims: [
        {
          id: "ssa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "△ABC and △ABD share AB and ∠A, and BC = BD. What does this show?",
          choices: [
            { letter: "A", text: "They are congruent by SAS" },
            { letter: "B", text: "SSA does not prove congruence" },
            { letter: "C", text: "They are congruent by ASA" },
            { letter: "D", text: "They are congruent by SSS" }
          ],
          correct: "B"
        },
        {
          id: "acb",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠ADB ≈ 49°. To the nearest degree, what is m∠ACB?",
          choices: [
            { letter: "A", text: "131°" },
            { letter: "B", text: "49°" },
            { letter: "C", text: "101°" },
            { letter: "D", text: "82°" }
          ],
          correct: "A"
        },
        {
          id: "extra",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Another flight forms △PQR with PQ = 12 km, m∠P = 30° and QR = 8 km. Which extra fact would prove △PQR ≅ △ABC?",
          choices: [
            { letter: "A", text: "QR = BC" },
            { letter: "B", text: "PQ = AB" },
            { letter: "C", text: "m∠Q + m∠R = 150°" },
            { letter: "D", text: "PR = AC" }
          ],
          correct: "D"
        },
        {
          id: "hl",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which criterion proves △BMC ≅ △BMD?",
          choices: [
            { letter: "A", text: "SSA" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "HL" },
            { letter: "D", text: "ASA" }
          ],
          correct: "C"
        },
        {
          id: "ad",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AC ≈ 5.1 km and AM ≈ 10.4 km. To the nearest tenth of a kilometer, how far is A from D?",
          choices: [
            { letter: "A", text: "5.3 km" },
            { letter: "B", text: "15.5 km" },
            { letter: "C", text: "15.7 km" },
            { letter: "D", text: "20.8 km" }
          ],
          correct: "C"
        },
        {
          id: "error",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Sam writes: AB ≅ AB, ∠A ≅ ∠A and BC ≅ BD, so △ABC ≅ △ABD by SAS. What is his mistake?",
          choices: [
            { letter: "A", text: "∠A is not between AB and BC" },
            { letter: "B", text: "AB ≅ AB needs a reason" },
            { letter: "C", text: "BC and BD are not congruent" },
            { letter: "D", text: "SAS needs two pairs of angles" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr2-sky-footbridge",
      family: "GEO",
      mode: "sky",
      title: "Cables on the Footbridge",
      kind: "Triangles · G.TR.2",
      blurb: "Two towers, a deck and two cables that cross.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"Segment AB is the deck. Segments AD and BC rise from A and B with right-angle marks. Cables AC and BD each have one tick mark and cross at E\"><line class=\"thin\" x1=\"10\" y1=\"142\" x2=\"310\" y2=\"142\"/><line class=\"ln\" x1=\"40\" y1=\"142\" x2=\"280\" y2=\"142\"/><line class=\"ln\" x1=\"40\" y1=\"142\" x2=\"40\" y2=\"42\"/><line class=\"ln\" x1=\"280\" y1=\"142\" x2=\"280\" y2=\"42\"/><line class=\"ln\" x1=\"40\" y1=\"142\" x2=\"280\" y2=\"42\"/><line class=\"ln\" x1=\"280\" y1=\"142\" x2=\"40\" y2=\"42\"/><path class=\"thin\" d=\"M49 142 L49 133 L40 133\"/><path class=\"thin\" d=\"M271 142 L271 133 L280 133\"/><path class=\"thin\" d=\"M113.9 116.6 L110.1 107.4\"/><path class=\"thin\" d=\"M209.9 107.4 L206.1 116.6\"/><circle class=\"dt\" cx=\"40\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"280\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"280\" cy=\"42\" r=\"3\"/><circle class=\"dt\" cx=\"40\" cy=\"42\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"92\" r=\"3\"/><text x=\"29\" y=\"153\" text-anchor=\"middle\">A</text><text x=\"291\" y=\"153\" text-anchor=\"middle\">B</text><text x=\"291\" y=\"43\" text-anchor=\"middle\">C</text><text x=\"29\" y=\"43\" text-anchor=\"middle\">D</text><text x=\"160\" y=\"83\" text-anchor=\"middle\">E</text><text class=\"sm\" x=\"160\" y=\"160\" text-anchor=\"middle\">deck</text></svg></figure><p class=\"geo-given\">A footbridge has deck <strong>AB</strong> and towers <strong>AD</strong> and <strong>BC</strong>, both perpendicular to the deck. Cables AC and BD are the same length and cross at <strong>E</strong>. Prove that the towers are the same height.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. AD ⊥ AB; BC ⊥ AB; AC ≅ BD</td><td>Given</td></tr><tr><td>2. ∠DAB and ∠CBA are right angles</td><td>Definition of perpendicular lines</td></tr><tr><td>3. AB ≅ BA</td><td>Reflexive property</td></tr><tr><td>4. △ABC ≅ △BAD</td><td>(a) ____</td></tr><tr><td>5. BC ≅ AD</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 4, △ABC ≅ △BAD (blank a)?",
          choices: [
            { letter: "A", text: "HL" },
            { letter: "B", text: "SSA" },
            { letter: "C", text: "SAS" },
            { letter: "D", text: "AAS" }
          ],
          correct: "A"
        },
        {
          id: "tower",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "The deck AB is 24 m long and each cable is 26 m long. How tall is each tower?",
          choices: [
            { letter: "A", text: "2 m" },
            { letter: "B", text: "10 m" },
            { letter: "C", text: "about 35.4 m" },
            { letter: "D", text: "50 m" }
          ],
          correct: "B"
        },
        {
          id: "angle",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Which angle is congruent to ∠BAC?",
          choices: [
            { letter: "A", text: "∠BAD" },
            { letter: "B", text: "∠ACB" },
            { letter: "C", text: "∠ADB" },
            { letter: "D", text: "∠ABD" }
          ],
          correct: "D"
        },
        {
          id: "contra",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Another footbridge has the same layout, but tower AD is 10 m tall and tower BC is 9 m tall. Kai assumes AC = BD. Which fact does his proof then contradict?",
          choices: [
            { letter: "A", text: "AB ≅ BA by the reflexive property" },
            { letter: "B", text: "∠DAB and ∠CBA are right angles" },
            { letter: "C", text: "AD = 10 m and BC = 9 m" },
            { letter: "D", text: "Cables AC and BD cross at E" }
          ],
          correct: "C"
        },
        {
          id: "sas",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose the towers were known to be the same height, but the cables were not measured. Which criterion would prove △ABC ≅ △BAD?",
          choices: [
            { letter: "A", text: "HL" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "SSS" },
            { letter: "D", text: "ASA" }
          ],
          correct: "B"
        },
        {
          id: "ae",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Because ∠EAB ≅ ∠EBA, AE = BE. If AE = (2w + 3) m and BE = (5w − 12) m, how long is AE?",
          choices: [
            { letter: "A", text: "5 m" },
            { letter: "B", text: "9 m" },
            { letter: "C", text: "26 m" },
            { letter: "D", text: "13 m" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr2-sky-race-courses",
      family: "GEO",
      mode: "sky",
      title: "Two Sailing Race Courses",
      kind: "Triangles · G.TR.2",
      blurb: "Buoys for two triangular race courses on a harbor map.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A coordinate grid from −7 to 7 across and −2 to 5 up, with triangle PQR at P(−6, 2), Q(−2, 4), R(−3, −1) and triangle YZX at Y(6, 2), Z(2, 4), X(3, −1)\"><line class=\"gr\" x1=\"27\" y1=\"151\" x2=\"27\" y2=\"18\"/><line class=\"gr\" x1=\"46\" y1=\"151\" x2=\"46\" y2=\"18\"/><line class=\"gr\" x1=\"65\" y1=\"151\" x2=\"65\" y2=\"18\"/><line class=\"gr\" x1=\"84\" y1=\"151\" x2=\"84\" y2=\"18\"/><line class=\"gr\" x1=\"103\" y1=\"151\" x2=\"103\" y2=\"18\"/><line class=\"gr\" x1=\"122\" y1=\"151\" x2=\"122\" y2=\"18\"/><line class=\"gr\" x1=\"141\" y1=\"151\" x2=\"141\" y2=\"18\"/><line class=\"gr\" x1=\"160\" y1=\"151\" x2=\"160\" y2=\"18\"/><line class=\"gr\" x1=\"179\" y1=\"151\" x2=\"179\" y2=\"18\"/><line class=\"gr\" x1=\"198\" y1=\"151\" x2=\"198\" y2=\"18\"/><line class=\"gr\" x1=\"217\" y1=\"151\" x2=\"217\" y2=\"18\"/><line class=\"gr\" x1=\"236\" y1=\"151\" x2=\"236\" y2=\"18\"/><line class=\"gr\" x1=\"255\" y1=\"151\" x2=\"255\" y2=\"18\"/><line class=\"gr\" x1=\"274\" y1=\"151\" x2=\"274\" y2=\"18\"/><line class=\"gr\" x1=\"293\" y1=\"151\" x2=\"293\" y2=\"18\"/><line class=\"gr\" x1=\"27\" y1=\"151\" x2=\"293\" y2=\"151\"/><line class=\"gr\" x1=\"27\" y1=\"132\" x2=\"293\" y2=\"132\"/><line class=\"gr\" x1=\"27\" y1=\"113\" x2=\"293\" y2=\"113\"/><line class=\"gr\" x1=\"27\" y1=\"94\" x2=\"293\" y2=\"94\"/><line class=\"gr\" x1=\"27\" y1=\"75\" x2=\"293\" y2=\"75\"/><line class=\"gr\" x1=\"27\" y1=\"56\" x2=\"293\" y2=\"56\"/><line class=\"gr\" x1=\"27\" y1=\"37\" x2=\"293\" y2=\"37\"/><line class=\"gr\" x1=\"27\" y1=\"18\" x2=\"293\" y2=\"18\"/><line class=\"ax\" x1=\"160\" y1=\"151\" x2=\"160\" y2=\"18\"/><line class=\"ax\" x1=\"27\" y1=\"113\" x2=\"293\" y2=\"113\"/><text class=\"sm\" x=\"46\" y=\"127\" text-anchor=\"middle\">-6</text><text class=\"sm\" x=\"84\" y=\"127\" text-anchor=\"middle\">-4</text><text class=\"sm\" x=\"122\" y=\"127\" text-anchor=\"middle\">-2</text><text class=\"sm\" x=\"198\" y=\"127\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"236\" y=\"127\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"274\" y=\"127\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"151\" y=\"79\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"151\" y=\"41\" text-anchor=\"middle\">4</text><polygon class=\"sh2\" points=\"46,75 122,37 103,132\"/><polygon class=\"sh2\" points=\"274,75 198,37 217,132\"/><circle class=\"dt\" cx=\"46\" cy=\"75\" r=\"3\"/><circle class=\"dt\" cx=\"122\" cy=\"37\" r=\"3\"/><circle class=\"dt\" cx=\"103\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"274\" cy=\"75\" r=\"3\"/><circle class=\"dt\" cx=\"198\" cy=\"37\" r=\"3\"/><circle class=\"dt\" cx=\"217\" cy=\"132\" r=\"3\"/><text x=\"34.1\" y=\"78.3\" text-anchor=\"middle\">P</text><text x=\"129\" y=\"32.2\" text-anchor=\"middle\">Q</text><text x=\"105.9\" y=\"148.6\" text-anchor=\"middle\">R</text><text x=\"285.9\" y=\"78.3\" text-anchor=\"middle\">Y</text><text x=\"191\" y=\"32.2\" text-anchor=\"middle\">Z</text><text x=\"214.1\" y=\"148.6\" text-anchor=\"middle\">X</text></svg></figure><p class=\"geo-given\">A harbor map shows the buoys of two triangular race courses. Each grid unit is 1 km: <strong>P</strong>(−6, 2), <strong>Q</strong>(−2, 4), <strong>R</strong>(−3, −1) and <strong>Y</strong>(6, 2), <strong>Z</strong>(2, 4), <strong>X</strong>(3, −1).</p>",
      claims: [
        {
          id: "expr",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Which expression gives the length of PQ?",
          choices: [
            { letter: "A", text: "√((−2 − 4)² + (−6 − 2)²)" },
            { letter: "B", text: "(−2 − (−6))² + (4 − 2)²" },
            { letter: "C", text: "√((−2 − (−6))² + (4 − 2)²)" },
            { letter: "D", text: "√((−2 − 6)² + (4 − 2)²)" }
          ],
          correct: "C"
        },
        {
          id: "notEnough",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which set of facts is NOT enough to prove △PQR ≅ △YZX?",
          choices: [
            { letter: "A", text: "PQ = YZ, QR = ZX and ∠P ≅ ∠Y" },
            { letter: "B", text: "PQ = YZ, QR = ZX and PR = YX" },
            { letter: "C", text: "PQ = YZ, ∠Q ≅ ∠Z and QR = ZX" },
            { letter: "D", text: "∠P ≅ ∠Y, PQ = YZ and ∠Q ≅ ∠Z" }
          ],
          correct: "A"
        },
        {
          id: "match",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "In the congruence △PQR ≅ △YZX, which buoy matches R?",
          choices: [
            { letter: "A", text: "Y(6, 2)" },
            { letter: "B", text: "Z(2, 4)" },
            { letter: "C", text: "(3, 1)" },
            { letter: "D", text: "X(3, −1)" }
          ],
          correct: "D"
        },
        {
          id: "zx",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "To the nearest tenth of a kilometer, how long is leg ZX of the second course?",
          choices: [
            { letter: "A", text: "6 km" },
            { letter: "B", text: "5.1 km" },
            { letter: "C", text: "26 km" },
            { letter: "D", text: "4.9 km" }
          ],
          correct: "B"
        },
        {
          id: "omar",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Omar writes △PQR ≅ △ZYX. Which pair of lengths shows that his statement is wrong?",
          choices: [
            { letter: "A", text: "PQ = 2√5, but ZY = √26" },
            { letter: "B", text: "PR = 3√2, but ZX = 2√5" },
            { letter: "C", text: "QR = √26, but YX = 3√2" },
            { letter: "D", text: "PQ = 2√5, but ZY = 3√2" }
          ],
          correct: "C"
        },
        {
          id: "need",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Sam shows only PQ = YZ and QR = ZX. What else does he need to prove △PQR ≅ △YZX?",
          choices: [
            { letter: "A", text: "Nothing; two pairs of sides are enough" },
            { letter: "B", text: "PR = YX, or ∠Q ≅ ∠Z" },
            { letter: "C", text: "∠P ≅ ∠Y" },
            { letter: "D", text: "Equal areas for the two courses" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr2-sky-station-truss",
      family: "GEO",
      mode: "sky",
      title: "The Station Canopy Truss",
      kind: "Triangles · G.TR.2",
      blurb: "A trapezoid truss with two diagonal braces.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Trapezoid ABCD with the long side BC at the bottom and AD at the top. AB and DC have one tick mark, and angles ABC and DCB have one arc each. Diagonals AC and BD are drawn\"><polygon class=\"ln\" points=\"25,140 295,140 205,65 115,65\"/><line class=\"ln\" x1=\"115\" y1=\"65\" x2=\"295\" y2=\"140\"/><line class=\"ln\" x1=\"25\" y1=\"140\" x2=\"205\" y2=\"65\"/><path class=\"thin\" d=\"M66.8 98.7 L73.2 106.3\"/><path class=\"thin\" d=\"M246.8 106.3 L253.2 98.7\"/><path class=\"thin\" d=\"M51 140 A26 26 0 0 0 45 123.4\"/><path class=\"thin\" d=\"M275 123.4 A26 26 0 0 0 269 140\"/><circle class=\"dt\" cx=\"115\" cy=\"65\" r=\"3\"/><circle class=\"dt\" cx=\"25\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"295\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"205\" cy=\"65\" r=\"3\"/><text x=\"109\" y=\"58\" text-anchor=\"middle\">A</text><text x=\"211\" y=\"58\" text-anchor=\"middle\">D</text><text x=\"14\" y=\"151\" text-anchor=\"middle\">B</text><text x=\"306\" y=\"151\" text-anchor=\"middle\">C</text></svg></figure><p class=\"geo-given\">A train station canopy rests on the steel truss <strong>ABCD</strong>, a trapezoid with AB ≅ DC and ∠ABC ≅ ∠DCB. Braces <strong>AC</strong> and <strong>BD</strong> cross the truss. Prove that AC ≅ DB.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. AB ≅ DC; ∠ABC ≅ ∠DCB</td><td>Given</td></tr><tr><td>2. BC ≅ CB</td><td>Reflexive property</td></tr><tr><td>3. △ABC ≅ △DCB</td><td>(a) ____</td></tr><tr><td>4. AC ≅ DB</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 3, △ABC ≅ △DCB (blank a)?",
          choices: [
            { letter: "A", text: "ASA" },
            { letter: "B", text: "SSA" },
            { letter: "C", text: "SAS" },
            { letter: "D", text: "HL" }
          ],
          correct: "C"
        },
        {
          id: "angle",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "In the congruence △ABC ≅ △DCB, which angle of the truss matches ∠BAC?",
          choices: [
            { letter: "A", text: "∠CDB" },
            { letter: "B", text: "∠DBC" },
            { letter: "C", text: "∠ADB" },
            { letter: "D", text: "∠ABD" }
          ],
          correct: "A"
        },
        {
          id: "bd",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AC = (3p + 1) m and BD = (5p − 7) m. How long is brace BD?",
          choices: [
            { letter: "A", text: "4 m" },
            { letter: "B", text: "8 m" },
            { letter: "C", text: "20 m" },
            { letter: "D", text: "13 m" }
          ],
          correct: "D"
        },
        {
          id: "steel",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "The bottom BC is 18 m, the top AD is 6 m, and the truss is 5 m tall. How many meters of steel do the two braces use?",
          choices: [
            { letter: "A", text: "13 m" },
            { letter: "B", text: "26 m" },
            { letter: "C", text: "about 37.4 m" },
            { letter: "D", text: "34 m" }
          ],
          correct: "B"
        },
        {
          id: "asa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose you knew ∠ABC ≅ ∠DCB and ∠ACB ≅ ∠DBC, but not AB ≅ DC. Which criterion would prove △ABC ≅ △DCB?",
          choices: [
            { letter: "A", text: "AAS" },
            { letter: "B", text: "ASA" },
            { letter: "C", text: "AAA" },
            { letter: "D", text: "SAS" }
          ],
          correct: "B"
        },
        {
          id: "circular",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Jay writes: AB ≅ DC, AC ≅ DB and BC ≅ CB, so △ABC ≅ △DCB by SSS. What is wrong with his proof?",
          choices: [
            { letter: "A", text: "AC ≅ DB is what he must prove" },
            { letter: "B", text: "SSS also needs one pair of angles" },
            { letter: "C", text: "BC ≅ CB must be given, not assumed" },
            { letter: "D", text: "He should have used SSA" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr2-sky-ferry-buoy",
      family: "GEO",
      mode: "sky",
      title: "How Far to the Ferry Buoy?",
      kind: "Triangles · G.TR.2",
      blurb: "Measuring across the water with two congruent triangles.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A straight shoreline through A, C and D with water above it. S is in the water straight out from A, with a right-angle mark at A. On land, E is straight down from D, with a right-angle mark at D. Segment SE crosses the shoreline at C. AC and CD have one tick mark\"><polygon class=\"sh2\" points=\"8,6 312,6 312,84 8,84\"/><line class=\"thin\" x1=\"8\" y1=\"84\" x2=\"312\" y2=\"84\"/><line class=\"ln\" x1=\"42\" y1=\"84\" x2=\"42\" y2=\"12\"/><line class=\"ln\" x1=\"42\" y1=\"84\" x2=\"150\" y2=\"84\"/><line class=\"ln\" x1=\"150\" y1=\"84\" x2=\"150\" y2=\"156\"/><line class=\"ln\" x1=\"42\" y1=\"12\" x2=\"150\" y2=\"156\"/><path class=\"thin\" d=\"M42 75 L51 75 L51 84\"/><path class=\"thin\" d=\"M141 84 L141 93 L150 93\"/><path class=\"thin\" d=\"M69 89 L69 79\"/><path class=\"thin\" d=\"M123 89 L123 79\"/><circle class=\"dt\" cx=\"42\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"42\" cy=\"12\" r=\"3\"/><circle class=\"dt\" cx=\"96\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"150\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"150\" cy=\"156\" r=\"3\"/><text x=\"30\" y=\"17\" text-anchor=\"middle\">S</text><text x=\"30\" y=\"96\" text-anchor=\"middle\">A</text><text x=\"100\" y=\"102\" text-anchor=\"middle\">C</text><text x=\"162\" y=\"80\" text-anchor=\"middle\">D</text><text x=\"162\" y=\"161\" text-anchor=\"middle\">E</text><text class=\"sm\" x=\"250\" y=\"40\" text-anchor=\"middle\">water</text><text class=\"sm\" x=\"250\" y=\"130\" text-anchor=\"middle\">land</text></svg></figure><p class=\"geo-given\">Ana wants the distance from dock <strong>A</strong> to the ferry buoy <strong>S</strong>, with SA ⊥ AD. She walks from A to a stake at <strong>C</strong>, then the same distance on to <strong>D</strong>. She turns and walks along DE ⊥ AD until <strong>E</strong>, C and S line up.</p>",
      claims: [
        {
          id: "vert",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Why is ∠ACS ≅ ∠DCE?",
          choices: [
            { letter: "A", text: "Alternate interior angles are congruent" },
            { letter: "B", text: "Corresponding angles are congruent" },
            { letter: "C", text: "Reflexive property" },
            { letter: "D", text: "Vertical angles are congruent" }
          ],
          correct: "D"
        },
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which criterion proves △ACS ≅ △DCE?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "HL" },
            { letter: "C", text: "ASA" },
            { letter: "D", text: "AAA" }
          ],
          correct: "C"
        },
        {
          id: "sc",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Ana walks 45 m from A to C and measures DE = 60 m. How far is the buoy S from the stake C?",
          choices: [
            { letter: "A", text: "105 m" },
            { letter: "B", text: "75 m" },
            { letter: "C", text: "60 m" },
            { letter: "D", text: "150 m" }
          ],
          correct: "B"
        },
        {
          id: "ben",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Ben does the same steps, but he walks 45 m from A to C and only 40 m from C to D. Why can he NOT use DE as the distance AS?",
          choices: [
            { letter: "A", text: "AC ≠ CD, so the triangles are not congruent" },
            { letter: "B", text: "The vertical angles are no longer congruent" },
            { letter: "C", text: "DE must be measured along the shore" },
            { letter: "D", text: "He would need HL instead of ASA" }
          ],
          correct: "A"
        },
        {
          id: "ad",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AC = (2n + 9) m and CD = (4n − 27) m. How far does Ana walk from A to D?",
          choices: [
            { letter: "A", text: "45 m" },
            { letter: "B", text: "18 m" },
            { letter: "C", text: "54 m" },
            { letter: "D", text: "90 m" }
          ],
          correct: "D"
        },
        {
          id: "sas",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose Ana could not make a right angle at D, but she walked CD = AC and placed E so that CE = CS. Which criterion would prove △ACS ≅ △DCE?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "SSS" },
            { letter: "C", text: "ASA" },
            { letter: "D", text: "HL" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
