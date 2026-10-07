/* SOL Labyrinth — Grade 11 epic packs (expansion file 112, nights 95–100).
 * Twelve EPIC packs (540–650 words; paired texts 280–330 words each) built around a marching band,
 * a botanical garden, kayaking and a puzzle hunt: literary, drama, informational, functional,
 * argument, vocabulary and paired texts. Original Virginia EOC Reading-style content for the
 * G11 family; no published text, no real people. Loaded after content.js; pushes into the
 * live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── 1 · LITERARY · marching band ───────────────────────── */
    {
      id: "g11-rl-c112-eighttofive",
      family: "G11",
      title: "Eight to Five",
      kind: "Literary · 11.RL",
      blurb: "A freshman mellophone player keeps missing her mark until a senior brings a box of chalk to the parking lot.",
      level: 1,
      passage:
        "<p>" + N(1) + "The yard lines at Ridgeview High seemed to move whenever Esperanza Villanueva looked away from them, because she had been missing her marks by half a step since the first week of band camp. " +
        N(2) + "In marching band, every musician takes eight steps to cover five yards, a rule the veterans called \"eight to five\" as casually as they said hello. " +
        N(3) + "Esperanza played mellophone, a bright brass horn that points straight at the audience, which meant that when she was wrong, the whole stadium could see it. " +
        N(4) + "During rehearsals, Mr. Halvorsen would stop the band, climb down from his tall ladder, and walk to the spot where she should have been standing. " +
        N(5) + "\"Here,\" he would say, tapping the turf with his toe, \"not there.\" " +
        N(6) + "Then he would climb back up without another word, which was somehow worse than shouting.</p>" +
        "<p>" + N(7) + "Her section leader, a senior named Dev Raghunathan, did not tell her to relax, which she appreciated, because everyone else did. " +
        N(8) + "Instead, he brought a box of sidewalk chalk to the student parking lot on a Saturday morning and drew two lines exactly five yards apart. " +
        N(9) + "\"Eight steps,\" he said. " +
        N(10) + "\"Do it until your feet stop asking your brain for permission.\" " +
        N(11) + "Esperanza walked between the chalk lines for two hours while Dev sat on the hood of his car eating sunflower seeds and calling out the counts. " +
        N(12) + "By noon she could land on the second line with her eyes closed, though she felt foolish doing it in front of the custodian, who had stopped mowing to watch. " +
        N(13) + "That week she came back every morning before school, even when it drizzled and the chalk ran into pale blue puddles.</p>" +
        "<p>" + N(14) + "The first home game arrived under a sky the color of wet cement. " +
        N(15) + "By halftime the field was slick, and the drum major's whistle sounded thin in the damp air. " +
        N(16) + "The band stepped off, and for the first thirty counts Esperanza felt the music carrying her the way a current carries a leaf. " +
        N(17) + "Then, during the turn into the company front, the long line where all ninety players face the crowd at once, her flip folder snapped off its clip and skidded into the grass. " +
        N(18) + "She did not stop to look for it. " +
        N(19) + "She did not need it, she realized; the notes were already in her fingers, and the steps were already in her feet. " +
        N(20) + "Eight steps, five yards: the chalk lines appeared in her mind like a map she had drawn herself.</p>" +
        "<p>" + N(21) + "When the band halted, the line was so straight that a parent in the stands later said it looked as if someone had pulled a thread tight across the field. " +
        N(22) + "Esperanza was standing exactly on the forty-yard line, her horn raised, her music somewhere behind her in the mud. " +
        N(23) + "After the show, Mr. Halvorsen found her by the equipment truck. " +
        N(24) + "He held up the flip folder, now soaked and smeared with grass. " +
        N(25) + "\"Lose something?\" he asked. " +
        N(26) + "She braced herself for a lecture about securing her equipment. " +
        N(27) + "Instead he tapped the folder against his palm and said, \"You didn't need it, though.\" " +
        N(28) + "Then he walked away, and Esperanza understood that this, from Mr. Halvorsen, was the same as a standing ovation.</p>" +
        "<p>" + N(29) + "On Monday, she found a new piece of chalk in her locker with a sticky note attached. " +
        N(30) + "It said only \"For the freshmen next year,\" in Dev's slanted handwriting. " +
        N(31) + "Esperanza put the chalk in the pocket of her band jacket and kept it there all season, a small blue reminder that someone had once taken the time to draw her a line." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best supported by what happens to Esperanza at the first home game?",
          choices: [
            { letter: "A", text: "Talent matters more than practice when a performance goes wrong." },
            { letter: "B", text: "Patient practice prepares a person to stay steady when plans fail." },
            { letter: "C", text: "A strict teacher is usually the most helpful teacher in the end." },
            { letter: "D", text: "Bad weather reveals which performers truly love what they do." }
          ],
          correct: "B"
        },
        {
          id: "custodian",
          sol: "11.RL.1.B",
          stem: "The detail in sentence 12 about the custodian who stopped mowing to watch mainly serves to show that Esperanza —",
          choices: [
            { letter: "A", text: "keeps practicing even though she feels embarrassed" },
            { letter: "B", text: "hopes an adult will report her progress to Mr. Halvorsen" },
            { letter: "C", text: "is distracted easily by people around the parking lot" },
            { letter: "D", text: "would rather practice alone than with Dev beside her" }
          ],
          correct: "A"
        },
        {
          id: "dev",
          sol: "11.RL.1.C",
          stem: "Dev's way of helping Esperanza in sentences 7–11 shows that he —",
          choices: [
            { letter: "A", text: "wants to become the band's next drum major" },
            { letter: "B", text: "thinks Esperanza should switch to an easier instrument" },
            { letter: "C", text: "prefers practical help to words of comfort" },
            { letter: "D", text: "is following orders given to him by Mr. Halvorsen" }
          ],
          correct: "C"
        },
        {
          id: "leaf",
          sol: "11.RL.2.A",
          stem: "In sentence 16, comparing the music to a current that carries a leaf suggests that Esperanza at first feels —",
          choices: [
            { letter: "A", text: "frightened that the band is moving too fast for her" },
            { letter: "B", text: "lost because she cannot hear the drum major's whistle" },
            { letter: "C", text: "bored by a show she has rehearsed too many times" },
            { letter: "D", text: "moved along smoothly without having to force anything" }
          ],
          correct: "D"
        },
        {
          id: "ovation",
          sol: "11.RL.2.B",
          stem: "In sentence 28, the narrator calls Mr. Halvorsen's brief comment the same as a standing ovation mainly to convey that —",
          choices: [
            { letter: "A", text: "the crowd cheered loudly for the band's straight line" },
            { letter: "B", text: "his rare, short praise carries unusual weight" },
            { letter: "C", text: "Esperanza is disappointed that he said so little" },
            { letter: "D", text: "he plans to praise her in front of the whole band" }
          ],
          correct: "B"
        },
        {
          id: "casually",
          sol: "11.RL.2.C",
          stem: "In sentence 2, the word casually suggests that the veteran band members —",
          choices: [
            { letter: "A", text: "know the rule so well that they no longer think about it" },
            { letter: "B", text: "do not take the halftime show very seriously" },
            { letter: "C", text: "are trying to make the freshmen feel unwelcome" },
            { letter: "D", text: "forget the rule as soon as they leave rehearsal" }
          ],
          correct: "A"
        },
        {
          id: "chalk",
          sol: "11.RL.3.A",
          stem: "The story ends with the chalk and the sticky note in sentences 29–31 mainly to —",
          choices: [
            { letter: "A", text: "reveal that Dev is leaving the band before the season ends" },
            { letter: "B", text: "explain why Esperanza lost her flip folder during the show" },
            { letter: "C", text: "suggest that Esperanza will someday pass on the help she received" },
            { letter: "D", text: "show that Mr. Halvorsen has finally forgiven Esperanza's mistakes" }
          ],
          correct: "C"
        },
        {
          id: "braced",
          sol: "11.RV.1.C",
          stem: "In sentence 26, the word braced most nearly means —",
          choices: [
            { letter: "A", text: "apologized" },
            { letter: "B", text: "hurried away" },
            { letter: "C", text: "argued quietly" },
            { letter: "D", text: "prepared herself" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 2 · LITERARY · botanical garden ───────────────────────── */
    {
      id: "g11-rl-c112-titanarum",
      family: "G11",
      title: "Twenty-One Mornings",
      kind: "Literary · 11.RL",
      blurb: "A botanical garden volunteer is stuck measuring a plant that looks like a closed umbrella, until the numbers change.",
      level: 2,
      passage:
        "<p>" + N(1) + "Hana Morimoto had imagined that volunteering at the Corwin Botanical Garden would involve orchids, or at least something that bloomed while she was looking at it. " +
        N(2) + "Instead, on her first Saturday, the head horticulturist handed her a tape measure, a clipboard, and a step stool. " +
        N(3) + "\"Every morning at nine, you measure the titan arum and write down the number,\" said Dr. Achterberg, as though she were handing over the keys to a kingdom. " +
        N(4) + "The titan arum stood in a corner of the tropical house, a single green spike rising out of a pot the size of a bathtub. " +
        N(5) + "It did not look like a flower. " +
        N(6) + "It looked like an enormous closed umbrella that someone had forgotten to take home. " +
        N(7) + "A small sign explained that the plant might go years without blooming, and that when it finally did, the bloom would last only a day or two and smell powerfully of rotting meat.</p>" +
        "<p>" + N(8) + "For three weeks, Hana measured. " +
        N(9) + "The spike grew two inches, then four, then six in a single day, and she recorded each number in neat columns while visitors drifted past toward the butterfly room. " +
        N(10) + "Her friends texted her pictures from the lake, and she texted back photographs of a tape measure pressed against a green stalk. " +
        N(11) + "\"Riveting,\" her best friend Nadia replied, and Hana could not honestly argue. " +
        N(12) + "Sometimes she wondered whether Dr. Achterberg even read the clipboard, which hung on a nail by the door and seemed to gather more dust than attention.</p>" +
        "<p>" + N(13) + "Then, on a Thursday in late July, the number did something strange. " +
        N(14) + "After weeks of steady climbing, the spike grew less than half an inch. " +
        N(15) + "Hana measured it three times, certain she had made a mistake, and then she noticed that the frilled sheath wrapped around the base of the spike—the spathe, the sign called it—had loosened slightly, like a collar unbuttoned at the end of a long day. " +
        N(16) + "She flipped back through her columns. " +
        N(17) + "She did not know much about titan arums, but she knew what it looked like when something that had been rushing suddenly slowed down, because her little brother did it every night right before he fell asleep. " +
        N(18) + "She knocked on the door of Dr. Achterberg's office, holding out the clipboard like evidence.</p>" +
        "<p>" + N(19) + "Dr. Achterberg ran a finger down the columns and then looked up with an expression Hana had not seen on her before. " +
        N(20) + "\"When growth stalls like this, the bloom usually opens within forty-eight hours,\" she said. " +
        N(21) + "\"You're the reason we'll have the doors open tonight.\" " +
        N(22) + "By evening the garden had called the local news station, set up velvet ropes, and extended its hours until midnight. " +
        N(23) + "The spathe peeled back into a deep ruffled cup the color of red wine, and the smell rolled across the tropical house so heavily that some visitors laughed and others fled.</p>" +
        "<p>" + N(24) + "Hana stayed until the last guest left. " +
        N(25) + "Standing beside the plant, she held her breath against the odor and watched strangers photograph something she had measured for twenty-one mornings in a row. " +
        N(26) + "None of them knew about the columns on the clipboard, and she found that she did not mind. " +
        N(27) + "Before she went home, she turned to a clean page, wrote the date at the top, and recorded one more number. " +
        N(28) + "The bloom would collapse by the weekend, but the plant would begin storing energy again, and someday, years from now, someone would have to be there each morning to notice when it was ready." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme developed through Hana's work with the titan arum?",
          choices: [
            { letter: "A", text: "Volunteers rarely receive credit for the work they do." },
            { letter: "B", text: "Rare natural events are worth any amount of discomfort." },
            { letter: "C", text: "Steady attention to dull tasks can reveal what others miss." },
            { letter: "D", text: "Experts should explain their reasons before assigning work." }
          ],
          correct: "C"
        },
        {
          id: "dust",
          sol: "11.RL.1.B",
          stem: "The description in sentence 12 of the clipboard gathering more dust than attention mainly serves to —",
          choices: [
            { letter: "A", text: "show Hana's doubt that her work matters, which sets up the later surprise" },
            { letter: "B", text: "suggest that Dr. Achterberg is careless about the garden's records" },
            { letter: "C", text: "explain why Hana decides to quit volunteering after the bloom" },
            { letter: "D", text: "reveal that the tropical house is poorly cleaned by the staff" }
          ],
          correct: "A"
        },
        {
          id: "three",
          sol: "11.RL.1.C",
          stem: "Hana's decision to measure the spike three times in sentence 15 reveals that she —",
          choices: [
            { letter: "A", text: "hopes to impress the visitors walking past the plant" },
            { letter: "B", text: "is careful and checks an odd result before trusting it" },
            { letter: "C", text: "has stopped caring whether her numbers are correct" },
            { letter: "D", text: "wants to prove that Dr. Achterberg made an error" }
          ],
          correct: "B"
        },
        {
          id: "umbrella",
          sol: "11.RL.2.A",
          stem: "In sentence 6, comparing the titan arum to a forgotten umbrella emphasizes —",
          choices: [
            { letter: "A", text: "how quickly the plant has been growing each day" },
            { letter: "B", text: "how carefully the garden staff protect the plant" },
            { letter: "C", text: "how dangerous the plant's smell will soon become" },
            { letter: "D", text: "how plain and unflowerlike the plant first appears" }
          ],
          correct: "D"
        },
        {
          id: "riveting",
          sol: "11.RL.2.B",
          stem: "Nadia's one-word reply in sentence 11 creates a tone that is —",
          choices: [
            { letter: "A", text: "openly envious" },
            { letter: "B", text: "deeply worried" },
            { letter: "C", text: "gently sarcastic" },
            { letter: "D", text: "sincerely curious" }
          ],
          correct: "C"
        },
        {
          id: "fled",
          sol: "11.RL.2.C",
          stem: "In sentence 23, the word fled suggests that some visitors —",
          choices: [
            { letter: "A", text: "left quickly to escape the powerful smell" },
            { letter: "B", text: "were asked by the staff to leave the building" },
            { letter: "C", text: "ran toward the plant to take photographs" },
            { letter: "D", text: "argued about whether the bloom was worth seeing" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "11.RL.3.A",
          stem: "The final paragraph contributes to the structure of the story mainly by —",
          choices: [
            { letter: "A", text: "revealing that Hana will be put in charge of the tropical house" },
            { letter: "B", text: "returning to the daily routine and suggesting the cycle will continue" },
            { letter: "C", text: "introducing a new conflict between Hana and the garden's visitors" },
            { letter: "D", text: "flashing back to Hana's first Saturday at the botanical garden" }
          ],
          correct: "B"
        },
        {
          id: "spathe",
          sol: "11.RV.1.B",
          stem: "In sentence 15, the words set off by dashes help the reader understand that the spathe is —",
          choices: [
            { letter: "A", text: "the sign that explains the plant to visitors" },
            { letter: "B", text: "the green spike that Hana measures each day" },
            { letter: "C", text: "the tape measure Hana uses on the stalk" },
            { letter: "D", text: "the frilled sheath around the base of the spike" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 3 · LITERARY · kayaking ───────────────────────── */
    {
      id: "g11-rl-c112-slacktide",
      family: "G11",
      title: "The Whole Tide Chart",
      kind: "Literary · 11.RL",
      blurb: "Fog swallows Hadley Bay, and a quiet cousin has to decide whether to trust the tide chart in her pocket.",
      level: 3,
      passage:
        "<p>" + N(1) + "My cousin Teo has always been the kind of person who reads the first page of the instructions and then throws them away. " +
        N(2) + "He says this with pride, as if impatience were a skill he practiced, and for most of my life I have been the one who quietly fishes the instructions out of the trash. " +
        N(3) + "So when he proposed that we paddle across Hadley Bay to the lighthouse island on the last morning of our family's vacation, I was the one who checked the tide chart. " +
        N(4) + "High tide would come at 9:40, and after that the water would begin draining out of the bay through the narrow channel on the eastern side, pulling hard toward the open sea. " +
        N(5) + "\"We'll be back long before that matters,\" Teo said, already dragging his kayak down the gravel.</p>" +
        "<p>" + N(6) + "The crossing out was beautiful. " +
        N(7) + "The water lay flat and silver, and our paddles dipped and rose in a rhythm so even that it felt less like work than like breathing. " +
        N(8) + "A seal surfaced near my bow, regarded me with wet, unbothered eyes, and sank again without a ripple. " +
        N(9) + "On the island we ate oranges on the rocks while Teo told me, at length, how he planned to kayak the whole coast of Maine someday. " +
        N(10) + "I nodded and watched a gray line thicken on the horizon behind him.</p>" +
        "<p>" + N(11) + "By the time we pushed off for home, the fog had arrived, not rolling in the way it does in movies but simply appearing, as if the air had decided to become something else. " +
        N(12) + "Within minutes the mainland was gone. " +
        N(13) + "Then the island was gone. " +
        N(14) + "There was only gray above us, gray below us, and the sound of our own paddles, which suddenly seemed too loud. " +
        N(15) + "Teo pointed confidently to our left and said, \"Shore's that way.\" " +
        N(16) + "I looked at the small compass clipped to my deck, then at my watch, which read 10:25. " +
        N(17) + "The tide had turned forty-five minutes earlier, and I could feel it now in the way my kayak kept drifting sideways, as though an invisible hand were nudging the stern toward the channel.</p>" +
        "<p>" + N(18) + "\"It's not,\" I said. " +
        N(19) + "My voice came out smaller than I wanted, so I said it again. " +
        N(20) + "\"Teo, the current's pushing us east, and if we go left we'll end up in the channel.\" " +
        N(21) + "He turned and stared at me through the fog, and for a long moment I thought he would laugh. " +
        N(22) + "Instead, somewhere ahead and to the right, a bell buoy clanged, low and patient, exactly where the chart in my pocket said it should be. " +
        N(23) + "Teo listened. " +
        N(24) + "Then, without a word, he turned his bow to follow mine.</p>" +
        "<p>" + N(25) + "We paddled toward the bell, angling against the drift, and I counted strokes out loud because it gave us both something to hold on to. " +
        N(26) + "After four hundred and twelve strokes, the dark shape of the boathouse rose out of the fog like a ship coming to meet us. " +
        N(27) + "Teo hauled his kayak up the gravel and sat down hard beside it. " +
        N(28) + "\"You read the whole tide chart,\" he said finally, and it was not quite a question. " +
        N(29) + "\"I read the whole tide chart,\" I agreed. " +
        N(30) + "For a while we just sat there, listening to the bell buoy, which sounded much less patient from dry land. " +
        N(31) + "Then he nodded slowly and did something I had never once seen him do: he asked me to show him how." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the cousins' trip across Hadley Bay most clearly develop?",
          choices: [
            { letter: "A", text: "Quiet preparation can matter more than loud confidence." },
            { letter: "B", text: "Family vacations are best spent trying new adventures." },
            { letter: "C", text: "The ocean punishes anyone who dares to explore it." },
            { letter: "D", text: "Younger relatives should always follow older ones." }
          ],
          correct: "A"
        },
        {
          id: "horizon",
          sol: "11.RL.1.B",
          stem: "Sentence 10 hints at the coming conflict by —",
          choices: [
            { letter: "A", text: "showing that the narrator is bored by her cousin's stories" },
            { letter: "B", text: "contrasting Teo's big plans with a warning only the narrator notices" },
            { letter: "C", text: "revealing that the narrator has forgotten to bring her compass" },
            { letter: "D", text: "suggesting that the island is farther from shore than expected" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          stem: "Which statement best describes how Teo changes over the course of the story?",
          choices: [
            { letter: "A", text: "He moves from enjoying kayaking to fearing the water." },
            { letter: "B", text: "He moves from trusting his cousin to doubting her." },
            { letter: "C", text: "He moves from planning carefully to acting on impulse." },
            { letter: "D", text: "He moves from dismissing preparation to wanting to learn it." }
          ],
          correct: "D"
        },
        {
          id: "hand",
          sol: "11.RL.2.A",
          stem: "In sentence 17, the image of an invisible hand nudging the stern mainly conveys —",
          choices: [
            { letter: "A", text: "the steady, unseen pull of the outgoing tide" },
            { letter: "B", text: "the narrator's fear that someone is following them" },
            { letter: "C", text: "the wind blowing the fog across the bay" },
            { letter: "D", text: "Teo paddling close behind the narrator's kayak" }
          ],
          correct: "A"
        },
        {
          id: "fog",
          sol: "11.RL.2.B",
          stem: "In sentence 11, describing the fog as appearing as if the air had decided to become something else creates a mood that is —",
          choices: [
            { letter: "A", text: "cheerful and relaxed" },
            { letter: "B", text: "angry and violent" },
            { letter: "C", text: "eerie and unsettling" },
            { letter: "D", text: "sad and nostalgic" }
          ],
          correct: "C"
        },
        {
          id: "question",
          sol: "11.RL.2.C",
          stem: "In sentence 28, the narrator notes that Teo's words were not quite a question to suggest that he —",
          choices: [
            { letter: "A", text: "is accusing her of showing off in front of the family" },
            { letter: "B", text: "already knows the answer and is admitting she was right" },
            { letter: "C", text: "is too tired from paddling to speak in full sentences" },
            { letter: "D", text: "does not believe that anyone could read a whole chart" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "11.RL.3.A",
          stem: "The story is narrated by Teo's cousin in the first person. This choice mainly allows the reader to —",
          choices: [
            { letter: "A", text: "understand why Teo throws away instructions" },
            { letter: "B", text: "learn how other family members reacted to the trip" },
            { letter: "C", text: "follow her hesitation and growing certainty from inside" },
            { letter: "D", text: "see the fog from the viewpoint of people on shore" }
          ],
          correct: "C"
        },
        {
          id: "unbothered",
          sol: "11.RV.1.A",
          stem: "The word unbothered in sentence 8 begins with the prefix un-, as do unknown and unfinished. In all three words, the prefix un- signals —",
          choices: [
            { letter: "A", text: "again" },
            { letter: "B", text: "before" },
            { letter: "C", text: "too much" },
            { letter: "D", text: "not" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 4 · DRAMA · puzzle hunt ───────────────────────── */
    {
      id: "g11-rl-c112-lastenvelope",
      family: "G11",
      title: "The Last Envelope",
      kind: "Drama · 11.RL",
      blurb: "Twenty-two minutes before a puzzle hunt deadline, a team captain finally hears the one teammate who has been quiet all night.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A cramped study room in the Bellweather College library, 11:38 p.m. Index cards, empty juice boxes, and a whiteboard covered in crossed-out words fill every surface, and a timer on a laptop counts down toward midnight. Outside the window, the dark dome of the campus observatory is just visible above the trees.</em></p>" +
        "<p><strong>AMARA:</strong> " + N(2) + "Twenty-two minutes left, and we have eleven answers, one final puzzle, and absolutely no idea what it wants from us.</p>" +
        "<p><strong>LUCAS:</strong> " + N(3) + "I have an idea. " + N(4) + "It's called sleep, and I hear it's very popular.</p>" +
        "<p><strong>AMARA:</strong> " + N(5) + "Lucas, if you're not going to help, at least be quiet while you're not helping.</p>" +
        "<p><em>" + N(6) + "WEI LING sits apart from the others at the end of the table, turning a sealed envelope over and over in her hands. She has not spoken in several minutes, and no one seems to have noticed.</em></p>" +
        "<p><strong>BEN:</strong> " + N(7) + "What if the eleven answers have to go in some kind of order, like alphabetical? " + N(8) + "I know that's probably dumb.</p>" +
        "<p><strong>AMARA:</strong> <em>(waving a hand dismissively)</em> " + N(9) + "We tried alphabetical an hour ago, Ben, while you were getting pretzels. " + N(10) + "It spelled ABEOORRSTVY, which is not a word in any language I know.</p>" +
        "<p><strong>LUCAS:</strong> " + N(11) + "In my defense, it sounds like a very small country.</p>" +
        "<p><strong>WEI LING:</strong> " + N(12) + "This envelope has stamps on it.</p>" +
        "<p><strong>AMARA:</strong> " + N(13) + "Every envelope has stamps, Wei, because the organizers decorated all of them to look like old mail, and we checked every single one of them hours ago.</p>" +
        "<p><strong>WEI LING:</strong> <em>(holding it up to the lamp)</em> " + N(14) + "But this one is postmarked eleven times, and every postmark has a different date. " + N(15) + "The circles overlap like the rings on a tree stump, one layer for every year it's been growing.</p>" +
        "<p><strong>LUCAS:</strong> <em>(leaning in, suddenly serious)</em> " + N(16) + "Okay, that's actually strange.</p>" +
        "<p><strong>AMARA:</strong> <em>(rubbing her eyes)</em> " + N(17) + "Fine, read me the dates.</p>" +
        "<p><strong>WEI LING:</strong> " + N(18) + "If we put our answers in the same order as the postmarks and take the first letter of each one, then maybe the order Ben wanted is the one hiding on the envelope.</p>" +
        "<p><em>" + N(19) + "She crosses to the whiteboard, erases a corner, and writes eleven letters in a column while the others watch.</em></p>" +
        "<p><strong>BEN:</strong> " + N(20) + "O, B, S, E, R, V, A, T, O, R, Y. " + N(21) + "<em>(quietly)</em> Observatory, so the final answer is observatory.</p>" +
        "<p><em>" + N(22) + "Silence. LUCAS slowly sets down the juice box he has been crushing.</em></p>" +
        "<p><strong>AMARA:</strong> " + N(23) + "Wei, how long have you been looking at that envelope?</p>" +
        "<p><strong>WEI LING:</strong> " + N(24) + "Since about ten-fifteen.</p>" +
        "<p><strong>AMARA:</strong> " + N(25) + "Then why didn't you say anything?</p>" +
        "<p><strong>WEI LING:</strong> <em>(shrugging, not unkindly)</em> " + N(26) + "I did say something, once. " + N(27) + "You were talking.</p>" +
        "<p><em>" + N(28) + "AMARA looks at the whiteboard, crowded edge to edge with her own handwriting, and then at the plain envelope in WEI LING's hand.</em></p>" +
        "<p><strong>AMARA:</strong> <em>(turning the laptop toward WEI LING)</em> " + N(29) + "You submit it.</p>" +
        "<p><strong>WEI LING:</strong> " + N(30) + "You're the captain, though.</p>" +
        "<p><strong>AMARA:</strong> " + N(31) + "Then as captain, I'm telling you to submit it. " + N(32) + "And next year, if I start talking over you again, throw a juice box at me.</p>" +
        "<p><strong>LUCAS:</strong> " + N(33) + "I would like to volunteer for that job.</p>" +
        "<p><em>" + N(34) + "WEI LING types, and the laptop chimes. A green banner reads CORRECT, 11:51 P.M., and everyone stares at it as though it might change its mind.</em></p>" +
        "<p><strong>BEN:</strong> " + N(35) + "Wait, so did we win?</p>" +
        "<p><strong>AMARA:</strong> <em>(looking around the table and smiling for the first time all night)</em> " + N(36) + "Honestly, Ben, I'm not sure that's the part I care about anymore.</p>" +
        "<p><em>" + N(37) + "The lights dim as LUCAS begins, very carefully, to build a pyramid out of empty juice boxes, and WEI LING hands him the first one.</em></p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best supported by the events in the study room?",
          choices: [
            { letter: "A", text: "Winning a contest matters less than having fun with friends." },
            { letter: "B", text: "Strong leaders make room for the quieter voices on their team." },
            { letter: "C", text: "Hard puzzles can only be solved by people who work alone." },
            { letter: "D", text: "Teams work best when one person makes every decision." }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "11.RL.1.B",
          stem: "Ben's suggestion in sentence 7 is important to the plot mainly because it —",
          choices: [
            { letter: "A", text: "proves that Amara's earlier attempt was carried out incorrectly" },
            { letter: "B", text: "causes an argument that wastes most of the team's remaining time" },
            { letter: "C", text: "turns out to be partly right, since the answers do need an order" },
            { letter: "D", text: "shows that Ben has not been paying attention to the puzzle at all" }
          ],
          correct: "C"
        },
        {
          id: "talking",
          sol: "11.RL.1.C",
          stem: "Wei Ling's reply in sentences 26 and 27 reveals that she —",
          choices: [
            { letter: "A", text: "tried to speak earlier and was overlooked, but holds no grudge" },
            { letter: "B", text: "wanted to keep the answer secret so she could take the credit" },
            { letter: "C", text: "was not sure of her idea until Ben read the letters aloud" },
            { letter: "D", text: "is angry with Amara and plans to quit the team next year" }
          ],
          correct: "A"
        },
        {
          id: "rings",
          sol: "11.RL.2.A",
          stem: "In sentence 15, comparing the overlapping postmarks to the rings on a tree stump suggests that the postmarks —",
          choices: [
            { letter: "A", text: "are too faded and old to be read clearly" },
            { letter: "B", text: "were stamped by eleven different organizers" },
            { letter: "C", text: "hide a drawing of the college observatory" },
            { letter: "D", text: "record a sequence built up one layer at a time" }
          ],
          correct: "D"
        },
        {
          id: "sleep",
          sol: "11.RL.2.B",
          stem: "Lucas's remark in sentences 3 and 4 adds a tone that is —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "anxious and fearful" },
            { letter: "C", text: "dry and joking" },
            { letter: "D", text: "formal and polite" }
          ],
          correct: "C"
        },
        {
          id: "unkindly",
          sol: "11.RL.2.C",
          stem: "In the stage direction before sentence 26, the phrase not unkindly indicates that Wei Ling speaks —",
          choices: [
            { letter: "A", text: "loudly enough for the whole library to hear" },
            { letter: "B", text: "without bitterness, even though her words are blunt" },
            { letter: "C", text: "sarcastically, to embarrass Amara in front of the team" },
            { letter: "D", text: "nervously, because she is afraid of being wrong" }
          ],
          correct: "B"
        },
        {
          id: "directions",
          sol: "11.RL.3.A",
          stem: "The stage directions in sentence 6 and sentence 28 work together mainly to —",
          choices: [
            { letter: "A", text: "establish Wei Ling's isolation and then show Amara seeing what she missed" },
            { letter: "B", text: "describe the study room in detail so the set can be built accurately" },
            { letter: "C", text: "show that the deadline has passed while the team was still arguing" },
            { letter: "D", text: "reveal that Amara wrote the puzzle on the envelope herself" }
          ],
          correct: "A"
        },
        {
          id: "dismissively",
          sol: "11.RV.1.C",
          stem: "In the stage direction before sentence 9, the word dismissively most nearly means —",
          choices: [
            { letter: "A", text: "in a cheerful way that encourages Ben" },
            { letter: "B", text: "in a confused way, unsure of the answer" },
            { letter: "C", text: "in a slow way, thinking the idea over" },
            { letter: "D", text: "as if the idea were not worth considering" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 5 · INFORMATIONAL · kayaking ───────────────────────── */
    {
      id: "g11-ri-c112-kayakhistory",
      family: "G11",
      title: "A Boat Built Around a Body",
      kind: "Informational · 11.RI",
      blurb: "How a hunting boat from the Arctic became a weekend rental, and why its oldest design lessons still apply.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every kayak on a rental rack, whether it is bright orange plastic or sleek carbon fiber, comes from a boat designed thousands of years ago by people who could not afford to get it wrong. " +
        N(2) + "Indigenous peoples of the Arctic, including Inuit and Aleut communities, built the first kayaks to hunt seals and other marine animals in some of the coldest water on Earth. " +
        N(3) + "A hunter who tipped over far from shore might survive only minutes, so the boat had to be fast, quiet, and steady enough to paddle in rough seas.</p>" +
        "<p>" + N(4) + "The traditional kayak was a frame of driftwood or bone lashed together with sinew and covered with animal skins, which were sewn tight and waterproofed with oil or fat. " +
        N(5) + "Because wood was scarce in the treeless North, builders used every piece carefully, and a single boat might be repaired and reused for many years. " +
        N(6) + "Many kayaks were made to fit one paddler, with measurements taken from that person's own body: the width of the hips, the length of the arms, the span of a hand. " +
        N(7) + "In this sense, a kayak was less like a vehicle a person climbed into and more like a garment a person wore.</p>" +
        "<p>" + N(8) + "European explorers and traders who traveled to the Arctic in the eighteenth and nineteenth centuries were impressed by these boats, and some carried examples home. " +
        N(9) + "By the early twentieth century, folding kayaks with wooden frames and canvas skins were being sold for recreation, and paddlers began using them on rivers and lakes far from any ice. " +
        N(10) + "After the middle of the century, builders turned to fiberglass and, later, to molded plastic, materials that made kayaks cheaper to produce and nearly impossible to break. " +
        N(11) + "Today a beginner can rent a plastic kayak for an afternoon without ever learning who invented it.</p>" +
        "<p>" + N(12) + "Even with new materials, kayak designers still face the same basic tradeoffs that the first builders understood. " +
        N(13) + "A long, narrow kayak cuts through water efficiently and holds a straight line, which makes it ideal for covering distance on open water. " +
        N(14) + "However, the same narrow shape can feel tippy to a beginner, because it offers less of what designers call primary stability, the steadiness a boat has when it sits flat on calm water. " +
        N(15) + "A short, wide kayak feels secure the moment a paddler sits down, yet it tracks poorly in wind, wandering left and right with each stroke, and it tires the paddler more quickly over long distances. " +
        N(16) + "Experienced paddlers often prefer boats with strong secondary stability, meaning the boat stays steady when tilted onto its edge, which lets them lean into turns and handle waves. " +
        N(17) + "No single design is best for everyone; each one trades one strength for another.</p>" +
        "<p>" + N(18) + "In recent decades, a number of Arctic communities have worked to revive traditional kayak building, teaching young people to construct frames by hand and to practice the rolling techniques that once saved hunters' lives. " +
        N(19) + "Rolling, in which a paddler who has tipped over uses the paddle and a snap of the hips to turn the boat upright without leaving it, is now taught in swimming pools around the world. " +
        N(20) + "Most of the people learning it will never hunt a seal or paddle among sea ice. " +
        N(21) + "Yet each time a student rights a kayak in a pool, she is using a solution worked out long ago by people for whom staying upright was a matter of survival." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the central idea of the passage about the kayak?",
          choices: [
            { letter: "A", text: "Plastic kayaks have made paddling safer than it was in the past." },
            { letter: "B", text: "Arctic hunters used kayaks mainly because wood was hard to find." },
            { letter: "C", text: "Today's kayaks still reflect the needs and wisdom of their inventors." },
            { letter: "D", text: "Beginners should choose short, wide kayaks for their first trips." }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "11.RI.1.B",
          stem: "According to the passage, why did the first kayaks need to be fast, quiet, and steady?",
          choices: [
            { letter: "A", text: "Hunters worked in cold water where tipping over could quickly be deadly." },
            { letter: "B", text: "Traders wanted boats that could carry heavy loads to Europe." },
            { letter: "C", text: "Builders had to compete with folding canvas kayaks for buyers." },
            { letter: "D", text: "Paddlers needed to travel quickly between rivers and lakes." }
          ],
          correct: "A"
        },
        {
          id: "wide",
          sol: "11.RI.1.B",
          stem: "According to the passage, what is one drawback of a short, wide kayak?",
          choices: [
            { letter: "A", text: "It feels tippy when a beginner first sits down in it." },
            { letter: "B", text: "It cannot be leaned onto its edge to make turns." },
            { letter: "C", text: "It is harder to roll upright after tipping over." },
            { letter: "D", text: "It drifts off course in wind and tires the paddler." }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward the Arctic builders who invented the kayak is best described as —",
          choices: [
            { letter: "A", text: "doubtful about how well their boats really worked" },
            { letter: "B", text: "respectful of the skill and care in their designs" },
            { letter: "C", text: "amused by how different their lives were from ours" },
            { letter: "D", text: "neutral, with no opinion about their achievements" }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "The author organizes the passage mainly by —",
          choices: [
            { letter: "A", text: "ranking modern kayaks from least to most expensive" },
            { letter: "B", text: "listing the steps needed to paddle a kayak safely" },
            { letter: "C", text: "comparing Inuit kayaks with Aleut kayaks point by point" },
            { letter: "D", text: "tracing the boat's history, then its design tradeoffs and revival" }
          ],
          correct: "D"
        },
        {
          id: "garment",
          sol: "11.RI.2.B",
          stem: "In sentence 7, comparing a kayak to a garment helps the reader understand that —",
          choices: [
            { letter: "A", text: "each boat was shaped closely to fit its own paddler" },
            { letter: "B", text: "kayak skins were sewn by the same people who made clothes" },
            { letter: "C", text: "hunters wore their kayaks on land to stay warm" },
            { letter: "D", text: "kayaks were decorated as carefully as clothing" }
          ],
          correct: "A"
        },
        {
          id: "seal",
          sol: "11.RI.2.C",
          stem: "The author includes sentence 20 mainly to —",
          choices: [
            { letter: "A", text: "warn readers that rolling is too difficult for most beginners" },
            { letter: "B", text: "criticize pool classes for ignoring the history of the kayak" },
            { letter: "C", text: "stress that the technique has outlived its original purpose" },
            { letter: "D", text: "suggest that seal hunting is still common in many countries" }
          ],
          correct: "C"
        },
        {
          id: "tracks",
          sol: "11.RV.1.C",
          stem: "In sentence 15, the word tracks most nearly means —",
          choices: [
            { letter: "A", text: "leaves marks behind" },
            { letter: "B", text: "keeps a steady course" },
            { letter: "C", text: "follows another boat" },
            { letter: "D", text: "records its own speed" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── 6 · INFORMATIONAL · botanical garden ───────────────────────── */
    {
      id: "g11-ri-c112-herbarium",
      family: "G11",
      title: "The Library in the Basement",
      kind: "Informational · 11.RI",
      blurb: "Below the rose terraces, a botanical garden keeps a collection of pressed plants that is quietly answering new questions.",
      level: 3,
      passage:
        "<p>" + N(1) + "Most visitors to a botanical garden come for the living collection: the rose terraces, the cactus house, the pond of floating lilies. " +
        N(2) + "Few of them know that many large gardens also keep a second collection, often hidden in a climate-controlled basement, that may be far more valuable to science. " +
        N(3) + "It is called a herbarium, and it consists of thousands, sometimes millions, of dried, pressed plants mounted on sheets of heavy paper and filed in cabinets like books in a library.</p>" +
        "<p>" + N(4) + "The method for making a specimen has changed remarkably little in several centuries. " +
        N(5) + "A collector cuts a representative sample, ideally including leaves, flowers, and sometimes fruit or roots, and arranges it between sheets of newspaper and blotting paper. " +
        N(6) + "The bundle is squeezed in a wooden press and dried until no moisture remains, and the plant is then glued or stitched to an archival sheet. " +
        N(7) + "Just as important as the plant itself is the label, which records where the specimen was found, when, by whom, and what kind of habitat surrounded it. " +
        N(8) + "A specimen without a label is a curiosity; a specimen with one is data.</p>" +
        "<p>" + N(9) + "For much of their history, herbaria served mainly to help botanists name and classify plants, settling arguments about which species was which. " +
        N(10) + "When a scientist describes a new species, she designates a particular specimen as the reference against which all later identifications can be checked. " +
        N(11) + "Yet in recent decades, researchers have discovered uses for these collections that the original collectors could never have imagined. " +
        N(12) + "Because each sheet records the date a plant was flowering, scientists can compare specimens gathered a century ago with plants blooming today. " +
        N(13) + "Several such studies have found that many species in temperate regions now flower days or even weeks earlier than they once did, a pattern consistent with warming springs. " +
        N(14) + "Other researchers extract DNA from old specimens to trace how plant populations have spread, shrunk, or adapted over time.</p>" +
        "<p>" + N(15) + "Herbaria also continue to surprise the people who manage them. " +
        N(16) + "Botanists have repeatedly found unnamed species not in remote jungles but in cabinet drawers, collected decades earlier and then misidentified or simply never examined closely by anyone with the right training. " +
        N(17) + "\"People imagine that discovery happens at the end of a long hike,\" says Tomasina Reyes, who manages the herbarium at Linden Hill Botanical Garden. " +
        N(18) + "\"Sometimes it happens at the end of a long hallway.\"</p>" +
        "<p>" + N(19) + "Preserving these collections is not cheap, and herbaria often compete for funding with flower shows and holiday light displays that draw paying crowds. " +
        N(20) + "Specimens must be protected from insects, humidity, and fire, and many institutions are racing to photograph their sheets and post the images online so that researchers anywhere can study them. " +
        N(21) + "Digitization, however, does not make the original sheets obsolete; a photograph cannot supply a sample of DNA or reveal the texture of a leaf under a microscope. " +
        N(22) + "For that reason, Reyes argues, a herbarium should be understood less as a museum of the past than as an instrument for measuring change. " +
        N(23) + "Every pressed flower in her cabinets is a dated observation, and the longer the record runs, the more questions it can answer. " +
        N(24) + "Reyes likes to remind visiting students that the collectors who filled her oldest cabinets had no idea what their sheets would someday reveal, and that the same is almost certainly true of the plants being pressed today." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which of the following best summarizes the central idea of the passage about herbaria?",
          choices: [
            { letter: "A", text: "Hidden herbarium collections are records whose scientific value keeps growing." },
            { letter: "B", text: "Botanical gardens should spend less money on flower shows and light displays." },
            { letter: "C", text: "Pressing plants is a hobby that has changed very little in several centuries." },
            { letter: "D", text: "Most new plant species are discovered by botanists exploring remote jungles." }
          ],
          correct: "A"
        },
        {
          id: "flowering",
          sol: "11.RI.1.B",
          stem: "According to the passage, how have researchers used herbarium specimens to study changes in flowering?",
          choices: [
            { letter: "A", text: "By growing new plants from seeds stored inside old sheets" },
            { letter: "B", text: "By comparing dates on old specimens with present-day blooming" },
            { letter: "C", text: "By measuring how much moisture remains in pressed flowers" },
            { letter: "D", text: "By counting how many specimens were collected each year" }
          ],
          correct: "B"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward herbaria is best described as —",
          choices: [
            { letter: "A", text: "worried that they will soon be replaced by photographs" },
            { letter: "B", text: "amused by how old-fashioned their methods seem" },
            { letter: "C", text: "convinced that they deserve more attention and support" },
            { letter: "D", text: "doubtful that their records can be trusted" }
          ],
          correct: "C"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          stem: "How does the author develop the discussion in paragraphs 3 and 4?",
          choices: [
            { letter: "A", text: "By describing the steps of pressing a plant in the order they occur" },
            { letter: "B", text: "By comparing herbaria with the living collections visitors prefer" },
            { letter: "C", text: "By listing the costs of protecting specimens from insects and fire" },
            { letter: "D", text: "By contrasting herbaria's original purpose with newer, unexpected uses" }
          ],
          correct: "D"
        },
        {
          id: "curiosity",
          sol: "11.RI.2.B",
          stem: "In sentence 8, the contrast between a curiosity and data mainly emphasizes that —",
          choices: [
            { letter: "A", text: "older specimens are more interesting than newer ones" },
            { letter: "B", text: "visitors find pressed plants more curious than scientists do" },
            { letter: "C", text: "only flowers, not leaves or roots, are useful for research" },
            { letter: "D", text: "the label is what gives a specimen its scientific value" }
          ],
          correct: "D"
        },
        {
          id: "hallway",
          sol: "11.RI.2.C",
          stem: "Reyes's contrast in sentences 17 and 18 between a long hike and a long hallway mainly functions to —",
          choices: [
            { letter: "A", text: "stress that discoveries can be made inside existing collections" },
            { letter: "B", text: "complain that herbarium workers rarely get to do fieldwork" },
            { letter: "C", text: "explain why collectors once misidentified so many plants" },
            { letter: "D", text: "describe the layout of the basement at Linden Hill" }
          ],
          correct: "A"
        },
        {
          id: "digitize",
          sol: "11.RI.2.C",
          stem: "The author includes sentence 21 mainly to —",
          choices: [
            { letter: "A", text: "explain how photographs of specimens are taken and stored" },
            { letter: "B", text: "answer the possible objection that images could replace the sheets" },
            { letter: "C", text: "argue that herbaria should stop posting their images online" },
            { letter: "D", text: "show that DNA can be gathered from high-quality photographs" }
          ],
          correct: "B"
        },
        {
          id: "obsolete",
          sol: "11.RV.1.B",
          stem: "In sentence 21, the explanation after the semicolon shows that obsolete means —",
          choices: [
            { letter: "A", text: "fragile and easily damaged" },
            { letter: "B", text: "expensive to keep in storage" },
            { letter: "C", text: "no longer useful or needed" },
            { letter: "D", text: "difficult for visitors to see" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 7 · FUNCTIONAL · puzzle hunt ───────────────────────── */
    {
      id: "g11-ri-c112-huntpacket",
      family: "G11",
      title: "Puzzle Hunt Team Packet",
      kind: "Functional text · 11.RI",
      blurb: "Everything a team captain needs to know before the library's teen puzzle hunt: rounds, hints, scoring and rules.",
      level: 1,
      passage:
        "<p><strong>Welcome, Solvers</strong> " + N(1) + "The fourth annual Harbor County Library Teen Puzzle Hunt will take place on Saturday, March 14, from 10:00 a.m. to 4:00 p.m., at the Main Branch and along the three blocks of Elm Street surrounding it. " +
        N(2) + "This packet explains how the hunt works, what your team needs to bring, and the rules every team must follow. " +
        N(3) + "Please read it together before the hunt begins, because \"we didn't know that rule\" is not an accepted reason for a scoring appeal.</p>" +
        "<p><strong>Teams</strong> " + N(4) + "Teams must have three to five members, all currently enrolled in grades 9 through 12. " +
        N(5) + "Each team chooses one captain, who is the only person allowed to submit answers and request hints. " +
        N(6) + "Teams may register online until Wednesday, March 11, at 5:00 p.m.; walk-in registration on the day of the hunt is available only if space remains.</p>" +
        "<p><strong>How the Hunt Works</strong> " + N(7) + "At 10:00 a.m., each captain will receive a sealed envelope containing the first round of six puzzles. " +
        N(8) + "Each puzzle has a one-word or short-phrase answer, which the captain submits at the Answer Desk on the second floor or through the hunt website. " +
        N(9) + "Every correct answer unlocks a location clue that leads your team to a hidden station in the library or on Elm Street, where a volunteer will give you the next envelope. " +
        N(10) + "After three rounds, teams that have solved at least twelve puzzles receive the final meta-puzzle, a challenge that can only be solved by combining answers from all of the earlier rounds.</p>" +
        "<p><strong>Hints</strong> " + N(11) + "Each team begins the day with three hint tokens. " +
        N(12) + "A captain may trade one token at the Answer Desk for a nudge on any puzzle, but volunteers will never reveal an answer directly. " +
        N(13) + "Unused tokens are worth five bonus points each at the end of the hunt, so spend them wisely.</p>" +
        "<p><strong>Scoring</strong> " + N(14) + "Each correct puzzle is worth ten points, and the meta-puzzle is worth fifty. " +
        N(15) + "Incorrect submissions do not cost points, but a team that submits more than three wrong answers on a single puzzle must wait fifteen minutes before trying that puzzle again. " +
        N(16) + "If two teams finish with the same score, the team that solved the meta-puzzle first wins the tie.</p>" +
        "<p><strong>Rules</strong> " + N(17) + "Teams must stay together when traveling between stations, and volunteers will not hand an envelope to a team with missing members. " +
        N(18) + "Phones may be used for calculators, maps, and the hunt website, but searching online for puzzle answers is not permitted. " +
        N(19) + "Library patrons who are not part of the hunt should not be disturbed, and quiet-floor rules apply on the third floor at all times. " +
        N(20) + "Any team caught moving, hiding, or damaging station materials will be disqualified.</p>" +
        "<p><strong>What to Bring</strong> " + N(21) + "Bring pencils, scrap paper, a charged phone, and comfortable shoes, since several stations are outdoors. " +
        N(22) + "Lunch will be provided in the community room from 12:30 to 1:15 p.m., and teams may keep solving while they eat. " +
        N(23) + "Awards for the top three teams will be presented in the community room at 4:15 p.m., and every participant will receive a hunt T-shirt. " +
        N(24) + "Questions before the event can be sent to the Teen Services desk at the Main Branch, which is open every afternoon from 2:00 to 6:00 p.m.</p>" +
        "<p><strong>Safety</strong> " + N(25) + "Teams must use marked crosswalks on Elm Street and may not enter any business except the two cafes named as stations in the location clues. " +
        N(26) + "A volunteer in an orange vest will be posted at each outdoor station until the hunt ends, and any team that needs help can ask that volunteer to call the Answer Desk.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          stem: "The primary purpose of the team packet is to —",
          choices: [
            { letter: "A", text: "persuade students to join a team for the library's hunt" },
            { letter: "B", text: "describe the history of the Harbor County Library hunt" },
            { letter: "C", text: "explain how the hunt works and what rules teams must follow" },
            { letter: "D", text: "give the answers to the first round of puzzles in advance" }
          ],
          correct: "C"
        },
        {
          id: "meta",
          sol: "11.RI.1.B",
          stem: "According to the packet, what must a team do before it receives the final meta-puzzle?",
          choices: [
            { letter: "A", text: "Solve at least twelve puzzles during the first three rounds" },
            { letter: "B", text: "Turn in all three of its hint tokens at the Answer Desk" },
            { letter: "C", text: "Visit every hidden station on Elm Street before lunch" },
            { letter: "D", text: "Submit every answer through the hunt website only" }
          ],
          correct: "A"
        },
        {
          id: "points",
          sol: "11.RI.1.B",
          stem: "Based on the Hints and Scoring sections, a team that solves eight puzzles and never uses a hint token would finish with —",
          choices: [
            { letter: "A", text: "80 points" },
            { letter: "B", text: "95 points" },
            { letter: "C", text: "110 points" },
            { letter: "D", text: "130 points" }
          ],
          correct: "B"
        },
        {
          id: "advice",
          sol: "11.RI.1.C",
          stem: "Which statement from the packet offers advice rather than stating a rule?",
          choices: [
            { letter: "A", text: "Teams must have three to five members." },
            { letter: "B", text: "Searching online for puzzle answers is not permitted." },
            { letter: "C", text: "Any team caught damaging station materials will be disqualified." },
            { letter: "D", text: "Unused tokens are worth bonus points, so spend them wisely." }
          ],
          correct: "D"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          stem: "How do the bold headings in the packet mainly help a team captain?",
          choices: [
            { letter: "A", text: "They show the order in which the puzzles must be solved." },
            { letter: "B", text: "They let the captain quickly find information on one topic." },
            { letter: "C", text: "They separate the rules for captains from the rules for members." },
            { letter: "D", text: "They list the locations of the hidden stations on Elm Street." }
          ],
          correct: "B"
        },
        {
          id: "warning",
          sol: "11.RI.2.B",
          stem: "The writers include the quoted excuse in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "show that teams will not be excused for ignoring the rules" },
            { letter: "B", text: "explain how a team can file an appeal about its score" },
            { letter: "C", text: "suggest that the rules are likely to change during the hunt" },
            { letter: "D", text: "quote a team that was disqualified the year before" }
          ],
          correct: "A"
        },
        {
          id: "together",
          sol: "11.RI.2.C",
          stem: "Which sentence makes clear that a team cannot split up to search for stations faster?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "C"
        },
        {
          id: "nudge",
          sol: "11.RV.1.C",
          stem: "In sentence 12, the word nudge most nearly means —",
          choices: [
            { letter: "A", text: "a full written solution" },
            { letter: "B", text: "a time penalty for the team" },
            { letter: "C", text: "a push toward the next station" },
            { letter: "D", text: "a small hint in the right direction" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 8 · ARGUMENT · marching band ───────────────────────── */
    {
      id: "g11-ri-c112-countsteps",
      family: "G11",
      title: "Count the Steps",
      kind: "Argument · 11.RI",
      blurb: "A drum line captain argues that a full season of marching band should earn students their second physical education credit.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every August, while most students are still sleeping in, the Westbrook High Marching Band is on the practice field by 7:30 a.m., running drills in heat that often climbs past ninety degrees. " +
        N(2) + "For two weeks of band camp, members rehearse eight hours a day, and during the fall season they practice three evenings a week on top of performing at every home football game and at weekend competitions that can last until midnight. " +
        N(3) + "Yet when these same students sign up for classes, the school treats all of that effort as if it were sitting still. " +
        N(4) + "Westbrook should allow students who complete a full season of marching band to earn the second physical education credit required for graduation.</p>" +
        "<p>" + N(5) + "The physical demands of marching band are real and measurable. " +
        N(6) + "A set of tenor drums can weigh more than thirty pounds, and the players who carry them must march backward, turn sharply, and keep perfect time without looking at their feet, often while playing music fast enough to leave them breathless. " +
        N(7) + "Last fall, twenty-four band members agreed to wear fitness trackers during rehearsals for one month, and the results surprised even our director. " +
        N(8) + "On average, a two-hour evening rehearsal produced more than eight thousand steps, and members' heart rates stayed in a moderate exercise range for most of that time. " +
        N(9) + "By comparison, the same students' trackers showed that a typical fifty-minute gym class produced around three thousand steps, since much of the period was spent changing clothes and waiting for turns.</p>" +
        "<p>" + N(10) + "Some will argue that physical education is about more than exercise. " +
        N(11) + "That is a fair point, and band members do not dismiss it. " +
        N(12) + "PE classes teach students about nutrition, introduce team sports they might never otherwise try, and build habits for lifelong health. " +
        N(13) + "But these goals do not require every student to sit through the same course. " +
        N(14) + "Band members could complete the health and nutrition unit through a short online module, just as students who transfer from other schools already do, while their season on the field covers the activity portion. " +
        N(15) + "Several schools in neighboring districts already offer a similar option, and none has reported that its band students are less healthy or less informed than their classmates.</p>" +
        "<p>" + N(16) + "There is also a practical reason to change the policy. " +
        N(17) + "Many band members also take advanced courses, sing in choir, or work part-time jobs, and the extra PE requirement squeezes their schedules until something has to give, and too often what gives is band. " +
        N(18) + "Last year, at least six students quit band after their freshman year, and three of them told me the reason was a scheduling conflict with required PE. " +
        N(19) + "When a school forces hardworking students to choose between an activity that keeps them moving and a class that is supposed to keep them moving, something has gone wrong.</p>" +
        "<p>" + N(20) + "Nobody in the band is asking for a shortcut. " +
        N(21) + "We are asking the school to recognize what anyone who has watched us rehearse in August already knows: marching band is physical work. " +
        N(22) + "The school's curriculum committee will review graduation requirements at its meeting on November 9, and I urge students and parents who agree to attend and speak, even if only for a minute. " +
        N(23) + "Count our steps first, and then decide whether we have earned the credit.</p>" +
        "<p><em>Thandiwe Mokoena is a senior and the captain of the Westbrook High drum line.</em></p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.A",
          stem: "Which sentence best states the central claim of Thandiwe's argument?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "11.RI.1.B",
          stem: "Which evidence does the writer offer to show that band rehearsals provide real exercise?",
          choices: [
            { letter: "A", text: "Opinions from parents who watch the band perform at games" },
            { letter: "B", text: "Reports from neighboring districts about their band programs" },
            { letter: "C", text: "Step counts and heart rates recorded by members' fitness trackers" },
            { letter: "D", text: "Interviews with students who quit band after freshman year" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          stem: "Which statement from the passage is a judgment rather than a fact that could be checked?",
          choices: [
            { letter: "A", text: "When a school forces students to choose, something has gone wrong." },
            { letter: "B", text: "A set of tenor drums can weigh more than thirty pounds." },
            { letter: "C", text: "Twenty-four band members wore fitness trackers for one month." },
            { letter: "D", text: "The committee will review requirements on November 9." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "11.RI.1.C",
          stem: "The writer's tone in sentences 20 and 21 is best described as —",
          choices: [
            { letter: "A", text: "bitter and accusing" },
            { letter: "B", text: "playful and teasing" },
            { letter: "C", text: "uncertain and apologetic" },
            { letter: "D", text: "firm and reasonable" }
          ],
          correct: "D"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          stem: "How does the writer develop the argument in paragraphs 2 through 4?",
          choices: [
            { letter: "A", text: "By telling the story of one band member's season in time order" },
            { letter: "B", text: "By giving evidence, answering an objection, then adding a practical reason" },
            { letter: "C", text: "By comparing marching band with each sport offered at Westbrook" },
            { letter: "D", text: "By listing the steps students must take to change the policy" }
          ],
          correct: "B"
        },
        {
          id: "still",
          sol: "11.RI.2.B",
          stem: "In sentence 3, the writer says the school treats band members' effort as if it were sitting still mainly to —",
          choices: [
            { letter: "A", text: "admit that band members spend much of rehearsal resting" },
            { letter: "B", text: "suggest that band classes should be held outdoors" },
            { letter: "C", text: "highlight the unfairness of giving no credit for hard physical work" },
            { letter: "D", text: "explain why band members often choose to skip gym class" }
          ],
          correct: "C"
        },
        {
          id: "compare",
          sol: "11.RI.2.C",
          stem: "The writer includes the comparison in sentence 9 mainly to —",
          choices: [
            { letter: "A", text: "show that a rehearsal involves more activity than a typical gym class" },
            { letter: "B", text: "argue that gym classes should be made longer than fifty minutes" },
            { letter: "C", text: "prove that fitness trackers give different results on different days" },
            { letter: "D", text: "suggest that band members are healthier than other students" }
          ],
          correct: "A"
        },
        {
          id: "measurable",
          sol: "11.RV.1.A",
          stem: "The word measurable in sentence 5 ends with the suffix -able, as do washable and breakable. In all three words, the suffix -able signals that something —",
          choices: [
            { letter: "A", text: "has already happened" },
            { letter: "B", text: "is done too often" },
            { letter: "C", text: "lacks a quality" },
            { letter: "D", text: "is able to be acted on" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 9 · VOCABULARY · botanical garden ───────────────────────── */
    {
      id: "g11-rv-c112-palmhouse",
      family: "G11",
      title: "The Palm House Returns",
      kind: "Vocabulary · 11.RV",
      blurb: "A rusted Victorian glasshouse reopens after seven years of restoration, and every pane of glass had to be chosen with care.",
      level: 2,
      passage:
        "<p>" + N(1) + "For nearly forty years, the Palm House at Ashgrove Botanical Garden stood empty behind a chain-link fence. " +
        N(2) + "Built in 1894 from curved iron ribs and more than eleven thousand panes of glass, it had once been the pride of the city, a place where families in their Sunday clothes strolled beneath banana trees in the middle of winter. " +
        N(3) + "By the 1980s, however, the building was so <strong>dilapidated</strong> that the garden had no choice but to close it: rust had eaten through several ribs, hundreds of panes had cracked or fallen out, and pigeons nested in the dome. " +
        N(4) + "Most residents assumed it would eventually be torn down and replaced with a parking lot or a plain modern greenhouse.</p>" +
        "<p>" + N(5) + "Instead, a seven-year restoration finished last spring, and the Palm House has reopened to crowds larger than any the garden has seen in decades. " +
        N(6) + "The work began with the iron frame. " +
        N(7) + "Engineers removed each rib, labeled it, and shipped it to a foundry, where workers <strong>meticulously</strong> cleaned and repaired the metal by hand, sometimes spending a full week on a single curved section. " +
        N(8) + "\"We could have built a new frame in half the time,\" said project manager Lorenzo Quispe, \"but then we would have a copy, not the Palm House.\"</p>" +
        "<p>" + N(9) + "The glass presented a different problem, one that took nearly two years to solve. " +
        N(10) + "The original panes were slightly wavy and tinted green, and modern window glass looked harsh and flat beside them. " +
        N(11) + "After testing dozens of samples, the team chose a <strong>translucent</strong> glass that lets sunlight pass through but scatters it softly, so that plants receive plenty of light without scorching and visitors see a gentle glow rather than a glare. " +
        N(12) + "Each replacement pane was cut to fit its exact opening, because no two openings in the old frame were quite the same size after more than a century of settling.</p>" +
        "<p>" + N(13) + "Choosing the plants required just as much care. " +
        N(14) + "In a warm, humid greenhouse, some species <strong>proliferate</strong> so quickly that they can crowd out their neighbors within a single season, spreading roots and runners into every open patch of soil. " +
        N(15) + "Horticulturists therefore planned the collection like a neighborhood, placing fast growers where they could be pruned easily and slow growers where they would receive the most light, much as a city planner might separate busy streets from quiet ones. " +
        N(16) + "They also included several <strong>symbiotic</strong> pairings, such as fig trees and the tiny wasps that pollinate them, so that visitors could see living things depending on each other in ways that benefit both.</p>" +
        "<p>" + N(17) + "The restoration has done more than save a building. " +
        N(18) + "Garden staff say it has <strong>reinvigorated</strong> the whole institution, bringing in new members, new volunteers, and a wave of school field trips that fill the paths every weekday morning. " +
        N(19) + "Attendance in the first six months was nearly triple the garden's usual numbers, and the gift shop has twice sold out of postcards showing the dome lit up at night. " +
        N(20) + "On a recent snowy afternoon, a grandmother stood under the palms with her grandson and told him that she had first visited the building when she was his age. " +
        N(21) + "\"It looks exactly the way I remember,\" she said, \"which means someone worked very hard to make it look as if no one had touched it.\" " +
        N(22) + "Quispe, who overheard the remark from a nearby bench, later said it was the best review the project could ever have received.</p>",
      claims: [
        {
          id: "dilapidated",
          sol: "11.RV.1.B",
          stem: "In sentence 3, the details after the colon show that dilapidated means —",
          choices: [
            { letter: "A", text: "crowded with too many visitors" },
            { letter: "B", text: "fallen into ruin from age and neglect" },
            { letter: "C", text: "old-fashioned in its style and design" },
            { letter: "D", text: "closed temporarily for the winter" }
          ],
          correct: "B"
        },
        {
          id: "meticulously",
          sol: "11.RV.1.C",
          stem: "In sentence 7, the word meticulously suggests that the foundry workers —",
          choices: [
            { letter: "A", text: "worked with extreme care and attention to detail" },
            { letter: "B", text: "rushed to finish the frame before the deadline" },
            { letter: "C", text: "disagreed about the best way to repair the iron" },
            { letter: "D", text: "used new machines instead of their own hands" }
          ],
          correct: "A"
        },
        {
          id: "translucent",
          sol: "11.RV.1.A",
          stem: "The word translucent in sentence 11 combines the prefix trans-, meaning through, with the root luc, meaning light. Based on these parts and the sentence, translucent glass —",
          choices: [
            { letter: "A", text: "blocks all sunlight from reaching the plants" },
            { letter: "B", text: "reflects light back toward the sky like a mirror" },
            { letter: "C", text: "lets light pass through while softening it" },
            { letter: "D", text: "changes color as the light moves across it" }
          ],
          correct: "C"
        },
        {
          id: "proliferate",
          sol: "11.RV.1.B",
          stem: "In sentence 14, the details about crowding out neighbors and spreading into every open patch of soil show that proliferate means —",
          choices: [
            { letter: "A", text: "wilt in hot, damp air" },
            { letter: "B", text: "need constant pruning" },
            { letter: "C", text: "produce bright flowers" },
            { letter: "D", text: "grow and spread rapidly" }
          ],
          correct: "D"
        },
        {
          id: "symbiotic",
          sol: "11.RV.1.A",
          stem: "The word symbiotic in sentence 16 begins with the prefix sym-, as in sympathy and symphony. The prefix sym- most likely means —",
          choices: [
            { letter: "A", text: "together or with" },
            { letter: "B", text: "against or opposite" },
            { letter: "C", text: "under or below" },
            { letter: "D", text: "far away or distant" }
          ],
          correct: "A"
        },
        {
          id: "reinvigorated",
          sol: "11.RV.1.C",
          stem: "In sentence 18, the word reinvigorated most nearly means —",
          choices: [
            { letter: "A", text: "reorganized" },
            { letter: "B", text: "examined again" },
            { letter: "C", text: "given new energy" },
            { letter: "D", text: "made more crowded" }
          ],
          correct: "C"
        },
        {
          id: "mainidea",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the main idea of the article about the Palm House?",
          choices: [
            { letter: "A", text: "Old glasshouses should be replaced because repairing them costs too much." },
            { letter: "B", text: "A careful restoration saved a historic building and revived the garden." },
            { letter: "C", text: "Fig trees and wasps are the most popular exhibit at Ashgrove." },
            { letter: "D", text: "Modern window glass is better for plants than older glass." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          stem: "The author organizes paragraphs 2 through 4 mainly by —",
          choices: [
            { letter: "A", text: "comparing the Palm House with other glasshouses in the region" },
            { letter: "B", text: "listing reasons residents gave for wanting the building torn down" },
            { letter: "C", text: "telling the grandmother's memories in the order they happened" },
            { letter: "D", text: "describing the frame, glass, and plants as separate challenges" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 10 · VOCABULARY · puzzle hunt ───────────────────────── */
    {
      id: "g11-rv-c112-elegant",
      family: "G11",
      title: "A Locked Door with No Keyhole",
      kind: "Vocabulary · 11.RV",
      blurb: "A teenager builds a block-party puzzle hunt with a final riddle he loves, until a retired crossword writer tests it.",
      level: 3,
      passage:
        "<p>" + N(1) + "Daniel Seo had spent three weeks building the puzzle hunt for the Linwood Street block party, and he was certain it was the best thing he had ever made. " +
        N(2) + "There were twelve clues hidden in mailboxes and flowerpots, a cipher wheel cut from a cereal box, and a final riddle so <strong>convoluted</strong> that it took him two full pages of notes to explain: it involved counting the windows on four houses, converting the totals into letters, reversing them, and reading every third one. " +
        N(3) + "The night before the party, he knocked on the door of Mrs. Nwosu, who had written the crossword for the county newspaper for thirty-one years, and asked her to test it.</p>" +
        "<p>" + N(4) + "She solved the first five clues in the time it took him to pour two glasses of lemonade. " +
        N(5) + "Then she reached the final riddle, read it twice, and set the page down on her kitchen table with the care of someone handling a cracked plate. " +
        N(6) + "\"Daniel, this is not a puzzle,\" she said; \"this is a locked door with no keyhole.\" " +
        N(7) + "He started to protest that it was perfectly logical, but she held up one finger. " +
        N(8) + "\"Logical to you,\" she said. " +
        N(9) + "\"To a ten-year-old holding a cereal-box wheel in the sun, it is <strong>inscrutable</strong>, and a puzzle no one can understand is just a wall.\"</p>" +
        "<p>" + N(10) + "Daniel walked home feeling as if someone had let the air out of him. " +
        N(11) + "He sat on his porch with the notebook open and stared at the final riddle until the streetlights came on, unable to decide whether to cut it, rewrite it, or simply hope the kids were smarter than Mrs. Nwosu thought. " +
        N(12) + "He had reached an <strong>impasse</strong>: every change he imagined seemed to break something else, and leaving it alone felt worse. " +
        N(13) + "Around ten o'clock, his little sister Mina wandered out in her pajamas, glanced at the page, and asked why the windows mattered. " +
        N(14) + "He opened his mouth to explain and found that he could not. " +
        N(15) + "The windows did not matter; he had chosen them because they were difficult, not because they meant anything. " +
        N(16) + "The realization arrived all at once, like a light switched on in a room he had been stumbling through in the dark, and the <strong>epiphany</strong> made him laugh out loud. " +
        N(17) + "A good puzzle, he understood, was not a test of how clever its maker was. " +
        N(18) + "It was a conversation in which the solver was supposed to win.</p>" +
        "<p>" + N(19) + "He rewrote the final riddle that night. " +
        N(20) + "The new version was short and almost <strong>cryptic</strong> in its simplicity, just six words painted on the side of the community garden shed, but every word pointed back to something the kids would have seen during the hunt. " +
        N(21) + "When he showed it to Mrs. Nwosu the next morning, she read it once, smiled, and gave the highest compliment he had ever heard from her: \"That's <strong>elegant</strong>.\" " +
        N(22) + "She meant, he knew, that nothing in it was wasted.</p>" +
        "<p>" + N(23) + "At the party, a team of four nine-year-olds solved it in eleven minutes and ran shrieking down Linwood Street toward the prize box, which turned out to contain mostly glow sticks and granola bars. " +
        N(24) + "Daniel watched them go and felt no disappointment at all that the riddle he had once been so proud of was now at the bottom of the recycling bin. " +
        N(25) + "Mrs. Nwosu, sitting in a lawn chair beside him, tapped his notebook with her pen. " +
        N(26) + "\"Next year,\" she said, \"you can make it a little harder.\" " +
        N(27) + "Then she added, with a look that told him she was only half joking, \"But only a little.\"</p>",
      claims: [
        {
          id: "convoluted",
          sol: "11.RV.1.B",
          stem: "In sentence 2, the explanation after the colon shows that convoluted means —",
          choices: [
            { letter: "A", text: "funny in a clever way" },
            { letter: "B", text: "hidden in an unusual place" },
            { letter: "C", text: "complicated by many twisting steps" },
            { letter: "D", text: "written in very small letters" }
          ],
          correct: "C"
        },
        {
          id: "inscrutable",
          sol: "11.RV.1.A",
          stem: "The word inscrutable in sentence 9 joins the prefix in-, meaning not, to a Latin root meaning to examine. Based on its parts and Mrs. Nwosu's words, inscrutable means —",
          choices: [
            { letter: "A", text: "impossible to figure out" },
            { letter: "B", text: "too easy to be enjoyable" },
            { letter: "C", text: "examined too many times" },
            { letter: "D", text: "unfair to older players" }
          ],
          correct: "A"
        },
        {
          id: "impasse",
          sol: "11.RV.1.B",
          stem: "Based on the details in sentence 12, an impasse is —",
          choices: [
            { letter: "A", text: "a sudden and exciting new idea" },
            { letter: "B", text: "a point where no way forward appears" },
            { letter: "C", text: "a small mistake that is easy to fix" },
            { letter: "D", text: "a decision that was made too quickly" }
          ],
          correct: "B"
        },
        {
          id: "cryptic",
          sol: "11.RV.1.A",
          stem: "The word cryptic in sentence 20 comes from a Greek root meaning hidden, the same root found in encrypt. Calling the new riddle almost cryptic in its simplicity suggests that it —",
          choices: [
            { letter: "A", text: "is longer and harder than the original riddle" },
            { letter: "B", text: "was copied from one of Mrs. Nwosu's crosswords" },
            { letter: "C", text: "can only be read by people who know a secret code" },
            { letter: "D", text: "seems mysterious at first because it says so little" }
          ],
          correct: "D"
        },
        {
          id: "elegantword",
          sol: "11.RV.1.C",
          stem: "Sentence 22 shows that when Mrs. Nwosu calls the new riddle elegant in sentence 21, she means that it is —",
          choices: [
            { letter: "A", text: "beautifully painted and decorated" },
            { letter: "B", text: "simple and efficient, with nothing extra" },
            { letter: "C", text: "formal and suited to a fancy occasion" },
            { letter: "D", text: "difficult enough to impress adults" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best supported by Daniel's experience designing the hunt?",
          choices: [
            { letter: "A", text: "Young people should not ask adults to judge their work." },
            { letter: "B", text: "The hardest puzzles always earn the most respect." },
            { letter: "C", text: "Making something for others means putting their experience first." },
            { letter: "D", text: "Prizes matter more to children than the challenge itself." }
          ],
          correct: "C"
        },
        {
          id: "air",
          sol: "11.RL.2.C",
          stem: "In sentence 10, the phrase let the air out of him suggests that Daniel feels —",
          choices: [
            { letter: "A", text: "deflated and discouraged" },
            { letter: "B", text: "tired from the long walk" },
            { letter: "C", text: "relieved to be finished" },
            { letter: "D", text: "angry at Mrs. Nwosu" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "11.RL.3.A",
          stem: "Mrs. Nwosu's final words in sentences 26 and 27 resolve the story by —",
          choices: [
            { letter: "A", text: "revealing that she secretly preferred Daniel's first riddle" },
            { letter: "B", text: "showing that the children found the new riddle too easy" },
            { letter: "C", text: "suggesting that Daniel will stop designing puzzle hunts" },
            { letter: "D", text: "approving his growth while urging a balance of challenge and fairness" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── 11 · PAIRED TEXTS · kayaking ───────────────────────── */
    {
      id: "g11-dsr-c112-coldwater",
      family: "G11",
      title: "Dress for the Water",
      kind: "Paired texts · 11.DSR",
      blurb: "An outfitter's cold-water safety guide and a veteran kayaker's account of the April day she capsized.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Gull Rock Outfitters, \"Dress for the Water, Not the Air\"</strong></p>" +
        "<p>" + N(1) + "Every spring, the first warm weekend brings paddlers out onto the bay in T-shirts and shorts, and every spring, rescue crews pull some of them out of water that is still barely above fifty degrees. " +
        N(2) + "At Gull Rock Outfitters, we ask every renter and student to follow one rule before all others: dress for the temperature of the water, not the temperature of the air. " +
        N(3) + "A sunny seventy-five-degree afternoon can hide water cold enough to overwhelm a healthy adult within minutes.</p>" +
        "<p>" + N(4) + "The danger begins the instant a paddler falls in. " +
        N(5) + "Sudden immersion in cold water triggers a gasp reflex, an involuntary breath that can pull water into the lungs, followed by rapid breathing that may last a minute or more. " +
        N(6) + "Within about ten minutes, cold muscles in the arms and hands begin to weaken, making it hard to grip a paddle, climb back aboard, or even work a zipper. " +
        N(7) + "Hypothermia, the dangerous drop in body temperature that most people fear, usually takes longer to set in; by then, many swimmers have already lost the ability to help themselves.</p>" +
        "<p>" + N(8) + "For this reason, we require a wetsuit or drysuit on all tours when the water is below sixty degrees, and a properly fitted life jacket for every paddler at every temperature, zipped and buckled, not strapped to the deck. " +
        N(9) + "We also ask paddlers to practice a wet exit and an assisted rescue in calm, shallow water before their first open-water trip. " +
        N(10) + "A skill that has been rehearsed is far more likely to work when your hands are numb and your heart is pounding. " +
        N(11) + "Finally, file a float plan by telling someone on shore where you are going and when you expect to return. " +
        N(12) + "None of these precautions makes a capsize impossible. " +
        N(13) + "They simply give you time, and in cold water, time is what turns an emergency into a story you tell afterward.</p>" +
        "<p><strong>Text 2 — Noor Haddad, \"The Day I Swam\"</strong></p>" +
        "<p>" + N(14) + "I had paddled for six years when I capsized in Larkin Cove last April, and until that day I would have told you I was too experienced for it to happen. " +
        N(15) + "The wind came up faster than the forecast had promised, a wave caught my kayak broadside, and before I understood what was happening I was upside down in water that felt less like water than like a slap across my whole body. " +
        N(16) + "I remember the gasp most clearly, a huge breath I did not choose, and the strangely calm thought that followed: so this is what the guidebooks meant.</p>" +
        "<p>" + N(17) + "I was wearing a drysuit that day only because my paddling partner, Marguerite, had teased me into it at the launch. " +
        N(18) + "\"It's April, not July,\" she had said, and I had rolled my eyes and zipped it up mostly to end the conversation. " +
        N(19) + "That suit is the reason my fingers still worked when she reached me four minutes later, and the reason I could hold on to her bow while she steadied my boat. " +
        N(20) + "We had practiced that rescue a dozen times in a pool the winter before, laughing the whole time, and in the cove it unfolded almost exactly the same way, except that nobody laughed.</p>" +
        "<p>" + N(21) + "People sometimes ask what lesson I took from that day, expecting me to say that I learned to respect the water. " +
        N(22) + "That is true, but it is not the whole lesson. " +
        N(23) + "The rules I followed were written by someone, and I followed them only because someone else reminded me. " +
        N(24) + "Experience had made me confident; it took a friend to make me careful. " +
        N(25) + "Now I am the one at the launch who asks, every single time, whether everyone is dressed for the water. " +
        N(26) + "Some people roll their eyes, and I let them, because I know exactly what that eye roll is worth.</p>",
      claims: [
        {
          id: "central",
          sol: "11.DSR.D",
          stem: "Which idea is central to both the outfitter's guide and Noor's account?",
          choices: [
            { letter: "A", text: "Experienced paddlers rarely need to follow beginners' rules." },
            { letter: "B", text: "Preparation made before a capsize can save a paddler's life." },
            { letter: "C", text: "Weather forecasts are the most reliable tool for staying safe." },
            { letter: "D", text: "Kayaking in early spring should be avoided by everyone." }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          stem: "How does the purpose of Text 1 differ from the purpose of Text 2?",
          choices: [
            { letter: "A", text: "Text 1 tells a rescue story; Text 2 lists rules for renters." },
            { letter: "B", text: "Text 1 sells equipment; Text 2 warns readers against kayaking." },
            { letter: "C", text: "Text 1 instructs readers; Text 2 reflects on why the rules matter." },
            { letter: "D", text: "Text 1 describes Larkin Cove; Text 2 compares two kinds of suits." }
          ],
          correct: "C"
        },
        {
          id: "effects",
          sol: "11.DSR.E",
          stem: "Select TWO sentences from Text 2 that most directly illustrate effects of cold water described in Text 1.",
          choices: [
            { letter: "A", text: "Sentence 14" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "conclude",
          sol: "11.DSR.E",
          stem: "A paddler who read both texts could best conclude that —",
          choices: [
            { letter: "A", text: "drysuits are only necessary for paddlers who are beginners" },
            { letter: "B", text: "a float plan matters more than a life jacket in cold water" },
            { letter: "C", text: "capsizing is almost always caused by poor paddling skills" },
            { letter: "D", text: "dressing for the water and practicing rescues matter for everyone" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.DSR.E",
          stem: "Compared with Text 1, the tone of Text 2 is more —",
          choices: [
            { letter: "A", text: "personal and reflective" },
            { letter: "B", text: "technical and detached" },
            { letter: "C", text: "playful and lighthearted" },
            { letter: "D", text: "angry and accusing" }
          ],
          correct: "A"
        },
        {
          id: "adds",
          sol: "11.DSR.D",
          stem: "Which idea in Text 2 adds something that Text 1 does not address?",
          choices: [
            { letter: "A", text: "Cold water can cause a gasp that the swimmer does not choose." },
            { letter: "B", text: "Rescues should be practiced in calm water before a real trip." },
            { letter: "C", text: "Life jackets should be worn rather than strapped to the deck." },
            { letter: "D", text: "A friend's reminder can matter as much as the rules themselves." }
          ],
          correct: "D"
        },
        {
          id: "story",
          sol: "11.RI.2.B",
          stem: "In sentence 13, the writer of Text 1 says that time turns an emergency into a story you tell afterward mainly to —",
          choices: [
            { letter: "A", text: "stress that precautions improve survival rather than prevent accidents" },
            { letter: "B", text: "encourage paddlers to write about their trips when they return" },
            { letter: "C", text: "suggest that most capsizes are less serious than people think" },
            { letter: "D", text: "explain why a float plan should include an expected return time" }
          ],
          correct: "A"
        },
        {
          id: "eyeroll",
          sol: "11.RL.1.B",
          stem: "In Text 2, the eye roll mentioned in sentence 18 connects to sentence 26 by showing that Noor —",
          choices: [
            { letter: "A", text: "still resents Marguerite for teasing her at the launch" },
            { letter: "B", text: "thinks other paddlers are foolish for ignoring her advice" },
            { letter: "C", text: "now values the kind of reminder she once brushed aside" },
            { letter: "D", text: "has decided to stop kayaking with people she does not know" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── 12 · PAIRED TEXTS · marching band ───────────────────────── */
    {
      id: "g11-dsr-c112-bandcamp",
      family: "G11",
      title: "Two Weeks in August",
      kind: "Paired texts · 11.DSR",
      blurb: "A band director's letter to families about band camp, and the camp journal of a freshman clarinetist.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Letter to Band Families from Mr. Teodoro Lindqvist, Director of Bands</strong></p>" +
        "<p>" + N(1) + "Dear Band Families, welcome to a new season of the Fairmont Falcon Marching Band. " +
        N(2) + "Band camp begins Monday, August 3, and runs for two weeks, Monday through Friday, from 8:00 a.m. to 4:00 p.m., with a family preview performance on the final Friday at 6:30 p.m. " +
        N(3) + "I know that eight hours a day in August sounds like a lot, especially to new members and their families. " +
        N(4) + "Camp is where we learn the entire halftime show, both the music and the marching, and the skills we build in these two weeks carry us through the whole fall. " +
        N(5) + "It is also where ninety separate people start to become one band.</p>" +
        "<p>" + N(6) + "Our schedule is planned around the heat. " +
        N(7) + "We rehearse marching outdoors in the cooler morning hours and move inside to the air-conditioned band room for music rehearsals during the hottest part of the afternoon. " +
        N(8) + "Students take a water break at least every twenty minutes outdoors, and our athletic trainer is on site every day with ice, cold towels, and a shaded tent. " +
        N(9) + "Please send your student with a refillable water bottle that holds at least half a gallon, along with sunscreen, a hat, athletic shoes, and a packed lunch.</p>" +
        "<p>" + N(10) + "New members often feel overwhelmed during the first few days. " +
        N(11) + "That is normal, and our student section leaders are trained to help, whether a student needs a marching tip or just a friendly face. " +
        N(12) + "By the end of the first week, almost every freshman tells me that they are surprised by how much they have learned. " +
        N(13) + "If you have any questions, including about a medical condition that may affect your student in the heat, please email me before camp begins. " +
        N(14) + "I look forward to a terrific season with all of you.</p>" +
        "<p><strong>Text 2 — From Minh Tran's Band Camp Journal</strong></p>" +
        "<p>" + N(15) + "Day 1: Nobody told me that marching backward is a completely different skill from marching forward. " +
        N(16) + "I tripped over a yard-line marker during the first hour, and a junior named Sofia caught my elbow, said \"Everyone does that,\" and kept going like it was nothing. " +
        N(17) + "By lunch my water bottle was empty, my shirt was soaked, and I seriously thought about telling my mom I wanted to quit.</p>" +
        "<p>" + N(18) + "Day 3: We learned the opening set today, and when the whole band hit the first chord together, I felt it in my chest like a second heartbeat. " +
        N(19) + "My feet still do not always do what I tell them, but my clarinet part is starting to feel easy, which is weird because three days ago I could not play it at all.</p>" +
        "<p>" + N(20) + "Day 5: Sofia showed me a trick for marching backward: keep your weight on the balls of your feet and pretend you are sneaking out of a room. " +
        N(21) + "It worked so well that I actually laughed in the middle of the drill and lost my place, but Sofia just grinned and pointed me back to my spot.</p>" +
        "<p>" + N(22) + "Day 9: Mr. Lindqvist's letter said freshmen are always surprised by how much they learn, and I hate to admit that he was right. " +
        N(23) + "I can play the whole show from memory now, even the fast part near the end that made me want to cry on Day 2.</p>" +
        "<p>" + N(24) + "Day 10: Tonight was the family preview. " +
        N(25) + "My mom said she could not find me in the band at first, because everyone moved like one person. " +
        N(26) + "I think that was supposed to be a complaint, but it was the best thing anyone has said to me all summer.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          stem: "Which idea appears in both the director's letter and Minh's journal?",
          choices: [
            { letter: "A", text: "Band camp is too long for most freshmen to finish." },
            { letter: "B", text: "Music rehearsals are harder than marching rehearsals." },
            { letter: "C", text: "The family preview is the most important event of the year." },
            { letter: "D", text: "New members struggle at first but learn quickly." }
          ],
          correct: "D"
        },
        {
          id: "support",
          sol: "11.DSR.E",
          stem: "Select TWO sentences from Minh's journal that support the director's claim in sentence 12.",
          choices: [
            { letter: "A", text: "Sentence 16" },
            { letter: "B", text: "Sentence 19" },
            { letter: "C", text: "Sentence 23" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "tone",
          sol: "11.DSR.E",
          stem: "Compared with the director's letter, Minh's journal is more —",
          choices: [
            { letter: "A", text: "formal and organized" },
            { letter: "B", text: "personal and emotional" },
            { letter: "C", text: "critical and impatient" },
            { letter: "D", text: "detailed about schedules" }
          ],
          correct: "B"
        },
        {
          id: "family",
          sol: "11.DSR.E",
          stem: "The family of a new band member who read both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the first days are hard, but support and progress make camp worthwhile" },
            { letter: "B", text: "students should skip band camp if they feel overwhelmed on the first day" },
            { letter: "C", text: "older band members are usually too busy to help the freshmen" },
            { letter: "D", text: "the heat makes outdoor rehearsals unsafe for most new students" }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "The main difference between the two texts is that the letter —",
          choices: [
            { letter: "A", text: "tells a story, while the journal gives instructions to families" },
            { letter: "B", text: "focuses on one student, while the journal describes the whole band" },
            { letter: "C", text: "helps families prepare, while the journal records one student's experience" },
            { letter: "D", text: "complains about the heat, while the journal praises the weather" }
          ],
          correct: "C"
        },
        {
          id: "oneperson",
          sol: "11.RL.1.C",
          stem: "Minh's reaction in sentence 26 to his mother's comment shows that he —",
          choices: [
            { letter: "A", text: "is hurt that his mother did not notice him" },
            { letter: "B", text: "wants a solo so that he can stand out next year" },
            { letter: "C", text: "plans to quit the band once the season is over" },
            { letter: "D", text: "values being part of a unified group" }
          ],
          correct: "D"
        },
        {
          id: "heartbeat",
          sol: "11.RL.2.A",
          stem: "In sentence 18, comparing the band's first chord to a second heartbeat suggests that Minh —",
          choices: [
            { letter: "A", text: "feels the music powerfully, almost as part of his body" },
            { letter: "B", text: "is nervous because his heart is beating too quickly" },
            { letter: "C", text: "has trouble hearing his own clarinet in the band" },
            { letter: "D", text: "is tired from marching in the heat all morning" }
          ],
          correct: "A"
        },
        {
          id: "reassure",
          sol: "11.RI.1.C",
          stem: "Mr. Lindqvist's purpose in sentences 10 through 12 is mainly to —",
          choices: [
            { letter: "A", text: "warn families that some students will be cut from the band" },
            { letter: "B", text: "reassure families that early struggles are normal and pass" },
            { letter: "C", text: "ask families to volunteer as section leaders during camp" },
            { letter: "D", text: "explain why the band rehearses indoors in the afternoon" }
          ],
          correct: "B"
        }
      ]
    }
];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
