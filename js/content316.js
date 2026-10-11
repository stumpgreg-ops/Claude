/* SOL Labyrinth — Geometry game (family GEO), G.TR.3 similar triangles (Virginia 2023 Geometry SOL): game modes "maze"
   (school building and grounds) and "raid" (Eagle Swoop: sports and games). Original items only. A pack is one figure
   or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given facts, then six questions
   about it. Every numeric answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-tr3-maze-book-display",
      family: "GEO",
      mode: "maze",
      title: "The A-Frame Book Display",
      kind: "Triangles · G.TR.3",
      blurb: "Two library shelves run parallel to the floor bar.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"Triangle ABC, the side of an A-frame display: D and F on AB, E and G on AC, shelves DE and FG parallel to the floor bar BC; AD 24, DF 18, FB 18, AE 20 and BC 70 inches\">" +
        "<line class=\"thin\" x1=\"22\" y1=\"145\" x2=\"298\" y2=\"145\"/><polygon class=\"ln\" points=\"180.6,19 52,145 262,145\"/>" +
        "<line class=\"ac\" x1=\"129.1\" y1=\"69.4\" x2=\"213.1\" y2=\"69.4\"/><line class=\"ln\" x1=\"90.6\" y1=\"107.2\" x2=\"237.6\" y2=\"107.2\"/>" +
        "<path class=\"thin\" d=\"M175.2 73.4 L181.2 69.4 L175.2 65.4\"/><path class=\"thin\" d=\"M172.8 111.2 L178.8 107.2 L172.8 103.2\"/>" +
        "<path class=\"thin\" d=\"M176.2 149 L182.2 145 L176.2 141\"/><circle class=\"dt\" cx=\"180.6\" cy=\"19\" r=\"3\"/><circle class=\"dt\" cx=\"52\" cy=\"145\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"262\" cy=\"145\" r=\"3\"/><circle class=\"dt\" cx=\"129.1\" cy=\"69.4\" r=\"3\"/><circle class=\"dt\" cx=\"213.1\" cy=\"69.4\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"90.6\" cy=\"107.2\" r=\"3\"/><circle class=\"dt\" cx=\"237.6\" cy=\"107.2\" r=\"3\"/><text x=\"180.6\" y=\"13\" text-anchor=\"middle\">A</text>" +
        "<text x=\"41\" y=\"156\" text-anchor=\"middle\">B</text><text x=\"273\" y=\"156\" text-anchor=\"middle\">C</text>" +
        "<text x=\"116.1\" y=\"77.4\" text-anchor=\"middle\">D</text><text x=\"77.6\" y=\"115.2\" text-anchor=\"middle\">F</text>" +
        "<text x=\"225.1\" y=\"71.4\" text-anchor=\"middle\">E</text><text x=\"249.6\" y=\"109.2\" text-anchor=\"middle\">G</text>" +
        "<text x=\"145.8\" y=\"39.9\" text-anchor=\"middle\">24</text><text x=\"100.8\" y=\"84\" text-anchor=\"middle\">18</text>" +
        "<text x=\"62.2\" y=\"121.8\" text-anchor=\"middle\">18</text><text x=\"206.9\" y=\"42.7\" text-anchor=\"middle\">20</text>" +
        "<text x=\"157\" y=\"161\" text-anchor=\"middle\">70</text></svg></figure>" +
        "<p class=\"geo-given\">The side of an A-frame book display in the library is <strong>△ABC</strong>. Shelves <strong>DE</strong> and <strong>FG</strong> are parallel to the floor bar <strong>BC</strong>. AD = 24 in., DF = 18 in., FB = 18 in., AE = 20 in., AC = 50 in. and BC = 70 in.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "AD/AB = 24/60 and AE/AC = 20/50, and ∠A is in both triangles. Which criterion do these facts support for △ADE ∼ △ABC?",
          choices: [
            { letter: "A", text: "SSS∼" },
            { letter: "B", text: "SAS∼" },
            { letter: "C", text: "AA" },
            { letter: "D", text: "SAS" }
          ],
          correct: "B"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor of the dilation centered at A that maps △ABC onto △ADE?",
          choices: [
            { letter: "A", text: "2/5" },
            { letter: "B", text: "5/2" },
            { letter: "C", text: "2/3" },
            { letter: "D", text: "3/5" }
          ],
          correct: "A"
        },
        {
          id: "de",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is the top shelf DE?",
          choices: [
            { letter: "A", text: "175 in." },
            { letter: "B", text: "about 46.7 in." },
            { letter: "C", text: "34 in." },
            { letter: "D", text: "28 in." }
          ],
          correct: "D"
        },
        {
          id: "fg",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is the lower shelf FG?",
          choices: [
            { letter: "A", text: "21 in." },
            { letter: "B", text: "49 in." },
            { letter: "C", text: "52 in." },
            { letter: "D", text: "100 in." }
          ],
          correct: "B"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The perimeter of △ABC is 180 in. What is the perimeter of △ADE?",
          choices: [
            { letter: "A", text: "28.8 in." },
            { letter: "B", text: "450 in." },
            { letter: "C", text: "72 in." },
            { letter: "D", text: "120 in." }
          ],
          correct: "C"
        },
        {
          id: "tabletop",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "A tabletop display has sides of 12 in., 10 in. and 14 in. Is it similar to △ABC?",
          choices: [
            { letter: "A", text: "Yes; 12/60 = 10/50 = 14/70" },
            { letter: "B", text: "No; 12/14 ≠ 60/50" },
            { letter: "C", text: "No; its sides are not 60, 50 and 70" },
            { letter: "D", text: "No; 70 − 14 ≠ 60 − 12" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr3-maze-parking-mirror",
      family: "GEO",
      mode: "maze",
      title: "The Mirror in the Parking Lot",
      kind: "Triangles · G.TR.3",
      blurb: "A mirror on the ground and a light pole's height.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A light pole TP and a student whose eyes are at E above point B; a mirror M lies on the ground between them; BM 4 feet, MP 30 feet, EB 5.2 feet; right angles at B and P; light travels from T to M to E\">" +
        "<line class=\"thin\" x1=\"18\" y1=\"146\" x2=\"302\" y2=\"146\"/><rect class=\"sh2\" x=\"116\" y=\"142\" width=\"20\" height=\"4\"/>" +
        "<line class=\"ln\" x1=\"66\" y1=\"146\" x2=\"66\" y2=\"68\"/><line class=\"ln\" x1=\"226\" y1=\"146\" x2=\"226\" y2=\"16\"/>" +
        "<line class=\"ln\" x1=\"226\" y1=\"16\" x2=\"212\" y2=\"20\"/><line class=\"ac dash\" x1=\"66\" y1=\"68\" x2=\"126\" y2=\"146\"/>" +
        "<line class=\"ac dash\" x1=\"126\" y1=\"146\" x2=\"226\" y2=\"16\"/><path class=\"thin\" d=\"M66 138 L74 138 L74 146\"/>" +
        "<path class=\"thin\" d=\"M226 138 L218 138 L218 146\"/><path class=\"thin\" d=\"M116.2 133.3 A16 16 0 0 0 110 146\"/>" +
        "<path class=\"thin\" d=\"M135.8 133.3 A16 16 0 0 1 142 146\"/><circle class=\"dt\" cx=\"66\" cy=\"68\" r=\"3\"/><circle class=\"dt\" cx=\"66\" cy=\"146\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"126\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"226\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"226\" cy=\"16\" r=\"3\"/>" +
        "<text x=\"54\" y=\"69\" text-anchor=\"middle\">E</text><text x=\"66\" y=\"165\" text-anchor=\"middle\">B</text>" +
        "<text x=\"126\" y=\"165\" text-anchor=\"middle\">M</text><text x=\"226\" y=\"165\" text-anchor=\"middle\">P</text>" +
        "<text x=\"238\" y=\"19\" text-anchor=\"middle\">T</text><text class=\"sm\" x=\"44\" y=\"114\" text-anchor=\"middle\">5.2 ft</text>" +
        "<text x=\"96\" y=\"165\" text-anchor=\"middle\">4 ft</text><text x=\"176\" y=\"165\" text-anchor=\"middle\">30 ft</text>" +
        "<text class=\"acc\" x=\"240\" y=\"91\" text-anchor=\"middle\">h</text><text class=\"sm\" x=\"272\" y=\"64\" text-anchor=\"middle\">light pole</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">Nia lays a mirror <strong>M</strong> flat on the level parking lot. She stands at <strong>B</strong>, 4 ft from the mirror, and sees the top <strong>T</strong> of a light pole in it. Her eyes <strong>E</strong> are 5.2 ft above the ground, and the mirror is 30 ft from the pole's base <strong>P</strong>. EB and TP are vertical. A mirror reflects at equal angles, so ∠EMB ≅ ∠TMP.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why are the two triangles in Nia's figure similar?",
          choices: [
            { letter: "A", text: "SAS∼: BM/PM = 4/30 and the right angles" },
            { letter: "B", text: "AA: ∠EMB and ∠TMP are vertical angles" },
            { letter: "C", text: "AA: right angles at B and P, and ∠EMB ≅ ∠TMP" },
            { letter: "D", text: "SSS∼: all three pairs of sides are known" }
          ],
          correct: "C"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement pairs Nia's triangle with the pole's triangle correctly?",
          choices: [
            { letter: "A", text: "△EBM ∼ △PTM" },
            { letter: "B", text: "△BEM ∼ △TPM" },
            { letter: "C", text: "△EBM ∼ △MPT" },
            { letter: "D", text: "△EBM ∼ △TPM" }
          ],
          correct: "D"
        },
        {
          id: "height",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How tall is the parking-lot light pole (h)?",
          choices: [
            { letter: "A", text: "39 ft" },
            { letter: "B", text: "about 23.1 ft" },
            { letter: "C", text: "about 0.7 ft" },
            { letter: "D", text: "31.2 ft" }
          ],
          correct: "A"
        },
        {
          id: "lee",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Lee writes 5.2/30 = h/4 to find the pole's height h. What is his mistake?",
          choices: [
            { letter: "A", text: "None; his proportion is correct" },
            { letter: "B", text: "He should add: h = 5.2 + 30" },
            { letter: "C", text: "He paired 5.2 with 30; use 5.2/4 = h/30" },
            { letter: "D", text: "He should write 5.2/4 = 30/h" }
          ],
          correct: "C"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from △EBM to △TPM?",
          choices: [
            { letter: "A", text: "2/15" },
            { letter: "B", text: "7.5" },
            { letter: "C", text: "26" },
            { letter: "D", text: "about 5.8" }
          ],
          correct: "B"
        },
        {
          id: "notNeeded",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which fact is NOT needed to prove △EBM ∼ △TPM?",
          choices: [
            { letter: "A", text: "EB is perpendicular to the ground" },
            { letter: "B", text: "TP is perpendicular to the ground" },
            { letter: "C", text: "∠EMB ≅ ∠TMP" },
            { letter: "D", text: "BM = 4 ft and MP = 30 ft" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-maze-hall-mural",
      family: "GEO",
      mode: "maze",
      title: "The Hallway Floor Mural",
      kind: "Triangles · G.TR.3",
      blurb: "Two right triangles painted on a grid of 1-ft squares.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A grid of 1-foot squares with right triangle ABC, legs AB 3 and AC 2 with the right angle at A, and right triangle DEF, legs DF 6 and DE 4 with the right angle at D, turned a quarter turn\">" +
        "<line class=\"gr\" x1=\"12\" y1=\"140\" x2=\"12\" y2=\"20\"/><line class=\"gr\" x1=\"32\" y1=\"140\" x2=\"32\" y2=\"20\"/>" +
        "<line class=\"gr\" x1=\"52\" y1=\"140\" x2=\"52\" y2=\"20\"/><line class=\"gr\" x1=\"72\" y1=\"140\" x2=\"72\" y2=\"20\"/>" +
        "<line class=\"gr\" x1=\"92\" y1=\"140\" x2=\"92\" y2=\"20\"/><line class=\"gr\" x1=\"112\" y1=\"140\" x2=\"112\" y2=\"20\"/>" +
        "<line class=\"gr\" x1=\"132\" y1=\"140\" x2=\"132\" y2=\"20\"/><line class=\"gr\" x1=\"152\" y1=\"140\" x2=\"152\" y2=\"20\"/>" +
        "<line class=\"gr\" x1=\"172\" y1=\"140\" x2=\"172\" y2=\"20\"/><line class=\"gr\" x1=\"192\" y1=\"140\" x2=\"192\" y2=\"20\"/>" +
        "<line class=\"gr\" x1=\"212\" y1=\"140\" x2=\"212\" y2=\"20\"/><line class=\"gr\" x1=\"232\" y1=\"140\" x2=\"232\" y2=\"20\"/>" +
        "<line class=\"gr\" x1=\"252\" y1=\"140\" x2=\"252\" y2=\"20\"/><line class=\"gr\" x1=\"272\" y1=\"140\" x2=\"272\" y2=\"20\"/>" +
        "<line class=\"gr\" x1=\"292\" y1=\"140\" x2=\"292\" y2=\"20\"/><line class=\"gr\" x1=\"12\" y1=\"140\" x2=\"292\" y2=\"140\"/>" +
        "<line class=\"gr\" x1=\"12\" y1=\"120\" x2=\"292\" y2=\"120\"/><line class=\"gr\" x1=\"12\" y1=\"100\" x2=\"292\" y2=\"100\"/>" +
        "<line class=\"gr\" x1=\"12\" y1=\"80\" x2=\"292\" y2=\"80\"/><line class=\"gr\" x1=\"12\" y1=\"60\" x2=\"292\" y2=\"60\"/>" +
        "<line class=\"gr\" x1=\"12\" y1=\"40\" x2=\"292\" y2=\"40\"/><line class=\"gr\" x1=\"12\" y1=\"20\" x2=\"292\" y2=\"20\"/>" +
        "<polygon class=\"sh\" points=\"32,120 32,60 72,120\"/><polygon class=\"sh2\" points=\"172,40 292,40 172,120\"/>" +
        "<path class=\"thin\" d=\"M32 113 L39 113 L39 120\"/><path class=\"thin\" d=\"M180 40 L180 48 L172 48\"/><circle class=\"dt\" cx=\"32\" cy=\"120\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"32\" cy=\"60\" r=\"3\"/><circle class=\"dt\" cx=\"72\" cy=\"120\" r=\"3\"/><circle class=\"dt\" cx=\"172\" cy=\"40\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"172\" cy=\"120\" r=\"3\"/><circle class=\"dt\" cx=\"292\" cy=\"40\" r=\"3\"/><text x=\"22\" y=\"136\" text-anchor=\"middle\">A</text>" +
        "<text x=\"32\" y=\"53\" text-anchor=\"middle\">B</text><text x=\"82\" y=\"136\" text-anchor=\"middle\">C</text><text x=\"162\" y=\"34\" text-anchor=\"middle\">D</text>" +
        "<text x=\"302\" y=\"34\" text-anchor=\"middle\">F</text><text x=\"162\" y=\"136\" text-anchor=\"middle\">E</text>" +
        "<text x=\"20\" y=\"95\" text-anchor=\"middle\">3</text><text x=\"52\" y=\"137\" text-anchor=\"middle\">2</text><text x=\"232\" y=\"33\" text-anchor=\"middle\">6</text>" +
        "<text x=\"160\" y=\"85\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"292\" y=\"160\" text-anchor=\"end\">1 square = 1 ft</text></svg></figure>" +
        "<p class=\"geo-given\">A mural on the hallway floor is painted on a grid of 1-ft squares. In right △ABC, AB = 3 ft and AC = 2 ft. In right △DEF, DF = 6 ft and DE = 4 ft. The right angles are at <strong>A</strong> and <strong>D</strong>.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Using the two legs of each triangle and the right angles, which criterion shows that the triangles are similar?",
          choices: [
            { letter: "A", text: "SAS∼" },
            { letter: "B", text: "AA" },
            { letter: "C", text: "SSS∼" },
            { letter: "D", text: "SAS" }
          ],
          correct: "A"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the two mural triangles is correct?",
          choices: [
            { letter: "A", text: "△ABC ∼ △DEF" },
            { letter: "B", text: "△ABC ∼ △FDE" },
            { letter: "C", text: "△ABC ∼ △DFE" },
            { letter: "D", text: "△BAC ∼ △DFE" }
          ],
          correct: "C"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The perimeter of △ABC is 5 + √13 ft. What is the perimeter of △DEF?",
          choices: [
            { letter: "A", text: "20 + 4√13 ft" },
            { letter: "B", text: "10 + √13 ft" },
            { letter: "C", text: "2.5 + (√13)/2 ft" },
            { letter: "D", text: "10 + 2√13 ft" }
          ],
          correct: "D"
        },
        {
          id: "kai",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Kai plans right △GHJ with the right angle at G, GH = 6 ft and GJ = 5 ft. Is it similar to △ABC?",
          choices: [
            { letter: "A", text: "No; 6/3 ≠ 5/2" },
            { letter: "B", text: "Yes; each leg is 3 ft longer" },
            { letter: "C", text: "Yes; both are right triangles" },
            { letter: "D", text: "No; it is larger than △ABC" }
          ],
          correct: "A"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor of the dilation that maps △DEF onto △ABC?",
          choices: [
            { letter: "A", text: "2" },
            { letter: "B", text: "1/2" },
            { letter: "C", text: "1/4" },
            { letter: "D", text: "3/2" }
          ],
          correct: "B"
        },
        {
          id: "ratio",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Which ratio is equal to DE/DF?",
          choices: [
            { letter: "A", text: "AB/AC" },
            { letter: "B", text: "AC/BC" },
            { letter: "C", text: "AC/AB" },
            { letter: "D", text: "DF/DE" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr3-maze-bus-island",
      family: "GEO",
      mode: "maze",
      title: "The Island in the Bus Loop",
      kind: "Triangles · G.TR.3",
      blurb: "A footpath cuts across a triangular island, but not parallel to a side.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Triangle ABC with D on AB and E on AC, and path DE; AD 6, DB 10, AE 8, EC 4 and BC 14 meters; DE is not parallel to BC\">" +
        "<polygon class=\"sh2\" points=\"72,140 248,140 142.1,28.2\"/><line class=\"ac\" x1=\"138\" y1=\"140\" x2=\"118.8\" y2=\"65.4\"/>" +
        "<path class=\"thin\" d=\"M90 140 A18 18 0 0 0 81.6 124.8\"/><circle class=\"dt\" cx=\"72\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"248\" cy=\"140\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"142.1\" cy=\"28.2\" r=\"3\"/><circle class=\"dt\" cx=\"138\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"118.8\" cy=\"65.4\" r=\"3\"/>" +
        "<text x=\"60\" y=\"151\" text-anchor=\"middle\">A</text><text x=\"260\" y=\"151\" text-anchor=\"middle\">B</text>" +
        "<text x=\"142.1\" y=\"21.2\" text-anchor=\"middle\">C</text><text x=\"138\" y=\"162\" text-anchor=\"middle\">D</text>" +
        "<text x=\"105.8\" y=\"68.4\" text-anchor=\"middle\">E</text><text x=\"105\" y=\"161\" text-anchor=\"middle\">6</text>" +
        "<text x=\"193\" y=\"161\" text-anchor=\"middle\">10</text><text x=\"86.1\" y=\"101.9\" text-anchor=\"middle\">8</text>" +
        "<text x=\"121.1\" y=\"46\" text-anchor=\"middle\">4</text><text x=\"203.8\" y=\"80.8\" text-anchor=\"middle\">14</text></svg></figure>" +
        "<p class=\"geo-given\">A triangular grass island <strong>ABC</strong> sits inside the bus loop. A straight footpath <strong>DE</strong> crosses it, with D on AB and E on AC. AD = 6 m, DB = 10 m, AE = 8 m, EC = 4 m and BC = 14 m.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that the small triangle ADE is similar to the whole island ABC?",
          choices: [
            { letter: "A", text: "AA" },
            { letter: "B", text: "SSS∼" },
            { letter: "C", text: "ASA" },
            { letter: "D", text: "SAS∼" }
          ],
          correct: "D"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the small triangle and the island is correct?",
          choices: [
            { letter: "A", text: "△ADE ∼ △ABC" },
            { letter: "B", text: "△ADE ∼ △ACB" },
            { letter: "C", text: "△AED ∼ △ACB" },
            { letter: "D", text: "△DAE ∼ △ACB" }
          ],
          correct: "B"
        },
        {
          id: "tom",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Tom says the path DE is parallel to BC, because the triangles are similar. Is he right?",
          choices: [
            { letter: "A", text: "No; AD/AB = 6/16, but AE/AC = 8/12" },
            { letter: "B", text: "Yes; similar triangles have parallel sides" },
            { letter: "C", text: "Yes; ∠ADE ≅ ∠ABC" },
            { letter: "D", text: "No; DE is shorter than BC" }
          ],
          correct: "A"
        },
        {
          id: "de",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is the path DE?",
          choices: [
            { letter: "A", text: "about 5.3 m" },
            { letter: "B", text: "28 m" },
            { letter: "C", text: "7 m" },
            { letter: "D", text: "about 9.3 m" }
          ],
          correct: "C"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The perimeter of the island △ABC is 42 m. What is the perimeter of △ADE?",
          choices: [
            { letter: "A", text: "10.5 m" },
            { letter: "B", text: "84 m" },
            { letter: "C", text: "28 m" },
            { letter: "D", text: "21 m" }
          ],
          correct: "D"
        },
        {
          id: "move",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Planners keep D where it is and move E along AC so that the path becomes parallel to BC. How far from A should E be?",
          choices: [
            { letter: "A", text: "7.5 m" },
            { letter: "B", text: "4.5 m" },
            { letter: "C", text: "7.2 m" },
            { letter: "D", text: "8 m" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-raid-pennants",
      family: "GEO",
      mode: "raid",
      title: "The Swim Team Pennants",
      kind: "Triangles · G.TR.3",
      blurb: "Two pennants, a few angles and one side each.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Two triangular pennants hanging from a rope: triangle ABC with AB 10 inches, angle A 40 degrees and angle B 75 degrees; triangle FED with FE 15 inches, angle E 40 degrees and angle D 65 degrees\">" +
        "<line class=\"thin\" x1=\"12\" y1=\"34\" x2=\"308\" y2=\"34\"/><polygon class=\"sh\" points=\"22,34 112,34 95.5,95.7\"/>" +
        "<polygon class=\"sh2\" points=\"150,34 285,34 174.8,126.5\"/><path class=\"thin\" d=\"M44 34 A22 22 0 0 1 38.9 48.1\"/>" +
        "<path class=\"thin\" d=\"M98 34 A14 14 0 0 0 108.4 47.5\"/><path class=\"thin\" d=\"M263 34 A22 22 0 0 0 268.1 48.1\"/>" +
        "<path class=\"thin\" d=\"M185.5 117.5 A14 14 0 0 0 171.2 113\"/><circle class=\"dt\" cx=\"22\" cy=\"34\" r=\"3\"/><circle class=\"dt\" cx=\"112\" cy=\"34\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"95.5\" cy=\"95.7\" r=\"3\"/><circle class=\"dt\" cx=\"174.8\" cy=\"126.5\" r=\"3\"/><circle class=\"dt\" cx=\"285\" cy=\"34\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"150\" cy=\"34\" r=\"3\"/><text x=\"22\" y=\"26\" text-anchor=\"middle\">A</text><text x=\"112\" y=\"26\" text-anchor=\"middle\">B</text>" +
        "<text x=\"150\" y=\"26\" text-anchor=\"middle\">F</text><text x=\"285\" y=\"26\" text-anchor=\"middle\">E</text>" +
        "<text x=\"99.5\" y=\"113.7\" text-anchor=\"middle\">C</text><text x=\"174.8\" y=\"145.5\" text-anchor=\"middle\">D</text>" +
        "<text x=\"67\" y=\"26\" text-anchor=\"middle\">10 in.</text><text x=\"217.5\" y=\"26\" text-anchor=\"middle\">15 in.</text>" +
        "<text class=\"sm\" x=\"55.8\" y=\"50.3\" text-anchor=\"middle\">40°</text><text class=\"sm\" x=\"91.4\" y=\"53.8\" text-anchor=\"middle\">75°</text>" +
        "<text class=\"sm\" x=\"249.3\" y=\"51\" text-anchor=\"middle\">40°</text><text class=\"sm\" x=\"183.8\" y=\"101.9\" text-anchor=\"middle\">65°</text></svg></figure>" +
        "<p class=\"geo-given\">Two swim-team pennants hang from a rope. In <strong>△ABC</strong>, m∠A = 40°, m∠B = 75° and AB = 10 in. In <strong>△DEF</strong>, m∠D = 65°, m∠E = 40° and EF = 15 in.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that the two pennants are similar?",
          choices: [
            { letter: "A", text: "AA" },
            { letter: "B", text: "SAS∼" },
            { letter: "C", text: "SSS∼" },
            { letter: "D", text: "ASA" }
          ],
          correct: "A"
        },
        {
          id: "true",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which statement about the two pennants is true?",
          choices: [
            { letter: "A", text: "Not similar, since m∠B ≠ m∠D" },
            { letter: "B", text: "Similar, since AB/EF = 10/15" },
            { letter: "C", text: "Not similar, since the sizes differ" },
            { letter: "D", text: "Similar, since m∠C = 65° = m∠D" }
          ],
          correct: "D"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the two pennants is correct?",
          choices: [
            { letter: "A", text: "△ABC ∼ △DEF" },
            { letter: "B", text: "△ABC ∼ △EDF" },
            { letter: "C", text: "△ABC ∼ △EFD" },
            { letter: "D", text: "△ABC ∼ △FED" }
          ],
          correct: "C"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from △ABC to the larger pennant?",
          choices: [
            { letter: "A", text: "2/3" },
            { letter: "B", text: "3/2" },
            { letter: "C", text: "5" },
            { letter: "D", text: "9/4" }
          ],
          correct: "B"
        },
        {
          id: "coach",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The coach says the large pennant's perimeter is 1.5 times the small one's. Is the coach right?",
          choices: [
            { letter: "A", text: "No; it is 1.5² = 2.25 times as long" },
            { letter: "B", text: "No; it is 3 × 5 = 15 in. longer" },
            { letter: "C", text: "Yes; each angle is 1.5 times as large" },
            { letter: "D", text: "Yes; perimeters grow by the scale factor" }
          ],
          correct: "D"
        },
        {
          id: "df",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Which equation can be used to find DF?",
          choices: [
            { letter: "A", text: "DF/BC = 15/10" },
            { letter: "B", text: "DF/AC = 15/10" },
            { letter: "C", text: "DF/BC = 10/15" },
            { letter: "D", text: "DF − BC = 15 − 10" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr3-raid-game-zones",
      family: "GEO",
      mode: "raid",
      title: "Zones on the Game Map",
      kind: "Triangles · G.TR.3",
      blurb: "Two triangular zones with all six sides known.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 158\" role=\"img\" aria-label=\"Two triangles on a game map: triangle JKL with JK 50, KL 80 and JL 60 meters, and triangle PQR with PQ 90, QR 75 and PR 120 meters, drawn in a different position\">" +
        "<polygon class=\"sh\" points=\"58.7,87.4 14,138 122,138\"/><polygon class=\"sh2\" points=\"160,138 281.5,138 286.6,36.9\"/>" +
        "<circle class=\"dt\" cx=\"58.7\" cy=\"87.4\" r=\"3\"/><circle class=\"dt\" cx=\"14\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"122\" cy=\"138\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"281.5\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"286.6\" cy=\"36.9\" r=\"3\"/>" +
        "<text x=\"56.6\" y=\"80.6\" text-anchor=\"middle\">J</text><text x=\"2.6\" y=\"146.8\" text-anchor=\"middle\">K</text>" +
        "<text x=\"133.5\" y=\"146.4\" text-anchor=\"middle\">L</text><text x=\"148.9\" y=\"147.5\" text-anchor=\"middle\">P</text>" +
        "<text x=\"291.3\" y=\"151.5\" text-anchor=\"middle\">Q</text><text x=\"293.1\" y=\"31.8\" text-anchor=\"middle\">R</text>" +
        "<text x=\"27.4\" y=\"109.8\" text-anchor=\"middle\">50</text><text x=\"68\" y=\"155\" text-anchor=\"middle\">80</text>" +
        "<text x=\"97.8\" y=\"108.3\" text-anchor=\"middle\">60</text><text x=\"220.8\" y=\"155\" text-anchor=\"middle\">90</text>" +
        "<text x=\"297\" y=\"93.1\" text-anchor=\"middle\">75</text><text x=\"214.5\" y=\"81.5\" text-anchor=\"middle\">120</text></svg></figure>" +
        "<p class=\"geo-given\">A video game map has two triangular zones. In <strong>△JKL</strong>, JK = 50 m, KL = 80 m and JL = 60 m. In <strong>△PQR</strong>, PQ = 90 m, QR = 75 m and PR = 120 m.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that the two zones are similar?",
          choices: [
            { letter: "A", text: "SAS∼" },
            { letter: "B", text: "AA" },
            { letter: "C", text: "SSS∼" },
            { letter: "D", text: "SSS" }
          ],
          correct: "C"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the two zones is correct?",
          choices: [
            { letter: "A", text: "△JKL ∼ △PQR" },
            { letter: "B", text: "△JKL ∼ △QRP" },
            { letter: "C", text: "△JKL ∼ △QPR" },
            { letter: "D", text: "△JKL ∼ △RQP" }
          ],
          correct: "B"
        },
        {
          id: "ari",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Ari says the scale factor from △JKL to △PQR is 25, because 75 − 50 = 25. What is his mistake?",
          choices: [
            { letter: "A", text: "He used the wrong sides; it is 120 − 80 = 40" },
            { letter: "B", text: "He reversed it; it is 50/75 = 2/3" },
            { letter: "C", text: "He subtracted; it is 120/50 = 2.4" },
            { letter: "D", text: "He subtracted; it is 75/50 = 1.5" }
          ],
          correct: "D"
        },
        {
          id: "angle",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which angle of △PQR is congruent to ∠K?",
          choices: [
            { letter: "A", text: "∠R" },
            { letter: "B", text: "∠Q" },
            { letter: "C", text: "∠P" },
            { letter: "D", text: "None; the zones differ in size" }
          ],
          correct: "A"
        },
        {
          id: "new",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "A new zone has sides of 70 m, 80 m and 100 m. Is it similar to △JKL?",
          choices: [
            { letter: "A", text: "Yes; each side is 20 m longer" },
            { letter: "B", text: "No; 70/50 ≠ 100/80" },
            { letter: "C", text: "Yes; both have a longest side opposite the largest angle" },
            { letter: "D", text: "No; it is bigger than △JKL" }
          ],
          correct: "B"
        },
        {
          id: "build",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "A player builds a zone similar to △JKL. Its shortest side is 20 m. How long is its longest side?",
          choices: [
            { letter: "A", text: "50 m" },
            { letter: "B", text: "12.5 m" },
            { letter: "C", text: "32 m" },
            { letter: "D", text: "24 m" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr3-raid-court-shadow",
      family: "GEO",
      mode: "raid",
      title: "Shadows on the Tennis Court",
      kind: "Triangles · G.TR.3",
      blurb: "A player lines up her shadow with a light pole's shadow.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A light pole PQ and a player GH on level ground; the sun ray from P passes H and meets the ground at S; QG 24 feet, GS 8 feet, GH 5.5 feet; right angles at Q and G\">" +
        "<line class=\"thin\" x1=\"14\" y1=\"145\" x2=\"306\" y2=\"145\"/><line class=\"ln\" x1=\"46\" y1=\"145\" x2=\"46\" y2=\"13\"/>" +
        "<line class=\"ln\" x1=\"190\" y1=\"145\" x2=\"190\" y2=\"112\"/><line class=\"ln dash\" x1=\"46\" y1=\"13\" x2=\"238\" y2=\"145\"/>" +
        "<line class=\"ac\" x1=\"46\" y1=\"145\" x2=\"238\" y2=\"145\"/><path class=\"thin\" d=\"M46 137 L54 137 L54 145\"/>" +
        "<path class=\"thin\" d=\"M190 137 L198 137 L198 145\"/><path class=\"thin\" d=\"M219.9 132.5 A22 22 0 0 0 216 145\"/>" +
        "<circle class=\"dt\" cx=\"46\" cy=\"13\" r=\"3\"/><circle class=\"dt\" cx=\"46\" cy=\"145\" r=\"3\"/><circle class=\"dt\" cx=\"190\" cy=\"145\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"190\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"238\" cy=\"145\" r=\"3\"/><text x=\"34\" y=\"20\" text-anchor=\"middle\">P</text>" +
        "<text x=\"46\" y=\"166\" text-anchor=\"middle\">Q</text><text x=\"182\" y=\"166\" text-anchor=\"middle\">G</text>" +
        "<text x=\"247\" y=\"166\" text-anchor=\"middle\">S</text><text x=\"201\" y=\"109\" text-anchor=\"middle\">H</text>" +
        "<text x=\"118\" y=\"166\" text-anchor=\"middle\">24 ft</text><text x=\"214\" y=\"166\" text-anchor=\"middle\">8 ft</text>" +
        "<text class=\"sm\" x=\"168\" y=\"132\" text-anchor=\"middle\">5.5 ft</text><text class=\"acc\" x=\"32\" y=\"85\" text-anchor=\"middle\">h</text></svg></figure>" +
        "<p class=\"geo-given\">A tennis player <strong>GH</strong> stands 24 ft from the base <strong>Q</strong> of a light pole <strong>PQ</strong>. The tip of her shadow and the tip of the pole's shadow meet at <strong>S</strong>. She is 5.5 ft tall, and her shadow GS is 8 ft long. The pole and the player are vertical, on level ground.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is the player's triangle similar to the pole's triangle?",
          choices: [
            { letter: "A", text: "SAS∼: SG/SQ = 8/24 and the right angles" },
            { letter: "B", text: "AA: ∠S is shared, and ∠G and ∠Q are right angles" },
            { letter: "C", text: "SSS∼: three sides of each are known" },
            { letter: "D", text: "HL: both are right triangles" }
          ],
          correct: "B"
        },
        {
          id: "height",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How tall is the light pole PQ (h)?",
          choices: [
            { letter: "A", text: "22 ft" },
            { letter: "B", text: "16.5 ft" },
            { letter: "C", text: "about 46.5 ft" },
            { letter: "D", text: "about 1.4 ft" }
          ],
          correct: "A"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the player's and the pole's triangles is correct?",
          choices: [
            { letter: "A", text: "△SGH ∼ △QSP" },
            { letter: "B", text: "△GSH ∼ △SQP" },
            { letter: "C", text: "△SGH ∼ △SQP" },
            { letter: "D", text: "△SGH ∼ △SPQ" }
          ],
          correct: "C"
        },
        {
          id: "equation",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Which equation can be solved for the pole's height h?",
          choices: [
            { letter: "A", text: "5.5/8 = h/24" },
            { letter: "B", text: "8/5.5 = h/32" },
            { letter: "C", text: "5.5/24 = h/32" },
            { letter: "D", text: "5.5/8 = h/32" }
          ],
          correct: "D"
        },
        {
          id: "child",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "At the same moment, a parent says a 3-ft child nearby casts a 5.5-ft shadow. Can that be right?",
          choices: [
            { letter: "A", text: "No; 3/5.5 ≠ 5.5/8" },
            { letter: "B", text: "Yes; each shadow is 2.5 ft longer than the person" },
            { letter: "C", text: "Yes; a shorter child has a shorter shadow" },
            { letter: "D", text: "No; the child must stand where the tips meet" }
          ],
          correct: "A"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from △SGH to △SQP?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "4" },
            { letter: "C", text: "1/4" },
            { letter: "D", text: "24" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-raid-climbing-wall",
      family: "GEO",
      mode: "raid",
      title: "Sighting the Climbing Wall",
      kind: "Triangles · G.TR.3",
      blurb: "A coach lines up a pole's top with the top of the wall.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A coach's eye E 1.5 meters above the ground sights the top W of a climbing wall over the top T of a 2.5-meter pole; the pole is 2 meters from the coach and the wall is 10 meters beyond the pole; a level dashed line from E meets the pole at M and the wall at N\">" +
        "<line class=\"thin\" x1=\"14\" y1=\"146\" x2=\"314\" y2=\"146\"/><rect class=\"sh2\" x=\"300\" y=\"23.9\" width=\"14\" height=\"122.1\"/>" +
        "<line class=\"ln\" x1=\"36\" y1=\"146\" x2=\"36\" y2=\"122\"/><line class=\"ln\" x1=\"106\" y1=\"146\" x2=\"106\" y2=\"96\"/>" +
        "<line class=\"ac dash\" x1=\"36\" y1=\"122\" x2=\"300\" y2=\"23.9\"/><line class=\"thin dash\" x1=\"36\" y1=\"122\" x2=\"300\" y2=\"122\"/>" +
        "<path class=\"thin\" d=\"M99 122 L99 115 L106 115\"/><path class=\"thin\" d=\"M293 122 L293 115 L300 115\"/><circle class=\"dt\" cx=\"36\" cy=\"122\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"106\" cy=\"96\" r=\"3\"/><circle class=\"dt\" cx=\"106\" cy=\"122\" r=\"3\"/><circle class=\"dt\" cx=\"300\" cy=\"23.9\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"300\" cy=\"122\" r=\"3\"/><text x=\"25\" y=\"118\" text-anchor=\"middle\">E</text><text x=\"98\" y=\"89\" text-anchor=\"middle\">T</text>" +
        "<text x=\"96\" y=\"138\" text-anchor=\"middle\">M</text><text x=\"289\" y=\"138\" text-anchor=\"middle\">N</text>" +
        "<text x=\"288\" y=\"17.9\" text-anchor=\"middle\">W</text><text class=\"sm\" x=\"17\" y=\"138\" text-anchor=\"middle\">1.5 m</text>" +
        "<text x=\"71\" y=\"165\" text-anchor=\"middle\">2 m</text><text x=\"203\" y=\"165\" text-anchor=\"middle\">10 m</text>" +
        "<text class=\"acc\" x=\"288\" y=\"83\" text-anchor=\"middle\">?</text></svg><figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">Coach Ruiz's eye <strong>E</strong> is 1.5 m above the ground. She sights the top <strong>W</strong> of the climbing wall over the top <strong>T</strong> of a 2.5-m pole. The pole is 2 m from her, and the wall is 10 m beyond the pole. The pole and the wall are vertical. The dashed level line from E meets the pole at <strong>M</strong> and the wall at <strong>N</strong>.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why are the two sight triangles with vertex E similar?",
          choices: [
            { letter: "A", text: "SAS∼: EM/EN = 2/10 and the right angles" },
            { letter: "B", text: "SSS∼: EM, MT and ET are known" },
            { letter: "C", text: "AA: ∠T ≅ ∠E and ∠M ≅ ∠N" },
            { letter: "D", text: "AA: ∠E is shared, and ∠M and ∠N are right angles" }
          ],
          correct: "D"
        },
        {
          id: "height",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How tall is the climbing wall, to the nearest tenth of a meter?",
          choices: [
            { letter: "A", text: "6 m" },
            { letter: "B", text: "15 m" },
            { letter: "C", text: "7.5 m" },
            { letter: "D", text: "6.5 m" }
          ],
          correct: "C"
        },
        {
          id: "proportion",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Let x be the height of the wall above the dashed line (NW). Which proportion finds x?",
          choices: [
            { letter: "A", text: "1/2 = x/10" },
            { letter: "B", text: "1/2 = x/12" },
            { letter: "C", text: "2.5/2 = x/12" },
            { letter: "D", text: "2/1 = x/12" }
          ],
          correct: "B"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the two sight triangles is correct?",
          choices: [
            { letter: "A", text: "△EMT ∼ △ENW" },
            { letter: "B", text: "△EMT ∼ △EWN" },
            { letter: "C", text: "△MET ∼ △ENW" },
            { letter: "D", text: "△TME ∼ △NWE" }
          ],
          correct: "A"
        },
        {
          id: "vertical",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Why must the pole and the wall both be vertical for this method to work?",
          choices: [
            { letter: "A", text: "So the pole and the wall are the same height" },
            { letter: "B", text: "So EM and MN are the same length" },
            { letter: "C", text: "So ∠M and ∠N are right angles, for AA" },
            { letter: "D", text: "So the two triangles are congruent" }
          ],
          correct: "C"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from △EMT to △ENW?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "1/6" },
            { letter: "C", text: "3" },
            { letter: "D", text: "6" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-raid-skate-ramps",
      family: "GEO",
      mode: "raid",
      title: "Three Skate Park Ramps",
      kind: "Triangles · G.TR.3",
      blurb: "Rise and run decide which ramps have the same shape.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 120\" role=\"img\" aria-label=\"Side views of three right-triangle ramps: ramp P rises 2 feet over a run of 5 feet, ramp Q rises 3 feet over 7.5 feet, ramp R rises 4 feet over 7 feet\">" +
        "<polygon class=\"sh2\" points=\"10,72 75,72 75,46\"/><path class=\"thin\" d=\"M68 72 L68 65 L75 65\"/><text x=\"42.5\" y=\"90\" text-anchor=\"middle\">5</text>" +
        "<text x=\"82\" y=\"64\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"42.5\" y=\"107\" text-anchor=\"middle\">Ramp P</text>" +
        "<polygon class=\"sh2\" points=\"96,72 193.5,72 193.5,33\"/><path class=\"thin\" d=\"M186.5 72 L186.5 65 L193.5 65\"/>" +
        "<text x=\"144.8\" y=\"90\" text-anchor=\"middle\">7.5</text><text x=\"200.5\" y=\"57.5\" text-anchor=\"middle\">3</text>" +
        "<text class=\"sm\" x=\"144.8\" y=\"107\" text-anchor=\"middle\">Ramp Q</text><polygon class=\"sh2\" points=\"214,72 305,72 305,20\"/>" +
        "<path class=\"thin\" d=\"M298 72 L298 65 L305 65\"/><text x=\"259.5\" y=\"90\" text-anchor=\"middle\">7</text>" +
        "<text x=\"312\" y=\"51\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"259.5\" y=\"107\" text-anchor=\"middle\">Ramp R</text></svg></figure>" +
        "<p class=\"geo-given\">The side view of each skate-park ramp is a right triangle. Ramp <strong>P</strong>: rise 2 ft, run 5 ft. Ramp <strong>Q</strong>: rise 3 ft, run 7.5 ft. Ramp <strong>R</strong>: rise 4 ft, run 7 ft.</p>",
      claims: [
        {
          id: "which",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which two ramps are similar triangles?",
          choices: [
            { letter: "A", text: "P and R" },
            { letter: "B", text: "Q and R" },
            { letter: "C", text: "P and Q" },
            { letter: "D", text: "No two of them" }
          ],
          correct: "C"
        },
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Using the rise, the run and the right angle of each ramp, which criterion shows ramp P ∼ ramp Q?",
          choices: [
            { letter: "A", text: "SAS∼" },
            { letter: "B", text: "AA" },
            { letter: "C", text: "SSS∼" },
            { letter: "D", text: "SAS" }
          ],
          correct: "A"
        },
        {
          id: "rampR",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which statement about ramp R is true?",
          choices: [
            { letter: "A", text: "Similar to P, since each leg is 2 ft longer" },
            { letter: "B", text: "Not similar to P, since 4/2 ≠ 7/5" },
            { letter: "C", text: "Similar to P, since both have a right angle" },
            { letter: "D", text: "Not similar to P, since it is taller" }
          ],
          correct: "B"
        },
        {
          id: "surface",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Ramp P's sloped surface is √29 ft long. To the nearest tenth of a foot, how long is ramp Q's sloped surface?",
          choices: [
            { letter: "A", text: "7.9 ft" },
            { letter: "B", text: "12.1 ft" },
            { letter: "C", text: "8.1 ft" },
            { letter: "D", text: "3.6 ft" }
          ],
          correct: "C"
        },
        {
          id: "design",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "A new ramp is to be similar to ramp P, with a rise of 4 ft. How long should its run be?",
          choices: [
            { letter: "A", text: "7 ft" },
            { letter: "B", text: "1.6 ft" },
            { letter: "C", text: "8 ft" },
            { letter: "D", text: "10 ft" }
          ],
          correct: "D"
        },
        {
          id: "angle",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Ramp P meets the ground at an angle of about 21.8°. To the nearest tenth, what angle does ramp Q make with the ground?",
          choices: [
            { letter: "A", text: "21.8°" },
            { letter: "B", text: "32.7°" },
            { letter: "C", text: "14.5°" },
            { letter: "D", text: "68.2°" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr3-raid-target-stand",
      family: "GEO",
      mode: "raid",
      title: "The Archery Target Stand",
      kind: "Triangles · G.TR.3",
      blurb: "Crossing braces in a frame with two parallel bars.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Trapezoid ABCD, the side frame of a target stand: top bar AB 30 inches parallel to floor bar DC 50 inches; braces AC and BD cross at E; AE 24 inches and BE 18 inches\">" +
        "<polygon class=\"ln\" points=\"78.2,25.1 174.2,25.1 242,148 82,148\"/><line class=\"ln\" x1=\"78.2\" y1=\"25.1\" x2=\"242\" y2=\"148\"/>" +
        "<line class=\"ln\" x1=\"174.2\" y1=\"25.1\" x2=\"82\" y2=\"148\"/><line class=\"ac\" x1=\"78.2\" y1=\"25.1\" x2=\"139.6\" y2=\"71.2\"/>" +
        "<line class=\"ac\" x1=\"174.2\" y1=\"25.1\" x2=\"139.6\" y2=\"71.2\"/><path class=\"thin\" d=\"M125 29.1 L131 25.1 L125 21.1\"/>" +
        "<path class=\"thin\" d=\"M164 152 L170 148 L164 144\"/><circle class=\"dt\" cx=\"78.2\" cy=\"25.1\" r=\"3\"/><circle class=\"dt\" cx=\"174.2\" cy=\"25.1\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"242\" cy=\"148\" r=\"3\"/><circle class=\"dt\" cx=\"82\" cy=\"148\" r=\"3\"/><circle class=\"dt\" cx=\"139.6\" cy=\"71.2\" r=\"3\"/>" +
        "<text x=\"66.2\" y=\"26.1\" text-anchor=\"middle\">A</text><text x=\"186.2\" y=\"26.1\" text-anchor=\"middle\">B</text>" +
        "<text x=\"254\" y=\"159\" text-anchor=\"middle\">C</text><text x=\"70\" y=\"159\" text-anchor=\"middle\">D</text>" +
        "<text x=\"139.6\" y=\"92.2\" text-anchor=\"middle\">E</text><text x=\"126.2\" y=\"19.1\" text-anchor=\"middle\">30</text>" +
        "<text x=\"162\" y=\"167\" text-anchor=\"middle\">50</text><text x=\"100.9\" y=\"65.2\" text-anchor=\"middle\">24</text>" +
        "<text x=\"166.9\" y=\"63.2\" text-anchor=\"middle\">18</text></svg></figure>" +
        "<p class=\"geo-given\">The side frame of an archery target stand is <strong>ABCD</strong>. The top bar AB is parallel to the floor bar DC. Braces <strong>AC</strong> and <strong>BD</strong> cross at <strong>E</strong>. AB = 30 in., DC = 50 in., AE = 24 in. and BE = 18 in.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why are the triangles above and below E similar?",
          choices: [
            { letter: "A", text: "SAS∼: AE/CE = BE/DE, with vertical angles" },
            { letter: "B", text: "AA: alternate interior angles and vertical angles" },
            { letter: "C", text: "SSS∼: AB/DC = 3/5 for all three pairs" },
            { letter: "D", text: "AA: ∠ABE ≅ ∠BAE, since AB is level" }
          ],
          correct: "B"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the triangles above and below E is correct?",
          choices: [
            { letter: "A", text: "△ABE ∼ △DCE" },
            { letter: "B", text: "△BAE ∼ △CDE" },
            { letter: "C", text: "△ABE ∼ △ECD" },
            { letter: "D", text: "△ABE ∼ △CDE" }
          ],
          correct: "D"
        },
        {
          id: "ec",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is EC?",
          choices: [
            { letter: "A", text: "40 in." },
            { letter: "B", text: "14.4 in." },
            { letter: "C", text: "44 in." },
            { letter: "D", text: "30 in." }
          ],
          correct: "A"
        },
        {
          id: "bd",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is the whole brace BD?",
          choices: [
            { letter: "A", text: "30 in." },
            { letter: "B", text: "28.8 in." },
            { letter: "C", text: "38 in." },
            { letter: "D", text: "48 in." }
          ],
          correct: "D"
        },
        {
          id: "second",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "On a second stand, AE = 20 in., EC = 32 in., BE = 15 in. and ED = 27 in. Is AB ∥ DC there?",
          choices: [
            { letter: "A", text: "Yes; the vertical angles at E give AA" },
            { letter: "B", text: "Yes; each brace's long part is 12 in. longer" },
            { letter: "C", text: "No; 20/32 ≠ 15/27" },
            { letter: "D", text: "No; braces AC and BD differ in length" }
          ],
          correct: "C"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the perimeter of △CDE?",
          choices: [
            { letter: "A", text: "43.2 in." },
            { letter: "B", text: "120 in." },
            { letter: "C", text: "200 in." },
            { letter: "D", text: "132 in." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-raid-cone-drill",
      family: "GEO",
      mode: "raid",
      title: "The Soccer Cone Drill",
      kind: "Triangles · G.TR.3",
      blurb: "A run perpendicular to the long side makes three similar triangles.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Right triangle ABC with the right angle at C; segment CD is perpendicular to AB at D; AD 18 yards and DB 32 yards\">" +
        "<line class=\"thin\" x1=\"18\" y1=\"145\" x2=\"302\" y2=\"145\"/><polygon class=\"ln\" points=\"35,145 285,145 125,25\"/>" +
        "<line class=\"ac\" x1=\"125\" y1=\"25\" x2=\"125\" y2=\"145\"/><path class=\"thin\" d=\"M125 137 L133 137 L133 145\"/>" +
        "<path class=\"thin\" d=\"M119.6 32.2 L126.8 37.6 L132.2 30.4\"/><circle class=\"dt\" cx=\"35\" cy=\"145\" r=\"3\"/><circle class=\"dt\" cx=\"285\" cy=\"145\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"125\" cy=\"25\" r=\"3\"/><circle class=\"dt\" cx=\"125\" cy=\"145\" r=\"3\"/><text x=\"24\" y=\"155\" text-anchor=\"middle\">A</text>" +
        "<text x=\"296\" y=\"155\" text-anchor=\"middle\">B</text><text x=\"125\" y=\"18\" text-anchor=\"middle\">C</text>" +
        "<text x=\"125\" y=\"166\" text-anchor=\"middle\">D</text><text x=\"80\" y=\"166\" text-anchor=\"middle\">18 yd</text>" +
        "<text x=\"205\" y=\"166\" text-anchor=\"middle\">32 yd</text></svg></figure>" +
        "<p class=\"geo-given\">A soccer coach sets cones at <strong>A</strong>, <strong>B</strong> and <strong>C</strong> so that ∠ACB is a right angle. A player runs from C straight to <strong>D</strong> on AB, with CD ⊥ AB. AD = 18 yd and DB = 32 yd.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that △ADC is similar to △ACB?",
          choices: [
            { letter: "A", text: "SAS∼" },
            { letter: "B", text: "SSS∼" },
            { letter: "C", text: "HL" },
            { letter: "D", text: "AA" }
          ],
          correct: "D"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement about the two smaller triangles is correct?",
          choices: [
            { letter: "A", text: "△ADC ∼ △CDB" },
            { letter: "B", text: "△ADC ∼ △BDC" },
            { letter: "C", text: "△ADC ∼ △DCB" },
            { letter: "D", text: "△ACD ∼ △CDB" }
          ],
          correct: "A"
        },
        {
          id: "cd",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is the player's run CD?",
          choices: [
            { letter: "A", text: "25 yd" },
            { letter: "B", text: "14 yd" },
            { letter: "C", text: "24 yd" },
            { letter: "D", text: "about 36.7 yd" }
          ],
          correct: "C"
        },
        {
          id: "ac",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How far apart are cones A and C?",
          choices: [
            { letter: "A", text: "24 yd" },
            { letter: "B", text: "30 yd" },
            { letter: "C", text: "40 yd" },
            { letter: "D", text: "25 yd" }
          ],
          correct: "B"
        },
        {
          id: "notTrue",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which statement is NOT true for this drill?",
          choices: [
            { letter: "A", text: "AD/CD = DB/CD" },
            { letter: "B", text: "∠ACD ≅ ∠B" },
            { letter: "C", text: "∠DCB ≅ ∠A" },
            { letter: "D", text: "AD/AC = AC/AB" }
          ],
          correct: "A"
        },
        {
          id: "smaller",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "On a smaller field, the coach sets up the same shape with AB = 30 yd. How long is the run CD there?",
          choices: [
            { letter: "A", text: "4 yd" },
            { letter: "B", text: "about 8.6 yd" },
            { letter: "C", text: "40 yd" },
            { letter: "D", text: "14.4 yd" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-raid-orienteering",
      family: "GEO",
      mode: "raid",
      title: "The Orienteering Course",
      kind: "Triangles · G.TR.3",
      blurb: "One trail splits the course into two triangles.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Quadrilateral ABCD of trails with diagonal trail BD: AB 400, AD 700, BD 600, BC 1050 and CD 900 meters; angle BAD is about 59 degrees\">" +
        "<polygon class=\"ln\" points=\"24,20 108,20 289.1,145.8 100.1,145.8\"/><line class=\"ac\" x1=\"108\" y1=\"20\" x2=\"100.1\" y2=\"145.8\"/>" +
        "<path class=\"thin\" d=\"M44 20 A20 20 0 0 1 34.4 37.1\"/><circle class=\"dt\" cx=\"24\" cy=\"20\" r=\"3\"/><circle class=\"dt\" cx=\"108\" cy=\"20\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"289.1\" cy=\"145.8\" r=\"3\"/><circle class=\"dt\" cx=\"100.1\" cy=\"145.8\" r=\"3\"/><text x=\"13\" y=\"25\" text-anchor=\"middle\">A</text>" +
        "<text x=\"118\" y=\"17\" text-anchor=\"middle\">B</text><text x=\"299.1\" y=\"158.8\" text-anchor=\"middle\">C</text>" +
        "<text x=\"89.1\" y=\"157.8\" text-anchor=\"middle\">D</text><text x=\"66\" y=\"14\" text-anchor=\"middle\">400</text>" +
        "<text x=\"48.4\" y=\"96.2\" text-anchor=\"middle\">700</text><text x=\"88.7\" y=\"77.8\" text-anchor=\"middle\">600</text>" +
        "<text x=\"208.8\" y=\"73.1\" text-anchor=\"middle\">1050</text><text x=\"194.6\" y=\"163.8\" text-anchor=\"middle\">900</text>" +
        "<text class=\"sm\" x=\"53.6\" y=\"40.7\" text-anchor=\"middle\">59°</text></svg></figure>" +
        "<p class=\"geo-given\">Checkpoints <strong>A</strong>, <strong>B</strong>, <strong>C</strong> and <strong>D</strong> of an orienteering course are joined by straight trails: AB = 400 m, AD = 700 m, BD = 600 m, BC = 1050 m and CD = 900 m. m∠BAD ≈ 59°.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that the two triangles on either side of trail BD are similar?",
          choices: [
            { letter: "A", text: "SSS∼" },
            { letter: "B", text: "SAS∼" },
            { letter: "C", text: "AA" },
            { letter: "D", text: "SSS" }
          ],
          correct: "A"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the triangles that share trail BD is correct?",
          choices: [
            { letter: "A", text: "△ABD ∼ △DBC" },
            { letter: "B", text: "△ABD ∼ △BCD" },
            { letter: "C", text: "△ABD ∼ △BDC" },
            { letter: "D", text: "△ADB ∼ △BDC" }
          ],
          correct: "C"
        },
        {
          id: "ratios",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which equal ratios prove that the two triangles are similar?",
          choices: [
            { letter: "A", text: "AB/BC = AD/DC = BD/BD" },
            { letter: "B", text: "AB/BD = AD/BC = BD/DC" },
            { letter: "C", text: "AB/DC = AD/BC = BD/BD" },
            { letter: "D", text: "AB/BD = AD/DC = BD/BC" }
          ],
          correct: "B"
        },
        {
          id: "parallel",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Because the triangles are similar, what else must be true about the course?",
          choices: [
            { letter: "A", text: "AD ∥ BC, since ∠ADB ≅ ∠DBC" },
            { letter: "B", text: "AB = DC, since the triangles are similar" },
            { letter: "C", text: "AD = BC, since BD is a shared side" },
            { letter: "D", text: "AB ∥ DC, since ∠ABD ≅ ∠BDC" }
          ],
          correct: "D"
        },
        {
          id: "smaller",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "A smaller course is to be similar to △BDC, with its longest trail 700 m. How long is its shortest trail?",
          choices: [
            { letter: "A", text: "250 m" },
            { letter: "B", text: "400 m" },
            { letter: "C", text: "1225 m" },
            { letter: "D", text: "600 m" }
          ],
          correct: "B"
        },
        {
          id: "angle",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which angle of △BDC also measures about 59°?",
          choices: [
            { letter: "A", text: "∠BDC" },
            { letter: "B", text: "∠BCD" },
            { letter: "C", text: "∠DBC" },
            { letter: "D", text: "∠ABD" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
