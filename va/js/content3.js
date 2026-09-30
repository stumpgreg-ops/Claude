/* SOL Labyrinth — Grade 9 literary packs (VA 9.RL): short stories, poems and
 * drama scenes. Original text only; no VDOE / copyrighted material.
 * Loaded after content2.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LEVEL 1 ───────────────────────── */
    {
      id: "g9-rl-spare-key",
      family: "G9",
      title: "The Spare Key",
      kind: "Literary · 9.RL",
      blurb: "Tomas opens his aunt's bakery alone for the first time.",
      level: 1,
      passage:
        "<p>" + N(1) + "The key to Aunt Rosa's bakery was heavier than it looked, or maybe Tomas's hand was shaking. " +
        N(2) + "It was 4:30 in the morning, the street was empty, and for the first time nobody was going to open the door for him. " +
        N(3) + "The lock stuck, just as his aunt had warned, so he lifted the handle and turned at the same time, and the door gave way with a groan. " +
        N(4) + "Inside, the shop still smelled like yesterday's cinnamon. " +
        N(5) + "Tomas switched on the ovens, tied on an apron with his aunt's name stitched on the pocket, and started down the checklist taped beside the mixer. " +
        N(6) + "Flour, water, yeast, salt. " +
        N(7) + "He had watched her do it a hundred times, and his hands moved almost without him. " +
        N(8) + "Not until the first trays were shaped did he notice that the proofing cabinet was cold; he had skipped a line. " +
        N(9) + "The dough sat there, stubborn as a stone. " +
        N(10) + "Tomas set the cabinet to warm, slid the trays in, and did the only useful thing left: he waited and did not panic. " +
        N(11) + "At 6:10, Mr. Abel, who had bought two rolls every morning for eleven years, tapped on the glass. " +
        N(12) + "Tomas unlocked the door and told him the rolls would be twenty minutes late. " +
        N(13) + "Mr. Abel shrugged, took a chair, and opened his newspaper. " +
        N(14) + "When Aunt Rosa arrived at seven, the case was full and the shop was warm. " +
        N(15) + "She looked at the clock, then at the trays, then at her nephew. " +
        N(16) + "\"Late rolls are still rolls,\" she said. \"A locked door is nothing at all.\" " +
        N(17) + "Tomas held out the key, and she pushed it back across the counter to him." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does the story's ending best support?",
          choices: [
            { letter: "A", text: "Family businesses should never be trusted to teenagers." },
            { letter: "B", text: "Responsibility is proven by how a person handles a mistake." },
            { letter: "C", text: "Regular customers are the most important part of a bakery." },
            { letter: "D", text: "Waking up early is the hardest part of learning any job." }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows that Tomas stays steady under pressure?",
          choices: [
            { letter: "A", text: "Sentence 3: He lifts the handle and turns the key at the same time." },
            { letter: "B", text: "Sentence 7: His hands move almost without him." },
            { letter: "C", text: "Sentence 10: He warms the cabinet, then waits and does not panic." },
            { letter: "D", text: "Sentence 17: He holds the key out to his aunt." }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 9, the author compares the dough to a stone mainly to show that it —",
          choices: [
            { letter: "A", text: "has not risen at all" },
            { letter: "B", text: "is too heavy for Tomas to lift" },
            { letter: "C", text: "is finally ready for the oven" },
            { letter: "D", text: "was mixed with far too much salt" }
          ],
          correct: "A"
        },
        {
          id: "setting",
          sol: "9.RL.3.A",
          stem: "The details in sentence 2 about the time and the empty street mainly emphasize that Tomas —",
          choices: [
            { letter: "A", text: "is running late for his very first shift" },
            { letter: "B", text: "is afraid of walking down a dark street" },
            { letter: "C", text: "has forgotten where the bakery is located" },
            { letter: "D", text: "is completely on his own for the first time" }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RL.2.C",
          stem: "In sentence 3, the phrase gave way most nearly means —",
          choices: [
            { letter: "A", text: "broke into pieces" },
            { letter: "B", text: "locked itself again" },
            { letter: "C", text: "finally came open" },
            { letter: "D", text: "swung shut hard" }
          ],
          correct: "C"
        },
        {
          id: "plot",
          sol: "9.RL.1.B",
          stem: "Why does Aunt Rosa push the key back across the counter in sentence 17?",
          choices: [
            { letter: "A", text: "She wants Tomas to lock the door before he leaves for school." },
            { letter: "B", text: "She has decided that Tomas can be trusted with the shop again." },
            { letter: "C", text: "She is too tired from the early morning to carry it home." },
            { letter: "D", text: "She thinks the sticking lock needs a brand-new key." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-snow-money",
      family: "G9",
      title: "Snow Money",
      kind: "Literary · 9.RL",
      blurb: "Two shovels, one long driveway, and a bike in a pawn shop window.",
      level: 1,
      passage:
        "<p>" + N(1) + "The snow stopped at seven, and by eight Yara and her little brother Kwame stood on the corner of Delmar Street with two shovels and a plan. " +
        N(2) + "Ten dollars a driveway, twenty for the long ones, and by dark they would have enough for the used bike in the pawn shop window. " +
        N(3) + "The first three houses went quickly. " +
        N(4) + "Kwame did the steps while Yara cut the wide lanes, and the pile at the curb grew taller than he was. " +
        N(5) + "Then they reached Mrs. Halvorsen's house at the end of the block. " +
        N(6) + "Her driveway was the longest on the street, and it had not been touched. " +
        N(7) + "\"She never comes out,\" Kwame said. \"She won't even know we did it.\" " +
        N(8) + "Yara looked at the buried mailbox and the single set of footprints leading to the door and back. " +
        N(9) + "\"That's why,\" she said, and she started to dig. " +
        N(10) + "Kwame groaned like a door that needed oil, but he followed her. " +
        N(11) + "It took forty minutes. " +
        N(12) + "Nobody came to the window, and nobody paid them. " +
        N(13) + "By the time they finished, though, two neighbors across the street had come out to watch, and one of them was waving a twenty-dollar bill. " +
        N(14) + "The other asked if they could come back tomorrow. " +
        N(15) + "On the walk home, Kwame counted the money three times. " +
        N(16) + "\"We're still fifteen short for the bike,\" he said. " +
        N(17) + "\"We're also two customers up,\" Yara said. \"The long driveway was the ad.\" " +
        N(18) + "Kwame thought about that for half a block. " +
        N(19) + "Then he asked whether Mrs. Halvorsen's walk would need doing again after the next storm." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which idea does the story most clearly develop?",
          choices: [
            { letter: "A", text: "Helping without being asked can bring rewards you did not plan for." },
            { letter: "B", text: "Younger siblings should always follow an older sibling's orders." },
            { letter: "C", text: "Shoveling snow is the quickest way for teenagers to earn money." },
            { letter: "D", text: "People who stay indoors during storms are usually unfriendly." }
          ],
          correct: "A"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Sentences 8 and 9 mainly show that Yara —",
          choices: [
            { letter: "A", text: "is worried that the mailbox has been damaged by the plow" },
            { letter: "B", text: "notices details that tell her someone needs help" },
            { letter: "C", text: "wants to finish the block before Kwame gets too tired" },
            { letter: "D", text: "expects Mrs. Halvorsen to pay them double the usual rate" }
          ],
          correct: "B"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 10, Kwame groaned like a door that needed oil is an example of —",
          choices: [
            { letter: "A", text: "a metaphor" },
            { letter: "B", text: "personification" },
            { letter: "C", text: "a simile" },
            { letter: "D", text: "hyperbole" }
          ],
          correct: "C"
        },
        {
          id: "plot",
          sol: "9.RL.1.B",
          stem: "What causes the neighbors in sentence 13 to offer the pair money?",
          choices: [
            { letter: "A", text: "Mrs. Halvorsen tells them about the free shoveling." },
            { letter: "B", text: "Kwame knocks on their doors to advertise the service." },
            { letter: "C", text: "The city plow has not cleared their side of the street." },
            { letter: "D", text: "They watch the pair clear the longest driveway on the block." }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RL.2.C",
          stem: "In sentence 17, Yara calls the long driveway the ad. She most nearly means that it —",
          choices: [
            { letter: "A", text: "cost them more time than it earned" },
            { letter: "B", text: "showed the neighbors what the two could do" },
            { letter: "C", text: "was printed in the local newspaper" },
            { letter: "D", text: "belonged to the owner of the pawn shop" }
          ],
          correct: "B"
        },
        {
          id: "setting",
          sol: "9.RL.3.A",
          stem: "How does the setting in sentences 1 and 2 shape the plot of the story?",
          choices: [
            { letter: "A", text: "The fresh snow creates the chance to earn money for the bike." },
            { letter: "B", text: "The empty street makes Yara nervous about knocking on doors." },
            { letter: "C", text: "The pawn shop's closing time forces the pair to hurry." },
            { letter: "D", text: "The cold weather keeps every neighbor inside all day." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-poem-chain",
      family: "G9",
      title: "Chain and Sprocket",
      kind: "Poetry · 9.RL",
      blurb: "A poem about a bike chain, a Sunday, and an older sister who waits.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The chain came off again on Cedar Hill,<br>" +
        L(2) + "so Sunday finds us upside down in the yard,<br>" +
        L(3) + "the bike on its seat like a beetle on its back,<br>" +
        L(4) + "my sister's hands already black to the wrist.<br>" +
        L(5) + "She does not tell me what to do. She waits.<br>" +
        L(6) + "I feed the chain onto the teeth the way she showed me,<br>" +
        L(7) + "one link at a time, the sprocket taking each bite<br>" +
        L(8) + "as slow and patient as a clock.<br>" +
        L(9) + "The sun climbs the fence. A neighbor's radio<br>" +
        L(10) + "leaks a song through the boards.<br>" +
        L(11) + "When the pedal finally turns, the wheel hums<br>" +
        L(12) + "a note I have never heard it make.<br>" +
        L(13) + "She wipes her hands and says, \"Now you know.\"<br>" +
        L(14) + "I do. My hands are black to the wrist." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best states the poem's central idea?",
          choices: [
            { letter: "A", text: "Learning a skill means being allowed to do it yourself." },
            { letter: "B", text: "Bikes should be repaired only by a trained mechanic." },
            { letter: "C", text: "Sunday chores are more pleasant when the sun is out." },
            { letter: "D", text: "Older siblings enjoy giving orders to younger ones." }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In line 3, the bike is compared to a beetle on its back mainly to show that it is —",
          choices: [
            { letter: "A", text: "small and easy to carry" },
            { letter: "B", text: "flipped over and helpless" },
            { letter: "C", text: "crawling with tiny insects" },
            { letter: "D", text: "shiny and freshly painted" }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Line 5, She does not tell me what to do. She waits, shows that the sister —",
          choices: [
            { letter: "A", text: "is bored by the repair and wants to leave" },
            { letter: "B", text: "does not know how to fix the chain herself" },
            { letter: "C", text: "wants the speaker to learn by doing the work" },
            { letter: "D", text: "is annoyed that the chain came off again" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "The images in lines 9 and 10 (the sun climbing the fence, the radio through the boards) mainly create a mood that is —",
          choices: [
            { letter: "A", text: "tense and hurried" },
            { letter: "B", text: "gloomy and cold" },
            { letter: "C", text: "unhurried and peaceful" },
            { letter: "D", text: "noisy and confusing" }
          ],
          correct: "C"
        },
        {
          id: "word",
          sol: "9.RL.2.C",
          stem: "In line 10, the word leaks most nearly means —",
          choices: [
            { letter: "A", text: "drips like water" },
            { letter: "B", text: "breaks into pieces" },
            { letter: "C", text: "blasts out loudly" },
            { letter: "D", text: "slips through quietly" }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "The poem is told from the point of view of —",
          choices: [
            { letter: "A", text: "the sister, who is teaching the repair" },
            { letter: "B", text: "the younger sibling, who is learning the repair" },
            { letter: "C", text: "a neighbor watching from across the fence" },
            { letter: "D", text: "an outside narrator who knows both siblings' thoughts" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── LEVEL 2 ───────────────────────── */
    {
      id: "g9-rl-barometer",
      family: "G9",
      title: "Rooftop Barometer",
      kind: "Literary · 9.RL",
      blurb: "A homemade weather station, a leak in 5C, and a green notebook.",
      level: 2,
      passage:
        "<p>" + N(1) + "The note on the door was short: ROOF ACCESS CLOSED. REMOVE EQUIPMENT BY FRIDAY. PETROV. " +
        N(2) + "Naledi read it twice, then climbed the last flight anyway. " +
        N(3) + "Her weather station had lived on the far corner of the roof since September: a rain gauge zip-tied to the railing, a thermometer in a slotted white box she had built from a produce crate, and a wind vane made from a coat hanger and a plastic spoon. " +
        N(4) + "Every morning at 6:40 she wrote the numbers in a green notebook. " +
        N(5) + "Mr. Petrov, the superintendent, was already up there, frowning at the spot above the dark stain that had spread across the ceiling of 5C. " +
        N(6) + "\"Water comes in,\" he said, \"and the only new thing on this roof is yours.\" " +
        N(7) + "Naledi felt her argument rise up hot and ready, and she swallowed it. " +
        N(8) + "Instead she opened the notebook to a page of small drawings. " +
        N(9) + "\"Every time it rains, I sketch where the puddles sit,\" she said. \"They never reach my corner. They collect here, around the vent, and this flashing has been cracked since before I set up.\" " +
        N(10) + "She showed him a photo on her phone, dated the second of September, of the same crack. " +
        N(11) + "Mr. Petrov said nothing for a long moment, and the wind vane ticked around to the east. " +
        N(12) + "\"You draw the puddles,\" he said. It was not quite a question. " +
        N(13) + "\"Every rain. Fourteen so far.\" " +
        N(14) + "He crouched, ran his thumb along the split in the flashing, and grunted. " +
        N(15) + "\"Then I have the wrong new thing,\" he said. " +
        N(16) + "He pulled the note off the door on his way down and folded it into his pocket. " +
        N(17) + "On Friday the equipment was still there, and the rain gauge had a new zip tie that Naledi had not put on herself." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best supported by sentences 7 through 10?",
          choices: [
            { letter: "A", text: "Anger is the best tool when someone accuses you unfairly." },
            { letter: "B", text: "Showing proof can accomplish more than arguing." },
            { letter: "C", text: "Adults rarely listen to what teenagers have to say." },
            { letter: "D", text: "Weather cannot be tracked without expensive tools." }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Mr. Petrov in the passage?",
          choices: [
            { letter: "A", text: "He is careless and refuses to look at the roof himself." },
            { letter: "B", text: "He is friendly and has always supported Naledi's project." },
            { letter: "C", text: "He is dishonest and blames Naledi to hide his own mistake." },
            { letter: "D", text: "He is gruff but willing to change his mind when shown facts." }
          ],
          correct: "D"
        },
        {
          id: "ziptie",
          sol: "9.RL.1.B",
          stem: "What does the new zip tie in sentence 17 most likely show?",
          choices: [
            { letter: "A", text: "Mr. Petrov has quietly accepted the station and helped secure it." },
            { letter: "B", text: "Naledi has forgotten which repairs she made herself." },
            { letter: "C", text: "Another tenant has started a project on the roof." },
            { letter: "D", text: "Friday's wind was strong enough to snap the old tie." }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RL.2.C",
          stem: "In sentence 7, the phrase swallowed it most nearly means that Naledi —",
          choices: [
            { letter: "A", text: "drank some water to calm herself down" },
            { letter: "B", text: "held back what she wanted to say" },
            { letter: "C", text: "forgot what she had planned to say" },
            { letter: "D", text: "agreed with Mr. Petrov's accusation" }
          ],
          correct: "B"
        },
        {
          id: "vane",
          sol: "9.RL.2.B",
          stem: "The author includes the wind vane ticking around to the east in sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "prove that Naledi's instruments are not working" },
            { letter: "B", text: "warn that a storm is about to hit the building" },
            { letter: "C", text: "fill the silence and stretch out the tense pause" },
            { letter: "D", text: "explain why the roof access had been closed" }
          ],
          correct: "C"
        },
        {
          id: "setting",
          sol: "9.RL.3.A",
          stem: "The details describing the weather station in sentence 3 (a produce crate, a coat hanger, a plastic spoon) mainly emphasize that —",
          choices: [
            { letter: "A", text: "Naledi built the station herself from ordinary materials" },
            { letter: "B", text: "the station is too fragile to survive a strong storm" },
            { letter: "C", text: "Mr. Petrov supplied the parts from the basement" },
            { letter: "D", text: "the station is dangerous and should be taken down" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-drama-signal",
      family: "G9",
      title: "Morning Signal",
      kind: "Drama · 9.RL",
      blurb: "Two students, one microphone, and an announcement Dev does not want to read.",
      level: 2,
      passage:
        "<p><em>Setting: the student broadcast booth at Ridgeline High, 7:10 a.m. Two microphones, a cracked ON AIR sign, a stack of announcement slips. LUPE adjusts her headset. DEV shuffles the slips.</em></p>" +
        "<p>" + N(1) + "<strong>LUPE</strong>: Thirty seconds. Anything I should know about before we go live? " +
        N(2) + "<strong>DEV</strong> <em>(not looking up)</em>: Lunch menu, the blood drive, and something from the front office. " +
        N(3) + "<strong>LUPE</strong>: Read me the front office one. " +
        N(4) + "<strong>DEV</strong> <em>(aside, to the audience)</em>: I have read it four times. It says the Science Olympiad bus for Saturday is cancelled because the permission forms never reached the office. The forms are in my backpack. They have been in my backpack since Tuesday. " +
        N(5) + "<strong>LUPE</strong>: Dev. The sign is on. " +
        N(6) + "<strong>DEV</strong> <em>(bright, into the microphone)</em>: Good morning, Ridgeline! Today's lunch is chicken bowls, the blood drive runs in the gym until two, and — <em>(He stops.)</em> " +
        N(7) + "<strong>LUPE</strong> <em>(covering her mic, whispering)</em>: And what? " +
        N(8) + "<strong>DEV</strong> <em>(aside)</em>: She has been captain of that team for two years. She built the practice schedule on index cards. " +
        N(9) + "<strong>LUPE</strong>: Dev, we're live. " +
        N(10) + "<strong>DEV</strong> <em>(into the microphone)</em>: And a note about the Science Olympiad bus for Saturday. The forms were due Tuesday, and they never made it to the office, because the person who was supposed to walk them down there, the club treasurer, left them in his backpack. " +
        N(11) + "<em>(LUPE slowly turns to look at him.)</em> " +
        N(12) + "<strong>DEV</strong>: That's me. I'll be in the front office at 7:30 with the forms, and if there is any way to un-cancel a bus, I'll find it. Have a good day, Ridgeline. " +
        N(13) + "<em>(He clicks the microphone off. A long pause.)</em> " +
        N(14) + "<strong>LUPE</strong>: You could have just read the slip. " +
        N(15) + "<strong>DEV</strong>: I could have. " +
        N(16) + "<strong>LUPE</strong> <em>(picking up her bag)</em>: The office is this way. Walk faster." +
        "</p>",
      claims: [
        {
          id: "aside",
          sol: "9.RL.1.D",
          stem: "The playwright uses the aside in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "let the audience know something Lupe does not yet know" },
            { letter: "B", text: "explain the rules of the Science Olympiad competition" },
            { letter: "C", text: "show that Dev is angry at the front office staff" },
            { letter: "D", text: "describe how the broadcast booth is arranged" }
          ],
          correct: "A"
        },
        {
          id: "stagedir",
          sol: "9.RL.1.C",
          stem: "The stage direction in sentence 11, LUPE slowly turns to look at him, mainly shows that Lupe —",
          choices: [
            { letter: "A", text: "has realized who is responsible for the missing forms" },
            { letter: "B", text: "cannot hear Dev clearly through her headset" },
            { letter: "C", text: "is checking whether the ON AIR sign is still lit" },
            { letter: "D", text: "wants Dev to repeat the lunch menu for listeners" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does Dev's choice in sentences 10 through 12 best support?",
          choices: [
            { letter: "A", text: "Bad news should be delivered by someone who is not involved." },
            { letter: "B", text: "Admitting a mistake in public is harder but more honest than hiding it." },
            { letter: "C", text: "Morning announcements should stick to the written script." },
            { letter: "D", text: "A good captain plans every practice on index cards." }
          ],
          correct: "B"
        },
        {
          id: "plot",
          sol: "9.RL.1.B",
          stem: "Lupe's final line in sentence 16 suggests that she —",
          choices: [
            { letter: "A", text: "plans to report Dev to the principal right away" },
            { letter: "B", text: "has decided to quit the Science Olympiad team" },
            { letter: "C", text: "is still upset but is ready to help fix the problem" },
            { letter: "D", text: "believes the bus was never actually cancelled" }
          ],
          correct: "C"
        },
        {
          id: "word",
          sol: "9.RL.2.C",
          stem: "In sentence 6, the stage direction bright most nearly means that Dev speaks —",
          choices: [
            { letter: "A", text: "in a loud and angry voice" },
            { letter: "B", text: "in a cheerful, upbeat tone" },
            { letter: "C", text: "with the studio lights turned up" },
            { letter: "D", text: "slowly and very carefully" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          stem: "The tone of the exchange in sentences 14 and 15 is best described as —",
          choices: [
            { letter: "A", text: "loud and furious" },
            { letter: "B", text: "playful and teasing" },
            { letter: "C", text: "formal and official" },
            { letter: "D", text: "quiet and understated" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-poem-trumpet",
      family: "G9",
      title: "The Trumpet Case",
      kind: "Poetry · 9.RL",
      blurb: "A poem about the instrument a brother left behind.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My brother left the trumpet and took the noise.<br>" +
        L(2) + "The case still smells like valve oil and the bus<br>" +
        L(3) + "that carried him to the state competition twice.<br>" +
        L(4) + "I lift it the way you lift a sleeping cat,<br>" +
        L(5) + "afraid of what it might do when it wakes.<br>" +
        L(6) + "The first note comes out sideways, a door<br>" +
        L(7) + "opened on a room where the furniture has moved.<br>" +
        L(8) + "Nobody claps. The dog leaves.<br>" +
        L(9) + "But the mouthpiece is warm now, and warm is a start,<br>" +
        L(10) + "so I play the scale he taped inside the lid<br>" +
        L(11) + "in handwriting that slants the same way mine does.<br>" +
        L(12) + "By the fourth try the note stands up straight.<br>" +
        L(13) + "Down the hall, my mother stops what she is doing.<br>" +
        L(14) + "She does not say his name. She does not need to.<br>" +
        L(15) + "The house has been quiet for a month, and now it isn't." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which idea does the poem develop most fully?",
          choices: [
            { letter: "A", text: "Carrying on what someone left behind can ease their absence." },
            { letter: "B", text: "Instruments are too hard to learn without a teacher." },
            { letter: "C", text: "Parents usually favor the child who leaves home first." },
            { letter: "D", text: "Winning competitions is the main reason to practice." }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In lines 4 and 5, the speaker compares the trumpet to a sleeping cat mainly to suggest that —",
          choices: [
            { letter: "A", text: "the case is soft and covered with fur" },
            { letter: "B", text: "the speaker is nervous about what sound it will make" },
            { letter: "C", text: "the trumpet has not been cleaned in months" },
            { letter: "D", text: "the brother also left a pet behind" }
          ],
          correct: "B"
        },
        {
          id: "imagery",
          sol: "9.RL.2.B",
          stem: "Lines 6 and 7 (a door / opened on a room where the furniture has moved) describe the first note as —",
          choices: [
            { letter: "A", text: "loud enough to wake the whole house" },
            { letter: "B", text: "beautiful and perfectly in tune" },
            { letter: "C", text: "familiar in shape but unsettlingly wrong" },
            { letter: "D", text: "so quiet that no one can hear it" }
          ],
          correct: "C"
        },
        {
          id: "word",
          sol: "9.RL.2.C",
          stem: "In line 12, the note stands up straight most nearly means that the note is —",
          choices: [
            { letter: "A", text: "held for a much longer time" },
            { letter: "B", text: "finally clear and steady" },
            { letter: "C", text: "written on the taped scale" },
            { letter: "D", text: "much higher in pitch" }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Line 11 (handwriting that slants the same way mine does) mainly suggests that the speaker —",
          choices: [
            { letter: "A", text: "copied the scale from a music textbook" },
            { letter: "B", text: "cannot read the brother's messy writing" },
            { letter: "C", text: "plans to rewrite the scale more neatly" },
            { letter: "D", text: "feels a shared likeness with the brother" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "9.RL.1.B",
          stem: "The last line contrasts with line 1 mainly to show that —",
          choices: [
            { letter: "A", text: "the speaker has brought sound back into the house" },
            { letter: "B", text: "the brother has returned home from the competition" },
            { letter: "C", text: "the speaker has decided to give up on the trumpet" },
            { letter: "D", text: "the mother has asked for silence in the hallway" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── LEVEL 3 ───────────────────────── */
    {
      id: "g9-rl-inventory",
      family: "G9",
      title: "Inventory",
      kind: "Literary · 9.RL",
      blurb: "The last night of Ramos Hardware, counted twice.",
      level: 3,
      passage:
        "<p>" + N(1) + "On the last night, my father counted everything twice, as if the numbers might come out different the second time. " +
        N(2) + "Forty-one boxes of wood screws. " +
        N(3) + "Nine cans of the gray primer nobody had bought since the paint store opened out by the highway. " +
        N(4) + "One brass doorknob, the old kind, heavy as a fist, which he set on the counter apart from the rest. " +
        N(5) + "I was supposed to be writing it all down, and I was, but I was also watching him move through the aisles the way he had my whole life, one hand trailing along the shelf edge as though the store were a horse that needed calming. " +
        N(6) + "The closing sale had been the busiest day Ramos Hardware had ever had. " +
        N(7) + "People who had not been in for years came to say they were sorry and left with a full cart. " +
        N(8) + "\"Where were they in March?\" my mother had asked, and my father had only shrugged and bagged their nails. " +
        N(9) + "Now the sign in the window said EVERYTHING MUST GO, and almost everything had, and the emptiness had a sound, a small ringing, like the moment after a bell. " +
        N(10) + "\"Write this one down as not for sale, Ines,\" he said, and slid the doorknob toward me. " +
        N(11) + "\"It's not on the list, Dad.\" " +
        N(12) + "\"It was on the front door when my father bought this place. It's coming home.\" " +
        N(13) + "I wrote it down anyway, under the screws and the primer: one doorknob, brass, not for sale. " +
        N(14) + "He locked the register, though there was nothing in it, and turned off the lights aisle by aisle, the way he always had, so that the dark arrived in order. " +
        N(15) + "At the door he stopped and put his hand flat against the glass where the sign hung. " +
        N(16) + "\"Forty years,\" he said, but he was not saying it to me. " +
        N(17) + "Then he peeled the sign off the glass, folded it small, and we went out into the street." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is most fully developed in the story?",
          choices: [
            { letter: "A", text: "Rituals and small objects help people carry what they cannot keep." },
            { letter: "B", text: "Neighbors who shop elsewhere are to blame when a store closes." },
            { letter: "C", text: "A business that lasts forty years has still been a failure." },
            { letter: "D", text: "Children should take over the family business from their parents." }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because the story is told from Ines's first-person point of view, the reader —",
          choices: [
            { letter: "A", text: "learns exactly what the father is thinking at the door" },
            { letter: "B", text: "must infer the father's feelings from what she sees him do" },
            { letter: "C", text: "hears the customers explain why they shopped elsewhere" },
            { letter: "D", text: "knows why the paint store on the highway succeeded" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "9.RL.1.B",
          stem: "Sentences 6 through 8 present a situation that is ironic because —",
          choices: [
            { letter: "A", text: "the store's most successful day is the day it closes for good" },
            { letter: "B", text: "the mother asks a question that the father cannot hear" },
            { letter: "C", text: "the customers buy nails instead of the gray primer" },
            { letter: "D", text: "the paint store on the highway has also gone out of business" }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 5, comparing the store to a horse that needed calming mainly suggests that the father —",
          choices: [
            { letter: "A", text: "is afraid the shelves might fall over on him" },
            { letter: "B", text: "treats the store as a living thing he cares for" },
            { letter: "C", text: "once worked with animals before opening the store" },
            { letter: "D", text: "is moving too quickly through the aisles" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          stem: "The description of the emptiness in sentence 9 (a small ringing, like the moment after a bell) creates a tone that is —",
          choices: [
            { letter: "A", text: "cheerful and hopeful" },
            { letter: "B", text: "angry and bitter" },
            { letter: "C", text: "tense and frightened" },
            { letter: "D", text: "hushed and mournful" }
          ],
          correct: "D"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows that the father keeps his routines even when they no longer serve a purpose?",
          choices: [
            { letter: "A", text: "Sentence 1: He counts every item in the store a second time." },
            { letter: "B", text: "Sentence 8: He shrugs and bags the nails for the late customers." },
            { letter: "C", text: "Sentence 14: He locks the empty register and darkens the aisles in order." },
            { letter: "D", text: "Sentence 16: He says Forty years to no one in particular." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-drama-cups",
      family: "G9",
      title: "Every Cup Counts",
      kind: "Drama · 9.RL",
      blurb: "Fourth quarter, cold drizzle, and sixty-eight dollars to go.",
      level: 3,
      passage:
        "<p><em>Setting: a plywood concession stand behind the visitors' bleachers. Fourth quarter, cold drizzle. A cash box, a hot-chocolate urn, a handwritten sign: BAND TRIP — EVERY CUP COUNTS. MARISOL counts bills. OWEN stands at the window, hood up.</em></p>" +
        "<p>" + N(1) + "<strong>OWEN</strong>: Nobody has come by in eleven minutes. I counted. " +
        N(2) + "<strong>MARISOL</strong>: Count the cups instead. How many left? " +
        N(3) + "<strong>OWEN</strong>: Thirty. Marisol, it's drizzling sideways. The only people still in the stands are the kickers' parents. " +
        N(4) + "<strong>MARISOL</strong> <em>(not looking up)</em>: Then the kickers' parents get hot chocolate. " +
        N(5) + "<strong>OWEN</strong>: We're at three hundred and twelve. Mr. Sato said the bus deposit was three-eighty. We were never going to make it in one night. Let's close, and I'll help you carry the urn. " +
        N(6) + "<strong>MARISOL</strong> <em>(aside, to the audience)</em>: Here is the thing I have not told him. On Wednesday, Mr. Sato asked me straight out whether the stand would cover the deposit, and I said yes. I said it the way you say yes when the other person looks tired. He cancelled the second fundraiser because of me. " +
        N(7) + "<strong>OWEN</strong>: Marisol. " +
        N(8) + "<strong>MARISOL</strong>: Sixty-eight dollars. That's thirty-four cups. We have thirty. " +
        N(9) + "<strong>OWEN</strong>: So even if every kicker's parent bought one — " +
        N(10) + "<strong>MARISOL</strong>: I'll charge the last four at three dollars. " +
        N(11) + "<strong>OWEN</strong> <em>(studying her)</em>: You already told him we made it. " +
        N(12) + "<strong>MARISOL</strong> <em>(a beat)</em>: I told him we would. " +
        N(13) + "<em>(A drum cadence starts, far off. The band is leaving the field. OWEN looks toward the sound, then at the sign, then pulls his hood down.)</em> " +
        N(14) + "<strong>OWEN</strong>: Eighty kids in wet uniforms, about to walk right past a hot-chocolate window. " +
        N(15) + "<strong>MARISOL</strong>: Owen, they're the band. They shouldn't have to pay for their own — " +
        N(16) + "<strong>OWEN</strong> <em>(leaning out the window, hands cupped)</em>: TWO DOLLARS A CUP! EVERY CUP COUNTS! <em>(to MARISOL)</em> They will if you tell them why. " +
        N(17) + "<em>(MARISOL stares at him, then picks up the ladle.)</em>" +
        "</p>",
      claims: [
        {
          id: "irony",
          sol: "9.RL.1.D",
          stem: "The aside in sentence 6 creates dramatic irony because —",
          choices: [
            { letter: "A", text: "Owen already knows what Marisol promised Mr. Sato" },
            { letter: "B", text: "Mr. Sato is listening from just outside the stand" },
            { letter: "C", text: "the audience is told exactly how the band trip will end" },
            { letter: "D", text: "the audience learns why Marisol will not close before Owen does" }
          ],
          correct: "D"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "In sentence 6, I said it the way you say yes when the other person looks tired reveals that Marisol —",
          choices: [
            { letter: "A", text: "said yes out of sympathy rather than certainty" },
            { letter: "B", text: "was too tired to understand the question" },
            { letter: "C", text: "believes Mr. Sato was trying to trick her" },
            { letter: "D", text: "planned from the start to break her promise" }
          ],
          correct: "A"
        },
        {
          id: "plot",
          sol: "9.RL.1.B",
          stem: "What causes Owen to change his mind in sentences 13 and 14?",
          choices: [
            { letter: "A", text: "Marisol finally admits what she told Mr. Sato on Wednesday." },
            { letter: "B", text: "He hears the band leaving the field and sees new customers coming." },
            { letter: "C", text: "The drizzle stops and the parents return to the stands." },
            { letter: "D", text: "He recounts the cash box and finds a mistake in the total." }
          ],
          correct: "B"
        },
        {
          id: "stagedir",
          sol: "9.RL.1.D",
          stem: "The stage direction in sentence 13 mainly serves to —",
          choices: [
            { letter: "A", text: "show that the football game has ended in a loss" },
            { letter: "B", text: "describe the weather in more detail for the reader" },
            { letter: "C", text: "introduce the sound that turns the scene toward a solution" },
            { letter: "D", text: "explain why the cash box holds so little money" }
          ],
          correct: "C"
        },
        {
          id: "beat",
          sol: "9.RL.2.C",
          stem: "In sentence 12, the stage direction a beat indicates that Marisol —",
          choices: [
            { letter: "A", text: "taps the counter in time with the drums" },
            { letter: "B", text: "pauses briefly before she answers" },
            { letter: "C", text: "raises her voice sharply at Owen" },
            { letter: "D", text: "slams the cash box shut in frustration" }
          ],
          correct: "B"
        },
        {
          id: "setting",
          sol: "9.RL.3.A",
          stem: "The details in the opening stage direction (fourth quarter, cold drizzle, a handwritten sign) mainly —",
          choices: [
            { letter: "A", text: "create pressure by showing time and customers running out" },
            { letter: "B", text: "suggest that the stand is well funded and professionally run" },
            { letter: "C", text: "explain why Mr. Sato cancelled the second fundraiser" },
            { letter: "D", text: "show that the visiting team is expected to win the game" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
