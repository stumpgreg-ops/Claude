/* SOL Labyrinth — Geometry game (family GEO), G.TR.3 similar triangles (Virginia 2023 Geometry SOL): game modes "rocks"
   (Rune Rocks: space, science and weather) and "sky" (Sun Chariot: travel and getting around). Original items only. A pack
   is one figure or situation (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given facts, then
   six questions about it. Every numeric answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-tr3-rocks-rocket-fins",
      family: "GEO",
      mode: "rocks",
      title: "The Model Rocket's Fins",
      kind: "Triangles · G.TR.3",
      blurb: "A real rocket fin and a model fin with the same angle.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Two triangles beside rocket bodies: fin ABC with AB 80 cm along the body, AC 50 cm and BC 70 cm, and a 60 degree angle at A; model fin DEF with DE 16 cm along its body, DF 10 cm and an angle at D marked equal to angle A\">" +
        "<rect class=\"sh2\" x=\"60\" y=\"12\" width=\"12\" height=\"148\"/><rect class=\"sh2\" x=\"228\" y=\"66\" width=\"8\" height=\"94\"/>" +
        "<polygon class=\"ln\" points=\"72,148 72,20 141.3,108\"/><polygon class=\"ln\" points=\"236,148 236,77.6 274.1,126\"/>" +
        "<path class=\"thin\" d=\"M72 132 A16 16 0 0 1 85.9 140\"/><path class=\"thin\" d=\"M236 135 A13 13 0 0 1 247.3 141.5\"/>" +
        "<circle class=\"dt\" cx=\"72\" cy=\"148\" r=\"3\"/><circle class=\"dt\" cx=\"72\" cy=\"20\" r=\"3\"/><circle class=\"dt\" cx=\"141.3\" cy=\"108\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"236\" cy=\"148\" r=\"3\"/><circle class=\"dt\" cx=\"236\" cy=\"77.6\" r=\"3\"/><circle class=\"dt\" cx=\"274.1\" cy=\"126\" r=\"3\"/>" +
        "<text x=\"50\" y=\"155\" text-anchor=\"middle\">A</text><text x=\"83\" y=\"22\" text-anchor=\"middle\">B</text>" +
        "<text x=\"152.3\" y=\"114\" text-anchor=\"middle\">C</text><text x=\"218\" y=\"155\" text-anchor=\"middle\">D</text>" +
        "<text x=\"247\" y=\"79.6\" text-anchor=\"middle\">E</text><text x=\"285.1\" y=\"132\" text-anchor=\"middle\">F</text>" +
        "<text x=\"34\" y=\"91\" text-anchor=\"middle\">80 cm</text><text x=\"115.1\" y=\"147.7\" text-anchor=\"middle\">50 cm</text>" +
        "<text x=\"120.8\" y=\"57.9\" text-anchor=\"middle\">70 cm</text><text class=\"sm\" x=\"90\" y=\"120.8\" text-anchor=\"middle\">60°</text>" +
        "<text x=\"204\" y=\"117\" text-anchor=\"middle\">16 cm</text><text x=\"263.1\" y=\"155.9\" text-anchor=\"middle\">10 cm</text>" +
        "<text class=\"sm\" x=\"176\" y=\"44\" text-anchor=\"middle\">full-size fin</text><text class=\"sm\" x=\"280\" y=\"62\" text-anchor=\"middle\">model fin</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">A rocket fin is <strong>△ABC</strong>, with AB along the rocket's body: AB = 80 cm, AC = 50 cm, BC = 70 cm and m∠A = 60°. A model rocket's fin is <strong>△DEF</strong>, with DE along its body: DE = 16 cm, DF = 10 cm and m∠D = 60°.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity criterion do the two 60° angles and the sides beside them support?",
          choices: [
            { letter: "A", text: "SSS∼" },
            { letter: "B", text: "SAS∼" },
            { letter: "C", text: "AA" },
            { letter: "D", text: "SAS" }
          ],
          correct: "B"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which statement matches the vertices of the two fins correctly?",
          choices: [
            { letter: "A", text: "△CAB ∼ △EDF" },
            { letter: "B", text: "△ABC ∼ △DFE" },
            { letter: "C", text: "△CAB ∼ △FDE" },
            { letter: "D", text: "△BAC ∼ △FDE" }
          ],
          correct: "C"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from the full-size fin △ABC to the model fin △DEF?",
          choices: [
            { letter: "A", text: "1/5" },
            { letter: "B", text: "5" },
            { letter: "C", text: "8/5" },
            { letter: "D", text: "5/8" }
          ],
          correct: "A"
        },
        {
          id: "ef",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is the model fin's edge EF?",
          choices: [
            { letter: "A", text: "6 cm" },
            { letter: "B", text: "350 cm" },
            { letter: "C", text: "30 cm" },
            { letter: "D", text: "14 cm" }
          ],
          correct: "D"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the perimeter of the model fin △DEF?",
          choices: [
            { letter: "A", text: "8 cm" },
            { letter: "B", text: "40 cm" },
            { letter: "C", text: "26 cm" },
            { letter: "D", text: "1000 cm" }
          ],
          correct: "B"
        },
        {
          id: "other",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "A second model fin △GHJ has GH = 24 cm, GJ = 16 cm and m∠G = 60°. Is it similar to △ABC? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No; 24/80 ≠ 16/50" },
            { letter: "B", text: "Yes; 24/80 = 16/50" },
            { letter: "C", text: "Yes; 24/16 = 80/50" },
            { letter: "D", text: "No; GH must be 16 cm" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr3-rocks-pinhole",
      family: "GEO",
      mode: "rocks",
      title: "The Pinhole Camera",
      kind: "Triangles · G.TR.3",
      blurb: "A candle, a tiny hole and an upside-down image.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A candle AB stands on the left; the line from its base B passes through the pinhole P of a box and meets the back screen at C; a ray from the top A passes through P to D on the screen; right angles at B and C; PB 60 cm, PC 15 cm, AB 24 cm\">" +
        "<line class=\"ln\" x1=\"200\" y1=\"56\" x2=\"200\" y2=\"89\"/><line class=\"ln\" x1=\"200\" y1=\"95\" x2=\"200\" y2=\"128\"/>" +
        "<line class=\"ln\" x1=\"236\" y1=\"56\" x2=\"236\" y2=\"128\"/><line class=\"thin\" x1=\"200\" y1=\"56\" x2=\"236\" y2=\"56\"/>" +
        "<line class=\"thin\" x1=\"200\" y1=\"128\" x2=\"236\" y2=\"128\"/><line class=\"ln\" x1=\"56\" y1=\"34.4\" x2=\"56\" y2=\"92\"/>" +
        "<line class=\"thin\" x1=\"56\" y1=\"34.4\" x2=\"236\" y2=\"106.4\"/><line class=\"thin dash\" x1=\"56\" y1=\"92\" x2=\"236\" y2=\"92\"/>" +
        "<line class=\"ac\" x1=\"236\" y1=\"92\" x2=\"236\" y2=\"106.4\"/><path class=\"thin\" d=\"M56 85 L63 85 L63 92\"/><path class=\"thin\" d=\"M231 92 L231 97 L236 97\"/>" +
        "<circle class=\"dt\" cx=\"56\" cy=\"34.4\" r=\"3\"/><circle class=\"dt\" cx=\"56\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"200\" cy=\"92\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"236\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"236\" cy=\"106.4\" r=\"3\"/><text x=\"56\" y=\"27.4\" text-anchor=\"middle\">A</text>" +
        "<text x=\"56\" y=\"111\" text-anchor=\"middle\">B</text><text x=\"191\" y=\"111\" text-anchor=\"middle\">P</text>" +
        "<text x=\"247\" y=\"93\" text-anchor=\"middle\">C</text><text x=\"247\" y=\"115.4\" text-anchor=\"middle\">D</text>" +
        "<text x=\"30\" y=\"68\" text-anchor=\"middle\">24 cm</text><text x=\"128\" y=\"111\" text-anchor=\"middle\">60 cm</text>" +
        "<text x=\"218\" y=\"147\" text-anchor=\"middle\">15 cm</text><text class=\"sm\" x=\"281\" y=\"96\" text-anchor=\"middle\">screen</text>" +
        "<text class=\"sm\" x=\"88\" y=\"38\" text-anchor=\"middle\">candle</text></svg></figure>" +
        "<p class=\"geo-given\">In the science lab, a candle <strong>AB</strong>, 24 cm tall, stands 60 cm from the pinhole <strong>P</strong> of a box camera. P is level with the candle's base B. Light from the top A passes through P to <strong>D</strong> on the back screen, which is 15 cm behind P. The upside-down image is <strong>CD</strong>. AB and CD are vertical, and BC is level.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is △PBA similar to △PCD?",
          choices: [
            { letter: "A", text: "SAS∼: PB/PC = 60/15 and the right angles" },
            { letter: "B", text: "SSS∼: all three sides of each are known" },
            { letter: "C", text: "AA: right angles at B and C, vertical angles at P" },
            { letter: "D", text: "AA: ∠A ≅ ∠C, since AB ∥ CD" }
          ],
          correct: "C"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement pairs the candle's triangle with the image's triangle correctly?",
          choices: [
            { letter: "A", text: "△ABP ∼ △CDP" },
            { letter: "B", text: "△APB ∼ △DCP" },
            { letter: "C", text: "△BAP ∼ △DCP" },
            { letter: "D", text: "△ABP ∼ △DCP" }
          ],
          correct: "D"
        },
        {
          id: "image",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How tall is the image CD?",
          choices: [
            { letter: "A", text: "6 cm" },
            { letter: "B", text: "96 cm" },
            { letter: "C", text: "37.5 cm" },
            { letter: "D", text: "1.5 cm" }
          ],
          correct: "A"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from △PBA to △PCD?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "1/5" },
            { letter: "C", text: "1/4" },
            { letter: "D", text: "45" }
          ],
          correct: "C"
        },
        {
          id: "move",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "A student moves the candle so that it stands 40 cm from P, still level with P. How tall is the new image?",
          choices: [
            { letter: "A", text: "6 cm" },
            { letter: "B", text: "9 cm" },
            { letter: "C", text: "64 cm" },
            { letter: "D", text: "16 cm" }
          ],
          correct: "B"
        },
        {
          id: "not",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which statement is NOT true for this camera?",
          choices: [
            { letter: "A", text: "AB/CD = PB/PC" },
            { letter: "B", text: "∠A ≅ ∠D" },
            { letter: "C", text: "PA = 4 · PD" },
            { letter: "D", text: "AB/CD = PC/PB" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-rocks-moon-shadows",
      family: "GEO",
      mode: "rocks",
      title: "Shadows on the Moon",
      kind: "Triangles · G.TR.3",
      blurb: "A peak's shadow tells how high a crater rim stands.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Left: a peak M above N on the plain, its shadow NS, and the sun ray MS; MN 1.8 km and NS 7.5 km. Right: a crater rim R above Q on the crater floor, its shadow QT, and the sun ray RT; QT 12 km; RQ is h\">" +
        "<line class=\"thin\" x1=\"8\" y1=\"96\" x2=\"150\" y2=\"96\"/><line class=\"thin\" x1=\"150\" y1=\"96\" x2=\"168\" y2=\"66.8\"/>" +
        "<line class=\"thin\" x1=\"168\" y1=\"146\" x2=\"306\" y2=\"146\"/><line class=\"thin\" x1=\"306\" y1=\"146\" x2=\"316\" y2=\"124\"/>" +
        "<line class=\"ln\" x1=\"48\" y1=\"46.5\" x2=\"48\" y2=\"96\"/><line class=\"ln\" x1=\"168\" y1=\"66.8\" x2=\"168\" y2=\"146\"/>" +
        "<line class=\"ac\" x1=\"48\" y1=\"96\" x2=\"130.5\" y2=\"96\"/><line class=\"ac\" x1=\"168\" y1=\"146\" x2=\"300\" y2=\"146\"/>" +
        "<line class=\"thin dash\" x1=\"48\" y1=\"46.5\" x2=\"130.5\" y2=\"96\"/><line class=\"thin dash\" x1=\"168\" y1=\"66.8\" x2=\"300\" y2=\"146\"/>" +
        "<path class=\"thin\" d=\"M48 89 L55 89 L55 96\"/><path class=\"thin\" d=\"M168 139 L175 139 L175 146\"/><circle class=\"dt\" cx=\"48\" cy=\"46.5\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"48\" cy=\"96\" r=\"3\"/><circle class=\"dt\" cx=\"130.5\" cy=\"96\" r=\"3\"/><circle class=\"dt\" cx=\"168\" cy=\"66.8\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"168\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"300\" cy=\"146\" r=\"3\"/><text x=\"48\" y=\"40.5\" text-anchor=\"middle\">M</text>" +
        "<text x=\"48\" y=\"115\" text-anchor=\"middle\">N</text><text x=\"130.5\" y=\"115\" text-anchor=\"middle\">S</text>" +
        "<text x=\"172\" y=\"59.8\" text-anchor=\"middle\">R</text><text x=\"158\" y=\"164\" text-anchor=\"middle\">Q</text>" +
        "<text x=\"300\" y=\"164\" text-anchor=\"middle\">T</text><text class=\"sm\" x=\"24\" y=\"76\" text-anchor=\"middle\">1.8 km</text>" +
        "<text x=\"89.3\" y=\"115\" text-anchor=\"middle\">7.5 km</text><text x=\"234\" y=\"164\" text-anchor=\"middle\">12 km</text>" +
        "<text class=\"acc\" x=\"156\" y=\"117\" text-anchor=\"middle\">h</text><text class=\"sm\" x=\"250\" y=\"48\" text-anchor=\"middle\">sun rays</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">In a photo of the Moon, the Sun is low. A peak <strong>M</strong> stands 1.8 km above <strong>N</strong> on the flat plain, and its shadow NS is 7.5 km long. At the same moment, the rim <strong>R</strong> of a crater stands h km above <strong>Q</strong> on the flat crater floor, and its shadow QT is 12 km long. MN and RQ are vertical, and the sun rays MS and RT are parallel.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is the peak's triangle similar to the rim's triangle?",
          choices: [
            { letter: "A", text: "AA: right angles at N and Q, and ∠S ≅ ∠T" },
            { letter: "B", text: "SAS∼: NS/QT = 7.5/12 and the right angles" },
            { letter: "C", text: "SSS∼: all three sides of each are known" },
            { letter: "D", text: "HL: both are right triangles" }
          ],
          correct: "A"
        },
        {
          id: "rim",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How high is the crater rim above the floor (h)?",
          choices: [
            { letter: "A", text: "about 1.1 km" },
            { letter: "B", text: "50 km" },
            { letter: "C", text: "2.88 km" },
            { letter: "D", text: "6.3 km" }
          ],
          correct: "C"
        },
        {
          id: "hill",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "In the same photo, a hill on the flat plain casts a shadow 5 km long. How tall is the hill?",
          choices: [
            { letter: "A", text: "2.7 km" },
            { letter: "B", text: "1.2 km" },
            { letter: "C", text: "about 20.8 km" },
            { letter: "D", text: "0.75 km" }
          ],
          correct: "B"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement matches the peak's triangle to the rim's triangle?",
          choices: [
            { letter: "A", text: "△SNM ∼ △TQR" },
            { letter: "B", text: "△SNM ∼ △RQT" },
            { letter: "C", text: "△MSN ∼ △RQT" },
            { letter: "D", text: "△NMS ∼ △QTR" }
          ],
          correct: "A"
        },
        {
          id: "decide",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "A student reads another peak in the same photo as 2.4 km tall with a 9-km shadow. Can both numbers be right? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 2.4/1.8 = 9/7.5" },
            { letter: "B", text: "Yes; 2.4/9 = 1.8/7.5" },
            { letter: "C", text: "No; taller peaks cast shorter shadows" },
            { letter: "D", text: "No; 2.4/9 ≠ 1.8/7.5" }
          ],
          correct: "D"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from the peak's triangle △MNS to the rim's triangle △RQT?",
          choices: [
            { letter: "A", text: "0.625" },
            { letter: "B", text: "4.5" },
            { letter: "C", text: "1.6" },
            { letter: "D", text: "2.56" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr3-rocks-lab-ramp",
      family: "GEO",
      mode: "rocks",
      title: "The Physics Lab Ramp",
      kind: "Triangles · G.TR.3",
      blurb: "A post under a lab ramp makes a smaller right triangle.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 165\" role=\"img\" aria-label=\"Right triangle ABC: floor AB, vertical support BC 50 cm and ramp AC 130 cm, right angle at B; post DE stands straight up from D on the floor to E on the ramp; AD 48 cm and DB 72 cm\">" +
        "<line class=\"thin\" x1=\"8\" y1=\"140\" x2=\"312\" y2=\"140\"/><polygon class=\"ln\" points=\"24,140 288,140 288,30\"/>" +
        "<line class=\"ac\" x1=\"129.6\" y1=\"140\" x2=\"129.6\" y2=\"96\"/><path class=\"thin\" d=\"M280 140 L280 132 L288 132\"/>" +
        "<path class=\"thin\" d=\"M136.6 140 L136.6 133 L129.6 133\"/><circle class=\"dt\" cx=\"24\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"288\" cy=\"140\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"288\" cy=\"30\" r=\"3\"/><circle class=\"dt\" cx=\"129.6\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"129.6\" cy=\"96\" r=\"3\"/>" +
        "<text x=\"14\" y=\"151\" text-anchor=\"middle\">A</text><text x=\"299\" y=\"151\" text-anchor=\"middle\">B</text>" +
        "<text x=\"299\" y=\"33\" text-anchor=\"middle\">C</text><text x=\"129.6\" y=\"161\" text-anchor=\"middle\">D</text>" +
        "<text x=\"120.6\" y=\"90\" text-anchor=\"middle\">E</text><text x=\"76.8\" y=\"161\" text-anchor=\"middle\">48 cm</text>" +
        "<text x=\"208.8\" y=\"161\" text-anchor=\"middle\">72 cm</text><text x=\"262\" y=\"97\" text-anchor=\"middle\">50 cm</text>" +
        "<text x=\"150.2\" y=\"76.2\" text-anchor=\"middle\">130 cm</text></svg></figure>" +
        "<p class=\"geo-given\">A physics lab ramp is the right triangle <strong>ABC</strong>: floor AB, support BC and ramp AC, with the right angle at B. A post <strong>DE</strong> stands straight up from D on the floor to E on the ramp, so DE ⊥ AB. AD = 48 cm, DB = 72 cm, BC = 50 cm and AC = 130 cm.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is △ADE similar to △ABC?",
          choices: [
            { letter: "A", text: "SSS∼: AD/DB = AE/EC = DE/BC" },
            { letter: "B", text: "AA: ∠A ≅ ∠C, and both have a right angle" },
            { letter: "C", text: "ASA: ∠A is shared, and DE ∥ BC" },
            { letter: "D", text: "AA: shared ∠A and right angles at D and B" }
          ],
          correct: "D"
        },
        {
          id: "post",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How tall is the post DE?",
          choices: [
            { letter: "A", text: "30 cm" },
            { letter: "B", text: "20 cm" },
            { letter: "C", text: "125 cm" },
            { letter: "D", text: "about 33.3 cm" }
          ],
          correct: "B"
        },
        {
          id: "ec",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How far is it along the ramp from E up to C?",
          choices: [
            { letter: "A", text: "78 cm" },
            { letter: "B", text: "52 cm" },
            { letter: "C", text: "58 cm" },
            { letter: "D", text: "195 cm" }
          ],
          correct: "A"
        },
        {
          id: "second",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Jo adds a second post FG, with F on AB, G on AC, AF = 90 cm and AG = 100 cm. Is FG parallel to BC? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 90/100 = 120/130" },
            { letter: "B", text: "Yes; 90/120 = 100/130" },
            { letter: "C", text: "No; a post must stand at the middle of AB" },
            { letter: "D", text: "No; 90/120 ≠ 100/130" }
          ],
          correct: "D"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the perimeter of △ADE?",
          choices: [
            { letter: "A", text: "48 cm" },
            { letter: "B", text: "750 cm" },
            { letter: "C", text: "120 cm" },
            { letter: "D", text: "200 cm" }
          ],
          correct: "C"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the post's triangle and the whole ramp is correct?",
          choices: [
            { letter: "A", text: "△EDA ∼ △BCA" },
            { letter: "B", text: "△EDA ∼ △CBA" },
            { letter: "C", text: "△DEA ∼ △CBA" },
            { letter: "D", text: "△EAD ∼ △CBA" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-rocks-telescope",
      family: "GEO",
      mode: "rocks",
      title: "The Telescope's Light Cone",
      kind: "Triangles · G.TR.3",
      blurb: "A small mirror sits inside the cone of light.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A light cone: lines from the focus F to the ends A and B of the main mirror AB; the axis FM meets AB at its midpoint M at a right angle; a small mirror DE crosses the cone, parallel to AB, with its midpoint N on FM; AB 22 cm, FA 61 cm, FN 12 cm, FM 60 cm\">" +
        "<path class=\"thin\" d=\"M271 15 Q282 84 271 153\"/><line class=\"ln\" x1=\"268\" y1=\"18\" x2=\"268\" y2=\"150\"/>" +
        "<line class=\"ln\" x1=\"40\" y1=\"84\" x2=\"268\" y2=\"18\"/><line class=\"ln\" x1=\"40\" y1=\"84\" x2=\"268\" y2=\"150\"/>" +
        "<line class=\"thin dash\" x1=\"40\" y1=\"84\" x2=\"268\" y2=\"84\"/><line class=\"ac\" x1=\"85.6\" y1=\"70.8\" x2=\"85.6\" y2=\"97.2\"/>" +
        "<path class=\"thin\" d=\"M261 84 L261 77 L268 77\"/><path class=\"thin\" d=\"M90.6 84 L90.6 79 L85.6 79\"/><circle class=\"dt\" cx=\"40\" cy=\"84\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"268\" cy=\"18\" r=\"3\"/><circle class=\"dt\" cx=\"268\" cy=\"150\" r=\"3\"/><circle class=\"dt\" cx=\"268\" cy=\"84\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"85.6\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"85.6\" cy=\"70.8\" r=\"3\"/><circle class=\"dt\" cx=\"85.6\" cy=\"97.2\" r=\"3\"/>" +
        "<text x=\"29\" y=\"89\" text-anchor=\"middle\">F</text><text x=\"280\" y=\"25\" text-anchor=\"middle\">A</text>" +
        "<text x=\"280\" y=\"159\" text-anchor=\"middle\">B</text><text x=\"257\" y=\"102\" text-anchor=\"middle\">M</text>" +
        "<text x=\"85.6\" y=\"62.8\" text-anchor=\"middle\">D</text><text x=\"85.6\" y=\"115.2\" text-anchor=\"middle\">E</text>" +
        "<text x=\"100.6\" y=\"81\" text-anchor=\"middle\">N</text><text class=\"sm\" x=\"298\" y=\"60\" text-anchor=\"middle\">22 cm</text>" +
        "<text x=\"150.7\" y=\"44.5\" text-anchor=\"middle\">61 cm</text><text class=\"sm\" x=\"170\" y=\"102\" text-anchor=\"middle\">60 cm</text>" +
        "<line class=\"thin\" x1=\"40\" y1=\"128\" x2=\"85.6\" y2=\"128\"/><line class=\"thin\" x1=\"40\" y1=\"124\" x2=\"40\" y2=\"132\"/>" +
        "<line class=\"thin\" x1=\"85.6\" y1=\"124\" x2=\"85.6\" y2=\"132\"/><text class=\"sm\" x=\"62.8\" y=\"144\" text-anchor=\"middle\">12 cm</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">In a telescope, light bounces off the main mirror <strong>AB</strong>, 22 cm across, and meets at the focus <strong>F</strong>. The axis FM is perpendicular to AB at its midpoint <strong>M</strong>. FM = 60 cm and FA = FB = 61 cm. A small flat mirror <strong>DE</strong> crosses the cone, parallel to AB, with its midpoint <strong>N</strong> on FM and FN = 12 cm.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that △FND ∼ △FMA?",
          choices: [
            { letter: "A", text: "AA" },
            { letter: "B", text: "SAS∼" },
            { letter: "C", text: "SSS∼" },
            { letter: "D", text: "ASA" }
          ],
          correct: "A"
        },
        {
          id: "width",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How wide is the small mirror DE?",
          choices: [
            { letter: "A", text: "2.2 cm" },
            { letter: "B", text: "110 cm" },
            { letter: "C", text: "5.5 cm" },
            { letter: "D", text: "4.4 cm" }
          ],
          correct: "D"
        },
        {
          id: "fd",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is FD?",
          choices: [
            { letter: "A", text: "13 cm" },
            { letter: "B", text: "12.2 cm" },
            { letter: "C", text: "305 cm" },
            { letter: "D", text: "48.8 cm" }
          ],
          correct: "B"
        },
        {
          id: "bigger",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "A larger telescope has a light cone the same shape, with a main mirror 33 cm across. What is its distance FM?",
          choices: [
            { letter: "A", text: "71 cm" },
            { letter: "B", text: "40 cm" },
            { letter: "C", text: "90 cm" },
            { letter: "D", text: "91.5 cm" }
          ],
          correct: "C"
        },
        {
          id: "not",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Which statement is NOT true for this light cone?",
          choices: [
            { letter: "A", text: "FN/FM = DE/AB" },
            { letter: "B", text: "∠FDE ≅ ∠FAB" },
            { letter: "C", text: "FD/DA = FN/NM" },
            { letter: "D", text: "DE/AB = FD/DA" }
          ],
          correct: "D"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the two right triangles along the axis is correct?",
          choices: [
            { letter: "A", text: "△FND ∼ △FMA" },
            { letter: "B", text: "△FND ∼ △FAM" },
            { letter: "C", text: "△FDN ∼ △FMA" },
            { letter: "D", text: "△NFD ∼ △FMA" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr3-rocks-summer-triangle",
      family: "GEO",
      mode: "rocks",
      title: "The Summer Triangle",
      kind: "Triangles · G.TR.3",
      blurb: "Three bright stars on a chart and on a poster.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 158\" role=\"img\" aria-label=\"Left: star chart triangle VDA with VD 6 cm, VA 8.5 cm and DA 9.5 cm. Right: poster triangle XYZ with XY 19 cm, YZ 12 cm and XZ 17 cm\">" +
        "<polygon class=\"ln\" points=\"32,128 40.5,80.8 100,128\"/><polygon class=\"ln\" points=\"144,132 296,132 250.5,47.5\"/>" +
        "<circle class=\"dt\" cx=\"32\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"40.5\" cy=\"80.8\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"128\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"144\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"296\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"250.5\" cy=\"47.5\" r=\"3\"/>" +
        "<text x=\"20.9\" y=\"139.8\" text-anchor=\"middle\">V</text><text x=\"34.8\" y=\"75.2\" text-anchor=\"middle\">D</text>" +
        "<text x=\"112.2\" y=\"137.5\" text-anchor=\"middle\">A</text><text x=\"131.6\" y=\"141\" text-anchor=\"middle\">X</text>" +
        "<text x=\"308\" y=\"142.1\" text-anchor=\"middle\">Y</text><text x=\"254.6\" y=\"41.2\" text-anchor=\"middle\">Z</text>" +
        "<text class=\"sm\" x=\"18.5\" y=\"105.2\" text-anchor=\"middle\">6 cm</text><text class=\"sm\" x=\"66\" y=\"142\" text-anchor=\"middle\">8.5 cm</text>" +
        "<text class=\"sm\" x=\"82.7\" y=\"92.7\" text-anchor=\"middle\">9.5 cm</text><text x=\"220\" y=\"148\" text-anchor=\"middle\">19 cm</text>" +
        "<text x=\"183.6\" y=\"77.5\" text-anchor=\"middle\">17 cm</text><text x=\"292.6\" y=\"84.3\" text-anchor=\"middle\">12 cm</text>" +
        "<text class=\"sm\" x=\"84\" y=\"50\" text-anchor=\"middle\">star chart</text><text class=\"sm\" x=\"188\" y=\"38\" text-anchor=\"middle\">poster</text></svg>" +
        "</figure>" +
        "<p class=\"geo-given\">On a star chart, the Summer Triangle joins the stars Vega (<strong>V</strong>), Deneb (<strong>D</strong>) and Altair (<strong>A</strong>): VD = 6 cm, VA = 8.5 cm and DA = 9.5 cm. Sam draws <strong>△XYZ</strong> on a poster from memory: XY = 19 cm, YZ = 12 cm and XZ = 17 cm.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that the chart triangle is similar to Sam's poster triangle?",
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
          stem: "Which similarity statement matches the chart triangle to Sam's triangle?",
          choices: [
            { letter: "A", text: "△VDA ∼ △XYZ" },
            { letter: "B", text: "△VDA ∼ △ZYX" },
            { letter: "C", text: "△VDA ∼ △YZX" },
            { letter: "D", text: "△VDA ∼ △ZXY" }
          ],
          correct: "B"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from the chart triangle to the poster triangle?",
          choices: [
            { letter: "A", text: "2" },
            { letter: "B", text: "1/2" },
            { letter: "C", text: "6" },
            { letter: "D", text: "4" }
          ],
          correct: "A"
        },
        {
          id: "angle",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which angle of the poster triangle is congruent to the angle at Vega, ∠DVA?",
          choices: [
            { letter: "A", text: "∠X" },
            { letter: "B", text: "∠Y" },
            { letter: "C", text: "None; the sizes differ" },
            { letter: "D", text: "∠Z" }
          ],
          correct: "D"
        },
        {
          id: "leo",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Leo draws the Summer Triangle with sides of 15 cm, 21 cm and 24 cm. Is his drawing similar to the chart triangle? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 21/8.5 = 24/9.5" },
            { letter: "B", text: "Yes; each side is 9 cm longer" },
            { letter: "C", text: "No; 15/6 ≠ 24/9.5" },
            { letter: "D", text: "No; charts must use 1 cm per degree" }
          ],
          correct: "C"
        },
        {
          id: "third",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "A third chart shows the Summer Triangle the same shape, with its shortest side 4.5 cm. What is its perimeter?",
          choices: [
            { letter: "A", text: "32 cm" },
            { letter: "B", text: "18 cm" },
            { letter: "C", text: "22.5 cm" },
            { letter: "D", text: "13.5 cm" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-rocks-guy-wires",
      family: "GEO",
      mode: "rocks",
      title: "The Weather Tower's Guy Wires",
      kind: "Triangles · G.TR.3",
      blurb: "Two wires hold up a tower. Are they parallel?",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 165\" role=\"img\" aria-label=\"A vertical tower TB on level ground with M on the tower; wire TA runs from the top T to anchor A, and wire MN runs from M to anchor N; BM 20 m, MT 28 m, BN 15 m, NA 21 m and TA 60 m; right angle at B\">" +
        "<line class=\"thin\" x1=\"16\" y1=\"140\" x2=\"304\" y2=\"140\"/><line class=\"ln\" x1=\"130\" y1=\"140\" x2=\"130\" y2=\"24.8\"/>" +
        "<line class=\"ac\" x1=\"130\" y1=\"24.8\" x2=\"216.4\" y2=\"140\"/><line class=\"ac\" x1=\"130\" y1=\"92\" x2=\"166\" y2=\"140\"/>" +
        "<path class=\"thin\" d=\"M138 140 L138 132 L130 132\"/><circle class=\"dt\" cx=\"130\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"130\" cy=\"24.8\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"130\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"166\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"216.4\" cy=\"140\" r=\"3\"/>" +
        "<text x=\"130\" y=\"17.8\" text-anchor=\"middle\">T</text><text x=\"120\" y=\"158\" text-anchor=\"middle\">B</text>" +
        "<text x=\"118\" y=\"97\" text-anchor=\"middle\">M</text><text x=\"175\" y=\"134\" text-anchor=\"middle\">N</text>" +
        "<text x=\"225.4\" y=\"134\" text-anchor=\"middle\">A</text><text x=\"103\" y=\"121\" text-anchor=\"middle\">20 m</text>" +
        "<text x=\"103\" y=\"63\" text-anchor=\"middle\">28 m</text><text x=\"150\" y=\"160\" text-anchor=\"middle\">15 m</text>" +
        "<text x=\"191.2\" y=\"160\" text-anchor=\"middle\">21 m</text><text x=\"192.4\" y=\"73\" text-anchor=\"middle\">60 m</text>" +
        "<text class=\"sm\" x=\"262\" y=\"44\" text-anchor=\"middle\">weather tower</text></svg></figure>" +
        "<p class=\"geo-given\">A weather tower <strong>TB</strong> stands straight up from <strong>B</strong> on level ground. Guy wire <strong>TA</strong> runs from the top T to anchor A. Wire <strong>MN</strong> runs from M on the tower to anchor N. BM = 20 m, MT = 28 m, BN = 15 m, NA = 21 m and TA = 60 m.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Using the right angle at B and the lengths along the tower and the ground, which criterion shows that △MBN ∼ △TBA?",
          choices: [
            { letter: "A", text: "SAS∼" },
            { letter: "B", text: "AA" },
            { letter: "C", text: "SSS∼" },
            { letter: "D", text: "SAS" }
          ],
          correct: "A"
        },
        {
          id: "parallel",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Is wire MN parallel to wire TA? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 48 − 20 = 36 − 15" },
            { letter: "B", text: "Yes; △MBN ∼ △TBA, so ∠BNM ≅ ∠BAT" },
            { letter: "C", text: "No; 20/48 ≠ 15/36" },
            { letter: "D", text: "No; MN and TA meet at the ground" }
          ],
          correct: "B"
        },
        {
          id: "mn",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is wire MN?",
          choices: [
            { letter: "A", text: "32 m" },
            { letter: "B", text: "144 m" },
            { letter: "C", text: "about 42.9 m" },
            { letter: "D", text: "25 m" }
          ],
          correct: "D"
        },
        {
          id: "third",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "A third wire runs from K, 30 m up the tower, to anchor C on the other side, 24 m from B. Is △KBC similar to △TBA? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 30/24 = 48/36" },
            { letter: "B", text: "No; 30/48 ≠ 24/36" },
            { letter: "C", text: "Yes; 48 − 30 = 36 − 24" },
            { letter: "D", text: "No; KC must be parallel to TA" }
          ],
          correct: "B"
        },
        {
          id: "new",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Engineers want a wire from K, 30 m up the tower, to make a triangle similar to △TBA, with K matching T. How far from B should its anchor be?",
          choices: [
            { letter: "A", text: "18 m" },
            { letter: "B", text: "40 m" },
            { letter: "C", text: "22.5 m" },
            { letter: "D", text: "37.5 m" }
          ],
          correct: "C"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the ratio of the perimeter of △MBN to the perimeter of △TBA?",
          choices: [
            { letter: "A", text: "5/12" },
            { letter: "B", text: "25/144" },
            { letter: "C", text: "12/5" },
            { letter: "D", text: "5/7" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr3-rocks-eclipse-model",
      family: "GEO",
      mode: "rocks",
      title: "Covering the Sun",
      kind: "Triangles · G.TR.3",
      blurb: "A cardboard Moon just covers a paper Sun.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Eye E on the left; a disk BC with midpoint M and a paper Sun DF on a wall with midpoint N; lines from E through B to D and through C to F; the axis EN is perpendicular to both; EM 50 cm, BC 6 cm, DF 30 cm\">" +
        "<rect class=\"sh2\" x=\"294\" y=\"6\" width=\"10\" height=\"148\"/><line class=\"thin\" x1=\"14\" y1=\"80\" x2=\"294\" y2=\"11\"/>" +
        "<line class=\"thin\" x1=\"14\" y1=\"80\" x2=\"294\" y2=\"149\"/><line class=\"thin dash\" x1=\"14\" y1=\"80\" x2=\"294\" y2=\"80\"/>" +
        "<line class=\"ln\" x1=\"70\" y1=\"66.2\" x2=\"70\" y2=\"93.8\"/><line class=\"ac\" x1=\"294\" y1=\"11\" x2=\"294\" y2=\"149\"/>" +
        "<path class=\"thin\" d=\"M75 80 L75 75 L70 75\"/><path class=\"thin\" d=\"M288 80 L288 74 L294 74\"/><circle class=\"dt\" cx=\"14\" cy=\"80\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"70\" cy=\"66.2\" r=\"3\"/><circle class=\"dt\" cx=\"70\" cy=\"93.8\" r=\"3\"/><circle class=\"dt\" cx=\"70\" cy=\"80\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"294\" cy=\"11\" r=\"3\"/><circle class=\"dt\" cx=\"294\" cy=\"149\" r=\"3\"/><circle class=\"dt\" cx=\"294\" cy=\"80\" r=\"3\"/>" +
        "<text x=\"14\" y=\"101\" text-anchor=\"middle\">E</text><text x=\"70\" y=\"59.2\" text-anchor=\"middle\">B</text>" +
        "<text x=\"70\" y=\"111.8\" text-anchor=\"middle\">C</text><text x=\"92\" y=\"94\" text-anchor=\"middle\">M</text>" +
        "<text x=\"312\" y=\"20\" text-anchor=\"middle\">D</text><text x=\"312\" y=\"150\" text-anchor=\"middle\">F</text>" +
        "<text x=\"312\" y=\"85\" text-anchor=\"middle\">N</text><text class=\"sm\" x=\"42\" y=\"60\" text-anchor=\"middle\">6 cm</text>" +
        "<text x=\"262\" y=\"57\" text-anchor=\"middle\">30 cm</text><line class=\"thin\" x1=\"14\" y1=\"150\" x2=\"70\" y2=\"150\"/>" +
        "<line class=\"thin\" x1=\"14\" y1=\"146\" x2=\"14\" y2=\"154\"/><line class=\"thin\" x1=\"70\" y1=\"146\" x2=\"70\" y2=\"154\"/>" +
        "<text class=\"sm\" x=\"42\" y=\"143\" text-anchor=\"middle\">50 cm</text><text class=\"sm\" x=\"240\" y=\"162\" text-anchor=\"middle\">wall</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">To model an eclipse, Rosa holds a cardboard disk <strong>BC</strong> (the Moon), 6 cm across, 50 cm from her eye <strong>E</strong>. It just covers a paper Sun <strong>DF</strong>, 30 cm across, on the wall. The lines from E through B and C reach D and F. The disk and the paper Sun are parallel, and the line EN meets both at right angles at their midpoints <strong>M</strong> and <strong>N</strong>.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is △EBC similar to △EDF?",
          choices: [
            { letter: "A", text: "SAS∼: ∠E is shared, and BC/DF = 6/30" },
            { letter: "B", text: "HL: EM ⊥ BC and EN ⊥ DF" },
            { letter: "C", text: "AA: ∠B ≅ ∠F, since both are at an edge" },
            { letter: "D", text: "AA: ∠E is shared, and ∠EBC ≅ ∠EDF" }
          ],
          correct: "D"
        },
        {
          id: "wall",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How far is the paper Sun from Rosa's eye (EN)?",
          choices: [
            { letter: "A", text: "10 cm" },
            { letter: "B", text: "74 cm" },
            { letter: "C", text: "250 cm" },
            { letter: "D", text: "200 cm" }
          ],
          correct: "C"
        },
        {
          id: "real",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The Moon is 3,475 km across and 384,000 km away. In a total eclipse it just covers the Sun, which is 1,392,000 km across. Using similar triangles, about how far away is the Sun?",
          choices: [
            { letter: "A", text: "about 154 million km" },
            { letter: "B", text: "about 959 km" },
            { letter: "C", text: "about 1.8 million km" },
            { letter: "D", text: "about 535 billion km" }
          ],
          correct: "A"
        },
        {
          id: "friend",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Rosa's friend says a 10-cm disk held 80 cm from the eye would also just cover the paper Sun. Is that right? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 10/6 = 80/50" },
            { letter: "B", text: "No; 10/80 ≠ 6/50" },
            { letter: "C", text: "Yes; 10/80 = 6/50" },
            { letter: "D", text: "No; only a 6-cm disk can cover it" }
          ],
          correct: "B"
        },
        {
          id: "move",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Rosa moves the 6-cm disk to 40 cm from her eye. How wide a paper Sun on the same wall would it just cover now?",
          choices: [
            { letter: "A", text: "30 cm" },
            { letter: "B", text: "24 cm" },
            { letter: "C", text: "37.5 cm" },
            { letter: "D", text: "0.96 cm" }
          ],
          correct: "C"
        },
        {
          id: "proportion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which proportion is true for these similar triangles?",
          choices: [
            { letter: "A", text: "BC/DF = EB/BD" },
            { letter: "B", text: "BC/EB = ED/DF" },
            { letter: "C", text: "EB/ED = EC/CF" },
            { letter: "D", text: "BC/DF = EB/ED" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-sky-road-map",
      family: "GEO",
      mode: "sky",
      title: "Three Towns on the Road Map",
      kind: "Triangles · G.TR.3",
      blurb: "Centimeters on a map, kilometers on the road.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A road map: straight roads join towns L, M and N; LM 4 cm, MN 7 cm and LN 6 cm on the map\">" +
        "<rect class=\"sh2\" x=\"12\" y=\"8\" width=\"296\" height=\"146\"/><polygon class=\"ln\" points=\"99.6,50.7 54,126 208,126\"/>" +
        "<circle class=\"dt\" cx=\"99.6\" cy=\"50.7\" r=\"3\"/><circle class=\"dt\" cx=\"54\" cy=\"126\" r=\"3\"/><circle class=\"dt\" cx=\"208\" cy=\"126\" r=\"3\"/>" +
        "<text x=\"94.6\" y=\"43.7\" text-anchor=\"middle\">L</text><text x=\"40.9\" y=\"135.9\" text-anchor=\"middle\">M</text>" +
        "<text x=\"221.5\" y=\"134.9\" text-anchor=\"middle\">N</text><text x=\"59.7\" y=\"83\" text-anchor=\"middle\">4 cm</text>" +
        "<text x=\"131\" y=\"144\" text-anchor=\"middle\">7 cm</text><text x=\"164.1\" y=\"78.6\" text-anchor=\"middle\">6 cm</text>" +
        "<text class=\"sm\" x=\"262\" y=\"38\" text-anchor=\"middle\">road map</text></svg></figure>" +
        "<p class=\"geo-given\">On a road map, straight roads join the towns <strong>L</strong>, <strong>M</strong> and <strong>N</strong>: LM = 4 cm, MN = 7 cm and LN = 6 cm. The real distances are LM = 60 km, MN = 105 km and LN = 90 km.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that the map triangle is similar to the real triangle of towns?",
          choices: [
            { letter: "A", text: "SSS∼" },
            { letter: "B", text: "SAS∼" },
            { letter: "C", text: "AA" },
            { letter: "D", text: "SSS" }
          ],
          correct: "A"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from the map triangle to the real triangle, in kilometers per centimeter?",
          choices: [
            { letter: "A", text: "1/15" },
            { letter: "B", text: "56" },
            { letter: "C", text: "15" },
            { letter: "D", text: "17.5" }
          ],
          correct: "C"
        },
        {
          id: "fourth",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Town O is 3.2 cm from N on the same map. How far apart are the real towns N and O?",
          choices: [
            { letter: "A", text: "18.2 km" },
            { letter: "B", text: "about 0.2 km" },
            { letter: "C", text: "about 4.7 km" },
            { letter: "D", text: "48 km" }
          ],
          correct: "D"
        },
        {
          id: "tourist",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "A tourist map shows the same three towns with LM = 6 cm. What is the perimeter of the triangle on the tourist map?",
          choices: [
            { letter: "A", text: "38.25 cm" },
            { letter: "B", text: "25.5 cm" },
            { letter: "C", text: "about 11.3 cm" },
            { letter: "D", text: "19 cm" }
          ],
          correct: "B"
        },
        {
          id: "second",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "A second map shows LM = 5 cm, MN = 8 cm and LN = 7 cm. Is its triangle similar to the first map's △LMN? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 5/4 = 7/6" },
            { letter: "B", text: "Yes; 5/8 = 4/7" },
            { letter: "C", text: "No; 5/4 ≠ 8/7" },
            { letter: "D", text: "No; two maps need the same scale" }
          ],
          correct: "C"
        },
        {
          id: "model",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "For a project, Ana builds △XYZ with XY = 18 cm, YZ = 12 cm and XZ = 21 cm. Which similarity statement is correct?",
          choices: [
            { letter: "A", text: "△LMN ∼ △YZX" },
            { letter: "B", text: "△LMN ∼ △XYZ" },
            { letter: "C", text: "△LMN ∼ △ZYX" },
            { letter: "D", text: "△LMN ∼ △YXZ" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-tr3-sky-grade-sign",
      family: "GEO",
      mode: "sky",
      title: "Up the Hill Road",
      kind: "Triangles · G.TR.3",
      blurb: "A straight road climbs at a steady grade.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 155\" role=\"img\" aria-label=\"A straight road rises from A to C; D on the road is straight above E, and C is straight above B; AE 250 m, EB 350 m, DE 15 m; right angles at E and B\">" +
        "<line class=\"thin\" x1=\"6\" y1=\"132\" x2=\"314\" y2=\"132\"/><line class=\"ln\" x1=\"20\" y1=\"132\" x2=\"290\" y2=\"18.6\"/>" +
        "<line class=\"thin dash\" x1=\"20\" y1=\"132\" x2=\"290\" y2=\"132\"/><line class=\"ac\" x1=\"132.5\" y1=\"84.8\" x2=\"132.5\" y2=\"132\"/>" +
        "<line class=\"thin dash\" x1=\"290\" y1=\"18.6\" x2=\"290\" y2=\"132\"/><path class=\"thin\" d=\"M138.5 132 L138.5 126 L132.5 126\"/>" +
        "<path class=\"thin\" d=\"M283 132 L283 125 L290 125\"/><circle class=\"dt\" cx=\"20\" cy=\"132\" r=\"3\"/><circle class=\"dt\" cx=\"290\" cy=\"132\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"290\" cy=\"18.6\" r=\"3\"/><circle class=\"dt\" cx=\"132.5\" cy=\"84.8\" r=\"3\"/><circle class=\"dt\" cx=\"132.5\" cy=\"132\" r=\"3\"/>" +
        "<text x=\"20\" y=\"151\" text-anchor=\"middle\">A</text><text x=\"290\" y=\"151\" text-anchor=\"middle\">B</text>" +
        "<text x=\"301\" y=\"23.6\" text-anchor=\"middle\">C</text><text x=\"123.5\" y=\"77.8\" text-anchor=\"middle\">D</text>" +
        "<text x=\"132.5\" y=\"151\" text-anchor=\"middle\">E</text><text x=\"76.3\" y=\"151\" text-anchor=\"middle\">250 m</text>" +
        "<text x=\"211.3\" y=\"151\" text-anchor=\"middle\">350 m</text><text class=\"sm\" x=\"150.5\" y=\"116\" text-anchor=\"middle\">15 m</text>" +
        "<text class=\"sm\" x=\"166\" y=\"54\" text-anchor=\"middle\">road</text></svg><figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">A straight road climbs from <strong>A</strong> at the foot of a hill to <strong>C</strong> at the top. Point <strong>D</strong> on the road is straight above <strong>E</strong>, and C is straight above <strong>B</strong>. A, E and B are on one level line. AE = 250 m, EB = 350 m and DE = 15 m.</p>",
      claims: [
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which criterion shows that △AED ∼ △ABC?",
          choices: [
            { letter: "A", text: "SAS∼" },
            { letter: "B", text: "AA" },
            { letter: "C", text: "SSS∼" },
            { letter: "D", text: "HL" }
          ],
          correct: "B"
        },
        {
          id: "bc",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How high is C above B?",
          choices: [
            { letter: "A", text: "6.25 m" },
            { letter: "B", text: "21 m" },
            { letter: "C", text: "365 m" },
            { letter: "D", text: "36 m" }
          ],
          correct: "D"
        },
        {
          id: "sign",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "A road sign says a road has a 6% grade: it rises 6 m for every 100 m of level distance. How much does it rise over 425 m of level distance?",
          choices: [
            { letter: "A", text: "25.5 m" },
            { letter: "B", text: "about 70.8 m" },
            { letter: "C", text: "10.25 m" },
            { letter: "D", text: "255 m" }
          ],
          correct: "A"
        },
        {
          id: "other",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Another straight stretch of road rises 20 m over 300 m of level distance. Is its right triangle similar to △AED? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 20/15 = 300/250" },
            { letter: "B", text: "Yes; 20/300 = 15/250" },
            { letter: "C", text: "No; 20/300 ≠ 15/250" },
            { letter: "D", text: "No; the stretch must be 600 m long" }
          ],
          correct: "C"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the two road triangles is correct?",
          choices: [
            { letter: "A", text: "△ADE ∼ △ABC" },
            { letter: "B", text: "△AED ∼ △ACB" },
            { letter: "C", text: "△EAD ∼ △ABC" },
            { letter: "D", text: "△AED ∼ △ABC" }
          ],
          correct: "D"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from △AED to △ABC?",
          choices: [
            { letter: "A", text: "5/12" },
            { letter: "B", text: "2.4" },
            { letter: "C", text: "350" },
            { letter: "D", text: "5.76" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-sky-sails",
      family: "GEO",
      mode: "sky",
      title: "Two Sails, One Shape?",
      kind: "Triangles · G.TR.3",
      blurb: "A yacht's sail and a dinghy's sail, with a few angles each.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 165\" role=\"img\" aria-label=\"Left: a yacht sail, triangle ABC with AB along the mast, AB 12 m, angle A 72 degrees and angle B 28 degrees. Right: a dinghy sail, triangle DEF with FE along its mast, FE 3 m, angle E 28 degrees and angle D 80 degrees\">" +
        "<path class=\"thin\" d=\"M44 140 L168 140 L156 154 L56 154 Z\"/><path class=\"thin\" d=\"M206 140 L300 140 L290 152 L216 152 Z\"/>" +
        "<line class=\"thin\" x1=\"92\" y1=\"140\" x2=\"92\" y2=\"18\"/><line class=\"thin\" x1=\"258\" y1=\"140\" x2=\"258\" y2=\"36\"/>" +
        "<polygon class=\"ln\" points=\"92,136 92,28 141,120.1\"/><polygon class=\"ln\" points=\"217.2,122.7 258,46 258,136\"/>" +
        "<path class=\"thin\" d=\"M92 122 A14 14 0 0 1 105.3 131.7\"/><path class=\"thin\" d=\"M92 50 A22 22 0 0 0 102.3 47.4\"/>" +
        "<path class=\"thin\" d=\"M258 68 A22 22 0 0 1 247.7 65.4\"/><path class=\"thin\" d=\"M222.4 113 A11 11 0 0 1 227.7 126.1\"/>" +
        "<circle class=\"dt\" cx=\"92\" cy=\"136\" r=\"3\"/><circle class=\"dt\" cx=\"92\" cy=\"28\" r=\"3\"/><circle class=\"dt\" cx=\"141\" cy=\"120.1\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"217.2\" cy=\"122.7\" r=\"3\"/><circle class=\"dt\" cx=\"258\" cy=\"46\" r=\"3\"/><circle class=\"dt\" cx=\"258\" cy=\"136\" r=\"3\"/>" +
        "<text x=\"81\" y=\"137\" text-anchor=\"middle\">A</text><text x=\"81\" y=\"35\" text-anchor=\"middle\">B</text>" +
        "<text x=\"152\" y=\"127.1\" text-anchor=\"middle\">C</text><text x=\"206.2\" y=\"129.7\" text-anchor=\"middle\">D</text>" +
        "<text x=\"269\" y=\"53\" text-anchor=\"middle\">E</text><text x=\"269\" y=\"137\" text-anchor=\"middle\">F</text>" +
        "<text x=\"74\" y=\"89\" text-anchor=\"middle\">12 m</text><text x=\"276\" y=\"97\" text-anchor=\"middle\">3 m</text>" +
        "<text class=\"sm\" x=\"107.9\" y=\"118.2\" text-anchor=\"middle\">72°</text><text class=\"sm\" x=\"101.7\" y=\"70.8\" text-anchor=\"middle\">28°</text>" +
        "<text class=\"sm\" x=\"248.3\" y=\"88.8\" text-anchor=\"middle\">28°</text><text class=\"sm\" x=\"240.4\" y=\"117.4\" text-anchor=\"middle\">80°</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">A yacht's sail is <strong>△ABC</strong>, with AB along the mast: m∠A = 72°, m∠B = 28° and AB = 12 m. A dinghy's sail is <strong>△DEF</strong>, with FE along its mast: m∠D = 80°, m∠E = 28° and FE = 3 m.</p>",
      claims: [
        {
          id: "similar",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "Are the two sails similar? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; m∠B = 80° = m∠D" },
            { letter: "B", text: "No; m∠C = 72° ≠ m∠D" },
            { letter: "C", text: "No; m∠E = 80° ≠ m∠B" },
            { letter: "D", text: "Yes; m∠C = 80° = m∠D" }
          ],
          correct: "D"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the two sails is correct?",
          choices: [
            { letter: "A", text: "△ABC ∼ △FED" },
            { letter: "B", text: "△ABC ∼ △DEF" },
            { letter: "C", text: "△ABC ∼ △FDE" },
            { letter: "D", text: "△ABC ∼ △EFD" }
          ],
          correct: "A"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from the yacht's sail to the dinghy's sail?",
          choices: [
            { letter: "A", text: "4" },
            { letter: "B", text: "9" },
            { letter: "C", text: "1/4" },
            { letter: "D", text: "1/16" }
          ],
          correct: "C"
        },
        {
          id: "edge",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The yacht sail's edge BC is 11.6 m long. How long is the matching edge of the dinghy's sail?",
          choices: [
            { letter: "A", text: "46.4 m" },
            { letter: "B", text: "2.9 m" },
            { letter: "C", text: "8.6 m" },
            { letter: "D", text: "about 0.7 m" }
          ],
          correct: "B"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The yacht sail's perimeter is 29.3 m. To the nearest tenth of a meter, what is the perimeter of the dinghy's sail?",
          choices: [
            { letter: "A", text: "7.3 m" },
            { letter: "B", text: "117.2 m" },
            { letter: "C", text: "1.8 m" },
            { letter: "D", text: "20.3 m" }
          ],
          correct: "A"
        },
        {
          id: "third",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "A third sail △GHJ has m∠G = 72° and m∠H = 30°. Is it similar to the yacht's sail? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; its angles are 72°, 28°, 80°" },
            { letter: "B", text: "No; m∠G ≠ m∠A" },
            { letter: "C", text: "No; a sail needs a right angle" },
            { letter: "D", text: "No; its angles are 72°, 30°, 78°" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-sky-bridge-truss",
      family: "GEO",
      mode: "sky",
      title: "The Bridge Truss",
      kind: "Triangles · G.TR.3",
      blurb: "A crossbar parallel to the deck splits a truss panel.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Triangle ABC, a truss panel with AC along the deck; crossbar DE joins D on AB to E on BC; BD 3 m, DA 4.5 m, BE 3.6 m and AC 12 m\">" +
        "<rect class=\"sh2\" x=\"8\" y=\"148\" width=\"304\" height=\"8\"/><polygon class=\"ln\" points=\"28,148 137.3,24.4 292,148\"/>" +
        "<line class=\"ac\" x1=\"93.6\" y1=\"73.8\" x2=\"199.2\" y2=\"73.8\"/><path class=\"thin\" d=\"M150.9 77.8 L156.9 73.8 L150.9 69.8\"/>" +
        "<path class=\"thin\" d=\"M169.8 152 L175.8 148 L169.8 144\"/><circle class=\"dt\" cx=\"28\" cy=\"148\" r=\"3\"/><circle class=\"dt\" cx=\"137.3\" cy=\"24.4\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"292\" cy=\"148\" r=\"3\"/><circle class=\"dt\" cx=\"93.6\" cy=\"73.8\" r=\"3\"/><circle class=\"dt\" cx=\"199.2\" cy=\"73.8\" r=\"3\"/>" +
        "<text x=\"18\" y=\"143\" text-anchor=\"middle\">A</text><text x=\"135.1\" y=\"17.6\" text-anchor=\"middle\">B</text>" +
        "<text x=\"302\" y=\"143\" text-anchor=\"middle\">C</text><text x=\"81.6\" y=\"74.8\" text-anchor=\"middle\">D</text>" +
        "<text x=\"211.2\" y=\"74.8\" text-anchor=\"middle\">E</text><text x=\"103.5\" y=\"43.5\" text-anchor=\"middle\">3 m</text>" +
        "<text x=\"45.8\" y=\"102.7\" text-anchor=\"middle\">4.5 m</text><text x=\"180.7\" y=\"38.5\" text-anchor=\"middle\">3.6 m</text>" +
        "<text x=\"128\" y=\"142\" text-anchor=\"middle\">12 m</text><text class=\"sm\" x=\"262\" y=\"34\" text-anchor=\"middle\">bridge truss</text></svg></figure>" +
        "<p class=\"geo-given\">One panel of a bridge truss is <strong>△ABC</strong>, with AC along the deck. A crossbar <strong>DE</strong> joins D on AB to E on BC, and DE ∥ AC. BD = 3 m, DA = 4.5 m, BE = 3.6 m and AC = 12 m.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is △DBE similar to △ABC?",
          choices: [
            { letter: "A", text: "SAS∼: BD/DA = BE/EC, with ∠B" },
            { letter: "B", text: "SSS∼: all three pairs of sides are known" },
            { letter: "C", text: "AA: ∠B is shared, and ∠BDE ≅ ∠BAC" },
            { letter: "D", text: "AA: ∠BDE ≅ ∠BED, since DE is level" }
          ],
          correct: "C"
        },
        {
          id: "ec",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is EC?",
          choices: [
            { letter: "A", text: "2.4 m" },
            { letter: "B", text: "5.4 m" },
            { letter: "C", text: "5.1 m" },
            { letter: "D", text: "9 m" }
          ],
          correct: "B"
        },
        {
          id: "de",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is the crossbar DE?",
          choices: [
            { letter: "A", text: "8 m" },
            { letter: "B", text: "30 m" },
            { letter: "C", text: "7.5 m" },
            { letter: "D", text: "4.8 m" }
          ],
          correct: "D"
        },
        {
          id: "second",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "On a second panel, BD = 2.5 m, DA = 4 m, BE = 3 m and EC = 5 m. Is its crossbar DE parallel to AC? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No; 2.5/4 ≠ 3/5" },
            { letter: "B", text: "Yes; 2.5/3 = 4/5" },
            { letter: "C", text: "Yes; 4 − 2.5 = 5 − 3" },
            { letter: "D", text: "No; DE must be half of AC" }
          ],
          correct: "A"
        },
        {
          id: "perimeter",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "The perimeter of △ABC is 28.5 m. What is the perimeter of △DBE?",
          choices: [
            { letter: "A", text: "4.56 m" },
            { letter: "B", text: "11.4 m" },
            { letter: "C", text: "71.25 m" },
            { letter: "D", text: "19 m" }
          ],
          correct: "B"
        },
        {
          id: "ratio",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which ratio is equal to BD/BA?",
          choices: [
            { letter: "A", text: "BE/EC" },
            { letter: "B", text: "DA/BA" },
            { letter: "C", text: "DE/AC" },
            { letter: "D", text: "AC/DE" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr3-sky-ladder-truck",
      family: "GEO",
      mode: "sky",
      title: "The Ladder Truck",
      kind: "Triangles · G.TR.3",
      blurb: "A firefighter on the ladder helps find a window's height.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 165\" role=\"img\" aria-label=\"A fire truck with its turntable T; ladder TW reaches window W on a building wall; dashed level line from T meets the wall at H; firefighter F on the ladder is right above G on the dashed line; TG 6 m and FG 8 m; right angles at G and H\">" +
        "<line class=\"thin\" x1=\"4\" y1=\"156\" x2=\"316\" y2=\"156\"/><rect class=\"sh2\" x=\"160\" y=\"8\" width=\"92\" height=\"148\"/>" +
        "<rect class=\"sh\" x=\"12\" y=\"141\" width=\"80\" height=\"9\"/><circle class=\"thin\" cx=\"28\" cy=\"151\" r=\"5\"/><circle class=\"thin\" cx=\"76\" cy=\"151\" r=\"5\"/>" +
        "<line class=\"ln\" x1=\"160\" y1=\"8\" x2=\"160\" y2=\"156\"/><line class=\"thin dash\" x1=\"70\" y1=\"138\" x2=\"160\" y2=\"138\"/>" +
        "<line class=\"ac\" x1=\"70\" y1=\"138\" x2=\"160\" y2=\"18\"/><line class=\"thin\" x1=\"106\" y1=\"90\" x2=\"106\" y2=\"138\"/>" +
        "<path class=\"thin\" d=\"M100 138 L100 132 L106 132\"/><path class=\"thin\" d=\"M153 138 L153 131 L160 131\"/><circle class=\"dt\" cx=\"70\" cy=\"138\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"160\" cy=\"138\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"18\" r=\"3\"/><circle class=\"dt\" cx=\"106\" cy=\"138\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"106\" cy=\"90\" r=\"3\"/><text x=\"58\" y=\"135\" text-anchor=\"middle\">T</text><text x=\"150\" y=\"155\" text-anchor=\"middle\">H</text>" +
        "<text x=\"149\" y=\"25\" text-anchor=\"middle\">W</text><text x=\"110\" y=\"154\" text-anchor=\"middle\">G</text>" +
        "<text x=\"97\" y=\"85\" text-anchor=\"middle\">F</text><text class=\"sm\" x=\"92\" y=\"131\" text-anchor=\"middle\">6 m</text>" +
        "<text x=\"118\" y=\"119\" text-anchor=\"middle\">8 m</text><text class=\"sm\" x=\"206\" y=\"84\" text-anchor=\"middle\">building</text></svg></figure>" +
        "<p class=\"geo-given\">A fire truck's ladder <strong>TW</strong> rises from the turntable <strong>T</strong>, 3 m above the ground, to a window <strong>W</strong>. A dashed level line from T meets the wall at <strong>H</strong>, and the wall is vertical. A firefighter stands at <strong>F</strong> on the ladder, straight above <strong>G</strong> on the dashed line. TG = 6 m, FG = 8 m, TF = 10 m and TH = 15 m.</p>",
      claims: [
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the firefighter's triangle and the ladder's triangle is correct?",
          choices: [
            { letter: "A", text: "△TGF ∼ △TWH" },
            { letter: "B", text: "△TGF ∼ △THW" },
            { letter: "C", text: "△GTF ∼ △THW" },
            { letter: "D", text: "△TFG ∼ △THW" }
          ],
          correct: "B"
        },
        {
          id: "hw",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How far above the dashed line is the window (HW)?",
          choices: [
            { letter: "A", text: "20 m" },
            { letter: "B", text: "17 m" },
            { letter: "C", text: "11.25 m" },
            { letter: "D", text: "3.2 m" }
          ],
          correct: "A"
        },
        {
          id: "window",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How high above the ground is the window W?",
          choices: [
            { letter: "A", text: "20 m" },
            { letter: "B", text: "17 m" },
            { letter: "C", text: "23 m" },
            { letter: "D", text: "14.25 m" }
          ],
          correct: "C"
        },
        {
          id: "ladder",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How long is the ladder TW?",
          choices: [
            { letter: "A", text: "19 m" },
            { letter: "B", text: "4 m" },
            { letter: "C", text: "18.75 m" },
            { letter: "D", text: "25 m" }
          ],
          correct: "D"
        },
        {
          id: "check",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "On another call, the crew reads TG = 9 m, FG = 12 m, TH = 18 m and HW = 26 m. Can these numbers fit one straight ladder? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No; 12/9 ≠ 26/18" },
            { letter: "B", text: "Yes; 9/18 = 12/26" },
            { letter: "C", text: "Yes; 26/12 = 18/9" },
            { letter: "D", text: "No; HW must equal TH" }
          ],
          correct: "A"
        },
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is △TGF similar to △THW?",
          choices: [
            { letter: "A", text: "SAS∼: TG/TH = 6/15, with the right angles" },
            { letter: "B", text: "AA: shared ∠T and right angles at G and H" },
            { letter: "C", text: "SSS∼: TG, FG and TF are known" },
            { letter: "D", text: "AA: ∠F ≅ ∠T, since FG ⊥ TH" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-tr3-sky-kite-shadow",
      family: "GEO",
      mode: "sky",
      title: "The Kite's Shadow",
      kind: "Triangles · G.TR.3",
      blurb: "A kite over the beach and a pole's shadow in the sand.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 165\" role=\"img\" aria-label=\"Left: an umbrella pole UV 2 m tall with its shadow VW 1.5 m and the sun ray UW. Right: a kite K straight above G, the sun ray KS and the kite's shadow S on the sand; GS 27 m; KG is h\">" +
        "<line class=\"thin\" x1=\"4\" y1=\"140\" x2=\"316\" y2=\"140\"/><line class=\"ln\" x1=\"30\" y1=\"80\" x2=\"30\" y2=\"140\"/>" +
        "<line class=\"thin dash\" x1=\"170\" y1=\"17.6\" x2=\"170\" y2=\"140\"/><line class=\"thin dash\" x1=\"30\" y1=\"80\" x2=\"75\" y2=\"140\"/>" +
        "<line class=\"thin dash\" x1=\"170\" y1=\"17.6\" x2=\"261.8\" y2=\"140\"/><line class=\"ac\" x1=\"30\" y1=\"140\" x2=\"75\" y2=\"140\"/>" +
        "<line class=\"ac\" x1=\"170\" y1=\"140\" x2=\"261.8\" y2=\"140\"/><polygon class=\"sh\" points=\"170,6 179,17.6 170,32 161,17.6\"/>" +
        "<path class=\"thin\" d=\"M30 133 L37 133 L37 140\"/><path class=\"thin\" d=\"M170 133 L177 133 L177 140\"/><circle class=\"dt\" cx=\"30\" cy=\"80\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"30\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"75\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"170\" cy=\"17.6\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"170\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"261.8\" cy=\"140\" r=\"3\"/><text x=\"30\" y=\"74\" text-anchor=\"middle\">U</text>" +
        "<text x=\"18\" y=\"159\" text-anchor=\"middle\">V</text><text x=\"85\" y=\"135\" text-anchor=\"middle\">W</text>" +
        "<text x=\"188\" y=\"24.6\" text-anchor=\"middle\">K</text><text x=\"166\" y=\"159\" text-anchor=\"middle\">G</text>" +
        "<text x=\"265.8\" y=\"159\" text-anchor=\"middle\">S</text><text x=\"14\" y=\"115\" text-anchor=\"middle\">2 m</text>" +
        "<text x=\"54.5\" y=\"159\" text-anchor=\"middle\">1.5 m</text><text x=\"217.9\" y=\"159\" text-anchor=\"middle\">27 m</text>" +
        "<text class=\"acc\" x=\"158\" y=\"89\" text-anchor=\"middle\">h</text><text class=\"sm\" x=\"76\" y=\"66\" text-anchor=\"middle\">umbrella pole</text></svg>" +
        "<figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">On a beach trip, a kite <strong>K</strong> flies straight above point <strong>G</strong>. At the same moment, a 2-m umbrella pole <strong>UV</strong> casts a shadow VW that is 1.5 m long, and the kite's shadow <strong>S</strong> is 27 m from G. UV and KG are vertical, the sand is level, and the sun rays UW and KS are parallel.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is the pole's triangle similar to the kite's triangle?",
          choices: [
            { letter: "A", text: "SAS∼: VW/GS = 1.5/27 and the right angles" },
            { letter: "B", text: "SSS∼: the two shadows are proportional" },
            { letter: "C", text: "HL: both triangles have a right angle" },
            { letter: "D", text: "AA: right angles at V and G, and ∠W ≅ ∠S" }
          ],
          correct: "D"
        },
        {
          id: "height",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How high is the kite (h)?",
          choices: [
            { letter: "A", text: "20.25 m" },
            { letter: "B", text: "27.5 m" },
            { letter: "C", text: "36 m" },
            { letter: "D", text: "54 m" }
          ],
          correct: "C"
        },
        {
          id: "later",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Later, the 2-m pole casts a 2.5-m shadow. How far from the point under it is the shadow of a kite flying 30 m high?",
          choices: [
            { letter: "A", text: "24 m" },
            { letter: "B", text: "37.5 m" },
            { letter: "C", text: "30.5 m" },
            { letter: "D", text: "22.5 m" }
          ],
          correct: "B"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the pole's triangle and the kite's triangle is correct?",
          choices: [
            { letter: "A", text: "△UVW ∼ △KGS" },
            { letter: "B", text: "△UVW ∼ △GKS" },
            { letter: "C", text: "△VUW ∼ △KGS" },
            { letter: "D", text: "△UWV ∼ △KGS" }
          ],
          correct: "A"
        },
        {
          id: "flag",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "A boy says his 1.2-m flagpole cast a 1.8-m shadow at that same moment. Can that be right? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 1.8 − 1.2 = 2 − 1.5" },
            { letter: "B", text: "Yes; 1.2/2 = 1.8/1.5" },
            { letter: "C", text: "No; 1.2/1.8 ≠ 2/1.5" },
            { letter: "D", text: "Yes; 1.2/1.8 = 1.5/2" }
          ],
          correct: "C"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from the pole's triangle △UVW to the kite's triangle △KGS?",
          choices: [
            { letter: "A", text: "1/18" },
            { letter: "B", text: "25.5" },
            { letter: "C", text: "13.5" },
            { letter: "D", text: "18" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-tr3-sky-river-width",
      family: "GEO",
      mode: "sky",
      title: "How Wide Is the River?",
      kind: "Triangles · G.TR.3",
      blurb: "Stakes on one bank measure the distance to a tree on the other.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A river between a far bank and a near bank; tree T on the far bank straight across from A on the near bank; C and D farther along the near bank; E is away from the river, straight back from D; the sight line from E passes through C to T; AC 40 m, CD 16 m, DE 18 m; right angles at A and D; TA is w\">" +
        "<line class=\"thin\" x1=\"4\" y1=\"12\" x2=\"316\" y2=\"12\"/><line class=\"thin\" x1=\"4\" y1=\"106.5\" x2=\"316\" y2=\"106.5\"/>" +
        "<path class=\"thin\" d=\"M110 40 q6 -5 12 0 t12 0\"/><path class=\"thin\" d=\"M215 50 q6 -5 12 0 t12 0\"/><path class=\"thin\" d=\"M255 76 q6 -5 12 0 t12 0\"/>" +
        "<line class=\"ln\" x1=\"40\" y1=\"12\" x2=\"40\" y2=\"106.5\"/><line class=\"ln\" x1=\"40\" y1=\"106.5\" x2=\"219.2\" y2=\"106.5\"/>" +
        "<line class=\"ln\" x1=\"219.2\" y1=\"106.5\" x2=\"219.2\" y2=\"144.3\"/><line class=\"ac\" x1=\"40\" y1=\"12\" x2=\"219.2\" y2=\"144.3\"/>" +
        "<path class=\"thin\" d=\"M40 99.5 L47 99.5 L47 106.5\"/><path class=\"thin\" d=\"M212.2 106.5 L212.2 113.5 L219.2 113.5\"/>" +
        "<circle class=\"dt\" cx=\"40\" cy=\"12\" r=\"3\"/><circle class=\"dt\" cx=\"40\" cy=\"106.5\" r=\"3\"/><circle class=\"dt\" cx=\"168\" cy=\"106.5\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"219.2\" cy=\"106.5\" r=\"3\"/><circle class=\"dt\" cx=\"219.2\" cy=\"144.3\" r=\"3\"/><text x=\"28\" y=\"29\" text-anchor=\"middle\">T</text>" +
        "<text x=\"29\" y=\"122.5\" text-anchor=\"middle\">A</text><text x=\"159\" y=\"124.5\" text-anchor=\"middle\">C</text>" +
        "<text x=\"232.2\" y=\"100.5\" text-anchor=\"middle\">D</text><text x=\"231.2\" y=\"153.3\" text-anchor=\"middle\">E</text>" +
        "<text class=\"acc\" x=\"27\" y=\"67\" text-anchor=\"middle\">w</text><text x=\"100\" y=\"124.5\" text-anchor=\"middle\">40 m</text>" +
        "<text x=\"195.6\" y=\"100.5\" text-anchor=\"middle\">16 m</text><text x=\"241.2\" y=\"130.4\" text-anchor=\"middle\">18 m</text>" +
        "<text class=\"sm\" x=\"272\" y=\"34\" text-anchor=\"middle\">river</text></svg><figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">To find the width of a river, Kim picks a tree <strong>T</strong> on the far bank and a point <strong>A</strong> on the near bank straight across from it, so TA ⊥ AD. She walks 40 m along the straight bank to <strong>C</strong> and 16 m more to <strong>D</strong>. Then she walks straight away from the river, with DE ⊥ AD, until <strong>E</strong>, C and T line up. DE = 18 m.</p>",
      claims: [
        {
          id: "why",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Why is △TAC similar to △EDC?",
          choices: [
            { letter: "A", text: "AA: right angles at A and D, vertical angles at C" },
            { letter: "B", text: "SAS∼: AC/DC = 40/16, with the right angles" },
            { letter: "C", text: "SSS∼: all three sides of each are known" },
            { letter: "D", text: "AA: ∠T ≅ ∠D, since both are right angles" }
          ],
          correct: "A"
        },
        {
          id: "width",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How wide is the river (w = TA)?",
          choices: [
            { letter: "A", text: "7.2 m" },
            { letter: "B", text: "42 m" },
            { letter: "C", text: "45 m" },
            { letter: "D", text: "63 m" }
          ],
          correct: "C"
        },
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for Kim's two triangles is correct?",
          choices: [
            { letter: "A", text: "△TAC ∼ △DEC" },
            { letter: "B", text: "△TAC ∼ △EDC" },
            { letter: "C", text: "△ATC ∼ △EDC" },
            { letter: "D", text: "△TCA ∼ △EDC" }
          ],
          correct: "B"
        },
        {
          id: "equation",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Which equation can Kim solve for the width w?",
          choices: [
            { letter: "A", text: "w/16 = 18/40" },
            { letter: "B", text: "w/56 = 18/16" },
            { letter: "C", text: "w/40 = 16/18" },
            { letter: "D", text: "w/40 = 18/16" }
          ],
          correct: "D"
        },
        {
          id: "report",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "At another spot, Ben's team walks AC = 28 m and CD = 8 m, finds DE = 12 m, and reports a width of 40 m. Is the report right? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "No; 40/12 ≠ 28/8" },
            { letter: "B", text: "Yes; 40/28 = 12/8" },
            { letter: "C", text: "Yes; 40 − 12 = 28 + 8" },
            { letter: "D", text: "No; the river must be 45 m wide" }
          ],
          correct: "A"
        },
        {
          id: "short",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "Here the river is 45 m wide and AC = 40 m. Kim can walk only 9 m back from the bank (DE = 9 m). How far from C must D be?",
          choices: [
            { letter: "A", text: "about 10.1 m" },
            { letter: "B", text: "16 m" },
            { letter: "C", text: "8 m" },
            { letter: "D", text: "31 m" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-tr3-sky-glide-path",
      family: "GEO",
      mode: "sky",
      title: "The Airport Approach",
      kind: "Triangles · G.TR.3",
      blurb: "A plane's straight glide path passes over a light tower.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\">" +
        "<svg viewBox=\"0 0 320 165\" role=\"img\" aria-label=\"A straight glide path from P down to T on the runway; P is straight above G; a light tower ML stands under point Q of the path; PG 150 m, GT 3,000 m, MT 900 m and ML 30 m; right angles at G and M\">" +
        "<line class=\"thin\" x1=\"6\" y1=\"136\" x2=\"314\" y2=\"136\"/><rect class=\"sh2\" x=\"272\" y=\"134\" width=\"44\" height=\"4\"/>" +
        "<line class=\"ln\" x1=\"30\" y1=\"7\" x2=\"300\" y2=\"136\"/><line class=\"thin dash\" x1=\"30\" y1=\"7\" x2=\"30\" y2=\"136\"/>" +
        "<line class=\"thin dash\" x1=\"219\" y1=\"110.2\" x2=\"219\" y2=\"97.3\"/><line class=\"ac\" x1=\"219\" y1=\"136\" x2=\"219\" y2=\"110.2\"/>" +
        "<path class=\"thin\" d=\"M30 129 L37 129 L37 136\"/><path class=\"thin\" d=\"M219 130 L225 130 L225 136\"/><circle class=\"dt\" cx=\"30\" cy=\"7\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"30\" cy=\"136\" r=\"3\"/><circle class=\"dt\" cx=\"300\" cy=\"136\" r=\"3\"/><circle class=\"dt\" cx=\"219\" cy=\"136\" r=\"3\"/>" +
        "<circle class=\"dt\" cx=\"219\" cy=\"97.3\" r=\"3\"/><circle class=\"dt\" cx=\"219\" cy=\"110.2\" r=\"3\"/><text x=\"16\" y=\"16\" text-anchor=\"middle\">P</text>" +
        "<text x=\"30\" y=\"155\" text-anchor=\"middle\">G</text><text x=\"306\" y=\"155\" text-anchor=\"middle\">T</text>" +
        "<text x=\"219\" y=\"155\" text-anchor=\"middle\">M</text><text x=\"227\" y=\"89.3\" text-anchor=\"middle\">Q</text>" +
        "<text x=\"207\" y=\"117.2\" text-anchor=\"middle\">L</text><text x=\"62\" y=\"85\" text-anchor=\"middle\">150 m</text>" +
        "<text x=\"260.5\" y=\"155\" text-anchor=\"middle\">900 m</text><text class=\"sm\" x=\"234\" y=\"128\" text-anchor=\"middle\">30 m</text>" +
        "<text x=\"150\" y=\"129\" text-anchor=\"middle\">3,000 m</text></svg><figcaption>Not drawn to scale</figcaption></figure>" +
        "<p class=\"geo-given\">A plane lands along a straight glide path that ends at <strong>T</strong> on the level runway. At <strong>P</strong> the plane is 150 m above <strong>G</strong>, and GT = 3,000 m. A light tower <strong>ML</strong>, 30 m tall, stands 900 m from T, straight under the point <strong>Q</strong> on the path. PG and QM are vertical.</p>",
      claims: [
        {
          id: "statement",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Which similarity statement for the two right triangles with vertex T is correct?",
          choices: [
            { letter: "A", text: "△QMT ∼ △GPT" },
            { letter: "B", text: "△QMT ∼ △PGT" },
            { letter: "C", text: "△MQT ∼ △PGT" },
            { letter: "D", text: "△QTM ∼ △PGT" }
          ],
          correct: "B"
        },
        {
          id: "clear",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How far above the top of the light tower does the glide path pass?",
          choices: [
            { letter: "A", text: "45 m" },
            { letter: "B", text: "120 m" },
            { letter: "C", text: "470 m" },
            { letter: "D", text: "15 m" }
          ],
          correct: "D"
        },
        {
          id: "ninety",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "How far from T is the plane when it is 90 m above the ground?",
          choices: [
            { letter: "A", text: "1,800 m" },
            { letter: "B", text: "5,000 m" },
            { letter: "C", text: "2,940 m" },
            { letter: "D", text: "4.5 m" }
          ],
          correct: "A"
        },
        {
          id: "second",
          sol: "G.TR.3",
          sub: "G.TR.3.2",
          stem: "A second plane reports it is 200 m up at 4,200 m from T. Is it on the same glide path? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "Yes; 200/150 = 4,200/3,000" },
            { letter: "B", text: "Yes; 4,200/200 = 3,000/150" },
            { letter: "C", text: "No; 200/4,200 ≠ 150/3,000" },
            { letter: "D", text: "No; a glide path ends 3,000 m out" }
          ],
          correct: "C"
        },
        {
          id: "scale",
          sol: "G.TR.3",
          sub: "G.TR.3.3",
          stem: "What is the scale factor from △TMQ to △TGP?",
          choices: [
            { letter: "A", text: "3/10" },
            { letter: "B", text: "10/3" },
            { letter: "C", text: "2,100" },
            { letter: "D", text: "100/9" }
          ],
          correct: "B"
        },
        {
          id: "criterion",
          sol: "G.TR.3",
          sub: "G.TR.3.1",
          stem: "Another plane is 120 m above the ground at 2,400 m from T. Using these lengths, PG, GT and the right angles, which criterion shows that its right triangle with T is similar to △PGT?",
          choices: [
            { letter: "A", text: "AA" },
            { letter: "B", text: "SSS∼" },
            { letter: "C", text: "SAS" },
            { letter: "D", text: "SAS∼" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
