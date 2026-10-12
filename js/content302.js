/* SOL Labyrinth — Geometry game (family GEO), logic: G.RLT.1 (Virginia 2023 Geometry SOL), v5.20 packs for the modes rocks
   (Rune Rocks: space, science and weather) and sky (Sun Chariot: travel and getting around). Original items only. A pack is one
   figure (inline SVG drawn with the .geo-fig classes in css/after-hours.css) and the given facts, then six questions about it.
   Every answer was computed, and every distractor is a named mistake. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;

  var PACKS = [
    {
      id: "geo-rlt1-rocks-weather-station",
      family: "GEO",
      mode: "rocks",
      title: "The Rooftop Weather Station",
      kind: "Logic · G.RLT.1",
      blurb: "Three readings decide three statements.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"A weather station display with three readings: temperature 28 degrees F, wind speed 12 miles per hour, precipitation snow\"><rect class=\"thin\" x=\"8\" y=\"6\" width=\"304\" height=\"140\" rx=\"8\"/><text class=\"sm\" x=\"160\" y=\"24\" text-anchor=\"middle\">Rooftop station · 6:00 a.m.</text><line class=\"thin\" x1=\"8\" y1=\"32\" x2=\"312\" y2=\"32\"/><rect class=\"sh2\" x=\"16\" y=\"40\" width=\"92\" height=\"98\" rx=\"6\"/><text class=\"sm\" x=\"62\" y=\"56\" text-anchor=\"middle\">Temperature</text><text x=\"62\" y=\"130\" text-anchor=\"middle\">28°F</text><rect class=\"thin\" x=\"58\" y=\"66\" width=\"8\" height=\"30\" rx=\"4\"/><circle class=\"thin\" cx=\"62\" cy=\"101\" r=\"7\"/><line class=\"ac\" x1=\"62\" y1=\"101\" x2=\"62\" y2=\"80\"/><rect class=\"sh2\" x=\"114\" y=\"40\" width=\"92\" height=\"98\" rx=\"6\"/><text class=\"sm\" x=\"160\" y=\"56\" text-anchor=\"middle\">Wind speed</text><text x=\"160\" y=\"130\" text-anchor=\"middle\">12 mph</text><line class=\"ln\" x1=\"160\" y1=\"76\" x2=\"160\" y2=\"108\"/><line class=\"thin\" x1=\"144\" y1=\"76\" x2=\"176\" y2=\"76\"/><circle class=\"thin\" cx=\"144\" cy=\"76\" r=\"4\"/><circle class=\"thin\" cx=\"176\" cy=\"76\" r=\"4\"/><circle class=\"dt\" cx=\"160\" cy=\"76\" r=\"3\"/><rect class=\"sh2\" x=\"212\" y=\"40\" width=\"92\" height=\"98\" rx=\"6\"/><text class=\"sm\" x=\"258\" y=\"56\" text-anchor=\"middle\">Precipitation</text><text x=\"258\" y=\"130\" text-anchor=\"middle\">Snow</text><line class=\"thin\" x1=\"243\" y1=\"92\" x2=\"273\" y2=\"92\"/><line class=\"thin\" x1=\"250.5\" y1=\"79\" x2=\"265.5\" y2=\"105\"/><line class=\"thin\" x1=\"265.5\" y1=\"79\" x2=\"250.5\" y2=\"105\"/></svg></figure><p class=\"geo-given\">A school weather station shows these readings. Let <strong>p</strong> be “The temperature is below 32°F,” <strong>q</strong> be “The wind speed is over 20 mph,” and <strong>r</strong> be “It is snowing.” Use the readings to decide whether each is true.</p>",
      claims: [
        {
          id: "and-not",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which sentence is r ∧ ~q?",
          choices: [
            { letter: "A", text: "It is snowing, or the wind speed is not over 20 mph." },
            { letter: "B", text: "It is snowing, and the wind speed is not over 20 mph." },
            { letter: "C", text: "It is not snowing, and the wind speed is over 20 mph." },
            { letter: "D", text: "If it is snowing, then the wind speed is not over 20 mph." }
          ],
          correct: "B"
        },
        {
          id: "or-value",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "At these readings, what is the truth value of q ∨ r?",
          choices: [
            { letter: "A", text: "False, because q is false." },
            { letter: "B", text: "True, because q is true." },
            { letter: "C", text: "False, because q and r differ." },
            { letter: "D", text: "True, because r is true." }
          ],
          correct: "D"
        },
        {
          id: "which-false",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which statement is false at these readings?",
          choices: [
            { letter: "A", text: "p → q" },
            { letter: "B", text: "r → p" },
            { letter: "C", text: "q → r" },
            { letter: "D", text: "p ∧ ~q" }
          ],
          correct: "A"
        },
        {
          id: "contrapositive",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "A rule card at the station says, “If it is snowing, then the temperature is below 32°F.” Which is the contrapositive of the rule?",
          choices: [
            { letter: "A", text: "If the temperature is below 32°F, then it is snowing." },
            { letter: "B", text: "If it is not snowing, then the temperature is not below 32°F." },
            { letter: "C", text: "If the temperature is not below 32°F, then it is not snowing." },
            { letter: "D", text: "If it is snowing, then the temperature is not below 32°F." }
          ],
          correct: "C"
        },
        {
          id: "inverse-sym",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which is the inverse of r → p, written in symbols?",
          choices: [
            { letter: "A", text: "~r → ~p" },
            { letter: "B", text: "p → r" },
            { letter: "C", text: "~p → ~r" },
            { letter: "D", text: "r → ~p" }
          ],
          correct: "A"
        },
        {
          id: "alarm",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "The station's wind alarm follows the rule a ↔ q, where a is “The wind alarm sounds.” Using the readings, what is true right now?",
          choices: [
            { letter: "A", text: "The wind alarm is sounding." },
            { letter: "B", text: "Nothing can be decided about the alarm." },
            { letter: "C", text: "The rule a ↔ q cannot hold right now." },
            { letter: "D", text: "The wind alarm is not sounding." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt1-rocks-solar-sets",
      family: "GEO",
      mode: "rocks",
      title: "Sorting the Solar System",
      kind: "Logic · G.RLT.1",
      blurb: "Planets, rocky planets and dwarf planets in one diagram.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 162\" role=\"img\" aria-label=\"Diagram of 9 solar system objects. Circle R lies inside circle P and holds Venus, Earth and Mars. Jupiter and Saturn are in P but not in R. Circle D, apart from P, holds Pluto and Ceres. Titan and Halley are outside all circles\"><rect class=\"thin\" x=\"8\" y=\"6\" width=\"304\" height=\"150\"/><circle class=\"sh2\" cx=\"104\" cy=\"84\" r=\"70\"/><circle class=\"sh\" cx=\"86\" cy=\"98\" r=\"36\"/><circle class=\"sh2\" cx=\"236\" cy=\"64\" r=\"38\"/><text x=\"32\" y=\"32\" text-anchor=\"middle\">P</text><text x=\"86\" y=\"56\" text-anchor=\"middle\">R</text><text x=\"286\" y=\"32\" text-anchor=\"middle\">D</text><text class=\"sm\" x=\"304\" y=\"150\" text-anchor=\"end\">9 objects</text><text class=\"sm\" x=\"86\" y=\"86\" text-anchor=\"middle\">Venus</text><text class=\"sm\" x=\"86\" y=\"104\" text-anchor=\"middle\">Earth</text><text class=\"sm\" x=\"86\" y=\"122\" text-anchor=\"middle\">Mars</text><text class=\"sm\" x=\"132\" y=\"46\" text-anchor=\"middle\">Jupiter</text><text class=\"sm\" x=\"146\" y=\"72\" text-anchor=\"middle\">Saturn</text><text class=\"sm\" x=\"236\" y=\"60\" text-anchor=\"middle\">Pluto</text><text class=\"sm\" x=\"236\" y=\"80\" text-anchor=\"middle\">Ceres</text><text class=\"sm\" x=\"232\" y=\"128\" text-anchor=\"middle\">Titan</text><text class=\"sm\" x=\"284\" y=\"128\" text-anchor=\"middle\">Halley</text></svg></figure><p class=\"geo-given\">The diagram sorts 9 objects in the solar system. <strong>P</strong> is the set of planets, <strong>R</strong> is the set of rocky planets, and <strong>D</strong> is the set of dwarf planets. Titan is a moon of Saturn, and Halley is a comet.</p>",
      claims: [
        {
          id: "diagram-cond",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which conditional does the diagram show is true for these 9 objects?",
          choices: [
            { letter: "A", text: "If an object is a planet, then it is a rocky planet." },
            { letter: "B", text: "If an object is not a planet, then it is a dwarf planet." },
            { letter: "C", text: "If an object is a rocky planet, then it is a planet." },
            { letter: "D", text: "If an object is a dwarf planet, then it is a planet." }
          ],
          correct: "C"
        },
        {
          id: "p-not-r",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which objects in the diagram are in P ∩ ~R?",
          choices: [
            { letter: "A", text: "Jupiter and Saturn" },
            { letter: "B", text: "Venus, Earth and Mars" },
            { letter: "C", text: "Pluto and Ceres" },
            { letter: "D", text: "Titan and Halley" }
          ],
          correct: "A"
        },
        {
          id: "not-p",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many of the 9 objects are in ~P?",
          choices: [
            { letter: "A", text: "2" },
            { letter: "B", text: "5" },
            { letter: "C", text: "6" },
            { letter: "D", text: "4" }
          ],
          correct: "D"
        },
        {
          id: "r-and-d",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which set is R ∩ D?",
          choices: [
            { letter: "A", text: "Pluto and Ceres" },
            { letter: "B", text: "The empty set" },
            { letter: "C", text: "Venus, Earth and Mars" },
            { letter: "D", text: "Venus, Earth, Mars, Pluto and Ceres" }
          ],
          correct: "B"
        },
        {
          id: "counterexample",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Consider “If an object is a planet, then it is a rocky planet.” Which object is a counterexample to it?",
          choices: [
            { letter: "A", text: "Earth" },
            { letter: "B", text: "Jupiter" },
            { letter: "C", text: "Pluto" },
            { letter: "D", text: "Titan" }
          ],
          correct: "B"
        },
        {
          id: "detach",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "This statement is true: “If an object is a dwarf planet, then it is not a planet.” Ceres is a dwarf planet. What can be concluded by the Law of Detachment?",
          choices: [
            { letter: "A", text: "Ceres is a rocky planet." },
            { letter: "B", text: "Ceres is a planet." },
            { letter: "C", text: "Ceres is not a planet." },
            { letter: "D", text: "Nothing can be concluded." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt1-rocks-launch-log",
      family: "GEO",
      mode: "rocks",
      title: "Five Launch Windows",
      kind: "Logic · G.RLT.1",
      blurb: "A model rocket club's log of wind, lightning and launches.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 156\" role=\"img\" aria-label=\"Launch log table. Window 1: wind 8 mph, no lightning, launched. Window 2: 22 mph, no lightning, not launched. Window 3: 11 mph, lightning, not launched. Window 4: 9 mph, no lightning, launched. Window 5: 18 mph, no lightning, not launched\"><rect class=\"sh2\" x=\"10\" y=\"6\" width=\"300\" height=\"24\"/><rect class=\"thin\" x=\"10\" y=\"6\" width=\"300\" height=\"144\"/><line class=\"thin\" x1=\"10\" y1=\"30\" x2=\"310\" y2=\"30\"/><line class=\"thin\" x1=\"10\" y1=\"54\" x2=\"310\" y2=\"54\"/><line class=\"thin\" x1=\"10\" y1=\"78\" x2=\"310\" y2=\"78\"/><line class=\"thin\" x1=\"10\" y1=\"102\" x2=\"310\" y2=\"102\"/><line class=\"thin\" x1=\"10\" y1=\"126\" x2=\"310\" y2=\"126\"/><line class=\"thin\" x1=\"74\" y1=\"6\" x2=\"74\" y2=\"150\"/><line class=\"thin\" x1=\"150\" y1=\"6\" x2=\"150\" y2=\"150\"/><line class=\"thin\" x1=\"230\" y1=\"6\" x2=\"230\" y2=\"150\"/><text class=\"sm acc\" x=\"42\" y=\"22\" text-anchor=\"middle\">Window</text><text class=\"sm acc\" x=\"112\" y=\"22\" text-anchor=\"middle\">Wind</text><text class=\"sm acc\" x=\"190\" y=\"22\" text-anchor=\"middle\">Lightning?</text><text class=\"sm acc\" x=\"270\" y=\"22\" text-anchor=\"middle\">Launched?</text><text x=\"42\" y=\"48\" text-anchor=\"middle\">1</text><text x=\"112\" y=\"48\" text-anchor=\"middle\">8 mph</text><text x=\"190\" y=\"48\" text-anchor=\"middle\">No</text><text x=\"270\" y=\"48\" text-anchor=\"middle\">Yes</text><text x=\"42\" y=\"72\" text-anchor=\"middle\">2</text><text x=\"112\" y=\"72\" text-anchor=\"middle\">22 mph</text><text x=\"190\" y=\"72\" text-anchor=\"middle\">No</text><text x=\"270\" y=\"72\" text-anchor=\"middle\">No</text><text x=\"42\" y=\"96\" text-anchor=\"middle\">3</text><text x=\"112\" y=\"96\" text-anchor=\"middle\">11 mph</text><text x=\"190\" y=\"96\" text-anchor=\"middle\">Yes</text><text x=\"270\" y=\"96\" text-anchor=\"middle\">No</text><text x=\"42\" y=\"120\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"120\" text-anchor=\"middle\">9 mph</text><text x=\"190\" y=\"120\" text-anchor=\"middle\">No</text><text x=\"270\" y=\"120\" text-anchor=\"middle\">Yes</text><text x=\"42\" y=\"144\" text-anchor=\"middle\">5</text><text x=\"112\" y=\"144\" text-anchor=\"middle\">18 mph</text><text x=\"190\" y=\"144\" text-anchor=\"middle\">No</text><text x=\"270\" y=\"144\" text-anchor=\"middle\">No</text></svg></figure><p class=\"geo-given\">A model rocket club logged five launch windows. For each window, let <strong>p</strong> be “The wind is under 15 mph,” <strong>l</strong> be “There is lightning nearby,” and <strong>q</strong> be “The rocket launched.”</p>",
      claims: [
        {
          id: "count-and",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "For how many of the five windows is p ∧ ~l true?",
          choices: [
            { letter: "A", text: "5" },
            { letter: "B", text: "1" },
            { letter: "C", text: "3" },
            { letter: "D", text: "2" }
          ],
          correct: "D"
        },
        {
          id: "window3",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which statement is true for window 3?",
          choices: [
            { letter: "A", text: "~p ∨ q" },
            { letter: "B", text: "p ∧ l" },
            { letter: "C", text: "l → q" },
            { letter: "D", text: "p ↔ q" }
          ],
          correct: "B"
        },
        {
          id: "counter",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which window is a counterexample to “If the wind is under 15 mph, then the rocket launched”?",
          choices: [
            { letter: "A", text: "Window 1" },
            { letter: "B", text: "Window 2" },
            { letter: "C", text: "Window 3" },
            { letter: "D", text: "Window 5" }
          ],
          correct: "C"
        },
        {
          id: "true-all",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which conditional is true for all five windows?",
          choices: [
            { letter: "A", text: "If the rocket launched, then there was no lightning nearby." },
            { letter: "B", text: "If there was no lightning nearby, then the rocket launched." },
            { letter: "C", text: "If the rocket did not launch, then there was lightning nearby." },
            { letter: "D", text: "If the wind was 15 mph or more, then there was lightning nearby." }
          ],
          correct: "A"
        },
        {
          id: "rae",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "The club's rule is true: “If the rocket launches, then the wind is under 15 mph.” In a sixth window the wind is 10 mph, so Rae concludes that the rocket launched. Which describes her reasoning?",
          choices: [
            { letter: "A", text: "Valid, by the Law of Detachment." },
            { letter: "B", text: "Valid, by the Law of Syllogism." },
            { letter: "C", text: "Invalid; it uses the inverse of the rule." },
            { letter: "D", text: "Invalid; it uses the converse of the rule." }
          ],
          correct: "D"
        },
        {
          id: "bunker",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Two rules hold in every window: “If there is lightning nearby, then the pad is closed.” “If the pad is closed, then the crew waits in the bunker.” What can be concluded about window 3?",
          choices: [
            { letter: "A", text: "The crew waited in the bunker." },
            { letter: "B", text: "The pad closed, but the crew may not have waited." },
            { letter: "C", text: "Nothing, since the rocket did not launch." },
            { letter: "D", text: "The crew waited, but the pad stayed open." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt1-rocks-volcano-card",
      family: "GEO",
      mode: "rocks",
      title: "Building a Volcano Diagram",
      kind: "Logic · G.RLT.1",
      blurb: "Fill an empty Venn diagram from a count card.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"An empty Venn diagram: circles A and S overlap inside a rectangle. Region I is A only, region II is the overlap, region III is S only, region IV is outside both. A card lists: total 42, in A 20, in S 15, in both 6\"><rect class=\"thin\" x=\"8\" y=\"6\" width=\"198\" height=\"140\"/><circle class=\"sh2\" cx=\"80\" cy=\"80\" r=\"46\"/><circle class=\"sh\" cx=\"136\" cy=\"80\" r=\"46\"/><text x=\"36\" y=\"30\" text-anchor=\"middle\">A</text><text x=\"180\" y=\"30\" text-anchor=\"middle\">S</text><text class=\"acc\" x=\"62\" y=\"85\" text-anchor=\"middle\">I</text><text class=\"acc\" x=\"108\" y=\"85\" text-anchor=\"middle\">II</text><text class=\"acc\" x=\"154\" y=\"85\" text-anchor=\"middle\">III</text><text class=\"acc\" x=\"186\" y=\"138\" text-anchor=\"middle\">IV</text><rect class=\"sh2\" x=\"214\" y=\"6\" width=\"98\" height=\"140\" rx=\"6\"/><text class=\"sm\" x=\"263\" y=\"28\" text-anchor=\"middle\">Count card</text><line class=\"thin\" x1=\"222\" y1=\"36\" x2=\"304\" y2=\"36\"/><text x=\"263\" y=\"58\" text-anchor=\"middle\">Total: 42</text><text x=\"263\" y=\"84\" text-anchor=\"middle\">In A: 20</text><text x=\"263\" y=\"110\" text-anchor=\"middle\">In S: 15</text><text x=\"263\" y=\"136\" text-anchor=\"middle\">In both: 6</text></svg></figure><p class=\"geo-given\">A science class studied 42 volcanoes. <strong>A</strong> is the set that erupted in the last 100 years, and <strong>S</strong> is the set with a crater lake at the summit. The card gives how many are in A in all, in S in all, and in both. The regions of the empty diagram are numbered <strong>I</strong> to <strong>IV</strong>.</p>",
      claims: [
        {
          id: "region-1",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which number belongs in region I?",
          choices: [
            { letter: "A", text: "14" },
            { letter: "B", text: "20" },
            { letter: "C", text: "9" },
            { letter: "D", text: "26" }
          ],
          correct: "A"
        },
        {
          id: "region-4",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which number belongs in region IV, outside both circles?",
          choices: [
            { letter: "A", text: "7" },
            { letter: "B", text: "22" },
            { letter: "C", text: "13" },
            { letter: "D", text: "27" }
          ],
          correct: "C"
        },
        {
          id: "region-3-name",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which expression names region III?",
          choices: [
            { letter: "A", text: "A ∩ ~S" },
            { letter: "B", text: "~A ∩ S" },
            { letter: "C", text: "~(A ∪ S)" },
            { letter: "D", text: "A ∩ S" }
          ],
          correct: "B"
        },
        {
          id: "union",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many of the volcanoes are in A ∪ S?",
          choices: [
            { letter: "A", text: "35" },
            { letter: "B", text: "6" },
            { letter: "C", text: "23" },
            { letter: "D", text: "29" }
          ],
          correct: "D"
        },
        {
          id: "counter-count",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Consider “If a volcano has a crater lake, then it erupted in the last 100 years.” For how many of the 42 volcanoes is this statement false?",
          choices: [
            { letter: "A", text: "14" },
            { letter: "B", text: "9" },
            { letter: "C", text: "13" },
            { letter: "D", text: "15" }
          ],
          correct: "B"
        },
        {
          id: "volcano-v",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Volcano V is in region III. Let a be “V erupted in the last 100 years” and s be “V has a crater lake.” Which statement is true?",
          choices: [
            { letter: "A", text: "a ∨ ~s" },
            { letter: "B", text: "s → a" },
            { letter: "C", text: "s ∧ ~a" },
            { letter: "D", text: "a ↔ s" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt1-rocks-eruption-steps",
      family: "GEO",
      mode: "rocks",
      title: "Signs Before an Eruption",
      kind: "Logic · G.RLT.1",
      blurb: "Three true conditionals, one step at a time.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 166\" role=\"img\" aria-label=\"Four boxes stepping down, joined by arrows: m, Magma rises, points to g, The ground swells; g points to t, The tilt alarm sounds; t points to e, The trail closes\"><rect class=\"sh\" x=\"8\" y=\"6\" width=\"166\" height=\"28\" rx=\"6\"/><text class=\"acc\" x=\"21\" y=\"25\" text-anchor=\"middle\">m</text><text class=\"sm\" x=\"36\" y=\"24.5\">Magma rises.</text><line class=\"ln\" x1=\"120\" y1=\"35\" x2=\"120\" y2=\"47\"/><path class=\"thin\" d=\"M115.8 40 L120 47 L124.2 40\"/><rect class=\"sh2\" x=\"54\" y=\"48\" width=\"166\" height=\"28\" rx=\"6\"/><text class=\"acc\" x=\"67\" y=\"67\" text-anchor=\"middle\">g</text><text class=\"sm\" x=\"82\" y=\"66.5\">The ground swells.</text><line class=\"ln\" x1=\"166\" y1=\"77\" x2=\"166\" y2=\"89\"/><path class=\"thin\" d=\"M161.8 82 L166 89 L170.2 82\"/><rect class=\"sh2\" x=\"100\" y=\"90\" width=\"166\" height=\"28\" rx=\"6\"/><text class=\"acc\" x=\"113\" y=\"109\" text-anchor=\"middle\">t</text><text class=\"sm\" x=\"128\" y=\"108.5\">The tilt alarm sounds.</text><line class=\"ln\" x1=\"212\" y1=\"119\" x2=\"212\" y2=\"131\"/><path class=\"thin\" d=\"M207.8 124 L212 131 L216.2 124\"/><rect class=\"sh2\" x=\"146\" y=\"132\" width=\"166\" height=\"28\" rx=\"6\"/><text class=\"acc\" x=\"159\" y=\"151\" text-anchor=\"middle\">e</text><text class=\"sm\" x=\"174\" y=\"150.5\">The trail closes.</text></svg></figure><p class=\"geo-given\">At a volcano park, each arrow is a true conditional: <strong>m</strong> → <strong>g</strong>, <strong>g</strong> → <strong>t</strong> and <strong>t</strong> → <strong>e</strong>. Here <strong>m</strong> is “Magma rises under the volcano,” <strong>g</strong> is “The ground swells,” <strong>t</strong> is “The tilt alarm sounds,” and <strong>e</strong> is “The park closes the summit trail.”</p>",
      claims: [
        {
          id: "syllogism-sym",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Which conditional follows from all three arrows by the Law of Syllogism?",
          choices: [
            { letter: "A", text: "e → m" },
            { letter: "B", text: "m → e" },
            { letter: "C", text: "~m → ~e" },
            { letter: "D", text: "e → t" }
          ],
          correct: "B"
        },
        {
          id: "alarm-today",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Today the tilt alarm sounds. What can be concluded?",
          choices: [
            { letter: "A", text: "The park closes the summit trail." },
            { letter: "B", text: "Magma is rising under the volcano." },
            { letter: "C", text: "The ground is swelling." },
            { letter: "D", text: "Nothing can be concluded." }
          ],
          correct: "A"
        },
        {
          id: "trail-open",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Today the summit trail is open. What can be concluded?",
          choices: [
            { letter: "A", text: "Nothing can be concluded." },
            { letter: "B", text: "The alarm sounds, but the ground is not swelling." },
            { letter: "C", text: "The alarm is silent, but magma may be rising." },
            { letter: "D", text: "Magma is not rising under the volcano." }
          ],
          correct: "D"
        },
        {
          id: "contra-words",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which sentence is the contrapositive of g → t?",
          choices: [
            { letter: "A", text: "If the tilt alarm sounds, then the ground swells." },
            { letter: "B", text: "If the ground does not swell, then the tilt alarm does not sound." },
            { letter: "C", text: "If the tilt alarm does not sound, then the ground does not swell." },
            { letter: "D", text: "If the ground swells, then the tilt alarm does not sound." }
          ],
          correct: "C"
        },
        {
          id: "rain-swell",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Heavy rain can make the ground swell when no magma rises. Which statement does this fact show is false?",
          choices: [
            { letter: "A", text: "g → m" },
            { letter: "B", text: "m → g" },
            { letter: "C", text: "~g → ~m" },
            { letter: "D", text: "g → t" }
          ],
          correct: "A"
        },
        {
          id: "or-words",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which sentence is ~e ∨ t?",
          choices: [
            { letter: "A", text: "The park does not close the summit trail, and the tilt alarm sounds." },
            { letter: "B", text: "If the park does not close the summit trail, then the tilt alarm sounds." },
            { letter: "C", text: "The park closes the summit trail, or the tilt alarm does not sound." },
            { letter: "D", text: "The park does not close the summit trail, or the tilt alarm sounds." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt1-rocks-june-storms",
      family: "GEO",
      mode: "rocks",
      title: "Thirty Days of June Weather",
      kind: "Logic · G.RLT.1",
      blurb: "Rain, thunder and strong wind, with an unknown x.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"Three overlapping circles W, R and T inside a rectangle of 30 days, W on top. W only 3, R only 5, T only 1, R and T only x + 2, R and W only 2, T and W only 1, all three x, and 8 days outside all circles\"><rect class=\"thin\" x=\"8\" y=\"2\" width=\"304\" height=\"166\"/><circle class=\"sh2\" cx=\"128\" cy=\"110\" r=\"56\"/><circle class=\"sh\" cx=\"192\" cy=\"110\" r=\"56\"/><circle class=\"thin\" cx=\"160\" cy=\"56\" r=\"50\"/><text x=\"52\" y=\"160\" text-anchor=\"middle\">R</text><text x=\"268\" y=\"160\" text-anchor=\"middle\">T</text><text x=\"226\" y=\"24\" text-anchor=\"middle\">W</text><text class=\"sm\" x=\"20\" y=\"22\">30 days</text><text x=\"282\" y=\"70\" text-anchor=\"middle\">8</text><text x=\"160\" y=\"40.1\" text-anchor=\"middle\">3</text><text x=\"108.9\" y=\"124.2\" text-anchor=\"middle\">5</text><text x=\"211.1\" y=\"124.2\" text-anchor=\"middle\">1</text><text class=\"acc\" x=\"160\" y=\"122\" text-anchor=\"middle\">x + 2</text><text x=\"131.8\" y=\"76.8\" text-anchor=\"middle\">2</text><text x=\"188.2\" y=\"76.8\" text-anchor=\"middle\">1</text><text class=\"acc\" x=\"160\" y=\"95.9\" text-anchor=\"middle\">x</text></svg></figure><p class=\"geo-given\">A weather station logged all 30 days of June. <strong>R</strong> is the set of days with rain, <strong>T</strong> is the set of days with thunder, and <strong>W</strong> is the set of days with wind gusts over 30 mph. Each number or expression is the number of days in that region.</p>",
      claims: [
        {
          id: "solve-x",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "What is the value of x?",
          choices: [
            { letter: "A", text: "8" },
            { letter: "B", text: "5" },
            { letter: "C", text: "4" },
            { letter: "D", text: "6" }
          ],
          correct: "C"
        },
        {
          id: "rain-thunder",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many days in June are in R ∩ T?",
          choices: [
            { letter: "A", text: "6" },
            { letter: "B", text: "4" },
            { letter: "C", text: "19" },
            { letter: "D", text: "10" }
          ],
          correct: "D"
        },
        {
          id: "not-w",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many days in June are in ~W?",
          choices: [
            { letter: "A", text: "20" },
            { letter: "B", text: "10" },
            { letter: "C", text: "8" },
            { letter: "D", text: "12" }
          ],
          correct: "A"
        },
        {
          id: "thunder-rule",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "How many days in June are counterexamples to “If there is thunder, then there is rain”?",
          choices: [
            { letter: "A", text: "1" },
            { letter: "B", text: "2" },
            { letter: "C", text: "7" },
            { letter: "D", text: "12" }
          ],
          correct: "B"
        },
        {
          id: "leo",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "On one June day there was thunder. Leo concludes that it must have rained that day. Which describes his reasoning?",
          choices: [
            { letter: "A", text: "Valid; most thunder days had rain." },
            { letter: "B", text: "Valid, by the Law of Detachment." },
            { letter: "C", text: "Invalid; 2 thunder days had no rain." },
            { letter: "D", text: "Invalid; it uses the inverse." }
          ],
          correct: "C"
        },
        {
          id: "r-or-w-not-t",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many days in June are in (R ∪ W) ∩ ~T?",
          choices: [
            { letter: "A", text: "8" },
            { letter: "B", text: "10" },
            { letter: "C", text: "18" },
            { letter: "D", text: "21" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt1-rocks-observatory",
      family: "GEO",
      mode: "rocks",
      title: "The Observatory Rule Book",
      kind: "Logic · G.RLT.1",
      blurb: "Three rules in symbols, one of them a biconditional.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-label=\"An observatory dome with a telescope, beside a rule book. Rule 1: h implies not o. Rule 2: o if and only if m. Rule 3: m implies l\"><line class=\"ln\" x1=\"8\" y1=\"140\" x2=\"110\" y2=\"140\"/><rect class=\"thin\" x=\"18\" y=\"96\" width=\"84\" height=\"44\"/><path class=\"thin\" d=\"M18 96 A42 42 0 0 1 102 96\"/><line class=\"thin\" x1=\"64\" y1=\"56\" x2=\"72\" y2=\"96\"/><line class=\"thin\" x1=\"78\" y1=\"61\" x2=\"82\" y2=\"96\"/><line class=\"ac\" x1=\"56\" y1=\"104\" x2=\"92\" y2=\"50\"/><rect class=\"thin\" x=\"44\" y=\"112\" width=\"22\" height=\"28\"/><text class=\"sm\" x=\"60\" y=\"30\" text-anchor=\"middle\">observatory</text><rect class=\"sh2\" x=\"120\" y=\"8\" width=\"192\" height=\"134\" rx=\"6\"/><text class=\"sm\" x=\"132\" y=\"30\">Rule book</text><line class=\"thin\" x1=\"128\" y1=\"38\" x2=\"304\" y2=\"38\"/><text class=\"sm\" x=\"132\" y=\"66\">Rule 1</text><text x=\"196\" y=\"66\">h → ~o</text><text class=\"sm\" x=\"132\" y=\"98\">Rule 2</text><text x=\"196\" y=\"98\">o ↔ m</text><text class=\"sm\" x=\"132\" y=\"130\">Rule 3</text><text x=\"196\" y=\"130\">m → l</text></svg></figure><p class=\"geo-given\">At a school observatory, the rule book lists three rules, and the staff always follow them.</p><p class=\"geo-given\"><strong>h</strong>: The humidity is above 90%. <strong>o</strong>: The dome opens. <strong>m</strong>: The mirror is uncovered. <strong>l</strong>: The night log is signed.</p>",
      claims: [
        {
          id: "humid",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Tonight the humidity is 95%. What can be concluded?",
          choices: [
            { letter: "A", text: "The dome stays shut, but the mirror may be uncovered." },
            { letter: "B", text: "The dome stays shut, and the log is not signed." },
            { letter: "C", text: "The dome opens, but the mirror stays covered." },
            { letter: "D", text: "The dome stays shut, and the mirror stays covered." }
          ],
          correct: "D"
        },
        {
          id: "pat",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Tonight the night log is signed. Pat concludes that the mirror was uncovered. Which describes Pat's reasoning?",
          choices: [
            { letter: "A", text: "Valid, by the Law of Detachment." },
            { letter: "B", text: "Valid, because rule 2 works both ways." },
            { letter: "C", text: "Invalid; it uses the converse of rule 3." },
            { letter: "D", text: "Invalid; it uses the inverse of rule 3." }
          ],
          correct: "C"
        },
        {
          id: "syllogism",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Which conditional follows from rules 2 and 3 by the Law of Syllogism?",
          choices: [
            { letter: "A", text: "l → o" },
            { letter: "B", text: "o → l" },
            { letter: "C", text: "~o → ~l" },
            { letter: "D", text: "l → m" }
          ],
          correct: "B"
        },
        {
          id: "contra-1",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which is the contrapositive of rule 1?",
          choices: [
            { letter: "A", text: "o → ~h" },
            { letter: "B", text: "~o → h" },
            { letter: "C", text: "~h → o" },
            { letter: "D", text: "o → h" }
          ],
          correct: "A"
        },
        {
          id: "broken",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "One night a visitor ran the telescope. The humidity was 60%, the dome opened and the mirror was uncovered, but the log was not signed. Which rule did the visitor break?",
          choices: [
            { letter: "A", text: "Rule 1" },
            { letter: "B", text: "Rule 2" },
            { letter: "C", text: "No rule" },
            { letter: "D", text: "Rule 3" }
          ],
          correct: "D"
        },
        {
          id: "rule1-words",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which sentence is rule 1 written in words?",
          choices: [
            { letter: "A", text: "If the humidity is above 90%, then the dome does not open." },
            { letter: "B", text: "If the dome does not open, then the humidity is above 90%." },
            { letter: "C", text: "The humidity is above 90%, and the dome does not open." },
            { letter: "D", text: "If the humidity is not above 90%, then the dome opens." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt1-sky-low-bridge",
      family: "GEO",
      mode: "sky",
      title: "The Low Bridge Sign",
      kind: "Logic · G.RLT.1",
      blurb: "One road sign, written as p → q.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 152\" role=\"img\" aria-label=\"A low bridge over a road with 12 feet 6 inches of clearance, and a road sign that reads: vehicles over 12 ft 6 in must take Exit 4\"><line class=\"ln\" x1=\"8\" y1=\"146\" x2=\"312\" y2=\"146\"/><rect class=\"sh2\" x=\"16\" y=\"36\" width=\"172\" height=\"16\"/><rect class=\"thin\" x=\"16\" y=\"52\" width=\"14\" height=\"94\"/><rect class=\"thin\" x=\"174\" y=\"52\" width=\"14\" height=\"94\"/><line class=\"thin dash\" x1=\"100\" y1=\"56\" x2=\"100\" y2=\"142\"/><path class=\"thin\" d=\"M104.2 61 L100 54 L95.8 61\"/><path class=\"thin\" d=\"M95.8 137 L100 144 L104.2 137\"/><text class=\"sm\" x=\"106\" y=\"104\">12 ft 6 in</text><text class=\"sm\" x=\"102\" y=\"28\" text-anchor=\"middle\">low bridge</text><line class=\"ln\" x1=\"262\" y1=\"96\" x2=\"262\" y2=\"146\"/><rect class=\"sh\" x=\"206\" y=\"8\" width=\"110\" height=\"88\" rx=\"6\"/><text class=\"sm\" x=\"261\" y=\"28\" text-anchor=\"middle\">VEHICLES</text><text class=\"sm\" x=\"261\" y=\"47\" text-anchor=\"middle\">OVER 12 FT 6 IN</text><text class=\"sm\" x=\"261\" y=\"66\" text-anchor=\"middle\">MUST TAKE</text><text class=\"sm\" x=\"261\" y=\"85\" text-anchor=\"middle\">EXIT 4</text></svg></figure><p class=\"geo-given\">The sign before a low bridge gives a rule, and every driver obeys it. Let <strong>p</strong> be “A vehicle is over 12 ft 6 in tall” and <strong>q</strong> be “The vehicle takes Exit 4.” The sign says p → q.</p>",
      claims: [
        {
          id: "symbols",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which symbols describe the one kind of trip that would break the sign's rule?",
          choices: [
            { letter: "A", text: "~p ∧ q" },
            { letter: "B", text: "p ∧ ~q" },
            { letter: "C", text: "~p ∧ ~q" },
            { letter: "D", text: "p ∧ q" }
          ],
          correct: "B"
        },
        {
          id: "inverse",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which sentence is the inverse of the sign's rule?",
          choices: [
            { letter: "A", text: "If a vehicle is not over 12 ft 6 in tall, then it does not take Exit 4." },
            { letter: "B", text: "If a vehicle takes Exit 4, then it is over 12 ft 6 in tall." },
            { letter: "C", text: "If a vehicle does not take Exit 4, then it is not over 12 ft 6 in tall." },
            { letter: "D", text: "If a vehicle is over 12 ft 6 in tall, then it does not take Exit 4." }
          ],
          correct: "A"
        },
        {
          id: "mall",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Many short cars also take Exit 4 to reach a mall. Which statement is false because of this?",
          choices: [
            { letter: "A", text: "p → q" },
            { letter: "B", text: "~q → ~p" },
            { letter: "C", text: "q → p" },
            { letter: "D", text: "~p ∨ q" }
          ],
          correct: "C"
        },
        {
          id: "truck",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "A box truck is 13 ft 2 in tall. What can be concluded?",
          choices: [
            { letter: "A", text: "It drives under the bridge." },
            { letter: "B", text: "It takes Exit 4." },
            { letter: "C", text: "Nothing; the sign does not name trucks." },
            { letter: "D", text: "It takes Exit 4, and so does every car." }
          ],
          correct: "B"
        },
        {
          id: "van",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "A van is 12 ft 4 in tall. Ray says, “So the van does not take Exit 4.” Which describes Ray's reasoning?",
          choices: [
            { letter: "A", text: "Valid; it uses the contrapositive." },
            { letter: "B", text: "Valid, by the Law of Detachment." },
            { letter: "C", text: "Invalid; it uses the converse of the rule." },
            { letter: "D", text: "Invalid; it uses the inverse of the rule." }
          ],
          correct: "D"
        },
        {
          id: "rule-sym",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "The sign's rule is p → q. Which statement means the same as p → q?",
          choices: [
            { letter: "A", text: "q → p" },
            { letter: "B", text: "~p → ~q" },
            { letter: "C", text: "~q → ~p" },
            { letter: "D", text: "p ↔ q" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "geo-rlt1-sky-rail-map",
      family: "GEO",
      mode: "sky",
      title: "Towns Along the Railway",
      kind: "Logic · G.RLT.1",
      blurb: "Six towns, a river and one railway line.",
      level: 1,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A map with a river running north to south. Alder and Birch are west of the river. Cedar, Dale, Elm and Fern are east of it. A railway runs through Cedar, Dale and Elm; Fern is not on the railway\"><rect class=\"thin\" x=\"6\" y=\"6\" width=\"308\" height=\"148\"/><polygon class=\"sh2\" points=\"144.7,6 146.4,10 147.9,14 149.3,18 150.4,22 151.3,26 151.8,30 152,34 151.9,38 151.4,42 150.7,46 149.6,50 148.3,54 146.8,58 145.2,62 143.4,66 141.6,70 139.8,74 138.1,78 136.5,82 135.1,86 133.9,90 133,94 132.3,98 132,102 132.1,106 132.4,110 133.1,114 134,118 135.3,122 136.7,126 138.3,130 140.1,134 141.9,138 143.7,142 145.5,146 147.1,150 148.6,154 162.6,154 161.1,150 159.5,146 157.7,142 155.9,138 154.1,134 152.3,130 150.7,126 149.3,122 148,118 147.1,114 146.4,110 146.1,106 146,102 146.3,98 147,94 147.9,90 149.1,86 150.5,82 152.1,78 153.8,74 155.6,70 157.4,66 159.2,62 160.8,58 162.3,54 163.6,50 164.7,46 165.4,42 165.9,38 166,34 165.8,30 165.3,26 164.4,22 163.3,18 161.9,14 160.4,10 158.7,6\"/><text class=\"sm\" x=\"128\" y=\"146\" text-anchor=\"end\">river</text><polyline class=\"ln\" fill=\"none\" points=\"191,8 202,26 236,82 276,132 290,149.5\"/><line class=\"thin\" x1=\"190.4\" y1=\"16.6\" x2=\"198.9\" y2=\"11.4\"/><line class=\"thin\" x1=\"201.4\" y1=\"34.6\" x2=\"209.9\" y2=\"29.4\"/><line class=\"thin\" x1=\"207.6\" y1=\"44.8\" x2=\"216.1\" y2=\"39.6\"/><line class=\"thin\" x1=\"213.8\" y1=\"55.1\" x2=\"222.4\" y2=\"49.9\"/><line class=\"thin\" x1=\"220\" y1=\"65.4\" x2=\"228.6\" y2=\"60.2\"/><line class=\"thin\" x1=\"226.3\" y1=\"75.6\" x2=\"234.8\" y2=\"70.4\"/><line class=\"thin\" x1=\"236.5\" y1=\"90.6\" x2=\"244.3\" y2=\"84.3\"/><line class=\"thin\" x1=\"244\" y1=\"100\" x2=\"251.8\" y2=\"93.7\"/><line class=\"thin\" x1=\"251.5\" y1=\"109.3\" x2=\"259.3\" y2=\"103.1\"/><line class=\"thin\" x1=\"259\" y1=\"118.7\" x2=\"266.8\" y2=\"112.5\"/><line class=\"thin\" x1=\"266.5\" y1=\"128.1\" x2=\"274.3\" y2=\"121.8\"/><line class=\"thin\" x1=\"276.5\" y1=\"140.6\" x2=\"284.3\" y2=\"134.3\"/><line class=\"thin\" x1=\"284\" y1=\"150\" x2=\"291.8\" y2=\"143.7\"/><text class=\"sm\" x=\"228\" y=\"50\">railway</text><circle class=\"dta\" cx=\"52\" cy=\"48\" r=\"3.5\"/><text class=\"sm\" x=\"58\" y=\"52\" text-anchor=\"start\">Alder</text><circle class=\"dta\" cx=\"86\" cy=\"120\" r=\"3.5\"/><text class=\"sm\" x=\"92\" y=\"124\" text-anchor=\"start\">Birch</text><circle class=\"dta\" cx=\"202\" cy=\"26\" r=\"3.5\"/><text class=\"sm\" x=\"212\" y=\"24\" text-anchor=\"start\">Cedar</text><circle class=\"dta\" cx=\"236\" cy=\"82\" r=\"3.5\"/><text class=\"sm\" x=\"248\" y=\"78\" text-anchor=\"start\">Dale</text><circle class=\"dta\" cx=\"276\" cy=\"132\" r=\"3.5\"/><text class=\"sm\" x=\"286\" y=\"126\" text-anchor=\"start\">Elm</text><circle class=\"dta\" cx=\"272\" cy=\"34\" r=\"3.5\"/><text class=\"sm\" x=\"280\" y=\"38\" text-anchor=\"start\">Fern</text><text class=\"sm\" x=\"30\" y=\"140\" text-anchor=\"middle\">N</text><line class=\"thin\" x1=\"30\" y1=\"128\" x2=\"30\" y2=\"106\"/><path class=\"thin\" d=\"M34.2 111 L30 104 L25.8 111\"/></svg></figure><p class=\"geo-given\">The map shows six towns, a river that runs north to south, and a railway. East is to the right. Let <strong>R</strong> be the set of towns on the railway and <strong>E</strong> be the set of towns east of the river.</p>",
      claims: [
        {
          id: "true-cond",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which statement is true for the six towns on the map?",
          choices: [
            { letter: "A", text: "If a town is east of the river, then it is on the railway." },
            { letter: "B", text: "If a town is not on the railway, then it is west of the river." },
            { letter: "C", text: "If a town is on the railway, then it is west of the river." },
            { letter: "D", text: "If a town is west of the river, then it is not on the railway." }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which town is a counterexample to “If a town is east of the river, then it is on the railway”?",
          choices: [
            { letter: "A", text: "Cedar" },
            { letter: "B", text: "Alder" },
            { letter: "C", text: "Fern" },
            { letter: "D", text: "Birch" }
          ],
          correct: "C"
        },
        {
          id: "subset",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which statement about the sets is true?",
          choices: [
            { letter: "A", text: "R ⊂ E" },
            { letter: "B", text: "E ⊂ R" },
            { letter: "C", text: "R ∩ E is empty." },
            { letter: "D", text: "R and E are the same set." }
          ],
          correct: "A"
        },
        {
          id: "e-not-r",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many towns on the map are in E ∩ ~R?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "1" },
            { letter: "C", text: "2" },
            { letter: "D", text: "4" }
          ],
          correct: "B"
        },
        {
          id: "birch",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Let r be “Birch is on the railway” and e be “Birch is east of the river.” Which statement is true?",
          choices: [
            { letter: "A", text: "r ∨ e" },
            { letter: "B", text: "~r ∧ e" },
            { letter: "C", text: "~(r → e)" },
            { letter: "D", text: "r ↔ e" }
          ],
          correct: "D"
        },
        {
          id: "ida",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Ida knows that every railway town is east of the river. She lives in Fern, east of the river, and concludes that Fern is on the railway. Which describes her reasoning?",
          choices: [
            { letter: "A", text: "Invalid; it uses the converse." },
            { letter: "B", text: "Valid, by the Law of Detachment." },
            { letter: "C", text: "Valid; it uses the contrapositive." },
            { letter: "D", text: "Invalid; it uses the inverse." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "geo-rlt1-sky-commuter-table",
      family: "GEO",
      mode: "sky",
      title: "Bike to the Train",
      kind: "Logic · G.RLT.1",
      blurb: "A two-way table becomes a Venn diagram.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 124\" role=\"img\" aria-label=\"Two-way table of 62 commuters. Bike and train 16, bike and no train 9, bike total 25. No bike and train 25, no bike and no train 12, no bike total 37. Train total 41, no train total 21, grand total 62\"><rect class=\"sh2\" x=\"10\" y=\"6\" width=\"300\" height=\"28\"/><rect class=\"thin\" x=\"10\" y=\"6\" width=\"300\" height=\"112\"/><line class=\"thin\" x1=\"10\" y1=\"34\" x2=\"310\" y2=\"34\"/><line class=\"thin\" x1=\"10\" y1=\"62\" x2=\"310\" y2=\"62\"/><line class=\"ln\" x1=\"10\" y1=\"90\" x2=\"310\" y2=\"90\"/><line class=\"thin\" x1=\"112\" y1=\"6\" x2=\"112\" y2=\"118\"/><line class=\"thin\" x1=\"182\" y1=\"6\" x2=\"182\" y2=\"118\"/><line class=\"ln\" x1=\"252\" y1=\"6\" x2=\"252\" y2=\"118\"/><text class=\"acc\" x=\"147\" y=\"25\" text-anchor=\"middle\">Train</text><text class=\"acc\" x=\"217\" y=\"25\" text-anchor=\"middle\">No train</text><text class=\"acc\" x=\"281\" y=\"25\" text-anchor=\"middle\">Total</text><text class=\"acc\" x=\"61\" y=\"53\" text-anchor=\"middle\">Bike</text><text x=\"147\" y=\"53\" text-anchor=\"middle\">16</text><text x=\"217\" y=\"53\" text-anchor=\"middle\">9</text><text x=\"281\" y=\"53\" text-anchor=\"middle\">25</text><text class=\"acc\" x=\"61\" y=\"81\" text-anchor=\"middle\">No bike</text><text x=\"147\" y=\"81\" text-anchor=\"middle\">25</text><text x=\"217\" y=\"81\" text-anchor=\"middle\">12</text><text x=\"281\" y=\"81\" text-anchor=\"middle\">37</text><text class=\"acc\" x=\"61\" y=\"109\" text-anchor=\"middle\">Total</text><text x=\"147\" y=\"109\" text-anchor=\"middle\">41</text><text x=\"217\" y=\"109\" text-anchor=\"middle\">21</text><text x=\"281\" y=\"109\" text-anchor=\"middle\">62</text></svg></figure><p class=\"geo-given\">A survey asked all 62 commuters at one station whether they bike to the station and whether they ride the train. Picture the results in a Venn diagram: <strong>B</strong> is the set of commuters who bike, and <strong>T</strong> is the set who ride the train.</p>",
      claims: [
        {
          id: "overlap",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "In a Venn diagram of these results, which number belongs in the region B ∩ T?",
          choices: [
            { letter: "A", text: "25" },
            { letter: "B", text: "41" },
            { letter: "C", text: "16" },
            { letter: "D", text: "9" }
          ],
          correct: "C"
        },
        {
          id: "union",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many commuters are in B ∪ T?",
          choices: [
            { letter: "A", text: "66" },
            { letter: "B", text: "50" },
            { letter: "C", text: "62" },
            { letter: "D", text: "34" }
          ],
          correct: "B"
        },
        {
          id: "not-t",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many commuters are in ~T?",
          choices: [
            { letter: "A", text: "12" },
            { letter: "B", text: "37" },
            { letter: "C", text: "41" },
            { letter: "D", text: "21" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "How many commuters are counterexamples to “If a commuter bikes to the station, then the commuter rides the train”?",
          choices: [
            { letter: "A", text: "25" },
            { letter: "B", text: "12" },
            { letter: "C", text: "9" },
            { letter: "D", text: "16" }
          ],
          correct: "C"
        },
        {
          id: "kim",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Kim does not bike to the station, but she rides the train. Let b be “Kim bikes to the station” and t be “Kim rides the train.” Which statement is false?",
          choices: [
            { letter: "A", text: "t → b" },
            { letter: "B", text: "b → t" },
            { letter: "C", text: "~b ∨ t" },
            { letter: "D", text: "b ↔ ~t" }
          ],
          correct: "A"
        },
        {
          id: "neither-name",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which expression names the Venn region that holds the 12 commuters who do neither?",
          choices: [
            { letter: "A", text: "~(B ∩ T)" },
            { letter: "B", text: "~(B ∪ T)" },
            { letter: "C", text: "~B ∩ T" },
            { letter: "D", text: "B ∩ ~T" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt1-sky-drawbridge",
      family: "GEO",
      mode: "sky",
      title: "The Drawbridge Light",
      kind: "Logic · G.RLT.1",
      blurb: "A conditional and its converse, side by side.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 144\" role=\"img\" aria-label=\"A raised drawbridge over water beside a road light that is lit. A truth table with columns for the row number, p, q, p → q and q → p. Row 1: T, T, T, T. Row 2: T, F, F, T. Row 3: F, T, T, F. Row 4: F, F, T, T\"><rect class=\"thin\" x=\"8\" y=\"100\" width=\"50\" height=\"40\"/><rect class=\"sh2\" x=\"58\" y=\"114\" width=\"52\" height=\"26\"/><line class=\"ln\" x1=\"8\" y1=\"100\" x2=\"58\" y2=\"100\"/><line class=\"ln\" x1=\"58\" y1=\"100\" x2=\"79.6\" y2=\"59.4\"/><line class=\"thin\" x1=\"22\" y1=\"100\" x2=\"22\" y2=\"58\"/><rect class=\"thin\" x=\"14\" y=\"24\" width=\"16\" height=\"34\" rx=\"3\"/><circle class=\"ac\" cx=\"22\" cy=\"33\" r=\"5\"/><circle class=\"thin\" cx=\"22\" cy=\"49\" r=\"5\"/><rect class=\"thin\" x=\"118\" y=\"8\" width=\"196\" height=\"128\"/><line class=\"ln\" x1=\"118\" y1=\"32\" x2=\"314\" y2=\"32\"/><line class=\"thin\" x1=\"118\" y1=\"58\" x2=\"314\" y2=\"58\"/><line class=\"thin\" x1=\"118\" y1=\"84\" x2=\"314\" y2=\"84\"/><line class=\"thin\" x1=\"118\" y1=\"110\" x2=\"314\" y2=\"110\"/><line class=\"thin\" x1=\"144\" y1=\"8\" x2=\"144\" y2=\"136\"/><line class=\"thin\" x1=\"172\" y1=\"8\" x2=\"172\" y2=\"136\"/><line class=\"thin\" x1=\"200\" y1=\"8\" x2=\"200\" y2=\"136\"/><line class=\"thin\" x1=\"257\" y1=\"8\" x2=\"257\" y2=\"136\"/><text class=\"sm\" x=\"131\" y=\"26\" text-anchor=\"middle\">#</text><text class=\"acc\" x=\"158\" y=\"26\" text-anchor=\"middle\">p</text><text class=\"acc\" x=\"186\" y=\"26\" text-anchor=\"middle\">q</text><text class=\"acc\" x=\"228.5\" y=\"26\" text-anchor=\"middle\">p → q</text><text class=\"acc\" x=\"285.5\" y=\"26\" text-anchor=\"middle\">q → p</text><text class=\"sm\" x=\"131\" y=\"50\" text-anchor=\"middle\">1</text><text x=\"158\" y=\"50\" text-anchor=\"middle\">T</text><text x=\"186\" y=\"50\" text-anchor=\"middle\">T</text><text x=\"228.5\" y=\"50\" text-anchor=\"middle\">T</text><text x=\"285.5\" y=\"50\" text-anchor=\"middle\">T</text><text class=\"sm\" x=\"131\" y=\"76\" text-anchor=\"middle\">2</text><text x=\"158\" y=\"76\" text-anchor=\"middle\">T</text><text x=\"186\" y=\"76\" text-anchor=\"middle\">F</text><text x=\"228.5\" y=\"76\" text-anchor=\"middle\">F</text><text x=\"285.5\" y=\"76\" text-anchor=\"middle\">T</text><text class=\"sm\" x=\"131\" y=\"102\" text-anchor=\"middle\">3</text><text x=\"158\" y=\"102\" text-anchor=\"middle\">F</text><text x=\"186\" y=\"102\" text-anchor=\"middle\">T</text><text x=\"228.5\" y=\"102\" text-anchor=\"middle\">T</text><text x=\"285.5\" y=\"102\" text-anchor=\"middle\">F</text><text class=\"sm\" x=\"131\" y=\"128\" text-anchor=\"middle\">4</text><text x=\"158\" y=\"128\" text-anchor=\"middle\">F</text><text x=\"186\" y=\"128\" text-anchor=\"middle\">F</text><text x=\"228.5\" y=\"128\" text-anchor=\"middle\">T</text><text x=\"285.5\" y=\"128\" text-anchor=\"middle\">T</text></svg></figure><p class=\"geo-given\">Let <strong>p</strong> be “The drawbridge is raised.” Let <strong>q</strong> be “The road light is red.” The table lists all four cases.</p>",
      claims: [
        {
          id: "and-not-row",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "In which row of the table is p ∧ ~q true?",
          choices: [
            { letter: "A", text: "Row 2" },
            { letter: "B", text: "Row 3" },
            { letter: "C", text: "Row 1" },
            { letter: "D", text: "Row 4" }
          ],
          correct: "A"
        },
        {
          id: "contra-col",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "The contrapositive of p → q is not shown in the table. Which column has the same truth value as the contrapositive in every row?",
          choices: [
            { letter: "A", text: "the q → p column" },
            { letter: "B", text: "the q column" },
            { letter: "C", text: "neither column" },
            { letter: "D", text: "the p → q column" }
          ],
          correct: "D"
        },
        {
          id: "conv-false-row",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "In which row is p → q true but its converse false?",
          choices: [
            { letter: "A", text: "Row 2" },
            { letter: "B", text: "Row 3" },
            { letter: "C", text: "Row 1" },
            { letter: "D", text: "Row 4" }
          ],
          correct: "B"
        },
        {
          id: "both-rules",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "The bridge crew follows two rules, p → q and q → p. Which single statement means the same as the pair?",
          choices: [
            { letter: "A", text: "p ∧ q" },
            { letter: "B", text: "p ∨ q" },
            { letter: "C", text: "p ↔ q" },
            { letter: "D", text: "~p → ~q" }
          ],
          correct: "C"
        },
        {
          id: "light-off",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Assume p → q is always true. A driver sees that the road light is not red. What can the driver conclude?",
          choices: [
            { letter: "A", text: "The drawbridge is not raised." },
            { letter: "B", text: "The drawbridge is raised." },
            { letter: "C", text: "Nothing about the drawbridge." },
            { letter: "D", text: "The rule p → q is broken." }
          ],
          correct: "A"
        },
        {
          id: "row3",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which statement is true in row 3 of the table?",
          choices: [
            { letter: "A", text: "q → p" },
            { letter: "B", text: "p ∨ ~q" },
            { letter: "C", text: "p ↔ q" },
            { letter: "D", text: "~p ∧ q" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt1-sky-kite-festival",
      family: "GEO",
      mode: "sky",
      title: "Kites and Drones at the Festival",
      kind: "Logic · G.RLT.1",
      blurb: "A subset inside one set that overlaps another.",
      level: 2,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Venn diagram of 44 people. Circle S lies inside circle K. Circles K and D overlap, and S does not meet D. S holds 7, the rest of K outside D holds 12, K and D together hold 5, D only holds 9, and 11 are outside all circles\"><rect class=\"thin\" x=\"8\" y=\"6\" width=\"304\" height=\"148\"/><circle class=\"sh2\" cx=\"118\" cy=\"82\" r=\"62\"/><circle class=\"sh\" cx=\"90\" cy=\"92\" r=\"26\"/><circle class=\"sh2\" cx=\"206\" cy=\"82\" r=\"50\"/><text x=\"60\" y=\"32\" text-anchor=\"middle\">K</text><text x=\"90\" y=\"60\" text-anchor=\"middle\">S</text><text x=\"264\" y=\"32\" text-anchor=\"middle\">D</text><text class=\"sm\" x=\"16\" y=\"148\">44 people</text><text x=\"90\" y=\"97\" text-anchor=\"middle\">7</text><text x=\"130\" y=\"52\" text-anchor=\"middle\">12</text><text x=\"168\" y=\"87\" text-anchor=\"middle\">5</text><text x=\"228\" y=\"87\" text-anchor=\"middle\">9</text><text x=\"286\" y=\"138\" text-anchor=\"middle\">11</text></svg></figure><p class=\"geo-given\">The diagram sorts all 44 people at a kite festival. <strong>K</strong> is the set who flew a kite, <strong>S</strong> is the set who flew a stunt kite, and <strong>D</strong> is the set who flew a drone. Each number is the number of people in that region.</p>",
      claims: [
        {
          id: "k-count",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many people at the festival flew a kite?",
          choices: [
            { letter: "A", text: "12" },
            { letter: "B", text: "24" },
            { letter: "C", text: "19" },
            { letter: "D", text: "29" }
          ],
          correct: "B"
        },
        {
          id: "k-or-d",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many people are in K ∪ D?",
          choices: [
            { letter: "A", text: "38" },
            { letter: "B", text: "5" },
            { letter: "C", text: "33" },
            { letter: "D", text: "11" }
          ],
          correct: "C"
        },
        {
          id: "true-cond",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which conditional is true for all 44 people?",
          choices: [
            { letter: "A", text: "If a person flew a stunt kite, then the person did not fly a drone." },
            { letter: "B", text: "If a person flew a kite, then the person flew a stunt kite." },
            { letter: "C", text: "If a person did not fly a stunt kite, then the person did not fly a kite." },
            { letter: "D", text: "If a person flew a drone, then the person flew a kite." }
          ],
          correct: "A"
        },
        {
          id: "name-12",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "Which expression names the region with 12 people?",
          choices: [
            { letter: "A", text: "K ∩ S ∩ ~D" },
            { letter: "B", text: "K ∩ ~S ∩ D" },
            { letter: "C", text: "~K ∩ ~S ∩ ~D" },
            { letter: "D", text: "K ∩ ~S ∩ ~D" }
          ],
          correct: "D"
        },
        {
          id: "not-both",
          sol: "G.RLT.1",
          sub: "G.RLT.1.4",
          stem: "How many people are in ~(K ∩ D)?",
          choices: [
            { letter: "A", text: "11" },
            { letter: "B", text: "5" },
            { letter: "C", text: "39" },
            { letter: "D", text: "33" }
          ],
          correct: "C"
        },
        {
          id: "jo",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Jo flew a drone at the festival. Ty says that Jo must have flown a kite too. Is Ty right?",
          choices: [
            { letter: "A", text: "Yes; 5 drone flyers also flew a kite." },
            { letter: "B", text: "No; 9 drone flyers flew no kite." },
            { letter: "C", text: "Yes, by the Law of Detachment." },
            { letter: "D", text: "No; Jo is not in S, so Jo flew no kite." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "geo-rlt1-sky-station-ramps",
      family: "GEO",
      mode: "sky",
      title: "Ramp Rules at the Station",
      kind: "Logic · G.RLT.1",
      blurb: "Two ramps, two rules and a slope to compute.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 62 320 88\" role=\"img\" aria-label=\"Two ramps with handrails drawn as right triangles. Ramp A rises 2 ft over a run of 30 ft. Ramp B rises 2.5 ft over a run of 25 ft\"><line class=\"ln\" x1=\"8\" y1=\"128\" x2=\"312\" y2=\"128\"/><polygon class=\"sh2\" points=\"16,128 151,128 151,101.0\"/><line class=\"ln\" x1=\"16\" y1=\"128\" x2=\"151\" y2=\"101.0\"/><line class=\"ln\" x1=\"151\" y1=\"128\" x2=\"151\" y2=\"101.0\"/><path class=\"thin\" d=\"M143 128 V120 H151\"/><line class=\"thin\" x1=\"36\" y1=\"112.0\" x2=\"140\" y2=\"91.2\"/><line class=\"thin\" x1=\"36.0\" y1=\"124.0\" x2=\"36.0\" y2=\"112.0\"/><line class=\"thin\" x1=\"88.0\" y1=\"113.6\" x2=\"88.0\" y2=\"101.6\"/><line class=\"thin\" x1=\"140.0\" y1=\"103.2\" x2=\"140.0\" y2=\"91.2\"/><text class=\"sm\" x=\"83.5\" y=\"144\" text-anchor=\"middle\">run 30 ft</text><text class=\"sm\" x=\"139\" y=\"124\" text-anchor=\"end\">rise 2 ft</text><text class=\"acc\" x=\"70\" y=\"82\" text-anchor=\"middle\">Ramp A</text><polygon class=\"sh2\" points=\"176,128 288.5,128 288.5,94.0\"/><line class=\"ln\" x1=\"176\" y1=\"128\" x2=\"288.5\" y2=\"94.0\"/><line class=\"ln\" x1=\"288.5\" y1=\"128\" x2=\"288.5\" y2=\"94.0\"/><path class=\"thin\" d=\"M280.5 128 V120 H288.5\"/><line class=\"thin\" x1=\"190\" y1=\"111.8\" x2=\"278\" y2=\"85.2\"/><line class=\"thin\" x1=\"190.0\" y1=\"123.8\" x2=\"190.0\" y2=\"111.8\"/><line class=\"thin\" x1=\"234.0\" y1=\"110.5\" x2=\"234.0\" y2=\"98.5\"/><line class=\"thin\" x1=\"278.0\" y1=\"97.2\" x2=\"278.0\" y2=\"85.2\"/><text class=\"sm\" x=\"232.2\" y=\"144\" text-anchor=\"middle\">run 25 ft</text><text class=\"sm\" x=\"276.5\" y=\"124\" text-anchor=\"end\">rise 2.5 ft</text><text class=\"acc\" x=\"225\" y=\"80\" text-anchor=\"middle\">Ramp B</text></svg><figcaption>Not drawn to scale</figcaption></figure><p class=\"geo-given\">A train station has two ramps, <strong>A</strong> and <strong>B</strong>, and both have handrails. Two rules hold for every ramp at the station.</p><p class=\"geo-given\">Rule 1: A ramp is approved if and only if its slope is at most 1/12. Rule 2: If a ramp rises more than 6 inches, then it has handrails.</p>",
      claims: [
        {
          id: "approved",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Using rule 1, which ramps in the figure are approved?",
          choices: [
            { letter: "A", text: "Ramp B only" },
            { letter: "B", text: "Both ramps" },
            { letter: "C", text: "Neither ramp" },
            { letter: "D", text: "Ramp A only" }
          ],
          correct: "D"
        },
        {
          id: "contra-2",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which is the contrapositive of rule 2?",
          choices: [
            { letter: "A", text: "If a ramp has no handrails, then it rises 6 inches or less." },
            { letter: "B", text: "If a ramp has handrails, then it rises more than 6 inches." },
            { letter: "C", text: "If a ramp rises 6 inches or less, then it has no handrails." },
            { letter: "D", text: "If a ramp has no handrails, then it rises more than 6 inches." }
          ],
          correct: "A"
        },
        {
          id: "ramp-c",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "A new Ramp C rises 5 inches over a run of 4 feet. What can be concluded from the two rules?",
          choices: [
            { letter: "A", text: "It is not approved, and it has no handrails." },
            { letter: "B", text: "It is approved; the rules say nothing about handrails." },
            { letter: "C", text: "It is not approved; the rules say nothing about handrails." },
            { letter: "D", text: "It is approved, and it has no handrails." }
          ],
          correct: "C"
        },
        {
          id: "max",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "A ramp at the station is approved. Max says, “So its slope is at most 1/12.” Which describes his reasoning?",
          choices: [
            { letter: "A", text: "Invalid; it reasons from the converse." },
            { letter: "B", text: "Valid; rule 1 works in both directions." },
            { letter: "C", text: "Invalid; it reasons from the inverse." },
            { letter: "D", text: "Valid, by the Law of Syllogism." }
          ],
          correct: "B"
        },
        {
          id: "yellow",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "A third rule is also true: “If a ramp has handrails, then its edge is painted yellow.” Which conclusion follows from rules 2 and 3?",
          choices: [
            { letter: "A", text: "If a ramp rises more than 6 inches, then its edge is painted yellow." },
            { letter: "B", text: "If a ramp's edge is painted yellow, then it rises more than 6 inches." },
            { letter: "C", text: "If a ramp rises 6 inches or less, then its edge is not painted yellow." },
            { letter: "D", text: "If a ramp has handrails, then it rises more than 6 inches." }
          ],
          correct: "A"
        },
        {
          id: "ramp-b",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "For Ramp B, let s be “Its slope is at most 1/12” and r be “It rises more than 6 inches.” Which statement is true?",
          choices: [
            { letter: "A", text: "s ∨ ~r" },
            { letter: "B", text: "r → s" },
            { letter: "C", text: "~(s ∨ r)" },
            { letter: "D", text: "s → ~r" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "geo-rlt1-sky-snow-day-rails",
      family: "GEO",
      mode: "sky",
      title: "Snow Day on the Rail Line",
      kind: "Logic · G.RLT.1",
      blurb: "One cause, a chain, and a branch.",
      level: 3,
      passage:
        "<figure class=\"geo-fig\"><svg viewBox=\"0 0 320 140\" role=\"img\" aria-label=\"A rail-map diagram of five stations joined by arrows: w points to s, s points to l, and l points to both k and c\"><line class=\"ln\" x1=\"38\" y1=\"76\" x2=\"64\" y2=\"76\"/><path class=\"thin\" d=\"M57 80.2 L64 76 L57 71.8\"/><line class=\"ln\" x1=\"96\" y1=\"76\" x2=\"122\" y2=\"76\"/><path class=\"thin\" d=\"M115 80.2 L122 76 L115 71.8\"/><line class=\"ln\" x1=\"151.8\" y1=\"68\" x2=\"200.2\" y2=\"40\"/><path class=\"thin\" d=\"M196.2 47.2 L200.2 40 L192 39.9\"/><line class=\"ln\" x1=\"151.8\" y1=\"84\" x2=\"200.2\" y2=\"112\"/><path class=\"thin\" d=\"M192 112.1 L200.2 112 L196.2 104.8\"/><circle class=\"sh\" cx=\"22\" cy=\"76\" r=\"14\"/><circle class=\"thin\" cx=\"22\" cy=\"76\" r=\"14\"/><text class=\"acc\" x=\"22\" y=\"81\" text-anchor=\"middle\">w</text><text class=\"sm\" x=\"22\" y=\"108\" text-anchor=\"middle\">snow</text><circle class=\"sh2\" cx=\"80\" cy=\"76\" r=\"14\"/><circle class=\"thin\" cx=\"80\" cy=\"76\" r=\"14\"/><text class=\"acc\" x=\"80\" y=\"81\" text-anchor=\"middle\">s</text><text class=\"sm\" x=\"80\" y=\"50\" text-anchor=\"middle\">slow trains</text><circle class=\"sh2\" cx=\"138\" cy=\"76\" r=\"14\"/><circle class=\"thin\" cx=\"138\" cy=\"76\" r=\"14\"/><text class=\"acc\" x=\"138\" y=\"81\" text-anchor=\"middle\">l</text><text class=\"sm\" x=\"138\" y=\"108\" text-anchor=\"middle\">7:40 late</text><circle class=\"sh2\" cx=\"214\" cy=\"32\" r=\"14\"/><circle class=\"thin\" cx=\"214\" cy=\"32\" r=\"14\"/><text class=\"acc\" x=\"214\" y=\"37\" text-anchor=\"middle\">k</text><text class=\"sm\" x=\"268\" y=\"37\" text-anchor=\"middle\">delay ticket</text><circle class=\"sh2\" cx=\"214\" cy=\"120\" r=\"14\"/><circle class=\"thin\" cx=\"214\" cy=\"120\" r=\"14\"/><text class=\"acc\" x=\"214\" y=\"125\" text-anchor=\"middle\">c</text><text class=\"sm\" x=\"264\" y=\"125\" text-anchor=\"middle\">miss ferry</text></svg></figure><p class=\"geo-given\">Each arrow in the rail-map diagram is a true conditional: <strong>w</strong> → <strong>s</strong>, <strong>s</strong> → <strong>l</strong>, <strong>l</strong> → <strong>k</strong> and <strong>l</strong> → <strong>c</strong>.</p><p class=\"geo-given\"><strong>w</strong>: Snow falls on the tracks. <strong>s</strong>: Trains run at reduced speed. <strong>l</strong>: The 7:40 train is late. <strong>k</strong>: Riders get a delay ticket. <strong>c</strong>: Commuters miss the 8:15 ferry.</p>",
      claims: [
        {
          id: "snow",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Snow falls on the tracks today. What can be concluded?",
          choices: [
            { letter: "A", text: "Riders get a delay ticket, but commuters may catch the ferry." },
            { letter: "B", text: "The 7:40 is late, but riders may get no delay ticket." },
            { letter: "C", text: "Riders get a delay ticket, and commuters miss the ferry." },
            { letter: "D", text: "Only that trains run at reduced speed." }
          ],
          correct: "C"
        },
        {
          id: "syllogism",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Which conditional follows by the Law of Syllogism?",
          choices: [
            { letter: "A", text: "k → c" },
            { letter: "B", text: "s → c" },
            { letter: "C", text: "c → s" },
            { letter: "D", text: "k → l" }
          ],
          correct: "B"
        },
        {
          id: "ticket",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Today riders get a delay ticket. Which conclusion is valid?",
          choices: [
            { letter: "A", text: "The 7:40 train is late." },
            { letter: "B", text: "Commuters miss the 8:15 ferry." },
            { letter: "C", text: "Snow falls on the tracks." },
            { letter: "D", text: "Nothing else can be concluded." }
          ],
          correct: "D"
        },
        {
          id: "ferry",
          sol: "G.RLT.1",
          sub: "G.RLT.1.3",
          stem: "Today commuters catch the 8:15 ferry. What can be concluded?",
          choices: [
            { letter: "A", text: "No snow falls on the tracks." },
            { letter: "B", text: "Riders get no delay ticket." },
            { letter: "C", text: "Trains run at reduced speed." },
            { letter: "D", text: "Nothing can be concluded." }
          ],
          correct: "A"
        },
        {
          id: "must-true",
          sol: "G.RLT.1",
          sub: "G.RLT.1.2",
          stem: "Which statement must be true?",
          choices: [
            { letter: "A", text: "~l → ~k" },
            { letter: "B", text: "~k → ~l" },
            { letter: "C", text: "k → l" },
            { letter: "D", text: "c → k" }
          ],
          correct: "B"
        },
        {
          id: "or-words",
          sol: "G.RLT.1",
          sub: "G.RLT.1.1",
          stem: "Which sentence is ~k ∨ c?",
          choices: [
            { letter: "A", text: "Riders do not get a delay ticket, and commuters miss the 8:15 ferry." },
            { letter: "B", text: "If riders do not get a delay ticket, then commuters miss the 8:15 ferry." },
            { letter: "C", text: "Riders do not get a delay ticket, or commuters miss the 8:15 ferry." },
            { letter: "D", text: "Riders get a delay ticket, or commuters do not miss the 8:15 ferry." }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
