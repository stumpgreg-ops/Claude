/* SOL Labyrinth — Grade 11 medium-tier expansion packs (v5.15, nights 21-50): a botanical garden, kayaking,
 * a puzzle hunt and fossils. 21 packs x 6 questions. Original text only.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 · LITERARY · botanical garden */
    {
      id: "g11-rl-c91-night-bloom",
      family: "G11",
      title: "One Night Only",
      kind: "Literary · 11.RL",
      blurb: "The newest volunteer at the conservatory draws the job nobody wants: waiting for a cactus to bloom.",
      level: 1,
      passage:
        "<p>" + N(1) + "The night-blooming cactus in the Larkspur Conservatory had been swelling for a week, and the head gardener, Mrs. Adeyemi, finally announced that tonight was the night. " +
        N(2) + "Someone had to stay until it opened, and because Ines Barros was the newest volunteer, that someone was Ines. " +
        N(3) + "At eight o'clock the last visitors drifted out, the misters hissed off, and the glass house went quiet except for the drip of water from the fern beds. " +
        N(4) + "Ines sat on an overturned bucket with her phone, watching her friends post photos from a bonfire she was missing. " +
        N(5) + "The bud, long and pale like a folded paper lantern, did nothing at all.</p>" +
        "<p>" + N(6) + "By ten she had decided the whole assignment was a joke played on new people. " +
        N(7) + "She stood, grabbed her jacket, and then noticed that the tip of the bud had loosened. " +
        N(8) + "She sat back down. " +
        N(9) + "Over the next hour the petals opened so slowly that she could see the change only when she looked away and then back again. " +
        N(10) + "A sweet smell, heavy as warm honey, filled the room.</p>" +
        "<p>" + N(11) + "Ines raised her phone to take a picture, then lowered it. " +
        N(12) + "The screen would make the flower look small and flat, and she wanted to remember it as it actually was. " +
        N(13) + "When Mrs. Adeyemi arrived at dawn, the bloom was already closing. " +
        N(14) + "\"Well?\" the gardener asked. " +
        N(15) + "Ines only smiled, the way a person smiles when she has been let in on a secret.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme of the story about Ines and the night-blooming cactus?",
          choices: [
            { letter: "A", text: "Some rewards come only to those who wait past their boredom." },
            { letter: "B", text: "New volunteers are usually given the hardest jobs on purpose." },
            { letter: "C", text: "Sharing an experience online makes it far more meaningful." },
            { letter: "D", text: "Plants are more interesting to study in daylight than at night." }
          ],
          correct: "A"
        },
        {
          id: "satdown",
          sol: "11.RL.1.B",
          stem: "Why is sentence 8, in which Ines sits back down, important to the plot?",
          choices: [
            { letter: "A", text: "It shows that her volunteer shift has officially ended." },
            { letter: "B", text: "It marks the moment she chooses to stay and see the bloom." },
            { letter: "C", text: "It reveals that Mrs. Adeyemi has returned to the glass house." },
            { letter: "D", text: "It explains why her friends decided to leave the bonfire." }
          ],
          correct: "B"
        },
        {
          id: "phone",
          sol: "11.RL.1.C",
          stem: "Ines's decision in sentences 11 and 12 to lower her phone reveals that she —",
          choices: [
            { letter: "A", text: "worries that a camera flash will damage the petals" },
            { letter: "B", text: "has run out of battery after the long night" },
            { letter: "C", text: "values seeing the flower directly over a picture of it" },
            { letter: "D", text: "wants to keep the bloom a secret from Mrs. Adeyemi" }
          ],
          correct: "C"
        },
        {
          id: "lantern",
          sol: "11.RL.2.A",
          stem: "In sentence 5, comparing the cactus bud to a folded paper lantern mainly suggests that the bud —",
          choices: [
            { letter: "A", text: "is glowing brightly in the dark glass house" },
            { letter: "B", text: "is made of something thin and artificial" },
            { letter: "C", text: "is about to drop from its stem to the floor" },
            { letter: "D", text: "is tightly closed but able to unfold" }
          ],
          correct: "D"
        },
        {
          id: "honey",
          sol: "11.RL.2.B",
          stem: "The simile in sentence 10, describing the smell as \"heavy as warm honey,\" creates a mood that is —",
          choices: [
            { letter: "A", text: "rich and almost overwhelming" },
            { letter: "B", text: "sharp and unpleasant" },
            { letter: "C", text: "faint and easily missed" },
            { letter: "D", text: "cold and clinical" }
          ],
          correct: "A"
        },
        {
          id: "secret",
          sol: "11.RL.3.A",
          stem: "Sentence 15, in which Ines answers Mrs. Adeyemi only with a smile, resolves the story by showing that Ines —",
          choices: [
            { letter: "A", text: "regrets missing the bonfire with her friends" },
            { letter: "B", text: "now treasures the long night as a private gift" },
            { letter: "C", text: "plans to quit volunteering at the conservatory" },
            { letter: "D", text: "cannot describe the flower because she slept" }
          ],
          correct: "B"
        }
      ]
    },

    /* 2 · INFORMATIONAL · fossils */
    {
      id: "g11-ri-c91-trace-fossils",
      family: "G11",
      title: "Fossils of Behavior",
      kind: "Informational · 11.RI",
      blurb: "Footprints, burrows and bite marks: the fossils that record what an animal did, not what it was.",
      level: 2,
      passage:
        "<p>" + N(1) + "Most people picture a fossil as a bone or a shell turned to stone, but some of the most revealing fossils contain no part of an animal at all. " +
        N(2) + "Paleontologists call these trace fossils: footprints, burrows, bite marks, and other signs that a living creature once passed by. " +
        N(3) + "A skeleton shows what an animal was built like; a trackway shows what it actually did.</p>" +
        "<p>" + N(4) + "Consider a line of footprints pressed into ancient mud. " +
        N(5) + "By measuring the distance between prints, researchers can estimate how fast the animal was moving. " +
        N(6) + "When several sets of tracks run side by side in the same direction, they may suggest that the animals traveled in groups rather than alone. " +
        N(7) + "A sudden change in spacing might record the moment an animal broke into a run.</p>" +
        "<p>" + N(8) + "Trace fossils have limits, however. " +
        N(9) + "Unless a body is found at the end of a trackway, which almost never happens, scientists can rarely name the exact species that left the prints. " +
        N(10) + "Instead, they classify tracks by their shape, much as a detective might describe a shoe print without knowing whose shoe made it.</p>" +
        "<p>" + N(11) + "Even with that uncertainty, trace fossils fill gaps that bones cannot. " +
        N(12) + "Bones are often carried off by rivers or scattered by scavengers before they are buried, so they may end up far from where the animal lived. " +
        N(13) + "A footprint, by contrast, cannot be moved without being destroyed. " +
        N(14) + "It stays exactly where it was made, a record of one ordinary moment in an animal's life.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the central idea of the passage about trace fossils?",
          choices: [
            { letter: "A", text: "Trace fossils reveal how animals behaved, even if they rarely name the species." },
            { letter: "B", text: "Footprints are more valuable to science than any skeleton or shell." },
            { letter: "C", text: "Scientists can measure an animal's speed only by studying its bones." },
            { letter: "D", text: "Most fossils are destroyed by rivers before anyone can study them." }
          ],
          correct: "A"
        },
        {
          id: "groups",
          sol: "11.RI.1.B",
          stem: "Which sentence best supports the idea that trace fossils can show how ancient animals lived together?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward trace fossils is best described as —",
          choices: [
            { letter: "A", text: "dismissive of their usefulness to science" },
            { letter: "B", text: "appreciative but honest about their limits" },
            { letter: "C", text: "uncertain and mostly confused by them" },
            { letter: "D", text: "critical of the scientists who study them" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          stem: "Which description best matches the structure of the passage about trace fossils?",
          choices: [
            { letter: "A", text: "It narrates one fossil dig in the order events happened." },
            { letter: "B", text: "It compares the theories of two rival research teams." },
            { letter: "C", text: "It lists the steps for finding fossils in the field." },
            { letter: "D", text: "It defines a term, gives examples, admits a limit, then restates its value." }
          ],
          correct: "D"
        },
        {
          id: "detective",
          sol: "11.RI.2.B",
          stem: "In sentence 10, comparing paleontologists to a detective describing a shoe print helps the reader understand that —",
          choices: [
            { letter: "A", text: "fossil hunters often work alongside police officers" },
            { letter: "B", text: "scientists can describe a track without knowing its maker" },
            { letter: "C", text: "ancient footprints are usually found near crime scenes" },
            { letter: "D", text: "scientists measure fossil tracks using ordinary shoes" }
          ],
          correct: "B"
        },
        {
          id: "scavengers",
          sol: "11.RI.2.C",
          stem: "The author includes the detail about scavengers in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "show that ancient animals were often hunted" },
            { letter: "B", text: "argue that scavengers left most trace fossils" },
            { letter: "C", text: "describe how rivers form new layers of mud" },
            { letter: "D", text: "explain why bones may lie far from where animals lived" }
          ],
          correct: "D"
        }
      ]
    },

    /* 3 · POETRY · kayaking */
    {
      id: "g11-rl-c91-morning-paddle",
      family: "G11",
      title: "Morning Paddle",
      kind: "Poetry · 11.RL",
      blurb: "Before the town wakes, a kayak, a foggy lake, and a week of being measured left on shore.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Before the town wakes up, I push off from the dock,<br>" +
        L(2) + "and the lake accepts the boat without a word.<br>" +
        L(3) + "The paddle dips, and dips, a slow clock<br>" +
        L(4) + "that counts no hours, only water stirred.<br>" +
        L(5) + "Behind me every stroke draws a silver seam<br>" +
        L(6) + "that closes as I watch, as if I'd never been.<br>" +
        L(7) + "Ahead, the fog lifts like a held breath let go,<br>" +
        L(8) + "and herons stand like question marks in the green.<br>" +
        L(9) + "All week I have been measured: grades and bells,<br>" +
        L(10) + "the minutes left, the score, the hurried next.<br>" +
        L(11) + "Out here the water keeps no record, tells<br>" +
        L(12) + "no one how far I've come or what I've missed.<br>" +
        L(13) + "I turn for shore, the seam behind me gone,<br>" +
        L(14) + "and carry the quiet home like something I can own." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a central idea of the poem \"Morning Paddle\"?",
          choices: [
            { letter: "A", text: "Kayaking is a sport best practiced with a group." },
            { letter: "B", text: "Time on the water offers relief from constant measurement." },
            { letter: "C", text: "The speaker regrets skipping school to go paddling." },
            { letter: "D", text: "A lake is a dangerous place to be in heavy fog." }
          ],
          correct: "B"
        },
        {
          id: "shift",
          sol: "11.RL.1.B",
          stem: "In \"Morning Paddle,\" lines 9 and 10 shift the poem's focus from —",
          choices: [
            { letter: "A", text: "the lake to the pressures of the speaker's school week" },
            { letter: "B", text: "the dock to the far shore of the lake" },
            { letter: "C", text: "the speaker's fear to the speaker's excitement" },
            { letter: "D", text: "early morning to the darkness of evening" }
          ],
          correct: "A"
        },
        {
          id: "herons",
          sol: "11.RL.2.A",
          stem: "In line 8, comparing the herons to question marks mainly suggests that the birds —",
          choices: [
            { letter: "A", text: "are frightened by the speaker's kayak" },
            { letter: "B", text: "are about to fly away from the lake" },
            { letter: "C", text: "look curved, still, and quietly puzzling" },
            { letter: "D", text: "make loud calls across the water" }
          ],
          correct: "C"
        },
        {
          id: "clock",
          sol: "11.RL.2.B",
          stem: "In lines 3 and 4, describing the paddle as a slow clock that counts no hours creates a tone that is —",
          choices: [
            { letter: "A", text: "tense and urgent" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "playful and silly" },
            { letter: "D", text: "calm and unhurried" }
          ],
          correct: "D"
        },
        {
          id: "accepts",
          sol: "11.RL.2.C",
          stem: "In line 2 of \"Morning Paddle,\" the word accepts suggests that the lake —",
          choices: [
            { letter: "A", text: "takes in the boat smoothly, without resistance" },
            { letter: "B", text: "agrees to a formal request from the speaker" },
            { letter: "C", text: "judges whether the boat is good enough" },
            { letter: "D", text: "holds the boat still so it cannot move" }
          ],
          correct: "A"
        },
        {
          id: "seam",
          sol: "11.RL.3.A",
          stem: "How does the image of the seam in line 13 connect to lines 5 and 6?",
          choices: [
            { letter: "A", text: "It introduces a new problem the speaker must solve." },
            { letter: "B", text: "It shifts the poem's attention from the speaker to the herons." },
            { letter: "C", text: "It echoes them to show the water keeps no trace of the trip." },
            { letter: "D", text: "It contradicts them by showing that the seam remains." }
          ],
          correct: "C"
        }
      ]
    },

    /* 4 · VOCABULARY · puzzle hunt */
    {
      id: "g11-rv-c91-library-hunt",
      family: "G11",
      title: "Rows of Ten",
      kind: "Vocabulary · 11.RV",
      blurb: "A cryptic note, a stalled team, and a code hidden behind an old atlas in the school library.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every spring the Fairview High library hosts a puzzle hunt, and this year the first clue was a <strong>cryptic</strong> note taped under a reading table: \"Where stories sleep in rows of ten.\" " +
        N(2) + "Dev Malhotra read it twice and shrugged, but his teammate Rosa Quintero was already pacing. " +
        N(3) + "Rosa was <strong>meticulous</strong>; she copied every clue into a notebook, including smudged letters that were almost <strong>illegible</strong>. " +
        N(4) + "The team's first idea, that \"rows of ten\" meant the ten fiction shelves, led nowhere. " +
        N(5) + "For twenty minutes they reached an <strong>impasse</strong>, arguing in whispers while other teams hurried past.</p>" +
        "<p>" + N(6) + "Finally Dev suggested they stop competing with each other and <strong>collaborate</strong>: Rosa would read the clues aloud, and he would check the library map. " +
        N(7) + "Together they noticed that the reference section had exactly ten numbered cabinets. " +
        N(8) + "Inside cabinet ten, behind an old atlas, they found a card with a column of numbers to <strong>decipher</strong>. " +
        N(9) + "Each number matched a letter's position in the alphabet, and within minutes the code spelled out the word BELL. " +
        N(10) + "They raced to the brass bell beside the circulation desk, where the librarian, Ms. Halvorsen, was holding a gold envelope. " +
        N(11) + "Rosa was <strong>elated</strong>, and even Dev, who had pretended not to care, let out a cheer loud enough to earn a friendly \"Shh!\"</p>",
      claims: [
        {
          id: "illegible",
          sol: "11.RV.1.A",
          stem: "The word illegible in sentence 3 begins with the prefix il-, as in illogical and illegal. The prefix il- signals —",
          choices: [
            { letter: "A", text: "again" },
            { letter: "B", text: "before" },
            { letter: "C", text: "not" },
            { letter: "D", text: "very" }
          ],
          correct: "C"
        },
        {
          id: "decipher",
          sol: "11.RV.1.A",
          stem: "The word decipher in sentence 8 begins with the prefix de-, which can mean to undo or reverse. Based on this, to decipher the card's numbers is to —",
          choices: [
            { letter: "A", text: "turn them back into readable meaning" },
            { letter: "B", text: "write them in a new secret language" },
            { letter: "C", text: "hide them where others cannot look" },
            { letter: "D", text: "copy them neatly into a notebook" }
          ],
          correct: "A"
        },
        {
          id: "impasse",
          sol: "11.RV.1.B",
          stem: "In sentence 5, the detail about Dev and Rosa arguing in whispers while other teams hurried past helps show that impasse means —",
          choices: [
            { letter: "A", text: "a narrow hallway in the library" },
            { letter: "B", text: "a moment of sudden success" },
            { letter: "C", text: "a rule that slows teams down" },
            { letter: "D", text: "a point where no progress is made" }
          ],
          correct: "D"
        },
        {
          id: "meticulous",
          sol: "11.RV.1.B",
          stem: "Which detail best clarifies the meaning of meticulous as it describes Rosa in sentence 3?",
          choices: [
            { letter: "A", text: "Dev read the first note twice and shrugged." },
            { letter: "B", text: "Rosa copied every clue, even smudged letters." },
            { letter: "C", text: "The first clue was taped under a table." },
            { letter: "D", text: "The team later checked the library map." }
          ],
          correct: "B"
        },
        {
          id: "cryptic",
          sol: "11.RV.1.C",
          stem: "In sentence 1, calling the note under the reading table cryptic suggests that its meaning is —",
          choices: [
            { letter: "A", text: "rude and insulting" },
            { letter: "B", text: "hidden and puzzling" },
            { letter: "C", text: "long and boring" },
            { letter: "D", text: "obvious and simple" }
          ],
          correct: "B"
        },
        {
          id: "elated",
          sol: "11.RV.1.C",
          stem: "The author describes Rosa as elated in sentence 11 rather than simply pleased. Compared with pleased, elated suggests a feeling that is —",
          choices: [
            { letter: "A", text: "calmer and more private" },
            { letter: "B", text: "mixed with jealousy" },
            { letter: "C", text: "mostly a sense of relief" },
            { letter: "D", text: "more intense and joyful" }
          ],
          correct: "D"
        }
      ]
    },

    /* 5 · PAIRED TEXTS · botanical garden */
    {
      id: "g11-dsr-c91-palm-house",
      family: "G11",
      title: "Glass and Gates",
      kind: "Paired texts · 11.DSR",
      blurb: "A garden director explains a new fee for the old Palm House; a Sunday visitor answers.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From a letter by the director of Wrenfield Botanical Garden</strong></p>" +
        "<p>" + N(1) + "For ninety years, the Palm House at Wrenfield Botanical Garden has been open to visitors free of charge. " +
        N(2) + "Beginning in April, we will ask adults for a five-dollar admission fee, while students and children will still enter free. " +
        N(3) + "This decision was not made lightly. " +
        N(4) + "The Palm House contains more than four thousand panes of glass, and last winter's storms cracked over three hundred of them. " +
        N(5) + "Each repaired pane costs about two hundred dollars, and our yearly maintenance budget covers fewer than a quarter of the damaged panes. " +
        N(6) + "Without steady new income, we would have to close sections of the building, and the tallest palms could be harmed by cold drafts. " +
        N(7) + "We believe a small fee is the surest way to keep the doors open for the next ninety years.</p>" +
        "<p><strong>Text 2 — From a visitor's blog post, \"Before the Gate Goes Up\"</strong></p>" +
        "<p>" + N(8) + "I have walked through the Palm House almost every Sunday for twenty years, and I understand that broken glass must be fixed. " +
        N(9) + "Still, a fee changes what the place is. " +
        N(10) + "Right now, anyone can wander in out of the rain and stand beneath a forty-foot palm; after April, many will check their wallets first. " +
        N(11) + "The director's letter explains the cost of repairs but says nothing about other options. " +
        N(12) + "A sponsor-a-pane program could let families pay for a single panel and see their name on a small plaque. " +
        N(13) + "Volunteers could run a monthly plant sale in the courtyard. " +
        N(14) + "A free garden is a promise to the whole town, and I hope the board finds a way to keep that promise before the gate goes up.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          stem: "Which idea appears in both the director's letter and the visitor's blog post about the Palm House?",
          choices: [
            { letter: "A", text: "Students should pay the new admission fee." },
            { letter: "B", text: "A plant sale would raise enough money." },
            { letter: "C", text: "The tallest palms have already died." },
            { letter: "D", text: "The damaged glass needs to be repaired." }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          stem: "Which statement best describes how the letter and the blog post differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 justifies a decision, while Text 2 questions it and offers alternatives." },
            { letter: "B", text: "Text 1 asks for volunteers, while Text 2 reports on the storm damage." },
            { letter: "C", text: "Text 1 tells the garden's history, while Text 2 praises a favorite palm." },
            { letter: "D", text: "Text 1 criticizes visitors, while Text 2 defends the garden's director." }
          ],
          correct: "A"
        },
        {
          id: "panes",
          sol: "11.DSR.D",
          stem: "Which detail from Text 1 would the blogger most need to address to show that a sponsor-a-pane program could replace the fee?",
          choices: [
            { letter: "A", text: "The Palm House has been free for ninety years." },
            { letter: "B", text: "Students and children will still enter free." },
            { letter: "C", text: "Over three hundred panes need repair at about $200 each." },
            { letter: "D", text: "The decision about the fee was not made lightly." }
          ],
          correct: "C"
        },
        {
          id: "respond",
          sol: "11.DSR.E",
          stem: "Select TWO sentences from Text 2 that respond most directly to the director's claim that a fee is the surest way to keep the Palm House open.",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "tone",
          sol: "11.DSR.E",
          stem: "Compared with the director's letter, the tone of the Palm House blog post is more —",
          choices: [
            { letter: "A", text: "personal and wistful" },
            { letter: "B", text: "technical and detached" },
            { letter: "C", text: "angry and insulting" },
            { letter: "D", text: "amused and lighthearted" }
          ],
          correct: "A"
        },
        {
          id: "board",
          sol: "11.DSR.E",
          stem: "A garden board member who read both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the blogger has rarely visited the Palm House" },
            { letter: "B", text: "the garden needs new income, but the source is disputed" },
            { letter: "C", text: "the director plans to close the Palm House for good" },
            { letter: "D", text: "both writers agree that a fee will harm the palms" }
          ],
          correct: "B"
        }
      ]
    },

    /* 6 · LITERARY · kayaking */
    {
      id: "g11-rl-c91-stern-seat",
      family: "G11",
      title: "The Stern Seat",
      kind: "Literary · 11.RL",
      blurb: "For years Nadia steered the tandem kayak. Today she hands her brother the back seat, and the river bends.",
      level: 2,
      passage:
        "<p>" + N(1) + "My sister Nadia had steered our tandem kayak from the back seat every summer since I was nine, so I was surprised when she climbed into the front at the Millrace launch and handed me the stern paddle. " +
        N(2) + "\"Your turn,\" she said, as if she were passing me the salt. " +
        N(3) + "For the first mile the river was lazy and brown, and I began to think steering was the easy job.</p>" +
        "<p>" + N(4) + "Then the current quickened around a bend, and I saw a fallen sycamore lying across half the channel, its branches combing the water. " +
        N(5) + "My stomach folded in on itself. " +
        N(6) + "I swept the paddle hard on the wrong side, and the bow swung toward the tree instead of away. " +
        N(7) + "Nadia did not turn around. " +
        N(8) + "\"Draw right,\" she said, in the same voice she used to ask what was for dinner. " +
        N(9) + "I planted the blade, pulled the water toward the hull, and felt the boat slide sideways, inches from the reaching branches. " +
        N(10) + "Then we were past, bobbing in the slow pool below. " +
        N(11) + "My hands shook for the next ten minutes.</p>" +
        "<p>" + N(12) + "At the takeout, Nadia dragged the kayak onto the gravel and looked at me for a long moment. " +
        N(13) + "\"You steered,\" she said. " +
        N(14) + "I wanted to tell her that I had nearly flipped us, that she had saved us with two words, but I understood then that she had known all along exactly how close it would be, and had trusted me anyway.</p>",
      claims: [
        {
          id: "sycamore",
          sol: "11.RL.1.B",
          stem: "The fallen sycamore in sentence 4 matters to the plot mainly because it —",
          choices: [
            { letter: "A", text: "blocks the river so the trip must end early" },
            { letter: "B", text: "creates the challenge that tests the narrator" },
            { letter: "C", text: "explains why Nadia chose the front seat" },
            { letter: "D", text: "shows that the river flooded recently" }
          ],
          correct: "B"
        },
        {
          id: "nadia",
          sol: "11.RL.1.C",
          stem: "Nadia's calm voice when she says \"Draw right\" in sentence 8 reveals that she —",
          choices: [
            { letter: "A", text: "has not noticed the danger ahead of the boat" },
            { letter: "B", text: "is annoyed that her brother needs help" },
            { letter: "C", text: "wants to take over the steering at once" },
            { letter: "D", text: "trusts her brother to act on a clear cue" }
          ],
          correct: "D"
        },
        {
          id: "combing",
          sol: "11.RL.2.A",
          stem: "In sentence 4, describing the sycamore's branches as combing the water mainly suggests that the branches —",
          choices: [
            { letter: "A", text: "rake through the current and could snag the boat" },
            { letter: "B", text: "are being washed clean by the moving river" },
            { letter: "C", text: "are too thin and light to cause any harm" },
            { letter: "D", text: "have been neatly trimmed by park workers" }
          ],
          correct: "A"
        },
        {
          id: "salt",
          sol: "11.RL.2.B",
          stem: "Sentence 2, in which Nadia hands over the paddle as if she were passing the salt, creates a tone that is —",
          choices: [
            { letter: "A", text: "formal and ceremonial" },
            { letter: "B", text: "angry and impatient" },
            { letter: "C", text: "casual and understated" },
            { letter: "D", text: "anxious and fearful" }
          ],
          correct: "C"
        },
        {
          id: "lazy",
          sol: "11.RL.2.C",
          stem: "In sentence 3, the word lazy, used to describe the river on the first mile, most nearly means —",
          choices: [
            { letter: "A", text: "muddy" },
            { letter: "B", text: "slow-moving" },
            { letter: "C", text: "unwilling to work" },
            { letter: "D", text: "shallow" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "11.RL.3.A",
          stem: "\"The Stern Seat\" is told from the younger brother's first-person point of view. This choice mainly allows the reader to —",
          choices: [
            { letter: "A", text: "share his fear and his late insight about Nadia" },
            { letter: "B", text: "know exactly what Nadia thinks during the trip" },
            { letter: "C", text: "see the river from a distant bridge above it" },
            { letter: "D", text: "learn the full history of the Millrace launch" }
          ],
          correct: "A"
        }
      ]
    },

    /* 7 · INFORMATIONAL · puzzle hunt */
    {
      id: "g11-ri-c91-building-hunt",
      family: "G11",
      title: "Behind the Clues",
      kind: "Informational · 11.RI",
      blurb: "Players see twelve clever puzzles. Organizers see months of themes, test-solvers and hints.",
      level: 1,
      passage:
        "<p>" + N(1) + "A puzzle hunt is a contest in which teams solve a chain of puzzles, and each answer leads to the next challenge. " +
        N(2) + "To the players, a good hunt feels smooth and surprising. " +
        N(3) + "Behind the scenes, however, it takes months of careful planning.</p>" +
        "<p>" + N(4) + "Most hunts begin with a theme, such as a haunted museum or a lost expedition, which ties the puzzles together. " +
        N(5) + "Next, writers create the individual puzzles, often in very different styles: one might be a crossword, another a map, and another a set of photographs. " +
        N(6) + "The most important step comes after the puzzles are written. " +
        N(7) + "In a process called test-solving, volunteers who have never seen a puzzle try to solve it while the writer watches silently. " +
        N(8) + "If three test-solvers in a row get stuck on the same step, the writer knows the puzzle needs a clearer clue. " +
        N(9) + "At the Ashgrove Community Center's yearly hunt, organizers reported that test-solving changed more than half of their puzzles before the event.</p>" +
        "<p>" + N(10) + "Finally, organizers prepare hints for teams that stall. " +
        N(11) + "A good hint nudges a team forward without simply handing over the answer. " +
        N(12) + "When all of these steps work together, players finish the hunt tired but proud, convinced they solved everything on their own. " +
        N(13) + "In a sense, the best-designed hunt is one whose designers seem invisible.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "Which sentence best states the main idea of the passage about building a puzzle hunt?",
          choices: [
            { letter: "A", text: "Crossword puzzles are the most popular kind of hunt puzzle." },
            { letter: "B", text: "A good hunt depends on months of careful planning and testing." },
            { letter: "C", text: "Teams should ask for hints as soon as they get stuck." },
            { letter: "D", text: "Puzzle hunts are usually held at community centers." }
          ],
          correct: "B"
        },
        {
          id: "clearer",
          sol: "11.RI.1.B",
          stem: "According to the passage, how does a puzzle writer know that a puzzle needs a clearer clue?",
          choices: [
            { letter: "A", text: "Players complain about it after the hunt is over." },
            { letter: "B", text: "The theme does not match the puzzle's style." },
            { letter: "C", text: "The writer cannot solve it a second time." },
            { letter: "D", text: "Several test-solvers get stuck at the same step." }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "11.RI.1.C",
          stem: "The author wrote \"Behind the Clues\" mainly to —",
          choices: [
            { letter: "A", text: "explain the steps that go into making a hunt" },
            { letter: "B", text: "persuade readers to join a puzzle hunt team" },
            { letter: "C", text: "compare puzzle hunts with other party games" },
            { letter: "D", text: "describe one team's winning hunt strategy" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "The author organizes most of \"Behind the Clues\" by —",
          choices: [
            { letter: "A", text: "comparing two well-known hunts" },
            { letter: "B", text: "telling a story from one player's view" },
            { letter: "C", text: "describing the stages of design in order" },
            { letter: "D", text: "presenting a problem and then its solution" }
          ],
          correct: "C"
        },
        {
          id: "invisible",
          sol: "11.RI.2.B",
          stem: "In sentence 13, the statement that the best designers seem invisible mainly means that —",
          choices: [
            { letter: "A", text: "good design lets players feel they succeeded alone" },
            { letter: "B", text: "designers hide during the event to avoid questions" },
            { letter: "C", text: "most players never learn who wrote the hunt" },
            { letter: "D", text: "designers wear costumes that match the theme" }
          ],
          correct: "A"
        },
        {
          id: "numbers",
          sol: "11.RI.2.C",
          stem: "Which sentence gives numerical evidence of how much test-solving can change a hunt?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        }
      ]
    },

    /* 8 · ARGUMENT · fossils */
    {
      id: "g11-ri-c91-collecting-ban",
      family: "G11",
      title: "Pocketful of Shells",
      kind: "Argument · 11.RI",
      blurb: "Should a county ban all fossil collecting in its riverside parks? A local collector argues for a middle path.",
      level: 3,
      passage:
        "<p>" + N(1) + "Last month the Calder County parks board proposed banning all fossil collecting in its riverside parks, and the idea deserves a careful second look. " +
        N(2) + "The board's concern is real: rare specimens, such as vertebrate bones, belong in museums, where scientists can study them in context. " +
        N(3) + "But a total ban treats a child picking up a fossil clam shell the same as a dealer digging up a skeleton to sell.</p>" +
        "<p>" + N(4) + "In Calder County, common invertebrate fossils like clams and snails erode out of the riverbanks by the thousands every spring. " +
        N(5) + "If no one picks them up, the next flood simply grinds them into gravel. " +
        N(6) + "A better approach would be a permit system: collectors could keep common fossils, but anyone who finds bone would have to leave it in place and report it. " +
        N(7) + "This rule would not be a gamble. " +
        N(8) + "Neighboring Ridley County adopted a similar policy six years ago, and its museum reports that tips from amateurs have led to four significant finds that professionals would otherwise have missed.</p>" +
        "<p>" + N(9) + "Banning collecting would also cut off one of the best ways young people discover science. " +
        N(10) + "Many paleontologists began as children with a pocketful of shells. " +
        N(11) + "Protecting rare fossils and welcoming amateur collectors are not opposing goals. " +
        N(12) + "With clear rules, the park can do both.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          stem: "The author's primary purpose in the passage about Calder County's riverside parks is to —",
          choices: [
            { letter: "A", text: "describe how fossils form along riverbanks" },
            { letter: "B", text: "praise the board for protecting rare bones" },
            { letter: "C", text: "argue for a permit system instead of a ban" },
            { letter: "D", text: "explain how to become a paleontologist" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "11.RI.1.B",
          stem: "Which sentence provides the strongest evidence that amateur collectors can help scientists?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          stem: "In sentence 11, the author's claim that protecting rare fossils and welcoming collectors are not opposing goals is best described as —",
          choices: [
            { letter: "A", text: "an opinion the author backs with the Ridley County example" },
            { letter: "B", text: "a fact reported in the parks board's official proposal" },
            { letter: "C", text: "a quotation from a museum paleontologist in Ridley" },
            { letter: "D", text: "a definition of a scientific term used in the passage" }
          ],
          correct: "A"
        },
        {
          id: "concede",
          sol: "11.RI.2.A",
          stem: "How does the author develop the argument in sentences 2 and 3?",
          choices: [
            { letter: "A", text: "by listing figures about fossils sold online" },
            { letter: "B", text: "by telling the story of one child's discovery" },
            { letter: "C", text: "by defining the term invertebrate fossil" },
            { letter: "D", text: "by granting the board's concern, then showing a flaw" }
          ],
          correct: "D"
        },
        {
          id: "gravel",
          sol: "11.RI.2.B",
          stem: "In sentence 5, the detail that the next flood grinds the shells into gravel serves mainly to —",
          choices: [
            { letter: "A", text: "explain why vertebrate bones are so rare" },
            { letter: "B", text: "show that common fossils are lost if left alone" },
            { letter: "C", text: "warn readers about dangerous spring floods" },
            { letter: "D", text: "prove that the park needs a new seawall" }
          ],
          correct: "B"
        },
        {
          id: "gamble",
          sol: "11.RI.2.C",
          stem: "Sentence 7, \"This rule would not be a gamble,\" is included mainly to —",
          choices: [
            { letter: "A", text: "admit that the author is unsure about the plan" },
            { letter: "B", text: "introduce evidence that the policy worked elsewhere" },
            { letter: "C", text: "warn collectors about the penalty for breaking rules" },
            { letter: "D", text: "shift the topic to a different county's museum" }
          ],
          correct: "B"
        }
      ]
    },

    /* 9 · DRAMA · puzzle hunt */
    {
      id: "g11-rl-c91-four-dials",
      family: "G11",
      title: "Four Dials",
      kind: "Drama · 11.RL",
      blurb: "Four minutes, one locked box, and a teammate nobody is listening to.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A school gym at night, set up for the Lantern Hunt finale. Three teammates, ODALYS, BASHIR and JULES, crowd around a locked metal box on a folding table. A countdown clock on the wall reads 4:00.</em></p>" +
        "<p><strong>ODALYS:</strong> " + N(2) + "Okay, it's a four-digit lock, and we have four clue cards. " +
        N(3) + "One card, one digit. " +
        N(4) + "Bashir, hand me the cards.</p>" +
        "<p><strong>BASHIR:</strong> <em>" + N(5) + "(holding them back)</em> Wait. " +
        N(6) + "The cards are different colors, and the dials on the lock are painted too.</p>" +
        "<p><strong>ODALYS:</strong> " + N(7) + "Colors are decoration. " +
        N(8) + "We don't have time for decoration.</p>" +
        "<p><strong>JULES:</strong> <em>" + N(9) + "(glancing at the clock)</em> Three minutes, people.</p>" +
        "<p><strong>ODALYS:</strong> " + N(10) + "Fine, I'll go in order: seven, two, nine, four. " +
        "<em>" + N(11) + "She spins the dials and yanks the shackle. The lock does not open.</em></p>" +
        "<p><strong>BASHIR:</strong> <em>" + N(12) + "(quietly)</em> The red card goes on the red dial. " +
        N(13) + "Order by color, not by number.</p>" +
        "<p><em>" + N(14) + "ODALYS stares at him, then at the dials. She steps aside and holds out the lock.</em></p>" +
        "<p><strong>ODALYS:</strong> " + N(15) + "Show me.</p>" +
        "<p><em>" + N(16) + "BASHIR turns the dials: four, nine, seven, two. The lock clicks open. JULES cheers.</em></p>" +
        "<p><strong>ODALYS:</strong> " + N(17) + "Next time you see something, say it louder.</p>" +
        "<p><strong>BASHIR:</strong> " + N(18) + "Next time, ask me first.</p>" +
        "<p><em>" + N(19) + "They both laugh as the clock freezes at 1:12.</em></p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best supported by the scene at the Lantern Hunt finale?",
          choices: [
            { letter: "A", text: "Speed matters more than accuracy when time is short." },
            { letter: "B", text: "Strong teams listen to quiet members, not just loud ones." },
            { letter: "C", text: "Leaders should always make the final decision alone." },
            { letter: "D", text: "The hardest puzzles are designed to be impossible." }
          ],
          correct: "B"
        },
        {
          id: "failed",
          sol: "11.RL.1.B",
          stem: "Odalys's failed attempt in stage direction 11 advances the plot mainly by —",
          choices: [
            { letter: "A", text: "pushing Odalys to consider Bashir's idea" },
            { letter: "B", text: "revealing that the box was never locked" },
            { letter: "C", text: "causing Jules to leave the competition" },
            { letter: "D", text: "showing that the countdown clock has stopped" }
          ],
          correct: "A"
        },
        {
          id: "showme",
          sol: "11.RL.1.C",
          stem: "Odalys's line in sentence 15, \"Show me,\" reveals that she —",
          choices: [
            { letter: "A", text: "wants Bashir to take the blame if they lose" },
            { letter: "B", text: "still believes the colors are only decoration" },
            { letter: "C", text: "plans to leave the team after the hunt" },
            { letter: "D", text: "is willing to admit her approach failed" }
          ],
          correct: "D"
        },
        {
          id: "clock",
          sol: "11.RL.2.A",
          stem: "The countdown clock freezing at 1:12 in the final stage direction most clearly symbolizes —",
          choices: [
            { letter: "A", text: "the team's failure to finish in time" },
            { letter: "B", text: "the gym's old and broken equipment" },
            { letter: "C", text: "the pressure lifting once they work together" },
            { letter: "D", text: "Jules's habit of always watching the time" }
          ],
          correct: "C"
        },
        {
          id: "decoration",
          sol: "11.RL.2.C",
          stem: "In sentence 7, Odalys uses the word decoration to suggest that the colors on the cards are —",
          choices: [
            { letter: "A", text: "unimportant to solving the puzzle" },
            { letter: "B", text: "beautiful and carefully made" },
            { letter: "C", text: "hidden clues placed by the judges" },
            { letter: "D", text: "distracting to the other teams" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "11.RL.3.A",
          stem: "The playwright ends the scene with Bashir's reply in sentence 18 mainly to show that —",
          choices: [
            { letter: "A", text: "he is angry and refuses to work with Odalys" },
            { letter: "B", text: "he has gained the confidence to speak up" },
            { letter: "C", text: "the team will not enter any future hunts" },
            { letter: "D", text: "Jules was the true leader of the team" }
          ],
          correct: "B"
        }
      ]
    },

    /* 10 · LITERARY · fossils */
    {
      id: "g11-rl-c91-fossil-drawer",
      family: "G11",
      title: "The Second Card",
      kind: "Literary · 11.RL",
      blurb: "Soraya opens her grandmother's fossil drawer and finds forty years of afternoons, and one place name that no longer matches.",
      level: 3,
      passage:
        "<p>" + N(1) + "The drawer stuck, the way it always had, and Soraya had to lift and pull at once before it slid open with a sound like a held cough. " +
        N(2) + "Inside lay forty years of her grandmother's afternoons: ammonites coiled like tiny staircases, a fern pressed into gray shale, a shark's tooth no longer than a grain of rice. " +
        N(3) + "Each specimen sat on a card written in Grandmother Dilnoza's careful, slanted hand, giving a name, a place, and a date.</p>" +
        "<p>" + N(4) + "\"That one is from the quarry at Ostrov,\" her grandmother said from the armchair, pointing at the fern. " +
        N(5) + "The card said it came from a creek bed in Hale Valley. " +
        N(6) + "Soraya said nothing and set the fern back in its place.</p>" +
        "<p>" + N(7) + "Lately her grandmother misplaced things: her glasses, the names of streets, sometimes whole afternoons. " +
        N(8) + "The doctor called it ordinary for her age, a word that seemed to Soraya too small for what it described. " +
        N(9) + "But the cards did not forget. " +
        N(10) + "Reading them, Soraya realized that they were not only a catalog of stones; they were a diary of where her grandmother had walked and who she had been when she bent to look.</p>" +
        "<p>" + N(11) + "That evening Soraya brought home a new pack of index cards. " +
        N(12) + "On the first one she copied the old label word for word, and beneath it she wrote, in her own rounder hand, \"Grandma says Ostrov. Ask her about Ostrov.\" " +
        N(13) + "Then she slid the card back under the fern, so that the two versions lay together, neither one erasing the other.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme of the story about Soraya and her grandmother's fossil drawer?",
          choices: [
            { letter: "A", text: "Written scientific records are always more reliable than memory." },
            { letter: "B", text: "Old collections should be given to museums before they are lost." },
            { letter: "C", text: "Preserving someone's past can mean honoring, not correcting, their stories." },
            { letter: "D", text: "Young people rarely take an interest in their grandparents' hobbies." }
          ],
          correct: "C"
        },
        {
          id: "silence",
          sol: "11.RL.1.B",
          stem: "Soraya's silence in sentence 6, after her grandmother names the wrong place, is important to the story because it —",
          choices: [
            { letter: "A", text: "shows that she chooses not to correct her grandmother" },
            { letter: "B", text: "reveals that she does not know where the fern came from" },
            { letter: "C", text: "suggests that she is angry at being interrupted" },
            { letter: "D", text: "proves that the card in the drawer is mistaken" }
          ],
          correct: "A"
        },
        {
          id: "soraya",
          sol: "11.RL.1.C",
          stem: "Sentences 12 and 13, in which Soraya writes the new index card, reveal that she is —",
          choices: [
            { letter: "A", text: "careless about keeping the collection accurate" },
            { letter: "B", text: "respectful of both the record and her grandmother" },
            { letter: "C", text: "determined to prove her grandmother wrong" },
            { letter: "D", text: "eager to throw out the old cards for new ones" }
          ],
          correct: "B"
        },
        {
          id: "ordinary",
          sol: "11.RL.2.B",
          stem: "In sentence 8, the remark that the doctor's word ordinary seemed too small for what it described creates a tone that is —",
          choices: [
            { letter: "A", text: "openly sarcastic" },
            { letter: "B", text: "cheerfully hopeful" },
            { letter: "C", text: "coldly scientific" },
            { letter: "D", text: "quietly sorrowful" }
          ],
          correct: "D"
        },
        {
          id: "catalog",
          sol: "11.RL.2.C",
          stem: "In sentence 10, the word catalog, used to describe Grandmother Dilnoza's cards, most nearly means —",
          choices: [
            { letter: "A", text: "an organized record of items" },
            { letter: "B", text: "a store's booklet of products for sale" },
            { letter: "C", text: "a scientist's private daily notes" },
            { letter: "D", text: "a list of errors to be corrected" }
          ],
          correct: "A"
        },
        {
          id: "twocards",
          sol: "11.RL.3.A",
          stem: "How does the final image of the two cards lying together under the fern resolve the story?",
          choices: [
            { letter: "A", text: "It shows Soraya deciding that the old card was wrong." },
            { letter: "B", text: "It shows that the grandmother finally recalls Hale Valley." },
            { letter: "C", text: "It shows Soraya keeping both the record and the memory." },
            { letter: "D", text: "It shows that the collection will soon be given away." }
          ],
          correct: "C"
        }
      ]
    },

    /* 11 · FUNCTIONAL TEXT · kayaking */
    {
      id: "g11-ri-c91-rental-rules",
      family: "G11",
      title: "Pine Hollow Rental Guidelines",
      kind: "Functional text · 11.RI",
      blurb: "Life jackets, a river gauge, a trestle to carry around, and a shuttle that will not wait.",
      level: 1,
      passage:
        "<p><strong>Pine Hollow Outfitters: Kayak Rental Guidelines</strong></p>" +
        "<p>" + N(1) + "Welcome to Pine Hollow Outfitters, where single and tandem kayaks are available for rent from May 1 to October 15. " +
        N(2) + "Please read these guidelines before you sign your rental agreement.</p>" +
        "<p><strong>Before You Launch</strong> " + N(3) + "Every paddler must wear a properly fitted life jacket at all times while on the water; staff will help you adjust the straps. " +
        N(4) + "Paddlers under 16 must be accompanied by an adult in the same group. " +
        N(5) + "Check the river level board at the dock: if the gauge reads above 6 feet, all rentals are suspended for the day.</p>" +
        "<p><strong>On the River</strong> " + N(6) + "Stay to the right side of the channel when other boats approach. " +
        N(7) + "The route from our dock to the Cedar Bridge takeout is 5.5 miles and takes most paddlers about three hours. " +
        N(8) + "Do not attempt to paddle under the old railroad trestle at mile 4; carry your kayak around it on the marked path along the left bank.</p>" +
        "<p><strong>Returning Your Kayak</strong> " + N(9) + "Our shuttle van picks up paddlers at Cedar Bridge every hour on the half hour until 6:30 p.m. " +
        N(10) + "Kayaks returned after the final shuttle will be charged a late fee of $25. " +
        N(11) + "Please rinse sand from your boat at the hose station before loading it onto the trailer.</p>" +
        "<p>" + N(12) + "Questions? Ask any staff member wearing a green vest.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          stem: "What is the main purpose of the Pine Hollow Outfitters guidelines?",
          choices: [
            { letter: "A", text: "to advertise guided tours to new customers" },
            { letter: "B", text: "to describe the history of the railroad trestle" },
            { letter: "C", text: "to compare single kayaks with tandem kayaks" },
            { letter: "D", text: "to explain the rules for a safe, smooth rental" }
          ],
          correct: "D"
        },
        {
          id: "gauge",
          sol: "11.RI.1.B",
          stem: "According to the Pine Hollow guidelines, what happens if the river gauge reads above 6 feet?",
          choices: [
            { letter: "A", text: "Paddlers must carry kayaks around the trestle." },
            { letter: "B", text: "All rentals are suspended for that day." },
            { letter: "C", text: "The shuttle van runs every half hour." },
            { letter: "D", text: "Only tandem kayaks may be rented." }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "11.RI.1.C",
          stem: "The intended audience for the Pine Hollow guidelines is —",
          choices: [
            { letter: "A", text: "customers who are about to rent a kayak" },
            { letter: "B", text: "staff members training to drive the shuttle" },
            { letter: "C", text: "engineers who inspect the railroad trestle" },
            { letter: "D", text: "students writing reports about local rivers" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          stem: "How do the bold headings organize the Pine Hollow guidelines?",
          choices: [
            { letter: "A", text: "by order of importance, from least to most" },
            { letter: "B", text: "by the stages of a trip, from launch to return" },
            { letter: "C", text: "by comparing two different kinds of kayaks" },
            { letter: "D", text: "by listing common problems and their solutions" }
          ],
          correct: "B"
        },
        {
          id: "trestle",
          sol: "11.RI.2.B",
          stem: "In the Pine Hollow guidelines, sentence 8 serves mainly to —",
          choices: [
            { letter: "A", text: "describe the scenery near mile 4" },
            { letter: "B", text: "explain how the railroad was built" },
            { letter: "C", text: "suggest a good place to stop for lunch" },
            { letter: "D", text: "warn paddlers about a specific hazard" }
          ],
          correct: "D"
        },
        {
          id: "late",
          sol: "11.RI.2.C",
          stem: "Which sentence from the Pine Hollow guidelines shows that returning a kayak late has a cost?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        }
      ]
    },

    /* 12 · VOCABULARY · botanical garden */
    {
      id: "g11-rv-c91-orchid-room",
      family: "G11",
      title: "Their Own Calendar",
      kind: "Vocabulary · 11.RV",
      blurb: "In the Orchid Room, a seed as fine as dust can take five years to flower.",
      level: 2,
      passage:
        "<p>" + N(1) + "Visitors to the Orchid Room at the Ellery Botanical Garden often assume the plants are <strong>fragile</strong>, but many orchids are remarkably tough. " +
        N(2) + "In the wild, some species cling to tree bark high above the forest floor, where rain is <strong>sporadic</strong>: a downpour one week, then nothing for a month. " +
        N(3) + "To survive, their thick roots, wrapped in a silvery, <strong>translucent</strong> coating, soak up water quickly and store it.</p>" +
        "<p>" + N(4) + "Growing new orchids from seed is far harder. " +
        N(5) + "An orchid seed is as fine as dust and carries almost no stored food, so it cannot <strong>germinate</strong> on its own. " +
        N(6) + "Instead, it depends on a <strong>symbiotic</strong> relationship with a soil fungus: the fungus feeds the tiny seedling, and later the grown orchid shares sugars with the fungus. " +
        N(7) + "Garden staff imitate this partnership in the lab, sowing seeds on a sterile gel full of nutrients. " +
        N(8) + "Even then, a seedling may take five years or more to flower.</p>" +
        "<p>" + N(9) + "Head grower Teodora Vlasic says that patience is the most important tool in her greenhouse. " +
        N(10) + "\"People want orchids to bloom on demand,\" she says, \"but these plants keep their own calendar.\" " +
        N(11) + "Between blooms, an orchid may look <strong>dormant</strong>, but beneath the leaves its roots are still slowly growing. " +
        N(12) + "For Vlasic, the long wait is part of the appeal.</p>",
      claims: [
        {
          id: "translucent",
          sol: "11.RV.1.A",
          stem: "The word translucent in sentence 3 contains the prefix trans-, meaning through, and a root meaning light. Translucent most likely describes a coating that —",
          choices: [
            { letter: "A", text: "blocks all light completely" },
            { letter: "B", text: "lets some light pass through" },
            { letter: "C", text: "changes color in sunlight" },
            { letter: "D", text: "gives off its own glow" }
          ],
          correct: "B"
        },
        {
          id: "symbiotic",
          sol: "11.RV.1.A",
          stem: "The word symbiotic in sentence 6 begins with the prefix sym-, as in symphony and sympathy. The prefix sym- means —",
          choices: [
            { letter: "A", text: "against or opposed" },
            { letter: "B", text: "under or below" },
            { letter: "C", text: "together or with" },
            { letter: "D", text: "many or several" }
          ],
          correct: "C"
        },
        {
          id: "sporadic",
          sol: "11.RV.1.B",
          stem: "In sentence 2, the example after the colon about a downpour followed by a dry month shows that sporadic means —",
          choices: [
            { letter: "A", text: "falling very heavily" },
            { letter: "B", text: "arriving on a schedule" },
            { letter: "C", text: "lasting a long time" },
            { letter: "D", text: "happening irregularly" }
          ],
          correct: "D"
        },
        {
          id: "dormant",
          sol: "11.RV.1.B",
          stem: "In sentence 11, the contrast signaled by the word but helps show that dormant means —",
          choices: [
            { letter: "A", text: "seemingly inactive" },
            { letter: "B", text: "badly damaged" },
            { letter: "C", text: "fully grown" },
            { letter: "D", text: "recently planted" }
          ],
          correct: "A"
        },
        {
          id: "germinate",
          sol: "11.RV.1.C",
          stem: "In sentence 5, the word germinate, describing what an orchid seed cannot do alone, most nearly means —",
          choices: [
            { letter: "A", text: "spread disease" },
            { letter: "B", text: "dry out" },
            { letter: "C", text: "begin to sprout" },
            { letter: "D", text: "be eaten" }
          ],
          correct: "C"
        },
        {
          id: "calendar",
          sol: "11.RV.1.C",
          stem: "In sentence 10, Vlasic says the orchids keep their own calendar. This phrase suggests that the plants are —",
          choices: [
            { letter: "A", text: "lazy and unhealthy" },
            { letter: "B", text: "independent and unhurried" },
            { letter: "C", text: "confused and unpredictable" },
            { letter: "D", text: "rigid and mechanical" }
          ],
          correct: "B"
        }
      ]
    },

    /* 13 · INFORMATIONAL · kayaking */
    {
      id: "g11-ri-c91-eddy-line",
      family: "G11",
      title: "Reading Moving Water",
      kind: "Informational · 11.RI",
      blurb: "Fast lanes, slow lanes and water that turns back on itself: how kayakers learn to read a river.",
      level: 3,
      passage:
        "<p>" + N(1) + "To a beginner, a river looks like a single body of water sliding downhill, but an experienced kayaker sees something closer to a crowded highway, with fast lanes, slow lanes, and places where traffic turns back on itself. " +
        N(2) + "The fastest current usually runs where the river is deepest, often near the outside of a bend. " +
        N(3) + "Along the banks, friction with rocks and mud slows the water down. " +
        N(4) + "Behind a boulder, the current may even reverse, curling upstream into a calm pocket called an eddy.</p>" +
        "<p>" + N(5) + "For a paddler, eddies are not obstacles but resting places. " +
        N(6) + "A kayaker can slip out of the main current, catch her breath, and scout what lies ahead. " +
        N(7) + "Yet the boundary between an eddy and the main flow, known as the eddy line, can be the trickiest water on the river. " +
        N(8) + "There, two currents moving in opposite directions meet, and a boat that crosses the line at the wrong angle can be spun around or tipped over.</p>" +
        "<p>" + N(9) + "Instructors teach students to cross at a sharp angle, leaning slightly downstream so the current pushes against the hull rather than catching the upstream edge. " +
        N(10) + "This counterintuitive lean, toward the very water that seems most threatening, is often the hardest lesson for new paddlers to accept. " +
        N(11) + "Learning to read these patterns does not make a river safe. " +
        N(12) + "It does, however, turn the water from a blur of motion into a map that a careful paddler can follow.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Reading Moving Water\"?",
          choices: [
            { letter: "A", text: "Eddies are the most dangerous feature of every river." },
            { letter: "B", text: "Beginners should paddle only on lakes, never rivers." },
            { letter: "C", text: "Rivers flow fastest along their rocky, muddy banks." },
            { letter: "D", text: "Paddlers who understand currents can navigate more wisely." }
          ],
          correct: "D"
        },
        {
          id: "lean",
          sol: "11.RI.1.B",
          stem: "According to sentence 9, kayakers crossing an eddy line should lean downstream so that —",
          choices: [
            { letter: "A", text: "the current pushes the hull, not the upstream edge" },
            { letter: "B", text: "the boat can reverse direction more quickly" },
            { letter: "C", text: "the paddler can spot rocks below the surface" },
            { letter: "D", text: "the boat glides straight into the calm eddy" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward the river in sentences 11 and 12 is best described as —",
          choices: [
            { letter: "A", text: "fearful and discouraging" },
            { letter: "B", text: "careless and dismissive" },
            { letter: "C", text: "respectful yet confident" },
            { letter: "D", text: "amazed but uninformed" }
          ],
          correct: "C"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          stem: "How does the author develop the discussion in sentences 2 through 8 of \"Reading Moving Water\"?",
          choices: [
            { letter: "A", text: "by narrating one kayaker's trip in time order" },
            { letter: "B", text: "by moving from general currents to one specific hazard" },
            { letter: "C", text: "by comparing rivers in several different countries" },
            { letter: "D", text: "by answering readers' questions one at a time" }
          ],
          correct: "B"
        },
        {
          id: "highway",
          sol: "11.RI.2.B",
          stem: "In sentence 1, comparing a river to a crowded highway helps the reader understand that —",
          choices: [
            { letter: "A", text: "rivers are noisy and crowded with boats" },
            { letter: "B", text: "kayakers must obey posted traffic laws" },
            { letter: "C", text: "rivers are dangerous to cross on foot" },
            { letter: "D", text: "parts of a river move at different speeds" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "11.RI.2.C",
          stem: "The author includes sentence 10, about the counterintuitive lean, mainly to —",
          choices: [
            { letter: "A", text: "stress that the right technique feels unnatural at first" },
            { letter: "B", text: "suggest that instructors often teach the wrong method" },
            { letter: "C", text: "explain why eddies form behind large boulders" },
            { letter: "D", text: "argue that new paddlers should avoid eddy lines" }
          ],
          correct: "A"
        }
      ]
    },

    /* 14 · POETRY · fossils */
    {
      id: "g11-rl-c91-trilobite",
      family: "G11",
      title: "Trilobite",
      kind: "Poetry · 11.RL",
      blurb: "A fossil small enough to hold, and old enough to turn the holder into the one being held.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "It fits inside my palm, a curled gray bead,<br>" +
        L(2) + "a creature folded on itself for sleep<br>" +
        L(3) + "four hundred million years ago, or more;<br>" +
        L(4) + "the sea that held it hardened into hills.<br>" +
        L(5) + "Its eyes, the guidebook says, were made of stone<br>" +
        L(6) + "even while it lived: clear crystal lenses<br>" +
        L(7) + "that watched the ancient water for a shadow.<br>" +
        L(8) + "Now they watch nothing, or perhaps they watch me.</p>" +
        "<p class=\"poem\">" +
        L(9) + "I came here thinking I would take a souvenir,<br>" +
        L(10) + "a thing to set beside my keys and coins.<br>" +
        L(11) + "But holding it, I feel the scale turn over:<br>" +
        L(12) + "it is the one that's keeping, I'm the one kept,<br>" +
        L(13) + "a brief warm hand that happened to pass by<br>" +
        L(14) + "in the long afternoon of its stillness.<br>" +
        L(15) + "I set it back where the creek had left it<br>" +
        L(16) + "and let the water have it for a while." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a central idea of the poem \"Trilobite\"?",
          choices: [
            { letter: "A", text: "Fossils should be taken home and displayed with care." },
            { letter: "B", text: "A human life is brief beside the deep time a fossil holds." },
            { letter: "C", text: "Ancient sea creatures had surprisingly poor eyesight." },
            { letter: "D", text: "The speaker regrets making the trip to the creek." }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "11.RL.1.B",
          stem: "In \"Trilobite,\" line 11, where the speaker feels the scale turn over, marks a shift from —",
          choices: [
            { letter: "A", text: "fear of the creek to comfort beside it" },
            { letter: "B", text: "winter cold to the warmth of spring" },
            { letter: "C", text: "owning the fossil to feeling small beside it" },
            { letter: "D", text: "trusting the guidebook to doubting it" }
          ],
          correct: "C"
        },
        {
          id: "sleep",
          sol: "11.RL.2.A",
          stem: "In line 2, describing the trilobite as folded on itself for sleep mainly suggests that the fossil —",
          choices: [
            { letter: "A", text: "seems peaceful, as if resting rather than dead" },
            { letter: "B", text: "is broken into several separate pieces" },
            { letter: "C", text: "was killed while fighting off a predator" },
            { letter: "D", text: "is still alive somewhere under the creek" }
          ],
          correct: "A"
        },
        {
          id: "kept",
          sol: "11.RL.2.B",
          stem: "Line 12 of \"Trilobite,\" \"it is the one that's keeping, I'm the one kept,\" is best described as —",
          choices: [
            { letter: "A", text: "an exaggeration meant to be humorous" },
            { letter: "B", text: "a sound word that imitates the creek" },
            { letter: "C", text: "a rhyme that links the two stanzas" },
            { letter: "D", text: "a paradox that reverses the expected roles" }
          ],
          correct: "D"
        },
        {
          id: "stillness",
          sol: "11.RL.2.C",
          stem: "In line 14, the word stillness most nearly refers to the trilobite's —",
          choices: [
            { letter: "A", text: "long, unchanging existence in the rock" },
            { letter: "B", text: "silence when the speaker talks to it" },
            { letter: "C", text: "refusal to move from the speaker's palm" },
            { letter: "D", text: "calm mood on a sunny afternoon" }
          ],
          correct: "A"
        },
        {
          id: "stanzas",
          sol: "11.RL.3.A",
          stem: "How do the two stanzas of \"Trilobite\" work together?",
          choices: [
            { letter: "A", text: "The first is set in winter and the second in summer." },
            { letter: "B", text: "The first asks a question the second refuses to answer." },
            { letter: "C", text: "The first describes the fossil; the second shows a changed view." },
            { letter: "D", text: "The first describes the creek; the second describes a museum." }
          ],
          correct: "C"
        }
      ]
    },

    /* 15 · PAIRED TEXTS · puzzle hunt */
    {
      id: "g11-dsr-c91-coded-map",
      family: "G11",
      title: "The Coded Map",
      kind: "Paired texts · 11.DSR",
      blurb: "A school bulletin reports the hunt's numbers; one team's journal tells what the numbers leave out.",
      level: 1,
      passage:
        "<p><strong>Text 1 — From the Westbrook High Bulletin, \"Library Hunt Draws Record Crowd\"</strong></p>" +
        "<p>" + N(1) + "Forty-two teams entered the Westbrook High library's third annual puzzle hunt on Saturday, nearly double last year's total. " +
        N(2) + "Teams had three hours to solve twelve puzzles hidden throughout the building, from the reference desk to the stairwells. " +
        N(3) + "The winning team, the Night Owls, finished in two hours and ten minutes. " +
        N(4) + "Librarian Corinne Abara said the event raised $630 for new graphic novels. " +
        N(5) + "\"The best part was seeing students who never visit the library racing through the stacks,\" she said. " +
        N(6) + "Only nine teams solved all twelve puzzles, and the final puzzle, a coded map of the school, stumped most competitors. " +
        N(7) + "Organizers plan to add a beginner division next year so that first-time players can enjoy the event.</p>" +
        "<p><strong>Text 2 — From Hyun-woo's journal</strong></p>" +
        "<p>" + N(8) + "Our team, the Paper Cranes, did not win the Westbrook hunt, and honestly we did not even finish. " +
        N(9) + "We spent forty minutes on the coded map, turning it upside down and arguing over whether the dots were stairwells or windows. " +
        N(10) + "Then Lupe noticed that the dots matched the ceiling lights in the hallway outside the library, and suddenly the whole map made sense. " +
        N(11) + "The clock ran out before we could reach the library desk to enter our answer. " +
        N(12) + "I should have been disappointed, but walking home I kept seeing those ceiling lights in my mind, glowing in the right pattern. " +
        N(13) + "Next year I am bringing a flashlight, and I am definitely bringing Lupe.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          stem: "Which detail about the hunt appears in both the Bulletin article and Hyun-woo's journal?",
          choices: [
            { letter: "A", text: "The Night Owls won the hunt." },
            { letter: "B", text: "The coded map was very hard to solve." },
            { letter: "C", text: "The event raised money for new books." },
            { letter: "D", text: "A beginner division will be added." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "How do the Bulletin article and Hyun-woo's journal differ in how they present the puzzle hunt?",
          choices: [
            { letter: "A", text: "Text 1 follows one team, while Text 2 gives totals for all teams." },
            { letter: "B", text: "Text 1 criticizes the hunt, while Text 2 praises the librarian." },
            { letter: "C", text: "Text 1 explains the rules, while Text 2 describes another event." },
            { letter: "D", text: "Text 1 reports on the whole event, while Text 2 shares one team's night." }
          ],
          correct: "D"
        },
        {
          id: "whichsent",
          sol: "11.DSR.D",
          stem: "Hyun-woo's team is most likely among the teams described in which sentence of Text 1?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "11.DSR.E",
          stem: "Compared with the Bulletin article, Hyun-woo's journal entry is more —",
          choices: [
            { letter: "A", text: "personal and reflective" },
            { letter: "B", text: "formal and objective" },
            { letter: "C", text: "critical and harsh" },
            { letter: "D", text: "technical and detailed" }
          ],
          correct: "A"
        },
        {
          id: "enjoyed",
          sol: "11.DSR.E",
          stem: "Select TWO sentences from Text 2 that show Hyun-woo still enjoyed the hunt even though the Paper Cranes did not finish.",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "howmany",
          sol: "11.DSR.E",
          stem: "A reader who wants to know how many teams entered the Westbrook hunt should rely on —",
          choices: [
            { letter: "A", text: "Text 2, because Hyun-woo was a competitor" },
            { letter: "B", text: "Text 1, because it reports overall numbers" },
            { letter: "C", text: "both texts, since each gives the same total" },
            { letter: "D", text: "neither text, because no number is given" }
          ],
          correct: "B"
        }
      ]
    },

    /* 16 · LITERARY · puzzle hunt */
    {
      id: "g11-rl-c91-birthday-hunt",
      family: "G11",
      title: "Look Under the Birdbath",
      kind: "Literary · 11.RL",
      blurb: "Callum built the perfect puzzle hunt for his little sister's birthday. That was the problem.",
      level: 1,
      passage:
        "<p>" + N(1) + "Callum Reyes spent two weeks building a puzzle hunt for his sister Bea's tenth birthday, and he was proud of every clue. " +
        N(2) + "There was a cipher hidden in a cereal box, a riddle written backward, and a map of the backyard drawn to scale. " +
        N(3) + "He expected the six party guests to admire his work.</p>" +
        "<p>" + N(4) + "Instead, by the third clue, they were sitting on the porch steps in a sullen row. " +
        N(5) + "Bea held the backward riddle up to the light and frowned at it like a bill she could not pay. " +
        N(6) + "\"This is impossible,\" one of her friends announced. " +
        N(7) + "Callum started to explain that it was supposed to be read in a mirror, and then he stopped. " +
        N(8) + "Bea's party hat had slid sideways, and she was not looking at the riddle anymore; she was looking at him.</p>" +
        "<p>" + N(9) + "He went inside, grabbed a marker, and rewrote the clue in large, plain letters on the back of a paper plate: LOOK UNDER THE BIRDBATH. " +
        N(10) + "The kids shrieked and ran. " +
        N(11) + "For the rest of the afternoon, Callum walked a step behind the pack, quietly turning each hard clue into an easier one before anyone could get stuck. " +
        N(12) + "That night Bea told their mother it was the best birthday she had ever had. " +
        N(13) + "Callum never mentioned that most of his best puzzles had gone unsolved, folded in his back pocket.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the story about Callum's birthday puzzle hunt most clearly develop?",
          choices: [
            { letter: "A", text: "Hard work always earns the admiration of others." },
            { letter: "B", text: "Children are too young to enjoy real puzzles." },
            { letter: "C", text: "A gift succeeds when it fits the person receiving it." },
            { letter: "D", text: "Family parties are usually more stressful than fun." }
          ],
          correct: "C"
        },
        {
          id: "porch",
          sol: "11.RL.1.B",
          stem: "Sentence 4, which shows the guests sitting on the porch steps in a sullen row, matters to the plot because it —",
          choices: [
            { letter: "A", text: "reveals that Callum's hunt is not going as planned" },
            { letter: "B", text: "shows that the party has moved indoors" },
            { letter: "C", text: "explains why Bea's party hat slid sideways" },
            { letter: "D", text: "shows that the guests solved the third clue" }
          ],
          correct: "A"
        },
        {
          id: "callum",
          sol: "11.RL.1.C",
          stem: "Callum's actions in sentence 11, as he walks behind the pack, show that he —",
          choices: [
            { letter: "A", text: "wants to win the hunt for himself" },
            { letter: "B", text: "is bored and eager for the party to end" },
            { letter: "C", text: "suspects that the guests are cheating" },
            { letter: "D", text: "cares more about Bea's fun than his cleverness" }
          ],
          correct: "D"
        },
        {
          id: "bill",
          sol: "11.RL.2.A",
          stem: "In sentence 5, comparing the backward riddle to a bill Bea could not pay suggests that she feels —",
          choices: [
            { letter: "A", text: "excited to solve it quickly" },
            { letter: "B", text: "burdened and stuck by it" },
            { letter: "C", text: "angry at her mother" },
            { letter: "D", text: "sure she has the answer" }
          ],
          correct: "B"
        },
        {
          id: "pocket",
          sol: "11.RL.2.B",
          stem: "The final sentence, about the unsolved puzzles folded in Callum's back pocket, creates a tone that is —",
          choices: [
            { letter: "A", text: "bitterly resentful" },
            { letter: "B", text: "quietly generous" },
            { letter: "C", text: "openly boastful" },
            { letter: "D", text: "nervous and fearful" }
          ],
          correct: "B"
        },
        {
          id: "sullen",
          sol: "11.RL.2.C",
          stem: "In sentence 4, the word sullen, describing the row of party guests, most nearly means —",
          choices: [
            { letter: "A", text: "tired and sleepy" },
            { letter: "B", text: "loud and angry" },
            { letter: "C", text: "gloomy and silent" },
            { letter: "D", text: "curious and alert" }
          ],
          correct: "C"
        }
      ]
    },

    /* 17 · INFORMATIONAL · botanical garden */
    {
      id: "g11-ri-c91-seed-bank",
      family: "G11",
      title: "The Room Under the Roses",
      kind: "Informational · 11.RI",
      blurb: "Beneath a botanical garden, twelve thousand envelopes of seeds wait in the cold.",
      level: 2,
      passage:
        "<p>" + N(1) + "Beneath the rose beds of the Marlowe Botanical Garden lies a room most visitors never see: a refrigerated seed bank holding more than twelve thousand samples of native plants. " +
        N(2) + "Each sample is a small envelope of seeds, dried to remove most of their moisture and stored at minus eighteen degrees Celsius. " +
        N(3) + "At that temperature, many seeds can survive for decades, and some for more than a century.</p>" +
        "<p>" + N(4) + "The purpose of the seed bank is simple to state but difficult to carry out. " +
        N(5) + "If a local wildflower disappears from the wild because of drought, disease, or new construction, the stored seeds can be used to grow it again. " +
        N(6) + "Collecting those seeds, however, requires patience. " +
        N(7) + "Volunteers must visit a population several times to catch the brief window when seeds are ripe but have not yet scattered. " +
        N(8) + "To protect the wild plants, they take no more than one fifth of the seeds from any single site.</p>" +
        "<p>" + N(9) + "Stored seeds also need regular checkups. " +
        N(10) + "Every ten years, staff remove a few seeds from each envelope and try to sprout them. " +
        N(11) + "If fewer than three quarters sprout, the sample is replaced with fresh seed from the field. " +
        N(12) + "Garden director Imani Okoro compares the work to keeping a library that must constantly reprint its own books. " +
        N(13) + "It is quiet, unglamorous labor, but it means the meadows of the future will not depend on luck alone.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "What is the main idea of the passage about the Marlowe Botanical Garden's seed bank?",
          choices: [
            { letter: "A", text: "Roses are the most important plants at the Marlowe garden." },
            { letter: "B", text: "Seeds kept at low temperatures will survive forever." },
            { letter: "C", text: "The seed bank protects native plants through careful collecting and testing." },
            { letter: "D", text: "Volunteers prefer collecting seeds to working in the garden." }
          ],
          correct: "C"
        },
        {
          id: "visits",
          sol: "11.RI.1.B",
          stem: "According to the passage, why do seed bank volunteers visit a wild plant population several times?",
          choices: [
            { letter: "A", text: "to catch the short time when seeds are ripe but not scattered" },
            { letter: "B", text: "to count how many visitors walk through the meadow" },
            { letter: "C", text: "to remove plants that are threatened by disease" },
            { letter: "D", text: "to replace old envelopes in the seed bank with new ones" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "In sentence 13, the author's attitude toward the seed bank's work is best described as —",
          choices: [
            { letter: "A", text: "doubtful that it will ever matter" },
            { letter: "B", text: "appreciative despite its plainness" },
            { letter: "C", text: "amused by the volunteers' strict rules" },
            { letter: "D", text: "critical of how slowly it is run" }
          ],
          correct: "B"
        },
        {
          id: "checkups",
          sol: "11.RI.2.A",
          stem: "How does the author organize sentences 9 through 11 of the seed bank passage?",
          choices: [
            { letter: "A", text: "by comparing two different seed banks" },
            { letter: "B", text: "by telling one volunteer's story in order" },
            { letter: "C", text: "by listing the causes of local drought" },
            { letter: "D", text: "by describing a test and what follows if seeds fail" }
          ],
          correct: "D"
        },
        {
          id: "library",
          sol: "11.RI.2.B",
          stem: "In sentence 12, comparing the seed bank to a library that must reprint its own books helps the reader understand that —",
          choices: [
            { letter: "A", text: "the seed bank also lends books to visitors" },
            { letter: "B", text: "stored seeds must be renewed to stay useful" },
            { letter: "C", text: "the seeds are labeled like library books" },
            { letter: "D", text: "the seed bank is located inside a library" }
          ],
          correct: "B"
        },
        {
          id: "fifth",
          sol: "11.RI.2.C",
          stem: "The author includes the detail in sentence 8 about taking no more than one fifth of the seeds mainly to —",
          choices: [
            { letter: "A", text: "explain why the seed bank is so large" },
            { letter: "B", text: "suggest that most wild seeds are not ripe" },
            { letter: "C", text: "prove that volunteers are poorly trained" },
            { letter: "D", text: "show that collectors avoid harming wild plants" }
          ],
          correct: "D"
        }
      ]
    },

    /* 18 · VOCABULARY · fossils */
    {
      id: "g11-rv-c91-quarry-jaw",
      family: "G11",
      title: "The Overlooked Jaw",
      kind: "Vocabulary · 11.RV",
      blurb: "A quarry bone, a cautious scientist, and an answer that had been sitting in a museum drawer for eighty years.",
      level: 3,
      passage:
        "<p>" + N(1) + "When workers at the Hollins Creek quarry uncovered a curved bone in a slab of limestone, they called the regional museum, and within a week a small team arrived to <strong>excavate</strong> the site. " +
        N(2) + "The work was <strong>painstaking</strong>: the team removed rock with dental picks and soft brushes, sometimes advancing only a few centimeters in a day. " +
        N(3) + "What they found was <strong>fragmentary</strong>, a scattering of ribs, two vertebrae, and part of a jaw rather than a complete skeleton.</p>" +
        "<p>" + N(4) + "Dr. Amara Lindqvist, who led the dig, gave the animal a <strong>provisional</strong> identification as an early marine reptile, but she warned reporters that the label could change once the bones were studied in the lab. " +
        N(5) + "\"A single jaw can mislead you,\" she explained. " +
        N(6) + "\"We need other evidence to <strong>corroborate</strong> what the teeth suggest.\"</p>" +
        "<p>" + N(7) + "That evidence came months later, when a graduate student found a nearly identical jaw in the museum's own storage drawers, collected eighty years earlier and never examined. " +
        N(8) + "The two specimens matched closely, supporting Lindqvist's first guess. " +
        N(9) + "Some reporters described the drawer find as a lucky accident, but Lindqvist preferred another word: <strong>overlooked</strong>. " +
        N(10) + "\"Museums are full of answers,\" she said, \"waiting for someone to ask the right question.\"</p>",
      claims: [
        {
          id: "excavate",
          sol: "11.RV.1.A",
          stem: "The word excavate in sentence 1 begins with the prefix ex-, as in exhale and export. The prefix ex- signals movement —",
          choices: [
            { letter: "A", text: "out of or away from" },
            { letter: "B", text: "toward or into" },
            { letter: "C", text: "under or below" },
            { letter: "D", text: "again or back" }
          ],
          correct: "A"
        },
        {
          id: "fragmentary",
          sol: "11.RV.1.A",
          stem: "The word fragmentary in sentence 3 adds the suffix -ary to the noun fragment. The suffix shows that fragmentary describes remains that are —",
          choices: [
            { letter: "A", text: "larger than anyone expected" },
            { letter: "B", text: "newly discovered in the field" },
            { letter: "C", text: "made up of broken pieces" },
            { letter: "D", text: "hidden away in storage" }
          ],
          correct: "C"
        },
        {
          id: "painstaking",
          sol: "11.RV.1.B",
          stem: "Which detail best clarifies the meaning of painstaking as it describes the dig at Hollins Creek?",
          choices: [
            { letter: "A", text: "the curved bone in a slab of limestone" },
            { letter: "B", text: "the scattering of ribs and two vertebrae" },
            { letter: "C", text: "the graduate student in the storage room" },
            { letter: "D", text: "advancing only a few centimeters in a day" }
          ],
          correct: "D"
        },
        {
          id: "provisional",
          sol: "11.RV.1.B",
          stem: "In sentence 4, Lindqvist's warning that the label could change shows that provisional means —",
          choices: [
            { letter: "A", text: "official and final" },
            { letter: "B", text: "temporary until confirmed" },
            { letter: "C", text: "supplied by reporters" },
            { letter: "D", text: "carefully kept secret" }
          ],
          correct: "B"
        },
        {
          id: "corroborate",
          sol: "11.RV.1.C",
          stem: "In sentence 6, the word corroborate, as Lindqvist uses it, most nearly means —",
          choices: [
            { letter: "A", text: "argue openly against" },
            { letter: "B", text: "replace completely" },
            { letter: "C", text: "confirm with support" },
            { letter: "D", text: "announce to the public" }
          ],
          correct: "C"
        },
        {
          id: "overlooked",
          sol: "11.RV.1.C",
          stem: "Lindqvist prefers overlooked to lucky accident in sentence 9. Compared with lucky accident, overlooked suggests that the old jaw —",
          choices: [
            { letter: "A", text: "was available all along but had been neglected" },
            { letter: "B", text: "was found through pure chance by a student" },
            { letter: "C", text: "was badly damaged while sitting in storage" },
            { letter: "D", text: "was never of any real importance to science" }
          ],
          correct: "A"
        }
      ]
    },

    /* 19 · PAIRED TEXTS · kayaking */
    {
      id: "g11-dsr-c91-first-kayak",
      family: "G11",
      title: "Sit On or Sit In?",
      kind: "Paired texts · 11.DSR",
      blurb: "A rental shop's guide and a paddling coach disagree about the best first kayak.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From a rental shop's guide, \"Choosing Your First Kayak\"</strong></p>" +
        "<p>" + N(1) + "For most beginners, a sit-on-top kayak is the safest place to start. " +
        N(2) + "Because the paddler sits in a molded seat on the deck rather than inside a closed hull, there is nothing to get trapped in if the boat flips. " +
        N(3) + "A capsized paddler can simply roll the kayak upright and climb back aboard from the water. " +
        N(4) + "Sit-on-tops are also wide and stable, so they rarely tip over on calm lakes. " +
        N(5) + "Their main drawback is comfort: the paddler is exposed to splashes and wind, which can make a cool spring day feel cold. " +
        N(6) + "Still, for a summer afternoon on a pond, a sit-on-top lets new paddlers focus on enjoying the water instead of worrying about falling in.</p>" +
        "<p><strong>Text 2 — From a paddling coach's column</strong></p>" +
        "<p>" + N(7) + "Every season, new students at my paddling school tell me they want a boat that will never tip over. " +
        N(8) + "I understand the wish, but I gently disagree. " +
        N(9) + "A sit-inside kayak, with its narrower hull and enclosed cockpit, responds to every shift of the paddler's hips. " +
        N(10) + "That sensitivity feels shaky at first, yet it is exactly what teaches balance and control. " +
        N(11) + "Paddlers who learn in sit-inside boats are better prepared for wind, waves, and the moving water of rivers. " +
        N(12) + "They also stay drier and warmer, which matters in early spring. " +
        N(13) + "Yes, they must practice getting out after a capsize, but that skill can be learned in an hour in a pool, and it lasts a lifetime.</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          stem: "Which idea do both texts about choosing a first kayak share?",
          choices: [
            { letter: "A", text: "Sit-inside kayaks are best for small ponds." },
            { letter: "B", text: "Coaches should choose boats for their students." },
            { letter: "C", text: "Beginners often worry about tipping over." },
            { letter: "D", text: "Comfort does not matter much in a kayak." }
          ],
          correct: "C"
        },
        {
          id: "focus",
          sol: "11.DSR.D",
          stem: "How do the rental shop's guide and the coach's column differ in their main focus?",
          choices: [
            { letter: "A", text: "Text 1 is about rivers, while Text 2 is about calm ponds." },
            { letter: "B", text: "Text 1 values ease for beginners; Text 2 values lasting skill." },
            { letter: "C", text: "Text 1 sells kayaks, while Text 2 sells swimming lessons." },
            { letter: "D", text: "Text 1 criticizes coaches, while Text 2 praises shops." }
          ],
          correct: "B"
        },
        {
          id: "agree",
          sol: "11.DSR.D",
          stem: "On which point would the writers of both kayak texts most likely agree?",
          choices: [
            { letter: "A", text: "Sit-inside kayaks never tip over in rough water." },
            { letter: "B", text: "Beginners should avoid paddling on lakes entirely." },
            { letter: "C", text: "Getting out after a capsize takes years to learn." },
            { letter: "D", text: "A sit-on-top leaves the paddler more exposed to cold." }
          ],
          correct: "D"
        },
        {
          id: "respond",
          sol: "11.DSR.E",
          stem: "Select TWO sentences from Text 2 that respond most directly to the claim in Text 1 that sit-on-tops are best because they rarely tip over.",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "gently",
          sol: "11.DSR.E",
          stem: "Compared with the rental shop's guide, the coach's phrase \"I gently disagree\" in sentence 8 gives Text 2 a tone that is —",
          choices: [
            { letter: "A", text: "respectful but firm" },
            { letter: "B", text: "mocking and harsh" },
            { letter: "C", text: "uncertain and apologetic" },
            { letter: "D", text: "cheerful and silly" }
          ],
          correct: "A"
        },
        {
          id: "spring",
          sol: "11.DSR.E",
          stem: "A beginner who read both texts and is planning a chilly early-spring trip on a windy lake could best conclude that —",
          choices: [
            { letter: "A", text: "a sit-on-top kayak will keep the paddler driest" },
            { letter: "B", text: "neither text offers any advice about weather" },
            { letter: "C", text: "a sit-inside kayak may be worth the extra practice" },
            { letter: "D", text: "both writers advise against paddling in spring" }
          ],
          correct: "C"
        }
      ]
    },

    /* 20 · LITERARY · botanical garden */
    {
      id: "g11-rl-c91-pruning",
      family: "G11",
      title: "Down to Three Buds",
      kind: "Literary · 11.RL",
      blurb: "Jae-won watched the climbing rose bloom all summer. Now he is supposed to cut it back.",
      level: 3,
      passage:
        "<p>" + N(1) + "The shears felt heavier than they looked. " +
        N(2) + "Jae-won stood before the climbing rose on the garden's east wall, a tangle of canes he had watched bloom all summer, and could not make himself cut. " +
        N(3) + "\"Down to three buds,\" Mrs. Oduya had told him that morning, holding up three fingers as if the number settled everything. " +
        N(4) + "He remembered June, when the same rose had covered the wall in apricot-colored flowers and visitors had stopped to photograph it, and when he had felt, absurdly, that the applause was partly his. " +
        N(5) + "Now the leaves were spotted and the canes crossed one another like arguing hands. " +
        N(6) + "Still, cutting them seemed like punishing the plant for having been beautiful.</p>" +
        "<p>" + N(7) + "He made the first cut too high, then the second, leaving long stubs. " +
        N(8) + "Mrs. Oduya came down the path, looked, and said nothing for a while. " +
        N(9) + "Then she took the shears, chose a thick old cane near the base, and removed it in one clean motion. " +
        N(10) + "\"You are not taking away the rose,\" she said. " +
        N(11) + "\"You are taking away what is in its way.\" " +
        N(12) + "She handed the shears back.</p>" +
        "<p>" + N(13) + "Jae-won looked at the opened space at the center of the plant, where light now fell onto the bare soil, and found that he could see where next year's stems would go. " +
        N(14) + "He cut the next cane low, and the next, and the pile at his feet grew until the wall behind the rose showed through, plain and patient, waiting.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme of the story about Jae-won and the climbing rose?",
          choices: [
            { letter: "A", text: "Beautiful plants should be left alone to grow freely." },
            { letter: "B", text: "Letting go of past success can make room for growth." },
            { letter: "C", text: "Young workers should never question their supervisors." },
            { letter: "D", text: "Visitors care more about photos than about gardens." }
          ],
          correct: "B"
        },
        {
          id: "punishing",
          sol: "11.RL.1.C",
          stem: "Sentence 6, in which cutting the canes seems like punishing the plant, reveals that Jae-won —",
          choices: [
            { letter: "A", text: "is lazy and wants to avoid hard work" },
            { letter: "B", text: "does not know how to hold the shears" },
            { letter: "C", text: "believes the rose is already dead" },
            { letter: "D", text: "feels attached to the rose's past beauty" }
          ],
          correct: "D"
        },
        {
          id: "hands",
          sol: "11.RL.2.A",
          stem: "In sentence 5, comparing the crossed canes to arguing hands suggests that the canes are —",
          choices: [
            { letter: "A", text: "crowded and working against each other" },
            { letter: "B", text: "reaching out to greet the visitors" },
            { letter: "C", text: "strong and neatly organized" },
            { letter: "D", text: "frozen still by the cold weather" }
          ],
          correct: "A"
        },
        {
          id: "absurdly",
          sol: "11.RL.2.B",
          stem: "In sentence 4, the word absurdly, describing Jae-won's sense that the applause was partly his, creates a tone that is —",
          choices: [
            { letter: "A", text: "harshly critical" },
            { letter: "B", text: "deeply bitter" },
            { letter: "C", text: "gently self-mocking" },
            { letter: "D", text: "openly proud" }
          ],
          correct: "C"
        },
        {
          id: "inway",
          sol: "11.RL.2.C",
          stem: "In sentence 11, Mrs. Oduya's phrase what is in its way most nearly refers to —",
          choices: [
            { letter: "A", text: "old growth that blocks next year's stems" },
            { letter: "B", text: "visitors who crowd the garden path" },
            { letter: "C", text: "the plain wall behind the climbing rose" },
            { letter: "D", text: "the spotted leaves lying on the soil" }
          ],
          correct: "A"
        },
        {
          id: "june",
          sol: "11.RL.3.A",
          stem: "The author includes Jae-won's memory of June in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "show that the story spans many years" },
            { letter: "B", text: "set up a conflict with the visitors" },
            { letter: "C", text: "describe how Mrs. Oduya trained him" },
            { letter: "D", text: "explain why he is reluctant to prune" }
          ],
          correct: "D"
        }
      ]
    },

    /* 21 · INFORMATIONAL · fossils */
    {
      id: "g11-ri-c91-cliff-calendar",
      family: "G11",
      title: "A Cliff Into a Calendar",
      kind: "Informational · 11.RI",
      blurb: "Rock layers say which fossil came first. Volcanic ash says how long ago.",
      level: 1,
      passage:
        "<p>" + N(1) + "When a fossil hunter finds a shell in a cliff face, one of the first questions is how old it is. " +
        N(2) + "Scientists answer that question in two main ways.</p>" +
        "<p>" + N(3) + "The first, called relative dating, depends on the layers of rock themselves. " +
        N(4) + "Sediments such as sand and mud settle in flat layers, one on top of another, so in undisturbed rock the lowest layers are usually the oldest. " +
        N(5) + "A fossil found near the bottom of a cliff is therefore likely older than one found near the top. " +
        N(6) + "Relative dating can tell scientists which fossil came first, but it cannot give an age in years.</p>" +
        "<p>" + N(7) + "For that, they turn to the second method, which uses volcanic ash. " +
        N(8) + "Ash from ancient eruptions sometimes settles between sedimentary layers, and it contains tiny crystals that change at a steady, measurable rate over time. " +
        N(9) + "By measuring those crystals, scientists can calculate when the ash fell. " +
        N(10) + "If a fossil lies between two ash layers dated at 70 million and 72 million years, the fossil's age must fall somewhere in between.</p>" +
        "<p>" + N(11) + "Neither method works perfectly alone, because layers can be folded by earthquakes and ash is not found everywhere. " +
        N(12) + "Used together, however, they let scientists turn a cliff into a calendar.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "Which sentence best states the main idea of the passage about dating fossils in a cliff?",
          choices: [
            { letter: "A", text: "Volcanic eruptions destroyed most ancient fossils." },
            { letter: "B", text: "Scientists combine rock layers and ash to date fossils." },
            { letter: "C", text: "Fossils near the top of a cliff are always older." },
            { letter: "D", text: "Earthquakes make it impossible to date any fossil." }
          ],
          correct: "B"
        },
        {
          id: "between",
          sol: "11.RI.1.B",
          stem: "According to sentence 10, what can scientists conclude about a fossil lying between two dated ash layers?",
          choices: [
            { letter: "A", text: "It is older than both layers of ash." },
            { letter: "B", text: "It was buried during a volcanic eruption." },
            { letter: "C", text: "It is exactly 71 million years old." },
            { letter: "D", text: "Its age falls between the two layers' ages." }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.1.C",
          stem: "The intended audience for \"A Cliff Into a Calendar\" is most likely —",
          choices: [
            { letter: "A", text: "general readers curious about fossil ages" },
            { letter: "B", text: "expert geologists reviewing lab methods" },
            { letter: "C", text: "museum guards learning safety rules" },
            { letter: "D", text: "students applying for a digging permit" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "The author organizes \"A Cliff Into a Calendar\" mainly by —",
          choices: [
            { letter: "A", text: "telling the story of one fossil discovery" },
            { letter: "B", text: "listing famous fossils from oldest to newest" },
            { letter: "C", text: "explaining two methods and how they combine" },
            { letter: "D", text: "arguing against the use of one dating method" }
          ],
          correct: "C"
        },
        {
          id: "calendar",
          sol: "11.RI.2.B",
          stem: "In sentence 12, the phrase turn a cliff into a calendar mainly means that scientists can —",
          choices: [
            { letter: "A", text: "carve dates into the side of a cliff" },
            { letter: "B", text: "predict when the next eruption will occur" },
            { letter: "C", text: "read the rock layers as a record of time" },
            { letter: "D", text: "use cliffs to keep track of the seasons" }
          ],
          correct: "C"
        },
        {
          id: "limits",
          sol: "11.RI.2.C",
          stem: "The author includes sentence 11, about folded layers and missing ash, mainly to —",
          choices: [
            { letter: "A", text: "point out the limits of each method alone" },
            { letter: "B", text: "argue that fossils cannot be dated at all" },
            { letter: "C", text: "describe how earthquakes form new cliffs" },
            { letter: "D", text: "introduce a third method of dating fossils" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
