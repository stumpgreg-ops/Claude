/* SOL Labyrinth — v76 content: Grade 10 LONG passages (Virginia G10), 12 packs x 8 questions.
 * Topics: bike repair and cycling; a local history museum; night-sky astronomy; part-time summer jobs.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────── LONG · Literary (level 2) · bike repair ───────── */
    {
      id: "g10-rl-c76-second-gear",
      family: "G10",
      title: "We Fix Bikes Together",
      kind: "Literary · 10.RL",
      blurb: "A fast young mechanic at a community bike shop learns to keep her hands in her pockets.",
      level: 2,
      passage:
        "<p>" + N(1) + "The first rule at Second Gear Community Bike Shop was painted above the workbench in letters a foot high: WE FIX BIKES TOGETHER. " +
        N(2) + "Marisol had volunteered there for three Saturdays, and she privately thought the rule was a waste of paint. " +
        N(3) + "She was fast with a wrench, faster than most of the adults, and she liked the clean click of a part going back exactly where it belonged.</p>" +
        "<p>" + N(4) + "Just after noon, a woman in a yellow raincoat wheeled in a green three-speed with flat tires and a chain the color of cinnamon. " +
        N(5) + "\"It was mine in college,\" said the woman, whose name was Mrs. Achterberg. " +
        N(6) + "\"I'd like to ride it to the farmers' market this summer, if it isn't too far gone.\" " +
        N(7) + "Marisol crouched, spun the back wheel, and listened to it scrape. " +
        N(8) + "In her head she was already listing parts: new chain, new tubes, new brake pads, maybe new cables. " +
        N(9) + "Forty minutes, she thought, if nobody slowed her down.</p>" +
        "<p>" + N(10) + "Kwabena, the shop manager, wandered over with a rag over his shoulder. " +
        N(11) + "\"Mrs. Achterberg,\" he said, \"have you ever changed a tube?\" " +
        N(12) + "She laughed and said she had not touched a tire lever in forty years. " +
        N(13) + "\"Then today's a good day,\" he said, and handed her one. " +
        N(14) + "Marisol felt her forty minutes stretch into an afternoon.</p>" +
        "<p>" + N(15) + "The work went slowly. " +
        N(16) + "Mrs. Achterberg pinched the new tube twice, and the second time Marisol had to bite her lip to keep from grabbing the lever. " +
        N(17) + "The old chain refused to come apart until Mrs. Achterberg leaned on the chain tool with both hands, her glasses sliding down her nose. " +
        N(18) + "When the pin finally gave, she let out a small shout, and two kids patching a tire across the room looked up and grinned. " +
        N(19) + "Marisol explained each step, then made herself stand back with her hands in her apron pockets, which felt about as natural as holding her breath.</p>" +
        "<p>" + N(20) + "By four o'clock the green bike stood upright on both wheels. " +
        N(21) + "Mrs. Achterberg rode it in a slow loop around the parking lot, wobbling at first and then steadier, ringing the old bell at every turn as if the bell had been waiting years to be useful. " +
        N(22) + "When she came back, she did not thank Kwabena or the shop. " +
        N(23) + "She thanked Marisol, by name, for \"letting me find out I could still do it.\"</p>" +
        "<p>" + N(24) + "After she left, Marisol swept up the flakes of rust under the repair stand. " +
        N(25) + "Kwabena tossed her the rag. " +
        N(26) + "\"Faster isn't the same as better,\" he said, \"and I'm saying that to myself as much as to you.\" " +
        N(27) + "Marisol looked up at the painted letters above the bench. " +
        N(28) + "They seemed smaller than they had that morning, or maybe she was just reading them more carefully.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme developed across the story of Marisol and Mrs. Achterberg?",
          choices: [
            { letter: "A", text: "Old machines are usually worth more than new ones." },
            { letter: "B", text: "Skilled workers should never be asked to slow down." },
            { letter: "C", text: "Helping someone can mean stepping back so they act." },
            { letter: "D", text: "Community shops depend on donations to stay open." }
          ],
          correct: "C"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "Marisol's central conflict in the story is best described as a struggle between —",
          choices: [
            { letter: "A", text: "her urge to work quickly and the shop's rule of working together" },
            { letter: "B", text: "her loyalty to Kwabena and her wish to manage the shop herself" },
            { letter: "C", text: "her fear of customers and her desire to earn their approval" },
            { letter: "D", text: "her interest in old bikes and her belief in buying new parts" }
          ],
          correct: "A"
        },
        {
          id: "early",
          sol: "10.RL.1.C",
          stem: "Taken together, sentences 3 and 9 characterize Marisol at the start of the story as —",
          choices: [
            { letter: "A", text: "nervous about making mistakes in front of adults" },
            { letter: "B", text: "confident in her skill and focused on efficiency" },
            { letter: "C", text: "bored by the routine work of fixing flat tires" },
            { letter: "D", text: "eager to impress the shop manager with her ideas" }
          ],
          correct: "B"
        },
        {
          id: "breath",
          sol: "10.RL.2.A",
          stem: "In sentence 19, the comparison to holding her breath suggests that for Marisol, standing back —",
          choices: [
            { letter: "A", text: "is a relief after a long, tiring afternoon" },
            { letter: "B", text: "makes it hard for her to explain each step" },
            { letter: "C", text: "is something she has practiced many times" },
            { letter: "D", text: "takes effort and goes against her instincts" }
          ],
          correct: "D"
        },
        {
          id: "bell",
          sol: "10.RL.2.B",
          stem: "The description of the bell in sentence 21 mainly creates a feeling of —",
          choices: [
            { letter: "A", text: "joyful renewal" },
            { letter: "B", text: "nervous caution" },
            { letter: "C", text: "quiet regret" },
            { letter: "D", text: "mild annoyance" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "What is ironic about the thanks Mrs. Achterberg gives in sentence 23?",
          choices: [
            { letter: "A", text: "She thanks Marisol even though Kwabena paid for the parts." },
            { letter: "B", text: "She thanks Marisol for a ride she has not yet finished." },
            { letter: "C", text: "She praises Marisol for the very restraint Marisol resisted." },
            { letter: "D", text: "She thanks the shop although she plans never to return." }
          ],
          correct: "C"
        },
        {
          id: "gave",
          sol: "10.RV.1.B",
          stem: "In sentence 18, the phrase When the pin finally gave most nearly means when the pin —",
          choices: [
            { letter: "A", text: "was handed back" },
            { letter: "B", text: "slipped out of reach" },
            { letter: "C", text: "broke into pieces" },
            { letter: "D", text: "moved loose at last" }
          ],
          correct: "D"
        },
        {
          id: "letters",
          sol: "10.RL.3.A",
          stem: "The author returns to the painted rule in sentences 27 and 28 mainly to —",
          choices: [
            { letter: "A", text: "suggest that the shop plans to repaint its sign soon" },
            { letter: "B", text: "show that Marisol now sees the rule unlike in sentence 2" },
            { letter: "C", text: "reveal that Kwabena wrote the rule to teach Marisol" },
            { letter: "D", text: "explain why Mrs. Achterberg chose this shop for repairs" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────── LONG · Literary (level 3) · local history museum ───────── */
    {
      id: "g10-rl-c76-famous-lantern",
      family: "G10",
      title: "The Famous Lantern",
      kind: "Literary · 10.RL",
      blurb: "A museum intern turns over a beloved object and finds a date that does not fit the legend.",
      level: 3,
      passage:
        "<p>" + N(1) + "Idris had expected his summer internship at the Halverton County Historical Museum to involve dust, and it did. " +
        N(2) + "What he had not expected was how much of the job would be reading: labels, ledgers, donor letters written in handwriting that leaned like grass in wind. " +
        N(3) + "Ms. Sorrell, the curator, had given him one task for July, to check every object in the Founders' Room against its paper record, and she had said it as if handing him something fragile.</p>" +
        "<p>" + N(4) + "The Founders' Room was the museum's pride. " +
        N(5) + "School groups filed through it every week, and docents told the same stories in the same places, pausing at the same glass case to point out the tin lantern that, according to its label, Josiah Merrow had carried on the night he walked twelve miles through a blizzard to bring a doctor to a sick neighbor in 1858. " +
        N(6) + "Every child in Halverton knew the story. " +
        N(7) + "There was a mural of it on the side of the public library.</p>" +
        "<p>" + N(8) + "On a slow Tuesday, Idris lifted the lantern out with cotton gloves to measure it. " +
        N(9) + "On the underside, half hidden by soot, was a stamped line of tiny letters: PAT. APR. 4 1911. " +
        N(10) + "He read it three times, then set the lantern down as carefully as if it had suddenly become hot. " +
        N(11) + "He checked the ledger. " +
        N(12) + "The lantern had been donated in 1952 by a Merrow great-grandson, with a note that said only, \"Grandfather's lantern, the famous one, I believe.\"</p>" +
        "<p>" + N(13) + "For two days Idris said nothing. " +
        N(14) + "He told himself the stamp might be a mistake, that a later owner could have replaced the base, that it was not his place, at sixteen, to rewrite a story that was painted on a library. " +
        N(15) + "But each time a tour went by, he heard the docent's voice reach the words \"this very lantern,\" and he felt the sentence snag in him like a sleeve on a nail.</p>" +
        "<p>" + N(16) + "On Thursday he carried the ledger and the lantern to Ms. Sorrell's office and laid them side by side. " +
        N(17) + "She looked for a long time, turning the lantern under her desk lamp. " +
        N(18) + "Then, to his surprise, she smiled. " +
        N(19) + "\"Do you know how many people have handled this since 1952?\" she said. " +
        N(20) + "\"And not one of them turned it over.\"</p>" +
        "<p>" + N(21) + "The new label went up the next week. " +
        N(22) + "It said the lantern had belonged to the Merrow family but was made more than fifty years after the blizzard, and that no object from that night is known to survive. " +
        N(23) + "Below that, in smaller type, it noted that the story itself had been told in Halverton for over 160 years. " +
        N(24) + "Idris worried the school groups would be disappointed. " +
        N(25) + "Instead, the docents began stopping a little longer at the case, asking children to guess why a family might call the wrong lantern \"the famous one.\" " +
        N(26) + "The children always had ideas.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best developed across the whole story of the Merrow lantern?",
          choices: [
            { letter: "A", text: "Young workers should leave difficult choices to their supervisors." },
            { letter: "B", text: "Local legends matter more to a town than accurate records." },
            { letter: "C", text: "Children remember stories better when objects come with them." },
            { letter: "D", text: "Telling the truth about the past can deepen interest in it." }
          ],
          correct: "D"
        },
        {
          id: "hesitate",
          sol: "10.RL.1.B",
          stem: "Which sentence best explains why Idris delays reporting what he found?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "C"
        },
        {
          id: "sorrell",
          sol: "10.RL.1.C",
          stem: "Ms. Sorrell's reaction in sentences 18 through 20 characterizes her as someone who —",
          choices: [
            { letter: "A", text: "values careful observation more than protecting a legend" },
            { letter: "B", text: "is embarrassed that an intern noticed the error first" },
            { letter: "C", text: "doubts that the stamped date is accurate evidence" },
            { letter: "D", text: "wants to keep the discovery hidden from the docents" }
          ],
          correct: "A"
        },
        {
          id: "snag",
          sol: "10.RL.2.A",
          stem: "In sentence 15, comparing the docent's words to something that snags like a sleeve on a nail suggests that the false claim —",
          choices: [
            { letter: "A", text: "makes Idris angry at the docents for lying on purpose" },
            { letter: "B", text: "keeps catching on his conscience and will not let him go" },
            { letter: "C", text: "is hard for him to hear over the noise of the tour groups" },
            { letter: "D", text: "reminds him of a time he damaged an object by accident" }
          ],
          correct: "B"
        },
        {
          id: "filed",
          sol: "10.RV.1.D",
          stem: "The author writes that school groups filed through the room (sentence 5) rather than simply walked. Compared with walked, filed suggests that the groups moved —",
          choices: [
            { letter: "A", text: "quickly and without interest" },
            { letter: "B", text: "noisily and in no order" },
            { letter: "C", text: "in orderly lines, one by one" },
            { letter: "D", text: "slowly, pausing to take notes" }
          ],
          correct: "C"
        },
        {
          id: "mural",
          sol: "10.RL.3.A",
          stem: "The author mentions the library mural in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "show how deeply the legend runs in town, raising the stakes" },
            { letter: "B", text: "suggest that Idris first learned the story from the mural" },
            { letter: "C", text: "explain how the museum raised money for its Founders' Room" },
            { letter: "D", text: "contrast the town's art with the museum's dusty displays" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Sentences 24 through 26 are ironic mainly because —",
          choices: [
            { letter: "A", text: "the docents stop telling the Merrow story altogether" },
            { letter: "B", text: "the children are more interested in the mural than the case" },
            { letter: "C", text: "the label is changed back after visitors complain about it" },
            { letter: "D", text: "the correction Idris dreaded ends up drawing interest" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RL.2.B",
          stem: "The tone of the story's final two sentences is best described as —",
          choices: [
            { letter: "A", text: "bitter and mocking" },
            { letter: "B", text: "quietly hopeful" },
            { letter: "C", text: "anxious and uncertain" },
            { letter: "D", text: "formal and distant" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────── LONG · Literary (level 1) · summer job ───────── */
    {
      id: "g10-rl-c76-snack-shack",
      family: "G10",
      title: "The Machine Is Resting",
      kind: "Literary · 10.RL",
      blurb: "First day at the pool snack bar, a heat wave, and a soft-serve machine that quits.",
      level: 1,
      passage:
        "<p>" + N(1) + "Jun-ho Bae started his first job on the hottest day of June. " +
        N(2) + "The snack bar at Linden Park Pool was a small white building with a striped awning and a window that faced the deep end. " +
        N(3) + "His manager, Ms. Moreau, showed him the cash register, the fryer timer, and the soft-serve machine. " +
        N(4) + "\"The machine is old,\" she said. \"Treat it kindly.\" " +
        N(5) + "Then she left to pick up a delivery and told him she would be back by two.</p>" +
        "<p>" + N(6) + "For an hour, everything went well. " +
        N(7) + "Jun-ho sold hot dogs, bottled water, and a dozen cones of vanilla swirl. " +
        N(8) + "He counted change twice before handing it over, the way his older sister had told him to. " +
        N(9) + "The line at the window grew longer as the afternoon grew hotter, but he kept up.</p>" +
        "<p>" + N(10) + "At one-thirty, the soft-serve machine made a sound like a sigh and stopped. " +
        N(11) + "Jun-ho pulled the handle. " +
        N(12) + "Nothing came out but a thin, sad drip. " +
        N(13) + "He pressed the reset button, then pressed it again. " +
        N(14) + "The line outside now stretched past the lifeguard chair, and a boy in a shark-print swimsuit asked loudly whether the ice cream was coming. " +
        N(15) + "Jun-ho's face grew hot. " +
        N(16) + "For a moment he wanted to pull down the window shade and hide.</p>" +
        "<p>" + N(17) + "Instead he took a breath and looked around the tiny room. " +
        N(18) + "In the back corner stood a chest freezer he had barely noticed. " +
        N(19) + "Inside were boxes of fruit popsicles, frozen lemonade cups, and ice cream sandwiches. " +
        N(20) + "He grabbed a marker and a paper plate and wrote in big letters: MACHINE IS RESTING. EVERYTHING FROZEN IS $1 OFF. " +
        N(21) + "He taped the plate to the window. " +
        N(22) + "The boy in the shark suit read it out loud to the whole line, and someone cheered.</p>" +
        "<p>" + N(23) + "By the time Ms. Moreau returned, the freezer was half empty and the cash drawer was full. " +
        N(24) + "She read the sign, raised one eyebrow, and looked at the silent machine. " +
        N(25) + "Jun-ho started to apologize. " +
        N(26) + "\"It breaks every July,\" she said, \"usually with me standing right here.\" " +
        N(27) + "She showed him a switch hidden behind the back panel that let the motor cool down. " +
        N(28) + "Then she pointed at the paper plate. " +
        N(29) + "\"Leave that up,\" she said. \"It's the best sign we've had all summer.\"</p>" +
        "<p>" + N(30) + "That night, Jun-ho's arms ached and his shirt smelled like fryer oil. " +
        N(31) + "But when his sister asked how the first day went, he surprised himself by grinning. " +
        N(32) + "\"The machine broke,\" he said. " +
        N(33) + "\"I didn't.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the story about Jun-ho's first day?",
          choices: [
            { letter: "A", text: "Old equipment should be replaced before it fails." },
            { letter: "B", text: "Calm, creative thinking can turn trouble into success." },
            { letter: "C", text: "Managers should never leave new workers alone." },
            { letter: "D", text: "Customers care more about prices than about quality." }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in Jun-ho's response to the problem?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "10.RL.1.C",
          stem: "Sentence 8 characterizes Jun-ho as someone who is —",
          choices: [
            { letter: "A", text: "careful and eager to do the job well" },
            { letter: "B", text: "worried that customers will cheat him" },
            { letter: "C", text: "slow and unsure how to use the register" },
            { letter: "D", text: "annoyed by advice from his older sister" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in sentences 14 through 16 mainly create a mood of —",
          choices: [
            { letter: "A", text: "lazy summer calm" },
            { letter: "B", text: "playful excitement" },
            { letter: "C", text: "sorrowful longing" },
            { letter: "D", text: "rising pressure" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "10.RL.2.C",
          stem: "The tone of Jun-ho's words in sentences 32 and 33 is best described as —",
          choices: [
            { letter: "A", text: "proud and playful" },
            { letter: "B", text: "tired and bitter" },
            { letter: "C", text: "worried and doubtful" },
            { letter: "D", text: "formal and serious" }
          ],
          correct: "A"
        },
        {
          id: "kindly",
          sol: "10.RL.3.A",
          stem: "The author includes Ms. Moreau's warning in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "show that she does not trust Jun-ho yet" },
            { letter: "B", text: "explain why the pool is so busy that day" },
            { letter: "C", text: "hint that the machine may fail later" },
            { letter: "D", text: "reveal that she plans to buy a new machine" }
          ],
          correct: "C"
        },
        {
          id: "resting",
          sol: "10.RV.1.C",
          stem: "On the sign in sentence 20, the word RESTING mainly functions as —",
          choices: [
            { letter: "A", text: "a promise that the machine will be fixed soon" },
            { letter: "B", text: "a warning that customers should stay away" },
            { letter: "C", text: "an exact description of how the motor works" },
            { letter: "D", text: "a light, friendly way of saying it is broken" }
          ],
          correct: "D"
        },
        {
          id: "reset",
          sol: "10.RV.1.A",
          stem: "The word reset in sentence 13 begins with the prefix re-, as in rebuild and reheat. Based on this, to reset the machine means to —",
          choices: [
            { letter: "A", text: "turn it off for good" },
            { letter: "B", text: "set it back to its start" },
            { letter: "C", text: "move it to a new spot" },
            { letter: "D", text: "clean it out completely" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────── LONG · Informational (level 1) · night-sky astronomy ───────── */
    {
      id: "g10-ri-c76-wheeling-stars",
      family: "G10",
      title: "Why the Stars Wheel Overhead",
      kind: "Informational · 10.RI",
      blurb: "The stars seem to march across the sky each night. The real traveler is under your blanket.",
      level: 1,
      passage:
        "<p>" + N(1) + "If you lie on a blanket in a dark backyard and watch the sky for an hour, you will notice something strange. " +
        N(2) + "The stars do not stay put. " +
        N(3) + "A bright star that sat just above a neighbor's roof at nine o'clock may be hidden behind the chimney by ten. " +
        N(4) + "For thousands of years, people explained this motion by imagining that the sky itself turned around a resting Earth. " +
        N(5) + "Today we know the truth is the reverse: the stars appear to move because we are the ones moving.</p>" +
        "<p><strong>Earth's Daily Spin</strong> " + N(6) + "Earth rotates once on its axis about every 24 hours, turning from west to east. " +
        N(7) + "Because we ride along on the surface, we do not feel the motion, just as a passenger on a smooth train may not feel it rolling. " +
        N(8) + "Instead, we see its effect. " +
        N(9) + "The Sun rises in the east and sets in the west, and the stars do the same, sliding across the sky at a steady rate of about 15 degrees each hour. " +
        N(10) + "That is roughly the width of your spread hand held out at arm's length.</p>" +
        "<p><strong>The Star That Barely Moves</strong> " + N(11) + "Not every star travels the same path. " +
        N(12) + "Earth's axis, if you extended it far into space from the North Pole, would point almost exactly at a modest star called Polaris, which is not even among the forty brightest stars in the sky. " +
        N(13) + "Because Polaris sits so close to that point, it seems to stay nearly still while the other stars circle around it. " +
        N(14) + "Photographers show this by leaving a camera's shutter open for several hours. " +
        N(15) + "The resulting picture shows curved streaks of light, called star trails, arranged in rings around one almost motionless dot. " +
        N(16) + "For centuries, travelers in the Northern Hemisphere used Polaris to find north, and its height above the horizon even told them roughly how far north they were.</p>" +
        "<p><strong>A Sky That Changes With the Seasons</strong> " + N(17) + "There is a second, slower motion too. " +
        N(18) + "As Earth travels around the Sun over a year, the night side of the planet faces different directions in space. " +
        N(19) + "That is why the constellations visible at midnight in January are not the same ones visible at midnight in July. " +
        N(20) + "Orion, the hunter, with its three-star belt, rules winter evenings but is lost in the Sun's glare by early summer. " +
        N(21) + "Each night, a given star rises about four minutes earlier than it did the night before, and over a year those minutes add up to a full turn of the calendar.</p>" +
        "<p><strong>Seeing It for Yourself</strong> " + N(22) + "You do not need a telescope to observe any of this. " +
        N(23) + "Pick a bright star near a tree or rooftop, note its position, and check again an hour later. " +
        N(24) + "Or find the same constellation at the same time once a week for a month and sketch where it stands. " +
        N(25) + "The changes you record are not the sky's doing; they are a record of Earth turning beneath you and traveling through space.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about the moving stars?",
          choices: [
            { letter: "A", text: "Polaris is the most useful star for travelers in the north." },
            { letter: "B", text: "Telescopes are needed to observe how the night sky changes." },
            { letter: "C", text: "Ancient people were wrong about almost everything in the sky." },
            { letter: "D", text: "The stars seem to move because Earth spins and orbits the Sun." }
          ],
          correct: "D"
        },
        {
          id: "trails",
          sol: "10.RI.1.B",
          stem: "Which detail best supports the claim that Polaris seems to stay nearly still?",
          choices: [
            { letter: "A", text: "Star trail photos show rings around one almost motionless dot." },
            { letter: "B", text: "Polaris is not among the forty brightest stars in the sky." },
            { letter: "C", text: "Orion is lost in the Sun's glare by early summer." },
            { letter: "D", text: "A star rises about four minutes earlier each night." }
          ],
          correct: "A"
        },
        {
          id: "train",
          sol: "10.RI.1.C",
          stem: "The author includes the comparison to a passenger on a smooth train in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "show that trains were once used to study the stars" },
            { letter: "B", text: "explain why people do not feel Earth's rotation" },
            { letter: "C", text: "suggest that Earth moves faster than any vehicle" },
            { letter: "D", text: "warn readers about stargazing while traveling" }
          ],
          correct: "B"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          stem: "The headings in this article help a reader mainly by —",
          choices: [
            { letter: "A", text: "listing the stars in order from brightest to dimmest" },
            { letter: "B", text: "giving the dates of important discoveries in astronomy" },
            { letter: "C", text: "separating each motion and then how to observe it" },
            { letter: "D", text: "comparing old and new beliefs about the night sky" }
          ],
          correct: "C"
        },
        {
          id: "rules",
          sol: "10.RI.2.B",
          stem: "The author says that Orion rules winter evenings (sentence 20) mainly to emphasize that Orion —",
          choices: [
            { letter: "A", text: "is the oldest named constellation" },
            { letter: "B", text: "stands out clearly in the winter sky" },
            { letter: "C", text: "controls the timing of the seasons" },
            { letter: "D", text: "can be seen only from the far north" }
          ],
          correct: "B"
        },
        {
          id: "reverse",
          sol: "10.RI.2.C",
          stem: "Which statement is best supported by sentences 4 and 5 together?",
          choices: [
            { letter: "A", text: "Early observers could not see as many stars as we can." },
            { letter: "B", text: "Modern scientists still disagree about why stars move." },
            { letter: "C", text: "The sky turns around Earth only during certain seasons." },
            { letter: "D", text: "An old idea was replaced by one that flips the cause." }
          ],
          correct: "D"
        },
        {
          id: "motionless",
          sol: "10.RV.1.A",
          stem: "The word motionless in sentence 15 combines the root motion with the suffix -less, as in fearless and careless. Based on this, motionless means —",
          choices: [
            { letter: "A", text: "without movement" },
            { letter: "B", text: "moving in circles" },
            { letter: "C", text: "full of energy" },
            { letter: "D", text: "slowly fading" }
          ],
          correct: "A"
        },
        {
          id: "modest",
          sol: "10.RV.1.C",
          stem: "In sentence 12, the phrase not even among the forty brightest stars helps the reader understand that modest means —",
          choices: [
            { letter: "A", text: "very far away" },
            { letter: "B", text: "newly discovered" },
            { letter: "C", text: "not very showy" },
            { letter: "D", text: "shy and quiet" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── LONG · Informational (level 3) · local history museum ───────── */
    {
      id: "g10-ri-c76-display-case",
      family: "G10",
      title: "The Enemies in the Display Case",
      kind: "Informational · 10.RI",
      blurb: "Light, damp air, hungry insects and curious fingers: what a small museum fights every day.",
      level: 3,
      passage:
        "<p>" + N(1) + "Visitors to a small local history museum tend to imagine that the objects behind glass are finished with time, that once a quilt or a saddle reaches its case, it simply waits there, unchanged, for the next school group. " +
        N(2) + "Conservators know better. " +
        N(3) + "An object on display is under quiet, continuous attack, and the attackers are mostly ordinary: light, moisture, insects, and the human hand. " +
        N(4) + "Much of the work of a museum, especially a small one with a modest budget, consists of slowing damage that can never be fully stopped.</p>" +
        "<p>" + N(5) + "Light is the most deceptive threat because its effects are invisible from one day to the next. " +
        N(6) + "Ultraviolet rays and even ordinary visible light break down the dyes and fibers in textiles, paper, and photographs, and the damage is cumulative: every hour of exposure adds to the total, and none of it can be reversed. " +
        N(7) + "A faded flag cannot be un-faded. " +
        N(8) + "For this reason, many museums rotate fragile items, displaying a hand-stitched sampler for three or four months and then returning it to a dark storage drawer for several years. " +
        N(9) + "Some keep gallery lights low and ask visitors not to use camera flashes, a request that occasionally draws complaints from guests who assume the rule is about copyright.</p>" +
        "<p>" + N(10) + "Moisture causes a different kind of harm. " +
        N(11) + "When the air is too damp, metal rusts and mold blooms on leather and paper; when it is too dry, wood shrinks and cracks. " +
        N(12) + "Worse than either extreme is rapid swinging between them, which makes materials swell and contract until they split. " +
        N(13) + "Large institutions control humidity with expensive climate systems, but a small museum can achieve a surprising amount with simple tools. " +
        N(14) + "Packets of silica gel, the same beads found in new shoeboxes, can steady the air inside a sealed case, and a forty-dollar data logger can record conditions every fifteen minutes so staff can spot trouble early.</p>" +
        "<p>" + N(15) + "Insects are perhaps the least glamorous enemy. " +
        N(16) + "Clothes moths, carpet beetles, and silverfish feed on wool, feathers, and paper glue, often working unseen in the back of a drawer. " +
        N(17) + "Rather than spraying chemicals that might harm the collection, many museums practice what conservators call integrated pest management: setting sticky traps, inspecting new donations in isolation, and banning food from gallery spaces.</p>" +
        "<p>" + N(18) + "Finally, there is handling, the threat museums can control most directly and the one visitors find hardest to accept. " +
        N(19) + "Skin oils leave fingerprints that can etch into metal over years. " +
        N(20) + "Even the white cotton gloves familiar from television are not always the answer; they can snag on fragile fabric or make glass slippery, so many conservators now prefer nitrile gloves or simply clean, dry hands for certain objects. " +
        N(21) + "The guiding principle is that every touch has a cost. " +
        N(22) + "A museum's job, in the end, is to let today's visitors see the past while keeping enough of it intact for visitors a century from now.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the passage about museum objects?",
          choices: [
            { letter: "A", text: "Small museums should not display fragile objects at all." },
            { letter: "B", text: "Insects cause more damage to museum objects than light." },
            { letter: "C", text: "Museums work constantly to slow damage from common threats." },
            { letter: "D", text: "Visitors are the main reason museum objects wear out." }
          ],
          correct: "C"
        },
        {
          id: "budget",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the idea that a small museum can protect objects without a large budget?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "C"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          stem: "How is the passage organized after the first paragraph?",
          choices: [
            { letter: "A", text: "It examines four threats one at a time." },
            { letter: "B", text: "It traces one object's history by decade." },
            { letter: "C", text: "It compares two museums point by point." },
            { letter: "D", text: "It lists rules for visitors by importance." }
          ],
          correct: "A"
        },
        {
          id: "flag",
          sol: "10.RI.2.B",
          stem: "The very short sentence 7, A faded flag cannot be un-faded, mainly emphasizes that damage from light is —",
          choices: [
            { letter: "A", text: "easy to see right away" },
            { letter: "B", text: "permanent once it occurs" },
            { letter: "C", text: "limited to old flags" },
            { letter: "D", text: "caused mostly by flashes" }
          ],
          correct: "B"
        },
        {
          id: "copyright",
          sol: "10.RI.1.C",
          stem: "The author mentions guests who assume the flash rule is about copyright (sentence 9) mainly to —",
          choices: [
            { letter: "A", text: "argue that museums should allow all photography" },
            { letter: "B", text: "explain why museums sell photos in their gift shops" },
            { letter: "C", text: "suggest that most visitors break the rules on purpose" },
            { letter: "D", text: "show that visitors may misread the reason for a rule" }
          ],
          correct: "D"
        },
        {
          id: "cumulative",
          sol: "10.RV.1.A",
          stem: "The word cumulative in sentence 6 is related to the word accumulate. Both words carry the idea of —",
          choices: [
            { letter: "A", text: "building up over time" },
            { letter: "B", text: "breaking apart quickly" },
            { letter: "C", text: "hiding from view" },
            { letter: "D", text: "spreading evenly" }
          ],
          correct: "A"
        },
        {
          id: "deceptive",
          sol: "10.RV.1.D",
          stem: "The author calls light the most deceptive threat (sentence 5) rather than the most dangerous. Compared with dangerous, deceptive suggests that light —",
          choices: [
            { letter: "A", text: "causes more harm than any other threat" },
            { letter: "B", text: "does harm in ways that are hard to notice" },
            { letter: "C", text: "can be stopped easily with simple tools" },
            { letter: "D", text: "affects only objects made of metal" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's attitude toward small museums in sentences 13 and 14 is best described as —",
          choices: [
            { letter: "A", text: "doubtful" },
            { letter: "B", text: "impatient" },
            { letter: "C", text: "indifferent" },
            { letter: "D", text: "encouraging" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── LONG · Vocabulary (level 2) · summer job at a bike shop ───────── */
    {
      id: "g10-rv-c76-coffee-cans",
      family: "G10",
      title: "The Coffee Cans",
      kind: "Vocabulary · 10.RV",
      blurb: "A summer at a bike shop starts with thousands of bolts and a boss who notices everything.",
      level: 2,
      passage:
        "<p>" + N(1) + "When Ravi Menon was hired at Hillcrest Cycle Works for the summer, he admitted at the interview that he was a <strong>novice</strong>. " +
        N(2) + "He could ride a bike and pump a tire, but he had never adjusted a derailleur or trued a wheel, and he was not completely sure what either phrase meant. " +
        N(3) + "Mrs. Brandt, the owner, hired him anyway. " +
        N(4) + "\"Beginners don't have bad habits yet,\" she said. \"That makes my job easier.\"</p>" +
        "<p>" + N(5) + "Mrs. Brandt was <strong>meticulous</strong> about everything. " +
        N(6) + "Every wrench hung on the pegboard inside its own painted outline, every receipt was filed by date, and no bike left the shop until she had squeezed each brake lever and spun each wheel herself. " +
        N(7) + "For the first two weeks, Ravi's job was to clean and sort parts: thousands of tiny bolts, washers, and ball bearings that had collected in coffee cans over the years. " +
        N(8) + "The work was <strong>tedious</strong>, the same motions over and over for hours, and by the third afternoon he was counting the minutes until closing.</p>" +
        "<p>" + N(9) + "His coworker, Desmond, made the time pass faster. " +
        N(10) + "Desmond was <strong>gregarious</strong>, the kind of person who learned every customer's name and the name of their dog, and he talked through every repair as if hosting a cooking show. " +
        N(11) + "\"This chain,\" he would announce to anyone nearby, \"has seen things.\" " +
        N(12) + "Customers left laughing, and many came back just to tell him how their rides had gone.</p>" +
        "<p>" + N(13) + "In July, a girl named Lucía brought in a bike that had spent a winter buried under a collapsed shed. " +
        N(14) + "The frame was bent near the front, the wheels were warped into potato-chip shapes, and the seat had split. " +
        N(15) + "Ravi assumed it was headed for the scrap pile. " +
        N(16) + "But Mrs. Brandt studied it for a while and said they could <strong>salvage</strong> some of it. " +
        N(17) + "Together, they stripped the bike down and rescued what could still be used: the handlebars, the pedals, the brake levers, and a nearly new chain. " +
        N(18) + "Ravi built those pieces onto a used frame from the back room, and when he came to the bolts, he discovered that the cans he had sorted for weeks now held exactly the sizes he needed, ready in seconds.</p>" +
        "<p>" + N(19) + "Lucía rode away on what was, in a sense, half her old bike and half a new one. " +
        N(20) + "That evening, Mrs. Brandt handed Ravi a key to the shop. " +
        N(21) + "\"You know where everything is now,\" she said. \"That makes you <strong>indispensable</strong>.\" " +
        N(22) + "Ravi laughed, but on the ride home he kept thinking about the coffee cans. " +
        N(23) + "The boring job, it turned out, had been the beginning of the real one.</p>",
      claims: [
        {
          id: "novice",
          sol: "10.RV.1.B",
          stem: "Based on sentences 2 through 4, the word novice in sentence 1 most nearly means —",
          choices: [
            { letter: "A", text: "a beginner" },
            { letter: "B", text: "a rider" },
            { letter: "C", text: "a helper" },
            { letter: "D", text: "an expert" }
          ],
          correct: "A"
        },
        {
          id: "novroot",
          sol: "10.RV.1.A",
          stem: "The word novice shares the root nov- with renovate and novelty. The root nov- most nearly means —",
          choices: [
            { letter: "A", text: "old" },
            { letter: "B", text: "skill" },
            { letter: "C", text: "new" },
            { letter: "D", text: "work" }
          ],
          correct: "C"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.C",
          stem: "Which detail from paragraph 2 best helps the reader understand the meaning of meticulous?",
          choices: [
            { letter: "A", text: "Ravi had to clean and sort parts for two weeks." },
            { letter: "B", text: "The bolts had collected in coffee cans for years." },
            { letter: "C", text: "Ravi counted the minutes until closing time." },
            { letter: "D", text: "Each wrench hung inside its own painted outline." }
          ],
          correct: "D"
        },
        {
          id: "tedious",
          sol: "10.RV.1.C",
          stem: "In sentence 8, the phrase the same motions over and over for hours helps the reader understand that tedious means —",
          choices: [
            { letter: "A", text: "risky and difficult" },
            { letter: "B", text: "repetitive and dull" },
            { letter: "C", text: "messy and greasy" },
            { letter: "D", text: "quick and simple" }
          ],
          correct: "B"
        },
        {
          id: "gregarious",
          sol: "10.RV.1.D",
          stem: "The author calls Desmond gregarious rather than loud. Compared with loud, gregarious suggests that Desmond is —",
          choices: [
            { letter: "A", text: "noisy in a way that bothers customers" },
            { letter: "B", text: "nervous about talking to strangers" },
            { letter: "C", text: "sociable in a way that draws people in" },
            { letter: "D", text: "careless about the repairs he does" }
          ],
          correct: "C"
        },
        {
          id: "salvage",
          sol: "10.RV.1.B",
          stem: "As it is used in sentence 16, salvage most nearly means to —",
          choices: [
            { letter: "A", text: "sell for scrap" },
            { letter: "B", text: "rescue usable parts" },
            { letter: "C", text: "paint and polish" },
            { letter: "D", text: "throw out entirely" }
          ],
          correct: "B"
        },
        {
          id: "indispensable",
          sol: "10.RV.1.A",
          stem: "Indispensable (sentence 21) combines in- (not), dispense (as in dispense with, meaning to do without), and -able. Based on these parts, indispensable means —",
          choices: [
            { letter: "A", text: "easy to replace" },
            { letter: "B", text: "able to give orders" },
            { letter: "C", text: "ready to leave soon" },
            { letter: "D", text: "too needed to lose" }
          ],
          correct: "D"
        },
        {
          id: "fussy",
          sol: "10.RV.1.D",
          stem: "The author describes Mrs. Brandt as meticulous rather than fussy. Compared with fussy, meticulous suggests that her carefulness is —",
          choices: [
            { letter: "A", text: "purposeful and admirable" },
            { letter: "B", text: "annoying and pointless" },
            { letter: "C", text: "rushed and incomplete" },
            { letter: "D", text: "secret and hidden" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────── LONG · Paired texts (level 2) · part-time summer jobs ───────── */
    {
      id: "g10-dsr-c76-farm-stand",
      family: "G10",
      title: "More Than a Paycheck",
      kind: "Paired texts · 10.DSR",
      blurb: "A student remembers a summer at a farm stand; an article explains what first jobs really teach.",
      level: 2,
      passage:
        "<p><strong>Text 1 — from a student essay, \"Corn, Cash, and Conversation\"</strong></p>" +
        "<p>" + N(1) + "The summer I turned sixteen, I worked at the Okonjo family's farm stand on Route 14, selling sweet corn, peaches, and tomatoes from a wooden shed with a hand-painted sign. " +
        N(2) + "I took the job because I wanted money for a used laptop, and for the first week money was all I thought about. " +
        N(3) + "I counted the hours, multiplied them by my wage, and imagined the laptop getting closer with each ear of corn. " +
        N(4) + "Then something shifted. " +
        N(5) + "Mrs. Okonjo asked me to run the stand alone on Saturday mornings, which meant opening the cash box, setting prices for bruised peaches, and answering questions I did not always know how to answer. " +
        N(6) + "A man once asked whether the tomatoes were grown without pesticides, and instead of guessing, I walked out to the field and asked Mr. Okonjo, who spent ten minutes explaining his methods. " +
        N(7) + "I came back and repeated it all to the customer, who bought two baskets. " +
        N(8) + "By August, I knew which regulars wanted corn picked that morning and which ones liked to haggle over prices just for fun. " +
        N(9) + "I did buy the laptop. " +
        N(10) + "But what I actually carried home that summer was harder to price: the feeling that adults could trust me with something real, and the discovery that I could figure out what I didn't know.</p>" +
        "<p><strong>Text 2 — \"Beyond the Paycheck\"</strong></p>" +
        "<p>" + N(11) + "Each summer, many teenagers take part-time jobs at pools, restaurants, camps, grocery stores, and shops, often earning their very first paychecks. " +
        N(12) + "The obvious reward is income, but people who study youth employment point to benefits that last longer than a paycheck. " +
        N(13) + "Teens who work moderate hours tend to report growth in what employers call soft skills: communicating with strangers, managing time, and solving problems without step-by-step instructions. " +
        N(14) + "Hiring managers often say these skills are harder to teach than any technical task, such as running a register or stocking shelves. " +
        N(15) + "A first job also offers practice in handling responsibility, from showing up on time to keeping track of money and following through on promises made to a supervisor. " +
        N(16) + "Some studies suggest that teens who hold summer jobs are more likely to stay employed in their early twenties, though researchers caution that motivated students may simply be more likely to seek work in the first place. " +
        N(17) + "The benefits are not automatic. " +
        N(18) + "Long work hours during the school year have been linked to lower grades and less sleep, and a job with no responsibility beyond repetitive tasks may teach little. " +
        N(19) + "The most valuable positions, experts say, are those that give young workers gradually increasing trust, along with an adult who explains the reasons behind the work.</p>",
      claims: [
        {
          id: "narrator",
          sol: "10.RL.1.C",
          stem: "In Text 1, sentences 2 and 3 characterize the narrator at the start of the summer as —",
          choices: [
            { letter: "A", text: "nervous about talking with customers" },
            { letter: "B", text: "focused mainly on earning money" },
            { letter: "C", text: "curious about how crops are grown" },
            { letter: "D", text: "unhappy with the Okonjo family" }
          ],
          correct: "B"
        },
        {
          id: "central2",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of Text 2?",
          choices: [
            { letter: "A", text: "Teens should avoid working during the school year." },
            { letter: "B", text: "Hiring managers prefer workers with technical training." },
            { letter: "C", text: "Summer jobs pay teenagers more than they once did." },
            { letter: "D", text: "First jobs can build lasting skills with real trust." }
          ],
          correct: "D"
        },
        {
          id: "caution",
          sol: "10.RI.2.C",
          stem: "In sentence 16, the author notes that motivated students may simply be more likely to seek work mainly to —",
          choices: [
            { letter: "A", text: "admit that the link may not prove jobs cause later success" },
            { letter: "B", text: "argue that motivated students do not need summer jobs" },
            { letter: "C", text: "suggest that employers should hire only motivated teens" },
            { letter: "D", text: "show that most studies of teen workers are inaccurate" }
          ],
          correct: "A"
        },
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which idea do Text 1 and Text 2 most clearly agree?",
          choices: [
            { letter: "A", text: "Farm work is the best kind of first job." },
            { letter: "B", text: "Teens should save their pay for school supplies." },
            { letter: "C", text: "A job's value can reach beyond the money earned." },
            { letter: "D", text: "Working long hours always lowers a teen's grades." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes a key difference between Text 1 and Text 2?",
          choices: [
            { letter: "A", text: "Text 1 tells one worker's story; Text 2 reports broad patterns." },
            { letter: "B", text: "Text 1 criticizes summer jobs; Text 2 defends them firmly." },
            { letter: "C", text: "Text 1 gives research results; Text 2 gives a personal memory." },
            { letter: "D", text: "Text 1 is about pay; Text 2 is about school schedules." }
          ],
          correct: "A"
        },
        {
          id: "valuable",
          sol: "10.DSR.E",
          stem: "Which sentence from Text 1 best illustrates the kind of position that Text 2 calls most valuable in sentence 19?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "B"
        },
        {
          id: "soft",
          sol: "10.DSR.D",
          stem: "Select TWO sentences from Text 1 that best show the soft skills described in sentence 13 of Text 2.",
          choices: [
            { letter: "A", text: "Sentence 2, about wanting money for a laptop" },
            { letter: "B", text: "Sentence 9, about buying the laptop in the end" },
            { letter: "C", text: "Sentence 6, about asking instead of guessing" },
            { letter: "D", text: "Sentence 8, about learning what regulars want" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "price",
          sol: "10.DSR.E",
          stem: "Using both texts, a reader could best conclude that the things the narrator calls harder to price (sentence 10) are —",
          choices: [
            { letter: "A", text: "the extra hours the narrator worked in August" },
            { letter: "B", text: "the discounts the narrator gave to regulars" },
            { letter: "C", text: "the tomatoes the narrator brought home" },
            { letter: "D", text: "the trust and skills Text 2 says outlast pay" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── LONG · Paired texts (level 3) · night-sky astronomy ───────── */
    {
      id: "g10-dsr-c76-dark-ridge",
      family: "G10",
      title: "The Sky We Lost",
      kind: "Paired texts · 10.DSR",
      blurb: "A city girl sees the Milky Way for the first time; an article explains where the stars went.",
      level: 3,
      passage:
        "<p><strong>Text 1 — from a short story, \"Above the Ridge\"</strong></p>" +
        "<p>" + N(1) + "Lagi had lived her whole life in the city, where the night sky was the color of weak tea and held, on a good evening, perhaps a dozen stars. " +
        N(2) + "So when her grandfather drove her three hours west to the Kessler Ridge star party, she expected to be politely bored. " +
        N(3) + "The field was full of telescopes and strangers speaking in low voices, their flashlights covered with red plastic so as not to spoil anyone's night vision. " +
        N(4) + "Someone told her to wait twenty minutes before looking up, to let her eyes adjust. " +
        N(5) + "She waited, mostly to be polite. " +
        N(6) + "When she finally tipped her head back, she made a sound she did not recognize as her own. " +
        N(7) + "The sky was not black at all; it was crowded, layered, depth behind depth, and across the middle ran a pale, ragged band like smoke from a fire too far away to see. " +
        N(8) + "\"The Milky Way,\" her grandfather said quietly. " +
        N(9) + "\"When I was a boy in Apia, we saw that from the beach every night. " +
        N(10) + "I thought it was gone.\" " +
        N(11) + "Lagi realized he had not meant that the stars were gone. " +
        N(12) + "He had meant that he had stopped expecting to see them, the way you stop expecting a friend who has moved away. " +
        N(13) + "They stayed until two in the morning, and on the drive home, as the glow of the city rose ahead of them like a dome, neither of them said much. " +
        N(14) + "Lagi kept looking back.</p>" +
        "<p><strong>Text 2 — \"Turning Down the Night\"</strong></p>" +
        "<p>" + N(15) + "In much of the world, people now live under skies so brightened by artificial light that the Milky Way cannot be seen from their homes. " +
        N(16) + "Astronomers call this skyglow, and it comes mainly from outdoor lighting that sends light sideways and upward instead of down onto the ground where it is needed. " +
        N(17) + "The loss is not only one of beauty. " +
        N(18) + "Bright nights can confuse migrating birds and disrupt the habits of insects and other animals, and researchers are studying how artificial light at night may affect human sleep. " +
        N(19) + "Unlike many environmental problems, though, light pollution can be reduced quickly and often cheaply. " +
        N(20) + "Shielded fixtures, which point light downward, can light a street as well as older designs while using less energy, and they often cost little more than the fixtures they replace. " +
        N(21) + "Warmer-colored bulbs scatter less in the atmosphere than harsh blue-white ones. " +
        N(22) + "Timers and motion sensors can switch off lights in empty parking lots after midnight, when almost no one needs them. " +
        N(23) + "Some towns have earned recognition as dark-sky communities by adopting such rules, and residents who were once skeptical now host their own stargazing nights. " +
        N(24) + "The darkness above us, supporters argue, is a shared resource worth protecting, and unlike a lost species, it can come back the moment we turn off the switch.</p>",
      claims: [
        {
          id: "smoke",
          sol: "10.RL.2.A",
          stem: "In sentence 7, comparing the Milky Way to smoke from a fire too far away to see suggests that the band of light is —",
          choices: [
            { letter: "A", text: "a sign that a storm is coming" },
            { letter: "B", text: "harmful to the people watching" },
            { letter: "C", text: "faint, with a vast, distant source" },
            { letter: "D", text: "caused by lights from the city" }
          ],
          correct: "C"
        },
        {
          id: "dome",
          sol: "10.RL.2.B",
          stem: "The image of the city's glow rising ahead like a dome in sentence 13 mainly creates a mood of —",
          choices: [
            { letter: "A", text: "quiet loss as they return to a hidden sky" },
            { letter: "B", text: "relief at reaching home safely at last" },
            { letter: "C", text: "excitement about the next star party" },
            { letter: "D", text: "fear of driving on dark roads at night" }
          ],
          correct: "A"
        },
        {
          id: "cheap",
          sol: "10.RI.1.B",
          stem: "Which sentence from Text 2 best supports the claim that light pollution can be reduced quickly and cheaply?",
          choices: [
            { letter: "A", text: "Sentence 15" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "The two texts differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "argues for new laws, while Text 2 tells a personal story" },
            { letter: "B", text: "shows loss through one family, while Text 2 explains causes" },
            { letter: "C", text: "praises city life, while Text 2 praises life in the country" },
            { letter: "D", text: "describes telescopes, while Text 2 describes migrating birds" }
          ],
          correct: "B"
        },
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "The author of Text 1 and the author of Text 2 would most likely agree that —",
          choices: [
            { letter: "A", text: "star parties are the best way to fight light pollution" },
            { letter: "B", text: "city residents do not care about the night sky" },
            { letter: "C", text: "telescopes are needed to see the Milky Way clearly" },
            { letter: "D", text: "a dark sky has real value and losing it matters" }
          ],
          correct: "D"
        },
        {
          id: "tea",
          sol: "10.DSR.E",
          stem: "How does Text 2 help explain the city sky described in sentence 1 of Text 1?",
          choices: [
            { letter: "A", text: "It shows the brownish glow comes from poorly aimed lights." },
            { letter: "B", text: "It shows that the city has fewer stars above it than the ridge." },
            { letter: "C", text: "It shows that weather in cities blocks most of the stars." },
            { letter: "D", text: "It shows that birds and insects crowd the city's night sky." }
          ],
          correct: "A"
        },
        {
          id: "gone",
          sol: "10.DSR.E",
          stem: "Read together, the grandfather's words I thought it was gone (sentence 10) and sentence 24 of Text 2 suggest that —",
          choices: [
            { letter: "A", text: "the stars he saw as a boy have burned out" },
            { letter: "B", text: "the grandfather was wrong about Apia's sky" },
            { letter: "C", text: "the sky he thought was lost could return" },
            { letter: "D", text: "the loss of dark skies is now permanent" }
          ],
          correct: "C"
        },
        {
          id: "actions",
          sol: "10.DSR.E",
          stem: "Using both texts, select TWO actions that would most likely make a sky like the one at Kessler Ridge visible closer to Lagi's city.",
          choices: [
            { letter: "A", text: "Replacing warm bulbs with bright blue-white ones" },
            { letter: "B", text: "Installing shielded fixtures that aim light down" },
            { letter: "C", text: "Covering flashlights with sheets of red plastic" },
            { letter: "D", text: "Using timers to turn off empty parking-lot lights" }
          ],
          correct: ["B", "D"]
        }
      ]
    },

    /* ───────── LONG · Poetry (level 1) · night-sky astronomy ───────── */
    {
      id: "g10-rl-c76-meteor-watch",
      family: "G10",
      title: "Meteor Watch, August",
      kind: "Poetry · 10.RL",
      blurb: "A quilt on cut hay, a little brother counting, and dust that writes in light.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Past midnight, Dad spreads the old quilt<br>" +
        L(2) + "on the cut hay behind the barn,<br>" +
        L(3) + "and my little brother lies beside me,<br>" +
        L(4) + "counting out loud before anything falls.<br>" +
        L(5) + "The sky is a dark field of its own,<br>" +
        L(6) + "planted thick with silver seed.<br>" +
        L(7) + "We wait. The crickets fill the waiting.<br>" +
        L(8) + "Somewhere a dog asks a question and gives up.<br>" +
        L(9) + "Then, there! A scratch of light,<br>" +
        L(10) + "a match struck once across the black<br>" +
        L(11) + "and gone before my finger finds it.<br>" +
        L(12) + "\"One,\" my brother whispers, as if it might hear.<br>" +
        L(13) + "Dad says they're only grains of dust,<br>" +
        L(14) + "smaller than the sand in my shoes,<br>" +
        L(15) + "burning up sixty miles above us.<br>" +
        L(16) + "I try to make that true and can't.<br>" +
        L(17) + "Dust should not be able to do this,<br>" +
        L(18) + "should not write its name so bright<br>" +
        L(19) + "on a page this wide and leave no mark.<br>" +
        L(20) + "By \"twelve\" my brother's voice is slow;<br>" +
        L(21) + "by \"fifteen,\" he is counting dreams.<br>" +
        L(22) + "I keep the tally for him, quietly,<br>" +
        L(23) + "the way you'd hold someone's place in line.<br>" +
        L(24) + "Tomorrow he'll ask how many, and I'll say<br>" +
        L(25) + "enough to know the dark is busy,<br>" +
        L(26) + "enough to know we stayed to see.</p>",
      claims: [
        {
          id: "field",
          sol: "10.RL.2.A",
          stem: "In lines 5 and 6, comparing the sky to a dark field planted thick with silver seed suggests that the stars are —",
          choices: [
            { letter: "A", text: "slowly growing brighter" },
            { letter: "B", text: "spread thickly everywhere" },
            { letter: "C", text: "arranged in neat rows" },
            { letter: "D", text: "about to fall to Earth" }
          ],
          correct: "B"
        },
        {
          id: "event",
          sol: "10.RL.1.B",
          stem: "Which line marks the moment when the family's long wait ends?",
          choices: [
            { letter: "A", text: "Line 9" },
            { letter: "B", text: "Line 12" },
            { letter: "C", text: "Line 16" },
            { letter: "D", text: "Line 20" }
          ],
          correct: "A"
        },
        {
          id: "brother",
          sol: "10.RL.1.C",
          stem: "Line 12, in which the brother whispers as if it might hear, characterizes him as —",
          choices: [
            { letter: "A", text: "bored and sleepy" },
            { letter: "B", text: "afraid of the dark" },
            { letter: "C", text: "proud and boastful" },
            { letter: "D", text: "excited and awed" }
          ],
          correct: "D"
        },
        {
          id: "dust",
          sol: "10.RL.2.C",
          stem: "What is ironic about the meteors as the speaker describes them in lines 13 through 19?",
          choices: [
            { letter: "A", text: "They fall closer than Dad thinks." },
            { letter: "B", text: "They appear only when no one looks." },
            { letter: "C", text: "Something as tiny as dust can dazzle." },
            { letter: "D", text: "The brother counts more than the speaker sees." }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RL.2.B",
          stem: "The overall tone of \"Meteor Watch, August\" is best described as —",
          choices: [
            { letter: "A", text: "tender and full of wonder" },
            { letter: "B", text: "restless and impatient" },
            { letter: "C", text: "gloomy and lonely" },
            { letter: "D", text: "playful and mocking" }
          ],
          correct: "A"
        },
        {
          id: "close",
          sol: "10.RL.3.A",
          stem: "How do the final two lines (lines 25 and 26) function in the poem?",
          choices: [
            { letter: "A", text: "They give the exact number of meteors seen." },
            { letter: "B", text: "They introduce a new problem for the family." },
            { letter: "C", text: "They explain the science of falling stars." },
            { letter: "D", text: "They sum up what the night has come to mean." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best supported by the poem as a whole?",
          choices: [
            { letter: "A", text: "Science explains away the beauty of nature." },
            { letter: "B", text: "Younger children cannot stay up late enough." },
            { letter: "C", text: "Wonder means more when shared with family." },
            { letter: "D", text: "Farm life is lonelier than life in the city." }
          ],
          correct: "C"
        },
        {
          id: "tally",
          sol: "10.RV.1.C",
          stem: "Based on lines 20 through 24, the word tally in line 22 most nearly means —",
          choices: [
            { letter: "A", text: "a secret wish" },
            { letter: "B", text: "a running count" },
            { letter: "C", text: "a bedtime story" },
            { letter: "D", text: "a soft blanket" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────── LONG · Drama (level 3) · local history museum ───────── */
    {
      id: "g10-rl-c76-suitcase-letters",
      family: "G10",
      title: "Sixty-One Letters",
      kind: "Drama · 10.RL",
      blurb: "A great-aunt brings her mother's letters to the town museum and does not like the word archive.",
      level: 3,
      passage:
        "<p><em>" + N(1) + "A cramped office at the Brantley Falls Heritage Museum. " +
        N(2) + "Boxes line the walls. " +
        N(3) + "MR. LINDQVIST, the curator, sits behind a cluttered desk. " +
        N(4) + "ESPERANZA RUIZ, in her seventies, sets a battered leather suitcase on the desk and opens it. " +
        N(5) + "Her great-nephew TEO, fifteen, hovers by the door.</em></p>" +
        "<p><strong>ESPERANZA:</strong> " + N(6) + "Sixty-one letters. " +
        N(7) + "My mother wrote them from the cannery to her sister in Monterrey, every week for six years. " +
        N(8) + "Her sister kept every one and mailed them back to us before she passed.</p>" +
        "<p><strong>MR. LINDQVIST:</strong> <em>(lifting one with great care)</em> " + N(9) + "Mrs. Ruiz, these are remarkable. " +
        N(10) + "We have the cannery's payroll books, but almost nothing written by the women who worked the lines. " +
        N(11) + "This fills a hole in our collection that I had stopped hoping to fill.</p>" +
        "<p><strong>ESPERANZA:</strong> " + N(12) + "Good. " +
        N(13) + "Then you'll want them in the front case, where the old fishing nets are now.</p>" +
        "<p><strong>MR. LINDQVIST:</strong> <em>(pausing)</em> " + N(14) + "We would certainly display some of them. " +
        N(15) + "Two or three at a time, rotated every few months so the light doesn't fade the ink. " +
        N(16) + "The rest would go into our archive downstairs, in acid-free folders, where researchers can request them.</p>" +
        "<p><strong>ESPERANZA:</strong> " + N(17) + "Downstairs. " +
        "<em>(to Teo)</em> " + N(18) + "You hear that? " +
        N(19) + "\"Archive\" is a polite word for a basement.</p>" +
        "<p><strong>TEO:</strong> " + N(20) + "Tía, he said people can request them.</p>" +
        "<p><strong>ESPERANZA:</strong> " + N(21) + "And how many people knock on a basement door asking for a cannery worker's letters? " +
        N(22) + "My mother spent her whole life being the person nobody asked about. " +
        N(23) + "I did not carry her across town in a suitcase so she could be quiet again.</p>" +
        "<p><em>" + N(24) + "A silence. " +
        N(25) + "Mr. Lindqvist sets the letter down.</em></p>" +
        "<p><strong>MR. LINDQVIST:</strong> " + N(26) + "That's fair. " +
        N(27) + "I won't pretend most visitors go downstairs.</p>" +
        "<p><strong>TEO:</strong> <em>(slowly, thinking it through)</em> " + N(28) + "What if the letters weren't the only thing? " +
        N(29) + "Tía, you tell me stories about her all the time, like the one about the strike, or the radio she bought with her first raise. " +
        N(30) + "Nobody else knows those. " +
        N(31) + "Could the museum record you telling them?</p>" +
        "<p><strong>MR. LINDQVIST:</strong> " + N(32) + "An oral history. " +
        "<em>(brightening)</em> " + N(33) + "We could play it at the case, beside whichever letters are out, and link the recording to the archive so anyone listening can find the rest.</p>" +
        "<p><strong>ESPERANZA:</strong> " + N(34) + "So people would hear her name out loud.</p>" +
        "<p><strong>MR. LINDQVIST:</strong> " + N(35) + "In your voice, yes.</p>" +
        "<p><strong>ESPERANZA:</strong> <em>(looking at the suitcase for a long moment, then at Teo)</em> " + N(36) + "So you've been listening to me all these years. " +
        N(37) + "I thought you were just being polite.</p>" +
        "<p><strong>TEO:</strong> " + N(38) + "Mostly I was hungry. " +
        N(39) + "But I was listening too.</p>" +
        "<p><em>" + N(40) + "Esperanza laughs, then pulls a chair closer to the desk.</em></p>" +
        "<p><strong>ESPERANZA:</strong> " + N(41) + "Get your recorder, Mr. Lindqvist. " +
        N(42) + "We'll start with the radio.</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict of the scene is best described as a disagreement between —",
          choices: [
            { letter: "A", text: "Esperanza's wish for her mother to be seen and the museum's need to protect the letters" },
            { letter: "B", text: "Teo's wish to keep the letters at home and Esperanza's plan to donate them" },
            { letter: "C", text: "Mr. Lindqvist's interest in fishing nets and Esperanza's interest in the cannery" },
            { letter: "D", text: "Esperanza's memory of the strike and Mr. Lindqvist's payroll records of it" }
          ],
          correct: "A"
        },
        {
          id: "concern",
          sol: "10.RL.1.C",
          stem: "Sentences 22 and 23 reveal that Esperanza's deepest concern is that —",
          choices: [
            { letter: "A", text: "the museum will charge her to store the letters" },
            { letter: "B", text: "researchers will misread her mother's handwriting" },
            { letter: "C", text: "her mother will once again go unrecognized" },
            { letter: "D", text: "Teo will lose interest in the family's history" }
          ],
          correct: "C"
        },
        {
          id: "carry",
          sol: "10.RL.2.A",
          stem: "In sentence 23, Esperanza says she carried her mother across town in a suitcase. This figurative statement suggests that she —",
          choices: [
            { letter: "A", text: "found the suitcase too heavy to bring alone" },
            { letter: "B", text: "sees the letters as standing for her mother" },
            { letter: "C", text: "regrets moving her mother's belongings so often" },
            { letter: "D", text: "wants the museum to display the suitcase too" }
          ],
          correct: "B"
        },
        {
          id: "rotated",
          sol: "10.RV.1.B",
          stem: "In sentence 15, the word rotated most nearly means —",
          choices: [
            { letter: "A", text: "spun in a circle" },
            { letter: "B", text: "copied by hand" },
            { letter: "C", text: "sorted by date" },
            { letter: "D", text: "shown in turns" }
          ],
          correct: "D"
        },
        {
          id: "silence",
          sol: "10.RL.3.A",
          stem: "The stage directions in sentences 24 and 25 mainly serve to —",
          choices: [
            { letter: "A", text: "mark the moment the curator takes Esperanza's point to heart" },
            { letter: "B", text: "show that Mr. Lindqvist has decided to refuse the donation" },
            { letter: "C", text: "suggest that Teo is embarrassed by his great-aunt's anger" },
            { letter: "D", text: "reveal that one of the letters has been damaged by handling" }
          ],
          correct: "A"
        },
        {
          id: "hungry",
          sol: "10.RL.2.C",
          stem: "The tone of Teo's reply in sentences 38 and 39 is best described as —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "formal and stiff" },
            { letter: "C", text: "nervous and unsure" },
            { letter: "D", text: "joking yet sincere" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the scene in the curator's office?",
          choices: [
            { letter: "A", text: "Museums care more about objects than about people." },
            { letter: "B", text: "Keeping the past includes keeping ordinary voices." },
            { letter: "C", text: "Young people rarely listen to their older relatives." },
            { letter: "D", text: "Family letters should never leave the family home." }
          ],
          correct: "B"
        },
        {
          id: "brighten",
          sol: "10.RL.2.B",
          stem: "The stage direction brightening before sentence 33 signals a shift in the scene's mood toward —",
          choices: [
            { letter: "A", text: "tense suspicion" },
            { letter: "B", text: "polite boredom" },
            { letter: "C", text: "shared hope" },
            { letter: "D", text: "quiet grief" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── LONG · Functional text (level 1) · bike repair ───────── */
    {
      id: "g10-ri-c76-fix-it-clinic",
      family: "G10",
      title: "Saturday Bike Fix-It Clinic",
      kind: "Functional text · 10.RI",
      blurb: "A library handout: free repair help, an at-home safety check, and how to fix a flat.",
      level: 1,
      passage:
        "<p><strong>Westbrook Public Library Bike Fix-It Clinic</strong> " + N(1) + "Every Saturday from June 7 through August 30, volunteers from the Westbrook Cycling Club will set up repair stands in the library's back parking lot from 10 a.m. to 1 p.m. " +
        N(2) + "The clinic is free and open to riders of all ages. " +
        N(3) + "Volunteers will help you fix your own bike; they will not take bikes to repair and return later.</p>" +
        "<p><strong>What to Bring</strong> " + N(4) + "Bring your bike, a water bottle, and any replacement parts you already own. " +
        N(5) + "The clinic keeps a small supply of inner tubes, brake pads, and chain oil, which are sold at cost. " +
        N(6) + "Tubes are $5 each, and brake pads are $4 a pair. " +
        N(7) + "Riders under 18 must have a parent or guardian sign a release form, available at the circulation desk or on the library's website.</p>" +
        "<p><strong>Before You Come: The ABC Check</strong> " + N(8) + "Many problems can be spotted at home in two minutes. " +
        N(9) + "A is for air: squeeze each tire, and check the pressure printed on the side of the tire. " +
        N(10) + "B is for brakes: squeeze each lever, which should stop well before it touches the handlebar. " +
        N(11) + "C is for chain: look for rust and listen for squeaks while you turn the pedals backward. " +
        N(12) + "If you find a problem, write it down so a volunteer can start right away.</p>" +
        "<p><strong>How to Fix a Flat Tire</strong> " + N(13) + "Flat tires are the most common repair at the clinic, and they are easy to learn. " +
        N(14) + "First, shift to the smallest rear gear, open the brake if needed, and remove the wheel. " +
        N(15) + "Next, let out any remaining air and use two tire levers to pry one side of the tire off the rim. " +
        N(16) + "Pull out the old tube and run your fingers carefully around the inside of the tire to find the thorn or glass that caused the flat; if you skip this step, the new tube will likely go flat too. " +
        N(17) + "Put a little air into the new tube so it holds its shape, tuck it inside the tire, and push the tire back onto the rim with your thumbs. " +
        N(18) + "Finally, inflate the tire to the recommended pressure and reinstall the wheel.</p>" +
        "<p><strong>Safety and Weather</strong> " + N(19) + "Helmets are required for anyone test-riding in the lot. " +
        N(20) + "The clinic will be canceled if it is raining at 9 a.m.; check the library's website or call the front desk at 555-0142 for updates. " +
        N(21) + "Questions about the clinic can be sent to the Westbrook Cycling Club through the library's events page.</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "This handout is written mainly for —",
          choices: [
            { letter: "A", text: "bike shop owners looking to hire new mechanics" },
            { letter: "B", text: "riders who want help maintaining their own bikes" },
            { letter: "C", text: "library staff who will run the repair stands" },
            { letter: "D", text: "club members planning a summer bike race" }
          ],
          correct: "B"
        },
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes the clinic described in the handout?",
          choices: [
            { letter: "A", text: "A paid service that repairs bikes and returns them later" },
            { letter: "B", text: "A summer class that teaches riders to race safely" },
            { letter: "C", text: "A shop that sells new bikes and parts at a discount" },
            { letter: "D", text: "Free weekly help for riders fixing their own bikes" }
          ],
          correct: "D"
        },
        {
          id: "thorn",
          sol: "10.RI.1.B",
          stem: "According to sentence 16, why should a rider feel around the inside of the tire before putting in a new tube?",
          choices: [
            { letter: "A", text: "To find what caused the flat so it won't happen again" },
            { letter: "B", text: "To check that the tire is the right size for the rim" },
            { letter: "C", text: "To make sure the old tube has no air left inside it" },
            { letter: "D", text: "To clean off dirt before the new tube is inflated" }
          ],
          correct: "A"
        },
        {
          id: "steps",
          sol: "10.RI.2.A",
          stem: "How are sentences 14 through 18 organized?",
          choices: [
            { letter: "A", text: "As a problem followed by several possible causes" },
            { letter: "B", text: "As a comparison of two ways to repair a tire" },
            { letter: "C", text: "As a set of steps in the order they are done" },
            { letter: "D", text: "As a list of tools ranked from cheapest to costliest" }
          ],
          correct: "C"
        },
        {
          id: "abc",
          sol: "10.RI.2.B",
          stem: "The handout labels its at-home check with the letters A, B, and C (sentences 9 through 11) mainly to —",
          choices: [
            { letter: "A", text: "show which repairs cost the most money" },
            { letter: "B", text: "rank bike problems from worst to least serious" },
            { letter: "C", text: "match the order of the clinic's repair stands" },
            { letter: "D", text: "make the three checks easy to remember" }
          ],
          correct: "D"
        },
        {
          id: "together",
          sol: "10.RI.2.C",
          stem: "Which statement is best supported by sentences 3 and 13 together?",
          choices: [
            { letter: "A", text: "Riders with flats are expected to learn the repair." },
            { letter: "B", text: "Volunteers will fix flat tires only for riders under 18." },
            { letter: "C", text: "Flat tires must be repaired at home before the clinic." },
            { letter: "D", text: "The clinic will not help with flat tires on rainy days." }
          ],
          correct: "A"
        },
        {
          id: "atcost",
          sol: "10.RV.1.B",
          stem: "In sentence 5, the phrase sold at cost most nearly means sold —",
          choices: [
            { letter: "A", text: "at a high price to raise money" },
            { letter: "B", text: "only to club members" },
            { letter: "C", text: "for what the clinic paid" },
            { letter: "D", text: "after a long wait" }
          ],
          correct: "C"
        },
        {
          id: "pry",
          sol: "10.RV.1.C",
          stem: "Based on the words use two tire levers in sentence 15, the word pry most nearly means to —",
          choices: [
            { letter: "A", text: "fill with air" },
            { letter: "B", text: "force loose" },
            { letter: "C", text: "look at closely" },
            { letter: "D", text: "wrap tightly" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────── LONG · Argument (level 2) · cycling ───────── */
    {
      id: "g10-ri-c76-bike-library",
      family: "G10",
      title: "Lend Us Some Wheels",
      kind: "Argument · 10.RI",
      blurb: "A student editorial argues that the town library should lend bicycles to get teens to summer jobs.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every June, the parking lot at Carver Ridge High School empties out, and hundreds of students who could walk to class during the school year suddenly find themselves stranded. " +
        N(2) + "Summer jobs, swim practice, and volunteer shifts are scattered across town, and the nearest bus line runs only twice an hour. " +
        N(3) + "Many families cannot spare a car, and a new bicycle can cost more than a month of part-time pay. " +
        N(4) + "Carver Ridge Public Library already lends books, laptops, and even fishing poles. " +
        N(5) + "It should lend bicycles too.</p>" +
        "<p>" + N(6) + "The idea is not new or untested. " +
        N(7) + "In nearby Millbrook, the public library started a bike-lending program four years ago with twelve donated bikes. " +
        N(8) + "Patrons check out a bike with their library card for up to one week, along with a helmet and a lock. " +
        N(9) + "According to that library's annual report, the bikes were checked out more than 900 times last year, and the waiting list in July sometimes reached thirty names. " +
        N(10) + "A survey of borrowers found that about half used the bikes to get to work or school, not just for fun.</p>" +
        "<p>" + N(11) + "A bike library would also cost far less than people might assume. " +
        N(12) + "Residents donate old bikes all the time; the thrift store on Elm Street turns away several a month because it has no room for them. " +
        N(13) + "Volunteers from the high school's engineering club and local cyclists could repair and maintain the fleet, learning practical skills in the process. " +
        N(14) + "The main expenses would be helmets, locks, and a storage rack, which Millbrook covered with a single community grant.</p>" +
        "<p>" + N(15) + "Critics will argue that the bikes will be stolen or wrecked. " +
        N(16) + "This concern deserves a serious answer, and the evidence provides one. " +
        N(17) + "Millbrook has lost exactly two bikes in four years, roughly the same rate at which it loses laptops. " +
        N(18) + "Borrowers who return a bike damaged pay a small repair fee, just as they would for a torn book. " +
        N(19) + "Some wear and tear is inevitable, but a program that occasionally replaces a chain is hardly a reckless gamble.</p>" +
        "<p>" + N(20) + "Finally, a bike library fits the purpose of a public library itself. " +
        N(21) + "Libraries exist so that people who cannot afford to own something can still use it, whether that is a reference book, an internet connection, or a quiet place to study. " +
        N(22) + "Transportation is just as much a barrier to opportunity as any of these. " +
        N(23) + "A teenager who cannot reach a job cannot hold one.</p>" +
        "<p>" + N(24) + "The library board meets on the second Tuesday of every month, and public comments are welcome. " +
        N(25) + "Students, parents, and anyone with a dusty bicycle in the garage should attend and ask the board to start a pilot program this spring. " +
        N(26) + "Twelve bikes would be a modest beginning. " +
        N(27) + "For a student with a job across town, it could be the difference between a summer of earning and a summer of waiting.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the author's central claim in the editorial?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 26" }
          ],
          correct: "C"
        },
        {
          id: "practical",
          sol: "10.RI.1.B",
          stem: "Which detail most directly supports the idea that borrowers would use the bikes for practical needs?",
          choices: [
            { letter: "A", text: "Roughly half of borrowers rode to work or school." },
            { letter: "B", text: "Millbrook's program began with twelve donated bikes." },
            { letter: "C", text: "The thrift store turns away several bikes each month." },
            { letter: "D", text: "The library board meets on the second Tuesday monthly." }
          ],
          correct: "A"
        },
        {
          id: "critics",
          sol: "10.RI.2.C",
          stem: "In sentences 15 through 19, the author responds to critics mainly by —",
          choices: [
            { letter: "A", text: "admitting that the program would probably fail at first" },
            { letter: "B", text: "claiming that no bikes would ever be stolen or damaged" },
            { letter: "C", text: "suggesting that critics have never ridden a bicycle" },
            { letter: "D", text: "showing losses are rare and repair costs are covered" }
          ],
          correct: "D"
        },
        {
          id: "poles",
          sol: "10.RI.1.C",
          stem: "The author mentions that the library already lends fishing poles (sentence 4) mainly to —",
          choices: [
            { letter: "A", text: "suggest that students prefer fishing to working" },
            { letter: "B", text: "show that lending unusual items is already accepted" },
            { letter: "C", text: "complain that the library wastes money on hobbies" },
            { letter: "D", text: "explain where the library would store the bicycles" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "Which choice best describes how the editorial is organized?",
          choices: [
            { letter: "A", text: "Problem, proposal, reasons and rebuttal, then a call to act" },
            { letter: "B", text: "A story about one student, followed by a list of statistics" },
            { letter: "C", text: "A history of libraries, from oldest to most recent changes" },
            { letter: "D", text: "Two opposing plans compared point by point, then a verdict" }
          ],
          correct: "A"
        },
        {
          id: "reach",
          sol: "10.RI.2.B",
          stem: "The short sentence 23, A teenager who cannot reach a job cannot hold one, mainly emphasizes that —",
          choices: [
            { letter: "A", text: "most teenagers do not want summer jobs" },
            { letter: "B", text: "employers should offer teens free rides" },
            { letter: "C", text: "getting around directly limits opportunity" },
            { letter: "D", text: "libraries should help teens write résumés" }
          ],
          correct: "C"
        },
        {
          id: "stranded",
          sol: "10.RV.1.D",
          stem: "The author says students find themselves stranded (sentence 1) rather than simply stuck at home. Compared with stuck, stranded suggests that the students are —",
          choices: [
            { letter: "A", text: "choosing to relax for the summer" },
            { letter: "B", text: "angry at their parents and teachers" },
            { letter: "C", text: "busy with too many plans at once" },
            { letter: "D", text: "left with no way to get anywhere" }
          ],
          correct: "D"
        },
        {
          id: "inevitable",
          sol: "10.RV.1.B",
          stem: "In sentence 19, the word inevitable most nearly means —",
          choices: [
            { letter: "A", text: "very costly" },
            { letter: "B", text: "bound to happen" },
            { letter: "C", text: "easy to repair" },
            { letter: "D", text: "rarely noticed" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
