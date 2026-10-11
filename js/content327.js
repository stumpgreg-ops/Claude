/* SOL Labyrinth — Geometry game (family GEO), polygons: G.PC.2 (Virginia 2023 Geometry SOL), v5.20 packs for the
   ring mode, Wolf Ring (art, design, music and making things) and the worms mode, Root Worms (nature and the outdoors).
   Original items only. A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in
   css/after-hours.css) and the given facts, then six questions about it. Every numeric answer was computed, and
   every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-pc2-ring-rose-window",
      family: "GEO",
      mode: "ring",
      title: "The Rose Window",
      kind: "Polygons · G.PC.2",
      blurb: "A stained-glass window in a regular 14-sided frame.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A rose window: a regular 14-sided frame with a ring of small round panes inside. Angle 1 is the interior angle at the left corner. At the upper right, one side is extended as a dashed line, and angle 2, in gold, is the exterior angle between the extension and the next side\"><polygon class=\"sh2\" points=\"234,84 226.7,116.1 206.1,141.9 176.5,156.1 143.5,156.1 113.9,141.9 93.3,116.1 86,84 93.3,51.9 113.9,26.1 143.5,11.9 176.5,11.9 206.1,26.1 226.7,51.9\"/><circle class=\"thin\" cx=\"160\" cy=\"84\" r=\"20\"/><circle class=\"thin\" cx=\"196.1\" cy=\"92.2\" r=\"8\"/><circle class=\"thin\" cx=\"188.9\" cy=\"107.1\" r=\"8\"/><circle class=\"thin\" cx=\"176.1\" cy=\"117.3\" r=\"8\"/><circle class=\"thin\" cx=\"160\" cy=\"121\" r=\"8\"/><circle class=\"thin\" cx=\"143.9\" cy=\"117.3\" r=\"8\"/><circle class=\"thin\" cx=\"131.1\" cy=\"107.1\" r=\"8\"/><circle class=\"thin\" cx=\"123.9\" cy=\"92.2\" r=\"8\"/><circle class=\"thin\" cx=\"123.9\" cy=\"75.8\" r=\"8\"/><circle class=\"thin\" cx=\"131.1\" cy=\"60.9\" r=\"8\"/><circle class=\"thin\" cx=\"143.9\" cy=\"50.7\" r=\"8\"/><circle class=\"thin\" cx=\"160\" cy=\"47\" r=\"8\"/><circle class=\"thin\" cx=\"176.1\" cy=\"50.7\" r=\"8\"/><circle class=\"thin\" cx=\"188.9\" cy=\"60.9\" r=\"8\"/><circle class=\"thin\" cx=\"196.1\" cy=\"75.8\" r=\"8\"/><path class=\"thin\" d=\"M88.4 73.3 A11 11 0 0 1 88.4 94.7\"/><text x=\"107\" y=\"89\" text-anchor=\"middle\">1</text><line class=\"ln dash\" x1=\"206.1\" y1=\"26.1\" x2=\"269.2\" y2=\"56.5\"/><path class=\"ac\" d=\"M242.2 43.5 A40 40 0 0 1 231.1 57.4\"/><text class=\"acc\" x=\"248.4\" y=\"64.8\" text-anchor=\"middle\">2</text></svg></figure><p class=\"geo-given\">A stained-glass rose window has a frame shaped like a regular 14-gon (14 congruent sides and 14 congruent angles). ∠1 is an interior angle of the frame. One side is extended (dashed), and ∠2 is the exterior angle it makes.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the rose window's frame?",
          choices: [
            { letter: "A", text: "2520°" },
            { letter: "B", text: "2160°" },
            { letter: "C", text: "2340°" },
            { letter: "D", text: "1980°" }
          ],
          correct: "B"
        },
        {
          id: "angle1",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "To the nearest tenth of a degree, what is m∠1?",
          choices: [
            { letter: "A", text: "25.7°" },
            { letter: "B", text: "167.1°" },
            { letter: "C", text: "154.3°" },
            { letter: "D", text: "141.4°" }
          ],
          correct: "C"
        },
        {
          id: "angle2",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "To the nearest tenth of a degree, what is m∠2, the gold exterior angle?",
          choices: [
            { letter: "A", text: "25.7°" },
            { letter: "B", text: "154.3°" },
            { letter: "C", text: "12.9°" },
            { letter: "D", text: "27.7°" }
          ],
          correct: "A"
        },
        {
          id: "double",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "A designer plans a regular window frame with twice as many sides. To the nearest tenth of a degree, what is each exterior angle of that frame?",
          choices: [
            { letter: "A", text: "51.4°" },
            { letter: "B", text: "25.7°" },
            { letter: "C", text: "167.1°" },
            { letter: "D", text: "12.9°" }
          ],
          correct: "D"
        },
        {
          id: "smaller",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A smaller rose window has a regular frame whose exterior angles each measure 14.4°. How many sides does that frame have?",
          choices: [
            { letter: "A", text: "165.6" },
            { letter: "B", text: "25" },
            { letter: "C", text: "12.5" },
            { letter: "D", text: "27" }
          ],
          correct: "B"
        },
        {
          id: "larger",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A larger rose window has a regular frame whose interior angles each measure 175°. How many sides does that frame have?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "about 2.1" },
            { letter: "C", text: "72" },
            { letter: "D", text: "36" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-ring-mirror-frame",
      family: "GEO",
      mode: "ring",
      title: "The Twelve-Sided Mirror Frame",
      kind: "Polygons · G.PC.2",
      blurb: "Twelve wood strips, mitered at every corner.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A mirror frame seen from the front: an outer regular 12-gon and an inner 12-gon, joined at every corner by a short miter cut. The top strip of the frame is shaded gold. Angle 1 is a corner angle of the outer edge at the left. Angle 2, in gold, is at the right end of the top strip, between its outer edge and the miter cut\"><polygon class=\"sh2\" points=\"208.3,97.9 195.4,120.4 172.9,133.3 147.1,133.3 124.6,120.4 111.7,97.9 111.7,72.1 124.6,49.6 147.1,36.7 172.9,36.7 195.4,49.6 208.3,72.1\"/><polygon class=\"sh\" points=\"139,6.8 181,6.8 172.9,36.7 147.1,36.7\"/><polygon class=\"ln\" points=\"238.2,106 217.3,142.3 181,163.2 139,163.2 102.7,142.3 81.8,106 81.8,64 102.7,27.7 139,6.8 181,6.8 217.3,27.7 238.2,64\"/><polygon class=\"ln\" points=\"208.3,97.9 195.4,120.4 172.9,133.3 147.1,133.3 124.6,120.4 111.7,97.9 111.7,72.1 124.6,49.6 147.1,36.7 172.9,36.7 195.4,49.6 208.3,72.1\"/><line class=\"thin\" x1=\"208.3\" y1=\"97.9\" x2=\"238.2\" y2=\"106\"/><line class=\"thin\" x1=\"195.4\" y1=\"120.4\" x2=\"217.3\" y2=\"142.3\"/><line class=\"thin\" x1=\"172.9\" y1=\"133.3\" x2=\"181\" y2=\"163.2\"/><line class=\"thin\" x1=\"147.1\" y1=\"133.3\" x2=\"139\" y2=\"163.2\"/><line class=\"thin\" x1=\"124.6\" y1=\"120.4\" x2=\"102.7\" y2=\"142.3\"/><line class=\"thin\" x1=\"111.7\" y1=\"97.9\" x2=\"81.8\" y2=\"106\"/><line class=\"thin\" x1=\"111.7\" y1=\"72.1\" x2=\"81.8\" y2=\"64\"/><line class=\"thin\" x1=\"124.6\" y1=\"49.6\" x2=\"102.7\" y2=\"27.7\"/><line class=\"thin\" x1=\"147.1\" y1=\"36.7\" x2=\"139\" y2=\"6.8\"/><line class=\"thin\" x1=\"172.9\" y1=\"36.7\" x2=\"181\" y2=\"6.8\"/><line class=\"thin\" x1=\"195.4\" y1=\"49.6\" x2=\"217.3\" y2=\"27.7\"/><line class=\"thin\" x1=\"208.3\" y1=\"72.1\" x2=\"238.2\" y2=\"64\"/><path class=\"thin\" d=\"M88.3 52.8 A13 13 0 0 1 81.8 77\"/><text x=\"106.1\" y=\"63.4\" text-anchor=\"middle\">1</text><path class=\"ac\" d=\"M178.4 16.4 A10 10 0 0 1 171 6.8\"/><text class=\"acc\" x=\"165.9\" y=\"23.3\" text-anchor=\"middle\">2</text></svg></figure><p class=\"geo-given\">A mirror frame is made of 12 congruent wood strips. Its outer edge is a regular 12-gon. At each corner, two strips meet along a miter cut that splits the corner angle in half. ∠1 is a corner angle of the outer edge. ∠2 is the angle at one end of the gold strip, between its outer edge and the miter cut.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the corner angles of the frame's outer edge?",
          choices: [
            { letter: "A", text: "1800°" },
            { letter: "B", text: "2160°" },
            { letter: "C", text: "1980°" },
            { letter: "D", text: "360°" }
          ],
          correct: "A"
        },
        {
          id: "angle1",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠1, the corner angle of the outer edge?",
          choices: [
            { letter: "A", text: "30°" },
            { letter: "B", text: "180°" },
            { letter: "C", text: "165°" },
            { letter: "D", text: "150°" }
          ],
          correct: "D"
        },
        {
          id: "angle2",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠2, the angle of the miter cut at the end of the gold strip?",
          choices: [
            { letter: "A", text: "150°" },
            { letter: "B", text: "15°" },
            { letter: "C", text: "75°" },
            { letter: "D", text: "30°" }
          ],
          correct: "C"
        },
        {
          id: "not",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement about the outer edge of the frame is NOT true?",
          choices: [
            { letter: "A", text: "Each exterior angle measures 30°." },
            { letter: "B", text: "Each corner angle is 12 times each exterior angle." },
            { letter: "C", text: "The exterior angles add to 360°." },
            { letter: "D", text: "Each corner angle and its exterior angle add to 180°." }
          ],
          correct: "B"
        },
        {
          id: "miter",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "For another regular frame, a framer cuts every miter at 84°, half of each corner angle. How many strips does that frame have?",
          choices: [
            { letter: "A", text: "30" },
            { letter: "B", text: "about 3.8" },
            { letter: "C", text: "60" },
            { letter: "D", text: "168" }
          ],
          correct: "A"
        },
        {
          id: "round",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A nearly round mirror has a regular frame with corner angles of 177°. How many strips does that frame have?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "about 2.0" },
            { letter: "C", text: "60" },
            { letter: "D", text: "120" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc2-ring-mosaic-backsplash",
      family: "GEO",
      mode: "ring",
      title: "The Mosaic Backsplash",
      kind: "Polygons · G.PC.2",
      blurb: "Hexagon, square and triangle tiles around every corner.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A mosaic: a gold regular hexagon tile in the middle, a blue square tile on each of its six sides, and an equilateral triangle tile in each space between two squares. Point P is the right corner of the hexagon\"><polygon class=\"sh2\" points=\"200,81 180,115.6 214.6,135.6 234.6,101\"/><polygon class=\"sh2\" points=\"180,115.6 140,115.6 140,155.6 180,155.6\"/><polygon class=\"sh2\" points=\"140,115.6 120,81 85.4,101 105.4,135.6\"/><polygon class=\"sh2\" points=\"120,81 140,46.4 105.4,26.4 85.4,61\"/><polygon class=\"sh2\" points=\"140,46.4 180,46.4 180,6.4 140,6.4\"/><polygon class=\"sh2\" points=\"180,46.4 200,81 234.6,61 214.6,26.4\"/><polygon class=\"ln\" points=\"200,81 234.6,61 234.6,101\"/><polygon class=\"ln\" points=\"180,115.6 214.6,135.6 180,155.6\"/><polygon class=\"ln\" points=\"140,115.6 140,155.6 105.4,135.6\"/><polygon class=\"ln\" points=\"120,81 85.4,101 85.4,61\"/><polygon class=\"ln\" points=\"140,46.4 105.4,26.4 140,6.4\"/><polygon class=\"ln\" points=\"180,46.4 180,6.4 214.6,26.4\"/><polygon class=\"sh\" points=\"200,81 180,115.6 140,115.6 120,81 140,46.4 180,46.4\"/><circle class=\"dta\" cx=\"200\" cy=\"81\" r=\"3\"/><text class=\"acc\" x=\"221\" y=\"86\" text-anchor=\"middle\">P</text></svg></figure><p class=\"geo-given\">A mosaic backsplash uses tiles shaped like a regular hexagon, squares and equilateral triangles, all with equal sides. At each corner, such as <strong>P</strong>, one hexagon, two squares and one triangle meet with no gaps or overlaps.</p>",
      claims: [
        {
          id: "why",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which calculation shows why the four tiles at P leave no gap?",
          choices: [
            { letter: "A", text: "720° + 2(360°) + 180° = 1620°" },
            { letter: "B", text: "120° + 90° + 60° = 270°" },
            { letter: "C", text: "120° + 2(90°) + 60° = 360°" },
            { letter: "D", text: "60° + 2(90°) + 60° = 300°" }
          ],
          correct: "C"
        },
        {
          id: "kim",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Kim says, \"Four tiles meet at P, so each of their angles at P must be 90°.\" Which is true?",
          choices: [
            { letter: "A", text: "No: the angles differ but add to 360°." },
            { letter: "B", text: "Yes: 360° ÷ 4 = 90° for each tile." },
            { letter: "C", text: "No: the angles at P add to 720°." },
            { letter: "D", text: "Yes: the hexagon's angle at P is 90°." }
          ],
          correct: "A"
        },
        {
          id: "gap",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "A tile setter tries a corner with only one hexagon, one square and one triangle. How large is the gap left at that corner?",
          choices: [
            { letter: "A", text: "270°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "150°" },
            { letter: "D", text: "210°" }
          ],
          correct: "B"
        },
        {
          id: "third",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "At one point, a square, a regular pentagon and one other regular polygon fit with no gap or overlap. How many sides does the other polygon have?",
          choices: [
            { letter: "A", text: "162" },
            { letter: "B", text: "about 2.2" },
            { letter: "C", text: "10" },
            { letter: "D", text: "20" }
          ],
          correct: "D"
        },
        {
          id: "omar",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Omar says regular pentagon tiles alone could cover the wall, because 5 · 72° = 360°. What is his error?",
          choices: [
            { letter: "A", text: "Nothing: 5 · 72° = 360°, so they tile." },
            { letter: "B", text: "Each pentagon angle is 120°, not 72°." },
            { letter: "C", text: "72° is the exterior angle; 360 ÷ 108 is not whole." },
            { letter: "D", text: "Pentagons tile, but only with squares." }
          ],
          correct: "C"
        },
        {
          id: "catalog",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A catalog tile is a regular polygon with exterior angles of 36°. Could these tiles alone cover the wall? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: its 144° angles do not divide 360°." },
            { letter: "B", text: "Yes: 360 ÷ 36 = 10 is whole." },
            { letter: "C", text: "Yes: it has 10 sides, an even number." },
            { letter: "D", text: "No: it has 5 sides with 36° angles." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc2-ring-band-logo",
      family: "GEO",
      mode: "ring",
      title: "The Band Logo",
      kind: "Polygons · G.PC.2",
      blurb: "An octagon and a pentagon share one side.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A logo: a regular octagon, shaded blue, and a regular pentagon to its right share one vertical side. P is the top end of the shared side. Angle 1, in gold, is the angle above P between the octagon's next side and the pentagon's next side\"><polygon class=\"sh2\" points=\"180.1,111 147.6,143.5 101.6,143.5 69.1,111 69.1,65 101.6,32.5 147.6,32.5 180.1,65\"/><polygon class=\"ln\" points=\"180.1,111 180.1,65 223.9,50.8 250.9,88 223.9,125.2\"/><path class=\"ac\" d=\"M167.4 52.3 A18 18 0 0 1 197.3 59.4\"/><text class=\"acc\" x=\"187.4\" y=\"39.9\" text-anchor=\"middle\">1</text><circle class=\"dt\" cx=\"180.1\" cy=\"65\" r=\"3\"/><text x=\"167.1\" y=\"82\" text-anchor=\"middle\">P</text></svg></figure><p class=\"geo-given\">A band's logo is a regular octagon and a regular pentagon that share one side. <strong>P</strong> is the top end of that side. ∠1 (gold) is the angle at P between the other two sides that meet there.</p>",
      claims: [
        {
          id: "oct",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of each interior angle of the octagon in the logo?",
          choices: [
            { letter: "A", text: "45°" },
            { letter: "B", text: "1080°" },
            { letter: "C", text: "157.5°" },
            { letter: "D", text: "135°" }
          ],
          correct: "D"
        },
        {
          id: "angle1",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠1, the gold angle above P?",
          choices: [
            { letter: "A", text: "243°" },
            { letter: "B", text: "117°" },
            { letter: "C", text: "153°" },
            { letter: "D", text: "27°" }
          ],
          correct: "B"
        },
        {
          id: "hex",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "The designer swaps the pentagon for a regular hexagon with the same side length, placed the same way. What would m∠1 be then?",
          choices: [
            { letter: "A", text: "105°" },
            { letter: "B", text: "255°" },
            { letter: "C", text: "165°" },
            { letter: "D", text: "15°" }
          ],
          correct: "A"
        },
        {
          id: "fill",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A new logo puts a regular octagon and a regular 12-gon (150° angles) side by side the same way. Could a regular polygon fill the angle left at P exactly? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: a square, since 75° is close to 90°." },
            { letter: "B", text: "No: no regular polygon has 75° angles." },
            { letter: "C", text: "Yes: a triangle, since 75° is more than 60°." },
            { letter: "D", text: "No: the gap is 105°, and no polygon has it." }
          ],
          correct: "B"
        },
        {
          id: "true",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement about the two shapes in the logo is true?",
          choices: [
            { letter: "A", text: "The octagon's exterior angles add to more than the pentagon's." },
            { letter: "B", text: "Each exterior angle of the pentagon is 108°." },
            { letter: "C", text: "The octagon's angles add to 1260°." },
            { letter: "D", text: "Each shape's exterior angles add to 360°." }
          ],
          correct: "D"
        },
        {
          id: "ratio",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A second logo uses a regular polygon whose interior angles are each 3 times its exterior angles. How many sides does it have?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "6" },
            { letter: "C", text: "8" },
            { letter: "D", text: "135" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-ring-jeweler-chart",
      family: "GEO",
      mode: "ring",
      title: "The Jeweler's Chart",
      kind: "Polygons · G.PC.2",
      blurb: "A chart of regular gem outlines, with one row in error.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 142\" role=\"img\" aria-label=\"A chart with four rows, A to D, and columns for the number of sides n, the angle sum, each interior angle and each exterior angle of a regular polygon. Row A: 36 sides, 6,120 degrees, 170 degrees, 10 degrees. Row B: 32 sides, angle sum unknown, 168.75 degrees, 11.25 degrees. Row C: n unknown, interior angle 172.8 degrees. Row D: 80 sides, 14,400 degrees, 175.5 degrees, 4.5 degrees\"><rect class=\"thin\" x=\"4\" y=\"4\" width=\"312\" height=\"134\"/><line class=\"thin\" x1=\"4\" y1=\"57\" x2=\"316\" y2=\"57\"/><line class=\"thin\" x1=\"4\" y1=\"84\" x2=\"316\" y2=\"84\"/><line class=\"thin\" x1=\"4\" y1=\"111\" x2=\"316\" y2=\"111\"/><line class=\"ln\" x1=\"4\" y1=\"30\" x2=\"316\" y2=\"30\"/><line class=\"thin\" x1=\"38\" y1=\"4\" x2=\"38\" y2=\"138\"/><line class=\"thin\" x1=\"84\" y1=\"4\" x2=\"84\" y2=\"138\"/><line class=\"thin\" x1=\"168\" y1=\"4\" x2=\"168\" y2=\"138\"/><line class=\"thin\" x1=\"246\" y1=\"4\" x2=\"246\" y2=\"138\"/><text class=\"sm\" x=\"21\" y=\"21\" text-anchor=\"middle\">Row</text><text class=\"sm\" x=\"61\" y=\"21\" text-anchor=\"middle\">n</text><text class=\"sm\" x=\"126\" y=\"21\" text-anchor=\"middle\">Angle sum</text><text class=\"sm\" x=\"207\" y=\"21\" text-anchor=\"middle\">Interior</text><text class=\"sm\" x=\"281\" y=\"21\" text-anchor=\"middle\">Exterior</text><text class=\"sm\" x=\"21\" y=\"47.5\" text-anchor=\"middle\">A</text><text x=\"61\" y=\"48.5\" text-anchor=\"middle\">36</text><text x=\"126\" y=\"48.5\" text-anchor=\"middle\">6,120°</text><text x=\"207\" y=\"48.5\" text-anchor=\"middle\">170°</text><text x=\"281\" y=\"48.5\" text-anchor=\"middle\">10°</text><text class=\"sm\" x=\"21\" y=\"74.5\" text-anchor=\"middle\">B</text><text x=\"61\" y=\"75.5\" text-anchor=\"middle\">32</text><text class=\"acc\" x=\"126\" y=\"75.5\" text-anchor=\"middle\">?</text><text x=\"207\" y=\"75.5\" text-anchor=\"middle\">168.75°</text><text x=\"281\" y=\"75.5\" text-anchor=\"middle\">11.25°</text><text class=\"sm\" x=\"21\" y=\"101.5\" text-anchor=\"middle\">C</text><text class=\"acc\" x=\"61\" y=\"102.5\" text-anchor=\"middle\">?</text><text x=\"207\" y=\"102.5\" text-anchor=\"middle\">172.8°</text><text class=\"sm\" x=\"21\" y=\"128.5\" text-anchor=\"middle\">D</text><text x=\"61\" y=\"129.5\" text-anchor=\"middle\">80</text><text x=\"126\" y=\"129.5\" text-anchor=\"middle\">14,400°</text><text x=\"207\" y=\"129.5\" text-anchor=\"middle\">175.5°</text><text x=\"281\" y=\"129.5\" text-anchor=\"middle\">4.5°</text></svg></figure><p class=\"geo-given\">A jeweler keeps a chart of regular polygon outlines for gems. Each row is one regular polygon. A gold ? marks an entry to find. In row D, exactly one entry is wrong.</p>",
      claims: [
        {
          id: "rowB",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What angle sum belongs in row B of the chart?",
          choices: [
            { letter: "A", text: "5,400°" },
            { letter: "B", text: "5,760°" },
            { letter: "C", text: "5,580°" },
            { letter: "D", text: "5,220°" }
          ],
          correct: "A"
        },
        {
          id: "rowC",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "How many sides does the gem outline in row C have?",
          choices: [
            { letter: "A", text: "about 2.1" },
            { letter: "B", text: "25" },
            { letter: "C", text: "50" },
            { letter: "D", text: "52" }
          ],
          correct: "C"
        },
        {
          id: "rowD",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which entry in row D is wrong, and what should it be?",
          choices: [
            { letter: "A", text: "the exterior angle; it should be 9°" },
            { letter: "B", text: "the interior angle; it should be 177.75°" },
            { letter: "C", text: "the angle sum; it should be 13,860°" },
            { letter: "D", text: "the angle sum; it should be 14,040°" }
          ],
          correct: "D"
        },
        {
          id: "every",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement is true for every row of a correct chart like this one?",
          choices: [
            { letter: "A", text: "Interior angle + exterior angle = 360°" },
            { letter: "B", text: "Interior angle + exterior angle = 180°" },
            { letter: "C", text: "The exterior angle is half the interior angle" },
            { letter: "D", text: "The angle sum is the same in every row" }
          ],
          correct: "B"
        },
        {
          id: "new",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "The jeweler adds a row for an outline with interior angles of 177.5°. How many sides does that outline have?",
          choices: [
            { letter: "A", text: "about 2.0" },
            { letter: "B", text: "144" },
            { letter: "C", text: "72" },
            { letter: "D", text: "146" }
          ],
          correct: "B"
        },
        {
          id: "column",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "The jeweler adds a column for the sum of the exterior angles. What goes in that column?",
          choices: [
            { letter: "A", text: "180° in every row" },
            { letter: "B", text: "n · 360° in each row" },
            { letter: "C", text: "360° in every row" },
            { letter: "D", text: "the same as the angle sum" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-ring-thrust-stage",
      family: "GEO",
      mode: "ring",
      title: "The Thrust Stage",
      kind: "Polygons · G.PC.2",
      blurb: "A seven-sided stage with angles in terms of x.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"A stage floor shaped like a convex heptagon ABCDEFG. The back wall AB is at the top, with right angles at A and B. The other five angles are labeled: C and G are (2x + 45) degrees, D and F are (3x − 15) degrees, and E, at the front, is (4x − 40) degrees\"><polygon class=\"sh2\" points=\"58,22 262,22 262,56 219.6,116.6 160,127.1 100.4,116.6 58,56\"/><path class=\"thin\" d=\"M68 22 L68 32 L58 32\"/><path class=\"thin\" d=\"M252 22 L252 32 L262 32\"/><circle class=\"dt\" cx=\"58\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"262\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"262\" cy=\"56\" r=\"3\"/><circle class=\"dt\" cx=\"219.6\" cy=\"116.6\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"127.1\" r=\"3\"/><circle class=\"dt\" cx=\"100.4\" cy=\"116.6\" r=\"3\"/><circle class=\"dt\" cx=\"58\" cy=\"56\" r=\"3\"/><text x=\"45.8\" y=\"20.2\" text-anchor=\"middle\">A</text><text x=\"274.2\" y=\"20.2\" text-anchor=\"middle\">B</text><text x=\"275.7\" y=\"58\" text-anchor=\"middle\">C</text><text x=\"231.4\" y=\"129.2\" text-anchor=\"middle\">D</text><text x=\"160\" y=\"146.1\" text-anchor=\"middle\">E</text><text x=\"88.6\" y=\"129.2\" text-anchor=\"middle\">F</text><text x=\"44.3\" y=\"58\" text-anchor=\"middle\">G</text><path class=\"thin\" d=\"M255.7 65 A11 11 0 0 1 262 45\"/><text class=\"sm\" x=\"221.9\" y=\"47.4\" text-anchor=\"middle\">(2x + 45)°</text><path class=\"thin\" d=\"M208.7 118.5 A11 11 0 0 1 225.9 107.6\"/><text class=\"sm\" x=\"199.1\" y=\"88.6\" text-anchor=\"middle\">(3x − 15)°</text><path class=\"thin\" d=\"M149.2 125.2 A11 11 0 0 1 170.8 125.2\"/><text class=\"sm\" x=\"160\" y=\"111.1\" text-anchor=\"middle\">(4x − 40)°</text><path class=\"thin\" d=\"M94.1 107.6 A11 11 0 0 1 111.3 118.5\"/><text class=\"sm\" x=\"120.9\" y=\"88.6\" text-anchor=\"middle\">(3x − 15)°</text><path class=\"thin\" d=\"M58 45 A11 11 0 0 1 64.3 65\"/><text class=\"sm\" x=\"98.1\" y=\"47.4\" text-anchor=\"middle\">(2x + 45)°</text><text class=\"sm\" x=\"160\" y=\"16\" text-anchor=\"middle\">back wall</text></svg></figure><p class=\"geo-given\">A thrust stage for a concert is the convex heptagon ABCDEFG. ∠A and ∠B are right angles. The other angle measures, in degrees, are shown in terms of x.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which equation uses the stage's seven angles to find x?",
          choices: [
            { letter: "A", text: "14x + 200 = 1080" },
            { letter: "B", text: "14x + 20 = 900" },
            { letter: "C", text: "14x + 200 = 360" },
            { letter: "D", text: "14x + 200 = 900" }
          ],
          correct: "D"
        },
        {
          id: "x",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Use the stage's angle sum to find the value of x.",
          choices: [
            { letter: "A", text: "50" },
            { letter: "B", text: "about 62.9" },
            { letter: "C", text: "about 64.3" },
            { letter: "D", text: "about 11.4" }
          ],
          correct: "A"
        },
        {
          id: "E",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠E, at the front of the stage?",
          choices: [
            { letter: "A", text: "160°" },
            { letter: "B", text: "200°" },
            { letter: "C", text: "20°" },
            { letter: "D", text: "about 128.6°" }
          ],
          correct: "A"
        },
        {
          id: "extD",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of an exterior angle of the stage at corner D?",
          choices: [
            { letter: "A", text: "135°" },
            { letter: "B", text: "225°" },
            { letter: "C", text: "about 51.4°" },
            { letter: "D", text: "45°" }
          ],
          correct: "D"
        },
        {
          id: "not",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement about the stage floor is NOT true?",
          choices: [
            { letter: "A", text: "∠C and ∠G are congruent." },
            { letter: "B", text: "Each of its angles is about 128.6°." },
            { letter: "C", text: "Its exterior angles add to 360°." },
            { letter: "D", text: "Its interior angles add to 900°." }
          ],
          correct: "B"
        },
        {
          id: "tour",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "On tour, the band uses a stage shaped like a regular polygon. Each interior angle is 140° more than each exterior angle. How many sides does that stage have?",
          choices: [
            { letter: "A", text: "9" },
            { letter: "B", text: "20" },
            { letter: "C", text: "18" },
            { letter: "D", text: "160" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-ring-bandstand-plan",
      family: "GEO",
      mode: "ring",
      title: "The Bandstand Plan",
      kind: "Polygons · G.PC.2",
      blurb: "A regular bandstand whose angles must be at least 158°.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 136\" role=\"img\" aria-label=\"Part of a bandstand plan: five posts joined by straight railings along the edge of a regular polygon floor. Angle 1 is the angle inside the floor at the middle post. At the next post to the right, the railing is extended as a dashed line, and angle 2, in gold, is the turn between the extension and the next railing\"><polygon class=\"sh2\" style=\"stroke:none\" points=\"58.9,79.1 105.8,50.1 160,40 214.2,50.1 261.1,79.1 281.5,106.3 281.5,132 38.5,132 38.5,106.3\"/><polyline class=\"ln\" points=\"58.9,79.1 105.8,50.1 160,40 214.2,50.1 261.1,79.1\"/><line class=\"thin dash\" x1=\"58.9\" y1=\"79.1\" x2=\"38.5\" y2=\"106.3\"/><line class=\"thin dash\" x1=\"261.1\" y1=\"79.1\" x2=\"281.5\" y2=\"106.3\"/><circle class=\"dt\" cx=\"58.9\" cy=\"79.1\" r=\"3\"/><circle class=\"dt\" cx=\"105.8\" cy=\"50.1\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"40\" r=\"3\"/><circle class=\"dt\" cx=\"214.2\" cy=\"50.1\" r=\"3\"/><circle class=\"dt\" cx=\"261.1\" cy=\"79.1\" r=\"3\"/><path class=\"thin\" d=\"M173.8 42.6 A14 14 0 0 1 146.2 42.6\"/><text x=\"160\" y=\"71\" text-anchor=\"middle\">1</text><line class=\"ln dash\" x1=\"214.2\" y1=\"50.1\" x2=\"269.2\" y2=\"60.4\"/><path class=\"ac\" d=\"M247.6 56.4 A34 34 0 0 1 243.1 68\"/><text class=\"acc\" x=\"258\" y=\"72.1\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"160\" y=\"112\" text-anchor=\"middle\">bandstand floor</text></svg></figure><p class=\"geo-given\">A town's new bandstand floor will be a regular polygon, with a post at each corner. The figure shows part of a plan. ∠1 is the angle inside the floor at a post, and ∠2 is the turn the railing makes there. The builders' rule: ∠1 must be at least 158°.</p>",
      claims: [
        {
          id: "fewest",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "What is the fewest number of posts the bandstand can have and still meet the builders' rule?",
          choices: [
            { letter: "A", text: "16" },
            { letter: "B", text: "3" },
            { letter: "C", text: "17" },
            { letter: "D", text: "9" }
          ],
          correct: "C"
        },
        {
          id: "fifteen",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "One plan uses 15 posts. Does it meet the builders' rule? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: each ∠1 is 156°, less than 158°." },
            { letter: "B", text: "No: each ∠1 is 24°, less than 158°." },
            { letter: "C", text: "Yes: each ∠1 is 168°, at least 158°." },
            { letter: "D", text: "Yes: each ∠1 is 180°, at least 158°." }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the largest turn ∠2 that the builders' rule allows?",
          choices: [
            { letter: "A", text: "158°" },
            { letter: "B", text: "22°" },
            { letter: "C", text: "202°" },
            { letter: "D", text: "11°" }
          ],
          correct: "B"
        },
        {
          id: "addpost",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Each post added to a regular floor plan adds one side. By how much does that raise the sum of the angles inside the floor?",
          choices: [
            { letter: "A", text: "360°" },
            { letter: "B", text: "158°" },
            { letter: "C", text: "0°" },
            { letter: "D", text: "180°" }
          ],
          correct: "D"
        },
        {
          id: "not",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement is NOT true for every regular floor that meets the builders' rule?",
          choices: [
            { letter: "A", text: "The turns add to 360°." },
            { letter: "B", text: "A floor with more posts has larger turns." },
            { letter: "C", text: "∠1 and ∠2 add to 180° at each post." },
            { letter: "D", text: "∠1 is larger than ∠2 at each post." }
          ],
          correct: "B"
        },
        {
          id: "exact",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "The town picks a plan in which every ∠1 measures exactly 171°. How many posts does that plan have?",
          choices: [
            { letter: "A", text: "9" },
            { letter: "B", text: "about 2.1" },
            { letter: "C", text: "40" },
            { letter: "D", text: "20" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-worms-sun-star",
      family: "GEO",
      mode: "worms",
      title: "The Sun Star",
      kind: "Polygons · G.PC.2",
      blurb: "The tips of 11 arms form a regular 11-gon.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A sun star with 11 arms. Segments join the tips of neighboring arms to make a regular 11-gon around the star. Angle 1 is the interior angle at the left tip. At the upper right, one side is extended as a dashed line, and angle 2, in gold, is the exterior angle\"><polygon class=\"sh2\" points=\"160,16 165.6,66.8 197.8,27.1 175.1,72.9 223.7,56.9 179.8,83.2 229.3,96 178.2,94.3 212.9,131.8 170.8,102.8 179.7,153.2 160,106 140.3,153.2 149.2,102.8 107.1,131.8 141.8,94.3 90.7,96 140.2,83.2 96.3,56.9 144.9,72.9 122.2,27.1 154.4,66.8\"/><polygon class=\"ln\" points=\"160,12 200,23.7 227.3,55.3 233.2,96.5 215.9,134.5 180.8,157 139.2,157 104.1,134.5 86.8,96.5 92.7,55.3 120,23.7\"/><circle class=\"thin\" cx=\"160\" cy=\"86\" r=\"9\"/><circle class=\"dt\" cx=\"160\" cy=\"12\" r=\"3\"/><circle class=\"dt\" cx=\"200\" cy=\"23.7\" r=\"3\"/><circle class=\"dt\" cx=\"227.3\" cy=\"55.3\" r=\"3\"/><circle class=\"dt\" cx=\"233.2\" cy=\"96.5\" r=\"3\"/><circle class=\"dt\" cx=\"215.9\" cy=\"134.5\" r=\"3\"/><circle class=\"dt\" cx=\"180.8\" cy=\"157\" r=\"3\"/><circle class=\"dt\" cx=\"139.2\" cy=\"157\" r=\"3\"/><circle class=\"dt\" cx=\"104.1\" cy=\"134.5\" r=\"3\"/><circle class=\"dt\" cx=\"86.8\" cy=\"96.5\" r=\"3\"/><circle class=\"dt\" cx=\"92.7\" cy=\"55.3\" r=\"3\"/><circle class=\"dt\" cx=\"120\" cy=\"23.7\" r=\"3\"/><path class=\"thin\" d=\"M88.7 82.7 A14 14 0 0 1 92.6 109.3\"/><text x=\"110.9\" y=\"111.2\" text-anchor=\"middle\">1</text><line class=\"ln dash\" x1=\"200\" y1=\"23.7\" x2=\"259.5\" y2=\"41.2\"/><path class=\"ac\" d=\"M232.6 33.3 A34 34 0 0 1 222.3 49.4\"/><text class=\"acc\" x=\"239.5\" y=\"54.2\" text-anchor=\"middle\">2</text></svg></figure><p class=\"geo-given\">A sun star (a kind of sea star) has 11 arms of equal length, evenly spaced. Segments join the tips of neighboring arms to form a regular 11-gon. ∠1 is an interior angle of the 11-gon. One side is extended (dashed), and ∠2 is the exterior angle it makes.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the 11-gon around the sun star?",
          choices: [
            { letter: "A", text: "1620°" },
            { letter: "B", text: "1980°" },
            { letter: "C", text: "1800°" },
            { letter: "D", text: "360°" }
          ],
          correct: "A"
        },
        {
          id: "angle1",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "To the nearest tenth of a degree, what is m∠1 at the tip of an arm?",
          choices: [
            { letter: "A", text: "32.7°" },
            { letter: "B", text: "163.6°" },
            { letter: "C", text: "130.9°" },
            { letter: "D", text: "147.3°" }
          ],
          correct: "D"
        },
        {
          id: "angle2",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "To the nearest tenth of a degree, what is m∠2, the exterior angle of the 11-gon?",
          choices: [
            { letter: "A", text: "32.7°" },
            { letter: "B", text: "147.3°" },
            { letter: "C", text: "16.4°" },
            { letter: "D", text: "36.0°" }
          ],
          correct: "A"
        },
        {
          id: "extsum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Picture an exterior angle like ∠2 at each of the 11 tips. Which statement about those 11 angles is true?",
          choices: [
            { letter: "A", text: "They add to 1620°." },
            { letter: "B", text: "They add to 1980°." },
            { letter: "C", text: "They add to 180°." },
            { letter: "D", text: "They add to 360°." }
          ],
          correct: "D"
        },
        {
          id: "many",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "The tips of a different sea star's arms form a regular polygon with exterior angles of 8°. How many arms does it have?",
          choices: [
            { letter: "A", text: "172" },
            { letter: "B", text: "45" },
            { letter: "C", text: "22.5" },
            { letter: "D", text: "47" }
          ],
          correct: "B"
        },
        {
          id: "five",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "The arm tips of a common sea star form a regular polygon with interior angles of 108°. How many arms does it have?",
          choices: [
            { letter: "A", text: "72" },
            { letter: "B", text: "about 3.3" },
            { letter: "C", text: "5" },
            { letter: "D", text: "2.5" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-worms-turtle-scute",
      family: "GEO",
      mode: "worms",
      title: "The Turtle Shell Scute",
      kind: "Polygons · G.PC.2",
      blurb: "A five-sided plate on a turtle's shell.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"An oval turtle shell outline with one scute, the convex pentagon ABCDE, shaded blue. Angle A is 104 degrees, angle B is 112 degrees, angle C is 98 degrees and angle D is 116 degrees. A gold arc marks angle E, with no measure shown\"><ellipse class=\"thin\" cx=\"163.5\" cy=\"73.7\" rx=\"150\" ry=\"70\"/><polygon class=\"sh2\" points=\"118,34 210,34 228.7,80.4 156,122.3 104.6,87.7\"/><circle class=\"dt\" cx=\"118\" cy=\"34\" r=\"3\"/><text x=\"118.1\" y=\"24.8\" text-anchor=\"middle\">A</text><path class=\"thin\" d=\"M129 34 A11 11 0 0 1 115.3 44.7\"/><text class=\"sm\" x=\"133.4\" y=\"57.7\" text-anchor=\"middle\">104°</text><circle class=\"dt\" cx=\"210\" cy=\"34\" r=\"3\"/><text x=\"223.9\" y=\"41.9\" text-anchor=\"middle\">B</text><path class=\"thin\" d=\"M214.1 44.2 A11 11 0 0 1 199 34\"/><text class=\"sm\" x=\"196\" y=\"58.7\" text-anchor=\"middle\">112°</text><circle class=\"dt\" cx=\"228.7\" cy=\"80.4\" r=\"3\"/><text x=\"236.2\" y=\"97.5\" text-anchor=\"middle\">C</text><path class=\"thin\" d=\"M219.2 85.9 A11 11 0 0 1 224.6 70.2\"/><text class=\"sm\" x=\"205.1\" y=\"76.2\" text-anchor=\"middle\">98°</text><circle class=\"dt\" cx=\"156\" cy=\"122.3\" r=\"3\"/><text x=\"143.8\" y=\"134.6\" text-anchor=\"middle\">D</text><path class=\"thin\" d=\"M146.9 116.2 A11 11 0 0 1 165.5 116.8\"/><text class=\"sm\" x=\"156.9\" y=\"101.4\" text-anchor=\"middle\">116°</text><circle class=\"dt\" cx=\"104.6\" cy=\"87.7\" r=\"3\"/><text x=\"93\" y=\"84.4\" text-anchor=\"middle\">E</text><path class=\"ac\" d=\"M108.5 72.1 A16 16 0 0 1 117.9 96.6\"/></svg></figure><p class=\"geo-given\">One scute (bony plate) on a turtle's shell is the convex pentagon ABCDE. Four of its angle measures are shown. The gold arc marks ∠E.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the scute?",
          choices: [
            { letter: "A", text: "900°" },
            { letter: "B", text: "720°" },
            { letter: "C", text: "540°" },
            { letter: "D", text: "360°" }
          ],
          correct: "C"
        },
        {
          id: "E",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠E, the angle with the gold arc?",
          choices: [
            { letter: "A", text: "108°" },
            { letter: "B", text: "110°" },
            { letter: "C", text: "70°" },
            { letter: "D", text: "290°" }
          ],
          correct: "B"
        },
        {
          id: "extC",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of an exterior angle of the scute at corner C?",
          choices: [
            { letter: "A", text: "98°" },
            { letter: "B", text: "262°" },
            { letter: "C", text: "72°" },
            { letter: "D", text: "82°" }
          ],
          correct: "D"
        },
        {
          id: "extsum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement about the exterior angles of the scute, one at each corner, is true?",
          choices: [
            { letter: "A", text: "They add to 360°." },
            { letter: "B", text: "They add to 540°." },
            { letter: "C", text: "Each one measures 72°." },
            { letter: "D", text: "They add to 900°." }
          ],
          correct: "A"
        },
        {
          id: "largest",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "At which corner of the scute is the exterior angle largest?",
          choices: [
            { letter: "A", text: "at C" },
            { letter: "B", text: "at D" },
            { letter: "C", text: "at E" },
            { letter: "D", text: "at B" }
          ],
          correct: "A"
        },
        {
          id: "round",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A naturalist models the round edge of a shell as a regular polygon with interior angles of 176°. How many sides does the model have?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "90" },
            { letter: "C", text: "about 2.0" },
            { letter: "D", text: "45" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc2-worms-honeycomb",
      family: "GEO",
      mode: "worms",
      title: "The Honeycomb",
      kind: "Polygons · G.PC.2",
      blurb: "Hexagon cells with no gaps, and why they fit.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A patch of honeycomb: rows of regular hexagon cells with no gaps. One cell in the middle is shaded gold. Point P is a corner where three cells meet\"><polygon class=\"ln\" points=\"51.7,12.5 73.4,25 73.4,50 51.7,62.5 30.1,50 30.1,25\"/><polygon class=\"ln\" points=\"95,12.5 116.7,25 116.7,50 95,62.5 73.4,50 73.4,25\"/><polygon class=\"ln\" points=\"138.3,12.5 160,25 160,50 138.3,62.5 116.7,50 116.7,25\"/><polygon class=\"ln\" points=\"181.7,12.5 203.3,25 203.3,50 181.7,62.5 160,50 160,25\"/><polygon class=\"ln\" points=\"225,12.5 246.6,25 246.6,50 225,62.5 203.3,50 203.3,25\"/><polygon class=\"ln\" points=\"268.3,12.5 289.9,25 289.9,50 268.3,62.5 246.6,50 246.6,25\"/><polygon class=\"ln\" points=\"30.1,50 51.7,62.5 51.7,87.5 30.1,100 8.4,87.5 8.4,62.5\"/><polygon class=\"ln\" points=\"73.4,50 95,62.5 95,87.5 73.4,100 51.7,87.5 51.7,62.5\"/><polygon class=\"ln\" points=\"116.7,50 138.3,62.5 138.3,87.5 116.7,100 95,87.5 95,62.5\"/><polygon class=\"sh\" points=\"160,50 181.7,62.5 181.7,87.5 160,100 138.3,87.5 138.3,62.5\"/><polygon class=\"ln\" points=\"203.3,50 225,62.5 225,87.5 203.3,100 181.7,87.5 181.7,62.5\"/><polygon class=\"ln\" points=\"246.6,50 268.3,62.5 268.3,87.5 246.6,100 225,87.5 225,62.5\"/><polygon class=\"ln\" points=\"289.9,50 311.6,62.5 311.6,87.5 289.9,100 268.3,87.5 268.3,62.5\"/><polygon class=\"ln\" points=\"51.7,87.5 73.4,100 73.4,125 51.7,137.5 30.1,125 30.1,100\"/><polygon class=\"ln\" points=\"95,87.5 116.7,100 116.7,125 95,137.5 73.4,125 73.4,100\"/><polygon class=\"ln\" points=\"138.3,87.5 160,100 160,125 138.3,137.5 116.7,125 116.7,100\"/><polygon class=\"ln\" points=\"181.7,87.5 203.3,100 203.3,125 181.7,137.5 160,125 160,100\"/><polygon class=\"ln\" points=\"225,87.5 246.6,100 246.6,125 225,137.5 203.3,125 203.3,100\"/><polygon class=\"ln\" points=\"268.3,87.5 289.9,100 289.9,125 268.3,137.5 246.6,125 246.6,100\"/><circle class=\"dta\" cx=\"181.7\" cy=\"62.5\" r=\"3\"/><text class=\"acc\" x=\"194.7\" y=\"65.5\" text-anchor=\"middle\">P</text></svg></figure><p class=\"geo-given\">Bees build wax cells shaped like regular hexagons. The cells cover the comb with no gaps or overlaps. At each corner, such as <strong>P</strong>, three cells meet.</p>",
      claims: [
        {
          id: "calc",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which calculation gives the measure of each angle of one cell?",
          choices: [
            { letter: "A", text: "360° ÷ 6" },
            { letter: "B", text: "6 · 180° ÷ 6" },
            { letter: "C", text: "(6 − 2) · 180° ÷ 6" },
            { letter: "D", text: "(6 − 2) · 180° ÷ 4" }
          ],
          correct: "C"
        },
        {
          id: "octagon",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Suppose the cells were regular octagons. If three octagon cells met around one point, how much would they overlap?",
          choices: [
            { letter: "A", text: "405°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "135°" },
            { letter: "D", text: "45°" }
          ],
          correct: "D"
        },
        {
          id: "five",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "Could five congruent regular cells meet around one point with no gap or overlap? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: no regular polygon has 72° angles." },
            { letter: "B", text: "Yes: regular pentagons, as 5 · 72° = 360°." },
            { letter: "C", text: "Yes: 360 ÷ 5 = 72 is a whole number." },
            { letter: "D", text: "No: an odd number of cells never fits." }
          ],
          correct: "A"
        },
        {
          id: "largest",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the largest number of sides a regular polygon can have and still cover a flat surface by itself? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "8: its 135° angle is the largest that fits." },
            { letter: "B", text: "4: only 90° angles fill 360° exactly." },
            { letter: "C", text: "6: at least 3 must meet, so angles are ≤ 120°." },
            { letter: "D", text: "12: two of its 150° angles fill 360°." }
          ],
          correct: "C"
        },
        {
          id: "ari",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Ari says, \"Each cell angle is 360° ÷ 6 = 60°, so six cells meet at P.\" What is his error?",
          choices: [
            { letter: "A", text: "Nothing: six cells meet at each corner." },
            { letter: "B", text: "He should divide 720° by 3 cells: 240°." },
            { letter: "C", text: "He should use 180° ÷ 6 = 30° instead." },
            { letter: "D", text: "360° ÷ 6 is the exterior angle; each angle is 120°." }
          ],
          correct: "D"
        },
        {
          id: "draw",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A student draws a regular polygon whose exterior angles each equal one angle of an equilateral triangle. How many sides does it have?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "6" },
            { letter: "C", text: "120" },
            { letter: "D", text: "12" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc2-worms-orb-web",
      family: "GEO",
      mode: "worms",
      title: "The Orb Web",
      kind: "Polygons · G.PC.2",
      blurb: "Thirteen spokes and rings that are regular 13-gons.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"An orb web: 13 evenly spaced spokes from the hub, crossed by three rings of straight threads. Each ring is a regular 13-gon. Angle 1, in gold, is the angle at the hub between two neighboring spokes, drawn in gold. Angle 2 is the angle of the outer ring at a spoke on the left\"><line class=\"thin\" x1=\"160\" y1=\"84\" x2=\"160\" y2=\"2\"/><line class=\"thin\" x1=\"160\" y1=\"84\" x2=\"198.1\" y2=\"11.4\"/><line class=\"thin\" x1=\"160\" y1=\"84\" x2=\"227.5\" y2=\"37.4\"/><line class=\"thin\" x1=\"160\" y1=\"84\" x2=\"241.4\" y2=\"74.1\"/><line class=\"thin\" x1=\"160\" y1=\"84\" x2=\"236.7\" y2=\"113.1\"/><line class=\"thin\" x1=\"160\" y1=\"84\" x2=\"214.4\" y2=\"145.4\"/><line class=\"thin\" x1=\"160\" y1=\"84\" x2=\"179.6\" y2=\"163.6\"/><line class=\"thin\" x1=\"160\" y1=\"84\" x2=\"140.4\" y2=\"163.6\"/><line class=\"thin\" x1=\"160\" y1=\"84\" x2=\"105.6\" y2=\"145.4\"/><line class=\"thin\" x1=\"160\" y1=\"84\" x2=\"83.3\" y2=\"113.1\"/><line class=\"thin\" x1=\"160\" y1=\"84\" x2=\"78.6\" y2=\"74.1\"/><line class=\"thin\" x1=\"160\" y1=\"84\" x2=\"92.5\" y2=\"37.4\"/><line class=\"thin\" x1=\"160\" y1=\"84\" x2=\"121.9\" y2=\"11.4\"/><polygon class=\"ln\" points=\"160,10 194.4,18.5 220.9,42 233.5,75.1 229.2,110.2 209.1,139.4 177.7,155.8 142.3,155.8 110.9,139.4 90.8,110.2 86.5,75.1 99.1,42 125.6,18.5\"/><polygon class=\"thin\" points=\"160,32 184.2,38 202.8,54.5 211.6,77.7 208.6,102.4 194.5,122.9 172.4,134.5 147.6,134.5 125.5,122.9 111.4,102.4 108.4,77.7 117.2,54.5 135.8,38\"/><polygon class=\"thin\" points=\"160,53 174.4,56.6 185.5,66.4 190.8,80.3 189,95 180.6,107.2 167.4,114.1 152.6,114.1 139.4,107.2 131,95 129.2,80.3 134.5,66.4 145.6,56.6\"/><circle class=\"dt\" cx=\"160\" cy=\"84\" r=\"3\"/><line class=\"ac\" x1=\"160\" y1=\"84\" x2=\"194.4\" y2=\"18.5\"/><line class=\"ac\" x1=\"160\" y1=\"84\" x2=\"220.9\" y2=\"42\"/><path class=\"ac\" d=\"M170.2 64.5 A22 22 0 0 1 178.1 71.5\"/><text class=\"acc\" x=\"187.2\" y=\"58.3\" text-anchor=\"middle\">1</text><path class=\"thin\" d=\"M89.7 101.3 A9 9 0 0 1 95.9 117.6\"/><text x=\"105.3\" y=\"122.1\" text-anchor=\"middle\">2</text></svg></figure><p class=\"geo-given\">An orb spider's web has 13 evenly spaced spokes from its hub. Each ring joins neighboring spokes with straight threads, so each ring is a regular 13-gon. ∠1 is the angle between two neighboring spokes. ∠2 is an interior angle of the outer ring.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the web's outer ring?",
          choices: [
            { letter: "A", text: "2340°" },
            { letter: "B", text: "2160°" },
            { letter: "C", text: "1800°" },
            { letter: "D", text: "1980°" }
          ],
          correct: "D"
        },
        {
          id: "angle1",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "To the nearest tenth of a degree, what is m∠1, the angle between two neighboring spokes?",
          choices: [
            { letter: "A", text: "27.7°" },
            { letter: "B", text: "152.3°" },
            { letter: "C", text: "13.8°" },
            { letter: "D", text: "30.0°" }
          ],
          correct: "A"
        },
        {
          id: "angle2",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "To the nearest tenth of a degree, what is m∠2?",
          choices: [
            { letter: "A", text: "27.7°" },
            { letter: "B", text: "152.3°" },
            { letter: "C", text: "166.2°" },
            { letter: "D", text: "138.5°" }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement about ∠1 is true?",
          choices: [
            { letter: "A", text: "It equals each interior angle of the ring." },
            { letter: "B", text: "It is half of each exterior angle of the ring." },
            { letter: "C", text: "It equals each exterior angle of the ring." },
            { letter: "D", text: "It is twice each exterior angle of the ring." }
          ],
          correct: "C"
        },
        {
          id: "inner",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "How do the angles of the smallest ring compare with the angles of the outer ring?",
          choices: [
            { letter: "A", text: "They are smaller, since the ring is smaller." },
            { letter: "B", text: "They are equal: both rings are regular 13-gons." },
            { letter: "C", text: "They are larger, since they are closer to the hub." },
            { letter: "D", text: "They add to less, since the ring is smaller." }
          ],
          correct: "B"
        },
        {
          id: "other",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "Another orb web has rings that are regular polygons with interior angles of 156°. How many spokes does that web have?",
          choices: [
            { letter: "A", text: "24" },
            { letter: "B", text: "about 2.3" },
            { letter: "C", text: "7.5" },
            { letter: "D", text: "15" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc2-worms-meadow-trail",
      family: "GEO",
      mode: "worms",
      title: "The Meadow Trail",
      kind: "Polygons · G.PC.2",
      blurb: "A hiker's turns around a six-sided trail.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A hiking trail around a meadow: the convex hexagon ABCDEF. At each corner except F, a dashed line continues the leg just walked, and a gold arc marks the turn to the next leg: 55 degrees at A, 75 at B, 50 at C, 60 at D and 65 at E\"><polygon class=\"sh2\" points=\"105.9,138 225.9,138 240.4,83.9 202,29 102.4,37.7 79.6,100.3\"/><circle class=\"dt\" cx=\"105.9\" cy=\"138\" r=\"3\"/><line class=\"thin dash\" x1=\"105.9\" y1=\"138\" x2=\"123.2\" y2=\"162.6\"/><path class=\"ac\" d=\"M119.9 138 A14 14 0 0 1 114 149.5\"/><text class=\"sm\" x=\"135.2\" y=\"157.3\" text-anchor=\"middle\">55°</text><text x=\"94.5\" y=\"151.1\" text-anchor=\"middle\">A</text><circle class=\"dt\" cx=\"225.9\" cy=\"138\" r=\"3\"/><line class=\"thin dash\" x1=\"225.9\" y1=\"138\" x2=\"255.9\" y2=\"138\"/><path class=\"ac\" d=\"M229.6 124.5 A14 14 0 0 1 239.9 138\"/><text class=\"sm\" x=\"247.1\" y=\"125.8\" text-anchor=\"middle\">75°</text><text x=\"225.9\" y=\"157\" text-anchor=\"middle\">B</text><circle class=\"dt\" cx=\"240.4\" cy=\"83.9\" r=\"3\"/><line class=\"thin dash\" x1=\"240.4\" y1=\"83.9\" x2=\"248.2\" y2=\"55\"/><path class=\"ac\" d=\"M232.4 72.5 A14 14 0 0 1 244.1 70.4\"/><text class=\"sm\" x=\"234.3\" y=\"53.1\" text-anchor=\"middle\">50°</text><text x=\"254\" y=\"92.6\" text-anchor=\"middle\">C</text><circle class=\"dt\" cx=\"202\" cy=\"29\" r=\"3\"/><line class=\"thin dash\" x1=\"202\" y1=\"29\" x2=\"184.8\" y2=\"4.4\"/><path class=\"ac\" d=\"M188 30.2 A14 14 0 0 1 193.9 17.5\"/><text class=\"sm\" x=\"173.9\" y=\"19.9\" text-anchor=\"middle\">60°</text><text x=\"213.4\" y=\"26\" text-anchor=\"middle\">D</text><circle class=\"dt\" cx=\"102.4\" cy=\"37.7\" r=\"3\"/><line class=\"thin dash\" x1=\"102.4\" y1=\"37.7\" x2=\"72.5\" y2=\"40.3\"/><path class=\"ac\" d=\"M97.6 50.9 A14 14 0 0 1 88.4 38.9\"/><text class=\"sm\" x=\"79.1\" y=\"59.6\" text-anchor=\"middle\">65°</text><text x=\"101.1\" y=\"28.8\" text-anchor=\"middle\">E</text><circle class=\"dt\" cx=\"79.6\" cy=\"100.3\" r=\"3\"/><text x=\"66.4\" y=\"100.6\" text-anchor=\"middle\">F</text></svg></figure><p class=\"geo-given\">A trail around a meadow is the convex hexagon ABCDEF. A hiker walks it once, turning left at each corner. The gold arcs show her turns (exterior angles) at A, B, C, D and E. The turn at F is not shown.</p>",
      claims: [
        {
          id: "F",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "How many degrees does the hiker turn at F?",
          choices: [
            { letter: "A", text: "55°" },
            { letter: "B", text: "415°" },
            { letter: "C", text: "235°" },
            { letter: "D", text: "125°" }
          ],
          correct: "A"
        },
        {
          id: "C",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the angle inside the trail at corner C?",
          choices: [
            { letter: "A", text: "50°" },
            { letter: "B", text: "310°" },
            { letter: "C", text: "130°" },
            { letter: "D", text: "230°" }
          ],
          correct: "C"
        },
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the six angles inside the trail?",
          choices: [
            { letter: "A", text: "360°" },
            { letter: "B", text: "720°" },
            { letter: "C", text: "1080°" },
            { letter: "D", text: "900°" }
          ],
          correct: "B"
        },
        {
          id: "sharp",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "At which corner is the angle inside the trail the smallest?",
          choices: [
            { letter: "A", text: "at B" },
            { letter: "B", text: "at C" },
            { letter: "C", text: "at F" },
            { letter: "D", text: "at E" }
          ],
          correct: "A"
        },
        {
          id: "mo",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Mo says the trail is a regular hexagon. Which is true? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: every turn of the trail is 60°." },
            { letter: "B", text: "Yes: its angles add to 720°, so each is 120°." },
            { letter: "C", text: "No: a regular hexagon's turns add to 720°." },
            { letter: "D", text: "No: its turns are not all equal." }
          ],
          correct: "D"
        },
        {
          id: "regular",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A second trail is a regular polygon with a turn of 22.5° at each corner. How many corners does it have?",
          choices: [
            { letter: "A", text: "8" },
            { letter: "B", text: "157.5" },
            { letter: "C", text: "16" },
            { letter: "D", text: "18" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-worms-basalt-columns",
      family: "GEO",
      mode: "worms",
      title: "The Basalt Columns",
      kind: "Polygons · G.PC.2",
      blurb: "Three stone column tops meet at one point.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Top view of three basalt columns that meet at point P with no gaps: a hexagon on the right, shaded blue, a pentagon at the lower left and a heptagon at the upper left. At P the angles are (3x − 8) degrees in the hexagon, (2x + 18) degrees in the pentagon and (2x + 14) degrees in the heptagon. Four other angles of the hexagon are 118, 124, 120 and 110 degrees, and a gold arc marks its last angle\"><polygon class=\"sh2\" points=\"160,82 154.2,40.8 181.8,20.7 220.9,35 222.7,87.1 191.5,106.6\"/><polygon class=\"ln\" points=\"160,82 191.5,106.6 170.9,157.5 134.2,155 124.7,100.8\"/><polygon class=\"ln\" points=\"160,82 124.7,100.8 102.4,91.8 82.7,45.3 94.3,24.3 117.7,18.9 154.2,40.8\"/><circle class=\"dt\" cx=\"160\" cy=\"82\" r=\"3\"/><text x=\"154\" y=\"75\" text-anchor=\"middle\">P</text><path class=\"thin\" d=\"M158.5 71.1 A11 11 0 0 1 168.7 88.8\"/><text class=\"sm\" x=\"191.2\" y=\"68\" text-anchor=\"middle\">(3x − 8)°</text><path class=\"thin\" d=\"M168.7 88.8 A11 11 0 0 1 150.3 87.2\"/><text class=\"sm\" x=\"157\" y=\"119.9\" text-anchor=\"middle\">(2x + 18)°</text><path class=\"thin\" d=\"M150.3 87.2 A11 11 0 0 1 158.5 71.1\"/><text class=\"sm\" x=\"129.7\" y=\"70.6\" text-anchor=\"middle\">(2x + 14)°</text><path class=\"thin\" d=\"M163.1 34.3 A11 11 0 0 1 155.7 51.7\"/><text class=\"sm\" x=\"177.2\" y=\"54.6\" text-anchor=\"middle\">118°</text><path class=\"thin\" d=\"M192.2 24.5 A11 11 0 0 1 172.9 27.2\"/><text class=\"sm\" x=\"185.3\" y=\"49.5\" text-anchor=\"middle\">124°</text><path class=\"thin\" d=\"M213.4 93 A11 11 0 0 1 222.3 76.1\"/><text class=\"sm\" x=\"200.7\" y=\"79.4\" text-anchor=\"middle\">120°</text><path class=\"thin\" d=\"M182.9 99.9 A11 11 0 0 1 200.8 100.8\"/><text class=\"sm\" x=\"192.8\" y=\"85.7\" text-anchor=\"middle\">110°</text><path class=\"ac\" d=\"M221.4 49 A14 14 0 0 1 207.8 30.2\"/><text class=\"sm\" x=\"156.3\" y=\"130.4\" text-anchor=\"middle\">pentagon</text><text class=\"sm\" x=\"115.4\" y=\"53.7\" text-anchor=\"middle\">heptagon</text></svg></figure><p class=\"geo-given\">Basalt columns are tall stone pillars whose tops are convex polygons that fit together with no gaps. At point <strong>P</strong>, a pentagon, a hexagon and a heptagon meet. Their angles at P are shown in terms of x, in degrees. A gold arc marks one angle of the hexagon.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which equation uses the three angles at P to find x?",
          choices: [
            { letter: "A", text: "7x + 24 = 180" },
            { letter: "B", text: "7x + 24 = 360" },
            { letter: "C", text: "7x + 24 = 720" },
            { letter: "D", text: "7x + 24 = 540" }
          ],
          correct: "B"
        },
        {
          id: "hexP",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of the hexagon's angle at P?",
          choices: [
            { letter: "A", text: "144°" },
            { letter: "B", text: "120°" },
            { letter: "C", text: "224°" },
            { letter: "D", text: "136°" }
          ],
          correct: "D"
        },
        {
          id: "gold",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of the hexagon angle marked with the gold arc?",
          choices: [
            { letter: "A", text: "248°" },
            { letter: "B", text: "104°" },
            { letter: "C", text: "112°" },
            { letter: "D", text: "120°" }
          ],
          correct: "C"
        },
        {
          id: "pentExt",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of the pentagon's exterior angle at P?",
          choices: [
            { letter: "A", text: "66°" },
            { letter: "B", text: "114°" },
            { letter: "C", text: "246°" },
            { letter: "D", text: "72°" }
          ],
          correct: "A"
        },
        {
          id: "why",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement explains why the three column tops fit around P with no gap or overlap?",
          choices: [
            { letter: "A", text: "Their angles at P are all equal." },
            { letter: "B", text: "Their angle sums add to 360°." },
            { letter: "C", text: "Each of their angles at P is 120°." },
            { letter: "D", text: "Their angles at P add to 360°." }
          ],
          correct: "D"
        },
        {
          id: "ratio",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A geologist sketches a regular polygon in which each interior angle is 11 times each exterior angle. How many sides does it have?",
          choices: [
            { letter: "A", text: "12" },
            { letter: "B", text: "15" },
            { letter: "C", text: "24" },
            { letter: "D", text: "22" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-worms-pond-decks",
      family: "GEO",
      mode: "worms",
      title: "The Pond Decks",
      kind: "Polygons · G.PC.2",
      blurb: "Two regular decks, one with twice as many sides.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"One corner of each of two regular polygon decks around ponds. Deck A, with n sides, has a corner angle marked a. Deck B, with 2n sides, has a wider corner angle marked a + 20 degrees, in gold\"><polygon class=\"sh2\" style=\"stroke:none\" points=\"10.9,35.9 28.9,42.4 74,26 119.1,42.4 137.1,35.9\"/><polyline class=\"ln\" points=\"10.9,35.9 28.9,42.4 74,26 119.1,42.4 137.1,35.9\"/><circle class=\"dt\" cx=\"28.9\" cy=\"42.4\" r=\"3\"/><circle class=\"dt\" cx=\"74\" cy=\"26\" r=\"3\"/><circle class=\"dt\" cx=\"119.1\" cy=\"42.4\" r=\"3\"/><path class=\"thin\" d=\"M89 31.5 A16 16 0 0 1 59 31.5\"/><text x=\"74\" y=\"61\" text-anchor=\"middle\">a</text><polygon class=\"sh2\" style=\"stroke:none\" points=\"177.8,31 196.7,34.3 244,26 291.3,34.3 310.2,31\"/><polyline class=\"ln\" points=\"177.8,31 196.7,34.3 244,26 291.3,34.3 310.2,31\"/><circle class=\"dt\" cx=\"196.7\" cy=\"34.3\" r=\"3\"/><circle class=\"dt\" cx=\"244\" cy=\"26\" r=\"3\"/><circle class=\"dt\" cx=\"291.3\" cy=\"34.3\" r=\"3\"/><path class=\"ac\" d=\"M259.8 28.8 A16 16 0 0 1 228.2 28.8\"/><text class=\"acc\" x=\"244\" y=\"61\" text-anchor=\"middle\">a + 20°</text><text class=\"sm\" x=\"74\" y=\"128\" text-anchor=\"middle\">Deck A: n sides</text><text class=\"sm\" x=\"244\" y=\"128\" text-anchor=\"middle\">Deck B: 2n sides</text></svg></figure><p class=\"geo-given\">Two ponds have decks shaped like regular polygons. Deck A has n sides, and deck B has 2n sides. Each angle of deck B is 20° more than each angle of deck A.</p>",
      claims: [
        {
          id: "expr",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which expression gives each exterior angle of deck B?",
          choices: [
            { letter: "A", text: "360° ÷ n" },
            { letter: "B", text: "360° ÷ (2n)" },
            { letter: "C", text: "180° ÷ (2n)" },
            { letter: "D", text: "(2n − 2) · 180°" }
          ],
          correct: "B"
        },
        {
          id: "n",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "How many sides does deck A have?",
          choices: [
            { letter: "A", text: "9" },
            { letter: "B", text: "18" },
            { letter: "C", text: "27" },
            { letter: "D", text: "4.5" }
          ],
          correct: "A"
        },
        {
          id: "angleB",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of each angle of deck B?",
          choices: [
            { letter: "A", text: "140°" },
            { letter: "B", text: "20°" },
            { letter: "C", text: "160°" },
            { letter: "D", text: "2,880°" }
          ],
          correct: "C"
        },
        {
          id: "sums",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "How much greater is the sum of the angles of deck B than the sum of the angles of deck A?",
          choices: [
            { letter: "A", text: "1,620°" },
            { letter: "B", text: "180°" },
            { letter: "C", text: "2,880°" },
            { letter: "D", text: "0°" }
          ],
          correct: "A"
        },
        {
          id: "not",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement about the two decks is NOT true?",
          choices: [
            { letter: "A", text: "Both decks' exterior angles add to 360°." },
            { letter: "B", text: "Deck B's angle sum is twice deck A's." },
            { letter: "C", text: "Deck A's exterior angles are twice deck B's." },
            { letter: "D", text: "Each angle of deck B is less than 180°." }
          ],
          correct: "B"
        },
        {
          id: "deckC",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A third regular deck, C, has angles that are each 10° more than each angle of deck B. How many sides does deck C have?",
          choices: [
            { letter: "A", text: "18" },
            { letter: "B", text: "about 2.1" },
            { letter: "C", text: "10" },
            { letter: "D", text: "36" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
