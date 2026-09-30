/* SOL Labyrinth — v5 content: Grade 9 vocabulary-in-context and paired-text packs.
 * Original text only; no VDOE / copyrighted material. Loaded after content.js and
 * pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── VOCABULARY · 9.RV ───────────────────────── */
    {
      id: "g9-rv-repairbooth",
      family: "G9",
      title: "The Repair Booth",
      kind: "Vocabulary · 9.RV",
      blurb: "A first day fixing bikes at the library's Repair Day, with five words to work out.",
      level: 1,
      passage:
        "<p>" + N(1) + "On Repair Day the library parking lot filled with folding tables, and Ines, a complete <strong>novice</strong> who had never held a wrench, was assigned to her uncle Rafael's bicycle booth. " +
        N(2) + "\"You will learn by watching first,\" he said, \"and then by doing.\" " +
        N(3) + "The first customer rolled in a bike with a chain so rusted it looked like a strip of old fence. " +
        N(4) + "Rafael showed Ines how to <strong>assess</strong> the damage before touching anything: check the frame, spin each wheel, squeeze the brakes, and only then decide what to fix. " +
        N(5) + "\"Guessing is faster,\" he said, \"but looking is cheaper.\" " +
        N(6) + "Cleaning the chain one link at a time was <strong>tedious</strong> work, and by the twentieth link Ines caught herself yawning and counting the minutes. " +
        N(7) + "Still, she kept going, because the owner, a boy about her age, was watching every move as if the bike were a patient. " +
        N(8) + "When they discovered that the booth had no spare brake cable, Rafael had to <strong>improvise</strong>, trimming a longer cable from the scrap bin and crimping the end with pliers. " +
        N(9) + "\"It is not pretty,\" he admitted, \"but it will hold.\" " +
        N(10) + "The last customer wanted the cheapest tire on the table, and Rafael steered her instead toward a <strong>durable</strong> one that cost a little more but would last through years of gravel and rain. " +
        N(11) + "By the end of the afternoon Ines had grease on both elbows and, without noticing when it had happened, had stopped being a novice." +
        "</p>",
      claims: [
        {
          id: "novice",
          sol: "9.RV.1.C",
          stem: "In sentence 1, the word novice most nearly means —",
          choices: [
            { letter: "A", text: "an expert" },
            { letter: "B", text: "a volunteer" },
            { letter: "C", text: "a beginner" },
            { letter: "D", text: "a relative" }
          ],
          correct: "C"
        },
        {
          id: "assess",
          sol: "9.RV.1.C",
          stem: "Rafael's advice in sentence 5, that looking is cheaper than guessing, helps show that assess in sentence 4 means to —",
          choices: [
            { letter: "A", text: "examine something carefully before acting" },
            { letter: "B", text: "repair something as quickly as possible" },
            { letter: "C", text: "charge a customer a fair price for a part" },
            { letter: "D", text: "replace a part instead of fixing it" }
          ],
          correct: "A"
        },
        {
          id: "tedious",
          sol: "9.RV.1.E",
          stem: "The author could have written slow instead of tedious in sentence 6. Compared with slow, the word tedious adds a sense that the work was —",
          choices: [
            { letter: "A", text: "dangerous" },
            { letter: "B", text: "boring" },
            { letter: "C", text: "expensive" },
            { letter: "D", text: "important" }
          ],
          correct: "B"
        },
        {
          id: "improvise",
          sol: "9.RV.1.C",
          stem: "In sentence 8, improvise most nearly means to —",
          choices: [
            { letter: "A", text: "follow written directions exactly" },
            { letter: "B", text: "send the customer to another booth" },
            { letter: "C", text: "ask a more experienced worker for help" },
            { letter: "D", text: "make do with whatever is available" }
          ],
          correct: "D"
        },
        {
          id: "durable",
          sol: "9.RV.1.B",
          stem: "The word durable in sentence 10 shares a root with endure and duration. That root carries the idea of —",
          choices: [
            { letter: "A", text: "lasting through time" },
            { letter: "B", text: "moving at high speed" },
            { letter: "C", text: "costing a great deal" },
            { letter: "D", text: "being made of rubber" }
          ],
          correct: "A"
        },
        {
          id: "patient",
          sol: "9.RV.1.F",
          stem: "In sentence 7, comparing the bike to a patient mainly suggests that the owner —",
          choices: [
            { letter: "A", text: "hopes to become a doctor someday" },
            { letter: "B", text: "cares about the bike and worries about it" },
            { letter: "C", text: "thinks Ines is working far too slowly" },
            { letter: "D", text: "believes the bike is beyond repair" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rv-weatherstation",
      family: "G9",
      title: "The Rooftop Weather Station",
      kind: "Vocabulary · 9.RV",
      blurb: "Two science-fair partners learn that a wrong number is worse than no number.",
      level: 2,
      passage:
        "<p>" + N(1) + "For the science fair, Tomas and Brianna mounted a homemade weather station on the roof of the field house, with a rain gauge, a wind vane and a thermometer that had to be <strong>calibrated</strong> against the one at the airport before its readings could be trusted. " +
        N(2) + "\"A thermometer that is off by two degrees is worse than no thermometer,\" Brianna said, \"because it lies with a straight face.\" " +
        N(3) + "For the first week their wind readings were <strong>erratic</strong>, jumping from calm to gale and back within minutes, until Tomas discovered the vane was catching on a loose screw. " +
        N(4) + "Once he tightened it, the numbers settled into a pattern they could actually graph. " +
        N(5) + "The rain gauge, by contrast, showed a <strong>negligible</strong> difference from the airport's total, less than a tenth of an inch over ten days, so they left it alone. " +
        N(6) + "The hard part was learning to anticipate the weather instead of just recording it: to look at falling pressure on Tuesday and say something useful about Wednesday. " +
        N(7) + "Their first three forecasts were wrong, and Brianna wanted to drop that section of the project. " +
        N(8) + "Tomas was more <strong>persistent</strong>; he kept a notebook of every miss and hunted for the reason behind each one. " +
        N(9) + "By the fair their forecasts were right four days out of five, and the judges reached a quick <strong>consensus</strong>, awarding the pair the top ribbon in earth science. " +
        N(10) + "Brianna admitted later that the notebook of mistakes had been the best part of the display; anyone could show a graph, but it took a certain stubbornness to show where you had gone wrong." +
        "</p>",
      claims: [
        {
          id: "calibrated",
          sol: "9.RV.1.C",
          stem: "In sentence 1, a thermometer that has been calibrated is one that has been —",
          choices: [
            { letter: "A", text: "mounted on a high roof" },
            { letter: "B", text: "replaced with a newer model" },
            { letter: "C", text: "read at the same time daily" },
            { letter: "D", text: "checked against a trusted standard" }
          ],
          correct: "D"
        },
        {
          id: "erratic",
          sol: "9.RV.1.C",
          stem: "Which words from sentence 3 best help the reader understand the meaning of erratic?",
          choices: [
            { letter: "A", text: "For the first week their wind readings" },
            { letter: "B", text: "jumping from calm to gale and back" },
            { letter: "C", text: "until Tomas discovered the vane" },
            { letter: "D", text: "was catching on a loose screw" }
          ],
          correct: "B"
        },
        {
          id: "negligible",
          sol: "9.RV.1.C",
          stem: "In sentence 5, negligible most nearly means —",
          choices: [
            { letter: "A", text: "too small to matter" },
            { letter: "B", text: "impossible to measure" },
            { letter: "C", text: "larger than expected" },
            { letter: "D", text: "recorded by mistake" }
          ],
          correct: "A"
        },
        {
          id: "consensus",
          sol: "9.RV.1.B",
          stem: "The word consensus in sentence 9 begins with the prefix con-, as in connect and combine. The prefix helps show that a consensus is an opinion that —",
          choices: [
            { letter: "A", text: "changes from one day to the next" },
            { letter: "B", text: "belongs to a single expert" },
            { letter: "C", text: "is reached together by a group" },
            { letter: "D", text: "is written in an official report" }
          ],
          correct: "C"
        },
        {
          id: "persistent",
          sol: "9.RV.1.E",
          stem: "Sentence 10 calls the quality behind the notebook a certain stubbornness. Compared with stubborn, the word persistent in sentence 8 has a connotation that is more —",
          choices: [
            { letter: "A", text: "negative, suggesting a refusal to listen" },
            { letter: "B", text: "positive, suggesting steady effort" },
            { letter: "C", text: "neutral, suggesting no opinion at all" },
            { letter: "D", text: "playful, suggesting a private joke" }
          ],
          correct: "B"
        },
        {
          id: "straightface",
          sol: "9.RV.1.F",
          stem: "In sentence 2, saying that a bad thermometer lies with a straight face means that it —",
          choices: [
            { letter: "A", text: "shows wrong numbers while looking reliable" },
            { letter: "B", text: "breaks without warning in cold weather" },
            { letter: "C", text: "costs more than an accurate one" },
            { letter: "D", text: "must be read from directly in front" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rv-bakery",
      family: "G9",
      title: "Four A.M. at the Bakery",
      kind: "Vocabulary · 9.RV",
      blurb: "Kenji's first week as an apprentice: three hundred rolls and two mistakes.",
      level: 2,
      passage:
        "<p>" + N(1) + "Kenji had imagined that working at his aunt Mariko's bakery would mean tasting things, but as an <strong>apprentice</strong> he spent his first week learning to do exactly what he was told, in the order he was told to do it. " +
        N(2) + "The morning began at four, when the ovens were still cold and the only sound was the hum of the walk-in cooler. " +
        N(3) + "Shaping three hundred rolls was <strong>monotonous</strong> work; each one had to be folded, turned and pinched the same way, and by the fiftieth roll his hands moved without asking his brain. " +
        N(4) + "Mariko checked every tray with a <strong>diligent</strong> eye, lifting any roll that was a shade too pale and setting it aside for the day-old basket. " +
        N(5) + "\"Customers do not see three hundred rolls,\" she said. \"They see the one they bought.\" " +
        N(6) + "Between batches Kenji wiped the steel counters until they were <strong>immaculate</strong>, because flour left overnight turned into a paste that took twice as long to scrub. " +
        N(7) + "By seven the door opened and business turned <strong>brisk</strong>: the line moved fast, coffee cups stacked up, and the display case emptied from the top shelf down. " +
        N(8) + "At the end of that first Saturday, Mariko handed him a paper bag with two slightly pale rolls inside. " +
        N(9) + "\"Your mistakes,\" she said, \"and they are still better than most people's bread.\" " +
        N(10) + "Kenji ate one on the bus home and realized that the praise had been baked in as carefully as the rolls." +
        "</p>",
      claims: [
        {
          id: "apprentice",
          sol: "9.RV.1.C",
          stem: "In sentence 1, an apprentice is best described as someone who —",
          choices: [
            { letter: "A", text: "owns a small family business" },
            { letter: "B", text: "tastes food for a living" },
            { letter: "C", text: "visits a shop as a regular customer" },
            { letter: "D", text: "learns a trade under an expert" }
          ],
          correct: "D"
        },
        {
          id: "monotonous",
          sol: "9.RV.1.B",
          stem: "The word monotonous in sentence 3 begins with mono-, as in monologue and monorail. This prefix helps show that monotonous work is work that —",
          choices: [
            { letter: "A", text: "is done by one person alone" },
            { letter: "B", text: "must be finished within one hour" },
            { letter: "C", text: "stays the same without variety" },
            { letter: "D", text: "is the first task of the day" }
          ],
          correct: "C"
        },
        {
          id: "diligent",
          sol: "9.RV.1.C",
          stem: "In sentence 4, a diligent eye is one that is —",
          choices: [
            { letter: "A", text: "tired and slow" },
            { letter: "B", text: "careful and thorough" },
            { letter: "C", text: "quick and careless" },
            { letter: "D", text: "warm and friendly" }
          ],
          correct: "B"
        },
        {
          id: "immaculate",
          sol: "9.RV.1.C",
          stem: "In sentence 6, immaculate most nearly means —",
          choices: [
            { letter: "A", text: "perfectly clean" },
            { letter: "B", text: "slightly damp" },
            { letter: "C", text: "made of steel" },
            { letter: "D", text: "dusted with flour" }
          ],
          correct: "A"
        },
        {
          id: "brisk",
          sol: "9.RV.1.E",
          stem: "The author could have written busy instead of brisk in sentence 7. Compared with busy, the word brisk adds a sense of —",
          choices: [
            { letter: "A", text: "confusion and stress" },
            { letter: "B", text: "quiet, patient waiting" },
            { letter: "C", text: "anger and complaint" },
            { letter: "D", text: "quick, energetic movement" }
          ],
          correct: "D"
        },
        {
          id: "bakedin",
          sol: "9.RV.1.F",
          stem: "In sentence 10, saying the praise had been baked in as carefully as the rolls suggests that Mariko —",
          choices: [
            { letter: "A", text: "forgot to thank Kenji for his help" },
            { letter: "B", text: "chose her words as carefully as her work" },
            { letter: "C", text: "gave Kenji the pale rolls by mistake" },
            { letter: "D", text: "expects Kenji to bake alone next week" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rv-chessladder",
      family: "G9",
      title: "The Chess Ladder",
      kind: "Vocabulary · 9.RV",
      blurb: "A slow climb up the club ladder ends in a ninety-minute match with no checkmate.",
      level: 3,
      passage:
        "<p>" + N(1) + "The chess club kept its ladder taped inside the supply closet: twenty names on strips of masking tape, with the champion, Adaeze, on top for so long that the tape under her name had yellowed. " +
        N(2) + "She was a <strong>formidable</strong> opponent not because she attacked but because she never seemed to hurry; her pieces arrived where they were needed a move before you understood why. " +
        N(3) + "Rowan, at number eleven, had spent the fall making <strong>deliberate</strong> climbs, challenging only the player directly above him and studying that player's habits for a week first. " +
        N(4) + "His friends called the plan boring, and he did not argue. " +
        N(5) + "When he reached number two, the club advisor, Mr. Sato, mentioned that a challenge to the top was allowed at any time. " +
        N(6) + "Rowan considered an <strong>audacious</strong> opening he had seen only in books, one that gave away a knight early for an attack that might never arrive. " +
        N(7) + "He rejected it; the point was not to surprise Adaeze but to outlast her. " +
        N(8) + "The match went ninety minutes. " +
        N(9) + "Twice Rowan was a pawn down and twice he crept back, while the crowd at the closet door grew from four people to twenty. " +
        N(10) + "In the end there was no checkmate; Adaeze studied the board, saw that her position would only get worse, and quietly tipped her king to <strong>concede</strong>. " +
        N(11) + "\"Most players think winning means the loudest move,\" she told him afterward. " +
        N(12) + "\"You won with <strong>tenacity</strong>, which is quieter and harder.\" " +
        N(13) + "Rowan did not feel like a champion, only like someone who had refused to leave a room. " +
        N(14) + "The next morning a fresh strip of tape went up, and the yellowed one, which Mr. Sato could not bring himself to throw away, went into his desk drawer." +
        "</p>",
      claims: [
        {
          id: "formidable",
          sol: "9.RV.1.C",
          stem: "In sentence 2, the word formidable most nearly means —",
          choices: [
            { letter: "A", text: "friendly and talkative" },
            { letter: "B", text: "difficult to defeat" },
            { letter: "C", text: "quick to attack" },
            { letter: "D", text: "new to the club" }
          ],
          correct: "B"
        },
        {
          id: "deliberate",
          sol: "9.RV.1.E",
          stem: "The author could have written slow instead of deliberate in sentence 3. Compared with slow, the word deliberate suggests that Rowan's climbs were —",
          choices: [
            { letter: "A", text: "lazy" },
            { letter: "B", text: "accidental" },
            { letter: "C", text: "carefully planned" },
            { letter: "D", text: "unusually lucky" }
          ],
          correct: "C"
        },
        {
          id: "audacious",
          sol: "9.RV.1.C",
          stem: "In sentence 6, audacious most nearly means —",
          choices: [
            { letter: "A", text: "cautious" },
            { letter: "B", text: "traditional" },
            { letter: "C", text: "forbidden" },
            { letter: "D", text: "daring" }
          ],
          correct: "D"
        },
        {
          id: "concede",
          sol: "9.RV.1.B",
          stem: "The word concede in sentence 10 shares the root cede, meaning to go or yield, with recede and proceed. In the sentence, to concede is to —",
          choices: [
            { letter: "A", text: "give the game to an opponent" },
            { letter: "B", text: "move the king out of danger" },
            { letter: "C", text: "ask the advisor for more time" },
            { letter: "D", text: "go back over earlier moves" }
          ],
          correct: "A"
        },
        {
          id: "tenacity",
          sol: "9.RV.1.C",
          stem: "In sentence 12, tenacity most nearly means —",
          choices: [
            { letter: "A", text: "a flash of sudden inspiration" },
            { letter: "B", text: "a steady refusal to give up" },
            { letter: "C", text: "a loud and forceful style" },
            { letter: "D", text: "knowledge of famous openings" }
          ],
          correct: "B"
        },
        {
          id: "room",
          sol: "9.RV.1.F",
          stem: "In sentence 13, describing Rowan as someone who had refused to leave a room mainly emphasizes that his victory came from —",
          choices: [
            { letter: "A", text: "endurance rather than brilliance" },
            { letter: "B", text: "arriving before anyone else" },
            { letter: "C", text: "keeping the crowd at the door" },
            { letter: "D", text: "avoiding the match until ready" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── PAIRED TEXTS · 9.DSR ───────────────────────── */
    {
      id: "g9-dsr-vending",
      family: "G9",
      title: "Vending Machines: Office Notice + Council Post",
      kind: "Paired texts · 9.DSR",
      blurb: "The main office wants the machines off by day; the student council wants a chance first.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Notice from the Main Office</strong></p>" +
        "<p>" + N(1) + "Starting next Monday, the two vending machines outside the gym will be switched off during the school day and turned back on at 3:15 p.m. " +
        N(2) + "Over the past month, custodians have picked up an average of 60 wrappers and cans per day from the hallway floor and the courtyard. " +
        N(3) + "Teachers have also reported students arriving late to third period after stopping at the machines between classes. " +
        N(4) + "The machines were installed to raise money for the athletic department, and because most of those sales happen after practices, that fund should not be affected. " +
        N(5) + "The machines will remain available for after-school clubs and sports. " +
        N(6) + "We appreciate your patience while we test this change through the end of the quarter.</p>" +
        "<p><strong>Text 2 — Post from the Student Council</strong></p>" +
        "<p>" + N(7) + "We understand the office's concern about litter, but turning the machines off during the day punishes the many for the choices of a few. " +
        N(8) + "The cafeteria closes at 12:40, and students with a late lunch or a morning practice have nowhere else to get a snack until the final bell. " +
        N(9) + "Last spring the council ran a two-week recycling contest with a labeled bin beside each machine, and the trash on the floor dropped by more than half. " +
        N(10) + "We are asking the office to try that first: add the bins, post a reminder above the machines, and let council members check the area during lunch. " +
        N(11) + "If the litter has not improved by the end of the quarter, we will support the shutdown. " +
        N(12) + "Give students a chance to fix the problem before the problem is fixed for them." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          stem: "Which statement would both writers most likely accept?",
          choices: [
            { letter: "A", text: "The machines should be removed for good." },
            { letter: "B", text: "Litter near the machines is a real problem." },
            { letter: "C", text: "The cafeteria should stay open all afternoon." },
            { letter: "D", text: "The athletic fund matters more than clean halls." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "Which statement best describes how the two texts differ?",
          choices: [
            { letter: "A", text: "Text 1 blames teachers for the litter; Text 2 blames the custodians." },
            { letter: "B", text: "Text 1 says the machines lose money; Text 2 says they make money." },
            { letter: "C", text: "Text 1 supports after-school access; Text 2 opposes it." },
            { letter: "D", text: "Text 1 wants to test a shutdown first; Text 2 wants to test bins and reminders first." }
          ],
          correct: "D"
        },
        {
          id: "challenge",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does the council most directly challenge in sentence 7?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "A"
        },
        {
          id: "selecttwo",
          sol: "9.DSR.E",
          stem: "Select TWO details the council uses to argue against a daytime shutdown.",
          choices: [
            { letter: "A", text: "the cafeteria closes at 12:40" },
            { letter: "B", text: "custodians pick up 60 wrappers a day" },
            { letter: "C", text: "a recycling contest cut floor trash by more than half" },
            { letter: "D", text: "the machines raise money for athletics" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "purpose",
          sol: "9.RI.1.C",
          stem: "The council includes sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "explain why the cafeteria closes early" },
            { letter: "B", text: "argue that morning practices should end" },
            { letter: "C", text: "show who would be hurt by a daytime shutdown" },
            { letter: "D", text: "thank the office for its patience" }
          ],
          correct: "C"
        },
        {
          id: "synth",
          sol: "9.DSR.E",
          stem: "Taken together, the two texts best support the conclusion that —",
          choices: [
            { letter: "A", text: "the office intends to remove the machines for good" },
            { letter: "B", text: "the council refuses to help clean the hallway floor" },
            { letter: "C", text: "the athletic department has objected to the change" },
            { letter: "D", text: "both sides treat the end of the quarter as the time to judge results" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-dsr-busroute",
      family: "G9",
      title: "Route 14: District Notice + Rider's Post",
      kind: "Paired texts · 9.DSR",
      blurb: "A bus stop moves two blocks, and a rider asks what the notice leaves out.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Notice from the Transportation Office</strong></p>" +
        "<p>" + N(1) + "Beginning October 1, Bus Route 14 will no longer stop at Maple and Third Street. " +
        N(2) + "Riders who use that stop should walk to the new stop at Maple and Fifth, two blocks north, where a sidewalk and a streetlight were installed this summer. " +
        N(3) + "The change removes a left turn across four lanes of traffic that drivers describe as the most difficult turn on the route. " +
        N(4) + "It also shortens the morning ride for the 38 students who board after Maple by about six minutes. " +
        N(5) + "Families who need help with the new walk may call the office to ask about a courtesy stop. " +
        N(6) + "We know that changes to a routine are never easy, and we thank riders for adjusting.</p>" +
        "<p><strong>Text 2 — Post on the student news site</strong></p>" +
        "<p>" + N(7) + "I have caught the bus at Maple and Third since sixth grade, and I understand why the district wants to skip that left turn. " +
        N(8) + "Nobody who has sat on the bus while it waited through three light cycles would argue for keeping it. " +
        N(9) + "But the notice makes the two-block walk sound like a stroll. " +
        N(10) + "Between Third and Fifth there is a hill, and in January the new sidewalk will be the first thing in the neighborhood to ice over. " +
        N(11) + "My neighbor, who rides with a leg brace, has already been told that a courtesy stop is \"under review.\" " +
        N(12) + "The district fixed a problem for the driver and passed a smaller one to us. " +
        N(13) + "That may be a fair trade, but it should be called a trade, not an upgrade." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          stem: "Which idea do both writers accept?",
          choices: [
            { letter: "A", text: "The walk to Fifth Street is easy for everyone." },
            { letter: "B", text: "The morning ride should be made longer." },
            { letter: "C", text: "Courtesy stops should be ended." },
            { letter: "D", text: "The left turn at Maple and Third is a problem." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The two texts differ mainly in how they describe —",
          choices: [
            { letter: "A", text: "the number of students who ride Route 14" },
            { letter: "B", text: "the difficulty of the walk to Maple and Fifth" },
            { letter: "C", text: "the date on which the change begins" },
            { letter: "D", text: "the reason drivers dislike the left turn" }
          ],
          correct: "B"
        },
        {
          id: "question",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does the rider most directly question in sentence 9?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "A"
        },
        {
          id: "selecttwo",
          sol: "9.DSR.E",
          stem: "Select TWO details from Text 2 that support the rider's claim that the walk is harder than the notice suggests.",
          choices: [
            { letter: "A", text: "the bus waits through three light cycles" },
            { letter: "B", text: "there is a hill between Third and Fifth" },
            { letter: "C", text: "the new sidewalk will ice over in January" },
            { letter: "D", text: "the rider has used the stop since sixth grade" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "trade",
          sol: "9.RV.1.F",
          stem: "In sentence 13, the rider's distinction between a trade and an upgrade mainly suggests that the change —",
          choices: [
            { letter: "A", text: "helps drivers and riders equally" },
            { letter: "B", text: "should be delayed until January" },
            { letter: "C", text: "was made without asking any driver" },
            { letter: "D", text: "has a cost for riders the notice leaves out" }
          ],
          correct: "D"
        },
        {
          id: "synth",
          sol: "9.DSR.E",
          stem: "Using both texts, a reader can best conclude that the courtesy stop mentioned in sentence 5 —",
          choices: [
            { letter: "A", text: "has already been approved for every family" },
            { letter: "B", text: "is guaranteed to students with a leg brace" },
            { letter: "C", text: "may be harder to get than the notice implies" },
            { letter: "D", text: "will replace the stop at Maple and Fifth" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-dsr-mural",
      family: "G9",
      title: "Underpass Mural: Grant Summary + Neighbor's Column",
      kind: "Paired texts · 9.DSR",
      blurb: "A youth arts group has a plan for an ugly wall; a longtime neighbor has one request.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Summary from a Youth Arts Grant application</strong></p>" +
        "<p>" + N(1) + "The Eastside Youth Arts Collective requests $4,800 to paint a mural on the north wall of the Harbor Street underpass. " +
        N(2) + "Twelve student artists, working with a professional muralist, will design the piece over six weeks and paint it during two weekends in May. " +
        N(3) + "The wall has been tagged with graffiti eleven times in the past year, and the city spends roughly $300 to repaint it each time. " +
        N(4) + "Reports from other cities show that walls with community murals are tagged far less often, because most taggers respect finished artwork. " +
        N(5) + "The design will feature the neighborhood's history, from the old cannery to the new library, and residents will be invited to two open meetings to suggest images. " +
        N(6) + "The finished mural will be sealed with a clear coating so that any future graffiti can be wiped off without damaging the paint.</p>" +
        "<p><strong>Text 2 — Column in the neighborhood newsletter</strong></p>" +
        "<p>" + N(7) + "I have lived across from the Harbor Street underpass for thirty years, and I want to like the mural plan. " +
        N(8) + "The students are talented, the wall is ugly, and I am tired of watching gray paint roll over the same scrawls every month. " +
        N(9) + "My hesitation is not about art but about who decides. " +
        N(10) + "Two open meetings sound generous until you notice that both are scheduled for weekday mornings, when most people who walk under that bridge are at work. " +
        N(11) + "The cannery closed before these artists were born; the history they paint will be the history they were told. " +
        N(12) + "I am not asking the collective to cancel; I am asking them to hold one meeting on a Saturday and to let the neighborhood choose at least one image. " +
        N(13) + "A mural that belongs to everyone gets protected by everyone, which is the whole argument for painting it in the first place." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          stem: "Both writers would most likely agree that —",
          choices: [
            { letter: "A", text: "the open meetings should be canceled" },
            { letter: "B", text: "the city should repaint the wall more often" },
            { letter: "C", text: "the underpass wall needs something better than gray paint" },
            { letter: "D", text: "students should not paint neighborhood history" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The two texts differ mainly on the question of —",
          choices: [
            { letter: "A", text: "whether residents have a real voice in the design" },
            { letter: "B", text: "how much the mural will cost the city" },
            { letter: "C", text: "whether graffiti is a problem at the underpass" },
            { letter: "D", text: "how long the painting will take" }
          ],
          correct: "A"
        },
        {
          id: "builds",
          sol: "9.DSR.E",
          stem: "How does sentence 13 of Text 2 use an idea from Text 1?",
          choices: [
            { letter: "A", text: "It repeats the cost figure from sentence 3 to argue that the mural is too expensive." },
            { letter: "B", text: "It rejects the clear coating described in sentence 6." },
            { letter: "C", text: "It questions whether twelve students can paint the whole wall." },
            { letter: "D", text: "It turns the reasoning in sentence 4 into an argument for wider community input." }
          ],
          correct: "D"
        },
        {
          id: "selecttwo",
          sol: "9.DSR.E",
          stem: "Select TWO sentences from Text 2 that give reasons the columnist thinks the neighborhood's voice may be missing from the design.",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "purpose",
          sol: "9.RI.1.C",
          stem: "The grant summary includes sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "explain how the artists will choose their colors" },
            { letter: "B", text: "show that the mural will be practical to maintain" },
            { letter: "C", text: "describe the cannery's role in the neighborhood" },
            { letter: "D", text: "prove that taggers respect finished art" }
          ],
          correct: "B"
        },
        {
          id: "synth",
          sol: "9.DSR.E",
          stem: "Reading the two texts together, a reader learns that —",
          choices: [
            { letter: "A", text: "the plan's meeting schedule may exclude working residents" },
            { letter: "B", text: "the collective has already refused a Saturday meeting" },
            { letter: "C", text: "the city has declined to fund the mural project" },
            { letter: "D", text: "the muralist grew up beside the old cannery" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-dsr-boardwalk",
      family: "G9",
      title: "Cedar Marsh: Park Report + Field Journal",
      kind: "Paired texts · 9.DSR",
      blurb: "A county report counts what a new boardwalk saved; a naturalist records what it cost.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the county parks annual report</strong></p>" +
        "<p>" + N(1) + "The Cedar Marsh boardwalk, completed in March, replaced two miles of informal footpaths that had spread across the wetland like cracks in glass. " +
        N(2) + "Visitor counts rose 40 percent in the first season, and the number of trampled areas fell from 31 to 4. " +
        N(3) + "Because the boardwalk stands 18 inches above the mud, water now moves freely beneath it, and an August survey recorded three plant species that had not been seen in the marsh since 2019. " +
        N(4) + "Rangers report fewer calls about lost hikers, since a single raised route cannot be mistaken for a shortcut. " +
        N(5) + "The project shows that access and protection are not opposites: when people are given a good place to stand, they stop standing everywhere else.</p>" +
        "<p><strong>Text 2 — From the field journal of a volunteer naturalist</strong></p>" +
        "<p>" + N(6) + "The boardwalk is a success, and I walk it most mornings, and I miss the marsh. " +
        N(7) + "On the old paths you learned the wetland with your feet: where the ground gave, where it held, which grasses cut and which folded. " +
        N(8) + "Now the marsh is something you look at, an exhibit with a railing. " +
        N(9) + "The heron I used to surprise at the bend has moved to a channel the boardwalk does not reach, which is, I admit, exactly the point. " +
        N(10) + "The children I lead on Saturdays stay dry and ask better questions than before, because they are not busy sinking. " +
        N(11) + "So I am not arguing against the planks, only recording what they cost, since a report that counts trampled patches will never count the feeling of mud. " +
        N(12) + "Both numbers are real. " +
        N(13) + "Only one of them gets written down." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          stem: "The two writers agree that the boardwalk has —",
          choices: [
            { letter: "A", text: "made the wetland harder to reach" },
            { letter: "B", text: "driven every bird from the marsh" },
            { letter: "C", text: "failed to attract more visitors" },
            { letter: "D", text: "reduced damage to the marsh" }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "Which statement best describes a key difference between the texts?",
          choices: [
            { letter: "A", text: "Text 1 measures the boardwalk in numbers; Text 2 records what the numbers miss." },
            { letter: "B", text: "Text 1 opposes the boardwalk; Text 2 defends it from its critics." },
            { letter: "C", text: "Text 1 describes the old paths; Text 2 describes only the new route." },
            { letter: "D", text: "Text 1 is written for children; Text 2 is written for rangers." }
          ],
          correct: "A"
        },
        {
          id: "respond",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does sentence 11 of Text 2 most directly respond to?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "B"
        },
        {
          id: "selecttwo",
          sol: "9.DSR.E",
          stem: "Select TWO sentences from Text 2 that acknowledge a benefit also reported in Text 1.",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "cracks",
          sol: "9.RV.1.F",
          stem: "In sentence 1, comparing the footpaths to cracks in glass mainly emphasizes that the paths —",
          choices: [
            { letter: "A", text: "were beautiful in the morning light" },
            { letter: "B", text: "were built by the county long ago" },
            { letter: "C", text: "froze solid every winter" },
            { letter: "D", text: "spread in a damaging, uncontrolled way" }
          ],
          correct: "D"
        },
        {
          id: "synth",
          sol: "9.DSR.E",
          stem: "Taken together, the texts best support which conclusion?",
          choices: [
            { letter: "A", text: "The boardwalk should be removed so the marsh can recover." },
            { letter: "B", text: "Visitor numbers rose because the old paths were closed to children." },
            { letter: "C", text: "The boardwalk protects the marsh while changing how people experience it." },
            { letter: "D", text: "The naturalist's journal proves the report's numbers are false." }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
