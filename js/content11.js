/* SOL Labyrinth — Grade 11 vocabulary and paired-text packs. Original text only.
 * Four Vocabulary · 11.RV packs (5–6 bold target words each) and four
 * Paired texts · 11.DSR packs (editorial + data brief, story + reflection).
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── VOCABULARY · 11.RV ───────────────────────── */
    {
      id: "g11-rv-greenhouse",
      family: "G11",
      title: "The Greenhouse Shift",
      kind: "Vocabulary · 11.RV",
      blurb: "A first job in the school greenhouse, with six target words in context.",
      level: 1,
      passage:
        "<p>" + N(1) + "On my first shift in the school greenhouse, Mr. Adeyemi handed me a tray of tomato cuttings and told me my job was to <strong>propagate</strong> them: take one healthy plant and grow many new ones from it. " +
        N(2) + "The shelves looked <strong>sparse</strong> in February, just a few pots spaced far apart on the long metal racks. " +
        N(3) + "He said the goal was to have every shelf crowded by the plant sale in May. " +
        N(4) + "I was <strong>tentative</strong> at first, snipping each stem slowly and checking the chart twice before I cut. " +
        N(5) + "By the third week I could fill a tray in ten minutes. " +
        N(6) + "Some of the cuttings drooped for days, then straightened up again as if nothing had happened; Mr. Adeyemi called them <strong>resilient</strong> and said tomatoes bounce back from more than people expect. " +
        N(7) + "The one rule he repeated every shift was not to <strong>deplete</strong> the mother plant, because taking too many cuttings at once would leave it too weak to recover. " +
        N(8) + "By April the racks were so <strong>abundant</strong> that we ran out of labels, and the pots were stacked two deep along the floor. " +
        N(9) + "On sale day, a woman bought twelve of my tomato plants and asked who had grown them. " +
        N(10) + "I pointed at the empty shelf and said, \"They did most of it.\"" +
        "</p>",
      claims: [
        {
          id: "propagate",
          sol: "11.RV.1.B",
          stem: "In sentence 1, the explanation after the colon shows that propagate means —",
          choices: [
            { letter: "A", text: "to grow new plants from an existing one" },
            { letter: "B", text: "to water plants on a fixed schedule" },
            { letter: "C", text: "to sell plants at a lower price" },
            { letter: "D", text: "to remove dead leaves from a plant" }
          ],
          correct: "A"
        },
        {
          id: "sparse",
          sol: "11.RV.1.C",
          stem: "Which phrase in sentence 2 best helps a reader understand sparse?",
          choices: [
            { letter: "A", text: "in February this year" },
            { letter: "B", text: "a few pots spaced far apart" },
            { letter: "C", text: "on the long metal racks" },
            { letter: "D", text: "the shelves looked" }
          ],
          correct: "B"
        },
        {
          id: "tentative",
          sol: "10.RV.1.B",
          stem: "In sentence 4, the words slowly and checking the chart twice show that tentative means —",
          choices: [
            { letter: "A", text: "careless and rushed" },
            { letter: "B", text: "skilled and confident" },
            { letter: "C", text: "cautious and unsure" },
            { letter: "D", text: "bored and distracted" }
          ],
          correct: "C"
        },
        {
          id: "resilient",
          sol: "11.RV.1.B",
          stem: "In sentence 6, resilient most nearly means —",
          choices: [
            { letter: "A", text: "easily damaged" },
            { letter: "B", text: "slow to grow" },
            { letter: "C", text: "unusually large" },
            { letter: "D", text: "quick to recover" }
          ],
          correct: "D"
        },
        {
          id: "deplete-prefix",
          sol: "11.RV.1.A",
          stem: "The word deplete in sentence 7 begins with the prefix de-, as do the words defrost and derail. In all three words, the prefix de- signals —",
          choices: [
            { letter: "A", text: "doing something again" },
            { letter: "B", text: "removing or reducing" },
            { letter: "C", text: "doing something together" },
            { letter: "D", text: "doing something beforehand" }
          ],
          correct: "B"
        },
        {
          id: "abundant-connotation",
          sol: "10.RV.1.A",
          stem: "In sentence 8, the author chose abundant rather than full. Compared with full, the word abundant adds a sense of —",
          choices: [
            { letter: "A", text: "generous, overflowing plenty" },
            { letter: "B", text: "careless, messy storage" },
            { letter: "C", text: "an exact, countable number" },
            { letter: "D", text: "a shortage of shelf space" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rv-lifeguard",
      family: "G11",
      title: "Certification Weekend",
      kind: "Vocabulary · 11.RV",
      blurb: "Two weekends of lifeguard training, with six target words in context.",
      level: 1,
      passage:
        "<p>" + N(1) + "The lifeguard certification course met for two weekends at the county pool, and the instructor, Ms. Halvorsen, said the first skill was not swimming but being <strong>vigilant</strong>: watching every swimmer, every second, without letting your eyes drift. " +
        N(2) + "She made us follow a strict <strong>protocol</strong> for every rescue, the same set of steps in the same order, so that nobody would have to think about what came next in an emergency. " +
        N(3) + "On Saturday afternoon, one boy in the class had already passed the swim test twice, and he started leaning on the rail and chatting during the drills. " +
        N(4) + "Ms. Halvorsen stopped everything and said that a <strong>complacent</strong> guard, one who feels so safe that he stops paying attention, is more dangerous than a nervous one. " +
        N(5) + "By Sunday most of us were <strong>adept</strong> at the tube rescue, sliding in and reaching the dummy in under twenty seconds without splashing. " +
        N(6) + "During the final test she would <strong>scrutinize</strong> every move, standing at the edge with a clipboard and a whistle, marking down each hand position and each breath. " +
        N(7) + "The hardest scenario was a swimmer clinging to the <strong>precarious</strong> edge of the diving platform ladder, where one wrong step could send both of us into the deep end. " +
        N(8) + "I passed, barely. " +
        N(9) + "On the drive home I realized that I had spent two weekends learning how to watch, which is not the same thing as learning how to see." +
        "</p>",
      claims: [
        {
          id: "vigilant",
          sol: "11.RV.1.B",
          stem: "In sentence 1, the instructor's own explanation shows that vigilant means —",
          choices: [
            { letter: "A", text: "strong enough to swim far" },
            { letter: "B", text: "alert and watchful" },
            { letter: "C", text: "friendly toward swimmers" },
            { letter: "D", text: "trained in first aid" }
          ],
          correct: "B"
        },
        {
          id: "protocol",
          sol: "11.RV.1.C",
          stem: "Which words from sentence 2 best clarify the meaning of protocol?",
          choices: [
            { letter: "A", text: "nobody would have to think about what came next" },
            { letter: "B", text: "in an emergency" },
            { letter: "C", text: "the same set of steps in the same order" },
            { letter: "D", text: "for every rescue" }
          ],
          correct: "C"
        },
        {
          id: "complacent",
          sol: "11.RV.1.B",
          stem: "In sentence 4, the phrase one who feels so safe that he stops paying attention restates complacent as meaning —",
          choices: [
            { letter: "A", text: "overly self-satisfied and careless" },
            { letter: "B", text: "anxious and easily startled" },
            { letter: "C", text: "physically worn out" },
            { letter: "D", text: "unfamiliar with the rules" }
          ],
          correct: "A"
        },
        {
          id: "adept",
          sol: "10.RV.1.B",
          stem: "In sentence 5, adept most nearly means —",
          choices: [
            { letter: "A", text: "nervous" },
            { letter: "B", text: "tired" },
            { letter: "C", text: "careless" },
            { letter: "D", text: "skillful" }
          ],
          correct: "D"
        },
        {
          id: "scrutinize-suffix",
          sol: "11.RV.1.A",
          stem: "The word scrutinize in sentence 6 ends with the suffix -ize, as do memorize and organize. The suffix -ize turns a word into —",
          choices: [
            { letter: "A", text: "a noun naming a person" },
            { letter: "B", text: "a verb meaning to make or do something" },
            { letter: "C", text: "an adjective describing a quality" },
            { letter: "D", text: "an adverb telling how" }
          ],
          correct: "B"
        },
        {
          id: "precarious-connotation",
          sol: "10.RV.1.A",
          stem: "In sentence 7, the author could have described the ladder edge as narrow. Compared with narrow, the word precarious emphasizes —",
          choices: [
            { letter: "A", text: "how far the ladder is from the wall" },
            { letter: "B", text: "how new the platform is" },
            { letter: "C", text: "how unsafe and unstable the spot is" },
            { letter: "D", text: "how many steps the ladder has" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rv-radio",
      family: "G11",
      title: "Static on the Morning Show",
      kind: "Vocabulary · 11.RV",
      blurb: "A school radio host loses her script and finds her voice; six target words.",
      level: 2,
      passage:
        "<p>" + N(1) + "The morning show on our school's radio station runs for exactly eleven minutes between the first bell and the pledge, and for the first month I read every word off a script. " +
        N(2) + "Then one Tuesday the printer jammed, the script never arrived, and my co-host Priya told me to <strong>improvise</strong>: talk about the lunch menu, the weather, anything, and make it up as we went. " +
        N(3) + "I had expected chaos, but what came out was the most natural segment we had done all year. " +
        N(4) + "Listening back, I realized that my scripted voice had been <strong>monotonous</strong>, every sentence delivered at the same flat pitch, like a recorded message. " +
        N(5) + "Priya, by contrast, is <strong>articulate</strong> without notes; her thoughts arrive in complete, well-ordered sentences even when she is describing something as <strong>mundane</strong> as the new hall pass system. " +
        N(6) + "Our advisor pointed out a <strong>discrepancy</strong> in our listener survey: students said they wanted more music, but the segments they replayed most were the unscripted conversations. " +
        N(7) + "So we kept the printer jammed, so to speak. " +
        N(8) + "We build each show around three notes on an index card now, and the <strong>rapport</strong> between us, the easy back-and-forth that listeners say sounds like two friends at a lunch table, has become the reason people tune in. " +
        N(9) + "The script is still in a drawer somewhere, in case I ever miss the sound of my own flat voice." +
        "</p>",
      claims: [
        {
          id: "improvise",
          sol: "11.RV.1.B",
          stem: "In sentence 2, Priya's instruction to make it up as we went helps a reader understand that improvise means to —",
          choices: [
            { letter: "A", text: "read aloud from a prepared text" },
            { letter: "B", text: "perform without planning ahead" },
            { letter: "C", text: "repeat a segment from earlier" },
            { letter: "D", text: "cancel a show at the last minute" }
          ],
          correct: "B"
        },
        {
          id: "monotonous",
          sol: "11.RV.1.C",
          stem: "Which phrase in sentence 4 best clarifies the meaning of monotonous?",
          choices: [
            { letter: "A", text: "listening back" },
            { letter: "B", text: "my scripted voice" },
            { letter: "C", text: "the same flat pitch" },
            { letter: "D", text: "I realized" }
          ],
          correct: "C"
        },
        {
          id: "articulate",
          sol: "10.RV.1.B",
          stem: "In sentence 5, articulate most nearly means —",
          choices: [
            { letter: "A", text: "able to express ideas clearly" },
            { letter: "B", text: "unwilling to speak on the air" },
            { letter: "C", text: "loud enough to be heard" },
            { letter: "D", text: "prepared with written notes" }
          ],
          correct: "A"
        },
        {
          id: "discrepancy",
          sol: "11.RV.1.B",
          stem: "In sentence 6, the survey result described after the colon shows that a discrepancy is —",
          choices: [
            { letter: "A", text: "a majority opinion" },
            { letter: "B", text: "a written complaint" },
            { letter: "C", text: "a rise in listeners" },
            { letter: "D", text: "a mismatch between two facts" }
          ],
          correct: "D"
        },
        {
          id: "mundane-connotation",
          sol: "10.RV.1.A",
          stem: "The author describes the hall pass system as mundane in sentence 5. Compared with the word ordinary, mundane carries a stronger sense of —",
          choices: [
            { letter: "A", text: "being dull and unremarkable" },
            { letter: "B", text: "being new and confusing" },
            { letter: "C", text: "being strict and unfair" },
            { letter: "D", text: "being important to students" }
          ],
          correct: "A"
        },
        {
          id: "mono-prefix",
          sol: "11.RV.1.A",
          stem: "The word monotonous in sentence 4 begins with the prefix mono-, as in monologue and monorail. The prefix mono- means —",
          choices: [
            { letter: "A", text: "many" },
            { letter: "B", text: "one" },
            { letter: "C", text: "against" },
            { letter: "D", text: "again" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rv-yearbooks",
      family: "G11",
      title: "The Yearbook Basement",
      kind: "Vocabulary · 11.RV",
      blurb: "Seventy years of yearbooks in a library basement; six target words in context.",
      level: 3,
      passage:
        "<p>" + N(1) + "The library basement holds every yearbook the school has printed since 1954, and Ms. Okafor assigned me to put them in <strong>chronological</strong> order, earliest first, before the digitizing company arrived. " +
        N(2) + "Most of the technology in the older photographs is <strong>obsolete</strong>: rotary phones on the office desks, a typing lab with forty identical machines, a computer the size of a refrigerator that the caption calls the future. " +
        N(3) + "What struck me more than the equipment, though, was how <strong>incongruous</strong> some pages felt, as if two books had been shuffled together: a photo of a formal dance faced a page about a flood that closed the gym for a semester. " +
        N(4) + "The 1971 volume had almost no captions; whoever edited it was <strong>reticent</strong> to a fault, letting the pictures stand alone and refusing to explain a single one. " +
        N(5) + "That silence made one image oddly <strong>poignant</strong>: a janitor in a paper hat, laughing at something outside the frame, with no name and no year printed beneath him. " +
        N(6) + "When I asked Ms. Okafor about the book's <strong>provenance</strong>, she explained that it had come not from the school but from the estate of a retired teacher whose family had donated three boxes of papers. " +
        N(7) + "I finished on a Thursday and stood back to look at seventy years lined up in a row. " +
        N(8) + "The spines faded from black to green to glossy white, and near the middle I found the faces of people who would later become my teachers, waiting without knowing it." +
        "</p>",
      claims: [
        {
          id: "chronological",
          sol: "11.RV.1.B",
          stem: "In sentence 1, the phrase earliest first shows that chronological order arranges items —",
          choices: [
            { letter: "A", text: "by size, smallest to largest" },
            { letter: "B", text: "by time, from oldest to newest" },
            { letter: "C", text: "by subject or topic" },
            { letter: "D", text: "by the first letter of the title" }
          ],
          correct: "B"
        },
        {
          id: "obsolete",
          sol: "11.RV.1.C",
          stem: "The examples that follow the colon in sentence 2 show that obsolete describes technology that is —",
          choices: [
            { letter: "A", text: "too expensive to repair" },
            { letter: "B", text: "out of date, replaced by newer tools" },
            { letter: "C", text: "hard for students to operate" },
            { letter: "D", text: "kept mainly in libraries" }
          ],
          correct: "B"
        },
        {
          id: "incongruous",
          sol: "11.RV.1.B",
          stem: "In sentence 3, the comparison to two books shuffled together shows that incongruous means —",
          choices: [
            { letter: "A", text: "carefully organized" },
            { letter: "B", text: "damaged by water" },
            { letter: "C", text: "out of place together" },
            { letter: "D", text: "printed in error" }
          ],
          correct: "C"
        },
        {
          id: "reticent",
          sol: "10.RV.1.B",
          stem: "In sentence 4, the phrase refusing to explain a single one indicates that reticent means —",
          choices: [
            { letter: "A", text: "unwilling to speak or reveal information" },
            { letter: "B", text: "eager to include every possible detail" },
            { letter: "C", text: "unable to find the right photographs" },
            { letter: "D", text: "careless about spelling and dates" }
          ],
          correct: "A"
        },
        {
          id: "poignant-connotation",
          sol: "10.RV.1.A",
          stem: "The author could have called the image in sentence 5 sad. Compared with sad, poignant suggests a feeling that is —",
          choices: [
            { letter: "A", text: "harsh and angry" },
            { letter: "B", text: "mild and easily forgotten" },
            { letter: "C", text: "false and exaggerated" },
            { letter: "D", text: "keen, touching and tender" }
          ],
          correct: "D"
        },
        {
          id: "provenance-root",
          sol: "11.RV.1.A",
          stem: "The word provenance in sentence 6 comes from a Latin root meaning to come forth. Ms. Okafor's answer confirms that provenance refers to —",
          choices: [
            { letter: "A", text: "the price a book would sell for" },
            { letter: "B", text: "the condition of a book's pages" },
            { letter: "C", text: "where something originally came from" },
            { letter: "D", text: "the year a book was printed" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── PAIRED TEXTS · 11.DSR ───────────────────────── */
    {
      id: "g11-dsr-bikeracks",
      family: "G11",
      title: "Bike Racks: Editorial + Facilities Brief",
      kind: "Paired texts · 11.DSR",
      blurb: "A student editorial asks for a covered bike rack; a facilities brief supplies the numbers.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Student Editorial, <em>The Harbor Light</em></strong></p>" +
        "<p>" + N(1) + "Every rainy morning, the same thing happens at our front doors: forty students lock their bikes to a fence, a bench, a lamppost, anywhere but the rack. " +
        N(2) + "The rack holds twelve bikes, and it sits behind the gym where nobody can see it. " +
        N(3) + "We are not asking for anything fancy. " +
        N(4) + "A covered rack near the main entrance would keep seats dry, keep bikes in view of the office, and tell the students who ride that the school noticed them. " +
        N(5) + "Last spring three bikes were stolen from the fence line in a single month. " +
        N(6) + "A rack with a roof costs less than one set of bleachers. " +
        N(7) + "The students who ride are doing exactly what the wellness posters in the hallway ask them to do. " +
        N(8) + "The least the building can do is give them somewhere to park.</p>" +
        "<p><strong>Text 2 — Facilities Office Brief</strong></p>" +
        "<p>" + N(9) + "Bike Parking Summary, prepared for the Student Council, October. " +
        N(10) + "Current rack: 12 slots, located on the north side of the gym; average use on dry days, 9 bikes; on rainy days, 4 bikes. " +
        N(11) + "Bikes counted outside the rack (fence, benches, railings): dry days 31, rainy days 38. " +
        N(12) + "Incidents reported to the office in the past twelve months: 3 thefts and 2 damaged wheels, all involving bikes locked outside the rack. " +
        N(13) + "Estimated cost of a 40-slot covered rack near the main entrance: $14,800, including concrete pad and installation. " +
        N(14) + "Estimated cost of moving the existing rack to the front of the building without a cover: $2,100. " +
        N(15) + "Facilities recommends that the council choose one option and submit a request before the spring budget deadline in February." +
        "</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          stem: "Which idea is supported by both texts?",
          choices: [
            { letter: "A", text: "Most students who ride bikes lock them somewhere other than the rack." },
            { letter: "B", text: "The current rack is too far from the student parking lot." },
            { letter: "C", text: "Bike theft has increased every year for three years." },
            { letter: "D", text: "A covered rack would cost less than a set of bleachers." }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          stem: "Which statement best describes how the two texts differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 explains how bikes are stolen; Text 2 argues for a new rack." },
            { letter: "B", text: "Text 1 is written for parents; Text 2 is written for teachers." },
            { letter: "C", text: "Text 1 argues for a change; Text 2 lays out figures and choices without taking a side." },
            { letter: "D", text: "Text 1 describes the budget process; Text 2 describes the rainy weather." }
          ],
          correct: "C"
        },
        {
          id: "only-text2",
          sol: "10.DSR.D",
          stem: "Which detail appears only in the facilities brief?",
          choices: [
            { letter: "A", text: "Three bikes were stolen." },
            { letter: "B", text: "The rack sits behind the gym." },
            { letter: "C", text: "Students lock bikes to the fence." },
            { letter: "D", text: "Moving the old rack would cost $2,100." }
          ],
          correct: "D"
        },
        {
          id: "craft",
          sol: "11.RI.2.C",
          stem: "In sentence 3, the writer says We are not asking for anything fancy mainly to —",
          choices: [
            { letter: "A", text: "admit that the plan is unlikely to be approved" },
            { letter: "B", text: "present the request as modest and reasonable" },
            { letter: "C", text: "complain that the school spends too much on sports" },
            { letter: "D", text: "suggest that students should build the rack themselves" }
          ],
          correct: "B"
        },
        {
          id: "select2",
          sol: "11.DSR.E",
          stem: "Select TWO sentences from Text 2 that support the editorial's claim that the current rack is barely used.",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "synth",
          sol: "11.DSR.E",
          stem: "A student council member who read both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the editorial's cost claim is proven false by the brief" },
            { letter: "B", text: "the school has already ordered a covered rack" },
            { letter: "C", text: "the brief backs up the editorial and prices two fixes" },
            { letter: "D", text: "the thefts happened because the rack was full" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-dsr-recital",
      family: "G11",
      title: "First Recital: Story + Reflection",
      kind: "Paired texts · 11.DSR",
      blurb: "A boy freezes at his first recital; a piano teacher remembers freezing at hers.",
      level: 2,
      passage:
        "<p><strong>Text 1 — from the short story <em>The Second Measure</em></strong></p>" +
        "<p>" + N(1) + "Tomas played the first measure perfectly and then his hands simply stopped, resting on the keys like two birds that had forgotten how to fly. " +
        N(2) + "The hall was so quiet he could hear the ceiling fan. " +
        N(3) + "Somewhere in the fourth row his teacher, Mrs. Lindqvist, sat with her program folded in her lap, and he did not dare look at her. " +
        N(4) + "He thought of the seventy times he had played the piece in her studio, the smell of the radiator, the metronome she never turned off. " +
        N(5) + "His left hand found the low G on its own. " +
        N(6) + "He started again from the beginning, not because anyone told him to but because the beginning was the only place he knew how to stand. " +
        N(7) + "The second time through, he did not hear the fan at all.</p>" +
        "<p><strong>Text 2 — A piano teacher's reflection</strong></p>" +
        "<p>" + N(8) + "I was twelve when I forgot the middle of a sonatina in front of two hundred folding chairs, and I remember the silence more clearly than any applause since. " +
        N(9) + "My teacher did nothing. " +
        N(10) + "She did not cough, did not nod, did not mouth the next note; she let the silence be mine. " +
        N(11) + "At the time I thought that was cruelty. " +
        N(12) + "I have taught piano for twenty-two years now, and every spring I sit in a fourth-row seat with my program folded and my hands still, and I understand exactly what she was doing. " +
        N(13) + "A student who is rescued learns that the stage is dangerous. " +
        N(14) + "A student who finds the low note alone learns that the stage is only a room. " +
        N(15) + "I tell my students this before every recital, and not one of them believes me until they have to." +
        "</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          stem: "Which idea is central to both texts?",
          choices: [
            { letter: "A", text: "A performer who recovers alone gains something a rescue would not give." },
            { letter: "B", text: "Teachers should stop a recital as soon as a student makes a mistake." },
            { letter: "C", text: "Recitals are far less frightening in small rooms." },
            { letter: "D", text: "Memorizing music is easier for younger students." }
          ],
          correct: "A"
        },
        {
          id: "difference",
          sol: "11.DSR.D",
          stem: "Which statement best describes a key difference between the texts?",
          choices: [
            { letter: "A", text: "Text 1 shows the moment through the student; Text 2 looks back on it as a teacher." },
            { letter: "B", text: "Text 1 takes place in a practice studio; Text 2 takes place in a concert hall." },
            { letter: "C", text: "Text 1 describes a performance that succeeds; Text 2 describes one that fails." },
            { letter: "D", text: "Text 1 focuses on the audience's reaction; Text 2 focuses on the music itself." }
          ],
          correct: "A"
        },
        {
          id: "echo",
          sol: "10.DSR.D",
          stem: "The teacher in Text 2 sits with her program folded and her hands still (sentence 12). This detail most closely echoes which sentence in Text 1?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "B"
        },
        {
          id: "figurative",
          sol: "11.RL.2.B",
          stem: "In sentence 1, comparing Tomas's hands to two birds that had forgotten how to fly mainly emphasizes —",
          choices: [
            { letter: "A", text: "how quickly he played the first measure" },
            { letter: "B", text: "how small his hands looked on the keys" },
            { letter: "C", text: "how suddenly a practiced skill deserted him" },
            { letter: "D", text: "how badly he wanted to leave the stage" }
          ],
          correct: "C"
        },
        {
          id: "select2",
          sol: "11.DSR.E",
          stem: "Select TWO sentences from Text 2 that state directly the lesson Text 1 shows through Tomas's restart in sentence 6.",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "synth",
          sol: "11.DSR.E",
          stem: "Read together, the two texts suggest that the teacher's silence in each text is best understood as —",
          choices: [
            { letter: "A", text: "a sign that the teacher had lost interest in the performance" },
            { letter: "B", text: "a deliberate choice to let the student recover on their own" },
            { letter: "C", text: "proof that the student was not ready to perform in public" },
            { letter: "D", text: "a mistake that the teacher came to regret later" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-dsr-refill",
      family: "G11",
      title: "Refill Stations: Editorial + Data Brief",
      kind: "Paired texts · 11.DSR",
      blurb: "An editorial wants bottle-refill stations; a class survey tests the claims behind it.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Student Editorial, <em>The Crescent</em></strong></p>" +
        "<p>" + N(1) + "Walk the science wing at 10:15 and count the water bottles: I did, and I got to sixty-one before the bell. " +
        N(2) + "Nearly all of them were single-use plastic, bought from the vending machine for a dollar and a half apiece. " +
        N(3) + "Meanwhile, the fountain beside the machine had a line of zero. " +
        N(4) + "Students avoid it because it is low, slow and impossible to fill a bottle from without spilling. " +
        N(5) + "A refill station, the kind with a sensor and a counter that ticks up with every bottle saved, would fix the spill problem and give the school a number it could be proud of. " +
        N(6) + "The district installed four in the middle school last year. " +
        N(7) + "Our building, with twice the students, has none. " +
        N(8) + "This is not an environmental lecture. " +
        N(9) + "It is a request to make the cheaper, cleaner choice the easy one.</p>" +
        "<p><strong>Text 2 — Data Brief, Environmental Science Period 3</strong></p>" +
        "<p>" + N(10) + "Hydration Survey, conducted over five school days in March. " +
        N(11) + "Bottles collected from the three science-wing recycling bins: 412, or about 82 per day. " +
        N(12) + "Fountain observation (science wing, 10:00 to 10:30): 61 students passed the fountain; 7 drank from it; 2 attempted to fill a bottle, and both spilled. " +
        N(13) + "Student survey, 148 responses: 71 percent said they would use a refill station daily; 19 percent said sometimes; 10 percent said they prefer purchased water. " +
        N(14) + "Cost quoted by the district for one sensor-operated refill station: $1,650 installed. " +
        N(15) + "The middle school's four stations, installed last August, report a combined count of 38,000 bottles saved through February. " +
        N(16) + "Limitations: the survey covered one wing during one week, and recycled bottles could not be traced to the vending machine specifically." +
        "</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          stem: "Both texts support the idea that —",
          choices: [
            { letter: "A", text: "students rarely use the science-wing fountain" },
            { letter: "B", text: "the vending machine should be removed" },
            { letter: "C", text: "most students prefer purchased water" },
            { letter: "D", text: "the middle school stations were a waste of money" }
          ],
          correct: "A"
        },
        {
          id: "limitations",
          sol: "11.DSR.E",
          stem: "The limitations noted in sentence 16 matter to a reader of Text 1 because they —",
          choices: [
            { letter: "A", text: "prove that the editorial's count of sixty-one bottles was wrong" },
            { letter: "B", text: "show that the class disagrees with the editorial's request" },
            { letter: "C", text: "caution that not every recycled bottle can be tied to the vending machine, as Text 1 implies" },
            { letter: "D", text: "suggest that the fountain problem exists only in the middle school" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          stem: "Which statement best describes how the texts differ in tone?",
          choices: [
            { letter: "A", text: "Text 1 is urgent and persuasive; Text 2 is neutral and factual." },
            { letter: "B", text: "Text 1 is lighthearted and joking; Text 2 is irritated and blunt." },
            { letter: "C", text: "Text 1 is hesitant and uncertain; Text 2 is boastful and sure." },
            { letter: "D", text: "Text 1 is stiff and formal; Text 2 is relaxed and conversational." }
          ],
          correct: "A"
        },
        {
          id: "craft",
          sol: "11.RI.2.C",
          stem: "In sentences 8 and 9, the writer says This is not an environmental lecture mainly to —",
          choices: [
            { letter: "A", text: "apologize for the length of the editorial" },
            { letter: "B", text: "head off readers who might dismiss the request as preachy" },
            { letter: "C", text: "admit that the environment is not the writer's real concern" },
            { letter: "D", text: "explain why the middle school received stations first" }
          ],
          correct: "B"
        },
        {
          id: "select2",
          sol: "11.DSR.E",
          stem: "Select TWO sentences from Text 2 that support the editorial's prediction in sentence 5 that a refill station would be used and would produce a number worth being proud of.",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "synth",
          sol: "10.DSR.E",
          stem: "Taken together, the texts suggest that the strongest argument for a refill station is that —",
          choices: [
            { letter: "A", text: "the middle school has more students than the high school does" },
            { letter: "B", text: "the vending machine has recently raised its prices" },
            { letter: "C", text: "the district has already turned the request down once" },
            { letter: "D", text: "most students say they would use one, and the middle school's numbers back that up" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-dsr-closing",
      family: "G11",
      title: "Closing Time: Story + Reflection",
      kind: "Paired texts · 11.DSR",
      blurb: "A bakery closing shift and a print-shop memory, both about mentors who barely speak.",
      level: 3,
      passage:
        "<p><strong>Text 1 — from the short story <em>Forty Rolls</em></strong></p>" +
        "<p>" + N(1) + "By nine the bakery's front room was dark, and only the kitchen light and the hum of the proofing cabinet remained. " +
        N(2) + "Her uncle had said barely a dozen words to her since she began closing with him in June, most of them the names of things: tray, scraper, salt. " +
        N(3) + "She had learned to read his hands instead. " +
        N(4) + "A flat palm on the counter meant the dough was ready; two fingers on the oven door meant three more minutes. " +
        N(5) + "Tonight he did something new: he portioned the last batch, set the bench knife beside her, and walked into the office without looking back. " +
        N(6) + "Nadia stood over forty small mounds of dough and understood that she was being told something, and that the telling was the leaving. " +
        N(7) + "She shaped the first roll badly and the fortieth well; when he came back he weighed one in his palm, set it down, and that was the whole review.</p>" +
        "<p><strong>Text 2 — A memoir-style reflection</strong></p>" +
        "<p>" + N(8) + "My father ran a small print shop, and from fifteen I worked the night runs with him, feeding paper into a press older than both of us. " +
        N(9) + "People who met him socially called him quiet; people who worked with him called him something less generous. " +
        N(10) + "He explained a task once, in a sentence, and never repeated himself. " +
        N(11) + "For a year I mistook this for indifference. " +
        N(12) + "Only when he handed me the keys one Friday and drove home before the run was finished did I understand that he had been speaking the entire time, in the only language he trusted: the language of what he was willing to leave in my hands. " +
        N(13) + "I run a different business now, with talkative people, and I catch myself explaining things once. " +
        N(14) + "It is a poor habit in a manager and, I have come to think, a kind of faith." +
        "</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          stem: "Which statement expresses an idea developed in both texts?",
          choices: [
            { letter: "A", text: "Silence from a mentor can be a form of trust rather than neglect." },
            { letter: "B", text: "Working at night is more difficult than working during the day." },
            { letter: "C", text: "Family businesses fail when owners refuse to explain themselves." },
            { letter: "D", text: "Young workers should insist on clearer instructions from the start." }
          ],
          correct: "A"
        },
        {
          id: "difference",
          sol: "11.DSR.D",
          stem: "Which statement best describes how the two narrators' positions differ?",
          choices: [
            { letter: "A", text: "Nadia is a paid employee; the narrator of Text 2 was never paid for his work." },
            { letter: "B", text: "Nadia is still inside the experience; the narrator of Text 2 interprets it from years later." },
            { letter: "C", text: "Nadia resents her uncle; the narrator of Text 2 admired his father from the start." },
            { letter: "D", text: "Nadia learns from written notes; the narrator of Text 2 learns from spoken lessons." }
          ],
          correct: "B"
        },
        {
          id: "parallel",
          sol: "11.DSR.E",
          stem: "The uncle's action in sentence 5 most closely parallels which moment in Text 2?",
          choices: [
            { letter: "A", text: "The father explaining a task once (sentence 10)" },
            { letter: "B", text: "The narrator mistaking silence for indifference (sentence 11)" },
            { letter: "C", text: "The father handing over the keys and driving home (sentence 12)" },
            { letter: "D", text: "The narrator explaining things once as a manager (sentence 13)" }
          ],
          correct: "C"
        },
        {
          id: "telling",
          sol: "11.RL.1.B",
          stem: "In sentence 6, the phrase the telling was the leaving most nearly means that —",
          choices: [
            { letter: "A", text: "the uncle was quitting the bakery" },
            { letter: "B", text: "Nadia had to leave before she could learn" },
            { letter: "C", text: "Nadia would be told the answer later" },
            { letter: "D", text: "the uncle's departure was itself the instruction" }
          ],
          correct: "D"
        },
        {
          id: "select2",
          sol: "11.DSR.E",
          stem: "Select TWO sentences, one from each text, in which the young worker learns to interpret communication that is not spoken.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "faith",
          sol: "10.DSR.E",
          stem: "The final sentence of Text 2 calls explaining things once a kind of faith. Read alongside Text 1, this idea is best illustrated by —",
          choices: [
            { letter: "A", text: "the uncle naming tools for Nadia in sentence 2" },
            { letter: "B", text: "the uncle leaving Nadia alone with forty rolls in sentence 5" },
            { letter: "C", text: "Nadia shaping the first roll badly in sentence 7" },
            { letter: "D", text: "the dark front room described in sentence 1" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
