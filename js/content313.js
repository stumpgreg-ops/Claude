/* SOL Labyrinth — Geometry game (family GEO), G.TR.2 congruent triangles (Virginia 2023 Geometry SOL). Original items only.
   Modes: maze (3 packs; a school building and its grounds), then raid (7 packs; sports and games).
   Every figure coordinate and every numeric answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-tr2-maze-pennants",
      family: "GEO",
      mode: "maze",
      title: "The Stadium Pennants",
      kind: "Triangles · G.TR.2",
      blurb: "Two pennants on the stadium rope, one hung by a different edge.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Two triangular pennants hang from a rope. Triangle ABC hangs by side AB; triangle DEF is turned and hangs by side DF. AB and DE have one tick mark, angles A and D have one arc, and angles B and E have two arcs\"><line class=\"thin\" x1=\"8\" y1=\"28\" x2=\"312\" y2=\"28\"/><polygon class=\"sh2\" points=\"30,28 130,28 65,124.3\"/><polygon class=\"sh2\" points=\"296,28 261.8,122 193.5,28\"/><path class=\"thin\" d=\"M80 33 L80 23\"/><path class=\"thin\" d=\"M274.2 73.3 L283.6 76.7\"/><path class=\"thin\" d=\"M46 28 A16 16 0 0 1 35.5 43\"/><path class=\"thin\" d=\"M290.5 43 A16 16 0 0 1 280 28\"/><path class=\"thin\" d=\"M116 28 A14 14 0 0 0 122.2 39.6 M112 28 A18 18 0 0 0 119.9 42.9\"/><path class=\"thin\" d=\"M266.6 108.8 A14 14 0 0 0 253.6 110.6 M268 105.1 A18 18 0 0 0 251.2 107.4\"/><circle class=\"dt\" cx=\"30\" cy=\"28\" r=\"3\"/><circle class=\"dt\" cx=\"130\" cy=\"28\" r=\"3\"/><circle class=\"dt\" cx=\"65\" cy=\"124.3\" r=\"3\"/><circle class=\"dt\" cx=\"296\" cy=\"28\" r=\"3\"/><circle class=\"dt\" cx=\"261.8\" cy=\"122\" r=\"3\"/><circle class=\"dt\" cx=\"193.5\" cy=\"28\" r=\"3\"/><text x=\"30\" y=\"19\" text-anchor=\"middle\">A</text><text x=\"130\" y=\"19\" text-anchor=\"middle\">B</text><text x=\"63.2\" y=\"141.2\" text-anchor=\"middle\">C</text><text x=\"296\" y=\"19\" text-anchor=\"middle\">D</text><text x=\"193.5\" y=\"19\" text-anchor=\"middle\">F</text><text x=\"263.9\" y=\"138.8\" text-anchor=\"middle\">E</text><text class=\"sm\" x=\"162\" y=\"46\" text-anchor=\"middle\">rope</text></svg></figure><p class=\"geo-given\">Two triangular pennants, <strong>△ABC</strong> and <strong>△DEF</strong>, hang from the stadium rope. The second one was hung by a different edge. The marks show AB ≅ DE, ∠A ≅ ∠D and ∠B ≅ ∠E.</p>",
      claims: [
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which criterion proves △ABC ≅ △DEF?",
          choices: [
            { letter: "A", text: "AAS" },
            { letter: "B", text: "ASA" },
            { letter: "C", text: "SAS" },
            { letter: "D", text: "AAA" }
          ],
          correct: "B"
        },
        {
          id: "bigger",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "The pep club orders a larger pennant with the same three angles as △ABC. Which statement is true?",
          choices: [
            { letter: "A", text: "It is congruent to △ABC by AAA" },
            { letter: "B", text: "It is congruent to △ABC by ASA" },
            { letter: "C", text: "It is neither similar nor congruent to △ABC" },
            { letter: "D", text: "It is similar to △ABC, but not congruent" }
          ],
          correct: "D"
        },
        {
          id: "sas",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Keep AB ≅ DE and ∠A ≅ ∠D. Which other fact would prove the pennants congruent by SAS?",
          choices: [
            { letter: "A", text: "AC ≅ DF" },
            { letter: "B", text: "BC ≅ EF" },
            { letter: "C", text: "∠C ≅ ∠F" },
            { letter: "D", text: "AC ≅ EF" }
          ],
          correct: "A"
        },
        {
          id: "x",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "The top edge AB is 18 in. long. The edge DE is (2x + 4) in. long. What is x?",
          choices: [
            { letter: "A", text: "11" },
            { letter: "B", text: "9" },
            { letter: "C", text: "7" },
            { letter: "D", text: "14" }
          ],
          correct: "C"
        },
        {
          id: "angF",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠C = (4y − 6)° and m∠F = (3y + 9)°. What is m∠F?",
          choices: [
            { letter: "A", text: "15°" },
            { letter: "B", text: "18°" },
            { letter: "C", text: "126°" },
            { letter: "D", text: "54°" }
          ],
          correct: "D"
        },
        {
          id: "cpctc",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "After proving △ABC ≅ △DEF, Mia writes BC ≅ EF. Which reason should she give?",
          choices: [
            { letter: "A", text: "CPCTC" },
            { letter: "B", text: "ASA" },
            { letter: "C", text: "Reflexive property" },
            { letter: "D", text: "Given" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr2-maze-parking",
      family: "GEO",
      mode: "maze",
      title: "Islands in the Parking Lot",
      kind: "Triangles · G.TR.2",
      blurb: "Two painted islands on the parking lot grid.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A coordinate grid from 0 to 11 across and 0 to 6 up, with triangle ABC at A(1, 1), B(5, 1), C(2, 4) and triangle DEF at D(7, 2), E(10, 1), F(10, 5)\"><line class=\"gr\" x1=\"40\" y1=\"148\" x2=\"40\" y2=\"16\"/><line class=\"gr\" x1=\"62\" y1=\"148\" x2=\"62\" y2=\"16\"/><line class=\"gr\" x1=\"84\" y1=\"148\" x2=\"84\" y2=\"16\"/><line class=\"gr\" x1=\"106\" y1=\"148\" x2=\"106\" y2=\"16\"/><line class=\"gr\" x1=\"128\" y1=\"148\" x2=\"128\" y2=\"16\"/><line class=\"gr\" x1=\"150\" y1=\"148\" x2=\"150\" y2=\"16\"/><line class=\"gr\" x1=\"172\" y1=\"148\" x2=\"172\" y2=\"16\"/><line class=\"gr\" x1=\"194\" y1=\"148\" x2=\"194\" y2=\"16\"/><line class=\"gr\" x1=\"216\" y1=\"148\" x2=\"216\" y2=\"16\"/><line class=\"gr\" x1=\"238\" y1=\"148\" x2=\"238\" y2=\"16\"/><line class=\"gr\" x1=\"260\" y1=\"148\" x2=\"260\" y2=\"16\"/><line class=\"gr\" x1=\"282\" y1=\"148\" x2=\"282\" y2=\"16\"/><line class=\"gr\" x1=\"40\" y1=\"148\" x2=\"282\" y2=\"148\"/><line class=\"gr\" x1=\"40\" y1=\"126\" x2=\"282\" y2=\"126\"/><line class=\"gr\" x1=\"40\" y1=\"104\" x2=\"282\" y2=\"104\"/><line class=\"gr\" x1=\"40\" y1=\"82\" x2=\"282\" y2=\"82\"/><line class=\"gr\" x1=\"40\" y1=\"60\" x2=\"282\" y2=\"60\"/><line class=\"gr\" x1=\"40\" y1=\"38\" x2=\"282\" y2=\"38\"/><line class=\"gr\" x1=\"40\" y1=\"16\" x2=\"282\" y2=\"16\"/><line class=\"ax\" x1=\"40\" y1=\"148\" x2=\"40\" y2=\"16\"/><line class=\"ax\" x1=\"40\" y1=\"148\" x2=\"282\" y2=\"148\"/><text class=\"sm\" x=\"84\" y=\"163\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"128\" y=\"163\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"172\" y=\"163\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"216\" y=\"163\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"260\" y=\"163\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"30\" y=\"108\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"30\" y=\"64\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"30\" y=\"20\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"31\" y=\"163\" text-anchor=\"middle\">0</text><polygon class=\"sh2\" points=\"62,126 150,126 84,60\"/><polygon class=\"sh2\" points=\"194,104 260,126 260,38\"/><circle class=\"dt\" cx=\"62\" cy=\"126\" r=\"3\"/><circle class=\"dt\" cx=\"150\" cy=\"126\" r=\"3\"/><circle class=\"dt\" cx=\"84\" cy=\"60\" r=\"3\"/><circle class=\"dt\" cx=\"194\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"260\" cy=\"126\" r=\"3\"/><circle class=\"dt\" cx=\"260\" cy=\"38\" r=\"3\"/><text x=\"51.7\" y=\"137.2\" text-anchor=\"middle\">A</text><text x=\"161\" y=\"135.7\" text-anchor=\"middle\">B</text><text x=\"80.2\" y=\"53.6\" text-anchor=\"middle\">C</text><text x=\"182.6\" y=\"112.8\" text-anchor=\"middle\">D</text><text x=\"266.2\" y=\"141.3\" text-anchor=\"middle\">E</text><text x=\"264.7\" y=\"32\" text-anchor=\"middle\">F</text></svg></figure><p class=\"geo-given\">Two triangular islands are painted on the school parking lot. Each grid unit is 1 meter: <strong>A</strong>(1, 1), <strong>B</strong>(5, 1), <strong>C</strong>(2, 4), <strong>D</strong>(7, 2), <strong>E</strong>(10, 1) and <strong>F</strong>(10, 5).</p>",
      claims: [
        {
          id: "bc",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "How long is side BC, in meters?",
          choices: [
            { letter: "A", text: "6 m" },
            { letter: "B", text: "18 m" },
            { letter: "C", text: "3√2 m" },
            { letter: "D", text: "√6 m" }
          ],
          correct: "C"
        },
        {
          id: "ssa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Kim uses only AB = EF, BC = FD and m∠BCA = m∠FDE. What can she conclude?",
          choices: [
            { letter: "A", text: "Nothing yet; that is SSA" },
            { letter: "B", text: "Congruent by SAS" },
            { letter: "C", text: "Congruent by SSS" },
            { letter: "D", text: "Congruent by ASA" }
          ],
          correct: "A"
        },
        {
          id: "stmt",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Which congruence statement is correct?",
          choices: [
            { letter: "A", text: "△ABC ≅ △DEF" },
            { letter: "B", text: "△ABC ≅ △FED" },
            { letter: "C", text: "△ABC ≅ △EDF" },
            { letter: "D", text: "△ABC ≅ △EFD" }
          ],
          correct: "D"
        },
        {
          id: "perim",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "To the nearest tenth of a meter, what is the perimeter of △EFD?",
          choices: [
            { letter: "A", text: "14.0 m" },
            { letter: "B", text: "11.4 m" },
            { letter: "C", text: "44.0 m" },
            { letter: "D", text: "7.4 m" }
          ],
          correct: "B"
        },
        {
          id: "angE",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠BAC ≈ 71.6°. To the nearest tenth of a degree, what is m∠FED?",
          choices: [
            { letter: "A", text: "45.0°" },
            { letter: "B", text: "63.4°" },
            { letter: "C", text: "71.6°" },
            { letter: "D", text: "108.4°" }
          ],
          correct: "C"
        },
        {
          id: "enough",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which set of facts is enough to prove △ABC ≅ △EFD?",
          choices: [
            { letter: "A", text: "AB = EF and m∠A = m∠E" },
            { letter: "B", text: "AB = EF, BC = FD and AC = ED" },
            { letter: "C", text: "The two triangles have equal areas" },
            { letter: "D", text: "All three pairs of angles are congruent" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr2-maze-braces",
      family: "GEO",
      mode: "maze",
      title: "Braces Under the Bleachers",
      kind: "Triangles · G.TR.2",
      blurb: "Two crossing braces under the gym bleachers, a proof and an indirect proof.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Points A, B, C, D lie in order on the floor line. Brace triangle ACE and brace triangle DBF overlap, with segments CE and BF crossing. AB and DC have one tick mark, AE and DF have two tick marks, and angles A and D have one arc\"><line class=\"thin\" x1=\"8\" y1=\"140\" x2=\"312\" y2=\"140\"/><line class=\"ln\" x1=\"20\" y1=\"140\" x2=\"300\" y2=\"140\"/><line class=\"ln\" x1=\"20\" y1=\"140\" x2=\"98.8\" y2=\"35\"/><line class=\"ln\" x1=\"98.8\" y1=\"35\" x2=\"238.8\" y2=\"140\"/><line class=\"ln\" x1=\"300\" y1=\"140\" x2=\"221.3\" y2=\"35\"/><line class=\"ln\" x1=\"221.3\" y1=\"35\" x2=\"81.3\" y2=\"140\"/><path class=\"thin\" d=\"M50.6 145 L50.6 135\"/><path class=\"thin\" d=\"M269.4 135 L269.4 145\"/><path class=\"thin\" d=\"M62.2 92.1 L54.2 86.1 M64.6 88.9 L56.6 82.9\"/><path class=\"thin\" d=\"M265.8 86.1 L257.8 92.1 M263.4 82.9 L255.4 88.9\"/><path class=\"thin\" d=\"M38 140 A18 18 0 0 0 30.8 125.6\"/><path class=\"thin\" d=\"M282 140 A18 18 0 0 1 289.2 125.6\"/><circle class=\"dt\" cx=\"20\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"81.3\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"238.8\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"300\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"98.8\" cy=\"35\" r=\"3\"/><circle class=\"dt\" cx=\"221.3\" cy=\"35\" r=\"3\"/><text x=\"20\" y=\"158\" text-anchor=\"middle\">A</text><text x=\"81.3\" y=\"158\" text-anchor=\"middle\">B</text><text x=\"238.8\" y=\"158\" text-anchor=\"middle\">C</text><text x=\"300\" y=\"158\" text-anchor=\"middle\">D</text><text x=\"98.8\" y=\"26\" text-anchor=\"middle\">E</text><text x=\"221.3\" y=\"26\" text-anchor=\"middle\">F</text></svg></figure><p class=\"geo-given\">Two braces under the gym bleachers rest on the floor line <strong>AD</strong>, with <strong>B</strong> and <strong>C</strong> on AD. AB ≅ DC, AE ≅ DF and ∠A ≅ ∠D. Prove that CE ≅ BF.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. AB ≅ DC; AE ≅ DF; ∠A ≅ ∠D</td><td>Given</td></tr><tr><td>2. BC = BC</td><td>Reflexive property</td></tr><tr><td>3. AB + BC = DC + BC</td><td>(a) ____</td></tr><tr><td>4. AC = DB</td><td>Segment Addition Postulate</td></tr><tr><td>5. △ACE ≅ △DBF</td><td>(b) ____</td></tr><tr><td>6. CE ≅ BF</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 3, AB + BC = DC + BC (blank a)?",
          choices: [
            { letter: "A", text: "Segment Addition Postulate" },
            { letter: "B", text: "Subtraction property of equality" },
            { letter: "C", text: "Reflexive property" },
            { letter: "D", text: "Addition property of equality" }
          ],
          correct: "D"
        },
        {
          id: "blankB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 5, △ACE ≅ △DBF (blank b)?",
          choices: [
            { letter: "A", text: "SSS" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "ASA" },
            { letter: "D", text: "SSA" }
          ],
          correct: "B"
        },
        {
          id: "bc",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AC = (3x + 4) ft, DB = (5x − 10) ft and AB = 7 ft. How long is BC?",
          choices: [
            { letter: "A", text: "18 ft" },
            { letter: "B", text: "25 ft" },
            { letter: "C", text: "7 ft" },
            { letter: "D", text: "32 ft" }
          ],
          correct: "A"
        },
        {
          id: "aas",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose you knew ∠A ≅ ∠D, ∠AEC ≅ ∠DFB and AC ≅ DB, but not AE ≅ DF. Which criterion would prove △ACE ≅ △DBF?",
          choices: [
            { letter: "A", text: "ASA" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "AAS" },
            { letter: "D", text: "HL" }
          ],
          correct: "C"
        },
        {
          id: "assume",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Braces in the cafeteria have the same layout, with AB ≅ DC and ∠A ≅ ∠D, but CE = 20 ft and BF = 22 ft. To prove indirectly that AE ≠ DF, what should Ty assume first?",
          choices: [
            { letter: "A", text: "AE = DF" },
            { letter: "B", text: "AE ≠ DF" },
            { letter: "C", text: "CE = BF" },
            { letter: "D", text: "AB ≠ DC" }
          ],
          correct: "A"
        },
        {
          id: "contra",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Braces in the cafeteria have the same layout, with AB ≅ DC and ∠A ≅ ∠D, but CE = 20 ft and BF = 22 ft. Ty assumes AE = DF, then uses SAS and CPCTC. Which fact does his result contradict?",
          choices: [
            { letter: "A", text: "∠A ≅ ∠D (given)" },
            { letter: "B", text: "AB ≅ DC (given)" },
            { letter: "C", text: "BC = BC (reflexive)" },
            { letter: "D", text: "CE = 20 ft, BF = 22 ft" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr2-raid-climbing-hold",
      family: "GEO",
      mode: "raid",
      title: "The Climbing Wall Hold",
      kind: "Triangles · G.TR.2",
      blurb: "A kite-shaped hold with a seam down the middle.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Kite-shaped hold ABCD with a dashed seam AC from the top A to the bottom C. AB and AD have one tick mark; CB and CD have two tick marks\"><polygon class=\"sh2\" points=\"160,24 116.8,72 160,143.9 203.2,72\"/><line class=\"ln dash\" x1=\"160\" y1=\"24\" x2=\"160\" y2=\"143.9\"/><path class=\"thin\" d=\"M134.7 44.7 L142.1 51.3\"/><path class=\"thin\" d=\"M177.9 51.3 L185.3 44.7\"/><path class=\"thin\" d=\"M143.7 107.1 L135.1 112.3 M141.6 103.7 L133.1 108.8\"/><path class=\"thin\" d=\"M184.9 112.3 L176.3 107.1 M186.9 108.8 L178.4 103.7\"/><circle class=\"dt\" cx=\"160\" cy=\"24\" r=\"3\"/><circle class=\"dt\" cx=\"116.8\" cy=\"72\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"143.9\" r=\"3\"/><circle class=\"dt\" cx=\"203.2\" cy=\"72\" r=\"3\"/><text x=\"160\" y=\"16\" text-anchor=\"middle\">A</text><text x=\"103.9\" y=\"75.2\" text-anchor=\"middle\">B</text><text x=\"160\" y=\"161.9\" text-anchor=\"middle\">C</text><text x=\"216.1\" y=\"75.2\" text-anchor=\"middle\">D</text></svg></figure><p class=\"geo-given\">A hold on the climbing wall is shaped like <strong>ABCD</strong>, with AB ≅ AD and CB ≅ CD. A seam runs along <strong>AC</strong>.</p>",
      claims: [
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which criterion proves △ABC ≅ △ADC?",
          choices: [
            { letter: "A", text: "SSS" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "ASA" },
            { letter: "D", text: "HL" }
          ],
          correct: "A"
        },
        {
          id: "reflex",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "A proof that △ABC ≅ △ADC uses the statement AC ≅ AC. Which reason supports it?",
          choices: [
            { letter: "A", text: "Symmetric property" },
            { letter: "B", text: "Given" },
            { letter: "C", text: "Reflexive property" },
            { letter: "D", text: "CPCTC" }
          ],
          correct: "C"
        },
        {
          id: "bad",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠BAC = 42°. What is m∠BAD?",
          choices: [
            { letter: "A", text: "42°" },
            { letter: "B", text: "84°" },
            { letter: "C", text: "21°" },
            { letter: "D", text: "138°" }
          ],
          correct: "B"
        },
        {
          id: "ab",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AB = (3x − 4) cm and AD = (x + 10) cm. How long is AB?",
          choices: [
            { letter: "A", text: "7 cm" },
            { letter: "B", text: "5 cm" },
            { letter: "C", text: "34 cm" },
            { letter: "D", text: "17 cm" }
          ],
          correct: "D"
        },
        {
          id: "corr",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Which angle is congruent to ∠BCA?",
          choices: [
            { letter: "A", text: "∠BAC" },
            { letter: "B", text: "∠DCA" },
            { letter: "C", text: "∠DAC" },
            { letter: "D", text: "∠ABC" }
          ],
          correct: "B"
        },
        {
          id: "ssa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "A second hold, PQRS with seam PR, has PQ ≅ PS and ∠PRQ ≅ ∠PRS. What can you conclude about △PQR and △PSR?",
          choices: [
            { letter: "A", text: "They are congruent by SAS" },
            { letter: "B", text: "They are congruent by ASA" },
            { letter: "C", text: "No conclusion: this is SSA" },
            { letter: "D", text: "They are congruent by HL" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr2-raid-skate-ramps",
      family: "GEO",
      mode: "raid",
      title: "Twin Skate Ramps",
      kind: "Triangles · G.TR.2",
      blurb: "Two right-triangle ramps face each other.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Two right triangles on the ground facing each other: JKL with the right angle at L and PQR with the right angle at R. Hypotenuses JK and PQ have one tick mark; vertical legs KL and QR have two tick marks\"><line class=\"thin\" x1=\"8\" y1=\"135\" x2=\"312\" y2=\"135\"/><polygon class=\"sh2\" points=\"20,135 132,135 132,51\"/><polygon class=\"sh2\" points=\"188,135 300,135 188,51\"/><path class=\"thin\" d=\"M122 135 L122 125 L132 125\"/><path class=\"thin\" d=\"M198 135 L198 125 L188 125\"/><path class=\"thin\" d=\"M79 97 L73 89\"/><path class=\"thin\" d=\"M247 89 L241 97\"/><path class=\"thin\" d=\"M127 91 L137 91 M127 95 L137 95\"/><path class=\"thin\" d=\"M183 91 L193 91 M183 95 L193 95\"/><circle class=\"dt\" cx=\"20\" cy=\"135\" r=\"3\"/><circle class=\"dt\" cx=\"132\" cy=\"51\" r=\"3\"/><circle class=\"dt\" cx=\"132\" cy=\"135\" r=\"3\"/><circle class=\"dt\" cx=\"300\" cy=\"135\" r=\"3\"/><circle class=\"dt\" cx=\"188\" cy=\"51\" r=\"3\"/><circle class=\"dt\" cx=\"188\" cy=\"135\" r=\"3\"/><text x=\"20\" y=\"153\" text-anchor=\"middle\">J</text><text x=\"132\" y=\"153\" text-anchor=\"middle\">L</text><text x=\"132\" y=\"43\" text-anchor=\"middle\">K</text><text x=\"188\" y=\"153\" text-anchor=\"middle\">R</text><text x=\"300\" y=\"153\" text-anchor=\"middle\">P</text><text x=\"188\" y=\"43\" text-anchor=\"middle\">Q</text></svg></figure><p class=\"geo-given\">Two ramps at the skate park face each other. Their sides are the right triangles <strong>△JKL</strong> and <strong>△PQR</strong>, with right angles at <strong>L</strong> and <strong>R</strong>. The marks show JK ≅ PQ and KL ≅ QR.</p>",
      claims: [
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which criterion proves △JKL ≅ △PQR?",
          choices: [
            { letter: "A", text: "SSA" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "HL" },
            { letter: "D", text: "ASA" }
          ],
          correct: "C"
        },
        {
          id: "legs",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose the marks showed JL ≅ PR and KL ≅ QR instead, with the same right angles. Which criterion would prove the ramps congruent?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "HL" },
            { letter: "C", text: "SSA" },
            { letter: "D", text: "AAS" }
          ],
          correct: "A"
        },
        {
          id: "base",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "JK = 10 ft and KL = 6 ft. How long is the base PR of the other ramp?",
          choices: [
            { letter: "A", text: "6 ft" },
            { letter: "B", text: "4 ft" },
            { letter: "C", text: "2√34 ft" },
            { letter: "D", text: "8 ft" }
          ],
          correct: "D"
        },
        {
          id: "aaa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Theo says any ramp with the same three angles as △JKL must be congruent to △JKL. Is he right?",
          choices: [
            { letter: "A", text: "Yes; AAA proves congruence" },
            { letter: "B", text: "No; AAA proves only similarity" },
            { letter: "C", text: "Yes; ASA proves congruence" },
            { letter: "D", text: "Yes; HL proves congruence" }
          ],
          correct: "B"
        },
        {
          id: "x",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "KL = (4x − 2) ft and QR = (2x + 2) ft. What is x?",
          choices: [
            { letter: "A", text: "0" },
            { letter: "B", text: "2/3" },
            { letter: "C", text: "4" },
            { letter: "D", text: "2" }
          ],
          correct: "D"
        },
        {
          id: "error",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Dev says, “The marks show two sides and a non-included angle, so no criterion proves these ramps congruent.” What is wrong with his claim?",
          choices: [
            { letter: "A", text: "HL proves these right triangles congruent" },
            { letter: "B", text: "Nothing; SSA never proves congruence" },
            { letter: "C", text: "The right angles are included, so SAS works" },
            { letter: "D", text: "Two angles match, so AAS works" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr2-raid-archery-easel",
      family: "GEO",
      mode: "raid",
      title: "The Archery Target Easel",
      kind: "Triangles · G.TR.2",
      blurb: "Two crossbars brace the legs of a target easel.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Two legs AB and AC meet at the top A. D is on AB and E is on AC. Crossbars BE and CD cross. AD and AE have one tick mark; DB and EC have two tick marks\"><line class=\"ln\" x1=\"160\" y1=\"24\" x2=\"97.8\" y2=\"143.8\"/><line class=\"ln\" x1=\"160\" y1=\"24\" x2=\"222.2\" y2=\"143.8\"/><line class=\"ln\" x1=\"97.8\" y1=\"143.8\" x2=\"185.9\" y2=\"73.9\"/><line class=\"ln\" x1=\"222.2\" y1=\"143.8\" x2=\"134.1\" y2=\"73.9\"/><path class=\"thin\" d=\"M142.6 46.7 L151.5 51.3\"/><path class=\"thin\" d=\"M168.5 51.3 L177.4 46.7\"/><path class=\"thin\" d=\"M112.4 104.8 L121.3 109.4 M110.6 108.3 L119.4 112.9\"/><path class=\"thin\" d=\"M198.7 109.4 L207.6 104.8 M200.6 112.9 L209.4 108.3\"/><circle class=\"dt\" cx=\"160\" cy=\"24\" r=\"3\"/><circle class=\"dt\" cx=\"97.8\" cy=\"143.8\" r=\"3\"/><circle class=\"dt\" cx=\"222.2\" cy=\"143.8\" r=\"3\"/><circle class=\"dt\" cx=\"134.1\" cy=\"73.9\" r=\"3\"/><circle class=\"dt\" cx=\"185.9\" cy=\"73.9\" r=\"3\"/><text x=\"160\" y=\"16\" text-anchor=\"middle\">A</text><text x=\"93.8\" y=\"161.8\" text-anchor=\"middle\">B</text><text x=\"226.2\" y=\"161.8\" text-anchor=\"middle\">C</text><text x=\"120.1\" y=\"77.9\" text-anchor=\"middle\">D</text><text x=\"199.9\" y=\"77.9\" text-anchor=\"middle\">E</text></svg></figure><p class=\"geo-given\">The legs <strong>AB</strong> and <strong>AC</strong> of an archery target easel meet at <strong>A</strong>. Crossbars <strong>BE</strong> and <strong>CD</strong> join the legs, with D on AB and E on AC. AD ≅ AE and DB ≅ EC. Prove that BE ≅ CD.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. AD ≅ AE; DB ≅ EC</td><td>Given</td></tr><tr><td>2. AB ≅ AC</td><td>Segment addition</td></tr><tr><td>3. ∠A ≅ ∠A</td><td>(a) ____</td></tr><tr><td>4. △ABE ≅ △ACD</td><td>(b) ____</td></tr><tr><td>5. BE ≅ CD</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 3, ∠A ≅ ∠A (blank a)?",
          choices: [
            { letter: "A", text: "Vertical angles are congruent" },
            { letter: "B", text: "Reflexive property" },
            { letter: "C", text: "Given" },
            { letter: "D", text: "CPCTC" }
          ],
          correct: "B"
        },
        {
          id: "blankB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 4, △ABE ≅ △ACD (blank b)?",
          choices: [
            { letter: "A", text: "SSA" },
            { letter: "B", text: "ASA" },
            { letter: "C", text: "HL" },
            { letter: "D", text: "SAS" }
          ],
          correct: "D"
        },
        {
          id: "cd",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "BE = (5x − 10) in. and CD = (3x + 14) in. How long is crossbar CD?",
          choices: [
            { letter: "A", text: "12 in." },
            { letter: "B", text: "20 in." },
            { letter: "C", text: "50 in." },
            { letter: "D", text: "100 in." }
          ],
          correct: "C"
        },
        {
          id: "ec",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Leg AB is 60 in. long and AE = 25 in. How long is EC?",
          choices: [
            { letter: "A", text: "35 in." },
            { letter: "B", text: "25 in." },
            { letter: "C", text: "85 in." },
            { letter: "D", text: "60 in." }
          ],
          correct: "A"
        },
        {
          id: "asa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Ana starts again with only AB ≅ AC and ∠ABE ≅ ∠ACD. Which criterion lets her prove △ABE ≅ △ACD?",
          choices: [
            { letter: "A", text: "AAS" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "ASA" },
            { letter: "D", text: "SSA" }
          ],
          correct: "C"
        },
        {
          id: "sss",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose you knew only AD ≅ AE and BE ≅ CD. Which other fact would prove △ABE ≅ △ACD by SSS?",
          choices: [
            { letter: "A", text: "∠A ≅ ∠A" },
            { letter: "B", text: "AB ≅ AC" },
            { letter: "C", text: "∠AEB ≅ ∠ADC" },
            { letter: "D", text: "AD ≅ DB" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr2-raid-game-map",
      family: "GEO",
      mode: "raid",
      title: "Shields on a Game Map",
      kind: "Triangles · G.TR.2",
      blurb: "A game copies a shield to the other side of the map.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 130\" role=\"img\" aria-label=\"A coordinate grid from −10 to 10 across and −3 to 3 up, with triangle ABC at A(−9, −2), B(−7, 2), C(−1, −1) and triangle QRP at Q(9, 2), R(7, −2), P(1, 1)\"><line class=\"gr\" x1=\"20\" y1=\"106\" x2=\"20\" y2=\"22\"/><line class=\"gr\" x1=\"34\" y1=\"106\" x2=\"34\" y2=\"22\"/><line class=\"gr\" x1=\"48\" y1=\"106\" x2=\"48\" y2=\"22\"/><line class=\"gr\" x1=\"62\" y1=\"106\" x2=\"62\" y2=\"22\"/><line class=\"gr\" x1=\"76\" y1=\"106\" x2=\"76\" y2=\"22\"/><line class=\"gr\" x1=\"90\" y1=\"106\" x2=\"90\" y2=\"22\"/><line class=\"gr\" x1=\"104\" y1=\"106\" x2=\"104\" y2=\"22\"/><line class=\"gr\" x1=\"118\" y1=\"106\" x2=\"118\" y2=\"22\"/><line class=\"gr\" x1=\"132\" y1=\"106\" x2=\"132\" y2=\"22\"/><line class=\"gr\" x1=\"146\" y1=\"106\" x2=\"146\" y2=\"22\"/><line class=\"gr\" x1=\"160\" y1=\"106\" x2=\"160\" y2=\"22\"/><line class=\"gr\" x1=\"174\" y1=\"106\" x2=\"174\" y2=\"22\"/><line class=\"gr\" x1=\"188\" y1=\"106\" x2=\"188\" y2=\"22\"/><line class=\"gr\" x1=\"202\" y1=\"106\" x2=\"202\" y2=\"22\"/><line class=\"gr\" x1=\"216\" y1=\"106\" x2=\"216\" y2=\"22\"/><line class=\"gr\" x1=\"230\" y1=\"106\" x2=\"230\" y2=\"22\"/><line class=\"gr\" x1=\"244\" y1=\"106\" x2=\"244\" y2=\"22\"/><line class=\"gr\" x1=\"258\" y1=\"106\" x2=\"258\" y2=\"22\"/><line class=\"gr\" x1=\"272\" y1=\"106\" x2=\"272\" y2=\"22\"/><line class=\"gr\" x1=\"286\" y1=\"106\" x2=\"286\" y2=\"22\"/><line class=\"gr\" x1=\"300\" y1=\"106\" x2=\"300\" y2=\"22\"/><line class=\"gr\" x1=\"20\" y1=\"106\" x2=\"300\" y2=\"106\"/><line class=\"gr\" x1=\"20\" y1=\"92\" x2=\"300\" y2=\"92\"/><line class=\"gr\" x1=\"20\" y1=\"78\" x2=\"300\" y2=\"78\"/><line class=\"gr\" x1=\"20\" y1=\"64\" x2=\"300\" y2=\"64\"/><line class=\"gr\" x1=\"20\" y1=\"50\" x2=\"300\" y2=\"50\"/><line class=\"gr\" x1=\"20\" y1=\"36\" x2=\"300\" y2=\"36\"/><line class=\"gr\" x1=\"20\" y1=\"22\" x2=\"300\" y2=\"22\"/><line class=\"ax\" x1=\"160\" y1=\"106\" x2=\"160\" y2=\"22\"/><line class=\"ax\" x1=\"20\" y1=\"64\" x2=\"300\" y2=\"64\"/><text class=\"sm\" x=\"48\" y=\"121\" text-anchor=\"middle\">−8</text><text class=\"sm\" x=\"104\" y=\"121\" text-anchor=\"middle\">−4</text><text class=\"sm\" x=\"216\" y=\"121\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"272\" y=\"121\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"160\" y=\"121\" text-anchor=\"middle\">0</text><text class=\"sm\" x=\"10\" y=\"110\" text-anchor=\"middle\">−3</text><text class=\"sm\" x=\"10\" y=\"26\" text-anchor=\"middle\">3</text><polygon class=\"sh2\" points=\"34,92 62,36 146,78\"/><polygon class=\"sh\" points=\"286,36 258,92 174,50\"/><circle class=\"dt\" cx=\"34\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"62\" cy=\"36\" r=\"3\"/><circle class=\"dt\" cx=\"146\" cy=\"78\" r=\"3\"/><circle class=\"dt\" cx=\"286\" cy=\"36\" r=\"3\"/><circle class=\"dt\" cx=\"258\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"174\" cy=\"50\" r=\"3\"/><text x=\"22\" y=\"97\" text-anchor=\"middle\">A</text><text x=\"56\" y=\"30.6\" text-anchor=\"middle\">B</text><text x=\"157.9\" y=\"84.7\" text-anchor=\"middle\">C</text><text x=\"296.7\" y=\"35.6\" text-anchor=\"middle\">Q</text><text x=\"264\" y=\"107.4\" text-anchor=\"middle\">R</text><text x=\"162.1\" y=\"53.3\" text-anchor=\"middle\">P</text></svg></figure><p class=\"geo-given\">In a video game, a shield <strong>△ABC</strong> is copied to <strong>△QRP</strong> on the map grid: <strong>A</strong>(−9, −2), <strong>B</strong>(−7, 2), <strong>C</strong>(−1, −1), <strong>Q</strong>(9, 2), <strong>R</strong>(7, −2) and <strong>P</strong>(1, 1).</p>",
      claims: [
        {
          id: "qr",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "What is the length of QR, in grid units?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "20" },
            { letter: "C", text: "2√3" },
            { letter: "D", text: "2√5" }
          ],
          correct: "D"
        },
        {
          id: "hl",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Max shows that ∠B and ∠R are right angles, AC = QP = √65 and AB = QR = 2√5. Which criterion proves △ABC ≅ △QRP?",
          choices: [
            { letter: "A", text: "SSA" },
            { letter: "B", text: "HL" },
            { letter: "C", text: "SAS" },
            { letter: "D", text: "ASA" }
          ],
          correct: "B"
        },
        {
          id: "seg",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Which segment is congruent to BC?",
          choices: [
            { letter: "A", text: "RP" },
            { letter: "B", text: "PQ" },
            { letter: "C", text: "QR" },
            { letter: "D", text: "AC" }
          ],
          correct: "A"
        },
        {
          id: "area",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "What is the area of △QRP, in square units?",
          choices: [
            { letter: "A", text: "30" },
            { letter: "B", text: "27" },
            { letter: "C", text: "15" },
            { letter: "D", text: "5√13" }
          ],
          correct: "C"
        },
        {
          id: "notenough",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "AB = QR and BC = RP. Which added fact would NOT prove △ABC ≅ △QRP?",
          choices: [
            { letter: "A", text: "∠A ≅ ∠Q" },
            { letter: "B", text: "AC = QP" },
            { letter: "C", text: "∠B ≅ ∠R" },
            { letter: "D", text: "△QRP is a rotation of △ABC" }
          ],
          correct: "A"
        },
        {
          id: "assume",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "On another level, △XYZ has XY = 2√5, YZ = 3√5 and XZ = 8. To prove indirectly that △XYZ is not congruent to △ABC, what should you assume first?",
          choices: [
            { letter: "A", text: "△XYZ ≇ △ABC" },
            { letter: "B", text: "XZ ≠ AC" },
            { letter: "C", text: "XZ = 8" },
            { letter: "D", text: "△XYZ ≅ △ABC" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr2-raid-tennis-court",
      family: "GEO",
      mode: "raid",
      title: "The Tennis Court Diagonals",
      kind: "Triangles · G.TR.2",
      blurb: "Are the two diagonals of a court the same length?",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Rectangle ABCD, a tennis court, with a right-angle mark at each corner, both diagonals AC and BD drawn, and a dashed net across the middle\"><polygon class=\"sh2\" points=\"31.3,140 288.7,140 288.7,21.2 31.3,21.2\"/><line class=\"thin dash\" x1=\"160\" y1=\"21.2\" x2=\"160\" y2=\"140\"/><line class=\"ln\" x1=\"31.3\" y1=\"140\" x2=\"288.7\" y2=\"21.2\"/><line class=\"ln\" x1=\"288.7\" y1=\"140\" x2=\"31.3\" y2=\"21.2\"/><path class=\"thin\" d=\"M40.3 140 L40.3 131 L31.3 131\"/><path class=\"thin\" d=\"M279.7 140 L279.7 131 L288.7 131\"/><path class=\"thin\" d=\"M288.7 30.2 L279.7 30.2 L279.7 21.2\"/><path class=\"thin\" d=\"M31.3 30.2 L40.3 30.2 L40.3 21.2\"/><circle class=\"dt\" cx=\"31.3\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"288.7\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"288.7\" cy=\"21.2\" r=\"3\"/><circle class=\"dt\" cx=\"31.3\" cy=\"21.2\" r=\"3\"/><text x=\"18.6\" y=\"150.9\" text-anchor=\"middle\">A</text><text x=\"301.4\" y=\"150.9\" text-anchor=\"middle\">B</text><text x=\"301.4\" y=\"20.3\" text-anchor=\"middle\">C</text><text x=\"18.6\" y=\"20.3\" text-anchor=\"middle\">D</text><text class=\"sm\" x=\"172\" y=\"35.2\" text-anchor=\"middle\">net</text></svg></figure><p class=\"geo-given\">A tennis court is the rectangle <strong>ABCD</strong>. Prove that its diagonals are congruent: BD ≅ AC.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. ABCD is a rectangle</td><td>Given</td></tr><tr><td>2. AD ≅ BC</td><td>(a) ____</td></tr><tr><td>3. ∠DAB and ∠CBA are right angles</td><td>Definition of rectangle</td></tr><tr><td>4. ∠DAB ≅ ∠CBA</td><td>All right angles are congruent</td></tr><tr><td>5. AB ≅ BA</td><td>Reflexive property</td></tr><tr><td>6. △DAB ≅ △CBA</td><td>(b) ____</td></tr><tr><td>7. BD ≅ AC</td><td>(c) ____</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 2, AD ≅ BC (blank a)?",
          choices: [
            { letter: "A", text: "Opposite sides of a rectangle are congruent" },
            { letter: "B", text: "Diagonals of a rectangle are congruent" },
            { letter: "C", text: "Adjacent sides of a rectangle are congruent" },
            { letter: "D", text: "Opposite angles of a rectangle are congruent" }
          ],
          correct: "A"
        },
        {
          id: "blankB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 6, △DAB ≅ △CBA (blank b)?",
          choices: [
            { letter: "A", text: "HL" },
            { letter: "B", text: "SSA" },
            { letter: "C", text: "SAS" },
            { letter: "D", text: "AAS" }
          ],
          correct: "C"
        },
        {
          id: "blankC",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 7, BD ≅ AC (blank c)?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "Reflexive property" },
            { letter: "C", text: "Transitive property" },
            { letter: "D", text: "CPCTC" }
          ],
          correct: "D"
        },
        {
          id: "diag",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "A doubles court is 78 ft long (AB) and 36 ft wide (AD). To the nearest tenth of a foot, how long is diagonal BD?",
          choices: [
            { letter: "A", text: "114.0 ft" },
            { letter: "B", text: "85.9 ft" },
            { letter: "C", text: "69.2 ft" },
            { letter: "D", text: "43.0 ft" }
          ],
          correct: "B"
        },
        {
          id: "sss",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose you knew only AD ≅ BC and AC ≅ BD, with no right angles. Which criterion proves △DAB ≅ △CBA?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "HL" },
            { letter: "C", text: "SSA" },
            { letter: "D", text: "SSS" }
          ],
          correct: "D"
        },
        {
          id: "angle",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠ADB ≈ 65°. To the nearest degree, what is m∠CAB?",
          choices: [
            { letter: "A", text: "65°" },
            { letter: "B", text: "115°" },
            { letter: "C", text: "25°" },
            { letter: "D", text: "155°" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr2-raid-lifeguard",
      family: "GEO",
      mode: "raid",
      title: "The Lifeguard's Lane Line",
      kind: "Triangles · G.TR.2",
      blurb: "An indirect proof from the lifeguard chair.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Point B above a straight line through A, D and C. BD is dashed and perpendicular to the line at D, with a right-angle mark. BA is labeled 12 m and BC is labeled 15 m\"><line class=\"thin\" x1=\"10\" y1=\"142\" x2=\"310\" y2=\"142\"/><line class=\"ln\" x1=\"30\" y1=\"142\" x2=\"289.2\" y2=\"142\"/><line class=\"ln\" x1=\"133.2\" y1=\"25\" x2=\"30\" y2=\"142\"/><line class=\"ln\" x1=\"133.2\" y1=\"25\" x2=\"289.2\" y2=\"142\"/><line class=\"ln dash\" x1=\"133.2\" y1=\"25\" x2=\"133.2\" y2=\"142\"/><path class=\"thin\" d=\"M143.2 142 L143.2 132 L133.2 132\"/><circle class=\"dt\" cx=\"30\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"133.2\" cy=\"25\" r=\"3\"/><circle class=\"dt\" cx=\"289.2\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"133.2\" cy=\"142\" r=\"3\"/><text x=\"30\" y=\"160\" text-anchor=\"middle\">A</text><text x=\"133.2\" y=\"160\" text-anchor=\"middle\">D</text><text x=\"289.2\" y=\"160\" text-anchor=\"middle\">C</text><text x=\"133.2\" y=\"17\" text-anchor=\"middle\">B</text><text x=\"60.4\" y=\"82.5\" text-anchor=\"middle\">12 m</text><text x=\"232.1\" y=\"81.7\" text-anchor=\"middle\">15 m</text></svg></figure><p class=\"geo-given\">From the lifeguard chair <strong>B</strong>, ropes run to buoys <strong>A</strong> and <strong>C</strong> on a straight lane line. <strong>BD</strong> ⊥ AC, BA = 12 m and BC = 15 m. The indirect proof below shows that D is not the midpoint of AC.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. AD ≅ CD</td><td>Assumption</td></tr><tr><td>2. ∠BDA ≅ ∠BDC</td><td>BD ⊥ AC, so both are right angles</td></tr><tr><td>3. BD ≅ BD</td><td>Reflexive property</td></tr><tr><td>4. △BDA ≅ △BDC</td><td>(a) ____</td></tr><tr><td>5. BA ≅ BC</td><td>CPCTC</td></tr><tr><td>6. BA = 12 m and BC = 15 m</td><td>Given</td></tr><tr><td>7. AD ≇ CD</td><td>(b) ____</td></tr></table>",
      claims: [
        {
          id: "why",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Why does the proof start by assuming AD ≅ CD?",
          choices: [
            { letter: "A", text: "It is one of the given facts" },
            { letter: "B", text: "It follows from BD ⊥ AC" },
            { letter: "C", text: "It is the opposite of what is to be proved" },
            { letter: "D", text: "It is the statement the proof sets out to show" }
          ],
          correct: "C"
        },
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 4, △BDA ≅ △BDC (blank a)?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "HL" },
            { letter: "C", text: "SSS" },
            { letter: "D", text: "ASA" }
          ],
          correct: "A"
        },
        {
          id: "blankB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 7, AD ≇ CD (blank b)?",
          choices: [
            { letter: "A", text: "Definition of midpoint" },
            { letter: "B", text: "Steps 5 and 6 contradict each other" },
            { letter: "C", text: "Steps 1 and 3 contradict each other" },
            { letter: "D", text: "Steps 4 and 5 contradict each other" }
          ],
          correct: "B"
        },
        {
          id: "ac",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "BD = 9 m. To the nearest tenth of a meter, how far apart are buoys A and C?",
          choices: [
            { letter: "A", text: "24.0 m" },
            { letter: "B", text: "4.1 m" },
            { letter: "C", text: "27.0 m" },
            { letter: "D", text: "19.9 m" }
          ],
          correct: "D"
        },
        {
          id: "hl",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "At another pool, BD ⊥ AC and the two ropes are equal, BA = BC. Which criterion proves △BDA ≅ △BDC most directly?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "HL" },
            { letter: "C", text: "SSA" },
            { letter: "D", text: "AAA" }
          ],
          correct: "B"
        },
        {
          id: "ac2",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "At another pool, BD ⊥ AC and BA = BC. AD = (2k + 3) m and CD = (5k − 9) m. How long is AC?",
          choices: [
            { letter: "A", text: "22 m" },
            { letter: "B", text: "11 m" },
            { letter: "C", text: "14 m" },
            { letter: "D", text: "4 m" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr2-raid-game-board",
      family: "GEO",
      mode: "raid",
      title: "The Board Game Corners",
      kind: "Triangles · G.TR.2",
      blurb: "A tilted square sits inside a square game board.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Square PQRS with a right-angle mark at each corner. A is on PQ, B on QR, C on RS and D on SP; the shaded quadrilateral ABCD cuts off four corner triangles. PA, QB, RC and SD each have one tick mark\"><polygon class=\"ln\" points=\"97,23 223,23 223,149 97,149\"/><polygon class=\"sh\" points=\"133,23 223,59 187,149 97,113\"/><path class=\"thin\" d=\"M104 23 L104 30 L97 30\"/><path class=\"thin\" d=\"M216 23 L216 30 L223 30\"/><path class=\"thin\" d=\"M223 142 L216 142 L216 149\"/><path class=\"thin\" d=\"M97 142 L104 142 L104 149\"/><path class=\"thin\" d=\"M115 28 L115 18\"/><path class=\"thin\" d=\"M218 41 L228 41\"/><path class=\"thin\" d=\"M205 144 L205 154\"/><path class=\"thin\" d=\"M102 131 L92 131\"/><circle class=\"dt\" cx=\"97\" cy=\"23\" r=\"3\"/><circle class=\"dt\" cx=\"223\" cy=\"23\" r=\"3\"/><circle class=\"dt\" cx=\"223\" cy=\"149\" r=\"3\"/><circle class=\"dt\" cx=\"97\" cy=\"149\" r=\"3\"/><circle class=\"dt\" cx=\"133\" cy=\"23\" r=\"3\"/><circle class=\"dt\" cx=\"223\" cy=\"59\" r=\"3\"/><circle class=\"dt\" cx=\"187\" cy=\"149\" r=\"3\"/><circle class=\"dt\" cx=\"97\" cy=\"113\" r=\"3\"/><text x=\"87.8\" y=\"18.8\" text-anchor=\"middle\">P</text><text x=\"232.2\" y=\"18.8\" text-anchor=\"middle\">Q</text><text x=\"232.2\" y=\"163.2\" text-anchor=\"middle\">R</text><text x=\"87.8\" y=\"163.2\" text-anchor=\"middle\">S</text><text x=\"133\" y=\"15\" text-anchor=\"middle\">A</text><text x=\"236\" y=\"64\" text-anchor=\"middle\">B</text><text x=\"187\" y=\"165\" text-anchor=\"middle\">C</text><text x=\"84\" y=\"118\" text-anchor=\"middle\">D</text></svg></figure><p class=\"geo-given\">A game board is the square <strong>PQRS</strong>. Points <strong>A</strong>, <strong>B</strong>, <strong>C</strong> and <strong>D</strong> on its sides cut off four corner triangles, with PA = QB = RC = SD. Prove that △DPA ≅ △AQB.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. PQRS is a square; PA = QB = RC = SD</td><td>Given</td></tr><tr><td>2. PS = PQ; ∠P and ∠Q are right angles</td><td>Definition of a square</td></tr><tr><td>3. PS − SD = PQ − PA</td><td>(a) ____</td></tr><tr><td>4. DP = AQ</td><td>Segment Addition Postulate</td></tr><tr><td>5. ∠P ≅ ∠Q</td><td>All right angles are congruent</td></tr><tr><td>6. △DPA ≅ △AQB</td><td>(b) ____</td></tr><tr><td>7. DA ≅ AB</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 3, PS − SD = PQ − PA (blank a)?",
          choices: [
            { letter: "A", text: "Addition property of equality" },
            { letter: "B", text: "Subtraction property of equality" },
            { letter: "C", text: "Reflexive property" },
            { letter: "D", text: "Segment Addition Postulate" }
          ],
          correct: "B"
        },
        {
          id: "blankB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 6, △DPA ≅ △AQB (blank b)?",
          choices: [
            { letter: "A", text: "HL" },
            { letter: "B", text: "ASA" },
            { letter: "C", text: "SSA" },
            { letter: "D", text: "SAS" }
          ],
          correct: "D"
        },
        {
          id: "perim",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "DA = (3m + 4) cm and AB = (5m − 6) cm. What is the perimeter of ABCD?",
          choices: [
            { letter: "A", text: "19 cm" },
            { letter: "B", text: "5 cm" },
            { letter: "C", text: "76 cm" },
            { letter: "D", text: "38 cm" }
          ],
          correct: "C"
        },
        {
          id: "area",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "The board is 28 cm on each side and PA = 8 cm. What is the area of ABCD?",
          choices: [
            { letter: "A", text: "464 cm²" },
            { letter: "B", text: "144 cm²" },
            { letter: "C", text: "336 cm²" },
            { letter: "D", text: "704 cm²" }
          ],
          correct: "A"
        },
        {
          id: "angDAB",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠PAD = 68°. What is m∠DAB?",
          choices: [
            { letter: "A", text: "90°" },
            { letter: "B", text: "44°" },
            { letter: "C", text: "22°" },
            { letter: "D", text: "112°" }
          ],
          correct: "A"
        },
        {
          id: "aas",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Raj starts over knowing only ∠P ≅ ∠Q, ∠PAD ≅ ∠QBA and DA ≅ AB. Which criterion proves △DPA ≅ △AQB?",
          choices: [
            { letter: "A", text: "ASA" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "AAS" },
            { letter: "D", text: "HL" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
