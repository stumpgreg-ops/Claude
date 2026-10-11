/* SOL Labyrinth — Geometry game (family GEO), lines cut by a transversal: G.RLT.2 (Virginia 2023 Geometry SOL), v5.20.
   Modes: rocks (Rune Rocks: space, science and weather) and sky (Sun Chariot: travel and getting around). Original items only.
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given
   facts, then six questions about it. Every numeric answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-rlt2-rocks-solar-array",
      family: "GEO",
      mode: "rocks",
      title: "Struts on the Solar Array",
      kind: "Lines · G.RLT.2",
      blurb: "Two parallel panel edges, one support strut and eight numbered angles.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Parallel panel edges p and q, rising to the right, crossed by strut s. At edge p, angles 1 and 2 are above p, left and right of s, and angles 3 and 4 are below p, left and right of s; angles 5 to 8 sit the same way at edge q\">" +
        "<polygon class=\"sh2\" points=\"22,91.7 292,19.3 292,85.9 22,158.3\"/><line class=\"ln\" x1=\"22\" y1=\"91.7\" x2=\"292\" y2=\"19.3\"/>" +
        "<line class=\"ln\" x1=\"22\" y1=\"158.3\" x2=\"292\" y2=\"85.9\"/><line class=\"ln\" x1=\"114.6\" y1=\"156.2\" x2=\"189.7\" y2=\"14.9\"/>" +
        "<path class=\"thin\" d=\"M254 25.4 L261.8 27.4 L256 33.1\"/><path class=\"thin\" d=\"M236.8 96.6 L244.6 98.6 L238.9 104.3\"/>" +
        "<text x=\"304\" y=\"24.3\" text-anchor=\"middle\">p</text><text x=\"304\" y=\"90.9\" text-anchor=\"middle\">q</text>" +
        "<text x=\"198.7\" y=\"22.9\" text-anchor=\"middle\">s</text><circle class=\"dt\" cx=\"170\" cy=\"52\" r=\"3\"/><circle class=\"dt\" cx=\"128.7\" cy=\"129.7\" r=\"3\"/>" +
        "<text x=\"160.7\" y=\"45.3\" text-anchor=\"middle\">1</text><text x=\"190.6\" y=\"40.6\" text-anchor=\"middle\">2</text>" +
        "<text x=\"149.4\" y=\"73.4\" text-anchor=\"middle\">3</text><text x=\"179.3\" y=\"68.7\" text-anchor=\"middle\">4</text>" +
        "<text x=\"119.3\" y=\"123\" text-anchor=\"middle\">5</text><text x=\"149.3\" y=\"118.3\" text-anchor=\"middle\">6</text>" +
        "<text x=\"108.1\" y=\"151.1\" text-anchor=\"middle\">7</text><text x=\"138\" y=\"146.4\" text-anchor=\"middle\">8</text>" +
        "<text class=\"sm\" x=\"240\" y=\"70\" text-anchor=\"middle\">solar panel</text></svg></figure>" +
        "<p class=\"geo-given\">On a satellite's solar array, panel edges <strong>p</strong> and <strong>q</strong> are parallel. A straight support strut, <strong>s</strong>, crosses both edges. m∠2 = 47°.</p>",
      claims: [
        {
          id: "vertical-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle is vertical to ∠3?",
          choices: [
            { letter: "A", text: "∠1" },
            { letter: "B", text: "∠2" },
            { letter: "C", text: "∠7" },
            { letter: "D", text: "∠6" }
          ],
          correct: "B"
        },
        {
          id: "angle-8",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠8, at edge q?",
          choices: [
            { letter: "A", text: "47°" },
            { letter: "B", text: "43°" },
            { letter: "C", text: "313°" },
            { letter: "D", text: "133°" }
          ],
          correct: "D"
        },
        {
          id: "pair-4-5",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "∠4 and ∠5 are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Alternate interior angles" },
            { letter: "B", text: "Same-side interior angles" },
            { letter: "C", text: "Corresponding angles" },
            { letter: "D", text: "Alternate exterior angles" }
          ],
          correct: "A"
        },
        {
          id: "alt-ext-2",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle is an alternate exterior angle to ∠2?",
          choices: [
            { letter: "A", text: "∠6" },
            { letter: "B", text: "∠3" },
            { letter: "C", text: "∠7" },
            { letter: "D", text: "∠8" }
          ],
          correct: "C"
        },
        {
          id: "angle-5",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is the measure of ∠5, where the strut meets edge q?",
          choices: [
            { letter: "A", text: "47°" },
            { letter: "B", text: "133°" },
            { letter: "C", text: "43°" },
            { letter: "D", text: "227°" }
          ],
          correct: "B"
        },
        {
          id: "not-133",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Which of these angles does NOT measure 133°?",
          choices: [
            { letter: "A", text: "∠1" },
            { letter: "B", text: "∠4" },
            { letter: "C", text: "∠8" },
            { letter: "D", text: "∠6" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt2-rocks-storm-track",
      family: "GEO",
      mode: "rocks",
      title: "Storm Track on the Weather Map",
      kind: "Lines · G.RLT.2",
      blurb: "Two parallel map lines and the straight path of a storm.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Parallel horizontal map lines AB (top) and CD (bottom). Storm track EF rises to the right and crosses AB at P and CD at Q, with E above AB and F below CD. The angle EPB, above AB and right of the track, is marked 52 degrees\">" +
        "<line class=\"ln\" x1=\"30\" y1=\"58\" x2=\"292\" y2=\"58\"/><line class=\"ln\" x1=\"30\" y1=\"118\" x2=\"292\" y2=\"118\"/>" +
        "<line class=\"ac\" x1=\"110.9\" y1=\"140.1\" x2=\"203.3\" y2=\"21.8\"/><path class=\"thin\" d=\"M243 54 L250 58 L243 62\"/>" +
        "<path class=\"thin\" d=\"M243 114 L250 118 L243 122\"/><circle class=\"dt\" cx=\"30\" cy=\"58\" r=\"3\"/><circle class=\"dt\" cx=\"292\" cy=\"58\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"30\" cy=\"118\" r=\"3\"/><circle class=\"dt\" cx=\"292\" cy=\"118\" r=\"3\"/><circle class=\"dt\" cx=\"175\" cy=\"58\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"128.1\" cy=\"118\" r=\"3\"/><circle class=\"dt\" cx=\"203.3\" cy=\"21.8\" r=\"3\"/><circle class=\"dt\" cx=\"110.9\" cy=\"140.1\" r=\"3\"/>" +
        "<text x=\"30\" y=\"49\" text-anchor=\"middle\">A</text><text x=\"292\" y=\"49\" text-anchor=\"middle\">B</text><text x=\"30\" y=\"109\" text-anchor=\"middle\">C</text>" +
        "<text x=\"292\" y=\"109\" text-anchor=\"middle\">D</text><text x=\"191.3\" y=\"25.8\" text-anchor=\"middle\">E</text>" +
        "<text x=\"98.9\" y=\"146.1\" text-anchor=\"middle\">F</text><text x=\"163\" y=\"51\" text-anchor=\"middle\">P</text>" +
        "<text x=\"141.1\" y=\"135\" text-anchor=\"middle\">Q</text><path class=\"thin\" d=\"M197 58 A22 22 0 0 0 188.5 40.7\"/>" +
        "<text x=\"212.7\" y=\"44.6\" text-anchor=\"middle\">52°</text><text class=\"sm\" x=\"100\" y=\"92\" text-anchor=\"middle\">storm track</text></svg></figure>" +
        "<p class=\"geo-given\">On a weather map, grid lines <strong>AB</strong> and <strong>CD</strong> are parallel. A storm moves along a straight track, <strong>EF</strong>, that crosses AB at <strong>P</strong> and CD at <strong>Q</strong>. m∠EPB = 52°.</p>",
      claims: [
        {
          id: "pair-apq-pqd",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "What kind of angle pair are ∠APQ and ∠PQD?",
          choices: [
            { letter: "A", text: "Corresponding angles" },
            { letter: "B", text: "Same-side interior angles" },
            { letter: "C", text: "Alternate interior angles" },
            { letter: "D", text: "Vertical angles" }
          ],
          correct: "C"
        },
        {
          id: "angle-pqd",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠PQD?",
          choices: [
            { letter: "A", text: "52°" },
            { letter: "B", text: "128°" },
            { letter: "C", text: "38°" },
            { letter: "D", text: "104°" }
          ],
          correct: "A"
        },
        {
          id: "angle-bpq",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠BPQ?",
          choices: [
            { letter: "A", text: "52°" },
            { letter: "B", text: "38°" },
            { letter: "C", text: "308°" },
            { letter: "D", text: "128°" }
          ],
          correct: "D"
        },
        {
          id: "corr-ape",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle corresponds to ∠APE?",
          choices: [
            { letter: "A", text: "∠DQF" },
            { letter: "B", text: "∠CQP" },
            { letter: "C", text: "∠CQF" },
            { letter: "D", text: "∠PQD" }
          ],
          correct: "B"
        },
        {
          id: "same-side",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which two angles are same-side interior angles along the storm track?",
          choices: [
            { letter: "A", text: "∠BPQ and ∠PQD" },
            { letter: "B", text: "∠APQ and ∠PQD" },
            { letter: "C", text: "∠EPB and ∠PQD" },
            { letter: "D", text: "∠APE and ∠CQF" }
          ],
          correct: "A"
        },
        {
          id: "prove",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Suppose no one knew the grid lines were parallel. Which measurement would prove that AB ∥ CD?",
          choices: [
            { letter: "A", text: "m∠APQ = 52°" },
            { letter: "B", text: "m∠DQF = 52°" },
            { letter: "C", text: "m∠CQF = 52°" },
            { letter: "D", text: "m∠BPQ = 128°" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt2-rocks-laser-block",
      family: "GEO",
      mode: "rocks",
      title: "The Laser and the Glass Block",
      kind: "Lines · G.RLT.2",
      blurb: "A laser beam crosses a glass block whose faces are parallel; solve for x.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A rectangular glass block with parallel top and bottom faces. A laser beam comes in from the upper left, enters the top face at P, runs straight inside the block down to Q on the bottom face, and leaves toward the lower right. Angle 1 is at P below the top face, right of PQ; angle 3 is at P left of PQ; angle 2 is at Q above the bottom face, left of PQ; angle 4 is at Q right of PQ\">" +
        "<polygon class=\"sh2\" points=\"52,50 252,50 252,122 52,122\"/><line class=\"ln\" x1=\"36\" y1=\"50\" x2=\"268\" y2=\"50\"/>" +
        "<line class=\"ln\" x1=\"36\" y1=\"122\" x2=\"268\" y2=\"122\"/><path class=\"thin\" d=\"M225 46 L232 50 L225 54\"/>" +
        "<path class=\"thin\" d=\"M225 118 L232 122 L225 126\"/><line class=\"thin\" x1=\"101.2\" y1=\"15.1\" x2=\"128\" y2=\"50\"/>" +
        "<line class=\"ac\" x1=\"128\" y1=\"50\" x2=\"160.1\" y2=\"122\"/><line class=\"thin\" x1=\"160.1\" y1=\"122\" x2=\"184.5\" y2=\"153.7\"/>" +
        "<path class=\"thin\" d=\"M118.4 30.9 L119.5 38.9 L112 35.8\"/><path class=\"thin\" d=\"M178.5 139.4 L179.6 147.4 L172.1 144.2\"/>" +
        "<circle class=\"dt\" cx=\"128\" cy=\"50\" r=\"3\"/><circle class=\"dt\" cx=\"160.1\" cy=\"122\" r=\"3\"/><text x=\"141\" y=\"43\" text-anchor=\"middle\">P</text>" +
        "<text x=\"148.1\" y=\"139\" text-anchor=\"middle\">Q</text><text x=\"146.5\" y=\"67\" text-anchor=\"middle\">1</text>" +
        "<text x=\"118.7\" y=\"69.3\" text-anchor=\"middle\">3</text><text x=\"141.6\" y=\"115\" text-anchor=\"middle\">2</text>" +
        "<text x=\"169.3\" y=\"112.7\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"95.2\" y=\"19.1\" text-anchor=\"end\">laser</text>" +
        "<text class=\"sm\" x=\"212\" y=\"90\" text-anchor=\"middle\">glass block</text><text class=\"sm\" x=\"274\" y=\"54\">top</text>" +
        "<text class=\"sm\" x=\"274\" y=\"126\">bottom</text></svg></figure>" +
        "<p class=\"geo-given\">In a science lab, a laser beam passes through a glass block. The top and bottom faces of the block are parallel. Inside the block the beam runs straight from <strong>P</strong> to <strong>Q</strong>. m∠1 = (5x − 19)⁠° and m∠2 = (3x + 15)⁠°.</p>",
      claims: [
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is the value of x for this beam?",
          choices: [
            { letter: "A", text: "23" },
            { letter: "B", text: "17" },
            { letter: "C", text: "−2" },
            { letter: "D", text: "34" }
          ],
          correct: "B"
        },
        {
          id: "angle-1",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠1, the angle between the beam and the top face?",
          choices: [
            { letter: "A", text: "114°" },
            { letter: "B", text: "17°" },
            { letter: "C", text: "96°" },
            { letter: "D", text: "66°" }
          ],
          correct: "D"
        },
        {
          id: "angle-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠4, inside the block at Q?",
          choices: [
            { letter: "A", text: "114°" },
            { letter: "B", text: "66°" },
            { letter: "C", text: "24°" },
            { letter: "D", text: "294°" }
          ],
          correct: "A"
        },
        {
          id: "pair-1-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "∠1 and ∠4 are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Alternate interior angles" },
            { letter: "B", text: "Corresponding angles" },
            { letter: "C", text: "Same-side interior angles" },
            { letter: "D", text: "Vertical angles" }
          ],
          correct: "C"
        },
        {
          id: "converse",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Suppose a student did not know the faces were parallel. She finds that ∠1 and ∠2 are congruent. Which reason lets her conclude that the faces are parallel?",
          choices: [
            { letter: "A", text: "Alternate Interior Angles Theorem" },
            { letter: "B", text: "Converse of the Same-Side Interior Angles Theorem" },
            { letter: "C", text: "Converse of the Corresponding Angles Postulate" },
            { letter: "D", text: "Converse of the Alternate Interior Angles Theorem" }
          ],
          correct: "D"
        },
        {
          id: "bad-block",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "A second block is cut badly. Its beam makes 66° in the place of ∠1 and 61° in the place of ∠2. What can you conclude?",
          choices: [
            { letter: "A", text: "Its faces are parallel; both angles are acute." },
            { letter: "B", text: "Its faces are parallel; 66° and 61° are close." },
            { letter: "C", text: "Its faces are not parallel; the alternate interior angles differ." },
            { letter: "D", text: "You cannot tell without measuring ∠3 too." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt2-rocks-canyon-layers",
      family: "GEO",
      mode: "rocks",
      title: "Layers in the Canyon Wall",
      kind: "Lines · G.RLT.2",
      blurb: "A fault line crosses three rock layers: which layers are parallel?",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Three rock-layer boundaries: a and b rise gently to the right and c is level. Fault line f rises steeply to the right and crosses all three. At a, the angle above a and left of f is marked 111 degrees. At b, the angle below b and right of f is marked 111 degrees. At c, the angle above c and left of f is marked 105 degrees\">" +
        "<polygon class=\"sh2\" points=\"14,54.1 296,24.4 296,73.2 14,102.9\"/><line class=\"ln\" x1=\"14\" y1=\"54.1\" x2=\"296\" y2=\"24.4\"/>" +
        "<line class=\"ln\" x1=\"14\" y1=\"102.9\" x2=\"296\" y2=\"73.2\"/><line class=\"ln\" x1=\"14\" y1=\"144.7\" x2=\"296\" y2=\"144.7\"/>" +
        "<line class=\"ac\" x1=\"110\" y1=\"166\" x2=\"151.4\" y2=\"11.5\"/><text x=\"308\" y=\"29.4\" text-anchor=\"middle\">a</text>" +
        "<text x=\"308\" y=\"78.2\" text-anchor=\"middle\">b</text><text x=\"308\" y=\"149.7\" text-anchor=\"middle\">c</text>" +
        "<text class=\"acc\" x=\"160.4\" y=\"21.5\" text-anchor=\"middle\">f</text><circle class=\"dt\" cx=\"143.6\" cy=\"40.4\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"130.2\" cy=\"90.7\" r=\"3\"/><circle class=\"dt\" cx=\"115.7\" cy=\"144.7\" r=\"3\"/>" +
        "<path class=\"thin\" d=\"M147 27.9 A13 13 0 0 0 130.7 41.8\"/><text x=\"124.2\" y=\"22.6\" text-anchor=\"middle\">111°</text>" +
        "<path class=\"thin\" d=\"M126.8 103.2 A13 13 0 0 0 143.1 89.3\"/><text x=\"149.7\" y=\"118.5\" text-anchor=\"middle\">111°</text>" +
        "<path class=\"thin\" d=\"M119.1 132.2 A13 13 0 0 0 102.7 144.7\"/><text x=\"97.4\" y=\"125.9\" text-anchor=\"middle\">105°</text>" +
        "<text class=\"sm\" x=\"120\" y=\"162\">fault</text></svg></figure>" +
        "<p class=\"geo-given\">A geologist sketches a canyon wall. The boundaries of three rock layers, <strong>a</strong>, <strong>b</strong> and <strong>c</strong>, are straight lines. A straight fault line, <strong>f</strong>, crosses all three. The figure shows the angle she measured at each boundary.</p>",
      claims: [
        {
          id: "pair-a-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "The 111° angle at boundary a and the 111° angle at boundary b are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Alternate exterior angles" },
            { letter: "B", text: "Alternate interior angles" },
            { letter: "C", text: "Corresponding angles" },
            { letter: "D", text: "Vertical angles" }
          ],
          correct: "A"
        },
        {
          id: "a-and-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Are boundaries a and b parallel?",
          choices: [
            { letter: "A", text: "No; the two angles should add to 180°." },
            { letter: "B", text: "Yes; vertical angles are congruent." },
            { letter: "C", text: "Yes; alternate exterior angles are congruent." },
            { letter: "D", text: "Cannot tell, because f is not perpendicular to them." }
          ],
          correct: "C"
        },
        {
          id: "c-and-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Is boundary c parallel to boundary b?",
          choices: [
            { letter: "A", text: "Yes; 105° and 111° are both obtuse." },
            { letter: "B", text: "No; corresponding angles measure 105° and 111°." },
            { letter: "C", text: "Yes; both boundaries are cut by f." },
            { letter: "D", text: "No; corresponding angles must add to 180°." }
          ],
          correct: "B"
        },
        {
          id: "above-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is the measure of the angle above boundary b, to the left of f?",
          choices: [
            { letter: "A", text: "69°" },
            { letter: "B", text: "105°" },
            { letter: "C", text: "249°" },
            { letter: "D", text: "111°" }
          ],
          correct: "D"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "In a second sketch, the angle above c and left of f is (3x + 21)⁠°, and c is parallel to b. What is x?",
          choices: [
            { letter: "A", text: "16" },
            { letter: "B", text: "28" },
            { letter: "C", text: "44" },
            { letter: "D", text: "30" }
          ],
          correct: "D"
        },
        {
          id: "jon",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Jon says the angle above boundary b, right of f, is 111° because it is vertical to the marked 111° angle at b. What is his error?",
          choices: [
            { letter: "A", text: "They are vertical, but it measures 69°." },
            { letter: "B", text: "They form a linear pair, so it is 69°." },
            { letter: "C", text: "Nothing; vertical angles are congruent." },
            { letter: "D", text: "They are corresponding, so it is 105°." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt2-rocks-calcite-face",
      family: "GEO",
      mode: "rocks",
      title: "The Calcite Crystal Face",
      kind: "Lines · G.RLT.2",
      blurb: "A crystal face shaped like a parallelogram, and two angles written in x.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Parallelogram ABCD with A bottom left, B bottom right, C top right and D top left; AB is parallel to DC and AD is parallel to BC. Side AB is extended past B to E. Angle DAB is labeled (4x minus 6) degrees and angle ABC is labeled (5x minus 3) degrees; angle CBE is marked\">" +
        "<polygon class=\"sh2\" points=\"40,128 206,128 226.8,30.2 60.8,30.2\"/><line class=\"ln\" x1=\"206\" y1=\"128\" x2=\"292\" y2=\"128\"/>" +
        "<circle class=\"dt\" cx=\"40\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"206\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"226.8\" cy=\"30.2\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"60.8\" cy=\"30.2\" r=\"3\"/><circle class=\"dt\" cx=\"292\" cy=\"128\" r=\"3\"/><path class=\"thin\" d=\"M111 124 L118 128 L111 132\"/>" +
        "<path class=\"thin\" d=\"M131.8 26.2 L138.8 30.2 L131.8 34.2\"/><path class=\"thin\" d=\"M45.9 81.2 L51.2 75.2 L53.7 82.9\"/>" +
        "<path class=\"thin\" d=\"M44.6 87.1 L50 81 L52.4 88.7\"/><path class=\"thin\" d=\"M211.9 81.2 L217.2 75.2 L219.7 82.9\"/>" +
        "<path class=\"thin\" d=\"M210.6 87.1 L216 81 L218.4 88.7\"/><text x=\"28\" y=\"133\" text-anchor=\"middle\">A</text>" +
        "<text x=\"206\" y=\"146\" text-anchor=\"middle\">B</text><text x=\"238.8\" y=\"32.2\" text-anchor=\"middle\">C</text>" +
        "<text x=\"48.8\" y=\"32.2\" text-anchor=\"middle\">D</text><text x=\"292\" y=\"146\" text-anchor=\"middle\">E</text>" +
        "<path class=\"thin\" d=\"M62 128 A22 22 0 0 0 44.6 106.5\"/><text class=\"sm\" x=\"78.9\" y=\"100.5\" text-anchor=\"middle\">(4x − 6)°</text>" +
        "<path class=\"thin\" d=\"M210.2 108.4 A20 20 0 0 0 186 128\"/><text class=\"sm\" x=\"178.3\" y=\"97.8\" text-anchor=\"middle\">(5x − 3)°</text>" +
        "<path class=\"ac\" d=\"M218 128 A12 12 0 0 0 208.5 116.3\"/></svg></figure>" +
        "<p class=\"geo-given\">In a model of a calcite crystal, face <strong>ABCD</strong> is a parallelogram: AB ∥ DC and AD ∥ BC. Edge AB is extended past <strong>B</strong> to <strong>E</strong>. m∠DAB = (4x − 6)⁠° and m∠ABC = (5x − 3)⁠°.</p>",
      claims: [
        {
          id: "pair-a-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "With line AE as the transversal of AD and BC, what kind of angle pair are ∠DAB and ∠ABC?",
          choices: [
            { letter: "A", text: "Same-side interior angles" },
            { letter: "B", text: "Alternate interior angles" },
            { letter: "C", text: "Corresponding angles" },
            { letter: "D", text: "A linear pair" }
          ],
          correct: "A"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is the value of x for this crystal face?",
          choices: [
            { letter: "A", text: "−3" },
            { letter: "B", text: "11" },
            { letter: "C", text: "21" },
            { letter: "D", text: "41" }
          ],
          correct: "C"
        },
        {
          id: "angle-abc",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠ABC, inside the face at B?",
          choices: [
            { letter: "A", text: "78°" },
            { letter: "B", text: "102°" },
            { letter: "C", text: "21°" },
            { letter: "D", text: "108°" }
          ],
          correct: "B"
        },
        {
          id: "angle-cbe",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠CBE, outside the face at B?",
          choices: [
            { letter: "A", text: "102°" },
            { letter: "B", text: "12°" },
            { letter: "C", text: "282°" },
            { letter: "D", text: "78°" }
          ],
          correct: "D"
        },
        {
          id: "pair-a-e",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "With line AE as the transversal of AD and BC, ∠DAB and ∠CBE are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Alternate exterior angles" },
            { letter: "B", text: "Same-side interior angles" },
            { letter: "C", text: "Corresponding angles" },
            { letter: "D", text: "Vertical angles" }
          ],
          correct: "C"
        },
        {
          id: "other-face",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Another crystal face has m∠DAB = 78° and m∠ABC = 101°. Can AD be parallel to BC?",
          choices: [
            { letter: "A", text: "No; the same-side interior angles add to 179°." },
            { letter: "B", text: "Yes; every crystal face is a parallelogram." },
            { letter: "C", text: "Yes; ∠DAB and ∠ABC are on the same side of AB." },
            { letter: "D", text: "No; ∠DAB and ∠ABC would have to be congruent." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt2-rocks-earth-sunlight",
      family: "GEO",
      mode: "rocks",
      title: "Measuring Earth with Sunlight",
      kind: "Lines · G.RLT.2",
      blurb: "Parallel sun rays, a well, a pole and the size of the Earth.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"The top of a circle (Earth) with center O. A vertical sun ray comes down through S on the surface and on to O (dashed). A second, parallel ray comes down past P, the top of a pole AP that stands at A on the surface and points straight away from O. The angle between the pole and this ray at P is marked 7.2 degrees, and angle SOA at the center is marked\">" +
        "<path class=\"ln\" d=\"M11.8 133 A112 112 0 0 1 229.6 138.7\"/><line class=\"ln\" x1=\"120\" y1=\"6\" x2=\"120\" y2=\"50\"/>" +
        "<line class=\"thin dash\" x1=\"120\" y1=\"50\" x2=\"120\" y2=\"162\"/><line class=\"thin dash\" x1=\"120\" y1=\"162\" x2=\"184.2\" y2=\"70.3\"/>" +
        "<line class=\"ln\" x1=\"184.2\" y1=\"70.3\" x2=\"210.6\" y2=\"32.6\"/><line class=\"ln\" x1=\"210.6\" y1=\"6\" x2=\"210.6\" y2=\"96.2\"/>" +
        "<path class=\"thin\" d=\"M124 23 L120 30 L116 23\"/><path class=\"thin\" d=\"M214.6 23 L210.6 30 L206.6 23\"/><circle class=\"dt\" cx=\"120\" cy=\"50\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"120\" cy=\"162\" r=\"3\"/><circle class=\"dt\" cx=\"184.2\" cy=\"70.3\" r=\"3\"/><circle class=\"dt\" cx=\"210.6\" cy=\"32.6\" r=\"3\"/>" +
        "<path class=\"ac\" d=\"M132.6 144 A22 22 0 0 0 120 140\"/><path class=\"ac\" d=\"M198 50.6 A22 22 0 0 0 210.6 54.6\"/>" +
        "<text x=\"108\" y=\"46\" text-anchor=\"middle\">S</text><text x=\"106\" y=\"160\" text-anchor=\"middle\">O</text>" +
        "<text x=\"168.2\" y=\"76.3\" text-anchor=\"middle\">A</text><text x=\"197.6\" y=\"30.6\" text-anchor=\"middle\">P</text>" +
        "<text class=\"acc\" x=\"216.6\" y=\"60.6\">7.2°</text><text class=\"sm\" x=\"166\" y=\"14\" text-anchor=\"middle\">sunlight</text>" +
        "<text class=\"sm\" x=\"70\" y=\"132\" text-anchor=\"middle\">Earth</text></svg><figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">Sunlight reaches Earth in parallel rays. At noon in Syene, <strong>S</strong>, a ray shines straight down a well toward Earth's center, <strong>O</strong>. At the same moment in Alexandria, <strong>A</strong>, a pole <strong>AP</strong> points straight away from O, and a parallel ray makes a 7.2° angle with the pole at <strong>P</strong>.</p>",
      claims: [
        {
          id: "pair",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "With line OP as the transversal of the two rays, the 7.2° angle at P and ∠SOA are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Corresponding angles" },
            { letter: "B", text: "Same-side interior angles" },
            { letter: "C", text: "Vertical angles" },
            { letter: "D", text: "Alternate interior angles" }
          ],
          correct: "D"
        },
        {
          id: "angle-soa",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠SOA?",
          choices: [
            { letter: "A", text: "172.8°" },
            { letter: "B", text: "7.2°" },
            { letter: "C", text: "82.8°" },
            { letter: "D", text: "14.4°" }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Why is ∠SOA congruent to the 7.2° angle at P?",
          choices: [
            { letter: "A", text: "Parallel rays make alternate interior angles congruent." },
            { letter: "B", text: "They are vertical angles, so they are congruent." },
            { letter: "C", text: "They form a linear pair along the pole." },
            { letter: "D", text: "The pole is perpendicular to the ground at A." }
          ],
          correct: "A"
        },
        {
          id: "around",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "S and A are about 800 km apart along Earth's surface, and that arc matches the 7.2° angle at O. About how far is it all the way around Earth?",
          choices: [
            { letter: "A", text: "20,000 km" },
            { letter: "B", text: "10,000 km" },
            { letter: "C", text: "40,000 km" },
            { letter: "D", text: "5,760 km" }
          ],
          correct: "C"
        },
        {
          id: "model",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "In a class model, the ray makes a (2x + 3)⁠° angle with the pole, and m∠SOA = (5x − 9)⁠°. What is m∠SOA in the model?",
          choices: [
            { letter: "A", text: "11°" },
            { letter: "B", text: "4°" },
            { letter: "C", text: "1°" },
            { letter: "D", text: "169°" }
          ],
          correct: "A"
        },
        {
          id: "rosa",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Rosa says the 7.2° angle would equal ∠SOA even if the sun's rays were not parallel. Why is she wrong?",
          choices: [
            { letter: "A", text: "Alternate interior angles are always supplementary." },
            { letter: "B", text: "Vertical angles need parallel lines to be congruent." },
            { letter: "C", text: "She is right; alternate interior angles are always congruent." },
            { letter: "D", text: "Alternate interior angles are congruent only for parallel lines." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt2-rocks-telescope-truss",
      family: "GEO",
      mode: "rocks",
      title: "The Telescope Truss",
      kind: "Lines · G.RLT.2",
      blurb: "A two-column proof about the struts and rings of a telescope.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Lines l and m, nearly level, crossed by strut s on the left (leaning left) and strut t on the right (leaning right). At l and s: angle 1 is above l, left of s, and angle 5 is below l, right of s. At m and s: angle 2 is above m, left of s. At l and t: angle 3 is below l, right of t. At m and t: angle 4 is above m, right of t\">" +
        "<line class=\"ln\" x1=\"16\" y1=\"58.4\" x2=\"292\" y2=\"19.6\"/><line class=\"ln\" x1=\"16\" y1=\"133.4\" x2=\"292\" y2=\"94.6\"/>" +
        "<line class=\"ln\" x1=\"136.1\" y1=\"134.3\" x2=\"91.7\" y2=\"12.2\"/><line class=\"ln\" x1=\"180.5\" y1=\"129.6\" x2=\"227.6\" y2=\"12.9\"/>" +
        "<text x=\"304\" y=\"24.6\" text-anchor=\"middle\">ℓ</text><text x=\"304\" y=\"99.6\" text-anchor=\"middle\">m</text>" +
        "<text x=\"81.7\" y=\"18.2\" text-anchor=\"middle\">s</text><text x=\"237.6\" y=\"18.9\" text-anchor=\"middle\">t</text><circle class=\"dt\" cx=\"104\" cy=\"46\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"130\" cy=\"117.4\" r=\"3\"/><circle class=\"dt\" cx=\"220.9\" cy=\"29.6\" r=\"3\"/><circle class=\"dt\" cx=\"188.7\" cy=\"109.2\" r=\"3\"/>" +
        "<text x=\"89.7\" y=\"42.4\" text-anchor=\"middle\">1</text><text x=\"118.3\" y=\"59.6\" text-anchor=\"middle\">5</text>" +
        "<text x=\"115.7\" y=\"113.8\" text-anchor=\"middle\">2</text><text x=\"230.1\" y=\"46.4\" text-anchor=\"middle\">3</text>" +
        "<text x=\"206\" y=\"100.6\" text-anchor=\"middle\">4</text></svg></figure>" +
        "<p class=\"geo-given\">In a side view of a telescope's truss, lines <strong>ℓ</strong> and <strong>m</strong> are the edges of two rings, and struts <strong>s</strong> and <strong>t</strong> cross both. Given: ∠1 ≅ ∠2. Prove: ∠3 and ∠4 are supplementary.</p>" +
        "<table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. ∠1 ≅ ∠2</td><td>Given</td></tr><tr><td>2. ∠1 ≅ ∠5</td><td>____ (a)</td>" +
        "</tr><tr><td>3. ∠5 ≅ ∠2</td><td>Transitive Property of Congruence</td></tr><tr><td>4. ℓ ∥ m</td><td>____ (b)</td></tr><tr>" +
        "<td>5. ∠3 and ∠4 are supplementary.</td><td>____ (c)</td></tr></table>",
      claims: [
        {
          id: "reason-a",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the truss proof, which reason fills blank (a)?",
          choices: [
            { letter: "A", text: "Linear Pair Postulate" },
            { letter: "B", text: "Corresponding Angles Postulate" },
            { letter: "C", text: "Vertical Angles Theorem" },
            { letter: "D", text: "Converse of the Corresponding Angles Postulate" }
          ],
          correct: "C"
        },
        {
          id: "reason-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the truss proof, which reason fills blank (b)?",
          choices: [
            { letter: "A", text: "Converse of the Alternate Interior Angles Theorem" },
            { letter: "B", text: "Alternate Interior Angles Theorem" },
            { letter: "C", text: "Converse of the Same-Side Interior Angles Theorem" },
            { letter: "D", text: "Transitive Property of Congruence" }
          ],
          correct: "A"
        },
        {
          id: "reason-c",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the truss proof, which reason fills blank (c)?",
          choices: [
            { letter: "A", text: "Converse of the Same-Side Interior Angles Theorem" },
            { letter: "B", text: "Same-Side Interior Angles Theorem" },
            { letter: "C", text: "Linear Pair Postulate" },
            { letter: "D", text: "Alternate Interior Angles Theorem" }
          ],
          correct: "B"
        },
        {
          id: "shorter",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Which single step could replace steps 2 to 4 of the truss proof?",
          choices: [
            { letter: "A", text: "ℓ ∥ m, by the Corresponding Angles Postulate" },
            { letter: "B", text: "ℓ ∥ m, by the Converse of the Alternate Exterior Angles Theorem" },
            { letter: "C", text: "ℓ ∥ m, by the Vertical Angles Theorem" },
            { letter: "D", text: "ℓ ∥ m, by the Converse of the Corresponding Angles Postulate" }
          ],
          correct: "D"
        },
        {
          id: "angle-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Suppose m∠3 = (7x − 13)⁠° and m∠4 = (3x + 3)⁠°, and ℓ ∥ m. What is m∠3?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "15°" },
            { letter: "C", text: "60°" },
            { letter: "D", text: "19°" }
          ],
          correct: "A"
        },
        {
          id: "alt-int",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which pair of angles in the truss figure are alternate interior angles?",
          choices: [
            { letter: "A", text: "∠1 and ∠2" },
            { letter: "B", text: "∠5 and ∠2" },
            { letter: "C", text: "∠3 and ∠4" },
            { letter: "D", text: "∠1 and ∠5" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt2-sky-runways",
      family: "GEO",
      mode: "sky",
      title: "Two Runways and a Taxiway",
      kind: "Lines · G.RLT.2",
      blurb: "Parallel runways, one taxiway and angles numbered clockwise.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Parallel runways r and s, leaning to the right, crossed by taxiway t, which falls slightly to the right. At each crossing the angles are numbered clockwise from the top left: at r, angle 1 is above t and left of r, 2 above t and right of r, 3 below t and right of r, 4 below t and left of r; angles 5 to 8 sit the same way at s\">" +
        "<line class=\"ln\" x1=\"138.6\" y1=\"8\" x2=\"60.1\" y2=\"144\"/><line class=\"ln\" x1=\"271.4\" y1=\"8\" x2=\"192.9\" y2=\"144\"/>" +
        "<line class=\"ln\" x1=\"18.8\" y1=\"56\" x2=\"306\" y2=\"96.4\"/><path class=\"thin\" d=\"M120 32.2 L127 28.2 L127 36.2\"/>" +
        "<path class=\"thin\" d=\"M242.8 49.5 L249.8 45.4 L249.8 53.5\"/><text x=\"129.6\" y=\"19\" text-anchor=\"middle\">r</text>" +
        "<text x=\"262.4\" y=\"19\" text-anchor=\"middle\">s</text><text x=\"308\" y=\"88.4\" text-anchor=\"middle\">t</text><circle class=\"dt\" cx=\"104\" cy=\"68\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"226.8\" cy=\"85.3\" r=\"3\"/><text x=\"97.4\" y=\"59.5\" text-anchor=\"middle\">1</text>" +
        "<text x=\"120.9\" y=\"64.8\" text-anchor=\"middle\">2</text><text x=\"110.6\" y=\"86.5\" text-anchor=\"middle\">3</text>" +
        "<text x=\"87.1\" y=\"81.2\" text-anchor=\"middle\">4</text><text x=\"220.2\" y=\"76.8\" text-anchor=\"middle\">5</text>" +
        "<text x=\"243.7\" y=\"82\" text-anchor=\"middle\">6</text><text x=\"233.4\" y=\"103.7\" text-anchor=\"middle\">7</text>" +
        "<text x=\"209.9\" y=\"98.5\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"54.1\" y=\"142\" text-anchor=\"end\">runway</text>" +
        "<text class=\"sm\" x=\"268\" y=\"140\" text-anchor=\"middle\">taxiway</text></svg></figure>" +
        "<p class=\"geo-given\">At an airport, runways <strong>r</strong> and <strong>s</strong> are parallel. A straight taxiway, <strong>t</strong>, crosses both runways. m∠5 = 112°.</p>",
      claims: [
        {
          id: "pair-2-8",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "∠2 and ∠8 are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Same-side interior angles" },
            { letter: "B", text: "Alternate interior angles" },
            { letter: "C", text: "Corresponding angles" },
            { letter: "D", text: "Alternate exterior angles" }
          ],
          correct: "B"
        },
        {
          id: "angle-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠3, between the runways?",
          choices: [
            { letter: "A", text: "68°" },
            { letter: "B", text: "22°" },
            { letter: "C", text: "112°" },
            { letter: "D", text: "248°" }
          ],
          correct: "C"
        },
        {
          id: "corr-6",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle corresponds to ∠6?",
          choices: [
            { letter: "A", text: "∠2" },
            { letter: "B", text: "∠8" },
            { letter: "C", text: "∠4" },
            { letter: "D", text: "∠7" }
          ],
          correct: "A"
        },
        {
          id: "which-68",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Which of these angles measures 68°?",
          choices: [
            { letter: "A", text: "∠1" },
            { letter: "B", text: "∠3" },
            { letter: "C", text: "∠7" },
            { letter: "D", text: "∠4" }
          ],
          correct: "D"
        },
        {
          id: "linear",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which two angles form a linear pair at one crossing?",
          choices: [
            { letter: "A", text: "∠5 and ∠7" },
            { letter: "B", text: "∠1 and ∠5" },
            { letter: "C", text: "∠5 and ∠6" },
            { letter: "D", text: "∠3 and ∠8" }
          ],
          correct: "C"
        },
        {
          id: "sum-4-7",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "A pilot adds m∠4 and m∠7. What is the sum?",
          choices: [
            { letter: "A", text: "136°" },
            { letter: "B", text: "180°" },
            { letter: "C", text: "224°" },
            { letter: "D", text: "90°" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt2-sky-ferry-canal",
      family: "GEO",
      mode: "sky",
      title: "The Ferry Across the Canal",
      kind: "Lines · G.RLT.2",
      blurb: "A ferry route crosses the two parallel banks of a canal.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A canal between two parallel banks, AB on the left and CD on the right, both leaning slightly left. A ferry route from W rises to the right to E, crossing bank AB at P and bank CD at Q. A is up the left bank from P, B down it; C is up the right bank from Q, D down it. Angle APQ is marked 76 degrees\">" +
        "<line class=\"ln\" x1=\"92.7\" y1=\"9.3\" x2=\"117\" y2=\"147.2\"/><line class=\"ln\" x1=\"214.3\" y1=\"6.2\" x2=\"238.6\" y2=\"144\"/>" +
        "<line class=\"ac\" x1=\"40.4\" y1=\"126.1\" x2=\"277.9\" y2=\"20.3\"/><path class=\"thin\" d=\"M115.9 118 L113.2 125.5 L108.1 119.3\"/>" +
        "<path class=\"thin\" d=\"M235.5 103 L232.7 110.6 L227.6 104.4\"/><circle class=\"dt\" cx=\"40.4\" cy=\"126.1\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"277.9\" cy=\"20.3\" r=\"3\"/><circle class=\"dt\" cx=\"94.8\" cy=\"21.2\" r=\"3\"/><circle class=\"dt\" cx=\"115.6\" cy=\"139.3\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"216.1\" cy=\"16\" r=\"3\"/><circle class=\"dt\" cx=\"235.9\" cy=\"128.3\" r=\"3\"/><circle class=\"dt\" cx=\"108\" cy=\"96\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"221.3\" cy=\"45.6\" r=\"3\"/><text x=\"37.4\" y=\"143.1\" text-anchor=\"middle\">W</text>" +
        "<text x=\"281.9\" y=\"38.3\" text-anchor=\"middle\">E</text><text x=\"81.8\" y=\"26.2\" text-anchor=\"middle\">A</text>" +
        "<text x=\"102.6\" y=\"144.3\" text-anchor=\"middle\">B</text><text x=\"229.1\" y=\"21\" text-anchor=\"middle\">C</text>" +
        "<text x=\"248.9\" y=\"133.3\" text-anchor=\"middle\">D</text><text x=\"93\" y=\"93\" text-anchor=\"middle\">P</text>" +
        "<text x=\"235.3\" y=\"58.6\" text-anchor=\"middle\">Q</text><path class=\"thin\" d=\"M122.6 89.5 A16 16 0 0 0 105.2 80.2\"/>" +
        "<text x=\"122.1\" y=\"74.5\" text-anchor=\"middle\">76°</text><text class=\"sm\" x=\"165\" y=\"132\" text-anchor=\"middle\">canal</text></svg></figure>" +
        "<p class=\"geo-given\">On a map, the banks of a canal are parallel lines, <strong>AB</strong> and <strong>CD</strong>. A ferry's straight route from dock <strong>W</strong> to dock <strong>E</strong> crosses the banks at <strong>P</strong> and <strong>Q</strong>. m∠APQ = 76°.</p>",
      claims: [
        {
          id: "angle-pqd",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠PQD, where the route meets the far bank?",
          choices: [
            { letter: "A", text: "76°" },
            { letter: "B", text: "104°" },
            { letter: "C", text: "14°" },
            { letter: "D", text: "152°" }
          ],
          correct: "A"
        },
        {
          id: "pair-apq-cqe",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "What kind of angle pair are ∠APQ and ∠CQE?",
          choices: [
            { letter: "A", text: "Alternate interior angles" },
            { letter: "B", text: "Alternate exterior angles" },
            { letter: "C", text: "Same-side interior angles" },
            { letter: "D", text: "Corresponding angles" }
          ],
          correct: "D"
        },
        {
          id: "angle-dqe",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠DQE?",
          choices: [
            { letter: "A", text: "76°" },
            { letter: "B", text: "104°" },
            { letter: "C", text: "14°" },
            { letter: "D", text: "284°" }
          ],
          correct: "B"
        },
        {
          id: "ssi-bpq",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle is a same-side interior angle with ∠BPQ?",
          choices: [
            { letter: "A", text: "∠PQC" },
            { letter: "B", text: "∠DQE" },
            { letter: "C", text: "∠PQD" },
            { letter: "D", text: "∠WPA" }
          ],
          correct: "C"
        },
        {
          id: "vertical",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which two angles are vertical angles?",
          choices: [
            { letter: "A", text: "∠WPA and ∠BPQ" },
            { letter: "B", text: "∠APQ and ∠BPQ" },
            { letter: "C", text: "∠WPA and ∠PQC" },
            { letter: "D", text: "∠APQ and ∠PQD" }
          ],
          correct: "A"
        },
        {
          id: "other-canal",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "On another canal, a route makes m∠APQ = 76° and m∠PQC = 101°. Are those banks parallel?",
          choices: [
            { letter: "A", text: "Yes; one angle is acute and one is obtuse." },
            { letter: "B", text: "Yes; same-side interior angles are never equal." },
            { letter: "C", text: "No; ∠APQ and ∠PQC should be congruent." },
            { letter: "D", text: "No; same-side interior angles add to 177°." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt2-sky-truss-bridge",
      family: "GEO",
      mode: "sky",
      title: "The Truss Bridge",
      kind: "Lines · G.RLT.2",
      blurb: "Parallel chords, zigzag beams and two angles written in x.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A truss bridge: top chord BD and bottom chord AE are parallel. Beams zigzag A to B to C to D to E, with A, C and E on the bottom chord and B and D on the top chord. Angle DBC, at B between the top chord and beam BC, and angle BCA, at C between beam BC and the bottom chord toward A, are marked\">" +
        "<line class=\"ln\" x1=\"18\" y1=\"124\" x2=\"276.6\" y2=\"124\"/><line class=\"ln\" x1=\"53.1\" y1=\"36\" x2=\"237.4\" y2=\"36\"/>" +
        "<line class=\"ln\" x1=\"26\" y1=\"124\" x2=\"83.1\" y2=\"36\"/><line class=\"ac\" x1=\"83.1\" y1=\"36\" x2=\"140.3\" y2=\"124\"/>" +
        "<line class=\"ln\" x1=\"140.3\" y1=\"124\" x2=\"197.4\" y2=\"36\"/><line class=\"ln\" x1=\"197.4\" y1=\"36\" x2=\"254.6\" y2=\"124\"/>" +
        "<path class=\"thin\" d=\"M220.4 32 L227.4 36 L220.4 40\"/><path class=\"thin\" d=\"M261.6 120 L268.6 124 L261.6 128\"/>" +
        "<circle class=\"dt\" cx=\"26\" cy=\"124\" r=\"3\"/><circle class=\"dt\" cx=\"83.1\" cy=\"36\" r=\"3\"/><circle class=\"dt\" cx=\"140.3\" cy=\"124\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"197.4\" cy=\"36\" r=\"3\"/><circle class=\"dt\" cx=\"254.6\" cy=\"124\" r=\"3\"/><text x=\"26\" y=\"140\" text-anchor=\"middle\">A</text>" +
        "<text x=\"140.3\" y=\"140\" text-anchor=\"middle\">C</text><text x=\"254.6\" y=\"140\" text-anchor=\"middle\">E</text>" +
        "<text x=\"83.1\" y=\"28\" text-anchor=\"middle\">B</text><text x=\"197.4\" y=\"28\" text-anchor=\"middle\">D</text>" +
        "<path class=\"thin\" d=\"M93 51.1 A18 18 0 0 0 101.1 36\"/><path class=\"thin\" d=\"M130.5 108.9 A18 18 0 0 0 122.3 124\"/>" +
        "<text class=\"sm\" x=\"272\" y=\"28\" text-anchor=\"middle\">top chord</text><text class=\"sm\" x=\"83\" y=\"139\" text-anchor=\"middle\">bottom chord</text></svg>" +
        "</figure>" +
        "<p class=\"geo-given\">On a truss bridge, the top chord <strong>BD</strong> and the bottom chord <strong>AE</strong> are parallel. Straight beams zigzag between them. m∠DBC = (5x − 8)⁠° and m∠BCA = (3x + 18)⁠°.</p>",
      claims: [
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Solve for x using the two marked beam angles.",
          choices: [
            { letter: "A", text: "21.25" },
            { letter: "B", text: "5" },
            { letter: "C", text: "26" },
            { letter: "D", text: "13" }
          ],
          correct: "D"
        },
        {
          id: "pair",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "With BC as the transversal of the two chords, what kind of angle pair are ∠DBC and ∠BCA?",
          choices: [
            { letter: "A", text: "Corresponding angles" },
            { letter: "B", text: "Alternate interior angles" },
            { letter: "C", text: "Same-side interior angles" },
            { letter: "D", text: "Alternate exterior angles" }
          ],
          correct: "B"
        },
        {
          id: "angle-dbc",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠DBC?",
          choices: [
            { letter: "A", text: "13°" },
            { letter: "B", text: "123°" },
            { letter: "C", text: "57°" },
            { letter: "D", text: "33°" }
          ],
          correct: "C"
        },
        {
          id: "inspector",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "An inspector finds m∠BAC = 57° and m∠DCE = 57°. Which statement is proved?",
          choices: [
            { letter: "A", text: "AB ∥ CD, by the Converse of the Corresponding Angles Postulate" },
            { letter: "B", text: "AB ∥ CD, by the Corresponding Angles Postulate" },
            { letter: "C", text: "AB ∥ CD, by the Converse of the Alternate Interior Angles Theorem" },
            { letter: "D", text: "AB ∥ CD, by the Converse of the Same-Side Interior Angles Theorem" }
          ],
          correct: "A"
        },
        {
          id: "ssi",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Along transversal BC, which two angles are same-side interior angles?",
          choices: [
            { letter: "A", text: "∠DBC and ∠BCA" },
            { letter: "B", text: "∠DBC and ∠BCE" },
            { letter: "C", text: "∠BCA and ∠BCE" },
            { letter: "D", text: "∠DBC and ∠DCE" }
          ],
          correct: "B"
        },
        {
          id: "angle-bce",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠BCE?",
          choices: [
            { letter: "A", text: "57°" },
            { letter: "B", text: "33°" },
            { letter: "C", text: "147°" },
            { letter: "D", text: "123°" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt2-sky-subway-escalator",
      family: "GEO",
      mode: "sky",
      title: "The Subway Escalator",
      kind: "Lines · G.RLT.2",
      blurb: "Two parallel floors, one escalator and angles written in x.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Side view: parallel floor lines g (lower) and h (upper), with escalator line e rising to the right from P on g to Q on h. At P, angle 1 is above g and right of e, angle 5 above g and left of e. At Q, angle 2 is below h and left of e, angle 3 above h and left of e, angle 4 below h and right of e\">" +
        "<line class=\"ln\" x1=\"14\" y1=\"126\" x2=\"300\" y2=\"126\"/><line class=\"ln\" x1=\"14\" y1=\"40\" x2=\"300\" y2=\"40\"/>" +
        "<line class=\"ac\" x1=\"38.7\" y1=\"140.9\" x2=\"224.1\" y2=\"25.1\"/><path class=\"thin\" d=\"M33 122 L40 126 L33 130\"/>" +
        "<path class=\"thin\" d=\"M33 36 L40 40 L33 44\"/><circle class=\"dt\" cx=\"60\" cy=\"126\" r=\"3\"/><circle class=\"dt\" cx=\"202.8\" cy=\"40\" r=\"3\"/>" +
        "<text x=\"72\" y=\"143\" text-anchor=\"middle\">P</text><text x=\"178.8\" y=\"33\" text-anchor=\"middle\">Q</text>" +
        "<text x=\"100.1\" y=\"118.4\" text-anchor=\"middle\">1</text><text x=\"55.5\" y=\"116.7\" text-anchor=\"middle\">5</text>" +
        "<text x=\"162.8\" y=\"57.6\" text-anchor=\"middle\">2</text><text x=\"199.7\" y=\"27.3\" text-anchor=\"middle\">3</text>" +
        "<text x=\"207.3\" y=\"59.3\" text-anchor=\"middle\">4</text><text x=\"306\" y=\"131\">g</text><text x=\"306\" y=\"45\">h</text>" +
        "<text class=\"acc\" x=\"230.1\" y=\"29.1\">e</text><text class=\"sm\" x=\"250\" y=\"66\" text-anchor=\"middle\">upper floor</text>" +
        "<text class=\"sm\" x=\"250\" y=\"118\" text-anchor=\"middle\">lower floor</text></svg></figure>" +
        "<p class=\"geo-given\">In a subway station, the lower floor <strong>g</strong> and the upper floor <strong>h</strong> are parallel. The handrail of an escalator runs along line <strong>e</strong> from <strong>P</strong> to <strong>Q</strong>. m∠1 = (4x − 1)⁠° and m∠2 = (x + 26)⁠°.</p>",
      claims: [
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is the value of x for the escalator?",
          choices: [
            { letter: "A", text: "31" },
            { letter: "B", text: "27" },
            { letter: "C", text: "9" },
            { letter: "D", text: "5.4" }
          ],
          correct: "C"
        },
        {
          id: "angle-1",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠1, the angle between the escalator and the lower floor?",
          choices: [
            { letter: "A", text: "35°" },
            { letter: "B", text: "55°" },
            { letter: "C", text: "145°" },
            { letter: "D", text: "9°" }
          ],
          correct: "A"
        },
        {
          id: "ssi-1",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which angle is a same-side interior angle with ∠1?",
          choices: [
            { letter: "A", text: "∠2" },
            { letter: "B", text: "∠4" },
            { letter: "C", text: "∠5" },
            { letter: "D", text: "∠3" }
          ],
          correct: "B"
        },
        {
          id: "angle-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠3, above the upper floor?",
          choices: [
            { letter: "A", text: "35°" },
            { letter: "B", text: "55°" },
            { letter: "C", text: "325°" },
            { letter: "D", text: "145°" }
          ],
          correct: "D"
        },
        {
          id: "inspector",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "An inspector measures m∠1 = 35° and m∠4 = 145°. Which statement proves that the floors are parallel?",
          choices: [
            { letter: "A", text: "Alternate interior angles are congruent, so g ∥ h." },
            { letter: "B", text: "∠1 and ∠4 form a linear pair, so g ∥ h." },
            { letter: "C", text: "Same-side interior angles are supplementary, so g ∥ h." },
            { letter: "D", text: "∠1 and ∠4 are not congruent, so g is not parallel to h." }
          ],
          correct: "C"
        },
        {
          id: "pair-2-5",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Which statement about ∠2 and ∠5 is true?",
          choices: [
            { letter: "A", text: "They are same-side interior angles, so they are supplementary." },
            { letter: "B", text: "They are alternate interior angles, so they are congruent." },
            { letter: "C", text: "They are corresponding angles, so they are congruent." },
            { letter: "D", text: "They are vertical angles, so they are congruent." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt2-sky-kite-strings",
      family: "GEO",
      mode: "sky",
      title: "Kites on the Boardwalk",
      kind: "Lines · G.RLT.2",
      blurb: "Two kite strings tied to a boardwalk: when are they parallel?",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A straight boardwalk edge g with points A (left) and B (right). A kite string rises to the upper right from each point. At A, angle 1 is above g and right of the string, angle 2 is left of it. At B, angle 3 is above g and left of the string, angle 4 is right of it\">" +
        "<line class=\"ln\" x1=\"14\" y1=\"128\" x2=\"300\" y2=\"128\"/><line class=\"ln\" x1=\"44\" y1=\"128\" x2=\"121.6\" y2=\"41.8\"/>" +
        "<line class=\"ln\" x1=\"164\" y1=\"128\" x2=\"241.6\" y2=\"41.8\"/><polygon class=\"sh\" points=\"121.6,41.8 123.7,27.5 141.7,19.5 135.6,38.2\"/>" +
        "<polygon class=\"sh\" points=\"241.6,41.8 243.7,27.5 261.7,19.5 255.6,38.2\"/><circle class=\"dt\" cx=\"44\" cy=\"128\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"164\" cy=\"128\" r=\"3\"/><text x=\"44\" y=\"144\" text-anchor=\"middle\">A</text><text x=\"164\" y=\"144\" text-anchor=\"middle\">B</text>" +
        "<text x=\"300\" y=\"121\" text-anchor=\"end\">g</text><text x=\"67.8\" y=\"122.4\" text-anchor=\"middle\">1</text>" +
        "<text x=\"37.9\" y=\"119.3\" text-anchor=\"middle\">2</text><text x=\"157.9\" y=\"119.3\" text-anchor=\"middle\">3</text>" +
        "<text x=\"187.8\" y=\"122.4\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"258\" y=\"141\" text-anchor=\"middle\">boardwalk</text></svg></figure>" +
        "<p class=\"geo-given\">Two kites are tied at <strong>A</strong> and <strong>B</strong> on the straight edge of a boardwalk, <strong>g</strong>. Both strings are pulled straight. m∠1 = 48° and m∠3 = (4x + 8)⁠°.</p>",
      claims: [
        {
          id: "pair-1-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "∠1 and ∠3 are what kind of angle pair?",
          choices: [
            { letter: "A", text: "Same-side interior angles" },
            { letter: "B", text: "Alternate interior angles" },
            { letter: "C", text: "Corresponding angles" },
            { letter: "D", text: "A linear pair" }
          ],
          correct: "A"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "For the two strings to be parallel, what must x be?",
          choices: [
            { letter: "A", text: "10" },
            { letter: "B", text: "76" },
            { letter: "C", text: "31" },
            { letter: "D", text: "8.5" }
          ],
          correct: "C"
        },
        {
          id: "reason",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "When x = 31, which reason proves that the strings are parallel?",
          choices: [
            { letter: "A", text: "Same-Side Interior Angles Theorem" },
            { letter: "B", text: "Converse of the Alternate Interior Angles Theorem" },
            { letter: "C", text: "Converse of the Corresponding Angles Postulate" },
            { letter: "D", text: "Converse of the Same-Side Interior Angles Theorem" }
          ],
          correct: "D"
        },
        {
          id: "gust",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "A gust moves kite B, and now m∠3 = 127°. Which statement is true?",
          choices: [
            { letter: "A", text: "The strings are parallel, since ∠3 is still obtuse." },
            { letter: "B", text: "The strings are not parallel, since 48° + 127° ≠ 180°." },
            { letter: "C", text: "The strings are parallel, since ∠1 did not change." },
            { letter: "D", text: "The strings are not parallel, since 127° ≠ 48°." }
          ],
          correct: "B"
        },
        {
          id: "angle-4",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "When x = 31, what is m∠4?",
          choices: [
            { letter: "A", text: "48°" },
            { letter: "B", text: "132°" },
            { letter: "C", text: "42°" },
            { letter: "D", text: "312°" }
          ],
          correct: "A"
        },
        {
          id: "pair-2-3",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "What kind of angle pair are ∠2 and ∠3?",
          choices: [
            { letter: "A", text: "Same-side interior angles" },
            { letter: "B", text: "Alternate exterior angles" },
            { letter: "C", text: "Corresponding angles" },
            { letter: "D", text: "Vertical angles" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt2-sky-marina-docks",
      family: "GEO",
      mode: "sky",
      title: "Proof at the Marina",
      kind: "Lines · G.RLT.2",
      blurb: "Two docks perpendicular to one boardwalk, a proof and a rope.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A vertical boardwalk line t on the left. Docks d (top) and e (bottom) run right from t, each meeting t at a right angle. Angle 1 is above d and right of t; angle 5 is above e and right of t. Rope r crosses d and e, rising to the right: angle 6 is below d and left of r; angle 7 is above e and right of r; angle 8 is below e and right of r\">" +
        "<line class=\"ln\" x1=\"76\" y1=\"8\" x2=\"76\" y2=\"144\"/><line class=\"ln\" x1=\"76\" y1=\"40\" x2=\"298\" y2=\"40\"/>" +
        "<line class=\"ln\" x1=\"76\" y1=\"112\" x2=\"298\" y2=\"112\"/><line class=\"ac\" x1=\"115.9\" y1=\"132.8\" x2=\"233.6\" y2=\"19.2\"/>" +
        "<path class=\"thin\" d=\"M86 40 L86 30 L76 30\"/><path class=\"thin\" d=\"M86 112 L86 102 L76 102\"/><circle class=\"dt\" cx=\"76\" cy=\"40\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"76\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"212\" cy=\"40\" r=\"3\"/><circle class=\"dt\" cx=\"137.4\" cy=\"112\" r=\"3\"/>" +
        "<text x=\"68\" y=\"20\" text-anchor=\"end\">t</text><text x=\"298\" y=\"32\" text-anchor=\"end\">d</text><text x=\"298\" y=\"104\" text-anchor=\"end\">e</text>" +
        "<text class=\"acc\" x=\"241.6\" y=\"23.2\">r</text><text x=\"94.4\" y=\"26.6\" text-anchor=\"middle\">1</text>" +
        "<text x=\"94.4\" y=\"98.6\" text-anchor=\"middle\">5</text><text x=\"186\" y=\"55.5\" text-anchor=\"middle\">6</text>" +
        "<text x=\"163.4\" y=\"106.5\" text-anchor=\"middle\">7</text><text x=\"143.1\" y=\"130.9\" text-anchor=\"middle\">8</text>" +
        "<text class=\"sm\" x=\"66\" y=\"80\" text-anchor=\"end\">boardwalk</text><text class=\"sm\" x=\"262\" y=\"140\" text-anchor=\"middle\">water</text></svg></figure>" +
        "<p class=\"geo-given\">At a marina, docks <strong>d</strong> and <strong>e</strong> stick out from a straight boardwalk, <strong>t</strong>. A rope, <strong>r</strong>, is stretched across both docks, with m∠6 = (x + 32)⁠° and m∠7 = (3x + 8)⁠°. Given: d ⊥ t and e ⊥ t. Prove: d ∥ e.</p>" +
        "<table class=\"geo-proof\"><tr><th>Statement</th><th>Reason</th></tr><tr><td>1. d ⊥ t and e ⊥ t</td><td>Given</td></tr><tr>" +
        "<td>2. ∠1 and ∠5 are right angles.</td><td>____ (a)</td></tr><tr><td>3. ∠1 ≅ ∠5</td><td>____ (b)</td></tr><tr><td>4. d ∥ e</td><td>____ (c)</td></tr>" +
        "</table>",
      claims: [
        {
          id: "reason-a",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the marina proof, which reason fills blank (a)?",
          choices: [
            { letter: "A", text: "Linear Pair Postulate" },
            { letter: "B", text: "Definition of perpendicular lines" },
            { letter: "C", text: "Vertical Angles Theorem" },
            { letter: "D", text: "Converse of the Corresponding Angles Postulate" }
          ],
          correct: "B"
        },
        {
          id: "reason-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the marina proof, which reason fills blank (b)?",
          choices: [
            { letter: "A", text: "Corresponding Angles Postulate" },
            { letter: "B", text: "Vertical Angles Theorem" },
            { letter: "C", text: "Linear Pair Postulate" },
            { letter: "D", text: "All right angles are congruent." }
          ],
          correct: "D"
        },
        {
          id: "reason-c",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "In the marina proof, which reason fills blank (c)?",
          choices: [
            { letter: "A", text: "Converse of the Corresponding Angles Postulate" },
            { letter: "B", text: "Corresponding Angles Postulate" },
            { letter: "C", text: "Converse of the Alternate Interior Angles Theorem" },
            { letter: "D", text: "All right angles are congruent." }
          ],
          correct: "A"
        },
        {
          id: "pair-6-7",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "Along rope r, what kind of angle pair are ∠6 and ∠7?",
          choices: [
            { letter: "A", text: "Corresponding angles" },
            { letter: "B", text: "Same-side interior angles" },
            { letter: "C", text: "Alternate interior angles" },
            { letter: "D", text: "Vertical angles" }
          ],
          correct: "C"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Since d ∥ e, what is the value of x for the rope angles?",
          choices: [
            { letter: "A", text: "12" },
            { letter: "B", text: "35" },
            { letter: "C", text: "20" },
            { letter: "D", text: "24" }
          ],
          correct: "A"
        },
        {
          id: "angle-8",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "Since d ∥ e, what is m∠8, where the rope crosses dock e?",
          choices: [
            { letter: "A", text: "44°" },
            { letter: "B", text: "136°" },
            { letter: "C", text: "46°" },
            { letter: "D", text: "224°" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt2-sky-drone-highways",
      family: "GEO",
      mode: "sky",
      title: "The Drone Between the Highways",
      kind: "Lines · G.RLT.2",
      blurb: "A drone's V-shaped flight between two parallel highways.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Parallel highways j (top) and k (bottom). A drone path goes from A on j down to B on k, then up to C on j, to the right of A. P is on k left of B and Q is on k right of B. Angle BAC is marked 41 degrees and angle BCA is marked 68 degrees; angle ABC is marked\">" +
        "<line class=\"ln\" x1=\"14\" y1=\"34\" x2=\"300\" y2=\"34\"/><line class=\"ln\" x1=\"14\" y1=\"124\" x2=\"300\" y2=\"124\"/>" +
        "<path class=\"thin\" d=\"M285 30 L292 34 L285 38\"/><path class=\"thin\" d=\"M285 120 L292 124 L285 128\"/>" +
        "<line class=\"ac\" x1=\"40\" y1=\"34\" x2=\"143.5\" y2=\"124\"/><line class=\"ac\" x1=\"143.5\" y1=\"124\" x2=\"179.9\" y2=\"34\"/>" +
        "<circle class=\"dt\" cx=\"40\" cy=\"34\" r=\"3\"/><circle class=\"dt\" cx=\"143.5\" cy=\"124\" r=\"3\"/><circle class=\"dt\" cx=\"179.9\" cy=\"34\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"30\" cy=\"124\" r=\"3\"/><circle class=\"dt\" cx=\"252\" cy=\"124\" r=\"3\"/><text x=\"40\" y=\"25\" text-anchor=\"middle\">A</text>" +
        "<text x=\"179.9\" y=\"25\" text-anchor=\"middle\">C</text><text x=\"143.5\" y=\"141\" text-anchor=\"middle\">B</text>" +
        "<text x=\"30\" y=\"141\" text-anchor=\"middle\">P</text><text x=\"252\" y=\"141\" text-anchor=\"middle\">Q</text><text x=\"306\" y=\"39\">j</text>" +
        "<text x=\"306\" y=\"129\">k</text><path class=\"thin\" d=\"M56.6 48.4 A22 22 0 0 0 62 34\"/><text x=\"77.5\" y=\"53\" text-anchor=\"middle\">41°</text>" +
        "<path class=\"thin\" d=\"M163.9 34 A16 16 0 0 0 173.9 48.8\"/><text x=\"154.2\" y=\"56.3\" text-anchor=\"middle\">68°</text>" +
        "<path class=\"thin\" d=\"M148.8 111 A14 14 0 0 0 133 114.8\"/><text class=\"sm\" x=\"232\" y=\"56\" text-anchor=\"middle\">highway</text>" +
        "<text class=\"sm\" x=\"232\" y=\"116\" text-anchor=\"middle\">highway</text></svg></figure>" +
        "<p class=\"geo-given\">Highways <strong>j</strong> and <strong>k</strong> are parallel. A drone flies straight from <strong>A</strong> to <strong>B</strong>, then from B to <strong>C</strong>. A and C are on j; <strong>P</strong>, B and <strong>Q</strong> are on k. m∠BAC = 41° and m∠BCA = 68°.</p>",
      claims: [
        {
          id: "pair-a-b",
          sol: "G.RLT.2",
          sub: "G.RLT.2.1",
          stem: "With AB as the transversal of j and k, what kind of angle pair are ∠BAC and ∠PBA?",
          choices: [
            { letter: "A", text: "Corresponding angles" },
            { letter: "B", text: "Same-side interior angles" },
            { letter: "C", text: "Vertical angles" },
            { letter: "D", text: "Alternate interior angles" }
          ],
          correct: "D"
        },
        {
          id: "angle-qbc",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠QBC?",
          choices: [
            { letter: "A", text: "112°" },
            { letter: "B", text: "68°" },
            { letter: "C", text: "41°" },
            { letter: "D", text: "22°" }
          ],
          correct: "B"
        },
        {
          id: "angle-abc",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "What is m∠ABC, the angle between the drone's two paths at B?",
          choices: [
            { letter: "A", text: "109°" },
            { letter: "B", text: "139°" },
            { letter: "C", text: "71°" },
            { letter: "D", text: "251°" }
          ],
          correct: "C"
        },
        {
          id: "reason",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "Which reason shows that ∠QBC ≅ ∠BCA?",
          choices: [
            { letter: "A", text: "Alternate Interior Angles Theorem" },
            { letter: "B", text: "Converse of the Alternate Interior Angles Theorem" },
            { letter: "C", text: "Vertical Angles Theorem" },
            { letter: "D", text: "Corresponding Angles Postulate" }
          ],
          correct: "A"
        },
        {
          id: "solve-x",
          sol: "G.RLT.2",
          sub: "G.RLT.2.3",
          stem: "On a second flight between the same highways, m∠BAC = (4x − 6)⁠°, m∠BCA = (2x + 21)⁠° and m∠ABC = (3x + 39)⁠°. What is x?",
          choices: [
            { letter: "A", text: "34" },
            { letter: "B", text: "14" },
            { letter: "C", text: "20" },
            { letter: "D", text: "4" }
          ],
          correct: "B"
        },
        {
          id: "pilot",
          sol: "G.RLT.2",
          sub: "G.RLT.2.2",
          stem: "A pilot claims m∠ABC would still be 71° even if j and k were not parallel. Why is she wrong?",
          choices: [
            { letter: "A", text: "The angles at B would add to 360° instead." },
            { letter: "B", text: "She is right; the angles at B always add to 180°." },
            { letter: "C", text: "She is right; alternate interior angles are always congruent." },
            { letter: "D", text: "∠PBA and ∠QBC would no longer have to be 41° and 68°." }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
