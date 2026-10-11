/* SOL Labyrinth — Geometry game (family GEO), circles: G.PC.3 (Virginia 2023 Geometry SOL), modes ring (Wolf Ring:
   art, design, music and making things) and worms (Root Worms: nature and the outdoors). Original items only. Every
   number and every figure coordinate was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-pc3-ring-pottery-wheel",
      family: "GEO",
      mode: "ring",
      title: "The Pottery Wheel",
      kind: "Circles · G.PC.3",
      blurb: "A painted wedge on a wheel head and a trimming tool at the rim.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A potter's wheel head drawn as a circle with center O and a radius of 15 centimeters to point T. Points A and B on the rim form the shaded sector AOB with a 72 degree central angle and a gold arc AB. A straight line, line ℓ, touches the rim at T and stands for the trimming tool\"><path class=\"sh\" d=\"M150 82 L187.6 30.2 A64 64 0 0 0 112.4 30.2 Z\"/><circle class=\"ln\" cx=\"150\" cy=\"82\" r=\"64\"/><circle class=\"thin\" cx=\"150\" cy=\"82\" r=\"10\"/><path class=\"ac\" d=\"M187.6 30.2 A64 64 0 0 0 112.4 30.2\"/><line class=\"thin\" x1=\"150\" y1=\"82\" x2=\"112.4\" y2=\"30.2\"/><line class=\"thin\" x1=\"150\" y1=\"82\" x2=\"187.6\" y2=\"30.2\"/><line class=\"thin dash\" x1=\"150\" y1=\"82\" x2=\"214\" y2=\"82\"/><line class=\"ln\" x1=\"214\" y1=\"30\" x2=\"214\" y2=\"136\"/><circle class=\"dt\" cx=\"150\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"112.4\" cy=\"30.2\" r=\"3\"/><circle class=\"dt\" cx=\"187.6\" cy=\"30.2\" r=\"3\"/><circle class=\"dt\" cx=\"214\" cy=\"82\" r=\"3\"/><text x=\"104.7\" y=\"24.7\" text-anchor=\"middle\">A</text><text x=\"195.3\" y=\"24.7\" text-anchor=\"middle\">B</text><text x=\"226\" y=\"88\" text-anchor=\"middle\">T</text><text x=\"146\" y=\"105\" text-anchor=\"middle\">O</text><text x=\"225\" y=\"41\" text-anchor=\"middle\">ℓ</text><text class=\"sm\" x=\"150\" y=\"54\" text-anchor=\"middle\">72°</text><text class=\"sm\" x=\"188\" y=\"77\" text-anchor=\"middle\">15 cm</text><text class=\"sm\" x=\"268\" y=\"124\" text-anchor=\"middle\">trimming</text><text class=\"sm\" x=\"268\" y=\"138\" text-anchor=\"middle\">tool</text></svg></figure><p class=\"geo-given\">A potter's wheel head is a circle with center <strong>O</strong> and radius 15 cm. The shaded sector AOB is painted with slip, and m∠AOB = 72°. A trimming tool lies along line <strong>ℓ</strong>, which touches the rim only at <strong>T</strong>.</p>",
      claims: [
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is arc AB, the curved edge of the painted sector? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "3π cm" },
            { letter: "B", text: "12π cm" },
            { letter: "C", text: "45π cm" },
            { letter: "D", text: "6π cm" }
          ],
          correct: "D"
        },
        {
          id: "area",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "What is the area of the painted sector AOB, to the nearest tenth of a square centimeter?",
          choices: [
            { letter: "A", text: "18.8 cm²" },
            { letter: "B", text: "141.4 cm²" },
            { letter: "C", text: "565.5 cm²" },
            { letter: "D", text: "706.9 cm²" }
          ],
          correct: "B"
        },
        {
          id: "tool",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which statement about line ℓ and radius OT must be true?",
          choices: [
            { letter: "A", text: "OT ∥ ℓ, because both of them touch the rim at T." },
            { letter: "B", text: "ℓ passes through O, because it touches the rim at T." },
            { letter: "C", text: "OT ⊥ ℓ, because ℓ is tangent to the rim at T." },
            { letter: "D", text: "ℓ meets OT at 45°, because ℓ touches the rim at one point." }
          ],
          correct: "C"
        },
        {
          id: "marks",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Two other marks on this rim are 10π cm apart, measured along the rim. What central angle do they make?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "240°" },
            { letter: "C", text: "60°" },
            { letter: "D", text: "16°" }
          ],
          correct: "A"
        },
        {
          id: "spin",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "A lump of clay sits on the rim at A. The wheel turns 3.5 times. How far does the lump travel? Round to the nearest centimeter.",
          choices: [
            { letter: "A", text: "330 cm" },
            { letter: "B", text: "165 cm" },
            { letter: "C", text: "283 cm" },
            { letter: "D", text: "660 cm" }
          ],
          correct: "A"
        },
        {
          id: "bat",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "A smaller round clay bat has a 40° sector with an area of 4π cm². What is the radius of the bat?",
          choices: [
            { letter: "A", text: "36 cm" },
            { letter: "B", text: "6 cm" },
            { letter: "C", text: "18 cm" },
            { letter: "D", text: "2 cm" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-ring-dance-circle",
      family: "GEO",
      mode: "ring",
      title: "The Dance Circle",
      kind: "Circles · G.PC.3",
      blurb: "Three dancers on a circle, two of them across a diameter.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A circle of dancers with center O. Dancers A and B are at the ends of a diameter. Dancer C is on the circle, and the gold arc AC is labeled 64 degrees. Straight segments join A to C and C to B, and a dashed segment joins O to C. Small dots mark other dancers on the circle\"><circle class=\"ln\" cx=\"160\" cy=\"82\" r=\"62\"/><path class=\"ac\" d=\"M132.8 26.3 A62 62 0 0 0 98 82\"/><line class=\"ln\" x1=\"98\" y1=\"82\" x2=\"222\" y2=\"82\"/><line class=\"ln\" x1=\"98\" y1=\"82\" x2=\"132.8\" y2=\"26.3\"/><line class=\"ln\" x1=\"132.8\" y1=\"26.3\" x2=\"222\" y2=\"82\"/><line class=\"thin dash\" x1=\"160\" y1=\"82\" x2=\"132.8\" y2=\"26.3\"/><circle class=\"dt\" cx=\"207.5\" cy=\"42.1\" r=\"2\"/><circle class=\"dt\" cx=\"176\" cy=\"22.1\" r=\"2\"/><circle class=\"dt\" cx=\"109.2\" cy=\"117.6\" r=\"2\"/><circle class=\"dt\" cx=\"138.8\" cy=\"140.3\" r=\"2\"/><circle class=\"dt\" cx=\"181.2\" cy=\"140.3\" r=\"2\"/><circle class=\"dt\" cx=\"210.8\" cy=\"117.6\" r=\"2\"/><circle class=\"dt\" cx=\"160\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"98\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"222\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"132.8\" cy=\"26.3\" r=\"3\"/><text x=\"86\" y=\"87\" text-anchor=\"middle\">A</text><text x=\"234\" y=\"87\" text-anchor=\"middle\">B</text><text x=\"127.1\" y=\"19.6\" text-anchor=\"middle\">C</text><text x=\"160\" y=\"102\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"121.8\" y=\"62.2\" text-anchor=\"middle\">64°</text><text class=\"sm\" x=\"262\" y=\"154\" text-anchor=\"middle\">radius 5 m</text></svg></figure><p class=\"geo-given\">Dancers stand on a circle with center <strong>O</strong> and radius 5 m. <strong>A</strong> and <strong>B</strong> are at the ends of diameter AB. Dancer <strong>C</strong> is also on the circle, and m(arc AC) = 64°.</p>",
      claims: [
        {
          id: "atB",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠ABC, the angle at B between the lines to A and C?",
          choices: [
            { letter: "A", text: "64°" },
            { letter: "B", text: "32°" },
            { letter: "C", text: "58°" },
            { letter: "D", text: "116°" }
          ],
          correct: "B"
        },
        {
          id: "atA",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠CAB, the angle at A between the lines to C and B?",
          choices: [
            { letter: "A", text: "116°" },
            { letter: "B", text: "32°" },
            { letter: "C", text: "26°" },
            { letter: "D", text: "58°" }
          ],
          correct: "D"
        },
        {
          id: "atC",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which statement about ∠ACB is true?",
          choices: [
            { letter: "A", text: "It is a right angle, because AB is a diameter." },
            { letter: "B", text: "It measures 64°, the same as arc AC." },
            { letter: "C", text: "It measures 32°, half of arc AC." },
            { letter: "D", text: "It is obtuse, because AB is the longest chord." }
          ],
          correct: "A"
        },
        {
          id: "walk",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "C walks along the circle to A, on arc AC. How far does she walk? Round to the nearest tenth of a meter.",
          choices: [
            { letter: "A", text: "2.8 m" },
            { letter: "B", text: "11.2 m" },
            { letter: "C", text: "10.1 m" },
            { letter: "D", text: "5.6 m" }
          ],
          correct: "D"
        },
        {
          id: "floor",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "The floor inside sector AOC is painted. To the nearest tenth of a square meter, what is its area?",
          choices: [
            { letter: "A", text: "7.0 m²" },
            { letter: "B", text: "25.3 m²" },
            { letter: "C", text: "14.0 m²" },
            { letter: "D", text: "55.9 m²" }
          ],
          correct: "C"
        },
        {
          id: "tape",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Tape is laid along the whole circle so the dancers know where to stand. To the nearest tenth of a meter, how much tape is needed?",
          choices: [
            { letter: "A", text: "15.7 m" },
            { letter: "B", text: "78.5 m" },
            { letter: "C", text: "31.4 m" },
            { letter: "D", text: "62.8 m" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc3-ring-weaving-loom",
      family: "GEO",
      mode: "ring",
      title: "The Weaving Loom",
      kind: "Circles · G.PC.3",
      blurb: "Two warp threads cross on a round loom.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A round weaving loom drawn as a circle with small pegs around it. Thread AB and thread CD are chords that cross at E. AE is labeled 14, EB 12 and ED 6. The angle AEC is marked 92 degrees, and the gold arc BD is labeled 47 degrees\"><circle class=\"thin\" cx=\"160\" cy=\"82\" r=\"70\"/><circle class=\"ln\" cx=\"160\" cy=\"82\" r=\"64\"/><circle class=\"dt\" cx=\"229.4\" cy=\"72.9\" r=\"1.6\"/><circle class=\"dt\" cx=\"224.7\" cy=\"55.2\" r=\"1.6\"/><circle class=\"dt\" cx=\"215.5\" cy=\"39.4\" r=\"1.6\"/><circle class=\"dt\" cx=\"202.6\" cy=\"26.5\" r=\"1.6\"/><circle class=\"dt\" cx=\"186.8\" cy=\"17.3\" r=\"1.6\"/><circle class=\"dt\" cx=\"169.1\" cy=\"12.6\" r=\"1.6\"/><circle class=\"dt\" cx=\"150.9\" cy=\"12.6\" r=\"1.6\"/><circle class=\"dt\" cx=\"133.2\" cy=\"17.3\" r=\"1.6\"/><circle class=\"dt\" cx=\"117.4\" cy=\"26.5\" r=\"1.6\"/><circle class=\"dt\" cx=\"104.5\" cy=\"39.4\" r=\"1.6\"/><circle class=\"dt\" cx=\"95.3\" cy=\"55.2\" r=\"1.6\"/><circle class=\"dt\" cx=\"90.6\" cy=\"72.9\" r=\"1.6\"/><circle class=\"dt\" cx=\"90.6\" cy=\"91.1\" r=\"1.6\"/><circle class=\"dt\" cx=\"95.3\" cy=\"108.8\" r=\"1.6\"/><circle class=\"dt\" cx=\"104.5\" cy=\"124.6\" r=\"1.6\"/><circle class=\"dt\" cx=\"117.4\" cy=\"137.5\" r=\"1.6\"/><circle class=\"dt\" cx=\"133.2\" cy=\"146.7\" r=\"1.6\"/><circle class=\"dt\" cx=\"150.9\" cy=\"151.4\" r=\"1.6\"/><circle class=\"dt\" cx=\"169.1\" cy=\"151.4\" r=\"1.6\"/><circle class=\"dt\" cx=\"186.8\" cy=\"146.7\" r=\"1.6\"/><circle class=\"dt\" cx=\"202.6\" cy=\"137.5\" r=\"1.6\"/><circle class=\"dt\" cx=\"215.5\" cy=\"124.6\" r=\"1.6\"/><circle class=\"dt\" cx=\"224.7\" cy=\"108.8\" r=\"1.6\"/><circle class=\"dt\" cx=\"229.4\" cy=\"91.1\" r=\"1.6\"/><line class=\"ln\" x1=\"124.5\" y1=\"28.7\" x2=\"218.3\" y2=\"55.6\"/><line class=\"ln\" x1=\"149.6\" y1=\"145.2\" x2=\"180.5\" y2=\"21.4\"/><path class=\"ac\" d=\"M218.3 55.6 A64 64 0 0 0 180.5 21.4\"/><path class=\"thin\" d=\"M162.5 39.6 A13 13 0 0 0 171.9 55.8\"/><circle class=\"dt\" cx=\"124.5\" cy=\"28.7\" r=\"3\"/><circle class=\"dt\" cx=\"218.3\" cy=\"55.6\" r=\"3\"/><circle class=\"dt\" cx=\"149.6\" cy=\"145.2\" r=\"3\"/><circle class=\"dt\" cx=\"180.5\" cy=\"21.4\" r=\"3\"/><circle class=\"dt\" cx=\"175\" cy=\"43.2\" r=\"3\"/><text x=\"114\" y=\"17.9\" text-anchor=\"middle\">A</text><text x=\"235.6\" y=\"52.8\" text-anchor=\"middle\">B</text><text x=\"146.5\" y=\"168.9\" text-anchor=\"middle\">C</text><text x=\"186.6\" y=\"8.4\" text-anchor=\"middle\">D</text><text x=\"177\" y=\"65.2\" text-anchor=\"middle\">E</text><text class=\"sm\" x=\"153.4\" y=\"59.7\" text-anchor=\"middle\">92°</text><text class=\"sm\" x=\"152.3\" y=\"31.3\" text-anchor=\"middle\">14</text><text class=\"sm\" x=\"199.1\" y=\"44.8\" text-anchor=\"middle\">12</text><text class=\"sm\" x=\"185.5\" y=\"38.2\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"193.6\" y=\"48.9\" text-anchor=\"middle\">47°</text></svg></figure><p class=\"geo-given\">On a round loom, two straight threads cross at <strong>E</strong>: thread AB and thread CD. AE = 14 cm, EB = 12 cm and ED = 6 cm. m∠AEC = 92° and m(arc BD) = 47°. The loom's radius is about 17.1 cm.</p>",
      claims: [
        {
          id: "CE",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is CE, the other piece of thread CD?",
          choices: [
            { letter: "A", text: "7 cm" },
            { letter: "B", text: "20 cm" },
            { letter: "C", text: "28 cm" },
            { letter: "D", text: "168 cm" }
          ],
          correct: "C"
        },
        {
          id: "eq",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Which equation is true for the pieces of the two threads?",
          choices: [
            { letter: "A", text: "14 · 6 = CE · 12" },
            { letter: "B", text: "14 + 12 = CE + 6" },
            { letter: "C", text: "14 · CE = 12 · 6" },
            { letter: "D", text: "14 · 12 = CE · 6" }
          ],
          correct: "D"
        },
        {
          id: "arcAC",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m(arc AC), the arc cut off by ∠AEC?",
          choices: [
            { letter: "A", text: "45°" },
            { letter: "B", text: "92°" },
            { letter: "C", text: "137°" },
            { letter: "D", text: "231°" }
          ],
          correct: "C"
        },
        {
          id: "other",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m(arc AD) + m(arc CB)?",
          choices: [
            { letter: "A", text: "88°" },
            { letter: "B", text: "176°" },
            { letter: "C", text: "184°" },
            { letter: "D", text: "268°" }
          ],
          correct: "B"
        },
        {
          id: "arcBD",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Use the loom's radius, 17.1 cm. How long is arc BD along the loom? Round to the nearest tenth of a centimeter.",
          choices: [
            { letter: "A", text: "14.0 cm" },
            { letter: "B", text: "7.0 cm" },
            { letter: "C", text: "28.1 cm" },
            { letter: "D", text: "40.9 cm" }
          ],
          correct: "A"
        },
        {
          id: "new",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "On another loom, two threads cross. One is cut into pieces of 9 cm and 16 cm. The other thread is 30 cm long. How long are its two pieces?",
          choices: [
            { letter: "A", text: "6 cm and 24 cm" },
            { letter: "B", text: "12 cm and 18 cm" },
            { letter: "C", text: "15 cm and 15 cm" },
            { letter: "D", text: "9 cm and 21 cm" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc3-ring-vinyl-record",
      family: "GEO",
      mode: "ring",
      title: "The Vinyl Record",
      kind: "Circles · G.PC.3",
      blurb: "A chord of the record's edge just touches the label.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A vinyl record drawn as two circles with the same center O: the outer edge has radius 15 and the label has radius 5. The grooved ring between them is shaded. Gold chord AB of the outer circle touches the label at T. Segment OT is drawn, and a dashed segment joins O to A\"><path class=\"sh2\" fill-rule=\"evenodd\" d=\"M94 80 A66 66 0 1 0 226 80 A66 66 0 1 0 94 80 Z M138 80 A22 22 0 1 0 182 80 A22 22 0 1 0 138 80 Z\"/><circle class=\"ln\" cx=\"160\" cy=\"80\" r=\"66\"/><circle class=\"ln\" cx=\"160\" cy=\"80\" r=\"22\"/><circle class=\"thin dash\" cx=\"160\" cy=\"80\" r=\"54\"/><circle class=\"thin dash\" cx=\"160\" cy=\"80\" r=\"40\"/><line class=\"ac\" x1=\"97.8\" y1=\"102\" x2=\"222.2\" y2=\"102\"/><line class=\"thin\" x1=\"160\" y1=\"80\" x2=\"160\" y2=\"102\"/><line class=\"thin dash\" x1=\"160\" y1=\"80\" x2=\"97.8\" y2=\"102\"/><circle class=\"dt\" cx=\"160\" cy=\"80\" r=\"3\"/><circle class=\"dt\" cx=\"97.8\" cy=\"102\" r=\"3\"/><circle class=\"dt\" cx=\"222.2\" cy=\"102\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"102\" r=\"3\"/><text x=\"87.8\" y=\"114\" text-anchor=\"middle\">A</text><text x=\"232.2\" y=\"114\" text-anchor=\"middle\">B</text><text x=\"160\" y=\"121\" text-anchor=\"middle\">T</text><text x=\"170\" y=\"77\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"147\" y=\"95\" text-anchor=\"middle\">5</text><text class=\"sm\" x=\"131.9\" y=\"103.5\" text-anchor=\"middle\">15</text><text class=\"sm\" x=\"273\" y=\"24\" text-anchor=\"middle\">grooves</text><text class=\"sm\" x=\"273\" y=\"40\" text-anchor=\"middle\">(shaded)</text></svg></figure><p class=\"geo-given\">A vinyl record has center <strong>O</strong>. Its edge is a circle with radius 15 cm, and its label is a circle with radius 5 cm. Chord <strong>AB</strong> of the edge touches the label only at <strong>T</strong>. The shaded ring between the label and the edge holds the grooves.</p>",
      claims: [
        {
          id: "why",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Why is OT ⊥ AB?",
          choices: [
            { letter: "A", text: "AB is a diameter of the record, so it is ⊥ to every radius." },
            { letter: "B", text: "OA = OT, because both are radii of the record." },
            { letter: "C", text: "AB is tangent to the label at T, and a tangent is ⊥ to the radius there." },
            { letter: "D", text: "∠AOB is a right angle, because A and B are on the edge." }
          ],
          correct: "C"
        },
        {
          id: "AB",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is chord AB?",
          choices: [
            { letter: "A", text: "10√2 cm" },
            { letter: "B", text: "20 cm" },
            { letter: "C", text: "10√10 cm" },
            { letter: "D", text: "20√2 cm" }
          ],
          correct: "D"
        },
        {
          id: "grooves",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "What is the area of the shaded grooved ring? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "200π cm²" },
            { letter: "B", text: "100π cm²" },
            { letter: "C", text: "250π cm²" },
            { letter: "D", text: "20π cm" }
          ],
          correct: "A"
        },
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Use m∠AOB ≈ 141.1°. How long is minor arc AB of the record's edge? Round to the nearest tenth of a centimeter.",
          choices: [
            { letter: "A", text: "18.5 cm" },
            { letter: "B", text: "12.3 cm" },
            { letter: "C", text: "57.3 cm" },
            { letter: "D", text: "36.9 cm" }
          ],
          correct: "D"
        },
        {
          id: "spin",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "The record turns at 33⅓ revolutions per minute. How far does a point on its edge travel in 3 minutes? Round to the nearest meter.",
          choices: [
            { letter: "A", text: "47 m" },
            { letter: "B", text: "94 m" },
            { letter: "C", text: "31 m" },
            { letter: "D", text: "188 m" }
          ],
          correct: "B"
        },
        {
          id: "single",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "A smaller record has radius 8.5 cm. A chord of its edge that just touches its label is 15 cm long. What is the radius of its label?",
          choices: [
            { letter: "A", text: "1 cm" },
            { letter: "B", text: "4 cm" },
            { letter: "C", text: "11.3 cm" },
            { letter: "D", text: "16 cm" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-ring-pendant",
      family: "GEO",
      mode: "ring",
      title: "The Pendant",
      kind: "Circles · G.PC.3",
      blurb: "A chain hangs in a V around a round pendant.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A round pendant with center O hangs below a clasp P. The two straight sides of the chain, PA and PB, touch the pendant at A and B, and the angle at P is labeled 52 degrees. The gold arc AB is the top of the pendant, between A and B. Chord AB is drawn, and a bead C on the lower edge is joined to A and B\"><circle class=\"sh2\" cx=\"160\" cy=\"109.8\" r=\"42\"/><circle class=\"ln\" cx=\"160\" cy=\"109.8\" r=\"42\"/><circle class=\"thin\" cx=\"160\" cy=\"109.8\" r=\"33\"/><path class=\"ac\" d=\"M197.7 91.4 A42 42 0 0 0 122.3 91.4\"/><line class=\"ln\" x1=\"160\" y1=\"14\" x2=\"122.3\" y2=\"91.4\"/><line class=\"ln\" x1=\"160\" y1=\"14\" x2=\"197.7\" y2=\"91.4\"/><line class=\"thin\" x1=\"122.3\" y1=\"91.4\" x2=\"197.7\" y2=\"91.4\"/><line class=\"thin\" x1=\"137.7\" y1=\"145.4\" x2=\"122.3\" y2=\"91.4\"/><line class=\"thin\" x1=\"137.7\" y1=\"145.4\" x2=\"197.7\" y2=\"91.4\"/><circle class=\"thin\" cx=\"160\" cy=\"13\" r=\"5\"/><path class=\"thin\" d=\"M153.4 27.5 A15 15 0 0 0 166.6 27.5\"/><circle class=\"dt\" cx=\"160\" cy=\"14\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"109.8\" r=\"3\"/><circle class=\"dt\" cx=\"122.3\" cy=\"91.4\" r=\"3\"/><circle class=\"dt\" cx=\"197.7\" cy=\"91.4\" r=\"3\"/><circle class=\"dt\" cx=\"137.7\" cy=\"145.4\" r=\"3\"/><text x=\"176\" y=\"21\" text-anchor=\"middle\">P</text><text x=\"111.5\" y=\"91.1\" text-anchor=\"middle\">A</text><text x=\"208.5\" y=\"91.1\" text-anchor=\"middle\">B</text><text x=\"130.9\" y=\"161.5\" text-anchor=\"middle\">C</text><text x=\"171\" y=\"118.8\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"160\" y=\"44\" text-anchor=\"middle\">52°</text><text class=\"sm\" x=\"255\" y=\"154\" text-anchor=\"middle\">radius 1.4 cm</text></svg></figure><p class=\"geo-given\">A round pendant with center <strong>O</strong> and radius 1.4 cm hangs from a clasp <strong>P</strong>. The straight sides of the chain, PA and PB, are tangent to the pendant at <strong>A</strong> and <strong>B</strong>, and m∠APB = 52°. A bead <strong>C</strong> is on the pendant's lower edge.</p>",
      claims: [
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is the measure of minor arc AB, the top edge of the pendant between A and B?",
          choices: [
            { letter: "A", text: "52°" },
            { letter: "B", text: "104°" },
            { letter: "C", text: "128°" },
            { letter: "D", text: "232°" }
          ],
          correct: "C"
        },
        {
          id: "bead",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠ACB, the angle at the bead between the lines to A and B?",
          choices: [
            { letter: "A", text: "128°" },
            { letter: "B", text: "52°" },
            { letter: "C", text: "116°" },
            { letter: "D", text: "64°" }
          ],
          correct: "D"
        },
        {
          id: "equal",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Which statement about the two sides of the chain must be true?",
          choices: [
            { letter: "A", text: "PA = AB, because △PAB is equilateral." },
            { letter: "B", text: "PA = OA, because both segments end at A." },
            { letter: "C", text: "PA ⊥ PB, because tangents from one point are perpendicular." },
            { letter: "D", text: "PA = PB, because tangent segments from one point are congruent." }
          ],
          correct: "D"
        },
        {
          id: "PAB",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠PAB, the angle between side PA of the chain and chord AB?",
          choices: [
            { letter: "A", text: "64°" },
            { letter: "B", text: "52°" },
            { letter: "C", text: "128°" },
            { letter: "D", text: "26°" }
          ],
          correct: "A"
        },
        {
          id: "PA",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Use right triangle OAP, where m∠APO = 26°. To the nearest tenth of a centimeter, how long is PA?",
          choices: [
            { letter: "A", text: "2.9 cm" },
            { letter: "B", text: "0.7 cm" },
            { letter: "C", text: "3.2 cm" },
            { letter: "D", text: "1.1 cm" }
          ],
          correct: "A"
        },
        {
          id: "gold",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "The top edge of the pendant, minor arc AB, is trimmed with gold. To the nearest tenth of a centimeter, how long is the trim?",
          choices: [
            { letter: "A", text: "5.7 cm" },
            { letter: "B", text: "3.1 cm" },
            { letter: "C", text: "1.3 cm" },
            { letter: "D", text: "1.6 cm" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-ring-string-art",
      family: "GEO",
      mode: "ring",
      title: "String Art on a Hoop",
      kind: "Circles · G.PC.3",
      blurb: "Strings stretched between nails on a round hoop.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A round hoop with center O and 20 nails equally spaced around it. Four nails are labeled A, B, C and D. Gold strings AC and BD cross at E. Strings AB and BC are also drawn, and dashed radii join O to B and to C\"><circle class=\"thin\" cx=\"160\" cy=\"82\" r=\"68\"/><circle class=\"ln\" cx=\"160\" cy=\"82\" r=\"64\"/><circle class=\"dt\" cx=\"108.2\" cy=\"119.6\" r=\"2\"/><circle class=\"dt\" cx=\"122.4\" cy=\"133.8\" r=\"2\"/><circle class=\"dt\" cx=\"160\" cy=\"146\" r=\"2\"/><circle class=\"dt\" cx=\"179.8\" cy=\"142.9\" r=\"2\"/><circle class=\"dt\" cx=\"197.6\" cy=\"133.8\" r=\"2\"/><circle class=\"dt\" cx=\"211.8\" cy=\"119.6\" r=\"2\"/><circle class=\"dt\" cx=\"220.9\" cy=\"101.8\" r=\"2\"/><circle class=\"dt\" cx=\"220.9\" cy=\"62.2\" r=\"2\"/><circle class=\"dt\" cx=\"211.8\" cy=\"44.4\" r=\"2\"/><circle class=\"dt\" cx=\"197.6\" cy=\"30.2\" r=\"2\"/><circle class=\"dt\" cx=\"160\" cy=\"18\" r=\"2\"/><circle class=\"dt\" cx=\"140.2\" cy=\"21.1\" r=\"2\"/><circle class=\"dt\" cx=\"122.4\" cy=\"30.2\" r=\"2\"/><circle class=\"dt\" cx=\"108.2\" cy=\"44.4\" r=\"2\"/><circle class=\"dt\" cx=\"99.1\" cy=\"62.2\" r=\"2\"/><circle class=\"dt\" cx=\"96\" cy=\"82\" r=\"2\"/><line class=\"thin dash\" x1=\"160\" y1=\"82\" x2=\"140.2\" y2=\"142.9\"/><line class=\"thin dash\" x1=\"160\" y1=\"82\" x2=\"224\" y2=\"82\"/><line class=\"ac\" x1=\"99.1\" y1=\"101.8\" x2=\"224\" y2=\"82\"/><line class=\"ac\" x1=\"140.2\" y1=\"142.9\" x2=\"179.8\" y2=\"21.1\"/><line class=\"ln\" x1=\"99.1\" y1=\"101.8\" x2=\"140.2\" y2=\"142.9\"/><line class=\"ln\" x1=\"140.2\" y1=\"142.9\" x2=\"224\" y2=\"82\"/><circle class=\"dt\" cx=\"160\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"99.1\" cy=\"101.8\" r=\"3\"/><circle class=\"dt\" cx=\"140.2\" cy=\"142.9\" r=\"3\"/><circle class=\"dt\" cx=\"224\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"179.8\" cy=\"21.1\" r=\"3\"/><circle class=\"dt\" cx=\"156.5\" cy=\"92.7\" r=\"3\"/><text x=\"84.9\" y=\"111.4\" text-anchor=\"middle\">A</text><text x=\"135.6\" y=\"162.1\" text-anchor=\"middle\">B</text><text x=\"239\" y=\"87\" text-anchor=\"middle\">C</text><text x=\"184.4\" y=\"11.9\" text-anchor=\"middle\">D</text><text x=\"158.5\" y=\"83.7\" text-anchor=\"middle\">E</text><text x=\"154\" y=\"102\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"268\" y=\"154\" text-anchor=\"middle\">20 nails</text></svg></figure><p class=\"geo-given\">A hoop with center <strong>O</strong> and radius 25 cm has 20 nails equally spaced around it. Going around the hoop, there are 3 gaps from nail <strong>A</strong> to nail <strong>B</strong>, 6 from B to <strong>C</strong>, 4 from C to <strong>D</strong> and 7 from D back to A. Gold strings AC and BD cross at <strong>E</strong>.</p>",
      claims: [
        {
          id: "BOC",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠BOC, the central angle from nail B to nail C?",
          choices: [
            { letter: "A", text: "54°" },
            { letter: "B", text: "120°" },
            { letter: "C", text: "216°" },
            { letter: "D", text: "108°" }
          ],
          correct: "D"
        },
        {
          id: "AEB",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠AEB, where the gold strings cross?",
          choices: [
            { letter: "A", text: "126°" },
            { letter: "B", text: "63°" },
            { letter: "C", text: "9°" },
            { letter: "D", text: "117°" }
          ],
          correct: "B"
        },
        {
          id: "ABC",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠ABC, the angle at nail B between strings BA and BC?",
          choices: [
            { letter: "A", text: "81°" },
            { letter: "B", text: "99°" },
            { letter: "C", text: "198°" },
            { letter: "D", text: "108°" }
          ],
          correct: "B"
        },
        {
          id: "error",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Jada writes m∠BEC = ½(126° − 108°) = 9°. What is her mistake?",
          choices: [
            { letter: "A", text: "She should add the arcs: ½(126° + 108°)." },
            { letter: "B", text: "She should not halve: 126° − 108° = 18°." },
            { letter: "C", text: "She should use arcs AB and CD: ½(54° + 72°)." },
            { letter: "D", text: "She should double: 2(126° − 108°) = 36°." }
          ],
          correct: "A"
        },
        {
          id: "arcAB",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How far apart are nails A and B along the hoop? Round to the nearest tenth of a centimeter.",
          choices: [
            { letter: "A", text: "11.8 cm" },
            { letter: "B", text: "47.1 cm" },
            { letter: "C", text: "23.6 cm" },
            { letter: "D", text: "7.9 cm" }
          ],
          correct: "C"
        },
        {
          id: "AC",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Arc ABC measures 162°. Use isosceles triangle AOC to find the length of string AC, to the nearest tenth of a centimeter.",
          choices: [
            { letter: "A", text: "70.7 cm" },
            { letter: "B", text: "7.8 cm" },
            { letter: "C", text: "49.4 cm" },
            { letter: "D", text: "24.7 cm" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc3-ring-rose-window",
      family: "GEO",
      mode: "ring",
      title: "The Rose Window",
      kind: "Circles · G.PC.3",
      blurb: "A hexagon of lead lines inside a round stained-glass window.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A round stained-glass window with center O. A regular hexagon ABCDEF is inscribed in it, and triangle ACE is drawn inside the hexagon. The six pieces between the hexagon and the circle are shaded blue; the piece between A and B is gold. Dashed radii join O to A and to B\"><path class=\"sh2\" fill-rule=\"evenodd\" d=\"M94 82 A66 66 0 1 0 226 82 A66 66 0 1 0 94 82 Z M160 16 L102.8 49 L102.8 115 L160 148 L217.2 115 L217.2 49 Z\"/><path class=\"sh\" d=\"M160 16 A66 66 0 0 0 102.8 49 Z\"/><circle class=\"ln\" cx=\"160\" cy=\"82\" r=\"66\"/><polygon class=\"ln\" points=\"160,16 102.8,49 102.8,115 160,148 217.2,115 217.2,49\"/><polygon class=\"thin\" points=\"160,16 102.8,115 217.2,115\"/><path class=\"ac\" d=\"M160 16 A66 66 0 0 0 102.8 49\"/><line class=\"thin dash\" x1=\"160\" y1=\"82\" x2=\"160\" y2=\"16\"/><line class=\"thin dash\" x1=\"160\" y1=\"82\" x2=\"102.8\" y2=\"49\"/><circle class=\"dt\" cx=\"160\" cy=\"16\" r=\"3\"/><circle class=\"dt\" cx=\"102.8\" cy=\"49\" r=\"3\"/><circle class=\"dt\" cx=\"102.8\" cy=\"115\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"148\" r=\"3\"/><circle class=\"dt\" cx=\"217.2\" cy=\"115\" r=\"3\"/><circle class=\"dt\" cx=\"217.2\" cy=\"49\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"82\" r=\"3\"/><text x=\"160\" y=\"8\" text-anchor=\"middle\">A</text><text x=\"91.6\" y=\"47.5\" text-anchor=\"middle\">B</text><text x=\"91.6\" y=\"126.5\" text-anchor=\"middle\">C</text><text x=\"160\" y=\"166\" text-anchor=\"middle\">D</text><text x=\"228.4\" y=\"126.5\" text-anchor=\"middle\">E</text><text x=\"228.4\" y=\"47.5\" text-anchor=\"middle\">F</text><text x=\"172\" y=\"91\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"268\" y=\"154\" text-anchor=\"middle\">radius 1.8 m</text></svg></figure><p class=\"geo-given\">A round rose window has center <strong>O</strong> and radius 1.8 m. Lead lines form a regular hexagon <strong>ABCDEF</strong> with its vertices on the circle, and triangle ACE inside it. The hexagon is clear glass. The six pieces between the hexagon and the circle are blue glass; the gold one is between A and B.</p>",
      claims: [
        {
          id: "CAE",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠CAE, the angle at A between lead lines AC and AE?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "30°" },
            { letter: "C", text: "60°" },
            { letter: "D", text: "90°" }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Why is side AB of the hexagon 1.8 m long?",
          choices: [
            { letter: "A", text: "OA = OB = 1.8 m and m∠AOB = 60°, so △AOB is equilateral." },
            { letter: "B", text: "AB is a diameter, so it is as long as the radius." },
            { letter: "C", text: "Every chord of a circle is as long as its radius." },
            { letter: "D", text: "m∠AOB = 90°, so AB is as long as OA." }
          ],
          correct: "A"
        },
        {
          id: "sector",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "What is the area of sector AOB, to the nearest hundredth of a square meter?",
          choices: [
            { letter: "A", text: "0.85 m²" },
            { letter: "B", text: "1.70 m²" },
            { letter: "C", text: "6.79 m²" },
            { letter: "D", text: "10.18 m²" }
          ],
          correct: "B"
        },
        {
          id: "gold",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "The area of △AOB is about 1.40 m². What is the area of the gold piece of glass, to the nearest hundredth of a square meter?",
          choices: [
            { letter: "A", text: "1.40 m²" },
            { letter: "B", text: "1.70 m²" },
            { letter: "C", text: "3.10 m²" },
            { letter: "D", text: "0.29 m²" }
          ],
          correct: "D"
        },
        {
          id: "lead",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Lead came goes all the way around the gold piece: along arc AB and along side AB. To the nearest tenth of a meter, how long is it?",
          choices: [
            { letter: "A", text: "3.7 m" },
            { letter: "B", text: "1.9 m" },
            { letter: "C", text: "5.5 m" },
            { letter: "D", text: "2.7 m" }
          ],
          correct: "A"
        },
        {
          id: "percent",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "What percent of the window's area is blue or gold glass (all six pieces), to the nearest percent?",
          choices: [
            { letter: "A", text: "83%" },
            { letter: "B", text: "17%" },
            { letter: "C", text: "3%" },
            { letter: "D", text: "21%" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-ring-mandala",
      family: "GEO",
      mode: "ring",
      title: "The Mandala Guide Lines",
      kind: "Circles · G.PC.3",
      blurb: "Three guide lines from one point outside a mandala.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A circular mandala with center O and petal shapes inside. From point P outside the circle, one line crosses the circle at A and B, a second crosses it at C and D, and a third touches it only at T. PA is labeled 6, AB 18 and PC 8. The near gold arc AC is labeled 36 degrees and the far gold arc BD is labeled 136 degrees\"><circle class=\"ln\" cx=\"153.4\" cy=\"86\" r=\"70.1\"/><circle class=\"thin\" cx=\"153.4\" cy=\"86\" r=\"12.6\"/><circle class=\"thin\" cx=\"182.5\" cy=\"73.9\" r=\"19.6\"/><circle class=\"thin\" cx=\"165.5\" cy=\"56.9\" r=\"19.6\"/><circle class=\"thin\" cx=\"141.3\" cy=\"56.9\" r=\"19.6\"/><circle class=\"thin\" cx=\"124.3\" cy=\"73.9\" r=\"19.6\"/><circle class=\"thin\" cx=\"124.3\" cy=\"98.1\" r=\"19.6\"/><circle class=\"thin\" cx=\"141.3\" cy=\"115.1\" r=\"19.6\"/><circle class=\"thin\" cx=\"165.5\" cy=\"115.1\" r=\"19.6\"/><circle class=\"thin\" cx=\"182.5\" cy=\"98.1\" r=\"19.6\"/><line class=\"ln\" x1=\"44\" y1=\"86\" x2=\"205.3\" y2=\"133.1\"/><line class=\"ln\" x1=\"44\" y1=\"86\" x2=\"148.8\" y2=\"16.1\"/><line class=\"ln\" x1=\"44\" y1=\"86\" x2=\"124.6\" y2=\"18.7\"/><path class=\"ac\" d=\"M90.6 54.9 A70.1 70.1 0 0 0 84.3 97.8\"/><path class=\"ac\" d=\"M205.3 133.1 A70.1 70.1 0 0 0 148.8 16.1\"/><circle class=\"dt\" cx=\"44\" cy=\"86\" r=\"3\"/><circle class=\"dt\" cx=\"84.3\" cy=\"97.8\" r=\"3\"/><circle class=\"dt\" cx=\"205.3\" cy=\"133.1\" r=\"3\"/><circle class=\"dt\" cx=\"90.6\" cy=\"54.9\" r=\"3\"/><circle class=\"dt\" cx=\"148.8\" cy=\"16.1\" r=\"3\"/><circle class=\"dt\" cx=\"108.5\" cy=\"32.2\" r=\"3\"/><circle class=\"dt\" cx=\"153.4\" cy=\"86\" r=\"3\"/><text x=\"32\" y=\"92\" text-anchor=\"middle\">P</text><text x=\"82.3\" y=\"117.8\" text-anchor=\"middle\">A</text><text x=\"214.9\" y=\"146.9\" text-anchor=\"middle\">B</text><text x=\"82.6\" y=\"47.9\" text-anchor=\"middle\">C</text><text x=\"148\" y=\"8.1\" text-anchor=\"middle\">D</text><text x=\"100.2\" y=\"27.2\" text-anchor=\"middle\">T</text><text x=\"164.4\" y=\"95\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"61.6\" y=\"104.5\" text-anchor=\"middle\">6</text><text class=\"sm\" x=\"156.8\" y=\"132.3\" text-anchor=\"middle\">18</text><text class=\"sm\" x=\"62.3\" y=\"67\" text-anchor=\"middle\">8</text><text class=\"sm\" x=\"96.9\" y=\"81.7\" text-anchor=\"middle\">36°</text><text class=\"sm\" x=\"229.1\" y=\"53.5\" text-anchor=\"middle\">136°</text></svg></figure><p class=\"geo-given\">An artist draws a mandala on a circle with center <strong>O</strong> and radius 10 cm. From point <strong>P</strong> outside the circle she rules three guide lines. One crosses the circle at <strong>A</strong> and <strong>B</strong>, one crosses it at <strong>C</strong> and <strong>D</strong>, and one touches it only at <strong>T</strong>. PA = 6 cm, AB = 18 cm and PC = 8 cm. m(arc AC) = 36° and m(arc BD) = 136°.</p>",
      claims: [
        {
          id: "CD",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is CD, the part of the second guide line inside the circle?",
          choices: [
            { letter: "A", text: "13.5 cm" },
            { letter: "B", text: "18 cm" },
            { letter: "C", text: "14 cm" },
            { letter: "D", text: "10 cm" }
          ],
          correct: "D"
        },
        {
          id: "PT",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is PT, the guide line from P to the point where it touches the circle?",
          choices: [
            { letter: "A", text: "6√3 cm" },
            { letter: "B", text: "12 cm" },
            { letter: "C", text: "144 cm" },
            { letter: "D", text: "15 cm" }
          ],
          correct: "B"
        },
        {
          id: "angle",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠APC, the angle between the first two guide lines?",
          choices: [
            { letter: "A", text: "50°" },
            { letter: "B", text: "86°" },
            { letter: "C", text: "100°" },
            { letter: "D", text: "68°" }
          ],
          correct: "A"
        },
        {
          id: "not",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Which statement is NOT true?",
          choices: [
            { letter: "A", text: "PA · PB = PC · PD" },
            { letter: "B", text: "PT² = PA · PB" },
            { letter: "C", text: "m∠ADC = ½ · m(arc AC)" },
            { letter: "D", text: "PC · CD = PA · AB" }
          ],
          correct: "D"
        },
        {
          id: "arcBD",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is the far arc BD? Round to the nearest tenth of a centimeter.",
          choices: [
            { letter: "A", text: "6.3 cm" },
            { letter: "B", text: "11.9 cm" },
            { letter: "C", text: "23.7 cm" },
            { letter: "D", text: "8.7 cm" }
          ],
          correct: "C"
        },
        {
          id: "PO",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "She rules one more line from P to the center O. Use PT = 12 cm. To the nearest tenth of a centimeter, how long is PO?",
          choices: [
            { letter: "A", text: "22 cm" },
            { letter: "B", text: "6.6 cm" },
            { letter: "C", text: "15.6 cm" },
            { letter: "D", text: "16 cm" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc3-worms-garden-bed",
      family: "GEO",
      mode: "worms",
      title: "The Circular Garden Bed",
      kind: "Circles · G.PC.3",
      blurb: "Three straight paths split a round garden into beds.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A circular garden with center O. Straight paths run from O to points A, B and C on the edge. Sector AOB is shaded, with its gold edge arc AB, and its angle is labeled 140 degrees. Angle BOC is labeled 100 degrees. A lantern at D on the edge is joined to A and B by thin lines\"><path class=\"sh\" d=\"M160 80 L104.6 48 A64 64 0 0 0 181.9 140.1 Z\"/><circle class=\"ln\" cx=\"160\" cy=\"80\" r=\"64\"/><path class=\"ac\" d=\"M104.6 48 A64 64 0 0 0 181.9 140.1\"/><line class=\"ln\" x1=\"160\" y1=\"80\" x2=\"104.6\" y2=\"48\"/><line class=\"ln\" x1=\"160\" y1=\"80\" x2=\"181.9\" y2=\"140.1\"/><line class=\"ln\" x1=\"160\" y1=\"80\" x2=\"215.4\" y2=\"48\"/><line class=\"thin\" x1=\"153.3\" y1=\"16.4\" x2=\"104.6\" y2=\"48\"/><line class=\"thin\" x1=\"153.3\" y1=\"16.4\" x2=\"181.9\" y2=\"140.1\"/><circle class=\"dt\" cx=\"160\" cy=\"80\" r=\"3\"/><circle class=\"dt\" cx=\"104.6\" cy=\"48\" r=\"3\"/><circle class=\"dt\" cx=\"181.9\" cy=\"140.1\" r=\"3\"/><circle class=\"dt\" cx=\"215.4\" cy=\"48\" r=\"3\"/><circle class=\"dt\" cx=\"153.3\" cy=\"16.4\" r=\"3\"/><text x=\"93.3\" y=\"46.5\" text-anchor=\"middle\">A</text><text x=\"186.3\" y=\"157.4\" text-anchor=\"middle\">B</text><text x=\"226.7\" y=\"46.5\" text-anchor=\"middle\">C</text><text x=\"152\" y=\"8.4\" text-anchor=\"middle\">D</text><text x=\"173\" y=\"87\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"137\" y=\"103.3\" text-anchor=\"middle\">140°</text><text class=\"sm\" x=\"190.1\" y=\"94.9\" text-anchor=\"middle\">100°</text><text class=\"sm\" x=\"268\" y=\"154\" text-anchor=\"middle\">radius 4.5 m</text></svg></figure><p class=\"geo-given\">A circular garden has center <strong>O</strong> and radius 4.5 m. Straight paths run from O to <strong>A</strong>, <strong>B</strong> and <strong>C</strong> on the edge, making three beds. m∠AOB = 140° and m∠BOC = 100°. A lantern stands at <strong>D</strong> on the edge, between C and A.</p>",
      claims: [
        {
          id: "COA",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠COA, the angle of the third bed?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "240°" },
            { letter: "C", text: "40°" },
            { letter: "D", text: "220°" }
          ],
          correct: "A"
        },
        {
          id: "edge",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Edging is laid along arc AB, the gold curved edge of the shaded bed. How long is it? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "1.75π m" },
            { letter: "B", text: "7π m" },
            { letter: "C", text: "3.5π m" },
            { letter: "D", text: "7.875π m" }
          ],
          correct: "C"
        },
        {
          id: "BOC",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "What is the area of bed BOC, to the nearest tenth of a square meter?",
          choices: [
            { letter: "A", text: "7.9 m²" },
            { letter: "B", text: "70.7 m²" },
            { letter: "C", text: "63.6 m²" },
            { letter: "D", text: "17.7 m²" }
          ],
          correct: "D"
        },
        {
          id: "lantern",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "From the lantern at D, what is m∠ADB, the angle between the lines to A and B?",
          choices: [
            { letter: "A", text: "140°" },
            { letter: "B", text: "70°" },
            { letter: "C", text: "110°" },
            { letter: "D", text: "35°" }
          ],
          correct: "B"
        },
        {
          id: "mulch",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "One bag of mulch covers 2 m². How many bags are needed to cover the shaded bed AOB?",
          choices: [
            { letter: "A", text: "13 bags" },
            { letter: "B", text: "12 bags" },
            { letter: "C", text: "25 bags" },
            { letter: "D", text: "6 bags" }
          ],
          correct: "A"
        },
        {
          id: "new",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "A new bed in this garden will have an edge arc 2π m long. What central angle should it have?",
          choices: [
            { letter: "A", text: "160°" },
            { letter: "B", text: "40°" },
            { letter: "C", text: "80°" },
            { letter: "D", text: "about 35.6°" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc3-worms-tree-stump",
      family: "GEO",
      mode: "worms",
      title: "The Tree Stump",
      kind: "Circles · G.PC.3",
      blurb: "A triangle drawn on the rings of a round stump.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"The round top of a tree stump with center O and faint growth rings. Triangle ABC has its vertices on the edge. Arc AB is labeled 100 degrees, arc BC 150 degrees and arc CA 110 degrees. Dashed radii join O to B and to C\"><circle class=\"thin\" cx=\"160\" cy=\"80\" r=\"67\"/><circle class=\"gr\" cx=\"160\" cy=\"80\" r=\"14\"/><circle class=\"gr\" cx=\"160\" cy=\"80\" r=\"26\"/><circle class=\"gr\" cx=\"160\" cy=\"80\" r=\"38\"/><circle class=\"gr\" cx=\"160\" cy=\"80\" r=\"50\"/><circle class=\"ln\" cx=\"160\" cy=\"80\" r=\"62\"/><polygon class=\"ln\" points=\"101.7,101.2 191,133.7 160,18\"/><line class=\"thin dash\" x1=\"160\" y1=\"80\" x2=\"191\" y2=\"133.7\"/><line class=\"thin dash\" x1=\"160\" y1=\"80\" x2=\"160\" y2=\"18\"/><circle class=\"dt\" cx=\"160\" cy=\"80\" r=\"3\"/><circle class=\"dt\" cx=\"101.7\" cy=\"101.2\" r=\"3\"/><circle class=\"dt\" cx=\"191\" cy=\"133.7\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"18\" r=\"3\"/><text x=\"86.7\" y=\"111.7\" text-anchor=\"middle\">A</text><text x=\"199\" y=\"152.5\" text-anchor=\"middle\">B</text><text x=\"160\" y=\"8\" text-anchor=\"middle\">C</text><text x=\"148\" y=\"87\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"133\" y=\"158.2\" text-anchor=\"middle\">100°</text><text class=\"sm\" x=\"241.1\" y=\"62.3\" text-anchor=\"middle\">150°</text><text class=\"sm\" x=\"94.5\" y=\"38.1\" text-anchor=\"middle\">110°</text></svg></figure><p class=\"geo-given\">The top of a tree stump is a circle with center <strong>O</strong> and radius 30 cm. A woodworker draws triangle <strong>ABC</strong> with its vertices on the edge. m(arc AB) = 100°, m(arc BC) = 150° and m(arc CA) = 110°.</p>",
      claims: [
        {
          id: "C",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠ACB?",
          choices: [
            { letter: "A", text: "100°" },
            { letter: "B", text: "25°" },
            { letter: "C", text: "55°" },
            { letter: "D", text: "50°" }
          ],
          correct: "D"
        },
        {
          id: "A",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠BAC?",
          choices: [
            { letter: "A", text: "150°" },
            { letter: "B", text: "75°" },
            { letter: "C", text: "50°" },
            { letter: "D", text: "105°" }
          ],
          correct: "B"
        },
        {
          id: "largest",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which statement about △ABC is true?",
          choices: [
            { letter: "A", text: "∠ACB is its largest angle, because arc AB is the smallest arc." },
            { letter: "B", text: "All three angles are equal, because A, B and C are on one circle." },
            { letter: "C", text: "∠BAC is its largest angle, because arc BC is the largest arc." },
            { letter: "D", text: "m∠ABC = 110°, because it cuts off arc CA." }
          ],
          correct: "C"
        },
        {
          id: "BOC",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠BOC, the central angle between the dashed radii?",
          choices: [
            { letter: "A", text: "75°" },
            { letter: "B", text: "150°" },
            { letter: "C", text: "210°" },
            { letter: "D", text: "30°" }
          ],
          correct: "B"
        },
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is arc BC of the stump's edge? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "25π cm" },
            { letter: "B", text: "12.5π cm" },
            { letter: "C", text: "50π cm" },
            { letter: "D", text: "375π cm" }
          ],
          correct: "A"
        },
        {
          id: "grow",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Ten years before the tree was cut, its radius was 26 cm. How much longer is the edge of the stump (its circumference) than the edge was then? Round to the nearest tenth of a centimeter.",
          choices: [
            { letter: "A", text: "4.0 cm" },
            { letter: "B", text: "12.6 cm" },
            { letter: "C", text: "703.7 cm" },
            { letter: "D", text: "25.1 cm" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc3-worms-campfire-ring",
      family: "GEO",
      mode: "worms",
      title: "The Campfire Ring",
      kind: "Circles · G.PC.3",
      blurb: "A bench line touches a ring of stones; a path runs through the fire.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A circular campfire ring of stones with center O and a flame drawn in the middle. A gold bench line from point P touches the ring only at T. A straight path from P passes through A, the center O and B. PA is labeled 0.6 meters\"><path class=\"sh\" d=\"M130 106 Q127 86 141 70 Q155 86 152 106 Z\"/><circle class=\"ln\" cx=\"141\" cy=\"92\" r=\"63\"/><circle class=\"thin\" cx=\"208.3\" cy=\"82.5\" r=\"3.2\"/><circle class=\"thin\" cx=\"202.9\" cy=\"63.9\" r=\"3.2\"/><circle class=\"thin\" cx=\"192.5\" cy=\"47.6\" r=\"3.2\"/><circle class=\"thin\" cx=\"177.9\" cy=\"34.9\" r=\"3.2\"/><circle class=\"thin\" cx=\"160.4\" cy=\"26.8\" r=\"3.2\"/><circle class=\"thin\" cx=\"141.2\" cy=\"24\" r=\"3.2\"/><circle class=\"thin\" cx=\"122\" cy=\"26.7\" r=\"3.2\"/><circle class=\"thin\" cx=\"104.4\" cy=\"34.7\" r=\"3.2\"/><circle class=\"thin\" cx=\"89.8\" cy=\"47.3\" r=\"3.2\"/><circle class=\"thin\" cx=\"79.2\" cy=\"63.6\" r=\"3.2\"/><circle class=\"thin\" cx=\"73.7\" cy=\"82.1\" r=\"3.2\"/><circle class=\"thin\" cx=\"73.7\" cy=\"101.5\" r=\"3.2\"/><circle class=\"thin\" cx=\"79.1\" cy=\"120.1\" r=\"3.2\"/><circle class=\"thin\" cx=\"89.5\" cy=\"136.4\" r=\"3.2\"/><circle class=\"thin\" cx=\"104.1\" cy=\"149.1\" r=\"3.2\"/><circle class=\"thin\" cx=\"121.6\" cy=\"157.2\" r=\"3.2\"/><circle class=\"thin\" cx=\"140.8\" cy=\"160\" r=\"3.2\"/><circle class=\"thin\" cx=\"160\" cy=\"157.3\" r=\"3.2\"/><circle class=\"thin\" cx=\"177.6\" cy=\"149.3\" r=\"3.2\"/><circle class=\"thin\" cx=\"192.2\" cy=\"136.7\" r=\"3.2\"/><circle class=\"thin\" cx=\"202.8\" cy=\"120.4\" r=\"3.2\"/><circle class=\"thin\" cx=\"208.3\" cy=\"101.9\" r=\"3.2\"/><line class=\"ln\" x1=\"36\" y1=\"92\" x2=\"204\" y2=\"92\"/><line class=\"ac\" x1=\"36\" y1=\"92\" x2=\"133.4\" y2=\"18.9\"/><circle class=\"dt\" cx=\"36\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"78\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"204\" cy=\"92\" r=\"3\"/><circle class=\"dt\" cx=\"103.2\" cy=\"41.6\" r=\"3\"/><circle class=\"dt\" cx=\"141\" cy=\"92\" r=\"3\"/><text x=\"35\" y=\"113\" text-anchor=\"middle\">P</text><text x=\"87\" y=\"112\" text-anchor=\"middle\">A</text><text x=\"222\" y=\"98\" text-anchor=\"middle\">B</text><text x=\"91.2\" y=\"37.6\" text-anchor=\"middle\">T</text><text x=\"141\" y=\"112\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"57\" y=\"87\" text-anchor=\"middle\">0.6 m</text><text class=\"sm\" x=\"270\" y=\"154\" text-anchor=\"middle\">radius 0.9 m</text><text class=\"sm\" x=\"155.4\" y=\"26.9\" text-anchor=\"middle\">bench</text></svg></figure><p class=\"geo-given\">A campfire ring is a circle with center <strong>O</strong> and radius 0.9 m. A log bench lies along line PT, which touches the ring only at <strong>T</strong>. A straight path from <strong>P</strong> passes through O; it meets the ring at <strong>A</strong> and <strong>B</strong>. PA = 0.6 m.</p>",
      claims: [
        {
          id: "PT",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is PT, from P to where the bench line touches the ring?",
          choices: [
            { letter: "A", text: "about 1.0 m" },
            { letter: "B", text: "1.44 m" },
            { letter: "C", text: "1.2 m" },
            { letter: "D", text: "1.5 m" }
          ],
          correct: "C"
        },
        {
          id: "right",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Why is ∠OTP a right angle?",
          choices: [
            { letter: "A", text: "OT = PT, so the angle at T is 90°." },
            { letter: "B", text: "T is the midpoint of PB." },
            { letter: "C", text: "∠TOP is 90°, because O is the center." },
            { letter: "D", text: "PT is tangent at T, so PT ⊥ radius OT." }
          ],
          correct: "D"
        },
        {
          id: "check",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Which equation checks PT = 1.2 m with right triangle OTP?",
          choices: [
            { letter: "A", text: "0.9² + 1.5² = 1.2²" },
            { letter: "B", text: "0.9² + 1.2² = 1.5²" },
            { letter: "C", text: "0.9 + 1.2 = 1.5" },
            { letter: "D", text: "0.6² + 1.2² = 1.5²" }
          ],
          correct: "B"
        },
        {
          id: "angle",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "m(arc TA) ≈ 53.1° and m(arc TB) ≈ 126.9°. What is m∠TPB, the angle between the bench line and the path?",
          choices: [
            { letter: "A", text: "36.9°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "73.8°" },
            { letter: "D", text: "53.1°" }
          ],
          correct: "A"
        },
        {
          id: "arcTB",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Use m(arc TB) ≈ 126.9°. How long is arc TB of the ring? Round to the nearest hundredth of a meter.",
          choices: [
            { letter: "A", text: "1.00 m" },
            { letter: "B", text: "0.83 m" },
            { letter: "C", text: "3.99 m" },
            { letter: "D", text: "1.99 m" }
          ],
          correct: "D"
        },
        {
          id: "stones",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Flat stones 0.25 m wide are set side by side around the ring's edge. How many whole stones fit?",
          choices: [
            { letter: "A", text: "22 stones" },
            { letter: "B", text: "23 stones" },
            { letter: "C", text: "11 stones" },
            { letter: "D", text: "10 stones" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc3-worms-spider-web",
      family: "GEO",
      mode: "worms",
      title: "The Spider Web",
      kind: "Circles · G.PC.3",
      blurb: "A straight thread in a round web, 8 cm from the hub.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A round spider web with its hub at the center O and faint threads. Gold chord AB is labeled 30 centimeters. A dashed line through O meets AB at M with a right angle and meets the frame at D on top and C at the bottom; OM is labeled 8 centimeters. Point F on the upper left of the frame is joined to A and B\"><line class=\"gr\" x1=\"160\" y1=\"76\" x2=\"221.8\" y2=\"59.4\"/><line class=\"gr\" x1=\"160\" y1=\"76\" x2=\"205.3\" y2=\"30.7\"/><line class=\"gr\" x1=\"160\" y1=\"76\" x2=\"176.6\" y2=\"14.2\"/><line class=\"gr\" x1=\"160\" y1=\"76\" x2=\"143.4\" y2=\"14.2\"/><line class=\"gr\" x1=\"160\" y1=\"76\" x2=\"114.7\" y2=\"30.7\"/><line class=\"gr\" x1=\"160\" y1=\"76\" x2=\"98.2\" y2=\"59.4\"/><line class=\"gr\" x1=\"160\" y1=\"76\" x2=\"98.2\" y2=\"92.6\"/><line class=\"gr\" x1=\"160\" y1=\"76\" x2=\"114.7\" y2=\"121.3\"/><line class=\"gr\" x1=\"160\" y1=\"76\" x2=\"143.4\" y2=\"137.8\"/><line class=\"gr\" x1=\"160\" y1=\"76\" x2=\"176.6\" y2=\"137.8\"/><line class=\"gr\" x1=\"160\" y1=\"76\" x2=\"205.3\" y2=\"121.3\"/><line class=\"gr\" x1=\"160\" y1=\"76\" x2=\"221.8\" y2=\"92.6\"/><circle class=\"gr\" cx=\"160\" cy=\"76\" r=\"18\"/><circle class=\"gr\" cx=\"160\" cy=\"76\" r=\"34\"/><circle class=\"gr\" cx=\"160\" cy=\"76\" r=\"50\"/><circle class=\"ln\" cx=\"160\" cy=\"76\" r=\"64\"/><line class=\"thin dash\" x1=\"160\" y1=\"12\" x2=\"160\" y2=\"140\"/><line class=\"ac\" x1=\"103.5\" y1=\"106.1\" x2=\"216.5\" y2=\"106.1\"/><line class=\"thin\" x1=\"103.5\" y1=\"46\" x2=\"103.5\" y2=\"106.1\"/><line class=\"thin\" x1=\"103.5\" y1=\"46\" x2=\"216.5\" y2=\"106.1\"/><path class=\"thin\" d=\"M160 99.1 L167 99.1 L167 106.1\"/><circle class=\"dt\" cx=\"160\" cy=\"76\" r=\"3\"/><circle class=\"dt\" cx=\"103.5\" cy=\"106.1\" r=\"3\"/><circle class=\"dt\" cx=\"216.5\" cy=\"106.1\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"12\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"106.1\" r=\"3\"/><circle class=\"dt\" cx=\"103.5\" cy=\"46\" r=\"3\"/><text x=\"92.5\" y=\"116.1\" text-anchor=\"middle\">A</text><text x=\"227.5\" y=\"116.1\" text-anchor=\"middle\">B</text><text x=\"171\" y=\"153\" text-anchor=\"middle\">C</text><text x=\"171\" y=\"14\" text-anchor=\"middle\">D</text><text x=\"92\" y=\"44.9\" text-anchor=\"middle\">F</text><text x=\"150\" y=\"124.1\" text-anchor=\"middle\">M</text><text x=\"149\" y=\"77\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"175\" y=\"95.1\" text-anchor=\"middle\">8 cm</text><text class=\"sm\" x=\"200\" y=\"123.1\" text-anchor=\"middle\">30 cm</text></svg></figure><p class=\"geo-given\">A spider's web fills a round frame with center <strong>O</strong>, the hub. A straight thread <strong>AB</strong> of the frame is 30 cm long. The hub is 8 cm from it: OM = 8 cm, with OM ⊥ AB at <strong>M</strong>. Line OM meets the frame at <strong>C</strong> and <strong>D</strong>. A fly is caught at <strong>F</strong> on the frame.</p>",
      claims: [
        {
          id: "mid",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Why is AM = MB?",
          choices: [
            { letter: "A", text: "OM ⊥ AB, and a line from the center ⊥ to a chord bisects it." },
            { letter: "B", text: "M is on the frame of the web, so it must split AB in half." },
            { letter: "C", text: "OA = AB, so △OAB is equilateral and M is a midpoint." },
            { letter: "D", text: "AM = OM, because △OMA is an isosceles right triangle." }
          ],
          correct: "A"
        },
        {
          id: "radius",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "What is the radius of the frame?",
          choices: [
            { letter: "A", text: "23 cm" },
            { letter: "B", text: "17 cm" },
            { letter: "C", text: "15 cm" },
            { letter: "D", text: "about 31 cm" }
          ],
          correct: "B"
        },
        {
          id: "MD",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Chords AB and CD cross at M, and CM = 9 cm. How long is MD?",
          choices: [
            { letter: "A", text: "21 cm" },
            { letter: "B", text: "25 cm" },
            { letter: "C", text: "9 cm" },
            { letter: "D", text: "15 cm" }
          ],
          correct: "B"
        },
        {
          id: "AOB",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "To the nearest degree, what is m∠AOB?",
          choices: [
            { letter: "A", text: "62°" },
            { letter: "B", text: "56°" },
            { letter: "C", text: "124°" },
            { letter: "D", text: "28°" }
          ],
          correct: "C"
        },
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Use m∠AOB ≈ 124°. To the nearest centimeter, how long is minor arc AB of the frame?",
          choices: [
            { letter: "A", text: "70 cm" },
            { letter: "B", text: "18 cm" },
            { letter: "C", text: "74 cm" },
            { letter: "D", text: "37 cm" }
          ],
          correct: "D"
        },
        {
          id: "fly",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Use m∠AOB ≈ 124°. What is m∠AFB, the angle at the fly between the lines to A and B?",
          choices: [
            { letter: "A", text: "124°" },
            { letter: "B", text: "118°" },
            { letter: "C", text: "62°" },
            { letter: "D", text: "31°" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc3-worms-sunflower",
      family: "GEO",
      mode: "worms",
      title: "The Sunflower Head",
      kind: "Circles · G.PC.3",
      blurb: "A ladybug walks a four-sided path on a sunflower.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A round sunflower head with petals around it. Quadrilateral ABCD has its vertices on the edge of the head, and its diagonals AC and BD cross at E, where angle AEB is marked in gold. Arc AB is labeled 76 degrees, arc BC 94 degrees and arc CD 118 degrees\"><circle class=\"sh2\" cx=\"160\" cy=\"80\" r=\"58\"/><path class=\"thin\" d=\"M216.6 63.2 Q232.1 50.2 211.9 51.8\"/><path class=\"thin\" d=\"M210.3 49.2 Q221.9 32.5 202.8 39.4\"/><path class=\"thin\" d=\"M173.8 22.6 Q170.2 2.7 161.5 21\"/><path class=\"thin\" d=\"M158.5 21 Q149.8 2.7 146.2 22.6\"/><path class=\"thin\" d=\"M143.2 23.4 Q130.2 7.9 131.8 28.1\"/><path class=\"thin\" d=\"M101 81.5 Q82.7 90.2 102.6 93.8\"/><path class=\"thin\" d=\"M119.4 122.8 Q112.5 141.9 129.2 130.3\"/><path class=\"thin\" d=\"M161.5 139 Q170.2 157.3 173.8 137.4\"/><path class=\"thin\" d=\"M202.8 120.6 Q221.9 127.5 210.3 110.8\"/><path class=\"thin\" d=\"M211.9 108.2 Q232.1 109.8 216.6 96.8\"/><circle class=\"ln\" cx=\"160\" cy=\"80\" r=\"58\"/><polygon class=\"ln\" points=\"122.7,35.6 107.9,105.4 189,130.2 190.7,30.8\"/><line class=\"thin\" x1=\"122.7\" y1=\"35.6\" x2=\"189\" y2=\"130.2\"/><line class=\"thin\" x1=\"107.9\" y1=\"105.4\" x2=\"190.7\" y2=\"30.8\"/><path class=\"ac\" d=\"M140.7 61.2 A11 11 0 0 0 138.8 77.6\"/><circle class=\"dt\" cx=\"122.7\" cy=\"35.6\" r=\"3\"/><circle class=\"dt\" cx=\"107.9\" cy=\"105.4\" r=\"3\"/><circle class=\"dt\" cx=\"189\" cy=\"130.2\" r=\"3\"/><circle class=\"dt\" cx=\"190.7\" cy=\"30.8\" r=\"3\"/><circle class=\"dt\" cx=\"147\" cy=\"70.2\" r=\"3\"/><text x=\"114.4\" y=\"30.6\" text-anchor=\"middle\">A</text><text x=\"96.2\" y=\"116.1\" text-anchor=\"middle\">B</text><text x=\"195.5\" y=\"146.5\" text-anchor=\"middle\">C</text><text x=\"197.6\" y=\"24.8\" text-anchor=\"middle\">D</text><text x=\"146\" y=\"92.2\" text-anchor=\"middle\">E</text><text class=\"sm\" x=\"88.6\" y=\"68.8\" text-anchor=\"middle\">76°</text><text class=\"sm\" x=\"138.7\" y=\"153.8\" text-anchor=\"middle\">94°</text><text class=\"sm\" x=\"234\" y=\"85.3\" text-anchor=\"middle\">118°</text></svg></figure><p class=\"geo-given\">A sunflower head is a circle with radius 12 cm. A ladybug walks straight from <strong>A</strong> to <strong>B</strong> to <strong>C</strong> to <strong>D</strong> and back to A, all on the edge of the head. m(arc AB) = 76°, m(arc BC) = 94° and m(arc CD) = 118°. Diagonals AC and BD cross at <strong>E</strong>.</p>",
      claims: [
        {
          id: "DA",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m(arc DA)?",
          choices: [
            { letter: "A", text: "288°" },
            { letter: "B", text: "72°" },
            { letter: "C", text: "190°" },
            { letter: "D", text: "90°" }
          ],
          correct: "B"
        },
        {
          id: "ABC",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠ABC?",
          choices: [
            { letter: "A", text: "85°" },
            { letter: "B", text: "190°" },
            { letter: "C", text: "47°" },
            { letter: "D", text: "95°" }
          ],
          correct: "D"
        },
        {
          id: "not",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which statement is NOT true?",
          choices: [
            { letter: "A", text: "m∠ABC = m∠BCD" },
            { letter: "B", text: "m∠ABC + m∠ADC = 180°" },
            { letter: "C", text: "m∠BAD = 106°" },
            { letter: "D", text: "m∠BCD = 74°" }
          ],
          correct: "A"
        },
        {
          id: "AEB",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠AEB, the gold angle where the diagonals cross?",
          choices: [
            { letter: "A", text: "97°" },
            { letter: "B", text: "194°" },
            { letter: "C", text: "21°" },
            { letter: "D", text: "83°" }
          ],
          correct: "A"
        },
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is arc AB of the sunflower's edge? Round to the nearest tenth of a centimeter.",
          choices: [
            { letter: "A", text: "8.0 cm" },
            { letter: "B", text: "31.8 cm" },
            { letter: "C", text: "15.9 cm" },
            { letter: "D", text: "95.5 cm" }
          ],
          correct: "C"
        },
        {
          id: "grow",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "A week ago the head's radius was 12 cm. Now it is 14 cm. By how much did the area of the head grow? Round to the nearest square centimeter.",
          choices: [
            { letter: "A", text: "13 cm²" },
            { letter: "B", text: "163 cm²" },
            { letter: "C", text: "616 cm²" },
            { letter: "D", text: "653 cm²" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-worms-crater-lake",
      family: "GEO",
      mode: "worms",
      title: "The Crater Lake",
      kind: "Circles · G.PC.3",
      blurb: "A trail touches the shore of a round lake; a boat crosses it.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"A round crater lake with center O. A straight trail along the bottom passes through S, T and Q and touches the lake only at T; TQ is labeled 2 kilometers. A gold boat route runs straight from T to A on the shore, and arc TA on Q's side is labeled 140 degrees. Point B on the far shore is joined to T and A\"><circle class=\"sh2\" cx=\"130\" cy=\"72\" r=\"56\"/><circle class=\"ln\" cx=\"130\" cy=\"72\" r=\"56\"/><line class=\"ln\" x1=\"30\" y1=\"128\" x2=\"300\" y2=\"128\"/><line class=\"ac\" x1=\"130\" y1=\"128\" x2=\"166\" y2=\"29.1\"/><line class=\"thin\" x1=\"75.9\" y1=\"57.5\" x2=\"130\" y2=\"128\"/><line class=\"thin\" x1=\"75.9\" y1=\"57.5\" x2=\"166\" y2=\"29.1\"/><circle class=\"dt\" cx=\"130\" cy=\"72\" r=\"3\"/><circle class=\"dt\" cx=\"130\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"166\" cy=\"29.1\" r=\"3\"/><circle class=\"dt\" cx=\"75.9\" cy=\"57.5\" r=\"3\"/><circle class=\"dt\" cx=\"204.7\" cy=\"128\" r=\"3\"/><circle class=\"dt\" cx=\"62\" cy=\"128\" r=\"3\"/><text x=\"130\" y=\"149\" text-anchor=\"middle\">T</text><text x=\"174.4\" y=\"24.1\" text-anchor=\"middle\">A</text><text x=\"63.4\" y=\"59.1\" text-anchor=\"middle\">B</text><text x=\"204.7\" y=\"149\" text-anchor=\"middle\">Q</text><text x=\"62\" y=\"149\" text-anchor=\"middle\">S</text><text x=\"119\" y=\"79\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"167.3\" y=\"148\" text-anchor=\"middle\">2 km</text><text class=\"sm\" x=\"272\" y=\"123\" text-anchor=\"middle\">trail</text><text class=\"sm\" x=\"122\" y=\"50\" text-anchor=\"middle\">lake</text><text class=\"sm\" x=\"255\" y=\"44\" text-anchor=\"middle\">radius 1.5 km</text><text class=\"sm\" x=\"196.7\" y=\"100.3\" text-anchor=\"middle\">140°</text></svg></figure><p class=\"geo-given\">A round crater lake has center <strong>O</strong> and radius 1.5 km. A straight trail through <strong>S</strong>, <strong>T</strong> and <strong>Q</strong> touches the shore only at T, and TQ = 2 km. A boat route runs straight from T to <strong>A</strong> on the shore. Arc TA on Q's side of the lake measures 140°. <strong>B</strong> is a campsite on the far shore.</p>",
      claims: [
        {
          id: "QTA",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠QTA, the angle between the trail toward Q and the boat route?",
          choices: [
            { letter: "A", text: "140°" },
            { letter: "B", text: "70°" },
            { letter: "C", text: "110°" },
            { letter: "D", text: "35°" }
          ],
          correct: "B"
        },
        {
          id: "STA",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠STA, the angle between the trail toward S and the boat route?",
          choices: [
            { letter: "A", text: "220°" },
            { letter: "B", text: "70°" },
            { letter: "C", text: "40°" },
            { letter: "D", text: "110°" }
          ],
          correct: "D"
        },
        {
          id: "true",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which statement is true?",
          choices: [
            { letter: "A", text: "m∠TBA = m∠QTA, because both are half of arc TA." },
            { letter: "B", text: "m∠TBA = m∠TOA, because both cut off arc TA." },
            { letter: "C", text: "m∠QTA = 90°, because the trail is tangent at T." },
            { letter: "D", text: "m∠TBA = 140°, because it cuts off arc TA." }
          ],
          correct: "A"
        },
        {
          id: "shore",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is the shoreline along arc TA on Q's side? Round to the nearest tenth of a kilometer.",
          choices: [
            { letter: "A", text: "1.8 km" },
            { letter: "B", text: "7.3 km" },
            { letter: "C", text: "3.7 km" },
            { letter: "D", text: "5.8 km" }
          ],
          correct: "C"
        },
        {
          id: "boat",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Use isosceles triangle TOA, with m∠TOA = 140°. How long is the boat route TA, to the nearest tenth of a kilometer?",
          choices: [
            { letter: "A", text: "1.0 km" },
            { letter: "B", text: "3.7 km" },
            { letter: "C", text: "2.8 km" },
            { letter: "D", text: "1.4 km" }
          ],
          correct: "C"
        },
        {
          id: "hiker",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "A hiker stands at Q. How far is she from the center of the lake, O?",
          choices: [
            { letter: "A", text: "3.5 km" },
            { letter: "B", text: "about 1.3 km" },
            { letter: "C", text: "6.25 km" },
            { letter: "D", text: "2.5 km" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc3-worms-lily-pond",
      family: "GEO",
      mode: "worms",
      title: "The Lily Pond in the Triangle",
      kind: "Circles · G.PC.3",
      blurb: "A round pond touches three straight paths.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A right triangle ABC of straight paths with the right angle at C. A round pond with center O sits inside and touches AB at D, BC at E and CA at F. AD is labeled 24 meters, BD 10 meters, and the dashed radius OD is labeled 6 meters\"><polygon class=\"ln\" points=\"276,146 48,24.4 48,146\"/><circle class=\"sh2\" cx=\"93.6\" cy=\"100.4\" r=\"45.6\"/><circle class=\"ln\" cx=\"93.6\" cy=\"100.4\" r=\"45.6\"/><path class=\"thin\" d=\"M57 146 L57 137 L48 137\"/><line class=\"thin dash\" x1=\"93.6\" y1=\"100.4\" x2=\"115.1\" y2=\"60.2\"/><circle class=\"dt\" cx=\"276\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"48\" cy=\"24.4\" r=\"3\"/><circle class=\"dt\" cx=\"48\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"115.1\" cy=\"60.2\" r=\"3\"/><circle class=\"dt\" cx=\"48\" cy=\"100.4\" r=\"3\"/><circle class=\"dt\" cx=\"93.6\" cy=\"146\" r=\"3\"/><circle class=\"dt\" cx=\"93.6\" cy=\"100.4\" r=\"3\"/><text x=\"280\" y=\"166\" text-anchor=\"middle\">A</text><text x=\"37\" y=\"31.4\" text-anchor=\"middle\">B</text><text x=\"37\" y=\"160\" text-anchor=\"middle\">C</text><text x=\"124.1\" y=\"55.2\" text-anchor=\"middle\">D</text><text x=\"37\" y=\"106.4\" text-anchor=\"middle\">E</text><text x=\"93.6\" y=\"166\" text-anchor=\"middle\">F</text><text x=\"89.6\" y=\"120.4\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"200.7\" y=\"97.4\" text-anchor=\"middle\">24 m</text><text class=\"sm\" x=\"86.7\" y=\"36.6\" text-anchor=\"middle\">10 m</text><text class=\"sm\" x=\"112.3\" y=\"88.5\" text-anchor=\"middle\">6 m</text><text class=\"sm\" x=\"93.6\" y=\"82.4\" text-anchor=\"middle\">pond</text></svg></figure><p class=\"geo-given\">Three straight paths form right triangle <strong>ABC</strong>, with m∠C = 90°. A round pond with center <strong>O</strong> and radius 6 m touches each path at one point: <strong>D</strong> on AB, <strong>E</strong> on BC and <strong>F</strong> on CA. AD = 24 m and BD = 10 m.</p>",
      claims: [
        {
          id: "AF",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is AF?",
          choices: [
            { letter: "A", text: "10 m" },
            { letter: "B", text: "18 m" },
            { letter: "C", text: "24 m" },
            { letter: "D", text: "30 m" }
          ],
          correct: "C"
        },
        {
          id: "perim",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long are the three paths all together (the perimeter of △ABC)?",
          choices: [
            { letter: "A", text: "40 m" },
            { letter: "B", text: "68 m" },
            { letter: "C", text: "80 m" },
            { letter: "D", text: "74 m" }
          ],
          correct: "C"
        },
        {
          id: "DOF",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which expression equals m∠DOF?",
          choices: [
            { letter: "A", text: "180° − m∠A" },
            { letter: "B", text: "90° + m∠A" },
            { letter: "C", text: "90° − m∠A" },
            { letter: "D", text: "2 · m∠A" }
          ],
          correct: "A"
        },
        {
          id: "why",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Why is CE equal to the radius, 6 m?",
          choices: [
            { letter: "A", text: "C is the center of the pond, so CE is a radius." },
            { letter: "B", text: "CE = BE, because tangent segments are congruent." },
            { letter: "C", text: "△OEC is equilateral, so all its sides are 6 m." },
            { letter: "D", text: "OECF has four right angles and OE = OF, so it is a square." }
          ],
          correct: "D"
        },
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is the pond's shore along the 90° arc EF near corner C? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "3π m" },
            { letter: "B", text: "1.5π m" },
            { letter: "C", text: "9π m" },
            { letter: "D", text: "6π m" }
          ],
          correct: "A"
        },
        {
          id: "lawn",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "The rest of the triangle is lawn. To the nearest tenth of a square meter, what is the area of the lawn?",
          choices: [
            { letter: "A", text: "353.1 m²" },
            { letter: "B", text: "126.9 m²" },
            { letter: "C", text: "202.3 m²" },
            { letter: "D", text: "366.9 m²" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-worms-fairy-rings",
      family: "GEO",
      mode: "worms",
      title: "Two Fairy Rings",
      kind: "Circles · G.PC.3",
      blurb: "Two rings of mushrooms overlap on a lawn.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 164\" role=\"img\" aria-label=\"Two overlapping circles of mushrooms on a lawn: ring 1 with center P and ring 2 with center Q. They cross at A and B, and gold chord AB meets the dashed line PQ at M. The dashed line also meets ring 2 at E and F. Segments join P and Q to A and to B; PA is labeled 20 meters and QA 15 meters\"><circle class=\"ln\" cx=\"96\" cy=\"82\" r=\"72\"/><circle class=\"ln\" cx=\"186\" cy=\"82\" r=\"54\"/><circle class=\"thin\" cx=\"151.2\" cy=\"35.7\" r=\"2.6\"/><circle class=\"thin\" cx=\"114.6\" cy=\"12.5\" r=\"2.6\"/><circle class=\"thin\" cx=\"71.4\" cy=\"14.3\" r=\"2.6\"/><circle class=\"thin\" cx=\"37\" cy=\"40.7\" r=\"2.6\"/><circle class=\"thin\" cx=\"24\" cy=\"82\" r=\"2.6\"/><circle class=\"thin\" cx=\"37\" cy=\"123.3\" r=\"2.6\"/><circle class=\"thin\" cx=\"71.4\" cy=\"149.7\" r=\"2.6\"/><circle class=\"thin\" cx=\"114.6\" cy=\"151.5\" r=\"2.6\"/><circle class=\"thin\" cx=\"151.2\" cy=\"128.3\" r=\"2.6\"/><circle class=\"thin\" cx=\"240\" cy=\"82\" r=\"2.6\"/><circle class=\"thin\" cx=\"232.8\" cy=\"55\" r=\"2.6\"/><circle class=\"thin\" cx=\"213\" cy=\"35.2\" r=\"2.6\"/><circle class=\"thin\" cx=\"213\" cy=\"128.8\" r=\"2.6\"/><circle class=\"thin\" cx=\"232.8\" cy=\"109\" r=\"2.6\"/><line class=\"thin dash\" x1=\"86\" y1=\"82\" x2=\"252\" y2=\"82\"/><line class=\"ac\" x1=\"153.6\" y1=\"38.8\" x2=\"153.6\" y2=\"125.2\"/><line class=\"thin\" x1=\"96\" y1=\"82\" x2=\"153.6\" y2=\"38.8\"/><line class=\"thin\" x1=\"186\" y1=\"82\" x2=\"153.6\" y2=\"38.8\"/><line class=\"thin\" x1=\"96\" y1=\"82\" x2=\"153.6\" y2=\"125.2\"/><line class=\"thin\" x1=\"186\" y1=\"82\" x2=\"153.6\" y2=\"125.2\"/><circle class=\"dt\" cx=\"96\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"186\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"153.6\" cy=\"38.8\" r=\"3\"/><circle class=\"dt\" cx=\"153.6\" cy=\"125.2\" r=\"3\"/><circle class=\"dt\" cx=\"153.6\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"132\" cy=\"82\" r=\"3\"/><circle class=\"dt\" cx=\"240\" cy=\"82\" r=\"3\"/><text x=\"92\" y=\"103\" text-anchor=\"middle\">P</text><text x=\"191\" y=\"103\" text-anchor=\"middle\">Q</text><text x=\"155.6\" y=\"31.8\" text-anchor=\"middle\">A</text><text x=\"155.6\" y=\"145.2\" text-anchor=\"middle\">B</text><text x=\"162.6\" y=\"101\" text-anchor=\"middle\">M</text><text x=\"124\" y=\"77\" text-anchor=\"middle\">E</text><text x=\"250\" y=\"77\" text-anchor=\"middle\">F</text><text class=\"sm\" x=\"118.8\" y=\"56.4\" text-anchor=\"middle\">20 m</text><text class=\"sm\" x=\"177.8\" y=\"58.4\" text-anchor=\"middle\">15 m</text><text class=\"sm\" x=\"40\" y=\"22\" text-anchor=\"middle\">ring 1</text><text class=\"sm\" x=\"272\" y=\"34\" text-anchor=\"middle\">ring 2</text></svg></figure><p class=\"geo-given\">Mushrooms grow in two circular fairy rings. Ring 1 has center <strong>P</strong> and radius 20 m. Ring 2 has center <strong>Q</strong> and radius 15 m. PQ = 25 m. The rings cross at <strong>A</strong> and <strong>B</strong>, and AB crosses line PQ at <strong>M</strong>. Line PQ meets ring 2 at <strong>E</strong> and <strong>F</strong>.</p>",
      claims: [
        {
          id: "tan",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Which statement about line QA is true? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "It is tangent to ring 1, because 15² + 20² = 25², so QA ⊥ PA." },
            { letter: "B", text: "It is tangent to ring 1, because QA = PA." },
            { letter: "C", text: "It is not tangent to ring 1, because it crosses ring 1 twice." },
            { letter: "D", text: "It passes through P, because P, A and Q are collinear." }
          ],
          correct: "A"
        },
        {
          id: "AB",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Line PQ is ⊥ to AB at M, and PM = 16 m. How long is the common chord AB?",
          choices: [
            { letter: "A", text: "12 m" },
            { letter: "B", text: "8 m" },
            { letter: "C", text: "about 51 m" },
            { letter: "D", text: "24 m" }
          ],
          correct: "D"
        },
        {
          id: "MF",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "In ring 2, chords AB and EF cross at M. AM = MB = 12 m and EM = 6 m. How long is MF?",
          choices: [
            { letter: "A", text: "18 m" },
            { letter: "B", text: "6 m" },
            { letter: "C", text: "24 m" },
            { letter: "D", text: "12 m" }
          ],
          correct: "C"
        },
        {
          id: "AQB",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "∠PAQ and ∠PBQ are right angles, and m∠APB ≈ 73.7°. What is m∠AQB, the central angle of ring 2 for arc AB?",
          choices: [
            { letter: "A", text: "73.7°" },
            { letter: "B", text: "106.3°" },
            { letter: "C", text: "286.3°" },
            { letter: "D", text: "36.9°" }
          ],
          correct: "B"
        },
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Use m∠AQB ≈ 106.3°. How long is the minor arc AB of ring 2? Round to the nearest tenth of a meter.",
          choices: [
            { letter: "A", text: "13.9 m" },
            { letter: "B", text: "19.3 m" },
            { letter: "C", text: "37.1 m" },
            { letter: "D", text: "27.8 m" }
          ],
          correct: "D"
        },
        {
          id: "sector",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Use m∠APB ≈ 73.7°. To the nearest square meter, what is the area of sector APB of ring 1?",
          choices: [
            { letter: "A", text: "26 m²" },
            { letter: "B", text: "257 m²" },
            { letter: "C", text: "1,029 m²" },
            { letter: "D", text: "1,257 m²" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
