/* SOL Labyrinth — v85 content: Grade 10 EPIC passages (Virginia G10, 540–650 words, 8 questions each).
 * Eleven original packs on dance competitions, a county fair, lighthouses and a food truck:
 * three short stories, one drama, two articles, one functional text, one argument, two vocabulary
 * packs and one paired-text set. No VDOE / copyrighted text. Loaded after content.js; pushes into
 * the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── EPIC · Literary (level 2) · dance competition ───────────────────────── */
    {
      id: "g10-rl-c85-eight-count",
      family: "G10",
      title: "Eight Counts",
      kind: "Literary · 10.RL",
      blurb: "The music dies halfway through a competition duet, and the habit Ana mocked is all that is left.",
      level: 2,
      passage:
        "<p>" + N(1) + "The backstage hallway of the Riverside Civic Center smelled like hairspray and floor wax, and Ana Lucía Ferreira had been pacing it for twenty minutes. " +
        N(2) + "Their duet, number forty-one in the program, was still two acts away. " +
        N(3) + "Her partner, Kofi Mensah, sat on an equipment case with his eyes closed, lips moving, one heel tapping against the metal. " +
        N(4) + "\"You're counting again,\" Ana said. " +
        N(5) + "\"I'm always counting,\" he said without opening his eyes.</p>" +
        "<p>" + N(6) + "For four months that habit had driven her slightly mad. " +
        N(7) + "In the studio, while she tried to feel the cello rising underneath the choreography, Kofi would murmur five, six, seven, eight in the flat voice of a man reading a grocery list. " +
        N(8) + "She had told him once that he danced like a metronome with knees. " +
        N(9) + "He had laughed, which was worse than arguing, and kept counting.</p>" +
        "<p>" + N(10) + "Now the stage manager waved them toward the wings. " +
        N(11) + "The lights beyond the curtain were so bright that the audience was only a dark lake with a few phone screens floating on it. " +
        N(12) + "Ana took her opening position, kneeling with her forehead nearly touching the floor, and waited for the first low note of the cello.</p>" +
        "<p>" + N(13) + "It came, warm and slow, and for ninety seconds everything went the way it had gone a hundred times in rehearsal. " +
        N(14) + "Kofi lifted her into the turn on the downbeat, she slid out of it into the long reach across the stage, and the judges' table, a row of pale faces behind small lamps, seemed to lean forward. " +
        N(15) + "Then, in the middle of the second phrase, the music stopped.</p>" +
        "<p>" + N(16) + "It did not fade; it simply vanished, as if someone had closed a door on it. " +
        N(17) + "In the silence Ana could hear the air conditioning and a single cough from the balcony. " +
        N(18) + "Her body froze halfway into a spiral, and her mind went white. " +
        N(19) + "She knew the choreography the way she knew her own address, but without the cello she could not find where she was inside it.</p>" +
        "<p>" + N(20) + "\"Three, four,\" Kofi said, not loudly, but clearly enough for her to hear. " +
        N(21) + "\"Five, six, seven, eight.\" " +
        N(22) + "It was the same grocery-list voice she had mocked for months, and she grabbed it like a railing. " +
        N(23) + "She finished the spiral on eight, met his hand on the next count, and they kept going. " +
        N(24) + "He counted the whole second half of the routine aloud, steady as rain on a roof, and she danced to his numbers instead of the music. " +
        N(25) + "Somewhere around the final lift, the audience began clapping softly along with his count, and by the last pose the entire room was keeping time.</p>" +
        "<p>" + N(26) + "They placed fourth, one spot short of a medal. " +
        N(27) + "The sound technician found them afterward and apologized twice, explaining that a cable had worked loose. " +
        N(28) + "Later, while Ana was untying her shoes in the hallway, one of the judges, a gray-haired woman holding a clipboard, stopped beside them. " +
        N(29) + "\"We can't score what the music did,\" she said. \"We can only score what you did when it left.\" " +
        N(30) + "She tapped the comment sheet before handing it to Ana: Exceptional recovery. Partners clearly trust each other.</p>" +
        "<p>" + N(31) + "On the bus home Kofi fell asleep against the window, his heel still twitching now and then. " +
        N(32) + "Ana read the comment sheet three more times, then opened the notes app on her phone. " +
        N(33) + "For Monday's rehearsal she typed one line: Record Kofi counting the whole piece, no music.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme developed across \"Eight Counts\"?",
          choices: [
            { letter: "A", text: "Dance competitions reward luck far more often than they reward skill." },
            { letter: "B", text: "A habit that seems irritating can become a strength under pressure." },
            { letter: "C", text: "Dancers perform best when they ignore the audience completely." },
            { letter: "D", text: "Winning a medal matters less than pleasing the people watching." }
          ],
          correct: "B"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The central conflict of the story is best described as Ana's struggle to —",
          choices: [
            { letter: "A", text: "hide her nervousness from the judges before the duet" },
            { letter: "B", text: "convince Kofi to stop counting during rehearsals" },
            { letter: "C", text: "keep dancing when the music she depends on disappears" },
            { letter: "D", text: "earn a medal after four long months of difficult practice" }
          ],
          correct: "C"
        },
        {
          id: "feel",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 6–9 characterize Ana as a dancer who —",
          choices: [
            { letter: "A", text: "prefers feeling the music to counting the beats" },
            { letter: "B", text: "refuses to rehearse unless the cello recording is playing" },
            { letter: "C", text: "admires Kofi's calm and patient attitude toward practice" },
            { letter: "D", text: "worries that the choreography is too difficult for her" }
          ],
          correct: "A"
        },
        {
          id: "railing",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 22, saying that Ana grabbed Kofi's voice like a railing suggests that his counting —",
          choices: [
            { letter: "A", text: "embarrasses her in front of the silent audience" },
            { letter: "B", text: "reminds her of the mistakes she made in the studio" },
            { letter: "C", text: "is much too quiet for the judges to hear from their table" },
            { letter: "D", text: "gives her something steady to hold when she feels lost" }
          ],
          correct: "D"
        },
        {
          id: "lake",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "The image in sentence 11 of the audience as a dark lake with phone screens floating on it mainly creates a sense that —",
          choices: [
            { letter: "A", text: "the audience is bored and paying attention to their phones" },
            { letter: "B", text: "the old theater has been damaged by a recent storm" },
            { letter: "C", text: "the stage feels isolated and the crowd is hard to see" },
            { letter: "D", text: "Ana is eager to spot her family somewhere in the seats" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in \"Eight Counts\" is most ironic?",
          choices: [
            { letter: "A", text: "Ana begins the duet kneeling with her forehead near the floor." },
            { letter: "B", text: "Kofi's flat counting, which Ana mocked, saves the routine." },
            { letter: "C", text: "The judges watch the duet from behind a row of small lamps." },
            { letter: "D", text: "The duet finishes in fourth place, just one spot short of a medal." }
          ],
          correct: "B"
        },
        {
          id: "echo",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The author repeats the idea of a grocery-list voice in sentence 22, echoing sentence 7, mainly to —",
          choices: [
            { letter: "A", text: "suggest that Kofi is distracted by thoughts of food" },
            { letter: "B", text: "emphasize that Kofi's dancing has not improved" },
            { letter: "C", text: "reveal that Ana is still annoyed with her partner" },
            { letter: "D", text: "show how Ana's view of the same voice has changed" }
          ],
          correct: "D"
        },
        {
          id: "memo",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "The note Ana types in sentence 33 reveals that she —",
          choices: [
            { letter: "A", text: "now values Kofi's counting as a tool for practice" },
            { letter: "B", text: "plans to look for a new partner before the next event" },
            { letter: "C", text: "blames the sound technician for their fourth-place finish" },
            { letter: "D", text: "wants to file a complaint with the competition judges" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── EPIC · Literary (level 3) · lighthouse ───────────────────────── */
    {
      id: "g10-rl-c85-lamp-room",
      family: "G10",
      title: "The Lamp Room",
      kind: "Literary · 10.RL",
      blurb: "A lighthouse that guides no ships, a great-aunt who still climbs it, and a logbook full of clear skies.",
      level: 3,
      passage:
        "<p>" + N(1) + "The lighthouse on Gull Point had not warned a ship in twenty-two years, but Great-Aunt Hae-won still climbed its ninety-one steps every evening at seven. " +
        N(2) + "Seo-yeon, who had been sent to the island for July while her parents moved apartments, followed her up on the first night mostly because there was no cell signal anywhere else. " +
        N(3) + "At the top, in a glass room as hot as a greenhouse, sat the old lens: a beehive of curved glass taller than Seo-yeon, its prisms throwing tiny rainbows across the floor.</p>" +
        "<p>" + N(4) + "\"It doesn't turn on?\" Seo-yeon asked. " +
        N(5) + "\"Not since they put up that,\" her aunt said, nodding toward a gray metal pole at the end of the point, where a small LED beacon blinked on a timer. " +
        N(6) + "\"The pole is cheaper. It never sleeps, and it never complains about stairs.\" " +
        N(7) + "Then she took a soft cloth from her apron pocket and began wiping the prisms one by one, slowly, the way someone might comb a child's hair.</p>" +
        "<p>" + N(8) + "Seo-yeon watched for a while and then said what she was thinking. " +
        N(9) + "\"Nobody sees it, though. " +
        N(10) + "Why clean something that doesn't do anything?\" " +
        N(11) + "Her aunt did not answer right away. " +
        N(12) + "She finished the panel she was working on, folded the cloth into a neat square, and wrote a line in a clothbound book that lay on a shelf by the door. " +
        N(13) + "\"Tomorrow you can carry the water,\" she said, which was not an answer at all.</p>" +
        "<p>" + N(14) + "For two weeks Seo-yeon carried the water. " +
        N(15) + "She learned which prisms collected salt the fastest and that vinegar worked better than soap. " +
        N(16) + "She learned that the brass fittings turned green if you skipped even a few days, and that her aunt hummed the same three bars of an old song whenever she reached the top step. " +
        N(17) + "She did not learn why any of it mattered, and eventually she stopped asking.</p>" +
        "<p>" + N(18) + "Then, in the third week, Hae-won slipped on the wet rocks below the cottage and twisted her knee. " +
        N(19) + "The doctor who came over on the morning ferry wrapped it and said no stairs for a month. " +
        N(20) + "That evening at seven, Seo-yeon found her aunt sitting by the window, looking up at the tower the way people look at a phone that will not ring.</p>" +
        "<p>" + N(21) + "\"I'll go,\" Seo-yeon said, surprising both of them.</p>" +
        "<p>" + N(22) + "The climb felt longer alone. " +
        N(23) + "At the top she filled the basin, wiped the salt from the lowest ring of prisms, and polished the brass until it gave back a warped picture of her own face. " +
        N(24) + "When she finished, she opened the clothbound book to note that the work was done. " +
        N(25) + "The first page was dated twenty-two years earlier, the week the pole was installed. " +
        N(26) + "Every line after it said nearly the same thing in her aunt's small, square handwriting: Lens cleaned. Sky clear. " +
        N(27) + "Some nights said fog instead of clear. " +
        N(28) + "A few said storm, keeper stayed late. " +
        N(29) + "There were thousands of entries, and not one of them mentioned a ship.</p>" +
        "<p>" + N(30) + "Seo-yeon sat on the top step for a long time, holding the pen. " +
        N(31) + "Below her, the LED on the pole blinked its tidy, tireless signal at an empty sea. " +
        N(32) + "Then she wrote the date, and under it, in handwriting that was trying to be small and square: Lens cleaned. Sky clear. Keeper's knee healing. " +
        N(33) + "On the way down she caught herself humming three bars of a song she did not know the name of.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is most clearly developed across \"The Lamp Room\"?",
          choices: [
            { letter: "A", text: "Modern technology is always less reliable than older methods." },
            { letter: "B", text: "Young people should follow their elders' orders without question." },
            { letter: "C", text: "Caring for something can hold meaning after it stops being useful." },
            { letter: "D", text: "Living somewhere isolated makes it very difficult to form close bonds." }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point in Seo-yeon's relationship to the lighthouse work?",
          choices: [
            { letter: "A", text: "Sentence 5, when her aunt points out the LED beacon" },
            { letter: "B", text: "Sentence 14, when she first begins carrying the water" },
            { letter: "C", text: "Sentence 21, when she offers to make the climb herself" },
            { letter: "D", text: "Sentence 31, when she watches the beacon blink at sea" }
          ],
          correct: "C"
        },
        {
          id: "aunt",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Hae-won's reply in sentence 13 characterizes her as someone who —",
          choices: [
            { letter: "A", text: "prefers to teach through shared work rather than explanation" },
            { letter: "B", text: "is offended by her great-niece's rude and careless question" },
            { letter: "C", text: "has already forgotten what Seo-yeon asked her moments before" },
            { letter: "D", text: "expects Seo-yeon to grow bored and leave the island early" }
          ],
          correct: "A"
        },
        {
          id: "comb",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 7, comparing the cleaning of the prisms to combing a child's hair suggests that Hae-won treats the lens with —",
          choices: [
            { letter: "A", text: "quick, businesslike efficiency" },
            { letter: "B", text: "patience and tenderness" },
            { letter: "C", text: "nervous fear of breaking it" },
            { letter: "D", text: "tired, dutiful boredom" }
          ],
          correct: "B"
        },
        {
          id: "phone",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 20, the comparison of Hae-won looking at the tower the way people look at a phone that will not ring mainly creates a mood of —",
          choices: [
            { letter: "A", text: "quiet relief" },
            { letter: "B", text: "sharp anger" },
            { letter: "C", text: "playful curiosity" },
            { letter: "D", text: "helpless longing" }
          ],
          correct: "D"
        },
        {
          id: "logbook",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "What is ironic about the entries Seo-yeon finds in the clothbound book?",
          choices: [
            { letter: "A", text: "They record a careful watch kept over a light that guides no ships." },
            { letter: "B", text: "They are written in small handwriting that is hard for her to read." },
            { letter: "C", text: "They describe foggy nights far more often than clear ones." },
            { letter: "D", text: "They were begun by the doctor who arrives on the ferry." }
          ],
          correct: "A"
        },
        {
          id: "humming",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The author includes the detail in sentence 16 about the three bars of an old song mainly to —",
          choices: [
            { letter: "A", text: "explain why Hae-won slipped on the rocks in the third week" },
            { letter: "B", text: "show that Seo-yeon finds her aunt's habits embarrassing" },
            { letter: "C", text: "suggest that the island is far too quiet for a teenager" },
            { letter: "D", text: "prepare for the final sentence, when Seo-yeon hums the tune" }
          ],
          correct: "D"
        },
        {
          id: "except",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "All of the following suggest that Seo-yeon comes to share her aunt's devotion EXCEPT —",
          choices: [
            { letter: "A", text: "her offer to climb the tower in sentence 21" },
            { letter: "B", text: "her question about cleaning in sentence 10" },
            { letter: "C", text: "the entry she writes in sentence 32" },
            { letter: "D", text: "the humming she catches in sentence 33" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── EPIC · Literary (level 1) · county fair ───────────────────────── */
    {
      id: "g10-rl-c85-show-ring",
      family: "G10",
      title: "Every Animal",
      kind: "Literary · 10.RL",
      blurb: "Showmanship class starts at ten, and at nine-forty someone else's goat bolts for the midway.",
      level: 1,
      passage:
        "<p>" + N(1) + "Jalen Brooks had washed his goat, Pepper, three times before seven in the morning, and she had rolled in the dust three times right after. " +
        N(2) + "Now she stood in the wash rack of the Henley County Fair barn, dripping and looking pleased with herself. " +
        N(3) + "\"Showmanship class starts at ten,\" Jalen told her. \"Please, for once, act like a champion.\" " +
        N(4) + "Pepper chewed on his sleeve.</p>" +
        "<p>" + N(5) + "This was Jalen's fourth year in the goat barn, and he had never placed better than third. " +
        N(6) + "He had spent the summer walking Pepper every evening, practicing how to set her feet square and keep her head up so the judge could see the straight line of her back. " +
        N(7) + "His grandmother, who had shown goats at this same fair fifty years earlier, watched from a folding chair and offered one piece of advice over and over: \"Keep your eyes on the judge, not on the ribbon.\"</p>" +
        "<p>" + N(8) + "At nine-thirty the barn grew loud with clippers, radios, and the bleating of nervous animals. " +
        N(9) + "Jalen was brushing Pepper's legs when he heard a shriek from the next aisle. " +
        N(10) + "A small brown goat came racing past him, a blue halter flapping from its neck, and behind it ran a girl of about nine in boots too big for her. " +
        N(11) + "\"Biscuit, stop!\" she cried. " +
        N(12) + "Biscuit did not stop. " +
        N(13) + "He shot out the side door of the barn toward the midway, where the Ferris wheel was turning and the smell of funnel cake hung in the air like a cloud.</p>" +
        "<p>" + N(14) + "Jalen looked at the clock above the barn office. " +
        N(15) + "It was nine-forty. " +
        N(16) + "He handed Pepper's lead to his grandmother and ran.</p>" +
        "<p>" + N(17) + "He found Biscuit behind the lemonade stand, eating a paper cup. " +
        N(18) + "The goat let Jalen get within one step and then bolted again, weaving between strollers and a man carrying a giant stuffed banana. " +
        N(19) + "It took two laps around the petting zoo, the help of a teenager selling balloons, and most of a bag of pretzels before Jalen finally caught hold of the blue halter. " +
        N(20) + "The girl, whose name turned out to be Ruby, arrived out of breath and threw her arms around the goat's neck. " +
        N(21) + "\"It's his first fair,\" she said. \"He doesn't know the rules yet.\"</p>" +
        "<p>" + N(22) + "When Jalen got back to the show ring, sweaty and covered in dust, his class had already lined up. " +
        N(23) + "He slipped into the last spot just as the judge, a tall woman in a straw hat, began walking down the row. " +
        N(24) + "Pepper, for once, stood perfectly still, her feet square and her head high, as if she had decided the morning had been dramatic enough.</p>" +
        "<p>" + N(25) + "Jalen kept his eyes on the judge the whole time. " +
        N(26) + "He did not win; a girl from the next county took the purple rosette. " +
        N(27) + "But when the judge handed him a red second-place ribbon, she leaned in and said quietly, \"I saw you out on the midway. " +
        N(28) + "A good showman takes care of every animal, not just his own.\" " +
        N(29) + "Back at the pens, Ruby had tied a crooked paper sign to Biscuit's gate. " +
        N(30) + "It read THANK YOU JALEN in purple marker, next to a drawing of a goat that looked more like a dog. " +
        N(31) + "Jalen's grandmother studied it for a long moment and then announced that it was the best ribbon in the barn.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does \"Every Animal\" best develop?",
          choices: [
            { letter: "A", text: "Animals behave best when their owners are strict with them." },
            { letter: "B", text: "Hard practice always guarantees a first-place finish." },
            { letter: "C", text: "County fairs are too crowded for young exhibitors." },
            { letter: "D", text: "Helping others can matter as much as winning a prize." }
          ],
          correct: "D"
        },
        {
          id: "choice",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "What problem does Jalen face in sentences 14–16?",
          choices: [
            { letter: "A", text: "He must choose between his class and chasing a runaway goat." },
            { letter: "B", text: "He must find his grandmother before the judge calls his name." },
            { letter: "C", text: "He must wash Pepper a fourth time because she rolled in the dust." },
            { letter: "D", text: "He must decide whether to enter Pepper in a different class." }
          ],
          correct: "A"
        },
        {
          id: "jalen",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Which statement best describes Jalen?",
          choices: [
            { letter: "A", text: "He is careless and often late to important events." },
            { letter: "B", text: "He cares about winning more than about other people." },
            { letter: "C", text: "He works hard but is willing to put others first." },
            { letter: "D", text: "He is shy and avoids talking to people he does not know." }
          ],
          correct: "C"
        },
        {
          id: "cloud",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 13, the simile saying the smell of funnel cake hung in the air like a cloud mainly suggests that the smell is —",
          choices: [
            { letter: "A", text: "faint and fading quickly" },
            { letter: "B", text: "thick and spread everywhere" },
            { letter: "C", text: "sour and unpleasant to Jalen" },
            { letter: "D", text: "drifting in from far away" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "In sentence 24, the narrator says Pepper acted as if she had decided the morning had been dramatic enough. The tone of this sentence is best described as —",
          choices: [
            { letter: "A", text: "gently humorous" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "anxious and fearful" },
            { letter: "D", text: "stiff and formal" }
          ],
          correct: "A"
        },
        {
          id: "advice",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The author includes the grandmother's advice in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "explain how the judge chooses the winner of each class" },
            { letter: "B", text: "show that the grandmother doubts Jalen can win this year" },
            { letter: "C", text: "suggest that Jalen has stopped listening to his family" },
            { letter: "D", text: "prepare for the ending, where the ribbon matters less" }
          ],
          correct: "D"
        },
        {
          id: "sequence",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "What happens right after Jalen catches hold of Biscuit's blue halter?",
          choices: [
            { letter: "A", text: "Jalen gives Pepper's lead to his grandmother." },
            { letter: "B", text: "Ruby arrives and hugs her goat around the neck." },
            { letter: "C", text: "The judge begins walking down the row of goats." },
            { letter: "D", text: "Ruby ties a paper sign to Biscuit's gate." }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The details in sentence 8 — clippers, radios, and the bleating of nervous animals — mainly create a mood that is —",
          choices: [
            { letter: "A", text: "calm and sleepy" },
            { letter: "B", text: "gloomy and sad" },
            { letter: "C", text: "busy and tense" },
            { letter: "D", text: "strange and mysterious" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── EPIC · Drama (level 2) · food truck ───────────────────────── */
    {
      id: "g10-rl-c85-truck-window",
      family: "G10",
      title: "Same Sauce, New Shape",
      kind: "Drama · 10.RL",
      blurb: "Two siblings run the family food truck alone for the first time, and one of them has a secret in the warmer.",
      level: 2,
      passage:
        "<p><em>Setting: inside a bright green food truck called Kusina Reyes, parked outside Bayview Medical Center at 11:30 on a Thursday. Steam rises from a rice cooker. DALISAY REYES, nineteen, chops onions with fierce speed. Her brother TEO, sixteen, holds up a tablet.</em></p>" +
        "<p>" + N(1) + "<strong>TEO</strong>: Just look at it. One photo. Adobo tacos, crispy tortilla, pickled onion on top. Forty thousand people liked this video. " +
        N(2) + "<strong>DALISAY</strong> <em>(not looking up)</em>: Forty thousand people aren't standing at our window. " +
        N(3) + "<strong>TEO</strong>: They could be. Mom's menu hasn't changed since I was in diapers. " +
        N(4) + "<strong>DALISAY</strong>: Mom's menu is the reason we have a truck. Adobo, pancit, lumpia, rice. Four things, done right. She has said that every morning for eleven years. " +
        N(5) + "<strong>TEO</strong>: She also said she'd be here today, and she's home with a fever, so I'm guessing she's open to surprises. " +
        N(6) + "<em>(DALISAY sets down the knife and stares at him. TEO raises both hands.)</em> " +
        N(7) + "<strong>TEO</strong>: Fine. Fine. Four things. " +
        N(8) + "<strong>TEO</strong> <em>(turning away, to the audience)</em>: I made twelve tacos at six this morning. They're in the warmer, under the foil, behind the rice. " +
        N(9) + "I used half the adobo. " +
        N(10) + "She'll never notice. Probably.</p>" +
        "<p>" + N(11) + "<em>(A knock on the service window. NURSE ADEBAYO, in blue scrubs, leans in, smiling.)</em> " +
        N(12) + "<strong>NURSE ADEBAYO</strong>: Two adobo plates, extra sauce. Same as every Thursday. Night shift was a monster. " +
        N(13) + "<strong>DALISAY</strong> <em>(lifting the pot lid, then freezing)</em>: That's strange. There was a full pot when I opened the window. " +
        N(14) + "<strong>TEO</strong> <em>(suddenly very busy with napkins)</em>: Huh. " +
        N(15) + "<strong>DALISAY</strong>: Teo. " +
        N(16) + "<strong>TEO</strong>: Okay, so, technically, some of it is in a different shape. <em>(He pulls the foil off the warmer.)</em> " +
        N(17) + "<strong>NURSE ADEBAYO</strong>: What are those? " +
        N(18) + "<strong>TEO</strong>: The future. Two dollars off for our first customer. " +
        N(19) + "<em>(Pause. DALISAY looks at the line forming behind the nurse: five people, then eight. Her jaw tightens, but she nods once.)</em> " +
        N(20) + "<strong>DALISAY</strong>: Give her two. And plate the rest of the adobo the real way.</p>" +
        "<p>" + N(21) + "<em>(A rush. The siblings move around each other like gears in a clock, never colliding: TEO takes orders on the tablet, DALISAY fills plates, the rice cooker hisses. The line shrinks. NURSE ADEBAYO returns to the window holding an empty taco wrapper.)</em> " +
        N(22) + "<strong>NURSE ADEBAYO</strong>: Who made these? " +
        N(23) + "<strong>TEO</strong> <em>(warily)</em>: Me? " +
        N(24) + "<strong>NURSE ADEBAYO</strong>: They're good. Really good. <em>(She turns to DALISAY.)</em> But that sauce is your mother's, isn't it? I'd know it anywhere. That's why I walk across the parking lot every Thursday. " +
        N(25) + "<strong>DALISAY</strong>: It's her recipe. Her mother's, actually. Lola brought it from Batangas in a notebook with a broken spine. " +
        N(26) + "<strong>NURSE ADEBAYO</strong>: Then don't lose it inside anything too fancy. <em>(She taps the counter twice and leaves.)</em></p>" +
        "<p>" + N(27) + "<em>(Quiet. The line is gone. TEO wipes a counter that is already clean.)</em> " +
        N(28) + "<strong>TEO</strong>: You can yell now. " +
        N(29) + "<strong>DALISAY</strong>: I'm not going to yell. " +
        N(30) + "<em>(She picks up a piece of chalk and turns the menu board over to its blank side.)</em> " +
        N(31) + "<strong>DALISAY</strong>: Fridays only. Lola's Adobo Tacos. Same sauce, new shape. Mom gets the final say. " +
        N(32) + "<strong>TEO</strong> <em>(grinning)</em>: You're putting Lola's name on my idea? " +
        N(33) + "<strong>DALISAY</strong>: I'm putting your idea under Lola's name. There's a difference. " +
        N(34) + "<em>(She writes the words in careful, looping letters, the way their mother writes the board each morning. Lights fade.)</em></p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best developed in \"Same Sauce, New Shape\"?",
          choices: [
            { letter: "A", text: "A new idea can honor a tradition instead of replacing it." },
            { letter: "B", text: "Older siblings should always make the final family decisions." },
            { letter: "C", text: "Social media is the surest way to grow a small business." },
            { letter: "D", text: "Customers care more about low prices than about taste." }
          ],
          correct: "A"
        },
        {
          id: "aside",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "Teo's lines to the audience in sentences 8–10 affect the plot mainly by —",
          choices: [
            { letter: "A", text: "showing that he has decided to give up on his menu idea" },
            { letter: "B", text: "explaining why their mother stayed home from the truck" },
            { letter: "C", text: "revealing the secret behind the missing adobo" },
            { letter: "D", text: "introducing the nurse as a regular Thursday customer" }
          ],
          correct: "C"
        },
        {
          id: "nod",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Dalisay's actions and words in sentences 19–20 show that she —",
          choices: [
            { letter: "A", text: "has secretly liked Teo's taco idea from the very beginning" },
            { letter: "B", text: "puts serving the customers ahead of winning the argument" },
            { letter: "C", text: "wants to embarrass Teo in front of the waiting line" },
            { letter: "D", text: "plans to tell their mother about the tacos that night" }
          ],
          correct: "B"
        },
        {
          id: "gears",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 21, the stage direction says the siblings move around each other like gears in a clock. This simile suggests that they —",
          choices: [
            { letter: "A", text: "are too rushed to notice what the other is doing" },
            { letter: "B", text: "repeat the same motions without thinking or caring" },
            { letter: "C", text: "are still too angry with each other to speak" },
            { letter: "D", text: "work together smoothly despite their disagreement" }
          ],
          correct: "D"
        },
        {
          id: "opening",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "The details in the opening stage direction — the rising steam and Dalisay chopping onions with fierce speed — mainly establish a mood that is —",
          choices: [
            { letter: "A", text: "lazy and relaxed" },
            { letter: "B", text: "busy and pressured" },
            { letter: "C", text: "gloomy and quiet" },
            { letter: "D", text: "mysterious and eerie" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Sentences 13–16 create dramatic irony because —",
          choices: [
            { letter: "A", text: "the audience knows where the adobo went, but Dalisay does not" },
            { letter: "B", text: "the nurse orders exactly the same meal that she orders every Thursday" },
            { letter: "C", text: "Dalisay expected the line of customers to be much longer" },
            { letter: "D", text: "Teo forgets that he is supposed to be handing out napkins" }
          ],
          correct: "A"
        },
        {
          id: "board",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "The final stage direction, in which Dalisay writes in looping letters the way their mother does, mainly serves to —",
          choices: [
            { letter: "A", text: "suggest that Dalisay plans to take over the truck alone" },
            { letter: "B", text: "show that their mother has returned to the truck at last" },
            { letter: "C", text: "place the new dish inside the family's tradition" },
            { letter: "D", text: "hint that the Friday special will probably fail" }
          ],
          correct: "C"
        },
        {
          id: "shape",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "In sentence 16, Teo's statement that some of the adobo is technically in a different shape is best described as —",
          choices: [
            { letter: "A", text: "a proud boast about his skill as a cook" },
            { letter: "B", text: "an angry accusation aimed at his sister" },
            { letter: "C", text: "a serious explanation of a new recipe" },
            { letter: "D", text: "an awkward, humorous attempt to confess" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── EPIC · Informational (level 1) · lighthouses ───────────────────────── */
    {
      id: "g10-ri-c85-coast-speaks",
      family: "G10",
      title: "How a Lighthouse Speaks",
      kind: "Informational · 10.RI",
      blurb: "Flashes, stripes and foghorns: how a tower on the shore told sailors exactly where they were.",
      level: 1,
      passage:
        "<p><strong>How a Lighthouse Speaks</strong></p>" +
        "<p>" + N(1) + "Before satellites and phone maps, a sailor approaching a rocky coast at night had very few ways to know exactly where the ship was. " +
        N(2) + "A lighthouse solved that problem by doing more than shining: it told sailors which lighthouse it was. " +
        N(3) + "Every part of a lighthouse, from the shape of its glass to the color of its paint, was designed to send a message that could be read from miles away.</p>" +
        "<p><strong>Bending the Light</strong></p>" +
        "<p>" + N(4) + "The earliest lighthouses burned wood or coal in open fires, and later ones used oil lamps backed by polished metal mirrors. " +
        N(5) + "Both methods wasted most of their light, which spread in every direction, including straight up into the sky. " +
        N(6) + "In the early 1800s, a new kind of lens changed that. " +
        N(7) + "Instead of one thick piece of glass, it used rings of glass prisms arranged around the lamp like the layers of a beehive. " +
        N(8) + "Each prism bent the escaping light and pointed it toward the horizon in a single strong beam. " +
        N(9) + "A small flame that might once have been visible for a few miles could now be seen from twenty miles away or more.</p>" +
        "<p><strong>A Signature in the Dark</strong></p>" +
        "<p>" + N(10) + "A strong beam was only half the answer. " +
        N(11) + "If every lighthouse shone the same way, a sailor seeing a light could not know whether it marked a safe harbor or a dangerous reef. " +
        N(12) + "So each lighthouse was given its own pattern, called its characteristic. " +
        N(13) + "One might flash white every ten seconds; another might show two quick flashes followed by darkness; a third might glow a steady red. " +
        N(14) + "Sailors carried printed lists of these patterns and timed the flashes with a watch. " +
        N(15) + "Counting the seconds between flashes was like reading a name tag in the dark.</p>" +
        "<p><strong>Messages for Daylight and Fog</strong></p>" +
        "<p>" + N(16) + "Lighthouses had to communicate in the daytime, too. " +
        N(17) + "Many were painted with bold patterns, such as black and white stripes, spirals, or diamonds, known as daymarks. " +
        N(18) + "A captain who saw a tower with a red band across its middle could check a chart and know exactly which stretch of shore lay ahead. " +
        N(19) + "Fog created a harder problem, because it could swallow even the brightest beam. " +
        N(20) + "Many stations added fog signals, such as bells, whistles, and later loud horns, each with its own timing so that sailors could identify the station by sound alone.</p>" +
        "<p><strong>The Keeper's Job</strong></p>" +
        "<p>" + N(21) + "For most of their history, lighthouses depended on keepers who lived on site. " +
        N(22) + "A keeper trimmed the wick, refilled the oil, wound the clockwork that rotated the lens, and polished salt and soot from the glass every day. " +
        N(23) + "On stormy nights, a keeper might stay awake until dawn to make sure the light never went out. " +
        N(24) + "Logbooks from these stations record weather, passing ships, and repairs in careful detail.</p>" +
        "<p><strong>Lighthouses Today</strong></p>" +
        "<p>" + N(25) + "In the twentieth century, electric lamps and automatic timers gradually replaced most keepers. " +
        N(26) + "Today, satellite navigation guides nearly every large ship, and many historic towers have been switched off or replaced by small automated beacons. " +
        N(27) + "Yet lighthouses have not disappeared from the coast. " +
        N(28) + "Many still operate as backups in case electronic systems fail, and local groups have restored others as museums. " +
        N(29) + "Their flashing patterns, painted stripes, and patient beams remain a reminder that, long before digital maps, a coastline could speak to anyone who knew how to listen.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which sentence best states the central idea of \"How a Lighthouse Speaks\"?",
          choices: [
            { letter: "A", text: "Sentence 9, about a flame seen from twenty miles away" },
            { letter: "B", text: "Sentence 3, about every part sending a readable message" },
            { letter: "C", text: "Sentence 14, about sailors timing flashes with a watch" },
            { letter: "D", text: "Sentence 26, about satellites guiding nearly every large ship" }
          ],
          correct: "B"
        },
        {
          id: "pattern",
          sol: "10.RI.2.B",
          sub: "10.RI.2.B.2",
          stem: "According to the article, why was each lighthouse given its own characteristic?",
          choices: [
            { letter: "A", text: "so that the lamp would burn less oil each night" },
            { letter: "B", text: "so that keepers could signal for supplies and repairs" },
            { letter: "C", text: "so that the beam could reach past twenty miles" },
            { letter: "D", text: "so that sailors could tell which lighthouse they saw" }
          ],
          correct: "D"
        },
        {
          id: "waste",
          sol: "10.RI.2.B",
          sub: "10.RI.2.B.2",
          stem: "According to the article, what was the main weakness of open fires and early oil lamps?",
          choices: [
            { letter: "A", text: "Most of their light spread out in every direction." },
            { letter: "B", text: "They needed to be relit every hour of the night." },
            { letter: "C", text: "Their smoke made the glass prisms crack in winter." },
            { letter: "D", text: "They could only produce red light, not white light." }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author's main purpose in writing this article is to —",
          choices: [
            { letter: "A", text: "persuade readers to volunteer at a lighthouse museum" },
            { letter: "B", text: "argue that satellites should replace every lighthouse" },
            { letter: "C", text: "explain how lighthouses communicated with sailors" },
            { letter: "D", text: "describe one keeper's experience during a storm" }
          ],
          correct: "C"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How is the article mainly organized?",
          choices: [
            { letter: "A", text: "by message-sending features, then by how the job changed" },
            { letter: "B", text: "as a single keeper's story told in order from morning to night" },
            { letter: "C", text: "as an argument followed by reasons against it" },
            { letter: "D", text: "by famous lighthouses listed from oldest to newest" }
          ],
          correct: "A"
        },
        {
          id: "nametag",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The comparison in sentence 15 to reading a name tag in the dark helps the reader understand that —",
          choices: [
            { letter: "A", text: "sailors had trouble seeing lighthouses at night" },
            { letter: "B", text: "a flash pattern identified one lighthouse" },
            { letter: "C", text: "keepers wrote their names in the station logbooks" },
            { letter: "D", text: "printed lists were too small to read on a ship" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The tone of the article's final sentence is best described as —",
          choices: [
            { letter: "A", text: "worried" },
            { letter: "B", text: "disapproving" },
            { letter: "C", text: "indifferent" },
            { letter: "D", text: "appreciative" }
          ],
          correct: "D"
        },
        {
          id: "today",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which choice best summarizes the section titled Lighthouses Today?",
          choices: [
            { letter: "A", text: "Keepers still live at most lighthouses and polish the glass daily." },
            { letter: "B", text: "Lighthouses are no longer needed and are being torn down." },
            { letter: "C", text: "Technology shrank their role, but many serve as backups or museums." },
            { letter: "D", text: "Satellite navigation has failed, so ships depend on lighthouses again." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── EPIC · Informational (level 3) · dance competitions ───────────────────────── */
    {
      id: "g10-ri-c85-scoring-art",
      family: "G10",
      title: "Scoring the Unscorable",
      kind: "Informational · 10.RI",
      blurb: "Rubrics, panels and blind judging: how dance competitions try to put a number on art.",
      level: 3,
      passage:
        "<p><strong>Scoring the Unscorable</strong></p>" +
        "<p>" + N(1) + "At a youth dance competition, a routine lasts about three minutes, but the scoring behind it can take much longer to understand. " +
        N(2) + "Parents in the audience often leave convinced that the judges got it wrong, and dancers sometimes wonder whether a panel of strangers can measure something as personal as art. " +
        N(3) + "Competition organizers say the goal is not perfect fairness but a system designed to make unfairness less likely.</p>" +
        "<p>" + N(4) + "Most competitions begin by breaking a performance into parts. " +
        N(5) + "A typical score sheet divides 100 points among technique, which covers balance, turns, and clean footwork; performance, which covers expression and connection with the audience; choreography, which covers how well the steps fit the music; and overall impression. " +
        N(6) + "Technique usually carries the most weight, often 35 or 40 points, because it is the easiest category to observe consistently. " +
        N(7) + "A wobbling landing looks like a wobbling landing to almost everyone. " +
        N(8) + "Performance and impression are harder to pin down, and that is where most disagreements among judges, parents, and dancers begin.</p>" +
        "<p>" + N(9) + "To reduce the influence of any one person's taste, organizers rarely rely on a single judge. " +
        N(10) + "A panel of three to five judges scores each routine separately, without discussing it with the others. " +
        N(11) + "Many events then drop the highest and lowest scores and average the rest, a method also used in judged sports. " +
        N(12) + "If one judge loves contemporary dance and another prefers tap, their strongest opinions are trimmed away, leaving the middle of the panel to decide. " +
        N(13) + "\"One judge can have a bad day,\" said Lorena Vidal, who has organized regional competitions for fifteen years. \"Three judges having the same bad day about the same dancer is much less likely.\"</p>" +
        "<p>" + N(14) + "Some competitions go further still. " +
        N(15) + "At events that use blind judging, the panel does not see studio names or the dancers' past results, only an entry number. " +
        N(16) + "Organizers argue that this keeps judges from rewarding well-known studios out of habit or reputation. " +
        N(17) + "Others now require every judge to write at least two comments, one praising and one suggesting an improvement, so that scores come with reasons attached and dancers have something specific to practice.</p>" +
        "<p>" + N(18) + "Still, critics point out that these safeguards cannot remove opinion entirely. " +
        N(19) + "A dance teacher named Hamid Rostami notes that the performance category tends to reward \"a style of smiling and reaching toward the audience that some traditions don't use at all.\" " +
        N(20) + "A dancer trained in a quieter, more inward style, he argues, may lose points not for weak dancing but for different dancing. " +
        N(21) + "Some organizers have responded by training judges to ask whether a dancer fully commits to the chosen style rather than whether that style matches their own preference. " +
        N(22) + "Whether such training actually changes scores is still unclear, since no competition has published enough data to show it.</p>" +
        "<p>" + N(23) + "What the debate reveals is that judging dance is less like timing a race and more like grading an essay. " +
        N(24) + "A rubric can say what to look for, and several readers can balance one another's blind spots, but someone still has to decide what counts as expressive. " +
        N(25) + "For dancers and their teachers, then, the most useful part of a competition may not be the medal at all. " +
        N(26) + "It may be the comment sheet, where several trained eyes describe what they saw, offering something a single number never can: a reason.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Scoring the Unscorable\"?",
          choices: [
            { letter: "A", text: "Dance judges are usually biased toward famous studios." },
            { letter: "B", text: "Technique is the only truly fair way to score a dance routine." },
            { letter: "C", text: "Scoring systems limit, but cannot remove, personal opinion." },
            { letter: "D", text: "Competitions should stop awarding medals to young dancers." }
          ],
          correct: "C"
        },
        {
          id: "wobble",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence best supports the idea that technique can be scored more consistently than other categories?",
          choices: [
            { letter: "A", text: "Sentence 7, about a wobbling landing" },
            { letter: "B", text: "Sentence 10, about judges scoring separately" },
            { letter: "C", text: "Sentence 15, about hiding studio names" },
            { letter: "D", text: "Sentence 20, about a quieter, inward style" }
          ],
          correct: "A"
        },
        {
          id: "unclear",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which idea does the author present as uncertain rather than established?",
          choices: [
            { letter: "A", text: "Many events drop the highest and lowest scores." },
            { letter: "B", text: "Technique often carries 35 or 40 of the 100 points." },
            { letter: "C", text: "Training judges in a new approach changes the scores." },
            { letter: "D", text: "Blind judges see only an entry number for each routine." }
          ],
          correct: "C"
        },
        {
          id: "vidal",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "The author includes the quotation from Lorena Vidal in sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "show that organizers admit the system is unfair" },
            { letter: "B", text: "give an organizer's reason that panels reduce error" },
            { letter: "C", text: "prove that judges often disagree about tap dancing" },
            { letter: "D", text: "introduce the criticism raised later by a dance teacher" }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How does the author organize sentences 9–22?",
          choices: [
            { letter: "A", text: "by tracing one routine from rehearsal to results" },
            { letter: "B", text: "by comparing dance scoring with several other sports" },
            { letter: "C", text: "by listing the categories in order of point value" },
            { letter: "D", text: "by describing safeguards and then their limits" }
          ],
          correct: "D"
        },
        {
          id: "essay",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 23, comparing dance judging to grading an essay rather than timing a race suggests that judging dance —",
          choices: [
            { letter: "A", text: "requires interpretation, not just measurement" },
            { letter: "B", text: "takes much longer than the routine itself does" },
            { letter: "C", text: "should be done only by trained writing teachers" },
            { letter: "D", text: "depends mostly on how fast the dancers move" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author's attitude toward competition scoring systems is best described as —",
          choices: [
            { letter: "A", text: "harshly critical" },
            { letter: "B", text: "balanced and thoughtful" },
            { letter: "C", text: "enthusiastic and uncritical" },
            { letter: "D", text: "bored and indifferent" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author ends the article with sentences 25 and 26 mainly to —",
          choices: [
            { letter: "A", text: "recommend that competitions publish all of their data" },
            { letter: "B", text: "explain exactly how the performance category is calculated" },
            { letter: "C", text: "suggest that parents usually understand the scores" },
            { letter: "D", text: "shift attention from the number to the written feedback" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── EPIC · Functional text (level 1) · county fair ───────────────────────── */
    {
      id: "g10-ri-c85-fair-guide",
      family: "G10",
      title: "Junior Exhibitor Guide",
      kind: "Functional text · 10.RI",
      blurb: "Deadlines, health certificates and ribbons: the rules for entering the county fair.",
      level: 1,
      passage:
        "<p><strong>Marlow County Fair — Junior Exhibitor Guide</strong></p>" +
        "<p><em>For exhibitors ages 9 to 18. Please read every section before submitting your entry form.</em></p>" +
        "<p><strong>Welcome</strong></p>" +
        "<p>" + N(1) + "The Marlow County Fair runs from Wednesday, August 12, through Sunday, August 16, at the county fairgrounds on Route 14. " +
        N(2) + "Junior exhibitors may enter in two divisions: Livestock (animals raised by the exhibitor) and Still Exhibits (baked goods, crafts, photography, sewing, and garden produce). " +
        N(3) + "This guide explains how to enter, what to bring, how judging works, and when to pick up your exhibits.</p>" +
        "<p><strong>Entering</strong></p>" +
        "<p>" + N(4) + "Entry forms are due by 5:00 p.m. on Friday, July 17, and may be submitted online or dropped off at the Extension Office. " +
        N(5) + "Late entries will not be accepted for any reason, including mail delays. " +
        N(6) + "Each exhibitor may enter up to two animals in Livestock and up to six items in Still Exhibits. " +
        N(7) + "There is no entry fee for exhibitors who are members of a county youth club; all other junior exhibitors pay $5 per entry.</p>" +
        "<p><strong>Livestock Rules</strong></p>" +
        "<p>" + N(8) + "Every animal must arrive with a health certificate signed by a licensed veterinarian within 30 days before the fair. " +
        N(9) + "Animals without a certificate will be turned away at the gate, even if they appear healthy. " +
        N(10) + "Exhibitors must have owned and cared for their animals since at least May 1, and they are expected to feed, water, and clean up after their animals every day of the fair. " +
        N(11) + "Animals may arrive on Tuesday, August 11, between 2:00 and 8:00 p.m.; no animals will be unloaded after 8:00 p.m.</p>" +
        "<p><strong>Still Exhibits</strong></p>" +
        "<p>" + N(12) + "Still exhibits are checked in on Tuesday, August 11, between 10:00 a.m. and 6:00 p.m. in the Exhibition Hall. " +
        N(13) + "Baked goods must be brought on a disposable plate inside a clear zip-top bag, with the recipe attached on an index card so judges can check the ingredients for allergies. " +
        N(14) + "Photographs must be mounted on stiff board no larger than 11 by 14 inches, with the exhibitor's name written on the back. " +
        N(15) + "All work must be done by the exhibitor during the past twelve months, although parents, club leaders, and other adults may teach or advise.</p>" +
        "<p><strong>Judging and Awards</strong></p>" +
        "<p>" + N(16) + "Judging is based on a standard of quality, not on competition with other entries. " +
        N(17) + "This means that several entries in the same class can each earn a blue ribbon if each one meets the standard. " +
        N(18) + "Blue ribbons mean excellent, red ribbons mean good, and white ribbons mean fair; one purple Champion rosette is awarded in each division. " +
        N(19) + "Exhibitors are encouraged, but not required, to attend judging, where judges often explain their decisions aloud. " +
        N(20) + "Premiums of $6 for each blue ribbon, $4 for each red, and $2 for each white will be mailed to exhibitors in October.</p>" +
        "<p><strong>Pickup and Conduct</strong></p>" +
        "<p>" + N(21) + "Still exhibits must remain on display until 6:00 p.m. on Sunday, August 16, and should be picked up by 8:00 p.m. that evening. " +
        N(22) + "Items left after that time become the property of the fair and may be discarded. " +
        N(23) + "Livestock may not leave the grounds early except in a veterinary emergency approved by the barn superintendent. " +
        N(24) + "All exhibitors are expected to treat animals, visitors, and other exhibitors with courtesy, and exhibitors who break fair rules may lose their ribbons and premiums.</p>" +
        "<p><strong>Questions?</strong></p>" +
        "<p>" + N(25) + "Contact the Junior Fair Office at (555) 014-2290, or visit the Extension Office Monday through Friday between 9:00 a.m. and 4:00 p.m.</p>",
      claims: [
        {
          id: "judging",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the section titled Judging and Awards?",
          choices: [
            { letter: "A", text: "Only one entry in each class can receive a blue ribbon." },
            { letter: "B", text: "Entries meet a standard, so many can earn the same ribbon." },
            { letter: "C", text: "Exhibitors must attend judging in order to collect their premiums." },
            { letter: "D", text: "Judges award ribbons based on which entry is the largest." }
          ],
          correct: "B"
        },
        {
          id: "certificate",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the guide, what happens to an animal that arrives without a health certificate?",
          choices: [
            { letter: "A", text: "It is examined by the barn superintendent." },
            { letter: "B", text: "It may be shown but cannot win a ribbon." },
            { letter: "C", text: "It is turned away at the gate." },
            { letter: "D", text: "It is kept apart from other animals." }
          ],
          correct: "C"
        },
        {
          id: "fee",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "A member of a county youth club enters two goats and three pies. Based on the guide, how much does she pay in entry fees?",
          choices: [
            { letter: "A", text: "$0" },
            { letter: "B", text: "$5" },
            { letter: "C", text: "$10" },
            { letter: "D", text: "$25" }
          ],
          correct: "A"
        },
        {
          id: "audience",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "This guide is written mainly for —",
          choices: [
            { letter: "A", text: "visitors planning to buy tickets to the fair" },
            { letter: "B", text: "judges who will score the livestock classes" },
            { letter: "C", text: "young people planning to enter the fair" },
            { letter: "D", text: "veterinarians who sign health certificates" }
          ],
          correct: "C"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The bold headings in the guide help a reader mainly by —",
          choices: [
            { letter: "A", text: "listing the events in the order they occur each day" },
            { letter: "B", text: "showing which of the rules are the most important to follow" },
            { letter: "C", text: "separating rules for visitors from rules for judges" },
            { letter: "D", text: "making it easy to find rules for one step or entry type" }
          ],
          correct: "D"
        },
        {
          id: "late",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "In sentence 5, the phrase for any reason, including mail delays mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the July 17 deadline will be strictly enforced" },
            { letter: "B", text: "the Extension Office prefers mailed entry forms" },
            { letter: "C", text: "exhibitors may ask for an extension in writing" },
            { letter: "D", text: "the mail is often slow in Marlow County" }
          ],
          correct: "A"
        },
        {
          id: "means",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The guide includes sentence 17 mainly to —",
          choices: [
            { letter: "A", text: "warn exhibitors that judging at the fair is very strict" },
            { letter: "B", text: "explain how premiums are mailed in October" },
            { letter: "C", text: "describe what the purple rosette looks like" },
            { letter: "D", text: "show what the rule in sentence 16 means in practice" }
          ],
          correct: "D"
        },
        {
          id: "optional",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which sentence makes clear that one activity is optional rather than required?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 19" },
            { letter: "C", text: "Sentence 21" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── EPIC · Argument (level 3) · food trucks ───────────────────────── */
    {
      id: "g10-ri-c85-square-evenings",
      family: "G10",
      title: "Give the Square Back Its Evenings",
      kind: "Argument · 10.RI",
      blurb: "A resident argues that food trucks can bring an empty town square back to life after five o'clock.",
      level: 3,
      passage:
        "<p><strong>Give the Square Back Its Evenings</strong></p>" +
        "<p><em>An opinion column by Priyanka Shah, a resident of Fairhaven</em></p>" +
        "<p>" + N(1) + "At six o'clock on a weekday, the town square in Fairhaven is a parking lot with a fountain in it. " +
        N(2) + "The shops have closed, the benches are empty, the bakery's chairs are stacked upside down on its tables, and the only sound is the fountain itself, splashing for nobody. " +
        N(3) + "The town council will vote next month on whether to allow food trucks to park along the north side of the square on weekday evenings, and the council should say yes.</p>" +
        "<p>" + N(4) + "This is not a leap into the unknown. " +
        N(5) + "Last October, the council approved a four-week trial that allowed three trucks, selling dumplings, tacos, and grilled corn, to operate on Thursday evenings. " +
        N(6) + "According to the town's own report, foot traffic on the square rose from an average of about 40 people per evening to nearly 300. " +
        N(7) + "The bookstore on Elm Street, which stayed open late during the trial, recorded its best October sales in six years, and its owner credits the evening crowds. " +
        N(8) + "Families who would never have driven downtown on a school night came for dumplings and noodles and stayed to walk around the fountain, often for an hour or more.</p>" +
        "<p>" + N(9) + "The strongest objection comes from some restaurant owners, who worry that the trucks will steal their customers. " +
        N(10) + "That concern deserves respect; restaurants pay rent, property taxes, and wages all year, while a truck can simply drive away whenever business is slow. " +
        N(11) + "But the trial results, collected by the town itself, suggest that the fear is mostly unfounded. " +
        N(12) + "Two of the three sit-down restaurants on the square reported busier Thursdays during the trial, not slower ones, and the third reported no change. " +
        N(13) + "Crowds attract crowds. " +
        N(14) + "A person who comes downtown for a taco may notice a restaurant's patio and come back on Saturday with friends.</p>" +
        "<p>" + N(15) + "Others object to noise and litter, and these are fair concerns too. " +
        N(16) + "The proposal, however, already addresses them. " +
        N(17) + "Trucks would have to shut off their generators by 9:00 p.m., provide their own trash cans, and pay a permit fee that would fund an extra cleanup crew on the square every night the trucks operate. " +
        N(18) + "If a truck breaks those rules, it loses its permit. " +
        N(19) + "That is a stricter standard than the town applies to many of the businesses already here, some of which leave overflowing dumpsters in the alley for days.</p>" +
        "<p>" + N(20) + "Some council members have suggested waiting another year to study the issue further before making any decision. " +
        N(21) + "Delay may sound cautious, but it has a cost. " +
        N(22) + "Every month the square stays empty is a month in which residents learn to spend their evenings somewhere else, at the shopping center out by the highway or at home on their phones. " +
        N(23) + "Habits, once formed, are hard to undo. " +
        N(24) + "The trial already gave us the study we need, paid for and completed, and its results were clear.</p>" +
        "<p>" + N(25) + "A town square is supposed to be a gathering place, not a monument to the hours between nine and five. " +
        N(26) + "Food trucks will not solve every problem downtown, and they do not have to. " +
        N(27) + "They only have to give people a reason to show up. " +
        N(28) + "I urge every resident who wants a livelier Fairhaven to attend the council meeting on March 9 and say so, and I urge the council to vote yes.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which sentence best states the central claim of \"Give the Square Back Its Evenings\"?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 21" },
            { letter: "D", text: "Sentence 26" }
          ],
          correct: "A"
        },
        {
          id: "restaurants",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which evidence does the author use to answer the restaurant owners' fear of losing customers?",
          choices: [
            { letter: "A", text: "The Elm Street bookstore had its best October sales in six years." },
            { letter: "B", text: "Foot traffic rose from about 40 people to nearly 300." },
            { letter: "C", text: "Trucks must shut off their generators by 9:00 p.m." },
            { letter: "D", text: "Two of the three restaurants reported busier Thursdays." }
          ],
          correct: "D"
        },
        {
          id: "speculation",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which statement from the column is a prediction rather than a reported result?",
          choices: [
            { letter: "A", text: "Foot traffic on the square rose to nearly 300 people." },
            { letter: "B", text: "A taco customer may return on Saturday with friends." },
            { letter: "C", text: "The bookstore recorded its best October in six years." },
            { letter: "D", text: "The third restaurant on the square reported no change." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 9–24 of the column mainly organized?",
          choices: [
            { letter: "A", text: "as a timeline of the four-week Thursday trial" },
            { letter: "B", text: "as a comparison of three different food trucks on the square" },
            { letter: "C", text: "as a series of objections, each followed by a response" },
            { letter: "D", text: "as a list of problems with no proposed solutions" }
          ],
          correct: "C"
        },
        {
          id: "parking",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 1, the author describes the square as a parking lot with a fountain in it mainly to —",
          choices: [
            { letter: "A", text: "emphasize how lifeless the square is in the evening" },
            { letter: "B", text: "complain that downtown has too few parking spaces" },
            { letter: "C", text: "suggest that the fountain should be removed" },
            { letter: "D", text: "show where the food trucks would be allowed to park" }
          ],
          correct: "A"
        },
        {
          id: "crowds",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The short sentence Crowds attract crowds (sentence 13) mainly serves to —",
          choices: [
            { letter: "A", text: "admit that the trial caused crowding problems on the square" },
            { letter: "B", text: "introduce a new objection raised by residents" },
            { letter: "C", text: "state the principle behind the evidence in sentence 12" },
            { letter: "D", text: "repeat the column's title in different words" }
          ],
          correct: "C"
        },
        {
          id: "respect",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 10, the author says the restaurant owners' concern deserves respect mainly to —",
          choices: [
            { letter: "A", text: "show that she has changed her mind about the trucks" },
            { letter: "B", text: "argue that restaurants should pay lower taxes" },
            { letter: "C", text: "suggest that the council should delay its vote" },
            { letter: "D", text: "appear fair-minded before she answers the objection" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The tone of the column's final paragraph is best described as —",
          choices: [
            { letter: "A", text: "bitter and sarcastic" },
            { letter: "B", text: "confident and urgent" },
            { letter: "C", text: "uncertain and hesitant" },
            { letter: "D", text: "detached and neutral" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── EPIC · Vocabulary (level 1) · food truck ───────────────────────── */
    {
      id: "g10-rv-c85-first-shift",
      family: "G10",
      title: "The Emergency Plate",
      kind: "Vocabulary · 10.RV",
      blurb: "A first Saturday at the family food truck, a broken refrigerator, and two bags of ice.",
      level: 1,
      passage:
        "<p>" + N(1) + "On her first Saturday working at her uncle's food truck, Amara Osei learned that a lunch rush is not a line of customers but a kind of weather. " +
        N(2) + "At 11:55 the window was quiet; by 12:10 the line stretched past the fire hydrant, and the truck had become so <strong>hectic</strong> that she could barely hear the orders over the hiss of the grill and the ring of the order bell.</p>" +
        "<p>" + N(3) + "Uncle Kwabena had warned her. " +
        N(4) + "\"You are a <strong>novice</strong>,\" he had said that morning, handing her an apron that still had creases from the package. " +
        N(5) + "\"Nobody expects you to know everything on day one. " +
        N(6) + "Just watch, listen, and ask.\" " +
        N(7) + "Amara had nodded, a little offended, since she had eaten at the truck a hundred times and felt she knew the menu by heart.</p>" +
        "<p>" + N(8) + "Knowing the menu, she discovered, was not the same as knowing the job. " +
        N(9) + "Her uncle was <strong>meticulous</strong> about everything. " +
        N(10) + "Each container of rice was labeled with the time it had been cooked, each knife went back to its own spot on the magnet strip, and each plate was wiped clean around the edges before it went out the window. " +
        N(11) + "At first Amara thought this was fussy. " +
        N(12) + "Then she saw a customer smile at a plate that looked exactly like the photo painted on the side of the truck, and she began wiping the edges too.</p>" +
        "<p>" + N(13) + "Her uncle was also <strong>frugal</strong>. " +
        N(14) + "He saved onion ends for stock, bought spices in bulk from a wholesaler across town, and turned leftover plantains into a dessert special he sold at a discount. " +
        N(15) + "\"A truck has thin walls and thin profits,\" he told her. " +
        N(16) + "\"Waste nothing, and you can afford to be generous where it matters.\" " +
        N(17) + "Amara noticed that he never skimped on portions, and that he slipped an extra puff-puff into the bag of every child who came to the window.</p>" +
        "<p>" + N(18) + "At 12:40 the trouble started. " +
        N(19) + "The small refrigerator under the counter, where they kept <strong>perishable</strong> items like chicken, cream, and fresh herbs, made a grinding noise and went silent. " +
        N(20) + "Uncle Kwabena put his hand inside and frowned; the air was already warming. " +
        N(21) + "There was no time to call a repair shop, and closing the window meant losing the busiest hour of the week.</p>" +
        "<p>" + N(22) + "\"We <strong>improvise</strong>,\" he said. " +
        N(23) + "He sent Amara running to the corner store for two bags of ice, emptied a cooler they used for drinks, and packed the chicken and cream into it. " +
        N(24) + "He crossed two dishes off the chalkboard menu that depended on herbs that would wilt, and he added a new one, made from rice, beans, and the spiciest sauce in the truck. " +
        N(25) + "He called it the Emergency Plate. " +
        N(26) + "It sold out in forty minutes.</p>" +
        "<p>" + N(27) + "By three o'clock the line was gone, and Amara sat on an overturned crate, her feet aching. " +
        N(28) + "She had burned one finger, mixed up two orders, and dropped an entire tray of puff-puff on the floor. " +
        N(29) + "She expected her uncle to list her mistakes. " +
        N(30) + "Instead he handed her a cold bottle of water and said that her ice run had saved the day. " +
        N(31) + "\"A truck needs many hands,\" he said, \"but on a day like today, a fast pair of legs is <strong>indispensable</strong>.\" " +
        N(32) + "Amara laughed, but she noticed she was already thinking about next Saturday, and about how she would label the rice.</p>",
      claims: [
        {
          id: "hectic",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 2, the word hectic most nearly means —",
          choices: [
            { letter: "A", text: "quiet and orderly" },
            { letter: "B", text: "frantically busy" },
            { letter: "C", text: "dangerously hot" },
            { letter: "D", text: "slow and dull" }
          ],
          correct: "B"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which details best help the reader understand the meaning of meticulous in sentence 9?",
          choices: [
            { letter: "A", text: "the labeled rice, the knives in place, the wiped plates" },
            { letter: "B", text: "the line stretching past the fire hydrant during the lunch rush" },
            { letter: "C", text: "the spices bought in bulk from a wholesaler across town" },
            { letter: "D", text: "the refrigerator's grinding noise before it went silent" }
          ],
          correct: "A"
        },
        {
          id: "novice",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word novice in sentence 4 comes from a Latin root meaning new, as in novel and renovate. Based on this root, a novice is someone who —",
          choices: [
            { letter: "A", text: "gives orders to other workers" },
            { letter: "B", text: "has strong opinions about food" },
            { letter: "C", text: "is new to an activity or job" },
            { letter: "D", text: "works only on weekends" }
          ],
          correct: "C"
        },
        {
          id: "frugal",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author chose frugal rather than cheap to describe Uncle Kwabena in sentence 13. Compared with cheap, frugal suggests that he —",
          choices: [
            { letter: "A", text: "refuses to spend money on anything at all" },
            { letter: "B", text: "cares much more about profit than about customers" },
            { letter: "C", text: "sells food that is lower in quality than others'" },
            { letter: "D", text: "is careful with money in a sensible, admirable way" }
          ],
          correct: "D"
        },
        {
          id: "perishable",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word perishable in sentence 19 combines perish, meaning to spoil or die, with the suffix -able. Perishable items are those that —",
          choices: [
            { letter: "A", text: "must be cooked before they are sold" },
            { letter: "B", text: "can spoil if they are not kept cold" },
            { letter: "C", text: "are too expensive to buy in bulk" },
            { letter: "D", text: "have been stored for a long time" }
          ],
          correct: "B"
        },
        {
          id: "improvise",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "As used in sentence 22, improvise most nearly means to —",
          choices: [
            { letter: "A", text: "make do with whatever is available" },
            { letter: "B", text: "follow a recipe exactly as written" },
            { letter: "C", text: "close the business for the afternoon" },
            { letter: "D", text: "call an expert to fix a problem" }
          ],
          correct: "A"
        },
        {
          id: "indispensable",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "The uncle's remark in sentence 30 that the ice run had saved the day helps the reader understand that indispensable in sentence 31 means —",
          choices: [
            { letter: "A", text: "tired" },
            { letter: "B", text: "expensive" },
            { letter: "C", text: "essential" },
            { letter: "D", text: "careless" }
          ],
          correct: "C"
        },
        {
          id: "fussy",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "In sentence 11, Amara first thinks her uncle's habits are fussy. Compared with meticulous, the word fussy has a connotation that is more —",
          choices: [
            { letter: "A", text: "positive, suggesting great skill and talent" },
            { letter: "B", text: "neutral, suggesting an ordinary amount of effort" },
            { letter: "C", text: "playful, suggesting a good sense of humor" },
            { letter: "D", text: "negative, suggesting needless worry over details" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── EPIC · Vocabulary (level 2) · dance competition ───────────────────────── */
    {
      id: "g10-rv-c85-zapateado",
      family: "G10",
      title: "Twelve Pairs of Heels",
      kind: "Vocabulary · 10.RV",
      blurb: "A folklórico troupe learns that the judges are listening to their shoes.",
      level: 2,
      passage:
        "<p>" + N(1) + "For the twelve dancers of the Raíces folklórico troupe, the state dance festival began not with music but with skirts, pressed and hung on a rolling rack backstage. " +
        N(2) + "Each skirt was a full circle of satin, so wide that when Itzel lifted the hem and swept it in an arc, it opened like a painted fan, and so heavy that holding it up through a seven-minute routine felt like carrying a wet towel above her head.</p>" +
        "<p>" + N(3) + "Their director, Señora Beltrán, cared about the skirts, but she cared far more about the feet. " +
        N(4) + "\"Anyone can be <strong>flamboyant</strong>,\" she liked to say, flicking her own hem in an exaggerated, theatrical swirl. " +
        N(5) + "\"Swinging a bright skirt is easy. " +
        N(6) + "The judges are listening to your shoes.\" " +
        N(7) + "In folklórico, the rapid stamping steps called zapateado turn dancers into drummers, and twelve pairs of heels must <strong>synchronize</strong> so precisely that they sound like one.</p>" +
        "<p>" + N(8) + "For months that had been the problem. " +
        N(9) + "In rehearsal, the troupe's rhythm would start strong and then begin to <strong>meander</strong>, drifting apart in tiny ways until the steps sounded less like a drumbeat and more like rain on a tin roof. " +
        N(10) + "Señora Beltrán would stop the music, close her eyes, and say only one word: \"Again.\" " +
        N(11) + "Itzel, who had joined the troupe two years earlier, admired how <strong>tenacious</strong> the director was; she never gave up on a phrase until it was right, even when fixing it took the whole evening.</p>" +
        "<p>" + N(12) + "The breakthrough came, surprisingly, from the youngest dancer, a quiet ninth grader named Mateo. " +
        N(13) + "He suggested that they stop rehearsing in front of the mirror and practice in a circle, facing one another, so that each dancer could watch the others' feet instead of their own reflection. " +
        N(14) + "The change seemed small, but within a week the troupe had a new <strong>cohesion</strong>. " +
        N(15) + "They were no longer twelve separate dancers each trying to be correct; they were one group listening to itself.</p>" +
        "<p>" + N(16) + "At the festival itself, things did not go perfectly. " +
        N(17) + "Halfway through the routine, the stage floor, which was slicker than the floor of their studio, made Itzel's footing <strong>precarious</strong>; on one fast turn her heel skidded, and for half a second she was sure she would fall. " +
        N(18) + "She didn't. " +
        N(19) + "She caught her balance, found the beat in the sound of the shoes around her, and rejoined the pattern before the next phrase began. " +
        N(20) + "Later, a judge wrote on the score sheet that the troupe was \"<strong>resilient</strong>: small slips, instant recoveries, no loss of rhythm.\"</p>" +
        "<p>" + N(21) + "Raíces finished second in the group division, out of fourteen troupes. " +
        N(22) + "The first-place troupe had been dazzling, with two quick costume changes and a towering backdrop of painted mountains that drew gasps from the crowd. " +
        N(23) + "But the judges' comments for Raíces praised something <strong>subtle</strong> that much of the audience had probably never noticed: the way twelve sets of heels landed at the same instant, again and again, for seven minutes.</p>" +
        "<p>" + N(24) + "On the long drive home, Señora Beltrán read the comments aloud twice. " +
        N(25) + "Then she folded the paper and tucked it into the sun visor of the van. " +
        N(26) + "\"Next year,\" she said, \"we rehearse in a circle from the very first day.\" " +
        N(27) + "Mateo, in the back seat, pretended not to hear, but Itzel saw him grinning at his reflection in the dark window.</p>",
      claims: [
        {
          id: "synchronize",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word synchronize in sentence 7 contains the prefix syn-, meaning together, and the root chron-, meaning time. Based on these parts, synchronize most nearly means to —",
          choices: [
            { letter: "A", text: "grow louder over time" },
            { letter: "B", text: "take turns one by one" },
            { letter: "C", text: "happen at the same time" },
            { letter: "D", text: "repeat after a short delay" }
          ],
          correct: "C"
        },
        {
          id: "precarious",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 17, the word precarious most nearly means —",
          choices: [
            { letter: "A", text: "unstable and risky" },
            { letter: "B", text: "graceful and smooth" },
            { letter: "C", text: "slow and careful" },
            { letter: "D", text: "loud and forceful" }
          ],
          correct: "A"
        },
        {
          id: "meander",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which phrase from sentence 9 best helps the reader understand the meaning of meander?",
          choices: [
            { letter: "A", text: "would start strong" },
            { letter: "B", text: "the troupe's rhythm" },
            { letter: "C", text: "more like rain on a tin roof" },
            { letter: "D", text: "drifting apart in tiny ways" }
          ],
          correct: "D"
        },
        {
          id: "flamboyant",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "Señora Beltrán uses the word flamboyant in sentence 4. Compared with colorful, flamboyant suggests a style that is more —",
          choices: [
            { letter: "A", text: "old-fashioned and traditional" },
            { letter: "B", text: "showy and attention-seeking" },
            { letter: "C", text: "careful and precise" },
            { letter: "D", text: "shy and hesitant" }
          ],
          correct: "B"
        },
        {
          id: "cohesion",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on sentences 14 and 15, the word cohesion most nearly means —",
          choices: [
            { letter: "A", text: "unity" },
            { letter: "B", text: "speed" },
            { letter: "C", text: "volume" },
            { letter: "D", text: "pride" }
          ],
          correct: "A"
        },
        {
          id: "subtle",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "The contrast between the dazzling first-place troupe in sentence 22 and the praise in sentence 23 helps the reader understand that subtle means —",
          choices: [
            { letter: "A", text: "loud and impressive" },
            { letter: "B", text: "quiet and easy to miss" },
            { letter: "C", text: "costly and very elaborate" },
            { letter: "D", text: "quick and careless" }
          ],
          correct: "B"
        },
        {
          id: "tenacious",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author describes Señora Beltrán as tenacious rather than stubborn in sentence 11. Compared with stubborn, tenacious suggests that she is —",
          choices: [
            { letter: "A", text: "unwilling to listen to anyone's ideas" },
            { letter: "B", text: "too strict to enjoy the dancing" },
            { letter: "C", text: "admirably determined to get it right" },
            { letter: "D", text: "unsure how to fix the problem" }
          ],
          correct: "C"
        },
        {
          id: "resilient",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word resilient in sentence 20 comes from Latin parts meaning to leap back. This origin fits the judge's description because the troupe —",
          choices: [
            { letter: "A", text: "jumped higher than the other troupes" },
            { letter: "B", text: "moved backward across the stage" },
            { letter: "C", text: "returned to the festival a second year" },
            { letter: "D", text: "sprang back quickly from small slips" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── EPIC · Paired texts (level 2) · lighthouses ───────────────────────── */
    {
      id: "g10-dsr-c85-linnet-light",
      family: "G10",
      title: "The Last Keeper of Cape Linnet",
      kind: "Paired texts · 10.DSR",
      blurb: "A news report on a lighthouse going automatic, and a keeper's granddaughter on what a beacon cannot do.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Cape Linnet Light Goes Automatic</strong> (from the Linnet County Ledger)</p>" +
        "<p>" + N(1) + "After 140 years of human care, the lighthouse at Cape Linnet will soon run on its own. " +
        N(2) + "The regional maritime authority announced Tuesday that the station's last full-time keeper position will end in June, when a solar-powered LED beacon replaces the tower's historic lamp. " +
        N(3) + "The new beacon will flash the same pattern sailors have known for generations: two white flashes every fifteen seconds.</p>" +
        "<p>" + N(4) + "Officials say the change is about reliability as much as money. " +
        N(5) + "The old lamp requires daily cleaning, regular bulb changes, and a backup generator that has failed twice in the past five years. " +
        N(6) + "The LED system, by contrast, is expected to run for a decade with little maintenance and can be monitored remotely from the authority's office in Port Haley. " +
        N(7) + "If the beacon dims or fails, a technician receives an alert within minutes. " +
        N(8) + "\"Modern ships rely on satellite navigation first,\" said spokesperson Dana Whitlock. \"The beacon is a backup, and an automated backup is the most dependable kind.\"</p>" +
        "<p>" + N(9) + "The change is also expected to save about $85,000 a year in salary, housing, and fuel costs. " +
        N(10) + "Part of those savings will pay to move the station's nineteenth-century lens to the Linnet Maritime Museum, where it will be displayed in a new glass gallery. " +
        N(11) + "The keeper's cottage will be leased to the Cape Linnet Historical Society, which plans to offer weekend tours of the tower and grounds.</p>" +
        "<p>" + N(12) + "Not everyone is pleased. " +
        N(13) + "At a public meeting last month, several residents asked who would notice trouble on the water once no one lived at the point. " +
        N(14) + "Officials responded that emergency calls now come almost entirely from boaters' own radios and phones. " +
        N(15) + "The current keeper, who has served at the station for eleven years, will transfer to a position at the Port Haley office.</p>" +
        "<p><strong>Text 2 — The Light Had Eyes</strong> (an essay by Mirela Kovač, whose grandfather kept the Cape Linnet Light for twenty-two years)</p>" +
        "<p>" + N(16) + "When people talk about a lighthouse, they talk about the light. " +
        N(17) + "My grandfather, who kept the Cape Linnet Light before the current keeper arrived, always said the light was the least important thing in the tower. " +
        N(18) + "\"The lamp is a machine,\" he told me. \"The keeper is a pair of eyes.\"</p>" +
        "<p>" + N(19) + "He meant it literally. " +
        N(20) + "Every evening he climbed to the gallery with binoculars and a notebook and simply watched the water. " +
        N(21) + "He wrote down every boat he saw, the weather, and the color of the sky. " +
        N(22) + "Most nights nothing happened. " +
        N(23) + "But one October afternoon he noticed a kayak where no kayak should be, far past the sandbar, and then he noticed that it was upside down. " +
        N(24) + "The paddler had no radio, and his phone was already at the bottom of the bay. " +
        N(25) + "My grandfather called for the rescue boat, and the young man was pulled from the water shivering but alive.</p>" +
        "<p>" + N(26) + "I understand why the light is being automated. " +
        N(27) + "I have read the numbers, and I do not doubt that an LED beacon is more reliable than an aging lamp and a tired generator. " +
        N(28) + "But a beacon can only send a message. " +
        N(29) + "It cannot receive one. " +
        N(30) + "It will flash its two white flashes over an overturned kayak exactly as it flashes over an empty sea.</p>" +
        "<p>" + N(31) + "I am not asking the authority to bring back the keeper's salary. " +
        N(32) + "I am asking the historical society, which will soon hold the keys to the cottage, to do something simpler: open the gallery to volunteer watchers during the busy summer months. " +
        N(33) + "Give them binoculars, a radio, and a notebook. " +
        N(34) + "The light will take care of itself now. " +
        N(35) + "Someone should still be looking.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do the writers of Text 1 and Text 2 agree?",
          choices: [
            { letter: "A", text: "The LED beacon will be more reliable than the old lamp." },
            { letter: "B", text: "The keeper's salary should be paid by the historical society." },
            { letter: "C", text: "Satellite navigation has made lighthouses unnecessary." },
            { letter: "D", text: "The old lens should stay inside the Cape Linnet tower." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which statement best describes a key difference between Text 1 and Text 2?",
          choices: [
            { letter: "A", text: "Text 1 opposes automation, while Text 2 strongly supports it." },
            { letter: "B", text: "Text 1 tells a rescue story, while Text 2 lists cost savings." },
            { letter: "C", text: "Text 1 is written for sailors, while Text 2 is for museum staff." },
            { letter: "D", text: "Text 1 reports the change; Text 2 argues something will be lost." }
          ],
          correct: "D"
        },
        {
          id: "challenge",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which sentence from Text 1 does the kayak story in Text 2 most directly challenge?",
          choices: [
            { letter: "A", text: "Sentence 6, about monitoring the beacon remotely" },
            { letter: "B", text: "Sentence 9, about saving $85,000 a year" },
            { letter: "C", text: "Sentence 11, about leasing the keeper's cottage" },
            { letter: "D", text: "Sentence 14, about emergency calls from boaters" }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "Select TWO sentences from Text 2 that most directly support the idea that an automated beacon cannot do what a keeper did.",
          choices: [
            { letter: "A", text: "Sentence 26" },
            { letter: "B", text: "Sentence 29" },
            { letter: "C", text: "Sentence 30" },
            { letter: "D", text: "Sentence 34" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "society",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "A reader who uses both texts could best conclude that the Cape Linnet Historical Society —",
          choices: [
            { letter: "A", text: "will have the access needed to act on Kovač's proposal" },
            { letter: "B", text: "has already agreed to hire a new full-time keeper" },
            { letter: "C", text: "opposed moving the old lens to the maritime museum" },
            { letter: "D", text: "will take over monitoring the beacon from the Port Haley office" }
          ],
          correct: "A"
        },
        {
          id: "looking",
          sol: "10.DSR.C",
          sub: "10.DSR.C.2",
          stem: "Kovač's final sentence, Someone should still be looking, mainly conveys —",
          choices: [
            { letter: "A", text: "anger that the authority ignored the residents' concerns" },
            { letter: "B", text: "doubt that the new beacon will work as officials promise" },
            { letter: "C", text: "a quiet insistence that human attention still matters" },
            { letter: "D", text: "regret that her grandfather's notebooks were thrown away" }
          ],
          correct: "C"
        },
        {
          id: "flashes",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Text 1 mentions the two white flashes to show that sailors will see the same signal as before. Text 2 refers to the same flashes mainly to —",
          choices: [
            { letter: "A", text: "praise the beacon for keeping the historic pattern" },
            { letter: "B", text: "stress that it flashes the same whether or not help is needed" },
            { letter: "C", text: "explain how the grandfather timed the old lamp's flashes each night" },
            { letter: "D", text: "suggest that the new pattern will confuse local boaters" }
          ],
          correct: "B"
        },
        {
          id: "dependable",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Based on both texts, which inference about the spokesperson's claim in sentence 8 is best supported?",
          choices: [
            { letter: "A", text: "It covers the light's reliability, not the watching Kovač describes." },
            { letter: "B", text: "It proves that residents' worries at the public meeting were unfounded." },
            { letter: "C", text: "It shows that the authority plans to bring back a keeper in the summer." },
            { letter: "D", text: "It admits that the LED beacon has already failed several times." }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
