/* SOL Labyrinth — Geometry game (family GEO), reasoning and logic: G.RLT.1 (Virginia 2023 Geometry SOL), v5.20 packs for the
   Wolf Ring (mode "ring": art, design, music and making things) and Root Worms (mode "worms": nature and the outdoors)
   modes. Original items only. A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in
   css/after-hours.css) and the given facts, then six questions about it. Every numeric answer was computed, and every
   distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-rlt1-ring-quilt-blocks",
      family: "GEO",
      mode: "ring",
      title: "The Quilt Block Rule",
      kind: "Logic · G.RLT.1",
      blurb: "A square block, a long block and one rule about corners.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 148\" role=\"img\" aria-label=\"Two quilt blocks with a right-angle mark at every corner. Block S is 8 inches by 8 inches. Block R is 14 inches by 8 inches\"><rect class=\"sh2\" x=\"30\" y=\"24\" width=\"70\" height=\"70\"/><polygon class=\"sh\" points=\"30,94 100,24 100,94\"/><rect class=\"sh2\" x=\"160\" y=\"24\" width=\"122.5\" height=\"70\"/><polygon class=\"sh\" points=\"160,94 221.25,24 282.5,94\"/><path class=\"thin\" d=\"M38 24 V32 H30\"/><path class=\"thin\" d=\"M92 24 V32 H100\"/><path class=\"thin\" d=\"M92 94 V86 H100\"/><path class=\"thin\" d=\"M38 94 V86 H30\"/><path class=\"thin\" d=\"M168 24 V32 H160\"/><path class=\"thin\" d=\"M274.5 24 V32 H282.5\"/><path class=\"thin\" d=\"M274.5 94 V86 H282.5\"/><path class=\"thin\" d=\"M168 94 V86 H160\"/><text x=\"65\" y=\"112\" text-anchor=\"middle\">8 in</text><text x=\"105\" y=\"64\">8 in</text><text x=\"221.25\" y=\"112\" text-anchor=\"middle\">14 in</text><text x=\"287.5\" y=\"64\">8 in</text><text x=\"65\" y=\"140\" text-anchor=\"middle\">Block S</text><text x=\"221.25\" y=\"140\" text-anchor=\"middle\">Block R</text></svg></figure><p class=\"geo-given\">A quilter's rule: “If a quilt block is a square, then it has four right angles.” Let <strong>p</strong> be “A quilt block is a square” and <strong>q</strong> be “The block has four right angles.” The rule is <strong>p → q</strong>, and it is true.</p>",
      claims: [
        {
          id: "but-not",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which symbols stand for “A block has four right angles, but it is not a square”?",
          choices: [
            { letter: "A", text: "p ∧ ~q" },
            { letter: "B", text: "q ∧ ~p" },
            { letter: "C", text: "q ∨ ~p" },
            { letter: "D", text: "~(q ∧ p)" }
          ],
          correct: "B"
        },
        {
          id: "converse",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which sentence is the converse of the quilter's rule?",
          choices: [
            { letter: "A", text: "If a block is not a square, then it does not have four right angles." },
            { letter: "B", text: "If a block does not have four right angles, then it is not a square." },
            { letter: "C", text: "A block is a square if and only if it has four right angles." },
            { letter: "D", text: "If a block has four right angles, then it is a square." }
          ],
          correct: "D"
        },
        {
          id: "contra-symbols",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which is the contrapositive of p → q, written in symbols?",
          choices: [
            { letter: "A", text: "~q → ~p" },
            { letter: "B", text: "~p → ~q" },
            { letter: "C", text: "q → p" },
            { letter: "D", text: "~q → p" }
          ],
          correct: "A"
        },
        {
          id: "block-r",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Block R has four right angles but is not a square. Block R is a counterexample to which statements?",
          choices: [
            { letter: "A", text: "p → q and its contrapositive" },
            { letter: "B", text: "The converse only" },
            { letter: "C", text: "The converse and the inverse" },
            { letter: "D", text: "The inverse only" }
          ],
          correct: "C"
        },
        {
          id: "mo",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Mo finds that block T has four right angles. He says, “So block T is a square.” Which describes Mo's reasoning?",
          choices: [
            { letter: "A", text: "Valid, by the Law of Detachment" },
            { letter: "B", text: "Invalid: it assumes the converse of the rule" },
            { letter: "C", text: "Invalid: it assumes the inverse of the rule" },
            { letter: "D", text: "Valid, by the Law of Syllogism" }
          ],
          correct: "B"
        },
        {
          id: "block-u",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Block U is a square. By the Law of Detachment, what can be concluded?",
          choices: [
            { letter: "A", text: "Block U is 8 in by 8 in." },
            { letter: "B", text: "Nothing can be concluded about block U." },
            { letter: "C", text: "Every block with four right angles is a square." },
            { letter: "D", text: "Block U has four right angles." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt1-ring-photo-contest",
      family: "GEO",
      mode: "ring",
      title: "Photo Contest Entries",
      kind: "Logic · G.RLT.1",
      blurb: "Every photo in the art club's contest, sorted into two sets.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Venn diagram in a rectangle: circles W and P overlap. Small squares stand for photos: 4 in W only, 3 in the overlap, 5 in P only and 2 outside both circles\"><rect class=\"thin\" x=\"6\" y=\"6\" width=\"308\" height=\"148\"/><circle class=\"sh2\" cx=\"118\" cy=\"84\" r=\"62\"/><circle class=\"sh2\" cx=\"202\" cy=\"84\" r=\"62\"/><rect class=\"sh\" x=\"153\" y=\"56.5\" width=\"14\" height=\"11\"/><rect class=\"sh\" x=\"153\" y=\"78.5\" width=\"14\" height=\"11\"/><rect class=\"sh\" x=\"153\" y=\"100.5\" width=\"14\" height=\"11\"/><rect class=\"sh\" x=\"81\" y=\"64.5\" width=\"14\" height=\"11\"/><rect class=\"sh\" x=\"81\" y=\"92.5\" width=\"14\" height=\"11\"/><rect class=\"sh\" x=\"109\" y=\"64.5\" width=\"14\" height=\"11\"/><rect class=\"sh\" x=\"109\" y=\"92.5\" width=\"14\" height=\"11\"/><rect class=\"sh\" x=\"207\" y=\"64.5\" width=\"14\" height=\"11\"/><rect class=\"sh\" x=\"207\" y=\"92.5\" width=\"14\" height=\"11\"/><rect class=\"sh\" x=\"235\" y=\"64.5\" width=\"14\" height=\"11\"/><rect class=\"sh\" x=\"235\" y=\"92.5\" width=\"14\" height=\"11\"/><rect class=\"sh\" x=\"221\" y=\"118.5\" width=\"14\" height=\"11\"/><rect class=\"sh\" x=\"259\" y=\"134.5\" width=\"14\" height=\"11\"/><rect class=\"sh\" x=\"283\" y=\"134.5\" width=\"14\" height=\"11\"/><text x=\"40\" y=\"34\" text-anchor=\"middle\">W</text><text x=\"280\" y=\"34\" text-anchor=\"middle\">P</text></svg></figure><p class=\"geo-given\">The diagram shows every photo entered in an art club's contest. <strong>W</strong> is the set of black-and-white photos and <strong>P</strong> is the set of portraits. Each small square is one photo.</p>",
      claims: [
        {
          id: "both",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many photos are in W ∩ P?",
          choices: [
            { letter: "A", text: "7" },
            { letter: "B", text: "12" },
            { letter: "C", text: "3" },
            { letter: "D", text: "8" }
          ],
          correct: "C"
        },
        {
          id: "union",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many photos are in W ∪ P?",
          choices: [
            { letter: "A", text: "12" },
            { letter: "B", text: "15" },
            { letter: "C", text: "9" },
            { letter: "D", text: "14" }
          ],
          correct: "A"
        },
        {
          id: "not-p",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many photos are in ~P?",
          choices: [
            { letter: "A", text: "8" },
            { letter: "B", text: "4" },
            { letter: "C", text: "11" },
            { letter: "D", text: "6" }
          ],
          correct: "D"
        },
        {
          id: "words",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which phrase describes the photos in W ∩ ~P?",
          choices: [
            { letter: "A", text: "portraits that are not black and white" },
            { letter: "B", text: "black-and-white photos that are not portraits" },
            { letter: "C", text: "photos that are neither black and white nor portraits" },
            { letter: "D", text: "photos that are black and white or are not portraits" }
          ],
          correct: "B"
        },
        {
          id: "landscapes",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "The 2 photos outside both circles are color landscapes. Which expression names their region?",
          choices: [
            { letter: "A", text: "~(W ∪ P)" },
            { letter: "B", text: "~(W ∩ P)" },
            { letter: "C", text: "~W ∩ P" },
            { letter: "D", text: "W ∪ P" }
          ],
          correct: "A"
        },
        {
          id: "converse",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "This statement is true: “If a photo is in W ∩ P, then it is a portrait.” Which is its converse, and is the converse true for these photos?",
          choices: [
            { letter: "A", text: "If a photo is not in W ∩ P, then it is not a portrait; false" },
            { letter: "B", text: "If a photo is not a portrait, then it is not in W ∩ P; true" },
            { letter: "C", text: "If a photo is a portrait, then it is in W ∩ P; true" },
            { letter: "D", text: "If a photo is a portrait, then it is in W ∩ P; false" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt1-ring-stair-light",
      family: "GEO",
      mode: "ring",
      title: "The Backstage Stair Light",
      kind: "Logic · G.RLT.1",
      blurb: "Two switches, one light and four tests by the stage crew.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Backstage stairs with switch A at the bottom, switch B at the top and a light between them. A table of four tests: test 1, A up, B up, light off; test 2, A up, B down, light on; test 3, A down, B up, light on; test 4, A down, B down, light off\"><path class=\"ln\" d=\"M12 146 H33 V125 H54 V104 H75 V83 H96 V62 H117 V41 H128 V146\"/><path class=\"thin dash\" d=\"M20 96 V30 H51 M69 30 H106 V40\"/><circle class=\"ac\" cx=\"60\" cy=\"30\" r=\"9\"/><rect class=\"sh2\" x=\"14\" y=\"96\" width=\"12\" height=\"18\"/><rect class=\"sh2\" x=\"100\" y=\"12\" width=\"12\" height=\"18\"/><text x=\"34\" y=\"110\">A</text><text x=\"84\" y=\"26\">B</text><rect class=\"sh2\" x=\"140\" y=\"8\" width=\"172\" height=\"28\"/><rect class=\"thin\" x=\"140\" y=\"8\" width=\"172\" height=\"140\"/><line class=\"thin\" x1=\"174\" y1=\"8\" x2=\"174\" y2=\"148\"/><line class=\"thin\" x1=\"220\" y1=\"8\" x2=\"220\" y2=\"148\"/><line class=\"thin\" x1=\"266\" y1=\"8\" x2=\"266\" y2=\"148\"/><line class=\"thin\" x1=\"140\" y1=\"36\" x2=\"312\" y2=\"36\"/><line class=\"thin\" x1=\"140\" y1=\"64\" x2=\"312\" y2=\"64\"/><line class=\"thin\" x1=\"140\" y1=\"92\" x2=\"312\" y2=\"92\"/><line class=\"thin\" x1=\"140\" y1=\"120\" x2=\"312\" y2=\"120\"/><text class=\"sm\" x=\"157\" y=\"27\" text-anchor=\"middle\">Test</text><text x=\"197\" y=\"27\" text-anchor=\"middle\">A</text><text x=\"243\" y=\"27\" text-anchor=\"middle\">B</text><text x=\"289\" y=\"27\" text-anchor=\"middle\">Light</text><text x=\"157\" y=\"55\" text-anchor=\"middle\">1</text><text x=\"197\" y=\"55\" text-anchor=\"middle\">up</text><text x=\"243\" y=\"55\" text-anchor=\"middle\">up</text><text class=\"acc\" x=\"289\" y=\"55\" text-anchor=\"middle\">off</text><text x=\"157\" y=\"83\" text-anchor=\"middle\">2</text><text x=\"197\" y=\"83\" text-anchor=\"middle\">up</text><text x=\"243\" y=\"83\" text-anchor=\"middle\">down</text><text class=\"acc\" x=\"289\" y=\"83\" text-anchor=\"middle\">on</text><text x=\"157\" y=\"111\" text-anchor=\"middle\">3</text><text x=\"197\" y=\"111\" text-anchor=\"middle\">down</text><text x=\"243\" y=\"111\" text-anchor=\"middle\">up</text><text class=\"acc\" x=\"289\" y=\"111\" text-anchor=\"middle\">on</text><text x=\"157\" y=\"139\" text-anchor=\"middle\">4</text><text x=\"197\" y=\"139\" text-anchor=\"middle\">down</text><text x=\"243\" y=\"139\" text-anchor=\"middle\">down</text><text class=\"acc\" x=\"289\" y=\"139\" text-anchor=\"middle\">off</text></svg></figure><p class=\"geo-given\">The stage crew tested the light over the backstage stairs. Switch <strong>A</strong> is at the bottom and switch <strong>B</strong> is at the top. Let <strong>a</strong> be “Switch A is up,” <strong>b</strong> be “Switch B is up” and <strong>l</strong> be “The light is on.” The table shows all four tests.</p>",
      claims: [
        {
          id: "a-not-l",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which sentence is a ∧ ~l?",
          choices: [
            { letter: "A", text: "Switch A is up or the light is off." },
            { letter: "B", text: "Switch A is up and the light is off." },
            { letter: "C", text: "Switch A is down and the light is on." },
            { letter: "D", text: "If switch A is up, then the light is off." }
          ],
          correct: "B"
        },
        {
          id: "false-row",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "In which test is a → l false?",
          choices: [
            { letter: "A", text: "Test 3" },
            { letter: "B", text: "Test 2" },
            { letter: "C", text: "Test 4" },
            { letter: "D", text: "Test 1" }
          ],
          correct: "D"
        },
        {
          id: "pattern",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which statement is true in all four tests?",
          choices: [
            { letter: "A", text: "l ↔ (a ↔ b)" },
            { letter: "B", text: "l ↔ (a ∧ b)" },
            { letter: "C", text: "l ↔ ~(a ↔ b)" },
            { letter: "D", text: "l ↔ (a ∨ b)" }
          ],
          correct: "C"
        },
        {
          id: "converse",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Is the converse of “If both switches are up, then the light is off” true in all four tests? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; the light is off only in test 1." },
            { letter: "B", text: "No; in test 4 the light is off but both switches are down." },
            { letter: "C", text: "No; in test 2 the light is off but switch B is down." },
            { letter: "D", text: "Yes; it is the contrapositive of a true statement." }
          ],
          correct: "B"
        },
        {
          id: "tonight",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "The crew's rule is true: “If exactly one switch is up, then the light is on.” Tonight switch A is down and switch B is up. What can be concluded?",
          choices: [
            { letter: "A", text: "The light is on." },
            { letter: "B", text: "The light is off." },
            { letter: "C", text: "Nothing can be concluded about the light." },
            { letter: "D", text: "The light is on only when switch B is up." }
          ],
          correct: "A"
        },
        {
          id: "jo",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Tonight the light is off. Jo says, “So both switches must be down.” Which describes Jo's reasoning?",
          choices: [
            { letter: "A", text: "Valid, by the Law of Detachment" },
            { letter: "B", text: "Valid, by the Law of Syllogism" },
            { letter: "C", text: "Invalid: the light is also off when both switches are up" },
            { letter: "D", text: "Invalid: the light is never off when both switches are down" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt1-ring-shop-tags",
      family: "GEO",
      mode: "ring",
      title: "Tags on the Woodshop Pegboard",
      kind: "Logic · G.RLT.1",
      blurb: "Three rule tags, hung in no special order.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A pegboard with three hanging tags. Tag X reads b implies n. Tag Y reads t implies p. Tag Z reads p implies b\"><rect class=\"sh2\" x=\"6\" y=\"6\" width=\"308\" height=\"138\" rx=\"6\"/><circle class=\"thin\" cx=\"22\" cy=\"20\" r=\"1.6\"/><circle class=\"thin\" cx=\"94\" cy=\"20\" r=\"1.6\"/><circle class=\"thin\" cx=\"118\" cy=\"20\" r=\"1.6\"/><circle class=\"thin\" cx=\"142\" cy=\"20\" r=\"1.6\"/><circle class=\"thin\" cx=\"190\" cy=\"20\" r=\"1.6\"/><circle class=\"thin\" cx=\"214\" cy=\"20\" r=\"1.6\"/><circle class=\"thin\" cx=\"238\" cy=\"20\" r=\"1.6\"/><circle class=\"thin\" cx=\"286\" cy=\"20\" r=\"1.6\"/><circle class=\"dt\" cx=\"58\" cy=\"20\" r=\"3\"/><line class=\"thin\" x1=\"58\" y1=\"20\" x2=\"36\" y2=\"50\"/><line class=\"thin\" x1=\"58\" y1=\"20\" x2=\"80\" y2=\"50\"/><rect class=\"sh\" x=\"14\" y=\"50\" width=\"88\" height=\"70\" rx=\"8\"/><circle class=\"thin\" cx=\"58\" cy=\"60\" r=\"4\"/><text class=\"sm\" x=\"58\" y=\"84\" text-anchor=\"middle\">Tag X</text><text class=\"acc\" x=\"58\" y=\"108\" text-anchor=\"middle\">b → n</text><circle class=\"dt\" cx=\"160\" cy=\"20\" r=\"3\"/><line class=\"thin\" x1=\"160\" y1=\"20\" x2=\"138\" y2=\"50\"/><line class=\"thin\" x1=\"160\" y1=\"20\" x2=\"182\" y2=\"50\"/><rect class=\"sh\" x=\"116\" y=\"50\" width=\"88\" height=\"70\" rx=\"8\"/><circle class=\"thin\" cx=\"160\" cy=\"60\" r=\"4\"/><text class=\"sm\" x=\"160\" y=\"84\" text-anchor=\"middle\">Tag Y</text><text class=\"acc\" x=\"160\" y=\"108\" text-anchor=\"middle\">t → p</text><circle class=\"dt\" cx=\"262\" cy=\"20\" r=\"3\"/><line class=\"thin\" x1=\"262\" y1=\"20\" x2=\"240\" y2=\"50\"/><line class=\"thin\" x1=\"262\" y1=\"20\" x2=\"284\" y2=\"50\"/><rect class=\"sh\" x=\"218\" y=\"50\" width=\"88\" height=\"70\" rx=\"8\"/><circle class=\"thin\" cx=\"262\" cy=\"60\" r=\"4\"/><text class=\"sm\" x=\"262\" y=\"84\" text-anchor=\"middle\">Tag Z</text><text class=\"acc\" x=\"262\" y=\"108\" text-anchor=\"middle\">p → b</text><text class=\"sm\" x=\"160\" y=\"138\" text-anchor=\"middle\">Woodshop rules</text></svg></figure><p class=\"geo-given\">Each tag is a true rule for students in the woodshop. <strong>t</strong> is “The student uses the table saw,” <strong>p</strong> is “The student passed the saw test,” <strong>b</strong> is “The student has a green badge” and <strong>n</strong> is “The student's name is on the shop board.”</p>",
      claims: [
        {
          id: "order",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "In which order do the tags link t to n by the Law of Syllogism?",
          choices: [
            { letter: "A", text: "X, Y, Z" },
            { letter: "B", text: "Z, Y, X" },
            { letter: "C", text: "Y, Z, X" },
            { letter: "D", text: "Y, X, Z" }
          ],
          correct: "C"
        },
        {
          id: "chain",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Which conclusion follows from all three tags, written in symbols?",
          choices: [
            { letter: "A", text: "t → n" },
            { letter: "B", text: "n → t" },
            { letter: "C", text: "t ↔ n" },
            { letter: "D", text: "~t → ~n" }
          ],
          correct: "A"
        },
        {
          id: "ava",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Ava has no green badge. Using the tags, what can be concluded?",
          choices: [
            { letter: "A", text: "Ava's name is not on the shop board." },
            { letter: "B", text: "Ava uses the table saw but did not pass the saw test." },
            { letter: "C", text: "Nothing can be concluded about Ava." },
            { letter: "D", text: "Ava does not use the table saw." }
          ],
          correct: "D"
        },
        {
          id: "dee",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Cy's name is on the shop board. Dee says, “So Cy has a green badge.” Which describes Dee's reasoning?",
          choices: [
            { letter: "A", text: "Valid, by the Law of Detachment with tag X" },
            { letter: "B", text: "Invalid: it assumes the converse of tag X" },
            { letter: "C", text: "Invalid: it assumes the inverse of tag X" },
            { letter: "D", text: "Valid, by the Law of Syllogism" }
          ],
          correct: "B"
        },
        {
          id: "contra-y",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which sentence is the contrapositive of tag Y?",
          choices: [
            { letter: "A", text: "If a student did not pass the saw test, then the student does not use the table saw." },
            { letter: "B", text: "If a student does not use the table saw, then the student did not pass the saw test." },
            { letter: "C", text: "If a student passed the saw test, then the student uses the table saw." },
            { letter: "D", text: "If a student did not pass the saw test, then the student uses the table saw." }
          ],
          correct: "A"
        },
        {
          id: "p-not-b",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which sentence is p ∧ ~b?",
          choices: [
            { letter: "A", text: "The student did not pass the saw test and has a green badge." },
            { letter: "B", text: "The student passed the saw test or does not have a green badge." },
            { letter: "C", text: "If the student passed the saw test, then the student does not have a green badge." },
            { letter: "D", text: "The student passed the saw test and does not have a green badge." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt1-ring-music-rosters",
      family: "GEO",
      mode: "ring",
      title: "Band, Orchestra and Jazz",
      kind: "Logic · G.RLT.1",
      blurb: "Four roster cards to sort into a Venn diagram.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"Four roster cards. Band: Ada, Ben, Cara, Dev, Eli, Fay, Gus. Orchestra: Cara, Eli, Hal, Ines, Jun. Jazz band: Ben, Eli, Gus. Theory only: Kip, Lia\"><rect class=\"sh2\" x=\"6\" y=\"6\" width=\"74\" height=\"22\"/><rect class=\"thin\" x=\"6\" y=\"6\" width=\"74\" height=\"152\" rx=\"4\"/><text class=\"sm\" x=\"43\" y=\"21\" text-anchor=\"middle\">Band</text><text x=\"43\" y=\"46\" text-anchor=\"middle\">Ada</text><text x=\"43\" y=\"63\" text-anchor=\"middle\">Ben</text><text x=\"43\" y=\"80\" text-anchor=\"middle\">Cara</text><text x=\"43\" y=\"97\" text-anchor=\"middle\">Dev</text><text x=\"43\" y=\"114\" text-anchor=\"middle\">Eli</text><text x=\"43\" y=\"131\" text-anchor=\"middle\">Fay</text><text x=\"43\" y=\"148\" text-anchor=\"middle\">Gus</text><rect class=\"sh2\" x=\"84\" y=\"6\" width=\"74\" height=\"22\"/><rect class=\"thin\" x=\"84\" y=\"6\" width=\"74\" height=\"152\" rx=\"4\"/><text class=\"sm\" x=\"121\" y=\"21\" text-anchor=\"middle\">Orchestra</text><text x=\"121\" y=\"46\" text-anchor=\"middle\">Cara</text><text x=\"121\" y=\"63\" text-anchor=\"middle\">Eli</text><text x=\"121\" y=\"80\" text-anchor=\"middle\">Hal</text><text x=\"121\" y=\"97\" text-anchor=\"middle\">Ines</text><text x=\"121\" y=\"114\" text-anchor=\"middle\">Jun</text><rect class=\"sh2\" x=\"162\" y=\"6\" width=\"74\" height=\"22\"/><rect class=\"thin\" x=\"162\" y=\"6\" width=\"74\" height=\"152\" rx=\"4\"/><text class=\"sm\" x=\"199\" y=\"21\" text-anchor=\"middle\">Jazz band</text><text x=\"199\" y=\"46\" text-anchor=\"middle\">Ben</text><text x=\"199\" y=\"63\" text-anchor=\"middle\">Eli</text><text x=\"199\" y=\"80\" text-anchor=\"middle\">Gus</text><rect class=\"sh2\" x=\"240\" y=\"6\" width=\"74\" height=\"22\"/><rect class=\"thin\" x=\"240\" y=\"6\" width=\"74\" height=\"152\" rx=\"4\"/><text class=\"sm\" x=\"277\" y=\"21\" text-anchor=\"middle\">Theory only</text><text x=\"277\" y=\"46\" text-anchor=\"middle\">Kip</text><text x=\"277\" y=\"63\" text-anchor=\"middle\">Lia</text></svg></figure><p class=\"geo-given\">The cards list all 12 students in a school's music department. <strong>B</strong> is the set of students in band, <strong>O</strong> the set in orchestra and <strong>J</strong> the set in jazz band. A name on two cards is in both groups. Kip and Lia take only music theory.</p>",
      claims: [
        {
          id: "b-and-o",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many students are in B ∩ O?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "2" },
            { letter: "C", text: "1" },
            { letter: "D", text: "10" }
          ],
          correct: "B"
        },
        {
          id: "neither",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many of the 12 students are in ~(B ∪ O)?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "10" },
            { letter: "C", text: "2" },
            { letter: "D", text: "0" }
          ],
          correct: "C"
        },
        {
          id: "o-not-b",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which student is in O ∩ ~B?",
          choices: [
            { letter: "A", text: "Hal" },
            { letter: "B", text: "Cara" },
            { letter: "C", text: "Gus" },
            { letter: "D", text: "Lia" }
          ],
          correct: "A"
        },
        {
          id: "true-cond",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which conditional is true for all 12 students?",
          choices: [
            { letter: "A", text: "If a student is in band, then the student is in jazz band." },
            { letter: "B", text: "If a student is in orchestra, then the student is not in jazz band." },
            { letter: "C", text: "If a student is not in jazz band, then the student is not in band." },
            { letter: "D", text: "If a student is in jazz band, then the student is in band." }
          ],
          correct: "D"
        },
        {
          id: "ines",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "A rule says, “If a student is in jazz band, then the student is in band.” Ines is not in band. What can be concluded from the rule?",
          choices: [
            { letter: "A", text: "Ines is not in jazz band." },
            { letter: "B", text: "Ines is in jazz band." },
            { letter: "C", text: "Ines is not in orchestra." },
            { letter: "D", text: "Nothing can be concluded about Ines." }
          ],
          correct: "A"
        },
        {
          id: "pia",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "A new student, Max, joins band. Pia says, “The rule ‘If a student is in jazz band, then the student is in band’ shows that Max is in jazz band.” Which describes Pia's reasoning?",
          choices: [
            { letter: "A", text: "Valid, by the Law of Detachment" },
            { letter: "B", text: "Invalid: it uses the inverse of the rule" },
            { letter: "C", text: "Invalid: it uses the converse of the rule" },
            { letter: "D", text: "Valid, because Ben and Gus are in both groups" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt1-ring-set-pieces",
      family: "GEO",
      mode: "ring",
      title: "Bracing the Stage Set",
      kind: "Logic · G.RLT.1",
      blurb: "Three set pieces, two rules and a proof with two blanks.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Three stage set pieces drawn to scale on the floor: a tower 10 feet tall, a flat wall 8 feet tall and an arch 7.5 feet tall\"><line class=\"ln\" x1=\"6\" y1=\"150\" x2=\"314\" y2=\"150\"/><rect class=\"sh2\" x=\"30\" y=\"30\" width=\"50\" height=\"120\"/><rect class=\"thin\" x=\"45\" y=\"44\" width=\"20\" height=\"18\"/><text class=\"sm\" x=\"55\" y=\"120\" text-anchor=\"middle\">Tower</text><rect class=\"sh2\" x=\"120\" y=\"54\" width=\"70\" height=\"96\"/><text class=\"sm\" x=\"155\" y=\"120\" text-anchor=\"middle\">Wall</text><path class=\"sh2\" d=\"M226 150 V60 H290 V150 H274 V108 A16 16 0 0 0 242 108 V150 Z\"/><text class=\"sm\" x=\"258\" y=\"80\" text-anchor=\"middle\">Arch</text><text x=\"55\" y=\"22\" text-anchor=\"middle\">10 ft</text><text x=\"155\" y=\"46\" text-anchor=\"middle\">8 ft</text><text x=\"258\" y=\"52\" text-anchor=\"middle\">7.5 ft</text></svg></figure><p class=\"geo-given\">The theater crew follows two true rules. <strong>Rule 1:</strong> If a set piece is taller than 8 ft, then it needs a brace. <strong>Rule 2:</strong> If a set piece needs a brace, then the stage manager signs it off. In the table, “the manager” is the stage manager.</p><table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. If a piece is taller than 8 ft, then it needs a brace.</td><td>Rule 1</td></tr><tr><td>2. If a piece needs a brace, then the manager signs it off.</td><td>Rule 2</td></tr><tr><td>3. The tower is taller than 8 ft.</td><td>Figure (10 ft)</td></tr><tr><td>4. The tower needs a brace.</td><td>Detachment (1, 3)</td></tr><tr><td>5. The manager signs off the tower.</td><td>____</td></tr><tr><td>6. If a piece is taller than 8 ft, then the manager signs it off.</td><td>____</td></tr></table>",
      claims: [
        {
          id: "step-5",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "What is the reason for step 5?",
          choices: [
            { letter: "A", text: "Law of Syllogism, using steps 1 and 2" },
            { letter: "B", text: "Law of Detachment, using steps 2 and 4" },
            { letter: "C", text: "Law of Detachment, using steps 1 and 3" },
            { letter: "D", text: "The converse of step 2" }
          ],
          correct: "B"
        },
        {
          id: "step-6",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "What is the reason for step 6?",
          choices: [
            { letter: "A", text: "Law of Detachment, using steps 3 and 5" },
            { letter: "B", text: "Law of Syllogism, using steps 4 and 5" },
            { letter: "C", text: "The contrapositive of step 1" },
            { letter: "D", text: "Law of Syllogism, using steps 1 and 2" }
          ],
          correct: "D"
        },
        {
          id: "rafa",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Rafa says, “The wall is not taller than 8 ft, so it does not need a brace.” Which describes Rafa's reasoning?",
          choices: [
            { letter: "A", text: "Invalid: it assumes the inverse of rule 1" },
            { letter: "B", text: "Valid, by the contrapositive of rule 1" },
            { letter: "C", text: "Invalid: it assumes the converse of rule 1" },
            { letter: "D", text: "Valid, by the Law of Detachment" }
          ],
          correct: "A"
        },
        {
          id: "contra-2",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which is the contrapositive of rule 2?",
          choices: [
            { letter: "A", text: "If the stage manager signs off a piece, then it needs a brace." },
            { letter: "B", text: "If a piece does not need a brace, then the stage manager does not sign it off." },
            { letter: "C", text: "If the stage manager does not sign off a piece, then it does not need a brace." },
            { letter: "D", text: "If a piece does not need a brace, then the stage manager signs it off." }
          ],
          correct: "C"
        },
        {
          id: "stairs",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "The stage manager did not sign off a new piece, the stairs. Using the rules, which conclusion about the stairs is valid?",
          choices: [
            { letter: "A", text: "The stairs need a brace." },
            { letter: "B", text: "The stairs are taller than 8 ft." },
            { letter: "C", text: "The stairs are exactly 8 ft tall." },
            { letter: "D", text: "The stairs are not taller than 8 ft." }
          ],
          correct: "D"
        },
        {
          id: "tower-symbols",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Let t be “The tower is taller than 8 ft,” b be “The tower needs a brace” and m be “The stage manager signs off the tower.” Which statement is true?",
          choices: [
            { letter: "A", text: "t ∧ ~m" },
            { letter: "B", text: "~b ∨ ~m" },
            { letter: "C", text: "b ∧ m" },
            { letter: "D", text: "t → ~b" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt1-ring-craft-fair",
      family: "GEO",
      mode: "ring",
      title: "Booths at the Craft Fair",
      kind: "Logic · G.RLT.1",
      blurb: "Fill a three-circle diagram from a card of totals.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Three overlapping circles W, G and F with 3 written in the center where all three overlap; the other regions are blank. A card lists: booths 50; W 22; G 18; F 25; W and G 7; W and F 9; G and F 6\"><rect class=\"thin\" x=\"6\" y=\"6\" width=\"196\" height=\"148\"/><circle class=\"sh2\" cx=\"72\" cy=\"58\" r=\"46\"/><circle class=\"sh2\" cx=\"128\" cy=\"58\" r=\"46\"/><circle class=\"sh2\" cx=\"100\" cy=\"104\" r=\"46\"/><text class=\"acc\" x=\"100\" y=\"78\" text-anchor=\"middle\">3</text><text x=\"20\" y=\"26\" text-anchor=\"middle\">W</text><text x=\"184\" y=\"26\" text-anchor=\"middle\">G</text><text x=\"36\" y=\"146\" text-anchor=\"middle\">F</text><rect class=\"sh\" x=\"208\" y=\"6\" width=\"106\" height=\"148\" rx=\"6\"/><text x=\"261\" y=\"28\" text-anchor=\"middle\">Booths: 50</text><text x=\"261\" y=\"48\" text-anchor=\"middle\">W: 22</text><text x=\"261\" y=\"68\" text-anchor=\"middle\">G: 18</text><text x=\"261\" y=\"88\" text-anchor=\"middle\">F: 25</text><text x=\"261\" y=\"108\" text-anchor=\"middle\">W and G: 7</text><text x=\"261\" y=\"128\" text-anchor=\"middle\">W and F: 9</text><text x=\"261\" y=\"148\" text-anchor=\"middle\">G and F: 6</text></svg></figure><p class=\"geo-given\">A craft fair has 50 booths. <strong>W</strong> is the set of booths that sell wood items, <strong>G</strong> glass items and <strong>F</strong> fabric items. The card gives how many booths are in each set and in each pair of sets. Each pair count includes the 3 booths that sell all three kinds.</p>",
      claims: [
        {
          id: "wg-only",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many booths sell wood and glass items but not fabric items?",
          choices: [
            { letter: "A", text: "7" },
            { letter: "B", text: "4" },
            { letter: "C", text: "1" },
            { letter: "D", text: "10" }
          ],
          correct: "B"
        },
        {
          id: "w-only",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many booths sell wood items only?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "15" },
            { letter: "C", text: "22" },
            { letter: "D", text: "9" }
          ],
          correct: "D"
        },
        {
          id: "none",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many of the 50 booths are in none of the three sets?",
          choices: [
            { letter: "A", text: "7" },
            { letter: "B", text: "10" },
            { letter: "C", text: "4" },
            { letter: "D", text: "20" }
          ],
          correct: "C"
        },
        {
          id: "exactly-two",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many booths are in exactly two of the three sets?",
          choices: [
            { letter: "A", text: "13" },
            { letter: "B", text: "22" },
            { letter: "C", text: "16" },
            { letter: "D", text: "30" }
          ],
          correct: "A"
        },
        {
          id: "padded",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "A fair rule says, “If a booth sells glass items, then it has a padded table.” Using the rule and the card, how many booths must have a padded table?",
          choices: [
            { letter: "A", text: "8" },
            { letter: "B", text: "32" },
            { letter: "C", text: "18" },
            { letter: "D", text: "3" }
          ],
          correct: "C"
        },
        {
          id: "booth-31",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "A fair rule says, “If a booth sells glass items, then it has a padded table.” Booth 31 has no padded table. What can be concluded?",
          choices: [
            { letter: "A", text: "Booth 31 sells none of the three kinds of items." },
            { letter: "B", text: "Booth 31 does not sell glass items." },
            { letter: "C", text: "Booth 31 sells wood items." },
            { letter: "D", text: "Nothing can be concluded about booth 31." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt1-worms-campfire",
      family: "GEO",
      mode: "worms",
      title: "Fire Rings at the Campground",
      kind: "Logic · G.RLT.1",
      blurb: "One campground rule and four campsites.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 148\" role=\"img\" aria-label=\"A loop road with four campsites. Site A has a fire ring with a campfire in it. Site B has a fire ring and no campfire. Site C has no fire ring and no campfire. Site D has a campfire and no fire ring\"><rect class=\"ln\" x=\"8\" y=\"30\" width=\"304\" height=\"90\" rx=\"20\"/><rect class=\"sh2\" x=\"26\" y=\"52\" width=\"48\" height=\"48\"/><text x=\"50\" y=\"47\" text-anchor=\"middle\">A</text><circle class=\"thin\" cx=\"50\" cy=\"78\" r=\"13\"/><path class=\"dta\" d=\"M50 85 C43 85 44 77 50 69 C56 77 57 85 50 85 Z\"/><rect class=\"sh2\" x=\"100\" y=\"52\" width=\"48\" height=\"48\"/><text x=\"124\" y=\"47\" text-anchor=\"middle\">B</text><circle class=\"thin\" cx=\"124\" cy=\"78\" r=\"13\"/><rect class=\"sh2\" x=\"174\" y=\"52\" width=\"48\" height=\"48\"/><text x=\"198\" y=\"47\" text-anchor=\"middle\">C</text><rect class=\"sh2\" x=\"248\" y=\"52\" width=\"48\" height=\"48\"/><text x=\"272\" y=\"47\" text-anchor=\"middle\">D</text><path class=\"dta\" d=\"M272 85 C265 85 266 77 272 69 C278 77 279 85 272 85 Z\"/><circle class=\"thin\" cx=\"20\" cy=\"137\" r=\"6\"/><text class=\"sm\" x=\"32\" y=\"141\">fire ring</text><path class=\"dta\" d=\"M124 142.25 C118.75 142.25 119.5 136.25 124 130.25 C128.5 136.25 129.25 142.25 124 142.25 Z\"/><text class=\"sm\" x=\"134\" y=\"141\">campfire</text></svg></figure><p class=\"geo-given\">The campground rule is “If a site has a campfire, then the site has a fire ring.” Let <strong>f</strong> be “The site has a campfire” and <strong>r</strong> be “The site has a fire ring.” The map shows four sites one evening.</p>",
      claims: [
        {
          id: "false-site",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "At which site is f → r false?",
          choices: [
            { letter: "A", text: "Site B" },
            { letter: "B", text: "Site C" },
            { letter: "C", text: "Site D" },
            { letter: "D", text: "Site A" }
          ],
          correct: "C"
        },
        {
          id: "converse",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which sentence is the converse of the campground rule?",
          choices: [
            { letter: "A", text: "If a site has a fire ring, then the site has a campfire." },
            { letter: "B", text: "If a site has no campfire, then the site has no fire ring." },
            { letter: "C", text: "If a site has no fire ring, then the site has no campfire." },
            { letter: "D", text: "A site has a campfire if and only if it has a fire ring." }
          ],
          correct: "A"
        },
        {
          id: "converse-site",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which site shows that the converse of the rule is false?",
          choices: [
            { letter: "A", text: "Site D" },
            { letter: "B", text: "Site B" },
            { letter: "C", text: "Site C" },
            { letter: "D", text: "Site A" }
          ],
          correct: "B"
        },
        {
          id: "not-f-and-r",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which sentence is ~f ∧ r?",
          choices: [
            { letter: "A", text: "The site has a campfire, and it has no fire ring." },
            { letter: "B", text: "The site has no campfire, or it has a fire ring." },
            { letter: "C", text: "If the site has no campfire, then it has a fire ring." },
            { letter: "D", text: "The site has no campfire, and it has a fire ring." }
          ],
          correct: "D"
        },
        {
          id: "site-e",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Assume every site follows the rule. A ranger sees a campfire at site E. What can the ranger conclude?",
          choices: [
            { letter: "A", text: "Nothing can be concluded about site E." },
            { letter: "B", text: "Site E has no fire ring." },
            { letter: "C", text: "Site E has a fire ring." },
            { letter: "D", text: "Every site with a fire ring has a campfire." }
          ],
          correct: "C"
        },
        {
          id: "lu",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Assume every site follows the rule. Site F has a fire ring. Lu says, “So site F has a campfire.” Which describes Lu's reasoning?",
          choices: [
            { letter: "A", text: "Invalid: it assumes the converse of the rule" },
            { letter: "B", text: "Valid, by the Law of Detachment" },
            { letter: "C", text: "Invalid: it assumes the inverse of the rule" },
            { letter: "D", text: "Valid, by the contrapositive of the rule" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt1-worms-bird-feeder",
      family: "GEO",
      mode: "worms",
      title: "Visitors to the Backyard Feeder",
      kind: "Logic · G.RLT.1",
      blurb: "One morning of bird counts in a two-circle diagram.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Venn diagram in a rectangle: circle S and a smaller circle B overlap. S only holds 12, the overlap holds 7, B only holds 9, and 4 are outside both circles\"><rect class=\"thin\" x=\"6\" y=\"6\" width=\"308\" height=\"138\"/><circle class=\"sh2\" cx=\"125\" cy=\"76\" r=\"60\"/><circle class=\"sh\" cx=\"203\" cy=\"76\" r=\"50\"/><text x=\"95\" y=\"81\" text-anchor=\"middle\">12</text><text x=\"169\" y=\"81\" text-anchor=\"middle\">7</text><text x=\"228\" y=\"81\" text-anchor=\"middle\">9</text><text x=\"292\" y=\"134\" text-anchor=\"middle\">4</text><text x=\"42\" y=\"30\" text-anchor=\"middle\">S</text><text x=\"274\" y=\"30\" text-anchor=\"middle\">B</text></svg></figure><p class=\"geo-given\">A family counted 32 birds one morning. <strong>S</strong> is the set of birds that ate seed from the feeder, and <strong>B</strong> is the set that used the birdbath. Each number is the number of birds in that region.</p>",
      claims: [
        {
          id: "bath",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many birds used the birdbath?",
          choices: [
            { letter: "A", text: "9" },
            { letter: "B", text: "16" },
            { letter: "C", text: "7" },
            { letter: "D", text: "28" }
          ],
          correct: "B"
        },
        {
          id: "union",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many birds are in S ∪ B?",
          choices: [
            { letter: "A", text: "35" },
            { letter: "B", text: "21" },
            { letter: "C", text: "32" },
            { letter: "D", text: "28" }
          ],
          correct: "D"
        },
        {
          id: "not-s",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many birds are in ~S?",
          choices: [
            { letter: "A", text: "13" },
            { letter: "B", text: "19" },
            { letter: "C", text: "9" },
            { letter: "D", text: "4" }
          ],
          correct: "A"
        },
        {
          id: "bath-no-seed",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which expression describes the birds that used the birdbath but did not eat seed?",
          choices: [
            { letter: "A", text: "S ∩ ~B" },
            { letter: "B", text: "~(S ∪ B)" },
            { letter: "C", text: "~S ∩ B" },
            { letter: "D", text: "~S ∪ B" }
          ],
          correct: "C"
        },
        {
          id: "converse",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Consider “If a bird ate seed, then it used the birdbath.” Is its converse true for these 32 birds? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; all 16 birds that used the birdbath ate seed." },
            { letter: "B", text: "No; 4 birds used the birdbath but did not eat seed." },
            { letter: "C", text: "No; 9 birds used the birdbath but did not eat seed." },
            { letter: "D", text: "Yes; only 7 birds used the birdbath." }
          ],
          correct: "C"
        },
        {
          id: "outside",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Let s be “The bird ate seed” and b be “The bird used the birdbath.” Which statement is true for each of the 4 birds outside both circles?",
          choices: [
            { letter: "A", text: "s ∨ b" },
            { letter: "B", text: "~(s ∨ b)" },
            { letter: "C", text: "~s ∧ b" },
            { letter: "D", text: "s ↔ ~b" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt1-worms-tree-key",
      family: "GEO",
      mode: "worms",
      title: "The Park's Tree Key",
      kind: "Logic · G.RLT.1",
      blurb: "A yes-or-no key for the four kinds of trees in a park.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"A branching key. The first box asks Needles? Yes leads to a box asking Bundles of 5?, whose yes branch ends at White pine and no branch at Spruce. No leads to a box asking Opposite?, whose yes branch ends at Maple and no branch at Oak\"><rect class=\"sh2\" x=\"112\" y=\"4\" width=\"96\" height=\"26\" rx=\"5\"/><text x=\"160\" y=\"22\" text-anchor=\"middle\">Needles?</text><rect class=\"sh2\" x=\"16\" y=\"54\" width=\"124\" height=\"26\" rx=\"5\"/><text x=\"78\" y=\"72\" text-anchor=\"middle\">Bundles of 5?</text><rect class=\"sh2\" x=\"180\" y=\"54\" width=\"124\" height=\"26\" rx=\"5\"/><text x=\"242\" y=\"72\" text-anchor=\"middle\">Opposite?</text><line class=\"thin\" x1=\"160\" y1=\"30\" x2=\"78\" y2=\"54\"/><line class=\"thin\" x1=\"160\" y1=\"30\" x2=\"242\" y2=\"54\"/><text class=\"sm\" x=\"104\" y=\"37\" text-anchor=\"end\">yes</text><text class=\"sm\" x=\"214\" y=\"37\">no</text><line class=\"thin\" x1=\"78\" y1=\"80\" x2=\"42\" y2=\"122\"/><line class=\"thin\" x1=\"78\" y1=\"80\" x2=\"124\" y2=\"122\"/><text class=\"sm\" x=\"52\" y=\"100\" text-anchor=\"end\">yes</text><text class=\"sm\" x=\"108\" y=\"100\">no</text><line class=\"thin\" x1=\"242\" y1=\"80\" x2=\"204\" y2=\"122\"/><line class=\"thin\" x1=\"242\" y1=\"80\" x2=\"280\" y2=\"122\"/><text class=\"sm\" x=\"216\" y=\"100\" text-anchor=\"end\">yes</text><text class=\"sm\" x=\"272\" y=\"100\">no</text><text x=\"42\" y=\"140\" text-anchor=\"middle\">White pine</text><text x=\"124\" y=\"140\" text-anchor=\"middle\">Spruce</text><text x=\"204\" y=\"140\" text-anchor=\"middle\">Maple</text><text x=\"280\" y=\"140\" text-anchor=\"middle\">Oak</text></svg></figure><p class=\"geo-given\">Every tree in a park is a white pine, a spruce, a maple or an oak, and this key names each one correctly. “Bundles of 5?” asks whether the needles grow in bundles of 5. “Opposite?” asks whether the leaves grow in opposite pairs. Let <strong>n</strong> be “The tree has needles,” <strong>f</strong> be “Its needles grow in bundles of 5” and <strong>o</strong> be “Its leaves grow in opposite pairs.”</p>",
      claims: [
        {
          id: "bundles",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "A park tree has needles that grow in bundles of 5. Using the key, what can be concluded?",
          choices: [
            { letter: "A", text: "It is a spruce." },
            { letter: "B", text: "It is a pine or a spruce; the key cannot tell which." },
            { letter: "C", text: "It is a white pine." },
            { letter: "D", text: "Its leaves grow in opposite pairs." }
          ],
          correct: "C"
        },
        {
          id: "spruce",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which statement is true for every spruce in the park?",
          choices: [
            { letter: "A", text: "n ∧ f" },
            { letter: "B", text: "n ∧ ~f" },
            { letter: "C", text: "~n ∧ ~f" },
            { letter: "D", text: "~n ∨ f" }
          ],
          correct: "B"
        },
        {
          id: "which-tree",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "For which kind of tree is ~n ∧ ~o true?",
          choices: [
            { letter: "A", text: "Maple" },
            { letter: "B", text: "Spruce" },
            { letter: "C", text: "White pine" },
            { letter: "D", text: "Oak" }
          ],
          correct: "D"
        },
        {
          id: "false-converse",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which conditional is true for every tree in the park, but has a converse that is false?",
          choices: [
            { letter: "A", text: "If a tree has needles in bundles of 5, then it is a white pine." },
            { letter: "B", text: "If a tree has needles, then it is a spruce." },
            { letter: "C", text: "If a tree is an oak, then its leaves grow in opposite pairs." },
            { letter: "D", text: "If a tree is a spruce, then it has needles." }
          ],
          correct: "D"
        },
        {
          id: "syllogism",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "These are true in the park: “If a tree is a maple, then its leaves grow in opposite pairs.” “If a tree's leaves grow in opposite pairs, then it has no needles.” What follows by the Law of Syllogism?",
          choices: [
            { letter: "A", text: "If a tree is a maple, then it has no needles." },
            { letter: "B", text: "If a tree has no needles, then it is a maple." },
            { letter: "C", text: "If a tree has needles, then it is a maple." },
            { letter: "D", text: "If a tree is not a maple, then it has needles." }
          ],
          correct: "A"
        },
        {
          id: "kai",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Kai finds a park tree with no needles. He says, “It is not a spruce, so it must be a maple.” Which describes Kai's reasoning?",
          choices: [
            { letter: "A", text: "Valid: the key sends every tree with no needles to the maple" },
            { letter: "B", text: "Valid, by the Law of Detachment" },
            { letter: "C", text: "Invalid: the tree could be an oak" },
            { letter: "D", text: "Invalid: a tree with no needles could be a spruce" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt1-worms-garden-grid",
      family: "GEO",
      mode: "worms",
      title: "Sun and Water in the Garden",
      kind: "Logic · G.RLT.1",
      blurb: "Twenty garden beds; build the Venn diagram yourself.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 154\" role=\"img\" aria-label=\"A grid of 20 garden beds numbered 1 to 20 in four rows of five. Beds 1, 2, 4, 7, 8, 10, 13, 14, 16, 19 and 20 are shaded. Beds 2, 7, 10, 14, 16 and 20 have a gold dot\"><rect class=\"sh2\" x=\"15\" y=\"8\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"20\" y=\"22\">1</text><rect class=\"sh2\" x=\"73\" y=\"8\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"78\" y=\"22\">2</text><circle class=\"dta\" cx=\"115\" cy=\"26\" r=\"5\"/><rect class=\"thin\" x=\"131\" y=\"8\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"136\" y=\"22\">3</text><rect class=\"sh2\" x=\"189\" y=\"8\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"194\" y=\"22\">4</text><rect class=\"thin\" x=\"247\" y=\"8\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"252\" y=\"22\">5</text><rect class=\"thin\" x=\"15\" y=\"38\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"20\" y=\"52\">6</text><rect class=\"sh2\" x=\"73\" y=\"38\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"78\" y=\"52\">7</text><circle class=\"dta\" cx=\"115\" cy=\"56\" r=\"5\"/><rect class=\"sh2\" x=\"131\" y=\"38\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"136\" y=\"52\">8</text><rect class=\"thin\" x=\"189\" y=\"38\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"194\" y=\"52\">9</text><rect class=\"sh2\" x=\"247\" y=\"38\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"252\" y=\"52\">10</text><circle class=\"dta\" cx=\"289\" cy=\"56\" r=\"5\"/><rect class=\"thin\" x=\"15\" y=\"68\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"20\" y=\"82\">11</text><rect class=\"thin\" x=\"73\" y=\"68\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"78\" y=\"82\">12</text><rect class=\"sh2\" x=\"131\" y=\"68\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"136\" y=\"82\">13</text><rect class=\"sh2\" x=\"189\" y=\"68\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"194\" y=\"82\">14</text><circle class=\"dta\" cx=\"231\" cy=\"86\" r=\"5\"/><rect class=\"thin\" x=\"247\" y=\"68\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"252\" y=\"82\">15</text><rect class=\"sh2\" x=\"15\" y=\"98\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"20\" y=\"112\">16</text><circle class=\"dta\" cx=\"57\" cy=\"116\" r=\"5\"/><rect class=\"thin\" x=\"73\" y=\"98\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"78\" y=\"112\">17</text><rect class=\"thin\" x=\"131\" y=\"98\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"136\" y=\"112\">18</text><rect class=\"sh2\" x=\"189\" y=\"98\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"194\" y=\"112\">19</text><rect class=\"sh2\" x=\"247\" y=\"98\" width=\"58\" height=\"30\"/><text class=\"sm\" x=\"252\" y=\"112\">20</text><circle class=\"dta\" cx=\"289\" cy=\"116\" r=\"5\"/><rect class=\"sh2\" x=\"15\" y=\"137\" width=\"14\" height=\"12\"/><text class=\"sm\" x=\"35\" y=\"147\">full sun (S)</text><circle class=\"dta\" cx=\"160\" cy=\"143\" r=\"5\"/><text class=\"sm\" x=\"170\" y=\"147\">drip line (D)</text></svg></figure><p class=\"geo-given\">A community garden has 20 beds. A shaded bed gets full sun: these beds form set <strong>S</strong>. A bed with a gold dot has a drip line: these beds form set <strong>D</strong>.</p>",
      claims: [
        {
          id: "sun-no-drip",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many beds are in S ∩ ~D?",
          choices: [
            { letter: "A", text: "11" },
            { letter: "B", text: "6" },
            { letter: "C", text: "9" },
            { letter: "D", text: "5" }
          ],
          correct: "D"
        },
        {
          id: "which-venn",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which Venn diagram matches the garden?",
          choices: [
            { letter: "A", text: "Circle S drawn inside circle D" },
            { letter: "B", text: "Circle D drawn inside circle S" },
            { letter: "C", text: "Circles S and D overlapping, with beds in all four regions" },
            { letter: "D", text: "Circles S and D that do not meet" }
          ],
          correct: "B"
        },
        {
          id: "true-cond",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which conditional is true for all 20 beds?",
          choices: [
            { letter: "A", text: "If a bed gets full sun, then it has a drip line." },
            { letter: "B", text: "If a bed does not have a drip line, then it does not get full sun." },
            { letter: "C", text: "If a bed has a drip line, then it gets full sun." },
            { letter: "D", text: "If a bed does not get full sun, then it has a drip line." }
          ],
          correct: "C"
        },
        {
          id: "also-true",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "The statement “If a bed has a drip line, then it gets full sun” is true. Which related statement must also be true?",
          choices: [
            { letter: "A", text: "If a bed gets full sun, then it has a drip line." },
            { letter: "B", text: "If a bed does not have a drip line, then it does not get full sun." },
            { letter: "C", text: "If a bed gets full sun, then it does not have a drip line." },
            { letter: "D", text: "If a bed does not get full sun, then it does not have a drip line." }
          ],
          correct: "D"
        },
        {
          id: "tomatoes",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "The garden club adds a rule: “If a bed gets full sun, then it is planted with tomatoes.” Using the rule and the garden, which must be true?",
          choices: [
            { letter: "A", text: "Every bed with tomatoes has a drip line." },
            { letter: "B", text: "Every bed with a drip line is planted with tomatoes." },
            { letter: "C", text: "Every bed without a drip line has no tomatoes." },
            { letter: "D", text: "Every bed with tomatoes gets full sun." }
          ],
          correct: "B"
        },
        {
          id: "not-d",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many beds are in ~D?",
          choices: [
            { letter: "A", text: "14" },
            { letter: "B", text: "6" },
            { letter: "C", text: "9" },
            { letter: "D", text: "11" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt1-worms-pond-sightings",
      family: "GEO",
      mode: "worms",
      title: "Who Was Seen at the Pond?",
      kind: "Logic · G.RLT.1",
      blurb: "A nature camp's checklist of 9 animals in three sets.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Three overlapping ovals D, N and W. D only: deer, hare, duck. N only: owl, bat. D and N but not W: fox. All three: otter. D and W but not N: heron. Outside all circles: mink. No names are in W only or in N and W only\"><rect class=\"thin\" x=\"4\" y=\"4\" width=\"312\" height=\"160\"/><ellipse class=\"sh2\" cx=\"112\" cy=\"62\" rx=\"84\" ry=\"54\"/><ellipse class=\"sh2\" cx=\"208\" cy=\"62\" rx=\"84\" ry=\"54\"/><ellipse class=\"sh\" cx=\"160\" cy=\"118\" rx=\"92\" ry=\"46\"/><text class=\"sm\" x=\"66\" y=\"44\" text-anchor=\"middle\">deer</text><text class=\"sm\" x=\"66\" y=\"62\" text-anchor=\"middle\">hare</text><text class=\"sm\" x=\"66\" y=\"80\" text-anchor=\"middle\">duck</text><text class=\"sm\" x=\"254\" y=\"52\" text-anchor=\"middle\">owl</text><text class=\"sm\" x=\"254\" y=\"70\" text-anchor=\"middle\">bat</text><text class=\"sm\" x=\"160\" y=\"40\" text-anchor=\"middle\">fox</text><text class=\"sm\" x=\"160\" y=\"88\" text-anchor=\"middle\">otter</text><text class=\"sm\" x=\"110\" y=\"102\" text-anchor=\"middle\">heron</text><text class=\"sm\" x=\"292\" y=\"156\" text-anchor=\"middle\">mink</text><text x=\"30\" y=\"26\" text-anchor=\"middle\">D</text><text x=\"290\" y=\"26\" text-anchor=\"middle\">N</text><text x=\"266\" y=\"150\" text-anchor=\"middle\">W</text></svg></figure><p class=\"geo-given\">A nature camp's checklist has 9 animals. <strong>D</strong> is the set seen at the pond during the day, <strong>N</strong> the set seen there at night and <strong>W</strong> the set seen in the water. A region with no names holds no animals.</p>",
      claims: [
        {
          id: "d-and-w",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which animals are in D ∩ W?",
          choices: [
            { letter: "A", text: "heron only" },
            { letter: "B", text: "otter only" },
            { letter: "C", text: "heron and otter" },
            { letter: "D", text: "deer, hare, duck and heron" }
          ],
          correct: "C"
        },
        {
          id: "n-or-w",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many animals on the checklist are in N ∪ W?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "5" },
            { letter: "C", text: "1" },
            { letter: "D", text: "4" }
          ],
          correct: "B"
        },
        {
          id: "true-cond",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which conditional is true for all 9 animals on the checklist?",
          choices: [
            { letter: "A", text: "If an animal was seen during the day, then it was seen in the water." },
            { letter: "B", text: "If an animal was seen at night, then it was not seen in the water." },
            { letter: "C", text: "If an animal was seen in the water, then it was seen during the day." },
            { letter: "D", text: "If an animal was not seen in the water, then it was not seen during the day." }
          ],
          correct: "C"
        },
        {
          id: "beaver",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "A ranger says, “If an animal is seen in the water, then it is seen during the day” holds all summer. Next week a beaver is seen in the water. What can be concluded?",
          choices: [
            { letter: "A", text: "The beaver is seen at night." },
            { letter: "B", text: "The beaver is not seen during the day." },
            { letter: "C", text: "Nothing can be concluded about the beaver." },
            { letter: "D", text: "The beaver is seen during the day." }
          ],
          correct: "D"
        },
        {
          id: "ella",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Ella uses the statement “If an animal is seen in the water, then it is seen during the day.” She saw a hare during the day and says the hare must have been seen in the water. Which describes Ella's reasoning?",
          choices: [
            { letter: "A", text: "Invalid: it uses the converse of the statement" },
            { letter: "B", text: "Valid, by the Law of Detachment" },
            { letter: "C", text: "Invalid: it uses the inverse of the statement" },
            { letter: "D", text: "Valid: the hare is in circle D" }
          ],
          correct: "A"
        },
        {
          id: "fox",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which expression names the region that holds the fox?",
          choices: [
            { letter: "A", text: "D ∩ N" },
            { letter: "B", text: "D ∩ N ∩ ~W" },
            { letter: "C", text: "D ∩ N ∩ W" },
            { letter: "D", text: "(D ∪ N) ∩ ~W" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt1-worms-river-gauge",
      family: "GEO",
      mode: "worms",
      title: "The River Gauge at the Trailhead",
      kind: "Logic · G.RLT.1",
      blurb: "Two gauge readings and two park rules.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Two river gauges marked from 0 to 8 feet, each with a gold dashed line at 6 feet. On Monday the water reaches 5.5 feet, below the line. On Tuesday the water reaches 7 feet, above the line\"><line class=\"ln\" x1=\"8\" y1=\"148\" x2=\"312\" y2=\"148\"/><rect class=\"sh2\" x=\"40\" y=\"71\" width=\"106\" height=\"77\"/><rect class=\"thin\" x=\"34\" y=\"29\" width=\"6\" height=\"119\"/><line class=\"thin\" x1=\"40\" y1=\"148\" x2=\"46\" y2=\"148\"/><line class=\"thin\" x1=\"40\" y1=\"134\" x2=\"46\" y2=\"134\"/><line class=\"thin\" x1=\"40\" y1=\"120\" x2=\"46\" y2=\"120\"/><text class=\"sm\" x=\"30\" y=\"124\" text-anchor=\"end\">2</text><line class=\"thin\" x1=\"40\" y1=\"106\" x2=\"46\" y2=\"106\"/><line class=\"thin\" x1=\"40\" y1=\"92\" x2=\"46\" y2=\"92\"/><text class=\"sm\" x=\"30\" y=\"96\" text-anchor=\"end\">4</text><line class=\"thin\" x1=\"40\" y1=\"78\" x2=\"46\" y2=\"78\"/><line class=\"thin\" x1=\"40\" y1=\"64\" x2=\"46\" y2=\"64\"/><text class=\"sm\" x=\"30\" y=\"68\" text-anchor=\"end\">6</text><line class=\"thin\" x1=\"40\" y1=\"50\" x2=\"46\" y2=\"50\"/><line class=\"thin\" x1=\"40\" y1=\"36\" x2=\"46\" y2=\"36\"/><text class=\"sm\" x=\"30\" y=\"40\" text-anchor=\"end\">8</text><line class=\"ac dash\" x1=\"40\" y1=\"64\" x2=\"146\" y2=\"64\"/><text x=\"93\" y=\"18\" text-anchor=\"middle\">Monday: 5.5 ft</text><rect class=\"sh2\" x=\"192\" y=\"50\" width=\"106\" height=\"98\"/><rect class=\"thin\" x=\"186\" y=\"29\" width=\"6\" height=\"119\"/><line class=\"thin\" x1=\"192\" y1=\"148\" x2=\"198\" y2=\"148\"/><line class=\"thin\" x1=\"192\" y1=\"134\" x2=\"198\" y2=\"134\"/><line class=\"thin\" x1=\"192\" y1=\"120\" x2=\"198\" y2=\"120\"/><text class=\"sm\" x=\"182\" y=\"124\" text-anchor=\"end\">2</text><line class=\"thin\" x1=\"192\" y1=\"106\" x2=\"198\" y2=\"106\"/><line class=\"thin\" x1=\"192\" y1=\"92\" x2=\"198\" y2=\"92\"/><text class=\"sm\" x=\"182\" y=\"96\" text-anchor=\"end\">4</text><line class=\"thin\" x1=\"192\" y1=\"78\" x2=\"198\" y2=\"78\"/><line class=\"thin\" x1=\"192\" y1=\"64\" x2=\"198\" y2=\"64\"/><text class=\"sm\" x=\"182\" y=\"68\" text-anchor=\"end\">6</text><line class=\"thin\" x1=\"192\" y1=\"50\" x2=\"198\" y2=\"50\"/><line class=\"thin\" x1=\"192\" y1=\"36\" x2=\"198\" y2=\"36\"/><text class=\"sm\" x=\"182\" y=\"40\" text-anchor=\"end\">8</text><line class=\"ac dash\" x1=\"192\" y1=\"64\" x2=\"298\" y2=\"64\"/><text x=\"245\" y=\"18\" text-anchor=\"middle\">Tuesday: 7 ft</text></svg></figure><p class=\"geo-given\">A park follows two true rules. <strong>Rule 1:</strong> If the river is above 6 ft, then the low trail is closed. <strong>Rule 2:</strong> The canoe launch is open if and only if the low trail is open. The gold dashed line on each gauge marks 6 ft. Let <strong>a</strong> be “The river is above 6 ft,” <strong>c</strong> be “The low trail is closed” and <strong>o</strong> be “The canoe launch is open.”</p>",
      claims: [
        {
          id: "tuesday",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Using the gauges and the rules, what can be concluded for Tuesday?",
          choices: [
            { letter: "A", text: "The low trail is closed and the canoe launch is open." },
            { letter: "B", text: "Nothing can be concluded about the canoe launch." },
            { letter: "C", text: "The low trail is open and the canoe launch is open." },
            { letter: "D", text: "The low trail is closed and the canoe launch is closed." }
          ],
          correct: "D"
        },
        {
          id: "ned",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Ned reads Monday's gauge and says, “The river is not above 6 ft, so the low trail is open.” Which describes Ned's reasoning?",
          choices: [
            { letter: "A", text: "Valid, by the Law of Detachment with rule 1" },
            { letter: "B", text: "Invalid: it assumes the inverse of rule 1" },
            { letter: "C", text: "Valid, by the contrapositive of rule 1" },
            { letter: "D", text: "Invalid: it assumes the converse of rule 1" }
          ],
          correct: "B"
        },
        {
          id: "wednesday",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "On Wednesday the canoe launch is open. What can be concluded?",
          choices: [
            { letter: "A", text: "The river is above 6 ft." },
            { letter: "B", text: "The low trail is closed." },
            { letter: "C", text: "The river is not above 6 ft." },
            { letter: "D", text: "Nothing can be concluded about the river." }
          ],
          correct: "C"
        },
        {
          id: "rule-2",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which shows rule 2 in symbols?",
          choices: [
            { letter: "A", text: "o ↔ ~c" },
            { letter: "B", text: "~o ↔ ~c" },
            { letter: "C", text: "o ∧ ~c" },
            { letter: "D", text: "o → ~c" }
          ],
          correct: "A"
        },
        {
          id: "chain",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Which conditional follows from rules 1 and 2?",
          choices: [
            { letter: "A", text: "If the river is above 6 ft, then the canoe launch is closed." },
            { letter: "B", text: "If the canoe launch is closed, then the river is above 6 ft." },
            { letter: "C", text: "If the river is not above 6 ft, then the canoe launch is open." },
            { letter: "D", text: "If the river is above 6 ft, then the canoe launch is open." }
          ],
          correct: "A"
        },
        {
          id: "contra-1",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which is the contrapositive of rule 1?",
          choices: [
            { letter: "A", text: "If the low trail is closed, then the river is above 6 ft." },
            { letter: "B", text: "If the river is not above 6 ft, then the low trail is open." },
            { letter: "C", text: "If the low trail is open, then the river is above 6 ft." },
            { letter: "D", text: "If the low trail is open, then the river is not above 6 ft." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt1-worms-orchard",
      family: "GEO",
      mode: "worms",
      title: "Bloom, Fruit and Spray in the Orchard",
      kind: "Logic · G.RLT.1",
      blurb: "One set inside another, a third set across both, and x.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Venn diagram of 90 trees. Circle F lies inside circle B. Circle T overlaps F, overlaps the rest of B and extends outside B. F and T: 3x. F not T: x + 6. B and T but not F: x. B only: 8. T outside B: 2x − 1. Outside all circles: 7\"><rect class=\"thin\" x=\"6\" y=\"4\" width=\"308\" height=\"164\"/><circle class=\"sh2\" cx=\"128\" cy=\"86\" r=\"78\"/><circle class=\"sh\" cx=\"206\" cy=\"86\" r=\"80\"/><circle class=\"sh2\" cx=\"112\" cy=\"98\" r=\"48\"/><text x=\"144\" y=\"104\" text-anchor=\"middle\">3x</text><text x=\"100\" y=\"116\" text-anchor=\"middle\">x + 6</text><text x=\"170\" y=\"44\" text-anchor=\"middle\">x</text><text x=\"90\" y=\"42\" text-anchor=\"middle\">8</text><text x=\"246\" y=\"92\" text-anchor=\"middle\">2x − 1</text><text x=\"300\" y=\"158\" text-anchor=\"middle\">7</text><text class=\"acc\" x=\"30\" y=\"26\" text-anchor=\"middle\">B</text><text class=\"acc\" x=\"296\" y=\"26\" text-anchor=\"middle\">T</text><text class=\"acc\" x=\"104\" y=\"78\" text-anchor=\"middle\">F</text></svg></figure><p class=\"geo-given\">An orchard has 90 trees. <strong>B</strong> is the set of trees that bloomed this spring, <strong>F</strong> the set that produced fruit and <strong>T</strong> the set treated for pests. Circle F is drawn inside circle B. Each label gives the number of trees in that region.</p>",
      claims: [
        {
          id: "x",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "What is the value of x?",
          choices: [
            { letter: "A", text: "11" },
            { letter: "B", text: "10" },
            { letter: "C", text: "30" },
            { letter: "D", text: "16" }
          ],
          correct: "B"
        },
        {
          id: "fruit",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many trees produced fruit?",
          choices: [
            { letter: "A", text: "30" },
            { letter: "B", text: "64" },
            { letter: "C", text: "16" },
            { letter: "D", text: "46" }
          ],
          correct: "D"
        },
        {
          id: "bloom-no-fruit",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many trees bloomed but did not produce fruit?",
          choices: [
            { letter: "A", text: "18" },
            { letter: "B", text: "8" },
            { letter: "C", text: "34" },
            { letter: "D", text: "10" }
          ],
          correct: "A"
        },
        {
          id: "true-cond",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which conditional is true for all 90 trees?",
          choices: [
            { letter: "A", text: "If a tree bloomed, then it produced fruit." },
            { letter: "B", text: "If a tree did not produce fruit, then it did not bloom." },
            { letter: "C", text: "If a tree produced fruit, then it bloomed." },
            { letter: "D", text: "If a tree was treated for pests, then it produced fruit." }
          ],
          correct: "C"
        },
        {
          id: "tree-41",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Tree 41 in the orchard did not bloom. What can be concluded?",
          choices: [
            { letter: "A", text: "Tree 41 was treated for pests." },
            { letter: "B", text: "Tree 41 produced fruit." },
            { letter: "C", text: "Nothing can be concluded about fruit on tree 41." },
            { letter: "D", text: "Tree 41 did not produce fruit." }
          ],
          correct: "D"
        },
        {
          id: "t-or-f",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many trees are in T ∪ F?",
          choices: [
            { letter: "A", text: "105" },
            { letter: "B", text: "59" },
            { letter: "C", text: "75" },
            { letter: "D", text: "30" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
