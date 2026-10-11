/* SOL Labyrinth — Geometry game (family GEO), polygons: G.PC.2 (Virginia 2023 Geometry SOL), v5.20 packs for the
   maze mode (a school building and its grounds) and the raid mode, Eagle Swoop (sports and games). Original items only.
   A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given
   facts, then six questions about it. Every numeric answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-pc2-maze-medallion",
      family: "GEO",
      mode: "maze",
      title: "The Front Hall Medallion",
      kind: "Polygons · G.PC.2",
      blurb: "A regular decagon set into the hallway floor.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"A regular decagon floor medallion with dashed spokes from its center to each corner; angle 1, in gold, is an interior angle at the left corner; side AB is extended past B as a dashed line, and angle 2, in gold, is between the extension and side BC\"><polygon class=\"sh\" points=\"222,84 210.2,120.4 179.2,143 140.8,143 109.8,120.4 98,84 109.8,47.6 140.8,25 179.2,25 210.2,47.6\"/><line class=\"thin dash\" x1=\"160\" y1=\"84\" x2=\"222\" y2=\"84\"/><line class=\"thin dash\" x1=\"160\" y1=\"84\" x2=\"210.2\" y2=\"120.4\"/><line class=\"thin dash\" x1=\"160\" y1=\"84\" x2=\"179.2\" y2=\"143\"/><line class=\"thin dash\" x1=\"160\" y1=\"84\" x2=\"140.8\" y2=\"143\"/><line class=\"thin dash\" x1=\"160\" y1=\"84\" x2=\"109.8\" y2=\"120.4\"/><line class=\"thin dash\" x1=\"160\" y1=\"84\" x2=\"98\" y2=\"84\"/><line class=\"thin dash\" x1=\"160\" y1=\"84\" x2=\"109.8\" y2=\"47.6\"/><line class=\"thin dash\" x1=\"160\" y1=\"84\" x2=\"140.8\" y2=\"25\"/><line class=\"thin dash\" x1=\"160\" y1=\"84\" x2=\"179.2\" y2=\"25\"/><line class=\"thin dash\" x1=\"160\" y1=\"84\" x2=\"210.2\" y2=\"47.6\"/><line class=\"ln dash\" x1=\"179.2\" y1=\"25\" x2=\"241.2\" y2=\"25\"/><path class=\"ac\" d=\"M102 71.6 A13 13 0 0 1 102 96.4\"/><path class=\"ac\" d=\"M197.2 25 A18 18 0 0 1 193.7 35.6\"/><circle class=\"dt\" cx=\"140.8\" cy=\"25\" r=\"3\"/><circle class=\"dt\" cx=\"179.2\" cy=\"25\" r=\"3\"/><circle class=\"dt\" cx=\"210.2\" cy=\"47.6\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"84\" r=\"3\"/><text class=\"acc\" x=\"122\" y=\"80\" text-anchor=\"middle\">1</text><text class=\"acc\" x=\"208.7\" y=\"40\" text-anchor=\"middle\">2</text><text x=\"134.8\" y=\"19\" text-anchor=\"middle\">A</text><text x=\"181.2\" y=\"18\" text-anchor=\"middle\">B</text><text x=\"220.2\" y=\"49.6\" text-anchor=\"middle\">C</text></svg></figure><p class=\"geo-given\">A regular decagon (10 congruent sides and 10 congruent angles) is set into the floor of the front hall. ∠1 is an interior angle. Side <strong>AB</strong> is extended past <strong>B</strong> (dashed), and ∠2 is the exterior angle between that extension and side <strong>BC</strong>.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the medallion?",
          choices: [
            { letter: "A", text: "1800°" },
            { letter: "B", text: "1440°" },
            { letter: "C", text: "1620°" },
            { letter: "D", text: "360°" }
          ],
          correct: "B"
        },
        {
          id: "angle1",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠1?",
          choices: [
            { letter: "A", text: "36°" },
            { letter: "B", text: "180°" },
            { letter: "C", text: "162°" },
            { letter: "D", text: "144°" }
          ],
          correct: "D"
        },
        {
          id: "angle2",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠2?",
          choices: [
            { letter: "A", text: "36°" },
            { letter: "B", text: "144°" },
            { letter: "C", text: "18°" },
            { letter: "D", text: "40°" }
          ],
          correct: "A"
        },
        {
          id: "error",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Jon finds each interior angle of the medallion this way: (10 − 2) · 180 = 1440°. What did he forget?",
          choices: [
            { letter: "A", text: "to divide 1440° by 8" },
            { letter: "B", text: "to use (10 + 2) · 180" },
            { letter: "C", text: "to divide 1440° by 10" },
            { letter: "D", text: "to subtract 1440° from 360°" }
          ],
          correct: "C"
        },
        {
          id: "emblem",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A trophy case down the hall shows a regular polygon emblem. Each exterior angle measures 12°. How many sides does the emblem have?",
          choices: [
            { letter: "A", text: "30" },
            { letter: "B", text: "15" },
            { letter: "C", text: "168" },
            { letter: "D", text: "32" }
          ],
          correct: "A"
        },
        {
          id: "banner",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A school banner shows a regular polygon. Each interior angle measures 170°. How many sides does it have?",
          choices: [
            { letter: "A", text: "18" },
            { letter: "B", text: "about 2.1" },
            { letter: "C", text: "10" },
            { letter: "D", text: "36" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc2-maze-cafeteria",
      family: "GEO",
      mode: "maze",
      title: "The Cafeteria Floor",
      kind: "Polygons · G.PC.2",
      blurb: "Hexagon and triangle tiles with no gaps.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Part of a floor tiled with regular hexagons and equilateral triangles; point P is a corner where two hexagons and two triangles meet; one hexagon at P is shaded blue and the triangle above P is shaded gold\"><polygon class=\"ln\" points=\"76,30 63,52.5 37,52.5 24,30 37,7.5 63,7.5\"/><polygon class=\"ln\" points=\"128,30 115,52.5 89,52.5 76,30 89,7.5 115,7.5\"/><polygon class=\"ln\" points=\"180,30 167,52.5 141,52.5 128,30 141,7.5 167,7.5\"/><polygon class=\"ln\" points=\"232,30 219,52.5 193,52.5 180,30 193,7.5 219,7.5\"/><polygon class=\"ln\" points=\"284,30 271,52.5 245,52.5 232,30 245,7.5 271,7.5\"/><polygon class=\"ln\" points=\"102,75 89,97.5 63,97.5 50,75 63,52.5 89,52.5\"/><polygon class=\"sh2\" points=\"154,75 141,97.5 115,97.5 102,75 115,52.5 141,52.5\"/><polygon class=\"ln\" points=\"206,75 193,97.5 167,97.5 154,75 167,52.5 193,52.5\"/><polygon class=\"ln\" points=\"258,75 245,97.5 219,97.5 206,75 219,52.5 245,52.5\"/><polygon class=\"ln\" points=\"310,75 297,97.5 271,97.5 258,75 271,52.5 297,52.5\"/><polygon class=\"ln\" points=\"76,120 63,142.5 37,142.5 24,120 37,97.5 63,97.5\"/><polygon class=\"ln\" points=\"128,120 115,142.5 89,142.5 76,120 89,97.5 115,97.5\"/><polygon class=\"ln\" points=\"180,120 167,142.5 141,142.5 128,120 141,97.5 167,97.5\"/><polygon class=\"ln\" points=\"232,120 219,142.5 193,142.5 180,120 193,97.5 219,97.5\"/><polygon class=\"ln\" points=\"284,120 271,142.5 245,142.5 232,120 245,97.5 271,97.5\"/><polygon class=\"sh\" points=\"154,75 141,52.5 167,52.5\"/><circle class=\"dta\" cx=\"154\" cy=\"75\" r=\"3\"/><text class=\"acc\" x=\"154\" y=\"92\" text-anchor=\"middle\">P</text></svg></figure><p class=\"geo-given\">The cafeteria floor is covered with regular hexagon tiles and equilateral triangle tiles, with no gaps or overlaps. At point <strong>P</strong>, two hexagons and two triangles meet.</p>",
      claims: [
        {
          id: "why",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which calculation shows why the tiles leave no gap at point P?",
          choices: [
            { letter: "A", text: "60° + 120° = 180°" },
            { letter: "B", text: "3(120°) = 360°" },
            { letter: "C", text: "2(60°) + 2(120°) = 360°" },
            { letter: "D", text: "180° + 720° = 900°" }
          ],
          correct: "C"
        },
        {
          id: "alone",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which regular polygon, used by itself, could also cover a floor with no gaps or overlaps?",
          choices: [
            { letter: "A", text: "square" },
            { letter: "B", text: "regular pentagon" },
            { letter: "C", text: "regular octagon" },
            { letter: "D", text: "regular decagon" }
          ],
          correct: "A"
        },
        {
          id: "gap",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "A worker tries to fit three regular pentagon tiles around one point. How large is the gap that is left?",
          choices: [
            { letter: "A", text: "72°" },
            { letter: "B", text: "36°" },
            { letter: "C", text: "252°" },
            { letter: "D", text: "324°" }
          ],
          correct: "B"
        },
        {
          id: "nonagon",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Each angle of a regular 9-sided tile measures 140°. Could these tiles alone cover a floor with no gaps?",
          choices: [
            { letter: "A", text: "Yes: 360 ÷ 40 = 9 tiles at each corner." },
            { letter: "B", text: "Yes: the angle sum, 1260°, is a multiple of 180°." },
            { letter: "C", text: "No: odd-sided polygons never tile." },
            { letter: "D", text: "No: 360 ÷ 140 is not a whole number." }
          ],
          correct: "D"
        },
        {
          id: "third",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "A different floor puts two regular 12-gon tiles (150° angles) and one more regular tile around each corner. What must the angle of the third tile be?",
          choices: [
            { letter: "A", text: "30°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "210°" },
            { letter: "D", text: "300°" }
          ],
          correct: "B"
        },
        {
          id: "catalog",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A tile catalog lists a regular polygon tile with interior angles of 145°. Which statement is true?",
          choices: [
            { letter: "A", text: "It has 10 sides: 360 ÷ 35 ≈ 10." },
            { letter: "B", text: "It has 2.5 sides: 360 ÷ 145 ≈ 2.5." },
            { letter: "C", text: "It is impossible: 360 ÷ 35 is not whole." },
            { letter: "D", text: "It is possible: 145° is less than 180°." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-maze-parking",
      family: "GEO",
      mode: "maze",
      title: "The Faculty Parking Lot",
      kind: "Polygons · G.PC.2",
      blurb: "A six-sided lot with two cut-off corners.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Hexagon ABCDEF, a parking lot: right angles at A and B along the bottom; the other angles are labeled (4x + 50) degrees at C, (3x + 45) degrees at D, (x + 110) degrees at E and (2x + 85) degrees at F\"><polygon class=\"sh2\" points=\"40,150 280,150 280,74 250,22 80,22 40,62\"/><path class=\"thin\" d=\"M50 150 L50 140 L40 140\"/><path class=\"thin\" d=\"M270 150 L270 140 L280 140\"/><path class=\"thin\" d=\"M280 87 A13 13 0 0 1 273.5 62.7\"/><path class=\"thin\" d=\"M256.5 33.3 A13 13 0 0 1 237 22\"/><path class=\"thin\" d=\"M93 22 A13 13 0 0 1 70.8 31.2\"/><path class=\"thin\" d=\"M49.2 52.8 A13 13 0 0 1 40 75\"/><circle class=\"dt\" cx=\"40\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"280\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"280\" cy=\"74\" r=\"3\"/><circle class=\"dt\" cx=\"250\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"80\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"40\" cy=\"62\" r=\"3\"/><text x=\"30\" y=\"164\" text-anchor=\"middle\">A</text><text x=\"290\" y=\"164\" text-anchor=\"middle\">B</text><text x=\"292\" y=\"79\" text-anchor=\"middle\">C</text><text x=\"258\" y=\"16\" text-anchor=\"middle\">D</text><text x=\"74\" y=\"16\" text-anchor=\"middle\">E</text><text x=\"29\" y=\"64\" text-anchor=\"middle\">F</text><text class=\"sm\" x=\"262\" y=\"80\" text-anchor=\"end\">(4x + 50)°</text><text class=\"sm\" x=\"244\" y=\"46\" text-anchor=\"end\">(3x + 45)°</text><text class=\"sm\" x=\"88\" y=\"46\" text-anchor=\"start\">(x + 110)°</text><text class=\"sm\" x=\"48\" y=\"88\" text-anchor=\"start\">(2x + 85)°</text></svg></figure><p class=\"geo-given\">The faculty parking lot <strong>ABCDEF</strong> is a convex hexagon. ∠<strong>A</strong> and ∠<strong>B</strong> are right angles. The other four angles are given in terms of x, in degrees.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the parking lot?",
          choices: [
            { letter: "A", text: "1080°" },
            { letter: "B", text: "900°" },
            { letter: "C", text: "360°" },
            { letter: "D", text: "720°" }
          ],
          correct: "D"
        },
        {
          id: "x",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the value of x?",
          choices: [
            { letter: "A", text: "43" },
            { letter: "B", text: "25" },
            { letter: "C", text: "7" },
            { letter: "D", text: "61" }
          ],
          correct: "B"
        },
        {
          id: "angleE",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠E?",
          choices: [
            { letter: "A", text: "153°" },
            { letter: "B", text: "117°" },
            { letter: "C", text: "135°" },
            { letter: "D", text: "45°" }
          ],
          correct: "C"
        },
        {
          id: "extC",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of an exterior angle of the lot at corner C?",
          choices: [
            { letter: "A", text: "30°" },
            { letter: "B", text: "150°" },
            { letter: "C", text: "210°" },
            { letter: "D", text: "60°" }
          ],
          correct: "A"
        },
        {
          id: "ana",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Ana says each angle of the lot is 720° ÷ 6 = 120°. What is wrong with her reasoning?",
          choices: [
            { letter: "A", text: "The sum is 1080°, so each angle is 180°." },
            { letter: "B", text: "She should divide by 4, the unknown angles." },
            { letter: "C", text: "Nothing: every angle of a hexagon is 120°." },
            { letter: "D", text: "The lot is not regular, so its angles differ." }
          ],
          correct: "D"
        },
        {
          id: "cutturn",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the exterior angles at corners C and D?",
          choices: [
            { letter: "A", text: "270°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "120°" },
            { letter: "D", text: "360°" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc2-raid-home-plate",
      family: "GEO",
      mode: "raid",
      title: "Home Plate",
      kind: "Polygons · G.PC.2",
      blurb: "A five-sided plate with three right angles.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Home plate as pentagon ABCDE: front edge AB is 17 inches, sides BC and AE are 8.5 inches, and the back edges CD and DE are 12 inches; right angles at A, B and D, and matching arcs at C and E\"><polygon class=\"sh\" points=\"100.5,18 219.5,18 219.5,77.5 160,137 100.5,77.5\"/><path class=\"thin\" d=\"M109.5 18 L109.5 27 L100.5 27\"/><path class=\"thin\" d=\"M210.5 18 L210.5 27 L219.5 27\"/><path class=\"thin\" d=\"M166.4 130.6 L160 124.3 L153.6 130.6\"/><path class=\"thin\" d=\"M210.3 86.7 A13 13 0 0 1 219.5 64.5\"/><path class=\"thin\" d=\"M100.5 64.5 A13 13 0 0 1 109.7 86.7\"/><circle class=\"dt\" cx=\"100.5\" cy=\"18\" r=\"3\"/><circle class=\"dt\" cx=\"219.5\" cy=\"18\" r=\"3\"/><circle class=\"dt\" cx=\"219.5\" cy=\"77.5\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"137\" r=\"3\"/><circle class=\"dt\" cx=\"100.5\" cy=\"77.5\" r=\"3\"/><text x=\"90.5\" y=\"22\" text-anchor=\"end\">A</text><text x=\"229.5\" y=\"22\" text-anchor=\"start\">B</text><text x=\"229.5\" y=\"82.5\" text-anchor=\"start\">C</text><text x=\"160\" y=\"153\" text-anchor=\"middle\">D</text><text x=\"90.5\" y=\"82.5\" text-anchor=\"end\">E</text><text class=\"sm\" x=\"160\" y=\"36\" text-anchor=\"middle\">17 in</text><text class=\"sm\" x=\"122.5\" y=\"51.8\" text-anchor=\"middle\">8.5 in</text><text class=\"sm\" x=\"197.5\" y=\"51.8\" text-anchor=\"middle\">8.5 in</text><text class=\"sm\" x=\"211.8\" y=\"121.3\" text-anchor=\"middle\">12 in</text><text class=\"sm\" x=\"108.3\" y=\"121.3\" text-anchor=\"middle\">12 in</text><text class=\"sm\" x=\"268\" y=\"146\" text-anchor=\"middle\">home plate</text></svg></figure><p class=\"geo-given\">A baseball home plate is pentagon <strong>ABCDE</strong>. ∠<strong>A</strong>, ∠<strong>B</strong> and ∠<strong>D</strong> are right angles, and ∠<strong>C</strong> ≅ ∠<strong>E</strong>.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of home plate?",
          choices: [
            { letter: "A", text: "540°" },
            { letter: "B", text: "900°" },
            { letter: "C", text: "720°" },
            { letter: "D", text: "360°" }
          ],
          correct: "A"
        },
        {
          id: "angleC",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is m∠C?",
          choices: [
            { letter: "A", text: "270°" },
            { letter: "B", text: "45°" },
            { letter: "C", text: "135°" },
            { letter: "D", text: "108°" }
          ],
          correct: "C"
        },
        {
          id: "extC",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of an exterior angle of home plate at corner C?",
          choices: [
            { letter: "A", text: "135°" },
            { letter: "B", text: "225°" },
            { letter: "C", text: "72°" },
            { letter: "D", text: "45°" }
          ],
          correct: "D"
        },
        {
          id: "extsum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which statement about the exterior angles of home plate, one at each corner, is true?",
          choices: [
            { letter: "A", text: "They add to 540°." },
            { letter: "B", text: "They add to 360°." },
            { letter: "C", text: "Each one measures 72°." },
            { letter: "D", text: "They add to 900°." }
          ],
          correct: "B"
        },
        {
          id: "regular",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Is home plate a regular pentagon?",
          choices: [
            { letter: "A", text: "Yes: it has five sides." },
            { letter: "B", text: "Yes: its angles add to 540°." },
            { letter: "C", text: "No: its angles are not all congruent." },
            { letter: "D", text: "No: a pentagon's angles add to 360°." }
          ],
          correct: "C"
        },
        {
          id: "logo",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A team logo is a regular polygon. Each interior angle measures 162°. How many sides does the logo have?",
          choices: [
            { letter: "A", text: "20" },
            { letter: "B", text: "10" },
            { letter: "C", text: "about 2.2" },
            { letter: "D", text: "18" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc2-raid-spinner",
      family: "GEO",
      mode: "raid",
      title: "The Board Game Spinner",
      kind: "Polygons · G.PC.2",
      blurb: "A sixteen-sided spinner split into triangles.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 154\" role=\"img\" aria-label=\"A spinner whose edge is a regular 16-gon, with segments from the center O to all 16 corners and an arrow at O; a gold arc marks one interior angle at a corner on the right\"><polygon class=\"sh2\" points=\"160,13 184.5,17.9 205.3,31.7 219.1,52.5 224,77 219.1,101.5 205.3,122.3 184.5,136.1 160,141 135.5,136.1 114.7,122.3 100.9,101.5 96,77 100.9,52.5 114.7,31.7 135.5,17.9\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"160\" y2=\"13\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"184.5\" y2=\"17.9\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"205.3\" y2=\"31.7\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"219.1\" y2=\"52.5\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"224\" y2=\"77\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"219.1\" y2=\"101.5\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"205.3\" y2=\"122.3\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"184.5\" y2=\"136.1\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"160\" y2=\"141\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"135.5\" y2=\"136.1\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"114.7\" y2=\"122.3\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"100.9\" y2=\"101.5\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"96\" y2=\"77\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"100.9\" y2=\"52.5\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"114.7\" y2=\"31.7\"/><line class=\"thin\" x1=\"160\" y1=\"77\" x2=\"135.5\" y2=\"17.9\"/><path class=\"ac\" d=\"M221.9 87.8 A11 11 0 0 1 221.9 66.2\"/><line class=\"ln\" x1=\"154\" y1=\"87.4\" x2=\"182\" y2=\"38.9\"/><path class=\"ln\" d=\"M174.2 43.4 L182 38.9 L182 47.9\"/><circle class=\"dt\" cx=\"160\" cy=\"77\" r=\"3\"/><text x=\"148\" y=\"93\" text-anchor=\"middle\">O</text><text class=\"sm acc\" x=\"234\" y=\"82\" text-anchor=\"start\">gold angle</text></svg></figure><p class=\"geo-given\">The edge of a board game spinner is a regular 16-gon. Segments from the center <strong>O</strong> to the 16 corners split it into 16 congruent triangles. The gold arc marks one interior angle.</p>",
      claims: [
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the 16-gon?",
          choices: [
            { letter: "A", text: "2880°" },
            { letter: "B", text: "2700°" },
            { letter: "C", text: "360°" },
            { letter: "D", text: "2520°" }
          ],
          correct: "D"
        },
        {
          id: "gold",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of the gold interior angle?",
          choices: [
            { letter: "A", text: "22.5°" },
            { letter: "B", text: "157.5°" },
            { letter: "C", text: "168.75°" },
            { letter: "D", text: "180°" }
          ],
          correct: "B"
        },
        {
          id: "ext",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of each exterior angle of the 16-gon?",
          choices: [
            { letter: "A", text: "22.5°" },
            { letter: "B", text: "157.5°" },
            { letter: "C", text: "11.25°" },
            { letter: "D", text: "24°" }
          ],
          correct: "A"
        },
        {
          id: "triangles",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "The 16 triangles have angles that add to 16 · 180° = 2880°, but the 16-gon's angles add to less. Why?",
          choices: [
            { letter: "A", text: "Two of the 16 triangles overlap each other." },
            { letter: "B", text: "Each triangle's angles add to less than 180°." },
            { letter: "C", text: "The 360° around O is not part of the 16-gon's angles." },
            { letter: "D", text: "The segments add two extra 180° angles." }
          ],
          correct: "C"
        },
        {
          id: "extsum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the 16 exterior angles, one at each corner?",
          choices: [
            { letter: "A", text: "2520°" },
            { letter: "B", text: "5760°" },
            { letter: "C", text: "22.5°" },
            { letter: "D", text: "360°" }
          ],
          correct: "D"
        },
        {
          id: "big",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A bigger spinner's edge is a regular polygon with exterior angles of 7.5°. How many sides does its edge have?",
          choices: [
            { letter: "A", text: "24" },
            { letter: "B", text: "48" },
            { letter: "C", text: "172.5" },
            { letter: "D", text: "50" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc2-raid-soccer-ball",
      family: "GEO",
      mode: "raid",
      title: "Panels on a Soccer Ball",
      kind: "Polygons · G.PC.2",
      blurb: "Pentagons and hexagons that will not lie flat.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A regular pentagon panel, shaded blue, with a regular hexagon panel on each of its five sides, laid flat; at each corner of the pentagon a thin wedge-shaped gap is left between two hexagons, and the gap at the top corner P is shaded gold\"><polygon class=\"sh2\" points=\"160,64.5 184.3,82.1 175,110.6 145,110.6 135.7,82.1\"/><polygon class=\"ln\" points=\"160,64.5 163.1,34.6 190.5,22.4 214.8,40.1 211.7,69.9 184.3,82.1\"/><polygon class=\"ln\" points=\"184.3,82.1 213.6,75.9 233.7,98.2 224.4,126.7 195.1,132.9 175,110.6\"/><polygon class=\"ln\" points=\"175,110.6 190,136.6 175,162.6 145,162.6 130,136.6 145,110.6\"/><polygon class=\"ln\" points=\"145,110.6 124.9,132.9 95.6,126.7 86.3,98.2 106.4,75.9 135.7,82.1\"/><polygon class=\"ln\" points=\"135.7,82.1 108.3,69.9 105.2,40.1 129.5,22.4 156.9,34.6 160,64.5\"/><polygon class=\"sh\" points=\"160,64.5 163.1,34.6 156.9,34.6\"/><line class=\"ac\" x1=\"160\" y1=\"64.5\" x2=\"163.1\" y2=\"34.6\"/><line class=\"ac\" x1=\"160\" y1=\"64.5\" x2=\"156.9\" y2=\"34.6\"/><circle class=\"dta\" cx=\"160\" cy=\"64.5\" r=\"3\"/><text class=\"acc\" x=\"160\" y=\"83.5\" text-anchor=\"middle\">P</text><text class=\"sm acc\" x=\"160\" y=\"20.6\" text-anchor=\"middle\">gap</text></svg></figure><p class=\"geo-given\">A soccer ball is stitched from regular pentagon and regular hexagon panels with equal sides. Laid flat, the panels around one pentagon do not quite fit: at a corner such as <strong>P</strong>, one pentagon and two hexagons meet and leave a gap (gold).</p>",
      claims: [
        {
          id: "pent",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of each interior angle of a pentagon panel?",
          choices: [
            { letter: "A", text: "72°" },
            { letter: "B", text: "108°" },
            { letter: "C", text: "540°" },
            { letter: "D", text: "120°" }
          ],
          correct: "B"
        },
        {
          id: "gap",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of the gold gap at P?",
          choices: [
            { letter: "A", text: "132°" },
            { letter: "B", text: "348°" },
            { letter: "C", text: "36°" },
            { letter: "D", text: "12°" }
          ],
          correct: "D"
        },
        {
          id: "hexwhy",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Regular hexagons alone can cover a flat field with no gaps. Which reason explains why?",
          choices: [
            { letter: "A", text: "A hexagon has an even number of sides." },
            { letter: "B", text: "Its 60° exterior angles add to 360°." },
            { letter: "C", text: "Three 120° angles fill the 360° at a point." },
            { letter: "D", text: "Its angle sum, 720°, is a multiple of 360°." }
          ],
          correct: "C"
        },
        {
          id: "twice",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A designer wants a regular polygon panel whose interior angles are each twice its exterior angles. How many sides will it have?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "3" },
            { letter: "C", text: "4" },
            { letter: "D", text: "12" }
          ],
          correct: "A"
        },
        {
          id: "kai",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Kai says, \"At P, 108° + 120° + 120° = 360°, so the flat panels fit with no gap.\" What is his error?",
          choices: [
            { letter: "A", text: "The three angles add to 348°, not 360°." },
            { letter: "B", text: "A pentagon's angle is 72°, not 108°." },
            { letter: "C", text: "A hexagon's angle is 135°, not 120°." },
            { letter: "D", text: "Angles around a point add to 180°." }
          ],
          correct: "A"
        },
        {
          id: "sets",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which set of regular polygons can meet at one point with no gap or overlap?",
          choices: [
            { letter: "A", text: "a pentagon and two hexagons" },
            { letter: "B", text: "three regular pentagons" },
            { letter: "C", text: "a square, a hexagon and a 12-gon" },
            { letter: "D", text: "two octagons and a triangle" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc2-raid-cone-course",
      family: "GEO",
      mode: "raid",
      title: "The Cone Course at the Skate Park",
      kind: "Polygons · G.PC.2",
      blurb: "Seven cones, seven equal turns.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"A closed skating course: straight legs between 7 cones at the corners of a regular heptagon; the leg into the upper right cone is extended as a dashed line, and the gold arc between the extension and the next leg is the skater's turn\"><polygon class=\"ln\" points=\"150,18 198.5,41.3 210.4,93.8 176.9,135.9 123.1,135.9 89.6,93.8 101.5,41.3\"/><path class=\"thin\" d=\"M145 22 L150 12 L155 22 Z\"/><path class=\"thin\" d=\"M193.5 45.3 L198.5 35.3 L203.5 45.3 Z\"/><path class=\"thin\" d=\"M205.4 97.8 L210.4 87.8 L215.4 97.8 Z\"/><path class=\"thin\" d=\"M171.9 139.9 L176.9 129.9 L181.9 139.9 Z\"/><path class=\"thin\" d=\"M118.1 139.9 L123.1 129.9 L128.1 139.9 Z\"/><path class=\"thin\" d=\"M84.6 97.8 L89.6 87.8 L94.6 97.8 Z\"/><path class=\"thin\" d=\"M96.5 45.3 L101.5 35.3 L106.5 45.3 Z\"/><line class=\"ln dash\" x1=\"198.5\" y1=\"41.3\" x2=\"245.3\" y2=\"63.9\"/><path class=\"ac\" d=\"M214.7 49.2 A18 18 0 0 1 202.5 58.9\"/><text class=\"sm acc\" x=\"241.3\" y=\"81.9\" text-anchor=\"middle\">turn</text><path class=\"thin\" d=\"M165.8 31.1 L174.2 29.7 L170.1 22.1\"/><text class=\"sm\" x=\"150\" y=\"85\" text-anchor=\"middle\">7 cones</text></svg></figure><p class=\"geo-given\">A skater rides a closed course of straight legs around 7 cones. The cones are the corners of a regular heptagon. At each cone she turns through the same angle (gold) to start the next leg.</p>",
      claims: [
        {
          id: "lap",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Through how many degrees does the skater turn in all during one full lap?",
          choices: [
            { letter: "A", text: "900°" },
            { letter: "B", text: "2520°" },
            { letter: "C", text: "360°" },
            { letter: "D", text: "180°" }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "To the nearest tenth of a degree, what is the measure of each gold turn?",
          choices: [
            { letter: "A", text: "51.4°" },
            { letter: "B", text: "128.6°" },
            { letter: "C", text: "25.7°" },
            { letter: "D", text: "60.0°" }
          ],
          correct: "A"
        },
        {
          id: "between",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "To the nearest tenth of a degree, what is the angle between two legs at a cone, inside the course?",
          choices: [
            { letter: "A", text: "51.4°" },
            { letter: "B", text: "154.3°" },
            { letter: "C", text: "180.0°" },
            { letter: "D", text: "128.6°" }
          ],
          correct: "D"
        },
        {
          id: "fifteen",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "For a contest, the coach sets up a regular course with a 15° turn at each cone. How many cones does the course have?",
          choices: [
            { letter: "A", text: "12" },
            { letter: "B", text: "24" },
            { letter: "C", text: "165" },
            { letter: "D", text: "26" }
          ],
          correct: "B"
        },
        {
          id: "cannot",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "Which equal turn at every cone can NOT make a closed regular course?",
          choices: [
            { letter: "A", text: "40°" },
            { letter: "B", text: "70°" },
            { letter: "C", text: "45°" },
            { letter: "D", text: "72°" }
          ],
          correct: "B"
        },
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the seven angles inside the course, one at each cone?",
          choices: [
            { letter: "A", text: "1260°" },
            { letter: "B", text: "1080°" },
            { letter: "C", text: "360°" },
            { letter: "D", text: "900°" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc2-raid-ballfield",
      family: "GEO",
      mode: "raid",
      title: "The Ballfield Fence",
      kind: "Polygons · G.PC.2",
      blurb: "Foul lines, a bent fence and one unknown.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"Hexagon HRSCTL, a ballfield: a right angle at home plate H; angles (x + 30) degrees at the foul poles R and L, (2x + 10) degrees at the fence bends S and T, and (3x minus 80) degrees at center field C\"><polygon class=\"sh\" points=\"100,146 167.9,78.1 144.9,45.4 100,24.4 55.1,45.4 32.1,78.1\"/><path class=\"thin\" d=\"M107.1 138.9 L100 131.9 L92.9 138.9\"/><path class=\"thin\" d=\"M159.4 86.6 A12 12 0 0 1 161 68.3\"/><path class=\"thin\" d=\"M151.8 55.2 A12 12 0 0 1 134.1 40.3\"/><path class=\"thin\" d=\"M110.9 29.5 A12 12 0 0 1 89.1 29.5\"/><path class=\"thin\" d=\"M65.9 40.3 A12 12 0 0 1 48.2 55.2\"/><path class=\"thin\" d=\"M39 68.3 A12 12 0 0 1 40.6 86.6\"/><circle class=\"dt\" cx=\"100\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"167.9\" cy=\"78.1\" r=\"3\"/><circle class=\"dt\" cx=\"144.9\" cy=\"45.4\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"24.4\" r=\"3\"/><circle class=\"dt\" cx=\"55.1\" cy=\"45.4\" r=\"3\"/><circle class=\"dt\" cx=\"32.1\" cy=\"78.1\" r=\"3\"/><text x=\"100\" y=\"162\" text-anchor=\"middle\">H</text><text x=\"177.9\" y=\"83.1\" text-anchor=\"start\">R</text><text x=\"152.9\" y=\"41.4\" text-anchor=\"start\">S</text><text x=\"100\" y=\"17.4\" text-anchor=\"middle\">C</text><text x=\"47.1\" y=\"41.4\" text-anchor=\"end\">T</text><text x=\"22.1\" y=\"83.1\" text-anchor=\"end\">L</text><text class=\"sm\" x=\"200\" y=\"46\" text-anchor=\"start\">m∠R = (x + 30)°</text><text class=\"sm\" x=\"200\" y=\"66\" text-anchor=\"start\">m∠S = (2x + 10)°</text><text class=\"sm\" x=\"200\" y=\"86\" text-anchor=\"start\">m∠C = (3x − 80)°</text><text class=\"sm\" x=\"200\" y=\"106\" text-anchor=\"start\">m∠T = (2x + 10)°</text><text class=\"sm\" x=\"200\" y=\"126\" text-anchor=\"start\">m∠L = (x + 30)°</text><text class=\"sm\" x=\"200\" y=\"146\" text-anchor=\"start\">m∠H = 90°</text></svg></figure><p class=\"geo-given\">A youth ballfield is the convex hexagon <strong>HRSCTL</strong>. The foul lines meet at a right angle at home plate <strong>H</strong>. The outfield fence runs in straight sections from foul pole <strong>R</strong> through <strong>S</strong>, <strong>C</strong> and <strong>T</strong> to foul pole <strong>L</strong>. The other angles are given in terms of x, in degrees.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which equation can be used to find x?",
          choices: [
            { letter: "A", text: "9x + 90 = 720" },
            { letter: "B", text: "9x = 720" },
            { letter: "C", text: "9x + 90 = 540" },
            { letter: "D", text: "9x + 90 = 360" }
          ],
          correct: "A"
        },
        {
          id: "x",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Solve for x using the angles of the field.",
          choices: [
            { letter: "A", text: "80" },
            { letter: "B", text: "50" },
            { letter: "C", text: "70" },
            { letter: "D", text: "110" }
          ],
          correct: "C"
        },
        {
          id: "center",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of the angle at center field, m∠C?",
          choices: [
            { letter: "A", text: "160°" },
            { letter: "B", text: "130°" },
            { letter: "C", text: "70°" },
            { letter: "D", text: "50°" }
          ],
          correct: "B"
        },
        {
          id: "extR",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of an exterior angle of the field at foul pole R?",
          choices: [
            { letter: "A", text: "100°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "260°" },
            { letter: "D", text: "80°" }
          ],
          correct: "D"
        },
        {
          id: "largest",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which corners of the field have the largest angles?",
          choices: [
            { letter: "A", text: "C only" },
            { letter: "B", text: "R and L" },
            { letter: "C", text: "S and T" },
            { letter: "D", text: "H only" }
          ],
          correct: "C"
        },
        {
          id: "walk",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "A groundskeeper walks the whole boundary once. How many degrees does she turn in all at R, S, C, T and L together, leaving out H?",
          choices: [
            { letter: "A", text: "270°" },
            { letter: "B", text: "360°" },
            { letter: "C", text: "630°" },
            { letter: "D", text: "90°" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc2-raid-arena",
      family: "GEO",
      mode: "raid",
      title: "The Video Game Arena",
      kind: "Polygons · G.PC.2",
      blurb: "A regular arena with angles in terms of x.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A regular 18-sided arena floor; at the corner on the right, one side is extended as a dashed line; the interior angle is labeled (5x + 35) degrees and the exterior angle between the extension and the next side is labeled (x minus 5) degrees\"><polygon class=\"sh2\" points=\"210,80 206.1,101.9 195,121.1 178,135.4 157.1,143 134.9,143 114,135.4 97,121.1 85.9,101.9 82,80 85.9,58.1 97,38.9 114,24.6 134.9,17 157.1,17 178,24.6 195,38.9 206.1,58.1\"/><line class=\"ln dash\" x1=\"210\" y1=\"80\" x2=\"220.1\" y2=\"22.9\"/><path class=\"ac\" d=\"M207.2 95.8 A16 16 0 0 1 207.2 64.2\"/><path class=\"ac\" d=\"M204.8 50.5 A30 30 0 0 1 215.2 50.5\"/><circle class=\"dt\" cx=\"210\" cy=\"80\" r=\"3\"/><text class=\"sm acc\" x=\"188\" y=\"85\" text-anchor=\"end\">(5x + 35)°</text><text class=\"sm acc\" x=\"226\" y=\"46\" text-anchor=\"start\">(x − 5)°</text><text class=\"sm\" x=\"146\" y=\"106\" text-anchor=\"middle\">arena floor</text></svg></figure><p class=\"geo-given\">In a video game, the arena floor is a regular polygon. At one corner, the interior angle measures (5x + 35)° and the exterior angle measures (x − 5)°.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which equation relates the two marked angles?",
          choices: [
            { letter: "A", text: "(5x + 35) + (x − 5) = 360" },
            { letter: "B", text: "5x + 35 = x − 5" },
            { letter: "C", text: "(5x + 35) + (x − 5) = 90" },
            { letter: "D", text: "(5x + 35) + (x − 5) = 180" }
          ],
          correct: "D"
        },
        {
          id: "ext",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of each exterior angle of the arena floor?",
          choices: [
            { letter: "A", text: "20°" },
            { letter: "B", text: "160°" },
            { letter: "C", text: "25°" },
            { letter: "D", text: "50°" }
          ],
          correct: "A"
        },
        {
          id: "sides",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "How many sides does the arena floor have?",
          choices: [
            { letter: "A", text: "9" },
            { letter: "B", text: "18" },
            { letter: "C", text: "20" },
            { letter: "D", text: "2.25" }
          ],
          correct: "B"
        },
        {
          id: "sum",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the sum of the interior angles of the arena floor?",
          choices: [
            { letter: "A", text: "3240°" },
            { letter: "B", text: "3060°" },
            { letter: "C", text: "2880°" },
            { letter: "D", text: "360°" }
          ],
          correct: "C"
        },
        {
          id: "next",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "The next level's arena is a regular polygon with 6 more sides than this one. What is each of its interior angles?",
          choices: [
            { letter: "A", text: "15°" },
            { letter: "B", text: "165°" },
            { letter: "C", text: "160°" },
            { letter: "D", text: "120°" }
          ],
          correct: "B"
        },
        {
          id: "x",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What value of x fits the two marked angles?",
          choices: [
            { letter: "A", text: "55" },
            { letter: "B", text: "10" },
            { letter: "C", text: "30" },
            { letter: "D", text: "25" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc2-raid-bike-loop",
      family: "GEO",
      mode: "raid",
      title: "The Bike Race Loop",
      kind: "Polygons · G.PC.2",
      blurb: "Five turns in terms of x around a loop.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Pentagon ABCDE, a bike race loop; at each corner the incoming leg is extended as a dashed line and the gold turn angle is labeled: (2x + 12) degrees at A, (3x + 20) at B, (x + 50) at C, (2x + 58) at D and (2x + 20) at E\"><polygon class=\"sh\" points=\"139.9,24.8 211.9,24.8 223.4,89.7 123.8,147.2 96.6,80.1\"/><line class=\"thin dash\" x1=\"139.9\" y1=\"24.8\" x2=\"155.9\" y2=\"4.3\"/><path class=\"ac\" d=\"M147.9 14.5 A13 13 0 0 1 152.9 24.8\"/><text class=\"sm acc\" x=\"159.9\" y=\"14.8\" text-anchor=\"start\">(2x + 12)°</text><line class=\"thin dash\" x1=\"211.9\" y1=\"24.8\" x2=\"237.9\" y2=\"24.8\"/><path class=\"ac\" d=\"M224.9 24.8 A13 13 0 0 1 214.2 37.6\"/><text class=\"sm acc\" x=\"229.9\" y=\"50.8\" text-anchor=\"start\">(3x + 20)°</text><line class=\"thin dash\" x1=\"223.4\" y1=\"89.7\" x2=\"227.9\" y2=\"115.4\"/><path class=\"ac\" d=\"M225.6 102.6 A13 13 0 0 1 212.1 96.2\"/><text class=\"sm acc\" x=\"231.4\" y=\"131.7\" text-anchor=\"middle\">(x + 50)°</text><line class=\"thin dash\" x1=\"123.8\" y1=\"147.2\" x2=\"101.2\" y2=\"160.2\"/><path class=\"ac\" d=\"M112.5 153.7 A13 13 0 0 1 118.9 135.2\"/><text class=\"sm acc\" x=\"101.8\" y=\"139.2\" text-anchor=\"end\">(2x + 58)°</text><line class=\"thin dash\" x1=\"96.6\" y1=\"80.1\" x2=\"86.9\" y2=\"56\"/><path class=\"ac\" d=\"M91.8 68.1 A13 13 0 0 1 104.6 69.9\"/><text class=\"sm acc\" x=\"82.6\" y=\"50.1\" text-anchor=\"end\">(2x + 20)°</text><circle class=\"dt\" cx=\"139.9\" cy=\"24.8\" r=\"3\"/><circle class=\"dt\" cx=\"211.9\" cy=\"24.8\" r=\"3\"/><circle class=\"dt\" cx=\"223.4\" cy=\"89.7\" r=\"3\"/><circle class=\"dt\" cx=\"123.8\" cy=\"147.2\" r=\"3\"/><circle class=\"dt\" cx=\"96.6\" cy=\"80.1\" r=\"3\"/><text x=\"149.5\" y=\"49.5\" text-anchor=\"middle\">A</text><text x=\"197.8\" y=\"46.6\" text-anchor=\"middle\">B</text><text x=\"203.4\" y=\"85.5\" text-anchor=\"middle\">C</text><text x=\"130.9\" y=\"131.4\" text-anchor=\"middle\">D</text><text x=\"118.4\" y=\"88.2\" text-anchor=\"middle\">E</text></svg></figure><p class=\"geo-given\">A bike race loop <strong>ABCDE</strong> has five straight legs. At each corner a rider turns through the gold angle (an exterior angle of the loop), given in terms of x, in degrees.</p>",
      claims: [
        {
          id: "equation",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Which equation can a rider use to find x from the turns?",
          choices: [
            { letter: "A", text: "10x + 160 = 540" },
            { letter: "B", text: "10x + 160 = 360" },
            { letter: "C", text: "10x = 360" },
            { letter: "D", text: "10x + 160 = 180" }
          ],
          correct: "B"
        },
        {
          id: "x",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Use the five turns to find x.",
          choices: [
            { letter: "A", text: "38" },
            { letter: "B", text: "36" },
            { letter: "C", text: "56" },
            { letter: "D", text: "20" }
          ],
          correct: "D"
        },
        {
          id: "sharpest",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "At which corner does the rider make the largest turn?",
          choices: [
            { letter: "A", text: "at D" },
            { letter: "B", text: "at B" },
            { letter: "C", text: "at C" },
            { letter: "D", text: "at E" }
          ],
          correct: "A"
        },
        {
          id: "insideD",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "What is the measure of the angle inside the loop at corner D?",
          choices: [
            { letter: "A", text: "98°" },
            { letter: "B", text: "262°" },
            { letter: "C", text: "82°" },
            { letter: "D", text: "108°" }
          ],
          correct: "C"
        },
        {
          id: "six",
          sol: "G.PC.2",
          sub: "G.PC.2.1",
          stem: "Next year the loop will have six straight legs and six turns. What will the six turns add to?",
          choices: [
            { letter: "A", text: "360°" },
            { letter: "B", text: "720°" },
            { letter: "C", text: "540°" },
            { letter: "D", text: "432°" }
          ],
          correct: "A"
        },
        {
          id: "practice",
          sol: "G.PC.2",
          sub: "G.PC.2.2",
          stem: "A practice loop is a regular polygon in which each angle inside the loop is 4 times each turn. How many sides does it have?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "8" },
            { letter: "C", text: "10" },
            { letter: "D", text: "about 2.5" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
