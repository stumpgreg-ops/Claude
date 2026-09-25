/* SOL Labyrinth — Grade 9 long and epic packs (VA 9.RL / 9.RI / 9.DSR): multi-paragraph
 * stories, a long poem, articles, an argument piece and a paired-text set for the late
 * nights of the game (380–650 words). Original text only; no VDOE / copyrighted material.
 * Loaded after content18.js if present; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LONG · LITERARY ───────────────────────── */
    {
      id: "g9-l-piano-door",
      family: "G9",
      title: "Thirty-Six Inches",
      kind: "Literary · 9.RL",
      blurb: "A fifty-one-year-old piano, a doorway two inches too narrow, and two days to move it.",
      level: 2,
      passage:
        "<p>" + N(1) + "The piano had been in the front room of the house on Larkin Street for fifty-one years, and on the morning it had to leave, it did not seem interested in going. " +
        N(2) + "Devin's grandfather stood beside it with one hand flat on the lid, the way a person might rest a hand on the shoulder of an old friend. " +
        N(3) + "\"We'll roll it to the door, tip it onto the dolly, and walk it down the ramp,\" he said. " +
        N(4) + "He said it as if he had done it many times, though Devin knew he had not. " +
        N(5) + "The house had sold in March, the new owners arrived on Saturday, and it was Thursday.</p>" +
        "<p>" + N(6) + "They rolled it easily enough. " +
        N(7) + "The casters squealed across the wood floor, and the strings inside gave a low, complaining hum with every bump. " +
        N(8) + "At the doorway, though, the piano stopped as if it had made a decision. " +
        N(9) + "Devin measured with the tape from his pocket: the piano was thirty-six inches deep, and the door frame was thirty-four. " +
        N(10) + "His grandfather measured it again, slower, as though the numbers might change if he watched them carefully. " +
        N(11) + "They did not.</p>" +
        "<p>" + N(12) + "\"It came in through this door,\" his grandfather said. " +
        N(13) + "\"Then it can go out through it.\" " +
        N(14) + "He tried angling it, and Devin pushed from the other side until his shoulders burned, but a piano is not a couch; it does not bend or fold or forgive. " +
        N(15) + "By noon they had scraped the paint off one side of the frame and moved the piano exactly nowhere. " +
        N(16) + "His grandfather sat down on the bench, which was the only thing left in the room besides the piano, and said nothing for a long time.</p>" +
        "<p>" + N(17) + "Devin walked around the frame twice. " +
        N(18) + "Then he crouched and looked at the hinges. " +
        N(19) + "They were old brass, painted over so many times that the pins were nearly hidden, but they were pins, and pins come out. " +
        N(20) + "\"Grandpa,\" he said. " +
        N(21) + "\"What if the door came off?\" " +
        N(22) + "His grandfather looked at the hinges for a moment, and something in his face loosened. " +
        N(23) + "\"Your grandmother's brother took that door off in 1974,\" he said quietly. " +
        N(24) + "\"I was holding the other end of the piano, and I forgot.\"</p>" +
        "<p>" + N(25) + "The pins came out with a hammer, a nail, and a great deal of rust. " +
        N(26) + "With the door off and the stop molding pried loose, the frame gave them thirty-seven inches, which was one more than they needed. " +
        N(27) + "The piano went through with half an inch to spare and a sound like a sigh. " +
        N(28) + "On the ramp, Devin walked backward and his grandfather walked forward, and neither of them said anything until the piano was strapped in the truck. " +
        N(29) + "\"You measured,\" his grandfather said finally. " +
        N(30) + "\"I remembered.\" " +
        N(31) + "\"Turns out it takes both.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme the story develops?",
          choices: [
            { letter: "A", text: "Old objects should be left where they were first placed." },
            { letter: "B", text: "Younger people usually know more than their elders do." },
            { letter: "C", text: "Selling a family home is always a painful decision." },
            { letter: "D", text: "Solving a problem can take both fresh thinking and experience." }
          ],
          correct: "D"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Sentence 10 mainly suggests that Devin's grandfather —",
          choices: [
            { letter: "A", text: "does not trust the tape measure Devin is using" },
            { letter: "B", text: "hopes the measurements will somehow work out" },
            { letter: "C", text: "is worried that the piano will be damaged" },
            { letter: "D", text: "wants Devin to try pushing it one more time" }
          ],
          correct: "B"
        },
        {
          id: "fig",
          sol: "9.RL.2.A",
          stem: "In sentence 8, the author says the piano stopped as if it had made a decision mainly to —",
          choices: [
            { letter: "A", text: "suggest that the old house is haunted" },
            { letter: "B", text: "show that the grandfather has lost control of the dolly" },
            { letter: "C", text: "give the piano a stubbornness that matches the grandfather's" },
            { letter: "D", text: "explain why the casters squealed on the floor" }
          ],
          correct: "C"
        },
        {
          id: "plot",
          sol: "9.RL.1.B",
          stem: "What finally allows the piano to fit through the doorway?",
          choices: [
            { letter: "A", text: "Tipping it onto the dolly at a sharp angle." },
            { letter: "B", text: "Scraping the paint off the door frame." },
            { letter: "C", text: "Removing the door and the stop molding." },
            { letter: "D", text: "Getting help from the new owners of the house." }
          ],
          correct: "C"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 14, the word forgive is used to suggest that the piano —",
          choices: [
            { letter: "A", text: "will not give even a little" },
            { letter: "B", text: "is angry at being moved" },
            { letter: "C", text: "is heavier than it looks" },
            { letter: "D", text: "has already been damaged" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RL.3.B",
          stem: "How does the fourth paragraph (sentences 17–24) function in the story?",
          choices: [
            { letter: "A", text: "It introduces a new conflict between Devin and his grandfather." },
            { letter: "B", text: "It provides the turning point at which the problem begins to be solved." },
            { letter: "C", text: "It explains why the family decided to sell the house." },
            { letter: "D", text: "It describes the front room in greater detail." }
          ],
          correct: "B"
        },
        {
          id: "early",
          sol: "9.RL.3.A",
          stem: "Sentence 5 is important to the rest of the story because it —",
          choices: [
            { letter: "A", text: "explains why the new owners do not want the piano" },
            { letter: "B", text: "shows that the grandfather has planned the move for months" },
            { letter: "C", text: "tells readers exactly how old the piano is" },
            { letter: "D", text: "creates pressure by giving the pair only two days" }
          ],
          correct: "D"
        },
        {
          id: "craft",
          sol: "9.RL.2.B",
          stem: "The description in sentence 2 of the grandfather's hand resting on the lid mainly conveys his —",
          choices: [
            { letter: "A", text: "fondness for the piano" },
            { letter: "B", text: "fear of dropping it" },
            { letter: "C", text: "impatience to begin" },
            { letter: "D", text: "doubt about the dolly" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-l-aisle-seven",
      family: "G9",
      title: "Aisle Seven",
      kind: "Literary · 9.RL",
      blurb: "Lucía has been her grandmother's translator for three years. A dripping faucet changes that.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every Saturday since she turned twelve, Lucía had been her grandmother's voice. " +
        N(2) + "At the pharmacy, the bank, the front office of the apartment building, Lucía stood half a step ahead and translated, and her grandmother, Abuela Carmen, stood half a step behind and nodded at the right moments. " +
        N(3) + "It was an arrangement neither of them had ever discussed. " +
        N(4) + "It had simply grown up around them, like ivy on a fence, until it was hard to tell where the fence ended.</p>" +
        "<p>" + N(5) + "On the Saturday the kitchen faucet began to drip, they went to Harlan's Hardware on Ninth Street. " +
        N(6) + "Lucía was fifteen now and had a history quiz on Monday and a friend waiting to study, and she walked fast. " +
        N(7) + "\"Just tell me what you need,\" she said in Spanish, \"and I'll ask.\" " +
        N(8) + "Her grandmother did not answer right away. " +
        N(9) + "She was looking down the long aisle of pipes and fittings, and her face wore the expression it had when she was adding numbers in her head.</p>" +
        "<p>" + N(10) + "A clerk in a red vest appeared, a tall boy not much older than Lucía. " +
        N(11) + "\"Help you find something?\" " +
        N(12) + "Lucía opened her mouth to explain about the faucet, but her grandmother had already stepped past her. " +
        N(13) + "\"Cartridge,\" Abuela Carmen said, in careful English. " +
        N(14) + "\"For a single-handle. " +
        N(15) + "Not the ball kind. " +
        N(16) + "The other.\" " +
        N(17) + "The clerk blinked, then nodded and led her to aisle seven. " +
        N(18) + "Lucía followed, holding the words she had been about to say like a bag of groceries nobody had asked her to carry.</p>" +
        "<p>" + N(19) + "In aisle seven, her grandmother turned the cartridge over in her hands, read the tiny numbers on the package, and shook her head. " +
        N(20) + "\"This one is for the old style,\" she told the clerk. " +
        N(21) + "\"Ours is new. " +
        N(22) + "Two years.\" " +
        N(23) + "She said two years with a small frown, as if the faucet had let her down personally. " +
        N(24) + "The clerk found a second package, and she compared them side by side, and chose. " +
        N(25) + "At the register she counted out exact change before the total appeared on the screen.</p>" +
        "<p>" + N(26) + "Outside, the sun was bright on the parked cars, and Lucía found she did not know where to walk: half a step ahead, or half a step behind. " +
        N(27) + "\"You never told me you could do that,\" she said. " +
        N(28) + "Her grandmother tucked the bag under her arm. " +
        N(29) + "\"You never asked,\" she said, in English, and then in Spanish, more gently: \"I listened to you for three years, mija. " +
        N(30) + "Did you think I was only nodding?\" " +
        N(31) + "Lucía thought about the pharmacy, the bank, the office. " +
        N(32) + "She thought about all the times she had been proud of being needed. " +
        N(33) + "They walked home side by side, which turned out to be a little slower and a great deal easier.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best states a theme developed in the story?",
          choices: [
            { letter: "A", text: "Helping someone can quietly become a way of underestimating them." },
            { letter: "B", text: "Learning a new language is easiest when it is practiced at home." },
            { letter: "C", text: "Teenagers are often too busy to spend time with older relatives." },
            { letter: "D", text: "Fixing a household problem yourself saves a great deal of money." }
          ],
          correct: "A"
        },
        {
          id: "fig",
          sol: "9.RL.2.A",
          stem: "In sentence 4, the comparison to ivy on a fence mainly suggests that the arrangement —",
          choices: [
            { letter: "A", text: "was unwelcome to both Lucía and her grandmother" },
            { letter: "B", text: "formed gradually and became hard to separate from their relationship" },
            { letter: "C", text: "protected the grandmother from being embarrassed in public" },
            { letter: "D", text: "was something Lucía's parents had carefully planned" }
          ],
          correct: "B"
        },
        {
          id: "foreshadow",
          sol: "9.RL.1.C",
          stem: "Sentence 9 hints that Abuela Carmen —",
          choices: [
            { letter: "A", text: "is confused by the layout of the store" },
            { letter: "B", text: "is unhappy that Lucía is rushing her" },
            { letter: "C", text: "is preparing to handle the task herself" },
            { letter: "D", text: "has forgotten why they came to the store" }
          ],
          correct: "C"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 13, the word careful suggests that Abuela Carmen's English is —",
          choices: [
            { letter: "A", text: "deliberate and thought out" },
            { letter: "B", text: "fluent and rapid" },
            { letter: "C", text: "nervous and full of mistakes" },
            { letter: "D", text: "loud and impatient" }
          ],
          correct: "A"
        },
        {
          id: "craft",
          sol: "9.RL.2.B",
          stem: "The image in sentence 18 of words held like a bag of groceries nobody had asked her to carry mainly conveys Lucía's —",
          choices: [
            { letter: "A", text: "relief at being freed from a chore" },
            { letter: "B", text: "anger at the clerk for ignoring her" },
            { letter: "C", text: "sudden feeling of being unnecessary" },
            { letter: "D", text: "worry that the faucet cannot be fixed" }
          ],
          correct: "C"
        },
        {
          id: "link",
          sol: "9.RL.1.B",
          stem: "Sentence 25 connects back to sentence 9 by showing that Abuela Carmen —",
          choices: [
            { letter: "A", text: "had planned the shopping trip for weeks" },
            { letter: "B", text: "is as quick with numbers as she is with words" },
            { letter: "C", text: "distrusts the store's cash registers" },
            { letter: "D", text: "wants to finish before Lucía's study session" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "9.RL.3.B",
          stem: "How does the final paragraph resolve the situation introduced in the first paragraph?",
          choices: [
            { letter: "A", text: "Lucía agrees to keep translating whenever her grandmother asks." },
            { letter: "B", text: "The grandmother decides to run all future errands alone." },
            { letter: "C", text: "Lucía admits that her help was never really needed." },
            { letter: "D", text: "The unspoken half-step arrangement gives way to walking side by side." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.1.D",
          stem: "In sentence 29, the shift from English to Spanish, more gently, suggests that Abuela Carmen wants to —",
          choices: [
            { letter: "A", text: "correct Lucía's grammar" },
            { letter: "B", text: "prove she can speak both languages" },
            { letter: "C", text: "end the conversation quickly" },
            { letter: "D", text: "soften a truth that might sting" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-l-water-tower",
      family: "G9",
      title: "Left at the Water Tower",
      kind: "Literary · 9.RL",
      blurb: "The fifth-fastest runner on the team knows one thing the leaders do not: the course.",
      level: 2,
      passage:
        "<p>" + N(1) + "Marcus Bell was the fifth-fastest runner on the Ridgeview cross-country team, which was exactly one place too slow to matter. " +
        N(2) + "Only the top four scored in a dual meet. " +
        N(3) + "Coach Ahn told him every week that fifth was \"the most important place on the team,\" and every week Marcus nodded and wished it were fourth. " +
        N(4) + "What Marcus did have was the course. " +
        N(5) + "The district championship was run on the trails behind Ridgeview, and he had spent two summers on those trails, on foot and on his bike, until he knew every root, every soft patch, and the exact spot where the loop split at the old water tower.</p>" +
        "<p>" + N(6) + "On the morning of the championship, fog sat in the low places of the course like milk in a bowl. " +
        N(7) + "The officials had marked the route with orange flags, but the flags were small and the fog was not. " +
        N(8) + "At the starting line, Marcus found himself beside Tomas Reyes, the fastest runner in the district, a boy who had never lost a race on this course because he had never run this course. " +
        N(9) + "\"Sharp left at the tower,\" Marcus said, for no reason he could explain. " +
        N(10) + "Tomas looked at him and did not answer.</p>" +
        "<p>" + N(11) + "The gun went off, and the pack went with it. " +
        N(12) + "By the first mile, Tomas and three others had pulled away, their backs shrinking into the gray. " +
        N(13) + "Marcus settled into his usual place, behind the leaders and ahead of the crowd. " +
        N(14) + "He ran the roots and the soft patch without looking down. " +
        N(15) + "When the trail climbed toward the water tower, he could hear the leaders ahead but could not see them.</p>" +
        "<p>" + N(16) + "At the tower, the loop split: left to the finish, right to a second loop that added a full mile. " +
        N(17) + "The orange flag that should have marked the left turn lay face down in the wet grass. " +
        N(18) + "Marcus saw four sets of fresh footprints go right. " +
        N(19) + "He stopped, which is a thing no runner does at mile two of a championship, and shouted into the fog: \"LEFT! " +
        N(20) + "THE TOWER IS LEFT!\" " +
        N(21) + "Then he went left himself.</p>" +
        "<p>" + N(22) + "He did not see who came back. " +
        N(23) + "He heard them, though: a crash through the brush, a shout, feet pounding the trail behind him. " +
        N(24) + "In the last half mile, Tomas passed him like a train passing a station, and two of the others passed him after that. " +
        N(25) + "Marcus crossed the line in fourth, his best finish ever, twenty seconds ahead of the fourth runner from the other school. " +
        N(26) + "Ridgeview won the district by a single point.</p>" +
        "<p>" + N(27) + "Afterward, Tomas found him at the water table. " +
        N(28) + "\"You didn't have to yell,\" he said. " +
        N(29) + "\"You could have let us run the extra mile.\" " +
        N(30) + "Marcus thought about that. " +
        N(31) + "\"I've been fifth all season,\" he said. " +
        N(32) + "\"I know what it's like to run a race that doesn't count.\" " +
        N(33) + "Tomas took that in, then held out the bottle he had just opened. " +
        N(34) + "\"Sharp left at the tower,\" he said. " +
        N(35) + "\"I'll remember.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which idea does the story most fully develop?",
          choices: [
            { letter: "A", text: "Winning matters more than how a race is run." },
            { letter: "B", text: "Fog makes cross-country races impossible to judge fairly." },
            { letter: "C", text: "Coaches should praise only their fastest runners." },
            { letter: "D", text: "Knowledge and fairness can matter as much as speed." }
          ],
          correct: "D"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 6, the fog is compared to milk in a bowl mainly to emphasize that it —",
          choices: [
            { letter: "A", text: "is thick and settles into the low ground" },
            { letter: "B", text: "smells strange to the runners" },
            { letter: "C", text: "will burn off before the race begins" },
            { letter: "D", text: "covers the entire course evenly" }
          ],
          correct: "A"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Marcus's decision in sentence 19 is significant mainly because —",
          choices: [
            { letter: "A", text: "he has never stopped during a race before" },
            { letter: "B", text: "stopping goes against every runner's instinct in a championship" },
            { letter: "C", text: "the officials are certain to penalize him for it" },
            { letter: "D", text: "he secretly wants Tomas to lose the race" }
          ],
          correct: "B"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 26, the phrase by a single point suggests that —",
          choices: [
            { letter: "A", text: "the meet was decided by a vote of the officials" },
            { letter: "B", text: "Tomas's school failed to score any points at all" },
            { letter: "C", text: "Marcus's fourth-place finish decided the meet" },
            { letter: "D", text: "the race was declared an exact tie" }
          ],
          correct: "C"
        },
        {
          id: "craft",
          sol: "9.RL.2.B",
          stem: "The statement in sentence 8 that Tomas had never lost a race on this course because he had never run this course mainly serves to —",
          choices: [
            { letter: "A", text: "show that Tomas runs poorly in the fog" },
            { letter: "B", text: "suggest that Tomas's speed may not save him here" },
            { letter: "C", text: "explain why Marcus dislikes Tomas" },
            { letter: "D", text: "describe how difficult the trail is" }
          ],
          correct: "B"
        },
        {
          id: "early",
          sol: "9.RL.1.B",
          stem: "How does the detail in sentence 5 prepare readers for what happens at the water tower?",
          choices: [
            { letter: "A", text: "It explains why Marcus recognizes the missing flag and the wrong turn." },
            { letter: "B", text: "It shows that Marcus has trained harder than Tomas." },
            { letter: "C", text: "It reveals that Marcus helped build the water tower trail." },
            { letter: "D", text: "It suggests that the officials asked Marcus for help." }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "9.RL.3.B",
          stem: "Tomas repeats Sharp left at the tower in sentence 34 mainly to —",
          choices: [
            { letter: "A", text: "tease Marcus for giving unnecessary advice" },
            { letter: "B", text: "show that he has memorized the course" },
            { letter: "C", text: "warn Marcus about next year's race" },
            { letter: "D", text: "acknowledge that he should have listened to Marcus" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── LONG · POETRY ───────────────────────── */
    {
      id: "g9-l-poem-seasoning",
      family: "G9",
      title: "Seasoning",
      kind: "Poetry · 9.RL",
      blurb: "A cast-iron pan, a rule about soap, and what a grandmother does with a ruined thing.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The pan came to me black as a river stone,<br>" +
        L(2) + "heavier than any pan has a right to be,<br>" +
        L(3) + "with a handle worn pale where three sets of hands<br>" +
        L(4) + "had held it over three different stoves.<br>" +
        L(5) + "My grandmother's rule: never soap it, never soak it,<br>" +
        L(6) + "wipe it warm and rub it with oil<br>" +
        L(7) + "until it shines like something that has been forgiven.<br>" +
        L(8) + "I did not understand. I was fourteen and in a hurry,<br>" +
        L(9) + "and a pan was a pan, and the dishwasher was right there.<br>" +
        L(10) + "So one night I let it sit in the sink,<br>" +
        L(11) + "and in the morning it wore a coat of rust<br>" +
        L(12) + "the color of a dried leaf, and I thought I had killed it.<br>" +
        L(13) + "She did not scold. She scrubbed it down to bare gray iron,<br>" +
        L(14) + "oiled it, and put it in the oven for an hour,<br>" +
        L(15) + "and then again, and then again,<br>" +
        L(16) + "the kitchen filling with a smell like a struck match.<br>" +
        L(17) + "\"Seasoning,\" she said, \"is only patience<br>" +
        L(18) + "laid down in layers thin enough to see through.\"<br>" +
        L(19) + "I use it now most mornings. The eggs slide.<br>" +
        L(20) + "The handle has gone paler where my hand goes,<br>" +
        L(21) + "a fourth stove, a fourth set of fingerprints<br>" +
        L(22) + "rubbed into the same worn place.<br>" +
        L(23) + "Some things you cannot inherit whole.<br>" +
        L(24) + "You inherit the rule, and the ruin,<br>" +
        L(25) + "and the hour in the oven, and the hour after that,<br>" +
        L(26) + "and the shine comes later, if it comes at all." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RL.1.A",
          stem: "Which statement best captures the central idea of the poem?",
          choices: [
            { letter: "A", text: "Traditions survive only through repeated care and patience." },
            { letter: "B", text: "Modern conveniences make old tools unnecessary." },
            { letter: "C", text: "Grandparents tend to be stricter than parents." },
            { letter: "D", text: "Cooking is a skill best learned from written recipes." }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In line 7, comparing the shine to something that has been forgiven suggests that —",
          choices: [
            { letter: "A", text: "the pan was once stolen and returned" },
            { letter: "B", text: "the speaker has apologized to the grandmother" },
            { letter: "C", text: "oil works better than soap for cleaning" },
            { letter: "D", text: "careful treatment restores the pan after rough use" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "9.RL.3.B",
          stem: "How does the poem's structure develop its meaning?",
          choices: [
            { letter: "A", text: "It alternates between the grandmother's voice and the speaker's voice." },
            { letter: "B", text: "It moves from the speaker's carelessness through the repair to the speaker's own use of the pan years later." },
            { letter: "C", text: "It describes the pan in exactly the same way in every section." },
            { letter: "D", text: "It lists rules for cooking in order of their importance to the speaker." }
          ],
          correct: "B"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In line 24, the word ruin most nearly refers to —",
          choices: [
            { letter: "A", text: "the rust the speaker caused" },
            { letter: "B", text: "the price of a new pan" },
            { letter: "C", text: "the loss of the grandmother" },
            { letter: "D", text: "the smell from the oven" }
          ],
          correct: "A"
        },
        {
          id: "link",
          sol: "9.RL.1.B",
          stem: "Lines 20–22 connect back to lines 3–4 by showing that —",
          choices: [
            { letter: "A", text: "the speaker has replaced the pan's worn handle" },
            { letter: "B", text: "the pan is now too worn to be used safely" },
            { letter: "C", text: "the speaker has joined the line of hands that have held the pan" },
            { letter: "D", text: "the speaker cooks on the same stove the grandmother used" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.1.D",
          stem: "The tone of the final four lines is best described as —",
          choices: [
            { letter: "A", text: "bitter" },
            { letter: "B", text: "playful" },
            { letter: "C", text: "reflective" },
            { letter: "D", text: "anxious" }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.1.C",
          stem: "Lines 8–9 suggest that the speaker at fourteen —",
          choices: [
            { letter: "A", text: "respected the rule but forgot it once" },
            { letter: "B", text: "had never seen a dishwasher before" },
            { letter: "C", text: "was afraid of the heavy pan" },
            { letter: "D", text: "saw the pan as ordinary and the rule as a nuisance" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── LONG · INFORMATIONAL ───────────────────────── */
    {
      id: "g9-l-green-light",
      family: "G9",
      title: "Who Decides When the Light Turns Green",
      kind: "Informational · 9.RI",
      blurb: "Loops of wire, push buttons, and the rules running inside the gray box on the corner.",
      level: 2,
      passage:
        "<p>" + N(1) + "Most people stopped at a red light assume that something simple is happening: a timer counts down, the light changes, and the timer starts again. " +
        N(2) + "For some intersections, that is exactly right. " +
        N(3) + "A fixed-time signal runs the same cycle all day, giving each direction a set number of seconds whether there are forty cars waiting or none. " +
        N(4) + "Fixed-time signals are cheap and predictable, and in a downtown grid where traffic is heavy in every direction, they work well. " +
        N(5) + "But at a quiet crossroads at two in the morning, a fixed-time signal will make a lone driver wait for traffic that is not there.</p>" +
        "<p>" + N(6) + "To solve this, engineers use what they call actuated signals. " +
        N(7) + "An actuated signal does not change until something asks it to. " +
        N(8) + "The asking is done by detectors. " +
        N(9) + "The most common detector is an induction loop, a coil of wire buried in a shallow cut in the pavement just before the stop line. " +
        N(10) + "When a car's metal body rolls over the loop, it changes the electrical field in the wire, and a small box at the corner registers that a vehicle is waiting. " +
        N(11) + "If you have ever noticed a rectangle of tar lines in the road at an intersection, you have seen the outline of a loop. " +
        N(12) + "Newer intersections may use video cameras or radar instead, but the principle is the same: the signal waits for a request.</p>" +
        "<p>" + N(13) + "A pedestrian push button is another kind of request. " +
        N(14) + "Pressing it does not make the light change faster, a fact that disappoints many people who press it several times. " +
        N(15) + "What it does is add a walk phase to the next cycle. " +
        N(16) + "At a busy intersection, the walk phase might run automatically; at a quiet one, the signal skips it unless someone asks, because a walk phase makes every driver wait longer.</p>" +
        "<p>" + N(17) + "The hardest job belongs to the engineers who tune these signals. " +
        N(18) + "Every green light for one street is a red light for another, and every extra second of walk time is a second subtracted from somewhere else. " +
        N(19) + "Traffic engineers study counts of cars at different hours, measure how long a line of vehicles takes to clear, and set minimum green times so that a driver who has just triggered a loop is not cut off before reaching the intersection. " +
        N(20) + "Along a major road, they may also coordinate a series of signals so that a car traveling at the speed limit meets a string of greens, a pattern sometimes called a green wave. " +
        N(21) + "Drivers who speed usually break the wave and arrive at the next red early.</p>" +
        "<p>" + N(22) + "None of this is visible from a car window. " +
        N(23) + "A driver sees a red light and then a green one. " +
        N(24) + "Underneath the pavement and inside the gray cabinet on the corner, though, a set of rules is running, taking requests and weighing them, trying to move the most people with the least waiting. " +
        N(25) + "The next time a light seems to change the moment you arrive, it may not be luck. " +
        N(26) + "It may be a loop of wire that noticed you coming.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best sums up the central idea of the passage?",
          choices: [
            { letter: "A", text: "Fixed-time signals are better than actuated signals in every setting." },
            { letter: "B", text: "Pedestrian buttons make traffic lights change more quickly." },
            { letter: "C", text: "Traffic signals follow rules that respond to requests from vehicles and pedestrians." },
            { letter: "D", text: "Traffic engineers rely mainly on video cameras to count cars." }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "The second and third paragraphs (sentences 6–16) are organized mainly by —",
          choices: [
            { letter: "A", text: "comparing the costs of different kinds of signals" },
            { letter: "B", text: "describing the kinds of requests a signal can receive" },
            { letter: "C", text: "listing problems in the order they were discovered" },
            { letter: "D", text: "arguing against the use of pedestrian buttons" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "9.RI.2.B",
          stem: "The author includes sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "warn drivers about damage to the road surface" },
            { letter: "B", text: "explain how tar is used to seal pavement" },
            { letter: "C", text: "show that loops are being replaced by cameras" },
            { letter: "D", text: "connect the explanation to something readers may have seen" }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 6, the word actuated most nearly means —",
          choices: [
            { letter: "A", text: "set in motion by a request" },
            { letter: "B", text: "timed to the exact second" },
            { letter: "C", text: "controlled from a central office" },
            { letter: "D", text: "powered by the sun" }
          ],
          correct: "A"
        },
        {
          id: "link",
          sol: "9.RI.1.B",
          stem: "How does the example in sentence 5 relate to the explanation in sentence 7?",
          choices: [
            { letter: "A", text: "It shows a problem that the actuated signal is designed to solve." },
            { letter: "B", text: "It proves that fixed-time signals are never used anymore." },
            { letter: "C", text: "It describes the same intersection mentioned in sentence 20." },
            { letter: "D", text: "It contradicts the claim made in sentence 4." }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RI.1.C",
          stem: "Based on sentences 20 and 21, a driver who wants to meet a string of green lights should —",
          choices: [
            { letter: "A", text: "press the pedestrian button at each corner" },
            { letter: "B", text: "drive slightly above the speed limit" },
            { letter: "C", text: "travel at the posted speed limit" },
            { letter: "D", text: "avoid major roads during the day" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "9.RI.2.B",
          stem: "The final two sentences (25–26) mainly serve to —",
          choices: [
            { letter: "A", text: "summarize the steps engineers use to tune a signal" },
            { letter: "B", text: "argue that every signal should be actuated" },
            { letter: "C", text: "warn that induction loops often fail in cold weather" },
            { letter: "D", text: "return to the driver's view and make the hidden system seem aware" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-l-shifting-baseline",
      family: "G9",
      title: "Three Generations, One Harbor",
      kind: "Informational · 9.RI",
      blurb: "Why the people who know a place best may be the last to notice it changing.",
      level: 3,
      passage:
        "<p>" + N(1) + "In the 1990s, a marine biologist noticed something odd while interviewing three generations of fishermen from the same coastal town. " +
        N(2) + "The oldest men described a harbor where fish had been so large and plentiful that a single morning's catch fed a family for a week. " +
        N(3) + "Their sons remembered a smaller catch, but a good one, and considered the harbor healthy. " +
        N(4) + "The grandsons, who fished the same water, described it as \"about normal\" and had no complaint. " +
        N(5) + "All three groups were describing the same place, but each generation measured it against the ocean it had known first.</p>" +
        "<p>" + N(6) + "Scientists now call this pattern a shifting baseline. " +
        N(7) + "A baseline is the reference point a person uses to judge whether something has changed. " +
        N(8) + "When each generation accepts the conditions it grew up with as normal, the baseline slides quietly downward, and a long decline can pass unnoticed because no single person ever sees more than one piece of it. " +
        N(9) + "The grandsons were not wrong about their harbor; they simply had no memory of the harbor their grandfathers had fished.</p>" +
        "<p>" + N(10) + "The problem is not limited to fish. " +
        N(11) + "Ecologists studying bird populations, forest cover, and the clarity of lakes have found the same pattern. " +
        N(12) + "A city park that seems full of songbirds to a ten-year-old may hold a third of the species it held fifty years earlier. " +
        N(13) + "A river that residents describe as \"a little cloudy\" may once have been clear enough to see the bottom at ten feet. " +
        N(14) + "In each case, the people closest to the place are the least likely to notice the change, precisely because they are so familiar with it.</p>" +
        "<p>" + N(15) + "Shifting baselines matter because they shape decisions. " +
        N(16) + "If a community believes its harbor is normal, it will not vote to protect it. " +
        N(17) + "If a restoration project aims only to return a wetland to how it looked in the 1980s, it may be aiming at a target that was already damaged. " +
        N(18) + "Some scientists argue that the true goal of restoration should be set by the oldest records available: ship logs, museum specimens, early photographs, and the memories of the last people who saw a place before it changed.</p>" +
        "<p>" + N(19) + "There are ways to fight the drift. " +
        N(20) + "Long-term monitoring programs, in which the same measurements are taken at the same sites for decades, create a record that does not depend on anyone's memory. " +
        N(21) + "Historical ecology, a field that combines old documents with modern science, can reconstruct what a place looked like centuries ago. " +
        N(22) + "And simply talking to elders, as the biologist did, can reveal a past that no instrument recorded. " +
        N(23) + "The fishermen's grandfathers did not have data. " +
        N(24) + "They had something that turned out to be almost as valuable: a memory of the way things were before anyone thought to write it down.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the passage's central idea?",
          choices: [
            { letter: "A", text: "Fishermen tend to exaggerate the size of the catches they remember." },
            { letter: "B", text: "Long-term monitoring programs are too expensive for most towns." },
            { letter: "C", text: "Cities should do more to protect the songbirds in their parks." },
            { letter: "D", text: "Because each generation treats its own starting point as normal, long-term decline can go unnoticed." }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "The author opens with the story of the three generations mainly to —",
          choices: [
            { letter: "A", text: "prove that the harbor has fully recovered" },
            { letter: "B", text: "give a concrete example before naming and defining the concept" },
            { letter: "C", text: "criticize the grandsons for failing to complain" },
            { letter: "D", text: "describe the biologist's long career" }
          ],
          correct: "B"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 7, the word baseline most nearly means —",
          choices: [
            { letter: "A", text: "the lowest point a population can reach" },
            { letter: "B", text: "a standard used for comparison" },
            { letter: "C", text: "the shoreline of a harbor" },
            { letter: "D", text: "a line drawn across a chart" }
          ],
          correct: "B"
        },
        {
          id: "link",
          sol: "9.RI.1.B",
          stem: "The example of the a little cloudy river in sentence 13 is most similar to which detail from the first paragraph?",
          choices: [
            { letter: "A", text: "The oldest men's memory of week-long catches." },
            { letter: "B", text: "The biologist's decision to interview three generations." },
            { letter: "C", text: "The grandsons calling the harbor about normal." },
            { letter: "D", text: "The sons' belief that the harbor was healthy but smaller." }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RI.1.C",
          stem: "Based on sentences 17 and 18, the author would most likely say that a restoration project should —",
          choices: [
            { letter: "A", text: "use the earliest reliable records to set its goal" },
            { letter: "B", text: "rely on the memories of current residents" },
            { letter: "C", text: "aim for how the site looked in the 1980s" },
            { letter: "D", text: "avoid using old photographs as evidence" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "9.RI.2.B",
          stem: "Sentence 14 is important to the passage because it —",
          choices: [
            { letter: "A", text: "explains why the problem is hardest to see for the people best placed to see it" },
            { letter: "B", text: "suggests that scientists should replace local residents as observers" },
            { letter: "C", text: "lists the three main causes of water pollution" },
            { letter: "D", text: "summarizes the methods described in the final paragraph" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "9.RI.2.B",
          stem: "The final two sentences (23–24) mainly serve to —",
          choices: [
            { letter: "A", text: "dismiss memory as unreliable compared with data" },
            { letter: "B", text: "argue that the grandsons should have listened more closely" },
            { letter: "C", text: "introduce a new problem the passage has not addressed" },
            { letter: "D", text: "reframe the grandfathers' memories as evidence in their own right" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "9.RI.1.B",
          stem: "Which sentence best supports the idea that shifting baselines affect the choices a community makes?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── LONG · ARGUMENT ───────────────────────── */
    {
      id: "g9-l-fix-things",
      family: "G9",
      title: "A Semester of Fixing Things",
      kind: "Argument · 9.RI",
      blurb: "A student writer argues that every graduate should be able to patch a tire and read a pay stub.",
      level: 3,
      passage:
        "<p>" + N(1) + "Last spring, a survey of 312 juniors at our school asked a simple question: if your bike got a flat tire, could you fix it? " +
        N(2) + "Sixty-eight percent said no. " +
        N(3) + "Asked whether they could sew on a button, replace a light-switch cover, or read a paycheck stub, the numbers were about the same. " +
        N(4) + "These are not rare skills. " +
        N(5) + "They were once taught at home, at a neighbor's, or in a shop class that most high schools have quietly dropped. " +
        N(6) + "It is time to bring them back, in a one-semester course that every student takes before graduating.</p>" +
        "<p>" + N(7) + "The most obvious argument for such a course is money. " +
        N(8) + "A bike shop charges twenty dollars to patch a tube that costs three. " +
        N(9) + "An electrician charges a hundred dollars to do what a fifteen-minute video and a screwdriver could accomplish. " +
        N(10) + "Over a lifetime, the gap between people who can fix small things and people who must pay for every repair adds up to thousands of dollars, and it falls hardest on those who can least afford it.</p>" +
        "<p>" + N(11) + "The deeper argument is about confidence. " +
        N(12) + "A student who has taken apart a faucet and put it back together has learned something no worksheet teaches: that most objects are understandable, that a problem can be broken into steps, and that failure on the first try is normal. " +
        N(13) + "Teachers call this a growth mindset when it shows up on a math test. " +
        N(14) + "It shows up just as clearly at a workbench, and it may be easier to build there, where the result is a faucet that works instead of a grade.</p>" +
        "<p>" + N(15) + "Some will object that the school day is already full. " +
        N(16) + "Every hour spent on tire patches, they argue, is an hour taken from algebra or biology, subjects that appear on the tests by which schools are judged. " +
        N(17) + "This is a fair concern, but it rests on a false choice. " +
        N(18) + "A repair course is not a break from academic thinking; it is academic thinking with the answer key removed. " +
        N(19) + "Measuring a board is geometry. " +
        N(20) + "Understanding why a circuit trips is physics. " +
        N(21) + "Reading a paycheck stub is the most practical math lesson a sixteen-year-old will ever receive.</p>" +
        "<p>" + N(22) + "Others worry about cost, and this objection has more weight. " +
        N(23) + "Tools break, materials run out, and a classroom with a workbench needs a teacher who knows how to use one. " +
        N(24) + "But the equipment for basic repair is cheap compared with a computer lab, and local businesses have already offered to donate used tools. " +
        N(25) + "Two retired tradespeople in our district have volunteered to help design the course. " +
        N(26) + "The barrier is not money; it is the assumption that these skills are not the school's job.</p>" +
        "<p>" + N(27) + "They are. " +
        N(28) + "A school that sends students into the world able to solve equations but unable to stop a dripping faucet has taught them half of what they need. " +
        N(29) + "One semester, one workbench, one flat tire: it is a small price for the other half.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.3.A",
          stem: "Which statement best expresses the central claim of the argument?",
          choices: [
            { letter: "A", text: "High schools should require a one-semester course in basic repair skills." },
            { letter: "B", text: "Bike shops charge far too much for simple repairs." },
            { letter: "C", text: "A growth mindset is best taught through math tests." },
            { letter: "D", text: "Retired tradespeople should replace regular teachers." }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.1.B",
          stem: "The author includes the survey results in sentences 1–3 mainly to —",
          choices: [
            { letter: "A", text: "show that most juniors dislike riding bicycles" },
            { letter: "B", text: "establish that the lack of practical skills is a real, measurable problem" },
            { letter: "C", text: "prove that the proposed course would be inexpensive" },
            { letter: "D", text: "compare the school with others in the district" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "How does the author organize the fourth and fifth paragraphs (sentences 15–26)?",
          choices: [
            { letter: "A", text: "By listing the tools the course would require." },
            { letter: "B", text: "By describing a typical day in the proposed course." },
            { letter: "C", text: "By comparing repair skills with athletic skills." },
            { letter: "D", text: "By presenting objections and responding to each one." }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 17, the phrase false choice most nearly means —",
          choices: [
            { letter: "A", text: "a decision made without enough information" },
            { letter: "B", text: "a dishonest question on a survey" },
            { letter: "C", text: "a claim that two options exclude each other when they do not" },
            { letter: "D", text: "a mistake made by an inexperienced student" }
          ],
          correct: "C"
        },
        {
          id: "counter",
          sol: "9.RI.3.A",
          stem: "How does the author's response to the cost objection (sentences 22–26) differ from the response to the schedule objection?",
          choices: [
            { letter: "A", text: "The author admits the cost objection is stronger before answering it." },
            { letter: "B", text: "The author dismisses the cost objection without any evidence." },
            { letter: "C", text: "The author agrees that cost makes the course impossible." },
            { letter: "D", text: "The author never actually responds to the cost objection." }
          ],
          correct: "A"
        },
        {
          id: "reason",
          sol: "9.RI.1.C",
          stem: "Sentences 18–21 support the author's argument by —",
          choices: [
            { letter: "A", text: "listing the subjects that appear on state tests" },
            { letter: "B", text: "showing that repair tasks use the same thinking as academic subjects" },
            { letter: "C", text: "proving that algebra is less useful than geometry" },
            { letter: "D", text: "describing the tools a student would learn to use" }
          ],
          correct: "B"
        },
        {
          id: "craft",
          sol: "9.RI.2.B",
          stem: "The two-word paragraph opener in sentence 27 (They are.) mainly serves to —",
          choices: [
            { letter: "A", text: "introduce one more objection to the course" },
            { letter: "B", text: "summarize the results of the junior survey" },
            { letter: "C", text: "soften the author's position on the course" },
            { letter: "D", text: "answer the assumption in sentence 26 with firm emphasis" }
          ],
          correct: "D"
        },
        {
          id: "link",
          sol: "9.RI.1.B",
          stem: "The mention of the paycheck stub in sentence 21 refers back to sentence 3 in order to —",
          choices: [
            { letter: "A", text: "show that the survey question was poorly written" },
            { letter: "B", text: "suggest that students already understand their pay" },
            { letter: "C", text: "connect a skill students lack to a subject schools already value" },
            { letter: "D", text: "argue that students should not hold jobs during the school year" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── LONG · PAIRED TEXTS ───────────────────────── */
    {
      id: "g9-l-greenway-pair",
      family: "G9",
      title: "Rail to Trail: Two Views",
      kind: "Paired texts · 9.DSR",
      blurb: "A historical society celebrates the new greenway; a neighbor eleven feet from it asks for a fence.",
      level: 2,
      passage:
        "<p><strong>Text 1 — The Line That Became a Path (Millbrook Historical Society newsletter)</strong></p>" +
        "<p>" + N(1) + "For forty years, the Millbrook trolley carried workers from the mill district to the center of town, six cars an hour, for a nickel a ride. " +
        N(2) + "The line closed in 1956 when buses took over, and for the next sixty years the corridor sat unused: a strip of gravel and weeds thirty feet wide, running two and a half miles through the middle of Millbrook. " +
        N(3) + "Most residents forgot it was there. " +
        N(4) + "Last October, the town opened the Millbrook Greenway on the old trolley bed. " +
        N(5) + "The rails were pulled up and sold for scrap, the gravel was graded and paved, and the corridor is now a flat, tree-lined path for walkers and cyclists. " +
        N(6) + "Because trolleys could not climb steep hills, the route is almost level, which makes it usable by people with strollers, wheelchairs, and small children on bicycles. " +
        N(7) + "In its first six months, the town counted more than 40,000 trips on the greenway. " +
        N(8) + "The path also connects places that were once separated by the corridor. " +
        N(9) + "The elementary school on Pine Street and the public library on Grant Avenue are now a ten-minute walk apart, with no street crossings. " +
        N(10) + "The historical society has installed six signs along the route describing the trolley era, including a photograph of the last car to run the line. " +
        N(11) + "A path that once carried the town to work now carries it, at a slower pace, back through its own past.</p>" +
        "<p><strong>Text 2 — A Fence, Please, and Some Thanks (letter to the editor)</strong></p>" +
        "<p>" + N(12) + "My backyard has bordered the old trolley corridor for twenty-two years. " +
        N(13) + "For most of that time, my neighbors on the other side of the fence line were rabbits, a family of foxes, and a great deal of goldenrod. " +
        N(14) + "In October, they were replaced by joggers. " +
        N(15) + "I want to be fair about this. " +
        N(16) + "The greenway is a good thing for Millbrook. " +
        N(17) + "I have used it myself, and I have watched my nephew learn to ride his bicycle on it, which he could never have done on our street. " +
        N(18) + "But the town did not ask those of us who live along the corridor what the change would mean at ground level. " +
        N(19) + "The path runs eleven feet from my kitchen window. " +
        N(20) + "Conversations on the greenway are audible at my breakfast table, and cyclists ringing bells at seven in the morning have replaced the birds I used to hear. " +
        N(21) + "Twice, walkers have cut through my yard to reach the street. " +
        N(22) + "I am not asking the town to close the path. " +
        N(23) + "I am asking for a fence, or a hedge, along the sections where the greenway runs within twenty feet of a home, and for a sign or two reminding users that the yards beside them are not part of the park. " +
        N(24) + "Other towns that have built trails on old rail lines have done this, and their trails are the better for it. " +
        N(25) + "A greenway that respects its neighbors will keep them as supporters. " +
        N(26) + "One that does not may find that the goodwill it started with is as short as the trolley's nickel fare.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          stem: "Which idea is supported by both Text 1 and Text 2?",
          choices: [
            { letter: "A", text: "The trolley line should be rebuilt and reopened." },
            { letter: "B", text: "The path is already too crowded to enjoy." },
            { letter: "C", text: "The historical signs contain errors." },
            { letter: "D", text: "The greenway has brought real benefits to Millbrook." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "9.DSR.E",
          stem: "Which statement best describes how the two texts differ in perspective?",
          choices: [
            { letter: "A", text: "Text 1 views the greenway from the town's point of view, while Text 2 describes its effect on one household." },
            { letter: "B", text: "Text 1 opposes the greenway, while Text 2 supports it without reservation." },
            { letter: "C", text: "Text 1 focuses on the project's cost, while Text 2 focuses on its history." },
            { letter: "D", text: "Text 1 is written by a cyclist, while Text 2 is written by a jogger." }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          stem: "Select TWO details, one from each text, that together show that the greenway's level route matters to families.",
          choices: [
            { letter: "A", text: "Sentence 6: the nearly flat route makes the path usable for strollers and children on bicycles." },
            { letter: "B", text: "Sentence 7: the town counted more than 40,000 trips in six months." },
            { letter: "C", text: "Sentence 17: the writer's nephew learned to ride a bicycle on the greenway." },
            { letter: "D", text: "Sentence 21: walkers have twice cut through the writer's yard." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 18, the phrase at ground level most nearly means —",
          choices: [
            { letter: "A", text: "measured from the surface of the pavement" },
            { letter: "B", text: "from the viewpoint of people living beside the path" },
            { letter: "C", text: "in terms of the town's budget" },
            { letter: "D", text: "according to the historical society" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.DSR.D",
          stem: "Which sentence from Text 2 gives the strongest evidence that the greenway intrudes on the writer's daily life?",
          choices: [
            { letter: "A", text: "Sentence 14" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "C"
        },
        {
          id: "craft",
          sol: "9.DSR.E",
          stem: "The final sentence of Text 2 refers to the trolley's nickel fare mainly to —",
          choices: [
            { letter: "A", text: "suggest that the town should charge a fee to use the path" },
            { letter: "B", text: "echo Text 1's history while warning that public support can be brief" },
            { letter: "C", text: "show that the writer once rode the trolley to work" },
            { letter: "D", text: "argue that the greenway cost too much to build" }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.DSR.E",
          stem: "A reader who has read both texts can best conclude that —",
          choices: [
            { letter: "A", text: "the town's count of 40,000 trips is exaggerated" },
            { letter: "B", text: "the historical society plans to build fences along the path" },
            { letter: "C", text: "residents along the corridor were consulted before construction" },
            { letter: "D", text: "the path's success has brought a problem the town did not plan for" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── EPIC · LITERARY ───────────────────────── */
    {
      id: "g9-e-be-furniture",
      family: "G9",
      title: "Be Furniture",
      kind: "Literary · 9.RL",
      blurb: "A swarm of bees, a twelve-foot ladder, and a boy whose only job is to hold still.",
      level: 3,
      passage:
        "<p>" + N(1) + "The swarm arrived on a Tuesday, at the top of the Okafors' maple, and by Wednesday the whole block had an opinion about it. " +
        N(2) + "Mr. Okafor wanted it gone. " +
        N(3) + "Mrs. Delgado across the street wanted it left alone, on the grounds that bees were having a hard enough time. " +
        N(4) + "Jonah, who was fourteen and lived next door, wanted mostly to keep his distance, and he might have managed it if his mother had not volunteered him to hold the ladder for Mr. Aldana.</p>" +
        "<p>" + N(5) + "Mr. Aldana kept bees behind the hardware store and was the only person anyone knew who could take a swarm out of a tree. " +
        N(6) + "He arrived on Thursday morning with a white cardboard box, a bedsheet, a spray bottle, and no protective suit at all. " +
        N(7) + "\"Where's your gear?\" Jonah asked. " +
        N(8) + "\"In the truck,\" Mr. Aldana said. " +
        N(9) + "\"I won't need it. " +
        N(10) + "A swarm has nothing to defend. " +
        N(11) + "No honey, no babies, no home. " +
        N(12) + "They're just waiting for the scouts to find a place. " +
        N(13) + "It's the calmest a bee ever gets.\" " +
        N(14) + "Jonah looked up at the dark, humming lump the size of a football, wrapped around a branch twelve feet up, and did not find it calming.</p>" +
        "<p>" + N(15) + "The plan was simple. " +
        N(16) + "Mr. Aldana would climb the ladder with the box, hold it under the swarm, and give the branch one sharp shake. " +
        N(17) + "The bees would drop into the box, the queen among them, and the rest would follow her in. " +
        N(18) + "Jonah's job was to keep the ladder steady and, when the box came down, to hold the sheet so the stragglers could walk up it. " +
        N(19) + "\"Walk,\" Mr. Aldana said. " +
        N(20) + "\"Not fly. " +
        N(21) + "They'll walk toward the queen like a crowd going into a stadium.\"</p>" +
        "<p>" + N(22) + "The ladder shuddered as Mr. Aldana climbed. " +
        N(23) + "Jonah gripped the rails until his knuckles went white, and a few bees drifted down to inspect him, landing on his sleeve and his ear and once, unbearably, on his upper lip. " +
        N(24) + "Every part of him wanted to swat and run. " +
        N(25) + "\"Don't,\" said Mr. Aldana from above, without looking down, as if he could hear Jonah's thoughts. " +
        N(26) + "\"Anything fast looks like a threat. " +
        N(27) + "Be slow. " +
        N(28) + "Be furniture.\" " +
        N(29) + "Jonah became furniture. " +
        N(30) + "The bee on his lip walked to the corner of his mouth, considered the situation, and left.</p>" +
        "<p>" + N(31) + "Then Mr. Aldana shook the branch. " +
        N(32) + "The sound changed all at once, from a hum to a roar, and the air filled with bees the way a snow globe fills with snow. " +
        N(33) + "Jonah shut his eyes. " +
        N(34) + "When he opened them, the box was coming down the ladder in Mr. Aldana's hands, most of the swarm inside it, and a few thousand bees circled in a loose cloud, looking for the rest of themselves. " +
        N(35) + "Jonah spread the sheet on the grass, and Mr. Aldana set the box at the top of it, propped open an inch.</p>" +
        "<p>" + N(36) + "Jonah would describe what happened next for years, and nobody would quite believe it. " +
        N(37) + "The cloud thinned. " +
        N(38) + "Bees landed on the sheet by the dozen, then by the hundred, and turned, all of them, in the same direction, and walked. " +
        N(39) + "They walked up the white cotton toward the dark opening of the box, a slow brown river flowing uphill, and the roar dropped back into a hum, and then into something quieter than that. " +
        N(40) + "It took twenty minutes. " +
        N(41) + "Jonah did not move for any of them.</p>" +
        "<p>" + N(42) + "Afterward, Mr. Aldana taped the box shut and carried it to the truck, and Mrs. Delgado came across the street to say this was acceptable, since the bees were being rehomed, not killed. " +
        N(43) + "Mr. Okafor shook Mr. Aldana's hand. " +
        N(44) + "Jonah stood on the sidewalk with the folded sheet, feeling the ghost of a bee on his lip, and realized his hands had stopped shaking some time ago. " +
        N(45) + "\"You did well,\" Mr. Aldana said. " +
        N(46) + "\"Most people can't be furniture.\" " +
        N(47) + "\"I didn't do anything,\" Jonah said. " +
        N(48) + "\"That's what I mean.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a central theme of the story?",
          choices: [
            { letter: "A", text: "Fear is best handled by acting as quickly as possible." },
            { letter: "B", text: "Neighbors rarely agree about what is best for a street." },
            { letter: "C", text: "Wild creatures should never be moved from where they settle." },
            { letter: "D", text: "Sometimes the bravest thing a person can do is stay still." }
          ],
          correct: "D"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "The details in sentence 14 mainly reveal that Jonah —",
          choices: [
            { letter: "A", text: "is fascinated by the size of the swarm" },
            { letter: "B", text: "is unconvinced by Mr. Aldana's reassurance" },
            { letter: "C", text: "wants to climb the ladder himself" },
            { letter: "D", text: "has been stung by bees before" }
          ],
          correct: "B"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 21, comparing the bees to a crowd going into a stadium mainly suggests that they will move —",
          choices: [
            { letter: "A", text: "together, toward a shared destination" },
            { letter: "B", text: "in a sudden, frightened panic" },
            { letter: "C", text: "slowly and against their will" },
            { letter: "D", text: "in one single straight line" }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 23, the word inspect suggests that the bees landing on Jonah are —",
          choices: [
            { letter: "A", text: "attacking him" },
            { letter: "B", text: "examining him" },
            { letter: "C", text: "avoiding him" },
            { letter: "D", text: "warning him" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "9.RL.3.B",
          stem: "How does the author build suspense in the fourth and fifth paragraphs (sentences 22–35)?",
          choices: [
            { letter: "A", text: "By describing the events from the bees' point of view." },
            { letter: "B", text: "By flashing back to a time when Jonah was stung." },
            { letter: "C", text: "By slowing the pace to show each small test of Jonah's stillness before the roar." },
            { letter: "D", text: "By having Mrs. Delgado interrupt the work partway through." }
          ],
          correct: "C"
        },
        {
          id: "early",
          sol: "9.RL.1.B",
          stem: "How does Mr. Aldana's explanation in sentences 10–13 prepare readers for the events in sentences 38–39?",
          choices: [
            { letter: "A", text: "It explains why the bees follow the queen calmly instead of attacking." },
            { letter: "B", text: "It shows that Mr. Aldana has never removed a swarm before." },
            { letter: "C", text: "It reveals that the swarm has already built a hive in the maple." },
            { letter: "D", text: "It suggests that the bees will refuse to leave the tree." }
          ],
          correct: "A"
        },
        {
          id: "fig",
          sol: "9.RL.2.A",
          stem: "The image of a slow brown river flowing uphill in sentence 39 mainly emphasizes that the bees' movement is —",
          choices: [
            { letter: "A", text: "dangerous and very fast" },
            { letter: "B", text: "random and confused" },
            { letter: "C", text: "noisy, quick, and sudden" },
            { letter: "D", text: "steady, unified, unexpected" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "9.RL.1.D",
          stem: "Mr. Aldana's reply in sentence 48 (That's what I mean.) suggests that he —",
          choices: [
            { letter: "A", text: "is disappointed that Jonah did not help more" },
            { letter: "B", text: "wants Jonah to keep the sheet as payment" },
            { letter: "C", text: "believes doing nothing was exactly the hard skill required" },
            { letter: "D", text: "thinks Jonah was lucky to avoid being stung" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-e-trial-seven",
      family: "G9",
      title: "Uncontrolled Variable",
      kind: "Literary · 9.RL",
      blurb: "Eight days before the science fair, Ravi's partner moves to Ohio and his data stops making sense.",
      level: 2,
      passage:
        "<p>" + N(1) + "The plan had been Keisha's, the spreadsheet had been Keisha's, and the idea of testing whether plants grew faster to the sound of music had been, in the beginning, entirely Keisha's. " +
        N(2) + "What was Ravi's was the narrow closet in his family's laundry room, where six bean plants sat under a grow light, and the job of watering them every morning before school. " +
        N(3) + "For five weeks that had seemed like a fair division of labor. " +
        N(4) + "Then, eight days before the science fair, Keisha's family moved to Ohio.</p>" +
        "<p>" + N(5) + "She called him from the car. " +
        N(6) + "\"The data's all in the shared folder,\" she said. " +
        N(7) + "\"You can do the poster. " +
        N(8) + "You watered them, you know them better than I do.\" " +
        N(9) + "Ravi said that was fine, because there was nothing else to say to someone in a car headed for Ohio, and then he opened the shared folder and found that the data was not, in fact, all there. " +
        N(10) + "The spreadsheet ended at week three. " +
        N(11) + "Weeks four and five, the weeks in which the plants had actually started to differ, existed only on the strips of masking tape he had stuck to each pot, where he had written the height in pencil every Sunday.</p>" +
        "<p>" + N(12) + "He spent Saturday at the kitchen table with a ruler and the six pots, copying numbers off tape. " +
        N(13) + "The plants with music were taller. " +
        N(14) + "That should have been the end of it: a chart, a conclusion, a poster with a border. " +
        N(15) + "But when he lined the numbers up, something bothered him. " +
        N(16) + "The three music plants had all been closer to the grow light. " +
        N(17) + "The closet was narrow, the speaker had taken up space on one side, and he had pushed the music plants toward the bulb without ever thinking about it. " +
        N(18) + "Music or light, then. " +
        N(19) + "He could not tell which.</p>" +
        "<p>" + N(20) + "His older cousin Deepa, who was home from college, found him staring at the pots at ten o'clock that night. " +
        N(21) + "\"So your experiment's broken,\" she said, after he explained. " +
        N(22) + "\"Yes.\" " +
        N(23) + "\"So say that.\" " +
        N(24) + "Ravi looked at her. " +
        N(25) + "\"The fair is Friday.\" " +
        N(26) + "\"The fair is Friday,\" Deepa agreed. " +
        N(27) + "\"And what you've got is a real result: you found a variable you didn't control. " +
        N(28) + "Half the scientists I know would give a lot to catch that before someone else did.\"</p>" +
        "<p>" + N(29) + "On Sunday, Ravi rebuilt the closet. " +
        N(30) + "He moved the speaker to the ceiling, measured the distance from the bulb to every pot, and set them in a circle at exactly fourteen inches. " +
        N(31) + "He restarted the tape: week one, day one. " +
        N(32) + "The poster he made that week had two halves. " +
        N(33) + "The left half showed Keisha's five weeks, the tall music plants, and a red circle around the closet diagram with the words \"uncontrolled variable: light distance.\" " +
        N(34) + "The right half showed the new circle, a chart with five days of data instead of thirty-five, and a conclusion that began, \"This experiment is not finished.\"</p>" +
        "<p>" + N(35) + "At the fair, the judge who stopped at his table was a woman with reading glasses on a chain who looked at the left half for a long time. " +
        N(36) + "\"Whose mistake was this?\" she asked. " +
        N(37) + "Ravi thought about Keisha, and the car, and the spreadsheet that ended at week three. " +
        N(38) + "\"Mine,\" he said. " +
        N(39) + "\"I set the pots.\" " +
        N(40) + "The judge nodded, wrote something, and moved on without a smile. " +
        N(41) + "He was fairly sure he had lost.</p>" +
        "<p>" + N(42) + "Ravi took third place in the biology division, behind a project on ant colonies and one on bread mold. " +
        N(43) + "The ribbon came with a note card in the judge's handwriting. " +
        N(44) + "It read: \"Most projects at this fair claim to have found an answer. " +
        N(45) + "Yours found a question. " +
        N(46) + "Keep the plants going.\" " +
        N(47) + "He texted a picture of the card to Keisha in Ohio, and then he went home and watered them.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of this story?",
          choices: [
            { letter: "A", text: "Science fairs reward the most colorful posters." },
            { letter: "B", text: "Partners who move away should not receive credit." },
            { letter: "C", text: "Plants grow faster when music is played to them." },
            { letter: "D", text: "Honesty about a flaw can be worth more than a tidy answer." }
          ],
          correct: "D"
        },
        {
          id: "plot",
          sol: "9.RL.1.B",
          stem: "What does Ravi discover in sentences 15–19 that changes his plan?",
          choices: [
            { letter: "A", text: "Keisha's data had been entirely invented." },
            { letter: "B", text: "The music plants had also been closer to the light." },
            { letter: "C", text: "The grow light had burned out during week four." },
            { letter: "D", text: "All six of the bean plants had died." }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Deepa's response in sentences 23–28 mainly shows that she —",
          choices: [
            { letter: "A", text: "sees the flaw as a legitimate finding rather than a failure" },
            { letter: "B", text: "thinks Ravi should withdraw from the fair" },
            { letter: "C", text: "plans to redo the experiment herself" },
            { letter: "D", text: "believes Keisha should take the blame" }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 27, the word variable most nearly means —",
          choices: [
            { letter: "A", text: "a factor that can affect the result" },
            { letter: "B", text: "an error in arithmetic" },
            { letter: "C", text: "a type of bean plant" },
            { letter: "D", text: "a rule of the science fair" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RL.3.B",
          stem: "The author describes the poster's two halves in sentences 32–34 mainly to —",
          choices: [
            { letter: "A", text: "show how Ravi divides credit between himself and Keisha" },
            { letter: "B", text: "reflect Ravi's choice to present both the flawed trial and the new one" },
            { letter: "C", text: "explain the rules of the biology division" },
            { letter: "D", text: "suggest that Ravi ran out of time to finish" }
          ],
          correct: "B"
        },
        {
          id: "early",
          sol: "9.RL.3.A",
          stem: "How does the detail in sentence 2 about the narrow laundry-room closet become important later?",
          choices: [
            { letter: "A", text: "It explains why Ravi cannot find the spreadsheet." },
            { letter: "B", text: "It is the reason Keisha's family moves away." },
            { letter: "C", text: "It helps explain how the light-distance problem arose." },
            { letter: "D", text: "It shows that Ravi's family disapproves of the project." }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.1.C",
          stem: "Why does Ravi answer Mine in sentence 38, even though he thinks of Keisha first?",
          choices: [
            { letter: "A", text: "He is afraid the judge will disqualify a two-person project." },
            { letter: "B", text: "Keisha asked him to keep her name off the poster." },
            { letter: "C", text: "He wants to win the ribbon by himself." },
            { letter: "D", text: "He takes responsibility for the part of the experiment he controlled." }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "9.RL.2.B",
          stem: "The final sentence (47) mainly suggests that Ravi —",
          choices: [
            { letter: "A", text: "has given up on the experiment" },
            { letter: "B", text: "blames Keisha for the third-place finish" },
            { letter: "C", text: "is continuing the work just as the judge advised" },
            { letter: "D", text: "has decided to move the plants outdoors" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── EPIC · INFORMATIONAL ───────────────────────── */
    {
      id: "g9-e-ice-crop",
      family: "G9",
      title: "When Ice Was a Crop",
      kind: "Informational · 9.RI",
      blurb: "Before refrigerators, cold was cut from lakes in January and sold in August.",
      level: 2,
      passage:
        "<p>" + N(1) + "Before refrigerators, cold was something you had to go out and get. " +
        N(2) + "For most of the nineteenth century in the northern United States, that meant cutting ice from frozen lakes and ponds in January and storing it, packed in sawdust, until August. " +
        N(3) + "Ice harvesting was a genuine industry, with its own tools, its own vocabulary, and, in a good year, tens of thousands of workers. " +
        N(4) + "It is almost entirely forgotten now, but for about eighty years it shaped how people ate, what they could sell, and how far food could travel.</p>" +
        "<p>" + N(5) + "The harvest began when the ice reached a thickness of about twelve inches, enough to hold a horse. " +
        N(6) + "Workers first cleared the snow, since snow insulates ice and slows its growth. " +
        N(7) + "Then a horse-drawn marker scored the surface into a grid of squares, usually twenty-two inches on a side, and a heavier plow followed the lines, cutting grooves most of the way through. " +
        N(8) + "Men with long saws finished the cuts by hand, and the blocks, each weighing more than two hundred pounds, were floated along open channels of water to the shore. " +
        N(9) + "There, a ramp and a chain lifted them into the icehouse.</p>" +
        "<p>" + N(10) + "The icehouse was the heart of the operation. " +
        N(11) + "It was a windowless wooden building with double walls, the gap between them filled with sawdust or straw. " +
        N(12) + "Blocks were stacked inside in tight layers, with more sawdust between every row. " +
        N(13) + "A well-built icehouse could hold ice through an entire summer, losing perhaps a quarter of it to melting. " +
        N(14) + "The sawdust came from the same sawmills that supplied the lumber, so the two industries often stood side by side on the same river.</p>" +
        "<p>" + N(15) + "Ice changed what people could sell. " +
        N(16) + "A dairy farmer with access to ice could ship milk and butter to a city forty miles away instead of five. " +
        N(17) + "Fishing boats began carrying ice so that a catch could be sold days after it was landed. " +
        N(18) + "Breweries, which need cool temperatures to ferment certain beers, grew from small local operations into regional businesses. " +
        N(19) + "Ice even became an export: ships carried blocks from New England lakes to ports in the Caribbean and, famously, to India, where a block that had survived a four-month voyage was worth more than the ship's other cargo.</p>" +
        "<p>" + N(20) + "The work was dangerous. " +
        N(21) + "Horses and men fell through thin spots. " +
        N(22) + "The saws were long and sharp, and the channels of open water were black and freezing. " +
        N(23) + "Workers wore spiked boots and carried poles with hooks, and every crew kept a rope on the ice for the moment someone went in. " +
        N(24) + "Pay was good for a winter job, and in farming towns where there was little else to do in January, the harvest was a welcome source of cash.</p>" +
        "<p>" + N(25) + "The end came quickly. " +
        N(26) + "Machines that made ice by compressing and expanding gas appeared in the 1870s, first in the South, where natural ice never formed. " +
        N(27) + "By 1900, artificial ice was cheaper than harvested ice in most cities, and by the 1930s home refrigerators had made even the ice delivery wagon obsolete. " +
        N(28) + "The great icehouses, with nothing left to hold, were torn down or burned, and the lakes were left to the skaters.</p>" +
        "<p>" + N(29) + "A few traces remain. " +
        N(30) + "Some New England towns still hold a demonstration harvest each winter, cutting a few blocks with the old tools for a crowd of onlookers. " +
        N(31) + "Old maps mark the sites of icehouses that no longer exist. " +
        N(32) + "And the word icebox, which some people still use for the refrigerator, is a small fossil of the years when the box really did hold ice, and the ice came from a lake, and someone had stood on that lake in January to cut it.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of this passage?",
          choices: [
            { letter: "A", text: "Ice harvesting was a dangerous job that few people were willing to do." },
            { letter: "B", text: "Home refrigerators were first sold to the public in the 1870s." },
            { letter: "C", text: "Lakes in New England freeze to a depth of twelve inches each winter." },
            { letter: "D", text: "Harvesting natural ice was a major industry that changed how food was sold and shipped." }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "The second and third paragraphs (sentences 5–14) are organized mainly —",
          choices: [
            { letter: "A", text: "in the order in which the harvest and storage took place" },
            { letter: "B", text: "by comparing ice harvesting with commercial fishing" },
            { letter: "C", text: "from the most dangerous task to the least dangerous" },
            { letter: "D", text: "by listing the causes of the industry's decline" }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 6, the word insulates most nearly means —",
          choices: [
            { letter: "A", text: "melts away completely" },
            { letter: "B", text: "keeps the cold from reaching" },
            { letter: "C", text: "presses down heavily on" },
            { letter: "D", text: "splits into pieces" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.1.B",
          stem: "Which sentence best supports the idea that ice made it possible to sell goods farther away?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RI.1.C",
          stem: "Based on sentence 26, why did ice-making machines appear first in the South?",
          choices: [
            { letter: "A", text: "There was no natural ice there to compete with." },
            { letter: "B", text: "Southern cities had more sawmills to supply sawdust." },
            { letter: "C", text: "Southern workers refused to harvest ice by hand." },
            { letter: "D", text: "The machines could not operate in cold weather." }
          ],
          correct: "A"
        },
        {
          id: "link",
          sol: "9.RI.1.B",
          stem: "The claim in sentence 4 that the industry shaped how far food could travel is developed most fully in —",
          choices: [
            { letter: "A", text: "the second paragraph" },
            { letter: "B", text: "the third paragraph" },
            { letter: "C", text: "the fourth paragraph" },
            { letter: "D", text: "the sixth paragraph" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "9.RI.2.B",
          stem: "The author ends with the word icebox mainly to —",
          choices: [
            { letter: "A", text: "argue that people should stop using an outdated word" },
            { letter: "B", text: "explain how a modern refrigerator works" },
            { letter: "C", text: "introduce a new topic for a future article" },
            { letter: "D", text: "show that language preserves a trace of the vanished industry" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RI.2.B",
          stem: "In sentence 28, the phrase the lakes were left to the skaters mainly conveys —",
          choices: [
            { letter: "A", text: "anger at the machines that replaced the harvest" },
            { letter: "B", text: "a quiet sense of an era coming to an end" },
            { letter: "C", text: "relief that the dangerous work was over" },
            { letter: "D", text: "excitement about the growth of winter sports" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-e-weeding-shelves",
      family: "G9",
      title: "Making Room on the Shelf",
      kind: "Informational · 9.RI",
      blurb: "Every year a library removes thousands of its own books. Here is why, and how it decides.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every year, the public library in a mid-sized town removes somewhere between five and ten percent of its collection. " +
        N(2) + "The books are not lost or stolen. " +
        N(3) + "They are chosen, one at a time, by librarians who have decided that the shelf space they occupy is worth more than the books themselves. " +
        N(4) + "Librarians call the process weeding, and although it happens in nearly every library in the country, it is one of the least understood things a library does. " +
        N(5) + "Patrons who notice tend to be alarmed. " +
        N(6) + "A library, after all, is supposed to keep books, not get rid of them.</p>" +
        "<p>" + N(7) + "The case for weeding begins with a fact about shelves: they are finite. " +
        N(8) + "A branch library built in 1985 has the same walls today, but publishers release more titles every year, and a collection that only grows will eventually have nowhere to put the new material. " +
        N(9) + "A library that never weeds must either stop buying or begin stacking books on the floor. " +
        N(10) + "Weeding is what makes room.</p>" +
        "<p>" + N(11) + "But space is only the first argument, and librarians say it is not the strongest. " +
        N(12) + "The stronger argument concerns accuracy. " +
        N(13) + "A medical guide from 1994, a travel book listing hotels that closed a decade ago, or an atlas showing countries that no longer exist is not harmless simply because it sits quietly on a shelf. " +
        N(14) + "Someone may take it home and trust it. " +
        N(15) + "A library that keeps outdated information alongside current information forces its patrons to guess which is which, and many will guess wrong.</p>" +
        "<p>" + N(16) + "There is also an argument about use. " +
        N(17) + "Studies of library circulation have found a consistent pattern: when a crowded shelf is thinned, the remaining books are borrowed more often, not less. " +
        N(18) + "Patrons browsing a tightly packed shelf see a wall of spines and give up. " +
        N(19) + "On a shelf with room to breathe, where covers can face outward, they linger and choose. " +
        N(20) + "Removing a book that has not been borrowed in eight years can, in a sense, make the books beside it visible for the first time.</p>" +
        "<p>" + N(21) + "None of this makes weeding easy. " +
        N(22) + "Librarians describe it as the most emotionally difficult part of the job, and most follow written guidelines to keep their own attachments out of the decision. " +
        N(23) + "One widely used approach considers a book's physical condition, the age of its information, and its circulation record, and asks whether it is the last copy in a regional system or one of many. " +
        N(24) + "Local history, works by local authors, and titles that are out of print and hard to replace are usually protected regardless of how often they circulate. " +
        N(25) + "A book that fails on every count is a candidate; a book that fails on one is usually not.</p>" +
        "<p>" + N(26) + "What happens to the weeded books varies. " +
        N(27) + "Many go to the library's own book sale, where they are bought for a dollar and read again. " +
        N(28) + "Some are donated to schools, prisons, or shelters. " +
        N(29) + "Books in poor condition are recycled. " +
        N(30) + "Very rarely, a librarian discovers that a shabby, unborrowed volume is a first edition or a title that has become valuable, which is one reason the guidelines call for checking before discarding.</p>" +
        "<p>" + N(31) + "The deepest objection to weeding is not practical but philosophical. " +
        N(32) + "Some people believe a library's job is to preserve everything, and for a handful of institutions, such as national and university research libraries, that is close to true. " +
        N(33) + "But a public library was never built to be an archive. " +
        N(34) + "Its job is to put the right book into a reader's hands today, and a shelf that holds everything ever published makes that harder, not easier. " +
        N(35) + "The librarian who removes a book is making a bet that the reader is better served by what remains. " +
        N(36) + "It is a bet made carefully, by guidelines and by hand, thousands of times a year, and almost no one sees it happen.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best states the central idea of the article?",
          choices: [
            { letter: "A", text: "Public libraries should preserve every book they have ever owned." },
            { letter: "B", text: "Weeding is a careful, necessary process that keeps a library's collection usable and accurate." },
            { letter: "C", text: "Most books removed from libraries end up being recycled." },
            { letter: "D", text: "Patrons rarely notice when books disappear from the shelves." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "How does the author organize the second, third, and fourth paragraphs (sentences 7–20)?",
          choices: [
            { letter: "A", text: "In the order in which a librarian works through a shelf." },
            { letter: "B", text: "By contrasting public libraries with research libraries." },
            { letter: "C", text: "By describing objections and then dismissing them." },
            { letter: "D", text: "As a series of arguments for weeding, each presented as stronger than the last." }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 7, the word finite most nearly means —",
          choices: [
            { letter: "A", text: "limited in amount" },
            { letter: "B", text: "made of metal" },
            { letter: "C", text: "neatly arranged" },
            { letter: "D", text: "costly to build" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.1.B",
          stem: "Which sentence best supports the claim that removing books can increase how much the remaining ones are read?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 27" }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RI.1.C",
          stem: "According to sentences 23–25, a worn book with outdated information that is the last copy in the regional system would most likely be —",
          choices: [
            { letter: "A", text: "removed from the shelf immediately" },
            { letter: "B", text: "sold at the library's book sale" },
            { letter: "C", text: "donated to a local school" },
            { letter: "D", text: "kept, because it does not fail on every count" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.2.B",
          stem: "The author includes sentence 6 mainly in order to —",
          choices: [
            { letter: "A", text: "state the common assumption that the rest of the article challenges" },
            { letter: "B", text: "explain the library's official written policy" },
            { letter: "C", text: "describe how patrons learn about weeding" },
            { letter: "D", text: "argue that libraries should keep every book" }
          ],
          correct: "A"
        },
        {
          id: "link",
          sol: "9.RI.1.B",
          stem: "The claim in sentence 3 that shelf space can be worth more than the books themselves is best explained by which later sentence?",
          choices: [
            { letter: "A", text: "Sentence 14" },
            { letter: "B", text: "Sentence 20" },
            { letter: "C", text: "Sentence 29" },
            { letter: "D", text: "Sentence 32" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RI.2.B",
          stem: "The tone of the final sentence (36) is best described as —",
          choices: [
            { letter: "A", text: "critical of librarians who weed" },
            { letter: "B", text: "amused by patrons' alarm" },
            { letter: "C", text: "respectful of quiet, careful work" },
            { letter: "D", text: "worried about the future of libraries" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
