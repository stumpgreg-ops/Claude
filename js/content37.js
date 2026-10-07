/* SOL Labyrinth — Grade 9 medium packs (VA 9.RL / 9.RI / 9.RV / 9.DSR), expansion file content37.
 * 19 medium texts (170–290 words; poems 12–16 lines; paired texts 110–150 words each).
 * Topics: photography, a school newspaper, solar and wind energy, deep-sea exploration.
 * Original text only; no VDOE / copyrighted material. Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1. Literary · photography ───────────── */
    {
      id: "g9-rl-c37-darkroom",
      family: "G9",
      title: "The Darkroom Timer",
      kind: "Literary · 9.RL",
      blurb: "Imani prints her first photograph and learns to wait for it.",
      level: 1,
      passage:
        "<p>" + N(1) + "The community darkroom smelled like vinegar and old pennies, and Imani had been standing in its red light for almost an hour. " +
        N(2) + "Her first roll of film hung on a clothesline above the sink, thirty-six tiny squares she could barely read. " +
        N(3) + "Mr. Okonkwo, who ran the Saturday class, tapped the timer on the counter. " +
        N(4) + "\"Eight seconds for this one,\" he said. \"Then the developer, and then you wait.\" " +
        N(5) + "Imani counted the seconds out loud anyway, because she did not trust the timer. " +
        N(6) + "She slid the blank paper into the tray and rocked it gently, the way he had shown her. " +
        N(7) + "Nothing happened. " +
        N(8) + "She rocked it again, and still the paper stayed as white as a dinner plate. " +
        N(9) + "Her stomach sank; she was sure she had ruined the picture of her grandmother's hands. " +
        N(10) + "\"Patience is part of the chemistry,\" Mr. Okonkwo said, not even looking up. " +
        N(11) + "Then, slowly, a gray shadow rose from the paper, like a face coming up through water. " +
        N(12) + "Knuckles appeared, then the ring her grandmother never took off, then the thin lines across each finger. " +
        N(13) + "Imani forgot to count. " +
        N(14) + "When the image was finished, she lifted it with the tongs and held it under the faucet longer than she needed to. " +
        N(15) + "\"You can take it home next week, once it dries,\" Mr. Okonkwo said. " +
        N(16) + "Imani nodded, but she stayed by the sink a while longer, watching the water run over the hands she had known all her life." +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Imani counts the seconds out loud in sentence 5 because she —",
          choices: [
            { letter: "A", text: "wants Mr. Okonkwo to notice how carefully she works" },
            { letter: "B", text: "has been told that the darkroom timer is broken" },
            { letter: "C", text: "is anxious about getting each step exactly right" },
            { letter: "D", text: "is trying to lead the rest of the Saturday class" }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 11, the comparison to a face coming up through water mainly suggests that the picture —",
          choices: [
            { letter: "A", text: "appears gradually, as if surfacing from somewhere hidden" },
            { letter: "B", text: "has been damaged by too much water in the tray" },
            { letter: "C", text: "shows a person swimming in a lake or a pool" },
            { letter: "D", text: "looks blurry because Imani moved the camera" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does the story about Imani's first print best develop?",
          choices: [
            { letter: "A", text: "Old ways of making pictures are better than new ones." },
            { letter: "B", text: "A skilled teacher should explain every step twice." },
            { letter: "C", text: "Family photographs matter less than family members." },
            { letter: "D", text: "Some worthwhile results appear only with patience." }
          ],
          correct: "D"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Readers can infer from sentence 9 that the photograph of her grandmother's hands —",
          choices: [
            { letter: "A", text: "is the only picture Imani took on the whole roll" },
            { letter: "B", text: "is especially important to Imani personally" },
            { letter: "C", text: "was taken by Mr. Okonkwo as a class example" },
            { letter: "D", text: "will be entered in a photo contest next week" }
          ],
          correct: "B"
        },
        {
          id: "phrase",
          sol: "9.RL.2.C",
          stem: "Mr. Okonkwo's remark in sentence 10, Patience is part of the chemistry, most nearly means that —",
          choices: [
            { letter: "A", text: "waiting is a needed step, not a sign of failure" },
            { letter: "B", text: "Imani should study chemistry before taking photos" },
            { letter: "C", text: "the developer in the tray is missing an ingredient" },
            { letter: "D", text: "the class will run late because Imani is so slow" }
          ],
          correct: "A"
        },
        {
          id: "craft",
          sol: "9.RL.3.A",
          stem: "The author places the very short sentence 13, Imani forgot to count, right after the image appears mainly to show that —",
          choices: [
            { letter: "A", text: "the darkroom timer has finally stopped working" },
            { letter: "B", text: "Imani's worry has given way to quiet wonder" },
            { letter: "C", text: "Mr. Okonkwo has taken over the counting for her" },
            { letter: "D", text: "the print needed far fewer seconds than planned" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────── 2. Literary · school newspaper ───────────── */
    {
      id: "g9-rl-c37-correction",
      family: "G9",
      title: "Page Three",
      kind: "Literary · 9.RL",
      blurb: "A student editor gets a goal scorer wrong and argues about where the fix belongs.",
      level: 2,
      passage:
        "<p>" + N(1) + "The Ridgeline Record came out every other Friday, and by 7:40 a.m. Mateo Reyes had already seen the mistake three times. " +
        N(2) + "In his story about the soccer team's playoff win, he had given the winning goal to Lucia Ortiz. " +
        N(3) + "It had been scored by Hana Sato, who was standing at the trophy case reading the paper with a face that gave away nothing. " +
        N(4) + "Mateo ducked into the newspaper office and shut the door. " +
        N(5) + "Ms. Brandt, the adviser, was already at her desk with a red pen and a cup of tea. " +
        N(6) + "\"We run corrections on page three,\" she said before he could speak. \"Small box, bottom corner. That's the policy.\" " +
        N(7) + "\"Nobody reads page three,\" Mateo said. " +
        N(8) + "\"That's sort of the point of the policy,\" she answered, but she was smiling. " +
        N(9) + "He thought about the box, a little gray stamp that would say the paper regretted the error. " +
        N(10) + "Then he thought about Hana, who had practiced penalty kicks alone after dark all October while the rest of the team went home. " +
        N(11) + "His mistake had been on the front page, where everyone saw it. " +
        N(12) + "\"Then the fix should be where the mistake was,\" he said. " +
        N(13) + "Ms. Brandt set down her pen. " +
        N(14) + "She did not say yes right away; she asked him to write it first and show her. " +
        N(15) + "Mateo spent his lunch drafting four sentences, crossing out every one that sounded like an excuse. " +
        N(16) + "The final version named Hana, named his error, and said nothing at all about deadlines. " +
        N(17) + "Two weeks later it ran across the top of page one, and Hana taped a copy inside her locker." +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Mateo in the story about the Ridgeline Record?",
          choices: [
            { letter: "A", text: "He is careless and quick to blame his adviser." },
            { letter: "B", text: "He is responsible and wants the fix to match the error." },
            { letter: "C", text: "He is shy and avoids speaking to Hana about it." },
            { letter: "D", text: "He is stubborn and refuses to follow any policy." }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Readers can best infer that remembering Hana's practices in sentence 10 makes Mateo feel that —",
          choices: [
            { letter: "A", text: "she earned the credit, so the error is not minor" },
            { letter: "B", text: "she should have told him who scored the goal" },
            { letter: "C", text: "the team ought to practice more often after dark" },
            { letter: "D", text: "her teammates were unfair to leave her alone" }
          ],
          correct: "A"
        },
        {
          id: "dialogue",
          sol: "9.RL.1.D",
          stem: "The dialogue between Mateo and Ms. Brandt in sentences 6–8 reveals that Ms. Brandt —",
          choices: [
            { letter: "A", text: "dislikes Mateo and hopes his story fails" },
            { letter: "B", text: "does not believe anyone reads the paper" },
            { letter: "C", text: "states the rule but is open to his view" },
            { letter: "D", text: "thinks mistakes should never be corrected" }
          ],
          correct: "C"
        },
        {
          id: "phrase",
          sol: "9.RL.2.C",
          stem: "In sentence 3, the phrase a face that gave away nothing suggests that Hana —",
          choices: [
            { letter: "A", text: "had not yet turned to the sports page" },
            { letter: "B", text: "showed no clear reaction to the mistake" },
            { letter: "C", text: "was planning to give her paper away" },
            { letter: "D", text: "did not recognize her own name in print" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "The author ends with Hana taping the correction inside her locker (sentence 17) mainly to show that —",
          choices: [
            { letter: "A", text: "Mateo's choice to fix the error openly mattered to her" },
            { letter: "B", text: "Hana plans to complain to the adviser about the story" },
            { letter: "C", text: "the newspaper had very few copies left over that week" },
            { letter: "D", text: "the correction ran later than the policy usually allows" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best supported by Mateo's decision about where to print the correction?",
          choices: [
            { letter: "A", text: "School newspapers should stop printing sports stories." },
            { letter: "B", text: "Rules are meant to be broken whenever it is possible." },
            { letter: "C", text: "Teachers know best, so students should never argue." },
            { letter: "D", text: "Owning a mistake fully means correcting it openly." }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────── 3. Literary · wind energy ───────────── */
    {
      id: "g9-rl-c37-turbine-hill",
      family: "G9",
      title: "Turbine Hill",
      kind: "Literary · 9.RL",
      blurb: "Wren returns to her grandfather's hill and finds three wind turbines on it.",
      level: 3,
      passage:
        "<p>" + N(1) + "For eleven summers the top of Kessler Hill had belonged to Wren and her grandfather, and to the wind that pushed their kites so high the strings sang. " +
        N(2) + "Now three white towers stood there, each taller than the grain elevator in town, and their blades turned with a slow, heavy patience. " +
        N(3) + "\"You rented out the sky,\" Wren said when she climbed out of the truck. " +
        N(4) + "Her grandfather laughed, but not very hard. " +
        N(5) + "He had signed the lease with the power company in March, after the second dry year in a row had left the soybeans thin and yellow. " +
        N(6) + "The payments, he explained, would keep the farm in the family without his having to sell the lower fields. " +
        N(7) + "Wren knew all of this; she had read the letters on the kitchen table. " +
        N(8) + "Knowing it did not make the hill look less like a stranger's yard. " +
        N(9) + "They walked to the old fence post where they used to launch the kites. " +
        N(10) + "The nearest turbine made a sound like someone breathing in a large, quiet room. " +
        N(11) + "Her grandfather put his hand flat against the wind as though he were feeling for a fever. " +
        N(12) + "\"Same wind,\" he said. \"Northwest, steady. It never cared who was standing up here.\" " +
        N(13) + "Wren looked up at the blades and, for the first time, saw that they leaned into the gusts exactly the way her kites had. " +
        N(14) + "She did not forgive the towers all at once. " +
        N(15) + "But on the drive home she rolled the window down and let the wind she knew fill the truck." +
        "</p>",
      claims: [
        {
          id: "tone",
          sol: "9.RL.2.B",
          stem: "In sentence 3, Wren's remark You rented out the sky mainly conveys a tone that is —",
          choices: [
            { letter: "A", text: "playful and admiring" },
            { letter: "B", text: "accusing and hurt" },
            { letter: "C", text: "confused and curious" },
            { letter: "D", text: "calm and approving" }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Based on sentences 5 and 6, readers can infer that Wren's grandfather signed the lease mainly because —",
          choices: [
            { letter: "A", text: "he no longer enjoyed flying kites on the hill" },
            { letter: "B", text: "the power company threatened to buy the hill" },
            { letter: "C", text: "hard seasons had put the farm itself at risk" },
            { letter: "D", text: "Wren had asked him to try something new" }
          ],
          correct: "C"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          stem: "How does the changed setting on Kessler Hill affect Wren early in the story?",
          choices: [
            { letter: "A", text: "It makes a familiar place feel foreign to her." },
            { letter: "B", text: "It makes her proud of her grandfather's work." },
            { letter: "C", text: "It makes her eager to study wind engineering." },
            { letter: "D", text: "It makes her afraid of the height of the towers." }
          ],
          correct: "A"
        },
        {
          id: "fever",
          sol: "9.RL.2.A",
          stem: "In sentence 11, the grandfather pressing his hand against the wind as though he were feeling for a fever suggests that he —",
          choices: [
            { letter: "A", text: "worries that the wind has grown dangerous" },
            { letter: "B", text: "thinks Wren is coming down with a cold" },
            { letter: "C", text: "wants to warm his hand on a chilly day" },
            { letter: "D", text: "tests the wind with careful, familiar attention" }
          ],
          correct: "D"
        },
        {
          id: "kites",
          sol: "9.RV.1.F",
          stem: "In sentence 13, Wren sees the blades lean into the gusts the way her kites had. This comparison mainly shows that she —",
          choices: [
            { letter: "A", text: "begins to see a link between the old hill and the new" },
            { letter: "B", text: "decides the turbines are more beautiful than kites" },
            { letter: "C", text: "plans to fly her kites near the turbines once again" },
            { letter: "D", text: "realizes the turbines will be taken down someday" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best supported by the ending of Turbine Hill?",
          choices: [
            { letter: "A", text: "Families should never sell or rent their farmland." },
            { letter: "B", text: "Machines will always ruin the beauty of nature." },
            { letter: "C", text: "Something essential can last when a place changes." },
            { letter: "D", text: "Young people adapt to change faster than adults." }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────── 4. Literary · deep-sea exploration ───────────── */
    {
      id: "g9-rl-c37-rov-feed",
      family: "G9",
      title: "Screen Three",
      kind: "Literary · 9.RL",
      blurb: "An intern on a research ship spots something the scientists miss.",
      level: 2,
      passage:
        "<p>" + N(1) + "The control room of the research ship Meridian was dark except for eleven screens, and on every one of them the bottom of the sea crawled past at the speed of a slow walk. " +
        N(2) + "Amara Nwosu, a summer intern, had one job: to type the time whenever a scientist said \"mark.\" " +
        N(3) + "For two hours the scientists had said it mostly about rocks. " +
        N(4) + "The camera on the remotely operated vehicle, two thousand meters below, lit a circle of gray mud and nothing else. " +
        N(5) + "Amara's coffee had gone cold, and her typing had become as automatic as blinking. " +
        N(6) + "Then, at the edge of the third screen, a pale shape moved against the current. " +
        N(7) + "She waited for someone to say \"mark.\" " +
        N(8) + "No one did; the pilot, Dr. Halvorsen, was steering around a boulder, and the others were watching the depth gauge. " +
        N(9) + "Amara's hand hovered over the keyboard. " +
        N(10) + "She was the youngest person in the room by fifteen years, and nobody had asked her opinion all week. " +
        N(11) + "\"Sorry, screen three, lower left,\" she said, so quietly that she had to say it again. " +
        N(12) + "Dr. Halvorsen backed the vehicle up and swung the lights. " +
        N(13) + "Curled against a ledge was an octopus, white as paper, wrapped around a cluster of eggs no bigger than grains of rice. " +
        N(14) + "The room went silent, and then everyone started talking at once. " +
        N(15) + "When the dive ended, Amara opened the log to check her times. " +
        N(16) + "Beside the entry for 14:32, someone had typed: Spotted by A. Nwosu." +
        "</p>",
      claims: [
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "The details in sentences 3–5 about rocks, gray mud, and cold coffee mainly create a mood that is —",
          choices: [
            { letter: "A", text: "tense and frightening" },
            { letter: "B", text: "dull and routine" },
            { letter: "C", text: "cheerful and lively" },
            { letter: "D", text: "sad and lonely" }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Sentences 10 and 11 show that Amara —",
          choices: [
            { letter: "A", text: "feels unsure of her place but speaks up anyway" },
            { letter: "B", text: "wants the scientists to give her a harder job" },
            { letter: "C", text: "is annoyed that the pilot steered so slowly" },
            { letter: "D", text: "talks loudly so that everyone will notice her" }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Readers can best infer that no one says mark in sentence 8 because the scientists —",
          choices: [
            { letter: "A", text: "had already seen the shape and found it dull" },
            { letter: "B", text: "did not want an intern to receive the credit" },
            { letter: "C", text: "were waiting for the dive to end for the day" },
            { letter: "D", text: "were focused on other tasks at that moment" }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because the story aboard the Meridian is told closely through Amara's point of view, the reader —",
          choices: [
            { letter: "A", text: "learns what Dr. Halvorsen privately thinks of her" },
            { letter: "B", text: "sees the dive only through the camera's single eye" },
            { letter: "C", text: "shares her hesitation in the moments before she speaks" },
            { letter: "D", text: "knows exactly who wrote the note in the log at the end" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "The author ends with the note beside the entry for 14:32 (sentence 16) mainly to show that —",
          choices: [
            { letter: "A", text: "Amara made an error in the times she recorded" },
            { letter: "B", text: "Amara's contribution was recognized quietly" },
            { letter: "C", text: "the scientists forgot to say mark at 14:32" },
            { letter: "D", text: "the dive ended earlier than had been planned" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does the story about Amara's dive log best develop?",
          choices: [
            { letter: "A", text: "Careful attention can matter even in a small role." },
            { letter: "B", text: "Deep-sea exploration costs too much to be worth it." },
            { letter: "C", text: "The youngest person in a group should stay quiet." },
            { letter: "D", text: "Scientists rarely share credit with their helpers." }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────── 5. Poetry · photography ───────────── */
    {
      id: "g9-rl-c37-long-exposure",
      family: "G9",
      title: "Long Exposure",
      kind: "Poetry · 9.RL",
      blurb: "Fourteen lines about a thirty-second photograph of a city at night.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "I set the camera on the bridge rail,<br>" +
        L(2) + "open the shutter, and count to thirty.<br>" +
        L(3) + "Below me, traffic pours toward the tunnel,<br>" +
        L(4) + "headlights stretching into rivers of gold.<br>" +
        L(5) + "A jogger crosses, and the picture forgets her;<br>" +
        L(6) + "she moves too fast to leave a trace.<br>" +
        L(7) + "A pigeon shuffles once, and is gone.<br>" +
        L(8) + "Only the slow things stay: the lamppost,<br>" +
        L(9) + "the stone lions, the moon hung like a coin,<br>" +
        L(10) + "the old man fishing who has not moved all hour.<br>" +
        L(11) + "When I check the screen, the city glows,<br>" +
        L(12) + "bright and nearly empty, as if it had been waiting.<br>" +
        L(13) + "I think of how I hurry through my days<br>" +
        L(14) + "and wonder what the world has never seen of me." +
        "</p>",
      claims: [
        {
          id: "metaphor",
          sol: "9.RL.2.A",
          stem: "In line 4, describing headlights as rivers of gold mainly shows that in the photograph the moving cars —",
          choices: [
            { letter: "A", text: "appear as long, flowing streaks of light" },
            { letter: "B", text: "have been painted gold for a city parade" },
            { letter: "C", text: "are stuck in water flooding the tunnel" },
            { letter: "D", text: "are too dim to show up in the picture" }
          ],
          correct: "A"
        },
        {
          id: "forgets",
          sol: "9.RL.2.C",
          stem: "In line 5 of Long Exposure, the picture forgets her most nearly means that the jogger —",
          choices: [
            { letter: "A", text: "trips and falls while crossing the bridge" },
            { letter: "B", text: "is ignored by the speaker on purpose" },
            { letter: "C", text: "forgets that her picture is being taken" },
            { letter: "D", text: "leaves no image in the finished photograph" }
          ],
          correct: "D"
        },
        {
          id: "speaker",
          sol: "9.RL.3.B",
          stem: "The poem Long Exposure is told from the point of view of —",
          choices: [
            { letter: "A", text: "a jogger running across the bridge" },
            { letter: "B", text: "a photographer making a slow exposure" },
            { letter: "C", text: "an old man fishing beside the lions" },
            { letter: "D", text: "a driver heading toward the tunnel" }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "In lines 11 and 12, the city that glows bright and nearly empty, as if it had been waiting, creates a mood that is —",
          choices: [
            { letter: "A", text: "angry and crowded" },
            { letter: "B", text: "bored and impatient" },
            { letter: "C", text: "hushed and dreamlike" },
            { letter: "D", text: "frantic and noisy" }
          ],
          correct: "C"
        },
        {
          id: "shift",
          sol: "9.RL.3.A",
          stem: "How do lines 13 and 14 differ from lines 1–12 of Long Exposure?",
          choices: [
            { letter: "A", text: "They turn from the scene to the speaker's own life." },
            { letter: "B", text: "They list the camera's settings in technical detail." },
            { letter: "C", text: "They return to the jogger to show where she went." },
            { letter: "D", text: "They shift from the night to the next sunrise." }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of Long Exposure?",
          choices: [
            { letter: "A", text: "Cities are most beautiful when they are empty." },
            { letter: "B", text: "Night photography needs very costly equipment." },
            { letter: "C", text: "Birds and animals avoid busy bridges after dark." },
            { letter: "D", text: "Rushing through life can keep us from being seen." }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────── 6. Poetry · deep-sea exploration ───────────── */
    {
      id: "g9-rl-c37-lamp",
      family: "G9",
      title: "What the Lamp Finds",
      kind: "Poetry · 9.RL",
      blurb: "A submersible pilot describes the deep sea in fifteen lines.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Two miles down, the dark is not a color;<br>" +
        L(2) + "it is a weight, a held breath, a closed door.<br>" +
        L(3) + "Our lamp pushes a small room into it,<br>" +
        L(4) + "and the room travels with us, and nothing else.<br>" +
        L(5) + "Here, a field of tube worms, red as warnings,<br>" +
        L(6) + "sways at the lip of a chimney breathing smoke.<br>" +
        L(7) + "Here, a fish with no eyes turns its pale side<br>" +
        L(8) + "the way a sleeper turns away from morning.<br>" +
        L(9) + "Nothing here has waited for us.<br>" +
        L(10) + "Nothing here has missed the sun.<br>" +
        L(11) + "We came with cameras and careful names,<br>" +
        L(12) + "the way guests arrive with gifts at a house<br>" +
        L(13) + "that was full long before they knocked.<br>" +
        L(14) + "We switch the lamp off once, to listen.<br>" +
        L(15) + "The dark closes, and goes on without us." +
        "</p>",
      claims: [
        {
          id: "dark",
          sol: "9.RL.2.A",
          stem: "In lines 1 and 2, the speaker calls the dark a weight, a held breath, a closed door mainly to suggest that the darkness —",
          choices: [
            { letter: "A", text: "can be measured by instruments aboard the sub" },
            { letter: "B", text: "feels heavy, total, and cut off from the surface" },
            { letter: "C", text: "makes the pilots sleepy during the long descent" },
            { letter: "D", text: "will lift soon once the sun rises above them" }
          ],
          correct: "B"
        },
        {
          id: "warnings",
          sol: "9.RL.2.B",
          stem: "The phrase red as warnings in line 5 adds to the poem a feeling of —",
          choices: [
            { letter: "A", text: "comfort and safety" },
            { letter: "B", text: "quiet boredom" },
            { letter: "C", text: "cheerful celebration" },
            { letter: "D", text: "unease and strangeness" }
          ],
          correct: "D"
        },
        {
          id: "repeat",
          sol: "9.RL.2.C",
          stem: "The poet repeats Nothing here at the start of lines 9 and 10 most likely to —",
          choices: [
            { letter: "A", text: "stress that deep-sea life is complete without people" },
            { letter: "B", text: "list the dangers the pilots face on every dive" },
            { letter: "C", text: "show that the speaker is running out of things to say" },
            { letter: "D", text: "suggest that the sea floor holds no living things" }
          ],
          correct: "A"
        },
        {
          id: "guests",
          sol: "9.RV.1.F",
          stem: "In lines 12 and 13, comparing the explorers to guests at a house that was full long before they knocked suggests that the explorers —",
          choices: [
            { letter: "A", text: "are intruders who should turn back at once" },
            { letter: "B", text: "have brought gifts to trade with the creatures" },
            { letter: "C", text: "are visitors to a world that already has owners" },
            { letter: "D", text: "have built a new home for animals on the floor" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "The poem What the Lamp Finds ends with the lamp switched off (lines 14 and 15) mainly to —",
          choices: [
            { letter: "A", text: "show that the submersible has lost all of its power" },
            { letter: "B", text: "reveal that the dive was a failure for the scientists" },
            { letter: "C", text: "suggest that the speaker is afraid of the dark water" },
            { letter: "D", text: "emphasize that the deep sea goes on beyond our view" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of What the Lamp Finds?",
          choices: [
            { letter: "A", text: "Exploring can teach humility about our place in nature." },
            { letter: "B", text: "Scientists must give every new species a careful name." },
            { letter: "C", text: "Technology will one day light the entire ocean floor." },
            { letter: "D", text: "The ocean's dangers make exploring it not worth doing." }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────── 7. Drama · school newspaper ───────────── */
    {
      id: "g9-rl-c37-deadline",
      family: "G9",
      title: "Above the Fold",
      kind: "Drama · 9.RL",
      blurb: "An editor and a photographer argue over one picture with twenty minutes to deadline.",
      level: 2,
      passage:
        "<p>" + N(1) + "<em>The newspaper office after school. Page proofs cover a long table. PRIYA sits at the computer; THEO stands by the window, holding his camera.</em></p>" +
        "<p>" + N(2) + "<strong>PRIYA:</strong> The front page is due to the printer at five, and I still have a hole the size of a pizza box above the fold. " +
        N(3) + "<strong>THEO:</strong> I gave you the gym shots. The ceiling tiles, the buckets, the custodian with the mop. " +
        N(4) + "<strong>PRIYA:</strong> Those are fine. <em>(She clicks, and a new photo fills the screen.)</em> This one is better than fine. " +
        N(5) + "<strong>THEO:</strong> <em>(Stepping toward the screen, then stopping.)</em> That one is not for the paper. " +
        N(6) + "<strong>PRIYA:</strong> Theo, it's Nadia standing in two inches of water, holding her soaked art portfolio. It's the whole story in one picture. " +
        N(7) + "<strong>THEO:</strong> <em>(Aside, to the audience.)</em> It is the whole story. That's what scares me. She spent all semester on those drawings, and she doesn't know I took it. " +
        N(8) + "<strong>PRIYA:</strong> We printed the custodian without asking him. " +
        N(9) + "<strong>THEO:</strong> He was doing his job. Nadia was losing something. " +
        N(10) + "<em>Pause. PRIYA looks from the screen to the clock and back.</em> " +
        N(11) + "<strong>PRIYA:</strong> If she says no, I run the buckets, and the front page looks like a plumbing ad. " +
        N(12) + "<strong>THEO:</strong> Then it looks like a plumbing ad. <em>(He picks up his phone.)</em> What's her number? " +
        N(13) + "<strong>PRIYA:</strong> <em>(Sighing, but already scrolling through the staff list.)</em> You have twenty minutes." +
        "</p>",
      claims: [
        {
          id: "aside",
          sol: "9.RL.1.D",
          stem: "The playwright uses Theo's aside in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "explain to the audience how the gym roof leaked" },
            { letter: "B", text: "show that he is proud of his skill with a camera" },
            { letter: "C", text: "reveal a private worry he has not told Priya" },
            { letter: "D", text: "let Priya overhear what he thinks of her plan" }
          ],
          correct: "C"
        },
        {
          id: "stepping",
          sol: "9.RL.3.B",
          stem: "The stage direction in sentence 5, in which Theo steps toward the screen and then stops, mainly reveals that he —",
          choices: [
            { letter: "A", text: "is torn about the photo even before he speaks" },
            { letter: "B", text: "cannot see the photo clearly from the window" },
            { letter: "C", text: "wants Priya to move away from the computer" },
            { letter: "D", text: "has forgotten which photos he gave to Priya" }
          ],
          correct: "A"
        },
        {
          id: "convince",
          sol: "9.RL.1.B",
          stem: "Theo's line in sentence 9 is meant to convince Priya that —",
          choices: [
            { letter: "A", text: "the custodian should also be asked for permission" },
            { letter: "B", text: "Nadia's photo would have to be cropped first" },
            { letter: "C", text: "the gym shots are better than she believes" },
            { letter: "D", text: "the two situations are not really the same" }
          ],
          correct: "D"
        },
        {
          id: "priya",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Priya at the end of the scene, in sentence 13?",
          choices: [
            { letter: "A", text: "She gives in angrily and walks out of the office." },
            { letter: "B", text: "She is frustrated by the delay but goes along." },
            { letter: "C", text: "She decides to run Nadia's photo without asking." },
            { letter: "D", text: "She tells Theo that he is off the paper's staff." }
          ],
          correct: "B"
        },
        {
          id: "pause",
          sol: "9.RL.1.D",
          stem: "The stage direction in sentence 10, a pause as Priya looks from the screen to the clock, mainly serves to —",
          choices: [
            { letter: "A", text: "show Priya weighing her deadline against Theo's point" },
            { letter: "B", text: "signal that the printer has already closed for the day" },
            { letter: "C", text: "suggest that Priya has stopped listening to Theo" },
            { letter: "D", text: "reveal that the clock in the office is running fast" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does the scene between Priya and Theo most clearly develop?",
          choices: [
            { letter: "A", text: "A strong photo is worth any cost to a newspaper." },
            { letter: "B", text: "Deadlines matter more than people's feelings." },
            { letter: "C", text: "Respecting a person can matter more than a story." },
            { letter: "D", text: "Photographers should never shoot their classmates." }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────── 8. Informational · photography ───────────── */
    {
      id: "g9-ri-c37-aperture",
      family: "G9",
      title: "Letting in the Light",
      kind: "Informational · 9.RI",
      blurb: "How the aperture and the shutter decide what a photograph looks like.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every photograph begins with a simple problem: how much light should reach the camera's sensor, and for how long? " +
        N(2) + "Too much light washes a picture out to white, while too little leaves it dark and muddy. " +
        N(3) + "Photographers control this mainly with two tools, the aperture and the shutter. " +
        N(4) + "The aperture is an opening inside the lens that can widen or narrow, much like the pupil of an eye. " +
        N(5) + "In bright sunlight a photographer may set a small aperture, letting in only a thin beam; in a dim gym, a wide one gathers as much light as possible. " +
        N(6) + "The aperture also changes how much of the scene looks sharp. " +
        N(7) + "A wide opening keeps the subject crisp but blurs the background into soft color, which is why portraits often look as if the person is standing in front of a painted wall. " +
        N(8) + "A narrow opening keeps both near and far objects in focus, a choice landscape photographers often prefer. " +
        N(9) + "The shutter, meanwhile, decides how long the light gets in. " +
        N(10) + "A fast shutter, open for one five-hundredth of a second, can freeze a runner in midair. " +
        N(11) + "A slow shutter, open for a full second or more, turns moving water into a smooth white mist. " +
        N(12) + "Because these two tools work together, changing one usually means adjusting the other. " +
        N(13) + "Learning to balance them is the first real step from taking snapshots to making photographs." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "What is the main idea of the passage about the aperture and the shutter?",
          choices: [
            { letter: "A", text: "Portraits look best when the background is blurred into color." },
            { letter: "B", text: "Photographers control light with two tools that work together." },
            { letter: "C", text: "A fast shutter is the most important setting for sports photos." },
            { letter: "D", text: "Cameras work in almost the same way that human eyes do." }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to the passage, why might a photographer choose a small aperture?",
          choices: [
            { letter: "A", text: "to blur the background behind a portrait" },
            { letter: "B", text: "to gather more light in a dim gymnasium" },
            { letter: "C", text: "to freeze a runner in the middle of a stride" },
            { letter: "D", text: "to limit the light on a bright, sunny day" }
          ],
          correct: "D"
        },
        {
          id: "pupil",
          sol: "9.RI.2.B",
          stem: "The comparison to the pupil of an eye in sentence 4 helps the reader understand that the aperture —",
          choices: [
            { letter: "A", text: "changes size to let in more or less light" },
            { letter: "B", text: "is the most delicate part of any camera" },
            { letter: "C", text: "sees colors the same way a person does" },
            { letter: "D", text: "must be cleaned as gently as an eye is" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "Sentences 9–11 of the passage about camera light are organized mainly by —",
          choices: [
            { letter: "A", text: "listing problems and then their solutions" },
            { letter: "B", text: "telling events in the order they happened" },
            { letter: "C", text: "contrasting fast and slow shutter speeds" },
            { letter: "D", text: "comparing two photographers' opinions" }
          ],
          correct: "C"
        },
        {
          id: "crisp",
          sol: "9.RV.1.C",
          stem: "In sentence 7, the word crisp most nearly means —",
          choices: [
            { letter: "A", text: "cold and fresh" },
            { letter: "B", text: "easily broken" },
            { letter: "C", text: "slightly burned" },
            { letter: "D", text: "clearly defined" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that the aperture affects more than a picture's brightness?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────── 9. Informational · solar energy ───────────── */
    {
      id: "g9-ri-c37-solar-roof",
      family: "G9",
      title: "The Roof That Pays the Bills",
      kind: "Informational · 9.RI",
      blurb: "What happened after 420 solar panels went up on a high school roof.",
      level: 2,
      passage:
        "<p>" + N(1) + "Last August, a crew bolted 420 solar panels to the flat roof of Larkspur High School, and since then the building has quietly become a small power plant. " +
        N(2) + "Each panel is made of dozens of thin cells cut from silicon, the same element found in ordinary sand. " +
        N(3) + "When sunlight strikes a cell, it knocks tiny particles called electrons loose from their atoms. " +
        N(4) + "Metal lines printed on the cell's surface collect those moving electrons, and a flow of electrons is exactly what electricity is. " +
        N(5) + "The current that leaves the roof, however, is not yet ready for the school's lights and computers. " +
        N(6) + "It first passes through a device called an inverter, which converts it into the type of current that wall outlets use. " +
        N(7) + "On a clear afternoon in June, the array produced about 40 percent of the electricity the building used. " +
        N(8) + "On cloudy days in December, that share fell below 10 percent, and the school drew the rest from the regular power grid. " +
        N(9) + "Over its first year, the district estimates, the panels will cut the school's electric bill by about $38,000. " +
        N(10) + "Some science teachers believe the roof could become a teaching tool as well. " +
        N(11) + "A screen in the front lobby now shows how much power the panels are producing each hour, and physics classes have begun graphing the numbers. " +
        N(12) + "\"Students check it the way they check a sports score,\" one teacher said. " +
        N(13) + "Whether the panels will last their promised twenty-five years is something only time can confirm." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about Larkspur High's roof?",
          choices: [
            { letter: "A", text: "Solar cells are made from silicon, which is found in common sand." },
            { letter: "B", text: "Cloudy winter weather makes solar panels nearly useless in December." },
            { letter: "C", text: "The school's panels turn sunlight into usable power and offer other benefits." },
            { letter: "D", text: "Physics classes now graph electricity data instead of reading textbooks." }
          ],
          correct: "C"
        },
        {
          id: "inverter",
          sol: "9.RI.1.B",
          stem: "According to the article, what does the inverter at Larkspur High do?",
          choices: [
            { letter: "A", text: "changes the panels' current into the type outlets use" },
            { letter: "B", text: "collects loose electrons from the surface of each cell" },
            { letter: "C", text: "measures how much power the panels make every hour" },
            { letter: "D", text: "sends extra electricity back to the regular power grid" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "Sentences 2–6 of the article about Larkspur High's roof are organized mainly as —",
          choices: [
            { letter: "A", text: "a comparison of solar power and wind power" },
            { letter: "B", text: "a step-by-step account of how panels make power" },
            { letter: "C", text: "a list of reasons the district chose solar panels" },
            { letter: "D", text: "a problem followed by several possible solutions" }
          ],
          correct: "B"
        },
        {
          id: "estimate",
          sol: "9.RI.1.C",
          stem: "Which sentence from the Larkspur article presents an estimate rather than a measured result?",
          choices: [
            { letter: "A", text: "Sentence 1, about the 420 panels on the roof" },
            { letter: "B", text: "Sentence 7, about the share produced in June" },
            { letter: "C", text: "Sentence 8, about the share on cloudy days" },
            { letter: "D", text: "Sentence 9, about the savings on the bill" }
          ],
          correct: "D"
        },
        {
          id: "quote",
          sol: "9.RI.2.B",
          stem: "The author includes the teacher's quotation in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "show that students have taken a real interest in the data" },
            { letter: "B", text: "argue that sports scores should be shown in the lobby" },
            { letter: "C", text: "prove that the panels will last for twenty-five years" },
            { letter: "D", text: "explain how the inverter changes the type of current" }
          ],
          correct: "A"
        },
        {
          id: "array",
          sol: "9.RV.1.C",
          stem: "In sentence 7, the word array most nearly refers to —",
          choices: [
            { letter: "A", text: "the screen in the front lobby" },
            { letter: "B", text: "the whole set of solar panels" },
            { letter: "C", text: "one thin cell cut from silicon" },
            { letter: "D", text: "the regular electric power grid" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────── 10. Informational · deep-sea exploration ───────────── */
    {
      id: "g9-ri-c37-vents",
      family: "G9",
      title: "Life Without Sunlight",
      kind: "Informational · 9.RI",
      blurb: "A 1977 dive finds crowds of animals where scientists expected almost none.",
      level: 3,
      passage:
        "<p>" + N(1) + "For most of the twentieth century, scientists assumed that the deep ocean floor was close to lifeless. " +
        N(2) + "Sunlight fades to nothing within a thousand meters of the surface, and without light there are no plants; without plants, the reasoning went, there could be very little food. " +
        N(3) + "That assumption collapsed in a single dive in 1977, when researchers in a small submersible reached a volcanic ridge near the Galapagos Islands. " +
        N(4) + "They had come to measure warm water seeping from cracks in the sea floor. " +
        N(5) + "Instead they found crowds: tube worms taller than a person, clams the size of dinner plates, and pale crabs scrambling over the rocks. " +
        N(6) + "The puzzle was what all of these animals were eating. " +
        N(7) + "The answer turned out to be chemistry. " +
        N(8) + "The water rising from the vents is loaded with a dissolved gas called hydrogen sulfide, which smells like rotten eggs and is poisonous to most creatures. " +
        N(9) + "Certain bacteria, however, can use the energy stored in that gas to build food, a process called chemosynthesis. " +
        N(10) + "The tube worms have no mouths at all; billions of these bacteria live inside their bodies and feed them from within. " +
        N(11) + "The discovery widened the definition of where life can exist. " +
        N(12) + "Some scientists now suggest that similar vents on icy moons, such as Jupiter's Europa, might host living things, though no one has yet found evidence of life there. " +
        N(13) + "A ridge most people will never see has changed the questions we ask about the entire universe." +
        "</p>",
      claims: [
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "The article about the 1977 dive is organized mainly as —",
          choices: [
            { letter: "A", text: "a list of deep-sea animals ranked from largest to smallest" },
            { letter: "B", text: "a comparison of two rival teams of ocean scientists" },
            { letter: "C", text: "a set of steps for building a deep-sea submersible" },
            { letter: "D", text: "an old belief, the discovery that upset it, and an explanation" }
          ],
          correct: "D"
        },
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about the vents near the Galapagos?",
          choices: [
            { letter: "A", text: "Hydrogen sulfide smells like rotten eggs and harms most creatures." },
            { letter: "B", text: "Vent communities showed that life can thrive on chemical energy." },
            { letter: "C", text: "Jupiter's moon Europa almost certainly has life near its vents." },
            { letter: "D", text: "Submersibles were first invented to study volcanic ridges." }
          ],
          correct: "B"
        },
        {
          id: "short",
          sol: "9.RI.2.B",
          stem: "The author includes the short sentence 7, The answer turned out to be chemistry, mainly to —",
          choices: [
            { letter: "A", text: "signal the shift from a mystery to its explanation" },
            { letter: "B", text: "suggest that the researchers were chemistry teachers" },
            { letter: "C", text: "show that the dive had failed to find any animals" },
            { letter: "D", text: "introduce a new mystery about the volcanic ridge" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence offers the strongest evidence that the vent animals depend on bacteria for food?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "speculation",
          sol: "9.RI.1.C",
          stem: "Which statement from the vent article is a speculation rather than a confirmed finding?",
          choices: [
            { letter: "A", text: "Tube worms have no mouths and are fed by bacteria inside them." },
            { letter: "B", text: "Similar vents on icy moons might host living things." },
            { letter: "C", text: "Sunlight fades to nothing within a thousand meters of the surface." },
            { letter: "D", text: "Certain bacteria use the energy in hydrogen sulfide to build food." }
          ],
          correct: "B"
        },
        {
          id: "collapsed",
          sol: "9.RV.1.C",
          stem: "In sentence 3, the word collapsed most nearly means —",
          choices: [
            { letter: "A", text: "fell into the sea" },
            { letter: "B", text: "was slowly repaired" },
            { letter: "C", text: "became more popular" },
            { letter: "D", text: "was proven wrong" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────── 11. Informational · wind energy ───────────── */
    {
      id: "g9-ri-c37-offshore",
      family: "G9",
      title: "Building Wind at Sea",
      kind: "Informational · 9.RI",
      blurb: "Why engineers put giant turbines miles out in the ocean, and how they get them there.",
      level: 1,
      passage:
        "<p>" + N(1) + "Wind blows harder and more steadily over the ocean than over land, because there are no hills, trees, or buildings to slow it down. " +
        N(2) + "That is why engineers have begun building wind farms several miles off the coast. " +
        N(3) + "An offshore turbine is enormous. " +
        N(4) + "Its tower can rise more than 150 meters above the water, and each of its three blades is longer than a football field. " +
        N(5) + "Getting such a machine to sea takes careful planning. " +
        N(6) + "First, a special ship drives a steel foundation deep into the sea floor, using a hammer that can strike with the force of several thousand tons. " +
        N(7) + "Next, cranes on a second vessel lift the tower sections into place one at a time. " +
        N(8) + "Finally, workers attach the blades, a job that can only be done on calm days because a gust could swing a blade like a giant weather vane. " +
        N(9) + "Once running, the turbines send their power to shore through cables buried under the sea floor. " +
        N(10) + "Offshore farms do face challenges. " +
        N(11) + "Salt water rusts metal, so the towers need special coatings, and repair crews must travel by boat or helicopter. " +
        N(12) + "Some coastal residents also worry about how the turbines will look from the beach. " +
        N(13) + "Even so, a single large offshore turbine can produce enough electricity in a year to power several thousand homes." +
        "</p>",
      claims: [
        {
          id: "why",
          sol: "9.RI.1.B",
          stem: "According to the passage, why is wind stronger over the ocean than over land?",
          choices: [
            { letter: "A", text: "Ocean water is warmer than the land nearby." },
            { letter: "B", text: "Nothing on the open sea slows the wind down." },
            { letter: "C", text: "Turbines at sea create extra wind as they spin." },
            { letter: "D", text: "Storms form only over deep stretches of ocean." }
          ],
          correct: "B"
        },
        {
          id: "sequence",
          sol: "9.RI.2.A",
          stem: "Sentences 6–8 of the offshore wind passage are organized mainly as —",
          choices: [
            { letter: "A", text: "a comparison of land and sea turbines" },
            { letter: "B", text: "a problem followed by its solution" },
            { letter: "C", text: "a sequence of steps in building a turbine" },
            { letter: "D", text: "a list of complaints from coastal residents" }
          ],
          correct: "C"
        },
        {
          id: "vane",
          sol: "9.RI.2.B",
          stem: "The author compares a blade to a giant weather vane in sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "show why blades are attached only in calm weather" },
            { letter: "B", text: "explain how a turbine tells which way wind blows" },
            { letter: "C", text: "suggest that turbines are used to forecast weather" },
            { letter: "D", text: "describe the shape of the blades once they are done" }
          ],
          correct: "A"
        },
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "What is the main idea of the passage about offshore wind turbines?",
          choices: [
            { letter: "A", text: "Offshore turbines cost too much to build and repair." },
            { letter: "B", text: "Coastal residents dislike the view of turbines at sea." },
            { letter: "C", text: "Salt water is the greatest danger to any wind turbine." },
            { letter: "D", text: "Offshore turbines are hard to build but make much power." }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.C",
          stem: "The author's main purpose in sentences 10–12 of the offshore wind passage is to —",
          choices: [
            { letter: "A", text: "argue that offshore wind farms should be stopped" },
            { letter: "B", text: "describe how cables carry the power to the shore" },
            { letter: "C", text: "acknowledge some drawbacks of offshore wind farms" },
            { letter: "D", text: "explain why wind is steadier over the open ocean" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the claim in sentence 3 that an offshore turbine is enormous?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────── 12. Functional text · school newspaper ───────────── */
    {
      id: "g9-ri-c37-submit",
      family: "G9",
      title: "How to Submit to the Lantern",
      kind: "Functional text · 9.RI",
      blurb: "The student newspaper's rules for articles, opinions, and photos.",
      level: 1,
      passage:
        "<p><strong>THE HARBOR LANTERN: HOW TO SUBMIT YOUR WORK</strong></p>" +
        "<p>" + N(1) + "The Harbor Lantern, the student newspaper of Eastport High School, welcomes articles, opinion pieces, and photographs from any student, not only staff members. " +
        N(2) + "Please read these guidelines before you send anything.</p>" +
        "<p><strong>Deadlines.</strong> " + N(3) + "Submissions for each issue are due by 3:00 p.m. on the Monday ten days before publication. " +
        N(4) + "Work that arrives late will be held for the following issue.</p>" +
        "<p><strong>Articles and opinion pieces.</strong> " + N(5) + "News articles should be 300 to 600 words; opinion pieces should be no longer than 450 words. " +
        N(6) + "Every quotation must include the full name of the person quoted, and you must tell that person the quotation may appear in print. " +
        N(7) + "Opinion pieces must be signed; we do not publish anonymous opinions.</p>" +
        "<p><strong>Photographs.</strong> " + N(8) + "Send photos as full-size image files, not screenshots, because screenshots lose detail when printed. " +
        N(9) + "Include a caption that names everyone who can be clearly identified in the picture. " +
        N(10) + "Photos of students taken outside of public school events require a signed release form, available in Room 214.</p>" +
        "<p><strong>Editing.</strong> " + N(11) + "Editors may shorten submissions or correct spelling and grammar. " +
        N(12) + "If a change would alter your meaning, an editor will contact you first.</p>" +
        "<p>" + N(13) + "Questions? Email the editors at the address posted outside Room 214.</p>",
      claims: [
        {
          id: "late",
          sol: "9.RI.1.B",
          stem: "According to the Lantern guidelines, what happens to a submission that arrives after the Monday deadline?",
          choices: [
            { letter: "A", text: "It is returned to the student without being read." },
            { letter: "B", text: "It is held and considered for the next issue." },
            { letter: "C", text: "It is shortened so that it fits the current issue." },
            { letter: "D", text: "It is published online instead of in the paper." }
          ],
          correct: "B"
        },
        {
          id: "privacy",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that the Lantern takes care to protect students' privacy in photos?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "9.RI.1.C",
          stem: "The main purpose of the Harbor Lantern guidelines is to —",
          choices: [
            { letter: "A", text: "persuade students to join the newspaper staff" },
            { letter: "B", text: "report on recent changes to school policies" },
            { letter: "C", text: "describe the history of Eastport's newspaper" },
            { letter: "D", text: "explain the rules for sending work to the paper" }
          ],
          correct: "D"
        },
        {
          id: "headings",
          sol: "9.RI.2.A",
          stem: "The bold headings in the Harbor Lantern guidelines help a reader mainly by —",
          choices: [
            { letter: "A", text: "grouping the rules by topic and type of work" },
            { letter: "B", text: "listing the editors' names in alphabetical order" },
            { letter: "C", text: "showing which rules matter more than the others" },
            { letter: "D", text: "separating facts about the paper from opinions" }
          ],
          correct: "A"
        },
        {
          id: "anonymous",
          sol: "9.RV.1.C",
          stem: "In sentence 7 of the Lantern guidelines, the word anonymous most nearly means —",
          choices: [
            { letter: "A", text: "written very quickly" },
            { letter: "B", text: "full of strong feeling" },
            { letter: "C", text: "without a known author" },
            { letter: "D", text: "longer than is allowed" }
          ],
          correct: "C"
        },
        {
          id: "editing",
          sol: "9.RI.1.B",
          stem: "According to sentence 12, when will a Lantern editor contact a writer before printing a piece?",
          choices: [
            { letter: "A", text: "when the piece runs longer than 600 words" },
            { letter: "B", text: "when a change would alter the writer's meaning" },
            { letter: "C", text: "when spelling or grammar must be corrected" },
            { letter: "D", text: "when the piece arrives after the deadline" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────── 13. Argument · solar energy ───────────── */
    {
      id: "g9-ri-c37-canopy",
      family: "G9",
      title: "Shade That Pays for Itself",
      kind: "Argument · 9.RI",
      blurb: "A student editorial calls for solar canopies over the school parking lot.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every afternoon from April to October, the student parking lot at Brookhaven High turns into a frying pan. " +
        N(2) + "Car seats scorch bare legs, steering wheels are too hot to hold, and the blacktop gives off heat long after the last bell. " +
        N(3) + "The school board should fix this problem and another one at the same time by building solar canopies over the lot. " +
        N(4) + "A solar canopy is simply a raised roof of panels on steel posts, like the one already standing over the parking lot at the county library. " +
        N(5) + "According to the library's own annual report, its canopy produced enough electricity last year to cover nearly a third of the building's needs. " +
        N(6) + "Our lot is four times as large. " +
        N(7) + "Critics will point out that canopies are expensive, and they are right that the first cost is high. " +
        N(8) + "However, the state now offers grants that pay up to half the price of solar projects at public schools, and the district would save on electricity for decades. " +
        N(9) + "Others worry that the posts will make parking harder. " +
        N(10) + "The library's lot, which has the same narrow spaces as ours, lost only four spots when its canopy went up. " +
        N(11) + "The shade itself is a bonus that no budget sheet can fully measure. " +
        N(12) + "Students who drive would climb into cool cars, and the canopy would keep rain off anyone walking to the doors. " +
        N(13) + "We already pave this land and paint lines on it; it is time to make it work for us. " +
        N(14) + "The board meets on March 9, and every student who has ever burned a hand on a seatbelt buckle should be there." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which sentence best states the writer's central claim in the Brookhaven editorial?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence gives the strongest evidence that a canopy could produce a meaningful amount of power?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "Sentences 7–10 of the canopy editorial are organized mainly as —",
          choices: [
            { letter: "A", text: "a list of the canopy's benefits for students" },
            { letter: "B", text: "a history of the county library's canopy" },
            { letter: "C", text: "a step-by-step plan for building the canopy" },
            { letter: "D", text: "two objections, each followed by a reply" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which statement from the canopy editorial is closest to an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "The shade is a bonus no budget sheet can fully measure." },
            { letter: "B", text: "The library's canopy covered nearly a third of its needs." },
            { letter: "C", text: "The state offers grants that pay up to half the price." },
            { letter: "D", text: "The library's lot lost only four spots to its canopy." }
          ],
          correct: "A"
        },
        {
          id: "pan",
          sol: "9.RI.2.B",
          stem: "The writer compares the parking lot to a frying pan in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "explain how the blacktop was first poured" },
            { letter: "B", text: "suggest that the lot could host a cookout" },
            { letter: "C", text: "make the heat problem vivid for readers" },
            { letter: "D", text: "show that the lot is larger than the library's" }
          ],
          correct: "C"
        },
        {
          id: "posts",
          sol: "9.RI.1.B",
          stem: "According to the editorial, how does the writer answer the worry that the posts will make parking harder?",
          choices: [
            { letter: "A", text: "by suggesting that students park on the street" },
            { letter: "B", text: "by promising the board will widen every space" },
            { letter: "C", text: "by arguing that fewer students ought to drive" },
            { letter: "D", text: "by noting that the library lost only four spaces" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────── 14. Vocabulary · photography ───────────── */
    {
      id: "g9-rv-c37-photo-walk",
      family: "G9",
      title: "The Photo Walk",
      kind: "Vocabulary · 9.RV",
      blurb: "Rafael spends a Saturday morning chasing one real moment through a cloud of steam.",
      level: 1,
      passage:
        "<p>" + N(1) + "The Riverside Photo Club met at the fountain at eight on Saturday, when the light was still soft and the streets were nearly empty. " +
        N(2) + "Ms. Tavares, the club leader, explained the day's challenge: each member had to bring back one <strong>candid</strong> picture, a shot of someone who did not know a camera was pointed at them. " +
        N(3) + "\"Posed smiles are easy,\" she said. \"Real moments are harder to catch.\" " +
        N(4) + "Rafael climbed the library steps to find a better <strong>vantage</strong> point, a spot high enough to see the whole square at once. " +
        N(5) + "From there he noticed a baker setting out loaves, his face half hidden by steam that seemed to <strong>obscure</strong> it every few seconds. " +
        N(6) + "The moment Rafael wanted was <strong>fleeting</strong>: the steam cleared for only an instant before it rose again. " +
        N(7) + "He missed it once, then twice. " +
        N(8) + "His friend Leila, who was packing up to leave, called him stubborn, but Ms. Tavares called him <strong>persistent</strong>, and Rafael liked her word better. " +
        N(9) + "On the eleventh try, the steam parted just as the baker laughed at something a customer said. " +
        N(10) + "Back at the fountain, the club gathered around his camera screen. " +
        N(11) + "The colors were so <strong>vivid</strong> that the bread looked warm enough to smell, and the baker's grin filled half the frame. " +
        N(12) + "\"That,\" said Ms. Tavares, tapping the screen, \"is what I meant by a real moment.\"" +
        "</p>",
      claims: [
        {
          id: "candid",
          sol: "9.RV.1.B",
          stem: "As used in sentence 2, the word candid describes a photo that is —",
          choices: [
            { letter: "A", text: "taken without the subject posing" },
            { letter: "B", text: "printed only in black and white" },
            { letter: "C", text: "carefully planned well in advance" },
            { letter: "D", text: "shot from very far across a room" }
          ],
          correct: "A"
        },
        {
          id: "vantage",
          sol: "9.RV.1.C",
          stem: "Based on sentence 4, a vantage point is best described as —",
          choices: [
            { letter: "A", text: "a sign that marks a meeting spot" },
            { letter: "B", text: "a short rest between photo shoots" },
            { letter: "C", text: "a place that gives a wide view" },
            { letter: "D", text: "the sharp tip of a camera tripod" }
          ],
          correct: "C"
        },
        {
          id: "obscure",
          sol: "9.RV.1.B",
          stem: "In sentence 5, the word obscure most nearly means to —",
          choices: [
            { letter: "A", text: "brighten" },
            { letter: "B", text: "cook slowly" },
            { letter: "C", text: "move closer" },
            { letter: "D", text: "hide from view" }
          ],
          correct: "D"
        },
        {
          id: "fleeting",
          sol: "9.RV.1.C",
          stem: "Which phrase best helps the reader understand the meaning of fleeting in sentence 6?",
          choices: [
            { letter: "A", text: "He missed it once, then twice" },
            { letter: "B", text: "the steam cleared for only an instant" },
            { letter: "C", text: "to find a better vantage point" },
            { letter: "D", text: "his face half hidden by steam" }
          ],
          correct: "B"
        },
        {
          id: "persistent",
          sol: "9.RV.1.E",
          stem: "In sentence 8, Leila calls Rafael stubborn, but Ms. Tavares calls him persistent. Compared with stubborn, the word persistent has a connotation that is more —",
          choices: [
            { letter: "A", text: "critical" },
            { letter: "B", text: "fearful" },
            { letter: "C", text: "admiring" },
            { letter: "D", text: "careless" }
          ],
          correct: "C"
        },
        {
          id: "smell",
          sol: "9.RV.1.F",
          stem: "In sentence 11, saying the bread looked warm enough to smell suggests that Rafael's photo —",
          choices: [
            { letter: "A", text: "made the scene feel real and alive" },
            { letter: "B", text: "was printed on special scented paper" },
            { letter: "C", text: "was taken from inside the bakery oven" },
            { letter: "D", text: "showed bread that had already gone stale" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────── 15. Vocabulary · deep-sea exploration ───────────── */
    {
      id: "g9-rv-c37-pressure",
      family: "G9",
      title: "Dented but Working",
      kind: "Vocabulary · 9.RV",
      blurb: "A high school ocean club puts its camera pod inside a pressure chamber.",
      level: 2,
      passage:
        "<p>" + N(1) + "The pressure chamber at the university's ocean lab looked like a giant steel thermos, and the challenge it posed was <strong>formidable</strong>. " +
        N(2) + "Inside it, the Westbrook High ocean club's camera pod would face the same crushing force it would meet a thousand meters down. " +
        N(3) + "The pod had to be heavy enough to sink, but it also carried a float that made it <strong>buoyant</strong> once its weights were released, so it would rise to the surface on its own. " +
        N(4) + "Noor had sealed every seam herself, checking each bolt three times against the club's list. " +
        N(5) + "Dr. Osei, the lab's engineer, warned them that her tests were <strong>rigorous</strong>: no shortcuts, and no second chances inside a single run. " +
        N(6) + "The pod was lowered into the water-filled chamber until it was fully <strong>submerged</strong>, and the heavy door was locked. " +
        N(7) + "For forty minutes the gauge climbed. " +
        N(8) + "Diego's guesses about what would happen were <strong>tentative</strong>; he started every sentence with \"maybe.\" " +
        N(9) + "When the pressure finally dropped and the pod came out, one small dent marked its side, but the camera inside was still recording. " +
        N(10) + "\"Dented but working,\" Dr. Osei said. \"That is what a <strong>resilient</strong> design looks like.\" " +
        N(11) + "Noor ran her thumb over the dent as if it were a medal. " +
        N(12) + "The club would fix it, of course, but she decided to take a picture of it first." +
        "</p>",
      claims: [
        {
          id: "formidable",
          sol: "9.RV.1.C",
          stem: "Which detail from sentence 2 best helps explain why the challenge in sentence 1 is called formidable?",
          choices: [
            { letter: "A", text: "the lab belongs to the university" },
            { letter: "B", text: "the pod would face a crushing force" },
            { letter: "C", text: "the club comes from Westbrook High" },
            { letter: "D", text: "the pod holds a camera inside it" }
          ],
          correct: "B"
        },
        {
          id: "buoyant",
          sol: "9.RV.1.B",
          stem: "In sentence 3, the word buoyant most nearly means —",
          choices: [
            { letter: "A", text: "easy to steer" },
            { letter: "B", text: "tightly sealed" },
            { letter: "C", text: "very heavy" },
            { letter: "D", text: "able to float" }
          ],
          correct: "D"
        },
        {
          id: "rigorous",
          sol: "9.RV.1.E",
          stem: "Dr. Osei calls her tests rigorous rather than simply hard. The word rigorous adds a sense that the tests are —",
          choices: [
            { letter: "A", text: "strict and thorough" },
            { letter: "B", text: "unfair and cruel" },
            { letter: "C", text: "quick and casual" },
            { letter: "D", text: "new and untried" }
          ],
          correct: "A"
        },
        {
          id: "submerged",
          sol: "9.RV.1.B",
          stem: "In sentence 6, the word submerged most nearly means —",
          choices: [
            { letter: "A", text: "locked behind a door" },
            { letter: "B", text: "painted for protection" },
            { letter: "C", text: "covered fully by water" },
            { letter: "D", text: "lifted out of a tank" }
          ],
          correct: "C"
        },
        {
          id: "tentative",
          sol: "9.RV.1.C",
          stem: "Which clue best shows that Diego's tentative guesses in sentence 8 were uncertain?",
          choices: [
            { letter: "A", text: "the gauge climbed for forty minutes" },
            { letter: "B", text: "the pressure finally dropped" },
            { letter: "C", text: "the pod came out with a dent" },
            { letter: "D", text: "he began every sentence with maybe" }
          ],
          correct: "D"
        },
        {
          id: "medal",
          sol: "9.RV.1.F",
          stem: "In sentence 11, Noor runs her thumb over the dent as if it were a medal. This comparison suggests that she sees the dent as —",
          choices: [
            { letter: "A", text: "an embarrassing flaw to hide" },
            { letter: "B", text: "proof the pod passed a hard test" },
            { letter: "C", text: "a mistake caused by Diego's guess" },
            { letter: "D", text: "a reason to start the design over" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────── 16. Vocabulary · school newspaper ───────────── */
    {
      id: "g9-rv-c37-interview",
      family: "G9",
      title: "The Clock Tower Story",
      kind: "Vocabulary · 9.RV",
      blurb: "A student reporter interviews a quiet custodian and checks an old story.",
      level: 3,
      passage:
        "<p>" + N(1) + "Mr. Lyle had been the head custodian at Hollis High School for thirty-one years, and he was famously <strong>reticent</strong>; most students had never heard him say more than \"Morning.\" " +
        N(2) + "So when Soo-ah Kim, a sophomore reporter for the Hollis Herald, asked to interview him before he retired, she expected short answers. " +
        N(3) + "At first she got them. " +
        N(4) + "She asked about his favorite part of the job, and he said, \"Fixing things,\" and nothing more. " +
        N(5) + "She asked him to <strong>elaborate</strong>, and he looked at her as if she had asked him to sing. " +
        N(6) + "Then she mentioned the clock tower, and something changed. " +
        N(7) + "He told her how he had climbed inside it every winter to oil the gears, how the hands had once frozen at 3:10 for a whole week, and how he could tell the time by the hum of the bell. " +
        N(8) + "Soo-ah filled six pages of her notebook. " +
        N(9) + "Back in the newsroom, her editor reminded her that the profile had to be <strong>concise</strong>: four hundred words, no more. " +
        N(10) + "Before cutting anything, she tried to <strong>verify</strong> the story of the frozen clock and found an old issue of the Herald that described it. " +
        N(11) + "There was one <strong>discrepancy</strong>: the old article said the hands had stuck at 3:40, not 3:10. " +
        N(12) + "Soo-ah called Mr. Lyle to ask, and he laughed for the first time she had ever heard. " +
        N(13) + "\"The paper got it wrong back then,\" he said. \"I'm glad someone finally checked.\" " +
        N(14) + "His thanks was so <strong>earnest</strong> that she kept the line in the story, even though it cost her twelve of her four hundred words." +
        "</p>",
      claims: [
        {
          id: "reticent",
          sol: "9.RV.1.C",
          stem: "Which detail in sentence 1 best helps the reader understand the meaning of reticent?",
          choices: [
            { letter: "A", text: "he had worked there for thirty-one years" },
            { letter: "B", text: "he was the head custodian at the school" },
            { letter: "C", text: "most students never heard him say more than Morning" },
            { letter: "D", text: "he was famous across the whole building" }
          ],
          correct: "C"
        },
        {
          id: "elaborate",
          sol: "9.RV.1.B",
          stem: "When Soo-ah asks Mr. Lyle to elaborate in sentence 5, she wants him to —",
          choices: [
            { letter: "A", text: "give more details about his answer" },
            { letter: "B", text: "repeat his answer more loudly" },
            { letter: "C", text: "explain why he is retiring now" },
            { letter: "D", text: "sing a song for the newspaper" }
          ],
          correct: "A"
        },
        {
          id: "concise",
          sol: "9.RV.1.E",
          stem: "The editor in sentence 9 asks for a concise profile rather than a short one. Compared with short, the word concise suggests writing that is —",
          choices: [
            { letter: "A", text: "rushed and missing key facts" },
            { letter: "B", text: "dull and lacking any feeling" },
            { letter: "C", text: "long and full of extra detail" },
            { letter: "D", text: "brief but complete and clear" }
          ],
          correct: "D"
        },
        {
          id: "verify",
          sol: "9.RV.1.B",
          stem: "In sentence 10, to verify the story of the frozen clock means to —",
          choices: [
            { letter: "A", text: "rewrite it in her own words" },
            { letter: "B", text: "confirm that it is accurate" },
            { letter: "C", text: "shorten it to fit the profile" },
            { letter: "D", text: "share it with her editor first" }
          ],
          correct: "B"
        },
        {
          id: "earnest",
          sol: "9.RV.1.E",
          stem: "Sentence 14 describes Mr. Lyle's thanks as earnest. Compared with polite, the word earnest suggests thanks that is more —",
          choices: [
            { letter: "A", text: "sincere and heartfelt" },
            { letter: "B", text: "formal and stiff" },
            { letter: "C", text: "loud and showy" },
            { letter: "D", text: "brief and careless" }
          ],
          correct: "A"
        },
        {
          id: "sing",
          sol: "9.RV.1.F",
          stem: "In sentence 5, Mr. Lyle looks at Soo-ah as if she had asked him to sing. This comparison suggests that he finds her request —",
          choices: [
            { letter: "A", text: "funny and delightful" },
            { letter: "B", text: "rude and insulting" },
            { letter: "C", text: "strange and uncomfortable" },
            { letter: "D", text: "easy and familiar" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────── 17. Paired texts · photography ───────────── */
    {
      id: "g9-dsr-c37-photo-contest",
      family: "G9",
      title: "The Editing Rule: Contest Notice + Student Letter",
      kind: "Paired texts · 9.DSR",
      blurb: "A photo contest limits editing, and a student asks for a second category.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Spring Photo Contest Rules, from the Club Adviser</strong></p>" +
        "<p>" + N(1) + "The Fairview High Spring Photo Contest is open to all students, and entries are due by April 18. " +
        N(2) + "Each student may enter up to two photographs taken during this school year. " +
        N(3) + "To keep the contest focused on what happens in the camera, only basic adjustments are allowed: cropping, straightening, and changing overall brightness or contrast. " +
        N(4) + "Photos that add, remove, or combine objects or images will be disqualified. " +
        N(5) + "Judges will look at composition, lighting, and storytelling. " +
        N(6) + "Winners will be framed and hung in the main hallway for the rest of the year, and first place will receive a gift card to a local camera shop. " +
        N(7) + "If you are unsure whether an edit is allowed, show the original file to Mr. Haddad in Room 108 before you enter.</p>" +
        "<p><strong>Text 2 — Letter from Tomasz, a Junior Photographer</strong></p>" +
        "<p>" + N(8) + "I respect the contest's goal, but the editing rule treats one kind of photography as the only real kind. " +
        N(9) + "Many of the photographers we studied in class blended several exposures to show a scene the way the eye sees it. " +
        N(10) + "Last fall I combined three shots of the sunset over the reservoir because no single exposure could hold both the bright sky and the dark water. " +
        N(11) + "Under the new rule, that picture could not be entered. " +
        N(12) + "I am not asking the club to remove the rule; it makes sense for a category about capturing a single moment. " +
        N(13) + "I am asking the club to add a second category, Digital Art, where combined images are welcome and judged by their own standards. " +
        N(14) + "Then no student has to choose between the rules and their best work." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          stem: "On which point do the contest rules and Tomasz's letter agree?",
          choices: [
            { letter: "A", text: "Entries should be due earlier than April 18." },
            { letter: "B", text: "A category about capturing a moment may limit editing." },
            { letter: "C", text: "Combined images should be judged by the same standards." },
            { letter: "D", text: "Students should be allowed only one entry each." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The adviser's rules and Tomasz's letter differ mainly in how they view —",
          choices: [
            { letter: "A", text: "the prize given for first place" },
            { letter: "B", text: "the date that entries are due" },
            { letter: "C", text: "the judges' focus on lighting" },
            { letter: "D", text: "combining several images into one" }
          ],
          correct: "D"
        },
        {
          id: "respond",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does Tomasz most directly respond to in sentence 11?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "9.DSR.E",
          stem: "Select TWO details Tomasz uses to support his request for a second contest category.",
          choices: [
            { letter: "A", text: "photographers studied in class blended exposures" },
            { letter: "B", text: "winners will be hung in the main hallway" },
            { letter: "C", text: "no single exposure could hold the sky and the water" },
            { letter: "D", text: "entries for the contest are due by April 18" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "sunset",
          sol: "9.DSR.E",
          stem: "Using both texts, a reader can best conclude that Tomasz's reservoir sunset photo —",
          choices: [
            { letter: "A", text: "would win first place if it were entered" },
            { letter: "B", text: "would be disqualified under the current rules" },
            { letter: "C", text: "was made with only basic adjustments" },
            { letter: "D", text: "has already been hung in the main hallway" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "9.RI.1.C",
          stem: "The main purpose of Tomasz's letter is to —",
          choices: [
            { letter: "A", text: "complain that the judges are unfair to juniors" },
            { letter: "B", text: "explain how to blend several exposures at once" },
            { letter: "C", text: "ask that the contest be canceled for this year" },
            { letter: "D", text: "propose a change that keeps the rule but adds a choice" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────── 18. Paired texts · wind energy ───────────── */
    {
      id: "g9-dsr-c37-wind-ridge",
      family: "G9",
      title: "Sorrel Ridge: News Article + Letter to the Editor",
      kind: "Paired texts · 9.DSR",
      blurb: "A county weighs twelve wind turbines, and an apple farmer asks hard questions.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the Calloway County Courier</strong></p>" +
        "<p>" + N(1) + "A renewable energy company has asked Calloway County for permission to build twelve wind turbines along Sorrel Ridge, a line of hills east of town. " +
        N(2) + "According to the company's application, the turbines would produce enough electricity for about 9,000 homes and pay the county roughly $400,000 a year in taxes. " +
        N(3) + "Each turbine would stand about 150 meters tall. " +
        N(4) + "A study paid for by the company found that the turbines would be visible from most of the valley but would produce little noise at the nearest houses, which sit about a kilometer away. " +
        N(5) + "The county planning board will hold a public hearing on May 2. " +
        N(6) + "The board's chair said members have not leaned either way and want to hear from residents before they vote.</p>" +
        "<p><strong>Text 2 — Letter to the Editor, from Marisol Vega</strong></p>" +
        "<p>" + N(7) + "I have grown apples below Sorrel Ridge for twenty-two years, and I am not against wind power. " +
        N(8) + "But the article leaves out something important: the noise study was paid for by the same company that wants the permit. " +
        N(9) + "I would feel better about a study the county chose and paid for itself. " +
        N(10) + "I also worry about twelve looming towers on the one ridge everyone in the valley can see from the porch. " +
        N(11) + "The tax money is real, and our schools could use it. " +
        N(12) + "So I am asking the board to delay its vote until an independent study is finished, and to ask whether fewer turbines, set farther back, could still be worthwhile. " +
        N(13) + "Good energy should not require us to take anyone's word for it." +
        "</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          stem: "Which idea is supported by both the Courier article and Marisol Vega's letter?",
          choices: [
            { letter: "A", text: "The turbines would bring money to the county." },
            { letter: "B", text: "The company's noise study cannot be trusted." },
            { letter: "C", text: "The board has already approved the project." },
            { letter: "D", text: "The turbines would be hidden from the valley." }
          ],
          correct: "A"
        },
        {
          id: "question",
          sol: "9.DSR.E",
          stem: "Which detail from Text 1 does Vega most directly question in sentence 8?",
          choices: [
            { letter: "A", text: "that the turbines would power 9,000 homes" },
            { letter: "B", text: "that the hearing will be held on May 2" },
            { letter: "C", text: "that the study found little noise near homes" },
            { letter: "D", text: "that each turbine would stand 150 meters tall" }
          ],
          correct: "C"
        },
        {
          id: "open",
          sol: "9.DSR.E",
          stem: "Select TWO sentences from Text 2 that show Vega is open to some form of the Sorrel Ridge project.",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "unlike",
          sol: "9.DSR.D",
          stem: "Unlike the Courier article, Vega's letter —",
          choices: [
            { letter: "A", text: "reports the size and location of the turbines" },
            { letter: "B", text: "takes a position and asks the board to act" },
            { letter: "C", text: "gives the date of the public hearing" },
            { letter: "D", text: "presents the company's estimate of taxes" }
          ],
          correct: "B"
        },
        {
          id: "looming",
          sol: "9.RV.1.E",
          stem: "In sentence 10, Vega calls the towers looming rather than simply tall. The word looming adds a sense that the towers are —",
          choices: [
            { letter: "A", text: "graceful and pleasing to see" },
            { letter: "B", text: "small and easy to overlook" },
            { letter: "C", text: "threatening and hard to ignore" },
            { letter: "D", text: "modern and carefully designed" }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.DSR.E",
          stem: "A reader of both texts could best infer that Vega wants an independent study because —",
          choices: [
            { letter: "A", text: "the first study measured only how the towers would look" },
            { letter: "B", text: "the county has already promised the company a permit" },
            { letter: "C", text: "the hearing on May 2 was canceled by the board chair" },
            { letter: "D", text: "the company that paid for the first study wants approval" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────── 19. Paired texts · school newspaper ───────────── */
    {
      id: "g9-dsr-c37-print-edition",
      family: "G9",
      title: "Print or Online: Adviser's Memo + Staff Column",
      kind: "Paired texts · 9.DSR",
      blurb: "The school paper plans to stop printing, and a staff writer proposes a middle path.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Memo from the Newspaper Adviser</strong></p>" +
        "<p>" + N(1) + "Starting in January, the Rockwell Review will publish online only. " +
        N(2) + "Printing each issue costs about $350, and the paper's budget for the year is $3,000, which has already run short twice this fall. " +
        N(3) + "Our website, by contrast, costs nothing extra to update. " +
        N(4) + "Going online also means we can post sports scores and news the same day, instead of waiting two weeks for the next print issue. " +
        N(5) + "Staff members will still write, edit, and take photographs exactly as they do now. " +
        N(6) + "I know many of you love holding the paper, but this change will let the Review survive. " +
        N(7) + "Please send any questions to me before winter break.</p>" +
        "<p><strong>Text 2 — Column by a Staff Writer</strong></p>" +
        "<p>" + N(8) + "I understand the budget problem, and I agree that the website should post scores the same day. " +
        N(9) + "But I have watched what happens on print day. " +
        N(10) + "Students who would never click a news link pick up the Review at lunch, flip to the puzzle, and end up reading a story about the bus schedule or the new art teacher. " +
        N(11) + "Online, readers only find what they already go looking for. " +
        N(12) + "Last month our website had about 200 visits, while we handed out nearly 700 printed copies. " +
        N(13) + "Instead of ending print completely, why not print a smaller monthly issue of the best stories? " +
        N(14) + "That would cost less and keep the paper on the cafeteria tables, where it finds readers who were not looking for it." +
        "</p>",
      claims: [
        {
          id: "accept",
          sol: "9.DSR.D",
          stem: "Which statement would both the adviser and the staff writer most likely accept?",
          choices: [
            { letter: "A", text: "Printing every two weeks is affordable." },
            { letter: "B", text: "Students prefer reading on their phones." },
            { letter: "C", text: "The puzzle is the paper's best feature." },
            { letter: "D", text: "The website should post news the same day." }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "9.RI.1.B",
          stem: "According to the adviser's memo, why is the Rockwell Review ending its print edition?",
          choices: [
            { letter: "A", text: "Printing costs have strained a small budget." },
            { letter: "B", text: "Staff members no longer want to take photos." },
            { letter: "C", text: "Students stopped reading the paper at lunch." },
            { letter: "D", text: "The school asked the paper to post scores." }
          ],
          correct: "A"
        },
        {
          id: "numbers",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 2 uses numbers to challenge the adviser's online-only plan?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "C"
        },
        {
          id: "disagree",
          sol: "9.DSR.D",
          stem: "The adviser and the staff writer disagree mainly about whether —",
          choices: [
            { letter: "A", text: "the budget has run short this fall" },
            { letter: "B", text: "the paper should keep any print issues" },
            { letter: "C", text: "staff members should keep writing stories" },
            { letter: "D", text: "sports scores belong on the website" }
          ],
          correct: "B"
        },
        {
          id: "plan",
          sol: "9.DSR.E",
          stem: "A reader using both texts could best conclude that the writer's plan in sentence 13 is meant to —",
          choices: [
            { letter: "A", text: "answer the cost concern while keeping print readers" },
            { letter: "B", text: "convince the adviser to print an issue every week" },
            { letter: "C", text: "move the puzzle from the paper to the website" },
            { letter: "D", text: "shut down the website so that print can continue" }
          ],
          correct: "A"
        },
        {
          id: "puzzle",
          sol: "9.RI.2.B",
          stem: "The staff writer includes the details in sentence 10 about the puzzle and the bus schedule story mainly to —",
          choices: [
            { letter: "A", text: "prove that the puzzle is too easy for most students" },
            { letter: "B", text: "complain that the paper prints too many small stories" },
            { letter: "C", text: "explain how the bus schedule changed this year" },
            { letter: "D", text: "show how print draws readers into stories by chance" }
          ],
          correct: "D"
        }
      ]
    },
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
