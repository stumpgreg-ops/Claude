/* SOL Labyrinth — Grade 9 epic packs (VA 9.RL / 9.RI / 9.RV / 9.DSR): deep-sea exploration, desert
 * ecosystems, archaeology digs and an art museum, for the last nights of the game (540–650 words).
 * Original text only; no VDOE / copyrighted material. Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── EPIC · LITERARY ───────────────────────── */
    {
      id: "g9-rl-c59-marine-snow",
      family: "G9",
      title: "Camera Three",
      kind: "Literary · 9.RL",
      blurb: "A student observer on a research ship has been told to watch, not talk. Then the snow bends.",
      level: 2,
      passage:
        "<p>" + N(1) + "The control van smelled like burnt coffee and warm electronics, and for three hours Amara Osei had not been allowed to touch anything in it. " +
        N(2) + "She sat on an upturned milk crate behind the pilots, a borrowed fleece zipped to her chin, watching eleven screens show the same gray nothing. " +
        N(3) + "Fourteen hundred meters below the ship, the robot called Petrel drifted over the seafloor with its lights on, and the lights showed mud, more mud, and a slow snow of white specks falling through the beam. " +
        N(4) + "\"Marine snow,\" her mother had explained on the first night, \"bits of dead plankton sinking from above. " +
        N(5) + "Down there, it's the closest thing to a meal delivery.\"</p>" +
        "<p>" + N(6) + "Her mother was the ship's lead pilot, which meant she sat in the center chair with a joystick under each hand and spoke in the calm, flat voice she used for flat tires and thunderstorms. " +
        N(7) + "Beside her, Dr. Hollis Brandt, the chief scientist, kept checking the clock. " +
        N(8) + "\"We have forty minutes before the swells get too high to recover the vehicle,\" he said for the third time. " +
        N(9) + "\"If we don't find the sponge field by then, we've lost the season's best dive.\" " +
        N(10) + "Nobody answered him. " +
        N(11) + "The only sound was the hum of the thrusters coming up through the speakers, steady as breathing.</p>" +
        "<p>" + N(12) + "Amara had come aboard as a \"student observer,\" a title that, as far as she could tell, meant she was supposed to observe without being noticed. " +
        N(13) + "On the first day, she had asked so many questions that one of the engineers had finally handed her a notebook and said, kindly but firmly, \"Write them down, and we'll answer them at dinner.\" " +
        N(14) + "The notebook was now half full. " +
        N(15) + "Under the heading Things I Don't Understand, she had written: Why does everything down there move so slowly? " +
        N(16) + "Under it, in her mother's handwriting from the night before: Because there is no reason to hurry when food arrives once a week.</p>" +
        "<p>" + N(17) + "With twenty-two minutes left, Amara noticed something in the lower corner of the side camera, the one nobody was watching because it pointed away from the planned route. " +
        N(18) + "It was not a shape so much as a change in the snow: for a moment, the falling specks bent around something, the way rain bends around a pole in a parking lot. " +
        N(19) + "She leaned forward. " +
        N(20) + "The specks bent again. " +
        N(21) + "Her heart began to pound, and she opened her mouth, then closed it, picturing Dr. Brandt's face if she sent the robot chasing a smudge with the clock running out. " +
        N(22) + "Then she remembered the notebook and the question her mother had answered, and she understood that in a place where nothing hurried, the snow would only bend for something that was actually there.</p>" +
        "<p>" + N(23) + "\"Camera three,\" she said. " +
        N(24) + "Her voice came out smaller than she meant it to, so she said it again. " +
        N(25) + "\"Camera three, lower left. " +
        N(26) + "The snow is moving around something.\" " +
        N(27) + "Dr. Brandt turned with a frown, but her mother was already easing the left joystick, and Petrel swung its lights slowly to the side. " +
        N(28) + "Out of the dark rose a pale stalk, then another, then dozens, glass sponges standing on the mud like a forest of lace lamps. " +
        N(29) + "Someone behind her let out a long, low whistle. " +
        N(30) + "Dr. Brandt said nothing at all; he only leaned toward the screen until his nose nearly touched it.</p>" +
        "<p>" + N(31) + "They collected four samples before the swells forced Petrel home. " +
        N(32) + "That night at dinner, Dr. Brandt slid a fresh notebook across the table to Amara without a word. " +
        N(33) + "Her mother waited until he had gone back to the lab, then tapped the cover. " +
        N(34) + "\"You'll need the extra pages,\" she said. " +
        N(35) + "\"Observers who actually see things tend to have more questions.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme developed across \"Camera Three\"?",
          choices: [
            { letter: "A", text: "Experts are usually too impatient to notice what matters." },
            { letter: "B", text: "Young people should stay quiet while adults are working." },
            { letter: "C", text: "Careful attention can make a quiet voice worth hearing." },
            { letter: "D", text: "Scientific discoveries depend mostly on expensive tools." }
          ],
          correct: "C"
        },
        {
          id: "notebook",
          sol: "9.RL.3.A",
          stem: "How does the notebook entry in sentences 15 and 16 contribute to the turning point in paragraph 4?",
          choices: [
            { letter: "A", text: "It gives Amara the reasoning she needs to trust what she sees." },
            { letter: "B", text: "It reminds Amara that she must save her questions for dinner." },
            { letter: "C", text: "It shows that Amara's mother doubts the planned dive route." },
            { letter: "D", text: "It explains why the side camera points away from the route." }
          ],
          correct: "A"
        },
        {
          id: "rain",
          sol: "9.RL.2.A",
          stem: "In sentence 18, the comparison of the snow to rain bending around a pole mainly helps the reader understand that —",
          choices: [
            { letter: "A", text: "the robot's lights are reflecting off the mud" },
            { letter: "B", text: "the weather at the surface is getting worse" },
            { letter: "C", text: "the sinking specks are larger than they appear" },
            { letter: "D", text: "an unseen object is blocking the specks' fall" }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          stem: "Which choice best describes how Amara changes from the beginning of the story to the end?",
          choices: [
            { letter: "A", text: "She goes from bored to angry at being ignored by the crew." },
            { letter: "B", text: "She goes from silent onlooker to a valued member of the team." },
            { letter: "C", text: "She goes from trusting her mother to doubting her judgment." },
            { letter: "D", text: "She goes from curious about the sea to afraid of its depths." }
          ],
          correct: "B"
        },
        {
          id: "brandt",
          sol: "9.RL.1.B",
          stem: "Based on sentences 32–35, the reader can infer that Dr. Brandt —",
          choices: [
            { letter: "A", text: "wants Amara to stop asking the crew so many questions" },
            { letter: "B", text: "is planning to leave the ship before the next dive" },
            { letter: "C", text: "expects Amara to write the official dive report" },
            { letter: "D", text: "now respects Amara's ability as an observer" }
          ],
          correct: "D"
        },
        {
          id: "recover",
          sol: "9.RV.1.C",
          stem: "In sentence 8, the word recover most nearly means —",
          choices: [
            { letter: "A", text: "heal after an injury" },
            { letter: "B", text: "bring back aboard" },
            { letter: "C", text: "regain lost money" },
            { letter: "D", text: "cover up again" }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "9.RL.2.C",
          stem: "The mood in the control van during paragraph 2 (sentences 6–11) is best described as —",
          choices: [
            { letter: "A", text: "playful and relaxed" },
            { letter: "B", text: "angry and chaotic" },
            { letter: "C", text: "tense but controlled" },
            { letter: "D", text: "gloomy and hopeless" }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because the story is told closely through Amara's perspective, the reader —",
          choices: [
            { letter: "A", text: "shares her doubt about speaking before the sponges appear" },
            { letter: "B", text: "learns what Dr. Brandt privately thinks of the dive plan" },
            { letter: "C", text: "knows from the start that the sponges lie off the route" },
            { letter: "D", text: "hears the engineers explain each screen in full detail" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c59-third-layer",
      family: "G9",
      title: "The Third Layer",
      kind: "Literary · 9.RL",
      blurb: "Nadia came to the dig to find a coin. She is stuck at the sifting screens instead.",
      level: 3,
      passage:
        "<p>" + N(1) + "The label was the hardest part. " +
        N(2) + "Nadia Haddad had been staring at the small paper tag for ten minutes, pencil hovering, while the late sun turned the trench walls the color of weak tea. " +
        N(3) + "Object: marble, clay, hand-rolled, she had written, and Location: Unit 4, Layer 3. " +
        N(4) + "The line that stopped her was the last one, Significance, which the field school's forms required and which no one, as far as she could tell, ever filled in with anything but a dash.</p>" +
        "<p>" + N(5) + "A week earlier, she would have known exactly what to write. " +
        N(6) + "She had arrived at the Corbin Hollow farmstead with a new trowel, a wide-brimmed hat, and a private list of things she intended to find: a coin, a buckle, perhaps a ring dropped by someone in a hurry. " +
        N(7) + "Instead, the director had assigned her to the screens, the wooden frames of wire mesh where every bucket of soil from the trench was shaken and sifted by hand. " +
        N(8) + "Her partner there was Mr. Lindqvist, a retired mail carrier who had volunteered at the dig for nine summers and who could, she was convinced, shake a screen for four hours without blinking.</p>" +
        "<p>" + N(9) + "\"What are we looking for?\" she had asked on the first morning. " +
        N(10) + "\"Whatever's there,\" he said, and tipped another bucket onto the mesh. " +
        N(11) + "By Wednesday, Nadia had sorted what seemed like a mountain of nothing: chips of brick, nails rusted into orange crumbs, fragments of plain white plates, a few hundred seeds. " +
        N(12) + "Each one went into a labeled bag. " +
        N(13) + "Each bag went into a box. " +
        N(14) + "The boxes, Mr. Lindqvist told her, would go to a lab, where someone would count the seeds and learn what the family had grown, and someone else would match the plate fragments to a pattern and learn roughly when they had been bought. " +
        N(15) + "\"So the dull stuff is the real stuff,\" Nadia said, not quite believing it. " +
        N(16) + "He considered this. " +
        N(17) + "\"The dull stuff is most of the stuff,\" he said. " +
        N(18) + "\"That's not the same as dull.\"</p>" +
        "<p>" + N(19) + "On Thursday it rained, the trench turned to soup, and Nadia spent the day in the barn scrubbing plate fragments with a toothbrush, unsure whether she was learning patience or simply losing her mind. " +
        N(20) + "On Friday the ground had dried enough to dig, and the director moved the excavation down into the third layer, a band of darker soil that marked, she said, the years when the first family had lived in the house. " +
        N(21) + "The buckets from that layer felt heavier, though Nadia knew that was only her imagination.</p>" +
        "<p>" + N(22) + "The marble appeared in the middle of the afternoon, a gray ball no bigger than a pea, rolling across the mesh as Mr. Lindqvist shook it. " +
        N(23) + "It was lopsided and faintly marked with the swirl of a fingerprint where someone had pressed the wet clay. " +
        N(24) + "Nadia picked it up and turned it in the light, and for a moment the trench, the screens, and the heat all seemed very far away. " +
        N(25) + "Somewhere in that third layer, a child had rolled this between a thumb and finger until it was round enough, and had played with it, and had lost it, and had probably cried. " +
        N(26) + "\"Not a coin,\" Mr. Lindqvist said, watching her face. " +
        N(27) + "\"No,\" Nadia said. " +
        N(28) + "\"Better.\"</p>" +
        "<p>" + N(29) + "Now, back at the table with the tag, she understood why the Significance line was usually left blank. " +
        N(30) + "A dash was easier than trying to fit a whole person onto one inch of paper. " +
        N(31) + "She thought of the seeds and the plates and the nails, the thousand small proofs that people had cooked and eaten and built and mended here. " +
        N(32) + "Then she wrote, in letters as small as she could make them: Someone's. " +
        N(33) + "She tucked the tag into the bag with the marble and went to help Mr. Lindqvist carry the screens to the barn.</p>",
      claims: [
        {
          id: "frame",
          sol: "9.RL.3.A",
          stem: "The author begins and ends the story with Nadia filling in the tag mainly to —",
          choices: [
            { letter: "A", text: "show that Nadia has finally learned to fill out forms" },
            { letter: "B", text: "frame the week's events as the reason her answer changes" },
            { letter: "C", text: "suggest that the field school's paperwork is pointless" },
            { letter: "D", text: "reveal that Mr. Lindqvist wrote the tag for her" }
          ],
          correct: "B"
        },
        {
          id: "someones",
          sol: "9.RL.1.B",
          stem: "When Nadia writes Someone's on the Significance line in sentence 32, she most likely means that the marble —",
          choices: [
            { letter: "A", text: "belongs to Mr. Lindqvist, who found it first" },
            { letter: "B", text: "should be returned to the family that lost it" },
            { letter: "C", text: "has no value that a lab could ever measure" },
            { letter: "D", text: "matters because it connects her to a real person" }
          ],
          correct: "D"
        },
        {
          id: "lindqvist",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Mr. Lindqvist as he is presented in the story?",
          choices: [
            { letter: "A", text: "He is patient and quietly teaches by example." },
            { letter: "B", text: "He is strict and annoyed by Nadia's questions." },
            { letter: "C", text: "He is bored by work he has done for too long." },
            { letter: "D", text: "He is secretive about what the dig might hold." }
          ],
          correct: "A"
        },
        {
          id: "dull",
          sol: "9.RV.1.E",
          stem: "In sentences 17 and 18, Mr. Lindqvist separates most of the stuff from dull. This distinction suggests that common objects are —",
          choices: [
            { letter: "A", text: "less valuable than the coins Nadia hoped to find" },
            { letter: "B", text: "more exciting than anything in the third layer" },
            { letter: "C", text: "plentiful but still meaningful to the dig" },
            { letter: "D", text: "boring yet required by the field school" }
          ],
          correct: "C"
        },
        {
          id: "imagery",
          sol: "9.RL.2.B",
          stem: "The details in sentences 23–25, such as the fingerprint swirl and the child rolling the clay, mainly help the reader —",
          choices: [
            { letter: "A", text: "picture the ordinary life behind a small object" },
            { letter: "B", text: "understand how marbles were made in factories" },
            { letter: "C", text: "see why the director moved the dig to layer three" },
            { letter: "D", text: "sense that Nadia is too tired to keep working" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is most fully developed across the whole of \"The Third Layer\"?",
          choices: [
            { letter: "A", text: "Hard work is always rewarded with a lucky find." },
            { letter: "B", text: "Rain can ruin even the best-planned project." },
            { letter: "C", text: "The value of the past lies in everyday lives." },
            { letter: "D", text: "Young volunteers should choose their own tasks." }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "In sentence 19, the comment that Nadia was unsure whether she was learning patience or simply losing her mind creates a tone that is —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "solemn and formal" },
            { letter: "C", text: "anxious and fearful" },
            { letter: "D", text: "wry and self-mocking" }
          ],
          correct: "D"
        },
        {
          id: "layer",
          sol: "9.RL.3.B",
          stem: "How does the move into the third layer in sentences 20 and 21 affect Nadia?",
          choices: [
            { letter: "A", text: "It makes her doubt that anyone ever lived on the farm." },
            { letter: "B", text: "It raises her sense that something important is near." },
            { letter: "C", text: "It convinces her to ask the director for a new task." },
            { letter: "D", text: "It causes her to stop trusting Mr. Lindqvist's advice." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c59-spadefoot",
      family: "G9",
      title: "Nothing Is a Number",
      kind: "Literary · 9.RL",
      blurb: "Joaquín thinks the desert is the emptiest place on Earth. His cousin tells him to wait for the rain.",
      level: 1,
      passage:
        "<p>" + N(1) + "Joaquín Morales decided on the first day that the desert was the emptiest place on Earth. " +
        N(2) + "His cousin Inés worked at a small field station at the edge of the Ocotillo Basin, and his parents had sent him to stay with her for two weeks of summer. " +
        N(3) + "From the station's porch, he could see sand, rocks, a few gray bushes, and a sky so wide it made him feel tiny. " +
        N(4) + "\"There's nothing here,\" he told Inés on the second night. " +
        N(5) + "She only smiled and said, \"Wait for the rain.\"</p>" +
        "<p>" + N(6) + "For a week, there was no rain. " +
        N(7) + "Every morning, Joaquín followed Inés along a line of wooden stakes, helping her count plants inside square frames made of plastic pipe. " +
        N(8) + "Most of the squares held nothing but pebbles. " +
        N(9) + "Some held a single creosote bush, its small leaves shiny and sticky and smelling faintly like tar. " +
        N(10) + "Inés wrote every number in a waterproof notebook, even the zeros. " +
        N(11) + "\"Why count nothing?\" Joaquín asked. " +
        N(12) + "\"Because nothing is a number too,\" she said. " +
        N(13) + "\"After the rains come, we'll compare.\"</p>" +
        "<p>" + N(14) + "On the ninth afternoon, the sky to the south turned the color of a bruise. " +
        N(15) + "The wind picked up, carrying a sharp, clean smell that Inés said came from the creosote bushes as the first drops hit them. " +
        N(16) + "Then the rain came all at once, loud on the tin roof, pouring off the edges in silver sheets. " +
        N(17) + "Joaquín stood at the window and watched the dry wash behind the station fill with brown, rushing water. " +
        N(18) + "In less than an hour, it was over, and the sun came back out as if nothing had happened.</p>" +
        "<p>" + N(19) + "But something had happened. " +
        N(20) + "That night, the darkness outside was full of sound, a loud, bleating chorus that rose and fell like a crowd at a game. " +
        N(21) + "Inés handed him a flashlight and led him to the edge of a fresh puddle. " +
        N(22) + "Dozens of small, round toads sat in the shallow water, their throats puffing out as they called. " +
        N(23) + "\"Spadefoot toads,\" she whispered. " +
        N(24) + "\"They spend most of the year buried underground, sometimes for many months. " +
        N(25) + "When a big rain comes, they dig out, find a pool, and lay their eggs before it dries up.\" " +
        N(26) + "Joaquín stared. " +
        N(27) + "He had walked past that spot every day and never guessed that anything was living beneath his feet.</p>" +
        "<p>" + N(28) + "Over the next few days, the basin kept surprising him. " +
        N(29) + "Tiny green shoots pushed up through the sand in squares that had held only pebbles. " +
        N(30) + "Yellow and purple flowers opened along the wash. " +
        N(31) + "Bees appeared from nowhere, and a pair of small brown birds began building a nest in a cactus by the porch. " +
        N(32) + "Inés explained that many desert seeds can lie in the soil for years, waiting for just the right amount of rain before they sprout. " +
        N(33) + "\"The desert isn't empty,\" she said. " +
        N(34) + "\"It's patient.\"</p>" +
        "<p>" + N(35) + "On his last morning, Joaquín helped Inés count the squares one more time. " +
        N(36) + "This time, he wrote the numbers himself: fourteen sprouts, nine sprouts, twenty-two. " +
        N(37) + "When they reached a square with nothing but pebbles, he paused, then wrote a careful zero. " +
        N(38) + "\"Nothing is a number too,\" he said, and Inés laughed. " +
        N(39) + "On the long drive home, he watched the gray bushes slide past the car window and wondered what was waiting quietly under every one of them.</p>",
      claims: [
        {
          id: "setting",
          sol: "9.RL.3.A",
          stem: "How does the desert setting shape the events of \"Nothing Is a Number\"?",
          choices: [
            { letter: "A", text: "The heat keeps Joaquín inside the station for most of his visit." },
            { letter: "B", text: "The wide sky makes Joaquín want to go home after one night." },
            { letter: "C", text: "The flooding wash forces Inés to cancel her plant counts." },
            { letter: "D", text: "The rare rain sets off the changes that Joaquín observes." }
          ],
          correct: "D"
        },
        {
          id: "first",
          sol: "9.RL.1.C",
          stem: "At the beginning of the story, Joaquín thinks the desert is —",
          choices: [
            { letter: "A", text: "empty and dull" },
            { letter: "B", text: "dangerous and wild" },
            { letter: "C", text: "noisy and crowded" },
            { letter: "D", text: "beautiful and calm" }
          ],
          correct: "A"
        },
        {
          id: "chorus",
          sol: "9.RL.2.A",
          stem: "In sentence 20, the toads' chorus is compared to a crowd at a game mainly to show that the sound is —",
          choices: [
            { letter: "A", text: "soft and hard to hear" },
            { letter: "B", text: "sad and lonely" },
            { letter: "C", text: "loud and full of energy" },
            { letter: "D", text: "strange and frightening" }
          ],
          correct: "C"
        },
        {
          id: "patient",
          sol: "9.RV.1.F",
          stem: "When Inés says in sentence 34 that the desert is patient, she means that its plants and animals —",
          choices: [
            { letter: "A", text: "move very slowly across the sand" },
            { letter: "B", text: "wait a long time for the right conditions" },
            { letter: "C", text: "need people to take care of them" },
            { letter: "D", text: "stay calm during dangerous storms" }
          ],
          correct: "B"
        },
        {
          id: "zeros",
          sol: "9.RL.1.B",
          stem: "Based on sentences 10–13, Inés records the zeros because she —",
          choices: [
            { letter: "A", text: "plans to compare the counts after the season changes" },
            { letter: "B", text: "wants to prove to Joaquín that the desert has no plants" },
            { letter: "C", text: "forgot to bring enough frames for every square" },
            { letter: "D", text: "is required to fill every page of the notebook" }
          ],
          correct: "A"
        },
        {
          id: "lesson",
          sol: "9.RL.1.A",
          stem: "Which lesson does Joaquín learn by the end of his visit to the basin?",
          choices: [
            { letter: "A", text: "Field scientists should always work alone." },
            { letter: "B", text: "Desert storms are too dangerous to watch." },
            { letter: "C", text: "Counting plants is the best way to spend a summer." },
            { letter: "D", text: "A place that looks empty may be full of hidden life." }
          ],
          correct: "D"
        },
        {
          id: "wash",
          sol: "9.RV.1.C",
          stem: "In sentence 17, the word wash refers to —",
          choices: [
            { letter: "A", text: "a pile of laundry" },
            { letter: "B", text: "a dry streambed" },
            { letter: "C", text: "a summer rainstorm" },
            { letter: "D", text: "a cleaning job" }
          ],
          correct: "B"
        },
        {
          id: "smell",
          sol: "9.RL.2.B",
          stem: "Which detail from paragraph 3 (sentences 14–18) appeals most to the sense of smell?",
          choices: [
            { letter: "A", text: "The sky to the south turned the color of a bruise." },
            { letter: "B", text: "The rain came all at once, loud on the tin roof." },
            { letter: "C", text: "The wind carried a sharp, clean scent from the bushes." },
            { letter: "D", text: "The sun came back out as if nothing had happened." }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── EPIC · INFORMATIONAL ───────────────────────── */
    {
      id: "g9-ri-c59-vents",
      family: "G9",
      title: "Life Without Sunlight",
      kind: "Informational · 9.RI",
      blurb: "Hot springs on the dark seafloor turned out to feed whole towns of animals. What were they eating?",
      level: 2,
      passage:
        "<p>" + N(1) + "For most of history, people assumed that every food chain on Earth began with sunlight. " +
        N(2) + "Plants and algae capture the energy of the sun, animals eat the plants, other animals eat those animals, and so on up the line. " +
        N(3) + "The deep ocean seemed to fit this rule in a gloomy way. " +
        N(4) + "Below about a thousand meters, no sunlight reaches at all, so scientists expected the deep seafloor to be a thin, hungry place, supported only by scraps drifting down from the bright waters far above.</p>" +
        "<p>" + N(5) + "That expectation cracked in the late 1970s. " +
        N(6) + "A team of researchers diving in a small submersible near the Galápagos Islands had gone looking for hot water, not life. " +
        N(7) + "They had evidence that seawater was seeping into cracks in the ocean floor, being heated by molten rock below, and rising back out, and they wanted to measure it. " +
        N(8) + "They found the hot springs, now called hydrothermal vents. " +
        N(9) + "They also found something no one had predicted: thick clusters of clams, crabs, and tall white tubes topped with bright red plumes, crowded around the vents like a town around a well.</p>" +
        "<p>" + N(10) + "The question was obvious. " +
        N(11) + "What were all these animals eating? " +
        N(12) + "The answer turned out to be invisible. " +
        N(13) + "The water pouring from the vents is rich in dissolved chemicals, especially a compound called hydrogen sulfide, which smells like rotten eggs and is poisonous to most animals. " +
        N(14) + "Certain bacteria, however, can use the energy stored in that compound to turn carbon dioxide into sugar, much as plants use sunlight to do the same job. " +
        N(15) + "This process is called chemosynthesis, meaning \"putting together with chemicals.\" " +
        N(16) + "The bacteria form the base of the vent food chain, and everything else depends on them.</p>" +
        "<p>" + N(17) + "Some vent animals simply graze on mats of bacteria. " +
        N(18) + "Others have formed closer partnerships. " +
        N(19) + "The giant tubeworm, which can grow taller than an adult human, has no mouth and no stomach. " +
        N(20) + "Instead, its body holds billions of bacteria in a special organ, and the worm's red plume works like a gill, pulling chemicals from the water and delivering them to its tiny partners. " +
        N(21) + "The bacteria make food; the worm provides a safe home and a steady supply of ingredients. " +
        N(22) + "Neither could live at the vents as well without the other.</p>" +
        "<p>" + N(23) + "Life at the vents is not easy. " +
        N(24) + "Water gushing from some chimneys can be hotter than 350 degrees Celsius, far above the boiling point at the surface; it stays liquid only because of the crushing pressure of the ocean above it. " +
        N(25) + "Just a few meters away, the surrounding seawater is barely above freezing. " +
        N(26) + "Vents can also shut down without warning when the cracks beneath them shift, leaving whole communities to starve. " +
        N(27) + "Scientists have watched new vents open and become crowded with life within a few years, which suggests that vent animals are skilled at spreading their young across long stretches of dark seafloor.</p>" +
        "<p>" + N(28) + "The discovery changed more than a chapter in biology textbooks. " +
        N(29) + "It showed that sunlight is not the only possible starting point for life, and some researchers now think that Earth's earliest living things may have appeared in places much like these vents. " +
        N(30) + "It also widened the search for life beyond Earth. " +
        N(31) + "Several icy moons in our solar system are believed to hide oceans beneath their frozen crusts, far from any sunlight. " +
        N(32) + "If chemical energy can feed a crowded town on Earth's seafloor, it might be doing the same thing somewhere else in the dark.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Life Without Sunlight\"?",
          choices: [
            { letter: "A", text: "Deep-sea vents are too hot and unstable for most animals." },
            { letter: "B", text: "Vent discoveries showed that life can run on chemical energy." },
            { letter: "C", text: "Giant tubeworms are the largest animals in the deep ocean." },
            { letter: "D", text: "Submersibles have made the deep sea easier to reach than space." }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "9.RI.2.B",
          stem: "The author opens the article by describing the sunlight-based food chain mainly to —",
          choices: [
            { letter: "A", text: "argue that plants are the most important living things" },
            { letter: "B", text: "explain how algae manage to survive in the deep ocean" },
            { letter: "C", text: "set up the belief that the vent discovery overturned" },
            { letter: "D", text: "show that scientists are usually wrong about the sea" }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "Which choice best describes how paragraphs 2 through 4 (sentences 5–22) are organized?",
          choices: [
            { letter: "A", text: "A discovery is described, a question is raised, and an answer follows." },
            { letter: "B", text: "Two different kinds of vents are compared point by point." },
            { letter: "C", text: "Events are told in reverse order, from the present to the past." },
            { letter: "D", text: "A problem is stated, and several solutions are rejected in turn." }
          ],
          correct: "A"
        },
        {
          id: "liquid",
          sol: "9.RI.1.B",
          stem: "According to the passage, water from some vents stays liquid above 350 degrees Celsius because —",
          choices: [
            { letter: "A", text: "the hydrogen sulfide in it lowers its temperature" },
            { letter: "B", text: "bacteria absorb most of its heat as it rises" },
            { letter: "C", text: "the nearby seawater cools it almost instantly" },
            { letter: "D", text: "the weight of the ocean above it creates great pressure" }
          ],
          correct: "D"
        },
        {
          id: "synthesis",
          sol: "9.RV.1.B",
          stem: "Sentence 15 says chemosynthesis means putting together with chemicals. Based on this, the word part -synthesis most likely carries the idea of —",
          choices: [
            { letter: "A", text: "breaking apart" },
            { letter: "B", text: "heating up" },
            { letter: "C", text: "combining into a whole" },
            { letter: "D", text: "growing from light" }
          ],
          correct: "C"
        },
        {
          id: "spread",
          sol: "9.RI.3.A",
          stem: "Which sentence from the passage best supports the idea that vent animals can spread to new locations?",
          choices: [
            { letter: "A", text: "Scientists have watched new vents open and become crowded with life within a few years" },
            { letter: "B", text: "The giant tubeworm, which can grow taller than an adult human, has no mouth" },
            { letter: "C", text: "Just a few meters away, the surrounding seawater is barely above freezing." },
            { letter: "D", text: "Vents can also shut down without warning when the cracks beneath them shift" }
          ],
          correct: "A"
        },
        {
          id: "possible",
          sol: "9.RI.1.C",
          stem: "Which idea from the passage is presented as a possibility rather than an established fact?",
          choices: [
            { letter: "A", text: "Certain bacteria can use hydrogen sulfide to make sugar." },
            { letter: "B", text: "The giant tubeworm has no mouth and no stomach." },
            { letter: "C", text: "Hydrothermal vents were found near the Galápagos." },
            { letter: "D", text: "Earth's earliest life may have begun near vents." }
          ],
          correct: "D"
        },
        {
          id: "town",
          sol: "9.RV.1.F",
          stem: "The author compares the vent community to a town in sentence 9 and returns to that image in sentence 32. This repeated comparison mainly —",
          choices: [
            { letter: "A", text: "suggests that people may someday live near the vents" },
            { letter: "B", text: "stresses that the vents support a busy, crowded community" },
            { letter: "C", text: "shows that the vents lie close to inhabited islands" },
            { letter: "D", text: "hints that vent animals fight fiercely over the water" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c59-water-budget",
      family: "G9",
      title: "The Economy of Water",
      kind: "Informational · 9.RI",
      blurb: "Deserts are defined by thirst, not heat. Here is how their plants and animals balance the budget.",
      level: 3,
      passage:
        "<p>" + N(1) + "Ask most people to describe a desert, and they will talk about heat. " +
        N(2) + "Yet some of the world's largest deserts are cold for much of the year, and a few are covered in ice. " +
        N(3) + "What every desert shares is not temperature but thirst: a desert is usually defined as a place that receives less than about 250 millimeters of precipitation a year, and it often loses more water to evaporation than it gains from the sky. " +
        N(4) + "For the living things that make their homes there, survival is a matter of managing a budget in which water is the scarcest currency.</p>" +
        "<p>" + N(5) + "Desert plants have worked out several different ways to balance that budget. " +
        N(6) + "The simplest strategy is avoidance. " +
        N(7) + "Many desert wildflowers spend most of their lives as seeds, which can lie dormant in the soil for years. " +
        N(8) + "When enough rain finally falls, they sprout, flower, and produce new seeds within a few weeks, then die before the ground dries out again. " +
        N(9) + "In a sense, these plants never experience drought at all; they simply skip it.</p>" +
        "<p>" + N(10) + "A second strategy is storage. " +
        N(11) + "Cacti and other succulents hold water in thick, fleshy stems or leaves, sometimes storing enough to last through many rainless months. " +
        N(12) + "The pleated stem of a large cactus works something like an accordion, swelling outward after a storm and slowly shrinking as the plant draws on its supply during the dry months. " +
        N(13) + "Many succulents also keep the tiny pores on their surfaces closed during the heat of the day, opening them only at night, when cooler air means that less water escapes as they take in carbon dioxide.</p>" +
        "<p>" + N(14) + "The third strategy is endurance. " +
        N(15) + "Some shrubs neither hide nor hoard; instead, they tolerate a dryness that would kill most other plants. " +
        N(16) + "Their leaves are small and often coated with wax or resin, which reduces water loss, and their roots may spread widely just beneath the surface to catch brief rains or reach deep underground toward hidden moisture. " +
        N(17) + "Certain desert shrubs can drop their leaves in a long drought and grow new ones when conditions improve, trading a season's growth for survival.</p>" +
        "<p>" + N(18) + "Animals keep their own water budgets. " +
        N(19) + "Many avoid the hottest hours by resting in cool underground burrows during the day and coming out to feed at night, when the air is cooler and moister and less water is lost with every breath. " +
        N(20) + "Some small desert rodents rarely drink at all; they get most of the water they need from the dry seeds they eat, which release water as their bodies break the seeds down. " +
        N(21) + "Their kidneys are so efficient that they lose very little of that water once they have it.</p>" +
        "<p>" + N(22) + "These strategies do not operate in isolation. " +
        N(23) + "Young cacti often survive only because they sprout in the shade of a \"nurse\" shrub, which shields them from the scorching sun until they are large enough to stand alone, a process that can take many years. " +
        N(24) + "Fragile layers of moss, lichen, and bacteria, known as biological soil crust, hold the sand in place and help rainwater soak in rather than run off. " +
        N(25) + "Because growth in such a place is so slow, damage can last a remarkably long time; tire tracks across desert crust can remain visible for decades. " +
        N(26) + "A desert, then, is not an empty landscape but a carefully balanced one, and its balance is far easier to break than to restore.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best summarizes the central idea of \"The Economy of Water\"?",
          choices: [
            { letter: "A", text: "Deserts are the hottest places on Earth, and little survives there." },
            { letter: "B", text: "Cacti are better suited to desert life than any other kind of plant." },
            { letter: "C", text: "Desert life survives through varied, linked ways of managing water." },
            { letter: "D", text: "Desert animals depend entirely on plants for the water they need." }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How are paragraphs 2 through 4 (sentences 5–17) mainly organized?",
          choices: [
            { letter: "A", text: "by sorting plant adaptations into three categories" },
            { letter: "B", text: "by tracing a single plant through its life cycle" },
            { letter: "C", text: "by comparing desert plants with rainforest plants" },
            { letter: "D", text: "by listing the causes of a desert's rising heat" }
          ],
          correct: "A"
        },
        {
          id: "cold",
          sol: "9.RI.2.B",
          stem: "The author includes the information about cold and icy deserts in sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "describe the ice that covers most of the world's deserts" },
            { letter: "B", text: "suggest that cold deserts hold the most varied life" },
            { letter: "C", text: "argue that the word desert should no longer be used" },
            { letter: "D", text: "challenge a common idea about what makes a desert" }
          ],
          correct: "D"
        },
        {
          id: "rodents",
          sol: "9.RI.1.B",
          stem: "According to the passage, how do some small desert rodents get most of their water?",
          choices: [
            { letter: "A", text: "by licking dew from shrub leaves at night" },
            { letter: "B", text: "by breaking down the dry seeds they eat" },
            { letter: "C", text: "by digging burrows down to groundwater" },
            { letter: "D", text: "by chewing the fleshy stems of cacti" }
          ],
          correct: "B"
        },
        {
          id: "restore",
          sol: "9.RI.3.A",
          stem: "Which detail best supports the claim in sentence 26 that a desert's balance is far easier to break than to restore?",
          choices: [
            { letter: "A", text: "Many desert wildflowers spend most of their lives as seeds." },
            { letter: "B", text: "Many animals rest in burrows during the hottest hours." },
            { letter: "C", text: "Cacti hold water in thick, fleshy stems or leaves." },
            { letter: "D", text: "Tire tracks across desert crust can last for decades." }
          ],
          correct: "D"
        },
        {
          id: "skip",
          sol: "9.RI.1.C",
          stem: "In sentence 9, the author says these plants never experience drought at all; they simply skip it. This statement is best described as —",
          choices: [
            { letter: "A", text: "a measured fact taken from one scientific study" },
            { letter: "B", text: "an opinion that contradicts the facts in sentence 8" },
            { letter: "C", text: "an interpretation that sums up sentences 7 and 8" },
            { letter: "D", text: "a prediction about how wildflowers will change" }
          ],
          correct: "C"
        },
        {
          id: "hoard",
          sol: "9.RV.1.E",
          stem: "In sentence 15, the author says some shrubs neither hide nor hoard. Compared with store, the word hoard suggests keeping something —",
          choices: [
            { letter: "A", text: "in a secret, tightly guarded supply" },
            { letter: "B", text: "in a careless and wasteful way" },
            { letter: "C", text: "for other living things to share" },
            { letter: "D", text: "for only a single short moment" }
          ],
          correct: "A"
        },
        {
          id: "dormant",
          sol: "9.RV.1.C",
          stem: "As used in sentence 7, the word dormant most nearly means —",
          choices: [
            { letter: "A", text: "dangerous to animals" },
            { letter: "B", text: "alive but inactive" },
            { letter: "C", text: "buried too deeply" },
            { letter: "D", text: "damaged by heat" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── EPIC · VOCABULARY ───────────────────────── */
    {
      id: "g9-rv-c59-conservator",
      family: "G9",
      title: "The Smallest Brush",
      kind: "Vocabulary · 9.RV",
      blurb: "A summer intern spends his first day underground, watching a conservator clean one stamp-sized patch.",
      level: 1,
      passage:
        "<p>" + N(1) + "On his first day as a summer intern at the Harbor City Art Museum, Ravi Menon expected to spend his time in the bright galleries upstairs. " +
        N(2) + "Instead, he was led down two flights of stairs to a quiet room with white walls, tall lamps, and a long table covered in soft gray cloth. " +
        N(3) + "This was the conservation studio, where damaged works of art come to be repaired. " +
        N(4) + "\"Most visitors never see this room,\" said Ms. Teodora Vlasic, the museum's head conservator. " +
        N(5) + "\"But nearly every painting upstairs has spent some time down here.\"</p>" +
        "<p>" + N(6) + "On the table lay a portrait of a young woman holding a basket of pears. " +
        N(7) + "The painting was about two hundred years old, and time had not been kind to it. " +
        N(8) + "A yellow-brown film covered the whole surface, so that the woman's blue dress looked green and the pears looked like potatoes. " +
        N(9) + "Ms. Vlasic explained that old paintings were often coated with varnish to protect them, but over many years some varnishes <strong>deteriorate</strong>, slowly breaking down and turning dark and cloudy. " +
        N(10) + "\"The painting isn't dirty, exactly,\" she said. " +
        N(11) + "\"It's hiding behind its own shield.\"</p>" +
        "<p>" + N(12) + "Before touching anything, Ms. Vlasic spent most of the morning studying the painting. " +
        N(13) + "She would <strong>scrutinize</strong> a single corner for many minutes, bending close under a magnifying lamp, then step back and make notes. " +
        N(14) + "She photographed the painting under ordinary light and again under ultraviolet light, which made the old varnish glow a strange greenish color. " +
        N(15) + "In the ultraviolet photo, Ravi noticed small dark patches near the basket that had been completely <strong>obscured</strong> under the yellow film. " +
        N(16) + "\"Those are spots where someone repaired the painting long ago,\" Ms. Vlasic said. " +
        N(17) + "\"Now we know where to be careful.\"</p>" +
        "<p>" + N(18) + "After lunch, the cleaning began. " +
        N(19) + "Ms. Vlasic rolled a tiny cotton swab, no bigger than a pencil eraser, and dampened it with a mild solvent. " +
        N(20) + "She tested it first on the very edge of the painting, where the frame would cover any mistake. " +
        N(21) + "When the varnish lifted cleanly and the paint beneath stayed put, she moved on, rolling the swab across an area about the size of a postage stamp. " +
        N(22) + "Ravi held his breath. " +
        N(23) + "Under the swab, a patch of bright blue appeared, as fresh as if it had been painted that week.</p>" +
        "<p>" + N(24) + "The work was <strong>painstaking</strong>. " +
        N(25) + "By the end of the day, the clean patch was only as large as Ravi's palm, and the rest of the painting was still covered in its yellow coat. " +
        N(26) + "Ms. Vlasic said the whole job would take about four months. " +
        N(27) + "When the cleaning was finished, she would fill tiny cracks and losses with new paint, but only paint that could be removed later. " +
        N(28) + "\"Everything I add must be <strong>reversible</strong>,\" she explained. " +
        N(29) + "\"Someday, a conservator who knows more than I do may want to undo my work, and I must make that possible.\"</p>" +
        "<p>" + N(30) + "Ravi asked whether the painting would still be <strong>authentic</strong> after so many repairs. " +
        N(31) + "Ms. Vlasic smiled, as if she had been waiting for that question. " +
        N(32) + "\"My job is not to make it new,\" she said. " +
        N(33) + "\"My job is to let the painter's real colors be seen again, and to leave as little of myself behind as I can.\" " +
        N(34) + "Ravi looked at the small square of blue, then at the long, cloudy remainder of the painting, and decided that four months suddenly did not seem very long at all.</p>",
      claims: [
        {
          id: "deteriorate",
          sol: "9.RV.1.C",
          stem: "In sentence 9, the word deteriorate most nearly means to —",
          choices: [
            { letter: "A", text: "become thicker" },
            { letter: "B", text: "break down over time" },
            { letter: "C", text: "protect from harm" },
            { letter: "D", text: "change into paint" }
          ],
          correct: "B"
        },
        {
          id: "scrutinize",
          sol: "9.RV.1.E",
          stem: "The author could have written look at instead of scrutinize in sentence 13. Compared with look at, scrutinize suggests that Ms. Vlasic examines the painting —",
          choices: [
            { letter: "A", text: "quickly and with little interest" },
            { letter: "B", text: "from far across the room" },
            { letter: "C", text: "with doubts about its value" },
            { letter: "D", text: "closely and in great detail" }
          ],
          correct: "D"
        },
        {
          id: "obscured",
          sol: "9.RV.1.C",
          stem: "Which phrase from sentence 15 best helps the reader understand that obscured means hidden from view?",
          choices: [
            { letter: "A", text: "under the yellow film" },
            { letter: "B", text: "small dark patches" },
            { letter: "C", text: "In the ultraviolet photo" },
            { letter: "D", text: "near the basket" }
          ],
          correct: "A"
        },
        {
          id: "reversible",
          sol: "9.RV.1.B",
          stem: "The word reversible is built from re- (back), vers (turn) and -ible (able to be). Based on these parts and sentence 29, reversible paint is paint that —",
          choices: [
            { letter: "A", text: "has been turned to face the wall" },
            { letter: "B", text: "can be used on both sides of a canvas" },
            { letter: "C", text: "can be taken back off without harm" },
            { letter: "D", text: "was mixed from very old materials" }
          ],
          correct: "C"
        },
        {
          id: "painstaking",
          sol: "9.RV.1.C",
          stem: "As used in sentence 24, painstaking most nearly means —",
          choices: [
            { letter: "A", text: "causing physical pain" },
            { letter: "B", text: "done with slow, careful effort" },
            { letter: "C", text: "finished in a single day" },
            { letter: "D", text: "dull and without purpose" }
          ],
          correct: "B"
        },
        {
          id: "shield",
          sol: "9.RV.1.F",
          stem: "In sentence 11, Ms. Vlasic says the painting is hiding behind its own shield. She means that the varnish —",
          choices: [
            { letter: "A", text: "was meant to protect the painting but now covers it up" },
            { letter: "B", text: "was added long ago by a thief to disguise the painting" },
            { letter: "C", text: "makes the painting strong enough to survive any damage" },
            { letter: "D", text: "has turned the painting's colors permanently green" }
          ],
          correct: "A"
        },
        {
          id: "respect",
          sol: "9.RL.1.C",
          stem: "Which quotation best shows that Ms. Vlasic respects the original painter's work?",
          choices: [
            { letter: "A", text: "\"She photographed the painting under ordinary light\"" },
            { letter: "B", text: "\"the whole job would take about four months\"" },
            { letter: "C", text: "\"leave as little of myself behind as I can\"" },
            { letter: "D", text: "\"Most visitors never see this room\"" }
          ],
          correct: "C"
        },
        {
          id: "authentic",
          sol: "9.RV.1.C",
          stem: "In sentence 30, Ravi wonders whether the painting will still be authentic. In this context, authentic most nearly means —",
          choices: [
            { letter: "A", text: "valuable" },
            { letter: "B", text: "beautiful" },
            { letter: "C", text: "complete" },
            { letter: "D", text: "genuine" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── EPIC · PAIRED TEXTS ───────────────────────── */
    {
      id: "g9-dsr-c59-schoolhouse",
      family: "G9",
      title: "The Schoolhouse Under the Garage",
      kind: "Paired texts · 9.DSR",
      blurb: "A news article reports a buried schoolhouse; the baker across the street writes in about the delay.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Garage Work Halted After Crew Uncovers Old Schoolhouse (Riverbend Weekly)</strong></p>" +
        "<p>" + N(1) + "Construction of the new parking garage beside the Riverbend Public Library stopped on Monday morning after an excavator operator noticed a neat line of hand-cut stones about four feet below the surface. " +
        N(2) + "By the afternoon, workers using shovels instead of machines had uncovered the corner of a brick-and-stone foundation, along with pieces of broken slate tablets and several small glass inkwells. " +
        N(3) + "Town records suggest that the site once held the Riverbend Common School, a one-room schoolhouse that opened in the 1840s and burned down in 1891. " +
        N(4) + "No drawings or photographs of the building are known to survive.</p>" +
        "<p>" + N(5) + "Under the town's building rules, work on public land must pause whenever a possible historic site is found, and a qualified archaeologist must assess it. " +
        N(6) + "County archaeologist Dr. Miriam Achterberg visited the site on Tuesday and recommended a six-week excavation before construction resumes. " +
        N(7) + "\"Almost nothing is written down about how children in this town were taught in its earliest decades,\" she said. " +
        N(8) + "\"The building is gone, but the ground still remembers it.\"</p>" +
        "<p>" + N(9) + "The pause will push the garage's opening from September to at least November, and the town estimates that it will add about $40,000 to the project's cost. " +
        N(10) + "Town manager Leon Fairweather said the money would come from a reserve fund set aside for unexpected expenses, so no other projects would be delayed. " +
        N(11) + "More than sixty volunteers from the county historical society and the high school's history club have already signed up to help sift soil and wash finds. " +
        N(12) + "Every object will be cleaned, recorded, and photographed, and a selection will be displayed in the library lobby next spring. " +
        N(13) + "Dr. Achterberg said she hopes the finds might reveal what students studied, what they wrote with, and perhaps even what they brought for lunch.</p>" +
        "<p><strong>Text 2 — Let the Ground Talk, but Let Main Street Talk Too (a letter to the editor from Ruth Abernathy, owner of the Corner Loaf Bakery)</strong></p>" +
        "<p>" + N(14) + "I have run the bakery across the street from the library for nineteen years, and I was as excited as anyone to read about the old schoolhouse. " +
        N(15) + "My own grandmother learned her letters in a one-room school not so different from that one, and I would love to see those inkwells for myself. " +
        N(16) + "But I want readers to understand what \"six more weeks\" means on my side of the street. " +
        N(17) + "Since the construction fences went up in May, my morning customers have had nowhere to park, and my sales are down by nearly a third. " +
        N(18) + "Two more months of closed sidewalks may mean letting go of one of my three employees, a young man who has worked for me since he was sixteen. " +
        N(19) + "Other shop owners on the block, from the shoe repair counter to the flower stand, tell me the same story.</p>" +
        "<p>" + N(20) + "I am not asking the town to pave over its history. " +
        N(21) + "I am asking it to dig in a way that also remembers the living. " +
        N(22) + "The archaeologists could work longer days or on weekends, especially with so many volunteers eager to help. " +
        N(23) + "The town could open the library's staff lot to shoppers in the mornings until the garage is finished. " +
        N(24) + "Simple signs pointing drivers to the public lot on Cedar Street, only three blocks away, would cost almost nothing and help right away. " +
        N(25) + "And when the slates and inkwells go on display, they could come with a small card thanking the neighbors who waited for them.</p>" +
        "<p>" + N(26) + "The ground may remember the schoolhouse, as the archaeologist says. " +
        N(27) + "I hope the town will remember Main Street, too, while there are still people on it to remember.</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          stem: "Both the article and the letter treat the discovery of the schoolhouse as —",
          choices: [
            { letter: "A", text: "a mistake that should have been prevented" },
            { letter: "B", text: "a reason to cancel the garage altogether" },
            { letter: "C", text: "something worth studying and sharing" },
            { letter: "D", text: "a problem only the town manager can solve" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The two texts differ mainly in that Text 2 focuses more on —",
          choices: [
            { letter: "A", text: "how the delay affects nearby businesses" },
            { letter: "B", text: "what the inkwells reveal about schooling" },
            { letter: "C", text: "why the schoolhouse burned down in 1891" },
            { letter: "D", text: "how archaeologists assess a historic site" }
          ],
          correct: "A"
        },
        {
          id: "echo",
          sol: "9.DSR.E",
          stem: "In sentence 26, Ms. Abernathy most directly echoes which sentence from Text 1?",
          choices: [
            { letter: "A", text: "\"Construction of the new parking garage ... stopped on Monday morning\"" },
            { letter: "B", text: "\"No drawings or photographs of the building are known to survive.\"" },
            { letter: "C", text: "\"the money would come from a reserve fund set aside\"" },
            { letter: "D", text: "\"The building is gone, but the ground still remembers it.\"" }
          ],
          correct: "D"
        },
        {
          id: "realistic",
          sol: "9.DSR.E",
          stem: "In sentence 22, Ms. Abernathy suggests that the archaeologists work longer hours with help. Which detail from Text 1 best shows that this suggestion is realistic?",
          choices: [
            { letter: "A", text: "Workers used shovels instead of machines." },
            { letter: "B", text: "More than sixty volunteers have signed up." },
            { letter: "C", text: "The finds will be shown in the library lobby." },
            { letter: "D", text: "The pause will add about $40,000 to the cost." }
          ],
          correct: "B"
        },
        {
          id: "checkable",
          sol: "9.RI.1.C",
          stem: "Which statement from Text 2 is a factual claim a reader could check, rather than an opinion or a wish?",
          choices: [
            { letter: "A", text: "\"my sales are down by nearly a third\"" },
            { letter: "B", text: "\"I am not asking the town to pave over its history\"" },
            { letter: "C", text: "\"dig in a way that also remembers the living\"" },
            { letter: "D", text: "\"I hope the town will remember Main Street, too\"" }
          ],
          correct: "A"
        },
        {
          id: "grandmother",
          sol: "9.RI.2.B",
          stem: "Ms. Abernathy mentions her grandmother in sentence 15 mainly to —",
          choices: [
            { letter: "A", text: "explain how she first learned to bake bread" },
            { letter: "B", text: "prove that the schoolhouse belonged to her family" },
            { letter: "C", text: "suggest that old schools taught students better" },
            { letter: "D", text: "show that she also values the town's history" }
          ],
          correct: "D"
        },
        {
          id: "pairing",
          sol: "9.DSR.D",
          stem: "The most likely reason for pairing the article with Ms. Abernathy's letter is to show —",
          choices: [
            { letter: "A", text: "how a one-room schoolhouse was built in the 1840s" },
            { letter: "B", text: "a cost of the delay that the article leaves out" },
            { letter: "C", text: "why volunteers enjoy working at historic sites" },
            { letter: "D", text: "that the archaeologist and the baker disagree on dates" }
          ],
          correct: "B"
        },
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which sentence from Text 2 best states the central claim of Ms. Abernathy's letter?",
          choices: [
            { letter: "A", text: "\"I have run the bakery across the street ... for nineteen years\"" },
            { letter: "B", text: "\"my morning customers have had nowhere to park\"" },
            { letter: "C", text: "\"I am asking it to dig in a way that also remembers the living.\"" },
            { letter: "D", text: "\"they could come with a small card thanking the neighbors\"" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── EPIC · DRAMA ───────────────────────── */
    {
      id: "g9-rl-c59-gallery-nine",
      family: "G9",
      title: "Harbor at Four O'Clock",
      kind: "Drama · 9.RL",
      blurb: "The night before her first museum tour, a student volunteer admits she doesn't understand the last painting.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A museum gallery at night. " +
        N(2) + "Most of the lights are off, except for a single lamp aimed at a huge painting of blue and orange smears titled Harbor at Four O'Clock, which hangs alone on the far wall. " +
        N(3) + "ESPERANZA CRUZ, seventeen, stands before it in a volunteer's blue vest, holding a thick stack of index cards and whispering to herself. " +
        N(4) + "A flashlight beam swings in from the doorway.</em></p>" +
        "<p><strong>MR. DOBROWSKI:</strong> " + N(5) + "The museum closed at six, Miss Cruz. " +
        N(6) + "It's nearly nine.</p>" +
        "<p><strong>ESPERANZA:</strong> " + N(7) + "I know, I'm sorry, Ms. Park said I could stay late to practice. " +
        N(8) + "I give my first tour tomorrow at ten, to a whole class of sixth graders, and this is the last stop. " +
        "<em>" + N(9) + "She shuffles the cards, and one slips to the floor.</em> " +
        N(10) + "The big finish.</p>" +
        "<p><strong>MR. DOBROWSKI:</strong> <em>" + N(11) + "Picking up the card and squinting at it.</em> " +
        N(12) + "\"The artist's bold use of color expresses the restless energy of modern industry.\" " +
        N(13) + "That's what you're going to tell them?</p>" +
        "<p><strong>ESPERANZA:</strong> " + N(14) + "It's what the catalog says. " +
        "<em>" + N(15) + "Turning to the audience while the guard studies the painting.</em> " +
        N(16) + "The truth is, I don't understand this painting at all. " +
        N(17) + "For three weeks I've stared at it, and it still looks like somebody spilled breakfast on a sail. " +
        N(18) + "If one person asks me a real question tomorrow, something that isn't on these cards, I'm finished.</p>" +
        "<p><strong>MR. DOBROWSKI:</strong> " + N(19) + "You know what I see when I walk past at two in the morning? " +
        N(20) + "Not industry. " +
        N(21) + "I see the hour before a storm, when the water goes flat and the sky turns that bruised orange and every boat in the harbor hurries home at once. " +
        "<em>" + N(22) + "He raises the flashlight and traces the smears with its beam.</em> " +
        N(23) + "Those are the boats. " +
        N(24) + "That dark streak is the breakwater. " +
        N(25) + "Took me about four years to notice.</p>" +
        "<p><strong>ESPERANZA:</strong> " + N(26) + "Four years? " +
        N(27) + "I have until ten tomorrow morning. " +
        N(28) + "Besides, the catalog was written by an expert. " +
        N(29) + "Who am I to stand up there and say it's about a storm?</p>" +
        "<p><strong>MR. DOBROWSKI:</strong> " + N(30) + "Who's the expert to say it isn't? " +
        N(31) + "The painter has been gone fifty years, and as far as I know he didn't leave a note explaining any of it. " +
        N(32) + "All anybody has is the painting and a pair of eyes. " +
        "<em>" + N(33) + "Aside, lowering the flashlight.</em> " +
        N(34) + "Twenty-two years ago, I stood right here in a borrowed tie and gave my one and only tour. " +
        N(35) + "I read every word off a card, and a little boy asked me what the painting smelled like, and I had no answer, so I never gave another. " +
        "<em>" + N(36) + "To Esperanza.</em> " +
        N(37) + "Here's a secret. " +
        N(38) + "The people on your tour won't need you to understand it, not the way the catalog pretends to. " +
        N(39) + "They'll need you to help them look.</p>" +
        "<p><strong>ESPERANZA:</strong> " + N(40) + "So instead of telling them what it means... " +
        "<em>" + N(41) + "She sets the stack of cards face down on the bench.</em> " +
        N(42) + "I ask them what they notice first? " +
        N(43) + "And then I tell them what a night guard once saw?</p>" +
        "<p><strong>MR. DOBROWSKI:</strong> " + N(44) + "Leave my name out of it. " +
        "<em>" + N(45) + "He starts toward the doorway, then stops without turning around.</em> " +
        N(46) + "And if some kid asks you what it smells like?</p>" +
        "<p><strong>ESPERANZA:</strong> <em>" + N(47) + "Looking at the painting for a long moment.</em> " +
        N(48) + "Rain. " +
        N(49) + "Rain that hasn't fallen yet.</p>" +
        "<p><em>" + N(50) + "MR. DOBROWSKI nods once, almost smiling, and switches off his flashlight before stepping out into the dark hallway. " +
        N(51) + "The lamp on the painting stays lit as the rest of the stage goes dark.</em></p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          stem: "The playwright has Esperanza speak to the audience in sentences 15–18 mainly to —",
          choices: [
            { letter: "A", text: "reveal a fear she hides from Mr. Dobrowski" },
            { letter: "B", text: "explain the history of the painting to viewers" },
            { letter: "C", text: "show that she has memorized the catalog" },
            { letter: "D", text: "suggest that she plans to cancel the tour" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "9.RL.1.D",
          stem: "Mr. Dobrowski's aside in sentences 33–35 creates dramatic irony because the audience learns that —",
          choices: [
            { letter: "A", text: "he painted Harbor at Four O'Clock himself" },
            { letter: "B", text: "he once froze on a tour, which Esperanza does not know" },
            { letter: "C", text: "Ms. Park has asked him to watch Esperanza" },
            { letter: "D", text: "the catalog was written by his former boss" }
          ],
          correct: "B"
        },
        {
          id: "breakfast",
          sol: "9.RL.2.A",
          stem: "In sentence 17, Esperanza says the painting looks like somebody spilled breakfast on a sail. This comparison mainly shows that she finds the painting —",
          choices: [
            { letter: "A", text: "funny and cheerful" },
            { letter: "B", text: "old and badly damaged" },
            { letter: "C", text: "messy and meaningless" },
            { letter: "D", text: "calm and peaceful" }
          ],
          correct: "C"
        },
        {
          id: "storm",
          sol: "9.RL.2.B",
          stem: "The images in sentence 21 (flat water, a bruised orange sky, boats hurrying home) mainly create a mood of —",
          choices: [
            { letter: "A", text: "lazy summer calm" },
            { letter: "B", text: "cheerful celebration" },
            { letter: "C", text: "lonely sadness" },
            { letter: "D", text: "uneasy expectation" }
          ],
          correct: "D"
        },
        {
          id: "cards",
          sol: "9.RL.1.D",
          stem: "The stage direction in sentence 41, in which Esperanza sets the cards face down, mainly shows that she —",
          choices: [
            { letter: "A", text: "is too tired to keep practicing tonight" },
            { letter: "B", text: "is giving up on the idea of a scripted tour" },
            { letter: "C", text: "wants Mr. Dobrowski to read the cards aloud" },
            { letter: "D", text: "has decided to skip the painting tomorrow" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does the scene in Gallery Nine most clearly develop?",
          choices: [
            { letter: "A", text: "Experts' opinions should always be trusted over one's own." },
            { letter: "B", text: "Night work is lonely and teaches people very little." },
            { letter: "C", text: "Helping others look closely matters more than having answers." },
            { letter: "D", text: "Old paintings lose their meaning as the years pass." }
          ],
          correct: "C"
        },
        {
          id: "smell",
          sol: "9.RL.3.A",
          stem: "Esperanza's answer in sentences 48 and 49 connects to an earlier part of the play because it —",
          choices: [
            { letter: "A", text: "answers the very question that once silenced Mr. Dobrowski" },
            { letter: "B", text: "repeats a line from the catalog card she dropped" },
            { letter: "C", text: "explains why the museum closed early that night" },
            { letter: "D", text: "proves that the painter wrote a note about rain" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "9.RL.2.C",
          stem: "The tone of the final stage directions (sentences 50 and 51) is best described as —",
          choices: [
            { letter: "A", text: "bitter and mocking" },
            { letter: "B", text: "tense and fearful" },
            { letter: "C", text: "playful and silly" },
            { letter: "D", text: "quietly hopeful" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── EPIC · FUNCTIONAL TEXT ───────────────────────── */
    {
      id: "g9-ri-c59-volunteer-day",
      family: "G9",
      title: "Copperwash Canyon Volunteer Guide",
      kind: "Functional text · 9.RI",
      blurb: "Water, hats, flags and soil crust: what every volunteer must know before a morning at a desert dig.",
      level: 1,
      passage:
        "<p><strong>Copperwash Canyon Archaeology Project — Volunteer Day Guide</strong></p>" +
        "<p><strong>Welcome.</strong> " + N(1) + "Thank you for joining the Copperwash Canyon Archaeology Project for a volunteer day. " +
        N(2) + "Our team is studying the remains of a small farming village that stood near the mouth of the canyon roughly eight hundred years ago. " +
        N(3) + "Volunteers do real work here: every bucket you screen and every fragment you wash adds to what we know about the people who lived in this valley. " +
        N(4) + "Please read this guide completely before your visit, and bring it with you on the day.</p>" +
        "<p><strong>Before You Arrive.</strong> " + N(5) + "Volunteer days run from 6:30 a.m. to 12:30 p.m., because afternoon temperatures in the canyon often climb above 100 degrees Fahrenheit. " +
        N(6) + "Bring at least three liters of water, a wide-brimmed hat, sunscreen, and a snack. " +
        N(7) + "Wear long pants and sturdy closed-toe shoes; sandals are not permitted anywhere on the site. " +
        N(8) + "Volunteers under eighteen must have a signed permission form, which can be downloaded from the project's website, and must be accompanied by an adult for the full day.</p>" +
        "<p><strong>Check-In.</strong> " + N(9) + "Park only in the gravel lot marked by orange flags at the end of Ridge Road. " +
        N(10) + "Driving or parking anywhere else can crush the fragile desert soil and the shallow remains buried in it. " +
        N(11) + "Check in at the white tent, where a crew member will give you a name badge, a short safety talk, and your assignment for the morning.</p>" +
        "<p><strong>Your Tasks.</strong> " + N(12) + "Most volunteers work at one of three stations. " +
        N(13) + "At the screening station, you will shake buckets of soil through wire mesh and pick out anything that is not a rock or a root, such as pottery pieces, stone flakes, or burned seeds. " +
        N(14) + "At the washing station, you will gently clean fragments with soft brushes and water, then lay them on trays to dry. " +
        N(15) + "At the recording station, you will help a crew member write labels and enter each find into the project's catalog. " +
        N(16) + "Crew members will rotate you between stations every two hours so that you can try each one.</p>" +
        "<p><strong>Site Rules.</strong> " + N(17) + "Walk only on paths lined with string or flags. " +
        N(18) + "The dark, crusty layer on the ground between the paths is living soil crust, and a single footprint can damage it for years. " +
        N(19) + "Never pick up an object from the surface, even if it looks unimportant; its exact location is part of the information we are collecting. " +
        N(20) + "If you notice something interesting, mark the spot with one of the small flags from your kit and call a crew member. " +
        N(21) + "Taking any object home, even a tiny pottery chip, is against the law on public land and is strictly forbidden.</p>" +
        "<p><strong>Heat Safety.</strong> " + N(22) + "Drink water every fifteen to twenty minutes, even if you do not feel thirsty. " +
        N(23) + "Shade tents are set up beside every work station, and you may take a break at any time. " +
        N(24) + "Tell a crew member right away if you or anyone near you feels dizzy, confused, or has a headache, because these can be early signs of heat illness.</p>" +
        "<p><strong>Questions?</strong> " + N(25) + "Contact volunteer coordinator Marisol Ybarra at the project office, Monday through Friday, before your scheduled day. " +
        N(26) + "In case of severe weather, including the sudden floods that can sweep through the canyon after storms, volunteer days are cancelled, and you will receive a message by 5:00 a.m.</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "What is the main purpose of the Copperwash Canyon Volunteer Day Guide?",
          choices: [
            { letter: "A", text: "to persuade readers to study archaeology in college" },
            { letter: "B", text: "to prepare volunteers to work safely and usefully" },
            { letter: "C", text: "to describe the history of the village in detail" },
            { letter: "D", text: "to explain how soil crust forms in the desert" }
          ],
          correct: "B"
        },
        {
          id: "hours",
          sol: "9.RI.1.B",
          stem: "According to the guide, why do volunteer days end at 12:30 p.m.?",
          choices: [
            { letter: "A", text: "Crew members must catalog the finds in the afternoon." },
            { letter: "B", text: "The gravel parking lot closes at one o'clock." },
            { letter: "C", text: "Volunteers rotate between stations every two hours." },
            { letter: "D", text: "Afternoon temperatures often climb above 100 degrees." }
          ],
          correct: "D"
        },
        {
          id: "crust",
          sol: "9.RI.3.A",
          stem: "Which rule in the guide most directly responds to the problem described in sentence 18?",
          choices: [
            { letter: "A", text: "Walk only on paths lined with string or flags." },
            { letter: "B", text: "Bring at least three liters of water." },
            { letter: "C", text: "Never take any object home from the site." },
            { letter: "D", text: "Check in at the white tent when you arrive." }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "9.RI.2.A",
          stem: "Why does the guide use headings such as Check-In and Heat Safety?",
          choices: [
            { letter: "A", text: "to show the order in which the village was built" },
            { letter: "B", text: "to compare this project with other desert digs" },
            { letter: "C", text: "to group related information so it is easy to find" },
            { letter: "D", text: "to separate the crew's facts from its opinions" }
          ],
          correct: "C"
        },
        {
          id: "reason",
          sol: "9.RI.2.B",
          stem: "The guide includes the explanation after the semicolon in sentence 19 mainly to —",
          choices: [
            { letter: "A", text: "help volunteers understand the reason behind the rule" },
            { letter: "B", text: "warn volunteers that most surface objects are worthless" },
            { letter: "C", text: "show that crew members do not trust the volunteers" },
            { letter: "D", text: "explain how objects are cleaned at the washing station" }
          ],
          correct: "A"
        },
        {
          id: "notice",
          sol: "9.RI.1.B",
          stem: "According to the guide, what should a volunteer do after noticing an interesting object on the ground?",
          choices: [
            { letter: "A", text: "Pick it up and carry it to the washing station." },
            { letter: "B", text: "Mark the spot with a small flag and call the crew." },
            { letter: "C", text: "Photograph it and enter it into the catalog." },
            { letter: "D", text: "Cover it with soil so that it stays protected." }
          ],
          correct: "B"
        },
        {
          id: "archaeology",
          sol: "9.RV.1.B",
          stem: "The word archaeology comes from Greek parts meaning ancient and study of. Based on this, an archaeology project is mainly —",
          choices: [
            { letter: "A", text: "a plan to build new homes on old farmland" },
            { letter: "B", text: "a search for water deep under the desert" },
            { letter: "C", text: "a program that trains crews in heat safety" },
            { letter: "D", text: "a careful study of people from the distant past" }
          ],
          correct: "D"
        },
        {
          id: "background",
          sol: "9.RI.1.C",
          stem: "Which sentence from the guide gives background information rather than an instruction?",
          choices: [
            { letter: "A", text: "\"Wear long pants and sturdy closed-toe shoes\"" },
            { letter: "B", text: "\"Park only in the gravel lot marked by orange flags\"" },
            { letter: "C", text: "\"Our team is studying the remains of a small farming village\"" },
            { letter: "D", text: "\"Drink water every fifteen to twenty minutes\"" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── EPIC · ARGUMENT ───────────────────────── */
    {
      id: "g9-ri-c59-look-down",
      family: "G9",
      title: "Look Down Before You Look Up",
      kind: "Argument · 9.RI",
      blurb: "A student editorial argues that her school should add a class about the least-explored place on Earth.",
      level: 2,
      passage:
        "<p><strong>Look Down Before You Look Up</strong> — an editorial by Hana Kobayashi, Grade 9, for the Eastfield High Courier</p>" +
        "<p>" + N(1) + "Every year, our school's Space Week fills the gym with model rockets, star charts, and a long line for the inflatable planetarium dome, and a crowd of younger brothers and sisters who come in on Saturday. " +
        N(2) + "I love Space Week. " +
        N(3) + "But I want to make a case for a place that is much closer to home and, strangely, much less known: the deep ocean. " +
        N(4) + "Our school should add an ocean exploration elective, and it should start next fall.</p>" +
        "<p>" + N(5) + "Consider how little we have seen. " +
        N(6) + "The ocean covers about seventy percent of Earth's surface, yet only around a quarter of the seafloor has been mapped in high detail. " +
        N(7) + "We have sharper maps of the surface of Mars than of most of the ground beneath our own oceans. " +
        N(8) + "Each time a research ship sends a camera into the deep, scientists seem to return with animals that no one has ever named, from glowing worms to fish with see-through heads. " +
        N(9) + "A planet with that many unanswered questions is the perfect classroom.</p>" +
        "<p>" + N(10) + "The deep ocean also matters to our daily lives in ways most students never hear about. " +
        N(11) + "Ocean currents carry heat around the globe, moving warm water toward the poles and cold water back again, and help shape the weather we get. " +
        N(12) + "Chemicals found in sea sponges, corals, and other marine creatures have already been developed into medicines, and researchers continue to test others. " +
        N(13) + "Learning how the deep sea works is not a hobby for a few experts; it is part of understanding the planet we all depend on.</p>" +
        "<p>" + N(14) + "Some people will argue that an elective like this is unrealistic, since our school is three hours from the coast and cannot exactly send students to the bottom of the sea. " +
        N(15) + "That concern is understandable, but it is based on an outdated picture of ocean science. " +
        N(16) + "Many research ships now stream their dives live online, and some invite classrooms to send questions to the scientists on board in real time, at no cost to the school. " +
        N(17) + "Free seafloor maps and data sets are available to anyone with a laptop. " +
        N(18) + "Our science department already owns the laptops; what it lacks is a course that puts them to this use.</p>" +
        "<p>" + N(19) + "Others might say that students who care about the ocean can simply join a club. " +
        N(20) + "Clubs are wonderful, but they meet once a week after school, when many students have jobs, practices, or younger siblings to watch, or simply a long bus ride home. " +
        N(21) + "An elective would reach students who might never sign up for an extra activity, including those who have no idea yet that they love the sea.</p>" +
        "<p>" + N(22) + "Last spring, my biology class spent one period watching a live dive off the coast of a distant island, streamed from a research ship thousands of miles away. " +
        N(23) + "For forty minutes, nobody checked a phone or asked to leave the room. " +
        N(24) + "When a bright red jellyfish drifted into view, twenty-eight students gasped at exactly the same moment. " +
        N(25) + "That kind of attention is rare, and it is worth building a course around. " +
        N(26) + "I urge the science department and the principal to approve an ocean exploration elective for next year. " +
        N(27) + "Space can wait one class period; the deep ocean has been waiting much longer.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which quotation states the main claim of Hana's editorial?",
          choices: [
            { letter: "A", text: "\"I love Space Week.\"" },
            { letter: "B", text: "\"Consider how little we have seen.\"" },
            { letter: "C", text: "\"Our school should add an ocean exploration elective\"" },
            { letter: "D", text: "\"Clubs are wonderful, but they meet once a week\"" }
          ],
          correct: "C"
        },
        {
          id: "spaceweek",
          sol: "9.RI.2.B",
          stem: "The writer begins by describing Space Week mainly to —",
          choices: [
            { letter: "A", text: "contrast a popular subject with a neglected one" },
            { letter: "B", text: "argue that Space Week should be cancelled" },
            { letter: "C", text: "show that the planetarium dome is too small" },
            { letter: "D", text: "explain how model rockets are built and flown" }
          ],
          correct: "A"
        },
        {
          id: "unanswered",
          sol: "9.RI.3.A",
          stem: "Which detail best supports the idea in sentence 9 that the deep ocean holds many unanswered questions?",
          choices: [
            { letter: "A", text: "Ocean currents carry heat and help shape the weather." },
            { letter: "B", text: "Only about a quarter of the seafloor is mapped in detail." },
            { letter: "C", text: "The science department already owns the laptops." },
            { letter: "D", text: "Clubs meet only once a week after school." }
          ],
          correct: "B"
        },
        {
          id: "objections",
          sol: "9.RI.2.A",
          stem: "Paragraphs 4 and 5 (sentences 14–21) are organized mainly by —",
          choices: [
            { letter: "A", text: "listing events in the order they happened" },
            { letter: "B", text: "comparing the ocean with the surface of Mars" },
            { letter: "C", text: "describing a problem that has no solution" },
            { letter: "D", text: "presenting objections and answering each one" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which statement from Hana's editorial is an opinion rather than a verifiable fact?",
          choices: [
            { letter: "A", text: "\"The ocean covers about seventy percent of Earth's surface\"" },
            { letter: "B", text: "\"it is worth building a course around\"" },
            { letter: "C", text: "\"Many research ships now stream their dives live online\"" },
            { letter: "D", text: "\"Free seafloor maps and data sets are available\"" }
          ],
          correct: "B"
        },
        {
          id: "club",
          sol: "9.RI.1.B",
          stem: "According to the writer, an elective would reach more students than a club because clubs —",
          choices: [
            { letter: "A", text: "cost more money to run than a new course" },
            { letter: "B", text: "are open only to students taking biology" },
            { letter: "C", text: "focus on outer space rather than the ocean" },
            { letter: "D", text: "meet after school, when many students are busy" }
          ],
          correct: "D"
        },
        {
          id: "outdated",
          sol: "9.RV.1.E",
          stem: "In sentence 15, the writer calls the opposing view outdated. Compared with wrong, the word outdated suggests that the view —",
          choices: [
            { letter: "A", text: "once made sense but no longer fits the facts" },
            { letter: "B", text: "was never believed by anyone at the school" },
            { letter: "C", text: "comes from people who dislike science classes" },
            { letter: "D", text: "is too complicated for students to follow" }
          ],
          correct: "A"
        },
        {
          id: "jellyfish",
          sol: "9.RI.3.A",
          stem: "How does the story in sentences 22–24 support the writer's argument?",
          choices: [
            { letter: "A", text: "It proves that jellyfish are the ocean's most common animal." },
            { letter: "B", text: "It shows that the biology teacher dislikes phones in class." },
            { letter: "C", text: "It shows that ocean footage can hold students' full attention." },
            { letter: "D", text: "It explains how research ships stream video from the deep." }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
