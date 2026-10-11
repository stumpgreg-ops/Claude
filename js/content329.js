/* SOL Labyrinth — Geometry game (family GEO), circles: G.PC.3 (Virginia 2023 Geometry SOL), modes rocks (Rune Rocks:
   space, science and weather) and sky (Sun Chariot: travel and getting around). Original items only. Every number and
   every figure coordinate was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-pc3-rocks-weather-radar",
      family: "GEO",
      mode: "rocks",
      title: "The Weather Radar",
      kind: "Circles · G.PC.3",
      blurb: "A radar beam sweeps a 75° slice of its range.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A weather radar range drawn as a circle with center O and radius 120 kilometers, with a dashed inner ring. Points A and B on the circle form the shaded sector AOB with a 75 degree central angle and a gold arc AB. Point C is on the circle on the far side, joined to A and B by chords\"><circle class=\"thin dash\" cx=\"150\" cy=\"86\" r=\"31\"/><path class=\"sh\" d=\"M150 86 L203.7 55 A62 62 0 0 0 134 26.1 Z\"/><circle class=\"ln\" cx=\"150\" cy=\"86\" r=\"62\"/><path class=\"ac\" d=\"M203.7 55 A62 62 0 0 0 134 26.1\"/><line class=\"thin\" x1=\"150\" y1=\"86\" x2=\"134\" y2=\"26.1\"/><line class=\"thin\" x1=\"150\" y1=\"86\" x2=\"203.7\" y2=\"55\"/><line class=\"thin\" x1=\"126.3\" y1=\"143.3\" x2=\"134\" y2=\"26.1\"/><line class=\"thin\" x1=\"126.3\" y1=\"143.3\" x2=\"203.7\" y2=\"55\"/><circle class=\"dt\" cx=\"150\" cy=\"86\" r=\"3\"/><circle class=\"dt\" cx=\"134\" cy=\"26.1\" r=\"3\"/><circle class=\"dt\" cx=\"203.7\" cy=\"55\" r=\"3\"/><circle class=\"dt\" cx=\"126.3\" cy=\"143.3\" r=\"3\"/><text x=\"130.6\" y=\"18.6\" text-anchor=\"middle\">A</text><text x=\"215\" y=\"53.5\" text-anchor=\"middle\">B</text><text x=\"121.3\" y=\"160.3\" text-anchor=\"middle\">C</text><text x=\"144.6\" y=\"103.9\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"167.2\" y=\"48.4\" text-anchor=\"middle\">75°</text><text class=\"sm\" x=\"262\" y=\"136\" text-anchor=\"middle\">r = 120 km</text><text class=\"sm\" x=\"262\" y=\"30\" text-anchor=\"middle\">radar range</text></svg></figure><p class=\"geo-given\">A weather radar at <strong>O</strong> detects storms up to 120 km away, so its range is a circle with center O and radius 120 km. Storm cells <strong>A</strong> and <strong>B</strong> are on the edge of the range, and m∠AOB = 75°. The town <strong>C</strong> is also on the edge. The radar beam turns all the way around once every 12 seconds.</p>",
      claims: [
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is arc AB, the curved edge of the shaded sector? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "25π km" },
            { letter: "B", text: "100π km" },
            { letter: "C", text: "50π km" },
            { letter: "D", text: "3,000π km" }
          ],
          correct: "C"
        },
        {
          id: "area",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "What is the area of the shaded sector, to the nearest square kilometer?",
          choices: [
            { letter: "A", text: "9,425 km²" },
            { letter: "B", text: "4,712 km²" },
            { letter: "C", text: "37,699 km²" },
            { letter: "D", text: "157 km²" }
          ],
          correct: "A"
        },
        {
          id: "town",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "From the town at C, what is m∠ACB, the angle between the lines to the storm cells A and B?",
          choices: [
            { letter: "A", text: "75°" },
            { letter: "B", text: "37.5°" },
            { letter: "C", text: "150°" },
            { letter: "D", text: "142.5°" }
          ],
          correct: "B"
        },
        {
          id: "sweep",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "How many seconds does the beam take to sweep across sector AOB?",
          choices: [
            { letter: "A", text: "6.25 s" },
            { letter: "B", text: "5 s" },
            { letter: "C", text: "57.6 s" },
            { letter: "D", text: "2.5 s" }
          ],
          correct: "D"
        },
        {
          id: "small",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "A smaller radar at another station covers a 90° sector with an area of 400π km². What is the range (radius) of that radar?",
          choices: [
            { letter: "A", text: "1,600 km" },
            { letter: "B", text: "40 km" },
            { letter: "C", text: "20 km" },
            { letter: "D", text: "800 km" }
          ],
          correct: "B"
        },
        {
          id: "front",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "A storm front lies along an arc of the edge of this radar's range. The arc is 20π km long. What is its central angle?",
          choices: [
            { letter: "A", text: "30°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "15°" },
            { letter: "D", text: "0.5°" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc3-rocks-observatory-dome",
      family: "GEO",
      mode: "rocks",
      title: "The Observatory Dome",
      kind: "Circles · G.PC.3",
      blurb: "A semicircular dome, its slit and a beam on top.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"The cross-section of a telescope dome: a semicircle with center O on the floor and diameter AB of 14 meters. Point S on the dome is joined to A and B by straight lines; the gold arc AS measures 50 degrees. A horizontal beam touches the dome at its top point T, and a dashed segment joins O to T, with a right angle marked at T\"><line class=\"ln\" x1=\"28\" y1=\"140\" x2=\"292\" y2=\"140\"/><path class=\"ln\" d=\"M264 140 A104 104 0 0 0 56 140\"/><path class=\"ac\" d=\"M93.2 60.3 A104 104 0 0 0 56 140\"/><line class=\"thin\" x1=\"56\" y1=\"140\" x2=\"93.2\" y2=\"60.3\"/><line class=\"thin\" x1=\"93.2\" y1=\"60.3\" x2=\"264\" y2=\"140\"/><line class=\"thin dash\" x1=\"160\" y1=\"140\" x2=\"160\" y2=\"36\"/><line class=\"ln\" x1=\"104\" y1=\"36\" x2=\"216\" y2=\"36\"/><path class=\"thin\" d=\"M168 36 L168 44 L160 44\"/><circle class=\"dt\" cx=\"160\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"56\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"264\" cy=\"140\" r=\"3\"/><circle class=\"dt\" cx=\"93.2\" cy=\"60.3\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"36\" r=\"3\"/><text x=\"54\" y=\"160\" text-anchor=\"middle\">A</text><text x=\"266\" y=\"160\" text-anchor=\"middle\">B</text><text x=\"84.8\" y=\"55.4\" text-anchor=\"middle\">S</text><text x=\"148\" y=\"30\" text-anchor=\"middle\">T</text><text x=\"160\" y=\"160\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"83.9\" y=\"108.5\" text-anchor=\"middle\">50°</text><text class=\"sm\" x=\"240\" y=\"29\" text-anchor=\"middle\">beam</text><text class=\"sm\" x=\"228\" y=\"160\" text-anchor=\"middle\">AB = 14 m</text></svg></figure><p class=\"geo-given\">The cross-section of a telescope dome is a semicircle with center <strong>O</strong> and diameter <strong>AB</strong> = 14 m along the floor. The slit is at <strong>S</strong> on the dome, and m(arc AS) = 50°. A crane beam touches the dome only at its highest point, <strong>T</strong>, directly above O.</p>",
      claims: [
        {
          id: "slit",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠ASB, the angle at the slit between the lines to A and B? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "50°, because ∠ASB equals arc AS" },
            { letter: "B", text: "180°, because an inscribed angle equals its arc" },
            { letter: "C", text: "65°, because ∠ASB is half of arc SB" },
            { letter: "D", text: "90°, because ∠ASB is inscribed in a semicircle" }
          ],
          correct: "D"
        },
        {
          id: "base",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠SBA?",
          choices: [
            { letter: "A", text: "50°" },
            { letter: "B", text: "65°" },
            { letter: "C", text: "25°" },
            { letter: "D", text: "130°" }
          ],
          correct: "C"
        },
        {
          id: "beam",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which statement about the crane beam is true?",
          choices: [
            { letter: "A", text: "It is parallel to AB, because both are perpendicular to OT." },
            { letter: "B", text: "It is perpendicular to AB, because a tangent meets a diameter at 90°." },
            { letter: "C", text: "It passes through O, because it touches the dome at T." },
            { letter: "D", text: "It makes a 45° angle with OT, because OT splits the dome in half." }
          ],
          correct: "A"
        },
        {
          id: "arcas",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How far is it along the dome from A up to the slit at S? Round to the nearest tenth of a meter.",
          choices: [
            { letter: "A", text: "3.1 m" },
            { letter: "B", text: "6.1 m" },
            { letter: "C", text: "12.2 m" },
            { letter: "D", text: "15.9 m" }
          ],
          correct: "B"
        },
        {
          id: "dome",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is the whole curved dome, from A over the top to B? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "14π m" },
            { letter: "B", text: "24.5π m" },
            { letter: "C", text: "7π m" },
            { letter: "D", text: "49π m" }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "The dome sits on a round track with radius 7 m. To aim at a new star, the dome turns until a point on the track has moved 11 m. To the nearest degree, how far did the dome turn?",
          choices: [
            { letter: "A", text: "180°" },
            { letter: "B", text: "45°" },
            { letter: "C", text: "26°" },
            { letter: "D", text: "90°" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc3-rocks-hurricane-eye",
      family: "GEO",
      mode: "rocks",
      title: "Flying Through the Eye",
      kind: "Circles · G.PC.3",
      blurb: "Two flight legs cross inside a hurricane's eye.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A hurricane's eye drawn as a circle inside a shaded eyewall ring. Two straight flight legs, chords AB and CD, cross at E inside the eye. AE is 15 kilometers, EB is 8 kilometers and CE is 10 kilometers; the gold arc marks angle AEC, 68 degrees\"><path class=\"sh2\" fill-rule=\"evenodd\" d=\"M77 85 A73 73 0 1 0 223 85 A73 73 0 1 0 77 85 Z M88 85 A62 62 0 1 0 212 85 A62 62 0 1 0 88 85 Z\"/><circle class=\"ln\" cx=\"150\" cy=\"85\" r=\"62\"/><line class=\"ln\" x1=\"99.7\" y1=\"48.8\" x2=\"180.8\" y2=\"138.8\"/><line class=\"ln\" x1=\"103.1\" y1=\"125.5\" x2=\"212\" y2=\"85.9\"/><path class=\"ac\" d=\"M141.9 95.6 A16 16 0 0 0 137.5 113\"/><circle class=\"dt\" cx=\"99.7\" cy=\"48.8\" r=\"3\"/><circle class=\"dt\" cx=\"180.8\" cy=\"138.8\" r=\"3\"/><circle class=\"dt\" cx=\"103.1\" cy=\"125.5\" r=\"3\"/><circle class=\"dt\" cx=\"212\" cy=\"85.9\" r=\"3\"/><circle class=\"dt\" cx=\"152.6\" cy=\"107.5\" r=\"3\"/><text x=\"81.8\" y=\"40.9\" text-anchor=\"middle\">A</text><text x=\"191.7\" y=\"162.9\" text-anchor=\"middle\">B</text><text x=\"86.4\" y=\"144.9\" text-anchor=\"middle\">C</text><text x=\"234\" y=\"91.2\" text-anchor=\"middle\">D</text><text x=\"166.2\" y=\"115.9\" text-anchor=\"middle\">E</text><text x=\"128.8\" y=\"72.5\" text-anchor=\"middle\">15</text><text x=\"164\" y=\"138.8\" text-anchor=\"middle\">8</text><text x=\"125.2\" y=\"132.2\" text-anchor=\"middle\">10</text><text class=\"sm\" x=\"123.5\" y=\"104.2\" text-anchor=\"middle\">68°</text><text class=\"sm\" x=\"284\" y=\"24\" text-anchor=\"middle\">eyewall</text></svg></figure><p class=\"geo-given\">A hurricane's eye is a circle. A hurricane-hunter plane flies two straight legs across it: leg <strong>AB</strong> and leg <strong>CD</strong>, which cross at <strong>E</strong>. AE = 15 km, EB = 8 km, CE = 10 km, and m∠AEC = 68°.</p>",
      claims: [
        {
          id: "ed",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is ED, the part of leg CD after it crosses leg AB?",
          choices: [
            { letter: "A", text: "12 km" },
            { letter: "B", text: "about 18.8 km" },
            { letter: "C", text: "about 5.3 km" },
            { letter: "D", text: "13 km" }
          ],
          correct: "A"
        },
        {
          id: "cd",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is leg CD, from one edge of the eye to the other?",
          choices: [
            { letter: "A", text: "12 km" },
            { letter: "B", text: "23 km" },
            { letter: "C", text: "22 km" },
            { letter: "D", text: "25 km" }
          ],
          correct: "C"
        },
        {
          id: "arcs",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m(arc AD) + m(arc BC)?",
          choices: [
            { letter: "A", text: "136°" },
            { letter: "B", text: "112°" },
            { letter: "C", text: "56°" },
            { letter: "D", text: "224°" }
          ],
          correct: "D"
        },
        {
          id: "error",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Dana writes m∠AEC = ½(m arc AC − m arc BD). What is her mistake?",
          choices: [
            { letter: "A", text: "She should not halve: m arc AC − m arc BD." },
            { letter: "B", text: "She should add the arcs: ½(m arc AC + m arc BD)." },
            { letter: "C", text: "She should use one arc only: m arc AC." },
            { letter: "D", text: "She should use the other arcs: ½(m arc AD − m arc BC)." }
          ],
          correct: "B"
        },
        {
          id: "third",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "A third straight leg also passes through E, and E is its midpoint. To the nearest tenth of a kilometer, how long is each half of this leg?",
          choices: [
            { letter: "A", text: "11.5 km" },
            { letter: "B", text: "60.0 km" },
            { letter: "C", text: "11.0 km" },
            { letter: "D", text: "12.2 km" }
          ],
          correct: "C"
        },
        {
          id: "other",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "In another storm, two flight legs cross inside the eye at a 50° angle. This angle and its vertical angle cut off two arcs. One arc measures 64°. What does the other arc measure?",
          choices: [
            { letter: "A", text: "36°" },
            { letter: "B", text: "164°" },
            { letter: "C", text: "78°" },
            { letter: "D", text: "66°" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc3-rocks-orbit-paths",
      family: "GEO",
      mode: "rocks",
      title: "Two Paths Across an Orbit",
      kind: "Circles · G.PC.3",
      blurb: "A probe's two straight paths cross a moon's orbit.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A moon's circular orbit with a planet at its center O, and a probe at P outside the orbit. One straight path from P crosses the orbit at A and then B; another crosses it at C and then D. PA is 8,000 kilometers, AB is 10,000 kilometers and PC is 9,000 kilometers; a gold arc marks angle APC\"><circle class=\"ln\" cx=\"185\" cy=\"86\" r=\"72\"/><circle class=\"sh2\" cx=\"185\" cy=\"86\" r=\"9\"/><line class=\"ln\" x1=\"24\" y1=\"86\" x2=\"233.3\" y2=\"32.6\"/><line class=\"ln\" x1=\"24\" y1=\"86\" x2=\"202.9\" y2=\"155.7\"/><path class=\"ac\" d=\"M46.4 94.7 A24 24 0 0 0 47.3 80.1\"/><circle class=\"dt\" cx=\"24\" cy=\"86\" r=\"3\"/><circle class=\"dt\" cx=\"117\" cy=\"62.3\" r=\"3\"/><circle class=\"dt\" cx=\"233.3\" cy=\"32.6\" r=\"3\"/><circle class=\"dt\" cx=\"124.6\" cy=\"125.2\" r=\"3\"/><circle class=\"dt\" cx=\"202.9\" cy=\"155.7\" r=\"3\"/><circle class=\"dt\" cx=\"185\" cy=\"86\" r=\"3\"/><text x=\"20\" y=\"78\" text-anchor=\"middle\">P</text><text x=\"106.6\" y=\"63.6\" text-anchor=\"middle\">A</text><text x=\"242\" y=\"28\" text-anchor=\"middle\">B</text><text x=\"115.4\" y=\"136.2\" text-anchor=\"middle\">C</text><text x=\"216.9\" y=\"162.7\" text-anchor=\"middle\">D</text><text x=\"205\" y=\"94\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"60.1\" y=\"68.4\" text-anchor=\"middle\">8,000 km</text><text class=\"sm\" x=\"178.1\" y=\"63.1\" text-anchor=\"middle\">10,000 km</text><text class=\"sm\" x=\"70\" y=\"120.8\" text-anchor=\"middle\">9,000 km</text><text class=\"sm\" x=\"187\" y=\"12\" text-anchor=\"middle\">moon's orbit</text></svg></figure><p class=\"geo-given\">A moon travels on a circular orbit around a planet at <strong>O</strong>. A space probe at <strong>P</strong> is outside the orbit. One straight path from P crosses the orbit at <strong>A</strong> and <strong>B</strong>; another crosses it at <strong>C</strong> and <strong>D</strong>. PA = 8,000 km, AB = 10,000 km and PC = 9,000 km.</p>",
      claims: [
        {
          id: "cd",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How long is CD, the part of the second path inside the orbit?",
          choices: [
            { letter: "A", text: "about 8,889 km" },
            { letter: "B", text: "7,000 km" },
            { letter: "C", text: "16,000 km" },
            { letter: "D", text: "9,000 km" }
          ],
          correct: "B"
        },
        {
          id: "eq",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Which equation is true for the two paths?",
          choices: [
            { letter: "A", text: "PA · AB = PC · CD" },
            { letter: "B", text: "PA · PC = PB · PD" },
            { letter: "C", text: "PA + AB = PC + CD" },
            { letter: "D", text: "PA · PB = PC · PD" }
          ],
          correct: "D"
        },
        {
          id: "expr",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which expression equals m∠APC, the angle between the two paths?",
          choices: [
            { letter: "A", text: "½(m arc BD − m arc AC)" },
            { letter: "B", text: "½(m arc BD + m arc AC)" },
            { letter: "C", text: "m arc BD − m arc AC" },
            { letter: "D", text: "½ · m arc BD" }
          ],
          correct: "A"
        },
        {
          id: "near",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "From a point outside another orbit, two straight paths cross the orbit. They form a 35° angle, and the far arc between them measures 150°. What does the near arc measure?",
          choices: [
            { letter: "A", text: "115°" },
            { letter: "B", text: "220°" },
            { letter: "C", text: "80°" },
            { letter: "D", text: "40°" }
          ],
          correct: "C"
        },
        {
          id: "tangent",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "The probe could instead fly from P on a path that just touches the orbit at one point, T. How far is it from P to T?",
          choices: [
            { letter: "A", text: "about 8,944 km" },
            { letter: "B", text: "13,000 km" },
            { letter: "C", text: "about 12,806 km" },
            { letter: "D", text: "12,000 km" }
          ],
          correct: "D"
        },
        {
          id: "travel",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "The orbit's radius is 6,000 km, and the moon goes all the way around in 30 hours. How far does it travel in 5 hours? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "1,000π km" },
            { letter: "B", text: "2,000π km" },
            { letter: "C", text: "4,000π km" },
            { letter: "D", text: "12,000π km" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-rocks-lab-pendulum",
      family: "GEO",
      mode: "rocks",
      title: "The Lab Pendulum",
      kind: "Circles · G.PC.3",
      blurb: "A 90-cm pendulum swings through a 40° angle.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A pendulum hanging from a pivot O on the ceiling. Strings OA and OB, each 90 centimeters, form a 40 degree angle, and the shaded sector between them has a gold arc AB, the path of the bob. C is the lowest point of the arc, directly below O, with a dashed tangent line at C marked perpendicular to OC\"><line class=\"ln\" x1=\"124\" y1=\"8\" x2=\"196\" y2=\"8\"/><line class=\"thin\" x1=\"130\" y1=\"8\" x2=\"124\" y2=\"2\"/><line class=\"thin\" x1=\"142\" y1=\"8\" x2=\"136\" y2=\"2\"/><line class=\"thin\" x1=\"154\" y1=\"8\" x2=\"148\" y2=\"2\"/><line class=\"thin\" x1=\"166\" y1=\"8\" x2=\"160\" y2=\"2\"/><line class=\"thin\" x1=\"178\" y1=\"8\" x2=\"172\" y2=\"2\"/><line class=\"thin\" x1=\"190\" y1=\"8\" x2=\"184\" y2=\"2\"/><path class=\"sh\" d=\"M160 16 L118.3 130.6 A122 122 0 0 0 201.7 130.6 Z\"/><path class=\"ac\" d=\"M118.3 130.6 A122 122 0 0 0 201.7 130.6\"/><line class=\"ln\" x1=\"160\" y1=\"16\" x2=\"118.3\" y2=\"130.6\"/><line class=\"thin\" x1=\"160\" y1=\"16\" x2=\"201.7\" y2=\"130.6\"/><line class=\"thin dash\" x1=\"160\" y1=\"16\" x2=\"160\" y2=\"138\"/><line class=\"thin dash\" x1=\"130\" y1=\"138\" x2=\"190\" y2=\"138\"/><path class=\"thin\" d=\"M160 131 L167 131 L167 138\"/><circle class=\"sh2\" cx=\"201.7\" cy=\"130.6\" r=\"7\"/><circle class=\"dt\" cx=\"160\" cy=\"16\" r=\"3\"/><circle class=\"dt\" cx=\"118.3\" cy=\"130.6\" r=\"3\"/><circle class=\"dt\" cx=\"201.7\" cy=\"130.6\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"138\" r=\"3\"/><text x=\"174\" y=\"27\" text-anchor=\"middle\">O</text><text x=\"105.3\" y=\"137.6\" text-anchor=\"middle\">A</text><text x=\"219.7\" y=\"139.6\" text-anchor=\"middle\">B</text><text x=\"151\" y=\"158\" text-anchor=\"middle\">C</text><text class=\"sm\" x=\"160\" y=\"54\" text-anchor=\"middle\">40°</text><text class=\"sm\" x=\"117.1\" y=\"77.3\" text-anchor=\"middle\">90 cm</text><text class=\"sm\" x=\"224\" y=\"156\" text-anchor=\"middle\">tangent at C</text><text class=\"sm\" x=\"227.7\" y=\"118.6\" text-anchor=\"middle\">bob</text></svg></figure><p class=\"geo-given\">A lab pendulum hangs from a pivot at <strong>O</strong>. Its string is 90 cm long. The bob swings along arc <strong>AB</strong>, and m∠AOB = 40°. <strong>C</strong> is the lowest point of the swing, directly below O.</p>",
      claims: [
        {
          id: "path",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How far does the bob travel along arc AB in one swing from A to B? Round to the nearest tenth of a centimeter.",
          choices: [
            { letter: "A", text: "31.4 cm" },
            { letter: "B", text: "125.7 cm" },
            { letter: "C", text: "2,827.4 cm" },
            { letter: "D", text: "62.8 cm" }
          ],
          correct: "D"
        },
        {
          id: "sweep",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "What area does the string sweep out in one swing from A to B? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "900π cm²" },
            { letter: "B", text: "20π cm²" },
            { letter: "C", text: "3,600π cm²" },
            { letter: "D", text: "8,100π cm²" }
          ],
          correct: "A"
        },
        {
          id: "tangent",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "At C the bob moves along the line tangent to arc AB. What angle does this tangent line make with the string OC?",
          choices: [
            { letter: "A", text: "20°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "40°" },
            { letter: "D", text: "70°" }
          ],
          correct: "B"
        },
        {
          id: "angle",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "A student pulls the bob farther out, so one swing of this pendulum is 30π cm long. What is the swing's central angle?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "30°" },
            { letter: "C", text: "60°" },
            { letter: "D", text: "about 1.3°" }
          ],
          correct: "C"
        },
        {
          id: "string",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Another pendulum swings through 45°, and its bob travels 15π cm along its arc. How long is its string?",
          choices: [
            { letter: "A", text: "60 cm" },
            { letter: "B", text: "120 cm" },
            { letter: "C", text: "7.5 cm" },
            { letter: "D", text: "about 11.0 cm" }
          ],
          correct: "A"
        },
        {
          id: "chord",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "How far apart are A and B in a straight line? Round to the nearest tenth of a centimeter.",
          choices: [
            { letter: "A", text: "62.8 cm" },
            { letter: "B", text: "30.8 cm" },
            { letter: "C", text: "169.1 cm" },
            { letter: "D", text: "61.6 cm" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc3-rocks-centrifuge",
      family: "GEO",
      mode: "rocks",
      title: "The Lab Centrifuge",
      kind: "Circles · G.PC.3",
      blurb: "Four tubes sit in a rotor with nine slots.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A centrifuge rotor with center O and 9 equally spaced tube slots on a circle. Tubes in slots A, B, C and D are joined to form quadrilateral ABCD; going around, there are 2 gaps from A to B, 1 from B to C, 2 from C to D and 4 from D to A. Diagonals AC and BD cross at E, and a gold arc marks angle BCD\"><circle class=\"ln\" cx=\"160\" cy=\"85\" r=\"63\"/><circle class=\"thin\" cx=\"160\" cy=\"85\" r=\"8\"/><circle class=\"thin\" cx=\"142.2\" cy=\"36.1\" r=\"6\"/><circle class=\"thin\" cx=\"177.8\" cy=\"36.1\" r=\"6\"/><circle class=\"thin\" cx=\"205\" cy=\"59\" r=\"6\"/><circle class=\"thin\" cx=\"211.2\" cy=\"94\" r=\"6\"/><circle class=\"thin\" cx=\"193.4\" cy=\"124.8\" r=\"6\"/><circle class=\"thin\" cx=\"160\" cy=\"137\" r=\"6\"/><circle class=\"thin\" cx=\"126.6\" cy=\"124.8\" r=\"6\"/><circle class=\"thin\" cx=\"108.8\" cy=\"94\" r=\"6\"/><circle class=\"thin\" cx=\"115\" cy=\"59\" r=\"6\"/><polygon class=\"ln\" points=\"142.2,36.1 205,59 211.2,94 160,137\"/><line class=\"thin\" x1=\"142.2\" y1=\"36.1\" x2=\"211.2\" y2=\"94\"/><line class=\"thin\" x1=\"205\" y1=\"59\" x2=\"160\" y2=\"137\"/><path class=\"ac\" d=\"M208.6 79.3 A15 15 0 0 0 199.7 103.7\"/><circle class=\"dt\" cx=\"160\" cy=\"85\" r=\"3\"/><circle class=\"dt\" cx=\"142.2\" cy=\"36.1\" r=\"3\"/><circle class=\"dt\" cx=\"205\" cy=\"59\" r=\"3\"/><circle class=\"dt\" cx=\"211.2\" cy=\"94\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"137\" r=\"3\"/><circle class=\"dt\" cx=\"193.4\" cy=\"79.1\" r=\"3\"/><text x=\"134.7\" y=\"20.5\" text-anchor=\"middle\">A</text><text x=\"224.1\" y=\"53\" text-anchor=\"middle\">B</text><text x=\"232.9\" y=\"102.8\" text-anchor=\"middle\">C</text><text x=\"160\" y=\"164\" text-anchor=\"middle\">D</text><text x=\"191\" y=\"70.3\" text-anchor=\"middle\">E</text><text x=\"145.2\" y=\"92.6\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"272\" y=\"26\" text-anchor=\"middle\">9 slots,</text><text class=\"sm\" x=\"272\" y=\"40\" text-anchor=\"middle\">equally spaced</text></svg></figure><p class=\"geo-given\">A lab centrifuge rotor has center <strong>O</strong> and 9 tube slots equally spaced on a circle with radius 7.5 cm. Tubes sit in slots <strong>A</strong>, <strong>B</strong>, <strong>C</strong> and <strong>D</strong>. Going around, there are 2 gaps from A to B, 1 from B to C, 2 from C to D and 4 from D back to A. The diagonals AC and BD cross at <strong>E</strong>.</p>",
      claims: [
        {
          id: "aob",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠AOB, the central angle from slot A to slot B?",
          choices: [
            { letter: "A", text: "40°" },
            { letter: "B", text: "120°" },
            { letter: "C", text: "80°" },
            { letter: "D", text: "72°" }
          ],
          correct: "C"
        },
        {
          id: "bcd",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠BCD, the angle of ABCD at C?",
          choices: [
            { letter: "A", text: "240°" },
            { letter: "B", text: "120°" },
            { letter: "C", text: "60°" },
            { letter: "D", text: "80°" }
          ],
          correct: "B"
        },
        {
          id: "bec",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠BEC, where the diagonals cross?",
          choices: [
            { letter: "A", text: "200°" },
            { letter: "B", text: "60°" },
            { letter: "C", text: "80°" },
            { letter: "D", text: "100°" }
          ],
          correct: "D"
        },
        {
          id: "gap",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How far apart are two slots next to each other, measured along the slot circle? Round to the nearest tenth of a centimeter.",
          choices: [
            { letter: "A", text: "5.2 cm" },
            { letter: "B", text: "2.6 cm" },
            { letter: "C", text: "10.5 cm" },
            { letter: "D", text: "19.6 cm" }
          ],
          correct: "A"
        },
        {
          id: "rpm",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "The rotor spins at 3,000 revolutions per minute. How far does a tube travel in one second? Round to the nearest tenth of a meter.",
          choices: [
            { letter: "A", text: "11.8 m" },
            { letter: "B", text: "23.6 m" },
            { letter: "C", text: "47.1 m" },
            { letter: "D", text: "1,413.7 m" }
          ],
          correct: "B"
        },
        {
          id: "balance",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "To balance a rotor, a technician loads 3 tubes so they are equally spaced around the circle. What is the measure of each angle of the triangle the 3 tubes form?",
          choices: [
            { letter: "A", text: "120°" },
            { letter: "B", text: "40°" },
            { letter: "C", text: "60°" },
            { letter: "D", text: "180°" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc3-rocks-satellite-view",
      family: "GEO",
      mode: "rocks",
      title: "The Satellite's View",
      kind: "Circles · G.PC.3",
      blurb: "Two lines of sight just touch Earth's edge.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Earth drawn as a shaded circle with center O and radius 6,400 kilometers. A satellite at P outside the circle has two lines of sight, PA and PB, that each touch the circle at one point, A and B, forming a 40 degree angle at P. Dashed radii join O to A and to B, and the gold arc is minor arc AB\"><circle class=\"sh2\" cx=\"96\" cy=\"84\" r=\"60\"/><path class=\"ac\" d=\"M116.5 140.4 A60 60 0 0 0 116.5 27.6\"/><line class=\"ln\" x1=\"271.4\" y1=\"84\" x2=\"116.5\" y2=\"27.6\"/><line class=\"ln\" x1=\"271.4\" y1=\"84\" x2=\"116.5\" y2=\"140.4\"/><line class=\"thin dash\" x1=\"96\" y1=\"84\" x2=\"116.5\" y2=\"27.6\"/><line class=\"thin dash\" x1=\"96\" y1=\"84\" x2=\"116.5\" y2=\"140.4\"/><line class=\"thin\" x1=\"96\" y1=\"84\" x2=\"36\" y2=\"84\"/><path class=\"thin\" d=\"M243.2 73.7 A30 30 0 0 0 243.2 94.3\"/><rect class=\"sh2\" x=\"267.4\" y=\"62\" width=\"8\" height=\"14\"/><rect class=\"sh2\" x=\"267.4\" y=\"92\" width=\"8\" height=\"14\"/><circle class=\"dt\" cx=\"96\" cy=\"84\" r=\"3\"/><circle class=\"dt\" cx=\"116.5\" cy=\"27.6\" r=\"3\"/><circle class=\"dt\" cx=\"116.5\" cy=\"140.4\" r=\"3\"/><circle class=\"dt\" cx=\"271.4\" cy=\"84\" r=\"3\"/><text x=\"121\" y=\"20.4\" text-anchor=\"middle\">A</text><text x=\"121\" y=\"157.6\" text-anchor=\"middle\">B</text><text x=\"287.4\" y=\"89\" text-anchor=\"middle\">P</text><text x=\"87\" y=\"104\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"66\" y=\"79\" text-anchor=\"middle\">6,400 km</text><text class=\"sm\" x=\"227.4\" y=\"88\" text-anchor=\"middle\">40°</text><text class=\"sm\" x=\"96\" y=\"16\" text-anchor=\"middle\">Earth</text></svg></figure><p class=\"geo-given\">A weather satellite at <strong>P</strong> looks down at Earth, drawn as a circle with center <strong>O</strong> and radius 6,400 km. Its lines of sight <strong>PA</strong> and <strong>PB</strong> just touch Earth at A and B, so it can see minor arc AB. m∠APB = 40°.</p>",
      claims: [
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is the measure of minor arc AB, the part of Earth's outline the satellite can see?",
          choices: [
            { letter: "A", text: "140°" },
            { letter: "B", text: "80°" },
            { letter: "C", text: "40°" },
            { letter: "D", text: "220°" }
          ],
          correct: "A"
        },
        {
          id: "true",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which statement must be true?",
          choices: [
            { letter: "A", text: "m∠AOB = 40°, because it is vertical to ∠APB." },
            { letter: "B", text: "m∠OAP = 90°, because PA is tangent at A." },
            { letter: "C", text: "PA = OA, because tangent segments are congruent." },
            { letter: "D", text: "m∠OAP = 70°, because △OAP is isosceles." }
          ],
          correct: "B"
        },
        {
          id: "length",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is minor arc AB along Earth's outline? Round to the nearest hundred kilometers.",
          choices: [
            { letter: "A", text: "4,500 km" },
            { letter: "B", text: "24,600 km" },
            { letter: "C", text: "7,800 km" },
            { letter: "D", text: "15,600 km" }
          ],
          correct: "D"
        },
        {
          id: "percent",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "What percent of Earth's full outline can the satellite see? Round to the nearest tenth of a percent.",
          choices: [
            { letter: "A", text: "11.1%" },
            { letter: "B", text: "61.1%" },
            { letter: "C", text: "38.9%" },
            { letter: "D", text: "22.2%" }
          ],
          correct: "C"
        },
        {
          id: "op",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "To the nearest hundred kilometers, how far is the satellite from Earth's center O?",
          choices: [
            { letter: "A", text: "6,800 km" },
            { letter: "B", text: "18,700 km" },
            { letter: "C", text: "17,600 km" },
            { letter: "D", text: "10,000 km" }
          ],
          correct: "B"
        },
        {
          id: "pb",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "To the nearest hundred kilometers, how long is PB, the line of sight from the satellite to B?",
          choices: [
            { letter: "A", text: "17,600 km" },
            { letter: "B", text: "2,300 km" },
            { letter: "C", text: "18,700 km" },
            { letter: "D", text: "12,300 km" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc3-rocks-leaving-orbit",
      family: "GEO",
      mode: "rocks",
      title: "Leaving Orbit",
      kind: "Circles · G.PC.3",
      blurb: "A probe leaves its orbit along a tangent line.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A circular orbit with center O and radius 900 kilometers around a small moon. Line TQ, 1,200 kilometers long, touches the orbit at T. Chord TA joins T to a beacon A on the orbit, and the gold arc TA measures 100 degrees. A dashed radius joins O to T, and a line from Q through O crosses the orbit at C and D\"><circle class=\"ln\" cx=\"104\" cy=\"94\" r=\"62\"/><circle class=\"sh2\" cx=\"104\" cy=\"94\" r=\"9\"/><path class=\"ac\" d=\"M165.1 104.8 A62 62 0 0 0 104 32\"/><line class=\"thin dash\" x1=\"64\" y1=\"32\" x2=\"104\" y2=\"32\"/><line class=\"ln\" x1=\"104\" y1=\"32\" x2=\"186.7\" y2=\"32\"/><line class=\"thin\" x1=\"104\" y1=\"32\" x2=\"165.1\" y2=\"104.8\"/><line class=\"thin dash\" x1=\"104\" y1=\"94\" x2=\"104\" y2=\"32\"/><line class=\"thin\" x1=\"54.4\" y1=\"131.2\" x2=\"186.7\" y2=\"32\"/><path class=\"thin\" d=\"M115.6 45.8 A18 18 0 0 0 122 32\"/><circle class=\"dt\" cx=\"104\" cy=\"94\" r=\"3\"/><circle class=\"dt\" cx=\"104\" cy=\"32\" r=\"3\"/><circle class=\"dt\" cx=\"165.1\" cy=\"104.8\" r=\"3\"/><circle class=\"dt\" cx=\"153.6\" cy=\"56.8\" r=\"3\"/><circle class=\"dt\" cx=\"54.4\" cy=\"131.2\" r=\"3\"/><circle class=\"dt\" cx=\"186.7\" cy=\"32\" r=\"3\"/><text x=\"94\" y=\"25\" text-anchor=\"middle\">T</text><text x=\"177.9\" y=\"112\" text-anchor=\"middle\">A</text><text x=\"165.6\" y=\"64.8\" text-anchor=\"middle\">C</text><text x=\"44\" y=\"144\" text-anchor=\"middle\">D</text><text x=\"199.7\" y=\"38\" text-anchor=\"middle\">Q</text><text x=\"90\" y=\"89\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"145.3\" y=\"25\" text-anchor=\"middle\">1,200 km</text><text class=\"sm\" x=\"78\" y=\"71\" text-anchor=\"middle\">900 km</text><text class=\"sm\" x=\"244\" y=\"88\" text-anchor=\"middle\">arc TA = 100°</text></svg></figure><p class=\"geo-given\">A probe circles a small moon on an orbit with center <strong>O</strong> and radius 900 km. At <strong>T</strong> it fires its engine and leaves along line <strong>TQ</strong>, which is tangent to the orbit at T. TQ = 1,200 km. A beacon at <strong>A</strong> is on the orbit, and m(arc TA) = 100°. Line QO crosses the orbit at <strong>C</strong> and <strong>D</strong>.</p>",
      claims: [
        {
          id: "qta",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠QTA, the angle between the probe's new path and chord TA?",
          choices: [
            { letter: "A", text: "100°" },
            { letter: "B", text: "25°" },
            { letter: "C", text: "50°" },
            { letter: "D", text: "130°" }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Why is △OTQ a right triangle?",
          choices: [
            { letter: "A", text: "OT and TQ are congruent sides." },
            { letter: "B", text: "OQ is a diameter of the orbit." },
            { letter: "C", text: "T is the midpoint of segment OQ." },
            { letter: "D", text: "TQ is tangent at T, so TQ ⊥ radius OT." }
          ],
          correct: "D"
        },
        {
          id: "oq",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How far is Q from the moon's center O?",
          choices: [
            { letter: "A", text: "2,100 km" },
            { letter: "B", text: "1,500 km" },
            { letter: "C", text: "about 794 km" },
            { letter: "D", text: "300 km" }
          ],
          correct: "B"
        },
        {
          id: "qc",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How far is Q from C, the nearest point of the orbit?",
          choices: [
            { letter: "A", text: "600 km" },
            { letter: "B", text: "1,500 km" },
            { letter: "C", text: "800 km" },
            { letter: "D", text: "300 km" }
          ],
          correct: "A"
        },
        {
          id: "arcat",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How far does the probe travel along the orbit from A to T on minor arc AT? Round to the nearest kilometer.",
          choices: [
            { letter: "A", text: "785 km" },
            { letter: "B", text: "3,142 km" },
            { letter: "C", text: "4,084 km" },
            { letter: "D", text: "1,571 km" }
          ],
          correct: "D"
        },
        {
          id: "time",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "One full trip around the orbit takes 3 hours. How many minutes does the probe take to go from A to T along minor arc AT?",
          choices: [
            { letter: "A", text: "25 min" },
            { letter: "B", text: "130 min" },
            { letter: "C", text: "50 min" },
            { letter: "D", text: "about 83 min" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc3-sky-locomotive-wheel",
      family: "GEO",
      mode: "sky",
      title: "The Locomotive Wheel",
      kind: "Circles · G.PC.3",
      blurb: "A 16-spoke wheel rolls along a straight rail.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A locomotive wheel with center O, diameter 180 centimeters and 16 equally spaced spokes. Spokes OA and OC are drawn darker and marked perpendicular, and the gold arc AC joins their ends. Dashed chords join B, the end of another spoke on the far side, to A and C. The wheel rests on a straight rail and touches it at T\"><line class=\"ln\" x1=\"24\" y1=\"142\" x2=\"296\" y2=\"142\"/><line class=\"thin\" x1=\"24\" y1=\"149\" x2=\"296\" y2=\"149\"/><circle class=\"ln\" cx=\"150\" cy=\"76\" r=\"66\"/><circle class=\"thin\" cx=\"150\" cy=\"76\" r=\"60\"/><line class=\"thin\" x1=\"157\" y1=\"76\" x2=\"216\" y2=\"76\"/><line class=\"thin\" x1=\"156.5\" y1=\"73.3\" x2=\"211\" y2=\"50.7\"/><line class=\"thin\" x1=\"152.7\" y1=\"69.5\" x2=\"175.3\" y2=\"15\"/><line class=\"thin\" x1=\"150\" y1=\"69\" x2=\"150\" y2=\"10\"/><line class=\"thin\" x1=\"147.3\" y1=\"69.5\" x2=\"124.7\" y2=\"15\"/><line class=\"thin\" x1=\"143.5\" y1=\"73.3\" x2=\"89\" y2=\"50.7\"/><line class=\"thin\" x1=\"143\" y1=\"76\" x2=\"84\" y2=\"76\"/><line class=\"thin\" x1=\"143.5\" y1=\"78.7\" x2=\"89\" y2=\"101.3\"/><line class=\"thin\" x1=\"145.1\" y1=\"80.9\" x2=\"103.3\" y2=\"122.7\"/><line class=\"thin\" x1=\"147.3\" y1=\"82.5\" x2=\"124.7\" y2=\"137\"/><line class=\"thin\" x1=\"150\" y1=\"83\" x2=\"150\" y2=\"142\"/><line class=\"thin\" x1=\"152.7\" y1=\"82.5\" x2=\"175.3\" y2=\"137\"/><line class=\"thin\" x1=\"154.9\" y1=\"80.9\" x2=\"196.7\" y2=\"122.7\"/><line class=\"thin\" x1=\"156.5\" y1=\"78.7\" x2=\"211\" y2=\"101.3\"/><circle class=\"thin\" cx=\"150\" cy=\"76\" r=\"7\"/><line class=\"ln\" x1=\"145.1\" y1=\"71.1\" x2=\"103.3\" y2=\"29.3\"/><line class=\"ln\" x1=\"154.9\" y1=\"71.1\" x2=\"196.7\" y2=\"29.3\"/><path class=\"ac\" d=\"M196.7 29.3 A66 66 0 0 0 103.3 29.3\"/><path class=\"ln\" d=\"M159.2 66.8 L150 57.6 L140.8 66.8\"/><line class=\"thin\" x1=\"89\" y1=\"101.3\" x2=\"103.3\" y2=\"29.3\"/><line class=\"thin\" x1=\"89\" y1=\"101.3\" x2=\"196.7\" y2=\"29.3\"/><circle class=\"dt\" cx=\"150\" cy=\"76\" r=\"3\"/><circle class=\"dt\" cx=\"103.3\" cy=\"29.3\" r=\"3\"/><circle class=\"dt\" cx=\"89\" cy=\"101.3\" r=\"3\"/><circle class=\"dt\" cx=\"196.7\" cy=\"29.3\" r=\"3\"/><circle class=\"dt\" cx=\"150\" cy=\"142\" r=\"3\"/><text x=\"94.1\" y=\"25.1\" text-anchor=\"middle\">A</text><text x=\"77\" y=\"111.2\" text-anchor=\"middle\">B</text><text x=\"205.9\" y=\"25.1\" text-anchor=\"middle\">C</text><text x=\"138\" y=\"164\" text-anchor=\"middle\">T</text><text x=\"146.7\" y=\"97.7\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"270\" y=\"56\" text-anchor=\"middle\">diameter</text><text class=\"sm\" x=\"270\" y=\"70\" text-anchor=\"middle\">180 cm</text><text class=\"sm\" x=\"272\" y=\"138\" text-anchor=\"middle\">rail</text></svg></figure><p class=\"geo-given\">A locomotive wheel has center <strong>O</strong>, a diameter of 180 cm and 16 equally spaced spokes. Spokes <strong>OA</strong> and <strong>OC</strong> are perpendicular, and <strong>B</strong> is the end of another spoke. The wheel rolls along a straight rail and touches it at <strong>T</strong>.</p>",
      claims: [
        {
          id: "spoke",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is the central angle between two spokes next to each other?",
          choices: [
            { letter: "A", text: "22.5°" },
            { letter: "B", text: "11.25°" },
            { letter: "C", text: "45°" },
            { letter: "D", text: "157.5°" }
          ],
          correct: "A"
        },
        {
          id: "roll",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "The wheel makes one full turn without slipping. How far does the train move? Round to the nearest centimeter.",
          choices: [
            { letter: "A", text: "283 cm" },
            { letter: "B", text: "1,131 cm" },
            { letter: "C", text: "565 cm" },
            { letter: "D", text: "25,447 cm" }
          ],
          correct: "C"
        },
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is arc AC along the rim? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "22.5π cm" },
            { letter: "B", text: "45π cm" },
            { letter: "C", text: "90π cm" },
            { letter: "D", text: "2,025π cm" }
          ],
          correct: "B"
        },
        {
          id: "rail",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which statement about radius OT and the rail must be true?",
          choices: [
            { letter: "A", text: "OT is parallel to the rail." },
            { letter: "B", text: "OT meets the rail at a 22.5° angle." },
            { letter: "C", text: "OT meets the rail at a 45° angle." },
            { letter: "D", text: "OT is perpendicular to the rail." }
          ],
          correct: "D"
        },
        {
          id: "abc",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠ABC, the angle at B between the chords to A and C?",
          choices: [
            { letter: "A", text: "45°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "135°" },
            { letter: "D", text: "22.5°" }
          ],
          correct: "A"
        },
        {
          id: "tender",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "A smaller wheel has a 60° arc between two spokes that is 15π cm long. What is that wheel's radius?",
          choices: [
            { letter: "A", text: "90 cm" },
            { letter: "B", text: "7.5 cm" },
            { letter: "C", text: "45 cm" },
            { letter: "D", text: "about 9.5 cm" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc3-sky-compass-rose",
      family: "GEO",
      mode: "sky",
      title: "The Compass Rose",
      kind: "Circles · G.PC.3",
      blurb: "Bearings on a round compass rose.",
      level: 1,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A compass rose drawn as a circle with center O and radius 12 centimeters, with tick marks every 30 degrees. N, E, S and W are on the circle, with dashed diameters NS and WE. Point A at bearing 060 is joined to O, and chords join A to N and to S. The gold arc NA measures 60 degrees\"><circle class=\"ln\" cx=\"160\" cy=\"85\" r=\"60\"/><line class=\"thin\" x1=\"214\" y1=\"85\" x2=\"220\" y2=\"85\"/><line class=\"thin\" x1=\"206.8\" y1=\"58\" x2=\"212\" y2=\"55\"/><line class=\"thin\" x1=\"187\" y1=\"38.2\" x2=\"190\" y2=\"33\"/><line class=\"thin\" x1=\"160\" y1=\"31\" x2=\"160\" y2=\"25\"/><line class=\"thin\" x1=\"133\" y1=\"38.2\" x2=\"130\" y2=\"33\"/><line class=\"thin\" x1=\"113.2\" y1=\"58\" x2=\"108\" y2=\"55\"/><line class=\"thin\" x1=\"106\" y1=\"85\" x2=\"100\" y2=\"85\"/><line class=\"thin\" x1=\"113.2\" y1=\"112\" x2=\"108\" y2=\"115\"/><line class=\"thin\" x1=\"133\" y1=\"131.8\" x2=\"130\" y2=\"137\"/><line class=\"thin\" x1=\"160\" y1=\"139\" x2=\"160\" y2=\"145\"/><line class=\"thin\" x1=\"187\" y1=\"131.8\" x2=\"190\" y2=\"137\"/><line class=\"thin\" x1=\"206.8\" y1=\"112\" x2=\"212\" y2=\"115\"/><polygon class=\"thin\" points=\"160,67 163.5,81.5 178,85 163.5,88.5 160,103 156.5,88.5 142,85 156.5,81.5\"/><line class=\"thin dash\" x1=\"160\" y1=\"25\" x2=\"160\" y2=\"145\"/><line class=\"thin dash\" x1=\"100\" y1=\"85\" x2=\"220\" y2=\"85\"/><line class=\"thin\" x1=\"160\" y1=\"85\" x2=\"212\" y2=\"55\"/><line class=\"ln\" x1=\"160\" y1=\"25\" x2=\"212\" y2=\"55\"/><line class=\"ln\" x1=\"212\" y1=\"55\" x2=\"160\" y2=\"145\"/><path class=\"ac\" d=\"M212 55 A60 60 0 0 0 160 25\"/><circle class=\"dt\" cx=\"160\" cy=\"85\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"25\" r=\"3\"/><circle class=\"dt\" cx=\"220\" cy=\"85\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"145\" r=\"3\"/><circle class=\"dt\" cx=\"100\" cy=\"85\" r=\"3\"/><circle class=\"dt\" cx=\"212\" cy=\"55\" r=\"3\"/><text x=\"160\" y=\"17\" text-anchor=\"middle\">N</text><text x=\"233\" y=\"90\" text-anchor=\"middle\">E</text><text x=\"160\" y=\"163\" text-anchor=\"middle\">S</text><text x=\"87\" y=\"90\" text-anchor=\"middle\">W</text><text x=\"223.2\" y=\"53.5\" text-anchor=\"middle\">A</text><text x=\"149\" y=\"106\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"174.9\" y=\"58.4\" text-anchor=\"middle\">60°</text><text class=\"sm\" x=\"246\" y=\"51\" text-anchor=\"middle\">060°</text><text class=\"sm\" x=\"46\" y=\"34\" text-anchor=\"middle\">r = 12 cm</text></svg></figure><p class=\"geo-given\">A compass rose on a travel map is a circle with center <strong>O</strong> and radius 12 cm. Points <strong>N</strong>, <strong>E</strong>, <strong>S</strong> and <strong>W</strong> on the circle mark north, east, south and west, so NS and WE are diameters. Point <strong>A</strong> on the circle marks the bearing 060°, which is 60° clockwise from north.</p>",
      claims: [
        {
          id: "aos",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠AOS?",
          choices: [
            { letter: "A", text: "60°" },
            { letter: "B", text: "240°" },
            { letter: "C", text: "30°" },
            { letter: "D", text: "120°" }
          ],
          correct: "D"
        },
        {
          id: "nas",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠NAS, the angle at A between the chords to N and S?",
          choices: [
            { letter: "A", text: "60°" },
            { letter: "B", text: "90°" },
            { letter: "C", text: "120°" },
            { letter: "D", text: "180°" }
          ],
          correct: "B"
        },
        {
          id: "nsa",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠NSA, the angle at S between the diameter SN and the chord SA?",
          choices: [
            { letter: "A", text: "60°" },
            { letter: "B", text: "120°" },
            { letter: "C", text: "30°" },
            { letter: "D", text: "90°" }
          ],
          correct: "C"
        },
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is arc NA? Give the answer in terms of π.",
          choices: [
            { letter: "A", text: "4π cm" },
            { letter: "B", text: "2π cm" },
            { letter: "C", text: "8π cm" },
            { letter: "D", text: "24π cm" }
          ],
          correct: "A"
        },
        {
          id: "sector",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "What is the area of sector AOE, between bearing 060° and due east? Round to the nearest tenth of a square centimeter.",
          choices: [
            { letter: "A", text: "75.4 cm²" },
            { letter: "B", text: "6.3 cm²" },
            { letter: "C", text: "150.8 cm²" },
            { letter: "D", text: "37.7 cm²" }
          ],
          correct: "D"
        },
        {
          id: "boat",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "A tour boat circles a lighthouse, staying 3 km from it. It sails clockwise from due north of the lighthouse to bearing 060°. How far does it sail? Round to the nearest tenth of a kilometer.",
          choices: [
            { letter: "A", text: "1.6 km" },
            { letter: "B", text: "3.1 km" },
            { letter: "C", text: "6.3 km" },
            { letter: "D", text: "4.7 km" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-sky-roundabout",
      family: "GEO",
      mode: "sky",
      title: "The Roundabout",
      kind: "Circles · G.PC.3",
      blurb: "Four roads meet a round island; paths join them.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A roundabout: a shaded circular island with center O inside a ring road, with four roads meeting it at A, B, C and D. Straight paths join the four points to form quadrilateral ABCD. The angle at A is marked 95 degrees, the angle at B is marked 80 degrees, and the gold arc AB is marked 70 degrees\"><line class=\"thin\" x1=\"93.6\" y1=\"70.4\" x2=\"2\" y2=\"37.1\"/><line class=\"thin\" x1=\"99.7\" y1=\"53.5\" x2=\"2\" y2=\"17.9\"/><line class=\"thin\" x1=\"123.6\" y1=\"142.4\" x2=\"102.1\" y2=\"168\"/><line class=\"thin\" x1=\"109.8\" y1=\"130.8\" x2=\"78.6\" y2=\"168\"/><line class=\"thin\" x1=\"227.4\" y1=\"76\" x2=\"318\" y2=\"76\"/><line class=\"thin\" x1=\"227.4\" y1=\"94\" x2=\"318\" y2=\"94\"/><line class=\"thin\" x1=\"185.9\" y1=\"22.1\" x2=\"197.5\" y2=\"2\"/><line class=\"thin\" x1=\"201.5\" y1=\"31.1\" x2=\"218.3\" y2=\"2\"/><circle class=\"thin\" cx=\"160\" cy=\"85\" r=\"68\"/><circle class=\"sh2\" cx=\"160\" cy=\"85\" r=\"44\"/><path class=\"ac\" d=\"M118.7 70 A44 44 0 0 0 131.7 118.7\"/><polygon class=\"ln\" points=\"118.7,70 131.7,118.7 204,85 182,46.9\"/><path class=\"thin\" d=\"M121.5 80.6 A11 11 0 0 0 129 66.2\"/><path class=\"thin\" d=\"M141.7 114.1 A11 11 0 0 0 128.9 108.1\"/><circle class=\"dt\" cx=\"160\" cy=\"85\" r=\"3\"/><circle class=\"dt\" cx=\"118.7\" cy=\"70\" r=\"3\"/><circle class=\"dt\" cx=\"131.7\" cy=\"118.7\" r=\"3\"/><circle class=\"dt\" cx=\"204\" cy=\"85\" r=\"3\"/><circle class=\"dt\" cx=\"182\" cy=\"46.9\" r=\"3\"/><text x=\"109.3\" y=\"71.5\" text-anchor=\"middle\">A</text><text x=\"125.3\" y=\"131.4\" text-anchor=\"middle\">B</text><text x=\"214\" y=\"90\" text-anchor=\"middle\">C</text><text x=\"187\" y=\"43.2\" text-anchor=\"middle\">D</text><text x=\"164\" y=\"79\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"138.2\" y=\"84.1\" text-anchor=\"middle\">95°</text><text class=\"sm\" x=\"140.6\" y=\"103.7\" text-anchor=\"middle\">80°</text><text class=\"sm\" x=\"105.9\" y=\"103.5\" text-anchor=\"middle\">70°</text></svg></figure><p class=\"geo-given\">A roundabout's central island is a circle with center <strong>O</strong> and radius 15 m. Four roads meet it at <strong>A</strong>, <strong>B</strong>, <strong>C</strong> and <strong>D</strong>. Straight paths across the island join these points to form quadrilateral ABCD. m∠DAB = 95°, m∠ABC = 80° and m(arc AB) = 70°.</p>",
      claims: [
        {
          id: "bcd",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠BCD?",
          choices: [
            { letter: "A", text: "95°" },
            { letter: "B", text: "85°" },
            { letter: "C", text: "100°" },
            { letter: "D", text: "170°" }
          ],
          correct: "B"
        },
        {
          id: "acb",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠ACB, the angle at C between the lines to A and B?",
          choices: [
            { letter: "A", text: "35°" },
            { letter: "B", text: "70°" },
            { letter: "C", text: "140°" },
            { letter: "D", text: "145°" }
          ],
          correct: "A"
        },
        {
          id: "arccd",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m(arc CD)?",
          choices: [
            { letter: "A", text: "190°" },
            { letter: "B", text: "160°" },
            { letter: "C", text: "100°" },
            { letter: "D", text: "60°" }
          ],
          correct: "D"
        },
        {
          id: "curb",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is the curb of the island from A to B along arc AB? Round to the nearest tenth of a meter.",
          choices: [
            { letter: "A", text: "9.2 m" },
            { letter: "B", text: "36.7 m" },
            { letter: "C", text: "18.3 m" },
            { letter: "D", text: "94.2 m" }
          ],
          correct: "C"
        },
        {
          id: "sector",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "Flowers are planted in sector AOB. To the nearest tenth of a square meter, what is its area?",
          choices: [
            { letter: "A", text: "18.3 m²" },
            { letter: "B", text: "549.8 m²" },
            { letter: "C", text: "68.7 m²" },
            { letter: "D", text: "137.4 m²" }
          ],
          correct: "D"
        },
        {
          id: "lane",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "Cars drive around the island on a circle with radius 20 m. Planners want a car to drive at most 50 m on that circle between two entrances. To the nearest degree, what is the largest central angle between the entrances?",
          choices: [
            { letter: "A", text: "143°" },
            { letter: "B", text: "286°" },
            { letter: "C", text: "72°" },
            { letter: "D", text: "14°" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc3-sky-airport-radar",
      family: "GEO",
      mode: "sky",
      title: "The Airport Radar",
      kind: "Circles · G.PC.3",
      blurb: "A plane crosses a radar circle; a helicopter skims it.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"An airport radar range drawn as a circle with center O and a dashed inner ring. From a point P outside the circle, a straight plane path crosses the circle at A and then B, with PA 20 kilometers and AB 25 kilometers. A second straight path from P touches the circle only at T. Dashed segments join O to T and O to P\"><circle class=\"ln\" cx=\"100\" cy=\"87\" r=\"65.6\"/><circle class=\"thin dash\" cx=\"100\" cy=\"87\" r=\"32.8\"/><line class=\"ln\" x1=\"235.3\" y1=\"53.3\" x2=\"77.2\" y2=\"148.5\"/><line class=\"ln\" x1=\"235.3\" y1=\"53.3\" x2=\"116\" y2=\"23.4\"/><line class=\"thin dash\" x1=\"100\" y1=\"87\" x2=\"116\" y2=\"23.4\"/><line class=\"thin dash\" x1=\"100\" y1=\"87\" x2=\"235.3\" y2=\"53.3\"/><circle class=\"dt\" cx=\"100\" cy=\"87\" r=\"3\"/><circle class=\"dt\" cx=\"235.3\" cy=\"53.3\" r=\"3\"/><circle class=\"dt\" cx=\"116\" cy=\"23.4\" r=\"3\"/><circle class=\"dt\" cx=\"165\" cy=\"95.6\" r=\"3\"/><circle class=\"dt\" cx=\"77.2\" cy=\"148.5\" r=\"3\"/><text x=\"247.3\" y=\"52.3\" text-anchor=\"middle\">P</text><text x=\"118.9\" y=\"16.7\" text-anchor=\"middle\">T</text><text x=\"173\" y=\"114.6\" text-anchor=\"middle\">A</text><text x=\"65.2\" y=\"161.5\" text-anchor=\"middle\">B</text><text x=\"88\" y=\"96\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"206.3\" y=\"88.7\" text-anchor=\"middle\">20 km</text><text class=\"sm\" x=\"126.8\" y=\"135.5\" text-anchor=\"middle\">25 km</text><text class=\"sm\" x=\"40\" y=\"20\" text-anchor=\"middle\">radar range</text></svg></figure><p class=\"geo-given\">An airport radar at <strong>O</strong> tracks planes inside a circle with radius 16 km. A plane flies a straight path from <strong>P</strong> that crosses the circle at <strong>A</strong> and <strong>B</strong>: PA = 20 km and AB = 25 km. A helicopter flies straight from P on a path that touches the circle only at <strong>T</strong>.</p>",
      claims: [
        {
          id: "pt",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How far does the helicopter fly from P to T?",
          choices: [
            { letter: "A", text: "about 22.4 km" },
            { letter: "B", text: "32.5 km" },
            { letter: "C", text: "30 km" },
            { letter: "D", text: "45 km" }
          ],
          correct: "C"
        },
        {
          id: "eq",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Which equation is true for the two paths from P?",
          choices: [
            { letter: "A", text: "PT² = PA · AB" },
            { letter: "B", text: "PT² = PA · PB" },
            { letter: "C", text: "PT² = PA² + AB²" },
            { letter: "D", text: "PT · PB = PA · AB" }
          ],
          correct: "B"
        },
        {
          id: "op",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "How far is P from the radar at O?",
          choices: [
            { letter: "A", text: "34 km" },
            { letter: "B", text: "46 km" },
            { letter: "C", text: "about 25.4 km" },
            { letter: "D", text: "14 km" }
          ],
          correct: "A"
        },
        {
          id: "other",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "From a point Q outside another radar circle, one path touches the circle and another crosses it. The far arc between the paths measures 170°, and the near arc measures 50°. What is the angle at Q?",
          choices: [
            { letter: "A", text: "110°" },
            { letter: "B", text: "120°" },
            { letter: "C", text: "85°" },
            { letter: "D", text: "60°" }
          ],
          correct: "D"
        },
        {
          id: "error",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Lena finds PT by writing PT² = 20 · 25. What is her mistake?",
          choices: [
            { letter: "A", text: "She must add the parts: PT = 20 + 25." },
            { letter: "B", text: "She must use the whole path: PT² = 20 · 45." },
            { letter: "C", text: "She must square both: PT² = 20² + 25²." },
            { letter: "D", text: "She made no mistake, so PT ≈ 22.4 km." }
          ],
          correct: "B"
        },
        {
          id: "angle",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "To the nearest degree, what is m∠TPO, the angle at P between the helicopter's path and the line to the radar?",
          choices: [
            { letter: "A", text: "62°" },
            { letter: "B", text: "32°" },
            { letter: "C", text: "28°" },
            { letter: "D", text: "25°" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-pc3-sky-ships-wheel",
      family: "GEO",
      mode: "sky",
      title: "The Ship's Wheel",
      kind: "Circles · G.PC.3",
      blurb: "Two ropes cross a 10-handled ship's wheel.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"A ship's wheel with center O, a rim of radius 40 centimeters and 10 equally spaced handles. Points A, B, C and D on the rim are beside handles; going around, there are 2 gaps from A to B, 2 from B to C, 4 from C to D and 2 from D to A. Ropes AC and BD cross at E, and a gold arc marks angle BEC\"><circle class=\"ln\" cx=\"150\" cy=\"85\" r=\"54\"/><circle class=\"thin\" cx=\"150\" cy=\"85\" r=\"48\"/><circle class=\"thin\" cx=\"150\" cy=\"85\" r=\"9\"/><line class=\"gr\" x1=\"147.2\" y1=\"76.4\" x2=\"133.3\" y2=\"33.6\"/><line class=\"ln\" x1=\"132.4\" y1=\"30.8\" x2=\"128.3\" y2=\"18.2\"/><line class=\"gr\" x1=\"152.8\" y1=\"76.4\" x2=\"166.7\" y2=\"33.6\"/><line class=\"ln\" x1=\"167.6\" y1=\"30.8\" x2=\"171.7\" y2=\"18.2\"/><line class=\"gr\" x1=\"157.3\" y1=\"79.7\" x2=\"193.7\" y2=\"53.3\"/><line class=\"ln\" x1=\"196.1\" y1=\"51.5\" x2=\"206.8\" y2=\"43.7\"/><line class=\"gr\" x1=\"159\" y1=\"85\" x2=\"204\" y2=\"85\"/><line class=\"ln\" x1=\"207\" y1=\"85\" x2=\"220.2\" y2=\"85\"/><line class=\"gr\" x1=\"157.3\" y1=\"90.3\" x2=\"193.7\" y2=\"116.7\"/><line class=\"ln\" x1=\"196.1\" y1=\"118.5\" x2=\"206.8\" y2=\"126.3\"/><line class=\"gr\" x1=\"152.8\" y1=\"93.6\" x2=\"166.7\" y2=\"136.4\"/><line class=\"ln\" x1=\"167.6\" y1=\"139.2\" x2=\"171.7\" y2=\"151.8\"/><line class=\"gr\" x1=\"147.2\" y1=\"93.6\" x2=\"133.3\" y2=\"136.4\"/><line class=\"ln\" x1=\"132.4\" y1=\"139.2\" x2=\"128.3\" y2=\"151.8\"/><line class=\"gr\" x1=\"142.7\" y1=\"90.3\" x2=\"106.3\" y2=\"116.7\"/><line class=\"ln\" x1=\"103.9\" y1=\"118.5\" x2=\"93.2\" y2=\"126.3\"/><line class=\"gr\" x1=\"141\" y1=\"85\" x2=\"96\" y2=\"85\"/><line class=\"ln\" x1=\"93\" y1=\"85\" x2=\"79.8\" y2=\"85\"/><line class=\"gr\" x1=\"142.7\" y1=\"79.7\" x2=\"106.3\" y2=\"53.3\"/><line class=\"ln\" x1=\"103.9\" y1=\"51.5\" x2=\"93.2\" y2=\"43.7\"/><line class=\"ln\" x1=\"133.3\" y1=\"33.6\" x2=\"193.7\" y2=\"116.7\"/><line class=\"ln\" x1=\"193.7\" y1=\"53.3\" x2=\"96\" y2=\"85\"/><path class=\"ac\" d=\"M164 75.9 A13 13 0 0 0 168.7 61.4\"/><circle class=\"dt\" cx=\"150\" cy=\"85\" r=\"3\"/><circle class=\"dt\" cx=\"133.3\" cy=\"33.6\" r=\"3\"/><circle class=\"dt\" cx=\"193.7\" cy=\"53.3\" r=\"3\"/><circle class=\"dt\" cx=\"193.7\" cy=\"116.7\" r=\"3\"/><circle class=\"dt\" cx=\"96\" cy=\"85\" r=\"3\"/><circle class=\"dt\" cx=\"156.4\" cy=\"65.4\" r=\"3\"/><text x=\"113.3\" y=\"37.6\" text-anchor=\"middle\">A</text><text x=\"188.5\" y=\"38.9\" text-anchor=\"middle\">B</text><text x=\"210.5\" y=\"110.8\" text-anchor=\"middle\">C</text><text x=\"88.8\" y=\"108.7\" text-anchor=\"middle\">D</text><text x=\"160.7\" y=\"57.1\" text-anchor=\"middle\">E</text><text x=\"144.4\" y=\"107.1\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"268\" y=\"34\" text-anchor=\"middle\">10 handles,</text><text class=\"sm\" x=\"268\" y=\"48\" text-anchor=\"middle\">equally spaced</text><text class=\"sm\" x=\"268\" y=\"154\" text-anchor=\"middle\">rim r = 40 cm</text></svg></figure><p class=\"geo-given\">A ship's wheel has center <strong>O</strong> and 10 handles equally spaced around a rim with radius 40 cm. Ropes are tied to the rim beside handles <strong>A</strong>, <strong>B</strong>, <strong>C</strong> and <strong>D</strong>. Going around, there are 2 gaps from A to B, 2 from B to C, 4 from C to D and 2 from D back to A. Rope AC and rope BD cross at <strong>E</strong>.</p>",
      claims: [
        {
          id: "aoc",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠AOC, the central angle from A to C?",
          choices: [
            { letter: "A", text: "72°" },
            { letter: "B", text: "144°" },
            { letter: "C", text: "36°" },
            { letter: "D", text: "160°" }
          ],
          correct: "B"
        },
        {
          id: "abc",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠ABC, the angle at B between the lines to A and C?",
          choices: [
            { letter: "A", text: "216°" },
            { letter: "B", text: "72°" },
            { letter: "C", text: "108°" },
            { letter: "D", text: "144°" }
          ],
          correct: "C"
        },
        {
          id: "bec",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠BEC, where the ropes cross?",
          choices: [
            { letter: "A", text: "72°" },
            { letter: "B", text: "144°" },
            { letter: "C", text: "108°" },
            { letter: "D", text: "36°" }
          ],
          correct: "A"
        },
        {
          id: "move",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "The helmsman turns the wheel the short way until the rim point at A reaches the spot where B was. How far does that point travel? Round to the nearest tenth of a centimeter.",
          choices: [
            { letter: "A", text: "25.1 cm" },
            { letter: "B", text: "100.5 cm" },
            { letter: "C", text: "1,005.3 cm" },
            { letter: "D", text: "50.3 cm" }
          ],
          correct: "D"
        },
        {
          id: "tip",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "The tip of each handle is 52 cm from O. The wheel turns 1¼ full turns. How far does a handle tip travel? Round to the nearest centimeter.",
          choices: [
            { letter: "A", text: "408 cm" },
            { letter: "B", text: "314 cm" },
            { letter: "C", text: "327 cm" },
            { letter: "D", text: "204 cm" }
          ],
          correct: "A"
        },
        {
          id: "rope",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "On another ship's wheel, two straight ropes cross. One rope is cut into pieces of 18 cm and 32 cm. One piece of the other rope is 16 cm. How long is its other piece?",
          choices: [
            { letter: "A", text: "9 cm" },
            { letter: "B", text: "36 cm" },
            { letter: "C", text: "34 cm" },
            { letter: "D", text: "about 28.4 cm" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-pc3-sky-road-tunnel",
      family: "GEO",
      mode: "sky",
      title: "The Road Tunnel",
      kind: "Circles · G.PC.3",
      blurb: "A flat road crosses a round tunnel.",
      level: 2,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"A road tunnel's cross-section: a circle with center O. The flat road is chord AB with midpoint M, and AB is 12 meters. A dashed vertical line through O and M meets the circle at the top C and the bottom D, with a right angle marked at M; MD is 3 meters. Thin chords join C to A and to B, and A to D, and dashed radii join O to A and to B\"><circle class=\"ln\" cx=\"150\" cy=\"80\" r=\"67.5\"/><line class=\"ln\" x1=\"96\" y1=\"120.5\" x2=\"204\" y2=\"120.5\"/><line class=\"thin dash\" x1=\"150\" y1=\"12.5\" x2=\"150\" y2=\"147.5\"/><line class=\"thin\" x1=\"150\" y1=\"12.5\" x2=\"96\" y2=\"120.5\"/><line class=\"thin\" x1=\"150\" y1=\"12.5\" x2=\"204\" y2=\"120.5\"/><line class=\"thin\" x1=\"96\" y1=\"120.5\" x2=\"150\" y2=\"147.5\"/><line class=\"thin dash\" x1=\"150\" y1=\"80\" x2=\"96\" y2=\"120.5\"/><line class=\"thin dash\" x1=\"150\" y1=\"80\" x2=\"204\" y2=\"120.5\"/><path class=\"thin\" d=\"M157 120.5 L157 113.5 L150 113.5\"/><circle class=\"dt\" cx=\"150\" cy=\"80\" r=\"3\"/><circle class=\"dt\" cx=\"96\" cy=\"120.5\" r=\"3\"/><circle class=\"dt\" cx=\"204\" cy=\"120.5\" r=\"3\"/><circle class=\"dt\" cx=\"150\" cy=\"12.5\" r=\"3\"/><circle class=\"dt\" cx=\"150\" cy=\"147.5\" r=\"3\"/><circle class=\"dt\" cx=\"150\" cy=\"120.5\" r=\"3\"/><text x=\"83\" y=\"121.5\" text-anchor=\"middle\">A</text><text x=\"217\" y=\"121.5\" text-anchor=\"middle\">B</text><text x=\"166\" y=\"24.5\" text-anchor=\"middle\">C</text><text x=\"162\" y=\"161.5\" text-anchor=\"middle\">D</text><text x=\"138\" y=\"140.5\" text-anchor=\"middle\">M</text><text x=\"163\" y=\"87\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"266\" y=\"124\" text-anchor=\"middle\">AB = 12 m</text><text class=\"sm\" x=\"266\" y=\"140\" text-anchor=\"middle\">MD = 3 m</text><text class=\"sm\" x=\"266\" y=\"44\" text-anchor=\"middle\">road tunnel</text></svg></figure><p class=\"geo-given\">A road tunnel's cross-section is a circle with center <strong>O</strong>. The flat road is chord <strong>AB</strong>, 12 m wide, with midpoint <strong>M</strong>. A vertical line through O and M meets the tunnel at the top <strong>C</strong> and the bottom <strong>D</strong>, and it is perpendicular to the road. MD = 3 m.</p>",
      claims: [
        {
          id: "cm",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How high is the top of the tunnel above the road (the length CM)?",
          choices: [
            { letter: "A", text: "24 m" },
            { letter: "B", text: "9 m" },
            { letter: "C", text: "6 m" },
            { letter: "D", text: "12 m" }
          ],
          correct: "D"
        },
        {
          id: "radius",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "What is the radius of the tunnel?",
          choices: [
            { letter: "A", text: "15 m" },
            { letter: "B", text: "12 m" },
            { letter: "C", text: "7.5 m" },
            { letter: "D", text: "6 m" }
          ],
          correct: "C"
        },
        {
          id: "rel",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which statement about ∠ACB and ∠AOB is true?",
          choices: [
            { letter: "A", text: "m∠ACB = 2 · m∠AOB" },
            { letter: "B", text: "m∠AOB = 2 · m∠ACB" },
            { letter: "C", text: "m∠ACB = m∠AOB" },
            { letter: "D", text: "m∠ACB + m∠AOB = 180°" }
          ],
          correct: "B"
        },
        {
          id: "cad",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠CAD? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "90°, because CD is a diameter" },
            { letter: "B", text: "45°, because AC bisects ∠MAD" },
            { letter: "C", text: "180°, because it equals its arc" },
            { letter: "D", text: "60°, because △ACD is equilateral" }
          ],
          correct: "A"
        },
        {
          id: "lining",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "The tunnel's lining above the road is arc ACB. Use m∠AOB ≈ 106.3°. How long is arc ACB? Round to the nearest tenth of a meter.",
          choices: [
            { letter: "A", text: "13.9 m" },
            { letter: "B", text: "16.6 m" },
            { letter: "C", text: "33.2 m" },
            { letter: "D", text: "66.4 m" }
          ],
          correct: "C"
        },
        {
          id: "sign",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "A sign hangs from the ceiling 3 m to the side of line CD. To the nearest tenth of a meter, how high is the ceiling above the road there?",
          choices: [
            { letter: "A", text: "12.0 m" },
            { letter: "B", text: "6.9 m" },
            { letter: "C", text: "2.4 m" },
            { letter: "D", text: "11.4 m" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-pc3-sky-rail-curve",
      family: "GEO",
      mode: "sky",
      title: "The Rail Curve",
      kind: "Circles · G.PC.3",
      blurb: "A curved track joins two straight ones.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 168\" role=\"img\" aria-label=\"A railroad curve drawn as gold arc AB of a circle with center O and radius 600 meters; dashed radii OA and OB form a 50 degree angle. Straight tracks leave the curve at A and B, marked perpendicular to the radii, and their dashed extensions meet at P above the curve. A thin chord joins A and B\"><line class=\"ln\" x1=\"28.9\" y1=\"73.7\" x2=\"105.1\" y2=\"38.2\"/><line class=\"ln\" x1=\"291.1\" y1=\"73.7\" x2=\"214.9\" y2=\"38.2\"/><line class=\"thin dash\" x1=\"105.1\" y1=\"38.2\" x2=\"160\" y2=\"12.6\"/><line class=\"thin dash\" x1=\"214.9\" y1=\"38.2\" x2=\"160\" y2=\"12.6\"/><path class=\"ac\" d=\"M214.9 38.2 A130 130 0 0 0 105.1 38.2\"/><line class=\"thin dash\" x1=\"160\" y1=\"156\" x2=\"105.1\" y2=\"38.2\"/><line class=\"thin dash\" x1=\"160\" y1=\"156\" x2=\"214.9\" y2=\"38.2\"/><line class=\"thin\" x1=\"105.1\" y1=\"38.2\" x2=\"214.9\" y2=\"38.2\"/><path class=\"thin\" d=\"M108 44.5 L114.4 41.6 L111.4 35.2\"/><path class=\"thin\" d=\"M212 44.5 L205.6 41.6 L208.6 35.2\"/><path class=\"thin\" d=\"M168.5 137.9 A20 20 0 0 0 151.5 137.9\"/><circle class=\"dt\" cx=\"160\" cy=\"156\" r=\"3\"/><circle class=\"dt\" cx=\"105.1\" cy=\"38.2\" r=\"3\"/><circle class=\"dt\" cx=\"214.9\" cy=\"38.2\" r=\"3\"/><circle class=\"dt\" cx=\"160\" cy=\"12.6\" r=\"3\"/><text x=\"99.1\" y=\"30.2\" text-anchor=\"middle\">A</text><text x=\"220.9\" y=\"30.2\" text-anchor=\"middle\">B</text><text x=\"173\" y=\"14.6\" text-anchor=\"middle\">P</text><text x=\"173\" y=\"163\" text-anchor=\"middle\">O</text><text class=\"sm\" x=\"160\" y=\"130\" text-anchor=\"middle\">50°</text><text class=\"sm\" x=\"110.5\" y=\"101.1\" text-anchor=\"middle\">600 m</text><text class=\"sm\" x=\"32.9\" y=\"93.7\" text-anchor=\"middle\">track</text><text class=\"sm\" x=\"287.1\" y=\"93.7\" text-anchor=\"middle\">track</text></svg></figure><p class=\"geo-given\">A railroad curve is arc <strong>AB</strong> of a circle with center <strong>O</strong> and radius 600 m, and m∠AOB = 50°. The straight tracks on each side are tangent to the curve at A and B. Extended, they meet at <strong>P</strong>.</p>",
      claims: [
        {
          id: "apb",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "What is m∠APB, the angle where the extended tracks meet?",
          choices: [
            { letter: "A", text: "130°" },
            { letter: "B", text: "50°" },
            { letter: "C", text: "25°" },
            { letter: "D", text: "155°" }
          ],
          correct: "A"
        },
        {
          id: "arc",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "How long is the curved track, arc AB? Round to the nearest meter.",
          choices: [
            { letter: "A", text: "262 m" },
            { letter: "B", text: "1,047 m" },
            { letter: "C", text: "157,080 m" },
            { letter: "D", text: "524 m" }
          ],
          correct: "D"
        },
        {
          id: "pa",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "How far is it from A to P along the extended track? Round to the nearest meter.",
          choices: [
            { letter: "A", text: "254 m" },
            { letter: "B", text: "544 m" },
            { letter: "C", text: "280 m" },
            { letter: "D", text: "1,287 m" }
          ],
          correct: "C"
        },
        {
          id: "pab",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "A survey line runs straight from A to B. What is m∠PAB, the angle between the survey line and the tangent track?",
          choices: [
            { letter: "A", text: "50°" },
            { letter: "B", text: "25°" },
            { letter: "C", text: "65°" },
            { letter: "D", text: "100°" }
          ],
          correct: "B"
        },
        {
          id: "chord",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "How long is the straight survey line AB? Round to the nearest meter.",
          choices: [
            { letter: "A", text: "524 m" },
            { letter: "B", text: "254 m" },
            { letter: "C", text: "507 m" },
            { letter: "D", text: "1,088 m" }
          ],
          correct: "C"
        },
        {
          id: "radius",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "On another line, a curve turns through 25° and is 500 m long. To the nearest meter, what is its radius?",
          choices: [
            { letter: "A", text: "1,146 m" },
            { letter: "B", text: "2,292 m" },
            { letter: "C", text: "80 m" },
            { letter: "D", text: "48 m" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-pc3-sky-bike-chain",
      family: "GEO",
      mode: "sky",
      title: "The Bike Chain",
      kind: "Circles · G.PC.3",
      blurb: "A chain wraps a chainring and a rear cog.",
      level: 3,
      passage: "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"A bike chainring, a circle with center F and radius 10 centimeters, and a rear cog, a circle with center G and radius 4 centimeters; FG is 40 centimeters. The straight top run of chain AB touches the chainring at A and the cog at B, and the bottom run CD touches them at C and D. The gold arc shows where the chain wraps around the chainring. Thin radii join F to A and G to B\"><circle class=\"thin\" cx=\"60\" cy=\"80\" r=\"50\"/><circle class=\"thin\" cx=\"260\" cy=\"80\" r=\"20\"/><circle class=\"thin dash\" cx=\"60\" cy=\"80\" r=\"42\"/><path class=\"ac\" d=\"M67.5 30.6 A50 50 0 1 0 67.5 129.4\"/><path class=\"ln\" d=\"M263 99.8 A20 20 0 0 0 263 60.2\"/><line class=\"ln\" x1=\"67.5\" y1=\"30.6\" x2=\"263\" y2=\"60.2\"/><line class=\"ln\" x1=\"67.5\" y1=\"129.4\" x2=\"263\" y2=\"99.8\"/><line class=\"thin\" x1=\"60\" y1=\"80\" x2=\"67.5\" y2=\"30.6\"/><line class=\"thin\" x1=\"260\" y1=\"80\" x2=\"263\" y2=\"60.2\"/><line class=\"thin dash\" x1=\"60\" y1=\"80\" x2=\"260\" y2=\"80\"/><circle class=\"dt\" cx=\"60\" cy=\"80\" r=\"3\"/><circle class=\"dt\" cx=\"260\" cy=\"80\" r=\"3\"/><circle class=\"dt\" cx=\"67.5\" cy=\"30.6\" r=\"3\"/><circle class=\"dt\" cx=\"263\" cy=\"60.2\" r=\"3\"/><circle class=\"dt\" cx=\"67.5\" cy=\"129.4\" r=\"3\"/><circle class=\"dt\" cx=\"263\" cy=\"99.8\" r=\"3\"/><text x=\"48\" y=\"89\" text-anchor=\"middle\">F</text><text x=\"251\" y=\"97\" text-anchor=\"middle\">G</text><text x=\"69.5\" y=\"23.6\" text-anchor=\"middle\">A</text><text x=\"265\" y=\"53.2\" text-anchor=\"middle\">B</text><text x=\"69.5\" y=\"150.4\" text-anchor=\"middle\">C</text><text x=\"265\" y=\"120.8\" text-anchor=\"middle\">D</text><text class=\"sm\" x=\"44\" y=\"62\" text-anchor=\"middle\">10 cm</text><text class=\"sm\" x=\"296\" y=\"74\" text-anchor=\"middle\">4 cm</text><text class=\"sm\" x=\"160\" y=\"78\" text-anchor=\"middle\">40 cm</text><text class=\"sm\" x=\"150\" y=\"158\" text-anchor=\"middle\">chainring and rear cog</text></svg></figure><p class=\"geo-given\">A bike chain wraps around the chainring (center <strong>F</strong>, radius 10 cm) and the rear cog (center <strong>G</strong>, radius 4 cm). FG = 40 cm. The top run of chain <strong>AB</strong> is tangent to the chainring at A and to the cog at B. The bottom run <strong>CD</strong> is tangent to them at C and D.</p>",
      claims: [
        {
          id: "radii",
          sol: "G.PC.3",
          sub: "G.PC.3.1",
          stem: "Which statement about radii FA and GB is true? Choose the answer with the correct reason.",
          choices: [
            { letter: "A", text: "FA ⊥ GB, because AB is tangent to both." },
            { letter: "B", text: "FA = GB, because both touch the chain." },
            { letter: "C", text: "FA ∥ GB, because FA and GB are congruent." },
            { letter: "D", text: "FA ∥ GB, because both are ⊥ to AB." }
          ],
          correct: "D"
        },
        {
          id: "ab",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "How long is the top run of chain, AB? Round to the nearest tenth of a centimeter.",
          choices: [
            { letter: "A", text: "40.0 cm" },
            { letter: "B", text: "39.5 cm" },
            { letter: "C", text: "37.5 cm" },
            { letter: "D", text: "40.4 cm" }
          ],
          correct: "B"
        },
        {
          id: "ride",
          sol: "G.PC.3",
          sub: "G.PC.3.4",
          stem: "The chainring has 48 teeth and the cog has 16, so the rear wheel turns 3 times for each turn of the pedals. The rear wheel's diameter is 66 cm. How far does the bike go for one turn of the pedals, to the nearest tenth of a meter?",
          choices: [
            { letter: "A", text: "6.2 m" },
            { letter: "B", text: "2.1 m" },
            { letter: "C", text: "3.1 m" },
            { letter: "D", text: "12.4 m" }
          ],
          correct: "A"
        },
        {
          id: "wrap",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "The chain touches the chainring along an arc of about 197°. How long is that arc, to the nearest tenth of a centimeter?",
          choices: [
            { letter: "A", text: "17.2 cm" },
            { letter: "B", text: "28.4 cm" },
            { letter: "C", text: "34.4 cm" },
            { letter: "D", text: "68.8 cm" }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "G.PC.3",
          sub: "G.PC.3.3",
          stem: "The chain moves 30 cm as the chainring turns. To the nearest degree, through what angle does the chainring turn?",
          choices: [
            { letter: "A", text: "344°" },
            { letter: "B", text: "172°" },
            { letter: "C", text: "86°" },
            { letter: "D", text: "34°" }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "G.PC.3",
          sub: "G.PC.3.2",
          stem: "Lines AB and CD meet at a point Q beyond the cog. Which reason shows that AB = CD?",
          choices: [
            { letter: "A", text: "AB and CD are both diameters of the chainring." },
            { letter: "B", text: "AB ∥ CD, so the two runs have the same length." },
            { letter: "C", text: "FA = GB, so the two runs have the same length." },
            { letter: "D", text: "QA = QC and QB = QD, so QA − QB = QC − QD." }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
