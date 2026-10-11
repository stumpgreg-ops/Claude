/* SOL Labyrinth — Geometry game (family GEO), quadrilaterals: G.PC.1 (Virginia 2023 Geometry SOL), v5.20. Original items only.
   Modes: ring / Wolf Ring (7 packs, art, design, music and making things) and worms / Root Worms (7 packs, nature and the
   outdoors). A pack is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the
   given facts, then six questions about it. Every figure coordinate and numeric answer was computed, and every distractor
   is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-pc1-ring-quilt-patch",
      family: "GEO",
      mode: "ring",
      title: "The Quilt Patch",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A parallelogram patch of fabric with a 65° corner.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"Shaded parallelogram ABCD: A at the lower left, B at the lower right, C at the upper right and D at the upper left; side AB is labeled 9 in, side AD is labeled 5 in, the angle at A is marked 65 degrees, and dashed diagonals AC and BD meet at E\"><polygon class=\"sh\" points=\"50,118 230,118 272.3,27.4 92.3,27.4\"/><line class=\"thin dash\" x1=\"50\" y1=\"118\" x2=\"272.3\" y2=\"27.4\"/><line class=\"thin dash\" x1=\"230\" y1=\"118\" x2=\"92.3\" y2=\"27.4\"/><path class=\"thin\" d=\"M72 118 A22 22 0 0 0 59.3 98.1\"/><circle class=\"dt\" cx=\"50\" cy=\"118\" r=\"3\"/><circle class=\"dt\" cx=\"230\" cy=\"118\" r=\"3\"/><circle class=\"dt\" cx=\"272.3\" cy=\"27.4\" r=\"3\"/><circle class=\"dt\" cx=\"92.3\" cy=\"27.4\" r=\"3\"/><circle class=\"dt\" cx=\"161.1\" cy=\"72.7\" r=\"3\"/><text x=\"46\" y=\"135\" text-anchor=\"middle\">A</text><text x=\"234\" y=\"135\" text-anchor=\"middle\">B</text><text x=\"276.3\" y=\"19.4\" text-anchor=\"middle\">C</text><text x=\"88.3\" y=\"19.4\" text-anchor=\"middle\">D</text><text x=\"161.1\" y=\"62.7\" text-anchor=\"middle\">E</text><text x=\"140\" y=\"135\" text-anchor=\"middle\">9 in</text><text x=\"60\" y=\"76\" text-anchor=\"end\">5 in</text><text x=\"82.7\" y=\"93.6\" text-anchor=\"middle\">65°</text></svg></figure><p class=\"geo-given\">A quilter cuts a patch shaped like parallelogram <strong>ABCD</strong>. AB = 9 in, AD = 5 in and m∠DAB = 65°. Seams run along the diagonals <strong>AC</strong> and <strong>BD</strong>, which meet at <strong>E</strong>.</p>",
      claims: [
        {
          id: "opposite",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "What is m∠BCD on the patch?",
          choices: [
            { letter: "A", text: "65°" },
            { letter: "B", text: "115°" },
            { letter: "C", text: "25°" },
            { letter: "D", text: "295°" }
          ],
          correct: "A"
        },
        {
          id: "consecutive",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "What is m∠ABC on the patch?",
          choices: [
            { letter: "A", text: "65°" },
            { letter: "B", text: "25°" },
            { letter: "C", text: "230°" },
            { letter: "D", text: "115°" }
          ],
          correct: "D"
        },
        {
          id: "binding",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "The quilter sews binding all the way around the edge of the patch. How long is the binding?",
          choices: [
            { letter: "A", text: "14 in" },
            { letter: "B", text: "28 in" },
            { letter: "C", text: "45 in" },
            { letter: "D", text: "19 in" }
          ],
          correct: "B"
        },
        {
          id: "seams",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement about the seams AC and BD must be true?",
          choices: [
            { letter: "A", text: "They bisect each other." },
            { letter: "B", text: "They are congruent." },
            { letter: "C", text: "They are perpendicular." },
            { letter: "D", text: "They bisect the angles of the patch." }
          ],
          correct: "A"
        },
        {
          id: "algebra",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "On the patch, AE = (2x − 2) in and EC = (x + 2) in. How long is seam AC?",
          choices: [
            { letter: "A", text: "4 in" },
            { letter: "B", text: "12 in" },
            { letter: "C", text: "6 in" },
            { letter: "D", text: "8 in" }
          ],
          correct: "B"
        },
        {
          id: "nottrue",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is NOT true for patch ABCD?",
          choices: [
            { letter: "A", text: "AB ∥ DC" },
            { letter: "B", text: "AD = BC" },
            { letter: "C", text: "∠DAB ≅ ∠ABC" },
            { letter: "D", text: "∠DAB and ∠ADC are supplementary." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc1-ring-stained-glass",
      family: "GEO",
      mode: "ring",
      title: "The Stained-Glass Kite",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A kite-shaped pane with lead strips along its diagonals.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Shaded kite ABCD with A at the left, B at the top, C at the far right and D at the bottom; diagonals AC and BD cross at right angles at E; AE is labeled 15 and EC is labeled 48, and a note gives BD = 40; one tick on AB and AD, two ticks on CB and CD\"><polygon class=\"sh\" points=\"40,78 91,10 254.2,78 91,146\"/><line class=\"thin\" x1=\"40\" y1=\"78\" x2=\"254.2\" y2=\"78\"/><line class=\"thin\" x1=\"91\" y1=\"10\" x2=\"91\" y2=\"146\"/><path class=\"thin\" d=\"M99 78 L99 70 L91 70\"/><line class=\"thin\" x1=\"69.5\" y1=\"47\" x2=\"61.5\" y2=\"41\"/><line class=\"thin\" x1=\"61.5\" y1=\"115\" x2=\"69.5\" y2=\"109\"/><line class=\"thin\" x1=\"176.4\" y1=\"40.2\" x2=\"172.5\" y2=\"49.4\"/><line class=\"thin\" x1=\"172.7\" y1=\"38.6\" x2=\"168.8\" y2=\"47.8\"/><line class=\"thin\" x1=\"172.5\" y1=\"106.6\" x2=\"176.4\" y2=\"115.8\"/><line class=\"thin\" x1=\"168.8\" y1=\"108.2\" x2=\"172.7\" y2=\"117.4\"/><circle class=\"dt\" cx=\"40\" cy=\"78\" r=\"3\"/><circle class=\"dt\" cx=\"91\" cy=\"10\" r=\"3\"/><circle class=\"dt\" cx=\"254.2\" cy=\"78\" r=\"3\"/><circle class=\"dt\" cx=\"91\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"91\" cy=\"78\" r=\"3\"/><text x=\"28\" y=\"83\" text-anchor=\"middle\">A</text><text x=\"266.2\" y=\"83\" text-anchor=\"middle\">C</text><text x=\"78\" y=\"16\" text-anchor=\"middle\">B</text><text x=\"76\" y=\"150\" text-anchor=\"middle\">D</text><text x=\"101\" y=\"96\" text-anchor=\"middle\">E</text><text x=\"68\" y=\"74\" text-anchor=\"middle\">15</text><text x=\"176\" y=\"97\" text-anchor=\"middle\">48</text><text class=\"sm\" x=\"196\" y=\"140\" text-anchor=\"middle\">BD = 40</text></svg></figure><p class=\"geo-given\">A stained-glass pane is kite <strong>ABCD</strong> with AB = AD and CB = CD. Lead strips run along its diagonals, which meet at <strong>E</strong>. AE = 15 cm, EC = 48 cm and BD = 40 cm.</p>",
      claims: [
        {
          id: "bisected",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which segment must be congruent to BE?",
          choices: [
            { letter: "A", text: "AE" },
            { letter: "B", text: "EC" },
            { letter: "C", text: "AB" },
            { letter: "D", text: "ED" }
          ],
          correct: "D"
        },
        {
          id: "short",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the short edge AB of the pane?",
          choices: [
            { letter: "A", text: "35 cm" },
            { letter: "B", text: "25 cm" },
            { letter: "C", text: "5√7 cm" },
            { letter: "D", text: "5√73 cm" }
          ],
          correct: "B"
        },
        {
          id: "long",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the long edge CB of the pane?",
          choices: [
            { letter: "A", text: "52 cm" },
            { letter: "B", text: "68 cm" },
            { letter: "C", text: "about 43.6 cm" },
            { letter: "D", text: "about 62.5 cm" }
          ],
          correct: "A"
        },
        {
          id: "angle",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which angle must be congruent to ∠BAE?",
          choices: [
            { letter: "A", text: "∠BCE" },
            { letter: "B", text: "∠ABE" },
            { letter: "C", text: "∠ABC" },
            { letter: "D", text: "∠DAE" }
          ],
          correct: "D"
        },
        {
          id: "error",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Lucia says the pane is a rhombus because its diagonals are perpendicular. Which statement explains her error?",
          choices: [
            { letter: "A", text: "A rhombus never has perpendicular diagonals." },
            { letter: "B", text: "A rhombus must have BD longer than AC." },
            { letter: "C", text: "Perpendicular diagonals are not enough; AE ≠ EC." },
            { letter: "D", text: "There is no error; the pane is a rhombus." }
          ],
          correct: "C"
        },
        {
          id: "lead",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "A lead strip also runs around the whole edge of the pane. How long is that strip?",
          choices: [
            { letter: "A", text: "77 cm" },
            { letter: "B", text: "103 cm" },
            { letter: "C", text: "154 cm" },
            { letter: "D", text: "100 cm" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc1-ring-stage-flat",
      family: "GEO",
      mode: "ring",
      title: "The Stage Flat",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Two crossed braces hold a tall rectangular set piece.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Tall rectangle ABCD with A at the lower left, B at the lower right, C at the upper right and D at the upper left; braces AC and BD cross at E; side AB is labeled 12 ft, angle CAB is marked 53 degrees, and there is a right-angle mark at B\"><polygon class=\"sh2\" points=\"115,140 205,140 205,20 115,20\"/><line class=\"ln\" x1=\"115\" y1=\"140\" x2=\"205\" y2=\"20\"/><line class=\"ln\" x1=\"205\" y1=\"140\" x2=\"115\" y2=\"20\"/><path class=\"thin\" d=\"M197 140 L197 132 L205 132\"/><path class=\"thin\" d=\"M135 140 A20 20 0 0 0 127 124\"/><circle class=\"dt\" cx=\"115\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"205\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"205\" cy=\"20\" r=\"3\"/><circle class=\"dt\" cx=\"115\" cy=\"20\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"80\" r=\"3\"/><text x=\"104\" y=\"145\" text-anchor=\"middle\">A</text><text x=\"216\" y=\"145\" text-anchor=\"middle\">B</text><text x=\"216\" y=\"25\" text-anchor=\"middle\">C</text><text x=\"104\" y=\"25\" text-anchor=\"middle\">D</text><text x=\"147\" y=\"85\" text-anchor=\"middle\">E</text><text x=\"160\" y=\"156\" text-anchor=\"middle\">12 ft</text><text x=\"153\" y=\"132.6\" text-anchor=\"middle\">53°</text></svg></figure><p class=\"geo-given\">A stage flat <strong>ABCD</strong> is a rectangle 12 ft wide (AB = 12 ft). Braces <strong>AC</strong> and <strong>BD</strong> cross at <strong>E</strong>. AE = (2x + 4) ft, BD = (5x + 5) ft and m∠CAB ≈ 53°.</p>",
      claims: [
        {
          id: "brace",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is brace BD?",
          choices: [
            { letter: "A", text: "10 ft" },
            { letter: "B", text: "20 ft" },
            { letter: "C", text: "3 ft" },
            { letter: "D", text: "40 ft" }
          ],
          correct: "B"
        },
        {
          id: "abd",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "To the nearest degree, what is m∠ABD?",
          choices: [
            { letter: "A", text: "53°" },
            { letter: "B", text: "37°" },
            { letter: "C", text: "74°" },
            { letter: "D", text: "106°" }
          ],
          correct: "A"
        },
        {
          id: "bec",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "To the nearest degree, what is m∠BEC?",
          choices: [
            { letter: "A", text: "106°" },
            { letter: "B", text: "74°" },
            { letter: "C", text: "53°" },
            { letter: "D", text: "127°" }
          ],
          correct: "A"
        },
        {
          id: "square-up",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "A builder knows that a second flat ABCD is a parallelogram. Which pair of tape measurements, by itself, proves it is a rectangle?",
          choices: [
            { letter: "A", text: "AB = 12 ft and DC = 12 ft" },
            { letter: "B", text: "AC = 20 ft and BD = 20 ft" },
            { letter: "C", text: "AE = 10 ft and EC = 10 ft" },
            { letter: "D", text: "AB = 12 ft and BC = 12 ft" }
          ],
          correct: "B"
        },
        {
          id: "height",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How tall is the flat (the length of BC)?",
          choices: [
            { letter: "A", text: "4√34 ft" },
            { letter: "B", text: "8 ft" },
            { letter: "C", text: "12 ft" },
            { letter: "D", text: "16 ft" }
          ],
          correct: "D"
        },
        {
          id: "shape",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "The crew wants a parallelogram flat whose braces are congruent AND perpendicular. What must that flat be?",
          choices: [
            { letter: "A", text: "a rectangle that is not a square" },
            { letter: "B", text: "a rhombus that is not a square" },
            { letter: "C", text: "a square" },
            { letter: "D", text: "an isosceles trapezoid" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc1-ring-logo-grid",
      family: "GEO",
      mode: "ring",
      title: "The Band Logo",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A diamond logo drawn on a design grid.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"Coordinate grid from 0 to 10 across and 0 to 8 up with shaded quadrilateral ABCD: A(1, 4), B(5, 7), C(9, 4), D(5, 1), and dashed diagonals AC and BD\"><line class=\"gr\" x1=\"80\" y1=\"144\" x2=\"80\" y2=\"16\"/><line class=\"gr\" x1=\"96\" y1=\"144\" x2=\"96\" y2=\"16\"/><line class=\"gr\" x1=\"112\" y1=\"144\" x2=\"112\" y2=\"16\"/><line class=\"gr\" x1=\"128\" y1=\"144\" x2=\"128\" y2=\"16\"/><line class=\"gr\" x1=\"144\" y1=\"144\" x2=\"144\" y2=\"16\"/><line class=\"gr\" x1=\"160\" y1=\"144\" x2=\"160\" y2=\"16\"/><line class=\"gr\" x1=\"176\" y1=\"144\" x2=\"176\" y2=\"16\"/><line class=\"gr\" x1=\"192\" y1=\"144\" x2=\"192\" y2=\"16\"/><line class=\"gr\" x1=\"208\" y1=\"144\" x2=\"208\" y2=\"16\"/><line class=\"gr\" x1=\"224\" y1=\"144\" x2=\"224\" y2=\"16\"/><line class=\"gr\" x1=\"240\" y1=\"144\" x2=\"240\" y2=\"16\"/><line class=\"gr\" x1=\"80\" y1=\"144\" x2=\"240\" y2=\"144\"/><line class=\"gr\" x1=\"80\" y1=\"128\" x2=\"240\" y2=\"128\"/><line class=\"gr\" x1=\"80\" y1=\"112\" x2=\"240\" y2=\"112\"/><line class=\"gr\" x1=\"80\" y1=\"96\" x2=\"240\" y2=\"96\"/><line class=\"gr\" x1=\"80\" y1=\"80\" x2=\"240\" y2=\"80\"/><line class=\"gr\" x1=\"80\" y1=\"64\" x2=\"240\" y2=\"64\"/><line class=\"gr\" x1=\"80\" y1=\"48\" x2=\"240\" y2=\"48\"/><line class=\"gr\" x1=\"80\" y1=\"32\" x2=\"240\" y2=\"32\"/><line class=\"gr\" x1=\"80\" y1=\"16\" x2=\"240\" y2=\"16\"/><line class=\"ax\" x1=\"80\" y1=\"144\" x2=\"240\" y2=\"144\"/><line class=\"ax\" x1=\"80\" y1=\"144\" x2=\"80\" y2=\"16\"/><text class=\"sm\" x=\"112\" y=\"157\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"144\" y=\"157\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"176\" y=\"157\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"208\" y=\"157\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"240\" y=\"157\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"75\" y=\"116\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"75\" y=\"84\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"75\" y=\"52\" text-anchor=\"end\">6</text><text class=\"sm\" x=\"75\" y=\"20\" text-anchor=\"end\">8</text><text class=\"sm\" x=\"250\" y=\"148\" text-anchor=\"middle\">x</text><text class=\"sm\" x=\"80\" y=\"11\" text-anchor=\"middle\">y</text><polygon class=\"sh\" points=\"96,80 160,32 224,80 160,128\"/><line class=\"thin dash\" x1=\"96\" y1=\"80\" x2=\"224\" y2=\"80\"/><line class=\"thin dash\" x1=\"160\" y1=\"32\" x2=\"160\" y2=\"128\"/><circle class=\"dt\" cx=\"96\" cy=\"80\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"32\" r=\"3\"/><circle class=\"dt\" cx=\"224\" cy=\"80\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"128\" r=\"3\"/><text x=\"93\" y=\"71\" text-anchor=\"middle\">A</text><text x=\"160\" y=\"24\" text-anchor=\"middle\">B</text><text x=\"235\" y=\"85\" text-anchor=\"middle\">C</text><text x=\"171\" y=\"142\" text-anchor=\"middle\">D</text></svg></figure><p class=\"geo-given\">A designer draws a band logo, quadrilateral <strong>ABCD</strong>, on a grid with <strong>A</strong>(1, 4), <strong>B</strong>(5, 7), <strong>C</strong>(9, 4) and <strong>D</strong>(5, 1). Each grid unit is 1 cm.</p>",
      claims: [
        {
          id: "slope",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What is the slope of side AB?",
          choices: [
            { letter: "A", text: "4/3" },
            { letter: "B", text: "−3/4" },
            { letter: "C", text: "3/4" },
            { letter: "D", text: "7/5" }
          ],
          correct: "C"
        },
        {
          id: "side",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "How long is side AB?",
          choices: [
            { letter: "A", text: "7 cm" },
            { letter: "B", text: "5 cm" },
            { letter: "C", text: "√7 cm" },
            { letter: "D", text: "25 cm" }
          ],
          correct: "B"
        },
        {
          id: "midpoint",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What is the midpoint of diagonal AC?",
          choices: [
            { letter: "A", text: "(4, 0)" },
            { letter: "B", text: "(10, 8)" },
            { letter: "C", text: "(8, 0)" },
            { letter: "D", text: "(5, 4)" }
          ],
          correct: "D"
        },
        {
          id: "rhombus",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Which fact, by itself, proves that ABCD is a rhombus?",
          choices: [
            { letter: "A", text: "All four sides are 5 units long." },
            { letter: "B", text: "AC and BD bisect each other at (5, 4)." },
            { letter: "C", text: "AB ∥ DC, since both slopes are 3/4." },
            { letter: "D", text: "Diagonals AC and BD are congruent." }
          ],
          correct: "A"
        },
        {
          id: "square",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Is the logo a square? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: all four of its sides are congruent." },
            { letter: "B", text: "No: AB and BC have different lengths." },
            { letter: "C", text: "Yes: its diagonals are perpendicular." },
            { letter: "D", text: "No: slope AB · slope BC = −9/16, not −1." }
          ],
          correct: "D"
        },
        {
          id: "area",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "The area of a rhombus is half the product of its diagonals. What is the area of the logo?",
          choices: [
            { letter: "A", text: "48 cm²" },
            { letter: "B", text: "25 cm²" },
            { letter: "C", text: "24 cm²" },
            { letter: "D", text: "14 cm²" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc1-ring-dulcimer",
      family: "GEO",
      mode: "ring",
      title: "The Hammered Dulcimer",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "An isosceles trapezoid with a trim strip across the middle.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Shaded isosceles trapezoid ABCD with the long base AB at the top, labeled 38 in, and the short base DC at the bottom, labeled 16 in; a gold segment MN joins the midpoints of legs AD and BC; angles A and C are marked with arcs\"><polygon class=\"sh\" points=\"91.6,26 228.4,26 188.8,147.9 131.2,147.9\"/><line class=\"ac\" x1=\"111.4\" y1=\"86.9\" x2=\"208.6\" y2=\"86.9\"/><path class=\"thin\" d=\"M105.6 26 A14 14 0 0 1 95.9 39.3\"/><path class=\"thin\" d=\"M174.8 147.9 A14 14 0 0 1 193.1 134.6\"/><circle class=\"dt\" cx=\"91.6\" cy=\"26\" r=\"3\"/><circle class=\"dt\" cx=\"228.4\" cy=\"26\" r=\"3\"/><circle class=\"dt\" cx=\"188.8\" cy=\"147.9\" r=\"3\"/><circle class=\"dt\" cx=\"131.2\" cy=\"147.9\" r=\"3\"/><circle class=\"dt\" cx=\"111.4\" cy=\"86.9\" r=\"3\"/><circle class=\"dt\" cx=\"208.6\" cy=\"86.9\" r=\"3\"/><text x=\"80.6\" y=\"31\" text-anchor=\"middle\">A</text><text x=\"239.4\" y=\"31\" text-anchor=\"middle\">B</text><text x=\"199.8\" y=\"152.9\" text-anchor=\"middle\">C</text><text x=\"120.2\" y=\"152.9\" text-anchor=\"middle\">D</text><text x=\"99.4\" y=\"91.9\" text-anchor=\"middle\">M</text><text x=\"220.6\" y=\"91.9\" text-anchor=\"middle\">N</text><text x=\"160\" y=\"18\" text-anchor=\"middle\">38 in</text><text x=\"160\" y=\"164.9\" text-anchor=\"middle\">16 in</text></svg></figure><p class=\"geo-given\">The top of a hammered dulcimer is isosceles trapezoid <strong>ABCD</strong> with AB ∥ DC, AB = 38 in, DC = 16 in and AD = BC. A trim strip <strong>MN</strong> joins the midpoints of the legs. m∠A = (3x + 12)° and m∠C = (5x + 8)°.</p>",
      claims: [
        {
          id: "angle-a",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is m∠A?",
          choices: [
            { letter: "A", text: "18°" },
            { letter: "B", text: "108°" },
            { letter: "C", text: "72°" },
            { letter: "D", text: "20°" }
          ],
          correct: "C"
        },
        {
          id: "match",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which angle must be congruent to ∠BCD?",
          choices: [
            { letter: "A", text: "∠ADC" },
            { letter: "B", text: "∠DAB" },
            { letter: "C", text: "∠ABC" },
            { letter: "D", text: "∠ACD" }
          ],
          correct: "A"
        },
        {
          id: "trim",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the trim strip MN?",
          choices: [
            { letter: "A", text: "22 in" },
            { letter: "B", text: "27 in" },
            { letter: "C", text: "54 in" },
            { letter: "D", text: "11 in" }
          ],
          correct: "B"
        },
        {
          id: "nottrue",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is NOT true for every isosceles trapezoid?",
          choices: [
            { letter: "A", text: "Its legs are congruent." },
            { letter: "B", text: "Its diagonals are congruent." },
            { letter: "C", text: "Each pair of base angles is congruent." },
            { letter: "D", text: "Its opposite angles are congruent." }
          ],
          correct: "D"
        },
        {
          id: "inlay",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "A pearl inlay on the dulcimer is isosceles trapezoid PQRS with diagonals PR = (4y − 5) mm and QS = (2y + 21) mm. How long is PR?",
          choices: [
            { letter: "A", text: "13 mm" },
            { letter: "B", text: "47 mm" },
            { letter: "C", text: "94 mm" },
            { letter: "D", text: "27 mm" }
          ],
          correct: "B"
        },
        {
          id: "error",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "A builder says ABCD is a parallelogram because AD = BC. Which statement explains the error?",
          choices: [
            { letter: "A", text: "AD = BC, but AD is not parallel to BC." },
            { letter: "B", text: "Opposite sides of a parallelogram are never equal." },
            { letter: "C", text: "AD and BC are not really the same length." },
            { letter: "D", text: "A parallelogram must have four right angles." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc1-ring-woodshop-shelf",
      family: "GEO",
      mode: "ring",
      title: "The Diamond Shelf",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A woodshop shelf with four 26-inch boards and two braces.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"Rhombus ABCD with A at the left, B at the top, C at the right and D at the bottom; a tick mark on each side, side AB labeled 26 in; braces AC and BD cross at E; a note gives AC = 48 in\"><polygon class=\"sh2\" points=\"52,70 160,25 268,70 160,115\"/><line class=\"thin\" x1=\"52\" y1=\"70\" x2=\"268\" y2=\"70\"/><line class=\"thin\" x1=\"160\" y1=\"25\" x2=\"160\" y2=\"115\"/><line class=\"thin\" x1=\"107.9\" y1=\"52.1\" x2=\"104.1\" y2=\"42.9\"/><line class=\"thin\" x1=\"212.1\" y1=\"52.1\" x2=\"215.9\" y2=\"42.9\"/><line class=\"thin\" x1=\"212.1\" y1=\"87.9\" x2=\"215.9\" y2=\"97.1\"/><line class=\"thin\" x1=\"107.9\" y1=\"87.9\" x2=\"104.1\" y2=\"97.1\"/><circle class=\"dt\" cx=\"52\" cy=\"70\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"25\" r=\"3\"/><circle class=\"dt\" cx=\"268\" cy=\"70\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"115\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"70\" r=\"3\"/><text x=\"40\" y=\"75\" text-anchor=\"middle\">A</text><text x=\"280\" y=\"75\" text-anchor=\"middle\">C</text><text x=\"160\" y=\"17\" text-anchor=\"middle\">B</text><text x=\"160\" y=\"133\" text-anchor=\"middle\">D</text><text x=\"148\" y=\"88\" text-anchor=\"middle\">E</text><text x=\"99.1\" y=\"35.9\" text-anchor=\"middle\">26 in</text><text class=\"sm\" x=\"262\" y=\"128\" text-anchor=\"middle\">AC = 48 in</text></svg></figure><p class=\"geo-given\">In woodshop, Rosa builds a diamond-shaped wall shelf. Its frame is rhombus <strong>ABCD</strong> made of four 26-inch boards. Braces <strong>AC</strong> = 48 in and <strong>BD</strong> cross at <strong>E</strong>.</p>",
      claims: [
        {
          id: "brace",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the short brace BD?",
          choices: [
            { letter: "A", text: "20 in" },
            { letter: "B", text: "10 in" },
            { letter: "C", text: "22 in" },
            { letter: "D", text: "about 70.8 in" }
          ],
          correct: "A"
        },
        {
          id: "right",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which angle of the shelf must be a right angle?",
          choices: [
            { letter: "A", text: "∠DAB" },
            { letter: "B", text: "∠ABC" },
            { letter: "C", text: "∠AEB" },
            { letter: "D", text: "∠EAB" }
          ],
          correct: "C"
        },
        {
          id: "square",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "Rosa rebuilds the frame as a square, using the same four 26-inch boards. How long is brace AC now?",
          choices: [
            { letter: "A", text: "52 in" },
            { letter: "B", text: "26 in" },
            { letter: "C", text: "13√2 in" },
            { letter: "D", text: "26√2 in" }
          ],
          correct: "D"
        },
        {
          id: "prove",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "A frame is known to be a parallelogram. Which single fact proves it is a rhombus?",
          choices: [
            { letter: "A", text: "Its diagonals are congruent." },
            { letter: "B", text: "Its diagonals are perpendicular." },
            { letter: "C", text: "Its opposite angles are congruent." },
            { letter: "D", text: "One of its angles is a right angle." }
          ],
          correct: "B"
        },
        {
          id: "wood",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How many inches of wood does the shelf use in all (four sides and both braces)?",
          choices: [
            { letter: "A", text: "152 in" },
            { letter: "B", text: "162 in" },
            { letter: "C", text: "172 in" },
            { letter: "D", text: "120 in" }
          ],
          correct: "C"
        },
        {
          id: "only",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is true for the shelf but NOT true for every parallelogram?",
          choices: [
            { letter: "A", text: "Its diagonals bisect each other." },
            { letter: "B", text: "Its diagonals are congruent." },
            { letter: "C", text: "Its opposite angles are congruent." },
            { letter: "D", text: "Its diagonals bisect its angles." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc1-ring-cake-grid",
      family: "GEO",
      mode: "ring",
      title: "The Fondant Square",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A cake decorator plans a fondant shape on a grid.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"Coordinate grid from 0 to 7 on both axes with shaded quadrilateral ABCD: A(1, 3), B(4, 1), C(6, 4), D(3, 6)\"><line class=\"gr\" x1=\"97\" y1=\"144\" x2=\"97\" y2=\"18\"/><line class=\"gr\" x1=\"115\" y1=\"144\" x2=\"115\" y2=\"18\"/><line class=\"gr\" x1=\"133\" y1=\"144\" x2=\"133\" y2=\"18\"/><line class=\"gr\" x1=\"151\" y1=\"144\" x2=\"151\" y2=\"18\"/><line class=\"gr\" x1=\"169\" y1=\"144\" x2=\"169\" y2=\"18\"/><line class=\"gr\" x1=\"187\" y1=\"144\" x2=\"187\" y2=\"18\"/><line class=\"gr\" x1=\"205\" y1=\"144\" x2=\"205\" y2=\"18\"/><line class=\"gr\" x1=\"223\" y1=\"144\" x2=\"223\" y2=\"18\"/><line class=\"gr\" x1=\"97\" y1=\"144\" x2=\"223\" y2=\"144\"/><line class=\"gr\" x1=\"97\" y1=\"126\" x2=\"223\" y2=\"126\"/><line class=\"gr\" x1=\"97\" y1=\"108\" x2=\"223\" y2=\"108\"/><line class=\"gr\" x1=\"97\" y1=\"90\" x2=\"223\" y2=\"90\"/><line class=\"gr\" x1=\"97\" y1=\"72\" x2=\"223\" y2=\"72\"/><line class=\"gr\" x1=\"97\" y1=\"54\" x2=\"223\" y2=\"54\"/><line class=\"gr\" x1=\"97\" y1=\"36\" x2=\"223\" y2=\"36\"/><line class=\"gr\" x1=\"97\" y1=\"18\" x2=\"223\" y2=\"18\"/><line class=\"ax\" x1=\"97\" y1=\"144\" x2=\"223\" y2=\"144\"/><line class=\"ax\" x1=\"97\" y1=\"144\" x2=\"97\" y2=\"18\"/><text class=\"sm\" x=\"133\" y=\"157\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"169\" y=\"157\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"205\" y=\"157\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"92\" y=\"112\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"92\" y=\"76\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"92\" y=\"40\" text-anchor=\"end\">6</text><text class=\"sm\" x=\"233\" y=\"148\" text-anchor=\"middle\">x</text><text class=\"sm\" x=\"97\" y=\"13\" text-anchor=\"middle\">y</text><polygon class=\"sh\" points=\"115,90 169,126 205,72 151,36\"/><circle class=\"dt\" cx=\"115\" cy=\"90\" r=\"3\"/><circle class=\"dt\" cx=\"169\" cy=\"126\" r=\"3\"/><circle class=\"dt\" cx=\"205\" cy=\"72\" r=\"3\"/><circle class=\"dt\" cx=\"151\" cy=\"36\" r=\"3\"/><text x=\"104\" y=\"95\" text-anchor=\"middle\">A</text><text x=\"178\" y=\"140\" text-anchor=\"middle\">B</text><text x=\"216\" y=\"77\" text-anchor=\"middle\">C</text><text x=\"151\" y=\"28\" text-anchor=\"middle\">D</text></svg></figure><p class=\"geo-given\">A cake decorator plans a fondant shape <strong>ABCD</strong> on a grid with <strong>A</strong>(1, 3), <strong>B</strong>(4, 1), <strong>C</strong>(6, 4) and <strong>D</strong>(3, 6). Each grid unit stands for 2 inches on the cake.</p>",
      claims: [
        {
          id: "slope",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What is the slope of side BC?",
          choices: [
            { letter: "A", text: "3/2" },
            { letter: "B", text: "2/3" },
            { letter: "C", text: "−3/2" },
            { letter: "D", text: "−2/3" }
          ],
          correct: "A"
        },
        {
          id: "side",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "How long is side AB, in grid units?",
          choices: [
            { letter: "A", text: "5 units" },
            { letter: "B", text: "√13 units" },
            { letter: "C", text: "13 units" },
            { letter: "D", text: "√5 units" }
          ],
          correct: "B"
        },
        {
          id: "midpoint",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What is the midpoint of diagonal BD?",
          choices: [
            { letter: "A", text: "(7, 7)" },
            { letter: "B", text: "(3.5, 3.5)" },
            { letter: "C", text: "(−0.5, 2.5)" },
            { letter: "D", text: "(−1, 5)" }
          ],
          correct: "B"
        },
        {
          id: "missing",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Jada uses slopes and distances to show that AB ⊥ BC and AB = BC = √13. What else must she show to prove that ABCD is a square?",
          choices: [
            { letter: "A", text: "that diagonals AC and BD are perpendicular" },
            { letter: "B", text: "that side AB is parallel to side DC" },
            { letter: "C", text: "that ABCD is a parallelogram" },
            { letter: "D", text: "that diagonals AC and BD are congruent" }
          ],
          correct: "C"
        },
        {
          id: "ribbon",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "A ribbon goes once around the edge of the fondant shape. To the nearest tenth of an inch, how long is the ribbon?",
          choices: [
            { letter: "A", text: "14.4 in" },
            { letter: "B", text: "40.0 in" },
            { letter: "C", text: "104.0 in" },
            { letter: "D", text: "28.8 in" }
          ],
          correct: "D"
        },
        {
          id: "area",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is the area of the fondant shape on the cake, in square inches?",
          choices: [
            { letter: "A", text: "52 in²" },
            { letter: "B", text: "13 in²" },
            { letter: "C", text: "26 in²" },
            { letter: "D", text: "208 in²" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc1-worms-beehive-frame",
      family: "GEO",
      mode: "worms",
      title: "The Beehive Frame",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Two wires cross a 35-by-12-centimeter frame.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 126\" role=\"img\" aria-label=\"Wide rectangle ABCD with A at the lower left, B at the lower right, C at the upper right and D at the upper left; AB is labeled 35 cm and BC is labeled 12 cm; wires AC and BD cross at E; right-angle marks at A and C\"><polygon class=\"sh\" points=\"48,104 272,104 272,27.2 48,27.2\"/><line class=\"thin\" x1=\"48\" y1=\"104\" x2=\"272\" y2=\"27.2\"/><line class=\"thin\" x1=\"272\" y1=\"104\" x2=\"48\" y2=\"27.2\"/><path class=\"thin\" d=\"M56 104 L56 96 L48 96\"/><path class=\"thin\" d=\"M264 27.2 L264 35.2 L272 35.2\"/><circle class=\"dt\" cx=\"48\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"272\" cy=\"104\" r=\"3\"/><circle class=\"dt\" cx=\"272\" cy=\"27.2\" r=\"3\"/><circle class=\"dt\" cx=\"48\" cy=\"27.2\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"65.6\" r=\"3\"/><text x=\"42\" y=\"121\" text-anchor=\"middle\">A</text><text x=\"278\" y=\"121\" text-anchor=\"middle\">B</text><text x=\"278\" y=\"19.2\" text-anchor=\"middle\">C</text><text x=\"42\" y=\"19.2\" text-anchor=\"middle\">D</text><text x=\"160\" y=\"85.6\" text-anchor=\"middle\">E</text><text x=\"160\" y=\"121\" text-anchor=\"middle\">35 cm</text><text x=\"278\" y=\"70.6\" text-anchor=\"start\">12 cm</text></svg></figure><p class=\"geo-given\">A beehive frame <strong>ABCD</strong> is a rectangle 35 cm long and 12 cm tall. Two support wires run along its diagonals <strong>AC</strong> and <strong>BD</strong> and cross at <strong>E</strong>.</p>",
      claims: [
        {
          id: "wire",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is wire AC?",
          choices: [
            { letter: "A", text: "47 cm" },
            { letter: "B", text: "about 32.9 cm" },
            { letter: "C", text: "37 cm" },
            { letter: "D", text: "23 cm" }
          ],
          correct: "C"
        },
        {
          id: "be",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How far is the crossing point E from corner B?",
          choices: [
            { letter: "A", text: "37 cm" },
            { letter: "B", text: "17.5 cm" },
            { letter: "C", text: "6 cm" },
            { letter: "D", text: "18.5 cm" }
          ],
          correct: "D"
        },
        {
          id: "angle",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which angle must be congruent to ∠EAB?",
          choices: [
            { letter: "A", text: "∠EBC" },
            { letter: "B", text: "∠EBA" },
            { letter: "C", text: "∠AEB" },
            { letter: "D", text: "∠EAD" }
          ],
          correct: "B"
        },
        {
          id: "only",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is true for every rectangle but NOT for every parallelogram?",
          choices: [
            { letter: "A", text: "Its diagonals are congruent." },
            { letter: "B", text: "Its diagonals are perpendicular." },
            { letter: "C", text: "Its opposite sides are congruent." },
            { letter: "D", text: "Its diagonals bisect each other." }
          ],
          correct: "A"
        },
        {
          id: "algebra",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "A second frame is a parallelogram whose diagonals are (3x + 7) cm and (5x − 9) cm. The beekeeper finds that they are equal. How long is each diagonal?",
          choices: [
            { letter: "A", text: "8 cm" },
            { letter: "B", text: "62 cm" },
            { letter: "C", text: "31 cm" },
            { letter: "D", text: "15.5 cm" }
          ],
          correct: "C"
        },
        {
          id: "nottrue",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is NOT true for frame ABCD?",
          choices: [
            { letter: "A", text: "AE = DE" },
            { letter: "B", text: "∠ABC and ∠BCD are supplementary." },
            { letter: "C", text: "AD ∥ BC" },
            { letter: "D", text: "AC bisects ∠DAB." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc1-worms-park-lawn",
      family: "GEO",
      mode: "worms",
      title: "The Diamond Lawn",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Two straight paths cross a rhombus-shaped lawn in a park.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Rhombus ABCD standing on a point: A at the top, B at the right, C at the bottom and D at the left; a tick mark on each side; dashed paths AC and BD cross at E; notes give path AC as 90 m and path BD as 56 m\"><polygon class=\"sh2\" points=\"160,12 202,79.5 160,147 118,79.5\"/><line class=\"thin dash\" x1=\"160\" y1=\"12\" x2=\"160\" y2=\"147\"/><line class=\"thin dash\" x1=\"202\" y1=\"79.5\" x2=\"118\" y2=\"79.5\"/><line class=\"thin\" x1=\"176.8\" y1=\"48.4\" x2=\"185.2\" y2=\"43.1\"/><line class=\"thin\" x1=\"176.8\" y1=\"110.6\" x2=\"185.2\" y2=\"115.9\"/><line class=\"thin\" x1=\"143.2\" y1=\"110.6\" x2=\"134.8\" y2=\"115.9\"/><line class=\"thin\" x1=\"143.2\" y1=\"48.4\" x2=\"134.8\" y2=\"43.1\"/><circle class=\"dt\" cx=\"160\" cy=\"12\" r=\"3\"/><circle class=\"dt\" cx=\"202\" cy=\"79.5\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"147\" r=\"3\"/><circle class=\"dt\" cx=\"118\" cy=\"79.5\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"79.5\" r=\"3\"/><text x=\"172\" y=\"17\" text-anchor=\"middle\">A</text><text x=\"214\" y=\"84.5\" text-anchor=\"middle\">B</text><text x=\"172\" y=\"152\" text-anchor=\"middle\">C</text><text x=\"106\" y=\"84.5\" text-anchor=\"middle\">D</text><text x=\"170\" y=\"71.5\" text-anchor=\"middle\">E</text><text class=\"sm\" x=\"250\" y=\"40\" text-anchor=\"middle\">path AC: 90 m</text><text class=\"sm\" x=\"250\" y=\"56\" text-anchor=\"middle\">path BD: 56 m</text></svg></figure><p class=\"geo-given\">A park lawn is rhombus <strong>ABCD</strong>. Two straight paths run along its diagonals: <strong>AC</strong> = 90 m and <strong>BD</strong> = 56 m. They cross at <strong>E</strong>.</p>",
      claims: [
        {
          id: "side",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is each edge of the lawn?",
          choices: [
            { letter: "A", text: "73 m" },
            { letter: "B", text: "53 m" },
            { letter: "C", text: "106 m" },
            { letter: "D", text: "about 35.2 m" }
          ],
          correct: "B"
        },
        {
          id: "angle",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which angle of the lawn must be congruent to ∠BAE?",
          choices: [
            { letter: "A", text: "∠BCE" },
            { letter: "B", text: "∠ABE" },
            { letter: "C", text: "∠AEB" },
            { letter: "D", text: "∠ADB" }
          ],
          correct: "A"
        },
        {
          id: "fence",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "A low fence will run around the whole edge of the lawn. How long is the fence?",
          choices: [
            { letter: "A", text: "106 m" },
            { letter: "B", text: "146 m" },
            { letter: "C", text: "292 m" },
            { letter: "D", text: "212 m" }
          ],
          correct: "D"
        },
        {
          id: "algebra",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "Another lawn is rhombus PQRS with m∠PQR = (3x + 20)° and m∠QRS = (5x − 8)°. What is m∠QRS?",
          choices: [
            { letter: "A", text: "62°" },
            { letter: "B", text: "97°" },
            { letter: "C", text: "83°" },
            { letter: "D", text: "21°" }
          ],
          correct: "B"
        },
        {
          id: "parallelogram",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "A worker says the lawn is also a parallelogram. Is she right? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes: both pairs of opposite sides are parallel." },
            { letter: "B", text: "Yes: its diagonals are congruent." },
            { letter: "C", text: "No: a parallelogram needs a right angle." },
            { letter: "D", text: "No: its sides are not all congruent." }
          ],
          correct: "A"
        },
        {
          id: "square",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "A second lawn is a parallelogram. Which single fact proves it is a square?",
          choices: [
            { letter: "A", text: "Its diagonals are perpendicular." },
            { letter: "B", text: "Its diagonals bisect each other." },
            { letter: "C", text: "Its diagonals are congruent and perpendicular." },
            { letter: "D", text: "Its four sides are congruent." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc1-worms-cabin-tent",
      family: "GEO",
      mode: "worms",
      title: "The Cabin Tent",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "The end wall of a tent is an isosceles trapezoid.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"Shaded isosceles trapezoid ABCD standing on level ground: base AB at the bottom labeled 13 ft, top DC labeled 8 ft, leg AD labeled 6.5 ft, angle A marked 67 degrees; a gold segment MN joins the midpoints of legs AD and BC\"><line class=\"thin\" x1=\"20\" y1=\"126\" x2=\"300\" y2=\"126\"/><polygon class=\"sh\" points=\"56,126 264,126 224,30 96,30\"/><line class=\"ac\" x1=\"76\" y1=\"78\" x2=\"244\" y2=\"78\"/><path class=\"thin\" d=\"M74 126 A18 18 0 0 0 62.9 109.4\"/><circle class=\"dt\" cx=\"56\" cy=\"126\" r=\"3\"/><circle class=\"dt\" cx=\"264\" cy=\"126\" r=\"3\"/><circle class=\"dt\" cx=\"224\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"96\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"76\" cy=\"78\" r=\"3\"/><circle class=\"dt\" cx=\"244\" cy=\"78\" r=\"3\"/><text x=\"50\" y=\"143\" text-anchor=\"middle\">A</text><text x=\"270\" y=\"143\" text-anchor=\"middle\">B</text><text x=\"236\" y=\"35\" text-anchor=\"middle\">C</text><text x=\"84\" y=\"35\" text-anchor=\"middle\">D</text><text x=\"64\" y=\"83\" text-anchor=\"middle\">M</text><text x=\"256\" y=\"83\" text-anchor=\"middle\">N</text><text x=\"160\" y=\"143\" text-anchor=\"middle\">13 ft</text><text x=\"160\" y=\"23\" text-anchor=\"middle\">8 ft</text><text x=\"85.4\" y=\"114\" text-anchor=\"middle\">67°</text><text class=\"sm\" x=\"58\" y=\"106\" text-anchor=\"end\">6.5 ft</text></svg></figure><p class=\"geo-given\">The end wall of a cabin tent is isosceles trapezoid <strong>ABCD</strong> with AB ∥ DC, AB = 13 ft, DC = 8 ft and poles AD = BC = 6.5 ft. A gear line <strong>MN</strong> joins the midpoints of the poles. m∠DAB ≈ 67°.</p>",
      claims: [
        {
          id: "height",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How tall is the tent (the distance between DC and AB)?",
          choices: [
            { letter: "A", text: "about 7.0 ft" },
            { letter: "B", text: "6 ft" },
            { letter: "C", text: "5 ft" },
            { letter: "D", text: "about 4.2 ft" }
          ],
          correct: "B"
        },
        {
          id: "line",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the gear line MN?",
          choices: [
            { letter: "A", text: "21 ft" },
            { letter: "B", text: "5 ft" },
            { letter: "C", text: "2.5 ft" },
            { letter: "D", text: "10.5 ft" }
          ],
          correct: "D"
        },
        {
          id: "top-angle",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "To the nearest degree, what is m∠ADC?",
          choices: [
            { letter: "A", text: "67°" },
            { letter: "B", text: "23°" },
            { letter: "C", text: "113°" },
            { letter: "D", text: "157°" }
          ],
          correct: "C"
        },
        {
          id: "diagonal",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which segment must be congruent to diagonal AC?",
          choices: [
            { letter: "A", text: "AB" },
            { letter: "B", text: "AD" },
            { letter: "C", text: "MN" },
            { letter: "D", text: "BD" }
          ],
          correct: "D"
        },
        {
          id: "algebra",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "Another tent wall is a trapezoid with bases (y + 4) ft and (3y − 2) ft. The segment joining the midpoints of its legs is 13 ft. How long is the longer base?",
          choices: [
            { letter: "A", text: "10 ft" },
            { letter: "B", text: "6 ft" },
            { letter: "C", text: "16 ft" },
            { letter: "D", text: "6.25 ft" }
          ],
          correct: "C"
        },
        {
          id: "only",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is true of tent wall ABCD but NOT of every trapezoid?",
          choices: [
            { letter: "A", text: "Its diagonals are congruent." },
            { letter: "B", text: "It has a pair of parallel sides." },
            { letter: "C", text: "Its diagonals bisect each other." },
            { letter: "D", text: "Its angles add up to 360°." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc1-worms-farm-field",
      family: "GEO",
      mode: "worms",
      title: "The Farm Field Map",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A field with one slanted fence, mapped on a grid.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 146\" role=\"img\" aria-label=\"Coordinate grid from 0 to 11 across and 0 to 6 up with shaded quadrilateral ABCD: A(2, 1), B(10, 1), C(7, 5), D(2, 5)\"><line class=\"gr\" x1=\"62\" y1=\"126\" x2=\"62\" y2=\"30\"/><line class=\"gr\" x1=\"78\" y1=\"126\" x2=\"78\" y2=\"30\"/><line class=\"gr\" x1=\"94\" y1=\"126\" x2=\"94\" y2=\"30\"/><line class=\"gr\" x1=\"110\" y1=\"126\" x2=\"110\" y2=\"30\"/><line class=\"gr\" x1=\"126\" y1=\"126\" x2=\"126\" y2=\"30\"/><line class=\"gr\" x1=\"142\" y1=\"126\" x2=\"142\" y2=\"30\"/><line class=\"gr\" x1=\"158\" y1=\"126\" x2=\"158\" y2=\"30\"/><line class=\"gr\" x1=\"174\" y1=\"126\" x2=\"174\" y2=\"30\"/><line class=\"gr\" x1=\"190\" y1=\"126\" x2=\"190\" y2=\"30\"/><line class=\"gr\" x1=\"206\" y1=\"126\" x2=\"206\" y2=\"30\"/><line class=\"gr\" x1=\"222\" y1=\"126\" x2=\"222\" y2=\"30\"/><line class=\"gr\" x1=\"238\" y1=\"126\" x2=\"238\" y2=\"30\"/><line class=\"gr\" x1=\"62\" y1=\"126\" x2=\"238\" y2=\"126\"/><line class=\"gr\" x1=\"62\" y1=\"110\" x2=\"238\" y2=\"110\"/><line class=\"gr\" x1=\"62\" y1=\"94\" x2=\"238\" y2=\"94\"/><line class=\"gr\" x1=\"62\" y1=\"78\" x2=\"238\" y2=\"78\"/><line class=\"gr\" x1=\"62\" y1=\"62\" x2=\"238\" y2=\"62\"/><line class=\"gr\" x1=\"62\" y1=\"46\" x2=\"238\" y2=\"46\"/><line class=\"gr\" x1=\"62\" y1=\"30\" x2=\"238\" y2=\"30\"/><line class=\"ax\" x1=\"62\" y1=\"126\" x2=\"238\" y2=\"126\"/><line class=\"ax\" x1=\"62\" y1=\"126\" x2=\"62\" y2=\"30\"/><text class=\"sm\" x=\"94\" y=\"139\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"126\" y=\"139\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"158\" y=\"139\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"190\" y=\"139\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"222\" y=\"139\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"57\" y=\"98\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"57\" y=\"66\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"57\" y=\"34\" text-anchor=\"end\">6</text><text class=\"sm\" x=\"248\" y=\"130\" text-anchor=\"middle\">x</text><text class=\"sm\" x=\"62\" y=\"25\" text-anchor=\"middle\">y</text><polygon class=\"sh2\" points=\"94,110 222,110 174,46 94,46\"/><circle class=\"dt\" cx=\"94\" cy=\"110\" r=\"3\"/><circle class=\"dt\" cx=\"222\" cy=\"110\" r=\"3\"/><circle class=\"dt\" cx=\"174\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"94\" cy=\"46\" r=\"3\"/><text x=\"83\" y=\"115\" text-anchor=\"middle\">A</text><text x=\"233\" y=\"115\" text-anchor=\"middle\">B</text><text x=\"185\" y=\"42\" text-anchor=\"middle\">C</text><text x=\"83\" y=\"51\" text-anchor=\"middle\">D</text></svg></figure><p class=\"geo-given\">On a farm map, field <strong>ABCD</strong> has corners <strong>A</strong>(2, 1), <strong>B</strong>(10, 1), <strong>C</strong>(7, 5) and <strong>D</strong>(2, 5). Each grid unit is 10 m. A fence <strong>MN</strong> will join the midpoints of <strong>AD</strong> and <strong>BC</strong>.</p>",
      claims: [
        {
          id: "slope",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What is the slope of the slanted side BC?",
          choices: [
            { letter: "A", text: "−3/4" },
            { letter: "B", text: "4/3" },
            { letter: "C", text: "−4/3" },
            { letter: "D", text: "3/4" }
          ],
          correct: "C"
        },
        {
          id: "right",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Which fact shows that ∠DAB is a right angle?",
          choices: [
            { letter: "A", text: "AB is horizontal and AD is vertical." },
            { letter: "B", text: "AB and DC are both horizontal." },
            { letter: "C", text: "AD and BC are the same length." },
            { letter: "D", text: "Diagonals AC and BD are perpendicular." }
          ],
          correct: "A"
        },
        {
          id: "length",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "How long is side BC, in grid units?",
          choices: [
            { letter: "A", text: "5 units" },
            { letter: "B", text: "7 units" },
            { letter: "C", text: "√7 units" },
            { letter: "D", text: "25 units" }
          ],
          correct: "A"
        },
        {
          id: "midpoint",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "N is the midpoint of BC. What are the coordinates of N?",
          choices: [
            { letter: "A", text: "(17, 6)" },
            { letter: "B", text: "(8.5, 3)" },
            { letter: "C", text: "(−1.5, 2)" },
            { letter: "D", text: "(−3, 4)" }
          ],
          correct: "B"
        },
        {
          id: "fence",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long will fence MN be, in meters?",
          choices: [
            { letter: "A", text: "130 m" },
            { letter: "B", text: "6.5 m" },
            { letter: "C", text: "30 m" },
            { letter: "D", text: "65 m" }
          ],
          correct: "D"
        },
        {
          id: "isosceles",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "A farmer says field ABCD is an isosceles trapezoid. Which result shows that he is wrong?",
          choices: [
            { letter: "A", text: "AB = 8 units but DC = 5 units." },
            { letter: "B", text: "AD = 4 units but BC = 5 units." },
            { letter: "C", text: "AB and DC both have slope 0." },
            { letter: "D", text: "AC and BD bisect each other." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc1-worms-garden-gate",
      family: "GEO",
      mode: "worms",
      title: "The Sagging Garden Gate",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A gate has pulled out of square into a parallelogram.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 138\" role=\"img\" aria-label=\"Shaded parallelogram ABCD leaning to the left: A at the lower left, B at the lower right, C at the upper right and D at the upper left; side AD labeled 4 ft; the angle at A is marked with an arc; dashed braces AC and BD meet at E\"><polygon class=\"sh\" points=\"76,112 265,112 239,32.1 50,32.1\"/><line class=\"thin dash\" x1=\"76\" y1=\"112\" x2=\"239\" y2=\"32.1\"/><line class=\"thin dash\" x1=\"265\" y1=\"112\" x2=\"50\" y2=\"32.1\"/><path class=\"thin\" d=\"M92 112 A16 16 0 0 0 71.1 96.8\"/><circle class=\"dt\" cx=\"76\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"265\" cy=\"112\" r=\"3\"/><circle class=\"dt\" cx=\"239\" cy=\"32.1\" r=\"3\"/><circle class=\"dt\" cx=\"50\" cy=\"32.1\" r=\"3\"/><circle class=\"dt\" cx=\"157.5\" cy=\"72.1\" r=\"3\"/><text x=\"76\" y=\"129\" text-anchor=\"middle\">A</text><text x=\"265\" y=\"129\" text-anchor=\"middle\">B</text><text x=\"239\" y=\"24.1\" text-anchor=\"middle\">C</text><text x=\"50\" y=\"24.1\" text-anchor=\"middle\">D</text><text x=\"157.5\" y=\"94.1\" text-anchor=\"middle\">E</text><text x=\"52\" y=\"72.1\" text-anchor=\"end\">4 ft</text></svg></figure><p class=\"geo-given\">A garden gate has sagged into parallelogram <strong>ABCD</strong>. AD = 4 ft, AB = (2y + 3) ft and DC = (5y − 6) ft. m∠DAB = (4x − 4)° and m∠ABC = (2x + 16)°. Braces <strong>AC</strong> and <strong>BD</strong> meet at <strong>E</strong>.</p>",
      claims: [
        {
          id: "angle",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is m∠DAB?",
          choices: [
            { letter: "A", text: "36°" },
            { letter: "B", text: "72°" },
            { letter: "C", text: "28°" },
            { letter: "D", text: "108°" }
          ],
          correct: "D"
        },
        {
          id: "edge",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is the edge of the gate all the way around (its perimeter)?",
          choices: [
            { letter: "A", text: "13 ft" },
            { letter: "B", text: "22 ft" },
            { letter: "C", text: "18 ft" },
            { letter: "D", text: "26 ft" }
          ],
          correct: "D"
        },
        {
          id: "braces",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement about the braces must be true?",
          choices: [
            { letter: "A", text: "AE = EC" },
            { letter: "B", text: "AC = BD" },
            { letter: "C", text: "AE = BE" },
            { letter: "D", text: "AC ⊥ BD" }
          ],
          correct: "A"
        },
        {
          id: "rectangle",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "The gardener fixes the gate. It is still a parallelogram. Which single fact proves it is now a rectangle?",
          choices: [
            { letter: "A", text: "∠DAB ≅ ∠BCD" },
            { letter: "B", text: "AB ∥ DC" },
            { letter: "C", text: "∠DAB ≅ ∠ABC" },
            { letter: "D", text: "AC ⊥ BD" }
          ],
          correct: "C"
        },
        {
          id: "nottrue",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which statement is NOT true for gate ABCD?",
          choices: [
            { letter: "A", text: "∠ABC and ∠BCD are supplementary." },
            { letter: "B", text: "∠DAB and ∠BCD are supplementary." },
            { letter: "C", text: "AD = BC" },
            { letter: "D", text: "BE = ED" }
          ],
          correct: "B"
        },
        {
          id: "alternate",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Which pair of angles must be congruent because DC ∥ AB?",
          choices: [
            { letter: "A", text: "∠CDB and ∠CBD" },
            { letter: "B", text: "∠DAB and ∠ADC" },
            { letter: "C", text: "∠CDB and ∠ABD" },
            { letter: "D", text: "∠ADB and ∠ABD" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc1-worms-pond-kite",
      family: "GEO",
      mode: "worms",
      title: "The Kite-Shaped Pond",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "A footbridge crosses a pond shaped like a kite.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Kite ABCD with A at the top, B at the left, C far below and D at the right; one tick on AB and AD, two ticks on CB and CD; a gold footbridge BD labeled 40 m crosses a dashed path AC at E, with a right-angle mark at E\"><polygon class=\"sh2\" points=\"160,16 96,39.3 160,150.1 224,39.3\"/><line class=\"thin dash\" x1=\"160\" y1=\"16\" x2=\"160\" y2=\"150.1\"/><line class=\"ac\" x1=\"96\" y1=\"39.3\" x2=\"224\" y2=\"39.3\"/><path class=\"thin\" d=\"M160 46.3 L167 46.3 L167 39.3\"/><line class=\"thin\" x1=\"126.3\" y1=\"22.9\" x2=\"129.7\" y2=\"32.3\"/><line class=\"thin\" x1=\"190.3\" y1=\"32.3\" x2=\"193.7\" y2=\"22.9\"/><line class=\"thin\" x1=\"133.3\" y1=\"94\" x2=\"124.7\" y2=\"99\"/><line class=\"thin\" x1=\"131.3\" y1=\"90.5\" x2=\"122.7\" y2=\"95.5\"/><line class=\"thin\" x1=\"195.3\" y1=\"99\" x2=\"186.7\" y2=\"94\"/><line class=\"thin\" x1=\"197.3\" y1=\"95.5\" x2=\"188.7\" y2=\"90.5\"/><circle class=\"dt\" cx=\"160\" cy=\"16\" r=\"3\"/><circle class=\"dt\" cx=\"96\" cy=\"39.3\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"150.1\" r=\"3\"/><circle class=\"dt\" cx=\"224\" cy=\"39.3\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"39.3\" r=\"3\"/><text x=\"172\" y=\"19\" text-anchor=\"middle\">A</text><text x=\"84\" y=\"44.3\" text-anchor=\"middle\">B</text><text x=\"172\" y=\"155.1\" text-anchor=\"middle\">C</text><text x=\"236\" y=\"44.3\" text-anchor=\"middle\">D</text><text x=\"150\" y=\"57.3\" text-anchor=\"middle\">E</text><text class=\"acc\" x=\"196\" y=\"57.3\" text-anchor=\"middle\">40 m</text></svg></figure><p class=\"geo-given\">A pond is shaped like kite <strong>ABCD</strong> with AB = AD and CB = CD. A footbridge <strong>BD</strong>, 40 m long, crosses the path <strong>AC</strong> at <strong>E</strong>. m∠BAD = 140°, m∠ABC = (4x)° and m∠ADC = (3x + 20)°.</p>",
      claims: [
        {
          id: "abc",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is m∠ABC?",
          choices: [
            { letter: "A", text: "80°" },
            { letter: "B", text: "20°" },
            { letter: "C", text: "40°" },
            { letter: "D", text: "140°" }
          ],
          correct: "A"
        },
        {
          id: "bcd",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "What is m∠BCD?",
          choices: [
            { letter: "A", text: "60°" },
            { letter: "B", text: "140°" },
            { letter: "C", text: "100°" },
            { letter: "D", text: "30°" }
          ],
          correct: "A"
        },
        {
          id: "bisects",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Path AC bisects which angles of the pond?",
          choices: [
            { letter: "A", text: "∠ABC and ∠ADC" },
            { letter: "B", text: "all four angles" },
            { letter: "C", text: "∠BAD and ∠BCD" },
            { letter: "D", text: "none of the angles" }
          ],
          correct: "C"
        },
        {
          id: "cb",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "How long is side CB of the pond?",
          choices: [
            { letter: "A", text: "20 m" },
            { letter: "B", text: "40 m" },
            { letter: "C", text: "20√3 m" },
            { letter: "D", text: "80 m" }
          ],
          correct: "B"
        },
        {
          id: "ec",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "To the nearest tenth of a meter, how far is it from C to the bridge at E?",
          choices: [
            { letter: "A", text: "11.5 m" },
            { letter: "B", text: "34.6 m" },
            { letter: "C", text: "17.3 m" },
            { letter: "D", text: "44.7 m" }
          ],
          correct: "B"
        },
        {
          id: "error",
          sol: "G.PC.1",
          sub: "G.PC.1.1",
          stem: "Ben says AE = EC, because the diagonals of a kite are perpendicular. Which statement explains his error?",
          choices: [
            { letter: "A", text: "The diagonals of a kite are not perpendicular." },
            { letter: "B", text: "AC is bisected, but BD is not bisected." },
            { letter: "C", text: "AE = EC only when a kite has a right angle." },
            { letter: "D", text: "Only BD is bisected; AC is not cut in half." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc1-worms-orchard-plot",
      family: "GEO",
      mode: "worms",
      title: "The Orchard Plot",
      kind: "Quadrilaterals · G.PC.1",
      blurb: "Four apple trees mark the corners of a plot on a grid.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"Coordinate grid from 0 to 8 on both axes with shaded quadrilateral ABCD: A(1, 1), B(6, 3), C(7, 7), D(2, 5), and dashed diagonals AC and BD\"><line class=\"gr\" x1=\"96\" y1=\"146\" x2=\"96\" y2=\"18\"/><line class=\"gr\" x1=\"112\" y1=\"146\" x2=\"112\" y2=\"18\"/><line class=\"gr\" x1=\"128\" y1=\"146\" x2=\"128\" y2=\"18\"/><line class=\"gr\" x1=\"144\" y1=\"146\" x2=\"144\" y2=\"18\"/><line class=\"gr\" x1=\"160\" y1=\"146\" x2=\"160\" y2=\"18\"/><line class=\"gr\" x1=\"176\" y1=\"146\" x2=\"176\" y2=\"18\"/><line class=\"gr\" x1=\"192\" y1=\"146\" x2=\"192\" y2=\"18\"/><line class=\"gr\" x1=\"208\" y1=\"146\" x2=\"208\" y2=\"18\"/><line class=\"gr\" x1=\"224\" y1=\"146\" x2=\"224\" y2=\"18\"/><line class=\"gr\" x1=\"96\" y1=\"146\" x2=\"224\" y2=\"146\"/><line class=\"gr\" x1=\"96\" y1=\"130\" x2=\"224\" y2=\"130\"/><line class=\"gr\" x1=\"96\" y1=\"114\" x2=\"224\" y2=\"114\"/><line class=\"gr\" x1=\"96\" y1=\"98\" x2=\"224\" y2=\"98\"/><line class=\"gr\" x1=\"96\" y1=\"82\" x2=\"224\" y2=\"82\"/><line class=\"gr\" x1=\"96\" y1=\"66\" x2=\"224\" y2=\"66\"/><line class=\"gr\" x1=\"96\" y1=\"50\" x2=\"224\" y2=\"50\"/><line class=\"gr\" x1=\"96\" y1=\"34\" x2=\"224\" y2=\"34\"/><line class=\"gr\" x1=\"96\" y1=\"18\" x2=\"224\" y2=\"18\"/><line class=\"ax\" x1=\"96\" y1=\"146\" x2=\"224\" y2=\"146\"/><line class=\"ax\" x1=\"96\" y1=\"146\" x2=\"96\" y2=\"18\"/><text class=\"sm\" x=\"128\" y=\"159\" text-anchor=\"middle\">2</text><text class=\"sm\" x=\"160\" y=\"159\" text-anchor=\"middle\">4</text><text class=\"sm\" x=\"192\" y=\"159\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"224\" y=\"159\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"91\" y=\"118\" text-anchor=\"end\">2</text><text class=\"sm\" x=\"91\" y=\"86\" text-anchor=\"end\">4</text><text class=\"sm\" x=\"91\" y=\"54\" text-anchor=\"end\">6</text><text class=\"sm\" x=\"91\" y=\"22\" text-anchor=\"end\">8</text><text class=\"sm\" x=\"234\" y=\"150\" text-anchor=\"middle\">x</text><text class=\"sm\" x=\"96\" y=\"13\" text-anchor=\"middle\">y</text><polygon class=\"sh\" points=\"112,130 192,98 208,34 128,66\"/><line class=\"thin dash\" x1=\"112\" y1=\"130\" x2=\"208\" y2=\"34\"/><line class=\"thin dash\" x1=\"192\" y1=\"98\" x2=\"128\" y2=\"66\"/><circle class=\"dt\" cx=\"112\" cy=\"130\" r=\"3\"/><circle class=\"dt\" cx=\"192\" cy=\"98\" r=\"3\"/><circle class=\"dt\" cx=\"208\" cy=\"34\" r=\"3\"/><circle class=\"dt\" cx=\"128\" cy=\"66\" r=\"3\"/><text x=\"101\" y=\"135\" text-anchor=\"middle\">A</text><text x=\"204\" y=\"103\" text-anchor=\"middle\">B</text><text x=\"220\" y=\"39\" text-anchor=\"middle\">C</text><text x=\"116\" y=\"68\" text-anchor=\"middle\">D</text></svg></figure><p class=\"geo-given\">Four apple trees mark the corners of orchard plot <strong>ABCD</strong>: <strong>A</strong>(1, 1), <strong>B</strong>(6, 3), <strong>C</strong>(7, 7) and <strong>D</strong>(2, 5). Each grid unit is 10 m.</p>",
      claims: [
        {
          id: "parallelogram",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Which result, by itself, proves that ABCD is a parallelogram?",
          choices: [
            { letter: "A", text: "AB ∥ DC, since both slopes are 2/5" },
            { letter: "B", text: "AB = AD and CB = CD" },
            { letter: "C", text: "AC ⊥ BD, since the slopes multiply to −1" },
            { letter: "D", text: "AB ∥ DC (slope 2/5) and AD ∥ BC (slope 4)" }
          ],
          correct: "D"
        },
        {
          id: "midpoint",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "What are the coordinates of the midpoint of diagonal AC?",
          choices: [
            { letter: "A", text: "(3, 3)" },
            { letter: "B", text: "(8, 8)" },
            { letter: "C", text: "(6, 6)" },
            { letter: "D", text: "(4, 4)" }
          ],
          correct: "D"
        },
        {
          id: "bd",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "How long is diagonal BD, in grid units?",
          choices: [
            { letter: "A", text: "6 units" },
            { letter: "B", text: "2√5 units" },
            { letter: "C", text: "20 units" },
            { letter: "D", text: "8√2 units" }
          ],
          correct: "B"
        },
        {
          id: "rectangle",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "Is ABCD a rectangle? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No: AB is not parallel to DC." },
            { letter: "B", text: "Yes: slope AB · slope BC = −1." },
            { letter: "C", text: "No: AC = 6√2 but BD = 2√5." },
            { letter: "D", text: "Yes: AC and BD are both 6√2." }
          ],
          correct: "C"
        },
        {
          id: "fence",
          sol: "G.PC.1",
          sub: "G.PC.1.3",
          stem: "To the nearest meter, how long is a fence that runs once around the plot?",
          choices: [
            { letter: "A", text: "190 m" },
            { letter: "B", text: "95 m" },
            { letter: "C", text: "19 m" },
            { letter: "D", text: "240 m" }
          ],
          correct: "A"
        },
        {
          id: "move",
          sol: "G.PC.1",
          sub: "G.PC.1.2",
          stem: "A second plot has corners A(1, 1), B(6, 3) and C(4, 8), and ∠ABC is a right angle. Where must corner D go so that ABCD is a rectangle?",
          choices: [
            { letter: "A", text: "(9, 10)" },
            { letter: "B", text: "(3, −4)" },
            { letter: "C", text: "(−1, 6)" },
            { letter: "D", text: "(1, 6)" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
