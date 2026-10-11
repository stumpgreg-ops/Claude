/* SOL Labyrinth — Geometry game (family GEO), G.TR.2 congruent triangles (Virginia 2023 Geometry SOL). Original items only.
   Modes: ring (7 packs; art, design, music and making things), then worms (7 packs; nature and the outdoors).
   Every figure coordinate and every numeric answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-tr2-ring-stained-glass",
      family: "GEO",
      mode: "ring",
      title: "The Stained Glass Triangle",
      kind: "Triangles · G.TR.2",
      blurb: "Lead strips join the midpoints of a triangular glass panel.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Triangle ABC with D on AB, E on BC and F on CA, and segments DE, EF and FD forming a shaded middle triangle. AD, DB and FE have one tick mark; BE, EC and DF have two tick marks; CF, FA and ED have three tick marks\"><polygon class=\"sh2\" points=\"133.8,40.1 35,146 285,146\"/><polygon class=\"sh\" points=\"84.4,93 160,146 209.4,93\"/><polygon class=\"ln\" points=\"133.8,40.1 35,146 285,146\"/><line class=\"ln\" x1=\"84.4\" y1=\"93\" x2=\"160\" y2=\"146\"/><line class=\"ln\" x1=\"160\" y1=\"146\" x2=\"209.4\" y2=\"93\"/><line class=\"ln\" x1=\"209.4\" y1=\"93\" x2=\"84.4\" y2=\"93\"/><path class=\"thin\" d=\"M105.4 63.2 L112.7 70\"/><path class=\"thin\" d=\"M56 116.1 L63.3 122.9\"/><path class=\"thin\" d=\"M181 116.1 L188.3 122.9\"/><path class=\"thin\" d=\"M95.5 151 L95.5 141 M99.5 151 L99.5 141\"/><path class=\"thin\" d=\"M220.5 151 L220.5 141 M224.5 151 L224.5 141\"/><path class=\"thin\" d=\"M144.9 98 L144.9 88 M148.9 98 L148.9 88\"/><path class=\"thin\" d=\"M253.3 117.7 L247.6 125.9 M250.1 115.4 L244.3 123.6 M246.8 113.1 L241 121.3\"/><path class=\"thin\" d=\"M177.7 64.8 L172 73 M174.4 62.5 L168.7 70.7 M171.2 60.2 L165.4 68.4\"/><path class=\"thin\" d=\"M128.3 117.7 L122.6 125.9 M125.1 115.4 L119.3 123.6 M121.8 113.1 L116 121.3\"/><circle class=\"dt\" cx=\"133.8\" cy=\"40.1\" r=\"3\"/><circle class=\"dt\" cx=\"35\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"285\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"84.4\" cy=\"93\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"209.4\" cy=\"93\" r=\"3\"/><text x=\"130.9\" y=\"33.4\" text-anchor=\"middle\">A</text><text x=\"22.6\" y=\"154.8\" text-anchor=\"middle\">B</text><text x=\"297.6\" y=\"154.3\" text-anchor=\"middle\">C</text><text x=\"71.8\" y=\"94.7\" text-anchor=\"middle\">D</text><text x=\"163.1\" y=\"163.6\" text-anchor=\"middle\">E</text><text x=\"221.8\" y=\"94.3\" text-anchor=\"middle\">F</text></svg></figure><p class=\"geo-given\">A stained glass panel is the triangle <strong>ABC</strong>. Lead strips join <strong>D</strong>, <strong>E</strong> and <strong>F</strong>, the midpoints of its sides, to make four small pieces. Matching tick marks show congruent segments.</p>",
      claims: [
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which criterion do the tick marks support for △ADF ≅ △DBE?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "ASA" },
            { letter: "C", text: "SSS" },
            { letter: "D", text: "HL" }
          ],
          correct: "C"
        },
        {
          id: "match",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "In the congruence △ADF ≅ △DBE, which angle matches ∠DFA?",
          choices: [
            { letter: "A", text: "∠BED" },
            { letter: "B", text: "∠DBE" },
            { letter: "C", text: "∠BDE" },
            { letter: "D", text: "∠FDA" }
          ],
          correct: "A"
        },
        {
          id: "strip",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "FA = (3x − 4) cm and ED = (x + 12) cm. How long is the lead strip ED?",
          choices: [
            { letter: "A", text: "8 cm" },
            { letter: "B", text: "40 cm" },
            { letter: "C", text: "16 cm" },
            { letter: "D", text: "20 cm" }
          ],
          correct: "D"
        },
        {
          id: "angle",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠BAC = 98°. What is m∠DEF in the middle piece?",
          choices: [
            { letter: "A", text: "82°" },
            { letter: "B", text: "98°" },
            { letter: "C", text: "49°" },
            { letter: "D", text: "41°" }
          ],
          correct: "B"
        },
        {
          id: "sas",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose the marks showed only AD ≅ DB and DF ≅ BE. Which one more fact would prove △ADF ≅ △DBE by SAS?",
          choices: [
            { letter: "A", text: "∠ADF ≅ ∠DBE" },
            { letter: "B", text: "∠DAF ≅ ∠BDE" },
            { letter: "C", text: "∠AFD ≅ ∠DEB" },
            { letter: "D", text: "FA ≅ ED" }
          ],
          correct: "A"
        },
        {
          id: "theo",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Theo says SSS gives △ADF ≅ △DBE, so ∠DAF ≅ ∠DBE. Is he right? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; CPCTC matches ∠DAF with ∠DBE" },
            { letter: "B", text: "No; ∠DAF matches ∠BDE" },
            { letter: "C", text: "No; SSS does not prove congruence" },
            { letter: "D", text: "Yes; all angles in the panel match" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr2-ring-earrings",
      family: "GEO",
      mode: "ring",
      title: "Two Earrings, One Recipe",
      kind: "Triangles · G.TR.2",
      blurb: "Two earrings cut from the same three measurements do not match.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 158\" role=\"img\" aria-label=\"Two shaded triangles hang from small hooks at B and E. Triangle ABC is wide and triangle DEF is narrow. AB and DE have one tick mark, BC and EF have two tick marks, and angles A and D have one arc\"><polygon class=\"sh2\" points=\"18,140 121.2,67.7 164,140\"/><polygon class=\"sh2\" points=\"182,140 285.2,67.7 242.4,140\"/><circle class=\"thin\" cx=\"121.2\" cy=\"59.7\" r=\"5\"/><circle class=\"thin\" cx=\"285.2\" cy=\"59.7\" r=\"5\"/><path class=\"thin\" d=\"M72.5 108 L66.7 99.8\"/><path class=\"thin\" d=\"M236.5 108 L230.8 99.8\"/><path class=\"thin\" d=\"M137.3 104.7 L145.9 99.6 M139.3 108.1 L147.9 103\"/><path class=\"thin\" d=\"M260.6 99.6 L269.2 104.7 M258.5 103 L267.1 108.1\"/><path class=\"thin\" d=\"M38 140 A20 20 0 0 0 34.4 128.5\"/><path class=\"thin\" d=\"M202 140 A20 20 0 0 0 198.4 128.5\"/><circle class=\"dt\" cx=\"18\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"121.2\" cy=\"67.7\" r=\"3\"/><circle class=\"dt\" cx=\"164\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"182\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"285.2\" cy=\"67.7\" r=\"3\"/><circle class=\"dt\" cx=\"242.4\" cy=\"140\" r=\"3\"/><text x=\"5.5\" y=\"148.6\" text-anchor=\"middle\">A</text><text x=\"107.2\" y=\"68.7\" text-anchor=\"middle\">B</text><text x=\"176.2\" y=\"149.6\" text-anchor=\"middle\">C</text><text x=\"171\" y=\"149.8\" text-anchor=\"middle\">D</text><text x=\"299.2\" y=\"68.7\" text-anchor=\"middle\">E</text><text x=\"245.5\" y=\"157.6\" text-anchor=\"middle\">F</text></svg></figure><p class=\"geo-given\">A jeweler cuts two triangular earrings, <strong>△ABC</strong> and <strong>△DEF</strong>, from one recipe: AB = DE = 30 mm, BC = EF = 20 mm and m∠A = m∠D = 35°. The earrings come out different shapes.</p>",
      claims: [
        {
          id: "marks",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Do the marks prove △ABC ≅ △DEF? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; SAS, since ∠A is between AB and BC" },
            { letter: "B", text: "Yes; HL, since both are right triangles" },
            { letter: "C", text: "No; SSA can fit two different triangles" },
            { letter: "D", text: "No; no pair of angles is marked congruent" }
          ],
          correct: "C"
        },
        {
          id: "notEnough",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "For a new pair, the jeweler matches AB ≅ DE and ∠A ≅ ∠D. Which added fact would still NOT prove the new pair congruent?",
          choices: [
            { letter: "A", text: "AC ≅ DF" },
            { letter: "B", text: "∠B ≅ ∠E" },
            { letter: "C", text: "∠C ≅ ∠F" },
            { letter: "D", text: "BC ≅ EF" }
          ],
          correct: "D"
        },
        {
          id: "contra",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "m∠C ≈ 59° and m∠F ≈ 121°. Jo assumes △ABC ≅ △DEF, to show that it is false. Which fact gives her contradiction?",
          choices: [
            { letter: "A", text: "CPCTC gives ∠C ≅ ∠F, but 59° ≠ 121°" },
            { letter: "B", text: "CPCTC gives ∠A ≅ ∠F, but 35° ≠ 121°" },
            { letter: "C", text: "CPCTC gives AB ≅ EF, but 30 mm ≠ 20 mm" },
            { letter: "D", text: "∠C and ∠F add to 180°, so they are congruent" }
          ],
          correct: "A"
        },
        {
          id: "n",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Another earring is cut so that △GHJ ≅ △ABC. GH = (4n − 6) mm. What is n?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "9" },
            { letter: "C", text: "7.5" },
            { letter: "D", text: "36" }
          ],
          correct: "B"
        },
        {
          id: "side",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Another earring is cut so that △GHJ ≅ △ABC. Which side of △GHJ must be 20 mm long?",
          choices: [
            { letter: "A", text: "GH" },
            { letter: "B", text: "HJ" },
            { letter: "C", text: "GJ" },
            { letter: "D", text: "None; SSA leaves it unknown" }
          ],
          correct: "B"
        },
        {
          id: "enough",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which set of facts about two earrings is enough to prove them congruent?",
          choices: [
            { letter: "A", text: "Two sides and an angle not between them" },
            { letter: "B", text: "All three pairs of angles" },
            { letter: "C", text: "One side and the angle next to it" },
            { letter: "D", text: "Two angles and the side between them" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr2-ring-guitar-picks",
      family: "GEO",
      mode: "ring",
      title: "Guitar Picks on the Design Grid",
      kind: "Triangles · G.TR.2",
      blurb: "A designer copies a guitar pick to the other side of the grid.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 148\" role=\"img\" aria-label=\"A coordinate grid from 0 to 20 across and 0 to 8 up, with triangle ABC at A(1, 2), B(5, 1), C(4, 7) and triangle XYZ at X(16, 1), Y(19, 6), Z(15, 7)\"><line class=\"gr\" x1=\"20\" y1=\"128\" x2=\"20\" y2=\"16\"/><line class=\"gr\" x1=\"34\" y1=\"128\" x2=\"34\" y2=\"16\"/><line class=\"gr\" x1=\"48\" y1=\"128\" x2=\"48\" y2=\"16\"/><line class=\"gr\" x1=\"62\" y1=\"128\" x2=\"62\" y2=\"16\"/><line class=\"gr\" x1=\"76\" y1=\"128\" x2=\"76\" y2=\"16\"/><line class=\"gr\" x1=\"90\" y1=\"128\" x2=\"90\" y2=\"16\"/><line class=\"gr\" x1=\"104\" y1=\"128\" x2=\"104\" y2=\"16\"/><line class=\"gr\" x1=\"118\" y1=\"128\" x2=\"118\" y2=\"16\"/><line class=\"gr\" x1=\"132\" y1=\"128\" x2=\"132\" y2=\"16\"/><line class=\"gr\" x1=\"146\" y1=\"128\" x2=\"146\" y2=\"16\"/><line class=\"gr\" x1=\"160\" y1=\"128\" x2=\"160\" y2=\"16\"/><line class=\"gr\" x1=\"174\" y1=\"128\" x2=\"174\" y2=\"16\"/><line class=\"gr\" x1=\"188\" y1=\"128\" x2=\"188\" y2=\"16\"/><line class=\"gr\" x1=\"202\" y1=\"128\" x2=\"202\" y2=\"16\"/><line class=\"gr\" x1=\"216\" y1=\"128\" x2=\"216\" y2=\"16\"/><line class=\"gr\" x1=\"230\" y1=\"128\" x2=\"230\" y2=\"16\"/><line class=\"gr\" x1=\"244\" y1=\"128\" x2=\"244\" y2=\"16\"/><line class=\"gr\" x1=\"258\" y1=\"128\" x2=\"258\" y2=\"16\"/><line class=\"gr\" x1=\"272\" y1=\"128\" x2=\"272\" y2=\"16\"/><line class=\"gr\" x1=\"286\" y1=\"128\" x2=\"286\" y2=\"16\"/><line class=\"gr\" x1=\"300\" y1=\"128\" x2=\"300\" y2=\"16\"/><line class=\"gr\" x1=\"20\" y1=\"128\" x2=\"300\" y2=\"128\"/><line class=\"gr\" x1=\"20\" y1=\"114\" x2=\"300\" y2=\"114\"/><line class=\"gr\" x1=\"20\" y1=\"100\" x2=\"300\" y2=\"100\"/><line class=\"gr\" x1=\"20\" y1=\"86\" x2=\"300\" y2=\"86\"/><line class=\"gr\" x1=\"20\" y1=\"72\" x2=\"300\" y2=\"72\"/><line class=\"gr\" x1=\"20\" y1=\"58\" x2=\"300\" y2=\"58\"/><line class=\"gr\" x1=\"20\" y1=\"44\" x2=\"300\" y2=\"44\"/><line class=\"gr\" x1=\"20\" y1=\"30\" x2=\"300\" y2=\"30\"/><line class=\"gr\" x1=\"20\" y1=\"16\" x2=\"300\" y2=\"16\"/><line class=\"ax\" x1=\"20\" y1=\"128\" x2=\"20\" y2=\"16\"/><line class=\"ax\" x1=\"20\" y1=\"128\" x2=\"300\" y2=\"128\"/><text class=\"sm\" x=\"20\" y=\"143\" text-anchor=\"middle\">0</text><text class=\"sm\" x=\"90\" y=\"143\" text-anchor=\"middle\">5</text><text class=\"sm\" x=\"160\" y=\"143\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"230\" y=\"143\" text-anchor=\"middle\">15</text><text class=\"sm\" x=\"300\" y=\"143\" text-anchor=\"middle\">20</text><text class=\"sm\" x=\"11\" y=\"76\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"11\" y=\"20\" text-anchor=\"middle\">8</text><polygon class=\"sh2\" points=\"34,100 90,114 76,30\"/><polygon class=\"ln\" points=\"34,100 90,114 76,30\"/><polygon class=\"sh\" points=\"244,114 286,44 230,30\"/><polygon class=\"ln\" points=\"244,114 286,44 230,30\"/><circle class=\"dt\" cx=\"34\" cy=\"100\" r=\"3\"/><circle class=\"dt\" cx=\"90\" cy=\"114\" r=\"3\"/><circle class=\"dt\" cx=\"76\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"244\" cy=\"114\" r=\"3\"/><circle class=\"dt\" cx=\"286\" cy=\"44\" r=\"3\"/><circle class=\"dt\" cx=\"230\" cy=\"30\" r=\"3\"/><text x=\"23.6\" y=\"111\" text-anchor=\"middle\">A</text><text x=\"97\" y=\"128.8\" text-anchor=\"middle\">B</text><text x=\"78.1\" y=\"23.2\" text-anchor=\"middle\">C</text><text x=\"241.9\" y=\"130.8\" text-anchor=\"middle\">X</text><text x=\"296.4\" y=\"43\" text-anchor=\"middle\">Y</text><text x=\"223\" y=\"25.2\" text-anchor=\"middle\">Z</text></svg></figure><p class=\"geo-given\">A designer draws a guitar pick <strong>△ABC</strong> on a grid and turns a copy, <strong>△YZX</strong>, halfway around. The corners are <strong>A</strong>(1, 2), <strong>B</strong>(5, 1), <strong>C</strong>(4, 7), <strong>X</strong>(16, 1), <strong>Y</strong>(19, 6) and <strong>Z</strong>(15, 7).</p>",
      claims: [
        {
          id: "ac",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "What is the length of AC, in grid units?",
          choices: [
            { letter: "A", text: "34" },
            { letter: "B", text: "8" },
            { letter: "C", text: "4" },
            { letter: "D", text: "√34" }
          ],
          correct: "D"
        },
        {
          id: "rosa",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Rosa finds AB = √17 and XY = √34, so she says the picks are not congruent. What is her error?",
          choices: [
            { letter: "A", text: "√17 and √34 are equal" },
            { letter: "B", text: "XY is really √17" },
            { letter: "C", text: "AB matches YZ, not XY" },
            { letter: "D", text: "She must compare angles, not sides" }
          ],
          correct: "C"
        },
        {
          id: "sss",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Kai knows only AB = YZ and BC = ZX. Which added fact would prove the picks congruent by SSS?",
          choices: [
            { letter: "A", text: "∠B ≅ ∠Z" },
            { letter: "B", text: "AC = XY" },
            { letter: "C", text: "AC = YZ" },
            { letter: "D", text: "AB = XY" }
          ],
          correct: "B"
        },
        {
          id: "per",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "To the nearest tenth, what is the perimeter of △XYZ, in grid units?",
          choices: [
            { letter: "A", text: "16.0" },
            { letter: "B", text: "88.0" },
            { letter: "C", text: "20.0" },
            { letter: "D", text: "9.4" }
          ],
          correct: "A"
        },
        {
          id: "angZ",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠ABC ≈ 66.5°. To the nearest tenth of a degree, what is m∠YZX?",
          choices: [
            { letter: "A", text: "23.5°" },
            { letter: "B", text: "113.5°" },
            { letter: "C", text: "33.3°" },
            { letter: "D", text: "66.5°" }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which reason shows △YZX ≅ △ABC without measuring any angles?",
          choices: [
            { letter: "A", text: "SSS: all three pairs of sides match" },
            { letter: "B", text: "SAS: two sides and the angle between" },
            { letter: "C", text: "AAA: all three angles match" },
            { letter: "D", text: "HL: both are right triangles" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr2-ring-stage-flat",
      family: "GEO",
      mode: "ring",
      title: "Slats on the Stage Flat",
      kind: "Triangles · G.TR.2",
      blurb: "Two slats brace a triangular stage flat. Finish the proof.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Triangle ABC with M on BC. Segments MD and ME run to D on AB and E on AC. BD and CE have one tick mark; BM and MC have two tick marks\"><polygon class=\"sh2\" points=\"160,24.9 55,150 265,150\"/><polygon class=\"ln\" points=\"160,24.9 55,150 265,150\"/><line class=\"ln\" x1=\"160\" y1=\"150\" x2=\"112.2\" y2=\"81.8\"/><line class=\"ln\" x1=\"160\" y1=\"150\" x2=\"207.8\" y2=\"81.8\"/><path class=\"thin\" d=\"M87.4 119.1 L79.8 112.7\"/><path class=\"thin\" d=\"M240.2 112.7 L232.6 119.1\"/><path class=\"thin\" d=\"M105.5 155 L105.5 145 M109.5 155 L109.5 145\"/><path class=\"thin\" d=\"M210.5 155 L210.5 145 M214.5 155 L214.5 145\"/><circle class=\"dt\" cx=\"160\" cy=\"24.9\" r=\"3\"/><circle class=\"dt\" cx=\"55\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"265\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"112.2\" cy=\"81.8\" r=\"3\"/><circle class=\"dt\" cx=\"207.8\" cy=\"81.8\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"150\" r=\"3\"/><text x=\"160\" y=\"17.9\" text-anchor=\"middle\">A</text><text x=\"43\" y=\"163\" text-anchor=\"middle\">B</text><text x=\"277\" y=\"163\" text-anchor=\"middle\">C</text><text x=\"160\" y=\"168\" text-anchor=\"middle\">M</text><text x=\"99.2\" y=\"84.8\" text-anchor=\"middle\">D</text><text x=\"220.8\" y=\"84.8\" text-anchor=\"middle\">E</text></svg></figure><p class=\"geo-given\">A stage flat for the school play is the triangle <strong>ABC</strong>, with AB ≅ AC. <strong>M</strong> is the midpoint of BC. Slats <strong>MD</strong> and <strong>ME</strong> reach the sides at D and E, with BD ≅ CE. Prove that MD ≅ ME.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. AB ≅ AC; M is the midpoint of BC; BD ≅ CE</td><td>Given</td></tr><tr><td>2. ∠B ≅ ∠C</td><td>(a) ____</td></tr><tr><td>3. BM ≅ CM</td><td>Definition of midpoint</td></tr><tr><td>4. △DBM ≅ △ECM</td><td>(b) ____</td></tr><tr><td>5. MD ≅ ME</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 2, ∠B ≅ ∠C (blank a)?",
          choices: [
            { letter: "A", text: "Base Angles Theorem" },
            { letter: "B", text: "Converse of the Base Angles Theorem" },
            { letter: "C", text: "Vertical Angles Theorem" },
            { letter: "D", text: "Third Angles Theorem" }
          ],
          correct: "A"
        },
        {
          id: "blankB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 4, △DBM ≅ △ECM (blank b)?",
          choices: [
            { letter: "A", text: "SSA" },
            { letter: "B", text: "ASA" },
            { letter: "C", text: "HL" },
            { letter: "D", text: "SAS" }
          ],
          correct: "D"
        },
        {
          id: "md",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "MD = (5y − 7) ft and ME = (2y + 8) ft. How long is slat MD?",
          choices: [
            { letter: "A", text: "5 ft" },
            { letter: "B", text: "18 ft" },
            { letter: "C", text: "36 ft" },
            { letter: "D", text: "32 ft" }
          ],
          correct: "B"
        },
        {
          id: "dme",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠BMD = 55°. What is m∠DME, the angle between the slats?",
          choices: [
            { letter: "A", text: "55°" },
            { letter: "B", text: "125°" },
            { letter: "C", text: "70°" },
            { letter: "D", text: "110°" }
          ],
          correct: "C"
        },
        {
          id: "asa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which pair of facts, with BM ≅ CM, would prove △DBM ≅ △ECM by ASA?",
          choices: [
            { letter: "A", text: "∠B ≅ ∠C and BD ≅ CE" },
            { letter: "B", text: "∠BDM ≅ ∠CEM and ∠B ≅ ∠C" },
            { letter: "C", text: "∠B ≅ ∠C and ∠BMD ≅ ∠CME" },
            { letter: "D", text: "BD ≅ CE and MD ≅ ME" }
          ],
          correct: "C"
        },
        {
          id: "cpctc",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Which statement follows from step 4 by CPCTC?",
          choices: [
            { letter: "A", text: "∠BDM ≅ ∠CEM" },
            { letter: "B", text: "∠BDM ≅ ∠CME" },
            { letter: "C", text: "∠DMB ≅ ∠MEC" },
            { letter: "D", text: "MD ≅ MC" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr2-ring-origami-fold",
      family: "GEO",
      mode: "ring",
      title: "The Origami Corner Fold",
      kind: "Triangles · G.TR.2",
      blurb: "One corner of a paper rectangle is folded onto the opposite edge.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Rectangle ABCD with corner B folded along a dashed crease AE, E on BC, so that B lands at F on DC. The shaded flap is triangle AFE with a right-angle mark at F; dashed segments show where AB and BE were\"><polygon class=\"sh2\" points=\"90,20 230,90 230,132 90,132\"/><line class=\"thin dash\" x1=\"90\" y1=\"20\" x2=\"230\" y2=\"20\"/><line class=\"thin dash\" x1=\"230\" y1=\"20\" x2=\"230\" y2=\"90\"/><polygon class=\"sh\" points=\"90,20 174,132 230,90\"/><line class=\"ln dash\" x1=\"90\" y1=\"20\" x2=\"230\" y2=\"90\"/><line class=\"ln\" x1=\"230\" y1=\"90\" x2=\"230\" y2=\"132\"/><line class=\"ln\" x1=\"230\" y1=\"132\" x2=\"90\" y2=\"132\"/><line class=\"ln\" x1=\"90\" y1=\"132\" x2=\"90\" y2=\"20\"/><line class=\"ln\" x1=\"90\" y1=\"20\" x2=\"174\" y2=\"132\"/><line class=\"ln\" x1=\"174\" y1=\"132\" x2=\"230\" y2=\"90\"/><path class=\"thin\" d=\"M169.2 125.6 L175.6 120.8 L180.4 127.2\"/><path class=\"thin\" d=\"M90 124 L98 124 L98 132\"/><path class=\"thin\" d=\"M222 132 L222 124 L230 124\"/><path class=\"thin\" d=\"M222 20 L222 28 L230 28\"/><circle class=\"dt\" cx=\"90\" cy=\"20\" r=\"3\"/><circle class=\"dt\" cx=\"230\" cy=\"20\" r=\"3\"/><circle class=\"dt\" cx=\"230\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"90\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"230\" cy=\"90\" r=\"3\"/><circle class=\"dt\" cx=\"174\" cy=\"132\" r=\"3\"/><text x=\"79\" y=\"19\" text-anchor=\"middle\">A</text><text x=\"241\" y=\"19\" text-anchor=\"middle\">B</text><text x=\"241\" y=\"146\" text-anchor=\"middle\">C</text><text x=\"79\" y=\"146\" text-anchor=\"middle\">D</text><text x=\"243\" y=\"95\" text-anchor=\"middle\">E</text><text x=\"174\" y=\"150\" text-anchor=\"middle\">F</text></svg></figure><p class=\"geo-given\">A sheet of origami paper is the rectangle <strong>ABCD</strong>, with AB = 10 cm and AD = 8 cm. Corner <strong>B</strong> is folded along the crease <strong>AE</strong>, with E on BC, so that B lands at <strong>F</strong> on DC. Folding does not stretch the paper.</p>",
      claims: [
        {
          id: "sss",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Folding does not stretch the paper, so AF = AB and EF = EB. With the shared crease AE, which criterion proves △ABE ≅ △AFE?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "SSS" },
            { letter: "C", text: "SSA" },
            { letter: "D", text: "AAS" }
          ],
          correct: "B"
        },
        {
          id: "hl",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Lin uses only the right angles at B and F, the shared crease AE and AB = AF. Which criterion is she using?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "SSA" },
            { letter: "C", text: "ASA" },
            { letter: "D", text: "HL" }
          ],
          correct: "D"
        },
        {
          id: "df",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "How far is F from corner D (the length DF)?",
          choices: [
            { letter: "A", text: "2 cm" },
            { letter: "B", text: "4 cm" },
            { letter: "C", text: "6 cm" },
            { letter: "D", text: "12.8 cm" }
          ],
          correct: "C"
        },
        {
          id: "be",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "How long is BE? Use EF = EB and the right angle at C in △ECF.",
          choices: [
            { letter: "A", text: "5 cm" },
            { letter: "B", text: "3 cm" },
            { letter: "C", text: "4 cm" },
            { letter: "D", text: "6 cm" }
          ],
          correct: "A"
        },
        {
          id: "bae",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠DAF ≈ 36.9°. To the nearest tenth of a degree, what is m∠BAE?",
          choices: [
            { letter: "A", text: "53.1°" },
            { letter: "B", text: "36.9°" },
            { letter: "C", text: "26.6°" },
            { letter: "D", text: "71.6°" }
          ],
          correct: "C"
        },
        {
          id: "right",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Why is ∠AFE a right angle?",
          choices: [
            { letter: "A", text: "F is a corner of the rectangle" },
            { letter: "B", text: "It matches ∠ABE by CPCTC" },
            { letter: "C", text: "AF is perpendicular to DC" },
            { letter: "D", text: "Vertical angles are congruent" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr2-ring-logo",
      family: "GEO",
      mode: "ring",
      title: "The Two-Triangle Logo",
      kind: "Triangles · G.TR.2",
      blurb: "Two equilateral triangles side by side, two long strokes, and a proof.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Points A, B and C on a line. Triangle ABD stands on AB and triangle BCE stands on BC, on the same side. The sides of ABD have one tick mark each and the sides of BCE have two tick marks each. Segments AE and DC are drawn and cross\"><polygon class=\"sh2\" points=\"32,142 151,142 91.5,38.9\"/><polygon class=\"sh2\" points=\"151,142 287,142 219,24.2\"/><line class=\"thin\" x1=\"14\" y1=\"142\" x2=\"306\" y2=\"142\"/><polygon class=\"ln\" points=\"32,142 151,142 91.5,38.9\"/><polygon class=\"ln\" points=\"151,142 287,142 219,24.2\"/><line class=\"ln\" x1=\"32\" y1=\"142\" x2=\"219\" y2=\"24.2\"/><line class=\"ln\" x1=\"91.5\" y1=\"38.9\" x2=\"287\" y2=\"142\"/><path class=\"thin\" d=\"M91.5 147 L91.5 137\"/><path class=\"thin\" d=\"M125.6 88 L116.9 93\"/><path class=\"thin\" d=\"M66.1 93 L57.4 88\"/><path class=\"thin\" d=\"M217 147 L217 137 M221 147 L221 137\"/><path class=\"thin\" d=\"M258.3 82.3 L249.7 87.3 M256.3 78.9 L247.7 83.9\"/><path class=\"thin\" d=\"M188.3 87.3 L179.7 82.3 M190.3 83.9 L181.7 78.9\"/><circle class=\"dt\" cx=\"32\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"151\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"287\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"91.5\" cy=\"38.9\" r=\"3\"/><circle class=\"dt\" cx=\"219\" cy=\"24.2\" r=\"3\"/><text x=\"32\" y=\"161\" text-anchor=\"middle\">A</text><text x=\"151\" y=\"161\" text-anchor=\"middle\">B</text><text x=\"287\" y=\"161\" text-anchor=\"middle\">C</text><text x=\"82.5\" y=\"34.9\" text-anchor=\"middle\">D</text><text x=\"228\" y=\"20.2\" text-anchor=\"middle\">E</text></svg></figure><p class=\"geo-given\">A music label's logo has two equilateral triangles, <strong>△ABD</strong> and <strong>△BCE</strong>, on the same side of segment AC, with <strong>B</strong> on AC. Long strokes <strong>AE</strong> and <strong>DC</strong> are drawn. Prove that AE ≅ DC.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. △ABD and △BCE are equilateral; B is on AC</td><td>Given</td></tr><tr><td>2. AB ≅ DB; BE ≅ BC</td><td>Definition of equilateral triangle</td></tr><tr><td>3. m∠ABD = m∠EBC = 60°</td><td>Each angle of an equilateral triangle is 60°</td></tr><tr><td>4. m∠ABE = m∠DBC = 120°</td><td>(a) ____</td></tr><tr><td>5. △ABE ≅ △DBC</td><td>(b) ____</td></tr><tr><td>6. AE ≅ DC</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 4, m∠ABE = m∠DBC = 120° (blank a)?",
          choices: [
            { letter: "A", text: "Vertical angles are congruent" },
            { letter: "B", text: "Base angles of an isosceles triangle match" },
            { letter: "C", text: "Angles in a linear pair add to 180°" },
            { letter: "D", text: "Angles of a triangle add to 180°" }
          ],
          correct: "C"
        },
        {
          id: "blankB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 5, △ABE ≅ △DBC (blank b)?",
          choices: [
            { letter: "A", text: "ASA" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "SSS" },
            { letter: "D", text: "AAS" }
          ],
          correct: "B"
        },
        {
          id: "ae",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AE = (2k + 10) cm and DC = (5k − 14) cm. How long is stroke AE?",
          choices: [
            { letter: "A", text: "8 cm" },
            { letter: "B", text: "52 cm" },
            { letter: "C", text: "24 cm" },
            { letter: "D", text: "26 cm" }
          ],
          correct: "D"
        },
        {
          id: "bdc",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠BAE ≈ 32.2°. To the nearest tenth of a degree, what is m∠BDC?",
          choices: [
            { letter: "A", text: "32.2°" },
            { letter: "B", text: "27.8°" },
            { letter: "C", text: "57.8°" },
            { letter: "D", text: "147.8°" }
          ],
          correct: "A"
        },
        {
          id: "assume",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "A second logo has equilateral △ABD, B on AC and BE ≅ BC, but AE = 26 cm and DC = 25 cm. To prove indirectly that m∠EBC ≠ 60°, what should you assume first?",
          choices: [
            { letter: "A", text: "m∠EBC ≠ 60°" },
            { letter: "B", text: "AE = DC" },
            { letter: "C", text: "△ABD is not equilateral" },
            { letter: "D", text: "m∠EBC = 60°" }
          ],
          correct: "D"
        },
        {
          id: "contra",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "A second logo has equilateral △ABD, B on AC and BE ≅ BC, but AE = 26 cm and DC = 25 cm. Jo assumes m∠EBC = 60°. Which result gives her contradiction?",
          choices: [
            { letter: "A", text: "Linear pairs give m∠ABE = 60°, not 120°" },
            { letter: "B", text: "SSS gives △ABE ≅ △DBC, but 26 ≠ 25" },
            { letter: "C", text: "SAS and CPCTC give AE = DC, but 26 ≠ 25" },
            { letter: "D", text: "△BCE is equilateral, so BE ≠ BC" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr2-ring-framing-square",
      family: "GEO",
      mode: "ring",
      title: "The Framing Square Jig",
      kind: "Triangles · G.TR.2",
      blurb: "A carpenter's square sits on a board edge. Prove two triangles congruent.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A board edge through B, C and D. Gold segments CA and CE, each with one tick mark, form a right angle at C. AB and ED are perpendicular to the edge, with right-angle marks at B and D\"><rect class=\"sh2\" x=\"14\" y=\"140\" width=\"292\" height=\"14\"/><line class=\"ln\" x1=\"14\" y1=\"140\" x2=\"306\" y2=\"140\"/><line class=\"ln\" x1=\"32\" y1=\"59\" x2=\"32\" y2=\"140\"/><line class=\"ln\" x1=\"221\" y1=\"32\" x2=\"221\" y2=\"140\"/><line class=\"ac\" x1=\"140\" y1=\"140\" x2=\"32\" y2=\"59\"/><line class=\"ac\" x1=\"140\" y1=\"140\" x2=\"221\" y2=\"32\"/><path class=\"thin\" d=\"M32 132 L40 132 L40 140\"/><path class=\"thin\" d=\"M221 132 L213 132 L213 140\"/><path class=\"thin\" d=\"M132.8 134.6 L138.2 127.4 L145.4 132.8\"/><path class=\"thin\" d=\"M89 95.5 L83 103.5\"/><path class=\"thin\" d=\"M184.5 89 L176.5 83\"/><circle class=\"dt\" cx=\"32\" cy=\"59\" r=\"3\"/><circle class=\"dt\" cx=\"32\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"140\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"221\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"221\" cy=\"32\" r=\"3\"/><text x=\"22\" y=\"58\" text-anchor=\"middle\">A</text><text x=\"32\" y=\"158\" text-anchor=\"middle\">B</text><text x=\"140\" y=\"158\" text-anchor=\"middle\">C</text><text x=\"221\" y=\"158\" text-anchor=\"middle\">D</text><text x=\"231\" y=\"31\" text-anchor=\"middle\">E</text></svg></figure><p class=\"geo-given\">In a woodshop jig, the corner <strong>C</strong> of a framing square sits on a straight board edge <strong>BD</strong>. Its arms <strong>CA</strong> and <strong>CE</strong> are congruent and meet at a right angle. <strong>AB</strong> and <strong>ED</strong> are perpendicular to the edge. Prove that △ABC ≅ △CDE.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. ∠ACE is a right angle; AB ⊥ BD; ED ⊥ BD; CA ≅ CE</td><td>Given</td></tr><tr><td>2. ∠B and ∠D are right angles</td><td>Definition of perpendicular lines</td></tr><tr><td>3. m∠ACB + m∠ECD = 90°</td><td>B, C, D are on a line and m∠ACE = 90°</td></tr><tr><td>4. m∠BAC + m∠ACB = 90°</td><td>Acute angles of a right triangle are complementary</td></tr><tr><td>5. ∠BAC ≅ ∠DCE</td><td>(a) ____</td></tr><tr><td>6. △ABC ≅ △CDE</td><td>(b) ____</td></tr><tr><td>7. AB ≅ CD; BC ≅ DE</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 5, ∠BAC ≅ ∠DCE (blank a)?",
          choices: [
            { letter: "A", text: "Vertical Angles Theorem" },
            { letter: "B", text: "Congruent Complements Theorem" },
            { letter: "C", text: "Congruent Supplements Theorem" },
            { letter: "D", text: "Alternate Interior Angles Theorem" }
          ],
          correct: "B"
        },
        {
          id: "blankB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 6, △ABC ≅ △CDE (blank b), using the parts in steps 1, 2 and 5?",
          choices: [
            { letter: "A", text: "AAS" },
            { letter: "B", text: "ASA" },
            { letter: "C", text: "HL" },
            { letter: "D", text: "SAS" }
          ],
          correct: "A"
        },
        {
          id: "bd",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AB = 9 in. and BC = 12 in. How far apart are B and D?",
          choices: [
            { letter: "A", text: "24 in." },
            { letter: "B", text: "30 in." },
            { letter: "C", text: "21 in." },
            { letter: "D", text: "15 in." }
          ],
          correct: "C"
        },
        {
          id: "t",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "AB = (3t − 6) in. and CD = (t + 4) in. What is t?",
          choices: [
            { letter: "A", text: "−1" },
            { letter: "B", text: "2.5" },
            { letter: "C", text: "10" },
            { letter: "D", text: "5" }
          ],
          correct: "D"
        },
        {
          id: "sas",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose you knew AB ≅ CD and BC ≅ DE, along with the right angles at B and D. Which criterion proves △ABC ≅ △CDE?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "HL" },
            { letter: "C", text: "SSS" },
            { letter: "D", text: "ASA" }
          ],
          correct: "A"
        },
        {
          id: "contra",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Another jig has m∠ACE = 90°, AB ⊥ BD and ED ⊥ BD, but AB = 9 in. and CD = 8 in. Sam assumes CA = CE. Which result contradicts the facts?",
          choices: [
            { letter: "A", text: "CPCTC gives AB = DE, but 9 ≠ 8" },
            { letter: "B", text: "AB ⊥ BD and ED ⊥ BD give AB = ED" },
            { letter: "C", text: "∠BAC ≅ ∠ACB, so CA ≠ CE" },
            { letter: "D", text: "AAS and CPCTC give AB = CD, but 9 ≠ 8" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr2-worms-tree-wires",
      family: "GEO",
      mode: "worms",
      title: "Wires for a Young Tree",
      kind: "Triangles · G.TR.2",
      blurb: "Two support wires hold a young tree from opposite sides.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 165\" role=\"img\" aria-label=\"A vertical tree trunk meets level ground at B, with right-angle marks on both sides. Wire PS runs from P high on the trunk to stake S on the left, 3 ft from B. Wire QT runs from Q low on the trunk to stake T on the right, 8 ft from B\"><circle class=\"sh\" cx=\"150\" cy=\"20\" r=\"14\"/><line class=\"thin\" x1=\"40\" y1=\"140\" x2=\"300\" y2=\"140\"/><line class=\"ln\" x1=\"150\" y1=\"140\" x2=\"150\" y2=\"30\"/><line class=\"ac\" x1=\"150\" y1=\"36\" x2=\"111\" y2=\"140\"/><line class=\"ac\" x1=\"150\" y1=\"101\" x2=\"254\" y2=\"140\"/><path class=\"thin\" d=\"M150 132 L142 132 L142 140\"/><path class=\"thin\" d=\"M158 140 L158 132 L150 132\"/><circle class=\"dt\" cx=\"150\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"150\" cy=\"36\" r=\"3\"/><circle class=\"dt\" cx=\"150\" cy=\"101\" r=\"3\"/><circle class=\"dt\" cx=\"111\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"254\" cy=\"140\" r=\"3\"/><text x=\"162\" y=\"39\" text-anchor=\"middle\">P</text><text x=\"138\" y=\"104\" text-anchor=\"middle\">Q</text><text x=\"150\" y=\"159\" text-anchor=\"middle\">B</text><text x=\"101\" y=\"135\" text-anchor=\"middle\">S</text><text x=\"264\" y=\"135\" text-anchor=\"middle\">T</text><text x=\"126\" y=\"159\" text-anchor=\"middle\">3 ft</text><text x=\"202\" y=\"159\" text-anchor=\"middle\">8 ft</text></svg></figure><p class=\"geo-given\">A young tree stands straight up at <strong>B</strong> on level ground. Wire <strong>PS</strong> runs from <strong>P</strong>, 8 ft up the trunk, to a stake <strong>S</strong> 3 ft from the tree. Wire <strong>QT</strong> runs from <strong>Q</strong>, 3 ft up the trunk, to a stake <strong>T</strong> 8 ft from the tree.</p>",
      claims: [
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which criterion proves △PBS ≅ △TBQ?",
          choices: [
            { letter: "A", text: "HL" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "SSA" },
            { letter: "D", text: "ASA" }
          ],
          correct: "B"
        },
        {
          id: "wire",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "To the nearest tenth of a foot, how long is wire QT?",
          choices: [
            { letter: "A", text: "11.0 ft" },
            { letter: "B", text: "7.4 ft" },
            { letter: "C", text: "5.0 ft" },
            { letter: "D", text: "8.5 ft" }
          ],
          correct: "D"
        },
        {
          id: "angQ",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠BSP ≈ 69.4°. To the nearest tenth of a degree, what is m∠BQT?",
          choices: [
            { letter: "A", text: "20.6°" },
            { letter: "B", text: "110.6°" },
            { letter: "C", text: "69.4°" },
            { letter: "D", text: "34.7°" }
          ],
          correct: "C"
        },
        {
          id: "hl",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose you knew only that BP = BT and that both angles at B are right angles. Which one more fact would prove △PBS ≅ △TBQ by HL?",
          choices: [
            { letter: "A", text: "BS = BQ" },
            { letter: "B", text: "∠BPS ≅ ∠BTQ" },
            { letter: "C", text: "∠BSP ≅ ∠BQT" },
            { letter: "D", text: "PS = TQ" }
          ],
          correct: "D"
        },
        {
          id: "true",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Which statement must be true?",
          choices: [
            { letter: "A", text: "∠BPS ≅ ∠BTQ" },
            { letter: "B", text: "∠BPS ≅ ∠BQT" },
            { letter: "C", text: "PS ∥ QT" },
            { letter: "D", text: "∠BSP ≅ ∠BTQ" }
          ],
          correct: "A"
        },
        {
          id: "jo",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Jo writes △PBS ≅ △QBT. What is wrong with her statement?",
          choices: [
            { letter: "A", text: "Nothing; any order of letters works" },
            { letter: "B", text: "S should match T, since both are stakes" },
            { letter: "C", text: "P should match T, since BP = BT" },
            { letter: "D", text: "The triangles are only similar" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr2-worms-butterfly",
      family: "GEO",
      mode: "worms",
      title: "The Butterfly's Wings",
      kind: "Triangles · G.TR.2",
      blurb: "Two wings meet at the top of a butterfly's body.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 145\" role=\"img\" aria-label=\"A vertical body line from A. Wing triangle ABC on the left and wing triangle ADE on the right meet at A. AB and AD have one tick mark, angles BAC and DAE have one arc, and angles ABC and ADE have two arcs\"><polygon class=\"sh2\" points=\"160,40 32,17.4 90.7,98.2\"/><polygon class=\"sh2\" points=\"160,40 288,17.4 229.3,98.2\"/><polygon class=\"ln\" points=\"160,40 32,17.4 90.7,98.2\"/><polygon class=\"ln\" points=\"160,40 288,17.4 229.3,98.2\"/><line class=\"ln\" x1=\"160\" y1=\"40\" x2=\"160\" y2=\"132\"/><path class=\"thin\" d=\"M96.9 23.8 L95.1 33.6\"/><path class=\"thin\" d=\"M224.9 33.6 L223.1 23.8\"/><path class=\"thin\" d=\"M142.3 36.9 A18 18 0 0 0 146.2 51.6\"/><path class=\"thin\" d=\"M177.7 36.9 A18 18 0 0 1 173.8 51.6\"/><path class=\"thin\" d=\"M51.7 20.9 A20 20 0 0 1 43.7 33.6 M55.6 21.6 A24 24 0 0 1 46.1 36.8\"/><path class=\"thin\" d=\"M268.3 20.9 A20 20 0 0 0 276.3 33.6 M264.4 21.6 A24 24 0 0 0 273.9 36.8\"/><circle class=\"dt\" cx=\"160\" cy=\"40\" r=\"3\"/><circle class=\"dt\" cx=\"32\" cy=\"17.4\" r=\"3\"/><circle class=\"dt\" cx=\"90.7\" cy=\"98.2\" r=\"3\"/><circle class=\"dt\" cx=\"288\" cy=\"17.4\" r=\"3\"/><circle class=\"dt\" cx=\"229.3\" cy=\"98.2\" r=\"3\"/><text x=\"160\" y=\"32\" text-anchor=\"middle\">A</text><text x=\"21.5\" y=\"16.6\" text-anchor=\"middle\">B</text><text x=\"89.7\" y=\"116.2\" text-anchor=\"middle\">C</text><text x=\"298.5\" y=\"16.6\" text-anchor=\"middle\">D</text><text x=\"230.3\" y=\"116.2\" text-anchor=\"middle\">E</text></svg></figure><p class=\"geo-given\">A butterfly's two wings are shaped like <strong>△ABC</strong> and <strong>△ADE</strong>. They meet at <strong>A</strong>, at the top of the body. The marks show AB ≅ AD, ∠BAC ≅ ∠DAE and ∠ABC ≅ ∠ADE.</p>",
      claims: [
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which criterion do the marks support for △ABC ≅ △ADE?",
          choices: [
            { letter: "A", text: "ASA" },
            { letter: "B", text: "AAS" },
            { letter: "C", text: "SAS" },
            { letter: "D", text: "SSA" }
          ],
          correct: "A"
        },
        {
          id: "side",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "The wing edge BC is 3.2 cm long. Which other edge must also be 3.2 cm long?",
          choices: [
            { letter: "A", text: "AE" },
            { letter: "B", text: "AD" },
            { letter: "C", text: "DE" },
            { letter: "D", text: "AC" }
          ],
          correct: "C"
        },
        {
          id: "k",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠ABC = (5k + 4)° and m∠ADE = (3k + 20)°. What is m∠ADE?",
          choices: [
            { letter: "A", text: "8°" },
            { letter: "B", text: "44°" },
            { letter: "C", text: "88°" },
            { letter: "D", text: "136°" }
          ],
          correct: "B"
        },
        {
          id: "sas",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Suppose only AB ≅ AD and ∠BAC ≅ ∠DAE were marked. Which one more fact would prove △ABC ≅ △ADE by SAS?",
          choices: [
            { letter: "A", text: "∠ABC ≅ ∠ADE" },
            { letter: "B", text: "BC ≅ DE" },
            { letter: "C", text: "∠ACB ≅ ∠AED" },
            { letter: "D", text: "AC ≅ AE" }
          ],
          correct: "D"
        },
        {
          id: "after",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "In a proof that △ABC ≅ △ADE, which statement can come only after the triangles are proved congruent?",
          choices: [
            { letter: "A", text: "AB ≅ AD" },
            { letter: "B", text: "BC ≅ DE" },
            { letter: "C", text: "∠BAC ≅ ∠DAE" },
            { letter: "D", text: "∠ABC ≅ ∠ADE" }
          ],
          correct: "B"
        },
        {
          id: "aaa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "A larger butterfly has a wing △PQR whose angles match ∠BAC, ∠ABC and ∠ACB exactly. Which statement is true?",
          choices: [
            { letter: "A", text: "It is congruent by AAA" },
            { letter: "B", text: "It is congruent by ASA" },
            { letter: "C", text: "It is similar, not congruent" },
            { letter: "D", text: "It is neither similar nor congruent" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr2-worms-leaf-prints",
      family: "GEO",
      mode: "worms",
      title: "Leaf Prints in the Nature Journal",
      kind: "Triangles · G.TR.2",
      blurb: "A leaf print is flipped and copied on a grid page.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 154\" role=\"img\" aria-label=\"A coordinate grid from 0 to 18 across and 0 to 8 up, with triangle JKL at J(1, 6), K(7, 7), L(4, 2) and triangle PMN at P(10, 2), M(16, 1), N(13, 6)\"><line class=\"gr\" x1=\"28\" y1=\"134\" x2=\"28\" y2=\"14\"/><line class=\"gr\" x1=\"43\" y1=\"134\" x2=\"43\" y2=\"14\"/><line class=\"gr\" x1=\"58\" y1=\"134\" x2=\"58\" y2=\"14\"/><line class=\"gr\" x1=\"73\" y1=\"134\" x2=\"73\" y2=\"14\"/><line class=\"gr\" x1=\"88\" y1=\"134\" x2=\"88\" y2=\"14\"/><line class=\"gr\" x1=\"103\" y1=\"134\" x2=\"103\" y2=\"14\"/><line class=\"gr\" x1=\"118\" y1=\"134\" x2=\"118\" y2=\"14\"/><line class=\"gr\" x1=\"133\" y1=\"134\" x2=\"133\" y2=\"14\"/><line class=\"gr\" x1=\"148\" y1=\"134\" x2=\"148\" y2=\"14\"/><line class=\"gr\" x1=\"163\" y1=\"134\" x2=\"163\" y2=\"14\"/><line class=\"gr\" x1=\"178\" y1=\"134\" x2=\"178\" y2=\"14\"/><line class=\"gr\" x1=\"193\" y1=\"134\" x2=\"193\" y2=\"14\"/><line class=\"gr\" x1=\"208\" y1=\"134\" x2=\"208\" y2=\"14\"/><line class=\"gr\" x1=\"223\" y1=\"134\" x2=\"223\" y2=\"14\"/><line class=\"gr\" x1=\"238\" y1=\"134\" x2=\"238\" y2=\"14\"/><line class=\"gr\" x1=\"253\" y1=\"134\" x2=\"253\" y2=\"14\"/><line class=\"gr\" x1=\"268\" y1=\"134\" x2=\"268\" y2=\"14\"/><line class=\"gr\" x1=\"283\" y1=\"134\" x2=\"283\" y2=\"14\"/><line class=\"gr\" x1=\"298\" y1=\"134\" x2=\"298\" y2=\"14\"/><line class=\"gr\" x1=\"28\" y1=\"134\" x2=\"298\" y2=\"134\"/><line class=\"gr\" x1=\"28\" y1=\"119\" x2=\"298\" y2=\"119\"/><line class=\"gr\" x1=\"28\" y1=\"104\" x2=\"298\" y2=\"104\"/><line class=\"gr\" x1=\"28\" y1=\"89\" x2=\"298\" y2=\"89\"/><line class=\"gr\" x1=\"28\" y1=\"74\" x2=\"298\" y2=\"74\"/><line class=\"gr\" x1=\"28\" y1=\"59\" x2=\"298\" y2=\"59\"/><line class=\"gr\" x1=\"28\" y1=\"44\" x2=\"298\" y2=\"44\"/><line class=\"gr\" x1=\"28\" y1=\"29\" x2=\"298\" y2=\"29\"/><line class=\"gr\" x1=\"28\" y1=\"14\" x2=\"298\" y2=\"14\"/><line class=\"ax\" x1=\"28\" y1=\"134\" x2=\"28\" y2=\"14\"/><line class=\"ax\" x1=\"28\" y1=\"134\" x2=\"298\" y2=\"134\"/><text class=\"sm\" x=\"28\" y=\"149\" text-anchor=\"middle\">0</text><text class=\"sm\" x=\"103\" y=\"149\" text-anchor=\"middle\">5</text><text class=\"sm\" x=\"178\" y=\"149\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"253\" y=\"149\" text-anchor=\"middle\">15</text><text class=\"sm\" x=\"18\" y=\"78\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"18\" y=\"18\" text-anchor=\"middle\">8</text><polygon class=\"sh\" points=\"43,44 133,29 88,104\"/><polygon class=\"ln\" points=\"43,44 133,29 88,104\"/><polygon class=\"sh2\" points=\"178,104 268,119 223,44\"/><polygon class=\"ln\" points=\"178,104 268,119 223,44\"/><circle class=\"dt\" cx=\"43\" cy=\"44\" r=\"3\"/><circle class=\"dt\" cx=\"133\" cy=\"29\" r=\"3\"/><circle class=\"dt\" cx=\"88\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"178\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"268\" cy=\"119\" r=\"3\"/><circle class=\"dt\" cx=\"223\" cy=\"44\" r=\"3\"/><text x=\"31.6\" y=\"45.2\" text-anchor=\"middle\">J</text><text x=\"143\" y=\"27.3\" text-anchor=\"middle\">K</text><text x=\"88\" y=\"121\" text-anchor=\"middle\">L</text><text x=\"166.6\" y=\"112.8\" text-anchor=\"middle\">P</text><text x=\"278\" y=\"130.7\" text-anchor=\"middle\">M</text><text x=\"223\" y=\"37\" text-anchor=\"middle\">N</text></svg></figure><p class=\"geo-given\">A nature journal has a grid with 1 cm squares. A leaf print <strong>△JKL</strong> was flipped and slid to make a second print with corners <strong>M</strong>, <strong>N</strong> and <strong>P</strong>: <strong>J</strong>(1, 6), <strong>K</strong>(7, 7), <strong>L</strong>(4, 2), <strong>P</strong>(10, 2), <strong>M</strong>(16, 1) and <strong>N</strong>(13, 6).</p>",
      claims: [
        {
          id: "jl",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "How long is JL?",
          choices: [
            { letter: "A", text: "7 cm" },
            { letter: "B", text: "5 cm" },
            { letter: "C", text: "25 cm" },
            { letter: "D", text: "√7 cm" }
          ],
          correct: "B"
        },
        {
          id: "stmt",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Which congruence statement matches the corners of the two prints?",
          choices: [
            { letter: "A", text: "△JKL ≅ △MNP" },
            { letter: "B", text: "△JKL ≅ △NPM" },
            { letter: "C", text: "△JKL ≅ △PNM" },
            { letter: "D", text: "△JKL ≅ △PMN" }
          ],
          correct: "D"
        },
        {
          id: "gus",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Gus finds PN = √((13 − 10)² + (6 − 2)²) = 3 + 4 = 7. What is his error?",
          choices: [
            { letter: "A", text: "√(9 + 16) is 5, not 3 + 4" },
            { letter: "B", text: "He subtracted in the wrong order" },
            { letter: "C", text: "He should add the coordinates" },
            { letter: "D", text: "He mixed up x and y" }
          ],
          correct: "A"
        },
        {
          id: "sas",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Pia knows JL = PN and KL = MN. Which one more fact would prove the prints congruent by SAS?",
          choices: [
            { letter: "A", text: "∠J ≅ ∠P" },
            { letter: "B", text: "∠L ≅ ∠N" },
            { letter: "C", text: "∠K ≅ ∠M" },
            { letter: "D", text: "JK = PM" }
          ],
          correct: "B"
        },
        {
          id: "area",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "What is the area of △PMN, in square centimeters?",
          choices: [
            { letter: "A", text: "27.0" },
            { letter: "B", text: "30.0" },
            { letter: "C", text: "15.2" },
            { letter: "D", text: "13.5" }
          ],
          correct: "D"
        },
        {
          id: "not",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "Which statement about the two leaf prints is NOT true?",
          choices: [
            { letter: "A", text: "PN = 5 cm" },
            { letter: "B", text: "∠L ≅ ∠N" },
            { letter: "C", text: "KL = PN" },
            { letter: "D", text: "JK = PM" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr2-worms-mountain-trails",
      family: "GEO",
      mode: "worms",
      title: "Two Trails Down the Mountain",
      kind: "Triangles · G.TR.2",
      blurb: "Two ridges and two trails run from a peak to the valley road.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A shaded mountain triangle PAB stands on a straight road through A, D, E and B. Ridges PA and PB have one tick mark. Dashed trails PD and PE run from P to the road. Angles APD and BPE have one arc\"><polygon class=\"sh2\" points=\"160,58.7 30,142 290,142\"/><line class=\"thin\" x1=\"12\" y1=\"142\" x2=\"308\" y2=\"142\"/><line class=\"ln\" x1=\"160\" y1=\"58.7\" x2=\"30\" y2=\"142\"/><line class=\"ln\" x1=\"160\" y1=\"58.7\" x2=\"290\" y2=\"142\"/><line class=\"ln dash\" x1=\"160\" y1=\"58.7\" x2=\"116.7\" y2=\"142\"/><line class=\"ln dash\" x1=\"160\" y1=\"58.7\" x2=\"203.3\" y2=\"142\"/><path class=\"thin\" d=\"M92.3 96.1 L97.7 104.6\"/><path class=\"thin\" d=\"M222.3 104.6 L227.7 96.1\"/><path class=\"thin\" d=\"M134.7 74.9 A30 30 0 0 0 146.2 85.3\"/><path class=\"thin\" d=\"M185.3 74.9 A30 30 0 0 1 173.8 85.3\"/><circle class=\"dt\" cx=\"30\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"290\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"116.7\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"203.3\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"58.7\" r=\"3\"/><text x=\"160\" y=\"50.7\" text-anchor=\"middle\">P</text><text x=\"30\" y=\"161\" text-anchor=\"middle\">A</text><text x=\"116.7\" y=\"161\" text-anchor=\"middle\">D</text><text x=\"203.3\" y=\"161\" text-anchor=\"middle\">E</text><text x=\"290\" y=\"161\" text-anchor=\"middle\">B</text></svg></figure><p class=\"geo-given\">Ridges <strong>PA</strong> and <strong>PB</strong> run from the peak <strong>P</strong> down to a straight valley road, with PA ≅ PB. Trails <strong>PD</strong> and <strong>PE</strong> reach the road at <strong>D</strong> and <strong>E</strong>, with ∠APD ≅ ∠BPE.</p>",
      claims: [
        {
          id: "base",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Why is ∠PAD ≅ ∠PBE?",
          choices: [
            { letter: "A", text: "They are vertical angles" },
            { letter: "B", text: "PD ≅ PE, so the angles opposite them match" },
            { letter: "C", text: "They are corresponding angles of parallel lines" },
            { letter: "D", text: "PA ≅ PB, so the angles opposite them match" }
          ],
          correct: "D"
        },
        {
          id: "crit",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "Which criterion proves △PAD ≅ △PBE?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "ASA" },
            { letter: "C", text: "AAS" },
            { letter: "D", text: "SSS" }
          ],
          correct: "B"
        },
        {
          id: "ssa",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "△PAD and △PAE share side PA and the angle at A, and PD = PE. Are △PAD and △PAE congruent? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes, by SAS, since ∠A is between PA and PD" },
            { letter: "B", text: "Yes, by HL, since PD and PE are hypotenuses" },
            { letter: "C", text: "No; SSA fits two triangles here, with AD ≠ AE" },
            { letter: "D", text: "No; the two triangles do not share an angle" }
          ],
          correct: "C"
        },
        {
          id: "pe",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "PD = (3m + 50) m and PE = (5m − 350) m. How long is trail PE?",
          choices: [
            { letter: "A", text: "650 m" },
            { letter: "B", text: "200 m" },
            { letter: "C", text: "1,300 m" },
            { letter: "D", text: "400 m" }
          ],
          correct: "A"
        },
        {
          id: "ad",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "The road from A to B is 1,800 m long, and DE = 600 m. How far is D from A?",
          choices: [
            { letter: "A", text: "600 m" },
            { letter: "B", text: "1,200 m" },
            { letter: "C", text: "900 m" },
            { letter: "D", text: "300 m" }
          ],
          correct: "A"
        },
        {
          id: "peb",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠PDA ≈ 117.5°. To the nearest tenth of a degree, what is m∠PEB?",
          choices: [
            { letter: "A", text: "62.5°" },
            { letter: "B", text: "58.8°" },
            { letter: "C", text: "27.5°" },
            { letter: "D", text: "117.5°" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr2-worms-square-pens",
      family: "GEO",
      mode: "worms",
      title: "Pipes Between the Square Pens",
      kind: "Triangles · G.TR.2",
      blurb: "Two square pens share a corner post, with water pipes between them.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Square ABCD and a smaller square AEFG share the corner A, with right-angle marks at A in each square. Dashed segments BE and DG cross between them\"><polygon class=\"sh2\" points=\"122.2,95.7 200.1,150.2 254.5,72.3 176.7,17.8\"/><polygon class=\"sh\" points=\"122.2,95.7 127.2,38.9 70.4,33.9 65.5,90.7\"/><polygon class=\"ln\" points=\"122.2,95.7 200.1,150.2 254.5,72.3 176.7,17.8\"/><polygon class=\"ln\" points=\"122.2,95.7 127.2,38.9 70.4,33.9 65.5,90.7\"/><line class=\"ln dash\" x1=\"200.1\" y1=\"150.2\" x2=\"127.2\" y2=\"38.9\"/><line class=\"ln dash\" x1=\"176.7\" y1=\"17.8\" x2=\"65.5\" y2=\"90.7\"/><path class=\"thin\" d=\"M128.8 100.3 L133.4 93.7 L126.8 89.1\"/><path class=\"thin\" d=\"M122.8 88.7 L115.9 88.1 L115.3 95.1\"/><circle class=\"dt\" cx=\"122.2\" cy=\"95.7\" r=\"3\"/><circle class=\"dt\" cx=\"200.1\" cy=\"150.2\" r=\"3\"/><circle class=\"dt\" cx=\"254.5\" cy=\"72.3\" r=\"3\"/><circle class=\"dt\" cx=\"176.7\" cy=\"17.8\" r=\"3\"/><circle class=\"dt\" cx=\"127.2\" cy=\"38.9\" r=\"3\"/><circle class=\"dt\" cx=\"70.4\" cy=\"33.9\" r=\"3\"/><circle class=\"dt\" cx=\"65.5\" cy=\"90.7\" r=\"3\"/><text x=\"117.8\" y=\"112.9\" text-anchor=\"middle\">A</text><text x=\"202.1\" y=\"167\" text-anchor=\"middle\">B</text><text x=\"266.4\" y=\"75.3\" text-anchor=\"middle\">C</text><text x=\"174.6\" y=\"11\" text-anchor=\"middle\">D</text><text x=\"136.4\" y=\"36.2\" text-anchor=\"middle\">E</text><text x=\"62.7\" y=\"29.7\" text-anchor=\"middle\">F</text><text x=\"56.3\" y=\"103.4\" text-anchor=\"middle\">G</text></svg></figure><p class=\"geo-given\">Two square pens on a farm, <strong>ABCD</strong> and <strong>AEFG</strong>, share the corner post <strong>A</strong>. Water pipes <strong>BE</strong> and <strong>DG</strong> run between them. Prove that BE ≅ DG.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. ABCD and AEFG are squares</td><td>Given</td></tr><tr><td>2. AB ≅ AD; AE ≅ AG</td><td>(a) ____</td></tr><tr><td>3. m∠BAD = m∠EAG = 90°</td><td>Definition of a square</td></tr><tr><td>4. m∠BAE = m∠DAG</td><td>Angle Addition: each is 90° + m∠DAE</td></tr><tr><td>5. △BAE ≅ △DAG</td><td>(b) ____</td></tr><tr><td>6. BE ≅ DG</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 2, AB ≅ AD and AE ≅ AG (blank a)?",
          choices: [
            { letter: "A", text: "Diagonals of a square are congruent" },
            { letter: "B", text: "Reflexive property of congruence" },
            { letter: "C", text: "Corresponding parts of congruent triangles" },
            { letter: "D", text: "All sides of a square are congruent" }
          ],
          correct: "D"
        },
        {
          id: "blankB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 5, △BAE ≅ △DAG (blank b)?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "SSS" },
            { letter: "C", text: "ASA" },
            { letter: "D", text: "HL" }
          ],
          correct: "A"
        },
        {
          id: "dg",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "BE = (3c − 2) m and DG = (c + 4) m. How long is pipe DG?",
          choices: [
            { letter: "A", text: "3 m" },
            { letter: "B", text: "14 m" },
            { letter: "C", text: "7 m" },
            { letter: "D", text: "5 m" }
          ],
          correct: "C"
        },
        {
          id: "agd",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠AEB ≈ 38.2°. To the nearest tenth of a degree, what is m∠AGD?",
          choices: [
            { letter: "A", text: "21.8°" },
            { letter: "B", text: "38.2°" },
            { letter: "C", text: "51.8°" },
            { letter: "D", text: "141.8°" }
          ],
          correct: "B"
        },
        {
          id: "not",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "With AB ≅ AD, which pair of facts would NOT prove △BAE ≅ △DAG?",
          choices: [
            { letter: "A", text: "AE ≅ AG and ∠BAE ≅ ∠DAG" },
            { letter: "B", text: "AE ≅ AG and BE ≅ DG" },
            { letter: "C", text: "AE ≅ AG and ∠ABE ≅ ∠ADG" },
            { letter: "D", text: "∠BAE ≅ ∠DAG and ∠ABE ≅ ∠ADG" }
          ],
          correct: "C"
        },
        {
          id: "bae",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Step 4 says each angle is 90° + m∠DAE. If m∠DAE = 30°, what is m∠BAE?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "150°" },
            { letter: "D", text: "90°" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr2-worms-birdhouse",
      family: "GEO",
      mode: "worms",
      title: "Braces in the Birdhouse",
      kind: "Triangles · G.TR.2",
      blurb: "Two braces run from the roof peak to the bottom corners of a birdhouse.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Pentagon PADCB: rectangle ABCD with a roof peak P above side AB, and right-angle marks at A, B, C and D. PA and PB have one tick mark; AD and BC have two tick marks. Braces PD and PC run from the peak to the bottom corners, around a round entrance hole\"><polygon class=\"sh2\" points=\"160,18 105,62 105,150 215,150 215,62\"/><polygon class=\"ln\" points=\"160,18 105,62 105,150 215,150 215,62\"/><line class=\"thin dash\" x1=\"105\" y1=\"62\" x2=\"215\" y2=\"62\"/><circle class=\"thin\" cx=\"160\" cy=\"120\" r=\"9\"/><line class=\"ln\" x1=\"160\" y1=\"18\" x2=\"105\" y2=\"150\"/><line class=\"ln\" x1=\"160\" y1=\"18\" x2=\"215\" y2=\"150\"/><path class=\"thin\" d=\"M129.4 36.1 L135.6 43.9\"/><path class=\"thin\" d=\"M184.4 43.9 L190.6 36.1\"/><path class=\"thin\" d=\"M100 104 L110 104 M100 108 L110 108\"/><path class=\"thin\" d=\"M210 104 L220 104 M210 108 L220 108\"/><path class=\"thin\" d=\"M112 62 L112 69 L105 69\"/><path class=\"thin\" d=\"M208 62 L208 69 L215 69\"/><path class=\"thin\" d=\"M105 143 L112 143 L112 150\"/><path class=\"thin\" d=\"M215 143 L208 143 L208 150\"/><circle class=\"dt\" cx=\"160\" cy=\"18\" r=\"3\"/><circle class=\"dt\" cx=\"105\" cy=\"62\" r=\"3\"/><circle class=\"dt\" cx=\"215\" cy=\"62\" r=\"3\"/><circle class=\"dt\" cx=\"215\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"105\" cy=\"150\" r=\"3\"/><text x=\"160\" y=\"12\" text-anchor=\"middle\">P</text><text x=\"93\" y=\"64\" text-anchor=\"middle\">A</text><text x=\"227\" y=\"64\" text-anchor=\"middle\">B</text><text x=\"93\" y=\"157\" text-anchor=\"middle\">D</text><text x=\"227\" y=\"157\" text-anchor=\"middle\">C</text></svg></figure><p class=\"geo-given\">The front of a birdhouse is the pentagon <strong>PADCB</strong>: <strong>ABCD</strong> is a rectangle and the roof edges are congruent, PA ≅ PB. Braces <strong>PD</strong> and <strong>PC</strong> run inside from the peak. Prove that PD ≅ PC.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. ABCD is a rectangle; PA ≅ PB</td><td>Given</td></tr><tr><td>2. ∠PAB ≅ ∠PBA</td><td>(a) ____</td></tr><tr><td>3. ∠BAD ≅ ∠ABC</td><td>All right angles are congruent</td></tr><tr><td>4. m∠PAD = m∠PBC</td><td>(b) ____</td></tr><tr><td>5. AD ≅ BC</td><td>Opposite sides of a rectangle are congruent</td></tr><tr><td>6. △PAD ≅ △PBC</td><td>(c) ____</td></tr><tr><td>7. PD ≅ PC</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 2, ∠PAB ≅ ∠PBA (blank a)?",
          choices: [
            { letter: "A", text: "Converse of the Isosceles Triangle Theorem" },
            { letter: "B", text: "Third Angles Theorem" },
            { letter: "C", text: "Isosceles Triangle Theorem" },
            { letter: "D", text: "Vertical Angles Theorem" }
          ],
          correct: "C"
        },
        {
          id: "blankB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 4, m∠PAD = m∠PBC (blank b)?",
          choices: [
            { letter: "A", text: "Angle Addition Postulate" },
            { letter: "B", text: "Linear Pair Postulate" },
            { letter: "C", text: "Vertical Angles Theorem" },
            { letter: "D", text: "Third Angles Theorem" }
          ],
          correct: "A"
        },
        {
          id: "blankC",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 6, △PAD ≅ △PBC (blank c)?",
          choices: [
            { letter: "A", text: "SSA" },
            { letter: "B", text: "ASA" },
            { letter: "C", text: "HL" },
            { letter: "D", text: "SAS" }
          ],
          correct: "D"
        },
        {
          id: "pd",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "PD = (3r + 1) in. and PC = (5r − 7) in. How long is brace PD?",
          choices: [
            { letter: "A", text: "4 in." },
            { letter: "B", text: "13 in." },
            { letter: "C", text: "26 in." },
            { letter: "D", text: "10 in." }
          ],
          correct: "B"
        },
        {
          id: "pbc",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "m∠PAB ≈ 38.7°. To the nearest tenth of a degree, what is m∠PBC?",
          choices: [
            { letter: "A", text: "38.7°" },
            { letter: "B", text: "51.3°" },
            { letter: "C", text: "128.7°" },
            { letter: "D", text: "141.3°" }
          ],
          correct: "C"
        },
        {
          id: "indirect",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Another birdhouse front has the same shape, with ABCD a rectangle, but PD = 13 in. and PC = 14 in. Lou assumes PA ≅ PB. How should his indirect proof end?",
          choices: [
            { letter: "A", text: "PD ≅ PC follows, so PA ≅ PB is proved" },
            { letter: "B", text: "PD ≅ PC follows, which is false; so PA ≇ PB" },
            { letter: "C", text: "13 ≠ 14, so ABCD is not a rectangle" },
            { letter: "D", text: "PD ≠ PC, so ∠PAB ≅ ∠PBA is proved" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr2-worms-tarp-lines",
      family: "GEO",
      mode: "worms",
      title: "Guy Lines on the Campsite Tarp",
      kind: "Triangles · G.TR.2",
      blurb: "Equal guy lines hold an A-frame tarp. Prove the stakes are placed evenly.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A shaded triangle RBC, the end of a tarp, stands on level ground. Guy lines RD and RE run from R to stakes D and E on the ground beyond B and C. RB and RC have one tick mark; RD and RE have two tick marks\"><line class=\"thin\" x1=\"14\" y1=\"142\" x2=\"306\" y2=\"142\"/><polygon class=\"sh\" points=\"160,62 100,142 220,142\"/><line class=\"ln\" x1=\"160\" y1=\"62\" x2=\"100\" y2=\"142\"/><line class=\"ln\" x1=\"160\" y1=\"62\" x2=\"220\" y2=\"142\"/><line class=\"ln\" x1=\"160\" y1=\"62\" x2=\"40\" y2=\"142\"/><line class=\"ln\" x1=\"160\" y1=\"62\" x2=\"280\" y2=\"142\"/><path class=\"thin\" d=\"M126 99 L134 105\"/><path class=\"thin\" d=\"M186 105 L194 99\"/><path class=\"thin\" d=\"M98.9 96.7 L104.4 105.1 M95.6 98.9 L101.1 107.3\"/><path class=\"thin\" d=\"M215.6 105.1 L221.1 96.7 M218.9 107.3 L224.4 98.9\"/><circle class=\"dt\" cx=\"160\" cy=\"62\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"220\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"40\" cy=\"142\" r=\"3\"/><circle class=\"dt\" cx=\"280\" cy=\"142\" r=\"3\"/><text x=\"160\" y=\"54\" text-anchor=\"middle\">R</text><text x=\"40\" y=\"161\" text-anchor=\"middle\">D</text><text x=\"100\" y=\"161\" text-anchor=\"middle\">B</text><text x=\"220\" y=\"161\" text-anchor=\"middle\">C</text><text x=\"280\" y=\"161\" text-anchor=\"middle\">E</text></svg></figure><p class=\"geo-given\">The end of an A-frame tarp is the triangle <strong>RBC</strong>, with RB ≅ RC. Guy lines <strong>RD</strong> and <strong>RE</strong> are the same length. D, B, C and E lie in a line on level ground. Prove that DB ≅ CE.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. RB ≅ RC; RD ≅ RE</td><td>Given</td></tr><tr><td>2. ∠RBC ≅ ∠RCB; ∠D ≅ ∠E</td><td>Base angles of an isosceles triangle are congruent</td></tr><tr><td>3. ∠RBD ≅ ∠RCE</td><td>(a) ____</td></tr><tr><td>4. △RBD ≅ △RCE</td><td>(b) ____</td></tr><tr><td>5. DB ≅ CE</td><td>CPCTC</td></tr></table>",
      claims: [
        {
          id: "blankA",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 3, ∠RBD ≅ ∠RCE (blank a)?",
          choices: [
            { letter: "A", text: "Congruent Supplements Theorem" },
            { letter: "B", text: "Congruent Complements Theorem" },
            { letter: "C", text: "Vertical Angles Theorem" },
            { letter: "D", text: "Reflexive property" }
          ],
          correct: "A"
        },
        {
          id: "blankB",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "Which reason justifies step 4, △RBD ≅ △RCE (blank b), using the parts in steps 1, 2 and 3?",
          choices: [
            { letter: "A", text: "ASA" },
            { letter: "B", text: "SAS" },
            { letter: "C", text: "AAS" },
            { letter: "D", text: "SSA" }
          ],
          correct: "C"
        },
        {
          id: "guy",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "RB = 5 ft, BC = 6 ft and DB = 3 ft. To the nearest tenth of a foot, how long is each guy line?",
          choices: [
            { letter: "A", text: "8.0 ft" },
            { letter: "B", text: "7.2 ft" },
            { letter: "C", text: "6.0 ft" },
            { letter: "D", text: "5.0 ft" }
          ],
          correct: "B"
        },
        {
          id: "de",
          sol: "G.TR.2",
          sub: "G.TR.2.3",
          stem: "DB = (2q − 5) ft, CE = (q − 1) ft and BC = 6 ft. How far apart are stakes D and E?",
          choices: [
            { letter: "A", text: "4 ft" },
            { letter: "B", text: "9 ft" },
            { letter: "C", text: "3 ft" },
            { letter: "D", text: "12 ft" }
          ],
          correct: "D"
        },
        {
          id: "sas",
          sol: "G.TR.2",
          sub: "G.TR.2.1",
          stem: "At another campsite, the guy lines were not measured, but DB ≅ CE and RB ≅ RC. Which criterion proves △RBD ≅ △RCE?",
          choices: [
            { letter: "A", text: "SAS" },
            { letter: "B", text: "AAS" },
            { letter: "C", text: "SSS" },
            { letter: "D", text: "HL" }
          ],
          correct: "A"
        },
        {
          id: "assume",
          sol: "G.TR.2",
          sub: "G.TR.2.2",
          stem: "At another campsite, RB = RC, but stake D is 3 ft from B and stake E is 4 ft from C. To prove indirectly that guy lines RD and RE are not the same length, what should you assume first?",
          choices: [
            { letter: "A", text: "RD ≠ RE" },
            { letter: "B", text: "DB = CE" },
            { letter: "C", text: "RB ≠ RC" },
            { letter: "D", text: "RD = RE" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
