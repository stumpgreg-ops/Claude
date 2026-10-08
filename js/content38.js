/* SOL Labyrinth — v5.15 expansion: Grade 9 medium packs (desert ecosystems, archaeology digs, an art museum,
 * student filmmaking). Original text only; no VDOE / copyrighted material. Loaded after content.js and
 * pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LITERARY · 9.RL ───────────────────────── */
    {
      id: "g9-rl-c38-squarec4",
      family: "G9",
      title: "Square C4",
      kind: "Literary · 9.RL",
      blurb: "Four days of empty dirt at a summer dig teach Ayla what a find is really worth.",
      level: 1,
      passage:
        "<p>" + N(1) + "By the fourth morning of the dig, Ayla Demir had filled three buckets with dirt and found nothing but pebbles. " +
        N(2) + "Her square, labeled C4 on a little orange tag, sat at the far edge of the field, where the soil was as hard as a dinner plate and nobody else wanted to work. " +
        N(3) + "Across the rope line, Marcus and Jen were already bagging pieces of broken pottery and calling out numbers to the recorder. " +
        N(4) + "Ayla scraped another thin layer with her trowel and sighed loud enough for Dr. Haddad to hear. " +
        N(5) + "\"Empty again?\" he asked, crouching beside her with his clipboard. " +
        N(6) + "\"Completely,\" Ayla said. \"I'm just moving dirt from one place to another.\" " +
        N(7) + "Dr. Haddad tapped her notebook, where she had sketched every layer and written its color and depth in neat columns. " +
        N(8) + "\"An empty square tells us where people did not cook or sleep or throw their trash,\" he said. \"Without your notes, Marcus's pottery would be a puzzle missing its edges.\" " +
        N(9) + "Ayla looked at the columns again; they no longer seemed like a list of failures. " +
        N(10) + "That afternoon she worked more slowly, brushing instead of scraping and writing down even the color changes she had once ignored. " +
        N(11) + "Just before the whistle blew, her brush uncovered a blue glass bead no bigger than a lentil. " +
        N(12) + "Marcus whooped and ran over, but Ayla barely glanced up. " +
        N(13) + "She was already measuring its depth, because a bead without a record, she now understood, was only a pretty stone." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does Ayla's experience in square C4 best support?",
          choices: [
            { letter: "A", text: "Luck matters more than effort in making a discovery." },
            { letter: "B", text: "Careful records are what give a discovery its meaning." },
            { letter: "C", text: "Working beside friends makes a hard job feel easier." },
            { letter: "D", text: "The most exciting finds go to those who work fastest." }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which statement best describes how Ayla changes between sentence 6 and sentence 13?",
          choices: [
            { letter: "A", text: "She moves from seeing her work as pointless to valuing careful recording." },
            { letter: "B", text: "She moves from being shy with the crew to leading the other diggers." },
            { letter: "C", text: "She moves from working carefully to rushing so she can find something." },
            { letter: "D", text: "She moves from envying Marcus to refusing to speak with him at all." }
          ],
          correct: "A"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The details about square C4 in sentence 2 mainly emphasize that Ayla —",
          choices: [
            { letter: "A", text: "chose the spot because she expected the best finds there" },
            { letter: "B", text: "is the most experienced digger on Dr. Haddad's crew" },
            { letter: "C", text: "prefers to work alone so that no one sees her mistakes" },
            { letter: "D", text: "has been given a difficult, lonely spot with little reward" }
          ],
          correct: "D"
        },
        {
          id: "record",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 13, the word record most nearly refers to —",
          choices: [
            { letter: "A", text: "the best result anyone on the crew has achieved" },
            { letter: "B", text: "a photograph taken to show the find to visitors" },
            { letter: "C", text: "a written account of where and how a thing was found" },
            { letter: "D", text: "a recording of the crew's voices calling out numbers" }
          ],
          correct: "C"
        },
        {
          id: "puzzle",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 8, Dr. Haddad compares Marcus's pottery without Ayla's notes to a puzzle missing its edges mainly to show that —",
          choices: [
            { letter: "A", text: "the finds cannot be understood without information about their surroundings" },
            { letter: "B", text: "the pottery pieces are too broken to fit back together again" },
            { letter: "C", text: "Marcus has been careless about how he bags his pottery" },
            { letter: "D", text: "Ayla should move to Marcus's square to help him finish" }
          ],
          correct: "A"
        },
        {
          id: "glance",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that Ayla barely glances up when Marcus runs over in sentence 12 because she —",
          choices: [
            { letter: "A", text: "is still annoyed that he found pottery before she did" },
            { letter: "B", text: "does not think a small glass bead is worth much attention" },
            { letter: "C", text: "wants Dr. Haddad, not Marcus, to see the bead first" },
            { letter: "D", text: "is focused on recording the bead's position correctly" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c38-bluehour",
      family: "G9",
      title: "The Blue Hour",
      kind: "Literary · 9.RL",
      blurb: "A student director loses his perfect light and finds a better shot.",
      level: 2,
      passage:
        "<p>" + N(1) + "The sun was supposed to hang above the water tower until 7:42; I had checked the chart three times. " +
        N(2) + "My whole film, all three minutes of it, depended on one shot of my cousin Lupe walking toward the camera with that gold light behind her. " +
        N(3) + "At 7:30 Lupe still had not arrived, and my friend Dario was balancing the camera on a stack of library books because our tripod had a broken leg. " +
        N(4) + "\"She'll be here,\" Dario said, which is what people say when they have no idea. " +
        N(5) + "I paced the parking lot and watched the gold drain out of the sky like juice from a cracked cup. " +
        N(6) + "When Lupe finally ran up at 7:51, apologizing about a flat bike tire, the light had gone gray-blue and the streetlamps were buzzing awake. " +
        N(7) + "I opened my mouth to tell her the shot was ruined. " +
        N(8) + "Then I looked at the monitor. " +
        N(9) + "The blue made her look small and tired, exactly the way the girl in my script was supposed to feel after losing the race in the first scene. " +
        N(10) + "For weeks I had been writing \"she feels defeated\" in my notes and trying to make cheerful gold light say it. " +
        N(11) + "\"Walk slower,\" I told Lupe. \"Don't smile at all.\" " +
        N(12) + "Dario raised an eyebrow but pressed record. " +
        N(13) + "We got the shot in one take, and nobody at the festival ever guessed that the best moment in my film was a mistake I almost refused to keep." +
        "</p>",
      claims: [
        {
          id: "ruined",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that the narrator almost tells Lupe the shot is ruined (sentence 7) because he —",
          choices: [
            { letter: "A", text: "is angry that she did not call to warn him about the tire" },
            { letter: "B", text: "thinks the broken tripod will make every shot look shaky" },
            { letter: "C", text: "had built his plan around a light that was now gone" },
            { letter: "D", text: "wants to finish quickly so he can go home before dark" }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the water-tower story is told by the director in the first person, the reader —",
          choices: [
            { letter: "A", text: "learns how Lupe feels about the race in the first scene" },
            { letter: "B", text: "learns of the near-mistake that the festival audience never knew" },
            { letter: "C", text: "learns what Dario privately thinks of the director's plan" },
            { letter: "D", text: "learns how the judges at the festival scored the film" }
          ],
          correct: "B"
        },
        {
          id: "juice",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 5, the image of gold draining from the sky like juice from a cracked cup mainly creates a sense of —",
          choices: [
            { letter: "A", text: "something valuable slipping away beyond his control" },
            { letter: "B", text: "calm relief that the hot day is finally ending" },
            { letter: "C", text: "playful excitement about the evening ahead" },
            { letter: "D", text: "mild boredom while he waits for his cousin" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which idea about creative work does the night at the water tower most clearly develop?",
          choices: [
            { letter: "A", text: "A good director should never change a plan once filming begins." },
            { letter: "B", text: "Friends who doubt a project should not be part of the crew." },
            { letter: "C", text: "Better equipment matters more than timing in filmmaking." },
            { letter: "D", text: "An unplanned change can serve a work better than the plan." }
          ],
          correct: "D"
        },
        {
          id: "lamps",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 6, the phrase the streetlamps were buzzing awake suggests that —",
          choices: [
            { letter: "A", text: "the lamps were broken and making an alarming noise" },
            { letter: "B", text: "night had arrived and the planned light was gone" },
            { letter: "C", text: "the neighborhood was waking up early the next day" },
            { letter: "D", text: "the noise of the lamps would ruin the film's sound" }
          ],
          correct: "B"
        },
        {
          id: "dario",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Dario's comment in sentence 4 and his raised eyebrow in sentence 12 show that he is —",
          choices: [
            { letter: "A", text: "eager to take over as director of the film" },
            { letter: "B", text: "annoyed with Lupe for arriving so late" },
            { letter: "C", text: "supportive but a little doubtful of the plan" },
            { letter: "D", text: "bored with the project and ready to quit" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c38-gallerynine",
      family: "G9",
      title: "Gallery Nine",
      kind: "Literary · 9.RL",
      blurb: "Teo shadows his grandmother, a museum guard, and learns what she has been watching for thirty-one years.",
      level: 3,
      passage:
        "<p>" + N(1) + "Teo had expected the job to be like watching paint dry, and on his first morning in Gallery Nine he decided the joke was literally true. " +
        N(2) + "His grandmother, Lola Remedios, had guarded this room for thirty-one years, and she stood near the doorway in her gray blazer as still as one of the marble benches. " +
        N(3) + "\"Nothing happens,\" Teo whispered after an hour. " +
        N(4) + "\"Everything happens,\" she said, without moving her eyes from the visitors. \"You are just not looking at the right thing.\" " +
        N(5) + "She nodded toward a woman in a raincoat who had stopped in front of a small painting of a harbor. " +
        N(6) + "\"She will stand there four minutes, step back two paces, then come close again,\" Lola said. \"They all do with that one. The boats make people homesick.\" " +
        N(7) + "Teo timed it on his phone, feeling foolish. " +
        N(8) + "Four minutes, two paces, closer again. " +
        N(9) + "By the end of the week he had begun his own secret catalog: the teenagers who photographed the frames but not the pictures, the old man who visited the same stormy seascape every Tuesday, the tourists who read every label and never looked up. " +
        N(10) + "The curators, Lola told him, knew the paintings' dates and the names of their makers; she knew what the paintings did to people. " +
        N(11) + "On Friday a boy of about six pressed his nose almost to the glass of the harbor painting, and Teo stepped forward, ready to warn him back. " +
        N(12) + "Then he stopped, because the boy was counting the boats out loud, slowly, the way you count something you intend to keep. " +
        N(13) + "Teo let him reach seven before he cleared his throat, gently." +
        "</p>",
      claims: [
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "In sentence 1, Teo's remark that the joke about watching paint dry was literally true creates a tone that is —",
          choices: [
            { letter: "A", text: "anxious and fearful" },
            { letter: "B", text: "warm and admiring" },
            { letter: "C", text: "angry and bitter" },
            { letter: "D", text: "wry and dismissive" }
          ],
          correct: "D"
        },
        {
          id: "timing",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The author places Teo's timing of the woman in the raincoat (sentences 7–8) before his secret catalog (sentence 9) mainly to —",
          choices: [
            { letter: "A", text: "mark the moment Lola's claim proves true and Teo starts to look closely" },
            { letter: "B", text: "show that Teo is more interested in his phone than in the paintings" },
            { letter: "C", text: "suggest that the woman is a regular visitor whom Lola already knows" },
            { letter: "D", text: "explain why the harbor painting is the most famous work in the room" }
          ],
          correct: "A"
        },
        {
          id: "lola",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sentence 10 characterizes Lola as someone whose knowledge of the paintings is —",
          choices: [
            { letter: "A", text: "less reliable than the curators' because she lacks training" },
            { letter: "B", text: "a secret she refuses to share with her grandson" },
            { letter: "C", text: "different from the curators' but just as real" },
            { letter: "D", text: "mostly about the dates and makers of each work" }
          ],
          correct: "C"
        },
        {
          id: "bench",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 2, comparing Lola to one of the marble benches mainly suggests that she —",
          choices: [
            { letter: "A", text: "is tired and wishes she could sit down" },
            { letter: "B", text: "has become a steady, lasting part of the gallery" },
            { letter: "C", text: "is cold and unfriendly toward the visitors" },
            { letter: "D", text: "is easy to overlook because she rarely speaks" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme do Teo's week in Gallery Nine and the counting boy at the end most clearly develop?",
          choices: [
            { letter: "A", text: "Close attention can reveal meaning in what first seems dull." },
            { letter: "B", text: "Rules in a museum matter more than visitors' feelings." },
            { letter: "C", text: "Young people rarely appreciate the work of older relatives." },
            { letter: "D", text: "Famous paintings attract more interest than small ones." }
          ],
          correct: "A"
        },
        {
          id: "catalog",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "Teo calls his notes a secret catalog in sentence 9. Compared with list, the word catalog suggests that his notes are —",
          choices: [
            { letter: "A", text: "hurried and careless" },
            { letter: "B", text: "copied from Lola's notes" },
            { letter: "C", text: "meant to be sold later" },
            { letter: "D", text: "organized and taken seriously" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c38-nightcount",
      family: "G9",
      title: "Night Count",
      kind: "Literary · 9.RL",
      blurb: "Noor is sure the desert is empty until her aunt takes her out after dark.",
      level: 2,
      passage:
        "<p>" + N(1) + "At noon the desert outside the field station looked like a place where nothing had ever lived. " +
        N(2) + "The creosote bushes stood far apart as if they had quarreled, and the sand was so hot that Noor could feel it through her sneakers. " +
        N(3) + "\"Everything is hiding,\" said her aunt Samira, who studied small mammals and slept most afternoons. \"Come out with me after dark.\" " +
        N(4) + "Noor did not believe her, but at nine o'clock she followed Samira's red headlamp down a narrow path between the bushes. " +
        N(5) + "The air had cooled by nearly thirty degrees, and the sand under her hand felt like the underside of a pillow. " +
        N(6) + "Samira stopped beside a line of metal traps, each baited with a pinch of seeds, and lifted the door of the first one. " +
        N(7) + "Inside crouched a kangaroo rat with enormous dark eyes and a tail longer than its body. " +
        N(8) + "\"They hardly ever drink,\" Samira said, weighing the animal in a cloth bag and jotting a number. \"They get almost all their water from the seeds they eat.\" " +
        N(9) + "Noor held the flashlight steady and found that she had stopped talking without deciding to. " +
        N(10) + "By midnight they had recorded fourteen kangaroo rats, two pocket mice, and a scorpion that glowed pale green under Samira's ultraviolet lamp. " +
        N(11) + "Walking back, Noor heard rustling on every side, the whole field suddenly crowded with business she had walked straight past at noon. " +
        N(12) + "\"Still think it's empty?\" Samira asked. " +
        N(13) + "Noor only shook her head, counting the rustles until she lost track." +
        "</p>",
      claims: [
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the change in setting between sentence 1 and sentence 5 shape the events of the story?",
          choices: [
            { letter: "A", text: "The heat of the day forces Samira to cancel her study." },
            { letter: "B", text: "The cool night reveals animal life the hot day concealed." },
            { letter: "C", text: "The darkness makes Noor too frightened to keep walking." },
            { letter: "D", text: "The cold drives the animals deeper into their burrows." }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "The details in sentence 2 about bushes that seem to have quarreled and sand hot through sneakers mainly create a mood of —",
          choices: [
            { letter: "A", text: "cheerful adventure" },
            { letter: "B", text: "quiet comfort" },
            { letter: "C", text: "harsh emptiness" },
            { letter: "D", text: "nervous suspense" }
          ],
          correct: "C"
        },
        {
          id: "quiet",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Noor stops talking without deciding to in sentence 9 most likely because she —",
          choices: [
            { letter: "A", text: "is absorbed by wonder at what she is seeing" },
            { letter: "B", text: "is afraid the kangaroo rat might bite her" },
            { letter: "C", text: "is still upset that Samira proved her wrong" },
            { letter: "D", text: "is too tired from the walk to say anything" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The story stays close to Noor's thoughts rather than Samira's mainly so that the reader —",
          choices: [
            { letter: "A", text: "learns the scientific names of every desert animal" },
            { letter: "B", text: "understands why Samira chose to study small mammals" },
            { letter: "C", text: "can predict exactly how many animals will be counted" },
            { letter: "D", text: "shares the surprise of someone who doubted the desert" }
          ],
          correct: "D"
        },
        {
          id: "business",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 11, the phrase crowded with business most nearly means the field was —",
          choices: [
            { letter: "A", text: "filled with researchers selling equipment" },
            { letter: "B", text: "noisy with wind blowing through the bushes" },
            { letter: "C", text: "full of animals busy with their own activities" },
            { letter: "D", text: "covered with traps that Samira had set out" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which idea does Noor's night of counting with her aunt Samira best support?",
          choices: [
            { letter: "A", text: "Scientists rarely explain their work to young people." },
            { letter: "B", text: "A place may seem empty only because one looked at the wrong time." },
            { letter: "C", text: "Deserts are too dangerous to explore without an expert." },
            { letter: "D", text: "Animals that never drink water cannot survive for long." }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL · 9.RI ───────────────────────── */
    {
      id: "g9-ri-c38-desertplants",
      family: "G9",
      title: "Spending Water Slowly",
      kind: "Informational · 9.RI",
      blurb: "Spines, wax, shallow roots and sleeping seeds: how desert plants make a little water last.",
      level: 1,
      passage:
        "<p>" + N(1) + "A desert may receive less than ten inches of rain in a year, yet many plants there stay green through months of drought. " +
        N(2) + "Their secret is not finding more water but losing less of it. " +
        N(3) + "Most plants lose water through tiny pores in their leaves, so many cacti have no broad leaves at all. " +
        N(4) + "Their spines are actually changed leaves, and they shade the stem and slow the drying wind. " +
        N(5) + "The stem itself is coated with a waxy layer that works like a raincoat in reverse, keeping moisture in rather than out. " +
        N(6) + "Roots help, too. " +
        N(7) + "A large cactus often spreads its roots wide and shallow, just under the surface, so that it can soak up a brief shower before the sun evaporates it. " +
        N(8) + "Some cacti have pleated stems that swell like an accordion as they fill with water and shrink again during dry months. " +
        N(9) + "Timing matters as well. " +
        N(10) + "Many desert plants open their pores mainly at night, when the air is cooler and less water escapes. " +
        N(11) + "Desert wildflowers take a different approach: their seeds may lie in the soil for years, sprouting only after a soaking rain and finishing their whole life cycle in a few weeks. " +
        N(12) + "Whether they hoard water in their stems or wait out the drought as seeds, desert plants survive by spending water as carefully as a traveler with one canteen." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence best expresses the central idea of the article about how desert plants survive drought?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "B"
        },
        {
          id: "roots",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, why does a large cactus spread its roots wide and shallow?",
          choices: [
            { letter: "A", text: "to anchor itself firmly against strong desert winds" },
            { letter: "B", text: "to reach water stored deep below the desert floor" },
            { letter: "C", text: "to crowd out wildflowers that compete for space" },
            { letter: "D", text: "to absorb a short rain before the sun dries it up" }
          ],
          correct: "D"
        },
        {
          id: "signals",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Sentences 6 and 9, Roots help, too and Timing matters as well, mainly serve to —",
          choices: [
            { letter: "A", text: "introduce new strategies in a list of ways plants save water" },
            { letter: "B", text: "compare desert plants with plants that grow in wetter places" },
            { letter: "C", text: "describe the steps a cactus follows from seed to adult plant" },
            { letter: "D", text: "question whether cacti really need spines to survive" }
          ],
          correct: "A"
        },
        {
          id: "canteen",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author compares desert plants to a traveler with one canteen in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "warn hikers to carry extra water when they visit a desert" },
            { letter: "B", text: "show that desert plants and people need the same amount of water" },
            { letter: "C", text: "emphasize that the plants use a limited supply with great care" },
            { letter: "D", text: "suggest that desert plants often move to find new water" }
          ],
          correct: "C"
        },
        {
          id: "hoard",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 12, the word hoard most nearly means to —",
          choices: [
            { letter: "A", text: "waste carelessly" },
            { letter: "B", text: "share with others" },
            { letter: "C", text: "store up and keep" },
            { letter: "D", text: "search for widely" }
          ],
          correct: "C"
        },
        {
          id: "seeds",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that some desert plants survive a drought without storing any water?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c38-layers",
      family: "G9",
      title: "Reading the Layers",
      kind: "Informational · 9.RI",
      blurb: "Why archaeologists dig in square grids and thin layers, and why they write everything down.",
      level: 2,
      passage:
        "<p>" + N(1) + "To a visitor, an archaeological dig can look like a group of people slowly digging square holes in a field. " +
        N(2) + "The squares, however, are the point. " +
        N(3) + "Before anyone lifts a shovel, the team stretches string across the site to form a grid, usually of one- or two-meter units, and gives every square its own label. " +
        N(4) + "This grid lets archaeologists record exactly where each object is found, a location they call its context. " +
        N(5) + "Context matters because an artifact on its own says surprisingly little. " +
        N(6) + "A clay bowl in a museum case is simply a bowl; the same bowl found beside a hearth, under a layer of ash, next to fish bones, begins to tell a story about a meal. " +
        N(7) + "Diggers also work downward in thin layers, because soil builds up over time, an idea known as stratigraphy. " +
        N(8) + "In general, deeper layers are older than the layers above them, much as the bottom papers in a stack of newspapers were set down first. " +
        N(9) + "Because digging destroys the very layers it studies, every layer is measured, photographed, and drawn before it is removed. " +
        N(10) + "If a team finds coins in an upper layer and stone tools far below, the tools are probably older, although a disturbance such as a burrowing animal can sometimes mix the layers. " +
        N(11) + "In a sense, an excavation is an experiment that can be performed only once. " +
        N(12) + "The careful notes are what allow later researchers to repeat the \"reading\" long after the field has been filled in." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best summarizes the article about how archaeologists dig?",
          choices: [
            { letter: "A", text: "Grids and layer-by-layer digging let teams record context, since digging destroys the evidence." },
            { letter: "B", text: "Most of the important objects at a dig are found in the deepest and oldest layers of soil." },
            { letter: "C", text: "Archaeologists prefer to study bowls and coins found in museums rather than in the field." },
            { letter: "D", text: "Burrowing animals have made it nearly impossible to know the age of most artifacts." }
          ],
          correct: "A"
        },
        {
          id: "drawn",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, why is every layer measured, photographed, and drawn before it is removed?",
          choices: [
            { letter: "A", text: "Visitors want pictures of each square to take home." },
            { letter: "B", text: "Museums require drawings before they accept artifacts." },
            { letter: "C", text: "Once a layer is dug away, the records are all that remain." },
            { letter: "D", text: "Photographs prove which digger found each object first." }
          ],
          correct: "C"
        },
        {
          id: "qualify",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which part of sentence 10 shows that the author is careful not to overstate the rule that deeper layers are older?",
          choices: [
            { letter: "A", text: "If a team finds coins in an upper layer" },
            { letter: "B", text: "and stone tools far below" },
            { letter: "C", text: "the tools are probably older" },
            { letter: "D", text: "a burrowing animal can sometimes mix the layers" }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the author mainly organize sentences 3 through 9?",
          choices: [
            { letter: "A", text: "by telling the history of one dig from start to finish" },
            { letter: "B", text: "by explaining two methods and why each one matters" },
            { letter: "C", text: "by comparing archaeology with the work of museums" },
            { letter: "D", text: "by listing problems and leaving them unsolved" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the claim in sentence 5 that an artifact on its own says surprisingly little?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "B"
        },
        {
          id: "context",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As the author defines it in sentence 4, an object's context is —",
          choices: [
            { letter: "A", text: "the age of the object in years" },
            { letter: "B", text: "the museum where it is displayed" },
            { letter: "C", text: "the exact location where it was found" },
            { letter: "D", text: "the name of the person who made it" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c38-varnish",
      family: "G9",
      title: "The Rule of Undoing",
      kind: "Informational · 9.RI",
      blurb: "Museum conservators clean old paintings by a surprising rule: whatever they add must come off again.",
      level: 3,
      passage:
        "<p>" + N(1) + "When a museum's painting looks dull and yellow, the problem is often not the paint at all but the varnish brushed over it long ago to protect it. " +
        N(2) + "Many older varnishes darken as they age, so a sky that the artist painted pale blue can appear the color of weak tea. " +
        N(3) + "Removing that varnish is one of the most delicate jobs in an art museum, and conservators approach it with a rule that may surprise visitors: whatever they add must be able to come off again. " +
        N(4) + "This principle, called reversibility, exists because no conservator expects to have the final word. " +
        N(5) + "Materials improve, knowledge grows, and a treatment that seems wise today may look clumsy to someone fifty years from now. " +
        N(6) + "So the work begins small. " +
        N(7) + "A conservator rolls a cotton swab dipped in a mild solvent over a patch no bigger than a fingernail, usually in a corner, and watches to see whether only the varnish lifts. " +
        N(8) + "Under ultraviolet light, old varnish often glows a milky green, while later repairs show up as dark spots, letting the conservator map earlier work before touching it. " +
        N(9) + "Where paint has flaked away completely, the conservator fills only the missing area, using paints that can be dissolved without disturbing the original. " +
        N(10) + "Some visitors are disappointed to learn this; they would rather see a painting returned to \"new.\" " +
        N(11) + "But a conservator's goal is humbler and, arguably, more honest: to let the artist's work be seen clearly while leaving every choice open to the next set of careful hands." +
        "</p>",
      claims: [
        {
          id: "attitude",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author's attitude toward the conservators' approach in sentence 11 is best described as —",
          choices: [
            { letter: "A", text: "mild suspicion" },
            { letter: "B", text: "respectful approval" },
            { letter: "C", text: "amused detachment" },
            { letter: "D", text: "impatient criticism" }
          ],
          correct: "B"
        },
        {
          id: "tea",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author describes the sky as the color of weak tea in sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "suggest that the artist made a poor choice of colors" },
            { letter: "B", text: "explain how conservators mix new paint for repairs" },
            { letter: "C", text: "show that tea was once used as an ingredient in varnish" },
            { letter: "D", text: "help readers picture how much old varnish changes colors" }
          ],
          correct: "D"
        },
        {
          id: "uv",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, how does ultraviolet light help a conservator?",
          choices: [
            { letter: "A", text: "It shows earlier repairs as dark spots so they can be mapped." },
            { letter: "B", text: "It dries the solvent quickly so the paint is not harmed." },
            { letter: "C", text: "It removes yellowed varnish without any need for swabs." },
            { letter: "D", text: "It reveals the artist's name hidden under the paint." }
          ],
          correct: "A"
        },
        {
          id: "why",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best explains why conservators follow the principle of reversibility?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "C"
        },
        {
          id: "humbler",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "In sentence 11, the author calls the conservator's goal humbler. Compared with smaller, the word humbler suggests a goal that is —",
          choices: [
            { letter: "A", text: "modest by choice and free of pride" },
            { letter: "B", text: "weak and likely to fail" },
            { letter: "C", text: "cheap and quickly finished" },
            { letter: "D", text: "secret and hidden from visitors" }
          ],
          correct: "A"
        },
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the passage about varnish and reversibility?",
          choices: [
            { letter: "A", text: "Old varnish should be left on paintings because removing it is risky." },
            { letter: "B", text: "Most visitors prefer paintings that look exactly as they did when new." },
            { letter: "C", text: "Ultraviolet light has replaced the cotton swab in modern museums." },
            { letter: "D", text: "Conservators treat paintings cautiously so later experts can undo the work." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c38-theline",
      family: "G9",
      title: "The Invisible Line",
      kind: "Informational · 9.RI",
      blurb: "Student filmmakers learn the 180-degree rule, and when it can be broken.",
      level: 2,
      passage:
        "<p>" + N(1) + "Imagine a scene in a student film: two friends, Mina and Cole, sit across a cafeteria table arguing about a lost notebook. " +
        N(2) + "In the first shot, Mina is on the left side of the screen, looking right. " +
        N(3) + "In the next shot, filmed from the other side of the table, she suddenly appears on the right, looking left. " +
        N(4) + "Nothing in the story has changed, yet viewers feel a small jolt, as if the characters have swapped seats. " +
        N(5) + "Filmmakers avoid this problem with a guideline called the 180-degree rule. " +
        N(6) + "Picture an invisible line running through the two actors. " +
        N(7) + "As long as every camera position stays on one side of that line, the characters keep their places on the screen, and the audience never has to work out who is where. " +
        N(8) + "The rule matters most in conversations, chases, and sports scenes, where direction is part of the story. " +
        N(9) + "If a runner exits the frame moving right, the audience expects to see her enter the next shot still moving right; a reversal can make it seem that she has turned around. " +
        N(10) + "Experienced directors sometimes break the rule on purpose, crossing the line to make a moment feel confused or tense. " +
        N(11) + "For a first film, though, most teachers advise students to learn the rule before they break it. " +
        N(12) + "A few minutes of planning, such as a sketch of the line on the floor plan, can save hours of puzzling footage in the editing room." +
        "</p>",
      claims: [
        {
          id: "organize",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the author mainly organize sentences 1 through 7?",
          choices: [
            { letter: "A", text: "by listing the jobs on a film crew in order of importance" },
            { letter: "B", text: "by tracing the history of the rule from its beginning" },
            { letter: "C", text: "by showing a problem in an example and then the rule that prevents it" },
            { letter: "D", text: "by comparing two directors who disagree about the rule" }
          ],
          correct: "C"
        },
        {
          id: "opening",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author begins with Mina and Cole at a cafeteria table mainly to —",
          choices: [
            { letter: "A", text: "give a concrete case that lets readers feel the confusion" },
            { letter: "B", text: "introduce the main characters of a film the author made" },
            { letter: "C", text: "suggest that cafeterias are the hardest places to film" },
            { letter: "D", text: "show how students should settle arguments with friends" }
          ],
          correct: "A"
        },
        {
          id: "break",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, why do experienced directors sometimes cross the line on purpose?",
          choices: [
            { letter: "A", text: "to save time when they have only one camera" },
            { letter: "B", text: "to show off their skill to other filmmakers" },
            { letter: "C", text: "to fit more actors into a single shot" },
            { letter: "D", text: "to make a moment feel confused or tense" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Sentence 11 suggests that the author's main purpose in writing about the 180-degree rule is to —",
          choices: [
            { letter: "A", text: "argue that the rule should be dropped from film classes" },
            { letter: "B", text: "guide beginning filmmakers toward a useful habit" },
            { letter: "C", text: "entertain readers with a story about a failed film" },
            { letter: "D", text: "persuade teachers to buy better editing software" }
          ],
          correct: "B"
        },
        {
          id: "jolt",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 4, saying viewers feel a small jolt, as if the characters have swapped seats, means that viewers —",
          choices: [
            { letter: "A", text: "notice that the actors were replaced between takes" },
            { letter: "B", text: "are physically shaken by loud sound effects" },
            { letter: "C", text: "lose interest because the argument goes on too long" },
            { letter: "D", text: "are briefly thrown off by the change in screen positions" }
          ],
          correct: "D"
        },
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the main idea of the passage on the 180-degree rule?",
          choices: [
            { letter: "A", text: "Keeping cameras on one side of a line helps viewers follow a scene." },
            { letter: "B", text: "Chase scenes are the most difficult kind of scene to film well." },
            { letter: "C", text: "Student films are usually confusing because they lack planning." },
            { letter: "D", text: "Directors should cross the line whenever a scene feels dull." }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── VOCABULARY · 9.RV ───────────────────────── */
    {
      id: "g9-rv-c38-sandstonewash",
      family: "G9",
      title: "Sandstone Wash",
      kind: "Vocabulary · 9.RV",
      blurb: "A biology field trip to a dry canyon, with five words to work out from context.",
      level: 1,
      passage:
        "<p>" + N(1) + "Mr. Okafor's biology class stepped off the bus at Sandstone Wash into air so <strong>arid</strong> that Priyanka's lips felt chapped within ten minutes. " +
        N(2) + "\"Less than eight inches of rain a year,\" Mr. Okafor said, \"and most of it arrives in a few summer storms.\" " +
        N(3) + "Water was so <strong>scarce</strong> that every student had been told to bring two full bottles, since there would be no fountain, no store, and no spare water to borrow by noon. " +
        N(4) + "Along the dry streambed, Mr. Okafor pointed to small holes under a mesquite tree. " +
        N(5) + "\"Whoever lives there is <strong>nocturnal</strong>,\" he said. \"They sleep through the heat and come out after sunset, so you will not meet them today.\" " +
        N(6) + "Priyanka knelt beside a patch of gray, brittle-looking plants that crunched like old cereal under her finger. " +
        N(7) + "\"Not dead,\" Mr. Okafor said. \"<strong>Dormant</strong>. They are resting, waiting for rain to wake them.\" " +
        N(8) + "He told the class that after a good storm the same slope could turn green in a week. " +
        N(9) + "On the hike back, Priyanka noticed a lizard sprinting across stones hot enough to fry an egg, then pausing in a slice of shade as if nothing could bother it. " +
        N(10) + "It had lost the tip of its tail, but it seemed no worse for the loss. " +
        N(11) + "\"That,\" Mr. Okafor said, \"is a <strong>resilient</strong> animal. Most things out here are. Anything that couldn't bounce back left this canyon a long time ago.\" " +
        N(12) + "On the bus, Priyanka wrote the five new words on her water bottle so she would remember the day every time she took a sip." +
        "</p>",
      claims: [
        {
          id: "scarce",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 3, the instruction to bring two full bottles helps show that scarce means —",
          choices: [
            { letter: "A", text: "in short supply" },
            { letter: "B", text: "very cold" },
            { letter: "C", text: "easy to find" },
            { letter: "D", text: "not safe to drink" }
          ],
          correct: "A"
        },
        {
          id: "nocturnal",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Mr. Okafor's explanation in sentence 5 shows that a nocturnal animal is one that —",
          choices: [
            { letter: "A", text: "lives underground for its whole life" },
            { letter: "B", text: "avoids people at every time of day" },
            { letter: "C", text: "is active at night and rests by day" },
            { letter: "D", text: "moves to a new burrow every evening" }
          ],
          correct: "C"
        },
        {
          id: "dormant",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which phrase from the Sandstone Wash passage best helps the reader understand the meaning of dormant?",
          choices: [
            { letter: "A", text: "gray, brittle-looking plants" },
            { letter: "B", text: "crunched like old cereal" },
            { letter: "C", text: "resting, waiting for rain to wake them" },
            { letter: "D", text: "pausing in a slice of shade" }
          ],
          correct: "C"
        },
        {
          id: "arid",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written dry instead of arid in sentence 1. Compared with dry, the word arid suggests a dryness that is —",
          choices: [
            { letter: "A", text: "pleasant and refreshing" },
            { letter: "B", text: "severe and long-lasting" },
            { letter: "C", text: "brief and surprising" },
            { letter: "D", text: "mild and easy to ignore" }
          ],
          correct: "B"
        },
        {
          id: "egg",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 9, describing the stones as hot enough to fry an egg is an example of —",
          choices: [
            { letter: "A", text: "a literal measurement of the temperature" },
            { letter: "B", text: "a comparison between two different animals" },
            { letter: "C", text: "a clue that the class will cook lunch outdoors" },
            { letter: "D", text: "an exaggeration used to stress the heat" }
          ],
          correct: "D"
        },
        {
          id: "resilient",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Mr. Okafor's comment in sentence 11 about things that could not bounce back shows that resilient most nearly means —",
          choices: [
            { letter: "A", text: "fast enough to escape" },
            { letter: "B", text: "able to recover from harm" },
            { letter: "C", text: "likely to stay hidden" },
            { letter: "D", text: "too small to be noticed" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rv-c38-weddingshawl",
      family: "G9",
      title: "The Wedding Shawl",
      kind: "Vocabulary · 9.RV",
      blurb: "A museum intern's first day in a textile exhibit, with six words to work out.",
      level: 2,
      passage:
        "<p>" + N(1) + "On her first day as a summer intern at the Larkspur Art Museum, Hana Yoshida learned that a museum does not simply hang pictures on walls; someone has to <strong>curate</strong> them, choosing which works to show and deciding how they speak to one another. " +
        N(2) + "That someone was Ms. Ferreira, who walked through the new textile exhibit with a clipboard and a frown that meant she was thinking, not angry. " +
        N(3) + "The star of the show was a wedding shawl so <strong>ornate</strong> that Hana stopped counting its stitched flowers after two hundred. " +
        N(4) + "It was more than a century old, but it looked <strong>pristine</strong>, its silk as bright as if it had been woven last spring. " +
        N(5) + "\"That is because it spent ninety years folded in a dark trunk,\" Ms. Ferreira said. \"Light is a slow thief. Leave silk in the sun and its colors will <strong>deteriorate</strong> year by year until they are gone.\" " +
        N(6) + "For that reason, the gallery lights stayed dim, and every label asked visitors not to use flash. " +
        N(7) + "Near the exit hung a <strong>replica</strong> of the shawl, an exact copy printed on cotton, so that children could touch the pattern without harming the real thing. " +
        N(8) + "Hana's job was to place small humidity monitors around the room, keeping them so <strong>inconspicuous</strong> that visitors would never notice them. " +
        N(9) + "She tucked one beside a pedestal and another under the lip of a bench. " +
        N(10) + "By closing time, she had walked past the shawl forty times and still found new flowers. " +
        N(11) + "\"Good,\" Ms. Ferreira said when Hana told her. \"The day you stop seeing something new is the day you should ask for a different job.\"" +
        "</p>",
      claims: [
        {
          id: "curate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 1, the explanation after the semicolon shows that to curate an exhibit is to —",
          choices: [
            { letter: "A", text: "repair damaged works before they go on display" },
            { letter: "B", text: "sell tickets and guide visitors through the rooms" },
            { letter: "C", text: "paint copies of famous works for the gift shop" },
            { letter: "D", text: "select works and decide how they are arranged" }
          ],
          correct: "D"
        },
        {
          id: "pristine",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 4, the comparison to silk woven last spring helps show that pristine means —",
          choices: [
            { letter: "A", text: "faded with age" },
            { letter: "B", text: "in like-new condition" },
            { letter: "C", text: "heavy and thick" },
            { letter: "D", text: "recently repaired" }
          ],
          correct: "B"
        },
        {
          id: "ornate",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have called the shawl decorated instead of ornate in sentence 3. Compared with decorated, ornate suggests decoration that is —",
          choices: [
            { letter: "A", text: "elaborate and abundant" },
            { letter: "B", text: "simple and plain" },
            { letter: "C", text: "careless and uneven" },
            { letter: "D", text: "new and unfinished" }
          ],
          correct: "A"
        },
        {
          id: "thief",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 5, Ms. Ferreira calls light a slow thief mainly to suggest that light —",
          choices: [
            { letter: "A", text: "makes it easier for real thieves to see the shawl" },
            { letter: "B", text: "should be blocked only during the night" },
            { letter: "C", text: "gradually takes away a fabric's color unnoticed" },
            { letter: "D", text: "helps visitors notice details they might miss" }
          ],
          correct: "C"
        },
        {
          id: "replica",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which detail from sentence 7 best helps the reader understand the meaning of replica?",
          choices: [
            { letter: "A", text: "an exact copy printed on cotton" },
            { letter: "B", text: "Near the exit hung" },
            { letter: "C", text: "so that children could touch" },
            { letter: "D", text: "without harming the real thing" }
          ],
          correct: "A"
        },
        {
          id: "inconspicuous",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "Hana keeps the monitors inconspicuous rather than hidden. Compared with hidden, inconspicuous suggests that the monitors are —",
          choices: [
            { letter: "A", text: "locked away where no one can reach them" },
            { letter: "B", text: "in plain view but unlikely to draw notice" },
            { letter: "C", text: "brightly colored so guards can find them" },
            { letter: "D", text: "broken and waiting to be replaced" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rv-c38-jarhandle",
      family: "G9",
      title: "The Jar Handle",
      kind: "Vocabulary · 9.RV",
      blurb: "One small handle, a week of sifting and a lesson in how carefully archaeologists choose their words.",
      level: 3,
      passage:
        "<p>" + N(1) + "The piece of pottery Diego Alcántara lifted from the trench was <strong>fragmentary</strong>: a curved handle and a thumb-sized scrap of rim, nothing more. " +
        N(2) + "Still, the crew gathered around as if he had pulled up a crown. " +
        N(3) + "Dr. Amara Nwosu turned the handle in her gloved fingers and said that the stamp on it, a tiny wheel with six spokes, might mark it as a storage jar from a coastal workshop. " +
        N(4) + "\"Might,\" she repeated, because any claim about where it came from was, for now, only <strong>conjecture</strong>, a guess built on one small clue. " +
        N(5) + "Diego wanted an answer by lunch. " +
        N(6) + "Instead he got a lesson in <strong>painstaking</strong> work: sifting every bucket of soil from the trench through a fine screen, bagging each speck of charcoal, and labeling each bag with its depth to the centimeter. " +
        N(7) + "By the third afternoon, his shoulders ached and his patience had worn as thin as the screen. " +
        N(8) + "Then Lucía, sifting at the next station, found a second handle with the same six-spoked wheel. " +
        N(9) + "A week later, a lab report on the charcoal from that layer gave a date that matched the coastal workshop's busiest years. " +
        N(10) + "\"Now the pieces <strong>corroborate</strong> each other,\" Dr. Nwosu said. \"Two handles and a date are a pattern. One handle was a hope.\" " +
        N(11) + "She still wrote her conclusion in pencil, and when Diego asked why, she called it a <strong>tentative</strong> finding, strong enough to report but open to change if the next trench told a different story. " +
        N(12) + "Diego decided that he liked that word, because it was honest about how much a field of dirt could still surprise you." +
        "</p>",
      claims: [
        {
          id: "conjecture",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 4, Dr. Nwosu's own explanation shows that a conjecture is —",
          choices: [
            { letter: "A", text: "a fact proven by laboratory tests" },
            { letter: "B", text: "a rule that every dig must follow" },
            { letter: "C", text: "an idea based on limited evidence" },
            { letter: "D", text: "a label attached to a storage jar" }
          ],
          correct: "C"
        },
        {
          id: "painstaking",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which detail from the Jar Handle passage best helps the reader understand the meaning of painstaking?",
          choices: [
            { letter: "A", text: "labeling each bag with its depth to the centimeter" },
            { letter: "B", text: "Diego wanted an answer by lunch" },
            { letter: "C", text: "the crew gathered around as if he had pulled up a crown" },
            { letter: "D", text: "a tiny wheel with six spokes" }
          ],
          correct: "A"
        },
        {
          id: "tentative",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written uncertain instead of tentative in sentence 11. Compared with uncertain, tentative suggests a finding that is —",
          choices: [
            { letter: "A", text: "mistaken and soon to be thrown out" },
            { letter: "B", text: "copied from another team's report" },
            { letter: "C", text: "too weak to be shared with anyone" },
            { letter: "D", text: "reasonable but deliberately left open" }
          ],
          correct: "D"
        },
        {
          id: "thin",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 7, saying that Diego's patience had worn as thin as the screen mainly suggests that he —",
          choices: [
            { letter: "A", text: "had torn the screen by sifting too roughly" },
            { letter: "B", text: "was close to running out of patience" },
            { letter: "C", text: "had lost weight from working in the heat" },
            { letter: "D", text: "could now see through the soil more easily" }
          ],
          correct: "B"
        },
        {
          id: "fragmentary",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 1, the word fragmentary most nearly means —",
          choices: [
            { letter: "A", text: "made up of incomplete pieces" },
            { letter: "B", text: "decorated with a stamp" },
            { letter: "C", text: "valuable to collectors" },
            { letter: "D", text: "older than expected" }
          ],
          correct: "A"
        },
        {
          id: "corroborate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Dr. Nwosu's remark in sentence 10 that two handles and a date are a pattern shows that corroborate means to —",
          choices: [
            { letter: "A", text: "break apart into smaller pieces" },
            { letter: "B", text: "compete for the same reward" },
            { letter: "C", text: "hide evidence from other teams" },
            { letter: "D", text: "support or confirm by agreeing" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS · 9.DSR ───────────────────────── */
    {
      id: "g9-dsr-c38-showcase",
      family: "G9",
      title: "Five Minutes Flat",
      kind: "Paired texts · 9.DSR",
      blurb: "A film showcase's rules and a student director's email to her crew.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Riverbend Student Film Showcase: Submission Rules</strong></p>" +
        "<p>" + N(1) + "Films must be no longer than five minutes, including credits. " +
        N(2) + "All music must be original or come from a library that clearly allows free use, and the source of every song must be listed in the credits. " +
        N(3) + "Every person who appears on screen must sign a permission form; for performers under eighteen, a parent or guardian must also sign. " +
        N(4) + "Films are due by 5:00 p.m. on March 14, uploaded through the showcase website. " +
        N(5) + "Late entries will not be accepted for any reason, including technical problems, so filmmakers are encouraged to upload at least a day early. " +
        N(6) + "Judges will score each film on storytelling, use of sound and image, and originality, giving equal weight to all three. " +
        N(7) + "The top three films will be screened at the Riverbend Library auditorium on April 2." +
        "</p>" +
        "<p><strong>Text 2 — An email from Zara Okonjo to her film crew</strong></p>" +
        "<p>" + N(8) + "Hey everyone, quick update before Saturday's reshoot. " +
        N(9) + "Our cut runs five minutes and forty seconds, so we have to lose at least forty seconds, and I think the diner scene has to go, even though it's my favorite. " +
        N(10) + "Also, Theo, I know you love that song from your brother's band, but unless he writes us a note saying we can use it, we're switching to the track Priya composed. " +
        N(11) + "Priya, your track is honestly better anyway. " +
        N(12) + "Finally, I'm uploading on the 12th, not the 14th. " +
        N(13) + "Last year Kenji's team lost their spot because the website crashed at 4:50. " +
        N(14) + "See you at the diner at nine for one last scene there, for the memories." +
        "</p>",
      claims: [
        {
          id: "cut",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which rule in Text 1 explains Zara's decision to cut the diner scene?",
          choices: [
            { letter: "A", text: "Every person on screen must sign a permission form." },
            { letter: "B", text: "Films must be no longer than five minutes, including credits." },
            { letter: "C", text: "Judges will score each film on storytelling, sound and image." },
            { letter: "D", text: "The top three films will be screened at the library." }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Select TWO sentences from Zara's email that respond directly to a rule in the showcase's Text 1.",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "kenji",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Zara's mention of Kenji's team in sentence 13 connects most directly to which warning in Text 1?",
          choices: [
            { letter: "A", text: "Late entries are refused even when technology fails." },
            { letter: "B", text: "Music sources must be listed in the film's credits." },
            { letter: "C", text: "Parents must sign forms for performers under eighteen." },
            { letter: "D", text: "Each of the three scoring areas counts equally." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which statement best describes how the showcase rules differ from Zara's email?",
          choices: [
            { letter: "A", text: "The rules praise particular films; the email criticizes them." },
            { letter: "B", text: "The rules explain how to film; the email explains how to edit." },
            { letter: "C", text: "The rules address all entrants formally; the email applies them to one team personally." },
            { letter: "D", text: "The rules were written by students; the email was written by the judges." }
          ],
          correct: "C"
        },
        {
          id: "early",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The showcase organizers include the advice in sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "explain how judges decide which films win" },
            { letter: "B", text: "describe problems with last year's website" },
            { letter: "C", text: "suggest that late films may still be accepted" },
            { letter: "D", text: "help filmmakers avoid missing the deadline" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of Zara's closing line in sentence 14 is best described as —",
          choices: [
            { letter: "A", text: "wistful but good-humored" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "nervous and uncertain" },
            { letter: "D", text: "strict and commanding" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-dsr-c38-hearth",
      family: "G9",
      title: "The Ring of Stones",
      kind: "Paired texts · 9.DSR",
      blurb: "A dig's season report and a volunteer's blog post describe the same ring of burned stones.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the Season Report, Oak Hollow Site, Unit B</strong></p>" +
        "<p>" + N(1) + "During the third week, excavators exposed a circular arrangement of fire-cracked stones measuring roughly 1.2 meters across in Layer 4 of Unit B. " +
        N(2) + "Charcoal samples were collected from the center of the feature and submitted for radiocarbon dating; results are pending. " +
        N(3) + "Associated materials include fourteen fragments of burned animal bone and two stone scrapers. " +
        N(4) + "The feature is provisionally interpreted as a cooking hearth. " +
        N(5) + "However, the absence of pottery in the surrounding soil is unusual for sites of this region and period, and alternative interpretations, including a short-term work area, cannot yet be ruled out. " +
        N(6) + "Further excavation of the adjacent unit is recommended for next season, along with a comparison of the bone fragments to reference collections." +
        "</p>" +
        "<p><strong>Text 2 — From \"Diary of a First-Time Digger,\" a blog by Talia Brennan</strong></p>" +
        "<p>" + N(7) + "Today we found a fireplace that someone cooked dinner on thousands of years ago! " +
        N(8) + "Okay, technically the report will call it a \"feature,\" and Dr. Ostrowski keeps saying \"possibly,\" but you should have seen everyone crowd around those blackened rocks. " +
        N(9) + "I held a piece of burned bone and imagined a family sitting right where I was kneeling, talking about their day while supper cooked. " +
        N(10) + "It was the best feeling I've had all summer. " +
        N(11) + "The weird part is that there's no pottery anywhere near it, which apparently is strange for this area. " +
        N(12) + "Maybe they were travelers who didn't want to carry heavy pots? " +
        N(13) + "I guess we'll find out next year, if Dr. Ostrowski lets me come back." +
        "</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which detail appears in both the Oak Hollow season report and Talia's blog post?",
          choices: [
            { letter: "A", text: "the exact size of the ring of stones" },
            { letter: "B", text: "the number of stone scrapers found" },
            { letter: "C", text: "the lack of pottery near the stones" },
            { letter: "D", text: "the date when the fire was burning" }
          ],
          correct: "C"
        },
        {
          id: "further",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Talia's claim in sentence 7 goes further than Text 1 does because the report —",
          choices: [
            { letter: "A", text: "calls the hearth only a provisional idea and is still waiting on the dating results" },
            { letter: "B", text: "states that the stones were arranged by travelers who carried no pottery" },
            { letter: "C", text: "concludes that the site was used as a work area rather than a kitchen" },
            { letter: "D", text: "reports that no charcoal or bone was found anywhere in Unit B" }
          ],
          correct: "A"
        },
        {
          id: "interpret",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the season report is most clearly an interpretation rather than an observation?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "D"
        },
        {
          id: "quotes",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "In sentence 8, Talia puts the word feature in quotation marks mainly to —",
          choices: [
            { letter: "A", text: "show that she has misread the report" },
            { letter: "B", text: "mark it as the report's formal term" },
            { letter: "C", text: "suggest that the stones are fake" },
            { letter: "D", text: "repeat a word Dr. Ostrowski dislikes" }
          ],
          correct: "B"
        },
        {
          id: "uncertain",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which statement best describes how the report and the blog differ in their handling of uncertainty?",
          choices: [
            { letter: "A", text: "The report guesses freely, while the blog sticks to measurements." },
            { letter: "B", text: "Both texts ignore what is still unknown about the stones." },
            { letter: "C", text: "The blog lists other explanations that the report leaves out." },
            { letter: "D", text: "The report stresses what is unknown, while the blog imagines." }
          ],
          correct: "D"
        },
        {
          id: "travelers",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Talia's question in sentence 12 is best understood as a response to which part of Text 1?",
          choices: [
            { letter: "A", text: "the note that missing pottery is unusual for the region" },
            { letter: "B", text: "the request to compare bones to reference collections" },
            { letter: "C", text: "the measurement of the stones at about 1.2 meters" },
            { letter: "D", text: "the statement that charcoal was sent for dating" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-dsr-c38-tortoisetrail",
      family: "G9",
      title: "Coyote Ridge Closed",
      kind: "Paired texts · 9.DSR",
      blurb: "A desert park closes a trail for tortoise season, and a longtime hiker writes back.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Notice from Palo Verde Desert Park</strong></p>" +
        "<p>" + N(1) + "Coyote Ridge Trail will be closed from April 1 to June 15. " +
        N(2) + "During these months, desert tortoises leave their burrows to feed on spring plants and lay eggs, and many burrows lie within a few steps of the trail. " +
        N(3) + "Last spring, rangers counted eleven burrows that had been crushed or blocked by hikers stepping off the path. " +
        N(4) + "Tortoises in this park are slow to recover their numbers, because a female may lay only a handful of eggs each year. " +
        N(5) + "The nearby Mesquite Loop remains open and offers similar views of the canyon. " +
        N(6) + "Rangers will lead free guided walks along the edge of the closed area on Saturday mornings for visitors who hope to see a tortoise safely." +
        "</p>" +
        "<p><strong>Text 2 — A letter to the editor of the Cholla Springs Gazette</strong></p>" +
        "<p>" + N(7) + "I have hiked Coyote Ridge every spring for twenty years, so I was annoyed when I saw the closure sign. " +
        N(8) + "Spring is the only season when the ridge is cool enough to enjoy, and the wildflowers there are the best in the county. " +
        N(9) + "Then I read the rangers' note about the crushed burrows, and I had to admit that I have stepped off that path myself to take photographs. " +
        N(10) + "I still think the park could have built a raised boardwalk for one short section instead of closing the whole trail. " +
        N(11) + "Until it does, I will be on the Mesquite Loop, and I plan to join one of those Saturday walks. " +
        N(12) + "Signed, Gilberto Ruiz." +
        "</p>",
      claims: [
        {
          id: "risk",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to Text 1, why are desert tortoise burrows at risk during the spring?",
          choices: [
            { letter: "A", text: "Tortoises are active then, and burrows lie close to where hikers step." },
            { letter: "B", text: "Spring storms flood the burrows near the bottom of the canyon." },
            { letter: "C", text: "Rangers move the burrows to make room for the Mesquite Loop." },
            { letter: "D", text: "Wildflowers grow over the burrows and block their entrances." }
          ],
          correct: "A"
        },
        {
          id: "agree",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "On which point do the park notice and Mr. Ruiz's letter agree?",
          choices: [
            { letter: "A", text: "A boardwalk would solve the problem." },
            { letter: "B", text: "The whole trail should stay open." },
            { letter: "C", text: "Hikers leaving the path harm burrows." },
            { letter: "D", text: "The wildflowers are the main concern." }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which sentence from Text 1 most directly changes Mr. Ruiz's attitude in Text 2?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "How does Mr. Ruiz's view of the closure differ from the park's view?",
          choices: [
            { letter: "A", text: "He denies that hikers have ever damaged a burrow." },
            { letter: "B", text: "He wants the trail closed for the entire year." },
            { letter: "C", text: "He thinks tortoises should be moved to a new park." },
            { letter: "D", text: "He accepts the reason but prefers a smaller fix." }
          ],
          correct: "D"
        },
        {
          id: "eggs",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence from Text 1 gives the strongest reason that losing even a few tortoise burrows matters?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "C"
        },
        {
          id: "next",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Based on both texts, what will Mr. Ruiz most likely do this spring?",
          choices: [
            { letter: "A", text: "hike Coyote Ridge early in the morning" },
            { letter: "B", text: "walk the Mesquite Loop and join a ranger walk" },
            { letter: "C", text: "build a boardwalk on the closed section himself" },
            { letter: "D", text: "stop hiking in the park until June 15" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── POETRY · 9.RL ───────────────────────── */
    {
      id: "g9-rl-c38-cactusflats",
      family: "G9",
      title: "After the Storm on Cactus Flats",
      kind: "Poetry · 9.RL",
      blurb: "A desert family watches the rain arrive, and the speaker remembers it in the dry month after.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "For months the ground was a locked door,<br>" +
        L(2) + "cracked and gray, with nothing behind it.<br>" +
        L(3) + "Then one afternoon the clouds came over<br>" +
        L(4) + "like a herd of slow, dark animals,<br>" +
        L(5) + "and the rain drummed on the tin roof<br>" +
        L(6) + "until my little brother covered his ears and laughed.<br>" +
        L(7) + "By morning the arroyo was talking,<br>" +
        L(8) + "a brown voice rushing past the fence.<br>" +
        L(9) + "By the third day, green had crept<br>" +
        L(10) + "across the flats like spilled paint,<br>" +
        L(11) + "and yellow flowers opened everywhere<br>" +
        L(12) + "as if someone had found the key.<br>" +
        L(13) + "My grandmother stood on the porch and said,<br>" +
        L(14) + "\"Remember this when it's dry again.\"<br>" +
        L(15) + "I am remembering it now, in August,<br>" +
        L(16) + "with the door locked tight and the key somewhere underground." +
        "</p>",
      claims: [
        {
          id: "door",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 1, the speaker compares the dry ground on Cactus Flats to a locked door mainly to suggest that —",
          choices: [
            { letter: "A", text: "the family has been shut out of their own land" },
            { letter: "B", text: "life is shut inside the ground, waiting to be let out" },
            { letter: "C", text: "the soil is too hard for anyone to walk across" },
            { letter: "D", text: "someone has built a fence around the flats" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "How does the ending of the Cactus Flats poem (lines 15–16) differ from its middle (lines 9–12)?",
          choices: [
            { letter: "A", text: "It describes a second storm that is even stronger than the first." },
            { letter: "B", text: "It shifts from the speaker's memories to the grandmother's memories." },
            { letter: "C", text: "It moves from dry, empty land to sudden green growth." },
            { letter: "D", text: "It returns to dryness but keeps the hope that the key still exists." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem about the rain on Cactus Flats?",
          choices: [
            { letter: "A", text: "Remembering renewal can carry a person through hard seasons." },
            { letter: "B", text: "Storms in the desert are more dangerous than they appear." },
            { letter: "C", text: "Children enjoy bad weather more than adults ever do." },
            { letter: "D", text: "Families should leave dry places for greener ones." }
          ],
          correct: "A"
        },
        {
          id: "speaker",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The Cactus Flats poem is told from the point of view of —",
          choices: [
            { letter: "A", text: "the grandmother, warning her grandchildren" },
            { letter: "B", text: "a visitor passing through the desert" },
            { letter: "C", text: "a family member recalling the rain months later" },
            { letter: "D", text: "the little brother who laughed at the storm" }
          ],
          correct: "C"
        },
        {
          id: "arroyo",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In lines 7 and 8, describing the arroyo as talking in a brown voice creates a mood that is —",
          choices: [
            { letter: "A", text: "gloomy and threatening" },
            { letter: "B", text: "quiet and sleepy" },
            { letter: "C", text: "lively and energetic" },
            { letter: "D", text: "tense and suspicious" }
          ],
          correct: "C"
        },
        {
          id: "key",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "The poet returns to the door and key in line 16 most likely to —",
          choices: [
            { letter: "A", text: "link the dry present to the earlier renewal" },
            { letter: "B", text: "show that the family has lost their house key" },
            { letter: "C", text: "suggest that the rain will never come again" },
            { letter: "D", text: "explain why the grandmother stood on the porch" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c38-case14",
      family: "G9",
      title: "Storage Jar, Case 14",
      kind: "Poetry · 9.RL",
      blurb: "A museum visitor finds a potter's thumbprint on an ancient jar labeled Unknown Maker.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "You sit behind the glass in Case 14,<br>" +
        L(2) + "labeled Storage Jar, Unknown Maker,<br>" +
        L(3) + "as if a name were something you had lost<br>" +
        L(4) + "and might still find in the gift shop.<br>" +
        L(5) + "The lights are kind to you; they skip your cracks.<br>" +
        L(6) + "But near your lip, pressed deep into the clay,<br>" +
        L(7) + "I find a thumbprint, whorled like a tiny storm,<br>" +
        L(8) + "left there the second before the fire.<br>" +
        L(9) + "Unknown, the card says. Yet I know<br>" +
        L(10) + "the width of that thumb, its hurry,<br>" +
        L(11) + "the way it pressed and lifted and moved on<br>" +
        L(12) + "to the next jar, the next long day.<br>" +
        L(13) + "Ten centuries of strangers have walked past,<br>" +
        L(14) + "reading the card and not the clay.<br>" +
        L(15) + "I put my own thumb up against the glass,<br>" +
        L(16) + "an inch from yours, and do not wipe the mark away." +
        "</p>",
      claims: [
        {
          id: "know",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Lines 9–12 of the Case 14 poem suggest that the speaker —",
          choices: [
            { letter: "A", text: "feels a personal bond with the potter despite the label" },
            { letter: "B", text: "has found records that reveal the potter's real name" },
            { letter: "C", text: "believes the museum has displayed the jar carelessly" },
            { letter: "D", text: "wishes to buy a copy of the jar in the gift shop" }
          ],
          correct: "A"
        },
        {
          id: "giftshop",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "In lines 3 and 4, the suggestion that the jar's lost name might turn up in the gift shop creates a tone that is —",
          choices: [
            { letter: "A", text: "angry and accusing" },
            { letter: "B", text: "solemn and grieving" },
            { letter: "C", text: "gently ironic" },
            { letter: "D", text: "openly cheerful" }
          ],
          correct: "C"
        },
        {
          id: "hurry",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In line 10, the word hurry suggests that the potter —",
          choices: [
            { letter: "A", text: "was careless and did not care how the jar looked" },
            { letter: "B", text: "was trying to escape before the fire was lit" },
            { letter: "C", text: "was a child who had not yet learned the craft" },
            { letter: "D", text: "made many jars quickly as part of daily work" }
          ],
          correct: "D"
        },
        {
          id: "address",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Throughout the poem, the speaker talks directly to —",
          choices: [
            { letter: "A", text: "the other visitors in the gallery" },
            { letter: "B", text: "the clay jar in the glass case" },
            { letter: "C", text: "the museum worker who wrote the card" },
            { letter: "D", text: "a friend who stayed in the gift shop" }
          ],
          correct: "B"
        },
        {
          id: "storm",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 7, comparing the potter's thumbprint to a tiny storm mainly emphasizes —",
          choices: [
            { letter: "A", text: "the damage the jar suffered over the centuries" },
            { letter: "B", text: "the weather on the day the jar was fired" },
            { letter: "C", text: "the swirling lines and energy left in the clay" },
            { letter: "D", text: "the speaker's anger at the museum's label" }
          ],
          correct: "C"
        },
        {
          id: "mark",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The poem ends with the speaker leaving a thumbprint on the glass (lines 15–16) mainly to show that the speaker —",
          choices: [
            { letter: "A", text: "has broken a museum rule and expects to be caught" },
            { letter: "B", text: "answers the potter's mark with a mark of her own" },
            { letter: "C", text: "is trying to clean the glass for the next visitor" },
            { letter: "D", text: "wants to compare the size of two different hands" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── DRAMA · 9.RL ───────────────────────── */
    {
      id: "g9-rl-c38-thecut",
      family: "G9",
      title: "The Cut",
      kind: "Drama · 9.RL",
      blurb: "A film runs over the time limit, and one scene matters more to its director than anyone knows.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A cramped editing room after school. JUNE and RAFAEL sit before a laptop; the timeline on the screen reads 6:12.</em></p>" +
        "<p><strong>RAFAEL:</strong> " + N(2) + "We're over by a minute and twelve seconds. " + N(3) + "Something has to go.</p>" +
        "<p><strong>JUNE:</strong> " + N(4) + "Not the rooftop scene. " + N(5) + "Anything but the rooftop scene.</p>" +
        "<p><strong>RAFAEL:</strong> " + N(6) + "The rooftop scene is a minute and ten seconds of you filming pigeons.</p>" +
        "<p><strong>JUNE:</strong> <em>(to the audience)</em> " + N(7) + "They aren't just pigeons. " + N(8) + "My grandfather kept pigeons, and I shot that scene the week after his funeral, but if I say that out loud I won't get through the sentence.</p>" +
        "<p><strong>RAFAEL:</strong> <em>(scrolling)</em> " + N(9) + "Look, the story is about the science fair. " + N(10) + "The pigeons don't connect to anything.</p>" +
        "<p><strong>JUNE:</strong> " + N(11) + "They connect to me.</p>" +
        "<p><em>" + N(12) + "MS. ADEYEMI enters carrying a stack of permission forms and stops behind them.</em></p>" +
        "<p><strong>MS. ADEYEMI:</strong> " + N(13) + "Six-twelve? " + N(14) + "The limit is five minutes, June.</p>" +
        "<p><strong>RAFAEL:</strong> <em>(to the audience)</em> " + N(15) + "If I push any harder she'll walk out, and if I don't push at all we'll be disqualified.</p>" +
        "<p><strong>MS. ADEYEMI:</strong> " + N(16) + "Play me the pigeons.</p>" +
        "<p><em>" + N(17) + "They watch in silence as the birds lift off the roof. RAFAEL slowly stops scrolling.</em></p>" +
        "<p><strong>RAFAEL:</strong> " + N(18) + "What if the pigeons are the ending? " + N(19) + "We cut the second judging scene instead, and the film ends on the roof.</p>" +
        "<p><strong>JUNE:</strong> <em>(quietly)</em> " + N(20) + "The judging scene is a minute and fifteen.</p>" +
        "<p><strong>RAFAEL:</strong> " + N(21) + "Then we're three seconds under.</p>" +
        "<p><em>" + N(22) + "JUNE nods, wipes her eyes with her sleeve, and clicks delete.</em></p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The playwright uses June's aside in sentences 7 and 8 mainly to —",
          choices: [
            { letter: "A", text: "show that June has forgotten why she filmed the roof" },
            { letter: "B", text: "explain the rules of the film contest to the audience" },
            { letter: "C", text: "reveal a private reason that Rafael does not know" },
            { letter: "D", text: "prove that June is joking about the pigeons" }
          ],
          correct: "C"
        },
        {
          id: "aside2",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Rafael's aside in sentence 15 shows that he —",
          choices: [
            { letter: "A", text: "feels caught between June's feelings and the rules" },
            { letter: "B", text: "plans to quit the project if June will not listen" },
            { letter: "C", text: "secretly agrees that the pigeons must stay in" },
            { letter: "D", text: "is afraid of Ms. Adeyemi's reaction to the forms" }
          ],
          correct: "A"
        },
        {
          id: "scrolling",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction in sentence 17, in which Rafael slowly stops scrolling, mainly signals that —",
          choices: [
            { letter: "A", text: "the laptop has frozen in the middle of the clip" },
            { letter: "B", text: "Rafael is waiting for Ms. Adeyemi to leave" },
            { letter: "C", text: "Rafael has grown bored with the long scene" },
            { letter: "D", text: "the footage is beginning to change his mind" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Because the audience hears June's aside but Rafael does not, the audience —",
          choices: [
            { letter: "A", text: "knows the film will win the contest" },
            { letter: "B", text: "understands June's resistance better than he does" },
            { letter: "C", text: "learns that Ms. Adeyemi already knows the secret" },
            { letter: "D", text: "suspects that Rafael is lying about the timer" }
          ],
          correct: "B"
        },
        {
          id: "rafael",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Rafael in the editing-room scene?",
          choices: [
            { letter: "A", text: "He is careless about the contest's rules and deadlines." },
            { letter: "B", text: "He is practical but finds a fix that respects June." },
            { letter: "C", text: "He is jealous that June's scene is better than his." },
            { letter: "D", text: "He is unwilling to change any part of the film." }
          ],
          correct: "B"
        },
        {
          id: "final",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The final stage direction (sentence 22) mainly serves to show that June —",
          choices: [
            { letter: "A", text: "accepts the cut with sadness but without argument" },
            { letter: "B", text: "deletes the rooftop scene after all, in anger" },
            { letter: "C", text: "is relieved that the film is finally finished" },
            { letter: "D", text: "plans to restore the judging scene later" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL TEXT · 9.RI ───────────────────────── */
    {
      id: "g9-ri-c38-sketching",
      family: "G9",
      title: "Sketching in the Galleries",
      kind: "Functional text · 9.RI",
      blurb: "An art museum's rules for visitors who want to draw in the galleries.",
      level: 1,
      passage:
        "<p><strong>Sketching in the Galleries — Marigold Hill Museum of Art</strong></p>" +
        "<p><strong>Who may sketch:</strong> " + N(1) + "All visitors are welcome to draw in the galleries during regular hours, whether they are beginners or professional artists. " +
        N(2) + "Groups of more than ten sketchers, including school classes, must reserve a time at the front desk at least one week in advance.</p>" +
        "<p><strong>What to bring:</strong> " + N(3) + "Use only dry materials such as graphite pencils, colored pencils, or charcoal sticks. " +
        N(4) + "Pens, markers, paints, and pastels are not permitted because they can stain floors and, if dropped, damage artwork. " +
        N(5) + "Sketchbooks may be no larger than 11 by 14 inches. " +
        N(6) + "Folding stools are available free of charge at the coat check.</p>" +
        "<p><strong>Where to stand:</strong> " + N(7) + "Stay at least three feet from every artwork, and do not lean sketchbooks against walls, cases, or pedestals. " +
        N(8) + "Please keep doorways and walkways clear so that other visitors can pass and enjoy the art.</p>" +
        "<p><strong>Special exhibitions:</strong> " + N(9) + "Sketching is not allowed in the Spring Textiles exhibit, where lighting is dim and space is limited.</p>" +
        "<p><strong>Questions?</strong> " + N(10) + "Ask any gallery attendant; attendants wear green lanyards and are happy to suggest good places to sit. " +
        N(11) + "We hope you leave with a full sketchbook!</p>",
      claims: [
        {
          id: "pens",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the sketching rules, why are pens and paints not permitted in the galleries?",
          choices: [
            { letter: "A", text: "They are too expensive for most visitors." },
            { letter: "B", text: "They make drawings that are hard to copy." },
            { letter: "C", text: "They can stain floors and damage artwork." },
            { letter: "D", text: "They are sold only in the museum shop." }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The Marigold Hill guide to sketching is written mainly for —",
          choices: [
            { letter: "A", text: "artists whose work hangs in the museum" },
            { letter: "B", text: "attendants who are learning their jobs" },
            { letter: "C", text: "teachers grading students' art projects" },
            { letter: "D", text: "visitors who want to draw in the galleries" }
          ],
          correct: "D"
        },
        {
          id: "headings",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The bold headings in the sketching guide help a reader mainly by —",
          choices: [
            { letter: "A", text: "listing the artworks in the order they hang" },
            { letter: "B", text: "grouping the rules by topic for quick reference" },
            { letter: "C", text: "showing which rules matter least to the museum" },
            { letter: "D", text: "telling the story of how the rules were written" }
          ],
          correct: "B"
        },
        {
          id: "teacher",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "A teacher plans to bring 25 students with markers to sketch next Tuesday. Which TWO sentences from the guide matter most for this plan? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "stool",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the guide, where can a sketcher get a folding stool?",
          choices: [
            { letter: "A", text: "at the front desk, by reservation" },
            { letter: "B", text: "from an attendant in a green lanyard" },
            { letter: "C", text: "at the coat check, free of charge" },
            { letter: "D", text: "in the Spring Textiles exhibit" }
          ],
          correct: "C"
        },
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the main idea of the Marigold Hill sketching guide?",
          choices: [
            { letter: "A", text: "Only professional artists may draw inside the museum." },
            { letter: "B", text: "Sketching is discouraged because it crowds the rooms." },
            { letter: "C", text: "The museum sells all the supplies a sketcher needs." },
            { letter: "D", text: "Visitors may sketch if they follow rules that protect the art." }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── ARGUMENT · 9.RI ───────────────────────── */
    {
      id: "g9-ri-c38-courtyard",
      family: "G9",
      title: "Let the Courtyard Bloom",
      kind: "Argument · 9.RI",
      blurb: "A student argues that a desert school should trade its thirsty lawn for native plants.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every morning at Juniper Flats High School, sprinklers soak the courtyard lawn, and by noon much of that water has risen into the dry desert air. " +
        N(2) + "Our school should replace the lawn with a garden of native desert plants. " +
        N(3) + "According to the district's own utility report, the courtyard uses about 180,000 gallons of water a year, more than the gym's showers and the cafeteria combined. " +
        N(4) + "Native plants such as brittlebush, desert marigold, and agave need little or no watering once their roots are established, usually after two summers. " +
        N(5) + "Some students worry that a desert garden would be nothing but gravel and spines. " +
        N(6) + "That fear is understandable, but it is not accurate: in spring, desert marigolds and penstemon bloom in yellow, red, and purple, and they attract hummingbirds and native bees that a lawn never feeds. " +
        N(7) + "Others point out that the lawn is the only soft place to sit at lunch. " +
        N(8) + "This is a fair point, which is why the plan should keep a small patch of grass under the ash trees and add shaded benches along the paths. " +
        N(9) + "The cost is real, too; the biology club estimates that plants and drip lines would cost about $6,000. " +
        N(10) + "Yet the district already spends roughly $2,500 a year watering and mowing the lawn, so the garden would pay for itself in less than three years. " +
        N(11) + "Finally, a native garden would become a living classroom, where biology students could track how desert plants handle heat and drought. " +
        N(12) + "A lawn in the desert is a habit, not a necessity. " +
        N(13) + "It is time our courtyard looked like the place where we actually live." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence best states the writer's central claim about the Juniper Flats courtyard?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "B"
        },
        {
          id: "money",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence provides the strongest evidence that a native garden would save the district money over time?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "In sentences 5 and 6, the writer raises the worry about gravel and spines mainly to —",
          choices: [
            { letter: "A", text: "acknowledge a concern and answer it with evidence" },
            { letter: "B", text: "admit that a desert garden would be unattractive" },
            { letter: "C", text: "suggest that students should vote on the plan" },
            { letter: "D", text: "show that the biology club disagrees with the plan" }
          ],
          correct: "A"
        },
        {
          id: "habit",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "In sentence 12, the writer calls a desert lawn a habit, not a necessity, mainly to suggest that —",
          choices: [
            { letter: "A", text: "students have grown too used to sitting on the grass" },
            { letter: "B", text: "the lawn will die on its own within a few years" },
            { letter: "C", text: "the lawn exists out of custom rather than real need" },
            { letter: "D", text: "the district has never paid for the lawn's water" }
          ],
          correct: "C"
        },
        {
          id: "understandable",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The writer calls the students' fear understandable in sentence 6 rather than foolish. This word choice gives the argument a tone that is —",
          choices: [
            { letter: "A", text: "respectful toward people who disagree" },
            { letter: "B", text: "doubtful about the writer's own plan" },
            { letter: "C", text: "mocking toward the biology club" },
            { letter: "D", text: "angry at the school district" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the writer mainly organize sentences 5 through 10 of the courtyard argument?",
          choices: [
            { letter: "A", text: "by describing the garden season by season" },
            { letter: "B", text: "by comparing three schools' courtyards" },
            { letter: "C", text: "by telling the history of the lawn in order" },
            { letter: "D", text: "by raising objections and answering each one" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
