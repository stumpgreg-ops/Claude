/* SOL Labyrinth — Grade 11 long packs (stamina tier, nights 65-94): sea turtles, a city bus route,
 * a theme park job, pottery. Thirteen packs of eight questions: stories, a poem, a scene, articles,
 * vocabulary, paired texts, a rider guide and an argument. Original text only; no real people or
 * published texts. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* 1 · Literary · pottery */
    {
      id: "g11-rl-c110-soundbowl",
      family: "G11",
      title: "Sound",
      kind: "Literary · 11.RL",
      blurb: "Three bowls crack in the kiln before a young potter learns which step she has been skipping.",
      level: 2,
      passage:
        "<p>" + N(1) + "The studio on Calder Street smelled like rain even in August, because the clay kept the air damp, and Amara had decided by her second week that she loved the smell more than anything she had made there. " +
        N(2) + "That was not saying much. " +
        N(3) + "Three times she had thrown a bowl on the wheel, trimmed it, dried it, and handed it to Mr. Sato for the kiln, and three times it had come out with a crack running from the rim like a bolt of dark lightning.</p>" +
        "<p>" + N(4) + "\"You are in a hurry,\" Mr. Sato said when she showed him the third one. " +
        N(5) + "He did not say it unkindly; he said it the way a doctor names a fever. " +
        N(6) + "Amara wanted to argue that she had spent four hours on that bowl, which was not what hurrying looked like. " +
        N(7) + "Instead she asked what she had done wrong, and he pointed, not at the bowl, but at the wedging table by the door, a slab of plaster scarred with years of thumbprints.</p>" +
        "<p>" + N(8) + "Wedging was the part Amara skipped whenever she could. " +
        N(9) + "Before clay goes on the wheel, it has to be kneaded, pressed and folded and turned, until every pocket of trapped air has been pushed out. " +
        N(10) + "It is tedious work, the kind with nothing to show for it, and Amara had been giving it thirty seconds of halfhearted shoving before rushing to the wheel, where she believed the real art happened. " +
        N(11) + "\"The air you leave inside,\" Mr. Sato said, \"waits for the fire. " +
        N(12) + "Then it wants out.\"</p>" +
        "<p>" + N(13) + "So for a week she wedged. " +
        N(14) + "She wedged until her wrists ached and the other students drifted past her to the wheels, and she counted the turns under her breath like a prayer she did not quite believe in. " +
        N(15) + "She cut each lump in half with a wire to check for holes, and when she found one, small as a pinprick, she sighed and began again. " +
        N(16) + "It felt like practicing scales for a song she would never be allowed to play.</p>" +
        "<p>" + N(17) + "Her fourth bowl was lopsided. " +
        N(18) + "The rim dipped on one side as though someone had leaned on it, and the glaze pooled darker in the low spot, and when Mr. Sato lifted it from the cooling kiln, Amara braced herself for the familiar line of dark lightning. " +
        N(19) + "There was none. " +
        N(20) + "He turned the bowl in his hands, tapped its side with a fingernail, and listened to the clear ring it made. " +
        N(21) + "\"Sound,\" he said, which Amara later learned was the highest compliment he gave, a word that meant whole, not beautiful.</p>" +
        "<p>" + N(22) + "She took the bowl home and set it on her windowsill next to the three cracked ones, which she had kept without quite knowing why. " +
        N(23) + "Her mother asked why she didn't throw the broken ones away. " +
        N(24) + "Amara looked at the row of them, the three that had been rushed and the one that had been patient, and found she could not explain it in words. " +
        N(25) + "They were, she thought, a kind of record, and the crooked one at the end was the only line in it she was proud of.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the story of Amara's fourth bowl most clearly develop?",
          choices: [
            { letter: "A", text: "Natural talent matters more than effort when learning a craft." },
            { letter: "B", text: "Lasting quality depends on patient work that no one else may notice." },
            { letter: "C", text: "Teachers should always explain their reasons before giving advice." },
            { letter: "D", text: "A beautiful object is worth more than a merely useful one." }
          ],
          correct: "B"
        },
        {
          id: "hurry",
          sol: "11.RL.1.B",
          stem: "Mr. Sato's remark in sentence 4 that Amara is \"in a hurry\" suggests that he believes —",
          choices: [
            { letter: "A", text: "she should spend more hours shaping each bowl on the wheel" },
            { letter: "B", text: "she is not truly interested in learning to make pottery" },
            { letter: "C", text: "she should stop using the kiln until her skills improve" },
            { letter: "D", text: "her problem lies in a step she rushes, not in her total time" }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          stem: "Which statement best describes how Amara's attitude changes between sentence 10 and sentence 15?",
          choices: [
            { letter: "A", text: "She moves from dismissing the dull preparation to treating it with care." },
            { letter: "B", text: "She moves from trusting Mr. Sato to doubting his strange methods." },
            { letter: "C", text: "She moves from working alone to relying on the other students." },
            { letter: "D", text: "She moves from loving the studio to resenting the time it takes." }
          ],
          correct: "A"
        },
        {
          id: "lightning",
          sol: "11.RL.2.A",
          stem: "The image of a crack running from the rim \"like a bolt of dark lightning\" (sentence 3) mainly conveys —",
          choices: [
            { letter: "A", text: "the beauty Amara sees in the unusual glaze pattern" },
            { letter: "B", text: "the danger the kiln poses to people in the studio" },
            { letter: "C", text: "the sudden, damaging force of the flaw she keeps finding" },
            { letter: "D", text: "the speed with which Amara learns to throw a bowl" }
          ],
          correct: "C"
        },
        {
          id: "prayer",
          sol: "11.RL.2.B",
          stem: "In sentence 14, comparing Amara's counting to \"a prayer she did not quite believe in\" suggests that she —",
          choices: [
            { letter: "A", text: "follows the routine faithfully while still doubting it will work" },
            { letter: "B", text: "has given up on pottery and only pretends to practice" },
            { letter: "C", text: "finds comfort in the quiet, serious mood of the studio" },
            { letter: "D", text: "believes the counting itself will magically fix her bowls" }
          ],
          correct: "A"
        },
        {
          id: "sound",
          sol: "11.RL.2.C",
          stem: "As Mr. Sato uses it in sentence 21, the word sound most nearly means —",
          choices: [
            { letter: "A", text: "loud and clear when struck" },
            { letter: "B", text: "pleasing in shape and color" },
            { letter: "C", text: "whole and free of hidden flaws" },
            { letter: "D", text: "reasonable and well argued" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "11.RL.3.A",
          stem: "How does the final paragraph (sentences 22-25) connect to the opening of the story?",
          choices: [
            { letter: "A", text: "It reveals that Amara plans to quit the studio once summer ends." },
            { letter: "B", text: "It shows that Mr. Sato's advice was wrong from the beginning." },
            { letter: "C", text: "It returns to the studio's smell to suggest nothing has changed." },
            { letter: "D", text: "It turns the cracked bowls from failures into a record of growth." }
          ],
          correct: "D"
        },
        {
          id: "tedious",
          sol: "11.RV.1.C",
          stem: "In sentence 10, the description of wedging as tedious work most nearly means the work is —",
          choices: [
            { letter: "A", text: "dangerous and tiring" },
            { letter: "B", text: "dull and repetitive" },
            { letter: "C", text: "rare and difficult" },
            { letter: "D", text: "careless and quick" }
          ],
          correct: "B"
        }
      ]
    },

    /* 2 · Literary · city bus route */
    {
      id: "g11-rl-c110-route14",
      family: "G11",
      title: "Route 14, Last Run",
      kind: "Literary · 11.RL",
      blurb: "When her bus route is changed, a teenager finally looks up and sees who has been riding with her.",
      level: 3,
      passage:
        "<p>" + N(1) + "For eleven months Lucía Ferreira rode the 14 bus the way most people ride an elevator: facing forward, headphones in, eyes fixed on a point where no one else was. " +
        N(2) + "The route ran from the laundromat where she folded towels after school to the stop on Harmon Avenue, two blocks from her building, and she knew it by sound rather than sight: the hiss at Delmar, the long grinding turn at the hospital, the pothole at Ninth that made everyone's coffee jump.</p>" +
        "<p>" + N(3) + "She noticed the notice only because it was taped over her favorite window. " +
        N(4) + "Beginning March 3, it said, Route 14 would no longer serve Harmon Avenue; riders were directed to the new stop at Kessler Plaza, \"a short walk.\" " +
        N(5) + "Lucía measured the walk in her head. " +
        N(6) + "It was nine blocks, and they were not short ones.</p>" +
        "<p>" + N(7) + "After that she started, almost against her will, to look around. " +
        N(8) + "There was the nurse in teal scrubs who fell asleep after the hospital stop and woke, every single night, exactly one stop before her own, as if some clock inside her had been set by the route. " +
        N(9) + "There were the twin boys with violin cases who argued in whispers about whose turn it was to hold the transfer. " +
        N(10) + "And there was Mr. Pham, who boarded at Delmar with two cloth grocery bags and took so long climbing the steps that Lucía had once, months ago, rolled her eyes at him without bothering to hide it.</p>" +
        "<p>" + N(11) + "The driver, Mrs. Russo, never rolled her eyes. " +
        N(12) + "She waited for Mr. Pham the way you wait for a song to finish, and if the riders behind him sighed, she did not seem to hear them. " +
        N(13) + "Lucía had always assumed the driver was simply slow. " +
        N(14) + "Now she watched Mrs. Russo glance in the mirror at the nurse each night before the hospital turn, easing the bus around the corner so gently that the sleeping woman's head never left the window.</p>" +
        "<p>" + N(15) + "On the last night of the old route, Mrs. Russo did something she had never done. " +
        N(16) + "At each stop, instead of calling out the street, she called out a name. " +
        N(17) + "\"Delmar, Mr. Pham.\" " +
        N(18) + "\"Ninth Street, ladies and gentlemen, hold your coffee.\" " +
        N(19) + "\"Harmon Avenue,\" she said at last, and then, after a pause long enough that Lucía looked up, \"Miss Lucía.\" " +
        N(20) + "Lucía had not known the driver knew her name; she had not, until that month, known the driver's.</p>" +
        "<p>" + N(21) + "On March 3 the 14 rolled past Harmon without slowing. " +
        N(22) + "At Kessler Plaza, Lucía stepped off, then waited on the curb while Mr. Pham worked his way down the steps with his bags. " +
        N(23) + "She held out her hand for one of them. " +
        N(24) + "He looked at her for a long moment, as though checking a face against a memory, and then he gave her the heavier one. " +
        N(25) + "It was nine blocks, and they were not short ones, but they were shorter with two people carrying them.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best developed by Lucía's last month on the old Route 14?",
          choices: [
            { letter: "A", text: "Public transit should be planned around its busiest stops." },
            { letter: "B", text: "Young people rarely notice the adults who surround them." },
            { letter: "C", text: "Paying attention to others can turn strangers into neighbors." },
            { letter: "D", text: "Change is easier to accept when it happens very gradually." }
          ],
          correct: "C"
        },
        {
          id: "mirror",
          sol: "11.RL.1.B",
          stem: "What can the reader infer from Mrs. Russo's glance in the mirror before the hospital turn (sentence 14)?",
          choices: [
            { letter: "A", text: "She has quietly been looking out for her regular riders all along." },
            { letter: "B", text: "She worries that the nurse will miss her stop and complain." },
            { letter: "C", text: "She is a nervous driver who dislikes the hospital corner." },
            { letter: "D", text: "She wants Lucía to notice how carefully she handles the bus." }
          ],
          correct: "A"
        },
        {
          id: "bags",
          sol: "11.RL.1.C",
          stem: "Lucía's offer to carry a bag in sentences 22 and 23 is important to her character because it shows that she —",
          choices: [
            { letter: "A", text: "regrets taking a job at a laundromat so far from home" },
            { letter: "B", text: "hopes Mr. Pham will tell the driver she has been kind" },
            { letter: "C", text: "refuses to accept the change to the bus route at all" },
            { letter: "D", text: "has begun to practice the care she saw in Mrs. Russo" }
          ],
          correct: "D"
        },
        {
          id: "song",
          sol: "11.RL.2.A",
          stem: "In sentence 12, the comparison of waiting for Mr. Pham to waiting \"for a song to finish\" suggests that Mrs. Russo —",
          choices: [
            { letter: "A", text: "enjoys listening to music while she drives the route" },
            { letter: "B", text: "treats the delay as worth respecting, not just enduring" },
            { letter: "C", text: "grows impatient but hides her feelings from the riders" },
            { letter: "D", text: "has memorized the exact timing of every stop she makes" }
          ],
          correct: "B"
        },
        {
          id: "nineblocks",
          sol: "11.RL.2.B",
          stem: "The words \"nine blocks, and they were not short ones\" appear in both sentence 6 and sentence 25. Across the story, the tone of these words shifts from —",
          choices: [
            { letter: "A", text: "cheerful to bitter" },
            { letter: "B", text: "resentful to quietly hopeful" },
            { letter: "C", text: "confused to frightened" },
            { letter: "D", text: "playful to coldly formal" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RL.3.A",
          stem: "The story of Lucía's final weeks on the old route is structured mainly around —",
          choices: [
            { letter: "A", text: "a series of arguments between the riders and the driver" },
            { letter: "B", text: "a flashback explaining why the city changed the route" },
            { letter: "C", text: "a contest of patience between Lucía and Mr. Pham" },
            { letter: "D", text: "a shift in what Lucía notices, from sounds to people" }
          ],
          correct: "D"
        },
        {
          id: "quotes",
          sol: "11.RL.2.C",
          stem: "In sentence 4, the quotation marks around \"a short walk\" suggest that the phrase is —",
          choices: [
            { letter: "A", text: "an official description that Lucía finds misleading" },
            { letter: "B", text: "a remark Mrs. Russo made to the riders that night" },
            { letter: "C", text: "a kind promise that Lucía believes completely" },
            { letter: "D", text: "the printed title of the new bus schedule" }
          ],
          correct: "A"
        },
        {
          id: "notice",
          sol: "11.RV.1.B",
          stem: "Sentence 3 uses two forms of the same word: Lucía \"noticed the notice.\" In this sentence, the noun notice most nearly means —",
          choices: [
            { letter: "A", text: "a careful look" },
            { letter: "B", text: "a warning of firing" },
            { letter: "C", text: "a posted announcement" },
            { letter: "D", text: "a written review" }
          ],
          correct: "C"
        }
      ]
    },

    /* 3 · Literary · theme park job */
    {
      id: "g11-rl-c110-caterpillar",
      family: "G11",
      title: "The Caterpillar",
      kind: "Literary · 11.RL",
      blurb: "A teen hired to run the park's smallest coaster learns what one nervous rider can teach him.",
      level: 1,
      passage:
        "<p>" + N(1) + "Jae-won Park had applied to Lakeview Park hoping to run the Comet, the wooden roller coaster that rattled the whole north end of the park. " +
        N(2) + "Instead, on his first morning, a supervisor named Gloria handed him a lanyard and walked him to the Caterpillar. " +
        N(3) + "The Caterpillar was a green coaster about as tall as a garden shed. " +
        N(4) + "It had one small hill and two gentle curves, and the ride lasted forty seconds. " +
        N(5) + "Its riders were mostly four years old.</p>" +
        "<p>" + N(6) + "\"This is it?\" Jae-won asked. " +
        N(7) + "Gloria smiled as if she had heard the question many times before. " +
        N(8) + "\"This is it,\" she said. \"Check every lap bar twice. Wave at every rider. And never rush the nervous ones.\" " +
        N(9) + "Then she left him alone with a line of small children and their parents.</p>" +
        "<p>" + N(10) + "The first week was dull. " +
        N(11) + "Jae-won checked lap bars, pressed the green button, and watched the little train creep over its little hill again and again. " +
        N(12) + "He could hear the screams from the Comet across the park, and each one felt like a party he had not been invited to. " +
        N(13) + "He waved at riders because Gloria had told him to, but his waves were small and tired.</p>" +
        "<p>" + N(14) + "On the eighth day, a girl in a purple raincoat stood at the front of the line and would not move. " +
        N(15) + "Her father said her name was Rosie and that she had tried to ride three times that summer. " +
        N(16) + "Each time, she had turned back at the gate. " +
        N(17) + "The line behind her began to grumble. " +
        N(18) + "Jae-won remembered Gloria's third rule and knelt down to Rosie's height. " +
        N(19) + "He told her that the Caterpillar was the slowest ride in the whole park, and that he would wave at her at the top of the hill so she would know exactly where he was.</p>" +
        "<p>" + N(20) + "Rosie took a long breath and climbed into the front car. " +
        N(21) + "Jae-won checked her lap bar twice. " +
        N(22) + "When the train reached the top of its tiny hill, he waved with his whole arm, and Rosie, gripping the bar with one hand, lifted the other and waved back. " +
        N(23) + "When the train rolled into the station, she was laughing so hard that she could not talk. " +
        N(24) + "Her father mouthed thank you over her head.</p>" +
        "<p>" + N(25) + "That evening, Jae-won walked past the Comet on his way out. " +
        N(26) + "The riders coming off it looked happy, but they looked happy the way people look after any good ride. " +
        N(27) + "None of them looked the way Rosie had looked. " +
        N(28) + "The next morning he arrived ten minutes early, and when the first child of the day climbed into the Caterpillar, he waved as if the little hill were a mountain.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best supported by Jae-won's summer at the Caterpillar?",
          choices: [
            { letter: "A", text: "A job that seems small can matter greatly to the people it serves." },
            { letter: "B", text: "The most thrilling rides are the most important ones in a park." },
            { letter: "C", text: "Workers should be allowed to choose their own assignments." },
            { letter: "D", text: "Children should never be pushed to try things that scare them." }
          ],
          correct: "A"
        },
        {
          id: "gloria",
          sol: "11.RL.1.B",
          stem: "Gloria's smile in sentence 7 suggests that she —",
          choices: [
            { letter: "A", text: "is amused that Jae-won does not know how to run a ride" },
            { letter: "B", text: "plans to move Jae-won to the Comet after a week" },
            { letter: "C", text: "expected his disappointment because other new workers felt it too" },
            { letter: "D", text: "thinks the Caterpillar is the least important ride in the park" }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "11.RL.1.C",
          stem: "Which detail best shows Jae-won's attitude toward the Caterpillar during his first week?",
          choices: [
            { letter: "A", text: "He checks every lap bar twice." },
            { letter: "B", text: "His waves at riders are small and tired." },
            { letter: "C", text: "He kneels down to Rosie's height." },
            { letter: "D", text: "He arrives ten minutes early." }
          ],
          correct: "B"
        },
        {
          id: "party",
          sol: "11.RL.2.A",
          stem: "In sentence 12, comparing the Comet's screams to \"a party he had not been invited to\" shows that Jae-won feels —",
          choices: [
            { letter: "A", text: "annoyed by the noise coming from the other ride" },
            { letter: "B", text: "worried that the Comet's riders are in danger" },
            { letter: "C", text: "proud that his own ride is quieter and safer" },
            { letter: "D", text: "left out of the excitement he had hoped to share" }
          ],
          correct: "D"
        },
        {
          id: "rosie",
          sol: "11.RL.3.A",
          stem: "How does the episode with Rosie in sentences 14-24 affect the plot of the story?",
          choices: [
            { letter: "A", text: "It introduces a problem that the story never solves." },
            { letter: "B", text: "It explains why Jae-won was not assigned to the Comet." },
            { letter: "C", text: "It is the turning point that changes how Jae-won sees his job." },
            { letter: "D", text: "It shows Gloria secretly testing Jae-won's ability to follow rules." }
          ],
          correct: "C"
        },
        {
          id: "grumble",
          sol: "11.RL.2.C",
          stem: "In sentence 17, the word grumble most nearly means to —",
          choices: [
            { letter: "A", text: "complain in low voices" },
            { letter: "B", text: "shout loud insults" },
            { letter: "C", text: "leave in a hurry" },
            { letter: "D", text: "laugh in surprise" }
          ],
          correct: "A"
        },
        {
          id: "mountain",
          sol: "11.RL.2.B",
          stem: "The final sentence, in which Jae-won waves \"as if the little hill were a mountain,\" creates a tone of —",
          choices: [
            { letter: "A", text: "quiet regret" },
            { letter: "B", text: "playful mockery" },
            { letter: "C", text: "nervous worry" },
            { letter: "D", text: "renewed enthusiasm" }
          ],
          correct: "D"
        },
        {
          id: "creep",
          sol: "11.RV.1.C",
          stem: "In sentence 11, the word creep shows that the Caterpillar's train moves —",
          choices: [
            { letter: "A", text: "secretly and dishonestly" },
            { letter: "B", text: "slowly and steadily" },
            { letter: "C", text: "loudly and roughly" },
            { letter: "D", text: "quickly and suddenly" }
          ],
          correct: "B"
        }
      ]
    },

    /* 4 · Informational · sea turtles */
    {
      id: "g11-ri-c110-turtlehoming",
      family: "G11",
      title: "The Long Way Home",
      kind: "Informational · 11.RI",
      blurb: "How do sea turtles find the beach where they hatched, decades after leaving it?",
      level: 1,
      passage:
        "<p>" + N(1) + "A loggerhead sea turtle may swim thousands of miles in its lifetime, crossing entire oceans and spending years far from any shore. " +
        N(2) + "Yet when a female is ready to lay her eggs, often twenty years or more after she hatched, she frequently returns to the same stretch of coast where her own life began. " +
        N(3) + "Scientists call this behavior natal homing, and for a long time it was one of the great puzzles of ocean biology. " +
        N(4) + "How does an animal with no map, no compass, and no memory of the open sea find its way back to a single beach?</p>" +
        "<p>" + N(5) + "The answer, researchers now believe, begins with the planet itself. " +
        N(6) + "Earth acts like a giant magnet, and its magnetic field differs slightly from place to place. " +
        N(7) + "Two features of that field, its strength and the angle at which its lines meet the ground, change in a fairly steady pattern from the equator toward the poles. " +
        N(8) + "Together, these features give each part of a coastline a kind of magnetic signature. " +
        N(9) + "Experiments with young turtles in water tanks have shown that the animals change the direction they swim when scientists alter the magnetic field around them. " +
        N(10) + "This evidence suggests that turtles can sense the field and may remember the signature of their home beach.</p>" +
        "<p>" + N(11) + "Magnetism is not the whole story, however. " +
        N(12) + "Newly hatched turtles, which climb out of their nests at night, face a more immediate challenge: getting from the sand to the water. " +
        N(13) + "Hatchlings crawl toward the brightest horizon, which on a natural beach is almost always the open sea, where starlight and moonlight reflect off the waves. " +
        N(14) + "Once in the water, they swim straight into the waves and then, scientists think, switch to their magnetic sense to guide them offshore.</p>" +
        "<p>" + N(15) + "This reliance on light creates a modern danger. " +
        N(16) + "On beaches lined with houses, hotels, and streetlights, the brightest horizon may be inland. " +
        N(17) + "Hatchlings that follow artificial light can wander onto roads or parking lots, where many die before dawn. " +
        N(18) + "Some coastal towns now require residents to switch off or shield outdoor lights during nesting season, and volunteers patrol the sand at night to guide lost hatchlings back toward the surf.</p>" +
        "<p>" + N(19) + "Even with these efforts, only a small fraction of hatchlings survive to adulthood. " +
        N(20) + "That is part of what makes natal homing so remarkable. " +
        N(21) + "The few females that do survive carry, somewhere in their senses, a record of a single beach, and decades later they follow it home. " +
        N(22) + "Protecting those beaches, scientists argue, protects the end point of one of the longest journeys in the animal kingdom.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about loggerhead navigation?",
          choices: [
            { letter: "A", text: "Sea turtles spend most of their long lives far out in the ocean." },
            { letter: "B", text: "Artificial lights are the greatest danger facing all ocean life." },
            { letter: "C", text: "Scientists have fully solved the puzzle of how turtles navigate." },
            { letter: "D", text: "Turtles navigate by magnetism and light, so their beaches need care." }
          ],
          correct: "D"
        },
        {
          id: "tanks",
          sol: "11.RI.1.B",
          stem: "According to the article, what evidence suggests that young turtles can sense Earth's magnetic field?",
          choices: [
            { letter: "A", text: "They always return to the exact beach where they hatched." },
            { letter: "B", text: "They change direction in tanks when scientists alter the field." },
            { letter: "C", text: "They crawl toward the brightest horizon on the beach at night." },
            { letter: "D", text: "They swim straight into the waves as soon as they reach water." }
          ],
          correct: "B"
        },
        {
          id: "belief",
          sol: "11.RI.1.C",
          stem: "Which statement from the turtle article is presented as a belief rather than a confirmed fact?",
          choices: [
            { letter: "A", text: "Hatchlings switch to their magnetic sense offshore (sentence 14)." },
            { letter: "B", text: "Hatchlings climb out of their nests at night (sentence 12)." },
            { letter: "C", text: "Some towns require outdoor lights to be shielded (sentence 18)." },
            { letter: "D", text: "Earth's magnetic field differs from place to place (sentence 6)." }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "How does the author organize the paragraph made up of sentences 15-18?",
          choices: [
            { letter: "A", text: "by comparing two different kinds of sea turtles" },
            { letter: "B", text: "by listing events in the order in which they occurred" },
            { letter: "C", text: "by describing a problem and then the responses to it" },
            { letter: "D", text: "by stating a claim and then showing that it is false" }
          ],
          correct: "C"
        },
        {
          id: "question",
          sol: "11.RI.2.B",
          stem: "The author ends the first paragraph with the question in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "show that scientists still argue about turtle behavior" },
            { letter: "B", text: "frame the puzzle that the rest of the article explains" },
            { letter: "C", text: "suggest that turtles have better memories than people" },
            { letter: "D", text: "introduce the danger posed by coastal development" }
          ],
          correct: "B"
        },
        {
          id: "signature",
          sol: "11.RI.2.C",
          stem: "In sentence 8, the author says each part of a coastline has \"a kind of magnetic signature\" mainly to —",
          choices: [
            { letter: "A", text: "show that turtles leave marks in the sand where they nest" },
            { letter: "B", text: "explain why magnets are used to track turtles at sea" },
            { letter: "C", text: "argue that coastlines should be labeled for ship captains" },
            { letter: "D", text: "suggest that each place can be known by its own pattern" }
          ],
          correct: "D"
        },
        {
          id: "wander",
          sol: "11.RV.1.C",
          stem: "In sentence 17, the word wander most nearly means to —",
          choices: [
            { letter: "A", text: "rest for a short time" },
            { letter: "B", text: "dig into the ground" },
            { letter: "C", text: "move without a clear direction" },
            { letter: "D", text: "run in a straight line" }
          ],
          correct: "C"
        },
        {
          id: "inland",
          sol: "11.RV.1.A",
          stem: "The word inland in sentence 16 joins the prefix in- to the word land. In inland, the prefix in- signals —",
          choices: [
            { letter: "A", text: "toward or within" },
            { letter: "B", text: "not or the opposite of" },
            { letter: "C", text: "before or earlier" },
            { letter: "D", text: "again or back" }
          ],
          correct: "A"
        }
      ]
    },

    /* 5 · Informational · city bus route */
    {
      id: "g11-ri-c110-bunching",
      family: "G11",
      title: "Three Buses at Once",
      kind: "Informational · 11.RI",
      blurb: "Why buses arrive in clumps, and what transit agencies do to pull them apart.",
      level: 2,
      passage:
        "<p>" + N(1) + "Anyone who has waited twenty minutes for a city bus, only to watch three arrive at once, has met a problem that transit planners call bus bunching. " +
        N(2) + "It looks like bad luck or careless scheduling, but it is neither. " +
        N(3) + "Bunching is a predictable result of how buses and riders interact, and once it starts, it tends to grow worse on its own.</p>" +
        "<p>" + N(4) + "The process begins with a small delay. " +
        N(5) + "Imagine a route where buses are scheduled ten minutes apart. " +
        N(6) + "If one bus is held up for two minutes by a stalled truck, it reaches the next stop twelve minutes after the bus ahead of it instead of ten. " +
        N(7) + "More riders have gathered in those extra two minutes, so boarding takes longer, and the bus falls further behind. " +
        N(8) + "Meanwhile, the bus following it finds fewer people waiting at each stop, because the late bus has just collected them. " +
        N(9) + "The follower boards quickly and gains ground. " +
        N(10) + "Stop by stop, the gap in front of the late bus widens while the gap behind it shrinks, until the two buses are traveling nose to tail.</p>" +
        "<p>" + N(11) + "For riders, the effect is doubly frustrating. " +
        N(12) + "The average time between buses may still be ten minutes, but the actual wait can be twenty, followed by a pair of buses, one crowded and one nearly empty. " +
        N(13) + "When one midsize city's transit agency surveyed its riders, unpredictable waits ranked as the top complaint, above fares, cleanliness, and even total travel time.</p>" +
        "<p>" + N(14) + "Transit agencies have tried several remedies. " +
        N(15) + "Some instruct the driver at the front of a bunch to skip a stop or two to regain spacing, though this angers the riders left waiting at those stops. " +
        N(16) + "Others use a method called headway control, in which a dispatcher watching every bus on a screen tells a driver who is running too close behind to wait briefly at a timepoint stop. " +
        N(17) + "Holding a bus for ninety seconds can seem absurd to the passengers on board, but it often keeps the whole line evenly spaced. " +
        N(18) + "Agencies have also found that letting riders pay before boarding, or board through any door, cuts the time spent at each stop and leaves less room for small delays to snowball.</p>" +
        "<p>" + N(19) + "None of these fixes eliminates bunching entirely, because the forces that cause it never stop. " +
        N(20) + "Traffic, weather, and a wheelchair lift that sticks can still throw a bus off schedule. " +
        N(21) + "What the remedies do is interrupt the cycle before a minor delay becomes a major one. " +
        N(22) + "Seen this way, the bus that waits at a stop for no visible reason may not be wasting your time at all; it may be the reason the next rider down the line does not have to wait twenty minutes.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          stem: "Which statement best summarizes the central idea of the article on bus bunching?",
          choices: [
            { letter: "A", text: "Drivers cause bunching by failing to follow their schedules." },
            { letter: "B", text: "Bunching grows from small delays, and agencies can interrupt it." },
            { letter: "C", text: "Most bus riders care more about fares than about waiting." },
            { letter: "D", text: "Adding more buses to each route ends bunching permanently." }
          ],
          correct: "B"
        },
        {
          id: "follower",
          sol: "11.RI.1.B",
          stem: "According to the article, why does the bus behind a late bus begin to gain ground?",
          choices: [
            { letter: "A", text: "Its driver is told to skip several stops to catch up." },
            { letter: "B", text: "It travels on a different street with lighter traffic." },
            { letter: "C", text: "It finds fewer riders, since the late bus just took them." },
            { letter: "D", text: "Its riders all pay their fares before the bus arrives." }
          ],
          correct: "C"
        },
        {
          id: "spacing",
          sol: "11.RI.1.B",
          stem: "Select TWO sentences that describe actions an agency can take to restore the spacing between buses.",
          choices: [
            { letter: "A", text: "Sentence 15" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward headway control (sentences 16 and 17) is best described as —",
          choices: [
            { letter: "A", text: "doubtful, because it angers riders left at stops" },
            { letter: "B", text: "neutral, since the author offers no view of it" },
            { letter: "C", text: "hostile, because it wastes passengers' time" },
            { letter: "D", text: "approving, though it can seem odd to riders" }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "Which description best matches how the author organizes sentences 4-10 of the bunching article?",
          choices: [
            { letter: "A", text: "a step-by-step account of how one delay grows" },
            { letter: "B", text: "a comparison of buses in two different cities" },
            { letter: "C", text: "a list of complaints gathered from bus riders" },
            { letter: "D", text: "a history of how bus schedules were invented" }
          ],
          correct: "A"
        },
        {
          id: "truck",
          sol: "11.RI.2.B",
          stem: "The author mentions a stalled truck in sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "blame delivery drivers for most transit problems" },
            { letter: "B", text: "argue that cities should ban trucks from bus routes" },
            { letter: "C", text: "prove that bus drivers are rarely at fault" },
            { letter: "D", text: "show that an ordinary event can start the process" }
          ],
          correct: "D"
        },
        {
          id: "snowball",
          sol: "11.RI.2.C",
          stem: "In sentence 18, the phrase \"small delays to snowball\" helps the reader understand that delays —",
          choices: [
            { letter: "A", text: "are most common during winter weather" },
            { letter: "B", text: "grow larger as they build on themselves" },
            { letter: "C", text: "disappear once riders board the bus" },
            { letter: "D", text: "matter less than fares to most riders" }
          ],
          correct: "B"
        },
        {
          id: "absurd",
          sol: "11.RV.1.B",
          stem: "In sentence 17, the contrast signaled by but helps show that absurd most nearly means —",
          choices: [
            { letter: "A", text: "senseless" },
            { letter: "B", text: "dangerous" },
            { letter: "C", text: "generous" },
            { letter: "D", text: "expensive" }
          ],
          correct: "A"
        }
      ]
    },

    /* 6 · Vocabulary · pottery */
    {
      id: "g11-rv-c110-raku",
      family: "G11",
      title: "Fire, Smoke, and Chance",
      kind: "Vocabulary · 11.RV",
      blurb: "In raku firing, a glowing pot meets a can of burning sawdust, and the potter gives up half the control.",
      level: 2,
      passage:
        "<p>" + N(1) + "In most pottery studios, firing is a slow and private event. " +
        N(2) + "Pots go into an electric kiln at night, the door is sealed, and the potter learns the results the next afternoon, after the kiln has cooled for hours. " +
        N(3) + "Raku firing turns this process inside out. " +
        N(4) + "It is fast, loud, and public, and its results are famously <strong>unpredictable</strong>, which is exactly why so many potters love it.</p>" +
        "<p>" + N(5) + "The method begins like any other. " +
        N(6) + "A pot is shaped, dried, and given a first firing to harden it. " +
        N(7) + "Then it is coated with glaze and placed in a small kiln that is heated quickly to roughly 1,800 degrees Fahrenheit. " +
        N(8) + "When the glaze has melted into a glassy skin, the potter, wearing heavy gloves and a face shield, opens the kiln and lifts the glowing pot out with long metal tongs. " +
        N(9) + "The moment is <strong>precarious</strong>: the pot is fragile, the tongs are awkward, and a single slip can send a week of work crashing onto the concrete.</p>" +
        "<p>" + N(10) + "What happens next gives raku its character. " +
        N(11) + "The hot pot is lowered into a metal can filled with <strong>combustible</strong> material such as sawdust, dry leaves, or shredded newspaper. " +
        N(12) + "The material bursts into flame, and the potter clamps a lid on the can. " +
        N(13) + "Starved of oxygen, the fire begins pulling oxygen from the glaze and clay themselves, a reaction that can turn copper glazes red or metallic and blacken any surface left unglazed. " +
        N(14) + "Smoke also seeps into the fine cracks that form as the glaze cools, leaving a web of dark lines called crackle.</p>" +
        "<p>" + N(15) + "Potters can influence these effects, but they cannot fully control them. " +
        N(16) + "A potter may make a <strong>deliberate</strong> choice of glaze, timing, and material in the can, planning carefully for a certain result, and still open the lid to find something entirely different. " +
        N(17) + "One side of a pot may shine like a new coin while the other side turns the color of a storm cloud. " +
        N(18) + "Because the smoke and flame shift from second to second, no two raku pots are ever exactly alike.</p>" +
        "<p>" + N(19) + "The changes are also <strong>irreversible</strong>. " +
        N(20) + "A disappointing glaze on an ordinary pot can sometimes be fixed with a second firing, but the marks left by raku smoke are permanent, sealed into the clay. " +
        N(21) + "Raku pots are also more <strong>porous</strong> than pots fired at higher temperatures, so most are kept as decoration rather than used to hold food or water.</p>" +
        "<p>" + N(22) + "For many potters, these limits are part of the appeal. " +
        N(23) + "Raku asks them to do their careful work and then let go, accepting a partnership with fire in which they hold only half the decisions. " +
        N(24) + "The surprise when the lid comes off, they say, never grows old.</p>",
      claims: [
        {
          id: "unpredictable",
          sol: "11.RV.1.A",
          stem: "The word unpredictable (sentence 4) contains the prefix un- and the suffix -able. Together these word parts show that raku results —",
          choices: [
            { letter: "A", text: "cannot be known ahead of time" },
            { letter: "B", text: "are able to be repeated exactly" },
            { letter: "C", text: "were well known in the past" },
            { letter: "D", text: "should be measured once more" }
          ],
          correct: "A"
        },
        {
          id: "irreversible",
          sol: "11.RV.1.A",
          stem: "The word irreversible in sentence 19 begins with ir-, the same prefix found in irregular and irresponsible. In all three words, ir- means —",
          choices: [
            { letter: "A", text: "again" },
            { letter: "B", text: "very" },
            { letter: "C", text: "not" },
            { letter: "D", text: "toward" }
          ],
          correct: "C"
        },
        {
          id: "precarious",
          sol: "11.RV.1.B",
          stem: "Which detail from the raku passage best helps the reader understand the meaning of precarious in sentence 9?",
          choices: [
            { letter: "A", text: "a single slip can send a week of work crashing" },
            { letter: "B", text: "heated quickly to roughly 1,800 degrees" },
            { letter: "C", text: "given a first firing to harden it" },
            { letter: "D", text: "the door is sealed for the night" }
          ],
          correct: "A"
        },
        {
          id: "deliberate",
          sol: "11.RV.1.B",
          stem: "The words after deliberate in sentence 16 show that a deliberate choice is one that is —",
          choices: [
            { letter: "A", text: "made quickly without much thought" },
            { letter: "B", text: "made carefully and on purpose" },
            { letter: "C", text: "forced on the potter by others" },
            { letter: "D", text: "changed at the very last moment" }
          ],
          correct: "B"
        },
        {
          id: "combustible",
          sol: "11.RV.1.C",
          stem: "As used in sentence 11, combustible material is material that —",
          choices: [
            { letter: "A", text: "breaks easily into small pieces" },
            { letter: "B", text: "soaks up water very quickly" },
            { letter: "C", text: "keeps metal surfaces cool" },
            { letter: "D", text: "catches fire and burns easily" }
          ],
          correct: "D"
        },
        {
          id: "porous",
          sol: "11.RV.1.C",
          stem: "In sentence 21, describing raku pots as porous suggests that they —",
          choices: [
            { letter: "A", text: "are too heavy to lift with ease" },
            { letter: "B", text: "are sealed under a thick glaze" },
            { letter: "C", text: "let liquid seep through tiny gaps" },
            { letter: "D", text: "crack apart when they are touched" }
          ],
          correct: "C"
        },
        {
          id: "partnership",
          sol: "11.RI.2.B",
          stem: "In sentence 23, the author describes raku as \"a partnership with fire\" mainly to —",
          choices: [
            { letter: "A", text: "warn that raku is too dangerous for beginners" },
            { letter: "B", text: "show that potters share control of the result" },
            { letter: "C", text: "explain why raku kilns are kept outdoors" },
            { letter: "D", text: "suggest that potters work best in pairs" }
          ],
          correct: "B"
        },
        {
          id: "mainidea",
          sol: "11.RI.1.A",
          stem: "Which sentence best states the main idea of the passage about raku firing?",
          choices: [
            { letter: "A", text: "Sentence 2, about pots cooling overnight in an electric kiln" },
            { letter: "B", text: "Sentence 6, about shaping, drying, and hardening a pot" },
            { letter: "C", text: "Sentence 13, about the fire pulling oxygen from the glaze" },
            { letter: "D", text: "Sentence 4, about raku's unpredictable results drawing potters" }
          ],
          correct: "D"
        }
      ]
    },

    /* 7 · Vocabulary · sea turtles (story) */
    {
      id: "g11-rv-c110-nestpatrol",
      family: "G11",
      title: "Dawn Patrol",
      kind: "Vocabulary · 11.RV",
      blurb: "A volunteer who signed up for service hours learns to read the sand beside a man of very few words.",
      level: 3,
      passage:
        "<p>" + N(1) + "Noor Haddad had signed up for the dawn nest patrol because it counted as service hours, and she had expected to be bored. " +
        N(2) + "The flyer had promised \"meaningful work with sea turtles,\" but for the first two weeks the work consisted of walking four miles of beach at five in the morning behind Mr. Osei, a retired mail carrier who spoke perhaps ten words an hour and studied the sand as if it were a letter he was trying to read.</p>" +
        "<p>" + N(3) + "She was <strong>skeptical</strong> that there was anything to see. " +
        N(4) + "The tracks a nesting turtle leaves are <strong>inconspicuous</strong> to an untrained eye: two shallow lines of flipper marks, like a tractor tire pressed lightly into the sand, often half erased by wind before sunrise. " +
        N(5) + "Noor walked past three of them before Mr. Osei stopped, crouched, and pointed with one finger, the way a person points at a word on a page.</p>" +
        "<p>" + N(6) + "After that she began to see them everywhere, and also nowhere. " +
        N(7) + "Gulls made tracks. " +
        N(8) + "Kids with boogie boards made tracks. " +
        N(9) + "Mr. Osei was <strong>relentless</strong> about checking every one, walking each trail to its end even when Noor was sure it was nothing, and on the fourth morning she asked him, a little sharply, why he bothered. " +
        N(10) + "He considered the question for a long time. " +
        N(11) + "\"Because the one I skip,\" he said, \"is the one that was real.\"</p>" +
        "<p>" + N(12) + "In July they found a nest that a storm had half uncovered. " +
        N(13) + "The eggs, white and soft as ping-pong balls left in the sun, lay exposed at the bottom of a crater the waves had dug. " +
        N(14) + "Mr. Osei called the coordinator, and while they waited, he and Noor knelt on either side of the hole and held a tarp above it to keep the rising sun off. " +
        N(15) + "Her arms burned. " +
        N(16) + "She did not put them down. " +
        N(17) + "It seemed a strange thing to do, holding a sheet of plastic over a hole for forty minutes, but she had started to understand that most of the work was like that: small, stubborn, and invisible.</p>" +
        "<p>" + N(18) + "In September the nest hatched at night, and Noor was there. " +
        N(19) + "The hatchlings poured out of the sand in a rush, a dark, scrambling tide, and the volunteers stood in a line with red flashlights pointed low, keeping a <strong>vigil</strong> to make sure none turned toward the parking lot. " +
        N(20) + "Nobody cheered. " +
        N(21) + "It felt too <strong>solemn</strong> for cheering, like being present at something that would have happened whether or not you came, but that you would have been sorry to miss.</p>" +
        "<p>" + N(22) + "Afterward, walking back in the dark, Noor told Mr. Osei that she had stopped counting her hours somewhere in August. " +
        N(23) + "He nodded as though that were the most ordinary thing in the world. " +
        N(24) + "Then he stopped, crouched, and pointed at the sand, and she knelt beside him to read it.</p>",
      claims: [
        {
          id: "inconspicuous",
          sol: "11.RV.1.A",
          stem: "The word inconspicuous in sentence 4 joins the prefix in- to conspicuous, which means easy to see. Based on these parts, inconspicuous means —",
          choices: [
            { letter: "A", text: "clearly marked" },
            { letter: "B", text: "very large" },
            { letter: "C", text: "not easily noticed" },
            { letter: "D", text: "seen from far away" }
          ],
          correct: "C"
        },
        {
          id: "relentless",
          sol: "11.RV.1.A",
          stem: "The suffix -less in relentless (sentence 9), as in fearless and tireless, shows that Mr. Osei's checking is done —",
          choices: [
            { letter: "A", text: "without any letting up" },
            { letter: "B", text: "with a great deal of thought" },
            { letter: "C", text: "only now and then" },
            { letter: "D", text: "with some regret" }
          ],
          correct: "A"
        },
        {
          id: "skeptical",
          sol: "11.RV.1.B",
          stem: "Which detail from the dawn patrol story best helps the reader understand the meaning of skeptical in sentence 3?",
          choices: [
            { letter: "A", text: "she had expected to be bored" },
            { letter: "B", text: "studied the sand as if it were a letter" },
            { letter: "C", text: "the eggs, white and soft" },
            { letter: "D", text: "the volunteers stood in a line" }
          ],
          correct: "A"
        },
        {
          id: "vigil",
          sol: "11.RV.1.C",
          stem: "In sentence 19, the word vigil most nearly refers to —",
          choices: [
            { letter: "A", text: "a noisy, joyful celebration" },
            { letter: "B", text: "a period of careful watching" },
            { letter: "C", text: "a detailed written report" },
            { letter: "D", text: "a hurried search of the area" }
          ],
          correct: "B"
        },
        {
          id: "solemn",
          sol: "11.RL.2.C",
          stem: "In sentence 21, the word solemn suggests that the hatching felt —",
          choices: [
            { letter: "A", text: "frightening and dangerous" },
            { letter: "B", text: "dull and disappointing" },
            { letter: "C", text: "funny and lighthearted" },
            { letter: "D", text: "serious and worthy of respect" }
          ],
          correct: "D"
        },
        {
          id: "osei",
          sol: "11.RL.1.C",
          stem: "Mr. Osei's answer in sentence 11 reveals that he —",
          choices: [
            { letter: "A", text: "has grown tired of training new volunteers" },
            { letter: "B", text: "is unsure what nesting tracks look like" },
            { letter: "C", text: "treats every trail as if it might be real" },
            { letter: "D", text: "thinks Noor asks only out of curiosity" }
          ],
          correct: "C"
        },
        {
          id: "stubborn",
          sol: "11.RL.2.B",
          stem: "In sentence 17, Noor's description of the work as \"small, stubborn, and invisible\" creates a tone that is —",
          choices: [
            { letter: "A", text: "bitterly resentful" },
            { letter: "B", text: "quietly admiring" },
            { letter: "C", text: "nervously excited" },
            { letter: "D", text: "openly mocking" }
          ],
          correct: "B"
        },
        {
          id: "read",
          sol: "11.RL.1.B",
          stem: "The final sentence, in which Noor kneels beside Mr. Osei \"to read\" the sand, suggests that she —",
          choices: [
            { letter: "A", text: "still finds the patrol boring" },
            { letter: "B", text: "plans to lead her own patrol" },
            { letter: "C", text: "wants to become a mail carrier" },
            { letter: "D", text: "has taken on his patient way of looking" }
          ],
          correct: "D"
        }
      ]
    },

    /* 8 · Paired texts · theme park job */
    {
      id: "g11-dsr-c110-ridejob",
      family: "G11",
      title: "Now Hiring",
      kind: "Paired texts · 11.DSR",
      blurb: "A theme park's job posting, and a former ride attendant's account of what it left out.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Now Hiring: Seasonal Ride Attendants, Harbor Point Adventure Park</strong></p>" +
        "<p>" + N(1) + "Harbor Point Adventure Park is looking for friendly, energetic people to join our ride operations team for the summer season. " +
        N(2) + "Ride attendants are the face of the park: they greet guests, check safety restraints, operate ride controls, and keep lines moving smoothly. " +
        N(3) + "No experience is necessary, because every new hire completes a paid two-day training course before working a single shift. " +
        N(4) + "Attendants must be at least sixteen years old, able to stand for long periods, and comfortable working outdoors in all weather. " +
        N(5) + "Shifts are typically eight hours, with a thirty-minute meal break and two fifteen-minute rest breaks. " +
        N(6) + "Starting pay is $13.50 an hour, and attendants who complete the full season, through Labor Day, receive a $300 completion bonus. " +
        N(7) + "Other perks include free park admission for the employee and up to three guests on designated days, discounts on food and merchandise, and flexible scheduling for students. " +
        N(8) + "Above all, we want people who enjoy making a guest's day. " +
        N(9) + "Many of our supervisors started as ride attendants, and we are proud to promote from within. " +
        N(10) + "Apply online by May 1; interviews will be held on weekends in early May. " +
        N(11) + "Join us for the most exciting summer job in the county!</p>" +
        "<p><strong>Text 2 — What the Posting Didn't Say, by Marisol Quintero</strong></p>" +
        "<p>" + N(12) + "I worked as a ride attendant at Harbor Point for two summers, and the job posting is accurate as far as it goes. " +
        N(13) + "The training really is paid, the bonus really is $300, and the free admission really is a nice perk, though you will usually be too tired to use it. " +
        N(14) + "What the posting leaves out is the heat. " +
        N(15) + "Most of the rides sit on open asphalt, and by July the platforms can reach temperatures that make the handrails too hot to touch. " +
        N(16) + "\"Comfortable working outdoors in all weather\" is a cheerful way of describing nine straight days above ninety degrees. " +
        N(17) + "The posting also doesn't mention that \"flexible scheduling\" works both ways: you can request days off, but the park can also call you in on four hours' notice when someone quits, and people quit a lot. " +
        N(18) + "Of the twenty-two attendants who started with me in my first year, eleven made it to Labor Day. " +
        N(19) + "I'm not telling you this to scare anyone off. " +
        N(20) + "I'd do it again, and some of my favorite people are friends from the Tilt-a-Whirl platform. " +
        N(21) + "The guests are mostly wonderful, and there's nothing like the moment a nervous kid steps off a ride grinning. " +
        N(22) + "But go in knowing the bonus is a reward for surviving, not a formality. " +
        N(23) + "Bring a refillable water bottle, buy good shoes, and don't believe anyone who calls it easy.</p>",
      claims: [
        {
          id: "bothfact",
          sol: "11.DSR.D",
          stem: "Which fact appears in both the Harbor Point posting and Marisol Quintero's post?",
          choices: [
            { letter: "A", text: "Half the attendants quit before Labor Day." },
            { letter: "B", text: "Workers who finish the season earn a $300 bonus." },
            { letter: "C", text: "Ride platforms get too hot to touch by July." },
            { letter: "D", text: "Interviews are held on weekends in early May." }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          stem: "Which statement best describes how the two Harbor Point texts differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 recruits applicants; Text 2 prepares them for hardships." },
            { letter: "B", text: "Text 1 warns of dangers; Text 2 promotes the park's rides." },
            { letter: "C", text: "Text 1 lists the rides; Text 2 ranks them by excitement." },
            { letter: "D", text: "Text 1 explains training; Text 2 argues it is too short." }
          ],
          correct: "A"
        },
        {
          id: "flexible",
          sol: "11.DSR.E",
          stem: "How does Quintero reinterpret the posting's promise of \"flexible scheduling\" from sentence 7?",
          choices: [
            { letter: "A", text: "as a promise the park never keeps at all" },
            { letter: "B", text: "as a benefit that only supervisors receive" },
            { letter: "C", text: "as a policy that also lets the park call workers in" },
            { letter: "D", text: "as the main reason most students apply" }
          ],
          correct: "C"
        },
        {
          id: "conditions",
          sol: "11.DSR.E",
          stem: "Select TWO sentences from Text 2 that respond directly to the description of working conditions in sentence 4 of the posting.",
          choices: [
            { letter: "A", text: "Sentence 15" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 21" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "eleven",
          sol: "11.RI.1.B",
          stem: "According to Text 2, what happened to the group of attendants who started with Quintero in her first year?",
          choices: [
            { letter: "A", text: "Most of them were promoted to supervisor." },
            { letter: "B", text: "Only half of them stayed through Labor Day." },
            { letter: "C", text: "All of them received the completion bonus." },
            { letter: "D", text: "Several were hurt on the hot platforms." }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "11.RI.1.C",
          stem: "The closing line of the posting (sentence 11) reveals the park's attitude toward the job as —",
          choices: [
            { letter: "A", text: "cautious and formal" },
            { letter: "B", text: "bitter and sarcastic" },
            { letter: "C", text: "neutral and technical" },
            { letter: "D", text: "eager and promotional" }
          ],
          correct: "D"
        },
        {
          id: "bonus",
          sol: "11.DSR.E",
          stem: "A student who read both texts could best conclude that the $300 completion bonus —",
          choices: [
            { letter: "A", text: "is paid to every worker after training" },
            { letter: "B", text: "is smaller than the posting suggests" },
            { letter: "C", text: "is meant to keep workers through a hard season" },
            { letter: "D", text: "is offered only to experienced employees" }
          ],
          correct: "C"
        },
        {
          id: "shared",
          sol: "11.DSR.D",
          stem: "Which idea about the ride attendant job do both writers support?",
          choices: [
            { letter: "A", text: "Making guests happy is a rewarding part of it." },
            { letter: "B", text: "Students should not apply for it at all." },
            { letter: "C", text: "Its training course is unpaid and rushed." },
            { letter: "D", text: "Its supervisors are usually hired from outside." }
          ],
          correct: "A"
        }
      ]
    },

    /* 9 · Paired texts · city bus route */
    {
      id: "g11-dsr-c110-route22",
      family: "G11",
      title: "Six Percent",
      kind: "Paired texts · 11.DSR",
      blurb: "Transit board minutes on cutting a bus loop, and a student rider's letter about who the cut would strand.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Minutes, Riverton Regional Transit Board, Regular Meeting, February 9</strong></p>" +
        "<p>" + N(1) + "Board Chair Adaeze Nwosu called the meeting to order at 6:02 p.m., with six of seven members present. " +
        N(2) + "Planning Director Henrik Solberg presented the proposed redesign of Route 22. " +
        N(3) + "Under the proposal, the route would no longer make its loop through the Elm Street neighborhood, which adds eleven minutes to each trip. " +
        N(4) + "Staff data show that the loop's four stops account for about six percent of Route 22's weekday boardings. " +
        N(5) + "Removing the loop would allow buses to run every fifteen minutes instead of every twenty on the rest of the line, a change staff estimate would benefit roughly 3,400 daily riders. " +
        N(6) + "Elm Street riders would be directed to stops on Grand Avenue, between a quarter mile and a half mile away. " +
        N(7) + "Member Okonkwo asked whether staff had studied who uses the Elm Street stops. " +
        N(8) + "Mr. Solberg said that a rider survey is planned for the spring but has not yet been conducted. " +
        N(9) + "Member Ibarra noted that the Elm Street loop serves the Fairhaven Senior Apartments and a dialysis clinic. " +
        N(10) + "Mr. Solberg responded that riders with disabilities remain eligible for door-to-door paratransit service. " +
        N(11) + "After discussion, the board voted 4-2 to schedule a public hearing on the proposal for March 15. " +
        N(12) + "No final decision was made. " +
        N(13) + "The meeting adjourned at 7:41 p.m.</p>" +
        "<p><strong>Text 2 — Six Percent of What? A letter to the Riverton Courier from Tobias Mwangi, Grade 11</strong></p>" +
        "<p>" + N(14) + "When the transit board talks about the Elm Street loop, it talks in percentages. " +
        N(15) + "Six percent of riders. " +
        N(16) + "Eleven minutes per trip. " +
        N(17) + "Fifteen minutes instead of twenty. " +
        N(18) + "Those numbers are real, and I understand why they are tempting. " +
        N(19) + "But I ride Route 22 to school every day, and I can tell you who the six percent are. " +
        N(20) + "They are Mrs. Delacroix, who uses a walker and cannot manage a half mile on an icy sidewalk. " +
        N(21) + "They are the people heading to the dialysis clinic three mornings a week, who are often too exhausted afterward to walk anywhere. " +
        N(22) + "They are the kids from the apartments on Linden Court who would have to cross Grand Avenue, four lanes wide, to catch a bus. " +
        N(23) + "The board says paratransit is an option, but paratransit must be booked a day ahead, and anyone who has used it knows how often the van runs late. " +
        N(24) + "I'm not arguing that faster service for everyone else doesn't matter. " +
        N(25) + "I'm arguing that the board voted to move forward before even asking Elm Street riders how they would be affected. " +
        N(26) + "A survey \"planned for the spring\" should come before a hearing, not after it. " +
        N(27) + "Six percent of riders is still a number of people, and every one of them has a name.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          stem: "Which idea about the Route 22 proposal is supported by both texts?",
          choices: [
            { letter: "A", text: "The board has already given the change final approval." },
            { letter: "B", text: "Paratransit fully meets the needs of Elm Street riders." },
            { letter: "C", text: "Dropping the loop would speed service for other riders." },
            { letter: "D", text: "Elm Street riders were surveyed before the meeting." }
          ],
          correct: "C"
        },
        {
          id: "survey",
          sol: "11.DSR.D",
          stem: "Which detail from the minutes does Mwangi use to argue that the board moved forward too soon?",
          choices: [
            { letter: "A", text: "The rider survey had not yet been conducted (sentence 8)." },
            { letter: "B", text: "The meeting was called to order at 6:02 p.m. (sentence 1)." },
            { letter: "C", text: "The loop adds eleven minutes to each trip (sentence 3)." },
            { letter: "D", text: "The meeting adjourned at 7:41 p.m. (sentence 13)." }
          ],
          correct: "A"
        },
        {
          id: "sixpercent",
          sol: "11.DSR.E",
          stem: "The minutes report the figure of six percent in sentence 4 as plain data. Mwangi presents the same figure as —",
          choices: [
            { letter: "A", text: "a mistake in the staff's own calculations" },
            { letter: "B", text: "a statistic that hides people with real needs" },
            { letter: "C", text: "proof that the loop should be made longer" },
            { letter: "D", text: "a number the board refused to make public" }
          ],
          correct: "B"
        },
        {
          id: "grandave",
          sol: "11.DSR.E",
          stem: "Select TWO sentences from Text 2 that challenge the plan in sentence 6 to send Elm Street riders to stops on Grand Avenue.",
          choices: [
            { letter: "A", text: "Sentence 18" },
            { letter: "B", text: "Sentence 20" },
            { letter: "C", text: "Sentence 26" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "boardmember",
          sol: "11.DSR.E",
          stem: "A transit board member who read both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the spring survey may reveal effects the staff data miss" },
            { letter: "B", text: "the route change should be approved without a hearing" },
            { letter: "C", text: "Mwangi rejects faster service for all other riders" },
            { letter: "D", text: "the Elm Street stops are almost never used by anyone" }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "Which statement best describes how the Route 22 minutes and Mwangi's letter differ?",
          choices: [
            { letter: "A", text: "The minutes oppose the change; the letter supports it." },
            { letter: "B", text: "The minutes rely on stories; the letter relies on data." },
            { letter: "C", text: "The minutes describe the hearing; the letter predicts it." },
            { letter: "D", text: "The minutes record events neutrally; the letter argues." }
          ],
          correct: "D"
        },
        {
          id: "name",
          sol: "11.RI.2.C",
          stem: "In sentence 27, Mwangi's claim that every one of the six percent \"has a name\" mainly functions to —",
          choices: [
            { letter: "A", text: "list the riders who spoke at the board meeting" },
            { letter: "B", text: "suggest that the board misspelled riders' names" },
            { letter: "C", text: "stress that the statistic describes real people" },
            { letter: "D", text: "show that he personally knows every rider" }
          ],
          correct: "C"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "How does Mwangi organize sentences 19-22 of his letter?",
          choices: [
            { letter: "A", text: "by comparing Route 22 with the city's other routes" },
            { letter: "B", text: "by naming groups of affected riders one after another" },
            { letter: "C", text: "by describing the board meeting in time order" },
            { letter: "D", text: "by stating an opposing view and then rejecting it" }
          ],
          correct: "B"
        }
      ]
    },

    /* 10 · Poetry · pottery */
    {
      id: "g11-rl-c110-centering",
      family: "G11",
      title: "Centering",
      kind: "Poetry · 11.RL",
      blurb: "A grandmother's hands show a young potter that steadying the clay is not a fight.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My grandmother says the clay will tell me<br>" +
        L(2) + "when it is ready, but the clay says nothing,<br>" +
        L(3) + "only wobbles on the wheel like a top<br>" +
        L(4) + "that cannot decide which way to fall.<br>" +
        L(5) + "I press harder. It wobbles harder.<br>" +
        L(6) + "I press harder still, and the whole lump<br>" +
        L(7) + "lurches sideways, a sulking animal<br>" +
        L(8) + "that will not come when it is called.<br><br>" +
        L(9) + "She does not take the clay from me.<br>" +
        L(10) + "She puts her hands over my hands,<br>" +
        L(11) + "her knuckles dry as river stones,<br>" +
        L(12) + "and leans, not down, but in,<br>" +
        L(13) + "a slow and patient pressure<br>" +
        L(14) + "like the tide against a sandbar.<br>" +
        L(15) + "Under our four hands the clay<br>" +
        L(16) + "begins to hum instead of shake.<br><br>" +
        L(17) + "Centering, she says, is not a fight.<br>" +
        L(18) + "You do not win against the clay.<br>" +
        L(19) + "You hold still until it holds still,<br>" +
        L(20) + "and then the two of you are one thing turning.<br>" +
        L(21) + "I want to ask her how she knows,<br>" +
        L(22) + "but the wheel is turning, smooth as water,<br>" +
        L(23) + "and the clay is rising in a column,<br>" +
        L(24) + "and her hands are already lifting away,<br>" +
        L(25) + "leaving mine to hold the quiet<br>" +
        L(26) + "she has left there, still turning." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme of the poem \"Centering\"?",
          choices: [
            { letter: "A", text: "Young people should not attempt difficult crafts." },
            { letter: "B", text: "Patience and steadiness can succeed where force fails." },
            { letter: "C", text: "Older people rarely share what they have learned." },
            { letter: "D", text: "Hard work always produces a beautiful result." }
          ],
          correct: "B"
        },
        {
          id: "lifting",
          sol: "11.RL.1.B",
          stem: "What can the reader infer from lines 24-26, when the grandmother's hands lift away from the clay?",
          choices: [
            { letter: "A", text: "She has grown tired of teaching the speaker." },
            { letter: "B", text: "She disapproves of the speaker's clumsy work." },
            { letter: "C", text: "She wants to begin making her own pot instead." },
            { letter: "D", text: "She trusts the speaker to keep the clay steady." }
          ],
          correct: "D"
        },
        {
          id: "top",
          sol: "11.RL.2.A",
          stem: "In lines 3 and 4, comparing the clay to a top that \"cannot decide which way to fall\" mainly shows that the clay is —",
          choices: [
            { letter: "A", text: "unsteady and about to tip" },
            { letter: "B", text: "brightly painted and shiny" },
            { letter: "C", text: "spinning far too slowly" },
            { letter: "D", text: "small and very light" }
          ],
          correct: "A"
        },
        {
          id: "tide",
          sol: "11.RL.2.A",
          stem: "The simile in lines 13 and 14 comparing the grandmother's pressure to \"the tide against a sandbar\" suggests that her pressure is —",
          choices: [
            { letter: "A", text: "sudden and forceful" },
            { letter: "B", text: "cold and unfriendly" },
            { letter: "C", text: "gentle but constant" },
            { letter: "D", text: "weak and uncertain" }
          ],
          correct: "C"
        },
        {
          id: "hum",
          sol: "11.RL.2.B",
          stem: "In line 16, the clay \"begins to hum instead of shake.\" This personification mainly shows that the clay has —",
          choices: [
            { letter: "A", text: "become calm and steady" },
            { letter: "B", text: "started to crack apart" },
            { letter: "C", text: "made a sudden loud noise" },
            { letter: "D", text: "stopped turning entirely" }
          ],
          correct: "A"
        },
        {
          id: "sulking",
          sol: "11.RL.2.C",
          stem: "In line 7, the word sulking suggests that the clay seems —",
          choices: [
            { letter: "A", text: "sleepy and slow" },
            { letter: "B", text: "playful and quick" },
            { letter: "C", text: "frightened and hiding" },
            { letter: "D", text: "stubborn and uncooperative" }
          ],
          correct: "D"
        },
        {
          id: "stanzas",
          sol: "11.RL.3.A",
          stem: "How does the third stanza of \"Centering\" (lines 17-26) differ from the first stanza (lines 1-8)?",
          choices: [
            { letter: "A", text: "The first is joyful, while the third is sad and full of loss." },
            { letter: "B", text: "The first shows a struggle, while the third shows calm control." },
            { letter: "C", text: "The first takes place at night, while the third is set at dawn." },
            { letter: "D", text: "The first is spoken by the grandmother; the third by the speaker." }
          ],
          correct: "B"
        },
        {
          id: "approach",
          sol: "11.RL.1.C",
          stem: "Which line best shows the speaker's first approach to the clay on the wheel?",
          choices: [
            { letter: "A", text: "Line 10: She puts her hands over my hands," },
            { letter: "B", text: "Line 21: I want to ask her how she knows," },
            { letter: "C", text: "Line 5: I press harder. It wobbles harder." },
            { letter: "D", text: "Line 25: leaving mine to hold the quiet" }
          ],
          correct: "C"
        }
      ]
    },

    /* 11 · Drama · theme park job */
    {
      id: "g11-rl-c110-lastcarousel",
      family: "G11",
      title: "The Last Ride",
      kind: "Drama · 11.RL",
      blurb: "On a carousel's final night, a veteran operator and a new hire disagree about when the last ride is over.",
      level: 3,
      passage:
        "<p><em>" + N(1) + "The Moonlight Carousel at Fairweather Pier, ten minutes after closing on its last night of operation. " +
        N(2) + "Strings of bulbs still glow along the canopy. " +
        N(3) + "ROSA, an operator in her sixties, wipes down a painted horse with a soft rag. " +
        N(4) + "DEVIN, seventeen, enters with a clipboard.</em></p>" +
        "<p>" + N(5) + "<strong>DEVIN</strong>: Maintenance says the crane comes at six tomorrow. " +
        N(6) + "They need every horse tagged and numbered tonight so the museum knows which is which. " +
        N(7) + "<strong>ROSA</strong>: Forty-two horses, two chariots, one lion. " +
        N(8) + "I could tag them in my sleep. " +
        N(9) + "<strong>DEVIN</strong> <em>(glancing at the dark lot beyond the gate)</em>: Have you seen the drawings for the Vortex? " +
        N(10) + "Two hundred feet tall, a full loop, a launch from zero to sixty in three seconds. " +
        N(11) + "People are going to drive here from three states away. " +
        N(12) + "<strong>ROSA</strong> <em>(patting the horse)</em>: People used to drive here for this. " +
        N(13) + "<strong>DEVIN</strong>: Sure, back in the old days. " +
        N(14) + "<strong>ROSA</strong> <em>(mildly)</em>: The old days were Tuesday, Devin. " +
        N(15) + "A woman brought her mother here on Tuesday for her ninetieth birthday. " +
        N(16) + "Her mother rode the lion. " +
        N(17) + "Same lion she rode when she was six. " +
        N(18) + "<strong>DEVIN</strong> <em>(checking the clipboard, uncomfortable)</em>: I didn't mean it like that.</p>" +
        "<p><em>" + N(19) + "An older man, MR. TANAKA, appears at the gate holding the hand of HANA, about five.</em> " +
        N(20) + "<strong>MR. TANAKA</strong>: I'm sorry. " +
        N(21) + "I know you're closed. " +
        N(22) + "We drove in from the city, and the traffic was terrible. " +
        N(23) + "I wanted her to ride it once before it's gone. " +
        N(24) + "<strong>DEVIN</strong> <em>(automatically)</em>: Sir, we closed at ten. " +
        N(25) + "I can't run it after closing. " +
        N(26) + "<strong>ROSA</strong> <em>(setting down the rag)</em>: Devin, what does the rule book say about the final ride of the night? " +
        N(27) + "<strong>DEVIN</strong>: That it ends at ten. " +
        N(28) + "<strong>ROSA</strong>: It says the operator decides when the last ride is over. " +
        N(29) + "<em>(She opens the gate.)</em> And I haven't decided.</p>" +
        "<p><em>" + N(30) + "HANA climbs onto the lion, and MR. TANAKA stands beside her with one hand on her back; ROSA nods to DEVIN, who hesitates, then steps into the control booth as the music starts and the carousel turns.</em> " +
        N(31) + "<strong>DEVIN</strong> <em>(quietly, watching)</em>: He's not even riding. " +
        N(32) + "He's just walking next to her. " +
        N(33) + "<strong>ROSA</strong>: He rode it when he was her age. " +
        N(34) + "He's riding it now. " +
        N(35) + "You just can't see it from the booth.</p>" +
        "<p><em>" + N(36) + "The music winds down; HANA slides off, beaming, and MR. TANAKA bows slightly to ROSA before they leave.</em> " +
        N(37) + "<strong>DEVIN</strong> <em>(after a moment, setting down the clipboard)</em>: Rosa? " +
        N(38) + "Which horse do I tag first? " +
        N(39) + "<strong>ROSA</strong>: Start with the lion. " +
        N(40) + "Write down that it was ridden on its last night. " +
        N(41) + "The museum will want to know. " +
        N(42) + "<em>(Lights fade on the turning canopy.)</em></p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the scene at the Moonlight Carousel most clearly develop?",
          choices: [
            { letter: "A", text: "New attractions are always better than old ones." },
            { letter: "B", text: "Rules exist to be broken whenever they seem unfair." },
            { letter: "C", text: "Young workers should never question older coworkers." },
            { letter: "D", text: "Places gain meaning from the memories people bring." }
          ],
          correct: "D"
        },
        {
          id: "except",
          sol: "11.RL.1.A",
          stem: "All of the following details support the idea that the carousel matters deeply to its visitors EXCEPT —",
          choices: [
            { letter: "A", text: "the crane arriving at six the next morning" },
            { letter: "B", text: "the ninety-year-old woman riding the lion" },
            { letter: "C", text: "Mr. Tanaka driving in from the city at night" },
            { letter: "D", text: "Mr. Tanaka walking beside Hana as she rides" }
          ],
          correct: "A"
        },
        {
          id: "tuesday",
          sol: "11.RL.1.B",
          stem: "Rosa's reply in sentence 14, \"The old days were Tuesday,\" implies that —",
          choices: [
            { letter: "A", text: "Rosa has lost track of the days of the week" },
            { letter: "B", text: "the carousel still matters to people right now" },
            { letter: "C", text: "the carousel was always busiest on Tuesdays" },
            { letter: "D", text: "Devin forgot that he worked a Tuesday shift" }
          ],
          correct: "B"
        },
        {
          id: "devin",
          sol: "11.RL.1.C",
          stem: "Devin's question in sentence 38, \"Which horse do I tag first?\", shows that he —",
          choices: [
            { letter: "A", text: "wants to finish quickly and go home" },
            { letter: "B", text: "still does not understand Rosa's point" },
            { letter: "C", text: "now treats the task with care, not as a chore" },
            { letter: "D", text: "has decided to quit his job at the pier" }
          ],
          correct: "C"
        },
        {
          id: "ridingnow",
          sol: "11.RL.2.A",
          stem: "When Rosa says in sentence 34 that Mr. Tanaka is \"riding it now,\" she mainly suggests that he is —",
          choices: [
            { letter: "A", text: "reliving his own childhood through Hana's ride" },
            { letter: "B", text: "secretly climbing onto one of the horses" },
            { letter: "C", text: "hoping to operate the ride by himself" },
            { letter: "D", text: "confused about where he is standing" }
          ],
          correct: "A"
        },
        {
          id: "automatically",
          sol: "11.RL.2.C",
          stem: "In sentence 24, the stage direction automatically suggests that Devin's response is —",
          choices: [
            { letter: "A", text: "rude and openly angry" },
            { letter: "B", text: "a careful, reasoned choice" },
            { letter: "C", text: "a joke to cheer the guests" },
            { letter: "D", text: "a habit, given without thought" }
          ],
          correct: "D"
        },
        {
          id: "silence",
          sol: "11.RL.3.A",
          stem: "The stage directions in sentences 30 and 36 mainly serve to —",
          choices: [
            { letter: "A", text: "explain how a carousel is operated safely" },
            { letter: "B", text: "let the final ride unfold without dialogue" },
            { letter: "C", text: "reveal that Devin refuses to help Rosa" },
            { letter: "D", text: "start a new conflict between two guests" }
          ],
          correct: "B"
        },
        {
          id: "rulebook",
          sol: "11.RL.3.A",
          stem: "How does Rosa's reading of the rule book in sentence 28 shape the outcome of the scene?",
          choices: [
            { letter: "A", text: "It ends the conflict by enforcing closing time." },
            { letter: "B", text: "It causes Mr. Tanaka to leave in frustration." },
            { letter: "C", text: "It allows the last ride and changes Devin's view." },
            { letter: "D", text: "It shows that Rosa expects to lose her job." }
          ],
          correct: "C"
        }
      ]
    },

    /* 12 · Functional text · city bus route */
    {
      id: "g11-ri-c110-route9x",
      family: "G11",
      title: "Riding the 9X",
      kind: "Functional text · 11.RI",
      blurb: "A transit agency's guide to its crosstown express: schedules, fares, boarding, bikes, and detours.",
      level: 1,
      passage:
        "<p><strong>Welcome Aboard: A Guide to the Route 9X Crosstown Express</strong></p>" +
        "<p>" + N(1) + "Cedar Valley Transit's Route 9X connects the Northgate Park-and-Ride lot with Cedar Valley Community College, the Medical District, and the Riverside Transit Center. " +
        N(2) + "Unlike local routes, the 9X makes only six stops, so it can cover the eleven-mile trip in about thirty-five minutes. " +
        N(3) + "This guide explains how to pay, where to board, and what to do if your plans change.</p>" +
        "<p><strong>Schedule</strong> " + N(4) + "On weekdays, the 9X runs every twelve minutes from 6:00 a.m. to 9:00 a.m. and from 3:30 p.m. to 6:30 p.m. " +
        N(5) + "At all other times, buses run every thirty minutes. " +
        N(6) + "On Saturdays, service runs every thirty minutes from 7:00 a.m. to 8:00 p.m., and there is no Sunday service. " +
        N(7) + "Real-time arrival information is posted on screens at every 9X stop and in the CVT mobile app.</p>" +
        "<p><strong>Paying Your Fare</strong> " + N(8) + "The standard 9X fare is $2.50, fifty cents more than a local route, because express buses travel farther with fewer stops. " +
        N(9) + "Students with a valid school ID and riders sixty-five or older pay $1.25. " +
        N(10) + "Riders may pay with exact cash, a CVT tap card, or the mobile app; drivers cannot make change. " +
        N(11) + "A fare paid with a tap card or the app includes a free transfer to any local route within ninety minutes, but cash fares do not include transfers.</p>" +
        "<p><strong>Boarding</strong> " + N(12) + "At the Northgate and Riverside stops, riders who have already paid with a tap card or the app may board through the rear door. " +
        N(13) + "Riders paying cash must board at the front door at every stop. " +
        N(14) + "Please have your fare ready before the bus arrives; express service depends on short stops.</p>" +
        "<p><strong>Bikes and Accessibility</strong> " + N(15) + "Every 9X bus has a front rack that holds two bicycles. " +
        N(16) + "If the rack is full, you will need to wait for the next bus. " +
        N(17) + "All buses kneel to curb level and have ramps for wheelchairs and other mobility devices, and the two front seats are reserved for riders who need them.</p>" +
        "<p><strong>Service Changes</strong> " + N(18) + "Weather and road construction occasionally force detours. " +
        N(19) + "Whenever possible, detour notices are posted at affected stops at least forty-eight hours in advance, and they appear immediately in the app. " +
        N(20) + "If you have a question or wish to report a problem, call Rider Services at 555-0142, Monday through Saturday, 7:00 a.m. to 7:00 p.m.</p>" +
        "<p><strong>A Note for First-Time Riders</strong> " + N(21) + "The 9X is popular, and buses can be crowded during rush hour. " +
        N(22) + "If you are new to the route, consider making your first trip in the middle of the day, when buses are quieter and drivers have more time to answer questions.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          stem: "What is the main purpose of the Route 9X guide?",
          choices: [
            { letter: "A", text: "to explain how riders can use the express route" },
            { letter: "B", text: "to persuade the city to add Sunday bus service" },
            { letter: "C", text: "to compare express fares in several cities" },
            { letter: "D", text: "to announce that the express route will close" }
          ],
          correct: "A"
        },
        {
          id: "transfer",
          sol: "11.RI.1.B",
          stem: "According to the guide, which 9X rider would receive a free transfer to a local route?",
          choices: [
            { letter: "A", text: "a rider who pays $2.50 in exact cash" },
            { letter: "B", text: "a rider who boards the 9X on a Sunday" },
            { letter: "C", text: "a student who pays with the mobile app" },
            { letter: "D", text: "a rider who transfers after two hours" }
          ],
          correct: "C"
        },
        {
          id: "wednesday",
          sol: "11.RI.1.B",
          stem: "Based on the guide, a rider waiting for the 9X at 4:00 p.m. on a Wednesday should expect a bus about every —",
          choices: [
            { letter: "A", text: "six minutes" },
            { letter: "B", text: "twelve minutes" },
            { letter: "C", text: "thirty minutes" },
            { letter: "D", text: "ninety minutes" }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "11.RI.1.C",
          stem: "The intended audience for the Route 9X guide is mainly —",
          choices: [
            { letter: "A", text: "drivers training to operate express buses" },
            { letter: "B", text: "city officials deciding on a transit budget" },
            { letter: "C", text: "college teachers planning their class times" },
            { letter: "D", text: "people learning to ride the express route" }
          ],
          correct: "D"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          stem: "The bold headings in the Route 9X guide mainly help a reader by —",
          choices: [
            { letter: "A", text: "showing the order of the stops on the route" },
            { letter: "B", text: "grouping the details by topic for quick lookup" },
            { letter: "C", text: "listing the rules in order of their importance" },
            { letter: "D", text: "giving a short history of the express route" }
          ],
          correct: "B"
        },
        {
          id: "farepart",
          sol: "11.RI.2.A",
          stem: "The section titled Paying Your Fare (sentences 8-11) is organized mainly by —",
          choices: [
            { letter: "A", text: "describing problems and then their solutions" },
            { letter: "B", text: "comparing the 9X with buses in other cities" },
            { letter: "C", text: "moving from the basic fare to discounts and rules" },
            { letter: "D", text: "telling the story of one rider's first trip" }
          ],
          correct: "C"
        },
        {
          id: "fiftycents",
          sol: "11.RI.2.B",
          stem: "The guide explains in sentence 8 why the 9X costs fifty cents more mainly to —",
          choices: [
            { letter: "A", text: "warn riders that fares will soon rise again" },
            { letter: "B", text: "encourage riders to choose local routes instead" },
            { letter: "C", text: "show that each driver sets his or her own price" },
            { letter: "D", text: "link the higher fare to longer, faster trips" }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "11.RI.2.C",
          stem: "Which sentence makes clear that a 9X rider paying with a $5 bill should not expect change from the driver?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "A"
        }
      ]
    },

    /* 13 · Argument · sea turtles */
    {
      id: "g11-ri-c110-darkbeach",
      family: "G11",
      title: "Keep the Turtle on the Beach",
      kind: "Argument · 11.RI",
      blurb: "A student editorial urges a beach town to shield its lights so hatchlings can find the sea.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every summer, the town of Pelican Shores spends thousands of dollars celebrating its sea turtles. " +
        N(2) + "Their image is painted on the water tower, printed on the welcome sign, and molded into the handles of the souvenir mugs sold on Dune Street. " +
        N(3) + "Yet every summer, the same town quietly kills hundreds of them, not with nets or boats, but with porch lights. " +
        N(4) + "The town council should pass the proposed Dark Beach Ordinance, which would require beachfront properties to shield or dim outdoor lighting from May through October.</p>" +
        "<p>" + N(5) + "The problem is simple. " +
        N(6) + "Hatchling sea turtles find the ocean by crawling toward the brightest horizon, which on an undeveloped beach is the moonlit water. " +
        N(7) + "On our beach, the brightest horizon is often a hotel parking lot. " +
        N(8) + "Last season, volunteers with the Pelican Shores Turtle Watch documented 41 nests in which some or all of the hatchlings crawled inland instead of toward the sea. " +
        N(9) + "Volunteers rescued many of them, but they cannot patrol every yard of sand every night, and a hatchling that wanders onto a road rarely survives until morning.</p>" +
        "<p>" + N(10) + "Opponents of the ordinance raise two concerns, and both deserve a serious answer. " +
        N(11) + "First, some residents worry that darker beachfronts will be less safe at night. " +
        N(12) + "But the ordinance does not ban lighting; it requires lights to be shielded so they point down at walkways rather than out at the water, and to use amber bulbs, which turtles are far less likely to follow. " +
        N(13) + "Pathways would still be lit. " +
        N(14) + "Only the glare spilling onto the beach would disappear. " +
        N(15) + "Second, some business owners fear the cost of new fixtures. " +
        N(16) + "That concern is fair, which is why the ordinance includes a grant program covering up to half the cost for small businesses, and why it gives property owners two full years to comply.</p>" +
        "<p>" + N(17) + "There is also a simple matter of consistency. " +
        N(18) + "A town that sells turtle mugs and turtle T-shirts and advertises turtle-watching tours is making money from these animals. " +
        N(19) + "It owes them, at the very least, a beach they can survive. " +
        N(20) + "Nearby beach towns that adopted similar rules have seen the share of disoriented nests drop sharply within a few seasons, and none of them, as far as anyone can tell, has lost its tourists.</p>" +
        "<p>" + N(21) + "Protecting hatchlings will not require us to sit in the dark. " +
        N(22) + "It will require us to point our lights where we actually need them. " +
        N(23) + "The council votes on June 12, and residents can speak during the public comment period. " +
        N(24) + "If Pelican Shores wants to keep the turtle on its water tower, it should start by keeping the turtle on its beach.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.A",
          stem: "Which sentence best states the central claim of the Pelican Shores editorial?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "B"
        },
        {
          id: "summary",
          sol: "11.RI.1.A",
          stem: "Which of the following best summarizes the argument for the Dark Beach Ordinance?",
          choices: [
            { letter: "A", text: "Volunteers alone can save hatchlings if the town hires more." },
            { letter: "B", text: "Shops should stop selling turtle souvenirs on Dune Street." },
            { letter: "C", text: "All beachfront lights should be banned during nesting season." },
            { letter: "D", text: "Shielded lights would save hatchlings at a fair cost to owners." }
          ],
          correct: "D"
        },
        {
          id: "owners",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward the business owners' concern in sentence 15 is best described as —",
          choices: [
            { letter: "A", text: "respectful, while showing the plan addresses it" },
            { letter: "B", text: "dismissive, treating the concern as selfish" },
            { letter: "C", text: "sympathetic, agreeing the vote should wait" },
            { letter: "D", text: "puzzled, unsure what the owners really want" }
          ],
          correct: "A"
        },
        {
          id: "loose",
          sol: "11.RI.1.C",
          stem: "Which claim in the Pelican Shores editorial rests on the weakest, least specific support?",
          choices: [
            { letter: "A", text: "Volunteers documented 41 nests gone astray (sentence 8)." },
            { letter: "B", text: "Owners would get two years to comply (sentence 16)." },
            { letter: "C", text: "Nearby towns have not lost tourists (sentence 20)." },
            { letter: "D", text: "Turtles appear on the town water tower (sentence 2)." }
          ],
          correct: "C"
        },
        {
          id: "opening",
          sol: "11.RI.2.B",
          stem: "The author opens with the water tower, welcome sign, and souvenir mugs (sentences 1 and 2) mainly to —",
          choices: [
            { letter: "A", text: "describe the shops on Dune Street for tourists" },
            { letter: "B", text: "contrast the town's praise of turtles with its harm" },
            { letter: "C", text: "prove the town spends too much on souvenirs" },
            { letter: "D", text: "show that turtles are the town's best product" }
          ],
          correct: "B"
        },
        {
          id: "objections",
          sol: "11.RI.2.B",
          stem: "In the editorial on beach lighting, sentences 10-16 serve mainly to —",
          choices: [
            { letter: "A", text: "describe how hatchlings find the water" },
            { letter: "B", text: "list the prices of new light fixtures" },
            { letter: "C", text: "explain how volunteers patrol the sand" },
            { letter: "D", text: "answer objections to the ordinance" }
          ],
          correct: "D"
        },
        {
          id: "porch",
          sol: "11.RI.2.C",
          stem: "In sentence 3, the author says the town kills turtles \"with porch lights\" mainly to —",
          choices: [
            { letter: "A", text: "blame one homeowner for the whole problem" },
            { letter: "B", text: "argue that porches should be torn down" },
            { letter: "C", text: "jolt readers with the harm of ordinary lights" },
            { letter: "D", text: "describe how fishing nets are used offshore" }
          ],
          correct: "C"
        },
        {
          id: "wordplay",
          sol: "11.RI.2.C",
          stem: "The final sentence's play on keeping the turtle on the water tower and on the beach functions to —",
          choices: [
            { letter: "A", text: "tie the town's symbol to the need for real protection" },
            { letter: "B", text: "suggest that the water tower should be repainted" },
            { letter: "C", text: "admit that the ordinance will probably fail" },
            { letter: "D", text: "introduce a new argument about local tourism" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
