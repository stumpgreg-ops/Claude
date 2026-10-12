/* SOL Labyrinth — Geometry game (family GEO), logic: G.RLT.1 (Virginia 2023 Geometry SOL), v5.20 packs for the modes maze
   (a school building and its grounds) and raid (Eagle Swoop: sports and games). Original items only. A pack is one figure
   (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given facts, then six questions about it.
   Every answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-rlt1-maze-notice-board",
      family: "GEO",
      mode: "maze",
      title: "The Cafeteria Notice Board",
      kind: "Logic · G.RLT.1",
      blurb: "Three statements about one Monday, each marked true or false.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A notice board for Monday with three statements: p, The cafeteria serves tacos, marked T; q, The gym is closed, marked F; r, Lunch is 30 minutes long, marked T\"><rect class=\"thin\" x=\"10\" y=\"6\" width=\"300\" height=\"138\" rx=\"8\"/><text class=\"sm\" x=\"160\" y=\"26\" text-anchor=\"middle\">Notice board · Monday</text><line class=\"thin\" x1=\"10\" y1=\"34\" x2=\"310\" y2=\"34\"/><text class=\"acc\" x=\"20\" y=\"62\">p:</text><text x=\"42\" y=\"62\">The cafeteria serves tacos.</text><rect class=\"sh\" x=\"276\" y=\"44\" width=\"26\" height=\"24\" rx=\"4\"/><text x=\"289\" y=\"62\" text-anchor=\"middle\">T</text><line class=\"thin dash\" x1=\"16\" y1=\"75\" x2=\"304\" y2=\"75\"/><text class=\"acc\" x=\"20\" y=\"96\">q:</text><text x=\"42\" y=\"96\">The gym is closed.</text><rect class=\"sh2\" x=\"276\" y=\"78\" width=\"26\" height=\"24\" rx=\"4\"/><text x=\"289\" y=\"96\" text-anchor=\"middle\">F</text><line class=\"thin dash\" x1=\"16\" y1=\"109\" x2=\"304\" y2=\"109\"/><text class=\"acc\" x=\"20\" y=\"130\">r:</text><text x=\"42\" y=\"130\">Lunch is 30 minutes long.</text><rect class=\"sh\" x=\"276\" y=\"112\" width=\"26\" height=\"24\" rx=\"4\"/><text x=\"289\" y=\"130\" text-anchor=\"middle\">T</text></svg></figure><p class=\"geo-given\">The notice board lists three statements, <strong>p</strong>, <strong>q</strong> and <strong>r</strong>, about one Monday at school. Each is marked true (T) or false (F) for that day.</p>",
      claims: [
        {
          id: "and-not",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Using the notice board, which sentence is ~q ∧ r?",
          choices: [
            { letter: "A", text: "The gym is not closed, or lunch is 30 minutes long." },
            { letter: "B", text: "The gym is closed, and lunch is not 30 minutes long." },
            { letter: "C", text: "The gym is not closed, and lunch is 30 minutes long." },
            { letter: "D", text: "If the gym is not closed, then lunch is 30 minutes long." }
          ],
          correct: "C"
        },
        {
          id: "which-true",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which compound statement was true on that Monday?",
          choices: [
            { letter: "A", text: "p ∧ q" },
            { letter: "B", text: "q ∨ ~r" },
            { letter: "C", text: "r → q" },
            { letter: "D", text: "~p ∨ r" }
          ],
          correct: "D"
        },
        {
          id: "false-hyp",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "What was the truth value of q → ~p on that Monday?",
          choices: [
            { letter: "A", text: "False, because ~p is false" },
            { letter: "B", text: "True, because the hypothesis q is false" },
            { letter: "C", text: "True, because ~p is true" },
            { letter: "D", text: "It cannot be decided, because q is false" }
          ],
          correct: "B"
        },
        {
          id: "iff-symbols",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which shows “The cafeteria serves tacos if and only if lunch is 30 minutes long” in symbols?",
          choices: [
            { letter: "A", text: "p ↔ r" },
            { letter: "B", text: "p → r" },
            { letter: "C", text: "r → p" },
            { letter: "D", text: "p ∧ r" }
          ],
          correct: "A"
        },
        {
          id: "contrapositive",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which sentence is the contrapositive of r → p from the notice board?",
          choices: [
            { letter: "A", text: "If the cafeteria serves tacos, then lunch is 30 minutes long." },
            { letter: "B", text: "If lunch is not 30 minutes long, then the cafeteria does not serve tacos." },
            { letter: "C", text: "If lunch is 30 minutes long, then the cafeteria does not serve tacos." },
            { letter: "D", text: "If the cafeteria does not serve tacos, then lunch is not 30 minutes long." }
          ],
          correct: "D"
        },
        {
          id: "also-false",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "On that Monday, p → q was false. Which related conditional was also false that day?",
          choices: [
            { letter: "A", text: "the converse, q → p" },
            { letter: "B", text: "the inverse, ~p → ~q" },
            { letter: "C", text: "the contrapositive, ~q → ~p" },
            { letter: "D", text: "none of the three" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt1-maze-parking",
      family: "GEO",
      mode: "maze",
      title: "Permits in the School Lot",
      kind: "Logic · G.RLT.1",
      blurb: "72 parked vehicles: one set inside another, one set apart.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Venn diagram of 72 vehicles: circle F lies inside circle P; circle V lies apart from P. F holds 18, the rest of P holds 30, V holds 12, and 12 are outside all circles\"><rect class=\"thin\" x=\"14\" y=\"6\" width=\"292\" height=\"138\"/><text class=\"sm\" x=\"22\" y=\"22\">72 vehicles</text><circle class=\"sh2\" cx=\"118\" cy=\"80\" r=\"60\"/><circle class=\"sh\" cx=\"100\" cy=\"92\" r=\"28\"/><circle class=\"sh2\" cx=\"246\" cy=\"78\" r=\"36\"/><text x=\"54\" y=\"46\" text-anchor=\"middle\">P</text><text x=\"100\" y=\"83\" text-anchor=\"middle\">F</text><text x=\"246\" y=\"32\" text-anchor=\"middle\">V</text><text x=\"100\" y=\"107\" text-anchor=\"middle\">18</text><text x=\"146\" y=\"56\" text-anchor=\"middle\">30</text><text x=\"246\" y=\"84\" text-anchor=\"middle\">12</text><text x=\"284\" y=\"134\" text-anchor=\"middle\">12</text></svg></figure><p class=\"geo-given\">The diagram shows all 72 vehicles in the school parking lot one morning. <strong>P</strong> is the set of vehicles with a parking permit, <strong>F</strong> is the set of faculty vehicles, and <strong>V</strong> is the set of vehicles with a visitor tag. Each number is the number of vehicles in that region.</p>",
      claims: [
        {
          id: "permit-count",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many vehicles in the lot are in set P?",
          choices: [
            { letter: "A", text: "30" },
            { letter: "B", text: "48" },
            { letter: "C", text: "18" },
            { letter: "D", text: "60" }
          ],
          correct: "B"
        },
        {
          id: "no-permit",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many vehicles in the lot are in ~P, the vehicles without a parking permit?",
          choices: [
            { letter: "A", text: "24" },
            { letter: "B", text: "12" },
            { letter: "C", text: "42" },
            { letter: "D", text: "54" }
          ],
          correct: "A"
        },
        {
          id: "not-true",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which statement about the parking-lot diagram is NOT true?",
          choices: [
            { letter: "A", text: "F ⊂ P" },
            { letter: "B", text: "P ∩ V is empty." },
            { letter: "C", text: "V ⊂ ~P" },
            { letter: "D", text: "P ⊂ F" }
          ],
          correct: "D"
        },
        {
          id: "diagram-conditional",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which conditional does the diagram show is true for these 72 vehicles?",
          choices: [
            { letter: "A", text: "If a vehicle has a parking permit, then it is a faculty vehicle." },
            { letter: "B", text: "If a vehicle is not a faculty vehicle, then it has no parking permit." },
            { letter: "C", text: "If a vehicle is a faculty vehicle, then it has a parking permit." },
            { letter: "D", text: "If a vehicle has no parking permit, then it has a visitor tag." }
          ],
          correct: "C"
        },
        {
          id: "ruiz-van",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Gabe says: “Every faculty vehicle in the lot has a permit. Ms. Ruiz's van is not a faculty vehicle. So her van has no permit.” Which describes his argument?",
          choices: [
            { letter: "A", text: "Valid, by the Law of Detachment" },
            { letter: "B", text: "Valid; it uses the contrapositive" },
            { letter: "C", text: "Invalid; it uses the converse" },
            { letter: "D", text: "Invalid; it uses the inverse" }
          ],
          correct: "D"
        },
        {
          id: "row-a",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Two more statements are true: “If a vehicle has a visitor tag, then it parks in Row A.” “If a vehicle parks in Row A, then it must leave by noon.” Which conclusion follows by the Law of Syllogism?",
          choices: [
            { letter: "A", text: "If a vehicle has a visitor tag, then it must leave by noon." },
            { letter: "B", text: "If a vehicle must leave by noon, then it has a visitor tag." },
            { letter: "C", text: "If a vehicle parks in Row A, then it has a visitor tag." },
            { letter: "D", text: "If a vehicle has no visitor tag, then it need not leave by noon." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt1-maze-stadium",
      family: "GEO",
      mode: "maze",
      title: "The Stadium Lights Rule",
      kind: "Logic · G.RLT.1",
      blurb: "A truth table for one rule about game nights.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"Truth table with columns Row, p, q, p → q and a blank gold column ~p ∨ q. Row 1: T, T, T. Row 2: T, F, F. Row 3: F, T, T. Row 4: F, F, T\"><rect class=\"sh\" x=\"236\" y=\"6\" width=\"74\" height=\"140\"/><rect class=\"thin\" x=\"10\" y=\"6\" width=\"300\" height=\"140\"/><line class=\"ln\" x1=\"10\" y1=\"34\" x2=\"310\" y2=\"34\"/><line class=\"thin\" x1=\"10\" y1=\"62\" x2=\"310\" y2=\"62\"/><line class=\"thin\" x1=\"10\" y1=\"90\" x2=\"310\" y2=\"90\"/><line class=\"thin\" x1=\"10\" y1=\"118\" x2=\"310\" y2=\"118\"/><line class=\"thin\" x1=\"66\" y1=\"6\" x2=\"66\" y2=\"146\"/><line class=\"thin\" x1=\"116\" y1=\"6\" x2=\"116\" y2=\"146\"/><line class=\"thin\" x1=\"166\" y1=\"6\" x2=\"166\" y2=\"146\"/><line class=\"thin\" x1=\"236\" y1=\"6\" x2=\"236\" y2=\"146\"/><text class=\"sm\" x=\"38\" y=\"26\" text-anchor=\"middle\">Row</text><text x=\"91\" y=\"26\" text-anchor=\"middle\">p</text><text x=\"141\" y=\"26\" text-anchor=\"middle\">q</text><text x=\"201\" y=\"26\" text-anchor=\"middle\">p → q</text><text class=\"acc\" x=\"273\" y=\"26\" text-anchor=\"middle\">~p ∨ q</text><text class=\"sm\" x=\"38\" y=\"54\" text-anchor=\"middle\">1</text><text x=\"91\" y=\"54\" text-anchor=\"middle\">T</text><text x=\"141\" y=\"54\" text-anchor=\"middle\">T</text><text x=\"201\" y=\"54\" text-anchor=\"middle\">T</text><text class=\"acc\" x=\"273\" y=\"54\" text-anchor=\"middle\">?</text><text class=\"sm\" x=\"38\" y=\"82\" text-anchor=\"middle\">2</text><text x=\"91\" y=\"82\" text-anchor=\"middle\">T</text><text x=\"141\" y=\"82\" text-anchor=\"middle\">F</text><text x=\"201\" y=\"82\" text-anchor=\"middle\">F</text><text class=\"acc\" x=\"273\" y=\"82\" text-anchor=\"middle\">?</text><text class=\"sm\" x=\"38\" y=\"110\" text-anchor=\"middle\">3</text><text x=\"91\" y=\"110\" text-anchor=\"middle\">F</text><text x=\"141\" y=\"110\" text-anchor=\"middle\">T</text><text x=\"201\" y=\"110\" text-anchor=\"middle\">T</text><text class=\"acc\" x=\"273\" y=\"110\" text-anchor=\"middle\">?</text><text class=\"sm\" x=\"38\" y=\"138\" text-anchor=\"middle\">4</text><text x=\"91\" y=\"138\" text-anchor=\"middle\">F</text><text x=\"141\" y=\"138\" text-anchor=\"middle\">F</text><text x=\"201\" y=\"138\" text-anchor=\"middle\">T</text><text class=\"acc\" x=\"273\" y=\"138\" text-anchor=\"middle\">?</text></svg></figure><p class=\"geo-given\">Let <strong>p</strong> be “There is a home game tonight.” Let <strong>q</strong> be “The stadium lights are on.” The truth table lists all four cases. The gold column, ~p ∨ q, is left blank.</p>",
      claims: [
        {
          id: "fill-column",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which values fill the blank ~p ∨ q column, from Row 1 down to Row 4?",
          choices: [
            { letter: "A", text: "T, T, T, F" },
            { letter: "B", text: "F, F, T, T" },
            { letter: "C", text: "T, F, T, T" },
            { letter: "D", text: "F, F, T, F" }
          ],
          correct: "C"
        },
        {
          id: "contra-row",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "In which row of the table is the contrapositive, ~q → ~p, false?",
          choices: [
            { letter: "A", text: "Row 2" },
            { letter: "B", text: "Row 3" },
            { letter: "C", text: "Row 4" },
            { letter: "D", text: "In no row" }
          ],
          correct: "A"
        },
        {
          id: "lights-no-game",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "One night the stadium lights are on, but there is no home game. Which statement is false that night?",
          choices: [
            { letter: "A", text: "p → q" },
            { letter: "B", text: "~q → ~p" },
            { letter: "C", text: "~p ∨ q" },
            { letter: "D", text: "q → p" }
          ],
          correct: "D"
        },
        {
          id: "iff-rows",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "A sign says, “The stadium lights are on if and only if there is a home game.” In which rows of the table is this biconditional true?",
          choices: [
            { letter: "A", text: "Row 1 only" },
            { letter: "B", text: "Rows 1 and 4" },
            { letter: "C", text: "Rows 1, 3 and 4" },
            { letter: "D", text: "Rows 2 and 3" }
          ],
          correct: "B"
        },
        {
          id: "lights-off",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Assume p → q is true. Tonight the stadium lights are off. What can you validly conclude?",
          choices: [
            { letter: "A", text: "There is no home game tonight." },
            { letter: "B", text: "There is a home game tonight." },
            { letter: "C", text: "Nothing, since the hypothesis is not met." },
            { letter: "D", text: "The rule p → q is broken tonight." }
          ],
          correct: "A"
        },
        {
          id: "maya",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Assume p → q is true. Maya sees the lights on and says, “So there must be a home game.” Which row of the table shows her conclusion is not certain?",
          choices: [
            { letter: "A", text: "Row 1" },
            { letter: "B", text: "Row 2" },
            { letter: "C", text: "Row 3" },
            { letter: "D", text: "Row 4" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt1-raid-kickflip",
      family: "GEO",
      mode: "raid",
      title: "The Kickflip Rule",
      kind: "Logic · G.RLT.1",
      blurb: "One skate-contest rule, split into hypothesis and conclusion.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Two boxes joined by an arrow: p, the hypothesis, A skater lands a kickflip, points to q, the conclusion, The skater earns 5 points. Below, a skateboard and a quarter-pipe ramp\"><text class=\"sm\" x=\"79\" y=\"18\" text-anchor=\"middle\">p · hypothesis</text><text class=\"sm\" x=\"241\" y=\"18\" text-anchor=\"middle\">q · conclusion</text><rect class=\"sh2\" x=\"12\" y=\"26\" width=\"134\" height=\"54\" rx=\"8\"/><rect class=\"sh\" x=\"174\" y=\"26\" width=\"134\" height=\"54\" rx=\"8\"/><text x=\"79\" y=\"48\" text-anchor=\"middle\">A skater lands</text><text x=\"79\" y=\"68\" text-anchor=\"middle\">a kickflip.</text><text x=\"241\" y=\"48\" text-anchor=\"middle\">The skater</text><text x=\"241\" y=\"68\" text-anchor=\"middle\">earns 5 points.</text><line class=\"ln\" x1=\"150\" y1=\"53\" x2=\"170\" y2=\"53\"/><path class=\"thin\" d=\"M163 57.2 L170 53 L163 48.8\"/><line class=\"ln\" x1=\"14\" y1=\"144\" x2=\"306\" y2=\"144\"/><path class=\"ln\" d=\"M214 144 A44 44 0 0 0 258 100 L258 144 M258 100 L306 100\"/><line class=\"ln\" x1=\"62\" y1=\"132\" x2=\"112\" y2=\"132\"/><circle class=\"dt\" cx=\"70\" cy=\"137\" r=\"3.5\"/><circle class=\"dt\" cx=\"104\" cy=\"137\" r=\"3.5\"/><text class=\"sm\" x=\"87\" y=\"120\" text-anchor=\"middle\">board</text><text class=\"sm\" x=\"283\" y=\"128\" text-anchor=\"middle\">ramp</text></svg></figure><p class=\"geo-given\">At a skate park contest, this rule is true: “If a skater lands a kickflip, then the skater earns 5 points.” <strong>p</strong> is its hypothesis and <strong>q</strong> is its conclusion. Other tricks can also earn 5 points.</p>",
      claims: [
        {
          id: "symbols",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which symbols stand for “A skater lands a kickflip and does not earn 5 points”?",
          choices: [
            { letter: "A", text: "p ∨ ~q" },
            { letter: "B", text: "p ∧ ~q" },
            { letter: "C", text: "~p ∧ q" },
            { letter: "D", text: "~(p ∧ q)" }
          ],
          correct: "B"
        },
        {
          id: "converse",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which sentence is the converse of the kickflip rule?",
          choices: [
            { letter: "A", text: "If a skater earns 5 points, then the skater lands a kickflip." },
            { letter: "B", text: "If a skater does not land a kickflip, then the skater does not earn 5 points." },
            { letter: "C", text: "If a skater does not earn 5 points, then the skater does not land a kickflip." },
            { letter: "D", text: "If a skater lands a kickflip, then the skater does not earn 5 points." }
          ],
          correct: "A"
        },
        {
          id: "inverse-symbols",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which is the inverse of the kickflip rule p → q, written in symbols?",
          choices: [
            { letter: "A", text: "q → p" },
            { letter: "B", text: "~q → ~p" },
            { letter: "C", text: "~p → ~q" },
            { letter: "D", text: "p → ~q" }
          ],
          correct: "C"
        },
        {
          id: "both-false",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "What is true about the converse and the inverse of the kickflip rule?",
          choices: [
            { letter: "A", text: "Both are true, because the rule is true." },
            { letter: "B", text: "The converse is true, but the inverse is false." },
            { letter: "C", text: "The inverse is true, but the converse is false." },
            { letter: "D", text: "Both are false, since other tricks earn 5 points." }
          ],
          correct: "D"
        },
        {
          id: "words",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Using p and q from the kickflip rule, which sentence is ~p ∧ q?",
          choices: [
            { letter: "A", text: "A skater does not land a kickflip, and the skater earns 5 points." },
            { letter: "B", text: "A skater does not land a kickflip, or the skater earns 5 points." },
            { letter: "C", text: "A skater lands a kickflip, and the skater does not earn 5 points." },
            { letter: "D", text: "If a skater does not land a kickflip, then the skater earns 5 points." }
          ],
          correct: "A"
        },
        {
          id: "counterexample",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which skater is a counterexample to the converse of the kickflip rule?",
          choices: [
            { letter: "A", text: "Ana lands a kickflip and earns 5 points." },
            { letter: "B", text: "Bo lands no trick and earns 0 points." },
            { letter: "C", text: "Cy lands a kickflip but earns 3 points." },
            { letter: "D", text: "Dev lands only a 360 spin and earns 5 points." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt1-raid-archery",
      family: "GEO",
      mode: "raid",
      title: "The Archery Club Roster",
      kind: "Logic · G.RLT.1",
      blurb: "Ten archers placed in a two-circle Venn diagram.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"Venn diagram of 10 archers: circle L and circle R overlap. L only: Ava, Ben. Both: Cole, Dina, Eli. R only: Finn, Gia, Hana. Outside both: Ivy, Jude\"><rect class=\"thin\" x=\"10\" y=\"6\" width=\"300\" height=\"152\"/><circle class=\"sh2\" cx=\"125\" cy=\"80\" r=\"64\"/><circle class=\"sh\" cx=\"195\" cy=\"80\" r=\"64\"/><text x=\"66\" y=\"30\" text-anchor=\"middle\">L</text><text x=\"254\" y=\"30\" text-anchor=\"middle\">R</text><text x=\"98\" y=\"75\" text-anchor=\"middle\">Ava</text><text x=\"98\" y=\"101\" text-anchor=\"middle\">Ben</text><text x=\"160\" y=\"62\" text-anchor=\"middle\">Cole</text><text x=\"160\" y=\"86\" text-anchor=\"middle\">Dina</text><text x=\"160\" y=\"110\" text-anchor=\"middle\">Eli</text><text x=\"220\" y=\"64\" text-anchor=\"middle\">Finn</text><text x=\"220\" y=\"88\" text-anchor=\"middle\">Gia</text><text x=\"220\" y=\"112\" text-anchor=\"middle\">Hana</text><text x=\"34\" y=\"150\" text-anchor=\"middle\">Ivy</text><text x=\"284\" y=\"150\" text-anchor=\"middle\">Jude</text></svg></figure><p class=\"geo-given\">The Venn diagram places all 10 members of an archery club. <strong>L</strong> is the set of left-handed archers, and <strong>R</strong> is the set of archers who shoot a recurve bow.</p>",
      claims: [
        {
          id: "both",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which archers are in L ∩ R?",
          choices: [
            { letter: "A", text: "Ava and Ben" },
            { letter: "B", text: "Ivy and Jude" },
            { letter: "C", text: "Cole, Dina and Eli" },
            { letter: "D", text: "Ava, Ben, Cole, Dina and Eli" }
          ],
          correct: "C"
        },
        {
          id: "union",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many archers in the club are in L ∪ R?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "8" },
            { letter: "C", text: "11" },
            { letter: "D", text: "2" }
          ],
          correct: "B"
        },
        {
          id: "not-recurve",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many archers in the club are in ~R?",
          choices: [
            { letter: "A", text: "2" },
            { letter: "B", text: "6" },
            { letter: "C", text: "5" },
            { letter: "D", text: "4" }
          ],
          correct: "D"
        },
        {
          id: "region",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which expression names the region that holds Finn, Gia and Hana?",
          choices: [
            { letter: "A", text: "R ∩ ~L" },
            { letter: "B", text: "L ∩ ~R" },
            { letter: "C", text: "R" },
            { letter: "D", text: "~(L ∪ R)" }
          ],
          correct: "A"
        },
        {
          id: "counterexample",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Consider “If an archer shoots a recurve bow, then the archer is left-handed.” Which archer is a counterexample to this statement?",
          choices: [
            { letter: "A", text: "Cole" },
            { letter: "B", text: "Ava" },
            { letter: "C", text: "Gia" },
            { letter: "D", text: "Ivy" }
          ],
          correct: "C"
        },
        {
          id: "jude",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Let l be “Jude is left-handed” and r be “Jude shoots a recurve bow.” Which statement is true?",
          choices: [
            { letter: "A", text: "l ∨ r" },
            { letter: "B", text: "~l ∧ ~r" },
            { letter: "C", text: "~l ∧ r" },
            { letter: "D", text: "l ↔ ~r" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt1-raid-rain-chain",
      family: "GEO",
      mode: "raid",
      title: "Rain at the Tennis Courts",
      kind: "Logic · G.RLT.1",
      blurb: "Three true conditionals linked in a chain.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Flow chart of four boxes joined by arrows: r, It rains, points to m, The match moves indoors; m points down to s, Seating is limited; s points to t, Fans must buy tickets early\"><rect class=\"sh\" x=\"10\" y=\"8\" width=\"136\" height=\"56\" rx=\"8\"/><text class=\"acc\" x=\"26\" y=\"42\" text-anchor=\"middle\">r</text><text class=\"sm\" x=\"42\" y=\"41\">It rains.</text><rect class=\"sh2\" x=\"174\" y=\"8\" width=\"136\" height=\"56\" rx=\"8\"/><text class=\"acc\" x=\"190\" y=\"42\" text-anchor=\"middle\">m</text><text class=\"sm\" x=\"206\" y=\"33\">The match</text><text class=\"sm\" x=\"206\" y=\"49\">moves indoors.</text><rect class=\"sh2\" x=\"174\" y=\"96\" width=\"136\" height=\"56\" rx=\"8\"/><text class=\"acc\" x=\"190\" y=\"130\" text-anchor=\"middle\">s</text><text class=\"sm\" x=\"206\" y=\"121\">Seating is</text><text class=\"sm\" x=\"206\" y=\"137\">limited.</text><rect class=\"sh2\" x=\"10\" y=\"96\" width=\"136\" height=\"56\" rx=\"8\"/><text class=\"acc\" x=\"26\" y=\"130\" text-anchor=\"middle\">t</text><text class=\"sm\" x=\"42\" y=\"121\">Fans must buy</text><text class=\"sm\" x=\"42\" y=\"137\">tickets early.</text><line class=\"ln\" x1=\"150\" y1=\"36\" x2=\"170\" y2=\"36\"/><path class=\"thin\" d=\"M163 40.2 L170 36 L163 31.8\"/><line class=\"ln\" x1=\"242\" y1=\"68\" x2=\"242\" y2=\"90\"/><path class=\"thin\" d=\"M237.8 83 L242 90 L246.2 83\"/><line class=\"ln\" x1=\"170\" y1=\"124\" x2=\"150\" y2=\"124\"/><path class=\"thin\" d=\"M157 119.8 L150 124 L157 128.2\"/></svg></figure><p class=\"geo-given\">At a tennis tournament, each arrow in the chart is a true conditional: <strong>r</strong> → <strong>m</strong>, <strong>m</strong> → <strong>s</strong> and <strong>s</strong> → <strong>t</strong>. The letters stand for the statements in the boxes.</p>",
      claims: [
        {
          id: "syllogism",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Which conclusion follows from the tennis chart by the Law of Syllogism?",
          choices: [
            { letter: "A", text: "If fans must buy tickets early, then it rains." },
            { letter: "B", text: "If it does not rain, then seating is not limited." },
            { letter: "C", text: "If seating is limited, then it rains." },
            { letter: "D", text: "If it rains, then fans must buy tickets early." }
          ],
          correct: "D"
        },
        {
          id: "saturday",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "It rains on Saturday. Which statement must also be true on Saturday?",
          choices: [
            { letter: "A", text: "The match moves indoors, but seating may not be limited." },
            { letter: "B", text: "Fans must buy tickets early." },
            { letter: "C", text: "Nothing else can be concluded." },
            { letter: "D", text: "Fans do not have to buy tickets early." }
          ],
          correct: "B"
        },
        {
          id: "sunday",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "On Sunday, seating is limited. What can be concluded about rain on Sunday?",
          choices: [
            { letter: "A", text: "It rains, by the Law of Detachment." },
            { letter: "B", text: "It does not rain, by the contrapositive." },
            { letter: "C", text: "Nothing; that would use a converse." },
            { letter: "D", text: "It rains, by the Law of Syllogism." }
          ],
          correct: "C"
        },
        {
          id: "must-be-true",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which statement must be true at the tournament?",
          choices: [
            { letter: "A", text: "If seating is not limited, then the match does not move indoors." },
            { letter: "B", text: "If the match does not move indoors, then seating is not limited." },
            { letter: "C", text: "If seating is limited, then the match moves indoors." },
            { letter: "D", text: "If it does not rain, then the match does not move indoors." }
          ],
          correct: "A"
        },
        {
          id: "monday",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "On Monday, fans do not have to buy tickets early. What can be concluded?",
          choices: [
            { letter: "A", text: "It rains on Monday." },
            { letter: "B", text: "It does not rain on Monday." },
            { letter: "C", text: "Seating is limited on Monday." },
            { letter: "D", text: "Nothing can be concluded." }
          ],
          correct: "B"
        },
        {
          id: "or-words",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Using the tennis chart, which sentence is ~r ∨ m?",
          choices: [
            { letter: "A", text: "It does not rain, and the match moves indoors." },
            { letter: "B", text: "If it does not rain, then the match moves indoors." },
            { letter: "C", text: "It rains, or the match does not move indoors." },
            { letter: "D", text: "It does not rain, or the match moves indoors." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt1-raid-gamers",
      family: "GEO",
      mode: "raid",
      title: "Console or PC?",
      kind: "Logic · G.RLT.1",
      blurb: "55 gamers, two overlapping sets and an unknown x.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Venn diagram of 55 members with two overlapping ovals, C above and P below. C only: 2x + 3. Both: x. P only: 3x − 2. Outside both: 6\"><rect class=\"thin\" x=\"10\" y=\"6\" width=\"300\" height=\"154\"/><text class=\"sm\" x=\"18\" y=\"22\">55 members</text><ellipse class=\"sh2\" cx=\"170\" cy=\"60\" rx=\"110\" ry=\"40\"/><ellipse class=\"sh\" cx=\"170\" cy=\"108\" rx=\"110\" ry=\"40\"/><text x=\"42\" y=\"42\" text-anchor=\"middle\">C</text><text x=\"42\" y=\"140\" text-anchor=\"middle\">P</text><text x=\"170\" y=\"46\" text-anchor=\"middle\">2x + 3</text><text class=\"acc\" x=\"170\" y=\"89\" text-anchor=\"middle\">x</text><text x=\"170\" y=\"132\" text-anchor=\"middle\">3x − 2</text><text x=\"292\" y=\"152\" text-anchor=\"middle\">6</text></svg></figure><p class=\"geo-given\">A video game club surveyed all 55 of its members. <strong>C</strong> is the set of members who play on a console, and <strong>P</strong> is the set who play on a PC. Each expression is the number of members in that region; 6 members use neither.</p>",
      claims: [
        {
          id: "find-x",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "What is the value of x in the game-club diagram?",
          choices: [
            { letter: "A", text: "9" },
            { letter: "B", text: "48" },
            { letter: "C", text: "8" },
            { letter: "D", text: "19" }
          ],
          correct: "C"
        },
        {
          id: "console",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many club members play on a console?",
          choices: [
            { letter: "A", text: "27" },
            { letter: "B", text: "19" },
            { letter: "C", text: "30" },
            { letter: "D", text: "49" }
          ],
          correct: "A"
        },
        {
          id: "union",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many club members are in C ∪ P?",
          choices: [
            { letter: "A", text: "57" },
            { letter: "B", text: "55" },
            { letter: "C", text: "41" },
            { letter: "D", text: "49" }
          ],
          correct: "D"
        },
        {
          id: "exactly-one",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many club members play on exactly one of the two: a console or a PC?",
          choices: [
            { letter: "A", text: "8" },
            { letter: "B", text: "41" },
            { letter: "C", text: "49" },
            { letter: "D", text: "47" }
          ],
          correct: "B"
        },
        {
          id: "not-true",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which statement about the 55 club members is NOT true?",
          choices: [
            { letter: "A", text: "P has 22 members." },
            { letter: "B", text: "C ∩ P has 8 members." },
            { letter: "C", text: "~C has 28 members." },
            { letter: "D", text: "~(C ∪ P) has 6 members." }
          ],
          correct: "A"
        },
        {
          id: "console-pc",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Is “If a member plays on a console, then the member plays on a PC” true for this club?",
          choices: [
            { letter: "A", text: "Yes; 8 members play on both." },
            { letter: "B", text: "No; 22 members are counterexamples." },
            { letter: "C", text: "No; 19 members are counterexamples." },
            { letter: "D", text: "No; 6 members are counterexamples." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt1-raid-swim",
      family: "GEO",
      mode: "raid",
      title: "Heat 3 at the Swim Meet",
      kind: "Logic · G.RLT.1",
      blurb: "Five swimmers, their strokes and their times.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 158\" role=\"img\" aria-label=\"Results table for heat 3: Mia, freestyle, 58.4 seconds; Noah, backstroke, 61.2; Omar, freestyle, 59.1; Pia, butterfly, 59.7; Quinn, backstroke, 62.5\"><rect class=\"sh2\" x=\"14\" y=\"6\" width=\"292\" height=\"26\"/><rect class=\"thin\" x=\"14\" y=\"6\" width=\"292\" height=\"146\"/><line class=\"thin\" x1=\"14\" y1=\"56\" x2=\"306\" y2=\"56\"/><line class=\"thin\" x1=\"14\" y1=\"80\" x2=\"306\" y2=\"80\"/><line class=\"thin\" x1=\"14\" y1=\"104\" x2=\"306\" y2=\"104\"/><line class=\"thin\" x1=\"14\" y1=\"128\" x2=\"306\" y2=\"128\"/><line class=\"thin\" x1=\"104\" y1=\"6\" x2=\"104\" y2=\"152\"/><line class=\"thin\" x1=\"214\" y1=\"6\" x2=\"214\" y2=\"152\"/><text class=\"acc\" x=\"59\" y=\"24\" text-anchor=\"middle\">Swimmer</text><text class=\"acc\" x=\"159\" y=\"24\" text-anchor=\"middle\">Stroke</text><text class=\"acc\" x=\"260\" y=\"24\" text-anchor=\"middle\">Time (s)</text><text x=\"59\" y=\"50\" text-anchor=\"middle\">Mia</text><text x=\"159\" y=\"50\" text-anchor=\"middle\">Freestyle</text><text x=\"260\" y=\"50\" text-anchor=\"middle\">58.4</text><text x=\"59\" y=\"74\" text-anchor=\"middle\">Noah</text><text x=\"159\" y=\"74\" text-anchor=\"middle\">Backstroke</text><text x=\"260\" y=\"74\" text-anchor=\"middle\">61.2</text><text x=\"59\" y=\"98\" text-anchor=\"middle\">Omar</text><text x=\"159\" y=\"98\" text-anchor=\"middle\">Freestyle</text><text x=\"260\" y=\"98\" text-anchor=\"middle\">59.1</text><text x=\"59\" y=\"122\" text-anchor=\"middle\">Pia</text><text x=\"159\" y=\"122\" text-anchor=\"middle\">Butterfly</text><text x=\"260\" y=\"122\" text-anchor=\"middle\">59.7</text><text x=\"59\" y=\"146\" text-anchor=\"middle\">Quinn</text><text x=\"159\" y=\"146\" text-anchor=\"middle\">Backstroke</text><text x=\"260\" y=\"146\" text-anchor=\"middle\">62.5</text></svg></figure><p class=\"geo-given\">For each swimmer in heat 3, let <strong>p</strong> be “The swimmer swam freestyle” and <strong>q</strong> be “The swimmer's time was under 60 seconds.”</p>",
      claims: [
        {
          id: "iff-count",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "For how many of the five swimmers in heat 3 is p ↔ q true?",
          choices: [
            { letter: "A", text: "2" },
            { letter: "B", text: "1" },
            { letter: "C", text: "3" },
            { letter: "D", text: "4" }
          ],
          correct: "D"
        },
        {
          id: "not-p-and-q",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "For which swimmer in heat 3 is ~p ∧ q true?",
          choices: [
            { letter: "A", text: "Mia" },
            { letter: "B", text: "Noah" },
            { letter: "C", text: "Pia" },
            { letter: "D", text: "No swimmer" }
          ],
          correct: "C"
        },
        {
          id: "every-swimmer",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which statement is true for every swimmer in heat 3?",
          choices: [
            { letter: "A", text: "~q → ~p" },
            { letter: "B", text: "q → p" },
            { letter: "C", text: "~p → ~q" },
            { letter: "D", text: "p ↔ q" }
          ],
          correct: "A"
        },
        {
          id: "rex",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Assume p → q holds for every swimmer at the meet. Rex swam freestyle in heat 4. What can be concluded?",
          choices: [
            { letter: "A", text: "Rex's time was 60 seconds or more." },
            { letter: "B", text: "Nothing, because Rex is not in heat 3." },
            { letter: "C", text: "Rex's time was under 58.4 seconds." },
            { letter: "D", text: "Rex's time was under 60 seconds." }
          ],
          correct: "D"
        },
        {
          id: "sal",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Assume p → q holds at the whole meet. Sal's time was 58.0 seconds, so Lin says Sal swam freestyle. Which describes Lin's reasoning?",
          choices: [
            { letter: "A", text: "Valid, by the Law of Detachment" },
            { letter: "B", text: "Invalid; Pia's swim has q true while p is false" },
            { letter: "C", text: "Valid, because Mia and Omar were under 60 s" },
            { letter: "D", text: "Invalid; Omar's swim shows p → q is false" }
          ],
          correct: "B"
        },
        {
          id: "neither",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "For how many swimmers in heat 3 is ~(p ∨ q) true?",
          choices: [
            { letter: "A", text: "2" },
            { letter: "B", text: "3" },
            { letter: "C", text: "5" },
            { letter: "D", text: "1" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt1-raid-bowling",
      family: "GEO",
      mode: "raid",
      title: "Regulars at the Bowling Center",
      kind: "Logic · G.RLT.1",
      blurb: "Two leagues that never overlap, and the bowlers who own a ball.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Venn diagram of 80 regulars: circles M, B and F in a row; M and B overlap, B and F overlap, M and F do not touch. M only 11, M and B 9, B only x, B and F 7, F only 12, outside all 27\"><rect class=\"thin\" x=\"8\" y=\"6\" width=\"304\" height=\"148\"/><text class=\"sm\" x=\"16\" y=\"148\">80 regulars</text><circle class=\"sh2\" cx=\"92\" cy=\"84\" r=\"54\"/><circle class=\"sh\" cx=\"160\" cy=\"84\" r=\"54\"/><circle class=\"sh2\" cx=\"228\" cy=\"84\" r=\"54\"/><text x=\"50\" y=\"30\" text-anchor=\"middle\">M</text><text x=\"160\" y=\"24\" text-anchor=\"middle\">B</text><text x=\"270\" y=\"30\" text-anchor=\"middle\">F</text><text x=\"70\" y=\"89\" text-anchor=\"middle\">11</text><text x=\"126\" y=\"89\" text-anchor=\"middle\">9</text><text class=\"acc\" x=\"160\" y=\"54\" text-anchor=\"middle\">x</text><text x=\"194\" y=\"89\" text-anchor=\"middle\">7</text><text x=\"250\" y=\"89\" text-anchor=\"middle\">12</text><text x=\"286\" y=\"146\" text-anchor=\"middle\">27</text></svg></figure><p class=\"geo-given\">The diagram shows all 80 regulars at a bowling center. <strong>M</strong> is the Monday league, <strong>F</strong> is the Friday league, and <strong>B</strong> is the set of regulars who own a bowling ball. No one may join both leagues. In all, 30 regulars own a ball; <strong>x</strong> of them are in neither league.</p>",
      claims: [
        {
          id: "find-x",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many regulars own a ball but are in neither league (the value of x)?",
          choices: [
            { letter: "A", text: "21" },
            { letter: "B", text: "14" },
            { letter: "C", text: "16" },
            { letter: "D", text: "46" }
          ],
          correct: "B"
        },
        {
          id: "m-or-b",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many regulars at the bowling center are in M ∪ B?",
          choices: [
            { letter: "A", text: "50" },
            { letter: "B", text: "27" },
            { letter: "C", text: "53" },
            { letter: "D", text: "41" }
          ],
          correct: "D"
        },
        {
          id: "conditional",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which conditional is true for these 80 regulars?",
          choices: [
            { letter: "A", text: "If a regular is in M, then the regular is not in F." },
            { letter: "B", text: "If a regular is in B, then the regular is in M or F." },
            { letter: "C", text: "If a regular is in F, then the regular is in B." },
            { letter: "D", text: "If a regular is not in M, then the regular is in F." }
          ],
          correct: "A"
        },
        {
          id: "ty",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Ty is a regular who owns a bowling ball. Which conclusion about Ty is valid?",
          choices: [
            { letter: "A", text: "Ty is in at least one league." },
            { letter: "B", text: "Ty is in the Monday league." },
            { letter: "C", text: "Ty is not in both leagues." },
            { letter: "D", text: "Ty is in neither league." }
          ],
          correct: "C"
        },
        {
          id: "exactly-one",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many regulars are in exactly one of the sets M, F and B?",
          choices: [
            { letter: "A", text: "23" },
            { letter: "B", text: "16" },
            { letter: "C", text: "53" },
            { letter: "D", text: "37" }
          ],
          correct: "D"
        },
        {
          id: "new-regular",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "A new regular joins the Friday league and does not own a ball. After that, how many regulars are in F ∩ ~B?",
          choices: [
            { letter: "A", text: "8" },
            { letter: "B", text: "13" },
            { letter: "C", text: "20" },
            { letter: "D", text: "12" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt1-raid-dragon",
      family: "GEO",
      mode: "raid",
      title: "Dragon Run Rule Cards",
      kind: "Logic · G.RLT.1",
      blurb: "Four rule cards from a board game, written in symbols.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Four game cards: Card 1, s → d. Card 2, d → k. Card 3, e ↔ t. Card 4, e → ~c\"><rect class=\"sh\" x=\"12\" y=\"8\" width=\"144\" height=\"62\" rx=\"8\"/><text class=\"sm\" x=\"22\" y=\"26\">Card 1</text><text x=\"84\" y=\"54\" text-anchor=\"middle\">s → d</text><rect class=\"sh2\" x=\"164\" y=\"8\" width=\"144\" height=\"62\" rx=\"8\"/><text class=\"sm\" x=\"174\" y=\"26\">Card 2</text><text x=\"236\" y=\"54\" text-anchor=\"middle\">d → k</text><rect class=\"sh2\" x=\"12\" y=\"80\" width=\"144\" height=\"62\" rx=\"8\"/><text class=\"sm\" x=\"22\" y=\"98\">Card 3</text><text x=\"84\" y=\"126\" text-anchor=\"middle\">e ↔ t</text><rect class=\"sh\" x=\"164\" y=\"80\" width=\"144\" height=\"62\" rx=\"8\"/><text class=\"sm\" x=\"174\" y=\"98\">Card 4</text><text x=\"236\" y=\"126\" text-anchor=\"middle\">e → ~c</text></svg></figure><p class=\"geo-given\">In the board game Dragon Run, all four rule cards are true. The letters stand for statements about one player's turn.</p><p class=\"geo-given\"><strong>s</strong>: the player rolls a 6. <strong>d</strong>: the player moves the dragon. <strong>k</strong>: the player loses a coin. <strong>t</strong>: the player lands on a tower. <strong>e</strong>: the player earns a shield. <strong>c</strong>: the player can be captured.</p>",
      claims: [
        {
          id: "syllogism",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Which conclusion follows from cards 1 and 2 by the Law of Syllogism?",
          choices: [
            { letter: "A", text: "If a player loses a coin, then the player rolls a 6." },
            { letter: "B", text: "If a player does not roll a 6, then the player does not lose a coin." },
            { letter: "C", text: "If a player rolls a 6, then the player loses a coin." },
            { letter: "D", text: "If a player moves the dragon, then the player rolls a 6." }
          ],
          correct: "C"
        },
        {
          id: "kim",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Kim did not lose a coin on her turn. What can be concluded from cards 1 and 2?",
          choices: [
            { letter: "A", text: "Kim did not roll a 6." },
            { letter: "B", text: "Kim rolled a 6." },
            { letter: "C", text: "Kim moved the dragon." },
            { letter: "D", text: "Nothing about Kim's roll." }
          ],
          correct: "A"
        },
        {
          id: "eva",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Raj lost a coin on his turn. Eva says, “Then Raj must have rolled a 6.” Which describes Eva's reasoning?",
          choices: [
            { letter: "A", text: "Valid, by the Law of Detachment" },
            { letter: "B", text: "Valid, by the Law of Syllogism" },
            { letter: "C", text: "Invalid; it uses the inverse of s → k" },
            { letter: "D", text: "Invalid; it uses the converse of s → k" }
          ],
          correct: "D"
        },
        {
          id: "card-3",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which pair of conditionals means the same as card 3, e ↔ t?",
          choices: [
            { letter: "A", text: "e → t or t → e" },
            { letter: "B", text: "e → t and t → e" },
            { letter: "C", text: "e → t and ~t → ~e" },
            { letter: "D", text: "e ∧ t" }
          ],
          correct: "B"
        },
        {
          id: "card-4",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which sentence is the contrapositive of card 4?",
          choices: [
            { letter: "A", text: "If a player cannot be captured, then the player earns a shield." },
            { letter: "B", text: "If a player does not earn a shield, then the player can be captured." },
            { letter: "C", text: "If a player can be captured, then the player does not earn a shield." },
            { letter: "D", text: "If a player earns a shield, then the player can be captured." }
          ],
          correct: "C"
        },
        {
          id: "leo",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Leo lands on a tower. Using cards 3 and 4, what can be concluded about Leo?",
          choices: [
            { letter: "A", text: "He earns a shield and cannot be captured." },
            { letter: "B", text: "He earns a shield, but he can be captured." },
            { letter: "C", text: "Nothing; card 3 starts with e, not t." },
            { letter: "D", text: "He cannot earn a shield on a tower." }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
