/* SOL Labyrinth — Geometry game (family GEO), circles: G.PC.3 (Virginia 2023 Geometry SOL), modes maze (a school building
   and its grounds) and raid (Eagle Swoop: sports and games). Original items only. Every number and every figure
   coordinate was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-pc3-maze-bus-loop",
      family: "GEO",
      mode: "maze",
      title: "The Bus Loop",
      kind: "Circles · G.PC.3",
      blurb: "Buses curve around a round grass island.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A circular grass island with center O and radius 45 feet. Bus stops A and B on the curb form central angle AOB of 80 degrees, and the shaded sector AOB has a gold arc AB. Chords join a bench at C on the curb to A and B. The exit road DE touches the circle at D, where it meets radius OD at a right angle\"><path class=\"sh\" d=\"M140 84 L179.9 36.5 A62 62 0 0 0 100.1 36.5 Z\"/><circle class=\"ln\" cx=\"140\" cy=\"84\" r=\"62\"/><path class=\"ac\" d=\"M179.9 36.5 A62 62 0 0 0 100.1 36.5\"/><line class=\"thin\" x1=\"140\" y1=\"84\" x2=\"100.1\" y2=\"36.5\"/><line class=\"thin\" x1=\"140\" y1=\"84\" x2=\"179.9\" y2=\"36.5\"/><line class=\"thin\" x1=\"140\" y1=\"146\" x2=\"100.1\" y2=\"36.5\"/><line class=\"thin\" x1=\"140\" y1=\"146\" x2=\"179.9\" y2=\"36.5\"/><line class=\"thin dash\" x1=\"140\" y1=\"84\" x2=\"202\" y2=\"84\"/><line class=\"ln\" x1=\"202\" y1=\"26\" x2=\"202\" y2=\"136\"/><path class=\"thin\" d=\"M194 84 L194 92 L202 92\"/><circle class=\"dt\" cx=\"140\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"100.1\" cy=\"36.5\" r=\"3\"/><circle class=\"dt\" cx=\"179.9\" cy=\"36.5\" r=\"3\"/><circle class=\"dt\" cx=\"140\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"202\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"202\" cy=\"136\" r=\"3\"/><text x=\"91.8\" y=\"31.5\" text-anchor=\"middle\">A</text><text x=\"188.2\" y=\"31.5\" text-anchor=\"middle\">B</text><text x=\"140\" y=\"165\" text-anchor=\"middle\">C</text><text x=\"214\" y=\"80\" text-anchor=\"middle\">D</text><text x=\"214\" y=\"141\" text-anchor=\"middle\">E</text><text x=\"128\" y=\"97\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"140\" y=\"64\" text-anchor=\"middle\">80°</text><text class=\"sm\" x=\"183\" y=\"99\" text-anchor=\"middle\">45 ft</text><text class=\"sm\" x=\"246\" y=\"118\" text-anchor=\"middle\">exit road</text></svg></figure><p class=\"geo-given\">A bus loop curves around a circular grass island with center <strong>O</strong> and radius 45 ft. Bus stops <strong>A</strong> and <strong>B</strong> are on the curb, and m∠AOB = 80°. A bench sits at <strong>C</strong> on the curb. The exit road <strong>DE</strong> touches the curb only at <strong>D</strong>.</p>",
      claims: [
        {
          id: "bench",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "From the bench at C, what is m∠ACB, the angle between the lines to stops A and B?",
          choices: [
            { letter: "A", text: "80°" },
            { letter: "B", text: "40°" },
            { letter: "C", text: "160°" },
            { letter: "D", text: "100°" }
          ],
          correct: "B"
        },
        {
          id: "tangent",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "The exit road DE is tangent to the curb at D. Which statement about radius OD and road DE must be true?",
          choices: [
            { letter: "A", text: "OD ⊥ DE" },
            { letter: "B", text: "OD ∥ DE" },
            { letter: "C", text: "OD = DE" },
            { letter: "D", text: "DE bisects OD" }
          ],
          correct: "A"
        },
        {
          id: "curb",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is the curb from stop A to stop B along minor arc AB? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "10π ft" },
            { letter: "B", text: "40π ft" },
            { letter: "C", text: "20π ft" },
            { letter: "D", text: "450π ft" }
          ],
          correct: "C"
        },
        {
          id: "flowers",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "The shaded sector AOB is planted with flowers. To the nearest square foot, what is its area?",
          choices: [
            { letter: "A", text: "707 ft²" },
            { letter: "B", text: "5,655 ft²" },
            { letter: "C", text: "63 ft²" },
            { letter: "D", text: "1,414 ft²" }
          ],
          correct: "D"
        },
        {
          id: "paint",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Painting the curb costs $2 per foot. To the nearest dollar, how much does it cost to paint the curb all the way around the island?",
          choices: [
            { letter: "A", text: "$565" },
            { letter: "B", text: "$283" },
            { letter: "C", text: "$1,131" },
            { letter: "D", text: "$12,723" }
          ],
          correct: "A"
        },
        {
          id: "radius",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "At another school, a 90° arc of the curb around a circular island is 30π ft long. What is the radius of that island?",
          choices: [
            { letter: "A", text: "120 ft" },
            { letter: "B", text: "60 ft" },
            { letter: "C", text: "15 ft" },
            { letter: "D", text: "about 11.0 ft" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-maze-library-window",
      family: "GEO",
      mode: "maze",
      title: "The Library Window",
      kind: "Circles · G.PC.3",
      blurb: "Two bars cross inside a round window.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A round library window with two straight bars, chords AC and BD, crossing at E. AE is 9 inches, EC is 8 inches and BE is 6 inches; the gold arc marks angle AEB, 76 degrees\"><circle class=\"ln\" cx=\"160\" cy=\"84\" r=\"60\"/><line class=\"ln\" x1=\"107.4\" y1=\"55.2\" x2=\"218.5\" y2=\"70.8\"/><line class=\"ln\" x1=\"162.1\" y1=\"24\" x2=\"174.5\" y2=\"142.2\"/><path class=\"ac\" d=\"M164.8 49.5 A14 14 0 0 0 152.4 61.5\"/><circle class=\"dt\" cx=\"107.4\" cy=\"55.2\" r=\"3\"/><circle class=\"dt\" cx=\"162.1\" cy=\"24\" r=\"3\"/><circle class=\"dt\" cx=\"218.5\" cy=\"70.8\" r=\"3\"/><circle class=\"dt\" cx=\"174.5\" cy=\"142.2\" r=\"3\"/><circle class=\"dt\" cx=\"166.2\" cy=\"63.4\" r=\"3\"/><text x=\"96\" y=\"53.9\" text-anchor=\"middle\">A</text><text x=\"162.5\" y=\"16\" text-anchor=\"middle\">B</text><text x=\"231.2\" y=\"72.9\" text-anchor=\"middle\">C</text><text x=\"177.6\" y=\"159.8\" text-anchor=\"middle\">D</text><text x=\"155.4\" y=\"78.9\" text-anchor=\"middle\">E</text><text x=\"135.3\" y=\"75.2\" text-anchor=\"middle\">9</text><text x=\"190.8\" y=\"83\" text-anchor=\"middle\">8</text><text x=\"174.1\" y=\"47.7\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"145.4\" y=\"45.9\" text-anchor=\"middle\">76°</text></svg></figure><p class=\"geo-given\">A round library window has two straight bars, <strong>AC</strong> and <strong>BD</strong>, that cross at <strong>E</strong>. AE = 9 in, EC = 8 in, BE = 6 in, and m∠AEB = 76°.</p>",
      claims: [
        {
          id: "ed",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is ED, the rest of bar BD?",
          choices: [
            { letter: "A", text: "about 5.3 in" },
            { letter: "B", text: "11 in" },
            { letter: "C", text: "6.75 in" },
            { letter: "D", text: "12 in" }
          ],
          correct: "D"
        },
        {
          id: "equation",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Which equation is true for the pieces of the two bars?",
          choices: [
            { letter: "A", text: "AE · BE = EC · ED" },
            { letter: "B", text: "AE + EC = BE + ED" },
            { letter: "C", text: "AE · EC = BE · ED" },
            { letter: "D", text: "AE/EC = BE/ED" }
          ],
          correct: "C"
        },
        {
          id: "arcs",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is the sum of the measures of arc AB and arc CD, the arcs cut off by ∠AEB and its vertical angle?",
          choices: [
            { letter: "A", text: "152°" },
            { letter: "B", text: "38°" },
            { letter: "C", text: "76°" },
            { letter: "D", text: "104°" }
          ],
          correct: "A"
        },
        {
          id: "newbar",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "A worker must replace bar BD with a new bar of the same length. How long must the new bar be?",
          choices: [
            { letter: "A", text: "12 in" },
            { letter: "B", text: "18 in" },
            { letter: "C", text: "14 in" },
            { letter: "D", text: "17 in" }
          ],
          correct: "B"
        },
        {
          id: "other",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "In a different round window, two bars cross. One angle they form cuts off a 70° arc, and its vertical angle cuts off a 110° arc. What is the measure of that angle?",
          choices: [
            { letter: "A", text: "180°" },
            { letter: "B", text: "20°" },
            { letter: "C", text: "90°" },
            { letter: "D", text: "40°" }
          ],
          correct: "C"
        },
        {
          id: "error",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Ray finds ED by writing 9 · 6 = 8 · ED. What is his mistake?",
          choices: [
            { letter: "A", text: "He must add the pieces of each bar: 9 + 8 = 6 + ED." },
            { letter: "B", text: "He must divide the pieces: 9 ÷ 6 = 8 ÷ ED." },
            { letter: "C", text: "He made no mistake, so ED = 6.75 in." },
            { letter: "D", text: "He must multiply the pieces of each bar: 9 · 8 = 6 · ED." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc3-maze-hallway-clock",
      family: "GEO",
      mode: "maze",
      title: "The Hallway Clock",
      kind: "Circles · G.PC.3",
      blurb: "Chords join four points on a clock face.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A round hallway clock with center O and 12 equally spaced hour marks. Points A, B, C and D on the edge at the 12, the 3, the 8 and the 10 are joined by chords to form quadrilateral ABCD; dashed radii go to B and C, and the gold arc marks angle DAB\"><circle class=\"ln\" cx=\"160\" cy=\"84\" r=\"62\"/><line class=\"thin\" x1=\"160\" y1=\"29\" x2=\"160\" y2=\"22\"/><line class=\"thin\" x1=\"187.5\" y1=\"36.4\" x2=\"191\" y2=\"30.3\"/><line class=\"thin\" x1=\"207.6\" y1=\"56.5\" x2=\"213.7\" y2=\"53\"/><line class=\"thin\" x1=\"215\" y1=\"84\" x2=\"222\" y2=\"84\"/><line class=\"thin\" x1=\"207.6\" y1=\"111.5\" x2=\"213.7\" y2=\"115\"/><line class=\"thin\" x1=\"187.5\" y1=\"131.6\" x2=\"191\" y2=\"137.7\"/><line class=\"thin\" x1=\"160\" y1=\"139\" x2=\"160\" y2=\"146\"/><line class=\"thin\" x1=\"132.5\" y1=\"131.6\" x2=\"129\" y2=\"137.7\"/><line class=\"thin\" x1=\"112.4\" y1=\"111.5\" x2=\"106.3\" y2=\"115\"/><line class=\"thin\" x1=\"105\" y1=\"84\" x2=\"98\" y2=\"84\"/><line class=\"thin\" x1=\"112.4\" y1=\"56.5\" x2=\"106.3\" y2=\"53\"/><line class=\"thin\" x1=\"132.5\" y1=\"36.4\" x2=\"129\" y2=\"30.3\"/><polygon class=\"ln\" points=\"160,22 222,84 106.3,115 106.3,53\"/><line class=\"thin dash\" x1=\"160\" y1=\"84\" x2=\"222\" y2=\"84\"/><line class=\"thin dash\" x1=\"160\" y1=\"84\" x2=\"106.3\" y2=\"115\"/><path class=\"ac\" d=\"M148.7 28.5 A13 13 0 0 0 169.2 31.2\"/><circle class=\"dt\" cx=\"160\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"22\" r=\"3\"/><circle class=\"dt\" cx=\"222\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"106.3\" cy=\"115\" r=\"3\"/><circle class=\"dt\" cx=\"106.3\" cy=\"53\" r=\"3\"/><text x=\"160\" y=\"14\" text-anchor=\"middle\">A</text><text x=\"235\" y=\"89\" text-anchor=\"middle\">B</text><text x=\"95\" y=\"126.5\" text-anchor=\"middle\">C</text><text x=\"95\" y=\"51.5\" text-anchor=\"middle\">D</text><text x=\"154\" y=\"77\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"268\" y=\"36\" text-anchor=\"middle\">12 marks,</text><text class=\"sm\" x=\"268\" y=\"50\" text-anchor=\"middle\">equally spaced</text></svg></figure><p class=\"geo-given\">A hallway clock has center <strong>O</strong>, and its minute hand is 9 in long, reaching the edge. Points <strong>A</strong>, <strong>B</strong>, <strong>C</strong> and <strong>D</strong> are on the edge at the 12, the 3, the 8 and the 10. Chords join them to form quadrilateral <strong>ABCD</strong>.</p>",
      claims: [
        {
          id: "central",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠BOC, the central angle from the 3 to the 8?",
          choices: [
            { letter: "A", text: "75°" },
            { letter: "B", text: "210°" },
            { letter: "C", text: "150°" },
            { letter: "D", text: "180°" }
          ],
          correct: "C"
        },
        {
          id: "angle",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠DAB, marked in gold?",
          choices: [
            { letter: "A", text: "105°" },
            { letter: "B", text: "210°" },
            { letter: "C", text: "75°" },
            { letter: "D", text: "45°" }
          ],
          correct: "A"
        },
        {
          id: "quad",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which statement about quadrilateral ABCD must be true?",
          choices: [
            { letter: "A", text: "∠DAB and ∠BCD are congruent." },
            { letter: "B", text: "∠DAB and ∠BCD are supplementary." },
            { letter: "C", text: "∠DAB and ∠ABC are supplementary." },
            { letter: "D", text: "m∠ABC equals the measure of arc ADC." }
          ],
          correct: "B"
        },
        {
          id: "minute",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How far does the tip of the minute hand travel in 25 minutes? Round to the nearest tenth of an inch.",
          choices: [
            { letter: "A", text: "23.6 in" },
            { letter: "B", text: "11.8 in" },
            { letter: "C", text: "47.1 in" },
            { letter: "D", text: "106.0 in" }
          ],
          correct: "A"
        },
        {
          id: "sweep",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "From 12:00 to 12:20, the minute hand sweeps a sector of the clock face. To the nearest tenth of a square inch, what is the area of that sector?",
          choices: [
            { letter: "A", text: "18.8 in²" },
            { letter: "B", text: "339.3 in²" },
            { letter: "C", text: "254.5 in²" },
            { letter: "D", text: "84.8 in²" }
          ],
          correct: "D"
        },
        {
          id: "hour",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "The hour hand is 6 in long. How far does its tip travel from 8:00 to 11:00? Round to the nearest tenth of an inch.",
          choices: [
            { letter: "A", text: "4.7 in" },
            { letter: "B", text: "14.1 in" },
            { letter: "C", text: "9.4 in" },
            { letter: "D", text: "28.3 in" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc3-maze-courtyard-camera",
      family: "GEO",
      mode: "maze",
      title: "The Courtyard Camera",
      kind: "Circles · G.PC.3",
      blurb: "A camera's sight lines just touch a round fountain.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A round fountain, circle O with radius 7 meters, and a camera at P outside it. Sight lines PA (gold) and PB are tangent to the circle at A and B, with right angles marked between each tangent and its radius. A path from P passes through C, the center O, and D\"><circle class=\"ln\" cx=\"86\" cy=\"82\" r=\"56\"/><line class=\"ac\" x1=\"286\" y1=\"82\" x2=\"101.7\" y2=\"28.2\"/><line class=\"ln\" x1=\"286\" y1=\"82\" x2=\"101.7\" y2=\"135.8\"/><line class=\"ln\" x1=\"286\" y1=\"82\" x2=\"30\" y2=\"82\"/><line class=\"thin\" x1=\"86\" y1=\"82\" x2=\"101.7\" y2=\"28.2\"/><line class=\"thin\" x1=\"86\" y1=\"82\" x2=\"101.7\" y2=\"135.8\"/><path class=\"thin\" d=\"M99.7 35 L106.4 36.9 L108.4 30.2\"/><path class=\"thin\" d=\"M99.7 129 L106.4 127.1 L108.4 133.8\"/><circle class=\"dt\" cx=\"86\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"101.7\" cy=\"28.2\" r=\"3\"/><circle class=\"dt\" cx=\"101.7\" cy=\"135.8\" r=\"3\"/><circle class=\"dt\" cx=\"142\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"30\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"286\" cy=\"82\" r=\"3\"/><text x=\"105.3\" y=\"20.8\" text-anchor=\"middle\">A</text><text x=\"105.3\" y=\"153.2\" text-anchor=\"middle\">B</text><text x=\"152\" y=\"76\" text-anchor=\"middle\">C</text><text x=\"18\" y=\"87\" text-anchor=\"middle\">D</text><text x=\"299\" y=\"87\" text-anchor=\"middle\">P</text><text x=\"84\" y=\"102\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"78.8\" y=\"59.1\" text-anchor=\"middle\">7 m</text><text class=\"sm\" x=\"280\" y=\"68\" text-anchor=\"middle\">camera</text></svg></figure><p class=\"geo-given\">A security camera at <strong>P</strong> watches a round fountain with center <strong>O</strong> and radius 7 m. The camera is 25 m from <strong>O</strong>. Its sight lines <strong>PA</strong> and <strong>PB</strong> are tangent to the fountain at <strong>A</strong> and <strong>B</strong>. A path runs from <strong>P</strong> straight through <strong>O</strong>, meeting the edge at <strong>C</strong> and <strong>D</strong>.</p>",
      claims: [
        {
          id: "pa",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is sight line PA?",
          choices: [
            { letter: "A", text: "18 m" },
            { letter: "B", text: "32 m" },
            { letter: "C", text: "about 26.0 m" },
            { letter: "D", text: "24 m" }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Why is PB the same length as PA?",
          choices: [
            { letter: "A", text: "PA and PB are both radii of circle O." },
            { letter: "B", text: "Tangent segments from one outside point are congruent." },
            { letter: "C", text: "△PAB is equilateral, so its sides are equal." },
            { letter: "D", text: "All segments from P to the circle are congruent." }
          ],
          correct: "B"
        },
        {
          id: "pd",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Use PA = 24 m and PC = 18 m. How long is PD, from the camera to the far side of the fountain?",
          choices: [
            { letter: "A", text: "32 m" },
            { letter: "B", text: "42 m" },
            { letter: "C", text: "13.5 m" },
            { letter: "D", text: "30 m" }
          ],
          correct: "A"
        },
        {
          id: "angle",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "To the nearest degree, what is m∠APB, the angle between the camera's two sight lines?",
          choices: [
            { letter: "A", text: "16°" },
            { letter: "B", text: "31°" },
            { letter: "C", text: "33°" },
            { letter: "D", text: "147°" }
          ],
          correct: "C"
        },
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Use m∠APB ≈ 32.5°. What is the measure of minor arc AB?",
          choices: [
            { letter: "A", text: "65°" },
            { letter: "B", text: "212.5°" },
            { letter: "C", text: "295°" },
            { letter: "D", text: "147.5°" }
          ],
          correct: "D"
        },
        {
          id: "hedge",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "A hedge is planted along minor arc AB, the part of the fountain's edge the camera can see. Use m(arc AB) ≈ 147.5°. To the nearest tenth of a meter, how long is the hedge?",
          choices: [
            { letter: "A", text: "9.0 m" },
            { letter: "B", text: "18.0 m" },
            { letter: "C", text: "26.0 m" },
            { letter: "D", text: "63.1 m" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-raid-game-spinner",
      family: "GEO",
      mode: "raid",
      title: "The Game Spinner",
      kind: "Circles · G.PC.3",
      blurb: "Four colored sectors on a board-game spinner.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A game spinner, circle O with radius 6 centimeters, split by radii OA, OB, OC and OD into sectors: blue AOB 90 degrees (shaded, with gold arc AB), green BOC 75 degrees, yellow COD 60 degrees and red DOA 135 degrees. Point E on the edge of the red sector is joined to A and B\"><path class=\"sh2\" d=\"M118 86 L180 86 A62 62 0 0 0 118 24 Z\"/><circle class=\"ln\" cx=\"118\" cy=\"86\" r=\"62\"/><path class=\"ac\" d=\"M180 86 A62 62 0 0 0 118 24\"/><line class=\"ln\" x1=\"118\" y1=\"86\" x2=\"118\" y2=\"24\"/><line class=\"ln\" x1=\"118\" y1=\"86\" x2=\"180\" y2=\"86\"/><line class=\"ln\" x1=\"118\" y1=\"86\" x2=\"134\" y2=\"145.9\"/><line class=\"ln\" x1=\"118\" y1=\"86\" x2=\"74.2\" y2=\"129.8\"/><line class=\"thin dash\" x1=\"59.7\" y1=\"64.8\" x2=\"118\" y2=\"24\"/><line class=\"thin dash\" x1=\"59.7\" y1=\"64.8\" x2=\"180\" y2=\"86\"/><circle class=\"dt\" cx=\"118\" cy=\"86\" r=\"3\"/><circle class=\"dt\" cx=\"118\" cy=\"24\" r=\"3\"/><circle class=\"dt\" cx=\"180\" cy=\"86\" r=\"3\"/><circle class=\"dt\" cx=\"134\" cy=\"145.9\" r=\"3\"/><circle class=\"dt\" cx=\"74.2\" cy=\"129.8\" r=\"3\"/><circle class=\"dt\" cx=\"59.7\" cy=\"64.8\" r=\"3\"/><text x=\"118\" y=\"16\" text-anchor=\"middle\">A</text><text x=\"193\" y=\"91\" text-anchor=\"middle\">B</text><text x=\"137.4\" y=\"163.4\" text-anchor=\"middle\">C</text><text x=\"65\" y=\"144\" text-anchor=\"middle\">D</text><text x=\"47.5\" y=\"65.3\" text-anchor=\"middle\">E</text><text x=\"105\" y=\"92\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"143.5\" y=\"64.5\" text-anchor=\"middle\">90°</text><text class=\"sm\" x=\"149.7\" y=\"114.4\" text-anchor=\"middle\">75°</text><text class=\"sm\" x=\"107.6\" y=\"128.6\" text-anchor=\"middle\">60°</text><text class=\"sm\" x=\"81.3\" y=\"99.8\" text-anchor=\"middle\">135°</text><text class=\"sm\" x=\"262\" y=\"44\" text-anchor=\"middle\">blue: AOB</text><text class=\"sm\" x=\"262\" y=\"64\" text-anchor=\"middle\">green: BOC</text><text class=\"sm\" x=\"262\" y=\"84\" text-anchor=\"middle\">yellow: COD</text><text class=\"sm\" x=\"262\" y=\"104\" text-anchor=\"middle\">red: DOA</text><text class=\"sm\" x=\"262\" y=\"130\" text-anchor=\"middle\">radius 6 cm</text></svg></figure><p class=\"geo-given\">A game spinner has center <strong>O</strong> and radius 6 cm. Its sectors are blue (<strong>AOB</strong>, 90°), green (<strong>BOC</strong>, 75°), yellow (<strong>COD</strong>, 60°) and red (<strong>DOA</strong>, 135°). Point <strong>E</strong> is on the edge of the red sector.</p>",
      claims: [
        {
          id: "blue",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "What is the length of arc AB, the edge of the blue sector? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "3π cm" },
            { letter: "B", text: "1.5π cm" },
            { letter: "C", text: "6π cm" },
            { letter: "D", text: "9π cm" }
          ],
          correct: "A"
        },
        {
          id: "green",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "What is the area of the green sector, to the nearest tenth of a square centimeter?",
          choices: [
            { letter: "A", text: "7.9 cm²" },
            { letter: "B", text: "94.2 cm²" },
            { letter: "C", text: "113.1 cm²" },
            { letter: "D", text: "23.6 cm²" }
          ],
          correct: "D"
        },
        {
          id: "inscribed",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠AEB?",
          choices: [
            { letter: "A", text: "90°" },
            { letter: "B", text: "45°" },
            { letter: "C", text: "22.5°" },
            { letter: "D", text: "135°" }
          ],
          correct: "B"
        },
        {
          id: "design",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "A designer wants a new sector with an area of 6π cm² on this spinner. What central angle should it have?",
          choices: [
            { letter: "A", text: "60°" },
            { letter: "B", text: "180°" },
            { letter: "C", text: "15°" },
            { letter: "D", text: "30°" }
          ],
          correct: "A"
        },
        {
          id: "bigger",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "A bigger spinner has a 120° arc that is 8π cm long. What is the radius of that spinner?",
          choices: [
            { letter: "A", text: "24 cm" },
            { letter: "B", text: "4 cm" },
            { letter: "C", text: "12 cm" },
            { letter: "D", text: "about 4.9 cm" }
          ],
          correct: "C"
        },
        {
          id: "paint",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "The red sector is painted. One milliliter of paint covers 10 cm². To the nearest tenth of a milliliter, how much paint is needed?",
          choices: [
            { letter: "A", text: "1.4 mL" },
            { letter: "B", text: "11.3 mL" },
            { letter: "C", text: "424.1 mL" },
            { letter: "D", text: "4.2 mL" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc3-raid-track-turn",
      family: "GEO",
      mode: "raid",
      title: "The Track Turn",
      kind: "Circles · G.PC.3",
      blurb: "A runner on the curved end of a track.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"The curved end of a running track: a semicircle from A to B with center O and radius 36.5 meters, and straightaways leaving A and B at right angles to the radii. A runner at C on the curve, with central angle AOC of 70 degrees and gold arc AC; chords join C to A and to B\"><path class=\"ln\" d=\"M196 144 A60 60 0 0 0 196 24\"/><line class=\"ln\" x1=\"36\" y1=\"24\" x2=\"196\" y2=\"24\"/><line class=\"ln\" x1=\"36\" y1=\"144\" x2=\"196\" y2=\"144\"/><line class=\"thin dash\" x1=\"196\" y1=\"24\" x2=\"196\" y2=\"144\"/><line class=\"thin\" x1=\"196\" y1=\"84\" x2=\"252.4\" y2=\"63.5\"/><path class=\"ac\" d=\"M252.4 63.5 A60 60 0 0 0 196 24\"/><line class=\"thin\" x1=\"252.4\" y1=\"63.5\" x2=\"196\" y2=\"24\"/><line class=\"thin\" x1=\"252.4\" y1=\"63.5\" x2=\"196\" y2=\"144\"/><path class=\"thin\" d=\"M188 24 L188 32 L196 32\"/><path class=\"thin\" d=\"M188 144 L188 136 L196 136\"/><path class=\"thin\" d=\"M210.1 78.9 A15 15 0 0 0 196 69\"/><circle class=\"dt\" cx=\"196\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"196\" cy=\"24\" r=\"3\"/><circle class=\"dt\" cx=\"196\" cy=\"144\" r=\"3\"/><circle class=\"dt\" cx=\"252.4\" cy=\"63.5\" r=\"3\"/><text x=\"196\" y=\"16\" text-anchor=\"middle\">A</text><text x=\"196\" y=\"162\" text-anchor=\"middle\">B</text><text x=\"264.6\" y=\"64\" text-anchor=\"middle\">C</text><text x=\"184\" y=\"95\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"211.5\" y=\"65.9\" text-anchor=\"middle\">70°</text><text class=\"sm\" x=\"172\" y=\"122\" text-anchor=\"middle\">36.5 m</text><text class=\"sm\" x=\"96\" y=\"19\" text-anchor=\"middle\">straightaway</text><text class=\"sm\" x=\"96\" y=\"139\" text-anchor=\"middle\">straightaway</text></svg></figure><p class=\"geo-given\">The inside edge of a track's turn is a semicircle from <strong>A</strong> to <strong>B</strong> with center <strong>O</strong> and radius 36.5 m. The straightaways leave the turn at <strong>A</strong> and <strong>B</strong> and are tangent to it there. A runner is at <strong>C</strong> on the turn, and m∠AOC = 70°.</p>",
      claims: [
        {
          id: "semicircle",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠ACB, the angle at the runner between the lines to A and B?",
          choices: [
            { letter: "A", text: "180°" },
            { letter: "B", text: "70°" },
            { letter: "C", text: "90°" },
            { letter: "D", text: "35°" }
          ],
          correct: "C"
        },
        {
          id: "reason",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "The straightaway at A meets radius OA at a right angle. Which reason explains this?",
          choices: [
            { letter: "A", text: "AB is a diameter, so every angle at A is 90°." },
            { letter: "B", text: "A tangent is ⊥ to the radius at the point of tangency." },
            { letter: "C", text: "Tangent segments from one point are congruent." },
            { letter: "D", text: "An angle inscribed in a semicircle is a right angle." }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is the inside edge of the turn, from A to B along the curve? Round to the nearest tenth of a meter.",
          choices: [
            { letter: "A", text: "229.3 m" },
            { letter: "B", text: "57.3 m" },
            { letter: "C", text: "2,092.7 m" },
            { letter: "D", text: "114.7 m" }
          ],
          correct: "D"
        },
        {
          id: "abc",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠ABC?",
          choices: [
            { letter: "A", text: "35°" },
            { letter: "B", text: "70°" },
            { letter: "C", text: "55°" },
            { letter: "D", text: "140°" }
          ],
          correct: "A"
        },
        {
          id: "run",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How far does the runner go along the curve from A to C? Round to the nearest tenth of a meter.",
          choices: [
            { letter: "A", text: "22.3 m" },
            { letter: "B", text: "89.2 m" },
            { letter: "C", text: "44.6 m" },
            { letter: "D", text: "813.8 m" }
          ],
          correct: "C"
        },
        {
          id: "lane",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "The inside edge of lane 2 is also a semicircle with center O, but its radius is 1.22 m longer. How much longer is it than the semicircle from A to B? Round to the nearest hundredth of a meter.",
          choices: [
            { letter: "A", text: "1.22 m" },
            { letter: "B", text: "3.83 m" },
            { letter: "C", text: "7.67 m" },
            { letter: "D", text: "1.92 m" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-raid-softball-fence",
      family: "GEO",
      mode: "raid",
      title: "The Softball Fence",
      kind: "Circles · G.PC.3",
      blurb: "An outfield fence curved around home plate.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A softball field from above: sector AHB with center at home plate H, radius 200 feet and a right angle at H between foul lines HA and HB. F is the middle of the fence arc, a straight wall touches the arc only at F at right angles to HF, and dashed sight lines from F to A and B form the gold angle AFB\"><path class=\"sh2\" d=\"M160 146 L244.9 61.1 A120 120 0 0 0 75.1 61.1 Z\"/><line class=\"ln\" x1=\"114\" y1=\"26\" x2=\"206\" y2=\"26\"/><line class=\"thin dash\" x1=\"160\" y1=\"146\" x2=\"160\" y2=\"26\"/><line class=\"thin dash\" x1=\"160\" y1=\"26\" x2=\"75.1\" y2=\"61.1\"/><line class=\"thin dash\" x1=\"160\" y1=\"26\" x2=\"244.9\" y2=\"61.1\"/><path class=\"ac\" d=\"M148 31 A13 13 0 0 0 172 31\"/><path class=\"thin\" d=\"M166.4 139.6 L160 133.3 L153.6 139.6\"/><path class=\"thin\" d=\"M160 33 L167 33 L167 26\"/><circle class=\"dt\" cx=\"160\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"75.1\" cy=\"61.1\" r=\"3\"/><circle class=\"dt\" cx=\"244.9\" cy=\"61.1\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"26\" r=\"3\"/><text x=\"160\" y=\"165\" text-anchor=\"middle\">H</text><text x=\"66\" y=\"57\" text-anchor=\"middle\">A</text><text x=\"254\" y=\"57\" text-anchor=\"middle\">B</text><text x=\"146\" y=\"19\" text-anchor=\"middle\">F</text><text class=\"sm\" x=\"224.7\" y=\"109.3\" text-anchor=\"middle\">200 ft</text><text class=\"sm\" x=\"222\" y=\"21\" text-anchor=\"middle\">wall</text><text class=\"sm\" x=\"140\" y=\"100\" text-anchor=\"middle\">fair</text></svg></figure><p class=\"geo-given\">A softball outfield fence is an arc of a circle with center at home plate <strong>H</strong> and radius 200 ft. The foul lines <strong>HA</strong> and <strong>HB</strong> meet at a right angle, and foul poles stand at <strong>A</strong> and <strong>B</strong>. <strong>F</strong> is the middle of the fence. A straight wall touches the fence's arc only at <strong>F</strong>.</p>",
      claims: [
        {
          id: "fence",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is the fence, arc AFB, to the nearest foot?",
          choices: [
            { letter: "A", text: "157 ft" },
            { letter: "B", text: "314 ft" },
            { letter: "C", text: "628 ft" },
            { letter: "D", text: "31,416 ft" }
          ],
          correct: "B"
        },
        {
          id: "fair",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Fair territory is sector AHB. To the nearest square foot, what is its area?",
          choices: [
            { letter: "A", text: "314 ft²" },
            { letter: "B", text: "125,664 ft²" },
            { letter: "C", text: "62,832 ft²" },
            { letter: "D", text: "31,416 ft²" }
          ],
          correct: "D"
        },
        {
          id: "fielder",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "The center fielder stands at F. What is m∠AFB, the angle between her lines of sight to the foul poles?",
          choices: [
            { letter: "A", text: "135°" },
            { letter: "B", text: "45°" },
            { letter: "C", text: "90°" },
            { letter: "D", text: "270°" }
          ],
          correct: "A"
        },
        {
          id: "wall",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Point W is on the wall, 20 ft from F. To the nearest tenth of a foot, how far is W from home plate H?",
          choices: [
            { letter: "A", text: "220.0 ft" },
            { letter: "B", text: "201.0 ft" },
            { letter: "C", text: "199.0 ft" },
            { letter: "D", text: "180.0 ft" }
          ],
          correct: "B"
        },
        {
          id: "league",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Another field's fence is an arc with radius 250 ft and length 150π ft. What central angle does that fence span?",
          choices: [
            { letter: "A", text: "216°" },
            { letter: "B", text: "54°" },
            { letter: "C", text: "108°" },
            { letter: "D", text: "0.3°" }
          ],
          correct: "C"
        },
        {
          id: "track",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "A 4-ft-wide warning track runs just inside the fence from foul line to foul line. It is the part of sector AHB between 196 ft and 200 ft from H. To the nearest square foot, what is its area?",
          choices: [
            { letter: "A", text: "1,244 ft²" },
            { letter: "B", text: "4,976 ft²" },
            { letter: "C", text: "30,172 ft²" },
            { letter: "D", text: "13 ft²" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc3-raid-laser-shield",
      family: "GEO",
      mode: "raid",
      title: "The Laser Shield",
      kind: "Circles · G.PC.3",
      blurb: "Two laser beams cross a round force field.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A round force field in a video game and a hero at P outside it. Beam 1 from P enters the circle at A and leaves at B; beam 2 enters at C and leaves at D. PA is 6, AB is 10 and PC is 8 units; the gold arc marks the 28 degree angle at P. Thin chords join A to D and C to B\"><circle class=\"ln\" cx=\"192.4\" cy=\"80\" r=\"63.5\"/><line class=\"ln\" x1=\"56\" y1=\"106\" x2=\"251.6\" y2=\"57.3\"/><line class=\"ln\" x1=\"56\" y1=\"106\" x2=\"202.7\" y2=\"142.6\"/><line class=\"thin\" x1=\"129.4\" y1=\"87.8\" x2=\"202.7\" y2=\"142.6\"/><line class=\"thin\" x1=\"153.8\" y1=\"130.4\" x2=\"251.6\" y2=\"57.3\"/><path class=\"ac\" d=\"M77.3 111.4 A22 22 0 0 0 77.3 100.7\"/><circle class=\"dt\" cx=\"56\" cy=\"106\" r=\"3\"/><circle class=\"dt\" cx=\"129.4\" cy=\"87.8\" r=\"3\"/><circle class=\"dt\" cx=\"251.6\" cy=\"57.3\" r=\"3\"/><circle class=\"dt\" cx=\"153.8\" cy=\"130.4\" r=\"3\"/><circle class=\"dt\" cx=\"202.7\" cy=\"142.6\" r=\"3\"/><text x=\"52\" y=\"97\" text-anchor=\"middle\">P</text><text x=\"118.4\" y=\"80.8\" text-anchor=\"middle\">A</text><text x=\"264.7\" y=\"57.3\" text-anchor=\"middle\">B</text><text x=\"150.8\" y=\"150.4\" text-anchor=\"middle\">C</text><text x=\"205\" y=\"161.4\" text-anchor=\"middle\">D</text><text x=\"92.7\" y=\"88.9\" text-anchor=\"middle\">6</text><text x=\"104.9\" y=\"137.2\" text-anchor=\"middle\">8</text><text x=\"181.2\" y=\"66.4\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"92\" y=\"110\" text-anchor=\"middle\">28°</text></svg></figure><p class=\"geo-given\">In a video game, a hero at <strong>P</strong> fires two laser beams at a round force field. Beam 1 enters the field at <strong>A</strong> and leaves at <strong>B</strong>. Beam 2 enters at <strong>C</strong> and leaves at <strong>D</strong>. PA = 6 units, AB = 10 units, PC = 8 units, and m∠APC = 28°.</p>",
      claims: [
        {
          id: "cd",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is CD, the part of beam 2 inside the field?",
          choices: [
            { letter: "A", text: "12 units" },
            { letter: "B", text: "7.5 units" },
            { letter: "C", text: "4 units" },
            { letter: "D", text: "8 units" }
          ],
          correct: "C"
        },
        {
          id: "not",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which statement is NOT true?",
          choices: [
            { letter: "A", text: "m∠APC = ½(arc BD + arc AC)" },
            { letter: "B", text: "PA · PB = PC · PD" },
            { letter: "C", text: "PB = 16 units" },
            { letter: "D", text: "m∠APC = ½(arc BD − arc AC)" }
          ],
          correct: "A"
        },
        {
          id: "diff",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is the measure of arc BD minus the measure of arc AC?",
          choices: [
            { letter: "A", text: "14°" },
            { letter: "B", text: "28°" },
            { letter: "C", text: "152°" },
            { letter: "D", text: "56°" }
          ],
          correct: "D"
        },
        {
          id: "level",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "On another level, two beams from a point outside a round shield cut off a far arc of 130° and a near arc of 50°. What is the angle between the beams?",
          choices: [
            { letter: "A", text: "90°" },
            { letter: "B", text: "80°" },
            { letter: "C", text: "40°" },
            { letter: "D", text: "65°" }
          ],
          correct: "C"
        },
        {
          id: "tangent",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "From a new spot Q, one beam just touches the field at T. Another beam from Q enters the field 4 units from Q and leaves 12 units later. How long is QT?",
          choices: [
            { letter: "A", text: "about 6.9 units" },
            { letter: "B", text: "8 units" },
            { letter: "C", text: "16 units" },
            { letter: "D", text: "64 units" }
          ],
          correct: "B"
        },
        {
          id: "similar",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Triangles PAD and PCB are similar. Which proportion follows from this?",
          choices: [
            { letter: "A", text: "PA/PC = PB/PD" },
            { letter: "B", text: "PA/PC = AB/CD" },
            { letter: "C", text: "PA/PB = PC/PD" },
            { letter: "D", text: "PA/PC = PD/PB" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc3-raid-pool-ropes",
      family: "GEO",
      mode: "raid",
      title: "Lane Ropes in a Round Pool",
      kind: "Circles · G.PC.3",
      blurb: "Two crossing ropes and swimmers on the edge.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A round pool, circle O. Rope AC is a diameter through the center O; rope BD crosses it at E at a right angle. AE is 4 meters and EC is 9 meters. Dashed lines join swimmer B to swimmers A and C, and the gold arc marks angle ABC\"><circle class=\"ln\" cx=\"160\" cy=\"82\" r=\"61.1\"/><line class=\"ln\" x1=\"98.9\" y1=\"82\" x2=\"221.1\" y2=\"82\"/><line class=\"ln\" x1=\"136.5\" y1=\"25.6\" x2=\"136.5\" y2=\"138.4\"/><line class=\"thin dash\" x1=\"136.5\" y1=\"25.6\" x2=\"98.9\" y2=\"82\"/><line class=\"thin dash\" x1=\"136.5\" y1=\"25.6\" x2=\"221.1\" y2=\"82\"/><path class=\"thin\" d=\"M136.5 75 L143.5 75 L143.5 82\"/><path class=\"ac\" d=\"M129.8 35.6 A12 12 0 0 0 146.5 32.3\"/><circle class=\"dt\" cx=\"160\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"98.9\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"136.5\" cy=\"25.6\" r=\"3\"/><circle class=\"dt\" cx=\"221.1\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"136.5\" cy=\"138.4\" r=\"3\"/><circle class=\"dt\" cx=\"136.5\" cy=\"82\" r=\"3\"/><text x=\"79.9\" y=\"87\" text-anchor=\"middle\">A</text><text x=\"130.5\" y=\"15.6\" text-anchor=\"middle\">B</text><text x=\"240.1\" y=\"87\" text-anchor=\"middle\">C</text><text x=\"130.5\" y=\"159.4\" text-anchor=\"middle\">D</text><text x=\"126.5\" y=\"100\" text-anchor=\"middle\">E</text><text x=\"162\" y=\"101\" text-anchor=\"middle\">O</text><text x=\"117.7\" y=\"77\" text-anchor=\"middle\">4</text><text x=\"186.8\" y=\"77\" text-anchor=\"middle\">9</text></svg></figure><p class=\"geo-given\">A round pool has two lane ropes. Rope <strong>AC</strong> passes through the center <strong>O</strong>. Rope <strong>BD</strong> crosses it at <strong>E</strong>, and BD ⊥ AC. AE = 4 m and EC = 9 m. Swimmers rest at <strong>A</strong>, <strong>B</strong> and <strong>C</strong> on the pool's edge.</p>",
      claims: [
        {
          id: "be",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is BE?",
          choices: [
            { letter: "A", text: "6 m" },
            { letter: "B", text: "6.5 m" },
            { letter: "C", text: "18 m" },
            { letter: "D", text: "36 m" }
          ],
          correct: "A"
        },
        {
          id: "swim",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠ABC, and why?",
          choices: [
            { letter: "A", text: "180°, because it cuts off a semicircle" },
            { letter: "B", text: "45°, because BD bisects ∠ABC" },
            { letter: "C", text: "90°, because AC is a diameter" },
            { letter: "D", text: "60°, because △ABC is equilateral" }
          ],
          correct: "C"
        },
        {
          id: "radius",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "What is the radius of the pool?",
          choices: [
            { letter: "A", text: "13 m" },
            { letter: "B", text: "6 m" },
            { letter: "C", text: "4.5 m" },
            { letter: "D", text: "6.5 m" }
          ],
          correct: "D"
        },
        {
          id: "arcs",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is the sum of the measures of arc AB and arc CD?",
          choices: [
            { letter: "A", text: "90°" },
            { letter: "B", text: "45°" },
            { letter: "C", text: "180°" },
            { letter: "D", text: "360°" }
          ],
          correct: "C"
        },
        {
          id: "edge",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Use m∠BOC ≈ 112.6°. How far is it along the pool's edge from B to C (minor arc BC)? Round to the nearest tenth of a meter.",
          choices: [
            { letter: "A", text: "6.4 m" },
            { letter: "B", text: "12.8 m" },
            { letter: "C", text: "25.5 m" },
            { letter: "D", text: "41.5 m" }
          ],
          correct: "B"
        },
        {
          id: "cover",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "A cover is cut for the part of the pool between rope BD and the edge near A. Use m∠BOD ≈ 134.8° and OE = 2.5 m. To the nearest tenth of a square meter, what is the cover's area?",
          choices: [
            { letter: "A", text: "34.7 m²" },
            { letter: "B", text: "49.7 m²" },
            { letter: "C", text: "64.7 m²" },
            { letter: "D", text: "24.0 m²" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc3-raid-passing-drill",
      family: "GEO",
      mode: "raid",
      title: "The Passing Drill",
      kind: "Circles · G.PC.3",
      blurb: "Four volleyball players stand on a circle.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Four volleyball players A, B, C and D on a dashed circle, joined to form quadrilateral ABCD. Arc AB is 104 degrees, arc BC 68, arc CD 118 and arc DA 70. Passes AC and BD cross at E, and the gold arc marks angle AEB\"><circle class=\"thin dash\" cx=\"150\" cy=\"84\" r=\"64\"/><polygon class=\"ln\" points=\"126,24.7 213.4,75.1 182,139.4 86,86.2\"/><line class=\"thin\" x1=\"126\" y1=\"24.7\" x2=\"182\" y2=\"139.4\"/><line class=\"thin\" x1=\"213.4\" y1=\"75.1\" x2=\"86\" y2=\"86.2\"/><path class=\"ac\" d=\"M164.1 79.4 A11 11 0 0 0 148.4 70.5\"/><circle class=\"dt\" cx=\"126\" cy=\"24.7\" r=\"3\"/><circle class=\"dt\" cx=\"213.4\" cy=\"75.1\" r=\"3\"/><circle class=\"dt\" cx=\"182\" cy=\"139.4\" r=\"3\"/><circle class=\"dt\" cx=\"86\" cy=\"86.2\" r=\"3\"/><circle class=\"dt\" cx=\"153.2\" cy=\"80.4\" r=\"3\"/><text x=\"121.2\" y=\"17.6\" text-anchor=\"middle\">A</text><text x=\"226.3\" y=\"78.3\" text-anchor=\"middle\">B</text><text x=\"188.5\" y=\"155.7\" text-anchor=\"middle\">C</text><text x=\"73\" y=\"91.7\" text-anchor=\"middle\">D</text><text x=\"144.2\" y=\"100.4\" text-anchor=\"middle\">E</text><text class=\"sm\" x=\"189.5\" y=\"19.6\" text-anchor=\"middle\">104°</text><text class=\"sm\" x=\"221\" y=\"122.6\" text-anchor=\"middle\">68°</text><text class=\"sm\" x=\"111.7\" y=\"157.1\" text-anchor=\"middle\">118°</text><text class=\"sm\" x=\"83.7\" y=\"45\" text-anchor=\"middle\">70°</text></svg></figure><p class=\"geo-given\">Four volleyball players, <strong>A</strong>, <strong>B</strong>, <strong>C</strong> and <strong>D</strong>, stand on a circle with radius 5 m. The arcs between them are arc AB = 104°, arc BC = 68°, arc CD = 118° and arc DA = 70°. Passes from A to C and from B to D cross at <strong>E</strong>.</p>",
      claims: [
        {
          id: "dab",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠DAB, the angle at player A between B and D?",
          choices: [
            { letter: "A", text: "186°" },
            { letter: "B", text: "87°" },
            { letter: "C", text: "52°" },
            { letter: "D", text: "93°" }
          ],
          correct: "D"
        },
        {
          id: "aeb",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠AEB, where the two passes cross?",
          choices: [
            { letter: "A", text: "222°" },
            { letter: "B", text: "111°" },
            { letter: "C", text: "7°" },
            { letter: "D", text: "69°" }
          ],
          correct: "B"
        },
        {
          id: "jog",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How far is it from A to B along the circle? Round to the nearest tenth of a meter.",
          choices: [
            { letter: "A", text: "4.5 m" },
            { letter: "B", text: "18.2 m" },
            { letter: "C", text: "9.1 m" },
            { letter: "D", text: "22.7 m" }
          ],
          correct: "C"
        },
        {
          id: "supp",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which pair of angles must be supplementary?",
          choices: [
            { letter: "A", text: "∠ABC and ∠ADC" },
            { letter: "B", text: "∠DAB and ∠ABC" },
            { letter: "C", text: "∠AEB and ∠CED" },
            { letter: "D", text: "∠BAC and ∠BDC" }
          ],
          correct: "A"
        },
        {
          id: "newr",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "The coach wants arc AB to be exactly 10 m long, still measuring 104°. To the nearest tenth of a meter, what radius should the circle have?",
          choices: [
            { letter: "A", text: "11.0 m" },
            { letter: "B", text: "3.3 m" },
            { letter: "C", text: "1.6 m" },
            { letter: "D", text: "5.5 m" }
          ],
          correct: "D"
        },
        {
          id: "pass",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "To the nearest tenth of a meter, how long is the straight pass from A to C?",
          choices: [
            { letter: "A", text: "15.0 m" },
            { letter: "B", text: "10.0 m" },
            { letter: "C", text: "5.0 m" },
            { letter: "D", text: "1.4 m" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-raid-archery-target",
      family: "GEO",
      mode: "raid",
      title: "The Archery Target",
      kind: "Circles · G.PC.3",
      blurb: "Rings, a wedge and three arrows on the edge.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"An archery target: 5 concentric rings around center O, the outer edge a circle of radius 40 centimeters. The outer ring is shaded inside a 60 degree wedge with edges OA and OB. Arrows at A, B and C on the outer edge; gold chord AB and dashed chords CA and CB\"><path class=\"sh\" d=\"M159 23.4 A70 70 0 0 0 89 23.4 L96 35.5 A56 56 0 0 1 152 35.5 Z\"/><circle class=\"thin\" cx=\"124\" cy=\"84\" r=\"14\"/><circle class=\"thin\" cx=\"124\" cy=\"84\" r=\"28\"/><circle class=\"thin\" cx=\"124\" cy=\"84\" r=\"42\"/><circle class=\"thin\" cx=\"124\" cy=\"84\" r=\"56\"/><circle class=\"ln\" cx=\"124\" cy=\"84\" r=\"70\"/><line class=\"thin\" x1=\"124\" y1=\"84\" x2=\"89\" y2=\"23.4\"/><line class=\"thin\" x1=\"124\" y1=\"84\" x2=\"159\" y2=\"23.4\"/><line class=\"thin dash\" x1=\"83.8\" y1=\"141.3\" x2=\"89\" y2=\"23.4\"/><line class=\"thin dash\" x1=\"83.8\" y1=\"141.3\" x2=\"159\" y2=\"23.4\"/><line class=\"ac\" x1=\"89\" y1=\"23.4\" x2=\"159\" y2=\"23.4\"/><circle class=\"dt\" cx=\"124\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"89\" cy=\"23.4\" r=\"3\"/><circle class=\"dt\" cx=\"159\" cy=\"23.4\" r=\"3\"/><circle class=\"dt\" cx=\"83.8\" cy=\"141.3\" r=\"3\"/><text x=\"82.5\" y=\"17.1\" text-anchor=\"middle\">A</text><text x=\"165.5\" y=\"17.1\" text-anchor=\"middle\">B</text><text x=\"76.4\" y=\"157\" text-anchor=\"middle\">C</text><text x=\"112\" y=\"93\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"124\" y=\"55\" text-anchor=\"middle\">60°</text><text class=\"sm\" x=\"258\" y=\"56\" text-anchor=\"middle\">radius 40 cm</text><text class=\"sm\" x=\"258\" y=\"76\" text-anchor=\"middle\">5 rings,</text><text class=\"sm\" x=\"258\" y=\"92\" text-anchor=\"middle\">each 8 cm wide</text></svg></figure><p class=\"geo-given\">An archery target has center <strong>O</strong> and radius 40 cm. It has 5 rings, each 8 cm wide. The shaded part is the outer ring inside the 60° wedge <strong>AOB</strong>. Arrows hit the outer edge at <strong>A</strong>, <strong>B</strong> and <strong>C</strong>.</p>",
      claims: [
        {
          id: "shaded",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "To the nearest square centimeter, what is the area of the shaded part?",
          choices: [
            { letter: "A", text: "838 cm²" },
            { letter: "B", text: "34 cm²" },
            { letter: "C", text: "1,810 cm²" },
            { letter: "D", text: "302 cm²" }
          ],
          correct: "D"
        },
        {
          id: "edges",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "The shaded part has two curved edges. How much longer is the outer curved edge than the inner one? Round to the nearest tenth of a centimeter.",
          choices: [
            { letter: "A", text: "8.4 cm" },
            { letter: "B", text: "8.0 cm" },
            { letter: "C", text: "50.3 cm" },
            { letter: "D", text: "4.2 cm" }
          ],
          correct: "A"
        },
        {
          id: "chord",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "How far apart are the arrows at A and B, in a straight line?",
          choices: [
            { letter: "A", text: "about 41.9 cm" },
            { letter: "B", text: "20 cm" },
            { letter: "C", text: "40 cm" },
            { letter: "D", text: "80 cm" }
          ],
          correct: "C"
        },
        {
          id: "acb",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠ACB?",
          choices: [
            { letter: "A", text: "60°" },
            { letter: "B", text: "30°" },
            { letter: "C", text: "120°" },
            { letter: "D", text: "150°" }
          ],
          correct: "B"
        },
        {
          id: "wedge",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "A scoring wedge on another target has radius 30 cm, and its outer arc is 15 cm long. To the nearest degree, what is its central angle?",
          choices: [
            { letter: "A", text: "29°" },
            { letter: "B", text: "57°" },
            { letter: "C", text: "14°" },
            { letter: "D", text: "2°" }
          ],
          correct: "A"
        },
        {
          id: "share",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "What percent of the whole target face is shaded?",
          choices: [
            { letter: "A", text: "36%" },
            { letter: "B", text: "about 16.7%" },
            { letter: "C", text: "about 3.3%" },
            { letter: "D", text: "6%" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc3-raid-skate-bowl",
      family: "GEO",
      mode: "raid",
      title: "The Skate Bowl",
      kind: "Circles · G.PC.3",
      blurb: "A rail touches a round bowl; a skater crosses it.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A round skate bowl from above, circle O with radius 10.5 feet. A gold rail from P touches the circle only at T, at a right angle to radius OT. A skater's straight line from P crosses the edge at A and B, with PA 5 feet and AB 15 feet. A dashed segment from P to O crosses the edge at C, and chord TA is drawn\"><circle class=\"ln\" cx=\"190\" cy=\"84\" r=\"67.2\"/><line class=\"ac\" x1=\"97.2\" y1=\"84\" x2=\"141.3\" y2=\"37.7\"/><line class=\"ac\" x1=\"141.3\" y1=\"37.7\" x2=\"159.3\" y2=\"18.8\"/><line class=\"ln\" x1=\"97.2\" y1=\"84\" x2=\"207.5\" y2=\"148.9\"/><line class=\"thin dash\" x1=\"97.2\" y1=\"84\" x2=\"190\" y2=\"84\"/><line class=\"thin\" x1=\"190\" y1=\"84\" x2=\"141.3\" y2=\"37.7\"/><line class=\"thin\" x1=\"141.3\" y1=\"37.7\" x2=\"124.8\" y2=\"100.2\"/><path class=\"thin\" d=\"M146.4 42.5 L141.6 47.6 L136.5 42.7\"/><circle class=\"dt\" cx=\"97.2\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"141.3\" cy=\"37.7\" r=\"3\"/><circle class=\"dt\" cx=\"124.8\" cy=\"100.2\" r=\"3\"/><circle class=\"dt\" cx=\"207.5\" cy=\"148.9\" r=\"3\"/><circle class=\"dt\" cx=\"122.8\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"190\" cy=\"84\" r=\"3\"/><text x=\"85.2\" y=\"89\" text-anchor=\"middle\">P</text><text x=\"131.3\" y=\"31.7\" text-anchor=\"middle\">T</text><text x=\"121.8\" y=\"120.2\" text-anchor=\"middle\">A</text><text x=\"220.5\" y=\"156.9\" text-anchor=\"middle\">B</text><text x=\"134.8\" y=\"100\" text-anchor=\"middle\">C</text><text x=\"203\" y=\"92\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"107\" y=\"110.1\" text-anchor=\"middle\">5</text><text class=\"sm\" x=\"159.6\" y=\"139.8\" text-anchor=\"middle\">15</text><text class=\"sm\" x=\"174.6\" y=\"55.4\" text-anchor=\"middle\">10.5</text><text class=\"sm\" x=\"109.3\" y=\"47.7\" text-anchor=\"middle\">rail</text></svg></figure><p class=\"geo-given\">A round skate bowl has center <strong>O</strong> and radius 10.5 ft. A straight rail from <strong>P</strong> touches the bowl's edge only at <strong>T</strong>. A skater rolls straight from <strong>P</strong>, crossing the edge at <strong>A</strong> and again at <strong>B</strong>: PA = 5 ft and AB = 15 ft. Segment <strong>OP</strong> crosses the edge at <strong>C</strong>.</p>",
      claims: [
        {
          id: "pt",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is PT, from P to where the rail touches the bowl?",
          choices: [
            { letter: "A", text: "about 8.7 ft" },
            { letter: "B", text: "10 ft" },
            { letter: "C", text: "20 ft" },
            { letter: "D", text: "100 ft" }
          ],
          correct: "B"
        },
        {
          id: "op",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "How far is P from the center O?",
          choices: [
            { letter: "A", text: "20.5 ft" },
            { letter: "B", text: "about 11.6 ft" },
            { letter: "C", text: "14.5 ft" },
            { letter: "D", text: "about 3.2 ft" }
          ],
          correct: "C"
        },
        {
          id: "chordangle",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which expression equals m∠PTA, the angle between the rail and chord TA?",
          choices: [
            { letter: "A", text: "½ · m(minor arc TA)" },
            { letter: "B", text: "m(minor arc TA)" },
            { letter: "C", text: "½ · m(arc TB)" },
            { letter: "D", text: "½(m arc TB − m arc TA)" }
          ],
          correct: "A"
        },
        {
          id: "top",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "To the nearest degree, what is m∠TOP?",
          choices: [
            { letter: "A", text: "46°" },
            { letter: "B", text: "25°" },
            { letter: "C", text: "136°" },
            { letter: "D", text: "44°" }
          ],
          correct: "D"
        },
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Use m∠TOP ≈ 43.6°. To the nearest tenth of a foot, how long is arc TC along the bowl's edge?",
          choices: [
            { letter: "A", text: "4.0 ft" },
            { letter: "B", text: "41.9 ft" },
            { letter: "C", text: "8.0 ft" },
            { letter: "D", text: "16.0 ft" }
          ],
          correct: "C"
        },
        {
          id: "not",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Which statement about the rail and the skater's path is NOT true?",
          choices: [
            { letter: "A", text: "PT² = PA · PB" },
            { letter: "B", text: "PT = PA + AB" },
            { letter: "C", text: "OT ⊥ PT" },
            { letter: "D", text: "OP² = PT² + OT²" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
