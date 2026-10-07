/* SOL Labyrinth — Grade 10 long packs (expansion file 79): mountain hiking, app design and coding, photography and
 * a school newspaper. Stories, articles, vocabulary, paired texts, a poem, a scene, a functional text and an
 * argument (390-520 words). Original text only. Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 · Literary · mountain hiking */
    {
      id: "g10-rl-c79-turnaround",
      family: "G10",
      title: "Turnaround Time",
      kind: "Literary · 10.RL",
      blurb: "Three summers of waiting, three hundred feet from the top, and a card Ravi is finally allowed to read.",
      level: 2,
      passage:
        "<p>" + N(1) + "Ravi had been staring at the summit of Gray Shoulder for three summers, ever since his aunt Meera first pointed it out from the parking lot and said, \"Not yet.\" " +
        N(2) + "This year she finally said yes, and they left the trailhead at five in the morning with headlamps, two liters of water each, and a laminated card in Meera's chest pocket that she would not let him read.</p>" +
        "<p>" + N(3) + "The first two miles climbed through spruce so thick that the dawn arrived only as a gray rumor between the trunks. " +
        N(4) + "Ravi set the pace, and he set it fast. " +
        N(5) + "Every time Meera called for a water break, he stood with his hands on his hips, bouncing slightly, like a runner waiting for a starting gun. " +
        N(6) + "\"The mountain isn't going anywhere,\" she said once. " +
        N(7) + "\"Neither am I, if we keep stopping,\" he answered, and she laughed, which annoyed him more than an argument would have.</p>" +
        "<p>" + N(8) + "Above the trees, the trail turned to switchbacks cut into loose stone, and the wind found them. " +
        N(9) + "By ten o'clock they could see the summit cairn, a small gray stack against a sky that was no longer entirely blue. " +
        N(10) + "To the west, a bank of cloud had swallowed the next ridge and was moving toward them with the patience of something that had done this many times before. " +
        N(11) + "Meera stopped, checked her watch, and pulled out the laminated card.</p>" +
        "<p>" + N(12) + "\"Turnaround time,\" she said, and handed it to him at last. " +
        N(13) + "In her square handwriting it read: Gray Shoulder, 10:15. Summit optional. Trailhead mandatory.</p>" +
        "<p>" + N(14) + "Ravi looked at the cairn, perhaps three hundred vertical feet above them, twenty minutes of scrambling at most. " +
        N(15) + "\"It's ten-oh-five,\" he said. \"We have ten minutes.\"</p>" +
        "<p>" + N(16) + "\"We have ten minutes to decide,\" Meera corrected him. \"The weather has already decided.\"</p>" +
        "<p>" + N(17) + "He wanted to argue, and for a moment he did, listing the miles they had come, the alarm he had set for four, the three summers. " +
        N(18) + "Meera listened without interrupting, the way she listened to the radio forecast, as if every word deserved to be weighed. " +
        N(19) + "Then the first cold drops hit the rocks around them, dark coins on the pale stone, and the cloud took the cairn while he was still talking.</p>" +
        "<p>" + N(20) + "They descended in a hard, steady rain, and twice on the slick switchbacks Ravi caught himself on his hands. " +
        N(21) + "Near the tree line they passed two hikers in cotton sweatshirts heading up, and Meera stopped them and talked quietly until they turned around too. " +
        N(22) + "Back at the car, soaked and shivering, Ravi expected to feel cheated. " +
        N(23) + "Instead, watching the mountain disappear entirely behind the gray, he felt something closer to relief, and under it, a strange kind of pride.</p>" +
        "<p>" + N(24) + "That night he took an index card from his desk and wrote his own turnaround time for a hike he had not even planned yet. " +
        N(25) + "He did not know when he would need it, but he clipped it to the strap of his pack so that it would be there before he was.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme developed across Ravi's story?",
          choices: [
            { letter: "A", text: "Hard work and early starts are always rewarded in the end." },
            { letter: "B", text: "Knowing when to stop can be a greater success than reaching a goal." },
            { letter: "C", text: "Older relatives usually understand nature better than the young do." },
            { letter: "D", text: "Weather in the mountains is impossible for hikers to predict." }
          ],
          correct: "B"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict of Ravi's climb is best described as a struggle between —",
          choices: [
            { letter: "A", text: "Ravi and the two hikers who are heading up the trail" },
            { letter: "B", text: "Meera's trust in the forecast and her own doubts" },
            { letter: "C", text: "Ravi's fear of heights and his pride in front of Meera" },
            { letter: "D", text: "Ravi's desire for the summit and the danger of the storm" }
          ],
          correct: "D"
        },
        {
          id: "ravi",
          sol: "10.RL.1.C",
          stem: "In sentences 4 through 7, Ravi is best described as —",
          choices: [
            { letter: "A", text: "impatient and eager to keep moving" },
            { letter: "B", text: "nervous about the steep trail ahead" },
            { letter: "C", text: "bored by his aunt's quiet company" },
            { letter: "D", text: "unsure which route leads to the top" }
          ],
          correct: "A"
        },
        {
          id: "cloud",
          sol: "10.RL.2.A",
          stem: "In sentence 10, describing the cloud as moving with the patience of something that had done this many times before suggests that the storm is —",
          choices: [
            { letter: "A", text: "slow enough for the hikers to outrun" },
            { letter: "B", text: "unlikely to reach the summit at all" },
            { letter: "C", text: "steady, familiar, and certain to arrive" },
            { letter: "D", text: "a rare event on Gray Shoulder" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in Ravi's story is most ironic?",
          choices: [
            { letter: "A", text: "Meera carries a laminated card that she will not let Ravi read." },
            { letter: "B", text: "Two hikers in cotton sweatshirts are heading up as the rain falls." },
            { letter: "C", text: "Ravi expects to feel cheated at the car but feels relief and pride." },
            { letter: "D", text: "Ravi sets a fast pace through the spruce during the first two miles." }
          ],
          correct: "C"
        },
        {
          id: "card",
          sol: "10.RL.3.A",
          stem: "The author holds back the words on Meera's laminated card until sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "build curiosity so the rule lands at the key moment" },
            { letter: "B", text: "show that Meera forgot she had written the card" },
            { letter: "C", text: "suggest that Ravi could not read her handwriting" },
            { letter: "D", text: "explain why the hike began at five in the morning" }
          ],
          correct: "A"
        },
        {
          id: "weighed",
          sol: "10.RV.1.B",
          stem: "In sentence 18, the word weighed most nearly means —",
          choices: [
            { letter: "A", text: "lifted up high" },
            { letter: "B", text: "measured on a scale" },
            { letter: "C", text: "quickly ignored" },
            { letter: "D", text: "carefully considered" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in sentence 19, the cold drops, the dark coins on pale stone and the cloud taking the cairn, mainly create a mood of —",
          choices: [
            { letter: "A", text: "joyful celebration" },
            { letter: "B", text: "sudden finality" },
            { letter: "C", text: "quiet boredom" },
            { letter: "D", text: "playful mystery" }
          ],
          correct: "B"
        }
      ]
    },

    /* 2 · Literary · photography */
    {
      id: "g10-rl-c79-forty-years",
      family: "G10",
      title: "Forty Years",
      kind: "Literary · 10.RL",
      blurb: "Kofi wants one perfect portrait of his grandmother's tailoring shop before it closes. She will not sit still.",
      level: 3,
      passage:
        "<p>" + N(1) + "For the photography elective's final project, Kofi Mensah chose the one subject he was sure he understood: his grandmother's tailoring shop on Carver Street, which would close for good at the end of May. " +
        N(2) + "He imagined a single portrait, Nana Akosua seated at her sewing machine, chin lifted, the bolts of bright wax-print cloth behind her like a stage curtain. " +
        N(3) + "He would call it Forty Years, and it would be perfect.</p>" +
        "<p>" + N(4) + "The problem was that his grandmother would not sit still. " +
        N(5) + "Each afternoon he set up the borrowed tripod beside the cutting table, measured the light from the front window with the meter Ms. Lindqvist had lent him, and asked her to hold one pose. " +
        N(6) + "Each afternoon she held it for perhaps four seconds before a customer came in, or the kettle clicked off, or she noticed a crooked seam on a hanging jacket and rose to fix it, apologizing over her shoulder. " +
        N(7) + "\"Take the picture when I'm finished,\" she said, but she was never finished.</p>" +
        "<p>" + N(8) + "After two weeks Kofi had forty frames of an empty chair, a half-turned face, an elbow leaving the edge of the image. " +
        N(9) + "He developed them anyway, because the assignment required a contact sheet, and he laid the strips on the light table in the school darkroom with the grim expression of someone reading a bad report card. " +
        N(10) + "Ms. Lindqvist leaned over his shoulder, said nothing for a long moment, then tapped a single frame with the end of her pencil.</p>" +
        "<p>" + N(11) + "It was one he had nearly thrown away. " +
        N(12) + "His shutter had been too slow, and his grandmother had been moving, so the picture showed only her hands, blurred into pale arcs above a sleeve of blue-and-gold cloth, the needle a bright streak between them. " +
        N(13) + "The cloth itself was sharp, every thread visible; the hands that held it had turned into motion.</p>" +
        "<p>" + N(14) + "\"That,\" Ms. Lindqvist said, \"is forty years.\"</p>" +
        "<p>" + N(15) + "Kofi wanted to explain that it was a mistake, that the real portrait had simply not happened yet. " +
        N(16) + "But the longer he looked, the more the still, careful portrait in his head seemed to belong to someone else's grandmother, a woman who had time to sit. " +
        N(17) + "His own had never been that woman. " +
        N(18) + "She had raised three children and sewn half the graduation suits on Carver Street by refusing, exactly, to hold still.</p>" +
        "<p>" + N(19) + "He printed the blurred frame at eleven by fourteen inches and hung it in the spring show beside his classmates' crisp landscapes and carefully lit faces. " +
        N(20) + "On opening night, people kept stopping in front of it longer than he expected, some of them leaning close as if they might hear the machine. " +
        N(21) + "His grandmother came late, still wearing her measuring tape around her neck, and studied the print with her head tilted. " +
        N(22) + "\"You made me look busy,\" she said at last, and Kofi could tell from the way she smiled that it was the highest compliment she knew how to give.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme that Kofi's story develops?",
          choices: [
            { letter: "A", text: "Careful planning is the key to every successful project." },
            { letter: "B", text: "Family businesses rarely survive changes in a neighborhood." },
            { letter: "C", text: "A true portrait may capture who someone is, not how they pose." },
            { letter: "D", text: "Teachers should let students choose their own project subjects." }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in Kofi's photography project?",
          choices: [
            { letter: "A", text: "sentence 10" },
            { letter: "B", text: "sentence 5" },
            { letter: "C", text: "sentence 19" },
            { letter: "D", text: "sentence 2" }
          ],
          correct: "A"
        },
        {
          id: "nana",
          sol: "10.RL.1.C",
          stem: "Sentences 16 through 18 show that Kofi comes to see Nana Akosua as someone whose —",
          choices: [
            { letter: "A", text: "patience with her customers has grown thin" },
            { letter: "B", text: "shop has become too busy to manage alone" },
            { letter: "C", text: "pride keeps her from asking her family for help" },
            { letter: "D", text: "constant work is central to who she is" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in Kofi's story is most ironic?",
          choices: [
            { letter: "A", text: "Kofi borrows a light meter from his teacher to measure the window light." },
            { letter: "B", text: "The frame Kofi nearly threw away becomes the image that defines his project." },
            { letter: "C", text: "The shop on Carver Street is closing for good at the end of the month of May." },
            { letter: "D", text: "His classmates display crisp landscapes and carefully lit faces at the show." }
          ],
          correct: "B"
        },
        {
          id: "short",
          sol: "10.RL.3.A",
          stem: "The author gives Ms. Lindqvist's remark in sentence 14 a paragraph of its own, right after the blurred frame is described, mainly to —",
          choices: [
            { letter: "A", text: "echo Kofi's planned title and recast the blur as his true portrait" },
            { letter: "B", text: "show that Ms. Lindqvist is too busy to explain her grade fully" },
            { letter: "C", text: "hint that the grandmother has worked in her shop for too long" },
            { letter: "D", text: "reveal that Kofi had already chosen a different title for the print" }
          ],
          correct: "A"
        },
        {
          id: "grim",
          sol: "10.RV.1.C",
          stem: "As it is used in sentence 9 to describe Kofi at the light table, the word grim most nearly means —",
          choices: [
            { letter: "A", text: "cruel and harsh" },
            { letter: "B", text: "tired and sleepy" },
            { letter: "C", text: "gloomy and serious" },
            { letter: "D", text: "frightened and pale" }
          ],
          correct: "C"
        },
        {
          id: "curtain",
          sol: "10.RL.2.A",
          stem: "In sentence 2, comparing the bolts of cloth to a stage curtain suggests that Kofi first imagines the portrait as —",
          choices: [
            { letter: "A", text: "a record of the shop's daily business" },
            { letter: "B", text: "a formal, staged performance" },
            { letter: "C", text: "a sad farewell to the neighborhood" },
            { letter: "D", text: "an advertisement for the shop's fabrics" }
          ],
          correct: "B"
        },
        {
          id: "motion",
          sol: "10.RV.1.D",
          stem: "In sentence 13, the author says the hands had turned into motion rather than simply calling them blurry. Compared with blurry, turned into motion suggests the hands are —",
          choices: [
            { letter: "A", text: "out of focus by mistake" },
            { letter: "B", text: "hidden from the viewer" },
            { letter: "C", text: "weak and unsteady" },
            { letter: "D", text: "lively and purposeful" }
          ],
          correct: "D"
        }
      ]
    },

    /* 3 · Literary · school newspaper */
    {
      id: "g10-rl-c79-headline",
      family: "G10",
      title: "Letters an Inch Tall",
      kind: "Literary · 10.RL",
      blurb: "Hana's first big mistake as editor is printed in the largest type on the front page.",
      level: 1,
      passage:
        "<p>" + N(1) + "Hana Kim had been editor of the Westbrook Ledger for exactly three issues when she made her first real mistake. " +
        N(2) + "The October issue had a front-page profile of Mr. Abdel Farouk, who had run the school's cafeteria kitchen for twenty-two years. " +
        N(3) + "Hana had interviewed him herself. " +
        N(4) + "She had written the story herself. " +
        N(5) + "And in the headline, in letters an inch tall, she had spelled his name wrong.</p>" +
        "<p>" + N(6) + "She noticed it on Friday morning, when the stacks of fresh papers were already sitting in every hallway. " +
        N(7) + "FAROOK, the headline said. " +
        N(8) + "The story below it spelled his name correctly eleven times, which somehow made the headline worse.</p>" +
        "<p>" + N(9) + "At lunch she sat with the newspaper staff at their usual table near the windows. " +
        N(10) + "\"Nobody reads headlines that closely,\" said Marcus, the sports writer, trying to help. " +
        N(11) + "\"We could fix it online and just not mention it,\" said Priya, who ran the website. " +
        N(12) + "Hana pushed her tray away. " +
        N(13) + "She knew they meant well. " +
        N(14) + "She also knew that Mr. Farouk had told her in the interview that his father had changed the family's spelling when they arrived in this country, and that he had spent his whole life correcting people.</p>" +
        "<p>" + N(15) + "After school she went to the kitchen. " +
        N(16) + "Mr. Farouk was wiping down the steel counters, and a copy of the Ledger was taped to the wall above the dish station. " +
        N(17) + "Hana's face went hot. " +
        N(18) + "\"I spelled your name wrong,\" she said, before she could lose her nerve. \"In the biggest letters on the page. I'm really sorry.\"</p>" +
        "<p>" + N(19) + "Mr. Farouk looked at the headline, then at her. " +
        N(20) + "\"You know how many times this has happened to me?\" he asked. " +
        N(21) + "Hana shook her head. " +
        N(22) + "\"Many,\" he said. \"You know how many times someone came to tell me?\" " +
        N(23) + "He held up one finger and pointed it at her.</p>" +
        "<p>" + N(24) + "The next issue of the Ledger had a new box on page two, with a thin black border. " +
        N(25) + "It was titled Corrections, and its first entry said that the October headline had misspelled Mr. Abdel Farouk's name and that the Ledger regretted the error. " +
        N(26) + "Priya added the same note to the website, at the top of the story. " +
        N(27) + "Marcus said the box made the paper look \"official,\" and he meant it as praise.</p>" +
        "<p>" + N(28) + "Hana kept the box in every issue after that, even in the months when it was empty. " +
        N(29) + "An empty box, she decided, was a promise, not a blank space.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of Hana's story?",
          choices: [
            { letter: "A", text: "Owning a mistake openly builds more trust than hiding it." },
            { letter: "B", text: "Student newspapers should avoid writing about school staff." },
            { letter: "C", text: "Small errors in print are rarely noticed by most readers." },
            { letter: "D", text: "Friends usually give the best advice in difficult moments." }
          ],
          correct: "A"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict in Hana's story is best described as a struggle between —",
          choices: [
            { letter: "A", text: "Hana and Marcus over what goes on the sports page" },
            { letter: "B", text: "Priya and Hana over who controls the website" },
            { letter: "C", text: "Hana's embarrassment and her sense of responsibility" },
            { letter: "D", text: "Mr. Farouk and the staff over the profile's content" }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "10.RL.1.C",
          stem: "Sentence 14 helps explain Hana's reaction at lunch by showing that she —",
          choices: [
            { letter: "A", text: "worries the principal will punish the whole staff" },
            { letter: "B", text: "understands why the misspelling matters to Mr. Farouk" },
            { letter: "C", text: "regrets choosing Mr. Farouk as her profile subject" },
            { letter: "D", text: "doubts that Priya knows how to fix the website" }
          ],
          correct: "B"
        },
        {
          id: "eleven",
          sol: "10.RL.2.B",
          stem: "In sentence 8, the detail that the story spelled the name correctly eleven times mainly creates a feeling of —",
          choices: [
            { letter: "A", text: "confusion about the facts" },
            { letter: "B", text: "pride in careful work" },
            { letter: "C", text: "relief that the harm is small" },
            { letter: "D", text: "painful embarrassment" }
          ],
          correct: "D"
        },
        {
          id: "finger",
          sol: "10.RL.3.A",
          stem: "The author includes Mr. Farouk's raised finger in sentence 23 mainly to —",
          choices: [
            { letter: "A", text: "show that he is angry about the headline" },
            { letter: "B", text: "suggest that he wants a second interview" },
            { letter: "C", text: "reveal that he never read the full story" },
            { letter: "D", text: "show that Hana alone has come to apologize" }
          ],
          correct: "D"
        },
        {
          id: "regretted",
          sol: "10.RV.1.B",
          stem: "In sentence 25, the word regretted most nearly means —",
          choices: [
            { letter: "A", text: "remembered clearly" },
            { letter: "B", text: "was sorry about" },
            { letter: "C", text: "explained fully" },
            { letter: "D", text: "firmly denied" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in Hana's story is most ironic?",
          choices: [
            { letter: "A", text: "A box meant to admit an error makes the paper look more official." },
            { letter: "B", text: "Hana interviews Mr. Farouk herself before she writes the profile." },
            { letter: "C", text: "The newspaper staff eats lunch at its usual table by the windows." },
            { letter: "D", text: "Priya runs the newspaper's website and updates its stories online." }
          ],
          correct: "A"
        },
        {
          id: "prefix",
          sol: "10.RV.1.A",
          stem: "The word misspelled in sentence 25 begins with the prefix mis-, as in misread and mislead. Based on this, misspelled most nearly means —",
          choices: [
            { letter: "A", text: "spelled again" },
            { letter: "B", text: "spelled aloud" },
            { letter: "C", text: "spelled wrongly" },
            { letter: "D", text: "spelled carefully" }
          ],
          correct: "C"
        }
      ]
    },

    /* 4 · Informational · app design */
    {
      id: "g10-ri-c79-thumb-zone",
      family: "G10",
      title: "Where the Thumb Can Reach",
      kind: "Informational · 10.RI",
      blurb: "Why app designers start with the hand, not the screen, and what ten testers in a cafeteria taught one team.",
      level: 2,
      passage:
        "<p>" + N(1) + "Most people hold a phone in one hand and tap it with the thumb of that same hand, often while doing something else, such as walking to class or holding a bus railing. " +
        N(2) + "App designers have a name for the part of the screen that thumb can reach easily: the comfort zone. " +
        N(3) + "It usually covers the bottom center of the display, and it shrinks as phones grow taller. " +
        N(4) + "A button placed in the top corner of a large phone may look tidy in a design sketch, but in daily use it forces a stretch, a shift of grip, or a second hand.</p>" +
        "<p>" + N(5) + "For this reason, many designers now begin with the hand rather than with the screen. " +
        N(6) + "Before drawing a single icon, they ask what a user will need most often and place those actions where the thumb already rests. " +
        N(7) + "Less frequent or riskier actions, such as deleting an account, are moved deliberately out of the easy path, so that a person cannot trigger them by accident. " +
        N(8) + "In this way, the layout itself becomes a kind of instruction: what is easy to reach is meant to be used, and what is hard to reach is meant to be considered first.</p>" +
        "<p>" + N(9) + "Reach is only one part of the problem. " +
        N(10) + "A button must also be large enough to hit. " +
        N(11) + "Several design guidelines recommend touch targets of roughly nine millimeters on a side, about the width of a fingertip, with space between them. " +
        N(12) + "Text must contrast clearly with its background, since a pale gray label that looks elegant indoors can vanish in bright sunlight. " +
        N(13) + "And every important action should be labeled with words, not only with icons, because a symbol that seems obvious to its designer may mean nothing to someone else.</p>" +
        "<p>" + N(14) + "The most reliable way to discover these problems is to watch real people use the app. " +
        N(15) + "When a student team at Ridgeline High School built an app for their district's late-bus schedule, they were confident in their design until they handed it to ten classmates in the cafeteria. " +
        N(16) + "Seven of the ten could not find the refresh button, which the team had placed in the top right corner as a small circular arrow. " +
        N(17) + "Two testers assumed the arrow meant \"go back.\" " +
        N(18) + "The team moved the action to a large labeled bar at the bottom of the screen, tested again, and found that all ten users succeeded within a few seconds.</p>" +
        "<p>" + N(19) + "Stories like this one explain why experienced designers treat their first draft as a guess. " +
        N(20) + "A screen can be beautiful and still fail the person holding it. " +
        N(21) + "The goal of good design is not to impress the designer but to disappear, so that the user notices only the task, finished, and never the effort the layout saved.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about phone layouts?",
          choices: [
            { letter: "A", text: "Taller phones have made most older apps impossible to use." },
            { letter: "B", text: "Good app design is built around how real people hold phones." },
            { letter: "C", text: "Student teams often design better apps than large companies." },
            { letter: "D", text: "Icons are always less effective than written labels on screens." }
          ],
          correct: "B"
        },
        {
          id: "guess",
          sol: "10.RI.1.B",
          stem: "Which detail from the Ridgeline team's test best supports the idea in sentence 19 that a first draft is a guess?",
          choices: [
            { letter: "A", text: "The app showed the district's late-bus schedule." },
            { letter: "B", text: "The team handed the app to classmates at lunch." },
            { letter: "C", text: "The team built the app at Ridgeline High School." },
            { letter: "D", text: "Seven of ten testers could not find the refresh button." }
          ],
          correct: "D"
        },
        {
          id: "delete",
          sol: "10.RI.1.C",
          stem: "The author includes the example of deleting an account in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "show that some actions are made harder to reach on purpose" },
            { letter: "B", text: "prove that most users delete the apps that confuse them" },
            { letter: "C", text: "warn readers to guard their personal account information" },
            { letter: "D", text: "explain why the comfort zone shrinks on taller phones" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          stem: "How are sentences 9 through 13 of the phone-layout article organized?",
          choices: [
            { letter: "A", text: "as a sequence of steps in building an app" },
            { letter: "B", text: "as a comparison of two popular phone models" },
            { letter: "C", text: "as a list of design needs beyond reach" },
            { letter: "D", text: "as a problem followed by a single solution" }
          ],
          correct: "C"
        },
        {
          id: "instruction",
          sol: "10.RI.2.B",
          stem: "The statement in sentence 8 that the layout itself becomes a kind of instruction mainly suggests that —",
          choices: [
            { letter: "A", text: "every app should include a written manual" },
            { letter: "B", text: "designers write instructions before icons" },
            { letter: "C", text: "where buttons sit guides what users do" },
            { letter: "D", text: "users rarely read the text on a screen" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of the final sentence of the phone-layout article (sentence 21) is best described as —",
          choices: [
            { letter: "A", text: "thoughtful and admiring" },
            { letter: "B", text: "sarcastic and critical" },
            { letter: "C", text: "anxious and uncertain" },
            { letter: "D", text: "cheerful and joking" }
          ],
          correct: "A"
        },
        {
          id: "vanish",
          sol: "10.RV.1.C",
          stem: "In sentence 12, the word vanish most nearly means —",
          choices: [
            { letter: "A", text: "fade slowly over many years" },
            { letter: "B", text: "change to a brighter color" },
            { letter: "C", text: "shrink to a smaller size" },
            { letter: "D", text: "become impossible to see" }
          ],
          correct: "D"
        },
        {
          id: "deliberately",
          sol: "10.RV.1.A",
          stem: "The word deliberately in sentence 7 shares a root with deliberation, which means weighing a choice. Based on this, actions moved deliberately are moved —",
          choices: [
            { letter: "A", text: "quickly and without a second look" },
            { letter: "B", text: "on purpose, after careful thought" },
            { letter: "C", text: "without any explanation to users" },
            { letter: "D", text: "by mistake during an update" }
          ],
          correct: "B"
        }
      ]
    },

    /* 5 · Informational · mountain hiking */
    {
      id: "g10-ri-c79-mountain-weather",
      family: "G10",
      title: "The Mountain's Afternoon",
      kind: "Informational · 10.RI",
      blurb: "Why summer hikers are told to be off the summit by noon.",
      level: 1,
      passage:
        "<p>" + N(1) + "Hikers who climb high mountains in summer often hear the same advice: start early and be off the summit by noon. " +
        N(2) + "The advice can sound overly cautious on a clear, bright morning. " +
        N(3) + "But it comes from a simple fact about mountains. " +
        N(4) + "They help create their own weather.</p>" +
        "<p>" + N(5) + "The process begins with the sun. " +
        N(6) + "During the morning, sunlight warms the ground and the rocky slopes. " +
        N(7) + "The warm ground heats the air just above it. " +
        N(8) + "Warm air is lighter than cool air, so it begins to rise. " +
        N(9) + "On a mountain, the slopes also push moving air upward, the way a ramp lifts a rolling ball. " +
        N(10) + "Scientists call this upward push lift.</p>" +
        "<p>" + N(11) + "As the air rises, it cools. " +
        N(12) + "Cool air cannot hold as much water vapor as warm air. " +
        N(13) + "The extra moisture turns into tiny droplets, and those droplets form clouds. " +
        N(14) + "On many summer days, hikers can watch this happen from the trail. " +
        N(15) + "Small, puffy clouds appear over the peaks by late morning. " +
        N(16) + "By early afternoon, some of them have grown into tall, dark towers. " +
        N(17) + "These towering clouds can produce heavy rain, hail, strong winds, and lightning.</p>" +
        "<p>" + N(18) + "Lightning is the greatest danger. " +
        N(19) + "A hiker on an open ridge or summit is often the tallest object around. " +
        N(20) + "There are no buildings or cars to shelter in, and the nearest trees may be far below. " +
        N(21) + "Storms can also build quickly. " +
        N(22) + "A sky that looks harmless at eleven o'clock can be crackling with thunder by one.</p>" +
        "<p>" + N(23) + "Experienced hikers plan around this pattern. " +
        N(24) + "Many set a turnaround time before they leave home, a time when they will head down no matter how close they are to the top. " +
        N(25) + "They check the forecast, but they also watch the sky as they climb. " +
        N(26) + "Clouds that grow taller instead of wider are a warning sign. " +
        N(27) + "So is the sound of distant thunder. " +
        N(28) + "If you can hear thunder, you are close enough to be struck by lightning. " +
        N(29) + "A hiker caught in the open should move quickly downhill, away from the ridge, and stay low until the storm passes.</p>" +
        "<p>" + N(30) + "None of this means that high mountains are too dangerous for ordinary hikers to enjoy. " +
        N(31) + "Each summer, many thousands of people reach high summits safely and come home with nothing worse than tired legs. " +
        N(32) + "Most of them share one habit. " +
        N(33) + "They treat the morning as their best time on the mountain, and the afternoon as the mountain's time.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "What is the main idea of the article about summer storms on mountains?",
          choices: [
            { letter: "A", text: "Lightning strikes more hikers than any other danger in the world." },
            { letter: "B", text: "Mountains should be closed to hikers during summer afternoons." },
            { letter: "C", text: "Clouds form only on days when the sun heats the rocky ground." },
            { letter: "D", text: "Mountains help form afternoon storms, so hikers should start early." }
          ],
          correct: "D"
        },
        {
          id: "quick",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the claim in sentence 21 that storms on a mountain can build quickly?",
          choices: [
            { letter: "A", text: "sentence 15" },
            { letter: "B", text: "sentence 22" },
            { letter: "C", text: "sentence 31" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "10.RI.1.C",
          stem: "The author's main purpose in writing the article about mountain storms is to —",
          choices: [
            { letter: "A", text: "persuade readers to avoid hiking in summer" },
            { letter: "B", text: "tell the true story of one dangerous climb" },
            { letter: "C", text: "explain why the storms form and how to stay safe" },
            { letter: "D", text: "compare the weather on several famous mountains" }
          ],
          correct: "C"
        },
        {
          id: "process",
          sol: "10.RI.2.A",
          stem: "Sentences 5 through 13 of the mountain-storm article are organized mainly to —",
          choices: [
            { letter: "A", text: "explain a process in the order it happens" },
            { letter: "B", text: "compare two different kinds of mountains" },
            { letter: "C", text: "argue against a belief that many hikers hold" },
            { letter: "D", text: "describe one problem and several solutions" }
          ],
          correct: "A"
        },
        {
          id: "ramp",
          sol: "10.RI.2.B",
          stem: "The comparison in sentence 9 to a ramp lifting a rolling ball mainly helps readers understand —",
          choices: [
            { letter: "A", text: "how a slope forces moving air upward" },
            { letter: "B", text: "why warm air weighs less than cool air" },
            { letter: "C", text: "how fast a storm cloud is able to grow" },
            { letter: "D", text: "why lightning strikes the tallest objects" }
          ],
          correct: "A"
        },
        {
          id: "cautious",
          sol: "10.RV.1.B",
          stem: "In sentence 2, the phrase overly cautious most nearly means —",
          choices: [
            { letter: "A", text: "careless about safety" },
            { letter: "B", text: "very well informed" },
            { letter: "C", text: "more careful than needed" },
            { letter: "D", text: "unsure of the facts" }
          ],
          correct: "C"
        },
        {
          id: "suffix",
          sol: "10.RV.1.A",
          stem: "The word harmless in sentence 22 ends with the suffix -less, as in fearless and careless. Based on this, a harmless sky is one that is —",
          choices: [
            { letter: "A", text: "full of harm" },
            { letter: "B", text: "without harm" },
            { letter: "C", text: "able to harm" },
            { letter: "D", text: "harmed before" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of the last paragraph of the mountain-storm article (sentences 30 through 33) is best described as —",
          choices: [
            { letter: "A", text: "fearful and warning" },
            { letter: "B", text: "angry and critical" },
            { letter: "C", text: "sad and regretful" },
            { letter: "D", text: "reassuring and practical" }
          ],
          correct: "D"
        }
      ]
    },

    /* 6 · Vocabulary · photography (darkroom) */
    {
      id: "g10-rv-c79-old-film",
      family: "G10",
      title: "Summer, Lake",
      kind: "Vocabulary · 10.RV",
      blurb: "A thirty-year-old roll of film, a careful teacher, and five frames that survived.",
      level: 2,
      passage:
        "<p>" + N(1) + "The roll of film had been sitting in the bottom of a shoebox for almost thirty years, and Lucía Ferreira found it only because she was looking for something else. " +
        N(2) + "The label on the canister, in her mother's teenage handwriting, said only \"Summer, lake.\" " +
        N(3) + "Her mother laughed when Lucía showed her. " +
        N(4) + "\"That film is older than you are,\" she said. \"Whatever was on it is probably gone.\"</p>" +
        "<p>" + N(5) + "Mr. Okafor, who ran the darkroom club after school, was more hopeful but also more careful. " +
        N(6) + "He was a <strong>meticulous</strong> man who labeled every bottle twice and timed every step with a stopwatch hung on a string around his neck. " +
        N(7) + "\"Old film is like old paper,\" he told her. \"It may survive, but it won't forgive mistakes.\" " +
        N(8) + "He explained that the chemicals would have to be mixed cooler than usual and the developing time stretched, and that even then they might pull nothing from the roll but a gray fog.</p>" +
        "<p>" + N(9) + "Lucía's first steps in the dark were <strong>tentative</strong>. " +
        N(10) + "She had practiced loading film onto the steel reel a dozen times with a test roll in daylight, but in total darkness her fingers felt clumsy and enormous, and twice she stopped, certain she had creased the strip. " +
        N(11) + "Mr. Okafor waited without speaking, his stopwatch ticking softly, until she whispered that the reel was loaded.</p>" +
        "<p>" + N(12) + "When the strip finally came out of the last rinse, they held it up to the light together. " +
        N(13) + "Most of the frames were dark and blank. " +
        N(14) + "A few showed shapes too faint to name. " +
        N(15) + "But near the end of the roll, five frames had survived, and in one of them a teenage girl stood knee-deep in a lake, laughing, the water around her <strong>luminous</strong> with late sun.</p>" +
        "<p>" + N(16) + "It took Lucía three afternoons to <strong>salvage</strong> a good print from that negative. " +
        N(17) + "The film was scratched and the contrast was weak, so she tried different papers, different exposures, and a small piece of cardboard she waved over the darkest areas to keep them from going black. " +
        N(18) + "Each test print taught her something, and each one was slightly better than the last.</p>" +
        "<p>" + N(19) + "When she brought the final print home, her mother held it with both hands, almost <strong>reverently</strong>, as if it might break. " +
        N(20) + "For a long time she did not say anything. " +
        N(21) + "Then she pointed to the edge of the frame, where a second figure was half visible on the shore. " +
        N(22) + "\"That's your grandfather,\" she said. \"He was always the one holding the towel.\"</p>" +
        "<p>" + N(23) + "Lucía had thought the photograph was about a summer afternoon, a moment that was <strong>ephemeral</strong> and gone. " +
        N(24) + "Now she understood that it was also about the person who had waited on the shore, just outside the picture, ready.</p>",
      claims: [
        {
          id: "meticulous",
          sol: "10.RV.1.C",
          stem: "Which detail best helps a reader understand the meaning of meticulous in sentence 6?",
          choices: [
            { letter: "A", text: "Mr. Okafor runs the darkroom club after school." },
            { letter: "B", text: "Mr. Okafor is more hopeful than Lucía's mother." },
            { letter: "C", text: "Mr. Okafor labels every bottle twice and times every step." },
            { letter: "D", text: "Mr. Okafor compares old film to a sheet of old paper." }
          ],
          correct: "C"
        },
        {
          id: "tentative",
          sol: "10.RV.1.B",
          stem: "In sentence 9, the word tentative most nearly means —",
          choices: [
            { letter: "A", text: "hesitant and uncertain" },
            { letter: "B", text: "quick and confident" },
            { letter: "C", text: "loud and careless" },
            { letter: "D", text: "angry and tense" }
          ],
          correct: "A"
        },
        {
          id: "luminous",
          sol: "10.RV.1.A",
          stem: "The word luminous in sentence 15 shares a root with illuminate and luminary. The root lumin- most nearly means —",
          choices: [
            { letter: "A", text: "water" },
            { letter: "B", text: "light" },
            { letter: "C", text: "warmth" },
            { letter: "D", text: "motion" }
          ],
          correct: "B"
        },
        {
          id: "reverently",
          sol: "10.RV.1.D",
          stem: "The author writes that Lucía's mother held the print reverently rather than just carefully. Compared with carefully, reverently adds a connotation of —",
          choices: [
            { letter: "A", text: "worry that someone might steal the print" },
            { letter: "B", text: "confusion about who took the photograph" },
            { letter: "C", text: "pride in her daughter's school grades" },
            { letter: "D", text: "deep respect, as for something precious" }
          ],
          correct: "D"
        },
        {
          id: "salvage",
          sol: "10.RV.1.B",
          stem: "In sentence 16, to salvage a good print from the negative means to —",
          choices: [
            { letter: "A", text: "sell it for a profit" },
            { letter: "B", text: "rescue it from damaged film" },
            { letter: "C", text: "copy it from a magazine" },
            { letter: "D", text: "frame it for a display" }
          ],
          correct: "B"
        },
        {
          id: "ephemeral",
          sol: "10.RV.1.C",
          stem: "Which words in sentence 23 best help clarify the meaning of ephemeral?",
          choices: [
            { letter: "A", text: "about a summer afternoon" },
            { letter: "B", text: "Lucía had thought" },
            { letter: "C", text: "the photograph was" },
            { letter: "D", text: "and gone" }
          ],
          correct: "D"
        },
        {
          id: "mother",
          sol: "10.RL.1.C",
          stem: "Sentences 21 and 22 reveal that Lucía's mother —",
          choices: [
            { letter: "A", text: "sees in the print a memory of her father's quiet care" },
            { letter: "B", text: "is disappointed that the final print is scratched" },
            { letter: "C", text: "wishes Lucía had printed a different frame" },
            { letter: "D", text: "cannot remember the summer at the lake" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in sentence 10, Lucía's clumsy, enormous fingers and her fear of a creased strip, mainly create a mood of —",
          choices: [
            { letter: "A", text: "cheerful excitement" },
            { letter: "B", text: "quiet boredom" },
            { letter: "C", text: "nervous suspense" },
            { letter: "D", text: "bitter disappointment" }
          ],
          correct: "C"
        }
      ]
    },

    /* 7 · Vocabulary · coding */
    {
      id: "g10-rv-c79-readable-code",
      family: "G10",
      title: "The Next Reader",
      kind: "Vocabulary · 10.RV",
      blurb: "Why programmers say code is read far more often than it is written.",
      level: 3,
      passage:
        "<p>" + N(1) + "Beginning programmers often imagine that the hard part of coding is getting the computer to understand them. " +
        N(2) + "In a narrow sense, that is true: a computer will reject a misplaced bracket with complete indifference to how much effort went into the rest of the line. " +
        N(3) + "But professional developers tend to describe a different challenge. " +
        N(4) + "The computer, they point out, is the easiest reader a program will ever have. " +
        N(5) + "The difficult readers are people.</p>" +
        "<p>" + N(6) + "Software is rarely finished. " +
        N(7) + "Teams <strong>iterate</strong> on their programs for years, releasing a version, studying how it is used, and revising it again and again. " +
        N(8) + "Over that time, the original author may move to another project, forget her own reasoning, or simply be unavailable when something breaks at midnight. " +
        N(9) + "Whoever opens the file next must figure out not only what the code does but why it was written that way.</p>" +
        "<p>" + N(10) + "This is why style guides, once considered fussy, have become <strong>ubiquitous</strong> in the industry; nearly every serious team now follows one. " +
        N(11) + "Such guides ask programmers to choose descriptive names, so that a variable is called lateBusCount rather than x. " +
        N(12) + "They encourage short functions that each do one job. " +
        N(13) + "And they ask for comments that explain decisions, not ones that merely repeat what a line already says.</p>" +
        "<p>" + N(14) + "Consider a <strong>rudimentary</strong> example. " +
        N(15) + "A comment reading \"add one to the total\" above a line that adds one to the total tells a reader nothing new. " +
        N(16) + "A comment reading \"count the driver too, since the seat limit includes her\" tells the reader something the code alone cannot. " +
        N(17) + "The second comment preserves a piece of reasoning that would otherwise vanish with the person who had it.</p>" +
        "<p>" + N(18) + "Readable code also tends to be more <strong>robust</strong>. " +
        N(19) + "When a program's logic is clear, mistakes stand out; when it is tangled, errors can hide for months inside lines no one wants to touch. " +
        N(20) + "Engineering teams that study their own defects often report that confusing sections of code attract a <strong>disproportionate</strong> share of bugs, partly because each nervous fix adds another layer of confusion.</p>" +
        "<p>" + N(21) + "None of this means that clever code is forbidden. " +
        N(22) + "Sometimes an unusual approach is genuinely faster or simpler. " +
        N(23) + "But a good team asks whether the cleverness is worth what it costs the next reader. " +
        N(24) + "A solution that seems obvious to its author after three hours of focused work may look baffling to a colleague who arrives with fresh eyes and a deadline.</p>" +
        "<p>" + N(25) + "The best programmers, in the end, write for two audiences at once. " +
        N(26) + "The machine needs instructions it can carry out. " +
        N(27) + "The person who comes next needs an explanation worth trusting.</p>",
      claims: [
        {
          id: "ubiquitous",
          sol: "10.RV.1.C",
          stem: "In sentence 10, which clue best helps a reader understand the word ubiquitous?",
          choices: [
            { letter: "A", text: "the claim that style guides were once seen as fussy" },
            { letter: "B", text: "the mention of the software industry as a whole" },
            { letter: "C", text: "the idea that programmers must choose good names" },
            { letter: "D", text: "the statement that nearly every serious team uses one" }
          ],
          correct: "D"
        },
        {
          id: "iterate",
          sol: "10.RV.1.B",
          stem: "In sentence 7, to iterate on a program means to —",
          choices: [
            { letter: "A", text: "sell it to as many customers as possible" },
            { letter: "B", text: "delete it completely and start over" },
            { letter: "C", text: "repeat cycles of testing and revising it" },
            { letter: "D", text: "translate it into another language" }
          ],
          correct: "C"
        },
        {
          id: "rudimentary",
          sol: "10.RV.1.A",
          stem: "The word rudimentary in sentence 14 is related to rudiment, meaning a first principle or basic element. Based on this, a rudimentary example is one that is —",
          choices: [
            { letter: "A", text: "basic and simple" },
            { letter: "B", text: "rude and careless" },
            { letter: "C", text: "long and detailed" },
            { letter: "D", text: "rare and unusual" }
          ],
          correct: "A"
        },
        {
          id: "indifference",
          sol: "10.RV.1.D",
          stem: "In sentence 2, the author says the computer rejects a bracket with complete indifference instead of saying it simply rejects the bracket. The word indifference adds a connotation of —",
          choices: [
            { letter: "A", text: "anger at the programmer" },
            { letter: "B", text: "a total lack of concern" },
            { letter: "C", text: "slow, careful judgment" },
            { letter: "D", text: "amusement at the error" }
          ],
          correct: "B"
        },
        {
          id: "disproportionate",
          sol: "10.RV.1.A",
          stem: "The word disproportionate in sentence 20 joins the prefix dis- (not) to proportionate. Based on this, a disproportionate share of bugs is one that is —",
          choices: [
            { letter: "A", text: "evenly divided among sections" },
            { letter: "B", text: "impossible for teams to measure" },
            { letter: "C", text: "larger than would be expected" },
            { letter: "D", text: "fixed by a single small team" }
          ],
          correct: "C"
        },
        {
          id: "robust",
          sol: "10.RV.1.C",
          stem: "Sentence 19 helps a reader understand that robust code, as described in sentence 18, is code that —",
          choices: [
            { letter: "A", text: "holds up well because its errors are easy to spot" },
            { letter: "B", text: "runs on many different kinds of computers" },
            { letter: "C", text: "is written by large, experienced teams" },
            { letter: "D", text: "uses clever and unusual programming methods" }
          ],
          correct: "A"
        },
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the essay on readable code?",
          choices: [
            { letter: "A", text: "Computers are getting better at understanding human language." },
            { letter: "B", text: "Code should be written so that future people can understand it." },
            { letter: "C", text: "Clever programming methods should be banned by most teams." },
            { letter: "D", text: "Beginning programmers make more errors than professionals do." }
          ],
          correct: "B"
        },
        {
          id: "easiest",
          sol: "10.RI.2.B",
          stem: "In sentence 4, the author calls the computer the easiest reader a program will ever have mainly to emphasize that —",
          choices: [
            { letter: "A", text: "computers can read code faster than people" },
            { letter: "B", text: "most programs should be shorter than they are" },
            { letter: "C", text: "beginners should first study how computers work" },
            { letter: "D", text: "people are the readers who truly challenge coders" }
          ],
          correct: "D"
        }
      ]
    },

    /* 8 · Paired texts · school newspaper */
    {
      id: "g10-dsr-c79-print-or-pixels",
      family: "G10",
      title: "Paper or Screen",
      kind: "Paired texts · 10.DSR",
      blurb: "The editor makes the case for print; the web editor brings the numbers.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Why the Pinewood Courier Should Stay on Paper, by Adaeze Nwosu, editor in chief</strong></p>" +
        "<p>" + N(1) + "Every other Thursday, the Pinewood Courier appears in wire racks outside the library, the gym, and the main office, and by lunch most of the four hundred copies are gone. " +
        N(2) + "Some students read it at their desks before first bell. " +
        N(3) + "Others fold it into backpacks and take it home, where, according to a survey our staff conducted last spring, a third of them pass it to a parent or sibling. " +
        N(4) + "That is a kind of reach no notification can match.</p>" +
        "<p>" + N(5) + "The proposal to move the Courier entirely online is understandable. " +
        N(6) + "Printing costs about nine hundred dollars a semester, and our budget is tight. " +
        N(7) + "But a paper you can hold does something a website cannot: it shows up whether or not you went looking for it. " +
        N(8) + "A student who would never click on a story about the cafeteria's new compost program might read the whole thing because it was lying on the table in front of her at lunch. " +
        N(9) + "Print rewards accidents, and many of the stories that matter most are ones readers did not know they wanted.</p>" +
        "<p>" + N(10) + "A printed issue also lasts. " +
        N(11) + "Copies from the 1990s still sit in the library's archive, yellowing but readable, while the links on our old website from just six years ago now lead nowhere. " +
        N(12) + "If we want future students to know what this school cared about, paper is still the safest place to keep that record. " +
        N(13) + "We should look for ways to cut costs, such as printing fewer pages. " +
        N(14) + "We should not stop printing.</p>" +
        "<p><strong>Text 2 — What the Numbers Say: A Report from the Courier Website, by Luis Cabrera, web editor</strong></p>" +
        "<p>" + N(15) + "Since the Courier's website was rebuilt in September, it has averaged about 1,100 visits per issue, nearly three times the print run. " +
        N(16) + "The most-read story of the fall, a report on changes to the late-bus routes, drew more than 600 visits in two days, many of them from parents who found it through the school's weekly email. " +
        N(17) + "Online stories can also be corrected within minutes, can include video from games and concerts, and can be read by students who are absent or who use screen readers.</p>" +
        "<p>" + N(18) + "The website has limits, however. " +
        N(19) + "Visits drop sharply after the first three days, and our analytics show that most readers open only one story before leaving. " +
        N(20) + "Readers who reach the site through a link usually go straight to the story they came for, so features further down the page get little attention. " +
        N(21) + "The archive problem is also real: when our previous site was shut down in 2019, its stories were not saved anywhere.</p>" +
        "<p>" + N(22) + "These numbers suggest that the website reaches more readers but holds each of them for less time. " +
        N(23) + "Before the staff votes on whether to keep both formats, it should decide what each one does best and whether the budget can protect both.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do Adaeze and Luis agree?",
          choices: [
            { letter: "A", text: "The Courier's old website stories were not preserved." },
            { letter: "B", text: "Print issues reach more readers than the website does." },
            { letter: "C", text: "The Courier should stop printing to save money." },
            { letter: "D", text: "Online readers stay longer than print readers do." }
          ],
          correct: "A"
        },
        {
          id: "together",
          sol: "10.DSR.E",
          stem: "Which idea about the Courier becomes clear only when both texts are read together?",
          choices: [
            { letter: "A", text: "The late-bus story was the most popular story of the fall." },
            { letter: "B", text: "The Courier is printed and placed in racks every other Thursday." },
            { letter: "C", text: "The library keeps an archive of printed issues from the 1990s." },
            { letter: "D", text: "Print and online each reach readers in a way the other cannot." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "The texts about the Courier differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "uses survey data, while Text 2 uses none at all" },
            { letter: "B", text: "describes the website, while Text 2 describes print" },
            { letter: "C", text: "argues a position, while Text 2 mostly reports findings" },
            { letter: "D", text: "focuses on costs, while Text 2 ignores them entirely" }
          ],
          correct: "C"
        },
        {
          id: "accidents",
          sol: "10.DSR.E",
          stem: "How does sentence 19 of Text 2 relate to Adaeze's claim in sentence 9 that print rewards accidents?",
          choices: [
            { letter: "A", text: "It disproves the claim by showing that online visits are higher." },
            { letter: "B", text: "It supports the claim by showing online readers rarely wander." },
            { letter: "C", text: "It ignores the claim by discussing only the site's video features." },
            { letter: "D", text: "It weakens the claim by noting that online fixes take minutes." }
          ],
          correct: "B"
        },
        {
          id: "claim1",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes Adaeze's central claim in Text 1?",
          choices: [
            { letter: "A", text: "The Courier should stop printing to save nine hundred dollars." },
            { letter: "B", text: "The Courier should keep printing, even if it must trim costs." },
            { letter: "C", text: "The Courier website should be rebuilt with a lasting archive." },
            { letter: "D", text: "The Courier should print extra copies for students' parents." }
          ],
          correct: "B"
        },
        {
          id: "reach",
          sol: "10.RI.1.B",
          stem: "Which detail from Text 2 best supports Luis's point that the website reaches more readers than print?",
          choices: [
            { letter: "A", text: "Online stories can include video from games." },
            { letter: "B", text: "Visits drop sharply after the first three days." },
            { letter: "C", text: "The previous site was shut down in 2019." },
            { letter: "D", text: "The site averages about 1,100 visits per issue." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of Luis's report in Text 2 is best described as —",
          choices: [
            { letter: "A", text: "balanced and measured" },
            { letter: "B", text: "angry and defensive" },
            { letter: "C", text: "playful and joking" },
            { letter: "D", text: "nostalgic and sad" }
          ],
          correct: "A"
        },
        {
          id: "archive",
          sol: "10.DSR.D",
          stem: "Select TWO sentences that together best show that both writers are concerned about preserving the Courier's stories for the future.",
          choices: [
            { letter: "A", text: "sentence 3" },
            { letter: "B", text: "sentence 16" },
            { letter: "C", text: "sentence 11" },
            { letter: "D", text: "sentence 21" }
          ],
          correct: ["C", "D"]
        }
      ]
    },

    /* 9 · Paired texts · mountain hiking (trail permits) */
    {
      id: "g10-dsr-c79-kestrel-permits",
      family: "G10",
      title: "A Reservation for the Ridge",
      kind: "Paired texts · 10.DSR",
      blurb: "A parks department explains its new trail permits; a lifelong hiker weighs what they cost him.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Why Kestrel Ridge Now Requires a Permit, from the Brandt County Parks Department</strong></p>" +
        "<p>" + N(1) + "For decades, the trail to Kestrel Ridge was open to anyone who arrived at the trailhead, and for most of those decades, that arrangement worked. " +
        N(2) + "Then, within roughly five years, the number of summer hikers on the trail more than tripled, driven in large part by photographs of the ridge's sunrise view shared widely online. " +
        N(3) + "On peak weekends, cars lined the county road for a mile in both directions, and rangers counted more than nine hundred people on a trail built for perhaps two hundred.</p>" +
        "<p>" + N(4) + "The effects went beyond crowding. " +
        N(5) + "Hikers stepping off the trail to pass slower groups widened the path in places to three times its original width, crushing the low alpine plants that hold the thin soil in place. " +
        N(6) + "Once those plants are lost, rain carries the soil downhill, and recovery at that elevation can take decades. " +
        N(7) + "Rescue calls also rose, often from visitors who started late and were caught on the exposed ridge in afternoon storms.</p>" +
        "<p>" + N(8) + "Beginning last June, the department introduced a timed-entry permit for weekends between May and October. " +
        N(9) + "Permits are free, though a small reservation fee applies, and they are released in two batches: most become available a month ahead, and a smaller share is held until two days before each date. " +
        N(10) + "In the first season, the average number of weekend hikers fell to about three hundred, rescue calls dropped by nearly half, and crews were able to close and replant several of the widest sections. " +
        N(11) + "The department will review the system each winter.</p>" +
        "<p><strong>Text 2 — Missing the Mountain I Knew, by Tomasz Wierzbicki</strong></p>" +
        "<p>" + N(12) + "I first climbed Kestrel Ridge when I was eleven, with my father, on a Saturday morning when we decided at breakfast that the weather looked too good to waste. " +
        N(13) + "That was how we always went: on impulse, with sandwiches wrapped in yesterday's newspaper. " +
        N(14) + "The permit system has made that kind of morning impossible on a summer weekend, and I would be lying if I said I did not resent it a little. " +
        N(15) + "A mountain, I used to think, should be the one place you do not need a reservation.</p>" +
        "<p>" + N(16) + "And yet last September, on a Saturday, holding a permit I had booked three weeks earlier, I walked a stretch near the ridge that I had not recognized in years. " +
        N(17) + "The braided mess of side trails had been roped off, and between the ropes small cushions of green moss had begun to return. " +
        N(18) + "I passed perhaps a dozen people all morning, and at the top I heard the wind instead of other people's music.</p>" +
        "<p>" + N(19) + "I still miss deciding at breakfast. " +
        N(20) + "But I have started to suspect that the mountain I miss was already disappearing before anyone printed a permit, and that the rules are the reason some of it is coming back.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "The parks department and Tomasz would both most likely agree that —",
          choices: [
            { letter: "A", text: "permits should be ended after the next winter review" },
            { letter: "B", text: "heavy use had damaged the trail before the permits" },
            { letter: "C", text: "hikers should always be free to climb on impulse" },
            { letter: "D", text: "rescue calls were the main reason for the new rules" }
          ],
          correct: "B"
        },
        {
          id: "plants",
          sol: "10.DSR.E",
          stem: "How does Text 2 address the plant damage described in sentences 5 and 6 of Text 1?",
          choices: [
            { letter: "A", text: "It offers a firsthand view of plants beginning to recover." },
            { letter: "B", text: "It argues that the damage was caused by the rangers." },
            { letter: "C", text: "It claims the damage was never as serious as reported." },
            { letter: "D", text: "It explains the science of how thin soil washes away." }
          ],
          correct: "A"
        },
        {
          id: "conclude",
          sol: "10.DSR.E",
          stem: "Using both texts about Kestrel Ridge, a reader could best conclude that the permit system —",
          choices: [
            { letter: "A", text: "has ended every problem on the trail for good" },
            { letter: "B", text: "is popular with every hiker who uses the ridge" },
            { letter: "C", text: "was created mainly to raise money for the county" },
            { letter: "D", text: "costs some freedom but has produced real benefits" }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes a key difference between the two texts about Kestrel Ridge?",
          choices: [
            { letter: "A", text: "Text 1 opposes permits, while Text 2 supports them." },
            { letter: "B", text: "Text 1 tells a story, while Text 2 lists only data." },
            { letter: "C", text: "Text 1 reports data, while Text 2 reflects on memories." },
            { letter: "D", text: "Text 1 is about summer, while Text 2 is about winter." }
          ],
          correct: "C"
        },
        {
          id: "photos",
          sol: "10.RI.1.C",
          stem: "The department includes the detail about photographs shared online in sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "explain a cause of the sudden rise in hikers" },
            { letter: "B", text: "criticize hikers who take pictures of the view" },
            { letter: "C", text: "encourage readers to visit for the sunrise" },
            { letter: "D", text: "show that the ridge is popular in winter" }
          ],
          correct: "A"
        },
        {
          id: "reservation",
          sol: "10.RI.2.B",
          stem: "In sentence 15, Tomasz's statement that a mountain should be the one place you do not need a reservation mainly emphasizes —",
          choices: [
            { letter: "A", text: "his anger at the county's rangers" },
            { letter: "B", text: "his belief that permits cost too much" },
            { letter: "C", text: "how much he values outdoor freedom" },
            { letter: "D", text: "his wish to hike only with his father" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "How is the parks department's notice in Text 1 mainly organized?",
          choices: [
            { letter: "A", text: "as a personal story told in time order" },
            { letter: "B", text: "as a comparison of two county parks" },
            { letter: "C", text: "as a list of rules with no reasons given" },
            { letter: "D", text: "as a problem, its effects, and a response" }
          ],
          correct: "D"
        },
        {
          id: "quiet",
          sol: "10.DSR.E",
          stem: "Based on both texts, why does Tomasz pass only about a dozen people on his September hike?",
          choices: [
            { letter: "A", text: "Storms closed the trail on most summer weekends." },
            { letter: "B", text: "Timed permits now limit how many hikers can enter." },
            { letter: "C", text: "Most hikers now start too late to reach the top." },
            { letter: "D", text: "The trail was rerouted away from the sunrise view." }
          ],
          correct: "B"
        }
      ]
    },

    /* 10 · Poetry · mountain hiking */
    {
      id: "g10-rl-c79-cairn",
      family: "G10",
      title: "Cairn",
      kind: "Poetry · 10.RL",
      blurb: "A stone added out of habit at eleven, and the fog that finally explains it.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Above the last bent pines, where the trail forgets itself<br>" +
        L(2) + "and the rock goes on in every direction like a gray sea,<br>" +
        L(3) + "someone long before me stacked a few stones into a tower<br>" +
        L(4) + "no taller than my knee, and called it, without words, <em>this way</em>.<br>" +
        L(5) + "My mother taught me to add one, always, on the way up:<br>" +
        L(6) + "a flat stone, warm from the sun, set carefully on top,<br>" +
        L(7) + "not for luck, she said, but for the next person,<br>" +
        L(8) + "who will come in fog and need to see a shape that is not weather.<br>" +
        L(9) + "I used to think the cairns were only for the lost.<br>" +
        L(10) + "I was eleven and had never been lost. I added my stone<br>" +
        L(11) + "the way I said thank you to my aunts, because I was told to,<br>" +
        L(12) + "my eyes already on the summit and its famous view.<br>" +
        L(13) + "Today the fog came up the valley at noon<br>" +
        L(14) + "and erased the summit, the valley, the trail, my own boots.<br>" +
        L(15) + "I stood in a white room with no walls<br>" +
        L(16) + "and listened to my breath decide what it was afraid of.<br>" +
        L(17) + "Then, ten steps off, a darker grayness:<br>" +
        L(18) + "a small, stubborn tower, leaning a little, holding.<br>" +
        L(19) + "And beyond it, faintly, another. And another.<br>" +
        L(20) + "I walked from stone to stone like reading a sentence aloud,<br>" +
        L(21) + "each one a word a stranger had left for me<br>" +
        L(22) + "without knowing my name, or that I would need it.<br>" +
        L(23) + "At the trailhead I found a flat stone in my pocket.<br>" +
        L(24) + "I don't remember picking it up. Next time, it goes on top.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the poem \"Cairn\"?",
          choices: [
            { letter: "A", text: "Fog makes mountain hiking too dangerous to enjoy." },
            { letter: "B", text: "Children should obey their parents without question." },
            { letter: "C", text: "Small acts of care for strangers can guide them when it matters." },
            { letter: "D", text: "The view from a summit is worth any risk to reach it." }
          ],
          correct: "C"
        },
        {
          id: "shape",
          sol: "10.RL.2.A",
          stem: "In line 8, the phrase a shape that is not weather suggests that a cairn is —",
          choices: [
            { letter: "A", text: "a warning that a storm is coming" },
            { letter: "B", text: "a solid, human-made sign in the fog" },
            { letter: "C", text: "a marker showing the trail has ended" },
            { letter: "D", text: "a tool for predicting the weather" }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "In lines 15 and 16, the images of a white room with no walls and a breath deciding what it was afraid of mainly create a mood of —",
          choices: [
            { letter: "A", text: "peaceful calm" },
            { letter: "B", text: "playful wonder" },
            { letter: "C", text: "angry frustration" },
            { letter: "D", text: "disoriented fear" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Lines 9 and 10 of \"Cairn\" are ironic in light of what happens later because the speaker —",
          choices: [
            { letter: "A", text: "thought cairns were for the lost, then needs them when lost" },
            { letter: "B", text: "never learns how to build a cairn of stones alone" },
            { letter: "C", text: "reaches the famous summit view but is disappointed" },
            { letter: "D", text: "forgets the mother's advice about adding stones" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "10.RL.3.A",
          stem: "How do lines 13 and 14 function in the structure of the poem \"Cairn\"?",
          choices: [
            { letter: "A", text: "They shift the poem from memory to a present crisis." },
            { letter: "B", text: "They introduce the speaker's mother for the first time." },
            { letter: "C", text: "They describe the view from the summit in detail." },
            { letter: "D", text: "They end the poem with a lesson stated directly." }
          ],
          correct: "A"
        },
        {
          id: "stubborn",
          sol: "10.RV.1.C",
          stem: "In line 18, the word stubborn most nearly means —",
          choices: [
            { letter: "A", text: "refusing to listen to others" },
            { letter: "B", text: "rough and unfriendly in shape" },
            { letter: "C", text: "slow to rise into view" },
            { letter: "D", text: "firmly holding its place" }
          ],
          correct: "D"
        },
        {
          id: "eleven",
          sol: "10.RL.1.C",
          stem: "Lines 10 through 12 characterize the speaker at eleven as someone who —",
          choices: [
            { letter: "A", text: "was afraid of getting lost in the mountains" },
            { letter: "B", text: "disliked spending time with older relatives" },
            { letter: "C", text: "followed a custom without grasping its purpose" },
            { letter: "D", text: "wanted to build the tallest cairn on the trail" }
          ],
          correct: "C"
        },
        {
          id: "holding",
          sol: "10.RV.1.D",
          stem: "In line 18, the speaker says the cairn is holding rather than standing. Compared with standing, holding suggests the cairn is —",
          choices: [
            { letter: "A", text: "tall and impressive in size" },
            { letter: "B", text: "bracing against wind and fog" },
            { letter: "C", text: "newly built and unstable" },
            { letter: "D", text: "hidden from most hikers" }
          ],
          correct: "B"
        }
      ]
    },

    /* 11 · Drama · app design */
    {
      id: "g10-rl-c79-team-seven",
      family: "G10",
      title: "Team 7",
      kind: "Drama · 10.RL",
      blurb: "Eight minutes before the judges call them in, the team's app freezes on the loading wheel.",
      level: 1,
      passage:
        "<p><em>" + N(1) + "A hallway outside the library at Fairmont High School, where the district's student app competition is being judged. " +
        N(2) + "ZARA, DIEGO, and MEI huddle around a laptop on a folding table. " +
        N(3) + "A sign on the library door reads NEXT: TEAM 7.</em></p>" +
        "<p><strong>ZARA:</strong> " + N(4) + "It worked an hour ago. " + N(5) + "It worked this morning. " + N(6) + "It worked every single time I tested it last night.</p>" +
        "<p><strong>DIEGO:</strong> " + N(7) + "Then why is the screen frozen on the loading wheel?</p>" +
        "<p><strong>ZARA:</strong> " + N(8) + "Because the school's network blocks the server we use for the bus data. " + N(9) + "I never once tested it here, on the school's own Wi-Fi.</p>" +
        "<p><strong>MEI:</strong> " + N(10) + "How long do we have?</p>" +
        "<p><strong>DIEGO:</strong> <em>(glancing at the door)</em> " + N(11) + "Team 6 just went in. " + N(12) + "Maybe eight minutes.</p>" +
        "<p><strong>MEI:</strong> " + N(13) + "Okay. " + N(14) + "Okay. " + N(15) + "Can you fake it? " + N(16) + "Put in pretend numbers so the little bus icons move on the map?</p>" +
        "<p><strong>ZARA:</strong> " + N(17) + "I could. " + N(18) + "It would take five minutes. " + N(19) + "The judges would never know.</p>" +
        "<p><em>" + N(20) + "DIEGO pulls a battered sketchbook from his bag and sets it on the table.</em></p>" +
        "<p><strong>DIEGO:</strong> " + N(21) + "Or we show them this. " + N(22) + "Every screen, drawn by hand, from the very first version we made in September. " + N(23) + "We walk them through how it's supposed to work, and we tell them exactly what broke and why.</p>" +
        "<p><strong>MEI:</strong> " + N(24) + "Diego, the other teams have working apps. " + N(25) + "We'll look like the only team that didn't finish.</p>" +
        "<p><strong>DIEGO:</strong> " + N(26) + "We did finish. " + N(27) + "We just didn't finish testing.</p>" +
        "<p><em>" + N(28) + "ZARA closes the laptop slowly. " + N(29) + "A long pause.</em></p>" +
        "<p><strong>ZARA:</strong> " + N(30) + "He's right. " + N(31) + "If we fake the numbers, we're showing them an app that doesn't exist. " + N(32) + "If we show the sketches, at least everything we say will be true.</p>" +
        "<p><strong>MEI:</strong> <em>(taking a breath)</em> " + N(33) + "Fine. " + N(34) + "But I'm doing the talking, and nobody is allowed to look at the floor.</p>" +
        "<p><em>" + N(35) + "The library door opens, and a JUDGE with a clipboard and a tired smile leans out.</em></p>" +
        "<p><strong>JUDGE:</strong> " + N(36) + "Team 7?</p>" +
        "<p><em>" + N(37) + "Lights fade. " + N(38) + "When they rise again, the three stand in the same hallway, and Diego is holding a small certificate.</em></p>" +
        "<p><strong>DIEGO:</strong> <em>(reading)</em> " + N(39) + "\"Best Problem-Solving Process.\"</p>" +
        "<p><strong>MEI:</strong> " + N(40) + "She said we were the only team that could explain why something failed. " + N(41) + "She said that is most of what real programmers do all day.</p>" +
        "<p><strong>ZARA:</strong> <em>(laughing)</em> " + N(42) + "So the bug won us an award.</p>" +
        "<p><strong>MEI:</strong> " + N(43) + "No. " + N(44) + "Telling the truth about the bug did.</p>" +
        "<p><strong>DIEGO:</strong> " + N(45) + "Next year, though, we test it in the building first.</p>" +
        "<p><em>" + N(46) + "ZARA and MEI groan, and all three walk off together, still arguing about the server and whose fault it really was.</em></p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict in the scene about Team 7 is a struggle over whether to —",
          choices: [
            { letter: "A", text: "fake a working demo or show the truth" },
            { letter: "B", text: "quit the competition or keep going" },
            { letter: "C", text: "replace Mei as the team's presenter" },
            { letter: "D", text: "fix the network or call a teacher" }
          ],
          correct: "A"
        },
        {
          id: "diego",
          sol: "10.RL.1.C",
          stem: "Diego's lines in sentences 26 and 27 characterize him as someone who —",
          choices: [
            { letter: "A", text: "blames Zara for the failure of the app" },
            { letter: "B", text: "cares most about winning the competition" },
            { letter: "C", text: "sees the team's work as real despite the bug" },
            { letter: "D", text: "wants to leave before the judges call them" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Zara's remark in sentence 42 is ironic mainly because —",
          choices: [
            { letter: "A", text: "the judge never looked at the app at all" },
            { letter: "B", text: "the failure they feared earns them an honor" },
            { letter: "C", text: "Zara never wanted to enter the competition" },
            { letter: "D", text: "Mei made every decision without asking her" }
          ],
          correct: "B"
        },
        {
          id: "lights",
          sol: "10.RL.3.A",
          stem: "The playwright uses the stage direction Lights fade in sentence 37 mainly to —",
          choices: [
            { letter: "A", text: "show that the school's power has failed" },
            { letter: "B", text: "suggest that the team has given up" },
            { letter: "C", text: "reveal that the judges are angry" },
            { letter: "D", text: "skip the pitch and jump to its result" }
          ],
          correct: "D"
        },
        {
          id: "panic",
          sol: "10.RL.2.B",
          stem: "The repeated short sentences in Zara's first speech (sentences 4 through 6) mainly create a tone of —",
          choices: [
            { letter: "A", text: "calm confidence" },
            { letter: "B", text: "bored annoyance" },
            { letter: "C", text: "rising panic" },
            { letter: "D", text: "quiet humor" }
          ],
          correct: "C"
        },
        {
          id: "fake",
          sol: "10.RV.1.B",
          stem: "In sentence 15, when Mei asks whether Zara can fake it, the word fake most nearly means —",
          choices: [
            { letter: "A", text: "imitate falsely" },
            { letter: "B", text: "repair quickly" },
            { letter: "C", text: "explain clearly" },
            { letter: "D", text: "cancel completely" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the scene outside the library?",
          choices: [
            { letter: "A", text: "Technology always fails at the worst possible moment." },
            { letter: "B", text: "Teamwork means letting one person make every choice." },
            { letter: "C", text: "Competitions reward only the most polished products." },
            { letter: "D", text: "Honesty about failure can be worth more than a polished show." }
          ],
          correct: "D"
        },
        {
          id: "floor",
          sol: "10.RL.2.A",
          stem: "Mei's instruction in sentence 34 that nobody is allowed to look at the floor suggests that she wants the team to —",
          choices: [
            { letter: "A", text: "pay attention to where they walk" },
            { letter: "B", text: "appear confident rather than ashamed" },
            { letter: "C", text: "avoid making eye contact with judges" },
            { letter: "D", text: "keep their written notes out of sight" }
          ],
          correct: "B"
        }
      ]
    },

    /* 12 · Functional text · photography */
    {
      id: "g10-ri-c79-photo-contest",
      family: "G10",
      title: "Close to Home: Contest Rules",
      kind: "Functional text · 10.RI",
      blurb: "The official rules for a county library's teen photography contest.",
      level: 1,
      passage:
        "<p><strong>Harbor View Library Teen Photography Contest: Official Rules</strong></p>" +
        "<p><strong>Theme.</strong> " + N(1) + "This year's theme is \"Close to Home.\" " +
        N(2) + "We want photographs that show a place, person, object, or moment from your own neighborhood that others might overlook.</p>" +
        "<p><strong>Who May Enter.</strong> " + N(3) + "The contest is open to students in grades 9 through 12 who live in Harbor County or attend a Harbor County school. " +
        N(4) + "Each student may submit up to two photographs.</p>" +
        "<p><strong>Deadline.</strong> " + N(5) + "Entries must be uploaded by 11:59 p.m. on Friday, March 14. " +
        N(6) + "Late entries will not be accepted, even if the upload page is still open.</p>" +
        "<p><strong>How to Enter.</strong> " + N(7) + "Upload each photo as a JPEG file at least 2,000 pixels on its longest side through the library's contest page. " +
        N(8) + "With each photo, include a title and a caption of no more than 50 words explaining where the photo was taken and why you chose it. " +
        N(9) + "Students under 18 must also upload a permission form signed by a parent or guardian; entries without the form will be held, not judged, until it arrives.</p>" +
        "<p><strong>Photo Rules.</strong> " + N(10) + "Basic edits, such as cropping, straightening, and adjusting brightness or contrast, are allowed. " +
        N(11) + "Adding, removing, or moving objects in the image is not allowed, and neither are images created or changed by artificial intelligence tools. " +
        N(12) + "If a recognizable person appears in your photo, you must have that person's permission to enter it; for anyone under 18, you also need a parent's permission. " +
        N(13) + "Photos must be your own work and must not have won a prize in another contest.</p>" +
        "<p><strong>Judging.</strong> " + N(14) + "A panel of three judges, including a local newspaper photographer and a library staff member, will score each entry on three equal parts: connection to the theme, technical quality, and originality. " +
        N(15) + "Captions will be read but not scored, though judges may use them to understand a photo's setting.</p>" +
        "<p><strong>Prizes.</strong> " + N(16) + "First place receives a $150 gift card to Bayside Camera Supply, and second and third place receive $75 and $50 gift cards. " +
        N(17) + "The top twenty photos will be printed and displayed in the library's main hall during April, with a public reception on the first Saturday.</p>" +
        "<p><strong>Your Rights.</strong> " + N(18) + "You keep the copyright to your photos. " +
        N(19) + "By entering, you allow the library to display and share your photo, with your name, in the exhibit and on its website and social media accounts.</p>" +
        "<p><strong>Questions?</strong> " + N(20) + "Email the Teen Services desk or stop by any weekday afternoon between 3:00 and 6:00, and a staff member will be glad to help.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes the Harbor View contest rules as a whole?",
          choices: [
            { letter: "A", text: "Only professional photographers may enter the contest this year." },
            { letter: "B", text: "Local teens may enter two original photos of home, following clear rules." },
            { letter: "C", text: "The contest is mainly a fundraiser for the library's new teen room." },
            { letter: "D", text: "Judges will choose the winning photographs based mostly on captions." }
          ],
          correct: "B"
        },
        {
          id: "unaltered",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the idea that the Harbor View contest values honest, unaltered photographs?",
          choices: [
            { letter: "A", text: "sentence 4" },
            { letter: "B", text: "sentence 15" },
            { letter: "C", text: "sentence 17" },
            { letter: "D", text: "sentence 11" }
          ],
          correct: "D"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          stem: "The bold headings in the contest rules help a reader mainly by —",
          choices: [
            { letter: "A", text: "dividing the rules into topics that are easy to find" },
            { letter: "B", text: "listing the prizes in order from most to least" },
            { letter: "C", text: "showing which rules matter most to the judges" },
            { letter: "D", text: "explaining the year's theme in greater detail" }
          ],
          correct: "A"
        },
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The Harbor View contest rules are written mainly for —",
          choices: [
            { letter: "A", text: "library staff members who will judge entries" },
            { letter: "B", text: "parents who want to enter their own photos" },
            { letter: "C", text: "high school students who may enter the contest" },
            { letter: "D", text: "newspaper photographers who run the contest" }
          ],
          correct: "C"
        },
        {
          id: "held",
          sol: "10.RI.2.B",
          stem: "In sentence 9, the phrase held, not judged mainly emphasizes that an entry missing its permission form —",
          choices: [
            { letter: "A", text: "will be returned to the student who sent it" },
            { letter: "B", text: "will be disqualified from the contest at once" },
            { letter: "C", text: "will be judged only after the deadline passes" },
            { letter: "D", text: "will wait, unscored, until the form arrives" }
          ],
          correct: "D"
        },
        {
          id: "overlook",
          sol: "10.RV.1.C",
          stem: "In sentence 2, the word overlook most nearly means —",
          choices: [
            { letter: "A", text: "view from above" },
            { letter: "B", text: "fail to notice" },
            { letter: "C", text: "look over carefully" },
            { letter: "D", text: "take a photo of" }
          ],
          correct: "B"
        },
        {
          id: "together",
          sol: "10.RI.2.C",
          stem: "Which statement is best supported by sentences 6 and 9 of the contest rules together?",
          choices: [
            { letter: "A", text: "Any entry missing a form is rejected right away." },
            { letter: "B", text: "The upload page closes exactly at the deadline." },
            { letter: "C", text: "A late entry is refused, but a missing form only delays judging." },
            { letter: "D", text: "Students over 18 do not need to give their photos titles." }
          ],
          correct: "C"
        },
        {
          id: "originality",
          sol: "10.RV.1.B",
          stem: "In sentence 14, the word originality most nearly means —",
          choices: [
            { letter: "A", text: "freshness and newness of ideas" },
            { letter: "B", text: "the place where a photo was taken" },
            { letter: "C", text: "the first copy of a printed photo" },
            { letter: "D", text: "technical skill with a camera" }
          ],
          correct: "A"
        }
      ]
    },

    /* 13 · Argument · app design and coding */
    {
      id: "g10-ri-c79-open-the-lab",
      family: "G10",
      title: "Open the Lab After Three",
      kind: "Argument · 10.RI",
      blurb: "A student argues that thirty-two idle computers should stay available two afternoons a week.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every afternoon at 3:05, the computer lab in room 114 at Lakeside High locks its door, and thirty-two of the most powerful machines in the building sit dark until the next morning. " +
        N(2) + "Meanwhile, students who want to learn programming do it wherever they can: on a parent's work laptop at the kitchen table, on a phone in the back of the bus, or not at all. " +
        N(3) + "The school should open the lab until 5:00 p.m. on Tuesdays and Thursdays, and it should do so this semester.</p>" +
        "<p>" + N(4) + "The need is not hypothetical. " +
        N(5) + "When the Coding Club posted a sign-up sheet in September, forty-one students signed it in two days, but only nineteen said they had a computer at home that they did not have to share. " +
        N(6) + "The club now meets in a regular classroom, where members take turns on six borrowed laptops, and a project that should take a week takes a month.</p>" +
        "<p>" + N(7) + "Other schools have shown that after-school access works. " +
        N(8) + "Brookfield High, in the neighboring district, opened its lab two afternoons a week three years ago. " +
        N(9) + "According to its technology coordinator, the number of students taking the advanced computer science course there has nearly doubled since then. " +
        N(10) + "It is impossible to prove that the lab alone caused that increase, but the timing is hard to ignore.</p>" +
        "<p>" + N(11) + "Some will argue that the lab cannot be left open without a supervisor and that paying one would cost too much. " +
        N(12) + "That concern is fair. " +
        N(13) + "However, two teachers have already told the Coding Club they would volunteer one afternoon each, and the school's parent association has offered to fund a part-time aide if needed. " +
        N(14) + "Others worry that students would use the computers only for games. " +
        N(15) + "A simple sign-in sheet and the filters already installed on every school machine would address most of that risk.</p>" +
        "<p>" + N(16) + "The real cost of keeping the lab closed is harder to see because it does not show up on any budget. " +
        N(17) + "It is the student who has an idea for an app that could help her grandmother track medications but no place to build it. " +
        N(18) + "It is the student who gives up on programming in tenth grade, not because she lacked talent, but because she lacked a keyboard after three o'clock.</p>" +
        "<p>" + N(19) + "Room 114 already has the machines, the desks, and the electricity. " +
        N(20) + "All it needs is an unlocked door and four hours a week. " +
        N(21) + "That is a small price for a large opportunity, and it is one our school can easily afford.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the central claim of the essay about room 114?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 8" },
            { letter: "C", text: "sentence 3" },
            { letter: "D", text: "sentence 16" }
          ],
          correct: "C"
        },
        {
          id: "access",
          sol: "10.RI.1.B",
          stem: "Which detail best supports the claim that many Lakeside students lack reliable access to computers?",
          choices: [
            { letter: "A", text: "Only nineteen of forty-one sign-ups had an unshared computer." },
            { letter: "B", text: "Two teachers have offered to volunteer one afternoon each." },
            { letter: "C", text: "Brookfield High opened its lab three years ago." },
            { letter: "D", text: "School machines already have filters installed." }
          ],
          correct: "A"
        },
        {
          id: "limit",
          sol: "10.RI.1.C",
          stem: "The writer of the room 114 essay includes sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "admit that the Brookfield evidence is useless" },
            { letter: "B", text: "argue that Brookfield's coordinator is wrong" },
            { letter: "C", text: "suggest that Lakeside copy Brookfield's courses" },
            { letter: "D", text: "admit a limit of the evidence while still using it" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "10.RI.2.C",
          stem: "In sentences 11 through 13, the writer responds to the opposing view mainly by —",
          choices: [
            { letter: "A", text: "dismissing the concern as foolish and unfounded" },
            { letter: "B", text: "granting the concern, then offering a practical fix" },
            { letter: "C", text: "agreeing that the lab should stay closed for now" },
            { letter: "D", text: "changing the subject to students playing games" }
          ],
          correct: "B"
        },
        {
          id: "repeat",
          sol: "10.RI.2.B",
          stem: "The repetition of It is the student who in sentences 17 and 18 mainly emphasizes —",
          choices: [
            { letter: "A", text: "that most students dislike programming" },
            { letter: "B", text: "the individual people a closed lab affects" },
            { letter: "C", text: "the cost of hiring a part-time aide" },
            { letter: "D", text: "that students need more homework help" }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          stem: "How is the essay about the Lakeside lab mainly organized?",
          choices: [
            { letter: "A", text: "as a personal story told in the order it happened" },
            { letter: "B", text: "as a side-by-side comparison of two school clubs" },
            { letter: "C", text: "as a set of numbered steps for using the lab" },
            { letter: "D", text: "as a claim, evidence, counterarguments, and an appeal" }
          ],
          correct: "D"
        },
        {
          id: "dark",
          sol: "10.RV.1.D",
          stem: "In sentence 1, the writer says the machines sit dark rather than simply saying they are turned off. Compared with turned off, sit dark suggests the machines are —",
          choices: [
            { letter: "A", text: "wasted, like an empty building at night" },
            { letter: "B", text: "broken and in need of repair" },
            { letter: "C", text: "too old to be useful to anyone" },
            { letter: "D", text: "hidden from students on purpose" }
          ],
          correct: "A"
        },
        {
          id: "outside",
          sol: "10.RI.1.B",
          stem: "Which sentence gives evidence from a school other than Lakeside High?",
          choices: [
            { letter: "A", text: "sentence 5" },
            { letter: "B", text: "sentence 13" },
            { letter: "C", text: "sentence 9" },
            { letter: "D", text: "sentence 15" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
