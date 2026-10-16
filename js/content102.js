/* SOL Labyrinth — v5.15 expansion: Grade 11 long passages (Virginia G11), file c102.
 * Thirteen original LONG packs (385–520 words; paired 200–260 each; poem 22–28 lines) on
 * archaeology digs, an art museum, student filmmaking, and railroads and trains.
 * No VDOE / copyrighted text, no real people. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1 · Literary (level 2) · archaeology dig ───────────── */
    {
      id: "g11-rl-c102-sieve",
      family: "G11",
      title: "The Screen",
      kind: "Literary · 11.RL",
      blurb: "A field-school student stuck at the sifting screen finds the smallest thing on the hill.",
      level: 2,
      passage:
        "<p>" + N(1) + "By the third morning of the field school, Amani Haddad had decided that the screen was a punishment. " +
        N(2) + "The other students knelt in the trenches with trowels and brushes, close enough to the ground to feel like discoverers, while she stood at a wooden frame strung with wire mesh and shook their leftover dirt through it in a slow brown rain. " +
        N(3) + "The dust found its way into her collar, her eyebrows, and the seams of her notebook. " +
        N(4) + "Every few minutes a pebble rattled across the mesh, and every few minutes it turned out to be only a pebble.</p>" +
        "<p>" + N(5) + "\"Nothing gets past the screen,\" Dr. Varga had told her on the first day, as if that were an honor. " +
        N(6) + "Amani had nodded politely. " +
        N(7) + "She had come to the desert to find a city, not to babysit gravel.</p>" +
        "<p>" + N(8) + "The trench crew called up to her whenever they uncovered something, and she would climb down to look: the curve of a cooking pot, a wall of stacked stones, a coin so worn that its face was only a suggestion. " +
        N(9) + "Then she would climb back up to her frame and her buckets, and the wind would lift the fine dust off the mesh and carry it toward the hills like smoke from a fire she was not allowed to sit beside.</p>" +
        "<p>" + N(10) + "On Thursday, the heat arrived early. " +
        N(11) + "Amani worked through a bucket from the lowest layer of Trench Four, the one Dr. Varga said was older than anything else on the hill. " +
        N(12) + "She almost tipped the last handful aside without looking. " +
        N(13) + "Then something flat and reddish caught the light, no larger than her thumbnail. " +
        N(14) + "It was a fragment of pottery, plain and unpainted, and she nearly tossed it into the tray of ordinary sherds. " +
        N(15) + "But when she turned it over, she saw a shallow oval pressed into the clay, and inside the oval, faint as breath on glass, the curving ridges of a fingerprint.</p>" +
        "<p>" + N(16) + "She held very still. " +
        N(17) + "Someone had pressed this jar into shape with a thumb, perhaps three thousand years ago, and had not bothered to smooth the mark away. " +
        N(18) + "The potter had probably been in a hurry. " +
        N(19) + "The potter had probably never imagined that anyone would see it.</p>" +
        "<p>" + N(20) + "Dr. Varga came over when Amani called, crouched beside the tray, and was quiet for a long moment. " +
        N(21) + "\"The trench gives us the buildings,\" she said finally. " +
        N(22) + "\"The screen gives us the people.\" " +
        N(23) + "She did not say it as a lesson, which was why Amani believed it.</p>" +
        "<p>" + N(24) + "That afternoon Amani asked to stay at the screen. " +
        N(25) + "The other students looked at her as though she had misunderstood the schedule. " +
        N(26) + "She had not. " +
        N(27) + "She shook each bucket a little more slowly now, letting the dust sift away until only the hard, small things remained, the things the trench had missed because it was always looking for something larger.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story of Amani's week at the screen best develop?",
          choices: [
            { letter: "A", text: "Students learn more from experts than from their own mistakes." },
            { letter: "B", text: "The most valuable discoveries usually come to those who wait." },
            { letter: "C", text: "Patient attention to overlooked work can reveal what grander efforts miss." },
            { letter: "D", text: "Ancient people were careless with the objects they made and used." }
          ],
          correct: "C"
        },
        {
          id: "pebbles",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The detail in sentence 4 about pebbles that turn out to be only pebbles mainly serves to —",
          choices: [
            { letter: "A", text: "establish the dull routine that makes the later find more striking" },
            { letter: "B", text: "show that Amani is not skilled enough to recognize real artifacts" },
            { letter: "C", text: "suggest that the hill holds nothing older than ordinary gravel" },
            { letter: "D", text: "explain why Dr. Varga chose Amani for the job at the screen" }
          ],
          correct: "A"
        },
        {
          id: "city",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 7 reveals that, at the start of the story, Amani —",
          choices: [
            { letter: "A", text: "doubts that the desert site holds anything of value" },
            { letter: "B", text: "resents Dr. Varga for treating her unfairly in front of others" },
            { letter: "C", text: "wishes she had chosen a field school closer to home" },
            { letter: "D", text: "values dramatic discoveries over patient, routine labor" }
          ],
          correct: "D"
        },
        {
          id: "smoke",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 9, comparing the blowing dust to smoke from a fire she was not allowed to sit beside mainly conveys Amani's —",
          choices: [
            { letter: "A", text: "worry that the wind will ruin the trench crew's careful work" },
            { letter: "B", text: "sense of being shut out of the excitement the others share" },
            { letter: "C", text: "memory of evenings spent by a campfire with her family" },
            { letter: "D", text: "physical discomfort in the heat and dust of the desert" }
          ],
          correct: "B"
        },
        {
          id: "breath",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 15, the phrase faint as breath on glass emphasizes that the fingerprint is —",
          choices: [
            { letter: "A", text: "delicate and so slight that it is nearly invisible" },
            { letter: "B", text: "smudged and damaged by Amani's own careless handling" },
            { letter: "C", text: "a recent mark left by someone working on the dig" },
            { letter: "D", text: "cold and lifeless compared with the jar's bright color" }
          ],
          correct: "A"
        },
        {
          id: "bothered",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 17, the words had not bothered to smooth the mark away suggest that the potter —",
          choices: [
            { letter: "A", text: "meant the print as a signature for future owners" },
            { letter: "B", text: "was too unskilled to finish the jar properly" },
            { letter: "C", text: "was interrupted before the jar could be completed" },
            { letter: "D", text: "thought the small mark too unimportant to fix" }
          ],
          correct: "D"
        },
        {
          id: "resolve",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the final paragraph (sentences 24–27) resolve the conflict introduced in sentence 1?",
          choices: [
            { letter: "A", text: "Amani is finally moved into the trench as a reward for her find." },
            { letter: "B", text: "Amani now chooses the task she once thought was a punishment." },
            { letter: "C", text: "The other students admit that Amani's job is harder than theirs." },
            { letter: "D", text: "Dr. Varga apologizes for assigning Amani to the screen." }
          ],
          correct: "B"
        },
        {
          id: "believed",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentence 23 suggests that Amani accepts Dr. Varga's words in sentences 21 and 22 because —",
          choices: [
            { letter: "A", text: "Dr. Varga is the most experienced person on the dig" },
            { letter: "B", text: "Amani has heard the same idea from her teachers at school" },
            { letter: "C", text: "the remark sounds sincere rather than like a lecture" },
            { letter: "D", text: "the other students agree with Dr. Varga immediately" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 2 · Literary (level 3) · railroads ───────────── */
    {
      id: "g11-rl-c102-signalcabin",
      family: "G11",
      title: "Lever Twelve",
      kind: "Literary · 11.RL",
      blurb: "On the day a small station's signal cabin is switched off, a grandson pulls the last lever.",
      level: 3,
      passage:
        "<p>" + N(1) + "The signal cabin at Pallikara stood at the end of the platform like a lighthouse that had wandered inland, two stories of whitewashed brick with a row of windows facing the tracks. " +
        N(2) + "My grandfather had worked inside it for thirty-one years, and on the morning it was to be switched off for good, he was there before the stationmaster, polishing levers that would never be pulled again after noon.</p>" +
        "<p>" + N(3) + "I had come because my mother asked me to. " +
        N(4) + "I told myself I would record a few videos for him, stay an hour, and catch the bus back to town in time for cricket practice. " +
        N(5) + "\"They are replacing all of this with a screen in the city,\" I said, looking at the long iron frame with its numbered handles, red and black and blue. " +
        N(6) + "\"One person will run forty kilometers of track from a chair.\" " +
        N(7) + "\"Yes,\" Appachan said, rubbing a cloth along lever nine. " +
        N(8) + "\"From a very comfortable chair.\"</p>" +
        "<p>" + N(9) + "He showed me the register first, a ledger with a cracked green spine where every train had been written down by hand: the time it was offered, the time it was accepted, the time it cleared. " +
        N(10) + "His own handwriting filled hundreds of pages, small and upright, never crossed out. " +
        N(11) + "\"Every line is a promise,\" he said. " +
        N(12) + "\"The man down the line trusts that what I wrote is true. " +
        N(13) + "I trust that what he wrote is true. " +
        N(14) + "That is the whole railway, really: two men who have never met, trusting each other's pencils.\"</p>" +
        "<p>" + N(15) + "I filmed the ledger, the brass bell, and the faded diagram on the wall where the tracks were painted as straight bright lines. " +
        N(16) + "I kept checking the time. " +
        N(17) + "The bus came at eleven forty.</p>" +
        "<p>" + N(18) + "At eleven thirty, the bell rang twice from the next station up the line. " +
        N(19) + "Appachan looked at the clock, then at me, and then did something he had never done in all the years I had visited: he stepped back from the frame. " +
        N(20) + "\"The last up-train,\" he said. " +
        N(21) + "\"Lever twelve. Pull it toward you, all the way, and do not let go halfway.\"</p>" +
        "<p>" + N(22) + "The lever was heavier than it looked, and it moved with a long grinding complaint, as if the cabin itself were reluctant. " +
        N(23) + "Out past the window, the signal arm lifted. " +
        N(24) + "A minute later the train came through, a blur of blue coaches and open windows, and a boy my age leaned out and waved at the cabin without knowing why.</p>" +
        "<p>" + N(25) + "Appachan wrote the time in the register, his pencil slow and careful. " +
        N(26) + "Then he handed the pencil to me, and I wrote my own name beneath his, in handwriting that was not quite as straight.</p>" +
        "<p>" + N(27) + "I missed the eleven-forty bus. " +
        N(28) + "I have never been able to explain to anyone at practice why I did not mind.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is most clearly developed by the narrator's last morning in the Pallikara signal cabin?",
          choices: [
            { letter: "A", text: "New technology always makes older ways of working unnecessary." },
            { letter: "B", text: "Trust and responsibility can be handed down through shared work." },
            { letter: "C", text: "Young people rarely appreciate the jobs their elders once held." },
            { letter: "D", text: "Keeping careful records matters more than doing the work itself." }
          ],
          correct: "B"
        },
        {
          id: "clock",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The narrator's repeated attention to the time in sentences 4, 16, and 17 mainly serves to —",
          choices: [
            { letter: "A", text: "build suspense about whether the last train will arrive late" },
            { letter: "B", text: "show that the narrator is more organized than his grandfather" },
            { letter: "C", text: "suggest that the cabin's clock can no longer be trusted" },
            { letter: "D", text: "reveal his divided attention, which gives his final choice weight" }
          ],
          correct: "D"
        },
        {
          id: "chair",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Appachan's reply in sentence 8 about a very comfortable chair reveals that he —",
          choices: [
            { letter: "A", text: "doubts the change but answers with dry humor, not complaint" },
            { letter: "B", text: "is relieved that future signal workers will have an easier job" },
            { letter: "C", text: "hopes to be offered the new job running the screen in the city" },
            { letter: "D", text: "does not understand how the new system will actually work" }
          ],
          correct: "A"
        },
        {
          id: "lighthouse",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 1, comparing the cabin to a lighthouse that had wandered inland suggests that the building —",
          choices: [
            { letter: "A", text: "is too tall and old-fashioned for a small country station" },
            { letter: "B", text: "was originally built to guide ships near the coast" },
            { letter: "C", text: "is a watchful guardian that now seems oddly out of place" },
            { letter: "D", text: "is lonely because few travelers stop at Pallikara anymore" }
          ],
          correct: "C"
        },
        {
          id: "complaint",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "In sentence 22, describing the lever's movement as a long grinding complaint creates a mood that is —",
          choices: [
            { letter: "A", text: "comic, because the old machine is so clumsy" },
            { letter: "B", text: "tense, because the narrator might pull it wrong" },
            { letter: "C", text: "solemn, as if the cabin resists its own ending" },
            { letter: "D", text: "hopeful, as if the cabin will soon be repaired" }
          ],
          correct: "C"
        },
        {
          id: "pencils",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 14, the phrase trusting each other's pencils most nearly refers to —",
          choices: [
            { letter: "A", text: "relying on handwritten records kept by distant coworkers" },
            { letter: "B", text: "sharing writing tools between neighboring signal cabins" },
            { letter: "C", text: "checking each other's spelling in the station register" },
            { letter: "D", text: "letting the stationmaster approve every entry in the ledger" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "The story is told by the grandson in the first person. This choice mainly allows the reader to —",
          choices: [
            { letter: "A", text: "learn the full history of the railway from an expert" },
            { letter: "B", text: "understand Appachan's private thoughts about retirement" },
            { letter: "C", text: "see the cabin through the eyes of the passing passengers" },
            { letter: "D", text: "follow his shift from impatience to understanding from inside" }
          ],
          correct: "D"
        },
        {
          id: "promise",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses the central idea of Appachan's explanation in sentences 11–14?",
          choices: [
            { letter: "A", text: "Signal workers must memorize the timetable for every train." },
            { letter: "B", text: "The railway depends on trust between people who may never meet." },
            { letter: "C", text: "A ledger is more reliable than a computer screen in the city." },
            { letter: "D", text: "Handwriting reveals a great deal about a worker's character." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 3 · Literary (level 1) · student filmmaking ───────────── */
    {
      id: "g11-rl-c102-raincut",
      family: "G11",
      title: "Shooting in the Rain",
      kind: "Literary · 11.RL",
      blurb: "A student director's sunset scene is washed out, so she shoots the goodbye another way.",
      level: 1,
      passage:
        "<p>" + N(1) + "Maricel Santos had planned the final scene of her short film down to the minute. " +
        N(2) + "Her storyboard showed two friends sitting on the bleachers at sunset, golden light behind them, saying goodbye before one of them moved away. " +
        N(3) + "She had checked the weather app every night for a week. " +
        N(4) + "It promised clear skies until Saturday evening.</p>" +
        "<p>" + N(5) + "At four o'clock on Saturday, the first drops hit the camera lens. " +
        N(6) + "By four fifteen, the bleachers were slick and gray, and the sunset was hidden behind a low ceiling of cloud. " +
        N(7) + "Her lead actor, Danny Okafor, pulled his hood over his head and looked at her. " +
        N(8) + "\"We can come back next week,\" he said. " +
        N(9) + "\"Next week you'll be in Ohio,\" Maricel answered, and the words came out sharper than she meant them to.</p>" +
        "<p>" + N(10) + "That was the problem. " +
        N(11) + "Danny's family really was moving, which was the whole reason she had written the film in the first place. " +
        N(12) + "There would be no next week. " +
        N(13) + "Her friend Jae, who ran sound, was already wrapping the microphone in a plastic bag, and the borrowed light stand was dripping like a tree after a storm.</p>" +
        "<p>" + N(14) + "Maricel sat down on the wet bench and stared at her storyboard. " +
        N(15) + "The paper was beginning to curl. " +
        N(16) + "For a minute she thought about giving up on the scene and ending the film with a title card instead. " +
        N(17) + "Then she looked at Danny, standing in the rain with his hands in his pockets and his shoulders hunched, and she realized that he already looked exactly like someone who was leaving.</p>" +
        "<p>" + N(18) + "\"Forget the sunset,\" she said. " +
        N(19) + "\"We're shooting it in the rain.\" " +
        N(20) + "Jae stared at her. " +
        N(21) + "\"The rain will be loud on the mic.\" " +
        N(22) + "\"Good,\" Maricel said. " +
        N(23) + "\"Let it be loud. They can't hear each other very well. That's the point.\"</p>" +
        "<p>" + N(24) + "She rewrote the dialogue on the back of the storyboard, crossing out half the lines. " +
        N(25) + "In the new version, the two friends barely speak. " +
        N(26) + "One offers the other an umbrella, and the other shakes his head, and they sit together getting wet because neither one wants to be the first to stand up.</p>" +
        "<p>" + N(27) + "They shot it in three takes. " +
        N(28) + "On the third, Danny forgot his last line, and instead of saying it he simply laughed and wiped his face, and Maricel did not call cut.</p>" +
        "<p>" + N(29) + "When the film played at the spring showcase, people asked her how she had planned such a perfect storm. " +
        N(30) + "She told them the truth: she hadn't. " +
        N(31) + "She had only stopped arguing with the weather long enough to notice what it was offering.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does Maricel's rainy final shoot best support?",
          choices: [
            { letter: "A", text: "Careful planning is the key to every successful project." },
            { letter: "B", text: "Friends who move away are soon forgotten by those left behind." },
            { letter: "C", text: "Creative work is easier when a team avoids arguments." },
            { letter: "D", text: "Adapting to surprises can lead to something better than the plan." }
          ],
          correct: "D"
        },
        {
          id: "noweek",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Sentences 11 and 12 explain that Maricel cannot postpone the shoot because —",
          choices: [
            { letter: "A", text: "Danny will have moved away by the next weekend" },
            { letter: "B", text: "the borrowed equipment must be returned that night" },
            { letter: "C", text: "the spring showcase deadline is the following day" },
            { letter: "D", text: "the weather app predicts rain for the rest of the month" }
          ],
          correct: "A"
        },
        {
          id: "sharp",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Maricel's sharp reply to Danny in sentence 9 most likely reveals that she —",
          choices: [
            { letter: "A", text: "thinks Danny is not taking the film seriously enough" },
            { letter: "B", text: "is upset about her friend leaving, not only about the weather" },
            { letter: "C", text: "has already decided to cancel the final scene" },
            { letter: "D", text: "wants Jae to take over as director of the film" }
          ],
          correct: "B"
        },
        {
          id: "tree",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 13, the light stand is compared to a tree after a storm mainly to show that it is —",
          choices: [
            { letter: "A", text: "too tall to be moved without help" },
            { letter: "B", text: "bent and broken by the strong wind" },
            { letter: "C", text: "soaked and still dripping with rain" },
            { letter: "D", text: "standing alone at the edge of the field" }
          ],
          correct: "C"
        },
        {
          id: "ceiling",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 6, describing the cloud cover as a low ceiling suggests that the sky feels —",
          choices: [
            { letter: "A", text: "heavy and closed in over the field" },
            { letter: "B", text: "bright and calm after the storm" },
            { letter: "C", text: "distant and difficult to notice" },
            { letter: "D", text: "colorful and dramatic like a sunset" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the final paragraph (sentences 29–31) resolve Maricel's story?",
          choices: [
            { letter: "A", text: "It reveals that the film lost the competition at the showcase." },
            { letter: "B", text: "It shows that Danny and Maricel are no longer friends." },
            { letter: "C", text: "It explains that Maricel later reshot the scene in sunshine." },
            { letter: "D", text: "It shows her seeing that the success came from adapting, not planning." }
          ],
          correct: "D"
        },
        {
          id: "turn",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Which sentence marks the turning point when Maricel decides to change the scene rather than give it up?",
          choices: [
            { letter: "A", text: "Sentence 14" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 27" }
          ],
          correct: "C"
        },
        {
          id: "arguing",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 31, the phrase stopped arguing with the weather suggests that Maricel —",
          choices: [
            { letter: "A", text: "complained to her crew about the forecast" },
            { letter: "B", text: "accepted conditions she could not control" },
            { letter: "C", text: "gave up on finishing her film that semester" },
            { letter: "D", text: "learned to read the weather more accurately" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 4 · Poetry (level 2) · art museum ───────────── */
    {
      id: "g11-rl-c102-galleryguard",
      family: "G11",
      title: "Night Shift, Gallery Nine",
      kind: "Poetry · 11.RL",
      blurb: "A museum guard knows a harbor painting better than any of the visitors who lean too close.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "For eleven years I have stood in this room<br>" +
        L(2) + "where nobody looks at me. That is the job:<br>" +
        L(3) + "to be the chair the visitors forget,<br>" +
        L(4) + "a uniform the color of the wall.<br>" +
        L(5) + "They come to see the harbor in the frame,<br>" +
        L(6) + "the boats that never leave, the gull that hangs<br>" +
        L(7) + "forever on a stroke of white, and lean<br>" +
        L(8) + "too close, and I say gently, Please, step back.<br><br>" +
        L(9) + "But I know things about the painting they do not.<br>" +
        L(10) + "I know at four o'clock the west light comes<br>" +
        L(11) + "and finds a sail the painter must have loved,<br>" +
        L(12) + "and sets it burning for six minutes, maybe seven.<br>" +
        L(13) + "I know the crack in the lower corner, thin<br>" +
        L(14) + "as a hair, that has not grown since spring.<br>" +
        L(15) + "I know which children stop, and which ones run,<br>" +
        L(16) + "and how the old man Tuesdays sits and breathes.<br><br>" +
        L(17) + "They think I guard the harbor from the crowd.<br>" +
        L(18) + "Some days I think I guard the crowd from hurry,<br>" +
        L(19) + "standing between them and the door like a slow tide<br>" +
        L(20) + "that says, Not yet. Not yet. Look once more.<br>" +
        L(21) + "And when the lights go down and the locks turn,<br>" +
        L(22) + "I walk the room alone and say good night<br>" +
        L(23) + "to boats that never leave, as if they might,<br>" +
        L(24) + "as if I'd be the only one to see." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Night Shift, Gallery Nine\"?",
          choices: [
            { letter: "A", text: "Quiet, patient attention can reveal more in art than a quick look." },
            { letter: "B", text: "Famous paintings are best enjoyed when a museum is empty." },
            { letter: "C", text: "Guarding a museum is lonely work that few people respect." },
            { letter: "D", text: "Old paintings slowly lose their beauty as they age and crack." }
          ],
          correct: "A"
        },
        {
          id: "visitors",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Lines 15 and 16, about the children and the old man, mainly suggest that the speaker —",
          choices: [
            { letter: "A", text: "would prefer that children not visit the gallery at all" },
            { letter: "B", text: "worries that the old man may damage the painting" },
            { letter: "C", text: "watches the visitors as closely as the painting itself" },
            { letter: "D", text: "keeps a written record of everyone who enters the room" }
          ],
          correct: "C"
        },
        {
          id: "chair",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "In lines 3 and 4, the speaker describes the guard as a chair and a uniform the color of the wall to emphasize —",
          choices: [
            { letter: "A", text: "how tired the speaker feels after a long shift" },
            { letter: "B", text: "how invisible the speaker is to the visitors" },
            { letter: "C", text: "how plain and dull the museum's decoration is" },
            { letter: "D", text: "how strict the museum's dress code has become" }
          ],
          correct: "B"
        },
        {
          id: "burning",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 12, the phrase sets it burning creates an image of —",
          choices: [
            { letter: "A", text: "a fire that once damaged the painting" },
            { letter: "B", text: "the speaker's anger at careless visitors" },
            { letter: "C", text: "a lamp that is left on in the gallery" },
            { letter: "D", text: "sunlight briefly making the sail glow" }
          ],
          correct: "D"
        },
        {
          id: "hurry",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In line 18, the word hurry most nearly refers to the visitors' —",
          choices: [
            { letter: "A", text: "habit of rushing past art without really seeing it" },
            { letter: "B", text: "fear of being late for the museum's closing time" },
            { letter: "C", text: "need to leave quickly during an emergency" },
            { letter: "D", text: "rush to reach the most famous painting first" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the third stanza (lines 17–24) shift the meaning established in the first stanza?",
          choices: [
            { letter: "A", text: "The speaker decides to quit the job after eleven years." },
            { letter: "B", text: "The speaker admits the painting is not worth guarding." },
            { letter: "C", text: "The speaker redefines the job as helping people slow down and look." },
            { letter: "D", text: "The speaker reveals that the painting is about to be sold." }
          ],
          correct: "C"
        },
        {
          id: "notyet",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "The repetition of Not yet in line 20 creates a tone that is —",
          choices: [
            { letter: "A", text: "impatient and scolding" },
            { letter: "B", text: "nervous and uncertain" },
            { letter: "C", text: "playful and teasing" },
            { letter: "D", text: "gentle but insistent" }
          ],
          correct: "D"
        },
        {
          id: "goodnight",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Lines 22–24, in which the guard says good night to the boats, reveal that the speaker feels —",
          choices: [
            { letter: "A", text: "afraid of being alone in the dark museum" },
            { letter: "B", text: "a personal, almost protective bond with the painting" },
            { letter: "C", text: "bored by the same painting after so many years" },
            { letter: "D", text: "certain that the painted boats will someday move" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 5 · Drama (level 3) · student filmmaking ───────────── */
    {
      id: "g11-rl-c102-cuttingroom",
      family: "G11",
      title: "Thirty-Eight Seconds",
      kind: "Drama · 11.RL",
      blurb: "Two student editors must cut thirty-eight seconds from their documentary before the deadline.",
      level: 3,
      passage:
        "<p><em>" + N(1) + "A school media lab, late on a weeknight. Two monitors glow in the dark room. KOFI sits at the keyboard; YUKI paces behind him holding a printed copy of the festival rules and a cup of tea that went cold an hour ago.</em></p>" +
        "<p><strong>YUKI:</strong> " + N(2) + "We're thirty-eight seconds over. " +
        N(3) + "The rules say ten minutes, and they don't watch the eleventh.</p>" +
        "<p><strong>KOFI:</strong> " + N(4) + "Then we trim the street shots. " +
        N(5) + "Nobody needs four angles of the bus stop.</p>" +
        "<p><strong>YUKI:</strong> " + N(6) + "I already trimmed the bus stop. " +
        N(7) + "I trimmed the bus stop yesterday, while you were at practice. " +
        N(8) + "It's still thirty-eight seconds. " +
        "<em>" + N(9) + "She stops behind him and points at the screen.</em> " +
        N(10) + "That one. " +
        N(11) + "The towel shot.</p>" +
        "<p><em>" + N(12) + "On the monitor, frozen in place: Mrs. Aslan, the owner of the laundromat, standing alone among silent machines, folding a single white towel, corner to corner, as carefully as a flag.</em></p>" +
        "<p><strong>KOFI:</strong> " + N(13) + "No.</p>" +
        "<p><strong>YUKI:</strong> " + N(14) + "It's forty-one seconds of a woman folding a towel, Kofi. " +
        N(15) + "Nothing happens in it.</p>" +
        "<p><strong>KOFI:</strong> " + N(16) + "Everything happens in it. " +
        N(17) + "That's the last towel she'll ever fold in that building. " +
        N(18) + "She told us so.</p>" +
        "<p><strong>YUKI:</strong> " + N(19) + "She told us so in the interview, which is also in the film. " +
        N(20) + "The audience already knows. " +
        N(21) + "Showing it again is just repeating ourselves.</p>" +
        "<p><strong>KOFI:</strong> <em>" + N(22) + "quietly</em> Knowing something and watching it happen aren't the same.</p>" +
        "<p><em>" + N(23) + "A long pause. Yuki sets down the rules, pulls a chair beside him, and drags the timeline closer.</em></p>" +
        "<p><strong>YUKI:</strong> " + N(24) + "Okay. " +
        N(25) + "Then find me thirty-eight seconds somewhere else, because I'm not cutting her, and I'm not sending them an eleven-minute film.</p>" +
        "<p><strong>KOFI:</strong> <em>" + N(26) + "scrolling back to the opening</em> " +
        N(27) + "What about my narration? " +
        N(28) + "The part at the beginning where I explain the history of the block.</p>" +
        "<p><strong>YUKI:</strong> " + N(29) + "You worked on that for two weeks.</p>" +
        "<p><strong>KOFI:</strong> " + N(30) + "I know. " +
        N(31) + "I sound like a museum audio tour. " +
        "<em>" + N(32) + "He plays a few seconds. His own recorded voice begins, \"Founded nearly fifty years ago, the laundromat served,\" and he stops it.</em> " +
        N(33) + "The machines can tell them it's old. " +
        N(34) + "We just have to let them hear the machines.</p>" +
        "<p><strong>YUKI:</strong> " + N(35) + "That narration is forty seconds.</p>" +
        "<p><strong>KOFI:</strong> " + N(36) + "Then we're two seconds under. " +
        "<em>" + N(37) + "He selects the clip. His hand hovers over the key.</em></p>" +
        "<p><strong>YUKI:</strong> " + N(38) + "You're sure?</p>" +
        "<p><strong>KOFI:</strong> " + N(39) + "I'm sure the towel is better than I am.</p>" +
        "<p><em>" + N(40) + "He presses the key. On the screen, the film now opens on the low hum of the empty laundromat, the dryers turning slowly, a single light flickering above the counter. " +
        N(41) + "Yuki leans back in her chair and, for the first time all night, smiles.</em></p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is most clearly developed in the late-night scene between Kofi and Yuki?",
          choices: [
            { letter: "A", text: "Deadlines are more important than artistic choices." },
            { letter: "B", text: "Partners work best when one person makes every decision." },
            { letter: "C", text: "A creator may need to give up his own work to serve the story." },
            { letter: "D", text: "Documentaries should explain history as clearly as possible." }
          ],
          correct: "C"
        },
        {
          id: "trimmed",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Yuki's repeated statement in sentences 6 and 7 that she already trimmed the bus stop mainly serves to —",
          choices: [
            { letter: "A", text: "show that she dislikes the street footage Kofi filmed" },
            { letter: "B", text: "reveal her frustration at having done the easy cuts alone" },
            { letter: "C", text: "prove that the festival rules are unfair to student teams" },
            { letter: "D", text: "suggest that the bus stop was the best scene in the film" }
          ],
          correct: "B"
        },
        {
          id: "better",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Kofi's line in sentence 39 reveals that he —",
          choices: [
            { letter: "A", text: "is embarrassed that Yuki heard his recorded voice" },
            { letter: "B", text: "plans to record a better narration before the deadline" },
            { letter: "C", text: "believes Mrs. Aslan should have narrated the film herself" },
            { letter: "D", text: "values the honest footage more than his own contribution" }
          ],
          correct: "D"
        },
        {
          id: "towel",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "In this scene, the single white towel that Mrs. Aslan folds most clearly symbolizes —",
          choices: [
            { letter: "A", text: "the quiet close of a long chapter in her life" },
            { letter: "B", text: "the cleanliness of her well-run laundromat" },
            { letter: "C", text: "the surrender of the editors to the deadline" },
            { letter: "D", text: "the boredom of her daily routine at work" }
          ],
          correct: "A"
        },
        {
          id: "audiotour",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 31, Kofi says he sounds like a museum audio tour to suggest that his narration is —",
          choices: [
            { letter: "A", text: "too quiet for the audience to hear clearly" },
            { letter: "B", text: "full of facts he did not check carefully" },
            { letter: "C", text: "dry and explanatory, lacking real feeling" },
            { letter: "D", text: "the most professional part of the film" }
          ],
          correct: "C"
        },
        {
          id: "eleventh",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 3, Yuki's phrase they don't watch the eleventh most nearly means that the festival —",
          choices: [
            { letter: "A", text: "ignores or rejects films that run past the limit" },
            { letter: "B", text: "shows only the first ten films that are submitted" },
            { letter: "C", text: "allows one extra minute for student documentaries" },
            { letter: "D", text: "judges films mainly by their final minute" }
          ],
          correct: "A"
        },
        {
          id: "resolve",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "The stage directions in sentences 40 and 41 resolve the conflict mainly by showing that —",
          choices: [
            { letter: "A", text: "the laundromat will stay open after all" },
            { letter: "B", text: "the film now opens with the sounds Kofi trusted, and Yuki agrees" },
            { letter: "C", text: "Yuki secretly restores the narration while Kofi is not looking" },
            { letter: "D", text: "the editors decide to enter a different festival instead" }
          ],
          correct: "B"
        },
        {
          id: "machines",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 33, Kofi's statement that the machines can tell them it's old most nearly means that —",
          choices: [
            { letter: "A", text: "the laundromat's equipment needs to be replaced soon" },
            { letter: "B", text: "Mrs. Aslan should explain the history in her interview" },
            { letter: "C", text: "the audience will be bored by too much background noise" },
            { letter: "D", text: "sounds and images can show the history without explanation" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 6 · Informational (level 1) · archaeology ───────────── */
    {
      id: "g11-ri-c102-layers",
      family: "G11",
      title: "Reading the Layers",
      kind: "Informational · 11.RI",
      blurb: "How archaeologists read the walls of a trench like the pages of a calendar.",
      level: 1,
      passage:
        "<p>" + N(1) + "To a visitor, an archaeological trench can look like nothing more than a neat hole in the ground. " +
        N(2) + "To an archaeologist, its walls are a kind of calendar. " +
        N(3) + "Each band of soil, called a stratum, records a period when something happened at that spot: a floor was laid, a fire burned, a flood left mud behind, or people simply threw away their trash. " +
        N(4) + "Learning to read these layers, a practice called stratigraphy, is one of the first skills every excavator must master.</p>" +
        "<p>" + N(5) + "The basic rule is simple. " +
        N(6) + "In undisturbed ground, lower layers formed before the layers above them, just as the bottom papers in a pile of old newspapers were set down before the top ones. " +
        N(7) + "Geologists named this idea the law of superposition, and archaeologists borrowed it. " +
        N(8) + "If a coin turns up in a layer that lies beneath a burned floor, the coin was most likely dropped before the fire.</p>" +
        "<p>" + N(9) + "Real sites, however, are rarely undisturbed. " +
        N(10) + "People dig pits for storage, trenches for walls, and holes for fence posts, and each of these cuts down through older soil. " +
        N(11) + "Animals burrow. " +
        N(12) + "Tree roots push objects upward or drag them down. " +
        N(13) + "A careless reading can therefore place a modern bottle cap in an ancient layer simply because it slid down a rabbit hole. " +
        N(14) + "For this reason, excavators look closely at the edges of every feature, watching for changes in soil color and texture that show where one deposit ends and another begins.</p>" +
        "<p>" + N(15) + "Objects found in a layer are only part of the story. " +
        N(16) + "Their position, called their context, often matters more. " +
        N(17) + "A clay bowl sitting upright on a floor beside a hearth suggests a kitchen; the same bowl broken into pieces at the bottom of a pit suggests garbage. " +
        N(18) + "Once an object is lifted from the ground, its context is gone forever unless someone has recorded it. " +
        N(19) + "That is why archaeologists measure, photograph, and draw each layer before removing it, and why their notebooks are considered as valuable as anything they find.</p>" +
        "<p>" + N(20) + "This record keeping reflects an uncomfortable truth about the discipline: excavation destroys the thing it studies. " +
        N(21) + "A layer, once dug, cannot be put back. " +
        N(22) + "Some teams now leave part of every site untouched on purpose, trusting that future researchers will have better tools and sharper questions. " +
        N(23) + "What looks like hesitation is really a form of respect.</p>" +
        "<p>" + N(24) + "For students at a field school, the lesson usually arrives slowly. " +
        N(25) + "At first, the trench wall looks like a smear of brown. " +
        N(26) + "After a few weeks, they begin to see the faint gray line of an old floor, the orange streak of a hearth, and the darker fill of a forgotten pit. " +
        N(27) + "The ground has not changed. " +
        N(28) + "They have simply learned its language.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of \"Reading the Layers\"?",
          choices: [
            { letter: "A", text: "Most archaeological sites have been ruined by animals and roots." },
            { letter: "B", text: "Archaeologists learn a site's history by reading and recording its layers." },
            { letter: "C", text: "Field school students find digging easier than they expected." },
            { letter: "D", text: "Geologists understand soil layers better than archaeologists do." }
          ],
          correct: "B"
        },
        {
          id: "bottlecap",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, how might a modern bottle cap end up in an ancient layer?",
          choices: [
            { letter: "A", text: "A visitor might drop it into an open trench." },
            { letter: "B", text: "A flood might carry it across the site." },
            { letter: "C", text: "A careless digger might bury it on purpose." },
            { letter: "D", text: "It might slide down an animal's burrow." }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The intended audience for \"Reading the Layers\" is most likely —",
          choices: [
            { letter: "A", text: "readers who are new to how archaeology works" },
            { letter: "B", text: "geologists studying the law of superposition" },
            { letter: "C", text: "museum curators planning a new exhibit" },
            { letter: "D", text: "landowners deciding whether to allow a dig" }
          ],
          correct: "A"
        },
        {
          id: "rulethen",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize paragraphs 2 and 3 (sentences 5–14)?",
          choices: [
            { letter: "A", text: "by tracing the history of stratigraphy from past to present" },
            { letter: "B", text: "by comparing two famous excavations from different regions" },
            { letter: "C", text: "by stating a general rule and then explaining what complicates it" },
            { letter: "D", text: "by listing tools in the order an excavator would use them" }
          ],
          correct: "C"
        },
        {
          id: "newspapers",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 6, the author compares soil layers to a pile of old newspapers mainly to —",
          choices: [
            { letter: "A", text: "make the principle of superposition easy to picture" },
            { letter: "B", text: "suggest that archaeologists rely on written records" },
            { letter: "C", text: "show that most layers form in a single day" },
            { letter: "D", text: "explain why trash is common at many sites" }
          ],
          correct: "A"
        },
        {
          id: "respect",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "In sentence 23, the author calls leaving part of a site untouched a form of respect mainly to —",
          choices: [
            { letter: "A", text: "criticize teams that dig an entire site at once" },
            { letter: "B", text: "recast a choice that might look like timidity" },
            { letter: "C", text: "admit that archaeologists often lack funding" },
            { letter: "D", text: "argue that some sites should never be studied" }
          ],
          correct: "B"
        },
        {
          id: "context",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.1",
          stem: "According to \"Reading the Layers,\" what happens to an object's context once the object is lifted from the ground?",
          choices: [
            { letter: "A", text: "It can be rebuilt later from the soil left behind." },
            { letter: "B", text: "It becomes clearer once the object is cleaned." },
            { letter: "C", text: "It is lost for good unless it was recorded." },
            { letter: "D", text: "It matters less than the object's age." }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches the overall structure of \"Reading the Layers\"?",
          choices: [
            { letter: "A", text: "It argues for a position and then answers objections to it." },
            { letter: "B", text: "It tells one dig's story in the order events occurred." },
            { letter: "C", text: "It compares archaeology with geology point by point." },
            { letter: "D", text: "It defines a skill, explains its rules, and ends with how students learn it." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 7 · Informational (level 2) · railroads ───────────── */
    {
      id: "g11-ri-c102-twonoons",
      family: "G11",
      title: "The Day of Two Noons",
      kind: "Informational · 11.RI",
      blurb: "How trains turned noon from a fact of the sky into an agreement between people.",
      level: 2,
      passage:
        "<p>" + N(1) + "For most of human history, noon was wherever the sun said it was. " +
        N(2) + "A town's clocks were set so that twelve o'clock fell at the moment the sun stood highest over that particular place. " +
        N(3) + "Because the earth turns steadily from west to east, solar noon arrives about four minutes later for every degree of longitude a traveler moves west. " +
        N(4) + "A town fifty miles west of its neighbor might therefore run a few minutes behind it, and for centuries this hardly mattered. " +
        N(5) + "A farmer walking to market did not need to know the time in the next county.</p>" +
        "<p>" + N(6) + "The railroad changed that. " +
        N(7) + "A train could cover in an afternoon a distance that once took a week, crossing dozens of local times along the way. " +
        N(8) + "Each railroad company solved the problem by choosing its own standard, usually the local time of its headquarters or of a major city on its line. " +
        N(9) + "The result was a different kind of confusion. " +
        N(10) + "Large stations sometimes hung several clocks side by side, each showing the official time of a different railroad, and a passenger changing trains had to work out which clock applied to which departure. " +
        N(11) + "Timetables printed long tables of conversions. " +
        N(12) + "Missed connections were common, and so, more dangerously, were misunderstandings about when a train would reach a single-track section that another train also needed.</p>" +
        "<p>" + N(13) + "By the 1880s, railroad managers in the United States and Canada agreed that the patchwork had to go. " +
        N(14) + "They divided the continent into a small number of broad zones, each one hour apart, and every railroad agreed to run its trains by the time of the zone it was in. " +
        N(15) + "The switch took place on November 18, 1883. " +
        N(16) + "At noon in many cities, clocks were stopped or turned back a few minutes to match the new standard, so that some residents heard their bells ring twelve twice in one day. " +
        N(17) + "Newspapers called it the day of two noons.</p>" +
        "<p>" + N(18) + "Not everyone was pleased. " +
        N(19) + "Some towns refused to adopt \"railroad time,\" arguing that the sun, not a business, should decide when the day began. " +
        N(20) + "For years, a few cities kept two sets of public clocks. " +
        N(21) + "Yet the convenience of a shared schedule proved difficult to resist, and standard time slowly became the time of schools, banks, and courts as well as trains. " +
        N(22) + "The United States government did not officially write the zones into law until 1918, decades after most people had already started living by them.</p>" +
        "<p>" + N(23) + "The story is a reminder that even something as basic as the hour is partly an agreement. " +
        N(24) + "The sun still crosses each town's sky at its own moment. " +
        N(25) + "What changed was that people decided, for the sake of moving together, to stop counting it that way.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence best states the central idea of \"The Day of Two Noons\"?",
          choices: [
            { letter: "A", text: "Farmers were the first group to demand a shared clock time." },
            { letter: "B", text: "Large railroad stations were confusing places for travelers." },
            { letter: "C", text: "Railroads drove the change from local sun time to shared time zones." },
            { letter: "D", text: "The government created time zones to help schools and banks." }
          ],
          correct: "C"
        },
        {
          id: "twice",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, why did some residents hear twelve o'clock twice on November 18, 1883?",
          choices: [
            { letter: "A", text: "Clocks were set back a few minutes at noon to match the new zones." },
            { letter: "B", text: "Railroad stations and churches rang their bells at separate times." },
            { letter: "C", text: "Some towns refused to adopt standard time for several years." },
            { letter: "D", text: "Trains crossing a zone line sounded their whistles at noon." }
          ],
          correct: "A"
        },
        {
          id: "interpret",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence from \"The Day of Two Noons\" presents the author's interpretation rather than a historical fact?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 22" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author organizes sentences 1–17 mainly by —",
          choices: [
            { letter: "A", text: "comparing time in the United States with time in Canada" },
            { letter: "B", text: "describing an old system, the problem trains created, and the fix" },
            { letter: "C", text: "listing the arguments for and against railroad time" },
            { letter: "D", text: "defining several scientific terms related to longitude" }
          ],
          correct: "B"
        },
        {
          id: "singletrack",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 12 mentions single-track sections mainly to —",
          choices: [
            { letter: "A", text: "explain how railroads saved money on construction" },
            { letter: "B", text: "show that most passengers preferred to travel by night" },
            { letter: "C", text: "show that confusion about time could be dangerous" },
            { letter: "D", text: "suggest that trains of the period were very slow" }
          ],
          correct: "C"
        },
        {
          id: "quotes",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "In sentence 19, the author places railroad time in quotation marks most likely to —",
          choices: [
            { letter: "A", text: "show it was a label used by critics of the change" },
            { letter: "B", text: "signal that the term was invented by the author" },
            { letter: "C", text: "suggest that the new system was never actually used" },
            { letter: "D", text: "indicate a direct quotation from a newspaper" }
          ],
          correct: "A"
        },
        {
          id: "summary4",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which of the following best summarizes paragraph 4 of the railroad-time article (sentences 18–22)?",
          choices: [
            { letter: "A", text: "Most towns quickly welcomed railroad time as a clear improvement." },
            { letter: "B", text: "Despite resistance, standard time spread and finally became law." },
            { letter: "C", text: "Cities with two sets of clocks caused the most train accidents." },
            { letter: "D", text: "The government forced railroads to adopt time zones in 1883." }
          ],
          correct: "B"
        },
        {
          id: "farmer",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes sentence 5 about a farmer walking to market mainly to —",
          choices: [
            { letter: "A", text: "show that farmers distrusted the new railroads" },
            { letter: "B", text: "explain how markets set their opening hours" },
            { letter: "C", text: "suggest that rural life was slower and happier" },
            { letter: "D", text: "show why local time caused no trouble before fast travel" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 8 · Functional text (level 1) · art museum ───────────── */
    {
      id: "g11-ri-c102-docent",
      family: "G11",
      title: "Student Docent Guidelines",
      kind: "Functional text · 11.RI",
      blurb: "The rules for high school volunteers who lead gallery talks at a city art museum.",
      level: 1,
      passage:
        "<p><strong>Bellhaven Museum of Art: Student Docent Program Guidelines</strong></p>" +
        "<p><strong>Welcome.</strong> " + N(1) + "Thank you for joining the Student Docent Program, which trains high school volunteers to lead short gallery talks for visiting school groups. " +
        N(2) + "Docents work one Saturday shift per month from September through May. " +
        N(3) + "These guidelines explain what we expect of you and what you can expect from us.</p>" +
        "<p><strong>Before Your Shift.</strong> " + N(4) + "Arrive at the staff entrance on Mercer Street no later than 9:15 a.m. and sign in at the volunteer desk. " +
        N(5) + "Pick up your badge and the day's tour assignment, which lists your group's grade level and the three works you will discuss. " +
        N(6) + "If you have not yet completed the required training session for the gallery you are assigned to, you may shadow an experienced docent but may not lead a tour on your own.</p>" +
        "<p><strong>On the Gallery Floor.</strong> " + N(7) + "Each talk should last about twenty minutes. " +
        N(8) + "Plan to spend no more than five minutes presenting facts; use the remaining time to ask open questions, such as \"What do you notice first?\" or \"What do you think happened just before this moment?\" " +
        N(9) + "Our goal is not to deliver a lecture but to help young visitors look closely and trust their own observations. " +
        N(10) + "Keep your group at least an arm's length from every work, and stand where you can see all of the students at once.</p>" +
        "<p><strong>Touch Policy.</strong> " + N(11) + "No one may touch any artwork, frame, or pedestal, including docents. " +
        N(12) + "Oils from skin can damage surfaces over time, even when hands look clean. " +
        N(13) + "The only exception is the Touch Table in the Sculpture Court, where visitors may handle sample materials such as marble, bronze, and wood. " +
        N(14) + "If a student touches a work, calmly remind the group of the rule and report the incident to the gallery guard on duty; do not attempt to clean or inspect the work yourself.</p>" +
        "<p><strong>Emergencies.</strong> " + N(15) + "If the fire alarm sounds, lead your group to the nearest marked exit and gather at the flagpole on the front lawn. " +
        N(16) + "Do not stop to collect belongings. " +
        N(17) + "For a medical concern, alert any staff member carrying a radio, and stay with your group until a teacher or chaperone takes charge.</p>" +
        "<p><strong>Scheduling Changes.</strong> " + N(18) + "If you cannot attend your shift, notify the volunteer coordinator, Ms. Halvorsen, at least seventy-two hours in advance so that your tours can be reassigned. " +
        N(19) + "Two unexcused absences in one season will result in removal from the program. " +
        N(20) + "Docents who complete the full season receive a certificate of service and a family pass for the following year.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main purpose of the Bellhaven docent guidelines?",
          choices: [
            { letter: "A", text: "to persuade students to visit the museum on Saturdays" },
            { letter: "B", text: "to describe the artworks in the Sculpture Court" },
            { letter: "C", text: "to explain how the museum trains its gallery guards" },
            { letter: "D", text: "to set out the duties and rules for student volunteers" }
          ],
          correct: "D"
        },
        {
          id: "training",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guidelines, what must a docent do before leading a tour alone in a gallery?",
          choices: [
            { letter: "A", text: "Shadow the volunteer coordinator for a full season." },
            { letter: "B", text: "Complete the training session for that gallery." },
            { letter: "C", text: "Earn a certificate of service from the museum." },
            { letter: "D", text: "Meet the visiting school group's teacher in advance." }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The intended audience for the Bellhaven guidelines is —",
          choices: [
            { letter: "A", text: "high school students who have joined the program" },
            { letter: "B", text: "teachers bringing classes to the museum" },
            { letter: "C", text: "families using the free annual pass" },
            { letter: "D", text: "guards who patrol the Sculpture Court" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold headings in the Bellhaven guidelines help a docent mainly by —",
          choices: [
            { letter: "A", text: "listing the galleries in the order a tour visits them" },
            { letter: "B", text: "showing which rules matter most to the museum" },
            { letter: "C", text: "grouping rules by situation so they are easy to find" },
            { letter: "D", text: "explaining the history of the docent program" }
          ],
          correct: "C"
        },
        {
          id: "oils",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 12 of the guidelines serves mainly to —",
          choices: [
            { letter: "A", text: "describe how artworks are cleaned each night" },
            { letter: "B", text: "warn docents to wash their hands before a shift" },
            { letter: "C", text: "introduce the exception for the Touch Table" },
            { letter: "D", text: "give the reason behind the rule against touching" }
          ],
          correct: "D"
        },
        {
          id: "enforced",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence makes clear that the museum will enforce its attendance rule?",
          choices: [
            { letter: "A", text: "Sentence 19" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "A"
        },
        {
          id: "talktime",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guidelines, how should a docent spend most of a twenty-minute gallery talk?",
          choices: [
            { letter: "A", text: "presenting facts about each artist's life" },
            { letter: "B", text: "walking the group between the three works" },
            { letter: "C", text: "asking open questions that invite observation" },
            { letter: "D", text: "letting students handle the sample materials" }
          ],
          correct: "C"
        },
        {
          id: "lecture",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "In sentence 9, the contrast between delivering a lecture and helping visitors look closely mainly emphasizes that docents should —",
          choices: [
            { letter: "A", text: "memorize a short speech for each work of art" },
            { letter: "B", text: "guide discussion rather than simply recite facts" },
            { letter: "C", text: "avoid answering any questions from students" },
            { letter: "D", text: "keep their tours shorter than twenty minutes" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 9 · Argument (level 3) · railroads ───────────── */
    {
      id: "g11-ri-c102-corridor",
      family: "G11",
      title: "Keep the Corridor",
      kind: "Argument · 11.RI",
      blurb: "A student editorial urges the county not to sell an abandoned rail line piece by piece.",
      level: 3,
      passage:
        "<p>" + N(1) + "The last freight train used the Millbrook branch line eleven years ago, and since then the rails have rusted into the weeds behind half the houses on the east side of town. " +
        N(2) + "Next month, the county board will decide what to do with the twelve-mile corridor. " +
        N(3) + "One option, which has strong support, is to sell the land in pieces to the property owners whose backyards it crosses. " +
        N(4) + "It would be quick, and it would bring in money. " +
        N(5) + "It would also be a mistake that the county could never undo.</p>" +
        "<p>" + N(6) + "A rail corridor is not like an ordinary strip of land. " +
        N(7) + "It is long, narrow, gently graded, and continuous, and its value comes almost entirely from that continuity. " +
        N(8) + "Once a single parcel in the middle is sold, the corridor stops being a corridor; it becomes a collection of disconnected lots. " +
        N(9) + "Rebuilding it later would require buying back dozens of properties from owners who may not wish to sell, at prices far higher than anything the county would earn today.</p>" +
        "<p>" + N(10) + "The better choice is to convert the line into a trail while keeping the corridor whole and in public hands. " +
        N(11) + "A paved path would connect the high school, the public library, and the downtown business district, giving students and older residents a safe route that avoids Route 9, where there is no sidewalk for nearly two miles. " +
        N(12) + "Last spring, the student council counted pedestrians along that stretch for one week and recorded more than three hundred people walking on the shoulder, many of them carrying groceries or backpacks. " +
        N(13) + "Those numbers describe a need that the corridor is perfectly shaped to meet.</p>" +
        "<p>" + N(14) + "Supporters of the sale argue that a trail would bring strangers behind people's homes and invite litter and noise. " +
        N(15) + "That concern deserves a serious answer, not a dismissal. " +
        N(16) + "Trails in neighboring counties have handled it with fencing, lighting at crossings, and volunteer cleanup crews, and their sheriff's offices report no increase in property crime along the routes. " +
        N(17) + "A plan for Millbrook could include the same measures from the start, and nearby owners could help design them.</p>" +
        "<p>" + N(18) + "There is also a longer view to consider. " +
        N(19) + "Twenty or forty years from now, the region may need passenger rail again, whether because of traffic, fuel costs, or growth we cannot yet predict. " +
        N(20) + "A trail can be converted back to tracks if that day comes. " +
        N(21) + "A row of fenced backyards cannot.</p>" +
        "<p>" + N(22) + "The county board has been offered a choice between money now and options later. " +
        N(23) + "Selling the corridor would solve a small budget problem this year. " +
        N(24) + "Keeping it would leave the next generation a path, and perhaps one day a train, that no amount of money could otherwise buy. " +
        N(25) + "The board should keep the corridor.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence best states the central claim of the editorial about the Millbrook corridor?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which sentence provides the strongest evidence that Millbrook residents need a safer walking route?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward residents who worry about a trail behind their homes is best described as —",
          choices: [
            { letter: "A", text: "mocking and impatient" },
            { letter: "B", text: "fully persuaded by them" },
            { letter: "C", text: "respectful but unconvinced" },
            { letter: "D", text: "indifferent and distant" }
          ],
          correct: "C"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author develop the argument in paragraphs 2 through 5 of the Millbrook editorial?",
          choices: [
            { letter: "A", text: "explains a key feature, proposes an option, answers an objection, then looks ahead" },
            { letter: "B", text: "tells the history of the branch line from its first train to its last one" },
            { letter: "C", text: "compares the costs of three different plans in a series of tables" },
            { letter: "D", text: "lists the complaints of neighbors and then agrees with each one" }
          ],
          correct: "A"
        },
        {
          id: "backyards",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentences 20 and 21, the author contrasts a trail with a row of fenced backyards mainly to —",
          choices: [
            { letter: "A", text: "show that backyards are less attractive than trails" },
            { letter: "B", text: "stress that a sale cannot be undone but a trail keeps options open" },
            { letter: "C", text: "suggest that owners will fence their yards if a trail is built" },
            { letter: "D", text: "argue that passenger trains should return to Millbrook soon" }
          ],
          correct: "B"
        },
        {
          id: "stops",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "In sentence 8, the statement that the corridor stops being a corridor mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the county has already sold a parcel in the middle" },
            { letter: "B", text: "the land is too narrow to be used for houses" },
            { letter: "C", text: "the land's value depends on its staying unbroken" },
            { letter: "D", text: "the rails must be removed before any sale" }
          ],
          correct: "C"
        },
        {
          id: "predict",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence from the Millbrook editorial is a prediction rather than a reported fact?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "The author's tone in the final paragraph of the editorial (sentences 22–25) is best described as —",
          choices: [
            { letter: "A", text: "firm and forward-looking" },
            { letter: "B", text: "doubtful and hesitant" },
            { letter: "C", text: "bitter and accusing" },
            { letter: "D", text: "playful and lighthearted" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 10 · Vocabulary (level 1) · art museum ───────────── */
    {
      id: "g11-rv-c102-varnish",
      family: "G11",
      title: "A Window of Blue",
      kind: "Vocabulary · 11.RV",
      blurb: "A summer intern in a museum conservation lab learns why cleaning a painting takes all week.",
      level: 1,
      passage:
        "<p>" + N(1) + "On his first morning as a summer intern in the conservation lab, Rafael Nunes expected to see paintings being repaired. " +
        N(2) + "Instead, he spent three hours watching Dr. Adaeze Okonkwo study one corner of a landscape through a magnifying visor without touching it at all. " +
        N(3) + "The painting, a small river scene about two hundred years old, had come to the lab because its colors had begun to <strong>deteriorate</strong>; the greens had dulled to brown, and the sky had turned the color of weak tea.</p>" +
        "<p>" + N(4) + "\"Most of what you are seeing isn't the paint,\" Dr. Okonkwo explained. " +
        N(5) + "\"It's varnish.\" " +
        N(6) + "A painter usually brushed a clear coat over a finished work to protect it, she said, but over many decades that coat yellows and darkens. " +
        N(7) + "What had once been <strong>translucent</strong>, letting light pass through to the colors beneath, now sat over the picture like a dirty window.</p>" +
        "<p>" + N(8) + "Before removing anything, she photographed the painting under <strong>infrared</strong> light, which can reveal what lies beneath the visible surface. " +
        N(9) + "On the screen, Rafael could <strong>discern</strong> faint lines that were invisible to the naked eye; he could just barely make out the sketch of a second boat that the painter had drawn and then painted over. " +
        N(10) + "\"We don't remove that,\" she said. " +
        N(11) + "\"That's the artist changing his mind. It belongs to the painting.\"</p>" +
        "<p>" + N(12) + "The cleaning itself was slow. " +
        N(13) + "Dr. Okonkwo rolled a cotton swab, no bigger than a grain of rice at the tip, across a patch of sky smaller than a postage stamp. " +
        N(14) + "She used a mild <strong>solvent</strong>, a liquid chosen because it would dissolve the old varnish without disturbing the paint underneath. " +
        N(15) + "Every few seconds, she checked the swab. " +
        N(16) + "Yellow meant varnish. " +
        N(17) + "Blue meant stop.</p>" +
        "<p>" + N(18) + "\"Why so careful?\" Rafael asked, after the first hour had produced a cleaned area the size of his thumbnail. " +
        N(19) + "She set down the swab. " +
        N(20) + "\"Because almost nothing we do here should be <strong>irreversible</strong>. " +
        N(21) + "If someone in a hundred years has better tools, they should be able to undo my work and do it better. " +
        N(22) + "The day I make a change that can't be taken back, I've stopped being a conservator and started being a second artist, and nobody hired me for that.\"</p>" +
        "<p>" + N(23) + "By the end of the week, a window of clear blue had opened in the upper corner of the sky. " +
        N(24) + "It was the color, Dr. Okonkwo said, that the painter had actually seen. " +
        N(25) + "Rafael found himself leaning in to look at it the way he had once leaned toward a phone screen, and he realized that patience was a kind of looking, too.</p>",
      claims: [
        {
          id: "deteriorate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word deteriorate most nearly means to —",
          choices: [
            { letter: "A", text: "grow worse in condition" },
            { letter: "B", text: "change into new colors" },
            { letter: "C", text: "become more valuable" },
            { letter: "D", text: "fade from public memory" }
          ],
          correct: "A"
        },
        {
          id: "translucent",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word translucent in sentence 7 joins the prefix trans-, meaning through, with the root luc, meaning light, as in lucid. Translucent therefore describes something that —",
          choices: [
            { letter: "A", text: "gives off a light of its own" },
            { letter: "B", text: "reflects light like a mirror" },
            { letter: "C", text: "allows light to pass through it" },
            { letter: "D", text: "blocks light from reaching it" }
          ],
          correct: "C"
        },
        {
          id: "infrared",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The prefix infra- in infrared (sentence 8) means below or beneath. This prefix suggests that infrared light —",
          choices: [
            { letter: "A", text: "is a brighter shade of ordinary red light" },
            { letter: "B", text: "falls below red on the spectrum, beyond what eyes see" },
            { letter: "C", text: "is produced only by lamps placed under a painting" },
            { letter: "D", text: "is the first color visible after sunrise" }
          ],
          correct: "B"
        },
        {
          id: "discern",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which words from sentence 9 best help the reader understand the meaning of discern?",
          choices: [
            { letter: "A", text: "On the screen, Rafael could" },
            { letter: "B", text: "faint lines that were invisible" },
            { letter: "C", text: "drawn and then painted over" },
            { letter: "D", text: "could just barely make out" }
          ],
          correct: "D"
        },
        {
          id: "solvent",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 14, the explanation after the comma shows that a solvent is —",
          choices: [
            { letter: "A", text: "a liquid that dissolves a substance" },
            { letter: "B", text: "a protective coat brushed over paint" },
            { letter: "C", text: "a tool for measuring a painting's age" },
            { letter: "D", text: "a cloth used to polish a frame" }
          ],
          correct: "A"
        },
        {
          id: "irreversible",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word irreversible in sentence 20 is built from the prefix ir-, the root revers, and the suffix -ible. Together these word parts mean —",
          choices: [
            { letter: "A", text: "able to be repeated many times" },
            { letter: "B", text: "not able to be turned back or undone" },
            { letter: "C", text: "needing to be checked again later" },
            { letter: "D", text: "turned in the opposite direction" }
          ],
          correct: "B"
        },
        {
          id: "secondartist",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 22, Dr. Okonkwo's phrase a second artist most nearly refers to someone who —",
          choices: [
            { letter: "A", text: "assists the original painter in the studio" },
            { letter: "B", text: "copies famous paintings for practice" },
            { letter: "C", text: "earns less money than a conservator" },
            { letter: "D", text: "adds personal changes to another's work" }
          ],
          correct: "D"
        },
        {
          id: "window",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 7, comparing the old varnish to a dirty window helps the reader understand that the varnish —",
          choices: [
            { letter: "A", text: "was applied by a careless painter" },
            { letter: "B", text: "makes the painting look like glass" },
            { letter: "C", text: "hides the true colors beneath it" },
            { letter: "D", text: "can be wiped off in a few minutes" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 11 · Vocabulary (level 2) · archaeology dig ───────────── */
    {
      id: "g11-rv-c102-terrace",
      family: "G11",
      title: "Written in Pencil",
      kind: "Vocabulary · 11.RV",
      blurb: "On a river terrace dig, a student learns why every date on the site map is written in pencil.",
      level: 2,
      passage:
        "<p>" + N(1) + "The field director, Dr. Haruki Sato, liked to say that every trench begins with a question and ends with a better one. " +
        N(2) + "On the river terrace outside the small town of Marrow Creek, the question had seemed simple: had people lived on this bend of the river long before the town was founded? " +
        N(3) + "Wren Callahan, who had joined the dig through her school's summer science program, spent her first week learning to <strong>excavate</strong> the way professionals did, not by digging holes but by scraping away the soil in thin, level sheets, a few centimeters at a time.</p>" +
        "<p>" + N(4) + "The ground fought back. " +
        N(5) + "Each spring flood had left behind a fresh blanket of <strong>sediment</strong>, the sand, silt, and fine clay carried downstream and dropped when the water slowed, so the terrace was built of dozens of thin layers stacked like the pages of a closed book. " +
        N(6) + "By the second week, Wren's team had reached a dark band about a meter down, scattered with charcoal and flakes of chert, a hard stone that early toolmakers chipped into blades.</p>" +
        "<p>" + N(7) + "The excitement in camp was immediate, and so was Dr. Sato's caution. " +
        N(8) + "\"Write down what you see, not what you hope,\" he told them at the evening meeting. " +
        N(9) + "A single hearth, he pointed out, could mean a village, a hunting camp used for one night, or a fire lit by a traveler who never came back. " +
        N(10) + "Any claim about which it was would be <strong>conjecture</strong>, not proof, until the lab returned dates on the charcoal and the team had uncovered more of the layer.</p>" +
        "<p>" + N(11) + "Wren found this frustrating at first. " +
        N(12) + "She had imagined that archaeology produced answers the way a vending machine produced snacks. " +
        N(13) + "Instead, the team's <strong>chronology</strong>, the timeline they were assembling of when each layer had formed, kept shifting as new evidence came in. " +
        N(14) + "The labels on the site map were written in pencil for a reason: every date was <strong>provisional</strong>, accepted for now but open to change.</p>" +
        "<p>" + N(15) + "Near the end of the season, the radiocarbon results arrived. " +
        N(16) + "The charcoal was roughly nine hundred years old, older than anyone had guessed. " +
        N(17) + "That evening, Wren expected a celebration. " +
        N(18) + "Dr. Sato only smiled and tapped the map with his pencil. " +
        N(19) + "\"Good,\" he said. " +
        N(20) + "\"Now we know which question to ask next summer.\"</p>" +
        "<p>" + N(21) + "Wren wrote the date on the map herself, lightly, the way he had taught her. " +
        N(22) + "She was beginning to understand that the pencil was not a sign of doubt. " +
        N(23) + "It was a sign that the work, like the river, was still moving.</p>",
      claims: [
        {
          id: "excavate",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word excavate in sentence 3 combines the prefix ex-, meaning out, with the root cav, meaning hollow, as in cave and cavity. Excavate therefore most nearly means to —",
          choices: [
            { letter: "A", text: "fill a hole with fresh soil" },
            { letter: "B", text: "hollow out by removing earth" },
            { letter: "C", text: "map the surface of the land" },
            { letter: "D", text: "explore the inside of a cave" }
          ],
          correct: "B"
        },
        {
          id: "sediment",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which phrase from sentence 5 best helps the reader understand the meaning of sediment?",
          choices: [
            { letter: "A", text: "Each spring flood had left behind" },
            { letter: "B", text: "a fresh blanket left by the water" },
            { letter: "C", text: "stacked like the pages of a closed book" },
            { letter: "D", text: "the sand, silt, and fine clay carried downstream" }
          ],
          correct: "D"
        },
        {
          id: "conjecture",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 10, the contrast between conjecture and proof shows that conjecture means —",
          choices: [
            { letter: "A", text: "a guess based on incomplete evidence" },
            { letter: "B", text: "a fact confirmed by laboratory tests" },
            { letter: "C", text: "an argument between team members" },
            { letter: "D", text: "a report written at the end of a dig" }
          ],
          correct: "A"
        },
        {
          id: "chronology",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word chronology in sentence 13 contains the Greek root chron, also found in chronic and synchronize. The root chron refers to —",
          choices: [
            { letter: "A", text: "earth" },
            { letter: "B", text: "order" },
            { letter: "C", text: "time" },
            { letter: "D", text: "study" }
          ],
          correct: "C"
        },
        {
          id: "provisional",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 14, the words after provisional show that a provisional date is one that is —",
          choices: [
            { letter: "A", text: "too old to be measured accurately" },
            { letter: "B", text: "temporary and subject to revision" },
            { letter: "C", text: "approved by the field director" },
            { letter: "D", text: "copied from an earlier site map" }
          ],
          correct: "B"
        },
        {
          id: "foughtback",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 4, the statement that the ground fought back most nearly means that —",
          choices: [
            { letter: "A", text: "the site's layers made the work slow and difficult" },
            { letter: "B", text: "a flood damaged the trench during the first week" },
            { letter: "C", text: "the landowner tried to stop the excavation" },
            { letter: "D", text: "the students argued about where to dig" }
          ],
          correct: "A"
        },
        {
          id: "vending",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 12, Wren's comparison of archaeology to a vending machine suggests that she had expected —",
          choices: [
            { letter: "A", text: "the work to cost a great deal of money" },
            { letter: "B", text: "the artifacts to be stored in glass cases" },
            { letter: "C", text: "the team to share food at every meeting" },
            { letter: "D", text: "quick, automatic answers to her questions" }
          ],
          correct: "D"
        },
        {
          id: "seehope",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 8, Dr. Sato's instruction to write down what you see, not what you hope, most nearly means that the students should —",
          choices: [
            { letter: "A", text: "keep their personal opinions in a separate diary" },
            { letter: "B", text: "write only when Dr. Sato is present to check" },
            { letter: "C", text: "record observations without letting wishes shape them" },
            { letter: "D", text: "stop hoping to find anything important at the site" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 12 · Paired texts (level 2) · student filmmaking ───────────── */
    {
      id: "g11-dsr-c102-release",
      family: "G11",
      title: "Permission to Film",
      kind: "Paired texts · 11.DSR",
      blurb: "A youth film festival's rules on consent, and a student filmmaker's story about the shot she cut.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Filming Real People: What Every Student Documentarian Should Know</strong></p>" +
        "<p>" + N(1) + "A documentary borrows something valuable from the people in it: their faces, their voices, and sometimes their private moments. " +
        N(2) + "For that reason, the Riverbend Youth Film Festival requires every documentary entry to include a signed release form from each person who appears on camera in an identifiable way. " +
        N(3) + "A release form is a short written agreement in which a person gives permission to be filmed and to have that footage shown publicly. " +
        N(4) + "For participants under eighteen, a parent or guardian must also sign. " +
        N(5) + "People who appear only briefly in the background of public places, such as a crowd at a parade, do not need forms, but anyone who speaks, is interviewed, or is the clear focus of a shot does. " +
        N(6) + "Getting permission is more than a legal step. " +
        N(7) + "Filmmakers should explain honestly what the film is about and where it will be shown before asking anyone to sign. " +
        N(8) + "Consent obtained by leaving out important details is not really consent at all. " +
        N(9) + "Finally, remember that permission can be withdrawn. " +
        N(10) + "If a participant asks to be removed before the festival deadline, the filmmaker must edit that person out. " +
        N(11) + "Entries missing required forms will be disqualified, regardless of their quality. " +
        N(12) + "The best documentaries are built on trust, and trust begins with asking.</p>" +
        "<p><strong>Text 2 — The Shot I Cut, from a student filmmaker's blog</strong></p>" +
        "<p>" + N(13) + "My documentary was about my aunt's dumpling shop in the hour before it opens, when the whole kitchen moves like a single machine. " +
        N(14) + "My favorite shot showed a cook named Mr. Ferreira folding dumplings so fast his hands blurred, then pausing to wipe his eyes with his sleeve. " +
        N(15) + "I thought it was the emotional heart of the film. " +
        N(16) + "I had my aunt's permission to film in the shop, and I assumed that covered everyone in it. " +
        N(17) + "Two days before the festival deadline, I showed Mr. Ferreira the cut. " +
        N(18) + "He watched without saying anything, and then he asked me, very politely, to take out the part where he wiped his eyes. " +
        N(19) + "He had been chopping onions, he said, but people would not know that, and he did not want strangers deciding he was sad. " +
        N(20) + "I argued a little and told him it was the best moment in the film. " +
        N(21) + "He said that might be true, but it was still his face. " +
        N(22) + "I cut it. " +
        N(23) + "The film is weaker in one spot and stronger in a way I didn't expect: everyone in it now knows exactly how they look, and they all came to the screening. " +
        N(24) + "I used to think permission was paperwork. " +
        N(25) + "Now I think it's the first scene, the one nobody sees.</p>",
      claims: [
        {
          id: "central",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is central to both the festival guide in Text 1 and the blog post in Text 2?",
          choices: [
            { letter: "A", text: "People in a documentary have a right to control how they are shown." },
            { letter: "B", text: "Documentaries about food businesses are the most popular entries." },
            { letter: "C", text: "Student filmmakers should avoid filming anyone who is emotional." },
            { letter: "D", text: "Festival rules matter less than the quality of a finished film." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the two texts about filming consent differ?",
          choices: [
            { letter: "A", text: "Text 1 tells a personal story, while Text 2 lists official rules." },
            { letter: "B", text: "Text 1 opposes release forms, while Text 2 supports them." },
            { letter: "C", text: "Text 1 states general rules, while Text 2 shows one person learning why they matter." },
            { letter: "D", text: "Text 1 is written for parents, while Text 2 is written for judges." }
          ],
          correct: "C"
        },
        {
          id: "assume",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Based on Text 1, the filmmaker's assumption in sentence 16 was mistaken because Mr. Ferreira —",
          choices: [
            { letter: "A", text: "was under eighteen and needed a guardian's signature" },
            { letter: "B", text: "appeared only in the background of a public place" },
            { letter: "C", text: "had already withdrawn from the film before it was shot" },
            { letter: "D", text: "was the clear focus of a shot and needed his own form" }
          ],
          correct: "D"
        },
        {
          id: "selecttwo",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences from Text 1 that most directly explain why the blogger had to honor Mr. Ferreira's request.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the tone of the festival guide, the tone of the blog post is more —",
          choices: [
            { letter: "A", text: "formal and instructional" },
            { letter: "B", text: "personal and reflective" },
            { letter: "C", text: "angry and defensive" },
            { letter: "D", text: "neutral and technical" }
          ],
          correct: "B"
        },
        {
          id: "firstscene",
          sol: "11.DSR.B",
          sub: "11.DSR.B.1",
          stem: "The blogger's closing statement that permission is the first scene, the one nobody sees, is best read as —",
          choices: [
            { letter: "A", text: "a complaint that release forms slow down filming" },
            { letter: "B", text: "a plan to open her next film with a signing scene" },
            { letter: "C", text: "an admission that she never filed the forms" },
            { letter: "D", text: "a recognition that consent is a film's hidden foundation" }
          ],
          correct: "D"
        },
        {
          id: "org1",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How is Text 1, the festival guide, mainly organized?",
          choices: [
            { letter: "A", text: "It states a requirement, explains who it covers, then adds ethics and consequences." },
            { letter: "B", text: "It tells the story of one documentary from filming to screening." },
            { letter: "C", text: "It compares the festival's rules with those of other festivals." },
            { letter: "D", text: "It presents a problem and then lists several possible solutions." }
          ],
          correct: "A"
        },
        {
          id: "releaseform",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In Text 1, the explanation in sentence 3 shows that a release form is —",
          choices: [
            { letter: "A", text: "a ticket to attend the festival screening" },
            { letter: "B", text: "a list of rules for festival judges" },
            { letter: "C", text: "written permission to be filmed and shown" },
            { letter: "D", text: "a notice that a film has been disqualified" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 13 · Paired texts (level 3) · art museum and railroads ───────────── */
    {
      id: "g11-dsr-c102-stationmural",
      family: "G11",
      title: "The Gap Where the Train Was",
      kind: "Paired texts · 11.DSR",
      blurb: "A curator explains why a damaged station mural was left unfinished, and a visitor writes back.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the Curator: Why We Left the Gaps</strong></p>" +
        "<p>" + N(1) + "When the old railway station in San Telmo was demolished, conservators saved what they could of the mural that had covered its waiting-room wall for nearly seventy years. " +
        N(2) + "About two thirds of the painting survived, removed in large panels and carefully reattached to a new support. " +
        N(3) + "The rest had crumbled with the plaster beneath it. " +
        N(4) + "Visitors to Gallery 4 will notice that the missing areas have been filled with plain, toned plaster rather than repainted. " +
        N(5) + "This was a deliberate decision. " +
        N(6) + "Modern conservation follows a principle sometimes summarized as honest repair: anything added to a damaged work should be distinguishable from the original upon close inspection. " +
        N(7) + "We do possess photographs of the complete mural, but they are black and white, and several were taken at angles that distort the figures. " +
        N(8) + "Any repainting based on them would require our staff to invent colors and details the original artist never chose. " +
        N(9) + "The result might look whole, yet it would quietly mix our guesses with her decisions in a way future viewers could not untangle. " +
        N(10) + "We have instead placed the photographs on the wall beside the mural, so that visitors can imagine the missing sections for themselves. " +
        N(11) + "We believe a visible gap tells the truth about the painting's history: it survived, but not entirely.</p>" +
        "<p><strong>Text 2 — A Letter to the Museum</strong></p>" +
        "<p>" + N(12) + "I am writing about the station mural in Gallery 4. " +
        N(13) + "My grandfather worked as a porter at the San Telmo station for thirty years, and he used to tell me that the painted train on that wall was the first thing travelers saw when they came home. " +
        N(14) + "Last Sunday I brought him to see it. " +
        N(15) + "He found the platform, the clock, and the women selling oranges. " +
        N(16) + "Then he stood for a long time in front of the gray patch where the train used to be. " +
        N(17) + "I understand the reasons for leaving the gaps; your wall text explains them clearly. " +
        N(18) + "But I think the museum is protecting the painting's honesty at the cost of its meaning. " +
        N(19) + "The train was not a detail. " +
        N(20) + "It was the reason the mural existed. " +
        N(21) + "My grandfather does not need to inspect the brushstrokes to know which parts are new. " +
        N(22) + "He needs to see the train arrive, the way he did every evening for thirty years. " +
        N(23) + "Perhaps a careful outline, or a projection that could be switched off, would respect both your principles and our memory. " +
        N(24) + "The people who waited in that room are still alive, and some of us would like to see the painting the way they did, at least once.</p>",
      claims: [
        {
          id: "agree",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "On which point do the curator in Text 1 and the letter writer in Text 2 agree?",
          choices: [
            { letter: "A", text: "The black-and-white photographs should be removed from the gallery." },
            { letter: "B", text: "The surviving mural matters and deserves careful treatment." },
            { letter: "C", text: "The missing train should be repainted from the photographs." },
            { letter: "D", text: "The station should never have been torn down." }
          ],
          correct: "B"
        },
        {
          id: "disagree",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes the central disagreement between the curator and the letter writer?",
          choices: [
            { letter: "A", text: "whether honesty to the original should outweigh the image's meaning" },
            { letter: "B", text: "whether the mural should be moved to a different gallery" },
            { letter: "C", text: "whether the photographs of the mural are authentic" },
            { letter: "D", text: "whether the museum should charge visitors to see the mural" }
          ],
          correct: "A"
        },
        {
          id: "outline",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "The suggestion in sentence 23 of the letter responds to the curator's concern mainly by —",
          choices: [
            { letter: "A", text: "asking the museum to hire the original artist's family" },
            { letter: "B", text: "proposing that the gaps be painted in full color" },
            { letter: "C", text: "suggesting that the photographs be enlarged instead" },
            { letter: "D", text: "offering additions that stay clearly separate or removable" }
          ],
          correct: "D"
        },
        {
          id: "leftout",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail from Text 1 does the letter writer leave out that shows the museum has already partly answered her wish?",
          choices: [
            { letter: "A", text: "The mural hung in the station for nearly seventy years." },
            { letter: "B", text: "Photographs of the full mural hang beside it." },
            { letter: "C", text: "The missing areas are filled with toned plaster." },
            { letter: "D", text: "About two thirds of the painting survived." }
          ],
          correct: "B"
        },
        {
          id: "challenge",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences from Text 2 that most directly challenge the curator's claim in sentence 11 that a visible gap tells the truth.",
          choices: [
            { letter: "A", text: "Sentence 15" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "lettertone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the curator's tone, the tone of the letter about the station mural is more —",
          choices: [
            { letter: "A", text: "personal and urgent, though still respectful" },
            { letter: "B", text: "technical and detached, like a report" },
            { letter: "C", text: "sarcastic and dismissive of the museum" },
            { letter: "D", text: "uncertain and apologetic about writing" }
          ],
          correct: "A"
        },
        {
          id: "purpose1",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The curator's primary purpose in Text 1 is to —",
          choices: [
            { letter: "A", text: "ask visitors to donate money for repainting" },
            { letter: "B", text: "describe the history of the San Telmo railway" },
            { letter: "C", text: "justify a display choice visitors might question" },
            { letter: "D", text: "announce that the mural will soon be removed" }
          ],
          correct: "C"
        },
        {
          id: "distinguishable",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word distinguishable in sentence 6 is formed from the verb distinguish and the suffix -able. The word therefore describes something that —",
          choices: [
            { letter: "A", text: "has been honored with an award" },
            { letter: "B", text: "is impossible to repair fully" },
            { letter: "C", text: "was made by a famous artist" },
            { letter: "D", text: "can be told apart from something else" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
