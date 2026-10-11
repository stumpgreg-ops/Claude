/* SOL Labyrinth — Geometry game (family GEO), lines cut by a transversal: G.RLT.2 (Virginia 2023 Geometry SOL), v5.20.
   Modes: ring (Wolf Ring: art, design, music and making things) and worms (Root Worms: nature and the outdoors). Original items only.
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given
   facts, then six questions about it. Every numeric answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-rlt2-ring-fanned-fret",
      family: "GEO",
      mode: "ring",
      title: "The Slanted Fret",
      kind: "Lines · G.RLT.2",
      blurb: "Two parallel guitar strings, one slanted fret and eight numbered angles.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Parallel horizontal strings a (top) and b (bottom) on a fretboard, crossed by fret f, which slants down to the right. At string a, angle 1 is above a and right of f, angle 2 is above a and left of f, angle 3 is below a and left of f, and angle 4 is below a and right of f. Angles 5 to 8 sit the same way at string b\">" +
        "<polygon class=\"sh2\" points=\"20,28 300,28 300,132 20,132\"/><line class=\"ln\" x1=\"20\" y1=\"50\" x2=\"300\" y2=\"50\"/>" +
        "<line class=\"ln\" x1=\"20\" y1=\"110\" x2=\"300\" y2=\"110\"/><line class=\"ln\" x1=\"194.2\" y1=\"140.6\" x2=\"133.3\" y2=\"15.8\"/>" +
        "<path class=\"thin\" d=\"M255 46 L262 50 L255 54\"/><path class=\"thin\" d=\"M255 106 L262 110 L255 114\"/><text x=\"310\" y=\"55\" text-anchor=\"middle\">a</text>" +
        "<text x=\"310\" y=\"115\" text-anchor=\"middle\">b</text><text x=\"124.3\" y=\"19.8\" text-anchor=\"middle\">f</text><circle class=\"dt\" cx=\"150\" cy=\"50\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"179.3\" cy=\"110\" r=\"3\"/><text class=\"sm\" x=\"60\" y=\"145\" text-anchor=\"middle\">fretboard</text>" +
        "<text x=\"157.9\" y=\"42.3\" text-anchor=\"middle\">1</text><text x=\"133.2\" y=\"44.5\" text-anchor=\"middle\">2</text>" +
        "<text x=\"142.1\" y=\"67.7\" text-anchor=\"middle\">3</text><text x=\"166.8\" y=\"65.5\" text-anchor=\"middle\">4</text>" +
        "<text x=\"187.2\" y=\"102.3\" text-anchor=\"middle\">5</text><text x=\"162.5\" y=\"104.5\" text-anchor=\"middle\">6</text>" +
        "<text x=\"171.3\" y=\"127.7\" text-anchor=\"middle\">7</text><text x=\"196.1\" y=\"125.5\" text-anchor=\"middle\">8</text></svg></figure>" +
        "<p class=\"geo-given\">On a fanned-fret guitar, the frets are slanted. Strings <strong>a</strong> and <strong>b</strong> are parallel. Fret <strong>f</strong> crosses both strings. m∠7 = 116°.</p>",
      claims: [
        {
          id: "pair-4-6",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "∠4 and ∠6 are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Same-side interior angles" },
            { letter: "B", text: "Alternate interior angles" },
            { letter: "C", text: "Corresponding angles" },
            { letter: "D", text: "Alternate exterior angles" }
          ],
          correct: "B"
        },
        {
          id: "angle-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠2, at string a?",
          choices: [
            { letter: "A", text: "116°" },
            { letter: "B", text: "244°" },
            { letter: "C", text: "64°" },
            { letter: "D", text: "26°" }
          ],
          correct: "C"
        },
        {
          id: "corr-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle corresponds to ∠3?",
          choices: [
            { letter: "A", text: "∠7" },
            { letter: "B", text: "∠5" },
            { letter: "C", text: "∠1" },
            { letter: "D", text: "∠6" }
          ],
          correct: "A"
        },
        {
          id: "measures-64",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Which angle measures 64°?",
          choices: [
            { letter: "A", text: "∠5" },
            { letter: "B", text: "∠3" },
            { letter: "C", text: "∠1" },
            { letter: "D", text: "∠8" }
          ],
          correct: "D"
        },
        {
          id: "linear-pair",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which two angles form a linear pair?",
          choices: [
            { letter: "A", text: "∠5 and ∠7" },
            { letter: "B", text: "∠5 and ∠6" },
            { letter: "C", text: "∠2 and ∠6" },
            { letter: "D", text: "∠4 and ∠5" }
          ],
          correct: "B"
        },
        {
          id: "second-guitar",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "A luthier checks a second guitar. Its fret makes 116° in the place of ∠7 and 113° in the place of ∠3. Are those two strings parallel? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; the two angles differ by only 3°." },
            { letter: "B", text: "Yes; ∠3 and ∠7 are alternate exterior angles." },
            { letter: "C", text: "No; ∠3 and ∠7 should add to 180°." },
            { letter: "D", text: "No; corresponding angles ∠3 and ∠7 are not congruent." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt2-ring-music-staff",
      family: "GEO",
      mode: "ring",
      title: "The Beam Across the Staff",
      kind: "Lines · G.RLT.2",
      blurb: "Five parallel staff lines and one slanted beam.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 142\" role=\"img\" aria-label=\"Five parallel horizontal staff lines, named from top to bottom F, D, B, G and E, crossed by a straight beam that rises to the right. Angle 1 is above line F, right of the beam. Angles 2 and 3 are at line B: angle 2 above B and left of the beam, angle 3 below B and right of the beam. Angle 4 is below line G, right of the beam. Angle 5 is below line E, left of the beam\">" +
        "<line class=\"ln\" x1=\"34\" y1=\"30\" x2=\"300\" y2=\"30\"/><text x=\"22\" y=\"35\" text-anchor=\"middle\">F</text>" +
        "<line class=\"ln\" x1=\"34\" y1=\"52\" x2=\"300\" y2=\"52\"/><text x=\"22\" y=\"57\" text-anchor=\"middle\">D</text>" +
        "<line class=\"ln\" x1=\"34\" y1=\"74\" x2=\"300\" y2=\"74\"/><text x=\"22\" y=\"79\" text-anchor=\"middle\">B</text>" +
        "<line class=\"ln\" x1=\"34\" y1=\"96\" x2=\"300\" y2=\"96\"/><text x=\"22\" y=\"101\" text-anchor=\"middle\">G</text>" +
        "<line class=\"ln\" x1=\"34\" y1=\"118\" x2=\"300\" y2=\"118\"/><text x=\"22\" y=\"123\" text-anchor=\"middle\">E</text>" +
        "<line class=\"ac\" x1=\"115.1\" y1=\"135.8\" x2=\"204.9\" y2=\"12.2\"/><path class=\"thin\" d=\"M277 26 L284 30 L277 34\"/>" +
        "<path class=\"thin\" d=\"M277 114 L284 118 L277 122\"/><circle class=\"dt\" cx=\"192\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"74\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"144\" cy=\"96\" r=\"3\"/><circle class=\"dt\" cx=\"128\" cy=\"118\" r=\"3\"/><text x=\"212.6\" y=\"24.5\" text-anchor=\"middle\">1</text>" +
        "<text x=\"153.2\" y=\"65.6\" text-anchor=\"middle\">2</text><text x=\"166.8\" y=\"92.4\" text-anchor=\"middle\">3</text>" +
        "<text x=\"150.8\" y=\"114.4\" text-anchor=\"middle\">4</text><text x=\"107.4\" y=\"133.5\" text-anchor=\"middle\">5</text>" +
        "<text class=\"sm\" x=\"214.9\" y=\"20.2\" text-anchor=\"middle\">beam</text></svg></figure>" +
        "<p class=\"geo-given\">The five lines of a music staff are parallel. From bottom to top they are named <strong>E</strong>, <strong>G</strong>, <strong>B</strong>, <strong>D</strong> and <strong>F</strong>. A composer draws a straight slanted beam across all five lines. m∠1 = 54°.</p>",
      claims: [
        {
          id: "angle-5",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠5, at line E?",
          choices: [
            { letter: "A", text: "54°" },
            { letter: "B", text: "126°" },
            { letter: "C", text: "36°" },
            { letter: "D", text: "306°" }
          ],
          correct: "A"
        },
        {
          id: "pair-1-5",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Using lines F and E, what kind of angle pair are ∠1 and ∠5?",
          choices: [
            { letter: "A", text: "Corresponding angles" },
            { letter: "B", text: "Alternate interior angles" },
            { letter: "C", text: "Alternate exterior angles" },
            { letter: "D", text: "Same-side interior angles" }
          ],
          correct: "C"
        },
        {
          id: "angle-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠2, at line B?",
          choices: [
            { letter: "A", text: "54°" },
            { letter: "B", text: "36°" },
            { letter: "C", text: "144°" },
            { letter: "D", text: "126°" }
          ],
          correct: "D"
        },
        {
          id: "pair-3-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Using lines B and G, what kind of angle pair are ∠3 and ∠4?",
          choices: [
            { letter: "A", text: "Alternate interior angles" },
            { letter: "B", text: "Corresponding angles" },
            { letter: "C", text: "Alternate exterior angles" },
            { letter: "D", text: "Same-side interior angles" }
          ],
          correct: "B"
        },
        {
          id: "vert-2-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which statement about ∠2 and ∠3 is true?",
          choices: [
            { letter: "A", text: "They are vertical angles, so they are congruent." },
            { letter: "B", text: "They form a linear pair, so they are supplementary." },
            { letter: "C", text: "They are corresponding angles, so they are congruent." },
            { letter: "D", text: "They are alternate interior angles, so they are congruent." }
          ],
          correct: "A"
        },
        {
          id: "second-beam",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "A second straight beam crosses line F to the right of the first one. It makes a 54° angle above line F and right of the new beam. Which reason proves that the two beams are parallel?",
          choices: [
            { letter: "A", text: "Converse of the Alternate Interior Angles Theorem" },
            { letter: "B", text: "Corresponding Angles Postulate" },
            { letter: "C", text: "Converse of the Corresponding Angles Postulate" },
            { letter: "D", text: "Converse of the Same-Side Interior Angles Theorem" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt2-ring-loom-twill",
      family: "GEO",
      mode: "ring",
      title: "The Twill Line on the Loom",
      kind: "Lines · G.RLT.2",
      blurb: "Two parallel warp threads, one slanted thread and two angles written in x.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Two parallel vertical warp threads p (left) and q (right), with other threads dashed between and beside them, crossed by a slanted thread w that rises to the right. At thread p, angle 1 is left of p and above w, angle 2 right of p and above w, angle 3 left of p and below w, angle 4 right of p and below w. Angles 5 to 8 sit the same way at thread q\">" +
        "<line class=\"thin dash\" x1=\"95\" y1=\"10\" x2=\"95\" y2=\"150\"/><line class=\"thin dash\" x1=\"160\" y1=\"10\" x2=\"160\" y2=\"150\"/>" +
        "<line class=\"thin dash\" x1=\"230\" y1=\"10\" x2=\"230\" y2=\"150\"/><line class=\"ln\" x1=\"125\" y1=\"8\" x2=\"125\" y2=\"152\"/>" +
        "<line class=\"ln\" x1=\"195\" y1=\"8\" x2=\"195\" y2=\"152\"/><line class=\"ac\" x1=\"106.1\" y1=\"148.3\" x2=\"216.4\" y2=\"12.1\"/>" +
        "<path class=\"thin\" d=\"M121 29 L125 22 L129 29\"/><path class=\"thin\" d=\"M191 147 L195 140 L199 147\"/><circle class=\"dt\" cx=\"125\" cy=\"125\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"195\" cy=\"38.6\" r=\"3\"/><text x=\"137\" y=\"155\" text-anchor=\"middle\">p</text><text x=\"207\" y=\"155\" text-anchor=\"middle\">q</text>" +
        "<text x=\"225.4\" y=\"18.1\" text-anchor=\"middle\">w</text><text class=\"sm\" x=\"262\" y=\"150\" text-anchor=\"middle\">warp</text>" +
        "<text x=\"110.9\" y=\"125\" text-anchor=\"middle\">1</text><text x=\"133\" y=\"107.4\" text-anchor=\"middle\">2</text>" +
        "<text x=\"117\" y=\"152.6\" text-anchor=\"middle\">3</text><text x=\"139.1\" y=\"135\" text-anchor=\"middle\">4</text>" +
        "<text x=\"180.9\" y=\"38.6\" text-anchor=\"middle\">5</text><text x=\"203\" y=\"20.9\" text-anchor=\"middle\">6</text>" +
        "<text x=\"187\" y=\"66.2\" text-anchor=\"middle\">7</text><text x=\"209.1\" y=\"48.6\" text-anchor=\"middle\">8</text></svg></figure>" +
        "<p class=\"geo-given\">On a loom, warp threads <strong>p</strong> and <strong>q</strong> are parallel. A slanted thread of a twill pattern, <strong>w</strong>, crosses both. m∠1 = (7x − 20)⁠° and m∠8 = (5x + 26)⁠°.</p>",
      claims: [
        {
          id: "pair-1-8",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "∠1 and ∠8 are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Alternate interior angles" },
            { letter: "B", text: "Corresponding angles" },
            { letter: "C", text: "Same-side interior angles" },
            { letter: "D", text: "Alternate exterior angles" }
          ],
          correct: "D"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is the value of x for the twill thread?",
          choices: [
            { letter: "A", text: "23" },
            { letter: "B", text: "14.5" },
            { letter: "C", text: "3" },
            { letter: "D", text: "46" }
          ],
          correct: "A"
        },
        {
          id: "angle-8",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠8, at thread q?",
          choices: [
            { letter: "A", text: "39°" },
            { letter: "B", text: "115°" },
            { letter: "C", text: "141°" },
            { letter: "D", text: "23°" }
          ],
          correct: "C"
        },
        {
          id: "angle-6",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Find m∠6.",
          choices: [
            { letter: "A", text: "141°" },
            { letter: "B", text: "39°" },
            { letter: "C", text: "51°" },
            { letter: "D", text: "219°" }
          ],
          correct: "B"
        },
        {
          id: "other-loom",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "On another loom, a slanted thread crosses two warp threads. It makes 139° in the place of ∠1 and 41° in the place of ∠8. Are those warp threads parallel? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; alternate exterior angles are supplementary." },
            { letter: "B", text: "Yes; ∠1 and ∠8 are corresponding angles." },
            { letter: "C", text: "No; alternate exterior angles 139° and 41° are not congruent." },
            { letter: "D", text: "No; alternate exterior angles must add to 180°." }
          ],
          correct: "C"
        },
        {
          id: "supp-pair",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which pair of angles must be supplementary?",
          choices: [
            { letter: "A", text: "∠1 and ∠8" },
            { letter: "B", text: "∠2 and ∠6" },
            { letter: "C", text: "∠3 and ∠6" },
            { letter: "D", text: "∠4 and ∠7" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt2-ring-mural-stripes",
      family: "GEO",
      mode: "ring",
      title: "The Striped Mural",
      kind: "Lines · G.RLT.2",
      blurb: "Two stripes, two bands, three measured angles: which lines are parallel?",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Two long horizontal stripes, a on top and b below, and two nearly vertical bands, c on the left and d on the right, that cross both stripes. Angle 1 is below a and right of c. Angle 2 is above b and right of c. Angle 3 is below a and left of d. Angle 4 is above b and left of d\">" +
        "<polygon class=\"sh\" points=\"20,22 300,22 300,50 20,50\"/><polygon class=\"sh\" points=\"20,102 300,102 300,130 20,130\"/>" +
        "<line class=\"ln\" x1=\"20\" y1=\"36\" x2=\"300\" y2=\"36\"/><line class=\"ln\" x1=\"20\" y1=\"116\" x2=\"300\" y2=\"116\"/>" +
        "<line class=\"ln\" x1=\"92.1\" y1=\"8\" x2=\"106.1\" y2=\"142\"/><line class=\"ln\" x1=\"213\" y1=\"8\" x2=\"222.4\" y2=\"142\"/>" +
        "<text x=\"310\" y=\"41\" text-anchor=\"middle\">a</text><text x=\"310\" y=\"121\" text-anchor=\"middle\">b</text>" +
        "<text x=\"82.1\" y=\"16\" text-anchor=\"middle\">c</text><text x=\"223\" y=\"16\" text-anchor=\"middle\">d</text><circle class=\"dt\" cx=\"95\" cy=\"36\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"215\" cy=\"36\" r=\"3\"/><circle class=\"dt\" cx=\"103.4\" cy=\"116\" r=\"3\"/><circle class=\"dt\" cx=\"220.6\" cy=\"116\" r=\"3\"/>" +
        "<text x=\"107.6\" y=\"52.4\" text-anchor=\"middle\">1</text><text x=\"114.8\" y=\"108.4\" text-anchor=\"middle\">2</text>" +
        "<text x=\"203.4\" y=\"53.4\" text-anchor=\"middle\">3</text><text x=\"208.2\" y=\"109.4\" text-anchor=\"middle\">4</text></svg></figure>" +
        "<p class=\"geo-given\">A mural has two long stripes, <strong>a</strong> and <strong>b</strong>, and two slanted bands, <strong>c</strong> and <strong>d</strong>. The artist measures m∠1 = 84°, m∠2 = 96° and m∠3 = 94°. No lines are marked parallel.</p>",
      claims: [
        {
          id: "below-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is the measure of the angle below stripe b and left of band c?",
          choices: [
            { letter: "A", text: "84°" },
            { letter: "B", text: "96°" },
            { letter: "C", text: "94°" },
            { letter: "D", text: "86°" }
          ],
          correct: "B"
        },
        {
          id: "a-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Are stripes a and b parallel? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; same-side interior angles ∠1 and ∠2 are supplementary." },
            { letter: "B", text: "Yes; ∠1 and ∠3 are alternate interior angles." },
            { letter: "C", text: "No; same-side interior angles must be congruent." },
            { letter: "D", text: "No; ∠1 and ∠2 form a linear pair." }
          ],
          correct: "A"
        },
        {
          id: "c-d",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Are bands c and d parallel? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; ∠1 and ∠3 are corresponding angles." },
            { letter: "B", text: "Yes; ∠2 and ∠3 are alternate interior angles." },
            { letter: "C", text: "No; ∠1 and ∠3 should be congruent." },
            { letter: "D", text: "No; same-side interior angles ∠1 and ∠3 add to 178°." }
          ],
          correct: "D"
        },
        {
          id: "angle-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Use the measures given for this mural. What is m∠4?",
          choices: [
            { letter: "A", text: "94°" },
            { letter: "B", text: "96°" },
            { letter: "C", text: "86°" },
            { letter: "D", text: "84°" }
          ],
          correct: "C"
        },
        {
          id: "repaint-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "The artist repaints band d so that it is parallel to band c. ∠1 still measures 84°, and the angle in the place of ∠3 is now (2x + 12)⁠°. What is x?",
          choices: [
            { letter: "A", text: "36" },
            { letter: "B", text: "42" },
            { letter: "C", text: "41" },
            { letter: "D", text: "84" }
          ],
          correct: "B"
        },
        {
          id: "pair-2-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which statement about ∠2 and ∠4 is true?",
          choices: [
            { letter: "A", text: "They are same-side interior angles along stripe b." },
            { letter: "B", text: "They are corresponding angles along stripe b." },
            { letter: "C", text: "They are alternate interior angles along stripe b." },
            { letter: "D", text: "They form a linear pair." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt2-ring-diamond-window",
      family: "GEO",
      mode: "ring",
      title: "The Diamond-Pane Window",
      kind: "Lines · G.RLT.2",
      blurb: "Two pairs of parallel lead strips and two angles written in x.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A window frame with four lead strips: a and b rise to the right, c and d fall to the right, and they cross to make a diamond-shaped pane. Angle 1 is inside the pane at its top corner, angle 2 inside at its right corner, angle 3 inside at its bottom corner, angle 4 inside at its left corner, and angle 5 is above the right corner, between strips b and c outside the pane\">" +
        "<polygon class=\"sh2\" points=\"160,25.3 194,83 160,140.7 126,83\"/><rect class=\"thin\" x=\"88\" y=\"4\" width=\"144\" height=\"158\"/>" +
        "<line class=\"ln\" x1=\"113.8\" y1=\"103.7\" x2=\"172.2\" y2=\"4.6\"/><line class=\"ln\" x1=\"147.8\" y1=\"161.4\" x2=\"206.2\" y2=\"62.3\"/>" +
        "<line class=\"ln\" x1=\"147.8\" y1=\"4.6\" x2=\"206.2\" y2=\"103.7\"/><line class=\"ln\" x1=\"113.8\" y1=\"62.3\" x2=\"172.2\" y2=\"161.4\"/>" +
        "<path class=\"thin\" d=\"M162.1 13.8 L169.1 9.8 L169 17.8\"/><path class=\"thin\" d=\"M196.1 71.5 L203.1 67.5 L203 75.6\"/>" +
        "<path class=\"thin\" d=\"M151 17.8 L150.9 9.8 L157.9 13.8\"/><path class=\"thin\" d=\"M154 23 L153.9 14.9 L160.9 18.9\"/>" +
        "<path class=\"thin\" d=\"M117 75.6 L116.9 67.5 L123.9 71.5\"/><path class=\"thin\" d=\"M120 80.7 L119.9 72.7 L126.9 76.7\"/>" +
        "<text x=\"180.2\" y=\"14.6\" text-anchor=\"middle\">a</text><text x=\"214.2\" y=\"72.3\" text-anchor=\"middle\">b</text>" +
        "<text x=\"139.8\" y=\"14.6\" text-anchor=\"middle\">c</text><text x=\"105.8\" y=\"72.3\" text-anchor=\"middle\">d</text>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"25.3\" r=\"3\"/><circle class=\"dt\" cx=\"194\" cy=\"83\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"140.7\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"126\" cy=\"83\" r=\"3\"/><text x=\"160\" y=\"52.3\" text-anchor=\"middle\">1</text><text x=\"179\" y=\"88\" text-anchor=\"middle\">2</text>" +
        "<text x=\"160\" y=\"123.7\" text-anchor=\"middle\">3</text><text x=\"141\" y=\"88\" text-anchor=\"middle\">4</text>" +
        "<text x=\"194\" y=\"66\" text-anchor=\"middle\">5</text></svg></figure>" +
        "<p class=\"geo-given\">In a diamond-pane window, lead strips <strong>a</strong> and <strong>b</strong> are parallel, and strips <strong>c</strong> and <strong>d</strong> are parallel. m∠1 = (3x − 17)⁠° and m∠2 = (5x − 11)⁠°.</p>",
      claims: [
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is the value of x for the window?",
          choices: [
            { letter: "A", text: "−3" },
            { letter: "B", text: "19" },
            { letter: "C", text: "26" },
            { letter: "D", text: "22.5" }
          ],
          correct: "C"
        },
        {
          id: "why-equation",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which fact gives the equation (3x − 17) + (5x − 11) = 180?",
          choices: [
            { letter: "A", text: "∠1 and ∠2 form a linear pair." },
            { letter: "B", text: "∠1 and ∠2 are same-side interior angles, and a ∥ b." },
            { letter: "C", text: "∠1 and ∠2 are alternate interior angles, and a ∥ b." },
            { letter: "D", text: "∠1 and ∠2 are same-side interior angles, and c ∥ d." }
          ],
          correct: "B"
        },
        {
          id: "angle-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠2, at the right corner of the pane?",
          choices: [
            { letter: "A", text: "61°" },
            { letter: "B", text: "130°" },
            { letter: "C", text: "29°" },
            { letter: "D", text: "119°" }
          ],
          correct: "D"
        },
        {
          id: "angle-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠3, at the bottom corner of the pane?",
          choices: [
            { letter: "A", text: "61°" },
            { letter: "B", text: "119°" },
            { letter: "C", text: "26°" },
            { letter: "D", text: "29°" }
          ],
          correct: "A"
        },
        {
          id: "prove-cd",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Suppose you did not know that any of the strips were parallel. Which fact alone would prove that c ∥ d?",
          choices: [
            { letter: "A", text: "∠1 and ∠2 are supplementary." },
            { letter: "B", text: "∠2 and ∠3 are supplementary." },
            { letter: "C", text: "∠1 and ∠3 are congruent." },
            { letter: "D", text: "∠2 and ∠4 are congruent." }
          ],
          correct: "B"
        },
        {
          id: "pair-1-5",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "With strip c as the transversal of a and b, what kind of angle pair are ∠1 and ∠5?",
          choices: [
            { letter: "A", text: "Corresponding angles" },
            { letter: "B", text: "Same-side interior angles" },
            { letter: "C", text: "Alternate interior angles" },
            { letter: "D", text: "Alternate exterior angles" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt2-ring-painters-easel",
      family: "GEO",
      mode: "ring",
      title: "The Painter's Easel",
      kind: "Lines · G.RLT.2",
      blurb: "A tray parallel to the floor, two slanted legs and angles in x.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"An easel seen from the front: two straight legs meet at the top point P. The left leg reaches the floor at B and the right leg at D. A tray crosses the left leg at A and the right leg at C, above the floor, with a canvas resting on it\">" +
        "<line class=\"ln\" x1=\"24\" y1=\"156\" x2=\"300\" y2=\"156\"/><line class=\"ac\" x1=\"98.9\" y1=\"100\" x2=\"187.4\" y2=\"100\"/>" +
        "<line class=\"ln\" x1=\"93.1\" y1=\"156\" x2=\"150\" y2=\"22\"/><line class=\"ln\" x1=\"183.4\" y1=\"156\" x2=\"150\" y2=\"22\"/>" +
        "<line class=\"ln\" x1=\"150\" y1=\"22\" x2=\"153.9\" y2=\"12.8\"/><line class=\"ln\" x1=\"150\" y1=\"22\" x2=\"147.6\" y2=\"12.3\"/>" +
        "<path class=\"thin\" d=\"M178.4 96 L185.4 100 L178.4 104\"/><path class=\"thin\" d=\"M263 152 L270 156 L263 160\"/>" +
        "<rect class=\"sh2\" x=\"122.9\" y=\"48\" width=\"40.6\" height=\"44\"/><circle class=\"dt\" cx=\"150\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"116.9\" cy=\"100\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"169.4\" cy=\"100\" r=\"3\"/><circle class=\"dt\" cx=\"93.1\" cy=\"156\" r=\"3\"/><circle class=\"dt\" cx=\"183.4\" cy=\"156\" r=\"3\"/>" +
        "<text x=\"150\" y=\"15\" text-anchor=\"middle\">P</text><text x=\"90.9\" y=\"105\" text-anchor=\"middle\">A</text>" +
        "<text x=\"197.4\" y=\"105\" text-anchor=\"middle\">C</text><text x=\"89.1\" y=\"148\" text-anchor=\"middle\">B</text>" +
        "<text x=\"189.4\" y=\"148\" text-anchor=\"middle\">D</text><text class=\"sm\" x=\"60\" y=\"150\" text-anchor=\"middle\">floor</text>" +
        "<text class=\"sm\" x=\"221.4\" y=\"104\" text-anchor=\"middle\">tray</text><text class=\"sm\" x=\"196\" y=\"72\" text-anchor=\"middle\">canvas</text></svg></figure>" +
        "<p class=\"geo-given\">The legs of an easel meet at <strong>P</strong>. The tray <strong>AC</strong> is parallel to the floor <strong>BD</strong>. m∠PBD = (3x + 10)⁠°, m∠PAC = (5x − 28)⁠° and m∠PDB = 76°.</p>",
      claims: [
        {
          id: "pair-pac-pbd",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "With the left leg as the transversal, what kind of angle pair are ∠PAC and ∠PBD?",
          choices: [
            { letter: "A", text: "Alternate interior angles" },
            { letter: "B", text: "Same-side interior angles" },
            { letter: "C", text: "Alternate exterior angles" },
            { letter: "D", text: "Corresponding angles" }
          ],
          correct: "D"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Solve for x using the two leg angles.",
          choices: [
            { letter: "A", text: "9" },
            { letter: "B", text: "19" },
            { letter: "C", text: "38" },
            { letter: "D", text: "24.75" }
          ],
          correct: "B"
        },
        {
          id: "angle-acd",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠ACD, the angle below the tray at C, inside the easel?",
          choices: [
            { letter: "A", text: "104°" },
            { letter: "B", text: "76°" },
            { letter: "C", text: "67°" },
            { letter: "D", text: "113°" }
          ],
          correct: "A"
        },
        {
          id: "apex",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠APC, the angle between the legs at the top?",
          choices: [
            { letter: "A", text: "143°" },
            { letter: "B", text: "9°" },
            { letter: "C", text: "37°" },
            { letter: "D", text: "217°" }
          ],
          correct: "C"
        },
        {
          id: "tilted",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "The tray slips. Now m∠PAC = 66° and m∠PCA = 77°. Is the tray still parallel to the floor? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; ∠PAC and ∠PCA are alternate interior angles." },
            { letter: "B", text: "Yes; any segment joining the two legs is parallel to the floor." },
            { letter: "C", text: "No; ∠PAC and ∠PCA should be congruent." },
            { letter: "D", text: "No; ∠PAC and ∠PBD are corresponding angles that are not congruent." }
          ],
          correct: "D"
        },
        {
          id: "ssi-right",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Along the right leg, which two angles are same-side interior angles?",
          choices: [
            { letter: "A", text: "∠PCA and ∠CDB" },
            { letter: "B", text: "∠PCA and ∠ACD" },
            { letter: "C", text: "∠ACD and ∠CDB" },
            { letter: "D", text: "∠PAC and ∠PCA" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt2-ring-glass-wall-proof",
      family: "GEO",
      mode: "ring",
      title: "The Architect's Glass Wall",
      kind: "Lines · G.RLT.2",
      blurb: "A two-column proof that the edges of a glass wall are parallel.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"Two horizontal floor lines, l on top and m below, marked parallel, and two slanted edges j and k that rise to the right and cross both floor lines. Angle 1 is above l and left of j. Angle 2 is below m and right of j. Angle 3 is below m and left of k\">" +
        "<polygon class=\"sh2\" points=\"134.1,34 238.1,34 196,104 92,104\"/><line class=\"ln\" x1=\"20\" y1=\"34\" x2=\"300\" y2=\"34\"/>" +
        "<line class=\"ln\" x1=\"20\" y1=\"104\" x2=\"300\" y2=\"104\"/><line class=\"ln\" x1=\"78.6\" y1=\"126.3\" x2=\"147.5\" y2=\"11.7\"/>" +
        "<line class=\"ln\" x1=\"182.6\" y1=\"126.3\" x2=\"251.5\" y2=\"11.7\"/><path class=\"thin\" d=\"M33 30 L40 34 L33 38\"/>" +
        "<path class=\"thin\" d=\"M33 100 L40 104 L33 108\"/><text x=\"306\" y=\"39\" text-anchor=\"middle\">ℓ</text><text x=\"306\" y=\"109\" text-anchor=\"middle\">m</text>" +
        "<text x=\"155.5\" y=\"17.7\" text-anchor=\"middle\">j</text><text x=\"259.5\" y=\"17.7\" text-anchor=\"middle\">k</text>" +
        "<circle class=\"dt\" cx=\"134.1\" cy=\"34\" r=\"3\"/><circle class=\"dt\" cx=\"92\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"238.1\" cy=\"34\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"196\" cy=\"104\" r=\"3\"/><text x=\"126.2\" y=\"25.1\" text-anchor=\"middle\">1</text>" +
        "<text x=\"99.9\" y=\"122.9\" text-anchor=\"middle\">2</text><text x=\"176.9\" y=\"119.8\" text-anchor=\"middle\">3</text>" +
        "<text class=\"sm\" x=\"250\" y=\"72\" text-anchor=\"middle\">glass</text></svg></figure>" +
        "<p class=\"geo-given\">An architect sketches a slanted glass wall. Floor lines <strong>ℓ</strong> and <strong>m</strong> are parallel, and the edges of the glass are <strong>j</strong> and <strong>k</strong>. Given: ℓ ∥ m, and ∠1 and ∠3 are supplementary. Prove: j ∥ k.</p>" +
        "<table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. ℓ ∥ m</td><td>Given</td></tr><tr><td>2. ∠1 ≅ ∠2</td><td>____ (a)</td>" +
        "</tr><tr><td>3. ∠1 and ∠3 are supplementary.</td><td>Given</td></tr><tr><td>4. m∠1 + m∠3 = 180°</td><td>Definition of supplementary angles</td></tr>" +
        "<tr><td>5. m∠2 + m∠3 = 180°</td><td>____ (b)</td></tr><tr><td>6. j ∥ k</td><td>____ (c)</td></tr></table>",
      claims: [
        {
          id: "reason-a",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the glass-wall proof, which reason fills blank (a)?",
          choices: [
            { letter: "A", text: "Alternate Exterior Angles Theorem" },
            { letter: "B", text: "Corresponding Angles Postulate" },
            { letter: "C", text: "Vertical Angles Theorem" },
            { letter: "D", text: "Converse of the Alternate Exterior Angles Theorem" }
          ],
          correct: "A"
        },
        {
          id: "reason-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the glass-wall proof, which reason fills blank (b)?",
          choices: [
            { letter: "A", text: "Reflexive Property" },
            { letter: "B", text: "Angle Addition Postulate" },
            { letter: "C", text: "Substitution Property" },
            { letter: "D", text: "Linear Pair Postulate" }
          ],
          correct: "C"
        },
        {
          id: "reason-c",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the glass-wall proof, which reason fills blank (c)?",
          choices: [
            { letter: "A", text: "Same-Side Interior Angles Theorem" },
            { letter: "B", text: "Converse of the Alternate Interior Angles Theorem" },
            { letter: "C", text: "Converse of the Corresponding Angles Postulate" },
            { letter: "D", text: "Converse of the Same-Side Interior Angles Theorem" }
          ],
          correct: "D"
        },
        {
          id: "step-5-pair",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "In step 5, what kind of angle pair are ∠2 and ∠3, and along which transversal?",
          choices: [
            { letter: "A", text: "Same-side interior angles, along j" },
            { letter: "B", text: "Same-side interior angles, along m" },
            { letter: "C", text: "Alternate interior angles, along m" },
            { letter: "D", text: "Corresponding angles, along k" }
          ],
          correct: "B"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Suppose ℓ ∥ m, m∠1 = (12x + 25)⁠° and m∠3 = (8x − 5)⁠°. For what value of x is j ∥ k?",
          choices: [
            { letter: "A", text: "10" },
            { letter: "B", text: "−7.5" },
            { letter: "C", text: "3.5" },
            { letter: "D", text: "8" }
          ],
          correct: "D"
        },
        {
          id: "other-sketch",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In another sketch, ℓ ∥ m, m∠1 = 121° and m∠3 = 55°. Which conclusion is correct? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "j ∥ k, since ∠1 and ∠3 are alternate exterior angles." },
            { letter: "B", text: "j and k are not parallel, since m∠2 + m∠3 = 176°." },
            { letter: "C", text: "j ∥ k, since ∠2 ≅ ∠3." },
            { letter: "D", text: "j and k are not parallel, since ∠1 and ∠3 are not congruent." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt2-worms-corn-rows",
      family: "GEO",
      mode: "worms",
      title: "Rows in the Cornfield",
      kind: "Lines · G.RLT.2",
      blurb: "Two parallel crop rows, one irrigation pipe and eight numbered angles.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Two parallel crop rows a (left) and b (right) rising to the right, with more rows dashed beside them, crossed by a horizontal irrigation pipe p. At row a, angle 1 is above the pipe and left of a, angle 2 above and right of a, angle 3 below and right of a, and angle 4 below and left of a. Angles 5 to 8 sit the same way at row b\">" +
        "<line class=\"thin dash\" x1=\"-66.8\" y1=\"150\" x2=\"81.2\" y2=\"12\"/><line class=\"thin dash\" x1=\"221.2\" y1=\"150\" x2=\"369.2\" y2=\"12\"/>" +
        "<line class=\"ln\" x1=\"29.2\" y1=\"150\" x2=\"177.2\" y2=\"12\"/><text x=\"186.2\" y=\"16\" text-anchor=\"middle\">a</text>" +
        "<path class=\"thin\" d=\"M133.1 47.7 L141 45.8 L138.6 53.5\"/><line class=\"ln\" x1=\"125.2\" y1=\"150\" x2=\"273.2\" y2=\"12\"/>" +
        "<text x=\"282.2\" y=\"16\" text-anchor=\"middle\">b</text><path class=\"thin\" d=\"M229.1 47.7 L237 45.8 L234.6 53.5\"/>" +
        "<line class=\"ac\" x1=\"16\" y1=\"84\" x2=\"304\" y2=\"84\"/><text x=\"300\" y=\"76\" text-anchor=\"middle\">p</text><circle class=\"dt\" cx=\"100\" cy=\"84\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"196\" cy=\"84\" r=\"3\"/><text class=\"sm\" x=\"256\" y=\"148\" text-anchor=\"middle\">irrigation pipe</text>" +
        "<text x=\"94.5\" y=\"75\" text-anchor=\"middle\">1</text><text x=\"123.3\" y=\"79.8\" text-anchor=\"middle\">2</text>" +
        "<text x=\"105.5\" y=\"103\" text-anchor=\"middle\">3</text><text x=\"76.7\" y=\"98.2\" text-anchor=\"middle\">4</text>" +
        "<text x=\"190.5\" y=\"75\" text-anchor=\"middle\">5</text><text x=\"219.3\" y=\"79.8\" text-anchor=\"middle\">6</text>" +
        "<text x=\"201.5\" y=\"103\" text-anchor=\"middle\">7</text><text x=\"172.7\" y=\"98.2\" text-anchor=\"middle\">8</text></svg></figure>" +
        "<p class=\"geo-given\">In a cornfield, crop rows <strong>a</strong> and <strong>b</strong> are parallel. A straight irrigation pipe, <strong>p</strong>, crosses both rows. m∠6 = 43°.</p>",
      claims: [
        {
          id: "ssi-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle is a same-side interior angle with ∠2?",
          choices: [
            { letter: "A", text: "∠8" },
            { letter: "B", text: "∠6" },
            { letter: "C", text: "∠5" },
            { letter: "D", text: "∠3" }
          ],
          correct: "C"
        },
        {
          id: "angle-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠2, at row a?",
          choices: [
            { letter: "A", text: "43°" },
            { letter: "B", text: "137°" },
            { letter: "C", text: "47°" },
            { letter: "D", text: "86°" }
          ],
          correct: "A"
        },
        {
          id: "angle-7",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠7, at row b?",
          choices: [
            { letter: "A", text: "43°" },
            { letter: "B", text: "137°" },
            { letter: "C", text: "47°" },
            { letter: "D", text: "223°" }
          ],
          correct: "B"
        },
        {
          id: "alt-ext",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which two angles are alternate exterior angles?",
          choices: [
            { letter: "A", text: "∠1 and ∠5" },
            { letter: "B", text: "∠2 and ∠8" },
            { letter: "C", text: "∠1 and ∠3" },
            { letter: "D", text: "∠1 and ∠7" }
          ],
          correct: "D"
        },
        {
          id: "not-43",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Which angle does NOT measure 43°?",
          choices: [
            { letter: "A", text: "∠4" },
            { letter: "B", text: "∠5" },
            { letter: "C", text: "∠8" },
            { letter: "D", text: "∠2" }
          ],
          correct: "B"
        },
        {
          id: "other-field",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In another field, a pipe crosses two rows. The angles in the places of ∠4 and ∠6 both measure 49°. Which reason proves that those rows are parallel?",
          choices: [
            { letter: "A", text: "Converse of the Corresponding Angles Postulate" },
            { letter: "B", text: "Alternate Exterior Angles Theorem" },
            { letter: "C", text: "Converse of the Alternate Exterior Angles Theorem" },
            { letter: "D", text: "Vertical Angles Theorem" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt2-worms-ski-tracks",
      family: "GEO",
      mode: "worms",
      title: "Ski Tracks and a Deer Trail",
      kind: "Lines · G.RLT.2",
      blurb: "Two parallel ski tracks and the straight path of a deer.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Two parallel ski tracks: line AB on top and line CD below, both sloping gently down to the right. A deer trail, line EF, crosses AB at P and CD at Q; E is above AB to the upper left and F is below CD to the lower right. The angle APE is marked 38 degrees\">" +
        "<polygon class=\"sh2\" points=\"30,29.3 292,85 292,132.8 30,77.1\"/><line class=\"ln\" x1=\"30\" y1=\"29.3\" x2=\"292\" y2=\"85\"/>" +
        "<line class=\"ln\" x1=\"30\" y1=\"77.1\" x2=\"292\" y2=\"132.8\"/><line class=\"ac\" x1=\"238.3\" y1=\"145.3\" x2=\"138\" y2=\"25.8\"/>" +
        "<path class=\"thin\" d=\"M249 71.8 L255 77.1 L247.3 79.6\"/><path class=\"thin\" d=\"M256.7 121.2 L262.8 126.6 L255.1 129.1\"/>" +
        "<path class=\"thin\" d=\"M149.6 39.6 A24 24 0 0 0 141.5 53\"/><text x=\"132.4\" y=\"43.4\" text-anchor=\"middle\">38°</text>" +
        "<circle class=\"dt\" cx=\"30\" cy=\"29.3\" r=\"3\"/><circle class=\"dt\" cx=\"292\" cy=\"85\" r=\"3\"/><circle class=\"dt\" cx=\"30\" cy=\"77.1\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"292\" cy=\"132.8\" r=\"3\"/><circle class=\"dt\" cx=\"138\" cy=\"25.8\" r=\"3\"/><circle class=\"dt\" cx=\"238.3\" cy=\"145.3\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"165\" cy=\"58\" r=\"3\"/><circle class=\"dt\" cx=\"213.9\" cy=\"116.2\" r=\"3\"/><text x=\"30\" y=\"20.3\" text-anchor=\"middle\">A</text>" +
        "<text x=\"292\" y=\"76\" text-anchor=\"middle\">B</text><text x=\"30\" y=\"68.1\" text-anchor=\"middle\">C</text>" +
        "<text x=\"292\" y=\"150.8\" text-anchor=\"middle\">D</text><text x=\"127\" y=\"27.8\" text-anchor=\"middle\">E</text>" +
        "<text x=\"249.3\" y=\"149.3\" text-anchor=\"middle\">F</text><text x=\"178\" y=\"62\" text-anchor=\"middle\">P</text>" +
        "<text x=\"200.9\" y=\"128.2\" text-anchor=\"middle\">Q</text><text class=\"sm\" x=\"92\" y=\"150\" text-anchor=\"middle\">deer trail</text></svg></figure>" +
        "<p class=\"geo-given\">Two ski tracks in the snow, <strong>AB</strong> and <strong>CD</strong>, are parallel. A straight deer trail, <strong>EF</strong>, crosses AB at <strong>P</strong> and CD at <strong>Q</strong>. m∠APE = 38°.</p>",
      claims: [
        {
          id: "corr-bpe",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle corresponds to ∠BPE?",
          choices: [
            { letter: "A", text: "∠DQP" },
            { letter: "B", text: "∠CQF" },
            { letter: "C", text: "∠APQ" },
            { letter: "D", text: "∠CQP" }
          ],
          correct: "A"
        },
        {
          id: "angle-dqf",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠DQF?",
          choices: [
            { letter: "A", text: "142°" },
            { letter: "B", text: "52°" },
            { letter: "C", text: "322°" },
            { letter: "D", text: "38°" }
          ],
          correct: "D"
        },
        {
          id: "pair-bpq-dqp",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "What kind of angle pair are ∠BPQ and ∠DQP?",
          choices: [
            { letter: "A", text: "Alternate interior angles" },
            { letter: "B", text: "Same-side interior angles" },
            { letter: "C", text: "Corresponding angles" },
            { letter: "D", text: "Alternate exterior angles" }
          ],
          correct: "B"
        },
        {
          id: "angle-apq",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠APQ?",
          choices: [
            { letter: "A", text: "38°" },
            { letter: "B", text: "52°" },
            { letter: "C", text: "142°" },
            { letter: "D", text: "218°" }
          ],
          correct: "C"
        },
        {
          id: "linear-cqf",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle forms a linear pair with ∠CQF?",
          choices: [
            { letter: "A", text: "∠DQP" },
            { letter: "B", text: "∠APQ" },
            { letter: "C", text: "∠BPE" },
            { letter: "D", text: "∠CQP" }
          ],
          correct: "D"
        },
        {
          id: "skier-claim",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "A skier says, \"The tracks are parallel because ∠APE ≅ ∠BPQ.\" Which statement about her reason is true? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Valid; ∠APE and ∠BPQ are corresponding angles." },
            { letter: "B", text: "Not valid; vertical angles are always congruent." },
            { letter: "C", text: "Valid; ∠APE and ∠BPQ are alternate exterior angles." },
            { letter: "D", text: "Not valid; ∠APE and ∠BPQ are not congruent." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt2-worms-orchard-path",
      family: "GEO",
      mode: "worms",
      title: "The Orchard Path",
      kind: "Lines · G.RLT.2",
      blurb: "Three parallel tree rows, one tractor path, and angles in x and y.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Three parallel rows of trees, a on top, b in the middle and c at the bottom, sloping gently down to the right, crossed by a straight path t that is nearly vertical. Angle 1 is below row a and right of t. Angle 2 is below row b and right of t. Angle 3 is above row c and right of t. Angle 4 is below row c and left of t\">" +
        "<line class=\"ln\" x1=\"24\" y1=\"11.8\" x2=\"296\" y2=\"59.7\"/><text x=\"308\" y=\"64.7\" text-anchor=\"middle\">a</text>" +
        "<path class=\"thin\" d=\"M255.8 48.6 L262 53.7 L254.4 56.5\"/><circle class=\"sh\" cx=\"44\" cy=\"6.3\" r=\"6\"/><circle class=\"sh\" cx=\"84\" cy=\"13.4\" r=\"6\"/>" +
        "<circle class=\"sh\" cx=\"124\" cy=\"20.4\" r=\"6\"/><circle class=\"sh\" cx=\"204\" cy=\"34.5\" r=\"6\"/><circle class=\"sh\" cx=\"244\" cy=\"41.6\" r=\"6\"/>" +
        "<circle class=\"sh\" cx=\"284\" cy=\"48.6\" r=\"6\"/><line class=\"ln\" x1=\"24\" y1=\"59.8\" x2=\"296\" y2=\"107.7\"/>" +
        "<text x=\"308\" y=\"112.7\" text-anchor=\"middle\">b</text><path class=\"thin\" d=\"M255.8 96.6 L262 101.7 L254.4 104.5\"/>" +
        "<circle class=\"sh\" cx=\"44\" cy=\"54.3\" r=\"6\"/><circle class=\"sh\" cx=\"84\" cy=\"61.4\" r=\"6\"/><circle class=\"sh\" cx=\"124\" cy=\"68.4\" r=\"6\"/>" +
        "<circle class=\"sh\" cx=\"204\" cy=\"82.5\" r=\"6\"/><circle class=\"sh\" cx=\"244\" cy=\"89.6\" r=\"6\"/><circle class=\"sh\" cx=\"284\" cy=\"96.6\" r=\"6\"/>" +
        "<line class=\"ln\" x1=\"24\" y1=\"107.8\" x2=\"296\" y2=\"155.7\"/><text x=\"308\" y=\"160.7\" text-anchor=\"middle\">c</text>" +
        "<path class=\"thin\" d=\"M255.8 144.6 L262 149.7 L254.4 152.5\"/><circle class=\"sh\" cx=\"44\" cy=\"102.3\" r=\"6\"/>" +
        "<circle class=\"sh\" cx=\"84\" cy=\"109.4\" r=\"6\"/><circle class=\"sh\" cx=\"124\" cy=\"116.4\" r=\"6\"/><circle class=\"sh\" cx=\"204\" cy=\"130.5\" r=\"6\"/>" +
        "<circle class=\"sh\" cx=\"244\" cy=\"137.6\" r=\"6\"/><circle class=\"sh\" cx=\"284\" cy=\"144.6\" r=\"6\"/>" +
        "<line class=\"ac\" x1=\"171.9\" y1=\"155.6\" x2=\"164.5\" y2=\"14.8\"/><text x=\"154.5\" y=\"22.8\" text-anchor=\"middle\">t</text>" +
        "<circle class=\"dt\" cx=\"165.6\" cy=\"36.8\" r=\"3\"/><circle class=\"dt\" cx=\"168.2\" cy=\"85.2\" r=\"3\"/><circle class=\"dt\" cx=\"170.7\" cy=\"133.7\" r=\"3\"/>" +
        "<text x=\"177.6\" y=\"55.2\" text-anchor=\"middle\">1</text><text x=\"180.1\" y=\"103.7\" text-anchor=\"middle\">2</text>" +
        "<text x=\"181.9\" y=\"128.7\" text-anchor=\"middle\">3</text><text x=\"159.5\" y=\"148.6\" text-anchor=\"middle\">4</text></svg></figure>" +
        "<p class=\"geo-given\">In an orchard, tree rows <strong>a</strong>, <strong>b</strong> and <strong>c</strong> are parallel. A straight tractor path, <strong>t</strong>, crosses all three. m∠1 = (3x − 4)⁠°, m∠2 = (2x + 23)⁠° and m∠3 = (2y + 33)°.</p>",
      claims: [
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is x for the tractor path?",
          choices: [
            { letter: "A", text: "19" },
            { letter: "B", text: "27" },
            { letter: "C", text: "32.2" },
            { letter: "D", text: "77" }
          ],
          correct: "B"
        },
        {
          id: "solve-y",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is the value of y?",
          choices: [
            { letter: "A", text: "35" },
            { letter: "B", text: "22" },
            { letter: "C", text: "68" },
            { letter: "D", text: "51.5" }
          ],
          correct: "A"
        },
        {
          id: "angle-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠4, at row c?",
          choices: [
            { letter: "A", text: "77°" },
            { letter: "B", text: "13°" },
            { letter: "C", text: "283°" },
            { letter: "D", text: "103°" }
          ],
          correct: "D"
        },
        {
          id: "pair-1-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Using rows a and c, what kind of angle pair are ∠1 and ∠3?",
          choices: [
            { letter: "A", text: "Corresponding angles" },
            { letter: "B", text: "Alternate interior angles" },
            { letter: "C", text: "Same-side interior angles" },
            { letter: "D", text: "Alternate exterior angles" }
          ],
          correct: "C"
        },
        {
          id: "not-parallel",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "On a different path, which measures of ∠2 and ∠3 would show that rows b and c are NOT parallel?",
          choices: [
            { letter: "A", text: "m∠2 = 77° and m∠3 = 103°" },
            { letter: "B", text: "m∠2 = 77° and m∠3 = 105°" },
            { letter: "C", text: "m∠2 = 75° and m∠3 = 105°" },
            { letter: "D", text: "m∠2 = 81° and m∠3 = 99°" }
          ],
          correct: "B"
        },
        {
          id: "not-true",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which statement about the orchard angles is NOT true?",
          choices: [
            { letter: "A", text: "∠1 and ∠2 are corresponding angles." },
            { letter: "B", text: "∠2 and ∠3 are same-side interior angles." },
            { letter: "C", text: "∠3 and ∠4 are vertical angles." },
            { letter: "D", text: "∠1 and ∠2 are alternate interior angles." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt2-worms-rain-hillside",
      family: "GEO",
      mode: "worms",
      title: "Rain on the Hillside",
      kind: "Lines · G.RLT.2",
      blurb: "Parallel rain streaks hit a straight slope; solve for x.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A straight hillside h rising to the right. Two parallel rain streaks, r on the left and s on the right, slant down to the right and end on the hillside, with a few fainter streaks between and beside them. At streak r, angle 1 is above the hillside and left of r, and angle 2 is above the hillside and right of r. At streak s, angle 3 is left of s and angle 4 is right of s, both above the hillside\">" +
        "<polygon class=\"sh2\" points=\"18,150 302,73.9 302,158 18,158\"/><line class=\"ln\" x1=\"18\" y1=\"150\" x2=\"302\" y2=\"73.9\"/>" +
        "<line class=\"thin\" x1=\"4\" y1=\"150\" x2=\"18\" y2=\"150\"/><line class=\"ac\" x1=\"91.8\" y1=\"10\" x2=\"112\" y2=\"124.8\"/>" +
        "<line class=\"ac\" x1=\"198.6\" y1=\"10\" x2=\"214\" y2=\"97.5\"/><line class=\"thin dash\" x1=\"38.7\" y1=\"18\" x2=\"56.9\" y2=\"121\"/>" +
        "<line class=\"thin dash\" x1=\"143.4\" y1=\"18\" x2=\"156.9\" y2=\"94.2\"/><line class=\"thin dash\" x1=\"250.3\" y1=\"18\" x2=\"258.9\" y2=\"66.9\"/>" +
        "<path class=\"thin\" d=\"M98.7 26.6 L96 34.2 L90.9 28\"/><path class=\"thin\" d=\"M200.7 -0.7 L198 6.9 L192.9 0.7\"/>" +
        "<text x=\"101.8\" y=\"16\" text-anchor=\"middle\">r</text><text x=\"208.6\" y=\"16\" text-anchor=\"middle\">s</text>" +
        "<text x=\"288\" y=\"95.7\" text-anchor=\"middle\">h</text><circle class=\"dt\" cx=\"112\" cy=\"124.8\" r=\"3\"/><circle class=\"dt\" cx=\"214\" cy=\"97.5\" r=\"3\"/>" +
        "<text x=\"98.5\" y=\"121.2\" text-anchor=\"middle\">1</text><text x=\"120.6\" y=\"116.3\" text-anchor=\"middle\">2</text>" +
        "<text x=\"200.5\" y=\"93.9\" text-anchor=\"middle\">3</text><text x=\"222.6\" y=\"89\" text-anchor=\"middle\">4</text>" +
        "<text class=\"sm\" x=\"150\" y=\"152\" text-anchor=\"middle\">hillside</text></svg></figure>" +
        "<p class=\"geo-given\">Wind makes the rain fall in slanted, parallel streaks. Streaks <strong>r</strong> and <strong>s</strong> are parallel, and they hit the straight hillside <strong>h</strong>. m∠2 = (2x + 29)⁠° and m∠3 = (3x + 11)⁠°.</p>",
      claims: [
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Find the value of x for the rain streaks.",
          choices: [
            { letter: "A", text: "44" },
            { letter: "B", text: "36" },
            { letter: "C", text: "28" },
            { letter: "D", text: "18" }
          ],
          correct: "C"
        },
        {
          id: "angle-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠3, where streak s meets the hill?",
          choices: [
            { letter: "A", text: "95°" },
            { letter: "B", text: "85°" },
            { letter: "C", text: "84°" },
            { letter: "D", text: "65°" }
          ],
          correct: "A"
        },
        {
          id: "pair-2-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "∠2 and ∠3 are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Alternate interior angles" },
            { letter: "B", text: "Corresponding angles" },
            { letter: "C", text: "A linear pair" },
            { letter: "D", text: "Same-side interior angles" }
          ],
          correct: "D"
        },
        {
          id: "angle-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Find m∠4 on the hillside.",
          choices: [
            { letter: "A", text: "95°" },
            { letter: "B", text: "85°" },
            { letter: "C", text: "5°" },
            { letter: "D", text: "170°" }
          ],
          correct: "B"
        },
        {
          id: "prove-parallel",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Suppose no one knew that the streaks were parallel. Which fact alone would prove that r ∥ s?",
          choices: [
            { letter: "A", text: "∠2 and ∠3 are supplementary." },
            { letter: "B", text: "∠2 ≅ ∠3." },
            { letter: "C", text: "∠1 and ∠2 are supplementary." },
            { letter: "D", text: "∠2 and ∠4 are supplementary." }
          ],
          correct: "A"
        },
        {
          id: "not-true",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which statement about the rain angles is NOT true?",
          choices: [
            { letter: "A", text: "∠1 and ∠3 are corresponding angles." },
            { letter: "B", text: "∠2 and ∠4 are corresponding angles." },
            { letter: "C", text: "∠1 and ∠4 are alternate exterior angles." },
            { letter: "D", text: "∠1 and ∠2 form a linear pair." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt2-worms-river-trails",
      family: "GEO",
      mode: "worms",
      title: "Two Trails to the River",
      kind: "Lines · G.RLT.2",
      blurb: "Parallel river banks and two trails: are the trails parallel too?",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A river between two parallel horizontal banks, n on the north (top) and s on the south (bottom). Two straight trails, t on the left and u on the right, both rise to the right and cross both banks. Angle 1 is below n and left of t. Angle 2 is below n and left of u. Angle 3 is above s and left of t. Angle 5 is above s and right of t. Angle 4 is below s and left of u\">" +
        "<polygon class=\"sh2\" points=\"14,46 306,46 306,112 14,112\"/><line class=\"ln\" x1=\"14\" y1=\"46\" x2=\"306\" y2=\"46\"/>" +
        "<line class=\"ln\" x1=\"14\" y1=\"112\" x2=\"306\" y2=\"112\"/><line class=\"ln\" x1=\"47\" y1=\"134.4\" x2=\"206.2\" y2=\"27\"/>" +
        "<line class=\"ln\" x1=\"142.5\" y1=\"136.1\" x2=\"289.2\" y2=\"25.5\"/><path class=\"thin\" d=\"M33 42 L40 46 L33 50\"/>" +
        "<path class=\"thin\" d=\"M33 108 L40 112 L33 116\"/><text x=\"24\" y=\"38\" text-anchor=\"middle\">n</text><text x=\"24\" y=\"130\" text-anchor=\"middle\">s</text>" +
        "<text x=\"196.2\" y=\"29\" text-anchor=\"middle\">t</text><text x=\"279.2\" y=\"27.5\" text-anchor=\"middle\">u</text><circle class=\"dt\" cx=\"178\" cy=\"46\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"80.2\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"262\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"174.4\" cy=\"112\" r=\"3\"/>" +
        "<text class=\"sm\" x=\"100\" y=\"84\" text-anchor=\"middle\">river</text><text x=\"151.2\" y=\"59.2\" text-anchor=\"middle\">1</text>" +
        "<text x=\"235.4\" y=\"59.9\" text-anchor=\"middle\">2</text><text x=\"75.8\" y=\"102.7\" text-anchor=\"middle\">3</text>" +
        "<text x=\"147.9\" y=\"125.9\" text-anchor=\"middle\">4</text><text x=\"106.9\" y=\"108.8\" text-anchor=\"middle\">5</text></svg></figure>" +
        "<p class=\"geo-given\">The banks of a river, <strong>n</strong> and <strong>s</strong>, are parallel. Two straight trails, <strong>t</strong> and <strong>u</strong>, cross the river at fords. m∠1 = 34°, m∠2 = 37° and m∠4 = (2x + 17)⁠°.</p>",
      claims: [
        {
          id: "pair-1-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "With bank n as the transversal of trails t and u, what kind of angle pair are ∠1 and ∠2?",
          choices: [
            { letter: "A", text: "Corresponding angles" },
            { letter: "B", text: "Alternate interior angles" },
            { letter: "C", text: "Same-side interior angles" },
            { letter: "D", text: "Vertical angles" }
          ],
          correct: "A"
        },
        {
          id: "t-u",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Are trails t and u parallel? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; both trails cross the parallel banks." },
            { letter: "B", text: "Yes; ∠1 and ∠2 are vertical angles." },
            { letter: "C", text: "No; corresponding angles ∠1 and ∠2 are not congruent." },
            { letter: "D", text: "No; ∠1 and ∠2 should add to 180°." }
          ],
          correct: "C"
        },
        {
          id: "angle-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠3, at the south bank?",
          choices: [
            { letter: "A", text: "34°" },
            { letter: "B", text: "146°" },
            { letter: "C", text: "37°" },
            { letter: "D", text: "124°" }
          ],
          correct: "B"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Use ∠4 to find the value of x.",
          choices: [
            { letter: "A", text: "8.5" },
            { letter: "B", text: "63" },
            { letter: "C", text: "27" },
            { letter: "D", text: "10" }
          ],
          correct: "D"
        },
        {
          id: "new-trail",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "A ranger plans a new trail that will be parallel to trail t and cross bank n east of trail u. What angle must it make below n and to the left of the new trail?",
          choices: [
            { letter: "A", text: "37°" },
            { letter: "B", text: "146°" },
            { letter: "C", text: "34°" },
            { letter: "D", text: "56°" }
          ],
          correct: "C"
        },
        {
          id: "alt-int-1",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle is congruent to ∠1 because they are alternate interior angles along trail t?",
          choices: [
            { letter: "A", text: "∠5" },
            { letter: "B", text: "∠3" },
            { letter: "C", text: "∠2" },
            { letter: "D", text: "∠4" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt2-worms-hedgerow-proof",
      family: "GEO",
      mode: "worms",
      title: "The Hedgerows That Only Look Parallel",
      kind: "Lines · G.RLT.2",
      blurb: "An indirect proof that two hedgerows are not parallel.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Two long hedgerows, d on top and e below, that look almost parallel, crossed by a straight farm lane r that is nearly vertical. Angle 1 is below d and right of r. Angle 2 is above e and right of r\">" +
        "<line class=\"ln\" x1=\"16\" y1=\"40\" x2=\"304\" y2=\"40\"/><line class=\"ln\" x1=\"16\" y1=\"108.5\" x2=\"304\" y2=\"118.5\"/>" +
        "<line class=\"ac\" x1=\"162.7\" y1=\"143.2\" x2=\"146.3\" y2=\"10.2\"/><circle class=\"sh\" cx=\"30\" cy=\"33\" r=\"5\"/><circle class=\"sh\" cx=\"30\" cy=\"115.9\" r=\"5\"/>" +
        "<circle class=\"sh\" cx=\"52\" cy=\"33\" r=\"5\"/><circle class=\"sh\" cx=\"52\" cy=\"116.7\" r=\"5\"/><circle class=\"sh\" cx=\"74\" cy=\"33\" r=\"5\"/>" +
        "<circle class=\"sh\" cx=\"74\" cy=\"117.5\" r=\"5\"/><circle class=\"sh\" cx=\"96\" cy=\"33\" r=\"5\"/><circle class=\"sh\" cx=\"96\" cy=\"118.2\" r=\"5\"/>" +
        "<circle class=\"sh\" cx=\"118\" cy=\"33\" r=\"5\"/><circle class=\"sh\" cx=\"118\" cy=\"119\" r=\"5\"/><circle class=\"sh\" cx=\"140\" cy=\"33\" r=\"5\"/>" +
        "<circle class=\"sh\" cx=\"140\" cy=\"119.8\" r=\"5\"/><circle class=\"sh\" cx=\"162\" cy=\"33\" r=\"5\"/><circle class=\"sh\" cx=\"162\" cy=\"120.6\" r=\"5\"/>" +
        "<circle class=\"sh\" cx=\"184\" cy=\"33\" r=\"5\"/><circle class=\"sh\" cx=\"184\" cy=\"121.3\" r=\"5\"/><circle class=\"sh\" cx=\"206\" cy=\"33\" r=\"5\"/>" +
        "<circle class=\"sh\" cx=\"206\" cy=\"122.1\" r=\"5\"/><circle class=\"sh\" cx=\"228\" cy=\"33\" r=\"5\"/><circle class=\"sh\" cx=\"228\" cy=\"122.9\" r=\"5\"/>" +
        "<circle class=\"sh\" cx=\"250\" cy=\"33\" r=\"5\"/><circle class=\"sh\" cx=\"250\" cy=\"123.6\" r=\"5\"/><circle class=\"sh\" cx=\"272\" cy=\"33\" r=\"5\"/>" +
        "<circle class=\"sh\" cx=\"272\" cy=\"124.4\" r=\"5\"/><text x=\"310\" y=\"45\" text-anchor=\"middle\">d</text><text x=\"310\" y=\"123.5\" text-anchor=\"middle\">e</text>" +
        "<text x=\"156.3\" y=\"20.2\" text-anchor=\"middle\">r</text><circle class=\"dt\" cx=\"150\" cy=\"40\" r=\"3\"/><circle class=\"dt\" cx=\"159\" cy=\"113.4\" r=\"3\"/>" +
        "<text x=\"162.7\" y=\"56.3\" text-anchor=\"middle\">1</text><text x=\"170.5\" y=\"105.9\" text-anchor=\"middle\">2</text>" +
        "<text class=\"sm\" x=\"200\" y=\"80\" text-anchor=\"middle\">farm lane</text></svg></figure>" +
        "<p class=\"geo-given\">Two hedgerows, <strong>d</strong> and <strong>e</strong>, are crossed by a straight farm lane, <strong>r</strong>. A farmer measures m∠1 = 83° and m∠2 = 99°. Her indirect proof that d is not parallel to e has three blanks.</p>" +
        "<p class=\"geo-given\">Assume that <strong>(a)</strong> ____. Then ∠1 and ∠2 are supplementary, by the <strong>(b)</strong> ____. So m∠1 + m∠2 = 180°. But 83° + 99° = 182°, which is a contradiction. So the assumption is false, and <strong>(c)</strong> ____.</p>",
      claims: [
        {
          id: "blank-a",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the hedgerow proof, what belongs in blank (a)?",
          choices: [
            { letter: "A", text: "d is not parallel to e" },
            { letter: "B", text: "d ∥ e" },
            { letter: "C", text: "∠1 ≅ ∠2" },
            { letter: "D", text: "m∠1 + m∠2 = 182°" }
          ],
          correct: "B"
        },
        {
          id: "blank-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the hedgerow proof, which theorem belongs in blank (b)?",
          choices: [
            { letter: "A", text: "Converse of the Same-Side Interior Angles Theorem" },
            { letter: "B", text: "Alternate Interior Angles Theorem" },
            { letter: "C", text: "Linear Pair Postulate" },
            { letter: "D", text: "Same-Side Interior Angles Theorem" }
          ],
          correct: "D"
        },
        {
          id: "blank-c",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the hedgerow proof, what belongs in blank (c)?",
          choices: [
            { letter: "A", text: "d is not parallel to e" },
            { letter: "B", text: "d ∥ e" },
            { letter: "C", text: "m∠1 + m∠2 = 180°" },
            { letter: "D", text: "the measures 83° and 99° are wrong" }
          ],
          correct: "A"
        },
        {
          id: "pair-1-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "∠1 and ∠2 are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Alternate interior angles" },
            { letter: "B", text: "Corresponding angles" },
            { letter: "C", text: "Same-side interior angles" },
            { letter: "D", text: "Alternate exterior angles" }
          ],
          correct: "C"
        },
        {
          id: "replant",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "The farmer replants hedgerow e so that it is parallel to d. The lane and m∠1 = 83° do not change. What must the angle in the place of ∠2 measure?",
          choices: [
            { letter: "A", text: "83°" },
            { letter: "B", text: "97°" },
            { letter: "C", text: "99°" },
            { letter: "D", text: "7°" }
          ],
          correct: "B"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "On another farm, a lane crosses two hedgerows. m∠1 = (7x + 15)⁠° and m∠2 = (5x + 33)⁠°, in the same places as in the figure. For what value of x are those hedgerows parallel?",
          choices: [
            { letter: "A", text: "19" },
            { letter: "B", text: "15" },
            { letter: "C", text: "9" },
            { letter: "D", text: "11" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt2-worms-hill-fence",
      family: "GEO",
      mode: "worms",
      title: "The Fence on the Hill",
      kind: "Lines · G.RLT.2",
      blurb: "Vertical posts, rails parallel to a 27° slope, and the angles between them.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A hillside rising to the right at 27 degrees above a dashed level line. Two vertical fence posts, p on the left and q on the right, stand on the hill. Two rails, a above and b below, run parallel to the hillside and cross both posts. Angle 1 is above rail a and right of post p. Angle 2 is below rail b and right of post q. Angle 3 is below rail a and left of post q. Angle 4 is above rail b and left of post q\">" +
        "<polygon class=\"sh2\" points=\"20,160 300,17.3 300,166 20,166\"/><line class=\"ln\" x1=\"20\" y1=\"160\" x2=\"300\" y2=\"17.3\"/>" +
        "<line class=\"thin dash\" x1=\"20\" y1=\"160\" x2=\"300\" y2=\"160\"/><line class=\"ln\" x1=\"112\" y1=\"113.1\" x2=\"112\" y2=\"41.1\"/>" +
        "<line class=\"ln\" x1=\"180\" y1=\"78.5\" x2=\"180\" y2=\"6.5\"/><line class=\"ln\" x1=\"85.3\" y1=\"68.7\" x2=\"203.2\" y2=\"8.7\"/>" +
        "<line class=\"ln\" x1=\"85.3\" y1=\"110.7\" x2=\"203.2\" y2=\"50.7\"/><path class=\"thin\" d=\"M193.3 9.2 L201.4 9.6 L197 16.3\"/>" +
        "<path class=\"thin\" d=\"M193.3 51.2 L201.4 51.6 L197 58.3\"/><path class=\"thin\" d=\"M188 53.9 L196 54.3 L191.6 61\"/>" +
        "<path class=\"thin\" d=\"M87.9 62.9 L96 63.3 L91.5 70\"/><path class=\"thin\" d=\"M87.9 104.9 L96 105.3 L91.5 112\"/>" +
        "<path class=\"thin\" d=\"M82.6 107.6 L90.6 108 L86.2 114.8\"/><path class=\"thin\" d=\"M50 160 A30 30 0 0 0 46.7 146.4\"/>" +
        "<text x=\"62.8\" y=\"154.7\" text-anchor=\"middle\">27°</text><text x=\"102\" y=\"43.1\" text-anchor=\"middle\">p</text>" +
        "<text x=\"170\" y=\"8.5\" text-anchor=\"middle\">q</text><text x=\"211.2\" y=\"12.7\" text-anchor=\"middle\">a</text>" +
        "<text x=\"211.2\" y=\"54.7\" text-anchor=\"middle\">b</text><circle class=\"dt\" cx=\"112\" cy=\"55.1\" r=\"3\"/><circle class=\"dt\" cx=\"112\" cy=\"97.1\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"180\" cy=\"20.5\" r=\"3\"/><circle class=\"dt\" cx=\"180\" cy=\"62.5\" r=\"3\"/>" +
        "<text class=\"sm\" x=\"262\" y=\"156\" text-anchor=\"middle\">level</text><text x=\"123\" y=\"42.2\" text-anchor=\"middle\">1</text>" +
        "<text x=\"192.8\" y=\"75.3\" text-anchor=\"middle\">2</text><text x=\"169\" y=\"43.4\" text-anchor=\"middle\">3</text>" +
        "<text x=\"167.2\" y=\"59.6\" text-anchor=\"middle\">4</text></svg></figure>" +
        "<p class=\"geo-given\">A hillside rises 27° from level. Fence posts <strong>p</strong> and <strong>q</strong> stand vertical, so each is perpendicular to level ground. Rails <strong>a</strong> and <strong>b</strong> are parallel to the hillside.</p>",
      claims: [
        {
          id: "angle-1",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠1, between post p and rail a on the uphill side?",
          choices: [
            { letter: "A", text: "27°" },
            { letter: "B", text: "117°" },
            { letter: "C", text: "63°" },
            { letter: "D", text: "153°" }
          ],
          correct: "C"
        },
        {
          id: "angle-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠2, at post q?",
          choices: [
            { letter: "A", text: "63°" },
            { letter: "B", text: "27°" },
            { letter: "C", text: "153°" },
            { letter: "D", text: "117°" }
          ],
          correct: "D"
        },
        {
          id: "pair-3-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "With post q as the transversal of rails a and b, what kind of angle pair are ∠3 and ∠4?",
          choices: [
            { letter: "A", text: "Same-side interior angles" },
            { letter: "B", text: "Alternate interior angles" },
            { letter: "C", text: "Corresponding angles" },
            { letter: "D", text: "Alternate exterior angles" }
          ],
          correct: "A"
        },
        {
          id: "why-posts",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Why must posts p and q be parallel?",
          choices: [
            { letter: "A", text: "They each make a 27° angle with rail a." },
            { letter: "B", text: "They are both perpendicular to level ground." },
            { letter: "C", text: "∠3 and ∠4 are congruent." },
            { letter: "D", text: "∠1 and ∠2 are vertical angles." }
          ],
          correct: "B"
        },
        {
          id: "steeper",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Higher up, the hill is steeper. There a vertical post and a rail parallel to the hillside make a 58° angle in the place of ∠1. How many degrees does that part of the hill rise from level?",
          choices: [
            { letter: "A", text: "32°" },
            { letter: "B", text: "58°" },
            { letter: "C", text: "122°" },
            { letter: "D", text: "148°" }
          ],
          correct: "A"
        },
        {
          id: "rails-proof",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "A builder measures 63° above rail b and right of post p, and 63° below rail a and left of post p. Which reason proves that rail a ∥ rail b?",
          choices: [
            { letter: "A", text: "Converse of the Corresponding Angles Postulate" },
            { letter: "B", text: "Alternate Interior Angles Theorem" },
            { letter: "C", text: "Converse of the Alternate Interior Angles Theorem" },
            { letter: "D", text: "Converse of the Same-Side Interior Angles Theorem" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
