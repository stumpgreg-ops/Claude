/* SOL Labyrinth — Geometry game (family GEO), lines cut by a transversal: G.RLT.2 (Virginia 2023 Geometry SOL), v5.20.
   Modes: maze (a school building and its grounds) and raid (Eagle Swoop: sports and games). Original items only.
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given
   facts, then six questions about it. Every numeric answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-rlt2-maze-bus-loop",
      family: "GEO",
      mode: "maze",
      title: "Curbs at the Bus Loop",
      kind: "Lines · G.RLT.2",
      blurb: "Two parallel curbs, one crosswalk line and eight numbered angles.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Two vertical curbs a and b, cut by crosswalk line t, which rises to the right. At curb a, angle 1 is above t and left of a, angle 2 above t and right of a, angle 3 below t and left of a, angle 4 below t and right of a; angles 5 to 8 sit the same way at curb b\">" +
        "<line class=\"ln\" x1=\"105\" y1=\"10\" x2=\"105\" y2=\"142\"/><line class=\"ln\" x1=\"215\" y1=\"10\" x2=\"215\" y2=\"142\"/>" +
        "<path class=\"thin\" d=\"M101 51 L105 44 L109 51\"/><path class=\"thin\" d=\"M211 131 L215 124 L219 131\"/><text x=\"93\" y=\"22\" text-anchor=\"middle\">a</text>" +
        "<text x=\"227\" y=\"22\" text-anchor=\"middle\">b</text><line class=\"ln\" x1=\"26\" y1=\"139.2\" x2=\"298\" y2=\"18.1\"/>" +
        "<text x=\"304\" y=\"32.1\" text-anchor=\"middle\">t</text><circle class=\"dt\" cx=\"105\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"215\" cy=\"55\" r=\"3\"/>" +
        "<text x=\"90.7\" y=\"99.7\" text-anchor=\"middle\">1</text><text x=\"114.3\" y=\"94.7\" text-anchor=\"middle\">2</text>" +
        "<text x=\"95.7\" y=\"123.3\" text-anchor=\"middle\">3</text><text x=\"119.3\" y=\"118.3\" text-anchor=\"middle\">4</text>" +
        "<text x=\"200.7\" y=\"50.8\" text-anchor=\"middle\">5</text><text x=\"224.3\" y=\"45.8\" text-anchor=\"middle\">6</text>" +
        "<text x=\"205.7\" y=\"74.3\" text-anchor=\"middle\">7</text><text x=\"229.3\" y=\"69.3\" text-anchor=\"middle\">8</text>" +
        "<text class=\"sm\" x=\"160\" y=\"146\" text-anchor=\"middle\">bus loop</text></svg></figure>" +
        "<p class=\"geo-given\">The two curbs of the school bus loop, <strong>a</strong> and <strong>b</strong>, are parallel. A painted crosswalk line, " +
        "<strong>t</strong>, crosses both curbs. m∠8 = 114°.</p>",
      claims: [
        {
          id: "alt-ext",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which two angles are alternate exterior angles?",
          choices: [
            { letter: "A", text: "∠1 and ∠5" },
            { letter: "B", text: "∠1 and ∠8" },
            { letter: "C", text: "∠2 and ∠7" },
            { letter: "D", text: "∠1 and ∠4" }
          ],
          correct: "B"
        },
        {
          id: "angle-1",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠1?",
          choices: [
            { letter: "A", text: "66°" },
            { letter: "B", text: "57°" },
            { letter: "C", text: "246°" },
            { letter: "D", text: "114°" }
          ],
          correct: "D"
        },
        {
          id: "not-8",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Which angle is NOT congruent to ∠8?",
          choices: [
            { letter: "A", text: "∠7" },
            { letter: "B", text: "∠1" },
            { letter: "C", text: "∠4" },
            { letter: "D", text: "∠5" }
          ],
          correct: "A"
        },
        {
          id: "pair-5-7",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "∠5 and ∠7 sit side by side at curb b. What kind of angle pair are they?",
          choices: [
            { letter: "A", text: "Vertical angles" },
            { letter: "B", text: "Corresponding angles" },
            { letter: "C", text: "A linear pair" },
            { letter: "D", text: "Same-side interior angles" }
          ],
          correct: "C"
        },
        {
          id: "error-2-5",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Maya says ∠2 ≅ ∠5 because they are corresponding angles. What is wrong with her reasoning?",
          choices: [
            { letter: "A", text: "They are same-side interior angles, so they are supplementary." },
            { letter: "B", text: "They are alternate interior angles, so they are congruent." },
            { letter: "C", text: "Nothing; corresponding angles are congruent." },
            { letter: "D", text: "They are vertical angles, so they are congruent." }
          ],
          correct: "A"
        },
        {
          id: "prove-3-6",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "A crew measures m∠3 = 66° and m∠6 = 66°. Which theorem lets them prove a ∥ b from these two measures?",
          choices: [
            { letter: "A", text: "Alternate Exterior Angles Theorem" },
            { letter: "B", text: "Converse of the Corresponding Angles Postulate" },
            { letter: "C", text: "Vertical Angles Theorem" },
            { letter: "D", text: "Converse of the Alternate Exterior Angles Theorem" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt2-maze-library-shelves",
      family: "GEO",
      mode: "maze",
      title: "The Library Ladder",
      kind: "Lines · G.RLT.2",
      blurb: "Three parallel shelves, one ladder rail and two angle expressions.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Three horizontal shelves p, q and r, top to bottom, crossed by ladder rail t, which leans to the right. Angle 1 is below p and left of t; angle 2 is above q and right of t; angle 3 is below q and right of t; angle 4 is above r and left of t; angle 5 is below r and right of t\">" +
        "<line class=\"ln\" x1=\"20\" y1=\"30\" x2=\"288\" y2=\"30\"/><line class=\"ln\" x1=\"20\" y1=\"78\" x2=\"288\" y2=\"78\"/>" +
        "<line class=\"ln\" x1=\"20\" y1=\"126\" x2=\"288\" y2=\"126\"/><path class=\"thin\" d=\"M245 26 L252 30 L245 34\"/><path class=\"thin\" d=\"M245 74 L252 78 L245 82\"/>" +
        "<path class=\"thin\" d=\"M245 122 L252 126 L245 130\"/><text x=\"298\" y=\"35\" text-anchor=\"middle\">p</text><text x=\"298\" y=\"83\" text-anchor=\"middle\">q" +
        "</text><text x=\"298\" y=\"131\" text-anchor=\"middle\">r</text><line class=\"ln\" x1=\"90.3\" y1=\"150\" x2=\"147.7\" y2=\"8\"/>" +
        "<text x=\"159.7\" y=\"18\" text-anchor=\"middle\">t</text><circle class=\"dt\" cx=\"138.8\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"119.4\" cy=\"78\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"100\" cy=\"126\" r=\"3\"/><text x=\"124.7\" y=\"44.5\" text-anchor=\"middle\">1</text><text x=\"133.5\" y=\"73.5\" text-anchor=\"middle\">2" +
        "</text><text x=\"128.9\" y=\"97.1\" text-anchor=\"middle\">3</text><text x=\"90.5\" y=\"116.9\" text-anchor=\"middle\">4</text>" +
        "<text x=\"109.5\" y=\"145.1\" text-anchor=\"middle\">5</text><text class=\"sm\" x=\"60\" y=\"22\" text-anchor=\"middle\">shelf</text></svg></figure>" +
        "<p class=\"geo-given\">Library shelves <strong>p</strong>, <strong>q</strong> and <strong>r</strong> are parallel. The rail of a rolling ladder, " +
        "<strong>t</strong>, crosses all three. m∠1 = (5x − 12)° and m∠2 = (3x + 20)°.</p>",
      claims: [
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Using the given expressions for ∠1 and ∠2, what is x?",
          choices: [
            { letter: "A", text: "21.5" },
            { letter: "B", text: "4" },
            { letter: "C", text: "16" },
            { letter: "D", text: "32" }
          ],
          correct: "C"
        },
        {
          id: "angle-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Use the given expressions to find m∠4.",
          choices: [
            { letter: "A", text: "112°" },
            { letter: "B", text: "68°" },
            { letter: "C", text: "16" },
            { letter: "D", text: "172°" }
          ],
          correct: "A"
        },
        {
          id: "relate-1-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which equation is true for ∠1 and ∠4, since p ∥ r?",
          choices: [
            { letter: "A", text: "m∠1 = m∠4" },
            { letter: "B", text: "m∠1 + m∠4 = 90°" },
            { letter: "C", text: "m∠1 + m∠4 = 360°" },
            { letter: "D", text: "m∠1 + m∠4 = 180°" }
          ],
          correct: "D"
        },
        {
          id: "not-true",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which statement is NOT true?",
          choices: [
            { letter: "A", text: "∠3 ≅ ∠4" },
            { letter: "B", text: "∠2 ≅ ∠4" },
            { letter: "C", text: "∠3 ≅ ∠5" },
            { letter: "D", text: "∠1 ≅ ∠2" }
          ],
          correct: "B"
        },
        {
          id: "error-ken",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Ken solved (5x − 12) + (3x + 20) = 180 and got x = 21.5. What was his mistake?",
          choices: [
            { letter: "A", text: "He should have subtracted 20 from 12." },
            { letter: "B", text: "∠1 and ∠2 are vertical, so the sum is 360." },
            { letter: "C", text: "∠1 and ∠2 are congruent, not supplementary." },
            { letter: "D", text: "The sum should be 90, not 180." }
          ],
          correct: "C"
        },
        {
          id: "new-shelf",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "A new shelf s crosses t below r. The angle above s and left of t is 110°. Is s parallel to r?",
          choices: [
            { letter: "A", text: "Yes; 110° is close to 112°." },
            { letter: "B", text: "No; it should match ∠4, which is 112°." },
            { letter: "C", text: "Yes; any shelf under r is parallel to r." },
            { letter: "D", text: "Yes; 110° and ∠4 are both obtuse." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt2-maze-cafeteria-tape",
      family: "GEO",
      mode: "maze",
      title: "Tape on the Cafeteria Floor",
      kind: "Lines · G.RLT.2",
      blurb: "Four tape lines, a short proof, and the trap of the wrong transversal.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Horizontal tape lines j (top) and k (bottom) crossed by two slanted tape lines: s on the left leans right, t on the right leans left. Angle 1 is above j and right of s; angle 2 is above k and right of s; angle 3 is below j and left of t; angle 4 is above k and left of t\">" +
        "<line class=\"ln\" x1=\"14\" y1=\"32\" x2=\"300\" y2=\"32\"/><line class=\"ln\" x1=\"14\" y1=\"118\" x2=\"300\" y2=\"118\"/><text x=\"308\" y=\"37\" text-anchor=\"middle\">j" +
        "</text><text x=\"308\" y=\"123\" text-anchor=\"middle\">k</text><line class=\"ln\" x1=\"54.9\" y1=\"146\" x2=\"100.4\" y2=\"6\"/>" +
        "<line class=\"ln\" x1=\"270.3\" y1=\"146\" x2=\"198.9\" y2=\"6\"/><text x=\"44.9\" y=\"146\" text-anchor=\"middle\">s</text>" +
        "<text x=\"281.3\" y=\"146\" text-anchor=\"middle\">t</text><circle class=\"dt\" cx=\"91.9\" cy=\"32\" r=\"3\"/><circle class=\"dt\" cx=\"64\" cy=\"118\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"212.2\" cy=\"32\" r=\"3\"/><circle class=\"dt\" cx=\"256\" cy=\"118\" r=\"3\"/><text x=\"105.7\" y=\"27\" text-anchor=\"middle\">1</text>" +
        "<text x=\"77.8\" y=\"113\" text-anchor=\"middle\">2</text><text x=\"202.8\" y=\"52.3\" text-anchor=\"middle\">3</text>" +
        "<text x=\"241.5\" y=\"114.1\" text-anchor=\"middle\">4</text></svg></figure>" +
        "<p class=\"geo-given\">Tape lines <strong>j</strong>, <strong>k</strong>, <strong>s</strong> and <strong>t" +
        "</strong> mark the cafeteria floor. m∠1 = 72°, m∠3 = 117° and m∠4 = 63°. Given: ∠3 and ∠4 are supplementary. Prove: ∠1 ≅ ∠2.</p>" +
        "<table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. ∠3 and ∠4 are supplementary.</td><td>Given</td></tr><tr><td>2. j ∥ k" +
        "</td><td>____ (a)</td></tr><tr><td>3. ∠1 ≅ ∠2</td><td>____ (b)</td></tr></table>",
      claims: [
        {
          id: "reason-a",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Which reason justifies step 2, j ∥ k (blank a)?",
          choices: [
            { letter: "A", text: "Same-Side Interior Angles Theorem" },
            { letter: "B", text: "Converse of the Alternate Interior Angles Theorem" },
            { letter: "C", text: "Linear Pair Postulate" },
            { letter: "D", text: "Converse of the Same-Side Interior Angles Theorem" }
          ],
          correct: "D"
        },
        {
          id: "reason-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Which reason justifies step 3, ∠1 ≅ ∠2 (blank b)?",
          choices: [
            { letter: "A", text: "Converse of the Corresponding Angles Postulate" },
            { letter: "B", text: "Corresponding Angles Postulate" },
            { letter: "C", text: "Alternate Interior Angles Theorem" },
            { letter: "D", text: "Vertical Angles Theorem" }
          ],
          correct: "B"
        },
        {
          id: "trap-st",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "A student says step 1 also proves s ∥ t. Why is the student wrong?",
          choices: [
            { letter: "A", text: "Same-side interior angles must be congruent, not supplementary." },
            { letter: "B", text: "∠3 and ∠4 are vertical, so they say nothing about lines." },
            { letter: "C", text: "Their transversal is t, so they can only show j ∥ k." },
            { letter: "D", text: "The student is right; step 1 proves s ∥ t too." }
          ],
          correct: "C"
        },
        {
          id: "s-and-t",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Given m∠1 = 72° and m∠3 = 117°, are tape lines s and t parallel?",
          choices: [
            { letter: "A", text: "No; alternate interior angles ∠1 and ∠3 differ." },
            { letter: "B", text: "Yes; ∠1 and ∠3 are alternate interior angles." },
            { letter: "C", text: "Yes; j ∥ k, so every pair of lines is parallel." },
            { letter: "D", text: "Cannot tell; s and t never meet in the figure." }
          ],
          correct: "A"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Suppose m∠1 = (3x + 12)° and m∠2 = (5x − 28)°. For what value of x is j ∥ k?",
          choices: [
            { letter: "A", text: "24.5" },
            { letter: "B", text: "20" },
            { letter: "C", text: "8" },
            { letter: "D", text: "40" }
          ],
          correct: "B"
        },
        {
          id: "re-tape",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "A custodian will re-tape t so that t ∥ s, keeping m∠1 = 72°. What must m∠3 be?",
          choices: [
            { letter: "A", text: "72°" },
            { letter: "B", text: "108°" },
            { letter: "C", text: "117°" },
            { letter: "D", text: "18°" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt2-raid-pool-lanes",
      family: "GEO",
      mode: "raid",
      title: "Lane Lines at the Pool",
      kind: "Lines · G.RLT.2",
      blurb: "A swimmer cuts across two parallel lane lines.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Lane lines a (upper) and b (lower) rise gently to the right; swim path t crosses them, leaning left as it goes up. At each line the angles are numbered clockwise from the upper left: at a, 1 above-left, 2 above-right, 3 below-right, 4 below-left; at b, 5 above-left, 6 above-right, 7 below-right, 8 below-left\">" +
        "<line class=\"ln\" x1=\"16\" y1=\"76.4\" x2=\"296\" y2=\"16.8\"/><line class=\"ln\" x1=\"16\" y1=\"156.5\" x2=\"296\" y2=\"97\"/>" +
        "<path class=\"thin\" d=\"M242.3 24.2 L250 26.6 L244 32\"/><path class=\"thin\" d=\"M242.3 104.3 L250 106.8 L244 112.2\"/>" +
        "<text x=\"306\" y=\"21.8\" text-anchor=\"middle\">a</text><text x=\"306\" y=\"102\" text-anchor=\"middle\">b</text>" +
        "<line class=\"ln\" x1=\"118.7\" y1=\"11.5\" x2=\"197.2\" y2=\"153.2\"/><text x=\"108.7\" y=\"17.5\" text-anchor=\"middle\">t</text>" +
        "<circle class=\"dt\" cx=\"140\" cy=\"50\" r=\"3\"/><circle class=\"dt\" cx=\"179.8\" cy=\"121.7\" r=\"3\"/><text x=\"121.8\" y=\"46.7\" text-anchor=\"middle\">1</text>" +
        "<text x=\"148.3\" y=\"36.8\" text-anchor=\"middle\">2</text><text x=\"158.2\" y=\"63.3\" text-anchor=\"middle\">3</text>" +
        "<text x=\"131.7\" y=\"73.2\" text-anchor=\"middle\">4</text><text x=\"161.6\" y=\"118.4\" text-anchor=\"middle\">5</text>" +
        "<text x=\"188\" y=\"108.5\" text-anchor=\"middle\">6</text><text x=\"198\" y=\"135\" text-anchor=\"middle\">7</text>" +
        "<text x=\"171.5\" y=\"144.9\" text-anchor=\"middle\">8</text></svg></figure>" +
        "<p class=\"geo-given\">Lane lines <strong>a</strong> and <strong>b</strong> on the pool floor are parallel. A swimmer swims along the straight path " +
        "<strong>t</strong> across both lines. m∠4 = 107°.</p>",
      claims: [
        {
          id: "vertical-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle forms a pair of vertical angles with ∠4?",
          choices: [
            { letter: "A", text: "∠2" },
            { letter: "B", text: "∠8" },
            { letter: "C", text: "∠6" },
            { letter: "D", text: "∠3" }
          ],
          correct: "A"
        },
        {
          id: "angle-6",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠6?",
          choices: [
            { letter: "A", text: "73°" },
            { letter: "B", text: "53.5°" },
            { letter: "C", text: "107°" },
            { letter: "D", text: "253°" }
          ],
          correct: "C"
        },
        {
          id: "pair-1-7",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Name the angle pair formed by ∠1 and ∠7.",
          choices: [
            { letter: "A", text: "Corresponding angles" },
            { letter: "B", text: "Alternate exterior angles" },
            { letter: "C", text: "Vertical angles" },
            { letter: "D", text: "Alternate interior angles" }
          ],
          correct: "B"
        },
        {
          id: "angle-5",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Find the measure of ∠5.",
          choices: [
            { letter: "A", text: "107°" },
            { letter: "B", text: "17°" },
            { letter: "C", text: "36.5°" },
            { letter: "D", text: "73°" }
          ],
          correct: "D"
        },
        {
          id: "not-congruent",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which two angles are NOT congruent?",
          choices: [
            { letter: "A", text: "∠1 and ∠5" },
            { letter: "B", text: "∠3 and ∠5" },
            { letter: "C", text: "∠2 and ∠8" },
            { letter: "D", text: "∠3 and ∠6" }
          ],
          correct: "D"
        },
        {
          id: "coach-check",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "A coach checks two other lane lines. A swim path makes angles in the places of ∠4 and ∠6 that measure 107° and 106°. What can she conclude?",
          choices: [
            { letter: "A", text: "Parallel; the angles are only 1° apart." },
            { letter: "B", text: "Parallel; both angles are obtuse." },
            { letter: "C", text: "Not parallel; alternate interior angles must be equal." },
            { letter: "D", text: "Cannot tell without a third angle." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt2-raid-bowling-boards",
      family: "GEO",
      mode: "raid",
      title: "Boards on the Bowling Lane",
      kind: "Lines · G.RLT.2",
      blurb: "A bowling ball rolls across two parallel boards.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Line AC (top) and line DF (bottom) fall gently to the right and are marked parallel. Ball path line GH rises to the right, crossing AC at B and DF at E, with G above B and H below E. Angle ABG, above AC and left of the path, is marked 118 degrees\">" +
        "<line class=\"ln\" x1=\"39.5\" y1=\"28.6\" x2=\"283.8\" y2=\"71.7\"/><line class=\"ln\" x1=\"26.5\" y1=\"99.9\" x2=\"270.7\" y2=\"142.9\"/>" +
        "<path class=\"thin\" d=\"M238.2 59.6 L244.4 64.8 L236.8 67.5\"/><path class=\"thin\" d=\"M219.2 129.8 L225.4 134.9 L217.8 137.7\"/>" +
        "<line class=\"ln\" x1=\"166.3\" y1=\"9.8\" x2=\"64.1\" y2=\"140.6\"/><path class=\"thin\" d=\"M147.2 34.2 A15 15 0 0 0 123.2 43.4\"/>" +
        "<text x=\"126.2\" y=\"20.2\" text-anchor=\"middle\">118°</text><circle class=\"dt\" cx=\"55.3\" cy=\"31.4\" r=\"3\"/><circle class=\"dt\" cx=\"138\" cy=\"46\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"264.1\" cy=\"68.2\" r=\"3\"/><circle class=\"dt\" cx=\"42.2\" cy=\"102.6\" r=\"3\"/><circle class=\"dt\" cx=\"87.5\" cy=\"110.6\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"254.9\" cy=\"140.1\" r=\"3\"/><circle class=\"dt\" cx=\"157.7\" cy=\"20.8\" r=\"3\"/><circle class=\"dt\" cx=\"71.5\" cy=\"131.1\" r=\"3\"/>" +
        "<text x=\"55.3\" y=\"22.4\" text-anchor=\"middle\">A</text><text x=\"152\" y=\"62\" text-anchor=\"middle\">B</text><text x=\"264.1\" y=\"59.2\" text-anchor=\"middle\">C" +
        "</text><text x=\"42.2\" y=\"93.6\" text-anchor=\"middle\">D</text><text x=\"101.5\" y=\"126.6\" text-anchor=\"middle\">E</text>" +
        "<text x=\"254.9\" y=\"131.1\" text-anchor=\"middle\">F</text><text x=\"170.7\" y=\"24.8\" text-anchor=\"middle\">G</text>" +
        "<text x=\"58.5\" y=\"135.1\" text-anchor=\"middle\">H</text></svg></figure>" +
        "<p class=\"geo-given\">The edges of two boards on a bowling lane, line <strong>AC</strong> and line <strong>DF" +
        "</strong>, are parallel. A ball rolls along the straight line <strong>GH</strong>, crossing them at <strong>B</strong> and <strong>E" +
        "</strong>. m∠ABG = 118°.</p>",
      claims: [
        {
          id: "corresponds",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle corresponds to ∠ABG?",
          choices: [
            { letter: "A", text: "∠FEH" },
            { letter: "B", text: "∠CBE" },
            { letter: "C", text: "∠DEB" },
            { letter: "D", text: "∠DEH" }
          ],
          correct: "C"
        },
        {
          id: "angle-bef",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠BEF?",
          choices: [
            { letter: "A", text: "118°" },
            { letter: "B", text: "28°" },
            { letter: "C", text: "242°" },
            { letter: "D", text: "62°" }
          ],
          correct: "D"
        },
        {
          id: "pair-abe-bef",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "What kind of angle pair are ∠ABE and ∠BEF?",
          choices: [
            { letter: "A", text: "Alternate interior angles" },
            { letter: "B", text: "Same-side interior angles" },
            { letter: "C", text: "Corresponding angles" },
            { letter: "D", text: "Vertical angles" }
          ],
          correct: "A"
        },
        {
          id: "angle-cbe",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠CBE?",
          choices: [
            { letter: "A", text: "62°" },
            { letter: "B", text: "118°" },
            { letter: "C", text: "59°" },
            { letter: "D", text: "236°" }
          ],
          correct: "B"
        },
        {
          id: "linear",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which two angles form a linear pair?",
          choices: [
            { letter: "A", text: "∠ABG and ∠GBC" },
            { letter: "B", text: "∠ABG and ∠CBE" },
            { letter: "C", text: "∠ABG and ∠DEB" },
            { letter: "D", text: "∠GBC and ∠DEH" }
          ],
          correct: "A"
        },
        {
          id: "prove-boards",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "A bowler measures m∠GBC = 62° and m∠BEF = 62°. Which reason proves the boards are parallel?",
          choices: [
            { letter: "A", text: "Corresponding Angles Postulate" },
            { letter: "B", text: "Vertical Angles Theorem" },
            { letter: "C", text: "Converse of the Corresponding Angles Postulate" },
            { letter: "D", text: "Converse of the Same-Side Interior Angles Theorem" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt2-raid-skate-rails",
      family: "GEO",
      mode: "raid",
      title: "Rails at the Skate Park",
      kind: "Lines · G.RLT.2",
      blurb: "Two parallel grind rails cross a ledge; solve for x and y.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Two parallel skate rails r and s, steep and leaning right, cross a horizontal ledge line g. At rail r, the angle above g and right of r is (4x + 14) degrees. At rail s, the angle below g and left of s is (6x − 16) degrees, and the angle above g and left of s is (5y + 1) degrees\">" +
        "<line class=\"ln\" x1=\"14\" y1=\"104\" x2=\"300\" y2=\"104\"/><text x=\"306\" y=\"109\" text-anchor=\"middle\">g</text>" +
        "<line class=\"ln\" x1=\"44.8\" y1=\"150\" x2=\"85\" y2=\"10\"/><line class=\"ln\" x1=\"236.8\" y1=\"150\" x2=\"277\" y2=\"10\"/>" +
        "<path class=\"thin\" d=\"M70.6 45.6 L76.4 40 L78.3 47.8\"/><path class=\"thin\" d=\"M262.6 45.6 L268.4 40 L270.3 47.8\"/>" +
        "<text x=\"97\" y=\"22\" text-anchor=\"middle\">r</text><text x=\"289\" y=\"22\" text-anchor=\"middle\">s</text><circle class=\"dt\" cx=\"58\" cy=\"104\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"250\" cy=\"104\" r=\"3\"/><path class=\"thin\" d=\"M76 104 A18 18 0 0 0 63 86.7\"/><text x=\"82\" y=\"98\" text-anchor=\"start\">(4x + 14)°" +
        "</text><path class=\"thin\" d=\"M232 104 A18 18 0 0 0 245 121.3\"/><text x=\"230\" y=\"130\" text-anchor=\"end\">(6x − 16)°</text>" +
        "<path class=\"thin\" d=\"M256.6 80.9 A24 24 0 0 0 226 104\"/><text x=\"224\" y=\"80\" text-anchor=\"end\">(5y + 1)°</text></svg></figure>" +
        "<p class=\"geo-given\">Grind rails <strong>r</strong> and <strong>s</strong> at the skate park are parallel. Both cross the straight edge of a ledge, " +
        "<strong>g</strong>. The figure gives three angle measures in terms of x and y.</p>",
      claims: [
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Using the two angles labeled with x, what is x?",
          choices: [
            { letter: "A", text: "18.2" },
            { letter: "B", text: "15" },
            { letter: "C", text: "1" },
            { letter: "D", text: "30" }
          ],
          correct: "B"
        },
        {
          id: "angle-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is the measure of the angle labeled (4x + 14)°?",
          choices: [
            { letter: "A", text: "74°" },
            { letter: "B", text: "106°" },
            { letter: "C", text: "15" },
            { letter: "D", text: "18°" }
          ],
          correct: "A"
        },
        {
          id: "solve-y",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is the value of y?",
          choices: [
            { letter: "A", text: "14.6" },
            { letter: "B", text: "35.8" },
            { letter: "C", text: "21.4" },
            { letter: "D", text: "21" }
          ],
          correct: "D"
        },
        {
          id: "pair-xy",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "The angles labeled (4x + 14)° and (5y + 1)° are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Alternate interior angles" },
            { letter: "B", text: "Corresponding angles" },
            { letter: "C", text: "Same-side interior angles" },
            { letter: "D", text: "A linear pair" }
          ],
          correct: "C"
        },
        {
          id: "why-parallel",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "When x = 15, both angles labeled with x measure 74°. Which statement proves r ∥ s?",
          choices: [
            { letter: "A", text: "Corresponding angles are congruent, so r ∥ s." },
            { letter: "B", text: "Alternate interior angles are congruent, so r ∥ s." },
            { letter: "C", text: "The two angles add to 148°, so r ∥ s." },
            { letter: "D", text: "Vertical angles are congruent, so r ∥ s." }
          ],
          correct: "B"
        },
        {
          id: "below-right",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is the measure of the angle below the ledge and to the right of rail s?",
          choices: [
            { letter: "A", text: "74°" },
            { letter: "B", text: "16°" },
            { letter: "C", text: "21" },
            { letter: "D", text: "106°" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt2-raid-bank-shot",
      family: "GEO",
      mode: "raid",
      title: "The Bank Shot",
      kind: "Lines · G.RLT.2",
      blurb: "A pool ball bounces between two parallel rails.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A pool table with a top rail and a bottom rail. The ball rolls from P up to A on the top rail, down to B on the bottom rail, then up to D on the top rail. At A, angle 1 is between the rail and AP, angle 2 between AP and AB, angle 3 between AB and the rail. At B, angle 4 is between the rail and BA, angle 5 between BA and BD, angle 6 between BD and the rail. At D, angle 7 is between the rail and DB, on the left\">" +
        "<rect class=\"sh2\" x=\"14\" y=\"22\" width=\"292\" height=\"116\"/><line class=\"ln\" x1=\"14\" y1=\"22\" x2=\"306\" y2=\"22\"/>" +
        "<line class=\"ln\" x1=\"14\" y1=\"138\" x2=\"306\" y2=\"138\"/><line class=\"ac\" x1=\"42\" y1=\"108\" x2=\"100\" y2=\"22\"/>" +
        "<line class=\"ac\" x1=\"100\" y1=\"22\" x2=\"178.2\" y2=\"138\"/><line class=\"ac\" x1=\"178.2\" y1=\"138\" x2=\"256.5\" y2=\"22\"/>" +
        "<circle class=\"dt\" cx=\"42\" cy=\"108\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"178.2\" cy=\"138\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"256.5\" cy=\"22\" r=\"3\"/><text x=\"100\" y=\"16\" text-anchor=\"middle\">A</text><text x=\"178.2\" y=\"154\" text-anchor=\"middle\">B</text>" +
        "<text x=\"256.5\" y=\"16\" text-anchor=\"middle\">D</text><text x=\"30\" y=\"113\" text-anchor=\"middle\">P</text><text x=\"75.3\" y=\"40.1\" text-anchor=\"middle\">1" +
        "</text><text x=\"100\" y=\"49\" text-anchor=\"middle\">2</text><text x=\"124.7\" y=\"40.1\" text-anchor=\"middle\">3</text>" +
        "<text x=\"153.5\" y=\"129.9\" text-anchor=\"middle\">4</text><text x=\"178.2\" y=\"121\" text-anchor=\"middle\">5</text>" +
        "<text x=\"203\" y=\"129.9\" text-anchor=\"middle\">6</text><text x=\"231.8\" y=\"40.1\" text-anchor=\"middle\">7</text>" +
        "<text class=\"sm\" x=\"250\" y=\"130\" text-anchor=\"middle\">table</text><path class=\"thin\" d=\"M60 18 L67 22 L60 26\"/><path class=\"thin\" d=\"M60 134 L67 138 L60 142\"/></svg></figure>" +
        "<p class=\"geo-given\">The top and bottom rails of a pool table are parallel. A ball rolls from <strong>P</strong> to <strong>A</strong>, then <strong>B" +
        "</strong>, then <strong>D</strong>. At each bounce it leaves the rail at the same angle it arrives: ∠1 ≅ ∠3 and ∠4 ≅ ∠6. m∠1 = 56°.</p>",
      claims: [
        {
          id: "pair-3-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "With segment AB as the transversal of the two rails, what kind of angle pair are ∠3 and ∠4?",
          choices: [
            { letter: "A", text: "Corresponding angles" },
            { letter: "B", text: "Same-side interior angles" },
            { letter: "C", text: "Vertical angles" },
            { letter: "D", text: "Alternate interior angles" }
          ],
          correct: "D"
        },
        {
          id: "angle-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠4?",
          choices: [
            { letter: "A", text: "124°" },
            { letter: "B", text: "68°" },
            { letter: "C", text: "56°" },
            { letter: "D", text: "34°" }
          ],
          correct: "C"
        },
        {
          id: "angle-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠2, the angle between the ball's two paths at A?",
          choices: [
            { letter: "A", text: "124°" },
            { letter: "B", text: "68°" },
            { letter: "C", text: "112°" },
            { letter: "D", text: "34°" }
          ],
          correct: "B"
        },
        {
          id: "pa-bd",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "m∠7 = 56°. Which statement about segments PA and BD is true?",
          choices: [
            { letter: "A", text: "PA ∥ BD; corresponding angles ∠1 and ∠7 are congruent." },
            { letter: "B", text: "PA ∥ BD; ∠1 and ∠7 are alternate interior angles." },
            { letter: "C", text: "PA and BD are not parallel; they do not touch." },
            { letter: "D", text: "PA and BD are not parallel; ∠1 + ∠7 ≠ 180°." }
          ],
          correct: "A"
        },
        {
          id: "new-shot",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "On a new shot, the ball bounces off the top rail with ∠1 ≅ ∠3 and m∠2 = 80°. What is m∠1?",
          choices: [
            { letter: "A", text: "100°" },
            { letter: "B", text: "40°" },
            { letter: "C", text: "50°" },
            { letter: "D", text: "10°" }
          ],
          correct: "C"
        },
        {
          id: "error-lee",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Lee says ∠1 ≅ ∠4 because they are alternate interior angles. What is wrong with his reason?",
          choices: [
            { letter: "A", text: "∠1 and ∠4 are formed by different transversals." },
            { letter: "B", text: "Nothing; ∠1 and ∠4 are alternate interior angles." },
            { letter: "C", text: "They are corresponding angles, not alternate." },
            { letter: "D", text: "They are supplementary, not congruent." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt2-raid-tennis-lines",
      family: "GEO",
      mode: "raid",
      title: "Lines on the Tennis Court",
      kind: "Lines · G.RLT.2",
      blurb: "A baseline, a service line, a center line and a ball's path.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Baseline b (bottom) and service line s (top) are horizontal and marked parallel. Center line c is vertical and meets b at a marked right angle. Ball path p rises to the right across b and s. At b: angle 1 is above b and right of p, angle 3 below b and left of p. At s: angle 2 is below s and right of p, angle 4 below s and left of p, angle 5 above s and right of p\">" +
        "<line class=\"ln\" x1=\"14\" y1=\"132\" x2=\"300\" y2=\"132\"/><line class=\"ln\" x1=\"14\" y1=\"52\" x2=\"300\" y2=\"52\"/>" +
        "<path class=\"thin\" d=\"M219 128 L226 132 L219 136\"/><path class=\"thin\" d=\"M219 48 L226 52 L219 56\"/><text x=\"306\" y=\"137\" text-anchor=\"middle\">b</text>" +
        "<text x=\"306\" y=\"57\" text-anchor=\"middle\">s</text><line class=\"ln\" x1=\"262\" y1=\"12\" x2=\"262\" y2=\"150\"/><text x=\"274\" y=\"22\" text-anchor=\"middle\">c" +
        "</text><path class=\"thin\" d=\"M252 132 V122 H262\"/><line class=\"ln\" x1=\"58.8\" y1=\"150\" x2=\"146.2\" y2=\"10\"/>" +
        "<text x=\"158.2\" y=\"20\" text-anchor=\"middle\">p</text><circle class=\"dt\" cx=\"70\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"120\" cy=\"52\" r=\"3\"/>" +
        "<text x=\"87.5\" y=\"127.3\" text-anchor=\"middle\">1</text><text x=\"52.5\" y=\"146.7\" text-anchor=\"middle\">3</text>" +
        "<text x=\"129.7\" y=\"74.5\" text-anchor=\"middle\">2</text><text x=\"102.5\" y=\"66.7\" text-anchor=\"middle\">4</text>" +
        "<text x=\"137.5\" y=\"47.3\" text-anchor=\"middle\">5</text></svg></figure>" +
        "<p class=\"geo-given\">On a tennis court, the baseline <strong>b</strong> and service line <strong>s</strong> are parallel. The center line <strong>c" +
        "</strong> is perpendicular to <strong>b</strong>. A ball travels along path <strong>p</strong>. m∠1 = (3x + 4)° and m∠2 = (7x − 4)°.</p>",
      claims: [
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Find x, using m∠1 = (3x + 4)° and m∠2 = (7x − 4)°.",
          choices: [
            { letter: "A", text: "18" },
            { letter: "B", text: "2" },
            { letter: "C", text: "9" },
            { letter: "D", text: "17.2" }
          ],
          correct: "A"
        },
        {
          id: "angle-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠2?",
          choices: [
            { letter: "A", text: "58°" },
            { letter: "B", text: "122°" },
            { letter: "C", text: "18" },
            { letter: "D", text: "32°" }
          ],
          correct: "B"
        },
        {
          id: "alt-int-1",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle is an alternate interior angle to ∠1?",
          choices: [
            { letter: "A", text: "∠2" },
            { letter: "B", text: "∠5" },
            { letter: "C", text: "∠4" },
            { letter: "D", text: "∠3" }
          ],
          correct: "C"
        },
        {
          id: "c-and-s",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Why must center line c also be perpendicular to s?",
          choices: [
            { letter: "A", text: "Lines c and s are parallel lines." },
            { letter: "B", text: "Vertical angles are congruent, so c ⊥ s." },
            { letter: "C", text: "Same-side interior angles add to 90°." },
            { letter: "D", text: "b ∥ s, so the corresponding angles are both 90°." }
          ],
          correct: "D"
        },
        {
          id: "repaint",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Suppose the service line is repainted so that m∠2 = 120°, while m∠1 = 58°. Which is true?",
          choices: [
            { letter: "A", text: "s ∥ b, since ∠1 and ∠2 are on the same side of p." },
            { letter: "B", text: "s is not parallel to b, since 58° + 120° = 178°." },
            { letter: "C", text: "s ∥ b, since ∠2 is still obtuse." },
            { letter: "D", text: "Cannot tell without measuring ∠3." }
          ],
          correct: "B"
        },
        {
          id: "pair-1-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "∠1 and ∠2 are which kind of angle pair?",
          choices: [
            { letter: "A", text: "Alternate interior angles" },
            { letter: "B", text: "Corresponding angles" },
            { letter: "C", text: "Alternate exterior angles" },
            { letter: "D", text: "Same-side interior angles" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt2-raid-laser-puzzle",
      family: "GEO",
      mode: "raid",
      title: "The Laser Puzzle",
      kind: "Lines · G.RLT.2",
      blurb: "Four laser beams in a puzzle game, and a proof that two of them are parallel.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Laser beams a and b rise gently to the right and are marked parallel. Beams c and d are steeper, also rising to the right, and cross both a and b. Angle 1 is below a and right of c; angle 2 is above b and left of c; angle 3 is below b and right of d; angle 4 is below a and left of d\">" +
        "<line class=\"ln\" x1=\"20.8\" y1=\"53.1\" x2=\"294.1\" y2=\"14.7\"/><line class=\"ln\" x1=\"7.8\" y1=\"125.9\" x2=\"281.1\" y2=\"87.5\"/>" +
        "<line class=\"ln\" x1=\"116.5\" y1=\"12.3\" x2=\"44.7\" y2=\"141.7\"/><line class=\"ln\" x1=\"224.6\" y1=\"8.4\" x2=\"155.7\" y2=\"132.6\"/>" +
        "<path class=\"thin\" d=\"M255.9 16 L263.4 19 L257 24\"/><path class=\"thin\" d=\"M243 88.8 L250.4 91.8 L244.1 96.8\"/>" +
        "<text x=\"302.1\" y=\"19.7\" text-anchor=\"middle\">a</text><text x=\"289.1\" y=\"92.5\" text-anchor=\"middle\">b</text>" +
        "<text x=\"34.7\" y=\"143.7\" text-anchor=\"middle\">c</text><text x=\"145.7\" y=\"134.6\" text-anchor=\"middle\">d</text>" +
        "<circle class=\"dt\" cx=\"100\" cy=\"42\" r=\"3\"/><circle class=\"dt\" cx=\"57.3\" cy=\"119\" r=\"3\"/><circle class=\"dt\" cx=\"172.2\" cy=\"102.8\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"214.9\" cy=\"25.9\" r=\"3\"/><text x=\"110.2\" y=\"61.8\" text-anchor=\"middle\">1</text><text x=\"47.1\" y=\"109.1\" text-anchor=\"middle\">2" +
        "</text><text x=\"182.4\" y=\"122.7\" text-anchor=\"middle\">3</text><text x=\"195.9\" y=\"43.9\" text-anchor=\"middle\">4</text></svg></figure>" +
        "<p class=\"geo-given\">In a puzzle video game, four straight laser beams <strong>a</strong>, <strong>b</strong>, <strong>c</strong> and <strong>d" +
        "</strong> cross. Given: a ∥ b and ∠1 ≅ ∠3. Prove: c ∥ d.</p>" +
        "<table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. a ∥ b</td><td>Given</td></tr><tr><td>2. ∠2 ≅ ∠1</td><td>____ (a)</td>" +
        "</tr><tr><td>3. ∠1 ≅ ∠3</td><td>Given</td></tr><tr><td>4. ∠2 ≅ ∠3</td><td>____ (b)</td></tr><tr><td>5. c ∥ d</td><td>____ (c)</td></tr></table>",
      claims: [
        {
          id: "reason-a",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the laser proof, what is the reason for step 2 (blank a)?",
          choices: [
            { letter: "A", text: "Converse of the Alternate Interior Angles Theorem" },
            { letter: "B", text: "Corresponding Angles Postulate" },
            { letter: "C", text: "Alternate Interior Angles Theorem" },
            { letter: "D", text: "Vertical Angles Theorem" }
          ],
          correct: "C"
        },
        {
          id: "reason-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the laser proof, what is the reason for step 4 (blank b)?",
          choices: [
            { letter: "A", text: "Transitive Property of Congruence" },
            { letter: "B", text: "Reflexive Property of Congruence" },
            { letter: "C", text: "Symmetric Property of Congruence" },
            { letter: "D", text: "Vertical Angles Theorem" }
          ],
          correct: "A"
        },
        {
          id: "reason-c",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the laser proof, what is the reason for step 5 (blank c)?",
          choices: [
            { letter: "A", text: "Alternate Exterior Angles Theorem" },
            { letter: "B", text: "Converse of the Alternate Exterior Angles Theorem" },
            { letter: "C", text: "Converse of the Alternate Interior Angles Theorem" },
            { letter: "D", text: "Converse of the Corresponding Angles Postulate" }
          ],
          correct: "B"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Suppose a ∥ b, m∠1 = (6x − 17)° and m∠3 = (4x + 31)°. For what value of x is c ∥ d?",
          choices: [
            { letter: "A", text: "16.6" },
            { letter: "B", text: "7" },
            { letter: "C", text: "48" },
            { letter: "D", text: "24" }
          ],
          correct: "D"
        },
        {
          id: "other-given",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Instead of ∠1 ≅ ∠3, which given would also prove c ∥ d, along with a ∥ b?",
          choices: [
            { letter: "A", text: "∠1 ≅ ∠4" },
            { letter: "B", text: "∠2 and ∠3 are supplementary." },
            { letter: "C", text: "∠1 ≅ ∠2" },
            { letter: "D", text: "∠1 and ∠4 are supplementary." }
          ],
          correct: "D"
        },
        {
          id: "angle-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "If a ∥ b, c ∥ d and m∠4 = 53°, what is m∠2?",
          choices: [
            { letter: "A", text: "53°" },
            { letter: "B", text: "127°" },
            { letter: "C", text: "37°" },
            { letter: "D", text: "106°" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt2-raid-mini-golf",
      family: "GEO",
      mode: "raid",
      title: "The Mini-Golf Bumper",
      kind: "Lines · G.RLT.2",
      blurb: "A bent bumper between two parallel walls, and the dashed line that solves it.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Walls l (top) and m (bottom) are horizontal and marked parallel. A bent bumper runs from A on wall l down to P, then to B on wall m; P is to the right of A and B. Dashed line n through P is horizontal. Angle 1 is at A between wall l and AP; angle 2 is at B between wall m and BP; angle 3 is at P between n and PA; angle 4 is at P between n and PB\">" +
        "<line class=\"ln\" x1=\"14\" y1=\"24\" x2=\"306\" y2=\"24\"/><line class=\"ln\" x1=\"14\" y1=\"136\" x2=\"306\" y2=\"136\"/><path class=\"thin\" d=\"M73 20 L80 24 L73 28\"/>" +
        "<path class=\"thin\" d=\"M73 132 L80 136 L73 140\"/><text x=\"20\" y=\"16\" text-anchor=\"middle\">ℓ</text><text x=\"20\" y=\"154\" text-anchor=\"middle\">m</text>" +
        "<line class=\"ln dash\" x1=\"96\" y1=\"76\" x2=\"306\" y2=\"76\"/><text x=\"88\" y=\"81\" text-anchor=\"middle\">n</text>" +
        "<line class=\"ac\" x1=\"168.8\" y1=\"24\" x2=\"252\" y2=\"76\"/><line class=\"ac\" x1=\"252\" y1=\"76\" x2=\"194.1\" y2=\"136\"/>" +
        "<circle class=\"dt\" cx=\"168.8\" cy=\"24\" r=\"3\"/><circle class=\"dt\" cx=\"252\" cy=\"76\" r=\"3\"/><circle class=\"dt\" cx=\"194.1\" cy=\"136\" r=\"3\"/>" +
        "<text x=\"166.8\" y=\"16\" text-anchor=\"middle\">A</text><text x=\"264\" y=\"70\" text-anchor=\"middle\">P</text><text x=\"192.1\" y=\"154\" text-anchor=\"middle\">B" +
        "</text><text x=\"211.1\" y=\"41.1\" text-anchor=\"middle\">1</text><text x=\"225.4\" y=\"127.7\" text-anchor=\"middle\">2</text>" +
        "<text x=\"213.5\" y=\"70\" text-anchor=\"middle\">3</text><text x=\"222.5\" y=\"93.5\" text-anchor=\"middle\">4</text>" +
        "<path class=\"thin\" d=\"M194.2 39.9 A30 30 0 0 0 198.8 24\"/><path class=\"thin\" d=\"M216.1 136 A22 22 0 0 0 209.3 120.2\"/>" +
        "<path class=\"thin\" d=\"M230 62.2 A26 26 0 0 0 226 76\"/><path class=\"thin\" d=\"M234 76 A18 18 0 0 0 239.5 88.9\"/></svg></figure>" +
        "<p class=\"geo-given\">On a mini-golf hole, walls <strong>ℓ</strong> and <strong>m</strong> are parallel. A bent bumper runs from <strong>A</strong> to " +
        "<strong>P</strong> to <strong>B</strong>. Dashed line <strong>n</strong> is drawn through <strong>P</strong> parallel to ℓ. m∠1 = 32° and m∠2 = 46°." +
        "</p>",
      claims: [
        {
          id: "angle-apb",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠APB?",
          choices: [
            { letter: "A", text: "102°" },
            { letter: "B", text: "14°" },
            { letter: "C", text: "282°" },
            { letter: "D", text: "78°" }
          ],
          correct: "D"
        },
        {
          id: "why-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Why is ∠3 ≅ ∠1?",
          choices: [
            { letter: "A", text: "They are corresponding angles, and n ∥ ℓ." },
            { letter: "B", text: "They are vertical angles." },
            { letter: "C", text: "They are alternate interior angles, and n ∥ ℓ." },
            { letter: "D", text: "They are same-side interior angles." }
          ],
          correct: "C"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Suppose m∠1 = (x + 12)°, m∠2 = (2x + 6)° and m∠APB = 78°. What is x?",
          choices: [
            { letter: "A", text: "20" },
            { letter: "B", text: "28" },
            { letter: "C", text: "32" },
            { letter: "D", text: "60" }
          ],
          correct: "A"
        },
        {
          id: "n-and-m",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Why is the dashed line n parallel to wall m?",
          choices: [
            { letter: "A", text: "n and m are both horizontal in the drawing." },
            { letter: "B", text: "Lines parallel to the same line are parallel." },
            { letter: "C", text: "n crosses the bumper, as m does." },
            { letter: "D", text: "∠2 and ∠4 are vertical angles." }
          ],
          correct: "B"
        },
        {
          id: "other-hole",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "On another hole, m∠1 = 32°, m∠2 = 46° and m∠APB = 80°. What can you conclude about its walls?",
          choices: [
            { letter: "A", text: "They are not parallel, since 32° + 46° ≠ 80°." },
            { letter: "B", text: "They are parallel, since all three angles are acute." },
            { letter: "C", text: "They are parallel, since 80° is close to 78°." },
            { letter: "D", text: "Cannot tell unless ∠1 ≅ ∠2." }
          ],
          correct: "A"
        },
        {
          id: "error-rosa",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Rosa writes m∠APB = 180° − 32° − 46° = 102°. What was her mistake?",
          choices: [
            { letter: "A", text: "She should subtract from 360°, not 180°." },
            { letter: "B", text: "She should subtract the smaller from the larger." },
            { letter: "C", text: "∠APB is the sum m∠1 + m∠2, not 180° minus it." },
            { letter: "D", text: "Nothing; her answer is correct." }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
